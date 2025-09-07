import { useLoaderData } from "react-router-dom";
import Banner from "./banner/Banner";
import JobOffers from "./jobOffers/JobOffers";
import Gallery from "./carousel/Gallery";

function MainHomePage() {
  const { job, count } = useLoaderData();
  return (
    <div>
      <Banner count={count} />
      <JobOffers job={job} />
      <Gallery />
    </div>
  );
}
export default MainHomePage;
