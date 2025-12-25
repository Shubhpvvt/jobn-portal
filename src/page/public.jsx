import PublicHeader from "../components/publicheader";
import PublicTabs from "../components/publictabs";
import PublicAbout from "../components/publicabout";
import PublicSidebar from "../components/publicsidebar";

const Public = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-6">

        {/* HEADER + SIDEBAR */}
        <div className="flex items-start">

          {/* LEFT CONTENT */}
          <div className="w-full max-w-4xl pr-5">
            <PublicHeader />

            <div className="mt-2">
              <PublicTabs />
            </div>

            <div className="mt-3">
              <PublicAbout />
            </div>
          </div>

          {/* VERTICAL LINE */}
          <div className="w-px bg-gray-200 self-stretch mx-3" />

          {/* RIGHT SIDEBAR — WIDTH REDUCED */}
          <div className="w-[260px] flex-shrink-0">
            <PublicSidebar />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Public;
