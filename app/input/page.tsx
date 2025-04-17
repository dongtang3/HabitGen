"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Check, HelpCircle, Filter, RotateCcw, Target, Clock, List, Eraser } from "lucide-react"
import Link from "next/link"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

interface Quote { id: number; name: string; }
interface Habit { id: number; name: string; }
interface Task { id: number; name: string; }

export default function InputPage() {
  const [activeTab, setActiveTab] = useState("quote")

  const [quotes, setQuotes] = useState<Quote[]>([
    { id: 1, name: "Quote 1" },
    { id: 2, name: "Quote 2" },
  ])
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, name: "Read" },
    { id: 2, name: "Drink Water" },
  ])
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
  ])

  const [quoteCategory, setQuoteCategory] = useState("daily")
  const [habitRepeat, setHabitRepeat] = useState("everyday")
  const [habitGoal, setHabitGoal] = useState("1_time_per_day")
  const [habitReminder, setHabitReminder] = useState("09:00")
  const [taskRepeat, setTaskRepeat] = useState("never")
  const [taskStartsTime, setTaskStartsTime] = useState("09:00")
  const [taskStartsDay, setTaskStartsDay] = useState("today")
  const [taskEndsTime, setTaskEndsTime] = useState("10:00")
  const [taskEndsDay, setTaskEndsDay] = useState("today")
  const [taskPriority, setTaskPriority] = useState("low")
  const [taskStartsDate, setTaskStartsDate] = useState<Date | undefined>(new Date())
  const [taskEndsDate, setTaskEndsDate] = useState<Date | undefined>(new Date())

  const handleRemoveQuote = (idToRemove: number) => {
    setQuotes(currentQuotes => currentQuotes.filter(quote => quote.id !== idToRemove));
    console.log(`Removing quote with id: ${idToRemove}`);
  }
  const handleRemoveHabit = (idToRemove: number) => {
    setHabits(currentHabits => currentHabits.filter(habit => habit.id !== idToRemove));
    console.log(`Removing habit with id: ${idToRemove}`);
  }
  const handleRemoveTask = (idToRemove: number) => {
    setTasks(currentTasks => currentTasks.filter(task => task.id !== idToRemove));
    console.log(`Removing task with id: ${idToRemove}`);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md mx-auto overflow-hidden bg-slate-600 text-white rounded-lg shadow-xl flex flex-col h-[calc(100vh-2rem)] max-h-[800px]">
        <div className="flex justify-between items-center p-2 bg-slate-700 flex-shrink-0">
          <span className="text-xs">AT&T</span>
          <div className="flex items-center space-x-1">
            <span className="text-xs">●●●</span>
          </div>
        </div>
        <div className="flex flex-col flex-grow overflow-y-auto">
          <div className="flex justify-between p-4 flex-shrink-0">
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-red-500 h-8 w-8">
                <X className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-green-500 h-8 w-8">
                <Check className="h-6 w-6" />
              </Button>
            </Link>
          </div>
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col flex-grow">
            <TabsList className="grid grid-cols-3 w-full bg-transparent flex-shrink-0 px-4 pt-2 pb-4 gap-2">
              <TabsTrigger
                value="quote"
                className={`py-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-slate-800 rounded-md`}
              >
                QUOTE
              </TabsTrigger>
              <TabsTrigger
                value="habit"
                className={`py-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-slate-800 rounded-md`}
              >
                HABIT
              </TabsTrigger>
              <TabsTrigger
                value="task"
                className={`py-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-slate-800 rounded-md`}
              >
                TASK
              </TabsTrigger>
            </TabsList>
            <ScrollArea className="flex-grow">
              <TabsContent value="quote" className="mt-0 px-4">
                <div className="bg-slate-500 rounded-lg p-4">
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
                    <Filter className="mr-2 h-5 w-5" />
                    <div className="flex-1">
                      <Label>Category</Label>
                      <Select value={quoteCategory} onValueChange={setQuoteCategory}>
                        <SelectTrigger className="w-full bg-slate-400 border-none mt-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="motivation">Motivation</SelectItem>
                          <SelectItem value="work">Work</SelectItem>
                          <SelectItem value="life">Life</SelectItem>
                          <SelectItem value="funny">Funny</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-500 rounded-lg p-4 mt-4">
                  <h2 className="text-xl font-bold mb-4">Remove Quote</h2>
                  <div className="space-y-4">
                    {quotes.map((quote) => (
                      <div key={quote.id} className="flex justify-between items-center">
                        <p>{quote.name}</p>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-slate-600"
                          onClick={() => handleRemoveQuote(quote.id)}
                        >
                          <Eraser className="h-5 w-5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="habit" className="mt-0 px-4">
                <div className="bg-slate-500 rounded-lg p-4">
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
                    <RotateCcw className="mr-2 h-5 w-5" />
                    <div className="flex-1">
                      <Label>Repeat</Label>
                      <Select value={habitRepeat} onValueChange={setHabitRepeat}>
                        <SelectTrigger className="w-full bg-slate-400 border-none mt-1">
                          <SelectValue placeholder="Select repeat frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="everyday">Everyday</SelectItem>
                          <SelectItem value="weekdays">Weekdays</SelectItem>
                          <SelectItem value="weekends">Weekends</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Target className="mr-2 h-5 w-5" />
                    <div className="flex-1">
                      <Label>Goal</Label>
                      <Select value={habitGoal} onValueChange={setHabitGoal}>
                        <SelectTrigger className="w-full bg-slate-400 border-none mt-1">
                          <SelectValue placeholder="Select goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1_time_per_day">1 time per day</SelectItem>
                          <SelectItem value="2_times_per_day">2 times per day</SelectItem>
                          <SelectItem value="3_times_per_day">3 times per day</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Clock className="mr-2 h-5 w-5" />
                    <div className="flex-1">
                      <Label>Reminder</Label>
                      <Select value={habitReminder} onValueChange={setHabitReminder}>
                        <SelectTrigger className="w-full bg-slate-400 border-none mt-1">
                          <SelectValue placeholder="Select reminder time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="07:00">07:00</SelectItem>
                          <SelectItem value="08:00">08:00</SelectItem>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-500 rounded-lg p-4 mt-4">
                  <h2 className="text-xl font-bold mb-4">Remove Habit</h2>
                  <div className="space-y-4">
                    {habits.map((habit) => (
                      <div key={habit.id} className="flex justify-between items-center">
                        <p>{habit.name}</p>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-slate-600"
                          onClick={() => handleRemoveHabit(habit.id)}
                        >
                          <Eraser className="h-5 w-5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="task" className="mt-0 px-4">
                <div className="bg-slate-500 rounded-lg p-4">
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
                    <RotateCcw className="mr-2 h-5 w-5" />
                    <div className="flex-1">
                      <Label>Repeat</Label>
                      <Select value={taskRepeat} onValueChange={setTaskRepeat}>
                        <SelectTrigger className="w-full bg-slate-400 border-none mt-1">
                          <SelectValue placeholder="Select repeat frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="never">Never</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Clock className="mr-2 h-5 w-5" />
                    <div className="flex-1">
                      <Label>Starts</Label>
                      <div className="flex gap-2 mt-1">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full bg-slate-400 border-none text-left font-normal">
                              {taskStartsDate ? format(taskStartsDate, "yyyy-MM-dd") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={taskStartsDate}
                              onSelect={setTaskStartsDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <Select value={taskStartsTime} onValueChange={setTaskStartsTime}>
                          <SelectTrigger className="w-full bg-slate-400 border-none">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="08:00">08:00</SelectItem>
                            <SelectItem value="09:00">09:00</SelectItem>
                            <SelectItem value="10:00">10:00</SelectItem>
                            <SelectItem value="11:00">11:00</SelectItem>
                            <SelectItem value="12:00">12:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Clock className="mr-2 h-5 w-5" />
                    <div className="flex-1">
                      <Label>Ends</Label>
                      <div className="flex gap-2 mt-1">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full bg-slate-400 border-none text-left font-normal">
                              {taskEndsDate ? format(taskEndsDate, "yyyy-MM-dd") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={taskEndsDate}
                              onSelect={setTaskEndsDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <Select value={taskEndsTime} onValueChange={setTaskEndsTime}>
                          <SelectTrigger className="w-full bg-slate-400 border-none">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">09:00</SelectItem>
                            <SelectItem value="10:00">10:00</SelectItem>
                            <SelectItem value="11:00">11:00</SelectItem>
                            <SelectItem value="12:00">12:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <List className="mr-2 h-5 w-5" />
                    <div className="flex-1">
                      <Label>Priority Level</Label>
                      <Select value={taskPriority} onValueChange={setTaskPriority}>
                        <SelectTrigger className="w-full bg-slate-400 border-none mt-1">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-500 rounded-lg p-4 mt-4">
                  <h2 className="text-xl font-bold mb-4">Remove Task</h2>
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div key={task.id} className="flex justify-between items-center">
                        <p>{task.name}</p>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-slate-600"
                          onClick={() => handleRemoveTask(task.id)}
                        >
                          <Eraser className="h-5 w-5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>
        <div className="flex justify-between p-4 mt-auto border-t border-slate-500 flex-shrink-0">
          <Link href="/" className="w-24 py-3 bg-white text-slate-800 text-center rounded-full font-medium">
            HOME
          </Link>
          <Link href="/input" className="w-24 py-3 bg-slate-800 text-white text-center rounded-full font-medium">
            INPUT
          </Link>
          <Link href="/analytics" className="w-24 py-3 bg-white text-slate-800 text-center rounded-full font-medium">
            ANALYTICS
          </Link>
        </div>
      </div>
    </div>
  )
}
