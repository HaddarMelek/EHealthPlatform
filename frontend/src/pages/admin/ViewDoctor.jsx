import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "/src/context/AppContext.jsx";
import { assets } from "../../assets/assets";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import Footer from "../../components/admin/Adminfooter";

const ViewDoctor = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const { currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div className="admin-layout">
        {/* Header */}
        <Header />

        <div className="main-content flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="content flex-1 px-4 sm:px-6 md:px-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <img
                  className="bg-blue-300 w-full sm:max-w-72 rounded-lg"
                  src={docInfo.image}
                  alt={docInfo.name}
                />
              </div>
              <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
                <p className="flex items-center gap-3 text-2xl font-medium text-gray-900">
                  {docInfo.name}
                  <img className="w-5" src={assets.verified_icon} alt="" />
                </p>
                <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                  <p>
                    {docInfo.degree} - {docInfo.speciality}
                  </p>
                  <button className="py-0.5 px-2 border text-xs rounded-full">
                    {docInfo.experience}
                  </button>
                </div>
                <div>
                  <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                    À propos <img src={assets.info_icon} alt="" />
                  </p>
                  <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                    {docInfo.about}
                  </p>
                </div>
                <p className="text-gray-500 font-medium mt-4">
                  Frais de rendez-vous :{" "}
                  <span className="text-gray-600">{docInfo.fees}</span>{" "}
                  {currencySymbol}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    )
  );
};

export default ViewDoctor;
