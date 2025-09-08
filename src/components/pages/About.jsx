import { assets } from "@/assets/assets";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Particles } from "../magicui/particles";
import { ShimmerButton } from "../magicui/shimmer-button";
import CertificateModal from "../ui/CertificateModal";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const myCertificate = [
  {
    name: "Sertifikat - Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    img: assets.sertifikat_dasar_pemrograman,
  },
  {
    name: "Sertifikat - Solo Learn Web Development",
    img: assets.sertifikat_solo_learn,
  },
  {
    name: "Sertifikat - Belajar Penerapan Machine Learning dengan Google Cloud",
    img: assets.sertifikat_machine_learning,
  },
  {
    name: "Sertifikat - Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    img: assets.sertifikat_aplikasi_backend,
  },
  {
    name: "Sertifikat - Belajar Dasar Pemrograman Javascript",
    img: assets.sertifikat_dasar_js,
  },
  {
    name: "Sertifikat - Belajar Dasar Git dengan GitHub",
    img: assets.sertifikat_dasar_git,
  },
  {
    name: "Sertifikat - Belajar Dasar Pemrograman Web",
    img: assets.sertifikat_dasar_web,
  },
  {
    name: "CERTIFICATE freecodecamp - Responsive Web Design",
    img: assets.sertifikat_freecodecamp_responsive,
  },
  {
    name: "Sertifikat - Belajar Membuat Front End Web Pemula",
    img: assets.sertifikat_fe_pemula,
  },
  {
    name: "Sertifikat - Belajar Fundamental Front-End Web Development",
    img: assets.sertifikat_fundamental_fe_web,
  },
  {
    name: "Sertifikat - Menjadi Front-End Web Developer Expert",
    img: assets.sertifikat_fe_expert,
  },
  {
    name: "Sertifikat - Student Developer Initiative Code Generations and Optimization",
    img: assets.sertifikat_IBM,
  },
];

const firstRow = myCertificate.slice(0, myCertificate.length / 2);
const secondRow = myCertificate.slice(myCertificate.length / 2);

