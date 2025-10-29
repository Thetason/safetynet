"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useScenario } from '@/contexts/ScenarioContext'
import type { ScenarioChoice } from '@/contexts/ScenarioContext'

export default function Phase1ScenarioPage() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)
  const { selections, updateSelection } = useScenario()

  const handleSelect = (milestone: 'm1_3' | 'm4_5', choice: ScenarioChoice) => {
    updateSelection('phase1', milestone, choice)
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
            Phase 1 시나리오 분석 (5개월)
          </h1>
          <p className="text-sm text-slate-400">각 마일스톤별 의사결정 플로우</p>

          {/* 현재 선택 상태 표시 */}
          <div className="mt-4 p-4 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-700/50 rounded-lg">
            <p className="text-xs text-indigo-300 mb-2">💡 시나리오 노드를 클릭하여 선택하세요</p>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-300">M1-3:</span>
                <span className={`font-bold ${
                  selections.phase1.m1_3 === 'success' ? 'text-green-400' :
                  selections.phase1.m1_3 === 'planB' ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {selections.phase1.m1_3 === 'success' ? 'SUCCESS' :
                   selections.phase1.m1_3 === 'planB' ? 'PLAN B' : 'PLAN C'}
                </span>
              </div>
              <div className="flex items-center gap-2">
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
        </div>

        {/* Canvas */}
        <div className="relative w-full h-[2100px] bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
          {/* SVG 연결선 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1600 2100" preserveAspectRatio="xMidYMin slice" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="line1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* START → MONTH 1 */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              x1="800" y1="100" x2="800" y2="180"
              stroke="url(#line1)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* MONTH 1 → 3 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              d="M 800 240 Q 650 300 210 385"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              d="M 800 240 L 800 385"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              d="M 800 240 Q 950 300 1390 385"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />

            {/* Branches → MONTH 2 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              d="M 210 460 Q 450 530 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              d="M 800 460 L 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              d="M 1390 460 Q 1150 530 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* MONTH 2 → 3 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              d="M 800 640 Q 650 710 210 795"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              d="M 800 640 L 800 795"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              d="M 800 640 Q 950 710 1390 795"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />

            {/* Branches → MONTH 3 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.3 }}
              d="M 210 870 Q 450 945 800 1020"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              d="M 800 870 L 800 1020"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              d="M 1390 870 Q 1150 945 800 1020"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* MONTH 3 → 3 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              d="M 800 1060 Q 650 1140 210 1225"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.9 }}
              d="M 800 1060 L 800 1225"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 3.0 }}
              d="M 800 1060 Q 950 1140 1390 1225"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />

            {/* Branches → MONTH 4-5 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 3.3 }}
              d="M 210 1300 Q 450 1385 800 1470"
              stroke="#6366f1"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 3.4 }}
              d="M 800 1300 L 800 1470"
              stroke="#6366f1"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 3.5 }}
              d="M 1390 1300 Q 1150 1385 800 1470"
              stroke="#6366f1"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* MONTH 4-5 → Final Success */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.8 }}
              d="M 800 1510 L 800 1620"
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
                  <p className="text-xl font-black">Phase 1: 5개월</p>
                  <p className="text-sm mt-1">목표 21명 (월 300만원)</p>
                </div>
              </div>
            </motion.div>

            {/* ========== MONTH 1 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute left-1/2 top-[180px] -translate-x-1/2"
              style={{ width: '360px' }}
            >
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 shadow-[0_0_35px_rgba(16,185,129,0.5)] border-2 border-green-400/50">
                <p className="text-lg font-black text-center">MONTH 1: 5명?</p>
                <p className="text-xs text-center opacity-80 mt-1">최소 안전선 확보</p>
              </div>
            </motion.div>

            {/* Month 1 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute left-[5%] top-[320px]"
              style={{ width: '260px' }}
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 border-green-400/40 hover:scale-105 transition-transform cursor-pointer">
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-base font-black">5명 이상</p>
                  <p className="text-xs opacity-70">SUCCESS</p>
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">→ Month 2 진행</p>
                </div>
              </div>
            </motion.div>

            {/* Month 1 - Plan B */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute left-1/2 top-[320px] -translate-x-1/2"
              style={{ width: '300px' }}
            >
              <div
                onClick={() => setOpenDialog('month1-planb')}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">3-4명</p>
                  <p className="text-xs opacity-70">PLAN B - 70% 달성</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">🎯 즉시 액션:</p>
                  <p>• 광고비 2배 증액</p>
                  <p>• 무료체험 이벤트</p>
                  <p>• 추천 보상 시스템</p>
                  <p>• 오프라인 홍보</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 전체 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* Month 1 - Plan C */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute right-[5%] top-[320px]"
              style={{ width: '300px' }}
            >
              <div
                onClick={() => setOpenDialog('month1-planc')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">0-2명</p>
                  <p className="text-xs opacity-70">PLAN C - 위험</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">🔄 전략 수정:</p>
                  <p>• 타겟층 변경</p>
                  <p>• 가격 할인 (25%↓)</p>
                  <p>• 1개월 추가 테스트</p>
                  <p className="text-yellow-300 text-[9px]">손실: ~50만원</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 전체 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== MONTH 2 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute left-1/2 top-[570px] -translate-x-1/2"
              style={{ width: '360px' }}
            >
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-4 shadow-[0_0_35px_rgba(234,88,12,0.5)] border-2 border-orange-400/50">
                <p className="text-lg font-black text-center">MONTH 2: 누적 10명?</p>
                <p className="text-xs text-center opacity-80 mt-1">공격적 확장</p>
              </div>
            </motion.div>

            {/* Month 2 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              className="absolute left-[5%] top-[730px]"
              style={{ width: '260px' }}
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 border-green-400/40 hover:scale-105 transition-transform cursor-pointer">
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-base font-black">10명 이상</p>
                  <p className="text-xs opacity-70">SUCCESS</p>
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">→ Month 3 진행</p>
                </div>
              </div>
            </motion.div>

            {/* Month 2 - Plan B */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="absolute left-1/2 top-[730px] -translate-x-1/2"
              style={{ width: '300px' }}
            >
              <div
                onClick={() => setOpenDialog('month2-planb')}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">7-9명</p>
                  <p className="text-xs opacity-70">PLAN B - 성장 둔화</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">🎯 강화 전략:</p>
                  <p>• 추천 보상 2배 증액</p>
                  <p>• 수강 후기 영상</p>
                  <p>• 그룹 레슨 특가</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 전체 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* Month 2 - Plan C */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              className="absolute right-[5%] top-[730px]"
              style={{ width: '300px' }}
            >
              <div
                onClick={() => setOpenDialog('month2-planc')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">6명 이하</p>
                  <p className="text-xs opacity-70">PLAN C - 2개월 연속</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">🔄 전면 재검토:</p>
                  <p>• Phase 1 연장 고려</p>
                  <p>• 상권 변경 검토</p>
                  <p>• 사업 축소 옵션</p>
                  <p className="text-yellow-300 text-[9px]">누적 손실: ~150만원</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 전체 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== MONTH 3 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
              className="absolute left-1/2 top-[990px] -translate-x-1/2"
              style={{ width: '360px' }}
            >
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl p-4 shadow-[0_0_35px_rgba(234,179,8,0.5)] border-2 border-yellow-400/50">
                <p className="text-lg font-black text-center">MONTH 3: 15명?</p>
                <p className="text-xs text-center opacity-80 mt-1">🏆 핵심 분기점!</p>
              </div>
            </motion.div>

            {/* Month 3 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6 }}
              className="absolute left-[5%] top-[1160px]"
              style={{ width: '260px' }}
            >
              <div
                onClick={() => handleSelect('m1_3', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase1.m1_3 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">🎉</div>
                  <p className="text-base font-black">15명 이상</p>
                  <p className="text-xs opacity-70">SUCCESS</p>
                  {selections.phase1.m1_3 === 'success' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-green-300" />
                  )}
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">Phase 2 준비 시작!</p>
                </div>
              </div>
            </motion.div>

            {/* Month 3 - Plan B */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7 }}
              className="absolute left-1/2 top-[1160px] -translate-x-1/2"
              style={{ width: '300px' }}
            >
              <div
                onClick={() => {
                  handleSelect('m1_3', 'planB')
                  setOpenDialog('month3-planb')
                }}
                className={`bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase1.m1_3 === 'planB' ? 'border-amber-300 ring-4 ring-amber-400/50' : 'border-amber-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">12-14명</p>
                  <p className="text-xs opacity-70">PLAN B - 목표 근접</p>
                  {selections.phase1.m1_3 === 'planB' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-amber-300" />
                  )}
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">📅 일정 조정:</p>
                  <p>• Month 4에서 15명 달성</p>
                  <p>• 프리미엄 가격 정착</p>
                  <p>• Phase 2 오픈 1개월 연기</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 전체 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* Month 3 - Plan C */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.8 }}
              className="absolute right-[5%] top-[1160px]"
              style={{ width: '300px' }}
            >
              <div
                onClick={() => {
                  handleSelect('m1_3', 'planC')
                  setOpenDialog('month3-planc')
                }}
                className={`bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase1.m1_3 === 'planC' ? 'border-red-300 ring-4 ring-red-400/50' : 'border-red-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">11명 이하</p>
                  <p className="text-xs opacity-70">PLAN C - 핵심 분기점</p>
                  {selections.phase1.m1_3 === 'planC' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-red-300" />
                  )}
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">🔄 3가지 선택지:</p>
                  <p>• Phase 2 축소 (10평)</p>
                  <p>• Phase 1 지속 운영</p>
                  <p>• 사업 정리</p>
                  <p className="text-yellow-300 text-[9px]">누적: ~200만원</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 전체 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== MONTH 4-5 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2 }}
              className="absolute left-1/2 top-[1440px] -translate-x-1/2"
              style={{ width: '400px' }}
            >
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-4 shadow-[0_0_35px_rgba(99,102,241,0.5)] border-2 border-indigo-400/50">
                <p className="text-lg font-black text-center">MONTH 4-5: Phase 2 준비</p>
                <p className="text-xs text-center opacity-80 mt-1">안정화 & 다음 단계</p>
              </div>
            </motion.div>

            {/* Month 4-5 - Final Success */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.6 }}
              className="absolute left-1/2 top-[1620px] -translate-x-1/2"
              style={{ width: '350px' }}
            >
              <div
                onClick={() => handleSelect('m4_5', 'success')}
                className={`bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 rounded-xl p-5 shadow-[0_0_50px_rgba(16,185,129,0.6)] border-3 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase1.m4_5 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/60'
                }`}
              >
                <div className="text-center mb-3">
                  <div className="text-4xl mb-2">🎉</div>
                  <p className="text-xl font-black">Phase 1 완료!</p>
                  <p className="text-sm opacity-90 mt-1">21명 달성 + 월 300만원</p>
                  {selections.phase1.m4_5 === 'success' && (
                    <CheckCircle2 className="w-6 h-6 mx-auto mt-2 text-green-300" />
                  )}
                </div>
                <div className="space-y-2 text-xs bg-white/20 rounded-lg p-3 border border-white/30">
                  <p className="font-bold">✅ 15명+ 안정적 유지</p>
                  <p className="font-bold">✅ Phase 2 상권 선택</p>
                  <p className="font-bold">✅ 학원 오픈 준비</p>
                  <p className="text-yellow-300 font-bold mt-2">→ Phase 2 진입!</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========== DIALOGS ========== */}

        {/* Month 1 PLAN B */}
        <Dialog open={openDialog === 'month1-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">Month 1 PLAN B (3-4명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                70% 달성 - 손익분기는 넘겼으나 목표 미달
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">손익분기는 넘겼으나 목표 미달. 광고 효율 개선 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 즉시 액션</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 광고비 20만원으로 증액 (10만원 → 20만원)</li>
                  <li>• 무료 1회 체험 레슨 이벤트 (SNS 광고)</li>
                  <li>• 기존 수강생 추천 보상 (추천 시 1만원 할인)</li>
                  <li>• 컨텐츠 마케팅 강화 (비포/애프터 영상, 수강 후기)</li>
                  <li>• 오프라인 홍보 (중랑역 근처 전단지, 포스터)</li>
                  <li>• 지역 커뮤니티 연계 (당근마켓, 네이버 카페)</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">⏱️ 타임라인</p>
                <p className="text-sm text-slate-300">2주 내 2명 추가 확보 목표 (총 5명)</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 1 PLAN C */}
        <Dialog open={openDialog === 'month1-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">Month 1 PLAN C (2명 이하)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 위험 신호 - 시장 반응 미흡
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 위험 신호</p>
                <p className="text-sm text-slate-300">시장 반응 미흡. 전략 전면 재검토 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 전략 재검토 옵션</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 1:</span>
                    <span className="text-sm text-slate-300 ml-2">타겟 변경 (20-30대 → 40-50대 주부)</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 2:</span>
                    <span className="text-sm text-slate-300 ml-2">가격 조정 (20만원 → 15만원 프로모션)</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 3:</span>
                    <span className="text-sm text-slate-300 ml-2">1개월 추가 테스트 (Month 1.5 설정)</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">💰 손실 통제</p>
                <p className="text-sm text-slate-300">
                  최대 손실: 약 50만원 (광고비 30만원 + 운영비 차액 20만원)
                  <br />
                  <span className="text-green-400 font-semibold">실업급여로 충당 가능 (월 180만원)</span>
                </p>
              </div>
              <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
                <p className="font-bold text-slate-300 mb-2">🛡️ 최종 안전망</p>
                <p className="text-xs text-slate-400">
                  2개월 연속 Plan C 상황 발생 시 → <strong>손실 최소화 후 정리</strong>
                  <br />• 작업실 계약 해지 (보증금 회수)
                  <br />• 실업급여는 계속 수령 (남은 기간)
                  <br />• 총 예상 손실: 약 100-150만원
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 2 PLAN B */}
        <Dialog open={openDialog === 'month2-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">Month 2 PLAN B (7-9명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                성장은 하고 있으나 속도가 느림
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">성장은 하고 있으나 속도가 느림. 입소문 시스템 강화 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 즉시 액션</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 추천 보상 강화 (추천인·피추천인 각 2만원 할인)</li>
                  <li>• 수강 후기 영상 제작 (인스타그램 릴스, 유튜브 쇼츠)</li>
                  <li>• 그룹 레슨 얼리버드 (1:2 레슨 특가 15만원)</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">⏱️ 타임라인</p>
                <p className="text-sm text-slate-300">Month 3에서 10명 달성 → Month 4에서 15명 목표로 조정</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 2 PLAN C */}
        <Dialog open={openDialog === 'month2-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">Month 2 PLAN C (6명 이하)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 심각한 경고 - 2개월 연속 저조
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 심각한 경고</p>
                <p className="text-sm text-slate-300">2개월 연속 저조. 근본적인 문제 해결 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 재검토 옵션</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 1:</span>
                    <span className="text-sm text-slate-300 ml-2">Phase 1 연장 (1-2개월 추가)</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 2:</span>
                    <span className="text-sm text-slate-300 ml-2">상권 변경 검토 (다른 지역 테스트)</span>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <span className="font-semibold text-white">옵션 3:</span>
                    <span className="text-sm text-slate-300 ml-2">사업 축소 (Phase 2 포기, 작업실 유지)</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">💰 손실 통제</p>
                <p className="text-sm text-slate-300">
                  누적 손실: 약 100-150만원
                  <br />
                  <span className="text-green-400 font-semibold">실업급여로 계속 충당 가능</span>
                  <br />
                  <span className="text-amber-400 font-semibold mt-1 block">→ 3개월째에도 개선 없으면 정리 권장</span>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 3 PLAN B */}
        <Dialog open={openDialog === 'month3-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">Month 3 PLAN B (12-14명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                목표에 근접했으나 미달
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">목표에 근접했으나 미달. Phase 2 일정 조정 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 즉시 액션</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• Month 4에서 15명 달성 집중 (추가 1개월)</li>
                  <li>• 프리미엄 가격 본격화 (25만원 정착)</li>
                  <li>• 대기자 우선 모집 (Phase 2 준비는 계속)</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">⏱️ 타임라인</p>
                <p className="text-sm text-slate-300">
                  Phase 2 오픈 1개월 연기 (2026.04 → 2026.05)
                  <br />
                  <span className="text-amber-400 font-semibold">* 여전히 안전한 범위</span>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 3 PLAN C */}
        <Dialog open={openDialog === 'month3-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">Month 3 PLAN C (11명 이하) ⚠️</DialogTitle>
              <DialogDescription className="text-slate-300">
                심각한 상황 - Phase 2 전면 재검토 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 심각한 상황</p>
                <p className="text-sm text-slate-300 font-semibold">
                  3개월간 목표 미달 → Phase 2 전면 재검토 필요
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 선택지</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-amber-500">
                    <p className="font-semibold text-amber-400 mb-1">옵션 1: Phase 2 연기 또는 축소</p>
                    <p className="text-xs text-slate-400">
                      • 20평 학원 → 10평 소형 공간으로 축소
                      <br />• 강사 채용 없이 1인 운영 집중
                      <br />• 초기 투자 최소화 (월세 100만원 이하)
                    </p>
                  </div>
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-400 mb-1">옵션 2: Phase 1 지속 (작업실 유지)</p>
                    <p className="text-xs text-slate-400">
                      • Phase 2 포기, 현재 상태 유지
                      <br />• 11명 × 20만원 = 220만원 수익 구조
                      <br />• 순이익 약 130-150만원 안정 운영
                    </p>
                  </div>
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-400 mb-1">옵션 3: 사업 정리</p>
                    <p className="text-xs text-slate-400">
                      • 작업실 계약 종료 (보증금 회수)
                      <br />• 실업급여 남은 기간 수령
                      <br />• 다른 진로 검토 (취업, 프리랜서 등)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">💰 손실 분석</p>
                <p className="text-sm text-slate-300">
                  누적 손실: 약 150-200만원
                  <br />
                  <span className="text-green-400 font-semibold">실업급여 총 900만원 대비 안전</span>
                  <br />
                  <span className="text-red-400 font-bold mt-2 block">
                    ⚠️ 중요: 혜림이와 상의 후 결정 권장
                  </span>
                </p>
              </div>
              <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
                <p className="font-bold text-indigo-400 mb-2">💡 결론</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Month 3는 Phase 1의 <strong>핵심 분기점</strong>입니다.
                  <br />• 15명 달성 → Phase 2 자신있게 진행
                  <br />• 12-14명 → Phase 2 조정하며 진행 가능
                  <br />• 11명 이하 → 혜림이와 진지하게 논의
                  <br /><br />
                  <strong className="text-indigo-300">가장 중요한 것: 불안감 없이 결정할 수 있는 안전망이 있다는 점</strong>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
