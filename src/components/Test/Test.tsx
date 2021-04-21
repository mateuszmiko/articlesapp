import './test.scss';
import { useHistory } from 'react-router-dom';
import React from 'react';

const users = [
  { id: 0, name: 'Test_!' },
  { id: 1, name: 'Test_@' },
];

const UserList = () => {
  const history = useHistory();

  const goToTestNew = (): void => history.push('/test-new');

  return (
    <div className="user-list">
      <button onClick={goToTestNew}>Go Test New</button>
      <div className="user-list__list list">
        {users.map(({ id, name }) => (
          <p key={id} className="list__element">
            {name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default UserList;
