const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintK8mUsvH = BigInt("255")
		const BancorV2_ZapIn_General_V1_1qoPQGPl = await BancorV2_ZapIn_General_V1_1.new(uintK8mUsvH, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1qoPQGPl.onlyOwner.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1qoPQGPl.stopInEmergency.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1qoPQGPl.stopInEmergency.call({from: accounts[4]});
//		const bools7ZhX9Z = await BancorV2_ZapIn_General_V1_1qoPQGPl.isOwner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1qoPQGPl.nonReentrant.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1qoPQGPl.nonReentrant.call({from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1qoPQGPl.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintfc8dLzF = BigInt("1877")
		const BancorV2_ZapIn_General_V1_1b7wOIB = await BancorV2_ZapIn_General_V1_1.new(uintfc8dLzF, {from: accounts[5]});
		const addresssy9auxP = "0x0000000000000000000000000000000000000001"
		const uintD82bLqd = BigInt("256")
//		const addressU5lZ4Hd = await BancorV2_ZapIn_General_V1_1b7wOIB.inCaseTokengetsStuck.call(addresssy9auxP, {from: accounts[4]});
//		const uint16eEpSZBI = await BancorV2_ZapIn_General_V1_1b7wOIB.set_new_goodwill.call(uintD82bLqd, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1b7wOIB.renounceOwnership.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1b7wOIB.inCaseTokengetsStuck.call(addresssy9auxP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintmV2tWbR = BigInt("254")
		const BancorV2_ZapIn_General_V1_1PmFTWG3 = await BancorV2_ZapIn_General_V1_1.new(uintmV2tWbR, {from: "0x0000000000000000000000000000000000000001"});
		const uintKbGyHRq = BigInt("1693")
		const boolW5IsAmS = await BancorV2_ZapIn_General_V1_1PmFTWG3.isOwner.call({from: accounts[2]});
		const addresseqgOQJB = await BancorV2_ZapIn_General_V1_1PmFTWG3.owner.call({from: accounts[1]});
		const uint16dWmEhdu = await BancorV2_ZapIn_General_V1_1PmFTWG3.set_new_goodwill.call(uintKbGyHRq, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1PmFTWG3.renounceOwnership.call({from: accounts[0]});
		const addressKs4wMEz = await BancorV2_ZapIn_General_V1_1PmFTWG3.owner.call({from: accounts[4]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintBGZlCbs = BigInt("1457")
		const BancorV2_ZapIn_General_V1_1dSnkZSK = await BancorV2_ZapIn_General_V1_1.new(uintBGZlCbs, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1dSnkZSK.toggleContractActive.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1dSnkZSK.withdraw.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1dSnkZSK.renounceOwnership.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1dSnkZSK.nonReentrant.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1dSnkZSK.toggleContractActive.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintJ9fESL = BigInt("1306")
		const BancorV2_ZapIn_General_V1_1lftunwH = await BancorV2_ZapIn_General_V1_1.new(uintJ9fESL, {from: accounts[2]});
		const addressAKPuPdU = accounts[0]
		const addresspyj0kOt = await BancorV2_ZapIn_General_V1_1lftunwH.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1lftunwH.toggleContractActive.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1lftunwH.onlyOwner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1lftunwH.nonReentrant.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1lftunwH.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressvjDqz3o = await BancorV2_ZapIn_General_V1_1lftunwH.toPayable.call(addressAKPuPdU, {from: accounts[1]});

		assert.equal(addresspyj0kOt, 0x1d511Eb4C6EcE5eD3BE4F76af9B763D20DD4f49d)
		await expect(BancorV2_ZapIn_General_V1_1lftunwH.toggleContractActive.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintgIOGCVl = BigInt("1457")
		const BancorV2_ZapIn_General_V1_1dSnkZSK = await BancorV2_ZapIn_General_V1_1.new(uintgIOGCVl, {from: accounts[3]});
		const byteXnM1nEN = "0x0e1207020e140d20101a1d041c000111131e0c071d1000050c05030c01"
		const addressOHHKOTB = accounts[2]
		const addressjwQMkYo = "0x0000000000000000000000000000000000000001"
		const uintungUQgx = BigInt("1321")
		const uintzaUIM98 = BigInt("995")
		const addressLa9TJqe = accounts[1]
		const addressBRODP8R = accounts[2]
		const addresstQhfqih = accounts[4]
//		const uint256hqZ4fea = await BancorV2_ZapIn_General_V1_1dSnkZSK.ZapInSingleSided.call(addresstQhfqih, addressBRODP8R, addressLa9TJqe, uintzaUIM98, uintungUQgx, addressjwQMkYo, addressOHHKOTB, byteXnM1nEN, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1dSnkZSK.nonReentrant.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1dSnkZSK.ZapInSingleSided.call(addresstQhfqih, addressBRODP8R, addressLa9TJqe, uintzaUIM98, uintungUQgx, addressjwQMkYo, addressOHHKOTB, byteXnM1nEN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintEMANlmX = BigInt("1457")
		const BancorV2_ZapIn_General_V1_1dSnkZSK = await BancorV2_ZapIn_General_V1_1.new(uintEMANlmX, {from: accounts[3]});
		const addressttxybZl = accounts[5]
		const addressnXPuM0T = await BancorV2_ZapIn_General_V1_1dSnkZSK.transferOwnership.call(addressttxybZl, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1dSnkZSK.withdraw.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1dSnkZSK.renounceOwnership.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1dSnkZSK.nonReentrant.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1dSnkZSK.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintAOhwVQV = BigInt("1457")
		const BancorV2_ZapIn_General_V1_1dSnkZSK = await BancorV2_ZapIn_General_V1_1.new(uintAOhwVQV, {from: accounts[3]});
		const uintbTBM5GI = BigInt("1035")
		const uint16BQtVbQH = await BancorV2_ZapIn_General_V1_1dSnkZSK.set_new_goodwill.call(uintbTBM5GI, {from: accounts[3]});
		const addresssoKKJK = await BancorV2_ZapIn_General_V1_1dSnkZSK.owner.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1dSnkZSK.nonReentrant.call({from: accounts[3]});

		assert.equal(addresssoKKJK, 0x86afcC933A91a763651f30734aF8B1E9305917A4)
		await expect(BancorV2_ZapIn_General_V1_1dSnkZSK.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintxp4aMxt = BigInt("1457")
		const BancorV2_ZapIn_General_V1_1dSnkZSK = await BancorV2_ZapIn_General_V1_1.new(uintxp4aMxt, {from: accounts[3]});
		const bytebdxN2b1 = "0x0e1207020e140d20101a1d041c000111131e0c071d1000050c05030c01"
		const addressIG1tB3 = accounts[2]
		const address0iAqmN = "0x00000000000000000000000000000000000000-1"
		const uintZ1UmJQp = BigInt("1321")
		const uintv1iqsDb = BigInt("995")
		const addressstJy6Xh = accounts[1]
		const addressGBnT7qo = accounts[2]
		const addressFiRpOc1 = accounts[4]
//		const uint256hqZ4fea = await BancorV2_ZapIn_General_V1_1dSnkZSK.ZapInSingleSided.call(addressFiRpOc1, addressGBnT7qo, addressstJy6Xh, uintv1iqsDb, uintZ1UmJQp, address0iAqmN, addressIG1tB3, bytebdxN2b1, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1dSnkZSK.ZapInSingleSided.call(addressFiRpOc1, addressGBnT7qo, addressstJy6Xh, uintv1iqsDb, uintZ1UmJQp, address0iAqmN, addressIG1tB3, bytebdxN2b1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintUqRcNrA = BigInt("1457")
		const BancorV2_ZapIn_General_V1_1dSnkZSK = await BancorV2_ZapIn_General_V1_1.new(uintUqRcNrA, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1dSnkZSK.renounceOwnership.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1dSnkZSK.nonReentrant.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1dSnkZSK.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintoWO6xOm = BigInt("1457")
		const BancorV2_ZapIn_General_V1_1dSnkZSK = await BancorV2_ZapIn_General_V1_1.new(uintoWO6xOm, {from: accounts[3]});
		const addressB94WWG0 = "0x0000000000000000000000000000000000000001"
		const byte8E5bkm = "0x0e1207020e140d20101a1d041c000111131e0c071d1000050c05030c01"
		const addressQ0kL5SS = accounts[2]
		const addressbhtKGbD = "0x0000000000000000000000000000000000000001"
		const uinto6FQqkP = BigInt("1321")
		const uintV3mjkuZ = BigInt("1033")
		const addressNDJHWBr = accounts[1]
		const addresstejIHaD = accounts[2]
		const addressrijkSwP = accounts[4]
		const boolAK3gju8 = await BancorV2_ZapIn_General_V1_1dSnkZSK.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressihRfnES = await BancorV2_ZapIn_General_V1_1dSnkZSK.inCaseTokengetsStuck.call(addressB94WWG0, {from: accounts[3]});
//		const uint256hqZ4fea = await BancorV2_ZapIn_General_V1_1dSnkZSK.ZapInSingleSided.call(addressrijkSwP, addresstejIHaD, addressNDJHWBr, uintV3mjkuZ, uinto6FQqkP, addressbhtKGbD, addressQ0kL5SS, byte8E5bkm, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1dSnkZSK.nonReentrant.call({from: accounts[3]});

		assert.equal(boolAK3gju8, false)
		await expect(BancorV2_ZapIn_General_V1_1dSnkZSK.inCaseTokengetsStuck.call(addressB94WWG0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})