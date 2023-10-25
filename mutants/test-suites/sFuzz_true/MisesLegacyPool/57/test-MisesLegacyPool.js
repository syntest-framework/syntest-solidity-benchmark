const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressp0s3G1y = accounts[3]
		const addressZ5u9EEQ = accounts[5]
		const uintiTc44Dz = BigInt("789")
		const uintv0tarYh = BigInt("1823")
		const MisesLegacyPool8oeMoE = await MisesLegacyPool.new(addressp0s3G1y, addressZ5u9EEQ, uintiTc44Dz, uintv0tarYh, {from: "0x0000000000000000000000000000000000000001"});
		const addressRK11Kej = accounts[0]
		const addressW79WzxF = accounts[3]
		await MisesLegacyPool8oeMoE.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zjQG40X = await MisesLegacyPool8oeMoE.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressGVOuB7P = await MisesLegacyPool8oeMoE.updateReward.call(addressRK11Kej, {from: accounts[0]});
		const uint256CXbEbFT = await MisesLegacyPool8oeMoE.earned.call(addressW79WzxF, {from: accounts[5]});
		await MisesLegacyPool8oeMoE.exit.call({from: accounts[2]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressfrZVhBi = accounts[2]
		const addresslc5sMQv = "0x0000000000000000000000000000000000000001"
		const uintdLtA8mB = BigInt("525")
		const uintst48jTI = BigInt("29")
		const MisesLegacyPoolgRGdWXo = await MisesLegacyPool.new(addressfrZVhBi, addresslc5sMQv, uintdLtA8mB, uintst48jTI, {from: accounts[2]});
		const addressoqxRcLI = accounts[3]
		const addressZB0gca = accounts[4]
//		const addressDDG2ai = await MisesLegacyPoolgRGdWXo.updateReward.call(addressoqxRcLI, {from: accounts[4]});
//		const uint256NgbeN5m = await MisesLegacyPoolgRGdWXo.rewardPerToken.call({from: accounts[1]});
//		const addressvijGhf = await MisesLegacyPoolgRGdWXo.updateReward.call(addressZB0gca, {from: accounts[2]});

		await expect(MisesLegacyPoolgRGdWXo.updateReward.call(addressoqxRcLI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressjgVHPvA = accounts[3]
		const addressSMp1JA6 = accounts[4]
		const uintN8tiIxe = BigInt("678")
		const uintMvwlmbo = BigInt("916")
		const MisesLegacyPoolfz7HtjQ = await MisesLegacyPool.new(addressjgVHPvA, addressSMp1JA6, uintN8tiIxe, uintMvwlmbo, {from: accounts[0]});
		const addressI3V4FtM = accounts[4]
		const addressgqajwrk = accounts[1]
		const uintZ743j3C = BigInt("1760")
		const uint256GViROfW = await MisesLegacyPoolfz7HtjQ.earned.call(addressI3V4FtM, {from: "0x0000000000000000000000000000000000000001"});
//		await MisesLegacyPoolfz7HtjQ.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressNsTuBII = await MisesLegacyPoolfz7HtjQ.updateReward.call(addressgqajwrk, {from: accounts[3]});
//		const uint256xPr5gxC = await MisesLegacyPoolfz7HtjQ.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256k6Kp284 = await MisesLegacyPoolfz7HtjQ.withdraw.call(uintZ743j3C, {from: accounts[3]});

		assert.equal(uint256GViROfW, BigInt("0"))
		await expect(MisesLegacyPoolfz7HtjQ.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressTiwVr7l = accounts[2]
		const addressukE0AT1 = accounts[0]
		const uintvrDi8GZ = BigInt("715")
		const uinth7SSrUx = BigInt("184")
		const MisesLegacyPoolRpCFveo = await MisesLegacyPool.new(addressTiwVr7l, addressukE0AT1, uintvrDi8GZ, uinth7SSrUx, {from: accounts[1]});
		const addressXoCfon4 = accounts[2]
		const uintXzd9Oax = BigInt("571")
		const uintNHylAY7 = BigInt("184")
		const uint256tnQoMJx = await MisesLegacyPoolRpCFveo.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256Up4Q7r4 = await MisesLegacyPoolRpCFveo.earned.call(addressXoCfon4, {from: accounts[0]});
//		const uint256vO5fEEF = await MisesLegacyPoolRpCFveo.withdraw.call(uintXzd9Oax, {from: accounts[5]});
//		const uint256S7IADzC = await MisesLegacyPoolRpCFveo.withdraw.call(uintNHylAY7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Up4Q7r4, BigInt("0"))
		assert.equal(uint256tnQoMJx, BigInt("0"))
		await expect(MisesLegacyPoolRpCFveo.withdraw.call(uintXzd9Oax, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressHsc2Jln = accounts[0]
		const addressau4x8Rd = accounts[0]
		const uinthP6vW1L = BigInt("199")
		const uint2zqgfw = BigInt("1032")
		const MisesLegacyPooldBppjiY = await MisesLegacyPool.new(addressHsc2Jln, addressau4x8Rd, uinthP6vW1L, uint2zqgfw, {from: accounts[2]});
		const uinth2reuu = BigInt("1130")
		const uint256ik1RYxB = await MisesLegacyPooldBppjiY.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256v6RSN4U = await MisesLegacyPooldBppjiY.rewardPerToken.call({from: accounts[1]});
//		const uint256MQZwrM4 = await MisesLegacyPooldBppjiY.stake.call(uinth2reuu, {from: accounts[4]});

		assert.equal(uint256ik1RYxB, BigInt("0"))
		assert.equal(uint256v6RSN4U, BigInt("0"))
		await expect(MisesLegacyPooldBppjiY.stake.call(uinth2reuu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressrwXVnM = accounts[1]
		const addresssfHwHbX = accounts[1]
		const uintPKw4bb = BigInt("583")
		const uintsj6kjxg = BigInt("48")
		const MisesLegacyPoolCFqEFrJ = await MisesLegacyPool.new(addressrwXVnM, addresssfHwHbX, uintPKw4bb, uintsj6kjxg, {from: accounts[1]});
		const uint256NvV6PSx = await MisesLegacyPoolCFqEFrJ.lastTimeRewardApplicable.call({from: accounts[2]});
//		await MisesLegacyPoolCFqEFrJ.getReward.call({from: accounts[2]});
		await MisesLegacyPoolCFqEFrJ.getReward.call({from: accounts[2]});
//		await MisesLegacyPoolCFqEFrJ.exit.call({from: accounts[2]});

		assert.equal(uint256NvV6PSx, BigInt("0"))
		await expect(MisesLegacyPoolCFqEFrJ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressP0c92r1 = accounts[3]
		const addressDjQPLD = accounts[1]
		const uintDIQsTrQ = BigInt("1861")
		const uintxshUSAx = BigInt("2")
		const MisesLegacyPoolCkuQDLj = await MisesLegacyPool.new(addressP0c92r1, addressDjQPLD, uintDIQsTrQ, uintxshUSAx, {from: accounts[3]});
		const uintJKcZKOu = BigInt("1986")
		const uintsIFqHfb = BigInt("953")
		const uint256WNibCG9 = await MisesLegacyPoolCkuQDLj.rewardPerToken.call({from: accounts[2]});
//		const uint256yMGEnCH = await MisesLegacyPoolCkuQDLj.notifyRewardAmount.call(uintJKcZKOu, {from: accounts[3]});
//		await MisesLegacyPoolCkuQDLj.getReward.call({from: accounts[1]});
//		const uint2562dxSpr = await MisesLegacyPoolCkuQDLj.stake.call(uintsIFqHfb, {from: accounts[3]});

		assert.equal(uint256WNibCG9, BigInt("0"))
		await expect(MisesLegacyPoolCkuQDLj.notifyRewardAmount.call(uintJKcZKOu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})