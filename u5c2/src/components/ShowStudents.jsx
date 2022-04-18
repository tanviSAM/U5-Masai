import { useState, useEffect } from "react";


export const ShowStudents = () => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState({
    cate: "id",
    order: "asc",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`http://localhost:8080/students`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  const handleSort = (e) => {
    const { id, value } = e.target;
    console.log(id);
    console.log(value);
    console.log(e.target);
  };

  console.log(data);

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            onClick={handleSort}
          >
            <option value="first_name" name="cate">First Name</option>
            <option value="gender" name="cate">Gender</option>
            <option value="age" name="cate">Age</option>
            <option value="tenth_score" name="cate">10th Score</option>
            <option value="twelth_score" name="cate">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below:  */}
          {data.map((e) => (
          <tr className="row">
            <td className="first_name">{e.first_name}</td>
              <td className="last_name">{e.last_name}</td>
              <td className="email">{e.email}</td>
              <td className="gender">{e.gender}</td>
              <td className="age">{+e.age}</td>
              <td className="tenth_score">{+e.tenth_score}</td>
              <td className="twelth_score">{+e.twelth_score}</td>
              <td className="preferred_branch">{e.preferred_branch}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
