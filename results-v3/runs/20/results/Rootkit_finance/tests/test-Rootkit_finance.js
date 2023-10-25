const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeDPTZc5V = await Rootkit_finance.new({from: accounts[2]});
		const uintts2K8Kp = BigInt("1568")
		const addresswHm7obq = accounts[2]
		const addressgIntkVY = accounts[1]
		const addresst6AvzJ = accounts[3]
		const addressZgkwT1y = accounts[0]
		const uintUMzo96 = BigInt("388")
		const addressg5HjVGt = accounts[4]
		const addressOG8Lqoe = accounts[4]
		const addressR3mQoqY = accounts[2]
		const bool1Jm1kr = await Rootkit_financeDPTZc5V.transferFrom.call(addressgIntkVY, addresswHm7obq, uintts2K8Kp, {from: accounts[5]});
		const uintezEp5g = await Rootkit_financeDPTZc5V.allowance.call(addressZgkwT1y, addresst6AvzJ, {from: accounts[5]});
		const boolFRxCQXT = await Rootkit_financeDPTZc5V.approve.call(addressg5HjVGt, uintUMzo96, {from: "0x0000000000000000000000000000000000000001"});
		const uintOU1gQUv = await Rootkit_financeDPTZc5V.allowance.call(addressR3mQoqY, addressOG8Lqoe, {from: accounts[4]});

		assert.equal(bool1Jm1kr, false)
		assert.equal(boolFRxCQXT, true)
		assert.equal(uintOU1gQUv, BigInt("0"))
		assert.equal(uintezEp5g, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financettgy6Oz = await Rootkit_finance.new({from: accounts[3]});
		const addressljlL3t4 = accounts[2]
		const uintXaf6zO6 = BigInt("434")
		const addressFMuseEW = accounts[1]
		const addressBY0xZI5 = accounts[3]
		const uintBzJYdCO = BigInt("1868")
		const addressboRqeo4 = accounts[5]
		const addressx0AN2Wk = accounts[5]
		const uint256YunYon = await Rootkit_financettgy6Oz.balanceOf.call(addressljlL3t4, {from: accounts[5]});
		const booljtYJP0 = await Rootkit_financettgy6Oz.transferFrom.call(addressBY0xZI5, addressFMuseEW, uintXaf6zO6, {from: accounts[2]});
		const boolLbo4ZOX = await Rootkit_financettgy6Oz.transferFrom.call(addressx0AN2Wk, addressboRqeo4, uintBzJYdCO, {from: accounts[1]});
		const uint256yOynrK2 = await Rootkit_financettgy6Oz.totalSupply.call({from: accounts[3]});

		assert.equal(boolLbo4ZOX, false)
		assert.equal(booljtYJP0, false)
		assert.equal(uint256YunYon, BigInt("0"))
		assert.equal(uint256yOynrK2, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeB1Hwx7U = await Rootkit_finance.new({from: accounts[1]});
		const uintpp129bp = BigInt("329")
		const addressXs6KxB3 = accounts[4]
		const addressp1UcvuV = accounts[3]
		const uintdINYpZj = BigInt("113")
		const addressleGMyR = accounts[2]
		const boolXs5VDs = await Rootkit_financeB1Hwx7U.transferFrom.call(addressp1UcvuV, addressXs6KxB3, uintpp129bp, {from: accounts[1]});
		const boolzkyiX5 = await Rootkit_financeB1Hwx7U.transfer.call(addressleGMyR, uintdINYpZj, {from: accounts[4]});
		const uint256tZ73B8K = await Rootkit_financeB1Hwx7U.totalSupply.call({from: accounts[1]});

		assert.equal(boolXs5VDs, false)
		assert.equal(boolzkyiX5, false)
		assert.equal(uint256tZ73B8K, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financemY89Jw4 = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const address6qlwf2 = "0x0000000000000000000000000000000000000001"
		const addressE7aRop6 = "0x0000000000000000000000000000000000000001"
		const uintVaoZM6 = BigInt("493")
		const addressY9KNbQK = accounts[2]
		const uint256WnvwLWV = await Rootkit_financemY89Jw4.balanceOf.call(address6qlwf2, {from: accounts[2]});
		const uint256jAoJm8h = await Rootkit_financemY89Jw4.balanceOf.call(addressE7aRop6, {from: accounts[5]});
		const uint256GmPwLrm = await Rootkit_financemY89Jw4.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolqe5xEC = await Rootkit_financemY89Jw4.transfer.call(addressY9KNbQK, uintVaoZM6, {from: accounts[2]});
	});
})