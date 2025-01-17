import CarList from "./CarList";
import Header from "./Header";
import Search from "./Search";

function Cars() {
  return (
    <div className="mx-auto p-8">
      <Header />
      <Search />
      <CarList />
    </div>
  )
}

export default Cars
