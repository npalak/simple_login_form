import React, { useState, useEffect } from "react";
export const Numbers = (props) => {
    
  const { handleFilter, filteredArr } = props;

  const [word, setWord] = useState("");

  const [filterDisplay, setFilterDisplay] = useState(props.persons);
  const [filterArr, setFilterArr] = useState([]);
  const clickHandler = () => {
    filteredArr.length>0 && setFilterArr(filteredArr)
  };
  return (
    <div>
      <h3>....Fetch Student Details...</h3>

      <input type="text" onChange={(e) => handleFilter(e.target.value)} />

      <button onClick={clickHandler}>Fetch</button>
      <br />
      <br />
      {filterArr.length > 0 && filterArr.map(i=><div>{i.id}{'  '}{i.name}</div>)}
    </div>
  );
};