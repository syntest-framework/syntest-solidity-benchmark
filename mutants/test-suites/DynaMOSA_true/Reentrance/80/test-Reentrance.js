const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentrancelZDLBRK = await Reentrance.new({from: accounts[5]});
		const uintHW3LWtk = BigInt("380")
		const addressTTnJabc = accounts[2]
		const addressfivd6Kl = accounts[2]
		const uintBaFoIQP = BigInt("1993")
		const addressrBjnrO7 = accounts[1]
		const uintPg5iRqR = await ReentrancelZDLBRK.withdraw.call(uintHW3LWtk, {from: accounts[0]});
		const uintOPj0uY = await ReentrancelZDLBRK.balanceOf.call(addressTTnJabc, {from: accounts[1]});
		const uintRiEPcLX = await ReentrancelZDLBRK.balanceOf.call(addressfivd6Kl, {from: accounts[1]});
		const uintgZEJGc = await ReentrancelZDLBRK.withdraw.call(uintBaFoIQP, {from: accounts[5]});
		const uinttuG1qER = await ReentrancelZDLBRK.balanceOf.call(addressrBjnrO7, {from: accounts[1]});

		assert.equal(uintOPj0uY, BigInt("0"))
		assert.equal(uintRiEPcLX, BigInt("0"))
		assert.equal(uinttuG1qER, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceEqBV12T = await Reentrance.new({from: accounts[0]});
		const address8COBzn = accounts[3]
		const uint54ZRTG = BigInt("1710")
//		await ReentranceEqBV12T.topup.call({from: accounts[5]});
//		await ReentranceEqBV12T.topup.call({from: accounts[0]});
//		const uintJUvKV8E = await ReentranceEqBV12T.balanceOf.call(address8COBzn, {from: accounts[0]});
//		const uintXV8MIy = await ReentranceEqBV12T.withdraw.call(uint54ZRTG, {from: accounts[2]});

		await expect(ReentranceEqBV12T.topup.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentrancedqC0wxg = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFJ3olWS = BigInt("1082")
		const uintPlZVUv = BigInt("1513")
		const addressVId4z0Q = accounts[2]
		const addressoF1uoD6 = "0x0000000000000000000000000000000000000001"
		const uintUvMjuV = await ReentrancedqC0wxg.withdraw.call(uintFJ3olWS, {from: accounts[2]});
		const uinti5HFQoA = await ReentrancedqC0wxg.withdraw.call(uintPlZVUv, {from: accounts[3]});
		const uintw2I6brS = await ReentrancedqC0wxg.balanceOf.call(addressVId4z0Q, {from: accounts[1]});
		const uintP0gdk2U = await ReentrancedqC0wxg.balanceOf.call(addressoF1uoD6, {from: accounts[2]});
	});
})