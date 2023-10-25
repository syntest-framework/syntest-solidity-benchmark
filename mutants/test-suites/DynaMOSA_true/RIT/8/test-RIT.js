const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITWTNMpTh = await RIT.new({from: accounts[1]});
		const addressnP2s78 = accounts[4]
		const addressWNk7uv8 = accounts[4]
		const addressDQHTtqU = accounts[0]
		const addressskKvwy9 = accounts[3]
		const uintUqVxc1 = BigInt("509")
		const addresszKW45jL = accounts[0]
		const addressLba6OEq = accounts[3]
		const uint256obD3I45 = await RITWTNMpTh.allowance.call(addressWNk7uv8, addressnP2s78, {from: accounts[3]});
		const uint256V3lio7f = await RITWTNMpTh.allowance.call(addressskKvwy9, addressDQHTtqU, {from: "0x0000000000000000000000000000000000000001"});
//		const boolt85Hehk = await RITWTNMpTh.transfer.call(addresszKW45jL, uintUqVxc1, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256IkOpTmA = await RITWTNMpTh.balanceOf.call(addressLba6OEq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256V3lio7f, BigInt("0"))
		assert.equal(uint256obD3I45, BigInt("0"))
		await expect(RITWTNMpTh.transfer.call(addresszKW45jL, uintUqVxc1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITJAHyhOU = await RIT.new({from: accounts[3]});
		const uintcAm1efB = BigInt("465")
		const addressCviCdqP = accounts[2]
		const uint256MBTMb5A = await RITJAHyhOU.totalSupply.call({from: accounts[1]});
		const uint8QTwoOnF = await RITJAHyhOU.decimals.call({from: accounts[2]});
		const stringv8N60pz = await RITJAHyhOU.symbol.call({from: accounts[4]});
		const uint8GFZ1Yit = await RITJAHyhOU.decimals.call({from: accounts[0]});
		const stringvHy8gUp = await RITJAHyhOU.symbol.call({from: accounts[4]});
		const boolwI4vGNK = await RITJAHyhOU.approve.call(addressCviCdqP, uintcAm1efB, {from: accounts[1]});

		assert.equal(boolwI4vGNK, true)
		assert.equal(stringv8N60pz, "RIT 2.0")
		assert.equal(stringvHy8gUp, "RIT 2.0")
		assert.equal(uint256MBTMb5A, BigInt("500000000000000000000000000"))
		assert.equal(uint8GFZ1Yit, BigInt("18"))
		assert.equal(uint8QTwoOnF, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITqKkD1bf = await RIT.new({from: accounts[2]});
		const addressXUv5Zz = accounts[0]
		const addressohQgORC = accounts[3]
		const uintSa0VpA0 = BigInt("911")
		const addressnCX3Qqs = accounts[3]
		const uint256SHuaXcp = await RITqKkD1bf.allowance.call(addressohQgORC, addressXUv5Zz, {from: accounts[3]});
//		const uint256RM6ipXa = await RITqKkD1bf._burn.call(uintSa0VpA0, {from: accounts[2]});
//		const uint256H8BVKVh = await RITqKkD1bf.balanceOf.call(addressnCX3Qqs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256SHuaXcp, BigInt("0"))
		await expect(RITqKkD1bf._burn.call(uintSa0VpA0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITtChu008 = await RIT.new({from: accounts[5]});
		const uintnL1GdiQ = BigInt("2006")
		const addressgvr83Kd = accounts[4]
		const uintG6XnZgW = BigInt("1813")
		const addressRkCr0zu = "0x0000000000000000000000000000000000000001"
		const addressrx55dsX = accounts[1]
		const addressRt8FOO7 = accounts[0]
		const uint256vBlNolT = await RITtChu008.totalSupply.call({from: accounts[4]});
//		const boolpPeiTo = await RITtChu008.decreaseAllowance.call(addressgvr83Kd, uintnL1GdiQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolygk6ARY = await RITtChu008.approve.call(addressRkCr0zu, uintG6XnZgW, {from: accounts[2]});
//		const uint256GGzEUPb = await RITtChu008.allowance.call(addressRt8FOO7, addressrx55dsX, {from: accounts[1]});

		assert.equal(uint256vBlNolT, BigInt("500000000000000000000000000"))
		await expect(RITtChu008.decreaseAllowance.call(addressgvr83Kd, uintnL1GdiQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITzLIJLAM = await RIT.new({from: accounts[2]});
		const addressaEOA9DR = accounts[3]
		const addressf1oksMI = accounts[1]
		const uintTLKxkEZ = BigInt("1608")
		const addressZmjyhmj = accounts[1]
		const addressKQjBHoF = accounts[0]
		const uint256HrzIVoK = await RITzLIJLAM.allowance.call(addressf1oksMI, addressaEOA9DR, {from: accounts[2]});
//		const boolkTH3Aiv = await RITzLIJLAM.transferFrom.call(addressKQjBHoF, addressZmjyhmj, uintTLKxkEZ, {from: accounts[2]});

		assert.equal(uint256HrzIVoK, BigInt("0"))
		await expect(RITzLIJLAM.transferFrom.call(addressKQjBHoF, addressZmjyhmj, uintTLKxkEZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITdAQsLyd = await RIT.new({from: accounts[0]});
		const uintGKQJ7d = BigInt("1549")
		const addressX4YZ04q = accounts[5]
		const addressoHgISr = accounts[1]
		const uintuVco9Fy = BigInt("720")
		const addressshhAX56 = accounts[4]
		const stringz0e2hYb = await RITdAQsLyd.name.call({from: accounts[3]});
		const uint8xNKxxeA = await RITdAQsLyd.decimals.call({from: accounts[1]});
//		const boolnQw5U7 = await RITdAQsLyd.transferFrom.call(addressoHgISr, addressX4YZ04q, uintGKQJ7d, {from: accounts[0]});
//		const boolCkXfOu0 = await RITdAQsLyd.transfer.call(addressshhAX56, uintuVco9Fy, {from: accounts[4]});

		assert.equal(stringz0e2hYb, "Real Estate Investment Token")
		assert.equal(uint8xNKxxeA, BigInt("18"))
		await expect(RITdAQsLyd.transferFrom.call(addressoHgISr, addressX4YZ04q, uintGKQJ7d, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITiFNTJbi = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintV5qGW3b = BigInt("641")
		const addressAV8ptHq = accounts[1]
		const uint6FanhL = BigInt("497")
		const addresseFt3lt = accounts[4]
		const addresstFAO1l1 = accounts[3]
		const boolUP6X2W = await RITiFNTJbi.approve.call(addressAV8ptHq, uintV5qGW3b, {from: accounts[2]});
		const boolEQ9xzkY = await RITiFNTJbi.approve.call(addresseFt3lt, uint6FanhL, {from: accounts[4]});
		const uint256cLMcDRJ = await RITiFNTJbi.totalSupply.call({from: accounts[0]});
		const uint256ugd8B0r = await RITiFNTJbi.balanceOf.call(addresstFAO1l1, {from: accounts[5]});
	});

	it('test for RIT', async () => {
		const RITzLIJLAM = await RIT.new({from: accounts[2]});
		const addressqgA0wE = accounts[4]
		const addressLiLosGz = accounts[1]
		const addressaudtrpG = accounts[3]
		const uintWnKLXLt = BigInt("1608")
		const addresswobJlMC = accounts[1]
		const addressmFhIzI2 = accounts[0]
		const uint256HrzIVoK = await RITzLIJLAM.allowance.call(addressLiLosGz, addressqgA0wE, {from: accounts[2]});
		const uint256fJlbwKh = await RITzLIJLAM.balanceOf.call(addressaudtrpG, {from: accounts[4]});
//		const boolkTH3Aiv = await RITzLIJLAM.transferFrom.call(addressmFhIzI2, addresswobJlMC, uintWnKLXLt, {from: accounts[2]});
//		const stringAQ3JIdz = await RITzLIJLAM.name.call({from: accounts[0]});

		assert.equal(uint256HrzIVoK, BigInt("0"))
		assert.equal(uint256fJlbwKh, BigInt("0"))
		await expect(RITzLIJLAM.transferFrom.call(addressmFhIzI2, addresswobJlMC, uintWnKLXLt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITlBGmvD4 = await RIT.new({from: accounts[4]});
		const addressqRUgJi = accounts[1]
		const uintvqkplnq = BigInt("1936")
		const addresstW4Tofj = accounts[1]
		const stringmbcf80v = await RITlBGmvD4.symbol.call({from: accounts[1]});
		const stringVwrcnDs = await RITlBGmvD4.symbol.call({from: accounts[2]});
		const stringZGFpXtP = await RITlBGmvD4.symbol.call({from: accounts[4]});
		const uint256gqX9kEg = await RITlBGmvD4.balanceOf.call(addressqRUgJi, {from: accounts[1]});
		const boolpwO2lWd = await RITlBGmvD4.increaseAllowance.call(addresstW4Tofj, uintvqkplnq, {from: accounts[4]});

		assert.equal(boolpwO2lWd, true)
		assert.equal(stringVwrcnDs, "RIT 2.0")
		assert.equal(stringZGFpXtP, "RIT 2.0")
		assert.equal(stringmbcf80v, "RIT 2.0")
		assert.equal(uint256gqX9kEg, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITtChu008 = await RIT.new({from: accounts[5]});
		const uinth660uTy = BigInt("1813")
		const addressYr1w2Sf = "0x0000000000000000000000000000000000000000"
		const addressfIsbR56 = accounts[1]
		const addressSMuezH8 = accounts[0]
//		const boolygk6ARY = await RITtChu008.approve.call(addressYr1w2Sf, uinth660uTy, {from: accounts[2]});
//		const uint256GGzEUPb = await RITtChu008.allowance.call(addressSMuezH8, addressfIsbR56, {from: accounts[1]});

		await expect(RITtChu008.approve.call(addressYr1w2Sf, uinth660uTy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITDRg9Ot7 = await RIT.new({from: accounts[4]});
		const addresssupHlTV = accounts[3]
		const addressGfbGsbP = accounts[1]
		const uinturrfQkG = BigInt("0")
		const addressp8LCGSI = "0x0000000000000000000000000000000000000001"
		const addressQUldO1t = accounts[2]
		const uint256pEbpY1 = await RITDRg9Ot7.allowance.call(addressGfbGsbP, addresssupHlTV, {from: accounts[4]});
		const boolaQFGxEQ = await RITDRg9Ot7.transfer.call(addressp8LCGSI, uinturrfQkG, {from: accounts[1]});
		const uint256rosepEY = await RITDRg9Ot7.balanceOf.call(addressQUldO1t, {from: accounts[1]});

		assert.equal(boolaQFGxEQ, true)
		assert.equal(uint256pEbpY1, BigInt("0"))
		assert.equal(uint256rosepEY, BigInt("0"))
	});
})