const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uintdGeRJSM = BigInt("1947")
		const addressIsjGJWT = accounts[1]
		const addressZ0hpLjT = accounts[2]
		const uintvCKpuYG = BigInt("272")
		const addressdQzqa6 = accounts[1]
		const stringymBTg4Y = await DSPuYofEv6.name.call({from: accounts[1]});
//		const boolGWStgqJ = await DSPuYofEv6.transferFrom.call(addressZ0hpLjT, addressIsjGJWT, uintdGeRJSM, {from: accounts[0]});
//		const boolTRUnNf = await DSPuYofEv6.unlock.call(addressdQzqa6, uintvCKpuYG, {from: accounts[1]});

		assert.equal(stringymBTg4Y, "DSP")
		await expect(DSPuYofEv6.transferFrom.call(addressZ0hpLjT, addressIsjGJWT, uintdGeRJSM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringDD0NmW = "cyhYkSGsBld5ihRjGFXoMQrwlC41bsM8SoRtiIiG2We2lfZKFBhyFykmbQJFSyXWRcR6VuaI1ypdI"
		const stringjozGRc6 = "1lmCsOCMqFFoWGQwq8sshv9u"
		const uintfZO9qx6 = BigInt("207")
		const DSPP6vKW34 = await DSP.new(stringDD0NmW, stringjozGRc6, uintfZO9qx6, {from: accounts[2]});
		const uintzg5Pt2u = BigInt("998")
		const addressu2Ta1GG = accounts[3]
		const address7UcUAe = accounts[5]
		const uintkbBypSN = BigInt("343")
		const uintDve1aKI = BigInt("46")
		const addresswq4BqKa = accounts[1]
		const boolScy3KL4 = await DSPP6vKW34.transferFrom.call(address7UcUAe, addressu2Ta1GG, uintzg5Pt2u, {from: accounts[1]});
		const boolUdQOJul = await DSPP6vKW34.lock.call(addresswq4BqKa, uintDve1aKI, uintkbBypSN, {from: accounts[1]});
		await DSPP6vKW34.whenNotPaused.call({from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPdMnluuX = await DSP.new({from: accounts[3]});
		const addressSMNCPN5 = accounts[4]
		const addressccoyrVM = accounts[3]
		const addressebdHJT = "0x0000000000000000000000000000000000000001"
		const uintxfugmAl = BigInt("697")
		const addresslH9Mern = accounts[1]
		const addressxPFVfGl = accounts[5]
//		await DSPdMnluuX.pause.call({from: accounts[0]});
//		const uint256nvXhOH = await DSPdMnluuX.allowance.call(addressccoyrVM, addressSMNCPN5, {from: accounts[4]});
//		const boolrGW6AtH = await DSPdMnluuX.freezeAccount.call(addressebdHJT, {from: accounts[2]});
//		const boolmZvm5lR = await DSPdMnluuX.transferFrom.call(addressxPFVfGl, addresslH9Mern, uintxfugmAl, {from: accounts[0]});

		await expect(DSPdMnluuX.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPEC3Fz04 = await DSP.new({from: accounts[1]});
		const addressSI68M3R = accounts[2]
		const stringwvgMOzL = await DSPEC3Fz04.symbol.call({from: accounts[2]});
//		const address1eWDOW = await DSPEC3Fz04.upgradeTo.call(addressSI68M3R, {from: accounts[4]});

		assert.equal(stringwvgMOzL, "DSP")
		await expect(DSPEC3Fz04.upgradeTo.call(addressSI68M3R, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uintmX6GnqK = BigInt("911")
		const addressfnWZBhS = accounts[0]
		const uintpOKqV2y = BigInt("1340")
		const addressX5tvBZ9 = accounts[1]
		const addressL9gDADD = accounts[2]
		const uintkTU6Q4 = BigInt("1773")
		const addressWSGFSnH = accounts[1]
		const addressYUWMv0F = accounts[3]
		const uintEE8N2BR = BigInt("272")
		const addressAeYm8mo = accounts[1]
//		const boolWmuJnZ5 = await DSPuYofEv6.decreaseAllowance.call(addressfnWZBhS, uintmX6GnqK, {from: accounts[2]});
//		const stringymBTg4Y = await DSPuYofEv6.name.call({from: accounts[1]});
//		const boolGWStgqJ = await DSPuYofEv6.transferFrom.call(addressL9gDADD, addressX5tvBZ9, uintpOKqV2y, {from: accounts[0]});
//		const boolWSDDznY = await DSPuYofEv6.transferFrom.call(addressYUWMv0F, addressWSGFSnH, uintkTU6Q4, {from: accounts[1]});
//		const boolTRUnNf = await DSPuYofEv6.unlock.call(addressAeYm8mo, uintEE8N2BR, {from: accounts[1]});

		await expect(DSPuYofEv6.decreaseAllowance.call(addressfnWZBhS, uintmX6GnqK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPEC3Fz04 = await DSP.new({from: accounts[1]});
		const addresshCt0ESq = accounts[4]
		const addressowN7pKP = accounts[3]
		const addresst0TIZNn = accounts[2]
		const stringwvgMOzL = await DSPEC3Fz04.symbol.call({from: accounts[2]});
//		const addressSiiLq0B = await DSPEC3Fz04.notFrozen.call(addresshCt0ESq, {from: accounts[3]});
//		const address1eWDOW = await DSPEC3Fz04.upgradeTo.call(addressowN7pKP, {from: accounts[4]});
//		await DSPEC3Fz04.onlyNewOwner.call({from: accounts[0]});
//		const addressx5i3V35 = await DSPEC3Fz04.transferOwnership.call(addresst0TIZNn, {from: accounts[3]});

		assert.equal(stringwvgMOzL, "DSP")
		await expect(DSPEC3Fz04.notFrozen.call(addresshCt0ESq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPEC3Fz04 = await DSP.new({from: accounts[1]});
		const addressgUlmHtF = accounts[2]
		const uint256kay4ar2 = await DSPEC3Fz04.totalSupply.call({from: accounts[3]});
		const stringwvgMOzL = await DSPEC3Fz04.symbol.call({from: accounts[2]});
//		const address1eWDOW = await DSPEC3Fz04.upgradeTo.call(addressgUlmHtF, {from: accounts[4]});

		assert.equal(stringwvgMOzL, "DSP")
		assert.equal(uint256kay4ar2, BigInt("100000000000000000000000000000"))
		await expect(DSPEC3Fz04.upgradeTo.call(addressgUlmHtF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uintSWwTC6y = BigInt("1947")
		const addressnZePb0h = accounts[1]
		const addressl2L6OrA = accounts[2]
		const uintxVWt6T6 = BigInt("291")
		const addressVvEZswa = accounts[1]
		const stringymBTg4Y = await DSPuYofEv6.name.call({from: accounts[1]});
		const boolQideE36 = await DSPuYofEv6.paused.call({from: accounts[1]});
//		const boolGWStgqJ = await DSPuYofEv6.transferFrom.call(addressl2L6OrA, addressnZePb0h, uintSWwTC6y, {from: accounts[0]});
//		const boolTRUnNf = await DSPuYofEv6.unlock.call(addressVvEZswa, uintxVWt6T6, {from: accounts[1]});

		assert.equal(boolQideE36, false)
		assert.equal(stringymBTg4Y, "DSP")
		await expect(DSPuYofEv6.transferFrom.call(addressl2L6OrA, addressnZePb0h, uintSWwTC6y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPEC3Fz04 = await DSP.new({from: accounts[1]});
		const addressCu8s31C = accounts[4]
		const addressQIyunKo = "0x0000000000000000000000000000000000000001"
		const addressdPqn9O = accounts[2]
		const stringwvgMOzL = await DSPEC3Fz04.symbol.call({from: accounts[2]});
		const booltFtCjij = await DSPEC3Fz04.isOwner.call(addressCu8s31C, {from: accounts[5]});
		const boolbi5PDgU = await DSPEC3Fz04.freezeAccount.call(addressQIyunKo, {from: accounts[1]});
//		const address1eWDOW = await DSPEC3Fz04.upgradeTo.call(addressdPqn9O, {from: accounts[4]});

		assert.equal(boolbi5PDgU, true)
		assert.equal(booltFtCjij, false)
		assert.equal(stringwvgMOzL, "DSP")
		await expect(DSPEC3Fz04.upgradeTo.call(addressdPqn9O, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uintIcDNuz5 = BigInt("763")
		const addressrQz7UEY = accounts[2]
		const uintMCvSwbK = BigInt("1947")
		const addresspH3AmIq = accounts[2]
		const addressm0Pos23 = accounts[2]
		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressrQz7UEY, uintIcDNuz5, {from: accounts[3]});
//		const boolGWStgqJ = await DSPuYofEv6.transferFrom.call(addressm0Pos23, addresspH3AmIq, uintMCvSwbK, {from: accounts[0]});

		assert.equal(boolF9z5x7J, true)
		await expect(DSPuYofEv6.transferFrom.call(addressm0Pos23, addresspH3AmIq, uintMCvSwbK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const addressZSJ7feU = accounts[3]
		const uintRBrcm7x = BigInt("763")
		const addressOIcwap = accounts[2]
//		await DSPuYofEv6.renouncePauser.call({from: accounts[4]});
//		const boolRnJ360r = await DSPuYofEv6.unfreezeAccount.call(addressZSJ7feU, {from: accounts[3]});
//		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressOIcwap, uintRBrcm7x, {from: accounts[3]});

		await expect(DSPuYofEv6.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const addressaPkEUJu = accounts[4]
		const uintXbF2N3L = BigInt("782")
		const addressKRRJX8W = accounts[2]
		const uintzXkeMcG = BigInt("196")
		const addressWWCypvC = accounts[3]
		const addressDfNnuZ3 = await DSPuYofEv6.transferOwnership.call(addressaPkEUJu, {from: accounts[3]});
		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressKRRJX8W, uintXbF2N3L, {from: accounts[3]});
//		const boolXIDm3Hk = await DSPuYofEv6.unlock.call(addressWWCypvC, uintzXkeMcG, {from: accounts[0]});

		assert.equal(boolF9z5x7J, true)
		await expect(DSPuYofEv6.unlock.call(addressWWCypvC, uintzXkeMcG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const addressyJhN5zY = accounts[2]
		const uintKLKHFUi = BigInt("778")
		const addressa46G1az = accounts[2]
//		const addressb9PjY3w = await DSPuYofEv6.removePauser.call(addressyJhN5zY, {from: accounts[3]});
//		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressa46G1az, uintKLKHFUi, {from: accounts[3]});

		await expect(DSPuYofEv6.removePauser.call(addressyJhN5zY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPsLty6T = await DSP.new({from: accounts[2]});
		const addressRtCGbC3 = accounts[3]
//		await DSPsLty6T.f.call({from: accounts[3]});
//		const addressJwmeAoL = await DSPsLty6T.addPauser.call(addressRtCGbC3, {from: accounts[0]});

		await expect(DSPsLty6T.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uintprp8oKV = BigInt("1519")
		const uintymsiHPJ = BigInt("1331")
		const addresse7mfX5q = accounts[3]
		const uintQPSRpap = BigInt("763")
		const addressNiureyv = accounts[3]
		const uinthytnpyp = BigInt("2028")
		const addresszGKvJi = accounts[4]
		const boolO1jN1uw = await DSPuYofEv6.lock.call(addresse7mfX5q, uintymsiHPJ, uintprp8oKV, {from: accounts[3]});
		const stringR1q2BXR = await DSPuYofEv6.name.call({from: accounts[4]});
		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressNiureyv, uintQPSRpap, {from: accounts[3]});
		const boolaKHwEjM = await DSPuYofEv6.transfer.call(addresszGKvJi, uinthytnpyp, {from: accounts[3]});

		assert.equal(boolF9z5x7J, true)
		assert.equal(boolO1jN1uw, true)
		assert.equal(boolaKHwEjM, true)
		assert.equal(stringR1q2BXR, "DSP")
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const addressPOYESuZ = accounts[0]
		const uintmL6wZDa = BigInt("763")
		const addressaGz0sc2 = accounts[4]
		const addressNIPb6SH = accounts[3]
		const stringmKA8qOZ = await DSPuYofEv6.name.call({from: accounts[2]});
		const addressNRklwpT = await DSPuYofEv6.transferOwnership.call(addressPOYESuZ, {from: accounts[3]});
		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressaGz0sc2, uintmL6wZDa, {from: accounts[3]});
		const uint8hmGN2Sh = await DSPuYofEv6.decimals.call({from: accounts[2]});
//		const boolEZLN6l9 = await DSPuYofEv6.freezeAccount.call(addressNIPb6SH, {from: accounts[0]});

		assert.equal(boolF9z5x7J, true)
		assert.equal(stringmKA8qOZ, "DSP")
		assert.equal(uint8hmGN2Sh, BigInt("18"))
		await expect(DSPuYofEv6.freezeAccount.call(addressNIPb6SH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const address4jsUDf = accounts[3]
		const address24DpN3 = accounts[1]
		const uint9F6STO = BigInt("728")
		const addressRPIsdou = accounts[2]
		const uint256W1IEGVM = await DSPuYofEv6.allowance.call(address24DpN3, address4jsUDf, {from: accounts[2]});
		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressRPIsdou, uint9F6STO, {from: accounts[3]});
//		await DSPuYofEv6.renouncePauser.call({from: accounts[2]});

		assert.equal(boolF9z5x7J, true)
		assert.equal(uint256W1IEGVM, BigInt("0"))
		await expect(DSPuYofEv6.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const addressoqExqew = "0x0000000000000000000000000000000000000001"
		const addressu8YSz2Q = "0x0000000000000000000000000000000000000001"
		const uintFUCkaAh = BigInt("608")
		const addressILVBCKc = accounts[1]
		const addressOwN6BRf = accounts[3]
		const uintvbDdctK = BigInt("1947")
		const addressN4xeCnW = accounts[1]
		const addressbapkU3Y = accounts[3]
		const uint256z2tpVZM = await DSPuYofEv6.balanceOf.call(addressoqExqew, {from: accounts[4]});
		const boolXTu288 = await DSPuYofEv6.isPauser.call(addressu8YSz2Q, {from: accounts[0]});
//		const booliBZisqy = await DSPuYofEv6.transferFrom.call(addressOwN6BRf, addressILVBCKc, uintFUCkaAh, {from: accounts[4]});
//		const boolGWStgqJ = await DSPuYofEv6.transferFrom.call(addressbapkU3Y, addressN4xeCnW, uintvbDdctK, {from: accounts[0]});

		assert.equal(boolXTu288, false)
		assert.equal(uint256z2tpVZM, BigInt("0"))
		await expect(DSPuYofEv6.transferFrom.call(addressOwN6BRf, addressILVBCKc, uintFUCkaAh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uintHisrpEV = BigInt("388")
		const addressFKCQUHk = accounts[1]
		const uintemP4OD = BigInt("1994")
		const addressQarwGdM = accounts[0]
		const uintBNYfesy = BigInt("2025")
		const addressUAQ2IMr = accounts[2]
		const boolMC69jah = await DSPuYofEv6.increaseAllowance.call(addressFKCQUHk, uintHisrpEV, {from: accounts[2]});
//		const boolwGQ6Ze9 = await DSPuYofEv6.mint.call(addressQarwGdM, uintemP4OD, {from: accounts[1]});
//		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressUAQ2IMr, uintBNYfesy, {from: accounts[3]});

		assert.equal(boolMC69jah, true)
		await expect(DSPuYofEv6.mint.call(addressQarwGdM, uintemP4OD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uintTW0J6Fo = BigInt("197")
		const addressTbtTpog = accounts[2]
		const addresszlbMPB = accounts[4]
		const uintDM7p8qB = BigInt("642")
		const addressgNoqxIm = accounts[1]
		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressTbtTpog, uintTW0J6Fo, {from: accounts[3]});
//		const booleuiEfNP = await DSPuYofEv6.unfreezeAccount.call(addresszlbMPB, {from: accounts[3]});
//		const boolq7HGyN3 = await DSPuYofEv6.mint.call(addressgNoqxIm, uintDM7p8qB, {from: accounts[0]});

		assert.equal(boolF9z5x7J, true)
		await expect(DSPuYofEv6.unfreezeAccount.call(addresszlbMPB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uintRrY3LdL = BigInt("763")
		const addressTvf8HVS = accounts[4]
		const addressh4KSkV0 = accounts[1]
		const addressuqCNUxS = accounts[3]
		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressTvf8HVS, uintRrY3LdL, {from: accounts[3]});
		const uint256VLrPzob = await DSPuYofEv6.balanceOf.call(addressh4KSkV0, {from: accounts[2]});
//		const addresscssiJsw = await DSPuYofEv6.addPauser.call(addressuqCNUxS, {from: accounts[3]});
//		await DSPuYofEv6.pause.call({from: accounts[1]});

		assert.equal(boolF9z5x7J, true)
		assert.equal(uint256VLrPzob, BigInt("0"))
		await expect(DSPuYofEv6.addPauser.call(addressuqCNUxS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const addressSuuOUFa = accounts[2]
		const addresst8yBvPH = accounts[0]
		const uint256VLrPzob = await DSPuYofEv6.balanceOf.call(addressSuuOUFa, {from: accounts[2]});
		const addressPbgn9s = await DSPuYofEv6.upgradeTo.call(addresst8yBvPH, {from: accounts[3]});

		assert.equal(uint256VLrPzob, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uintIkioJUX = BigInt("751")
		const addresscjR1rlp = accounts[3]
		const addressjSWSFko = accounts[3]
		const uintDUeRmLe = BigInt("1167")
		const addressU5qUgUT = accounts[0]
		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addresscjR1rlp, uintIkioJUX, {from: accounts[3]});
		const boolHJIBoAQ = await DSPuYofEv6.isOwner.call(addressjSWSFko, {from: accounts[1]});
//		await DSPuYofEv6.unpause.call({from: accounts[0]});
//		const boolbGu6AIJ = await DSPuYofEv6.burnFrombyOwner.call(addressU5qUgUT, uintDUeRmLe, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolF9z5x7J, true)
		assert.equal(boolHJIBoAQ, true)
		await expect(DSPuYofEv6.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uint5hsdGm = BigInt("1058")
		const addressRbtPRNk = accounts[3]
		const uint2DkssZ = BigInt("763")
		const addresshpHHrKz = accounts[2]
		const boolbQUahnm = await DSPuYofEv6.paused.call({from: accounts[5]});
		const boolIbckjY2 = await DSPuYofEv6.approve.call(addressRbtPRNk, uint5hsdGm, {from: accounts[2]});
		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addresshpHHrKz, uint2DkssZ, {from: accounts[3]});

		assert.equal(boolF9z5x7J, true)
		assert.equal(boolIbckjY2, true)
		assert.equal(boolbQUahnm, false)
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uintu5WGsBs = BigInt("929")
		const addressClXtCaW = accounts[0]
		const uintvj9fuIK = BigInt("763")
		const addressgyG19EI = accounts[3]
//		const boolsTfvnM3 = await DSPuYofEv6.unlock.call(addressClXtCaW, uintu5WGsBs, {from: accounts[3]});
//		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressgyG19EI, uintvj9fuIK, {from: accounts[3]});

		await expect(DSPuYofEv6.unlock.call(addressClXtCaW, uintu5WGsBs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuZgBK4E = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressspNLyI = accounts[1]
		const uintmJxWDZI = BigInt("1723")
		const addressRhPIZnA = accounts[0]
		const uintAFtglLe = BigInt("502")
		const addressxcQCSIU = accounts[4]
		const uintpZO8RAw = BigInt("1792")
		const addressO9M2MQz = "0x0000000000000000000000000000000000000001"
		const addressR07BnI3 = accounts[3]
		const boolMSZvfRY = await DSPuZgBK4E.paused.call({from: accounts[1]});
		const uint256yal4UIp = await DSPuZgBK4E.balanceOf.call(addressspNLyI, {from: accounts[0]});
		const boolg1hBln5 = await DSPuZgBK4E.transfer.call(addressRhPIZnA, uintmJxWDZI, {from: accounts[2]});
		const boolS55r8TC = await DSPuZgBK4E.burnFrombyOwner.call(addressxcQCSIU, uintAFtglLe, {from: accounts[3]});
		const boolKmbtfw6 = await DSPuZgBK4E.transfer.call(addressO9M2MQz, uintpZO8RAw, {from: accounts[3]});
		const addressuoWMMzH = await DSPuZgBK4E.addPauser.call(addressR07BnI3, {from: accounts[3]});
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uintH892V48 = BigInt("538")
		const uintMMbPusv = BigInt("735")
		const addressqzYdoiM = accounts[1]
		const uintrGJysWR = BigInt("714")
		const addressh8LnCdv = accounts[2]
		const boolySVwLNk = await DSPuYofEv6.transferWithLock.call(addressqzYdoiM, uintMMbPusv, uintH892V48, {from: accounts[3]});
		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressh8LnCdv, uintrGJysWR, {from: accounts[3]});

		assert.equal(boolF9z5x7J, true)
		assert.equal(boolySVwLNk, true)
	});

	it('test for DSP', async () => {
		const DSPuWc0N1B = await DSP.new({from: accounts[4]});
		const uintzE0RSU0 = BigInt("1492")
		const addressLDK71zS = accounts[2]
		const addressRBMl1nF = accounts[1]
		const uinthkPgf5i = BigInt("1298")
		const addresskq1Gh7F = accounts[2]
		const boolbRGd866 = await DSPuWc0N1B.mint.call(addressLDK71zS, uintzE0RSU0, {from: accounts[4]});
		const boolNkl8SO1 = await DSPuWc0N1B.isOwner.call(addressRBMl1nF, {from: accounts[2]});
//		await DSPuWc0N1B.unpause.call({from: accounts[0]});
//		const boolJHp7jxq = await DSPuWc0N1B.mint.call(addresskq1Gh7F, uinthkPgf5i, {from: accounts[0]});

		assert.equal(boolNkl8SO1, false)
		assert.equal(boolbRGd866, true)
		await expect(DSPuWc0N1B.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPU7LAR6l = await DSP.new({from: accounts[0]});
		const uintT7qhzpi = BigInt("1384")
		const addressX8vmhrG = accounts[0]
		const addressUcJzhE6 = "0x0000000000000000000000000000000000000002"
		const boolB6qQF05 = await DSPU7LAR6l.burnFrombyOwner.call(addressX8vmhrG, uintT7qhzpi, {from: accounts[0]});
//		await DSPU7LAR6l.renouncePauser.call({from: accounts[3]});
//		const addressJrHINu9 = await DSPU7LAR6l.removePauser.call(addressUcJzhE6, {from: accounts[0]});

		assert.equal(boolB6qQF05, true)
		await expect(DSPU7LAR6l.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uintg5B8BjE = BigInt("1339")
		const addressEkKlb7G = accounts[4]
		const uintOoVYuE = BigInt("763")
		const addressPNLhJj9 = accounts[3]
//		await DSPuYofEv6.renouncePauser.call({from: accounts[3]});
//		const booljbkW7I1 = await DSPuYofEv6.acceptOwnership.call({from: accounts[3]});
//		const boolWutaHGo = await DSPuYofEv6.approve.call(addressEkKlb7G, uintg5B8BjE, {from: accounts[3]});
//		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressPNLhJj9, uintOoVYuE, {from: accounts[3]});

		await expect(DSPuYofEv6.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYofEv6 = await DSP.new({from: accounts[3]});
		const uinttCNY6T = BigInt("1876")
		const uintVpNDkT = BigInt("110")
		const addressYv6bZ6K = accounts[5]
		const uintkEu29Op = BigInt("778")
		const addressC1KY3cf = accounts[2]
//		const boolKe2CGLR = await DSPuYofEv6.lock.call(addressYv6bZ6K, uintVpNDkT, uinttCNY6T, {from: accounts[3]});
//		const stringNxVGcu5 = await DSPuYofEv6.name.call({from: accounts[1]});
//		await DSPuYofEv6.pause.call({from: accounts[1]});
//		const boolF9z5x7J = await DSPuYofEv6.transfer.call(addressC1KY3cf, uintkEu29Op, {from: accounts[3]});

		await expect(DSPuYofEv6.lock.call(addressYv6bZ6K, uintVpNDkT, uinttCNY6T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})