const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardspXCjLVr = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXtU29v9 = accounts[4]
		const uintbCDzgC6 = BigInt("308")
		const uintCj3hfMV = BigInt("1520")
		const addressN3VZxiB = accounts[1]
		const addressAMbeLV1 = await DMONDETHRewardspXCjLVr.transferOwnership.call(addressXtU29v9, {from: accounts[0]});
		const uint256w34GAd = await DMONDETHRewardspXCjLVr.withdraw.call(uintbCDzgC6, {from: accounts[3]});
		const uint256umguatQ = await DMONDETHRewardspXCjLVr.withdraw.call(uintCj3hfMV, {from: accounts[1]});
		const uint256w334VoX = await DMONDETHRewardspXCjLVr.earned.call(addressN3VZxiB, {from: accounts[1]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsU8NpCPZ = await DMONDETHRewards.new({from: accounts[4]});
		const uintyixEEKt = BigInt("123")
		const address4tmaLS = accounts[1]
//		await DMONDETHRewardsU8NpCPZ.exit.call({from: accounts[1]});
//		const uint256BbKiWaI = await DMONDETHRewardsU8NpCPZ.rewardPerToken.call({from: accounts[1]});
//		const uint256vKURe7q = await DMONDETHRewardsU8NpCPZ.stake.call(uintyixEEKt, {from: accounts[0]});
//		const uint256idFJD8H = await DMONDETHRewardsU8NpCPZ.balanceOf.call(address4tmaLS, {from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsU8NpCPZ.checkStart.call({from: accounts[2]});

		await expect(DMONDETHRewardsU8NpCPZ.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardscg4X1ci = await DMONDETHRewards.new({from: accounts[0]});
		const uintuJOYGTa = BigInt("906")
		const addressmnQsrje = accounts[0]
//		await DMONDETHRewardscg4X1ci.renounceOwnership.call({from: accounts[1]});
//		const uint256E2PXgoH = await DMONDETHRewardscg4X1ci.setStartTime.call(uintuJOYGTa, {from: accounts[5]});
//		const boolPR3mPvy = await DMONDETHRewardscg4X1ci.isOwner.call({from: accounts[5]});
//		const addressvqxFor9 = await DMONDETHRewardscg4X1ci.setStakeAddress.call(addressmnQsrje, {from: accounts[0]});
//		await DMONDETHRewardscg4X1ci.onlyOwner.call({from: accounts[4]});

		await expect(DMONDETHRewardscg4X1ci.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsh4tYZ3u = await DMONDETHRewards.new({from: accounts[1]});
		const uinthmC6VZw = BigInt("177")
		const addressDKcn8DP = accounts[4]
//		const uint256xO711Eq = await DMONDETHRewardsh4tYZ3u.withdraw.call(uinthmC6VZw, {from: accounts[1]});
//		const addressENIF9nS = await DMONDETHRewardsh4tYZ3u.transferOwnership.call(addressDKcn8DP, {from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsh4tYZ3u.checkStart.call({from: accounts[1]});

		await expect(DMONDETHRewardsh4tYZ3u.withdraw.call(uinthmC6VZw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsy2tXpLL = await DMONDETHRewards.new({from: accounts[4]});
		const uint256cAY9dyU = await DMONDETHRewardsy2tXpLL.rewardPerToken.call({from: accounts[1]});
//		await DMONDETHRewardsy2tXpLL.checkStart.call({from: accounts[2]});
//		const uint256HHtqUjq = await DMONDETHRewardsy2tXpLL.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint256cAY9dyU, BigInt("0"))
		await expect(DMONDETHRewardsy2tXpLL.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsiSWaVmu = await DMONDETHRewards.new({from: accounts[4]});
		const addressGfwRmNq = accounts[4]
		const addressMH8NR8 = accounts[2]
		const uintIIMaZ3f = BigInt("438")
		const addressKMH923U = accounts[1]
		const addressxdGRHBL = await DMONDETHRewardsiSWaVmu.transferOwnership.call(addressGfwRmNq, {from: accounts[4]});
		const boolauqk5uM = await DMONDETHRewardsiSWaVmu.isOwner.call({from: accounts[3]});
		const uint256GFobqMS = await DMONDETHRewardsiSWaVmu.balanceOf.call(addressMH8NR8, {from: accounts[1]});
//		const uint256T3F5FJF = await DMONDETHRewardsiSWaVmu.setStartTime.call(uintIIMaZ3f, {from: accounts[5]});
//		const uint256hjkD1yj = await DMONDETHRewardsiSWaVmu.earned.call(addressKMH923U, {from: accounts[3]});
//		await DMONDETHRewardsiSWaVmu.checkStart.call({from: accounts[2]});

		assert.equal(boolauqk5uM, false)
		assert.equal(uint256GFobqMS, BigInt("0"))
		await expect(DMONDETHRewardsiSWaVmu.setStartTime.call(uintIIMaZ3f, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsh4tYZ3u = await DMONDETHRewards.new({from: accounts[1]});
		const uintyn8FIk2 = BigInt("177")
		const addressEAJmATo = await DMONDETHRewardsh4tYZ3u.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256xO711Eq = await DMONDETHRewardsh4tYZ3u.withdraw.call(uintyn8FIk2, {from: accounts[1]});
//		await DMONDETHRewardsh4tYZ3u.checkStart.call({from: accounts[1]});

		assert.equal(addressEAJmATo, 0xa7212fa71957ECC2feeb95a684ed6EcD21881e01)
		await expect(DMONDETHRewardsh4tYZ3u.withdraw.call(uintyn8FIk2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsh4tYZ3u = await DMONDETHRewards.new({from: accounts[1]});
		const uintyTfr5iO = BigInt("589")
		const addressmxPKVdV = accounts[5]
		const booluBoINq4 = await DMONDETHRewardsh4tYZ3u.isOwner.call({from: accounts[3]});
//		const uint256a1CUtzK = await DMONDETHRewardsh4tYZ3u.notifyRewardAmount.call(uintyTfr5iO, {from: accounts[3]});
//		const addressENIF9nS = await DMONDETHRewardsh4tYZ3u.transferOwnership.call(addressmxPKVdV, {from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsh4tYZ3u.checkStart.call({from: accounts[1]});

		assert.equal(booluBoINq4, false)
		await expect(DMONDETHRewardsh4tYZ3u.notifyRewardAmount.call(uintyTfr5iO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsh4tYZ3u = await DMONDETHRewards.new({from: accounts[1]});
		const uintlkwZvlW = BigInt("1793")
		const addressRiNWwJS = accounts[6]
//		const uint256YsxXkRR = await DMONDETHRewardsh4tYZ3u.stake.call(uintlkwZvlW, {from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsh4tYZ3u.renounceOwnership.call({from: accounts[3]});
//		const addressENIF9nS = await DMONDETHRewardsh4tYZ3u.transferOwnership.call(addressRiNWwJS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardsh4tYZ3u.stake.call(uintlkwZvlW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsh4tYZ3u = await DMONDETHRewards.new({from: accounts[1]});
		const addressNT4xiO = accounts[6]
		const uintIlcJck2 = BigInt("946")
//		await DMONDETHRewardsh4tYZ3u.getReward.call({from: accounts[1]});
//		const addressENIF9nS = await DMONDETHRewardsh4tYZ3u.transferOwnership.call(addressNT4xiO, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256JqCRjs = await DMONDETHRewardsh4tYZ3u.stake.call(uintIlcJck2, {from: accounts[3]});

		await expect(DMONDETHRewardsh4tYZ3u.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsZfgkzsA = await DMONDETHRewards.new({from: accounts[0]});
		const uintNDGGkBK = BigInt("426")
//		const uint256QdDKcZU = await DMONDETHRewardsZfgkzsA.remainingReward.call({from: accounts[0]});
//		const uint256erWlypw = await DMONDETHRewardsZfgkzsA.withdraw.call(uintNDGGkBK, {from: accounts[1]});
//		const uint256m87YIfX = await DMONDETHRewardsZfgkzsA.lastTimeRewardApplicable.call({from: accounts[0]});
//		await DMONDETHRewardsZfgkzsA.onlyRewardDistribution.call({from: accounts[1]});
//		await DMONDETHRewardsZfgkzsA.onlyOwner.call({from: accounts[2]});
//		await DMONDETHRewardsZfgkzsA.exit.call({from: accounts[0]});

		await expect(DMONDETHRewardsZfgkzsA.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsh4tYZ3u = await DMONDETHRewards.new({from: accounts[1]});
		const addressB0s3eT7 = accounts[4]
//		await DMONDETHRewardsh4tYZ3u.getReward.call({from: accounts[1]});
//		const addressqVIu6pW = await DMONDETHRewardsh4tYZ3u.setStakeAddress.call(addressB0s3eT7, {from: accounts[1]});

		await expect(DMONDETHRewardsh4tYZ3u.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsh4tYZ3u = await DMONDETHRewards.new({from: accounts[1]});
		const addressUtHcMgD = accounts[3]
		const addressHsJDxAO = accounts[6]
		const addressN9JLDtq = await DMONDETHRewardsh4tYZ3u.setRewardDistribution.call(addressUtHcMgD, {from: accounts[1]});
//		const addressENIF9nS = await DMONDETHRewardsh4tYZ3u.transferOwnership.call(addressHsJDxAO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardsh4tYZ3u.transferOwnership.call(addressHsJDxAO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsh4tYZ3u = await DMONDETHRewards.new({from: accounts[1]});
		const uintzBe36Yz = BigInt("1067")
		const addressXxSdL1T = accounts[6]
		const addressS4ePMSZ = accounts[3]
		const addressLQDvPnD = accounts[2]
		const uint256NkqhtA = await DMONDETHRewardsh4tYZ3u.setStartTime.call(uintzBe36Yz, {from: accounts[1]});
//		const addressENIF9nS = await DMONDETHRewardsh4tYZ3u.transferOwnership.call(addressXxSdL1T, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256KW3wiq2 = await DMONDETHRewardsh4tYZ3u.earned.call(addressS4ePMSZ, {from: accounts[3]});
//		const uint256QSMfLlt = await DMONDETHRewardsh4tYZ3u.balanceOf.call(addressLQDvPnD, {from: accounts[3]});

		await expect(DMONDETHRewardsh4tYZ3u.transferOwnership.call(addressXxSdL1T, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsIxfwThq = await DMONDETHRewards.new({from: accounts[0]});
//		await DMONDETHRewardsIxfwThq.getReward.call({from: accounts[4]});
//		await DMONDETHRewardsIxfwThq.renounceOwnership.call({from: accounts[0]});
//		const uint256cgs2yOv = await DMONDETHRewardsIxfwThq.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(DMONDETHRewardsIxfwThq.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsh4tYZ3u = await DMONDETHRewards.new({from: accounts[1]});
		const uintJABfKn7 = BigInt("1363")
//		await DMONDETHRewardsh4tYZ3u.getReward.call({from: accounts[1]});
//		const uint256BSAeWCZ = await DMONDETHRewardsh4tYZ3u.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256JmsiDUB = await DMONDETHRewardsh4tYZ3u.notifyRewardAmount.call(uintJABfKn7, {from: accounts[1]});

		await expect(DMONDETHRewardsh4tYZ3u.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})