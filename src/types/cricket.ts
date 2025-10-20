export interface Club {
  id: string;
  name: string;
  shortName: string;
}

export interface PlayerStats {
  player_id: string;
  player_name: string;
  runs?: number;
  wickets?: number;
  catches?: number;
  matches?: number;
  average?: number;
  best_bowling?: string;
  best_batting?: number;
}

export interface Award {
  year: number;
  awardName: string;
  playerName: string;
  category: string;
}

export interface SeasonStats {
  year: number;
  topRunScorers: PlayerStats[];
  topWicketTakers: PlayerStats[];
  topCatches: PlayerStats[];
}

export interface HonoursData {
  club: Club;
  currentSeason: SeasonStats;
  allTimeRecords: {
    mostRuns: PlayerStats[];
    mostWickets: PlayerStats[];
    mostCatches: PlayerStats[];
  };
  recentAwards: Award[];
}
