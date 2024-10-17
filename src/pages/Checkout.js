import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { formatCurrency } from '../utils/formatCurrency';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CheckoutPage = React.memo(() => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);

  useEffect(() => {
    axios
      .get('https://vapi.vnappmob.com/api/province/')
      .then((response) => setProvinces(response.data.results))
      .catch((error) => console.error('Error fetching provinces:', error));
  }, []);

  const handleProvinceChange = useCallback(
    (e, setFieldValue) => {
      const provinceId = e.target.value;
      const province = provinces.find((p) => p.province_id === provinceId);
      setFieldValue('selectedProvince', province ? province.province_name : '');

      axios
        .get(`https://vapi.vnappmob.com/api/province/district/${provinceId}`)
        .then((response) => {
          setDistricts(response.data.results);
          setWards([]);
          setFieldValue('selectedDistrict', '');
          setFieldValue('selectedWard', '');
        })
        .catch((error) => console.error('Error fetching districts:', error));
    },
    [provinces]
  );

  const handleDistrictChange = useCallback(
    (e, setFieldValue) => {
      const districtId = e.target.value;
      const district = districts.find((d) => d.district_id === districtId);
      setFieldValue('selectedDistrict', district ? district.district_name : '');

      axios
        .get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
        .then((response) => {
          setWards(response.data.results);
          setFieldValue('selectedWard', '');
        })
        .catch((error) => console.error('Error fetching wards:', error));
    },
    [districts]
  );

  const handleWardChange = useCallback(
    (e, setFieldValue) => {
      const wardId = e.target.value;
      const ward = wards.find((w) => w.ward_id === wardId);
      setFieldValue('selectedWard', ward ? ward.ward_name : '');
    },
    [wards]
  );

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        fullName: Yup.string().required('Full name is required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Email is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        detailAddress: Yup.string().required('Address is required'),
        selectedProvince: Yup.string().required('Province is required'),
        selectedDistrict: Yup.string().required('District is required'),
        selectedWard: Yup.string().required('Ward is required'),
      }),
    []
  );

  const handleCheckout = useCallback(
    (values) => {
      console.log('Order Information:', {
        ...values,
        cartItems,
      });
      // Handle successful checkout logic here
    },
    [cartItems]
  );

  return (
    <React.Fragment>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4 -mt-2">
            <h2 className="text-2xl font-bold mb-4">Your Order</h2>
            <h2 className="text-2xl font-bold">Order Summary</h2>
            <div className="flex justify-between font-bold mb-4">
              <span>Total</span>
              <span className="text-red-500">
                {formatCurrency(
                  cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                )}
              </span>
            </div>
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.color}-${item.size}`}
                className="flex items-center mb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 mr-4"
                />
                <div>
                  <p>{item.name}</p>
                  <p>
                    Size: {item.size}, Qty: {item.quantity}, Color: {item.color}
                  </p>
                  <p>{formatCurrency(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <Formik
              initialValues={{
                fullName: '',
                email: '',
                phoneNumber: '',
                detailAddress: '',
                selectedProvince: '',
                selectedDistrict: '',
                selectedWard: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleCheckout}
            >
              {({ setFieldValue, values }) => (
                <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1 md:col-span-2">
                    <Field
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className="w-full p-2 border rounded"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full p-2 border rounded"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <Field
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="w-full p-2 border rounded"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <Field
                      as="textarea"
                      name="detailAddress"
                      placeholder="Detail Address"
                      className="w-full p-2 border rounded"
                    />
                    <ErrorMessage
                      name="detailAddress"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <select
                      name="selectedProvince"
                      className="w-full p-2 border rounded"
                      value={
                        provinces.find(
                          (p) => p.province_name === values.selectedProvince
                        )?.province_id || ''
                      }
                      onChange={(e) => handleProvinceChange(e, setFieldValue)}
                    >
                      <option value="">Select Province</option>
                      {provinces.map((province) => (
                        <option
                          key={province.province_id}
                          value={province.province_id}
                        >
                          {province.province_name}
                        </option>
                      ))}
                    </select>
                    <ErrorMessage
                      name="selectedProvince"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <select
                      name="selectedDistrict"
                      className="w-full p-2 border rounded"
                      value={
                        districts.find(
                          (d) => d.district_name === values.selectedDistrict
                        )?.district_id || ''
                      }
                      onChange={(e) => handleDistrictChange(e, setFieldValue)}
                    >
                      <option value="">Select District</option>
                      {districts.map((district) => (
                        <option
                          key={district.district_id}
                          value={district.district_id}
                        >
                          {district.district_name}
                        </option>
                      ))}
                    </select>
                    <ErrorMessage
                      name="selectedDistrict"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <select
                      name="selectedWard"
                      className="w-full p-2 border rounded"
                      value={
                        wards.find((w) => w.ward_name === values.selectedWard)
                          ?.ward_id || ''
                      }
                      onChange={(e) => handleWardChange(e, setFieldValue)}
                    >
                      <option value="">Select Ward</option>
                      {wards.map((ward) => (
                        <option key={ward.ward_id} value={ward.ward_id}>
                          {ward.ward_name}
                        </option>
                      ))}
                    </select>
                    <ErrorMessage
                      name="selectedWard"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-black text-white font-bold rounded mb-2 hover:bg-gray-800 col-span-1 md:col-span-2"
                  >
                    Checkout
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
});

export default CheckoutPage;
