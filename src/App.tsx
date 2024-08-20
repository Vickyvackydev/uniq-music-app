import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Homepage from "features/homepage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Routes>
        <Route element={<Homepage />} path="/" />
        {/* <Route element={<ViewPage />} path="/viewtask" /> */}
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
