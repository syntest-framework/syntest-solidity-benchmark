const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEXC1ve5B = await REXUNIFINANCE.new({from: accounts[4]});
		const addressBKyy9Og = accounts[1]
		const uintD072eT7 = BigInt("1613")
		const addressz81Xl0b = accounts[4]
		const uintTBljsjJ = BigInt("1858")
		const addressvvY7NIe = "0x0000000000000000000000000000000000000001"
		const uintm0uFvRE = BigInt("1052")
		const addressJR4yp8Q = accounts[4]
		const uint256yY2aT0q = await REXUNIFINANCEXC1ve5B.balanceOf.call(addressBKyy9Og, {from: accounts[4]});
		const booldPbBlTN = await REXUNIFINANCEXC1ve5B.decreaseApproval.call(addressz81Xl0b, uintD072eT7, {from: "0x0000000000000000000000000000000000000001"});
		const boolamwWpCp = await REXUNIFINANCEXC1ve5B.decreaseApproval.call(addressvvY7NIe, uintTBljsjJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolxSBu09 = await REXUNIFINANCEXC1ve5B.approve.call(addressJR4yp8Q, uintm0uFvRE, {from: accounts[5]});

		assert.equal(booldPbBlTN, true)
		assert.equal(uint256yY2aT0q, BigInt("0"))
		await expect(REXUNIFINANCEXC1ve5B.decreaseApproval.call(addressvvY7NIe, uintTBljsjJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEL3YCk5W = await REXUNIFINANCE.new({from: accounts[4]});
		const addressxer7bah = accounts[4]
		const addressWu33mqu = accounts[2]
		const addressi1DntzP = accounts[1]
		const addressDsYjoRJ = await REXUNIFINANCEL3YCk5W.transferOwnership.call(addressxer7bah, {from: accounts[1]});
		const addressasun649 = await REXUNIFINANCEL3YCk5W.transferOwnership.call(addressWu33mqu, {from: accounts[4]});
		const uint256SzzkRLG = await REXUNIFINANCEL3YCk5W.transferableTokens.call(addressi1DntzP, {from: accounts[1]});

		await expect(REXUNIFINANCEL3YCk5W.transferOwnership.call(addressxer7bah, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEJkVlshV = await REXUNIFINANCE.new({from: accounts[5]});
		const uint0UMYFW = BigInt("278")
		const addressfr36m0Z = accounts[3]
		const uintnra9y8C = BigInt("2005")
		const addressBOSkAQu = accounts[3]
		const addressiKpaftE = accounts[4]
		const uintd5qsxSa = BigInt("491")
		const addressPkZmnT = accounts[0]
		const uintyuOAbIm = BigInt("1343")
		const addressvrxEhqb = accounts[3]
		const boolLhvI4A2 = await REXUNIFINANCEJkVlshV.transfer.call(addressfr36m0Z, uint0UMYFW, {from: accounts[3]});
		const boolD1gL2wk = await REXUNIFINANCEJkVlshV.decreaseApproval.call(addressBOSkAQu, uintnra9y8C, {from: accounts[3]});
		const addresskdAVCjE = await REXUNIFINANCEJkVlshV.transferOwnership.call(addressiKpaftE, {from: "0x0000000000000000000000000000000000000001"});
		const boolSiPkjQt = await REXUNIFINANCEJkVlshV.increaseApproval.call(addressPkZmnT, uintd5qsxSa, {from: accounts[1]});
		const boolP93nPwr = await REXUNIFINANCEJkVlshV.approve.call(addressvrxEhqb, uintyuOAbIm, {from: accounts[0]});

		await expect(REXUNIFINANCEJkVlshV.transfer.call(addressfr36m0Z, uint0UMYFW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEYAox3Vh = await REXUNIFINANCE.new({from: accounts[5]});
		const uintIYq4vMm = BigInt("7")
		const addressoZCQS1t = accounts[2]
		const uintRqTve8a = BigInt("1957")
		const addresshjQBIS1 = accounts[0]
		const uintnfCludL = BigInt("844")
		const addressqBDQvxO = accounts[0]
		const addressXOKc60O = accounts[0]
		const uintYrcP5PE = BigInt("368")
		const addresshKLbrO4 = "0x0000000000000000000000000000000000000001"
		const uintZx4tJUE = BigInt("164")
		const addressYCRIqgZ = "0x0000000000000000000000000000000000000001"
		const uintZanB3oU = BigInt("95")
		const addressbJI2miE = accounts[3]
		const booloJrpfhx = await REXUNIFINANCEYAox3Vh.decreaseApproval.call(addressoZCQS1t, uintIYq4vMm, {from: accounts[3]});
		const boolKnwp99G = await REXUNIFINANCEYAox3Vh.approve.call(addresshjQBIS1, uintRqTve8a, {from: accounts[2]});
		const boolYzgxh7t = await REXUNIFINANCEYAox3Vh.transferFrom.call(addressXOKc60O, addressqBDQvxO, uintnfCludL, {from: accounts[1]});
		const boolsTHIj3E = await REXUNIFINANCEYAox3Vh.decreaseApproval.call(addresshKLbrO4, uintYrcP5PE, {from: accounts[3]});
		const booleeDiYEG = await REXUNIFINANCEYAox3Vh.approve.call(addressYCRIqgZ, uintZx4tJUE, {from: "0x0000000000000000000000000000000000000001"});
		const bool2Tl6GF = await REXUNIFINANCEYAox3Vh.approve.call(addressbJI2miE, uintZanB3oU, {from: accounts[3]});

		assert.equal(boolKnwp99G, true)
		assert.equal(booloJrpfhx, true)
		await expect(REXUNIFINANCEYAox3Vh.transferFrom.call(addressXOKc60O, addressqBDQvxO, uintnfCludL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEEat0udP = await REXUNIFINANCE.new({from: accounts[0]});
		const uintzRiZfUX = BigInt("176")
		const addressmLsR7re = accounts[4]
		const uint0aEf6J = BigInt("1242")
		const addresslhvpPSn = accounts[4]
		const uint6M26IL = BigInt("2031")
		const addressVqJnjDP = accounts[0]
		const boolNENotS7 = await REXUNIFINANCEEat0udP.increaseApproval.call(addressmLsR7re, uintzRiZfUX, {from: accounts[3]});
		const boolsJfWGSG = await REXUNIFINANCEEat0udP.decreaseApproval.call(addresslhvpPSn, uint0aEf6J, {from: accounts[2]});
		const boolyShOgEH = await REXUNIFINANCEEat0udP.transfer.call(addressVqJnjDP, uint6M26IL, {from: accounts[4]});

		assert.equal(boolNENotS7, true)
		assert.equal(boolsJfWGSG, true)
		await expect(REXUNIFINANCEEat0udP.transfer.call(addressVqJnjDP, uint6M26IL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEKPx19V = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkkfnxnD = BigInt("1698")
		const addressgR9YyI6 = accounts[4]
		const addresswoqeigx = accounts[0]
		const uintzRDrk08 = BigInt("499")
		const addressjAQIkX7 = accounts[4]
		const addressll40meS = accounts[4]
		const boolurw7jQJ = await REXUNIFINANCEKPx19V.transfer.call(addressgR9YyI6, uintkkfnxnD, {from: accounts[0]});
		const uint256gsEKZyy = await REXUNIFINANCEKPx19V.transferableTokens.call(addresswoqeigx, {from: accounts[0]});
		const boolcIfCzRN = await REXUNIFINANCEKPx19V.transferFrom.call(addressll40meS, addressjAQIkX7, uintzRDrk08, {from: accounts[0]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEtfcFIBO = await REXUNIFINANCE.new({from: accounts[4]});
		const addressUMl0HX = "0x0000000000000000000000000000000000000000"
		const addressT4KK8Fh = accounts[0]
		const uinthdp48gV = BigInt("1318")
		const addressstdOsRA = accounts[4]
		const addressslgU1Bu = accounts[4]
		const uint256GIQsR9M = await REXUNIFINANCEtfcFIBO.allowance.call(addressT4KK8Fh, addressUMl0HX, {from: "0x0000000000000000000000000000000000000001"});
		const boolaRvlO2C = await REXUNIFINANCEtfcFIBO.transferFrom.call(addressslgU1Bu, addressstdOsRA, uinthdp48gV, {from: accounts[2]});

		assert.equal(uint256GIQsR9M, BigInt("0"))
		await expect(REXUNIFINANCEtfcFIBO.transferFrom.call(addressslgU1Bu, addressstdOsRA, uinthdp48gV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEsRK7i8v = await REXUNIFINANCE.new({from: accounts[4]});
		const uintySTVrS = BigInt("353")
		const addressre6L2yK = accounts[0]
		const addressR8z0Zfl = accounts[1]
		const uintUdsfTin = BigInt("1533")
		const addressmP70x6f = accounts[3]
		const uintMVJRNtx = BigInt("1049")
		const addressYsMTRUx = accounts[0]
		const addressMsYMVPS = accounts[1]
		const addressdHGyTPM = accounts[2]
		const uintRilZg4W = BigInt("1625")
		const addressbgyUAbh = accounts[1]
		const addressULIeT18 = accounts[0]
		const booltkMXiMg = await REXUNIFINANCEsRK7i8v.transferFrom.call(addressR8z0Zfl, addressre6L2yK, uintySTVrS, {from: accounts[1]});
		const boolrI1fjg = await REXUNIFINANCEsRK7i8v.decreaseApproval.call(addressmP70x6f, uintUdsfTin, {from: accounts[4]});
		const boolfkehFnr = await REXUNIFINANCEsRK7i8v.transfer.call(addressYsMTRUx, uintMVJRNtx, {from: accounts[5]});
		const uint256rCyVDPy = await REXUNIFINANCEsRK7i8v.allowance.call(addressdHGyTPM, addressMsYMVPS, {from: accounts[1]});
		const boolQEbZqWH = await REXUNIFINANCEsRK7i8v.decreaseApproval.call(addressbgyUAbh, uintRilZg4W, {from: accounts[3]});
		const uint256JbP94W3 = await REXUNIFINANCEsRK7i8v.balanceOf.call(addressULIeT18, {from: accounts[0]});

		await expect(REXUNIFINANCEsRK7i8v.transferFrom.call(addressR8z0Zfl, addressre6L2yK, uintySTVrS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})