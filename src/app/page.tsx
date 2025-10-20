'use client';

import { useState } from 'react';
import Image from 'next/image';
import ClubSelector from '@/components/ClubSelector';
import HonoursBoard from '@/components/HonoursBoard';

export default function Home() {
  const [selectedClub, setSelectedClub] = useState('27452'); // Default to OICC

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Cricket Club Logo"
            width={150}
            height={150}
            priority
          />
        </div>
        <ClubSelector
          selectedClub={selectedClub}
          onClubChange={setSelectedClub}
        />
        <HonoursBoard clubId={selectedClub} />
      </div>
    </main>
  );
}
