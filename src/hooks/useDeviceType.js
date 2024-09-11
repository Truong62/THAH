import {useState, useEffect} from 'react';

const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState({
        isMobile: false,
        isTablet: false,
    });

    useEffect(() => {
        const checkDeviceType = () => {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches;

            setDeviceType({
                isMobile,
                isTablet,
            });
        };
        checkDeviceType();

        window.addEventListener('resize', checkDeviceType);

        return () => {
            window.removeEventListener('resize', checkDeviceType);
        };
    }, []);

    return deviceType;
};

export default useDeviceType;
