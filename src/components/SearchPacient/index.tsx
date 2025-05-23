import React, { useState } from "react";
import searchIcon from "../../icons/lupa.png";
import xIcon from "../../icons/x.png";
import "./index.scss";

interface PatientOption {
  patient_name: string;
}

interface SearchPatientProps {
  setSelectedPatient: (patient: string) => void;
  setIsPredictionComplete: (isComplete: boolean) => void;
}

const options: PatientOption[] = [
  {
    patient_name: "Patient A",
  },
  {
    patient_name: "Patient B",
  },
  {
    patient_name: "Patient C",
  },
  {
    patient_name: "Patient D",
  },
];

const SearchPatient: React.FC<SearchPatientProps> = ({ setSelectedPatient, setIsPredictionComplete }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [patientSearch, setPatientSearch] = useState("");

  const filteredOptions = options.filter((option) =>
    option.patient_name.includes(patientSearch)
  );

  function handleSearchFocus() {
    setShowOptions(true);
  }

  function handleSearchBlur() {
    setShowOptions(false);
  }

  function handleSearchChange(value: string) {
    setPatientSearch(value);
  }

  function handleOptionClick(value: string) {
    setSelectedPatient(value);
    setPatientSearch(value);
    setIsPredictionComplete(false);
  }

  function handleDeleteSearch() {
    setPatientSearch("");
  }

  return (
    <div className="patient-search">
      <div className="search-bar">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search Patient"
            value={patientSearch}
            onChange={(event) => handleSearchChange(event.currentTarget.value)}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
          {patientSearch && (
            <img
              src={xIcon}
              alt="delete-search"
              className="delete-search"
              onClick={handleDeleteSearch}
            />
          )}
        </div>
        <div className="search-button">
          <img src={searchIcon} alt="search-icon" height={30} />
        </div>
      </div>
      <div className={`patient-options `}>
        <ul className={`${showOptions ? "expanded" : ""}`}>
          {filteredOptions.map((patient) => (
            <li key={patient.patient_name} onClick={(event) => handleOptionClick(patient.patient_name)}>
              {patient.patient_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPatient;
