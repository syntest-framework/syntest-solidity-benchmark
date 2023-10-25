const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceRbuCmgz = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addresszlqSXTS = accounts[4]
		const addressafXMxal = accounts[0]
		await ReentranceRbuCmgz.topup.call({from: accounts[0]});
		await ReentranceRbuCmgz.topup.call({from: accounts[4]});
		await ReentranceRbuCmgz.topup.call({from: accounts[2]});
		const uint5ecT0P = await ReentranceRbuCmgz.balanceOf.call(addresszlqSXTS, {from: "0x0000000000000000000000000000000000000001"});
		await ReentranceRbuCmgz.topup.call({from: accounts[0]});
		const uinteAyU5dg = await ReentranceRbuCmgz.balanceOf.call(addressafXMxal, {from: accounts[3]});
	});

	it('test for Reentrance', async () => {
		const Reentranceofj7bup = await Reentrance.new({from: accounts[4]});
		const uintsiLSftT = BigInt("728")
		const addressFrOcgm = accounts[3]
		const uintmbfz9io = await Reentranceofj7bup.withdraw.call(uintsiLSftT, {from: accounts[4]});
		const uintkKGkZDg = await Reentranceofj7bup.balanceOf.call(addressFrOcgm, {from: accounts[0]});
//		await Reentranceofj7bup.topup.call({from: accounts[3]});

		assert.equal(uintkKGkZDg, BigInt("0"))
		await expect(Reentranceofj7bup.topup.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})