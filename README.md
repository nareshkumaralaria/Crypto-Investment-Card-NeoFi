# Crypto Investment Card
This project is a small React application that simulates a crypto investment card with a selection of coins and an estimated number of coins you could get for a given investment amount.


## How to run this project locally


### Installation

- Clone the repository to your local machine:
```bash
git clone https://github.com/nareshkumaralaria/Crypto-Investment-Card-NeoFi.git

```

- Install the dependencies:
```bash
cd Crypto-Investment-Card-NeoFi
npm install

```
### Usage
- Start the development server:
```bash
npm run dev

```
- Open your web browser and navigate to http://127.0.0.1:5173/ to see the application.


## Code Explanation
The project consists of three components: `Card`, `Popup` and `Navbar`.

### Card Component
The `Card` component is responsible for rendering the main investment card. It has the following features:

- Show/hide coin selection popup.
- Keep track of currently selected coin and its price.
- Accept user input amount and calculate the estimated number of coins to be received.
- Buy button to initiate the investment process. (currently this button is inactive)

### Popup Component

The `Popup` component is responsible for rendering the coin selection popup. It has the following features:

- Show/hide the popup.
- Search box to filter the coins.
- List of coins to select from.

## Credits
- The WebSocket connection is established with [Binance WebSocket API](https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams).

# Authors

- [@nareshkumaralaria](https://github.com/nareshkumaralaria) (Naresh Kumar)
# Live Link

For live preview you can visit this link
https://neofi-naresh.netlify.app/

# Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

