import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

export function useBook() {
    const context = useContext(BooksContext)
    if (!context) {
        throw new Error('useBook must be used within a BookProvider')
    }
    return context
}