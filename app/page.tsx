import Image from "next/image"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Check, Edit3, Target, Timer } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md mx-auto overflow-hidden bg-slate-600 text-white rounded-lg shadow-xl">
        {/* Phone frame */}
        <div className="relative w-full h-full">
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
            <h1 className="text-2xl font-bold text-center mb-2">HabitGen</h1>

            {/* Quote circle */}
            <div className="relative flex justify-center mb-6">
              <div className="w-40 h-40 rounded-full bg-slate-700 flex items-center justify-center p-4 border-4 border-slate-800">
                <div className="text-center">
                  <p className="text-xs">"It always seems impossible until it is done"</p>
                  <p className="text-xs mt-1">-Nelson Mandela</p>
                </div>
              </div>
              <div className="absolute left-16 top-10">
                <Image
                  src="/placeholder.svg?height=50&width=30"
                  width={30}
                  height={50}
                  alt="Decorative element"
                  className="opacity-70"
                />
              </div>
              <div className="absolute right-16 top-10">
                <Image
                  src="/placeholder.svg?height=50&width=30"
                  width={30}
                  height={50}
                  alt="Decorative element"
                  className="opacity-70"
                />
              </div>
            </div>

            {/* Date display */}
            <p className="text-center mb-4">Today is March 14, 2025</p>

            {/* Progress slider */}
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-800 text-xs">
                6%
              </div>
              <div className="flex-1 h-1 bg-slate-400 mx-2"></div>
            </div>

            <ScrollArea className="h-64 pr-4">
              {/* Tasks list */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <Timer className="w-6 h-6 text-slate-800" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-300">Morning</p>
                    <p className="font-medium">1 Mile Run</p>
                    <p className="text-xs">15 min</p>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-slate-800" />
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <Edit3 className="w-6 h-6 text-slate-800" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-300">Afternoon</p>
                    <p className="font-medium">Complete Homework</p>
                    <p className="text-xs">60 min</p>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-slate-800" />
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-slate-800" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-300">Evening</p>
                    <p className="font-medium">Practice Speech</p>
                    <p className="text-xs">10 min</p>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-slate-800" />
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>

          {/* Bottom navigation */}
          <div className="flex justify-between p-4 mt-4">
            <Link href="/" className="w-24 py-3 bg-slate-800 text-white text-center rounded-full font-medium">
              HOME
            </Link>
            <Link href="/input" className="w-24 py-3 bg-white text-slate-800 text-center rounded-full font-medium">
              INPUT
            </Link>
            <Link href="/analytics" className="w-24 py-3 bg-white text-slate-800 text-center rounded-full font-medium">
              ANALYTICS
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
