import { Button } from "@mui/material";
import "./editVideo.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { deleteUrl } from "../constans/url";

const DeleteVideo = () => {
  const redirect = useNavigate();
  const { id } = useParams();

  const deleteClick = () => {
    axios
      .delete(`${deleteUrl}${id}`)
      .then((response) => redirect("/"))
      .catch((error) => alert("error"));
  };
  const backClick = () => {
    redirect("/");
  };

  return (
    <div className="edit">
      <h1> Delete video {id} </h1>

      <div className="button">
        <Button variant="outlined" onClick={deleteClick}>
          Delete
        </Button>
        <Button variant="outlined" color="secondary" onClick={backClick}>
          Back
        </Button>
      </div>
    </div>
  );
};
export default DeleteVideo;
