const PublicTabs = () => {
  return (
    <div className="w-full bg-gray-100 border">
      <div className="flex w-full">

       
        <button className="flex-1 bg-red-600 text-white text-sm font-medium py-2">
          About
        </button>

       
        <button className="flex-1 text-sm text-gray-700 py-2 hover:text-red-600">
          CTRM Expertise
        </button>

        <button className="flex-1 text-sm text-gray-700 py-2 hover:text-red-600">
          Projects
        </button>

        <button className="flex-1 text-sm text-gray-700 py-2 hover:text-red-600">
          Preferences
        </button>

      </div>
    </div>
  );
};

export default PublicTabs;
