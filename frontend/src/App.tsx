import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DynamicForm from "./pages/DynamicForm";
import Submissions from "./pages/Submissions";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DynamicForm />} />
          <Route path="/submissions" element={<Submissions />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
