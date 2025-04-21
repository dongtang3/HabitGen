"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Check, Edit3, Target, Timer, ChevronLeft, ChevronRight, Pencil } from "lucide-react"
import { useQuotes } from "@/lib/QuoteContext"
import { useEffect, useState } from "react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Home() {
  const { quotes, editQuote } = useQuotes()
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [currentDate, setCurrentDate] = useState("")
  
  // State for the edit dialog
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [editQuoteText, setEditQuoteText] = useState("")
  const [editQuoteAuthor, setEditQuoteAuthor] = useState("")

  // Get the current date
  useEffect(() => {
    const now = new Date()
    setCurrentDate(format(now, "MMMM d, yyyy"))
  }, [])

  // Navigate to previous quote
  const prevQuote = () => {
    setCurrentQuoteIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : quotes.length - 1
    )
  }

  // Navigate to next quote
  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => 
      prevIndex < quotes.length - 1 ? prevIndex + 1 : 0
    )
  }

  // Open edit dialog with current quote
  const openEditDialog = () => {
    if (quotes.length > 0) {
      setEditQuoteText(quotes[currentQuoteIndex].text)
      setEditQuoteAuthor(quotes[currentQuoteIndex].author)
      setEditDialogOpen(true)
    }
  }

  // Save edited quote
  const saveEditedQuote = () => {
    if (quotes.length > 0 && editQuoteText && editQuoteAuthor) {
      const currentQuoteId = quotes[currentQuoteIndex].id
      editQuote(currentQuoteId, editQuoteText, editQuoteAuthor)
      setEditDialogOpen(false)
    }
  }

  // Auto-rotate quotes every 5 seconds (but stop when edit dialog is open)
  useEffect(() => {
    if (!editDialogOpen) {
      const interval = setInterval(() => {
        nextQuote()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [editDialogOpen, quotes.length])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      {/* Apply flex flex-col and fixed height */}
      <div className="w-full max-w-md mx-auto overflow-hidden bg-slate-600 text-white rounded-lg shadow-xl flex flex-col h-[calc(100vh-2rem)] max-h-[800px]">
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
            <h1 className="text-2xl font-bold text-center mb-2">HabitGen</h1>

            {/* Quote circle with carousel */}
            <div className="relative flex justify-center mb-6">
              <div 
                className="w-40 h-40 rounded-full bg-slate-700 flex items-center justify-center p-4 border-4 border-slate-800 relative"
                onClick={openEditDialog}
              >
                <div className="text-center">
                  {quotes.length > 0 && (
                    <>
                      <p className="text-xs">"{quotes[currentQuoteIndex].text}"</p>
                      <p className="text-xs mt-1">-{quotes[currentQuoteIndex].author}</p>
                    </>
                  )}
                </div>
                {/* Edit button overlay */}
                <div className="absolute top-1 right-1 bg-slate-800 rounded-full p-1">
                  <Pencil className="w-4 h-4" />
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-4 top-1/2 transform -translate-y-1/2" 
                onClick={prevQuote}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-4 top-1/2 transform -translate-y-1/2" 
                onClick={nextQuote}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
              <div className="absolute left-16 top-10">
                <Image
                  src="/left.svg?height=300&width=60"
                  width={60}
                  height={300}
                  alt="Decorative element"
                  className="opacity-70"
                />
              </div>
              <div className="absolute right-16 top-10">
                <Image
                  src="/right.svg?height=300&width=60"
                  width={60}
                  height={300}
                  alt="Decorative element"
                  className="opacity-70"
                />
              </div>
            </div>

            {/* Date display */}
            <p className="text-center mb-4">Today is {currentDate}</p>

            {/* Progress slider */}
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-800 text-xs">
                6%
              </div>
              <div className="flex-1 h-1 bg-slate-400 mx-2"></div>
            </div>

            {/* Make ScrollArea expand within the flex container */}
            <ScrollArea className="h-auto flex-grow pr-4">
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
        </div>

        {/* Bottom navigation */}
        <div className="flex justify-between p-4 mt-auto border-t border-slate-500 flex-shrink-0">
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

      {/* Edit Quote Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="bg-slate-600 text-white">
          <DialogHeader>
            <DialogTitle>Edit Quote</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-quote-text">Quote Text</Label>
              <Textarea 
                id="edit-quote-text" 
                value={editQuoteText} 
                onChange={(e) => setEditQuoteText(e.target.value)}
                className="bg-slate-500 border-slate-400 focus:border-slate-300"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-quote-author">Author</Label>
              <Input 
                id="edit-quote-author" 
                value={editQuoteAuthor} 
                onChange={(e) => setEditQuoteAuthor(e.target.value)}
                className="bg-slate-500 border-slate-400 focus:border-slate-300"
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline"
              onClick={() => setEditDialogOpen(false)}
              className="bg-slate-700 hover:bg-slate-800 border-slate-500"
            >
              Cancel
            </Button>
            <Button 
              onClick={saveEditedQuote}
              className="bg-green-600 hover:bg-green-700"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
