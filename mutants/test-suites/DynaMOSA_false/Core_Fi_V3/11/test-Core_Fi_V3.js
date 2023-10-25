const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Ang3xPY = await Core_Fi_V3.new({from: accounts[2]});
		const addresspRFWVvd = accounts[4]
		const addressolzV45f = accounts[0]
		const addressxJhRHVz = accounts[1]
		const addressI9baKz0 = accounts[3]
		const uintQtR8F3G = BigInt("1258")
		const addressC6qhEIx = "0x0000000000000000000000000000000000000001"
		const addresstsjVkBa = accounts[2]
		const uintQqjkgQP = await Core_Fi_V3Ang3xPY.allowance.call(addressolzV45f, addresspRFWVvd, {from: accounts[3]});
		const uintNjRu0Xd = await Core_Fi_V3Ang3xPY.allowance.call(addressI9baKz0, addressxJhRHVz, {from: accounts[1]});
		const boolQojnOa = await Core_Fi_V3Ang3xPY.transferFrom.call(addresstsjVkBa, addressC6qhEIx, uintQtR8F3G, {from: accounts[0]});

		assert.equal(boolQojnOa, false)
		assert.equal(uintNjRu0Xd, BigInt("0"))
		assert.equal(uintQqjkgQP, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3yeesd9f = await Core_Fi_V3.new({from: accounts[2]});
		const uint8U1FjR = BigInt("1771")
		const addressp0cZHVh = accounts[3]
		const uintlxtibk8 = BigInt("1465")
		const addresstvSGjto = accounts[1]
		const addresseXwb2wn = "0x0000000000000000000000000000000000000001"
		const addressnRFu5OI = accounts[3]
		const addressGMw4emB = "0x0000000000000000000000000000000000000001"
		const booloBEeUF = await Core_Fi_V3yeesd9f.approve.call(addressp0cZHVh, uint8U1FjR, {from: accounts[1]});
		const boolATpNM9A = await Core_Fi_V3yeesd9f.transferFrom.call(addresseXwb2wn, addresstvSGjto, uintlxtibk8, {from: accounts[3]});
		const uint256RQkqUGs = await Core_Fi_V3yeesd9f.totalSupply.call({from: accounts[3]});
		const uintMoREqkL = await Core_Fi_V3yeesd9f.allowance.call(addressGMw4emB, addressnRFu5OI, {from: accounts[4]});

		assert.equal(boolATpNM9A, false)
		assert.equal(booloBEeUF, true)
		assert.equal(uint256RQkqUGs, BigInt("84000000000000000000000"))
		assert.equal(uintMoREqkL, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3XqiS6G9 = await Core_Fi_V3.new({from: accounts[1]});
		const uintJJOpmJJ = BigInt("95")
		const addressP9S8egY = accounts[4]
		const uint256RMUqltb = await Core_Fi_V3XqiS6G9.totalSupply.call({from: accounts[2]});
		const boolaVvogVL = await Core_Fi_V3XqiS6G9.transfer.call(addressP9S8egY, uintJJOpmJJ, {from: accounts[3]});

		assert.equal(boolaVvogVL, false)
		assert.equal(uint256RMUqltb, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3YYYw3X4 = await Core_Fi_V3.new({from: accounts[4]});
		const addressY5HGZVX = "0x0000000000000000000000000000000000000001"
		const addressbeZFTJf = accounts[0]
		const address8NYNBT = accounts[3]
		const addressoh0i1zb = accounts[1]
		const uintGvvRAF = BigInt("1799")
		const addressSKwcQxQ = accounts[4]
		const addressndesFb = accounts[2]
		const uint256jL99Wi6 = await Core_Fi_V3YYYw3X4.balanceOf.call(addressY5HGZVX, {from: accounts[4]});
		const uint256y5Xytlm = await Core_Fi_V3YYYw3X4.balanceOf.call(addressbeZFTJf, {from: accounts[1]});
		const uinthrHF5ND = await Core_Fi_V3YYYw3X4.allowance.call(addressoh0i1zb, address8NYNBT, {from: accounts[0]});
		const boola4agH2k = await Core_Fi_V3YYYw3X4.transferFrom.call(addressndesFb, addressSKwcQxQ, uintGvvRAF, {from: accounts[4]});

		assert.equal(boola4agH2k, false)
		assert.equal(uint256jL99Wi6, BigInt("0"))
		assert.equal(uint256y5Xytlm, BigInt("0"))
		assert.equal(uinthrHF5ND, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3bzWKct8 = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressvqjUiKQ = accounts[0]
		const uintOKTDxMO = BigInt("1142")
		const address0tyMUJ = accounts[1]
		const addressCCoCHRm = accounts[1]
		const addressyfz5jGS = accounts[1]
		const addressqzSkn0S = accounts[0]
		const addressIGLi69a = "0x0000000000000000000000000000000000000001"
		const uint256Sbq7pK = await Core_Fi_V3bzWKct8.balanceOf.call(addressvqjUiKQ, {from: accounts[2]});
		const boolWaP46Ql = await Core_Fi_V3bzWKct8.transfer.call(address0tyMUJ, uintOKTDxMO, {from: accounts[2]});
		const uint256We3XJ2c = await Core_Fi_V3bzWKct8.balanceOf.call(addressCCoCHRm, {from: accounts[2]});
		const uintyWLxd8J = await Core_Fi_V3bzWKct8.allowance.call(addressqzSkn0S, addressyfz5jGS, {from: accounts[3]});
		const uint256hrRKQqA = await Core_Fi_V3bzWKct8.balanceOf.call(addressIGLi69a, {from: accounts[3]});
	});
})