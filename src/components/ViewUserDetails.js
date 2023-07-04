import React from 'react';
import { useParams } from 'react-router-dom';

const ViewUserDetails = (props) => {
    const params = useParams();
  console.log(props);
  console.log(params.id);
  let value = [{ name: "", email: "" }];
  if (props.users.length !== 0) {
    value = props.users.filter((user) => user.id === params.id);
  }
  console.log(value[0]);
  return (
    <div className="main">
      <div className="ui card centered">
        <a className="image">
          <img src='' alt="user" />
        </a>
        <div className="content">
          <a className="header">{value[0].name}</a>
          <div className="meta">
            <a>{value[0].email}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewUserDetails