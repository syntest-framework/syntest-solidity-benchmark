const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2JzvWIJf = await BTCParamV2.new({from: accounts[1]});
		const addressyltjK9b = accounts[1]
		const uintuWpgjgv = BigInt("1449")
		const addressUWmz0pl = accounts[4]
		const uintYPxebCW = BigInt("1975")
		const addressvNUSFBX = await BTCParamV2JzvWIJf.addListener.call(addressyltjK9b, {from: accounts[1]});
		const uint256Ynb5rQ = await BTCParamV2JzvWIJf.setBtcNetDiff.call(uintuWpgjgv, {from: "0x0000000000000000000000000000000000000001"});
		const boolyWCbah = await BTCParamV2JzvWIJf.removeListener.call(addressUWmz0pl, {from: accounts[4]});
		const uint256XemBfYN = await BTCParamV2JzvWIJf.setBtcNetDiff.call(uintYPxebCW, {from: accounts[2]});
		await BTCParamV2JzvWIJf.updateBtcPrice.call({from: accounts[2]});

		await expect(BTCParamV2JzvWIJf.addListener.call(addressyltjK9b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2FvTJJkg = await BTCParamV2.new({from: accounts[3]});
		const addressHsVrvMV = accounts[3]
		const uintvXeWbb = BigInt("254")
		const boolvpSpHQ3 = false
		const addressGLCFoQ = "0x0000000000000000000000000000000000000001"
		const uinttWsJcFb = BigInt("1719")
		const uintrVBMNDe = BigInt("1401")
		const addressoNkVTWa = accounts[3]
		const addressFruC5re = accounts[3]
		const uintQiJpwOO = BigInt("1888")
		const addressO4RwG21 = await BTCParamV2FvTJJkg.setParamSetter.call(addressHsVrvMV, {from: accounts[0]});
		const uint256fZLcINU = await BTCParamV2FvTJJkg.setBtcTxFeeRewardRate.call(uintvXeWbb, {from: accounts[0]});
		const addressywrvP4X = await BTCParamV2FvTJJkg.initialize.call(addressFruC5re, addressoNkVTWa, uintrVBMNDe, uinttWsJcFb, addressGLCFoQ, boolvpSpHQ3, {from: accounts[0]});
		await BTCParamV2FvTJJkg.onlyOwner.call({from: accounts[2]});
		const uint256ZocvTLd = await BTCParamV2FvTJJkg.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintQiJpwOO, {from: accounts[1]});

		await expect(BTCParamV2FvTJJkg.setParamSetter.call(addressHsVrvMV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2yxXQRU3 = await BTCParamV2.new({from: accounts[2]});
		const boolCgjmyF0 = true
		const addressDiPs12C = accounts[2]
		const uintC4jzdrS = BigInt("701")
		const uintObVhKWM = BigInt("216")
		const addressQaDy22R = accounts[2]
		const addressEhvAQVw = accounts[2]
		const addresslEjpLy2 = accounts[4]
		const uintZyIGND = BigInt("630")
		const boolC61z4pJ = true
		const addressBQRXHsR = accounts[3]
		const uintjf6WbMR = BigInt("164")
		const uintGejy9xj = BigInt("1543")
		const addressJSWXjp = accounts[3]
		const addressI57kdj5 = accounts[2]
		const addresslqNdsI = await BTCParamV2yxXQRU3.initialize.call(addressEhvAQVw, addressQaDy22R, uintObVhKWM, uintC4jzdrS, addressDiPs12C, boolCgjmyF0, {from: accounts[5]});
		const addressQSz7UNR = await BTCParamV2yxXQRU3.transferOwnership.call(addresslEjpLy2, {from: accounts[0]});
		await BTCParamV2yxXQRU3.onlyOwner.call({from: accounts[0]});
		const uint256Jhsz47G = await BTCParamV2yxXQRU3.setBtcNetDiff.call(uintZyIGND, {from: accounts[4]});
		const addressuJRLuv = await BTCParamV2yxXQRU3.initialize.call(addressI57kdj5, addressJSWXjp, uintGejy9xj, uintjf6WbMR, addressBQRXHsR, boolC61z4pJ, {from: accounts[5]});
		await BTCParamV2yxXQRU3.updateBtcPrice.call({from: accounts[5]});

		await expect(BTCParamV2yxXQRU3.initialize.call(addressEhvAQVw, addressQaDy22R, uintObVhKWM, uintC4jzdrS, addressDiPs12C, boolCgjmyF0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2jgOEPCB = await BTCParamV2.new({from: accounts[1]});
		const uintJBVZ2P9 = BigInt("242")
		const addressLQlGfP = accounts[1]
		const uinthLGvLIO = BigInt("1695")
		const uint256dsqizc2 = await BTCParamV2jgOEPCB.btcPrice.call({from: accounts[1]});
		await BTCParamV2jgOEPCB.onlyOwner.call({from: accounts[0]});
		const uint256hubXlwv = await BTCParamV2jgOEPCB.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintJBVZ2P9, {from: accounts[0]});
		const boolu7bklnU = await BTCParamV2jgOEPCB.removeListener.call(addressLQlGfP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pi40xZj = await BTCParamV2jgOEPCB.setBtcNetDiff.call(uinthLGvLIO, {from: accounts[0]});

		assert.equal(uint256dsqizc2, BigInt("0"))
		await expect(BTCParamV2jgOEPCB.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2qjQC4fq = await BTCParamV2.new({from: accounts[3]});
		const addressQR5iPAf = accounts[0]
		const uintrQLEWF6 = BigInt("505")
		const uint256xeDX8cL = await BTCParamV2qjQC4fq.btcIncomePerTPerSecInWei.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2569whK20 = await BTCParamV2qjQC4fq.btcIncomePerTPerSecInWei.call({from: accounts[1]});
		const boolTlJLuqT = await BTCParamV2qjQC4fq.removeListener.call(addressQR5iPAf, {from: accounts[4]});
		const uint256bhhv99 = await BTCParamV2qjQC4fq.btcPrice.call({from: accounts[3]});
		const uint2568wfd8z = await BTCParamV2qjQC4fq.setBtcBlockReward.call(uintrQLEWF6, {from: accounts[3]});

		await expect(BTCParamV2qjQC4fq.btcIncomePerTPerSecInWei.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2n0e1OOd = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressYwb2RVB = accounts[0]
		const uintKLIRlpq = BigInt("1596")
		const addressjtkAFsT = await BTCParamV2n0e1OOd.transferOwnership.call(addressYwb2RVB, {from: accounts[2]});
		await BTCParamV2n0e1OOd.updateBtcPrice.call({from: accounts[3]});
		const uint256HF2v2NB = await BTCParamV2n0e1OOd.setBtcTxFeeRewardRate.call(uintKLIRlpq, {from: accounts[3]});
	});
})