import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage,
} from "formik";
import { useEmployees } from "../hooks/useEmployees";


interface MyFormValues {
  name: string;
  last_name: string;
  birthday: string;
}

const EmployeeForm: React.FC<{}> = () => {
  const {setEmployees, employees} = useEmployees()

  const initialValues: MyFormValues = { name: "", last_name: "", birthday: "" };

  const onSubmit = (values: MyFormValues, actions: any) => {
    let newDate = Date.parse(values.birthday);
    fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:eduardo', { 
    method: 'POST', 
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
   },
    mode: 'cors', 
    body: JSON.stringify({
      name: values.name,
      last_name: values.last_name,
      birthday: newDate
    })
  })
  setEmployees([...employees, {name: values.name, last_name: values.last_name, birthday: values.birthday}])
    console.log("submmitted");
  actions.resetForm();
  };

  function validateName(value: any) {
    let error;
    if (!value) error = "Required";
    else if (value.length > 30) error = "Must be 30 characters or less";
    return error;
  }

  function validateLastName(value: any) {
    let error;
    if (!value) error = "Required";
    else if (value.length > 30) error = "Must be 30 characters or less";
    return error;
  }

  function validateBirthday(value: any) {
    let error;
    if (!value) error = "Required";
    return error;
  }

  return (
    <div>
      <h1>My Example</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="fs-5">
              Name
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              className="form-control mb-1"
              placeholder="Employee name"
              validate={validateName}
            />
            <div className="text-danger fst-italic">
              <ErrorMessage name="name" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="fs-5">
              Last name
            </label>
            <Field
              id="last_name"
              name="last_name"
              type="text"
              className="form-control mb-1"
              placeholder="Employee last name"
              validate={validateLastName}
            />
            <div className="text-danger fst-italic">
              <ErrorMessage name="last_name" />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="fs-5">
              Birthday
            </label>
            <Field
              id="birthday"
              name="birthday"
              type="date"
              className="form-control mb-1"
              placeholder="Employee Birthday"
              validate={validateBirthday}
            />
            <div className="text-danger fst-italic">
              <ErrorMessage name="birthday" className="text-danger" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EmployeeForm;
