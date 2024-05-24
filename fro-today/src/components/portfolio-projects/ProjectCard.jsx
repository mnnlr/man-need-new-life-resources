import Card from "react-bootstrap/Card";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProject,
  getProjectDetails,
} from "../redux/action/projectAction";
import { DELETE_PROJECT_RESET } from "../redux/constants/projectContants";
import { useEffect } from "react";
import toast from "react-hot-toast";
import "../../styles/CardComponent.css";

const ProjectCard = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isDeleted } = useSelector((state) => state.deleteProject);

  const handleDelete = () => {
    dispatch(deleteProject(item._id));
    dispatch(getProjectDetails());
  };

  useEffect(() => {
    if (isDeleted) {
      toast.success("Card Deleted Successfully");
      navigate("/portfolio/best-projects");
      dispatch({ type: DELETE_PROJECT_RESET });
    }

    dispatch(getProjectDetails());
  }, [dispatch, navigate, isDeleted]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Card
        style={{
          width: "18rem",
          marginLeft: "20px",
        }}
      >
        <Card.Img
          variant="top"
          src={item?.avatar?.url}
          style={{
            width: "18rem",
            height: "10rem",
            padding: "10px",
          }}
        />
        <Card.Body>
          <Card.Title>{item?.projectTitle}</Card.Title>

          <Card.Text>
            <p className="overflow-ellipsis">{item.aboutProject}</p>
            <input type="checkbox" className="expand-btn" />
          </Card.Text>

          <Link to={`/portfolio-details/${item._id}`}>
            <IoEyeSharp
              style={{
                fontSize: "24px",
                cursor: "pointer",
                float: "left",
                color: "black",
              }}
            />
          </Link>
          <AiFillDelete
            style={{
              float: "right",
              fontSize: "24px",
              marginLeft: "40px",
              cursor: "pointer",
            }}
            onClick={handleDelete}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
