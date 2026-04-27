import React from 'react';
import { Zap } from 'lucide-react';

export const Sejarah = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* ========== HERO SECTION WITH ANIMATED SHIP ========== */}
      <section className="relative w-full min-h-[80vh] bg-[#0A192F] overflow-hidden flex items-center justify-center pt-20">
        {/* Animated Ship SVG */}
        <svg
          className="text-white w-48 h-48 absolute top-1/2 -translate-y-1/2 z-20 blend-exclusion animate-sail"
          viewBox="0 0 100 100"
          fill="white"
        >
          {/* Ship Hull */}
          <path d="M 20 60 L 30 80 L 70 80 L 80 60 Z" fill="white" />
          {/* Ship Cabin */}
          <rect x="35" y="45" width="30" height="20" fill="white" rx="3" />
          {/* Mast */}
          <line x1="50" y1="45" x2="50" y2="15" stroke="white" strokeWidth="2" />
          {/* Sail */}
          <polygon points="50,20 50,50 75,45" fill="white" opacity="0.8" />
        </svg>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-black text-white mb-4 font-serif leading-tight">
            Sejarah & Filosofi
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-300 font-light">
            Latar Belakang, Tinjauan Ideal, dan Kebutuhan Himpunan
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </section>

      {/* ========== VERTICAL TIMELINE SECTION ========== */}
      <section className="w-full bg-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 font-serif flex items-center gap-3">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            Latar Belakang & Definisi
          </h2>
          <p className="text-gray-500 mb-16">Fondasi dan struktur organisasi himpunan</p>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-cyan-500 to-transparent"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1: Latar Belakang */}
              <div className="relative pl-24">
                <div className="absolute left-0 top-2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/50 animate-pulse z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-cyan-50 rounded-2xl p-8 border-2 border-yellow-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    Latar Belakang
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Himpunan Mahasiswa Oseanografi "TRITON" ITB merupakan wadah bagi mahasiswa untuk mengembangkan potensi diri di bidang keilmuan dan mempererat hubungan antar massa. Keberadaan Komisariat berkontribusi dalam pembentukan karakter dan penguatan struktur internal. Diperlukan perencanaan yang jelas dan terarah agar setiap kegiatan mampu menjawab tantangan dan kebutuhan massa secara optimal.
                  </p>
                </div>
              </div>

              {/* Item 2: Definisi BPAK */}
              <div className="relative pl-24">
                <div className="absolute left-0 top-2 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-cyan-500" />
                    Definisi BPAK
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Badan Perwakilan Anggota Komisariat (BPAK) HMO 'TRITON' ITB dipimpin oleh Ketua BPA yang bertanggung jawab agar badan ini berjalan sesuai fungsinya sebagai lembaga perwakilan yang berkedudukan tinggi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BENTO GRID SECTION ========== */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 font-serif flex items-center gap-3">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            Tinjauan Ideal (Kabinet Daya Biru)
          </h2>
          <p className="text-gray-500 mb-16">Visi dan misi berdasarkan peraturan dan ketentuan</p>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
            {/* Card 1: UU No. 12 - Large */}
            <div className="md:col-span-2 bg-white border-2 border-yellow-400 shadow-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl cursor-pointer group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full -mr-8 -mt-8 group-hover:scale-125 transition-transform duration-300"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                UU No. 12 Tahun 2012
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                Pengembangan potensi kreatif, kepemimpinan, keprofesian, dan pengabdian masyarakat yang inovatif.
              </p>
            </div>

            {/* Card 2: PP No. 65 */}
            <div className="bg-white border-2 border-cyan-400 shadow-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl cursor-pointer group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full -mr-4 -mt-4 group-hover:scale-125 transition-transform duration-300"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                PP No. 65 Tahun 2013
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                Wadah untuk mencerdaskan kehidupan bangsa melalui Tridharma Perguruan Tinggi.
              </p>
            </div>

            {/* Card 3: Capaian Prodi */}
            <div className="bg-white border-2 border-yellow-400 shadow-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl cursor-pointer group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full -mr-4 -mt-4 group-hover:scale-125 transition-transform duration-300"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                Capaian Prodi Oseanografi
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                Membentuk profesionalitas, integritas moral, kemampuan analisis, inovasi, dan komitmen pembelajar sepanjang hayat.
              </p>
            </div>

            {/* Card 4: Konsepsi KM ITB */}
            <div className="bg-white border-2 border-cyan-400 shadow-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl cursor-pointer group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full -mr-4 -mt-4 group-hover:scale-125 transition-transform duration-300"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Konsepsi KM ITB
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                Membentuk karakter mandiri, kekeluargaan, demokratis, serta memenuhi kebutuhan pendidikan, kesejahteraan, dan aktualisasi diri.
              </p>
            </div>

            {/* Card 5: Dokumen HMO TRITON - Large */}
            <div className="md:col-span-2 bg-white border-2 border-yellow-400 shadow-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl cursor-pointer group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full -mr-8 -mt-8 group-hover:scale-125 transition-transform duration-300"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                Dokumen HMO TRITON
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                Kaderisasi berjenjang yang memupuk rasa empati dan pemenuhan tanggung jawab administratif/keuangan terpusat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INTERACTIVE TAGS SECTION ========== */}
      <section className="w-full bg-[#0A192F] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-2 font-serif flex items-center gap-3">
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            Analisis Kebutuhan Pokok
          </h2>
          <p className="text-yellow-400 mb-16">Prioritas strategis untuk pengembangan himpunan</p>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              'Kaderisasi Efektif',
              'Pengarsipan Akademik',
              'Pengabdian Masyarakat',
              'Lingkungan Inklusif',
              'Relasi Eksternal',
              'Optimalisasi Medkominfo',
              'Transparansi Keuangan'
            ].map((need, idx) => (
              <div
                key={idx}
                className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/10 to-cyan-500/10 border-2 border-yellow-400 hover:border-cyan-400 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                  {need}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/0 via-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/10 group-hover:via-yellow-400/20 group-hover:to-yellow-400/10 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute inset-0 rounded-full shadow-lg shadow-yellow-500/0 group-hover:shadow-yellow-500/30 transition-shadow duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};