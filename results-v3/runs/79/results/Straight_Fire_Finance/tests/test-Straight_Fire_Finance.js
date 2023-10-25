const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financer8kGHb = await Straight_Fire_Finance.new({from: accounts[5]});
		const uintRccEyrI = BigInt("1220")
		const addressm0cRmZt = accounts[5]
		const addressLZtIDmp = accounts[4]
		const addressZ9aJB4 = accounts[2]
		const addressBWH1EUI = accounts[0]
		const addressvcr5w51 = accounts[2]
		const uintGssZOaY = BigInt("406")
		const addresszLK2RcY = accounts[4]
		const addresshaPO0s = accounts[2]
		const uint256WCXRXDi = await Straight_Fire_Financer8kGHb.totalSupply.call({from: accounts[2]});
		const boolv65NlG0 = await Straight_Fire_Financer8kGHb.transferFrom.call(addressLZtIDmp, addressm0cRmZt, uintRccEyrI, {from: accounts[2]});
		const uintdRwxzDY = await Straight_Fire_Financer8kGHb.allowance.call(addressBWH1EUI, addressZ9aJB4, {from: accounts[0]});
		const uint256rGOqWe7 = await Straight_Fire_Financer8kGHb.balanceOf.call(addressvcr5w51, {from: accounts[1]});
		const boolMyWTYNi = await Straight_Fire_Financer8kGHb.transferFrom.call(addresshaPO0s, addresszLK2RcY, uintGssZOaY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMyWTYNi, false)
		assert.equal(boolv65NlG0, false)
		assert.equal(uint256WCXRXDi, BigInt("80000000000000000000000"))
		assert.equal(uint256rGOqWe7, BigInt("0"))
		assert.equal(uintdRwxzDY, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancehEkO5nW = await Straight_Fire_Finance.new({from: accounts[5]});
		const uint8cLoOy = BigInt("1986")
		const addressjnNnyRi = accounts[5]
		const addressHa9uNBl = accounts[4]
		const uintdR3uB6v = BigInt("1402")
		const addressyPAyFC = accounts[2]
		const boolcfMfi9 = await Straight_Fire_FinancehEkO5nW.transferFrom.call(addressHa9uNBl, addressjnNnyRi, uint8cLoOy, {from: accounts[2]});
		const boolbMmYEoN = await Straight_Fire_FinancehEkO5nW.transfer.call(addressyPAyFC, uintdR3uB6v, {from: accounts[2]});

		assert.equal(boolbMmYEoN, false)
		assert.equal(boolcfMfi9, false)
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancedR8qufJ = await Straight_Fire_Finance.new({from: accounts[0]});
		const addressZcqM3jD = accounts[2]
		const addressMMwKizh = accounts[0]
		const addressZSgfMTa = "0x0000000000000000000000000000000000000001"
		const addressKY2b4Bx = accounts[0]
		const addressxVaxrqo = accounts[3]
		const addressf1gnrfW = accounts[5]
		const uinto76xj8i = BigInt("491")
		const addressujNYTbC = accounts[4]
		const uintbwRIKu = await Straight_Fire_FinancedR8qufJ.allowance.call(addressMMwKizh, addressZcqM3jD, {from: accounts[0]});
		const uintp6ijnMu = await Straight_Fire_FinancedR8qufJ.allowance.call(addressKY2b4Bx, addressZSgfMTa, {from: accounts[3]});
		const uintp1gC0S3 = await Straight_Fire_FinancedR8qufJ.allowance.call(addressf1gnrfW, addressxVaxrqo, {from: accounts[2]});
		const boolUfLQUJc = await Straight_Fire_FinancedR8qufJ.approve.call(addressujNYTbC, uinto76xj8i, {from: accounts[4]});

		assert.equal(boolUfLQUJc, true)
		assert.equal(uintbwRIKu, BigInt("0"))
		assert.equal(uintp1gC0S3, BigInt("0"))
		assert.equal(uintp6ijnMu, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceK0bfh4E = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintB4nzTTX = BigInt("1810")
		const addressG04JkrR = accounts[0]
		const addresslAxXwlA = accounts[5]
		const uintTNXLRGT = BigInt("901")
		const addressy60v1MH = accounts[0]
		const addressS8Tp6G = accounts[3]
		const addressbN11GAn = accounts[2]
		const addresseWVb6nr = accounts[4]
		const boolfcl8yai = await Straight_Fire_FinanceK0bfh4E.transfer.call(addressG04JkrR, uintB4nzTTX, {from: accounts[3]});
		const uint256zkktCA2 = await Straight_Fire_FinanceK0bfh4E.balanceOf.call(addresslAxXwlA, {from: accounts[5]});
		const boolBBZqJtl = await Straight_Fire_FinanceK0bfh4E.transferFrom.call(addressS8Tp6G, addressy60v1MH, uintTNXLRGT, {from: accounts[3]});
		const uintRMly1Cm = await Straight_Fire_FinanceK0bfh4E.allowance.call(addresseWVb6nr, addressbN11GAn, {from: accounts[2]});
	});
})