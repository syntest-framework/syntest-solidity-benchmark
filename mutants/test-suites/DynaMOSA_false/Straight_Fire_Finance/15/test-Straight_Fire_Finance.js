const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceLg36X9c = await Straight_Fire_Finance.new({from: accounts[1]});
		const addressQXDcQby = accounts[3]
		const addressKTEzmc = accounts[4]
		const uintIXqiqnb = BigInt("431")
		const addressy0xXGwN = accounts[0]
		const addressd2qdjV = "0x0000000000000000000000000000000000000001"
		const addresshKxw4p1 = accounts[2]
		const uintCYyLur = BigInt("1295")
		const addressGc6mvY = accounts[3]
		const uintgDO30cU = await Straight_Fire_FinanceLg36X9c.allowance.call(addressKTEzmc, addressQXDcQby, {from: accounts[4]});
		const boolMgGYjeu = await Straight_Fire_FinanceLg36X9c.transfer.call(addressy0xXGwN, uintIXqiqnb, {from: accounts[2]});
		const uintYuOCisp = await Straight_Fire_FinanceLg36X9c.allowance.call(addresshKxw4p1, addressd2qdjV, {from: accounts[5]});
		const boolp1uKxRU = await Straight_Fire_FinanceLg36X9c.transfer.call(addressGc6mvY, uintCYyLur, {from: accounts[4]});

		assert.equal(boolMgGYjeu, false)
		assert.equal(boolp1uKxRU, false)
		assert.equal(uintYuOCisp, BigInt("0"))
		assert.equal(uintgDO30cU, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancedWdxOTd = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintAFYGwwt = BigInt("610")
		const addressyezkPfI = accounts[3]
		const addresswbTNlKs = accounts[4]
		const uint0P3q4g = BigInt("843")
		const addresstli7B1h = accounts[1]
		const addresswmQ2X3s = accounts[2]
		const addressa0amTQ0 = accounts[2]
		const addressrjCQ5sf = accounts[1]
		const boolRGAr2j6 = await Straight_Fire_FinancedWdxOTd.transferFrom.call(addresswbTNlKs, addressyezkPfI, uintAFYGwwt, {from: accounts[3]});
		const boolc7KIOZx = await Straight_Fire_FinancedWdxOTd.transfer.call(addresstli7B1h, uint0P3q4g, {from: accounts[0]});
		const uintkVXnMZ1 = await Straight_Fire_FinancedWdxOTd.allowance.call(addressa0amTQ0, addresswmQ2X3s, {from: accounts[2]});
		const uint256Wixnmm8 = await Straight_Fire_FinancedWdxOTd.balanceOf.call(addressrjCQ5sf, {from: accounts[2]});

		assert.equal(boolRGAr2j6, false)
		assert.equal(boolc7KIOZx, false)
		assert.equal(uint256Wixnmm8, BigInt("0"))
		assert.equal(uintkVXnMZ1, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancevnpIm4F = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintUjG6Jox = BigInt("59")
		const addressrQqKkxV = accounts[2]
		const addressJebezV0 = accounts[0]
		const addressXXi3KBH = accounts[2]
		const addressPlSX0B = "0x0000000000000000000000000000000000000001"
		const addressAsPSXjs = accounts[2]
		const addressZTIyq5e = accounts[4]
		const uintwDZMBSP = BigInt("207")
		const addresszDMLQBo = accounts[5]
		const addressTqGSfmf = accounts[2]
		const boolbW6YrYa = await Straight_Fire_FinancevnpIm4F.approve.call(addressrQqKkxV, uintUjG6Jox, {from: accounts[1]});
		const uintl67h7uz = await Straight_Fire_FinancevnpIm4F.allowance.call(addressXXi3KBH, addressJebezV0, {from: accounts[4]});
		const uint256Cev5rV4 = await Straight_Fire_FinancevnpIm4F.balanceOf.call(addressPlSX0B, {from: accounts[4]});
		const uintHqllSDl = await Straight_Fire_FinancevnpIm4F.allowance.call(addressZTIyq5e, addressAsPSXjs, {from: accounts[1]});
		const boolInIidLm = await Straight_Fire_FinancevnpIm4F.transferFrom.call(addressTqGSfmf, addresszDMLQBo, uintwDZMBSP, {from: accounts[4]});

		assert.equal(boolInIidLm, false)
		assert.equal(boolbW6YrYa, true)
		assert.equal(uint256Cev5rV4, BigInt("0"))
		assert.equal(uintHqllSDl, BigInt("0"))
		assert.equal(uintl67h7uz, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancePaPdaA = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstb1Y2S7 = accounts[0]
		const uintLXF83pe = BigInt("665")
		const addresswkZvm8X = accounts[2]
		const addressiEmKAnd = accounts[0]
		const uintqbqsU3e = BigInt("125")
		const addresslIMmlEa = "0x0000000000000000000000000000000000000001"
		const addressYv6pO5V = accounts[2]
		const uintbVUrzN1 = BigInt("245")
		const addressjUlhse = accounts[0]
		const uint256kW8EGOM = await Straight_Fire_FinancePaPdaA.balanceOf.call(addresstb1Y2S7, {from: accounts[0]});
		const boolYX9YZno = await Straight_Fire_FinancePaPdaA.transferFrom.call(addressiEmKAnd, addresswkZvm8X, uintLXF83pe, {from: accounts[4]});
		const boolMiX3fB2 = await Straight_Fire_FinancePaPdaA.transferFrom.call(addressYv6pO5V, addresslIMmlEa, uintqbqsU3e, {from: accounts[3]});
		const boolvbFF3YJ = await Straight_Fire_FinancePaPdaA.transfer.call(addressjUlhse, uintbVUrzN1, {from: accounts[3]});
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancevnpIm4F = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintoX2HEoh = BigInt("59")
		const addressjJHH645 = accounts[2]
		const addressJPsE63q = accounts[0]
		const addressSwL5ZBE = accounts[2]
		const addressohDUW0y = "0x0000000000000000000000000000000000000001"
		const addresss8NHrVs = accounts[3]
		const addresshCUyp2 = accounts[4]
		const uinth1wnxvL = BigInt("207")
		const addressOzMpCEe = accounts[5]
		const addressqJtJOZY = accounts[2]
		const boolbW6YrYa = await Straight_Fire_FinancevnpIm4F.approve.call(addressjJHH645, uintoX2HEoh, {from: accounts[1]});
		const uintl67h7uz = await Straight_Fire_FinancevnpIm4F.allowance.call(addressSwL5ZBE, addressJPsE63q, {from: accounts[4]});
		const uint256Cev5rV4 = await Straight_Fire_FinancevnpIm4F.balanceOf.call(addressohDUW0y, {from: accounts[4]});
		const uintHqllSDl = await Straight_Fire_FinancevnpIm4F.allowance.call(addresshCUyp2, addresss8NHrVs, {from: accounts[1]});
		const boolInIidLm = await Straight_Fire_FinancevnpIm4F.transferFrom.call(addressqJtJOZY, addressOzMpCEe, uinth1wnxvL, {from: accounts[4]});
		const uint2560fv1bc = await Straight_Fire_FinancevnpIm4F.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolInIidLm, false)
		assert.equal(boolbW6YrYa, true)
		assert.equal(uint2560fv1bc, BigInt("80000000000000000000000"))
		assert.equal(uint256Cev5rV4, BigInt("0"))
		assert.equal(uintHqllSDl, BigInt("0"))
		assert.equal(uintl67h7uz, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceRQq6url = await Straight_Fire_Finance.new({from: accounts[0]});
		const uintqMbArhs = BigInt("1591")
		const addressMiC8XiI = accounts[2]
		const addressoaUNxY1 = accounts[3]
		const addresseJ6Ef5K = "0x00000000000000000000000000000000000000-1"
		const boolzUbxydS = await Straight_Fire_FinanceRQq6url.approve.call(addressMiC8XiI, uintqMbArhs, {from: accounts[3]});
//		const uintfpyD6As = await Straight_Fire_FinanceRQq6url.allowance.call(addresseJ6Ef5K, addressoaUNxY1, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolzUbxydS, true)
		await expect(Straight_Fire_FinanceRQq6url.allowance.call(addresseJ6Ef5K, addressoaUNxY1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})