const FixedLayout = ({ children }) => {
  return (
    <div className="w-screen overflow-x-auto">
      <div className="min-w-[1200px]">
        {children}
      </div>
    </div>
  );
};

export default FixedLayout;
