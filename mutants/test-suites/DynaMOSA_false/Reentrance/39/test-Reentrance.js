const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceoBlxeH2 = await Reentrance.new({from: accounts[3]});
		const uintz45Fwk2 = BigInt("1508")
		const addressqdWwKws = accounts[3]
		const addressPmhb1f7 = accounts[4]
		const uintWTSiFwq = await ReentranceoBlxeH2.withdraw.call(uintz45Fwk2, {from: accounts[4]});
		const uintV6vslSx = await ReentranceoBlxeH2.balanceOf.call(addressqdWwKws, {from: accounts[1]});
		const uintvL02RFM = await ReentranceoBlxeH2.balanceOf.call(addressPmhb1f7, {from: accounts[5]});

		assert.equal(uintV6vslSx, BigInt("0"))
		assert.equal(uintvL02RFM, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceCX9wtsF = await Reentrance.new({from: accounts[4]});
		const uintFoRgsdR = BigInt("404")
		const uintPlv2FEe = BigInt("663")
		const addressfRjrAH0 = accounts[0]
		const uints6UgA3x = await ReentranceCX9wtsF.withdraw.call(uintFoRgsdR, {from: accounts[4]});
//		await ReentranceCX9wtsF.topup.call({from: accounts[4]});
//		const uintYB7oml8 = await ReentranceCX9wtsF.withdraw.call(uintPlv2FEe, {from: accounts[5]});
//		const uintyXjxhzn = await ReentranceCX9wtsF.balanceOf.call(addressfRjrAH0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReentranceCX9wtsF.topup.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceTMNDdG6 = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFMtjh9f = accounts[1]
		const uintR0oFMHz = BigInt("1783")
		const uintAgP85H = BigInt("142")
		const uintZ0JaPKE = await ReentranceTMNDdG6.balanceOf.call(addressFMtjh9f, {from: accounts[5]});
		await ReentranceTMNDdG6.topup.call({from: accounts[1]});
		await ReentranceTMNDdG6.topup.call({from: accounts[0]});
		const uintqOP99tA = await ReentranceTMNDdG6.withdraw.call(uintR0oFMHz, {from: accounts[1]});
		const uintbMvodPT = await ReentranceTMNDdG6.withdraw.call(uintAgP85H, {from: accounts[0]});
	});
})