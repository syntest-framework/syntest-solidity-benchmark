const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractB3cxRHU = await ERC20.new({from: accounts[3]});
		const valuefXiZjM2 = BigInt("1510")
		const spenderroimy52 = accounts[4]
		const spenderGTciC0N = accounts[2]
		const ownerWszXgtt = accounts[4]
		const addedValueFM4Uig2 = BigInt("124")
		const spendereXViyXN = accounts[3]
		const nullsucwajQ = await contractB3cxRHU.approve.call(spenderroimy52, valuefXiZjM2, {from: accounts[1]});
		const nullDZ8pXPZ = await contractB3cxRHU.allowance.call(ownerWszXgtt, spenderGTciC0N, {from: accounts[2]});
		const nullaXewGIP = await contractB3cxRHU.increaseAllowance.call(spendereXViyXN, addedValueFM4Uig2, {from: accounts[3]});

		assert.equal(nullDZ8pXPZ, 0)
		assert.equal(nullaXewGIP, true)
		assert.equal(nullsucwajQ, true)
	});

	it('test for ERC20', async () => {
		const contractMVvApDf = await ERC20.new({from: accounts[4]});
		const ownerhhPhgXS = accounts[0]
		const ownerUPSy5PZ = accounts[4]
		const nullyQP97nz = await contractMVvApDf.balanceOf.call(ownerhhPhgXS, {from: accounts[3]});
		const nulluJYVGC9 = await contractMVvApDf.balanceOf.call(ownerUPSy5PZ, {from: accounts[5]});

		assert.equal(nulluJYVGC9, 0)
		assert.equal(nullyQP97nz, 0)
	});

	it('test for ERC20', async () => {
		const contractx5IqeBi = await ERC20.new({from: accounts[4]});
		const valueAhmqUvh = BigInt("469")
		const toMZi9Rk0 = accounts[5]
		const fromRBo3z1o = accounts[3]
		const ownereKevp6P = accounts[3]
		const valuer5bcBeG = BigInt("559")
		const spenderb5zUWAq = accounts[3]
		const nullyNNoM2r = await contractx5IqeBi.transferFrom.call(fromRBo3z1o, toMZi9Rk0, valueAhmqUvh, {from: accounts[0]});
		const nullfBqIBMO = await contractx5IqeBi.balanceOf.call(ownereKevp6P, {from: accounts[0]});
		const nullQ7Sxfwn = await contractx5IqeBi.approve.call(spenderb5zUWAq, valuer5bcBeG, {from: accounts[0]});

		await expect(contractx5IqeBi.transferFrom.call(fromRBo3z1o, toMZi9Rk0, valueAhmqUvh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractT8wujZR = await ERC20.new({from: accounts[5]});
		const addedValuegPAEdkv = BigInt("941")
		const spenderGhFwtc4 = accounts[0]
		const ownerkSTGaN3 = accounts[3]
		const valueEGZy1pg = BigInt("1662")
		const spenderKgdCpVr = accounts[3]
		const owneruZ7BHN = "0x0000000000000000000000000000000000000001"
		const nullvF0qkQR = await contractT8wujZR.increaseAllowance.call(spenderGhFwtc4, addedValuegPAEdkv, {from: accounts[3]});
		const nulle8jq0ff = await contractT8wujZR.balanceOf.call(ownerkSTGaN3, {from: accounts[3]});
		const nullkffaBMu = await contractT8wujZR.totalSupply.call({from: accounts[4]});
		const nullBSqnCxt = await contractT8wujZR.approve.call(spenderKgdCpVr, valueEGZy1pg, {from: accounts[1]});
		const nulllNhqkj = await contractT8wujZR.balanceOf.call(owneruZ7BHN, {from: accounts[1]});

		assert.equal(nullBSqnCxt, true)
		assert.equal(nulle8jq0ff, 0)
		assert.equal(nullkffaBMu, 0)
		assert.equal(nulllNhqkj, 0)
		assert.equal(nullvF0qkQR, true)
	});

	it('test for ERC20', async () => {
		const contractTpClS15 = await ERC20.new({from: accounts[4]});
		const ownerBI418Iu = accounts[1]
		const subtractedValuekIMHPd = BigInt("728")
		const spenderPZ8Eb0g = accounts[3]
		const spendergTEsEWs = accounts[0]
		const ownerKxyP9ZJ = accounts[1]
		const nullfs2IsI = await contractTpClS15.balanceOf.call(ownerBI418Iu, {from: accounts[1]});
		const nullW6dDJpn = await contractTpClS15.decreaseAllowance.call(spenderPZ8Eb0g, subtractedValuekIMHPd, {from: accounts[5]});
		const nullOgcobBf = await contractTpClS15.allowance.call(ownerKxyP9ZJ, spendergTEsEWs, {from: accounts[2]});

		assert.equal(nullfs2IsI, 0)
		await expect(contractTpClS15.decreaseAllowance.call(spenderPZ8Eb0g, subtractedValuekIMHPd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractId3lYUU = await ERC20.new({from: accounts[5]});
		const spenderJY8IxK = accounts[4]
		const ownerE4OwUEi = "0x0000000000000000000000000000000000000001"
		const valueVoeGgC = BigInt("801")
		const toicdUCcp = accounts[5]
		const valuejEPYpQd = BigInt("109")
		const spenderGeGxG9U = accounts[3]
		const nullSCURB0h = await contractId3lYUU.allowance.call(ownerE4OwUEi, spenderJY8IxK, {from: accounts[1]});
		const nullYEfNTkV = await contractId3lYUU.transfer.call(toicdUCcp, valueVoeGgC, {from: accounts[3]});
		const nullbkoERzN = await contractId3lYUU.approve.call(spenderGeGxG9U, valuejEPYpQd, {from: accounts[4]});

		assert.equal(nullSCURB0h, 0)
		await expect(contractId3lYUU.transfer.call(toicdUCcp, valueVoeGgC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractYlwpjeN = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const subtractedValuegBgpFQ7 = BigInt("1441")
		const spenderIdcV4md = accounts[4]
		const subtractedValueFPLJ32 = BigInt("1001")
		const spenderLEVaP9A = accounts[0]
		const valuetakJezX = BigInt("806")
		const tos9nStD = accounts[2]
		const nullDKOrUDc = await contractYlwpjeN.decreaseAllowance.call(spenderIdcV4md, subtractedValuegBgpFQ7, {from: accounts[3]});
		const nulld0ZElsP = await contractYlwpjeN.decreaseAllowance.call(spenderLEVaP9A, subtractedValueFPLJ32, {from: accounts[3]});
		const nullFx1QIBc = await contractYlwpjeN.transfer.call(tos9nStD, valuetakJezX, {from: accounts[0]});
	});
})