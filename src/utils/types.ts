export interface Card {
  id: string;
  name: string;
  arcana: string;
  suit?: string;
  image: string;
  keywords: string[];
  reversedKeywords: string[];
}

export interface DrawnCard extends Card {
  isReversed: boolean;
}

export interface TarotReading {
  cards: DrawnCard[];
  spread: string;
  timestamp: Date;
}
