import { MarketsSidebar } from "@/components/trading/MarketsSidebar";
import { TradingChart } from "@/components/trading/TradingChart";
import { OrderEntryPanel } from "@/components/trading/OrderEntryPanel";
import { PositionsTable } from "@/components/trading/PositionsTable";

const Futures = () => {
  return (
    <div className="flex h-full flex-col"> {/* Use h-full to fill the main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Hide sidebar on mobile for better usability */}
        <div className="hidden shrink-0 md:flex">
          <MarketsSidebar />
        </div>

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
