import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchHomeData } from "./HomeSlice";

function Home() {
  const dispatch = useDispatch();
  let history = useHistory();
  const status = useSelector((state) => state.home.status);
  const data = useSelector((state) => state.home.data);
  const [visible, setVisible] = useState(12);
  const [search, setSearch] = useState("");

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
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {status === "failed" && (
          <div className="alert alert-danger mt-5" role="alert">
            Failed to load data!
          </div>
        )}
        <div className="col-6">
          <label className="mr-2">Search:</label>
          <input
            style={{ width: "200px" }}
            type="text"
            placeholder="search by rocket name"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="row mt-5">
          {data &&
            data
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.rocket.rocket_name
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .slice(0, visible)
              .map((item, index) => (
                <div className="col-md-6 mt-3" key={index}>
                  <div
                    className="card mb-3 shadow-lg"
                    style={{ maxWidth: "540px" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={item.links.mission_patch_small}
                          className="img-fluid rounded-start"
                          alt="thumbnail"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body ">
                          <h5 className="card-title">{item.mission_name}</h5>

                          <p>
                            <strong>Rocket name:</strong>{" "}
                            {item.rocket.rocket_name}
                          </p>

                          <p>{item.launch_date_local}</p>
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => {
                              history.push(`/detail/${index + 1}`);
                            }}
                          >
                            Details
                          </button>
                        </div>
                      </div>
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
