import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export const OrderEntryPanel = () => {
  const [side, setSide] = useState<"long" | "short">("long");
  const [leverage, setLeverage] = useState([10]);
  const [collateral, setCollateral] = useState("");
  const [orderType, setOrderType] = useState("market");

  const availableMargin = 10000;

  return (
    <Card className="border-border bg-card p-4">
      {/* Long/Short Toggle */}
      <div className="mb-4 grid grid-cols-2 gap-2">
        <Button
          variant={side === "long" ? "default" : "outline"}
          className={cn(
            side === "long" && "bg-success hover:bg-success/90 text-success-foreground"
          )}
          onClick={() => setSide("long")}
        >
          Long
        </Button>
        <Button
          variant={side === "short" ? "default" : "outline"}
          className={cn(
            side === "short" && "bg-danger hover:bg-danger/90 text-danger-foreground"
          )}
          onClick={() => setSide("short")}
        >
          Short
        </Button>
      </div>

      {/* Order Type Tabs */}
      <Tabs value={orderType} onValueChange={setOrderType} className="mb-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="market">Market</TabsTrigger>
          <TabsTrigger value="limit">Limit</TabsTrigger>
          <TabsTrigger value="stop">Stop</TabsTrigger>
          <TabsTrigger value="tp-sl">TP/SL</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Leverage Slider */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center justify-between">
          <Label>Leverage</Label>
          <span className="font-mono-numeric text-lg font-bold text-primary">
            {leverage[0]}x
          </span>
        </div>
        <Slider
          value={leverage}
          onValueChange={setLeverage}
          min={1}
          max={50}
          step={1}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1x</span>
          <span>25x</span>
          <span>50x</span>
        </div>
      </div>

      {/* Collateral Input */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center justify-between">
          <Label>Collateral (USDC)</Label>
          <span className="text-sm text-muted-foreground">
            Available: ${availableMargin.toLocaleString()}
          </span>
        </div>
        <div className="relative">
          <Input
            type="number"
            placeholder="0.00"
            value={collateral}
            onChange={(e) => setCollateral(e.target.value)}
            className="pr-16 font-mono-numeric"
          />
          <Button
            size="sm"
            variant="ghost"
            className="absolute right-1 top-1/2 h-7 -translate-y-1/2"
            onClick={() => setCollateral(availableMargin.toString())}
          >
            MAX
          </Button>
        </div>
      </div>

      {/* Order Summary */}
      {collateral && (
        <div className="mb-4 space-y-2 rounded-lg bg-muted/50 p-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Position Size</span>
            <span className="font-mono-numeric font-medium">
              ${(parseFloat(collateral) * leverage[0]).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Entry Price</span>
            <span className="font-mono-numeric font-medium">$64,250.50</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Liquidation Price</span>
            <span className="font-mono-numeric font-medium text-danger">$62,450.25</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Est. Fees</span>
            <span className="font-mono-numeric font-medium">
              ${(parseFloat(collateral) * 0.001).toFixed(2)}
            </span>
          </div>
        </div>
      )}

      {/* Execute Button */}
      <Button
        size="lg"
        className={cn(
          "w-full font-semibold",
          side === "long"
            ? "bg-success hover:bg-success/90 text-success-foreground"
            : "bg-danger hover:bg-danger/90 text-danger-foreground"
        )}
      >
        {side === "long" ? "Open Long" : "Open Short"}
      </Button>
    </Card>
  );
};
