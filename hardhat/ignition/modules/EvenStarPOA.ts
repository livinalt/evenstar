// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const EvenStarPOAModule = buildModule("EvenStarPOAModule", (m) => {

  const OwnerAddress = "0x8F4F05d64D6d670899a7EA9427900Aa98AC6b0E8";

  const evenStarPOA = m.contract("EvenStarPOA", [OwnerAddress]);

  return { evenStarPOA };
});

export default EvenStarPOAModule;

// EvenStarPOAModule#EvenStarPOA - 0x223b2DdbF57493ED5B0bC5FeB8d6660fbB698f0C

// https://sepolia.scrollscan.com/address/0x223b2DdbF57493ED5B0bC5FeB8d6660fbB698f0C#code