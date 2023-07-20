import { useEffect, useState, useRef } from 'react';

const ProgressBar = (props) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      }
    });
    const value = progressBarRef.current;

    if (value) {
      observer.observe(value);
    }

    return () => {
      if (value) {
        observer.unobserve(value);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress === props.prog) {
            clearInterval(timer);
            return prevProgress;
          }
          return prevProgress + 1;
        });
      }, 50);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isIntersecting, props.prog]);

  return (
    <div ref={progressBarRef} className="relative">
      <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-500"
          style={{ width: `${isIntersecting ? progress : 0}%` }}
        ></div>
        {isIntersecting && (
          <div
            className="absolute top-0 left-0 transform -translate-y-full"
            style={{ left: `${progress}%` }}
          >
            <div className="bg-orange-500 text-white px-2 py-1 rounded mb-1">
              {progress}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
