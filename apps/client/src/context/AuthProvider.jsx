import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/client/me", {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        console.log(err);
        setUser(null);
      } finally {
        setIsFetched(true);
      }
    };

    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout", null, {
        withCredentials: true,
      });
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isFetched, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
