import React from "react";

const CertificateModal = ({ src, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-[#191919]/80 flex items-center justify-center z-50 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full h-full max-w-6xl max-h-[90vh] animate-zoomIn"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={src}
          className="w-full h-full rounded-lg shadow-lg"
          title="Certificate"
        />
        <button
          onClick={onClose}
          className="absolute top-[-30px] right-0 border text-white px-3 py-0 rounded-sm"
        >
          ✕ Close
        </button>
      </div>
    </div>
  );
};

export default CertificateModal;
