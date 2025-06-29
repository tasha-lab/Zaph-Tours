import Adventure from "../components/Trips/adventure";
import Beach from "../components/Trips/Beach";
import CulinaryTours from "../components/Trips/CulinaryTours";
import CulturalTours from "../components/Trips/CulturalTours";
import EcoTours from "../components/Trips/EcoTours";
import Family from "../components/Trips/Family";
import Honeymoon from "../components/Trips/Honey";
import Luxury from "../components/Trips/Luxury";
import TripsHeading from "../components/Trips/tripsHeading";
import Wellness from "../components/Trips/Wellness";
import WildlifeSafaris from "../components/Trips/WildlifeSafaris";

const Trips = () => {
  return (
    <div>
      <TripsHeading />
      <Honeymoon />
      <Family />
      <Adventure />
      <CulturalTours />
      <WildlifeSafaris />
      <EcoTours />
      <Luxury />
      <Beach />
      <Wellness />
      <CulinaryTours />
    </div>
  );
};

export default Trips;
