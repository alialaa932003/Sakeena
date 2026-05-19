import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./i18n";
import router from "./routes/router";
import Providers from "./components/providers";
import DevTools from "./components/DevTools";


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Providers>
            <RouterProvider router={router} />
            <DevTools />
        </Providers>
    </StrictMode>,
);
