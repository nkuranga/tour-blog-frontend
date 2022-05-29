import React, { useEffect } from "react";
import Navbar from "../components/Navbar/navbar2";
import { useDispatch, useSelector } from "react-redux";
import { getTour, getRelatedTours } from "../redux/actions/tours";
import { useParams } from "react-router-dom";
import Spiner from "../components/Loaders/spiner";
import moment from "moment";
import { BsCalendar2Date } from "react-icons/bs";
import DisqusThread from "../components/DisqusThread";
import RelatedTours from "./RelatedTours";

function TourDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { tour, relatedTours, loading } = useSelector((state) => ({
    ...state.tour,
  }));
  const tags = tour?.tags;
  console.log(tour);
  useEffect(() => {
    dispatch(getTour(id));
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(getRelatedTours(tags));
  }, [dispatch, tags]);
  console.log(relatedTours);
  return (
    <>
      <Navbar />
      <div className="flex ">
        {loading ? (
          <Spiner className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" />
        ) : (
          <section
            className="mb-32 text-gray-800 text-center"
            style={{ width: "70%", marginLeft: "30px" }}
          >
            <h2 className="text-3xl font-bold mt-10 mb-4 text-center">
              {tour.title}
            </h2>
            <div className="grid lg:grid-cols-1 gap-2 xl:gap-x-6">
              <div>
                <div className="flex mb-6 lg:mb-6 shadow-lg p-5 ">
                  <div>
                    <div
                      className="relative overflow-hidden bg-no-repeat bg-cover  ripple shadow-lg rounded-lg mb-6"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={tour.imageFile}
                        className="w-full"
                        alt={tour.title}
                      />
                      <a href="#!">
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                          style={{
                            backgroundColor: `rgba(251, 251, 251, 0.2)`,
                          }}
                        ></div>
                      </a>
                      <h3 className="text-white text-left font-semibold top-4 capitalize ml-3 absolute">
                        {tour.name}
                      </h3>
                    </div>

                    <h5 className="text-lg font-bold mb-3 text-left">
                      {tour.title}
                    </h5>
                    <div className="mb-3 text-red-600 text-left font-medium text-sm flex">
                      {tour &&
                        tour.tags &&
                        tour.tags.map((item) => `#${item} `)}
                    </div>
                    <p className="text-gray-500 mb-3 text-left">
                      <small className=" font-bold">
                        created By:
                        {tour.name}
                      </small>
                    </p>
                    <p className="text-gray-500 mb-6 text-left ">
                      <small className="flex">
                        <BsCalendar2Date size={15} className="mr-2" />
                        <u className="-mt-0.5">
                          {moment(tour.createdAt).fromNow()}
                        </u>
                      </small>
                    </p>
                    <p className="text-gray-500 text-left">
                      {tour.description}
                    </p>
                    <div className="flex space-x-2 justify-center"></div>
                  </div>
                </div>
              </div>
            </div>
            <DisqusThread id={id} title={tour.title} path={`/tour/${id}`} />
          </section>
        )}
        <RelatedTours relatedTours={relatedTours} tourId={id} />
      </div>
    </>
  );
}

export default TourDetails;
