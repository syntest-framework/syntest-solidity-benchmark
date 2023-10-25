const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceKLfKf4 = await Reentrance.new({from: accounts[1]});
		const addressWr9iRHJ = accounts[3]
		const addressf4hL6RW = accounts[4]
		const addressbCHWg72 = accounts[0]
		const uintcwmWq2J = await ReentranceKLfKf4.balanceOf.call(addressWr9iRHJ, {from: accounts[2]});
		const uintGZbi2ML = await ReentranceKLfKf4.balanceOf.call(addressf4hL6RW, {from: accounts[0]});
//		await ReentranceKLfKf4.topup.call({from: accounts[0]});
//		const uintrBj0hyh = await ReentranceKLfKf4.balanceOf.call(addressbCHWg72, {from: accounts[4]});

		assert.equal(uintGZbi2ML, BigInt("0"))
		assert.equal(uintcwmWq2J, BigInt("0"))
		await expect(ReentranceKLfKf4.topup.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceMelKeLU = await Reentrance.new({from: accounts[3]});
		const uintj3a8M88 = BigInt("311")
		const uintWloTiKR = BigInt("1516")
		const uinty5f906i = await ReentranceMelKeLU.withdraw.call(uintj3a8M88, {from: accounts[3]});
		const uintyxu6ZUE = await ReentranceMelKeLU.withdraw.call(uintWloTiKR, {from: accounts[1]});
	});

	it('test for Reentrance', async () => {
		const ReentranceLMjbGZx = await Reentrance.new({from: accounts[4]});
		const addressSOKvRpE = "0x00000000000000000000000000000000000000-1"
		const uintH7J3Lsn = BigInt("579")
		const addressBsGImBw = accounts[5]
//		const uintijG6J9g = await ReentranceLMjbGZx.balanceOf.call(addressSOKvRpE, {from: accounts[1]});
//		const uintVvPQT2X = await ReentranceLMjbGZx.withdraw.call(uintH7J3Lsn, {from: accounts[3]});
//		const uinturWVhTv = await ReentranceLMjbGZx.balanceOf.call(addressBsGImBw, {from: accounts[4]});

		await expect(ReentranceLMjbGZx.balanceOf.call(addressSOKvRpE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const Reentrancepg3BhWd = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPpkmdjm = BigInt("1899")
		const uinta8DbQHk = await Reentrancepg3BhWd.withdraw.call(uintPpkmdjm, {from: accounts[0]});
		await Reentrancepg3BhWd.topup.call({from: accounts[2]});
	});
})