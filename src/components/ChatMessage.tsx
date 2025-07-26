import { DrawnCard } from '@utils/types';
import { TarotCard } from './TarotCard';
import { Card } from '@components/ui/card';
import { cn } from '@utils/helpers';

interface ChatMessageProps {
  type: 'user' | 'ai' | 'cards';
  content: string;
  cards?: DrawnCard[];
  timestamp: Date;
}

export const ChatMessage = ({ type, content, cards, timestamp }: ChatMessageProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={cn(
      "flex gap-3 mb-6",
      type === 'user' ? 'justify-end' : 'justify-start'
    )}>
      {type !== 'user' && (
        <div className="w-8 h-8 rounded-full gradient-reader flex items-center justify-center flex-shrink-0 mystical-glow">
          <span className="text-lg">🔮</span>
        </div>
      )}

      <div className={cn(
        "max-w-2xl space-y-3",
        type === 'user' ? 'items-end' : 'items-start'
      )}>
        {cards && cards.length > 0 && (
          <div className="flex gap-4 justify-center flex-wrap">
            {cards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="animate-in fade-in duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <TarotCard
                  card={card}
                  isRevealed={true}
                />
              </div>
            ))}
          </div>
        )}

        <Card className={cn(
          "p-4",
          type === 'user'
            ? 'bg-primary text-primary-foreground ml-auto'
            : 'bg-card mystical-glow-hover-only'
        )}>
          <div className="prose prose-sm max-w-none">
            {type === 'ai' ? (
              <div className="space-y-2">
                <div className="text-accent text-sm font-medium">✨ Mystic Oracle</div>
                <div className="whitespace-pre-wrap">{content}</div>
              </div>
            ) : (
              <div className="whitespace-pre-wrap">{content}</div>
            )}
          </div>
          <div className="text-xs opacity-70 mt-2 text-right">
            {formatTime(timestamp)}
          </div>
        </Card>
      </div>

      {type === 'user' && (
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
          <span className="text-lg">👤</span>
        </div>
      )}
    </div>
  );
};