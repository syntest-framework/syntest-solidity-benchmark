const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const Reentrancels9ZMx = await Reentrance.new({from: accounts[1]});
		const addressjhxkO32 = accounts[3]
		const uinti14I221 = BigInt("123")
		const uinttpvKcFo = BigInt("186")
		const uinthl7t5kS = BigInt("1733")
		const addressbiZlzJh = accounts[1]
		const uintm6rgzo = await Reentrancels9ZMx.balanceOf.call(addressjhxkO32, {from: accounts[3]});
		const uintGNIm8qO = await Reentrancels9ZMx.withdraw.call(uinti14I221, {from: accounts[0]});
		const uintv4icuU = await Reentrancels9ZMx.withdraw.call(uinttpvKcFo, {from: accounts[4]});
		const uintEZb04m2 = await Reentrancels9ZMx.withdraw.call(uinthl7t5kS, {from: accounts[3]});
//		await Reentrancels9ZMx.topup.call({from: accounts[3]});
//		const uintwT7VEe9 = await Reentrancels9ZMx.balanceOf.call(addressbiZlzJh, {from: accounts[1]});

		assert.equal(uintm6rgzo, BigInt("0"))
		await expect(Reentrancels9ZMx.topup.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentrancefUfSB9B = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJlLi6W = BigInt("1571")
		await ReentrancefUfSB9B.topup.call({from: accounts[3]});
		await ReentrancefUfSB9B.topup.call({from: accounts[0]});
		const uintDNx88PR = await ReentrancefUfSB9B.withdraw.call(uintJlLi6W, {from: accounts[1]});
	});
})