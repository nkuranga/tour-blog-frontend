import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTagTour } from "../redux/actions/tours";
import Tour from "../components/Cards/tour";
import Navbar2 from "../components/Navbar/navbar2";
import Spiner from "../components/Loaders/spiner";
const TagTours = () => {
  const { tag } = useParams();
  const dispatch = useDispatch();
  const { loading, tagTours } = useSelector((state) => ({ ...state.tour }));
  useEffect(() => {
    dispatch(getTagTour(tag));
  }, [tag, dispatch]);
  console.log(tagTours);
  return (
    <>
      <Navbar2 />
      <section
        className="mb-32 text-gray-800 text-center"
        style={{ width: "80%", margin: "auto" }}
      >
        <h2 className="text-3xl font-bold mt-10 mb-12 text-center">
          Tour By Tag
        </h2>
        {loading ? (
          <Spiner
            className="
              animate-spin
              rounded-full
              h-8
              w-8
              border-t-2 border-b-2 border-blue-500
              "
          />
        ) : (
          <div className="grid lg:grid-cols-3 gap-2 xl:gap-x-6">
            {tagTours.map((tour) => (
              <Tour key={tour._id} tour={tour} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default TagTours;
