import React from 'react';

function Header(props) {
  return (
    <header className="d-flex justify-content-between mt-5">
      <h1 className="m-2 t-2">{props.text}</h1>
      <h1>{props.averageHeader} <span className="badge badge-secondary">{props.average}</span></h1>
    </header>

  );
}
export default Header;
