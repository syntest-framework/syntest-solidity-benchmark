const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEy2tiUQM = await REXUNIFINANCE.new({from: accounts[3]});
		const addressZb222VQ = accounts[0]
		const uintGmjDdTV = BigInt("226")
		const addressnuASyrR = accounts[3]
		const uintNSVvv84 = BigInt("375")
		const addressxhlPMDf = accounts[0]
		const addressBIxkuJb = accounts[2]
		const addressmtQxA9w = accounts[4]
//		const addressWQTu6GU = await REXUNIFINANCEy2tiUQM.transferOwnership.call(addressZb222VQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyu0rbl = await REXUNIFINANCEy2tiUQM.decreaseApproval.call(addressnuASyrR, uintGmjDdTV, {from: accounts[3]});
//		const bool9s2xer = await REXUNIFINANCEy2tiUQM.transferFrom.call(addressBIxkuJb, addressxhlPMDf, uintNSVvv84, {from: accounts[4]});
//		const uint256HSEl8b = await REXUNIFINANCEy2tiUQM.balanceOf.call(addressmtQxA9w, {from: accounts[2]});

		await expect(REXUNIFINANCEy2tiUQM.transferOwnership.call(addressZb222VQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEHqaKxVM = await REXUNIFINANCE.new({from: accounts[5]});
		const uintoaBpRTC = BigInt("904")
		const addressPzZGnRP = accounts[1]
		const uintSHzoT7S = BigInt("319")
		const addressbq6hxsS = accounts[0]
		const uintSMSV6l = BigInt("665")
		const addressWcWkmDl = accounts[3]
		const addressa1FR4ZY = accounts[1]
		const uintYjKOJ8 = BigInt("1938")
		const addresskTZNmqy = "0x0000000000000000000000000000000000000001"
		const booljYRacWw = await REXUNIFINANCEHqaKxVM.approve.call(addressPzZGnRP, uintoaBpRTC, {from: accounts[4]});
		const boolBnwiNUD = await REXUNIFINANCEHqaKxVM.approve.call(addressbq6hxsS, uintSHzoT7S, {from: accounts[4]});
//		const boolNqgGth5 = await REXUNIFINANCEHqaKxVM.transferFrom.call(addressa1FR4ZY, addressWcWkmDl, uintSMSV6l, {from: accounts[1]});
//		const boolrYOmM6S = await REXUNIFINANCEHqaKxVM.approve.call(addresskTZNmqy, uintYjKOJ8, {from: accounts[1]});

		assert.equal(boolBnwiNUD, true)
		assert.equal(booljYRacWw, true)
		await expect(REXUNIFINANCEHqaKxVM.transferFrom.call(addressa1FR4ZY, addressWcWkmDl, uintSMSV6l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEEPaMCHX = await REXUNIFINANCE.new({from: accounts[2]});
		const uintymbpRA1 = BigInt("78")
		const addressscqgB1B = accounts[4]
		const uintAwXKTj2 = BigInt("583")
		const addressF2pOeIJ = accounts[1]
		const uintsEokBQO = BigInt("654")
		const addressWb4luES = accounts[5]
		const uintEG01aHe = BigInt("690")
		const addressqtGrD3h = accounts[0]
		const addresssh7Mcaj = accounts[2]
		const uintNVw60gx = BigInt("755")
		const addressWZD3Ut = accounts[2]
		const uintvnLspaH = BigInt("631")
		const addresshQsb31O = accounts[1]
		const boolslJE3C2 = await REXUNIFINANCEEPaMCHX.approve.call(addressscqgB1B, uintymbpRA1, {from: accounts[5]});
		const boolfm5NybG = await REXUNIFINANCEEPaMCHX.decreaseApproval.call(addressF2pOeIJ, uintAwXKTj2, {from: accounts[5]});
		const boolxPBrDzG = await REXUNIFINANCEEPaMCHX.decreaseApproval.call(addressWb4luES, uintsEokBQO, {from: accounts[1]});
//		const boolHzzykgJ = await REXUNIFINANCEEPaMCHX.transferFrom.call(addresssh7Mcaj, addressqtGrD3h, uintEG01aHe, {from: accounts[1]});
//		const boolUaLupA0 = await REXUNIFINANCEEPaMCHX.decreaseApproval.call(addressWZD3Ut, uintNVw60gx, {from: accounts[1]});
//		const boolLIJPnO5 = await REXUNIFINANCEEPaMCHX.approve.call(addresshQsb31O, uintvnLspaH, {from: accounts[0]});

		assert.equal(boolfm5NybG, true)
		assert.equal(boolslJE3C2, true)
		assert.equal(boolxPBrDzG, true)
		await expect(REXUNIFINANCEEPaMCHX.transferFrom.call(addresssh7Mcaj, addressqtGrD3h, uintEG01aHe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEcjoAVnT = await REXUNIFINANCE.new({from: accounts[1]});
		const uintL5RWPbN = BigInt("1844")
		const addressMWK7EpN = accounts[4]
		const uintEnBIIRZ = BigInt("812")
		const addresskXOaiIQ = accounts[4]
		const uint5QyK02 = BigInt("550")
		const addresslAMjoSr = accounts[1]
		const addresssQd11YT = accounts[0]
		const addresshm1SL3S = accounts[2]
		const boola5LJBal = await REXUNIFINANCEcjoAVnT.decreaseApproval.call(addressMWK7EpN, uintL5RWPbN, {from: accounts[1]});
		const boolWiqgHPW = await REXUNIFINANCEcjoAVnT.approve.call(addresskXOaiIQ, uintEnBIIRZ, {from: accounts[1]});
		const boolso5bdUA = await REXUNIFINANCEcjoAVnT.approve.call(addresslAMjoSr, uint5QyK02, {from: accounts[5]});
		const uint256XyhvrwF = await REXUNIFINANCEcjoAVnT.allowance.call(addresshm1SL3S, addresssQd11YT, {from: accounts[0]});

		assert.equal(boolWiqgHPW, true)
		assert.equal(boola5LJBal, true)
		assert.equal(boolso5bdUA, true)
		assert.equal(uint256XyhvrwF, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEdbsbjR0 = await REXUNIFINANCE.new({from: accounts[0]});
		const uintvSAkWjl = BigInt("1588")
		const address9GAx9i = accounts[2]
		const uintcjE5zO = BigInt("1355")
		const addressPV9nAEd = accounts[3]
		const uintEyHmwBC = BigInt("1806")
		const addressQSvLEC = accounts[0]
		const uintdeSbFwk = BigInt("211")
		const addressk5Ai9oC = accounts[4]
//		const boolURF5Xng = await REXUNIFINANCEdbsbjR0.transfer.call(address9GAx9i, uintvSAkWjl, {from: accounts[0]});
//		const boolIxMZtry = await REXUNIFINANCEdbsbjR0.approve.call(addressPV9nAEd, uintcjE5zO, {from: accounts[4]});
//		const boolxmUwTAH = await REXUNIFINANCEdbsbjR0.approve.call(addressQSvLEC, uintEyHmwBC, {from: accounts[2]});
//		const boolWh7ROK = await REXUNIFINANCEdbsbjR0.approve.call(addressk5Ai9oC, uintdeSbFwk, {from: accounts[0]});

		await expect(REXUNIFINANCEdbsbjR0.transfer.call(address9GAx9i, uintvSAkWjl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCED1YZyel = await REXUNIFINANCE.new({from: accounts[1]});
		const uintjw2HLQa = BigInt("2001")
		const addressY7eqr9L = accounts[2]
		const addressZqL8CL = accounts[0]
		const uintJAjVjKS = BigInt("1874")
		const addressW9qHfyX = accounts[3]
		const address4q5C45 = accounts[3]
		const boolPRoLPar = await REXUNIFINANCED1YZyel.increaseApproval.call(addressY7eqr9L, uintjw2HLQa, {from: accounts[3]});
		const uint256brS1XU = await REXUNIFINANCED1YZyel.balanceOf.call(addressZqL8CL, {from: accounts[1]});
//		const boolzD1Q7c = await REXUNIFINANCED1YZyel.transfer.call(addressW9qHfyX, uintJAjVjKS, {from: accounts[0]});
//		const addressMtFZSog = await REXUNIFINANCED1YZyel.transferOwnership.call(address4q5C45, {from: accounts[4]});

		assert.equal(boolPRoLPar, true)
		assert.equal(uint256brS1XU, BigInt("0"))
		await expect(REXUNIFINANCED1YZyel.transfer.call(addressW9qHfyX, uintJAjVjKS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEIfOhl6v = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKzZeKn = accounts[1]
		const uintFMNzZp1 = BigInt("339")
		const addressA5dKGkI = accounts[3]
		const uintZowmPFI = BigInt("689")
		const addressglTZxpP = accounts[2]
		const addressrcVBAJy = await REXUNIFINANCEIfOhl6v.transferOwnership.call(addressKzZeKn, {from: accounts[0]});
		const boolJCasfxE = await REXUNIFINANCEIfOhl6v.transfer.call(addressA5dKGkI, uintFMNzZp1, {from: accounts[0]});
		const boolzMhAPQ = await REXUNIFINANCEIfOhl6v.transfer.call(addressglTZxpP, uintZowmPFI, {from: accounts[2]});
	});
})