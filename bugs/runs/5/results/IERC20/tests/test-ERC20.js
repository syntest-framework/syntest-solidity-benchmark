const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractDSJeBve = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueYkq8mRb = BigInt("456")
		const towrvWNy5 = "0x0000000000000000000000000000000000000001"
		const ownerMWYA69F = accounts[1]
		const valuefEpjpM2 = BigInt("1348")
		const tonO2tTNI = accounts[1]
		const fromFH8eVoB = accounts[0]
		const nullTXDfgvV = await contractDSJeBve.transfer.call(towrvWNy5, valueYkq8mRb, {from: accounts[1]});
		const nullhRLnlYr = await contractDSJeBve.balanceOf.call(ownerMWYA69F, {from: accounts[1]});
		const nullvEo8Cp = await contractDSJeBve.totalSupply.call({from: accounts[3]});
		const nullmYejXB7 = await contractDSJeBve.transferFrom.call(fromFH8eVoB, tonO2tTNI, valuefEpjpM2, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC20', async () => {
		const contractuoE0ai = await ERC20.new({from: accounts[3]});
		const ownerr9qlqFe = accounts[3]
		const valueXwm93rF = BigInt("1063")
		const toLiV1gSQ = accounts[4]
		const fromjz0cNj8 = accounts[1]
		const spendergP4oLmB = accounts[0]
		const ownerDginnlY = accounts[0]
		const subtractedValueawqEWKi = BigInt("1718")
		const spender0ofek4 = "0x0000000000000000000000000000000000000001"
		const nullvRzIq3x = await contractuoE0ai.balanceOf.call(ownerr9qlqFe, {from: accounts[2]});
		const nullSj7hies = await contractuoE0ai.totalSupply.call({from: accounts[4]});
		const nullkGQMcHS = await contractuoE0ai.transferFrom.call(fromjz0cNj8, toLiV1gSQ, valueXwm93rF, {from: accounts[1]});
		const nullJ7IXbcS = await contractuoE0ai.allowance.call(ownerDginnlY, spendergP4oLmB, {from: "0x0000000000000000000000000000000000000001"});
		const nullSNJhanc = await contractuoE0ai.decreaseAllowance.call(spender0ofek4, subtractedValueawqEWKi, {from: accounts[5]});

		assert.equal(nullSj7hies, 0)
		assert.equal(nullvRzIq3x, 0)
		await expect(contractuoE0ai.transferFrom.call(fromjz0cNj8, toLiV1gSQ, valueXwm93rF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractTWtzao = await ERC20.new({from: accounts[0]});
		const ownerMeqBb1k = accounts[2]
		const valueTAB02A5 = BigInt("28")
		const toc9cz9fS = accounts[2]
		const valuekVLxvos = BigInt("186")
		const to4wDxw0 = accounts[3]
		const fromBc1WHe0 = "0x0000000000000000000000000000000000000001"
		const valuefykMeB = BigInt("1522")
		const spenderzGKKBaw = accounts[3]
		const nullgd4ccXq = await contractTWtzao.balanceOf.call(ownerMeqBb1k, {from: accounts[4]});
		const nullCLTVmla = await contractTWtzao.transfer.call(toc9cz9fS, valueTAB02A5, {from: accounts[2]});
		const nullyYF5bwH = await contractTWtzao.transferFrom.call(fromBc1WHe0, to4wDxw0, valuekVLxvos, {from: accounts[2]});
		const nullhuS5Fqv = await contractTWtzao.approve.call(spenderzGKKBaw, valuefykMeB, {from: accounts[3]});

		assert.equal(nullgd4ccXq, 0)
		await expect(contractTWtzao.transfer.call(toc9cz9fS, valueTAB02A5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractnUZ4Ng6 = await ERC20.new({from: accounts[4]});
		const addedValueUXo3AKR = BigInt("1526")
		const spendereZZUfZ = "0x0000000000000000000000000000000000000001"
		const addedValueY1C7zBZ = BigInt("2018")
		const spenderRb6p9Vq = accounts[1]
		const valuebR4j0vR = BigInt("1237")
		const to1XOwRa = accounts[1]
		const fromwe4BjXJ = accounts[5]
		const ownerrwif4Db = accounts[0]
		const spenderGyCds9B = accounts[2]
		const owneru961dcd = accounts[4]
		const spenderDr7KKM = "0x0000000000000000000000000000000000000001"
		const owner5mas9n = accounts[1]
		const nulllILbxl8 = await contractnUZ4Ng6.increaseAllowance.call(spendereZZUfZ, addedValueUXo3AKR, {from: accounts[3]});
		const nullTrNOCMB = await contractnUZ4Ng6.increaseAllowance.call(spenderRb6p9Vq, addedValueY1C7zBZ, {from: accounts[2]});
		const nullPVtRrrV = await contractnUZ4Ng6.transferFrom.call(fromwe4BjXJ, to1XOwRa, valuebR4j0vR, {from: accounts[2]});
		const nullaUzJzg2 = await contractnUZ4Ng6.balanceOf.call(ownerrwif4Db, {from: accounts[0]});
		const nulliONnKg = await contractnUZ4Ng6.allowance.call(owneru961dcd, spenderGyCds9B, {from: accounts[5]});
		const nullO258xO = await contractnUZ4Ng6.allowance.call(owner5mas9n, spenderDr7KKM, {from: accounts[0]});

		assert.equal(nullTrNOCMB, true)
		assert.equal(nulllILbxl8, true)
		await expect(contractnUZ4Ng6.transferFrom.call(fromwe4BjXJ, to1XOwRa, valuebR4j0vR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractWtREFN6 = await ERC20.new({from: accounts[3]});
		const subtractedValuePUixxzW = BigInt("1424")
		const spenderMCxpMtK = accounts[2]
		const addedValueOBcXKR = BigInt("1564")
		const spenderIyJ3zUi = accounts[2]
		const value9H6Wk9 = BigInt("267")
		const spenderUnl2pNo = accounts[4]
		const nulls4SQDbz = await contractWtREFN6.decreaseAllowance.call(spenderMCxpMtK, subtractedValuePUixxzW, {from: accounts[2]});
		const nullvsLjvGX = await contractWtREFN6.increaseAllowance.call(spenderIyJ3zUi, addedValueOBcXKR, {from: accounts[3]});
		const nullppccNx4 = await contractWtREFN6.approve.call(spenderUnl2pNo, value9H6Wk9, {from: accounts[4]});

		await expect(contractWtREFN6.decreaseAllowance.call(spenderMCxpMtK, subtractedValuePUixxzW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractqWBpyaA = await ERC20.new({from: accounts[0]});
		const valueshfZYZ8 = BigInt("17")
		const spenderJoKSjBg = "0x0000000000000000000000000000000000000001"
		const ownerPltYXU = accounts[0]
		const valuezPXTQTA = BigInt("12")
		const spenderzdF6dMI = accounts[2]
		const addedValuemnNP4Oe = BigInt("837")
		const spenderXqeompi = accounts[2]
		const valueWV1p8iI = BigInt("336")
		const spenderXuaGPui = accounts[4]
		const nullIs9vr1T = await contractqWBpyaA.approve.call(spenderJoKSjBg, valueshfZYZ8, {from: accounts[0]});
		const nullYA6tC7T = await contractqWBpyaA.balanceOf.call(ownerPltYXU, {from: accounts[1]});
		const nullsOpeSAn = await contractqWBpyaA.approve.call(spenderzdF6dMI, valuezPXTQTA, {from: accounts[0]});
		const nullLBGc6ef = await contractqWBpyaA.increaseAllowance.call(spenderXqeompi, addedValuemnNP4Oe, {from: accounts[5]});
		const nullrrbdcZk = await contractqWBpyaA.approve.call(spenderXuaGPui, valueWV1p8iI, {from: accounts[2]});

		assert.equal(nullIs9vr1T, true)
		assert.equal(nullLBGc6ef, true)
		assert.equal(nullYA6tC7T, 0)
		assert.equal(nullrrbdcZk, true)
		assert.equal(nullsOpeSAn, true)
	});

	it('test for ERC20', async () => {
		const contractoeF9Dx7 = await ERC20.new({from: accounts[3]});
		const spenderedirDNf = accounts[3]
		const ownersSeFq0h = accounts[4]
		const valuea7DBGE2 = BigInt("291")
		const spendervLBjGde = accounts[4]
		const null5Hu0EL = await contractoeF9Dx7.allowance.call(ownersSeFq0h, spenderedirDNf, {from: accounts[1]});
		const nullyrWdt72 = await contractoeF9Dx7.approve.call(spendervLBjGde, valuea7DBGE2, {from: accounts[4]});

		assert.equal(null5Hu0EL, 0)
		assert.equal(nullyrWdt72, true)
	});
})