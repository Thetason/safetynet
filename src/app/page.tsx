"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Target, BarChart3, Video, FileText, Youtube, ChevronLeft, ChevronRight, Calendar, Home, AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type PhaseType = "main" | "preopen" | "open" | "deepdive";

// Phase 2 마일스톤 섹션 컴포넌트 제거 (메인 페이지에서 inline으로 처리)
// function Phase2MilestonesSection() 제거됨

export default function HomePage() {
  const [currentView, setCurrentView] = useState<PhaseType>("main");

  const phases = [
    {
      id: "preopen" as const,
      phase: "Phase 1",
      title: "Pre-Open",
      period: "2025.11 - 2026.02",
      duration: "5개월",
      goal: "300만원/월",
      color: "indigo",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      icon: Target,
    },
    {
      id: "open" as const,
      phase: "Phase 2",
      title: "Open",
      period: "2026.03 - 2026.08",
      duration: "6개월",
      goal: "500만원/월",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      icon: Users,
    },
    {
      id: "deepdive" as const,
      phase: "Phase 3",
      title: "Deep Dive",
      period: "2026.09 부터",
      duration: "12개월+",
      goal: "1,100만원/월",
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      icon: TrendingUp,
    },
  ];

  const currentPhaseIndex = phases.findIndex(p => p.id === currentView);

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (currentView === "main") return;

      if (e.key === "ArrowLeft" && currentPhaseIndex > 0) {
        setCurrentView(phases[currentPhaseIndex - 1].id);
      } else if (e.key === "ArrowRight" && currentPhaseIndex < phases.length - 1) {
        setCurrentView(phases[currentPhaseIndex + 1].id);
      } else if (e.key === "Escape") {
        setCurrentView("main");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentView, currentPhaseIndex, phases]);

  const navigatePhase = (direction: "prev" | "next") => {
    if (direction === "prev" && currentPhaseIndex > 0) {
      setCurrentView(phases[currentPhaseIndex - 1].id);
    } else if (direction === "next" && currentPhaseIndex < phases.length - 1) {
      setCurrentView(phases[currentPhaseIndex + 1].id);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {currentView === "main" ? (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
          >
            {/* Hero Section */}
            <motion.section
              className="relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-500/10" />
              <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center space-y-6"
                >
                  <Badge className="text-base px-6 py-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                    [시선뮤직 · 세타쓴 브랜드] 2025.11 - 2027.08 로드맵
                  </Badge>
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Life Safety Net
                    </span>
                  </h1>
                </motion.div>

                {/* Visual Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-16 relative"
                >
                  <h2 className="text-2xl font-bold text-center mb-10 text-slate-800">전체 로드맵</h2>
                  <div className="flex items-center justify-center gap-4">
                    {phases.map((phase, index) => (
                      <div key={phase.id} className="flex items-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.15, type: "spring" }}
                          className="relative"
                        >
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${phase.gradient}`} />
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <p className="text-xs font-medium text-slate-600">{phase.duration}</p>
                          </div>
                        </motion.div>
                        {index < phases.length - 1 && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
                            className="w-24 h-1 bg-gradient-to-r from-slate-300 to-slate-200 origin-left"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Phase Cards */}
            <section className="max-w-7xl mx-auto px-6 py-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      className={`cursor-pointer border-2 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full
                        ${index === 0 ? 'border-indigo-300' : 'border-slate-200'}
                      `}
                      onClick={() => setCurrentView(phase.id)}
                    >
                      <div className={`h-2 bg-gradient-to-r ${phase.gradient}`} />
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant={index === 0 ? "default" : "outline"} className="text-sm">
                            {phase.phase}
                          </Badge>
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${phase.bgGradient}`}>
                            <phase.icon className={`w-5 h-5 text-${phase.color}-600`} />
                          </div>
                        </div>
                        <CardTitle className="text-2xl mb-2">{phase.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {phase.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className={`p-5 bg-gradient-to-br ${phase.bgGradient} rounded-xl text-center`}>
                          <p className="text-sm text-slate-600 mb-2">목표 월 순수익</p>
                          <p className={`text-4xl font-extrabold bg-gradient-to-r ${phase.gradient} bg-clip-text text-transparent`}>
                            {phase.goal}
                          </p>
                        </div>
                        <div className="mt-4 text-center">
                          <Button variant="ghost" className="text-sm text-slate-600 hover:text-slate-900">
                            자세히 보기 →
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Summary Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-2 border-slate-200 shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6">
                    <h2 className="text-3xl font-bold text-white text-center">핵심 요약</h2>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl"
                      >
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm text-slate-600 mb-2">총 사업 기간 (타겟)</p>
                        <p className="text-5xl font-extrabold text-indigo-600">
                          18<span className="text-2xl">개월</span>
                        </p>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl"
                      >
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <DollarSign className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm text-slate-600 mb-2">목표 저축액</p>
                        <p className="text-5xl font-extrabold text-green-600">
                          9,000<span className="text-2xl">만원</span>
                        </p>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl"
                      >
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm text-slate-600 mb-2">최종 목표 월수익</p>
                        <p className="text-5xl font-extrabold text-purple-600">
                          1,100<span className="text-2xl">만원</span>
                        </p>
                      </motion.div>
                    </div>

                    <p className="text-center text-lg text-slate-700 leading-relaxed mt-8 max-w-3xl mx-auto">
                      체계적인 단계별 실행, 강력한 브랜딩, 그리고 리스크를 헷지하는 멀티 수익원 확보.
                      <br />
                      이 세 가지 축을 기반으로 반드시 <strong className="text-indigo-600">'안정적인 고속 성장'</strong>을 만들어냅니다.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Footer */}
            <footer className="max-w-7xl mx-auto px-6 py-12 text-center border-t">
              <p className="text-slate-500 text-sm">
                Life Safety Net © 2025. 시선뮤직 · 세타쓴
              </p>
            </footer>
          </motion.div>
        ) : currentView === "preopen" ? (
          <PreOpenView onBack={() => setCurrentView("main")} onNavigate={navigatePhase} canNavigate={{ prev: false, next: true }} currentIndex={0} totalPhases={3} />
        ) : currentView === "open" ? (
          <OpenView onBack={() => setCurrentView("main")} onNavigate={navigatePhase} canNavigate={{ prev: true, next: true }} currentIndex={1} totalPhases={3} />
        ) : currentView === "deepdive" ? (
          <DeepDiveView onBack={() => setCurrentView("main")} onNavigate={navigatePhase} canNavigate={{ prev: true, next: false }} currentIndex={2} totalPhases={3} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

// Phase View 컴포넌트들
function PreOpenView({ onBack, onNavigate, canNavigate, currentIndex, totalPhases }: {
  onBack: () => void;
  onNavigate: (dir: "prev" | "next") => void;
  canNavigate: { prev: boolean; next: boolean };
  currentIndex: number;
  totalPhases: number;
}) {
  return (
    <motion.div
      key="preopen"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 bg-gradient-to-br from-indigo-500 via-blue-500 to-indigo-600 overflow-y-auto"
    >
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-white hover:bg-white/20 flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            메인으로
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPhases }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? 'bg-white w-8' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
          <span className="text-white/80 text-sm font-medium">{currentIndex + 1} / {totalPhases}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-base px-6 py-2">
            Phase 1: Foundation
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Pre-Open Phase</h1>
          <p className="text-2xl text-indigo-100 flex items-center justify-center gap-3">
            <Calendar className="w-6 h-6" />
            2025.11 - 2026.02 (5개월)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white rounded-3xl p-8 shadow-2xl space-y-6"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              5개월간 교습활동을 합니다. 유료작업실을 구해 정규 사업자등록 전까지 시장테스트 및 타겟 고객을 미리 확보하는 단계를 거칩니다. 유료작업실 임대료를 충분히 상회할 수 있도록 유튜브와 인스타그램을 통한 컨텐츠 마케팅 및 광고비 집행으로 레슨 수강생을 모집합니다.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-indigo-50 rounded-2xl">
                <span className="text-indigo-600 text-2xl flex-shrink-0">•</span>
                <p className="text-slate-700 text-lg">신뢰도 구축을 위한 브랜딩, 이미지 빌드</p>
              </div>
              <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-2xl">
                <span className="text-blue-600 text-2xl flex-shrink-0">•</span>
                <p className="text-slate-700 text-lg">유튜브, VOD 강의 제작/판매, 오프라인 및 인스타그램 광고 등 효율 좋은 플랫폼에 최대한 노출</p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl">
              <p className="text-amber-900 text-lg">
                <strong>Pre-season 전략:</strong> 얼리버드 레슨비 20만원으로 퍼널 초입 극대화
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="text-center space-y-6">
              <DollarSign className="w-20 h-20 mx-auto text-indigo-600" />
              <div>
                <p className="text-sm text-slate-600 mb-3">목표 월 순수익</p>
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="text-7xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
                >
                  300<span className="text-4xl">만원</span>
                </motion.p>
              </div>
              <div className="bg-indigo-100 p-5 rounded-2xl">
                <p className="text-base font-semibold text-indigo-800">💡 실업급여 5개월 수령</p>
                <p className="text-sm text-indigo-600 mt-2">(아버지 명의로 수강비 수령 가능)</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 중랑역 상권 분석 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl p-8 shadow-2xl mb-8"
        >
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <BarChart3 className="w-8 h-8 text-indigo-600" />
            Phase 1 시작 위치: 중랑역 상권 분석
          </h3>

          {/* 블루오션 전략 강조 */}
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-2xl p-8 mb-8">
            <div className="text-center space-y-4">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-semibold">
                🎯 전략적 위치 선정
              </div>
              <h4 className="text-3xl font-extrabold">
                중랑역 = 블루오션 지역
              </h4>
              <p className="text-lg text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                네이버 검색 기준 <strong>중랑역 인근 실용음악학원 0개</strong> 확인.
                가장 가까운 경쟁자는 상봉역 인근에 위치.
                <br />
                <strong>경쟁 제로 + 강력한 인구통계 데이터</strong>를 기반으로 한 전략적 선택.
              </p>
            </div>
          </div>

          {/* 핵심 지표 그리드 */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* 유동인구 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200"
            >
              <div className="text-center space-y-3">
                <Users className="w-12 h-12 mx-auto text-blue-600" />
                <p className="text-sm font-semibold text-slate-600">일평균 유동인구</p>
                <p className="text-4xl font-extrabold text-blue-600">51,990<span className="text-lg">명</span></p>
                <div className="flex items-center justify-center gap-2 text-xs text-blue-700">
                  <span className="bg-blue-100 px-3 py-1 rounded-full">주거 19,962명</span>
                  <span className="bg-blue-100 px-3 py-1 rounded-full">직장 8,021명</span>
                </div>
              </div>
            </motion.div>

            {/* 지하철 접근성 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200"
            >
              <div className="text-center space-y-3">
                <Target className="w-12 h-12 mx-auto text-green-600" />
                <p className="text-sm font-semibold text-slate-600">지하철 접근성</p>
                <p className="text-4xl font-extrabold text-green-600">2<span className="text-lg">개 노선</span></p>
                <div className="space-y-1 text-xs text-green-700">
                  <p className="bg-green-100 px-3 py-1 rounded-full">경의중앙선 + 경춘선</p>
                  <p className="font-semibold">일평균 10,541명 승하차</p>
                </div>
              </div>
            </motion.div>

            {/* 경쟁 환경 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200"
            >
              <div className="text-center space-y-3">
                <BarChart3 className="w-12 h-12 mx-auto text-amber-600" />
                <p className="text-sm font-semibold text-slate-600">보컬 전문 경쟁사</p>
                <p className="text-4xl font-extrabold text-amber-600">3<span className="text-lg">곳</span></p>
                <div className="text-xs text-amber-700 space-y-1">
                  <p className="bg-amber-100 px-3 py-1 rounded-full font-semibold">
                    ✓ 지리적 거리 충분
                  </p>
                  <p className="text-xs text-slate-600">상봉역/망우역 인근 분산</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 매출 성장 데이터 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-8">
            <h4 className="text-xl font-bold mb-4 text-purple-700 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              월평균 매출액 추세
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5">
                <p className="text-sm text-slate-600 mb-2">현재 월평균 매출</p>
                <p className="text-3xl font-extrabold text-purple-600">482만원</p>
                <div className="mt-3 space-y-1 text-sm">
                  <p className="text-green-600 font-semibold">📈 전월대비 +13.6%</p>
                  <p className="text-green-600 font-semibold">📈 전년동월대비 +27.9%</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5">
                <p className="text-sm text-slate-600 mb-2">주요 고객층</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">여성</span>
                    <span className="text-lg font-bold text-purple-600">60.3%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">40대</span>
                    <span className="text-lg font-bold text-purple-600">51.8%</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">
                    → 자녀 교육에 관심 많은 학부모층
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 1개월 목표: 5명 모집 */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-8">
            <div className="text-center space-y-4">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-semibold">
                🎯 Phase 1 First Milestone
              </div>
              <h4 className="text-3xl font-extrabold">
                1개월 목표: 수강생 5명 모집
              </h4>
              <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
                <div className="flex items-center justify-between text-lg">
                  <span>목표 수강생</span>
                  <span className="font-bold">5명</span>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <span>레슨비 (1인)</span>
                  <span className="font-bold">20만원</span>
                </div>
                <div className="border-t border-white/20 pt-3 flex items-center justify-between text-2xl">
                  <span className="font-semibold">월 수익</span>
                  <span className="font-extrabold">100만원</span>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <span>월 운영비</span>
                  <span className="font-bold">75만원</span>
                  <span className="text-sm opacity-75 ml-2">(월세 65만원 + 광고 10만원)</span>
                </div>
                <div className="border-t border-white/20 pt-3 flex items-center justify-between text-2xl">
                  <span className="font-semibold">순이익</span>
                  <span className="font-extrabold text-yellow-300">25만원</span>
                </div>
              </div>
              <p className="text-emerald-100 text-base max-w-3xl mx-auto">
                <strong>결론:</strong> 블루오션 지역 + 강력한 인구통계 + 낮은 경쟁 = <strong className="text-yellow-300">1개월 내 5명 모집 실현 가능</strong>
              </p>
            </div>
          </div>

          {/* 핵심 전략 요약 */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl">
              <h5 className="font-bold text-indigo-900 mb-2">✓ 유동인구 분석 우선</h5>
              <p className="text-sm text-indigo-700">
                일평균 5만+ 유동인구, 2개 지하철 노선으로 접근성 확보
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
              <h5 className="font-bold text-blue-900 mb-2">✓ 소득수준 검증</h5>
              <p className="text-sm text-blue-700">
                40대 여성 주요 고객층 (51.8%) - 자녀 교육 투자 적극적
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-xl">
              <h5 className="font-bold text-green-900 mb-2">✓ 인구통계 확인</h5>
              <p className="text-sm text-green-700">
                주거인구 19,962명 + 직장인구 8,021명 안정적 수요 기반
              </p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
              <h5 className="font-bold text-amber-900 mb-2">✓ 낮은 경쟁 강도</h5>
              <p className="text-sm text-amber-700">
                중랑역 인근 보컬 전문 경쟁사 0개, 인접 지역 3곳 (상봉역/망우역)
              </p>
            </div>
          </div>

          {/* Phase 1 마일스톤 타임라인 */}
          <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
            <h4 className="text-2xl font-bold mb-6 text-green-900 flex items-center gap-2">
              <Target className="w-7 h-7" />
              Phase 1 마일스톤 타임라인 (5개월)
            </h4>
            <p className="text-sm text-green-700 mb-6 bg-green-100 px-4 py-2 rounded-lg">
              💡 각 단계마다 명확한 목표와 체크포인트로 불확실성 최소화
            </p>

            <div className="space-y-6">
              {/* Month 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85 }}
                className="relative pl-8 border-l-4 border-green-500"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-bold text-green-900">Month 1: 최소 안전선 확보</h5>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      🛡️ 손익분기
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-green-600">✓</span>
                      <span>Week 1: 작업실 계약 + 브랜딩 + 광고 콘텐츠 제작</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-green-600">✓</span>
                      <span>Week 2-4: 광고 집행 시작 + 문의 응대 + 첫 수강생 확보</span>
                    </div>
                    <div className="mt-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg p-4">
                      <p className="font-bold mb-2">✅ 1차 마일스톤: 수강생 최소 5명 확보</p>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <p className="opacity-80">수익</p>
                          <p className="font-bold text-base">100만원</p>
                        </div>
                        <div>
                          <p className="opacity-80">운영비</p>
                          <p className="font-bold text-base">75만원</p>
                          <p className="text-xs opacity-70">(월세65+광고10)</p>
                        </div>
                        <div>
                          <p className="opacity-80">순이익</p>
                          <p className="font-bold text-base">25만원</p>
                        </div>
                      </div>
                      <p className="text-xs opacity-80 mt-2">* 일단 시작, 손해는 안 봄</p>

                      {/* Plan B/C 버튼 */}
                      <div className="mt-4 pt-4 border-t border-white/30">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                              <AlertTriangle className="w-4 h-4 mr-2" />
                              목표 미달성 시 대안 (Plan B/C)
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold">Month 1 목표 미달성 시 대안</DialogTitle>
                              <DialogDescription>
                                각 상황에 맞는 구체적인 대응 방안
                              </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-6 mt-4">
                              {/* 목표 달성 */}
                              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">✓</span>
                                  </div>
                                  <h3 className="text-xl font-bold text-green-900">목표 달성 (5명 이상)</h3>
                                </div>
                                <p className="text-green-800 font-semibold">→ Month 2로 진행</p>
                                <p className="text-sm text-green-700 mt-2">계획대로 공격적 확장 단계 진입</p>
                              </div>

                              {/* Plan B */}
                              <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">B</span>
                                  </div>
                                  <h3 className="text-xl font-bold text-amber-900">Plan B (3-4명)</h3>
                                </div>
                                <div className="space-y-3">
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                    <p className="text-sm text-slate-700">손익분기는 넘겼으나 목표 미달. 광고 효율 개선 필요.</p>
                                  </div>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-amber-900 mb-2">🎯 즉시 액션</p>
                                    <ul className="text-sm text-slate-700 space-y-1">
                                      <li>• 광고비 20만원으로 증액 (10만원 → 20만원)</li>
                                      <li>• 무료 1회 체험 레슨 이벤트 (SNS 광고)</li>
                                      <li>• 기존 수강생 추천 보상 (추천 시 1만원 할인)</li>
                                      <li>• 컨텐츠 마케팅 강화 (비포/애프터 영상, 수강 후기)</li>
                                      <li>• 오프라인 홍보 (중랑역 근처 전단지, 포스터)</li>
                                      <li>• 지역 커뮤니티 연계 (당근마켓, 네이버 카페)</li>
                                    </ul>
                                  </div>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-amber-900 mb-2">⏱️ 타임라인</p>
                                    <p className="text-sm text-slate-700">2주 내 2명 추가 확보 목표 (총 5명)</p>
                                  </div>
                                </div>
                              </div>

                              {/* Plan C */}
                              <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">C</span>
                                  </div>
                                  <h3 className="text-xl font-bold text-red-900">Plan C (2명 이하)</h3>
                                </div>
                                <div className="space-y-3">
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-red-900 mb-2">🚨 위험 신호</p>
                                    <p className="text-sm text-slate-700">시장 반응 미흡. 전략 전면 재검토 필요.</p>
                                  </div>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-red-900 mb-2">🔄 전략 재검토 옵션</p>
                                    <ul className="text-sm text-slate-700 space-y-2">
                                      <li className="p-2 bg-slate-50 rounded">
                                        <span className="font-semibold">옵션 1:</span> 타겟 변경 (20-30대 → 40-50대 주부)
                                      </li>
                                      <li className="p-2 bg-slate-50 rounded">
                                        <span className="font-semibold">옵션 2:</span> 가격 조정 (20만원 → 15만원 프로모션)
                                      </li>
                                      <li className="p-2 bg-slate-50 rounded">
                                        <span className="font-semibold">옵션 3:</span> 1개월 추가 테스트 (Month 1.5 설정)
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-red-900 mb-2">💰 손실 통제</p>
                                    <p className="text-sm text-slate-700">
                                      최대 손실: 약 50만원 (광고비 30만원 + 운영비 차액 20만원)
                                      <br />
                                      <span className="text-green-600 font-semibold">실업급여로 충당 가능 (월 180만원)</span>
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* 최종 안전망 */}
                              <div className="bg-slate-100 border-2 border-slate-300 rounded-xl p-6">
                                <p className="font-bold text-slate-900 mb-3">🛡️ 최종 안전망</p>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                  2개월 연속 Plan C 상황 발생 시 → <strong>손실 최소화 후 정리</strong>
                                  <br />• 작업실 계약 해지 (보증금 회수)
                                  <br />• 실업급여는 계속 수령 (남은 기간)
                                  <br />• 총 예상 손실: 약 100-150만원
                                  <br />• 다른 옵션 재검토 (취업, 프리랜서, 다른 사업)
                                </p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Month 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.95 }}
                className="relative pl-8 border-l-4 border-orange-500"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-2 border-orange-200">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-bold text-orange-900">Month 2: 공격적 확장</h5>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold">
                      🚀 집중 공격
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-orange-600">✓</span>
                      <span>광고비 증액 (매출의 10% 적극 활용)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-orange-600">✓</span>
                      <span>추천 보상 이벤트 (친구 추천 시 할인)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-orange-600">✓</span>
                      <span>수강 후기 콘텐츠 제작 (SNS 집중 노출)</span>
                    </div>
                    <div className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-4">
                      <p className="font-bold mb-2">🎯 2차 마일스톤: 수강생 10명 돌파</p>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <p className="opacity-80">수익</p>
                          <p className="font-bold text-base">200만원</p>
                        </div>
                        <div>
                          <p className="opacity-80">운영비</p>
                          <p className="font-bold text-base">85만원</p>
                          <p className="text-xs opacity-70">(월세65+광고20)</p>
                        </div>
                        <div>
                          <p className="opacity-80">순이익</p>
                          <p className="font-bold text-base">115만원</p>
                        </div>
                      </div>
                      <p className="text-xs opacity-80 mt-2">* 빠른 성장, 확실한 수익</p>

                      {/* Plan B/C 버튼 */}
                      <div className="mt-4 pt-4 border-t border-white/30">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                              <AlertTriangle className="w-4 h-4 mr-2" />
                              목표 미달성 시 대안 (Plan B/C)
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold">Month 2 목표 미달성 시 대안</DialogTitle>
                              <DialogDescription>
                                공격적 확장 단계의 대응 방안
                              </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-6 mt-4">
                              {/* 목표 달성 */}
                              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">✓</span>
                                  </div>
                                  <h3 className="text-xl font-bold text-green-900">목표 달성 (10명 이상)</h3>
                                </div>
                                <p className="text-green-800 font-semibold">→ Month 3로 진행 (목표 달성 집중)</p>
                                <p className="text-sm text-green-700 mt-2">순조로운 성장, 3개월 내 15명 달성 가능</p>
                              </div>

                              {/* Plan B */}
                              <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">B</span>
                                  </div>
                                  <h3 className="text-xl font-bold text-amber-900">Plan B (7-9명)</h3>
                                </div>
                                <div className="space-y-3">
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                    <p className="text-sm text-slate-700">성장은 하고 있으나 속도가 느림. 입소문 시스템 강화 필요.</p>
                                  </div>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-amber-900 mb-2">🎯 즉시 액션</p>
                                    <ul className="text-sm text-slate-700 space-y-1">
                                      <li>• 추천 보상 강화 (추천인·피추천인 각 2만원 할인)</li>
                                      <li>• 수강 후기 영상 제작 (인스타그램 릴스, 유튜브 쇼츠)</li>
                                      <li>• 그룹 레슨 얼리버드 (1:2 레슨 특가 15만원)</li>
                                    </ul>
                                  </div>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-amber-900 mb-2">⏱️ 타임라인</p>
                                    <p className="text-sm text-slate-700">Month 3에서 10명 달성 → Month 4에서 15명 목표로 조정</p>
                                  </div>
                                </div>
                              </div>

                              {/* Plan C */}
                              <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">C</span>
                                  </div>
                                  <h3 className="text-xl font-bold text-red-900">Plan C (6명 이하)</h3>
                                </div>
                                <div className="space-y-3">
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-red-900 mb-2">🚨 심각한 경고</p>
                                    <p className="text-sm text-slate-700">2개월 연속 저조. 근본적인 문제 해결 필요.</p>
                                  </div>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-red-900 mb-2">🔄 재검토 옵션</p>
                                    <ul className="text-sm text-slate-700 space-y-2">
                                      <li className="p-2 bg-slate-50 rounded">
                                        <span className="font-semibold">옵션 1:</span> Phase 1 연장 (1-2개월 추가)
                                      </li>
                                      <li className="p-2 bg-slate-50 rounded">
                                        <span className="font-semibold">옵션 2:</span> 상권 변경 검토 (다른 지역 테스트)
                                      </li>
                                      <li className="p-2 bg-slate-50 rounded">
                                        <span className="font-semibold">옵션 3:</span> 사업 축소 (Phase 2 포기, 작업실 유지)
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-red-900 mb-2">💰 손실 통제</p>
                                    <p className="text-sm text-slate-700">
                                      누적 손실: 약 100-150만원
                                      <br />
                                      <span className="text-green-600 font-semibold">실업급여로 계속 충당 가능</span>
                                      <br />
                                      <span className="text-amber-600 font-semibold mt-1 block">→ 3개월째에도 개선 없으면 정리 권장</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Month 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.05 }}
                className="relative pl-8 border-l-4 border-yellow-500"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 shadow-md border-2 border-yellow-400">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-bold text-yellow-900">Month 3: 목표 달성</h5>
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      🏆 목표 도달
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-yellow-600">✓</span>
                      <span>타임슬롯 최적화 (낮 타임 주부/프리랜서, 저녁 직장인)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-yellow-600">✓</span>
                      <span>그룹 레슨 추가 (1:2 or 1:3 선택 클래스)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-yellow-600">✓</span>
                      <span>프리미엄 가격 테스트 (신규 수강생 25만원)</span>
                    </div>
                    <div className="mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg p-4">
                      <p className="font-bold mb-2 text-lg">🎯 핵심 마일스톤: 수강생 15명 달성!</p>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <p className="opacity-80">수익</p>
                          <p className="font-bold text-lg">300만원</p>
                        </div>
                        <div>
                          <p className="opacity-80">운영비</p>
                          <p className="font-bold text-lg">95만원</p>
                          <p className="text-xs opacity-70">(월세65+광고30)</p>
                        </div>
                        <div>
                          <p className="opacity-80">순이익</p>
                          <p className="font-bold text-lg text-yellow-300">205만원</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/30">
                        <p className="text-sm font-bold text-center">✅ Phase 1 목표 순이익 달성 (목표: 300만원 수익)</p>
                      </div>

                      {/* Plan B/C 버튼 */}
                      <div className="mt-4 pt-4 border-t border-white/30">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                              <AlertTriangle className="w-4 h-4 mr-2" />
                              목표 미달성 시 대안 (Plan B/C)
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-yellow-600">Month 3 목표 미달성 시 대안 (핵심!)</DialogTitle>
                              <DialogDescription>
                                Phase 1 성패를 가르는 중요한 분기점
                              </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-6 mt-4">
                              {/* 목표 달성 */}
                              <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 shadow-lg">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">✓</span>
                                  </div>
                                  <h3 className="text-2xl font-bold text-green-900">목표 달성 (15명 이상) 🎉</h3>
                                </div>
                                <p className="text-green-800 font-bold text-lg">→ Phase 2 준비 시작!</p>
                                <div className="mt-3 bg-white rounded-lg p-4">
                                  <p className="text-sm text-green-700">
                                    ✅ Phase 1 성공적 완료
                                    <br />✅ 안정적인 수익 구조 검증
                                    <br />✅ Month 4-5에서 Phase 2 상권 선택 & 오픈 준비
                                  </p>
                                </div>
                              </div>

                              {/* Plan B */}
                              <div className="bg-amber-50 border-2 border-amber-500 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">B</span>
                                  </div>
                                  <h3 className="text-xl font-bold text-amber-900">Plan B (12-14명)</h3>
                                </div>
                                <div className="space-y-3">
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                    <p className="text-sm text-slate-700">목표에 근접했으나 미달. Phase 2 일정 조정 필요.</p>
                                  </div>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-amber-900 mb-2">🎯 즉시 액션</p>
                                    <ul className="text-sm text-slate-700 space-y-1">
                                      <li>• Month 4에서 15명 달성 집중 (추가 1개월)</li>
                                      <li>• 프리미엄 가격 본격화 (25만원 정착)</li>
                                      <li>• 대기자 우선 모집 (Phase 2 준비는 계속)</li>
                                    </ul>
                                  </div>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-amber-900 mb-2">⏱️ 타임라인</p>
                                    <p className="text-sm text-slate-700">
                                      Phase 2 오픈 1개월 연기 (2026.04 → 2026.05)
                                      <br />
                                      <span className="text-amber-700 font-semibold">* 여전히 안전한 범위</span>
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Plan C */}
                              <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 shadow-lg">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">C</span>
                                  </div>
                                  <h3 className="text-xl font-bold text-red-900">Plan C (11명 이하) ⚠️</h3>
                                </div>
                                <div className="space-y-3">
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-red-900 mb-2">🚨 심각한 상황</p>
                                    <p className="text-sm text-slate-700 font-semibold">
                                      3개월간 목표 미달 → Phase 2 전면 재검토 필요
                                    </p>
                                  </div>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-red-900 mb-2">🔄 선택지</p>
                                    <div className="space-y-3">
                                      <div className="p-3 bg-slate-50 rounded border-l-4 border-amber-500">
                                        <p className="font-semibold text-amber-900 mb-1">옵션 1: Phase 2 연기 또는 축소</p>
                                        <p className="text-xs text-slate-600">
                                          • 20평 학원 → 10평 소형 공간으로 축소
                                          <br />• 강사 채용 없이 1인 운영 집중
                                          <br />• 초기 투자 최소화 (월세 100만원 이하)
                                        </p>
                                      </div>
                                      <div className="p-3 bg-slate-50 rounded border-l-4 border-blue-500">
                                        <p className="font-semibold text-blue-900 mb-1">옵션 2: Phase 1 지속 (작업실 유지)</p>
                                        <p className="text-xs text-slate-600">
                                          • Phase 2 포기, 현재 상태 유지
                                          <br />• 11명 × 20만원 = 220만원 수익 구조
                                          <br />• 순이익 약 130-150만원 안정 운영
                                        </p>
                                      </div>
                                      <div className="p-3 bg-slate-50 rounded border-l-4 border-red-500">
                                        <p className="font-semibold text-red-900 mb-1">옵션 3: 사업 정리</p>
                                        <p className="text-xs text-slate-600">
                                          • 작업실 계약 종료 (보증금 회수)
                                          <br />• 실업급여 남은 기간 수령
                                          <br />• 다른 진로 검토 (취업, 프리랜서 등)
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="font-bold text-red-900 mb-2">💰 손실 분석</p>
                                    <p className="text-sm text-slate-700">
                                      누적 손실: 약 150-200만원
                                      <br />
                                      <span className="text-green-600 font-semibold">실업급여 총 900만원 대비 안전</span>
                                      <br />
                                      <span className="text-red-700 font-bold mt-2 block">
                                        ⚠️ 중요: 혜림이와 상의 후 결정 권장
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* 결론 */}
                              <div className="bg-indigo-50 border-2 border-indigo-400 rounded-xl p-6">
                                <p className="font-bold text-indigo-900 mb-3 text-lg">💡 결론</p>
                                <p className="text-sm text-indigo-800 leading-relaxed">
                                  Month 3는 Phase 1의 <strong>핵심 분기점</strong>입니다.
                                  <br />• 15명 달성 → Phase 2 자신있게 진행
                                  <br />• 12-14명 → Phase 2 조정하며 진행 가능
                                  <br />• 11명 이하 → 혜림이와 진지하게 논의
                                  <br /><br />
                                  <strong className="text-indigo-900">가장 중요한 것: 불안감 없이 결정할 수 있는 안전망이 있다는 점</strong>
                                </p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Month 4-5 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.15 }}
                className="relative pl-8"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">4-5</span>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 shadow-md border-2 border-indigo-300">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-bold text-indigo-900">Month 4-5: 안정화 & Phase 2 준비</h5>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold">
                      📈 다음 단계
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-indigo-600">✓</span>
                      <span>15명+ 안정적 유지 (이탈 관리, 만족도 점검)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-indigo-600">✓</span>
                      <span>대기자 명단 구축 (학원 오픈 대비 수요 확보)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-indigo-600">✓</span>
                      <span>Phase 2 상권 최종 선택 (이문1동 vs 이문2동)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-indigo-600">✓</span>
                      <span>학원 오픈 준비 (인테리어 견적, 계약, 강사 물색)</span>
                    </div>
                    <div className="mt-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg p-4">
                      <p className="font-bold mb-2">🎯 최종 상태: Phase 2 진입 준비 완료</p>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div>
                          <p className="opacity-80">수익</p>
                          <p className="font-bold text-base">300만원+</p>
                        </div>
                        <div>
                          <p className="opacity-80">운영비</p>
                          <p className="font-bold text-base">95만원</p>
                        </div>
                        <div>
                          <p className="opacity-80">순이익</p>
                          <p className="font-bold text-base text-yellow-300">205만원+</p>
                        </div>
                        <div>
                          <p className="opacity-80">대기자</p>
                          <p className="font-bold text-base">5-10명</p>
                        </div>
                      </div>
                      <p className="text-xs opacity-80 mt-2">* 안정적 운영 검증 완료, 확장 준비 완료</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 안전 장치 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35 }}
              className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-xl p-6"
            >
              <h5 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                각 단계별 안전 장치
              </h5>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-green-700 mb-2">✓ 목표 달성 시</p>
                  <p className="text-slate-600">다음 단계 진행</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-amber-700 mb-2">⚠️ 목표 70% 이하</p>
                  <p className="text-slate-600">전략 조정 (광고/가격)</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-red-700 mb-2">❌ 목표 50% 이하</p>
                  <p className="text-slate-600">전면 재검토 또는 중단</p>
                </div>
              </div>
              <p className="text-xs text-red-700 mt-4 text-center font-semibold">
                💡 "각 단계에서 멈출 수 있습니다. 손실 최소화가 1순위입니다."
              </p>
            </motion.div>
          </div>

          {/* 20대·30대 유동인구 및 소비패턴 분석 */}
          <div className="mt-8 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold mb-6 text-violet-900 flex items-center gap-2">
              <Users className="w-7 h-7" />
              20대·30대 타겟층 분석
            </h4>

            {/* 유동인구 데이터 */}
            <div className="bg-white rounded-xl p-6 mb-6">
              <h5 className="text-lg font-bold text-violet-800 mb-4">📊 유동인구 구성</h5>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-violet-50 rounded-lg">
                  <p className="text-sm text-slate-600 mb-1">20대 유동인구</p>
                  <p className="text-2xl font-extrabold text-violet-600">13,669<span className="text-sm">명/일</span></p>
                  <p className="text-xs text-violet-600 mt-1">전체의 11.0%</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-slate-600 mb-1">30대 유동인구</p>
                  <p className="text-2xl font-extrabold text-purple-600">17,256<span className="text-sm">명/일</span></p>
                  <p className="text-xs text-purple-600 mt-1">전체의 14.0%</p>
                </div>
                <div className="text-center p-4 bg-fuchsia-50 rounded-lg">
                  <p className="text-sm text-slate-600 mb-1">2030 합계</p>
                  <p className="text-2xl font-extrabold text-fuchsia-600">30,925<span className="text-sm">명/일</span></p>
                  <p className="text-xs text-fuchsia-600 mt-1">전체의 25.0%</p>
                </div>
              </div>
            </div>

            {/* 매출 기여도 분석 */}
            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-lg font-bold text-purple-800">💰 음악학원 매출 기여도</h5>
                <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  상권분석 기반 추정치
                </span>
              </div>
              <div className="space-y-4">
                {/* 20대 */}
                <div className="p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h6 className="font-bold text-violet-900">20대 층</h6>
                    <span className="text-xs bg-violet-200 text-violet-800 px-3 py-1 rounded-full font-semibold">
                      매출 비중 7.0%
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-2">💳 업소당 월평균 매출액</p>
                      <p className="text-2xl font-extrabold text-violet-700">28만원</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-2">🎯 주요 라이프스타일</p>
                      <p className="text-sm text-slate-600">게임, 건강, 힐링 관심 → SNS 콘텐츠 마케팅 유효</p>
                    </div>
                  </div>
                </div>

                {/* 30대 */}
                <div className="p-4 bg-gradient-to-r from-purple-50 to-fuchsia-50 rounded-lg border-2 border-purple-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h6 className="font-bold text-purple-900">30대 층</h6>
                      <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded font-bold">핵심타겟</span>
                    </div>
                    <span className="text-xs bg-purple-200 text-purple-800 px-3 py-1 rounded-full font-semibold">
                      매출 비중 16.7%
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-2">💳 업소당 월평균 매출액</p>
                      <p className="text-2xl font-extrabold text-purple-700">67만원</p>
                      <p className="text-xs text-green-600 font-semibold mt-1">↑ 20대 대비 2.4배</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-2">🎯 주요 라이프스타일</p>
                      <p className="text-sm text-slate-600">건강, 육아, 식도락 → 자녀 교육 연계 효과적</p>
                    </div>
                  </div>
                </div>

                {/* 2030 합산 */}
                <div className="p-4 bg-gradient-to-r from-fuchsia-100 to-pink-100 rounded-lg border-2 border-fuchsia-400">
                  <div className="flex items-center justify-between">
                    <div>
                      <h6 className="font-bold text-fuchsia-900 mb-1">20대 + 30대 합계</h6>
                      <p className="text-sm text-slate-600">전체 음악학원 매출의 <strong className="text-fuchsia-700">23.7%</strong> 차지</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-600 mb-1">월평균 매출액</p>
                      <p className="text-3xl font-extrabold text-fuchsia-700">95만원</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 전략적 인사이트 */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl p-6">
              <h5 className="text-xl font-bold mb-3">💡 2030 타겟층 공략 전략</h5>
              <div className="space-y-2 text-violet-50">
                <p className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">•</span>
                  <span><strong className="text-white">20대:</strong> 취미/자기계발 중심 접근 (게임, SNS 콘텐츠 활용)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">•</span>
                  <span><strong className="text-white">30대:</strong> 건강·육아 연계 마케팅 (스트레스 해소, 자녀 정서 발달)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">•</span>
                  <span><strong className="text-white">합계 3만명+ 유동인구:</strong> 외대·경희대·시립대 유동인구 활용 가능</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">•</span>
                  <span><strong className="text-white">소비력 검증:</strong> 음악학원 매출 비중 20대 7%, 30대 16.7% → 실수요 존재</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* What If? Scenario Analysis Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="max-w-7xl mx-auto px-6 pb-16 mt-12"
      >
        <Link href="/scenarios/phase1">
          <Button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/40 text-white text-xl py-8 rounded-2xl shadow-2xl transition-all hover:scale-105">
            <span className="text-3xl mr-3">🤔</span>
            <span className="font-bold">What If? 시나리오 분석</span>
            <span className="text-sm ml-3 opacity-80">(각 마일스톤별 의사결정 트리)</span>
          </Button>
        </Link>
      </motion.div>

      {/* Navigation Arrows */}
      {canNavigate.next && (
        <button
          onClick={() => onNavigate("next")}
          className="fixed right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all group"
        >
          <ChevronRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </motion.div>
  );
}

