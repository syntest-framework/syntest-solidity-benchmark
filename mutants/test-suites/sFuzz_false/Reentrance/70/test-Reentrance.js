const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceqIWymDe = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqIlgAkI = accounts[2]
		const addressna5xAcE = accounts[2]
		const uintSTQ2E8x = BigInt("435")
		const uintCqKcsT = BigInt("1360")
		const addressJZjVMA7 = accounts[3]
		const addressfcNTfMJ = accounts[3]
		const uintWsfYThs = await ReentranceqIWymDe.balanceOf.call(addressqIlgAkI, {from: accounts[4]});
		const uintAmDhQRo = await ReentranceqIWymDe.balanceOf.call(addressna5xAcE, {from: accounts[3]});
		const uintFKlPWaS = await ReentranceqIWymDe.withdraw.call(uintSTQ2E8x, {from: accounts[4]});
		const uintv8qygnl = await ReentranceqIWymDe.withdraw.call(uintCqKcsT, {from: accounts[3]});
		const uintrzISg7q = await ReentranceqIWymDe.balanceOf.call(addressJZjVMA7, {from: accounts[2]});
		const uint25QzuT = await ReentranceqIWymDe.balanceOf.call(addressfcNTfMJ, {from: accounts[2]});
	});

	it('test for Reentrance', async () => {
		const Reentrancer8OkFCl = await Reentrance.new({from: accounts[0]});
		const addressdiOlyVQ = accounts[4]
		const addressCUKY1YA = accounts[2]
		const addresstjqze1j = accounts[1]
		const addresscAhs4HV = accounts[2]
		const uintqDR3TrW = await Reentrancer8OkFCl.balanceOf.call(addressdiOlyVQ, {from: accounts[3]});
		const uintt178cIq = await Reentrancer8OkFCl.balanceOf.call(addressCUKY1YA, {from: accounts[2]});
		const uintYjji6d = await Reentrancer8OkFCl.balanceOf.call(addresstjqze1j, {from: accounts[1]});
		const uintbz1E9W = await Reentrancer8OkFCl.balanceOf.call(addresscAhs4HV, {from: accounts[3]});

		assert.equal(uintYjji6d, BigInt("0"))
		assert.equal(uintbz1E9W, BigInt("0"))
		assert.equal(uintqDR3TrW, BigInt("0"))
		assert.equal(uintt178cIq, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceyHerBS = await Reentrance.new({from: accounts[4]});
		const uintwxkhQKN = BigInt("676")
		const uintUVNxYc = BigInt("1111")
//		await ReentranceyHerBS.topup.call({from: accounts[4]});
//		const uintgO3E2qb = await ReentranceyHerBS.withdraw.call(uintwxkhQKN, {from: accounts[0]});
//		const uintX9QZw4j = await ReentranceyHerBS.withdraw.call(uintUVNxYc, {from: accounts[0]});

		await expect(ReentranceyHerBS.topup.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})