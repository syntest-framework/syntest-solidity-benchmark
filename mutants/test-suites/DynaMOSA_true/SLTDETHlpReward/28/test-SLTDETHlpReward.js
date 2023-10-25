const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardRQ8KvNR = await SLTDETHlpReward.new({from: accounts[3]});
		const addressgN81xxU = accounts[0]
		const uinthx858Gh = BigInt("1607")
		const addressVD1gYqF = accounts[1]
//		const addressQa3vXK = await SLTDETHlpRewardRQ8KvNR.transferOwnership.call(addressgN81xxU, {from: accounts[0]});
//		const uint256EXykOJ = await SLTDETHlpRewardRQ8KvNR.notifyRewardAmount.call(uinthx858Gh, {from: accounts[0]});
//		await SLTDETHlpRewardRQ8KvNR.onlyRewardDistribution.call({from: accounts[0]});
//		const addressm21zwkU = await SLTDETHlpRewardRQ8KvNR.setRewardDistribution.call(addressVD1gYqF, {from: accounts[1]});

		await expect(SLTDETHlpRewardRQ8KvNR.transferOwnership.call(addressgN81xxU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardsHsI94O = await SLTDETHlpReward.new({from: accounts[2]});
		const uintS7fCFRE = BigInt("1711")
		const uintOWQabF7 = BigInt("1069")
		const address1zn2ls = accounts[3]
//		const uint256Av4NLb = await SLTDETHlpRewardsHsI94O.notifyRewardAmount.call(uintS7fCFRE, {from: accounts[4]});
//		const uint256pYi7UUa = await SLTDETHlpRewardsHsI94O.stake.call(uintOWQabF7, {from: accounts[0]});
//		await SLTDETHlpRewardsHsI94O.getReward.call({from: accounts[5]});
//		await SLTDETHlpRewardsHsI94O.onlyOwner.call({from: accounts[2]});
//		const addressu5NfE6I = await SLTDETHlpRewardsHsI94O.transferOwnership.call(address1zn2ls, {from: accounts[4]});

		await expect(SLTDETHlpRewardsHsI94O.notifyRewardAmount.call(uintS7fCFRE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardZgzVrGX = await SLTDETHlpReward.new({from: accounts[2]});
		const addressv6glCSV = accounts[1]
//		const uint256aGCUIDp = await SLTDETHlpRewardZgzVrGX.remainingReward.call({from: accounts[4]});
//		const uint256UpZeQe4 = await SLTDETHlpRewardZgzVrGX.earned.call(addressv6glCSV, {from: accounts[5]});
//		await SLTDETHlpRewardZgzVrGX.exit.call({from: accounts[0]});

		await expect(SLTDETHlpRewardZgzVrGX.remainingReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardyBDPVAC = await SLTDETHlpReward.new({from: accounts[1]});
		const addressdOiZJJx = await SLTDETHlpRewardyBDPVAC.owner.call({from: accounts[3]});
//		await SLTDETHlpRewardyBDPVAC.onlyRewardDistribution.call({from: accounts[4]});
//		const uint256yCx9jY = await SLTDETHlpRewardyBDPVAC.remainingReward.call({from: accounts[2]});

		assert.equal(addressdOiZJJx, 0x9dF0d31F7489195089663fFa10b8799f3c581143)
		await expect(SLTDETHlpRewardyBDPVAC.onlyRewardDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFmCfpui = await SLTDETHlpReward.new({from: accounts[4]});
		const uintE0tXIYF = BigInt("727")
		const addressSWCaYle = "0x0000000000000000000000000000000000000001"
//		const uint256OcC5HTd = await SLTDETHlpRewardFmCfpui.withdraw.call(uintE0tXIYF, {from: accounts[3]});
//		const uint256mDrM9MH = await SLTDETHlpRewardFmCfpui.earned.call(addressSWCaYle, {from: accounts[3]});
//		const uint256lkUaIFw = await SLTDETHlpRewardFmCfpui.totalSupply.call({from: accounts[4]});
//		await SLTDETHlpRewardFmCfpui.checkStart.call({from: accounts[2]});
//		await SLTDETHlpRewardFmCfpui.onlyOwner.call({from: accounts[0]});

		await expect(SLTDETHlpRewardFmCfpui.withdraw.call(uintE0tXIYF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIoQoAje = await SLTDETHlpReward.new({from: accounts[5]});
		const uintzEXR9ed = BigInt("1191")
		const addressZsTJRdA = "0x0000000000000000000000000000000000000001"
		const uint256BJijsX6 = await SLTDETHlpRewardIoQoAje.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256OHsUy4S = await SLTDETHlpRewardIoQoAje.stake.call(uintzEXR9ed, {from: accounts[5]});
//		const uint256F1WveEm = await SLTDETHlpRewardIoQoAje.rewardPerToken.call({from: accounts[1]});
//		const addressoJwcFoT = await SLTDETHlpRewardIoQoAje.updateReward.call(addressZsTJRdA, {from: accounts[4]});

		assert.equal(uint256BJijsX6, BigInt("0"))
		await expect(SLTDETHlpRewardIoQoAje.stake.call(uintzEXR9ed, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewards6Jlik = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWr4gDxU = BigInt("531")
		const addressI0foxKe = accounts[1]
		const uint256yM5Cp6z = await SLTDETHlpRewards6Jlik.withdraw.call(uintWr4gDxU, {from: accounts[3]});
		const uint256AO7T8VR = await SLTDETHlpRewards6Jlik.earned.call(addressI0foxKe, {from: accounts[2]});
		await SLTDETHlpRewards6Jlik.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIoQoAje = await SLTDETHlpReward.new({from: accounts[5]});
		const uintArKbEKz = BigInt("1190")
		const addressdiPp9ZE = "0x0000000000000000000000000000000000000001"
		const uint256BJijsX6 = await SLTDETHlpRewardIoQoAje.lastTimeRewardApplicable.call({from: accounts[4]});
//		await SLTDETHlpRewardIoQoAje.getReward.call({from: accounts[3]});
//		const uint256OHsUy4S = await SLTDETHlpRewardIoQoAje.stake.call(uintArKbEKz, {from: accounts[5]});
//		const uint256F1WveEm = await SLTDETHlpRewardIoQoAje.rewardPerToken.call({from: accounts[1]});
//		const addressoJwcFoT = await SLTDETHlpRewardIoQoAje.updateReward.call(addressdiPp9ZE, {from: accounts[4]});

		assert.equal(uint256BJijsX6, BigInt("0"))
		await expect(SLTDETHlpRewardIoQoAje.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIoQoAje = await SLTDETHlpReward.new({from: accounts[5]});
		const addressM63ccwD = "0x0000000000000000000000000000000000000001"
//		await SLTDETHlpRewardIoQoAje.exit.call({from: accounts[0]});
//		const addressoJwcFoT = await SLTDETHlpRewardIoQoAje.updateReward.call(addressM63ccwD, {from: accounts[4]});

		await expect(SLTDETHlpRewardIoQoAje.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEDRrlyY = await SLTDETHlpReward.new({from: accounts[2]});
		const uintNBRGNJ = BigInt("1046")
		const addressXQMa5Ky = accounts[3]
		const uint256VQtqL9u = await SLTDETHlpRewardEDRrlyY.setStartTime.call(uintNBRGNJ, {from: accounts[2]});
//		const addressjAiziZj = await SLTDETHlpRewardEDRrlyY.updateReward.call(addressXQMa5Ky, {from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardEDRrlyY.getReward.call({from: accounts[1]});

		await expect(SLTDETHlpRewardEDRrlyY.updateReward.call(addressXQMa5Ky, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIoQoAje = await SLTDETHlpReward.new({from: accounts[5]});
		const uintcRuDDAr = BigInt("285")
		const uintFN8c3at = BigInt("1190")
		const uinteV0l6pt = BigInt("715")
		const address6XVgJ4 = "0x0000000000000000000000000000000000000001"
		const uint256BJijsX6 = await SLTDETHlpRewardIoQoAje.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256mD56pEp = await SLTDETHlpRewardIoQoAje.notifyRewardAmount.call(uintcRuDDAr, {from: accounts[5]});
//		await SLTDETHlpRewardIoQoAje.getReward.call({from: accounts[3]});
//		const uint256OHsUy4S = await SLTDETHlpRewardIoQoAje.stake.call(uintFN8c3at, {from: accounts[5]});
//		const uint256eTVFZ5u = await SLTDETHlpRewardIoQoAje.stake.call(uinteV0l6pt, {from: accounts[0]});
//		const uint256F1WveEm = await SLTDETHlpRewardIoQoAje.rewardPerToken.call({from: accounts[1]});
//		const addressoJwcFoT = await SLTDETHlpRewardIoQoAje.updateReward.call(address6XVgJ4, {from: accounts[4]});

		assert.equal(uint256BJijsX6, BigInt("0"))
		await expect(SLTDETHlpRewardIoQoAje.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIoQoAje = await SLTDETHlpReward.new({from: accounts[5]});
		const addressGnvAKWH = accounts[1]
		const uintwRDr1du = BigInt("1196")
		const addressSCsJipf = await SLTDETHlpRewardIoQoAje.setStakeAddress.call(addressGnvAKWH, {from: accounts[5]});
//		const uint256OHsUy4S = await SLTDETHlpRewardIoQoAje.stake.call(uintwRDr1du, {from: accounts[5]});

		await expect(SLTDETHlpRewardIoQoAje.stake.call(uintwRDr1du, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIoQoAje = await SLTDETHlpReward.new({from: accounts[5]});
		const addressHH9HYK1 = accounts[0]
		const uinttC4qaiK = BigInt("1190")
		const address9l2PiH = accounts[0]
		const addressvKdx2O6 = await SLTDETHlpRewardIoQoAje.setRewardDistribution.call(addressHH9HYK1, {from: accounts[5]});
		const uint256BJijsX6 = await SLTDETHlpRewardIoQoAje.lastTimeRewardApplicable.call({from: accounts[4]});
//		await SLTDETHlpRewardIoQoAje.checkStart.call({from: accounts[2]});
//		await SLTDETHlpRewardIoQoAje.getReward.call({from: accounts[3]});
//		const uint256OHsUy4S = await SLTDETHlpRewardIoQoAje.stake.call(uinttC4qaiK, {from: accounts[5]});
//		const uint256EVXIIqY = await SLTDETHlpRewardIoQoAje.earned.call(address9l2PiH, {from: accounts[5]});
//		const uint256F1WveEm = await SLTDETHlpRewardIoQoAje.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256BJijsX6, BigInt("0"))
		await expect(SLTDETHlpRewardIoQoAje.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEDRrlyY = await SLTDETHlpReward.new({from: accounts[2]});
//		await SLTDETHlpRewardEDRrlyY.getReward.call({from: accounts[1]});
//		await SLTDETHlpRewardEDRrlyY.renounceOwnership.call({from: accounts[2]});
		await SLTDETHlpRewardEDRrlyY.getReward.call({from: accounts[1]});

		await expect(SLTDETHlpRewardEDRrlyY.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})