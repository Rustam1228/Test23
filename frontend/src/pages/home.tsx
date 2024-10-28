import { AddCircle, Edit, Delete } from "@mui/icons-material";
import "./home.scss";
import { useState, useEffect } from "react";
import { IVideo } from "../types/global.typing";
import axios from "axios";
import { baseUrl } from "../constans/url";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [videos, setVideo] = useState<IVideo[]>([]);
  const redirect = useNavigate();

  useEffect(() => {
    axios
      .get<IVideo[]>(baseUrl)
      .then((response) => setVideo(response.data))
      .catch((error) => alert(JSON.stringify(error)));
  }, []);

  const redirectEdit = (id: string) => {
    redirect(`/edit-video/${id}`);
  };
  const redirectDelite = (id: string) => {
    redirect(`/delete-video/${id}`);
  };

  return (
    <div className="home">
      <div className="heading">
        <h1>Video List</h1>
        <span>
          <AddCircle onClick={() => redirect("/add-video")} />
        </span>
      </div>
      <div className="cards">
        {videos.map((item) => (
          <div key={item.id} className="card">
            <div className="left">
              <div>
                <span>{item.title}</span>
                <span className="time">
                  {moment(item.createdAt).format("DD-MM-YYYY HH:mm")}
                </span>
              </div>
              <div>
                <span>{item.url}</span>
              </div>
            </div>
            <div className="btns">
              <Edit onClick={() => redirectEdit(item.id)} />
              <Delete onClick={() => redirectDelite(item.id)}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
