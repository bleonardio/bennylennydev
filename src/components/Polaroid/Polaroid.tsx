import Image, { StaticImageData } from "next/image";

type PolaroidProps = {
  src: StaticImageData;
  alt: string;
  label: string;
};

const Polaroid = ({ src, alt, label }: PolaroidProps) => {
  return (
    <div className="p-4 bg-light rounded-md shadow-md rotate-2">
      <Image src={src} alt={alt} className="object-cover w-fit max-h-[340px]" />

      <p className="mt-2 font-bold">{label}</p>
    </div>
  );
};

export default Polaroid;
