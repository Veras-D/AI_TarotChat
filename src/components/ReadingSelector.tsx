'use client';

import { useState } from 'react';
import { Button } from '@components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/ui/select';
import { Card } from '@components/ui/card';
import { ReadingType } from '@utils/types';

export type { ReadingType };

interface ReadingSelectorProps {
  onStartReading: (question: string, type: ReadingType) => void;
  isLoading?: boolean;
}

const readingTypes: { value: ReadingType; label: string; description: string; icon: string }[] = [
  { value: 'single-card', label: 'Single Card', description: 'Quick guidance for your question', icon: '🃏' },
  { value: 'daily-card', label: 'Daily Card', description: 'Your card for today', icon: '☀️' },
  { value: 'advice', label: 'Advice', description: 'Wisdom from the cards', icon: '🔮' },
  { value: 'simple-question', label: 'Simple Question', description: 'Direct answer to your query', icon: '❓' },
  { value: 'yes-no', label: 'Yes or No', description: 'Clear yes or no guidance', icon: '⚖️' },
  { value: 'two-card', label: 'Two Cards', description: 'Two perspectives on your situation', icon: '🎭' },
  { value: 'positive-negative', label: 'Positive & Negative', description: 'The positive and negative aspects', icon: '⚡' },
  { value: 'three-card', label: 'Three Cards', description: 'Deep insight into your path', icon: '🔺' },
  { value: 'weekly-cards', label: 'Weekly Cards', description: 'Guidance for the week ahead', icon: '📅' },
  { value: 'past-present-future', label: 'Past, Present, Future', description: 'Your journey through time', icon: '⏳' },
  { value: 'love-relationship', label: 'Love & Relationship', description: 'Matters of the heart', icon: '💝' },
];

export const ReadingSelector = ({ onStartReading, isLoading }: ReadingSelectorProps) => {
  const [question, setQuestion] = useState('');
  const [selectedType, setSelectedType] = useState<ReadingType>('single-card');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onStartReading(question.trim(), selectedType);
    }
  };

  const selectedReading = readingTypes.find(r => r.value === selectedType);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold gradient-text">Mystic Whispers</h1>
        <p className="text-muted-foreground">Let the cards reveal their ancient wisdom</p>
      </div>

      <Card className="p-6 mystical-glow-hover-only">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-accent">Your Question</label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="What guidance do you seek from the cards?"
              className="w-full p-4 bg-input border border-border rounded-lg resize-none focus:ring-2 ring-primary transition-all mt-2"
              rows={3}
              maxLength={500}
            />
            <div className="text-xs text-muted-foreground text-right">
              {question.length}/500
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-accent">Reading Type</label>
            <Select value={selectedType} onValueChange={(value) => setSelectedType(value as ReadingType)}>
              <SelectTrigger className="w-full bg-input border-border mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {readingTypes.map((reading) => (
                  <SelectItem key={reading.value} value={reading.value}>
                    <div className="flex items-center gap-3">
                      <span>{reading.icon}</span>
                      <div>
                        <div className="font-medium text-left">{reading.label}</div>
                        <div className="text-xs text-muted-foreground">{reading.description}</div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedReading && (
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{selectedReading.icon}</span>
                <span className="font-medium text-accent">{selectedReading.label}</span>
              </div>
              <p className="text-sm text-muted-foreground">{selectedReading.description}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full mystical-glow"
            size="lg"
            disabled={!question.trim() || isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Consulting the cards...
              </div>
            ) : (
              'Draw the Cards'
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};