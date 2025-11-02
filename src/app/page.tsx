"use client"

import { useState } from "react"
import { Star, Play, CheckCircle, Users, Trophy, Sparkles, ArrowRight, Clock, Target, Zap, Camera, Heart, Menu, X } from "lucide-react"

export default function NailCoursePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/90 backdrop-blur-sm border-b border-[#4F4F4F]/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#D3B8AE] to-[#EDE0D4] rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#000000]" />
              </div>
              <span className="text-xl font-bold text-[#FFFFFF]">NailTech Master</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-6">
                <a href="#curso" className="text-[#EDE0D4] hover:text-[#D3B8AE] transition-colors">Curso</a>
                <a href="#instrutora" className="text-[#EDE0D4] hover:text-[#D3B8AE] transition-colors">Instrutora</a>
                <a href="#depoimentos" className="text-[#EDE0D4] hover:text-[#D3B8AE] transition-colors">Depoimentos</a>
                <a href="#preco" className="text-[#EDE0D4] hover:text-[#D3B8AE] transition-colors">Preço</a>
              </nav>
              
              {/* Photo Upload Field */}
              <div className="flex items-center gap-2">
                <label htmlFor="photo-upload" className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#4F4F4F]/20 border border-[#D3B8AE]/30 rounded-lg hover:bg-[#D3B8AE]/10 transition-colors">
                  <Camera className="w-4 h-4 text-[#D3B8AE]" />
                  <span className="text-[#EDE0D4] text-sm">Adicionar Foto</span>
                </label>
                <input 
                  id="photo-upload" 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#EDE0D4] hover:text-[#D3B8AE] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#4F4F4F]/30">
              <nav className="flex flex-col gap-4">
                <a href="#curso" className="text-[#EDE0D4] hover:text-[#D3B8AE] transition-colors" onClick={() => setIsMenuOpen(false)}>Curso</a>
                <a href="#instrutora" className="text-[#EDE0D4] hover:text-[#D3B8AE] transition-colors" onClick={() => setIsMenuOpen(false)}>Instrutora</a>
                <a href="#depoimentos" className="text-[#EDE0D4] hover:text-[#D3B8AE] transition-colors" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
                <a href="#preco" className="text-[#EDE0D4] hover:text-[#D3B8AE] transition-colors" onClick={() => setIsMenuOpen(false)}>Preço</a>
                
                {/* Mobile Photo Upload */}
                <div className="pt-2 border-t border-[#4F4F4F]/30">
                  <label htmlFor="photo-upload-mobile" className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#4F4F4F]/20 border border-[#D3B8AE]/30 rounded-lg hover:bg-[#D3B8AE]/10 transition-colors w-fit">
                    <Camera className="w-4 h-4 text-[#D3B8AE]" />
                    <span className="text-[#EDE0D4] text-sm">Adicionar Foto</span>
                  </label>
                  <input 
                    id="photo-upload-mobile" 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                  />
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F4F4F]/10 to-[#D3B8AE]/10 animate-pulse"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Side - Nail Tech Content (2/3) */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-[#4F4F4F]/20 backdrop-blur-sm border border-[#D3B8AE]/30 rounded-full px-6 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-[#EDE0D4]" />
                <span className="text-[#EDE0D4] text-sm font-medium">MÉTODO REVOLUCIONÁRIO</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#EDE0D4] via-[#D3B8AE] to-[#FFFFFF] bg-clip-text text-transparent mb-6 leading-tight">
                NAIL TECH
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl">DO FUTURO</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-[#EDE0D4] mb-8 leading-relaxed">
                Transforme sua paixão por unhas em um negócio de <span className="text-[#D3B8AE] font-semibold">6 figuras</span>
                <br />
                com técnicas futuristas que ninguém ensina
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group relative bg-gradient-to-r from-[#D3B8AE] to-[#EDE0D4] hover:from-[#EDE0D4] hover:to-[#FFFFFF] text-[#000000] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D3B8AE]/25">
                  <span className="relative z-10 flex items-center gap-2">
                    QUERO COMEÇAR AGORA
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EDE0D4] to-[#FFFFFF] rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                </button>
                
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="flex items-center gap-3 text-[#D3B8AE] hover:text-[#EDE0D4] font-semibold transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#4F4F4F]/20 backdrop-blur-sm border border-[#D3B8AE]/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-1" />
                  </div>
                  Ver Demonstração
                </button>
              </div>
              
              <div className="flex flex-wrap gap-8 text-[#EDE0D4]">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#D3B8AE]" />
                  <span>+5.000 alunas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#EDE0D4]" />
                  <span>4.9/5 estrelas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#D3B8AE]" />
                  <span>Método comprovado</span>
                </div>
              </div>
            </div>

            {/* Right Side - Reference Image (1/3) */}
            <div className="lg:col-span-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D3B8AE]/20 to-[#EDE0D4]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e88b3ef9-61ef-45ad-a600-01c384226d5c.png" 
                  alt="Nail Tech do Futuro - Referência" 
                  className="relative w-full h-auto object-cover rounded-2xl border border-[#D3B8AE]/30 hover:scale-105 transition-transform duration-300 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Instructor Section */}
      <section id="instrutora" className="py-20 bg-[#4F4F4F]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EDE0D4] to-[#D3B8AE] bg-clip-text text-transparent mb-6">
              Conheça Sua Instrutora
            </h2>
            <p className="text-xl text-[#EDE0D4] max-w-2xl mx-auto">
              A especialista que vai transformar sua carreira
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photo Upload Section */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D3B8AE]/20 to-[#EDE0D4]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-full h-64 bg-[#4F4F4F]/20 backdrop-blur-sm border-2 border-dashed border-[#D3B8AE]/30 rounded-2xl flex items-center justify-center hover:border-[#D3B8AE]/50 transition-colors">
                    <label htmlFor="instructor-photo" className="cursor-pointer flex flex-col items-center gap-4 text-center p-8">
                      <div className="w-16 h-16 bg-[#D3B8AE]/20 rounded-full flex items-center justify-center">
                        <Camera className="w-8 h-8 text-[#D3B8AE]" />
                      </div>
                      <div>
                        <p className="text-[#FFFFFF] font-semibold mb-2">Adicione sua foto</p>
                        <p className="text-[#EDE0D4] text-sm">Clique para fazer upload da foto da instrutora</p>
                      </div>
                    </label>
                    <input 
                      id="instructor-photo" 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                    />
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EDE0D4]/20 to-[#D3B8AE]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-full h-64 bg-[#4F4F4F]/20 backdrop-blur-sm border-2 border-dashed border-[#EDE0D4]/30 rounded-2xl flex items-center justify-center hover:border-[#EDE0D4]/50 transition-colors">
                    <label htmlFor="work-photo" className="cursor-pointer flex flex-col items-center gap-4 text-center p-8">
                      <div className="w-16 h-16 bg-[#EDE0D4]/20 rounded-full flex items-center justify-center">
                        <Camera className="w-8 h-8 text-[#EDE0D4]" />
                      </div>
                      <div>
                        <p className="text-[#FFFFFF] font-semibold mb-2">Trabalhos realizados</p>
                        <p className="text-[#EDE0D4] text-sm">Adicione fotos dos seus trabalhos</p>
                      </div>
                    </label>
                    <input 
                      id="work-photo" 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="space-y-6">
                <div className="p-6 bg-[#4F4F4F]/20 backdrop-blur-sm border border-[#D3B8AE]/20 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-[#D3B8AE]" />
                    <h3 className="text-2xl font-bold text-[#FFFFFF]">Minha História</h3>
                  </div>
                  <p className="text-[#EDE0D4] leading-relaxed mb-4">
                    Há mais de 8 anos transformando vidas através da nail art. Comecei do zero e hoje fatura mais de R$ 50.000 por mês com meu estúdio exclusivo.
                  </p>
                  <p className="text-[#EDE0D4] leading-relaxed">
                    Já formei mais de 5.000 nail designers que hoje são referência em suas cidades. Minha missão é ensinar você a dominar as técnicas mais avançadas do mercado.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#D3B8AE]/10 backdrop-blur-sm border border-[#D3B8AE]/20 rounded-xl text-center">
                    <div className="text-2xl font-bold text-[#D3B8AE] mb-1">8+</div>
                    <div className="text-sm text-[#EDE0D4]">Anos de experiência</div>
                  </div>
                  <div className="p-4 bg-[#EDE0D4]/10 backdrop-blur-sm border border-[#EDE0D4]/20 rounded-xl text-center">
                    <div className="text-2xl font-bold text-[#EDE0D4] mb-1">5K+</div>
                    <div className="text-sm text-[#EDE0D4]">Alunas formadas</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-[#4F4F4F]/20 backdrop-blur-sm border border-[#D3B8AE]/20 rounded-xl">
                  <Camera className="w-6 h-6 text-[#D3B8AE]" />
                  <div>
                    <p className="text-[#FFFFFF] font-semibold">Siga meu trabalho</p>
                    <p className="text-[#EDE0D4] text-sm">@nailtech_master - 250K seguidores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-[#D3B8AE]/10 backdrop-blur-sm border border-[#D3B8AE]/20 rounded-2xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#D3B8AE] to-[#EDE0D4] bg-clip-text text-transparent mb-2">
                R$ 15.000
              </div>
              <p className="text-[#EDE0D4]">Faturamento médio mensal das alunas</p>
            </div>
            
            <div className="text-center p-6 bg-[#EDE0D4]/10 backdrop-blur-sm border border-[#EDE0D4]/20 rounded-2xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#EDE0D4] to-[#FFFFFF] bg-clip-text text-transparent mb-2">
                30 dias
              </div>
              <p className="text-[#EDE0D4]">Para dominar as técnicas avançadas</p>
            </div>
            
            <div className="text-center p-6 bg-[#4F4F4F]/10 backdrop-blur-sm border border-[#4F4F4F]/20 rounded-2xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#4F4F4F] to-[#D3B8AE] bg-clip-text text-transparent mb-2">
                97%
              </div>
              <p className="text-[#EDE0D4]">Taxa de satisfação das alunas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="curso" className="py-20 bg-[#4F4F4F]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EDE0D4] to-[#D3B8AE] bg-clip-text text-transparent mb-6">
              O que você vai aprender
            </h2>
            <p className="text-xl text-[#EDE0D4] max-w-2xl mx-auto">
              Técnicas exclusivas que vão te colocar anos à frente da concorrência
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Nail Art Holográfica",
                description: "Domine os efeitos 3D e holográficos que estão revolucionando o mercado"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Técnicas de Alongamento",
                description: "Métodos avançados para alongamentos perfeitos e duradouros"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Nail Art com LED",
                description: "Crie designs únicos com tecnologia LED integrada"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Precificação Estratégica",
                description: "Como cobrar até 300% mais pelos seus serviços premium"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Marketing Digital",
                description: "Estratégias para atrair clientes VIP pelo Instagram"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Gestão de Tempo",
                description: "Otimize seu tempo e atenda mais clientes com qualidade"
              }
            ].map((benefit, index) => (
              <div key={index} className="group p-6 bg-[#4F4F4F]/20 backdrop-blur-sm border border-[#4F4F4F]/30 rounded-2xl hover:border-[#D3B8AE]/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-[#D3B8AE]/20 backdrop-blur-sm border border-[#D3B8AE]/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-[#D3B8AE]">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF] mb-3">{benefit.title}</h3>
                <p className="text-[#EDE0D4] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EDE0D4] to-[#D3B8AE] bg-clip-text text-transparent mb-6">
              Resultados Reais
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Marina Silva",
                result: "R$ 25.000/mês",
                text: "Em 3 meses saí do zero para faturar 25k por mês. As técnicas são realmente revolucionárias!"
              },
              {
                name: "Ana Carolina",
                result: "Agenda lotada",
                text: "Minha agenda está sempre cheia. Consigo cobrar 3x mais que a concorrência!"
              },
              {
                name: "Juliana Costa",
                result: "Próprio estúdio",
                text: "Abri meu próprio estúdio em 6 meses. O curso mudou minha vida completamente!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-[#4F4F4F]/20 backdrop-blur-sm border border-[#4F4F4F]/30 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#EDE0D4] fill-current" />
                  ))}
                </div>
                <p className="text-[#EDE0D4] mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#FFFFFF]">{testimonial.name}</p>
                    <p className="text-[#D3B8AE] font-bold">{testimonial.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preco" className="py-20 bg-[#4F4F4F]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EDE0D4] to-[#D3B8AE] bg-clip-text text-transparent mb-6">
              Oferta Especial
            </h2>
            <p className="text-xl text-[#EDE0D4]">Por tempo limitado</p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <div className="relative p-8 bg-[#4F4F4F]/20 backdrop-blur-sm border-2 border-[#D3B8AE]/50 rounded-3xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#D3B8AE] to-[#EDE0D4] text-[#000000] px-6 py-2 rounded-full text-sm font-bold">
                  MAIS VENDIDO
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">NAIL TECH MASTER</h3>
                <div className="mb-4">
                  <span className="text-[#EDE0D4] line-through text-xl">R$ 2.997</span>
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#EDE0D4] to-[#D3B8AE] bg-clip-text text-transparent">
                    R$ 997
                  </div>
                  <p className="text-[#EDE0D4]">ou 12x de R$ 97</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  "Acesso vitalício ao curso",
                  "Certificado de conclusão",
                  "Grupo VIP no WhatsApp",
                  "Aulas ao vivo mensais",
                  "Kit de materiais incluído",
                  "Garantia de 30 dias"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D3B8AE]" />
                    <span className="text-[#EDE0D4]">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#D3B8AE] to-[#EDE0D4] hover:from-[#EDE0D4] hover:to-[#FFFFFF] text-[#000000] py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D3B8AE]/25">
                GARANTIR MINHA VAGA AGORA
              </button>
              
              <p className="text-center text-[#EDE0D4] text-sm mt-4">
                ⏰ Oferta válida por apenas 48 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EDE0D4] to-[#D3B8AE] bg-clip-text text-transparent mb-6">
            Sua transformação começa hoje
          </h2>
          <p className="text-xl text-[#EDE0D4] mb-8 max-w-2xl mx-auto">
            Não deixe essa oportunidade passar. Milhares de mulheres já transformaram suas vidas.
            <br />
            <strong className="text-[#D3B8AE]">Você será a próxima?</strong>
          </p>
          
          <button className="bg-gradient-to-r from-[#D3B8AE] to-[#EDE0D4] hover:from-[#EDE0D4] hover:to-[#FFFFFF] text-[#000000] px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D3B8AE]/25">
            SIM, EU QUERO TRANSFORMAR MINHA VIDA!
          </button>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-[#FFFFFF] hover:text-[#EDE0D4] text-2xl"
            >
              ✕
            </button>
            <div className="aspect-video bg-[#4F4F4F]/20 backdrop-blur-sm border border-[#D3B8AE]/30 rounded-2xl flex items-center justify-center">
              <div className="text-center text-[#FFFFFF]">
                <Play className="w-16 h-16 mx-auto mb-4 text-[#D3B8AE]" />
                <p className="text-xl">Vídeo demonstrativo</p>
                <p className="text-[#EDE0D4]">Clique para reproduzir</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}