const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYxCjY2tq = await LIBERAPAY.new({from: accounts[3]});
		const addresssIs5Jy8 = accounts[1]
		const addressqOSRPX = accounts[1]
		const addressYxaEZCp = accounts[3]
//		const addresseoV1z6E = await LIBERAPAYxCjY2tq.notFrozen.call(addresssIs5Jy8, {from: accounts[3]});
//		await LIBERAPAYxCjY2tq.onlyOwner.call({from: accounts[1]});
//		const uint256k0OMpBN = await LIBERAPAYxCjY2tq.allowance.call(addressYxaEZCp, addressqOSRPX, {from: accounts[4]});

		await expect(LIBERAPAYxCjY2tq.notFrozen.call(addresssIs5Jy8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYkF7SeGF = await LIBERAPAY.new({from: accounts[2]});
		const uintO06ah6e = BigInt("696")
		const addresscH5PoRc = accounts[4]
		const uint30FoQ7 = BigInt("1090")
		const addresso9OKvip = "0x0000000000000000000000000000000000000001"
		const uintqk3h4D = BigInt("25")
		const addressEMT302t = "0x0000000000000000000000000000000000000001"
		const uint256mOUJmY0 = await LIBERAPAYkF7SeGF.getNowTime.call({from: accounts[4]});
//		const boolvrUlKjG = await LIBERAPAYkF7SeGF.decreaseAllowance.call(addresscH5PoRc, uintO06ah6e, {from: accounts[0]});
//		await LIBERAPAYkF7SeGF.pause.call({from: accounts[4]});
//		const boolf3iWMgQ = await LIBERAPAYkF7SeGF.distribute.call(addresso9OKvip, uint30FoQ7, {from: accounts[5]});
//		const uint256wWCGVXh = await LIBERAPAYkF7SeGF.getNowTime.call({from: accounts[0]});
//		const boolhtivg9G = await LIBERAPAYkF7SeGF.decreaseAllowance.call(addressEMT302t, uintqk3h4D, {from: accounts[0]});

		assert.equal(uint256mOUJmY0, BigInt("1630229517"))
		await expect(LIBERAPAYkF7SeGF.decreaseAllowance.call(addresscH5PoRc, uintO06ah6e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYOOZ9hy3 = await LIBERAPAY.new({from: accounts[2]});
//		await LIBERAPAYOOZ9hy3.pause.call({from: accounts[1]});
//		await LIBERAPAYOOZ9hy3.whenPaused.call({from: accounts[5]});
//		await LIBERAPAYOOZ9hy3.whenPaused.call({from: accounts[1]});

		await expect(LIBERAPAYOOZ9hy3.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbdO7n = await LIBERAPAY.new({from: accounts[4]});
		const uintUiFVjp = BigInt("776")
		const addressClQGid = "0x0000000000000000000000000000000000000001"
		const addresskDwMc2 = accounts[4]
//		const boolruUtPbS = await LIBERAPAYjbdO7n.transfer.call(addressClQGid, uintUiFVjp, {from: accounts[3]});
//		const boolwCtkfsU = await LIBERAPAYjbdO7n.freezeAccount.call(addresskDwMc2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYjbdO7n.transfer.call(addressClQGid, uintUiFVjp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY1FdnP2 = await LIBERAPAY.new({from: accounts[1]});
		const uintW9IG2Iv = BigInt("1873")
		const addressWXHiFMh = accounts[4]
		const addressLPQ2hoF = accounts[4]
		const boolRJd5Pt = await LIBERAPAY1FdnP2.increaseAllowance.call(addressWXHiFMh, uintW9IG2Iv, {from: accounts[2]});
		const uint256ZXxEWDe = await LIBERAPAY1FdnP2.currentBalanceOf.call(addressLPQ2hoF, {from: accounts[4]});
//		await LIBERAPAY1FdnP2.onlyNewOwner.call({from: accounts[3]});

		assert.equal(boolRJd5Pt, true)
		assert.equal(uint256ZXxEWDe, BigInt("0"))
		await expect(LIBERAPAY1FdnP2.onlyNewOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbdO7n = await LIBERAPAY.new({from: accounts[4]});
		const uintC5u33He = BigInt("769")
		const addressm8uB1Am = "0x0000000000000000000000000000000000000001"
		const addressEqrxU25 = accounts[5]
//		await LIBERAPAYjbdO7n.f.call({from: accounts[4]});
//		const boolruUtPbS = await LIBERAPAYjbdO7n.transfer.call(addressm8uB1Am, uintC5u33He, {from: accounts[3]});
//		const boolwCtkfsU = await LIBERAPAYjbdO7n.freezeAccount.call(addressEqrxU25, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYjbdO7n.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYG3cC2RY = await LIBERAPAY.new({from: accounts[4]});
		const uintcXyTFF = BigInt("1153")
		const addresstNy6WVW = accounts[4]
		const addressv09Ml5B = accounts[0]
		const addresswGsD4IB = accounts[0]
		const address2pzL2q = accounts[3]
		const addressYcrQVeG = accounts[4]
//		const boolTToy0Zi = await LIBERAPAYG3cC2RY.transferFrom.call(addressv09Ml5B, addresstNy6WVW, uintcXyTFF, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYG3cC2RY.f.call({from: accounts[2]});
//		const uint256xTO4UKZ = await LIBERAPAYG3cC2RY.totalSupply.call({from: accounts[5]});
//		const uint256Ifx88e = await LIBERAPAYG3cC2RY.allowance.call(address2pzL2q, addresswGsD4IB, {from: accounts[0]});
//		await LIBERAPAYG3cC2RY.onlyNewOwner.call({from: accounts[5]});
//		const addressRKJHfIp = await LIBERAPAYG3cC2RY.transferOwnership.call(addressYcrQVeG, {from: accounts[0]});

		await expect(LIBERAPAYG3cC2RY.transferFrom.call(addressv09Ml5B, addresstNy6WVW, uintcXyTFF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY1FdnP2 = await LIBERAPAY.new({from: accounts[1]});
		const uintFgRU1Yp = BigInt("106")
		const addressQ5hYuKe = accounts[3]
		const uintVOkNmSd = BigInt("1870")
		const addressSA0gnT = accounts[4]
//		await LIBERAPAY1FdnP2.showLockState.call(addressQ5hYuKe, uintFgRU1Yp, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRJd5Pt = await LIBERAPAY1FdnP2.increaseAllowance.call(addressSA0gnT, uintVOkNmSd, {from: accounts[2]});

		await expect(LIBERAPAY1FdnP2.showLockState.call(addressQ5hYuKe, uintFgRU1Yp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY1FdnP2 = await LIBERAPAY.new({from: accounts[1]});
		const uintg4pabeH = BigInt("2032")
		const addresskhnLvv = accounts[3]
		const uintqPc8Pg2 = BigInt("1873")
		const addresswFgfkv = accounts[5]
		const addressFGWmyd1 = accounts[4]
		const boolBb34iwf = await LIBERAPAY1FdnP2.approve.call(addresskhnLvv, uintg4pabeH, {from: accounts[5]});
		const boolRJd5Pt = await LIBERAPAY1FdnP2.increaseAllowance.call(addresswFgfkv, uintqPc8Pg2, {from: accounts[2]});
		const uint256ZXxEWDe = await LIBERAPAY1FdnP2.currentBalanceOf.call(addressFGWmyd1, {from: accounts[4]});
		const uint256WHADAHT = await LIBERAPAY1FdnP2.getNowTime.call({from: accounts[4]});

		assert.equal(boolBb34iwf, true)
		assert.equal(boolRJd5Pt, true)
		assert.equal(uint256WHADAHT, BigInt("1630229508"))
		assert.equal(uint256ZXxEWDe, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbdO7n = await LIBERAPAY.new({from: accounts[4]});
		const addressLJP5xDS = accounts[0]
		const uintdhjvPZ4 = BigInt("776")
		const addressbFRdoA = "0x0000000000000000000000000000000000000001"
		const addressTytpsM8 = accounts[4]
		const addressGca0eVD = accounts[6]
//		const boolg4Xmo94 = await LIBERAPAYjbdO7n.unfreezeAccount.call(addressLJP5xDS, {from: accounts[4]});
//		const boolruUtPbS = await LIBERAPAYjbdO7n.transfer.call(addressbFRdoA, uintdhjvPZ4, {from: accounts[3]});
//		const addressTch5qdq = await LIBERAPAYjbdO7n.upgradeTo.call(addressTytpsM8, {from: accounts[0]});
//		const boolwCtkfsU = await LIBERAPAYjbdO7n.freezeAccount.call(addressGca0eVD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYjbdO7n.unfreezeAccount.call(addressLJP5xDS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYu8eGix = await LIBERAPAY.new({from: accounts[3]});
		const addressClM9Dop = accounts[0]
		const addressAdeLxiC = await LIBERAPAYu8eGix.transferOwnership.call(addressClM9Dop, {from: accounts[3]});
//		await LIBERAPAYu8eGix.whenNotPaused.call({from: accounts[0]});
//		await LIBERAPAYu8eGix.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYu8eGix.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbdO7n = await LIBERAPAY.new({from: accounts[4]});
		const uintm2jIhLz = BigInt("1611")
		const addressCAKm9b = accounts[0]
		const addressckQlz3I = accounts[5]
		const uinttGZuZnr = BigInt("776")
		const addressOyRAikF = "0x0000000000000000000000000000000000000001"
//		const boolzTiaMGm = await LIBERAPAYjbdO7n.unlock.call(addressCAKm9b, uintm2jIhLz, {from: accounts[4]});
//		const addresszBB8TxN = await LIBERAPAYjbdO7n.upgradeTo.call(addressckQlz3I, {from: accounts[1]});
//		await LIBERAPAYjbdO7n.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolruUtPbS = await LIBERAPAYjbdO7n.transfer.call(addressOyRAikF, uinttGZuZnr, {from: accounts[3]});

		await expect(LIBERAPAYjbdO7n.unlock.call(addressCAKm9b, uintm2jIhLz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY1FdnP2 = await LIBERAPAY.new({from: accounts[1]});
		const uintbBka61L = BigInt("1873")
		const addresscKiWMUD = accounts[4]
		const addressneQr7O = accounts[0]
		const addressFLMdBbu = accounts[6]
		const uintXLJpMSk = BigInt("1973")
		const addressBugITTE = accounts[0]
		const addressGN6S89r = accounts[4]
		const uintOAVB94G = BigInt("1632")
		const addressSgLxuC5 = accounts[3]
		const boolRJd5Pt = await LIBERAPAY1FdnP2.increaseAllowance.call(addresscKiWMUD, uintbBka61L, {from: accounts[2]});
		const uint256g5qAh2A = await LIBERAPAY1FdnP2.balanceOf.call(addressneQr7O, {from: accounts[3]});
		const uint256ZXxEWDe = await LIBERAPAY1FdnP2.currentBalanceOf.call(addressFLMdBbu, {from: accounts[4]});
//		const boolzdVcXYb = await LIBERAPAY1FdnP2.transferFrom.call(addressGN6S89r, addressBugITTE, uintXLJpMSk, {from: accounts[4]});
//		const boolJpNma0v = await LIBERAPAY1FdnP2.distribute.call(addressSgLxuC5, uintOAVB94G, {from: accounts[3]});

		assert.equal(boolRJd5Pt, true)
		assert.equal(uint256ZXxEWDe, BigInt("0"))
		assert.equal(uint256g5qAh2A, BigInt("0"))
		await expect(LIBERAPAY1FdnP2.transferFrom.call(addressGN6S89r, addressBugITTE, uintXLJpMSk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY1FdnP2 = await LIBERAPAY.new({from: accounts[1]});
		const addressUmvnXNB = accounts[5]
		const addressbHXoVd6 = accounts[0]
		const uintx3qlUZm = BigInt("1659")
		const addressMJadF9 = accounts[2]
		const uint256ZXxEWDe = await LIBERAPAY1FdnP2.currentBalanceOf.call(addressUmvnXNB, {from: accounts[4]});
		const uint256vvaWHe7 = await LIBERAPAY1FdnP2.balanceOf.call(addressbHXoVd6, {from: accounts[0]});
		const boolJIJ1V8 = await LIBERAPAY1FdnP2.distribute.call(addressMJadF9, uintx3qlUZm, {from: accounts[1]});

		assert.equal(boolJIJ1V8, true)
		assert.equal(uint256ZXxEWDe, BigInt("0"))
		assert.equal(uint256vvaWHe7, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY1FdnP2 = await LIBERAPAY.new({from: accounts[1]});
		const uintBC5D8b5 = BigInt("1873")
		const addressYkpO8Q0 = accounts[4]
		const uintuJCdIxX = BigInt("513")
		const addressiB7u8Tm = accounts[2]
		const addressWAdFXYv = accounts[5]
		const uintjdczbX0 = BigInt("855")
		const addressWyreiQM = accounts[3]
		const uintxfSBav1 = BigInt("1784")
		const addressOsJ3U44 = accounts[4]
		const uintv4Kd679 = BigInt("1973")
		const addressAwECbKY = accounts[0]
		const addressEkMoA3B = accounts[5]
		const boolRJd5Pt = await LIBERAPAY1FdnP2.increaseAllowance.call(addressYkpO8Q0, uintBC5D8b5, {from: accounts[2]});
		const boolmDr9SDh = await LIBERAPAY1FdnP2.approve.call(addressiB7u8Tm, uintuJCdIxX, {from: accounts[0]});
		const uint256ZXxEWDe = await LIBERAPAY1FdnP2.currentBalanceOf.call(addressWAdFXYv, {from: accounts[4]});
//		const boolCBLJAFG = await LIBERAPAY1FdnP2.burnFrom.call(addressWyreiQM, uintjdczbX0, {from: accounts[5]});
//		const boolRtHg64s = await LIBERAPAY1FdnP2.unlock.call(addressOsJ3U44, uintxfSBav1, {from: accounts[1]});
//		const uint256Bnx0SXA = await LIBERAPAY1FdnP2.totalSupply.call({from: accounts[1]});
//		const boolzdVcXYb = await LIBERAPAY1FdnP2.transferFrom.call(addressEkMoA3B, addressAwECbKY, uintv4Kd679, {from: accounts[4]});

		assert.equal(boolRJd5Pt, true)
		assert.equal(boolmDr9SDh, true)
		assert.equal(uint256ZXxEWDe, BigInt("0"))
		await expect(LIBERAPAY1FdnP2.burnFrom.call(addressWyreiQM, uintjdczbX0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYLRLZyNE = await LIBERAPAY.new({from: accounts[3]});
		const uintpXZYTS = BigInt("1089")
		const addressIv7MjSa = accounts[4]
		const uint256hGD7oGM = await LIBERAPAYLRLZyNE.totalSupply.call({from: accounts[4]});
//		const bool5Qedtg = await LIBERAPAYLRLZyNE.acceptOwnership.call({from: accounts[0]});
//		const boolK893Qik = await LIBERAPAYLRLZyNE.increaseAllowance.call(addressIv7MjSa, uintpXZYTS, {from: accounts[5]});

		assert.equal(uint256hGD7oGM, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYLRLZyNE.acceptOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYL3B31PZ = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressr3Gb3yO = accounts[0]
		const addressd7qsk7o = accounts[2]
		await LIBERAPAYL3B31PZ.f.call({from: accounts[1]});
		await LIBERAPAYL3B31PZ.unpause.call({from: accounts[1]});
		const uint256RNPdaL3 = await LIBERAPAYL3B31PZ.allowance.call(addressd7qsk7o, addressr3Gb3yO, {from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjlC7pH4 = await LIBERAPAY.new({from: accounts[4]});
		const addressC02g0qJ = accounts[0]
		const uint3Xo9AJ = BigInt("575")
		const addressRdnnx6c = accounts[3]
		const uintXL1OQc1 = BigInt("410")
		const uintJ2bARnQ = BigInt("1103")
		const addresszrrS0kY = accounts[5]
		const addressQYbO31Z = await LIBERAPAYjlC7pH4.upgradeTo.call(addressC02g0qJ, {from: accounts[4]});
//		const boolSmtZBUl = await LIBERAPAYjlC7pH4.decreaseAllowance.call(addressRdnnx6c, uint3Xo9AJ, {from: accounts[1]});
//		const boolWgauFg3 = await LIBERAPAYjlC7pH4.lock.call(addresszrrS0kY, uintJ2bARnQ, uintXL1OQc1, {from: accounts[0]});
//		await LIBERAPAYjlC7pH4.f.call({from: accounts[1]});
//		await LIBERAPAYjlC7pH4.whenPaused.call({from: accounts[3]});

		await expect(LIBERAPAYjlC7pH4.decreaseAllowance.call(addressRdnnx6c, uint3Xo9AJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY1FdnP2 = await LIBERAPAY.new({from: accounts[1]});
		const uint7036Ra = BigInt("1873")
		const addressNnuzG4n = accounts[4]
		const uintcIglFL = BigInt("1610")
		const addressa3LvNpI = accounts[4]
		const uintpZOu7Il = BigInt("7")
		const uintWvuG4jB = BigInt("1387")
		const addressRHYQKWz = accounts[1]
		const uintXLrWKzx = BigInt("1973")
		const addresst5S4ncX = accounts[0]
		const addressRSeP9nl = accounts[5]
		const boolRJd5Pt = await LIBERAPAY1FdnP2.increaseAllowance.call(addressNnuzG4n, uint7036Ra, {from: accounts[2]});
		const boolcApvbSy = await LIBERAPAY1FdnP2.increaseAllowance.call(addressa3LvNpI, uintcIglFL, {from: accounts[4]});
		const boolvVcDL5J = await LIBERAPAY1FdnP2.lock.call(addressRHYQKWz, uintWvuG4jB, uintpZOu7Il, {from: accounts[1]});
//		const boolzdVcXYb = await LIBERAPAY1FdnP2.transferFrom.call(addressRSeP9nl, addresst5S4ncX, uintXLrWKzx, {from: accounts[4]});

		assert.equal(boolRJd5Pt, true)
		assert.equal(boolcApvbSy, true)
		assert.equal(boolvVcDL5J, true)
		await expect(LIBERAPAY1FdnP2.transferFrom.call(addressRSeP9nl, addresst5S4ncX, uintXLrWKzx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY1FdnP2 = await LIBERAPAY.new({from: accounts[1]});
		const uintSAYO9cd = BigInt("517")
		const addressRG68UO1 = accounts[4]
		const addressODrEMNS = accounts[1]
		const addressHfpMluI = accounts[3]
		const uintfB0insT = BigInt("93")
		const addresspXIFdIK = accounts[3]
//		const boolu6uhjeP = await LIBERAPAY1FdnP2.mint.call(addressRG68UO1, uintSAYO9cd, {from: accounts[1]});
//		const uint256TbhnDMM = await LIBERAPAY1FdnP2.currentBalanceOf.call(addressODrEMNS, {from: accounts[1]});
//		const boolvzaqzFr = await LIBERAPAY1FdnP2.freezeAccount.call(addressHfpMluI, {from: accounts[1]});
//		await LIBERAPAY1FdnP2.showLockState.call(addresspXIFdIK, uintfB0insT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAY1FdnP2.mint.call(addressRG68UO1, uintSAYO9cd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY1FdnP2 = await LIBERAPAY.new({from: accounts[1]});
		const uintSrazMm1 = BigInt("498")
		const address0M9Qmr = accounts[1]
		const addresspvfSNA5 = accounts[2]
		const uintDMJC1Ov = BigInt("1061")
		const addressJhOgnho = accounts[3]
		const uintfCRpBmJ = BigInt("1565")
		const addressdwmFOQI = accounts[1]
		const addressQ03lkvH = accounts[0]
//		await LIBERAPAY1FdnP2.showLockState.call(address0M9Qmr, uintSrazMm1, {from: accounts[5]});
//		const uint256FzzNzbI = await LIBERAPAY1FdnP2.balanceOf.call(addresspvfSNA5, {from: accounts[4]});
//		await LIBERAPAY1FdnP2.pause.call({from: accounts[1]});
//		const boolCJtFOma = await LIBERAPAY1FdnP2.transfer.call(addressJhOgnho, uintDMJC1Ov, {from: accounts[4]});
//		const boolbl9BpvP = await LIBERAPAY1FdnP2.transferFrom.call(addressQ03lkvH, addressdwmFOQI, uintfCRpBmJ, {from: accounts[2]});

		await expect(LIBERAPAY1FdnP2.showLockState.call(address0M9Qmr, uintSrazMm1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})