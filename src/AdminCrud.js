import React from "react";
import { Link } from "react-router-dom";


const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Panel de Administración</h1>
      <div className="crud-sections">
        <section>
          <h2>Gestión de Productos</h2>
          <Link to="/admin/products">
          <button>PRODUCTOS</button>
        </Link>
        </section>
        <section>
          <h2>Gestión de Usuarios</h2>
          <Link to="/admin/users">
          <button>USUARIOS</button>
        </Link>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
