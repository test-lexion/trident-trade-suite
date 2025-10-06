import { Card } from "@/components/ui/card";
import { TrendingUp, Clock } from "lucide-react";

export const TradingChart = () => {
  return (
    <Card className="flex h-[500px] flex-col border-border bg-card">
      {/* Chart Header */}
      <div className="flex items-center justify-between border-b border-border p-4">
        <div className="flex items-center gap-6">
          <div>
            <div className="text-sm text-muted-foreground">BTC/USD</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono-numeric">$64,250.50</span>
              <span className="text-success flex items-center gap-1 text-sm">
                <TrendingUp className="h-4 w-4" />
                +2.34%
              </span>
            </div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <div className="text-sm text-muted-foreground">Mark Price</div>
            <div className="font-mono-numeric text-lg">$64,248.32</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <div className="text-sm text-muted-foreground">Funding Rate</div>
            <div className="flex items-center gap-2">
              <span className="font-mono-numeric text-success text-lg">+0.0125%</span>
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">in 2h 34m</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Area - Placeholder */}
      <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-background to-muted/20 p-8">
        <div className="text-center">
          <div className="mb-2 text-6xl font-bold font-mono-numeric text-primary/20">
            📈
          </div>
          <div className="text-muted-foreground">
            Advanced TradingView Chart
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            Real-time price action and technical analysis
          </div>
        </div>
      </div>
    </Card>
  );
};
