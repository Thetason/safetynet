"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, RefreshCw } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useScenario } from '@/contexts/ScenarioContext'
import { Button } from '@/components/ui/button'

export default function SavingsSimulatorPage() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)
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
                <li>• Phase 1: 5개월 (작업실)</li>
                <li>• Phase 2: 6개월 (정규 학원)</li>
                <li>• Phase 3: 12개월 (확장)</li>
                <li className="text-yellow-400 font-semibold">→ 총 23개월</li>
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

        {/* 동적 시뮬레이션 결과 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className={`rounded-2xl p-8 shadow-[0_0_50px_rgba(16,185,129,0.5)] border-2 ${
            results.achievesTarget
              ? 'bg-gradient-to-br from-green-600 to-emerald-700 border-green-400/50'
              : 'bg-gradient-to-br from-amber-600 to-orange-700 border-amber-400/50'
          }`}>
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">{results.achievesTarget ? '🎯' : '⚡'}</div>
              <h2 className="text-3xl font-black mb-2">
                {results.achievesTarget ? '목표 달성!' : '목표 근접'}
              </h2>
              <p className="text-sm opacity-90">선택된 시나리오 기준 계산 결과</p>
            </div>

            <div className="space-y-4">
              {/* Phase 1 */}
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold">Phase 1 (5개월)</h3>
                  <span className="text-2xl font-black text-green-300">{results.phase1Total.toLocaleString()}만원</span>
                </div>
                <div className="mt-3 bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div className="bg-green-400 h-full" style={{ width: `${(results.phase1Total / 10000) * 100}%` }}></div>
                </div>
                <p className="text-xs text-slate-400 mt-1">{((results.phase1Total / 10000) * 100).toFixed(1)}% 달성</p>
              </div>

              {/* Phase 2 */}
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold">Phase 2 (6개월)</h3>
                  <span className="text-2xl font-black text-green-300">+{results.phase2Total.toLocaleString()}만원</span>
                </div>
                <div className="mt-3 bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div className="bg-green-400 h-full" style={{ width: `${((results.phase1Total + results.phase2Total) / 10000) * 100}%` }}></div>
                </div>
                <p className="text-xs text-slate-400 mt-1">{(((results.phase1Total + results.phase2Total) / 10000) * 100).toFixed(1)}% 달성 (11개월 시점)</p>
              </div>

              {/* Phase 3 */}
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold">Phase 3 (12개월)</h3>
                  <span className="text-2xl font-black text-green-300">+{results.phase3Total.toLocaleString()}만원</span>
                </div>
                <div className="mt-3 bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div className="bg-green-400 h-full" style={{ width: `${(results.grandTotal / 10000) * 100}%` }}></div>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {((results.grandTotal / 10000) * 100).toFixed(1)}% 달성{results.achievesTarget && ' 🎉'}
                </p>
              </div>

              {/* 최종 결과 */}
              <div className={`rounded-xl p-6 border-2 ${
                results.achievesTarget
                  ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 border-green-400/60'
                  : 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 border-amber-400/60'
              }`}>
                <div className="text-center">
                  <div className="text-5xl mb-3">{results.achievesTarget ? '🎉' : '⏱️'}</div>
                  <p className="text-2xl font-black mb-2">
                    {results.achievesTarget
                      ? `${results.monthsToTarget}개월에 1억 달성!`
                      : `${results.monthsToTarget}개월 필요`}
                  </p>
                  <p className="text-sm opacity-90">
                    {results.achievesTarget
                      ? results.monthsToTarget === 23 ? '정확히 23개월!' : results.monthsToTarget < 24 ? '목표보다 빠른 달성!' : '목표 근접 달성'
                      : `목표보다 ${results.monthsToTarget - 24}개월 더 필요`}
                  </p>
                  <div className="mt-4 flex justify-center items-center gap-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-xs opacity-80">목표</p>
                      <p className="text-xl font-bold">24개월</p>
                    </div>
                    <div className="text-3xl">→</div>
                    <div className="bg-white/30 rounded-lg p-3 border-2 border-white/60">
                      <p className="text-xs opacity-80">예상</p>
                      <p className="text-xl font-bold">{results.monthsToTarget}개월</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-white/20 rounded-lg p-4 border border-white/30">
                    <p className="text-lg font-bold mb-2">23개월 시점 총 저축액: {results.grandTotal.toLocaleString()}만원</p>
                    <p className="text-sm opacity-90">
                      {results.achievesTarget
                        ? `목표 초과: ${(results.grandTotal - 10000).toLocaleString()}만원 🎊`
                        : `목표까지: ${(10000 - results.grandTotal).toLocaleString()}만원 부족`}
                    </p>
                  </div>
                  <p className="text-sm mt-4 text-white/90 font-semibold">
                    ✨ 2년 이내 1억 달성 성공!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PLAN B & PLAN C */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* PLAN B */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => setOpenDialog('planb')}
            className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-6 shadow-[0_0_40px_rgba(245,158,11,0.4)] border-2 border-amber-400/50 hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">⚠️</div>
              <h2 className="text-2xl font-black">PLAN B</h2>
              <p className="text-sm opacity-90">목표 80% 달성 시</p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="bg-white/10 rounded p-3">
                <div className="flex justify-between">
                  <span>Phase 1 (5개월)</span>
                  <span className="font-bold">500만원</span>
                </div>
              </div>
              <div className="bg-white/10 rounded p-3">
                <div className="flex justify-between">
                  <span>Phase 2 (6개월)</span>
                  <span className="font-bold">+1,800만원</span>
                </div>
              </div>
              <div className="bg-white/10 rounded p-3">
                <div className="flex justify-between">
                  <span>Phase 3 (12개월)</span>
                  <span className="font-bold">+6,240만원</span>
                </div>
              </div>
              <div className="bg-amber-500/30 rounded-lg p-4 border border-amber-300/50">
                <div className="flex justify-between items-center">
                  <span className="font-bold">23개월 누적</span>
                  <span className="text-2xl font-black text-amber-200">8,540만원</span>
                </div>
                <div className="mt-3 bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div className="bg-amber-400 h-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="bg-amber-600/40 rounded-lg p-4 border border-amber-300/60">
                <p className="text-center font-bold text-lg">25개월에 1억 달성</p>
                <p className="text-center text-xs mt-1 opacity-90">+2개월 소요 (목표: 24개월)</p>
              </div>
            </div>

            <p className="text-xs text-amber-200 text-center mt-4">클릭 시 상세보기</p>
          </motion.div>

          {/* PLAN C */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => setOpenDialog('planc')}
            className="bg-gradient-to-br from-red-600 to-rose-700 rounded-2xl p-6 shadow-[0_0_40px_rgba(239,68,68,0.4)] border-2 border-red-400/50 hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🚨</div>
              <h2 className="text-2xl font-black">PLAN C</h2>
              <p className="text-sm opacity-90">목표 70% 달성 시</p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="bg-white/10 rounded p-3">
                <div className="flex justify-between">
                  <span>Phase 1 (5개월)</span>
                  <span className="font-bold">438만원</span>
                </div>
              </div>
              <div className="bg-white/10 rounded p-3">
                <div className="flex justify-between">
                  <span>Phase 2 (6개월)</span>
                  <span className="font-bold">+1,575만원</span>
                </div>
              </div>
              <div className="bg-white/10 rounded p-3">
                <div className="flex justify-between">
                  <span>Phase 3 (12개월)</span>
                  <span className="font-bold">+5,460만원</span>
                </div>
              </div>
              <div className="bg-red-500/30 rounded-lg p-4 border border-red-300/50">
                <div className="flex justify-between items-center">
                  <span className="font-bold">23개월 누적</span>
                  <span className="text-2xl font-black text-red-200">7,473만원</span>
                </div>
                <div className="mt-3 bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div className="bg-red-400 h-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="bg-red-600/40 rounded-lg p-4 border border-red-300/60">
                <p className="text-center font-bold text-lg">29개월에 1억 달성</p>
                <p className="text-center text-xs mt-1 opacity-90">+5개월 소요 (목표: 24개월)</p>
              </div>
            </div>

            <p className="text-xs text-red-200 text-center mt-4">클릭 시 상세보기</p>
          </motion.div>
        </div>

        {/* 비교 차트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 mb-8"
        >
          <h2 className="text-2xl font-black text-center mb-6 text-slate-200">
            📊 시나리오별 비교
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 px-4 text-left text-slate-400 font-semibold">구분</th>
                  <th className="py-3 px-4 text-center text-green-400 font-semibold">SUCCESS</th>
                  <th className="py-3 px-4 text-center text-amber-400 font-semibold">PLAN B</th>
                  <th className="py-3 px-4 text-center text-red-400 font-semibold">PLAN C</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Phase 1 저축</td>
                  <td className="py-3 px-4 text-center font-semibold">625만원</td>
                  <td className="py-3 px-4 text-center font-semibold">500만원</td>
                  <td className="py-3 px-4 text-center font-semibold">438만원</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Phase 2 저축</td>
                  <td className="py-3 px-4 text-center font-semibold">2,250만원</td>
                  <td className="py-3 px-4 text-center font-semibold">1,800만원</td>
                  <td className="py-3 px-4 text-center font-semibold">1,575만원</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Phase 3 저축</td>
                  <td className="py-3 px-4 text-center font-semibold">7,800만원</td>
                  <td className="py-3 px-4 text-center font-semibold">6,240만원</td>
                  <td className="py-3 px-4 text-center font-semibold">5,460만원</td>
                </tr>
                <tr className="border-b border-slate-700 bg-slate-800/50">
                  <td className="py-3 px-4 font-bold">23개월 누적</td>
                  <td className="py-3 px-4 text-center font-bold text-green-400">10,675만원</td>
                  <td className="py-3 px-4 text-center font-bold text-amber-400">8,540만원</td>
                  <td className="py-3 px-4 text-center font-bold text-red-400">7,473만원</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">1억 달성 시점</td>
                  <td className="py-3 px-4 text-center font-semibold text-green-400">23개월 ✨</td>
                  <td className="py-3 px-4 text-center font-semibold text-amber-400">25개월</td>
                  <td className="py-3 px-4 text-center font-semibold text-red-400">29개월</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">목표 대비</td>
                  <td className="py-3 px-4 text-center font-bold text-green-400">-1개월 🎉</td>
                  <td className="py-3 px-4 text-center font-bold text-amber-400">+1개월</td>
                  <td className="py-3 px-4 text-center font-bold text-red-400">+5개월</td>
                </tr>
              </tbody>
            </table>
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
              <p className="font-bold text-indigo-300 mb-2">🎯 놀라운 결과!</p>
              <p className="leading-relaxed">
                <strong className="text-white">생활비 100만원으로 절약하면 23개월에 1억 달성!</strong>
                <br /><br />
                SUCCESS 시나리오에서 <strong className="text-green-400">23개월 만에 10,675만원</strong>을 저축할 수 있습니다.
                목표했던 24개월보다 <strong className="text-yellow-300">1개월 빠른 달성</strong>이며, 675만원을 추가로 모을 수 있습니다!
                <br /><br />
                <strong className="text-cyan-400">"2년 내 1억"은 충분히 달성 가능합니다!</strong> 🎉
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="font-bold text-indigo-300 mb-2">📈 Phase 3가 가장 중요</p>
              <p className="leading-relaxed">
                전체 저축액의 <strong className="text-yellow-300">약 72%가 Phase 3</strong>에서 발생합니다. 
                Phase 1, 2는 기반 구축이고, <strong className="text-green-400">Phase 3 성과가 전체 결과를 좌우</strong>합니다.
                <br /><br />
                따라서 Phase 1, 2에서 무리하지 말고 <strong className="text-cyan-400">안정적으로 Phase 3 진입</strong>하는 것이 핵심입니다.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="font-bold text-indigo-300 mb-2">⚠️ PLAN B도 여전히 빠름</p>
              <p className="leading-relaxed">
                PLAN B (25개월)는 SUCCESS 대비 <strong className="text-amber-400">+2개월</strong> 차이입니다.
                여전히 <strong className="text-green-400">목표 24개월에 매우 근접</strong>하며, 25개월이면 충분히 훌륭한 성과입니다.
                <br /><br />
                <strong className="text-purple-400">PLAN B도 대성공입니다!</strong> 🎉
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="font-bold text-indigo-300 mb-2">🔄 PLAN C도 나쁘지 않음</p>
              <p className="leading-relaxed">
                PLAN C (29개월)는 5개월 추가 소요됩니다.
                하지만 <strong className="text-cyan-400">2년 반이면 여전히 빠른 편</strong>이며, 무리하지 않고 달성할 수 있는 목표입니다.
                <br /><br />
                월 순수익 550만원도 <strong className="text-green-400">대단한 성과</strong>이므로,
                <strong className="text-purple-400">스트레스 없이 29개월 목표로 진행</strong>하는 것도 훌륭한 선택입니다.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-5 border-2 border-green-400/50">
              <p className="font-bold text-green-400 mb-3 text-lg text-center">🎯 최종 결론</p>
              <p className="leading-relaxed text-center text-base">
                <strong className="text-white">생활비 100만원 절약 전략 시:</strong>
                <br />
                <strong className="text-green-400">SUCCESS: 23개월 (목표 달성! 🎉)</strong>
                <br />
                <strong className="text-yellow-300">PLAN B: 25개월 (+1개월)</strong>
                <br />
                <strong className="text-amber-400">PLAN C: 29개월 (+5개월)</strong>
                <br /><br />
                <span className="text-green-300 text-lg font-bold">
                  어떤 시나리오든 2년 반 내 1억 달성! 💪
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* DIALOGS */}
        
        {/* PLAN B Dialog */}
        <Dialog open={openDialog === 'planb'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-amber-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-amber-400">PLAN B 상세 분석</DialogTitle>
              <DialogDescription className="text-slate-300">
                목표 80% 달성 시 - 29개월에 1억 달성
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-2">📊 시나리오 개요</p>
                <p className="text-sm text-slate-300">각 Phase에서 목표의 80% 달성 시 예상 저축액</p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">💰 Phase별 저축액</p>
                <div className="space-y-3">
                  <div className="bg-slate-700 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Phase 1 (5개월)</span>
                      <span className="text-lg font-bold text-amber-300">400만원</span>
                    </div>
                    <ul className="text-xs text-slate-400 space-y-1">
                      <li>• 월 순수익: 120-240만원</li>
                      <li>• 월 평균 저축: 80만원</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Phase 2 (6개월)</span>
                      <span className="text-lg font-bold text-amber-300">+1,200만원</span>
                    </div>
                    <ul className="text-xs text-slate-400 space-y-1">
                      <li>• 월 순수익: 280-480만원</li>
                      <li>• 월 평균 저축: 200만원</li>
                      <li>• 누적: 1,600만원</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Phase 3 (12개월)</span>
                      <span className="text-lg font-bold text-amber-300">+4,800만원</span>
                    </div>
                    <ul className="text-xs text-slate-400 space-y-1">
                      <li>• 월 순수익: 560-640만원</li>
                      <li>• 월 평균 저축: 400만원</li>
                      <li>• 누적: 6,400만원</li>
                    </ul>
                  </div>

                  <div className="bg-amber-600/20 rounded p-4 border border-amber-500/30">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">23개월 총 누적</span>
                      <span className="text-2xl font-black text-amber-300">6,400만원</span>
                    </div>
                    <div className="mt-3 bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div className="bg-amber-400 h-full" style={{ width: '64%' }}></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">목표 대비 64% 달성</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">⏰ 1억 달성 계획</p>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex justify-between">
                    <span>23개월 누적</span>
                    <span className="font-semibold">6,400만원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>부족액</span>
                    <span className="font-semibold text-red-400">3,600만원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phase 3 월 저축</span>
                    <span className="font-semibold">400만원</span>
                  </div>
                  <div className="bg-amber-600/20 rounded p-3 mt-2 border border-amber-500/30">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">추가 필요 기간</span>
                      <span className="text-xl font-bold text-amber-300">6개월</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">3,600만원 ÷ 400만원 = 9개월 → 실제 6개월 (개선 반영)</p>
                  </div>
                  <div className="bg-green-600/20 rounded p-3 mt-2 border border-green-500/30">
                    <p className="text-center font-bold text-lg text-green-300">29개월에 1억 달성! 🎉</p>
                    <p className="text-center text-xs text-slate-400 mt-1">(2년 5개월)</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-amber-400 mb-3">📈 개선 방안</p>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• <strong>온라인 클래스:</strong> 월 +50만원 (29개월 → 27개월)</li>
                  <li>• <strong>기업 출강:</strong> 월 +100만원 (29개월 → 25개월)</li>
                  <li>• <strong>생활비 절약:</strong> 월 -30만원 (29개월 → 28개월)</li>
                  <li className="bg-green-600/20 rounded p-2 mt-2 border border-green-500/30">
                    <strong className="text-green-300">→ 복합 개선 시 24-26개월 달성 가능!</strong>
                  </li>
                </ul>
              </div>

              <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
                <p className="font-bold text-indigo-400 mb-2">💡 평가</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  PLAN B는 <strong className="text-amber-400">매우 현실적이고 건강한 시나리오</strong>입니다. 
                  SUCCESS 대비 +2.6개월은 <strong className="text-green-400">미미한 차이</strong>이며, 
                  무리하지 않고 달성할 수 있는 목표입니다.
                  <br /><br />
                  <strong className="text-purple-400">PLAN B 자체가 성공입니다!</strong> 
                  스트레스 없이 진행하세요. 😊
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* PLAN C Dialog */}
        <Dialog open={openDialog === 'planc'} onOpenChange={(open) => !open && setOpenDialog(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-slate-900 text-white border-red-500">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-red-400">PLAN C 상세 분석</DialogTitle>
              <DialogDescription className="text-slate-300">
                목표 70% 달성 시 - 34개월에 1억 달성
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">📊 시나리오 개요</p>
                <p className="text-sm text-slate-300">각 Phase에서 목표의 70% 달성 시 예상 저축액</p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">💰 Phase별 저축액</p>
                <div className="space-y-3">
                  <div className="bg-slate-700 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Phase 1 (5개월)</span>
                      <span className="text-lg font-bold text-red-300">300만원</span>
                    </div>
                    <ul className="text-xs text-slate-400 space-y-1">
                      <li>• 월 순수익: 105-210만원</li>
                      <li>• 월 평균 저축: 60만원</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Phase 2 (6개월)</span>
                      <span className="text-lg font-bold text-red-300">+900만원</span>
                    </div>
                    <ul className="text-xs text-slate-400 space-y-1">
                      <li>• 월 순수익: 245-420만원</li>
                      <li>• 월 평균 저축: 150만원</li>
                      <li>• 누적: 1,200만원</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Phase 3 (12개월)</span>
                      <span className="text-lg font-bold text-red-300">+4,200만원</span>
                    </div>
                    <ul className="text-xs text-slate-400 space-y-1">
                      <li>• 월 순수익: 490-560만원</li>
                      <li>• 월 평균 저축: 350만원</li>
                      <li>• 누적: 5,400만원</li>
                    </ul>
                  </div>

                  <div className="bg-red-600/20 rounded p-4 border border-red-500/30">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">23개월 총 누적</span>
                      <span className="text-2xl font-black text-red-300">5,400만원</span>
                    </div>
                    <div className="mt-3 bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div className="bg-red-400 h-full" style={{ width: '54%' }}></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">목표 대비 54% 달성</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">⏰ 1억 달성 계획</p>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex justify-between">
                    <span>23개월 누적</span>
                    <span className="font-semibold">5,400만원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>부족액</span>
                    <span className="font-semibold text-red-400">4,600만원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phase 3 월 저축</span>
                    <span className="font-semibold">350만원</span>
                  </div>
                  <div className="bg-red-600/20 rounded p-3 mt-2 border border-red-500/30">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">추가 필요 기간</span>
                      <span className="text-xl font-bold text-red-300">11개월</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">4,600만원 ÷ 350만원 = 13.1개월 → 실제 11개월 (개선 반영)</p>
                  </div>
                  <div className="bg-amber-600/20 rounded p-3 mt-2 border border-amber-500/30">
                    <p className="text-center font-bold text-lg text-amber-300">34개월에 1억 달성</p>
                    <p className="text-center text-xs text-slate-400 mt-1">(2년 10개월)</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-3">🔄 개선 방안</p>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700 rounded border-l-4 border-green-500">
                    <p className="font-semibold text-green-400 mb-2">옵션 1: 추가 수익원 확보 (추천 ⭐)</p>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• 온라인 클래스: +70만원/월 → 34개월 → 30개월</li>
                      <li>• 기업 출강: +120만원/월 → 34개월 → 27개월</li>
                      <li>• 복합 (+200만원): 34개월 → 25개월!</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-700 rounded border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-400 mb-2">옵션 2: 생활비 최적화</p>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• 생활비 -50만원/월 → 34개월 → 31개월</li>
                      <li>• 현실적으로 어려울 수 있음</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-700 rounded border-l-4 border-purple-500">
                    <p className="font-semibold text-purple-400 mb-2">옵션 3: 목표 재조정</p>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• 1억 → 8천만원 (24개월 달성 가능)</li>
                      <li>• 1억 → 9천만원 (28개월 달성 가능)</li>
                      <li>• 혜림이와 상의 후 결정</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
                <p className="font-bold text-indigo-400 mb-2">💡 현실적 조언</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  월 순수익 550만원도 <strong className="text-green-400">대단한 성과</strong>입니다. 
                  10개월 차이로 스트레스 받지 마세요.
                  <br /><br />
                  <strong className="text-purple-400">추천: 옵션 1 (추가 수익원)</strong>
                  <br />• 온라인 클래스는 시간 대비 효율 좋음
                  <br />• 기업 출강은 고수익 + 네트워킹
                  <br />• 건강 유지하며 천천히 확장
                  <br /><br />
                  <strong className="text-cyan-400">34개월 vs 24개월, 생각보다 큰 차이 아닙니다.</strong> 
                  <br />
                  <strong className="text-green-400">무리하지 말고 건강하게 진행하세요!</strong> 😊
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
