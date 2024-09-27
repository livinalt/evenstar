// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const EvenStarModule = buildModule("EvenStarModule", (m) => {
  const evenStarPOA = "";
  const paymentToken = "";

  const evenStar = m.contract("EvenStar", [evenStarPOA, paymentToken]);

  return { evenStar };
});

export default EvenStarModule;
