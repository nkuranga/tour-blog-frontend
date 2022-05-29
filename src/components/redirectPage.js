/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar/navbar2";

const redirectPage = () => {
  const [count, setCount] = useState(5);
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((counting) => --counting);
    }, 1000);

    count === 0 && history.push("/");
    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <>
      <Navbar />
      <div className="mt-20 flex justify-center items-center">
        <h3>Redirecting You in! {count} Seconds ....</h3>
      </div>
    </>
  );
};

export default redirectPage;
