import UserInfoCard from './UserInfoCard';

const UsersPage = () => {
  return (
    <div className="users">
      <h4>Users</h4>
      <div className="users__summary">
        <UserInfoCard image="" text="" figure={2453} />
        <UserInfoCard image="" text="" figure={2453} />
        <UserInfoCard image="" text="" figure={2453} />
        <UserInfoCard image="" text="" figure={2453} />
      </div>
    </div>
  );
};

export default UsersPage;
