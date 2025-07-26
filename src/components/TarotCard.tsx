import { DrawnCard } from '@utils/types';
import { cn } from '@utils/helpers';

interface TarotCardProps {
  card: DrawnCard;
  isRevealed?: boolean;
  className?: string;
}

export const TarotCard = ({ card, isRevealed = true, className }: TarotCardProps) => {
  return (
    <div className={cn(
      "relative w-32 h-48 sm:w-40 sm:h-60 mx-auto",
      className
    )}>
      {!isRevealed ? (
        <div
          className="w-full h-full rounded-lg mystical-glow-hover-only overflow-hidden bg-cover bg-center"
          // style={{ backgroundImage: `url(${tarotCardBack})` }}
        >
          <div className="w-full h-full bg-black/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl mb-1">🔮</div>
              <div className="text-xs font-medium text-white/90">Mystic</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={cn(
          "w-full h-full card-gradient border-2 border-accent-30 rounded-lg mystical-glow-hover-only card-reveal overflow-hidden",
          card.isReversed && "rotate-180"
        )}>
          <div className="p-2 sm:p-3 h-full flex flex-col relative">
            {/* Mystical corner decorations */}
            <div className="absolute top-1 left-1 w-4 h-4 border-l-2 border-t-2 border-accent-50 rounded-tl-lg" />
            <div className="absolute top-1 right-1 w-4 h-4 border-r-2 border-t-2 border-accent-50 rounded-tr-lg" />
            <div className="absolute bottom-1 left-1 w-4 h-4 border-l-2 border-b-2 border-accent-50 rounded-bl-lg" />
            <div className="absolute bottom-1 right-1 w-4 h-4 border-r-2 border-b-2 border-accent-50 rounded-br-lg" />

            <div className="text-center mb-2 z-10">
              <h3 className="text-xs sm:text-sm font-bold text-accent leading-tight">{card.name}</h3>
              {card.isReversed && (
                <span className="text-xs text-muted-foreground">(Reversed)</span>
              )}
            </div>

            <div className="flex-1 bg-card-gradient rounded flex items-center justify-center relative overflow-hidden">
              {/* Card artwork placeholder with mystical symbol */}
              <div className="absolute inset-0 bg-card-color-gradient" />
              <div className="relative z-10 text-center">
                <div className="text-3xl sm:text-5xl opacity-60 mb-1">
                  {card.arcana === 'Major' ? '✨' : getSuitSymbol(getSuitFromName(card.name))}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {getCardNumber(card.name)}
                </div>
              </div>

              {/* Mystical energy effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-shimmer" />
            </div>

            <div className="mt-2 text-center z-10">
              <div className="text-xs text-muted-foreground capitalize">{card.arcana} arcana</div>
              <div className="text-xs text-accent-70 mt-1">
                {card.isReversed ? card.reversedKeywords[0] : card.keywords[0]}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function getSuitFromName(name: string): string {
  if (name.toLowerCase().includes('cups')) return 'cups';
  if (name.toLowerCase().includes('pentacles')) return 'pentacles';
  if (name.toLowerCase().includes('swords')) return 'swords';
  if (name.toLowerCase().includes('wands')) return 'wands';
  return '';
}

function getSuitSymbol(suit?: string): string {
  const symbols = {
    cups: '💧',
    pentacles: '🪙',
    swords: '⚔️',
    wands: '🔥'
  };
  return symbols[suit as keyof typeof symbols] || '🌟';
}

function getCardNumber(name: string): string {
  if (name.includes('Ace')) return 'I';
  if (name.includes('Two')) return 'II';
  if (name.includes('Three')) return 'III';
  if (name.includes('Four')) return 'IV';
  if (name.includes('Five')) return 'V';
  if (name.includes('Six')) return 'VI';
  if (name.includes('Seven')) return 'VII';
  if (name.includes('Eight')) return 'VIII';
  if (name.includes('Nine')) return 'IX';
  if (name.includes('Ten')) return 'X';
  if (name.includes('Page')) return 'P';
  if (name.includes('Knight')) return 'Kn';
  if (name.includes('Queen')) return 'Q';
  if (name.includes('King')) return 'K';
  return '';
}