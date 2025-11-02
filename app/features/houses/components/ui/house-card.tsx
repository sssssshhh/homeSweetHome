import { Card, CardContent } from "~/common/components/ui/card";
import { Home, MapPin, Train } from "lucide-react";

interface HouseCardProps {
  id: number;
  image: string;
  name: string;
  price: string;
  nearestStation: string;
  walkTime: string;
  commuteTime: string;
  layout: string;
  area: string;
  floor: string;
  link: string;
}

export function HouseCard({
  link,
  image,
  name,
  price,
  nearestStation,
  walkTime,
  layout,
  area,
  floor,
}: HouseCardProps) {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card 
      onClick={handleClick}
      className="border-purple-200 hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-bold text-purple-600">{price}</span>
          <span className="text-sm text-gray-500">/ 月</span>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <Train className="w-4 h-4 text-purple-600" />
            <span>{nearestStation} {walkTime}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Home className="w-4 h-4 text-purple-600" />
            <span>{layout} / {area}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-4 h-4 text-purple-600" />
            <span>{floor}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

