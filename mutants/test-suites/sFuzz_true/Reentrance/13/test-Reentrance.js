const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceBIbxU0e = await Reentrance.new({from: accounts[5]});
		const uintjOETnyk = BigInt("1022")
//		await ReentranceBIbxU0e.topup.call({from: accounts[4]});
		await ReentranceBIbxU0e.topup.call({from: accounts[4]});
//		const uintZ2HeSYn = await ReentranceBIbxU0e.withdraw.call(uintjOETnyk, {from: accounts[2]});

		await expect(ReentranceBIbxU0e.topup.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceDqvKd3Y = await Reentrance.new({from: accounts[2]});
		const uintMvVYp5c = BigInt("633")
		const addressbhtxIFe = accounts[3]
		const addressj7eGZRC = "0x0000000000000000000000000000000000000001"
//		await ReentranceDqvKd3Y.topup.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintq6moimV = await ReentranceDqvKd3Y.withdraw.call(uintMvVYp5c, {from: accounts[1]});
//		const uintTThgKc = await ReentranceDqvKd3Y.balanceOf.call(addressbhtxIFe, {from: accounts[5]});
//		const uintjgoxuOa = await ReentranceDqvKd3Y.balanceOf.call(addressj7eGZRC, {from: accounts[1]});

		await expect(ReentranceDqvKd3Y.topup.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceGZ6vZ6h = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscXTP7ty = accounts[3]
		const addressqYONPor = accounts[4]
		await ReentranceGZ6vZ6h.topup.call({from: accounts[1]});
		const uintdQqoDnS = await ReentranceGZ6vZ6h.balanceOf.call(addresscXTP7ty, {from: "0x0000000000000000000000000000000000000001"});
		const uintAMkolrK = await ReentranceGZ6vZ6h.balanceOf.call(addressqYONPor, {from: accounts[3]});
	});

	it('test for Reentrance', async () => {
		const ReentranceYUZJK9 = await Reentrance.new({from: accounts[4]});
		const addresseeHEAG = accounts[5]
		const addresscjom8Ep = accounts[4]
		const uintzDbwPP = BigInt("1153")
		const uintZb9Dl2x = BigInt("0")
		const addressHuqJwLI = accounts[0]
		const uintRRLwcH0 = await ReentranceYUZJK9.balanceOf.call(addresseeHEAG, {from: "0x0000000000000000000000000000000000000001"});
		const uintVwMJbWI = await ReentranceYUZJK9.balanceOf.call(addresscjom8Ep, {from: accounts[4]});
		const uintpAefUuA = await ReentranceYUZJK9.withdraw.call(uintzDbwPP, {from: accounts[4]});
		const uintFG1ZMz5 = await ReentranceYUZJK9.withdraw.call(uintZb9Dl2x, {from: accounts[2]});
		const uinty2qz966 = await ReentranceYUZJK9.balanceOf.call(addressHuqJwLI, {from: accounts[3]});

		assert.equal(uintRRLwcH0, BigInt("0"))
		assert.equal(uintVwMJbWI, BigInt("0"))
		assert.equal(uinty2qz966, BigInt("0"))
	});
})