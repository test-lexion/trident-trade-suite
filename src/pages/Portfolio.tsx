import { Card } from "@/components/ui/card";

const Portfolio = () => {
  return (
    <div className="container py-8">
      <Card className="p-8 text-center">
        <h1 className="mb-4 text-3xl font-bold">Portfolio</h1>
        <p className="text-muted-foreground">
          View your assets, collateral status, and manage your capital efficiency.
        </p>
      </Card>
    </div>
  );
};

export default Portfolio;
