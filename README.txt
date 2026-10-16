HOME DELIGHTS - PASTRY WEBSITE
================================

FILES
-----
index.html
style.css
script.js
images/

HOW TO USE
----------
1. Open the folder in VS Code.
2. Open index.html with Live Server, or double-click index.html.
3. Replace the images in the "images" folder with your own photos.
4. Keep the same filenames, OR edit the image filename in script.js.
5. Open script.js and change:
   const MESSENGER_USERNAME = "YOUR_PAGE_USERNAME";
   to your Facebook Page username.

ORDER FLOW
----------
Customer:
Home -> Menu -> Add to Cart -> Continue to Order
-> chooses order date -> adds notes -> Send Order via Messenger.

The Messenger message includes:
- Product
- Quantity
- Date
- Notes

IMPORTANT
---------
The current products have price: 0 because no prices were provided.
The website therefore displays "Message for price".
If you have prices, edit the "price" values in script.js.

IMAGE FILES
-----------
The included image files are simple placeholder images so the website can run immediately.
Replace them with your own pastry photos whenever you are ready.

FACEBOOK/MESSENGER
------------------
This version opens a Messenger conversation using your Facebook Page username.
It does not automatically send the message without the customer pressing send,
because normal browser JavaScript cannot silently send messages through Messenger.
