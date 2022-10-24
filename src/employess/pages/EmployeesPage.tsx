import EmployeeForm from "../components/EmployeeForm";
import EmployeeRecords from "../components/EmployeeRecords";

const EmployeesPage = () => {
  return (
    <div className="row m-3">
      <div className="col">
        <EmployeeRecords />
      </div>

      <div className="col">
        <EmployeeForm />
      </div>
    </div>
  );
};

export default EmployeesPage;
