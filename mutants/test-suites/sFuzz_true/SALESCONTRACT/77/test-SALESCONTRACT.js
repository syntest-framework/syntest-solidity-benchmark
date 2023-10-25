const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTcrvQETV = await SALESCONTRACT.new({from: accounts[2]});
		const addressUyQlYuK = accounts[0]
		const addressdBPCwxC = "0x0000000000000000000000000000000000000001"
//		const addresspAMb2H = await SALESCONTRACTcrvQETV.setToken.call(addressUyQlYuK, {from: accounts[1]});
//		await SALESCONTRACTcrvQETV.clearETH.call({from: accounts[4]});
//		const boolt2vM1vy = await SALESCONTRACTcrvQETV.tokenSale.call(addressdBPCwxC, {from: accounts[1]});

		await expect(SALESCONTRACTcrvQETV.setToken.call(addressUyQlYuK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTuRa79R = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSypQZwq = BigInt("482")
		await SALESCONTRACTuRa79R.ff.call({from: accounts[2]});
		const uintpYgq3K = await SALESCONTRACTuRa79R._setStage.call(uintSypQZwq, {from: accounts[0]});
		await SALESCONTRACTuRa79R.ff.call({from: accounts[0]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTkHpzwx8 = await SALESCONTRACT.new({from: accounts[2]});
		const addressYRdLFNS = accounts[2]
		const uintivdIPoC = BigInt("1241")
		const addressQADL0oT = accounts[3]
		const addressyqwwNaC = accounts[5]
		const addressRn9Hy53 = accounts[5]
//		const boolXnlXEVQ = await SALESCONTRACTkHpzwx8.tokenSale.call(addressYRdLFNS, {from: accounts[2]});
//		const addressBQEYaVc = await SALESCONTRACTkHpzwx8._setSalesPool.call(addressQADL0oT, uintivdIPoC, {from: accounts[1]});
//		await SALESCONTRACTkHpzwx8.clearTokens.call({from: accounts[1]});
//		const boolWvcEAk7 = await SALESCONTRACTkHpzwx8.tokenSale.call(addressyqwwNaC, {from: accounts[0]});
//		const boolysk3JQt = await SALESCONTRACTkHpzwx8.tokenSale.call(addressRn9Hy53, {from: accounts[4]});

		await expect(SALESCONTRACTkHpzwx8.tokenSale.call(addressYRdLFNS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTlpa6VCq = await SALESCONTRACT.new({from: accounts[0]});
		const uintPQiibNz = BigInt("476")
		const addresssZl3Io7 = accounts[0]
		const uintIm447vW = BigInt("522")
		const addressGzXvhQ = accounts[2]
//		await SALESCONTRACTlpa6VCq.ff.call({from: accounts[4]});
//		const addresskyWrzLP = await SALESCONTRACTlpa6VCq._setSalesPool.call(addresssZl3Io7, uintPQiibNz, {from: accounts[3]});
//		await SALESCONTRACTlpa6VCq.clearTokens.call({from: accounts[3]});
//		const addresscCz34T5 = await SALESCONTRACTlpa6VCq._setSalesPool.call(addressGzXvhQ, uintIm447vW, {from: accounts[1]});

		await expect(SALESCONTRACTlpa6VCq.ff.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTHZd5oMS = await SALESCONTRACT.new({from: accounts[3]});
//		await SALESCONTRACTHZd5oMS.clearTokens.call({from: accounts[3]});

		await expect(SALESCONTRACTHZd5oMS.clearTokens.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTHZd5oMS = await SALESCONTRACT.new({from: accounts[3]});
		const uintvZQfXrR = BigInt("1666")
		const addressp6mfJt1 = accounts[4]
		const addressnqpjmha = accounts[4]
		const addressszhxx0P = await SALESCONTRACTHZd5oMS._setSalesPool.call(addressp6mfJt1, uintvZQfXrR, {from: accounts[3]});
//		const boolPdYOUoE = await SALESCONTRACTHZd5oMS.tokenSale.call(addressnqpjmha, {from: accounts[5]});

		await expect(SALESCONTRACTHZd5oMS.tokenSale.call(addressnqpjmha, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTHZd5oMS = await SALESCONTRACT.new({from: accounts[3]});
		const addresskk5P7xb = accounts[4]
		const addressPrFs1EY = accounts[4]
		const addressZfIU0Mo = accounts[4]
		const addressp7bovQp = await SALESCONTRACTHZd5oMS.setToken.call(addresskk5P7xb, {from: accounts[3]});
//		const boolPdYOUoE = await SALESCONTRACTHZd5oMS.tokenSale.call(addressPrFs1EY, {from: accounts[5]});
//		const addressqdn29uq = await SALESCONTRACTHZd5oMS.setToken.call(addressZfIU0Mo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTHZd5oMS.tokenSale.call(addressPrFs1EY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTHZd5oMS = await SALESCONTRACT.new({from: accounts[3]});
		const addressZ9jYXzo = accounts[4]
		const addressFaAA41x = accounts[4]
		const addressQ6V8Mr1 = accounts[0]
//		await SALESCONTRACTHZd5oMS.clearETH.call({from: accounts[3]});
//		const addressHY1ShpP = await SALESCONTRACTHZd5oMS.setToken.call(addressZ9jYXzo, {from: accounts[4]});
//		const boolPdYOUoE = await SALESCONTRACTHZd5oMS.tokenSale.call(addressFaAA41x, {from: accounts[5]});
//		const boolXfcJPYO = await SALESCONTRACTHZd5oMS.tokenSale.call(addressQ6V8Mr1, {from: accounts[4]});

		await expect(SALESCONTRACTHZd5oMS.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTHZd5oMS = await SALESCONTRACT.new({from: accounts[3]});
		const uintMilc0ZE = BigInt("1349")
		const addressFiKKxIS = accounts[5]
		const uintoDaHh6X = await SALESCONTRACTHZd5oMS._setStage.call(uintMilc0ZE, {from: accounts[3]});
//		const boolPdYOUoE = await SALESCONTRACTHZd5oMS.tokenSale.call(addressFiKKxIS, {from: accounts[5]});

		await expect(SALESCONTRACTHZd5oMS.tokenSale.call(addressFiKKxIS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})