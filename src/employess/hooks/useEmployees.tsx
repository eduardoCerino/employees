import { useEffect, useState } from "react";

export const useEmployees = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getEmployees = async () => {
    const url =
      "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:eduardo";
    const response = await fetch(url);
    const data = await response.json();
    setEmployees(data.data.employees);
    setIsLoading(false);
    
  };
  useEffect(() => {
    getEmployees();
  }, []);

  return { employees, isLoading, setEmployees };
};
