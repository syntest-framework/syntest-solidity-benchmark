const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardLwuw1FB = await SLTDETHlpReward.new({from: accounts[0]});
		await SLTDETHlpRewardLwuw1FB.onlyOwner.call({from: accounts[1]});
		await SLTDETHlpRewardLwuw1FB.getReward.call({from: accounts[2]});

		await expect(SLTDETHlpRewardLwuw1FB.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardSTblYXp = await SLTDETHlpReward.new({from: accounts[1]});
		const uintScDxmt0 = BigInt("197")
		const addressLNnfx0 = accounts[5]
		const addressTZpC56 = accounts[4]
		const uint256tImS4JR = await SLTDETHlpRewardSTblYXp.stake.call(uintScDxmt0, {from: accounts[0]});
		const addressKxEcWpA = await SLTDETHlpRewardSTblYXp.updateReward.call(addressLNnfx0, {from: accounts[1]});
		const uint2568q4LjM = await SLTDETHlpRewardSTblYXp.balanceOf.call(addressTZpC56, {from: accounts[0]});

		await expect(SLTDETHlpRewardSTblYXp.stake.call(uintScDxmt0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardiEndzSS = await SLTDETHlpReward.new({from: accounts[5]});
		const uintNJ9MgQ4 = BigInt("1684")
		const boolWRYBwFx = await SLTDETHlpRewardiEndzSS.isOwner.call({from: accounts[4]});
		const uint256wwIoMB8 = await SLTDETHlpRewardiEndzSS.stake.call(uintNJ9MgQ4, {from: accounts[2]});

		assert.equal(boolWRYBwFx, false)
		await expect(SLTDETHlpRewardiEndzSS.stake.call(uintNJ9MgQ4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfWpwe3t = await SLTDETHlpReward.new({from: accounts[1]});
		const addressmfqxhRn = accounts[5]
		const addressL46HxzX = accounts[0]
		const addressmItSXE = await SLTDETHlpRewardfWpwe3t.setRewardDistribution.call(addressmfqxhRn, {from: accounts[3]});
		const uint256KrFzryI = await SLTDETHlpRewardfWpwe3t.earned.call(addressL46HxzX, {from: accounts[5]});
		const uint256GegLZP = await SLTDETHlpRewardfWpwe3t.rewardPerToken.call({from: accounts[0]});
		const boolTQlO6s = await SLTDETHlpRewardfWpwe3t.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardfWpwe3t.setRewardDistribution.call(addressmfqxhRn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardghZAVA7 = await SLTDETHlpReward.new({from: accounts[4]});
		const uintw9JnCeK = BigInt("1372")
		const addressUsfKjhc = accounts[4]
		await SLTDETHlpRewardghZAVA7.exit.call({from: accounts[3]});
		const uint256jxhZzHK = await SLTDETHlpRewardghZAVA7.stake.call(uintw9JnCeK, {from: accounts[2]});
		const uint256wfbK3Mq = await SLTDETHlpRewardghZAVA7.balanceOf.call(addressUsfKjhc, {from: accounts[3]});

		await expect(SLTDETHlpRewardghZAVA7.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardiEndzSS = await SLTDETHlpReward.new({from: accounts[5]});
		const uintyml3yYA = BigInt("1831")
		const uintgsrxcwl = BigInt("1684")
		const uint256lcelmsM = await SLTDETHlpRewardiEndzSS.withdraw.call(uintyml3yYA, {from: accounts[3]});
		await SLTDETHlpRewardiEndzSS.getReward.call({from: accounts[3]});
		const uint256wwIoMB8 = await SLTDETHlpRewardiEndzSS.stake.call(uintgsrxcwl, {from: accounts[2]});

		await expect(SLTDETHlpRewardiEndzSS.withdraw.call(uintyml3yYA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardiEndzSS = await SLTDETHlpReward.new({from: accounts[5]});
		const uintE0uJfFu = BigInt("1988")
		const uint256WwHWSB = await SLTDETHlpRewardiEndzSS.notifyRewardAmount.call(uintE0uJfFu, {from: accounts[3]});
		const boolWRYBwFx = await SLTDETHlpRewardiEndzSS.isOwner.call({from: accounts[4]});

		await expect(SLTDETHlpRewardiEndzSS.notifyRewardAmount.call(uintE0uJfFu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardRwFiUQ2 = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTdlE4ir = accounts[5]
		const uintVhEAGt = BigInt("506")
		const addressw472Vhr = accounts[1]
		await SLTDETHlpRewardRwFiUQ2.exit.call({from: accounts[1]});
		const addressNTLEKKO = await SLTDETHlpRewardRwFiUQ2.setStakeAddress.call(addressTdlE4ir, {from: accounts[2]});
		const uint256u4u5J5y = await SLTDETHlpRewardRwFiUQ2.withdraw.call(uintVhEAGt, {from: accounts[2]});
		const uint256caVGR8Q = await SLTDETHlpRewardRwFiUQ2.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressEfBub0i = await SLTDETHlpRewardRwFiUQ2.setRewardDistribution.call(addressw472Vhr, {from: accounts[2]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardiEndzSS = await SLTDETHlpReward.new({from: accounts[5]});
		const uintsdDB1SH = BigInt("1731")
		const addressBdslv5a = accounts[0]
		const addressTouFtW = accounts[0]
		await SLTDETHlpRewardiEndzSS.renounceOwnership.call({from: accounts[5]});
		const uint256wwIoMB8 = await SLTDETHlpRewardiEndzSS.stake.call(uintsdDB1SH, {from: accounts[2]});
		const addressMayDYlW = await SLTDETHlpRewardiEndzSS.updateReward.call(addressBdslv5a, {from: accounts[2]});
		const addresstpjt1xm = await SLTDETHlpRewardiEndzSS.setRewardDistribution.call(addressTouFtW, {from: accounts[3]});

		await expect(SLTDETHlpRewardiEndzSS.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardiEndzSS = await SLTDETHlpReward.new({from: accounts[5]});
		const addressNdQTFa1 = accounts[2]
		const uintOhfytmY = BigInt("706")
		const addresswSE9Pyf = await SLTDETHlpRewardiEndzSS.setRewardDistribution.call(addressNdQTFa1, {from: accounts[5]});
		const uint256wwIoMB8 = await SLTDETHlpRewardiEndzSS.stake.call(uintOhfytmY, {from: accounts[2]});

		await expect(SLTDETHlpRewardiEndzSS.stake.call(uintOhfytmY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardLwuw1FB = await SLTDETHlpReward.new({from: accounts[0]});
		await SLTDETHlpRewardLwuw1FB.getReward.call({from: accounts[2]});
		await SLTDETHlpRewardLwuw1FB.onlyOwner.call({from: accounts[1]});

		await expect(SLTDETHlpRewardLwuw1FB.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardiEndzSS = await SLTDETHlpReward.new({from: accounts[5]});
		const uintggUF2AM = BigInt("1691")
		const address2cPiXf = accounts[2]
		const uint256eT4a0xO = await SLTDETHlpRewardiEndzSS.remainingReward.call({from: accounts[0]});
		const uint256HdlHHSs = await SLTDETHlpRewardiEndzSS.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256wwIoMB8 = await SLTDETHlpRewardiEndzSS.stake.call(uintggUF2AM, {from: accounts[2]});
		const addressK8B6eKt = await SLTDETHlpRewardiEndzSS.transferOwnership.call(address2cPiXf, {from: accounts[1]});

		await expect(SLTDETHlpRewardiEndzSS.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardLwuw1FB = await SLTDETHlpReward.new({from: accounts[0]});
		const addressTkzGPde = accounts[2]
		await SLTDETHlpRewardLwuw1FB.getReward.call({from: accounts[2]});
		const addressSQGqgl6 = await SLTDETHlpRewardLwuw1FB.setStakeAddress.call(addressTkzGPde, {from: accounts[0]});

		await expect(SLTDETHlpRewardLwuw1FB.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardLwuw1FB = await SLTDETHlpReward.new({from: accounts[0]});
		const addressG1ynZ68 = await SLTDETHlpRewardLwuw1FB.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardLwuw1FB.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardLwuw1FB.onlyRewardDistribution.call({from: accounts[4]});
		await SLTDETHlpRewardLwuw1FB.getReward.call({from: accounts[2]});

		assert.equal(addressG1ynZ68, 0xf0a06EAf049bcF73CAc34CC6A7411b853cDd119c)
		await expect(SLTDETHlpRewardLwuw1FB.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardLwuw1FB = await SLTDETHlpReward.new({from: accounts[0]});
		const uintUMbrumT = BigInt("27")
		const uintrIAxcpy = BigInt("1442")
		const uint256iLPoUiR = await SLTDETHlpRewardLwuw1FB.notifyRewardAmount.call(uintUMbrumT, {from: accounts[0]});
		await SLTDETHlpRewardLwuw1FB.onlyOwner.call({from: accounts[1]});
		const uint256TBIxkIJ = await SLTDETHlpRewardLwuw1FB.withdraw.call(uintrIAxcpy, {from: accounts[2]});

		await expect(SLTDETHlpRewardLwuw1FB.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardZQI6AEY = await SLTDETHlpReward.new({from: accounts[4]});
		const uintRCOLiRq = BigInt("1670")
		const addressVjewG9Q = accounts[4]
		const uint256WC64YLj = await SLTDETHlpRewardZQI6AEY.setStartTime.call(uintRCOLiRq, {from: accounts[4]});
		await SLTDETHlpRewardZQI6AEY.onlyOwner.call({from: accounts[3]});
		const addressV3sAaBM = await SLTDETHlpRewardZQI6AEY.setStakeAddress.call(addressVjewG9Q, {from: accounts[4]});

		await expect(SLTDETHlpRewardZQI6AEY.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfXNH9KX = await SLTDETHlpReward.new({from: accounts[1]});
		const addressKLFXZC = accounts[3]
		const uint256VJJ6bm = await SLTDETHlpRewardfXNH9KX.rewardPerToken.call({from: accounts[3]});
		const addressTw8iLnb = await SLTDETHlpRewardfXNH9KX.transferOwnership.call(addressKLFXZC, {from: accounts[1]});
		await SLTDETHlpRewardfXNH9KX.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256VJJ6bm, BigInt("0"))
		await expect(SLTDETHlpRewardfXNH9KX.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})