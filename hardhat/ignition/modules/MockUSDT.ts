// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const MockUSDTModule = buildModule("MockUSDTModule", (m) => {
  const OwnerAddress = "0x8F4F05d64D6d670899a7EA9427900Aa98AC6b0E8";

  const mockUSDT = m.contract("MockUSDT", [OwnerAddress]);

  return { mockUSDT };
});

export default MockUSDTModule;

// MockUSDTModule#MockUSDT - 0x2913ba4D9d925BC05006F529eEcb96D0BAd9C6D3

// https://sepolia.scrollscan.com/address/0x2913ba4D9d925BC05006F529eEcb96D0BAd9C6D3#code
