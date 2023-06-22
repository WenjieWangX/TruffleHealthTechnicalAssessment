import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./index.css";

const FormEdit = ({ onEdit }) => {
  const location = useLocation();
  const [formData, setFormData] = useState(location.state);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(formData);
    navigate("/");
  };

  const handleCancelClick = () => {
    navigate("/");
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <form onSubmit={handleSubmit} className="row g-3">
        <h1>Edit</h1>
        <div className="col-md-6">
          <label htmlFor="first-name" className="form-label">
            First Name<span className="required-field"></span>
          </label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="last-name" className="form-label">
            Last Name<span className="required-field"></span>
          </label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address<span className="required-field"></span>
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City<span className="required-field"></span>
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="State" className="form-label">
            State<span className="required-field"></span>
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="zip" className="form-label">
            Zip<span className="required-field"></span>
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="date" className="form-label">
            Date<span className="required-field"></span>
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="hospital" className="form-label">
            Hispital Name<span className="required-field"></span>
          </label>
          <input
            type="text"
            className="form-control"
            id="hospital"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="billAmount" className="form-label">
            Bill Amount<span className="required-field"></span>
          </label>
          <input
            type="number"
            min={1}
            step={"any"}
            className="form-control"
            id="billAmount"
            name="billAmount"
            value={formData.billAmount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Save
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default FormEdit;
