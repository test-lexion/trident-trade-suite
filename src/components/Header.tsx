import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronDown, TrendingUp, Wallet, BarChart3, Gift, Moon, Sun, Copy, CheckCircle } from "lucide-react";

export const Header = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [userAddress] = useState("0x7a3f8b2e4c9d1a5e");
  const [walletDialogOpen, setWalletDialogOpen] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const copyAddress = () => {
    navigator.clipboard.writeText(userAddress);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">TradeFi</span>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Trade Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={isActive("/") || isActive("/spot") || isActive("/options") ? "secondary" : "ghost"} className="gap-1">
                  Trade <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/" className="w-full cursor-pointer">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Futures
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/spot" className="w-full cursor-pointer">
                    <Wallet className="mr-2 h-4 w-4" />
                    Spot
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/options" className="w-full cursor-pointer">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Options
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/earn">
              <Button variant={isActive("/earn") ? "secondary" : "ghost"}>Earn</Button>
            </Link>

            <Link to="/portfolio">
              <Button variant={isActive("/portfolio") ? "secondary" : "ghost"}>Portfolio</Button>
            </Link>

            <Link to="/leaderboard">
              <Button variant={isActive("/leaderboard") ? "secondary" : "ghost"}>Leaderboard</Button>
            </Link>

            <Link to="/ai-hub">
              <Button variant={isActive("/ai-hub") ? "secondary" : "ghost"}>AI Hub</Button>
            </Link>

            <Link to="/stats">
              <Button variant={isActive("/stats") ? "secondary" : "ghost"}>Stats</Button>
            </Link>

            <Link to="/governance">
              <Button variant={isActive("/governance") ? "secondary" : "ghost"}>Governance</Button>
            </Link>
          </nav>
        </div>

        {/* Theme Toggle & User Menu */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <span className="font-mono text-sm">{userAddress}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/rewards" className="w-full cursor-pointer">
                  <Gift className="mr-2 h-4 w-4" />
                  My Rewards & Loyalty
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setWalletDialogOpen(true)}>
                <Wallet className="mr-2 h-4 w-4" />
                Wallet Info
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BarChart3 className="mr-2 h-4 w-4" />
                Transaction History
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Wallet Info Dialog */}
      <Dialog open={walletDialogOpen} onOpenChange={setWalletDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Wallet Info</DialogTitle>
            <DialogDescription>Your wallet details and balances</DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Wallet Address</div>
              <div className="flex items-center gap-2">
                <code className="flex-1 rounded bg-muted px-3 py-2 font-mono text-sm">
                  {userAddress}
                </code>
                <Button size="sm" variant="outline" onClick={copyAddress}>
                  {addressCopied ? (
                    <CheckCircle className="h-4 w-4 text-success" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-border p-4 space-y-3">
              <div className="text-sm font-semibold">Total Balance</div>
              <div className="text-2xl font-bold font-mono-numeric">$45,234.56</div>
              
              <div className="space-y-2 pt-2 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">USDC</span>
                  <span className="font-mono-numeric">$25,000.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">BTC</span>
                  <span className="font-mono-numeric">$16,062.63</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">ETH</span>
                  <span className="font-mono-numeric">$4,104.90</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1" variant="outline">
                Deposit
              </Button>
              <Button className="flex-1" variant="outline">
                Withdraw
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};
