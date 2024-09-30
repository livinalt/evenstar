# EvenStar Event App

Welcome to the **EvenStar Event App**, the ultimate platform designed to revolutionize your event experience! Whether you're organizing an exclusive gathering or participating in a community event, EvenStar is here to streamline the process, making it seamless, engaging, and rewarding.

## Overview

EvenStar leverages blockchain technology to provide a secure, transparent, and user-friendly platform for event management. With smart contracts ensuring trust and reliability, attendees can enjoy a hassle-free experience while organizers can efficiently manage their events.

## Features

- **Secure Ticketing**: Utilizing blockchain for transparent ticket issuance and ownership. Each ticket is issued as a unique digital asset, ensuring that ownership is verifiable and immutable. This drastically reduces the risk of fraud and scalping, giving attendees peace of mind.
  
- **Event Minting**: The app allows for seamless minting of tickets, enabling organizers to set parameters like pricing and quantity. This feature simplifies the process of launching an event while maintaining complete control over ticket distribution.
  
- **Token Utility**: Transactions within the app are facilitated using Mock USDT, a test stablecoin that ensures smooth and efficient payments. By utilizing a cryptocurrency for transactions, users can enjoy low fees and instant payments, making the experience faster and more convenient for both organizers and attendees.
  
- **Ownership and Control**: Event organizers retain full ownership and control over their events. Only they can modify event details, such as dates, locations, and ticket prices, ensuring that any changes are authentic and trusted.


### Prerequisites

- Node.js and npm installed on your machine.
- Metamask

### Installation

Clone the repository:

```bash
git clone https://github.com/livinalt/evenStar.git
cd evenStar
```

Install dependencies:

```bash
npm install
```

### Configuration

Set up your environment variables by creating a `.env` file in the root directory with the following content:

```
ALCHEMY_API_KEY=your_alchemy_api_key
WALLET_PRIVATE_KEY=your_wallet_private_key
ETHERSCAN_API_KEY=your_etherscan_api_key
```

### Deploying to Scroll Sepolia
#### Contract Addresses & Verification

The contracts were deployed on Scroll Sepolia Testnet using the with Alchemy as the RPC provider. Here are the deployed contract addresses along with their verification links on the Scroll Sepolia test network:

1. **MockUSDT**  
   Address: `0xa2E7552a5be79F69F46b39f901ad00D649F9de65`  
   [View Contract](https://sepolia.scrollscan.com/address/0xa2E7552a5be79F69F46b39f901ad00D649F9de65#code)

2. **EvenStarPOA**  
   Address: `0xF2fF218f44Ee31aE1dFb22104582c6a1045F429F`  
   [View Contract](https://sepolia.scrollscan.com/address/0xF2fF218f44Ee31aE1dFb22104582c6a1045F429F#code)

3. **EvenStar**  
   Address: `0x91df53EbBD20bcd0A13Bb2033f1A8418b0884e6f`  
   [View Contract](https://sepolia.scrollscan.com/address/0x91df53EbBD20bcd0A13Bb2033f1A8418b0884e6f#code)



### Hardhat Configuration

The EvenStar Event App utilizes **Hardhat** as our development framework. The configuration includes settings for the Scroll Sepolia network.

**Key Features of the Hardhat Configuration:**
- **Network Configuration**: Connects to both Sepolia and Scroll Sepolia networks for testing and deployment.
- **Environment Variables**: Utilizes `.env` file for sensitive information such as API keys and wallet private keys, enhancing security.
- **Etherscan Verification**: Automatically verifies contracts on Etherscan for easy tracking and transparency.


```javascript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || "";
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io/" || "",
      accounts: WALLET_PRIVATE_KEY !== "" ? [WALLET_PRIVATE_KEY] : [],
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: WALLET_PRIVATE_KEY !== "" ? [WALLET_PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      scrollSepolia: ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: 'scrollSepolia',
        chainId: 534351,
        urls: {
          apiURL: 'https://api-sepolia.scrollscan.com/api',
          browserURL: 'https://sepolia.scrollscan.com/',
        },
      },
    ],
  },
};

export default config;
```

## Future Enhancements

- **Enhanced Analytics**: Provide insights for event organizers on attendance and engagement.
- **User Profiles**: Allow users to manage their event history and preferences.
- **In-app Wallet**: Implement a wallet feature to manage tokens directly within the app.
- **Mainnet Launch**: Deploying EvenStar on the Scroll Mainnet for real use.

## Contributing

If you'd like to contribute, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.
