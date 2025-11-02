import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import housesData from "~/features/house/data/houses.json";

interface House {
  id: number;
  title: string;
  image: string;
  location: string;
  specs: string;
  badges: string[];
}

export function HouseCard() {
  const houses = housesData as House[];

  return (
    <div className="w-full px-4">
      <div className="w-full flex justify-center items-center mb-10">
        <div className="w-full text-center text-7xl">🏠</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {houses.map((house) => (
          <Card key={house.id} className="w-full">
            <CardHeader>
              <CardTitle className="pb-2">{house.title}</CardTitle>
              <CardDescription>
                <div className="flex flex-row text-sm w-full h-40">
                  <div className="w-1/2 flex">
                    <img src={house.image} alt={house.title} className="w-full h-full object-cover rounded" />
                  </div>
                  <div className="w-1/2 h-full flex flex-col justify-center items-center gap-2 pl-2">
                    <span className="text-sm text-center">{house.location}</span>
                    <span className="text-sm text-center">{house.specs}</span>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <div className="flex flex-row gap-2 flex-wrap">
                {house.badges.map((badge, index) => {
                  const variants: ("default" | "secondary" | "outline")[] = ["default", "secondary", "outline"];
                  return (
                    <Badge 
                      key={index}
                      className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" 
                      variant={variants[index % variants.length]}
                    >
                      {badge}
                    </Badge>
                  );
                })}
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}