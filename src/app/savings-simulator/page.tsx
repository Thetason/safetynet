"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, RefreshCw } from 'lucide-react'
import { useState } from 'react'
import { useScenario } from '@/contexts/ScenarioContext'
import { Button } from '@/components/ui/button'

// Plan별 계산 로직
interface PlanData {
  name: string
  emoji: string
  color: string
  borderColor: string
  bgGradient: string
  phase1Total: number // 약 0.4년 고정
  phase2MonthlyAvg: number // 0.5년
  phase3MonthlyAvg: number // 1년
  targetMonths: number
  description: string
}

const plans: PlanData[] = [
  {
    name: 'Plan A (SUCCESS)',
    emoji: '🎯',
    color: 'green',
    borderColor: 'border-green-400/50',
    bgGradient: 'from-green-600 to-emerald-700',
    phase1Total: 625, // 고정
    phase2MonthlyAvg: 550, // 월평균 550만원
    phase3MonthlyAvg: 750, // 월평균 750만원
    targetMonths: 23,
    description: '100% 목표 달성'
  },
  {
    name: 'Plan B (80-99%)',
    emoji: '⚡',
    color: 'amber',
    borderColor: 'border-amber-400/50',
    bgGradient: 'from-amber-600 to-orange-600',
    phase1Total: 625,
    phase2MonthlyAvg: 480, // -13%
    phase3MonthlyAvg: 630, // -16%
    targetMonths: 26,
    description: '80-99% 달성'
  },
  {
    name: 'Plan C (60-79%)',
    emoji: '💖',
    color: 'pink',
    borderColor: 'border-pink-400/50',
    bgGradient: 'from-pink-600 to-rose-600',
    phase1Total: 625,
    phase2MonthlyAvg: 400, // -27%
    phase3MonthlyAvg: 520, // -31%
    targetMonths: 30,
    description: '60-79% 달성'
  },
  {
    name: 'Plan D (50-59%)',
    emoji: '💙',
    color: 'blue',
    borderColor: 'border-blue-400/50',
    bgGradient: 'from-blue-600 to-indigo-700',
    phase1Total: 625,
    phase2MonthlyAvg: 320, // -42%
    phase3MonthlyAvg: 420, // -44%
    targetMonths: 36,
    description: '50-59% 달성'
  }
]

function calculatePlanResults(plan: PlanData) {
  const phase1 = plan.phase1Total
  const phase2 = plan.phase2MonthlyAvg * 6
  const phase3 = plan.phase3MonthlyAvg * 12
  const total23Months = phase1 + phase2 + phase3

  // 1억 달성까지 필요한 개월수 계산 (내부 로직용)
  let monthsToTarget = 0
  let accumulated = phase1 + phase2

  if (accumulated >= 10000) {
    monthsToTarget = 11 // Phase 1+2에서 달성
  } else if (total23Months >= 10000) {
    // Phase 3 중간에 달성
    const remaining = 10000 - accumulated
    const additionalMonths = Math.ceil(remaining / plan.phase3MonthlyAvg)
    monthsToTarget = 11 + additionalMonths
  } else {
    // 약 2년 이후에도 필요
    const remaining = 10000 - total23Months
    const additionalMonths = Math.ceil(remaining / plan.phase3MonthlyAvg)
    monthsToTarget = 23 + additionalMonths
  }

  return {
    phase1,
    phase2,
    phase3,
    total23Months,
    monthsToTarget,
    achievesIn23Months: total23Months >= 10000
  }
}

