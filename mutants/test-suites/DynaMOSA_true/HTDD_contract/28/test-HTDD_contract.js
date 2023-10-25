const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractbCqQgDG = await HTDD_contract.new({from: accounts[3]});
		const uintEoaALYj = BigInt("1329")
		const addressgrU0Sx = accounts[4]
		const addressIAvrU9V = accounts[4]
		const uintDiqdaZC = BigInt("40")
		const addressNklBdRX = accounts[0]
		const addressMoLQbe1 = accounts[2]
		const uintLQqYFQE = BigInt("95")
		const addressubpGZxQ = accounts[1]
//		const boolfm53wVZ = await HTDD_contractbCqQgDG.transferFrom.call(addressIAvrU9V, addressgrU0Sx, uintEoaALYj, {from: accounts[1]});
//		const boolRKDmqdn = await HTDD_contractbCqQgDG.transferFrom.call(addressMoLQbe1, addressNklBdRX, uintDiqdaZC, {from: "0x0000000000000000000000000000000000000001"});
//		const boolCxNjXSi = await HTDD_contractbCqQgDG.approve.call(addressubpGZxQ, uintLQqYFQE, {from: accounts[0]});

		await expect(HTDD_contractbCqQgDG.transferFrom.call(addressIAvrU9V, addressgrU0Sx, uintEoaALYj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractcqE93YB = await HTDD_contract.new({from: accounts[0]});
		const uintDtv2QZ4 = BigInt("351")
		const addresslnp4OvT = accounts[4]
		const addressw7SoPX0 = accounts[0]
		const uintp5VVG5H = BigInt("1680")
		const addressE9xkU3g = accounts[4]
		const addressKhi8ZvT = accounts[2]
//		const boolbcx2c3g = await HTDD_contractcqE93YB.transferFrom.call(addressw7SoPX0, addresslnp4OvT, uintDtv2QZ4, {from: accounts[1]});
//		const boolaoyPZrU = await HTDD_contractcqE93YB.transferFrom.call(addressKhi8ZvT, addressE9xkU3g, uintp5VVG5H, {from: accounts[5]});

		await expect(HTDD_contractcqE93YB.transferFrom.call(addressw7SoPX0, addresslnp4OvT, uintDtv2QZ4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractPwZQu8g = await HTDD_contract.new({from: accounts[0]});
		const addressTYsTObm = accounts[4]
		const addresskSFzptm = "0x0000000000000000000000000000000000000001"
		const addressF08Mv6P = accounts[1]
		const addresseOuZ4T = accounts[4]
		const uintHRYrzqh = BigInt("545")
		const addressXuKGrSz = accounts[3]
		const uint256XEIAyEr = await HTDD_contractPwZQu8g.allowance.call(addresskSFzptm, addressTYsTObm, {from: accounts[0]});
		const uint256ECmvANk = await HTDD_contractPwZQu8g.allowance.call(addresseOuZ4T, addressF08Mv6P, {from: accounts[1]});
		const boolwLxyiV4 = await HTDD_contractPwZQu8g.approve.call(addressXuKGrSz, uintHRYrzqh, {from: accounts[2]});

		assert.equal(boolwLxyiV4, true)
		assert.equal(uint256ECmvANk, BigInt("0"))
		assert.equal(uint256XEIAyEr, BigInt("0"))
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractzRXsD7N = await HTDD_contract.new({from: accounts[4]});
		const uintUFB265 = BigInt("1457")
		const addressB65xu7D = accounts[4]
		const uintC68auU = BigInt("207")
		const addressRov1WCf = accounts[5]
		const addresstA75wY0 = accounts[1]
		const uintWb9Y042 = BigInt("876")
		const addresscbScqhg = accounts[2]
		const addressg6njl7u = accounts[2]
		const addresszKvd8D = accounts[2]
		const addressijfcxOo = accounts[1]
//		const boolWyIzyN8 = await HTDD_contractzRXsD7N.transfer.call(addressB65xu7D, uintUFB265, {from: accounts[3]});
//		const boolxVKtVLQ = await HTDD_contractzRXsD7N.transferFrom.call(addresstA75wY0, addressRov1WCf, uintC68auU, {from: accounts[5]});
//		const boolgIy1mLQ = await HTDD_contractzRXsD7N.transferFrom.call(addressg6njl7u, addresscbScqhg, uintWb9Y042, {from: accounts[3]});
//		const uint256vT0tHV = await HTDD_contractzRXsD7N.allowance.call(addressijfcxOo, addresszKvd8D, {from: accounts[3]});

		await expect(HTDD_contractzRXsD7N.transfer.call(addressB65xu7D, uintUFB265, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractp0NIwKD = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRJBXfKP = BigInt("1712")
		const addresshXUS754 = accounts[5]
		const uintP5ZZoe = BigInt("177")
		const addressC7pfrY9 = accounts[0]
		const addressN8HHxXv = accounts[5]
		const boolhJYFHE = await HTDD_contractp0NIwKD.approve.call(addresshXUS754, uintRJBXfKP, {from: accounts[5]});
		const boolzpdgb6j = await HTDD_contractp0NIwKD.transferFrom.call(addressN8HHxXv, addressC7pfrY9, uintP5ZZoe, {from: accounts[1]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractWRbtzEa = await HTDD_contract.new({from: accounts[4]});
		const uintiGtm4Dq = BigInt("1421")
		const addressuWmDPOw = accounts[2]
		const uintfA8DzvZ = BigInt("1710")
		const addressGd65CIi = accounts[1]
		const uintllOY2IJ = BigInt("391")
		const addressHS2eQ1L = accounts[6]
		const boolXXK1MN6 = await HTDD_contractWRbtzEa.approve.call(addressuWmDPOw, uintiGtm4Dq, {from: accounts[3]});
		const boolaKdFgfC = await HTDD_contractWRbtzEa.approve.call(addressGd65CIi, uintfA8DzvZ, {from: accounts[4]});
		const booltv8lzAg = await HTDD_contractWRbtzEa.transfer.call(addressHS2eQ1L, uintllOY2IJ, {from: accounts[4]});

		assert.equal(boolXXK1MN6, true)
		assert.equal(boolaKdFgfC, true)
		assert.equal(booltv8lzAg, true)
	});
})