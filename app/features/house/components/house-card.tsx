import { Button } from "~/common/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import { Badge } from "~/common/components/ui/badge";


export function HouseCard() {
  return (
    <Card className="w-full max-w-md">
        <CardHeader>
            <CardTitle className="pb-2">ハイツ・ヴィラNO.8</CardTitle>
            <CardDescription>
                <div className="flex flex-row text-sm w-full h-40">
                    <div className="w-1/2 flex">
                        <img src="https://images.unsplash.com/photo-1761604297459-c2a4a0b18b0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872" alt="home" width={120} height={32} />
                    </div>
                    <div className="w-1/2 h-full flex flex-col justify-center items-center gap-2">
                        <span className="text-sm">ＪＲ京葉線/舞浜駅 歩29分</span>
                        <span className="text-sm">築40年2階建</span>
                    </div>
                </div>
            </CardDescription>
        </CardHeader>
        <CardContent className="">
        <div className="flex flex-row gap-2">
            <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="default">
            1階
            </Badge>
            <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="secondary">
                礼金あり
            </Badge>
            <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline"   >
                ワンルーム
            </Badge>
        </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
        </CardFooter>
    </Card>
  );
}