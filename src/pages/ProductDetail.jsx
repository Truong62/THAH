import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import ProductDetailsCard from '../components/ProductDetailsCard';
import SuggestProducts from '../components/suggestProducts';
import products from '../data.json';

/**
 *
 * @returns {Element}
 * @constructor
 */
const ProductDetail = () => {
  return (
    <div>
      <Header />
      <Layout>
        <BreadCrumb />
        <ProductDetailsCard />
        <div className="py-4 text-center">
          <h2 className="text-xl font-bold text-gray-800">
            Product Suggestions
          </h2>
          <div className="rounded-lg p-4">
            <SuggestProducts products={products} />
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default ProductDetail;
