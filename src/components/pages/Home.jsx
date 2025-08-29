import { assets, projects, technology } from "@/assets/assets";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Marquee } from "../magicui/marquee";
import { Particles } from "../magicui/particles";
import { ShimmerButton } from "../magicui/shimmer-button";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import ProjectCard from "../ui/ProjectCard";

const Home = () => {
  // Marque;
  const half = Math.ceil(technology.length);
  const firstRow = technology.slice(0, half);

  const ReviewCard = ({ img, name }) => {
    return (
      <section
        className={cn(
          "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4 max-sm:gap-[1px]",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-col border border-[#e4e4e4]/20 rounded-sm py-2 px-2 items-center gap-2 max-sm:space-x-[5px]">
          <img className="" width="75" alt="" src={img} />
          <p className="text-sm font-medium dark:text-white">{name}</p>
        </div>
      </section>
    );
  };
  // Marque
  return (
    <div className="font-GeneralSans-Regular">
      <header className="container max-w-6xl mx-auto my-3">
        <Navbar></Navbar>
      </header>

      <Particles className="absolute inset-0 -z-10" />
      <div className="hero relative container max-w-6xl  mx-auto flex flex-col items-center justify-center text-[#e4e4e4]/80 ">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <img
            src={assets.rizkiardi_img}
            className="rounded-full mt-[100px] mb-[5px] lg:w-[250px]"
            alt="Picture rizkiardi"
            width="200"
            loading="lazy"
          />
        </motion.div>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-center my-3 md:text-md"
        >
          Hi, I'm Rizki Ardi | Web Developer
        </motion.p>

        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-5 text-center font-semibold"
        >
          <h1 className="text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF]/90  to-gray-500 text-4xl md:text-4xl lg:text-5xl xl:text-5xl">
              Designing clean interfaces,
            </span>
          </h1>
          <h1 className="text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF]/90 to-gray-500 text-4xl md:text-4xl lg:text-5xl xl:text-5xl">
              crafting seamless web experiences
            </span>
          </h1>
        </motion.div>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="mailto:rizkiseptiardy@gmail.com"
          className=""
          target="_blank"
        >
          <ShimmerButton className="flex gap-3 mt-[25px] mb-[100px] py-3 px-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
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
        </motion.a>
      </div>

      <main className="">
        {/* technology */}
        <section className="technology w-full bg-[#2D2D2D]">
          <div className="tech-stack container max-w-6xl mx-auto py-10">
            <h2
              className="text-white text-2xl font-semibold pt-[30px] pb-[20px] max-lg:px-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="underline decoration-[#FCCA46] mr-2">
                Technology
              </span>
              Stack
            </h2>
            {/* marque */}
            <div className="relative pb-10 flex w-full flex-row items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:20s]">
                <div className="flex gap-2 md:gap-3">
                  {firstRow.map((technology, index) => (
                    <ReviewCard key={technology.name + index} {...technology} />
                  ))}
                </div>
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#2d2d2d]"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#2d2d2d]"></div>
            </div>
            {/* marque */}
          </div>
        </section>
        {/* technology */}

        {/* projects */}
        <section className="projects " id="projects">
          <div className="container max-w-6xl mx-auto">
            <h2
              className="text-white text-end text-2xl font-semibold pt-[50px] pb-[30px] max-lg:px-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              My
              <span className="underline decoration-[#FCCA46] ml-2">
                Projects
              </span>
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 md:gap-7 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3 2xl:grid-cols-3 gap-16 max-lg:px-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
        {/* projects */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
