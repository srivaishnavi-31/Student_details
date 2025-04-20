import './App.css'
import { useState } from "react";
import { data } from './data.js'

function App() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(item => {
    if (search === "") return true;
    
    const lowerSearch = search.toLowerCase();
    return (
      item.ID.toString().toLowerCase().includes(lowerSearch) ||
      item.Name.toLowerCase().includes(lowerSearch) ||
      item["E-mail"].toLowerCase().includes(lowerSearch) ||
      item["Mobile No"].toString().includes(search)
    );
  });

  return (
    <>
      <div className="container mt-5">
        <h4 className="text-primary">Student Details</h4>
        <form className="col-md-6">
          <input 
            type="text" 
            className="form-control"
            placeholder="Search Text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <table className="table table-border table-striped mt-3">
          <thead>
            <tr>
              <th>S.No</th>
              <th>ID</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Mobile No</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.ID}</td>
                <td>{item.Name}</td>
                <td>{item["E-mail"]}</td>       
                <td>{item["Mobile No"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
