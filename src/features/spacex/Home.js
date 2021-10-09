import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "./HomeSlice";

function Home() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.home.status);
  const data = useSelector((state) => state.home.data);
  const [visible, setVisible] = useState(12);

  const handleLoadButton = () => {
    setVisible(visible + 12);
  };

  useEffect(() => {
    dispatch(fetchHomeData());
  }, []);

  return (
    <div className="jumbotron">
      <div className="container">
        {status === "loading" && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {status === "failed" && (
          <div className="alert alert-danger" role="alert">
            Failed to load data!
          </div>
        )}
        <div className="row mt-5">
          {data &&
            data.slice(0, visible).map((item, index) => (
              <div className="col-md-3 col-sm-4 mt-3" key={index}>
                <div className="card">
                  <img
                    src={item.links.mission_patch_small}
                    className="card-img-top"
                    height="300px"
                    alt="thumbnail"
                  />
                  <div
                    className="card-footer text-center bg-transparent border-0 overflow-wrap"
                    style={{ minHeight: "5rem" }}
                  >
                    <h4 className="card-title ">{item.mission_name}</h4>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="d-grid">
          <button
            className="btn btn-primary mt-5 mb-5 "
            onClick={handleLoadButton}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
