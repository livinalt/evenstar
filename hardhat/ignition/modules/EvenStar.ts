// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const EvenStarModule = buildModule("EvenStarModule", (m) => {

  const evenStarPOA = "0x223b2DdbF57493ED5B0bC5FeB8d6660fbB698f0C";
  const paymentToken = "0x2913ba4D9d925BC05006F529eEcb96D0BAd9C6D3";

  const evenStar = m.contract("EvenStar", [evenStarPOA, paymentToken]);

  return { evenStar };
});

export default EvenStarModule;


// MockUSDTModule#MockUSDT - 0x2913ba4D9d925BC05006F529eEcb96D0BAd9C6D3

// EvenStarPOAModule#EvenStarPOA - 0x223b2DdbF57493ED5B0bC5FeB8d6660fbB698f0C

// EvenStarModule#EvenStar - 0xb2F2A39fB5e334f78C3Ea76E0A53e5C3c8C12542

// https://sepolia.scrollscan.com/address/0xb2F2A39fB5e334f78C3Ea76E0A53e5C3c8C12542#code