const PublicHeader = () => {
  return (
    <div className="bg-white border px-8 py-6 w-full">
      
     
      <div className="flex justify-between items-start">

       
        <div className="flex gap-4">
          
         
          <div className="w-16 h-16 bg-gray-200 flex items-center justify-center flex-shrink-0">
            <span className="text-gray-400 text-xl">▲</span>
          </div>

          
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-900">
                Jai Dev
              </h2>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5">
                Verified
              </span>
            </div>

            <p className="text-sm text-gray-700 mt-0.5">
              Senior CTRM Consultant at Quantel Solutions
            </p>

            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
              📍 Houston, TX, USA
            </p>
          </div>
        </div>

        
        <div className="flex gap-3">
          <button className="bg-red-600 text-white text-sm px-5 py-2">
            Connect
          </button>
          <button className="border border-red-500 text-red-600 text-sm px-5 py-2">
            Message
          </button>
        </div>

      </div>

     
      <div className="mt-4 max-w-5xl">
        <p className="text-sm text-gray-600 leading-relaxed">
          Highly experienced CTRM consultant with a proven track record in
          implementing, optimizing, and supporting complex energy trading and
          risk management systems. Specializing in Allegro, Openlink Endur,
          and TriplePoint, I bridge the gap between business requirements and
          technical solutions to drive efficiency and regulatory compliance
          across commodity markets. Passionate about leveraging technology
          to solve intricate business challenges.
        </p>
      </div>

    </div>
  );
};

export default PublicHeader;
