 const ConvertLib = artifacts.require("ConvertLib");
 const MetaCoin = artifacts.require("MetaCoin");
 const MetaCoin2 = artifacts.require("MetaCoin2");
 const DosOneFunc = artifacts.require("DosOneFunc");
 const Dynamic = artifacts.require("Dynamic");
 const HTDD_contract = artifacts.require("HTDD_contract");
 const HungryHoody = artifacts.require("HungryHoody");
 const Reentrance = artifacts.require("Reentrance");
 const Wallet = artifacts.require("Wallet");
 const Baz = artifacts.require("Baz");
 const FrogDAO = artifacts.require("FrogDAO");
 const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
 const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
 const MIMOToken = artifacts.require("MIMOToken");
 const BirdOracle = artifacts.require("BirdOracle");
 const PlasmaswapPair = artifacts.require("PlasmaswapPair");
 const EdenCoin = artifacts.require("EdenCoin");
 const Controller = artifacts.require("Controller");
 const BOXI = artifacts.require("BOXI");
 const Rootkit_finance = artifacts.require("Rootkit_finance");
 const Core_Fi_V3 = artifacts.require("Core_Fi_V3");

 module.exports = async function (deployer) {
     deployer.deploy(ConvertLib);
     deployer.link(ConvertLib, MetaCoin);
     deployer.deploy(MetaCoin);
     deployer.link(ConvertLib, MetaCoin2);
     deployer.deploy(MetaCoin2);

     deployer.deploy(DosOneFunc);
     deployer.deploy(Dynamic);
     deployer.deploy(HTDD_contract);
     deployer.deploy(HungryHoody);
     deployer.deploy(Reentrance);
     deployer.deploy(Wallet);
     deployer.deploy(Baz);
     deployer.deploy(FrogDAO);
     deployer.deploy(CourtFarming_HTStake);
     deployer.deploy(CourtFarming_RoomLPStake);
     deployer.deploy(MIMOToken);
     deployer.deploy(BirdOracle);
     deployer.deploy(PlasmaswapPair);
     deployer.deploy(EdenCoin);

    const accounts = await web3.eth.getAccounts();
    deployer.deploy(Controller, accounts[0]);

    deployer.deploy(BOXI, accounts[0], accounts[1], 1);
    deployer.deploy(Rootkit_finance);
    deployer.deploy(Core_Fi_V3);

 };
