const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceUEP7aAd = await Reentrance.new({from: accounts[4]});
		const addressVPYSM0P = accounts[0]
		const uintFdKpyZ2 = BigInt("1164")
		const addressnoneDw = accounts[5]
		const uintNwDDpom = await ReentranceUEP7aAd.balanceOf.call(addressVPYSM0P, {from: accounts[1]});
		const uintctW5waJ = await ReentranceUEP7aAd.withdraw.call(uintFdKpyZ2, {from: accounts[0]});
		await ReentranceUEP7aAd.topup.call({from: accounts[4]});
		await ReentranceUEP7aAd.topup.call({from: accounts[3]});
		const uintSq2OKrI = await ReentranceUEP7aAd.balanceOf.call(addressnoneDw, {from: accounts[4]});

		assert.equal(uintNwDDpom, BigInt("0"))
		await expect(ReentranceUEP7aAd.topup.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentrancexylZBZ = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHHSGgDL = BigInt("1345")
		const uintRGqUpI = BigInt("1215")
		const uintotPXdps = await ReentrancexylZBZ.withdraw.call(uintHHSGgDL, {from: accounts[0]});
		const uintaoWeqfj = await ReentrancexylZBZ.withdraw.call(uintRGqUpI, {from: "0x0000000000000000000000000000000000000001"});
	});
})