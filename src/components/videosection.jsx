import { useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Inicia en reproducción automática

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="h-screen w-full bg-black flex items-center justify-center relative">
      <div className="w-4/5 overflow-hidden rounded-3xl shadow-xl border-4 border-gray-800">
        <video
          ref={videoRef}
          className="w-full h-auto object-cover"
          autoPlay
          loop
          playsInline
          preload="auto"
          poster="/cover.png"
        >
          <source src="/comercia.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      {/* Botón circular de Play/Pause */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-6 right-6 bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-600 shadow-lg transition duration-300"
      >
        {isPlaying ? "▶" : "▶"}
      </button>
    </section>
  );
};

export default VideoSection;