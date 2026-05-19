import { type ReactNode } from "react";
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.error("Query error:", error);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  }),
});

type TanstackQueryProviderProps = {
  children: ReactNode;
};

function TanstackQueryProvider({ children }: TanstackQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackQueryProvider;
