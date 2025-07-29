import Navbar from './Navbar'
import Footer from './Footer'
import DailyNeedsShop from './DailyNeedsShop'

const Dashboard = ({ user, onSignOut }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar user={user} onSignOut={onSignOut} />
      <main className="flex-1 w-full">
        <DailyNeedsShop />
      </main>
      <Footer />
    </div>
  )
}

export default Dashboard
