import PropTypes from 'prop-types';

/**
 *
 * @param nameProduct
 * @param description
 * @param price
 * @param brand
 * @param nameTag
 * @param imageUrl
 * @param onClick
 * @returns {Element}
 * @constructor
 */
const CardProduct = ({
  nameProduct,
  description,
  price,
  brand,
  nameTag = [],
  imageUrl,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="h-full bg-white rounded-lg p-3 border-gray-200 border ease-in-out flex flex-col justify-between">
        <div
          className="overflow-hidden rounded-t-lg"
          style={{ aspectRatio: '1 / 1' }}
        >
          <img
            src={imageUrl}
            alt={nameProduct}
            className="w-full h-auto object-cover transition-all duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
        <span className="font-semibold text-gray-500 mt-2">{brand}</span>
        <h4 className="text-xl font-bold mb-2">{nameProduct}</h4>
        <div className="flex items-center gap-1.25 text-sm">
          {Array.isArray(nameTag) ? (
            nameTag.map((item, index) => (
              <p key={index} className="px-2 rounded-xl bg-[#A8DCE7] mr-2">
                {item}
              </p>
            ))
          ) : (
            <p className="px-2 rounded-xl bg-[#A8DCE7] mr-2">{nameTag}</p>
          )}
        </div>
        <div className="mt-2 max-h-[50px] min-h-[50px]">{description}</div>
        <div className="grid justify-end mt-3 ">
          <p className="text-[#101422] text-lg font-bold px-1 py-2 border-2 border-[#A8DCE7] rounded-lg">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;

CardProduct.propTypes = {
  nameProduct: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number | PropTypes.string,
  brand: PropTypes.string,
  nameTag: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
