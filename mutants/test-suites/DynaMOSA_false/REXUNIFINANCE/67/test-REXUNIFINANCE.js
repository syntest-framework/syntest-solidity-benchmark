const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEr8kGHb = await REXUNIFINANCE.new({from: accounts[5]});
		const uintRccEyrI = BigInt("1220")
		const addressm0cRmZt = accounts[5]
		const uintdRwxzDY = BigInt("400")
		const addressZ9aJB4 = accounts[2]
		const addressOqWe7T = accounts[4]
		const addressoWTYNiC = accounts[1]
		const addresshaPO0s = accounts[2]
//		const boolv65NlG0 = await REXUNIFINANCEr8kGHb.transfer.call(addressm0cRmZt, uintRccEyrI, {from: accounts[2]});
//		const booliZVqkV7 = await REXUNIFINANCEr8kGHb.approve.call(addressZ9aJB4, uintdRwxzDY, {from: accounts[4]});
//		const addresssv9ECvC = await REXUNIFINANCEr8kGHb.transferOwnership.call(addressOqWe7T, {from: accounts[2]});
//		const uint256KVZbu4T = await REXUNIFINANCEr8kGHb.balanceOf.call(addressoWTYNiC, {from: accounts[0]});
//		const addressr9LK2Rc = await REXUNIFINANCEr8kGHb.transferOwnership.call(addresshaPO0s, {from: accounts[1]});

		await expect(REXUNIFINANCEr8kGHb.transfer.call(addressm0cRmZt, uintRccEyrI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEIbZrqvK = await REXUNIFINANCE.new({from: accounts[0]});
		const uintgw8CeG4 = BigInt("48")
		const address1MP3iv = accounts[1]
		const addressvN4r75A = accounts[5]
		const uintGAx6PM = BigInt("84")
		const addresscmLhFhH = accounts[2]
		const addresseTFzxe = accounts[3]
//		const boolVdaojBE = await REXUNIFINANCEIbZrqvK.decreaseApproval.call(address1MP3iv, uintgw8CeG4, {from: accounts[1]});
//		const addressJiZYYV2 = await REXUNIFINANCEIbZrqvK.transferOwnership.call(addressvN4r75A, {from: accounts[2]});
//		const boolu3xilI9 = await REXUNIFINANCEIbZrqvK.transfer.call(addresscmLhFhH, uintGAx6PM, {from: accounts[1]});
//		const uint256eIYEuDW = await REXUNIFINANCEIbZrqvK.balanceOf.call(addresseTFzxe, {from: accounts[4]});

		await expect(REXUNIFINANCEIbZrqvK.decreaseApproval.call(address1MP3iv, uintgw8CeG4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEhEkO5nW = await REXUNIFINANCE.new({from: accounts[5]});
		const uint8cLoOy = BigInt("1986")
		const addressjnNnyRi = accounts[5]
		const addressHa9uNBl = accounts[4]
		const uintdR3uB6v = BigInt("1402")
		const addressyPAyFC = accounts[2]
//		const boolcfMfi9 = await REXUNIFINANCEhEkO5nW.transferFrom.call(addressHa9uNBl, addressjnNnyRi, uint8cLoOy, {from: accounts[2]});
//		const boolbMmYEoN = await REXUNIFINANCEhEkO5nW.transfer.call(addressyPAyFC, uintdR3uB6v, {from: accounts[2]});

		await expect(REXUNIFINANCEhEkO5nW.transferFrom.call(addressHa9uNBl, addressjnNnyRi, uint8cLoOy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEsltGKCj = await REXUNIFINANCE.new({from: accounts[4]});
		const uintUgR1fuk = BigInt("1381")
		const addressusmBrFe = accounts[2]
		const addressSP4En7L = accounts[3]
		const uintebT8CSC = BigInt("1527")
		const addresskrnFs1T = "0x0000000000000000000000000000000000000001"
		const addressePAHZjw = accounts[3]
		const uintCD5ZqnM = BigInt("753")
		const addressbtJvh9P = accounts[0]
		const uintt9DfjUc = BigInt("1839")
		const addressM5OikCf = accounts[0]
//		const boolWjHMUbo = await REXUNIFINANCEsltGKCj.increaseApproval.call(addressusmBrFe, uintUgR1fuk, {from: accounts[2]});
//		const addressj224XVH = await REXUNIFINANCEsltGKCj.transferOwnership.call(addressSP4En7L, {from: accounts[2]});
//		const boolc3FHPRN = await REXUNIFINANCEsltGKCj.transferFrom.call(addressePAHZjw, addresskrnFs1T, uintebT8CSC, {from: accounts[2]});
//		const boolHWBuq1Q = await REXUNIFINANCEsltGKCj.decreaseApproval.call(addressbtJvh9P, uintCD5ZqnM, {from: accounts[3]});
//		const boolLoxLA6a = await REXUNIFINANCEsltGKCj.transfer.call(addressM5OikCf, uintt9DfjUc, {from: accounts[4]});

		await expect(REXUNIFINANCEsltGKCj.increaseApproval.call(addressusmBrFe, uintUgR1fuk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEeC1yLlr = await REXUNIFINANCE.new({from: accounts[2]});
		const addressw95pgLM = accounts[4]
		const addresscSozuSQ = accounts[3]
		const uintY0m6cua = BigInt("113")
		const addressYRA4UEz = accounts[0]
		const uintdZl3QV = BigInt("1321")
		const addressCN7vIPs = accounts[1]
		const uint256jWTMHh5 = await REXUNIFINANCEeC1yLlr.allowance.call(addresscSozuSQ, addressw95pgLM, {from: accounts[2]});
		const boolPxQZYwp = await REXUNIFINANCEeC1yLlr.approve.call(addressYRA4UEz, uintY0m6cua, {from: accounts[4]});
		const boolylPsdYU = await REXUNIFINANCEeC1yLlr.decreaseApproval.call(addressCN7vIPs, uintdZl3QV, {from: accounts[4]});

		assert.equal(boolPxQZYwp, true)
		assert.equal(boolylPsdYU, true)
		assert.equal(uint256jWTMHh5, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEWdXwnru = await REXUNIFINANCE.new({from: accounts[5]});
		const addresszeJcXJ = accounts[4]
		const address5qheOj = accounts[2]
		const addressIJFtYL4 = accounts[1]
		const uintcKiTPc9 = BigInt("1517")
		const addressdqj0jWj = accounts[4]
		const uintIRcgXlP = BigInt("779")
		const addresswTBD65T = accounts[3]
		const uint256Kopdh0g = await REXUNIFINANCEWdXwnru.allowance.call(address5qheOj, addresszeJcXJ, {from: accounts[3]});
		const addressfWPFBRH = await REXUNIFINANCEWdXwnru.transferOwnership.call(addressIJFtYL4, {from: accounts[5]});
//		const boolrPQfMOz = await REXUNIFINANCEWdXwnru.increaseApproval.call(addressdqj0jWj, uintcKiTPc9, {from: accounts[4]});
//		const boolVO0clCu = await REXUNIFINANCEWdXwnru.increaseApproval.call(addresswTBD65T, uintIRcgXlP, {from: accounts[0]});

		assert.equal(uint256Kopdh0g, BigInt("0"))
		await expect(REXUNIFINANCEWdXwnru.increaseApproval.call(addressdqj0jWj, uintcKiTPc9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEEW9WmX8 = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintve8mpgu = BigInt("1736")
		const addressKvpcXgr = accounts[4]
		const addressOuFbg18 = accounts[2]
		const boolPO6nI1o = await REXUNIFINANCEEW9WmX8.increaseApproval.call(addressKvpcXgr, uintve8mpgu, {from: accounts[1]});
		const uint256QEn847 = await REXUNIFINANCEEW9WmX8.balanceOf.call(addressOuFbg18, {from: accounts[0]});
	});
})