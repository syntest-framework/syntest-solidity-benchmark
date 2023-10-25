const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringOhBjpxK = "kmGvuPtNqtOOTrdm7cynkhjF5T5Utu4MbkbaWz168xKywFtYcg5w6VnaWtx"
		const stringdHHUaaQ = "O1JyI8gtwcoRSJOIIA1CE8OzxsIExezAuCVTjlZFdkmuxtytfL4acUHu5x"
		const uintnnHyN0v = BigInt("40")
		const DSPpuZHFRD = await DSP.new(stringOhBjpxK, stringdHHUaaQ, uintnnHyN0v, {from: accounts[3]});
		const addressxauqGcz = accounts[4]
		const addressTOTlJsu = accounts[0]
		const uint256dFbSWR8 = await DSPpuZHFRD.balanceOf.call(addressxauqGcz, {from: accounts[4]});
		await DSPpuZHFRD.whenNotPaused.call({from: accounts[0]});
		const addresstVNYXVa = await DSPpuZHFRD.addPauser.call(addressTOTlJsu, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DSP', async () => {
		const DSPIPlz4JG = await DSP.new({from: accounts[2]});
		const uintNw0lk1E = BigInt("1970")
		const addressgVNE7Ll = accounts[3]
		const uintxVZ3Jz = BigInt("1839")
		const addressyfhFYUw = accounts[3]
		const addressLF7eBEp = accounts[3]
		const addresskle5on = accounts[5]
//		const boolJvnEl2 = await DSPIPlz4JG.transfer.call(addressgVNE7Ll, uintNw0lk1E, {from: "0x0000000000000000000000000000000000000001"});
//		const boolh22E3KP = await DSPIPlz4JG.transferFrom.call(addressLF7eBEp, addressyfhFYUw, uintxVZ3Jz, {from: accounts[0]});
//		const boolUsit7L5 = await DSPIPlz4JG.isPauser.call(addresskle5on, {from: accounts[0]});

		await expect(DSPIPlz4JG.transfer.call(addressgVNE7Ll, uintNw0lk1E, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPFzOCMZ7 = await DSP.new({from: accounts[2]});
		const uintnD5PSvr = BigInt("461")
		const addressOthosAK = accounts[3]
		const addressjffCHSk = accounts[1]
//		const boolRhGgLIb = await DSPFzOCMZ7.transferFrom.call(addressjffCHSk, addressOthosAK, uintnD5PSvr, {from: "0x0000000000000000000000000000000000000001"});
//		await DSPFzOCMZ7.f.call({from: accounts[4]});

		await expect(DSPFzOCMZ7.transferFrom.call(addressjffCHSk, addressOthosAK, uintnD5PSvr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPROLbiuU = await DSP.new({from: accounts[3]});
		const uintSNOt0Ax = BigInt("81")
		const uinthgEPpeH = BigInt("1001")
		const addressYUuspml = accounts[4]
		const addressCVCtxfz = accounts[4]
		const addressPnYTNgH = accounts[3]
		const addresso2xqA5l = accounts[0]
//		const boolvhBnrUQ = await DSPROLbiuU.transferWithLock.call(addressYUuspml, uinthgEPpeH, uintSNOt0Ax, {from: accounts[0]});
//		const addressHO5M8BL = await DSPROLbiuU.notFrozen.call(addressCVCtxfz, {from: accounts[5]});
//		const boolNlbbSt4 = await DSPROLbiuU.freezeAccount.call(addressPnYTNgH, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshzMqolj = await DSPROLbiuU.addPauser.call(addresso2xqA5l, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPROLbiuU.transferWithLock.call(addressYUuspml, uinthgEPpeH, uintSNOt0Ax, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPZ9VvXxt = await DSP.new({from: accounts[2]});
		const addressCyryE5o = accounts[5]
		const addressivGePUw = accounts[5]
		const uintYeWIFHH = BigInt("1550")
		const addressqfcWMNL = accounts[2]
		const addresspI4iS9c = accounts[0]
		const uint256YArReBI = await DSPZ9VvXxt.balanceOf.call(addressCyryE5o, {from: accounts[0]});
//		await DSPZ9VvXxt.whenPaused.call({from: accounts[0]});
//		const uint256hHSXMA8 = await DSPZ9VvXxt.balanceOf.call(addressivGePUw, {from: accounts[2]});
//		const boolX4TeXLW = await DSPZ9VvXxt.paused.call({from: accounts[4]});
//		await DSPZ9VvXxt.onlyNewOwner.call({from: accounts[1]});
//		const boolJBcNgDU = await DSPZ9VvXxt.transferFrom.call(addresspI4iS9c, addressqfcWMNL, uintYeWIFHH, {from: accounts[4]});

		assert.equal(uint256YArReBI, BigInt("0"))
		await expect(DSPZ9VvXxt.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPFzOCMZ7 = await DSP.new({from: accounts[2]});
//		await DSPFzOCMZ7.f.call({from: accounts[4]});

		await expect(DSPFzOCMZ7.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPZ9VvXxt = await DSP.new({from: accounts[2]});
		const uint88x6YX = BigInt("1110")
		const uintXBM1yGW = BigInt("1813")
		const addresskY9Pvb5 = accounts[2]
		const addressEaONfNe = accounts[5]
		const addressLCJAwF = accounts[5]
		const uintNWEkts = BigInt("1550")
		const addressyTmcCYt = accounts[2]
		const addressGmyk11A = accounts[0]
		const uintf7q2UCi = BigInt("1514")
		const addresscl7uXDH = accounts[5]
		const addressJZQW3fL = accounts[0]
		const boolFAuquOF = await DSPZ9VvXxt.transferWithLock.call(addresskY9Pvb5, uintXBM1yGW, uint88x6YX, {from: accounts[2]});
		const uint256YArReBI = await DSPZ9VvXxt.balanceOf.call(addressEaONfNe, {from: accounts[0]});
//		await DSPZ9VvXxt.whenPaused.call({from: accounts[0]});
//		const uint256hHSXMA8 = await DSPZ9VvXxt.balanceOf.call(addressLCJAwF, {from: accounts[2]});
//		const boolX4TeXLW = await DSPZ9VvXxt.paused.call({from: accounts[4]});
//		await DSPZ9VvXxt.onlyNewOwner.call({from: accounts[1]});
//		const boolJBcNgDU = await DSPZ9VvXxt.transferFrom.call(addressGmyk11A, addressyTmcCYt, uintNWEkts, {from: accounts[4]});
//		const boolGqdZMxx = await DSPZ9VvXxt.transferFrom.call(addressJZQW3fL, addresscl7uXDH, uintf7q2UCi, {from: accounts[0]});

		assert.equal(boolFAuquOF, true)
		assert.equal(uint256YArReBI, BigInt("0"))
		await expect(DSPZ9VvXxt.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfMyaCxq = await DSP.new({from: accounts[2]});
		const uintEbiH2qD = BigInt("1997")
		const addressJBKB08j = accounts[5]
		const uintf6WFMMc = BigInt("1804")
		const addressFxVXw1Y = accounts[1]
		const addressggAoS9N = accounts[1]
		const uintWkVl2L = BigInt("1290")
		const addressrn6DZLp = accounts[1]
		const boolWBrexYW = await DSPfMyaCxq.transfer.call(addressJBKB08j, uintEbiH2qD, {from: accounts[2]});
//		await DSPfMyaCxq.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolx2W0Sie = await DSPfMyaCxq.unlock.call(addressFxVXw1Y, uintf6WFMMc, {from: accounts[2]});
//		const addressXI44UPs = await DSPfMyaCxq.transferOwnership.call(addressggAoS9N, {from: accounts[1]});
//		const bool0S0thK = await DSPfMyaCxq.mint.call(addressrn6DZLp, uintWkVl2L, {from: accounts[5]});
//		const boolyBxMfXo = await DSPfMyaCxq.acceptOwnership.call({from: accounts[5]});

		assert.equal(boolWBrexYW, true)
		await expect(DSPfMyaCxq.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPROLbiuU = await DSP.new({from: accounts[3]});
		const uintAuwAlq = BigInt("81")
		const uintSipp5Dr = BigInt("1001")
		const addressh9xStq0 = accounts[4]
		const uintNlkvMfI = BigInt("738")
		const addressL6Odovj = accounts[3]
		const addressj6p9ypv = accounts[4]
		const addressUsnG8sx = accounts[3]
		const addressI4pAmg = accounts[0]
		const uint256FcGgzJE = await DSPROLbiuU.totalSupply.call({from: accounts[1]});
//		const boolvhBnrUQ = await DSPROLbiuU.transferWithLock.call(addressh9xStq0, uintSipp5Dr, uintAuwAlq, {from: accounts[0]});
//		const boolSIxwLbQ = await DSPROLbiuU.transfer.call(addressL6Odovj, uintNlkvMfI, {from: accounts[4]});
//		const addressHO5M8BL = await DSPROLbiuU.notFrozen.call(addressj6p9ypv, {from: accounts[5]});
//		const boolNlbbSt4 = await DSPROLbiuU.freezeAccount.call(addressUsnG8sx, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshzMqolj = await DSPROLbiuU.addPauser.call(addressI4pAmg, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256FcGgzJE, BigInt("100000000000000000000000000000"))
		await expect(DSPROLbiuU.transferWithLock.call(addressh9xStq0, uintSipp5Dr, uintAuwAlq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrzyXty7 = await DSP.new({from: accounts[0]});
		const addresskngcH3 = accounts[3]
		const addressbSKEk4 = accounts[1]
		const addressiODENt3 = accounts[1]
		const addressgsHgCRR = accounts[4]
		const uintKZEhQm8 = BigInt("1989")
		const addressz6RvOLp = accounts[3]
		const uint256hKB4qnL = await DSPrzyXty7.allowance.call(addressbSKEk4, addresskngcH3, {from: accounts[5]});
		const uint256Z7bC3vq = await DSPrzyXty7.balanceOf.call(addressiODENt3, {from: accounts[4]});
//		await DSPrzyXty7.f.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressnV5FP1E = await DSPrzyXty7.notFrozen.call(addressgsHgCRR, {from: accounts[4]});
//		const boolXvf0MhB = await DSPrzyXty7.increaseAllowance.call(addressz6RvOLp, uintKZEhQm8, {from: accounts[1]});

		assert.equal(uint256Z7bC3vq, BigInt("0"))
		assert.equal(uint256hKB4qnL, BigInt("0"))
		await expect(DSPrzyXty7.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPIPlz4JG = await DSP.new({from: accounts[2]});
		const uintLfPWYtO = BigInt("1079")
		const addresshmwkrza = accounts[1]
		const uintroU3tYu = BigInt("1970")
		const addresspUsOvIr = accounts[3]
		const addressp0dJ8SX = accounts[7]
		const addressdgwt7cj = accounts[3]
		const boolhrUgu5E = await DSPIPlz4JG.approve.call(addresshmwkrza, uintLfPWYtO, {from: accounts[0]});
//		const boolJvnEl2 = await DSPIPlz4JG.transfer.call(addresspUsOvIr, uintroU3tYu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolUsit7L5 = await DSPIPlz4JG.isPauser.call(addressp0dJ8SX, {from: accounts[0]});
//		const addressN7kqCLX = await DSPIPlz4JG.removePauser.call(addressdgwt7cj, {from: accounts[3]});

		assert.equal(boolhrUgu5E, true)
		await expect(DSPIPlz4JG.transfer.call(addresspUsOvIr, uintroU3tYu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPFzOCMZ7 = await DSP.new({from: accounts[2]});
		const uintTanoxM1 = BigInt("461")
		const addressNY2Urtf = accounts[3]
		const addresslcuKJG = accounts[1]
		const stringv0Ho9G5 = await DSPFzOCMZ7.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		await DSPFzOCMZ7.whenNotPaused.call({from: accounts[1]});
//		const boolRhGgLIb = await DSPFzOCMZ7.transferFrom.call(addresslcuKJG, addressNY2Urtf, uintTanoxM1, {from: "0x0000000000000000000000000000000000000001"});
//		await DSPFzOCMZ7.onlyOwner.call({from: accounts[5]});

		assert.equal(stringv0Ho9G5, "DSP")
		await expect(DSPFzOCMZ7.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPFzOCMZ7 = await DSP.new({from: accounts[2]});
		const uinthMK646V = BigInt("1502")
		const addressaHPCGrp = accounts[4]
		const stringRHDKFJ6 = await DSPFzOCMZ7.name.call({from: accounts[0]});
//		await DSPFzOCMZ7.unpause.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolyi8jeYy = await DSPFzOCMZ7.unlock.call(addressaHPCGrp, uinthMK646V, {from: accounts[5]});

		assert.equal(stringRHDKFJ6, "DSP")
		await expect(DSPFzOCMZ7.unpause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPIaBoeyt = await DSP.new({from: accounts[1]});
		const uintX6jZkZ3 = BigInt("1348")
		const addressEVq6vy0 = "0x0000000000000000000000000000000000000001"
		const addressyuePJub = accounts[0]
		const uintIMtygXH = BigInt("1518")
		const addresseUq5khi = accounts[2]
		const addresseQDoVgI = accounts[2]
		const uintYdb87Pv = BigInt("1137")
		const addressKict1u3 = accounts[1]
		const addressMGdmohf = accounts[0]
		const addressl96NpL4 = accounts[1]
		const uintfVOXrxb = BigInt("118")
		const addressLycinhC = accounts[3]
		const addressfPIytI0 = accounts[4]
		const addressUPMNuXr = accounts[4]
		const uintnpdwWx = BigInt("1144")
		const addresswtZjqN6 = accounts[4]
//		const boolQk3yoH = await DSPIaBoeyt.burnFrombyOwner.call(addressEVq6vy0, uintX6jZkZ3, {from: accounts[1]});
//		const uint256eroZKvA = await DSPIaBoeyt.balanceOf.call(addressyuePJub, {from: accounts[2]});
//		const boolfqb9dTv = await DSPIaBoeyt.transfer.call(addresseUq5khi, uintIMtygXH, {from: accounts[1]});
//		await DSPIaBoeyt.renouncePauser.call({from: accounts[5]});
//		const boolK4yWpOu = await DSPIaBoeyt.freezeAccount.call(addresseQDoVgI, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcQ672M = await DSPIaBoeyt.transferFrom.call(addressMGdmohf, addressKict1u3, uintYdb87Pv, {from: accounts[0]});
//		const boolYKnJjNZ = await DSPIaBoeyt.freezeAccount.call(addressl96NpL4, {from: accounts[1]});
//		const boolrQL4mK = await DSPIaBoeyt.transferFrom.call(addressfPIytI0, addressLycinhC, uintfVOXrxb, {from: accounts[4]});
//		const addressI6wzRaq = await DSPIaBoeyt.transferOwnership.call(addressUPMNuXr, {from: accounts[1]});
//		const boolqkl3GTf = await DSPIaBoeyt.transfer.call(addresswtZjqN6, uintnpdwWx, {from: accounts[4]});

		await expect(DSPIaBoeyt.burnFrombyOwner.call(addressEVq6vy0, uintX6jZkZ3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfMyaCxq = await DSP.new({from: accounts[2]});
		const uintYM13pSC = BigInt("1804")
		const addressDqnlrD2 = accounts[1]
		const uintKlTA2bK = BigInt("1290")
		const addressIUYkzDj = accounts[1]
//		const boolx2W0Sie = await DSPfMyaCxq.unlock.call(addressDqnlrD2, uintYM13pSC, {from: accounts[2]});
//		await DSPfMyaCxq.whenPaused.call({from: accounts[4]});
//		const bool0S0thK = await DSPfMyaCxq.mint.call(addressIUYkzDj, uintKlTA2bK, {from: accounts[5]});
//		const boolyBxMfXo = await DSPfMyaCxq.acceptOwnership.call({from: accounts[5]});

		await expect(DSPfMyaCxq.unlock.call(addressDqnlrD2, uintYM13pSC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPFzOCMZ7 = await DSP.new({from: accounts[2]});
		const addressbeZ7nts = accounts[4]
		const uintoI6PV0j = BigInt("910")
		const addresshvybMgS = accounts[3]
		const uintZPkWX5j = BigInt("1502")
		const addressmtoavQ = accounts[4]
		const uint256T3PV7u1 = await DSPFzOCMZ7.balanceOf.call(addressbeZ7nts, {from: accounts[2]});
		const uint8yqxfSw1 = await DSPFzOCMZ7.decimals.call({from: accounts[5]});
//		await DSPFzOCMZ7.unpause.call({from: "0x0000000000000000000000000000000000000001"});
//		await DSPFzOCMZ7.f.call({from: accounts[4]});
//		const boolwEfPxL2 = await DSPFzOCMZ7.unlock.call(addresshvybMgS, uintoI6PV0j, {from: accounts[2]});
//		const boolyi8jeYy = await DSPFzOCMZ7.unlock.call(addressmtoavQ, uintZPkWX5j, {from: accounts[5]});

		assert.equal(uint256T3PV7u1, BigInt("0"))
		assert.equal(uint8yqxfSw1, BigInt("18"))
		await expect(DSPFzOCMZ7.unpause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPIaBoeyt = await DSP.new({from: accounts[1]});
		const addressoNuZJtF = accounts[0]
		const uintdYV1Jla = BigInt("1518")
		const addressjBANcQ5 = accounts[2]
		const uintZ1Ps62 = BigInt("1686")
		const addressZDsFeMJ = accounts[4]
		const uintdf8UWN9 = BigInt("1137")
		const addressTpyEMiH = accounts[1]
		const addressKqxmt7O = accounts[0]
		const addressBZtyob6 = accounts[3]
		const addressteswT3 = accounts[1]
		const uintEiCi0OR = BigInt("118")
		const addressxMo1aWW = accounts[3]
		const addressnsdAJBH = accounts[4]
		const addressiqiIrOE = accounts[4]
		const uinta6DN8w4 = BigInt("1144")
		const addressKOOqFe = accounts[4]
		const addresse8EqZ8R = accounts[3]
		const uint256eroZKvA = await DSPIaBoeyt.balanceOf.call(addressoNuZJtF, {from: accounts[2]});
		const boolfqb9dTv = await DSPIaBoeyt.transfer.call(addressjBANcQ5, uintdYV1Jla, {from: accounts[1]});
//		const boolZK6ijMH = await DSPIaBoeyt.decreaseAllowance.call(addressZDsFeMJ, uintZ1Ps62, {from: accounts[3]});
//		const boolcQ672M = await DSPIaBoeyt.transferFrom.call(addressKqxmt7O, addressTpyEMiH, uintdf8UWN9, {from: accounts[0]});
//		const addressm8FmU2 = await DSPIaBoeyt.upgradeTo.call(addressBZtyob6, {from: accounts[0]});
//		const boolYKnJjNZ = await DSPIaBoeyt.freezeAccount.call(addressteswT3, {from: accounts[1]});
//		const boolrQL4mK = await DSPIaBoeyt.transferFrom.call(addressnsdAJBH, addressxMo1aWW, uintEiCi0OR, {from: accounts[4]});
//		const addressI6wzRaq = await DSPIaBoeyt.transferOwnership.call(addressiqiIrOE, {from: accounts[1]});
//		const boolqkl3GTf = await DSPIaBoeyt.transfer.call(addressKOOqFe, uinta6DN8w4, {from: accounts[4]});
//		const boolxPkudi8 = await DSPIaBoeyt.freezeAccount.call(addresse8EqZ8R, {from: accounts[4]});

		assert.equal(boolfqb9dTv, true)
		assert.equal(uint256eroZKvA, BigInt("0"))
		await expect(DSPIaBoeyt.decreaseAllowance.call(addressZDsFeMJ, uintZ1Ps62, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPFzOCMZ7 = await DSP.new({from: accounts[2]});
		const uintTIvDs3s = BigInt("461")
		const addressOPrli3 = accounts[3]
		const addressNbfl2Wk = accounts[1]
//		await DSPFzOCMZ7.renouncePauser.call({from: accounts[2]});
//		const boolRhGgLIb = await DSPFzOCMZ7.transferFrom.call(addressNbfl2Wk, addressOPrli3, uintTIvDs3s, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPFzOCMZ7.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPFzOCMZ7 = await DSP.new({from: accounts[2]});
		const addressCKmirlF = accounts[0]
		const uintM8xqVyQ = BigInt("461")
		const addresscvd5D4G = accounts[3]
		const addressB5wjpwo = accounts[1]
//		await DSPFzOCMZ7.renouncePauser.call({from: accounts[2]});
//		const addressNOkw1Y = await DSPFzOCMZ7.upgradeTo.call(addressCKmirlF, {from: accounts[2]});
//		const boolRhGgLIb = await DSPFzOCMZ7.transferFrom.call(addressB5wjpwo, addresscvd5D4G, uintM8xqVyQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPFzOCMZ7.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPIPlz4JG = await DSP.new({from: accounts[2]});
		const addresshmZm9pn = accounts[0]
		const uintKmDCdk4 = BigInt("1962")
		const addressXm3PyB = accounts[4]
//		const addressCGrGBJs = await DSPIPlz4JG.removePauser.call(addresshmZm9pn, {from: accounts[2]});
//		await DSPIPlz4JG.pause.call({from: accounts[0]});
//		const boolJvnEl2 = await DSPIPlz4JG.transfer.call(addressXm3PyB, uintKmDCdk4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPIPlz4JG.removePauser.call(addresshmZm9pn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPIPlz4JG = await DSP.new({from: accounts[2]});
		const addressXMG8C6 = accounts[3]
		const uintEY7luJE = BigInt("1970")
		const addressDfHt5bC = accounts[5]
		const boolqfjKClp = await DSPIPlz4JG.freezeAccount.call(addressXMG8C6, {from: accounts[2]});
//		const boolL04tpTm = await DSPIPlz4JG.acceptOwnership.call({from: accounts[5]});
//		const boolJvnEl2 = await DSPIPlz4JG.transfer.call(addressDfHt5bC, uintEY7luJE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolqfjKClp, true)
		await expect(DSPIPlz4JG.acceptOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPFzOCMZ7 = await DSP.new({from: accounts[2]});
		const addressRtA15q = accounts[4]
		const uintlwx4A9s = BigInt("658")
		const addressDZBWVyz = accounts[4]
		const uintxOuJQAY = BigInt("1502")
		const addressfLIB2kA = accounts[4]
		const uintQGEJsq4 = BigInt("11")
		const addressEXQQ6P6 = accounts[4]
		const addressMfFkUWK = accounts[2]
		const uint256T3PV7u1 = await DSPFzOCMZ7.balanceOf.call(addressRtA15q, {from: accounts[2]});
		const boolVDEb6pa = await DSPFzOCMZ7.increaseAllowance.call(addressDZBWVyz, uintlwx4A9s, {from: accounts[0]});
//		const boolyi8jeYy = await DSPFzOCMZ7.unlock.call(addressfLIB2kA, uintxOuJQAY, {from: accounts[5]});
//		const booll4okQGE = await DSPFzOCMZ7.transferFrom.call(addressMfFkUWK, addressEXQQ6P6, uintQGEJsq4, {from: accounts[3]});

		assert.equal(boolVDEb6pa, true)
		assert.equal(uint256T3PV7u1, BigInt("0"))
		await expect(DSPFzOCMZ7.unlock.call(addressfLIB2kA, uintxOuJQAY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfMyaCxq = await DSP.new({from: accounts[2]});
		const addressT5ZjCBV = accounts[1]
		const uintNom1VrB = BigInt("1965")
		const addressdakF5xw = accounts[1]
		const uintxykEIpb = BigInt("1804")
		const addressdjCs8Yc = accounts[1]
		const addressvQO8dQJ = await DSPfMyaCxq.addPauser.call(addressT5ZjCBV, {from: accounts[2]});
//		const boolIxaowD = await DSPfMyaCxq.unlock.call(addressdakF5xw, uintNom1VrB, {from: accounts[3]});
//		const boolx2W0Sie = await DSPfMyaCxq.unlock.call(addressdjCs8Yc, uintxykEIpb, {from: accounts[2]});
//		await DSPfMyaCxq.unpause.call({from: accounts[2]});

		await expect(DSPfMyaCxq.unlock.call(addressdakF5xw, uintNom1VrB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPFzOCMZ7 = await DSP.new({from: accounts[2]});
		const uintRCPXvXd = BigInt("1502")
		const addressYCgpg2W = accounts[4]
//		await DSPFzOCMZ7.pause.call({from: accounts[2]});
//		const boolyi8jeYy = await DSPFzOCMZ7.unlock.call(addressYCgpg2W, uintRCPXvXd, {from: accounts[5]});
//		await DSPFzOCMZ7.whenPaused.call({from: accounts[1]});

		await expect(DSPFzOCMZ7.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPiS3Tlij = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLM5Ufk = BigInt("1115")
		const addressLetSX9 = accounts[4]
		const addressryz1OPk = accounts[2]
		const addresse2DAmYW = accounts[4]
		const addressrOJblW3 = accounts[1]
		const uintAlSmhqZ = BigInt("1338")
		const addressWms7YJ8 = accounts[4]
		const addressq6y2xd2 = accounts[3]
		const boolbYo1N3x = await DSPiS3Tlij.transferFrom.call(addressryz1OPk, addressLetSX9, uintLM5Ufk, {from: accounts[1]});
		const uint256yVZjAh1 = await DSPiS3Tlij.balanceOf.call(addresse2DAmYW, {from: accounts[5]});
		const uint256NPGZENU = await DSPiS3Tlij.balanceOf.call(addressrOJblW3, {from: accounts[4]});
		const boolPmlGqIC = await DSPiS3Tlij.transferFrom.call(addressq6y2xd2, addressWms7YJ8, uintAlSmhqZ, {from: accounts[4]});
	});

	it('test for DSP', async () => {
		const DSPfMyaCxq = await DSP.new({from: accounts[2]});
		const uintNF2hdpr = BigInt("1842")
		const addresszLRk9al = accounts[2]
		const boolq8dEuxu = await DSPfMyaCxq.paused.call({from: accounts[4]});
//		const boolx2W0Sie = await DSPfMyaCxq.unlock.call(addresszLRk9al, uintNF2hdpr, {from: accounts[2]});

		assert.equal(boolq8dEuxu, false)
		await expect(DSPfMyaCxq.unlock.call(addresszLRk9al, uintNF2hdpr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPFzOCMZ7 = await DSP.new({from: accounts[2]});
		const uintxl7UKrY = BigInt("29")
		const addressFQza6Ke = accounts[5]
		const addressrEKkA2 = accounts[2]
		const uintbHUCedO = BigInt("461")
		const address0UWwtc = accounts[3]
		const addressuE5DYiV = accounts[2]
		const boolLGJ42jc = await DSPFzOCMZ7.mint.call(addressFQza6Ke, uintxl7UKrY, {from: accounts[2]});
		const booljRsrIJI = await DSPFzOCMZ7.isOwner.call(addressrEKkA2, {from: accounts[1]});
//		const boolRhGgLIb = await DSPFzOCMZ7.transferFrom.call(addressuE5DYiV, address0UWwtc, uintbHUCedO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLGJ42jc, true)
		assert.equal(booljRsrIJI, true)
		await expect(DSPFzOCMZ7.transferFrom.call(addressuE5DYiV, address0UWwtc, uintbHUCedO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})