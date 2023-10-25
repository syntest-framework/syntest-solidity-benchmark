const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2HC0XAev = await BTCParamV2.new({from: accounts[3]});
		const boolB727d5Y = false
		const addressyobrpmj = accounts[4]
		const uint7d4xyM = BigInt("32")
		const uintHZDWr5c = BigInt("1700")
		const addressgYC566 = accounts[2]
		const addressYO6rVNS = accounts[0]
//		await BTCParamV2HC0XAev.updateBtcPrice.call({from: accounts[1]});
//		const addressZ8QnyQ0 = await BTCParamV2HC0XAev.initialize.call(addressYO6rVNS, addressgYC566, uintHZDWr5c, uint7d4xyM, addressyobrpmj, boolB727d5Y, {from: accounts[0]});
//		await BTCParamV2HC0XAev.updateBtcPrice.call({from: accounts[4]});

		await expect(BTCParamV2HC0XAev.updateBtcPrice.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2x0kxPwK = await BTCParamV2.new({from: accounts[5]});
		const uintuQctpSb = BigInt("830")
		const addressblUEZD6 = accounts[0]
		const addressLYXLBa = accounts[1]
		const uint256ru52hSh = await BTCParamV2x0kxPwK.btcPrice.call({from: accounts[1]});
//		await BTCParamV2x0kxPwK.updateBtcPrice.call({from: accounts[5]});
//		const uint256WwLthc6 = await BTCParamV2x0kxPwK.setBtcNetDiff.call(uintuQctpSb, {from: accounts[3]});
//		const addressMASaI2 = await BTCParamV2x0kxPwK.addListener.call(addressblUEZD6, {from: accounts[0]});
//		const addressQj37TIr = await BTCParamV2x0kxPwK.addListener.call(addressLYXLBa, {from: accounts[5]});

		assert.equal(uint256ru52hSh, BigInt("0"))
		await expect(BTCParamV2x0kxPwK.updateBtcPrice.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2LPZeiR = await BTCParamV2.new({from: accounts[0]});
		const boolzleXRdX = true
		const addressGVUzwf = accounts[3]
		const uintnulMu6I = BigInt("1312")
		const uintfJwKdZK = BigInt("1341")
		const addressv8d2bF = accounts[2]
		const addressupPxBjg = accounts[1]
		const addressunGM0bj = accounts[3]
//		const addressNFT0bDK = await BTCParamV2LPZeiR.initialize.call(addressupPxBjg, addressv8d2bF, uintfJwKdZK, uintnulMu6I, addressGVUzwf, boolzleXRdX, {from: accounts[3]});
//		const addressCKOu3Ms = await BTCParamV2LPZeiR.addListener.call(addressunGM0bj, {from: accounts[4]});

		await expect(BTCParamV2LPZeiR.initialize.call(addressupPxBjg, addressv8d2bF, uintfJwKdZK, uintnulMu6I, addressGVUzwf, boolzleXRdX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Ata9YjZ = await BTCParamV2.new({from: accounts[2]});
		const address8Prgr6 = accounts[4]
		const booldvuHjfR = false
		const addresswyCPp1j = accounts[3]
		const uinttfWmZHf = BigInt("809")
		const uintblVJYrl = BigInt("1652")
		const addressQLPaC1k = accounts[3]
		const addressO5FaFJk = accounts[3]
		const addressYE0U5a7 = accounts[3]
//		const uint256zQy5k3i = await BTCParamV2Ata9YjZ.btcIncomePerTPerSecInWei.call({from: accounts[1]});
//		const booleiYbYVu = await BTCParamV2Ata9YjZ.removeListener.call(address8Prgr6, {from: accounts[4]});
//		const addressZsQnhKj = await BTCParamV2Ata9YjZ.initialize.call(addressO5FaFJk, addressQLPaC1k, uintblVJYrl, uinttfWmZHf, addresswyCPp1j, booldvuHjfR, {from: accounts[4]});
//		const addressH6D5E1A = await BTCParamV2Ata9YjZ.addListener.call(addressYE0U5a7, {from: accounts[2]});
//		await BTCParamV2Ata9YjZ.updateBtcPrice.call({from: accounts[3]});

		await expect(BTCParamV2Ata9YjZ.btcIncomePerTPerSecInWei.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Ua2qvTQ = await BTCParamV2.new({from: accounts[3]});
		const boolQmmOZTo = false
		const addresslH23ijg = accounts[4]
		const uintbKZFQsl = BigInt("763")
		const uintwqOmVSz = BigInt("11")
		const addressQpOgrtz = accounts[1]
		const addressEefrMYh = accounts[0]
//		await BTCParamV2Ua2qvTQ.onlyParamSetter.call({from: accounts[1]});
//		await BTCParamV2Ua2qvTQ.updateBtcPrice.call({from: accounts[3]});
//		const addressdNJE9he = await BTCParamV2Ua2qvTQ.initialize.call(addressEefrMYh, addressQpOgrtz, uintwqOmVSz, uintbKZFQsl, addresslH23ijg, boolQmmOZTo, {from: accounts[3]});
//		const uint256evbkzc9 = await BTCParamV2Ua2qvTQ.btcIncomePerTPerSecInWei.call({from: accounts[0]});
//		await BTCParamV2Ua2qvTQ.onlyOwner.call({from: accounts[3]});

		await expect(BTCParamV2Ua2qvTQ.onlyParamSetter.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV29k6UeV = await BTCParamV2.new({from: accounts[1]});
		const addressV1XeDzE = accounts[0]
		const uint256Lc8a16b = await BTCParamV29k6UeV.btcPrice.call({from: accounts[3]});
//		const addressGaDJGmh = await BTCParamV29k6UeV.setParamSetter.call(addressV1XeDzE, {from: accounts[2]});

		assert.equal(uint256Lc8a16b, BigInt("0"))
		await expect(BTCParamV29k6UeV.setParamSetter.call(addressV1XeDzE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2rfjlai2 = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uint7IWwuj = BigInt("1269")
		const addressVTed3id = accounts[3]
		await BTCParamV2rfjlai2.onlyOwner.call({from: accounts[3]});
		await BTCParamV2rfjlai2.updateBtcPrice.call({from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2rfjlai2.onlyOwner.call({from: accounts[3]});
		const uint256cfZ3FCA = await BTCParamV2rfjlai2.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uint7IWwuj, {from: accounts[0]});
		const boolx3bsVzV = await BTCParamV2rfjlai2.removeListener.call(addressVTed3id, {from: accounts[3]});
	});
})