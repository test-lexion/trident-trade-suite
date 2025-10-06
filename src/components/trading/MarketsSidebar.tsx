import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Market {
  pair: string;
  price: number;
  change24h: number;
  volume: string;
}

const MOCK_MARKETS: Market[] = [
  { pair: "BTC/USD", price: 64250.50, change24h: 2.34, volume: "$2.4B" },
  { pair: "ETH/USD", price: 3420.75, change24h: -1.23, volume: "$1.1B" },
  { pair: "SOL/USD", price: 142.30, change24h: 5.67, volume: "$450M" },
  { pair: "ARB/USD", price: 1.85, change24h: 3.21, volume: "$120M" },
  { pair: "AVAX/USD", price: 38.90, change24h: -0.87, volume: "$95M" },
  { pair: "MATIC/USD", price: 0.92, change24h: 1.45, volume: "$78M" },
];

export const MarketsSidebar = () => {
  const [selectedMarket, setSelectedMarket] = useState("BTC/USD");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMarkets = MOCK_MARKETS.filter((market) =>
    market.pair.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-full w-64 flex-col border-r border-border bg-card">
      {/* Search */}
      <div className="border-b border-border p-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search markets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Markets List */}
      <div className="flex-1 overflow-y-auto">
        {filteredMarkets.map((market) => (
          <button
            key={market.pair}
            onClick={() => setSelectedMarket(market.pair)}
            className={cn(
              "w-full border-b border-border p-3 text-left transition-colors hover:bg-muted/50",
              selectedMarket === market.pair && "bg-muted"
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">{market.pair}</span>
              {market.change24h >= 0 ? (
                <TrendingUp className="h-4 w-4 text-success" />
              ) : (
                <TrendingDown className="h-4 w-4 text-danger" />
              )}
            </div>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="font-mono-numeric text-lg">
                ${market.price.toLocaleString()}
              </span>
              <span
                className={cn(
                  "text-sm font-medium",
                  market.change24h >= 0 ? "text-success" : "text-danger"
                )}
              >
                {market.change24h >= 0 ? "+" : ""}
                {market.change24h}%
              </span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              Vol: {market.volume}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
