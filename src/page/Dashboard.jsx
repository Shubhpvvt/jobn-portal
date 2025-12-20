import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="flex bg-gray-100">
        <Sidebar />

        <div className="flex-1 p-6">
          <div className="grid grid-cols-3 gap-6">
            <Card title="Your Analytics">
              <p>Connections</p>
              <p>Jobs Posted</p>
              <p>Certifications</p>
              <p>Profile Views</p>
            </Card>

            <Card title="Profile Completion">
              <p className="mb-2">75% completed</p>
              <button className="bg-[#FF321F] text-white px-3 py-1 rounded">
                Complete Your Profile
              </button>
            </Card>

            <Card title="Quick Actions">
              <button className="block bg-[#FF321F] text-white w-full mb-2 py-1 rounded">
                Edit Profile
              </button>
              <button className="block border w-full py-1 rounded">
                Explore Professionals
              </button>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <Card title="Recent Messages">
              <p>Alice Johnson</p>
              <p>Bob Williams</p>
              <p>Charlie Green</p>
            </Card>

            <Card title="Suggested Professionals">
              <p>Grace Lee</p>
              <button className="mt-2 bg-[#FF321F] text-white px-3 py-1 rounded">
                Connect
              </button>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
