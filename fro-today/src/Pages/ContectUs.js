import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";

const Contact1 = ({ fun }) => {
  useEffect(() => {
    fun(true);
    return () => {
      fun(false);
    };
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:8000/api/v1/contact",
      { name, email, phoneNo, message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (data.success === true) {
      toast.success("Data Sent Successfully");
      setName("");
      setEmail("");
      setPhoneNo("");
      setMessage("");
    } else {
      toast.error(data?.message);
    }

    console.log(data);
  };

  return (
    <div
      style={{
        backgroundColor: "#12999f",
        paddingBottom: 20,
        paddingTop: 20,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        style={{
          width: "80%",
          marginTop: "100px",
          backgroundColor: "#F2EDE6",
          paddingBottom: 20,
          borderRadius: 20,
        }}
      >
        {/* First Column - Image */}
        <Grid item xs={12} sm={4} align="center">
          <img
            src="https://source.unsplash.com/550x840/?contact"
            alt="Contact Us"
            style={{
              width: "90%",
              height: "400px",
              borderRadius: " 50px 0 50px 0",
            }}
          />
        </Grid>

        {/* Second Column - Input Fields */}
        <Grid item xs={12} sm={4} align="center">
          <Typography variant="h5">Get In Touch</Typography>
          <TextField
            align="center"
            id="standard-basic"
            label="Name"
            variant="standard"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            style={{ marginTop: 10 }}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Phone"
            variant="standard"
            name="phone"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            style={{ marginTop: 10 }}
          />

          <Grid item xs={12} sm={8} align="center">
            <TextField
              align="center"
              id="standard-basic"
              fullWidth
              label="Message"
              variant="standard"
              multiline
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              style={{ marginTop: 10, marginLeft: 20 }}
            />
          </Grid>
          <Button
            variant="contained"
            style={{ marginTop: 15 }}
            onClick={handleSubmit}
          >
            Contact Us
          </Button>
        </Grid>

        {/* Third Column - Contact Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" className="font-extrabold">
            Contact Info
          </Typography>
          <Typography variant="body1">
            <a href="tel:+1234567890" className="text-black font-semibold">
              <FaPhoneAlt
                style={{ fontSize: "1rem", marginRight: 10, marginTop: 20 }}
              />
              +1234567890
            </a>
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: 80, marginTop: 20 }}
          >
            <a
              href="mailto:example@example.com"
              className="text-black italic"
              style={{ fontSize: "1.4rem", marginRight: "10px" }}
            >
              <MdMarkEmailRead
                style={{ fontSize: "1.4rem", marginRight: 10 }}
              />
              example@example.com
            </a>
          </Typography>
          <Typography>
            <FaLinkedin style={{ fontSize: "2rem", marginRight: "10px" }} />
            <FaFacebook style={{ fontSize: "2rem", marginRight: "10px" }} />
            <FaTwitter style={{ fontSize: "2rem", marginRight: "10px" }} />
            <RiInstagramFill style={{ fontSize: "2rem" }} />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact1;
