import Image from "next/image";

type IconButtonParams = {
    imgSrc: string;
    altImg: string;
    linkToContact?: string;
}


const IconButton: React.FC<IconButtonParams> = ({imgSrc, altImg, linkToContact}) => {
  const redirectPage = () => {
    if(linkToContact) {
        window.open(linkToContact, "_blank", "noopener,noreferrer");
    }
  }
  return (
    <button onClick={redirectPage} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#c9eef7] to-[#c9c9f5] text-center text-black drop-shadow-sm transition-colors duration-150 hover:bg-gray-100 hover:scale-110 hover:cursor-pointer">
      <Image src={imgSrc} alt={altImg} 
        width={24}
        height={24}
        className="object-contain"/>
    </button>
  );
};

export default IconButton;