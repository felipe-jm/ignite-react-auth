import { useContext, useEffect } from "react";

import { AuthContext, signOut } from "contexts/AuthContext";

import { withSSRAuth } from "utils/withSSRAuth";

import { setupAPIClient } from "services/api";
import { api } from "services/apiClient";
import { Can } from "components/Can";

const Dashboard = () => {
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    api.get("/me").then((response) => console.log(response.data));
  }, []);

  return (
    <>
      <h1>Dashboard {user?.email}</h1>

      <button onClick={signOut}>Sign out from every tab</button>

      <Can permissions={["metrics.list"]}>
        <div>Metrics</div>
      </Can>
    </>
  );
};

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("/me");

  console.log(response.data);

  return {
    props: {},
  };
});

export default Dashboard;
