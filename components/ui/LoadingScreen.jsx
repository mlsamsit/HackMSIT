"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Loader2, Crown, Shield } from "lucide-react";

export default function LoadingScreen({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [videosLoaded, setVideosLoaded] = useState(false);

  useEffect(() => {
    // Wait for DOM to be ready
    const checkVideos = () => {
      const videos = document.querySelectorAll('video');
      let loadedCount = 0;
      const totalVideos = videos.length;

      if (totalVideos === 0) {
        // No videos found, proceed after minimum delay
        setTimeout(() => {
          setLoadingProgress(100);
          setTimeout(() => setIsLoading(false), 500);
        }, 2000);
        return;
      }

      const handleVideoLoad = () => {
        loadedCount++;
        setLoadingProgress((loadedCount / totalVideos) * 80);
        
        if (loadedCount === totalVideos) {
          setVideosLoaded(true);
          // Add extra delay for smooth experience
          setTimeout(() => {
            setLoadingProgress(100);
            setTimeout(() => setIsLoading(false), 500);
          }, 800);
        }
      };

      const handleVideoError = () => {
        // Count error as loaded to prevent infinite loading
        loadedCount++;
        setLoadingProgress((loadedCount / totalVideos) * 80);
        
        if (loadedCount === totalVideos) {
          setVideosLoaded(true);
          setTimeout(() => {
            setLoadingProgress(100);
            setTimeout(() => setIsLoading(false), 500);
          }, 800);
        }
      };

      videos.forEach((video) => {
        if (video.readyState >= 3) {
          // Video already loaded
          handleVideoLoad();
        } else {
          video.addEventListener('loadeddata', handleVideoLoad);
          video.addEventListener('error', handleVideoError);
        }
      });
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(checkVideos, 100);

    // Fallback timeout in case videos don't load
    const fallbackTimeout = setTimeout(() => {
      if (isLoading) {
        setLoadingProgress(100);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(fallbackTimeout);
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-sandstone-900"
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ 
                  backgroundPosition: ["0% 0%", "100% 100%"],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  backgroundPosition: { duration: 20, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #d4a574 0, #d4a574 1px, transparent 1px, transparent 30px)'
                }}
              />
              
              {/* Floating particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-antique-gold rounded-full"
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: Math.random() * 100 + "%",
                    opacity: 0
                  }}
                  animate={{
                    y: [null, "-100vh"],
                    opacity: [0, 0.8, 0],
                    scale: [1, 1.5, 0.5]
                  }}
                  transition={{
                    duration: Math.random() * 10 + 15,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "linear"
                  }}
                />
              ))}
            </div>

            {/* Loading content */}
            <div className="relative z-10 text-center max-w-md mx-auto px-6">
              {/* Royal emblem animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="mb-8"
              >
                <div className="relative w-24 h-24 mx-auto">
                  {/* Outer ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-antique-gold/30"
                  />
                  
                  {/* Inner crown */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Crown className="w-12 h-12 text-antique-gold" />
                  </motion.div>
                  
                  {/* Shield */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Shield className="w-8 h-8 text-parchment/60" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Loading text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-parchment mb-3 tracking-wide">
                  HACKMSIT
                </h1>
                <p className="font-sans text-sm text-antique-gold/80 tracking-widest uppercase mb-8">
                  Preparing Your Experience
                </p>
              </motion.div>

              {/* Progress bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mb-6"
              >
                <div className="h-1 bg-parchment/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-antique-gold to-parchment rounded-full"
                  />
                </div>
              </motion.div>

              {/* Loading status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex items-center justify-center gap-3 text-parchment/70"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Loader2 className="w-4 h-4" />
                </motion.div>
                <span className="font-sans text-xs tracking-wide">
                  {videosLoaded ? "Finalizing..." : "Loading media..."}
                </span>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-antique-gold/20" />
              <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-antique-gold/20" />
              <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-antique-gold/20" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-antique-gold/20" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: isLoading ? 0 : 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}
