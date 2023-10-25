const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractrIEV9F = await ERC20.new({from: accounts[4]});
		const spenderAudFRKn = accounts[4]
		const ownerA9qr792 = accounts[2]
		const valueoJjeSbR = BigInt("1932")
		const tobpGXEKV = accounts[2]
		const nullLKRIy7J = await contractrIEV9F.totalSupply.call({from: accounts[3]});
		const nullSck1Lso = await contractrIEV9F.allowance.call(ownerA9qr792, spenderAudFRKn, {from: accounts[2]});
		const nullrN3EHFv = await contractrIEV9F.transfer.call(tobpGXEKV, valueoJjeSbR, {from: accounts[3]});

		assert.equal(nullLKRIy7J, 0)
		assert.equal(nullSck1Lso, 0)
		await expect(contractrIEV9F.transfer.call(tobpGXEKV, valueoJjeSbR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contracteqaEuCC = await ERC20.new({from: accounts[3]});
		const spendernVgh7Lq = accounts[3]
		const owneryof8RLO = accounts[2]
		const ownerABJ01Qf = accounts[1]
		const subtractedValuePJwfRmi = BigInt("1997")
		const spenderUWJniOK = accounts[4]
		const valuemy89qmf = BigInt("240")
		const tov83G2Sz = accounts[1]
		const frommJVRstz = accounts[2]
		const nullxSkSQy1 = await contracteqaEuCC.allowance.call(owneryof8RLO, spendernVgh7Lq, {from: accounts[3]});
		const nully7f0eSy = await contracteqaEuCC.balanceOf.call(ownerABJ01Qf, {from: accounts[0]});
		const nulluCHye88 = await contracteqaEuCC.decreaseAllowance.call(spenderUWJniOK, subtractedValuePJwfRmi, {from: accounts[5]});
		const nullCaxblR = await contracteqaEuCC.transferFrom.call(frommJVRstz, tov83G2Sz, valuemy89qmf, {from: accounts[2]});

		assert.equal(nullxSkSQy1, 0)
		assert.equal(nully7f0eSy, 0)
		await expect(contracteqaEuCC.decreaseAllowance.call(spenderUWJniOK, subtractedValuePJwfRmi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractePYDUJo = await ERC20.new({from: accounts[2]});
		const value9oi7BJ = BigInt("527")
		const spenderKE193b1 = accounts[0]
		const value7PMzbZ = BigInt("734")
		const spenderr4vJfl = accounts[0]
		const ownerDa5WfG8 = accounts[0]
		const valueXY9pd6R = BigInt("253")
		const tompdCWk1 = accounts[3]
		const valueQK2SekM = BigInt("1339")
		const toy5ZRipg = accounts[0]
		const from6r2iG2 = accounts[0]
		const nullrKM2bHN = await contractePYDUJo.approve.call(spenderKE193b1, value9oi7BJ, {from: accounts[2]});
		const nulljP844Xx = await contractePYDUJo.approve.call(spenderr4vJfl, value7PMzbZ, {from: accounts[4]});
		const nullxDbqHu1 = await contractePYDUJo.balanceOf.call(ownerDa5WfG8, {from: accounts[0]});
		const nulleRLuqTO = await contractePYDUJo.transfer.call(tompdCWk1, valueXY9pd6R, {from: accounts[4]});
		const nullGYHh7iY = await contractePYDUJo.transferFrom.call(from6r2iG2, toy5ZRipg, valueQK2SekM, {from: accounts[2]});

		assert.equal(nulljP844Xx, true)
		assert.equal(nullrKM2bHN, true)
		assert.equal(nullxDbqHu1, 0)
		await expect(contractePYDUJo.transfer.call(tompdCWk1, valueXY9pd6R, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contracthVLFHTo = await ERC20.new({from: accounts[1]});
		const valueKNQtiG8 = BigInt("1327")
		const totGUzBGR = accounts[2]
		const fromTwDWr6D = accounts[1]
		const valueU0YvyD = BigInt("987")
		const spenderGyFqYk = accounts[2]
		const addedValueW5Qokj = BigInt("1008")
		const spenderYGsGsi = accounts[2]
		const nullbRnJHyJ = await contracthVLFHTo.transferFrom.call(fromTwDWr6D, totGUzBGR, valueKNQtiG8, {from: accounts[3]});
		const nullKTJlL2 = await contracthVLFHTo.approve.call(spenderGyFqYk, valueU0YvyD, {from: accounts[0]});
		const nullpaEOq5f = await contracthVLFHTo.increaseAllowance.call(spenderYGsGsi, addedValueW5Qokj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contracthVLFHTo.transferFrom.call(fromTwDWr6D, totGUzBGR, valueKNQtiG8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractK9jNUge = await ERC20.new({from: accounts[4]});
		const addedValueviXFbAw = BigInt("293")
		const spenderrjlf6xc = accounts[1]
		const spenderq0EgNsE = accounts[5]
		const ownerNejWDNW = "0x0000000000000000000000000000000000000001"
		const ownercFc5SW0 = accounts[1]
		const nullq4OzM92 = await contractK9jNUge.increaseAllowance.call(spenderrjlf6xc, addedValueviXFbAw, {from: accounts[0]});
		const nullj6Gm3KU = await contractK9jNUge.allowance.call(ownerNejWDNW, spenderq0EgNsE, {from: accounts[1]});
		const nulljq842BU = await contractK9jNUge.balanceOf.call(ownercFc5SW0, {from: accounts[1]});

		assert.equal(nullj6Gm3KU, 0)
		assert.equal(nulljq842BU, 0)
		assert.equal(nullq4OzM92, true)
	});

	it('test for ERC20', async () => {
		const contractm1D15Ng = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueUp0YeT = BigInt("73")
		const toXSzfgWM = accounts[2]
		const fromfLsYobn = accounts[1]
		const spenderkeAUBVq = accounts[4]
		const ownerUTXdXZT = accounts[1]
		const ownerOgVX8Xp = accounts[2]
		const subtractedValueaBjA6O6 = BigInt("1928")
		const spenderlTQEwWa = "0x0000000000000000000000000000000000000001"
		const addedValueXLJeqTg = BigInt("1295")
		const spenderw8G7KFr = accounts[4]
		const subtractedValuef09hrJg = BigInt("224")
		const spenderYhhYsFz = accounts[2]
		const nullbWcd23q = await contractm1D15Ng.transferFrom.call(fromfLsYobn, toXSzfgWM, valueUp0YeT, {from: "0x0000000000000000000000000000000000000001"});
		const nullSsIv3qG = await contractm1D15Ng.allowance.call(ownerUTXdXZT, spenderkeAUBVq, {from: accounts[0]});
		const nullgEHThi = await contractm1D15Ng.balanceOf.call(ownerOgVX8Xp, {from: accounts[2]});
		const nullbq6gtEE = await contractm1D15Ng.decreaseAllowance.call(spenderlTQEwWa, subtractedValueaBjA6O6, {from: accounts[1]});
		const nullmflUUGY = await contractm1D15Ng.increaseAllowance.call(spenderw8G7KFr, addedValueXLJeqTg, {from: accounts[2]});
		const nullKdqXd15 = await contractm1D15Ng.decreaseAllowance.call(spenderYhhYsFz, subtractedValuef09hrJg, {from: accounts[2]});
	});
})