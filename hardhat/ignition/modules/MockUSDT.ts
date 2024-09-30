
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const MockUSDTModule = buildModule("MockUSDTModule", (m) => {
  const OwnerAddress = "0x8F4F05d64D6d670899a7EA9427900Aa98AC6b0E8";

  const mockUSDT = m.contract("MockUSDT", [OwnerAddress]);

  return { mockUSDT };
});

export default MockUSDTModule;

