import { projects } from "@/assets/assets";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <div className="font-GeneralSans-Regular">
      <header>
        <Navbar />
      </header>
      {/* project */}
      <section className="projects " id="projects">
        <div className="container max-w-6xl mx-auto">
          <h1
            className="text-start text-3xl max-lg:text-2xl font-semibold mt-[100px] mb-[10px] max-lg:px-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            My
            <span className="underline decoration-[#FCCA46] ml-2">
              Projects
            </span>
          </h1>
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

      <Footer />
    </div>
  );
};

export default Projects;
