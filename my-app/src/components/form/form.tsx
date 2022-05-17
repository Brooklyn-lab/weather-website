import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

type FormData = {
  location: string;
};

function Form(): JSX.Element {
  const {
    register,
    setValue,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form className="form" onSubmit={onSubmit}>
      <TextField
        id="outlined-basic"
        label="Enter location"
        variant="outlined"
        {...register("location", {
          required: "Required field",
          minLength: {
            value: 1,
            message: "Please enter at least one character",
          },
        })}
      />
      <div>{errors?.location && <p>{errors?.location?.message || "Error!"}</p>}</div>
      <Button type="submit" disabled={!isValid}>
        Click
      </Button>
    </form>
  );
}

export default Form;
