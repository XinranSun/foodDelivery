import React from "react";
import "./Orders.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "../../assets/assets";
const Orders = ({ url }) => {
  const [orders, setOrders] = React.useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("eror");
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>order page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + "x" + item.quantity;
                  } else {
                    return item.name + "x" + item.quantity + ",";
                  }
                })}
              </p>
              <p className="order-item-name">
                {JSON.parse(order.address).firstName + " " + JSON.parse(order.address).lastName}
              </p>
              <div className="order-item-address">
                <p>{JSON.parse(order.address).street + ","}</p>
                <p>
                  {JSON.parse(order.address).city +
                    "," +
                    JSON.parse(order.address).state +
                    "," +
                    JSON.parse(order.address).country +
                    "," +
                    JSON.parse(order.address).zipcode}
                </p>
              </div>

              <p className="order-item-phone">{JSON.parse(order.address).phone}</p>
            </div>
            <p>Items:{order.items.length}</p>
            <p>${order.amount}</p>
            <select>
              <option value="Food Processing">Food Processing</option>
              <option value="out for delivery">out for delivery</option>
              <option value="dispatched">dispatched</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
