const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancevB5qEL7 = await Straight_Fire_Finance.new({from: accounts[4]});
		const uintMc5pHB = BigInt("1516")
		const addressU4SNyCU = accounts[4]
		const addressk9Mwn9R = accounts[0]
		const uintT1m1xnu = BigInt("1554")
		const addressXjQpGTm = accounts[1]
		const addressoXe7JdG = accounts[4]
		const boolUOXMDa7 = await Straight_Fire_FinancevB5qEL7.transferFrom.call(addressk9Mwn9R, addressU4SNyCU, uintMc5pHB, {from: accounts[2]});
		const boolYOHMkj = await Straight_Fire_FinancevB5qEL7.transferFrom.call(addressoXe7JdG, addressXjQpGTm, uintT1m1xnu, {from: accounts[4]});

		assert.equal(boolUOXMDa7, false)
		assert.equal(boolYOHMkj, false)
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancewTy6zsD = await Straight_Fire_Finance.new({from: accounts[5]});
		const uintgadC14F = BigInt("637")
		const addresswmdApiD = accounts[1]
		const uinta5NrSZj = BigInt("824")
		const addressuQCcy1Z = accounts[1]
		const address57u54G = accounts[0]
		const addressyLcxGBB = "0x0000000000000000000000000000000000000001"
		const boolL2a02xg = await Straight_Fire_FinancewTy6zsD.transfer.call(addresswmdApiD, uintgadC14F, {from: accounts[0]});
		const boolTA9yOIr = await Straight_Fire_FinancewTy6zsD.approve.call(addressuQCcy1Z, uinta5NrSZj, {from: accounts[3]});
		const uintYhy6tXN = await Straight_Fire_FinancewTy6zsD.allowance.call(addressyLcxGBB, address57u54G, {from: accounts[1]});

		assert.equal(boolL2a02xg, false)
		assert.equal(boolTA9yOIr, true)
		assert.equal(uintYhy6tXN, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceCEdZ5oA = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmMfdtEQ = BigInt("220")
		const addresst0Kl1dm = accounts[1]
		const uintD8YGnAB = BigInt("588")
		const addressLpydI9q = accounts[2]
		const addressbbmdlhk = "0x0000000000000000000000000000000000000001"
		const boolPeqWPm = await Straight_Fire_FinanceCEdZ5oA.transfer.call(addresst0Kl1dm, uintmMfdtEQ, {from: accounts[3]});
		const boolpMe6DIF = await Straight_Fire_FinanceCEdZ5oA.transferFrom.call(addressbbmdlhk, addressLpydI9q, uintD8YGnAB, {from: accounts[4]});
		const uint256cFB8caq = await Straight_Fire_FinanceCEdZ5oA.totalSupply.call({from: accounts[5]});
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceJnLcupl = await Straight_Fire_Finance.new({from: accounts[3]});
		const addressSifjwvk = "0x0000000000000000000000000000000000000001"
		const addressqu8zyy = accounts[2]
		const addressFehW9Im = accounts[1]
		const uintYWOdMHh = BigInt("158")
		const addressQDd3Okx = accounts[0]
		const uint256ERpw7VZ = await Straight_Fire_FinanceJnLcupl.totalSupply.call({from: accounts[4]});
		const uint256epEVxNb = await Straight_Fire_FinanceJnLcupl.balanceOf.call(addressSifjwvk, {from: accounts[2]});
		const uintVgb2Ql = await Straight_Fire_FinanceJnLcupl.allowance.call(addressFehW9Im, addressqu8zyy, {from: accounts[0]});
		const boolpvMBm0d = await Straight_Fire_FinanceJnLcupl.approve.call(addressQDd3Okx, uintYWOdMHh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolpvMBm0d, true)
		assert.equal(uint256ERpw7VZ, BigInt("80000000000000000000000"))
		assert.equal(uint256epEVxNb, BigInt("0"))
		assert.equal(uintVgb2Ql, BigInt("0"))
	});
})