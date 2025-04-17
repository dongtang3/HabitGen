import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md mx-auto overflow-hidden bg-slate-600 text-white rounded-lg shadow-xl">
        {/* Status bar */}
        <div className="flex justify-between items-center p-2 bg-slate-700">
          <span className="text-xs">AT&T</span>
          <div className="flex items-center space-x-1">
            <span className="text-xs">●●●●●</span>
            <span className="text-xs">●●●</span>
          </div>
        </div>

        {/* Main content */}
        <div className="p-4">
          <h1 className="text-2xl font-bold text-center">HabitGen</h1>
          <h2 className="text-lg font-medium text-center mb-4">GOAL ANALYTICS</h2>

          <div className="text-6xl font-bold text-center mb-2">80%</div>
          <p className="text-center text-sm mb-4">Daily Activities Completed</p>

          {/* Charts section */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Bar chart */}
            <div className="h-32 flex items-end justify-between">
              <div className="w-6 bg-gradient-to-t from-slate-800 to-slate-400 h-16"></div>
              <div className="w-6 bg-gradient-to-t from-slate-800 to-slate-400 h-12"></div>
              <div className="w-6 bg-gradient-to-t from-slate-800 to-slate-400 h-10"></div>
              <div className="w-6 bg-gradient-to-t from-slate-800 to-slate-400 h-24"></div>
            </div>

            {/* Donut chart */}
            <div className="relative flex items-center justify-center">
              <div className="w-28 h-28 rounded-full border-8 border-slate-300 relative">
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-transparent border-t-slate-800 border-r-slate-800"
                  style={{ transform: "rotate(45deg)" }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm">DAILY STREAK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bars */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center">
              <Progress value={60} className="h-4 flex-1" />
              <span className="ml-2">%</span>
            </div>
            <div className="flex items-center">
              <Progress value={75} className="h-4 flex-1" />
              <span className="ml-2">%</span>
            </div>
            <div className="flex items-center">
              <Progress value={15} className="h-4 flex-1" />
              <span className="ml-2">%</span>
            </div>
          </div>

          {/* Task completion section */}
          <div className="flex mb-6">
            <div className="flex flex-col items-center mr-4">
              <p className="text-xs transform -rotate-90">TASK COMPLETION</p>
              <p className="text-xs transform -rotate-90">BREAKDOWN</p>
            </div>

            {/* Pie chart */}
            <div className="relative w-20 h-20">
              <div className="w-full h-full rounded-full bg-slate-800"></div>
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full border-[20px] border-transparent border-t-slate-400 border-l-slate-600"
                style={{ transform: "rotate(45deg)" }}
              ></div>
            </div>

            {/* Percentage circle */}
            <div className="ml-auto flex items-center justify-center w-20 h-20 rounded-full bg-slate-800">
              <p className="text-3xl font-bold">6%</p>
            </div>
          </div>

          {/* Badges section */}
          <p className="mb-2">Badges of Accomplishments</p>
          <div className="flex justify-between mb-6">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-xs">🏃</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <span className="text-slate-800 text-xs">😊</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-xs">🗣️</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-400 flex items-center justify-center">
              <span className="text-slate-800 text-xs">✏️</span>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="flex justify-between p-4 mt-4">
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
