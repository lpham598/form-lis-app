// App.tsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import InputForm from "./components/InputForm";
import ConfirmationPage from "./components/ConfirmationPage";

interface FormData {
  name: string;
  title: string;
  age?: string;
  hometown?: string;
}

const App = () => {
  const methods = useForm<FormData>();
  const [submissions, setSubmissions] = useState<FormData[]>([]);

  const handleSubmission = (data: FormData) => {
    setSubmissions((prevSubmissions) => [...prevSubmissions, data]);
  };

  return (
    <FormProvider {...methods}>
      <Routes>
        <Route
          path="/"
          element={<InputForm onFormSubmit={handleSubmission} />}
        />
        <Route
          path="/confirmation"
          element={<ConfirmationPage submissions={submissions} />}
        />
      </Routes>
    </FormProvider>
  );
};

export default App;
