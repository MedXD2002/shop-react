import React, { useEffect, useState } from "react";
import '../styles/Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [quantities, setQuantities] = useState({}); // State for quantities

    useEffect(() => {
        // Fetch cart items and quantities from local storage
        const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedItems);

        const storedQuantities = JSON.parse(localStorage.getItem("quantities")) || {};
        setQuantities(storedQuantities);
    }, []);

    // Function to handle item deletion
    const handleDeleteItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        // Update local storage
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        // Remove quantity information for the deleted item
        const updatedQuantities = { ...quantities };
        delete updatedQuantities[index];
        setQuantities(updatedQuantities);
        localStorage.setItem("quantities", JSON.stringify(updatedQuantities));
    };

    // Function to handle quantity change
    const handleQuantityChange = (index, newQuantity) => {
        const updatedQuantities = { ...quantities, [index]: newQuantity };
        setQuantities(updatedQuantities);

        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = newQuantity;
        setCartItems(updatedCartItems);

        // Update local storage
        localStorage.setItem("quantities", JSON.stringify(updatedQuantities));
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };

    return (
        <section className="h-100">
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">

                        <div className="text-center mb-4">
                            <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                        </div>

                        {cartItems.map((item, index) => (
                            <div className="card rounded-3 mb-4" key={index}>

                                <div className="card-body p-4">
                                    <div className="row gx-3 justify-content-between align-items-center">
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <img
                                                src={require(`./pages/pics/${item.image}`)}
                                                className="img-fluid rounded-3"
                                                alt="Product"
                                            />
                                        </div>
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <p id='Cname' className="lead fw-normal mb-2">{item.title}</p>
                                        </div>
                                        <div className="qty col-md-2 col-lg-2 col-xl-2">
                                            <div className='d-flex'>
                                                <span
                                                    className="minus bg-secondary"
                                                    onClick={() => handleQuantityChange(index, Math.max(1, item.quantity - 1))}
                                                >
                                                    -
                                                </span>
                                                <input
                                                    type="number"
                                                    className="count"
                                                    name="qty"
                                                    value={item.quantity || 1}
                                                    readOnly
                                                />
                                                <span
                                                    className="plus bg-secondary"
                                                    onClick={() => handleQuantityChange(index, (item.quantity || 1) + 1)}
                                                >
                                                    +
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <h5 id='Cprice' className="mb-0">${item.price * item.quantity}</h5>
                                        </div>
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <button
                                                id='Cbtn'
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => handleDeleteItem(index)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}

                        <div className='card'>
                            <h5 className='mt-1'>{`Total: $${calculateTotal(cartItems)}`}</h5>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <button type="button" className="btn btn-dark btn-block btn-lg">Proceed to Pay</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

// Function to calculate the total price of items
const calculateTotal = (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export default Cart;
