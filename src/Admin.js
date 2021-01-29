
import React, { useState ,useEffect} from "react";
import  "./table.css";
import {Numbers} from "./Numbers";

const Admin = () => {
 
  const [testArr, setTestArr] = useState([
{id: 1,name: 'Ram',stclass:'2nd',address:'Banglore',age:5,number:1,rs:'1' },
{id: 2,name: 'Kingston',stclass:'12th',address:'Bhopal',age:25,number:2,rs:'2' },
{id: 3,name: 'Padmesh',stclass: '8th',address:'Mumbai',age:25,number:3,rs:'3' },
{id: 4,name:'Rabbie Brilliant ',stclass:'4th',address:'Delhi',age:22,number:4,rs:'4' },
{id: 5,name:'Aabana',stclass: '7th',address:'Manali',age:25,number:5,rs:'5' },

  ]);

  const [inputFrom, setInputFrom] = useState();
  const [inputTo, setInputTo] = useState();
  const[inputAdd,setInputAdd]= useState();
  const[inputAge,setInputAge]= useState();
  const [filteredArr, setFilteredArr]= useState([]);


  const deleteRow = async (index, e) => {
    var data = testArr;
    data.splice(index, 1);

    setTestArr([...data]);
  };

  const addRow = async e => {
    var obj = {
      id: +new Date(),
      name: inputFrom,
      stclass: inputTo,
      address:inputAdd,
      age:inputAge,
    };

    var data = testArr;
    data.push(obj);

    setTestArr([...data]);
  };

  // const[filteredObject,setFilteredObject]=useEffect([]);


  const handleFilter=(id)=>{
    let arr= testArr.filter(i=>i.id==id)
    setFilteredArr(arr)
  }

  return (
    <div>
      <table>
        <thead> 
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Address</th>
            <th>Age</th>
            <th>Add Row</th>
          </tr>
          <tr>
          <th><input
              type="text"
              disabled
            /></th>
            <th><input
              type="text"
              className="form-control"
              value={inputFrom}
              onChange={e => setInputFrom(e.target.value)}
            /></th>
            <th><input
              type="text"
              className="form-control"
              value={inputTo}
              onChange={e => setInputTo(e.target.value)}
            /></th>
             <th><input
              type="text"
              className="form-control"
              value={inputAdd}
              onChange={e => setInputAdd(e.target.value)}
            /></th>
            <th><input
              type="text"
              className="form-control"
              value={inputAge}
              onChange={e => setInputAge(e.target.value)}
            /></th>
            <th><input
              type="button"
              className="btn btn-light"
              value="+"
              onClick={e => addRow(e)}
            /></th>
          </tr>
        </thead>
      <br />
        <tbody>
      {testArr.map((item, index) => (
        <tr key={item.id}>
         <td> {item.id}</td>
             <td> {item.name}</td>
             <td> {item.stclass}</td>
             <td>{item.address}</td>
             <td>{item.age}</td>
             <td>
            <input
              type="button"
              className="btn btn-light"
              value="Delete row"
              onClick={e => deleteRow(index, e)}
            /></td>
        
        </tr>
      ))}
      </tbody></table>
{/* this is for search button related thing--------------------------------------- */}
      
      <Numbers persons={testArr} handleFilter={handleFilter} filteredArr={filteredArr} />

    </div>
  );
};

export default Admin;