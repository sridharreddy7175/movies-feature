import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";

const title = "Favorite Movie Directory";

function App() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState();
  const [duration, setDuration] = useState("");
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");

  const ChangeName = (e) => {
    setName(e.target.value);
  };
  const ChangeRating = (e) => {
    setRating(e.target.value);
  };
  const ChangeDuration = (e) => {
    setDuration(e.target.value);
  };
  const ChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const add = () => {
    console.log(name, rating, duration, "hdhhdh");
    if (name === "" || rating === "" || duration === "") {
      alert("Please Enter the all fields");
    }
    else if (!/^([0-9]+([.][0-9]+)?[wdhm])([ ][0-9]+([.][0-9]+)?[wdhm])*$/
      .test(duration)) {
      alert("Please specify the time in hours or minutes (e.g. 2.5h or 150m)");
    }
    else {
      setDatas([
        ...datas,
        {
          name: name,
          rating: rating,
          duration: duration,
        },
      ]);
      setName("");
      setRating("");
      setDuration("");
    }



  };


  const filterNames = datas.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform
            name={name}
            rating={rating}
            duration={duration}
            ChangeName={ChangeName}
            ChangeRating={ChangeRating}
            ChangeDuration={ChangeDuration}
            add={add}
          />
        </div>
        <div className="layout-column w-30">
          <Search search={search}
            ChangeSearch={ChangeSearch}

          />
          <Movieslist datas={filterNames} />
          {/* <div data-testid='noResult'>
            <h3 className='text-center'>No Results Found</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
