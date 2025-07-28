// Step-1
import { useEffect, useState } from 'react'
import axios from 'axios'
import {Navigate} from 'react-router-dom'
import Unauthorized from '../utils/Unauthorized';

// admin | user
// Step-2 (add role, layout and redirectTo as props and define states)

const ProtectedRoute = ({ role, children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setAuthorized(false);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:4000/api/auth/check-role", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userRole = res.data?.role;
        if (!role || userRole === role) {
          setAuthorized(true);
        } else {
          setAuthorized(false);
        }
      } catch (err) {
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    checkAccess();
  }, [role]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-medium text-blue-600">Checking access...</p>
      </div>
    );
  }

  // ❌ Unauthorized users see 401 page
  if (!authorized) {
    return <Unauthorized />;
  }

  // ✅ Authorized users see protected component
  return children;
};

export default ProtectedRoute;
