import reactLogo from "./assets/react.svg";
import { getEnvs } from "getEnvs";
import { useEffect, useState } from "react";
import axios from "axios";

const envs = getEnvs();

type userType = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [user, setUser] = useState<userType | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.get<userType>("http://api.url/me");

      setUser(response.data);
    };

    getUserData();
  }, []);

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>
        VITE_SOME_KEY:
        <strong>{envs.VITE_SOME_KEY}</strong>
      </p>
      {user && (
        <div>
          <p>
            id: <strong>{user.id}</strong>
          </p>
          <p>
            name: <strong>{user.name}</strong>
          </p>
          <p>
            email: <strong>{user.email}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
