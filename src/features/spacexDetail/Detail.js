import React, { useEffect } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchDetailData } from "./DetailSlice";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detail.data);

  useEffect(() => {
    dispatch(fetchDetailData(id));
  }, [dispatch]);

  return (
    <div className="container">
      {data && (
        <div>
          <h1 className="display-4 my-4 border-bottom border-secondary">
            {data.mission_name}
          </h1>

          <h4 className="mb-3">Launch Details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="fw-bold  me-2">Flight Number:</span>
              {data.flight_number}
            </li>
            <li className="list-group-item">
              <span className="fw-bold  me-2">Launch Year:</span>
              {data.launch_year}
            </li>
            <li className="list-group-item">
              <span className="fw-bold  me-2">Launch Date:</span>
              <Moment format="YYYY-MM-DD HH:mm">
                {data.launch_date_local}
              </Moment>
            </li>
            <li className="list-group-item">
              <span className="fw-bold  me-2">Launch Successful:</span>
              <span>{data.launch_success ? "Yes" : "No"}</span>
            </li>
            {data.details && (
              <li className="list-group-item">
                <span className="fw-bold  me-2">Details:</span>
                {data.details}
              </li>
            )}
          </ul>
          <div className="mt-4">
            <h4 className="my-3">Rocket Details</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <span className="fw-bold  me-2">Rocket Id:</span>
                {data.rocket.rocket_id}
              </li>
              <li className="list-group-item">
                <span className="fw-bold me-2">Rocket Name:</span>
                {data.rocket.rocket_name}
              </li>
              <li className="list-group-item">
                <span className="fw-bold  me-2">Rocket Type:</span>
                {data.rocket.rocket_type}
              </li>
            </ul>
          </div>
          <hr />
          <Link to="/" className="btn btn-secondary mb-4">
            Back
          </Link>
        </div>
      )}
    </div>
  );
}

export default Detail;
