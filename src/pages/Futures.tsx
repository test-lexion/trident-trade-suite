import { MarketsSidebar } from "@/components/trading/MarketsSidebar";
import { TradingChart } from "@/components/trading/TradingChart";
import { OrderEntryPanel } from "@/components/trading/OrderEntryPanel";
import { PositionsTable } from "@/components/trading/PositionsTable";

const Futures = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Markets Sidebar */}
        <MarketsSidebar />

        {/* Main Trading Area */}
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          {/* Chart and Order Entry */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TradingChart />
            </div>
            <div>
              <OrderEntryPanel />
            </div>
          </div>

          {/* Positions Table */}
          <PositionsTable />
        </div>
      </div>
    </div>
  );
};

export default Futures;
