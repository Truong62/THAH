import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'primereact/skeleton';

const SkeletonProduct = ({
  shape = 'rectangle',
  width = '100%',
  height = '350px',
  size,
  borderRadius,
  count = 1,
  className = '',
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-full h-full">
          {shape === 'circle' || size ? (
            <Skeleton
              shape="circle"
              size={size}
              className={`animate-pulse ${className}`}
            />
          ) : shape === 'square' && size ? (
            <Skeleton size={size} className={`animate-pulse ${className}`} />
          ) : (
            <Skeleton
              width={width}
              height={height}
              borderRadius={
                shape === 'rounded' ? borderRadius || '16px' : undefined
              }
              className={`animate-pulse ${className}`}
            />
          )}
        </div>
      ))}
    </>
  );
};

SkeletonProduct.propTypes = {
  shape: PropTypes.oneOf(['rectangle', 'rounded', 'square', 'circle']),
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string,
  borderRadius: PropTypes.string,
  count: PropTypes.number,
  className: PropTypes.string,
};

export default SkeletonProduct;
