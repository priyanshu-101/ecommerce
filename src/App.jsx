import { AuthProvider } from './contexts/AuthProvider'
import { useAuth } from './hooks/useAuth'
import { signOutUser } from './firebase'
import AuthForm from './components/AuthFormClean'
import Dashboard from './components/Dashboard'
import './App.css'

function AuthenticatedApp() {
  const { user, isAuthenticated, loading } = useAuth()

  const handleSignOut = async () => {
    await signOutUser()
  }

  // Debug: show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Debug: show auth state
  console.log('Auth State:', { user, isAuthenticated, loading })

  if (isAuthenticated) {
    return <Dashboard user={user} onSignOut={handleSignOut} />
  }

  return <AuthForm />
}

function App() {
  return (
    <AuthProvider>
      <AuthenticatedApp />
    </AuthProvider>
  )
}

export default App
