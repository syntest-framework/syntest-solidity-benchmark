const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEjX1EY0y = await REXUNIFINANCE.new({from: accounts[3]});
		const uintLgVtv1Q = BigInt("1792")
		const addressODsfQce = accounts[3]
		const uintqJoDKeI = BigInt("1112")
		const addressPArZPKg = accounts[5]
		const addressARPxONO = accounts[1]
		const addressHNE4gkE = accounts[3]
		const addressBO3rvQ3 = accounts[1]
		const boolVDC1Ch = await REXUNIFINANCEjX1EY0y.transfer.call(addressODsfQce, uintLgVtv1Q, {from: accounts[4]});
		const boolO3nZWmL = await REXUNIFINANCEjX1EY0y.transferFrom.call(addressARPxONO, addressPArZPKg, uintqJoDKeI, {from: accounts[3]});
		const uint256c63tsB7 = await REXUNIFINANCEjX1EY0y.allowance.call(addressBO3rvQ3, addressHNE4gkE, {from: accounts[4]});

		await expect(REXUNIFINANCEjX1EY0y.transfer.call(addressODsfQce, uintLgVtv1Q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCENY1AZYi = await REXUNIFINANCE.new({from: accounts[3]});
		const addressaR3pQTi = accounts[0]
		const uintRvqU9l1 = BigInt("2011")
		const addressnvwbEU1 = accounts[1]
		const uintmHIZUdM = BigInt("1403")
		const addressLDl8vc5 = accounts[3]
		const address8p0mGO = accounts[2]
		const uintstNpsR9 = BigInt("323")
		const addresswaJKCrv = accounts[2]
		const uint256s4avmN = await REXUNIFINANCENY1AZYi.transferableTokens.call(addressaR3pQTi, {from: accounts[1]});
		const boolRnLqcDj = await REXUNIFINANCENY1AZYi.decreaseApproval.call(addressnvwbEU1, uintRvqU9l1, {from: accounts[3]});
		const boolDT3jrEH = await REXUNIFINANCENY1AZYi.increaseApproval.call(addressLDl8vc5, uintmHIZUdM, {from: accounts[1]});
		const uint256qMZIg0m = await REXUNIFINANCENY1AZYi.balanceOf.call(address8p0mGO, {from: accounts[1]});
		const boolVDPsWwo = await REXUNIFINANCENY1AZYi.decreaseApproval.call(addresswaJKCrv, uintstNpsR9, {from: accounts[5]});

		assert.equal(boolDT3jrEH, true)
		assert.equal(boolRnLqcDj, true)
		assert.equal(boolVDPsWwo, true)
		assert.equal(uint256qMZIg0m, BigInt("0"))
		assert.equal(uint256s4avmN, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEWLuCvV = await REXUNIFINANCE.new({from: accounts[4]});
		const addresse9VXx8y = accounts[4]
		const addressyOwb708 = accounts[3]
		const uintCOShXxa = BigInt("364")
		const addressckH7rAU = accounts[1]
		const uintu4WwhCn = BigInt("1903")
		const addressdvIcmJK = accounts[0]
		const uintQq5dCDc = BigInt("274")
		const addressdJbGijs = accounts[4]
		const uintR4qERA5 = BigInt("1421")
		const addresszUfj5Qb = accounts[0]
		const uint256qxBHNuC = await REXUNIFINANCEWLuCvV.transferableTokens.call(addresse9VXx8y, {from: accounts[2]});
		const uint256dklXd7i = await REXUNIFINANCEWLuCvV.balanceOf.call(addressyOwb708, {from: accounts[0]});
		const boolWStRMOQ = await REXUNIFINANCEWLuCvV.decreaseApproval.call(addressckH7rAU, uintCOShXxa, {from: accounts[2]});
		const boolOuxykqS = await REXUNIFINANCEWLuCvV.approve.call(addressdvIcmJK, uintu4WwhCn, {from: accounts[2]});
		const boolCjiOuI = await REXUNIFINANCEWLuCvV.approve.call(addressdJbGijs, uintQq5dCDc, {from: accounts[2]});
		const boolBTu01aO = await REXUNIFINANCEWLuCvV.increaseApproval.call(addresszUfj5Qb, uintR4qERA5, {from: accounts[5]});

		assert.equal(boolBTu01aO, true)
		assert.equal(boolCjiOuI, true)
		assert.equal(boolOuxykqS, true)
		assert.equal(boolWStRMOQ, true)
		assert.equal(uint256dklXd7i, BigInt("0"))
		assert.equal(uint256qxBHNuC, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEnCqC8o5 = await REXUNIFINANCE.new({from: accounts[0]});
		const addressPdgmfk0 = accounts[4]
		const uintG3LqwY3 = BigInt("377")
		const addressj291Je2 = accounts[1]
		const uintLLQCAts = BigInt("525")
		const addressLVWqz0 = accounts[3]
		const uinttYXyHlA = BigInt("1011")
		const addressPwTV9uB = accounts[3]
		const addressBCvq6fv = accounts[0]
		const addressnTAKd3m = "0x0000000000000000000000000000000000000001"
		const uintBIIzcEy = BigInt("99")
		const addressM8br9lg = accounts[5]
		const addressvcQ6Dap = await REXUNIFINANCEnCqC8o5.transferOwnership.call(addressPdgmfk0, {from: accounts[2]});
		const boolzQ6eX0L = await REXUNIFINANCEnCqC8o5.approve.call(addressj291Je2, uintG3LqwY3, {from: accounts[1]});
		const booliXbKO6a = await REXUNIFINANCEnCqC8o5.decreaseApproval.call(addressLVWqz0, uintLLQCAts, {from: accounts[2]});
		const boolwDofg5G = await REXUNIFINANCEnCqC8o5.approve.call(addressPwTV9uB, uinttYXyHlA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Y20Xw29 = await REXUNIFINANCEnCqC8o5.allowance.call(addressnTAKd3m, addressBCvq6fv, {from: accounts[1]});
		const boolR1XhrcU = await REXUNIFINANCEnCqC8o5.decreaseApproval.call(addressM8br9lg, uintBIIzcEy, {from: accounts[1]});

		await expect(REXUNIFINANCEnCqC8o5.transferOwnership.call(addressPdgmfk0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEv8RxEci = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwkzwOFB = BigInt("2038")
		const addressMEtdYh = accounts[4]
		const uintnz0VJ31 = BigInt("1845")
		const addressYw3W8d = accounts[2]
		const addressXDEQhz = accounts[2]
		const addressZokxpY = accounts[2]
		const uintuHqWXTk = BigInt("975")
		const addresssKspvGI = accounts[4]
		const bool8beQEq = await REXUNIFINANCEv8RxEci.approve.call(addressMEtdYh, uintwkzwOFB, {from: accounts[2]});
		const boolxrwRgN = await REXUNIFINANCEv8RxEci.transferFrom.call(addressXDEQhz, addressYw3W8d, uintnz0VJ31, {from: accounts[4]});
		const address7x18ho = await REXUNIFINANCEv8RxEci.transferOwnership.call(addressZokxpY, {from: accounts[2]});
		const boolr9oa3Jz = await REXUNIFINANCEv8RxEci.decreaseApproval.call(addresssKspvGI, uintuHqWXTk, {from: accounts[4]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEq3pARXN = await REXUNIFINANCE.new({from: accounts[4]});
		const addressGti50kB = accounts[4]
		const addressjzBK6dA = accounts[1]
		const addressdjkczz7 = accounts[1]
		const uintVkAurmm = BigInt("140")
		const addressj7qpp62 = accounts[5]
		const addressAReURgp = accounts[4]
		const uintyoSaLNP = BigInt("378")
		const addressxXpYHVC = accounts[2]
		const uint256TblwdXo = await REXUNIFINANCEq3pARXN.transferableTokens.call(addressGti50kB, {from: accounts[5]});
		const uint256rXursDC = await REXUNIFINANCEq3pARXN.allowance.call(addressdjkczz7, addressjzBK6dA, {from: accounts[1]});
		const boolnwuyagK = await REXUNIFINANCEq3pARXN.increaseApproval.call(addressj7qpp62, uintVkAurmm, {from: accounts[0]});
		const addressKDd4uVL = await REXUNIFINANCEq3pARXN.transferOwnership.call(addressAReURgp, {from: accounts[2]});
		const boolqkXAFvG = await REXUNIFINANCEq3pARXN.approve.call(addressxXpYHVC, uintyoSaLNP, {from: accounts[3]});

		assert.equal(boolnwuyagK, true)
		assert.equal(uint256TblwdXo, BigInt("0"))
		assert.equal(uint256rXursDC, BigInt("0"))
		await expect(REXUNIFINANCEq3pARXN.transferOwnership.call(addressAReURgp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEjX1EY0y = await REXUNIFINANCE.new({from: accounts[3]});
		const uintcAuB3UT = BigInt("1112")
		const addressF29z4IJ = accounts[5]
		const addresszZnqoHg = accounts[1]
		const addressg0YXqfR = accounts[3]
		const addressJMEi23l = accounts[1]
		const boolO3nZWmL = await REXUNIFINANCEjX1EY0y.transferFrom.call(addresszZnqoHg, addressF29z4IJ, uintcAuB3UT, {from: accounts[3]});
		const uint256c63tsB7 = await REXUNIFINANCEjX1EY0y.allowance.call(addressJMEi23l, addressg0YXqfR, {from: accounts[4]});

		await expect(REXUNIFINANCEjX1EY0y.transferFrom.call(addresszZnqoHg, addressF29z4IJ, uintcAuB3UT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})