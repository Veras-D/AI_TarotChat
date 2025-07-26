import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function formatTimestamp(date: Date): string {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function getReadingTypeDescription(type: string): string {
  const descriptions: Record<string, string> = {
    'single-card': 'Quick guidance for your question',
    'daily-card': 'Your card for today',
    'advice': 'Wisdom from the cards',
    'simple-question': 'Direct answer to your query',
    'yes-no': 'Clear yes or no guidance',
    'two-card': 'Two perspectives on your situation',
    'positive-negative': 'The positive and negative aspects',
    'three-card': 'Deep insight into your path',
    'weekly-cards': 'Guidance for the week ahead',
    'past-present-future': 'Your journey through time',
    'love-relationship': 'Matters of the heart'
  };

  return descriptions[type] || 'Mystical guidance from the cards';
}

export function validateQuestion(question: string): boolean {
  return question.trim().length > 0 && question.trim().length <= 500;
}

export function sanitizeMessage(message: string): string {
  return message.trim().replace(/\s+/g, ' ');
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
