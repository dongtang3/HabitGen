import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { X, Check } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-200 to-slate-400">
      <div className="w-full max-w-md mx-auto overflow-hidden bg-slate-700 text-white rounded-2xl shadow-2xl flex flex-col h-[calc(100vh-2rem)] max-h-[800px] border border-slate-300/30">
        {/* Status bar */}
        <div className="flex justify-between items-center p-2 bg-slate-700 flex-shrink-0">
          <span className="text-xs">AT&T</span>
          <div className="flex items-center space-x-1">
            <span className="text-xs">●●●</span>
          </div>
        </div>

        {/* Wrap main content and give it flex-grow */}
        <div className="flex flex-col flex-grow overflow-y-auto">

          {/* Main content */}
          <div className="p-4">
            <h1 className="text-2xl font-extrabold text-center tracking-wide mb-2 text-slate-100 drop-shadow">HabitGen</h1>
            <h2 className="text-lg font-semibold text-center mb-6 text-slate-300 tracking-wider">GOAL ANALYTICS</h2>

            {/* 百分比大卡片 */}
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400/80 to-blue-500/80 flex items-center justify-center shadow-lg border-4 border-white/20 mb-2">
                <span className="text-5xl font-extrabold text-white drop-shadow-lg">80%</span>
              </div>
              <p className="text-center text-base text-slate-200 font-medium mt-2">Daily Activities Completed</p>
            </div>

            {/* 图表区块 */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* Bar chart */}
              <div className="h-36 flex items-end justify-between bg-slate-800/80 rounded-xl p-2 shadow-inner">
                <div className="w-6 bg-gradient-to-t from-green-400 to-green-200 h-20 rounded-t-lg"></div>
                <div className="w-6 bg-gradient-to-t from-blue-400 to-blue-200 h-14 rounded-t-lg"></div>
                <div className="w-6 bg-gradient-to-t from-yellow-400 to-yellow-200 h-10 rounded-t-lg"></div>
                <div className="w-6 bg-gradient-to-t from-pink-400 to-pink-200 h-28 rounded-t-lg"></div>
              </div>
              {/* Donut chart */}
              <div className="relative flex items-center justify-center bg-slate-800/80 rounded-xl shadow-inner h-36">
                <div className="w-24 h-24 rounded-full border-8 border-slate-300/60 relative">
                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-transparent border-t-green-400 border-r-blue-400" style={{ transform: "rotate(45deg)" }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-sm text-slate-200 font-semibold">DAILY STREAK</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-slate-300">Focus</span>
                <div className="flex-1">
                  <Progress value={60} className="h-4 rounded-full bg-slate-900/60" />
                </div>
                <span className="ml-2 text-base font-bold text-green-300">60%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-slate-300">Health</span>
                <div className="flex-1">
                  <Progress value={75} className="h-4 rounded-full bg-slate-900/60" />
                </div>
                <span className="ml-2 text-base font-bold text-blue-300">75%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-slate-300">Growth</span>
                <div className="flex-1">
                  <Progress value={15} className="h-4 rounded-full bg-slate-900/60" />
                </div>
                <span className="ml-2 text-base font-bold text-yellow-300">15%</span>
              </div>
            </div>

            {/* Task completion section */}
            <div className="flex mb-8 gap-4 items-center bg-slate-800/80 rounded-xl p-3 shadow-inner">
              <div className="flex flex-row items-center mr-2 h-24 justify-center gap-2">
                {["TASK", "COMPLETION", "BREAKDOWN"].map(word => (
                  <div key={word} className="flex flex-col items-center leading-none">
                    {word.split('').map((char, idx) => (
                      <span key={idx} className="text-[10px] text-slate-400 whitespace-nowrap leading-[10px]">{char}</span>
                    ))}
                  </div>
                ))}
              </div>
              {/* Pie chart */}
              <div className="relative w-16 h-16">
                <div className="w-full h-full rounded-full bg-slate-700"></div>
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-[14px] border-transparent border-t-green-400 border-l-blue-400" style={{ transform: "rotate(45deg)" }}></div>
              </div>
              {/* Percentage circle */}
              <div className="ml-auto flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400/80 to-blue-400/80 shadow-lg">
                <p className="text-2xl font-extrabold text-white">6%</p>
              </div>
            </div>

            {/* Badges section */}
            <p className="mb-2 text-slate-200 font-semibold">Badges of Accomplishments</p>
            <div className="flex justify-between mb-6 gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center shadow">
                <span className="text-lg">🏃</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 flex items-center justify-center shadow">
                <span className="text-slate-800 text-lg">😊</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-200 flex items-center justify-center shadow">
                <span className="text-lg">🗣️</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center shadow">
                <span className="text-slate-800 text-lg">✏️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="flex justify-between p-4 mt-auto border-t border-slate-500 flex-shrink-0">
          <Link href="/" className="w-24 py-3 bg-white text-slate-800 text-center rounded-full font-medium">
            HOME
          </Link>
          <Link href="/input" className="w-24 py-3 bg-white text-slate-800 text-center rounded-full font-medium">
            INPUT
          </Link>
          <Link href="/analytics" className="w-24 py-3 bg-slate-800 text-white text-center rounded-full font-medium">
            ANALYTICS
          </Link>
        </div>
      </div>
    </div>
  )
}
