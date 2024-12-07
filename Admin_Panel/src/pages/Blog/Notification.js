import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Notify({ msg, type }) {
  const notify = () => {
    if (type === "success") {
      toast.success(` ${msg}`, {
        position: "top-right",
      });
    } else {
      toast.error(` ${msg}`, {
        position: "top-right",
      });
    }
  };
  notify()

  return (
    <div>
      <ToastContainer />
    </div>
  );
}
