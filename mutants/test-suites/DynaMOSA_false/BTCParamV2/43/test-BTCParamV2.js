const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2Tc0ULXL = await BTCParamV2.new({from: accounts[2]});
		const boolN56qWZJ = true
		const addressSzB9aXM = accounts[1]
		const uintip9fA7v = BigInt("273")
		const uintNiukvlM = BigInt("859")
		const addressXtRjZF = accounts[2]
		const addressbd4Ho3R = accounts[3]
		const uintNNP4We = BigInt("1055")
//		const addresssgHRysW = await BTCParamV2Tc0ULXL.initialize.call(addressbd4Ho3R, addressXtRjZF, uintNiukvlM, uintip9fA7v, addressSzB9aXM, boolN56qWZJ, {from: accounts[0]});
//		const uint256Q7rnAHR = await BTCParamV2Tc0ULXL.setBtcNetDiff.call(uintNNP4We, {from: accounts[2]});

		await expect(BTCParamV2Tc0ULXL.initialize.call(addressbd4Ho3R, addressXtRjZF, uintNiukvlM, uintip9fA7v, addressSzB9aXM, boolN56qWZJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2XPOx2gL = await BTCParamV2.new({from: accounts[0]});
		const uinto7qZNU5 = BigInt("1501")
		const boolfcHGXjR = true
		const addressnhTbfcR = "0x0000000000000000000000000000000000000001"
		const uintm07Y1N = BigInt("895")
		const uinttIlsDs9 = BigInt("1060")
		const addressZlfp2b = accounts[1]
		const addresseqGgwWu = "0x0000000000000000000000000000000000000001"
		const addressx1aqbyB = accounts[2]
//		await BTCParamV2XPOx2gL.onlyOwner.call({from: accounts[3]});
//		await BTCParamV2XPOx2gL.updateBtcPrice.call({from: accounts[3]});
//		const uint256e9gkh3g = await BTCParamV2XPOx2gL.setBtcTxFeeRewardRate.call(uinto7qZNU5, {from: accounts[1]});
//		const addressOeQ4axR = await BTCParamV2XPOx2gL.initialize.call(addresseqGgwWu, addressZlfp2b, uinttIlsDs9, uintm07Y1N, addressnhTbfcR, boolfcHGXjR, {from: accounts[4]});
//		const boolXhLnKiI = await BTCParamV2XPOx2gL.removeListener.call(addressx1aqbyB, {from: accounts[2]});

		await expect(BTCParamV2XPOx2gL.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2tuxkD6l = await BTCParamV2.new({from: accounts[4]});
		const addressgBXDeJ = accounts[2]
		const addresscj0glKG = accounts[3]
		const addressZS79rGb = accounts[2]
//		const addressuss14tB = await BTCParamV2tuxkD6l.addListener.call(addressgBXDeJ, {from: accounts[5]});
//		const addressTzJdDJa = await BTCParamV2tuxkD6l.setParamSetter.call(addresscj0glKG, {from: accounts[4]});
//		const boolEW4UFlF = await BTCParamV2tuxkD6l.removeListener.call(addressZS79rGb, {from: accounts[0]});
//		await BTCParamV2tuxkD6l.onlyParamSetter.call({from: accounts[3]});

		await expect(BTCParamV2tuxkD6l.addListener.call(addressgBXDeJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2W1YVez = await BTCParamV2.new({from: accounts[4]});
		const addressY0rRNW = accounts[3]
		const uintRQ5gMQ0 = BigInt("392")
		const addresswEUH1eB = accounts[2]
//		const addressuq3H3ke = await BTCParamV2W1YVez.transferOwnership.call(addressY0rRNW, {from: accounts[2]});
//		const uint256YbzCeme = await BTCParamV2W1YVez.setBtcTxFeeRewardRate.call(uintRQ5gMQ0, {from: "0x0000000000000000000000000000000000000001"});
//		const addressy8Ozk1Y = await BTCParamV2W1YVez.setParamSetter.call(addresswEUH1eB, {from: accounts[2]});

		await expect(BTCParamV2W1YVez.transferOwnership.call(addressY0rRNW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2f1LRCh = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcJY2ltk = BigInt("1109")
		const uintZcI6432 = BigInt("711")
		const uint256sdbsJc = await BTCParamV2f1LRCh.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintcJY2ltk, {from: accounts[4]});
		const uint256oVgQ0RD = await BTCParamV2f1LRCh.setBtcNetDiff.call(uintZcI6432, {from: accounts[1]});
		await BTCParamV2f1LRCh.updateBtcPrice.call({from: accounts[4]});
		await BTCParamV2f1LRCh.updateBtcPrice.call({from: accounts[2]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV26brRlH = await BTCParamV2.new({from: accounts[4]});
		const uinta9Whpjk = BigInt("1299")
//		const uint256HxBtAh = await BTCParamV26brRlH.btcIncomePerTPerSecInWei.call({from: accounts[1]});
//		const uint256ey3ARyC = await BTCParamV26brRlH.setBtcNetDiff.call(uinta9Whpjk, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Huw30p = await BTCParamV26brRlH.btcPrice.call({from: accounts[0]});
//		const uint256ClxiGX7 = await BTCParamV26brRlH.btcPrice.call({from: accounts[4]});
//		const uint2569s3JSW = await BTCParamV26brRlH.btcIncomePerTPerSecInWei.call({from: accounts[3]});

		await expect(BTCParamV26brRlH.btcIncomePerTPerSecInWei.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2AfU1Nl0 = await BTCParamV2.new({from: accounts[2]});
		const addressCPS31aR = accounts[0]
		const uintMRUXVqo = BigInt("502")
		const uintJIRyb68 = BigInt("439")
		const addressvTgdZtX = accounts[3]
		const uint256Lco5xUS = await BTCParamV2AfU1Nl0.btcPrice.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolLD1mIsQ = await BTCParamV2AfU1Nl0.removeListener.call(addressCPS31aR, {from: accounts[3]});
//		const uint256sJMh5Zc = await BTCParamV2AfU1Nl0.setBtcNetDiff.call(uintMRUXVqo, {from: accounts[1]});
//		await BTCParamV2AfU1Nl0.onlyOwner.call({from: accounts[0]});
//		const uint256Tf8YOMK = await BTCParamV2AfU1Nl0.btcIncomePerTPerSecInWei.call({from: accounts[2]});
//		const uint256OCB2rEU = await BTCParamV2AfU1Nl0.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintJIRyb68, {from: accounts[4]});
//		const addressrBl8zKz = await BTCParamV2AfU1Nl0.setParamSetter.call(addressvTgdZtX, {from: accounts[2]});

		assert.equal(uint256Lco5xUS, BigInt("0"))
		await expect(BTCParamV2AfU1Nl0.removeListener.call(addressCPS31aR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})