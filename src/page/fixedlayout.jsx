const FixedLayout = ({ children }) => {
  return (
    <div className="w-screen overflow-x-auto">
      <div className="min-w-[1280px] scale-[0.8] origin-top-left">
        {children}
      </div>
    </div>
  );
};

export default FixedLayout;
