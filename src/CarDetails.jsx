import PropTypes from "prop-types";

function CarDetails({ title, brand, year, price, premium }) {
  return (
    <>
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <p><strong>Barnd:</strong> {brand}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Premium:</strong> {premium == true ? 'Yes' : 'No'}</p>
    </>
  )
}
//eslint validation
CarDetails.propTypes = {
  title: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  premium: PropTypes.bool.isRequired,
}

export default CarDetails;