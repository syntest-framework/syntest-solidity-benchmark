const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringjhQhSti = "2ELknFTKqHhDn"
		const stringvZm6xnJ = "EU2qvDLWrHzAz5S8daOklO9Q1Q3OLuYfwEKtJoLagDTqFG37x4lKJf6NEJc65hwV4dmw0ItSHx2KoSY824AU6XW9iuUiM77oiJp"
		const uintv7nFsFS = BigInt("0")
		const DSPe4oMm1G = await DSP.new(stringjhQhSti, stringvZm6xnJ, uintv7nFsFS, {from: accounts[4]});
		const addressTwdDs9t = accounts[1]
		const uintHWKfQwI = BigInt("883")
		const uintPPxozY1 = BigInt("1565")
		const addressXVDrwco = accounts[3]
		const uintcDMQqZo = BigInt("818")
		const addressyWP3iAv = accounts[3]
		const boollnr15h = await DSPe4oMm1G.unfreezeAccount.call(addressTwdDs9t, {from: accounts[3]});
		const bool2ONzjx = await DSPe4oMm1G.transferWithLock.call(addressXVDrwco, uintPPxozY1, uintHWKfQwI, {from: accounts[0]});
		const booliMl9POb = await DSPe4oMm1G.decreaseAllowance.call(addressyWP3iAv, uintcDMQqZo, {from: accounts[0]});
		await DSPe4oMm1G.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
		await DSPe4oMm1G.pause.call({from: accounts[1]});
		const uint256SjSZ6Hf = await DSPe4oMm1G.totalSupply.call({from: accounts[3]});
	});

	it('test for DSP', async () => {
		const DSPaNrxPea = await DSP.new({from: accounts[4]});
		const addresstRUelR6 = accounts[5]
		const addressOXjp4rG = accounts[1]
//		const addressvDpM29L = await DSPaNrxPea.upgradeTo.call(addresstRUelR6, {from: accounts[1]});
//		const boolYDEFjPL = await DSPaNrxPea.freezeAccount.call(addressOXjp4rG, {from: accounts[4]});

		await expect(DSPaNrxPea.upgradeTo.call(addresstRUelR6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPsRhHZe = await DSP.new({from: accounts[0]});
		const addressYVEWz71 = accounts[4]
		const uintQUdbX2J = BigInt("1124")
		const address83br8D = accounts[3]
		const addressTGad5c = accounts[2]
		const addressNhWUTNw = await DSPsRhHZe.transferOwnership.call(addressYVEWz71, {from: accounts[0]});
//		await DSPsRhHZe.whenPaused.call({from: accounts[3]});
//		const boolScyl2RW = await DSPsRhHZe.approve.call(address83br8D, uintQUdbX2J, {from: accounts[3]});
//		await DSPsRhHZe.whenPaused.call({from: accounts[5]});
//		await DSPsRhHZe.whenPaused.call({from: accounts[4]});
//		const boolIpFfAEr = await DSPsRhHZe.isOwner.call(addressTGad5c, {from: accounts[0]});

		await expect(DSPsRhHZe.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjQIPZZ = await DSP.new({from: accounts[3]});
		const addressAsMBejr = accounts[4]
//		const boolkd2EFmm = await DSPjQIPZZ.freezeAccount.call(addressAsMBejr, {from: accounts[0]});
//		await DSPjQIPZZ.renouncePauser.call({from: accounts[0]});

		await expect(DSPjQIPZZ.freezeAccount.call(addressAsMBejr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const addressJVw9CUv = accounts[4]
		const uint256GVNy4yI = await DSPuY2WMCD.balanceOf.call(addressJVw9CUv, {from: accounts[0]});
		const boolgkCfL2E = await DSPuY2WMCD.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8NBZFzaX = await DSPuY2WMCD.decimals.call({from: accounts[3]});
//		await DSPuY2WMCD.renouncePauser.call({from: accounts[5]});

		assert.equal(boolgkCfL2E, false)
		assert.equal(uint256GVNy4yI, BigInt("100000000000000000000000000000"))
		assert.equal(uint8NBZFzaX, BigInt("18"))
		await expect(DSPuY2WMCD.renouncePauser.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const addressp8OELyq = accounts[5]
		const uintiAh682Q = BigInt("677")
		const addresstvarWup = "0x0000000000000000000000000000000000000001"
		const addressXfKF4x7 = accounts[2]
		const uint256GVNy4yI = await DSPuY2WMCD.balanceOf.call(addressp8OELyq, {from: accounts[0]});
		const uint8NBZFzaX = await DSPuY2WMCD.decimals.call({from: accounts[3]});
//		const boolWppqAlz = await DSPuY2WMCD.transferFrom.call(addressXfKF4x7, addresstvarWup, uintiAh682Q, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256GVNy4yI, BigInt("0"))
		assert.equal(uint8NBZFzaX, BigInt("18"))
		await expect(DSPuY2WMCD.transferFrom.call(addressXfKF4x7, addresstvarWup, uintiAh682Q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjQIPZZ = await DSP.new({from: accounts[3]});
		const uintovkakV = BigInt("1370")
		const addressmB6jmUL = "0x0000000000000000000000000000000000000001"
		const addressM3OaclP = accounts[6]
//		const boolC3WW1u3 = await DSPjQIPZZ.decreaseAllowance.call(addressmB6jmUL, uintovkakV, {from: accounts[2]});
//		const boolkd2EFmm = await DSPjQIPZZ.freezeAccount.call(addressM3OaclP, {from: accounts[0]});
//		await DSPjQIPZZ.renouncePauser.call({from: accounts[0]});

		await expect(DSPjQIPZZ.decreaseAllowance.call(addressmB6jmUL, uintovkakV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const addressFC2ABJF = accounts[4]
		const uintpMzpMPo = BigInt("1600")
		const addressXbpy9kT = accounts[4]
		const uint256GVNy4yI = await DSPuY2WMCD.balanceOf.call(addressFC2ABJF, {from: accounts[0]});
//		const boolsPXCJXc = await DSPuY2WMCD.transfer.call(addressXbpy9kT, uintpMzpMPo, {from: accounts[0]});
//		await DSPuY2WMCD.unpause.call({from: accounts[4]});
//		const uint8NBZFzaX = await DSPuY2WMCD.decimals.call({from: accounts[3]});
//		await DSPuY2WMCD.renouncePauser.call({from: accounts[5]});

		assert.equal(uint256GVNy4yI, BigInt("100000000000000000000000000000"))
		await expect(DSPuY2WMCD.transfer.call(addressXbpy9kT, uintpMzpMPo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjQIPZZ = await DSP.new({from: accounts[3]});
		const uintFkgZozT = BigInt("1869")
		const addresskRyGemr = accounts[0]
		const addressMcj0mku = accounts[6]
		const boolsTKNvo6 = await DSPjQIPZZ.increaseAllowance.call(addresskRyGemr, uintFkgZozT, {from: accounts[1]});
//		const boolkd2EFmm = await DSPjQIPZZ.freezeAccount.call(addressMcj0mku, {from: accounts[0]});

		assert.equal(boolsTKNvo6, true)
		await expect(DSPjQIPZZ.freezeAccount.call(addressMcj0mku, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPVBDRi0Y = await DSP.new({from: accounts[2]});
		const uintEl1DVed = BigInt("584")
		const addressi6XAO0 = accounts[4]
		const uintKoXlQZD = BigInt("1919")
		const addressB6vLrdd = accounts[3]
		const addressjreiVH6 = accounts[1]
//		const boolXwIkqBc = await DSPVBDRi0Y.burnFrombyOwner.call(addressi6XAO0, uintEl1DVed, {from: accounts[2]});
//		await DSPVBDRi0Y.pause.call({from: accounts[1]});
//		const boolN7TQmaN = await DSPVBDRi0Y.transferFrom.call(addressjreiVH6, addressB6vLrdd, uintKoXlQZD, {from: accounts[2]});

		await expect(DSPVBDRi0Y.burnFrombyOwner.call(addressi6XAO0, uintEl1DVed, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const addresswRux73 = accounts[5]
		const uintwA6LBMS = BigInt("1914")
		const addressbik8YaL = "0x0000000000000000000000000000000000000001"
		const addressXELS0WD = accounts[5]
		const addressK2Qs0tE = accounts[2]
		const uint256GVNy4yI = await DSPuY2WMCD.balanceOf.call(addresswRux73, {from: accounts[0]});
//		const boolkM2uORS = await DSPuY2WMCD.unlock.call(addressbik8YaL, uintwA6LBMS, {from: accounts[4]});
//		const uint256rFBJCSZ = await DSPuY2WMCD.allowance.call(addressK2Qs0tE, addressXELS0WD, {from: "0x0000000000000000000000000000000000000001"});
//		await DSPuY2WMCD.renouncePauser.call({from: accounts[5]});

		assert.equal(uint256GVNy4yI, BigInt("0"))
		await expect(DSPuY2WMCD.unlock.call(addressbik8YaL, uintwA6LBMS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const addresss2pM2t = accounts[3]
		const uintp80UlX = BigInt("677")
		const addressL4TFyCk = "0x0000000000000000000000000000000000000002"
		const addressXSpXdRK = accounts[2]
		const uint8NBZFzaX = await DSPuY2WMCD.decimals.call({from: accounts[3]});
//		const boolLllIqv9 = await DSPuY2WMCD.unfreezeAccount.call(addresss2pM2t, {from: accounts[4]});
//		const boolWppqAlz = await DSPuY2WMCD.transferFrom.call(addressXSpXdRK, addressL4TFyCk, uintp80UlX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8NBZFzaX, BigInt("18"))
		await expect(DSPuY2WMCD.unfreezeAccount.call(addresss2pM2t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuLQin5s = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmYMJk9t = BigInt("826")
		const addressDvtQaQ4 = accounts[0]
		const addressiv7J1qA = accounts[5]
		const addressSNRSx6a = accounts[2]
		const uintWAwbbj = BigInt("906")
		const uintUpGRx0q = BigInt("192")
		const addressx6E2JOc = accounts[0]
		const boolhDq5ggw = await DSPuLQin5s.transfer.call(addressDvtQaQ4, uintmYMJk9t, {from: accounts[2]});
		const bool0Iova0 = await DSPuLQin5s.freezeAccount.call(addressiv7J1qA, {from: accounts[2]});
		const uint256cO0wbx6 = await DSPuLQin5s.balanceOf.call(addressSNRSx6a, {from: accounts[0]});
		const boolru2ylp = await DSPuLQin5s.transferWithLock.call(addressx6E2JOc, uintUpGRx0q, uintWAwbbj, {from: accounts[4]});
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const addressBO9ljTJ = accounts[6]
		const uint256GVNy4yI = await DSPuY2WMCD.balanceOf.call(addressBO9ljTJ, {from: accounts[0]});
		const uint256RrlqCEg = await DSPuY2WMCD.totalSupply.call({from: accounts[1]});
//		await DSPuY2WMCD.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256GVNy4yI, BigInt("0"))
		assert.equal(uint256RrlqCEg, BigInt("100000000000000000000000000000"))
		await expect(DSPuY2WMCD.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const uintxZIEcs = BigInt("1154")
		const addressVC3Zm5P = accounts[2]
		const addresswiAhkLY = accounts[1]
		const addressXRXlkL = accounts[6]
		const addressWrScGyH = accounts[3]
		const uintMNg1Tic = BigInt("13")
		const addressncwD5by = "0x0000000000000000000000000000000000000001"
		const addressRPlLoaI = accounts[1]
		const stringRsq2Z78 = await DSPuY2WMCD.name.call({from: accounts[4]});
//		const boolPol2U2M = await DSPuY2WMCD.transfer.call(addressVC3Zm5P, uintxZIEcs, {from: accounts[1]});
//		const boolmKR6WkU = await DSPuY2WMCD.freezeAccount.call(addresswiAhkLY, {from: accounts[1]});
//		const uint256GVNy4yI = await DSPuY2WMCD.balanceOf.call(addressXRXlkL, {from: accounts[0]});
//		const boolWJZDKSx = await DSPuY2WMCD.isPauser.call(addressWrScGyH, {from: accounts[0]});
//		const boolR60Odl = await DSPuY2WMCD.transferFrom.call(addressRPlLoaI, addressncwD5by, uintMNg1Tic, {from: accounts[4]});

		assert.equal(stringRsq2Z78, "DSP")
		await expect(DSPuY2WMCD.transfer.call(addressVC3Zm5P, uintxZIEcs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const addressO1iPEwq = accounts[6]
		const addressgq4X7b = accounts[4]
		const uintlXj3BPz = BigInt("177")
		const uint55sE5H = BigInt("1139")
		const addresstqagPP8 = accounts[3]
		const uintXF2s5iF = BigInt("11")
		const addressrfK81UH = "0x0000000000000000000000000000000000000001"
		const addressHAjSv5t = accounts[2]
		const uint256GVNy4yI = await DSPuY2WMCD.balanceOf.call(addressO1iPEwq, {from: accounts[0]});
		const boolDSSpmOA = await DSPuY2WMCD.isOwner.call(addressgq4X7b, {from: accounts[2]});
//		const booltzB3CSm = await DSPuY2WMCD.lock.call(addresstqagPP8, uint55sE5H, uintlXj3BPz, {from: accounts[0]});
//		const boolR60Odl = await DSPuY2WMCD.transferFrom.call(addressHAjSv5t, addressrfK81UH, uintXF2s5iF, {from: accounts[4]});

		assert.equal(boolDSSpmOA, true)
		assert.equal(uint256GVNy4yI, BigInt("0"))
		await expect(DSPuY2WMCD.lock.call(addresstqagPP8, uint55sE5H, uintlXj3BPz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const addressMa0OxZ = accounts[4]
		const addressH0LjlaD = accounts[3]
		const uintwwHY9L = BigInt("595")
		const addressyXfYuL8 = accounts[1]
		const uintfqUOrkR = BigInt("1555")
		const addressEHnTRsf = accounts[2]
		const uintwFhtsJ = BigInt("1426")
		const uintazG3yeb = BigInt("860")
		const address8tb7LQ = accounts[4]
		const addressQpG0ahF = accounts[7]
		const uint256zr9VvsN = await DSPuY2WMCD.allowance.call(addressH0LjlaD, addressMa0OxZ, {from: accounts[5]});
//		const boolo4QTg8D = await DSPuY2WMCD.burnFrombyOwner.call(addressyXfYuL8, uintwwHY9L, {from: accounts[4]});
//		const booljVVhQEa = await DSPuY2WMCD.transfer.call(addressEHnTRsf, uintfqUOrkR, {from: accounts[1]});
//		const boolZAiEVS6 = await DSPuY2WMCD.lock.call(address8tb7LQ, uintazG3yeb, uintwFhtsJ, {from: accounts[1]});
//		const uint256GVNy4yI = await DSPuY2WMCD.balanceOf.call(addressQpG0ahF, {from: accounts[0]});

		assert.equal(uint256zr9VvsN, BigInt("0"))
		await expect(DSPuY2WMCD.burnFrombyOwner.call(addressyXfYuL8, uintwwHY9L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const addressey9q3aP = accounts[6]
		const stringjeFX8U8 = await DSPuY2WMCD.symbol.call({from: accounts[2]});
		const uint256GVNy4yI = await DSPuY2WMCD.balanceOf.call(addressey9q3aP, {from: accounts[0]});

		assert.equal(stringjeFX8U8, "DSP")
		assert.equal(uint256GVNy4yI, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const addressGxdD2hp = accounts[5]
		const uinthCoZH0i = BigInt("1144")
		const addressF0J3N1b = accounts[2]
		const uint256GVNy4yI = await DSPuY2WMCD.balanceOf.call(addressGxdD2hp, {from: accounts[0]});
		const boolIdFtBWy = await DSPuY2WMCD.approve.call(addressF0J3N1b, uinthCoZH0i, {from: accounts[1]});

		assert.equal(boolIdFtBWy, true)
		assert.equal(uint256GVNy4yI, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const uintCl7cW9l = BigInt("990")
		const uintApq2RPJ = BigInt("147")
		const addressLq6IVG9 = accounts[0]
		const uintibq6G8c = BigInt("11")
		const addressiSV6al = "0x0000000000000000000000000000000000000001"
		const addressbuYf0iB = accounts[2]
		const uintD4PJf4e = BigInt("304")
		const addressQGefLRR = accounts[0]
		const addressOs82uCu = accounts[4]
//		const boolXON4ejP = await DSPuY2WMCD.lock.call(addressLq6IVG9, uintApq2RPJ, uintCl7cW9l, {from: accounts[4]});
//		const boolR60Odl = await DSPuY2WMCD.transferFrom.call(addressbuYf0iB, addressiSV6al, uintibq6G8c, {from: accounts[4]});
//		const boolalhBjiZ = await DSPuY2WMCD.transferFrom.call(addressOs82uCu, addressQGefLRR, uintD4PJf4e, {from: accounts[1]});

		await expect(DSPuY2WMCD.lock.call(addressLq6IVG9, uintApq2RPJ, uintCl7cW9l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const uintxJklMPS = BigInt("11")
		const addressLP4ukft = "0x0000000000000000000000000000000000000001"
		const addressJXkGqrX = accounts[1]
//		await DSPuY2WMCD.f.call({from: accounts[2]});
//		const stringfbJI7c = await DSPuY2WMCD.name.call({from: accounts[4]});
//		const boolR60Odl = await DSPuY2WMCD.transferFrom.call(addressJXkGqrX, addressLP4ukft, uintxJklMPS, {from: accounts[4]});

		await expect(DSPuY2WMCD.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const addressLnSiorN = accounts[2]
		const addressy9g9ea = accounts[6]
//		const addressQNeKnAA = await DSPuY2WMCD.removePauser.call(addressLnSiorN, {from: accounts[4]});
//		const uint256GVNy4yI = await DSPuY2WMCD.balanceOf.call(addressy9g9ea, {from: accounts[0]});

		await expect(DSPuY2WMCD.removePauser.call(addressLnSiorN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuY2WMCD = await DSP.new({from: accounts[4]});
		const uintyduz242 = BigInt("980")
		const addressDDxxLEL = accounts[4]
		const addressHWf6os = accounts[4]
		const uintmcF86W = BigInt("1556")
		const addresszAGChK3 = accounts[2]
		const boolfRZYGdA = await DSPuY2WMCD.mint.call(addressDDxxLEL, uintyduz242, {from: accounts[4]});
//		const addressEyCNi1P = await DSPuY2WMCD.addPauser.call(addressHWf6os, {from: accounts[4]});
//		const booljVVhQEa = await DSPuY2WMCD.transfer.call(addresszAGChK3, uintmcF86W, {from: accounts[1]});

		assert.equal(boolfRZYGdA, true)
		await expect(DSPuY2WMCD.addPauser.call(addressHWf6os, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})