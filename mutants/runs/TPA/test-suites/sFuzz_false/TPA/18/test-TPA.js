const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringPwSex9i = "xE"
		const stringwy5PBNi = "JxI8YEquHDnf2gg"
		const uintbfUPRmo = BigInt("230")
		const TPANZTnHhu = await TPA.new(stringPwSex9i, stringwy5PBNi, uintbfUPRmo, {from: accounts[1]});
		const uint256D7usvsr = await TPANZTnHhu.totalSupply.call({from: accounts[3]});
		const stringNkiy37R = await TPANZTnHhu.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TPA', async () => {
		const TPAOlkQ1TF = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzI5YpqZ = BigInt("1087")
		const addresspDQA3oO = "0x0000000000000000000000000000000000000001"
		const addressJTz42f1 = accounts[0]
		const addressfJvvLSx = accounts[4]
		const boolIMabjP = await TPAOlkQ1TF.approve.call(addresspDQA3oO, uintzI5YpqZ, {from: accounts[2]});
		const addressw2xjiJ = await TPAOlkQ1TF.notFrozen.call(addressJTz42f1, {from: accounts[3]});
		const bool9PN4LQ = await TPAOlkQ1TF.unfreezeAccount.call(addressfJvvLSx, {from: accounts[2]});
	});

	it('test for TPA', async () => {
		const TPAaBA5rF = await TPA.new({from: accounts[4]});
		const uintEZb8uz = BigInt("59")
		const addressywrqirD = accounts[4]
		await TPAaBA5rF.pause.call({from: accounts[4]});
		const boolMoSnBng = await TPAaBA5rF.transfer.call(addressywrqirD, uintEZb8uz, {from: accounts[0]});
		const uint256UEQAvTp = await TPAaBA5rF.totalSupply.call({from: accounts[2]});
		const uint256V4yB0pD = await TPAaBA5rF.totalSupply.call({from: accounts[5]});

		await expect(TPAaBA5rF.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAs10eFyr = await TPA.new({from: accounts[2]});
		const uintXO20zaJ = BigInt("1503")
		const addressgpoFWo = accounts[2]
		const uint256zTb4QqX = await TPAs10eFyr.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await TPAs10eFyr.renounceAdmin.call({from: accounts[0]});
		await TPAs10eFyr.pause.call({from: accounts[1]});
		const stringlImvxvI = await TPAs10eFyr.symbol.call({from: accounts[0]});
		const boolAjOy2cs = await TPAs10eFyr.increaseAllowance.call(addressgpoFWo, uintXO20zaJ, {from: accounts[2]});

		assert.equal(uint256zTb4QqX, BigInt("10000000000000000000000000000"))
		await expect(TPAs10eFyr.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaBA5rF = await TPA.new({from: accounts[4]});
		const addresse9Twljv = accounts[0]
		const uintcADAhdt = BigInt("358")
		const addresseO8EkD = accounts[0]
		const addressfyT5Bq = await TPAaBA5rF.addAdmin.call(addresse9Twljv, {from: accounts[4]});
		await TPAaBA5rF.pause.call({from: accounts[4]});
		const uint256UEQAvTp = await TPAaBA5rF.totalSupply.call({from: accounts[2]});
		const boolRnFOGlU = await TPAaBA5rF.transfer.call(addresseO8EkD, uintcADAhdt, {from: accounts[0]});
		const uint256V4yB0pD = await TPAaBA5rF.totalSupply.call({from: accounts[5]});

		await expect(TPAaBA5rF.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaBA5rF = await TPA.new({from: accounts[4]});
		const addressT8X217s = accounts[4]
		const uinteYxc5Ws = BigInt("59")
		const addressX7uYW3 = accounts[4]
		const uintpmQ41Q = BigInt("935")
		const uintoQgIoJZ = BigInt("318")
		const addressK9uJo3E = accounts[0]
		const addressJaMHkta = await TPAaBA5rF.addAdmin.call(addressT8X217s, {from: accounts[3]});
		await TPAaBA5rF.pause.call({from: accounts[4]});
		const boolMoSnBng = await TPAaBA5rF.transfer.call(addressX7uYW3, uinteYxc5Ws, {from: accounts[0]});
		const boolVQNMgh8 = await TPAaBA5rF.transferWithLock.call(addressK9uJo3E, uintoQgIoJZ, uintpmQ41Q, {from: accounts[3]});
		const uint256UEQAvTp = await TPAaBA5rF.totalSupply.call({from: accounts[2]});
		const uint256V4yB0pD = await TPAaBA5rF.totalSupply.call({from: accounts[5]});

		await expect(TPAaBA5rF.addAdmin.call(addressT8X217s, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaBA5rF = await TPA.new({from: accounts[4]});
		const uintPHRcY7 = BigInt("540")
		const addressYjPBjlh = accounts[1]
		const addressmjof1T = "0x0000000000000000000000000000000000000001"
		await TPAaBA5rF.pause.call({from: accounts[4]});
		const uint256UEQAvTp = await TPAaBA5rF.totalSupply.call({from: accounts[2]});
		const uint256V4yB0pD = await TPAaBA5rF.totalSupply.call({from: accounts[5]});
		const boolRD40F0d = await TPAaBA5rF.increaseAllowance.call(addressYjPBjlh, uintPHRcY7, {from: accounts[2]});
		const addressZkeEyAt = await TPAaBA5rF.addAdmin.call(addressmjof1T, {from: accounts[3]});

		await expect(TPAaBA5rF.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANKRExUL = await TPA.new({from: accounts[3]});
		const uintBvLETk = BigInt("948")
		const addressx7pLAgO = accounts[0]
		const addressX9i3l8Q = accounts[1]
		const uintPo0ZrG8 = BigInt("140")
		const uintt2afBcz = BigInt("734")
		const addressactwhB1 = accounts[5]
		const uintZX9Dsmc = BigInt("1841")
		const addressQt4C5T = "0x0000000000000000000000000000000000000001"
		const stringCx1r7P3 = await TPANKRExUL.name.call({from: accounts[1]});
		const booly6lbOwd = await TPANKRExUL.approve.call(addressx7pLAgO, uintBvLETk, {from: accounts[4]});
		const uint256RndwHEE = await TPANKRExUL.balanceOf.call(addressX9i3l8Q, {from: accounts[4]});
		const uint256U448Nxe = await TPANKRExUL.burn.call(uintPo0ZrG8, {from: "0x0000000000000000000000000000000000000001"});
		const booliTACjUb = await TPANKRExUL.decreaseAllowance.call(addressactwhB1, uintt2afBcz, {from: accounts[3]});
		const boolDW351A8 = await TPANKRExUL.decreaseAllowance.call(addressQt4C5T, uintZX9Dsmc, {from: accounts[0]});

		assert.equal(booly6lbOwd, true)
		assert.equal(stringCx1r7P3, "TPA")
		assert.equal(uint256RndwHEE, BigInt("0"))
		await expect(TPANKRExUL.burn.call(uintPo0ZrG8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaBA5rF = await TPA.new({from: accounts[4]});
		const uintMQMN1Lj = BigInt("458")
		const addressQFZFTjT = accounts[3]
		const addressOtnycCm = accounts[2]
		const uintnTyCD0G = BigInt("59")
		const addresskk0WyNG = accounts[5]
		await TPAaBA5rF.pause.call({from: accounts[4]});
		const boolyppWath = await TPAaBA5rF.transferFrom.call(addressOtnycCm, addressQFZFTjT, uintMQMN1Lj, {from: accounts[4]});
		const boolMoSnBng = await TPAaBA5rF.transfer.call(addresskk0WyNG, uintnTyCD0G, {from: accounts[0]});
		const uint256V4yB0pD = await TPAaBA5rF.totalSupply.call({from: accounts[5]});

		await expect(TPAaBA5rF.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaBA5rF = await TPA.new({from: accounts[4]});
		const uintAQ9LjOC = BigInt("279")
		const addressEJAIlmh = accounts[1]
		const uintd9S6Jn = BigInt("59")
		const addressTGfpli = accounts[5]
		await TPAaBA5rF.whenPaused.call({from: accounts[0]});
		const booldi63o2u = await TPAaBA5rF.unlock.call(addressEJAIlmh, uintAQ9LjOC, {from: accounts[3]});
		const boolMoSnBng = await TPAaBA5rF.transfer.call(addressTGfpli, uintd9S6Jn, {from: accounts[0]});

		await expect(TPAaBA5rF.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANKRExUL = await TPA.new({from: accounts[3]});
		const uintsCU5ZAW = BigInt("948")
		const address44imuB = accounts[0]
		const addressiWqIOeZ = accounts[1]
		const uintCYGJJBk = BigInt("734")
		const addressPr8c488 = accounts[5]
		const uintTyn89d = BigInt("1854")
		const addressL0gf3CC = "0x0000000000000000000000000000000000000001"
		const stringCx1r7P3 = await TPANKRExUL.name.call({from: accounts[1]});
		const booly6lbOwd = await TPANKRExUL.approve.call(address44imuB, uintsCU5ZAW, {from: accounts[4]});
		const uint256RndwHEE = await TPANKRExUL.balanceOf.call(addressiWqIOeZ, {from: accounts[4]});
		const booliTACjUb = await TPANKRExUL.decreaseAllowance.call(addressPr8c488, uintCYGJJBk, {from: accounts[3]});
		const boolDW351A8 = await TPANKRExUL.decreaseAllowance.call(addressL0gf3CC, uintTyn89d, {from: accounts[0]});

		assert.equal(booly6lbOwd, true)
		assert.equal(stringCx1r7P3, "TPA")
		assert.equal(uint256RndwHEE, BigInt("0"))
		await expect(TPANKRExUL.decreaseAllowance.call(addressPr8c488, uintCYGJJBk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANKRExUL = await TPA.new({from: accounts[3]});
		const uintEINL8aF = BigInt("948")
		const addressaWnhrry = accounts[1]
		const uintvYX8bGD = BigInt("125")
		const addressTBvJMoU = accounts[5]
		const addressfiK8uIr = accounts[1]
		const uintMFolDUj = BigInt("1622")
		const uintx7tBEzE = BigInt("1022")
		const addressa9r154 = accounts[0]
		const uintmE7qpug = BigInt("734")
		const addressx3a5cG = accounts[5]
		const uintXsPGlGZ = BigInt("1854")
		const addressCeEe4OC = "0x0000000000000000000000000000000000000001"
		const stringCx1r7P3 = await TPANKRExUL.name.call({from: accounts[1]});
		const booly6lbOwd = await TPANKRExUL.approve.call(addressaWnhrry, uintEINL8aF, {from: accounts[4]});
		const addressSC6sTQ8 = await TPANKRExUL.burnFrom.call(addressTBvJMoU, uintvYX8bGD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RndwHEE = await TPANKRExUL.balanceOf.call(addressfiK8uIr, {from: accounts[4]});
		const boolIgb4zpZ = await TPANKRExUL.lock.call(addressa9r154, uintx7tBEzE, uintMFolDUj, {from: accounts[2]});
		const booliTACjUb = await TPANKRExUL.decreaseAllowance.call(addressx3a5cG, uintmE7qpug, {from: accounts[3]});
		const boolDW351A8 = await TPANKRExUL.decreaseAllowance.call(addressCeEe4OC, uintXsPGlGZ, {from: accounts[0]});

		assert.equal(booly6lbOwd, true)
		assert.equal(stringCx1r7P3, "TPA")
		await expect(TPANKRExUL.burnFrom.call(addressTBvJMoU, uintvYX8bGD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaBA5rF = await TPA.new({from: accounts[4]});
		const addressx7kfmU = accounts[3]
		const uintkPOtZw3 = BigInt("458")
		const addressUvgBWhG = accounts[3]
		const addressOgLkifH = accounts[2]
		await TPAaBA5rF.pause.call({from: accounts[4]});
		const addressdZnIf2R = await TPAaBA5rF.removeAdmin.call(addressx7kfmU, {from: accounts[4]});
		const boolyppWath = await TPAaBA5rF.transferFrom.call(addressOgLkifH, addressUvgBWhG, uintkPOtZw3, {from: accounts[4]});
		const uint256V4yB0pD = await TPAaBA5rF.totalSupply.call({from: accounts[5]});

		await expect(TPAaBA5rF.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaBA5rF = await TPA.new({from: accounts[4]});
		const uintKcr9e3c = BigInt("926")
		const addressuwDYRFl = accounts[6]
		const addressTb6mltj = accounts[1]
		const addressq3LCp3 = accounts[2]
		const booleODqlbT = await TPAaBA5rF.paused.call({from: accounts[2]});
		const boolMoSnBng = await TPAaBA5rF.transfer.call(addressuwDYRFl, uintKcr9e3c, {from: accounts[0]});
		const uint256hYdthP1 = await TPAaBA5rF.allowance.call(addressq3LCp3, addressTb6mltj, {from: accounts[3]});

		assert.equal(booleODqlbT, false)
		await expect(TPAaBA5rF.transfer.call(addressuwDYRFl, uintKcr9e3c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANKRExUL = await TPA.new({from: accounts[3]});
		const uintYq5UHbE = BigInt("948")
		const addressRcTvPBn = accounts[0]
		const addressFE7ZVJT = accounts[1]
		const uintuMbBaW0 = BigInt("734")
		const addresscOvQBj1 = accounts[5]
		const uintaTd5kQO = BigInt("1854")
		const addressp8vCC0e = "0x0000000000000000000000000000000000000001"
		const stringCx1r7P3 = await TPANKRExUL.name.call({from: accounts[1]});
		const booly6lbOwd = await TPANKRExUL.approve.call(addressRcTvPBn, uintYq5UHbE, {from: accounts[4]});
		const uint256RndwHEE = await TPANKRExUL.balanceOf.call(addressFE7ZVJT, {from: accounts[4]});
		const stringoL3FA4c = await TPANKRExUL.symbol.call({from: accounts[2]});
		const booliTACjUb = await TPANKRExUL.decreaseAllowance.call(addresscOvQBj1, uintuMbBaW0, {from: accounts[3]});
		const boolDW351A8 = await TPANKRExUL.decreaseAllowance.call(addressp8vCC0e, uintaTd5kQO, {from: accounts[0]});

		assert.equal(booly6lbOwd, true)
		assert.equal(stringCx1r7P3, "TPA")
		assert.equal(stringoL3FA4c, "TPA")
		assert.equal(uint256RndwHEE, BigInt("0"))
		await expect(TPANKRExUL.decreaseAllowance.call(addresscOvQBj1, uintuMbBaW0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaBA5rF = await TPA.new({from: accounts[4]});
		const addressERq6k9 = "0x0000000000000000000000000000000000000001"
		const addressLfwEB5O = accounts[5]
		const uintUPcf3vA = BigInt("59")
		const addressej5WLlF = accounts[7]
		const uintqKcnUhw = BigInt("757")
		const addressOM6p5RT = accounts[1]
		const uint256NcTHTYo = await TPAaBA5rF.allowance.call(addressLfwEB5O, addressERq6k9, {from: accounts[2]});
		const boolMoSnBng = await TPAaBA5rF.transfer.call(addressej5WLlF, uintUPcf3vA, {from: accounts[0]});
		const boolxam8FFx = await TPAaBA5rF.transfer.call(addressOM6p5RT, uintqKcnUhw, {from: accounts[2]});

		assert.equal(uint256NcTHTYo, BigInt("0"))
		await expect(TPAaBA5rF.transfer.call(addressej5WLlF, uintUPcf3vA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaBA5rF = await TPA.new({from: accounts[4]});
		const addressLXSvoV = accounts[6]
		const uint8EFce17G = await TPAaBA5rF.decimals.call({from: accounts[1]});
		const stringEUZwJKE = await TPAaBA5rF.symbol.call({from: accounts[0]});
		const uint256j076HvY = await TPAaBA5rF.balanceOf.call(addressLXSvoV, {from: accounts[1]});

		assert.equal(stringEUZwJKE, "TPA")
		assert.equal(uint256j076HvY, BigInt("0"))
		assert.equal(uint8EFce17G, BigInt("18"))
	});

	it('test for TPA', async () => {
		const TPAaBA5rF = await TPA.new({from: accounts[4]});
		const addressZ3z0A9G = accounts[6]
		const uintcrunKCF = BigInt("54")
		const uintd29EPow = BigInt("1780")
		const addresskWf1JTp = accounts[4]
		const uint256j076HvY = await TPAaBA5rF.balanceOf.call(addressZ3z0A9G, {from: accounts[1]});
		const boolMyaao18 = await TPAaBA5rF.lock.call(addresskWf1JTp, uintd29EPow, uintcrunKCF, {from: accounts[4]});

		assert.equal(boolMyaao18, true)
		assert.equal(uint256j076HvY, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAaBA5rF = await TPA.new({from: accounts[4]});
		const addressKZHG0hz = accounts[5]
		const uintqFR8jr0 = BigInt("59")
		const addressf17NAzw = accounts[6]
		const addressNztydm = await TPAaBA5rF.upgradeTo.call(addressKZHG0hz, {from: accounts[4]});
		await TPAaBA5rF.whenPaused.call({from: accounts[1]});
		const boolMoSnBng = await TPAaBA5rF.transfer.call(addressf17NAzw, uintqFR8jr0, {from: accounts[0]});

		await expect(TPAaBA5rF.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaBA5rF = await TPA.new({from: accounts[4]});
		const addressjAWMJav = accounts[6]
		const uintnmbybKB = BigInt("1855")
		const addressjXJ8QLU = accounts[2]
		const uint256j076HvY = await TPAaBA5rF.balanceOf.call(addressjAWMJav, {from: accounts[1]});
		const boolOrC0F6Z = await TPAaBA5rF.unlock.call(addressjXJ8QLU, uintnmbybKB, {from: accounts[4]});

		assert.equal(uint256j076HvY, BigInt("0"))
		await expect(TPAaBA5rF.unlock.call(addressjXJ8QLU, uintnmbybKB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAo367aYY = await TPA.new({from: accounts[1]});
		const addressmOcvxrv = accounts[3]
		const addressbfsTDh = accounts[4]
		const addressgXhZnqY = accounts[0]
		const addressuQbPKj = await TPAo367aYY.transferOwnership.call(addressmOcvxrv, {from: accounts[1]});
		const uint256fmiPMGE = await TPAo367aYY.balanceOf.call(addressbfsTDh, {from: accounts[1]});
		const uint256pkHfHaD = await TPAo367aYY.totalSupply.call({from: accounts[0]});
		const uint256mlYe00a = await TPAo367aYY.balanceOf.call(addressgXhZnqY, {from: accounts[2]});

		assert.equal(uint256fmiPMGE, BigInt("0"))
		assert.equal(uint256mlYe00a, BigInt("0"))
		assert.equal(uint256pkHfHaD, BigInt("10000000000000000000000000000"))
	});
})