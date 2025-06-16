// Common styling constants and utility classes for Gokkerzelement

// Container styles
export const containerStyles = {
  default: "container mx-auto px-4",
  narrow: "container mx-auto px-4 max-w-5xl",
  wide: "container mx-auto px-4 max-w-7xl",
}

// Section styles
export const sectionStyles = {
  default: "py-12 sm:py-16",
  compact: "py-8 sm:py-12",
  spacious: "py-16 sm:py-24",
}

// Card styles
export const cardStyles = {
  default: "bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300",
  outlined: "border border-gray-100 rounded-xl hover:border-gray-200 transition-colors duration-300",
  glass: "bg-white/50 backdrop-blur-sm rounded-xl border border-white/20",
}

// Text styles
export const textStyles = {
  h1: "text-4xl sm:text-5xl font-bold tracking-tight",
  h2: "text-3xl sm:text-4xl font-bold",
  h3: "text-2xl sm:text-3xl font-bold",
  h4: "text-xl sm:text-2xl font-bold",
  paragraph: "text-gray-600 leading-relaxed",
}

// Button styles (aanvullend op je bestaande Button component)
export const buttonStyles = {
  primary: "bg-gokkerz-green hover:bg-gokkerz-green/90 text-white",
  secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800",
  outline: "border-2 border-gokkerz-green text-gokkerz-green hover:bg-gokkerz-green/10",
  ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
}

// Common gradients
export const gradientStyles = {
  primary: "bg-gradient-to-br from-gokkerz-green to-gokkerz-green/80",
  subtle: "bg-gradient-to-br from-gray-50 to-white",
  glass: "bg-white/50 backdrop-blur-sm",
}

// Layout styles
export const layoutStyles = {
  section: "relative overflow-hidden",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
  flexBetween: "flex items-center justify-between",
  flexCenter: "flex items-center justify-center",
}

// Animation styles
export const animationStyles = {
  fadeIn: "opacity-0 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:forwards]",
  slideUp: "translate-y-4 opacity-0 animate-slide-up [animation-delay:0.2s] [animation-fill-mode:forwards]",
  scaleUp: "scale-95 opacity-0 animate-scale-up [animation-delay:0.2s] [animation-fill-mode:forwards]",
}

// Common spacing
export const spacing = {
  section: "space-y-12",
  content: "space-y-6",
  stack: "space-y-4",
  inline: "space-x-4",
}

// Common border styles
export const borderStyles = {
  default: "border border-gray-100",
  subtle: "border border-gray-50",
  accent: "border-2 border-gokkerz-green",
}

// Common shadow styles
export const shadowStyles = {
  sm: "shadow-[0_4px_12px_rgb(0,0,0,0.03)]",
  md: "shadow-[0_8px_16px_rgb(0,0,0,0.06)]",
  lg: "shadow-[0_12px_24px_rgb(0,0,0,0.09)]",
}

// Casino logo styles
export const casinoLogoStyles = {
  logo: "rounded-[20px] object-contain shadow-[5px_5px_10px_#969696,_-5px_-5px_10px_#ffffff,_inset_2px_2px_4px_#969696,_inset_-2px_-2px_4px_#ffffff]"
}

// Casino card specific styles
export const casinoCardStyles = {
  wrapper: "transform-gpu transition-all duration-200 ease-out hover:translate-y-[-2px]",
  container: "relative overflow-hidden bg-white",
  content: "flex items-center gap-3 p-4",
  logoWrapper: "relative min-w-[80px] flex-shrink-0",
  logo: "w-full h-auto aspect-square object-contain rounded-lg",
  ratingBadge: "absolute -right-1 -top-1 flex h-6 items-center justify-center rounded-full bg-white/95 px-2 shadow-sm",
  infoSection: "flex-1 min-w-0",
  bonusText: "text-sm font-medium line-clamp-2",
  featuresWrapper: "flex flex-wrap gap-1.5 mt-1.5",
  featureTag: "inline-flex items-center rounded-full bg-gray-50/80 px-2 py-0.5 text-xs font-medium",
  actionsWrapper: "flex flex-col gap-2 flex-shrink-0",
  primaryButton: "bg-gradient-to-r from-green-500 to-green-600 text-white min-w-[90px] py-2.5 px-3 rounded-lg font-medium text-sm shadow-sm hover:opacity-90 transition-all duration-200",
  secondaryButton: "border border-gray-200 text-gray-700 min-w-[90px] py-2.5 px-3 rounded-lg font-medium text-sm hover:bg-gray-50 transition-all duration-200",
}

// Animation variants
export const casinoCardAnimations = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: 'easeOut' }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1, ease: 'easeOut' }
  }
}