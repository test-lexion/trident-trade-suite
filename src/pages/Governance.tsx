import { Card } from "@/components/ui/card";

const Governance = () => {
  return (
    <div className="container py-8">
      <Card className="p-8 text-center">
        <h1 className="mb-4 text-3xl font-bold">Governance</h1>
        <p className="text-muted-foreground">
          Participate in DAO governance and vote on protocol proposals.
        </p>
      </Card>
    </div>
  );
};

export default Governance;
