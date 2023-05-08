import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AdminDashboard(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.authenticated) {
      navigate("/");
    }
  }, [props.authenticated, navigate]);
  return <div>dashboard</div>;
}

export default AdminDashboard;
