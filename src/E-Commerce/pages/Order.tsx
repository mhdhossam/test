import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import "./Order.css";


const fetchOrders = async () => {
  try {
    const response = await fetch(
      "https://daleel-back.zeeploy.xyz/api/orders/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching orders:", errorData);
      // toast.error(errorData.error || "Failed to fetch orders.");
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching orders:", error);
    toast.error("An unexpected error occurred.");
    return [];
  }
};

const Orders = () => {
  const API_BASE_URL2 = "https://daleel-back.zeeploy.xyz";
  const [orders, setOrders] = useState<Order[]>([]);
  const [checkoutDetails, setCheckoutDetails] = useState<CheckoutDetail[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(() => {
    const loadOrders = async () => {
      const fetchedOrders = await fetchOrders();
      setOrders(fetchedOrders);
    };

    loadOrders();
  }, []);

  interface Order {
    id: number;
    orderstat: string;
    total_price: number;
    order_items: OrderItem[];
  }

  interface OrderItem {
    id: number;
    product_name: string;
    quantity: number;
    product_price: number;
    total_price: number;
    product_image: string;
  }

  interface CheckoutDetail {
    id: number;
    total_price: number;
    payment_status: string;
    payment_method: string;
    shipping_address: string;
    order: number;
  }

  const fetchCheckoutDetails = async (orderId: number): Promise<void> => {
    try {
      setLoadingDetails(true);
      const response = await fetch(
        `https://daleel-back.zeeploy.xyz/api/checkout/retrieve/${orderId}/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error fetching checkout details:", errorData);
        toast.error(errorData.error || "Failed to fetch checkout details.");
        setLoadingDetails(false);
        return;
      }

      const data: CheckoutDetail[] = await response.json();
      const filteredData = data.filter((detail) => detail.order === orderId);

      setCheckoutDetails(filteredData);
      setShowModal(true);
      setLoadingDetails(false);
    } catch (error) {
      console.error("Error fetching checkout details:", error);
      toast.error("An unexpected error occurred.");
      setLoadingDetails(false);
    }
  };

  return React.createElement(
    "div",
    { className: "orders-container" },
    React.createElement("h2", null, "Your Orders"),
    orders.length === 0
      ? React.createElement("p", null, "Loading orders...")
      : orders.map((order, orderIndex) =>
          React.createElement(
            "div",
            { key: order.id, className: "order-card" },
            React.createElement("h3", null, `Order ${orderIndex + 1}:`),
            React.createElement(
              "p",
              { className: "detail-title" },
              "Order ID: ",
              React.createElement(
                "span",
                { className: "order-data-text" },
                order.id
              )
            ),
            React.createElement(
              "p",
              { className: "detail-title" },
              "Status: ",
              React.createElement(
                "span",
                { className: "order-data-text" },
                order.orderstat.toLowerCase()
              )
            ),
            React.createElement(
              "p",
              { className: "detail-title" },
              "Total Price: ",
              React.createElement(
                "span",
                { className: "order-data-text" },
                `${order.total_price} EGP`
              )
            ),
            React.createElement("h3", null, "Order Items:"),
            React.createElement(
              "ul",
              null,
              order.order_items?.length > 0
                ? order.order_items.map((item, itemIndex) =>
                    React.createElement(
                      "li",
                      { key: item.id, className: "orderproduct-item" },
                      React.createElement(
                        "div",
                        { className: "orderproduct-details" },
                        React.createElement(
                          "div",
                          { className: "detail-item" },
                          React.createElement(
                            "p",
                            { className: "detail-title" },
                            "Item:"
                          ),
                          React.createElement(
                            "p",
                            { className: "detail-value" },
                            itemIndex + 1
                          )
                        ),
                        React.createElement(
                          "div",
                          { className: "detail-item" },
                          React.createElement(
                            "p",
                            { className: "detail-title" },
                            "Product:"
                          ),
                          React.createElement(
                            "p",
                            { className: "detail-value" },
                            item.product_name
                          )
                        ),
                        React.createElement(
                          "div",
                          { className: "detail-item" },
                          React.createElement(
                            "p",
                            { className: "detail-title" },
                            "Quantity:"
                          ),
                          React.createElement(
                            "p",
                            { className: "detail-value" },
                            item.quantity
                          )
                        ),
                        React.createElement(
                          "div",
                          { className: "detail-item" },
                          React.createElement(
                            "p",
                            { className: "detail-title" },
                            "Price:"
                          ),
                          React.createElement(
                            "p",
                            { className: "detail-value" },
                            `${item.product_price} EGP`
                          )
                        ),
                        React.createElement(
                          "div",
                          { className: "detail-item" },
                          React.createElement(
                            "p",
                            { className: "detail-title" },
                            "Total:"
                          ),
                          React.createElement(
                            "p",
                            { className: "detail-value" },
                            `${item.total_price} EGP`
                          )
                        )
                      ),
                      React.createElement("img", {
                        
                        src: `${API_BASE_URL2}${item.product_image}`,
                        alt: item.product_name || "Product Image",
                        className: "orderproduct-img",
                        crossOrigin: "anonymous"
                      })
                    )
                  )
                : React.createElement(
                    "p",
                    { className: "no-orders-message" },
                    "No items found for this order."
                  )
            ),
            React.createElement(
              "button",
              {
                onClick: () => fetchCheckoutDetails(order.id),
                className: "view-details-btn",
                disabled: loadingDetails,
              },
              loadingDetails ? "Loading..." : "View Checkout Details"
            )
          )
        ),
    showModal &&
      checkoutDetails.length > 0 &&
      React.createElement(
        "div",
        { className: "modal-overlay", style: { pointerEvents: "none" } },
        React.createElement(
          "div",
          { className: "modal-content" },
          React.createElement("h1", null, "Checkout Details"),
          checkoutDetails.map((detail) =>
            React.createElement(
              "div",
              { key: detail.id, className: "checkout-detail" },
              React.createElement(
                "p",
                { className: "modal-details" },
                React.createElement(
                  "span",
                  { className: "label" },
                  "Total Price:"
                ),
                " ",
                React.createElement(
                  "span",
                  { className: "value" },
                  `${detail.total_price} EGP`
                )
              ),
              React.createElement(
                "p",
                { className: "modal-details" },
                React.createElement(
                  "span",
                  { className: "label" },
                  "Payment Status:"
                ),
                " ",
                React.createElement(
                  "span",
                  { className: "value" },
                  detail.payment_status
                )
              ),
              React.createElement(
                "p",
                { className: "modal-details" },
                React.createElement(
                  "span",
                  { className: "label" },
                  "Payment Method:"
                ),
                " ",
                React.createElement(
                  "span",
                  { className: "value" },
                  detail.payment_method
                )
              ),
              React.createElement(
                "p",
                { className: "modal-details" },
                React.createElement(
                  "span",
                  { className: "label" },
                  "Shipping Address:"
                ),
                " ",
                React.createElement(
                  "span",
                  { className: "value" },
                  detail.shipping_address
                )
              )
            )
          ),
          React.createElement(
            "button",
            {
              className: "close-modal-btn",
              onClick: () => setShowModal(false),
              style: { pointerEvents: "auto" },
            },
            "Close"
          )
        )
      )
  );
};

export default Orders;
