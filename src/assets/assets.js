import html5 from "./icons/HTML5.png";
import css3 from "./icons/CSS3.png";
import javascript from "./icons/JavaScript.png";
import figma from "./icons/Figma.png";
import tailwindcss from "./icons/Tailwind-CSS.png";
import vite from "./icons/Vite-js.png";
import react from "./icons/React.png";
import github from "./icons/GitHub.png";
import typescript from "./icons/TypeScript.png";
import nextjs from "./icons/Nextjs.png";
import nextjs_white from "./icons/nextjs-white.png";
import laravel from "./icons/Laravel.png";
import eye_solid from "./icons/eye-solid-full.svg";
import cross_orange from "./icons/cross-orange.png";

import download_icon from "./icons/download-line.png";
import logo from "./images/logo-rizkiardi.png";
import rizkiardi_img from "./images/rizkiardi.png";
import ppdb1 from "./images/ppdb-1.png";
import ppdb2 from "./images/ppdb-2.png";
import ppdb3 from "./images/ppdb-3.png";
import ppdb4 from "./images/ppdb-4.png";
import ppdb5 from "./images/ppdb-5.png";
import ppdb6 from "./images/ppdb-6.png";
import calculator_app from "./images/Calculator App.png";
import js_documentation from "./images/JS Documentation-layout.png";
import tokobit from "./images/TokoBit-app.png";
import github_white from "./icons/github-white.png";
import linkedin_white from "./icons/LinkedIn-White.png";
import rizkiardi_transparent from "./images/rizkiardi-transparent.png";
import hacktiv8_logo from "./images/hacktiv8-logo.jpg";
import dicoding_logo from "./images/dicoding_logo.jpg";
import bangkit_logo from "./images/bangkit_academy_logo.jpg";
import daihatsu_logo from "./images/Daihatsu-logo.png";
import yamaha_logo from "./images/YamahaMotor-logo.png";
import hacktiv8_certificate from "/certificates/Sertifikat IBM Wave 5 - Rizki Septi Ardi.pdf";
import bangkit_certificate from "/certificates/[Bangkit 2024 Batch 2] Certificate - C264B4KY3916.pdf";
import sib_certificate from "/certificates/[SIB Cycle 5] Sertifikat - F264YB259.pdf";

import sertifikat_dasar_pemrograman from "./images/Sertifikat - Memulai Dasar Pemrograman untuk Menjadi Pengembang Software.jpg";
import sertifikat_solo_learn from "./images/CERTIFICATE Solo Learn - Web Development.jpg";
import sertifikat_machine_learning from "./images/Sertifikat - Belajar Penerapan Machine Learning dengan Google Cloud.jpg";
import sertifikat_aplikasi_backend from "./images/Sertifikat - Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud.jpg";
import sertifikat_dasar_js from "./images/Sertifikat - Belajar Dasar Pemrograman Javascript.jpg";
import sertifikat_dasar_git from "./images/Sertifikat - Belajar Dasar Git dengan GitHub.jpg";
import sertifikat_dasar_web from "./images/Sertifikat - Belajar Dasar Pemrograman Web.jpg";
import sertifikat_freecodecamp_responsive from "./images/CERTIFICATE freecodecamp - Responsive Web Design.png";
import sertifikat_fe_pemula from "./images/Sertifikat - Belajar Membuat Front End Web Pemula.jpg";
import sertifikat_fundamental_fe_web from "./images/Sertifikat - Belajar Fundamental Front-End Web Development.jpg";
import sertifikat_fe_expert from "./images/Sertifikat - Menjadi Front-End Web Developer Expert.jpg";
import sertifikat_IBM from "./images/Sertifikat IBM Wave 5.jpg";

export const assets = {
  logo,
  html5,
  css3,
  javascript,
  figma,
  tailwindcss,
  vite,
  react,
  github,
  typescript,
  nextjs,
  nextjs_white,
  laravel,
  download_icon,
  rizkiardi_img,

  ppdb1,
  ppdb2,
  ppdb3,
  ppdb4,
  ppdb5,
  ppdb6,
  calculator_app,
  js_documentation,
  tokobit,
  github_white,
  linkedin_white,
  rizkiardi_transparent,
  hacktiv8_logo,
  dicoding_logo,
  bangkit_logo,
  daihatsu_logo,
  yamaha_logo,
  hacktiv8_certificate,
  bangkit_certificate,
  sib_certificate,
  eye_solid,
  cross_orange,

  sertifikat_dasar_pemrograman,
  sertifikat_solo_learn,
  sertifikat_machine_learning,
  sertifikat_aplikasi_backend,
  sertifikat_dasar_js,
  sertifikat_dasar_git,
  sertifikat_dasar_web,
  sertifikat_freecodecamp_responsive,
  sertifikat_fe_pemula,
  sertifikat_fundamental_fe_web,
  sertifikat_fe_expert,
  sertifikat_IBM,
};

export const technology = [
  {
    name: "HTML5",
    img: assets.html5,
  },
  {
    name: "CSS3",
    img: assets.css3,
  },
  {
    name: "JavaScript",
    img: assets.javascript,
  },
  // {
  //   name: "Figma",
  //   img: assets.figma,
  // },
  {
    name: "TailwindCSS",
    img: assets.tailwindcss,
  },
  {
    name: "Vite",
    img: assets.vite,
  },
  {
    name: "React",
    img: assets.react,
  },
  {
    name: "NextJS",
    img: assets.nextjs_white,
  },
  {
    name: "Laravel",
    img: assets.laravel,
  },
  {
    name: "GitHub",
    img: assets.github_white,
  },
  // {
  //   name: "TypeScript",
  //   img: assets.typescript,
  // },
];

export const projects = [
  {
    img: [
      assets.ppdb1,
      assets.ppdb2,
      assets.ppdb3,
      assets.ppdb4,
      assets.ppdb5,
      assets.ppdb6,
    ],
    nameProjects: "Sistem Informasi PPDB SMK VIP Maarif NU 1 Kemiri",
    description:
      "The information system was created using the Waterfall method to simplify the registration process for new students at SMK VIP Maarif NU 1 Kemiri. Users can register and view student status through the website.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TailwindCSS",
      "PHP",
      "Laravel",
      "MySQL",
    ],
    linkGithub: "https://github.com/rizzkiardi/ppdb-smkvipmaarif",
    livePreview: "#",
  },
  {
    img: [assets.tokobit],
    nameProjects: "TokoBit App",
    description:
      "TokoBit sells various types of plants. We offer a variety of fruit seeds, ornamental plants, and more.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    linkGithub: "https://github.com/rizzkiardi/TokoBit",
    livePreview: "https://tokobit.vercel.app",
  },
  {
    img: [assets.calculator_app],
    nameProjects: "Calculator App",
    description: "Aplikasi kalkulator sederhana.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    linkGithub: "https://github.com/rizzkiardi/calculator-app",
    livePreview: "#",
  },
  {
    img: [assets.js_documentation],
    nameProjects: "Technical Documentation Page",
    description:
      "Completing the FreeCodeCamp Responsive Web Design Curriculum, I worked on a JavaScript Technical Documentation Project to strengthen my skills in structuring web content.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    linkGithub: "https://github.com/rizzkiardi/technical-documentation-page",
    livePreview: "https://technical-documentation-js.vercel.app/",
  },
];
