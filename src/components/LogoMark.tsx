interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 40, className = "" }: LogoMarkProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield outline */}
      <path 
        d="M24 4L6 12V22C6 32.5 13.8 42.2 24 44C34.2 42.2 42 32.5 42 22V12L24 4Z" 
        stroke="hsl(var(--primary))" 
        strokeWidth="2" 
        fill="none"
      />
      
      {/* Tuxedo lapels */}
      <path 
        d="M24 16L15 28V38L24 32L33 38V28L24 16Z" 
        fill="hsl(var(--secondary))"
      />
      
      {/* Left lapel */}
      <path 
        d="M24 16L15 28V32L24 26V16Z" 
        fill="hsl(var(--card))"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
      />
      
      {/* Right lapel */}
      <path 
        d="M24 16L33 28V32L24 26V16Z" 
        fill="hsl(var(--card))"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
      />
      
      {/* Shirt */}
      <path 
        d="M21 26L24 32L27 26V38H21V26Z" 
        fill="hsl(var(--foreground))"
      />
      
      {/* Bowtie */}
      <path 
        d="M19 22L24 25L29 22L24 19L19 22Z" 
        fill="hsl(var(--accent-lime))"
      />
      
      {/* Bowtie center */}
      <circle cx="24" cy="22" r="1.5" fill="hsl(var(--card))" />
      
      {/* Buttons */}
      <circle cx="24" cy="30" r="1" fill="hsl(var(--muted-foreground))" />
      <circle cx="24" cy="34" r="1" fill="hsl(var(--muted-foreground))" />
    </svg>
  );
}

export function LogoMarkSimple({ size = 32, className = "" }: LogoMarkProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Simplified bowtie with lapels for favicon */}
      <path 
        d="M16 4L4 10V18C4 25 9.5 30.5 16 32C22.5 30.5 28 25 28 18V10L16 4Z" 
        stroke="hsl(var(--primary))" 
        strokeWidth="1.5" 
        fill="hsl(var(--background))"
      />
      
      {/* Left lapel */}
      <path 
        d="M16 12L10 20V24L16 19V12Z" 
        fill="hsl(var(--card))"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
      />
      
      {/* Right lapel */}
      <path 
        d="M16 12L22 20V24L16 19V12Z" 
        fill="hsl(var(--card))"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
      />
      
      {/* Shirt triangle */}
      <path 
        d="M14 19L16 24L18 19V26H14V19Z" 
        fill="hsl(var(--foreground))"
      />
      
      {/* Bowtie */}
      <path 
        d="M12 16L16 18.5L20 16L16 13.5L12 16Z" 
        fill="hsl(var(--accent-lime))"
      />
      <circle cx="16" cy="16" r="1" fill="hsl(var(--card))" />
    </svg>
  );
}
