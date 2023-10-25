const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringLvPKBeh = "YE9R0lEpDgINkdEl1leKDIJ0C1RlgCykxkhWeRmPpTGJG3GdLcfzWz9a"
		const stringhNgAMX3 = "f01doJXl2x7L5p6VqSBWJbs5nGfd4RzJeFCvAldhHth"
		const uintfTOIZZo = BigInt("38")
		const DSPLsVjm4 = await DSP.new(stringLvPKBeh, stringhNgAMX3, uintfTOIZZo, {from: accounts[3]});
		const addressZIwNqNV = accounts[2]
		const uintDXoWFIp = BigInt("2020")
		const addressDrRyn3q = accounts[2]
		const uintIDRJilc = BigInt("201")
		const addressysgJR36 = accounts[1]
		await DSPLsVjm4.renouncePauser.call({from: accounts[0]});
		const boolYWOz7WA = await DSPLsVjm4.freezeAccount.call(addressZIwNqNV, {from: accounts[2]});
		await DSPLsVjm4.whenPaused.call({from: accounts[2]});
		await DSPLsVjm4.renouncePauser.call({from: accounts[4]});
		const boolCrlu07b = await DSPLsVjm4.mint.call(addressDrRyn3q, uintDXoWFIp, {from: accounts[5]});
		const boolvVyAhFB = await DSPLsVjm4.unlock.call(addressysgJR36, uintIDRJilc, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DSP', async () => {
		const DSPIPXFUb1 = await DSP.new({from: accounts[4]});
		const uintQznS5T = BigInt("527")
		const address9cf9ew = accounts[2]
		const boolCQLkQhn = await DSPIPXFUb1.burnFrombyOwner.call(address9cf9ew, uintQznS5T, {from: accounts[4]});
		const uint256mom78Kf = await DSPIPXFUb1.totalSupply.call({from: accounts[2]});
		await DSPIPXFUb1.renouncePauser.call({from: accounts[3]});
		const boolSKKQTqw = await DSPIPXFUb1.paused.call({from: accounts[4]});
		const stringuaDZPhl = await DSPIPXFUb1.name.call({from: accounts[5]});

		await expect(DSPIPXFUb1.burnFrombyOwner.call(address9cf9ew, uintQznS5T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxaOeLNs = await DSP.new({from: accounts[1]});
		const uintHt2lgcb = BigInt("244")
		const addressgmnd6k0 = accounts[1]
		const addresswOSGtS = accounts[1]
		await DSPxaOeLNs.renouncePauser.call({from: accounts[4]});
		const bool8mrQtT = await DSPxaOeLNs.transferFrom.call(addresswOSGtS, addressgmnd6k0, uintHt2lgcb, {from: accounts[1]});
		await DSPxaOeLNs.unpause.call({from: accounts[1]});

		await expect(DSPxaOeLNs.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPSyBZSHb = await DSP.new({from: accounts[1]});
		const addresswDSCt6 = "0x0000000000000000000000000000000000000001"
		const addressVwFMUav = accounts[4]
		await DSPSyBZSHb.pause.call({from: accounts[3]});
		const boolEhxYsxj = await DSPSyBZSHb.isPauser.call(addresswDSCt6, {from: accounts[5]});
		const uint2563v79wS = await DSPSyBZSHb.balanceOf.call(addressVwFMUav, {from: accounts[2]});

		await expect(DSPSyBZSHb.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPTsn2jyq = await DSP.new({from: accounts[4]});
		const uintzJ6I0e = BigInt("298")
		const addressT0bvVic = accounts[0]
		const addresslKyAqg0 = accounts[2]
		const addresskkCIs3 = accounts[3]
		const booliCjfg7A = await DSPTsn2jyq.approve.call(addressT0bvVic, uintzJ6I0e, {from: accounts[4]});
		const boolqor8kIs = await DSPTsn2jyq.isPauser.call(addresslKyAqg0, {from: accounts[4]});
		await DSPTsn2jyq.f.call({from: accounts[0]});
		const uint256557Dpo = await DSPTsn2jyq.balanceOf.call(addresskkCIs3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booliCjfg7A, true)
		assert.equal(boolqor8kIs, false)
		await expect(DSPTsn2jyq.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxaOeLNs = await DSP.new({from: accounts[1]});
		const addressCWdQ5jG = accounts[0]
		const addressVAFOdye = accounts[0]
		const uintbZVKE6 = BigInt("262")
		const addresseBeJYIA = accounts[1]
		const addressMCsB9d = accounts[1]
		const uint256ZIuAwR3 = await DSPxaOeLNs.allowance.call(addressVAFOdye, addressCWdQ5jG, {from: accounts[5]});
		await DSPxaOeLNs.renouncePauser.call({from: accounts[4]});
		const bool8mrQtT = await DSPxaOeLNs.transferFrom.call(addressMCsB9d, addresseBeJYIA, uintbZVKE6, {from: accounts[1]});
		await DSPxaOeLNs.renouncePauser.call({from: accounts[0]});
		await DSPxaOeLNs.unpause.call({from: accounts[1]});
		await DSPxaOeLNs.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ZIuAwR3, BigInt("0"))
		await expect(DSPxaOeLNs.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const addressY7Uo2Cu = accounts[2]
		const uintyUFmD4U = BigInt("602")
		const addressn0iMdtv = accounts[3]
		const addressKkcBe51 = accounts[4]
		const addressWBwVYBU = "0x0000000000000000000000000000000000000001"
		const uint256EzfsicZ = await DSPGzfWdtK.balanceOf.call(addressY7Uo2Cu, {from: accounts[2]});
		const boolXTJ3JC = await DSPGzfWdtK.burnFrombyOwner.call(addressn0iMdtv, uintyUFmD4U, {from: accounts[3]});
		await DSPGzfWdtK.whenNotPaused.call({from: accounts[2]});
		const uint8hxWY0Gd = await DSPGzfWdtK.decimals.call({from: accounts[4]});
		const uint256YsXM29 = await DSPGzfWdtK.balanceOf.call(addressKkcBe51, {from: accounts[3]});
		const addressjFaVUEM = await DSPGzfWdtK.upgradeTo.call(addressWBwVYBU, {from: accounts[2]});

		assert.equal(boolXTJ3JC, true)
		assert.equal(uint256EzfsicZ, BigInt("0"))
		await expect(DSPGzfWdtK.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const addressO6k6cYb = accounts[2]
		const uintOzV6PBU = BigInt("602")
		const addressWZ8Ezsr = accounts[3]
		const uintsy85gyb = BigInt("1511")
		const addresstXXNwcQ = accounts[5]
		const addresslBoP1UH = "0x0000000000000000000000000000000000000001"
		const uint256EzfsicZ = await DSPGzfWdtK.balanceOf.call(addressO6k6cYb, {from: accounts[2]});
		const boolXTJ3JC = await DSPGzfWdtK.burnFrombyOwner.call(addressWZ8Ezsr, uintOzV6PBU, {from: accounts[3]});
		const boolHsMHzwn = await DSPGzfWdtK.increaseAllowance.call(addresstXXNwcQ, uintsy85gyb, {from: accounts[1]});
		await DSPGzfWdtK.whenNotPaused.call({from: accounts[2]});
		const addressjFaVUEM = await DSPGzfWdtK.upgradeTo.call(addresslBoP1UH, {from: accounts[2]});

		assert.equal(boolHsMHzwn, true)
		assert.equal(boolXTJ3JC, true)
		assert.equal(uint256EzfsicZ, BigInt("0"))
		await expect(DSPGzfWdtK.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const addressbFxo0h = accounts[2]
		const uintcEgULCU = BigInt("602")
		const addressYWRgptA = accounts[3]
		const addressDK5uO4m = accounts[2]
		const addressZgdR1Dc = accounts[4]
		const address7Ua9H3 = "0x0000000000000000000000000000000000000001"
		const uint256EzfsicZ = await DSPGzfWdtK.balanceOf.call(addressbFxo0h, {from: accounts[2]});
		const uint8g2Emcrr = await DSPGzfWdtK.decimals.call({from: accounts[0]});
		const boolXTJ3JC = await DSPGzfWdtK.burnFrombyOwner.call(addressYWRgptA, uintcEgULCU, {from: accounts[3]});
		const uint256vGnYap = await DSPGzfWdtK.balanceOf.call(addressDK5uO4m, {from: accounts[0]});
		await DSPGzfWdtK.whenNotPaused.call({from: accounts[2]});
		const uint256YsXM29 = await DSPGzfWdtK.balanceOf.call(addressZgdR1Dc, {from: accounts[3]});
		const addressjFaVUEM = await DSPGzfWdtK.upgradeTo.call(address7Ua9H3, {from: accounts[2]});

		assert.equal(boolXTJ3JC, true)
		assert.equal(uint256EzfsicZ, BigInt("0"))
		assert.equal(uint256vGnYap, BigInt("0"))
		assert.equal(uint8g2Emcrr, BigInt("18"))
		await expect(DSPGzfWdtK.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const addressrM43pUf = accounts[3]
		const addresswyGwBgf = accounts[2]
		const uintvPPoyDW = BigInt("602")
		const addressHoieHHm = accounts[3]
		const addressFQ2o45l = accounts[4]
		const addressbyGSBGT = "0x0000000000000000000000000000000000000001"
		const addressJtviSV = await DSPGzfWdtK.transferOwnership.call(addressrM43pUf, {from: accounts[3]});
		const uint256EzfsicZ = await DSPGzfWdtK.balanceOf.call(addresswyGwBgf, {from: accounts[2]});
		const boolXTJ3JC = await DSPGzfWdtK.burnFrombyOwner.call(addressHoieHHm, uintvPPoyDW, {from: accounts[3]});
		await DSPGzfWdtK.whenNotPaused.call({from: accounts[2]});
		const uint256YsXM29 = await DSPGzfWdtK.balanceOf.call(addressFQ2o45l, {from: accounts[3]});
		const addressjFaVUEM = await DSPGzfWdtK.upgradeTo.call(addressbyGSBGT, {from: accounts[2]});

		assert.equal(boolXTJ3JC, true)
		assert.equal(uint256EzfsicZ, BigInt("0"))
		await expect(DSPGzfWdtK.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const addresskBEE7v0 = accounts[2]
		const uintS5wbbNG = BigInt("602")
		const addressQBledZW = accounts[3]
		const uintyZyOl60 = BigInt("1439")
		const addressdG9C4Hp = accounts[1]
		const addressRpm4d9R = accounts[0]
		const addresser66BOa = accounts[4]
		const addressrvXEp2 = accounts[0]
		const addresstXD9mlK = "0x0000000000000000000000000000000000000001"
		const uint256EzfsicZ = await DSPGzfWdtK.balanceOf.call(addresskBEE7v0, {from: accounts[2]});
		const boolXTJ3JC = await DSPGzfWdtK.burnFrombyOwner.call(addressQBledZW, uintS5wbbNG, {from: accounts[3]});
		const boolzGlmSL = await DSPGzfWdtK.transferFrom.call(addressRpm4d9R, addressdG9C4Hp, uintyZyOl60, {from: accounts[4]});
		await DSPGzfWdtK.whenNotPaused.call({from: accounts[2]});
		const uint256YsXM29 = await DSPGzfWdtK.balanceOf.call(addresser66BOa, {from: accounts[3]});
		const addressARKQ4SG = await DSPGzfWdtK.upgradeTo.call(addressrvXEp2, {from: accounts[1]});
		const addressjFaVUEM = await DSPGzfWdtK.upgradeTo.call(addresstXD9mlK, {from: accounts[2]});

		assert.equal(boolXTJ3JC, true)
		assert.equal(uint256EzfsicZ, BigInt("0"))
		await expect(DSPGzfWdtK.transferFrom.call(addressRpm4d9R, addressdG9C4Hp, uintyZyOl60, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPr8DI2VK = await DSP.new({from: accounts[1]});
		const addressi33Z4tz = accounts[4]
		const addressWdo2Gd9 = accounts[4]
		const uintuXMh1zJ = BigInt("882")
		const addressJYQ7U4 = accounts[1]
		const uintST7HRVA = BigInt("1268")
		const addressCLzR6jg = accounts[2]
		const addresssDusu1h = "0x0000000000000000000000000000000000000001"
		const uint256oTo1jyV = await DSPr8DI2VK.balanceOf.call(addressi33Z4tz, {from: accounts[4]});
		const addresspKiuKy = await DSPr8DI2VK.addPauser.call(addressWdo2Gd9, {from: accounts[1]});
		const booljIbHsWi = await DSPr8DI2VK.unlock.call(addressJYQ7U4, uintuXMh1zJ, {from: accounts[1]});
		const boolPuZznMy = await DSPr8DI2VK.transferFrom.call(addresssDusu1h, addressCLzR6jg, uintST7HRVA, {from: accounts[2]});

		assert.equal(uint256oTo1jyV, BigInt("0"))
		await expect(DSPr8DI2VK.unlock.call(addressJYQ7U4, uintuXMh1zJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const addressqsrejxD = accounts[3]
		const uintj1mb4w1 = BigInt("1750")
		const addressZy5TDo = accounts[5]
		const uintxHIRMEa = BigInt("602")
		const addressimSkcpT = accounts[3]
		const addresszwoS8IF = "0x0000000000000000000000000000000000000001"
		const uint256EzfsicZ = await DSPGzfWdtK.balanceOf.call(addressqsrejxD, {from: accounts[2]});
		const boolbh99TwN = await DSPGzfWdtK.transfer.call(addressZy5TDo, uintj1mb4w1, {from: accounts[1]});
		const boolXTJ3JC = await DSPGzfWdtK.burnFrombyOwner.call(addressimSkcpT, uintxHIRMEa, {from: accounts[3]});
		const addressjFaVUEM = await DSPGzfWdtK.upgradeTo.call(addresszwoS8IF, {from: accounts[2]});

		assert.equal(uint256EzfsicZ, BigInt("100000000000000000000000000000"))
		await expect(DSPGzfWdtK.transfer.call(addressZy5TDo, uintj1mb4w1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjP2cHxS = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressmW0csyF = accounts[1]
		const uint256sZLXjM7 = await DSPjP2cHxS.totalSupply.call({from: accounts[5]});
		const boolnPgXzPG = await DSPjP2cHxS.freezeAccount.call(addressmW0csyF, {from: accounts[4]});
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const addressRLQ5ZgK = accounts[3]
		const uintUwsL9y6 = BigInt("1750")
		const addressB15NFvZ = accounts[5]
		const addressKIPqcLD = accounts[4]
		const uintxGJbhi = BigInt("602")
		const addressAjDubE3 = accounts[3]
		const addresswHjZv1N = "0x0000000000000000000000000000000000000001"
		const uint256EzfsicZ = await DSPGzfWdtK.balanceOf.call(addressRLQ5ZgK, {from: accounts[2]});
		const stringBHP04mu = await DSPGzfWdtK.symbol.call({from: accounts[1]});
		const boolbh99TwN = await DSPGzfWdtK.transfer.call(addressB15NFvZ, uintUwsL9y6, {from: accounts[1]});
		const addresszVb2xJ = await DSPGzfWdtK.upgradeTo.call(addressKIPqcLD, {from: accounts[4]});
		const boolXTJ3JC = await DSPGzfWdtK.burnFrombyOwner.call(addressAjDubE3, uintxGJbhi, {from: accounts[3]});
		const addressjFaVUEM = await DSPGzfWdtK.upgradeTo.call(addresswHjZv1N, {from: accounts[2]});

		assert.equal(stringBHP04mu, "DSP")
		assert.equal(uint256EzfsicZ, BigInt("100000000000000000000000000000"))
		await expect(DSPGzfWdtK.transfer.call(addressB15NFvZ, uintUwsL9y6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const addressYdEBFBM = accounts[3]
		const uintYKY6kFO = BigInt("1750")
		const addressORAQcO = accounts[5]
		const addressTvJxDQP = "0x0000000000000000000000000000000000000001"
		const uint256EzfsicZ = await DSPGzfWdtK.balanceOf.call(addressYdEBFBM, {from: accounts[2]});
		const uint256S5jHptB = await DSPGzfWdtK.totalSupply.call({from: accounts[1]});
		await DSPGzfWdtK.renouncePauser.call({from: accounts[1]});
		const boolbh99TwN = await DSPGzfWdtK.transfer.call(addressORAQcO, uintYKY6kFO, {from: accounts[1]});
		const boolTtiRUT = await DSPGzfWdtK.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const addressjFaVUEM = await DSPGzfWdtK.upgradeTo.call(addressTvJxDQP, {from: accounts[2]});

		assert.equal(uint256EzfsicZ, BigInt("100000000000000000000000000000"))
		assert.equal(uint256S5jHptB, BigInt("100000000000000000000000000000"))
		await expect(DSPGzfWdtK.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const uintWnKqKrG = BigInt("592")
		const uinthVbacgz = BigInt("78")
		const addresscZjVTrB = accounts[3]
		const addressA8HJKbi = accounts[5]
		const boolKBozybI = await DSPGzfWdtK.transferWithLock.call(addresscZjVTrB, uinthVbacgz, uintWnKqKrG, {from: accounts[3]});
		const uint256EzfsicZ = await DSPGzfWdtK.balanceOf.call(addressA8HJKbi, {from: accounts[2]});

		assert.equal(boolKBozybI, true)
		assert.equal(uint256EzfsicZ, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const addressCxgxaG = accounts[2]
		const addressapz62rG = accounts[5]
		const boolfzT6Hp = await DSPGzfWdtK.freezeAccount.call(addressCxgxaG, {from: accounts[3]});
		const uint256EzfsicZ = await DSPGzfWdtK.balanceOf.call(addressapz62rG, {from: accounts[2]});

		assert.equal(boolfzT6Hp, true)
		assert.equal(uint256EzfsicZ, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const uintD1n2pvM = BigInt("1628")
		const addressfYBD0nO = accounts[2]
		const addressIqRrKq6 = accounts[2]
		const addressdWNRwmX = accounts[5]
		const boolaEr1nZ3 = await DSPGzfWdtK.mint.call(addressfYBD0nO, uintD1n2pvM, {from: accounts[3]});
		const addresslp0cEWz = await DSPGzfWdtK.addPauser.call(addressIqRrKq6, {from: accounts[0]});
		const uint256EzfsicZ = await DSPGzfWdtK.balanceOf.call(addressdWNRwmX, {from: accounts[2]});

		assert.equal(boolaEr1nZ3, true)
		await expect(DSPGzfWdtK.addPauser.call(addressIqRrKq6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPVW5108t = await DSP.new({from: accounts[3]});
		const uintr2qQAG4 = BigInt("465")
		const uintCOD4h5Y = BigInt("407")
		const addresslsOQxN5 = accounts[3]
		const addressmU9Kbx4 = accounts[4]
		const boolM49Eam = await DSPVW5108t.lock.call(addresslsOQxN5, uintCOD4h5Y, uintr2qQAG4, {from: accounts[3]});
		const addresspOVcPWE = await DSPVW5108t.addPauser.call(addressmU9Kbx4, {from: accounts[3]});
		const boolFpxGCWa = await DSPVW5108t.paused.call({from: accounts[4]});

		assert.equal(boolFpxGCWa, false)
		assert.equal(boolM49Eam, true)
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const uintyEgiirZ = BigInt("1205")
		const address5aga4q = accounts[4]
		const addresssmit2Za = accounts[5]
		const booloFRfFBf = await DSPGzfWdtK.decreaseAllowance.call(address5aga4q, uintyEgiirZ, {from: accounts[1]});
		const uint256EzfsicZ = await DSPGzfWdtK.balanceOf.call(addresssmit2Za, {from: accounts[2]});

		await expect(DSPGzfWdtK.decreaseAllowance.call(address5aga4q, uintyEgiirZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const addressYs6WrfD = accounts[5]
		const addressQsQKDM7 = accounts[1]
		const uint256EzfsicZ = await DSPGzfWdtK.balanceOf.call(addressYs6WrfD, {from: accounts[2]});
		const boolTyPaSCh = await DSPGzfWdtK.unfreezeAccount.call(addressQsQKDM7, {from: accounts[3]});

		assert.equal(uint256EzfsicZ, BigInt("0"))
		await expect(DSPGzfWdtK.unfreezeAccount.call(addressQsQKDM7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const uintRQuIzey = BigInt("182")
		const addressFzTzbdF = accounts[2]
		const addressCiwBcH6 = accounts[1]
		const stringItEFRBv = await DSPGzfWdtK.name.call({from: accounts[2]});
		await DSPGzfWdtK.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		const boolSdGHBe9 = await DSPGzfWdtK.transferFrom.call(addressCiwBcH6, addressFzTzbdF, uintRQuIzey, {from: accounts[0]});

		assert.equal(stringItEFRBv, "DSP")
		await expect(DSPGzfWdtK.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGzfWdtK = await DSP.new({from: accounts[3]});
		const addressP52Ai8f = accounts[3]
		const uintGvyq2q = BigInt("1989")
		const addressXkoN7p = accounts[2]
		const addresskZ3BjuG = accounts[2]
		const boollrW8ZWU = await DSPGzfWdtK.isOwner.call(addressP52Ai8f, {from: accounts[4]});
		await DSPGzfWdtK.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		await DSPGzfWdtK.whenNotPaused.call({from: accounts[5]});
		const boolxy1U4w3 = await DSPGzfWdtK.transferFrom.call(addresskZ3BjuG, addressXkoN7p, uintGvyq2q, {from: accounts[0]});

		assert.equal(boollrW8ZWU, true)
		await expect(DSPGzfWdtK.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})