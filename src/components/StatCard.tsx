import { Card, CardContent } from "./ui/card";

export const StatCard = () => {
  return (
    <Card
      className="p-4 border-muted rounded-sm rounded-tl-none rounded-bl-none 
          relative before:content-[''] before:absolute before:m-width-[10px] before:w-[10px] before:bg-primary 
          before:h-[calc(100%+2px)] before:-top-[1px] before:-left-[1px] hover:bg-secondary"
    >
      <CardContent>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-md text-primary font-bold">Pieces</div>
            <div className="text-xs">1000</div>
          </div>
          <div>
            <div className="text-md text-primary font-bold">Pieces</div>
            <div className="text-xs">1000</div>
          </div>
          <div>
            <div className="text-md text-primary font-bold">Pieces</div>
            <div className="text-xs">1000</div>
          </div>
          <div>
            <div className="text-md text-primary font-bold">Pieces</div>
            <div className="text-xs">1000</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
