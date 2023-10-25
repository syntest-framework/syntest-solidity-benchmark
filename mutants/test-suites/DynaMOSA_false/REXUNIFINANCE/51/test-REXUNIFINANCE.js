const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCE9cuUxb = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSovJ4DF = BigInt("567")
		const addressXJe41VH = accounts[2]
		const uintpSSC01f = BigInt("1869")
		const addressRyxtsGZ = accounts[4]
		const uintlHjr6Sa = BigInt("1215")
		const addresssh2w0Vg = accounts[0]
		const uintHlpfWg0 = BigInt("422")
		const address6dy2nL = accounts[2]
		const uint1p5ZSo = BigInt("1598")
		const addressBKYIuwN = accounts[1]
		const addresscJFll0p = accounts[0]
		const boolrPAhx65 = await REXUNIFINANCE9cuUxb.transfer.call(addressXJe41VH, uintSovJ4DF, {from: accounts[3]});
		const boolM9BhiZB = await REXUNIFINANCE9cuUxb.approve.call(addressRyxtsGZ, uintpSSC01f, {from: accounts[1]});
		const boolPxnbO1q = await REXUNIFINANCE9cuUxb.increaseApproval.call(addresssh2w0Vg, uintlHjr6Sa, {from: accounts[0]});
		const boolehfxXi = await REXUNIFINANCE9cuUxb.decreaseApproval.call(address6dy2nL, uintHlpfWg0, {from: accounts[2]});
		const boolRr3wcJR = await REXUNIFINANCE9cuUxb.transferFrom.call(addresscJFll0p, addressBKYIuwN, uint1p5ZSo, {from: accounts[1]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCESwpj8bb = await REXUNIFINANCE.new({from: accounts[5]});
		const addressTJ1Ygde = accounts[2]
		const uintoo7WsWA = BigInt("405")
		const addressrrLJlaP = accounts[2]
		const addressZta4svf = accounts[0]
//		const addressa4WQyHU = await REXUNIFINANCESwpj8bb.transferOwnership.call(addressTJ1Ygde, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcGPJity = await REXUNIFINANCESwpj8bb.transferFrom.call(addressZta4svf, addressrrLJlaP, uintoo7WsWA, {from: accounts[2]});

		await expect(REXUNIFINANCESwpj8bb.transferOwnership.call(addressTJ1Ygde, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEHSznxa = await REXUNIFINANCE.new({from: accounts[0]});
		const uintbgE7oRN = BigInt("1040")
		const addressbMyRdK7 = accounts[2]
		const addressE3V2MFH = accounts[4]
		const uintRwrILDp = BigInt("1068")
		const addressASmfzU7 = accounts[2]
		const booldZ2ZINM = await REXUNIFINANCEHSznxa.increaseApproval.call(addressbMyRdK7, uintbgE7oRN, {from: accounts[4]});
		const addressoWu7iwK = await REXUNIFINANCEHSznxa.transferOwnership.call(addressE3V2MFH, {from: accounts[0]});
//		const boolzne4uk2 = await REXUNIFINANCEHSznxa.transfer.call(addressASmfzU7, uintRwrILDp, {from: accounts[0]});

		assert.equal(booldZ2ZINM, true)
		await expect(REXUNIFINANCEHSznxa.transfer.call(addressASmfzU7, uintRwrILDp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCETF4TD19 = await REXUNIFINANCE.new({from: accounts[3]});
		const uinti71H5Iz = BigInt("132")
		const addressctQ1aRO = accounts[2]
		const uintN82dgEs = BigInt("626")
		const addressH1pOyKL = accounts[4]
		const uintx3iRSCX = BigInt("1069")
		const addressMPSQkgS = accounts[4]
		const uintbEnR3hB = BigInt("942")
		const addressOa2e3lq = accounts[3]
		const addresshYiK97g = accounts[5]
		const booldsJeynS = await REXUNIFINANCETF4TD19.approve.call(addressctQ1aRO, uinti71H5Iz, {from: accounts[1]});
		const boolkq1apLc = await REXUNIFINANCETF4TD19.increaseApproval.call(addressH1pOyKL, uintN82dgEs, {from: accounts[0]});
		const boolc5DoHvD = await REXUNIFINANCETF4TD19.increaseApproval.call(addressMPSQkgS, uintx3iRSCX, {from: accounts[5]});
//		const boolXAxPr4g = await REXUNIFINANCETF4TD19.transfer.call(addressOa2e3lq, uintbEnR3hB, {from: accounts[3]});
//		const uint256eDBh3C5 = await REXUNIFINANCETF4TD19.balanceOf.call(addresshYiK97g, {from: accounts[3]});

		assert.equal(boolc5DoHvD, true)
		assert.equal(booldsJeynS, true)
		assert.equal(boolkq1apLc, true)
		await expect(REXUNIFINANCETF4TD19.transfer.call(addressOa2e3lq, uintbEnR3hB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEnVTtybm = await REXUNIFINANCE.new({from: accounts[0]});
		const uintmsIhPwU = BigInt("859")
		const addressWfb6uJG = "0x0000000000000000000000000000000000000001"
		const uintReqVDmL = BigInt("1140")
		const addressjufqJ9 = accounts[0]
		const addressztxY5SO = accounts[2]
		const uintBnYXsfV = BigInt("1106")
		const addressffbvsp = accounts[3]
		const addressqUyI7Ml = accounts[2]
		const addressHD0cIFJ = accounts[4]
		const addresszSd4tno = accounts[2]
		const boolvDuc7y = await REXUNIFINANCEnVTtybm.increaseApproval.call(addressWfb6uJG, uintmsIhPwU, {from: accounts[2]});
//		const boolGfJcb1 = await REXUNIFINANCEnVTtybm.transferFrom.call(addressztxY5SO, addressjufqJ9, uintReqVDmL, {from: accounts[0]});
//		const boolEPuWF2Y = await REXUNIFINANCEnVTtybm.transferFrom.call(addressqUyI7Ml, addressffbvsp, uintBnYXsfV, {from: accounts[2]});
//		const addresshiGKybU = await REXUNIFINANCEnVTtybm.transferOwnership.call(addressHD0cIFJ, {from: accounts[4]});
//		const addressoWsAKVB = await REXUNIFINANCEnVTtybm.transferOwnership.call(addresszSd4tno, {from: accounts[3]});

		assert.equal(boolvDuc7y, true)
		await expect(REXUNIFINANCEnVTtybm.transferFrom.call(addressztxY5SO, addressjufqJ9, uintReqVDmL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEYgXIw8w = await REXUNIFINANCE.new({from: accounts[4]});
		const uinthUqWpmU = BigInt("1025")
		const addresseXWPOpg = accounts[1]
		const uintZNax3C3 = BigInt("72")
		const addressTl1sUoC = accounts[3]
		const addressDqJZyP0 = accounts[1]
		const addressqJkPJjn = accounts[2]
		const boolHfXCNWh = await REXUNIFINANCEYgXIw8w.decreaseApproval.call(addresseXWPOpg, uinthUqWpmU, {from: accounts[2]});
//		const boolVArTfj = await REXUNIFINANCEYgXIw8w.decreaseApproval.call(addressTl1sUoC, uintZNax3C3, {from: accounts[3]});
//		const uint256FuzuuGj = await REXUNIFINANCEYgXIw8w.allowance.call(addressqJkPJjn, addressDqJZyP0, {from: accounts[2]});

		assert.equal(boolHfXCNWh, true)
		await expect(REXUNIFINANCEYgXIw8w.decreaseApproval.call(addressTl1sUoC, uintZNax3C3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEnVTtybm = await REXUNIFINANCE.new({from: accounts[0]});
		const addressvTATQw = accounts[5]
		const addressPFddU63 = accounts[4]
		const uintO4JFuxX = BigInt("859")
		const addressuKhonHZ = "0x0000000000000000000000000000000000000001"
		const uintytiS6ON = BigInt("1140")
		const addressXMnwPbl = accounts[0]
		const addresstMxBz3B = accounts[2]
		const uintmyRkg4x = BigInt("1522")
		const addressG5K4UjS = accounts[3]
		const addressCZA2CyT = accounts[2]
		const addresshlgbaDC = accounts[4]
		const uintiCBrlFt = BigInt("1827")
		const addresshQFoL88 = accounts[2]
		const addressboZe1tM = accounts[0]
		const addressoik8RXN = accounts[2]
		const uint256KFICPOl = await REXUNIFINANCEnVTtybm.allowance.call(addressPFddU63, addressvTATQw, {from: accounts[0]});
		const boolvDuc7y = await REXUNIFINANCEnVTtybm.increaseApproval.call(addressuKhonHZ, uintO4JFuxX, {from: accounts[2]});
//		const boolGfJcb1 = await REXUNIFINANCEnVTtybm.transferFrom.call(addresstMxBz3B, addressXMnwPbl, uintytiS6ON, {from: accounts[0]});
//		const boolEPuWF2Y = await REXUNIFINANCEnVTtybm.transferFrom.call(addressCZA2CyT, addressG5K4UjS, uintmyRkg4x, {from: accounts[2]});
//		const addresshiGKybU = await REXUNIFINANCEnVTtybm.transferOwnership.call(addresshlgbaDC, {from: accounts[4]});
//		const boolmSFCbg0 = await REXUNIFINANCEnVTtybm.increaseApproval.call(addresshQFoL88, uintiCBrlFt, {from: accounts[4]});
//		const uint256mi2Qybc = await REXUNIFINANCEnVTtybm.balanceOf.call(addressboZe1tM, {from: accounts[1]});
//		const addressoWsAKVB = await REXUNIFINANCEnVTtybm.transferOwnership.call(addressoik8RXN, {from: accounts[3]});

		assert.equal(boolvDuc7y, true)
		assert.equal(uint256KFICPOl, BigInt("0"))
		await expect(REXUNIFINANCEnVTtybm.transferFrom.call(addresstMxBz3B, addressXMnwPbl, uintytiS6ON, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})