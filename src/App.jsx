import { useState } from "react";

function App() {
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

  const handleChange = (index, e) => {
    const updatedMembers = [...members];

    updatedMembers[index][e.target.name] = e.target.value;

    setMembers(updatedMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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