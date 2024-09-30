
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const EvenStarModule = buildModule("EvenStarModule", (m) => {

  const evenStarPOA = "0xF2fF218f44Ee31aE1dFb22104582c6a1045F429F";
  const paymentToken = "0xa2E7552a5be79F69F46b39f901ad00D649F9de65";
  const owner = "0x8F4F05d64D6d670899a7EA9427900Aa98AC6b0E8";

  const evenStar = m.contract("EvenStar", [evenStarPOA, paymentToken, owner]);

  return { evenStar };
});

export default EvenStarModule;


