import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logo = (props: LogoProps) => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      onClick={() => router.push('/')}
      className="flex cursor-pointer w-full justify-start items-center ml-4 mt-2"
    >
      <Image
        src="/images/icons/calculadora.png"
        alt="Logo"
        height={16}
        width={48}
      />
    </div>
  );
};

export default Logo;
