import React from 'react'
import { useState} from 'react';
import { useEmployees } from '../hooks/useEmployees';

const EmployeeTable = () => {

  const {employees, isLoading} = useEmployees()
  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState("")

  const filteredEmployees = () => { 
    if( search.length === 0 ) 
      return employees.slice(currentPage, currentPage + 10);
    const filtered = employees.filter( employee => employee.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes( search ) || employee.last_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes( search ) ) ;
    return filtered.slice( currentPage, currentPage + 10); 
   }
    
  const nextHandler = () => {
    if ( employees.filter( employee => employee.name.includes( search ) ).length > currentPage + 10 )
    setCurrentPage( currentPage + 10 );  }

  const prevHandler = () => {
    if(currentPage>0){
      setCurrentPage(currentPage-10)
    }
  }
  const onSearchChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearch( target.value );
}
  return (
    <div>
      <div className="input-group mb-3">
        <input type="search" className="form-control rounded" placeholder="Search employee"  value={ search } onChange={ onSearchChange }  />
        <button type="button" className="btn btn-outline-primary">search </button>
      </div>
      
      <table className="table">
      <thead className="table-primary">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Last Name</th>
          <th scope="col"> Name</th>
          <th scope="col">Birthday</th>
        </tr>
      </thead>
      <tbody>
       {
        isLoading ? <h1>Loading...</h1> :
        filteredEmployees().map(employee=> {
            return (
              (
                <tr key={employee.id}>
                  <th scope="row">{employee.id}</th>
                  <td>{employee.name}</td>
                  <td>{employee.last_name}</td>
                  <td> {new Date(employee.birthday).toISOString().slice(0, 10)}</td>
                </tr>
              )
            )
          } ) 
        }
       
     </tbody>
  </table>

        <nav>
          <ul className="pagination">
            <li className="page-item"><button className='page-link m-3'onClick={prevHandler} >Previous</button></li>
            
            <li className="page-item"><button className="page-link m-3" onClick={nextHandler}>Next</button></li>
          </ul>
      </nav>
    </div>
  )
}

export default EmployeeTable