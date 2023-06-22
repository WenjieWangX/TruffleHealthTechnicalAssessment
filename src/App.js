import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Form from "./components/Form";
import FormEdit from "./components/Form/FormEdit";
import "./App.css";

const App = () => {
  const [inputData, setInputData] = useState([]);
  const [currentId, setCurrentId] = useState(1);

  const editInputDataById = (newFormData) => {
    console.log(newFormData);
    const updatedInputData = inputData.map((data) => {
      if (data.id === newFormData.id) {
        return newFormData;
      }

      return data;
    });

    setInputData(updatedInputData);
  };

  const deleteInputDataById = (id) => {
    const updatedInputData = inputData.filter((data) => {
      return data.id !== id;
    });
    setInputData(updatedInputData);
  };

  const createInputData = (formData) => {
    formData["id"] = currentId;
    const updatedInputData = [...inputData, formData];
    setCurrentId(currentId + 1);
    setInputData(updatedInputData);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home inputData={inputData} onDelete={deleteInputDataById} />
            }
          />
          <Route path="/form" element={<Form onCreate={createInputData} />} />
          <Route
            path="/formEdit"
            element={<FormEdit onEdit={editInputDataById} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
