import { Card } from "@/components/ui/card";

const Leaderboard = () => {
  return (
    <div className="container py-8">
      <Card className="p-8 text-center">
        <h1 className="mb-4 text-3xl font-bold">Leaderboard</h1>
        <p className="text-muted-foreground">
          View top traders and engage in copy trading.
        </p>
      </Card>
    </div>
  );
};

export default Leaderboard;
