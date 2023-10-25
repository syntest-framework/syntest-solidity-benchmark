const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPFREMLdp = await DSP.new({from: accounts[2]});
		const uintudTlYjU = BigInt("1213")
		const addressV3sYfK = accounts[5]
		const uintdQU88D = BigInt("62")
		const addressJk3ept = accounts[4]
		const addressiXIfa3T = accounts[1]
		const boolqqsfkH = await DSPFREMLdp.burnFrombyOwner.call(addressV3sYfK, uintudTlYjU, {from: accounts[1]});
		await DSPFREMLdp.unpause.call({from: accounts[0]});
		await DSPFREMLdp.onlyOwner.call({from: accounts[0]});
		const boolicIpIr6 = await DSPFREMLdp.decreaseAllowance.call(addressJk3ept, uintdQU88D, {from: accounts[4]});
		const addressqi9tffH = await DSPFREMLdp.addPauser.call(addressiXIfa3T, {from: accounts[3]});

		await expect(DSPFREMLdp.burnFrombyOwner.call(addressV3sYfK, uintudTlYjU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringsofrmi7 = "NZ3BhIB1738njmmdXWNjqrwsfmIsfIQX58jg2ibt6"
		const stringRpGUU8q = "7sY8vUbBi0H0Yi6GlxzQ4q3PwpiAqcU4l8bazKyXMloUCB4b9lLdK7neGFfYlxZTo43fSmPqg2ekep4Ki7JIrUWNLCclii"
		const uintHDS3f2 = BigInt("112")
		const DSPaXhfte2 = await DSP.new(stringsofrmi7, stringRpGUU8q, uintHDS3f2, {from: accounts[0]});
		const uintlNrs2yq = BigInt("1632")
		const addresscINPnVc = accounts[0]
		const address4vHuex = accounts[2]
		const boolSOroTNw = await DSPaXhfte2.increaseAllowance.call(addresscINPnVc, uintlNrs2yq, {from: accounts[3]});
		const boolecKWVcW = await DSPaXhfte2.isPauser.call(address4vHuex, {from: accounts[3]});
		const stringjM2bQg = await DSPaXhfte2.symbol.call({from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uintKvowewN = BigInt("1477")
		const addressYYxzXb8 = accounts[1]
		const addressEUNQPka = "0x0000000000000000000000000000000000000001"
		const addressVGcJMAR = accounts[0]
		const addressZGSXoAL = accounts[2]
		const addressDN8oGJO = accounts[1]
		const boolPK2e0wn = await DSPxkcMxkx.transfer.call(addressYYxzXb8, uintKvowewN, {from: accounts[4]});
		const uint256ikFkndD = await DSPxkcMxkx.allowance.call(addressVGcJMAR, addressEUNQPka, {from: accounts[5]});
		const boolEGJyq4o = await DSPxkcMxkx.unfreezeAccount.call(addressZGSXoAL, {from: accounts[5]});
		const boolWSAkAdD = await DSPxkcMxkx.isPauser.call(addressDN8oGJO, {from: accounts[2]});

		assert.equal(boolPK2e0wn, true)
		assert.equal(uint256ikFkndD, BigInt("0"))
		await expect(DSPxkcMxkx.unfreezeAccount.call(addressZGSXoAL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPZeLsAQh = await DSP.new({from: accounts[0]});
		const addressqCt71mx = accounts[3]
		const uintMfiKA2 = BigInt("369")
		const addressiOpPSNA = accounts[0]
		const addressIzr3WQ = accounts[1]
		const addressE64fRBP = accounts[1]
		const uintwmnh0iO = BigInt("1350")
		const uintdbO8njL = BigInt("618")
		const addressmydG5cO = accounts[2]
		const uinto806d0G = BigInt("1234")
		const addressDSwTYaU = accounts[5]
		const addressXnk6f2V = accounts[0]
		const boolG5ky43N = await DSPZeLsAQh.isOwner.call(addressqCt71mx, {from: accounts[1]});
		await DSPZeLsAQh.whenNotPaused.call({from: accounts[5]});
		const boolRfx4eFW = await DSPZeLsAQh.transferFrom.call(addressIzr3WQ, addressiOpPSNA, uintMfiKA2, {from: accounts[4]});
		const addressv6Hsjhm = await DSPZeLsAQh.addPauser.call(addressE64fRBP, {from: accounts[2]});
		const boolIBmIR7 = await DSPZeLsAQh.transferWithLock.call(addressmydG5cO, uintdbO8njL, uintwmnh0iO, {from: accounts[3]});
		const boolJqnQbUg = await DSPZeLsAQh.transferFrom.call(addressXnk6f2V, addressDSwTYaU, uinto806d0G, {from: accounts[3]});

		assert.equal(boolG5ky43N, false)
		await expect(DSPZeLsAQh.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPHt4BkFH = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCrdL1Mh = accounts[3]
		const addresskKFTPQB = accounts[4]
		const uintFnTNuc2 = BigInt("1849")
		const addressfczHnxH = accounts[2]
		const uintELelUF = BigInt("1496")
		const addresskHoY9W = "0x0000000000000000000000000000000000000001"
		const uint256LDdjQrZ = await DSPHt4BkFH.allowance.call(addresskKFTPQB, addressCrdL1Mh, {from: accounts[1]});
		const booljhXp5AK = await DSPHt4BkFH.transfer.call(addressfczHnxH, uintFnTNuc2, {from: accounts[5]});
		const boolTZstE5 = await DSPHt4BkFH.unlock.call(addresskHoY9W, uintELelUF, {from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uintr5R5rBD = BigInt("1477")
		const addresshkyYBZm = accounts[1]
		const addressmvX6NE = accounts[1]
		const boolPK2e0wn = await DSPxkcMxkx.transfer.call(addresshkyYBZm, uintr5R5rBD, {from: accounts[4]});
		const stringWo7InkN = await DSPxkcMxkx.symbol.call({from: accounts[5]});
		const boolWSAkAdD = await DSPxkcMxkx.isPauser.call(addressmvX6NE, {from: accounts[2]});

		assert.equal(boolPK2e0wn, true)
		assert.equal(boolWSAkAdD, false)
		assert.equal(stringWo7InkN, "DSP")
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uintfbcZGyX = BigInt("1477")
		const addressLzWqEsK = accounts[1]
		const addresswMXcB8n = accounts[0]
		const addressOTSRdyP = accounts[0]
		const addressBLJHfOa = accounts[1]
		const addressiXP1RDO = accounts[1]
		const boolPK2e0wn = await DSPxkcMxkx.transfer.call(addressLzWqEsK, uintfbcZGyX, {from: accounts[4]});
		const uint256RyizEnY = await DSPxkcMxkx.allowance.call(addressOTSRdyP, addresswMXcB8n, {from: accounts[1]});
		const boolWSAkAdD = await DSPxkcMxkx.isPauser.call(addressBLJHfOa, {from: accounts[2]});
		const boola9bahIX = await DSPxkcMxkx.freezeAccount.call(addressiXP1RDO, {from: accounts[4]});

		assert.equal(boolPK2e0wn, true)
		assert.equal(boolWSAkAdD, false)
		assert.equal(boola9bahIX, true)
		assert.equal(uint256RyizEnY, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uintU8CzEKJ = BigInt("1477")
		const addressqhRLUHx = accounts[3]
		const addressPrWzwuI = accounts[3]
		const boolPK2e0wn = await DSPxkcMxkx.transfer.call(addressqhRLUHx, uintU8CzEKJ, {from: accounts[4]});
		const uint256alxjVq = await DSPxkcMxkx.balanceOf.call(addressPrWzwuI, {from: accounts[1]});

		assert.equal(boolPK2e0wn, true)
		assert.equal(uint256alxjVq, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uintCextI45 = BigInt("1499")
		const addressHvpcmK = accounts[2]
		const uintnkVecen = BigInt("63")
		const addressAf0hs4C = accounts[4]
		const addressHRe1Gnp = accounts[3]
		const boolPK2e0wn = await DSPxkcMxkx.transfer.call(addressHvpcmK, uintCextI45, {from: accounts[4]});
		const boolBfKjjD = await DSPxkcMxkx.transferFrom.call(addressHRe1Gnp, addressAf0hs4C, uintnkVecen, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPK2e0wn, true)
		await expect(DSPxkcMxkx.transferFrom.call(addressHRe1Gnp, addressAf0hs4C, uintnkVecen, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uintaaBHBG8 = BigInt("1488")
		const addressWd38it = accounts[2]
		const uint256f5zd9f9 = await DSPxkcMxkx.totalSupply.call({from: accounts[3]});
		const boolPK2e0wn = await DSPxkcMxkx.transfer.call(addressWd38it, uintaaBHBG8, {from: accounts[4]});
		const boolaOMpDQ = await DSPxkcMxkx.paused.call({from: accounts[2]});

		assert.equal(boolPK2e0wn, true)
		assert.equal(boolaOMpDQ, false)
		assert.equal(uint256f5zd9f9, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uintiJwBdmV = BigInt("1477")
		const addressmjURbRd = accounts[3]
		const boolPK2e0wn = await DSPxkcMxkx.transfer.call(addressmjURbRd, uintiJwBdmV, {from: accounts[4]});
		await DSPxkcMxkx.renouncePauser.call({from: accounts[1]});

		assert.equal(boolPK2e0wn, true)
		await expect(DSPxkcMxkx.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uintEXy3beS = BigInt("451")
		const addressSINTAzh = accounts[1]
		const uintanaz9q0 = BigInt("1477")
		const addressPyK63O = accounts[3]
		const addresslx3mV18 = accounts[3]
		const boolYLgBJk4 = await DSPxkcMxkx.decreaseAllowance.call(addressSINTAzh, uintEXy3beS, {from: accounts[5]});
		const boolPK2e0wn = await DSPxkcMxkx.transfer.call(addressPyK63O, uintanaz9q0, {from: accounts[4]});
		const uint256alxjVq = await DSPxkcMxkx.balanceOf.call(addresslx3mV18, {from: accounts[1]});

		await expect(DSPxkcMxkx.decreaseAllowance.call(addressSINTAzh, uintEXy3beS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uintwbDxjzT = BigInt("571")
		const addressZOBci5H = "0x0000000000000000000000000000000000000001"
		const uintXvTbSDL = BigInt("1493")
		const addressCu23W5i = accounts[2]
		const addressXu24sb = accounts[4]
		const boolV90amBv = await DSPxkcMxkx.unlock.call(addressZOBci5H, uintwbDxjzT, {from: accounts[4]});
		const boolPK2e0wn = await DSPxkcMxkx.transfer.call(addressCu23W5i, uintXvTbSDL, {from: accounts[4]});
		const uint256XTGZyt = await DSPxkcMxkx.balanceOf.call(addressXu24sb, {from: accounts[3]});

		await expect(DSPxkcMxkx.unlock.call(addressZOBci5H, uintwbDxjzT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uintCY9SbF1 = BigInt("1477")
		const addresstzek7iD = accounts[3]
		const addresstuI2vl3 = accounts[3]
		const uintdTwOz9c = BigInt("643")
		const uint4GokJp = BigInt("1694")
		const addressbXdxbU5 = accounts[0]
		const boolPK2e0wn = await DSPxkcMxkx.transfer.call(addresstzek7iD, uintCY9SbF1, {from: accounts[4]});
		const uint256alxjVq = await DSPxkcMxkx.balanceOf.call(addresstuI2vl3, {from: accounts[1]});
		const stringCnBOgBO = await DSPxkcMxkx.name.call({from: accounts[1]});
		const boolnuZ1kZF = await DSPxkcMxkx.transferWithLock.call(addressbXdxbU5, uint4GokJp, uintdTwOz9c, {from: accounts[4]});

		assert.equal(boolPK2e0wn, true)
		assert.equal(boolnuZ1kZF, true)
		assert.equal(stringCnBOgBO, "DSP")
		assert.equal(uint256alxjVq, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uintDo00bB9 = BigInt("123")
		const uintd3fvDT8 = BigInt("1120")
		const addressV7sdTBo = accounts[4]
		const uintCqvarnn = BigInt("1477")
		const addressgVJCmJ = accounts[2]
		const boolLRvU9ZR = await DSPxkcMxkx.lock.call(addressV7sdTBo, uintd3fvDT8, uintDo00bB9, {from: accounts[4]});
		const boolPK2e0wn = await DSPxkcMxkx.transfer.call(addressgVJCmJ, uintCqvarnn, {from: accounts[4]});
		const booldY3XZ0N = await DSPxkcMxkx.paused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLRvU9ZR, true)
		assert.equal(boolPK2e0wn, true)
		assert.equal(booldY3XZ0N, false)
	});

	it('test for DSP', async () => {
		const DSPSEpiJo9 = await DSP.new({from: accounts[5]});
		const uinte78FDhY = BigInt("1756")
		const addressw97Xyre = accounts[4]
		const uintHvk91CN = BigInt("34")
		const addressZyAfsOH = accounts[4]
		const addressCKPQoxz = accounts[2]
		const addressXAyefuh = "0x0000000000000000000000000000000000000001"
		const boolIZ7rfmJ = await DSPSEpiJo9.approve.call(addressw97Xyre, uinte78FDhY, {from: accounts[0]});
		const stringrswK8V = await DSPSEpiJo9.symbol.call({from: accounts[0]});
		const boolzEvmMTH = await DSPSEpiJo9.transfer.call(addressZyAfsOH, uintHvk91CN, {from: accounts[5]});
		const boolocZZzA = await DSPSEpiJo9.paused.call({from: accounts[3]});
		const uint256au2glKC = await DSPSEpiJo9.balanceOf.call(addressCKPQoxz, {from: accounts[3]});
		const addressK9npGoa = await DSPSEpiJo9.upgradeTo.call(addressXAyefuh, {from: accounts[0]});

		assert.equal(boolIZ7rfmJ, true)
		assert.equal(boolocZZzA, false)
		assert.equal(boolzEvmMTH, true)
		assert.equal(stringrswK8V, "DSP")
		assert.equal(uint256au2glKC, BigInt("0"))
		await expect(DSPSEpiJo9.upgradeTo.call(addressXAyefuh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const addressyPZ0Zmb = accounts[3]
		const addressAVjueF = accounts[3]
		const uint256alxjVq = await DSPxkcMxkx.balanceOf.call(addressyPZ0Zmb, {from: accounts[1]});
		const boolOG32i3H = await DSPxkcMxkx.unfreezeAccount.call(addressAVjueF, {from: accounts[4]});

		assert.equal(uint256alxjVq, BigInt("0"))
		await expect(DSPxkcMxkx.unfreezeAccount.call(addressAVjueF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const addresscoiH6u = accounts[0]
		const uintfHXjthy = BigInt("63")
		const address6L3DYS = accounts[5]
		const addressWRxfCPv = accounts[0]
		const addressCHo1sC = await DSPxkcMxkx.upgradeTo.call(addresscoiH6u, {from: accounts[4]});
		const boolBfKjjD = await DSPxkcMxkx.transferFrom.call(addressWRxfCPv, address6L3DYS, uintfHXjthy, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPxkcMxkx.transferFrom.call(addressWRxfCPv, address6L3DYS, uintfHXjthy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const addressUb6NjDP = accounts[4]
		await DSPxkcMxkx.pause.call({from: accounts[4]});
		const uint256alxjVq = await DSPxkcMxkx.balanceOf.call(addressUb6NjDP, {from: accounts[1]});

		await expect(DSPxkcMxkx.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uintsXN1f8n = BigInt("1868")
		const addressDuhMm0 = accounts[4]
		const addresscCxF0O = accounts[4]
		const boolrpdQHSU = await DSPxkcMxkx.transfer.call(addressDuhMm0, uintsXN1f8n, {from: accounts[4]});
		await DSPxkcMxkx.f.call({from: accounts[2]});
		const uint256alxjVq = await DSPxkcMxkx.balanceOf.call(addresscCxF0O, {from: accounts[1]});

		assert.equal(boolrpdQHSU, true)
		await expect(DSPxkcMxkx.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uintzUsgSJJ = BigInt("395")
		const addressBdLCedC = accounts[3]
		const uintfTQe2L6 = BigInt("859")
		const addressO8bXWMo = "0x0000000000000000000000000000000000000001"
		const addressisRii3x = accounts[4]
		const boolpT6zbHx = await DSPxkcMxkx.increaseAllowance.call(addressBdLCedC, uintzUsgSJJ, {from: accounts[2]});
		const boolNFngPr0 = await DSPxkcMxkx.unlock.call(addressO8bXWMo, uintfTQe2L6, {from: accounts[2]});
		const uint256alxjVq = await DSPxkcMxkx.balanceOf.call(addressisRii3x, {from: accounts[1]});

		assert.equal(boolpT6zbHx, true)
		await expect(DSPxkcMxkx.unlock.call(addressO8bXWMo, uintfTQe2L6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const addressxlUBezm = accounts[4]
		const addresscGkC1bh = accounts[3]
		const uint256alxjVq = await DSPxkcMxkx.balanceOf.call(addressxlUBezm, {from: accounts[1]});
		const uint8O6EQk3P = await DSPxkcMxkx.decimals.call({from: accounts[5]});
		const uint256Er77Cob = await DSPxkcMxkx.balanceOf.call(addresscGkC1bh, {from: accounts[0]});

		assert.equal(uint256Er77Cob, BigInt("0"))
		assert.equal(uint256alxjVq, BigInt("100000000000000000000000000000"))
		assert.equal(uint8O6EQk3P, BigInt("18"))
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const uint0wtFri = BigInt("1728")
		const addressDu1jtW = accounts[0]
		const uintMgr7bq = BigInt("63")
		const addressc6VqGe = accounts[4]
		const addressvf3IM41 = accounts[4]
		const boolqTwZU1I = await DSPxkcMxkx.mint.call(addressDu1jtW, uint0wtFri, {from: accounts[4]});
		const boolBfKjjD = await DSPxkcMxkx.transferFrom.call(addressvf3IM41, addressc6VqGe, uintMgr7bq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolqTwZU1I, true)
		await expect(DSPxkcMxkx.transferFrom.call(addressvf3IM41, addressc6VqGe, uintMgr7bq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPsLO4ZwW = await DSP.new({from: accounts[0]});
		const addressgOWzIdr = accounts[0]
		const addressDKk0SK = accounts[4]
		const uinttxFm8SI = BigInt("1874")
		const addressLJXDwyM = accounts[1]
		const addressczsdwoe = await DSPsLO4ZwW.removePauser.call(addressgOWzIdr, {from: accounts[0]});
		const boolwLb2xYg = await DSPsLO4ZwW.paused.call({from: accounts[1]});
		await DSPsLO4ZwW.whenPaused.call({from: accounts[5]});
		const addressdZEVIKT = await DSPsLO4ZwW.transferOwnership.call(addressDKk0SK, {from: accounts[0]});
		const boolq1LHfHW = await DSPsLO4ZwW.burnFrombyOwner.call(addressLJXDwyM, uinttxFm8SI, {from: accounts[1]});

		assert.equal(boolwLb2xYg, false)
		await expect(DSPsLO4ZwW.whenPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const addressi9ivxib = accounts[0]
		const uintAPnGIaF = BigInt("63")
		const addressHuwpVoM = accounts[5]
		const addressOFaSTG = accounts[4]
		const addressUrAmgkd = await DSPxkcMxkx.transferOwnership.call(addressi9ivxib, {from: accounts[4]});
		const boolBfKjjD = await DSPxkcMxkx.transferFrom.call(addressOFaSTG, addressHuwpVoM, uintAPnGIaF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPxkcMxkx.transferFrom.call(addressOFaSTG, addressHuwpVoM, uintAPnGIaF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const addresspXMEckB = accounts[3]
		const uintlTJLgF = BigInt("308")
		const uintBdJG4vc = BigInt("203")
		const addressRex35C7 = accounts[1]
		const uintN2AbwOQ = BigInt("941")
		const addressFPpvN9M = accounts[1]
		const uint256alxjVq = await DSPxkcMxkx.balanceOf.call(addresspXMEckB, {from: accounts[1]});
		const boolwDZBH8X = await DSPxkcMxkx.lock.call(addressRex35C7, uintBdJG4vc, uintlTJLgF, {from: accounts[4]});
		const boolP5LiEhg = await DSPxkcMxkx.transfer.call(addressFPpvN9M, uintN2AbwOQ, {from: accounts[2]});

		assert.equal(uint256alxjVq, BigInt("0"))
		await expect(DSPxkcMxkx.lock.call(addressRex35C7, uintBdJG4vc, uintlTJLgF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxkcMxkx = await DSP.new({from: accounts[4]});
		const addressu1CTcmO = accounts[4]
		const uintmHukIzn = BigInt("1477")
		const addressK6oe5R = accounts[2]
		await DSPxkcMxkx.pause.call({from: accounts[4]});
		const booljX1958u = await DSPxkcMxkx.isOwner.call(addressu1CTcmO, {from: accounts[1]});
		const boolPK2e0wn = await DSPxkcMxkx.transfer.call(addressK6oe5R, uintmHukIzn, {from: accounts[4]});

		await expect(DSPxkcMxkx.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})