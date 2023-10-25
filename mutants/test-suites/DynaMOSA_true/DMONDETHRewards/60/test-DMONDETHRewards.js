const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTT5r9KP = await DMONDETHRewards.new({from: accounts[0]});
		const uintIEvSeV = BigInt("1335")
		const uintMcNVGq = BigInt("366")
//		const uint256XuyHwCB = await DMONDETHRewardsTT5r9KP.withdraw.call(uintIEvSeV, {from: accounts[2]});
//		const uint256JL9psqC = await DMONDETHRewardsTT5r9KP.remainingReward.call({from: accounts[2]});
//		await DMONDETHRewardsTT5r9KP.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256oyCHnHS = await DMONDETHRewardsTT5r9KP.setStartTime.call(uintMcNVGq, {from: accounts[1]});
//		await DMONDETHRewardsTT5r9KP.checkStart.call({from: accounts[0]});

		await expect(DMONDETHRewardsTT5r9KP.withdraw.call(uintIEvSeV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardscA0VqP8 = await DMONDETHRewards.new({from: accounts[4]});
		const bool0VPZYt = await DMONDETHRewardscA0VqP8.isOwner.call({from: accounts[2]});
		const boolV8Jp5u0 = await DMONDETHRewardscA0VqP8.isOwner.call({from: accounts[2]});

		assert.equal(bool0VPZYt, false)
		assert.equal(boolV8Jp5u0, false)
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsFCgt77 = await DMONDETHRewards.new({from: accounts[1]});
		const uinthaMV9WE = BigInt("486")
		const uintt0rCICK = BigInt("350")
//		await DMONDETHRewardsFCgt77.onlyOwner.call({from: accounts[4]});
//		const uint256CQgkboO = await DMONDETHRewardsFCgt77.withdraw.call(uinthaMV9WE, {from: accounts[2]});
//		await DMONDETHRewardsFCgt77.onlyRewardDistribution.call({from: accounts[1]});
//		await DMONDETHRewardsFCgt77.onlyRewardDistribution.call({from: accounts[4]});
//		const uint256uYMnjvU = await DMONDETHRewardsFCgt77.stake.call(uintt0rCICK, {from: accounts[4]});

		await expect(DMONDETHRewardsFCgt77.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjgl8KUY = await DMONDETHRewards.new({from: accounts[2]});
		const addressVOCODiu = await DMONDETHRewardsjgl8KUY.owner.call({from: accounts[1]});
		const uint256fHZ4KcE = await DMONDETHRewardsjgl8KUY.rewardPerToken.call({from: accounts[1]});
		const boolEQZHiwx = await DMONDETHRewardsjgl8KUY.isOwner.call({from: accounts[3]});

		assert.equal(addressVOCODiu, 0x792e91500A0179513Da643766CC566d13Baf8a1A)
		assert.equal(boolEQZHiwx, false)
		assert.equal(uint256fHZ4KcE, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTs68T2 = await DMONDETHRewards.new({from: accounts[3]});
		const addressOAPNR7d = accounts[3]
		const addressOQxSxHA = accounts[0]
//		const addressy2H7dL = await DMONDETHRewardsTs68T2.setStakeAddress.call(addressOAPNR7d, {from: accounts[1]});
//		await DMONDETHRewardsTs68T2.checkStart.call({from: accounts[3]});
//		await DMONDETHRewardsTs68T2.getReward.call({from: accounts[4]});
//		const addresshgvIk5J = await DMONDETHRewardsTs68T2.setStakeAddress.call(addressOQxSxHA, {from: accounts[4]});

		await expect(DMONDETHRewardsTs68T2.setStakeAddress.call(addressOAPNR7d, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardswbN8VDZ = await DMONDETHRewards.new({from: accounts[5]});
		const addresshaNWjol = accounts[2]
		const uintRdih5oq = BigInt("718")
		const addressigCnAXR = accounts[3]
		const addressxANW04g = accounts[1]
		const uint256q8mD46u = await DMONDETHRewardswbN8VDZ.balanceOf.call(addresshaNWjol, {from: accounts[4]});
//		const uint256WJtTDaj = await DMONDETHRewardswbN8VDZ.stake.call(uintRdih5oq, {from: accounts[4]});
//		await DMONDETHRewardswbN8VDZ.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256OxzWcI = await DMONDETHRewardswbN8VDZ.balanceOf.call(addressigCnAXR, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256duffjZ8 = await DMONDETHRewardswbN8VDZ.balanceOf.call(addressxANW04g, {from: accounts[2]});
//		const addresskWG569 = await DMONDETHRewardswbN8VDZ.owner.call({from: accounts[3]});

		assert.equal(uint256q8mD46u, BigInt("0"))
		await expect(DMONDETHRewardswbN8VDZ.stake.call(uintRdih5oq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjgl8KUY = await DMONDETHRewards.new({from: accounts[2]});
		const uintxCNpnY = BigInt("1522")
		const addressVOCODiu = await DMONDETHRewardsjgl8KUY.owner.call({from: accounts[1]});
		const uint256C6R2g0x = await DMONDETHRewardsjgl8KUY.setStartTime.call(uintxCNpnY, {from: accounts[2]});
		const uint256fHZ4KcE = await DMONDETHRewardsjgl8KUY.rewardPerToken.call({from: accounts[1]});
		const boolEQZHiwx = await DMONDETHRewardsjgl8KUY.isOwner.call({from: accounts[3]});
		const uint256sFS6RLc = await DMONDETHRewardsjgl8KUY.totalSupply.call({from: accounts[3]});

		assert.equal(addressVOCODiu, 0x792e91500A0179513Da643766CC566d13Baf8a1A)
		assert.equal(boolEQZHiwx, false)
		assert.equal(uint256fHZ4KcE, BigInt("0"))
		assert.equal(uint256sFS6RLc, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardscA0VqP8 = await DMONDETHRewards.new({from: accounts[4]});
		const addressExEWJph = accounts[0]
		const boolV8Jp5u0 = await DMONDETHRewardscA0VqP8.isOwner.call({from: accounts[2]});
		const uint256Gjqeo7W = await DMONDETHRewardscA0VqP8.rewardPerToken.call({from: accounts[5]});
		const uint256KDECinG = await DMONDETHRewardscA0VqP8.totalSupply.call({from: accounts[5]});
		const addressoghLCdq = await DMONDETHRewardscA0VqP8.transferOwnership.call(addressExEWJph, {from: accounts[4]});

		assert.equal(boolV8Jp5u0, false)
		assert.equal(uint256Gjqeo7W, BigInt("0"))
		assert.equal(uint256KDECinG, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsoHnBXkC = await DMONDETHRewards.new({from: accounts[2]});
		const uintibud9qb = BigInt("601")
		const addressjwwsKj8 = accounts[2]
		const uintO7DhsMS = BigInt("1530")
//		const uint256hujn1T = await DMONDETHRewardsoHnBXkC.remainingReward.call({from: accounts[2]});
//		const uint256iitWQwY = await DMONDETHRewardsoHnBXkC.stake.call(uintibud9qb, {from: accounts[0]});
//		await DMONDETHRewardsoHnBXkC.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsoHnBXkC.exit.call({from: accounts[5]});
//		const addressSPSexlR = await DMONDETHRewardsoHnBXkC.transferOwnership.call(addressjwwsKj8, {from: accounts[5]});
//		const uint256IGfmgxJ = await DMONDETHRewardsoHnBXkC.notifyRewardAmount.call(uintO7DhsMS, {from: accounts[3]});

		await expect(DMONDETHRewardsoHnBXkC.remainingReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardscA0VqP8 = await DMONDETHRewards.new({from: accounts[4]});
		const uintn6jxxnO = BigInt("642")
//		const uint25657qKkD = await DMONDETHRewardscA0VqP8.notifyRewardAmount.call(uintn6jxxnO, {from: accounts[5]});
//		const boolV8Jp5u0 = await DMONDETHRewardscA0VqP8.isOwner.call({from: accounts[2]});

		await expect(DMONDETHRewardscA0VqP8.notifyRewardAmount.call(uintn6jxxnO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjgl8KUY = await DMONDETHRewards.new({from: accounts[2]});
		const addressGH2e1W8 = accounts[2]
		const uint256QLYv1Sd = await DMONDETHRewardsjgl8KUY.balanceOf.call(addressGH2e1W8, {from: accounts[3]});
		const addressVOCODiu = await DMONDETHRewardsjgl8KUY.owner.call({from: accounts[1]});
//		await DMONDETHRewardsjgl8KUY.renounceOwnership.call({from: accounts[2]});
//		const uint256fHZ4KcE = await DMONDETHRewardsjgl8KUY.rewardPerToken.call({from: accounts[1]});
//		await DMONDETHRewardsjgl8KUY.onlyRewardDistribution.call({from: accounts[1]});
//		const boolEQZHiwx = await DMONDETHRewardsjgl8KUY.isOwner.call({from: accounts[3]});

		assert.equal(addressVOCODiu, 0x792e91500A0179513Da643766CC566d13Baf8a1A)
		assert.equal(uint256QLYv1Sd, BigInt("0"))
		await expect(DMONDETHRewardsjgl8KUY.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsudcSMIV = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintu5Qght = BigInt("1354")
		const uintivzReDl = BigInt("1900")
		const uintvIiq5xN = BigInt("653")
		const uint256BN1Xd2 = await DMONDETHRewardsudcSMIV.setStartTime.call(uintu5Qght, {from: accounts[5]});
		const uint256T1eGWsO = await DMONDETHRewardsudcSMIV.rewardPerToken.call({from: accounts[3]});
		const uint256wEf3iv0 = await DMONDETHRewardsudcSMIV.withdraw.call(uintivzReDl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mxkscrL = await DMONDETHRewardsudcSMIV.notifyRewardAmount.call(uintvIiq5xN, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsbKW5hcQ = await DMONDETHRewards.new({from: accounts[1]});
		const addressflt4U2E = accounts[4]
		const addressrs3BCcA = accounts[1]
		const addressD5Z80O0 = accounts[3]
		const addressxm5msBi = accounts[4]
//		await DMONDETHRewardsbKW5hcQ.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256JYktJnJ = await DMONDETHRewardsbKW5hcQ.balanceOf.call(addressflt4U2E, {from: accounts[0]});
//		const addressxKFj7u9 = await DMONDETHRewardsbKW5hcQ.transferOwnership.call(addressrs3BCcA, {from: accounts[2]});
//		const addressozkUwQ7 = await DMONDETHRewardsbKW5hcQ.updateReward.call(addressD5Z80O0, {from: accounts[4]});
//		const addressH7EvYqW = await DMONDETHRewardsbKW5hcQ.updateReward.call(addressxm5msBi, {from: accounts[3]});

		await expect(DMONDETHRewardsbKW5hcQ.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsoHnBXkC = await DMONDETHRewards.new({from: accounts[2]});
		const uinttgKlc7 = BigInt("946")
		const uintEaGnqH = BigInt("601")
		const addressp5kSyf5 = accounts[1]
		const uintSLm5tBF = BigInt("1530")
//		await DMONDETHRewardsoHnBXkC.exit.call({from: accounts[0]});
//		const uint256hyhWrxy = await DMONDETHRewardsoHnBXkC.withdraw.call(uinttgKlc7, {from: accounts[2]});
//		const uint256xrAjQq = await DMONDETHRewardsoHnBXkC.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256iitWQwY = await DMONDETHRewardsoHnBXkC.stake.call(uintEaGnqH, {from: accounts[0]});
//		await DMONDETHRewardsoHnBXkC.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsoHnBXkC.exit.call({from: accounts[5]});
//		const addressSPSexlR = await DMONDETHRewardsoHnBXkC.transferOwnership.call(addressp5kSyf5, {from: accounts[5]});
//		await DMONDETHRewardsoHnBXkC.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256IGfmgxJ = await DMONDETHRewardsoHnBXkC.notifyRewardAmount.call(uintSLm5tBF, {from: accounts[3]});

		await expect(DMONDETHRewardsoHnBXkC.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsQmIaoSQ = await DMONDETHRewards.new({from: accounts[2]});
		const uintmjmLU4v = BigInt("248")
		const uint256qq8Tmmf = await DMONDETHRewardsQmIaoSQ.notifyRewardAmount.call(uintmjmLU4v, {from: accounts[2]});
//		await DMONDETHRewardsQmIaoSQ.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256JkLfFD = await DMONDETHRewardsQmIaoSQ.rewardPerToken.call({from: accounts[2]});
//		await DMONDETHRewardsQmIaoSQ.onlyRewardDistribution.call({from: accounts[0]});

		await expect(DMONDETHRewardsQmIaoSQ.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsoHnBXkC = await DMONDETHRewards.new({from: accounts[2]});
		const addressni6UQUQ = accounts[4]
		const uinthLPmraX = BigInt("583")
		const addressdzbmFYC = await DMONDETHRewardsoHnBXkC.setRewardDistribution.call(addressni6UQUQ, {from: accounts[2]});
//		const uint256iitWQwY = await DMONDETHRewardsoHnBXkC.stake.call(uinthLPmraX, {from: accounts[0]});
//		await DMONDETHRewardsoHnBXkC.getReward.call({from: accounts[1]});

		await expect(DMONDETHRewardsoHnBXkC.stake.call(uinthLPmraX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})