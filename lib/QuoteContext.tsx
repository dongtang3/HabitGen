"use client";

import { createContext, useState, useContext, ReactNode } from "react";

// Define the Quote interface
export interface Quote {
  id: number;
  text: string;
  author: string;
}

// Define the context type
interface QuoteContextType {
  quotes: Quote[];
  addQuote: (text: string, author: string) => void;
  removeQuote: (id: number) => void;
  editQuote: (id: number, text: string, author: string) => void;
}

// Create the context with default values
const QuoteContext = createContext<QuoteContextType>({
  quotes: [],
  addQuote: () => {},
  removeQuote: () => {},
  editQuote: () => {},
});

// Export the provider component
export function QuoteProvider({ children }: { children: ReactNode }) {
  // Initialize with default quotes
  const [quotes, setQuotes] = useState<Quote[]>([
    {
      id: 1,
      text: "It always seems impossible until it is done",
      author: "Nelson Mandela",
    },
    {
      id: 2,
      text: "The best way to predict the future is to create it.",
      author: "Abraham Lincoln",
    },
    {
      id: 3,
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      id: 4, 
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
  ]);

  // Add a new quote
  const addQuote = (text: string, author: string) => {
    const newId = quotes.length > 0 ? Math.max(...quotes.map(q => q.id)) + 1 : 1;
    setQuotes([...quotes, { id: newId, text, author }]);
  };

  // Remove a quote
  const removeQuote = (id: number) => {
    setQuotes(quotes.filter(quote => quote.id !== id));
  };

  // Edit an existing quote
  const editQuote = (id: number, text: string, author: string) => {
    setQuotes(quotes.map(quote => 
      quote.id === id ? { ...quote, text, author } : quote
    ));
  };

  return (
    <QuoteContext.Provider value={{ quotes, addQuote, removeQuote, editQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

// Custom hook to use the quote context
export function useQuotes() {
  return useContext(QuoteContext);
}