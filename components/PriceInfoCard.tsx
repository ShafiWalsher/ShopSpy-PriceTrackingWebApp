import Image from "next/image";

interface PriceCardProps {
  title: string;
  iconSrc: string;
  value: string;
}

const PriceInfoCard = ({ title, iconSrc, value }: PriceCardProps) => {
  return (
    <div className="price-info_card">
      <p className="text-base text-black-100">{title}</p>
      <div className="flex gap-3">
        <Image src={iconSrc} alt={title} width={24} height={24} />
        <p className="text-secondary text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default PriceInfoCard;
