/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  PhoneCall, 
  Menu, 
  CheckCircle2, 
  FileText, 
  Landmark, 
  Ship, 
  Armchair, 
  Package, 
  Settings, 
  Users, 
  MapPin, 
  Facebook, 
  Globe, 
  Trophy,
  Home,
  LayoutGrid,
  ArrowRight,
  ShieldCheck,
  Clock,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const images = {
    logo: "https://ais-dev-5x23sityfvpjpelqnnmiux-449337489671.asia-east1.run.app/logo.png",
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_kBzv5xysypSt_rRDw5oxLz51QEQrlRh1F47xdmkWKobABbxBdTMq3me_MZhQLdDrFjqgANSKVC1HGwRmcjfLljT7NCX9OCZSRjuGw6G5pKJealrbH-YAQYQbFzawILK_nX4WYa_cIA4TQkY3lQt1f_bwM3OLAymrs6rMzIt2YtJ43gxKKhgItiHbXzxmVuP2uHHDfyIVPhEzXHAvZZuekcYRTKM0ZnbVHcfdHotfm_WmXnLS0YP69WPDaf8viKWuyKRZvkDjEyRU",
    architecture: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4sYbW2WJQaIzS0_Mk7mK90_kG0BdUexhlrIXUKH4qCbwjfn0jD6aTggPwK52H_qwguOuhOphVadoZSIMMTkkTxfysTUlM1SOE2EDh-cKr7a7GnKZwujJz55ilojP-EuRd_9ppFr5AP0xP-D80101oRVVzknaXVPOQxMSC58Nz5L-BUvpjcVnouUot-YfWsnonO1ZE3Aq8KorHqBNo89as8AxI8QgYk2gKYtLsha9deetmVafl0MP5bfr9WO4hVo2wtOob9ocxzq0m",
    maritime: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkV7C6ubwNTvOcYltdXvg7Kr4_W-FOXrsfHT1eu2rdSlUH4iCM4jiMtE8bHi12HG9kDfxWDinR7TwIgDxsyvUR7x4Hw89fj04wjk59dDIk9YpSZ4B9KCbhlgDgM-mKT-AjZPyn_ePc8nJWLlTkx5uXFnXrt_2pZc8hiqhJSxdImG_M866UHHKjBHjzq805QkCKlcKaZoKY03-WNAVajULjlmvwi16Dyg7g3E3cbfMLofllXhw_CBO56Lp94i2Heo5vCV3r-N0vb8Qk",
    furniture: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwOIpL4JXCQF7-qxBAhOZwpNzfAfqaBpe1IazI2cLjyl28jDoT74tAX2G3FCGT8S_6703LjSdc-J2St2jJU7BIgF4c0vaPReHSIbdRcYG8XowbKMVBdf6bPJIj-kbLR7eUuL8dLvAkb_ArFZjivUFXA8K57bF4jNPe8I8sn3nMn7pQstKCE_hgjsoPRV4Ym7HTThNOgxh-CTrK1J5kRpq80qEfae56uTuAJRJ08Nj_xBwAY6Z4xfJi_hUyTZA1ELRD7oLrMMiaUGCL",
    machine: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm2WpC2k3KgwT55JKAr9uagAtGH-mhy9aNyLKnypeDbaQE7xnqfkJkhxe326fOrZjGEziFxn-bY7K-0QW1g8gqfUwCCwCWagiHTfTIGWNh_QtLYxM4VSE9YyOEmg7jhjRLRZzLe2lLLnq0kRg7e4rb1TPHQ-rpBPSs15B6Tj7W126YRUu5QFVr-9jgWXxjMXbNvDgu9GTbCFnX55ljVgbfVJ7VnfyqWAimg6yViXcrL7kraNufFReRXlXQXoSrbjJz_KYy8p6gr4Op",
    map: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpkczaALDpOyyewyUN9GCawKLHzjqHinUdOY2MCl97PHn9D4I21m1dMvpByRqdDB9aq-6rWC6YtdW52RUpqfjeq4jo5j2O3Sz7XQ8wlwQUaksg0nzpnvHDJ33R9Cp_DpQ5_-6kuF71WlnfqasvCFsbFJzk-kLxRBj9bR2tG8bYnBCDbVT1divwwKVfwuWuTbB3KFeSExtf4bktQ7hBIbR-kR-qh6A2-UnvOvnEz-OjTBq_68ZuCeuxXjgZ6JGTmIVHnkHx9jkocRRs"
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-black">
      {/* Header Navigation */}
      <header className="glass-header fixed top-0 z-50 w-full border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={images.logo} 
              alt="Su-Thorn Timber Logo" 
              className="h-12 w-auto object-contain brightness-0 invert" 
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/timber/100/100";
              }}
            />
            <div className="hidden sm:block h-8 w-px bg-primary/20"></div>
            <div className="flex flex-col">
              <h1 className="font-display text-xl font-bold tracking-tight text-primary leading-none">โรงไม้สุธร</h1>
              <span className="text-[10px] font-bold text-text-main/60 uppercase tracking-widest mt-1">Su-Thorn Timber</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-text-main/80">
            <a className="hover:text-primary transition-all relative group" href="#">
              หน้าหลัก
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a className="hover:text-primary transition-all relative group" href="#products">
              สินค้า
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a className="hover:text-primary transition-all relative group" href="#why-us">
              ทำไมต้องเรา
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a className="hover:text-primary transition-all relative group" href="#contact">
              ติดต่อเรา
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black text-sm font-bold hover:bg-primary-light transition-all shadow-lg shadow-primary/20" 
              href="tel:0812345678"
            >
              <PhoneCall className="w-4 h-4" />
              <span>081-234-5678</span>
            </a>
            <button className="lg:hidden p-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors text-primary">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105" 
          style={{ backgroundImage: `url('${images.hero}')` }}
        >
          <div className="absolute inset-0 bg-wood-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-8">
              <Trophy className="text-primary w-4 h-4" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-text-main uppercase">The Largest Hopea Odorata Specialist</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-text-main leading-[0.88] mb-10 text-balance tracking-tighter">
              ศูนย์รวมไม้ตะเคียน<br />
              <span className="text-primary italic">ขนาดพิเศษ</span>ที่ใหญ่ที่สุด
            </h1>
            
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mb-14 text-text-main/90 text-balance">
              สต็อกแน่น พร้อมส่งทันที แปรรูปได้ทุกขนาดตามความต้องการของคุณ ด้วยประสบการณ์กว่า 30 ปี
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-primary hover:bg-primary-light text-black font-bold py-5 px-12 rounded-2xl shadow-2xl shadow-primary/40 transition-all flex items-center justify-center gap-3">
                <FileText className="w-5 h-5" />
                <span>ขอใบเสนอราคาด่วน</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-primary/5 hover:bg-primary/10 backdrop-blur-xl text-text-main font-bold py-5 px-12 rounded-2xl border border-primary/20 transition-all">
                ชมคลังสินค้า
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 right-12 hidden xl:flex gap-8">
          {[
            { label: "Years Experience", value: "30+" },
            { label: "Stock Available", value: "10,000+" },
            { label: "Happy Clients", value: "5,000+" }
          ].map((stat, i) => (
            <div key={i} className="bg-primary/5 backdrop-blur-md border border-primary/10 p-6 rounded-2xl">
              <p className="text-3xl font-bold text-primary leading-none mb-1">{stat.value}</p>
              <p className="text-[10px] font-bold text-text-main/50 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto" id="products">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Our Collections</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-main leading-tight">
              หมวดหมู่สินค้าไม้ตะเคียน<br />คุณภาพระดับพรีเมียม
            </h2>
          </div>
          <p className="text-text-main/50 max-w-sm text-lg">
            เราคัดสรรไม้ตะเคียนเกรดที่ดีที่สุด เพื่อรองรับงานสถาปัตยกรรม งานต่อเรือ และเฟอร์นิเจอร์หรู
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "งานสถาปัตยกรรม & วัด",
              tag: "Architecture",
              desc: "ไม้ตะเคียนคัดเกรดพิเศษเพื่อความศักดิ์สิทธิ์และทนทาน เหมาะสำหรับงานประตูโบสถ์และโครงสร้างวัด",
              img: images.architecture,
              icon: Landmark
            },
            {
              title: "งานต่อเรือ & ท่าเรือ",
              tag: "Maritime",
              desc: "ไม้ตะเคียนทนน้ำ คัดขนาดพิเศษสำหรับกระดูกงูเรือและแผ่นกระดานเรือ แข็งแรง ทนทานต่อศัตรูไม้",
              img: images.maritime,
              icon: Ship
            },
            {
              title: "เฟอร์นิเจอร์แผ่นใหญ่",
              tag: "Luxury Furniture",
              desc: "แผ่นไม้ตะเคียนหน้ากว้างพิเศษ (Jumbo Slab) ลวดลายสวยงามเป็นเอกลักษณ์ สำหรับโต๊ะประชุมหรู",
              img: images.furniture,
              icon: Armchair
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative bg-wood-warm rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/20 border border-white/5"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-deep/90 via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10 text-text-main">
                <div className="flex items-center gap-2 mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{item.tag}</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-text-main/60 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold group-hover:text-primary transition-colors">
                  <span>ดูรายละเอียด</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us Section - Modern Bento Grid Layout */}
      <section className="py-32 bg-wood-deep relative overflow-hidden" id="why-us">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-6 block">Our Excellence</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-text-main leading-tight">
              มาตรฐานโรงไม้ที่ทั่วโลกไว้วางใจ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-primary/5 backdrop-blur-sm border border-primary/10 p-12 rounded-[3rem] flex flex-col justify-between group hover:border-primary/50 transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center text-primary">
                  <Package className="w-10 h-10" />
                </div>
                <span className="text-text-main/20 font-display text-6xl font-bold">01</span>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-text-main mb-4">Massive Inventory</h4>
                <p className="text-text-main/50 leading-relaxed text-lg max-w-xl">
                  เรามีสต็อกไม้ตะเคียนทุกขนาดเตรียมพร้อมไว้เสมอ ไม่ต้องรอคิวตัดนาน พร้อมส่งตรงถึงหน้างานทันที ด้วยคลังสินค้าขนาดใหญ่กว่า 10,000 ตร.ม.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 bg-primary p-12 rounded-[3rem] flex flex-col justify-between group hover:scale-[1.02] transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-text-main/20 flex items-center justify-center text-text-main">
                  <Clock className="w-8 h-8" />
                </div>
                <span className="text-text-main/20 font-display text-6xl font-bold">02</span>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-text-main mb-2">30+ Years</h4>
                <p className="text-text-main/80 font-medium">Experience in Timber Industry</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-primary/5 border border-primary/10 p-12 rounded-[3rem] group hover:border-primary/50 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-8">
                <Settings className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-text-main mb-4">Custom Precision</h4>
              <p className="text-text-main/50 leading-relaxed">
                ใช้เทคโนโลยีเครื่องจักรขนาดใหญ่ที่ทันสมัย แปรรูปไม้ได้แม่นยำตามระยะที่ต้องการ
              </p>
            </div>

            <div className="md:col-span-8 relative rounded-[3rem] overflow-hidden group">
              <img 
                src={images.machine} 
                alt="Industrial Machine" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-deep via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10">
                <div className="flex items-center gap-4 text-text-main">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="font-bold tracking-widest uppercase text-sm">Certified Quality Control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Sophisticated Layout */}
      <section className="py-32 px-6 max-w-7xl mx-auto" id="contact">
        <div className="bg-wood-warm rounded-[4rem] p-8 md:p-20 shadow-2xl shadow-black/40 border border-primary/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="flex flex-col justify-center">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-6 block">Get in Touch</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-text-main mb-8 leading-tight tracking-tight">
                เริ่มต้นโปรเจกต์<br />กับผู้เชี่ยวชาญ
              </h2>
              <p className="text-text-main/50 text-lg mb-12 max-w-md leading-relaxed">
                เราพร้อมให้คำปรึกษาและจัดหาไม้ตะเคียนคุณภาพสูงสำหรับทุกความต้องการ ติดต่อเราเพื่อขอใบเสนอราคาด่วน
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: PhoneCall, label: "Call Us", value: "081-234-5678", href: "tel:0812345678" },
                  { icon: Facebook, label: "Facebook", value: "Su-Thorn Timber", href: "#" },
                  { icon: MapPin, label: "Location", value: "ราชพฤกษ์, นนทบุรี", href: "#" },
                  { icon: Globe, label: "Website", value: "suthorntimber.com", href: "#" }
                ].map((item, i) => (
                  <a key={i} href={item.href} className="group flex flex-col gap-4 p-6 rounded-3xl bg-primary/5 hover:bg-primary transition-all duration-500 border border-primary/10">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-text-main transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-text-main/40 uppercase tracking-widest mb-1 group-hover:text-black/60">{item.label}</p>
                      <p className="text-lg font-bold text-text-main group-hover:text-black transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="h-full min-h-[500px] rounded-[3.5rem] overflow-hidden relative shadow-2xl group border border-primary/10">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                style={{ backgroundImage: `url('${images.map}')` }}
              ></div>
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-wood-deep/80 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-primary/20 animate-ping absolute inset-0"></div>
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-2xl relative z-10">
                    <MapPin className="text-black w-10 h-10" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 left-10 right-10 bg-wood-deep/90 backdrop-blur-md p-6 rounded-3xl border border-primary/10">
                <p className="text-text-main font-bold mb-1">โรงไม้สุธร (Su-Thorn Timber)</p>
                <p className="text-text-main/50 text-sm">เปิดให้บริการ จันทร์ - เสาร์ | 08:00 - 17:00 น.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Modern & Clean */}
      <footer className="bg-wood-deep text-text-main pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-10">
                <img src={images.logo} alt="Logo" className="h-12 w-auto brightness-0 invert" />
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold tracking-tight leading-none">โรงไม้สุธร</span>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mt-1">Su-Thorn Timber</span>
                </div>
              </div>
              <p className="text-text-main/40 max-w-sm text-lg leading-relaxed mb-10">
                ผู้นำด้านการแปรรูปไม้ตะเคียนขนาดพิเศษ ด้วยเทคโนโลยีที่ทันสมัยและประสบการณ์ที่ยาวนานกว่า 3 ทศวรรษ เรามุ่งมั่นส่งมอบไม้คุณภาพดีที่สุดเพื่อทุกโปรเจกต์สำคัญของคุณ
              </p>
              <div className="flex gap-4">
                {[Facebook, Globe, ShieldCheck].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-bold mb-10 uppercase tracking-[0.2em] text-xs text-primary">Explore</h4>
              <ul className="space-y-5 text-text-main/50 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">หน้าหลัก</a></li>
                <li><a href="#products" className="hover:text-primary transition-colors">สินค้าของเรา</a></li>
                <li><a href="#why-us" className="hover:text-primary transition-colors">ทำไมต้องเรา</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">ติดต่อเรา</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-10 uppercase tracking-[0.2em] text-xs text-primary">Company</h4>
              <ul className="space-y-5 text-text-main/50 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Process</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-bold mb-10 uppercase tracking-[0.2em] text-xs text-primary">Newsletter</h4>
              <p className="text-text-main/40 text-sm mb-6">Subscribe to get latest updates and stock availability.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-primary/5 border border-primary/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button className="absolute right-2 top-2 bottom-2 px-4 bg-primary rounded-xl hover:bg-primary-light transition-colors">
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-text-main/20 text-xs tracking-widest uppercase">© 2024 Su-Thorn Timber Co., Ltd. Crafted with Excellence.</p>
            <div className="flex gap-8 text-text-main/20 text-xs tracking-widest uppercase">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-6 left-6 right-6 lg:hidden z-50">
        <div className="bg-wood-deep/90 backdrop-blur-xl border border-primary/10 rounded-3xl p-4 flex justify-around items-center shadow-2xl">
          {[
            { icon: Home, label: "Home", href: "#" },
            { icon: LayoutGrid, label: "Products", href: "#products" },
            { icon: Trophy, label: "Why Us", href: "#why-us" },
            { icon: PhoneCall, label: "Contact", href: "#contact" }
          ].map((item, i) => (
            <a key={i} href={item.href} className="flex flex-col items-center gap-1 text-text-main/50 hover:text-primary transition-colors">
              <item.icon className="w-5 h-5" />
              <span className="text-[9px] font-bold uppercase tracking-widest">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
