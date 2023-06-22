import { useNavigate } from "react-router-dom";
import "./index.css";

const AccordionItem = ({ info, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    onDelete(info.id);
  };

  const handleEditClick = () => {
    navigate("/formEdit", { state: info });
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapseOne${info.id}`}
          aria-expanded="false"
        >
          <strong>Hospital:</strong>
          {info.hospitalName}&nbsp;
          <strong>Date</strong>
          {info.date}
        </button>
      </h2>
      <div
        id={`panelsStayOpen-collapseOne${info.id}`}
        className="accordion-collapse collapse"
      >
        <div className="accordion-body container">
          <h1>Summary</h1>
          <div className="row">
            <div className="col">
              <h4>First Name</h4>
              <span>{info.firstName}</span>
            </div>
            <div className="col">
              <h4>Last Name</h4>
              <span>{info.lastName}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Address</h4>
              <span>{info.address}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>City</h4>
              <span>{info.city}</span>
            </div>
            <div className="col">
              <h4>State</h4>
              <span>{info.state}</span>
            </div>
            <div className="col">
              <h4>Zip</h4>
              <span>{info.zip}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Hospital</h4>
              <span>{info.hospitalName}</span>
            </div>
            <div className="col">
              <h4>Date</h4>
              <span>{info.date}</span>
            </div>
            <div className="col">
              <h4>Bill Amount</h4>
              <span>${info.billAmount}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary" onClick={handleEditClick}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={handleDeleteClick}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
