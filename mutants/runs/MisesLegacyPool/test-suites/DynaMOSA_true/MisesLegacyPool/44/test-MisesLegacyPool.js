const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressI3174p9 = accounts[3]
		const addressUMnBIP = accounts[0]
		const uintFSJjSl1 = BigInt("1228")
		const uintK9ZqckP = BigInt("1260")
		const MisesLegacyPoolb5AzQK = await MisesLegacyPool.new(addressI3174p9, addressUMnBIP, uintFSJjSl1, uintK9ZqckP, {from: accounts[1]});
		const uinteojlDcs = BigInt("529")
		const uintgjgNKP3 = BigInt("573")
		const uinttpVeLh2 = BigInt("595")
		await MisesLegacyPoolb5AzQK.checkStart.call({from: accounts[5]});
		const uint256OwwaR67 = await MisesLegacyPoolb5AzQK.withdraw.call(uinteojlDcs, {from: accounts[4]});
		const uint256XVTdU7 = await MisesLegacyPoolb5AzQK.stake.call(uintgjgNKP3, {from: accounts[2]});
		const uint256Ico4InC = await MisesLegacyPoolb5AzQK.notifyRewardAmount.call(uinttpVeLh2, {from: accounts[2]});
		const uint256LWBpzLE = await MisesLegacyPoolb5AzQK.rewardPerToken.call({from: accounts[0]});

		await expect(MisesLegacyPoolb5AzQK.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressLi9lMm7 = accounts[3]
		const addressuT1oUG = accounts[1]
		const uintOOdAW3B = BigInt("1459")
		const uintX8zpkR = BigInt("1990")
		const MisesLegacyPoolbLvYFEb = await MisesLegacyPool.new(addressLi9lMm7, addressuT1oUG, uintOOdAW3B, uintX8zpkR, {from: accounts[2]});
		const addresss1PCAur = accounts[2]
		const uint256YOTmfwO = await MisesLegacyPoolbLvYFEb.rewardPerToken.call({from: accounts[2]});
		const uint256T3UTGRE = await MisesLegacyPoolbLvYFEb.earned.call(addresss1PCAur, {from: accounts[3]});
		await MisesLegacyPoolbLvYFEb.getReward.call({from: accounts[4]});

		assert.equal(uint256T3UTGRE, BigInt("0"))
		assert.equal(uint256YOTmfwO, BigInt("0"))
		await expect(MisesLegacyPoolbLvYFEb.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressVMaSbMI = accounts[3]
		const addressyqKv2mM = accounts[0]
		const uint1rQuVi = BigInt("68")
		const uintxpZ8hzS = BigInt("166")
		const MisesLegacyPoolSg1HqJ = await MisesLegacyPool.new(addressVMaSbMI, addressyqKv2mM, uint1rQuVi, uintxpZ8hzS, {from: accounts[1]});
		const uintshR9zhz = BigInt("200")
		const uintsAp1q4e = BigInt("1188")
		const uint256k6sQbsI = await MisesLegacyPoolSg1HqJ.stake.call(uintshR9zhz, {from: accounts[1]});
		await MisesLegacyPoolSg1HqJ.getReward.call({from: accounts[1]});
		await MisesLegacyPoolSg1HqJ.exit.call({from: accounts[0]});
		const uint256M0zOTLm = await MisesLegacyPoolSg1HqJ.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256OvfX9YO = await MisesLegacyPoolSg1HqJ.withdraw.call(uintsAp1q4e, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MisesLegacyPoolSg1HqJ.stake.call(uintshR9zhz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const address4I6EUF = accounts[3]
		const addressDbjvD0b = accounts[3]
		const uintd10His6 = BigInt("388")
		const uintiMJBvXW = BigInt("283")
		const MisesLegacyPoolICmOeN1 = await MisesLegacyPool.new(address4I6EUF, addressDbjvD0b, uintd10His6, uintiMJBvXW, {from: accounts[1]});
		const uintvz4zniD = BigInt("738")
		const addressysbtdJ = accounts[2]
		const uint256bx243os = await MisesLegacyPoolICmOeN1.withdraw.call(uintvz4zniD, {from: accounts[0]});
		const uint256ASfjulQ = await MisesLegacyPoolICmOeN1.earned.call(addressysbtdJ, {from: accounts[4]});

		await expect(MisesLegacyPoolICmOeN1.withdraw.call(uintvz4zniD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressbgcTON6 = accounts[5]
		const addresshlJJnVK = accounts[0]
		const uintyjot5ie = BigInt("192")
		const uinte6N2ZNv = BigInt("550")
		const MisesLegacyPoolRlNwSKy = await MisesLegacyPool.new(addressbgcTON6, addresshlJJnVK, uintyjot5ie, uinte6N2ZNv, {from: accounts[3]});
		await MisesLegacyPoolRlNwSKy.exit.call({from: accounts[0]});
		await MisesLegacyPoolRlNwSKy.checkStart.call({from: accounts[3]});
		await MisesLegacyPoolRlNwSKy.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPoolRlNwSKy.getReward.call({from: accounts[2]});
		await MisesLegacyPoolRlNwSKy.getReward.call({from: accounts[5]});
		const uint256B5zwb1j = await MisesLegacyPoolRlNwSKy.rewardPerToken.call({from: accounts[0]});

		await expect(MisesLegacyPoolRlNwSKy.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressK7lRSG9 = accounts[0]
		const addressEeuYB92 = accounts[1]
		const uintTG28Bv = BigInt("1248")
		const uintanHLA3w = BigInt("963")
		const MisesLegacyPooldX6YbqA = await MisesLegacyPool.new(addressK7lRSG9, addressEeuYB92, uintTG28Bv, uintanHLA3w, {from: accounts[4]});
		const uinti3jc5gH = BigInt("252")
		const addressAQDGsLc = accounts[1]
		const addressVIPKyb = accounts[1]
		const addressvDsnrDh = accounts[5]
		const uint256E3ydwmT = await MisesLegacyPooldX6YbqA.notifyRewardAmount.call(uinti3jc5gH, {from: accounts[5]});
		await MisesLegacyPooldX6YbqA.checkStart.call({from: accounts[1]});
		const address9im8Rq = await MisesLegacyPooldX6YbqA.updateReward.call(addressAQDGsLc, {from: accounts[2]});
		const addresscDQosiY = await MisesLegacyPooldX6YbqA.updateReward.call(addressVIPKyb, {from: accounts[0]});
		const addressxjNtQq = await MisesLegacyPooldX6YbqA.updateReward.call(addressvDsnrDh, {from: accounts[3]});
		await MisesLegacyPooldX6YbqA.checkStart.call({from: accounts[4]});

		await expect(MisesLegacyPooldX6YbqA.notifyRewardAmount.call(uinti3jc5gH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressFHjBei2 = accounts[0]
		const addressXRQQdJ5 = accounts[0]
		const uintXJAMWnx = BigInt("166")
		const uintMkYWjrd = BigInt("1347")
		const MisesLegacyPooljFI01ez = await MisesLegacyPool.new(addressFHjBei2, addressXRQQdJ5, uintXJAMWnx, uintMkYWjrd, {from: "0x0000000000000000000000000000000000000001"});
		const addressH3Ijvmu = accounts[1]
		const addressOwqF3a1 = accounts[4]
		await MisesLegacyPooljFI01ez.checkStart.call({from: accounts[3]});
		await MisesLegacyPooljFI01ez.exit.call({from: accounts[5]});
		const uint256tlIVljy = await MisesLegacyPooljFI01ez.earned.call(addressH3Ijvmu, {from: accounts[2]});
		const uint256Qvo6aAP = await MisesLegacyPooljFI01ez.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressxJtjzTp = await MisesLegacyPooljFI01ez.updateReward.call(addressOwqF3a1, {from: accounts[2]});
	});
})