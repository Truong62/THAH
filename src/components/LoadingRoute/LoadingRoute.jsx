import React from 'react';

const LoadingRoute = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const loaderStyle = {
    width: '15px',
    aspectRatio: '1',
    borderRadius: '50%',
    animation: 'l5 1s infinite linear alternate',
  };

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes l5 {
          0%  {box-shadow: 20px 0 #000, -20px 0 #0002; background: #000;}
          33% {box-shadow: 20px 0 #000, -20px 0 #0002; background: #0002;}
          66% {box-shadow: 20px 0 #0002, -20px 0 #000; background: #0002;}
          100%{box-shadow: 20px 0 #0002, -20px 0 #000; background: #000;}
        }
      `}</style>
      <div style={loaderStyle}></div>
    </div>
  );
};

export default LoadingRoute;
