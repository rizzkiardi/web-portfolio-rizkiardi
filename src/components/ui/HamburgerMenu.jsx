import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-6 h-3 flex flex-col justify-between items-center group"
    >
      {/* Garis 1 */}
      <span
        className={`block h-[2px] w-6 bg-[#e4e4e4]/80 rounded transition-all duration-300 origin-center ${
          isOpen ? "rotate-45 translate-y-[5px]" : ""
        }`}
      />

      {/* Garis 2 */}
      <span
        className={`block h-[2px] w-6 bg-[#e4e4e4]/80 rounded transition-all duration-300 origin-center ${
          isOpen ? "-rotate-45 -translate-y-[5px]" : ""
        }`}
      />
    </div>
  );
}
