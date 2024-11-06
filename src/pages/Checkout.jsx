import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

// import { clearCart } from '../redux/cart/cartSlice'; // Import action clearCart
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { formatCurrency } from '../utils/formatCurrency';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select'; // Import Select từ MUI
import MenuItem from '@mui/material/MenuItem'; // Import MenuItem từ MUI

// eslint-disable-next-line react/display-name
const CheckoutPage = React.memo(() => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  // const dispatch = useDispatch();
  // const [snackbarQueue, setSnackbarQueue] = useState([]);

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
        phoneNumber: Yup.string()
          .required('Phone number is required')
          .matches(/^[0-9]+$/, 'Phone number must be numeric'),
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

      // setSnackbarQueue((prevQueue) => [
      //   ...prevQueue,
      //   { message: 'CHECKOUT SUCCESSFUL! CART CLEARED.', type: 'success' },
      // ]);

      // setTimeout(() => {

      //   dispatch(clearCart());
      // }, 3000);
    },
    [cartItems] //thêm dispatch sau
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
              {({ setFieldValue, values, errors, touched }) => (
                <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1 md:col-span-2">
                    <TextField
                      fullWidth
                      id="fullName"
                      name="fullName"
                      label="Full Name"
                      value={values.fullName}
                      onChange={(e) =>
                        setFieldValue('fullName', e.target.value)
                      }
                      error={touched.fullName && Boolean(errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                    />
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      value={values.email}
                      onChange={(e) => setFieldValue('email', e.target.value)}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Phone Number"
                      value={values.phoneNumber}
                      onChange={(e) =>
                        setFieldValue('phoneNumber', e.target.value)
                      }
                      error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <TextField
                      fullWidth
                      id="detailAddress"
                      name="detailAddress"
                      label="Detail Address"
                      multiline
                      rows={4}
                      value={values.detailAddress}
                      onChange={(e) =>
                        setFieldValue('detailAddress', e.target.value)
                      }
                      error={
                        touched.detailAddress && Boolean(errors.detailAddress)
                      }
                      helperText={touched.detailAddress && errors.detailAddress}
                    />
                  </div>
                  <div>
                    <Select
                      name="selectedProvince"
                      value={
                        provinces.find(
                          (p) => p.province_name === values.selectedProvince
                        )?.province_id || ''
                      }
                      onChange={(e) => handleProvinceChange(e, setFieldValue)}
                      displayEmpty
                      fullWidth
                      error={
                        touched.selectedProvince &&
                        Boolean(errors.selectedProvince)
                      }
                    >
                      <MenuItem value="">
                        <em>Select Province</em>
                      </MenuItem>
                      {provinces.map((province) => (
                        <MenuItem
                          key={province.province_id}
                          value={province.province_id}
                        >
                          {province.province_name}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.selectedProvince && touched.selectedProvince && (
                      <div className="text-red-500">
                        {errors.selectedProvince}
                      </div>
                    )}
                  </div>
                  <div>
                    <Select
                      name="selectedDistrict"
                      value={
                        districts.find(
                          (d) => d.district_name === values.selectedDistrict
                        )?.district_id || ''
                      }
                      onChange={(e) => handleDistrictChange(e, setFieldValue)}
                      displayEmpty
                      fullWidth
                      error={
                        touched.selectedDistrict &&
                        Boolean(errors.selectedDistrict)
                      }
                    >
                      <MenuItem value="">
                        <em>Select District</em>
                      </MenuItem>
                      {districts.map((district) => (
                        <MenuItem
                          key={district.district_id}
                          value={district.district_id}
                        >
                          {district.district_name}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.selectedDistrict && touched.selectedDistrict && (
                      <div className="text-red-500">
                        {errors.selectedDistrict}
                      </div>
                    )}
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <Select
                      name="selectedWard"
                      value={
                        wards.find((w) => w.ward_name === values.selectedWard)
                          ?.ward_id || ''
                      }
                      onChange={(e) => handleWardChange(e, setFieldValue)}
                      displayEmpty
                      fullWidth
                      error={
                        touched.selectedWard && Boolean(errors.selectedWard)
                      }
                    >
                      <MenuItem value="">
                        <em>Select Ward</em>
                      </MenuItem>
                      {wards.map((ward) => (
                        <MenuItem key={ward.ward_id} value={ward.ward_id}>
                          {ward.ward_name}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.selectedWard && touched.selectedWard && (
                      <div className="text-red-500">{errors.selectedWard}</div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-black text-white font-bold rounded-full hover:bg-gray-800 col-span-1 md:col-span-2"
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
