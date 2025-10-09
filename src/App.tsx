import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

// --- 1. Import Wagmi and Reown Providers ---
import { WagmiProvider } from 'wagmi';
import { ReownAppKitProvider } from '@reown/appkit';
import { ReownWalletKitProvider } from '@reown/walletkit';
import { wagmiConfig } from '@/lib/wagmi'; // Your new config file
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Futures from "./pages/Futures";
import Spot from "./pages/Spot";
import Options from "./pages/Options";
import Earn from "./pages/Earn";
import Portfolio from "./pages/Portfolio";
import Leaderboard from "./pages/Leaderboard";
import AIHub from "./pages/AIHub";
import Stats from "./pages/Stats";
import Governance from "./pages/Governance";
import Rewards from "./pages/Rewards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const adapter = new WagmiAdapter(wagmiConfig); // Create the adapter

const App = () => (
  // --- 2. Wrap the entire application with providers ---
  <WagmiProvider config={wagmiConfig}>
    <ReownAppKitProvider adapter={adapter}>
      <ReownWalletKitProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <div className="flex h-screen flex-col bg-background">
                  <Header />
                  <main className="flex-1 overflow-y-auto">
                    <Routes>
                      <Route path="/" element={<Futures />} />
                      <Route path="/spot" element={<Spot />} />
                      <Route path="/options" element={<Options />} />
                      <Route path="/earn" element={<Earn />} />
                      <Route path="/portfolio" element={<Portfolio />} />
                      <Route path="/leaderboard" element={<Leaderboard />} />
                      <Route path="/ai-hub" element={<AIHub />} />
                      <Route path="/stats" element={<Stats />} />
                      <Route path="/governance" element={<Governance />} />
                      <Route path="/rewards" element={<Rewards />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </BrowserRouter>
            </TooltipProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </ReownWalletKitProvider>
    </ReownAppKitProvider>
  </WagmiProvider>
);

export default App;
