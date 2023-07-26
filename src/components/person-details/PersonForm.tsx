import { useForm } from "react-hook-form";
import FormGroup from "./FormGroup";
import ErrorHandledInput from "./Input";
import { personFormValidations } from "./util";
import ErrorHandledSelect from "./Select";

type FormData = {
  name: string | null;
  age: number | null;
  state: string | null;
  dob: Date | null;
};

const initialValue: FormData = {
  name: null,
  age: null,
  state: null,
  dob: null,
};

const states = ["Kerala", "Tamilnadu", "Karnataka"];

function PersonForm() {
  const { register, formState, handleSubmit } = useForm<FormData>({
    mode: "onTouched",
    defaultValues: initialValue,
  });

  const { errors } = formState;

  const onSubmit = (data: FormData) =>
    console.log("Form Data \n-----------------------\n", data);

  return (
    <form className="app__form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="app__form__header">Person Details</h1>
      <FormGroup htmlFor={"name"} labelText="Name">
        <ErrorHandledInput
          type="text"
          {...register("name", personFormValidations.name)}
          className={`form-group__input ${errors.name ? "error" : ""}`}
          error={errors.name?.message ?? ""}
        />
      </FormGroup>
      <FormGroup htmlFor={"name"} labelText="Age">
        <ErrorHandledInput
          type="number"
          {...register("age", personFormValidations.age)}
          className={`form-group__input ${errors.age ? "error" : ""}`}
          error={errors.age?.message ?? ""}
        />
      </FormGroup>
      <FormGroup htmlFor="state" labelText="State">
        <ErrorHandledSelect
          className={`form-group__input ${errors.state ? "error" : ""}`}
          {...register("state", personFormValidations.state)}
          error={errors.state?.message ?? ""}
        >
          <option value={""} disabled>
            Select
          </option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </ErrorHandledSelect>
      </FormGroup>

      <FormGroup htmlFor="dob" labelText="Date of Birth">
        <ErrorHandledInput
          className={`form-group__input ${errors.dob ? "error" : ""}`}
          {...register("dob", {
            valueAsDate: true,
            ...personFormValidations.dob,
          })}
          type="date"
          error={errors.dob?.message ?? ""}
        />
      </FormGroup>

      <button type="submit" disabled={!formState.isValid}>
        Log Form Details
      </button>
    </form>
  );
}

export default PersonForm;
