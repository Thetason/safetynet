'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 시나리오 선택 타입 정의
export type ScenarioChoice = 'success' | 'planB' | 'planC';

export interface PhaseSelection {
  phase1: {
    m1_3: ScenarioChoice;
    m4_5: ScenarioChoice;
  };
  phase2: {
    m1_2: ScenarioChoice;
    m3_6: ScenarioChoice;
  };
  phase3: {
    m1_2: ScenarioChoice;
    m3: ScenarioChoice;
    m6: ScenarioChoice;
  };
}

// 기본 선택값 (모두 SUCCESS)
const defaultSelections: PhaseSelection = {
  phase1: {
    m1_3: 'success',
    m4_5: 'success',
  },
  phase2: {
    m1_2: 'success',
    m3_6: 'success',
  },
  phase3: {
    m1_2: 'success',
    m3: 'success',
    m6: 'success',
  },
};

interface ScenarioContextType {
  selections: PhaseSelection;
  updateSelection: (phase: keyof PhaseSelection, milestone: string, choice: ScenarioChoice) => void;
  resetSelections: () => void;
  calculateTotalSavings: () => {
    phase1Total: number;
    phase2Total: number;
    phase3Total: number;
    grandTotal: number;
    monthsToTarget: number;
    achievesTarget: boolean;
  };
}

const ScenarioContext = createContext<ScenarioContextType | undefined>(undefined);

export function ScenarioProvider({ children }: { children: ReactNode }) {
  const [selections, setSelections] = useState<PhaseSelection>(defaultSelections);

  // 로컬 스토리지에서 저장된 선택 불러오기
  useEffect(() => {
    const saved = localStorage.getItem('scenario-selections');
    if (saved) {
      try {
        setSelections(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved selections:', e);
      }
    }
  }, []);

  // 선택이 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('scenario-selections', JSON.stringify(selections));
  }, [selections]);

  const updateSelection = (phase: keyof PhaseSelection, milestone: string, choice: ScenarioChoice) => {
    setSelections(prev => ({
      ...prev,
      [phase]: {
        ...prev[phase],
        [milestone]: choice,
      },
    }));
  };

  const resetSelections = () => {
    setSelections(defaultSelections);
    localStorage.removeItem('scenario-selections');
  };

  // 저축 계산 로직
  const calculateTotalSavings = () => {
    const LIVING_EXPENSE = 100; // 100만원 고정
    let phase1Total = 0;
    let phase2Total = 0;
    let phase3Total = 0;

    // Phase 1 계산 (5개월)
    // M1-3: 성공(150만원), B(120만원), C(100만원)
    // M4-5: 성공(250만원), B(200만원), C(170만원)
    const phase1_m1_3_income = selections.phase1.m1_3 === 'success' ? 150 : 
                                selections.phase1.m1_3 === 'planB' ? 120 : 100;
    const phase1_m4_5_income = selections.phase1.m4_5 === 'success' ? 250 : 
                                selections.phase1.m4_5 === 'planB' ? 200 : 170;
    
    phase1Total = (phase1_m1_3_income - LIVING_EXPENSE) * 3 + (phase1_m4_5_income - LIVING_EXPENSE) * 2;

    // Phase 2 계산 (6개월)
    // M1-2: 성공(350만원), B(300만원), C(270만원)
    // M3-6: 성공(500만원), B(450만원), C(400만원)
    const phase2_m1_2_income = selections.phase2.m1_2 === 'success' ? 350 : 
                                selections.phase2.m1_2 === 'planB' ? 300 : 270;
    const phase2_m3_6_income = selections.phase2.m3_6 === 'success' ? 500 : 
                                selections.phase2.m3_6 === 'planB' ? 450 : 400;
    
    phase2Total = (phase2_m1_2_income - LIVING_EXPENSE) * 2 + (phase2_m3_6_income - LIVING_EXPENSE) * 4;

    // Phase 3 계산 (12개월)
    // M1-2: 성공(600만원), B(550만원), C(500만원)
    // M3: 성공(610만원), B(560만원), C(510만원)
    // M6: 성공(715만원), B(665만원), C(615만원)
    const phase3_m1_2_income = selections.phase3.m1_2 === 'success' ? 600 :
                                selections.phase3.m1_2 === 'planB' ? 550 : 500;
    const phase3_m3_income = selections.phase3.m3 === 'success' ? 610 :
                             selections.phase3.m3 === 'planB' ? 560 : 510;
    const phase3_m6_income = selections.phase3.m6 === 'success' ? 715 :
                             selections.phase3.m6 === 'planB' ? 665 : 615;
    
    phase3Total = (phase3_m1_2_income - LIVING_EXPENSE) * 2 + 
                  (phase3_m3_income - LIVING_EXPENSE) * 1 +
                  (phase3_m6_income - LIVING_EXPENSE) * 9; // M4-12까지 9개월

    const grandTotal = phase1Total + phase2Total + phase3Total;
    
    // 목표 달성 여부 및 소요 기간 계산
    const TARGET = 10000; // 1억원
    let monthsToTarget = 23; // 기본 23개월
    const achievesTarget = grandTotal >= TARGET;

    if (!achievesTarget) {
      // 23개월 후에도 부족하면 추가 개월 수 계산
      const remaining = TARGET - grandTotal;
      const phase3_final_monthly = phase3_m6_income - LIVING_EXPENSE;
      monthsToTarget = 23 + Math.ceil(remaining / phase3_final_monthly);
    }

    return {
      phase1Total,
      phase2Total,
      phase3Total,
      grandTotal,
      monthsToTarget,
      achievesTarget,
    };
  };

  return (
    <ScenarioContext.Provider value={{ selections, updateSelection, resetSelections, calculateTotalSavings }}>
      {children}
    </ScenarioContext.Provider>
  );
}

export function useScenario() {
  const context = useContext(ScenarioContext);
  if (context === undefined) {
    throw new Error('useScenario must be used within a ScenarioProvider');
  }
  return context;
}
