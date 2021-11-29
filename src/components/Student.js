import React from 'react';
import Sort from './Sort';
import Chart from './Chart';
import '../styling/globals.css';
import Form from 'react-bootstrap/Form';
import useDashBoard from './useDashBoard';
import { useParams } from 'react-router-dom';
import { StudentSwitch } from './StudentSwitch';

const Student = () => {
  const { name } = useParams();
  const { data, filterChecked, setSort, selectAllAssignments, studentsData } =
    useDashBoard();

  //Assignment checkboxes
  const filterAssignments = data[name].assignments.map((assignment, index) => {
    return (
      <StudentSwitch
        id={'filter-assignment'}
        key={index}
        assignment={assignment}
        name={name}
      />
    );
  });
  //Sort and filter options
  const keys = Object.keys(data[name].radioBox);
  const sortValue = keys.filter((key) => data[name].radioBox[key]).toString();

  const updatedData = filterChecked(data[name].assignments);
  const sortedArr =
    updatedData.length > 0 ? setSort(sortValue, updatedData) : updatedData;
  const counter = data[name].assignments.length;

  return (
    <div className="student">
      <div className="student-container">
        <div className="student-header">
          Resultaten van<span> {name}</span>
        </div>
        <div className="student-options">
          <div className="banner-lines">
            <div className="banner">
              <div>
                Selecteer opdracht. Totaal: <span> {sortedArr.length} </span>
                van <span> {counter} </span>
              </div>
            </div>
            <ul className="filter-ul">{filterAssignments}</ul>
            <div className="filter-switch">
              <Form.Check
                className="switch-inv"
                onChange={() => {
                  selectAllAssignments(name);
                }}
                type="switch"
                id="student-switch"
                label="(De)selecteer alles"
              />
            </div>
          </div>

          <div className="sort-wrapper">
            {sortedArr.length >= 2 && (
              <div className="sort-option">
                <div className="banner-sort">Sorteeropties</div>
                <Sort state={studentsData} data="data" name={name} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="chart">
        {sortedArr.length > 0 && <Chart data={sortedArr} />}
      </div>
    </div>
  );
};

export default Student;
