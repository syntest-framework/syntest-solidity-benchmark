const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewards5hE0JG = await GUMARewards.new({from: accounts[0]});
		const addressC9eTePC = accounts[5]
//		await GUMARewards5hE0JG.renounceOwnership.call({from: accounts[1]});
//		await GUMARewards5hE0JG.getReward.call({from: accounts[1]});
//		const uint256qZ2pf1Y = await GUMARewards5hE0JG.rewardPerToken.call({from: accounts[4]});
//		const addresssyhIIzQ = await GUMARewards5hE0JG.transferOwnership.call(addressC9eTePC, {from: accounts[3]});

		await expect(GUMARewards5hE0JG.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqVewyq = await GUMARewards.new({from: accounts[2]});
		const addressQJ06fAp = accounts[4]
		const uintqeRx4p3 = BigInt("1958")
		const uint256eELeZI0 = await GUMARewardsqVewyq.balanceOf.call(addressQJ06fAp, {from: accounts[2]});
//		await GUMARewardsqVewyq.renounceOwnership.call({from: accounts[3]});
//		const uint2567GNTDC = await GUMARewardsqVewyq.stake.call(uintqeRx4p3, {from: accounts[1]});
//		await GUMARewardsqVewyq.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256eELeZI0, BigInt("0"))
		await expect(GUMARewardsqVewyq.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsBGeXVWO = await GUMARewards.new({from: accounts[0]});
		const addressu1W9dJs = accounts[0]
		const addressrqq2rTW = accounts[4]
		const addressHnKIljv = accounts[2]
		const addressTIw1Nv0 = accounts[4]
		const uintq7gsikm = BigInt("810")
//		const addressTgcg8Mn = await GUMARewardsBGeXVWO.setGUMA.call(addressrqq2rTW, addressu1W9dJs, {from: "0x0000000000000000000000000000000000000001"});
//		await GUMARewardsBGeXVWO.onlyRewardDistribution.call({from: accounts[1]});
//		await GUMARewardsBGeXVWO.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressixkba9i = await GUMARewardsBGeXVWO.updateReward.call(addressHnKIljv, {from: accounts[0]});
//		const uint256MsmS0Ev = await GUMARewardsBGeXVWO.earned.call(addressTIw1Nv0, {from: accounts[5]});
//		const uint256OIf5rH = await GUMARewardsBGeXVWO.stake.call(uintq7gsikm, {from: accounts[1]});

		await expect(GUMARewardsBGeXVWO.setGUMA.call(addressrqq2rTW, addressu1W9dJs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsZvBDpGU = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addresss0keZdC = accounts[3]
		const addressyNdzchf = accounts[4]
		const addressCRszER = accounts[3]
		const boolWOp1xOr = await GUMARewardsZvBDpGU.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressvArfZTe = await GUMARewardsZvBDpGU.setGUMA.call(addressyNdzchf, addresss0keZdC, {from: accounts[1]});
		const addressOphNclj = await GUMARewardsZvBDpGU.updateReward.call(addressCRszER, {from: accounts[0]});
		const uint256nwbJcPQ = await GUMARewardsZvBDpGU.rewardPerToken.call({from: accounts[3]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsH2CfJf2 = await GUMARewards.new({from: accounts[5]});
//		await GUMARewardsH2CfJf2.onlyOwner.call({from: accounts[0]});
//		const uint256olh7iba = await GUMARewardsH2CfJf2.rewardPerToken.call({from: accounts[2]});
		await GUMARewardsH2CfJf2.onlyOwner.call({from: accounts[0]});

		await expect(GUMARewardsH2CfJf2.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsLE4REK = await GUMARewards.new({from: accounts[2]});
		const uintSEMvJgW = BigInt("229")
		const addressAN6TH0A = accounts[3]
		const addressDbVcv9U = accounts[2]
//		const uint256TGGNUO4 = await GUMARewardsLE4REK.stake.call(uintSEMvJgW, {from: accounts[4]});
//		const addressZNzhkrL = await GUMARewardsLE4REK.setGUMA.call(addressDbVcv9U, addressAN6TH0A, {from: accounts[1]});
//		const uint256Y6owAyG = await GUMARewardsLE4REK.rewardPerToken.call({from: accounts[4]});
//		const uint256uRMc1aH = await GUMARewardsLE4REK.rewardPerToken.call({from: accounts[2]});

		await expect(GUMARewardsLE4REK.stake.call(uintSEMvJgW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsZN1NN67 = await GUMARewards.new({from: accounts[1]});
		const uintwT6WDZr = BigInt("1212")
		const uint256GNe5opD = await GUMARewardsZN1NN67.totalSupply.call({from: accounts[1]});
//		await GUMARewardsZN1NN67.getReward.call({from: accounts[2]});
//		const addressE84O1b = await GUMARewardsZN1NN67.owner.call({from: accounts[2]});
//		await GUMARewardsZN1NN67.onlyRewardDistribution.call({from: accounts[4]});
//		const uint256RzIZrEP = await GUMARewardsZN1NN67.stake.call(uintwT6WDZr, {from: accounts[0]});

		assert.equal(uint256GNe5opD, BigInt("0"))
		await expect(GUMARewardsZN1NN67.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsZN1NN67 = await GUMARewards.new({from: accounts[1]});
		const addresskG34wjT = accounts[2]
		const addressjVIEwip = accounts[5]
		const addressveETs9T = accounts[3]
		const uintEkRkZzw = BigInt("1212")
		const uint256GNe5opD = await GUMARewardsZN1NN67.totalSupply.call({from: accounts[1]});
		const addresslPtZyO9 = await GUMARewardsZN1NN67.setRewardDistribution.call(addresskG34wjT, {from: accounts[1]});
		const uint256mrxIsND = await GUMARewardsZN1NN67.earned.call(addressjVIEwip, {from: accounts[4]});
//		await GUMARewardsZN1NN67.getReward.call({from: accounts[2]});
//		const addressE84O1b = await GUMARewardsZN1NN67.owner.call({from: accounts[2]});
//		const addressQX9Ol1o = await GUMARewardsZN1NN67.owner.call({from: accounts[3]});
//		const addressF5iqk1v = await GUMARewardsZN1NN67.setRewardDistribution.call(addressveETs9T, {from: accounts[4]});
//		const uint256RzIZrEP = await GUMARewardsZN1NN67.stake.call(uintEkRkZzw, {from: accounts[0]});

		assert.equal(uint256GNe5opD, BigInt("0"))
		assert.equal(uint256mrxIsND, BigInt("0"))
		await expect(GUMARewardsZN1NN67.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsJqwCimb = await GUMARewards.new({from: accounts[0]});
		const addressGbKmUTj = accounts[0]
		const addresskhpdLYF = await GUMARewardsJqwCimb.transferOwnership.call(addressGbKmUTj, {from: accounts[0]});
		const uint256EDLg8KN = await GUMARewardsJqwCimb.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256EDLg8KN, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsTxLoY3L = await GUMARewards.new({from: accounts[5]});
//		await GUMARewardsTxLoY3L.renounceOwnership.call({from: accounts[5]});
//		await GUMARewardsTxLoY3L.getReward.call({from: accounts[4]});

		await expect(GUMARewardsTxLoY3L.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})