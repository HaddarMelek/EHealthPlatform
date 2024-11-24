import Header from "../../components/admin/Header";
import Adminfooter from "../../components/admin/Adminfooter";
import  AdminPanel  from "../../components/admin/AdminPanel";

const Admin = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AdminPanel />
      <Adminfooter />
    </div>
  );
};

export default Admin;
