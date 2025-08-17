const SearchArea = () => {
  return (
    <div className="flex items-center gap-x-2 py-2.5 pl-4 bg-[#f5f5f5] rounded-xl border-1 border-[#E4E4E4]">
      <img src="/src/assets/searchIcon.svg" alt="" />
      <input
        className="outline-none w-[20rem]"
        type="text"
        placeholder="Search listings, users here..."
      />
    </div>
  );
};

export default SearchArea;
