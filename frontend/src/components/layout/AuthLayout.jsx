import logoImg from '../../assets/logo.png'

export default function AuthLayout({ 
  image, 
  imageAlt,
  heading,
  description,
  bottomContent,
  children 
}) {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Panel - identical structure on both pages */}
      <div className="hidden lg:flex w-[45%] flex-shrink-0 bg-gradient-to-b from-[#1B4332] to-[#2D6A4F] flex-col p-10 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)' }}
          />
        </div>

        {/* Top: Logo - always same position */}
        <div className="relative z-10 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <img src={logoImg} alt="ForecastFood Logo" className="w-7 h-7" />
            <span className="text-white text-lg font-bold tracking-tight">ForecastFood</span>
          </div>
          <p className="text-emerald-300/80 text-xs mt-1 ml-[38px] italic">
            Eco-Logistics AI Powering Sustainable Supply Chains
          </p>
        </div>

        {/* Middle: Heading + Description - only takes space when content exists */}
        {(heading || description) && (
          <div className="relative z-10 mt-8 flex-shrink-0">
            {heading && (
              <h2 className="text-white text-3xl font-bold leading-tight mb-3">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-emerald-100/80 text-sm leading-relaxed max-w-sm">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Image: fills available space */}
        <div className="relative z-10 flex-1 flex items-center justify-center py-4">
          <div className="w-full max-w-[420px] flex items-center justify-center">
            <img
              src={image}
              alt={imageAlt}
              className="max-w-full max-h-[380px] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Bottom: Info section */}
        {bottomContent && (
          <div className="relative z-10 flex-shrink-0 mt-4">
            {bottomContent}
          </div>
        )}
      </div>

      {/* Right Panel - scrollable form area */}
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="min-h-full flex items-center justify-center px-8 py-10">
          <div className="w-full max-w-[400px]">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-2.5 mb-8">
              <img src={logoImg} alt="ForecastFood Logo" className="w-7 h-7" />
              <span className="text-[#1B4332] text-lg font-bold">ForecastFood</span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
