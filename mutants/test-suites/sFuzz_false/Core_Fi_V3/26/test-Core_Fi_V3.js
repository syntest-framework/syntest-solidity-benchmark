const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3b6CSffL = await Core_Fi_V3.new({from: accounts[1]});
		const uintAHkDTJ = BigInt("1948")
		const addressVkl39N = "0x0000000000000000000000000000000000000001"
		const addresseRK17B = accounts[1]
		const addressTJdywri = accounts[5]
		const addressZoYb5A4 = accounts[0]
		const addressjzamyBC = accounts[0]
		const addressqQJ3VCV = accounts[3]
		const boolkcx51XV = await Core_Fi_V3b6CSffL.transferFrom.call(addresseRK17B, addressVkl39N, uintAHkDTJ, {from: accounts[3]});
		const uintJOGS0YR = await Core_Fi_V3b6CSffL.allowance.call(addressZoYb5A4, addressTJdywri, {from: accounts[1]});
		const uint256ElQTJEI = await Core_Fi_V3b6CSffL.totalSupply.call({from: accounts[2]});
		const uintoGQGMvq = await Core_Fi_V3b6CSffL.allowance.call(addressqQJ3VCV, addressjzamyBC, {from: accounts[3]});

		assert.equal(boolkcx51XV, false)
		assert.equal(uint256ElQTJEI, BigInt("84000000000000000000000"))
		assert.equal(uintJOGS0YR, BigInt("0"))
		assert.equal(uintoGQGMvq, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3j5szYoA = await Core_Fi_V3.new({from: accounts[2]});
		const uintr09orde = BigInt("1691")
		const addresspJqE6Nf = accounts[1]
		const addressYMC9W1W = accounts[1]
		const addresswDoSPaI = accounts[2]
		const boolKkvtg19 = await Core_Fi_V3j5szYoA.approve.call(addresspJqE6Nf, uintr09orde, {from: accounts[3]});
		const uintFNR99qg = await Core_Fi_V3j5szYoA.allowance.call(addresswDoSPaI, addressYMC9W1W, {from: accounts[4]});

		assert.equal(boolKkvtg19, true)
		assert.equal(uintFNR99qg, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3qLAPRi7 = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addresszrAUO3J = accounts[3]
		const addressOZqGW5 = accounts[4]
		const uintRcik0cs = BigInt("1013")
		const addressSh08l3B = accounts[3]
		const uinthHWbBMm = BigInt("350")
		const addressXJB1Yl = accounts[1]
		const addressaoYLwzI = accounts[4]
		const addresscpe8ZJH = accounts[4]
		const addresswYYvbT1 = accounts[4]
		const addressy8hh410 = accounts[1]
		const addresstR6hgPF = accounts[3]
		const uintgEKSbx = await Core_Fi_V3qLAPRi7.allowance.call(addressOZqGW5, addresszrAUO3J, {from: accounts[3]});
		const boolRuESSG1 = await Core_Fi_V3qLAPRi7.transfer.call(addressSh08l3B, uintRcik0cs, {from: accounts[4]});
		const boolgQtvcRJ = await Core_Fi_V3qLAPRi7.transferFrom.call(addressaoYLwzI, addressXJB1Yl, uinthHWbBMm, {from: accounts[3]});
		const uintVC9z1Ws = await Core_Fi_V3qLAPRi7.allowance.call(addresswYYvbT1, addresscpe8ZJH, {from: accounts[1]});
		const uint256nLBblO = await Core_Fi_V3qLAPRi7.balanceOf.call(addressy8hh410, {from: accounts[0]});
		const uint256hj15B3r = await Core_Fi_V3qLAPRi7.balanceOf.call(addresstR6hgPF, {from: accounts[2]});
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3UxTAGu = await Core_Fi_V3.new({from: accounts[4]});
		const uintzrclQGi = BigInt("1789")
		const addressPBA1lB = accounts[1]
		const addressdAztWaD = accounts[0]
		const uintfpvhWOa = BigInt("981")
		const addressmZmuzQT = accounts[1]
		const uintYnhA64h = BigInt("565")
		const addressAHm46He = accounts[0]
		const uintwHEwnaG = BigInt("428")
		const addressqLXx9I = accounts[2]
		const addressvtz4SQt = accounts[4]
		const boolV69nvxU = await Core_Fi_V3UxTAGu.transferFrom.call(addressdAztWaD, addressPBA1lB, uintzrclQGi, {from: accounts[0]});
		const boolLJBV3G = await Core_Fi_V3UxTAGu.approve.call(addressmZmuzQT, uintfpvhWOa, {from: accounts[4]});
		const uint256ZCkSbvd = await Core_Fi_V3UxTAGu.totalSupply.call({from: accounts[0]});
		const boolB8TwIgT = await Core_Fi_V3UxTAGu.transfer.call(addressAHm46He, uintYnhA64h, {from: accounts[1]});
		const boolqRWvSXZ = await Core_Fi_V3UxTAGu.transferFrom.call(addressvtz4SQt, addressqLXx9I, uintwHEwnaG, {from: accounts[0]});

		assert.equal(boolB8TwIgT, false)
		assert.equal(boolLJBV3G, true)
		assert.equal(boolV69nvxU, false)
		assert.equal(boolqRWvSXZ, false)
		assert.equal(uint256ZCkSbvd, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3gDB64T1 = await Core_Fi_V3.new({from: accounts[0]});
		const addressBOCaiGd = accounts[5]
		const addressEgrm0Wn = accounts[0]
		const uinto0tFSab = BigInt("1705")
		const addressEqtCmD2 = accounts[4]
		const addressoRIbKY = accounts[1]
		const addressQEijwU1 = accounts[0]
		const uint256H7z5JiI = await Core_Fi_V3gDB64T1.balanceOf.call(addressBOCaiGd, {from: accounts[0]});
		const uint256XzgbXWV = await Core_Fi_V3gDB64T1.balanceOf.call(addressEgrm0Wn, {from: "0x0000000000000000000000000000000000000001"});
		const boolfsq9eT7 = await Core_Fi_V3gDB64T1.approve.call(addressEqtCmD2, uinto0tFSab, {from: accounts[0]});
		const uint256hVkjKX3 = await Core_Fi_V3gDB64T1.totalSupply.call({from: accounts[4]});
		const uintLQMlJgu = await Core_Fi_V3gDB64T1.allowance.call(addressQEijwU1, addressoRIbKY, {from: accounts[3]});
		const uint256e6sI5NZ = await Core_Fi_V3gDB64T1.totalSupply.call({from: accounts[2]});

		assert.equal(boolfsq9eT7, true)
		assert.equal(uint256H7z5JiI, BigInt("0"))
		assert.equal(uint256XzgbXWV, BigInt("84000000000000000000000"))
		assert.equal(uint256e6sI5NZ, BigInt("84000000000000000000000"))
		assert.equal(uint256hVkjKX3, BigInt("84000000000000000000000"))
		assert.equal(uintLQMlJgu, BigInt("0"))
	});
})