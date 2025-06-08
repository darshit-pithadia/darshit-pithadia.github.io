import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AnimatedGIFProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  variant?: "default" | "neural" | "data" | "minimal";
}

export default function AnimatedGIF({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  variant = "default" 
}: AnimatedGIFProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulate loading delay for animation effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);  // Generate particle effect for neural network visualization
  const generateParticles = () => {
    if (variant !== "neural") return null;
    
    const particles = [];
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 5 + 2;
        // Select a color from a gradient palette
      const colors = [
        "bg-purple-400",
        "bg-blue-400", 
        "bg-cyan-400",
        "bg-indigo-400",
        "bg-violet-400",
        "bg-teal-400"
      ];
      const colorClass = colors[Math.floor(Math.random() * colors.length)];
        particles.push(
        <motion.div
          key={`particle-${i}`}
          className={`absolute rounded-full ${colorClass} opacity-80 shadow-sm`}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            opacity: 0.4,
            filter: `blur(${Math.random() * 1}px)`,
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
            boxShadow: ["0 0 0px transparent", "0 0 3px currentColor", "0 0 0px transparent"],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      );
        // Add connections between particles
      if (i > 0) {
        const prevX = Math.random() * 100;
        const prevY = Math.random() * 100;
          // Create a more interesting connection effect
        const connectionColors = [
          "from-purple-400/40 to-blue-400/40",
          "from-blue-400/40 to-cyan-400/40",
          "from-indigo-400/40 to-violet-400/40",
        ];
        
        const gradientClass = connectionColors[Math.floor(Math.random() * connectionColors.length)];
        
        particles.push(
          <motion.div
            key={`connection-${i}`}
            className={`absolute bg-gradient-to-r ${gradientClass}`}
            style={{
              left: `${Math.min(x, prevX)}%`,
              top: `${Math.min(y, prevY)}%`,
              width: `${Math.abs(x - prevX)}%`,
              height: Math.random() < 0.3 ? '2px' : '1px',
              transformOrigin: 'left',
              transform: `rotate(${Math.atan2(y - prevY, x - prevX) * (180 / Math.PI)}deg)`,
              opacity: 0.3,
              filter: 'blur(0.5px)',
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              height: ['1px', '1.5px', '1px'],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              ease: "easeInOut",
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        );
      }
    }
    
    return particles;
  };
  
  const containerVariants = {
    default: {
      shadow: "shadow-[0_10px_40px_rgba(8,_112,_184,_0.5)]",
      hoverEffect: { 
        scale: 1.02,
        boxShadow: "0 15px 60px rgba(8, 112, 184, 0.7)",
      }
    },
    neural: {
      shadow: "shadow-[0_10px_40px_rgba(79,_70,_229,_0.6)]",
      hoverEffect: { 
        scale: 1.03,
        boxShadow: "0 15px 70px rgba(79, 70, 229, 0.8)",
      }
    },
    data: {
      shadow: "shadow-[0_10px_40px_rgba(6,_182,_212,_0.5)]",
      hoverEffect: { 
        scale: 1.02,
        boxShadow: "0 15px 60px rgba(6, 182, 212, 0.7)",
      }
    },
    minimal: {
      shadow: "shadow-lg",
      hoverEffect: { 
        scale: 1.01,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      }
    }
  };
    const overlayVariants = {
    default: "bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-cyan-500/20",
    neural: "bg-gradient-to-br from-purple-600/20 via-blue-600/15 to-cyan-600/20",
    data: "bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-teal-500/20",
    minimal: "bg-gradient-to-br from-gray-500/10 via-transparent to-gray-500/10",
  };
  
  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`relative overflow-hidden rounded-xl ${containerVariants[variant].shadow} ${className || ''}`}
      whileHover={{ 
        ...containerVariants[variant].hoverEffect,
        transition: { duration: 0.3 } 
      }}
    >
      {/* Code/Data visualization overlay effects */}
      <div className="absolute inset-0 mix-blend-soft-light opacity-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className={`absolute inset-0 ${overlayVariants[variant]}`}></div>
      </div>
      
      {/* Particle overlay for neural variant */}
      {variant === "neural" && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {generateParticles()}
        </div>
      )}
      
      {/* Data processing animation overlay for data variant */}
      {variant === "data" && (
        <motion.div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(90deg, transparent 95%, rgba(56, 189, 248, 0.8) 100%)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["100% 0%", "0% 0%", "100% 0%"],
          }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      )}
      
      {/* Animation overlay */}
      <motion.div        className={`absolute inset-0 ${
          variant === "neural" 
            ? "bg-gradient-to-r from-indigo-600/30 via-transparent to-purple-600/30" 
            : variant === "data" 
              ? "bg-gradient-to-r from-cyan-600/30 via-transparent to-teal-600/30"
              : variant === "minimal"
                ? "bg-gradient-to-r from-gray-600/20 via-transparent to-gray-600/20"
                : "bg-gradient-to-r from-blue-600/30 via-transparent to-purple-600/30"
        } backdrop-blur-[1px]`}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Border glow effect */}
      <motion.div 
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ 
          boxShadow: variant !== "minimal" 
            ? "inset 0 0 0 1px rgba(255, 255, 255, 0.1)" 
            : "none" 
        }}
      />
      
      {/* Corner accents for neural and data variants */}
      {(variant === "neural" || variant === "data") && (
        <>
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
            <div className={`
              absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-md
              ${variant === "neural" 
                ? "border-indigo-400 dark:border-indigo-300" 
                : "border-cyan-400 dark:border-cyan-300"}
            `}></div>
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
            <div className={`
              absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-md
              ${variant === "neural" 
                ? "border-purple-400 dark:border-purple-300" 
                : "border-teal-400 dark:border-teal-300"}
            `}></div>
          </div>
        </>
      )}
      
      {/* Main image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Image 
          src={src} 
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-auto ${className || ''}`}
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </motion.div>
  );
}
