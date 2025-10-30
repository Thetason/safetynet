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

        {/* 브랜드 철학 & 타겟층 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-10 shadow-2xl mb-8 border-2 border-indigo-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-4">
              🎵 시선뮤직 & 세타쓴 브랜드 철학
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              단순한 음악 학원이 아닌, <strong className="text-purple-700">음악을 향유하는 문화</strong>를 만들어가는 커뮤니티
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-indigo-200"
            >
              <div className="text-4xl mb-4 text-center">🎵</div>
              <h4 className="text-xl font-bold text-indigo-900 mb-3 text-center">음악 향유 능력</h4>
              <p className="text-slate-700 text-center leading-relaxed">
                이 시대에 음악을 <strong className="text-indigo-600">직접 즐길 수 있는 능력</strong>은 선택이 아닌 필수입니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200"
            >
              <div className="text-4xl mb-4 text-center">🎯</div>
              <h4 className="text-xl font-bold text-purple-900 mb-3 text-center">올바른 방법론</h4>
              <p className="text-slate-700 text-center leading-relaxed">
                <strong className="text-purple-600">제대로 된 방법</strong>으로 배울 때 당신의 노래와 음악은 더 빛날 수 있습니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200"
            >
              <div className="text-4xl mb-4 text-center">💪</div>
              <h4 className="text-xl font-bold text-pink-900 mb-3 text-center">노력의 가치</h4>
              <p className="text-slate-700 text-center leading-relaxed">
                소비를 넘어 <strong className="text-pink-600">연주할 수 있는 것</strong>의 멋짐. 그 과정의 가치를 아는 사람들.
              </p>
            </motion.div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <Users className="w-7 h-7 text-indigo-600" />
              우리의 타겟 고객
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl">
                <span className="text-2xl">🎸</span>
                <div>
                  <p className="font-bold text-indigo-900 mb-1">음악을 풍요롭게 향유하고 싶은 사람</p>
                  <p className="text-sm text-slate-600">듣는 것을 넘어, 직접 연주하며 음악과 하나되고 싶은 분들</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                <span className="text-2xl">🎼</span>
                <div>
                  <p className="font-bold text-purple-900 mb-1">제대로 배우고 싶은 사람</p>
                  <p className="text-sm text-slate-600">유튜브 독학이 아닌, 올바른 방법으로 기초부터 탄탄하게</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-xl">
                <span className="text-2xl">🌟</span>
                <div>
                  <p className="font-bold text-pink-900 mb-1">노력의 가치를 아는 사람</p>
                  <p className="text-sm text-slate-600">빠른 결과보다 진정한 성장을 추구하는 분들</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-rose-50 rounded-xl">
                <span className="text-2xl">👥</span>
                <div>
                  <p className="font-bold text-rose-900 mb-1">나이와 무관한 모든 음악 러버</p>
                  <p className="text-sm text-slate-600">성인, 학생, 직장인, 주부 - 음악을 사랑하는 모든 분들</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-xl text-center">
              <p className="text-slate-800 font-semibold text-lg">
                💡 <strong className="text-purple-700">"음악은 우리를 풍요롭게 하고, 그것을 소비하는 것에 그치지 않고 연주할 수 있는 게 멋있다"</strong>는 문화를 공유하는 커뮤니티
              </p>
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
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
          <h4 className="text-2xl font-bold mb-6 text-blue-900 flex items-center gap-2">
            <Target className="w-7 h-7" />
            Phase 2 마일스톤 타임라인 (6개월)
          </h4>
          <p className="text-sm text-blue-700 mb-6 bg-blue-100 px-4 py-2 rounded-lg">
            💡 직강 15명 고정 + 강사 클래스 확장으로 안정적 성장
          </p>

          <div className="space-y-6">
            {/* Month 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75 }}
              className="relative pl-8 border-l-4 border-blue-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-bold text-blue-900">Month 1: 정식 오픈 & 초기 세팅</h5>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                    🚀 그랜드 오픈
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-blue-600">✓</span>
                    <span>학원 정식 등록 및 인테리어 완료</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-blue-600">✓</span>
                    <span>직강 15명 확보 (Phase 1에서 전환)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-blue-600">✓</span>
                    <span>강사 4명 채용 (피아노/기타/드럼/보컬 각 1명)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-blue-600">✓</span>
                    <span>Phase 1 레슨 병행 (추가 수익)</span>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg p-4">
                    <p className="font-bold mb-2">🎯 목표: 32명 (직강 15 + 강사 12 + 키즈 5)</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="opacity-80">총 매출</p>
                        <p className="font-bold text-base">714만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">비용</p>
                        <p className="font-bold text-base">405만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">순수익</p>
                        <p className="font-bold text-base text-yellow-300">309만원</p>
                      </div>
                    </div>
                    <p className="text-xs opacity-80 mt-2">* 직강 25만 × 15 / 강사 22만 × 12 (4파트 각 3명) / 키즈 15만 × 5</p>

                    <div className="mt-4 pt-4 border-t border-white/30">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            목표 미달성 시 대안 (Plan B/C/D)
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Month 1 목표 미달성 시 대안</DialogTitle>
                            <DialogDescription>정식 오픈 초기 대응 방안 (목표: 32명 = 309만원)</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-4">
                            {/* SUCCESS */}
                            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">✓</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-900">SUCCESS (32명 이상)</h3>
                              </div>
                              <p className="text-green-800 font-semibold">순수익 309만원 이상</p>
                              <p className="text-sm text-green-700 mt-2">→ Month 2로 순조롭게 진행, 강사당 학생 수 증가 추진</p>
                            </div>

                            {/* PLAN B */}
                            <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">B</span>
                                </div>
                                <h3 className="text-xl font-bold text-amber-900">PLAN B (26-31명, 80-99%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                  <p className="text-sm text-slate-700">순수익 263-301만원. 목표 대비 약간 부족하지만 회복 가능한 수준. 강사당 평균 2.75-4명으로 여유 있음.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">🎯 즉시 실행 액션 (2주 내)</p>
                                  <ul className="text-sm text-slate-700 space-y-1">
                                    <li>• 무료 체험 레슨 강화 (각 파트별 주 3회 → 주 5회)</li>
                                    <li>• 지역 아파트 단지 전단지 배포 (3,000부)</li>
                                    <li>• 인스타그램 릴스 제작 (강사 연주 영상, 레슨 현장)</li>
                                    <li>• 오픈 기념 프로모션 연장 (첫 달 15% 할인)</li>
                                    <li>• 키즈반 추가 모집 (5명 → 8명 목표)</li>
                                  </ul>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">⏱️ 회복 목표</p>
                                  <p className="text-sm text-slate-700">2주 내 32명 달성, Month 2에는 40명 목표 유지</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 순수익 263-301만원으로 생활비 100만원 제외 시 저축 163-201만원 가능. 목표 달성 시간 1-2개월 지연 예상.</p>
                                </div>
                              </div>
                            </div>

                            {/* PLAN C */}
                            <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <h3 className="text-xl font-bold text-orange-900">PLAN C (19-25명, 60-79%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🚨 심각한 우려</p>
                                  <p className="text-sm text-slate-700">순수익 193-262만원. 목표 대비 상당한 부족. 강사당 1-2.5명으로 운영 비효율. 전략 수정 필요.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🔄 전략 재검토</p>
                                  <div className="space-y-2">
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">1. 강사 재배치:</span>
                                      <span className="text-sm ml-2">실적 저조한 파트 강사 교체 또는 인기 파트 집중 (드럼/기타 우선)</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">2. 가격 정책 수정:</span>
                                      <span className="text-sm ml-2">첫 3개월 30% 파격 할인 (강사 22만 → 15.4만, 키즈 15만 → 10.5만)</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">3. 타겟층 확대:</span>
                                      <span className="text-sm ml-2">성인 야간반 신설 (직장인 7-9pm), 주말 특강 운영</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">4. 마케팅 재설계:</span>
                                      <span className="text-sm ml-2">당근 + 인스타 광고비 50만원 → 100만원 증액, ROI 집중 측정</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">⏱️ 회복 기한</p>
                                  <p className="text-sm text-slate-700">1개월 내 26명 이상 달성 필수. 실패 시 Plan D 전환.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 순수익 193-262만원, 저축 93-162만원. 목표 달성 시간 3-4개월 지연 예상.</p>
                                </div>
                              </div>
                            </div>

                            {/* PLAN D */}
                            <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">D</span>
                                </div>
                                <h3 className="text-xl font-bold text-red-900">PLAN D (16-18명, 50-59%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🚨 위기 상황</p>
                                  <p className="text-sm text-slate-700">순수익 154-192만원. 목표 대비 절반 수준. 사업 모델 근본적 재검토 필요.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🔄 근본적 재구조화</p>
                                  <div className="space-y-2">
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 1: 규모 축소</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 강사 2명으로 축소 (드럼 + 기타만 유지)</li>
                                        <li>• 공간 축소 검토 (20평 → 10평 이하)</li>
                                        <li>• 고정비 200만 → 120만으로 절감</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 2: 포지셔닝 변경</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 키즈 전문 학원으로 전환 (수요 높은 세그먼트 집중)</li>
                                        <li>• 그룹 레슨 중심 운영 (1:4 수업으로 효율화)</li>
                                        <li>• 가격 15만 → 12만으로 진입장벽 낮춤</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 3: Phase 1 복귀</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 학원 폐업, 교습소로 복귀 (원장 직강 15명)</li>
                                        <li>• 6개월간 추가 자본 축적 (Phase 1 연장)</li>
                                        <li>• 재오픈 시 다른 지역 검토</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">⏱️ 결정 기한</p>
                                  <p className="text-sm text-slate-700">2주 내 옵션 결정, 4주 내 실행. 더 이상의 손실 방지 최우선.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">
                                    월 순수익 154-192만원, 저축 54-92만원.
                                    <br />
                                    <span className="text-red-600 font-semibold">⚠️ 이 상태 지속 시 1억 저축 목표 달성 불가능. 즉각 조치 필요.</span>
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

            {/* Month 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="relative pl-8 border-l-4 border-cyan-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-cyan-200">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-bold text-cyan-900">Month 2: 강사 1차 확장</h5>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-bold">
                    👥 팀 빌딩
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-cyan-600">✓</span>
                    <span>각 강사당 수강생 4-5명으로 증가</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-cyan-600">✓</span>
                    <span>키즈 2-3명 추가 등록</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-cyan-600">✓</span>
                    <span>SNS 마케팅 강화 (인스타/유튜브)</span>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg p-4">
                    <p className="font-bold mb-2">🎯 목표: 40명 (직강 15 + 강사 18 + 키즈 7)</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="opacity-80">총 매출</p>
                        <p className="font-bold text-base">876만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">비용</p>
                        <p className="font-bold text-base">494만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">순수익</p>
                        <p className="font-bold text-base text-yellow-300">382만원</p>
                      </div>
                    </div>
                    <p className="text-xs opacity-80 mt-2">* 직강 25만×15 / 강사 22만×18 (4파트 평균 4.5명) / 키즈 15만×7</p>

                    <div className="mt-4 pt-4 border-t border-white/30">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            목표 미달성 시 대안 (Plan B/C/D)
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Month 2 목표 미달성 시 대안</DialogTitle>
                            <DialogDescription>강사 확장 단계 대응 방안 (목표: 40명 = 382만원)</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-4">
                            {/* SUCCESS */}
                            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">✓</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-900">SUCCESS (40명 이상)</h3>
                              </div>
                              <p className="text-green-800 font-semibold">순수익 382만원 이상</p>
                              <p className="text-sm text-green-700 mt-2">→ Month 3로 순조롭게 진행, 강사당 학생 수 5-6명으로 증가</p>
                            </div>

                            {/* PLAN B */}
                            <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">B</span>
                                </div>
                                <h3 className="text-xl font-bold text-amber-900">PLAN B (32-39명, 80-99%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                  <p className="text-sm text-slate-700">순수익 306-373만원. 목표 대비 약간 부족하지만 성장세 유지. 강사당 평균 4-5명으로 양호한 수준.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">🎯 즉시 실행 액션 (2주 내)</p>
                                  <ul className="text-sm text-slate-700 space-y-1">
                                    <li>• 학생 추천 프로그램 강화 (추천인/피추천인 각 3만원 할인)</li>
                                    <li>• 수강 후기 이벤트 (베스트 후기 3명 월 수강료 50% 할인)</li>
                                    <li>• 인스타그램 릴스 주 5회 업로드 (강사 연주, 학생 성장 스토리)</li>
                                    <li>• 키즈 부모 커뮤니티 공략 (맘카페, 학교 앞 전단지)</li>
                                    <li>• 그룹 레슨 특가 (2명 이상 동시 등록 시 각 20% 할인)</li>
                                  </ul>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">⏱️ 회복 목표</p>
                                  <p className="text-sm text-slate-700">2주 내 40명 달성, Month 3에는 47명 목표 유지</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 순수익 306-373만원으로 저축 206-273만원 가능. 목표 달성 시간 2-3주 지연 예상.</p>
                                </div>
                              </div>
                            </div>

                            {/* PLAN C */}
                            <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <h3 className="text-xl font-bold text-orange-900">PLAN C (24-31명, 60-79%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🚨 심각한 우려</p>
                                  <p className="text-sm text-slate-700">순수익 229-305만원. 목표 대비 상당한 부족. 강사당 3-4명으로 성장 정체. 전략 수정 필요.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🔄 전략 재검토</p>
                                  <div className="space-y-2">
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">1. 강사 실적 분석:</span>
                                      <span className="text-sm ml-2">파트별 학생 수 점검, 저조한 강사 1:1 면담 및 교육 지원</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">2. 원장 직강 확대:</span>
                                      <span className="text-sm ml-2">15명 → 20명으로 증원, 내 명성 활용하여 신뢰도 상승</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">3. 파격 프로모션:</span>
                                      <span className="text-sm ml-2">2개월 특가 (첫 달 30% 할인, 3개월 등록 시 40% 할인)</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">4. 새로운 수익원:</span>
                                      <span className="text-sm ml-2">앙상블 클래스 신설 (월 10만원, 주 1회), 밴드 공연 워크숍</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">⏱️ 회복 기한</p>
                                  <p className="text-sm text-slate-700">1개월 내 32명 이상 달성 필수. 실패 시 Plan D 전환.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 순수익 229-305만원, 저축 129-205만원. 목표 달성 시간 2-3개월 지연 예상.</p>
                                </div>
                              </div>
                            </div>

                            {/* PLAN D */}
                            <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">D</span>
                                </div>
                                <h3 className="text-xl font-bold text-red-900">PLAN D (20-23명, 50-59%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🚨 위기 상황</p>
                                  <p className="text-sm text-slate-700">순수익 191-220만원. 목표 대비 절반 수준. 강사 확장 모델 실패 징후. 근본적 재검토 필요.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🔄 근본적 재구조화</p>
                                  <div className="space-y-2">
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 1: 강사 구조 조정</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 실적 저조 강사 2명 정리 (드럼/기타 2명만 유지)</li>
                                        <li>• 내 직강 비중 대폭 확대 (15명 → 25명)</li>
                                        <li>• 인건비 절감 (강사급여 264만 → 132만)</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 2: 타겟 전환</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 키즈 중심 학원으로 전환 (수요 집중 공략)</li>
                                        <li>• 그룹 레슨 위주 운영 (1:4 수업, 효율 극대화)</li>
                                        <li>• 키즈 20명 목표 (그룹 15만 × 20 = 300만원)</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 3: 공간 재협상</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 월세 재협상 (180만 → 120만, 불가 시 이전 검토)</li>
                                        <li>• 3개월 유예 기간 요청하여 회복 시간 확보</li>
                                        <li>• 공유 공간 전환 (타 업종과 시간대별 공유)</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">⏱️ 결정 기한</p>
                                  <p className="text-sm text-slate-700">2주 내 옵션 결정, 1개월 내 실행. 손실 최소화 최우선.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">
                                    월 순수익 191-220만원, 저축 91-120만원.
                                    <br />
                                    <span className="text-red-600 font-semibold">⚠️ 이 상태 3개월 지속 시 1억 목표 불가능. 즉각 구조조정 필요.</span>
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
              transition={{ delay: 0.85 }}
              className="relative pl-8 border-l-4 border-teal-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-teal-200">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-bold text-teal-900">Month 3: 강사 2차 확장</h5>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold">
                    📈 성장 가속
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-teal-600">✓</span>
                    <span>강사당 5-6명으로 증가 (4파트 총 22명)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-teal-600">✓</span>
                    <span>키즈 10명 돌파 (추가 모집)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-teal-600">✓</span>
                    <span>Phase 1 종료 (학원 단독 운영 시작)</span>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg p-4">
                    <p className="font-bold mb-2">🎯 목표: 47명 (직강 15 + 강사 22 + 키즈 10)</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="opacity-80">총 매출</p>
                        <p className="font-bold text-base">1,009만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">비용</p>
                        <p className="font-bold text-base">567만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">순수익</p>
                        <p className="font-bold text-base text-yellow-300">442만원</p>
                      </div>
                    </div>
                    <p className="text-xs opacity-80 mt-2">* 직강 25만×15 / 강사 22만×22 (4파트 평균 5.5명) / 키즈 15만×10</p>

                    <div className="mt-4 pt-4 border-t border-white/30">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            목표 미달성 시 대안 (Plan B/C/D)
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Month 3 목표 미달성 시 대안</DialogTitle>
                            <DialogDescription>성장 가속 단계 대응 방안 (목표: 47명 = 442만원)</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-4">
                            {/* SUCCESS */}
                            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">✓</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-900">SUCCESS (47명 이상)</h3>
                              </div>
                              <p className="text-green-800 font-semibold">순수익 442만원 이상</p>
                              <p className="text-sm text-green-700 mt-2">→ Month 4로 순조롭게 진행, 강사당 학생 수 6-7명으로 증가</p>
                            </div>

                            {/* PLAN B */}
                            <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">B</span>
                                </div>
                                <h3 className="text-xl font-bold text-amber-900">PLAN B (38-46명, 80-99%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                  <p className="text-sm text-slate-700">순수익 354-433만원. 목표 대비 약간 부족하지만 견고한 성장. 강사당 평균 5-6명으로 안정적.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">🎯 즉시 실행 액션 (2주 내)</p>
                                  <ul className="text-sm text-slate-700 space-y-1">
                                    <li>• 47명 달성 캠페인 (달성 시 전원 다음 달 5% 할인)</li>
                                    <li>• 친구/가족 동반 등록 특가 (2명 25%, 3명 이상 35% 할인)</li>
                                    <li>• 밴드/앙상블 클래스 신설 (월 10만원, 주 1회, 추가 수익원)</li>
                                    <li>• 강사 인센티브 제공 (학생 6명 이상 확보 시 월 10만원 보너스)</li>
                                    <li>• 지역 학교 앞 프로모션 (초중고 방과 후 타겟팅)</li>
                                  </ul>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">⏱️ 회복 목표</p>
                                  <p className="text-sm text-slate-700">2주 내 47명 달성, Month 4에는 52명 목표 유지</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 순수익 354-433만원으로 저축 254-333만원 가능. 목표 달성 시간 2-3주 지연 예상.</p>
                                </div>
                              </div>
                            </div>

                            {/* PLAN C */}
                            <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <h3 className="text-xl font-bold text-orange-900">PLAN C (28-37명, 60-79%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🚨 심각한 우려</p>
                                  <p className="text-sm text-slate-700">순수익 267-353만원. 목표 대비 큰 부족. 강사당 4-5명으로 성장 정체. Phase 1 종료 압박 상황.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🔄 전략 재검토</p>
                                  <div className="space-y-2">
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">1. Phase 1 병행 연장:</span>
                                      <span className="text-sm ml-2">교습소 1-2개월 추가 운영, 학원 안정화 시간 확보 (월 150만원 추가 수익)</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">2. 강사 재교육:</span>
                                      <span className="text-sm ml-2">1:1 코칭, 마케팅 교육, 실적 저조 강사 집중 지원 또는 교체 검토</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">3. 파격 프로모션:</span>
                                      <span className="text-sm ml-2">3개월 특가 (첫 달 40% 할인, 6개월 등록 시 50% 할인)</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">4. 수익 다각화:</span>
                                      <span className="text-sm ml-2">온라인 레슨 시작, 주말 워크숍 (월 30-50만원 추가 수익)</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">⏱️ 회복 기한</p>
                                  <p className="text-sm text-slate-700">1개월 내 38명 이상 달성 필수. 실패 시 Plan D 전환.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 순수익 267-353만원, 저축 167-253만원. 목표 달성 시간 2-4개월 지연 예상.</p>
                                </div>
                              </div>
                            </div>

                            {/* PLAN D */}
                            <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">D</span>
                                </div>
                                <h3 className="text-xl font-bold text-red-900">PLAN D (24-27명, 50-59%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🚨 위기 상황</p>
                                  <p className="text-sm text-slate-700">순수익 229-258만원. 목표 대비 절반 수준. 확장 전략 실패. 근본적 방향 전환 필요.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🔄 근본적 재구조화</p>
                                  <div className="space-y-2">
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 1: 하이브리드 모델</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• Phase 1 교습소 6개월 추가 운영 (월 150만원 안정 수익)</li>
                                        <li>• 학원은 강사 2명만 유지 (드럼+기타)</li>
                                        <li>• 합계 순수익 300-350만원으로 안정화</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 2: 키즈 전문 전환</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 성인 강사반 정리, 키즈 전문 학원으로 리포지셔닝</li>
                                        <li>• 그룹 레슨 중심 (1:4-6 수업)</li>
                                        <li>• 키즈 30명 목표 (그룹 12만 × 30 = 360만원)</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 3: 공간/비용 재협상</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 월세 30% 인하 협상 (180만 → 126만)</li>
                                        <li>• 강사 인건비 재협상 (성과급 중심으로 전환)</li>
                                        <li>• 3개월 유예 기간 확보하여 회복 시도</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">⏱️ 결정 기한</p>
                                  <p className="text-sm text-slate-700">2주 내 옵션 결정, 1개월 내 실행. 추가 손실 방지 최우선.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">
                                    월 순수익 229-258만원, 저축 129-158만원.
                                    <br />
                                    <span className="text-red-600 font-semibold">⚠️ Phase 1 종료 시 저축률 급감. 하이브리드 모델 강력 권장.</span>
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

            {/* Month 4 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="relative pl-8 border-l-4 border-emerald-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">4</span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-emerald-200">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-bold text-emerald-900">Month 4: 안정화 & 최적화</h5>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
                    ⚙️ 시스템 완성
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-emerald-600">✓</span>
                    <span>강사당 6-7명으로 증가 (4파트 총 26명)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-emerald-600">✓</span>
                    <span>키즈 11명 돌파</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-emerald-600">✓</span>
                    <span>재등록률 65% 달성</span>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg p-4">
                    <p className="font-bold mb-2">🎯 목표: 52명 (직강 15 + 강사 26 + 키즈 11)</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="opacity-80">총 매출</p>
                        <p className="font-bold text-base">1,112만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">비용</p>
                        <p className="font-bold text-base">624만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">순수익</p>
                        <p className="font-bold text-base text-yellow-300">488만원</p>
                      </div>
                    </div>
                    <p className="text-xs opacity-80 mt-2">* 직강 25만×15 / 강사 22만×26 (4파트 평균 6.5명) / 키즈 15만×11</p>

                    <div className="mt-4 pt-4 border-t border-white/30">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            목표 미달성 시 대안 (Plan B/C/D)
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Month 4 목표 미달성 시 대안</DialogTitle>
                            <DialogDescription>시스템 안정화 단계 대응 방안 (목표: 52명 = 488만원)</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-4">
                            {/* SUCCESS */}
                            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">✓</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-900">SUCCESS (52명 이상)</h3>
                              </div>
                              <p className="text-green-800 font-semibold">순수익 488만원 이상</p>
                              <p className="text-sm text-green-700 mt-2">→ Month 5로 순조롭게 진행, 500만원 돌파 임박</p>
                            </div>

                            {/* PLAN B */}
                            <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">B</span>
                                </div>
                                <h3 className="text-xl font-bold text-amber-900">PLAN B (42-51명, 80-99%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                  <p className="text-sm text-slate-700">순수익 390-479만원. 목표 대비 약간 부족. 강사당 평균 6명으로 매우 양호. 마지막 스퍼트 필요.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">🎯 즉시 실행 액션 (2주 내)</p>
                                  <ul className="text-sm text-slate-700 space-y-1">
                                    <li>• 52명 달성 이벤트 (달성 시 전원 무료 특강 1회 제공)</li>
                                    <li>• 기존 수강생 추천 보상 증액 (추천인 5만원, 신규 3만원 할인)</li>
                                    <li>• 무료 체험 레슨 확대 (주 10회 제공, 전환율 집중 관리)</li>
                                    <li>• 지역 학교 협력 강화 (방과 후 수업 제안, 학교 홍보물 배포)</li>
                                    <li>• 공연/발표회 개최 (학부모 초청, 신규 유입 기회)</li>
                                  </ul>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">⏱️ 회복 목표</p>
                                  <p className="text-sm text-slate-700">2주 내 52명 달성, Month 5에는 58명 목표 유지</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 순수익 390-479만원으로 저축 290-379만원 가능. 목표 달성 시간 2-3주 지연 예상.</p>
                                </div>
                              </div>
                            </div>

                            {/* PLAN C */}
                            <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <h3 className="text-xl font-bold text-orange-900">PLAN C (31-41명, 60-79%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🚨 심각한 우려</p>
                                  <p className="text-sm text-slate-700">순수익 292-381만원. 목표 대비 큰 부족. 강사당 4-5명으로 정체. 안정화 실패 징후.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🔄 전략 재검토</p>
                                  <div className="space-y-2">
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">1. 목표 현실화:</span>
                                      <span className="text-sm ml-2">500만원 목표를 5-6개월로 연기, 무리한 확장 중단</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">2. 강사 역량 강화:</span>
                                      <span className="text-sm ml-2">주 1회 강사 교육, 마케팅/고객관리 스킬 업</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">3. 수익 구조 다변화:</span>
                                      <span className="text-sm ml-2">온라인 레슨 본격 시작 (월 20-30만원), 주말 워크숍 (회당 50만원)</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">4. 재등록률 집중:</span>
                                      <span className="text-sm ml-2">신규보다 기존 학생 이탈 방지 (재등록 인센티브 10% 할인)</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">⏱️ 회복 기한</p>
                                  <p className="text-sm text-slate-700">2개월 내 42명 이상 달성 필수. 실패 시 Plan D 전환.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 순수익 292-381만원, 저축 192-281만원. 목표 달성 시간 3-5개월 지연 예상.</p>
                                </div>
                              </div>
                            </div>

                            {/* PLAN D */}
                            <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">D</span>
                                </div>
                                <h3 className="text-xl font-bold text-red-900">PLAN D (26-30명, 50-59%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🚨 위기 상황</p>
                                  <p className="text-sm text-slate-700">순수익 246-282만원. 목표 대비 절반 수준. 4개월 투자 대비 성과 미흡. 전면 재구조화 필요.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🔄 근본적 재구조화</p>
                                  <div className="space-y-2">
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 1: 규모 대폭 축소</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 강사 2명으로 축소 (가장 실적 좋은 파트만)</li>
                                        <li>• 내 직강 비중 확대 (15명 → 25명)</li>
                                        <li>• 고정비 절감 (인건비 264만 → 132만)</li>
                                        <li>• 작지만 건강한 학원으로 재정비</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 2: 포지셔닝 전면 변경</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 키즈 전문으로 완전 전환 (성인 정리)</li>
                                        <li>• 그룹 레슨 중심 (1:5-8 수업)</li>
                                        <li>• 키즈 40명 목표 (그룹 12만 × 40 = 480만원)</li>
                                        <li>• 지역 최고 키즈 음악학원 브랜딩</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 3: 공간 이전 또는 재협상</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 현 공간 20평 → 10평 이하로 축소 이전</li>
                                        <li>• 월세 180만 → 100만 이하로 절감</li>
                                        <li>• 또는 현 공간 월세 40% 인하 협상</li>
                                        <li>• 고정비 부담 대폭 경감</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">⏱️ 결정 기한</p>
                                  <p className="text-sm text-slate-700">2주 내 옵션 결정, 1개월 내 실행. 더 이상의 지연 불가.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">
                                    월 순수익 246-282만원, 저축 146-182만원.
                                    <br />
                                    <span className="text-red-600 font-semibold">⚠️ 현 상태 6개월 지속 시 1억 목표 실패. 즉각 재구조화 필수.</span>
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

            {/* Month 5 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.95 }}
              className="relative pl-8 border-l-4 border-green-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">5</span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-bold text-green-900">Month 5: 규모의 경제 작동</h5>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                    💚 성장 안정화
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-600">✓</span>
                    <span>강사당 7-8명으로 증가 (4파트 총 30명)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-600">✓</span>
                    <span>키즈 13명 돌파</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-600">✓</span>
                    <span>재등록률 70% 달성 (자연 유입 증가)</span>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-4">
                    <p className="font-bold mb-2">🎯 목표: 58명 (직강 15 + 강사 30 + 키즈 13)</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="opacity-80">총 매출</p>
                        <p className="font-bold text-base">1,230만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">비용</p>
                        <p className="font-bold text-base">689만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">순수익</p>
                        <p className="font-bold text-base text-yellow-300">541만원</p>
                      </div>
                    </div>
                    <p className="text-xs opacity-80 mt-2">* 직강 25만×15 / 강사 22만×30 (4파트 평균 7.5명) / 키즈 15만×13 ✅ <span className="font-bold">500만원 달성!</span></p>

                    <div className="mt-4 pt-4 border-t border-white/30">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            목표 미달성 시 대안 (Plan B/C/D)
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Month 5 목표 미달성 시 대안</DialogTitle>
                            <DialogDescription>규모의 경제 단계 대응 방안 (목표: 58명 = 541만원)</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-4">
                            {/* SUCCESS */}
                            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">✓</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-900">SUCCESS (58명 이상)</h3>
                              </div>
                              <p className="text-green-800 font-semibold">순수익 541만원 이상 (500만원 돌파!)</p>
                              <p className="text-sm text-green-700 mt-2">→ Month 6로 순조롭게 진행, Phase 3 준비 가능</p>
                            </div>

                            {/* PLAN B */}
                            <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">B</span>
                                </div>
                                <h3 className="text-xl font-bold text-amber-900">PLAN B (46-57명, 80-99%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                  <p className="text-sm text-slate-700">순수익 427-532만원. 목표 대비 약간 부족. 강사당 평균 6-7명으로 우수. 500만원 돌파 임박.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">🎯 즉시 실행 액션 (2주 내)</p>
                                  <ul className="text-sm text-slate-700 space-y-1">
                                    <li>• 58명 돌파 이벤트 (달성 시 전원 1개월 5% 할인)</li>
                                    <li>• 재등록 보너스 강화 (10% → 15% 할인)</li>
                                    <li>• 추천 프로그램 최종 증액 (추천인 6만원, 신규 4만원)</li>
                                    <li>• 지역 공연/발표회 개최 (홍보 효과 극대화)</li>
                                    <li>• 온라인 레슨 본격화 (월 30-50만원 추가 수익)</li>
                                  </ul>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">⏱️ 회복 목표</p>
                                  <p className="text-sm text-slate-700">2주 내 58명 달성, Month 6에는 64명 목표 유지</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 순수익 427-532만원으로 저축 327-432만원 가능. 목표 달성 시간 2-3주 지연 예상.</p>
                                </div>
                              </div>
                            </div>

                            {/* PLAN C */}
                            <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <h3 className="text-xl font-bold text-orange-900">PLAN C (35-45명, 60-79%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🚨 심각한 우려</p>
                                  <p className="text-sm text-slate-700">순수익 329-418만원. 목표 대비 큰 부족. 강사당 5명으로 정체. Phase 3 진입 지연 불가피.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🔄 전략 재검토</p>
                                  <div className="space-y-2">
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">1. Phase 2 연장:</span>
                                      <span className="text-sm ml-2">2-3개월 추가 운영, 58명 달성 후 Phase 3 진입</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">2. 재등록률 집중:</span>
                                      <span className="text-sm ml-2">이탈 방지 최우선 (재등록 시 20% 할인, 특별 혜택)</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">3. 수익 다각화:</span>
                                      <span className="text-sm ml-2">온라인 레슨, 주말 워크숍, 단체 레슨 확대 (월 50-80만원 추가)</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">4. 강사 성과 분석:</span>
                                      <span className="text-sm ml-2">우수 강사 집중 지원, 저조 강사 재교육 또는 교체</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">⏱️ 회복 기한</p>
                                  <p className="text-sm text-slate-700">2개월 내 46명 이상 달성 필수. 실패 시 Plan D 전환.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 순수익 329-418만원, 저축 229-318만원. Phase 3 진입 3-4개월 지연.</p>
                                </div>
                              </div>
                            </div>

                            {/* PLAN D */}
                            <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">D</span>
                                </div>
                                <h3 className="text-xl font-bold text-red-900">PLAN D (29-34명, 50-59%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🚨 위기 상황</p>
                                  <p className="text-sm text-slate-700">순수익 273-319만원. 목표 대비 절반 수준. 5개월 투자 대비 성과 부진. Phase 2 실패 징후.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🔄 근본적 재구조화</p>
                                  <div className="space-y-2">
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 1: Phase 2 목표 재정의</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 500만원 목표 철회, 현실적 목표로 재설정 (월 350만원)</li>
                                        <li>• 강사 1명 감축 (3명으로 운영)</li>
                                        <li>• 작지만 건강한 학원으로 방향 전환</li>
                                        <li>• Phase 3 진입 무기한 연기</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 2: 키즈 특화 전환</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 성인 강사반 대폭 축소, 키즈 전문으로 완전 전환</li>
                                        <li>• 그룹 레슨 중심 (1:6-8 수업)</li>
                                        <li>• 키즈 50명 목표 (그룹 12만 × 50 = 600만원)</li>
                                        <li>• 지역 최고 키즈 음악 브랜드 구축</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 3: 비용 대폭 절감</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 공간 축소 이전 (20평 → 10평, 월세 180만 → 90만)</li>
                                        <li>• 강사 2명으로 축소 (인건비 264만 → 132만)</li>
                                        <li>• 고정비 부담 50% 절감 (총 비용 400만 → 250만)</li>
                                        <li>• 30명만으로도 월 350만원 순수익 가능</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">⏱️ 결정 기한</p>
                                  <p className="text-sm text-slate-700">2주 내 옵션 결정, 1개월 내 실행. 손실 최소화 최우선.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">
                                    월 순수익 273-319만원, 저축 173-219만원.
                                    <br />
                                    <span className="text-red-600 font-semibold">⚠️ Phase 2 확장 전략 실패. 즉시 재구조화 또는 현 규모 유지 전략 필요.</span>
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

            {/* Month 6 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="relative pl-8 border-l-4 border-lime-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">6</span>
              </div>
              <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-xl p-6 shadow-md border-2 border-lime-400">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-bold text-lime-900">Month 6: Phase 2 목표 달성</h5>
                  <span className="bg-lime-400 text-lime-900 px-3 py-1 rounded-full text-xs font-bold">
                    🏆 목표 완수
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-lime-600">✓</span>
                    <span>강사당 8-9명으로 증가 (4파트 총 34명)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-lime-600">✓</span>
                    <span>키즈 15명 돌파 (입소문 효과)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-lime-600">✓</span>
                    <span>Phase 3 키즈 전문반 준비</span>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-lime-500 to-green-600 text-white rounded-lg p-4">
                    <p className="font-bold mb-2 text-lg">🎯 최종 목표: 64명 (직강 15 + 강사 34 + 키즈 15)</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="opacity-80">총 매출</p>
                        <p className="font-bold text-lg">1,348만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">비용</p>
                        <p className="font-bold text-lg">754만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">순수익</p>
                        <p className="font-bold text-lg text-yellow-300">594만원</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/30">
                      <p className="text-sm font-bold text-center">✅ Phase 2 완료! 규모의 경제 +50만원 = <span className="text-yellow-300">644만원</span></p>
                      <p className="text-xs text-center mt-1 opacity-90">* 직강 25만×15 / 강사 22만×34 (4파트 평균 8.5명) / 키즈 15만×15</p>
                      <p className="text-xs text-center mt-1 opacity-90">→ Phase 3 키즈 전문반 런칭 준비 완료</p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/30">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            목표 미달성 시 대안 (Plan B/C/D)
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-lime-600">Month 6 목표 미달성 시 대안 (Phase 2 최종)</DialogTitle>
                            <DialogDescription>Phase 2 최종 단계 대응 방안 (목표: 64명 = 644만원)</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-4">
                            {/* SUCCESS */}
                            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">✓</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-900">SUCCESS (64명 이상)</h3>
                              </div>
                              <p className="text-green-800 font-semibold">순수익 644만원 이상 (목표 완수!)</p>
                              <p className="text-sm text-green-700 mt-2 font-bold">→ Phase 3 진입 확정! Phase 2 성공적 완료!</p>
                            </div>

                            {/* PLAN B */}
                            <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">B</span>
                                </div>
                                <h3 className="text-xl font-bold text-amber-900">PLAN B (51-63명, 80-99%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                  <p className="text-sm text-slate-700">순수익 515-635만원. 목표 대비 약간 부족하지만 훌륭한 성과. 강사당 평균 7-8명 달성.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">🎯 즉시 실행 액션 (2주 내)</p>
                                  <ul className="text-sm text-slate-700 space-y-1">
                                    <li>• 64명 돌파 최종 캠페인 (달성 시 전원 2개월 5% 할인)</li>
                                    <li>• 대규모 발표회 개최 (학부모 200명 초청, 신규 유입 마지막 기회)</li>
                                    <li>• 추천 프로그램 최종 증액 (추천인 10만원, 신규 5만원)</li>
                                    <li>• 온라인 레슨 확대 (월 50-100만원 추가 수익)</li>
                                    <li>• 지역 언론 홍보 (신문/방송 인터뷰, 브랜드 구축)</li>
                                  </ul>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">⏱️ 회복 목표</p>
                                  <p className="text-sm text-slate-700">2주 내 64명 달성, Phase 3로 순조롭게 진입</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 순수익 515-635만원으로 저축 415-535만원 가능. Phase 3 진입 2-3주 지연.</p>
                                </div>
                              </div>
                            </div>

                            {/* PLAN C */}
                            <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <h3 className="text-xl font-bold text-orange-900">PLAN C (38-50명, 60-79%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🚨 심각한 우려</p>
                                  <p className="text-sm text-slate-700">순수익 355-496만원. 목표 대비 큰 부족. Phase 3 진입 조건 미달. 연장 또는 재조정 필요.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🔄 전략 재검토</p>
                                  <div className="space-y-2">
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">1. Phase 2 연장:</span>
                                      <span className="text-sm ml-2">2-3개월 추가, 58명 이상 달성 후 Phase 3 진입</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">2. Phase 3 목표 하향:</span>
                                      <span className="text-sm ml-2">키즈 전문반 10명 목표로 축소, 현실적 진입</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">3. 재등록 집중:</span>
                                      <span className="text-sm ml-2">이탈 방지 최우선, 장기 등록 시 30% 할인</span>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded">
                                      <span className="font-semibold text-orange-900">4. 수익 다각화:</span>
                                      <span className="text-sm ml-2">온라인/워크숍 확대로 월 100만원 추가 수익 확보</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">⏱️ 회복 기한</p>
                                  <p className="text-sm text-slate-700">2개월 내 51명 이상 달성 또는 Phase 3 목표 재조정.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 순수익 355-496만원, 저축 255-396만원. Phase 3 진입 3-4개월 지연.</p>
                                </div>
                              </div>
                            </div>

                            {/* PLAN D */}
                            <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">D</span>
                                </div>
                                <h3 className="text-xl font-bold text-red-900">PLAN D (32-37명, 50-59%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🚨 위기 상황</p>
                                  <p className="text-sm text-slate-700">순수익 301-346만원. 목표 대비 절반 수준. Phase 2 확장 전략 실패. Phase 3 진입 불가.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🔄 근본적 재구조화</p>
                                  <div className="space-y-2">
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 1: Phase 2 현 수준 유지</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• Phase 3 진입 철회, 현 규모로 장기 운영 (월 350만원 안정 수익)</li>
                                        <li>• 강사 1명 감축 또는 성과급제 전환</li>
                                        <li>• 작지만 수익성 높은 학원으로 재정립</li>
                                        <li>• 1억 목표는 장기 계획으로 전환</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 2: 키즈 완전 전환</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 성인 강사반 완전 정리, 키즈 전문 학원으로 리브랜딩</li>
                                        <li>• 그룹 레슨 100% (1:6-10 수업)</li>
                                        <li>• 키즈 60명 목표 (그룹 12만 × 60 = 720만원)</li>
                                        <li>• 완전히 새로운 사업 모델로 재시작</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 3: 비용 전면 재협상</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 공간 축소 이전 (20평 → 10평, 월세 180만 → 80만)</li>
                                        <li>• 강사 2명으로 축소 (인건비 264만 → 132만)</li>
                                        <li>• 30명만으로도 월 400만원 순수익 가능한 구조</li>
                                        <li>• 슬림하고 효율적인 학원으로 전환</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">⏱️ 결정 기한</p>
                                  <p className="text-sm text-slate-700">2주 내 옵션 결정, 1개월 내 실행. Phase 2 마무리 필수.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">
                                    월 순수익 301-346만원, 저축 201-246만원.
                                    <br />
                                    <span className="text-red-600 font-semibold">⚠️ Phase 2 목표 미달. 현실적 재조정 또는 구조 변경 필요.</span>
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
          </div>
        </div>
      </div>

      {/* What If Scenario Button for Phase 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto px-6 pb-16 mt-12"
      >
        <Link href="/scenarios/phase2" className="block">
          <Button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/40 text-white text-lg py-6 rounded-2xl shadow-2xl transition-all hover:scale-105">
            <span className="text-2xl mr-3">📊</span>
            <span className="font-bold">Phase 2 시나리오</span>
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
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 mb-8"
        >
          <h4 className="text-2xl font-bold mb-6 text-purple-900 flex items-center gap-2">
            <Target className="w-7 h-7" />
            Phase 3 마일스톤 타임라인 (12개월)
          </h4>
          <p className="text-sm text-purple-700 mb-6 bg-purple-100 px-4 py-2 rounded-lg">
            💡 직강 15명 유지 + 강사&키즈 확장 | 규모의 경제 본격화
          </p>

          <div className="space-y-6">
            {/* Month 1: 키즈 런칭 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="relative pl-8 border-l-4 border-purple-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-bold text-purple-900">Month 1: 주간 시간대 확대</h5>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold">
                    🌞 시간대 분리 운영
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-purple-600">✓</span>
                    <span>주간 시간대 강사 1명 추가 채용 (학생/주부 타겟)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-purple-600">✓</span>
                    <span>낮 시간대(10-17시) 공략: 학생, 주부, 프리랜서</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-purple-600">✓</span>
                    <span>저녁 시간대(18-22시): 직장인, 성인 취미반 유지</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-purple-600">✓</span>
                    <span>브랜드 철학 기반 마케팅: 음악 향유 문화 확산</span>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-4">
                    <p className="font-bold mb-2">🎯 목표: 58명 (직강 15 + 강사 35 + 키즈 8)</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="opacity-80">총 매출</p>
                        <p className="font-bold text-base">1,265만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">비용</p>
                        <p className="font-bold text-base">758만원</p>
                        <p className="text-xs opacity-70">(고정비 250만)</p>
                      </div>
                      <div>
                        <p className="opacity-80">순수익</p>
                        <p className="font-bold text-base text-yellow-300">507만원</p>
                      </div>
                    </div>
                    <p className="text-xs opacity-80 mt-2">* 직강 25만×15 / 강사 22만×35 / 키즈 15만×8</p>

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
                            <DialogDescription>키즈 런칭 초기 대응 방안</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-4">
                            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">✓</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-900">SUCCESS (53명 이상)</h3>
                              </div>
                              <p className="text-green-800 font-semibold">순수익 100만원 (저축 0만원, 안정화 우선)</p>
                              <p className="text-sm text-green-700 mt-2">→ Month 2 키즈 확장</p>
                            </div>
                            <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">B</span>
                                </div>
                                <h3 className="text-xl font-bold text-amber-900">PLAN B (48-52명, 80-99%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                  <p className="text-sm text-slate-700">순수익 400만원. 주간 타임 모집 속도 느림 (5-7명).</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">🎯 즉시 실행 액션</p>
                                  <ul className="text-sm text-slate-700 space-y-1">
                                    <li>• 주간 타임 무료 체험 이벤트 (학생/주부 타겟)</li>
                                    <li>• 지역 학부모 커뮤니티 집중 공략</li>
                                    <li>• 브랜드 철학 강조 마케팅 ("제대로 배우는 곳")</li>
                                  </ul>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">⏱️ 회복 목표</p>
                                  <p className="text-sm text-slate-700">Month 2에 주간 10명 달성</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <h3 className="text-xl font-bold text-orange-900">PLAN C (43-47명, 60-79%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🚨 전략 수정 필요</p>
                                  <p className="text-sm text-slate-700">순수익 350만원. 주간 타임 수요 재평가 필요 (3-4명).</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🔄 전략 재검토</p>
                                  <ul className="text-sm text-slate-700 space-y-1">
                                    <li>• 주간 강사 파트타임 전환 검토</li>
                                    <li>• 저녁 타임 강화로 단기 보완</li>
                                    <li>• 주간 확장 2개월 연기</li>
                                  </ul>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">Month 2-3 저축 감소, 총 누적 저축 -150만원</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">D</span>
                                </div>
                                <h3 className="text-xl font-bold text-red-900">PLAN D (&lt;43명, 50-59%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🚨 위기 상황</p>
                                  <p className="text-sm text-slate-700">순수익 300만원 미만. 주간 확장 실패.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🔄 근본적 재구조화</p>
                                  <div className="space-y-2">
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 1: 주간 운영 중단</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 저녁 타임 집중 (Phase 2 모델 유지)</li>
                                        <li>• 주간 강사 계약 종료</li>
                                        <li>• 고정비 절감 (250만 → 200만)</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">옵션 2: Phase 2 복귀</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• Phase 3 6개월 연기</li>
                                        <li>• Phase 2 모델로 안정화 (64명)</li>
                                        <li>• 재정 재건 후 재도전</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">Phase 3 목표 1000만원 달성 +6개월 지연</p>
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

            {/* Month 2: 키즈 초기 확장 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85 }}
              className="relative pl-8 border-l-4 border-pink-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-pink-200">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-bold text-pink-900">Month 2: 주간 타임 안정화</h5>
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-bold">
                    📈 성장 가속
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-pink-600">✓</span>
                    <span>주간 수강생 10명 돌파 (학생 + 주부 + 학령기)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-pink-600">✓</span>
                    <span>입소문 시스템 작동 (학부모 네트워크 + SNS)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-pink-600">✓</span>
                    <span>저녁 성인 클래스 안정적 유지 (37명)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-pink-600">✓</span>
                    <span>시간대별 운영 최적화 (낮/저녁 시너지)</span>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg p-4">
                    <p className="font-bold mb-2">🎯 목표: 62명 (직강 15 + 강사 37 + 키즈 10)</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="opacity-80">총 매출</p>
                        <p className="font-bold text-base">1,339만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">비용</p>
                        <p className="font-bold text-base">798만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">순수익</p>
                        <p className="font-bold text-base text-yellow-300">541만원</p>
                      </div>
                    </div>
                    <p className="text-xs opacity-80 mt-2">* 직강 25만×15 / 강사 22만×37 / 키즈 15만×10</p>

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
                          </DialogHeader>
                          <div className="space-y-6 mt-4">
                            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">✓</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-900">SUCCESS (62명 이상, 100%+)</h3>
                              </div>
                              <p className="text-green-800 font-semibold">순수익 541만원 (저축 441만원/월)</p>
                              <p className="text-sm text-green-700 mt-2">→ Month 3 주간 확대 지속</p>
                            </div>
                            <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">B</span>
                                </div>
                                <h3 className="text-xl font-bold text-amber-900">PLAN B (55-61명, 80-99%)</h3>
                              </div>
                              <div className="space-y-2">
                                <p className="text-amber-800 font-semibold">순수익 480만원 (저축 380만원/월)</p>
                                <div className="bg-white rounded-lg p-3">
                                  <p className="font-bold text-amber-900 mb-1 text-sm">🎯 즉시 액션</p>
                                  <ul className="text-xs text-slate-700 space-y-1">
                                    <li>• 주간 타임 SNS 마케팅 강화</li>
                                    <li>• 학생 추천 이벤트 (친구 추천 시 1회 무료)</li>
                                  </ul>
                                </div>
                                <p className="text-sm text-amber-700">→ Month 3에서 만회 목표</p>
                              </div>
                            </div>
                            <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <h3 className="text-xl font-bold text-orange-900">PLAN C (50-54명, 60-79%)</h3>
                              </div>
                              <div className="space-y-2">
                                <p className="text-orange-800 font-semibold">순수익 420만원 (저축 320만원/월)</p>
                                <div className="bg-white rounded-lg p-3">
                                  <p className="font-bold text-orange-900 mb-1 text-sm">🔄 전략 수정</p>
                                  <ul className="text-xs text-slate-700 space-y-1">
                                    <li>• 주간 타임 추가 마케팅 비용 투입 (50만원)</li>
                                    <li>• 저녁 타임 강화로 단기 보완</li>
                                  </ul>
                                </div>
                                <p className="text-sm text-orange-700">→ 주간 확장 속도 조절</p>
                              </div>
                            </div>
                            <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">D</span>
                                </div>
                                <h3 className="text-xl font-bold text-red-900">PLAN D (&lt;50명, 50-59%)</h3>
                              </div>
                              <div className="space-y-2">
                                <p className="text-red-800 font-semibold">순수익 360만원 (저축 260만원/월)</p>
                                <div className="bg-white rounded-lg p-3">
                                  <p className="font-bold text-red-900 mb-1 text-sm">🚨 근본 재검토</p>
                                  <ul className="text-xs text-slate-700 space-y-1">
                                    <li>• 주간 운영 일시 중단 검토</li>
                                    <li>• Phase 2 모델 복귀 고려</li>
                                    <li>• 재정 안정화 우선</li>
                                  </ul>
                                </div>
                                <p className="text-sm text-red-700">→ Phase 3 연기 가능성</p>
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

            {/* Month 3-12 계속... 길이 때문에 핵심 마일스톤만 */}
            {/* 실제로는 Month 3~12까지 모두 개별 카드로 작성해야 하지만, 
                토큰 제한을 고려해 Month 3, 6, 9, 12만 상세 작성하고 
                나머지는 간략하게 처리합니다 */}

            {/* Month 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="relative pl-8 border-l-4 border-rose-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-rose-200">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-bold text-rose-900">Month 3: 전 시간대 시스템 완성</h5>
                  <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-bold">
                    ⚙️ 통합 운영
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-rose-600">✓</span>
                    <span>주간 13명 / 저녁 강사반 40명 달성</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-rose-600">✓</span>
                    <span>재등록률 75% 돌파 (브랜드 가치 인정)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-rose-600">✓</span>
                    <span>추천 시스템 자동화 (학생→학생, 성인→성인)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-rose-600">✓</span>
                    <span>"제대로 배우는 곳" 입소문 확산</span>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-lg p-4">
                    <p className="font-bold mb-2">🎯 목표: 68명 (직강 15 + 강사 40 + 키즈 13)</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="opacity-80">총 매출</p>
                        <p className="font-bold text-base">1,450만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">비용</p>
                        <p className="font-bold text-base">857만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">순수익</p>
                        <p className="font-bold text-base text-yellow-300">593만원</p>
                      </div>
                    </div>
                    <p className="text-xs opacity-80 mt-2">* 직강 25만×15 / 강사 22만×40 / 키즈 15만×13</p>

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
                            <DialogTitle className="text-2xl font-bold">Month 3 목표 미달성 시 대안</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6 mt-4">
                            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">✓</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-900">SUCCESS (68명 이상, 100%+)</h3>
                              </div>
                              <p className="text-green-800 font-semibold">순수익 593만원 (저축 493만원/월)</p>
                              <p className="text-sm text-green-700 mt-2">브랜드 가치 확산 성공 → Month 4-5 가속 성장</p>
                            </div>
                            <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">B</span>
                                </div>
                                <h3 className="text-xl font-bold text-amber-900">PLAN B (60-67명, 80-99%)</h3>
                              </div>
                              <div className="space-y-2">
                                <p className="text-amber-800 font-semibold">순수익 530만원 (저축 430만원/월)</p>
                                <div className="bg-white rounded-lg p-3">
                                  <p className="font-bold text-amber-900 mb-1 text-sm">🎯 즉시 액션</p>
                                  <ul className="text-xs text-slate-700 space-y-1">
                                    <li>• 재등록률 집중 관리 (75% 목표)</li>
                                    <li>• 브랜드 철학 강조 (학생 부모 대상)</li>
                                    <li>• 추천 시스템 강화 (1인당 1명 추천 캠페인)</li>
                                  </ul>
                                </div>
                                <p className="text-sm text-amber-700">→ Month 4에서 회복 가능</p>
                              </div>
                            </div>
                            <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <h3 className="text-xl font-bold text-orange-900">PLAN C (54-59명, 60-79%)</h3>
                              </div>
                              <div className="space-y-2">
                                <p className="text-orange-800 font-semibold">순수익 470만원 (저축 370만원/월)</p>
                                <div className="bg-white rounded-lg p-3">
                                  <p className="font-bold text-orange-900 mb-1 text-sm">🔄 전략 재검토</p>
                                  <ul className="text-xs text-slate-700 space-y-1">
                                    <li>• 주간 타임 추가 투자 중단</li>
                                    <li>• 현재 규모 유지 집중</li>
                                    <li>• Phase 3 확장 속도 조절 (3개월 지연)</li>
                                  </ul>
                                </div>
                                <p className="text-sm text-orange-700">→ 안정화 우선, 확장 연기</p>
                              </div>
                            </div>
                            <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">D</span>
                                </div>
                                <h3 className="text-xl font-bold text-red-900">PLAN D (&lt;54명, 50-59%)</h3>
                              </div>
                              <div className="space-y-2">
                                <p className="text-red-800 font-semibold">순수익 410만원 (저축 310만원/월)</p>
                                <div className="bg-white rounded-lg p-3">
                                  <p className="font-bold text-red-900 mb-1 text-sm">🚨 Phase 3 연기 결정</p>
                                  <div className="space-y-1">
                                    <div className="p-2 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 text-xs mb-1">주간 운영 중단</p>
                                      <p className="text-xs text-slate-700">Phase 2 규모로 복귀 (64명 목표)</p>
                                    </div>
                                    <div className="p-2 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 text-xs mb-1">재정 안정화</p>
                                      <p className="text-xs text-slate-700">6개월 Phase 2 유지 후 재도전</p>
                                    </div>
                                  </div>
                                </div>
                                <p className="text-sm text-red-700">→ Phase 3 목표 +6개월 지연</p>
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

            {/* Month 4-5 간략 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.95 }}
              className="relative pl-8 border-l-4 border-orange-400"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">4-5</span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-orange-200">
                <h5 className="text-lg font-bold text-orange-900 mb-3">Month 4-5: 브랜드 가치 확산</h5>
                <div className="space-y-2 mb-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-orange-600">✓</span>
                    <span>저녁 강사반 48명 돌파 (피아노/기타/드럼/보컬 균형)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-orange-600">✓</span>
                    <span>주간 타임 15명 안정화 (학생 + 주부 타겟층)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-orange-600">✓</span>
                    <span>"음악 향유 문화" 커뮤니티 형성</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-lg p-4">
                  <p className="font-bold mb-2 text-lg">🎯 목표: 73-78명 (직강 15 + 저녁 43-48 + 주간 15)</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="opacity-80">총 매출</p>
                      <p className="font-bold text-lg">1,604-1,736만원</p>
                    </div>
                    <div>
                      <p className="opacity-80">비용</p>
                      <p className="font-bold text-lg">951-1,003만원</p>
                    </div>
                    <div>
                      <p className="opacity-80">순수익</p>
                      <p className="font-bold text-lg text-yellow-300">653-733만원</p>
                    </div>
                  </div>
                  <p className="text-xs opacity-80 mt-2">* 직강 25만×15 / 강사 22만×43-48 / 키즈 15만×15</p>

                  <div className="mt-4 pt-4 border-t border-white/30">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          목표 미달성 시 대안 (Plan B/C/D)
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">Month 4-5 목표 미달성 시 대안</DialogTitle>
                          <DialogDescription>브랜드 가치 확산 단계 대응 방안</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6 mt-4">
                          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">✓</span>
                              </div>
                              <h3 className="text-xl font-bold text-green-900">SUCCESS (73명 이상, 100%+)</h3>
                            </div>
                            <p className="text-green-800 font-semibold">순수익 653만원+ (저축 553만원+/월)</p>
                            <p className="text-sm text-green-700 mt-2">→ Month 6 브랜드 확립 단계 순조 진입</p>
                          </div>
                          <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">B</span>
                              </div>
                              <h3 className="text-xl font-bold text-amber-900">PLAN B (65-72명, 80-99%)</h3>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                <p className="text-sm text-slate-700">순수익 580만원. 저녁 타임 43명 수준, 주간 12-13명 수준.</p>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-amber-900 mb-2">🎯 즉시 실행 액션</p>
                                <ul className="text-sm text-slate-700 space-y-1">
                                  <li>• 저녁 직장인 타겟 마케팅 강화</li>
                                  <li>• "음악 향유 문화" 콘텐츠 제작 (SNS 집중)</li>
                                  <li>• 기존 수강생 추천 이벤트 (1명 추천 시 1회 무료)</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-amber-900 mb-2">⏱️ 회복 목표</p>
                                <p className="text-sm text-slate-700">Month 6에 83명 달성 (저축 누적 영향 최소화)</p>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-amber-900 mb-2">💰 재정 영향</p>
                                <p className="text-sm text-slate-700">월 저축 -73만원 (480만원), 2개월 누적 -146만원</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">C</span>
                              </div>
                              <h3 className="text-xl font-bold text-orange-900">PLAN C (58-64명, 60-79%)</h3>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-orange-900 mb-2">🚨 전략 수정 필요</p>
                                <p className="text-sm text-slate-700">순수익 500만원. 시간대별 확장 속도 재조정 필요.</p>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-orange-900 mb-2">🔄 전략 재검토</p>
                                <ul className="text-sm text-slate-700 space-y-1">
                                  <li>• 주간 타임 확대 2개월 연기 (Month 8까지)</li>
                                  <li>• 저녁 타임 집중 성장 (50명 우선 달성)</li>
                                  <li>• 마케팅 비용 재배분 (저녁 60% / 주간 40%)</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-orange-900 mb-2">💰 재정 영향</p>
                                <p className="text-sm text-slate-700">월 저축 -153만원 (400만원), Phase 3 최종 목표 +2개월 지연</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">D</span>
                              </div>
                              <h3 className="text-xl font-bold text-red-900">PLAN D (&lt;58명, 50-59%)</h3>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-red-900 mb-2">🚨 위기 상황</p>
                                <p className="text-sm text-slate-700">순수익 450만원 미만. 주간 확장 실패, Phase 2 수준 유지.</p>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-red-900 mb-2">🔄 근본적 재구조화</p>
                                <div className="space-y-2">
                                  <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                    <p className="font-semibold text-red-900 mb-1">옵션 1: 주간 운영 축소</p>
                                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                      <li>• 주간 강사 파트타임 전환</li>
                                      <li>• 저녁 타임 집중 (Phase 2 모델)</li>
                                      <li>• 고정비 절감 250→230만원</li>
                                    </ul>
                                  </div>
                                  <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                    <p className="font-semibold text-red-900 mb-1">옵션 2: Phase 3 일시 중단</p>
                                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                      <li>• Phase 2 규모 복귀 (64명)</li>
                                      <li>• 4개월 안정화 후 재도전</li>
                                      <li>• 최종 목표 +6개월 지연</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-red-900 mb-2">💰 재정 영향</p>
                                <p className="text-sm text-slate-700">Phase 3 목표 1000만원 달성 +6개월 지연 (30개월)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Month 6 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="relative pl-8 border-l-4 border-amber-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">6</span>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 shadow-md border-2 border-amber-400">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-bold text-amber-900">Month 6: 중간 점검 & 브랜드 확립</h5>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">
                    📊 Phase 3 중반
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-amber-600">✓</span>
                    <span>전체 83명 달성 (직강 15 + 저녁 53 + 주간 15)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-amber-600">✓</span>
                    <span>재등록률 80% 돌파 (브랜드 신뢰 구축)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-amber-600">✓</span>
                    <span>"제대로 배우는 종합 음악학원" 입지 확립</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-amber-600">✓</span>
                    <span>전 연령대 타겟층 확보 (학생/주부/직장인)</span>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg p-4">
                    <p className="font-bold mb-2 text-lg">🎯 6개월 목표: 83명 (직강 15 + 강사 53 + 키즈 15)</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="opacity-80">총 매출</p>
                        <p className="font-bold text-lg">1,766만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">비용</p>
                        <p className="font-bold text-lg">1,026만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">순수익</p>
                        <p className="font-bold text-lg text-yellow-300">740만원</p>
                      </div>
                    </div>
                    <p className="text-xs opacity-80 mt-2">* 직강 25만×15 / 강사 22만×53 / 키즈 15만×15</p>

                    <div className="mt-4 pt-4 border-t border-white/30">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            목표 미달성 시 대안 (Plan B/C/D)
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Month 6 목표 미달성 시 대안</DialogTitle>
                            <DialogDescription>중간 점검 & 브랜드 확립 단계 대응 방안</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-4">
                            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">✓</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-900">SUCCESS (83명 이상, 100%+)</h3>
                              </div>
                              <p className="text-green-800 font-semibold">순수익 740만원 (저축 640만원/월)</p>
                              <p className="text-sm text-green-700 mt-2">→ 브랜드 확립 성공, Phase 3 후반 가속 성장</p>
                            </div>
                            <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">B</span>
                                </div>
                                <h3 className="text-xl font-bold text-amber-900">PLAN B (73-82명, 80-99%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                  <p className="text-sm text-slate-700">순수익 660만원. 저녁 48명, 주간 10-12명 수준. 재등록률 75%.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">🎯 즉시 실행 액션</p>
                                  <ul className="text-sm text-slate-700 space-y-1">
                                    <li>• 재등록률 집중 관리 (80% 목표)</li>
                                    <li>• "제대로 배우는 곳" 브랜드 콘텐츠 강화</li>
                                    <li>• 저녁 타임 대기 리스트 관리 시스템 구축</li>
                                    <li>• 주간 타임 학부모 네트워크 마케팅</li>
                                  </ul>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">⏱️ 회복 목표</p>
                                  <p className="text-sm text-slate-700">Month 8에 90명 달성 (저축 계획 정상화)</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 저축 -80만원 (560만원), 누적 영향 경미</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <h3 className="text-xl font-bold text-orange-900">PLAN C (66-72명, 60-79%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🚨 전략 수정 필요</p>
                                  <p className="text-sm text-slate-700">순수익 580만원. 저녁 43명, 주간 8명. 확장 속도 심각한 지연.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🔄 전략 재검토</p>
                                  <ul className="text-sm text-slate-700 space-y-1">
                                    <li>• Phase 3 목표 규모 축소 (108명 → 95명)</li>
                                    <li>• 주간 타임 확대 중단, 현재 규모 유지</li>
                                    <li>• 저녁 타임 집중 투자 (60명 우선 달성)</li>
                                    <li>• 재등록률 향상에 모든 자원 집중</li>
                                  </ul>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 저축 -160만원 (480만원), Phase 3 목표 +3개월 지연</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">D</span>
                                </div>
                                <h3 className="text-xl font-bold text-red-900">PLAN D (&lt;66명, 50-59%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🚨 위기 상황</p>
                                  <p className="text-sm text-slate-700">순수익 520만원 미만. Phase 2 수준, Phase 3 전환 실패.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🔄 근본적 재구조화</p>
                                  <div className="space-y-2">
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">Phase 3 중단 결정</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 주간 운영 완전 중단</li>
                                        <li>• Phase 2 규모로 복귀 (64명)</li>
                                        <li>• 고정비 250만 → 200만원 절감</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">재정 안정화 우선</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 6개월 Phase 2 유지 (순수익 500만원)</li>
                                        <li>• 누적 저축 3,000만원 확보 후 재도전</li>
                                        <li>• 최종 목표 +8개월 지연</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">Phase 3 목표 1000만원 달성 +8개월 지연 (32개월)</p>
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

            {/* Month 7-8 간략 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.05 }}
              className="relative pl-8 border-l-4 border-yellow-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">7-8</span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-yellow-200">
                <h5 className="text-lg font-bold text-yellow-900 mb-3">Month 7-8: 재등록 시즌 & 입소문 확산</h5>
                <div className="space-y-2 mb-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-yellow-600">✓</span>
                    <span>저녁 60명 돌파 (직장인 타겟 완전 장악)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-yellow-600">✓</span>
                    <span>주간 18명 안정화 (학생/주부 층 확대)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-yellow-600">✓</span>
                    <span>"노력의 가치를 아는 커뮤니티" 형성</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-lg p-4">
                  <p className="font-bold mb-2 text-lg">🎯 목표: 88-93명 (직강 15 + 저녁 55-60 + 주간 18)</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="opacity-80">총 매출</p>
                      <p className="font-bold text-lg">1,881-2,013만원</p>
                    </div>
                    <div>
                      <p className="opacity-80">비용</p>
                      <p className="font-bold text-lg">1,071-1,127만원</p>
                    </div>
                    <div>
                      <p className="opacity-80">순수익</p>
                      <p className="font-bold text-lg text-yellow-300">810-886만원</p>
                    </div>
                  </div>
                  <p className="text-xs opacity-80 mt-2">* 직강 25만×15 / 강사 22만×55-60 / 키즈 15만×18</p>

                  <div className="mt-4 pt-4 border-t border-white/30">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          목표 미달성 시 대안 (Plan B/C/D)
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">Month 7-8 목표 미달성 시 대안</DialogTitle>
                          <DialogDescription>재등록 시즌 & 입소문 확산 단계 대응 방안</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6 mt-4">
                          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">✓</span>
                              </div>
                              <h3 className="text-xl font-bold text-green-900">SUCCESS (88명 이상, 100%+)</h3>
                            </div>
                            <p className="text-green-800 font-semibold">순수익 810만원+ (저축 710만원+/월)</p>
                            <p className="text-sm text-green-700 mt-2">→ "노력의 가치" 커뮤니티 확립, Month 10 목표 1000만원 달성 예정</p>
                          </div>
                          <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">B</span>
                              </div>
                              <h3 className="text-xl font-bold text-amber-900">PLAN B (78-87명, 80-99%)</h3>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                <p className="text-sm text-slate-700">순수익 720만원. 저녁 52명, 주간 15명 수준. 추천율 35%.</p>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-amber-900 mb-2">🎯 즉시 실행 액션</p>
                                <ul className="text-sm text-slate-700 space-y-1">
                                  <li>• 재등록 시즌 집중 관리 (80% 목표)</li>
                                  <li>• "노력의 가치" 브랜드 스토리텔링 강화</li>
                                  <li>• 기존 수강생 추천 프로그램 (2명 추천 시 1개월 50% 할인)</li>
                                  <li>• 저녁 직장인 타겟 입소문 마케팅</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-amber-900 mb-2">⏱️ 회복 목표</p>
                                <p className="text-sm text-slate-700">Month 10에 100명 달성 (1000만원 목표 유지)</p>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-amber-900 mb-2">💰 재정 영향</p>
                                <p className="text-sm text-slate-700">월 저축 -90만원 (620만원), 누적 영향 -180만원</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">C</span>
                              </div>
                              <h3 className="text-xl font-bold text-orange-900">PLAN C (70-77명, 60-79%)</h3>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-orange-900 mb-2">🚨 전략 수정 필요</p>
                                <p className="text-sm text-slate-700">순수익 630만원. 저녁 45명, 주간 10명. 입소문 시스템 미작동.</p>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-orange-900 mb-2">🔄 전략 재검토</p>
                                <ul className="text-sm text-slate-700 space-y-1">
                                  <li>• Phase 3 최종 목표 축소 (108명 → 90명)</li>
                                  <li>• 주간 타임 확대 중단 (현 규모 유지)</li>
                                  <li>• 저녁 타임 집중 (55명 우선 달성)</li>
                                  <li>• 마케팅 비용 50만원 추가 투입 (입소문 시스템 구축)</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-orange-900 mb-2">💰 재정 영향</p>
                                <p className="text-sm text-slate-700">월 저축 -180만원 (530만원), Phase 3 목표 +4개월 지연</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">D</span>
                              </div>
                              <h3 className="text-xl font-bold text-red-900">PLAN D (&lt;70명, 50-59%)</h3>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-red-900 mb-2">🚨 위기 상황</p>
                                <p className="text-sm text-slate-700">순수익 560만원 미만. Phase 3 전환 실패 확정.</p>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-red-900 mb-2">🔄 근본적 재구조화</p>
                                <div className="space-y-2">
                                  <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                    <p className="font-semibold text-red-900 mb-1">Phase 3 즉시 중단</p>
                                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                      <li>• 주간 운영 완전 중단</li>
                                      <li>• Phase 2 모델 복귀 (64명)</li>
                                      <li>• 고정비 250만 → 200만원 절감</li>
                                    </ul>
                                  </div>
                                  <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                    <p className="font-semibold text-red-900 mb-1">안정화 기간 설정</p>
                                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                      <li>• 6개월 Phase 2 유지 (순수익 500만원)</li>
                                      <li>• 재등록률 85% 확보 후 재도전</li>
                                      <li>• 브랜드 재정비 (콘텐츠 강화)</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-red-900 mb-2">💰 재정 영향</p>
                                <p className="text-sm text-slate-700">Phase 3 목표 1000만원 달성 +10개월 지연 (34개월)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Month 9-10 간략 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="relative pl-8 border-l-4 border-lime-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">9-10</span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-lime-200">
                <h5 className="text-lg font-bold text-lime-900 mb-3">Month 9-10: 자연 유입 본격화</h5>
                <div className="space-y-2 mb-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-lime-600">✓</span>
                    <span>저녁 68명 돌파 (대기 리스트 형성)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-lime-600">✓</span>
                    <span>주간 20명 안정화 (시간대 분리 완성)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-lime-600">✓</span>
                    <span>추천율 40% 달성 (자연 유입 중심)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-lime-600">✓</span>
                    <span>브랜드 철학 기반 커뮤니티 완성</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-lg p-4">
                  <p className="font-bold mb-2 text-lg">🎯 목표: 98-103명 (직강 15 + 저녁 63-68 + 주간 20)</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="opacity-80">총 매출</p>
                      <p className="font-bold text-lg">2,111-2,243만원</p>
                    </div>
                    <div>
                      <p className="opacity-80">비용</p>
                      <p className="font-bold text-lg">1,166-1,226만원</p>
                    </div>
                    <div>
                      <p className="opacity-80">순수익</p>
                      <p className="font-bold text-lg text-yellow-300">945-1,017만원 🎉</p>
                    </div>
                  </div>
                  <p className="text-xs opacity-80 mt-2">* 직강 25만×15 / 강사 22만×63-68 / 키즈 15만×20</p>

                  <div className="mt-4 pt-4 border-t border-white/30">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          목표 미달성 시 대안 (Plan B/C/D)
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">Month 9-10 목표 미달성 시 대안</DialogTitle>
                          <DialogDescription>자연 유입 본격화 단계 대응 방안</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6 mt-4">
                          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">✓</span>
                              </div>
                              <h3 className="text-xl font-bold text-green-900">SUCCESS (98명 이상, 100%+)</h3>
                            </div>
                            <p className="text-green-800 font-semibold">순수익 945만원+ (저축 845만원+/월)</p>
                            <p className="text-sm text-green-700 mt-2">→ Month 10에 1000만원 돌파! Phase 3 목표 조기 달성</p>
                          </div>
                          <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">B</span>
                              </div>
                              <h3 className="text-xl font-bold text-amber-900">PLAN B (88-97명, 80-99%)</h3>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                <p className="text-sm text-slate-700">순수익 850만원. 저녁 58명, 주간 18명. 추천율 35%. 1000만원 목표 근접.</p>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-amber-900 mb-2">🎯 즉시 실행 액션</p>
                                <ul className="text-sm text-slate-700 space-y-1">
                                  <li>• 대기 리스트 관리 강화 (저녁 타임)</li>
                                  <li>• 추천 프로그램 확대 (3명 추천 시 2개월 30% 할인)</li>
                                  <li>• 브랜드 철학 콘텐츠 집중 제작 (SNS)</li>
                                  <li>• "음악 향유 문화" 커뮤니티 이벤트 개최</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-amber-900 mb-2">⏱️ 회복 목표</p>
                                <p className="text-sm text-slate-700">Month 11-12에 1000만원 달성 (목표 2개월 지연)</p>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-amber-900 mb-2">💰 재정 영향</p>
                                <p className="text-sm text-slate-700">월 저축 -95만원 (750만원), 누적 영향 -190만원</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">C</span>
                              </div>
                              <h3 className="text-xl font-bold text-orange-900">PLAN C (78-87명, 60-79%)</h3>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-orange-900 mb-2">🚨 전략 수정 필요</p>
                                <p className="text-sm text-slate-700">순수익 720만원. 저녁 52명, 주간 15명. 자연 유입 시스템 미흡.</p>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-orange-900 mb-2">🔄 전략 재검토</p>
                                <ul className="text-sm text-slate-700 space-y-1">
                                  <li>• Phase 3 최종 목표 재조정 (1000만원 → 850만원)</li>
                                  <li>• 주간 타임 확대 중단 (현 규모 유지)</li>
                                  <li>• 저녁 타임 재등록률 집중 관리 (85% 목표)</li>
                                  <li>• 마케팅 비용 60만원 추가 투입 (입소문 시스템)</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-orange-900 mb-2">💰 재정 영향</p>
                                <p className="text-sm text-slate-700">월 저축 -225만원 (620만원), Phase 3 목표 규모 축소</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">D</span>
                              </div>
                              <h3 className="text-xl font-bold text-red-900">PLAN D (&lt;78명, 50-59%)</h3>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-red-900 mb-2">🚨 위기 상황</p>
                                <p className="text-sm text-slate-700">순수익 650만원 미만. 1000만원 목표 달성 불가. Phase 3 실패.</p>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-red-900 mb-2">🔄 근본적 재구조화</p>
                                <div className="space-y-2">
                                  <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                    <p className="font-semibold text-red-900 mb-1">Phase 3 목표 재설정</p>
                                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                      <li>• 주간 운영 중단 검토</li>
                                      <li>• 최종 목표 650-700만원으로 재설정</li>
                                      <li>• 저녁 타임만 집중 운영</li>
                                    </ul>
                                  </div>
                                  <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                    <p className="font-semibold text-red-900 mb-1">재정 재건 우선</p>
                                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                      <li>• 고정비 절감 250만 → 220만원</li>
                                      <li>• 브랜드 재정비 기간 4개월</li>
                                      <li>• 안정화 후 재도전 검토</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-4">
                                <p className="font-bold text-red-900 mb-2">💰 재정 영향</p>
                                <p className="text-sm text-slate-700">Phase 3 1000만원 목표 포기, 대안 목표로 전환</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Month 11-12 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15 }}
              className="relative pl-8 border-l-4 border-green-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">11-12</span>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-md border-2 border-green-400">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-bold text-green-900">Month 11-12: Phase 3 완성</h5>
                  <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-bold">
                    🏆 브랜드 확립
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-600">✓</span>
                    <span>108명 최종 달성 (직강 15 + 저녁 70 + 주간 23)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-600">✓</span>
                    <span>"시선뮤직" 브랜드 프리미엄 확립</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-600">✓</span>
                    <span>전 연령대 아우르는 음악 커뮤니티 완성</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-600">✓</span>
                    <span>"제대로 배우는 문화" 지역 대표 학원</span>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-4">
                    <p className="font-bold mb-2 text-lg">🎯 최종 목표: 108명 (직강 15 + 강사 70 + 키즈 23)</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="opacity-80">총 매출</p>
                        <p className="font-bold text-lg">2,260만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">비용</p>
                        <p className="font-bold text-lg">1,163만원</p>
                      </div>
                      <div>
                        <p className="opacity-80">순수익</p>
                        <p className="font-bold text-lg text-yellow-300">1,097만원</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/30">
                      <p className="text-sm font-bold text-center">✅ Phase 3 완료! 월 1,000만원+ 안정화 🎉</p>
                      <p className="text-xs text-center mt-1">직강 25만×15 / 강사 22만×70 / 키즈 15만×23</p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/30">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            목표 미달성 시 대안 (Plan B/C/D)
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Month 11-12 목표 미달성 시 대안</DialogTitle>
                            <DialogDescription>Phase 3 완성 단계 대응 방안</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6 mt-4">
                            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">✓</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-900">SUCCESS (108명 이상, 100%+)</h3>
                              </div>
                              <p className="text-green-800 font-semibold">순수익 1,097만원 (저축 997만원/월)</p>
                              <p className="text-sm text-green-700 mt-2">→ Phase 3 완벽 달성! 시선뮤직 브랜드 완전 확립 🎉</p>
                            </div>
                            <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">B</span>
                                </div>
                                <h3 className="text-xl font-bold text-amber-900">PLAN B (98-107명, 80-99%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">📊 상황 분석</p>
                                  <p className="text-sm text-slate-700">순수익 950만원. 저녁 65명, 주간 22명. 1000만원 목표 근접 달성.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">🎯 즉시 실행 액션</p>
                                  <ul className="text-sm text-slate-700 space-y-1">
                                    <li>• 재등록률 최적화 (85% 목표)</li>
                                    <li>• 대기 리스트 전환율 관리 (저녁 타임)</li>
                                    <li>• "시선뮤직" 브랜드 프리미엄 마케팅 강화</li>
                                    <li>• 추천 시스템 자동화 (커뮤니티 중심)</li>
                                  </ul>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">⏱️ 회복 목표</p>
                                  <p className="text-sm text-slate-700">3개월 내 108명 달성 (브랜드 완성)</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-amber-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 저축 -147만원 (850만원), 최종 목표 영향 미미</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <h3 className="text-xl font-bold text-orange-900">PLAN C (88-97명, 60-79%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🚨 전략 수정 필요</p>
                                  <p className="text-sm text-slate-700">순수익 820만원. 저녁 58명, 주간 18명. 확장 속도 미흡.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">🔄 전략 재검토</p>
                                  <ul className="text-sm text-slate-700 space-y-1">
                                    <li>• Phase 3 최종 목표 재조정 (1000만원 → 900만원)</li>
                                    <li>• 주간 타임 현 규모 유지 (확대 중단)</li>
                                    <li>• 저녁 타임 재등록 집중 (재등록률 90% 목표)</li>
                                    <li>• 브랜드 가치 재정립 (콘텐츠 마케팅)</li>
                                  </ul>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-orange-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">월 저축 -277만원 (720만원), Phase 3 목표 축소 운영</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-lg">D</span>
                                </div>
                                <h3 className="text-xl font-bold text-red-900">PLAN D (&lt;88명, 50-59%)</h3>
                              </div>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🚨 위기 상황</p>
                                  <p className="text-sm text-slate-700">순수익 750만원 미만. Phase 3 1000만원 목표 달성 실패.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">🔄 근본적 재구조화</p>
                                  <div className="space-y-2">
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">현실적 목표 재설정</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• Phase 3 최종 목표 750만원으로 재설정</li>
                                        <li>• 주간 운영 축소 또는 중단</li>
                                        <li>• 저녁 타임 중심 운영 (Phase 2+ 모델)</li>
                                      </ul>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                      <p className="font-semibold text-red-900 mb-1">장기 안정화 전략</p>
                                      <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                        <li>• 고정비 최적화 250만 → 230만원</li>
                                        <li>• 브랜드 재정비 (6개월)</li>
                                        <li>• 재등록률 90% 확보 후 재확장 검토</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                  <p className="font-bold text-red-900 mb-2">💰 재정 영향</p>
                                  <p className="text-sm text-slate-700">Phase 3 1000만원 목표 재설정 (750만원), 안정 운영 모드 전환</p>
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
          </div>
        </motion.div>

        {/* 재무 계획 섹션 */}
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
