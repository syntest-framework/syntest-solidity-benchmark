const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractU6LgRQS = await ERC20.new({from: accounts[1]});
		const ownerXEV0295 = accounts[1]
		const addedValueLKrwO0t = BigInt("749")
		const spenderWfeeNd9 = accounts[1]
		const addedValueHhGK82p = BigInt("568")
		const spendergjrkn0 = accounts[2]
		const nullKVopmcz = await contractU6LgRQS.balanceOf.call(ownerXEV0295, {from: accounts[3]});
		const nullRpk58p = await contractU6LgRQS.increaseAllowance.call(spenderWfeeNd9, addedValueLKrwO0t, {from: accounts[4]});
		const nullmsGaeA = await contractU6LgRQS.totalSupply.call({from: accounts[2]});
		const nullLBDSou9 = await contractU6LgRQS.increaseAllowance.call(spendergjrkn0, addedValueHhGK82p, {from: accounts[0]});

		assert.equal(nullKVopmcz, 0)
		assert.equal(nullLBDSou9, true)
		assert.equal(nullRpk58p, true)
		assert.equal(nullmsGaeA, 0)
	});

	it('test for ERC20', async () => {
		const contractbH5Gs7s = await ERC20.new({from: accounts[4]});
		const ownervvmQ3H = accounts[0]
		const spenderC0fmcvN = accounts[1]
		const ownerDlDwPaZ = accounts[3]
		const spenderGhDm5uI = accounts[2]
		const ownerKLTYDRg = accounts[3]
		const nullDTj6CYP = await contractbH5Gs7s.balanceOf.call(ownervvmQ3H, {from: accounts[2]});
		const nullk9Wp8qI = await contractbH5Gs7s.allowance.call(ownerDlDwPaZ, spenderC0fmcvN, {from: accounts[3]});
		const nullOxveXoG = await contractbH5Gs7s.totalSupply.call({from: accounts[4]});
		const nulllKWvUhN = await contractbH5Gs7s.allowance.call(ownerKLTYDRg, spenderGhDm5uI, {from: accounts[1]});

		assert.equal(nullDTj6CYP, 0)
		assert.equal(nullOxveXoG, 0)
		assert.equal(nullk9Wp8qI, 0)
		assert.equal(nulllKWvUhN, 0)
	});

	it('test for ERC20', async () => {
		const contractFrSzRoa = await ERC20.new({from: accounts[3]});
		const valueb6TmwUP = BigInt("1748")
		const toVOhNmEu = accounts[1]
		const fromAEmOkaL = accounts[3]
		const spenderDg1Z9n = accounts[2]
		const ownerAdM1qyI = accounts[4]
		const valuexPlJAwR = BigInt("1983")
		const toMOg0kn6 = accounts[1]
		const valueh1uzZXa = BigInt("1565")
		const toyqXgSGt = accounts[1]
		const fromdbnDSJ = accounts[3]
		const valueiI5KOyC = BigInt("1576")
		const toTQ0gF5Z = accounts[3]
		const fromBGNvNuh = accounts[0]
		const nullGpmDBWx = await contractFrSzRoa.transferFrom.call(fromAEmOkaL, toVOhNmEu, valueb6TmwUP, {from: accounts[2]});
		const nullnKTQPp = await contractFrSzRoa.allowance.call(ownerAdM1qyI, spenderDg1Z9n, {from: accounts[1]});
		const nullIlnDI0 = await contractFrSzRoa.totalSupply.call({from: accounts[0]});
		const nullzVvRtLQ = await contractFrSzRoa.transfer.call(toMOg0kn6, valuexPlJAwR, {from: "0x0000000000000000000000000000000000000001"});
		const nullCyHOg1W = await contractFrSzRoa.transferFrom.call(fromdbnDSJ, toyqXgSGt, valueh1uzZXa, {from: accounts[5]});
		const nullT7nbjWO = await contractFrSzRoa.transferFrom.call(fromBGNvNuh, toTQ0gF5Z, valueiI5KOyC, {from: accounts[2]});

		await expect(contractFrSzRoa.transferFrom.call(fromAEmOkaL, toVOhNmEu, valueb6TmwUP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractCECKHuz = await ERC20.new({from: accounts[4]});
		const valueLFrHrry = BigInt("160")
		const toWUc1TWM = accounts[0]
		const valuePS0IQc1 = BigInt("128")
		const spendersHHx1um = accounts[0]
		const valueS9ZISN0 = BigInt("2020")
		const spenderrBSIXfK = accounts[2]
		const nullJ7GSSCg = await contractCECKHuz.transfer.call(toWUc1TWM, valueLFrHrry, {from: "0x0000000000000000000000000000000000000001"});
		const nulli4Fd2W6 = await contractCECKHuz.approve.call(spendersHHx1um, valuePS0IQc1, {from: accounts[1]});
		const nullsRCAhJq = await contractCECKHuz.approve.call(spenderrBSIXfK, valueS9ZISN0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractCECKHuz.transfer.call(toWUc1TWM, valueLFrHrry, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractiZb0SjD = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addedValuezL0STNr = BigInt("1695")
		const spenderuQ9Flix = accounts[4]
		const valuexYFCYwv = BigInt("293")
		const toTUAngNG = accounts[1]
		const value6xlgKe = BigInt("1794")
		const toiV7VHjn = accounts[2]
		const fromDbOHyRV = "0x0000000000000000000000000000000000000001"
		const valuekVB00XG = BigInt("1216")
		const toOAnc2CG = accounts[4]
		const valueF15QdrJ = BigInt("1943")
		const toLE71LsV = "0x0000000000000000000000000000000000000001"
		const fromx0UYCSH = accounts[0]
		const nullpUuSWcG = await contractiZb0SjD.increaseAllowance.call(spenderuQ9Flix, addedValuezL0STNr, {from: accounts[4]});
		const nullvPQ02ZQ = await contractiZb0SjD.transfer.call(toTUAngNG, valuexYFCYwv, {from: accounts[0]});
		const nullqGlFKKz = await contractiZb0SjD.transferFrom.call(fromDbOHyRV, toiV7VHjn, value6xlgKe, {from: accounts[2]});
		const nulldnd5zPT = await contractiZb0SjD.transfer.call(toOAnc2CG, valuekVB00XG, {from: accounts[3]});
		const nullayBQaVD = await contractiZb0SjD.transferFrom.call(fromx0UYCSH, toLE71LsV, valueF15QdrJ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC20', async () => {
		const contractzFZ8YzY = await ERC20.new({from: accounts[1]});
		const spenderiq7cbOn = accounts[4]
		const ownerRjO8h6x = accounts[3]
		const addedValuey92QJwE = BigInt("608")
		const spenderPxBAjnq = accounts[2]
		const subtractedValueNto6KIj = BigInt("1971")
		const spenderVqhyVM4 = accounts[5]
		const addedValueOuIw2TF = BigInt("1935")
		const spenderEdTMaKf = accounts[3]
		const nullauNV7M8 = await contractzFZ8YzY.totalSupply.call({from: accounts[3]});
		const nullnikEns = await contractzFZ8YzY.allowance.call(ownerRjO8h6x, spenderiq7cbOn, {from: accounts[2]});
		const nullZioztqh = await contractzFZ8YzY.increaseAllowance.call(spenderPxBAjnq, addedValuey92QJwE, {from: accounts[5]});
		const nullhwt1Giy = await contractzFZ8YzY.decreaseAllowance.call(spenderVqhyVM4, subtractedValueNto6KIj, {from: accounts[4]});
		const nulloGLp7nS = await contractzFZ8YzY.increaseAllowance.call(spenderEdTMaKf, addedValueOuIw2TF, {from: accounts[4]});

		assert.equal(nullZioztqh, true)
		assert.equal(nullauNV7M8, 0)
		assert.equal(nullnikEns, 0)
		await expect(contractzFZ8YzY.decreaseAllowance.call(spenderVqhyVM4, subtractedValueNto6KIj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractYBXQ8vi = await ERC20.new({from: accounts[4]});
		const valuedKBMsbM = BigInt("1612")
		const spenderI04TmYs = "0x0000000000000000000000000000000000000001"
		const ownerjrIbnYX = accounts[1]
		const spenderNnZyFCK = accounts[1]
		const ownerKNmXftW = accounts[3]
		const addedValuetFDMbIX = BigInt("691")
		const spenderp4nI74p = accounts[2]
		const spenderxYEjRHg = accounts[2]
		const ownerQrhzb2L = accounts[3]
		const ownercqEtM71 = accounts[0]
		const nullL3x3o1K = await contractYBXQ8vi.approve.call(spenderI04TmYs, valuedKBMsbM, {from: accounts[2]});
		const nullXRgb0HU = await contractYBXQ8vi.balanceOf.call(ownerjrIbnYX, {from: accounts[2]});
		const nullQCnwiM = await contractYBXQ8vi.allowance.call(ownerKNmXftW, spenderNnZyFCK, {from: accounts[3]});
		const nullKYSD8Qj = await contractYBXQ8vi.increaseAllowance.call(spenderp4nI74p, addedValuetFDMbIX, {from: accounts[2]});
		const nullDT58ci = await contractYBXQ8vi.totalSupply.call({from: accounts[4]});
		const nullMHhdhb = await contractYBXQ8vi.allowance.call(ownerQrhzb2L, spenderxYEjRHg, {from: accounts[1]});
		const nullMc8QkGc = await contractYBXQ8vi.balanceOf.call(ownercqEtM71, {from: accounts[3]});

		assert.equal(nullDT58ci, 0)
		assert.equal(nullKYSD8Qj, true)
		assert.equal(nullL3x3o1K, true)
		assert.equal(nullMHhdhb, 0)
		assert.equal(nullMc8QkGc, 0)
		assert.equal(nullQCnwiM, 0)
		assert.equal(nullXRgb0HU, 0)
	});
})