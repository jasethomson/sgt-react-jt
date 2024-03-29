import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      average: 0
    };
    this.avgGrade = null;
    this.addGrade = this.addGrade.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  componentDidUpdate() {
    this.getAverageGrade();
    if (this.state.average !== this.avgGrade) {
      this.setState({ average: this.avgGrade });
    }
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => this.setState({ grades }));
  }

  getAverageGrade() {
    const avgGradeArray = this.state.grades;
    let gradeTotal = null;
    for (var gradeIndex = 0; gradeIndex < avgGradeArray.length; gradeIndex++) {
      gradeTotal += avgGradeArray[gradeIndex].grade;
    }
    this.avgGrade = Math.floor(gradeTotal / avgGradeArray.length);
  }

  addGrade(newGrade) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    };
    fetch('/api/grades', req)
      .then(res => res.json())
      .then(wooGrade => {
        const allGrades = this.state.grades.concat(wooGrade);
        this.setState({ grades: allGrades });
      });
  }
  render() {
    return (
      <div className="container">
        <Header text="Student Grade Table" averageHeader="Average Grade" average={this.avgGrade}/>
        <div className="d-flex justify-content-md-between">
          <GradeTable grades={this.state.grades}/>
          <GradeForm/>
        </div>
      </div>
    );
  }
}

export default App;
