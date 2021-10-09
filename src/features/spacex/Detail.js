import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const data = useSelector((state) => state.home.data);

  return (
    <div className="container">
      {data &&
        data.map(
          (item, index) =>
            index + 1 == id && (
              <>
                <h1 className="display-4 my-4 border-bottom border-secondary">
                  {item.mission_name}
                </h1>

                <h4 className="mb-3">Launch Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    <span className="font-weight-bold  me-2">
                      Flight Number:
                    </span>
                    {item.flight_number}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold  me-2">Launch Year:</span>
                    {item.launch_year}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold  me-2">Launch Date:</span>
                    {/* <Moment format="YYYY-MM-DD HH:mm">
                {launch_date_local}
              </Moment> */}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold  me-2">
                      Launch Successful:
                    </span>
                    <span>{item.launch_success ? "Yes" : "No"}</span>
                  </li>
                  {item.details && (
                    <li className="list-group-item">
                      <span className="font-weight-bold  me-2">Details:</span>
                      {item.details}
                    </li>
                  )}
                </ul>
                <hr />
                <h4 className="my-3">Rocket Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    <span className="font-weight-bold  me-2">Rocket Id:</span>
                    {item.rocket.rocket_id}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold me-2">Rocket Name:</span>
                    {item.rocket.rocket_name}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold  me-2">Rocket Type:</span>
                    {item.rocket.rocket_type}
                  </li>
                </ul>
                <hr />
                <Link to="/" className="btn btn-secondary mb-4">
                  Back
                </Link>
              </>
            )
        )}
    </div>
  );
}

export default Detail;
