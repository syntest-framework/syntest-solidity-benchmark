const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const Reentrancee5xKKAN = await Reentrance.new({from: accounts[0]});
		const addressZdlzYD6 = accounts[5]
		const addressCFsuOt4 = accounts[5]
		const addressMrhrVkj = accounts[2]
		const addressCH3qrqe = accounts[1]
		const uintFWDutlP = await Reentrancee5xKKAN.balanceOf.call(addressZdlzYD6, {from: "0x0000000000000000000000000000000000000001"});
		const uintIO0jmxb = await Reentrancee5xKKAN.balanceOf.call(addressCFsuOt4, {from: accounts[5]});
		await Reentrancee5xKKAN.topup.call({from: accounts[5]});
		const uintFqKrz3l = await Reentrancee5xKKAN.balanceOf.call(addressMrhrVkj, {from: accounts[4]});
		const uintZhjEPbl = await Reentrancee5xKKAN.balanceOf.call(addressCH3qrqe, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintFWDutlP, BigInt("0"))
		assert.equal(uintIO0jmxb, BigInt("0"))
		await expect(Reentrancee5xKKAN.topup.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const Reentrancez0xqZYn = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvRxluLZ = BigInt("995")
		const addressZcyQPw = accounts[2]
		const uintq6X6D5A = BigInt("379")
		const uintt9f2YjV = BigInt("499")
		await Reentrancez0xqZYn.topup.call({from: accounts[1]});
		const uintWAElbVh = await Reentrancez0xqZYn.withdraw.call(uintvRxluLZ, {from: accounts[1]});
		const uintJUmGPbC = await Reentrancez0xqZYn.balanceOf.call(addressZcyQPw, {from: accounts[0]});
		const uintRfdeiV = await Reentrancez0xqZYn.withdraw.call(uintq6X6D5A, {from: "0x0000000000000000000000000000000000000001"});
		const uintqVrB9u = await Reentrancez0xqZYn.withdraw.call(uintt9f2YjV, {from: accounts[3]});
	});

	it('test for Reentrance', async () => {
		const Reentranceb0p38qy = await Reentrance.new({from: accounts[5]});
		const uintRg4vnrD = BigInt("285")
		const uintrpOtQq2 = BigInt("1064")
		const uintxGE2qf9 = await Reentranceb0p38qy.withdraw.call(uintRg4vnrD, {from: accounts[5]});
		const uintXfCurMc = await Reentranceb0p38qy.withdraw.call(uintrpOtQq2, {from: accounts[1]});
	});
})