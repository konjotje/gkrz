export const casinoBrandColors: { [key: string]: string } = {
  // ...inhoud uit casinoKleurenData.ts...
};

export const getLightBrandColor = (color: string, opacity: number = 0.1) => {
  return color + Math.round(opacity * 255).toString(16).padStart(2, '0');
};

export const getGlassmorphismStyle = (color: string) => {
  return {
    background: `linear-gradient(135deg, ${getLightBrandColor(color, 0.15)}, ${getLightBrandColor(color, 0.05)})`,
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    boxShadow: `0 4px 30px ${getLightBrandColor(color, 0.1)}`,
    border: `1px solid ${getLightBrandColor(color, 0.2)}`
  };
};
