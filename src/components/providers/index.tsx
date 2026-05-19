import { type ReactNode } from "react";
import TanstackQueryProvider from "@/components/providers/TanstackQueryProvider";
import { DarkModeProvider } from "@/components/context/DarkModeContext";
import { Toaster } from 'sonner'

type ProvidersProps = {
    children: ReactNode;
};

function Providers({ children }: ProvidersProps) {
    return (
        <DarkModeProvider>
            <Toaster richColors position="bottom-right" />

            <TanstackQueryProvider>{children}</TanstackQueryProvider>
        </DarkModeProvider>
    );
}

export default Providers;
