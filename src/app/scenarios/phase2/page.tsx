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
          <p className="text-sm text-slate-400">6개월 마일스톤 · 목표 순수익 500만원 (4개월차 달성)</p>

          {/* 현재 선택 상태 표시 */}
          <div className="mt-4 p-4 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-700/50 rounded-lg">
            <p className="text-xs text-indigo-300 mb-2">💡 시나리오 노드를 클릭하여 선택하세요</p>
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
        <div className="relative w-full h-[3600px] bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
          {/* SVG 연결선 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1600 3600" preserveAspectRatio="xMidYMin slice" style={{ zIndex: 1 }}>
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

            {/* M1 → 3 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              d="M 800 280 Q 650 310 300 340"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              d="M 800 280 L 800 340"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              d="M 800 280 Q 950 310 1300 340"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />

            {/* M1 Branches → M2 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              d="M 300 390 Q 500 490 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              d="M 800 390 Q 800 490 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              d="M 1300 390 Q 1100 490 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* M2 → 3 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              d="M 800 680 Q 650 710 300 740"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              d="M 800 680 L 800 740"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              d="M 800 680 Q 950 710 1300 740"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />

            {/* M2 Branches → M3 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.1 }}
              d="M 300 790 Q 500 850 800 920"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              d="M 800 790 Q 800 850 800 920"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.3 }}
              d="M 1300 790 Q 1100 850 800 920"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* M3 → 3 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              d="M 800 1000 Q 650 1030 300 1060"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              d="M 800 1000 L 800 1060"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              d="M 800 1000 Q 950 1030 1300 1060"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />

            {/* M3 Branches → M4 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.9 }}
              d="M 300 1110 Q 500 1170 800 1240"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 3.0 }}
              d="M 800 1110 Q 800 1170 800 1240"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 3.1 }}
              d="M 1300 1110 Q 1100 1170 800 1240"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* M4 → 3 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 3.2 }}
              d="M 800 1320 Q 650 1350 300 1380"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 3.3 }}
              d="M 800 1320 L 800 1380"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 3.4 }}
              d="M 800 1320 Q 950 1350 1300 1380"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />

            {/* M4 Branches → M5 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 3.7 }}
              d="M 300 1430 Q 500 1510 800 1600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 3.8 }}
              d="M 800 1430 Q 800 1510 800 1600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 3.9 }}
              d="M 1300 1430 Q 1100 1510 800 1600"
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

            {/* ========== M1: Month 1 - 35명 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute left-1/2 top-[200px] -translate-x-1/2"
              style={{ width: '380px' }}
            >
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-4 shadow-[0_0_35px_rgba(6,182,212,0.5)] border-2 border-cyan-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 1</p>
                <p className="text-lg font-black text-center">총 35명 달성?</p>
                <p className="text-xs text-center opacity-80 mt-1">직강 15 + 강사 20</p>
              </div>
            </motion.div>

            {/* M1 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute left-[8%] top-[300px]"
              style={{ width: '280px' }}
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 border-green-400/40 hover:scale-105 transition-transform cursor-pointer">
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-base font-black">35명 이상</p>
                  <p className="text-xs opacity-70">SUCCESS</p>
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 ~350만원</p>
                  <p className="mt-1">→ M2 진행</p>
                </div>
              </div>
            </motion.div>

            {/* M1 - Plan B */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute left-1/2 top-[300px] -translate-x-1/2"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m1-planb')}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">28-34명</p>
                  <p className="text-xs opacity-70">PLAN B - 성장 둔화</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">🎯 즉시 액션:</p>
                  <p>• 강사 프로모션 강화</p>
                  <p>• 무료 체험 레슨</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M1 - Plan C */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute right-[8%] top-[300px]"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m1-planc')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">28명 미만</p>
                  <p className="text-xs opacity-70">PLAN C - 위험</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">🔄 전략 수정:</p>
                  <p>• 강사 재배치 검토</p>
                  <p>• 가격 정책 조정</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== M2: Month 2 - 40명 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute left-1/2 top-[600px] -translate-x-1/2"
              style={{ width: '380px' }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 shadow-[0_0_35px_rgba(59,130,246,0.5)] border-2 border-blue-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 2</p>
                <p className="text-lg font-black text-center">총 40명 달성?</p>
                <p className="text-xs text-center opacity-80 mt-1">직강 15 + 강사 25</p>
              </div>
            </motion.div>

            {/* M2 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              className="absolute left-[8%] top-[700px]"
              style={{ width: '280px' }}
            >
              <div
                onClick={() => handleSelect('m1_2', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 ${
                  selections.phase2.m1_2 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/40'
                } hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-base font-black">40명 이상</p>
                  <p className="text-xs opacity-70">SUCCESS</p>
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 ~400만원</p>
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
              transition={{ delay: 1.7 }}
              className="absolute left-1/2 top-[700px] -translate-x-1/2"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m2-planb')}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">35-39명</p>
                  <p className="text-xs opacity-70">PLAN B - 목표 근접</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">🎯 강화 전략:</p>
                  <p>• 추천 보상 2배</p>
                  <p>• 그룹 레슨 특가</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M2 - Plan C */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              className="absolute right-[8%] top-[700px]"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m2-planc')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">35명 미만</p>
                  <p className="text-xs opacity-70">PLAN C - 재검토</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">🔄 개선 방안:</p>
                  <p>• 강사 실적 분석</p>
                  <p>• 직강 비중 증가</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== M3: Month 3 - 45명 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
              className="absolute left-1/2 top-[920px] -translate-x-1/2"
              style={{ width: '380px' }}
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4 shadow-[0_0_35px_rgba(99,102,241,0.5)] border-2 border-indigo-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 3</p>
                <p className="text-lg font-black text-center">총 45명 달성?</p>
                <p className="text-xs text-center opacity-80 mt-1">직강 18 + 강사 27</p>
              </div>
            </motion.div>

            {/* M3 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4 }}
              className="absolute left-[8%] top-[1020px]"
              style={{ width: '280px' }}
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 border-green-400/40 hover:scale-105 transition-transform cursor-pointer">
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-base font-black">45명 이상</p>
                  <p className="text-xs opacity-70">SUCCESS</p>
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
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
              className="absolute left-1/2 top-[1020px] -translate-x-1/2"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m3-planb')}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">40-44명</p>
                  <p className="text-xs opacity-70">PLAN B - 최종 스퍼트</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">🎯 집중 공략:</p>
                  <p>• 목표 달성 이벤트</p>
                  <p>• 팀 레슨 프로모션</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M3 - Plan C */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6 }}
              className="absolute right-[8%] top-[1020px]"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m3-planc')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">40명 미만</p>
                  <p className="text-xs opacity-70">PLAN C - 목표 조정</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">🔄 재구성:</p>
                  <p>• 목표 재설정</p>
                  <p>• 비용 최적화</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== M4: Month 4 - 50명 (목표 달성!) ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0 }}
              className="absolute left-1/2 top-[1240px] -translate-x-1/2"
              style={{ width: '400px' }}
            >
              <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-xl p-4 shadow-[0_0_50px_rgba(234,179,8,0.6)] border-3 border-yellow-400/60">
                <p className="text-xs font-bold text-center opacity-90 mb-1">Month 4 🎯</p>
                <p className="text-xl font-black text-center">총 50명 달성?</p>
                <p className="text-sm text-center font-bold opacity-90 mt-1">직강 18 + 강사 32</p>
              </div>
            </motion.div>

            {/* M4 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.2 }}
              className="absolute left-[8%] top-[1340px]"
              style={{ width: '300px' }}
            >
              <div
                onClick={() => handleSelect('m3_6', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_40px_rgba(16,185,129,0.5)] border-2 ${
                  selections.phase2.m3_6 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/50'
                } hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-center mb-2">
                  <div className="text-3xl mb-1">🏆</div>
                  <p className="text-lg font-black">50명 이상</p>
                  <p className="text-xs opacity-70">🎯 목표 달성!</p>
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold text-yellow-300">순수익 500만원 달성 ✨</p>
                  <p className="mt-1">→ M5 안정화 단계</p>
                </div>
                {selections.phase2.m3_6 === 'success' && (
                  <CheckCircle2 className="w-6 h-6 mx-auto mt-2 text-green-300" />
                )}
              </div>
            </motion.div>

            {/* M4 - Plan B */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.3 }}
              className="absolute left-1/2 top-[1340px] -translate-x-1/2"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m4-planb')}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">45-49명</p>
                  <p className="text-xs opacity-70">PLAN B - 아슬아슬</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">🎯 최종 돌파:</p>
                  <p>• 긴급 프로모션</p>
                  <p>• 전직원 총동원</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M4 - Plan C */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.4 }}
              className="absolute right-[8%] top-[1340px]"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m4-planc')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">45명 미만</p>
                  <p className="text-xs opacity-70">PLAN C - 현실 직시</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">🔄 목표 수정:</p>
                  <p>• 500만원 목표 연기</p>
                  <p>• 성장 전략 재수립</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== M5: Month 5 - 55명 (안정화) ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.0 }}
              className="absolute left-1/2 top-[1600px] -translate-x-1/2"
              style={{ width: '380px' }}
            >
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-4 shadow-[0_0_35px_rgba(16,185,129,0.5)] border-2 border-emerald-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 5 - 안정화</p>
                <p className="text-lg font-black text-center">총 55명 달성</p>
                <p className="text-xs text-center opacity-80 mt-1">직강 20 + 강사 35 → ~550만원</p>
              </div>
            </motion.div>

            {/* ========== M6: Month 6 - 60명 (완성) ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.4 }}
              className="absolute left-1/2 top-[1800px] -translate-x-1/2"
              style={{ width: '380px' }}
            >
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-4 shadow-[0_0_35px_rgba(20,184,166,0.5)] border-2 border-teal-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 6 - 완성</p>
                <p className="text-lg font-black text-center">총 60명 달성</p>
                <p className="text-xs text-center opacity-80 mt-1">직강 20 + 강사 40 → ~600만원</p>
              </div>
            </motion.div>

            {/* Final Success */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 4.8 }}
              className="absolute left-1/2 top-[2030px] -translate-x-1/2"
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
              <DialogTitle className="text-2xl font-bold text-amber-400">M1 PLAN B (28-34명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                초기 성장 둔화 - 강사 클래스 활성화 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">학원 오픈 초기 단계. 강사 클래스 홍보 강화 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 즉시 액션</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 강사별 프로모션 진행 (첫 달 20% 할인)</li>
                  <li>• 무료 체험 레슨 (드럼/기타/피아노 각 주 2회)</li>
                  <li>• 지역 마케팅 집중 (아파트 단지, 학교 주변)</li>
                  <li>• 강사 소개 영상 제작 (SNS 홍보)</li>
                  <li>• 키즈 레슨 집중 모집</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">⏱️ 목표</p>
                <p className="text-sm text-slate-300">1개월 내 35명 달성 (추가 모집 필요)</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M1 PLAN C */}
        <Dialog open={openDialog === 'm1-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">M1 PLAN C (28명 미만)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 위험 신호 - 시장 반응 재점검
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 위험 신호</p>
                <p className="text-sm text-slate-300">Phase 1 대비 성장 미흡. 전략 전면 재검토 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 전략 재검토 옵션</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 1:</span>
                    <span className="text-sm text-slate-300 ml-2">강사 재배치 (잘되는 파트 집중)</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 2:</span>
                    <span className="text-sm text-slate-300 ml-2">가격 정책 조정 (프로모션 가격 연장)</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 3:</span>
                    <span className="text-sm text-slate-300 ml-2">타겟층 확대 (성인 야간 클래스 추가)</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">💰 손실 통제</p>
                <p className="text-sm text-slate-300">
                  고정비 200만원 지속. Phase 1 수익으로 일부 충당 가능.
                  <br />
                  <span className="text-amber-400 font-semibold">2개월 이내 개선 안 되면 규모 축소 검토</span>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M2 PLAN B */}
        <Dialog open={openDialog === 'm2-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">M2 PLAN B (35-39명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                목표에 근접 - 마지막 푸시 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">성장세 유지 중. 조금만 더 집중하면 목표 달성 가능</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 강화 전략</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 추천 보상 2배 증액 (각 3만원)</li>
                  <li>• 그룹 레슨 특가 프로모션</li>
                  <li>• 수강 후기 이벤트 진행</li>
                  <li>• 키즈 부모 커뮤니티 공략</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">⏱️ 목표</p>
                <p className="text-sm text-slate-300">1-2주 내 40명 돌파</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M2 PLAN C */}
        <Dialog open={openDialog === 'm2-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">M2 PLAN C (35명 미만)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 성장 정체 - 전략 재점검
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 성장 정체</p>
                <p className="text-sm text-slate-300">회원 증가 둔화. 강사 실적 점검 필요</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 개선 방안</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 1:</span>
                    <span className="text-sm text-slate-300 ml-2">강사별 실적 분석 후 지원 강화</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 2:</span>
                    <span className="text-sm text-slate-300 ml-2">내 직강 비중 일시 증가 검토</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 3:</span>
                    <span className="text-sm text-slate-300 ml-2">새로운 수익원 탐색 (앙상블 클래스 등)</span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M3 PLAN B */}
        <Dialog open={openDialog === 'm3-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">M3 PLAN B (40-44명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                목표 직전 - 최종 스퍼트 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">목표 50명까지 5-10명 부족. 집중 공략 필요</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 집중 공략</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 50명 달성 이벤트 (달성 시 전원 추가 혜택)</li>
                  <li>• 친구/가족 동반 등록 특가 (3명 이상 30% 할인)</li>
                  <li>• 팀 레슨 프로모션 (밴드/앙상블 클래스 특가)</li>
                  <li>• 강사 인센티브 강화 (목표 달성 시 보너스)</li>
                  <li>• SNS 이벤트 (공유 시 추첨 혜택)</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">⏱️ 목표</p>
                <p className="text-sm text-slate-300">1개월 내 45명 돌파, 4개월차 50명 달성</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M3 PLAN C */}
        <Dialog open={openDialog === 'm3-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">M3 PLAN C (40명 미만)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 목표 미달 예상 - 전략 재조정
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 위기 상황</p>
                <p className="text-sm text-slate-300">4개월차 500만원 목표 달성 어려움. 현실적 재평가 필요</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 전략 재구성</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 1:</span>
                    <span className="text-sm text-slate-300 ml-2">목표 재설정 (500만원 달성 시기를 5-6개월차로 연기)</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 2:</span>
                    <span className="text-sm text-slate-300 ml-2">비용 최적화 (마케팅 비용 조정, ROI 분석)</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 3:</span>
                    <span className="text-sm text-slate-300 ml-2">수익 구조 다변화 (온라인 레슨, 워크샵 등)</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">💡 긍정적 관점</p>
                <p className="text-sm text-slate-300">
                  40명 유지 시 월 ~400만원 순수익 확보.
                  <br />안정적 운영은 가능하므로, 무리한 확장보다는 질적 성장 우선
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M4 PLAN B */}
        <Dialog open={openDialog === 'm4-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">M4 PLAN B (45-49명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                아슬아슬 - 최후의 돌파 작전
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">목표까지 1-5명 부족. 이번 달이 마지막 기회!</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 최종 돌파 작전</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 긴급 특가 프로모션 (1주일 한정 50% 할인)</li>
                  <li>• 전 직원 총동원 (원장 + 모든 강사 영업 집중)</li>
                  <li>• 기존 수강생 추천 보상 특별 증액 (5만원)</li>
                  <li>• 무료 특강 이벤트 (전환율 집중)</li>
                  <li>• 지역 밀착 마케팅 최대화 (전단, SNS 총공격)</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">⏱️ 목표</p>
                <p className="text-sm text-slate-300">이번 달 내 50명 달성, 500만원 목표 완수</p>
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
      </div>
    </div>
  )
}
