import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Lightbulb, Gauge, Sparkles } from "lucide-react";
import { Link } from "wouter";

/**
 * Home Page - Scientific Minimalism Design
 * Deep blue background with cyan accents, geometric elements
 * Hero section with universe background, feature cards, and key insights
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800/50 backdrop-blur-sm bg-slate-950/80">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="font-poppins font-bold text-lg gradient-text">统一场论</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#overview" className="text-sm text-slate-300 hover:text-cyan-400 transition">理论概述</a>
            <a href="#concepts" className="text-sm text-slate-300 hover:text-cyan-400 transition">核心观点</a>
            <a href="#formulas" className="text-sm text-slate-300 hover:text-cyan-400 transition">公式方程</a>
            <a href="#applications" className="text-sm text-slate-300 hover:text-cyan-400 transition">应用前景</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "url('/images/hero-universe.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />
        
        {/* Content */}
        <div className="container relative z-10 flex flex-col items-center text-center">
          <div className="fade-in space-y-6 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white leading-tight">
              统一场论
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-light">
              将电磁力、引力、核力统一于一个数学框架
            </p>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
              探索宇宙的深层结构，理解物质与空间的本质。张祥前提出的统一场论为物理学的发展开辟了新的可能性。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-8 py-6 text-base rounded-lg"
                onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
              >
                了解更多 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-base rounded-lg"
              >
                查看论文
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="relative py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Theory Basics */}
            <div className="card-glow p-6 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/20 mb-4 group-hover:bg-cyan-500/30 transition">
                <Lightbulb className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-white mb-2">理论基础</h3>
              <p className="text-sm text-slate-400">
                统一场论的基本原理和数学框架
              </p>
            </div>

            {/* Card 2: Space Model */}
            <div className="card-glow p-6 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/20 mb-4 group-hover:bg-purple-500/30 transition">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-white mb-2">空间模型</h3>
              <p className="text-sm text-slate-400">
                螺旋运动的空间结构与运动规律
              </p>
            </div>

            {/* Card 3: Formulas */}
            <div className="card-glow p-6 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/20 mb-4 group-hover:bg-cyan-500/30 transition">
                <Gauge className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-white mb-2">物理公式</h3>
              <p className="text-sm text-slate-400">
                关键方程和数学表达式
              </p>
            </div>

            {/* Card 4: Applications */}
            <div className="card-glow p-6 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/20 mb-4 group-hover:bg-purple-500/30 transition">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-white mb-2">应用前景</h3>
              <p className="text-sm text-slate-400">
                理论的实际应用和未来发展
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="section-divider bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div>
                <span className="text-cyan-400 font-poppins font-semibold text-sm uppercase tracking-wider">理论概述</span>
                <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mt-3">
                  什么是统一场论？
                </h2>
              </div>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                统一场论是一种试图将自然界的所有基本力统一在一个数学框架中的理论。自从麦克斯韦在19世纪末提出电场和磁场的统一理论以后，将引力场与电磁场统一便成了物理学界的夙愿。
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                张祥前的统一场论提出了一个新的视角：宇宙由物体和空间构成，空间以螺旋状光速向外发散运动。这个理论试图在一个统一的数学公式中表达电磁力、引力、核力和弱力。
              </p>

              <div className="pt-4">
                <Button 
                  className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold"
                >
                  深入了解 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-96 rounded-lg overflow-hidden border border-cyan-500/30 glow-cyan">
              <img 
                src="/images/field-visualization.jpg" 
                alt="Field Visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Concepts Section */}
      <section id="concepts" className="section-divider">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-poppins font-semibold text-sm uppercase tracking-wider">核心观点</span>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mt-3">
              统一场论的三大核心观点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Concept 1 */}
            <div className="formula-card group hover:border-cyan-400/80 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition">
                <span className="text-2xl font-poppins font-bold gradient-text">1</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-white mb-4">
                宇宙基本构成
              </h3>
              <p className="text-slate-300 leading-relaxed">
                宇宙只由物体和空间构成，别的都不存在。物质和空间是宇宙的两个基本元素。
              </p>
            </div>

            {/* Concept 2 */}
            <div className="formula-card group hover:border-cyan-400/80 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition">
                <span className="text-2xl font-poppins font-bold gradient-text">2</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-white mb-4">
                空间螺旋运动
              </h3>
              <p className="text-slate-300 leading-relaxed">
                空间以螺旋状光速向外发散运动。这种运动是产生各种物理场和力的根本原因。
              </p>
            </div>

            {/* Concept 3 */}
            <div className="formula-card group hover:border-cyan-400/80 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition">
                <span className="text-2xl font-poppins font-bold gradient-text">3</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-white mb-4">
                四力统一
              </h3>
              <p className="text-slate-300 leading-relaxed">
                电磁力、引力、核力和弱力可以统一在一个数学方程中表达。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spiral Model Section */}
      <section className="section-divider bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative h-96 rounded-lg overflow-hidden border border-purple-500/30 glow-purple order-2 lg:order-1">
              <img 
                src="/images/spiral-model.jpg" 
                alt="Spiral Model"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <span className="text-purple-400 font-poppins font-semibold text-sm uppercase tracking-wider">物理模型</span>
                <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mt-3">
                  空间螺旋运动模型
                </h2>
              </div>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                统一场论的核心是空间螺旋运动模型。这个模型认为空间本身不是静止的，而是以螺旋状的方式以光速向外发散运动。
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                这种螺旋运动产生了各种物理现象：电磁场、引力场、核力场等都是空间螺旋运动的不同表现形式。通过理解空间的运动规律，我们可以统一解释所有基本力。
              </p>

              <div className="pt-4">
                <Button 
                  className="bg-purple-500 hover:bg-purple-600 text-white font-semibold"
                >
                  查看详细模型 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulas Section */}
      <section id="formulas" className="section-divider">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-poppins font-semibold text-sm uppercase tracking-wider">关键公式</span>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mt-3">
              统一场论的数学表达
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Formula 1 */}
            <div className="formula-card">
              <div className="text-sm text-cyan-400 font-poppins font-semibold mb-3">基础关系式</div>
              <div className="font-mono text-lg text-cyan-300 mb-3">
                E = m/(C-V)
              </div>
              <p className="text-sm text-slate-400">
                物质与能量的基本关系，其中E为能量，m为质量，C为光速，V为速度。
              </p>
            </div>

            {/* Formula 2 */}
            <div className="formula-card">
              <div className="text-sm text-purple-400 font-poppins font-semibold mb-3">动量方程</div>
              <div className="font-mono text-lg text-purple-300 mb-3">
                B = V × E /c²
              </div>
              <p className="text-sm text-slate-400">
                动量与电场、磁场的关系，描述运动物体的动力学性质。
              </p>
            </div>

            {/* Formula 3 */}
            <div className="formula-card">
              <div className="text-sm text-cyan-400 font-poppins font-semibold mb-3">场强方程</div>
              <div className="font-mono text-lg text-cyan-300 mb-3">
                ∂B/∂t = A×E/c²
              </div>
              <p className="text-sm text-slate-400">
                磁场随时间的变化率与电场的关系，反映电磁场的动态特性。
              </p>
            </div>

            {/* Formula 4 */}
            <div className="formula-card">
              <div className="text-sm text-purple-400 font-poppins font-semibold mb-3">相对关系</div>
              <div className="font-mono text-lg text-purple-300 mb-3">
                ∇×A = E /f
              </div>
              <p className="text-sm text-slate-400">
                矢量场的旋度与电场的关系，描述场的空间结构。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="section-divider bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-poppins font-semibold text-sm uppercase tracking-wider">应用前景</span>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mt-3">
              理论的意义与应用
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-glow p-8">
              <h3 className="font-poppins font-semibold text-xl text-white mb-4">科学意义</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">•</span>
                  <span>统一基本物理力的新尝试</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">•</span>
                  <span>解释宇宙结构的新视角</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">•</span>
                  <span>推动物理学理论发展</span>
                </li>
              </ul>
            </div>

            <div className="card-glow p-8">
              <h3 className="font-poppins font-semibold text-xl text-white mb-4">应用前景</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold mt-1">•</span>
                  <span>新型能源技术开发</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold mt-1">•</span>
                  <span>引力控制技术研究</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold mt-1">•</span>
                  <span>宇宙探索新方向</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-slate-800/50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            深入探索统一场论
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            了解更多关于统一场论的详细内容、数学推导和实验验证。
          </p>
          <Button 
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-6 text-base rounded-lg"
          >
            查看完整论文 <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-950/50 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-poppins font-semibold text-white mb-4">关于</h4>
              <p className="text-sm text-slate-400">
                统一场论介绍网站，展示张祥前的理论框架。
              </p>
            </div>
            <div>
              <h4 className="font-poppins font-semibold text-white mb-4">导航</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#overview" className="hover:text-cyan-400 transition">理论概述</a></li>
                <li><a href="#concepts" className="hover:text-cyan-400 transition">核心观点</a></li>
                <li><a href="#formulas" className="hover:text-cyan-400 transition">公式方程</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-semibold text-white mb-4">资源</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition">论文下载</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">相关文献</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">研究进展</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-semibold text-white mb-4">联系</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>作者：张祥前</li>
                <li>邮箱：<a href="mailto:contact@example.com" className="hover:text-cyan-400 transition">contact@example.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-slate-500">
              © 2024 统一场论介绍网. 保留所有权利。
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition">隐私政策</a>
              <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition">使用条款</a>
              <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition">联系我们</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
