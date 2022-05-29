import React from "react";
import Tour from "../components/Cards/tour";

const RelatedTours = ({ relatedTours, tourId }) => {
  return (
    <>
      {relatedTours && relatedTours.length > 0 && (
        <>
          <div className=" bg-white p-3 dark:bg-slate-900">
            <section
              className="mb-32 text-gray-800 text-center mt-10"
              style={{ width: "20%", margin: "10px" }}
            >
              <h3 className="text-xl font-bold mt-10 mb-4 text-center">
                Related Tours
              </h3>
              {relatedTours
                .filter((tour) => tour._id !== tourId)
                .splice(0, 3)
                .map((tour) => (
                  <Tour tour={tour} key={tour._id} />
                ))}
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default RelatedTours;
