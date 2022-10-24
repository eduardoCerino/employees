import {useContext, useState, useEffect} from "react";
import {  useNavigate } from "react-router-dom";
import {Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "../context/AuthContext";

interface MyFormValues {
  user: string;
  password: string;
}

function getFormValues() {
	const storedValues = localStorage.getItem('form');
	if (!storedValues)
		return {
			user: '',
			password: '',
		};
	return JSON.parse(storedValues);
}

const EmployeeForm: React.FC<{}> = () => {
  const [values, setValues] = useState<MyFormValues>(getFormValues);
  const initialValues= { user: "", password: "" };
  const navigate = useNavigate();
  const authcontext = useContext(AuthContext);
 
  const onSubmit = (values: MyFormValues, actions: any) => {
    if (values.user === "admin" && values.password === "admin") {
      authcontext?.setLoggedIn(true);
      authcontext?.setUser(values.user)
    ;
      //localStorage.setItem('user', JSON.stringify( values.user ) );
     // localStorage.setItem('password', JSON.stringify( values.password ) );

      navigate("/employees");}
  };
  useEffect(() => {
		localStorage.setItem('form', JSON.stringify(values));
	}, [values]);
 

  function validateUser(value: any) {
    let error;
    if (!value) error = "User required";
    return error;
  }

  function validatePassword(value: any) {
    let error;
    if (!value) error = "Password required";
    return error;
  }
  function onPaste(e: any) {
    e.preventDefault();
    return false;
  }
  function onCopy(e: any) {
    e.preventDefault();
    return false;
  }
  
  return (
    <div className="m-5">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="d-flex flex-column align-items-center ">
          <div className="mb-3 ">
            <label htmlFor="user" className="fs-5">
              User
            </label>
            <Field
              id="user"
              name="user"
              type="text"
              className="form-control mb-1  "
              onPaste={onPaste}
              onCopy={onCopy}
              validate={validateUser}
            />
            <div className="text-danger fst-italic">
              <ErrorMessage name="user" />
            </div>
          </div>

          <div className="mb-3 ">
            <label htmlFor="password" className="fs-5">
              Password
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              className="form-control mb-1  "
              onPaste={onPaste}
              onCopy={onCopy}
              validate={validatePassword}

            />
            <div className="text-danger fst-italic">
              <ErrorMessage name="password" />
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
