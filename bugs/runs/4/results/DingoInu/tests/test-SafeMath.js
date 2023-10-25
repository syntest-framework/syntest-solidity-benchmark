const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractT4HzDdN = await SafeMath.new({from: accounts[4]});
		const bMcZjTiI = BigInt("309")
		const agpeMP3Z = BigInt("1421")
		const brX6QTpL = BigInt("1185")
		const adDrxPC9 = BigInt("953")
		const clDJjnSh = await contractT4HzDdN.safeSub.call(agpeMP3Z, bMcZjTiI, {from: accounts[3]});
		const cGV3NW2h = await contractT4HzDdN.safeSub.call(adDrxPC9, brX6QTpL, {from: accounts[3]});

		assert.equal(clDJjnSh, 1112)
		await expect(contractT4HzDdN.safeSub.call(adDrxPC9, brX6QTpL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractzBl3mLE = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bcCZVfIY = BigInt("374")
		const aTin0DqM = BigInt("1740")
		const bgmXfnu5 = BigInt("1168")
		const aPX9Ycd = BigInt("206")
		const bDWAG37g = BigInt("1857")
		const aPGOtmfp = BigInt("280")
		const bQtHVTen = BigInt("1041")
		const aQS6ASgC = BigInt("87")
		const boFn8qQ5 = BigInt("361")
		const aggoO1K7 = BigInt("274")
		const cbXiUJdF = await contractzBl3mLE.safeMul.call(aTin0DqM, bcCZVfIY, {from: accounts[4]});
		const cZVqNiB = await contractzBl3mLE.safeMul.call(aPX9Ycd, bgmXfnu5, {from: accounts[0]});
		const cr3gfxco = await contractzBl3mLE.safeMul.call(aPGOtmfp, bDWAG37g, {from: accounts[0]});
		const cHYU35g = await contractzBl3mLE.safeSub.call(aQS6ASgC, bQtHVTen, {from: accounts[4]});
		const cPNCk9y = await contractzBl3mLE.safeAdd.call(aggoO1K7, boFn8qQ5, {from: accounts[3]});
	});
})