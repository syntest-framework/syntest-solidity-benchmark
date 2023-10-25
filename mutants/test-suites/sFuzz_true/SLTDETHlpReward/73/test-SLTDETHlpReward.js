const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQYAn9Um = await SLTDETHlpReward.new({from: accounts[3]});
		const addressCtU65GX = accounts[3]
		const addressBh3c5Y = accounts[1]
		const addresss5CMstg = accounts[0]
		const uint256lFumqSj = await SLTDETHlpRewardQYAn9Um.earned.call(addressCtU65GX, {from: accounts[4]});
//		await SLTDETHlpRewardQYAn9Um.onlyRewardDistribution.call({from: accounts[2]});
//		const addressextxKDl = await SLTDETHlpRewardQYAn9Um.setRewardDistribution.call(addressBh3c5Y, {from: accounts[2]});
//		const addresso6L6KAK = await SLTDETHlpRewardQYAn9Um.transferOwnership.call(addresss5CMstg, {from: accounts[3]});
//		const uint256x9Rtuuf = await SLTDETHlpRewardQYAn9Um.remainingReward.call({from: accounts[3]});
//		await SLTDETHlpRewardQYAn9Um.checkStart.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256lFumqSj, BigInt("0"))
		await expect(SLTDETHlpRewardQYAn9Um.onlyRewardDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardgg8AhIf = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssEXJ94X = accounts[4]
		const uintUQ0CLbv = BigInt("22")
		const addressMkqFi0f = await SLTDETHlpRewardgg8AhIf.transferOwnership.call(addresssEXJ94X, {from: accounts[4]});
		const uint256OVYnYg = await SLTDETHlpRewardgg8AhIf.setStartTime.call(uintUQ0CLbv, {from: accounts[0]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardE21T7RP = await SLTDETHlpReward.new({from: accounts[0]});
		const addressr5kRsl3 = accounts[2]
		const addressPfT9NP = accounts[5]
		const uintLpgphEv = BigInt("324")
		const addressOA4VD5Y = accounts[1]
//		const addressT5jKSww = await SLTDETHlpRewardE21T7RP.setRewardDistribution.call(addressr5kRsl3, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256cxpKbA4 = await SLTDETHlpRewardE21T7RP.earned.call(addressPfT9NP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256UtI3abm = await SLTDETHlpRewardE21T7RP.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256fXmA5kI = await SLTDETHlpRewardE21T7RP.withdraw.call(uintLpgphEv, {from: accounts[1]});
//		const uint256rdVW2Q = await SLTDETHlpRewardE21T7RP.lastTimeRewardApplicable.call({from: accounts[2]});
//		const addresskb54vrN = await SLTDETHlpRewardE21T7RP.setStakeAddress.call(addressOA4VD5Y, {from: accounts[1]});

		await expect(SLTDETHlpRewardE21T7RP.setRewardDistribution.call(addressr5kRsl3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardqn290dd = await SLTDETHlpReward.new({from: accounts[0]});
		const addressxp45qag = accounts[2]
		const uintUWuaoj2 = BigInt("107")
		const uintpSBMTfp = BigInt("2029")
		const addressSoRHr4H = accounts[0]
		const uint256L2GrZtZ = await SLTDETHlpRewardqn290dd.balanceOf.call(addressxp45qag, {from: accounts[3]});
//		const uint256M18pWU8 = await SLTDETHlpRewardqn290dd.stake.call(uintUWuaoj2, {from: accounts[4]});
//		const uint256y4x1Fsd = await SLTDETHlpRewardqn290dd.setStartTime.call(uintpSBMTfp, {from: accounts[4]});
//		const addressT0I8q8 = await SLTDETHlpRewardqn290dd.setRewardDistribution.call(addressSoRHr4H, {from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardqn290dd.onlyOwner.call({from: accounts[2]});
//		const uint256kB2e4Yk = await SLTDETHlpRewardqn290dd.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256L2GrZtZ, BigInt("0"))
		await expect(SLTDETHlpRewardqn290dd.stake.call(uintUWuaoj2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKAiYd29 = await SLTDETHlpReward.new({from: accounts[4]});
		const uintM6qpwpt = BigInt("362")
		const uintX5OY5CO = BigInt("276")
//		await SLTDETHlpRewardKAiYd29.getReward.call({from: accounts[0]});
//		const uint256jl5WWr8 = await SLTDETHlpRewardKAiYd29.stake.call(uintM6qpwpt, {from: accounts[5]});
//		await SLTDETHlpRewardKAiYd29.renounceOwnership.call({from: accounts[4]});
//		const uint256Km0Gb3J = await SLTDETHlpRewardKAiYd29.withdraw.call(uintX5OY5CO, {from: accounts[3]});

		await expect(SLTDETHlpRewardKAiYd29.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFG4XKE2 = await SLTDETHlpReward.new({from: accounts[4]});
		const addresssqOYSDG = accounts[3]
		const uint7fc1dP = BigInt("1292")
		const uint256Ff5BmwY = await SLTDETHlpRewardFG4XKE2.earned.call(addresssqOYSDG, {from: accounts[3]});
		const uint256ixjYhb5 = await SLTDETHlpRewardFG4XKE2.rewardPerToken.call({from: accounts[2]});
//		const uint256HxggUio = await SLTDETHlpRewardFG4XKE2.withdraw.call(uint7fc1dP, {from: accounts[0]});

		assert.equal(uint256Ff5BmwY, BigInt("0"))
		assert.equal(uint256ixjYhb5, BigInt("0"))
		await expect(SLTDETHlpRewardFG4XKE2.withdraw.call(uint7fc1dP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardiWdLtLn = await SLTDETHlpReward.new({from: accounts[1]});
		const addressJKyRHj = accounts[5]
		const uintJpF8PMg = BigInt("1154")
//		await SLTDETHlpRewardiWdLtLn.getReward.call({from: accounts[2]});
//		const address8HwGGJ = await SLTDETHlpRewardiWdLtLn.setRewardDistribution.call(addressJKyRHj, {from: accounts[1]});
//		await SLTDETHlpRewardiWdLtLn.onlyRewardDistribution.call({from: accounts[0]});
//		await SLTDETHlpRewardiWdLtLn.getReward.call({from: accounts[0]});
//		const boolu9HGWZQ = await SLTDETHlpRewardiWdLtLn.isOwner.call({from: accounts[2]});
//		const uint256Ea7o3qb = await SLTDETHlpRewardiWdLtLn.stake.call(uintJpF8PMg, {from: accounts[1]});

		await expect(SLTDETHlpRewardiWdLtLn.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFG4XKE2 = await SLTDETHlpReward.new({from: accounts[4]});
		const addressqixEAvx = accounts[3]
		const uint256Ff5BmwY = await SLTDETHlpRewardFG4XKE2.earned.call(addressqixEAvx, {from: accounts[3]});
//		await SLTDETHlpRewardFG4XKE2.exit.call({from: accounts[1]});
//		await SLTDETHlpRewardFG4XKE2.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ixjYhb5 = await SLTDETHlpRewardFG4XKE2.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256Ff5BmwY, BigInt("0"))
		await expect(SLTDETHlpRewardFG4XKE2.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFG4XKE2 = await SLTDETHlpReward.new({from: accounts[4]});
		const addresslMJpWMV = accounts[3]
		const address9ooqHt = accounts[4]
		const uint256Ff5BmwY = await SLTDETHlpRewardFG4XKE2.earned.call(addresslMJpWMV, {from: accounts[3]});
//		await SLTDETHlpRewardFG4XKE2.renounceOwnership.call({from: accounts[4]});
//		const uint256ixjYhb5 = await SLTDETHlpRewardFG4XKE2.rewardPerToken.call({from: accounts[2]});
//		const uint256NCnpiT7 = await SLTDETHlpRewardFG4XKE2.earned.call(address9ooqHt, {from: accounts[4]});

		assert.equal(uint256Ff5BmwY, BigInt("0"))
		await expect(SLTDETHlpRewardFG4XKE2.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFG4XKE2 = await SLTDETHlpReward.new({from: accounts[4]});
		const uintcf658e = BigInt("1268")
		const addressgDBYEZI = accounts[3]
//		const uint256S2HIKct = await SLTDETHlpRewardFG4XKE2.notifyRewardAmount.call(uintcf658e, {from: accounts[1]});
//		const uint256Ff5BmwY = await SLTDETHlpRewardFG4XKE2.earned.call(addressgDBYEZI, {from: accounts[3]});

		await expect(SLTDETHlpRewardFG4XKE2.notifyRewardAmount.call(uintcf658e, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFG4XKE2 = await SLTDETHlpReward.new({from: accounts[4]});
		const addressNUVZznF = accounts[5]
		const uintsgtZ9ZT = BigInt("1921")
		const uint256Ff5BmwY = await SLTDETHlpRewardFG4XKE2.earned.call(addressNUVZznF, {from: accounts[3]});
//		const uint256CZEg9y = await SLTDETHlpRewardFG4XKE2.remainingReward.call({from: accounts[2]});
//		await SLTDETHlpRewardFG4XKE2.onlyOwner.call({from: accounts[3]});
//		const uint256voaDHvB = await SLTDETHlpRewardFG4XKE2.notifyRewardAmount.call(uintsgtZ9ZT, {from: accounts[5]});

		assert.equal(uint256Ff5BmwY, BigInt("0"))
		await expect(SLTDETHlpRewardFG4XKE2.remainingReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFG4XKE2 = await SLTDETHlpReward.new({from: accounts[4]});
		const addressN2gxHtO = accounts[5]
		const uintyUDN6xx = BigInt("1011")
		const uint256Ff5BmwY = await SLTDETHlpRewardFG4XKE2.earned.call(addressN2gxHtO, {from: accounts[3]});
		const uint256EiT5uAP = await SLTDETHlpRewardFG4XKE2.notifyRewardAmount.call(uintyUDN6xx, {from: accounts[4]});

		assert.equal(uint256Ff5BmwY, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFG4XKE2 = await SLTDETHlpReward.new({from: accounts[4]});
		const addressbmrwRvK = accounts[5]
		const uint256Ff5BmwY = await SLTDETHlpRewardFG4XKE2.earned.call(addressbmrwRvK, {from: accounts[3]});
		const uint256HMauncJ = await SLTDETHlpRewardFG4XKE2.totalSupply.call({from: accounts[4]});
		const addressdIoiqsE = await SLTDETHlpRewardFG4XKE2.owner.call({from: accounts[0]});

		assert.equal(addressdIoiqsE, 0x27c1B76890ec0FFC4741f372a6CFBaE22C42FCF1)
		assert.equal(uint256Ff5BmwY, BigInt("0"))
		assert.equal(uint256HMauncJ, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKAiYd29 = await SLTDETHlpReward.new({from: accounts[4]});
		const uintFTNFz1 = BigInt("1865")
//		await SLTDETHlpRewardKAiYd29.getReward.call({from: accounts[0]});
//		const uint256Jo6ZNYg = await SLTDETHlpRewardKAiYd29.setStartTime.call(uintFTNFz1, {from: accounts[4]});
//		await SLTDETHlpRewardKAiYd29.checkStart.call({from: accounts[2]});

		await expect(SLTDETHlpRewardKAiYd29.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKAiYd29 = await SLTDETHlpReward.new({from: accounts[4]});
		const addressBDQJen = accounts[2]
		const addressV4TEwSR = await SLTDETHlpRewardKAiYd29.transferOwnership.call(addressBDQJen, {from: accounts[4]});
//		await SLTDETHlpRewardKAiYd29.getReward.call({from: accounts[0]});

		await expect(SLTDETHlpRewardKAiYd29.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFG4XKE2 = await SLTDETHlpReward.new({from: accounts[4]});
		const addressmjUNO6X = accounts[5]
		const addressIt57bdi = "0x0000000000000000000000000000000000000001"
		const uint256Ff5BmwY = await SLTDETHlpRewardFG4XKE2.earned.call(addressmjUNO6X, {from: accounts[3]});
//		await SLTDETHlpRewardFG4XKE2.getReward.call({from: accounts[0]});
//		const addressZ4QhPTY = await SLTDETHlpRewardFG4XKE2.setStakeAddress.call(addressIt57bdi, {from: accounts[4]});

		assert.equal(uint256Ff5BmwY, BigInt("0"))
		await expect(SLTDETHlpRewardFG4XKE2.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})