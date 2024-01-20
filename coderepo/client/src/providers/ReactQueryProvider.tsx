"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { useState } from "react";

function ReactQueryProvider({ children }: React.PropsWithChildren) {
    const [queryClient] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 60 * 1000,
                },
            },
        })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryStreamedHydration>
                {children}
            </ReactQueryStreamedHydration>
        </QueryClientProvider>
    );
}

export default ReactQueryProvider;
