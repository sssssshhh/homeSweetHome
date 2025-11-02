import React, { useState } from 'react';
import { LargeCard } from '~/common/components/ui/large-card';
import { Range } from '~/common/components/ui/range';
import { Train, Clock } from 'lucide-react';
import { Link } from "react-router";

export default function HomePage() {
  const [station, setStation] = useState('');
  const [commuteTime, setCommuteTime] = useState('30');

  return (
    <div className="w-full min-h-screen flex flex-row justify-center items-center gap-4">
      <Link to="/houses" className="w-1/3">
        <LargeCard className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <Train className="w-8 h-8 text-purple-600" />
            <label className="text-xl font-medium text-gray-700">
              勤務先の最寄り駅
            </label>
          </div>
          <input
            type="text"
            value={station}
            onChange={(e) => setStation(e.target.value)}
            placeholder="例: 桜木町駅"
            className="w-full px-5 py-4 text-lg border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </LargeCard>
      </Link>

      <Link to="/houses" className="w-1/3">
        <LargeCard className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <Clock className="w-8 h-8 text-purple-600" />
            <label className="text-xl font-medium text-gray-700">
              希望通勤時間（片道）
            </label>
          </div>
          <div className="space-y-6">
            <Range
              min="10"
              max="90"
              step="5"
              value={commuteTime}
              onChange={(e) => setCommuteTime(e.target.value)}
            />
            <div className="text-center text-3xl font-semibold text-purple-600">
              {commuteTime}分
            </div>
          </div>
        </LargeCard>
      </Link>
    </div>
  );
}