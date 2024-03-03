import './DashboardView.scss';
import { useRef, useState, useEffect } from "react";

function DashboardView() {

  const [name, setName] = useState("Name Surname");
  const [count, setCount] = useState(0);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos/1").then(async (response) => {

      const resData = await response.json();

      const tempName = resData.title;

      console.log(resData);
      console.log(resData.title);

      if (tempName) {
        setName(tempName);
      }
    });



  }, []);

  return (
    <>
      <div className="dashboard-view">
        <div>
          <h1>Merhaba, {name || "Name not Fetched"}</h1>
          <h1>{count}</h1>
        </div>

        <button onClick={() => setCount(count + 1)}>
          Test
        </button >
      </div>
    </>
  );
}

export default DashboardView;