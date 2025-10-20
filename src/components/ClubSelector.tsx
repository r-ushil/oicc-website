'use client';

interface ClubSelectorProps {
  selectedClub: string;
  onClubChange: (clubId: string) => void;
}

export default function ClubSelector({ selectedClub, onClubChange }: ClubSelectorProps) {
  const clubs = [
    { id: '27452', name: 'Old Imperials CC', shortName: 'OICC' },
    { id: '3597', name: 'Imperial College Union CC', shortName: 'ICUCC' },
  ];

  return (
    <div className="flex gap-4 justify-center mb-8">
      {clubs.map((club) => (
        <button
          key={club.id}
          onClick={() => onClubChange(club.id)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            selectedClub === club.id
              ? 'bg-blue-700 text-white shadow-lg border-2 border-yellow-500'
              : 'bg-white text-blue-900 border-2 border-gray-300 hover:border-blue-500'
          }`}
        >
          {club.name}
        </button>
      ))}
    </div>
  );
}
