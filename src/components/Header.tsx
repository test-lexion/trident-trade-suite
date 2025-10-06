import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, TrendingUp, Wallet, Trophy, Brain, BarChart3, Vote, Gift } from "lucide-react";

export const Header = () => {
  const location = useLocation();
  const [userAddress] = useState("0x7a3f8b2e4c9d1a5e");

  const isActive = (path: string) => location.pathname === path;

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

        {/* User Menu */}
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
            <DropdownMenuItem>
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
    </header>
  );
};
