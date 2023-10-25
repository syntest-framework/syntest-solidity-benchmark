const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringR0IPBde = "T47StUGPvwp0GK75jev8hR9yEGbx1KJ1yYjfFiD3AVAguJbzX"
		const stringpJr0BBo = "ePjpCu5GMfprk31QDFAeNtBoANTWLxX4VEqIoHFQn7VArdKxOgB2UTkqduvQxviLj3T4FK4HGURuHYvLKE6wU3on3B09LC8j"
		const uintPkNDeJO = BigInt("24")
		const DSPIKDUoX2 = await DSP.new(stringR0IPBde, stringpJr0BBo, uintPkNDeJO, {from: accounts[3]});
		const uintfZgwwkS = BigInt("1714")
		const addressZeg2SY0 = accounts[5]
		await DSPIKDUoX2.renouncePauser.call({from: accounts[2]});
		const boolVWMiw4o = await DSPIKDUoX2.burnFrombyOwner.call(addressZeg2SY0, uintfZgwwkS, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uintpBjo4Oa = BigInt("1946")
		const addressY0mrw2B = accounts[4]
		const addressCYSQw5j = accounts[0]
		const stringr4S7Wy = await DSPhy0rao7.symbol.call({from: accounts[0]});
		const booldATGqM = await DSPhy0rao7.transferFrom.call(addressCYSQw5j, addressY0mrw2B, uintpBjo4Oa, {from: accounts[0]});
		await DSPhy0rao7.onlyOwner.call({from: accounts[5]});

		assert.equal(stringr4S7Wy, "DSP")
		await expect(DSPhy0rao7.transferFrom.call(addressCYSQw5j, addressY0mrw2B, uintpBjo4Oa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPlHHhLZU = await DSP.new({from: accounts[3]});
		const addresseuNsyZL = accounts[0]
		const addressunkMb1I = accounts[4]
		const uintJtRe8dp = BigInt("253")
		const addressjI23Kla = accounts[2]
		const addressIpSNwk = accounts[3]
		const boolCvMDwe4 = await DSPlHHhLZU.isOwner.call(addresseuNsyZL, {from: accounts[4]});
		await DSPlHHhLZU.unpause.call({from: accounts[4]});
		const uint256PSOCmrY = await DSPlHHhLZU.balanceOf.call(addressunkMb1I, {from: accounts[5]});
		const boolrTvEVQ0 = await DSPlHHhLZU.transfer.call(addressjI23Kla, uintJtRe8dp, {from: "0x0000000000000000000000000000000000000001"});
		const addressgpfJmRg = await DSPlHHhLZU.upgradeTo.call(addressIpSNwk, {from: accounts[1]});

		assert.equal(boolCvMDwe4, false)
		await expect(DSPlHHhLZU.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uintmO4Im0w = BigInt("1086")
		const addressoCJjWE2 = accounts[1]
		const uintt2x0h1M = BigInt("1946")
		const addressKrlu8WW = accounts[4]
		const addressuxxSeYO = accounts[0]
		const boolhV9jSsd = await DSPhy0rao7.transfer.call(addressoCJjWE2, uintmO4Im0w, {from: accounts[3]});
		const stringr4S7Wy = await DSPhy0rao7.symbol.call({from: accounts[0]});
		const booldATGqM = await DSPhy0rao7.transferFrom.call(addressuxxSeYO, addressKrlu8WW, uintt2x0h1M, {from: accounts[0]});
		const boolFranOhL = await DSPhy0rao7.paused.call({from: accounts[4]});
		await DSPhy0rao7.onlyOwner.call({from: accounts[5]});

		assert.equal(boolhV9jSsd, true)
		assert.equal(stringr4S7Wy, "DSP")
		await expect(DSPhy0rao7.transferFrom.call(addressuxxSeYO, addressKrlu8WW, uintt2x0h1M, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const stringr4S7Wy = await DSPhy0rao7.symbol.call({from: accounts[0]});
		await DSPhy0rao7.onlyOwner.call({from: accounts[5]});

		assert.equal(stringr4S7Wy, "DSP")
		await expect(DSPhy0rao7.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uinthgGZjfk = BigInt("1946")
		const addressVwQ0RjU = accounts[5]
		const addressoXHKmGF = accounts[0]
		const uintHL2HOEO = BigInt("1732")
		const uintDZcFjKg = BigInt("1242")
		const addressTIPkwN7 = accounts[1]
		const uint8vXyORF7 = await DSPhy0rao7.decimals.call({from: accounts[3]});
		const stringr4S7Wy = await DSPhy0rao7.symbol.call({from: accounts[0]});
		const booldATGqM = await DSPhy0rao7.transferFrom.call(addressoXHKmGF, addressVwQ0RjU, uinthgGZjfk, {from: accounts[0]});
		await DSPhy0rao7.onlyOwner.call({from: accounts[5]});
		const boolMHHFwcj = await DSPhy0rao7.lock.call(addressTIPkwN7, uintDZcFjKg, uintHL2HOEO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringr4S7Wy, "DSP")
		assert.equal(uint8vXyORF7, BigInt("18"))
		await expect(DSPhy0rao7.transferFrom.call(addressoXHKmGF, addressVwQ0RjU, uinthgGZjfk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const addressKy7pg5 = accounts[4]
		const address7M7mTk = accounts[1]
		const stringr4S7Wy = await DSPhy0rao7.symbol.call({from: accounts[0]});
		const uint256oETk6Jy = await DSPhy0rao7.allowance.call(address7M7mTk, addressKy7pg5, {from: accounts[5]});
		await DSPhy0rao7.onlyOwner.call({from: accounts[5]});

		assert.equal(stringr4S7Wy, "DSP")
		assert.equal(uint256oETk6Jy, BigInt("0"))
		await expect(DSPhy0rao7.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const addressvvF5Rsg = accounts[1]
		const uintw1DfqUT = BigInt("1076")
		const address0tAW0o = accounts[2]
		const addressh5Nqj8X = accounts[5]
		const uintPfKeS0G = BigInt("1086")
		const addressiU15RrB = accounts[1]
		const uintRQBTnIB = BigInt("1946")
		const addressaSRha1J = accounts[4]
		const addressRFj1OFb = accounts[0]
		const uint256sirbHzI = await DSPhy0rao7.balanceOf.call(addressvvF5Rsg, {from: accounts[2]});
		const boolkyH4O2X = await DSPhy0rao7.transferFrom.call(addressh5Nqj8X, address0tAW0o, uintw1DfqUT, {from: accounts[0]});
		const boolhV9jSsd = await DSPhy0rao7.transfer.call(addressiU15RrB, uintPfKeS0G, {from: accounts[3]});
		const stringr4S7Wy = await DSPhy0rao7.symbol.call({from: accounts[0]});
		const booldATGqM = await DSPhy0rao7.transferFrom.call(addressRFj1OFb, addressaSRha1J, uintRQBTnIB, {from: accounts[0]});
		const boolFranOhL = await DSPhy0rao7.paused.call({from: accounts[4]});

		assert.equal(uint256sirbHzI, BigInt("0"))
		await expect(DSPhy0rao7.transferFrom.call(addressh5Nqj8X, address0tAW0o, uintw1DfqUT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uintd0qQX4l = BigInt("1086")
		const addressEAIXF3 = accounts[1]
		const boolhV9jSsd = await DSPhy0rao7.transfer.call(addressEAIXF3, uintd0qQX4l, {from: accounts[3]});
		const stringr4S7Wy = await DSPhy0rao7.symbol.call({from: accounts[0]});
		const boolFranOhL = await DSPhy0rao7.paused.call({from: accounts[4]});

		assert.equal(boolFranOhL, false)
		assert.equal(boolhV9jSsd, true)
		assert.equal(stringr4S7Wy, "DSP")
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uintooqnT1t = BigInt("1086")
		const addressfqG9UOX = accounts[1]
		const addressHF0iv8 = accounts[4]
		const boolhV9jSsd = await DSPhy0rao7.transfer.call(addressfqG9UOX, uintooqnT1t, {from: accounts[3]});
		const stringr4S7Wy = await DSPhy0rao7.symbol.call({from: accounts[0]});
		const addressbrPr0q = await DSPhy0rao7.addPauser.call(addressHF0iv8, {from: accounts[3]});
		const boolFranOhL = await DSPhy0rao7.paused.call({from: accounts[4]});

		assert.equal(boolFranOhL, false)
		assert.equal(boolhV9jSsd, true)
		assert.equal(stringr4S7Wy, "DSP")
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uintlLJb8y1 = BigInt("1086")
		const addressKECgJOP = accounts[1]
		const boolhV9jSsd = await DSPhy0rao7.transfer.call(addressKECgJOP, uintlLJb8y1, {from: accounts[3]});
		const stringr4S7Wy = await DSPhy0rao7.symbol.call({from: accounts[0]});
		const uint256CsU11jb = await DSPhy0rao7.totalSupply.call({from: accounts[0]});
		const boolFranOhL = await DSPhy0rao7.paused.call({from: accounts[4]});

		assert.equal(boolFranOhL, false)
		assert.equal(boolhV9jSsd, true)
		assert.equal(stringr4S7Wy, "DSP")
		assert.equal(uint256CsU11jb, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uintJ4JYXa5 = BigInt("1595")
		const addressSvCrDFl = accounts[1]
		const uintH6YF6N = BigInt("448")
		const addressqatyTfk = accounts[2]
		const uintWYwSdpF = BigInt("1946")
		const addresstVdJnGj = accounts[5]
		const addresspe33dAI = accounts[0]
		const stringr4S7Wy = await DSPhy0rao7.symbol.call({from: accounts[0]});
		const boolHzbOQV = await DSPhy0rao7.unlock.call(addressSvCrDFl, uintJ4JYXa5, {from: accounts[3]});
		const boolnTxfbr0 = await DSPhy0rao7.decreaseAllowance.call(addressqatyTfk, uintH6YF6N, {from: accounts[4]});
		const booldATGqM = await DSPhy0rao7.transferFrom.call(addresspe33dAI, addresstVdJnGj, uintWYwSdpF, {from: accounts[0]});
		await DSPhy0rao7.whenPaused.call({from: accounts[2]});

		assert.equal(stringr4S7Wy, "DSP")
		await expect(DSPhy0rao7.unlock.call(addressSvCrDFl, uintJ4JYXa5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPIJfCiN3 = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKQ6Xx29 = accounts[3]
		const addressDUNDVjc = accounts[2]
		const uintQDi4WHR = BigInt("1550")
		const addressUguMH3v = accounts[1]
		const addressZHA9cU = accounts[3]
		const uint256Y7COayL = await DSPIJfCiN3.allowance.call(addressDUNDVjc, addressKQ6Xx29, {from: accounts[1]});
		await DSPIJfCiN3.renouncePauser.call({from: accounts[2]});
		const boolC6dQIWc = await DSPIJfCiN3.paused.call({from: accounts[2]});
		await DSPIJfCiN3.renouncePauser.call({from: accounts[2]});
		const boolkBkME6u = await DSPIJfCiN3.transferFrom.call(addressZHA9cU, addressUguMH3v, uintQDi4WHR, {from: accounts[2]});
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const addressrglpY6J = accounts[3]
		const uintXMD2CQg = BigInt("1946")
		const addressDr2W4MZ = accounts[4]
		const addressrjoTDv = accounts[0]
		const stringr4S7Wy = await DSPhy0rao7.symbol.call({from: accounts[0]});
		const boolElgZ6dY = await DSPhy0rao7.isOwner.call(addressrglpY6J, {from: accounts[4]});
		const booldATGqM = await DSPhy0rao7.transferFrom.call(addressrjoTDv, addressDr2W4MZ, uintXMD2CQg, {from: accounts[0]});

		assert.equal(boolElgZ6dY, true)
		assert.equal(stringr4S7Wy, "DSP")
		await expect(DSPhy0rao7.transferFrom.call(addressrjoTDv, addressDr2W4MZ, uintXMD2CQg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const addressAIper6M = accounts[3]
		const uinthsYr1G6 = BigInt("1931")
		const addressjI1UExB = accounts[5]
		const addressil8DvwN = accounts[0]
		const addressLgFXeEm = await DSPhy0rao7.removePauser.call(addressAIper6M, {from: accounts[3]});
		const booldATGqM = await DSPhy0rao7.transferFrom.call(addressil8DvwN, addressjI1UExB, uinthsYr1G6, {from: accounts[0]});

		await expect(DSPhy0rao7.transferFrom.call(addressil8DvwN, addressjI1UExB, uinthsYr1G6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uintBCc6WJ = BigInt("1931")
		const addressXnJijMw = accounts[5]
		const addressbcQ5Jb2 = accounts[0]
		const uintSm3vZE = BigInt("474")
		const addressGkgFmXb = accounts[4]
		const uintf4L3nsY = BigInt("1431")
		const uintjjQgB0I = BigInt("1933")
		const addressBrlS3Fc = accounts[5]
		await DSPhy0rao7.f.call({from: "0x0000000000000000000000000000000000000001"});
		const booldATGqM = await DSPhy0rao7.transferFrom.call(addressbcQ5Jb2, addressXnJijMw, uintBCc6WJ, {from: accounts[0]});
		const boolcTjxcV6 = await DSPhy0rao7.transfer.call(addressGkgFmXb, uintSm3vZE, {from: accounts[0]});
		const booluwNHY4g = await DSPhy0rao7.transferWithLock.call(addressBrlS3Fc, uintjjQgB0I, uintf4L3nsY, {from: accounts[5]});

		await expect(DSPhy0rao7.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const addressEZgDYWH = accounts[2]
		const uintl1aT6Af = BigInt("673")
		const addressXwgu2aw = accounts[2]
		const uintHdI3bWB = BigInt("1086")
		const addressQ2Rlhy = accounts[1]
		const uintQvndbgX = BigInt("1946")
		const addressRguFeCB = accounts[4]
		const addressfCPqRnj = accounts[0]
		const uint256sirbHzI = await DSPhy0rao7.balanceOf.call(addressEZgDYWH, {from: accounts[2]});
		const boolhjo3szf = await DSPhy0rao7.approve.call(addressXwgu2aw, uintl1aT6Af, {from: accounts[2]});
		const boolhV9jSsd = await DSPhy0rao7.transfer.call(addressQ2Rlhy, uintHdI3bWB, {from: accounts[3]});
		const booldATGqM = await DSPhy0rao7.transferFrom.call(addressfCPqRnj, addressRguFeCB, uintQvndbgX, {from: accounts[0]});
		const boolFranOhL = await DSPhy0rao7.paused.call({from: accounts[4]});

		assert.equal(boolhV9jSsd, true)
		assert.equal(boolhjo3szf, true)
		assert.equal(uint256sirbHzI, BigInt("0"))
		await expect(DSPhy0rao7.transferFrom.call(addressfCPqRnj, addressRguFeCB, uintQvndbgX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uintjWSXsI9 = BigInt("1048")
		const addressek9Ap2N = accounts[1]
		const uinteNWHXCw = BigInt("1042")
		const uintbqt3BZR = BigInt("1908")
		const addressVQthdt4 = accounts[2]
		await DSPhy0rao7.pause.call({from: accounts[3]});
		await DSPhy0rao7.renouncePauser.call({from: accounts[3]});
		const boolhV9jSsd = await DSPhy0rao7.transfer.call(addressek9Ap2N, uintjWSXsI9, {from: accounts[3]});
		const boolkWzPB0I = await DSPhy0rao7.lock.call(addressVQthdt4, uintbqt3BZR, uinteNWHXCw, {from: accounts[0]});
		const boolFranOhL = await DSPhy0rao7.paused.call({from: accounts[4]});

		await expect(DSPhy0rao7.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uinteWzV5zd = BigInt("647")
		const addressC72SOuB = accounts[2]
		const addressKgyH9yh = accounts[5]
		const addressvKKKRzk = accounts[2]
		const uintHbaewNM = BigInt("1089")
		const addressuq91g4 = accounts[1]
		const boolIOrD9Uf = await DSPhy0rao7.increaseAllowance.call(addressC72SOuB, uinteWzV5zd, {from: accounts[2]});
		const uint256dAPC5SS = await DSPhy0rao7.allowance.call(addressvKKKRzk, addressKgyH9yh, {from: accounts[0]});
		const boolhV9jSsd = await DSPhy0rao7.transfer.call(addressuq91g4, uintHbaewNM, {from: accounts[3]});

		assert.equal(boolIOrD9Uf, true)
		assert.equal(boolhV9jSsd, true)
		assert.equal(uint256dAPC5SS, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uintu6UJsV3 = BigInt("1089")
		const addressgUf4LdL = accounts[2]
		const stringtFzTzTo = await DSPhy0rao7.name.call({from: accounts[1]});
		const boolS5xBpot = await DSPhy0rao7.paused.call({from: accounts[0]});
		const boolhV9jSsd = await DSPhy0rao7.transfer.call(addressgUf4LdL, uintu6UJsV3, {from: accounts[3]});

		assert.equal(boolS5xBpot, false)
		assert.equal(boolhV9jSsd, true)
		assert.equal(stringtFzTzTo, "DSP")
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uintwFjndFH = BigInt("1089")
		const addressMVrGeDY = accounts[2]
		const uintTWvAuQc = BigInt("1576")
		const addressztL2Y8D = accounts[4]
		const uintAZTwiS = BigInt("1937")
		const addressuZ90Dym = accounts[2]
		const boolhV9jSsd = await DSPhy0rao7.transfer.call(addressMVrGeDY, uintwFjndFH, {from: accounts[3]});
		const boolMe0LY7 = await DSPhy0rao7.mint.call(addressztL2Y8D, uintTWvAuQc, {from: accounts[3]});
		const boolDWJg4ZN = await DSPhy0rao7.increaseAllowance.call(addressuZ90Dym, uintAZTwiS, {from: accounts[1]});

		assert.equal(boolDWJg4ZN, true)
		assert.equal(boolMe0LY7, true)
		assert.equal(boolhV9jSsd, true)
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uintclUqfVK = BigInt("4")
		const addressiF2uVJ = "0x0000000000000000000000000000000000000001"
		const address17K26y = accounts[4]
		const uintHmOdM85 = BigInt("1089")
		const addressEJC038K = accounts[1]
		const boolgSDPV0f = await DSPhy0rao7.decreaseAllowance.call(addressiF2uVJ, uintclUqfVK, {from: accounts[1]});
		const addressADYc9tz = await DSPhy0rao7.notFrozen.call(address17K26y, {from: accounts[5]});
		const boolhV9jSsd = await DSPhy0rao7.transfer.call(addressEJC038K, uintHmOdM85, {from: accounts[3]});

		await expect(DSPhy0rao7.decreaseAllowance.call(addressiF2uVJ, uintclUqfVK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uintquuwj1D = BigInt("1234")
		const addresstM6HxEW = accounts[1]
		const addressqHgbCy = accounts[0]
		const boolhV9jSsd = await DSPhy0rao7.transfer.call(addresstM6HxEW, uintquuwj1D, {from: accounts[3]});
		const addresspIzBXD4 = await DSPhy0rao7.transferOwnership.call(addressqHgbCy, {from: accounts[3]});

		assert.equal(boolhV9jSsd, true)
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const addressc9SCxet = accounts[5]
		const addressBohBsAL = accounts[1]
		const addressrUBCpgH = accounts[3]
		const boolzMoDxEW = await DSPhy0rao7.isPauser.call(addressc9SCxet, {from: accounts[3]});
		const boolaTs5lpL = await DSPhy0rao7.freezeAccount.call(addressBohBsAL, {from: accounts[3]});
		const uint256sirbHzI = await DSPhy0rao7.balanceOf.call(addressrUBCpgH, {from: accounts[2]});

		assert.equal(boolaTs5lpL, true)
		assert.equal(boolzMoDxEW, false)
		assert.equal(uint256sirbHzI, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPhy0rao7 = await DSP.new({from: accounts[3]});
		const uintLs5V3Mq = BigInt("770")
		const addressHEMGLvu = accounts[0]
		const addressvgAbTmP = accounts[3]
		const boolX8bNI1P = await DSPhy0rao7.burnFrombyOwner.call(addressHEMGLvu, uintLs5V3Mq, {from: accounts[3]});
		const uint256sirbHzI = await DSPhy0rao7.balanceOf.call(addressvgAbTmP, {from: accounts[2]});

		await expect(DSPhy0rao7.burnFrombyOwner.call(addressHEMGLvu, uintLs5V3Mq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})