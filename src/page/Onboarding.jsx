import React from 'react'

const Onboarding = () => {
    return (
        <div className='w-screen  h-screen flex-col flex'>



            <div className='flex w-full justify-between h-14 bg-[#FF321F]  items-center px-10 '>


                <div className='flex justify-center items-center'>
                    <div className='w-7 fill-white  h-7'><img src="img/logo/Sign-Up/Group.svg" alt="" /></div>
                    <h1 className='text-2xl   text-[#fdfdfd] font-bold italic '>CTRMExpertPlatform</h1>
                </div>


                <h2>Home</h2>



                <div className="flex justify-center gap-3 items-center ">

                    <div className=" bg-slate-500 flex justify-center items-center w-10 h-10  px-1 rounded-xl">


                        <div className=" w-4 h-4">
                            <img src="img/logo/hd/admin.svg" alt="" />

                        </div>
                    </div>


                    <div className=" bg-slate-500 flex justify-center items-center w-10 h-10  px-1 rounded-xl">


                        <div className="">
                            <img src="img/logo/hd/Bell.svg" alt="" />

                        </div>

                    </div>




                    <div className="w-10 h-10 ml-4 rounded-full bg-white"></div>


                </div>



            </div>



            <div className='w-screen    flex-1'>

                <div className="w-full max-w-5xl mx-auto  px-4 py-6">
                    <h2 className="text-xl font-semibold mb-6">Onboarding Progress</h2>

                    <div className="flex items-center justify-between">
                     
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-medium">
                                1
                            </div>
                            <span className="text-sm font-medium text-gray-800">
                                Basic Info
                            </span>
                        </div>

                        <div className="flex-1 h-px bg-gray-300 mx-4" />

                      
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full border border-gray-400 text-gray-700 flex items-center justify-center text-sm font-medium">
                                2
                            </div>
                            <span className="text-sm font-medium text-gray-600">
                                CTRM Expertise
                            </span>
                        </div>

                        <div className="flex-1 h-px bg-gray-300 mx-4" />

                     
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full border border-gray-400 text-gray-700 flex items-center justify-center text-sm font-medium">
                                3
                            </div>
                            <span className="text-sm font-medium text-gray-600">
                                Experience & Projects
                            </span>
                        </div>

                        <div className="flex-1 h-px bg-gray-300 mx-4" />

                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full border border-gray-400 text-gray-700 flex items-center justify-center text-sm font-medium">
                                4
                            </div>
                            <span className="text-sm font-medium text-gray-600">
                                Work Preferences
                            </span>
                        </div>
                    </div>
                </div>














                <div className=' max-w-5xl mx-auto  px-4  flex flex-row justify-center  items-start'>





                    <div className="w-1/2 h-full ">


                        <div className="w-full max-w-xl mx-auto bg-white  shadow-sm p-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">
                                Your Personal Details
                            </h2>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full rounded-lg bg-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="London, UK"
                                        className="w-full rounded-lg bg-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Current Role
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="CTRM Business Analyst"
                                        className="w-full rounded-lg bg-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Acme Energy Solutions"
                                        className="w-full rounded-lg bg-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className=" w-1/2 p-8   h-full ">






                        <h2 className="text-xl font-semibold text-gray-900 mb-8">
                            Profile Picture
                        </h2>





                        <div className="flex flex-col items-center gap-4">
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-sm font-medium text-gray-800 px-4 py-2 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 10l5-5 5 5M12 5v14"
                                    />
                                </svg>
                                Upload Photo
                            </button>

                            <p className="text-xs text-gray-500">
                                JPG or PNG, max 5MB
                            </p>
                        </div>











                    </div>






                </div>



























































            </div>


            <div className='w-full h-10 flex phone:px-7 phone:h-32 phone:py-6 px-32 justify-between  items-center  '>

                <div className=" flex gap-4 text-sm justify-center items-center ">
                    <h4>About</h4>
                    <h4>Resources</h4>
                    <h4>Legal</h4>
                </div>
                <div className=" flex gap-10 ">


                    <div className="">
                        <img src="img/logo/socal/linkedin.svg" alt="" />
                    </div>


                    <div className="">
                        <img src="img/logo/socal/tuter.svg" alt="" />
                    </div>


                    <div className="">
                        <img src="img/logo/socal/Vector.svg" alt="" />
                    </div>




                </div>


            </div>




        </div>
    )
}

export default Onboarding