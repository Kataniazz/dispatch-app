import type { PropsWithChildren } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false
    }
  }
})

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
     <QueryClientProvider client={queryClient}>
        {children}
     </QueryClientProvider>
  )
}