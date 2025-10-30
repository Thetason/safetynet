"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, AlertTriangle } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function Phase3ScenarioPage() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)

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
            Phase 3 시나리오 분석 (Deep Dive - 12개월 확장)
          </h1>
          <p className="text-sm text-slate-400">12개월 마일스톤 · 주간 타임 확대 전략 · 목표 순수익 1,100만원</p>

          {/* 안내 메시지 */}
          <div className="mt-4 p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-700/50 rounded-lg">
            <p className="text-xs text-purple-300 mb-2">💡 각 Month 노드를 클릭하여 SUCCESS/Plan B/C/D 시나리오를 확인하세요</p>
            <p className="text-xs text-slate-400">
              브랜딩: <strong className="text-pink-400">"주간 타임"</strong> 확대 (학생/주부/프리랜서 타겟) + 저녁 타임 안정화
            </p>
          </div>
        </div>

        {/* Canvas - 12개월이므로 높이 9600px */}
        <div className="relative w-full h-[9600px] bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
          {/* SVG 연결선 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1600 9600" preserveAspectRatio="xMidYMin slice" style={{ zIndex: 1 }}>
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
              x1="800" y1="100" x2="800" y2="250"
              stroke="url(#line-phase3)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Vertical timeline connections for all months */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((month) => (
              <motion.line
                key={month}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 0.5, delay: 0.5 + month * 0.1 }}
                x1="800"
                y1={250 + (month - 1) * 800 + 150}
                x2="800"
                y2={250 + month * 800}
                stroke="#8b5cf6"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
            ))}
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
                  <p className="text-xl font-black">Phase 3: Deep Dive (주간 타임 확대)</p>
                  <p className="text-sm mt-1">목표: 월 순수익 1,100만원 (직강 500 + 강사 마진 600)</p>
                </div>
              </div>
            </motion.div>

            {/* ========== Month 1: 주간 타임 확대 ========== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute left-1/2 top-[250px] -translate-x-1/2"
              style={{ width: '1400px' }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 shadow-[0_0_35px_rgba(147,51,234,0.5)] border-2 border-purple-400/50 mb-6">
                <p className="text-xs font-bold text-center opacity-80 mb-1">Month 1 🌞</p>
                <p className="text-lg font-black text-center">주간 시간대 확대 (학생/주부/프리랜서 타겟)</p>
                <p className="text-xs text-center opacity-80 mt-2">
                  목표: 58명 (직강 15 + 저녁 강사 35 + 주간 8) → 순수익 507만원
                </p>
              </div>

              {/* 4개 박스: SUCCESS, Plan B, C, D */}
              <div className="grid grid-cols-4 gap-4">
                {/* SUCCESS */}
                <div
                  onClick={() => setOpenDialog('m1-success')}
                  className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-lg border-2 border-green-400/40 hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="text-center mb-2">
                    <div className="text-2xl mb-1">✓</div>
                    <p className="text-base font-black">SUCCESS</p>
                    <p className="text-xs opacity-70">53명 이상</p>
                  </div>
                  <div className="text-xs bg-white/10 rounded p-2">
                    <p className="font-bold">순수익 500만원+</p>
                    <p className="mt-1 text-green-300">주간 확대 순조</p>
                  </div>
                </div>

                {/* Plan B */}
                <div
                  onClick={() => setOpenDialog('m1-planb')}
                  className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-4 shadow-lg border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="text-center mb-2">
                    <div className="text-xl mb-1">⚠️</div>
                    <p className="text-sm font-black">PLAN B</p>
                    <p className="text-xs opacity-70">48-52명 (80-99%)</p>
                  </div>
                  <div className="text-[10px] bg-white/10 rounded p-2">
                    <p className="font-bold">순수익 400만원</p>
                    <p className="mt-1">주간 모집 속도 느림</p>
                  </div>
                </div>

                {/* Plan C */}
                <div
                  onClick={() => setOpenDialog('m1-planc')}
                  className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-4 shadow-lg border-2 border-orange-400/40 hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="text-center mb-2">
                    <div className="text-xl mb-1">🔶</div>
                    <p className="text-sm font-black">PLAN C</p>
                    <p className="text-xs opacity-70">43-47명 (60-79%)</p>
                  </div>
                  <div className="text-[10px] bg-white/10 rounded p-2">
                    <p className="font-bold">순수익 350만원</p>
                    <p className="mt-1">전략 수정 필요</p>
                  </div>
                </div>

                {/* Plan D */}
                <div
                  onClick={() => setOpenDialog('m1-pland')}
                  className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-4 shadow-lg border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="text-center mb-2">
                    <div className="text-xl mb-1">🚨</div>
                    <p className="text-sm font-black">PLAN D</p>
                    <p className="text-xs opacity-70">&lt;43명 (50-59%)</p>
                  </div>
                  <div className="text-[10px] bg-white/10 rounded p-2">
                    <p className="font-bold">순수익 300만원↓</p>
                    <p className="mt-1">주간 확장 실패</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ========== Month 2-12 반복 패턴 ========== */}
            {[
              {
                month: 2,
                title: "주간 타임 안정화",
                target: "62명 (직강 15 + 저녁 37 + 주간 10)",
                profit: "541만원",
                successTarget: "62명 이상",
                successProfit: "541만원",
                planBTarget: "55-61명 (80-99%)",
                planBProfit: "480만원",
                planCTarget: "50-54명 (60-79%)",
                planCProfit: "420만원",
                planDTarget: "<50명 (50-59%)",
                planDProfit: "360만원",
              },
              {
                month: 3,
                title: "전 시간대 시스템 완성",
                target: "68명 (직강 15 + 저녁 40 + 주간 13)",
                profit: "593만원",
                successTarget: "68명 이상",
                successProfit: "593만원",
                planBTarget: "60-67명 (80-99%)",
                planBProfit: "530만원",
                planCTarget: "54-59명 (60-79%)",
                planCProfit: "470만원",
                planDTarget: "<54명 (50-59%)",
                planDProfit: "410만원",
              },
              {
                month: 4,
                title: "브랜드 가치 확산 (4-5개월)",
                target: "73-78명 (직강 15 + 저녁 43-48 + 주간 15)",
                profit: "653-733만원",
                successTarget: "73명 이상",
                successProfit: "653만원+",
                planBTarget: "65-72명 (80-99%)",
                planBProfit: "580만원",
                planCTarget: "58-64명 (60-79%)",
                planCProfit: "500만원",
                planDTarget: "<58명 (50-59%)",
                planDProfit: "450만원↓",
              },
              {
                month: 5,
                title: "브랜드 가치 확산 계속",
                target: "78명 (직강 15 + 저녁 48 + 주간 15)",
                profit: "733만원",
                successTarget: "78명 이상",
                successProfit: "733만원",
                planBTarget: "70-77명 (80-99%)",
                planBProfit: "660만원",
                planCTarget: "62-69명 (60-79%)",
                planCProfit: "580만원",
                planDTarget: "<62명 (50-59%)",
                planDProfit: "520만원↓",
              },
              {
                month: 6,
                title: "중간 점검 & 브랜드 확립",
                target: "83명 (직강 15 + 저녁 53 + 주간 15)",
                profit: "740만원",
                successTarget: "83명 이상",
                successProfit: "740만원",
                planBTarget: "73-82명 (80-99%)",
                planBProfit: "660만원",
                planCTarget: "65-72명 (60-79%)",
                planCProfit: "580만원",
                planDTarget: "<65명 (50-59%)",
                planDProfit: "520만원↓",
              },
              {
                month: 7,
                title: "재등록 시즌 & 입소문 확산 (7-8개월)",
                target: "88-93명 (직강 15 + 저녁 55-60 + 주간 18)",
                profit: "810-886만원",
                successTarget: "88명 이상",
                successProfit: "810만원+",
                planBTarget: "78-87명 (80-99%)",
                planBProfit: "720만원",
                planCTarget: "70-77명 (60-79%)",
                planCProfit: "630만원",
                planDTarget: "<70명 (50-59%)",
                planDProfit: "560만원↓",
              },
              {
                month: 8,
                title: "재등록 시즌 계속",
                target: "93명 (직강 15 + 저녁 60 + 주간 18)",
                profit: "886만원",
                successTarget: "93명 이상",
                successProfit: "886만원",
                planBTarget: "83-92명 (80-99%)",
                planBProfit: "790만원",
                planCTarget: "74-82명 (60-79%)",
                planCProfit: "700만원",
                planDTarget: "<74명 (50-59%)",
                planDProfit: "630만원↓",
              },
              {
                month: 9,
                title: "자연 유입 본격화 (9-10개월)",
                target: "98-103명 (직강 15 + 저녁 63-68 + 주간 20)",
                profit: "945-1,017만원",
                successTarget: "98명 이상",
                successProfit: "945만원+",
                planBTarget: "88-97명 (80-99%)",
                planBProfit: "850만원",
                planCTarget: "78-87명 (60-79%)",
                planCProfit: "720만원",
                planDTarget: "<78명 (50-59%)",
                planDProfit: "650만원↓",
              },
              {
                month: 10,
                title: "자연 유입 계속",
                target: "103명 (직강 15 + 저녁 68 + 주간 20)",
                profit: "1,017만원",
                successTarget: "103명 이상",
                successProfit: "1,017만원",
                planBTarget: "92-102명 (80-99%)",
                planBProfit: "920만원",
                planCTarget: "82-91명 (60-79%)",
                planCProfit: "790만원",
                planDTarget: "<82명 (50-59%)",
                planDProfit: "710만원↓",
              },
              {
                month: 11,
                title: "Phase 3 완성 (11-12개월)",
                target: "108명 (직강 15 + 저녁 70 + 주간 23)",
                profit: "1,097만원",
                successTarget: "108명 이상",
                successProfit: "1,097만원",
                planBTarget: "98-107명 (80-99%)",
                planBProfit: "950만원",
                planCTarget: "88-97명 (60-79%)",
                planCProfit: "820만원",
                planDTarget: "<88명 (50-59%)",
                planDProfit: "750만원↓",
              },
              {
                month: 12,
                title: "Phase 3 최종 완성",
                target: "108명 (직강 15 + 저녁 70 + 주간 23)",
                profit: "1,097만원",
                successTarget: "108명 이상",
                successProfit: "1,097만원 ✅",
                planBTarget: "98-107명 (80-99%)",
                planBProfit: "950만원",
                planCTarget: "88-97명 (60-79%)",
                planCProfit: "820만원",
                planDTarget: "<88명 (50-59%)",
                planDProfit: "750만원↓",
              },
            ].map((data, index) => {
              const topPosition = 250 + (index + 1) * 800
              return (
                <motion.div
                  key={data.month}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{ width: '1400px', top: `${topPosition}px` }}
                >
                  <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl p-4 shadow-[0_0_35px_rgba(219,39,119,0.5)] border-2 border-pink-400/50 mb-6">
                    <p className="text-xs font-bold text-center opacity-80 mb-1">Month {data.month} 🎯</p>
                    <p className="text-lg font-black text-center">{data.title}</p>
                    <p className="text-xs text-center opacity-80 mt-2">
                      목표: {data.target} → 순수익 {data.profit}
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {/* SUCCESS */}
                    <div
                      onClick={() => setOpenDialog(`m${data.month}-success`)}
                      className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 shadow-lg border-2 border-green-400/40 hover:scale-105 transition-transform cursor-pointer"
                    >
                      <div className="text-center mb-2">
                        <div className="text-2xl mb-1">✓</div>
                        <p className="text-base font-black">SUCCESS</p>
                        <p className="text-xs opacity-70">{data.successTarget}</p>
                      </div>
                      <div className="text-xs bg-white/10 rounded p-2">
                        <p className="font-bold">{data.successProfit}</p>
                        <p className="mt-1 text-green-300">목표 달성</p>
                      </div>
                    </div>

                    {/* Plan B */}
                    <div
                      onClick={() => setOpenDialog(`m${data.month}-planb`)}
                      className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg p-4 shadow-lg border-2 border-amber-400/40 hover:scale-105 transition-transform cursor-pointer"
                    >
                      <div className="text-center mb-2">
                        <div className="text-xl mb-1">⚠️</div>
                        <p className="text-sm font-black">PLAN B</p>
                        <p className="text-xs opacity-70">{data.planBTarget}</p>
                      </div>
                      <div className="text-[10px] bg-white/10 rounded p-2">
                        <p className="font-bold">{data.planBProfit}</p>
                        <p className="mt-1">목표 근접</p>
                      </div>
                    </div>

                    {/* Plan C */}
                    <div
                      onClick={() => setOpenDialog(`m${data.month}-planc`)}
                      className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-4 shadow-lg border-2 border-orange-400/40 hover:scale-105 transition-transform cursor-pointer"
                    >
                      <div className="text-center mb-2">
                        <div className="text-xl mb-1">🔶</div>
                        <p className="text-sm font-black">PLAN C</p>
                        <p className="text-xs opacity-70">{data.planCTarget}</p>
                      </div>
                      <div className="text-[10px] bg-white/10 rounded p-2">
                        <p className="font-bold">{data.planCProfit}</p>
                        <p className="mt-1">전략 수정</p>
                      </div>
                    </div>

                    {/* Plan D */}
                    <div
                      onClick={() => setOpenDialog(`m${data.month}-pland`)}
                      className="bg-gradient-to-br from-red-500 to-rose-600 rounded-lg p-4 shadow-lg border-2 border-red-400/40 hover:scale-105 transition-transform cursor-pointer"
                    >
                      <div className="text-center mb-2">
                        <div className="text-xl mb-1">🚨</div>
                        <p className="text-sm font-black">PLAN D</p>
                        <p className="text-xs opacity-70">{data.planDTarget}</p>
                      </div>
                      <div className="text-[10px] bg-white/10 rounded p-2">
                        <p className="font-bold">{data.planDProfit}</p>
                        <p className="mt-1">위기 대응</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Dialogs - 예시로 Month 1만 상세 작성 */}
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

        {/* 나머지 Month 2-12 Dialog는 유사한 패턴으로 생략 (필요시 추가) */}
      </div>
    </div>
  )
}
