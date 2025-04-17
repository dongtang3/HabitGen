"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Check, HelpCircle, Filter, RotateCcw, Target, Clock, List } from "lucide-react"

export default function InputPage() {
  const [activeTab, setActiveTab] = useState("quote")

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

        {/* Header with close/confirm buttons */}
        <div className="flex justify-between p-4">
          <Button variant="ghost" size="icon" className="text-red-500 h-8 w-8">
            <X className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-green-500 h-8 w-8">
            <Check className="h-6 w-6" />
          </Button>
        </div>

        {/* Tab navigation */}
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full bg-transparent">
            <TabsTrigger
              value="quote"
              className={`${activeTab === "quote" ? "bg-slate-700" : "bg-white text-slate-800"} py-2`}
            >
              QUOTE
            </TabsTrigger>
            <TabsTrigger
              value="habit"
              className={`${activeTab === "habit" ? "bg-slate-700" : "bg-white text-slate-800"} py-2`}
            >
              HABIT
            </TabsTrigger>
            <TabsTrigger
              value="task"
              className={`${activeTab === "task" ? "bg-slate-700" : "bg-white text-slate-800"} py-2`}
            >
              TASK
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[500px]">
            {/* Quote Tab */}
            <TabsContent value="quote" className="mt-0">
              <div className="bg-slate-500 rounded-lg mx-4 p-4">
                <h2 className="text-xl font-bold mb-4">New Quote</h2>

                <div className="flex mb-4">
                  <Button variant="outline" size="icon" className="bg-slate-600 h-12 w-12 rounded-md mr-2">
                    <HelpCircle className="h-6 w-6" />
                  </Button>
                  <div className="flex-1">
                    <Label htmlFor="quote-name" className="flex items-center">
                      Quote Name <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input id="quote-name" className="bg-slate-400 border-none" />
                  </div>
                </div>

                <div className="mb-4">
                  <Label htmlFor="quote-text" className="flex items-center">
                    Quote Text <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Textarea id="quote-text" className="bg-slate-400 border-none h-32" />
                </div>

                <div className="flex items-center mb-4">
                  <Filter className="mr-2" />
                  <div className="flex-1">
                    <p>Category</p>
                    <p>daily</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Check className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="bg-slate-500 rounded-lg mx-4 p-4 mt-4">
                <h2 className="text-xl font-bold mb-4">Remove Quote</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p>Quote 1</p>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-600 rotate-45">
                      <Target className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Quote 2</p>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-600 rotate-45">
                      <Target className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Habit Tab */}
            <TabsContent value="habit" className="mt-0">
              <div className="bg-slate-500 rounded-lg mx-4 p-4">
                <h2 className="text-xl font-bold mb-4">New Habit</h2>

                <div className="flex mb-4">
                  <Button variant="outline" size="icon" className="bg-slate-600 h-12 w-12 rounded-md mr-2">
                    <HelpCircle className="h-6 w-6" />
                  </Button>
                  <div className="flex-1">
                    <Label htmlFor="habit-name" className="flex items-center">
                      Habit Name <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input id="habit-name" className="bg-slate-400 border-none" />
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <RotateCcw className="mr-2" />
                  <div className="flex-1">
                    <p>Repeat</p>
                    <p>Everyday</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Check className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center mb-4">
                  <Target className="mr-2" />
                  <div className="flex-1">
                    <p>Goal</p>
                    <p>1 time per day</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Check className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center mb-4">
                  <Clock className="mr-2" />
                  <div className="flex-1">
                    <p>Reminder</p>
                    <p>09:00</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Check className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="bg-slate-500 rounded-lg mx-4 p-4 mt-4">
                <h2 className="text-xl font-bold mb-4">Remove Habit</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p>Read</p>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-600 rotate-45">
                      <Target className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Drink Water</p>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-600 rotate-45">
                      <Target className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Task Tab */}
            <TabsContent value="task" className="mt-0">
              <div className="bg-slate-500 rounded-lg mx-4 p-4">
                <h2 className="text-xl font-bold mb-4">New Task</h2>

                <div className="flex mb-4">
                  <Button variant="outline" size="icon" className="bg-slate-600 h-12 w-12 rounded-md mr-2">
                    <HelpCircle className="h-6 w-6" />
                  </Button>
                  <div className="flex-1">
                    <Label htmlFor="task-name" className="flex items-center">
                      Task Name <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input id="task-name" className="bg-slate-400 border-none" />
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <RotateCcw className="mr-2" />
                  <div className="flex-1">
                    <p>Repeat</p>
                    <p>Never</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Check className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center mb-4">
                  <Clock className="mr-2" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p>Starts</p>
                      <p>09:00</p>
                    </div>
                    <p>Mar 27, 2025</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Check className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center mb-4">
                  <Clock className="mr-2" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p>Ends</p>
                      <p>10:00</p>
                    </div>
                    <p>Mar 27, 2025</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Check className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center mb-4">
                  <List className="mr-2" />
                  <div className="flex-1">
                    <p>Priority Level</p>
                    <p>Low</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Check className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="bg-slate-500 rounded-lg mx-4 p-4 mt-4">
                <h2 className="text-xl font-bold mb-4">Remove Task</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p>Task 1</p>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-600 rotate-45">
                      <Target className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Task 2</p>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-600 rotate-45">
                      <Target className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  )
}
