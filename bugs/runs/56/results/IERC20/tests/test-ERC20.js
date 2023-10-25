const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractSLjFAg5 = await ERC20.new({from: accounts[4]});
		const addedValueMNOf1xh = BigInt("1675")
		const spenderVFJKNpz = accounts[2]
		const spenderlPLOhNf = accounts[4]
		const ownertP6pHhQ = "0x0000000000000000000000000000000000000001"
		const spenderPFAoB9e = accounts[1]
		const ownercUV51ZY = accounts[5]
		const owneriulsIQi = accounts[2]
		const addedValueCEkyVHA = BigInt("1665")
		const spenderD7H0Iy = accounts[2]
		const nullFeaUxtd = await contractSLjFAg5.increaseAllowance.call(spenderVFJKNpz, addedValueMNOf1xh, {from: accounts[1]});
		const nullQMcSpiy = await contractSLjFAg5.allowance.call(ownertP6pHhQ, spenderlPLOhNf, {from: accounts[1]});
		const nullLPFmY2d = await contractSLjFAg5.allowance.call(ownercUV51ZY, spenderPFAoB9e, {from: accounts[4]});
		const nullJWQCVy = await contractSLjFAg5.balanceOf.call(owneriulsIQi, {from: accounts[4]});
		const nullODsRtj2 = await contractSLjFAg5.increaseAllowance.call(spenderD7H0Iy, addedValueCEkyVHA, {from: accounts[4]});

		assert.equal(nullFeaUxtd, true)
		assert.equal(nullJWQCVy, 0)
		assert.equal(nullLPFmY2d, 0)
		assert.equal(nullODsRtj2, true)
		assert.equal(nullQMcSpiy, 0)
	});

	it('test for ERC20', async () => {
		const contractFBh055 = await ERC20.new({from: accounts[4]});
		const valueUnSi1wO = BigInt("128")
		const tonrSIzdM = accounts[2]
		const ownerHyAjfp5 = "0x0000000000000000000000000000000000000001"
		const nullcCVDT2 = await contractFBh055.transfer.call(tonrSIzdM, valueUnSi1wO, {from: accounts[3]});
		const nulljL9mcH3 = await contractFBh055.balanceOf.call(ownerHyAjfp5, {from: accounts[1]});

		await expect(contractFBh055.transfer.call(tonrSIzdM, valueUnSi1wO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractPpf8Y1S = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerzzCkvcE = accounts[3]
		const valueVPO7Pt2 = BigInt("1490")
		const toNdoHdR = accounts[0]
		const fromI3Jd5qA = accounts[4]
		const ownerdq0IOF3 = accounts[2]
		const valueIwR0mj5 = BigInt("1355")
		const tow5YLU4 = accounts[0]
		const from4uK3QX = accounts[0]
		const subtractedValueGIBBuk6 = BigInt("283")
		const spenderZCGkPvC = accounts[2]
		const nulldzHzV3X = await contractPpf8Y1S.balanceOf.call(ownerzzCkvcE, {from: accounts[3]});
		const nulllYM7dKo = await contractPpf8Y1S.transferFrom.call(fromI3Jd5qA, toNdoHdR, valueVPO7Pt2, {from: accounts[4]});
		const nullsamXJg = await contractPpf8Y1S.balanceOf.call(ownerdq0IOF3, {from: accounts[0]});
		const nullqD5rdiy = await contractPpf8Y1S.transferFrom.call(from4uK3QX, tow5YLU4, valueIwR0mj5, {from: accounts[3]});
		const nulldsGmnp = await contractPpf8Y1S.decreaseAllowance.call(spenderZCGkPvC, subtractedValueGIBBuk6, {from: accounts[0]});
	});

	it('test for ERC20', async () => {
		const contract8O1mGJ = await ERC20.new({from: accounts[5]});
		const valuefo4eDr = BigInt("371")
		const spenderNs8aXpK = accounts[3]
		const owneruSt1rAS = "0x0000000000000000000000000000000000000001"
		const spenderCYfIlKr = accounts[3]
		const ownerLTRI840 = accounts[2]
		const spenderJCQd9V = accounts[0]
		const ownertlrSmQt = accounts[4]
		const nullLkUHo0w = await contract8O1mGJ.approve.call(spenderNs8aXpK, valuefo4eDr, {from: "0x0000000000000000000000000000000000000001"});
		const nullo1eTDbh = await contract8O1mGJ.balanceOf.call(owneruSt1rAS, {from: "0x0000000000000000000000000000000000000001"});
		const nullHEA2KWA = await contract8O1mGJ.allowance.call(ownerLTRI840, spenderCYfIlKr, {from: accounts[0]});
		const nulllFZJoNs = await contract8O1mGJ.allowance.call(ownertlrSmQt, spenderJCQd9V, {from: accounts[4]});

		assert.equal(nullHEA2KWA, 0)
		assert.equal(nullLkUHo0w, true)
		assert.equal(nulllFZJoNs, 0)
		assert.equal(nullo1eTDbh, 0)
	});

	it('test for ERC20', async () => {
		const contractLqWzfkh = await ERC20.new({from: accounts[4]});
		const subtractedValueYlu5E7X = BigInt("1733")
		const spenderzVfkvWh = accounts[2]
		const valueO7K0s4t = BigInt("1383")
		const spenderN2zORdh = accounts[1]
		const valueb2Xm4Xm = BigInt("710")
		const spenderpCYbUu = accounts[2]
		const nullhmj2uDd = await contractLqWzfkh.decreaseAllowance.call(spenderzVfkvWh, subtractedValueYlu5E7X, {from: accounts[0]});
		const nullkfLveF7 = await contractLqWzfkh.totalSupply.call({from: accounts[2]});
		const nullbnVp6uP = await contractLqWzfkh.approve.call(spenderN2zORdh, valueO7K0s4t, {from: accounts[3]});
		const nullLyGRHIU = await contractLqWzfkh.approve.call(spenderpCYbUu, valueb2Xm4Xm, {from: accounts[4]});

		await expect(contractLqWzfkh.decreaseAllowance.call(spenderzVfkvWh, subtractedValueYlu5E7X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractllkXb3 = await ERC20.new({from: accounts[0]});
		const addedValueOhHmubl = BigInt("1235")
		const spenderBlQJBLB = accounts[3]
		const ownernc9jbmY = accounts[3]
		const valueLTaiQPM = BigInt("354")
		const toCpTGbkC = accounts[2]
		const fromnTYOjUW = accounts[4]
		const valuelbCC1CJ = BigInt("2018")
		const toCPyvWFt = accounts[3]
		const fromOe2UjEf = accounts[0]
		const ownerfspeKbd = accounts[4]
		const nullFKjepSy = await contractllkXb3.increaseAllowance.call(spenderBlQJBLB, addedValueOhHmubl, {from: accounts[4]});
		const nullTKI3cd6 = await contractllkXb3.balanceOf.call(ownernc9jbmY, {from: accounts[4]});
		const nullyeYN4UB = await contractllkXb3.transferFrom.call(fromnTYOjUW, toCpTGbkC, valueLTaiQPM, {from: accounts[0]});
		const nullCoRHkv = await contractllkXb3.transferFrom.call(fromOe2UjEf, toCPyvWFt, valuelbCC1CJ, {from: accounts[2]});
		const nulliVt28bl = await contractllkXb3.balanceOf.call(ownerfspeKbd, {from: accounts[1]});

		assert.equal(nullFKjepSy, true)
		assert.equal(nullTKI3cd6, 0)
		await expect(contractllkXb3.transferFrom.call(fromnTYOjUW, toCpTGbkC, valueLTaiQPM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractyuNELly = await ERC20.new({from: accounts[4]});
		const addedValuev8BYTgS = BigInt("1675")
		const spenderxJ1ayME = accounts[2]
		const spenderJOVP73a = accounts[4]
		const ownerUkPCEB = "0x0000000000000000000000000000000000000001"
		const spenderdWdgGkt = accounts[1]
		const ownerVCnLdLO = accounts[5]
		const ownerLQfuWHi = accounts[2]
		const addedValueACtVWWW = BigInt("1665")
		const spenderaPbNsWN = accounts[2]
		const nullyVkXGz = await contractyuNELly.totalSupply.call({from: accounts[3]});
		const nullBQSDXxQ = await contractyuNELly.increaseAllowance.call(spenderxJ1ayME, addedValuev8BYTgS, {from: accounts[1]});
		const nullOc7FOE2 = await contractyuNELly.allowance.call(ownerUkPCEB, spenderJOVP73a, {from: accounts[1]});
		const nullvf6Y8s = await contractyuNELly.allowance.call(ownerVCnLdLO, spenderdWdgGkt, {from: accounts[4]});
		const nullmkTQDHt = await contractyuNELly.balanceOf.call(ownerLQfuWHi, {from: accounts[4]});
		const nullRTt7l4R = await contractyuNELly.increaseAllowance.call(spenderaPbNsWN, addedValueACtVWWW, {from: accounts[4]});

		assert.equal(nullBQSDXxQ, true)
		assert.equal(nullOc7FOE2, 0)
		assert.equal(nullRTt7l4R, true)
		assert.equal(nullmkTQDHt, 0)
		assert.equal(nullvf6Y8s, 0)
		assert.equal(nullyVkXGz, 0)
	});
})