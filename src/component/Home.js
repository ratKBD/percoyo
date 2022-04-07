import "./Home.css";
import { useState } from "react";
import { Slider } from "./Slider";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    return window.alert([name, email, number]);
  };

  return (
    <>
      <div className="app-wrapper">
        <div className="split">
          <Slider />
          <form className="person">
            <div className="info">
              <div className="name">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="email">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="phoneno">
                <label className="label">Phone Number</label>
                <input
                  type="tel"
                  maxLength="10"
                  name="number"
                  placeholder="Enter Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
              <div className="description">
                <label className="label">description</label>
                <textarea
                  name="message"
                  id="message"
                  cols="50"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className="submit">
              <button
                className="btn"
                onClick={onSubmit}
                value="Submit"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
