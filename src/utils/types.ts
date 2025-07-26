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

export interface Message {
  id: string;
  type: 'user' | 'ai' | 'cards';
  content: string;
  timestamp: Date;
  cards?: DrawnCard[];
}

export type ReadingType =
  | 'single-card'
  | 'daily-card'
  | 'advice'
  | 'simple-question'
  | 'yes-no'
  | 'two-card'
  | 'positive-negative'
  | 'three-card'
  | 'weekly-cards'
  | 'past-present-future'
  | 'love-relationship';
