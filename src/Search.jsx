
function Search() {
  return (
    <div className="gap-2 flex items-center mb-5">
      <input className="border rounded-md w-96 px-2 py-2" type="text" placeholder="Search Cars...." />
      <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
      <label htmlFor="link-checkbox" className="text-base font-semibold text-gray-900">Show Premium Only</label>
    </div>
  )
}

export default Search;
