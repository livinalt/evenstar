
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const EvenStarPOAModule = buildModule("EvenStarPOAModule", (m) => {

  const OwnerAddress = "0x8F4F05d64D6d670899a7EA9427900Aa98AC6b0E8";

  const evenStarPOA = m.contract("EvenStarPOA", [OwnerAddress]);

  return { evenStarPOA };
});

export default EvenStarPOAModule;

