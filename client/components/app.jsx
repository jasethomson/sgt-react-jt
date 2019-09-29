import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      average: 0
    };
    this.avgGrade = null;
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

  render() {
    return (
      <div className="container">
        <Header text="Student Grade Table" averageHeader="Average Grade" average={this.avgGrade}/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
