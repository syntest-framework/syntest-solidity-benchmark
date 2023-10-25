const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const Reentrance9ZmYiW = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressotozCTm = accounts[1]
		const uintg00AYLb = BigInt("1999")
		const uintwmiYDCZ = await Reentrance9ZmYiW.balanceOf.call(addressotozCTm, {from: accounts[2]});
		const uintx1z0rhM = await Reentrance9ZmYiW.withdraw.call(uintg00AYLb, {from: accounts[4]});
	});

	it('test for Reentrance', async () => {
		const ReentranceQkEXGLU = await Reentrance.new({from: accounts[1]});
		const addressm3EhzHD = "0x0000000000000000000000000000000000000001"
		const addresse4HSl9P = accounts[3]
		const addressHkDa8Y = accounts[3]
		const addressCNc4Nlk = accounts[1]
		const uintGkgGhKp = await ReentranceQkEXGLU.balanceOf.call(addressm3EhzHD, {from: accounts[3]});
		const uintLbn0S9E = await ReentranceQkEXGLU.balanceOf.call(addresse4HSl9P, {from: accounts[3]});
		const uintNcXUdYX = await ReentranceQkEXGLU.balanceOf.call(addressHkDa8Y, {from: accounts[2]});
		const uintqfM3Z5D = await ReentranceQkEXGLU.balanceOf.call(addressCNc4Nlk, {from: accounts[0]});

		assert.equal(uintGkgGhKp, BigInt("0"))
		assert.equal(uintLbn0S9E, BigInt("0"))
		assert.equal(uintNcXUdYX, BigInt("0"))
		assert.equal(uintqfM3Z5D, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceFvfN0z = await Reentrance.new({from: accounts[4]});
		const uintkP03y27 = BigInt("823")
		const uintjRwek3Y = BigInt("774")
		const addressSQTFHUN = accounts[1]
		const uintYUH30eE = await ReentranceFvfN0z.withdraw.call(uintkP03y27, {from: accounts[4]});
//		await ReentranceFvfN0z.topup.call({from: accounts[1]});
//		const uinty6B6T2F = await ReentranceFvfN0z.withdraw.call(uintjRwek3Y, {from: accounts[3]});
//		const uintYh2RrOt = await ReentranceFvfN0z.balanceOf.call(addressSQTFHUN, {from: accounts[1]});

		await expect(ReentranceFvfN0z.topup.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceFvfN0z = await Reentrance.new({from: accounts[4]});
		const uintZefmXzO = BigInt("823")
		const uintaNlsIhP = BigInt("774")
		const uintRVFGMWy = BigInt("0")
		const addressSq18KqW = accounts[2]
		const uintYUH30eE = await ReentranceFvfN0z.withdraw.call(uintZefmXzO, {from: accounts[4]});
//		await ReentranceFvfN0z.topup.call({from: accounts[1]});
//		const uinty6B6T2F = await ReentranceFvfN0z.withdraw.call(uintaNlsIhP, {from: accounts[3]});
//		const uintbS9kQNi = await ReentranceFvfN0z.withdraw.call(uintRVFGMWy, {from: accounts[0]});
//		const uintYh2RrOt = await ReentranceFvfN0z.balanceOf.call(addressSq18KqW, {from: accounts[1]});

		await expect(ReentranceFvfN0z.topup.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})