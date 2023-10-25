const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveLmocXOV = await Revive.new({from: accounts[0]});
		const byteWrLTXoF = "0x03201d1611081405171e01100d150b12091619021c141f0319020f06190e091c"
		const addressU4EUUt = accounts[0]
		const uintRVHwkFl = BigInt("1860")
		const addressuwC9jkC = accounts[5]
		const uint256Oul848M = await ReviveLmocXOV.tokensUnlockable.call(addressU4EUUt, byteWrLTXoF, {from: accounts[4]});
		const boolF6wnJeF = await ReviveLmocXOV.approve.call(addressuwC9jkC, uintRVHwkFl, {from: accounts[2]});
		const boolh5IMLM = await ReviveLmocXOV.isOwner.call({from: accounts[1]});

		assert.equal(boolF6wnJeF, true)
		assert.equal(boolh5IMLM, false)
		assert.equal(uint256Oul848M, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveYxStl8 = await Revive.new({from: accounts[2]});
		const uintxrl6xR = BigInt("2026")
		const byteM87YnlY = "0x0c180913041b1c0a151209190703041a1c06051b051910010d1102170d191101"
		const uintsOUjGqz = BigInt("1373")
		const addressS9D4h2u = accounts[1]
		const uintrz1psAS = BigInt("571")
		const addressMudLHRO = accounts[0]
		const uintTbOlWzv = BigInt("371")
		const addressqU3geLg = accounts[1]
//		const boolPbYtjpg = await ReviveYxStl8.extendLock.call(byteM87YnlY, uintxrl6xR, {from: accounts[4]});
//		const boolDiCaj30 = await ReviveYxStl8.decreaseAllowance.call(addressS9D4h2u, uintsOUjGqz, {from: accounts[1]});
//		const addressdTtO1kv = await ReviveYxStl8.recoverERC20.call(addressMudLHRO, uintrz1psAS, {from: accounts[3]});
//		const boolaqEHY6z = await ReviveYxStl8.isOwner.call({from: accounts[2]});
//		const addresscNQS79 = await ReviveYxStl8.recoverERC20.call(addressqU3geLg, uintTbOlWzv, {from: accounts[2]});

		await expect(ReviveYxStl8.extendLock.call(byteM87YnlY, uintxrl6xR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveIUNhCu = await Revive.new({from: accounts[5]});
		const uintTV585V7 = BigInt("1943")
		const addressBDlCPDn = accounts[2]
		const uintdltW4t = BigInt("867")
		const byteGY2drrM = "0x0914121611010c061a07031b1904091a0a20170b161f0f0e060b1e17131c1c07"
		const boolSieUKY = await ReviveIUNhCu.approve.call(addressBDlCPDn, uintTV585V7, {from: accounts[5]});
		const addressIuXYibx = await ReviveIUNhCu.owner.call({from: accounts[3]});
//		const boolbVBFoeq = await ReviveIUNhCu.extendLock.call(byteGY2drrM, uintdltW4t, {from: accounts[1]});

		assert.equal(addressIuXYibx, 0x4441F9977595f7BED2Da53B2B4eCC46162d17e28)
		assert.equal(boolSieUKY, true)
		await expect(ReviveIUNhCu.extendLock.call(byteGY2drrM, uintdltW4t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivey4TE0U2 = await Revive.new({from: accounts[4]});
		const uintLYd5lC = BigInt("1987")
		const addressLd5Nqm = accounts[4]
		const addressTVbj5cb = accounts[5]
		const uint4keNtt = BigInt("103")
		const addresscC8W2Rp = accounts[0]
//		const uint256Rfv0Fi7 = await Revivey4TE0U2.recoverERC20.call(uintLYd5lC, {from: accounts[1]});
//		const uint256oiSMbuz = await Revivey4TE0U2.allowance.call(addressTVbj5cb, addressLd5Nqm, {from: accounts[1]});
//		const boolpKHfwP = await Revivey4TE0U2.transfer.call(addresscC8W2Rp, uint4keNtt, {from: accounts[1]});

		await expect(Revivey4TE0U2.recoverERC20.call(uintLYd5lC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMi770o = await Revive.new({from: accounts[3]});
		const uintnPaLJHN = BigInt("700")
		const addressmCx3NJ = accounts[0]
		const addressSQ2Enm = accounts[3]
		const uintZPJ4PMZ = BigInt("1257")
		const addressnfnMwXJ = accounts[4]
		const byteLRRJBqm = "0x021808091307051813060413031b0e1513180d1202181a04051a03020e031717"
		const addressan9tmn6 = accounts[3]
		const uintNHz719D = BigInt("880")
		const addresszHBD0fl = accounts[4]
//		const boolT5bY6aF = await ReviveMi770o.transferFrom.call(addressSQ2Enm, addressmCx3NJ, uintnPaLJHN, {from: accounts[3]});
//		const boolwVgxbd = await ReviveMi770o.approve.call(addressnfnMwXJ, uintZPJ4PMZ, {from: accounts[3]});
//		const uint256nlOWdfd = await ReviveMi770o.tokensLocked.call(addressan9tmn6, byteLRRJBqm, {from: accounts[1]});
//		const boolt8Jcyo = await ReviveMi770o.decreaseAllowance.call(addresszHBD0fl, uintNHz719D, {from: accounts[4]});

		await expect(ReviveMi770o.transferFrom.call(addressSQ2Enm, addressmCx3NJ, uintnPaLJHN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHlkrnB7 = await Revive.new({from: accounts[4]});
		const addressHVBPbv = accounts[0]
		const uintSZvo95z = BigInt("99")
		const addressomNNqpS = accounts[1]
		const uint256qmokqCy = await ReviveHlkrnB7.totalSupply.call({from: accounts[3]});
		const uint256ZGyxZn = await ReviveHlkrnB7.balanceOf.call(addressHVBPbv, {from: accounts[0]});
		const boolZz0nr6 = await ReviveHlkrnB7.approve.call(addressomNNqpS, uintSZvo95z, {from: accounts[3]});

		assert.equal(boolZz0nr6, true)
		assert.equal(uint256ZGyxZn, BigInt("0"))
		assert.equal(uint256qmokqCy, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const ReviveOsSdtC6 = await Revive.new({from: accounts[3]});
		const uintpH3HKC = BigInt("449")
		const addressPrYr6kG = accounts[2]
		const uintQFtXHps = BigInt("982")
		const addresst1Y4LDc = accounts[2]
//		const boolArusfi6 = await ReviveOsSdtC6.decreaseAllowance.call(addressPrYr6kG, uintpH3HKC, {from: accounts[0]});
//		const boolgFBAbwP = await ReviveOsSdtC6.transfer.call(addresst1Y4LDc, uintQFtXHps, {from: accounts[1]});

		await expect(ReviveOsSdtC6.decreaseAllowance.call(addressPrYr6kG, uintpH3HKC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveh87Mmu5 = await Revive.new({from: accounts[0]});
		const addressbSLLFOH = accounts[2]
		const addresszvboD3l = accounts[0]
		const uintBvnb6Cl = BigInt("1298")
		const addressp8E1Gw2 = accounts[0]
		const addressHHMX2Lj = accounts[2]
		const uintQffw9Q = BigInt("842")
		const addressJx8T1b3 = accounts[3]
		const addressYuCvnWT = accounts[2]
		const uint256qxUpJg3 = await Reviveh87Mmu5.totalBalanceOf.call(addressbSLLFOH, {from: accounts[3]});
		const uint256tfKgDV5 = await Reviveh87Mmu5.totalBalanceOf.call(addresszvboD3l, {from: accounts[3]});
//		const bool5FWJFt = await Reviveh87Mmu5.transferFrom.call(addressHHMX2Lj, addressp8E1Gw2, uintBvnb6Cl, {from: accounts[4]});
//		const boolhvL4x0 = await Reviveh87Mmu5.transfer.call(addressJx8T1b3, uintQffw9Q, {from: accounts[0]});
//		const uint256t2wdevE = await Reviveh87Mmu5.totalBalanceOf.call(addressYuCvnWT, {from: accounts[5]});

		assert.equal(uint256qxUpJg3, BigInt("0"))
		assert.equal(uint256tfKgDV5, BigInt("3000000000000000000000000000"))
		await expect(Reviveh87Mmu5.transferFrom.call(addressHHMX2Lj, addressp8E1Gw2, uintBvnb6Cl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOsSdtC6 = await Revive.new({from: accounts[3]});
		const uintSe6Kjk = BigInt("982")
		const addresswIzIOjZ = accounts[3]
//		const boolgFBAbwP = await ReviveOsSdtC6.transfer.call(addresswIzIOjZ, uintSe6Kjk, {from: accounts[1]});

		await expect(ReviveOsSdtC6.transfer.call(addresswIzIOjZ, uintSe6Kjk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveAcNLmDC = await Revive.new({from: accounts[2]});
		const addressVqVlmdp = accounts[3]
		const uintYX8QHDv = BigInt("1441")
		const addressh5xv6mb = accounts[2]
		const uintudWjzVx = BigInt("1658")
		const addressY19f3V = accounts[2]
		const uint256X6R9HkK = await ReviveAcNLmDC.getUnlockableTokens.call(addressVqVlmdp, {from: accounts[0]});
		const addressUCFwXoO = await ReviveAcNLmDC.owner.call({from: accounts[3]});
		const boolAM3P0aw = await ReviveAcNLmDC.increaseAllowance.call(addressh5xv6mb, uintYX8QHDv, {from: accounts[2]});
//		const addresswKt8bU = await ReviveAcNLmDC.recoverERC20.call(addressY19f3V, uintudWjzVx, {from: accounts[2]});

		assert.equal(addressUCFwXoO, 0x0FAC55a30e504133db187D0fD5640eb6b08Ba7F7)
		assert.equal(boolAM3P0aw, true)
		assert.equal(uint256X6R9HkK, BigInt("0"))
		await expect(ReviveAcNLmDC.recoverERC20.call(addressY19f3V, uintudWjzVx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveh87Mmu5 = await Revive.new({from: accounts[0]});
		const addressqYNmYH = accounts[4]
		const uintuyC0yIG = BigInt("1302")
		const uintMvNKG39 = BigInt("1025")
		const bytelr9rPLP = "0x141514121013031901181b2015061a121017191007130f0e1e061706070d1117"
		const addressr9U7do = accounts[2]
		const addressGkkP00B = accounts[0]
		const uintJEnMFHm = BigInt("1298")
		const addressyLuoVZO = accounts[0]
		const addressaWJkcG = accounts[2]
		const addresspG30UeZ = accounts[2]
		const uint256IkSuTC = await Reviveh87Mmu5.balanceOf.call(addressqYNmYH, {from: accounts[2]});
//		const boolA3A5deC = await Reviveh87Mmu5.lock.call(bytelr9rPLP, uintMvNKG39, uintuyC0yIG, {from: accounts[2]});
//		const uint256qxUpJg3 = await Reviveh87Mmu5.totalBalanceOf.call(addressr9U7do, {from: accounts[3]});
//		await Reviveh87Mmu5.renounceOwnership.call({from: accounts[4]});
//		const uint256tfKgDV5 = await Reviveh87Mmu5.totalBalanceOf.call(addressGkkP00B, {from: accounts[3]});
//		const bool5FWJFt = await Reviveh87Mmu5.transferFrom.call(addressaWJkcG, addressyLuoVZO, uintJEnMFHm, {from: accounts[4]});
//		const uint256t2wdevE = await Reviveh87Mmu5.totalBalanceOf.call(addresspG30UeZ, {from: accounts[5]});

		assert.equal(uint256IkSuTC, BigInt("0"))
		await expect(Reviveh87Mmu5.lock.call(bytelr9rPLP, uintMvNKG39, uintuyC0yIG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveAcNLmDC = await Revive.new({from: accounts[2]});
		const addresszJOcHMm = accounts[3]
		const uintuXDHnOf = BigInt("1268")
		const uintNRZ4nuy = BigInt("1643")
		const bytenx7lbTJ = "0x1f070d0f09160c19040b201f19010d1203140f1403180606051b1617070d1e1c"
		const addresshXuDqYq = accounts[3]
		const uintSOPlt0p = BigInt("1441")
		const addressQQtV3i = accounts[2]
		const uintBIdr6E = BigInt("1658")
		const addressLfxsjT7 = accounts[2]
		const uint256X6R9HkK = await ReviveAcNLmDC.getUnlockableTokens.call(addresszJOcHMm, {from: accounts[0]});
//		const boolWFurcGy = await ReviveAcNLmDC.transferWithLock.call(addresshXuDqYq, bytenx7lbTJ, uintNRZ4nuy, uintuXDHnOf, {from: accounts[0]});
//		const addressUCFwXoO = await ReviveAcNLmDC.owner.call({from: accounts[3]});
//		const boolAM3P0aw = await ReviveAcNLmDC.increaseAllowance.call(addressQQtV3i, uintSOPlt0p, {from: accounts[2]});
//		const addresswKt8bU = await ReviveAcNLmDC.recoverERC20.call(addressLfxsjT7, uintBIdr6E, {from: accounts[2]});

		assert.equal(uint256X6R9HkK, BigInt("0"))
		await expect(ReviveAcNLmDC.transferWithLock.call(addresshXuDqYq, bytenx7lbTJ, uintNRZ4nuy, uintuXDHnOf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveAcNLmDC = await Revive.new({from: accounts[2]});
		const addresssiRzDU = accounts[3]
		const uintoIDXQmF = BigInt("1658")
		const addressvEuUoz2 = accounts[2]
		const uint256X6R9HkK = await ReviveAcNLmDC.getUnlockableTokens.call(addresssiRzDU, {from: accounts[0]});
//		await ReviveAcNLmDC.renounceOwnership.call({from: accounts[2]});
//		const addresswKt8bU = await ReviveAcNLmDC.recoverERC20.call(addressvEuUoz2, uintoIDXQmF, {from: accounts[2]});

		assert.equal(uint256X6R9HkK, BigInt("0"))
		await expect(ReviveAcNLmDC.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveh87Mmu5 = await Revive.new({from: accounts[0]});
		const addressnp9LB0s = accounts[4]
		const uint3LYfBz = BigInt("1260")
		const byteqZx4dV = "0x0e00161c081d0c0f0b0c1e010f0f040d0600050c17040614000a181c040b071d"
		const addressBcUUM70 = accounts[4]
		const uintIelENvq = BigInt("1302")
		const uintfvBcALL = BigInt("1025")
		const byteA9L9sCP = "0x141514121013031901181b2015061a121017191007130f0e1e061706070d1117"
		const addressnv6pT6Q = accounts[2]
		const addresstGauuah = accounts[0]
		const uintx0d2OEx = BigInt("1298")
		const addressxxaRyvX = accounts[0]
		const addressV3WqO7g = accounts[2]
		const byteAxyj7Xe = "0x0e170f001b1108000c0f11010e10160f1f0304061b061c141c190f0309101a16"
		const address9f2pjC = accounts[0]
		const addressiZ5Wwqv = accounts[2]
		const uint256IkSuTC = await Reviveh87Mmu5.balanceOf.call(addressnp9LB0s, {from: accounts[2]});
		const uint256cTUshFH = await Reviveh87Mmu5.tokensLockedAtTime.call(addressBcUUM70, byteqZx4dV, uint3LYfBz, {from: accounts[0]});
//		const boolA3A5deC = await Reviveh87Mmu5.lock.call(byteA9L9sCP, uintfvBcALL, uintIelENvq, {from: accounts[2]});
//		const uint256qxUpJg3 = await Reviveh87Mmu5.totalBalanceOf.call(addressnv6pT6Q, {from: accounts[3]});
//		await Reviveh87Mmu5.renounceOwnership.call({from: accounts[4]});
//		const uint256tfKgDV5 = await Reviveh87Mmu5.totalBalanceOf.call(addresstGauuah, {from: accounts[3]});
//		const bool5FWJFt = await Reviveh87Mmu5.transferFrom.call(addressV3WqO7g, addressxxaRyvX, uintx0d2OEx, {from: accounts[4]});
//		const uint256sAptVN = await Reviveh87Mmu5.tokensLocked.call(address9f2pjC, byteAxyj7Xe, {from: accounts[3]});
//		const uint256t2wdevE = await Reviveh87Mmu5.totalBalanceOf.call(addressiZ5Wwqv, {from: accounts[5]});

		assert.equal(uint256IkSuTC, BigInt("0"))
		assert.equal(uint256cTUshFH, BigInt("0"))
		await expect(Reviveh87Mmu5.lock.call(byteA9L9sCP, uintfvBcALL, uintIelENvq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivedl04S38 = await Revive.new({from: accounts[3]});
		const addressvyJFbIm = accounts[1]
		const uintzCYLDR8 = BigInt("904")
		const uintT9ckYpU = BigInt("403")
		const bytes01UMra = "0x171e0e0515151f131a0f17191e03031c051c1711081a0b1d08010f1810011417"
		const addressfDWUo4D = accounts[4]
		const uintRsGyEKj = BigInt("868")
		const addresssw90ukq = accounts[1]
		const uintxl8wsFo = BigInt("2000")
		const uintocLEWq4 = BigInt("1464")
		const byteSQUrfDQ = "0x0c1f0315061d0410071a07050101040f1311080308010c161a190c07150d1a14"
		const addressedVzqgH = accounts[1]
		const uint256InyWAHu = await Revivedl04S38.totalBalanceOf.call(addressvyJFbIm, {from: "0x0000000000000000000000000000000000000001"});
//		await Revivedl04S38.onlyOwner.call({from: accounts[4]});
//		const booll90iGMj = await Revivedl04S38.transferWithLock.call(addressfDWUo4D, bytes01UMra, uintT9ckYpU, uintzCYLDR8, {from: accounts[3]});
//		const boolIHk5VTz = await Revivedl04S38.decreaseAllowance.call(addresssw90ukq, uintRsGyEKj, {from: accounts[0]});
//		const boolDcrGCHW = await Revivedl04S38.transferWithLock.call(addressedVzqgH, byteSQUrfDQ, uintocLEWq4, uintxl8wsFo, {from: accounts[3]});

		assert.equal(uint256InyWAHu, BigInt("0"))
		await expect(Revivedl04S38.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivegdONwHQ = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKhK1Ca = accounts[3]
		const uinttr05gKm = BigInt("830")
		const uintooqlgpE = BigInt("1396")
		const byteF8FyQB0 = "0x07100e19181b141e05151e0d171f1518061f1f1a1710050f0b1f0a200c041006"
		const uint256Bx42UGY = await RevivegdONwHQ.balanceOf.call(addressKhK1Ca, {from: accounts[4]});
		const boollR1Dmvf = await RevivegdONwHQ.isOwner.call({from: accounts[4]});
		const addressM3uR0w = await RevivegdONwHQ.owner.call({from: accounts[1]});
		const booldXpl7JI = await RevivegdONwHQ.lock.call(byteF8FyQB0, uintooqlgpE, uinttr05gKm, {from: accounts[3]});
		await RevivegdONwHQ.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Revive', async () => {
		const Reviveh87Mmu5 = await Revive.new({from: accounts[0]});
		const uintorQGt7r = BigInt("966")
		const addressXnH4OFq = accounts[4]
		const uintqQDMIH7 = BigInt("1302")
		const uintSkzPIw7 = BigInt("1025")
		const bytefKmO28m = "0x141514121013031901181b2015061a121017191007130f0e1e061706070d1117"
		const addressFcuL2HQ = accounts[3]
		const addressv1JblNJ = accounts[2]
		const uintU6VbmYy = BigInt("1298")
		const addressqpWSgy = accounts[0]
		const addressVypW0t = accounts[2]
		const addressBGtGtxG = accounts[2]
//		const uint256iPlgQ3R = await Reviveh87Mmu5.recoverERC20.call(uintorQGt7r, {from: accounts[5]});
//		const uint256IkSuTC = await Reviveh87Mmu5.balanceOf.call(addressXnH4OFq, {from: accounts[2]});
//		const boolA3A5deC = await Reviveh87Mmu5.lock.call(bytefKmO28m, uintSkzPIw7, uintqQDMIH7, {from: accounts[2]});
//		const uint256zo54hGL = await Reviveh87Mmu5.totalBalanceOf.call(addressFcuL2HQ, {from: accounts[0]});
//		const uint256qxUpJg3 = await Reviveh87Mmu5.totalBalanceOf.call(addressv1JblNJ, {from: accounts[3]});
//		await Reviveh87Mmu5.renounceOwnership.call({from: accounts[4]});
//		const bool5FWJFt = await Reviveh87Mmu5.transferFrom.call(addressVypW0t, addressqpWSgy, uintU6VbmYy, {from: accounts[4]});
//		const uint256t2wdevE = await Reviveh87Mmu5.totalBalanceOf.call(addressBGtGtxG, {from: accounts[5]});

		await expect(Reviveh87Mmu5.recoverERC20.call(uintorQGt7r, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOsSdtC6 = await Revive.new({from: accounts[3]});
		const uintnyoTjwA = BigInt("1940")
		const byteexyHm7 = "0x16051e0e021e05170e110a1c1f1a0e00021814190306121d140a181b1716131a"
		const uintqW5WD1x = BigInt("449")
		const addressL7Ng5vV = accounts[2]
		const addressGWTtTr0 = accounts[2]
//		const boolmWmerw = await ReviveOsSdtC6.increaseLockAmount.call(byteexyHm7, uintnyoTjwA, {from: accounts[4]});
//		const boolArusfi6 = await ReviveOsSdtC6.decreaseAllowance.call(addressL7Ng5vV, uintqW5WD1x, {from: accounts[0]});
//		const addressvcEVUrk = await ReviveOsSdtC6.transferOwnership.call(addressGWTtTr0, {from: accounts[3]});

		await expect(ReviveOsSdtC6.increaseLockAmount.call(byteexyHm7, uintnyoTjwA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive2wmZCB = await Revive.new({from: accounts[1]});
		const uintEtr4GJt = BigInt("1729")
		const uintJA6aqtn = BigInt("642")
		const uintYH9bUgH = BigInt("1771")
		const byteM5Hhni2 = "0x1a090010030f1f1a061e06170412081c1d141b0b0c0a0812091a071a0e1b1f0a"
		const addressHS921bl = accounts[4]
		const bytejEVuK0F = "0x04031e1d15150f1f1b0c10101d05180b041401040a1320200618150e081c0517"
		const addressHnpNmuT = accounts[6]
		const uintL1pfXI = BigInt("361")
		const uintUZBTwOR = BigInt("1015")
		const byteAtO9Cwx = "0x1f050c151d070d1d1b04170e0305081717120b0a1803081717070b1f14081104"
		const addressUAVWiIp = accounts[1]
		const addressU3uIcq = accounts[0]
//		const uint256nxiHOcK = await Revive2wmZCB.recoverERC20.call(uintEtr4GJt, {from: accounts[2]});
//		const boolrT746Vl = await Revive2wmZCB.transferWithLock.call(addressHS921bl, byteM5Hhni2, uintYH9bUgH, uintJA6aqtn, {from: accounts[2]});
//		const boolevlmuVA = await Revive2wmZCB.isOwner.call({from: accounts[4]});
//		const uint256xr5wLzZ = await Revive2wmZCB.tokensLocked.call(addressHnpNmuT, bytejEVuK0F, {from: accounts[0]});
//		const boolD2MrEiE = await Revive2wmZCB.transferWithLock.call(addressUAVWiIp, byteAtO9Cwx, uintUZBTwOR, uintL1pfXI, {from: accounts[0]});
//		const uint256yKgkfG = await Revive2wmZCB.unlock.call(addressU3uIcq, {from: accounts[4]});

		await expect(Revive2wmZCB.recoverERC20.call(uintEtr4GJt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveA6Q8LNZ = await Revive.new({from: accounts[3]});
		const addressm20cWFK = accounts[3]
		const uintLjJlZxR = BigInt("963")
		const uintnvkcAMv = BigInt("1452")
		const byteI8hfm8e = "0x171a0e110c0619001f17040d05040518120d1e110a181f131c0b01121707151c"
		const addressBJt5jA8 = accounts[1]
		const addressb4xcvHH = accounts[0]
		const uint256mW0AzQf = await ReviveA6Q8LNZ.unlock.call(addressm20cWFK, {from: accounts[5]});
//		const boolUHcqvMt = await ReviveA6Q8LNZ.transferWithLock.call(addressBJt5jA8, byteI8hfm8e, uintnvkcAMv, uintLjJlZxR, {from: accounts[4]});
//		await ReviveA6Q8LNZ.onlyOwner.call({from: accounts[5]});
//		const boolWsBmhmR = await ReviveA6Q8LNZ.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256jXYLx5X = await ReviveA6Q8LNZ.getUnlockableTokens.call(addressb4xcvHH, {from: accounts[3]});

		assert.equal(uint256mW0AzQf, BigInt("0"))
		await expect(ReviveA6Q8LNZ.transferWithLock.call(addressBJt5jA8, byteI8hfm8e, uintnvkcAMv, uintLjJlZxR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveAcNLmDC = await Revive.new({from: accounts[2]});
		const addressuZs1dCW = accounts[4]
		const addressojJ2RQx = "0x0000000000000000000000000000000000000001"
		const addressRZOe3gG = accounts[3]
		const uintqOhwNqm = BigInt("1658")
		const addresszPBYRck = accounts[2]
		const uint256X6R9HkK = await ReviveAcNLmDC.getUnlockableTokens.call(addressuZs1dCW, {from: accounts[0]});
		const uint256gz3P6U = await ReviveAcNLmDC.allowance.call(addressRZOe3gG, addressojJ2RQx, {from: accounts[5]});
//		await ReviveAcNLmDC.renounceOwnership.call({from: accounts[2]});
//		const addresswKt8bU = await ReviveAcNLmDC.recoverERC20.call(addresszPBYRck, uintqOhwNqm, {from: accounts[2]});

		assert.equal(uint256X6R9HkK, BigInt("0"))
		assert.equal(uint256gz3P6U, BigInt("0"))
		await expect(ReviveAcNLmDC.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesPLMgyr = await Revive.new({from: accounts[4]});
		const addresslirCsXb = accounts[3]
		const addressFpk3Tp = accounts[3]
		const uinttjfDSu = BigInt("153")
		const addressjAD1sT = accounts[1]
		const uintCB6YkjR = BigInt("1703")
		const addressBG7B3JP = accounts[2]
		const uint256nAb35sK = await RevivesPLMgyr.allowance.call(addressFpk3Tp, addresslirCsXb, {from: accounts[3]});
		const booleYOECY8 = await RevivesPLMgyr.increaseAllowance.call(addressjAD1sT, uinttjfDSu, {from: accounts[2]});
//		const uint256vtlBAQ4 = await RevivesPLMgyr.recoverERC20.call(uintCB6YkjR, {from: accounts[2]});
//		const uint256vsqUaj9 = await RevivesPLMgyr.unlock.call(addressBG7B3JP, {from: accounts[0]});

		assert.equal(booleYOECY8, true)
		assert.equal(uint256nAb35sK, BigInt("0"))
		await expect(RevivesPLMgyr.recoverERC20.call(uintCB6YkjR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveAcNLmDC = await Revive.new({from: accounts[2]});
		const uintYtlXqtf = BigInt("1025")
		const uintj44af1l = BigInt("1961")
		const uintqLYYglc = BigInt("599")
		const bytep08ZsKj = "0x01030e121514031a1f0908071c0d01140b1615041d11160f000a15200a180008"
		const addressNuQSf8 = accounts[4]
//		const uint256IqfNhhT = await ReviveAcNLmDC.recoverERC20.call(uintYtlXqtf, {from: "0x0000000000000000000000000000000000000001"});
//		const boolta0FmRu = await ReviveAcNLmDC.lock.call(bytep08ZsKj, uintqLYYglc, uintj44af1l, {from: accounts[3]});
//		const uint256X6R9HkK = await ReviveAcNLmDC.getUnlockableTokens.call(addressNuQSf8, {from: accounts[0]});

		await expect(ReviveAcNLmDC.recoverERC20.call(uintYtlXqtf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive2wmZCB = await Revive.new({from: accounts[1]});
		const address6GNSIx = accounts[2]
		const addressKZKeOTh = accounts[3]
		const uint256yKgkfG = await Revive2wmZCB.unlock.call(address6GNSIx, {from: accounts[4]});
		const addressVzTEyWR = await Revive2wmZCB.transferOwnership.call(addressKZKeOTh, {from: accounts[1]});

		assert.equal(uint256yKgkfG, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveAcNLmDC = await Revive.new({from: accounts[2]});
		const uintOgRUn9z = BigInt("1961")
		const uintv5k9lKh = BigInt("599")
		const byteBQiyjEc = "0x01030e121514ffffffff1a1f0908071c0d01140b1615041d11160f000a15200a180008"
		const uintbgVd9hq = BigInt("840")
		const byteVqfqLXz = "0x0f0413100d0417111a040a12080f130d1d0f020b0c041b12051a1b1f0f160d04"
		const addressxYfjcN8 = accounts[2]
//		const boolta0FmRu = await ReviveAcNLmDC.lock.call(byteBQiyjEc, uintv5k9lKh, uintOgRUn9z, {from: accounts[3]});
//		const boolV5LdXk = await ReviveAcNLmDC.increaseLockAmount.call(byteVqfqLXz, uintbgVd9hq, {from: accounts[5]});
//		const uint256Pg5U1Qc = await ReviveAcNLmDC.totalSupply.call({from: accounts[2]});
//		const address7FtpLs = await ReviveAcNLmDC.transferOwnership.call(addressxYfjcN8, {from: accounts[4]});

		await expect(ReviveAcNLmDC.lock.call(byteBQiyjEc, uintv5k9lKh, uintOgRUn9z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveylAUnu8 = await Revive.new({from: accounts[1]});
		const uintRvH5GYF = BigInt("572")
		const addressF9yuuNi = accounts[3]
		const addresszAPMLdt = accounts[3]
		const addressmRsidGW = accounts[0]
//		const uint256Lc3xIL4 = await ReviveylAUnu8.recoverERC20.call(uintRvH5GYF, {from: accounts[2]});
//		const addressE1Wgzq = await ReviveylAUnu8.owner.call({from: accounts[4]});
//		const uint256QLXVci6 = await ReviveylAUnu8.unlock.call(addressF9yuuNi, {from: accounts[4]});
//		const uint256CFsItM4 = await ReviveylAUnu8.unlock.call(addresszAPMLdt, {from: accounts[4]});
//		const booluVm6zD6 = await ReviveylAUnu8.isOwner.call({from: accounts[5]});
//		const addressqDGCpZ9 = await ReviveylAUnu8.transferOwnership.call(addressmRsidGW, {from: accounts[3]});

		await expect(ReviveylAUnu8.recoverERC20.call(uintRvH5GYF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveykELdCS = await Revive.new({from: accounts[4]});
		const uintPjpIQw = BigInt("43")
		const addresshvIULkh = accounts[4]
		const uintUbkfyc = BigInt("497")
		const uintrsv2mIW = BigInt("540")
		const byteBpO04Pn = "0x02011504051d161e150614131c14020d19030211011c19070f17031218120112"
		const uintiBifQ6 = BigInt("1428")
		const bytelfV6IBl = "0x030d0b170514130719121501030d151c200c1d030c0803021015111804151311"
		const boolJWN5vaE = await ReviveykELdCS.approve.call(addresshvIULkh, uintPjpIQw, {from: accounts[3]});
//		await ReviveykELdCS.renounceOwnership.call({from: accounts[4]});
//		const uint256bTalc0W = await ReviveykELdCS.recoverERC20.call(uintUbkfyc, {from: accounts[1]});
//		const boolHCzRB1 = await ReviveykELdCS.increaseLockAmount.call(byteBpO04Pn, uintrsv2mIW, {from: accounts[3]});
//		const boolZOPE8s = await ReviveykELdCS.increaseLockAmount.call(bytelfV6IBl, uintiBifQ6, {from: accounts[4]});

		assert.equal(boolJWN5vaE, true)
		await expect(ReviveykELdCS.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveh87Mmu5 = await Revive.new({from: accounts[0]});
		const uintQ4HcvZd = BigInt("1719")
		const uintjCZJB4 = BigInt("42")
		const byteFY3nTC = "0x0b0c092008031404161f011818040c0a1a180b1c150b090219030d001f05201c"
		const addressgry7SAP = accounts[3]
//		const uint256ii0kYyG = await Reviveh87Mmu5.recoverERC20.call(uintQ4HcvZd, {from: accounts[0]});
//		const uint256uxAswj3 = await Reviveh87Mmu5.tokensLockedAtTime.call(addressgry7SAP, byteFY3nTC, uintjCZJB4, {from: accounts[1]});

		await expect(Reviveh87Mmu5.recoverERC20.call(uintQ4HcvZd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOsSdtC6 = await Revive.new({from: accounts[3]});
		const uintUDhn7Qv = BigInt("406")
		const uintLOILw3 = BigInt("914")
		const addressteIQkyr = accounts[2]
//		const uint256xFWz8y9 = await ReviveOsSdtC6.recoverERC20.call(uintUDhn7Qv, {from: "0x0000000000000000000000000000000000000001"});
//		const boolArusfi6 = await ReviveOsSdtC6.decreaseAllowance.call(addressteIQkyr, uintLOILw3, {from: accounts[0]});

		await expect(ReviveOsSdtC6.recoverERC20.call(uintUDhn7Qv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveAcNLmDC = await Revive.new({from: accounts[2]});
		const uintIvx4fW9 = BigInt("1961")
		const uintLxOtl9w = BigInt("599")
		const byteChUEdJ2 = "0x01030e121514031a1f0908071c0d01140b1615041d11160f000a15200a18ffffffff08"
		const uintRGVV18t = BigInt("879")
		const addressQbHtvqE = accounts[3]
//		const boolta0FmRu = await ReviveAcNLmDC.lock.call(byteChUEdJ2, uintLxOtl9w, uintIvx4fW9, {from: accounts[3]});
//		const addressmiUDn0h = await ReviveAcNLmDC.recoverERC20.call(addressQbHtvqE, uintRGVV18t, {from: accounts[4]});
//		const boolmDonWQU = await ReviveAcNLmDC.isOwner.call({from: accounts[4]});

		await expect(ReviveAcNLmDC.lock.call(byteChUEdJ2, uintLxOtl9w, uintIvx4fW9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive2wmZCB = await Revive.new({from: accounts[1]});
		const uintbz9ERHE = BigInt("344")
		const addressR1Gsu1 = accounts[4]
		const uintGP3wDts = BigInt("642")
		const uintajusrar = BigInt("1771")
		const byte2Nu5TF = "0x1a09fffffffd10030f1f1a061e06170412081c1d141b0b0c0a0812091a071a0e1b1f0a"
		const addressQCvr3YJ = accounts[5]
		const boolDknZ3sK = await Revive2wmZCB.increaseAllowance.call(addressR1Gsu1, uintbz9ERHE, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrT746Vl = await Revive2wmZCB.transferWithLock.call(addressQCvr3YJ, byte2Nu5TF, uintajusrar, uintGP3wDts, {from: accounts[2]});

		assert.equal(boolDknZ3sK, true)
		await expect(Revive2wmZCB.transferWithLock.call(addressQCvr3YJ, byte2Nu5TF, uintajusrar, uintGP3wDts, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveh87Mmu5 = await Revive.new({from: accounts[0]});
		const uintP6hznv8 = BigInt("1730")
		const addressqe99X6E = accounts[4]
//		const uint256ryNGKei = await Reviveh87Mmu5.recoverERC20.call(uintP6hznv8, {from: accounts[5]});
//		const uint256qxUpJg3 = await Reviveh87Mmu5.totalBalanceOf.call(addressqe99X6E, {from: accounts[3]});

		await expect(Reviveh87Mmu5.recoverERC20.call(uintP6hznv8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveh87Mmu5 = await Revive.new({from: accounts[0]});
		const uintWdqU5f = BigInt("65")
		const uintLbQFXuY = BigInt("30")
		const byteYqoqAml = "0x0b0c0920080314041620011818040c0a1b180b1c150b090219030d001f05201c"
		const addresscD3s7gV = accounts[3]
//		const uint256H8c4qTM = await Reviveh87Mmu5.recoverERC20.call(uintWdqU5f, {from: accounts[4]});
//		const uint256uxAswj3 = await Reviveh87Mmu5.tokensLockedAtTime.call(addresscD3s7gV, byteYqoqAml, uintLbQFXuY, {from: accounts[1]});

		await expect(Reviveh87Mmu5.recoverERC20.call(uintWdqU5f, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})