const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressinACGNh = accounts[2]
		const addressw8eZFD = accounts[0]
		const addresst2p888G = accounts[0]
		const MarsStakingRewardsr0mHJRj = await MarsStakingRewards.new(addressinACGNh, addressw8eZFD, addresst2p888G, {from: "0x0000000000000000000000000000000000000001"});
		const uintRLKVJN7 = BigInt("1750")
		const uintxR4wQfP = BigInt("1319")
		const addressYfzwwJJ = accounts[1]
		const uint256Qlcyw9D = await MarsStakingRewardsr0mHJRj.notifyRewardAmount.call(uintxR4wQfP, uintRLKVJN7, {from: accounts[0]});
		await MarsStakingRewardsr0mHJRj.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256AavLjC = await MarsStakingRewardsr0mHJRj.totalSupply.call({from: accounts[1]});
		const addressnGNuCdJ = await MarsStakingRewardsr0mHJRj.setRewardsDistribution.call(addressYfzwwJJ, {from: accounts[0]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressgqZAV9a = accounts[2]
		const addressXnXiFko = accounts[2]
		const addressftnfR9I = accounts[2]
		const MarsStakingRewardsdarswG6 = await MarsStakingRewards.new(addressgqZAV9a, addressXnXiFko, addressftnfR9I, {from: accounts[4]});
		const addressGj0xqnP = accounts[5]
		const addressvuoxVNa = await MarsStakingRewardsdarswG6.updateReward.call(addressGj0xqnP, {from: accounts[3]});
		await MarsStakingRewardsdarswG6.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsdarswG6.onlyOwner.call({from: accounts[3]});

		await expect(MarsStakingRewardsdarswG6.updateReward.call(addressGj0xqnP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address2xZi0w = accounts[3]
		const addressYnIMXXv = accounts[1]
		const addresstaiLREy = accounts[4]
		const MarsStakingRewardsUHDkNDG = await MarsStakingRewards.new(address2xZi0w, addressYnIMXXv, addresstaiLREy, {from: accounts[1]});
		const byten9nkUX2 = "0x1d2003040a1c0f0c20061b1d10170f0a1f1c0d0a121a0904141b1d1409101c17"
		const byteGuskOfF = "0x131d1817171f0d050d0a1e141c031d03111c0f180b1716171504181b0e0f0613"
		const uintUltjDDv = BigInt("227")
		const uintRETVnVV = BigInt("118")
		const uinteGfOLWU = BigInt("688")
		const uint256QmK50dl = await MarsStakingRewardsUHDkNDG.totalSupply.call({from: accounts[3]});
		const uint256f5O4Tp = await MarsStakingRewardsUHDkNDG.stakeWithPermit.call(uinteGfOLWU, uintRETVnVV, uintUltjDDv, byteGuskOfF, byten9nkUX2, {from: accounts[2]});

		assert.equal(uint256QmK50dl, BigInt("0"))
		await expect(MarsStakingRewardsUHDkNDG.stakeWithPermit.call(uinteGfOLWU, uintRETVnVV, uintUltjDDv, byteGuskOfF, byten9nkUX2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressRrXePMh = accounts[2]
		const addressCkJ8C7j = accounts[5]
		const addressh7q1Wl5 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsi1A2RQ6 = await MarsStakingRewards.new(addressRrXePMh, addressCkJ8C7j, addressh7q1Wl5, {from: accounts[0]});
		const uintxfcN4gE = BigInt("40")
		const addresspu27c9 = "0x0000000000000000000000000000000000000001"
		const bytetNLWtbh = "0x1d10180c1711081703031e09041019101a081e0c1a14111d08021b030401131a"
		const byteolxlfC = "0x1e0d1d2008070e0103121806200212041d0d161c0818020c09131112000c0314"
		const uintvobu80q = BigInt("224")
		const uintyzOVgIs = BigInt("1074")
		const uintPxKU7DB = BigInt("1378")
		const uintUuyqYbN = BigInt("749")
		const addresse0ZydSu = await MarsStakingRewardsi1A2RQ6.inCaseTokensGetStuck.call(addresspu27c9, uintxfcN4gE, {from: accounts[5]});
		const uint256FzeDXmf = await MarsStakingRewardsi1A2RQ6.lastTimeRewardApplicable.call({from: accounts[1]});
		const addresschm8R99 = await MarsStakingRewardsi1A2RQ6.owner.call({from: accounts[1]});
		const uint256BRDRhk = await MarsStakingRewardsi1A2RQ6.stakeWithPermit.call(uintPxKU7DB, uintyzOVgIs, uintvobu80q, byteolxlfC, bytetNLWtbh, {from: accounts[1]});
		const uint256ur6XqGj = await MarsStakingRewardsi1A2RQ6.withdraw.call(uintUuyqYbN, {from: accounts[5]});

		await expect(MarsStakingRewardsi1A2RQ6.inCaseTokensGetStuck.call(addresspu27c9, uintxfcN4gE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstI4XotL = accounts[1]
		const addressds8A3q = accounts[1]
		const addressHO3x6Kd = accounts[3]
		const MarsStakingRewardsDbNxfag = await MarsStakingRewards.new(addresstI4XotL, addressds8A3q, addressHO3x6Kd, {from: accounts[2]});
		const uint256ca7JJNn = await MarsStakingRewardsDbNxfag.getRewardForDuration.call({from: accounts[4]});
		await MarsStakingRewardsDbNxfag.getReward.call({from: accounts[3]});
		await MarsStakingRewardsDbNxfag.nonReentrant.call({from: accounts[1]});

		assert.equal(uint256ca7JJNn, BigInt("0"))
		await expect(MarsStakingRewardsDbNxfag.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressAPIPAOl = accounts[2]
		const addressuuTl42r = accounts[4]
		const addressAuSrc9V = accounts[2]
		const MarsStakingRewardsL2i6Bmv = await MarsStakingRewards.new(addressAPIPAOl, addressuuTl42r, addressAuSrc9V, {from: accounts[4]});
		const addressBPQUb19 = accounts[5]
		const uintq8fBjHp = BigInt("382")
		const uintMxKlpxh = BigInt("1067")
		const uint256Q513g4Y = await MarsStakingRewardsL2i6Bmv.earned.call(addressBPQUb19, {from: accounts[5]});
		const uint256fhVM8fm = await MarsStakingRewardsL2i6Bmv.rewardPerToken.call({from: accounts[2]});
		const boolbojHTCZ = await MarsStakingRewardsL2i6Bmv.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256FdnjGI = await MarsStakingRewardsL2i6Bmv.notifyRewardAmount.call(uintMxKlpxh, uintq8fBjHp, {from: accounts[0]});
		const uint256bSXD9jU = await MarsStakingRewardsL2i6Bmv.rewardPerToken.call({from: accounts[3]});

		assert.equal(boolbojHTCZ, false)
		assert.equal(uint256Q513g4Y, BigInt("0"))
		assert.equal(uint256fhVM8fm, BigInt("0"))
		await expect(MarsStakingRewardsL2i6Bmv.notifyRewardAmount.call(uintMxKlpxh, uintq8fBjHp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressx2S1zCn = accounts[3]
		const addresszOrOEBY = accounts[1]
		const addresse1y2w1N = accounts[4]
		const MarsStakingRewardsUHDkNDG = await MarsStakingRewards.new(addressx2S1zCn, addresszOrOEBY, addresse1y2w1N, {from: accounts[1]});
		const addressLBzp4Kn = accounts[3]
		const addressnzzwF65 = accounts[5]
		const byteUKRXd0g = "0x1d2003040a1c0f0c20061b1d10170f0a1f1c0d0a121a0904141b1d1409101c17"
		const byteqmlpFGF = "0x131d1817171f0d050d0a1e141c031d03111c0f180b1716171504181b0e0f0613"
		const uintuInNk0H = BigInt("227")
		const uinto495i2v = BigInt("118")
		const uintfEttV6a = BigInt("688")
		const uint256QmK50dl = await MarsStakingRewardsUHDkNDG.totalSupply.call({from: accounts[3]});
		const uint256CNfnfk = await MarsStakingRewardsUHDkNDG.getRewardForDuration.call({from: accounts[2]});
		const uint256sufOHZ = await MarsStakingRewardsUHDkNDG.earned.call(addressLBzp4Kn, {from: accounts[2]});
		const uint256DYgbJq = await MarsStakingRewardsUHDkNDG.balanceOf.call(addressnzzwF65, {from: accounts[2]});
		const uint256f5O4Tp = await MarsStakingRewardsUHDkNDG.stakeWithPermit.call(uintfEttV6a, uinto495i2v, uintuInNk0H, byteqmlpFGF, byteUKRXd0g, {from: accounts[2]});

		assert.equal(uint256CNfnfk, BigInt("0"))
		assert.equal(uint256DYgbJq, BigInt("0"))
		assert.equal(uint256QmK50dl, BigInt("0"))
		assert.equal(uint256sufOHZ, BigInt("0"))
		await expect(MarsStakingRewardsUHDkNDG.stakeWithPermit.call(uintfEttV6a, uinto495i2v, uintuInNk0H, byteqmlpFGF, byteUKRXd0g, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJ18kdov = accounts[3]
		const addresstCn9XBR = accounts[1]
		const addressEchJE3Y = accounts[4]
		const MarsStakingRewardsUHDkNDG = await MarsStakingRewards.new(addressJ18kdov, addresstCn9XBR, addressEchJE3Y, {from: accounts[1]});
		const bytetXwIRYf = "0x1d2003040a1c0f0c20061b1d10170f0a1f1c0d0a121a0904141b1d1409101c17"
		const bytev4AQTb1 = "0x131d1817171f0d050d0a1e141c031d03111c0f180b1716171504181b0e0f0613"
		const uintG6mryBd = BigInt("227")
		const uintEtUXsmH = BigInt("118")
		const uintnYD69hB = BigInt("688")
		const uint256nqh7LgK = await MarsStakingRewardsUHDkNDG.lastTimeRewardApplicable.call({from: accounts[0]});
		await MarsStakingRewardsUHDkNDG.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256QmK50dl = await MarsStakingRewardsUHDkNDG.totalSupply.call({from: accounts[3]});
		const uint256f5O4Tp = await MarsStakingRewardsUHDkNDG.stakeWithPermit.call(uintnYD69hB, uintEtUXsmH, uintG6mryBd, bytev4AQTb1, bytetXwIRYf, {from: accounts[2]});

		assert.equal(uint256nqh7LgK, BigInt("0"))
		await expect(MarsStakingRewardsUHDkNDG.onlyRewardsDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressTWjIU3q = accounts[1]
		const addressYKEFxhd = accounts[1]
		const addressaOt5v5z = accounts[3]
		const MarsStakingRewardsDbNxfag = await MarsStakingRewards.new(addressTWjIU3q, addressYKEFxhd, addressaOt5v5z, {from: accounts[2]});
		const addressaar4xDN = accounts[3]
		const uint256ca7JJNn = await MarsStakingRewardsDbNxfag.getRewardForDuration.call({from: accounts[4]});
		const addressjZGoNPA = await MarsStakingRewardsDbNxfag.setRewardsDistribution.call(addressaar4xDN, {from: accounts[2]});
		await MarsStakingRewardsDbNxfag.getReward.call({from: accounts[3]});
		const uint256KSumcdp = await MarsStakingRewardsDbNxfag.lastTimeRewardApplicable.call({from: accounts[1]});
		await MarsStakingRewardsDbNxfag.nonReentrant.call({from: accounts[1]});
		const boolnsUVc03 = await MarsStakingRewardsDbNxfag.isOwner.call({from: accounts[1]});

		assert.equal(uint256ca7JJNn, BigInt("0"))
		await expect(MarsStakingRewardsDbNxfag.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresssBmBxZ1 = accounts[5]
		const addressn1XbWtX = accounts[4]
		const addressHBNsINZ = accounts[1]
		const MarsStakingRewardsoMqw3lA = await MarsStakingRewards.new(addresssBmBxZ1, addressn1XbWtX, addressHBNsINZ, {from: accounts[4]});
		const addressaLujc7t = await MarsStakingRewardsoMqw3lA.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsoMqw3lA.getReward.call({from: accounts[3]});
		const uint256LfFCtBM = await MarsStakingRewardsoMqw3lA.totalSupply.call({from: accounts[3]});

		assert.equal(addressaLujc7t, 0x696428bB43667811822Bf1bb465Cc56D1Aa8E7dB)
		await expect(MarsStakingRewardsoMqw3lA.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressqmLlTpL = accounts[2]
		const addressML2C1xe = accounts[4]
		const addressPdrZ4WJ = accounts[2]
		const MarsStakingRewardsL2i6Bmv = await MarsStakingRewards.new(addressqmLlTpL, addressML2C1xe, addressPdrZ4WJ, {from: accounts[4]});
		const addressm2EN2YS = accounts[4]
		const uintcNJabbN = BigInt("382")
		const uint4YBL55 = BigInt("1067")
		const byteic4Wt7b = "0x090f1b021b08010807191c1d171e171603161e0c0f101119141117092013041b"
		const byteB0Z7rTU = "0x0a171f1c11040f181f1b10030103170a091a161e150408171b0a1a1c04020b10"
		const uintOpOFKGm = BigInt("211")
		const uintobAwe3D = BigInt("190")
		const uintOk0Hpv4 = BigInt("280")
		const uint256Q513g4Y = await MarsStakingRewardsL2i6Bmv.earned.call(addressm2EN2YS, {from: accounts[5]});
		await MarsStakingRewardsL2i6Bmv.exit.call({from: accounts[2]});
		const uint256FdnjGI = await MarsStakingRewardsL2i6Bmv.notifyRewardAmount.call(uint4YBL55, uintcNJabbN, {from: accounts[0]});
		const uint2566w1mbW = await MarsStakingRewardsL2i6Bmv.stakeWithPermit.call(uintOk0Hpv4, uintobAwe3D, uintOpOFKGm, byteB0Z7rTU, byteic4Wt7b, {from: accounts[1]});
		const uint256bSXD9jU = await MarsStakingRewardsL2i6Bmv.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256Q513g4Y, BigInt("0"))
		await expect(MarsStakingRewardsL2i6Bmv.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressugHOsm4 = accounts[2]
		const addressq9cPvJf = accounts[4]
		const addressNMPn2BP = accounts[2]
		const MarsStakingRewardsL2i6Bmv = await MarsStakingRewards.new(addressugHOsm4, addressq9cPvJf, addressNMPn2BP, {from: accounts[4]});
		const uintAeIlzS1 = BigInt("1504")
		const uintllYRBE9 = BigInt("1950")
		const uintYwGqWvr = BigInt("382")
		const uintXttlST = BigInt("1067")
		const uintissEEUH = BigInt("261")
		const uint256fhVM8fm = await MarsStakingRewardsL2i6Bmv.rewardPerToken.call({from: accounts[2]});
		const uint256lDQt9pQ = await MarsStakingRewardsL2i6Bmv.notifyRewardAmount.call(uintllYRBE9, uintAeIlzS1, {from: accounts[2]});
		const uint256FdnjGI = await MarsStakingRewardsL2i6Bmv.notifyRewardAmount.call(uintXttlST, uintYwGqWvr, {from: accounts[0]});
		const uint256uwBJIm1 = await MarsStakingRewardsL2i6Bmv.stake.call(uintissEEUH, {from: accounts[5]});
		const uint256bSXD9jU = await MarsStakingRewardsL2i6Bmv.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256fhVM8fm, BigInt("0"))
		await expect(MarsStakingRewardsL2i6Bmv.notifyRewardAmount.call(uintllYRBE9, uintAeIlzS1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressnqEfEce = accounts[2]
		const addressy0En2KO = accounts[4]
		const addressXLOD4pL = accounts[2]
		const MarsStakingRewardsL2i6Bmv = await MarsStakingRewards.new(addressnqEfEce, addressy0En2KO, addressXLOD4pL, {from: accounts[4]});
		const uintn14vuWj = BigInt("1978")
		const addressLdwRge0 = accounts[3]
		const addressDVrCkR = await MarsStakingRewardsL2i6Bmv.inCaseTokensGetStuck.call(addressLdwRge0, uintn14vuWj, {from: accounts[4]});
		const uint256bSXD9jU = await MarsStakingRewardsL2i6Bmv.rewardPerToken.call({from: accounts[3]});

		await expect(MarsStakingRewardsL2i6Bmv.inCaseTokensGetStuck.call(addressLdwRge0, uintn14vuWj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressjbK5HhY = accounts[2]
		const addressXRavgux = accounts[4]
		const addressp2SrBAz = accounts[2]
		const MarsStakingRewardsL2i6Bmv = await MarsStakingRewards.new(addressjbK5HhY, addressXRavgux, addressp2SrBAz, {from: accounts[4]});
		const uintg3gqKmD = BigInt("1978")
		const addressFNp85jl = accounts[2]
		const addressG1CmApJ = accounts[4]
		const addressDVrCkR = await MarsStakingRewardsL2i6Bmv.inCaseTokensGetStuck.call(addressFNp85jl, uintg3gqKmD, {from: accounts[4]});
		const addresswvDoCmD = await MarsStakingRewardsL2i6Bmv.updateReward.call(addressG1CmApJ, {from: accounts[0]});
		const uint256bSXD9jU = await MarsStakingRewardsL2i6Bmv.rewardPerToken.call({from: accounts[3]});
		const uint256W5twD6E = await MarsStakingRewardsL2i6Bmv.getRewardForDuration.call({from: accounts[1]});
		await MarsStakingRewardsL2i6Bmv.getReward.call({from: accounts[4]});

		await expect(MarsStakingRewardsL2i6Bmv.inCaseTokensGetStuck.call(addressFNp85jl, uintg3gqKmD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressqCI77RF = accounts[2]
		const addressLl0O4lh = accounts[4]
		const addressGR76SOi = accounts[2]
		const MarsStakingRewardsL2i6Bmv = await MarsStakingRewards.new(addressqCI77RF, addressLl0O4lh, addressGR76SOi, {from: accounts[4]});
		const uint256bSXD9jU = await MarsStakingRewardsL2i6Bmv.rewardPerToken.call({from: accounts[3]});
		await MarsStakingRewardsL2i6Bmv.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256bSXD9jU, BigInt("0"))
		await expect(MarsStakingRewardsL2i6Bmv.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresscukriEY = accounts[2]
		const addressK4qJyTS = accounts[4]
		const addressTBrcDvz = accounts[2]
		const MarsStakingRewardsL2i6Bmv = await MarsStakingRewards.new(addresscukriEY, addressK4qJyTS, addressTBrcDvz, {from: accounts[4]});
		const addresswz0utEq = accounts[0]
		const uinter2CjA = BigInt("1504")
		const uintb01vNe = BigInt("1950")
		const uintwXBaNiK = BigInt("241")
		const bytep09Cvu = "0x0019140e06120a0a171a060d101c0214001f170f17081d040c19030e1f040c0e"
		const byteazAUKZo = "0x151d011b1e0c100d1101141e050819181600100f1d13071b1b06081e12171518"
		const uintV1wN7xa = BigInt("2")
		const uintBulR4lA = BigInt("40")
		const uintCHWhsR1 = BigInt("1219")
		const addressKV513t6 = accounts[4]
		const addresskJoI78F = await MarsStakingRewardsL2i6Bmv.transferOwnership.call(addresswz0utEq, {from: accounts[4]});
		const uint256fhVM8fm = await MarsStakingRewardsL2i6Bmv.rewardPerToken.call({from: accounts[2]});
		const uint256lDQt9pQ = await MarsStakingRewardsL2i6Bmv.notifyRewardAmount.call(uintb01vNe, uinter2CjA, {from: accounts[2]});
		const uint256jJsVqlW = await MarsStakingRewardsL2i6Bmv.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256uwBJIm1 = await MarsStakingRewardsL2i6Bmv.stake.call(uintwXBaNiK, {from: accounts[5]});
		const uint256yIqCXzE = await MarsStakingRewardsL2i6Bmv.stakeWithPermit.call(uintCHWhsR1, uintBulR4lA, uintV1wN7xa, byteazAUKZo, bytep09Cvu, {from: accounts[2]});
		const addresstu55pvs = await MarsStakingRewardsL2i6Bmv.setRewardsDistribution.call(addressKV513t6, {from: accounts[4]});
		const uint256bSXD9jU = await MarsStakingRewardsL2i6Bmv.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256fhVM8fm, BigInt("0"))
		await expect(MarsStakingRewardsL2i6Bmv.notifyRewardAmount.call(uintb01vNe, uinter2CjA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})