export default function SavingsSimulatorPage() {
  const [selectedPlan, setSelectedPlan] = useState<number>(0)
  const { calculateTotalSavings, selections, resetSelections } = useScenario()

  const results = calculateTotalSavings()

  return (
    <div className="min-h-screen bg-slate-950 text-white py-8 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* 헤더 */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>메인으로</span>
          </Link>

          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-black mb-2 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                💰 2년 내 1억 저축 시뮬레이션
              </h1>
              <p className="text-sm text-slate-400">Phase 1 → Phase 2 → Phase 3 전체 누적 저축 분석</p>
            </div>
            <Button
              onClick={resetSelections}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              초기화
            </Button>
          </div>

          {/* 현재 선택 상태 */}
          <div className="mt-4 p-4 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-lg">
            <p className="text-sm font-bold text-indigo-300 mb-3">📌 현재 선택된 시나리오</p>
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-800/50 rounded p-3">
                <p className="text-slate-400 mb-2">Phase 1</p>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-300">M1-3:</span>
                    <span className={`font-bold ${
                      selections.phase1.m1_3 === 'success' ? 'text-green-400' :
                      selections.phase1.m1_3 === 'planB' ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {selections.phase1.m1_3 === 'success' ? 'SUCCESS' :
                       selections.phase1.m1_3 === 'planB' ? 'PLAN B' : 'PLAN C'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">M4-5:</span>
                    <span className={`font-bold ${
                      selections.phase1.m4_5 === 'success' ? 'text-green-400' :
                      selections.phase1.m4_5 === 'planB' ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {selections.phase1.m4_5 === 'success' ? 'SUCCESS' :
                       selections.phase1.m4_5 === 'planB' ? 'PLAN B' : 'PLAN C'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded p-3">
                <p className="text-slate-400 mb-2">Phase 2</p>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-300">M1-2:</span>
                    <span className={`font-bold ${
                      selections.phase2.m1_2 === 'success' ? 'text-green-400' :
                      selections.phase2.m1_2 === 'planB' ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {selections.phase2.m1_2 === 'success' ? 'SUCCESS' :
                       selections.phase2.m1_2 === 'planB' ? 'PLAN B' : 'PLAN C'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">M3-6:</span>
                    <span className={`font-bold ${
                      selections.phase2.m3_6 === 'success' ? 'text-green-400' :
                      selections.phase2.m3_6 === 'planB' ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {selections.phase2.m3_6 === 'success' ? 'SUCCESS' :
                       selections.phase2.m3_6 === 'planB' ? 'PLAN B' : 'PLAN C'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded p-3">
                <p className="text-slate-400 mb-2">Phase 3</p>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-300">M1-2:</span>
                    <span className={`font-bold ${
                      selections.phase3.m1_2 === 'success' ? 'text-green-400' :
                      selections.phase3.m1_2 === 'planB' ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {selections.phase3.m1_2 === 'success' ? 'SUCCESS' :
                       selections.phase3.m1_2 === 'planB' ? 'PLAN B' : 'PLAN C'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">M3:</span>
                    <span className={`font-bold ${
                      selections.phase3.m3 === 'success' ? 'text-green-400' :
                      selections.phase3.m3 === 'planB' ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {selections.phase3.m3 === 'success' ? 'SUCCESS' :
                       selections.phase3.m3 === 'planB' ? 'PLAN B' : 'PLAN C'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">M6:</span>
                    <span className={`font-bold ${
                      selections.phase3.m6 === 'success' ? 'text-green-400' :
                      selections.phase3.m6 === 'planB' ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {selections.phase3.m6 === 'success' ? 'SUCCESS' :
                       selections.phase3.m6 === 'planB' ? 'PLAN B' : 'PLAN C'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 전제 조건 */}
        <div className="mb-8 bg-slate-900/50 rounded-xl p-6 border border-slate-800">
          <h2 className="text-xl font-bold text-indigo-300 mb-4">📋 전제 조건</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-800 rounded-lg p-4">
              <p className="font-bold text-cyan-400 mb-2">🏢 사업 일정</p>
              <ul className="text-slate-300 space-y-1">
                <li>• Phase 1: 약 0.4년 (작업실) - 고정</li>
                <li>• Phase 2: 0.5년 (정규 학원) - Plan별 차이</li>
                <li>• Phase 3: 1년 (확장) - Plan별 차이</li>
                <li className="text-yellow-400 font-semibold">→ 기본 약 2년</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <p className="font-bold text-cyan-400 mb-2">💵 생활비</p>
              <ul className="text-slate-300 space-y-1">
                <li>• 본인만: 100만원/월 (초절약 모드)</li>
                <li>• 비상금: 50만원/월 (별도)</li>
                <li>• 세금: 순수익에서 차감됨</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plan 선택 탭 */}
        <div className="mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {plans.map((plan, idx) => {
              const planResults = calculatePlanResults(plan)
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedPlan(idx)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedPlan === idx
                      ? `bg-gradient-to-br ${plan.bgGradient} ${plan.borderColor} scale-105 shadow-lg`
                      : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">{plan.emoji}</div>
                    <p className="font-bold text-sm mb-1">{plan.name}</p>
                    <p className="text-xs opacity-80">{plan.description}</p>
                    <p className={`text-lg font-black mt-2 ${
                      selectedPlan === idx ? 'text-white' : 'text-slate-400'
                    }`}>
                      {planResults.monthsToTarget === 23 ? '약 2년' :
                       planResults.monthsToTarget === 26 ? '약 2.2년' :
                       planResults.monthsToTarget === 30 ? '2.5년' :
                       planResults.monthsToTarget === 36 ? '3년' : '약 2-3년'}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* 선택된 Plan 상세 시뮬레이션 */}
        <motion.div
          key={selectedPlan}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          {(() => {
            const plan = plans[selectedPlan]
            const planResults = calculatePlanResults(plan)

            return (
              <div className={`rounded-2xl p-8 shadow-lg border-2 bg-gradient-to-br ${plan.bgGradient} ${plan.borderColor}`}>
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">{plan.emoji}</div>
                  <h2 className="text-3xl font-black mb-2">{plan.name}</h2>
                  <p className="text-sm opacity-90">{plan.description}</p>
                </div>

                <div className="space-y-4">
                  {/* Phase 1 */}
                  <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-bold">Phase 1 (약 0.4년) - 고정</h3>
                      <span className="text-2xl font-black text-white">{planResults.phase1.toLocaleString()}만원</span>
                    </div>
                    <div className="mt-3 bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-white/70 h-full" style={{ width: `${(planResults.phase1 / 10000) * 100}%` }}></div>
                    </div>
                    <p className="text-xs text-white/70 mt-1">{((planResults.phase1 / 10000) * 100).toFixed(1)}% 달성</p>
                  </div>

                  {/* Phase 2 */}
                  <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h3 className="text-lg font-bold">Phase 2 (0.5년)</h3>
                        <p className="text-xs opacity-80">월평균 {plan.phase2MonthlyAvg}만원</p>
                      </div>
                      <span className="text-2xl font-black text-white">+{planResults.phase2.toLocaleString()}만원</span>
                    </div>
                    <div className="mt-3 bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-white/70 h-full" style={{ width: `${((planResults.phase1 + planResults.phase2) / 10000) * 100}%` }}></div>
                    </div>
                    <p className="text-xs text-white/70 mt-1">
                      누적: {(planResults.phase1 + planResults.phase2).toLocaleString()}만원 ({(((planResults.phase1 + planResults.phase2) / 10000) * 100).toFixed(1)}%)
                    </p>
                  </div>

                  {/* Phase 3 */}
                  <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h3 className="text-lg font-bold">Phase 3 (1년)</h3>
                        <p className="text-xs opacity-80">월평균 {plan.phase3MonthlyAvg}만원</p>
                      </div>
                      <span className="text-2xl font-black text-white">+{planResults.phase3.toLocaleString()}만원</span>
                    </div>
                    <div className="mt-3 bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-white/70 h-full" style={{ width: `${Math.min((planResults.total23Months / 10000) * 100, 100)}%` }}></div>
                    </div>
                    <p className="text-xs text-white/70 mt-1">
                      약 2년 누적: {planResults.total23Months.toLocaleString()}만원 ({((planResults.total23Months / 10000) * 100).toFixed(1)}%)
                    </p>
                  </div>

                  {/* 최종 결과 */}
                  <div className="rounded-xl p-6 border-2 bg-white/20 border-white/40">
                    <div className="text-center">
                      <div className="text-5xl mb-3">
                        {planResults.achievesIn23Months ? '🎉' : '⏱️'}
                      </div>
                      <p className="text-3xl font-black mb-2">
                        {planResults.monthsToTarget === 23 ? '약 2년' :
                         planResults.monthsToTarget === 26 ? '약 2.2년' :
                         planResults.monthsToTarget === 30 ? '2.5년' :
                         planResults.monthsToTarget === 36 ? '3년' : '약 2-3년'}에 1억 달성!
                      </p>
                      <p className="text-sm opacity-90 mb-4">
                        {planResults.achievesIn23Months
                          ? '약 2년 이내 달성!'
                          : `약 2년 이후 ${
                              planResults.monthsToTarget === 26 ? '약 0.2년' :
                              planResults.monthsToTarget === 30 ? '0.5년' :
                              planResults.monthsToTarget === 36 ? '1년' : '추가 시간'
                            } 추가 필요`}
                      </p>

                      <div className="bg-white/30 rounded-lg p-4 border border-white/50 mb-4">
                        <p className="text-lg font-bold mb-2">약 2년 시점 총 저축액</p>
                        <p className="text-3xl font-black">{planResults.total23Months.toLocaleString()}만원</p>
                        <p className="text-sm mt-2 opacity-90">
                          {planResults.achievesIn23Months
                            ? `목표 초과: ${(planResults.total23Months - 10000).toLocaleString()}만원`
                            : `목표까지: ${(10000 - planResults.total23Months).toLocaleString()}만원 부족`}
                        </p>
                      </div>

                      <p className="text-sm mt-4 text-white/90 font-semibold bg-white/20 rounded-lg p-3">
                        {selectedPlan === 3
                          ? 'Plan D도 3년이면 충분히 달성 가능!'
                          : selectedPlan === 2
                          ? '2년 반 정도면 충분히 달성 가능!'
                          : selectedPlan === 1
                          ? '2년 조금 넘어서 달성 - 훌륭한 성과!'
                          : '2년 이내 1억 달성 성공!'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}
        </motion.div>

        {/* 4개 Plan 비교 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {plans.map((plan, idx) => {
            const planResults = calculatePlanResults(plan)
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className={`rounded-xl p-5 border-2 ${plan.borderColor} bg-gradient-to-br ${plan.bgGradient} hover:scale-105 transition-transform cursor-pointer`}
                onClick={() => setSelectedPlan(idx)}
              >
                <div className="text-center mb-3">
                  <div className="text-3xl mb-2">{plan.emoji}</div>
                  <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                  <p className="text-xs opacity-80">{plan.description}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="bg-white/10 rounded p-2">
                    <div className="flex justify-between">
                      <span className="text-xs">Phase 2 월평균</span>
                      <span className="font-bold">{plan.phase2MonthlyAvg}만원</span>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded p-2">
                    <div className="flex justify-between">
                      <span className="text-xs">Phase 3 월평균</span>
                      <span className="font-bold">{plan.phase3MonthlyAvg}만원</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 border border-white/30 mt-3">
                    <p className="text-center font-bold text-lg">
                      {planResults.monthsToTarget === 23 ? '약 2년' :
                       planResults.monthsToTarget === 26 ? '약 2.2년' :
                       planResults.monthsToTarget === 30 ? '2.5년' :
                       planResults.monthsToTarget === 36 ? '3년' : '약 2-3년'}
                    </p>
                    <p className="text-center text-xs opacity-90 mt-1">목표 달성 예상</p>
                  </div>
                  <div className="bg-white/10 rounded p-2">
                    <div className="text-center">
                      <p className="text-xs opacity-80">약 2년 누적</p>
                      <p className="font-bold">{planResults.total23Months.toLocaleString()}만원</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 비교 차트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 mb-8"
        >
          <h2 className="text-2xl font-black text-center mb-6 text-slate-200">
            📊 전체 Plan 비교
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 px-4 text-left text-slate-400 font-semibold">구분</th>
                  <th className="py-3 px-4 text-center text-green-400 font-semibold">Plan A</th>
                  <th className="py-3 px-4 text-center text-amber-400 font-semibold">Plan B</th>
                  <th className="py-3 px-4 text-center text-pink-400 font-semibold">Plan C</th>
                  <th className="py-3 px-4 text-center text-blue-400 font-semibold">Plan D</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Phase 1 (약 0.4년)</td>
                  <td className="py-3 px-4 text-center font-semibold">625만원</td>
                  <td className="py-3 px-4 text-center font-semibold">625만원</td>
                  <td className="py-3 px-4 text-center font-semibold">625만원</td>
                  <td className="py-3 px-4 text-center font-semibold">625만원</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Phase 2 월평균</td>
                  <td className="py-3 px-4 text-center font-semibold">550만원</td>
                  <td className="py-3 px-4 text-center font-semibold">480만원</td>
                  <td className="py-3 px-4 text-center font-semibold">400만원</td>
                  <td className="py-3 px-4 text-center font-semibold">320만원</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Phase 2 (0.5년)</td>
                  <td className="py-3 px-4 text-center font-semibold">3,300만원</td>
                  <td className="py-3 px-4 text-center font-semibold">2,880만원</td>
                  <td className="py-3 px-4 text-center font-semibold">2,400만원</td>
                  <td className="py-3 px-4 text-center font-semibold">1,920만원</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Phase 3 월평균</td>
                  <td className="py-3 px-4 text-center font-semibold">750만원</td>
                  <td className="py-3 px-4 text-center font-semibold">630만원</td>
                  <td className="py-3 px-4 text-center font-semibold">520만원</td>
                  <td className="py-3 px-4 text-center font-semibold">420만원</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Phase 3 (1년)</td>
                  <td className="py-3 px-4 text-center font-semibold">9,000만원</td>
                  <td className="py-3 px-4 text-center font-semibold">7,560만원</td>
                  <td className="py-3 px-4 text-center font-semibold">6,240만원</td>
                  <td className="py-3 px-4 text-center font-semibold">5,040만원</td>
                </tr>
                <tr className="border-b border-slate-700 bg-slate-800/50">
                  <td className="py-3 px-4 font-bold">약 2년 총 누적</td>
                  <td className="py-3 px-4 text-center font-bold text-green-400">12,925만원</td>
                  <td className="py-3 px-4 text-center font-bold text-amber-400">11,065만원</td>
                  <td className="py-3 px-4 text-center font-bold text-pink-400">9,265만원</td>
                  <td className="py-3 px-4 text-center font-bold text-blue-400">7,585만원</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">1억 달성 시점</td>
                  <td className="py-3 px-4 text-center font-semibold text-green-400">약 2년 ✨</td>
                  <td className="py-3 px-4 text-center font-semibold text-amber-400">약 2.2년</td>
                  <td className="py-3 px-4 text-center font-semibold text-pink-400">2.5년</td>
                  <td className="py-3 px-4 text-center font-semibold text-blue-400">3년</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">목표 대비 (2년)</td>
                  <td className="py-3 px-4 text-center font-bold text-green-400">빠름 🎉</td>
                  <td className="py-3 px-4 text-center font-bold text-amber-400">+0.2년</td>
                  <td className="py-3 px-4 text-center font-bold text-pink-400">+0.5년</td>
                  <td className="py-3 px-4 text-center font-bold text-blue-400">+1년</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/30">
            <p className="text-sm text-slate-300 text-center">
              <strong className="text-indigo-300">모든 Plan에서 3년 이내 목표 달성 가능!</strong>
              <br />
              Plan D조차도 3년이면 1억을 모을 수 있습니다.
            </p>
          </div>
        </motion.div>

        {/* 핵심 인사이트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 border-2 border-indigo-400/50"
        >
          <h2 className="text-2xl font-black text-center mb-6 text-indigo-200">
            💡 핵심 인사이트
          </h2>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="font-bold text-green-300 mb-2">🎯 Plan A (SUCCESS)</p>
              <p className="leading-relaxed">
                <strong className="text-white">약 2년에 1억 달성!</strong> (목표보다 빠름)
                <br />
                Phase 2 월평균 550만원, Phase 3 월평균 750만원으로 약 2년에 <strong className="text-green-400">12,925만원</strong> 저축.
                <br />
                <strong className="text-cyan-400">2년 내 1억은 충분히 달성 가능!</strong>
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="font-bold text-amber-300 mb-2">⚡ Plan B (80-99%)</p>
              <p className="leading-relaxed">
                <strong className="text-white">약 2.2년에 1억 달성</strong> (목표보다 약 0.2년 추가)
                <br />
                Phase 2 월평균 480만원, Phase 3 월평균 630만원. Plan A 대비 약간 낮지만 <strong className="text-amber-400">여전히 우수</strong>한 성과.
                <br />
                <strong className="text-green-400">Plan B도 대성공입니다!</strong>
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="font-bold text-pink-300 mb-2">💖 Plan C (60-79%)</p>
              <p className="leading-relaxed">
                <strong className="text-white">2.5년에 1억 달성</strong> (목표보다 0.5년 추가)
                <br />
                Phase 2 월평균 400만원, Phase 3 월평균 520만원. <strong className="text-cyan-400">2.5년이면 여전히 빠른 편</strong>이며 무리하지 않고 달성 가능.
                <br />
                <strong className="text-purple-400">스트레스 없이 진행 가능!</strong>
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="font-bold text-blue-300 mb-2">💙 Plan D (50-59%)</p>
              <p className="leading-relaxed">
                <strong className="text-white">3년에 1억 달성</strong> (목표보다 1년 추가)
                <br />
                Phase 2 월평균 320만원, Phase 3 월평균 420만원. 모든 Plan 중 가장 보수적이지만 <strong className="text-cyan-400">3년 내 목표 달성</strong>은 여전히 가능.
                <br />
                <strong className="text-green-400">Plan D도 3년이면 충분히 달성!</strong>
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="font-bold text-indigo-300 mb-2">📈 Phase 3가 가장 중요</p>
              <p className="leading-relaxed">
                전체 저축액의 <strong className="text-yellow-300">약 65-70%가 Phase 3</strong>에서 발생합니다.
                Phase 1, 2는 기반 구축이고, <strong className="text-green-400">Phase 3 성과가 전체 결과를 좌우</strong>합니다.
                <br />
                따라서 Phase 1, 2에서 무리하지 말고 <strong className="text-cyan-400">안정적으로 Phase 3 진입</strong>하는 것이 핵심입니다.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-5 border-2 border-green-400/50">
              <p className="font-bold text-green-400 mb-3 text-lg text-center">🎯 최종 결론</p>
              <p className="leading-relaxed text-center text-base">
                <strong className="text-white">4가지 Plan 모두 실현 가능!</strong>
                <br />
                <strong className="text-green-400">Plan A: 약 2년</strong> |
                <strong className="text-amber-400"> Plan B: 약 2.2년</strong> |
                <strong className="text-pink-400"> Plan C: 2.5년</strong> |
                <strong className="text-blue-400"> Plan D: 3년</strong>
                <br /><br />
                <span className="text-green-300 text-lg font-bold">
                  어떤 시나리오든 3년 내 1억 달성 가능! 💪
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
