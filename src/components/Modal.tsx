import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex-center fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-5 text-center shadow-lg">
        <h2 className="text-xl font-semibold">Operation successful!</h2>
        <p>Now you go to dashboard</p>
      </div>
    </div>
  );
};

export default Modal;
