const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contracty6mtIvM = await ERC20.new({from: accounts[4]});
		const spenderi08Lvg5 = accounts[5]
		const ownerMozdvH = accounts[3]
		const addedValueiXICfZ5 = BigInt("1080")
		const spenderScapmVB = accounts[2]
		const ownertUnj5hB = accounts[1]
		const ownerc9w4aYp = accounts[1]
		const valuemFHj9Si = BigInt("19")
		const towDNpYWf = accounts[2]
		const fromTw91Waj = accounts[3]
		const nullpqSVAaD = await contracty6mtIvM.allowance.call(ownerMozdvH, spenderi08Lvg5, {from: accounts[2]});
		const nullsdGwuV = await contracty6mtIvM.increaseAllowance.call(spenderScapmVB, addedValueiXICfZ5, {from: accounts[4]});
		const nullQhpxysC = await contracty6mtIvM.balanceOf.call(ownertUnj5hB, {from: accounts[1]});
		const nullGRa0FAs = await contracty6mtIvM.balanceOf.call(ownerc9w4aYp, {from: accounts[0]});
		const nullWRRJke = await contracty6mtIvM.transferFrom.call(fromTw91Waj, towDNpYWf, valuemFHj9Si, {from: accounts[3]});

		assert.equal(nullGRa0FAs, 0)
		assert.equal(nullQhpxysC, 0)
		assert.equal(nullpqSVAaD, 0)
		assert.equal(nullsdGwuV, true)
		await expect(contracty6mtIvM.transferFrom.call(fromTw91Waj, towDNpYWf, valuemFHj9Si, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractdSIeidJ = await ERC20.new({from: accounts[3]});
		const ownerNjIt6N8 = accounts[2]
		const valueBUrHOdW = BigInt("1196")
		const spenderxea2j9I = accounts[4]
		const valueX1EcO8X = BigInt("804")
		const tocudclQd = accounts[4]
		const fromCwcAPXe = accounts[2]
		const ownerFtA6HwJ = accounts[4]
		const subtractedValuelJUeIh = BigInt("902")
		const spenderLRaM14 = accounts[2]
		const addedValueR9hafgW = BigInt("414")
		const spenderoOD3cX5 = accounts[4]
		const nullRcCcPfk = await contractdSIeidJ.balanceOf.call(ownerNjIt6N8, {from: accounts[1]});
		const nullGD0qBgM = await contractdSIeidJ.approve.call(spenderxea2j9I, valueBUrHOdW, {from: accounts[4]});
		const nullDfAw4Tq = await contractdSIeidJ.transferFrom.call(fromCwcAPXe, tocudclQd, valueX1EcO8X, {from: accounts[2]});
		const nullHIe3t9i = await contractdSIeidJ.balanceOf.call(ownerFtA6HwJ, {from: accounts[1]});
		const nullbX2Obp = await contractdSIeidJ.decreaseAllowance.call(spenderLRaM14, subtractedValuelJUeIh, {from: accounts[1]});
		const nullKwYjkK = await contractdSIeidJ.increaseAllowance.call(spenderoOD3cX5, addedValueR9hafgW, {from: accounts[4]});

		assert.equal(nullGD0qBgM, true)
		assert.equal(nullRcCcPfk, 0)
		await expect(contractdSIeidJ.transferFrom.call(fromCwcAPXe, tocudclQd, valueX1EcO8X, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractUT0EWjl = await ERC20.new({from: accounts[0]});
		const addedValueLTEJQ2d = BigInt("369")
		const spenderUdkwn5C = accounts[0]
		const spenderUsOu1g = accounts[1]
		const ownerT9BrrnG = accounts[3]
		const subtractedValueelzepJM = BigInt("232")
		const spenderfqSg3Lb = accounts[4]
		const nullsfHfPFW = await contractUT0EWjl.increaseAllowance.call(spenderUdkwn5C, addedValueLTEJQ2d, {from: accounts[5]});
		const nully9YE90s = await contractUT0EWjl.allowance.call(ownerT9BrrnG, spenderUsOu1g, {from: accounts[3]});
		const nullV2JWbdq = await contractUT0EWjl.decreaseAllowance.call(spenderfqSg3Lb, subtractedValueelzepJM, {from: accounts[1]});

		assert.equal(nullsfHfPFW, true)
		assert.equal(nully9YE90s, 0)
		await expect(contractUT0EWjl.decreaseAllowance.call(spenderfqSg3Lb, subtractedValueelzepJM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractrwmUmv1 = await ERC20.new({from: accounts[1]});
		const spenderSemYvuA = accounts[2]
		const ownerdgQBzcu = accounts[3]
		const spenderTzTsIvG = accounts[3]
		const ownerepWL7nN = accounts[2]
		const nullxisjHOl = await contractrwmUmv1.allowance.call(ownerdgQBzcu, spenderSemYvuA, {from: accounts[1]});
		const nullGC8yVwU = await contractrwmUmv1.totalSupply.call({from: accounts[0]});
		const nullCvSY2Si = await contractrwmUmv1.allowance.call(ownerepWL7nN, spenderTzTsIvG, {from: accounts[0]});

		assert.equal(nullCvSY2Si, 0)
		assert.equal(nullGC8yVwU, 0)
		assert.equal(nullxisjHOl, 0)
	});

	it('test for ERC20', async () => {
		const contractNmEUBAB = await ERC20.new({from: accounts[1]});
		const valueCe7LLK = BigInt("1601")
		const toNxlJGH4 = accounts[3]
		const addedValueChFxSVi = BigInt("50")
		const spenderYpP2i6J = accounts[1]
		const valueYT4C5hN = BigInt("409")
		const spenderT4mLMJe = "0x0000000000000000000000000000000000000001"
		const valueV8HF9th = BigInt("1631")
		const toqFYKVm = accounts[5]
		const addedValueLeSI7T0 = BigInt("1304")
		const spenderN94P1b0 = accounts[1]
		const valueRLLxODw = BigInt("1957")
		const toYrfyAhG = "0x0000000000000000000000000000000000000001"
		const fromF4jcuCs = accounts[0]
		const nullT73b3Hb = await contractNmEUBAB.transfer.call(toNxlJGH4, valueCe7LLK, {from: accounts[3]});
		const nulljb3MRBJ = await contractNmEUBAB.increaseAllowance.call(spenderYpP2i6J, addedValueChFxSVi, {from: accounts[1]});
		const nullSZVJNfY = await contractNmEUBAB.approve.call(spenderT4mLMJe, valueYT4C5hN, {from: accounts[4]});
		const nullW8LpD8 = await contractNmEUBAB.transfer.call(toqFYKVm, valueV8HF9th, {from: accounts[2]});
		const nullINk9iXU = await contractNmEUBAB.increaseAllowance.call(spenderN94P1b0, addedValueLeSI7T0, {from: accounts[2]});
		const nullKsAbxJ0 = await contractNmEUBAB.transferFrom.call(fromF4jcuCs, toYrfyAhG, valueRLLxODw, {from: accounts[2]});

		await expect(contractNmEUBAB.transfer.call(toNxlJGH4, valueCe7LLK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contracth3oLwOT = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerrQeUu1A = accounts[4]
		const owneruXP9bpa = accounts[1]
		const nullWbavrOY = await contracth3oLwOT.balanceOf.call(ownerrQeUu1A, {from: accounts[2]});
		const null0YCdCc = await contracth3oLwOT.totalSupply.call({from: accounts[0]});
		const nullSiAuRB = await contracth3oLwOT.balanceOf.call(owneruXP9bpa, {from: accounts[0]});
	});
})