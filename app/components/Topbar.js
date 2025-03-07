'use client';

import Image from 'next/image';

const Topbar = () => {
  return (
    <nav className="w-full bg-white border-b-[3px] border-black">
      <div className="container mx-auto flex justify-center md:justify-start items-center py-4 px-4">
        <Image
          src="/filaquin-brand.svg"
          alt="Filaquin Brand"
          width={180}
          height={40}
          priority
        />
      </div>
    </nav>
  )
}

export default Topbar;
