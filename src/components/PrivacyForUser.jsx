import React from 'react';

const policies = [
  {
    icon: (
      <img
        src="https://bizweb.dktcdn.net/thumb/icon/100/413/756/themes/837736/assets/privacy_1_image.png?1739987708879"
        alt="Chính hãng"
        className="w-10 h-10"
      />
    ),
    title: 'Chính hãng 100%',
    description: 'Giày nhập từ Adidas, Nike US, Converse, ...',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-700"
      >
        <g>
          <path d="M11.029 2.54a2 2 0 0 1 1.942 0l7.515 4.174a1 1 0 0 1 .514.874v8.235a2 2 0 0 1-1.029 1.748l-7 3.89a2 2 0 0 1-1.942 0l-7-3.89A2 2 0 0 1 3 15.824V7.588a1 1 0 0 1 .514-.874L11.03 2.54Z" />
          <path d="m3 7l9 5m0 0l9-5m-9 5v9.5" />
          <path d="m7.5 9.5l9-5M6 12.328L9 14" />
        </g>
      </svg>
    ),
    title: 'Miễn phí vận chuyển',
    description: 'Áp dụng cho đơn hàng trên 1 triệu',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 2048 2048"
      >
        <path
          fill="currentColor"
          d="m1344 2l704 352v785l-128-64V497l-512 256v258l-128 64V753L768 497v227l-128-64V354L1344 2zm0 640l177-89l-463-265l-211 106l497 248zm315-157l182-91l-497-249l-149 75l464 265zm-507 654l-128 64v-1l-384 192v455l384-193v144l-448 224L0 1735v-676l576-288l576 288v80zm-640 710v-455l-384-192v454l384 193zm64-566l369-184l-369-185l-369 185l369 184zm576-1l448-224l448 224v527l-448 224l-448-224v-527zm384 576v-305l-256-128v305l256 128zm384-128v-305l-256 128v305l256-128zm-320-288l241-121l-241-120l-241 120l241 121z"
        />
      </svg>
    ),
    title: 'Kho giày cực khủng',
    description: 'Đa dạng mẫu mã, màu sắc, dễ dàng chọn lựa',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 14 14"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1.536 2.582c0-.045.036-.082.081-.082H7.44c.046 0 .082.037.082.082v9.149a.082.082 0 0 1-.082.081H1.617a.082.082 0 0 1-.081-.081V2.58ZM1.617 1C.744 1 .036 1.708.036 2.582v9.149c0 .873.708 1.581 1.581 1.581H7.44c.874 0 1.582-.708 1.582-1.581V2.58A1.583 1.583 0 0 0 7.44 1zm2.495 8.733a.75.75 0 1 0 0 1.5h.832a.75.75 0 0 0 0-1.5zm7.638-.223c1.134-1.292 1.134-3.416 0-4.707a.625.625 0 0 1 .94-.825c1.547 1.764 1.547 4.593 0 6.356a.625.625 0 1 1-.94-.824M9.864 5.75c.249.362.392.868.392 1.405s-.143 1.044-.392 1.405a.625.625 0 0 0 1.028.71c.421-.61.614-1.378.614-2.115c0-.737-.193-1.504-.614-2.115a.625.625 0 0 0-1.028.71"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: 'Đặt hàng online: 0971443180',
    description: 'Tư vấn chuyên nghiệp, chuẩn size',
  },
];

const PolicyComponent = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md p-4">
      {policies.map((policy, index) => (
        <div
          key={index}
          className="flex items-center p-3 border-b last:border-0"
        >
          <div className="w-10 h-10 mr-3 flex-shrink-0">{policy.icon}</div>
          <div>
            <h3 className="font-semibold text-gray-800">{policy.title}</h3>
            <p className="text-gray-500 text-sm">{policy.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolicyComponent;
