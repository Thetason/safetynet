"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useScenario } from '@/contexts/ScenarioContext'
import type { ScenarioChoice } from '@/contexts/ScenarioContext'

export default function Phase2ScenarioPage() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)
  const { selections, updateSelection } = useScenario()

  const handleSelect = (milestone: 'm1_2' | 'm3_6', choice: ScenarioChoice) => {
    updateSelection('phase2', milestone, choice)
  }

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

          <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Phase 2 시나리오 분석 (정규 학원 오픈)
          </h1>
          <p className="text-sm text-slate-400">6개월 마일스톤 · 목표 순수익 500만원 달성</p>
          <p className="text-xs text-slate-500 mt-1">달성률 기준: SUCCESS (100%+) | Plan B (80-99%) | Plan C (60-79%) | Plan D (50-59%)</p>

          {/* 현재 선택 상태 표시 */}
          <div className="mt-4 p-4 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-700/50 rounded-lg">
            <p className="text-xs text-indigo-300 mb-2">💡 시나리오 노드를 클릭하여 선택하세요 (M2, M4에서 선택 가능)</p>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-300">M1-2:</span>
                <span className={`font-bold ${
                  selections.phase2.m1_2 === 'success' ? 'text-green-400' :
                  selections.phase2.m1_2 === 'planB' ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {selections.phase2.m1_2 === 'success' ? 'SUCCESS' :
                   selections.phase2.m1_2 === 'planB' ? 'PLAN B' : 'PLAN C'}
                </span>
              </div>
              <div className="flex items-center gap-2">
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
        </div>

        {/* Canvas */}
        <div className="relative w-full h-[5400px] bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
          {/* SVG 연결선 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1600 5400" preserveAspectRatio="xMidYMin slice" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="line2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* START → M1 */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              x1="800" y1="100" x2="800" y2="200"
              stroke="url(#line2)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* M1 → 4 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              d="M 800 280 Q 600 310 200 340"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              d="M 800 280 Q 700 310 500 340"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              d="M 800 280 Q 900 310 1100 340"
              stroke="#ff6b35"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              d="M 800 280 Q 1000 310 1400 340"
              stroke="#dc2626"
              strokeWidth="2.5"
              fill="none"
            />

            {/* M1 Branches → M2 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              d="M 200 390 Q 400 490 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              d="M 500 390 Q 600 490 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              d="M 1100 390 Q 1000 490 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              d="M 1400 390 Q 1200 490 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* M2 → 4 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              d="M 800 680 Q 600 710 200 740"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              d="M 800 680 Q 700 710 500 740"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              d="M 800 680 Q 900 710 1100 740"
              stroke="#ff6b35"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              d="M 800 680 Q 1000 710 1400 740"
              stroke="#dc2626"
              strokeWidth="2.5"
              fill="none"
            />

            {/* M2 Branches → M3 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              d="M 200 790 Q 400 850 800 920"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.3 }}
              d="M 500 790 Q 600 850 800 920"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              d="M 1100 790 Q 1000 850 800 920"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              d="M 1400 790 Q 1200 850 800 920"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* M3 → 4 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              d="M 800 1000 Q 600 1030 200 1060"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              d="M 800 1000 Q 700 1030 500 1060"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              d="M 800 1000 Q 900 1030 1100 1060"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.7 }}
              d="M 800 1000 Q 1000 1030 1400 1060"
              stroke="#dc2626"
              strokeWidth="2.5"
              fill="none"
            />

            {/* M3 Branches → M4 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 3.0 }}
              d="M 200 1110 Q 400 1170 800 1240"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 3.1 }}
              d="M 500 1110 Q 600 1170 800 1240"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 3.2 }}
              d="M 1100 1110 Q 1000 1170 800 1240"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 3.3 }}
              d="M 1400 1110 Q 1200 1170 800 1240"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* M4 → 4 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 3.4 }}
              d="M 800 1320 Q 600 1350 200 1380"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 3.5 }}
              d="M 800 1320 Q 700 1350 500 1380"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 3.6 }}
              d="M 800 1320 Q 900 1350 1100 1380"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 3.7 }}
              d="M 800 1320 Q 1000 1350 1400 1380"
              stroke="#dc2626"
              strokeWidth="2.5"
              fill="none"
            />

            {/* M4 Branches → M5 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 4.0 }}
              d="M 200 1430 Q 400 1510 800 1600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 4.1 }}
              d="M 500 1430 Q 600 1510 800 1600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 4.2 }}
              d="M 1100 1430 Q 1000 1510 800 1600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 4.3 }}
              d="M 1400 1430 Q 1200 1510 800 1600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* M5 → M6 */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 4.2 }}
              x1="800" y1="1680" x2="800" y2="1800"
              stroke="#3b82f6"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* M6 → Final Success */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 4.6 }}
              d="M 800 1880 L 800 2030"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
          </svg>

          {/* 노드들 */}
          <div className="relative w-full h-full" style={{ zIndex: 2 }}>
            {/* START */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute left-1/2 top-[40px] -translate-x-1/2"
              style={{ width: '320px' }}
            >
              <div className="bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-xl p-5 shadow-[0_0_40px_rgba(6,182,212,0.4)] border-2 border-cyan-400/40">
                <div className="text-center">
                  <p className="text-sm font-bold mb-1 opacity-80">🚀 START</p>
                  <p className="text-xl font-black">Phase 2: 정규 학원</p>
                  <p className="text-sm mt-1">목표: 순수익 500만원</p>
                </div>
              </div>
            </motion.div>

            {/* ========== M1: Month 1 - 32명 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute left-1/2 top-[220px] -translate-x-1/2"
              style={{ width: '380px' }}
            >
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-4 shadow-[0_0_35px_rgba(6,182,212,0.5)] border-2 border-cyan-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 1</p>
                <p className="text-lg font-black text-center">총 32명 달성?</p>
                <p className="text-xs text-center opacity-80 mt-1">직강 15 + 강사 12 + 키즈 5</p>
              </div>

              {/* 마일스톤 상세 내용 */}
              <div className="bg-slate-800/50 rounded-lg p-4 mt-3">
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>학원 정식 등록 및 인테리어 완료</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>직강 15명 확보 (Phase 1에서 전환)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>강사 4명 채용 (피아노/기타/드럼/보컬 각 1명)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Phase 1 레슨 병행 (추가 수익)</span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="opacity-70">총 매출</p>
                    <p className="font-bold">714만원</p>
                  </div>
                  <div>
                    <p className="opacity-70">비용</p>
                    <p className="font-bold">405만원</p>
                  </div>
                  <div>
                    <p className="opacity-70">순수익</p>
                    <p className="font-bold text-yellow-300">309만원</p>
                  </div>
                </div>
                <p className="text-xs opacity-70 mt-2">* 직강 25만 × 15 / 강사 22만 × 12 (4파트 각 3명) / 키즈 15만 × 5</p>
              </div>
            </motion.div>

            {/* M1 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute left-[6%] top-[570px]"
              style={{ width: '18%' }}
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-3 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 border-green-400/40 hover:scale-105 transition-transform cursor-pointer">
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-sm font-black">32명 이상</p>
                  <p className="text-xs opacity-70">SUCCESS (100%+)</p>
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 309만원+</p>
                  <p className="mt-1">→ M2 진행</p>
                </div>
              </div>
            </motion.div>

            {/* M1 - Plan B */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute left-[27%] top-[570px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => setOpenDialog('m1-planb')}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-lg mb-1">⚠️</div>
                  <p className="text-sm font-black">26-31명 (80-99%)</p>
                  <p className="text-xs opacity-70">PLAN B - 회복 가능</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold">🎯 즉시 액션</p>
                  <p>체험 레슨 + 전단지</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M1 - Plan C */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute left-[48%] top-[570px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => setOpenDialog('m1-planc')}
                className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-3 shadow-[0_0_30px_rgba(249,115,22,0.4)] border-2 border-orange-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-lg mb-1">🔶</div>
                  <p className="text-sm font-black">19-25명 (60-79%)</p>
                  <p className="text-xs opacity-70">PLAN C - 전략 재검토</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold">🔄 심각한 우려</p>
                  <p>강사 재배치 + 할인</p>
                  <p className="text-orange-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M1 - Plan D */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute left-[69%] top-[570px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => setOpenDialog('m1-pland')}
                className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-3 shadow-[0_0_30px_rgba(220,38,38,0.5)] border-2 border-red-500/50 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-lg mb-1">🚨</div>
                  <p className="text-sm font-black">16-18명 (50-59%)</p>
                  <p className="text-xs opacity-70">PLAN D - 위기 상황</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold">⚠️ 근본적 재구조화</p>
                  <p>규모 축소 검토 필요</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== M2: Month 2 - 40명 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute left-1/2 top-[1020px] -translate-x-1/2"
              style={{ width: '380px' }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 shadow-[0_0_35px_rgba(59,130,246,0.5)] border-2 border-blue-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 2</p>
                <p className="text-lg font-black text-center">총 40명 달성?</p>
                <p className="text-xs text-center opacity-80 mt-1">직강 15 + 강사 18 + 키즈 7</p>
              </div>

              {/* 마일스톤 상세 내용 */}
              <div className="bg-slate-800/50 rounded-lg p-4 mt-3">
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>각 강사당 수강생 4-5명으로 증가</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>키즈 2-3명 추가 등록</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>SNS 마케팅 강화 (인스타/유튜브)</span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="opacity-70">총 매출</p>
                    <p className="font-bold">876만원</p>
                  </div>
                  <div>
                    <p className="opacity-70">비용</p>
                    <p className="font-bold">494만원</p>
                  </div>
                  <div>
                    <p className="opacity-70">순수익</p>
                    <p className="font-bold text-yellow-300">382만원</p>
                  </div>
                </div>
                <p className="text-xs opacity-70 mt-2">* 직강 25만×15 / 강사 22만×18 (4파트 평균 4.5명) / 키즈 15만×7</p>
              </div>
            </motion.div>

            {/* M2 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 }}
              className="absolute left-[6%] top-[1370px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => handleSelect('m1_2', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-3 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 ${
                  selections.phase2.m1_2 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/40'
                } hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-sm font-black">40명 이상</p>
                  <p className="text-xs opacity-70">SUCCESS (100%+)</p>
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 387만원+</p>
                  <p className="mt-1">→ M3 진행</p>
                </div>
                {selections.phase2.m1_2 === 'success' && (
                  <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-green-300" />
                )}
              </div>
            </motion.div>

            {/* M2 - Plan B */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="absolute left-[27%] top-[1370px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => setOpenDialog('m2-planb')}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-lg mb-1">⚠️</div>
                  <p className="text-sm font-black">32-39명 (80-99%)</p>
                  <p className="text-xs opacity-70">PLAN B - 성장세 유지</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold">🎯 강화 전략</p>
                  <p>추천 프로그램 + 후기</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M2 - Plan C */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 }}
              className="absolute left-[48%] top-[1370px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => setOpenDialog('m2-planc')}
                className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-3 shadow-[0_0_30px_rgba(249,115,22,0.4)] border-2 border-orange-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-lg mb-1">🔶</div>
                  <p className="text-sm font-black">24-31명 (60-79%)</p>
                  <p className="text-xs opacity-70">PLAN C - 재검토</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold">🔄 개선 방안</p>
                  <p>강사 실적 분석</p>
                  <p className="text-orange-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M2 - Plan D */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0 }}
              className="absolute left-[69%] top-[1370px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => setOpenDialog('m2-pland')}
                className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-3 shadow-[0_0_30px_rgba(220,38,38,0.5)] border-2 border-red-500/50 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-lg mb-1">🚨</div>
                  <p className="text-sm font-black">20-23명 (50-59%)</p>
                  <p className="text-xs opacity-70">PLAN D - 위기 상황</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold">⚠️ 구조조정 필요</p>
                  <p>비용 최적화 검토</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== M3: Month 3 - 47명 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
              className="absolute left-1/2 top-[1820px] -translate-x-1/2"
              style={{ width: '380px' }}
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4 shadow-[0_0_35px_rgba(99,102,241,0.5)] border-2 border-indigo-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 3</p>
                <p className="text-lg font-black text-center">총 47명 달성?</p>
                <p className="text-xs text-center opacity-80 mt-1">직강 15 + 강사 22 + 키즈 10</p>
              </div>

              {/* 마일스톤 상세 내용 */}
              <div className="bg-slate-800/50 rounded-lg p-4 mt-3">
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>강사당 5-6명으로 증가 (4파트 총 22명)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>키즈 10명 돌파 (추가 모집)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Phase 1 종료 (학원 단독 운영 시작)</span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="opacity-70">총 매출</p>
                    <p className="font-bold">1,009만원</p>
                  </div>
                  <div>
                    <p className="opacity-70">비용</p>
                    <p className="font-bold">567만원</p>
                  </div>
                  <div>
                    <p className="opacity-70">순수익</p>
                    <p className="font-bold text-yellow-300">442만원</p>
                  </div>
                </div>
                <p className="text-xs opacity-70 mt-2">* 직강 25만×15 / 강사 22만×22 (4파트 평균 5.5명) / 키즈 15만×10</p>
              </div>
            </motion.div>

            {/* M3 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4 }}
              className="absolute left-[6%] top-[2170px]"
              style={{ width: '18%' }}
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-3 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 border-green-400/40 hover:scale-105 transition-transform cursor-pointer">
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-sm font-black">45명 이상</p>
                  <p className="text-xs opacity-70">SUCCESS (100%+)</p>
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 ~450만원</p>
                  <p className="mt-1">→ M4 진행</p>
                </div>
              </div>
            </motion.div>

            {/* M3 - Plan B */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="absolute left-[27%] top-[2170px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => setOpenDialog('m3-planb')}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">36-44명 (80-99%)</p>
                  <p className="text-xs opacity-70">PLAN B - 최종 스퍼트</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold">🎯 집중 공략</p>
                  <p>목표 달성 이벤트</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M3 - Plan C */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6 }}
              className="absolute left-[48%] top-[2170px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => setOpenDialog('m3-planc')}
                className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-3 shadow-[0_0_30px_rgba(249,115,22,0.4)] border-2 border-orange-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-lg mb-1">🔶</div>
                  <p className="text-sm font-black">27-35명 (60-79%)</p>
                  <p className="text-xs opacity-70">PLAN C - 재검토</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold">🔄 전략 수정</p>
                  <p>목표 재설정 필요</p>
                  <p className="text-orange-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M3 - Plan D */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.7 }}
              className="absolute left-[69%] top-[2170px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => setOpenDialog('m3-pland')}
                className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-3 shadow-[0_0_30px_rgba(220,38,38,0.5)] border-2 border-red-500/50 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-lg mb-1">🚨</div>
                  <p className="text-sm font-black">24-27명 (50-59%)</p>
                  <p className="text-xs opacity-70">PLAN D - 위기 상황</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold">⚠️ 재구조화 필요</p>
                  <p>근본적 방향 전환</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== M4: Month 4 - 52명 (목표 달성!) ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0 }}
              className="absolute left-1/2 top-[2620px] -translate-x-1/2"
              style={{ width: '400px' }}
            >
              <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-xl p-4 shadow-[0_0_50px_rgba(234,179,8,0.6)] border-3 border-yellow-400/60">
                <p className="text-xs font-bold text-center opacity-90 mb-1">Month 4 🎯</p>
                <p className="text-xl font-black text-center">총 52명 달성?</p>
                <p className="text-sm text-center font-bold opacity-90 mt-1">직강 15 + 강사 26 + 키즈 11</p>
              </div>

              {/* 마일스톤 상세 내용 */}
              <div className="bg-slate-800/50 rounded-lg p-4 mt-3">
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>강사당 6-7명으로 증가 (4파트 총 26명)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>키즈 11명 돌파</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>재등록률 65% 달성</span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="opacity-70">총 매출</p>
                    <p className="font-bold">1,112만원</p>
                  </div>
                  <div>
                    <p className="opacity-70">비용</p>
                    <p className="font-bold">624만원</p>
                  </div>
                  <div>
                    <p className="opacity-70">순수익</p>
                    <p className="font-bold text-yellow-300">488만원</p>
                  </div>
                </div>
                <p className="text-xs opacity-70 mt-2">* 직강 25만×15 / 강사 22만×26 (4파트 평균 6.5명) / 키즈 15만×11</p>
              </div>
            </motion.div>

            {/* M4 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.4 }}
              className="absolute left-[6%] top-[2970px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => handleSelect('m3_6', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-3 shadow-[0_0_40px_rgba(16,185,129,0.5)] border-2 ${
                  selections.phase2.m3_6 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/50'
                } hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-center mb-2">
                  <div className="text-3xl mb-1">🏆</div>
                  <p className="text-sm font-black">50명 이상</p>
                  <p className="text-xs opacity-70">🎯 목표 달성!</p>
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold text-yellow-300">500만원 ✨</p>
                  <p className="mt-1">→ M5 안정화</p>
                </div>
                {selections.phase2.m3_6 === 'success' && (
                  <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-green-300" />
                )}
              </div>
            </motion.div>

            {/* M4 - Plan B */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5 }}
              className="absolute left-[27%] top-[2970px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => setOpenDialog('m4-planb')}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">40-49명 (80-99%)</p>
                  <p className="text-xs opacity-70">PLAN B - 아슬아슬</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold">🎯 최종 돌파</p>
                  <p>긴급 프로모션</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M4 - Plan C */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6 }}
              className="absolute left-[48%] top-[2970px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => setOpenDialog('m4-planc')}
                className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-3 shadow-[0_0_30px_rgba(249,115,22,0.4)] border-2 border-orange-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-lg mb-1">🔶</div>
                  <p className="text-sm font-black">30-39명 (60-79%)</p>
                  <p className="text-xs opacity-70">PLAN C - 재검토</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold">🔄 목표 수정</p>
                  <p>전략 재수립</p>
                  <p className="text-orange-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M4 - Plan D */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.7 }}
              className="absolute left-[69%] top-[2970px]"
              style={{ width: '18%' }}
            >
              <div
                onClick={() => setOpenDialog('m4-pland')}
                className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-3 shadow-[0_0_30px_rgba(220,38,38,0.5)] border-2 border-red-500/50 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-lg mb-1">🚨</div>
                  <p className="text-sm font-black">26-30명 (50-59%)</p>
                  <p className="text-xs opacity-70">PLAN D - 위기 상황</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold">⚠️ 재구조화 필요</p>
                  <p>전면 재검토</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== M5: Month 5 - 58명 (안정화) ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.0 }}
              className="absolute left-1/2 top-[3420px] -translate-x-1/2"
              style={{ width: '380px' }}
            >
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-4 shadow-[0_0_35px_rgba(16,185,129,0.5)] border-2 border-emerald-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 5 - 안정화</p>
                <p className="text-lg font-black text-center">총 58명 달성</p>
                <p className="text-xs text-center opacity-80 mt-1">직강 15 + 강사 30 + 키즈 13 → ~541만원</p>
              </div>

              {/* 마일스톤 상세 내용 */}
              <div className="bg-slate-800/50 rounded-lg p-4 mt-3">
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>강사당 7-8명으로 증가 (4파트 총 30명)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>키즈 13명 돌파</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>재등록률 70% 달성 (자연 유입 증가)</span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="opacity-70">총 매출</p>
                    <p className="font-bold">1,230만원</p>
                  </div>
                  <div>
                    <p className="opacity-70">비용</p>
                    <p className="font-bold">689만원</p>
                  </div>
                  <div>
                    <p className="opacity-70">순수익</p>
                    <p className="font-bold text-yellow-300">541만원</p>
                  </div>
                </div>
                <p className="text-xs opacity-70 mt-2">* 직강 25만×15 / 강사 22만×30 (4파트 평균 7.5명) / 키즈 15만×13 ✅ <span className="font-bold">500만원 달성!</span></p>
              </div>
            </motion.div>

            {/* ========== M6: Month 6 - 64명 (완성) ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.4 }}
              className="absolute left-1/2 top-[4220px] -translate-x-1/2"
              style={{ width: '380px' }}
            >
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-4 shadow-[0_0_35px_rgba(20,184,166,0.5)] border-2 border-teal-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 6 - 완성</p>
                <p className="text-lg font-black text-center">총 64명 달성</p>
                <p className="text-xs text-center opacity-80 mt-1">직강 15 + 강사 34 + 키즈 15 → ~600만원</p>
              </div>

              {/* 마일스톤 상세 내용 */}
              <div className="bg-slate-800/50 rounded-lg p-4 mt-3">
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400">✓</span>
                    <span>강사당 8-9명으로 증가 (4파트 총 34명)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400">✓</span>
                    <span>키즈 15명 돌파 (입소문 효과)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400">✓</span>
                    <span>Phase 3 키즈 전문반 준비</span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <p className="opacity-70">총 매출</p>
                    <p className="font-bold">1,348만원</p>
                  </div>
                  <div>
                    <p className="opacity-70">비용</p>
                    <p className="font-bold">754만원</p>
                  </div>
                  <div>
                    <p className="opacity-70">순수익</p>
                    <p className="font-bold text-yellow-300">594만원</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/30">
                  <p className="text-sm font-bold text-center">✅ Phase 2 완료! 규모의 경제 +50만원 = <span className="text-yellow-300">644만원</span></p>
                  <p className="text-xs text-center mt-1 opacity-90">* 직강 25만×15 / 강사 22만×34 (4파트 평균 8.5명) / 키즈 15만×15</p>
                  <p className="text-xs text-center mt-1 opacity-90">→ Phase 3 키즈 전문반 런칭 준비 완료</p>
                </div>
              </div>
            </motion.div>

            {/* Final Success */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 4.8 }}
              className="absolute left-1/2 top-[4630px] -translate-x-1/2"
              style={{ width: '400px' }}
            >
              <div className="bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 rounded-xl p-5 shadow-[0_0_60px_rgba(16,185,129,0.7)] border-3 border-green-400/70">
                <div className="text-center mb-3">
                  <div className="text-4xl mb-2">🎉</div>
                  <p className="text-2xl font-black">Phase 2 완료!</p>
                  <p className="text-sm opacity-90 mt-1">6개월 완주 + 안정적 수익 구조</p>
                </div>
                <div className="space-y-2 text-xs bg-white/20 rounded-lg p-3 border border-white/30">
                  <p className="font-bold">✅ 4개월차 500만원 달성</p>
                  <p className="font-bold">✅ 최종 60명 (직강 20 + 강사 40)</p>
                  <p className="font-bold">✅ 월 순수익 ~600만원</p>
                  <p className="text-yellow-300 font-bold mt-2">→ Phase 3 준비 완료!</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========== DIALOGS ========== */}

        {/* M1 PLAN B */}
        <Dialog open={openDialog === 'm1-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">M1 PLAN B (26-31명, 80-99%)</DialogTitle>
              <DialogDescription className="text-slate-300">
                목표 대비 약간 부족하지만 회복 가능한 수준
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">순수익 263-301만원. 목표 대비 약간 부족하지만 회복 가능한 수준. 강사당 평균 2.75-4명으로 여유 있음.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 즉시 실행 액션 (2주 내)</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 무료 체험 레슨 강화 (각 파트별 주 3회 → 주 5회)</li>
                  <li>• 지역 아파트 단지 전단지 배포 (3,000부)</li>
                  <li>• 인스타그램 릴스 제작 (강사 연주 영상, 레슨 현장)</li>
                  <li>• 오픈 기념 프로모션 연장 (첫 달 15% 할인)</li>
                  <li>• 키즈반 추가 모집 (5명 → 8명 목표)</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">⏱️ 회복 목표</p>
                <p className="text-sm text-slate-300">2주 내 32명 달성, Month 2에는 40명 목표 유지</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">💰 재정 영향</p>
                <p className="text-sm text-slate-300">월 순수익 263-301만원으로 생활비 100만원 제외 시 저축 163-201만원 가능. 목표 달성 시간 1-2개월 지연 예상.</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M1 PLAN C */}
        <Dialog open={openDialog === 'm1-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-orange-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-orange-400">M1 PLAN C (19-25명, 60-79%)</DialogTitle>
              <DialogDescription className="text-slate-300">
                심각한 우려 - 전략 재검토 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">순수익 193-262만원. 목표 대비 상당한 부족. 강사당 1-2.5명으로 운영 비효율. 전략 수정 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-3">🔄 전략 재검토</p>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">1. 강사 재배치:</span>
                    <span className="ml-2">실적 저조한 파트 강사 교체 또는 인기 파트 집중 (드럼/기타 우선)</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">2. 가격 정책 수정:</span>
                    <span className="ml-2">첫 3개월 30% 파격 할인 (강사 22만 → 15.4만, 키즈 15만 → 10.5만)</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">3. 타겟층 확대:</span>
                    <span className="ml-2">성인 야간반 신설 (직장인 7-9pm), 주말 특강 운영</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">4. 마케팅 재설계:</span>
                    <span className="ml-2">당근 + 인스타 광고비 50만원 → 100만원 증액, ROI 집중 측정</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">⏱️ 회복 기한</p>
                <p className="text-sm text-slate-300">1개월 내 26명 이상 달성 필수. 실패 시 Plan D 전환.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">💰 재정 영향</p>
                <p className="text-sm text-slate-300">월 순수익 193-262만원, 저축 93-162만원. 목표 달성 시간 3-4개월 지연 예상.</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M1 PLAN D */}
        <Dialog open={openDialog === 'm1-pland'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">M1 PLAN D (16-18명, 50-59%)</DialogTitle>
              <DialogDescription className="text-slate-300">
                위기 상황 - 근본적 재구조화 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 위기 상황</p>
                <p className="text-sm text-slate-300">순수익 154-192만원. 목표 대비 절반 수준. 사업 모델 근본적 재검토 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 근본적 재구조화</p>
                <div className="space-y-3">
                  <div className="p-3 bg-red-900/20 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-white mb-1">옵션 1: 규모 축소</p>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• 강사 2명으로 축소 (드럼 + 기타만 유지)</li>
                      <li>• 공간 축소 검토 (20평 → 10평 이하)</li>
                      <li>• 고정비 200만 → 120만으로 절감</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-900/20 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-white mb-1">옵션 2: 포지셔닝 변경</p>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• 키즈 전문 학원으로 전환 (수요 높은 세그먼트 집중)</li>
                      <li>• 그룹 레슨 중심 운영 (1:4 수업으로 효율화)</li>
                      <li>• 가격 15만 → 12만으로 진입장벽 낮춤</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-900/20 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-white mb-1">옵션 3: Phase 1 복귀</p>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• 학원 폐업, 교습소로 복귀 (원장 직강 15명)</li>
                      <li>• 6개월간 추가 자본 축적 (Phase 1 연장)</li>
                      <li>• 재오픈 시 다른 지역 검토</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">⏱️ 결정 기한</p>
                <p className="text-sm text-slate-300">2주 내 옵션 결정, 4주 내 실행. 더 이상의 손실 방지 최우선.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">💰 재정 영향</p>
                <p className="text-sm text-slate-300">
                  월 순수익 154-192만원, 저축 54-92만원.
                  <br />
                  <span className="text-red-400 font-semibold">⚠️ 이 상태 지속 시 1억 저축 목표 달성 불가능. 즉각 조치 필요.</span>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M2 PLAN B */}
        <Dialog open={openDialog === 'm2-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">M2 PLAN B (32-39명, 80-99%)</DialogTitle>
              <DialogDescription className="text-slate-300">
                목표 대비 약간 부족하지만 성장세 유지
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">순수익 306-373만원. 목표 대비 약간 부족하지만 성장세 유지. 강사당 평균 4-5명으로 양호한 수준.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 즉시 실행 액션 (2주 내)</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 학생 추천 프로그램 강화 (추천인/피추천인 각 3만원 할인)</li>
                  <li>• 수강 후기 이벤트 (베스트 후기 3명 월 수강료 50% 할인)</li>
                  <li>• 인스타그램 릴스 주 5회 업로드 (강사 연주, 학생 성장 스토리)</li>
                  <li>• 키즈 부모 커뮤니티 공략 (맘카페, 학교 앞 전단지)</li>
                  <li>• 그룹 레슨 특가 (2명 이상 동시 등록 시 각 20% 할인)</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">⏱️ 회복 목표</p>
                <p className="text-sm text-slate-300">2주 내 40명 달성, Month 3에는 47명 목표 유지</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">💰 재정 영향</p>
                <p className="text-sm text-slate-300">월 순수익 306-373만원으로 저축 206-273만원 가능. 목표 달성 시간 2-3주 지연 예상.</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M2 PLAN C */}
        <Dialog open={openDialog === 'm2-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-orange-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-orange-400">M2 PLAN C (24-31명, 60-79%)</DialogTitle>
              <DialogDescription className="text-slate-300">
                성장 정체 - 전략 재점검
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">🚨 심각한 우려</p>
                <p className="text-sm text-slate-300">순수익 229-305만원. 목표 대비 상당한 부족. 강사당 3-4명으로 성장 정체. 전략 수정 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-3">🔄 전략 재검토</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">1. 강사 실적 분석:</span>
                    <span className="text-sm text-slate-300 ml-2">파트별 학생 수 점검, 저조한 강사 1:1 면담 및 교육 지원</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">2. 원장 직강 확대:</span>
                    <span className="text-sm text-slate-300 ml-2">15명 → 20명으로 증원, 내 명성 활용하여 신뢰도 상승</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">3. 파격 프로모션:</span>
                    <span className="text-sm text-slate-300 ml-2">2개월 특가 (첫 달 30% 할인, 3개월 등록 시 40% 할인)</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">4. 새로운 수익원:</span>
                    <span className="text-sm text-slate-300 ml-2">앙상블 클래스 신설 (월 10만원, 주 1회), 밴드 공연 워크숍</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">⏱️ 회복 기한</p>
                <p className="text-sm text-slate-300">1개월 내 32명 이상 달성 필수. 실패 시 Plan D 전환.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">💰 재정 영향</p>
                <p className="text-sm text-slate-300">월 순수익 229-305만원, 저축 129-205만원. 목표 달성 시간 2-3개월 지연 예상.</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M2 PLAN D */}
        <Dialog open={openDialog === 'm2-pland'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">M2 PLAN D (20-23명, 50-59%)</DialogTitle>
              <DialogDescription className="text-slate-300">
                위기 상황 - 구조조정 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 위기 상황</p>
                <p className="text-sm text-slate-300">순수익 191-220만원. 목표 대비 절반 수준. 강사 확장 모델 실패 징후. 근본적 재검토 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 근본적 재구조화</p>
                <div className="space-y-3">
                  <div className="p-3 bg-red-900/20 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-white mb-1">옵션 1: 강사 구조 조정</p>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• 실적 저조 강사 2명 정리 (드럼/기타 2명만 유지)</li>
                      <li>• 내 직강 비중 대폭 확대 (15명 → 25명)</li>
                      <li>• 인건비 절감 (강사급여 264만 → 132만)</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-900/20 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-white mb-1">옵션 2: 타겟 전환</p>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• 키즈 중심 학원으로 전환 (수요 집중 공략)</li>
                      <li>• 그룹 레슨 위주 운영 (1:4 수업, 효율 극대화)</li>
                      <li>• 키즈 20명 목표 (그룹 15만 × 20 = 300만원)</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-900/20 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-white mb-1">옵션 3: 공간 재협상</p>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• 월세 재협상 (180만 → 120만, 불가 시 이전 검토)</li>
                      <li>• 3개월 유예 기간 요청하여 회복 시간 확보</li>
                      <li>• 공유 공간 전환 (타 업종과 시간대별 공유)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">⏱️ 결정 기한</p>
                <p className="text-sm text-slate-300">2주 내 옵션 결정, 1개월 내 실행. 손실 최소화 최우선.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">💰 재정 영향</p>
                <p className="text-sm text-slate-300">
                  월 순수익 191-220만원, 저축 91-120만원.
                  <br />
                  <span className="text-red-400 font-semibold">⚠️ 이 상태 3개월 지속 시 1억 목표 불가능. 즉각 구조조정 필요.</span>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M3 PLAN B */}
        <Dialog open={openDialog === 'm3-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">M3 PLAN B (38-46명, 80-99%)</DialogTitle>
              <DialogDescription className="text-slate-300">
                목표 대비 약간 부족하지만 견고한 성장
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">순수익 354-433만원. 목표 대비 약간 부족하지만 견고한 성장. 강사당 평균 5-6명으로 안정적.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 즉시 실행 액션 (2주 내)</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 47명 달성 캠페인 (달성 시 전원 다음 달 5% 할인)</li>
                  <li>• 친구/가족 동반 등록 특가 (2명 25%, 3명 이상 35% 할인)</li>
                  <li>• 밴드/앙상블 클래스 신설 (월 10만원, 주 1회, 추가 수익원)</li>
                  <li>• 강사 인센티브 제공 (학생 6명 이상 확보 시 월 10만원 보너스)</li>
                  <li>• 지역 학교 앞 프로모션 (초중고 방과 후 타겟팅)</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">⏱️ 회복 목표</p>
                <p className="text-sm text-slate-300">2주 내 47명 달성, Month 4에는 52명 목표 유지</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">💰 재정 영향</p>
                <p className="text-sm text-slate-300">월 순수익 354-433만원으로 저축 254-333만원 가능. 목표 달성 시간 2-3주 지연 예상.</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M3 PLAN C */}
        <Dialog open={openDialog === 'm3-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-orange-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-orange-400">M3 PLAN C (28-37명, 60-79%)</DialogTitle>
              <DialogDescription className="text-slate-300">
                심각한 우려 - 전략 재검토 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">🚨 심각한 우려</p>
                <p className="text-sm text-slate-300">순수익 267-353만원. 목표 대비 큰 부족. 강사당 4-5명으로 성장 정체. Phase 1 종료 압박 상황.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-3">🔄 전략 재검토</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">1. Phase 1 병행 연장:</span>
                    <span className="text-sm text-slate-300 ml-2">교습소 1-2개월 추가 운영, 학원 안정화 시간 확보 (월 150만원 추가 수익)</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">2. 강사 재교육:</span>
                    <span className="text-sm text-slate-300 ml-2">1:1 코칭, 마케팅 교육, 실적 저조 강사 집중 지원 또는 교체 검토</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">3. 파격 프로모션:</span>
                    <span className="text-sm text-slate-300 ml-2">3개월 특가 (첫 달 40% 할인, 6개월 등록 시 50% 할인)</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">4. 수익 다각화:</span>
                    <span className="text-sm text-slate-300 ml-2">온라인 레슨 시작, 주말 워크숍 (월 30-50만원 추가 수익)</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">⏱️ 회복 기한</p>
                <p className="text-sm text-slate-300">1개월 내 38명 이상 달성 필수. 실패 시 Plan D 전환.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">💰 재정 영향</p>
                <p className="text-sm text-slate-300">월 순수익 267-353만원, 저축 167-253만원. 목표 달성 시간 2-4개월 지연 예상.</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M3 PLAN D */}
        <Dialog open={openDialog === 'm3-pland'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">M3 PLAN D (24-27명, 50-59%)</DialogTitle>
              <DialogDescription className="text-slate-300">
                위기 상황 - 근본적 재구조화 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 위기 상황</p>
                <p className="text-sm text-slate-300">순수익 229-258만원. 목표 대비 절반 수준. 확장 전략 실패. 근본적 방향 전환 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 근본적 재구조화</p>
                <div className="space-y-3">
                  <div className="p-3 bg-red-900/20 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-white mb-1">옵션 1: 하이브리드 모델</p>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• Phase 1 교습소 6개월 추가 운영 (월 150만원 안정 수익)</li>
                      <li>• 학원은 강사 2명만 유지 (드럼+기타)</li>
                      <li>• 합계 순수익 300-350만원으로 안정화</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-900/20 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-white mb-1">옵션 2: 키즈 전문 전환</p>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• 성인 강사반 정리, 키즈 전문 학원으로 리포지셔닝</li>
                      <li>• 그룹 레슨 중심 (1:4-6 수업)</li>
                      <li>• 키즈 30명 목표 (그룹 12만 × 30 = 360만원)</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-900/20 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-white mb-1">옵션 3: 공간/비용 재협상</p>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• 월세 30% 인하 협상 (180만 → 126만)</li>
                      <li>• 강사 인건비 재협상 (성과급 중심으로 전환)</li>
                      <li>• 3개월 유예 기간 확보하여 회복 시도</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">⏱️ 결정 기한</p>
                <p className="text-sm text-slate-300">2주 내 옵션 결정, 1개월 내 실행. 추가 손실 방지 최우선.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">💰 재정 영향</p>
                <p className="text-sm text-slate-300">
                  월 순수익 229-258만원, 저축 129-158만원.
                  <br />
                  <span className="text-red-400 font-semibold">⚠️ Phase 1 종료 시 저축률 급감. 하이브리드 모델 강력 권장.</span>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M4 PLAN B */}
        <Dialog open={openDialog === 'm4-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">M4 PLAN B (42-51명, 80-99%)</DialogTitle>
              <DialogDescription className="text-slate-300">
                목표 대비 약간 부족하지만 매우 양호
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">순수익 390-479만원. 목표 대비 약간 부족. 강사당 평균 6명으로 매우 양호. 마지막 스퍼트 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 즉시 실행 액션 (2주 내)</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 52명 달성 이벤트 (달성 시 전원 무료 특강 1회 제공)</li>
                  <li>• 기존 수강생 추천 보상 증액 (추천인 5만원, 신규 3만원 할인)</li>
                  <li>• 무료 체험 레슨 확대 (주 10회 제공, 전환율 집중 관리)</li>
                  <li>• 지역 학교 협력 강화 (방과 후 수업 제안, 학교 홍보물 배포)</li>
                  <li>• 공연/발표회 개최 (학부모 초청, 신규 유입 기회)</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">⏱️ 회복 목표</p>
                <p className="text-sm text-slate-300">2주 내 52명 달성, Month 5에는 58명 목표 유지</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">💰 재정 영향</p>
                <p className="text-sm text-slate-300">월 순수익 390-479만원으로 저축 290-379만원 가능. 목표 달성 시간 2-3주 지연 예상.</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M4 PLAN C */}
        <Dialog open={openDialog === 'm4-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">M4 PLAN C (45명 미만)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 목표 미달 확정 - 현실적 대응
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 현실 직시</p>
                <p className="text-sm text-slate-300">4개월차 500만원 목표 달성 실패. 하지만 포기는 이르다!</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 목표 수정 및 재설정</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">새 목표:</span>
                    <span className="text-sm text-slate-300 ml-2">5-6개월차에 500만원 달성으로 연기</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">성장 전략:</span>
                    <span className="text-sm text-slate-300 ml-2">무리한 확장보다 안정적 질적 성장 우선</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">수익 다각화:</span>
                    <span className="text-sm text-slate-300 ml-2">온라인 레슨, 워크샵, 발표회 등 새 수익원 개발</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-green-400 mb-2">💪 긍정적 측면</p>
                <p className="text-sm text-slate-300">
                  • 45명 유지 시 월 ~450만원 순수익 (충분히 괜찮은 수준)
                  <br />• Phase 1 대비 2배 이상 성장 달성
                  <br />• 안정적 운영 기반 확보됨
                  <br />• 시간을 두고 50명 이상 달성 가능
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M4 PLAN D */}
        <Dialog open={openDialog === 'm4-pland'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">M4 PLAN D (26-30명, 50-59%)</DialogTitle>
              <DialogDescription className="text-slate-300">
                위기 상황 - 전면 재구조화 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 위기 상황</p>
                <p className="text-sm text-slate-300">순수익 246-282만원. 목표 대비 절반 수준. 4개월 투자 대비 성과 미흡. 전면 재구조화 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 근본적 재구조화</p>
                <div className="space-y-3">
                  <div className="p-3 bg-red-900/20 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-white mb-1">옵션 1: 규모 대폭 축소</p>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• 강사 2명으로 축소 (가장 실적 좋은 파트만)</li>
                      <li>• 내 직강 비중 확대 (15명 → 25명)</li>
                      <li>• 고정비 절감 (인건비 264만 → 132만)</li>
                      <li>• 작지만 건강한 학원으로 재정비</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-900/20 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-white mb-1">옵션 2: 포지셔닝 전면 변경</p>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• 키즈 전문으로 완전 전환 (성인 정리)</li>
                      <li>• 그룹 레슨 중심 (1:5-8 수업)</li>
                      <li>• 키즈 40명 목표 (그룹 12만 × 40 = 480만원)</li>
                      <li>• 지역 최고 키즈 음악학원 브랜딩</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-900/20 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-white mb-1">옵션 3: 공간 이전 또는 재협상</p>
                    <ul className="text-sm text-slate-300 space-y-1 ml-4">
                      <li>• 현 공간 20평 → 10평 이하로 축소 이전</li>
                      <li>• 월세 180만 → 100만 이하로 절감</li>
                      <li>• 또는 현 공간 월세 40% 인하 협상</li>
                      <li>• 고정비 부담 대폭 경감</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">⏱️ 결정 기한</p>
                <p className="text-sm text-slate-300">2주 내 옵션 결정, 1개월 내 실행. 더 이상의 지연 불가.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">💰 재정 영향</p>
                <p className="text-sm text-slate-300">
                  월 순수익 246-282만원, 저축 146-182만원.
                  <br />
                  <span className="text-red-400 font-semibold">⚠️ 현 상태 6개월 지속 시 1억 목표 실패. 즉각 재구조화 필수.</span>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
