const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancehDjkWqY = await Straight_Fire_Finance.new({from: accounts[5]});
		const uintOKWTYYO = BigInt("1483")
		const addressQR4zBrx = accounts[3]
		const uintpbsHBCa = BigInt("361")
		const addressXlMpKuY = accounts[4]
		const uintPs0K3Ml = BigInt("1312")
		const addresspNpKEg = accounts[4]
		const addressfYCGS2O = "0x0000000000000000000000000000000000000001"
		const uintLZ5q8aA = BigInt("880")
		const addressbXOp1ae = accounts[0]
		const boolZ5R04n = await Straight_Fire_FinancehDjkWqY.transfer.call(addressQR4zBrx, uintOKWTYYO, {from: accounts[3]});
		const boolsu7VPFd = await Straight_Fire_FinancehDjkWqY.approve.call(addressXlMpKuY, uintpbsHBCa, {from: accounts[5]});
		const boolK74WDMx = await Straight_Fire_FinancehDjkWqY.transferFrom.call(addressfYCGS2O, addresspNpKEg, uintPs0K3Ml, {from: accounts[3]});
		const boolwfvrcRu = await Straight_Fire_FinancehDjkWqY.approve.call(addressbXOp1ae, uintLZ5q8aA, {from: accounts[2]});

		assert.equal(boolK74WDMx, false)
		assert.equal(boolZ5R04n, false)
		assert.equal(boolsu7VPFd, true)
		assert.equal(boolwfvrcRu, true)
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancehHqpmGT = await Straight_Fire_Finance.new({from: accounts[1]});
		const uintgIEFUxZ = BigInt("999")
		const addressM4eA2yV = accounts[0]
		const addressJKgrXAw = accounts[3]
		const uintTzWlZU9 = BigInt("1364")
		const addressRezLV2 = "0x0000000000000000000000000000000000000001"
		const boolb2nmIfX = await Straight_Fire_FinancehHqpmGT.transfer.call(addressM4eA2yV, uintgIEFUxZ, {from: accounts[5]});
		const uint256MxzunP7 = await Straight_Fire_FinancehHqpmGT.balanceOf.call(addressJKgrXAw, {from: accounts[0]});
		const uint256APBIBp9 = await Straight_Fire_FinancehHqpmGT.totalSupply.call({from: accounts[4]});
		const boolhiGvXAb = await Straight_Fire_FinancehHqpmGT.approve.call(addressRezLV2, uintTzWlZU9, {from: accounts[2]});

		assert.equal(boolb2nmIfX, false)
		assert.equal(boolhiGvXAb, true)
		assert.equal(uint256APBIBp9, BigInt("80000000000000000000000"))
		assert.equal(uint256MxzunP7, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancebhXlbrZ = await Straight_Fire_Finance.new({from: accounts[4]});
		const addressmMC5czj = accounts[4]
		const addressSoNovVH = accounts[2]
		const addressQvyGm0t = "0x0000000000000000000000000000000000000001"
		const uintkY8C03 = BigInt("753")
		const addresseR3LwvI = accounts[4]
		const addressGIgKCX3 = accounts[4]
		const uint256QGfiPKm = await Straight_Fire_FinancebhXlbrZ.balanceOf.call(addressmMC5czj, {from: accounts[0]});
		const uintjvxmaGS = await Straight_Fire_FinancebhXlbrZ.allowance.call(addressQvyGm0t, addressSoNovVH, {from: accounts[2]});
		const boolQ6FVI6T = await Straight_Fire_FinancebhXlbrZ.transferFrom.call(addressGIgKCX3, addresseR3LwvI, uintkY8C03, {from: accounts[1]});
		const uint256ORsk2jz = await Straight_Fire_FinancebhXlbrZ.totalSupply.call({from: accounts[0]});

		assert.equal(boolQ6FVI6T, false)
		assert.equal(uint256ORsk2jz, BigInt("80000000000000000000000"))
		assert.equal(uint256QGfiPKm, BigInt("80000000000000000000000"))
		assert.equal(uintjvxmaGS, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceVgc4UG = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyrAWXpn = BigInt("1326")
		const addressFP4rD1K = accounts[3]
		const addressThJqXRl = accounts[1]
		const addressDQ1gspc = accounts[5]
		const addressSSvE3Np = accounts[4]
		const boolHSgSHm6 = await Straight_Fire_FinanceVgc4UG.transfer.call(addressFP4rD1K, uintyrAWXpn, {from: accounts[0]});
		const uintrOiWsu6 = await Straight_Fire_FinanceVgc4UG.allowance.call(addressDQ1gspc, addressThJqXRl, {from: accounts[1]});
		const uint256MS44hSY = await Straight_Fire_FinanceVgc4UG.balanceOf.call(addressSSvE3Np, {from: accounts[2]});
	});
})