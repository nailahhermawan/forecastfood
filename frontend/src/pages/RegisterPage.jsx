import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/layout/AuthLayout'
import dashboardCardImg from '../assets/dashboard-card.png'

function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)

  const passwordStrength = useMemo(() => {
    if (!password) return { label: '', level: 0, color: '' }
    let score = 0
    if (password.length >= 6) score++
    if (password.length >= 10) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    if (score <= 1) return { label: 'Weak', level: 1, color: '#ef4444' }
    if (score <= 3) return { label: 'Medium strength', level: 2, color: '#2D6A4F' }
    return { label: 'Strong', level: 3, color: '#22c55e' }
  }, [password])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Register:', { fullName, email, password, confirmPassword, agreeTerms })
  }

  return (
    <AuthLayout
      image={dashboardCardImg}
      imageAlt="Weekly Waste Reduction Dashboard"
      heading="Eco-Logistics AI"
      description="Join 2,000+ F&B businesses reducing food waste with AI-powered forecasting. Streamline your supply chain and embrace sustainable growth."
    >
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[26px] font-bold text-gray-900 mb-1">Create your account</h1>
        <p className="text-gray-500 text-sm">Start forecasting smarter today</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label htmlFor="register-name" className="block text-sm font-semibold text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="register-name"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="register-email" className="block text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            id="register-email"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="register-password" className="block text-sm font-semibold text-gray-700 mb-1">
            Password
          </label>
          <input
            id="register-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent transition-all"
            required
          />
          {password && (
            <div className="mt-1.5">
              <div className="flex gap-1">
                {[1, 2, 3].map((level) => (
                  <div
                    key={level}
                    className="h-1 flex-1 rounded-full transition-all duration-300"
                    style={{ backgroundColor: level <= passwordStrength.level ? passwordStrength.color : '#e5e7eb' }}
                  />
                ))}
              </div>
              <p className="text-xs mt-0.5 font-medium" style={{ color: passwordStrength.color }}>
                {passwordStrength.label}
              </p>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="register-confirm-password" className="block text-sm font-semibold text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            id="register-confirm-password"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="flex items-start gap-2.5 pt-1">
          <input
            id="register-terms"
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="mt-0.5 w-4 h-4 border-gray-300 rounded accent-[#2D6A4F] cursor-pointer"
          />
          <label htmlFor="register-terms" className="text-sm text-gray-600 cursor-pointer leading-snug">
            I agree to the{' '}
            <a href="#" className="text-[#2D6A4F] font-semibold underline underline-offset-2">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-[#2D6A4F] font-semibold underline underline-offset-2">Privacy Policy</a>.
          </label>
        </div>

        <button
          type="submit"
          id="register-submit-btn"
          className="w-full py-3 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg shadow-[#1B4332]/20 active:scale-[0.98]"
        >
          Create Account
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4 my-4">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Google */}
      <button
        id="register-google-btn"
        className="w-full py-2.5 border border-gray-300 rounded-lg flex items-center justify-center gap-3 text-sm text-gray-700 font-medium hover:bg-gray-50 transition-all active:scale-[0.98]"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Sign up with Google
      </button>

      <p className="text-center mt-5 text-gray-500 text-sm">
        Already have an account?{' '}
        <Link to="/login" className="text-[#2D6A4F] font-semibold underline underline-offset-2">Sign in</Link>
      </p>
    </AuthLayout>
  )
}

export default RegisterPage
