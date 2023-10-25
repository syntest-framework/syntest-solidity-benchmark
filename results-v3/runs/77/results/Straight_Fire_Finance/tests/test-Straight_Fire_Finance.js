const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceAng3xPY = await Straight_Fire_Finance.new({from: accounts[2]});
		const addresspRFWVvd = accounts[4]
		const addressolzV45f = accounts[0]
		const addressxJhRHVz = accounts[1]
		const addressI9baKz0 = accounts[3]
		const uintQtR8F3G = BigInt("1258")
		const addressC6qhEIx = "0x0000000000000000000000000000000000000001"
		const addresstsjVkBa = accounts[2]
		const uintQqjkgQP = await Straight_Fire_FinanceAng3xPY.allowance.call(addressolzV45f, addresspRFWVvd, {from: accounts[3]});
		const uintNjRu0Xd = await Straight_Fire_FinanceAng3xPY.allowance.call(addressI9baKz0, addressxJhRHVz, {from: accounts[1]});
		const boolQojnOa = await Straight_Fire_FinanceAng3xPY.transferFrom.call(addresstsjVkBa, addressC6qhEIx, uintQtR8F3G, {from: accounts[0]});

		assert.equal(boolQojnOa, false)
		assert.equal(uintNjRu0Xd, BigInt("0"))
		assert.equal(uintQqjkgQP, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financeyeesd9f = await Straight_Fire_Finance.new({from: accounts[2]});
		const uint8U1FjR = BigInt("1771")
		const addressp0cZHVh = accounts[3]
		const uintlxtibk8 = BigInt("1465")
		const addresstvSGjto = accounts[1]
		const addresseXwb2wn = "0x0000000000000000000000000000000000000001"
		const addressnRFu5OI = accounts[3]
		const addressGMw4emB = "0x0000000000000000000000000000000000000001"
		const booloBEeUF = await Straight_Fire_Financeyeesd9f.approve.call(addressp0cZHVh, uint8U1FjR, {from: accounts[1]});
		const boolATpNM9A = await Straight_Fire_Financeyeesd9f.transferFrom.call(addresseXwb2wn, addresstvSGjto, uintlxtibk8, {from: accounts[3]});
		const uint256RQkqUGs = await Straight_Fire_Financeyeesd9f.totalSupply.call({from: accounts[3]});
		const uintMoREqkL = await Straight_Fire_Financeyeesd9f.allowance.call(addressGMw4emB, addressnRFu5OI, {from: accounts[4]});

		assert.equal(boolATpNM9A, false)
		assert.equal(booloBEeUF, true)
		assert.equal(uint256RQkqUGs, BigInt("80000000000000000000000"))
		assert.equal(uintMoREqkL, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceXqiS6G9 = await Straight_Fire_Finance.new({from: accounts[1]});
		const uintJJOpmJJ = BigInt("95")
		const addressP9S8egY = accounts[4]
		const uint256RMUqltb = await Straight_Fire_FinanceXqiS6G9.totalSupply.call({from: accounts[2]});
		const boolaVvogVL = await Straight_Fire_FinanceXqiS6G9.transfer.call(addressP9S8egY, uintJJOpmJJ, {from: accounts[3]});

		assert.equal(boolaVvogVL, false)
		assert.equal(uint256RMUqltb, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceYYYw3X4 = await Straight_Fire_Finance.new({from: accounts[4]});
		const addressY5HGZVX = "0x0000000000000000000000000000000000000001"
		const addressbeZFTJf = accounts[0]
		const address8NYNBT = accounts[3]
		const addressoh0i1zb = accounts[1]
		const uintGvvRAF = BigInt("1799")
		const addressSKwcQxQ = accounts[4]
		const addressndesFb = accounts[2]
		const uint256jL99Wi6 = await Straight_Fire_FinanceYYYw3X4.balanceOf.call(addressY5HGZVX, {from: accounts[4]});
		const uint256y5Xytlm = await Straight_Fire_FinanceYYYw3X4.balanceOf.call(addressbeZFTJf, {from: accounts[1]});
		const uinthrHF5ND = await Straight_Fire_FinanceYYYw3X4.allowance.call(addressoh0i1zb, address8NYNBT, {from: accounts[0]});
		const boola4agH2k = await Straight_Fire_FinanceYYYw3X4.transferFrom.call(addressndesFb, addressSKwcQxQ, uintGvvRAF, {from: accounts[4]});

		assert.equal(boola4agH2k, false)
		assert.equal(uint256jL99Wi6, BigInt("0"))
		assert.equal(uint256y5Xytlm, BigInt("0"))
		assert.equal(uinthrHF5ND, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceLPgb9b = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintP2mwssz = BigInt("299")
		const address1nmTc3 = accounts[2]
		const uintXPnWOqz = BigInt("1472")
		const addressL80K3P = accounts[4]
		const addressj9sJmTb = accounts[0]
		const addressbywkBeC = accounts[3]
		const uinthXSPQsn = BigInt("281")
		const addressi2X3Ib = "0x0000000000000000000000000000000000000001"
		const booln1by03A = await Straight_Fire_FinanceLPgb9b.transfer.call(address1nmTc3, uintP2mwssz, {from: accounts[4]});
		const boolBA46J1T = await Straight_Fire_FinanceLPgb9b.transfer.call(addressL80K3P, uintXPnWOqz, {from: accounts[2]});
		const uintCfvbXQi = await Straight_Fire_FinanceLPgb9b.allowance.call(addressbywkBeC, addressj9sJmTb, {from: "0x0000000000000000000000000000000000000001"});
		const boolW1fy0aF = await Straight_Fire_FinanceLPgb9b.approve.call(addressi2X3Ib, uinthXSPQsn, {from: accounts[2]});
	});
})