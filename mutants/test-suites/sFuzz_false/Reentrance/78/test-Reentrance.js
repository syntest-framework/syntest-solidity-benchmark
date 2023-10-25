const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceccnwKWw = await Reentrance.new({from: accounts[2]});
		const addresszIJx20w = accounts[2]
		const uintxmGD3r8 = BigInt("1938")
		const uintZDKbaeM = BigInt("186")
		const uintVWDxOu = await ReentranceccnwKWw.balanceOf.call(addresszIJx20w, {from: accounts[1]});
		const uintDqAr0NY = await ReentranceccnwKWw.withdraw.call(uintxmGD3r8, {from: accounts[2]});
		const uintzxJyQRS = await ReentranceccnwKWw.withdraw.call(uintZDKbaeM, {from: accounts[0]});

		assert.equal(uintVWDxOu, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceOalH8pN = await Reentrance.new({from: accounts[0]});
		const addressdyyMKdK = accounts[1]
		const addressZW78AtG = accounts[4]
		const addressAfquh0P = accounts[2]
		const addressSl04IrN = accounts[2]
		const uintOUYWftf = await ReentranceOalH8pN.balanceOf.call(addressdyyMKdK, {from: accounts[0]});
		const uintWRLmNM2 = await ReentranceOalH8pN.balanceOf.call(addressZW78AtG, {from: accounts[5]});
		const uintqLOAI4 = await ReentranceOalH8pN.balanceOf.call(addressAfquh0P, {from: accounts[2]});
		const uintpQ42O7 = await ReentranceOalH8pN.balanceOf.call(addressSl04IrN, {from: accounts[0]});
//		await ReentranceOalH8pN.topup.call({from: accounts[5]});

		assert.equal(uintOUYWftf, BigInt("0"))
		assert.equal(uintWRLmNM2, BigInt("0"))
		assert.equal(uintpQ42O7, BigInt("0"))
		assert.equal(uintqLOAI4, BigInt("0"))
		await expect(ReentranceOalH8pN.topup.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceVj4yPnv = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLqGYoTI = BigInt("1651")
		const uintHRw5mCz = BigInt("2023")
		const addressWRwuWES = accounts[5]
		const uintzzNuKlX = await ReentranceVj4yPnv.withdraw.call(uintLqGYoTI, {from: accounts[0]});
		const uintBt9ypVF = await ReentranceVj4yPnv.withdraw.call(uintHRw5mCz, {from: "0x0000000000000000000000000000000000000001"});
		const uintD4fYQ4k = await ReentranceVj4yPnv.balanceOf.call(addressWRwuWES, {from: accounts[5]});
	});
})