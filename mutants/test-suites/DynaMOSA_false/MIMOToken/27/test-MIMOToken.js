const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenpHxf4n4 = await MIMOToken.new({from: accounts[0]});
		const uintFmL1KjU = BigInt("864")
		const addressCRGEyQv = accounts[3]
		const addressJVDHrUp = accounts[0]
		const addressGuxVfMF = accounts[0]
		const addressgBx8sdj = accounts[0]
//		const boolKiWmZR = await MIMOTokenpHxf4n4.transferFrom.call(addressJVDHrUp, addressCRGEyQv, uintFmL1KjU, {from: accounts[2]});
//		const uintMyswS71 = await MIMOTokenpHxf4n4.allowance.call(addressgBx8sdj, addressGuxVfMF, {from: accounts[0]});

		await expect(MIMOTokenpHxf4n4.transferFrom.call(addressJVDHrUp, addressCRGEyQv, uintFmL1KjU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenp0nM94h = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyOv9nue = BigInt("1059")
		const uint4gry3D = BigInt("1760")
		const addressN5i2Gmt = accounts[4]
		const uint6JiC7X = BigInt("1246")
		const addressTu2kU0 = accounts[4]
		const uintb6XOwuF = BigInt("2013")
		const uintLyJiqjk = BigInt("1691")
		const addressrce7LFi = "0x0000000000000000000000000000000000000001"
		const uint256hN4EW5l = await MIMOTokenp0nM94h.getFee.call(uintyOv9nue, {from: accounts[0]});
		const boolr1IhvKZ = await MIMOTokenp0nM94h.approve.call(addressN5i2Gmt, uint4gry3D, {from: accounts[3]});
		const boolYD8pKAE = await MIMOTokenp0nM94h.approve.call(addressTu2kU0, uint6JiC7X, {from: accounts[3]});
		const uint256vBzbqhW = await MIMOTokenp0nM94h.setFeeRate.call(uintb6XOwuF, {from: accounts[0]});
		const booltkBXnpm = await MIMOTokenp0nM94h.approve.call(addressrce7LFi, uintLyJiqjk, {from: accounts[1]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenfqQsR9Y = await MIMOToken.new({from: accounts[5]});
		const uintcokAp4 = BigInt("1883")
		const addressLwfAzxa = accounts[0]
		const uint0xzK4m = BigInt("8")
		const addressUzL5sIf = accounts[4]
		const addressVrFQctg = accounts[2]
		const uintH70U6sL = BigInt("886")
		const uinteQ82uKl = BigInt("1556")
		const boolkBmhXY1 = await MIMOTokenfqQsR9Y.approve.call(addressLwfAzxa, uintcokAp4, {from: accounts[1]});
		const uint256aEYvcWi = await MIMOTokenfqQsR9Y.setMinFee.call(uint0xzK4m, {from: accounts[1]});
		const uintjV1cnCl = await MIMOTokenfqQsR9Y.allowance.call(addressVrFQctg, addressUzL5sIf, {from: accounts[3]});
		const uint256Bu9ofz6 = await MIMOTokenfqQsR9Y.setMinFee.call(uintH70U6sL, {from: accounts[1]});
		const uint256QwnQYns = await MIMOTokenfqQsR9Y.setFeeRate.call(uinteQ82uKl, {from: accounts[4]});
		const uintIfxIWd = await MIMOTokenfqQsR9Y.totalSupply.call({from: accounts[5]});

		assert.equal(boolkBmhXY1, true)
		assert.equal(uintIfxIWd, BigInt("16000000000000000000000000"))
		assert.equal(uintjV1cnCl, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOToken53jUkq = await MIMOToken.new({from: accounts[2]});
		const addressMbUdyJT = accounts[5]
		const uintavZi0gx = BigInt("334")
		const addressvDEdvu5 = accounts[2]
		const uintMtXHez9 = BigInt("1075")
		const uintQ6oFjVM = BigInt("379")
		const addressBWL7iP0 = accounts[2]
		const uintAMgWu2p = await MIMOToken53jUkq.balanceOf.call(addressMbUdyJT, {from: accounts[4]});
		const uintMoaalyN = await MIMOToken53jUkq.totalSupply.call({from: accounts[0]});
		const booljOhyOfD = await MIMOToken53jUkq.approve.call(addressvDEdvu5, uintavZi0gx, {from: accounts[3]});
		const uint256tW0oSKu = await MIMOToken53jUkq.setFeeRate.call(uintMtXHez9, {from: accounts[4]});
		const uintPZaNilO = await MIMOToken53jUkq.totalSupply.call({from: accounts[0]});
		const boolYdXZfkR = await MIMOToken53jUkq.approve.call(addressBWL7iP0, uintQ6oFjVM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolYdXZfkR, true)
		assert.equal(booljOhyOfD, true)
		assert.equal(uintAMgWu2p, BigInt("0"))
		assert.equal(uintMoaalyN, BigInt("16000000000000000000000000"))
		assert.equal(uintPZaNilO, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokensBFXzIV = await MIMOToken.new({from: accounts[2]});
		const uintNmO9nWh = BigInt("1318")
		const addresswxnkBZm = accounts[1]
		const addressQgVtiKI = accounts[5]
		const uintlMxCHf8 = BigInt("290")
		const addresssDleybc = accounts[0]
		const addressy3xZd6 = accounts[3]
		const uints44x7b = BigInt("1002")
//		const boolPX6KHYJ = await MIMOTokensBFXzIV.transfer.call(addresswxnkBZm, uintNmO9nWh, {from: accounts[2]});
//		const uintOPmJPsD = await MIMOTokensBFXzIV.balanceOf.call(addressQgVtiKI, {from: accounts[2]});
//		const boolPUSEto = await MIMOTokensBFXzIV.transferFrom.call(addressy3xZd6, addresssDleybc, uintlMxCHf8, {from: accounts[0]});
//		const uint256QhGYXmP = await MIMOTokensBFXzIV.getFee.call(uints44x7b, {from: accounts[1]});

		await expect(MIMOTokensBFXzIV.transfer.call(addresswxnkBZm, uintNmO9nWh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenqXOCuSx = await MIMOToken.new({from: accounts[3]});
		const addressqvrMzMr = accounts[0]
		const uintSR9odF6 = BigInt("355")
		const uintJS3qSG = BigInt("443")
		const uintvdJbLon = BigInt("1581")
		const uintmKx3qqy = BigInt("612")
		const addressdE5lP8x = accounts[2]
		const uintkqg5BnB = await MIMOTokenqXOCuSx.balanceOf.call(addressqvrMzMr, {from: accounts[0]});
		const uint256VJ2NFVh = await MIMOTokenqXOCuSx.setFeeRate.call(uintSR9odF6, {from: accounts[4]});
		const uint2563XZn6f = await MIMOTokenqXOCuSx.getFee.call(uintJS3qSG, {from: accounts[0]});
		const uint256QCEew9a = await MIMOTokenqXOCuSx.setFeeRate.call(uintvdJbLon, {from: accounts[5]});
//		const boolu6jYXkP = await MIMOTokenqXOCuSx.transfer.call(addressdE5lP8x, uintmKx3qqy, {from: accounts[5]});

		assert.equal(uint2563XZn6f, BigInt("50000000000000000"))
		assert.equal(uintkqg5BnB, BigInt("0"))
		await expect(MIMOTokenqXOCuSx.transfer.call(addressdE5lP8x, uintmKx3qqy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})