import React from 'react';
import Sort from './Sort';
import Chart from './Chart';
import '../styling/globals.css';
import useDashBoard from './useDashBoard';
import { StudentSwitch } from './StudentSwitch';

const Average = () => {
  const {
    setSort,
    counter,
    students,
    averageData,
    assignments,
    studentsData,
    averageFilter,
    averageAssignments,
  } = useDashBoard();

  // Student switch buttons
  const studentSwitches = students.map((person, index) => {
    return <StudentSwitch id={'student'} key={index} name={person} />;
  });
  //Assignment dropdown menu
  const assignmentOptions = assignments.map((assignment, index) => {
    return <StudentSwitch id={'assignment'} key={index} name={assignment} />;
  });
  //Sort and filter options
  const keys = Object.keys(studentsData.average.radioBox);
  const sortValue = keys
    .filter((key) => studentsData.average.radioBox[key])
    .toString();

  const sortedArr =
    averageAssignments.length > 0 &&
    setSort(sortValue, averageAssignments, studentsData.average.reverse);

  const filterAverageData = averageAssignments.filter((items) => {
    return items.assignment === averageData.filter;
  });

  const dataCondition = () => {
    if (averageData.filter === 'showall') {
      return sortedArr;
    } else {
      return filterAverageData;
    }
  };
  const updateCondition = dataCondition();

  return (
    <div className="average">
      <div className="average-container">
        <div className="average-header">
          Beoordelingen van alle studenten
        </div>
        <div className="stylewrapper">
          <div className="student-switches">
            <div className="banner">
              Selecteer minimaal twee studenten om de resultaten te vergelijken
              (<span>{counter}</span>)
            </div>
            <ul>{studentSwitches}</ul>
          </div>
          {filterAverageData.length !== 1 ? (
            <div className="sort-option">
              <div className="banner-sort">Sorteeropties</div>
              <Sort state={studentsData} data="average" />
            </div>
          ) : null}

          <div className="assignment-options">
            <div className="assignment-banner">
              Selecteer opdracht. Geselecteerd:
              {studentsData.average.filter === 'showall' ? (
                <span> {assignments.length} </span>
              ) : (
                <span> {studentsData.average.filter}</span>
              )}
            </div>
            <select
              defaultValue={studentsData.average.filter}
              onChange={(event) => {
                averageFilter(event.target.value);
              }}
            >
              <option default value="showall">
                ▼ Alle opdrachten (56)
              </option>
              {assignmentOptions}
            </select>
          </div>
        </div>
        <div className="chart">
          {updateCondition.length > 0 && <Chart data={updateCondition} />}
        </div>
      </div>
    </div>
  );
};
export default Average;
