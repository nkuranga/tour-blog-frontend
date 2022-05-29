import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar/navbar2";
import { getTours } from "../redux/actions/tours";
// import Spiner from "../components/Loaders/spiner";
import Tour from "../components/Cards/tour";
import Pagination from "../components/pagination/Pagination";
import { setCurrentPage } from "../redux/reducers/tourSlice";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const dispatch = useDispatch();
  const { tours, currentPage, numberOfPage } = useSelector((state) => ({
    ...state.tour,
  }));
  const location = useLocation();
  const query = useQuery();
  const searchQuery = query.get("searchQuery");
  useEffect(() => {
    dispatch(getTours(currentPage));
  }, [dispatch, currentPage]);

  return (
    <>
      <Navbar />

      <section
        className="mb-32 text-gray-800 text-center"
        style={{ width: "80%", margin: "auto" }}
      >
        <h2 className="text-3xl font-bold mt-10 mb-12 text-center">
          Latest articles
        </h2>

        <>
          <div className="grid lg:grid-cols-3 gap-2 xl:gap-x-6">
            {tours.length === 0 && location.pathname === "/home" && (
              <h3>No Tour Found</h3>
            )}
            {tours.length === 0 && location.pathname !== "/home" && (
              <h3>We couldn't Find any matches for "{searchQuery}"</h3>
            )}
            {tours.length > 0 &&
              tours.map((tour) => <Tour key={tour._id} tour={tour} />)}
          </div>
        </>
      </section>
      {tours.length > 0 && (
        <Pagination
          setCurrentPage={setCurrentPage}
          dispatch={dispatch}
          currentPage={currentPage}
          numberOfPage={numberOfPage}
        />
      )}
    </>
  );
};

export default Home;
