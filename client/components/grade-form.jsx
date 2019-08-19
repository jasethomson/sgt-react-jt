import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: ''
    };
  }
  render() {
    return (
      <form>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            <i className="fas fa-user col-sm-2"></i>
          </label>
          <div className="col-sm-10">
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            <i className="far fa-list-alt col-sm-2"></i>
          </label>
          <div className="col-sm-10">
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              id="name"
              placeholder="Course" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            <i className="fas fa-graduation-cap col-sm-2"></i>
          </label>
          <div className="col-sm-10">
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              id="name"
              placeholder="Grade" />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary mr-2"> Add </button>
          <button type="reset" className="btn btn-secondary d-flex "> Cancel </button>
        </div>

      </form>

    );
  }
}

export default GradeForm;
