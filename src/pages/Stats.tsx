import { Card } from "@/components/ui/card";

const Stats = () => {
  return (
    <div className="container py-8">
      <Card className="p-8 text-center">
        <h1 className="mb-4 text-3xl font-bold">Platform Statistics</h1>
        <p className="text-muted-foreground">
          View platform-wide statistics including volume, TVL, and open interest.
        </p>
      </Card>
    </div>
  );
};

export default Stats;
