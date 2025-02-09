import React from 'react';

const features = [
  {
    icon: 'https://file.hstatic.net/1000366086/file/policies_icon_1__1_.png',
    title: 'Miễn phí vận chuyển',
    description: 'Với đơn hàng đầu tiên',
  },
  {
    icon: 'https://file.hstatic.net/1000366086/file/policies_icon_2__1_.png',
    title: 'Ưu đãi hấp dẫn',
    description: 'Nhiều khuyến mãi',
  },
  {
    icon: 'https://file.hstatic.net/1000366086/file/policies_icon_3__1_.png',
    title: '100% chính hãng',
    description: 'Bảo đảm chất lượng',
  },
  {
    icon: 'https://file.hstatic.net/1000366086/file/policies_icon_4__1_.png',
    title: 'Hotline: 0971443180',
    description: 'Gọi ngay để mua hàng nhanh hơn',
  },
];

const FeatureList = () => {
  return (
    <div className="flex justify-around mb-5 p-5">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-3">
          <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
          <div>
            <div className="font-semibold">{feature.title}</div>
            <div className="text-gray-500">{feature.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
