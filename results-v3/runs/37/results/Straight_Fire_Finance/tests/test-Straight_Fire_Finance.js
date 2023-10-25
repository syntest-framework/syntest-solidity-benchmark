const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceMk8oLNL = await Straight_Fire_Finance.new({from: accounts[4]});
		const uintruej6jY = BigInt("145")
		const addresss9lW0Jv = "0x0000000000000000000000000000000000000001"
		const addressakA7CUZ = accounts[0]
		const uinte7GD3pp = BigInt("1605")
		const addresscfhiKV7 = accounts[1]
		const addressBx8u5z6 = accounts[1]
		const address9apxhI = accounts[3]
		const uinttAZp9sG = BigInt("1089")
		const addressgQnXlxm = accounts[0]
		const addressVQkcrTl = accounts[1]
		const uintpDu2yfX = BigInt("996")
		const addressrw9mExI = accounts[3]
		const addressLLRz7OG = accounts[3]
		const boolzd3heoD = await Straight_Fire_FinanceMk8oLNL.transferFrom.call(addressakA7CUZ, addresss9lW0Jv, uintruej6jY, {from: accounts[1]});
		const boolkBftLoW = await Straight_Fire_FinanceMk8oLNL.transfer.call(addresscfhiKV7, uinte7GD3pp, {from: "0x0000000000000000000000000000000000000001"});
		const uintT4dITkl = await Straight_Fire_FinanceMk8oLNL.allowance.call(address9apxhI, addressBx8u5z6, {from: accounts[3]});
		const boolaRz5HXo = await Straight_Fire_FinanceMk8oLNL.transferFrom.call(addressVQkcrTl, addressgQnXlxm, uinttAZp9sG, {from: accounts[0]});
		const booljkk0wSX = await Straight_Fire_FinanceMk8oLNL.transferFrom.call(addressLLRz7OG, addressrw9mExI, uintpDu2yfX, {from: accounts[4]});

		assert.equal(boolaRz5HXo, false)
		assert.equal(booljkk0wSX, false)
		assert.equal(boolkBftLoW, false)
		assert.equal(boolzd3heoD, false)
		assert.equal(uintT4dITkl, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancesSeICo1 = await Straight_Fire_Finance.new({from: accounts[4]});
		const addressYDAVLzn = accounts[4]
		const uint256vNHNqY = await Straight_Fire_FinancesSeICo1.totalSupply.call({from: accounts[0]});
		const uint256r7PVWYe = await Straight_Fire_FinancesSeICo1.balanceOf.call(addressYDAVLzn, {from: accounts[3]});

		assert.equal(uint256r7PVWYe, BigInt("80000000000000000000000"))
		assert.equal(uint256vNHNqY, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceXAJZcEV = await Straight_Fire_Finance.new({from: accounts[4]});
		const uintNXDbyvv = BigInt("1516")
		const addressljHlTZv = accounts[3]
		const uintzieYCD9 = BigInt("392")
		const addressJusGN7L = accounts[3]
		const addresszumaa9V = accounts[1]
		const uinteDqzPnf = BigInt("1824")
		const addressparfrH = accounts[2]
		const addressdPDUapl = accounts[2]
		const uintQFEDGz = BigInt("963")
		const addressfi3vcxX = accounts[1]
		const uintfYYGPv2 = BigInt("1095")
		const addressVj4EaFD = accounts[3]
		const addressDFUx2wk = accounts[2]
		const boolNr7U2zj = await Straight_Fire_FinanceXAJZcEV.transfer.call(addressljHlTZv, uintNXDbyvv, {from: accounts[0]});
		const booltqKQD1t = await Straight_Fire_FinanceXAJZcEV.transferFrom.call(addresszumaa9V, addressJusGN7L, uintzieYCD9, {from: accounts[2]});
		const boolqdO7N0z = await Straight_Fire_FinanceXAJZcEV.transfer.call(addressparfrH, uinteDqzPnf, {from: accounts[3]});
		const uint256HXeCWHg = await Straight_Fire_FinanceXAJZcEV.balanceOf.call(addressdPDUapl, {from: accounts[0]});
		const boolscIiaQB = await Straight_Fire_FinanceXAJZcEV.approve.call(addressfi3vcxX, uintQFEDGz, {from: accounts[2]});
		const boolV4qs80v = await Straight_Fire_FinanceXAJZcEV.transferFrom.call(addressDFUx2wk, addressVj4EaFD, uintfYYGPv2, {from: accounts[4]});

		assert.equal(boolNr7U2zj, false)
		assert.equal(boolV4qs80v, false)
		assert.equal(boolqdO7N0z, false)
		assert.equal(boolscIiaQB, true)
		assert.equal(booltqKQD1t, false)
		assert.equal(uint256HXeCWHg, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancehjMmiFw = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMSANST1 = accounts[5]
		const uintg95Atqe = BigInt("1229")
		const addressn88fe9n = accounts[2]
		const uintlWlFwL = BigInt("827")
		const addressop8KN5c = accounts[2]
		const addressb0HHYPl = accounts[1]
		const uint2560kWI6a = await Straight_Fire_FinancehjMmiFw.balanceOf.call(addressMSANST1, {from: accounts[0]});
		const boolCiItorY = await Straight_Fire_FinancehjMmiFw.transfer.call(addressn88fe9n, uintg95Atqe, {from: accounts[3]});
		const boolsFONzxd = await Straight_Fire_FinancehjMmiFw.transfer.call(addressop8KN5c, uintlWlFwL, {from: accounts[3]});
		const uint256dHQtYOn = await Straight_Fire_FinancehjMmiFw.balanceOf.call(addressb0HHYPl, {from: accounts[2]});
	});
})