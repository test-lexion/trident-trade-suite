import { MarketsSidebar } from "@/components/trading/MarketsSidebar";
import { TradingChart } from "@/components/trading/TradingChart";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Spot = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="flex flex-1 overflow-hidden">
        <MarketsSidebar />

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TradingChart />
            </div>

            {/* Spot Order Entry */}
            <Card className="border-border bg-card p-4">
              <Tabs defaultValue="buy" className="mb-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="buy">Buy</TabsTrigger>
                  <TabsTrigger value="sell">Sell</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Available Balance</Label>
                  <div className="text-2xl font-bold font-mono-numeric">$10,000.00</div>
                </div>

                <div className="space-y-2">
                  <Label>You Pay (USDC)</Label>
                  <Input type="number" placeholder="0.00" className="font-mono-numeric" />
                </div>

                <div className="space-y-2">
                  <Label>You Receive (BTC)</Label>
                  <Input type="number" placeholder="0.00" className="font-mono-numeric" />
                </div>

                <div className="rounded-lg bg-muted/50 p-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Price</span>
                    <span className="font-mono-numeric">$64,250.50</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Fee (0.1%)</span>
                    <span className="font-mono-numeric">$6.43</span>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-success hover:bg-success/90 text-success-foreground">
                  Buy BTC
                </Button>
              </div>
            </Card>
          </div>

          {/* Asset Holdings */}
          <Card className="border-border bg-card p-4">
            <h3 className="text-lg font-semibold mb-4">Your Holdings</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr className="text-left text-sm text-muted-foreground">
                    <th className="p-3">Asset</th>
                    <th className="p-3">Balance</th>
                    <th className="p-3">Value (USD)</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">USDC</td>
                    <td className="p-3 font-mono-numeric">10,000.00</td>
                    <td className="p-3 font-mono-numeric">$10,000.00</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Deposit</Button>
                        <Button size="sm" variant="outline">Withdraw</Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Spot;
