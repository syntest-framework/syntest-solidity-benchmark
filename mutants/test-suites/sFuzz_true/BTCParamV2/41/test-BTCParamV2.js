const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2MiATvif = await BTCParamV2.new({from: accounts[0]});
		const addressHvwJNRL = accounts[0]
		const addressf69glR3 = "0x0000000000000000000000000000000000000001"
		const uintj9YZJqR = BigInt("1318")
//		await BTCParamV2MiATvif.onlyOwner.call({from: accounts[3]});
//		const addressUIiPn9R = await BTCParamV2MiATvif.transferOwnership.call(addressHvwJNRL, {from: accounts[3]});
//		const bool4FKcXd = await BTCParamV2MiATvif.removeListener.call(addressf69glR3, {from: accounts[3]});
//		const uint256F7HeKWY = await BTCParamV2MiATvif.setBtcNetDiff.call(uintj9YZJqR, {from: accounts[3]});
//		const uint256AIau44Y = await BTCParamV2MiATvif.btcIncomePerTPerSecInWei.call({from: accounts[4]});

		await expect(BTCParamV2MiATvif.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2es6aKWZ = await BTCParamV2.new({from: accounts[3]});
		const addressvfrkl4a = accounts[4]
		const boolFlRzztk = true
		const addressJovJlMT = accounts[5]
		const uintnPNT2r = BigInt("1492")
		const uintkiYjmXD = BigInt("1597")
		const addressgDNifL9 = accounts[2]
		const addressihCCpIw = "0x0000000000000000000000000000000000000001"
		const booloFFBvai = false
		const addressUuUMW7 = accounts[2]
		const uintiYqfyQp = BigInt("1296")
		const uintOxLOjCd = BigInt("865")
		const addressRPZxV7i = accounts[4]
		const addressTmUxEpm = accounts[4]
//		const uint256I458V3g = await BTCParamV2es6aKWZ.btcIncomePerTPerSecInWei.call({from: accounts[4]});
//		const addressuh8e9sP = await BTCParamV2es6aKWZ.transferOwnership.call(addressvfrkl4a, {from: accounts[0]});
//		await BTCParamV2es6aKWZ.onlyOwner.call({from: accounts[4]});
//		const addressmIIKlte = await BTCParamV2es6aKWZ.initialize.call(addressihCCpIw, addressgDNifL9, uintkiYjmXD, uintnPNT2r, addressJovJlMT, boolFlRzztk, {from: accounts[5]});
//		const addressdr8JDX4 = await BTCParamV2es6aKWZ.initialize.call(addressTmUxEpm, addressRPZxV7i, uintOxLOjCd, uintiYqfyQp, addressUuUMW7, booloFFBvai, {from: accounts[0]});

		await expect(BTCParamV2es6aKWZ.btcIncomePerTPerSecInWei.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2RbziaET = await BTCParamV2.new({from: accounts[3]});
		const uintf6gNLp0 = BigInt("541")
		const uintqFCKD6e = BigInt("735")
		const uintVRiGg9 = BigInt("1574")
		const addressIkHLcdM = accounts[5]
//		const uint256E3CNlP = await BTCParamV2RbziaET.setBtcNetDiff.call(uintf6gNLp0, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256px0PqXL = await BTCParamV2RbziaET.btcIncomePerTPerSecInWei.call({from: accounts[3]});
//		const uint256FRv6AA5 = await BTCParamV2RbziaET.setBtcBlockReward.call(uintqFCKD6e, {from: accounts[1]});
//		const uint256rpKZmbJ = await BTCParamV2RbziaET.btcIncomePerTPerSecInWei.call({from: accounts[2]});
//		const uint256uNn4XjT = await BTCParamV2RbziaET.setBtcTxFeeRewardRate.call(uintVRiGg9, {from: accounts[0]});
//		const addressasMb90M = await BTCParamV2RbziaET.addListener.call(addressIkHLcdM, {from: accounts[5]});

		await expect(BTCParamV2RbziaET.setBtcNetDiff.call(uintf6gNLp0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2X0QKODy = await BTCParamV2.new({from: accounts[1]});
		const addressMI0Imqi = accounts[1]
		const addressWvhtZC3 = accounts[1]
		const uintPBb7EZ = BigInt("295")
		const addresscuHcT5w = accounts[2]
//		const addressp98x3Er = await BTCParamV2X0QKODy.setParamSetter.call(addressMI0Imqi, {from: accounts[2]});
//		const addressDxbhpxb = await BTCParamV2X0QKODy.setParamSetter.call(addressWvhtZC3, {from: accounts[0]});
//		await BTCParamV2X0QKODy.onlyOwner.call({from: accounts[3]});
//		const uint256k9mwCtq = await BTCParamV2X0QKODy.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintPBb7EZ, {from: accounts[3]});
//		const booltcvac58 = await BTCParamV2X0QKODy.removeListener.call(addresscuHcT5w, {from: accounts[2]});

		await expect(BTCParamV2X0QKODy.setParamSetter.call(addressMI0Imqi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2WMhc0X6 = await BTCParamV2.new({from: accounts[0]});
		const addresstknySs6 = accounts[3]
		const uintpEo9dg8 = BigInt("1618")
		const uintttg4hz2 = BigInt("957")
		const uint256rb6CXy = await BTCParamV2WMhc0X6.btcPrice.call({from: accounts[4]});
//		const boolknSWoRU = await BTCParamV2WMhc0X6.removeListener.call(addresstknySs6, {from: accounts[0]});
//		const uint256BoVyM0E = await BTCParamV2WMhc0X6.setBtcTxFeeRewardRate.call(uintpEo9dg8, {from: accounts[1]});
//		const uint256vVT2wz4 = await BTCParamV2WMhc0X6.setBtcBlockReward.call(uintttg4hz2, {from: accounts[3]});

		assert.equal(uint256rb6CXy, BigInt("0"))
		await expect(BTCParamV2WMhc0X6.removeListener.call(addresstknySs6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2K171Po = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressaGIJak = accounts[4]
		const addressN4nUlaf = accounts[0]
		const uintxg2OjMC = BigInt("1104")
		const addressEV3qOb = accounts[4]
		const uint256TjG9gE = await BTCParamV2K171Po.btcPrice.call({from: accounts[2]});
		const addressKO5Z22K = await BTCParamV2K171Po.setParamSetter.call(addressaGIJak, {from: accounts[4]});
		const addresssoYAAqK = await BTCParamV2K171Po.addListener.call(addressN4nUlaf, {from: accounts[5]});
		const uint256SHPFXg4 = await BTCParamV2K171Po.setBtcBlockReward.call(uintxg2OjMC, {from: accounts[3]});
		const addressBfiP5UO = await BTCParamV2K171Po.addListener.call(addressEV3qOb, {from: accounts[2]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2evWOhS = await BTCParamV2.new({from: accounts[2]});
		const boolHs8rqeS = false
		const addressPi4tCQT = accounts[5]
		const uintEP75TV = BigInt("592")
		const uintlSEirT = BigInt("204")
		const addressElLWEPd = accounts[3]
		const addressAJeWujn = accounts[4]
//		const addressdR36l63 = await BTCParamV2evWOhS.initialize.call(addressAJeWujn, addressElLWEPd, uintlSEirT, uintEP75TV, addressPi4tCQT, boolHs8rqeS, {from: accounts[3]});
//		await BTCParamV2evWOhS.onlyOwner.call({from: accounts[2]});

		await expect(BTCParamV2evWOhS.initialize.call(addressAJeWujn, addressElLWEPd, uintlSEirT, uintEP75TV, addressPi4tCQT, boolHs8rqeS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})