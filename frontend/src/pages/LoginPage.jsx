import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Eye, EyeOff } from 'lucide-react'
import AuthLayout from '../components/layout/AuthLayout'
import dashboardLaptopImg from '../assets/dashboard-laptop.png'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', { email, password })
  }

  const testimonial = (
    <div>
      <div className="flex items-center gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-white text-sm font-medium leading-snug mb-2">
        "Reduced our food waste by 32% in the first month."
      </blockquote>
      <p className="text-white font-semibold text-sm">Marcus Chen</p>
      <p className="text-emerald-300/70 text-xs italic">Head of Operations</p>
    </div>
  )

  return (
    <AuthLayout
      image={dashboardLaptopImg}
      imageAlt="ForecastFood Dashboard"
      bottomContent={testimonial}
    >
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[26px] font-bold text-gray-900 mb-1">Welcome back</h1>
        <p className="text-gray-500 text-sm">Sign in to your ForecastFood account</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="login-email" className="block text-sm font-semibold text-gray-700 mb-1">
            Email Address
          </label>
          <div className="relative">
            <input
              id="login-email"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent transition-all pr-10"
              required
            />
            <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="login-password" className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <a href="#" className="text-sm text-[#2D6A4F] hover:text-[#1B4332] font-medium">
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent transition-all pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          id="login-submit-btn"
          className="w-full py-3 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg shadow-[#1B4332]/20 active:scale-[0.98]"
        >
          Sign In
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4 my-5">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Google */}
      <button
        id="login-google-btn"
        className="w-full py-2.5 border border-gray-300 rounded-lg flex items-center justify-center gap-3 text-sm text-gray-700 font-medium hover:bg-gray-50 transition-all active:scale-[0.98]"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Sign in with Google
      </button>

      <p className="text-center mt-6 text-gray-500 text-sm">
        Don't have an account?{' '}
        <Link to="/register" className="text-[#2D6A4F] font-semibold underline underline-offset-2">Register here</Link>
      </p>
    </AuthLayout>
  )
}

export default LoginPage
