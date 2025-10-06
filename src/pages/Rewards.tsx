import { Card } from "@/components/ui/card";

const Rewards = () => {
  return (
    <div className="container py-8">
      <Card className="p-8 text-center">
        <h1 className="mb-4 text-3xl font-bold">My Rewards & Loyalty</h1>
        <p className="text-muted-foreground">
          View your rank, XP, daily quests, and redeem rewards.
        </p>
      </Card>
    </div>
  );
};

export default Rewards;
