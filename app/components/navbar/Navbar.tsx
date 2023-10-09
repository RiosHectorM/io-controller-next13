'use client';
import { useState } from 'react';
//import { useSession } from 'next-auth/react';
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export const Navbar = () => {
  //const { data } = useSession();
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="w-full flex justify-around">
      <Logo />
      <div className="ml-4">
        <Link href="/home">
          <span className="block text-flightdeck-gold font-bold py-4 px-1 sm:px-5 rounded-full hover:bg-flightdeck-black transition cursor-pointer">
            Home
          </span>
        </Link>
      </div>
      <div className="ml-4">
        <Link href="/about">
          <span className="block text-flightdeck-gold font-bold py-4 px-1 sm:px-5 rounded-full hover:bg-flightdeck-black transition cursor-pointer">
            Purchases
          </span>
        </Link>
      </div>
      <div className="ml-4">
        <Link href="/membership">
          <span className="block text-flightdeck-gold font-bold py-4 px-1 sm:px-5 rounded-full hover:bg-flightdeck-black transition cursor-pointer">
            Sales
          </span>
        </Link>
      </div>
    </div>
  );
};
