const SafeMath = artifacts.require("./SafeMath.sol");
const EIP20 = artifacts.require('./CellBlocksToken.sol');

module.exports = (deployer) => {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, EIP20);
  deployer.deploy(EIP20);
};
