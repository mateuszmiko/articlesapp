import './testNew.scss';
import React from 'react';

const users = [
  { id: 0, name: 'Adam' },
  { id: 1, name: 'Asia' },
];

const UserList = () => (
  <div className="user-list">
    <div className="user-list__list list">
      {users.map(({ id, name }) => (
        <p key={id} className="list__element">
          {name}
        </p>
      ))}
    </div>
  </div>
);

export default UserList;
