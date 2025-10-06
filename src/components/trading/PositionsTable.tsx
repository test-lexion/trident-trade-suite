import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Position {
  pair: string;
  side: "long" | "short";
  size: number;
  entryPrice: number;
  markPrice: number;
  liquidationPrice: number;
  pnl: number;
  pnlPercent: number;
}

const MOCK_POSITIONS: Position[] = [
  {
    pair: "BTC/USD",
    side: "long",
    size: 50000,
    entryPrice: 63800,
    markPrice: 64250.5,
    liquidationPrice: 61200,
    pnl: 705.47,
    pnlPercent: 1.41,
  },
  {
    pair: "ETH/USD",
    side: "short",
    size: 20000,
    entryPrice: 3450,
    markPrice: 3420.75,
    liquidationPrice: 3620,
    pnl: 169.71,
    pnlPercent: 0.85,
  },
];

export const PositionsTable = () => {
  return (
    <Card className="border-border bg-card">
      <Tabs defaultValue="positions" className="w-full">
        <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0">
          <TabsTrigger value="positions" className="rounded-none">
            Open Positions ({MOCK_POSITIONS.length})
          </TabsTrigger>
          <TabsTrigger value="orders" className="rounded-none">
            Order History
          </TabsTrigger>
          <TabsTrigger value="trades" className="rounded-none">
            Trade History
          </TabsTrigger>
          <TabsTrigger value="funding" className="rounded-none">
            Funding History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="positions" className="m-0 p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-muted/30">
                <tr className="text-left text-sm text-muted-foreground">
                  <th className="p-3 font-medium">Market</th>
                  <th className="p-3 font-medium">Side</th>
                  <th className="p-3 font-medium">Size</th>
                  <th className="p-3 font-medium">Entry Price</th>
                  <th className="p-3 font-medium">Mark Price</th>
                  <th className="p-3 font-medium">Liq. Price</th>
                  <th className="p-3 font-medium">PnL</th>
                  <th className="p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_POSITIONS.map((position, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-muted/20">
                    <td className="p-3 font-medium">{position.pair}</td>
                    <td className="p-3">
                      <span
                        className={cn(
                          "rounded px-2 py-1 text-xs font-medium",
                          position.side === "long"
                            ? "bg-success/20 text-success"
                            : "bg-danger/20 text-danger"
                        )}
                      >
                        {position.side.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-3 font-mono-numeric">${position.size.toLocaleString()}</td>
                    <td className="p-3 font-mono-numeric">${position.entryPrice.toLocaleString()}</td>
                    <td className="p-3 font-mono-numeric">${position.markPrice.toLocaleString()}</td>
                    <td className="p-3 font-mono-numeric text-danger">
                      ${position.liquidationPrice.toLocaleString()}
                    </td>
                    <td className="p-3">
                      <div
                        className={cn(
                          "font-mono-numeric font-medium",
                          position.pnl >= 0 ? "text-success" : "text-danger"
                        )}
                      >
                        {position.pnl >= 0 ? "+" : ""}${position.pnl.toFixed(2)}
                      </div>
                      <div
                        className={cn(
                          "text-xs font-mono-numeric",
                          position.pnl >= 0 ? "text-success" : "text-danger"
                        )}
                      >
                        ({position.pnl >= 0 ? "+" : ""}
                        {position.pnlPercent.toFixed(2)}%)
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="destructive">
                          Close
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {MOCK_POSITIONS.length === 0 && (
            <div className="flex h-32 items-center justify-center text-muted-foreground">
              No open positions
            </div>
          )}
        </TabsContent>

        <TabsContent value="orders" className="m-0 p-4">
          <div className="flex h-32 items-center justify-center text-muted-foreground">
            No order history
          </div>
        </TabsContent>

        <TabsContent value="trades" className="m-0 p-4">
          <div className="flex h-32 items-center justify-center text-muted-foreground">
            No trade history
          </div>
        </TabsContent>

        <TabsContent value="funding" className="m-0 p-4">
          <div className="flex h-32 items-center justify-center text-muted-foreground">
            No funding history
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};
