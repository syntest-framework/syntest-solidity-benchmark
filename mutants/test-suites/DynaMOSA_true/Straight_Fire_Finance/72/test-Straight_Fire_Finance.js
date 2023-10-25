const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financer9ffLc = await Straight_Fire_Finance.new({from: accounts[0]});
		const addressxY2K2kp = accounts[4]
		const addresslqqHmLK = accounts[3]
		const uintooeMiln = BigInt("1632")
		const addressmFFvLqb = accounts[2]
		const addressGSnGRwt = accounts[1]
		const addressDkGgzH7 = accounts[5]
		const uintlApKkSI = await Straight_Fire_Financer9ffLc.allowance.call(addresslqqHmLK, addressxY2K2kp, {from: accounts[4]});
		const boolhqHzDo = await Straight_Fire_Financer9ffLc.transferFrom.call(addressGSnGRwt, addressmFFvLqb, uintooeMiln, {from: accounts[1]});
		const uint256yfrr2s = await Straight_Fire_Financer9ffLc.balanceOf.call(addressDkGgzH7, {from: accounts[0]});

		assert.equal(boolhqHzDo, false)
		assert.equal(uint256yfrr2s, BigInt("0"))
		assert.equal(uintlApKkSI, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceFjcWkzr = await Straight_Fire_Finance.new({from: accounts[2]});
		const addressCiUayvV = accounts[3]
		const addressZgBeJNU = accounts[4]
		const uintqmZwyXH = BigInt("115")
		const addressuLJ9lrJ = accounts[1]
		const uintv7HwP3 = BigInt("1918")
		const addressQgzSWXk = accounts[0]
		const addresszMj2VFX = accounts[2]
		const uint256m3QV0aF = await Straight_Fire_FinanceFjcWkzr.balanceOf.call(addressCiUayvV, {from: accounts[3]});
		const uint256oRrUdmA = await Straight_Fire_FinanceFjcWkzr.balanceOf.call(addressZgBeJNU, {from: accounts[3]});
		const boolnwJJi30 = await Straight_Fire_FinanceFjcWkzr.approve.call(addressuLJ9lrJ, uintqmZwyXH, {from: accounts[5]});
		const boolMAZ6DE = await Straight_Fire_FinanceFjcWkzr.transferFrom.call(addresszMj2VFX, addressQgzSWXk, uintv7HwP3, {from: accounts[0]});

		assert.equal(boolMAZ6DE, false)
		assert.equal(boolnwJJi30, true)
		assert.equal(uint256m3QV0aF, BigInt("0"))
		assert.equal(uint256oRrUdmA, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceC8GaqF = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintsSEaFGV = BigInt("1259")
		const addressq5fxPN = accounts[5]
		const addressiCYSevi = accounts[3]
		const uintPgn7oqW = BigInt("1489")
		const addressiPM0pFv = accounts[3]
		const addressIkXr1jA = accounts[2]
		const addressKJP5sXl = accounts[2]
		const uintrCXVRGk = BigInt("452")
		const addressuD4sTMn = accounts[2]
		const addressBVxR3yp = accounts[4]
		const addresszWHGdmh = accounts[0]
		const boolqE26GO1 = await Straight_Fire_FinanceC8GaqF.transferFrom.call(addressiCYSevi, addressq5fxPN, uintsSEaFGV, {from: "0x0000000000000000000000000000000000000001"});
		const boolotGESml = await Straight_Fire_FinanceC8GaqF.approve.call(addressiPM0pFv, uintPgn7oqW, {from: accounts[3]});
		const uintw83xTLm = await Straight_Fire_FinanceC8GaqF.allowance.call(addressKJP5sXl, addressIkXr1jA, {from: accounts[3]});
		const bool221UV3 = await Straight_Fire_FinanceC8GaqF.transfer.call(addressuD4sTMn, uintrCXVRGk, {from: accounts[0]});
		const uintl5DnKcN = await Straight_Fire_FinanceC8GaqF.allowance.call(addresszWHGdmh, addressBVxR3yp, {from: accounts[3]});

		assert.equal(bool221UV3, false)
		assert.equal(boolotGESml, true)
		assert.equal(boolqE26GO1, false)
		assert.equal(uintl5DnKcN, BigInt("0"))
		assert.equal(uintw83xTLm, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancewwEp0Q = await Straight_Fire_Finance.new({from: accounts[0]});
		const uintMx6Hs4m = BigInt("1803")
		const addressxQuLogy = accounts[2]
		const uintvEVHPZm = BigInt("495")
		const addressIsCjTuJ = accounts[4]
		const uint256AZqSWJ = await Straight_Fire_FinancewwEp0Q.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const bool6vpQIH = await Straight_Fire_FinancewwEp0Q.approve.call(addressxQuLogy, uintMx6Hs4m, {from: accounts[3]});
		const boolms3KtKO = await Straight_Fire_FinancewwEp0Q.approve.call(addressIsCjTuJ, uintvEVHPZm, {from: accounts[2]});

		assert.equal(bool6vpQIH, true)
		assert.equal(boolms3KtKO, true)
		assert.equal(uint256AZqSWJ, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancegfzXOm = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfqQ92Be = accounts[2]
		const addressiF6TZh5 = accounts[0]
		const addresslegGlKK = accounts[1]
		const addressIOwDsZE = accounts[3]
		const addressmYZU0Hm = accounts[5]
		const uintAWQMCRT = BigInt("317")
		const addressbe5Uvil = accounts[0]
		const addressmzj4cWV = accounts[4]
		const uint256UwixrNj = await Straight_Fire_FinancegfzXOm.balanceOf.call(addressfqQ92Be, {from: accounts[2]});
		const uintwYTdhul = await Straight_Fire_FinancegfzXOm.allowance.call(addresslegGlKK, addressiF6TZh5, {from: accounts[2]});
		const uintwhBeq1j = await Straight_Fire_FinancegfzXOm.allowance.call(addressmYZU0Hm, addressIOwDsZE, {from: accounts[5]});
		const boolHGKf9mh = await Straight_Fire_FinancegfzXOm.transferFrom.call(addressmzj4cWV, addressbe5Uvil, uintAWQMCRT, {from: accounts[4]});
	});
})