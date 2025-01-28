import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/atos_logo.svg"
      alt="ATOS"
      width={60}
      height={5}
      className="text-white"
      priority
    />
  );
} 