import { useState } from "react";

function App() {
  const [primaryDetails, setPrimaryDetails] = useState({
    gotram: "",
    email: "",
    city: "",
    state: "",
    country: "",
    pincode: ""
  });

  const [members, setMembers] = useState([
    {
      name: "",
      age: "",
      gender: "",
      photoId: "",
      idNumber: ""
    },
    {
      name: "",
      age: "",
      gender: "",
      photoId: "",
      idNumber: ""
    }
  ]);

  const handlePrimaryDetailsChange = (e) => {
    setPrimaryDetails((previousDetails) => ({
      ...previousDetails,
      [e.target.name]: e.target.value
    }));
  };

  const handleChange = (index, e) => {
    const updatedMembers = [...members];

    updatedMembers[index][e.target.name] = e.target.value;

    setMembers(updatedMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Primary Details:", primaryDetails);
    console.log("Members Data:", members);

    alert("TTD Registration Submitted Successfully");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>
          TTD Registration Form
        </h1>

        <form onSubmit={handleSubmit}>
          <div style={styles.memberBox}>
            <h3>Primary Details</h3>

            <div style={styles.inputGroup}>
              <label>Gotram</label>
              <input
                type="text"
                name="gotram"
                placeholder="Enter Gotram"
                value={primaryDetails.gotram}
                onChange={handlePrimaryDetailsChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={primaryDetails.email}
                onChange={handlePrimaryDetailsChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                value={primaryDetails.city}
                onChange={handlePrimaryDetailsChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label>State</label>
              <input
                type="text"
                name="state"
                placeholder="Enter State"
                value={primaryDetails.state}
                onChange={handlePrimaryDetailsChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label>Country</label>
              <input
                type="text"
                name="country"
                placeholder="Enter Country"
                value={primaryDetails.country}
                onChange={handlePrimaryDetailsChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label>Pincode</label>
              <input
                type="text"
                name="pincode"
                placeholder="Enter Pincode"
                value={primaryDetails.pincode}
                onChange={handlePrimaryDetailsChange}
                required
                style={styles.input}
              />
            </div>
          </div>

          {members.map((member, index) => (
            <div key={index} style={styles.memberBox}>
              <h3>Member {index + 1}</h3>

              <div style={styles.inputGroup}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={member.name}
                  onChange={(e) => handleChange(index, e)}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter Age"
                  value={member.age}
                  onChange={(e) => handleChange(index, e)}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label>Gender</label>
                <select
                  name="gender"
                  value={member.gender}
                  onChange={(e) => handleChange(index, e)}
                  required
                  style={styles.input}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label>Photo ID Proof</label>
                <select
                  name="photoId"
                  value={member.photoId}
                  onChange={(e) => handleChange(index, e)}
                  required
                  style={styles.input}
                >
                  <option value="">Select ID Proof</option>
                  <option>Aadhaar Card</option>
                  <option>Passport</option>
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label>ID Number</label>
                <input
                  type="text"
                  name="idNumber"
                  placeholder="Enter Aadhaar/Passport Number"
                  value={member.idNumber}
                  onChange={(e) => handleChange(index, e)}
                  required
                  style={styles.input}
                />
              </div>
            </div>
          ))}

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f2f2f2"
  },

  card: {
    width: "550px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.2)"
  },

  heading: {
    textAlign: "center",
    color: "#8B0000",
    marginBottom: "20px"
  },

  memberBox: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px"
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px"
  },

  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "5px"
  },

  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#8B0000",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default App;