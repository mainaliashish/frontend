import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoute from "./router/AppRoute";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ToastMessage from "./ui/ToastMessage";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 2,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AppRoute />
      <ToastMessage />
    </QueryClientProvider>
  );
}

export default App;
