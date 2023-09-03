import React, {useState, useEffect} from "react";
import axios from "axios";

const AutoSaveData = () => {
  const [geeshaudata, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://sheetdb.io/api/v1/iwggwlq423ayl");
      setData(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const saveData =()=> {
      localStorage.setItem("geeshaudata", JSON.stringify(geeshaudata));
    };

    saveData();
  },[geeshaudata]);


return (
    <div>
      <h1>Geeshau Invoices</h1>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 27</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 27</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 27</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 27</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 27</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 27</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 27</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 27</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 27</th>

          </tr>
        </thead>
        <tbody>
          {geeshaudata.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td>{row[3]}</td>
              <td>....</td>
              <td>{row[200]}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AutoSaveData;