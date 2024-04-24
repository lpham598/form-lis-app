import { Routes, Route, useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import InputForm from "./components/InputForm/InputForm";
import ConfirmationPage from "./components/ConfirmationPage/ConfirmationPage";
import useSubmissions from "./hooks/useSubmission";
export interface FormData {
  name: string;
  title: string;
  age?: string;
  hometown?: string;
}

const App = () => {
  const methods = useForm<FormData>();
  const navigate = useNavigate();
  const { submissions, addSubmission } = useSubmissions();

  const onSubmit = async (data: FormData) => {
    await addSubmission(data);
    navigate("/confirmation");
  };

  return (
    <FormProvider {...methods}>
      <Routes>
        <Route path="/" element={<InputForm onFormSubmit={onSubmit} />} />
        <Route
          path="/confirmation"
          element={<ConfirmationPage submissions={submissions} />}
        />
      </Routes>
    </FormProvider>
  );
};

export default App;
