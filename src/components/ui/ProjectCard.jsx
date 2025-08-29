import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "@/assets/assets";

const ProjectCard = ({
  img,
  nameProjects,
  description,
  techStack,
  linkGithub,
}) => {
  const swiperRef = useRef(null);
  const hoverTimerRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const handleOpenModal = (src) => {
    setCurrentImg(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImg("");
  };

  const handleMouseEnter = () => {
    hoverTimerRef.current = setTimeout(() => {
      swiperRef.current?.autoplay.start();
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimerRef.current);
    swiperRef.current?.autoplay.stop();
  };

  return (
    <div
      className="rounded-md space-y-4 my-4 dark:bg-black shadow-md overflow-hidden"
      onMouseLeave={handleMouseLeave}
    >
      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.autoplay.stop();
        }}
        modules={[Autoplay, Pagination]}
        loop={img.length > 1}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-52"
      >
        {img.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`${nameProjects} screenshot ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
              loading="lazy"
              onClick={() => handleOpenModal(src)}
              onMouseEnter={handleMouseEnter}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={currentImg}
            alt="Full"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}

      {/* Nama & Deskripsi */}
      <div>
        <h3 className="text-xl font-bold text-white">{nameProjects}</h3>
        <p className="text-sm text-white/80 mt-1 mb-5">{description}</p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link Github */}
      <div>
        <a
          href={linkGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs w-[120px] flex gap-2 items-center border border-[#e4e4e4]/80 rounded-sm py-1 px-3"
        >
          <img src={assets.github_icon_white} alt="GitHub" width="20" />
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
