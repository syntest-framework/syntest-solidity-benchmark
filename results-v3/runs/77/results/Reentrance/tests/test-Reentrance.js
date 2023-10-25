const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceXZLPa47 = await Reentrance.new({from: accounts[0]});
		const uintMkBJ5i6 = BigInt("879")
		const addressDnipL2I = accounts[3]
		const uintiqlltUb = await ReentranceXZLPa47.withdraw.call(uintMkBJ5i6, {from: accounts[0]});
		const uintfTsOXui = await ReentranceXZLPa47.balanceOf.call(addressDnipL2I, {from: accounts[0]});

		assert.equal(uintfTsOXui, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceIb4YHBI = await Reentrance.new({from: accounts[3]});
		const uintVzrjX3d = BigInt("659")
		const addressn2xxf6O = accounts[0]
		await ReentranceIb4YHBI.topup.call({from: accounts[3]});
		await ReentranceIb4YHBI.topup.call({from: accounts[0]});
		const uintyfxWg0j = await ReentranceIb4YHBI.withdraw.call(uintVzrjX3d, {from: accounts[5]});
		const uintvDbyTBP = await ReentranceIb4YHBI.balanceOf.call(addressn2xxf6O, {from: accounts[5]});

		await expect(ReentranceIb4YHBI.topup.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceXZLPa47 = await Reentrance.new({from: accounts[0]});
		const uintsEvY8BW = BigInt("898")
		const addressktCBaqz = accounts[4]
		const addressej6sXm9 = accounts[1]
		const uintpQ8l8tX = BigInt("0")
		const uintiqlltUb = await ReentranceXZLPa47.withdraw.call(uintsEvY8BW, {from: accounts[0]});
		const uintP53Vq6 = await ReentranceXZLPa47.balanceOf.call(addressktCBaqz, {from: accounts[2]});
		const uintzdjnGxq = await ReentranceXZLPa47.balanceOf.call(addressej6sXm9, {from: accounts[0]});
		const uintKXaqvGb = await ReentranceXZLPa47.withdraw.call(uintpQ8l8tX, {from: accounts[2]});

		assert.equal(uintP53Vq6, BigInt("0"))
		assert.equal(uintzdjnGxq, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentrancevEALKc = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressU54AZlm = "0x0000000000000000000000000000000000000001"
		const addressf6ElPYZ = "0x0000000000000000000000000000000000000001"
		const addressBFz6THf = accounts[1]
		const uintiEdX1VD = await ReentrancevEALKc.balanceOf.call(addressU54AZlm, {from: accounts[3]});
		const uintuxYPs0B = await ReentrancevEALKc.balanceOf.call(addressf6ElPYZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintiHdUQmr = await ReentrancevEALKc.balanceOf.call(addressBFz6THf, {from: accounts[1]});
	});
})