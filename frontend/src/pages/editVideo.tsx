import { TextField, Button } from "@mui/material";
import "./editVideo.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { editUrl, updateUrl } from "../constans/url";
import { IVideo } from "../types/global.typing";

const EditVideo = () => {
  const [title, SetTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const redirect = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get<IVideo>(`${editUrl}${id}`)
      .then((response) => {
        SetTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => alert("Error"));
  }, []);

  const saveClick = () => {
    if (title === "") {
      alert("Emty title");
      return;
    }
    const data = {
      title,
    };
    axios
      .patch(`${updateUrl}${id}`, data)
      .then((response) => redirect("/"))
      .catch((error) => alert("error"));
  };
  const backClick = () => {
    redirect("/");
  };

  return (
    <div className="edit">
      <h1> Edit Video</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="input">
          <TextField
            autoComplete="off"
            label="Video Title"
            variant="outlined"
            value={title}
            onChange={(e) => SetTitle(e.target.value)}
          />
          <div className="button">
            <Button variant="outlined" onClick={saveClick}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={backClick}>
              Back
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default EditVideo;
