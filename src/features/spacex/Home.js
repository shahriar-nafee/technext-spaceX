import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "./HomeSlice";

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.home.loading);
  const data = useSelector((state) => state.home.data);
  console.log(loading);

  useEffect(() => {
    dispatch(fetchHomeData());
  }, []);
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
