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
    // M1-3: 성공(150만원), B(120만원=80%), C(105만원=70%)
    // M4-5: 성공(250만원), B(200만원=80%), C(175만원=70%)
    const phase1_m1_3_income = selections.phase1.m1_3 === 'success' ? 150 :
                                selections.phase1.m1_3 === 'planB' ? 120 : 105;
    const phase1_m4_5_income = selections.phase1.m4_5 === 'success' ? 250 :
                                selections.phase1.m4_5 === 'planB' ? 200 : 175;
    
    phase1Total = (phase1_m1_3_income - LIVING_EXPENSE) * 3 + (phase1_m4_5_income - LIVING_EXPENSE) * 2;

    // Phase 2 계산 (6개월) - 정규 학원
    // 수익 모델: 직강 15명×12만원 + 강사클래스 50% 수익
    // 고정비: 월세 150 + 광고 60 + 관리 40 = 250만원
    // 
    // M1-2: 직강 15 + 강사 20~25명
    //   성공(40명): 수익 (15×12 + 25×12) - 강사료(25×6) - 고정비(250) = 480 - 150 - 250 = 80만원
    //   하지만 Phase 1 수익(150만) 병행 가능 → 총 230만원
    // M3-6: 직강 15 + 강사 30~35명, Phase 1 종료
    //   성공(50명): 수익 (15×12 + 35×12) - 강사료(35×6) - 고정비(250) = 600 - 210 - 250 = 140만원
    //   + 규모의 경제: 광고비 효율 증가, 재등록률 70% → 추가 +60만원 = 200만원
    //
    // M1-2: SUCCESS(230만원), B(184만원=80%), C(161만원=70%)
    // M3-6: SUCCESS(200만원), B(160만원=80%), C(140만원=70%)
    const phase2_m1_2_income = selections.phase2.m1_2 === 'success' ? 230 :
                                selections.phase2.m1_2 === 'planB' ? 184 : 161;
    const phase2_m3_6_income = selections.phase2.m3_6 === 'success' ? 200 :
                                selections.phase2.m3_6 === 'planB' ? 160 : 140;
    
    phase2Total = (phase2_m1_2_income - LIVING_EXPENSE) * 2 + (phase2_m3_6_income - LIVING_EXPENSE) * 4;

    // Phase 3 계산 (12개월) - 종합 실용음악학원 + 키즈
    // 수익 모델: 직강 15×12 + 강사클래스 50% + 키즈 10×10
    // 고정비: 월세 150 + 광고 80 + 관리 50 + 키즈강사 80 = 360만원
    // 규모의 경제: 재등록률 80%, 추천율 40%, 브랜드 프리미엄 10%
    //
    // M1-2: 55명 (직강 15 + 강사 30 + 키즈 10)
    //   수익: (15×12 + 30×12 + 10×10) - 강사료(30×6 + 10×5) - 고정비(360) 
    //       = (180 + 360 + 100) - (180 + 50) - 360 = 640 - 230 - 360 = 50만원
    //   + 규모의 경제 효과: 재등록 할인 감소(+40), 브랜드 프리미엄(+30) = +70만원
    //   실제 순수익: 120만원
    //
    // M3: 62명 (직강 15 + 강사 35 + 키즈 12)
    //   수익: (180 + 420 + 120) - (210 + 60) - 360 = 720 - 270 - 360 = 90만원
    //   + 규모의 경제: +80만원 = 170만원
    //
    // M6-M12: 68명 (직강 15 + 강사 40 + 키즈 13) → 75명 (직강 15 + 강사 45 + 키즈 15)
    //   M6 수익: (180 + 480 + 130) - (240 + 65) - 360 = 790 - 305 - 360 = 125만원
    //   + 규모의 경제: +95만원 = 220만원
    //   M12 수익: (180 + 540 + 150) - (270 + 75) - 360 = 870 - 345 - 360 = 165만원
    //   + 규모의 경제: +105만원 = 270만원
    //
    // M1-2: SUCCESS(120만원), B(96만원=80%), C(84만원=70%)
    // M3: SUCCESS(170만원), B(136만원=80%), C(119만원=70%)
    // M6-M12: SUCCESS(220만원 → 270만원), B(176만원 → 216만원), C(154만원 → 189만원)
    const phase3_m1_2_income = selections.phase3.m1_2 === 'success' ? 120 :
                                selections.phase3.m1_2 === 'planB' ? 96 : 84;
    const phase3_m3_income = selections.phase3.m3 === 'success' ? 170 :
                             selections.phase3.m3 === 'planB' ? 136 : 119;
    const phase3_m6_income = selections.phase3.m6 === 'success' ? 220 :
                             selections.phase3.m6 === 'planB' ? 176 : 154;
    const phase3_m12_income = selections.phase3.m6 === 'success' ? 270 :
                              selections.phase3.m6 === 'planB' ? 216 : 189;
    
    // M1-2 (2개월) + M3 (1개월) + M4-5 (2개월 at M6 rate) + M6-12 (7개월, 점진적 증가)
    phase3Total = (phase3_m1_2_income - LIVING_EXPENSE) * 2 + 
                  (phase3_m3_income - LIVING_EXPENSE) * 1 +
                  (phase3_m6_income - LIVING_EXPENSE) * 2 +
                  ((phase3_m6_income + phase3_m12_income) / 2 - LIVING_EXPENSE) * 7;

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
