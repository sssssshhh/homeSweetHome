import { HouseCard } from "~/features/houses/components/ui/house-card";

export default function HousesPage() {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      name: 'グランドメゾン渋谷',
      price: '¥180,000',
      nearestStation: '渋谷駅',
      walkTime: '徒歩5分',
      commuteTime: '15分',
      layout: '1LDK',
      area: '45㎡',
      floor: '5階/12階建',
      link: 'https://www.homes.co.jp/chintai/room/ee375dba2f50da3339883d5443da285403ec4c4d/?bid=1261550108368'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      name: 'パークハイツ新宿',
      price: '¥165,000',
      nearestStation: '新宿駅',
      walkTime: '徒歩8分',
      commuteTime: '12分',
      layout: '1K',
      area: '38㎡',
      floor: '3階/10階建',
      link: 'https://www.homes.co.jp/chintai/room/ee375dba2f50da3339883d5443da285403ec4c4d/?bid=1261550108368'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      name: 'ライオンズマンション品川',
      price: '¥155,000',
      nearestStation: '品川駅',
      walkTime: '徒歩7分',
      commuteTime: '18分',
      layout: '1K',
      area: '42㎡',
      floor: '8階/15階建',
      link: 'https://www.homes.co.jp/chintai/room/ee375dba2f50da3339883d5443da285403ec4c4d/?bid=1261550108368'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      name: 'コスモス恵比寿',
      price: '¥195,000',
      nearestStation: '恵比寿駅',
      walkTime: '徒歩3分',
      commuteTime: '20分',
      layout: '1LDK',
      area: '50㎡',
      floor: '6階/8階建',
      link: 'https://www.homes.co.jp/chintai/room/ee375dba2f50da3339883d5443da285403ec4c4d/?bid=1261550108368'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
      name: 'シティタワー池袋',
      price: '¥170,000',
      nearestStation: '池袋駅',
      walkTime: '徒歩6分',
      commuteTime: '25分',
      layout: '1DK',
      area: '40㎡',
      floor: '10階/20階建',
      link: 'https://www.homes.co.jp/chintai/room/ee375dba2f50da3339883d5443da285403ec4c4d/?bid=1261550108368'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop',
      name: 'メゾン六本木',
      price: '¥210,000',
      nearestStation: '六本木駅',
      walkTime: '徒歩4分',
      commuteTime: '22分',
      layout: '2LDK',
      area: '55㎡',
      floor: '7階/12階建',
      link: 'https://www.homes.co.jp/chintai/room/ee375dba2f50da3339883d5443da285403ec4c4d/?bid=1261550108368'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center mb-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-purple-400">Home Sweet Home</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <HouseCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
}