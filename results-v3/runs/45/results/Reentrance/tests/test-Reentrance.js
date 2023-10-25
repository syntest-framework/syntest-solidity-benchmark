const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentrancenVkFAz2 = await Reentrance.new({from: accounts[2]});
		const addresskFV1mPL = accounts[2]
		const uintduE8d1B = BigInt("153")
		const uinteLHLZr7 = BigInt("169")
		const addressrp1wPA = accounts[1]
		const uintPm2A0Rs = BigInt("1467")
		const uintw4POCHR = await ReentrancenVkFAz2.balanceOf.call(addresskFV1mPL, {from: accounts[0]});
		const uintiijtjPo = await ReentrancenVkFAz2.withdraw.call(uintduE8d1B, {from: accounts[0]});
		const uintpOKTzkh = await ReentrancenVkFAz2.withdraw.call(uinteLHLZr7, {from: accounts[1]});
		const uintuJaZGH9 = await ReentrancenVkFAz2.balanceOf.call(addressrp1wPA, {from: accounts[0]});
		const uintIByhJzS = await ReentrancenVkFAz2.withdraw.call(uintPm2A0Rs, {from: accounts[4]});

		assert.equal(uintuJaZGH9, BigInt("0"))
		assert.equal(uintw4POCHR, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceIYMJIl1 = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfHY7ur = BigInt("722")
		const uintgOVANnI = BigInt("743")
		const addressD8ipQkc = accounts[2]
		const uintEUfnMf = await ReentranceIYMJIl1.withdraw.call(uintfHY7ur, {from: accounts[3]});
		const uintLCURWdw = await ReentranceIYMJIl1.withdraw.call(uintgOVANnI, {from: accounts[1]});
		const uintc3p0Cb = await ReentranceIYMJIl1.balanceOf.call(addressD8ipQkc, {from: accounts[3]});
	});

	it('test for Reentrance', async () => {
		const ReentrancemvySC7k = await Reentrance.new({from: accounts[4]});
		const addressVFsTlC6 = accounts[5]
		const addressqlviHlO = accounts[0]
		const addressuqvAi74 = accounts[3]
		const uintXV6vR5R = await ReentrancemvySC7k.balanceOf.call(addressVFsTlC6, {from: accounts[0]});
		await ReentrancemvySC7k.topup.call({from: accounts[3]});
		await ReentrancemvySC7k.topup.call({from: accounts[3]});
		const uintDqBBtPB = await ReentrancemvySC7k.balanceOf.call(addressqlviHlO, {from: accounts[2]});
		const uintoVblpnR = await ReentrancemvySC7k.balanceOf.call(addressuqvAi74, {from: accounts[5]});

		assert.equal(uintXV6vR5R, BigInt("0"))
		await expect(ReentrancemvySC7k.topup.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})