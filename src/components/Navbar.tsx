import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Network, Briefcase, Mail, Users, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = {
    profil: [
      {
        to: '/sejarah',
        icon: <BookOpen className="w-6 h-6" />,
        title: 'Sejarah',
        desc: 'Latar Belakang, Visi Misi, & Tujuan',
      },
      {
        to: '/organogram',
        icon: <Network className="w-6 h-6" />,
        title: 'Organogram',
        desc: 'Struktur, Logo, & Arahan Kerja',
      },
    ],
    program: [
      {
        to: '#program-akademik',
        icon: <BookOpen className="w-6 h-6" />,
        title: 'Program Akademik',
        desc: 'Kegiatan pembelajaran dan pengembangan skill',
      },
      {
        to: '#program-sosial',
        icon: <Users className="w-6 h-6" />,
        title: 'Program Sosial',
        desc: 'Pengabdian masyarakat berkelanjutan',
      },
    ],
    kabar: [
      {
        to: '#berita-terkini',
        icon: <Award className="w-6 h-6" />,
        title: 'Berita Terkini',
        desc: 'Perkembangan dan pencapaian himpunan',
      },
      {
        to: '#agenda',
        icon: <Briefcase className="w-6 h-6" />,
        title: 'Agenda Kegiatan',
        desc: 'Jadwal event dan pertemuan mendatang',
      },
    ],
    kontak: [
      {
        to: '#hubungi-kami',
        icon: <Mail className="w-6 h-6" />,
        title: 'Hubungi Kami',
        desc: 'Email, telepon, dan media sosial',
      },
      {
        to: '#lokasi',
        icon: <Network className="w-6 h-6" />,
        title: 'Lokasi',
        desc: 'Alamat sekretariat HMO TRITON ITB',
      },
    ],
  };

  const DropdownMenu = ({ items }: { items: typeof menuItems.profil }) => (
    <div className="absolute left-0 mt-3 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-20">
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-[#0A192F] group/item"
            onClick={() => setOpenDropdown(null)}
          >
            <span className="flex-shrink-0 mt-1 text-blue-700 group-hover/item:text-yellow-400 transition-colors">
              {item.icon}
            </span>
            <span className="flex-1">
              <span className="block font-semibold text-gray-900 text-xs uppercase tracking-wide group-hover/item:text-white transition-colors">
                {item.title}
              </span>
              <span className="block text-xs text-gray-500 mt-1 group-hover/item:text-gray-300 transition-colors">
                {item.desc}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/20 px-8 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4">
        <img
          src="/assets/logos/logo-hmo.jpg"
          className="h-10 w-auto object-contain"
          alt="HMO Logo"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <span className="font-serif text-slate-950 text-lg font-bold tracking-tight">HMO TRITON ITB</span>
      </Link>
      <div className="flex items-center gap-8 text-[11px] uppercase tracking-widest font-semibold text-slate-900/80">
        {/* PROFIL */}
        <div
          className="relative group"
          onMouseEnter={() => setOpenDropdown('profil')}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button className="navbar-link hover:text-slate-950 transition-colors relative pb-1">
            PROFIL
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </button>
          <AnimatePresence>
            {openDropdown === 'profil' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <DropdownMenu items={menuItems.profil} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* PROGRAM */}
        <div
          className="relative group"
          onMouseEnter={() => setOpenDropdown('program')}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button className="navbar-link hover:text-slate-950 transition-colors relative pb-1">
            PROGRAM
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </button>
          <AnimatePresence>
            {openDropdown === 'program' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <DropdownMenu items={menuItems.program} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* KABAR HIMPUNAN */}
        <div
          className="relative group"
          onMouseEnter={() => setOpenDropdown('kabar')}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button className="navbar-link hover:text-slate-950 transition-colors relative pb-1">
            KABAR HIMPUNAN
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </button>
          <AnimatePresence>
            {openDropdown === 'kabar' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <DropdownMenu items={menuItems.kabar} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* KONTAK */}
        <div
          className="relative group"
          onMouseEnter={() => setOpenDropdown('kontak')}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button className="navbar-link hover:text-slate-950 transition-colors relative pb-1">
            KONTAK
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </button>
          <AnimatePresence>
            {openDropdown === 'kontak' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <DropdownMenu items={menuItems.kontak} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};