const MyCertificateCard = ({ name, img }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Card */}
      <figure
        onClick={() => setIsOpen(true)}
        className={cn(
          "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl p-3"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-sm" width="400px" alt={name} src={img} />
        </div>
      </figure>

      {/* Modal */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-[50] flex items-center justify-center bg-[#191919]/85"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                className="relative w-full max-w-6xl h-auto"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full rounded-lg shadow-lg"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute flex items-center -top-8 right-0 border text-white px-2 py-0 lg:px-3 rounded-sm transition"
                >
                  <img
                    className="w-5 lg:w-6"
                    src={assets.cross_orange}
                    alt=""
                  />
                  <span className="mr-2 text-sm">Close</span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

const About = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <div className="font-GeneralSans-Regular">
      <header className="container max-w-6xl mx-auto my-3">
        <Navbar />
      </header>

      <main className="relative">
        <Particles className="absolute inset-0 -z-10" />

        <div className="about max-w-6xl mx-auto my-20 flex flex-col-2 gap-6 items-center justify-center text-[#e4e4e4]/80 md:flex max-md:flex-col max-lg:px-6">
          {/* Gambar profile langsung animate */}
          <div className="flex-1 flex-col justify-items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              className="relative rounded-full"
            >
              <img
                src={assets.rizkiardi_transparent}
                className="rounded-full max-md:w-[300px]"
                alt="Picture rizkiardi"
                width="400"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-3 my-5"
            >
              <a
                href="mailto:rizkiseptiardy@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButton className="flex gap-3 py-3 px-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  Hire me
                </ShimmerButton>
              </a>
              <a
                href="https://github.com/rizzkiardi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={assets.github_white} alt="Logo Github" width="25" />
              </a>
              <a
                href="https://linkedin.com/in/rizkiardi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.linkedin_white}
                  alt="Logo LinkedIn"
                  width="25"
                />
              </a>
            </motion.div>
          </div>

          {/* Teks bio langsung animate */}
          <div className="flex-1">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-start mt-3 mb-1"
            >
              Hi, I'm{" "}
              <span className="font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#e4e4e4]/80 to-gray-500">
                Rizki Ardi
              </span>
            </motion.h1>

            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-md text-start underline decoration decoration-[#FCCA46]"
            >
              Web Developer | Undergraduate Information Technology
            </motion.h2>

            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="my-5 text-center font-semibold"
            >
              <p className="text-md max-lg:text-sm font-thin leading-7 text-start ">
                I am a Bachelor of Information Technology graduate from the
                University of Muhammadiyah Purworejo (GPA 3.49) with a passion
                for technology and a proven commitment to delivering impactful
                digital solutions. With expertise in React.js and Laravel,
                supported by strong skills in HTML, CSS, and JavaScript. I
                specialize in building modern, and responsive web applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <p className="mb-2 text-md">Tools I use</p>
              <div className="flex flex-wrap gap-3 max-lg:gap-2">
                <img src={assets.html5} alt="Logo HTML5" className="w-[50px]" />
                <img src={assets.css3} alt="Logo CSS3" className="w-[50px]" />
                <img
                  src={assets.javascript}
                  alt="Logo JavaScript"
                  className="w-[50px]"
                />

                <img
                  src={assets.tailwindcss}
                  alt="Logo TailwindCSS"
                  className="w-[50px]"
                />
                <img src={assets.vite} alt="Logo Vite" className="w-[50px]" />
                <img src={assets.react} alt="Logo React" className="w-[50px]" />
                <img
                  src={assets.github_white}
                  alt="Logo GitHub"
                  className="w-[50px]"
                />

                <img
                  src={assets.nextjs_white}
                  alt="Logo Next JS"
                  className="w-[50px]"
                />
                <img
                  src={assets.laravel}
                  alt="Logo Laravel"
                  className="w-[50px]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Start MSIB */}
        <section className="w-full bg-[#2D2D2D] py-20">
          <div className="max-w-6xl mx-auto max-lg:px-6">
            <h2
              className="text-white text-2xl font-semibold text-start underline decoration-2 decoration-[#FCCA46]
            "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Magang & Studi Independent Bersertifikat
            </h2>

            <div className="work-card my-5 flex-col lg:flex lg:flex-row lg:space-x-10">
              {/* Bangkit */}
              <div
                className="mt-5 flex flex-col gap-3 lg:mt-0 lg:flex-1"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                {/* Kiri */}
                <div className="flex gap-3 items-start md:items-center w-full md:w-auto">
                  <img
                    src={assets.bangkit_logo}
                    alt="Logo Bangkit"
                    className="w-[75px] md:w-[100px]"
                  />

                  <div className="flex flex-col">
                    <p className="text-md font-semibold">
                      Bangkit Academy 2024 Batch 2 - Cloud Computing Cohort
                    </p>
                    <p className="text-sm mb-1">Student</p>

                    {/* Years untuk mobile */}
                    <p className="text-sm mt-1">August 2024 - December 2024</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveCertificate("bangkit")}
                  className="w-[100px] rounded-sm border hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
                >
                  Certificate
                </button>

                {/* description */}
                <details className="group mb-5 ">
                  <summary className="flex cursor-pointer items-center gap-2 list-none">
                    <span className=" transition-transform duration-500 group-open:rotate-90">
                      ▶
                    </span>
                    <span className="">Job Description</span>
                  </summary>{" "}
                  <p>
                    Developing backend applications using various Google Cloud
                    services, while learning the application of machine learning
                    in a cloud environment. In addition, actively building
                    personal branding through relevant and professional content
                    on LinkedIn.
                  </p>
                </details>
              </div>
              {activeCertificate === "bangkit" && (
                <CertificateModal
                  src={assets.bangkit_certificate}
                  isOpen={true}
                  onClose={() => setActiveCertificate(null)}
                />
              )}

              {/* Dicoding */}
              <div
                className="mt-5 flex flex-col gap-3 lg:mt-0 lg:flex-1"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                {/* Kiri */}
                <div className="flex gap-3 items-start md:items-center w-full md:w-auto">
                  <img
                    src={assets.dicoding_logo}
                    alt="Logo Dicoding"
                    className="w-[75px] md:w-[100px]"
                  />
                  <div className="flex flex-col">
                    <p className="text-md font-semibold">
                      Pengembang FrontEnd Web dan BackEnd
                    </p>
                    <p className="text-sm mb-1">Student</p>
                    {/* Years untuk mobile */}
                    <p className="text-sm mt-1 ">July 2023 - December 2023</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveCertificate("sib")}
                  className="w-[100px] rounded-sm border hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
                >
                  Certificate
                </button>

                {/* description */}
                <details className="group mb-5">
                  <summary className="flex cursor-pointer items-center gap-2 list-none">
                    <span className="transition-transform duration-500 group-open:rotate-90">
                      ▶
                    </span>
                    <span className="">Job Description</span>
                  </summary>{" "}
                  <p>
                    Pelatihan Pengembang Front-End Web dan Back-End 2023
                    Independent Study learns HTML, CSS, and JavaScript from
                    basic to advanced level for Web Application development.
                    There are soft skills such as Personal Productivity, Growth
                    Mindset, Communication and Networking, Personal Branding,
                    and Interview Communication. At the end of the study, we
                    worked on a capstone project, creating the MentalWell
                    Application, an online psychological counseling platform.
                  </p>
                </details>
              </div>
              {activeCertificate === "sib" && (
                <CertificateModal
                  src={assets.sib_certificate}
                  isOpen={true}
                  onClose={() => setActiveCertificate(null)}
                />
              )}
            </div>

            {/* Work Experience */}
            <div className="mt-20">
              <h2
                className="text-white text-2xl font-semibold text-start underline decoration-2 decoration-[#FCCA46]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Work Experiences
              </h2>

              <div className="work-card my-5 md:w-[85%] lg:w-[70%]">
                {/* Astra Daihatsu Motor */}
                <div
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  {/* Kiri */}
                  <div className="flex gap-3 items-start md:items-center w-full md:w-auto">
                    <img
                      src={assets.daihatsu_logo}
                      alt="Logo Astra Daihatsu Motor"
                      className="w-[75px] md:w-[100px]"
                    />
                    <div className="flex flex-col">
                      <p className="text-md font-semibold">
                        PT Astra Daihatsu Motor
                      </p>
                      <p className="text-sm mb-1">
                        Team Member - Assembly Plant 2
                      </p>

                      {/* Years untuk mobile */}
                      <p className="text-sm mt-1 md:hidden">
                        Maret 2018 - February 2020
                      </p>
                    </div>
                  </div>

                  {/* Kanan (hanya muncul di desktop) */}
                  <div>
                    <p className="text-sm hidden md:block md:mb-6">
                      Maret 2018 - February 2020
                    </p>
                  </div>
                </div>
                {/* description */}
                <div
                  className=""
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer items-center gap-2 list-none">
                      <span className="transition-transform duration-500 group-open:rotate-90">
                        ▶
                      </span>
                      <span className="">Job Description</span>
                    </summary>
                    <p className="">
                      Assembly Plant 2 is responsible for assembling several
                      vehicle models, including Daihatsu Xenia, Toyota Avanza,
                      Daihatsu Luxio, and Daihatsu GrandMax. I am assigned to
                      the front left door installation section and actively
                      contribute by submitting improvement suggestions through
                      the Suggestion System program in my work area at PT Astra
                      Daihatsu Motor.
                    </p>
                  </details>
                </div>

                {/* Yamaha */}
                <div
                  className="mt-10 flex flex-col  md:flex-row md:justify-between md:items-center gap-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  {/* Kiri */}
                  <div className="flex gap-3 items-start md:items-center w-full md:w-auto">
                    <img
                      src={assets.yamaha_logo}
                      alt="Logo Yamaha Motor"
                      className="w-[75px] md:w-[100px]"
                    />
                    <div className="flex flex-col">
                      <p className="text-md font-semibold">
                        PT Yamaha Indonesia Motor Mfg.
                      </p>
                      <p className="text-sm mb-1">
                        Production Operator - Engine Assy Production
                      </p>
                      {/* Years untuk mobile */}
                      <p className="text-sm mt-1 md:hidden">
                        January 2015 - December 2016
                      </p>
                    </div>
                  </div>

                  {/* Kanan (hanya muncul di desktop) */}
                  <div>
                    <p className="text-sm hidden md:block md:mb-6">
                      January 2015 - December 2016
                    </p>
                  </div>
                </div>
                {/* description */}
                <div
                  className="mb-5"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <details className="group mb-5 ">
                    <summary className="flex cursor-pointer items-center gap-2 list-none">
                      <span className=" transition-transform duration-500 group-open:rotate-90">
                        ▶
                      </span>
                      <span className="">Job Description</span>
                    </summary>
                    <p className="">
                      Engine Assy is a place to assemble motorcycle engines. I
                      work in the N-Max 155 motorcycle engine assembly section.
                      Especially the installation of the Engine Case fan. Ensure
                      that the engine Case fan is properly installed.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            {/* My Certificate */}
            {/* <div className="mt-20">
              <h2
                className="text-white text-2xl font-semibold text-start underline decoration-2 decoration-[#FCCA46]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                My Certificates
              </h2>

              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                  {firstRow.map((myCertificate) => (
                    <MyCertificateCard
                      key={myCertificate.name}
                      {...myCertificate}
                    />
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                  {secondRow.map((myCertificate) => (
                    <MyCertificateCard
                      key={myCertificate.name}
                      {...myCertificate}
                    />
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#2d2d2d]"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#2d2d2d]"></div>
              </div>
            </div> */}
          </div>
        </section>
        {/* End MSIB */}

        {/* Start My Certificate */}
        <section className="w-full bg-[#191919] py-20">
          <div className="w-full max-w-6xl mx-auto px-0">
            <div className="">
              <h2
                className="text-white text-2xl font-semibold text-end underline decoration-2 decoration-[#FCCA46] px-6 lg:px-0 mb-5"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                My Certificates
              </h2>

              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                  {firstRow.map((myCertificate) => (
                    <MyCertificateCard
                      key={myCertificate.name}
                      {...myCertificate}
                    />
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                  {secondRow.map((myCertificate) => (
                    <MyCertificateCard
                      key={myCertificate.name}
                      {...myCertificate}
                    />
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#191919]"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#191919]"></div>
              </div>
            </div>
          </div>
        </section>
        {/* End My Certificate */}
      </main>

      <Footer />
    </div>
  );
};

export default About;
