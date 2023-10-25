const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPwAPhZLt = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBBSgfzf = BigInt("1486")
		const addressIdE0l4Q = accounts[2]
		const addresszN1SmO8 = accounts[0]
		const addressuen7SSk = accounts[3]
		const uintC9hlM1W = BigInt("183")
		const addressrHi3WrT = accounts[4]
		const boolphdCTvA = await DSPwAPhZLt.transferFrom.call(addresszN1SmO8, addressIdE0l4Q, uintBBSgfzf, {from: accounts[0]});
		const boolbheS3Dc = await DSPwAPhZLt.unfreezeAccount.call(addressuen7SSk, {from: accounts[0]});
		const boolqqlZl3C = await DSPwAPhZLt.unlock.call(addressrHi3WrT, uintC9hlM1W, {from: accounts[2]});
	});

	it('test for DSP', async () => {
		const DSPqFeaHxJ = await DSP.new({from: accounts[1]});
		const uintJvzIVGS = BigInt("1166")
		const addressdgEaEp = "0x0000000000000000000000000000000000000001"
		const addressOq4r37N = accounts[5]
		const uintQvBMjWj = BigInt("999")
		const addressFKOwUxU = accounts[0]
		const boolV7dNZ3R = await DSPqFeaHxJ.increaseAllowance.call(addressdgEaEp, uintJvzIVGS, {from: accounts[3]});
		const uint256KvM8cEE = await DSPqFeaHxJ.balanceOf.call(addressOq4r37N, {from: accounts[5]});
//		const boolKnzoxav = await DSPqFeaHxJ.unlock.call(addressFKOwUxU, uintQvBMjWj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolV7dNZ3R, true)
		assert.equal(uint256KvM8cEE, BigInt("0"))
		await expect(DSPqFeaHxJ.unlock.call(addressFKOwUxU, uintQvBMjWj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPa4kW6tA = await DSP.new({from: accounts[0]});
		const addressFscJl62 = accounts[5]
		const uintrqm7exv = BigInt("1897")
		const addresscnnsSP7 = accounts[2]
		const addressrKufxPA = await DSPa4kW6tA.transferOwnership.call(addressFscJl62, {from: accounts[0]});
		const booluU4ffLP = await DSPa4kW6tA.increaseAllowance.call(addresscnnsSP7, uintrqm7exv, {from: accounts[0]});
//		await DSPa4kW6tA.pause.call({from: accounts[2]});

		assert.equal(booluU4ffLP, true)
		await expect(DSPa4kW6tA.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const addressoVHv68n = "0x0000000000000000000000000000000000000001"
		const uint256s8ZOalF = await DSPXki6jy.balanceOf.call(addressoVHv68n, {from: accounts[2]});
//		await DSPXki6jy.renouncePauser.call({from: accounts[5]});

		assert.equal(uint256s8ZOalF, BigInt("0"))
		await expect(DSPXki6jy.renouncePauser.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringELN3usW = "mloN79WCdyzAG6mWKHb8H1W2K303Xky4LwhBgEEMhZlnFiT4LuoKD4u1XGk5iqRsMOp"
		const stringCaVggW1 = "1aEhfUT25kLSrrSq0aCJnqUEtmGc"
		const uinthXW3ATR = BigInt("46")
		const DSPIIt3uc6 = await DSP.new(stringELN3usW, stringCaVggW1, uinthXW3ATR, {from: accounts[2]});
		const uintfBmoRUM = BigInt("1414")
		const addressB1KKnJU = "0x0000000000000000000000000000000000000001"
		const addressKc1Hqf = accounts[1]
		const uint8P5MZfJF = await DSPIIt3uc6.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolpHKfuP2 = await DSPIIt3uc6.unlock.call(addressB1KKnJU, uintfBmoRUM, {from: accounts[2]});
		const uint256EV3J0F2 = await DSPIIt3uc6.balanceOf.call(addressKc1Hqf, {from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPbuUGP7I = await DSP.new({from: accounts[2]});
		const address0GopVc = accounts[2]
		const uintMp4bXJ = BigInt("1839")
		const addressyUAEPbu = accounts[1]
		const addressU50ARSy = accounts[0]
//		await DSPbuUGP7I.f.call({from: accounts[0]});
//		const uint256KbCTRv = await DSPbuUGP7I.balanceOf.call(address0GopVc, {from: accounts[4]});
//		const boolFiTis9T = await DSPbuUGP7I.unlock.call(addressyUAEPbu, uintMp4bXJ, {from: accounts[0]});
//		const boolvk1D0BE = await DSPbuUGP7I.isOwner.call(addressU50ARSy, {from: accounts[3]});
//		const boolko55QN4 = await DSPbuUGP7I.paused.call({from: accounts[5]});

		await expect(DSPbuUGP7I.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const addresssYdis9T = "0x0000000000000000000000000000000000000001"
		const addressMBKafuW = accounts[2]
		const uintCd06p8q = BigInt("540")
		const addressIOrcmUn = accounts[1]
		const uint256s8ZOalF = await DSPXki6jy.balanceOf.call(addresssYdis9T, {from: accounts[2]});
//		const boolJNlFTem = await DSPXki6jy.unfreezeAccount.call(addressMBKafuW, {from: accounts[3]});
//		const boolTY4QzGh = await DSPXki6jy.increaseAllowance.call(addressIOrcmUn, uintCd06p8q, {from: accounts[0]});

		assert.equal(uint256s8ZOalF, BigInt("0"))
		await expect(DSPXki6jy.unfreezeAccount.call(addressMBKafuW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPSAcbQ6N = await DSP.new({from: accounts[3]});
		const addressjcJHCfg = accounts[0]
		const addressP9tZgNd = "0x0000000000000000000000000000000000000001"
//		const addressOWPKj4 = await DSPSAcbQ6N.notFrozen.call(addressjcJHCfg, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbIUmILQ = await DSPSAcbQ6N.unfreezeAccount.call(addressP9tZgNd, {from: accounts[3]});

		await expect(DSPSAcbQ6N.notFrozen.call(addressjcJHCfg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const addressLOgeQHa = accounts[4]
		const addressksMwCkU = "0x0000000000000000000000000000000000000001"
//		const addressadAAKDH = await DSPXki6jy.removePauser.call(addressLOgeQHa, {from: accounts[3]});
//		const uint256s8ZOalF = await DSPXki6jy.balanceOf.call(addressksMwCkU, {from: accounts[2]});
//		const boolNDcRrj = await DSPXki6jy.paused.call({from: accounts[2]});

		await expect(DSPXki6jy.removePauser.call(addressLOgeQHa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const uintSbE6Tm5 = BigInt("1029")
		const addressscYg6P4 = accounts[0]
		const uint8Yr9Ta4m = await DSPXki6jy.decimals.call({from: accounts[1]});
//		const booliKiFlv2 = await DSPXki6jy.decreaseAllowance.call(addressscYg6P4, uintSbE6Tm5, {from: accounts[5]});
//		await DSPXki6jy.unpause.call({from: accounts[4]});
//		await DSPXki6jy.renouncePauser.call({from: accounts[5]});

		assert.equal(uint8Yr9Ta4m, BigInt("18"))
		await expect(DSPXki6jy.decreaseAllowance.call(addressscYg6P4, uintSbE6Tm5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const uintERpEsS5 = BigInt("680")
		const addressvwoCgg = accounts[4]
		const addressENSrbi3 = "0x0000000000000000000000000000000000000002"
		const uint2QtfiF = BigInt("383")
		const addressWTurM8F = accounts[2]
		const addressWJR7nWf = accounts[0]
//		const boolDzm3M93 = await DSPXki6jy.transfer.call(addressvwoCgg, uintERpEsS5, {from: accounts[5]});
//		const uint256s8ZOalF = await DSPXki6jy.balanceOf.call(addressENSrbi3, {from: accounts[2]});
//		const boolRTYbiID = await DSPXki6jy.transferFrom.call(addressWJR7nWf, addressWTurM8F, uint2QtfiF, {from: accounts[4]});

		await expect(DSPXki6jy.transfer.call(addressvwoCgg, uintERpEsS5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const addressXX8bDPM = "0x0000000000000000000000000000000000000002"
		const uintejv7OT3 = BigInt("120")
		const addressazVurX = accounts[5]
		const uint256s8ZOalF = await DSPXki6jy.balanceOf.call(addressXX8bDPM, {from: accounts[2]});
		const booltUyL9S4 = await DSPXki6jy.approve.call(addressazVurX, uintejv7OT3, {from: accounts[0]});

		assert.equal(booltUyL9S4, true)
		assert.equal(uint256s8ZOalF, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const addressszB6GSe = "0x0000000000000000000000000000000000000001"
		const uint256b9pbUpO = await DSPXki6jy.totalSupply.call({from: accounts[4]});
//		await DSPXki6jy.renouncePauser.call({from: accounts[5]});
//		const boolj3WGOCa = await DSPXki6jy.isOwner.call(addressszB6GSe, {from: accounts[5]});
//		await DSPXki6jy.whenNotPaused.call({from: accounts[2]});

		assert.equal(uint256b9pbUpO, BigInt("100000000000000000000000000000"))
		await expect(DSPXki6jy.renouncePauser.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const uintqefJSW = BigInt("27")
		const addressXeg5UdD = accounts[0]
		const boolYHlCwm = await DSPXki6jy.mint.call(addressXeg5UdD, uintqefJSW, {from: accounts[3]});
//		await DSPXki6jy.renouncePauser.call({from: accounts[5]});

		assert.equal(boolYHlCwm, true)
		await expect(DSPXki6jy.renouncePauser.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const uintkHQwHI5 = BigInt("680")
		const addresspaN7f80 = accounts[4]
		const addressERbQS47 = "0x0000000000000000000000000000000000000001"
		const uintM7Cvybe = BigInt("383")
		const addressUc69nmd = accounts[2]
		const addressQsKlnON = accounts[0]
//		await DSPXki6jy.pause.call({from: accounts[3]});
//		const boolDzm3M93 = await DSPXki6jy.transfer.call(addresspaN7f80, uintkHQwHI5, {from: accounts[5]});
//		await DSPXki6jy.whenPaused.call({from: accounts[0]});
//		const uint256s8ZOalF = await DSPXki6jy.balanceOf.call(addressERbQS47, {from: accounts[2]});
//		const boolRTYbiID = await DSPXki6jy.transferFrom.call(addressQsKlnON, addressUc69nmd, uintM7Cvybe, {from: accounts[4]});

		await expect(DSPXki6jy.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const uintwdxKaE1 = BigInt("1571")
		const addressT7NkAu = accounts[2]
		const addressOCCeAu1 = accounts[2]
		const stringaBclPEZ = await DSPXki6jy.symbol.call({from: accounts[3]});
//		const boolPyYUXdB = await DSPXki6jy.transferFrom.call(addressOCCeAu1, addressT7NkAu, uintwdxKaE1, {from: accounts[1]});
//		await DSPXki6jy.pause.call({from: accounts[3]});

		assert.equal(stringaBclPEZ, "DSP")
		await expect(DSPXki6jy.transferFrom.call(addressOCCeAu1, addressT7NkAu, uintwdxKaE1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDhe0L3w = await DSP.new({from: accounts[0]});
		const addressTrVoGBq = "0x0000000000000000000000000000000000000001"
		const uintZAEzgGA = BigInt("1824")
		const addressAUsWoKP = accounts[2]
		const addressqvPvWE1 = accounts[4]
		const boolgXOzePG = await DSPDhe0L3w.paused.call({from: accounts[2]});
//		const boolKsDopRN = await DSPDhe0L3w.unfreezeAccount.call(addressTrVoGBq, {from: accounts[0]});
//		const boolMmxL0Y = await DSPDhe0L3w.transferFrom.call(addressqvPvWE1, addressAUsWoKP, uintZAEzgGA, {from: accounts[3]});
//		const bool0eIjaT = await DSPDhe0L3w.paused.call({from: accounts[5]});

		assert.equal(boolgXOzePG, false)
		await expect(DSPDhe0L3w.unfreezeAccount.call(addressTrVoGBq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const uintln7FwW8 = BigInt("1825")
		const addresslawrof = accounts[0]
		const uinthtiNaw6 = BigInt("640")
		const addresstMPTZOW = accounts[0]
		const uintNaizg3 = BigInt("431")
		const addressVQ1zdyY = accounts[2]
		const addressCRclxuL = accounts[0]
		const booldORKKRz = await DSPXki6jy.approve.call(addresslawrof, uintln7FwW8, {from: accounts[0]});
		const boolsCIVN3q = await DSPXki6jy.transfer.call(addresstMPTZOW, uinthtiNaw6, {from: accounts[3]});
//		const boolufKA62T = await DSPXki6jy.transferFrom.call(addressCRclxuL, addressVQ1zdyY, uintNaizg3, {from: accounts[2]});

		assert.equal(booldORKKRz, true)
		assert.equal(boolsCIVN3q, true)
		await expect(DSPXki6jy.transferFrom.call(addressCRclxuL, addressVQ1zdyY, uintNaizg3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const addressoUv2rOg = accounts[0]
		const addressHCjHsU3 = accounts[0]
		const uintXLDvXlD = BigInt("431")
		const addressXhlplZ = accounts[3]
		const addressOeMu9Np = accounts[0]
		const uintf6NPX3b = BigInt("1599")
		const addressBF5L53G = accounts[0]
		const uintJuau7BU = BigInt("593")
		const addressPhhibd = accounts[5]
		const uint256k3H1L4l = await DSPXki6jy.allowance.call(addressHCjHsU3, addressoUv2rOg, {from: accounts[1]});
//		const boolufKA62T = await DSPXki6jy.transferFrom.call(addressOeMu9Np, addressXhlplZ, uintXLDvXlD, {from: accounts[2]});
//		const bool7KINiX = await DSPXki6jy.unlock.call(addressBF5L53G, uintf6NPX3b, {from: "0x0000000000000000000000000000000000000001"});
//		const boolUpkdX4K = await DSPXki6jy.unlock.call(addressPhhibd, uintJuau7BU, {from: accounts[4]});

		assert.equal(uint256k3H1L4l, BigInt("0"))
		await expect(DSPXki6jy.transferFrom.call(addressOeMu9Np, addressXhlplZ, uintXLDvXlD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const stringzS1PwyT = await DSPXki6jy.name.call({from: accounts[5]});
//		await DSPXki6jy.renouncePauser.call({from: accounts[5]});

		assert.equal(stringzS1PwyT, "DSP")
		await expect(DSPXki6jy.renouncePauser.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const addressV0UExj9 = "0x0000000000000000000000000000000000000001"
		const uintomNmG55 = BigInt("420")
		const addressV7dsev = accounts[1]
		const uint256s8ZOalF = await DSPXki6jy.balanceOf.call(addressV0UExj9, {from: accounts[2]});
//		const boolYgtMpk9 = await DSPXki6jy.unlock.call(addressV7dsev, uintomNmG55, {from: accounts[3]});

		assert.equal(uint256s8ZOalF, BigInt("0"))
		await expect(DSPXki6jy.unlock.call(addressV7dsev, uintomNmG55, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const uintg4ZOFcF = BigInt("1827")
		const uintDYTEvZn = BigInt("1764")
		const addressVaeXgrY = accounts[4]
//		const boolhlgI172 = await DSPXki6jy.lock.call(addressVaeXgrY, uintDYTEvZn, uintg4ZOFcF, {from: accounts[3]});
//		await DSPXki6jy.whenNotPaused.call({from: accounts[2]});
//		await DSPXki6jy.renouncePauser.call({from: accounts[5]});
//		await DSPXki6jy.renouncePauser.call({from: accounts[4]});

		await expect(DSPXki6jy.lock.call(addressVaeXgrY, uintDYTEvZn, uintg4ZOFcF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const uintDU6LUTt = BigInt("1131")
		const addressXp8oMas = accounts[3]
		const uintnndBlin = BigInt("667")
		const addressj0QjEw8 = accounts[6]
//		await DSPXki6jy.renouncePauser.call({from: accounts[3]});
//		const boolS8SNy0n = await DSPXki6jy.increaseAllowance.call(addressXp8oMas, uintDU6LUTt, {from: accounts[4]});
//		const boolDzm3M93 = await DSPXki6jy.transfer.call(addressj0QjEw8, uintnndBlin, {from: accounts[5]});

		await expect(DSPXki6jy.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const uintrg70dv7 = BigInt("927")
		const uintLlLCV3B = BigInt("500")
		const addressXG4tMMx = accounts[3]
		const addressaZyaH7A = "0x0000000000000000000000000000000000000001"
		const boolf7QQ8yn = await DSPXki6jy.lock.call(addressXG4tMMx, uintLlLCV3B, uintrg70dv7, {from: accounts[3]});
		const uint256s8ZOalF = await DSPXki6jy.balanceOf.call(addressaZyaH7A, {from: accounts[2]});

		assert.equal(boolf7QQ8yn, true)
		assert.equal(uint256s8ZOalF, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const uintdmJMmkJ = BigInt("1014")
		const uintiaYLm2V = BigInt("1302")
		const address3SNmwI = accounts[5]
		const uintEgMRFz3 = BigInt("431")
		const addressgMPxwI9 = accounts[2]
		const addressKpPQdQL = accounts[0]
		const boolgUVYb6b = await DSPXki6jy.transferWithLock.call(address3SNmwI, uintiaYLm2V, uintdmJMmkJ, {from: accounts[3]});
//		const boolufKA62T = await DSPXki6jy.transferFrom.call(addressKpPQdQL, addressgMPxwI9, uintEgMRFz3, {from: accounts[2]});

		assert.equal(boolgUVYb6b, true)
		await expect(DSPXki6jy.transferFrom.call(addressKpPQdQL, addressgMPxwI9, uintEgMRFz3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPXki6jy = await DSP.new({from: accounts[3]});
		const addressf6oXROp = accounts[0]
		const addressiBL36sY = await DSPXki6jy.addPauser.call(addressf6oXROp, {from: accounts[3]});
//		await DSPXki6jy.renouncePauser.call({from: accounts[5]});

		await expect(DSPXki6jy.renouncePauser.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})