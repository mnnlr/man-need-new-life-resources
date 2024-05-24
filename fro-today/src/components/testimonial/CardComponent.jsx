import Card from "react-bootstrap/Card";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient, getclientDetails } from "../redux/action/clientAction";
import { DELETE_CLIENT_RESET } from "../redux/constants/clientContants";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { getcompanyDetails } from "../redux/action/companyAction";
import "../../styles/CardComponent.css";

const CardComponent = ({ item, companies }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(item);
  console.log(companies);

  let aboutCompany = "";
  // Check if companies exist and is an array before mapping
  if (companies && Array.isArray(companies.company)) {
    // Find the matching company based on _id
    const matchingCompany = companies.company.find(
      (company) => company._id === item?.company?._id
    );
    if (matchingCompany) {
      aboutCompany = matchingCompany.paragraphofcompany;
    }
  }

  const { isDeleted } = useSelector((state) => state.deleteClient);

  const handleDelete = () => {
    dispatch(deleteClient(item._id));
    dispatch(getclientDetails());
  };

  useEffect(() => {
    if (isDeleted) {
      toast.success("Card Deleted Successfully");
      navigate("/testimonial/home");
      dispatch({ type: DELETE_CLIENT_RESET });
    }

    dispatch(getclientDetails());
    dispatch(getcompanyDetails());
  }, [dispatch, navigate, isDeleted]);

  return (
    <Card style={{ width: "18rem", marginLeft: "20px" }}>
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
        <Card.Title>
          <Card.Img
            variant="top"
            src={item?.logo?.url}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          {item?.company?.clientName}
        </Card.Title>

        <Card.Text>
          <p className="overflow-ellipsis">{aboutCompany}</p>
          <input type="checkbox" className="expand-btn" />
        </Card.Text>

        <Card.Title>{item?.designation}</Card.Title>
        <Link to={`/company-details/${item.company._id}`}>
          <IoEyeSharp
            style={{
              fontSize: "24px",
              cursor: "pointer",
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
  );
};

export default CardComponent;
