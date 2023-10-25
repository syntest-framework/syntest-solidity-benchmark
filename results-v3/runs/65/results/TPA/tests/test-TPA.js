const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const addressSWsYo5 = accounts[1]
		const uintWyhaIfl = BigInt("396")
		const addressOK3Hhnx = accounts[0]
		const uintizc4ArX = BigInt("889")
		const addresscHYkC8o = accounts[2]
		const uint256GNsj4fY = await TPAkNGYVX.balanceOf.call(addressSWsYo5, {from: accounts[4]});
		const boolLf4kPPQ = await TPAkNGYVX.transfer.call(addressOK3Hhnx, uintWyhaIfl, {from: accounts[4]});
		const boolm2nqfVg = await TPAkNGYVX.decreaseAllowance.call(addresscHYkC8o, uintizc4ArX, {from: accounts[2]});

		assert.equal(uint256GNsj4fY, BigInt("0"))
		await expect(TPAkNGYVX.transfer.call(addressOK3Hhnx, uintWyhaIfl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringNSp6je = "S"
		const stringis0kAZ9 = "iNOXLrCE3MmFXPbAlFDIAm7XhxpDfxPzlQ8QHql8K9s8f"
		const uintsv1Ixpu = BigInt("127")
		const TPAQA4ibt = await TPA.new(stringNSp6je, stringis0kAZ9, uintsv1Ixpu, {from: "0x0000000000000000000000000000000000000001"});
		const addressrRx0itT = accounts[5]
		const uint256EhY1TOI = await TPAQA4ibt.balanceOf.call(addressrRx0itT, {from: accounts[5]});
		const stringRoto6ak = await TPAQA4ibt.name.call({from: accounts[4]});
		await TPAQA4ibt.onlyAdmin.call({from: accounts[5]});
		await TPAQA4ibt.whenNotPaused.call({from: accounts[5]});
	});

	it('test for TPA', async () => {
		const TPAGi0wxW = await TPA.new({from: accounts[0]});
		const addressB4Jmvwt = accounts[2]
		const uintBRUc3f5 = BigInt("1631")
		const address9f6WXR = accounts[2]
		const uint256ys8mzx = await TPAGi0wxW.balanceOf.call(addressB4Jmvwt, {from: accounts[2]});
		const boolUNE87tV = await TPAGi0wxW.decreaseAllowance.call(address9f6WXR, uintBRUc3f5, {from: accounts[5]});
		await TPAGi0wxW.whenNotPaused.call({from: accounts[5]});
		await TPAGi0wxW.renounceAdmin.call({from: accounts[2]});

		assert.equal(uint256ys8mzx, BigInt("0"))
		await expect(TPAGi0wxW.decreaseAllowance.call(address9f6WXR, uintBRUc3f5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAHPMcSrR = await TPA.new({from: accounts[0]});
		const uintw9thz1H = BigInt("1203")
		const addressAZnQQQ6 = "0x0000000000000000000000000000000000000001"
		const addressqbcxFbi = accounts[2]
		const addressUyWCViR = accounts[3]
		const uint256cWdamVb = await TPAHPMcSrR.totalSupply.call({from: accounts[5]});
		const boolCDgIIrR = await TPAHPMcSrR.transferFrom.call(addressqbcxFbi, addressAZnQQQ6, uintw9thz1H, {from: accounts[1]});
		const address3ppnKG = await TPAHPMcSrR.notFrozen.call(addressUyWCViR, {from: accounts[2]});

		assert.equal(uint256cWdamVb, BigInt("10000000000000000000000000000"))
		await expect(TPAHPMcSrR.transferFrom.call(addressqbcxFbi, addressAZnQQQ6, uintw9thz1H, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAxBpO83U = await TPA.new({from: accounts[4]});
		const addressIdjzba = accounts[2]
		const uintV99zhWs = BigInt("586")
		const uintaEqZSE = BigInt("826")
		const addressTFZ1Gxd = accounts[2]
		const addressCnO2bmb = accounts[5]
		const stringD09IjBp = await TPAxBpO83U.name.call({from: accounts[1]});
		const addressv9Cfsy = await TPAxBpO83U.removeAdmin.call(addressIdjzba, {from: accounts[2]});
		const boolMaVja5h = await TPAxBpO83U.transferWithLock.call(addressTFZ1Gxd, uintaEqZSE, uintV99zhWs, {from: accounts[4]});
		const boolqQM4qmD = await TPAxBpO83U.isAdmin.call(addressCnO2bmb, {from: accounts[1]});

		assert.equal(stringD09IjBp, "TPA")
		await expect(TPAxBpO83U.removeAdmin.call(addressIdjzba, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAHPMcSrR = await TPA.new({from: accounts[0]});
		const addresshzcwzRE = accounts[3]
		const uint256cWdamVb = await TPAHPMcSrR.totalSupply.call({from: accounts[5]});
		const address3ppnKG = await TPAHPMcSrR.notFrozen.call(addresshzcwzRE, {from: accounts[2]});

		assert.equal(uint256cWdamVb, BigInt("10000000000000000000000000000"))
		await expect(TPAHPMcSrR.notFrozen.call(addresshzcwzRE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const addressZKzJsQE = accounts[1]
		const uintckKWiTY = BigInt("1709")
		const addressJu345PN = accounts[2]
		const uintMqQPEyv = BigInt("396")
		const addressbjE5opH = accounts[0]
		const uintWNKcMVB = BigInt("889")
		const addressmdaMwWE = accounts[2]
		const uint256GNsj4fY = await TPAkNGYVX.balanceOf.call(addressZKzJsQE, {from: accounts[4]});
		const boolPywMmQ6 = await TPAkNGYVX.increaseAllowance.call(addressJu345PN, uintckKWiTY, {from: accounts[3]});
		const boolLf4kPPQ = await TPAkNGYVX.transfer.call(addressbjE5opH, uintMqQPEyv, {from: accounts[4]});
		const boolm2nqfVg = await TPAkNGYVX.decreaseAllowance.call(addressmdaMwWE, uintWNKcMVB, {from: accounts[2]});

		assert.equal(boolPywMmQ6, true)
		assert.equal(uint256GNsj4fY, BigInt("0"))
		await expect(TPAkNGYVX.transfer.call(addressbjE5opH, uintMqQPEyv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAHPMcSrR = await TPA.new({from: accounts[0]});
		const addressUtXJ1XX = accounts[2]
		const uintaoxAc4Y = BigInt("845")
		const addressR3RV45 = accounts[2]
		const uintcqPUWq = BigInt("1203")
		const addressXobmhNI = "0x0000000000000000000000000000000000000001"
		const addresshmufG7d = accounts[2]
		const uintyp6mrmz = BigInt("273")
		const addresscPYDA4a = accounts[0]
		const uint256cWdamVb = await TPAHPMcSrR.totalSupply.call({from: accounts[5]});
		const addressGjpfv9S = await TPAHPMcSrR.addAdmin.call(addressUtXJ1XX, {from: accounts[4]});
		const boolya55fdn = await TPAHPMcSrR.approve.call(addressR3RV45, uintaoxAc4Y, {from: accounts[2]});
		const boolCDgIIrR = await TPAHPMcSrR.transferFrom.call(addresshmufG7d, addressXobmhNI, uintcqPUWq, {from: accounts[1]});
		const addressSLqkjFZ = await TPAHPMcSrR.burnFrom.call(addresscPYDA4a, uintyp6mrmz, {from: accounts[1]});

		assert.equal(uint256cWdamVb, BigInt("10000000000000000000000000000"))
		await expect(TPAHPMcSrR.addAdmin.call(addressUtXJ1XX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAHPMcSrR = await TPA.new({from: accounts[0]});
		const uintjwqHpZ8 = BigInt("516")
		const addressqJWsYG8 = accounts[4]
		const addressQ4OFyNJ = accounts[3]
		const addressDt5rmWm = await TPAHPMcSrR.burnFrom.call(addressqJWsYG8, uintjwqHpZ8, {from: accounts[0]});
		const uint256cWdamVb = await TPAHPMcSrR.totalSupply.call({from: accounts[5]});
		await TPAHPMcSrR.renounceAdmin.call({from: accounts[3]});
		const address3ppnKG = await TPAHPMcSrR.notFrozen.call(addressQ4OFyNJ, {from: accounts[2]});

		await expect(TPAHPMcSrR.burnFrom.call(addressqJWsYG8, uintjwqHpZ8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const addresshCqIEbf = accounts[1]
		const uintzaUbzGc = BigInt("396")
		const addressg5quGYO = accounts[0]
		const uintvIeRf2E = BigInt("889")
		const addressdbnZ5t = accounts[2]
		const addressPehre7g = accounts[2]
		const addressebgBeXJ = await TPAkNGYVX.removeAdmin.call(addresshCqIEbf, {from: accounts[2]});
		const boolLf4kPPQ = await TPAkNGYVX.transfer.call(addressg5quGYO, uintzaUbzGc, {from: accounts[4]});
		const boolm2nqfVg = await TPAkNGYVX.decreaseAllowance.call(addressdbnZ5t, uintvIeRf2E, {from: accounts[2]});
		const stringvsAMOse = await TPAkNGYVX.symbol.call({from: accounts[4]});
		const uint256asA7YBh = await TPAkNGYVX.balanceOf.call(addressPehre7g, {from: accounts[4]});

		await expect(TPAkNGYVX.removeAdmin.call(addresshCqIEbf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const addressjBXvkNf = accounts[3]
		const addressCRdszGk = accounts[1]
		const addressbhyiWyB = accounts[5]
		const addresss8Xb2eZ = accounts[3]
		const uintfkXsWNV = BigInt("480")
		const addressQoDu4f = accounts[0]
		const uintkcCzUYA = BigInt("396")
		const addressYqRRd3t = accounts[0]
		const addressqVYjLL = await TPAkNGYVX.addAdmin.call(addressjBXvkNf, {from: accounts[2]});
		const uint256GNsj4fY = await TPAkNGYVX.balanceOf.call(addressCRdszGk, {from: accounts[4]});
		const uint256dlCASP1 = await TPAkNGYVX.allowance.call(addresss8Xb2eZ, addressbhyiWyB, {from: accounts[1]});
		const boolep05UyH = await TPAkNGYVX.approve.call(addressQoDu4f, uintfkXsWNV, {from: accounts[4]});
		const boolLf4kPPQ = await TPAkNGYVX.transfer.call(addressYqRRd3t, uintkcCzUYA, {from: accounts[4]});

		assert.equal(boolep05UyH, true)
		assert.equal(uint256GNsj4fY, BigInt("0"))
		assert.equal(uint256dlCASP1, BigInt("0"))
		await expect(TPAkNGYVX.transfer.call(addressYqRRd3t, uintkcCzUYA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const addressEAIU6dO = accounts[3]
		const addressw79fY6Q = "0x0000000000000000000000000000000000000001"
		const uint256GNsj4fY = await TPAkNGYVX.balanceOf.call(addressEAIU6dO, {from: accounts[4]});
		const addressVG7rOJU = await TPAkNGYVX.upgradeTo.call(addressw79fY6Q, {from: accounts[2]});

		assert.equal(uint256GNsj4fY, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const uintKi1eb12 = BigInt("129")
		const uintrWVPrd8 = BigInt("1489")
		const addressH3jmo9y = "0x0000000000000000000000000000000000000001"
		const addressOoP4Iwd = accounts[0]
		const uintg3s3Bb0 = BigInt("399")
		const addressnfqCQTl = accounts[0]
		const boolrPqXkk4 = await TPAkNGYVX.lock.call(addressH3jmo9y, uintrWVPrd8, uintKi1eb12, {from: accounts[2]});
		const boolxWzsN0D = await TPAkNGYVX.isOwner.call(addressOoP4Iwd, {from: accounts[1]});
		const boolLf4kPPQ = await TPAkNGYVX.transfer.call(addressnfqCQTl, uintg3s3Bb0, {from: accounts[4]});

		await expect(TPAkNGYVX.lock.call(addressH3jmo9y, uintrWVPrd8, uintKi1eb12, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const addresstwYR5Cc = accounts[3]
		const uintAXsO6k9 = BigInt("1093")
		const uintPPoQRyx = BigInt("1169")
		const addressl5ZRWM7 = accounts[0]
		const uint256GNsj4fY = await TPAkNGYVX.balanceOf.call(addresstwYR5Cc, {from: accounts[4]});
		const uint256gSkMtwA = await TPAkNGYVX.burn.call(uintAXsO6k9, {from: accounts[1]});
		const boolu0loVd3 = await TPAkNGYVX.approve.call(addressl5ZRWM7, uintPPoQRyx, {from: accounts[0]});

		assert.equal(uint256GNsj4fY, BigInt("0"))
		await expect(TPAkNGYVX.burn.call(uintAXsO6k9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const addressVU2UpOv = accounts[3]
		const booldxKt0HL = await TPAkNGYVX.paused.call({from: accounts[3]});
		const uint256GNsj4fY = await TPAkNGYVX.balanceOf.call(addressVU2UpOv, {from: accounts[4]});

		assert.equal(booldxKt0HL, false)
		assert.equal(uint256GNsj4fY, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAHPMcSrR = await TPA.new({from: accounts[0]});
		const addressGHFAkAA = accounts[3]
		const addressfZxzlb = accounts[5]
		const uinttOa4IW = BigInt("1203")
		const addressi9DoJWS = "0x0000000000000000000000000000000000000001"
		const addressFTxa1h = accounts[3]
		const uint256cWdamVb = await TPAHPMcSrR.totalSupply.call({from: accounts[5]});
		const uint8XNhq6ij = await TPAHPMcSrR.decimals.call({from: accounts[4]});
		const uint256CkalYzn = await TPAHPMcSrR.balanceOf.call(addressGHFAkAA, {from: accounts[1]});
		const uint256WpAgADf = await TPAHPMcSrR.balanceOf.call(addressfZxzlb, {from: accounts[0]});
		const uint8sd13Aun = await TPAHPMcSrR.decimals.call({from: accounts[2]});
		const stringCFStVCx = await TPAHPMcSrR.symbol.call({from: accounts[4]});
		const boolCDgIIrR = await TPAHPMcSrR.transferFrom.call(addressFTxa1h, addressi9DoJWS, uinttOa4IW, {from: accounts[1]});

		assert.equal(stringCFStVCx, "TPA")
		assert.equal(uint256CkalYzn, BigInt("0"))
		assert.equal(uint256WpAgADf, BigInt("0"))
		assert.equal(uint256cWdamVb, BigInt("10000000000000000000000000000"))
		assert.equal(uint8XNhq6ij, BigInt("18"))
		assert.equal(uint8sd13Aun, BigInt("18"))
		await expect(TPAHPMcSrR.transferFrom.call(addressFTxa1h, addressi9DoJWS, uinttOa4IW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const addresstUGGgKL = accounts[3]
		const uint256GNsj4fY = await TPAkNGYVX.balanceOf.call(addresstUGGgKL, {from: accounts[4]});
		await TPAkNGYVX.renounceAdmin.call({from: accounts[0]});

		assert.equal(uint256GNsj4fY, BigInt("0"))
		await expect(TPAkNGYVX.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const addresse0cShMP = accounts[3]
		const addressEsSdHb = accounts[2]
		const uint256GNsj4fY = await TPAkNGYVX.balanceOf.call(addresse0cShMP, {from: accounts[4]});
		const boolCPDlmt = await TPAkNGYVX.isOwner.call(addressEsSdHb, {from: accounts[0]});

		assert.equal(boolCPDlmt, true)
		assert.equal(uint256GNsj4fY, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const addressrCoyo7Z = accounts[2]
		const uintnZvdi4 = BigInt("1792")
		const addresseN7lc49 = accounts[2]
		const addressPz0rht = accounts[2]
		const addressF5WbYGb = await TPAkNGYVX.transferOwnership.call(addressrCoyo7Z, {from: accounts[2]});
		const boolZHWYef2 = await TPAkNGYVX.approve.call(addresseN7lc49, uintnZvdi4, {from: accounts[5]});
		const uint256GNsj4fY = await TPAkNGYVX.balanceOf.call(addressPz0rht, {from: accounts[4]});

		assert.equal(boolZHWYef2, true)
		assert.equal(uint256GNsj4fY, BigInt("10000000000000000000000000000"))
	});

	it('test for TPA', async () => {
		const TPAzTXsYQl = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGRIzam5 = "0x0000000000000000000000000000000000000001"
		const uintstq0EPx = BigInt("1764")
		const addressPla2hH8 = accounts[2]
		const stringD3JRlvC = await TPAzTXsYQl.symbol.call({from: accounts[1]});
		const stringLDhFkQH = await TPAzTXsYQl.name.call({from: accounts[5]});
		const boolStP43j2 = await TPAzTXsYQl.isOwner.call(addressGRIzam5, {from: accounts[4]});
		const booluQ8t6uu = await TPAzTXsYQl.unlock.call(addressPla2hH8, uintstq0EPx, {from: accounts[5]});
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const uintN1N4W6 = BigInt("1904")
		const addresshZv6BPr = accounts[3]
		const uintPfrRV7 = BigInt("396")
		const addressjmP7QV = accounts[1]
		const uintc7dMKvX = BigInt("983")
		const addressji2LLAB = accounts[3]
		const addresshdw9nTO = accounts[1]
		const boolhZL9I4 = await TPAkNGYVX.unlock.call(addresshZv6BPr, uintN1N4W6, {from: accounts[2]});
		const boolLf4kPPQ = await TPAkNGYVX.transfer.call(addressjmP7QV, uintPfrRV7, {from: accounts[4]});
		const boolD1dFYM = await TPAkNGYVX.transferFrom.call(addresshdw9nTO, addressji2LLAB, uintc7dMKvX, {from: accounts[0]});

		await expect(TPAkNGYVX.unlock.call(addresshZv6BPr, uintN1N4W6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAHPMcSrR = await TPA.new({from: accounts[0]});
		const uintEhKlqso = BigInt("1203")
		const addressPtzNrJU = "0x00000000000000000000000000000000000000-1"
		const addressEAAb8NQ = accounts[2]
		const uintD9ZPkvi = BigInt("790")
		const addressSh8MtNp = accounts[0]
		const uintaqLE6ps = BigInt("564")
		const addressWdyHJO9 = accounts[3]
		const boolCDgIIrR = await TPAHPMcSrR.transferFrom.call(addressEAAb8NQ, addressPtzNrJU, uintEhKlqso, {from: accounts[1]});
		await TPAHPMcSrR.unpause.call({from: accounts[3]});
		const boolv77Uzg = await TPAHPMcSrR.transfer.call(addressSh8MtNp, uintD9ZPkvi, {from: accounts[1]});
		const addresslV0nIqe = await TPAHPMcSrR.burnFrom.call(addressWdyHJO9, uintaqLE6ps, {from: accounts[0]});

		await expect(TPAHPMcSrR.transferFrom.call(addressEAAb8NQ, addressPtzNrJU, uintEhKlqso, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAqF96wPz = await TPA.new({from: accounts[3]});
		const addressBkuUCmX = accounts[2]
		const addressP2MDRU = "0x0000000000000000000000000000000000000001"
		const stringOzEagyi = await TPAqF96wPz.symbol.call({from: accounts[1]});
		const addresspyJesz0 = await TPAqF96wPz.addAdmin.call(addressBkuUCmX, {from: accounts[3]});
		const boolcILNvoU = await TPAqF96wPz.freezeAccount.call(addressP2MDRU, {from: accounts[3]});
		const stringwpAEnrd = await TPAqF96wPz.symbol.call({from: accounts[0]});

		assert.equal(boolcILNvoU, true)
		assert.equal(stringOzEagyi, "TPA")
		assert.equal(stringwpAEnrd, "TPA")
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const addressaUZd4gc = accounts[3]
		const uintBOPsDab = BigInt("1788")
		const address1vaQQj = accounts[1]
		await TPAkNGYVX.renounceAdmin.call({from: accounts[2]});
		const uint256GNsj4fY = await TPAkNGYVX.balanceOf.call(addressaUZd4gc, {from: accounts[4]});
		const uint25653Qggz = await TPAkNGYVX.totalSupply.call({from: accounts[1]});
		const boolDMDz7bV = await TPAkNGYVX.decreaseAllowance.call(address1vaQQj, uintBOPsDab, {from: accounts[1]});

		await expect(TPAkNGYVX.renounceAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const addressiN4tb2o = accounts[4]
		const uintNmauT86 = BigInt("1814")
		const uintoC5VIb9 = BigInt("1404")
		const addressEVuC19P = accounts[4]
		const addressbILp3MX = accounts[1]
		const uint256GNsj4fY = await TPAkNGYVX.balanceOf.call(addressiN4tb2o, {from: accounts[4]});
		const stringm8a6V4 = await TPAkNGYVX.symbol.call({from: accounts[3]});
		const boolLLbF3yh = await TPAkNGYVX.transferWithLock.call(addressEVuC19P, uintoC5VIb9, uintNmauT86, {from: accounts[2]});
		const boolnzljOPW = await TPAkNGYVX.isOwner.call(addressbILp3MX, {from: accounts[0]});

		assert.equal(boolLLbF3yh, true)
		assert.equal(boolnzljOPW, false)
		assert.equal(stringm8a6V4, "TPA")
		assert.equal(uint256GNsj4fY, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAkNGYVX = await TPA.new({from: accounts[2]});
		const uintPlvXHj5 = BigInt("1315")
		const addresseS38WGx = accounts[0]
		const addressXasfbNu = accounts[4]
		await TPAkNGYVX.pause.call({from: accounts[2]});
		const addresskcrYh2p = await TPAkNGYVX.burnFrom.call(addresseS38WGx, uintPlvXHj5, {from: accounts[2]});
		const uint256GNsj4fY = await TPAkNGYVX.balanceOf.call(addressXasfbNu, {from: accounts[4]});

		await expect(TPAkNGYVX.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})