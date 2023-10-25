const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPhGxbUj = await DSP.new({from: accounts[4]});
		const address6oxfw0 = accounts[1]
		const addressWQV8smP = accounts[3]
		const addressRqPMBdx = accounts[5]
		const uintdmqDIoi = BigInt("576")
		const uintJyaRk3a = BigInt("666")
		const addressJ1FPRst = accounts[2]
		const address6vjJ9V = accounts[3]
		const bool52BohG = await DSPhGxbUj.freezeAccount.call(address6oxfw0, {from: "0x0000000000000000000000000000000000000001"});
		const booltivKoTU = await DSPhGxbUj.freezeAccount.call(addressWQV8smP, {from: accounts[3]});
		const boolYUtaQI6 = await DSPhGxbUj.freezeAccount.call(addressRqPMBdx, {from: accounts[3]});
		const boolkgXss1g = await DSPhGxbUj.transferWithLock.call(addressJ1FPRst, uintJyaRk3a, uintdmqDIoi, {from: accounts[0]});
		const addresseW3IxoE = await DSPhGxbUj.removePauser.call(address6vjJ9V, {from: accounts[1]});

		await expect(DSPhGxbUj.freezeAccount.call(address6oxfw0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPdQmMMD = await DSP.new({from: accounts[3]});
		const uintjEXpbqu = BigInt("846")
		const addressndeBSlI = accounts[5]
		const addressbYuqIgK = accounts[2]
		const addressJIAz59U = accounts[3]
		const addresslPv0K70 = accounts[0]
		const uintJmq2qRs = BigInt("1254")
		const addressERu9vXP = accounts[1]
		const uintdvvbWfE = BigInt("785")
		const addressTNfiyd = accounts[1]
		const addressQXh9Cu = accounts[1]
		const uinthR0E6Zf = BigInt("13")
		const addressbpJtqb1 = accounts[0]
		const boolG9hcRFL = await DSPdQmMMD.transferFrom.call(addressbYuqIgK, addressndeBSlI, uintjEXpbqu, {from: accounts[4]});
		const addressbqlS7VC = await DSPdQmMMD.addPauser.call(addressJIAz59U, {from: accounts[4]});
		const addressfk5GXdV = await DSPdQmMMD.transferOwnership.call(addresslPv0K70, {from: accounts[4]});
		const boolNWEip7m = await DSPdQmMMD.increaseAllowance.call(addressERu9vXP, uintJmq2qRs, {from: accounts[2]});
		const boolmJiOHV = await DSPdQmMMD.transferFrom.call(addressQXh9Cu, addressTNfiyd, uintdvvbWfE, {from: accounts[2]});
		const boolvZgN7QD = await DSPdQmMMD.transfer.call(addressbpJtqb1, uinthR0E6Zf, {from: accounts[5]});

		await expect(DSPdQmMMD.transferFrom.call(addressbYuqIgK, addressndeBSlI, uintjEXpbqu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPaauUgje = await DSP.new({from: accounts[3]});
		const uintNJeMHZ1 = BigInt("1473")
		const addressMCig2pz = accounts[0]
		const uintj4GX1v9 = BigInt("1713")
		const addresssxxsUgQ = accounts[1]
		const addressxXBWukW = accounts[0]
		const boolc1i2Hld = await DSPaauUgje.transfer.call(addressMCig2pz, uintNJeMHZ1, {from: accounts[3]});
		const boolfNqvmDa = await DSPaauUgje.burnFrombyOwner.call(addresssxxsUgQ, uintj4GX1v9, {from: accounts[4]});
		const boolf69IrtX = await DSPaauUgje.freezeAccount.call(addressxXBWukW, {from: accounts[1]});
		await DSPaauUgje.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolc1i2Hld, true)
		await expect(DSPaauUgje.burnFrombyOwner.call(addresssxxsUgQ, uintj4GX1v9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPwUbepo1 = await DSP.new({from: accounts[3]});
		await DSPwUbepo1.onlyOwner.call({from: accounts[3]});
		await DSPwUbepo1.whenPaused.call({from: accounts[1]});

		await expect(DSPwUbepo1.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringkBTvPJu = "5waI6EAjGF1nbVbxvcAakxtmdxBEXmPQ7"
		const stringDouUhjw = "uaXwYgkp1Uv27g2woHYA0Qh1chOwK8J4Th4SvdYkG2FLvSqaW7jcoCP6"
		const uintvX6bOP5 = BigInt("98")
		const DSPGUhMgDu = await DSP.new(stringkBTvPJu, stringDouUhjw, uintvX6bOP5, {from: accounts[2]});
		const addressJJRxQJD = accounts[5]
		const uintC91hNqm = BigInt("1298")
		const addressd4CbEby = accounts[4]
		const uintDgolZf = BigInt("726")
		const addressDJ3wOe = accounts[4]
		await DSPGUhMgDu.renouncePauser.call({from: accounts[2]});
		const addressMP9lIyR = await DSPGUhMgDu.notFrozen.call(addressJJRxQJD, {from: accounts[2]});
		const booljQ0m5hj = await DSPGUhMgDu.mint.call(addressd4CbEby, uintC91hNqm, {from: accounts[3]});
		await DSPGUhMgDu.whenNotPaused.call({from: accounts[1]});
		const booloLYbYGO = await DSPGUhMgDu.mint.call(addressDJ3wOe, uintDgolZf, {from: accounts[0]});
		await DSPGUhMgDu.pause.call({from: accounts[4]});
	});

	it('test for DSP', async () => {
		const DSPR8edtCQ = await DSP.new({from: accounts[1]});
		const addresshlP7wD = "0x0000000000000000000000000000000000000001"
		const addressamsJZw = accounts[4]
		const addressAQEYLk8 = "0x0000000000000000000000000000000000000001"
		const addressFJJOxIv = accounts[5]
		const addressmRXacOK = await DSPR8edtCQ.upgradeTo.call(addresshlP7wD, {from: accounts[1]});
		const uint256btLyqen = await DSPR8edtCQ.allowance.call(addressAQEYLk8, addressamsJZw, {from: "0x0000000000000000000000000000000000000001"});
		const boolSwRYzRd = await DSPR8edtCQ.isOwner.call(addressFJJOxIv, {from: accounts[1]});
		await DSPR8edtCQ.unpause.call({from: accounts[3]});

		assert.equal(boolSwRYzRd, false)
		assert.equal(uint256btLyqen, BigInt("0"))
		await expect(DSPR8edtCQ.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPaauUgje = await DSP.new({from: accounts[3]});
		const uintJBtGP8U = BigInt("1473")
		const addressSCdqaRp = accounts[0]
		const uintLOhvAFT = BigInt("1713")
		const addresspjVAdMk = accounts[1]
		const boolc1i2Hld = await DSPaauUgje.transfer.call(addressSCdqaRp, uintJBtGP8U, {from: accounts[3]});
		const stringStJqTv = await DSPaauUgje.name.call({from: accounts[4]});
		const boolfNqvmDa = await DSPaauUgje.burnFrombyOwner.call(addresspjVAdMk, uintLOhvAFT, {from: accounts[4]});
		await DSPaauUgje.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolc1i2Hld, true)
		assert.equal(stringStJqTv, "DSP")
		await expect(DSPaauUgje.burnFrombyOwner.call(addresspjVAdMk, uintLOhvAFT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrxe6h0Q = await DSP.new({from: accounts[0]});
		const uint334zfY = BigInt("1921")
		const uintxk9syks = BigInt("844")
		const addresstvZYxLR = "0x0000000000000000000000000000000000000001"
		const boolvEvBF2A = await DSPrxe6h0Q.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256l4wwarX = await DSPrxe6h0Q.totalSupply.call({from: accounts[0]});
		const booll1Lfy2C = await DSPrxe6h0Q.transferWithLock.call(addresstvZYxLR, uintxk9syks, uint334zfY, {from: accounts[0]});

		assert.equal(booll1Lfy2C, true)
		assert.equal(boolvEvBF2A, false)
		assert.equal(uint256l4wwarX, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPwUbepo1 = await DSP.new({from: accounts[3]});
		const uintK4HepH7 = BigInt("617")
		const addressVJ1IuT = accounts[3]
		await DSPwUbepo1.f.call({from: accounts[1]});
		await DSPwUbepo1.whenPaused.call({from: accounts[1]});
		const boolNoB5D1 = await DSPwUbepo1.approve.call(addressVJ1IuT, uintK4HepH7, {from: accounts[0]});

		await expect(DSPwUbepo1.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPR8edtCQ = await DSP.new({from: accounts[1]});
		const uintWy978Zo = BigInt("1246")
		const addressBfLhqE1 = accounts[4]
		const addressuakPgg1 = accounts[5]
		const boolwJtNhLc = await DSPR8edtCQ.decreaseAllowance.call(addressBfLhqE1, uintWy978Zo, {from: accounts[2]});
		const boolSwRYzRd = await DSPR8edtCQ.isOwner.call(addressuakPgg1, {from: accounts[1]});
		await DSPR8edtCQ.unpause.call({from: accounts[3]});

		await expect(DSPR8edtCQ.decreaseAllowance.call(addressBfLhqE1, uintWy978Zo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtc8p8g = await DSP.new({from: accounts[3]});
		const uintnYEASpZ = BigInt("1461")
		const addressOyRBlk1 = accounts[1]
		const addressP3RTNUo = accounts[0]
		const stringhPR9O1j = await DSPtc8p8g.name.call({from: accounts[3]});
		const stringFnQHsjC = await DSPtc8p8g.name.call({from: accounts[0]});
		const stringCTpoMkc = await DSPtc8p8g.name.call({from: accounts[4]});
		const boolO40aUq = await DSPtc8p8g.approve.call(addressOyRBlk1, uintnYEASpZ, {from: accounts[3]});
		const uint256w40UsRe = await DSPtc8p8g.balanceOf.call(addressP3RTNUo, {from: accounts[1]});

		assert.equal(boolO40aUq, true)
		assert.equal(stringCTpoMkc, "DSP")
		assert.equal(stringFnQHsjC, "DSP")
		assert.equal(stringhPR9O1j, "DSP")
		assert.equal(uint256w40UsRe, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPwUbepo1 = await DSP.new({from: accounts[3]});
		const uintu9fYdep = BigInt("382")
		const addressKqN07uJ = accounts[2]
		const boolmTDFvKv = await DSPwUbepo1.unlock.call(addressKqN07uJ, uintu9fYdep, {from: accounts[3]});
		await DSPwUbepo1.whenPaused.call({from: accounts[1]});

		await expect(DSPwUbepo1.unlock.call(addressKqN07uJ, uintu9fYdep, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtc8p8g = await DSP.new({from: accounts[3]});
		const uintaY99axV = BigInt("1461")
		const addressbTwDEF2 = accounts[1]
		const addressgtMOEPe = accounts[0]
		const addressLeb32Sj = accounts[2]
		const addresscNMrSo = accounts[1]
		const stringhPR9O1j = await DSPtc8p8g.name.call({from: accounts[3]});
		const stringiaqhXFm = await DSPtc8p8g.symbol.call({from: accounts[4]});
		const boolO40aUq = await DSPtc8p8g.approve.call(addressbTwDEF2, uintaY99axV, {from: accounts[3]});
		const uint256w40UsRe = await DSPtc8p8g.balanceOf.call(addressgtMOEPe, {from: accounts[1]});
		const uint256izb7h38 = await DSPtc8p8g.allowance.call(addresscNMrSo, addressLeb32Sj, {from: accounts[2]});

		assert.equal(boolO40aUq, true)
		assert.equal(stringhPR9O1j, "DSP")
		assert.equal(stringiaqhXFm, "DSP")
		assert.equal(uint256izb7h38, BigInt("0"))
		assert.equal(uint256w40UsRe, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPBmZv2Qa = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintM3wljRH = BigInt("1930")
		const addressVc88jPq = accounts[5]
		const uintHaSyLzv = BigInt("1985")
		const addressVBsIqu2 = accounts[3]
		const addressXuQ957f = accounts[2]
		await DSPBmZv2Qa.whenPaused.call({from: accounts[0]});
		const boolD9VrnFH = await DSPBmZv2Qa.mint.call(addressVc88jPq, uintM3wljRH, {from: accounts[0]});
		await DSPBmZv2Qa.onlyOwner.call({from: accounts[0]});
		const boolGe5Mn0K = await DSPBmZv2Qa.transferFrom.call(addressXuQ957f, addressVBsIqu2, uintHaSyLzv, {from: accounts[1]});
		await DSPBmZv2Qa.onlyNewOwner.call({from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPwUbepo1 = await DSP.new({from: accounts[3]});
		const uintVnQFPZy = BigInt("452")
		const addresssJZJGaC = accounts[5]
		const addressSoZzyzZ = accounts[3]
		const uint8yPIP5zp = await DSPwUbepo1.decimals.call({from: accounts[4]});
		const boolJCR0aBo = await DSPwUbepo1.transferFrom.call(addressSoZzyzZ, addresssJZJGaC, uintVnQFPZy, {from: accounts[3]});
		await DSPwUbepo1.whenPaused.call({from: accounts[1]});

		assert.equal(uint8yPIP5zp, BigInt("18"))
		await expect(DSPwUbepo1.transferFrom.call(addressSoZzyzZ, addresssJZJGaC, uintVnQFPZy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtc8p8g = await DSP.new({from: accounts[3]});
		const addresswlbW6Ue = accounts[2]
		const addressB3amXR = accounts[4]
		const addressBt1hjeq = accounts[3]
		const uintrsgN3EK = BigInt("894")
		const addressd3MF8E = accounts[4]
		const uint256w40UsRe = await DSPtc8p8g.balanceOf.call(addresswlbW6Ue, {from: accounts[1]});
		const boolV8L7EO = await DSPtc8p8g.paused.call({from: accounts[1]});
		const addressBfczfpX = await DSPtc8p8g.transferOwnership.call(addressB3amXR, {from: accounts[3]});
		const bool6TSHBL = await DSPtc8p8g.freezeAccount.call(addressBt1hjeq, {from: accounts[0]});
		const bools0Zbspp = await DSPtc8p8g.transfer.call(addressd3MF8E, uintrsgN3EK, {from: accounts[3]});

		assert.equal(boolV8L7EO, false)
		assert.equal(uint256w40UsRe, BigInt("0"))
		await expect(DSPtc8p8g.freezeAccount.call(addressBt1hjeq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPwUbepo1 = await DSP.new({from: accounts[3]});
		const uintMeBlhzS = BigInt("736")
		const addressMzEnNnP = accounts[3]
		const uintj5CY39r = BigInt("382")
		const addressLFXX34L = accounts[2]
		const uint256HZrtKjh = await DSPwUbepo1.totalSupply.call({from: accounts[3]});
		const boolfvmSY8a = await DSPwUbepo1.increaseAllowance.call(addressMzEnNnP, uintMeBlhzS, {from: accounts[2]});
		const boolmTDFvKv = await DSPwUbepo1.unlock.call(addressLFXX34L, uintj5CY39r, {from: accounts[3]});

		assert.equal(boolfvmSY8a, true)
		assert.equal(uint256HZrtKjh, BigInt("100000000000000000000000000000"))
		await expect(DSPwUbepo1.unlock.call(addressLFXX34L, uintj5CY39r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPR8edtCQ = await DSP.new({from: accounts[1]});
		const addresshNHuzEX = accounts[1]
		const addressUAJQ96N = accounts[0]
		const boolNbM1Kq = await DSPR8edtCQ.isOwner.call(addresshNHuzEX, {from: accounts[3]});
		await DSPR8edtCQ.unpause.call({from: accounts[3]});
		const boolMUad3T8 = await DSPR8edtCQ.isOwner.call(addressUAJQ96N, {from: accounts[2]});

		assert.equal(boolNbM1Kq, true)
		await expect(DSPR8edtCQ.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtc8p8g = await DSP.new({from: accounts[3]});
		const addressnKkll6h = accounts[4]
		const addressuyoff3 = accounts[2]
		const boolh4GIeWw = await DSPtc8p8g.isPauser.call(addressnKkll6h, {from: accounts[2]});
		await DSPtc8p8g.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256w40UsRe = await DSPtc8p8g.balanceOf.call(addressuyoff3, {from: accounts[1]});
		const uint8s0Jhcu2 = await DSPtc8p8g.decimals.call({from: accounts[2]});

		assert.equal(boolh4GIeWw, false)
		await expect(DSPtc8p8g.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtc8p8g = await DSP.new({from: accounts[3]});
		const addressOszUbs = accounts[2]
		const uinthBZyzxU = BigInt("372")
		const addressOS7wlKz = accounts[3]
		const uintdZYuzEN = BigInt("1278")
		const addresswYkxsBz = accounts[0]
		const uint256w40UsRe = await DSPtc8p8g.balanceOf.call(addressOszUbs, {from: accounts[1]});
		const boolzLn7eut = await DSPtc8p8g.mint.call(addressOS7wlKz, uinthBZyzxU, {from: accounts[3]});
		const boolhJiqAd4 = await DSPtc8p8g.transfer.call(addresswYkxsBz, uintdZYuzEN, {from: accounts[3]});

		assert.equal(boolhJiqAd4, true)
		assert.equal(boolzLn7eut, true)
		assert.equal(uint256w40UsRe, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPtc8p8g = await DSP.new({from: accounts[3]});
		const uintBzFMlQ = BigInt("1153")
		const uintW8kbH3P = BigInt("1126")
		const addressXsgYjut = accounts[3]
		const addresszRkjlb9 = accounts[1]
		const addressVxlVIvQ = accounts[2]
		const boolWJpuiiP = await DSPtc8p8g.lock.call(addressXsgYjut, uintW8kbH3P, uintBzFMlQ, {from: accounts[3]});
		const boolHCoznax = await DSPtc8p8g.freezeAccount.call(addresszRkjlb9, {from: accounts[2]});
		await DSPtc8p8g.unpause.call({from: accounts[0]});
		const uint256w40UsRe = await DSPtc8p8g.balanceOf.call(addressVxlVIvQ, {from: accounts[1]});

		assert.equal(boolWJpuiiP, true)
		await expect(DSPtc8p8g.freezeAccount.call(addresszRkjlb9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPwUbepo1 = await DSP.new({from: accounts[3]});
		const uintr6OSxxR = BigInt("452")
		const addressx8yDHaH = accounts[5]
		const addressmuduFG1 = accounts[3]
		await DSPwUbepo1.renouncePauser.call({from: accounts[3]});
		const boolJCR0aBo = await DSPwUbepo1.transferFrom.call(addressmuduFG1, addressx8yDHaH, uintr6OSxxR, {from: accounts[3]});
		await DSPwUbepo1.whenPaused.call({from: accounts[1]});

		await expect(DSPwUbepo1.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtc8p8g = await DSP.new({from: accounts[3]});
		const addressASseOou = accounts[2]
		const uintJx17kA4 = BigInt("1802")
		const uintEFZRLDJ = BigInt("1246")
		const addresssEC4G2J = accounts[2]
		const uint256w40UsRe = await DSPtc8p8g.balanceOf.call(addressASseOou, {from: accounts[1]});
		const boolSPAFMwB = await DSPtc8p8g.lock.call(addresssEC4G2J, uintEFZRLDJ, uintJx17kA4, {from: accounts[3]});

		assert.equal(uint256w40UsRe, BigInt("0"))
		await expect(DSPtc8p8g.lock.call(addresssEC4G2J, uintEFZRLDJ, uintJx17kA4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPwUbepo1 = await DSP.new({from: accounts[3]});
		const addressdLUuaY = accounts[3]
		const addressgk6H01o = accounts[0]
		const uintqomCqQx = BigInt("332")
		const addressslGm2T9 = accounts[2]
		const uintgBRVThO = BigInt("224")
		const address4CKdhJ = "0x0000000000000000000000000000000000000001"
		const uint256ZcKVaSS = await DSPwUbepo1.totalSupply.call({from: accounts[5]});
		const uint256d5wvKQh = await DSPwUbepo1.totalSupply.call({from: accounts[0]});
		const uint256b2W3Hr0 = await DSPwUbepo1.balanceOf.call(addressdLUuaY, {from: accounts[5]});
		const addressIncIyW2 = await DSPwUbepo1.removePauser.call(addressgk6H01o, {from: accounts[3]});
		const boolmTDFvKv = await DSPwUbepo1.unlock.call(addressslGm2T9, uintqomCqQx, {from: accounts[3]});
		const boolJkEOKmV = await DSPwUbepo1.decreaseAllowance.call(address4CKdhJ, uintgBRVThO, {from: accounts[0]});

		assert.equal(uint256ZcKVaSS, BigInt("100000000000000000000000000000"))
		assert.equal(uint256b2W3Hr0, BigInt("100000000000000000000000000000"))
		assert.equal(uint256d5wvKQh, BigInt("100000000000000000000000000000"))
		await expect(DSPwUbepo1.removePauser.call(addressgk6H01o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPwUbepo1 = await DSP.new({from: accounts[3]});
		const uintd3fjoi6 = BigInt("735")
		const addressfNsjFSS = accounts[4]
		const addressRcBtsXP = accounts[3]
		const uint0ATyVQ = BigInt("1078")
		const addressAteiHxY = accounts[2]
		const addressVPVS0Eh = accounts[3]
		const uintPEKWxnx = BigInt("223")
		const addressHp9VsFN = "0x0000000000000000000000000000000000000001"
		const boolMEAZxKh = await DSPwUbepo1.burnFrombyOwner.call(addressfNsjFSS, uintd3fjoi6, {from: accounts[3]});
		const uint256b2W3Hr0 = await DSPwUbepo1.balanceOf.call(addressRcBtsXP, {from: accounts[5]});
		const boolmTDFvKv = await DSPwUbepo1.unlock.call(addressAteiHxY, uint0ATyVQ, {from: accounts[3]});
		const bool7Js4wV = await DSPwUbepo1.freezeAccount.call(addressVPVS0Eh, {from: accounts[4]});
		const boolJkEOKmV = await DSPwUbepo1.decreaseAllowance.call(addressHp9VsFN, uintPEKWxnx, {from: accounts[0]});

		await expect(DSPwUbepo1.burnFrombyOwner.call(addressfNsjFSS, uintd3fjoi6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtc8p8g = await DSP.new({from: accounts[3]});
		const addressGGzPPZe = accounts[1]
		const addressBi002dJ = accounts[2]
		const addressH0yYWGp = await DSPtc8p8g.addPauser.call(addressGGzPPZe, {from: accounts[3]});
		const uint256w40UsRe = await DSPtc8p8g.balanceOf.call(addressBi002dJ, {from: accounts[1]});

		assert.equal(uint256w40UsRe, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPwUbepo1 = await DSP.new({from: accounts[3]});
		const uintVOXv8jM = BigInt("1723")
		const addressC4u3V6 = accounts[5]
		const addressAJLJeeb = accounts[3]
		await DSPwUbepo1.pause.call({from: accounts[3]});
		const boolJCR0aBo = await DSPwUbepo1.transferFrom.call(addressAJLJeeb, addressC4u3V6, uintVOXv8jM, {from: accounts[3]});

		await expect(DSPwUbepo1.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})