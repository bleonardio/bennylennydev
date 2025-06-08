
type CinemaScreenProps = {
  src: string;
}

const CinemaScreen = ({ src }: CinemaScreenProps) => {
  return (
    <div className="relative bg-black p-4">
      {/* Top Curtain */}
      <div className="absolute top-0 left-0 w-full h-12 bg-red-900 rounded-b-3xl shadow-md z-10" />

      {/* Left Curtain */}
      <div className="absolute top-0 left-0 w-6 h-full bg-red-900 rounded-r-3xl shadow-md z-30" />

      {/* Right Curtain */}
      <div className="absolute top-0 right-0 w-6 h-full bg-red-900 rounded-l-3xl shadow-md z-30" />

      {/* Screen */}
      <div className="relative z-20 aspect-video w-full max-w-3xl mx-auto border-4 border-black lg:max-w-[960px]">
        <iframe
          src={src} width="100%" height="100%"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
    </div>

  );
}

export default CinemaScreen;