import { NavLink } from "react-router-dom";
import AccordionItem from "../../components/AccordionItem";
import Navigation from "../../components/Navigation";

const Home = ({ inputData, onDelete }) => {
  const renderInputSummary = inputData.map((data) => {
    return <AccordionItem key={data.id} info={data} onDelete={onDelete} />;
  });

  return (
    <div style={{ marginTop: "2rem" }}>
      <Navigation />
      <div className="row" style={{ marginBottom: "2rem" }}>
        <div className="col">
          <NavLink to="/form" className="btn btn-success">
            Add Record
          </NavLink>
        </div>
      </div>
      <div className="accordion">{renderInputSummary}</div>
    </div>
  );
};

export default Home;
