import React, { useState } from 'react';
import { ChevronDown, Ship, Shield, BookOpen, Users, Network, TreePalm, Volume2, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface AccordionItem {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const GlassmorphismAccordion = ({ items }: { items: AccordionItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          layout
          className={`rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
            openIndex === idx
              ? 'bg-[#0A192F] border border-cyan-500 shadow-2xl shadow-cyan-500/30 scale-[1.02]'
              : 'bg-white border border-gray-200 shadow-md hover:shadow-lg'
          }`}
        >
          <button
            className={`w-full flex justify-between items-center px-8 py-6 text-left font-semibold transition-all duration-300 ${
              openIndex === idx
                ? 'text-white'
                : 'text-gray-900 hover:text-blue-600'
            }`}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <div className="flex items-center gap-4">
              <div
                className={`transition-all duration-300 ${
                  openIndex === idx ? 'text-cyan-400' : 'text-gray-600'
                }`}
              >
                {item.icon}
              </div>
              <span>{item.title}</span>
            </div>
            <motion.div
              animate={{ rotate: openIndex === idx ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={openIndex === idx ? 'text-cyan-400' : 'text-gray-400'}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndex === idx ? 'auto' : 0,
              opacity: openIndex === idx ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className={`px-8 py-6 text-lg leading-relaxed ${
                openIndex === idx
                  ? 'text-gray-200 bg-[#0A192F]/80'
                  : 'text-gray-700'
              }`}
            >
              {item.content}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

/* MacOS Window Frame Component */
const MacOSFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
    <div className="bg-gray-700 px-6 py-3 flex items-center gap-3 border-b border-gray-600">
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      <span className="text-gray-300 text-sm font-medium ml-4">Organogram Sistem Kerja</span>
    </div>
    <div className="p-8 bg-white">{children}</div>
  </div>
);

export const Organogram = () => {
  const logoData = [
    {
      img: '/assets/logos/Daya-Biru.png',
      title: 'Tagar Daya Biru',
      desc: 'Kemampuan dan kekuatan kolektif yang mendorong semangat dan rasa bangga terhadap identitas himpunan.',
    },
    {
      img: '/assets/divisions/ketua-komisariat.png',
      title: 'Ketua Komisariat',
      desc: 'Akar dan sumber arah, daun terbuka, visi matahari.',
    },
    {
      img: '/assets/divisions/kesekjenan.png',
      title: 'Kesekjenan',
      desc: 'Geometris bertautan, pusat koordinasi.',
    },
    {
      img: '/assets/divisions/internal.png',
      title: 'Internal',
      desc: 'Keberagaman dalam kebersamaan.',
    },
    {
      img: '/assets/divisions/eksternal.png',
      title: 'Eksternal',
      desc: 'Melampaui batas, keterbukaan relasi.',
    },
    {
      img: '/assets/divisions/akilprof.png',
      title: 'Akilprof',
      desc: 'Keseimbangan akademik & profesional.',
    },
    {
      img: '/assets/divisions/PMSDA.png',
      title: 'PMSDA',
      desc: 'Daun & garis lengkung, pengkaderan berkelanjutan.',
    },
    {
      img: '/assets/divisions/medkominfo.png',
      title: 'Medkominfo',
      desc: 'Empat lingkaran terhubung, pusat informasi.',
    },
  ];

  const bpakData = [
    {
      title: 'Ketua BPAK',
      desc: 'Rapat Internal, Dokumen Penyelarasan Arah Gerak (PAG).',
    },
    {
      title: 'Komisi Legislasi',
      desc: 'Evaluasi Satu Tahun Komisariat, Kajian Strategis Kebutuhan Anggota.',
    },
    {
      title: 'Komisi Pengawasan',
      desc: 'Evaluasi Kinerja Badan, Dokumen Garis Besar Haluan Kerja (GBHK).',
    },
    {
      title: 'Fungsi Advokasi',
      desc: 'Bantuan Hukum, Pemira (Pemilu), Serap Aspirasi.',
    },
  ];

  const bidangData: AccordionItem[] = [
    {
      title: 'Kesekjenan (Sekretaris, Bendahara, Pendanaan)',
      content: 'Mengelola arsip, timeline, RAB, cashflow, dan mencari pendanaan.',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'Akilprof (Akademik & Keilmuan, Keprofesian)',
      content: 'Menyediakan materi, tutorial, bimbingan lomba, kajian oseanografi, seminar karir.',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: 'Internal (Kekeluargaan, Minat & Bakat)',
      content: 'Dies Natalis, perayaan wisuda, apresiasi anggota, menjaga sekretariat, dan pengiriman atlet.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Eksternal (Intrakampus, Ekstrakampus)',
      content: 'Kolaborasi dengan HMPS dan UKM, database lembaga luar, dan silaturahmi alumni.',
      icon: <Network className="w-6 h-6" />,
    },
    {
      title: 'PMSDA (PSDA, MSDA)',
      content: 'Pelatihan panitia DIKSAR, Sekolah Stakeholder, pembaruan GDK, database anggota, dan rapor fase kaderisasi.',
      icon: <TreePalm className="w-6 h-6" />,
    },
    {
      title: 'Medkominfo',
      content: 'Penerapan Grand Design Visual (GDV), publikasi konten edukatif, pengarsipan dokumentasi, dan perayaan hari besar.',
      icon: <Volume2 className="w-6 h-6" />,
    },
    {
      title: 'Poseidon',
      content: 'Pengabdian masyarakat solutif dan berkelanjutan, serta kemandirian pendanaan pengabdian.',
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* ========== HERO SECTION WITH ANIMATED SHIP ========== */}
      <section className="relative w-full min-h-[80vh] bg-[#0A192F] overflow-hidden flex items-center justify-center pt-20">
        {/* Animated Ship Background */}
        <Ship className="text-white/10 w-48 h-48 absolute top-1/2 -translate-y-1/2 animate-sail z-0" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-black text-white mb-4 font-serif leading-tight">
            Struktur Organisasi
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-300 font-light mb-2">
            & Arahan Kerja
          </p>
          <p className="text-xl text-blue-200">
            Setiap bidang memiliki peran strategis dalam pembangunan himpunan
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </section>

      {/* ========== MAKNA LOGO - GLASSMORPHISM CARDS ========== */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Makna Logo & Tagar</h2>
          <p className="text-gray-500 mb-16">Identitas visual yang mewakili nilai-nilai himpunan</p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {logoData.map((logo) => (
              <motion.div
                key={logo.title}
                whileHover={{ y: -8 }}
                className="group relative bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-lg hover:shadow-2xl hover:bg-white/60 transition-all duration-300 cursor-pointer"
              >
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:via-blue-400/20 group-hover:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                    <img
                      src={logo.img}
                      alt={logo.title}
                      className="w-20 h-20 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="font-bold text-gray-900 text-lg mb-2">{logo.title}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{logo.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ALUR KOMANDO - MACOS FRAME ========== */}
      <section className="w-full bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Alur Komando & Koordinasi</h2>
          <p className="text-gray-500 mb-12">Sistem hirarki dan komunikasi organisasi</p>

          <div className="mb-12">
            <MacOSFrame>
              <img
                src="/assets/organogram/flowchart.png"
                alt="Flowchart Sistem Kerja"
                className="w-full rounded-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </MacOSFrame>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200">
            <ol className="space-y-4 text-gray-800">
              <li className="flex gap-4">
                <span className="font-bold text-cyan-600 min-w-fit text-lg">1.</span>
                <span className="text-lg leading-relaxed">Ketua → Kesekjenan → Semua Bidang.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-cyan-600 min-w-fit text-lg">2.</span>
                <span className="text-lg leading-relaxed">Bidang → Divisi → Anggota.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-cyan-600 min-w-fit text-lg">3.</span>
                <span className="text-lg leading-relaxed">Koordinasi Antar Bidang yang saling berkaitan.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-cyan-600 min-w-fit text-lg">4.</span>
                <span className="text-lg leading-relaxed">Bidang Eksternal sebagai penghubung luar.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-cyan-600 min-w-fit text-lg">5.</span>
                <span className="text-lg leading-relaxed">POSEIDON memiliki kewenangan khusus pengabdian masyarakat di bawah pengawasan Ketua.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ========== BPAK - PREMIUM CARDS ========== */}
      <section className="w-full bg-gray-50 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">BPAK (Badan Perwakilan Anggota Komisariat)</h2>
          <p className="text-gray-500 mb-16">Fungsi pengawasan dan legislasi himpunan</p>

          <div className="grid md:grid-cols-2 gap-6">
            {bpakData.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl border border-blue-100 transition-all duration-300 cursor-pointer group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full -mr-8 -mt-8 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="font-bold text-gray-900 mb-3 text-xl relative z-10">{item.title}</div>
                <div className="text-gray-700 leading-relaxed text-lg relative z-10">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BADAN PENGURUS - GLASSMORPHISM ACCORDION ========== */}
      <section className="w-full bg-gradient-to-b from-[#0A192F] to-[#061a3a] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 font-serif">Badan Pengurus Komisariat</h2>
          <p className="text-cyan-300 mb-16">Arahan Kerja & Strategi Masing-Masing Bidang</p>
          <GlassmorphismAccordion items={bidangData} />
        </div>
      </section>
    </div>
  );
};
