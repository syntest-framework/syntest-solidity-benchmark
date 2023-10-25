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
//		const addressvuoxVNa = await MarsStakingRewardsdarswG6.updateReward.call(addressGj0xqnP, {from: accounts[3]});
//		await MarsStakingRewardsdarswG6.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardsdarswG6.onlyOwner.call({from: accounts[3]});

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
//		const uint256f5O4Tp = await MarsStakingRewardsUHDkNDG.stakeWithPermit.call(uinteGfOLWU, uintRETVnVV, uintUltjDDv, byteGuskOfF, byten9nkUX2, {from: accounts[2]});

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
//		const addresse0ZydSu = await MarsStakingRewardsi1A2RQ6.inCaseTokensGetStuck.call(addresspu27c9, uintxfcN4gE, {from: accounts[5]});
//		const uint256FzeDXmf = await MarsStakingRewardsi1A2RQ6.lastTimeRewardApplicable.call({from: accounts[1]});
//		const addresschm8R99 = await MarsStakingRewardsi1A2RQ6.owner.call({from: accounts[1]});
//		const uint256BRDRhk = await MarsStakingRewardsi1A2RQ6.stakeWithPermit.call(uintPxKU7DB, uintyzOVgIs, uintvobu80q, byteolxlfC, bytetNLWtbh, {from: accounts[1]});
//		const uint256ur6XqGj = await MarsStakingRewardsi1A2RQ6.withdraw.call(uintUuyqYbN, {from: accounts[5]});

		await expect(MarsStakingRewardsi1A2RQ6.inCaseTokensGetStuck.call(addresspu27c9, uintxfcN4gE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstI4XotL = accounts[1]
		const addressds8A3q = accounts[1]
		const addressHO3x6Kd = accounts[3]
		const MarsStakingRewardsDbNxfag = await MarsStakingRewards.new(addresstI4XotL, addressds8A3q, addressHO3x6Kd, {from: accounts[2]});
		const uint256ca7JJNn = await MarsStakingRewardsDbNxfag.getRewardForDuration.call({from: accounts[4]});
//		await MarsStakingRewardsDbNxfag.getReward.call({from: accounts[3]});
//		await MarsStakingRewardsDbNxfag.nonReentrant.call({from: accounts[1]});

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
//		const uint256FdnjGI = await MarsStakingRewardsL2i6Bmv.notifyRewardAmount.call(uintMxKlpxh, uintq8fBjHp, {from: accounts[0]});
//		const uint256bSXD9jU = await MarsStakingRewardsL2i6Bmv.rewardPerToken.call({from: accounts[3]});

		assert.equal(boolbojHTCZ, false)
		assert.equal(uint256Q513g4Y, BigInt("0"))
		assert.equal(uint256fhVM8fm, BigInt("0"))
		await expect(MarsStakingRewardsL2i6Bmv.notifyRewardAmount.call(uintMxKlpxh, uintq8fBjHp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressNAxFDs9 = accounts[3]
		const addressYO7mKb9 = accounts[1]
		const addressQZI9H6Y = accounts[4]
		const MarsStakingRewardsUHDkNDG = await MarsStakingRewards.new(addressNAxFDs9, addressYO7mKb9, addressQZI9H6Y, {from: accounts[1]});
		const addresspgKdj9 = await MarsStakingRewardsUHDkNDG.owner.call({from: accounts[4]});
		const uint256QmK50dl = await MarsStakingRewardsUHDkNDG.totalSupply.call({from: accounts[3]});

		assert.equal(addresspgKdj9, 0x9b87eCc96715ED44065A296488480eE428ccC540)
		assert.equal(uint256QmK50dl, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressxKsXJT = accounts[2]
		const addressaEKqGgw = accounts[4]
		const addressAJCV2Mh = accounts[2]
		const MarsStakingRewardsL2i6Bmv = await MarsStakingRewards.new(addressxKsXJT, addressaEKqGgw, addressAJCV2Mh, {from: accounts[4]});
		const addressmDjYBGY = accounts[1]
		const addressxzmQJZj = accounts[0]
		const uintkFduKrD = BigInt("382")
		const uintKr8UPWR = BigInt("1067")
		const uint256Q513g4Y = await MarsStakingRewardsL2i6Bmv.earned.call(addressmDjYBGY, {from: accounts[5]});
		const addressTCNXCiA = await MarsStakingRewardsL2i6Bmv.transferOwnership.call(addressxzmQJZj, {from: accounts[4]});
		const uint256fhVM8fm = await MarsStakingRewardsL2i6Bmv.rewardPerToken.call({from: accounts[2]});
		const boolbojHTCZ = await MarsStakingRewardsL2i6Bmv.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256FdnjGI = await MarsStakingRewardsL2i6Bmv.notifyRewardAmount.call(uintKr8UPWR, uintkFduKrD, {from: accounts[0]});
//		const uint256bSXD9jU = await MarsStakingRewardsL2i6Bmv.rewardPerToken.call({from: accounts[3]});

		assert.equal(boolbojHTCZ, false)
		assert.equal(uint256Q513g4Y, BigInt("0"))
		assert.equal(uint256fhVM8fm, BigInt("0"))
		await expect(MarsStakingRewardsL2i6Bmv.notifyRewardAmount.call(uintKr8UPWR, uintkFduKrD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressliCNRya = accounts[2]
		const addressvKmZ2JV = accounts[3]
		const addressvtKnyGH = accounts[3]
		const MarsStakingRewardsQEAMJp = await MarsStakingRewards.new(addressliCNRya, addressvKmZ2JV, addressvtKnyGH, {from: accounts[3]});
		const uint2cI8L0 = BigInt("363")
		const uintQ1yvh4r = BigInt("658")
		const uint256OYBxZk0 = await MarsStakingRewardsQEAMJp.lastTimeRewardApplicable.call({from: accounts[2]});
//		await MarsStakingRewardsQEAMJp.renounceOwnership.call({from: accounts[2]});
//		const uint256Q33G2vH = await MarsStakingRewardsQEAMJp.notifyRewardAmount.call(uintQ1yvh4r, uint2cI8L0, {from: accounts[3]});

		assert.equal(uint256OYBxZk0, BigInt("0"))
		await expect(MarsStakingRewardsQEAMJp.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressOjTu94s = accounts[1]
		const addressElSwUFK = accounts[1]
		const addressapDfISj = accounts[3]
		const MarsStakingRewardsDbNxfag = await MarsStakingRewards.new(addressOjTu94s, addressElSwUFK, addressapDfISj, {from: accounts[2]});
//		await MarsStakingRewardsDbNxfag.exit.call({from: accounts[0]});
//		const uint256DZzry9Y = await MarsStakingRewardsDbNxfag.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ca7JJNn = await MarsStakingRewardsDbNxfag.getRewardForDuration.call({from: accounts[4]});

		await expect(MarsStakingRewardsDbNxfag.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressm4X6cEp = "0x0000000000000000000000000000000000000001"
		const addresszg3q4YO = "0x0000000000000000000000000000000000000001"
		const addressxeR7kd = accounts[5]
		const MarsStakingRewardsLrabHU4 = await MarsStakingRewards.new(addressm4X6cEp, addresszg3q4YO, addressxeR7kd, {from: accounts[3]});
		const addressbsHYUdJ = accounts[3]
		const addressvhGQSO = await MarsStakingRewardsLrabHU4.owner.call({from: accounts[3]});
		const addressOpJN24 = await MarsStakingRewardsLrabHU4.setRewardsDistribution.call(addressbsHYUdJ, {from: accounts[3]});

		assert.equal(addressvhGQSO, 0x0B788635178CBc688d2e543Ca396cDfAa189f465)
	});

	it('test for MarsStakingRewards', async () => {
		const addresshuZGCa = accounts[2]
		const addressjFUmfb9 = accounts[4]
		const addressfUwVtmj = accounts[0]
		const MarsStakingRewardsPHOO03p = await MarsStakingRewards.new(addresshuZGCa, addressjFUmfb9, addressfUwVtmj, {from: accounts[1]});
		const uintApCpEMa = BigInt("1564")
		const uintFdA1e2U = BigInt("117")
//		const uint256I18qgal = await MarsStakingRewardsPHOO03p.notifyRewardAmount.call(uintFdA1e2U, uintApCpEMa, {from: accounts[2]});
//		const boolRwB2vaX = await MarsStakingRewardsPHOO03p.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256iowh5OK = await MarsStakingRewardsPHOO03p.rewardPerToken.call({from: accounts[0]});
//		const uint256d0fO2k = await MarsStakingRewardsPHOO03p.getRewardForDuration.call({from: accounts[3]});

		await expect(MarsStakingRewardsPHOO03p.notifyRewardAmount.call(uintFdA1e2U, uintApCpEMa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressV8M0pIC = accounts[1]
		const addresscMgVHut = accounts[1]
		const addressgD4Ffxw = accounts[3]
		const MarsStakingRewardsDbNxfag = await MarsStakingRewards.new(addressV8M0pIC, addresscMgVHut, addressgD4Ffxw, {from: accounts[2]});
		const addressz0lQcqE = accounts[3]
		const uint256v82xBrz = await MarsStakingRewardsDbNxfag.balanceOf.call(addressz0lQcqE, {from: accounts[4]});
		const uint256ca7JJNn = await MarsStakingRewardsDbNxfag.getRewardForDuration.call({from: accounts[4]});

		assert.equal(uint256ca7JJNn, BigInt("0"))
		assert.equal(uint256v82xBrz, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressNKJr1sd = accounts[1]
		const addressyZL7pEY = accounts[1]
		const addressIMbet9X = accounts[3]
		const MarsStakingRewardsDbNxfag = await MarsStakingRewards.new(addressNKJr1sd, addressyZL7pEY, addressIMbet9X, {from: accounts[2]});
		const uintwqFFVS = BigInt("1244")
		const addresscSB8HOl = accounts[2]
		const uint256ca7JJNn = await MarsStakingRewardsDbNxfag.getRewardForDuration.call({from: accounts[4]});
//		const addressHBFPucj = await MarsStakingRewardsDbNxfag.inCaseTokensGetStuck.call(addresscSB8HOl, uintwqFFVS, {from: accounts[2]});

		assert.equal(uint256ca7JJNn, BigInt("0"))
		await expect(MarsStakingRewardsDbNxfag.inCaseTokensGetStuck.call(addresscSB8HOl, uintwqFFVS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressEjy6UOJ = accounts[3]
		const addressIZiUiZh = accounts[1]
		const addressCCjLy04 = accounts[4]
		const MarsStakingRewardsUHDkNDG = await MarsStakingRewards.new(addressEjy6UOJ, addressIZiUiZh, addressCCjLy04, {from: accounts[1]});
//		await MarsStakingRewardsUHDkNDG.renounceOwnership.call({from: accounts[1]});
//		const uint256bhkUiw1 = await MarsStakingRewardsUHDkNDG.rewardPerToken.call({from: accounts[4]});

		await expect(MarsStakingRewardsUHDkNDG.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})