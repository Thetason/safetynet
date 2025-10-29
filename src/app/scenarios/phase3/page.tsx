"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useScenario } from '@/contexts/ScenarioContext'
import type { ScenarioChoice } from '@/contexts/ScenarioContext'

export default function Phase3ScenarioPage() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)
  const { selections, updateSelection } = useScenario()

  const handleSelect = (milestone: 'm1_2' | 'm3' | 'm6', choice: ScenarioChoice) => {
    updateSelection('phase3', milestone, choice)
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
            Phase 3 시나리오 분석 (Deep Dive - 확장)
          </h1>
          <p className="text-sm text-slate-400">12개월 마일스톤 · 목표 순수익 800만원 → 월 저축 500만원</p>

          {/* 현재 선택 상태 표시 */}
          <div className="mt-4 p-4 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-700/50 rounded-lg">
            <p className="text-xs text-indigo-300 mb-2">💡 시나리오 노드를 클릭하여 선택하세요</p>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-300">M1-2:</span>
                <span className={`font-bold ${
                  selections.phase3.m1_2 === 'success' ? 'text-green-400' :
                  selections.phase3.m1_2 === 'planB' ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {selections.phase3.m1_2 === 'success' ? 'SUCCESS' :
                   selections.phase3.m1_2 === 'planB' ? 'PLAN B' : 'PLAN C'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-300">M3:</span>
                <span className={`font-bold ${
                  selections.phase3.m3 === 'success' ? 'text-green-400' :
                  selections.phase3.m3 === 'planB' ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {selections.phase3.m3 === 'success' ? 'SUCCESS' :
                   selections.phase3.m3 === 'planB' ? 'PLAN B' : 'PLAN C'}
                </span>
              </div>
              <div className="flex items-center gap-2">
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

        {/* Canvas */}
        <div className="relative w-full h-[3600px] bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
          {/* SVG 연결선 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1600 3600" preserveAspectRatio="xMidYMin slice" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="line3" x1="0%" y1="0%" x2="0%" y2="100%">
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
              stroke="url(#line3)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* M1 → 3 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              d="M 800 280 Q 650 310 300 340"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              d="M 800 280 L 800 340"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              d="M 800 280 Q 950 310 1300 340"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />

            {/* M1 Branches → M3 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              d="M 300 390 Q 500 570 800 760"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              d="M 800 390 Q 800 570 800 760"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              d="M 1300 390 Q 1100 570 800 760"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* M3 → 3 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              d="M 800 560 Q 650 610 300 660"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              d="M 800 560 L 800 660"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              d="M 800 560 Q 950 610 1300 660"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />

            {/* Branches → M6 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.7 }}
              d="M 300 710 Q 500 710 800 760"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              d="M 800 710 L 800 760"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.9 }}
              d="M 1300 710 Q 1100 710 800 760"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* M6 → 3 branches */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              d="M 800 840 Q 650 870 300 900"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              d="M 800 840 L 800 900"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              d="M 800 840 Q 950 870 1300 900"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />

            {/* M6 Branches → M12 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              d="M 300 950 Q 500 990 800 1040"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              d="M 800 950 Q 800 990 800 1040"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 2.6 }}
              d="M 1300 950 Q 1100 990 800 1040"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* M12 → Final Success */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              d="M 800 1200 L 800 1350"
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
              style={{ width: '380px' }}
            >
              <div className="bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-xl p-5 shadow-[0_0_40px_rgba(6,182,212,0.4)] border-2 border-cyan-400/40">
                <div className="text-center">
                  <p className="text-sm font-bold mb-1 opacity-80">🚀 START</p>
                  <p className="text-xl font-black">Phase 3: Deep Dive</p>
                  <p className="text-sm mt-1">목표: 월 순수익 800만원 → 저축 650-700만원</p>
                </div>
              </div>
            </motion.div>

            {/* ========== M1-2: 확장 준비 (강사 2명 추가) ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute left-1/2 top-[200px] -translate-x-1/2"
              style={{ width: '420px' }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 shadow-[0_0_35px_rgba(147,51,234,0.5)] border-2 border-purple-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 1-2 🎯</p>
                <p className="text-lg font-black text-center">강사 2명 추가 채용?</p>
                <p className="text-xs text-center opacity-80 mt-2">
                  총 강사 4명 (드럼, 기타, 피아노, 베이스)
                  <br />+ 앙상블 클래스 론칭
                </p>
              </div>
            </motion.div>

            {/* M1-2 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute left-[8%] top-[340px]"
              style={{ width: '280px' }}
            >
              <div
                onClick={() => handleSelect('m1_2', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 ${
                  selections.phase3.m1_2 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/40'
                } hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-base font-black">2명 채용 성공</p>
                  <p className="text-xs opacity-70">SUCCESS</p>
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">4명 강사 체제 완성</p>
                  <p className="mt-1 text-green-300">→ 앙상블 론칭 준비 완료</p>
                </div>
                {selections.phase3.m1_2 === 'success' && (
                  <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-green-300" />
                )}
              </div>
            </motion.div>

            {/* M1-2 - Plan B */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute left-1/2 top-[340px] -translate-x-1/2"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m1-planb')}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">1명만 채용</p>
                  <p className="text-xs opacity-70">PLAN B - 부분 성공</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">📊 3명 강사 체제</p>
                  <p>• 앙상블 지연 (M4로 연기)</p>
                  <p>• 성장 속도 둔화</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M1-2 - Plan C */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute right-[8%] top-[340px]"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m1-planc')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">채용 실패</p>
                  <p className="text-xs opacity-70">PLAN C - 재검토 필요</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">📊 기존 2명 유지</p>
                  <p>• Phase 3 확장 어려움</p>
                  <p>• Phase 2 연장 고려</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== M3: 첫 번째 분기점 (70명) ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute left-1/2 top-[480px] -translate-x-1/2"
              style={{ width: '400px' }}
            >
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-4 shadow-[0_0_35px_rgba(234,88,12,0.5)] border-2 border-orange-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 3 - 첫 분기점</p>
                <p className="text-lg font-black text-center">총 70명 달성?</p>
                <p className="text-xs text-center opacity-80 mt-1">직강 20 + 강사 50 → ~700만원</p>
              </div>
            </motion.div>

            {/* M3 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="absolute left-[8%] top-[630px]"
              style={{ width: '280px' }}
            >
              <div
                onClick={() => handleSelect('m3', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 ${
                  selections.phase3.m3 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/40'
                } hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-base font-black">70명 이상</p>
                  <p className="text-xs opacity-70">SUCCESS</p>
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 ~700만원</p>
                  <p className="mt-1 text-green-300">→ 저축 450만원/월 🎯</p>
                </div>
                {selections.phase3.m3 === 'success' && (
                  <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-green-300" />
                )}
              </div>
            </motion.div>

            {/* M3 - Plan B */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute left-1/2 top-[630px] -translate-x-1/2"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m3-planb')}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">62-69명</p>
                  <p className="text-xs opacity-70">PLAN B - 목표 근접</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">📊 ~650만원 수익</p>
                  <p>• 저축 400만원/월</p>
                  <p>• 2.5년 소요 예상</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M3 - Plan C */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute right-[8%] top-[630px]"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m3-planc')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">62명 미만</p>
                  <p className="text-xs opacity-70">PLAN C - 재검토</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">📊 ~600만원 수익</p>
                  <p>• 저축 350만원/월</p>
                  <p>• 3년+ 소요</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== M6: 안정화 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="absolute left-1/2 top-[760px] -translate-x-1/2"
              style={{ width: '420px' }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 shadow-[0_0_35px_rgba(59,130,246,0.5)] border-2 border-blue-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 6 - 안정화</p>
                <p className="text-lg font-black text-center">회원 유지율 목표 달성?</p>
                <p className="text-xs text-center opacity-80 mt-2">
                  목표: 70명 유지 (이탈률 10% 이하)
                  <br />앙상블 클래스 정착 여부
                </p>
              </div>
            </motion.div>

            {/* M6 - Success */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.9 }}
              className="absolute left-[8%] top-[900px]"
              style={{ width: '280px' }}
            >
              <div
                onClick={() => handleSelect('m6', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 ${
                  selections.phase3.m6 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/40'
                } hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-base font-black">70명 이상 유지</p>
                  <p className="text-xs opacity-70">SUCCESS</p>
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">이탈률 5% (매우 우수)</p>
                  <p className="mt-1 text-green-300">→ 순수익 750만원 안정</p>
                </div>
                {selections.phase3.m6 === 'success' && (
                  <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-green-300" />
                )}
              </div>
            </motion.div>

            {/* M6 - Plan B */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 }}
              className="absolute left-1/2 top-[900px] -translate-x-1/2"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m6-planb')}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">63-69명 유지</p>
                  <p className="text-xs opacity-70">PLAN B - 이탈 증가</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">📊 이탈률 10-15%</p>
                  <p>• 순수익 650만원</p>
                  <p>• 리텐션 강화 필요</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* M6 - Plan C */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.1 }}
              className="absolute right-[8%] top-[900px]"
              style={{ width: '320px' }}
            >
              <div
                onClick={() => setOpenDialog('m6-planc')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">63명 미만</p>
                  <p className="text-xs opacity-70">PLAN C - 이탈 위기</p>
                </div>
                <div className="text-[10px] space-y-1 bg-white/10 rounded p-2">
                  <p className="font-bold text-[11px]">📊 이탈률 15%+</p>
                  <p>• 순수익 600만원</p>
                  <p>• 긴급 대응 필요</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== M12: 1년차 완료 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 }}
              className="absolute left-1/2 top-[1040px] -translate-x-1/2"
              style={{ width: '440px' }}
            >
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-4 shadow-[0_0_35px_rgba(20,184,166,0.5)] border-2 border-teal-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 12 - 1년차 완료 🎯</p>
                <p className="text-lg font-black text-center">총 80명 달성</p>
                <p className="text-xs text-center opacity-80 mt-2">
                  직강 25 + 강사 55 → 순수익 ~800만원
                  <br />연간 저축: 약 5,400만원 (월평균 450만원)
                </p>
              </div>
            </motion.div>

            {/* Final Success */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.4 }}
              className="absolute left-1/2 top-[1350px] -translate-x-1/2"
              style={{ width: '450px' }}
            >
              <div className="bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 rounded-xl p-5 shadow-[0_0_60px_rgba(16,185,129,0.7)] border-3 border-green-400/70">
                <div className="text-center mb-3">
                  <div className="text-4xl mb-2">🎉</div>
                  <p className="text-2xl font-black">Phase 3 완료!</p>
                  <p className="text-sm opacity-90 mt-1">안정적 수익 구조 확립</p>
                </div>
                <div className="space-y-2 text-xs bg-white/20 rounded-lg p-3 border border-white/30">
                  <p className="font-bold">✅ 월 순수익 800만원 달성</p>
                  <p className="font-bold">✅ 월 저축 650만원 가능</p>
                  <p className="font-bold">✅ 1년차 저축: 7,800만원</p>
                  <p className="text-yellow-300 font-bold mt-2">→ 2년차 지속 시 1억 달성!</p>
                </div>
              </div>
            </motion.div>

            {/* ========== 저축 시뮬레이션 섹션 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8 }}
              className="absolute left-1/2 top-[1700px] -translate-x-1/2"
              style={{ width: '100%', maxWidth: '1400px' }}
            >
              <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-6 shadow-[0_0_50px_rgba(99,102,241,0.5)] border-2 border-indigo-400/50">
                <h2 className="text-2xl font-black text-center mb-6 text-indigo-200">
                  💰 2년 내 1억 저축 시뮬레이션
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* SUCCESS 시나리오 */}
                  <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-5 border-2 border-green-400/50">
                    <div className="text-center mb-3">
                      <div className="text-3xl mb-2">🎯</div>
                      <p className="text-xl font-black">SUCCESS</p>
                      <p className="text-xs opacity-80 mt-1">Phase 3 목표 달성 시</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white/10 rounded p-2">
                        <p className="font-bold">월 저축: 500만원</p>
                        <p className="text-xs opacity-80">순수익 800만원 중</p>
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        <p className="font-bold">1년차: 6,000만원</p>
                        <p className="text-xs opacity-80">평균 500만원 × 12개월</p>
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        <p className="font-bold">2년차: 6,000만원</p>
                        <p className="text-xs opacity-80">안정적 유지</p>
                      </div>
                      <div className="bg-green-500/30 rounded p-3 mt-3 border border-green-300/50">
                        <p className="text-lg font-black text-center">총 1.2억원</p>
                        <p className="text-xs text-center opacity-90 mt-1">24개월 완료 🎉</p>
                      </div>
                    </div>
                  </div>

                  {/* PLAN B 시나리오 */}
                  <div
                    onClick={() => setOpenDialog('savings-planb')}
                    className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl p-5 border-2 border-amber-400/50 hover:scale-105 transition-transform cursor-pointer"
                  >
                    <div className="text-center mb-3">
                      <div className="text-3xl mb-2">⚠️</div>
                      <p className="text-xl font-black">PLAN B</p>
                      <p className="text-xs opacity-80 mt-1">목표 80% 달성 시</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white/10 rounded p-2">
                        <p className="font-bold">월 저축: 400만원</p>
                        <p className="text-xs opacity-80">순수익 650만원 중</p>
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        <p className="font-bold">1년차: 4,800만원</p>
                        <p className="text-xs opacity-80">평균 400만원 × 12개월</p>
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        <p className="font-bold">2년차: 4,800만원</p>
                        <p className="text-xs opacity-80">안정적 유지</p>
                      </div>
                      <div className="bg-amber-500/30 rounded p-3 mt-3 border border-amber-300/50">
                        <p className="text-lg font-black text-center">총 9,600만원</p>
                        <p className="text-xs text-center opacity-90 mt-1">
                          +3개월 필요 (27개월)
                        </p>
                      </div>
                      <p className="text-[10px] text-amber-200 text-center mt-2">클릭 시 상세보기</p>
                    </div>
                  </div>

                  {/* PLAN C 시나리오 */}
                  <div
                    onClick={() => setOpenDialog('savings-planc')}
                    className="bg-gradient-to-br from-red-600 to-rose-700 rounded-xl p-5 border-2 border-red-400/50 hover:scale-105 transition-transform cursor-pointer"
                  >
                    <div className="text-center mb-3">
                      <div className="text-3xl mb-2">🚨</div>
                      <p className="text-xl font-black">PLAN C</p>
                      <p className="text-xs opacity-80 mt-1">목표 70% 달성 시</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white/10 rounded p-2">
                        <p className="font-bold">월 저축: 350만원</p>
                        <p className="text-xs opacity-80">순수익 600만원 중</p>
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        <p className="font-bold">1년차: 4,200만원</p>
                        <p className="text-xs opacity-80">평균 350만원 × 12개월</p>
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        <p className="font-bold">2년차: 4,200만원</p>
                        <p className="text-xs opacity-80">개선 노력 중</p>
                      </div>
                      <div className="bg-red-500/30 rounded p-3 mt-3 border border-red-300/50">
                        <p className="text-lg font-black text-center">총 8,400만원</p>
                        <p className="text-xs text-center opacity-90 mt-1">
                          +5개월 필요 (29개월)
                        </p>
                      </div>
                      <p className="text-[10px] text-red-200 text-center mt-2">클릭 시 상세보기</p>
                    </div>
                  </div>
                </div>

                {/* 추가 정보 */}
                <div className="mt-6 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <p className="text-sm font-bold text-indigo-300 mb-2">💡 전제 조건</p>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• 월 생활비: 100만원 (초절약 모드)</li>
                    <li>• 비상금: 50만원/월 (별도 계좌)</li>
                    <li>• 세금 및 기타: 이미 순수익에서 차감됨</li>
                    <li>• Phase 2 종료 시점 기존 저축액: 0원 (Phase 3부터 본격 저축 시작)</li>
                  </ul>
                </div>

                {/* 저축 시뮬레이션 상세 페이지 링크 */}
                <div className="mt-6 text-center">
                  <Link
                    href="/savings-simulator"
                    className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    저축 시뮬레이션 상세 분석 보기 →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========== DIALOGS ========== */}

        {/* M1-2 PLAN B */}
        <Dialog open={openDialog === 'm1-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">M1-2 PLAN B (1명만 채용)</DialogTitle>
              <DialogDescription className="text-slate-300">
                부분 성공 - 3명 강사 체제로 운영
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">
                  2명 목표 중 1명만 채용 성공. 기존 2명 + 신규 1명 = 총 3명 강사.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 즉시 액션</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 3명 체제로 최적화된 스케줄 재편성</li>
                  <li>• 앙상블 클래스 → M4(4개월 차)로 연기</li>
                  <li>• 추가 채용 공고 지속 (M3까지)</li>
                  <li>• 기존 강사 부담 완화 (레슨 시간 조정)</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">💰 재무 영향</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• M3 목표: 70명 → 65명으로 조정</li>
                  <li>• 순수익: 700만원 → 650만원</li>
                  <li>• 월 저축: 500만원 → 400만원</li>
                  <li className="text-amber-300 font-semibold">→ 1억 달성: 24개월 → 27개월</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📈 회복 전략</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• M3까지 4번째 강사 확보 (재채용 시도)</li>
                  <li>• 온라인 클래스 병행 (추가 수익 +30만원/월)</li>
                  <li>• 기업 출강 확보 (추가 수익 +50만원/월)</li>
                  <li className="text-green-400 font-semibold mt-2">
                    → 회복 시 27개월 → 25개월로 단축 가능
                  </li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M1-2 PLAN C */}
        <Dialog open={openDialog === 'm1-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">M1-2 PLAN C (채용 실패)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 확장 계획 재검토 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 상황 분석</p>
                <p className="text-sm text-slate-300">
                  2명 채용 모두 실패. 기존 2명 강사로만 운영해야 함. Phase 3 확장 계획 전면 재검토 필요.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">💰 재무 현실</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 기존 Phase 2 수준 유지: 순수익 ~550만원</li>
                  <li>• 생활비: 100만원</li>
                  <li>• 월 저축 가능액: 450만원</li>
                  <li className="text-red-300 font-semibold">→ 1억 달성: 약 23개월 (Phase 3 효과 없음)</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 선택지</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-amber-500">
                    <p className="font-semibold text-amber-400 mb-1">옵션 1: Phase 2 연장 (추천 ⭐)</p>
                    <p className="text-xs text-slate-400">
                      • Phase 3 확장 포기, Phase 2 수준 유지
                      <br />• 순수익 550만원 안정적 확보
                      <br />• 월 저축 450만원 × 23개월 = 1억 달성
                      <br />• 스트레스 없이 안정적 운영
                    </p>
                  </div>
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-400 mb-1">옵션 2: 채용 재시도 (M3까지)</p>
                    <p className="text-xs text-slate-400">
                      • 채용 조건 개선 (급여 인상, 복지 강화)
                      <br />• 헤드헌팅 활용
                      <br />• M3까지 2명 확보 목표
                      <br />• 비용 추가 발생 가능
                    </p>
                  </div>
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-purple-500">
                    <p className="font-semibold text-purple-400 mb-1">옵션 3: 다른 수익원 확보</p>
                    <p className="text-xs text-slate-400">
                      • 온라인 클래스 집중 (월 +100만원 목표)
                      <br />• 기업 출강 확대 (월 +150만원 목표)
                      <br />• 프로듀싱/믹싱 서비스 (월 +50만원)
                      <br />• 강사 확장 없이 수익 증대
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
                <p className="font-bold text-indigo-400 mb-2">💡 조언</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  채용 실패가 꼭 나쁜 것은 아닙니다.
                  <strong className="text-indigo-300"> Phase 2 수준(550만원)도 충분히 훌륭한 성과</strong>입니다.
                  <br /><br />
                  <strong>옵션 1 (Phase 2 연장)</strong>을 추천합니다:
                  <br />• 안정적 운영으로 23개월 내 1억 달성 가능
                  <br />• 건강과 여유 유지
                  <br />• 무리한 확장 없이 목표 달성
                  <br /><br />
                  <strong className="text-green-400">1-2개월 차이는 크지 않습니다. 무리하지 마세요!</strong>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M6 PLAN B */}
        <Dialog open={openDialog === 'm6-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">M6 PLAN B (63-69명 유지)</DialogTitle>
              <DialogDescription className="text-slate-300">
                이탈률 10-15% - 리텐션 강화 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">
                  목표 70명 대비 7-10% 이탈. 평균적인 수준이지만 개선 여지 있음.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">💰 재무 상황</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 회원 수: 63-69명</li>
                  <li>• 순수익: 약 650만원/월</li>
                  <li>• 생활비: 100만원</li>
                  <li>• 월 저축 가능: 400-450만원</li>
                  <li className="text-amber-300 font-semibold">→ 1억 달성: 25-27개월</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 즉시 액션 (이탈 방지)</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• <strong>1:1 만족도 조사:</strong> 이탈 사유 파악</li>
                  <li>• <strong>레슨 품질 개선:</strong> 커리큘럼 업데이트</li>
                  <li>• <strong>커뮤니티 강화:</strong> 학생 간 교류 이벤트</li>
                  <li>• <strong>앙상블 참여 독려:</strong> 추가 레슨 유도</li>
                  <li>• <strong>리워드 프로그램:</strong> 장기 등록 할인</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📈 회복 전략</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 이탈한 회원 대체 (신규 모집 강화)</li>
                  <li>• 온라인 클래스 추가 (추가 수익 +30만원)</li>
                  <li>• 기업 출강 1-2개 확보 (추가 수익 +50-100만원)</li>
                  <li className="text-green-400 font-semibold mt-2">
                    → 회복 시 27개월 → 24개월로 단축 가능
                  </li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M6 PLAN C */}
        <Dialog open={openDialog === 'm6-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">M6 PLAN C (63명 미만)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 이탈률 15%+ - 긴급 대응 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 상황 분석</p>
                <p className="text-sm text-slate-300">
                  높은 이탈률로 회원 수 급감. 근본 원인 파악 및 즉각 조치 필요.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">💰 재무 현실</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 회원 수: 63명 미만 (50-62명)</li>
                  <li>• 순수익: 약 550-600만원/월</li>
                  <li>• 생활비: 100만원</li>
                  <li>• 월 저축 가능: 350-400만원</li>
                  <li className="text-red-300 font-semibold">→ 1억 달성: 27-30개월</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🚨 긴급 조치</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-400 mb-1">1단계: 이탈 원인 파악</p>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• 이탈 회원 전화 인터뷰</li>
                      <li>• 현재 회원 만족도 긴급 조사</li>
                      <li>• 강사 피드백 수집</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-amber-500">
                    <p className="font-semibold text-amber-400 mb-1">2단계: 즉시 개선</p>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• 레슨 품질 문제 → 강사 교육/교체</li>
                      <li>• 시설 문제 → 즉시 개선</li>
                      <li>• 가격 문제 → 프로모션 진행</li>
                      <li>• 커리큘럼 문제 → 맞춤형 재설계</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-400 mb-1">3단계: 회원 회복</p>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• 이탈 회원 복귀 특가 (50% 할인 1개월)</li>
                      <li>• 신규 회원 공격적 모집 (무료 체험 2주)</li>
                      <li>• 소개 이벤트 (소개 1명당 1회 무료)</li>
                      <li>• SNS 마케팅 강화 (예산 투입)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 선택지</p>
                <div className="space-y-2">
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-green-500">
                    <p className="font-semibold text-green-400 mb-1">옵션 1: 긴급 회복 집중 (추천 ⭐)</p>
                    <p className="text-xs text-slate-400">
                      • 1-2개월 집중 회복 기간
                      <br />• 목표: 70명 복구
                      <br />• 비용 투입 감수
                    </p>
                  </div>
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-purple-500">
                    <p className="font-semibold text-purple-400 mb-1">옵션 2: 현 수준 유지 + 추가 수익원</p>
                    <p className="text-xs text-slate-400">
                      • 55-60명 안정화
                      <br />• 온라인/출강으로 수익 보완
                      <br />• 30개월 목표로 재조정
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
                <p className="font-bold text-indigo-400 mb-2">💡 조언</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  이탈률이 높다는 것은 <strong className="text-red-300">근본적인 문제</strong>가 있다는 신호입니다.
                  <br /><br />
                  <strong>옵션 1 (긴급 회복)</strong>을 추천합니다:
                  <br />• 문제 방치 시 더 큰 손실
                  <br />• 1-2개월 투자로 장기 안정성 확보
                  <br />• 브랜드 평판 유지
                  <br /><br />
                  <strong className="text-green-400">위기는 기회입니다. 이 시기에 탄탄한 기반을 다지세요!</strong>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M3 PLAN B */}
        <Dialog open={openDialog === 'm3-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">M3 PLAN B (62-69명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                목표에 근접 - 약간의 조정 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">목표의 88% 달성. 성장 추세 유지 중.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">💰 재무 상황</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 순수익: 약 650만원/월</li>
                  <li>• 생활비: 100만원 (초절약)</li>
                  <li>• 가용 저축: 550만원/월</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 2년 저축 계획</p>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="bg-slate-700 rounded p-2">
                    <p className="font-semibold">1년차: 400만원 × 12 = 4,800만원</p>
                  </div>
                  <div className="bg-slate-700 rounded p-2">
                    <p className="font-semibold">2년차: 400만원 × 12 = 4,800만원</p>
                  </div>
                  <div className="bg-amber-600/20 rounded p-3 mt-2 border border-amber-500/30">
                    <p className="font-bold text-lg">24개월 총: 9,600만원</p>
                    <p className="text-xs mt-1">→ 추가 3개월 필요 (27개월에 1억 달성)</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📈 개선 방안</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 앙상블 클래스 추가 운영 (월 +50만원)</li>
                  <li>• 온라인 클래스 병행 (월 +30만원)</li>
                  <li>• 악기 판매 수수료 (월 +20만원)</li>
                  <li className="text-green-400 font-semibold mt-2">→ 개선 시 27개월 → 25개월로 단축 가능</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* M3 PLAN C */}
        <Dialog open={openDialog === 'm3-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">M3 PLAN C (62명 미만)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 목표 대비 저조 - 전략 재검토
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 상황 분석</p>
                <p className="text-sm text-slate-300">Phase 3 확장 효과 미흡. 원인 분석 필요.</p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">💰 재무 상황</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 순수익: 약 600만원/월 (목표 대비 -200만원)
                  </li>
                  <li>• 생활비: 100만원</li>
                  <li>• 가용 저축: 500만원/월</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">⏰ 2년 저축 현실</p>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="bg-slate-700 rounded p-2">
                    <p className="font-semibold">1년차: 350만원 × 12 = 4,200만원</p>
                  </div>
                  <div className="bg-slate-700 rounded p-2">
                    <p className="font-semibold">2년차: 350만원 × 12 = 4,200만원</p>
                  </div>
                  <div className="bg-red-600/20 rounded p-3 mt-2 border border-red-500/30">
                    <p className="font-bold text-lg">24개월 총: 8,400만원</p>
                    <p className="text-xs mt-1 text-red-300">→ 추가 5개월 필요 (29개월에 1억 달성)</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 선택지</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-amber-500">
                    <p className="font-semibold text-amber-400 mb-1">옵션 1: 시간 연장 수용</p>
                    <p className="text-xs text-slate-400">
                      • 29개월 (2.4년) 목표로 재설정
                      <br />• 안정적으로 운영하며 꾸준히 저축
                    </p>
                  </div>
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-400 mb-1">옵션 2: 추가 수익원 확보</p>
                    <p className="text-xs text-slate-400">
                      • 온라인 클래스 (월 +50만원 목표)
                      <br />• 기업 출강 (월 +100만원 목표)
                      <br />• 프로듀싱/믹싱 서비스 (월 +50만원)
                    </p>
                  </div>
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-purple-500">
                    <p className="font-semibold text-purple-400 mb-1">옵션 3: 목표 하향 조정</p>
                    <p className="text-xs text-slate-400">
                      • 1억 → 8천만원으로 조정
                      <br />• 24개월 달성 가능
                      <br />• 혜림이와 상의 필요
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
                <p className="font-bold text-indigo-400 mb-2">💡 조언</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  현재 순수익 600만원도 충분히 훌륭한 성과입니다. 
                  무리하게 확장하기보다는 <strong>안정적 운영 + 추가 수익원</strong> 병행을 추천합니다.
                  <br /><br />
                  <strong className="text-indigo-300">5개월 차이는 크지 않습니다.</strong> 건강과 여유를 유지하면서 목표를 달성하세요.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Savings PLAN B */}
        <Dialog open={openDialog === 'savings-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">저축 PLAN B (월 400만원)</DialogTitle>
              <DialogDescription className="text-slate-300">
                27개월에 1억 달성 - 3개월 추가 소요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 시나리오</p>
                <p className="text-sm text-slate-300">순수익 650만원 달성 시 (Phase 3 목표의 81%)</p>
              </div>
              
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">📈 월별 저축 계획</p>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700 rounded p-3">
                      <p className="text-slate-400 text-xs mb-1">월 순수익</p>
                      <p className="font-bold text-lg">650만원</p>
                    </div>
                    <div className="bg-slate-700 rounded p-3">
                      <p className="text-slate-400 text-xs mb-1">월 생활비</p>
                      <p className="font-bold text-lg">250만원</p>
                    </div>
                  </div>
                  <div className="bg-amber-600/20 rounded p-3 border border-amber-500/30">
                    <p className="text-slate-400 text-xs mb-1">월 저축액</p>
                    <p className="font-bold text-2xl text-amber-300">400만원</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">📅 연도별 누적</p>
                <div className="space-y-3">
                  <div className="bg-slate-700 rounded p-3 border-l-4 border-amber-500">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">1년차 (12개월)</span>
                      <span className="text-lg font-bold text-amber-300">4,800만원</span>
                    </div>
                    <div className="mt-2 bg-slate-600 rounded-full h-2 overflow-hidden">
                      <div className="bg-amber-500 h-full" style={{ width: '48%' }}></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">48% 달성</p>
                  </div>
                  
                  <div className="bg-slate-700 rounded p-3 border-l-4 border-amber-500">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">2년차 (24개월)</span>
                      <span className="text-lg font-bold text-amber-300">9,600만원</span>
                    </div>
                    <div className="mt-2 bg-slate-600 rounded-full h-2 overflow-hidden">
                      <div className="bg-amber-500 h-full" style={{ width: '96%' }}></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">96% 달성 (부족: 400만원)</p>
                  </div>

                  <div className="bg-green-600/20 rounded p-3 border-l-4 border-green-500">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">27개월차</span>
                      <span className="text-2xl font-bold text-green-300">1억원 🎉</span>
                    </div>
                    <div className="mt-2 bg-slate-600 rounded-full h-2 overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: '100%' }}></div>
                    </div>
                    <p className="text-xs text-green-400 mt-1">목표 달성!</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 3개월 단축 전략</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    <span><strong>앙상블 클래스:</strong> 월 +50만원 (주 1회, 5팀)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    <span><strong>온라인 레슨:</strong> 월 +30만원 (주 2회)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    <span><strong>생활비 절약:</strong> 월 -20만원 (불필요한 지출 줄이기)</span>
                  </li>
                  <li className="bg-green-600/20 rounded p-2 mt-2 border border-green-500/30">
                    <span className="font-bold text-green-300">
                      → 월 저축 500만원 달성 시 24개월 내 1억 가능!
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
                <p className="font-bold text-indigo-400 mb-2">💡 현실적 평가</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  3개월 차이는 <strong>매우 미미</strong>합니다. 
                  스트레스 받지 말고 안정적으로 운영하는 것이 더 중요합니다.
                  <br /><br />
                  오히려 이 기간 동안 <strong>다음 단계 준비</strong> (예: 추가 지점, 프랜차이즈 등)를 계획할 수 있습니다.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Savings PLAN C */}
        <Dialog open={openDialog === 'savings-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">저축 PLAN C (월 350만원)</DialogTitle>
              <DialogDescription className="text-slate-300">
                29개월에 1억 달성 - 5개월 추가 소요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">📊 시나리오</p>
                <p className="text-sm text-slate-300">순수익 600만원 달성 시 (Phase 3 목표의 75%)</p>
              </div>
              
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">📈 월별 저축 계획</p>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700 rounded p-3">
                      <p className="text-slate-400 text-xs mb-1">월 순수익</p>
                      <p className="font-bold text-lg">600만원</p>
                    </div>
                    <div className="bg-slate-700 rounded p-3">
                      <p className="text-slate-400 text-xs mb-1">월 생활비</p>
                      <p className="font-bold text-lg">250만원</p>
                    </div>
                  </div>
                  <div className="bg-red-600/20 rounded p-3 border border-red-500/30">
                    <p className="text-slate-400 text-xs mb-1">월 저축액</p>
                    <p className="font-bold text-2xl text-red-300">350만원</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">📅 연도별 누적</p>
                <div className="space-y-3">
                  <div className="bg-slate-700 rounded p-3 border-l-4 border-red-500">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">1년차 (12개월)</span>
                      <span className="text-lg font-bold text-red-300">4,200만원</span>
                    </div>
                    <div className="mt-2 bg-slate-600 rounded-full h-2 overflow-hidden">
                      <div className="bg-red-500 h-full" style={{ width: '42%' }}></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">42% 달성</p>
                  </div>
                  
                  <div className="bg-slate-700 rounded p-3 border-l-4 border-red-500">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">2년차 (24개월)</span>
                      <span className="text-lg font-bold text-red-300">8,400만원</span>
                    </div>
                    <div className="mt-2 bg-slate-600 rounded-full h-2 overflow-hidden">
                      <div className="bg-red-500 h-full" style={{ width: '84%' }}></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">84% 달성 (부족: 1,600만원)</p>
                  </div>

                  <div className="bg-amber-600/20 rounded p-3 border-l-4 border-amber-500">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">29개월차</span>
                      <span className="text-2xl font-bold text-amber-300">1억원 🎉</span>
                    </div>
                    <div className="mt-2 bg-slate-600 rounded-full h-2 overflow-hidden">
                      <div className="bg-amber-500 h-full" style={{ width: '100%' }}></div>
                    </div>
                    <p className="text-xs text-amber-400 mt-1">목표 달성 (5개월 추가 소요)</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 개선 방안</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-amber-500">
                    <p className="font-semibold text-amber-400 mb-2">옵션 1: 추가 수익원 확보 (추천 ⭐)</p>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• 온라인 클래스: +50만원/월</li>
                      <li>• 기업 출강 (주 1회): +100만원/월</li>
                      <li>• 프로듀싱/믹싱: +50만원/월</li>
                      <li className="text-green-400 font-semibold mt-2">
                        → 월 600만원 → 800만원 (29개월 → 25개월)
                      </li>
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-700 rounded border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-400 mb-2">옵션 2: 생활비 최적화</p>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• 불필요한 지출 줄이기: -30만원/월</li>
                      <li>• 외식 줄이기: -20만원/월</li>
                      <li className="text-blue-400 font-semibold mt-2">
                        → 월 저축 350만원 → 400만원 (29개월 → 27개월)
                      </li>
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-700 rounded border-l-4 border-purple-500">
                    <p className="font-semibold text-purple-400 mb-2">옵션 3: 목표 재조정</p>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• 1억 → 8천만원으로 조정</li>
                      <li>• 24개월 달성 가능</li>
                      <li>• 혜림이와 상의 후 결정</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
                <p className="font-bold text-indigo-400 mb-2">💡 현실적 조언</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  월 순수익 600만원도 <strong>대단한 성과</strong>입니다. 
                  5개월 차이로 스트레스 받지 마세요.
                  <br /><br />
                  <strong className="text-indigo-300">옵션 1 (추가 수익원)</strong>을 추천합니다:
                  <br />• 온라인 클래스는 시간 대비 효율 좋음
                  <br />• 기업 출강은 고수익 + 네트워킹
                  <br />• 건강 유지하며 천천히 확장하세요
                  <br /><br />
                  <strong className="text-green-400">29개월 vs 24개월, 큰 차이 아닙니다.</strong> 
                  무리하지 마세요! 😊
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
