import React from "react";
import { useState } from "react";
import Data from "../Data/Data";
import styles from "./Home.module.css";

const Home = () => {
  const [state, setState] = useState(Data);
  const [search, setSearch] = useState({
    district: "",
    date: "",
    deal: "",
  });
  const dateSearch = (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };
  const finalSearch = () => {
    if (search.district.length > 0) {
      let fi = state.filter((ele) => ele.district == search.district);
      setState([...fi]);
    }

    if (search.date.length > 0) {
      let fi = state.filter((ele) => ele.date == search.date);
      setState([...fi]);
    }
    if (search.deal.length > 0) {
      let fi = state.filter((ele) => ele.deal == search.deal);
      setState([...fi]);
    }
    console.log(state);
  };

  return (
    <div>
      <div className={styles.divContainer}>
        <div>
          <div className={styles.first}>District </div>
          <input type="text" onChange={dateSearch} name="district" />
        </div>
        <div>
          <div className={styles.first}>Date</div>
          <input type="text" onChange={dateSearch} name="date" />
        </div>
        <div>
          <div className={styles.first}>Date</div>

          <input type="text" onChange={dateSearch} name="deal" />
        </div>
        <button className={styles.btn} onClick={finalSearch}>Search</button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {state.map((ele) => (
          <div style={{ margin: "10px" }}>
            <img src={ele.photo} alt="Image" style={{ margin: "5px" }} />
            <div>
              <h1 style={{ alignItems: "center" }}>{ele.title}</h1>
              <h2>{ele.district}</h2>
              <h3>{ele.price}</h3>
              <h4>{ele.deal}</h4>
              <button>Add to favourite</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
