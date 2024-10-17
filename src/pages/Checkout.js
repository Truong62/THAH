import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { formatCurrency } from "../utils/formatCurrency";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const SlideTransition = (props) => {
    return <Slide {...props} direction="down" />;
};

const CheckoutPage = () => {
    const cartItems = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        detailAddress: "",
        ward: "",
    });

    const [validatedFields, setValidatedFields] = useState({});
    const [snackbarQueue, setSnackbarQueue] = useState([]);
    const [currentSnackbar, setCurrentSnackbar] = useState(null);

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate("/cart");
        }
    }, [cartItems, navigate]);

    useEffect(() => {
        axios
            .get("https://vapi.vnappmob.com/api/province/")
            .then((response) => setProvinces(response.data.results))
            .catch((error) => console.error("Error fetching provinces:", error));
    }, []);

    const handleProvinceChange = (e) => {
        const provinceId = e.target.value;
        const province = provinces.find((p) => p.province_id === provinceId);
        setSelectedProvince(province);

        axios
            .get(`https://vapi.vnappmob.com/api/province/district/${provinceId}`)
            .then((response) => {
                setDistricts(response.data.results);
                setWards([]);
                setSelectedDistrict(null);
                setSelectedWard(null);
            })
            .catch((error) => console.error("Error fetching districts:", error));
    };

    const handleDistrictChange = (e) => {
        const districtId = e.target.value;
        const district = districts.find((d) => d.district_id === districtId);
        setSelectedDistrict(district);

        axios
            .get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
            .then((response) => {
                setWards(response.data.results);
                setSelectedWard(null);
            })
            .catch((error) => console.error("Error fetching wards:", error));
    };

    const handleWardChange = (e) => {
        const wardId = e.target.value;
        const ward = wards.find((w) => w.ward_id === wardId);
        setSelectedWard(ward);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setValidatedFields((prev) => ({ ...prev, [name]: true }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.fullName && !validatedFields.fullName) {
            errors.fullName = "Full name is required";
        }
        if (!formData.email && !validatedFields.email) {
            errors.email = "Email is required";
        }
        if (!formData.phoneNumber && !validatedFields.phoneNumber) {
            errors.phoneNumber = "Phone number is required";
        }
        if (!formData.detailAddress && !validatedFields.detailAddress) {
            errors.detailAddress = "Address is required";
        }
        if (!selectedProvince && !validatedFields.province) {
            errors.province = "Province is required";
        }
        if (!selectedDistrict && !validatedFields.district) {
            errors.district = "District is required";
        }
        if (!selectedWard && !validatedFields.ward) {
            errors.ward = "Ward is required";
        }
        return errors;
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            console.log("Order Information:", {
                ...formData,
                province: selectedProvince ? selectedProvince.province_name : "",
                district: selectedDistrict ? selectedDistrict.district_name : "",
                ward: selectedWard ? selectedWard.ward_name : "",
                cartItems,
            });
            setSnackbarQueue([
                { message: "Order placed successfully!", type: "success" },
            ]);
        } else {
            const errorMessages = Object.entries(errors).map(([field, error]) => ({
                message: error,
                type: "error",
            }));
            setSnackbarQueue(errorMessages);
        }
    };

    useEffect(() => {
        if (!currentSnackbar && snackbarQueue.length > 0) {
            setCurrentSnackbar(snackbarQueue[0]);
            setSnackbarQueue((prevQueue) => prevQueue.slice(1));
        }
    }, [currentSnackbar, snackbarQueue]);

    const handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setCurrentSnackbar(null);
    };

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
                        <form
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            onSubmit={handleCheckout}
                        >
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                className="w-full p-2 border rounded col-span-1 md:col-span-2"
                                value={formData.fullName}
                                onChange={handleInputChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full p-2 border rounded"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                className="w-full p-2 border rounded"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                            />
                            <textarea
                                name="detailAddress"
                                placeholder="Detail Address"
                                className="w-full p-2 border rounded col-span-1 md:col-span-2"
                                value={formData.detailAddress}
                                onChange={handleInputChange}
                            ></textarea>
                            <select
                                className="w-full p-2 border rounded"
                                onChange={handleProvinceChange}
                                value={selectedProvince ? selectedProvince.province_id : ""}
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
                            <select
                                className="w-full p-2 border rounded"
                                onChange={handleDistrictChange}
                                value={selectedDistrict ? selectedDistrict.district_id : ""}
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
                            <select
                                className="w-full p-2 border rounded col-span-1 md:col-span-2"
                                name="ward"
                                onChange={handleWardChange}
                                value={selectedWard ? selectedWard.ward_id : ""}
                            >
                                <option value="">Select Ward</option>
                                {wards.map((ward) => (
                                    <option key={ward.ward_id} value={ward.ward_id}>
                                        {ward.ward_name}
                                    </option>
                                ))}
                            </select>
                            <button
                                type="submit"
                                className="w-full py-2 bg-black text-white font-bold rounded mb-2 hover:bg-gray-800 col-span-1 md:col-span-2"
                            >
                                Checkout
                            </button>
                        </form>
                    </div>
                </div>
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        right: 0,
                        margin: 16,
                        zIndex: 1500,
                    }}
                >
                    {currentSnackbar && (
                        <Snackbar
                            open={true}
                            autoHideDuration={3000}
                            onClose={handleSnackbarClose}
                            TransitionComponent={SlideTransition}
                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                            ContentProps={{
                                style: {
                                    backgroundColor:
                                        currentSnackbar.type === "success" ? "#33CC33" : "#FFCC33",
                                    marginBottom: 8,
                                },
                            }}
                            message={
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    {currentSnackbar.type === "error" && (
                                        <WarningAmberIcon style={{ marginRight: 8 }} />
                                    )}
                                    {currentSnackbar.message}
                                    <IconButton
                                        size="small"
                                        aria-label="close"
                                        color="inherit"
                                        onClick={handleSnackbarClose}
                                        style={{
                                            position: "absolute",
                                            right: 0,
                                            top: 0,
                                            color: "white",
                                        }}
                                    >
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </span>
                            }
                        />
                    )}
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default CheckoutPage;
