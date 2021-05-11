import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return <h1>dashboard {user?.email}</h1>;
};

export default Dashboard;
