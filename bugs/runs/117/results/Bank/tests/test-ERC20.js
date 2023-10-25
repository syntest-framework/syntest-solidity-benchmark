const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractmpS6tmb = await ERC20.new({from: accounts[1]});
		const valueNGbtFnh = BigInt("280")
		const spenderoeR7Ex9 = accounts[5]
		const valueA2U5w65 = BigInt("1520")
		const spenderNIplRjy = accounts[1]
		const ownerSaTH4tC = accounts[1]
		const nullNypYKTx = await contractmpS6tmb.approve.call(spenderoeR7Ex9, valueNGbtFnh, {from: accounts[0]});
		const nulltONzZOO = await contractmpS6tmb.approve.call(spenderNIplRjy, valueA2U5w65, {from: accounts[1]});
		const nullFAifVDE = await contractmpS6tmb.balanceOf.call(ownerSaTH4tC, {from: accounts[4]});

		assert.equal(nullFAifVDE, 0)
		assert.equal(nullNypYKTx, true)
		assert.equal(nulltONzZOO, true)
	});

	it('test for ERC20', async () => {
		const contract1l96Ed = await ERC20.new({from: accounts[2]});
		const valueIt4Xetb = BigInt("1184")
		const tohKAlrBb = "0x0000000000000000000000000000000000000001"
		const fromZ5UWzzv = accounts[2]
		const spenderk2BKraz = accounts[5]
		const ownerLKqvrgx = accounts[2]
		const nullVS87vbl = await contract1l96Ed.transferFrom.call(fromZ5UWzzv, tohKAlrBb, valueIt4Xetb, {from: accounts[5]});
		const nullnltdSDA = await contract1l96Ed.allowance.call(ownerLKqvrgx, spenderk2BKraz, {from: accounts[4]});

		await expect(contract1l96Ed.transferFrom.call(fromZ5UWzzv, tohKAlrBb, valueIt4Xetb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractGVhMFN5 = await ERC20.new({from: accounts[3]});
		const spenderfT0XArC = accounts[0]
		const ownergP0ZnCg = accounts[4]
		const spenderaKOx801 = accounts[0]
		const ownerNOQEXPR = "0x0000000000000000000000000000000000000001"
		const nullvsrWOS9 = await contractGVhMFN5.allowance.call(ownergP0ZnCg, spenderfT0XArC, {from: accounts[2]});
		const nulljEo7Eel = await contractGVhMFN5.allowance.call(ownerNOQEXPR, spenderaKOx801, {from: accounts[4]});

		assert.equal(nulljEo7Eel, 0)
		assert.equal(nullvsrWOS9, 0)
	});

	it('test for ERC20', async () => {
		const contractxi4Y5eN = await ERC20.new({from: accounts[2]});
		const addedValuepGmNHZM = BigInt("1697")
		const spenderF3rLjIF = accounts[4]
		const addedValuehG8NUlB = BigInt("846")
		const spenderINOKY1W = accounts[1]
		const ownerzLpPmN8 = accounts[3]
		const subtractedValueuFTX41O = BigInt("1123")
		const spenderJiQ4RpH = "0x0000000000000000000000000000000000000001"
		const ownervMzQrCm = accounts[2]
		const nullfHRbAGf = await contractxi4Y5eN.increaseAllowance.call(spenderF3rLjIF, addedValuepGmNHZM, {from: accounts[4]});
		const nullHSSZI8g = await contractxi4Y5eN.increaseAllowance.call(spenderINOKY1W, addedValuehG8NUlB, {from: accounts[0]});
		const nullAi2jmr = await contractxi4Y5eN.balanceOf.call(ownerzLpPmN8, {from: accounts[0]});
		const nullTcG2uti = await contractxi4Y5eN.decreaseAllowance.call(spenderJiQ4RpH, subtractedValueuFTX41O, {from: accounts[1]});
		const nullsuSE5V = await contractxi4Y5eN.balanceOf.call(ownervMzQrCm, {from: accounts[2]});

		assert.equal(nullAi2jmr, 0)
		assert.equal(nullHSSZI8g, true)
		assert.equal(nullfHRbAGf, true)
		await expect(contractxi4Y5eN.decreaseAllowance.call(spenderJiQ4RpH, subtractedValueuFTX41O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractyia23ay = await ERC20.new({from: accounts[3]});
		const ownerpnLVxlO = accounts[5]
		const valueHkQrqQY = BigInt("976")
		const toL1e6WQf = accounts[0]
		const valueYRmAEYG = BigInt("206")
		const toUyea6Ct = "0x0000000000000000000000000000000000000001"
		const valueag9DFzM = BigInt("1556")
		const to0aAEo1 = accounts[3]
		const fromVsfqBOP = accounts[4]
		const nullaIAiz8x = await contractyia23ay.balanceOf.call(ownerpnLVxlO, {from: accounts[2]});
		const nullx99yWSi = await contractyia23ay.transfer.call(toL1e6WQf, valueHkQrqQY, {from: "0x0000000000000000000000000000000000000001"});
		const nullpPPb3ya = await contractyia23ay.transfer.call(toUyea6Ct, valueYRmAEYG, {from: accounts[4]});
		const nullQS88I1 = await contractyia23ay.transferFrom.call(fromVsfqBOP, to0aAEo1, valueag9DFzM, {from: accounts[3]});

		assert.equal(nullaIAiz8x, 0)
		await expect(contractyia23ay.transfer.call(toL1e6WQf, valueHkQrqQY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractlbUeAOL = await ERC20.new({from: accounts[5]});
		const spenderwrfeVob = accounts[3]
		const ownerdSA3pvC = accounts[4]
		const ownerDH8mDuW = "0x0000000000000000000000000000000000000001"
		const valueRfa8cKo = BigInt("1623")
		const spenderncDmMyS = accounts[4]
		const spenderlQa7l6t = accounts[4]
		const ownerUGg1hrN = "0x0000000000000000000000000000000000000001"
		const nullWRS4oC2 = await contractlbUeAOL.allowance.call(ownerdSA3pvC, spenderwrfeVob, {from: accounts[2]});
		const nullHbPGesW = await contractlbUeAOL.totalSupply.call({from: accounts[3]});
		const nullQ21VB7e = await contractlbUeAOL.balanceOf.call(ownerDH8mDuW, {from: accounts[3]});
		const nullFcDHs02 = await contractlbUeAOL.approve.call(spenderncDmMyS, valueRfa8cKo, {from: accounts[0]});
		const nullCWAEDz3 = await contractlbUeAOL.allowance.call(ownerUGg1hrN, spenderlQa7l6t, {from: accounts[3]});

		assert.equal(nullCWAEDz3, 0)
		assert.equal(nullFcDHs02, true)
		assert.equal(nullHbPGesW, 0)
		assert.equal(nullQ21VB7e, 0)
		assert.equal(nullWRS4oC2, 0)
	});

	it('test for ERC20', async () => {
		const contracthwUfYce = await ERC20.new({from: accounts[2]});
		const spenderpzLGs5D = accounts[3]
		const ownerlpdChDb = accounts[1]
		const spenderLHqnpRI = accounts[2]
		const owneroE65csG = accounts[0]
		const valuela7R2Qa = BigInt("1184")
		const toIwEvEuE = "0x00000000000000000000000000000000000000-1"
		const fromnRthWdZ = accounts[2]
		const nullw89T7YB = await contracthwUfYce.allowance.call(ownerlpdChDb, spenderpzLGs5D, {from: accounts[2]});
		const nullAjJ0epq = await contracthwUfYce.allowance.call(owneroE65csG, spenderLHqnpRI, {from: accounts[0]});
		const nullrN35mYC = await contracthwUfYce.transferFrom.call(fromnRthWdZ, toIwEvEuE, valuela7R2Qa, {from: accounts[5]});

		assert.equal(nullAjJ0epq, 0)
		assert.equal(nullw89T7YB, 0)
		await expect(contracthwUfYce.transferFrom.call(fromnRthWdZ, toIwEvEuE, valuela7R2Qa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractYf8wtR = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownereu3neTG = accounts[1]
		const valueSMJkXp = BigInt("211")
		const spenderZSUYZKn = accounts[3]
		const valueisD8MKh = BigInt("1229")
		const toW71ZbqD = accounts[5]
		const spenderusLFI6J = accounts[0]
		const ownerEuEcqRR = "0x0000000000000000000000000000000000000001"
		const valueoYCgCzn = BigInt("1188")
		const spendercMZ7th = accounts[1]
		const nullemmvkAO = await contractYf8wtR.balanceOf.call(ownereu3neTG, {from: accounts[3]});
		const nullc8pGwDF = await contractYf8wtR.approve.call(spenderZSUYZKn, valueSMJkXp, {from: "0x0000000000000000000000000000000000000001"});
		const nullAYVpZ6Z = await contractYf8wtR.transfer.call(toW71ZbqD, valueisD8MKh, {from: accounts[0]});
		const nullk066grZ = await contractYf8wtR.allowance.call(ownerEuEcqRR, spenderusLFI6J, {from: accounts[1]});
		const nullzCtweAT = await contractYf8wtR.approve.call(spendercMZ7th, valueoYCgCzn, {from: accounts[0]});
	});
})