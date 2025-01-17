import CarDetails from "./CarDetails";
import PropTypes from "prop-types";

function CarCard({ car }) {
  return (
    <div className="w-96 p-6 bg-white border border-gray-200 rounded-lg shadow">
      <CarDetails
        title={car.title}
        brand={car.brand}
        year={car.year}
        price={car.price}
        premium={car.isPremium}
      />
    </div>
  )
}
//eslint validation
CarCard.propTypes = {
  car: PropTypes.object.isRequired
}

export default CarCard;