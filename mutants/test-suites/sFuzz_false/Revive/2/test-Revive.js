const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveBeJSqm = await Revive.new({from: accounts[5]});
		const addressES2w5l = accounts[3]
		const uintnfUDp4m = BigInt("662")
		const addressMKgurso = accounts[2]
//		await ReviveBeJSqm.onlyOwner.call({from: accounts[2]});
//		const uint256NUCAGJl = await ReviveBeJSqm.balanceOf.call(addressES2w5l, {from: accounts[4]});
//		const boolKwDxF3b = await ReviveBeJSqm.decreaseAllowance.call(addressMKgurso, uintnfUDp4m, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveBeJSqm.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveaugedvr = await Revive.new({from: accounts[2]});
		const addressiTdRIf = accounts[3]
		const byteUJi9SG2 = "0x0312161a020d1f161c011c1e070f060f1a1a0313001a040d0c0b190d170f1812"
		const addressXs0Vkr = accounts[3]
		const uintPXM4Bfe = BigInt("462")
		const uintM05oABq = BigInt("754")
		const byteBetz4r4 = "0x011a0d1d1b1b1d1e0b091d0d101308000f1e1f070f04020b070012190511140d"
		const address7J9HON = accounts[1]
		const addressby8xqKT = accounts[3]
//		const addressDEAOq5l = await Reviveaugedvr.transferOwnership.call(addressiTdRIf, {from: accounts[4]});
//		const uint256rU9xOoj = await Reviveaugedvr.tokensLocked.call(addressXs0Vkr, byteUJi9SG2, {from: accounts[2]});
//		const boollUmMDB = await Reviveaugedvr.transferWithLock.call(address7J9HON, byteBetz4r4, uintM05oABq, uintPXM4Bfe, {from: accounts[1]});
//		const uint256cUkLeVA = await Reviveaugedvr.totalBalanceOf.call(addressby8xqKT, {from: accounts[2]});

		await expect(Reviveaugedvr.transferOwnership.call(addressiTdRIf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveaqLAEgp = await Revive.new({from: accounts[1]});
		const uintsBLe3nH = BigInt("1735")
		const addressqlaEhwp = accounts[4]
		const uintoA0dMwI = BigInt("1150")
		const addressfVpbfIp = accounts[1]
		const uintTy9r4Ey = BigInt("1056")
		const addresskXqYiHG = accounts[2]
//		const boolZkxh79J = await ReviveaqLAEgp.decreaseAllowance.call(addressqlaEhwp, uintsBLe3nH, {from: accounts[1]});
//		const addressQoP1tm8 = await ReviveaqLAEgp.recoverERC20.call(addressfVpbfIp, uintoA0dMwI, {from: accounts[3]});
//		const boolmU8P9jW = await ReviveaqLAEgp.increaseAllowance.call(addresskXqYiHG, uintTy9r4Ey, {from: accounts[4]});

		await expect(ReviveaqLAEgp.decreaseAllowance.call(addressqlaEhwp, uintsBLe3nH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveyEwm2m = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGWQdZxX = BigInt("1074")
		const byteTZe6inp = "0x17171208110f0c13091a1403021f091913161c091d141b101a0a1a081a171c16"
		const uinthkYUlpf = BigInt("341")
		const addressx7ZAXvq = accounts[3]
		const uintYVzJBlg = BigInt("1120")
		const addressroFYUqR = accounts[0]
		const addressXAkngif = accounts[1]
		const addressPkJ20k = accounts[2]
		const boolRIUNENc = await ReviveyEwm2m.increaseLockAmount.call(byteTZe6inp, uintGWQdZxX, {from: accounts[2]});
		const boolz4rGNTg = await ReviveyEwm2m.isOwner.call({from: accounts[1]});
		const boolODMJ993 = await ReviveyEwm2m.decreaseAllowance.call(addressx7ZAXvq, uinthkYUlpf, {from: accounts[1]});
		const boolK9LRVp = await ReviveyEwm2m.decreaseAllowance.call(addressroFYUqR, uintYVzJBlg, {from: accounts[0]});
		const uint256jOouzkG = await ReviveyEwm2m.allowance.call(addressPkJ20k, addressXAkngif, {from: accounts[2]});
	});

	it('test for Revive', async () => {
		const ReviveKGD2CAw = await Revive.new({from: accounts[0]});
		const uintwghtEAZ = BigInt("350")
		const uintBfGeJgx = BigInt("196")
		const addressAG6nHtV = accounts[3]
		const bytebQRJjIq = "0x0a16031c1a170f09041518130a040c1d0f100f011c15160b110608050f07110b"
		const addressavle7vW = "0x0000000000000000000000000000000000000001"
//		const uint256rWo7AYQ = await ReviveKGD2CAw.recoverERC20.call(uintwghtEAZ, {from: accounts[0]});
//		const boolbXf4WNG = await ReviveKGD2CAw.decreaseAllowance.call(addressAG6nHtV, uintBfGeJgx, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256QCDfX7u = await ReviveKGD2CAw.tokensUnlockable.call(addressavle7vW, bytebQRJjIq, {from: accounts[3]});

		await expect(ReviveKGD2CAw.recoverERC20.call(uintwghtEAZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYpFVZs1 = await Revive.new({from: accounts[2]});
		const uintXMCG6NH = BigInt("292")
		const byteEK9P1CN = "0x1d090c1a0e0a0b0e15130a1d130d0f15080a1b1504200e17010c0a2002050e1d"
		const uintbkNqvY = BigInt("765")
		const addressX06uBUR = accounts[0]
		const addressQ5OZdzN = accounts[1]
		const addressrDwaSR = "0x0000000000000000000000000000000000000001"
		const byteCQOLwOZ = "0x0c0809121f080b1e050b07110a1120201b051f131710180c0b1a1c0513160913"
		const addressu1joFEw = accounts[4]
//		const boolc26RCn7 = await ReviveYpFVZs1.extendLock.call(byteEK9P1CN, uintXMCG6NH, {from: accounts[1]});
//		const boolrs08lQE = await ReviveYpFVZs1.transferFrom.call(addressQ5OZdzN, addressX06uBUR, uintbkNqvY, {from: accounts[1]});
//		const uint256jkuUT9F = await ReviveYpFVZs1.totalBalanceOf.call(addressrDwaSR, {from: accounts[4]});
//		const uint256Xp6qc3C = await ReviveYpFVZs1.tokensUnlockable.call(addressu1joFEw, byteCQOLwOZ, {from: accounts[5]});

		await expect(ReviveYpFVZs1.extendLock.call(byteEK9P1CN, uintXMCG6NH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMrZU9jy = await Revive.new({from: accounts[0]});
		const addressfYcX76H = accounts[1]
		const address8IAqOB = "0x0000000000000000000000000000000000000001"
		const uintKQM9HNs = BigInt("638")
		const addressGB1TJ4Y = accounts[1]
		const uintEns8Ioa = BigInt("145")
		const uintpPRjd8z = BigInt("2021")
		const bytebNGFFO7 = "0x14201e010d040d0c1d120f1d1217161a171e101b0f16030815101112090d1b0a"
		const uintp8mV8lH = BigInt("1245")
		const addressoMa8xI6 = "0x0000000000000000000000000000000000000001"
		const uint256Qs7pTBl = await ReviveMrZU9jy.allowance.call(address8IAqOB, addressfYcX76H, {from: accounts[2]});
		const boolKhxXhxa = await ReviveMrZU9jy.increaseAllowance.call(addressGB1TJ4Y, uintKQM9HNs, {from: accounts[5]});
		const boolDrvVhEz = await ReviveMrZU9jy.lock.call(bytebNGFFO7, uintpPRjd8z, uintEns8Ioa, {from: accounts[0]});
		const boolJCW6TH7 = await ReviveMrZU9jy.approve.call(addressoMa8xI6, uintp8mV8lH, {from: accounts[5]});

		assert.equal(boolDrvVhEz, true)
		assert.equal(boolJCW6TH7, true)
		assert.equal(boolKhxXhxa, true)
		assert.equal(uint256Qs7pTBl, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveelSAYYC = await Revive.new({from: accounts[5]});
		const uintErByUnx = BigInt("307")
		const addressLmuzlw7 = accounts[0]
//		const uint256nT8bQ6B = await ReviveelSAYYC.recoverERC20.call(uintErByUnx, {from: accounts[5]});
//		const uint256OwtVpFC = await ReviveelSAYYC.totalBalanceOf.call(addressLmuzlw7, {from: accounts[5]});
//		await ReviveelSAYYC.renounceOwnership.call({from: accounts[0]});

		await expect(ReviveelSAYYC.recoverERC20.call(uintErByUnx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const uintQb8dMZH = BigInt("625")
		const bytedehC4W = "0x1f1e11101f1d0f04191e1d04091a091d041b170909170d130901041e0a1a1817"
//		const boolG7JEMa3 = await ReviveI5SZbol.increaseLockAmount.call(bytedehC4W, uintQb8dMZH, {from: accounts[1]});
//		const uint256k64mPcA = await ReviveI5SZbol.totalSupply.call({from: accounts[0]});

		await expect(ReviveI5SZbol.increaseLockAmount.call(bytedehC4W, uintQb8dMZH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const addresscOs0d7 = accounts[0]
		const addressnoZxeSr = accounts[2]
		const addressfaCF94 = accounts[3]
		const uint256tmz9bq9 = await ReviveI5SZbol.getUnlockableTokens.call(addresscOs0d7, {from: accounts[2]});
		const uint256a9zn7LK = await ReviveI5SZbol.allowance.call(addressfaCF94, addressnoZxeSr, {from: accounts[1]});

		assert.equal(uint256a9zn7LK, BigInt("0"))
		assert.equal(uint256tmz9bq9, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveMrZU9jy = await Revive.new({from: accounts[0]});
		const addressxfvYdqM = accounts[1]
		const addressEBjkAy6 = "0x0000000000000000000000000000000000000001"
		const uintcsqcWNG = BigInt("1454")
		const addressLQUCBRp = accounts[4]
		const addressh7cYxu = accounts[5]
		const addressoXUiFOZ = accounts[3]
		const uintozO64IK = BigInt("638")
		const addressVw3AoQ7 = accounts[1]
		const uintf3R9J7p = BigInt("145")
		const uintzN9YleR = BigInt("2021")
		const byteWEEpp3B = "0x14201e010d040d0c1d120f1d1217161a171e101b0f16030815101112090d1b0a"
		const uintF6bww7L = BigInt("1245")
		const addressB0EiCTU = "0x0000000000000000000000000000000000000000"
		const uint256Qs7pTBl = await ReviveMrZU9jy.allowance.call(addressEBjkAy6, addressxfvYdqM, {from: accounts[2]});
//		const boolQdl2Apf = await ReviveMrZU9jy.transferFrom.call(addressh7cYxu, addressLQUCBRp, uintcsqcWNG, {from: accounts[0]});
//		const addressoUjZJw = await ReviveMrZU9jy.transferOwnership.call(addressoXUiFOZ, {from: accounts[3]});
//		const boolKhxXhxa = await ReviveMrZU9jy.increaseAllowance.call(addressVw3AoQ7, uintozO64IK, {from: accounts[5]});
//		const boolDrvVhEz = await ReviveMrZU9jy.lock.call(byteWEEpp3B, uintzN9YleR, uintf3R9J7p, {from: accounts[0]});
//		const boolJCW6TH7 = await ReviveMrZU9jy.approve.call(addressB0EiCTU, uintF6bww7L, {from: accounts[5]});

		assert.equal(uint256Qs7pTBl, BigInt("0"))
		await expect(ReviveMrZU9jy.transferFrom.call(addressh7cYxu, addressLQUCBRp, uintcsqcWNG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMrZU9jy = await Revive.new({from: accounts[0]});
		const addressQ3aGeJZ = accounts[1]
		const addressDLDTEr1 = "0x0000000000000000000000000000000000000001"
		const uintNMtxAbu = BigInt("638")
		const addressiWmPiV5 = accounts[1]
		const uintyAp70oB = BigInt("2004")
		const uintrLBU091 = BigInt("792")
		const byteO4aTelf = "0x0a0d0d1608080e120518171f031f1e1003051f06181a1c1207141304021e0803"
		const addressemWosn = accounts[3]
		const uintVJd5dbv = BigInt("145")
		const uintRPpMJn = BigInt("2021")
		const byteNHii5Cu = "0x14201e010d040d0c1d120f1d1217161a171e101b0f16030815101112090d1b0a"
		const uintCvyEW0k = BigInt("1245")
		const addresscCxu25P = "0x0000000000000000000000000000000000000001"
		const uint256Qs7pTBl = await ReviveMrZU9jy.allowance.call(addressDLDTEr1, addressQ3aGeJZ, {from: accounts[2]});
		const boolKhxXhxa = await ReviveMrZU9jy.increaseAllowance.call(addressiWmPiV5, uintNMtxAbu, {from: accounts[5]});
		const boolEbeEuzE = await ReviveMrZU9jy.transferWithLock.call(addressemWosn, byteO4aTelf, uintrLBU091, uintyAp70oB, {from: accounts[0]});
		const boolDrvVhEz = await ReviveMrZU9jy.lock.call(byteNHii5Cu, uintRPpMJn, uintVJd5dbv, {from: accounts[0]});
		const boolJCW6TH7 = await ReviveMrZU9jy.approve.call(addresscCxu25P, uintCvyEW0k, {from: accounts[5]});

		assert.equal(boolDrvVhEz, true)
		assert.equal(boolEbeEuzE, true)
		assert.equal(boolJCW6TH7, true)
		assert.equal(boolKhxXhxa, true)
		assert.equal(uint256Qs7pTBl, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveMrZU9jy = await Revive.new({from: accounts[0]});
		const addressj98ZpO1 = accounts[1]
		const addressdvAJO16 = "0x0000000000000000000000000000000000000001"
		const uintkt1wgi = BigInt("636")
		const addresswJAl4cp = accounts[1]
		const byteIYJElK = "0x170d031a1403160d10050a180b1e191d011f130f181013040408050b1d161d14"
		const addressal3y91R = "0x0000000000000000000000000000000000000001"
		const addressBv5Lkx = accounts[1]
		const uint6WGN05 = BigInt("145")
		const uintphdEh3s = BigInt("2021")
		const byteR93g6P = "0x14201e010d040d0c1d120f1d1217161a171e101b0f16030815101112090d1b0a"
		const uintlzNBnPD = BigInt("1245")
		const addressAH8ftPE = "0x0000000000000000000000000000000000000001"
		const uint256Qs7pTBl = await ReviveMrZU9jy.allowance.call(addressdvAJO16, addressj98ZpO1, {from: accounts[2]});
		const boolKhxXhxa = await ReviveMrZU9jy.increaseAllowance.call(addresswJAl4cp, uintkt1wgi, {from: accounts[5]});
		const uint256oXHnmQI = await ReviveMrZU9jy.tokensLocked.call(addressal3y91R, byteIYJElK, {from: accounts[4]});
		const uint256J0Jchrk = await ReviveMrZU9jy.balanceOf.call(addressBv5Lkx, {from: accounts[0]});
		const boolDrvVhEz = await ReviveMrZU9jy.lock.call(byteR93g6P, uintphdEh3s, uint6WGN05, {from: accounts[0]});
		const boolJCW6TH7 = await ReviveMrZU9jy.approve.call(addressAH8ftPE, uintlzNBnPD, {from: accounts[5]});
		const boolqJPbP1s = await ReviveMrZU9jy.isOwner.call({from: accounts[2]});

		assert.equal(boolDrvVhEz, true)
		assert.equal(boolJCW6TH7, true)
		assert.equal(boolKhxXhxa, true)
		assert.equal(boolqJPbP1s, false)
		assert.equal(uint256J0Jchrk, BigInt("0"))
		assert.equal(uint256Qs7pTBl, BigInt("0"))
		assert.equal(uint256oXHnmQI, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveMrZU9jy = await Revive.new({from: accounts[0]});
		const addressIShiHaJ = accounts[0]
		const uinteQNYoxG = BigInt("1987")
		const addressXrQTAHo = accounts[4]
		const addressXsjMEr = accounts[1]
		const addressNLZ1evJ = accounts[1]
		const addressrdzUgEb = "0x0000000000000000000000000000000000000001"
		const addresskR9TLIN = accounts[2]
		const uintTFuhtZB = BigInt("638")
		const addressMYCerk5 = accounts[1]
		const uintqA4pUlh = BigInt("2004")
		const uintuNE6SnT = BigInt("792")
		const byteK4MkIfe = "0x0a0d0d1608080e120518171f031f1e1003051f06181a1c1207141304021e0803"
		const addressr5r7EWW = accounts[3]
		const uinthMfpgDK = BigInt("145")
		const uintaQA1AYh = BigInt("2021")
		const bytefmQYido = "0x14201e010d040d0c1d120f1d1217161a171e101b0f16030815101112090d1b0a"
		const uintYJdwctX = BigInt("1248")
		const addressY4Je2S0 = "0x0000000000000000000000000000000000000001"
		const uint2563zHLzC = await ReviveMrZU9jy.unlock.call(addressIShiHaJ, {from: accounts[0]});
//		const boolQNsThgW = await ReviveMrZU9jy.transferFrom.call(addressXsjMEr, addressXrQTAHo, uinteQNYoxG, {from: accounts[2]});
//		const uint256Qs7pTBl = await ReviveMrZU9jy.allowance.call(addressrdzUgEb, addressNLZ1evJ, {from: accounts[2]});
//		const uint256EV89zN = await ReviveMrZU9jy.unlock.call(addresskR9TLIN, {from: accounts[2]});
//		const boolKhxXhxa = await ReviveMrZU9jy.increaseAllowance.call(addressMYCerk5, uintTFuhtZB, {from: accounts[5]});
//		const boolEbeEuzE = await ReviveMrZU9jy.transferWithLock.call(addressr5r7EWW, byteK4MkIfe, uintuNE6SnT, uintqA4pUlh, {from: accounts[0]});
//		const boolDrvVhEz = await ReviveMrZU9jy.lock.call(bytefmQYido, uintaQA1AYh, uinthMfpgDK, {from: accounts[0]});
//		const boolJCW6TH7 = await ReviveMrZU9jy.approve.call(addressY4Je2S0, uintYJdwctX, {from: accounts[5]});

		assert.equal(uint2563zHLzC, BigInt("0"))
		await expect(ReviveMrZU9jy.transferFrom.call(addressXsjMEr, addressXrQTAHo, uinteQNYoxG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMrZU9jy = await Revive.new({from: accounts[0]});
		const addressQRZmuum = accounts[1]
		const addresst1Mk2Q = "0x0000000000000000000000000000000000000001"
		const uintxMifqk = BigInt("2012")
		const byteS43GHc3 = "0x140f13091f1e0c070b0b131f1c010a0b110c180807070800070b0e151d121910"
		const addressWiiwT9s = accounts[0]
		const uintWv5Mxp = BigInt("638")
		const addressIilUtCU = accounts[1]
		const uintpcRSZv = BigInt("145")
		const uintWVLAao0 = BigInt("2021")
		const bytelWtqJpX = "0x14201e010d040d0c1d120f1d1217161a171e101b0f16030815101112090d1b0a"
		const uintQAtm02V = BigInt("1245")
		const addressRFgDrkp = "0x0000000000000000000000000000000000000001"
		const uint256Qs7pTBl = await ReviveMrZU9jy.allowance.call(addresst1Mk2Q, addressQRZmuum, {from: accounts[2]});
		const uint256wJ6b25T = await ReviveMrZU9jy.tokensLockedAtTime.call(addressWiiwT9s, byteS43GHc3, uintxMifqk, {from: accounts[5]});
		const boolKhxXhxa = await ReviveMrZU9jy.increaseAllowance.call(addressIilUtCU, uintWv5Mxp, {from: accounts[5]});
		const boolDrvVhEz = await ReviveMrZU9jy.lock.call(bytelWtqJpX, uintWVLAao0, uintpcRSZv, {from: accounts[0]});
		const boolJCW6TH7 = await ReviveMrZU9jy.approve.call(addressRFgDrkp, uintQAtm02V, {from: accounts[5]});

		assert.equal(boolDrvVhEz, true)
		assert.equal(boolJCW6TH7, true)
		assert.equal(boolKhxXhxa, true)
		assert.equal(uint256Qs7pTBl, BigInt("0"))
		assert.equal(uint256wJ6b25T, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const addressz4kTvZK = accounts[3]
		const addresslqsP2yX = accounts[3]
		const addressF6AHzcJ = accounts[4]
		const uintRFz8g36 = BigInt("506")
		const uintRCKlGwo = BigInt("1356")
		const byteONP0YOG = "0x1e031519181f0a1e1e070c19011814041d12020104051d051b110e19071e1814"
		const addressu0mBsKg = accounts[1]
		const uint256a9zn7LK = await ReviveI5SZbol.allowance.call(addresslqsP2yX, addressz4kTvZK, {from: accounts[1]});
		const uint256bMyu9dS = await ReviveI5SZbol.totalBalanceOf.call(addressF6AHzcJ, {from: accounts[2]});
//		const booluIn9iKL = await ReviveI5SZbol.transferWithLock.call(addressu0mBsKg, byteONP0YOG, uintRCKlGwo, uintRFz8g36, {from: accounts[0]});

		assert.equal(uint256a9zn7LK, BigInt("0"))
		assert.equal(uint256bMyu9dS, BigInt("3000000000000000000000000000"))
		await expect(ReviveI5SZbol.transferWithLock.call(addressu0mBsKg, byteONP0YOG, uintRCKlGwo, uintRFz8g36, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMrZU9jy = await Revive.new({from: accounts[0]});
		const addressnEouK9T = accounts[1]
		const addressHCAXXy = "0x0000000000000000000000000000000000000001"
		const uintwCLTTek = BigInt("2012")
		const bytel5I166g = "0x140f13091f1e0c070b0b131f1c010a0b110c180807070800070b0e151d121910"
		const addressbsbx2pL = accounts[0]
		const uinthsNw7Tq = BigInt("638")
		const addressC564xPN = accounts[1]
		const uintuSfpujs = BigInt("145")
		const uintsuiypHK = BigInt("2021")
		const byteHAbpaqY = "0x14201e010d040d0c1d120f1d1217161a171e101b0f16030815101112090d1b0a"
		const uintcPSWDOy = BigInt("1933")
		const addressy29FN91 = accounts[3]
		const uintLfoHRo = BigInt("1434")
		const addressMCYrEC = accounts[2]
		const uinttbrW9N6 = BigInt("1245")
		const addressZ8j713 = "0x0000000000000000000000000000000000000001"
		const byteOtwkU5g = "0x0a181509180c06020c0c071f0314031e130d0f1307141d0815021f0d0c161a12"
		const addressypfKD0i = accounts[0]
		const uint256l4TxqfV = await ReviveMrZU9jy.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Qs7pTBl = await ReviveMrZU9jy.allowance.call(addressHCAXXy, addressnEouK9T, {from: accounts[2]});
		const uint256wJ6b25T = await ReviveMrZU9jy.tokensLockedAtTime.call(addressbsbx2pL, bytel5I166g, uintwCLTTek, {from: accounts[5]});
		const boolKhxXhxa = await ReviveMrZU9jy.increaseAllowance.call(addressC564xPN, uinthsNw7Tq, {from: accounts[5]});
		const boolDrvVhEz = await ReviveMrZU9jy.lock.call(byteHAbpaqY, uintsuiypHK, uintuSfpujs, {from: accounts[0]});
//		const boolR8cToCC = await ReviveMrZU9jy.decreaseAllowance.call(addressy29FN91, uintcPSWDOy, {from: accounts[0]});
//		const boolk5W3Pf6 = await ReviveMrZU9jy.approve.call(addressMCYrEC, uintLfoHRo, {from: accounts[1]});
//		const boolJCW6TH7 = await ReviveMrZU9jy.approve.call(addressZ8j713, uinttbrW9N6, {from: accounts[5]});
//		const uint256vDYxHvZ = await ReviveMrZU9jy.tokensUnlockable.call(addressypfKD0i, byteOtwkU5g, {from: accounts[5]});

		assert.equal(boolDrvVhEz, true)
		assert.equal(boolKhxXhxa, true)
		assert.equal(uint256Qs7pTBl, BigInt("0"))
		assert.equal(uint256l4TxqfV, BigInt("3000000000000000000000000000"))
		assert.equal(uint256wJ6b25T, BigInt("0"))
		await expect(ReviveMrZU9jy.decreaseAllowance.call(addressy29FN91, uintcPSWDOy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const addressw5cH1Tq = accounts[4]
		const addressdtIu77Y = accounts[3]
		const uintQzBw11z = BigInt("625")
		const byteSBuQLSW = "0x101b0517150c170409021a0e181b0b1f11180309200500050118100105111a08"
		const uint256n4RPQjW = await ReviveI5SZbol.unlock.call(addressw5cH1Tq, {from: accounts[0]});
		const uint256U3wtO5g = await ReviveI5SZbol.unlock.call(addressdtIu77Y, {from: accounts[5]});
//		await ReviveI5SZbol.renounceOwnership.call({from: accounts[4]});
//		const boolG7JEMa3 = await ReviveI5SZbol.increaseLockAmount.call(byteSBuQLSW, uintQzBw11z, {from: accounts[1]});
//		const uint256k64mPcA = await ReviveI5SZbol.totalSupply.call({from: accounts[0]});

		assert.equal(uint256U3wtO5g, BigInt("0"))
		assert.equal(uint256n4RPQjW, BigInt("0"))
		await expect(ReviveI5SZbol.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const byteMop1Wwf = "0x04141401070f0a000d110d1f0303101d19040f1e041c05010e0b031716101203"
		const addressv1koiFw = accounts[2]
		const uintw1T0utT = BigInt("1472")
		const byte4Agwyt = "0x1a1c1a061f150f1e1c20201f121409111f031b200d11120113020416030e1b04"
		const addressqN3PUgy = accounts[2]
		const addressfJfI5l2 = accounts[3]
		const uint256YR4wCY7 = await ReviveI5SZbol.tokensUnlockable.call(addressv1koiFw, byteMop1Wwf, {from: accounts[0]});
//		const boolzUaitN = await ReviveI5SZbol.extendLock.call(byte4Agwyt, uintw1T0utT, {from: accounts[4]});
//		const address6LXKiK = await ReviveI5SZbol.owner.call({from: accounts[2]});
//		const uint256a9zn7LK = await ReviveI5SZbol.allowance.call(addressfJfI5l2, addressqN3PUgy, {from: accounts[1]});

		assert.equal(uint256YR4wCY7, BigInt("0"))
		await expect(ReviveI5SZbol.extendLock.call(byte4Agwyt, uintw1T0utT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverU0EbYR = await Revive.new({from: accounts[5]});
		const bytewbLPuj1 = "0x1c1413020d021f021e1618140c0309061a1b110b15031c111518140a11101316"
		const addressEkaMWEz = accounts[2]
		const address8CREIt = accounts[3]
		const uinteleBWKW = BigInt("998")
		const uintQzD7yNl = BigInt("510")
		const bytemzU2ptf = "0x1f02011b0217140f110c0f0c12051f0c1f161a0315130c190e0c1e05021e151f"
		const uintQ5qoKrO = BigInt("1473")
		const byteF0CUi9 = "0x14131e1801081704180d0e0e1f1711130e131515030e140e1d09071218140402"
		const addresse41zI5N = accounts[4]
		const uintowti2Q = BigInt("1630")
		const addressPfQ5Nwr = accounts[2]
		const uint256lEyXxBO = await ReviverU0EbYR.tokensLocked.call(addressEkaMWEz, bytewbLPuj1, {from: accounts[1]});
		const addressdtC0eeZ = await ReviverU0EbYR.owner.call({from: accounts[3]});
//		const addresshVRqMIP = await ReviverU0EbYR.transferOwnership.call(address8CREIt, {from: accounts[3]});
//		const bool8RezOZ = await ReviverU0EbYR.lock.call(bytemzU2ptf, uintQzD7yNl, uinteleBWKW, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256LNWjdyL = await ReviverU0EbYR.tokensLockedAtTime.call(addresse41zI5N, byteF0CUi9, uintQ5qoKrO, {from: accounts[3]});
//		const addressiOUHdXc = await ReviverU0EbYR.recoverERC20.call(addressPfQ5Nwr, uintowti2Q, {from: accounts[4]});

		assert.equal(addressdtC0eeZ, 0x5E4D4d7c0D9eeb574f3156a0719b60411feDb904)
		assert.equal(uint256lEyXxBO, BigInt("0"))
		await expect(ReviverU0EbYR.transferOwnership.call(address8CREIt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const addressNKoMidY = accounts[3]
		const addressAw3vSow = accounts[3]
		const addressGF8lxG = accounts[4]
		const addressuw8uWDd = accounts[0]
		const uintbYDUExU = BigInt("1724")
		const uintTWrLMKh = BigInt("1272")
		const bytelS71D0 = "0x180c201b131e0f1f050612020c140b130401060b19101816070f141f05011103"
		const addresseQky4E9 = accounts[1]
		const bytekWkD8M7 = "0x1a0220171b0a13160c1b071f10160f1c0f1b08201d201d061c1a10180d061c1d"
		const addressnfXQ1CC = accounts[1]
		const uintj5QWONR = BigInt("835")
		const uintzXyzB4a = BigInt("1356")
		const byteGFkbRta = "0x1e031519181f0a1e1e070c19011814041d12020104051d051b110e19071e1814"
		const addresslzXsPFy = accounts[1]
		const uint256a9zn7LK = await ReviveI5SZbol.allowance.call(addressAw3vSow, addressNKoMidY, {from: accounts[1]});
		const uint256bMyu9dS = await ReviveI5SZbol.totalBalanceOf.call(addressGF8lxG, {from: accounts[2]});
		const addresssmHUJ78 = await ReviveI5SZbol.transferOwnership.call(addressuw8uWDd, {from: accounts[4]});
//		const boolCuapJnQ = await ReviveI5SZbol.transferWithLock.call(addresseQky4E9, bytelS71D0, uintTWrLMKh, uintbYDUExU, {from: accounts[2]});
//		const uint256tXDvPJo = await ReviveI5SZbol.tokensLocked.call(addressnfXQ1CC, bytekWkD8M7, {from: accounts[3]});
//		const booluIn9iKL = await ReviveI5SZbol.transferWithLock.call(addresslzXsPFy, byteGFkbRta, uintzXyzB4a, uintj5QWONR, {from: accounts[0]});

		assert.equal(uint256a9zn7LK, BigInt("0"))
		assert.equal(uint256bMyu9dS, BigInt("3000000000000000000000000000"))
		await expect(ReviveI5SZbol.transferWithLock.call(addresseQky4E9, bytelS71D0, uintTWrLMKh, uintbYDUExU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const addresscoDh7Oj = accounts[5]
		const addressdPEpoVW = accounts[2]
		const uintxqmcI7k = BigInt("1463")
		const uint256n4RPQjW = await ReviveI5SZbol.unlock.call(addresscoDh7Oj, {from: accounts[0]});
		const uint256C2WPYYJ = await ReviveI5SZbol.getUnlockableTokens.call(addressdPEpoVW, {from: accounts[5]});
//		const uint256obxpJbb = await ReviveI5SZbol.recoverERC20.call(uintxqmcI7k, {from: accounts[3]});
//		const boolOoHzytk = await ReviveI5SZbol.isOwner.call({from: accounts[4]});
//		const uint256k64mPcA = await ReviveI5SZbol.totalSupply.call({from: accounts[0]});

		assert.equal(uint256C2WPYYJ, BigInt("0"))
		assert.equal(uint256n4RPQjW, BigInt("0"))
		await expect(ReviveI5SZbol.recoverERC20.call(uintxqmcI7k, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivebO9pts1 = await Revive.new({from: accounts[2]});
		const uintdXGpjG6 = BigInt("1866")
		const uintzKqnjmZ = BigInt("666")
		const addressEOABIQ = accounts[4]
		const uinttQZw60a = BigInt("525")
		const addressYxoVdSa = accounts[4]
		const addressaS3P61 = accounts[1]
		const boolQTvvBwe = await RevivebO9pts1.isOwner.call({from: accounts[0]});
//		const uint256arTCPo = await RevivebO9pts1.recoverERC20.call(uintdXGpjG6, {from: accounts[3]});
//		const uint256v8mlK5c = await RevivebO9pts1.totalSupply.call({from: accounts[3]});
//		const boolOJLZRC7 = await RevivebO9pts1.decreaseAllowance.call(addressEOABIQ, uintzKqnjmZ, {from: accounts[1]});
//		const boolafFk1UH = await RevivebO9pts1.approve.call(addressYxoVdSa, uinttQZw60a, {from: accounts[0]});
//		const addressY8ZfCT6 = await RevivebO9pts1.transferOwnership.call(addressaS3P61, {from: accounts[1]});

		assert.equal(boolQTvvBwe, false)
		await expect(RevivebO9pts1.recoverERC20.call(uintdXGpjG6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivepkjdPAz = await Revive.new({from: accounts[5]});
		const byte2RqZfA = "0x191d040e18171e07191205070c0f1d0f06030c090c0d090412080f0315070f0d"
		const addressj08pTq = accounts[1]
		const uinteNHgVyZ = BigInt("480")
		const uint256dmGdAn = await RevivepkjdPAz.tokensUnlockable.call(addressj08pTq, byte2RqZfA, {from: accounts[3]});
//		const uint256n7lxBxD = await RevivepkjdPAz.recoverERC20.call(uinteNHgVyZ, {from: accounts[5]});

		assert.equal(uint256dmGdAn, BigInt("0"))
		await expect(RevivepkjdPAz.recoverERC20.call(uinteNHgVyZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const addressGptziBw = accounts[1]
		const uintiSAaF0N = BigInt("107")
		const bytepA4LIdZ = "0x131f171b0b180205110403141c010913041b1c0211041d02071719120c0e1a1d"
		const address2B4akg = accounts[5]
		const addressmFhni5z = accounts[2]
		const addressilSYRXR = accounts[3]
		const uintgOYvgWe = BigInt("586")
		const addressTXPKU3E = accounts[1]
		const uint256tmz9bq9 = await ReviveI5SZbol.getUnlockableTokens.call(addressGptziBw, {from: accounts[2]});
//		const uint256LMmDJG9 = await ReviveI5SZbol.recoverERC20.call(uintiSAaF0N, {from: accounts[4]});
//		const uint256KR9zKKl = await ReviveI5SZbol.tokensUnlockable.call(address2B4akg, bytepA4LIdZ, {from: accounts[2]});
//		const uint256a9zn7LK = await ReviveI5SZbol.allowance.call(addressilSYRXR, addressmFhni5z, {from: accounts[1]});
//		const boolbql3pWh = await ReviveI5SZbol.approve.call(addressTXPKU3E, uintgOYvgWe, {from: accounts[5]});

		assert.equal(uint256tmz9bq9, BigInt("0"))
		await expect(ReviveI5SZbol.recoverERC20.call(uintiSAaF0N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const addressAb84XCU = accounts[4]
		const addressu6aFzu = accounts[3]
		const uintwUKsHeo = BigInt("332")
		const addressPPLc6lA = accounts[0]
		const uint256a9zn7LK = await ReviveI5SZbol.allowance.call(addressu6aFzu, addressAb84XCU, {from: accounts[1]});
//		const addressc25aNVi = await ReviveI5SZbol.recoverERC20.call(addressPPLc6lA, uintwUKsHeo, {from: accounts[4]});

		assert.equal(uint256a9zn7LK, BigInt("0"))
		await expect(ReviveI5SZbol.recoverERC20.call(addressPPLc6lA, uintwUKsHeo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const uintwBVQbiy = BigInt("497")
		const uintO43nFqt = BigInt("331")
		const uintdNGFgoE = BigInt("1289")
		const byteFhiVdPn = "0x19030b1e0d15181f0804100713120e0c1c1a02171c02010f0b100c1e030c1c0d"
//		const uint256dw63Q1V = await ReviveI5SZbol.recoverERC20.call(uintwBVQbiy, {from: "0x0000000000000000000000000000000000000001"});
//		const boolvoUivZ4 = await ReviveI5SZbol.lock.call(byteFhiVdPn, uintdNGFgoE, uintO43nFqt, {from: accounts[2]});

		await expect(ReviveI5SZbol.recoverERC20.call(uintwBVQbiy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const addressDwOM41h = accounts[3]
		const addressnQDdLnx = accounts[3]
		const uintlG7JKVI = BigInt("1070")
		const uint256a9zn7LK = await ReviveI5SZbol.allowance.call(addressnQDdLnx, addressDwOM41h, {from: accounts[1]});
//		const uint256DjDSKg = await ReviveI5SZbol.recoverERC20.call(uintlG7JKVI, {from: accounts[3]});

		assert.equal(uint256a9zn7LK, BigInt("0"))
		await expect(ReviveI5SZbol.recoverERC20.call(uintlG7JKVI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const uintBHkc7sF = BigInt("1133")
		const addressRGURoWY = accounts[3]
		const addressN7B7Fwr = accounts[4]
		const uintiKoDlE6 = BigInt("192")
		const addressXWKG00J = accounts[0]
//		const uint256QcQeYOc = await ReviveI5SZbol.recoverERC20.call(uintBHkc7sF, {from: accounts[2]});
//		await ReviveI5SZbol.onlyOwner.call({from: accounts[1]});
//		const uint256a9zn7LK = await ReviveI5SZbol.allowance.call(addressN7B7Fwr, addressRGURoWY, {from: accounts[1]});
//		const addressd9M2BS0 = await ReviveI5SZbol.recoverERC20.call(addressXWKG00J, uintiKoDlE6, {from: accounts[0]});

		await expect(ReviveI5SZbol.recoverERC20.call(uintBHkc7sF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const uinthHttlZL = BigInt("2031")
		const uintmO6P9iT = BigInt("506")
		const uintW3BuDaD = BigInt("1323")
		const bytejUXBXAm = "0x1e031519181f0a1e1e070c19011814041d12020104051d051b110e19071e1814"
		const addresszhB8JFp = accounts[1]
//		const uint256RFzHBgx = await ReviveI5SZbol.recoverERC20.call(uinthHttlZL, {from: accounts[0]});
//		await ReviveI5SZbol.onlyOwner.call({from: accounts[2]});
//		const booluIn9iKL = await ReviveI5SZbol.transferWithLock.call(addresszhB8JFp, bytejUXBXAm, uintW3BuDaD, uintmO6P9iT, {from: accounts[0]});

		await expect(ReviveI5SZbol.recoverERC20.call(uinthHttlZL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const uintRkVVrv = BigInt("630")
		const uintsrZucpl = BigInt("396")
		const addressxYF2LtS = accounts[0]
		const byteiP4tHW = "0x061e1410091714111313151c0b091e0e0418050b021d1b0412070c0c1d1a0207"
		const addressEjvNIMl = accounts[1]
//		const uint256TqCavzk = await ReviveI5SZbol.recoverERC20.call(uintRkVVrv, {from: accounts[5]});
//		const boolcv3mnJW = await ReviveI5SZbol.decreaseAllowance.call(addressxYF2LtS, uintsrZucpl, {from: accounts[0]});
//		const uint256KkCgZzO = await ReviveI5SZbol.tokensUnlockable.call(addressEjvNIMl, byteiP4tHW, {from: accounts[1]});

		await expect(ReviveI5SZbol.recoverERC20.call(uintRkVVrv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const uintSCiznS = BigInt("724")
		const uintg1GCslZ = BigInt("506")
		const uintM5GuF0q = BigInt("1356")
		const byteTY2Gi1 = "0x1e031519181f0a1e1e070c19011814041d12020104051d051b110e19071e1814"
		const addressyPCgO5N = accounts[1]
//		const uint256QKXPHRs = await ReviveI5SZbol.recoverERC20.call(uintSCiznS, {from: accounts[3]});
//		await ReviveI5SZbol.renounceOwnership.call({from: accounts[3]});
//		const booluIn9iKL = await ReviveI5SZbol.transferWithLock.call(addressyPCgO5N, byteTY2Gi1, uintM5GuF0q, uintg1GCslZ, {from: accounts[0]});

		await expect(ReviveI5SZbol.recoverERC20.call(uintSCiznS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const uintH0erViK = BigInt("1872")
		const addressCtCgi9K = accounts[3]
		const uintYIN3dHy = BigInt("1520")
		const addressK0Cpgd0 = accounts[7]
		const boolLvftytB = await ReviveI5SZbol.increaseAllowance.call(addressCtCgi9K, uintH0erViK, {from: accounts[4]});
//		const uint256PTQtRYK = await ReviveI5SZbol.recoverERC20.call(uintYIN3dHy, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256n4RPQjW = await ReviveI5SZbol.unlock.call(addressK0Cpgd0, {from: accounts[0]});

		assert.equal(boolLvftytB, true)
		await expect(ReviveI5SZbol.recoverERC20.call(uintYIN3dHy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const uintmPnADzV = BigInt("105")
		const bytefXHlRws = "0x1b00080c171b0a201b11140b07161517110f13190212151e140f14101f0e061f"
		const addresskETpTyN = accounts[1]
		const uintvQ1iney = BigInt("1623")
		const byteUFVLlw = "0x12031d14180106200713130d1a180f1e090a0b1708071b120615091212060209"
		const addressKgPbFF2 = accounts[2]
		const uintPAHTCr = BigInt("1461")
		const uint256nzcfkt = await ReviveI5SZbol.tokensLockedAtTime.call(addresskETpTyN, bytefXHlRws, uintmPnADzV, {from: accounts[4]});
		const uint256BbBGoPu = await ReviveI5SZbol.tokensLockedAtTime.call(addressKgPbFF2, byteUFVLlw, uintvQ1iney, {from: accounts[1]});
//		const uint256VY3eVvS = await ReviveI5SZbol.recoverERC20.call(uintPAHTCr, {from: accounts[4]});

		assert.equal(uint256BbBGoPu, BigInt("0"))
		assert.equal(uint256nzcfkt, BigInt("0"))
		await expect(ReviveI5SZbol.recoverERC20.call(uintPAHTCr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const uintCBECSh4 = BigInt("506")
		const uintMkvIOUJ = BigInt("1356")
		const byteJXAH83m = "0x1e031519181f0a1e1e070c19011814041d12fffffffe0104051d051b110e19071e1814"
		const addressblDcgU = accounts[1]
		const uintTtQ000P = BigInt("623")
		const addressYp11vNe = accounts[3]
		const addressp6NSYSU = accounts[3]
//		const booluIn9iKL = await ReviveI5SZbol.transferWithLock.call(addressblDcgU, byteJXAH83m, uintMkvIOUJ, uintCBECSh4, {from: accounts[0]});
//		const boolsvXEMRy = await ReviveI5SZbol.transferFrom.call(addressp6NSYSU, addressYp11vNe, uintTtQ000P, {from: accounts[3]});

		await expect(ReviveI5SZbol.transferWithLock.call(addressblDcgU, byteJXAH83m, uintMkvIOUJ, uintCBECSh4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const uintDmqy3Fx = BigInt("1678")
		const uinta8YMha1 = BigInt("506")
		const uintrwaLe9B = BigInt("1376")
		const byteRtE9ffv = "0x1e031519181f0a1e1e070c19011814041d12020104051d051b110e19071e1814"
		const addressgXqugB3 = accounts[1]
		const byteJuIshfe = "0x10010b0503021c14052008131c11190d1c07011614101e13061c171d1d07090d"
		const addresslwMfhm = accounts[3]
//		const uint256dvwWcRd = await ReviveI5SZbol.recoverERC20.call(uintDmqy3Fx, {from: accounts[1]});
//		const booluIn9iKL = await ReviveI5SZbol.transferWithLock.call(addressgXqugB3, byteRtE9ffv, uintrwaLe9B, uinta8YMha1, {from: accounts[0]});
//		const uint256lDiOaWy = await ReviveI5SZbol.tokensUnlockable.call(addresslwMfhm, byteJuIshfe, {from: accounts[3]});

		await expect(ReviveI5SZbol.recoverERC20.call(uintDmqy3Fx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHxqxHLD = await Revive.new({from: accounts[1]});
		const uintc0ZKWf3 = BigInt("1351")
		const uintxXnC427 = BigInt("1292")
		const uintTdWizjI = BigInt("843")
		const byteuV4v2f4 = "0x0e020403061b111907060c0d030503140d101d071a191a091a04021c180c1508"
		const addressXydLs3T = accounts[0]
		const uint6YnvBi = BigInt("1611")
		const addressG84F8KA = accounts[0]
		const uintQ42m4W8 = BigInt("528")
		const addressnwjQ7Fn = accounts[2]
		const uintQKgB8aj = BigInt("1545")
		const addressG1JoPTt = accounts[2]
//		const uint256mIo3Nxr = await ReviveHxqxHLD.recoverERC20.call(uintc0ZKWf3, {from: accounts[0]});
//		const boolwFeJ4nx = await ReviveHxqxHLD.transferWithLock.call(addressXydLs3T, byteuV4v2f4, uintTdWizjI, uintxXnC427, {from: accounts[4]});
//		const boolHz9o6dr = await ReviveHxqxHLD.transfer.call(addressG84F8KA, uint6YnvBi, {from: accounts[3]});
//		const booltV6NQ0e = await ReviveHxqxHLD.decreaseAllowance.call(addressnwjQ7Fn, uintQ42m4W8, {from: accounts[3]});
//		const boolTPQu93g = await ReviveHxqxHLD.transfer.call(addressG1JoPTt, uintQKgB8aj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveHxqxHLD.recoverERC20.call(uintc0ZKWf3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const addressuhVoVSm = accounts[7]
		const uintzU6k5K = BigInt("524")
		const addressxOJqWc = accounts[2]
		const uint256n4RPQjW = await ReviveI5SZbol.unlock.call(addressuhVoVSm, {from: accounts[0]});
//		const uint256y0RdfKp = await ReviveI5SZbol.recoverERC20.call(uintzU6k5K, {from: accounts[0]});
//		const uint256ERi6Qsk = await ReviveI5SZbol.getUnlockableTokens.call(addressxOJqWc, {from: accounts[0]});

		assert.equal(uint256n4RPQjW, BigInt("0"))
		await expect(ReviveI5SZbol.recoverERC20.call(uintzU6k5K, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivenp5v531 = await Revive.new({from: accounts[4]});
		const uinteJ7FiSH = BigInt("937")
		const addressZYEU8Y = accounts[0]
		const addressOu8hgTA = accounts[0]
		const uintfOpMv5G = BigInt("345")
		const boolFbQTZNk = await Revivenp5v531.approve.call(addressZYEU8Y, uinteJ7FiSH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vE3aJeh = await Revivenp5v531.balanceOf.call(addressOu8hgTA, {from: accounts[1]});
//		const uint256m9Lpivc = await Revivenp5v531.recoverERC20.call(uintfOpMv5G, {from: accounts[2]});

		assert.equal(boolFbQTZNk, true)
		assert.equal(uint256vE3aJeh, BigInt("0"))
		await expect(Revivenp5v531.recoverERC20.call(uintfOpMv5G, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const uintJwM6iSW = BigInt("1171")
		const uintx3yBJj = BigInt("1770")
		const byteHIyBME = "0x1b0b0503061d0b19191818010f1a01130a0e1b1a14201d151d1c0a0d03100e15"
		const uintWyNhObA = BigInt("122")
		const uintD4aqvre = BigInt("54")
		const byteashcm5q = "0x1b00080c171b0a201b11140b07161517110f13190212151e140f14101f0e061f"
		const addressCw2ncG = accounts[2]
		const boolc2XZnu8 = await ReviveI5SZbol.lock.call(byteHIyBME, uintx3yBJj, uintJwM6iSW, {from: accounts[4]});
//		const uint256uCjuP7e = await ReviveI5SZbol.recoverERC20.call(uintWyNhObA, {from: accounts[4]});
//		const uint256nzcfkt = await ReviveI5SZbol.tokensLockedAtTime.call(addressCw2ncG, byteashcm5q, uintD4aqvre, {from: accounts[4]});

		assert.equal(boolc2XZnu8, true)
		await expect(ReviveI5SZbol.recoverERC20.call(uintWyNhObA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5SZbol = await Revive.new({from: accounts[4]});
		const uintQ4eo8zH = BigInt("499")
		const addresscVziPdQ = accounts[2]
		const uint6UyA6q = BigInt("1700")
//		const uint25613Fzid = await ReviveI5SZbol.recoverERC20.call(uintQ4eo8zH, {from: accounts[4]});
//		const uint256tmz9bq9 = await ReviveI5SZbol.getUnlockableTokens.call(addresscVziPdQ, {from: accounts[2]});
//		const uint256D76rKu = await ReviveI5SZbol.recoverERC20.call(uint6UyA6q, {from: accounts[0]});

		await expect(ReviveI5SZbol.recoverERC20.call(uintQ4eo8zH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})