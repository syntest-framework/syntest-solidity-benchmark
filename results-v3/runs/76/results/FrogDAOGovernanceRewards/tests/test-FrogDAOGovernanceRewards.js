const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressJu2DIC = accounts[2]
		const FrogDAOGovernanceRewardsmWiWgzT = await FrogDAOGovernanceRewards.new(addressJu2DIC, {from: accounts[1]});
		const uintr7umSCL = BigInt("761")
		const addressTKuxhVQ = accounts[1]
		const uint256es7dG68 = await FrogDAOGovernanceRewardsmWiWgzT.rewardPerToken.call({from: accounts[5]});
		const uint256DAnZM5 = await FrogDAOGovernanceRewardsmWiWgzT.devFundAvailable.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsmWiWgzT.getReward.call({from: accounts[0]});
		const uint256aSQol9 = await FrogDAOGovernanceRewardsmWiWgzT.notifyRewardAmount.call(uintr7umSCL, {from: accounts[1]});
		const uint256LpX8gzy = await FrogDAOGovernanceRewardsmWiWgzT.earned.call(addressTKuxhVQ, {from: accounts[3]});

		assert.equal(uint256DAnZM5, BigInt("0"))
		assert.equal(uint256es7dG68, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsmWiWgzT.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressWzH3Eg = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardspNE89fw = await FrogDAOGovernanceRewards.new(addressWzH3Eg, {from: accounts[2]});
		await FrogDAOGovernanceRewardspNE89fw.exit.call({from: accounts[3]});
		await FrogDAOGovernanceRewardspNE89fw.checkhalve.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardspNE89fw.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const address9O7Qke = accounts[1]
		const FrogDAOGovernanceRewardsnEskcEK = await FrogDAOGovernanceRewards.new(address9O7Qke, {from: accounts[5]});
		const addressJDArjg6 = accounts[0]
		const uint256Xy5TqYN = await FrogDAOGovernanceRewardsnEskcEK.rewardPerToken.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsnEskcEK.checkStart.call({from: accounts[1]});
		const uint256M2hmEY = await FrogDAOGovernanceRewardsnEskcEK.earned.call(addressJDArjg6, {from: accounts[4]});

		assert.equal(uint256Xy5TqYN, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsnEskcEK.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressf6FOkz9 = accounts[5]
		const FrogDAOGovernanceRewards7Yv36r = await FrogDAOGovernanceRewards.new(addressf6FOkz9, {from: accounts[3]});
		const uintiQFaVpc = BigInt("1567")
		const uintd1Yj1iJ = BigInt("587")
		const uintW0vmH0 = BigInt("1336")
		const addressw4jzJnt = accounts[5]
		const uint256Y32nohp = await FrogDAOGovernanceRewards7Yv36r.notifyRewardAmount.call(uintiQFaVpc, {from: accounts[0]});
		const uint256zjzBly9 = await FrogDAOGovernanceRewards7Yv36r.notifyRewardAmount.call(uintd1Yj1iJ, {from: accounts[0]});
		const uint256XyCd0o = await FrogDAOGovernanceRewards7Yv36r.withdraw.call(uintW0vmH0, {from: accounts[0]});
		await FrogDAOGovernanceRewards7Yv36r.renounceDevAddr.call({from: accounts[2]});
		const addressne6hdyV = await FrogDAOGovernanceRewards7Yv36r.updateReward.call(addressw4jzJnt, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewards7Yv36r.notifyRewardAmount.call(uintiQFaVpc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressFo0Q6IO = accounts[3]
		const FrogDAOGovernanceRewardsVHmisy9 = await FrogDAOGovernanceRewards.new(addressFo0Q6IO, {from: accounts[3]});
		const uinta6A430l = BigInt("1094")
		const uint256znreSEm = await FrogDAOGovernanceRewardsVHmisy9.notifyRewardAmount.call(uinta6A430l, {from: accounts[3]});
		await FrogDAOGovernanceRewardsVHmisy9.checkhalve.call({from: accounts[1]});
		const uint256Slwscw = await FrogDAOGovernanceRewardsVHmisy9.lastTimeRewardApplicable.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsVHmisy9.renounceDevAddr.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsVHmisy9.notifyRewardAmount.call(uinta6A430l, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresssm8Pjp0 = accounts[0]
		const FrogDAOGovernanceRewardsjSUjAtt = await FrogDAOGovernanceRewards.new(addresssm8Pjp0, {from: accounts[4]});
		const uintF5n7gfS = BigInt("581")
		const addressLjQxmBy = accounts[0]
		const addressOCRHmAk = accounts[1]
		await FrogDAOGovernanceRewardsjSUjAtt.renounceDevAddr.call({from: accounts[1]});
		const uint256E42mKMO = await FrogDAOGovernanceRewardsjSUjAtt.stake.call(uintF5n7gfS, {from: accounts[3]});
		const addresslH38DeN = await FrogDAOGovernanceRewardsjSUjAtt.updateReward.call(addressLjQxmBy, {from: accounts[5]});
		const addressLrej8O7 = await FrogDAOGovernanceRewardsjSUjAtt.updateReward.call(addressOCRHmAk, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsjSUjAtt.renounceDevAddr.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressQ1c0oD = accounts[4]
		const FrogDAOGovernanceRewardsOHV7EKw = await FrogDAOGovernanceRewards.new(addressQ1c0oD, {from: accounts[5]});
		const addressrL6ZECt = "0x0000000000000000000000000000000000000001"
		const uintHD3YkGt = BigInt("828")
		const addressfTqug9 = await FrogDAOGovernanceRewardsOHV7EKw.transferDevAddr.call(addressrL6ZECt, {from: accounts[1]});
		const uint256GhJVC52 = await FrogDAOGovernanceRewardsOHV7EKw.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256LZ0YSkP = await FrogDAOGovernanceRewardsOHV7EKw.stake.call(uintHD3YkGt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iWb27O9 = await FrogDAOGovernanceRewardsOHV7EKw.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsOHV7EKw.transferDevAddr.call(addressrL6ZECt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressx7WFzsb = accounts[2]
		const FrogDAOGovernanceRewardsmWiWgzT = await FrogDAOGovernanceRewards.new(addressx7WFzsb, {from: accounts[1]});
		const uintbdxHMMm = BigInt("136")
		const uintehuOHAE = BigInt("761")
		const addressmlh4BC = accounts[1]
		const uinttdDao2U = BigInt("1245")
		const uint256m8bmYjp = await FrogDAOGovernanceRewardsmWiWgzT.withdraw.call(uintbdxHMMm, {from: accounts[1]});
		const uint256es7dG68 = await FrogDAOGovernanceRewardsmWiWgzT.rewardPerToken.call({from: accounts[5]});
		const uint256DAnZM5 = await FrogDAOGovernanceRewardsmWiWgzT.devFundAvailable.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsmWiWgzT.exit.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsmWiWgzT.getReward.call({from: accounts[0]});
		const uint256aSQol9 = await FrogDAOGovernanceRewardsmWiWgzT.notifyRewardAmount.call(uintehuOHAE, {from: accounts[1]});
		const uint256LpX8gzy = await FrogDAOGovernanceRewardsmWiWgzT.earned.call(addressmlh4BC, {from: accounts[3]});
		const uint256lqEoNHk = await FrogDAOGovernanceRewardsmWiWgzT.withdraw.call(uinttdDao2U, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsmWiWgzT.withdraw.call(uintbdxHMMm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresswVKbgq2 = accounts[0]
		const FrogDAOGovernanceRewardsH57v2BQ = await FrogDAOGovernanceRewards.new(addresswVKbgq2, {from: "0x0000000000000000000000000000000000000001"});
		const addresst5VMKy = "0x0000000000000000000000000000000000000001"
		const addressen2gLW = await FrogDAOGovernanceRewardsH57v2BQ.transferDevAddr.call(addresst5VMKy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sBhLnPQ = await FrogDAOGovernanceRewardsH57v2BQ.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressg9RYXj = accounts[1]
		const FrogDAOGovernanceRewardslhOPCeQ = await FrogDAOGovernanceRewards.new(addressg9RYXj, {from: accounts[1]});
		const addressyoUYyd = accounts[0]
		const addresstMaloLS = await FrogDAOGovernanceRewardslhOPCeQ.transferDevAddr.call(addressyoUYyd, {from: accounts[1]});
		await FrogDAOGovernanceRewardslhOPCeQ.exit.call({from: accounts[1]});
		await FrogDAOGovernanceRewardslhOPCeQ.checkStart.call({from: accounts[2]});
		await FrogDAOGovernanceRewardslhOPCeQ.getReward.call({from: accounts[0]});
		const uint256SCcLuD3 = await FrogDAOGovernanceRewardslhOPCeQ.devFundAvailable.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardslhOPCeQ.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressPThjsLI = accounts[2]
		const FrogDAOGovernanceRewardsmWiWgzT = await FrogDAOGovernanceRewards.new(addressPThjsLI, {from: accounts[1]});
		const uintb18J7Qh = BigInt("1090")
		const uintqL4INC5 = BigInt("20")
		const addressrAsrbF = accounts[4]
		const uintqLkcBLG = BigInt("1231")
		const addressOv7Wa6U = "0x0000000000000000000000000000000000000001"
		const uint256QLqGCoO = await FrogDAOGovernanceRewardsmWiWgzT.withdrawDevFund.call(uintb18J7Qh, {from: accounts[0]});
		const uint256es7dG68 = await FrogDAOGovernanceRewardsmWiWgzT.rewardPerToken.call({from: accounts[5]});
		const uint256OMKq6Gy = await FrogDAOGovernanceRewardsmWiWgzT.rewardPerToken.call({from: accounts[1]});
		const uint256txyh02c = await FrogDAOGovernanceRewardsmWiWgzT.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256DAnZM5 = await FrogDAOGovernanceRewardsmWiWgzT.devFundAvailable.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsmWiWgzT.exit.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsmWiWgzT.getReward.call({from: accounts[0]});
		const uint256EIriezn = await FrogDAOGovernanceRewardsmWiWgzT.withdraw.call(uintqL4INC5, {from: accounts[3]});
		const uint256RQ4qC7X = await FrogDAOGovernanceRewardsmWiWgzT.earned.call(addressrAsrbF, {from: accounts[1]});
		await FrogDAOGovernanceRewardsmWiWgzT.exit.call({from: accounts[3]});
		const uint256K0OBzgG = await FrogDAOGovernanceRewardsmWiWgzT.notifyRewardAmount.call(uintqLkcBLG, {from: accounts[2]});
		const uint256LpX8gzy = await FrogDAOGovernanceRewardsmWiWgzT.earned.call(addressOv7Wa6U, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsmWiWgzT.withdrawDevFund.call(uintb18J7Qh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresskJ4aNCt = accounts[0]
		const FrogDAOGovernanceRewardsoC8roAQ = await FrogDAOGovernanceRewards.new(addresskJ4aNCt, {from: accounts[1]});
		const uintV3XHBRF = BigInt("1990")
		const uintP0LfbSC = BigInt("1768")
		const uint256gd2SWF = await FrogDAOGovernanceRewardsoC8roAQ.withdrawDevFund.call(uintV3XHBRF, {from: accounts[0]});
		const uint256HrF7Evt = await FrogDAOGovernanceRewardsoC8roAQ.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256UWvzgl1 = await FrogDAOGovernanceRewardsoC8roAQ.withdrawDevFund.call(uintP0LfbSC, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsoC8roAQ.withdrawDevFund.call(uintV3XHBRF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})