const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringkmuhQ5V = "UScEmeAeasfmqDV20ldqUk6KRd9mJdEibvILkCSIrghSeiLfjEnmikQKUqlhQU1qlIUpwyPLMFULoUrce01DX"
		const stringtJquCnN = "2kzqMolGVmTcsAx48cJWgsPiPCDuOI8iE5JOcZqjmPgQ7PHgrG4OvYXkHlr1EQwdgtSmmBxptWJ6vH11Sn4plwIb"
		const uintjh3pxOP = BigInt("107")
		const XenoFelixOSW7Mrz = await XenoFelix.new(stringkmuhQ5V, stringtJquCnN, uintjh3pxOP, {from: accounts[2]});
		const uintI4N2rTw = BigInt("1356")
		const addressCI9Dda5 = accounts[3]
		const addressJT3bas = accounts[5]
		const addressR0QMWIs = accounts[4]
		const uinttL4rwrY = BigInt("1590")
		const addressPH9Jnck = accounts[4]
		const boolQFOLd5v = await XenoFelixOSW7Mrz.burnOwner.call(addressCI9Dda5, uintI4N2rTw, {from: accounts[2]});
		const addressZm80CMa = await XenoFelixOSW7Mrz.notFrozenAndTransaction.call(addressR0QMWIs, addressJT3bas, {from: "0x0000000000000000000000000000000000000001"});
		const boolWdou240 = await XenoFelixOSW7Mrz.transfer.call(addressPH9Jnck, uinttL4rwrY, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringvIK6vhz = "3gXN4ScEcVxCTE3iseP9Wdl0h4GY4qhd"
		const stringw4LpgJ = "vF4QGKwlSc5"
		const uintIuE6gh9 = BigInt("40")
		const XenoFelixfMeIBD7 = await XenoFelix.new(stringvIK6vhz, stringw4LpgJ, uintIuE6gh9, {from: accounts[0]});
		const addressmGSYfr = accounts[3]
		const addressvJTEX2C = accounts[3]
		const uintMgJMdLC = BigInt("1661")
		const addressLrmUMgr = accounts[1]
		const uintvR7mQ8 = BigInt("1995")
		const addressSzOIFrC = accounts[0]
		const addressDhKxzLf = accounts[2]
		const uint256IWGfnXu = await XenoFelixfMeIBD7.balanceOf.call(addressmGSYfr, {from: accounts[1]});
		const uint256fjG5ley = await XenoFelixfMeIBD7.balanceOf.call(addressvJTEX2C, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixfMeIBD7.pause.call({from: accounts[0]});
		const boolwgIF2fK = await XenoFelixfMeIBD7.transfer.call(addressLrmUMgr, uintMgJMdLC, {from: accounts[3]});
		const booljdU8Bax = await XenoFelixfMeIBD7.transferFrom.call(addressDhKxzLf, addressSzOIFrC, uintvR7mQ8, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringPawFKkg = "u50FwMAwCJOSOhqmpiucxGHYBsKGPWi2wu7g97HrcdHqFsJHF76"
		const string230sZE = "AImiyLqXrDnhMj"
		const uintvol9VcC = BigInt("85")
		const XenoFelixjUHdZy2 = await XenoFelix.new(stringPawFKkg, string230sZE, uintvol9VcC, {from: accounts[3]});
		const uintdb6QvA6 = BigInt("1720")
		const address7nN8c1 = accounts[2]
		await XenoFelixjUHdZy2.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolmaU5RIl = await XenoFelixjUHdZy2.transfer.call(address7nN8c1, uintdb6QvA6, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixjUHdZy2.onlyNewOwner.call({from: accounts[3]});
		const stringHjcwrJ = await XenoFelixjUHdZy2.symbol.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringwRbgdZ = "eq3W7AGt3Xfsn2HDT9KBoGGGKhFoZU2uki49SY"
		const stringIlZwJRB = "uzBv5igwIOAcHSsePvKS3dRvAhQhulAlZUlmd7DaFhM9M3z"
		const uintipBhoUQ = BigInt("1799")
		const uintMkKvRlo = BigInt("82")
		const XenoFelixCfCdxBw = await XenoFelix.new(stringwRbgdZ, stringIlZwJRB, uintipBhoUQ, uintMkKvRlo, {from: "0x0000000000000000000000000000000000000001"});
		const uint97cIWh = BigInt("1128")
		const addressXem89hL = accounts[3]
		const uintI3eVB09 = BigInt("1259")
		const addressoDvjgE7 = accounts[0]
		const addressg0kpyAa = accounts[4]
		const addressGFrL8NG = accounts[2]
		const boolQ7M4S2e = await XenoFelixCfCdxBw.transfer.call(addressXem89hL, uint97cIWh, {from: accounts[0]});
		const stringBEPXC5b = await XenoFelixCfCdxBw.symbol.call({from: accounts[4]});
		const boolSoV24t = await XenoFelixCfCdxBw.transfer.call(addressoDvjgE7, uintI3eVB09, {from: accounts[3]});
		const boolt3boVh9 = await XenoFelixCfCdxBw.freezeAccount.call(addressg0kpyAa, {from: accounts[3]});
		const uint256ekt9hyo = await XenoFelixCfCdxBw.balanceOf.call(addressGFrL8NG, {from: accounts[1]});
		const uint256oFRPH6A = await XenoFelixCfCdxBw.totalSupply.call({from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixh2kybQq = await XenoFelix.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlXmjhUX = BigInt("410")
		const addresssbp3ZGx = accounts[0]
		const addressm1AgiOX = accounts[4]
		const addresssKLsX2V = accounts[3]
		const addressb7tJcrr = accounts[1]
		const addresstueZn7Y = accounts[5]
		await XenoFelixh2kybQq.whenPaused.call({from: accounts[3]});
		const boolDr656v8 = await XenoFelixh2kybQq.transfer.call(addresssbp3ZGx, uintlXmjhUX, {from: accounts[2]});
		const uint256CMBDdSU = await XenoFelixh2kybQq.allowance.call(addresssKLsX2V, addressm1AgiOX, {from: accounts[2]});
		const addressim5LRFc = await XenoFelixh2kybQq.notFrozenAndTransaction.call(addresstueZn7Y, addressb7tJcrr, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringlEEUVTz = "BcK82Kxy2cCqeMA2hmtmDfN4DdIIJsMOBRALMdjO"
		const stringDFEBrQ3 = "QNr6w9BOMGgvFaGECzWaB46T5EKVaZEoH"
		const uintgczpiw6 = BigInt("2041")
		const uintMa1m44q = BigInt("168")
		const XenoFelixN5sqvUQ = await XenoFelix.new(stringlEEUVTz, stringDFEBrQ3, uintgczpiw6, uintMa1m44q, {from: accounts[3]});
		const addressYscTGrW = accounts[3]
		const uintp3fRVS4 = BigInt("1819")
		const addressnNMz85u = accounts[3]
		const addressFdKPjqA = accounts[0]
		const addressWkgWjsM = accounts[2]
		const addresswSheubv = accounts[5]
		const boolGtiebu = await XenoFelixN5sqvUQ.isPauser.call(addressYscTGrW, {from: accounts[0]});
		const boolBjddJpI = await XenoFelixN5sqvUQ.transferFrom.call(addressFdKPjqA, addressnNMz85u, uintp3fRVS4, {from: accounts[2]});
		const addressuL2enNb = await XenoFelixN5sqvUQ.transferOwnership.call(addressWkgWjsM, {from: accounts[4]});
		const uint256TMxfYPQ = await XenoFelixN5sqvUQ.balanceOf.call(addresswSheubv, {from: accounts[1]});

		assert.equal(boolGtiebu, true)
		await expect(XenoFelixN5sqvUQ.transferFrom.call(addressFdKPjqA, addressnNMz85u, uintp3fRVS4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringQqBH4vc = "5UQhhKkIUVFpUnBTjuWPNi1mBDnANd6BmAYJprdTcetfqfLsWzaqBTUV"
		const stringVVmmAfo = "duqg8DTjJecieAmv"
		const uintzTKct4 = BigInt("695")
		const uintEDONFA3 = BigInt("60")
		const XenoFelixpMCzHPU = await XenoFelix.new(stringQqBH4vc, stringVVmmAfo, uintzTKct4, uintEDONFA3, {from: accounts[4]});
		const addressOXm8d6 = accounts[1]
		const uintf3Z8pir = BigInt("221")
		const uintykvCT5 = BigInt("592")
		const addressCi9rNhH = "0x0000000000000000000000000000000000000001"
		const addressYOuon0p = accounts[4]
		const boolvfpQpSi = await XenoFelixpMCzHPU.freezeAccount.call(addressOXm8d6, {from: accounts[0]});
		const uint256AwVB0V5 = await XenoFelixpMCzHPU.burn.call(uintf3Z8pir, {from: accounts[3]});
		const boolc1T5kZ0 = await XenoFelixpMCzHPU.transferFrom.call(addressYOuon0p, addressCi9rNhH, uintykvCT5, {from: accounts[2]});

		await expect(XenoFelixpMCzHPU.freezeAccount.call(addressOXm8d6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringUOazzni = "QLwh1E0H1VbtZRdb50kjrlBBqZt75SquwKBI0sKaATcHn5jtp"
		const stringX4Txzuj = "Q222NuRRRL6ek4tALclUmxqvX11mK1MkUxUesbcp5Lw77yDmeb3J"
		const uintdQg3nA7 = BigInt("1374")
		const uintP5nI5eP = BigInt("168")
		const XenoFelixdT5zhM = await XenoFelix.new(stringUOazzni, stringX4Txzuj, uintdQg3nA7, uintP5nI5eP, {from: accounts[3]});
		const addresseE4Oncb = accounts[2]
		const addressTs33zo3 = accounts[0]
		const addressZaG7ojd = await XenoFelixdT5zhM.notFrozen.call(addresseE4Oncb, {from: accounts[0]});
		const addressUlrZ4jU = await XenoFelixdT5zhM.addPauser.call(addressTs33zo3, {from: accounts[4]});
		await XenoFelixdT5zhM.onlyNewOwner.call({from: accounts[1]});

		await expect(XenoFelixdT5zhM.notFrozen.call(addresseE4Oncb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringABNJLl = "gAmpKVhbFNtdFTq6y2tlxDoAWHy1AW9aonc1lNqIncpTkkh"
		const stringwEmSEd = "kjl4T5iidQ6EeVFzqEIxXQX"
		const uintrze1Tgi = BigInt("1886")
		const uint2A8Or1 = BigInt("217")
		const XenoFelixAaf9biw = await XenoFelix.new(stringABNJLl, stringwEmSEd, uintrze1Tgi, uint2A8Or1, {from: accounts[2]});
		const uintiXe2I6g = BigInt("1779")
		const addressN72UtXO = accounts[0]
		const uintLMXkkvi = BigInt("552")
		const addressl9RDk7n = accounts[1]
		const uintlE4bDJT = BigInt("1809")
		const uintpHpzxgp = BigInt("1800")
		const addressY7iPHd7 = accounts[4]
		const addressbCiUEeY = accounts[4]
		const boolLvjn5rR = await XenoFelixAaf9biw.transfer.call(addressN72UtXO, uintiXe2I6g, {from: "0x0000000000000000000000000000000000000001"});
		const boolQkk7bo = await XenoFelixAaf9biw.unlock.call(addressl9RDk7n, uintLMXkkvi, {from: accounts[0]});
		const boolutO5p0r = await XenoFelixAaf9biw.paused.call({from: accounts[5]});
		const boolGKRogrP = await XenoFelixAaf9biw.lock.call(addressY7iPHd7, uintpHpzxgp, uintlE4bDJT, {from: accounts[1]});
		const addressirOvSFw = await XenoFelixAaf9biw.transferOwnership.call(addressbCiUEeY, {from: accounts[4]});
		const booljUCZDRN = await XenoFelixAaf9biw.acceptOwnership.call({from: accounts[5]});

		await expect(XenoFelixAaf9biw.transfer.call(addressN72UtXO, uintiXe2I6g, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringlEEUVTz = "BcK82Kxy2cCqeMA2hmtmDfN4DdIIJsMOBRALMdjO"
		const stringDFEBrQ3 = "QNr6w9BOMGgvFaGECzWaB46T5EKVaZEoH"
		const uintLT4zeP6 = BigInt("2041")
		const uint8WADET = BigInt("168")
		const XenoFelixN5sqvUQ = await XenoFelix.new(stringlEEUVTz, stringDFEBrQ3, uintLT4zeP6, uint8WADET, {from: accounts[3]});
		const addressBW58uBj = accounts[4]
		const uintQEpvrhB = BigInt("1819")
		const addressZ4UbLCH = accounts[3]
		const addressVty9jY = accounts[0]
		const addressdihJJKk = accounts[2]
		const uintPBgrtr3 = BigInt("1720")
		const addressNc15DBM = accounts[4]
		const addressNV2tSuB = accounts[5]
		const uintHvMm5M = BigInt("144")
		const addressSWJdET = accounts[4]
		const uintKtsJ0CQ = BigInt("385")
		const uintSxNlLum = BigInt("1384")
		const addresss4PJ6pp = accounts[4]
		const boolGtiebu = await XenoFelixN5sqvUQ.isPauser.call(addressBW58uBj, {from: accounts[0]});
		await XenoFelixN5sqvUQ.renouncePauser.call({from: accounts[1]});
		const boolBjddJpI = await XenoFelixN5sqvUQ.transferFrom.call(addressVty9jY, addressZ4UbLCH, uintQEpvrhB, {from: accounts[2]});
		const addressuL2enNb = await XenoFelixN5sqvUQ.transferOwnership.call(addressdihJJKk, {from: accounts[4]});
		const boolqws1pek = await XenoFelixN5sqvUQ.transfer.call(addressNc15DBM, uintPBgrtr3, {from: accounts[1]});
		await XenoFelixN5sqvUQ.onlyPauser.call({from: accounts[5]});
		const uint256TMxfYPQ = await XenoFelixN5sqvUQ.balanceOf.call(addressNV2tSuB, {from: accounts[1]});
		await XenoFelixN5sqvUQ.onlyPauser.call({from: accounts[0]});
		const boolk0TOtcs = await XenoFelixN5sqvUQ.transfer.call(addressSWJdET, uintHvMm5M, {from: accounts[3]});
		const boolIQdewz = await XenoFelixN5sqvUQ.transferWithLock.call(addresss4PJ6pp, uintSxNlLum, uintKtsJ0CQ, {from: accounts[3]});

		assert.equal(boolGtiebu, false)
		await expect(XenoFelixN5sqvUQ.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringQqBH4vc = "5UQhhKkIUVFpUnBTjuWPNi1mBDnANd6BmAYJprdTcetfqfLsWzaqBTUV"
		const stringVVmmAfo = "duqg8DTjJecieAmv"
		const uintaYFBsER = BigInt("695")
		const uintvpdpPm = BigInt("60")
		const XenoFelixpMCzHPU = await XenoFelix.new(stringQqBH4vc, stringVVmmAfo, uintaYFBsER, uintvpdpPm, {from: accounts[4]});
		const addressXkVgTWJ = accounts[1]
		const addressperJW6m = accounts[2]
		const addresse5JYlqL = accounts[1]
		const uintqvVLUGH = BigInt("211")
		const uintnh6D6gt = BigInt("592")
		const addressR04cNKS = "0x0000000000000000000000000000000000000001"
		const addressUmeqzo4 = accounts[5]
		const stringbJfVw8P = await XenoFelixpMCzHPU.name.call({from: accounts[3]});
		const boolvfpQpSi = await XenoFelixpMCzHPU.freezeAccount.call(addressXkVgTWJ, {from: accounts[0]});
		const addressUUYvfHv = await XenoFelixpMCzHPU.notFrozenAndTransaction.call(addresse5JYlqL, addressperJW6m, {from: accounts[1]});
		const uint256AwVB0V5 = await XenoFelixpMCzHPU.burn.call(uintqvVLUGH, {from: accounts[3]});
		const boolc1T5kZ0 = await XenoFelixpMCzHPU.transferFrom.call(addressUmeqzo4, addressR04cNKS, uintnh6D6gt, {from: accounts[2]});

		assert.equal(stringbJfVw8P, "5UQhhKkIUVFpUnBTjuWPNi1mBDnANd6BmAYJprdTcetfqfLsWzaqBTUV")
		await expect(XenoFelixpMCzHPU.freezeAccount.call(addressXkVgTWJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringABNJLl = "gAmpKVhbFNtdFTq6y2tlxDoAWHy1AW9aonc1lNqIncpTkkh"
		const stringwEmSEd = "kjl4T5iidQ6EeVFzqEIxXQX"
		const uintf34lCEJ = BigInt("1886")
		const uintfU4ItGT = BigInt("217")
		const XenoFelixAaf9biw = await XenoFelix.new(stringABNJLl, stringwEmSEd, uintf34lCEJ, uintfU4ItGT, {from: accounts[2]});
		const uintlcGr2sh = BigInt("1809")
		const uintQN9hLfV = BigInt("1800")
		const addressIsGZjSe = accounts[4]
		const addressv1wwdK1 = accounts[4]
		const boolutO5p0r = await XenoFelixAaf9biw.paused.call({from: accounts[5]});
		const boolGKRogrP = await XenoFelixAaf9biw.lock.call(addressIsGZjSe, uintQN9hLfV, uintlcGr2sh, {from: accounts[1]});
		const addressirOvSFw = await XenoFelixAaf9biw.transferOwnership.call(addressv1wwdK1, {from: accounts[4]});

		assert.equal(boolutO5p0r, false)
		await expect(XenoFelixAaf9biw.lock.call(addressIsGZjSe, uintQN9hLfV, uintlcGr2sh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringC17TUwd = "MGx2UbVnaHlYdlWmVk4xh9pEN3F85csSSMQX"
		const stringmNhN1Z = "ntH7dlRVpfmPOhpgvzQMcDznEJgqi8lRWkV3laLaP3hxzAXpVSmIXX6h64BkBWFmOmSwE4E1MkImN65mkPvjAsCqN1"
		const uinteql6rc1 = BigInt("173")
		const XenoFelixGiN0Vh3 = await XenoFelix.new(stringC17TUwd, stringmNhN1Z, uinteql6rc1, {from: accounts[4]});
		const uintX61S0a4 = BigInt("1364")
		const addressSpVV7lt = accounts[4]
		const uintUCABnxV = BigInt("2036")
		const uintNgR467r = BigInt("1682")
		const addressBedw5VK = accounts[2]
		const addressrlaActs = accounts[4]
		const addressDLp5mVE = accounts[2]
		const addressRfvey86 = await XenoFelixGiN0Vh3.burnFrom.call(addressSpVV7lt, uintX61S0a4, {from: accounts[4]});
		const boolCLzPlI3 = await XenoFelixGiN0Vh3.transferWithLock.call(addressBedw5VK, uintNgR467r, uintUCABnxV, {from: accounts[0]});
		const uint256M8oqAGe = await XenoFelixGiN0Vh3.allowance.call(addressDLp5mVE, addressrlaActs, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringlEEUVTz = "BcK82Kxy2cCqeMA2hmtmDfN4DdIIJsMOBRALMdjO"
		const stringDFEBrQ3 = "QNr6w9BOMGgvFaGECzWaB46T5EKVaZEoH"
		const uintsmzl7Bq = BigInt("2041")
		const uintosiINE0 = BigInt("168")
		const XenoFelixN5sqvUQ = await XenoFelix.new(stringlEEUVTz, stringDFEBrQ3, uintsmzl7Bq, uintosiINE0, {from: accounts[3]});
		const uintohibu2q = BigInt("1151")
		const addressumaMwcL = accounts[0]
		const addressHNxp7PC = accounts[3]
		const uinttVAajGh = BigInt("1819")
		const addressFRp1ZFw = accounts[3]
		const addressmXGijZ9 = accounts[0]
		const addressxH9zXAG = accounts[5]
		const boolcyFa63w = await XenoFelixN5sqvUQ.approve.call(addressumaMwcL, uintohibu2q, {from: accounts[0]});
		const boolGtiebu = await XenoFelixN5sqvUQ.isPauser.call(addressHNxp7PC, {from: accounts[0]});
		const boolBjddJpI = await XenoFelixN5sqvUQ.transferFrom.call(addressmXGijZ9, addressFRp1ZFw, uinttVAajGh, {from: accounts[2]});
		const uint256TMxfYPQ = await XenoFelixN5sqvUQ.balanceOf.call(addressxH9zXAG, {from: accounts[1]});

		assert.equal(boolGtiebu, true)
		assert.equal(boolcyFa63w, true)
		await expect(XenoFelixN5sqvUQ.transferFrom.call(addressmXGijZ9, addressFRp1ZFw, uinttVAajGh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringQqBH4vc = "5UQhhKkIUVFpUnBTjuWPNi1mBDnANd6BmAYJprdTcetfqfLsWzaqBTUV"
		const stringVVmmAfo = "duqg8DTjJecieAmv"
		const uintxCzhv0h = BigInt("695")
		const uintqwh7iru = BigInt("60")
		const XenoFelixpMCzHPU = await XenoFelix.new(stringQqBH4vc, stringVVmmAfo, uintxCzhv0h, uintqwh7iru, {from: accounts[4]});
		const addressma5B1jv = accounts[3]
		const addresswzBM4r9 = accounts[2]
		const uint256NrkZBxC = await XenoFelixpMCzHPU.balanceOf.call(addressma5B1jv, {from: accounts[3]});
		const boolvfpQpSi = await XenoFelixpMCzHPU.freezeAccount.call(addresswzBM4r9, {from: accounts[0]});

		assert.equal(uint256NrkZBxC, BigInt("0"))
		await expect(XenoFelixpMCzHPU.freezeAccount.call(addresswzBM4r9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringTqhcnU = "CKfEIpgYXUnXSK5kmK8CbiPcdZcbAnHaJRK10I8ILo62G3fxxIn"
		const stringsEQ4M0X = "NpjhfPWQQWVmbWNPXPHvYJYsAFwPN"
		const uinteWkN4Cl = BigInt("1803")
		const uintnusIpAt = BigInt("115")
		const XenoFelixSe38waP = await XenoFelix.new(stringTqhcnU, stringsEQ4M0X, uinteWkN4Cl, uintnusIpAt, {from: accounts[5]});
		const uintnCbUb6A = BigInt("1892")
		const addressSUbDdQf = accounts[2]
		const addressMmgFbJR = accounts[0]
		const uint9JN9LO = BigInt("917")
		const addressLLOli87 = accounts[0]
		const addressGSTYgkf = accounts[3]
		const uintbMGIRRV = BigInt("1308")
		const address8e7uNK = accounts[5]
		const addressLIHm0xj = await XenoFelixSe38waP.burnFrom.call(addressSUbDdQf, uintnCbUb6A, {from: "0x0000000000000000000000000000000000000001"});
		const addressXXgRPNM = await XenoFelixSe38waP.removePauser.call(addressMmgFbJR, {from: accounts[5]});
		const boolcvsxQoa = await XenoFelixSe38waP.transferFrom.call(addressGSTYgkf, addressLLOli87, uint9JN9LO, {from: accounts[3]});
		await XenoFelixSe38waP.unpause.call({from: accounts[0]});
		const uint8kkPIi3q = await XenoFelixSe38waP.decimals.call({from: accounts[0]});
		const boolCeOsmCf = await XenoFelixSe38waP.transfer.call(address8e7uNK, uintbMGIRRV, {from: accounts[1]});

		await expect(XenoFelixSe38waP.burnFrom.call(addressSUbDdQf, uintnCbUb6A, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringQqBH4vc = "5UQhhKkIUVFpUnBTjuWPNi1mBDnANd6BmAYJprdTcetfqfLsWzaqBTUV"
		const stringVVmmAfo = "duqg8DTjJecieAmv"
		const uintPQXJVes = BigInt("695")
		const uintkP1FLi0 = BigInt("60")
		const XenoFelixpMCzHPU = await XenoFelix.new(stringQqBH4vc, stringVVmmAfo, uintPQXJVes, uintkP1FLi0, {from: accounts[4]});
		const uintH5qhf3e = BigInt("234")
		const addressaxLJvZt = accounts[1]
		const addressfumwkg = accounts[3]
		const uint256Gbqn5HK = await XenoFelixpMCzHPU.totalSupply.call({from: accounts[3]});
		const boolDDZHh1 = await XenoFelixpMCzHPU.burnOwner.call(addressaxLJvZt, uintH5qhf3e, {from: accounts[1]});
		await XenoFelixpMCzHPU.whenPaused.call({from: accounts[4]});
		const uint256NrkZBxC = await XenoFelixpMCzHPU.balanceOf.call(addressfumwkg, {from: accounts[3]});

		assert.equal(uint256Gbqn5HK, BigInt("695000000000000000000000000000000000000000000000000000000000000"))
		await expect(XenoFelixpMCzHPU.burnOwner.call(addressaxLJvZt, uintH5qhf3e, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringit7eiwH = "CpLil"
		const stringn75cLF2 = "nt7dwfnjHJQjxhzk6kGIaKqEIocMkLwQ8aTvHTIsvhN4cBizfPv5C8yOxxGeP01rWRN07hMiLe3vSNZdkswVj4TKbTF"
		const uintf0aXL2 = BigInt("151")
		const XenoFelixUQRCo7 = await XenoFelix.new(stringit7eiwH, stringn75cLF2, uintf0aXL2, {from: "0x0000000000000000000000000000000000000001"});
		const uintiVVQ184 = BigInt("482")
		const addressnl64S2 = accounts[0]
		const uintNhvlzlv = BigInt("1517")
		const addressbTi7qro = accounts[2]
		const addressQ7REX3P = accounts[0]
		const uintO6fmw1x = BigInt("1100")
		const address8or3mb = accounts[4]
		const boola7zzRnf = await XenoFelixUQRCo7.burnOwner.call(addressnl64S2, uintiVVQ184, {from: accounts[5]});
		const boolO7zMpEb = await XenoFelixUQRCo7.transferFrom.call(addressQ7REX3P, addressbTi7qro, uintNhvlzlv, {from: accounts[3]});
		await XenoFelixUQRCo7.renouncePauser.call({from: accounts[0]});
		const boolHdPgJbc = await XenoFelixUQRCo7.approve.call(address8or3mb, uintO6fmw1x, {from: accounts[2]});
		await XenoFelixUQRCo7.pause.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringABNJLl = "gAmpKVhbFNtdFTq6y2tlxDoAWHy1AW9aonc1lNqIncpTkkh"
		const stringwEmSEd = "kjl4T5iidQ6EeVFzqEIxXQX"
		const uintmXX9iyN = BigInt("1886")
		const uintGTWb2oj = BigInt("217")
		const XenoFelixAaf9biw = await XenoFelix.new(stringABNJLl, stringwEmSEd, uintmXX9iyN, uintGTWb2oj, {from: accounts[2]});
		const uintBjDFpmu = BigInt("1776")
		const addressYi7YHRH = accounts[0]
		const addressFiokeu = accounts[1]
		const addressfLkCYeZ = accounts[1]
		const uint8VMYV0B = await XenoFelixAaf9biw.decimals.call({from: accounts[0]});
		const boolLvjn5rR = await XenoFelixAaf9biw.transfer.call(addressYi7YHRH, uintBjDFpmu, {from: "0x0000000000000000000000000000000000000001"});
		const addressxNbNMcx = await XenoFelixAaf9biw.notFrozenAndTransaction.call(addressfLkCYeZ, addressFiokeu, {from: accounts[2]});

		assert.equal(uint8VMYV0B, BigInt("217"))
		await expect(XenoFelixAaf9biw.transfer.call(addressYi7YHRH, uintBjDFpmu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringlEEUVTz = "BcK82Kxy2cCqeMA2hmtmDfN4DdIIJsMOBRALMdjO"
		const stringDFEBrQ3 = "QNr6w9BOMGgvFaGECzWaB46T5EKVaZEoH"
		const uintOnZMRzC = BigInt("2041")
		const uintomh8fMY = BigInt("168")
		const XenoFelixN5sqvUQ = await XenoFelix.new(stringlEEUVTz, stringDFEBrQ3, uintOnZMRzC, uintomh8fMY, {from: accounts[3]});
		const uintE82vxTZ = BigInt("1819")
		const addressZjtVCw = accounts[3]
		const addressgFH4qC = accounts[0]
		const addresskvU7Y4 = accounts[2]
		const addresssOv4K1Q = accounts[5]
		const uintoyHG2Hu = BigInt("473")
		const addressRGFLv9H = accounts[4]
		const uintzZIrzyu = BigInt("385")
		const uintHzcTf3k = BigInt("1384")
		const addressq8SVyva = accounts[4]
		const stringj3GuZ6O = await XenoFelixN5sqvUQ.symbol.call({from: accounts[2]});
		await XenoFelixN5sqvUQ.renouncePauser.call({from: accounts[1]});
		const boolBjddJpI = await XenoFelixN5sqvUQ.transferFrom.call(addressgFH4qC, addressZjtVCw, uintE82vxTZ, {from: accounts[2]});
		const addressuL2enNb = await XenoFelixN5sqvUQ.transferOwnership.call(addresskvU7Y4, {from: accounts[4]});
		const uint256TMxfYPQ = await XenoFelixN5sqvUQ.balanceOf.call(addresssOv4K1Q, {from: accounts[1]});
		const boolk0TOtcs = await XenoFelixN5sqvUQ.transfer.call(addressRGFLv9H, uintoyHG2Hu, {from: accounts[3]});
		const boolIQdewz = await XenoFelixN5sqvUQ.transferWithLock.call(addressq8SVyva, uintHzcTf3k, uintzZIrzyu, {from: accounts[3]});

		assert.equal(stringj3GuZ6O, "QNr6w9BOMGgvFaGECzWaB46T5EKVaZEoH")
		await expect(XenoFelixN5sqvUQ.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringQqBH4vc = "5UQhhKkIUVFpUnBTjuWPNi1mBDnANd6BmAYJprdTcetfqfLsWzaqBTUV"
		const stringVVmmAfo = "duqg8DTjJecieAmv"
		const uintDuqqhme = BigInt("695")
		const uintqdBMkn = BigInt("60")
		const XenoFelixpMCzHPU = await XenoFelix.new(stringQqBH4vc, stringVVmmAfo, uintDuqqhme, uintqdBMkn, {from: accounts[4]});
		const uintJRaUhE5 = BigInt("1183")
		const addressNItGFD = accounts[2]
		const addressnTAYghq = accounts[4]
		const addresswIM4rRJ = accounts[2]
		const addressvUGxY7i = accounts[3]
		const boolQH3IBFj = await XenoFelixpMCzHPU.increaseAllowance.call(addressNItGFD, uintJRaUhE5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NrkZBxC = await XenoFelixpMCzHPU.balanceOf.call(addressnTAYghq, {from: accounts[3]});
		const boolvfpQpSi = await XenoFelixpMCzHPU.freezeAccount.call(addresswIM4rRJ, {from: accounts[0]});
		const addressM11F494 = await XenoFelixpMCzHPU.transferOwnership.call(addressvUGxY7i, {from: accounts[0]});

		assert.equal(boolQH3IBFj, true)
		assert.equal(uint256NrkZBxC, BigInt("695000000000000000000000000000000000000000000000000000000000000"))
		await expect(XenoFelixpMCzHPU.freezeAccount.call(addresswIM4rRJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringQqBH4vc = "5UQhhKkIUVFpUnBTjuWPNi1mBDnANd6BmAYJprdTcetfqfLsWzaqBTUV"
		const stringVVmmAfo = "duqg8DTjJecieAmv"
		const uintRdpWWhh = BigInt("695")
		const uint6hnUxS = BigInt("60")
		const XenoFelixpMCzHPU = await XenoFelix.new(stringQqBH4vc, stringVVmmAfo, uintRdpWWhh, uint6hnUxS, {from: accounts[4]});
		const addressELfuqbh = accounts[4]
		const addressgZAcuUq = accounts[2]
		const addressLUUBfiU = accounts[1]
		const addressNBsEdbJ = accounts[2]
		const addressuXicGOO = accounts[3]
		const uint256NrkZBxC = await XenoFelixpMCzHPU.balanceOf.call(addressELfuqbh, {from: accounts[3]});
		const uint256tXG5qa = await XenoFelixpMCzHPU.allowance.call(addressLUUBfiU, addressgZAcuUq, {from: accounts[1]});
		await XenoFelixpMCzHPU.unpause.call({from: accounts[4]});
		const boolvfpQpSi = await XenoFelixpMCzHPU.freezeAccount.call(addressNBsEdbJ, {from: accounts[0]});
		await XenoFelixpMCzHPU.renouncePauser.call({from: accounts[0]});
		const addressM11F494 = await XenoFelixpMCzHPU.transferOwnership.call(addressuXicGOO, {from: accounts[0]});

		assert.equal(uint256NrkZBxC, BigInt("695000000000000000000000000000000000000000000000000000000000000"))
		assert.equal(uint256tXG5qa, BigInt("0"))
		await expect(XenoFelixpMCzHPU.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringlEEUVTz = "BcK82Kxy2cCqeMA2hmtmDfN4DdIIJsMOBRALMdjO"
		const stringDFEBrQ3 = "QNr6w9BOMGgvFaGECzWaB46T5EKVaZEoH"
		const uintO2e8Rpe = BigInt("2041")
		const uintJv0VxC9 = BigInt("168")
		const XenoFelixN5sqvUQ = await XenoFelix.new(stringlEEUVTz, stringDFEBrQ3, uintO2e8Rpe, uintJv0VxC9, {from: accounts[3]});
		const addressigQxfCe = accounts[3]
		const uintBrAngUO = BigInt("1359")
		const addresstCczZWN = accounts[3]
		const uintwRUvIDj = BigInt("1819")
		const addressxk4oy9t = accounts[3]
		const addressIB4J20B = accounts[0]
		const addressa9oPEG = accounts[2]
		const addressLMwHQc0 = accounts[4]
		const addresslcdPfKn = accounts[5]
		const uinthWixajZ = BigInt("385")
		const uintQblo7N = BigInt("1384")
		const addresskgI7Yum = accounts[4]
		const boolGtiebu = await XenoFelixN5sqvUQ.isPauser.call(addressigQxfCe, {from: accounts[0]});
		const boolfs1C5co = await XenoFelixN5sqvUQ.decreaseAllowance.call(addresstCczZWN, uintBrAngUO, {from: accounts[4]});
		const boolBjddJpI = await XenoFelixN5sqvUQ.transferFrom.call(addressIB4J20B, addressxk4oy9t, uintwRUvIDj, {from: accounts[2]});
		const addressuL2enNb = await XenoFelixN5sqvUQ.transferOwnership.call(addressa9oPEG, {from: accounts[4]});
		const boolJZrK073 = await XenoFelixN5sqvUQ.isPauser.call(addressLMwHQc0, {from: accounts[2]});
		const uint256TMxfYPQ = await XenoFelixN5sqvUQ.balanceOf.call(addresslcdPfKn, {from: accounts[1]});
		await XenoFelixN5sqvUQ.onlyPauser.call({from: accounts[0]});
		const boolIQdewz = await XenoFelixN5sqvUQ.transferWithLock.call(addresskgI7Yum, uintQblo7N, uinthWixajZ, {from: accounts[3]});

		assert.equal(boolGtiebu, true)
		await expect(XenoFelixN5sqvUQ.decreaseAllowance.call(addresstCczZWN, uintBrAngUO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringo3UJVSS = "obr5wPzh37Ri6pcHK1hqR2FS2zli94HwPJdLPxqG8pLagfjzes21FbM3LjseouBW9hb5rRJ"
		const string3wXho1 = "rcIrXCTY8giivyvJOgLoOdn3CEzISKnOr7uy9Fg4xL"
		const uintdTyNF8n = BigInt("14")
		const XenoFelixjzzB6mY = await XenoFelix.new(stringo3UJVSS, string3wXho1, uintdTyNF8n, {from: accounts[5]});
		const addresshiKsRg = accounts[0]
		const addressSHCpdRB = accounts[1]
		const addressvu8mk1b = accounts[0]
		const addressihjodo = accounts[2]
		const uint256nkOW3r = await XenoFelixjzzB6mY.balanceOf.call(addresshiKsRg, {from: accounts[3]});
		const uint256vUEV8m4 = await XenoFelixjzzB6mY.allowance.call(addressvu8mk1b, addressSHCpdRB, {from: accounts[3]});
		const addressQPFiMTy = await XenoFelixjzzB6mY.removePauser.call(addressihjodo, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringQqBH4vc = "5UQhhKkIUVFpUnBTjuWPNi1mBDnANd6BmAYJprdTcetfqfLsWzaqBTUV"
		const stringVVmmAfo = "duqg8DTjJecieAmv"
		const uintKXMgRi2 = BigInt("695")
		const uintYQCsiCe = BigInt("60")
		const XenoFelixpMCzHPU = await XenoFelix.new(stringQqBH4vc, stringVVmmAfo, uintKXMgRi2, uintYQCsiCe, {from: accounts[4]});
		const addresswtZxu3r = accounts[3]
		const uintMgAm5NL = BigInt("1154")
		const addressdaAo55U = accounts[3]
		await XenoFelixpMCzHPU.pause.call({from: accounts[4]});
		const boolvfpQpSi = await XenoFelixpMCzHPU.freezeAccount.call(addresswtZxu3r, {from: accounts[0]});
		const addressvyD9ocT = await XenoFelixpMCzHPU.burnFrom.call(addressdaAo55U, uintMgAm5NL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixpMCzHPU.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringlEEUVTz = "BcK82Kxy2cCqeMA2hmtmDfN4DdIIJsMOBRALMdjO"
		const stringDFEBrQ3 = "QNr6w9BOMGgvFaGECzWaB46T5EKVaZEoH"
		const uint5uuxtI = BigInt("2041")
		const uintX0jsmMb = BigInt("168")
		const XenoFelixN5sqvUQ = await XenoFelix.new(stringlEEUVTz, stringDFEBrQ3, uint5uuxtI, uintX0jsmMb, {from: accounts[3]});
		const uintUuuQ0Qh = BigInt("1221")
		const addressXImiTl1 = accounts[1]
		const addressoLMrr5K = accounts[6]
		const boolwUmO4iN = await XenoFelixN5sqvUQ.transfer.call(addressXImiTl1, uintUuuQ0Qh, {from: accounts[3]});
		const uint256TMxfYPQ = await XenoFelixN5sqvUQ.balanceOf.call(addressoLMrr5K, {from: accounts[1]});

		assert.equal(boolwUmO4iN, true)
		assert.equal(uint256TMxfYPQ, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringiEr5VA2 = "i2eXewix25ebTp16bzKemfCDjfQ2SKUNloI26gQSTPIrQSzMeBCwJgRhhfUwKGtAXKIzIEid42Gj7N3vIxqV"
		const stringpigksna = "tPNpafa"
		const uint05zao2 = BigInt("150")
		const XenoFelixYIpoJRk = await XenoFelix.new(stringiEr5VA2, stringpigksna, uint05zao2, {from: accounts[1]});
		const uintVBIhltE = BigInt("632")
		const addressy3RC8hH = accounts[0]
		const uintnYrIHY = BigInt("550")
		const addresssdwEOf0 = accounts[0]
		const boolyPESIG4 = await XenoFelixYIpoJRk.approve.call(addressy3RC8hH, uintVBIhltE, {from: accounts[3]});
		const boolu930D2P = await XenoFelixYIpoJRk.decreaseAllowance.call(addresssdwEOf0, uintnYrIHY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringQqBH4vc = "5UQhhKkIUVFpUnBTjuWPNi1mBDnANd6BmAYJprdTcetfqfLsWzaqBTUV"
		const stringVVmmAfo = "duqg8DTjJecieAmv"
		const uinthi2fVom = BigInt("695")
		const uintim50bz4 = BigInt("60")
		const XenoFelixpMCzHPU = await XenoFelix.new(stringQqBH4vc, stringVVmmAfo, uinthi2fVom, uintim50bz4, {from: accounts[4]});
		const addressEcxHAAn = accounts[2]
		const addressIqXwCqF = accounts[3]
		const addressNn4Zxx = await XenoFelixpMCzHPU.removePauser.call(addressEcxHAAn, {from: accounts[4]});
		const uint256uf8zZtP = await XenoFelixpMCzHPU.balanceOf.call(addressIqXwCqF, {from: accounts[0]});
		await XenoFelixpMCzHPU.renouncePauser.call({from: accounts[0]});

		await expect(XenoFelixpMCzHPU.removePauser.call(addressEcxHAAn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringQqBH4vc = "5UQhhKkIUVFpUnBTjuWPNi1mBDnANd6BmAYJprdTcetfqfLsWzaqBTUV"
		const stringVVmmAfo = "duqg8DTjJecieAmv"
		const uintTQpOGL9 = BigInt("695")
		const uintYbrxZSD = BigInt("60")
		const XenoFelixpMCzHPU = await XenoFelix.new(stringQqBH4vc, stringVVmmAfo, uintTQpOGL9, uintYbrxZSD, {from: accounts[4]});
		const addressyyEeBK = "0x0000000000000000000000000000000000000001"
		const addressTc9FV0D = await XenoFelixpMCzHPU.addPauser.call(addressyyEeBK, {from: accounts[4]});
		const stringUOd6AmC = await XenoFelixpMCzHPU.name.call({from: accounts[1]});
		await XenoFelixpMCzHPU.renouncePauser.call({from: accounts[0]});
		const uint8iSRzt8a = await XenoFelixpMCzHPU.decimals.call({from: accounts[3]});

		assert.equal(stringUOd6AmC, "5UQhhKkIUVFpUnBTjuWPNi1mBDnANd6BmAYJprdTcetfqfLsWzaqBTUV")
		await expect(XenoFelixpMCzHPU.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringQqBH4vc = "5UQhhKkIUVFpUnBTjuWPNi1mBDnANd6BmAYJprdTcetfqfLsWzaqBTUV"
		const stringVVmmAfo = "duqg8DTjJecieAmv"
		const uinth03FnPW = BigInt("695")
		const uintMvcPl0d = BigInt("60")
		const XenoFelixpMCzHPU = await XenoFelix.new(stringQqBH4vc, stringVVmmAfo, uinth03FnPW, uintMvcPl0d, {from: accounts[4]});
		const uintd5JpuM8 = BigInt("122")
		const addressr8X97C = accounts[2]
		const boolWelgInZ = await XenoFelixpMCzHPU.burnOwner.call(addressr8X97C, uintd5JpuM8, {from: accounts[4]});
		await XenoFelixpMCzHPU.renouncePauser.call({from: accounts[0]});

		await expect(XenoFelixpMCzHPU.burnOwner.call(addressr8X97C, uintd5JpuM8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringlEEUVTz = "BcK82Kxy2cCqeMA2hmtmDfN4DdIIJsMOBRALMdjO"
		const stringDFEBrQ3 = "QNr6w9BOMGgvFaGECzWaB46T5EKVaZEoH"
		const uintD7yCao1 = BigInt("2041")
		const uintmWMQIF = BigInt("168")
		const XenoFelixN5sqvUQ = await XenoFelix.new(stringlEEUVTz, stringDFEBrQ3, uintD7yCao1, uintmWMQIF, {from: accounts[3]});
		const addressaXxSfs4 = accounts[6]
		const uintaloVbHQ = BigInt("1644")
		const uint256TMxfYPQ = await XenoFelixN5sqvUQ.balanceOf.call(addressaXxSfs4, {from: accounts[1]});
		const uint256IMzSBM = await XenoFelixN5sqvUQ.burn.call(uintaloVbHQ, {from: accounts[0]});

		assert.equal(uint256TMxfYPQ, BigInt("0"))
		await expect(XenoFelixN5sqvUQ.burn.call(uintaloVbHQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringlEEUVTz = "BcK82Kxy2cCqeMA2hmtmDfN4DdIIJsMOBRALMdjO"
		const stringDFEBrQ3 = "QNr6w9BOMGgvFaGECzWaB46T5EKVaZEoH"
		const uintXouWj9x = BigInt("2041")
		const uintJy7vkP = BigInt("168")
		const XenoFelixN5sqvUQ = await XenoFelix.new(stringlEEUVTz, stringDFEBrQ3, uintXouWj9x, uintJy7vkP, {from: accounts[3]});
		const addressKpBScJT = accounts[6]
		const addressAMACkjP = accounts[5]
		const uint256TMxfYPQ = await XenoFelixN5sqvUQ.balanceOf.call(addressKpBScJT, {from: accounts[1]});
		const addressT0tuVgy = await XenoFelixN5sqvUQ.transferOwnership.call(addressAMACkjP, {from: accounts[3]});

		assert.equal(uint256TMxfYPQ, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringlEEUVTz = "BcK82Kxy2cCqeMA2hmtmDfN4DdIIJsMOBRALMdjO"
		const stringDFEBrQ3 = "QNr6w9BOMGgvFaGECzWaB46T5EKVaZEoH"
		const uintm38i9ua = BigInt("2041")
		const uintPnata8W = BigInt("168")
		const XenoFelixN5sqvUQ = await XenoFelix.new(stringlEEUVTz, stringDFEBrQ3, uintm38i9ua, uintPnata8W, {from: accounts[3]});
		const uintP1aVINM = BigInt("230")
		const uintSf32ryr = BigInt("996")
		const addressqKaCJbQ = accounts[4]
		const addressrUEKPHa = accounts[0]
		const addressXoWqHSD = accounts[1]
		const uintmkM2KvP = BigInt("1819")
		const addressKn9SrT0 = accounts[3]
		const addressgZSmWmr = accounts[1]
		const boolbZimKk8 = await XenoFelixN5sqvUQ.lock.call(addressqKaCJbQ, uintSf32ryr, uintP1aVINM, {from: accounts[3]});
		const boolKxIsjMi = await XenoFelixN5sqvUQ.isPauser.call(addressrUEKPHa, {from: accounts[3]});
		const addressYZcKbf = await XenoFelixN5sqvUQ.notFrozen.call(addressXoWqHSD, {from: accounts[4]});
		const boolBjddJpI = await XenoFelixN5sqvUQ.transferFrom.call(addressgZSmWmr, addressKn9SrT0, uintmkM2KvP, {from: accounts[2]});

		await expect(XenoFelixN5sqvUQ.lock.call(addressqKaCJbQ, uintSf32ryr, uintP1aVINM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})