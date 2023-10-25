const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAcMvuIzP = await TPA.new({from: accounts[5]});
		const uintmAnvc7O = BigInt("745")
		const addressDRqjEVk = accounts[0]
		const uint8wN4CPTH = await TPAcMvuIzP.decimals.call({from: accounts[3]});
		const boolDiwNtH = await TPAcMvuIzP.decreaseAllowance.call(addressDRqjEVk, uintmAnvc7O, {from: accounts[0]});

		assert.equal(uint8wN4CPTH, BigInt("18"))
		await expect(TPAcMvuIzP.decreaseAllowance.call(addressDRqjEVk, uintmAnvc7O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtWysXi = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addresseoyIxj = accounts[4]
		const addressutzau2 = await TPAtWysXi.removeAdmin.call(addresseoyIxj, {from: accounts[0]});
		await TPAtWysXi.renounceAdmin.call({from: accounts[1]});
	});

	it('test for TPA', async () => {
		const stringS5akHJQ = "2BCLOMmtlJUvKLJUKvVuAXgSvTGj5LjnAMwV0NesjokDhtEAJiirFCqFEGyVlrMfSM969AUfDJCTDecNCgbVf1oZTs9tPa"
		const stringFMEh2tB = "ay9Ml8Mv7KTWO"
		const uinthXEuVUh = BigInt("74")
		const TPABVKDRuX = await TPA.new(stringS5akHJQ, stringFMEh2tB, uinthXEuVUh, {from: "0x0000000000000000000000000000000000000001"});
		const addressVv72eSX = accounts[2]
		const addressfeLMdog = accounts[3]
		const addresslKgBbWL = accounts[3]
		const addressiCQIhZ0 = await TPABVKDRuX.removeAdmin.call(addressVv72eSX, {from: accounts[0]});
		const addressj3d55in = await TPABVKDRuX.transferOwnership.call(addressfeLMdog, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ix8vJKJ = await TPABVKDRuX.balanceOf.call(addresslKgBbWL, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TPA', async () => {
		const TPAR9UFf7s = await TPA.new({from: accounts[4]});
		const uintmmUFYII = BigInt("1051")
		const addressUXGM8Kl = "0x0000000000000000000000000000000000000001"
		const uint6ZDjtr = BigInt("1289")
		const addressYmIQ7u3 = accounts[2]
		const addressFA5Bec = accounts[1]
		const bool8rSyyJ = await TPAR9UFf7s.increaseAllowance.call(addressUXGM8Kl, uintmmUFYII, {from: accounts[4]});
		await TPAR9UFf7s.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolpV8eu7U = await TPAR9UFf7s.transferFrom.call(addressFA5Bec, addressYmIQ7u3, uint6ZDjtr, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool8rSyyJ, true)
		await expect(TPAR9UFf7s.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbz9z1jp = await TPA.new({from: accounts[2]});
		const uintAVJPbwO = BigInt("160")
		const uintY9nasse = BigInt("660")
		const addressObEkAg = "0x0000000000000000000000000000000000000001"
		const uinthdVjTiq = BigInt("1072")
		const address7Xdt0H = accounts[4]
		const addressYRBRClA = accounts[3]
		const addressDzRSctf = accounts[0]
		const addressPH1HNMR = "0x0000000000000000000000000000000000000001"
		const bools8bjXOw = await TPAbz9z1jp.transferWithLock.call(addressObEkAg, uintY9nasse, uintAVJPbwO, {from: accounts[1]});
		const boolZUgajIA = await TPAbz9z1jp.transferFrom.call(addressYRBRClA, address7Xdt0H, uinthdVjTiq, {from: accounts[0]});
		const addresswlDJ2q = await TPAbz9z1jp.removeAdmin.call(addressDzRSctf, {from: accounts[1]});
		const uint256UBuIia = await TPAbz9z1jp.balanceOf.call(addressPH1HNMR, {from: accounts[1]});
		await TPAbz9z1jp.pause.call({from: accounts[0]});

		await expect(TPAbz9z1jp.transferWithLock.call(addressObEkAg, uintY9nasse, uintAVJPbwO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAR9UFf7s = await TPA.new({from: accounts[4]});
		const uintUlK8NrE = BigInt("1051")
		const addressyxT1t7R = "0x0000000000000000000000000000000000000001"
		const uintk1hmm3U = BigInt("1540")
		const addressFKqk6lb = accounts[3]
		const uintR1v489n = BigInt("1289")
		const addresspvKrEyb = accounts[2]
		const addressZSB1cn = accounts[2]
		const bool8rSyyJ = await TPAR9UFf7s.increaseAllowance.call(addressyxT1t7R, uintUlK8NrE, {from: accounts[4]});
		const addressvTfLZJY = await TPAR9UFf7s.burnFrom.call(addressFKqk6lb, uintk1hmm3U, {from: "0x0000000000000000000000000000000000000001"});
		await TPAR9UFf7s.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolpV8eu7U = await TPAR9UFf7s.transferFrom.call(addressZSB1cn, addresspvKrEyb, uintR1v489n, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool8rSyyJ, true)
		await expect(TPAR9UFf7s.burnFrom.call(addressFKqk6lb, uintk1hmm3U, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAFJlVXUO = await TPA.new({from: accounts[2]});
		const uintonioump = BigInt("1733")
		const uintCJdpd5c = BigInt("929")
		const addressubBILeB = "0x0000000000000000000000000000000000000001"
		const addressOJYfzY5 = accounts[5]
		const addressWqbKRW6 = accounts[3]
		const addressWzAnXZB = accounts[3]
		const addressaW74oP = accounts[0]
		const boolnRivnIp = await TPAFJlVXUO.transferWithLock.call(addressubBILeB, uintCJdpd5c, uintonioump, {from: accounts[2]});
		const boolgopiUHM = await TPAFJlVXUO.unfreezeAccount.call(addressOJYfzY5, {from: accounts[5]});
		const boolxipq0tB = await TPAFJlVXUO.isOwner.call(addressWqbKRW6, {from: accounts[0]});
		const uint256nMOJqQo = await TPAFJlVXUO.allowance.call(addressaW74oP, addressWzAnXZB, {from: accounts[1]});

		assert.equal(boolnRivnIp, true)
		await expect(TPAFJlVXUO.unfreezeAccount.call(addressOJYfzY5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAR9UFf7s = await TPA.new({from: accounts[4]});
		const uintaQGMaIh = BigInt("724")
		const addressHAvifHu = accounts[1]
		const uint0relXd = BigInt("1051")
		const addressjNakZWZ = "0x0000000000000000000000000000000000000001"
		const uintw4D5r9r = BigInt("1641")
		const uintpbzTvL = BigInt("1814")
		const addresssN6cu0e = "0x0000000000000000000000000000000000000002"
		const boolp7T5bg6 = await TPAR9UFf7s.approve.call(addressHAvifHu, uintaQGMaIh, {from: "0x0000000000000000000000000000000000000001"});
		const bool8rSyyJ = await TPAR9UFf7s.increaseAllowance.call(addressjNakZWZ, uint0relXd, {from: accounts[4]});
		const boolNI3lada = await TPAR9UFf7s.transferWithLock.call(addresssN6cu0e, uintpbzTvL, uintw4D5r9r, {from: "0x0000000000000000000000000000000000000001"});
		await TPAR9UFf7s.onlyOwner.call({from: accounts[1]});
		await TPAR9UFf7s.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool8rSyyJ, true)
		assert.equal(boolp7T5bg6, true)
		await expect(TPAR9UFf7s.transferWithLock.call(addresssN6cu0e, uintpbzTvL, uintw4D5r9r, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAKPNYPs = await TPA.new({from: accounts[2]});
		const uint9HCGic = BigInt("1733")
		const addressKjycnIv = accounts[5]
		const stringY35CQRB = await TPAKPNYPs.symbol.call({from: accounts[0]});
		await TPAKPNYPs.whenNotPaused.call({from: accounts[4]});
		const boolUiRTfb0 = await TPAKPNYPs.decreaseAllowance.call(addressKjycnIv, uint9HCGic, {from: accounts[2]});
		await TPAKPNYPs.onlyAdmin.call({from: accounts[4]});

		assert.equal(stringY35CQRB, "TPA")
		await expect(TPAKPNYPs.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAfRJRPvg = await TPA.new({from: accounts[0]});
		const addresstPWTxMy = accounts[1]
		const uintfXvkanZ = BigInt("1984")
		const uintoOYakK5 = BigInt("159")
		const addressr0zUPIv = accounts[4]
		const uintqHQIJjx = BigInt("1029")
		const stringZ0cWwQE = await TPAfRJRPvg.symbol.call({from: accounts[3]});
		await TPAfRJRPvg.renounceAdmin.call({from: accounts[4]});
		const addressYzy8vad = await TPAfRJRPvg.transferOwnership.call(addresstPWTxMy, {from: accounts[2]});
		const boolPPvhKI2 = await TPAfRJRPvg.lock.call(addressr0zUPIv, uintoOYakK5, uintfXvkanZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256aEiuV48 = await TPAfRJRPvg.burn.call(uintqHQIJjx, {from: accounts[4]});

		assert.equal(stringZ0cWwQE, "TPA")
		await expect(TPAfRJRPvg.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbz9z1jp = await TPA.new({from: accounts[2]});
		const uintLBrqAB = BigInt("160")
		const uintt2uzmcT = BigInt("670")
		const addressREwoODr = "0x0000000000000000000000000000000000000001"
		const uintMrYgAws = BigInt("1072")
		const addressSv4CxNF = accounts[4]
		const addressD4auCv = accounts[3]
		const addressCcpmuUY = accounts[1]
		const addressLsKTuI4 = accounts[0]
		const addressNPc0bU2 = "0x0000000000000000000000000000000000000001"
		const addressRzO78Y1 = accounts[4]
		const stringhsfiu8g = await TPAbz9z1jp.name.call({from: accounts[1]});
		const bools8bjXOw = await TPAbz9z1jp.transferWithLock.call(addressREwoODr, uintt2uzmcT, uintLBrqAB, {from: accounts[1]});
		const boolZUgajIA = await TPAbz9z1jp.transferFrom.call(addressD4auCv, addressSv4CxNF, uintMrYgAws, {from: accounts[0]});
		const addresswxke7UT = await TPAbz9z1jp.transferOwnership.call(addressCcpmuUY, {from: accounts[2]});
		const addresswlDJ2q = await TPAbz9z1jp.removeAdmin.call(addressLsKTuI4, {from: accounts[1]});
		const uint256UBuIia = await TPAbz9z1jp.balanceOf.call(addressNPc0bU2, {from: accounts[1]});
		const addresspJ2ShHe = await TPAbz9z1jp.transferOwnership.call(addressRzO78Y1, {from: accounts[4]});
		await TPAbz9z1jp.pause.call({from: accounts[0]});

		assert.equal(stringhsfiu8g, "TPA")
		await expect(TPAbz9z1jp.transferWithLock.call(addressREwoODr, uintt2uzmcT, uintLBrqAB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbORbhSH = await TPA.new({from: accounts[2]});
		const addressm9PN1Oh = accounts[0]
		const uintSnO0uVT = BigInt("60")
		const uintNojokDD = BigInt("606")
		const addressccPpdj = accounts[2]
		const boolxUU5ckb = await TPAbORbhSH.unfreezeAccount.call(addressm9PN1Oh, {from: accounts[2]});
		const boolvVcAfLN = await TPAbORbhSH.transferWithLock.call(addressccPpdj, uintNojokDD, uintSnO0uVT, {from: accounts[4]});

		await expect(TPAbORbhSH.unfreezeAccount.call(addressm9PN1Oh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbz9z1jp = await TPA.new({from: accounts[2]});
		const uintjHh7TO3 = BigInt("1072")
		const addressrqTgGI3 = accounts[4]
		const addressdrGS7y3 = accounts[3]
		const addresseeTDkGb = accounts[0]
		const addressgKnxhCI = "0x0000000000000000000000000000000000000001"
		const boolZUgajIA = await TPAbz9z1jp.transferFrom.call(addressdrGS7y3, addressrqTgGI3, uintjHh7TO3, {from: accounts[0]});
		const addresswlDJ2q = await TPAbz9z1jp.removeAdmin.call(addresseeTDkGb, {from: accounts[1]});
		const uint256UBuIia = await TPAbz9z1jp.balanceOf.call(addressgKnxhCI, {from: accounts[1]});
		await TPAbz9z1jp.pause.call({from: accounts[0]});

		await expect(TPAbz9z1jp.transferFrom.call(addressdrGS7y3, addressrqTgGI3, uintjHh7TO3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAlXKRykt = await TPA.new({from: accounts[1]});
		const uintqKmbVE8 = BigInt("268")
		const addressFVwx6Ps = accounts[0]
		const addressmF6ORLH = accounts[5]
		const addressNA8r9Jr = accounts[0]
		const addresst5opjT = accounts[3]
		const addressZiqvmWL = accounts[2]
		const boolGiNMAbV = await TPAlXKRykt.transfer.call(addressFVwx6Ps, uintqKmbVE8, {from: accounts[4]});
		await TPAlXKRykt.whenNotPaused.call({from: accounts[0]});
		const uint256Efs7Uh = await TPAlXKRykt.balanceOf.call(addressmF6ORLH, {from: accounts[2]});
		const boolv2ZJwns = await TPAlXKRykt.isOwner.call(addressNA8r9Jr, {from: accounts[3]});
		const boolHDeUCaV = await TPAlXKRykt.isOwner.call(addresst5opjT, {from: accounts[3]});
		const addressP025Nr = await TPAlXKRykt.addAdmin.call(addressZiqvmWL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAlXKRykt.transfer.call(addressFVwx6Ps, uintqKmbVE8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbORbhSH = await TPA.new({from: accounts[2]});
		const addressZZT7awl = accounts[3]
		const uint35JhCC = BigInt("60")
		const uintdY2BBtA = BigInt("603")
		const addressmAwWMRp = accounts[1]
		const addressDqNZKeA = await TPAbORbhSH.addAdmin.call(addressZZT7awl, {from: accounts[2]});
		const boolvVcAfLN = await TPAbORbhSH.transferWithLock.call(addressmAwWMRp, uintdY2BBtA, uint35JhCC, {from: accounts[4]});

		await expect(TPAbORbhSH.transferWithLock.call(addressmAwWMRp, uintdY2BBtA, uint35JhCC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbz9z1jp = await TPA.new({from: accounts[2]});
		const addressjguUVgm = "0x0000000000000000000000000000000000000001"
		const uint256UBuIia = await TPAbz9z1jp.balanceOf.call(addressjguUVgm, {from: accounts[1]});
		await TPAbz9z1jp.pause.call({from: accounts[0]});

		assert.equal(uint256UBuIia, BigInt("0"))
		await expect(TPAbz9z1jp.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbz9z1jp = await TPA.new({from: accounts[2]});
		const uintwAtDGSG = BigInt("1757")
		const addressN7KHMXU = "0x0000000000000000000000000000000000000000"
		const uint256uKLAraq = await TPAbz9z1jp.burn.call(uintwAtDGSG, {from: accounts[3]});
		await TPAbz9z1jp.pause.call({from: accounts[1]});
		const uint256UBuIia = await TPAbz9z1jp.balanceOf.call(addressN7KHMXU, {from: accounts[1]});

		await expect(TPAbz9z1jp.burn.call(uintwAtDGSG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAscxh04e = await TPA.new({from: accounts[1]});
		const addressLCN8BaQ = accounts[1]
		const addresstOEOond = accounts[0]
		const addressFF8Ccj = accounts[1]
		const uintSUeaGLV = BigInt("626")
		const addressvUjlwD = "0x0000000000000000000000000000000000000001"
		const addressLiqDhbz = accounts[3]
		const uint256UGOaS5p = await TPAscxh04e.allowance.call(addresstOEOond, addressLCN8BaQ, {from: accounts[2]});
		const addressdGFNa48 = await TPAscxh04e.notFrozen.call(addressFF8Ccj, {from: accounts[4]});
		const addressWJfoH2M = await TPAscxh04e.burnFrom.call(addressvUjlwD, uintSUeaGLV, {from: accounts[2]});
		const addressfuaYTZU = await TPAscxh04e.upgradeTo.call(addressLiqDhbz, {from: accounts[4]});

		assert.equal(uint256UGOaS5p, BigInt("0"))
		await expect(TPAscxh04e.notFrozen.call(addressFF8Ccj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbz9z1jp = await TPA.new({from: accounts[2]});
		const uintqwND7io = BigInt("1967")
		const addressXlhyzfO = accounts[1]
		const addressKu1GSqo = accounts[3]
		const addressRe0SSxA = accounts[1]
		const uintpTAVFFl = BigInt("1072")
		const addressJw9kNCU = accounts[5]
		const addressN5oJ225 = accounts[3]
		const stringvIoEBBM = await TPAbz9z1jp.name.call({from: accounts[3]});
		const uint256S6EXSTw = await TPAbz9z1jp.totalSupply.call({from: accounts[3]});
		const boolAqYCnJ = await TPAbz9z1jp.transfer.call(addressXlhyzfO, uintqwND7io, {from: accounts[2]});
		const boolHGx5wX2 = await TPAbz9z1jp.unfreezeAccount.call(addressKu1GSqo, {from: "0x0000000000000000000000000000000000000001"});
		const boolcvlx3jT = await TPAbz9z1jp.isAdmin.call(addressRe0SSxA, {from: accounts[3]});
		const boolZUgajIA = await TPAbz9z1jp.transferFrom.call(addressN5oJ225, addressJw9kNCU, uintpTAVFFl, {from: accounts[0]});

		assert.equal(boolAqYCnJ, true)
		assert.equal(stringvIoEBBM, "TPA")
		assert.equal(uint256S6EXSTw, BigInt("10000000000000000000000000000"))
		await expect(TPAbz9z1jp.unfreezeAccount.call(addressKu1GSqo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbORbhSH = await TPA.new({from: accounts[2]});
		const addressz7iQvk = accounts[3]
		const uintf75aqDr = BigInt("70")
		const uintYCRator = BigInt("606")
		const addressKgW3iHK = accounts[1]
		const addressdct8smL = await TPAbORbhSH.transferOwnership.call(addressz7iQvk, {from: accounts[2]});
		const boolXV8dcMS = await TPAbORbhSH.paused.call({from: accounts[3]});
		const boolvVcAfLN = await TPAbORbhSH.transferWithLock.call(addressKgW3iHK, uintYCRator, uintf75aqDr, {from: accounts[4]});

		assert.equal(boolXV8dcMS, false)
		await expect(TPAbORbhSH.transferWithLock.call(addressKgW3iHK, uintYCRator, uintf75aqDr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbz9z1jp = await TPA.new({from: accounts[2]});
		const addressmrZ8aMv = "0x0000000000000000000000000000000000000000"
		const addressAZkKPYq = accounts[2]
		const uint256UBuIia = await TPAbz9z1jp.balanceOf.call(addressmrZ8aMv, {from: accounts[1]});
		const address3RCgEv = await TPAbz9z1jp.removeAdmin.call(addressAZkKPYq, {from: accounts[2]});

		assert.equal(uint256UBuIia, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAbz9z1jp = await TPA.new({from: accounts[2]});
		const uintN52eHSA = BigInt("1034")
		const uintZEowne9 = BigInt("470")
		const addressrp8JGsF = accounts[3]
		const addresssYHbkF1 = "0x0000000000000000000000000000000000000001"
		const boolsvegGFo = await TPAbz9z1jp.lock.call(addressrp8JGsF, uintZEowne9, uintN52eHSA, {from: accounts[2]});
		const uint256UBuIia = await TPAbz9z1jp.balanceOf.call(addresssYHbkF1, {from: accounts[1]});

		await expect(TPAbz9z1jp.lock.call(addressrp8JGsF, uintZEowne9, uintN52eHSA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAbz9z1jp = await TPA.new({from: accounts[2]});
		const addressT7FMFPn = "0x00000000000000000000000000000000000000-1"
		const uintIsCxRIN = BigInt("543")
		const addressVv7aESQ = accounts[4]
		const uint256UBuIia = await TPAbz9z1jp.balanceOf.call(addressT7FMFPn, {from: accounts[1]});
		const boolxPK2tRe = await TPAbz9z1jp.increaseAllowance.call(addressVv7aESQ, uintIsCxRIN, {from: accounts[4]});
		await TPAbz9z1jp.pause.call({from: accounts[5]});

		await expect(TPAbz9z1jp.balanceOf.call(addressT7FMFPn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})