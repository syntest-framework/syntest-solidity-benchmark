const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCESxzLOJ = await REXUNIFINANCE.new({from: accounts[0]});
		const uintEnqokFS = BigInt("1421")
		const addressWHLTVR = accounts[1]
		const addressOuXBywa = accounts[2]
		const addressbrtkY8R = accounts[3]
		const boolntPAcPs = await REXUNIFINANCESxzLOJ.increaseApproval.call(addressWHLTVR, uintEnqokFS, {from: accounts[0]});
		const uint256xJHk9SP = await REXUNIFINANCESxzLOJ.allowance.call(addressbrtkY8R, addressOuXBywa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolntPAcPs, true)
		assert.equal(uint256xJHk9SP, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEdHi8Tvr = await REXUNIFINANCE.new({from: accounts[3]});
		const addressuQBXyOn = accounts[2]
		const uintKDTbPeh = BigInt("1572")
		const addressecb0bAX = accounts[2]
		const uintFQtvfbo = BigInt("993")
		const addressEaWFAM0 = accounts[0]
		const uintMY6mSQj = BigInt("1585")
		const addressHxSUbJn = accounts[0]
		const uintYpcto09 = BigInt("1358")
		const addressp8D8auE = accounts[2]
		const addressLDVnV7u = "0x0000000000000000000000000000000000000001"
		const uint256zPp6Zem = await REXUNIFINANCEdHi8Tvr.balanceOf.call(addressuQBXyOn, {from: accounts[4]});
		const booltGNDJH3 = await REXUNIFINANCEdHi8Tvr.decreaseApproval.call(addressecb0bAX, uintKDTbPeh, {from: accounts[0]});
		const boolVTKCL0O = await REXUNIFINANCEdHi8Tvr.approve.call(addressEaWFAM0, uintFQtvfbo, {from: accounts[5]});
		const boolZCStcNM = await REXUNIFINANCEdHi8Tvr.approve.call(addressHxSUbJn, uintMY6mSQj, {from: accounts[1]});
//		const boolpuxhvVu = await REXUNIFINANCEdHi8Tvr.transferFrom.call(addressLDVnV7u, addressp8D8auE, uintYpcto09, {from: accounts[1]});

		assert.equal(boolVTKCL0O, true)
		assert.equal(boolZCStcNM, true)
		assert.equal(booltGNDJH3, true)
		assert.equal(uint256zPp6Zem, BigInt("0"))
		await expect(REXUNIFINANCEdHi8Tvr.transferFrom.call(addressLDVnV7u, addressp8D8auE, uintYpcto09, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEXaetZXL = await REXUNIFINANCE.new({from: accounts[1]});
		const addresscILSqJd = accounts[0]
		const uintvB3yxs = BigInt("435")
		const addressVr2v379 = accounts[2]
		const addressFtZaqfQ = accounts[2]
		const uintMblYMS6 = BigInt("1056")
		const addressN0HOXEz = accounts[1]
//		const addressZQGNOwX = await REXUNIFINANCEXaetZXL.transferOwnership.call(addresscILSqJd, {from: accounts[4]});
//		const boolmxjLs7q = await REXUNIFINANCEXaetZXL.transferFrom.call(addressFtZaqfQ, addressVr2v379, uintvB3yxs, {from: accounts[1]});
//		const boolhTUQt9a = await REXUNIFINANCEXaetZXL.transfer.call(addressN0HOXEz, uintMblYMS6, {from: accounts[4]});

		await expect(REXUNIFINANCEXaetZXL.transferOwnership.call(addresscILSqJd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCElgMsvSZ = await REXUNIFINANCE.new({from: accounts[5]});
		const uintb3zoA71 = BigInt("669")
		const addressIt8L7Jz = accounts[3]
		const addressnEr4afk = accounts[5]
		const addressKc8zAr6 = accounts[4]
//		const boolw2CNmlM = await REXUNIFINANCElgMsvSZ.transfer.call(addressIt8L7Jz, uintb3zoA71, {from: accounts[1]});
//		const uint256Ml0jer7 = await REXUNIFINANCElgMsvSZ.balanceOf.call(addressnEr4afk, {from: accounts[5]});
//		const addressmPnID4O = await REXUNIFINANCElgMsvSZ.transferOwnership.call(addressKc8zAr6, {from: accounts[3]});

		await expect(REXUNIFINANCElgMsvSZ.transfer.call(addressIt8L7Jz, uintb3zoA71, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCESWVPN05 = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressphYVN0T = "0x0000000000000000000000000000000000000001"
		const uintSQsexhK = BigInt("982")
		const addressTiAREcn = accounts[2]
		const addressRU37j7n = accounts[3]
		const addressSDHOUe = await REXUNIFINANCESWVPN05.transferOwnership.call(addressphYVN0T, {from: accounts[1]});
		const bool2MG8Yj = await REXUNIFINANCESWVPN05.transferFrom.call(addressRU37j7n, addressTiAREcn, uintSQsexhK, {from: accounts[1]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCESxzLOJ = await REXUNIFINANCE.new({from: accounts[0]});
		const addressFGHk29v = accounts[2]
		const addresshvmuxAq = accounts[3]
		const addressH9HCmCx = accounts[1]
		const uint256xJHk9SP = await REXUNIFINANCESxzLOJ.allowance.call(addresshvmuxAq, addressFGHk29v, {from: "0x0000000000000000000000000000000000000001"});
		const addressV9BqFYv = await REXUNIFINANCESxzLOJ.transferOwnership.call(addressH9HCmCx, {from: accounts[0]});

		assert.equal(uint256xJHk9SP, BigInt("0"))
	});
})