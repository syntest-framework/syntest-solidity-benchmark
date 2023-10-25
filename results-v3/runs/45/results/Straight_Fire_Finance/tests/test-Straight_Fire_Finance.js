const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancezCH8KQa = await Straight_Fire_Finance.new({from: accounts[4]});
		const addressKEqCnP5 = accounts[3]
		const addressxP70xK = accounts[0]
		const addressuY2QYMb = accounts[1]
		const addresskYhkcOn = accounts[4]
		const addressrDOVlsW = accounts[0]
		const addressOKZ7uZx = accounts[5]
		const addressCuBRJPO = accounts[4]
		const addresscGn3i1d = accounts[4]
		const addressMH3zeY = accounts[4]
		const uintpspLcLq = BigInt("818")
		const addressECiR7dt = accounts[2]
		const uintefQ4Swr = await Straight_Fire_FinancezCH8KQa.allowance.call(addressxP70xK, addressKEqCnP5, {from: accounts[4]});
		const uintj5txyi = await Straight_Fire_FinancezCH8KQa.allowance.call(addresskYhkcOn, addressuY2QYMb, {from: accounts[5]});
		const uintRhwDfqC = await Straight_Fire_FinancezCH8KQa.allowance.call(addressOKZ7uZx, addressrDOVlsW, {from: accounts[1]});
		const uint256pSJyM4j = await Straight_Fire_FinancezCH8KQa.balanceOf.call(addressCuBRJPO, {from: "0x0000000000000000000000000000000000000001"});
		const uintr0AjPQl = await Straight_Fire_FinancezCH8KQa.allowance.call(addressMH3zeY, addresscGn3i1d, {from: accounts[2]});
		const boollNXo2jT = await Straight_Fire_FinancezCH8KQa.approve.call(addressECiR7dt, uintpspLcLq, {from: accounts[1]});

		assert.equal(boollNXo2jT, true)
		assert.equal(uint256pSJyM4j, BigInt("80000000000000000000000"))
		assert.equal(uintRhwDfqC, BigInt("0"))
		assert.equal(uintefQ4Swr, BigInt("0"))
		assert.equal(uintj5txyi, BigInt("0"))
		assert.equal(uintr0AjPQl, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceZVGowW = await Straight_Fire_Finance.new({from: accounts[1]});
		const uintEWj8tBY = BigInt("117")
		const addressqW1Wu7X = accounts[3]
		const uintDOYdUvU = BigInt("1351")
		const addressz7kmkFz = accounts[2]
		const addressi5wg8HZ = accounts[2]
		const uintSl0fKm = BigInt("294")
		const addressrNvBngB = accounts[4]
		const addressOrEAs73 = accounts[4]
		const boolsca18pw = await Straight_Fire_FinanceZVGowW.approve.call(addressqW1Wu7X, uintEWj8tBY, {from: accounts[2]});
		const uint256GDXu23k = await Straight_Fire_FinanceZVGowW.totalSupply.call({from: accounts[5]});
		const boolsnccze = await Straight_Fire_FinanceZVGowW.transferFrom.call(addressi5wg8HZ, addressz7kmkFz, uintDOYdUvU, {from: accounts[0]});
		const uint256RO2Fyn0 = await Straight_Fire_FinanceZVGowW.totalSupply.call({from: accounts[3]});
		const boolJ83oiQ4 = await Straight_Fire_FinanceZVGowW.transferFrom.call(addressOrEAs73, addressrNvBngB, uintSl0fKm, {from: accounts[2]});

		assert.equal(boolJ83oiQ4, false)
		assert.equal(boolsca18pw, true)
		assert.equal(boolsnccze, false)
		assert.equal(uint256GDXu23k, BigInt("80000000000000000000000"))
		assert.equal(uint256RO2Fyn0, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceRHgQioS = await Straight_Fire_Finance.new({from: accounts[3]});
		const addressiWAXpDF = accounts[4]
		const uintbkE2kTM = BigInt("1171")
		const addressWdGC4Sg = accounts[1]
		const uintjOzmQYt = BigInt("1082")
		const addressrXXVXT = accounts[3]
		const addressN6jE3Ua = accounts[4]
		const uintIqtpBhs = BigInt("767")
		const addressh7lCUmy = accounts[1]
		const uintf20Dv7J = BigInt("1687")
		const addressG2SiIIk = accounts[4]
		const uint256xEjH8WQ = await Straight_Fire_FinanceRHgQioS.balanceOf.call(addressiWAXpDF, {from: accounts[2]});
		const bool3Vk3A1 = await Straight_Fire_FinanceRHgQioS.transfer.call(addressWdGC4Sg, uintbkE2kTM, {from: accounts[0]});
		const uint256aaeONDL = await Straight_Fire_FinanceRHgQioS.totalSupply.call({from: accounts[3]});
		const boolgmPMeJ9 = await Straight_Fire_FinanceRHgQioS.transferFrom.call(addressN6jE3Ua, addressrXXVXT, uintjOzmQYt, {from: accounts[2]});
		const boolDvzSDP4 = await Straight_Fire_FinanceRHgQioS.approve.call(addressh7lCUmy, uintIqtpBhs, {from: accounts[4]});
		const boolFCgkxrx = await Straight_Fire_FinanceRHgQioS.transfer.call(addressG2SiIIk, uintf20Dv7J, {from: accounts[0]});

		assert.equal(bool3Vk3A1, false)
		assert.equal(boolDvzSDP4, true)
		assert.equal(boolFCgkxrx, false)
		assert.equal(boolgmPMeJ9, false)
		assert.equal(uint256aaeONDL, BigInt("80000000000000000000000"))
		assert.equal(uint256xEjH8WQ, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financem1rmwPn = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssTqoLpU = "0x0000000000000000000000000000000000000001"
		const addressUCKtnH = accounts[4]
		const uintufXm9r0 = BigInt("1396")
		const addressW7xhjoK = accounts[1]
		const uint256AVAz4y = await Straight_Fire_Financem1rmwPn.balanceOf.call(addresssTqoLpU, {from: accounts[1]});
		const uint256qDLOmuC = await Straight_Fire_Financem1rmwPn.balanceOf.call(addressUCKtnH, {from: accounts[2]});
		const uint256AZKmR3M = await Straight_Fire_Financem1rmwPn.totalSupply.call({from: accounts[0]});
		const uint256hqU6AfN = await Straight_Fire_Financem1rmwPn.totalSupply.call({from: accounts[4]});
		const boolT9GCFos = await Straight_Fire_Financem1rmwPn.approve.call(addressW7xhjoK, uintufXm9r0, {from: accounts[1]});
	});
})