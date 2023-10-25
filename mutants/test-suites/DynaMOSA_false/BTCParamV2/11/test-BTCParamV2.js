const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2Rag9AT0 = await BTCParamV2.new({from: accounts[4]});
		const addressPahQmT7 = accounts[5]
		const uintbinZpfS = BigInt("237")
		const uintElqt7kp = BigInt("237")
//		const addressXMISZyX = await BTCParamV2Rag9AT0.addListener.call(addressPahQmT7, {from: accounts[0]});
//		const uint256NzdIGo = await BTCParamV2Rag9AT0.setBtcBlockReward.call(uintbinZpfS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256eGgxhmp = await BTCParamV2Rag9AT0.btcPrice.call({from: accounts[4]});
//		await BTCParamV2Rag9AT0.updateBtcPrice.call({from: accounts[0]});
//		const uint256OWfSrzn = await BTCParamV2Rag9AT0.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintElqt7kp, {from: accounts[3]});

		await expect(BTCParamV2Rag9AT0.addListener.call(addressPahQmT7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2KT4sUM2 = await BTCParamV2.new({from: accounts[1]});
		const addressRHovXTW = accounts[0]
		const uintj4Glgwd = BigInt("984")
		const uintjViq7X7 = BigInt("1377")
//		const uint256U2FUNw = await BTCParamV2KT4sUM2.btcIncomePerTPerSecInWei.call({from: accounts[0]});
//		const addressm1SvVcm = await BTCParamV2KT4sUM2.transferOwnership.call(addressRHovXTW, {from: accounts[3]});
//		await BTCParamV2KT4sUM2.onlyParamSetter.call({from: accounts[2]});
//		const uint256BkgEPxE = await BTCParamV2KT4sUM2.setBtcNetDiff.call(uintj4Glgwd, {from: accounts[2]});
//		const uint256k0C2rGL = await BTCParamV2KT4sUM2.setBtcTxFeeRewardRate.call(uintjViq7X7, {from: accounts[2]});

		await expect(BTCParamV2KT4sUM2.btcIncomePerTPerSecInWei.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2TU24sbv = await BTCParamV2.new({from: accounts[4]});
		const uintasjv9hB = BigInt("761")
		const uintyvHWWI5 = BigInt("604")
		const uinthnKZDZ = BigInt("1383")
		const addressfc4IYFr = accounts[0]
		const uint256YfcLncj = await BTCParamV2TU24sbv.btcPrice.call({from: accounts[4]});
//		const uint256JgSwxzF = await BTCParamV2TU24sbv.setBtcNetDiff.call(uintasjv9hB, {from: accounts[4]});
//		const uint256Qya0Y74 = await BTCParamV2TU24sbv.setBtcNetDiff.call(uintyvHWWI5, {from: accounts[4]});
//		const uint256Uzdlxog = await BTCParamV2TU24sbv.btcPrice.call({from: accounts[3]});
//		const uint256eoJ5YEf = await BTCParamV2TU24sbv.setBtcNetDiff.call(uinthnKZDZ, {from: accounts[4]});
//		const addressap9ltSj = await BTCParamV2TU24sbv.transferOwnership.call(addressfc4IYFr, {from: accounts[2]});

		assert.equal(uint256YfcLncj, BigInt("0"))
		await expect(BTCParamV2TU24sbv.setBtcNetDiff.call(uintasjv9hB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2W1blDWT = await BTCParamV2.new({from: accounts[1]});
		const boolLs07fC = true
		const addressam30iu = accounts[3]
		const uintxC9MXje = BigInt("820")
		const uintyFgjpQ5 = BigInt("929")
		const addressyrS3y7l = accounts[5]
		const addresstzwtR7J = accounts[1]
		const addresst8zw4ke = accounts[1]
//		await BTCParamV2W1blDWT.onlyOwner.call({from: accounts[2]});
//		const addressddvEML2 = await BTCParamV2W1blDWT.initialize.call(addresstzwtR7J, addressyrS3y7l, uintyFgjpQ5, uintxC9MXje, addressam30iu, boolLs07fC, {from: accounts[1]});
//		await BTCParamV2W1blDWT.onlyOwner.call({from: accounts[5]});
//		const addressADIBEHA = await BTCParamV2W1blDWT.addListener.call(addresst8zw4ke, {from: accounts[4]});

		await expect(BTCParamV2W1blDWT.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2OHhQrq3 = await BTCParamV2.new({from: accounts[0]});
		const addressCFOQNSM = accounts[6]
		const addressyYumqw = accounts[3]
		const addressQ3wq1SO = accounts[4]
		const uintAcM1VFJ = BigInt("1742")
//		const addressxpoRnqc = await BTCParamV2OHhQrq3.setParamSetter.call(addressCFOQNSM, {from: accounts[3]});
//		const addressgKV1ePL = await BTCParamV2OHhQrq3.addListener.call(addressyYumqw, {from: accounts[5]});
//		const addressr5NsqIV = await BTCParamV2OHhQrq3.setParamSetter.call(addressQ3wq1SO, {from: accounts[3]});
//		const uint256RAUUuNR = await BTCParamV2OHhQrq3.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintAcM1VFJ, {from: accounts[1]});

		await expect(BTCParamV2OHhQrq3.setParamSetter.call(addressCFOQNSM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2XqHlDDP = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIyr3Hdl = BigInt("335")
		const addresskBfn5NO = accounts[2]
		const uint256h2XCaL1 = await BTCParamV2XqHlDDP.setBtcNetDiff.call(uintIyr3Hdl, {from: "0x0000000000000000000000000000000000000001"});
		const addressCzmvF7G = await BTCParamV2XqHlDDP.addListener.call(addresskBfn5NO, {from: accounts[2]});
		const uint256cawBmai = await BTCParamV2XqHlDDP.btcPrice.call({from: accounts[2]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2W1blDWT = await BTCParamV2.new({from: accounts[1]});
		const boolLs07fC = true
		const addressI2VeVdq = accounts[3]
		const uintFUQIUnz = BigInt("820")
		const uintGNnqPpA = BigInt("929")
		const addresscFrboF2 = accounts[5]
		const addressqERa07v = accounts[1]
		const addressLJOf17k = accounts[1]
//		const addressddvEML2 = await BTCParamV2W1blDWT.initialize.call(addressqERa07v, addresscFrboF2, uintGNnqPpA, uintFUQIUnz, addressI2VeVdq, boolLs07fC, {from: accounts[1]});
//		await BTCParamV2W1blDWT.onlyOwner.call({from: accounts[5]});
//		const addressADIBEHA = await BTCParamV2W1blDWT.addListener.call(addressLJOf17k, {from: accounts[4]});

		await expect(BTCParamV2W1blDWT.initialize.call(addressqERa07v, addresscFrboF2, uintGNnqPpA, uintFUQIUnz, addressI2VeVdq, boolLs07fC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})