import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployXnova: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("XNOVA", {
    from: deployer,
    log: true,

    autoMine: true,
  });
};

export default deployXnova;

deployXnova.tags = ["xnova"];
