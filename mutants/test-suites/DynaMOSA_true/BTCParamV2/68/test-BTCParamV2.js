const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2arGbq6T = await BTCParamV2.new({from: accounts[0]});
		const uintNzhQ1qX = BigInt("344")
		const uintSBzmbKJ = BigInt("289")
//		await BTCParamV2arGbq6T.onlyOwner.call({from: accounts[4]});
//		await BTCParamV2arGbq6T.onlyParamSetter.call({from: accounts[2]});
//		const uint256mjcw0WX = await BTCParamV2arGbq6T.setBtcTxFeeRewardRate.call(uintNzhQ1qX, {from: accounts[4]});
//		const uint256IXa0NrM = await BTCParamV2arGbq6T.btcIncomePerTPerSecInWei.call({from: accounts[1]});
//		const uint256Tgogcir = await BTCParamV2arGbq6T.setBtcNetDiff.call(uintSBzmbKJ, {from: accounts[1]});

		await expect(BTCParamV2arGbq6T.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2bgPOui = await BTCParamV2.new({from: accounts[5]});
		const uintw6Umc5 = BigInt("491")
		const addressXzPooLR = accounts[4]
//		const uint256xqNcJTD = await BTCParamV2bgPOui.btcIncomePerTPerSecInWei.call({from: accounts[0]});
//		const uint256L1DGidU = await BTCParamV2bgPOui.btcPrice.call({from: accounts[3]});
//		const uint256HS1l5l7 = await BTCParamV2bgPOui.setBtcNetDiff.call(uintw6Umc5, {from: accounts[0]});
//		const addressgqAUGRW = await BTCParamV2bgPOui.setParamSetter.call(addressXzPooLR, {from: accounts[2]});

		await expect(BTCParamV2bgPOui.btcIncomePerTPerSecInWei.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2rCgaKtq = await BTCParamV2.new({from: accounts[3]});
		const uintFEzQWm3 = BigInt("281")
		const uintAgrVekG = BigInt("837")
		const addressesSlpM0 = accounts[4]
//		const uint256h7nW4Lm = await BTCParamV2rCgaKtq.setBtcTxFeeRewardRate.call(uintFEzQWm3, {from: accounts[0]});
//		const uint256WOCNSQs = await BTCParamV2rCgaKtq.setBtcNetDiff.call(uintAgrVekG, {from: "0x0000000000000000000000000000000000000001"});
//		await BTCParamV2rCgaKtq.onlyOwner.call({from: accounts[4]});
//		await BTCParamV2rCgaKtq.onlyOwner.call({from: accounts[4]});
//		const boolq1WsbVD = await BTCParamV2rCgaKtq.removeListener.call(addressesSlpM0, {from: accounts[0]});

		await expect(BTCParamV2rCgaKtq.setBtcTxFeeRewardRate.call(uintFEzQWm3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2XtWjfQW = await BTCParamV2.new({from: accounts[0]});
		const addressfH97MxN = accounts[1]
		const uintVDuEPQ = BigInt("784")
		const addressf8IFT5R = accounts[3]
//		const addressAurxbMf = await BTCParamV2XtWjfQW.setParamSetter.call(addressfH97MxN, {from: accounts[2]});
//		const uint256pPPmHIh = await BTCParamV2XtWjfQW.setBtcBlockReward.call(uintVDuEPQ, {from: accounts[5]});
//		const address7MsHDb = await BTCParamV2XtWjfQW.transferOwnership.call(addressf8IFT5R, {from: accounts[0]});
//		await BTCParamV2XtWjfQW.onlyParamSetter.call({from: accounts[1]});
//		await BTCParamV2XtWjfQW.onlyParamSetter.call({from: accounts[4]});

		await expect(BTCParamV2XtWjfQW.setParamSetter.call(addressfH97MxN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2vTl1foI = await BTCParamV2.new({from: accounts[3]});
		const booln4JyUMe = false
		const addressUGAbrS = accounts[1]
		const uintkvNakom = BigInt("1784")
		const uintjI46wZm = BigInt("230")
		const addressI7pKrwP = accounts[3]
		const addresscPvOoMG = accounts[1]
		const addressY29KFdW = accounts[4]
//		const addressZ4JUrr = await BTCParamV2vTl1foI.initialize.call(addresscPvOoMG, addressI7pKrwP, uintjI46wZm, uintkvNakom, addressUGAbrS, booln4JyUMe, {from: accounts[5]});
//		const addressdIji6ki = await BTCParamV2vTl1foI.addListener.call(addressY29KFdW, {from: accounts[3]});

		await expect(BTCParamV2vTl1foI.initialize.call(addresscPvOoMG, addressI7pKrwP, uintjI46wZm, uintkvNakom, addressUGAbrS, booln4JyUMe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2tUBDRP = await BTCParamV2.new({from: accounts[1]});
		const addressPHWEJo = accounts[4]
		const uint256b8gZyGT = await BTCParamV2tUBDRP.btcPrice.call({from: accounts[1]});
//		const boolwRbZJDX = await BTCParamV2tUBDRP.removeListener.call(addressPHWEJo, {from: accounts[3]});
//		await BTCParamV2tUBDRP.updateBtcPrice.call({from: accounts[5]});
//		const uint256H31EqXk = await BTCParamV2tUBDRP.btcPrice.call({from: accounts[3]});

		assert.equal(uint256b8gZyGT, BigInt("0"))
		await expect(BTCParamV2tUBDRP.removeListener.call(addressPHWEJo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2JblFnuT = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressaOlSEs = accounts[5]
		const addressjrbdNID = accounts[1]
		const uintbiC5lPS = BigInt("1887")
		const addressJjz6wxI = accounts[0]
		const boolpxHrZvC = false
		const addressGbHOROa = accounts[1]
		const uintCQNCQl7 = BigInt("491")
		const uintUdO99im = BigInt("255")
		const addressJ27epVZ = accounts[2]
		const addressyMds3xX = accounts[4]
		await BTCParamV2JblFnuT.onlyParamSetter.call({from: accounts[5]});
		const addresskQgpx3Z = await BTCParamV2JblFnuT.transferOwnership.call(addressaOlSEs, {from: accounts[3]});
		const addressWw4Gy34 = await BTCParamV2JblFnuT.setParamSetter.call(addressjrbdNID, {from: accounts[2]});
		const uint256BLe5Ei = await BTCParamV2JblFnuT.setBtcNetDiff.call(uintbiC5lPS, {from: accounts[2]});
		const boolu2Y2Jj = await BTCParamV2JblFnuT.removeListener.call(addressJjz6wxI, {from: accounts[1]});
		const addressC4VnjjH = await BTCParamV2JblFnuT.initialize.call(addressyMds3xX, addressJ27epVZ, uintUdO99im, uintCQNCQl7, addressGbHOROa, boolpxHrZvC, {from: accounts[1]});
	});
})