const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Cart = require("../models/Cart");
const authenticateToken = require("../middleware/auth");
const twilio=require("twilio")

// Create Order after Checkout


const Sid="AC18239fd4403cae87316de6b2b2bc7877"
const Token = "ff8dc4423f018f889458b83991f85ad6"
const Phone="+19522300794"


const client = new twilio(
  Sid,
  Token

);




// router.post("/checkout", authenticateToken, async (req, res) => {
  
//   const response = await client.messages.create({
//     body:"Hello from the mern team",
//     from:Phone,
//     to:"+919265588226"
//   });
//   const { shippingAddress } = req.body; // Shipping address from client
//   const userId = req.user.userId; // Get user ID from the token




//   try {
//     // Get User's Cart
//     const cart = await Cart.findOne({ userId });
//     if (!cart || cart.items.length === 0) {
//       return res.status(400).json({ message: "Cart is empty" });
//     }

//     // Calculate Total Amount
//     let totalAmount = 0;
//     cart.items.forEach(item => {
//       if (item.productId && !isNaN(item.productId.price) && !isNaN(item.quantity)) {
//         totalAmount += item.productId.price * item.quantity;
//       } else {
//         console.error("Invalid item data", item);
//       }
//     });

//     if (isNaN(totalAmount)) {
//       return res.status(400).json({ message: "Invalid total amount calculation" });
//     }

//     // Create Order
//     const order = new Order({
//       userId, 
//       shippingAddress,
//       totalAmount,
//       items: cart.items, // Add items to the order
//       createdAt: new Date(),
//     });

//     await order.save();

//     // Clear Cart after Order
//     cart.items = [];
//     await cart.save();

//     res.status(200).json({ message: "Order placed successfully", order });
//   } catch (error) {
//     console.error("❌ Error during checkout:", error);
//     res.status(500).json({ error: error.message });
//   }
// }); 


router.post('/checkout', authenticateToken, async (req, res) => {
  const { shippingAddress } = req.body;
  const userId = req.user.userId;

  try {
    const response = await client.messages.create({
      body: 'Your Order Recived SuucessFully...Order in Process We Will Shortly deliver Your Product',
      from: Phone,
      to: '+919265588226'
    });

    // Log response to debug message sending
    console.log('Message sent:', response);

    const cart = await Cart.findOne({ userId });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    let totalAmount = 0;
    cart.items.forEach(item => {
      if (item.productId && !isNaN(item.productId.price) && !isNaN(item.quantity)) {
        totalAmount += item.productId.price * item.quantity;
      } else {
        console.error('Invalid item data', item);
      }
    });

    if (isNaN(totalAmount)) {
      return res.status(400).json({ message: 'Invalid total amount calculation' });
    }

    const order = new Order({
      userId,
      shippingAddress,
      totalAmount,
      items: cart.items,
      createdAt: new Date(),
    });

    await order.save();

    cart.items = [];
    await cart.save();

    res.status(200).json({ message: 'Order placed successfully', order });
  } catch (error) {
    console.error('❌ Error during checkout:', error);
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;



// const express = require("express");
// const router = express.Router();
// const Order = require("../models/Order");
// const Cart = require("../models/Cart");
// const authenticateToken = require("../middleware/auth");
// const twilio = require("twilio");

// // Twilio Credentials
// const Sid = "AC18239fd4403cae87316de6b2b2bc7877";
// const Token = "ff8dc4423f018f889458b83991f85ad6";
// const Phone = "+17627754145";

// const client = new twilio(Sid, Token);

// router.post('/checkout', authenticateToken, async (req, res) => {
//   const { shippingAddress } = req.body;
//   const userId = req.user.userId;

//   try {
//     // Send SMS Notification
//     const smsResponse = await client.messages.create({
//       body: 'Your order has been received successfully! We will deliver your product shortly.',
//       from: Phone,
//       to: '+919265588226' // Customer phone number
//     });
//     console.log('SMS sent:', smsResponse.sid);

//     // Send WhatsApp Notification
//     const whatsappResponse = await client.messages.create({
//       body: 'Hello! Your order has been placed successfully. Thank you for shopping with us!',
//       from: 'whatsapp:' + Phone,
//       to: 'whatsapp:+919265588226' // Customer WhatsApp number
//     });
//     console.log('WhatsApp message sent:', whatsappResponse.sid);

//     // Get User's Cart
//     const cart = await Cart.findOne({ userId });
//     if (!cart || cart.items.length === 0) {
//       return res.status(400).json({ message: 'Cart is empty' });
//     }

//     // Calculate Total Amount
//     let totalAmount = 0;
//     cart.items.forEach(item => {
//       if (item.productId && !isNaN(item.productId.price) && !isNaN(item.quantity)) {
//         totalAmount += item.productId.price * item.quantity;
//       }
//     });

//     if (isNaN(totalAmount)) {
//       return res.status(400).json({ message: 'Invalid total amount calculation' });
//     }

//     // Create Order
//     const order = new Order({
//       userId,
//       shippingAddress,
//       totalAmount,
//       items: cart.items,
//       createdAt: new Date(),
//     });

//     await order.save();

//     // Clear Cart after Order
//     cart.items = [];
//     await cart.save();

//     res.status(200).json({
//       message: 'Order placed successfully',
//       order,
//       smsStatus: smsResponse.status,
//       whatsappStatus: whatsappResponse.status
//     });
//   } catch (error) {
//     console.error('❌ Error during checkout:', error);
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
