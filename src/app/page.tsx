"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Target, Lightbulb, BarChart3, Video, FileText, Youtube } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div variants={fadeInUp} className="text-center space-y-8">
            <Badge className="text-base px-6 py-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
              2025.11 - 2027.08 로드맵
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Life Safety Net
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
              시선뮤직 · 세타쓴 브랜드로 만드는 우리의 안정적인 미래
            </p>
          </motion.div>

          {/* Timeline Overview */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { phase: "Phase 1", title: "Pre-Open", period: "2025.11 - 2026.02", goal: "300만원/월", color: "indigo", active: true },
              { phase: "Phase 2", title: "Open", period: "2026.03 - 2026.08", goal: "500만원/월", color: "blue", active: false },
              { phase: "Phase 3", title: "Deep Dive", period: "2026.09 부터", goal: "1,100만원/월", color: "purple", active: false }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative"
              >
                <Card className={`${item.active ? 'border-indigo-500 border-2 shadow-xl' : 'border-slate-200'} transition-all duration-300`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                        item.active ? 'bg-indigo-600' : 'bg-slate-300'
                      }`}>
                        {index + 1}
                      </div>
                      <Badge variant={item.active ? "default" : "outline"}>{item.phase}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <p className="text-sm text-slate-600 mb-1">목표 월 순수익</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {item.goal}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Phase 1: Pre-Open */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden border-2 border-indigo-200 shadow-2xl">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 px-8 py-6">
              <Badge className="mb-3 bg-white/20 text-white border-white/30">Phase 1: Foundation</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Pre-Open Phase</h2>
              <p className="text-indigo-100 text-lg">2025.11 - 2026.02 (5개월)</p>
            </div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    5개월간 교습활동을 합니다. 유료작업실을 구해 정규 사업자등록 전까지 시장테스트 및 타겟 고객을 미리 확보하는 단계를 거칩니다.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: Target, text: "신뢰도 구축을 위한 브랜딩, 이미지 빌드" },
                      { icon: TrendingUp, text: "유튜브, VOD 강의 제작/판매, 오프라인 및 인스타그램 광고" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                        <item.icon className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-700">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl border-2 border-indigo-200">
                  <div className="text-center space-y-4">
                    <DollarSign className="w-12 h-12 mx-auto text-indigo-600" />
                    <div>
                      <p className="text-sm text-slate-600 mb-2">목표 월 순수익</p>
                      <p className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                        300<span className="text-2xl">만원</span>
                      </p>
                    </div>
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-indigo-800">💡 실업급여 5개월 수령</p>
                      <p className="text-xs text-indigo-600 mt-1">(아버지 명의로 수강비 수령)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-sm text-amber-800">
                  <strong>Pre-season 전략:</strong> 얼리버드 레슨비 20만원으로 퍼널 초입 극대화
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Phase 2: Open */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden border-2 border-blue-200 shadow-2xl">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-6">
              <Badge className="mb-3 bg-white/20 text-white border-white/30">Phase 2: Launch</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Open Phase: 정규 학원 오픈</h2>
              <p className="text-blue-100 text-lg">2026.03 - 2026.08 (6개월 / 24주간)</p>
            </div>
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                정식 학원을 오픈합니다. 단순 교습소가 아닌 20평 이상의 '종합 실용음악학원'으로 포지셔닝합니다.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    수익 포트폴리오
                  </h3>
                  {[
                    { name: "키즈", fee: "15만원", margin: "80만원", students: "10명당", color: "teal" },
                    { name: "성인", fee: "22만원", margin: "110만원", students: "10명당", color: "sky" },
                    { name: "보컬 직강", fee: "25/40만원", margin: "250만원", students: "10명당", color: "indigo" }
                  ].map((item, index) => (
                    <div key={index} className={`p-4 bg-${item.color}-50 border border-${item.color}-200 rounded-lg`}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-slate-900">{item.name}</p>
                          <p className="text-sm text-slate-600">수강료 {item.fee}</p>
                        </div>
                        <Badge variant="outline">{item.students}</Badge>
                      </div>
                      <p className="text-2xl font-bold text-slate-900">마진 {item.margin}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200 flex flex-col justify-center">
                  <div className="text-center space-y-4">
                    <BarChart3 className="w-16 h-16 mx-auto text-blue-600" />
                    <div>
                      <p className="text-sm text-slate-600 mb-2">최종 목표 월 순수익</p>
                      <p className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        500<span className="text-3xl">만원</span>
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white/60 p-3 rounded-lg">
                        <p className="text-slate-600">월 고정비</p>
                        <p className="font-semibold text-slate-900">약 200만원</p>
                        <p className="text-xs text-slate-500">(월세 100만 + 광고 50만 + α)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  운영 전략
                </h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• <strong>수요 타겟:</strong> 피아노, 기타, 드럼 (특히 수요가 높은 드럼)</li>
                  <li>• <strong>시간 운영:</strong> 낮 타임(키즈/그룹레슨/강사) / 오후 타임(성인)</li>
                  <li>• <strong>가격 정책:</strong> 키즈(15만원), 성인취미(22만원), 보컬 원장직강(25/40만원), 크루클래스(초프리미엄)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Phase 3: Deep Dive */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden border-2 border-purple-200 shadow-2xl">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-6">
              <Badge className="mb-3 bg-white/20 text-white border-white/30">Phase 3: Scaling</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Deep Dive Main Phase</h2>
              <p className="text-purple-100 text-lg">2026.09 부터 - 상승 궤도</p>
            </div>
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
                컨텐츠 마케팅과 찐팬유저들이 생겨나고 내 브랜드의 코어층이 100명 이상 구축 됐을 성숙기의 시작입니다.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    성장 지표
                  </h3>
                  <div className="space-y-3">
                    {[
                      "코어층 100명+ 구축: '찐팬' 유저 확보로 브랜드 성숙기 진입",
                      "업계 평균: 구독자 1~3만, 하루 6타임, 주 5일 운영 시 750만원",
                      "BM 고도화 시 1,000만원 이상 다수 사례"
                    ].map((text, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-slate-700">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mt-6">
                    <div className="bg-purple-100 p-4 rounded-lg border border-purple-200">
                      <p className="text-sm text-purple-700 mb-1">보컬 수강생 직강</p>
                      <p className="text-xl font-bold text-purple-900">20명 · 500만원</p>
                    </div>
                    <div className="bg-purple-100 p-4 rounded-lg border border-purple-200">
                      <p className="text-sm text-purple-700 mb-1">강사 클래스 마진</p>
                      <p className="text-xl font-bold text-purple-900">60명 · 600만원</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200 flex flex-col justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <DollarSign className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-2">목표 월 순수익 (마진)</p>
                      <p className="text-7xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        1,100<span className="text-4xl">만원</span>
                      </p>
                    </div>
                    <p className="text-sm text-slate-600">
                      (보컬 직강 500만 + 강사 마진 600만)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Financial Plan */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="text-base px-6 py-2 mb-4 bg-green-100 text-green-700">Financial Plan</Badge>
          <h2 className="text-4xl font-bold mb-4">24개월 재무 계획</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            이 모든 계획은 '보여주기'가 아닌, '우리의 안정적인 미래'를 실현하기 위한 구체적인 재무 계획입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-green-400 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">Target Plan: 18개월 9,000만원</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-end justify-around gap-4 mb-8">
                <motion.div
                  className="flex-1 flex flex-col items-center"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <div className="w-full h-32 bg-slate-200 rounded-t-lg flex items-start justify-center pt-2">
                    <span className="text-xs font-medium text-slate-600">Pre-Open</span>
                  </div>
                </motion.div>
                <motion.div
                  className="flex-1 flex flex-col items-center"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="w-full h-40 bg-green-300 rounded-t-lg flex flex-col items-center justify-start pt-2">
                    <span className="text-sm font-bold text-green-800">1,800만</span>
                    <span className="text-xs font-medium text-green-700 mt-1">Open</span>
                  </div>
                </motion.div>
                <motion.div
                  className="flex-1 flex flex-col items-center"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="w-full h-48 bg-green-500 rounded-t-lg flex flex-col items-center justify-start pt-2">
                    <span className="text-lg font-bold text-white">9,000만</span>
                    <span className="text-xs font-medium text-green-100 mt-1">Deep Dive</span>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-3 border-t pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Open phase 매달 저축</span>
                  <span className="font-bold">300만원 × 6개월 = 1,800만원</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Deep Dive 매달 저축</span>
                  <span className="font-bold">600만원 × 12개월 = 7,200만원</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t">
                  <span className="text-lg font-semibold text-slate-900">총 저축액</span>
                  <span className="text-2xl font-bold text-green-600">9,000만원</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-600">Conservative Plan (보수적 관점)</CardTitle>
              <CardDescription>2년(24개월) 동안의 저축 계획</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-100 p-6 rounded-lg">
                <p className="text-slate-600 mb-2">5천만원 모으려면</p>
                <p className="text-3xl font-bold text-slate-900">월 208만원 저금</p>
              </div>
              <div className="bg-slate-100 p-6 rounded-lg">
                <p className="text-slate-600 mb-2">1억 모으려면</p>
                <p className="text-3xl font-bold text-slate-900">월 416만원 저금</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Backup Plan */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <Badge className="text-base px-6 py-2 mb-4 bg-orange-100 text-orange-700">Pivot & Multi-Pipeline</Badge>
            <h2 className="text-4xl font-bold mb-4">Back-up Plan - Pivot Plan</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-left">
              <p className="text-lg text-slate-700">
                학원업에 대한 포커스로 분명한 성장이 필요한것은 맞다. 하지만 수입파이프를 여러개 만드는것으로 현금체력을 쌓고, 이율극대화를 추구하는것도 굉장히 바람직하고 필수적이다.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <p className="font-semibold text-orange-900 mb-2">핵심 전제</p>
                <p className="text-orange-800">
                  피폿이 작용하려면 세타쓴과 시선뮤직의 브랜딩이 반드시 먹혀야 한다. 브랜딩으로 팬이 된 이들은 타 비지니스를 전개해도 따라온다.
                </p>
                <p className="text-sm text-orange-700 mt-2">
                  예시: 하비뮤직이라는 실용음악학원은 떡볶이를 팔고 있다.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Video,
                title: "VOD 판매",
                description: "개인웹페이지 구축 후 VOD 판매. 트래픽 증가를 위해 타 플랫폼 이용. VOD는 미끼퍼널로써 가장 최상단 넓은 트래픽을 가져오기 위해",
                color: "orange"
              },
              {
                icon: FileText,
                title: "블로그 수익",
                description: "블로그 애드포스트 수입. 월50만원만 가능해도 작지않은 금액. 어차피 오프라인샵 운영하려면 네이버블로그 글쓰는건 필수적",
                color: "orange"
              },
              {
                icon: Youtube,
                title: "유튜브 수익",
                description: "유튜브 광고수입. 에드센스+쿠팡파트너스. 채널의 방향성이 맞다면 쿠팡파트너스 수입도 꽤나 크다. 음향기기, 목건강 관련 건기식, 의류 등 판매 가능",
                color: "orange"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className={`w-14 h-14 mx-auto mb-4 bg-${item.color}-100 rounded-full flex items-center justify-center`}>
                      <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                    </div>
                    <CardTitle className="text-xl text-center">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 text-center">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Summary */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <Card className="border-2 border-slate-200 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl text-center">핵심 요약</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-indigo-50 p-8 rounded-2xl text-center">
                <p className="text-sm text-slate-600 mb-2">총 사업 기간 (타겟)</p>
                <p className="text-5xl font-extrabold text-indigo-600">
                  18<span className="text-2xl">개월</span>
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl text-center">
                <p className="text-sm text-slate-600 mb-2">목표 저축액</p>
                <p className="text-5xl font-extrabold text-green-600">
                  9,000<span className="text-2xl">만원</span>
                </p>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl text-center">
                <p className="text-sm text-slate-600 mb-2">최종 목표 월수익</p>
                <p className="text-5xl font-extrabold text-purple-600">
                  1,100<span className="text-2xl">만원</span>
                </p>
              </div>
            </div>
            <p className="text-center text-lg text-slate-700 leading-relaxed">
              체계적인 단계별 실행, 강력한 브랜딩, 그리고 리스크를 헷지하는 멀티 수익원 확보.<br />
              이 세 가지 축을 기반으로 반드시 <strong>'안정적인 고속 성장'</strong>을 만들어냅니다.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 text-center border-t">
        <p className="text-slate-500 text-sm">
          Life Safety Net © 2025. 시선뮤직 · 세타쓴
        </p>
      </footer>
    </div>
  );
}
