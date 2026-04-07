import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Dashboard from "./pages/Dashboard.tsx";
import Editor from "./pages/Editor.tsx";
import Index from "./pages/Index.tsx";
import Financas from "./pages/Financas.tsx";
import Fitness from "./pages/Fitness.tsx";
import Gastronomia from "./pages/Gastronomia.tsx";
import MotoAuto from "./pages/MotoAuto.tsx";
import ModaBeleza from "./pages/ModaBeleza.tsx";
import Lifestyle from "./pages/Lifestyle.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/podcast" element={<Index />} />
          <Route path="/financas" element={<Financas />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/moto" element={<MotoAuto />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/moda-beleza" element={<ModaBeleza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