function OpenView({ onBack, onNavigate, canNavigate, currentIndex, totalPhases }: {
  onBack: () => void;
  onNavigate: (dir: "prev" | "next") => void;
  canNavigate: { prev: boolean; next: boolean };
  currentIndex: number;
  totalPhases: number;
}) {
  return (
    <motion.div
      key="open"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 overflow-y-auto"
    >
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-white hover:bg-white/20 flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            메인으로
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPhases }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? 'bg-white w-8' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
          <span className="text-white/80 text-sm font-medium">{currentIndex + 1} / {totalPhases}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-base px-6 py-2">
            Phase 2: Launch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Open Phase: 정규 학원 오픈</h1>
          <p className="text-2xl text-blue-100 flex items-center justify-center gap-3">
            <Calendar className="w-6 h-6" />
            2026.03 - 2026.08 (6개월 / 24주간)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-8 shadow-2xl mb-8"
        >
          <p className="text-xl text-slate-700 leading-relaxed mb-8">
            Pre-Open Phase에서 물색했던 장소에서 정식 학원을 오픈합니다. 단순 교습소가 아닌 <strong>20평 이상의 '종합 실용음악학원'</strong>으로 포지셔닝합니다.
          </p>

          <div className="bg-slate-100 p-6 rounded-2xl space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl font-bold">•</span>
              <p className="text-slate-700 text-lg"><strong>수요 타겟:</strong> 피아노, 기타, 드럼 (특히 수요가 높은 드럼)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl font-bold">•</span>
              <p className="text-slate-700 text-lg"><strong>운영 전략:</strong> 낮 타임(키즈/그룹레슨/강사) / 오후 타임(성인)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl font-bold">•</span>
              <p className="text-slate-700 text-lg"><strong>가격 정책:</strong> 키즈(15만원), 성인취미(22만원), 보컬 원장직강(25/40만원), 크루클래스(초프리미엄)</p>
            </div>
          </div>
        </motion.div>

        {/* 상권 분석 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 shadow-2xl mb-8"
        >
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <Target className="w-8 h-8 text-cyan-600" />
            오픈 장소 선정 기준 및 후보지 분석
          </h3>

          {/* 선정 기준 */}
          <div className="bg-white rounded-2xl p-8 mb-8">
            <h4 className="text-2xl font-bold mb-6 text-cyan-700">📍 선정 기준</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { num: "1", text: "음악학원 신용카드매출 기준 하위 20%의 매장이 월매출 500만원 이상인 곳", detail: null },
                { num: "2", text: "근처 아파트 세대가 1만 세대 이상인 곳", detail: null },
                { num: "3", text: "독보적인 경쟁자가 없는 블루오션", detail: null },
                { num: "4", text: "아파트단지에만 고립된 상권이 아닌 유동적인 고객확보가 가능한 곳", detail: "젊은 수요층인 20~30대는 외대, 경희대, 시립대 유동인구에서 끌어올 수 있음. 즉, 이문동 상권은 2030 및 중산층 아파트세대 모두에 접근 가능한 상권" }
              ].map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`flex items-start gap-4 p-5 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border-l-4 border-cyan-500 ${criterion.detail ? 'md:col-span-2' : ''}`}
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                    {criterion.num}
                  </span>
                  <div className="flex-1">
                    <p className="text-slate-700 font-medium">{criterion.text}</p>
                    {criterion.detail && (
                      <div className="mt-3 pl-4 border-l-2 border-cyan-300">
                        <p className="text-cyan-800 text-sm font-semibold">
                          🎓 {criterion.detail}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 현재까지 선정 후보 */}
          <div className="bg-white rounded-2xl p-8">
            <h4 className="text-2xl font-bold mb-6 text-cyan-700">🎯 현재까지 선정 후보</h4>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 이문1동 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border-2 border-indigo-200"
              >
                <h5 className="text-2xl font-bold mb-4 text-indigo-900 flex items-center gap-2">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-base">후보 1</span>
                  이문1동 (신이문역)
                </h5>
                <p className="text-xs text-slate-500 mb-4 bg-slate-50 px-2 py-1 rounded">
                  데이터 출처: 나이스비즈맵 · 피아노/음악학원 카테고리
                </p>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-xl border border-indigo-100">
                    <p className="text-sm text-slate-600 mb-1">점포 평균 매출</p>
                    <p className="text-3xl font-bold text-indigo-600">1,014<span className="text-lg">만원/월</span></p>
                    <p className="text-xs text-green-600 font-semibold mt-1">↑ 8월 1,519만원 (+21.4% 증가)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="text-xs text-slate-600 mb-1">중위 50%</p>
                      <p className="text-xl font-bold text-slate-900">964<span className="text-sm">만원</span></p>
                    </div>
                    <div className="bg-emerald-100 p-4 rounded-xl border-2 border-emerald-400">
                      <p className="text-xs text-emerald-700 mb-1">상위 20%</p>
                      <p className="text-xl font-bold text-emerald-700">1,519<span className="text-sm">만원</span></p>
                    </div>
                  </div>
                  <div className="bg-green-100 p-4 rounded-xl border-2 border-green-400">
                    <p className="text-xs text-green-800 mb-1 font-semibold">하위 20% 매출</p>
                    <p className="text-xl font-bold text-green-700">669<span className="text-sm">만원</span></p>
                    <p className="text-xs text-green-600 mt-1 font-semibold">✓ 안전 기준 충족 (500만원 이상)</p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="bg-indigo-100 p-4 rounded-xl">
                    <p className="text-xs text-indigo-700 font-semibold mb-1">핵심 고객층</p>
                    <p className="text-sm text-indigo-900">40대 남성 주도 | 40대 여성↑ 50대 남성↓</p>
                  </div>
                  <div className="bg-indigo-100 p-4 rounded-xl">
                    <p className="text-xs text-indigo-700 font-semibold mb-1">상권 특징</p>
                    <p className="text-sm text-indigo-900">주거지역 97% | 경쟁업체 5곳 (0.9%)</p>
                  </div>
                  <div className="bg-indigo-100 p-4 rounded-xl">
                    <p className="text-xs text-indigo-700 font-semibold mb-1">매출 집중 요일</p>
                    <p className="text-sm text-indigo-900">최고: 월요일 | 최저: 수요일</p>
                  </div>
                </div>

                <div className="mt-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 rounded-xl">
                  <p className="text-sm font-bold mb-1">전략적 포지션</p>
                  <p className="text-xs">안정성 중심 | 낮은 리스크 | 꾸준한 수요</p>
                </div>
              </motion.div>

              {/* 이문2동 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border-2 border-violet-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h5 className="text-2xl font-bold text-violet-900 flex items-center gap-2">
                    <span className="bg-violet-600 text-white px-3 py-1 rounded-lg text-base">후보 2</span>
                    이문2동
                  </h5>
                  <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-lg text-xs font-bold">
                    🔥 Hot
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-4 bg-slate-50 px-2 py-1 rounded">
                  데이터 출처: 나이스비즈맵 · 피아노/음악학원 카테고리
                </p>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-xl border border-violet-100">
                    <p className="text-sm text-slate-600 mb-1">점포 평균 매출</p>
                    <p className="text-3xl font-bold text-violet-600">1,543<span className="text-lg">만원/월</span></p>
                    <p className="text-xs text-green-600 font-semibold mt-1">↑ 8월 매출 +77.4% 폭등</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="text-xs text-slate-600 mb-1">중위 50%</p>
                      <p className="text-xl font-bold text-slate-900">1,493<span className="text-sm">만원</span></p>
                    </div>
                    <div className="bg-emerald-100 p-4 rounded-xl border-2 border-emerald-400">
                      <p className="text-xs text-emerald-700 mb-1 font-semibold">상위 20%</p>
                      <p className="text-xl font-bold text-emerald-700">2,669<span className="text-sm">만원</span></p>
                      <p className="text-xs text-emerald-600 mt-1">이문1동 대비 +76%</p>
                    </div>
                  </div>
                  <div className="bg-amber-100 p-4 rounded-xl border-2 border-amber-400">
                    <p className="text-xs text-amber-800 mb-1 font-semibold">하위 20% 매출</p>
                    <p className="text-xl font-bold text-amber-700">466<span className="text-sm">만원</span></p>
                    <p className="text-xs text-amber-600 mt-1">⚠️ 변동성 존재 (기준선 미달)</p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="bg-violet-100 p-4 rounded-xl">
                    <p className="text-xs text-violet-700 font-semibold mb-1">핵심 고객층</p>
                    <p className="text-sm text-violet-900">40대 여성 주도 | 40대 여성↑ 40대 남성↓</p>
                  </div>
                  <div className="bg-violet-100 p-4 rounded-xl">
                    <p className="text-xs text-violet-700 font-semibold mb-1">업종 현황</p>
                    <p className="text-sm text-violet-900">매출 증가율 1위 (+69.8%) | 호황 단계</p>
                  </div>
                  <div className="bg-violet-100 p-4 rounded-xl">
                    <p className="text-xs text-violet-700 font-semibold mb-1">고객 행동</p>
                    <p className="text-sm text-violet-900">결제단가 18.2만원 (+25%) | 509건 (+41.8%)</p>
                  </div>
                  <div className="bg-violet-100 p-4 rounded-xl">
                    <p className="text-xs text-violet-700 font-semibold mb-1">매출 집중 요일</p>
                    <p className="text-sm text-violet-900">최고: 화요일 | 최저: 일요일</p>
                  </div>
                </div>

                <div className="mt-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 rounded-xl">
                  <p className="text-sm font-bold mb-1">전략적 포지션</p>
                  <p className="text-xs">성장성 중심 | 높은 천장 | 프리미엄 시장</p>
                </div>
              </motion.div>
            </div>

            {/* 소상공인365 통합 데이터 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border-2 border-slate-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-lg font-bold text-slate-800">📊 이문동 상권 전체 개요</h5>
                <span className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full">
                  데이터 출처: 소상공인365
                </span>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl text-center">
                  <p className="text-xs text-slate-600 mb-1">월평균 매출</p>
                  <p className="text-2xl font-bold text-slate-900">391<span className="text-sm">만원</span></p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center">
                  <p className="text-xs text-slate-600 mb-1">유동인구</p>
                  <p className="text-2xl font-bold text-blue-600">15만<span className="text-sm">명/일</span></p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center">
                  <p className="text-xs text-slate-600 mb-1">주거인구</p>
                  <p className="text-2xl font-bold text-green-600">6.8만<span className="text-sm">명</span></p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center">
                  <p className="text-xs text-slate-600 mb-1">직장인구</p>
                  <p className="text-2xl font-bold text-purple-600">3.5만<span className="text-sm">명</span></p>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-3 text-center">
                * 이문1동+이문2동 통합 상권 분석 데이터
              </p>
            </motion.div>

            {/* 상세 비교 테이블 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 bg-white rounded-2xl p-6 border-2 border-slate-200 overflow-x-auto"
            >
              <h5 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-cyan-600" />
                이문1동 vs 이문2동 상세 비교
              </h5>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-300">
                    <th className="text-left py-3 px-4 font-bold text-slate-700">비교 항목</th>
                    <th className="text-center py-3 px-4 font-bold text-indigo-700 bg-indigo-50">이문1동 (안정형)</th>
                    <th className="text-center py-3 px-4 font-bold text-violet-700 bg-violet-50">이문2동 (성장형)</th>
                    <th className="text-center py-3 px-4 font-bold text-slate-600">우위</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="py-3 px-4 font-semibold">평균 매출</td>
                    <td className="text-center py-3 px-4 text-indigo-900">1,014만원</td>
                    <td className="text-center py-3 px-4 text-violet-900 font-bold">1,543만원 (+52%)</td>
                    <td className="text-center py-3 px-4">
                      <span className="bg-violet-100 text-violet-700 px-2 py-1 rounded text-xs font-bold">이문2동</span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="py-3 px-4 font-semibold">상위 20%</td>
                    <td className="text-center py-3 px-4 text-indigo-900">1,519만원</td>
                    <td className="text-center py-3 px-4 text-violet-900 font-bold">2,669만원 (+76%)</td>
                    <td className="text-center py-3 px-4">
                      <span className="bg-violet-100 text-violet-700 px-2 py-1 rounded text-xs font-bold">이문2동</span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50 bg-green-50">
                    <td className="py-3 px-4 font-semibold">하위 20% (안전성)</td>
                    <td className="text-center py-3 px-4 text-green-700 font-bold">669만원 ✓</td>
                    <td className="text-center py-3 px-4 text-amber-700">466만원 ⚠️</td>
                    <td className="text-center py-3 px-4">
                      <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-bold">이문1동</span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="py-3 px-4 font-semibold">매출 증가율</td>
                    <td className="text-center py-3 px-4 text-indigo-900">+21.4%</td>
                    <td className="text-center py-3 px-4 text-violet-900 font-bold">+77.4%</td>
                    <td className="text-center py-3 px-4">
                      <span className="bg-violet-100 text-violet-700 px-2 py-1 rounded text-xs font-bold">이문2동</span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="py-3 px-4 font-semibold">핵심 고객층</td>
                    <td className="text-center py-3 px-4 text-indigo-900 text-xs">40대 남성 주도</td>
                    <td className="text-center py-3 px-4 text-violet-900 text-xs">40대 여성 주도</td>
                    <td className="text-center py-3 px-4 text-slate-500 text-xs">-</td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="py-3 px-4 font-semibold">상권 특성</td>
                    <td className="text-center py-3 px-4 text-indigo-900 text-xs">주거 97%</td>
                    <td className="text-center py-3 px-4 text-violet-900 text-xs">호황 단계</td>
                    <td className="text-center py-3 px-4 text-slate-500 text-xs">-</td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="py-3 px-4 font-semibold">경쟁 강도</td>
                    <td className="text-center py-3 px-4 text-indigo-900">낮음 (5곳, 0.9%)</td>
                    <td className="text-center py-3 px-4 text-violet-900">-</td>
                    <td className="text-center py-3 px-4">
                      <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-bold">이문1동</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-semibold">추천 전략</td>
                    <td className="text-center py-3 px-4 text-indigo-700 text-xs font-bold">리스크 최소화</td>
                    <td className="text-center py-3 px-4 text-violet-700 text-xs font-bold">수익 극대화</td>
                    <td className="text-center py-3 px-4 text-slate-500 text-xs">상황별</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4">
                <p className="text-sm text-slate-700">
                  <strong className="text-cyan-700">💡 선택 가이드:</strong> Phase 1 성과가 좋고 적극적 확장을 원한다면 <strong className="text-violet-700">이문2동</strong>,
                  안정적 운영과 리스크 관리를 우선한다면 <strong className="text-indigo-700">이문1동</strong> 추천
                </p>
              </div>
            </motion.div>

            {/* 종합 분석 및 전략 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-2xl"
            >
              <h5 className="text-xl font-bold mb-4">💡 종합 분석 및 전략</h5>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm font-bold mb-2 text-yellow-300">이문1동 - 안정성 전략</p>
                  <ul className="text-xs space-y-1 text-cyan-50">
                    <li>✓ 하위 20% 669만원 → 리스크 최소화</li>
                    <li>✓ 주거형 상권 (97%) → 장기 고객 확보</li>
                    <li>✓ 경쟁 5곳 (0.9%) → 포화 아님</li>
                    <li>✓ 평균 1,014만원 → 안정적 운영 가능</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm font-bold mb-2 text-yellow-300">이문2동 - 성장성 전략</p>
                  <ul className="text-xs space-y-1 text-cyan-50">
                    <li>🔥 상위 20% 2,669만원 → 천장 높음</li>
                    <li>🔥 매출 증가율 +69.8% → 호황 업종</li>
                    <li>🔥 평균 1,543만원 → 이문1동 대비 +52%</li>
                    <li>⚠️ 하위 466만원 → 운영 역량 중요</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm font-bold mb-2 text-white">🎯 최종 결론</p>
                <p className="text-xs text-cyan-50 leading-relaxed">
                  <strong className="text-white">Phase 1 성과에 따라 선택:</strong><br/>
                  • Phase 1에서 안정적 성장 → 이문2동 (높은 수익 목표)<br/>
                  • Phase 1에서 보수적 접근 필요 → 이문1동 (낮은 리스크)<br/>
                  • 두 후보지 모두 15만 유동인구 + 1만 세대 아파트 단지 인접 ✓
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Phase 2 마일스톤 타임라인 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-2xl border-2 border-blue-200"
        >
          <h4 className="text-2xl font-bold mb-6 text-blue-900 flex items-center gap-2">
            <Target className="w-7 h-7" />
            Phase 2 마일스톤 타임라인 (회원수 기반)
          </h4>
          <p className="text-sm text-blue-700 mb-6 bg-blue-100 px-4 py-2 rounded-lg">
            💡 4개월 만에 순수익 500만원 달성 목표! (직강 점진적 증가 + 강사 클래스 확장)
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* M1 */}
            <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h5 className="font-bold text-blue-900">Month 1: 총 35명</h5>
                  <p className="text-xs text-slate-600">직강 15명 + 강사 20명</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 mb-3">
                <p className="text-sm font-bold text-blue-900">순수익: ~350만원</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    미달성 시 Plan B/C
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Month 1 목표 미달 대응 전략</DialogTitle>
                    <DialogDescription>35명 미달 시 단계별 대응 방안</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">B</span>
                        </div>
                        <h3 className="text-xl font-bold text-amber-900">Plan B (28-34명)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-amber-900 mb-2">📊 상황 분석</p>
                          <p className="text-sm text-slate-700">학원 오픈 초기 단계. 강사 클래스 홍보 강화 필요</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-amber-900 mb-2">🎯 즉시 액션</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• 강사별 프로모션 진행 (첫 달 20% 할인)</li>
                            <li>• 무료 체험 레슨 주 2-3회 진행</li>
                            <li>• 지역 마케팅 집중 (아파트 단지)</li>
                            <li>• 강사 소개 영상 SNS 홍보</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-amber-900 mb-2">⏱️ 목표</p>
                          <p className="text-sm text-slate-700">1개월 내 35명 달성</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">C</span>
                        </div>
                        <h3 className="text-xl font-bold text-red-900">Plan C (28명 미만)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-red-900 mb-2">🚨 위험 신호</p>
                          <p className="text-sm text-slate-700">시장 반응 미흡. 전략 전면 재검토</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-red-900 mb-2">🔄 전략 재검토</p>
                          <ul className="text-sm text-slate-700 space-y-2">
                            <li className="p-2 bg-slate-50 rounded">
                              <span className="font-semibold">옵션 1:</span> 강사 재배치 (잘되는 파트 집중)
                            </li>
                            <li className="p-2 bg-slate-50 rounded">
                              <span className="font-semibold">옵션 2:</span> 가격 정책 조정 (프로모션 연장)
                            </li>
                            <li className="p-2 bg-slate-50 rounded">
                              <span className="font-semibold">옵션 3:</span> 타겟층 확대 (성인 야간 클래스)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* M2 */}
            <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-cyan-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h5 className="font-bold text-cyan-900">Month 2: 총 40명</h5>
                  <p className="text-xs text-slate-600">직강 15명 + 강사 25명</p>
                </div>
              </div>
              <div className="bg-cyan-50 rounded-lg p-3 mb-3">
                <p className="text-sm font-bold text-cyan-900">순수익: ~400만원</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    미달성 시 Plan B/C
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Month 2 목표 미달 대응 전략</DialogTitle>
                    <DialogDescription>40명 미달 시 단계별 대응 방안</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">B</span>
                        </div>
                        <h3 className="text-xl font-bold text-amber-900">Plan B (35-39명)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-amber-900 mb-2">📊 상황 분석</p>
                          <p className="text-sm text-slate-700">성장세 유지 중. 조금만 더 집중하면 목표 달성 가능</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-amber-900 mb-2">🎯 강화 전략</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• 추천 보상 2배 증액 (각 3만원)</li>
                            <li>• 그룹 레슨 특가 프로모션</li>
                            <li>• 수강 후기 이벤트 진행</li>
                            <li>• 키즈 부모 커뮤니티 공략</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-amber-900 mb-2">⏱️ 목표</p>
                          <p className="text-sm text-slate-700">1-2주 내 40명 돌파</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">C</span>
                        </div>
                        <h3 className="text-xl font-bold text-red-900">Plan C (35명 미만)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-red-900 mb-2">🚨 성장 정체</p>
                          <p className="text-sm text-slate-700">회원 증가 둔화. 강사 실적 점검 필요</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-red-900 mb-2">🔄 개선 방안</p>
                          <ul className="text-sm text-slate-700 space-y-2">
                            <li className="p-2 bg-slate-50 rounded">
                              <span className="font-semibold">옵션 1:</span> 강사별 실적 분석 후 지원 강화
                            </li>
                            <li className="p-2 bg-slate-50 rounded">
                              <span className="font-semibold">옵션 2:</span> 내 직강 비중 일시 증가 검토
                            </li>
                            <li className="p-2 bg-slate-50 rounded">
                              <span className="font-semibold">옵션 3:</span> 새로운 수익원 탐색 (앙상블 클래스 등)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* M3 */}
            <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-teal-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h5 className="font-bold text-teal-900">Month 3: 총 45명</h5>
                  <p className="text-xs text-slate-600">직강 18명 + 강사 27명</p>
                </div>
              </div>
              <div className="bg-teal-50 rounded-lg p-3 mb-3">
                <p className="text-sm font-bold text-teal-900">순수익: ~450만원</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    미달성 시 Plan B/C
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Month 3 목표 미달 대응 전략</DialogTitle>
                    <DialogDescription>45명 미달 시 단계별 대응 방안</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">B</span>
                        </div>
                        <h3 className="text-xl font-bold text-amber-900">Plan B (40-44명)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-amber-900 mb-2">📊 상황 분석</p>
                          <p className="text-sm text-slate-700">목표에 근접. Month 4 목표 달성을 위한 마지막 스퍼트</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-amber-900 mb-2">🎯 집중 전략</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• 직강 비중 즉시 증가 (18명 확보)</li>
                            <li>• 강사별 인센티브 제공</li>
                            <li>• 집중 모집 기간 운영 (2주)</li>
                            <li>• 기존 회원 만족도 관리 강화</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-amber-900 mb-2">⏱️ 목표</p>
                          <p className="text-sm text-slate-700">Month 4에 50명 달성 준비</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">C</span>
                        </div>
                        <h3 className="text-xl font-bold text-red-900">Plan C (40명 미만)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-red-900 mb-2">🚨 목표 달성 불투명</p>
                          <p className="text-sm text-slate-700">Month 4 목표 달성 어려움. 현실적 재조정 필요</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-red-900 mb-2">🔄 목표 재설정</p>
                          <ul className="text-sm text-slate-700 space-y-2">
                            <li className="p-2 bg-slate-50 rounded">
                              <span className="font-semibold">옵션 1:</span> Month 5-6으로 목표 시점 연기
                            </li>
                            <li className="p-2 bg-slate-50 rounded">
                              <span className="font-semibold">옵션 2:</span> 목표 순수익 450만원으로 조정
                            </li>
                            <li className="p-2 bg-slate-50 rounded">
                              <span className="font-semibold">옵션 3:</span> 강사진 재편성 (실적 기반)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* M4 - 목표 달성! */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-5 shadow-lg border-2 border-emerald-400">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h5 className="font-bold text-emerald-900">Month 4: 총 50명</h5>
                  <p className="text-xs text-slate-600">직강 18명 + 강사 32명</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg p-3 mb-3">
                <p className="text-sm font-bold">🎉 순수익: 500만원 달성!</p>
                <p className="text-xs opacity-90 mt-1">4개월 만에 목표 달성</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full text-xs border-emerald-300">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    미달성 시 Plan B/C
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Month 4 목표 미달 대응 전략</DialogTitle>
                    <DialogDescription>50명 미달 시 단계별 대응 방안 (핵심 목표 시점)</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">B</span>
                        </div>
                        <h3 className="text-xl font-bold text-amber-900">Plan B (45-49명)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-amber-900 mb-2">📊 상황 분석</p>
                          <p className="text-sm text-slate-700">거의 달성. Month 5-6에 안정적으로 목표 달성 가능</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-amber-900 mb-2">🎯 안정화 전략</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• Month 5 목표를 50명으로 재설정</li>
                            <li>• 기존 회원 이탈 방지에 집중</li>
                            <li>• 직강 20명 확보로 수익 보강</li>
                            <li>• 강사 클래스 품질 관리 강화</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-amber-900 mb-2">💰 예상 수익</p>
                          <p className="text-sm text-slate-700">현재 450-480만원대 유지 가능</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">C</span>
                        </div>
                        <h3 className="text-xl font-bold text-red-900">Plan C (45명 미만)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-red-900 mb-2">🚨 전면 재검토 필요</p>
                          <p className="text-sm text-slate-700">성장 목표 재설정 및 운영 방식 전환 검토</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-red-900 mb-2">🔄 전환 옵션</p>
                          <ul className="text-sm text-slate-700 space-y-2">
                            <li className="p-2 bg-slate-50 rounded">
                              <span className="font-semibold">옵션 1:</span> 강사진 대폭 재편 또는 축소
                            </li>
                            <li className="p-2 bg-slate-50 rounded">
                              <span className="font-semibold">옵션 2:</span> 직강 중심 운영으로 전환 (안정적 400만원)
                            </li>
                            <li className="p-2 bg-slate-50 rounded">
                              <span className="font-semibold">옵션 3:</span> 틈새 시장 특화 (성인/직장인 전문 등)
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-red-900 mb-2">💡 현실적 판단</p>
                          <p className="text-sm text-slate-700">
                            400만원대 순수익도 충분히 좋은 성과. 무리한 확장보다 안정적 운영 우선
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* M5 */}
            <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-indigo-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                <div>
                  <h5 className="font-bold text-indigo-900">Month 5: 총 55명</h5>
                  <p className="text-xs text-slate-600">직강 20명 + 강사 35명 (안정화)</p>
                </div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-3">
                <p className="text-sm font-bold text-indigo-900">순수익: ~550만원</p>
              </div>
            </div>

            {/* M6 */}
            <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">6</span>
                </div>
                <div>
                  <h5 className="font-bold text-purple-900">Month 6: 총 60명</h5>
                  <p className="text-xs text-slate-600">직강 20명 + 강사 40명 (여유)</p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <p className="text-sm font-bold text-purple-900">순수익: ~600만원</p>
                <p className="text-xs text-slate-600 mt-1">→ Phase 3 준비</p>
              </div>
            </div>
          </div>

          {/* 핵심 전략 요약 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 }}
            className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-6"
          >
            <h5 className="text-xl font-bold mb-4">💡 Phase 2 핵심 전략</h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm font-bold mb-2 text-cyan-100">내 시간 최적화</p>
                <ul className="text-xs space-y-1 text-white/90">
                  <li>✓ 직강 15명으로 고정 (375만원)</li>
                  <li>✓ 나머지 시간은 운영/관리에 집중</li>
                  <li>✓ 강사 관리 및 품질 유지</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm font-bold mb-2 text-cyan-100">강사 클래스 확장</p>
                <ul className="text-xs space-y-1 text-white/90">
                  <li>✓ 각 악기별 최소 5명씩 확보</li>
                  <li>✓ 강사 실적 모니터링</li>
                  <li>✓ 35명 목표로 점진적 확장</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 수익 구조 요약 - 컴팩트 버전 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">💰 수익 구조 요약</h3>
            <div className="text-right">
              <p className="text-xs text-slate-500">최종 목표</p>
              <p className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">500만원</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* 내 직강 */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">직</span>
                </div>
                <div>
                  <p className="text-xs text-slate-600">내 직강 보컬</p>
                  <p className="text-sm font-bold text-indigo-900">18명 × 25만원</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-indigo-200">
                <p className="text-2xl font-bold text-indigo-600">450만원</p>
                <p className="text-xs text-slate-500 mt-1">100% 수익</p>
              </div>
            </div>

            {/* 강사 클래스 */}
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-4 border border-cyan-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">강</span>
                </div>
                <div>
                  <p className="text-xs text-slate-600">강사 클래스</p>
                  <p className="text-sm font-bold text-cyan-900">32명 (드럼/기타/피아노/키즈)</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-cyan-200">
                <p className="text-2xl font-bold text-cyan-600">297만원</p>
                <p className="text-xs text-slate-500 mt-1">5:5 분배 후</p>
              </div>
            </div>

            {/* 고정비 */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-slate-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">-</span>
                </div>
                <div>
                  <p className="text-xs text-slate-600">월 고정비</p>
                  <p className="text-sm font-bold text-slate-900">월세 + 광고 + 기타</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200">
                <p className="text-2xl font-bold text-slate-600">-200만원</p>
                <p className="text-xs text-slate-500 mt-1">운영비 차감</p>
              </div>
            </div>
          </div>

          {/* 계산식 */}
          <div className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 text-white">
            <div className="flex items-center justify-center gap-4 text-sm font-bold">
              <span>450만원</span>
              <span className="opacity-70">+</span>
              <span>297만원</span>
              <span className="opacity-70">-</span>
              <span>200만원</span>
              <span className="opacity-70">=</span>
              <span className="text-2xl text-yellow-300">547만원</span>
              <span className="text-xs opacity-80">(Month 4 목표 달성)</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* What If Scenario Button for Phase 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto px-6 pb-16 mt-12"
      >
        <Link href="/scenarios/phase2" className="block mb-4">
          <Button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/40 text-white text-lg py-6 rounded-2xl shadow-2xl transition-all hover:scale-105">
            <span className="text-2xl mr-3">📊</span>
            <span className="font-bold">Phase 2 시나리오</span>
          </Button>
        </Link>
        <Link href="/savings-simulator" className="block">
          <Button className="w-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 backdrop-blur-md border-2 border-green-400/40 text-white text-xl py-8 rounded-2xl shadow-2xl transition-all hover:scale-105">
            <span className="text-3xl mr-3">💰</span>
            <span className="font-bold">2년 내 1억 저축 시뮬레이션</span>
            <span className="text-sm ml-3 opacity-80">(생활비 100만원 기준)</span>
          </Button>
        </Link>
      </motion.div>

      {/* Navigation Arrows */}
      {canNavigate.prev && (
        <button
          onClick={() => onNavigate("prev")}
          className="fixed left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all group"
        >
          <ChevronLeft className="w-8 h-8 text-white group-hover:-translate-x-1 transition-transform" />
        </button>
      )}
      {canNavigate.next && (
        <button
          onClick={() => onNavigate("next")}
          className="fixed right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all group"
        >
          <ChevronRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </motion.div>
  );
}

function DeepDiveView({ onBack, onNavigate, canNavigate, currentIndex, totalPhases }: {
  onBack: () => void;
  onNavigate: (dir: "prev" | "next") => void;
  canNavigate: { prev: boolean; next: boolean };
  currentIndex: number;
  totalPhases: number;
}) {
  return (
    <motion.div
      key="deepdive"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 overflow-y-auto"
    >
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-white hover:bg-white/20 flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            메인으로
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPhases }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? 'bg-white w-8' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
          <span className="text-white/80 text-sm font-medium">{currentIndex + 1} / {totalPhases}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-base px-6 py-2">
            Phase 3: Scaling
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Deep Dive Main Phase</h1>
          <p className="text-2xl text-purple-100">상승 궤도 · 2026.09 부터</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl mb-8 text-center"
        >
          <p className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto">
            컨텐츠 마케팅과 찐팬유저들이 생겨나고 내 브랜드의 <strong className="text-purple-600 text-2xl">코어층이 100명 이상 구축</strong> 됐을 성숙기의 시작입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-2xl space-y-8"
          >
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-purple-600" />
              수익 모델 및 성장 지표
            </h3>
            <div className="space-y-4">
              {[
                { title: "코어층 100명+ 구축", desc: "'찐팬' 유저 확보로 브랜드 성숙기 진입" },
                { title: "업계 평균 비교", desc: "보통의 구독자 1~3만, 하루 6타임, 주 5일 운영 시 750만원. (BM 고도화 시 1,000만원 이상 다수)" },
                { title: "기본 목표", desc: "코어멤버 확보로 월 700만원 + 강사 클래스 매출 (목표 마진 1천만원)" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-purple-50 rounded-2xl"
                >
                  <span className="text-purple-600 text-xl font-bold flex-shrink-0">•</span>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{item.title}</p>
                    <p className="text-slate-600 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-100 p-6 rounded-2xl border-2 border-purple-300 text-center">
                <p className="text-sm text-purple-700 mb-2">보컬 수강생 직강</p>
                <p className="text-4xl font-bold text-purple-900">20명</p>
                <p className="text-2xl font-bold text-purple-600 mt-1">500만원</p>
              </div>
              <div className="bg-pink-100 p-6 rounded-2xl border-2 border-pink-300 text-center">
                <p className="text-sm text-pink-700 mb-2">강사 클래스 마진</p>
                <p className="text-lg font-semibold text-pink-900">(보컬+기타+피아노+드럼)</p>
                <p className="text-3xl font-bold text-pink-900">도합 60명</p>
                <p className="text-xs text-pink-700 mt-1">1320만원 / 강사료 주고나서</p>
                <p className="text-2xl font-bold text-pink-600 mt-1">마진 600만원</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col justify-center"
          >
            <div className="text-center space-y-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <DollarSign className="w-12 h-12 text-white" />
              </div>
              <div>
                <p className="text-base text-slate-600 mb-4">목표 월 순수익 (마진)</p>
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="text-8xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  1,100<span className="text-5xl">만원</span>
                </motion.p>
              </div>
              <div className="bg-purple-50 p-5 rounded-2xl">
                <p className="text-slate-600 text-lg">
                  (보컬 직강 500만 + 강사 마진 600만)
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Phase 3 마일스톤 타임라인 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-2xl border-2 border-purple-200 mb-8"
        >
          <h4 className="text-2xl font-bold mb-6 text-purple-900 flex items-center gap-2">
            <Target className="w-7 h-7" />
            Phase 3 주요 마일스톤
          </h4>
          <p className="text-sm text-purple-700 mb-6 bg-purple-100 px-4 py-2 rounded-lg">
            💡 확장과 안정화를 통한 월 675만원 순수익 달성 (M12 기준)
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* M1-2: 55명 달성 */}
            <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">1-2</span>
                </div>
                <div>
                  <h5 className="font-bold text-purple-900">Month 1-2: 안정화 및 55명 달성</h5>
                  <p className="text-xs text-slate-600">직강 22명 + 강사 33명</p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 mb-3">
                <p className="text-sm font-bold text-purple-900">순수익: ~530만원</p>
                <p className="text-xs text-slate-600 mt-1">월 저축: 약 430만원</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    미달성 시 Plan B/C
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>M1-2 목표 미달 대응 전략</DialogTitle>
                    <DialogDescription>55명 미달 시 대응 방안</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    {/* SUCCESS 시나리오 */}
                    <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">✓</span>
                        </div>
                        <h3 className="text-xl font-bold text-green-900">목표 달성 (55명 이상)</h3>
                      </div>
                      <p className="text-green-800 font-semibold">→ 직강 22명 + 강사 33명</p>
                      <p className="text-sm text-green-700 mt-2">순수익 530만원. Phase 2에서 안정적 전환. 26개월 내 1억 달성 가능성 높음</p>
                    </div>

                    {/* Plan B */}
                    <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">B</span>
                        </div>
                        <h3 className="text-xl font-bold text-amber-900">Plan B (44-54명, 목표의 80-98%)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                          <p className="text-sm text-slate-700">Phase 2 종료 후 성장 둔화. 직강 20명 + 강사 30명 = 총 50명</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">🎯 즉시 액션 (1개월 내)</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>마케팅 강화:</strong> 광고비 20만원 추가 투입</li>
                            <li>• <strong>신규 프로그램:</strong> 그룹 레슨, 앙상블 클래스 런칭</li>
                            <li>• <strong>강사 확보:</strong> 3번째 강사 채용하여 수용 인원 ↑</li>
                            <li>• <strong>추천 이벤트:</strong> 기존 회원 추천 시 양쪽 모두 2만원 할인</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">💰 재무 영향</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>순수익:</strong> 500만원 (목표 530만원 대비 -30만원)</li>
                            <li>• <strong>월 저축:</strong> 400만원</li>
                            <li>• <strong>M3 목표 조정:</strong> 62명 → 58명</li>
                            <li className="text-amber-600 font-semibold pt-2">→ 1억 달성: 26개월 → 28개월 (+2개월)</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">📈 회복 전략</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>3개월 집중:</strong> M3까지 회원 확보에 집중</li>
                            <li>• <strong>온라인 클래스:</strong> 주 2회, 월 +30만원</li>
                            <li>• <strong>기업 출강:</strong> 1곳 확보, 월 +50만원</li>
                            <li className="text-green-600 font-semibold pt-2">→ 28개월 → 27개월로 단축 가능</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Plan C */}
                    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">C</span>
                        </div>
                        <h3 className="text-xl font-bold text-red-900">Plan C (44명 미만, 목표의 70% 미만)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">🚨 심각한 경고</p>
                          <p className="text-sm text-slate-700">
                            Phase 2에서 Phase 3로 전환 실패. 회원 43명 이하.<br/>
                            <strong className="text-red-600">Phase 3 확장 계획 전면 재검토 필요</strong>
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">💰 재무 현실</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>현재 수준:</strong> 43명 (직강 18명 + 강사 25명)</li>
                            <li>• <strong>순수익:</strong> ~430만원/월</li>
                            <li>• <strong>월 저축:</strong> 330만원</li>
                            <li className="text-red-600 font-semibold pt-2">→ 1억 달성: 약 30개월 (+4개월 지연)</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">🔄 전략 재검토 옵션</p>
                          <div className="space-y-3">
                            <div className="p-3 bg-slate-50 rounded border-l-4 border-amber-500">
                              <p className="font-semibold text-amber-900 mb-1">옵션 1: Phase 2 연장 (추천 ⭐)</p>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                • Phase 3 확장 포기, Phase 2 수준(550만원) 안정적 유지<br/>
                                • 월 저축 450만원 × 23개월 = <strong>1억 달성</strong><br/>
                                • 스트레스 없이 안정적 운영 + 건강 유지<br/>
                                • 무리한 확장 없이도 목표 달성 가능
                              </p>
                            </div>
                            <div className="p-3 bg-slate-50 rounded border-l-4 border-blue-500">
                              <p className="font-semibold text-blue-900 mb-1">옵션 2: 채용 재시도 (M3까지)</p>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                • 채용 조건 대폭 개선 (급여 10-15% 인상, 복지 강화)<br/>
                                • 헤드헌팅 회사 활용 (비용 발생)<br/>
                                • M3까지 2명 확보 목표<br/>
                                • 실패 시 옵션 1 또는 3으로 전환
                              </p>
                            </div>
                            <div className="p-3 bg-slate-50 rounded border-l-4 border-purple-500">
                              <p className="font-semibold text-purple-900 mb-1">옵션 3: 다른 수익원 확보</p>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                • 온라인 클래스 집중 (주 3-4회, 월 +100만원 목표)<br/>
                                • 기업 출강 확대 (2-3곳, 월 +150-200만원)<br/>
                                • 프로듀싱/믹싱 서비스 (월 +50만원)<br/>
                                • <strong>강사 확장 없이 수익 증대 → 월 700만원 달성 가능</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">⏱️ 결정 타임라인</p>
                          <p className="text-sm text-slate-700">
                            • M2 종료 시점: 최종 결정<br/>
                            • M3 진입 전: 선택한 옵션 실행<br/>
                            • 늦어도 M3까지는 방향 확정 필요
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 최종 조언 */}
                    <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-6">
                      <p className="font-bold text-indigo-900 mb-3">💡 현실적 조언</p>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        채용 실패가 꼭 나쁜 것은 아닙니다. <strong className="text-indigo-600">Phase 2 수준(550만원)도 충분히 훌륭한 성과</strong>입니다.
                        <br/><br/>
                        <strong>옵션 1 (Phase 2 연장)</strong>을 추천합니다:<br/>
                        • 안정적 운영으로 23개월 내 1억 달성 가능<br/>
                        • 건강과 여유 유지하며 목표 달성<br/>
                        • 무리한 확장 리스크 회피<br/>
                        <br/>
                        <strong className="text-green-600">1-2개월 차이는 크지 않습니다. 무리하지 마세요! 😊</strong>
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* M3: 62명 달성 */}
            <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-pink-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h5 className="font-bold text-pink-900">Month 3: 총 62명 달성</h5>
                  <p className="text-xs text-slate-600">직강 24명 + 강사 38명</p>
                </div>
              </div>
              <div className="bg-pink-50 rounded-lg p-3 mb-3">
                <p className="text-sm font-bold text-pink-900">순수익: ~580만원</p>
                <p className="text-xs text-slate-600 mt-1">월 저축: 약 480만원</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    미달성 시 Plan B/C
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>M3 목표 미달 대응 전략</DialogTitle>
                    <DialogDescription>62명 미달 시 대응 방안</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    {/* SUCCESS 시나리오 */}
                    <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">✓</span>
                        </div>
                        <h3 className="text-xl font-bold text-green-900">목표 달성 (70명 이상)</h3>
                      </div>
                      <p className="text-green-800 font-semibold">→ 순수익 700만원 달성, M6 안정화 단계 진행</p>
                      <p className="text-sm text-green-700 mt-2">
                        24개월 내 1억 저축 가능. 앙상블 클래스 추가 수익으로 25-27개월 단축 가능
                      </p>
                    </div>

                    {/* Plan B */}
                    <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">B</span>
                        </div>
                        <h3 className="text-xl font-bold text-amber-900">Plan B (62-69명)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                          <p className="text-sm text-slate-700">
                            목표 70명의 <strong>88-98% 달성</strong>. 성장 추세는 유지 중이나 약간의 조정 필요.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">💰 재무 상황</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>순수익:</strong> 약 650만원/월</li>
                            <li>• <strong>생활비:</strong> 100만원 (초절약)</li>
                            <li>• <strong>가용 저축:</strong> 550만원/월</li>
                            <li>• <strong>실제 저축:</strong> 400만원/월 (여유금 150만원)</li>
                            <li className="text-amber-600 font-semibold pt-2">→ 1억 달성: 27개월 (+3개월)</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">🎯 즉시 액션 (1개월 내)</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>신규 모집 강화:</strong> 무료 체험 2주 프로모션</li>
                            <li>• <strong>이탈 방지:</strong> 기존 회원 만족도 조사</li>
                            <li>• <strong>앙상블 론칭:</strong> 주 1-2회, 5-7팀 (월 +50만원)</li>
                            <li>• <strong>온라인 클래스:</strong> 주 2회 시범 운영 (월 +30만원)</li>
                            <li>• <strong>직강 시간 증가:</strong> 주 1-2타임 추가 (월 +20-40만원)</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">📈 회복 전략</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>악기 판매 수수료:</strong> 월 +20만원</li>
                            <li>• <strong>기업 출강 1곳 확보:</strong> 월 +50-80만원</li>
                            <li>• <strong>소개 이벤트:</strong> 1명당 3만원 할인 (신규/기존)</li>
                            <li>• <strong>SNS 마케팅 강화:</strong> 학원 후기/영상 콘텐츠</li>
                            <li className="text-green-600 font-semibold pt-2">
                              → 추가 수익 확보 시 월 750만원 → 27개월 → <strong>25개월로 단축!</strong>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">⏱️ 타임라인</p>
                          <p className="text-sm text-slate-700">
                            • Week 1-2: 앙상블/온라인 시범 운영<br/>
                            • Week 3-4: 신규 모집 프로모션<br/>
                            • M4-5: 추가 수익원 안정화<br/>
                            • M6: 70명 복구 또는 대체 수익으로 목표 달성
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Plan C */}
                    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">C</span>
                        </div>
                        <h3 className="text-xl font-bold text-red-900">Plan C (62명 미만)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">🚨 상황 분석</p>
                          <p className="text-sm text-slate-700">
                            Phase 3 확장 효과 미흡. 원인 분석 필요.<br/>
                            <strong className="text-red-600">강사 실적, 마케팅, 이탈률 전반 점검</strong>
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">💰 재무 현실</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>순수익:</strong> 약 600만원/월 (목표 대비 -100만원)</li>
                            <li>• <strong>생활비:</strong> 100만원</li>
                            <li>• <strong>가용 저축:</strong> 500만원/월</li>
                            <li>• <strong>실제 저축:</strong> 350만원/월 (여유금 150만원)</li>
                            <li className="text-red-600 font-semibold pt-2">→ 1억 달성: 29개월 (+5개월)</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">🔍 원인 진단</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>강사 실적 점검:</strong> 파트별 회원 수 분석</li>
                            <li>• <strong>마케팅 효율:</strong> 광고 대비 전환율 측정</li>
                            <li>• <strong>이탈률 분석:</strong> 최근 3개월 이탈 사유</li>
                            <li>• <strong>경쟁사 변화:</strong> 신규 학원 오픈 여부</li>
                            <li>• <strong>가격 경쟁력:</strong> 주변 학원 가격 비교</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">🔄 전략 재검토 옵션</p>
                          <div className="space-y-3">
                            <div className="p-3 bg-slate-50 rounded border-l-4 border-amber-500">
                              <p className="font-semibold text-amber-900 mb-1">옵션 1: 시간 연장 수용</p>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                • 29개월 (2.4년) 목표로 재설정<br/>
                                • 안정적으로 운영하며 꾸준히 저축<br/>
                                • 건강과 삶의 질 유지<br/>
                                • <strong>5개월 차이는 크지 않음. 스트레스 줄이기</strong>
                              </p>
                            </div>
                            <div className="p-3 bg-slate-50 rounded border-l-4 border-blue-500">
                              <p className="font-semibold text-blue-900 mb-1">옵션 2: 추가 수익원 확보 (추천 ⭐)</p>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                • <strong>온라인 클래스:</strong> 주 3회, 월 +50만원 목표<br/>
                                • <strong>기업 출강:</strong> 2곳, 월 +100-150만원<br/>
                                • <strong>프로듀싱/믹싱:</strong> 부업, 월 +50만원<br/>
                                • <strong>유튜브/블로그:</strong> 장기 투자, 6개월 후 수익화<br/>
                                • → <strong>총 수익 800만원 달성 → 25개월로 단축!</strong>
                              </p>
                            </div>
                            <div className="p-3 bg-slate-50 rounded border-l-4 border-purple-500">
                              <p className="font-semibold text-purple-900 mb-1">옵션 3: 목표 하향 조정</p>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                • 1억 → <strong>8천만원</strong>으로 조정<br/>
                                • 24개월 달성 가능 (여유 확보)<br/>
                                • 혜림이와 상의 필요<br/>
                                • 차액 2천만원은 이후 1-2년 내 보충
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">⏱️ 결정 타임라인</p>
                          <p className="text-sm text-slate-700">
                            • M4 시작: 원인 진단 완료<br/>
                            • M5 진입 전: 선택한 옵션 실행<br/>
                            • M6: 개선 효과 측정 및 최종 방향 확정
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 최종 조언 */}
                    <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-6">
                      <p className="font-bold text-indigo-900 mb-3">💡 현실적 조언</p>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        현재 순수익 600만원도 <strong className="text-indigo-600">충분히 훌륭한 성과</strong>입니다.
                        무리하게 확장하기보다는 <strong>안정적 운영 + 추가 수익원</strong> 병행을 추천합니다.
                        <br/><br/>
                        <strong>옵션 2 (추가 수익원)</strong>를 추천합니다:<br/>
                        • 온라인/출강은 시간 대비 효율 좋음<br/>
                        • 기업 출강은 고수익 + 네트워킹<br/>
                        • 건강 유지하며 천천히 확장<br/>
                        <br/>
                        <strong className="text-green-600">5개월 차이는 크지 않습니다. 무리하지 마세요! 😊</strong>
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* M6: 안정화 */}
            <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-indigo-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">6</span>
                </div>
                <div>
                  <h5 className="font-bold text-indigo-900">Month 6: 회원 유지율 관리</h5>
                  <p className="text-xs text-slate-600">직강 25명 + 강사 50명 = 총 75명</p>
                </div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-3 mb-3">
                <p className="text-sm font-bold text-indigo-900">순수익: ~615만원 안정</p>
                <p className="text-xs text-slate-600 mt-1">월 저축: 약 515만원</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    미달성 시 Plan B/C
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>M6 목표 미달 대응 전략</DialogTitle>
                    <DialogDescription>75명 미달 시 대응 방안</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    {/* SUCCESS 시나리오 */}
                    <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">✓</span>
                        </div>
                        <h3 className="text-xl font-bold text-green-900">목표 달성 (75명 달성)</h3>
                      </div>
                      <p className="text-green-800 font-semibold">→ 직강 25명 + 강사 50명</p>
                      <p className="text-sm text-green-700 mt-2">
                        순수익 615만원 안정. 23개월 내 1억 저축 확실
                      </p>
                    </div>

                    {/* Plan B */}
                    <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">B</span>
                        </div>
                        <h3 className="text-xl font-bold text-amber-900">Plan B (68-74명)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                          <p className="text-sm text-slate-700">
                            <strong>이탈률 10-15%</strong> (월 7-10명 이탈). 평균적 수준이지만 개선 여지 있음.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">💰 재무 상황</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>회원 수:</strong> 63-69명</li>
                            <li>• <strong>순수익:</strong> 약 650만원/월</li>
                            <li>• <strong>생활비:</strong> 100만원</li>
                            <li>• <strong>월 저축:</strong> 400-450만원</li>
                            <li className="text-amber-600 font-semibold pt-2">→ 1억 달성: 25-27개월</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">🔍 이탈 원인 파악 (1주 내)</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>1:1 만족도 조사:</strong> 이탈 사유 파악 (레슨 품질? 가격? 스케줄?)</li>
                            <li>• <strong>이탈 회원 전화:</strong> 3-5명 직접 인터뷰</li>
                            <li>• <strong>강사 피드백:</strong> 파트별 회원 반응 수집</li>
                            <li>• <strong>경쟁사 모니터링:</strong> 주변 학원 변화 체크</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">🎯 리텐션 강화 전략 (즉시)</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>레슨 품질 개선:</strong> 커리큘럼 업데이트, 강사 교육</li>
                            <li>• <strong>커뮤니티 강화:</strong> 학생 간 교류 이벤트 (월 1회 잼 세션)</li>
                            <li>• <strong>앙상블 참여 독려:</strong> 추가 레슨으로 유대감 강화</li>
                            <li>• <strong>리워드 프로그램:</strong> 6개월 등록 5% 할인, 12개월 10% 할인</li>
                            <li>• <strong>개인 맞춤 관리:</strong> 회원별 진도/목표 관리 강화</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">📈 회복 전략</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>신규 모집 강화:</strong> 이탈분 즉시 대체</li>
                            <li>• <strong>온라인 클래스:</strong> 추가 수익 +30만원</li>
                            <li>• <strong>기업 출강:</strong> 1-2곳, +50-100만원</li>
                            <li className="text-green-600 font-semibold pt-2">
                              → 회복 시 27개월 → 24개월로 단축 가능!
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-amber-900 mb-2">⏱️ 타임라인</p>
                          <p className="text-sm text-slate-700">
                            • Week 1: 원인 파악 완료<br/>
                            • Week 2-3: 개선 조치 실행<br/>
                            • M7-8: 효과 측정 (이탈률 5-10%로 감소 목표)<br/>
                            • M9: 안정화 확인
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Plan C */}
                    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">C</span>
                        </div>
                        <h3 className="text-xl font-bold text-red-900">Plan C (68명 미만 - 55-67명)</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">🚨 위기 상황</p>
                          <p className="text-sm text-slate-700">
                            <strong className="text-red-600">이탈률 15%+ (월 10명 이상 이탈)</strong>
                            <br/>높은 이탈률로 회원 수 급감. 근본 원인 파악 및 즉각 조치 필요.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">💰 재무 현실</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>회원 수:</strong> 50-62명</li>
                            <li>• <strong>순수익:</strong> 약 550-600만원/월</li>
                            <li>• <strong>생활비:</strong> 100만원</li>
                            <li>• <strong>월 저축:</strong> 350-400만원</li>
                            <li className="text-red-600 font-semibold pt-2">→ 1억 달성: 27-30개월 (+3-6개월)</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">🔍 긴급 진단 (1-2일 내)</p>
                          <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>이탈 회원 긴급 인터뷰:</strong> 5-10명 전화 (이탈 사유 분석)</li>
                            <li>• <strong>현재 회원 만족도:</strong> 전체 설문 조사</li>
                            <li>• <strong>강사 피드백:</strong> 파트별 문제점 수집</li>
                            <li>• <strong>시설/서비스 점검:</strong> 물리적 환경 체크</li>
                            <li>• <strong>경쟁사 분석:</strong> 주변 학원 동향 조사</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">🚨 긴급 조치 (3단계)</p>
                          <div className="space-y-2">
                            <div className="p-2 bg-slate-50 rounded border-l-4 border-red-500">
                              <p className="font-semibold text-sm mb-1">1단계: 원인 제거 (1주 내)</p>
                              <p className="text-xs text-slate-600">
                                • 레슨 품질 문제 → 강사 교육 또는 교체<br/>
                                • 시설 문제 → 즉시 개선 (방음, 청결, 장비)<br/>
                                • 가격 문제 → 한시적 프로모션<br/>
                                • 커리큘럼 문제 → 맞춤형 재설계
                              </p>
                            </div>
                            <div className="p-2 bg-slate-50 rounded border-l-4 border-amber-500">
                              <p className="font-semibold text-sm mb-1">2단계: 신뢰 회복 (2주)</p>
                              <p className="text-xs text-slate-600">
                                • 기존 회원 1:1 면담 (불만 청취)<br/>
                                • 개선 사항 즉시 공지<br/>
                                • 보상 프로그램 (무료 레슨 1회 제공)
                              </p>
                            </div>
                            <div className="p-2 bg-slate-50 rounded border-l-4 border-blue-500">
                              <p className="font-semibold text-sm mb-1">3단계: 회원 회복 (1개월)</p>
                              <p className="text-xs text-slate-600">
                                • 이탈 회원 복귀 특가 (50% 할인 1개월)<br/>
                                • 신규 회원 공격적 모집 (무료 체험 2주)<br/>
                                • 소개 이벤트 (소개 1명당 1회 무료)<br/>
                                • SNS 마케팅 강화 (예산 20만원 투입)
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">🔄 선택지</p>
                          <div className="space-y-2">
                            <div className="p-3 bg-slate-50 rounded border-l-4 border-green-500">
                              <p className="font-semibold text-green-900 mb-1">옵션 1: 긴급 회복 집중 (추천 ⭐)</p>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                • 1-2개월 집중 회복 기간<br/>
                                • 목표: 70명 복구<br/>
                                • 비용 투입 감수 (마케팅 20-30만원)<br/>
                                • 장기적 안정성 확보
                              </p>
                            </div>
                            <div className="p-3 bg-slate-50 rounded border-l-4 border-purple-500">
                              <p className="font-semibold text-purple-900 mb-1">옵션 2: 현 수준 유지 + 추가 수익원</p>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                • 55-60명 안정화<br/>
                                • 온라인/출강으로 수익 보완 (+150만원)<br/>
                                • 30개월 목표로 재조정<br/>
                                • 스트레스 감소
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-bold text-red-900 mb-2">⏱️ 긴급 타임라인</p>
                          <p className="text-sm text-slate-700">
                            • Day 1-3: 긴급 진단 완료<br/>
                            • Week 1: 1단계 (원인 제거) 완료<br/>
                            • Week 2-3: 2단계 (신뢰 회복) 진행<br/>
                            • Week 4-8: 3단계 (회원 회복) 집중<br/>
                            • M8: 효과 측정 및 방향 최종 결정
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 최종 조언 */}
                    <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-6">
                      <p className="font-bold text-indigo-900 mb-3">💡 현실적 조언</p>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        이탈률이 높다는 것은 <strong className="text-red-600">근본적인 문제</strong>가 있다는 신호입니다.
                        단기 마케팅보다 <strong>품질 개선이 우선</strong>입니다.
                        <br/><br/>
                        <strong>옵션 1 (긴급 회복)</strong>을 추천합니다:<br/>
                        • 문제 방치 시 더 큰 손실<br/>
                        • 1-2개월 투자로 장기 안정성 확보<br/>
                        • 브랜드 평판 유지 (입소문 중요)<br/>
                        <br/>
                        <strong className="text-green-600">위기는 기회입니다. 이 시기에 탄탄한 기반을 다지세요!</strong>
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* M12: 1년차 완료 */}
            <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-teal-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">12</span>
                </div>
                <div>
                  <h5 className="font-bold text-teal-900">Month 12: 1년차 완료</h5>
                  <p className="text-xs text-slate-600">직강 25명 + 강사 55명 = 총 80명</p>
                </div>
              </div>
              <div className="bg-teal-50 rounded-lg p-3">
                <p className="text-sm font-bold text-teal-900">순수익: ~715만원</p>
                <p className="text-xs text-slate-600 mt-1">연간 저축: 약 6,600만원</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 재무 계획 섹션 - 축약 버전 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-center mb-10">24개월 재무 계획 & 백업 전략</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-300 text-center">
              <p className="text-sm text-green-700 mb-2">Target: 18개월</p>
              <p className="text-5xl font-extrabold text-green-600">9,000<span className="text-2xl">만원</span></p>
              <p className="text-xs text-slate-600 mt-3">Open 6개월: 1,800만원<br/>Deep Dive 12개월: 7,200만원</p>
            </div>
            <div className="bg-slate-100 p-6 rounded-2xl border-2 border-slate-300 text-center">
              <p className="text-sm text-slate-700 mb-2">Conservative: 24개월</p>
              <p className="text-3xl font-bold text-slate-900 mb-2">5천만원</p>
              <p className="text-lg text-slate-700">월 208만원 저축</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl border-2 border-orange-300 text-center">
              <p className="text-sm text-orange-700 mb-2">Multi-Pipeline</p>
              <div className="flex justify-around mt-4">
                <div><Video className="w-8 h-8 mx-auto text-orange-600 mb-1" /><p className="text-xs font-semibold">VOD</p></div>
                <div><FileText className="w-8 h-8 mx-auto text-orange-600 mb-1" /><p className="text-xs font-semibold">블로그</p></div>
                <div><Youtube className="w-8 h-8 mx-auto text-orange-600 mb-1" /><p className="text-xs font-semibold">유튜브</p></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* What If Scenario Button for Phase 3 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="max-w-7xl mx-auto px-6 pb-8 mt-12"
      >
        <Link href="/scenarios/phase3" className="block">
          <Button className="w-full bg-purple-500/20 hover:bg-purple-500/30 backdrop-blur-md border-2 border-purple-400/40 text-white text-lg py-6 rounded-2xl shadow-2xl transition-all hover:scale-105">
            <span className="text-2xl mr-3">🚀</span>
            <span className="font-bold">Phase 3 시나리오</span>
          </Button>
        </Link>
      </motion.div>

      {/* 저축 시뮬레이션 CTA - 최하단 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="max-w-5xl mx-auto px-6 pb-20 mt-8"
      >
        <Link href="/savings-simulator">
          <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 p-10 rounded-3xl shadow-2xl transition-all hover:scale-105 cursor-pointer border-4 border-white/20">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">💰</div>
              <h2 className="text-4xl font-black mb-3">2년 내 1억 저축 시뮬레이션</h2>
              <p className="text-xl mb-6 opacity-90">생활비 100만원 기준 - Phase 1~3 전체 누적 분석</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <p className="text-sm opacity-80 mb-1">SUCCESS</p>
                  <p className="text-3xl font-black">23개월</p>
                  <p className="text-sm mt-1">목표보다 빠름! 🎉</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <p className="text-sm opacity-80 mb-1">PLAN B</p>
                  <p className="text-3xl font-black">25개월</p>
                  <p className="text-sm mt-1">+1개월</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <p className="text-sm opacity-80 mb-1">PLAN C</p>
                  <p className="text-3xl font-black">29개월</p>
                  <p className="text-sm mt-1">+5개월</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 bg-white/30 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/50 hover:bg-white/40 transition-all">
                <span className="text-xl font-bold">상세 분석 보기</span>
                <span className="text-2xl">→</span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Navigation Arrows */}
      {canNavigate.prev && (
        <button
          onClick={() => onNavigate("prev")}
          className="fixed left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all group"
        >
          <ChevronLeft className="w-8 h-8 text-white group-hover:-translate-x-1 transition-transform" />
        </button>
      )}
    </motion.div>
  );
}
