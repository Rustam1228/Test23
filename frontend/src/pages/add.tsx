import { TextField, Button } from "@mui/material";
import "./add.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createUrl } from "../constans/url";

const AddVideo = () => {
  const [title, SetTitle] = useState<string>("");
  const redirect = useNavigate();

  const saveClick = () => {
    if(title===""){
        alert("Emty title");
        return;
    }
    const data={
        title
    }
    axios.post(createUrl ,data).then(response=>redirect("/")).catch(error=>alert("error"))
  };
  const backClick = () => {
    redirect("/");
  };

  return (
    <div className="add">
      <h1> Add Video</h1>
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
    </div>
  );
};
export default AddVideo;
