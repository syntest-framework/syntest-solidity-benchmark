const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceHOeqoPE = await Reentrance.new({from: accounts[4]});
		const uintBhvvxrW = BigInt("598")
		const addressyhsoCV = accounts[1]
		const addressHqsDo16 = accounts[4]
		const uintNu91tVY = await ReentranceHOeqoPE.withdraw.call(uintBhvvxrW, {from: accounts[0]});
		const uintFqApA2m = await ReentranceHOeqoPE.balanceOf.call(addressyhsoCV, {from: "0x0000000000000000000000000000000000000001"});
		const uintgUOzkpR = await ReentranceHOeqoPE.balanceOf.call(addressHqsDo16, {from: accounts[4]});

		assert.equal(uintFqApA2m, BigInt("0"))
		assert.equal(uintgUOzkpR, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentrancewnzZa7m = await Reentrance.new({from: accounts[2]});
		const addressa3D9Qc2 = "0x0000000000000000000000000000000000000001"
		const uintdR2SLas = BigInt("1176")
//		await ReentrancewnzZa7m.topup.call({from: accounts[3]});
//		const uintZjbs3y = await ReentrancewnzZa7m.balanceOf.call(addressa3D9Qc2, {from: accounts[3]});
//		const uintMlykL5K = await ReentrancewnzZa7m.withdraw.call(uintdR2SLas, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReentrancewnzZa7m.topup.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentrancebvQoqh = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGNDlosE = accounts[5]
		const uintL7IpVIJ = BigInt("1037")
		const addressygkGEjE = accounts[3]
		const uintH9LEBM1 = await ReentrancebvQoqh.balanceOf.call(addressGNDlosE, {from: accounts[1]});
		const uintYWUNlt4 = await ReentrancebvQoqh.withdraw.call(uintL7IpVIJ, {from: accounts[1]});
		await ReentrancebvQoqh.topup.call({from: "0x0000000000000000000000000000000000000001"});
		const uintXrZqyO0 = await ReentrancebvQoqh.balanceOf.call(addressygkGEjE, {from: accounts[2]});
	});
})