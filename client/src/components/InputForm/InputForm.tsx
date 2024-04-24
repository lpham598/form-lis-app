import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./InputFormStyles.css";
import { FormData } from "../../App";

interface InputFormProps {
  onFormSubmit: (data: FormData) => void;
}

const InputForm = ({ onFormSubmit }: InputFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<FormData>();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    onFormSubmit(data);
    navigate("/confirmation");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Basic Data Entry Form</h1>

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder="Your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="title">Title:</label>
        <input
          id="title"
          placeholder="Your title"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && <p>{errors.title.message}</p>}

        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          placeholder="Your age"
          {...register("age", {
            min: {
              value: 0,
              message: "Age cannot be negative",
            },
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}

        <label htmlFor="hometown">Hometown:</label>
        <input
          id="hometown"
          placeholder="Your hometown"
          {...register("hometown")}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
