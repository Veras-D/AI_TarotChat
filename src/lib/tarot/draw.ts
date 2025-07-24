import { tarotDeck } from './cards';

export interface DrawnCard {
  id: string;
  name: string;
  arcana: string;
  suit?: string;
  image: string;
  keywords: string[];
  reversedKeywords: string[];
  isReversed: boolean;
}

export interface TarotReading {
  cards: DrawnCard[];
  spread: string;
  timestamp: Date;
}

export class TarotDraw {
  private shuffledDeck: typeof tarotDeck;

  constructor() {
    this.shuffledDeck = [...tarotDeck];
    this.shuffle();
  }

  private shuffle(): void {
    for (let i = this.shuffledDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledDeck[i], this.shuffledDeck[j]] = [this.shuffledDeck[j], this.shuffledDeck[i]];
    }
  }

  private drawCard(): DrawnCard {
    if (this.shuffledDeck.length === 0) {
      this.shuffledDeck = [...tarotDeck];
      this.shuffle();
    }

    const card = this.shuffledDeck.pop()!;
    const isReversed = Math.random() < 0.5;

    return {
      ...card,
      isReversed
    };
  }

  drawSingle(): TarotReading {
    return {
      cards: [this.drawCard()],
      spread: "Single Card",
      timestamp: new Date()
    };
  }

  drawTwoCard(): TarotReading {
    return {
      cards: [
        this.drawCard(), // Positive
        this.drawCard()  // Negative
      ],
      spread: "Two Card (Positive-Negative)",
      timestamp: new Date()
    };
  }

  drawThreeCard(): TarotReading {
    return {
      cards: [
        this.drawCard(), // Past
        this.drawCard(), // Present
        this.drawCard()  // Future
      ],
      spread: "Three Card (Past-Present-Future)",
      timestamp: new Date()
    };
  }

  drawCelticCross(): TarotReading {
    return {
      cards: [
        this.drawCard(), // Present situation
        this.drawCard(), // Challenge/Cross
        this.drawCard(), // Distant past/Foundation
        this.drawCard(), // Recent past
        this.drawCard(), // Possible outcome
        this.drawCard(), // Near future
        this.drawCard(), // Your approach
        this.drawCard(), // External influences
        this.drawCard(), // Hopes and fears
        this.drawCard()  // Final outcome
      ],
      spread: "Celtic Cross",
      timestamp: new Date()
    };
  }

  drawCustom(numberOfCards: number): TarotReading {
    const cards: DrawnCard[] = [];

    for (let i = 0; i < numberOfCards; i++) {
      cards.push(this.drawCard());
    }

    return {
      cards,
      spread: `Custom ${numberOfCards} Card Draw`,
      timestamp: new Date()
    };
  }

  drawMajorArcanaOnly(): TarotReading {
    const majorArcana = tarotDeck.filter(card => card.arcana === 'major');
    const shuffled = [...majorArcana];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const card = shuffled[0];
    const isReversed = Math.random() < 0.5;

    return {
      cards: [{
        ...card,
        isReversed
      }],
      spread: "Major Arcana Only",
      timestamp: new Date()
    };
  }

  drawBySuit(suit: 'cups' | 'pentacles' | 'swords' | 'wands'): TarotReading {
    const suitCards = tarotDeck.filter(card => card.suit === suit);
    const shuffled = [...suitCards];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const card = shuffled[0];
    const isReversed = Math.random() < 0.5;

    return {
      cards: [{
        ...card,
        isReversed
      }],
      spread: `${suit.charAt(0).toUpperCase() + suit.slice(1)} Suit Only`,
      timestamp: new Date()
    };
  }

  resetDeck(): void {
    this.shuffledDeck = [...tarotDeck];
    this.shuffle();
  }

  getRemainingCards(): number {
    return this.shuffledDeck.length;
  }
}

export const tarotDrawer = new TarotDraw();