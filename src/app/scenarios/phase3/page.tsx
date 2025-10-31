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

  const handleSelect = (milestone: 'm1' | 'm3' | 'm5' | 'm7' | 'm9' | 'm12', choice: ScenarioChoice) => {
    if (milestone === 'm1') {
      updateSelection('phase3', 'm1_2', choice)
    } else if (milestone === 'm3' || milestone === 'm5') {
      updateSelection('phase3', 'm3', choice)
    } else if (milestone === 'm7' || milestone === 'm9' || milestone === 'm12') {
      updateSelection('phase3', 'm6', choice)
    }
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

          <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            Phase 3 시나리오 분석 (12개월 확장)
          </h1>
          <p className="text-sm text-slate-400">6개 핵심 분기점 · 주간 타임 확대 전략 · 목표 순수익 1,100만원</p>

          {/* 현재 선택 상태 표시 */}
          <div className="mt-4 p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-700/50 rounded-lg">
            <p className="text-xs text-purple-300 mb-2">💡 각 분기점 노드를 클릭하여 선택하세요</p>
            <div className="flex gap-4 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-slate-300">M1:</span>
                <span className={`font-bold ${
                  selections.phase3.m1_2 === 'success' ? 'text-green-400' :
                  selections.phase3.m1_2 === 'planB' ? 'text-amber-400' :
                  selections.phase3.m1_2 === 'planC' ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {selections.phase3.m1_2 === 'success' ? 'SUCCESS' :
                   selections.phase3.m1_2 === 'planB' ? 'PLAN B' :
                   selections.phase3.m1_2 === 'planC' ? 'PLAN C' : 'PLAN D'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-300">M3:</span>
                <span className={`font-bold ${
                  selections.phase3.m3 === 'success' ? 'text-green-400' :
                  selections.phase3.m3 === 'planB' ? 'text-amber-400' :
                  selections.phase3.m3 === 'planC' ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {selections.phase3.m3 === 'success' ? 'SUCCESS' :
                   selections.phase3.m3 === 'planB' ? 'PLAN B' :
                   selections.phase3.m3 === 'planC' ? 'PLAN C' : 'PLAN D'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-300">M5:</span>
                <span className={`font-bold ${
                  selections.phase3.m3 === 'success' ? 'text-green-400' :
                  selections.phase3.m3 === 'planB' ? 'text-amber-400' :
                  selections.phase3.m3 === 'planC' ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {selections.phase3.m3 === 'success' ? 'SUCCESS' :
                   selections.phase3.m3 === 'planB' ? 'PLAN B' :
                   selections.phase3.m3 === 'planC' ? 'PLAN C' : 'PLAN D'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-300">M7:</span>
                <span className={`font-bold ${
                  selections.phase3.m6 === 'success' ? 'text-green-400' :
                  selections.phase3.m6 === 'planB' ? 'text-amber-400' :
                  selections.phase3.m6 === 'planC' ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {selections.phase3.m6 === 'success' ? 'SUCCESS' :
                   selections.phase3.m6 === 'planB' ? 'PLAN B' :
                   selections.phase3.m6 === 'planC' ? 'PLAN C' : 'PLAN D'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-300">M9:</span>
                <span className={`font-bold ${
                  selections.phase3.m6 === 'success' ? 'text-green-400' :
                  selections.phase3.m6 === 'planB' ? 'text-amber-400' :
                  selections.phase3.m6 === 'planC' ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {selections.phase3.m6 === 'success' ? 'SUCCESS' :
                   selections.phase3.m6 === 'planB' ? 'PLAN B' :
                   selections.phase3.m6 === 'planC' ? 'PLAN C' : 'PLAN D'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-300">M12:</span>
                <span className={`font-bold ${
                  selections.phase3.m6 === 'success' ? 'text-green-400' :
                  selections.phase3.m6 === 'planB' ? 'text-amber-400' :
                  selections.phase3.m6 === 'planC' ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {selections.phase3.m6 === 'success' ? 'SUCCESS' :
                   selections.phase3.m6 === 'planB' ? 'PLAN B' :
                   selections.phase3.m6 === 'planC' ? 'PLAN C' : 'PLAN D'}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              브랜딩: <strong className="text-pink-400">"주간 타임"</strong> 확대 (학생/주부/프리랜서 타겟) + 저녁 타임 안정화
            </p>
          </div>
        </div>

        {/* Canvas - 3600px (6개 분기점 × 600px 간격) */}
        <div className="relative w-full h-[3600px] bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
          {/* SVG 연결선 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1600 3600" preserveAspectRatio="xMidYMin slice" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="line-phase3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* START → Month 1 */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              x1="800" y1="100" x2="800" y2="180"
              stroke="url(#line-phase3)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Month 1 → 4갈래 분기 */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              d="M 800 240 Q 650 300 150 385"
              stroke="#10b981"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              d="M 800 240 Q 750 300 450 385"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              d="M 800 240 Q 850 300 1150 385"
              stroke="#f97316"
              strokeWidth="2.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              d="M 800 240 Q 950 300 1450 385"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
            />

            {/* 4갈래 → Month 3 (점선 수렴) */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              d="M 150 460 Q 400 530 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              d="M 450 460 Q 600 530 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              d="M 1150 460 Q 1000 530 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              d="M 1450 460 Q 1100 530 800 600"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
            />

            {/* Month 3 → 4갈래 */}
            <motion.path d="M 800 640 Q 650 700 150 785" stroke="#10b981" strokeWidth="2.5" fill="none" />
            <motion.path d="M 800 640 Q 750 700 450 785" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
            <motion.path d="M 800 640 Q 850 700 1150 785" stroke="#f97316" strokeWidth="2.5" fill="none" />
            <motion.path d="M 800 640 Q 950 700 1450 785" stroke="#ef4444" strokeWidth="2.5" fill="none" />

            {/* 4갈래 → Month 5 */}
            <motion.path d="M 150 860 Q 400 940 800 1020" stroke="#6366f1" strokeWidth="2" strokeDasharray="4,4" fill="none" />
            <motion.path d="M 450 860 Q 600 940 800 1020" stroke="#6366f1" strokeWidth="2" strokeDasharray="4,4" fill="none" />
            <motion.path d="M 1150 860 Q 1000 940 800 1020" stroke="#6366f1" strokeWidth="2" strokeDasharray="4,4" fill="none" />
            <motion.path d="M 1450 860 Q 1100 940 800 1020" stroke="#6366f1" strokeWidth="2" strokeDasharray="4,4" fill="none" />

            {/* Month 5 → 4갈래 */}
            <motion.path d="M 800 1060 Q 650 1120 150 1205" stroke="#10b981" strokeWidth="2.5" fill="none" />
            <motion.path d="M 800 1060 Q 750 1120 450 1205" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
            <motion.path d="M 800 1060 Q 850 1120 1150 1205" stroke="#f97316" strokeWidth="2.5" fill="none" />
            <motion.path d="M 800 1060 Q 950 1120 1450 1205" stroke="#ef4444" strokeWidth="2.5" fill="none" />

            {/* 4갈래 → Month 7 */}
            <motion.path d="M 150 1280 Q 400 1370 800 1460" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4" fill="none" />
            <motion.path d="M 450 1280 Q 600 1370 800 1460" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4" fill="none" />
            <motion.path d="M 1150 1280 Q 1000 1370 800 1460" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4" fill="none" />
            <motion.path d="M 1450 1280 Q 1100 1370 800 1460" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4" fill="none" />

            {/* Month 7 → 4갈래 */}
            <motion.path d="M 800 1500 Q 650 1560 150 1645" stroke="#10b981" strokeWidth="2.5" fill="none" />
            <motion.path d="M 800 1500 Q 750 1560 450 1645" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
            <motion.path d="M 800 1500 Q 850 1560 1150 1645" stroke="#f97316" strokeWidth="2.5" fill="none" />
            <motion.path d="M 800 1500 Q 950 1560 1450 1645" stroke="#ef4444" strokeWidth="2.5" fill="none" />

            {/* 4갈래 → Month 9 */}
            <motion.path d="M 150 1720 Q 400 1820 800 1920" stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" fill="none" />
            <motion.path d="M 450 1720 Q 600 1820 800 1920" stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" fill="none" />
            <motion.path d="M 1150 1720 Q 1000 1820 800 1920" stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" fill="none" />
            <motion.path d="M 1450 1720 Q 1100 1820 800 1920" stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" fill="none" />

            {/* Month 9 → 4갈래 */}
            <motion.path d="M 800 1960 Q 650 2020 150 2105" stroke="#10b981" strokeWidth="2.5" fill="none" />
            <motion.path d="M 800 1960 Q 750 2020 450 2105" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
            <motion.path d="M 800 1960 Q 850 2020 1150 2105" stroke="#f97316" strokeWidth="2.5" fill="none" />
            <motion.path d="M 800 1960 Q 950 2020 1450 2105" stroke="#ef4444" strokeWidth="2.5" fill="none" />

            {/* 4갈래 → Month 12 */}
            <motion.path d="M 150 2180 Q 400 2310 800 2440" stroke="#a855f7" strokeWidth="2" strokeDasharray="4,4" fill="none" />
            <motion.path d="M 450 2180 Q 600 2310 800 2440" stroke="#a855f7" strokeWidth="2" strokeDasharray="4,4" fill="none" />
            <motion.path d="M 1150 2180 Q 1000 2310 800 2440" stroke="#a855f7" strokeWidth="2" strokeDasharray="4,4" fill="none" />
            <motion.path d="M 1450 2180 Q 1100 2310 800 2440" stroke="#a855f7" strokeWidth="2" strokeDasharray="4,4" fill="none" />

            {/* Month 12 → Final Success */}
            <motion.path
              d="M 800 2480 L 800 2620"
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
              style={{ width: '450px' }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-5 shadow-[0_0_40px_rgba(168,85,247,0.5)] border-2 border-purple-400/40">
                <div className="text-center">
                  <p className="text-sm font-bold mb-1 opacity-80">🚀 START</p>
                  <p className="text-xl font-black">Phase 3: Deep Dive (12개월)</p>
                  <p className="text-sm mt-1">목표: 월 순수익 1,100만원 (직강 500 + 강사 마진 600)</p>
                </div>
              </div>
            </motion.div>

            {/* ========== MONTH 1: 주간 타임 확대 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute left-1/2 top-[180px] -translate-x-1/2"
              style={{ width: '400px' }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 shadow-[0_0_35px_rgba(147,51,234,0.5)] border-2 border-purple-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 1 🌞</p>
                <p className="text-lg font-black text-center">주간 시간대 확대</p>
                <p className="text-xs text-center opacity-80 mt-2">
                  목표: 58명 (직강 15 + 저녁 35 + 주간 8) → 순수익 507만원
                </p>
              </div>
            </motion.div>

            {/* Month 1 - 4개 노드 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute left-[5%] top-[320px]"
              style={{ width: '280px' }}
            >
              <div
                onClick={() => handleSelect('m1', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m1_2 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-base font-black">SUCCESS</p>
                  <p className="text-xs opacity-70">53명 이상</p>
                  {selections.phase3.m1_2 === 'success' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-green-300" />
                  )}
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 500만원+</p>
                  <p className="mt-1 text-green-300">주간 확대 순조</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute left-[28%] top-[320px]"
              style={{ width: '280px' }}
            >
              <div
                onClick={() => {
                  handleSelect('m1', 'planB')
                  setOpenDialog('m1-planb')
                }}
                className={`bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m1_2 === 'planB' ? 'border-amber-300 ring-4 ring-amber-400/50' : 'border-amber-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">PLAN B</p>
                  <p className="text-xs opacity-70">48-52명 (80-99%)</p>
                  {selections.phase3.m1_2 === 'planB' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-amber-300" />
                  )}
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 400만원</p>
                  <p className="mt-1">주간 모집 속도 느림</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute left-[51%] top-[320px]"
              style={{ width: '280px' }}
            >
              <div
                onClick={() => {
                  handleSelect('m1', 'planC')
                  setOpenDialog('m1-planc')
                }}
                className={`bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-3 shadow-[0_0_30px_rgba(249,115,22,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m1_2 === 'planC' ? 'border-orange-300 ring-4 ring-orange-400/50' : 'border-orange-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🔶</div>
                  <p className="text-sm font-black">PLAN C</p>
                  <p className="text-xs opacity-70">43-47명 (60-79%)</p>
                  {selections.phase3.m1_2 === 'planC' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-orange-300" />
                  )}
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 350만원</p>
                  <p className="mt-1">전략 수정 필요</p>
                  <p className="text-orange-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute right-[5%] top-[320px]"
              style={{ width: '280px' }}
            >
              <div
                onClick={() => setOpenDialog('m1-pland')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">PLAN D</p>
                  <p className="text-xs opacity-70">&lt;43명 (50-59%)</p>
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 300만원↓</p>
                  <p className="mt-1">주간 확장 실패</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== MONTH 3 ========== */}
            <motion.div
              className="absolute left-1/2 top-[570px] -translate-x-1/2"
              style={{ width: '400px' }}
            >
              <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl p-4 shadow-[0_0_35px_rgba(219,39,119,0.5)] border-2 border-pink-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 3 🎯</p>
                <p className="text-lg font-black text-center">전 시간대 시스템 완성</p>
                <p className="text-xs text-center opacity-80 mt-2">
                  목표: 68명 (직강 15 + 저녁 40 + 주간 13) → 순수익 593만원
                </p>
              </div>
            </motion.div>

            {/* Month 3 - 4개 노드 */}
            <motion.div className="absolute left-[5%] top-[730px]" style={{ width: '280px' }}>
              <div
                onClick={() => handleSelect('m3', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m3 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-base font-black">SUCCESS</p>
                  <p className="text-xs opacity-70">68명 이상</p>
                  {selections.phase3.m3 === 'success' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-green-300" />
                  )}
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 593만원</p>
                  <p className="mt-1 text-green-300">시스템 안정화</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute left-[28%] top-[730px]" style={{ width: '280px' }}>
              <div
                onClick={() => {
                  handleSelect('m3', 'planB')
                  setOpenDialog('m3-planb')
                }}
                className={`bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m3 === 'planB' ? 'border-amber-300 ring-4 ring-amber-400/50' : 'border-amber-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">PLAN B</p>
                  <p className="text-xs opacity-70">60-67명 (80-99%)</p>
                  {selections.phase3.m3 === 'planB' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-amber-300" />
                  )}
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 530만원</p>
                  <p className="mt-1">성장 속도 조정</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute left-[51%] top-[730px]" style={{ width: '280px' }}>
              <div
                onClick={() => {
                  handleSelect('m3', 'planC')
                  setOpenDialog('m3-planc')
                }}
                className={`bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-3 shadow-[0_0_30px_rgba(249,115,22,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m3 === 'planC' ? 'border-orange-300 ring-4 ring-orange-400/50' : 'border-orange-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🔶</div>
                  <p className="text-sm font-black">PLAN C</p>
                  <p className="text-xs opacity-70">54-59명 (60-79%)</p>
                  {selections.phase3.m3 === 'planC' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-orange-300" />
                  )}
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 470만원</p>
                  <p className="mt-1">재검토 필요</p>
                  <p className="text-orange-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute right-[5%] top-[730px]" style={{ width: '280px' }}>
              <div
                onClick={() => setOpenDialog('m3-pland')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">PLAN D</p>
                  <p className="text-xs opacity-70">&lt;54명 (50-59%)</p>
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 410만원</p>
                  <p className="mt-1">주간 축소 고려</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== MONTH 5 ========== */}
            <motion.div
              className="absolute left-1/2 top-[990px] -translate-x-1/2"
              style={{ width: '400px' }}
            >
              <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl p-4 shadow-[0_0_35px_rgba(225,29,72,0.5)] border-2 border-rose-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 5 🌟</p>
                <p className="text-lg font-black text-center">브랜드 가치 확산</p>
                <p className="text-xs text-center opacity-80 mt-2">
                  목표: 78명 (직강 15 + 저녁 48 + 주간 15) → 순수익 733만원
                </p>
              </div>
            </motion.div>

            {/* Month 5 - 4개 노드 */}
            <motion.div className="absolute left-[5%] top-[1160px]" style={{ width: '280px' }}>
              <div
                onClick={() => handleSelect('m5', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m3 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-base font-black">SUCCESS</p>
                  <p className="text-xs opacity-70">78명 이상</p>
                  {selections.phase3.m3 === 'success' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-green-300" />
                  )}
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 733만원</p>
                  <p className="mt-1 text-green-300">브랜드 확립</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute left-[28%] top-[1160px]" style={{ width: '280px' }}>
              <div
                onClick={() => {
                  handleSelect('m5', 'planB')
                  setOpenDialog('m5-planb')
                }}
                className={`bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m3 === 'planB' ? 'border-amber-300 ring-4 ring-amber-400/50' : 'border-amber-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">PLAN B</p>
                  <p className="text-xs opacity-70">70-77명 (80-99%)</p>
                  {selections.phase3.m3 === 'planB' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-amber-300" />
                  )}
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 660만원</p>
                  <p className="mt-1">입소문 보강</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute left-[51%] top-[1160px]" style={{ width: '280px' }}>
              <div
                onClick={() => {
                  handleSelect('m5', 'planC')
                  setOpenDialog('m5-planc')
                }}
                className={`bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-3 shadow-[0_0_30px_rgba(249,115,22,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m3 === 'planC' ? 'border-orange-300 ring-4 ring-orange-400/50' : 'border-orange-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🔶</div>
                  <p className="text-sm font-black">PLAN C</p>
                  <p className="text-xs opacity-70">62-69명 (60-79%)</p>
                  {selections.phase3.m3 === 'planC' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-orange-300" />
                  )}
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 580만원</p>
                  <p className="mt-1">성장 둔화</p>
                  <p className="text-orange-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute right-[5%] top-[1160px]" style={{ width: '280px' }}>
              <div
                onClick={() => setOpenDialog('m5-pland')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">PLAN D</p>
                  <p className="text-xs opacity-70">&lt;62명 (50-59%)</p>
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 520만원↓</p>
                  <p className="mt-1">근본 문제 진단</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== MONTH 7 ========== */}
            <motion.div
              className="absolute left-1/2 top-[1410px] -translate-x-1/2"
              style={{ width: '400px' }}
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4 shadow-[0_0_35px_rgba(99,102,241,0.5)] border-2 border-indigo-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 7 🎓</p>
                <p className="text-lg font-black text-center">재등록 시즌 & 입소문</p>
                <p className="text-xs text-center opacity-80 mt-2">
                  목표: 88명 (직강 15 + 저녁 55 + 주간 18) → 순수익 810만원
                </p>
              </div>
            </motion.div>

            {/* Month 7 - 4개 노드 */}
            <motion.div className="absolute left-[5%] top-[1570px]" style={{ width: '280px' }}>
              <div
                onClick={() => handleSelect('m7', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m6 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-base font-black">SUCCESS</p>
                  <p className="text-xs opacity-70">88명 이상</p>
                  {selections.phase3.m6 === 'success' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-green-300" />
                  )}
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 810만원+</p>
                  <p className="mt-1 text-green-300">재등록 성공</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute left-[28%] top-[1570px]" style={{ width: '280px' }}>
              <div
                onClick={() => {
                  handleSelect('m7', 'planB')
                  setOpenDialog('m7-planb')
                }}
                className={`bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m6 === 'planB' ? 'border-amber-300 ring-4 ring-amber-400/50' : 'border-amber-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">PLAN B</p>
                  <p className="text-xs opacity-70">78-87명 (80-99%)</p>
                  {selections.phase3.m6 === 'planB' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-amber-300" />
                  )}
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 720만원</p>
                  <p className="mt-1">재등록률 보강</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute left-[51%] top-[1570px]" style={{ width: '280px' }}>
              <div
                onClick={() => {
                  handleSelect('m7', 'planC')
                  setOpenDialog('m7-planc')
                }}
                className={`bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-3 shadow-[0_0_30px_rgba(249,115,22,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m6 === 'planC' ? 'border-orange-300 ring-4 ring-orange-400/50' : 'border-orange-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🔶</div>
                  <p className="text-sm font-black">PLAN C</p>
                  <p className="text-xs opacity-70">70-77명 (60-79%)</p>
                  {selections.phase3.m6 === 'planC' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-orange-300" />
                  )}
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 630만원</p>
                  <p className="mt-1">이탈 관리 강화</p>
                  <p className="text-orange-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute right-[5%] top-[1570px]" style={{ width: '280px' }}>
              <div
                onClick={() => setOpenDialog('m7-pland')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">PLAN D</p>
                  <p className="text-xs opacity-70">&lt;70명 (50-59%)</p>
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 560만원↓</p>
                  <p className="mt-1">재등록 부진</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== MONTH 9 ========== */}
            <motion.div
              className="absolute left-1/2 top-[1860px] -translate-x-1/2"
              style={{ width: '400px' }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-xl p-4 shadow-[0_0_35px_rgba(168,85,247,0.5)] border-2 border-purple-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 9 🚀</p>
                <p className="text-lg font-black text-center">자연 유입 본격화</p>
                <p className="text-xs text-center opacity-80 mt-2">
                  목표: 98명 (직강 15 + 저녁 63 + 주간 20) → 순수익 945만원
                </p>
              </div>
            </motion.div>

            {/* Month 9 - 4개 노드 */}
            <motion.div className="absolute left-[5%] top-[2030px]" style={{ width: '280px' }}>
              <div
                onClick={() => handleSelect('m9', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m6 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-base font-black">SUCCESS</p>
                  <p className="text-xs opacity-70">98명 이상</p>
                  {selections.phase3.m6 === 'success' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-green-300" />
                  )}
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 945만원+</p>
                  <p className="mt-1 text-green-300">자연 유입 순조</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute left-[28%] top-[2030px]" style={{ width: '280px' }}>
              <div
                onClick={() => {
                  handleSelect('m9', 'planB')
                  setOpenDialog('m9-planb')
                }}
                className={`bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m6 === 'planB' ? 'border-amber-300 ring-4 ring-amber-400/50' : 'border-amber-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">PLAN B</p>
                  <p className="text-xs opacity-70">88-97명 (80-99%)</p>
                  {selections.phase3.m6 === 'planB' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-amber-300" />
                  )}
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 850만원</p>
                  <p className="mt-1">신규 유입 보강</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute left-[51%] top-[2030px]" style={{ width: '280px' }}>
              <div
                onClick={() => {
                  handleSelect('m9', 'planC')
                  setOpenDialog('m9-planc')
                }}
                className={`bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-3 shadow-[0_0_30px_rgba(249,115,22,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m6 === 'planC' ? 'border-orange-300 ring-4 ring-orange-400/50' : 'border-orange-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🔶</div>
                  <p className="text-sm font-black">PLAN C</p>
                  <p className="text-xs opacity-70">78-87명 (60-79%)</p>
                  {selections.phase3.m6 === 'planC' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-orange-300" />
                  )}
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 720만원</p>
                  <p className="mt-1">정체 구간</p>
                  <p className="text-orange-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute right-[5%] top-[2030px]" style={{ width: '280px' }}>
              <div
                onClick={() => setOpenDialog('m9-pland')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">PLAN D</p>
                  <p className="text-xs opacity-70">&lt;78명 (50-59%)</p>
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 650만원↓</p>
                  <p className="mt-1">브랜드 재정립</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* ========== MONTH 12 ========== */}
            <motion.div
              className="absolute left-1/2 top-[2380px] -translate-x-1/2"
              style={{ width: '400px' }}
            >
              <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-xl p-4 shadow-[0_0_35px_rgba(217,70,239,0.5)] border-2 border-fuchsia-400/50">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 12 🏆</p>
                <p className="text-lg font-black text-center">Phase 3 최종 완성</p>
                <p className="text-xs text-center opacity-80 mt-2">
                  목표: 108명 (직강 15 + 저녁 70 + 주간 23) → 순수익 1,097만원
                </p>
              </div>
            </motion.div>

            {/* Month 12 - 4개 노드 */}
            <motion.div className="absolute left-[5%] top-[2550px]" style={{ width: '280px' }}>
              <div
                onClick={() => handleSelect('m12', 'success')}
                className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m6 === 'success' ? 'border-green-300 ring-4 ring-green-400/50' : 'border-green-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-2xl mb-1">🎉</div>
                  <p className="text-base font-black">SUCCESS</p>
                  <p className="text-xs opacity-70">108명 이상</p>
                  {selections.phase3.m6 === 'success' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-green-300" />
                  )}
                </div>
                <div className="text-xs bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 1,097만원 ✅</p>
                  <p className="mt-1 text-green-300">목표 완수!</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute left-[28%] top-[2550px]" style={{ width: '280px' }}>
              <div
                onClick={() => {
                  handleSelect('m12', 'planB')
                  setOpenDialog('m12-planb')
                }}
                className={`bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-3 shadow-[0_0_30px_rgba(245,158,11,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m6 === 'planB' ? 'border-amber-300 ring-4 ring-amber-400/50' : 'border-amber-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">⚠️</div>
                  <p className="text-sm font-black">PLAN B</p>
                  <p className="text-xs opacity-70">98-107명 (80-99%)</p>
                  {selections.phase3.m6 === 'planB' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-amber-300" />
                  )}
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 950만원</p>
                  <p className="mt-1">추가 1-2개월</p>
                  <p className="text-amber-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute left-[51%] top-[2550px]" style={{ width: '280px' }}>
              <div
                onClick={() => {
                  handleSelect('m12', 'planC')
                  setOpenDialog('m12-planc')
                }}
                className={`bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-3 shadow-[0_0_30px_rgba(249,115,22,0.4)] border-2 hover:scale-105 transition-transform cursor-pointer ${
                  selections.phase3.m6 === 'planC' ? 'border-orange-300 ring-4 ring-orange-400/50' : 'border-orange-400/40'
                }`}
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🔶</div>
                  <p className="text-sm font-black">PLAN C</p>
                  <p className="text-xs opacity-70">88-97명 (60-79%)</p>
                  {selections.phase3.m6 === 'planC' && (
                    <CheckCircle2 className="w-5 h-5 mx-auto mt-2 text-orange-300" />
                  )}
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 820만원</p>
                  <p className="mt-1">재설정 필요</p>
                  <p className="text-orange-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="absolute right-[5%] top-[2550px]" style={{ width: '280px' }}>
              <div
                onClick={() => setOpenDialog('m12-pland')}
                className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-3 shadow-[0_0_30px_rgba(239,68,68,0.4)] border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-center mb-2">
                  <div className="text-xl mb-1">🚨</div>
                  <p className="text-sm font-black">PLAN D</p>
                  <p className="text-xs opacity-70">&lt;88명 (50-59%)</p>
                </div>
                <div className="text-[10px] bg-white/10 rounded p-2">
                  <p className="font-bold">순수익 750만원↓</p>
                  <p className="mt-1">Phase 2 복귀</p>
                  <p className="text-red-200 font-semibold pt-1">클릭 시 상세보기</p>
                </div>
              </div>
            </motion.div>

            {/* FINAL SUCCESS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.6 }}
              className="absolute left-1/2 top-[2720px] -translate-x-1/2"
              style={{ width: '450px' }}
            >
              <div className="bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 rounded-xl p-6 shadow-[0_0_60px_rgba(16,185,129,0.6)] border-3 border-green-400/60">
                <div className="text-center mb-3">
                  <div className="text-5xl mb-2">🏆</div>
                  <p className="text-2xl font-black">Phase 3 완성!</p>
                  <p className="text-lg opacity-90 mt-1">108명 달성 + 월 1,100만원</p>
                </div>
                <div className="space-y-2 text-sm bg-white/20 rounded-lg p-4 border border-white/30">
                  <p className="font-bold">✅ 주간 타임 완전 정착 (23명)</p>
                  <p className="font-bold">✅ 저녁 타임 대규모 운영 (70명)</p>
                  <p className="font-bold">✅ 브랜드 가치 확립 (입소문)</p>
                  <p className="text-yellow-300 font-bold mt-3">→ 지속 가능한 비즈니스 모델 완성!</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========== DIALOGS (24개) ========== */}

        {/* Month 1 SUCCESS */}
        <Dialog open={openDialog === 'm1-success'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-green-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-green-400">Month 1 SUCCESS (53명 이상)</DialogTitle>
              <DialogDescription className="text-slate-300">
                주간 타임 확대 성공 - 순수익 500만원+
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="font-bold text-green-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">
                  주간 타임 8명 목표 달성. 낮 시간대(10-17시) 학생/주부 타겟 성공.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-green-400 mb-3">🎯 다음 단계</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• Month 2: 주간 10명으로 확대</li>
                  <li>• 입소문 시스템 작동 (학부모 네트워크)</li>
                  <li>• 저녁 타임 안정적 유지 (37명)</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 1 PLAN B */}
        <Dialog open={openDialog === 'm1-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">Month 1 PLAN B (48-52명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                부분 성공 - 주간 모집 속도 느림
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">
                  주간 5-7명 수준. 학생/주부 타겟 모집 속도가 예상보다 느림.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 즉시 액션</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 주간 타임 무료 체험 이벤트</li>
                  <li>• 지역 학부모 커뮤니티 집중 공략</li>
                  <li>• 브랜드 철학 강조 마케팅</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">💰 재무 영향</p>
                <p className="text-sm text-slate-300">순수익 400만원 (목표 대비 -100만원). Month 2에서 만회 가능.</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 1 PLAN C */}
        <Dialog open={openDialog === 'm1-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-orange-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-orange-400">Month 1 PLAN C (43-47명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                전략 수정 필요 - 주간 타임 수요 재평가
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">🚨 상황 분석</p>
                <p className="text-sm text-slate-300">
                  주간 3-4명만 모집. 시간대별 수요 재평가 필요.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-3">🔄 전략 재검토</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 주간 강사 파트타임 전환 검토</li>
                  <li>• 저녁 타임 강화로 단기 보완</li>
                  <li>• 주간 확장 2개월 연기</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 1 PLAN D */}
        <Dialog open={openDialog === 'm1-pland'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">Month 1 PLAN D (&lt;43명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 위기 - 주간 확장 실패
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 상황 분석</p>
                <p className="text-sm text-slate-300">
                  주간 확장 실패. Phase 3 전략 전면 재검토 필요.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 선택지</p>
                <div className="space-y-2">
                  <div className="p-3 bg-red-100/10 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-400 mb-1">옵션 1: 주간 운영 중단</p>
                    <p className="text-xs text-slate-400">Phase 2 모델 복귀, 저녁 타임 집중</p>
                  </div>
                  <div className="p-3 bg-red-100/10 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-400 mb-1">옵션 2: Phase 3 연기</p>
                    <p className="text-xs text-slate-400">6개월 안정화 후 재도전</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 3 PLAN B */}
        <Dialog open={openDialog === 'm3-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">Month 3 PLAN B (60-67명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                시스템 안정화 중 - 성장 속도 조정
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">
                  주간 10-12명 수준. 전 시간대 운영은 가능하나 목표 인원 미달.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 즉시 액션</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 주간 타임 마케팅 강화 (학원가 전단지)</li>
                  <li>• 수강생 후기 영상 제작 (SNS 활용)</li>
                  <li>• 주간 할인 프로모션 (한시적)</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 3 PLAN C */}
        <Dialog open={openDialog === 'm3-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-orange-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-orange-400">Month 3 PLAN C (54-59명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                재검토 필요 - 주간 타임 확장 둔화
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">🚨 상황 분석</p>
                <p className="text-sm text-slate-300">
                  주간 8-9명에서 정체. 시장 수요 한계 도달 가능성.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-3">🔄 전략 조정</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 주간 확장 속도 완화 (3개월 단위)</li>
                  <li>• 저녁 타임 우선 강화</li>
                  <li>• 타겟층 재분석 (시장 조사)</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 3 PLAN D */}
        <Dialog open={openDialog === 'm3-pland'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">Month 3 PLAN D (&lt;54명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 주간 축소 고려 단계
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 위기 신호</p>
                <p className="text-sm text-slate-300">
                  주간 확장이 기대에 못 미침. 주간 강사 유지 검토 필요.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 선택지</p>
                <div className="space-y-2">
                  <div className="p-3 bg-red-100/10 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-400 mb-1">옵션 1: 주간 강사 파트타임 전환</p>
                    <p className="text-xs text-slate-400">고정비 절감, 유연 운영</p>
                  </div>
                  <div className="p-3 bg-red-100/10 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-400 mb-1">옵션 2: Phase 2 모델 복귀</p>
                    <p className="text-xs text-slate-400">저녁 타임 집중, 안정 운영</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 5 PLAN B */}
        <Dialog open={openDialog === 'm5-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">Month 5 PLAN B (70-77명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                브랜드 확산 중 - 입소문 보강 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">
                  주간 13-14명. 브랜드 가치는 형성되었으나 입소문 속도 느림.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 입소문 강화 전략</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 수강생 인터뷰 영상 (Before/After)</li>
                  <li>• 추천 이벤트 (친구 초대 할인)</li>
                  <li>• 지역 커뮤니티 적극 참여</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 5 PLAN C */}
        <Dialog open={openDialog === 'm5-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-orange-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-orange-400">Month 5 PLAN C (62-69명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                성장 둔화 - 시장 포화 가능성
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">🚨 상황 분석</p>
                <p className="text-sm text-slate-300">
                  5개월간 성장이 정체. 중랑구 시장 포화 신호 감지.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-3">🔄 전략 재점검</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 인근 지역(노원, 성북) 홍보 확대</li>
                  <li>• 온라인 레슨 병행 검토</li>
                  <li>• 프리미엄 가격 재조정</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 5 PLAN D */}
        <Dialog open={openDialog === 'm5-pland'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">Month 5 PLAN D (&lt;62명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 근본 문제 진단 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 위기 상황</p>
                <p className="text-sm text-slate-300">
                  5개월간 목표 미달. 근본적인 문제(시장, 브랜드, 가격) 진단 필요.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 긴급 대응</p>
                <div className="space-y-2">
                  <div className="p-3 bg-red-100/10 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-400 mb-1">옵션 1: Phase 2 규모 축소</p>
                    <p className="text-xs text-slate-400">주간 중단, 저녁 집중</p>
                  </div>
                  <div className="p-3 bg-red-100/10 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-400 mb-1">옵션 2: 컨설팅 의뢰</p>
                    <p className="text-xs text-slate-400">외부 전문가 시장 분석</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 7 PLAN B */}
        <Dialog open={openDialog === 'm7-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">Month 7 PLAN B (78-87명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                재등록률 보강 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">
                  재등록률 70-75%. 이탈 방지 시스템 보완 필요.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 재등록 강화</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 수강생 만족도 조사 (피드백 수집)</li>
                  <li>• 재등록 얼리버드 할인 (10%)</li>
                  <li>• 1:1 상담 강화 (이탈 방지)</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 7 PLAN C */}
        <Dialog open={openDialog === 'm7-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-orange-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-orange-400">Month 7 PLAN C (70-77명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                이탈 관리 강화 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">🚨 상황 분석</p>
                <p className="text-sm text-slate-300">
                  재등록률 60% 이하. 이탈 원인 분석 및 대응 시급.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-3">🔄 이탈 방지 대책</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 이탈 수강생 인터뷰 (원인 파악)</li>
                  <li>• 커리큘럼 개선 (수요 반영)</li>
                  <li>• 커뮤니티 활성화 (소속감 강화)</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 7 PLAN D */}
        <Dialog open={openDialog === 'm7-pland'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">Month 7 PLAN D (&lt;70명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 재등록 부진 위기
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 심각한 상황</p>
                <p className="text-sm text-slate-300">
                  재등록률 50% 이하. 브랜드 가치 하락 신호.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 긴급 조치</p>
                <div className="space-y-2">
                  <div className="p-3 bg-red-100/10 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-400 mb-1">옵션 1: 전면 리브랜딩</p>
                    <p className="text-xs text-slate-400">커리큘럼, 마케팅 전면 재검토</p>
                  </div>
                  <div className="p-3 bg-red-100/10 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-400 mb-1">옵션 2: 규모 축소</p>
                    <p className="text-xs text-slate-400">강사 감원, Phase 2 규모로 복귀</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 9 PLAN B */}
        <Dialog open={openDialog === 'm9-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">Month 9 PLAN B (88-97명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                자연 유입 보강 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">
                  자연 유입 속도가 기대치보다 느림. 브랜드 홍보 강화 필요.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 유입 확대 전략</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 블로그/유튜브 콘텐츠 제작</li>
                  <li>• 지역 이벤트 참여 (공연, 발표회)</li>
                  <li>• 인플루언서 협업 검토</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 9 PLAN C */}
        <Dialog open={openDialog === 'm9-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-orange-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-orange-400">Month 9 PLAN C (78-87명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                정체 구간 - 돌파 전략 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">🚨 상황 분석</p>
                <p className="text-sm text-slate-300">
                  3개월간 성장 정체. 시장 천장 도달 가능성.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-3">🔄 돌파 전략</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 신규 시장 개척 (인근 구 확대)</li>
                  <li>• 온라인 레슨 병행 (지리 한계 극복)</li>
                  <li>• 특화 프로그램 개발 (차별화)</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 9 PLAN D */}
        <Dialog open={openDialog === 'm9-pland'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">Month 9 PLAN D (&lt;78명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 브랜드 재정립 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 위기 신호</p>
                <p className="text-sm text-slate-300">
                  9개월간 Phase 3 목표 달성 실패. 근본적 재검토 필요.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 선택지</p>
                <div className="space-y-2">
                  <div className="p-3 bg-red-100/10 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-400 mb-1">옵션 1: Phase 2 규모로 축소</p>
                    <p className="text-xs text-slate-400">주간 중단, 저녁 집중 운영</p>
                  </div>
                  <div className="p-3 bg-red-100/10 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-400 mb-1">옵션 2: 브랜드 전면 리뉴얼</p>
                    <p className="text-xs text-slate-400">컨셉, 타겟, 가격 재설정</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 12 PLAN B */}
        <Dialog open={openDialog === 'm12-planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">Month 12 PLAN B (98-107명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                목표 근접 - 추가 1-2개월 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 상황 분석</p>
                <p className="text-sm text-slate-300">
                  목표에 근접했으나 미달. 1-2개월 추가 시간 필요.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">🎯 최종 스퍼트</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 신규 모집 캠페인 (연말 이벤트)</li>
                  <li>• 대기자 적극 전환</li>
                  <li>• 추천 보상 확대 (최종 푸시)</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">⏱️ 타임라인</p>
                <p className="text-sm text-slate-300">
                  Month 13-14에서 108명 달성 목표. 여전히 성공 범위.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 12 PLAN C */}
        <Dialog open={openDialog === 'm12-planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-orange-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-orange-400">Month 12 PLAN C (88-97명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                목표 재설정 필요
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">🚨 상황 분석</p>
                <p className="text-sm text-slate-300">
                  12개월간 108명 목표 미달. 현실적 목표 재설정 필요.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-3">🔄 재설정 방향</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• 현재 수준(88-97명)을 Phase 3 완성으로 인정</li>
                  <li>• 월 800-900만원 안정 운영 집중</li>
                  <li>• 추가 확장보다 질적 성장 추구</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-2">💡 결론</p>
                <p className="text-sm text-slate-300">
                  Phase 3 목표 달성 실패가 아닌, <strong>지속 가능한 규모 확정</strong>으로 해석 가능.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Month 12 PLAN D */}
        <Dialog open={openDialog === 'm12-pland'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">Month 12 PLAN D (&lt;88명)</DialogTitle>
              <DialogDescription className="text-slate-300">
                🚨 Phase 2 규모로 복귀 권장
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">🚨 현실 직시</p>
                <p className="text-sm text-slate-300">
                  12개월간 Phase 3 목표 실패. 주간 확대 전략이 시장과 맞지 않음.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 권장 방향</p>
                <div className="space-y-2">
                  <div className="p-3 bg-red-100/10 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-400 mb-1">Phase 2 규모로 복귀</p>
                    <p className="text-xs text-slate-400">
                      주간 타임 중단, 저녁 타임 집중. 월 500-600만원 안정 운영.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">💰 재무 안정성</p>
                <p className="text-sm text-slate-300">
                  Phase 2 규모로도 <strong className="text-green-400">충분히 지속 가능</strong>합니다.
                  <br />무리한 확장보다 안정적 운영이 우선.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
