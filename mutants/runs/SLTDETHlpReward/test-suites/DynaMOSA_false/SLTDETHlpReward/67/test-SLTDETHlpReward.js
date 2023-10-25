const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardWRrB0EX = await SLTDETHlpReward.new({from: accounts[3]});
		const uintPlAHySp = BigInt("1600")
		const uintLjxeMBS = BigInt("1062")
		const uintuTIWCw = BigInt("909")
		const uint256WRuB7zX = await SLTDETHlpRewardWRrB0EX.notifyRewardAmount.call(uintPlAHySp, {from: accounts[1]});
		const uint256VPT0jDA = await SLTDETHlpRewardWRrB0EX.withdraw.call(uintLjxeMBS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256o9EDwqO = await SLTDETHlpRewardWRrB0EX.stake.call(uintuTIWCw, {from: accounts[4]});

		await expect(SLTDETHlpRewardWRrB0EX.notifyRewardAmount.call(uintPlAHySp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardP5jqUG2 = await SLTDETHlpReward.new({from: accounts[4]});
		const addresse2hiONB = accounts[3]
		await SLTDETHlpRewardP5jqUG2.getReward.call({from: accounts[3]});
		const uint256TeeQC5e = await SLTDETHlpRewardP5jqUG2.earned.call(addresse2hiONB, {from: accounts[2]});
		const uint256Bs0vCNB = await SLTDETHlpRewardP5jqUG2.rewardPerToken.call({from: accounts[0]});

		await expect(SLTDETHlpRewardP5jqUG2.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardX3h5U6t = await SLTDETHlpReward.new({from: accounts[4]});
		const addressHD09f1T = accounts[0]
		const uintfmtZMmi = BigInt("507")
		const addressGbU9pn = accounts[0]
		const uint256rHAdAnQ = await SLTDETHlpRewardX3h5U6t.earned.call(addressHD09f1T, {from: accounts[0]});
		const uint256iAOc32 = await SLTDETHlpRewardX3h5U6t.stake.call(uintfmtZMmi, {from: accounts[3]});
		const addressyGtwtuC = await SLTDETHlpRewardX3h5U6t.updateReward.call(addressGbU9pn, {from: accounts[5]});

		assert.equal(uint256rHAdAnQ, BigInt("0"))
		await expect(SLTDETHlpRewardX3h5U6t.stake.call(uintfmtZMmi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardyckWaIy = await SLTDETHlpReward.new({from: accounts[1]});
		const uintGjend2m = BigInt("28")
		const uintjw68bhA = BigInt("314")
		const addressdQsfGnr = accounts[0]
		const uint2561mJC8O = await SLTDETHlpRewardyckWaIy.withdraw.call(uintGjend2m, {from: accounts[4]});
		const uint256r3G6eHJ = await SLTDETHlpRewardyckWaIy.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256r1xclO = await SLTDETHlpRewardyckWaIy.withdraw.call(uintjw68bhA, {from: accounts[0]});
		const uint256Wer3dbq = await SLTDETHlpRewardyckWaIy.balanceOf.call(addressdQsfGnr, {from: accounts[1]});
		await SLTDETHlpRewardyckWaIy.onlyOwner.call({from: accounts[3]});

		await expect(SLTDETHlpRewardyckWaIy.withdraw.call(uintGjend2m, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardql3mjK7 = await SLTDETHlpReward.new({from: accounts[1]});
		await SLTDETHlpRewardql3mjK7.exit.call({from: accounts[2]});
		await SLTDETHlpRewardql3mjK7.onlyOwner.call({from: accounts[3]});

		await expect(SLTDETHlpRewardql3mjK7.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardjelj9KM = await SLTDETHlpReward.new({from: accounts[1]});
		const addressOgdGCBC = accounts[4]
		const addressYcFpfm5 = accounts[3]
		await SLTDETHlpRewardjelj9KM.getReward.call({from: accounts[3]});
		const addressqkhxDYC = await SLTDETHlpRewardjelj9KM.setStakeAddress.call(addressOgdGCBC, {from: accounts[1]});
		const addressGoD2Srn = await SLTDETHlpRewardjelj9KM.updateReward.call(addressYcFpfm5, {from: accounts[2]});

		await expect(SLTDETHlpRewardjelj9KM.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl8I0uyX = await SLTDETHlpReward.new({from: accounts[2]});
		const addresssbt05Xn = accounts[0]
		const addressxvqiNla = accounts[4]
		const uintmY9GGtv = BigInt("1517")
		const addressvfhNQV9 = await SLTDETHlpRewardl8I0uyX.setRewardDistribution.call(addresssbt05Xn, {from: accounts[4]});
		const uint256JVLS6nW = await SLTDETHlpRewardl8I0uyX.earned.call(addressxvqiNla, {from: accounts[2]});
		const uint256KMe0hfe = await SLTDETHlpRewardl8I0uyX.setStartTime.call(uintmY9GGtv, {from: accounts[3]});
		await SLTDETHlpRewardl8I0uyX.renounceOwnership.call({from: accounts[2]});
		const uint256xNDj4u5 = await SLTDETHlpRewardl8I0uyX.remainingReward.call({from: accounts[3]});

		await expect(SLTDETHlpRewardl8I0uyX.setRewardDistribution.call(addresssbt05Xn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMKePaNK = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressiORO71l = accounts[3]
		const addressIe5hT5T = accounts[5]
		const addresssKDngCF = accounts[1]
		const addressejEkuco = await SLTDETHlpRewardMKePaNK.transferOwnership.call(addressiORO71l, {from: accounts[0]});
		const addresskbGZIN = await SLTDETHlpRewardMKePaNK.setStakeAddress.call(addressIe5hT5T, {from: accounts[4]});
		const addressi9G5i7w = await SLTDETHlpRewardMKePaNK.setStakeAddress.call(addresssKDngCF, {from: accounts[1]});
		await SLTDETHlpRewardMKePaNK.onlyOwner.call({from: accounts[3]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardP5jqUG2 = await SLTDETHlpReward.new({from: accounts[4]});
		const uint256WB7j8Qx = await SLTDETHlpRewardP5jqUG2.remainingReward.call({from: accounts[0]});
		await SLTDETHlpRewardP5jqUG2.getReward.call({from: accounts[3]});
		const uint256Bs0vCNB = await SLTDETHlpRewardP5jqUG2.rewardPerToken.call({from: accounts[0]});

		await expect(SLTDETHlpRewardP5jqUG2.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardsyJeSiq = await SLTDETHlpReward.new({from: accounts[5]});
		const uintcXCsUby = BigInt("625")
		const addressjhjoowG = accounts[1]
		const addressFDDext4 = await SLTDETHlpRewardsyJeSiq.owner.call({from: accounts[0]});
		const uint256sMxqpHg = await SLTDETHlpRewardsyJeSiq.withdraw.call(uintcXCsUby, {from: accounts[4]});
		await SLTDETHlpRewardsyJeSiq.onlyRewardDistribution.call({from: accounts[1]});
		await SLTDETHlpRewardsyJeSiq.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardsyJeSiq.onlyRewardDistribution.call({from: accounts[1]});
		const uint256WedJkBB = await SLTDETHlpRewardsyJeSiq.earned.call(addressjhjoowG, {from: accounts[4]});

		assert.equal(addressFDDext4, 0xea34F96C498051392796034310E7c036f421e837)
		await expect(SLTDETHlpRewardsyJeSiq.withdraw.call(uintcXCsUby, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardP5jqUG2 = await SLTDETHlpReward.new({from: accounts[4]});
		const addressFhERDIu = accounts[3]
		const uintQWVIJai = BigInt("303")
		const addressZKFuSY = await SLTDETHlpRewardP5jqUG2.transferOwnership.call(addressFhERDIu, {from: accounts[4]});
		await SLTDETHlpRewardP5jqUG2.getReward.call({from: accounts[3]});
		const uint256Dm86CZH = await SLTDETHlpRewardP5jqUG2.notifyRewardAmount.call(uintQWVIJai, {from: accounts[4]});

		await expect(SLTDETHlpRewardP5jqUG2.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardP5jqUG2 = await SLTDETHlpReward.new({from: accounts[4]});
		const addressaFBsHIf = accounts[4]
		const uinttdMkOxM = BigInt("303")
		const uintOlamgWH = BigInt("55")
		const addressZKFuSY = await SLTDETHlpRewardP5jqUG2.transferOwnership.call(addressaFBsHIf, {from: accounts[4]});
		await SLTDETHlpRewardP5jqUG2.getReward.call({from: accounts[3]});
		const uint256Dm86CZH = await SLTDETHlpRewardP5jqUG2.notifyRewardAmount.call(uinttdMkOxM, {from: accounts[4]});
		await SLTDETHlpRewardP5jqUG2.renounceOwnership.call({from: accounts[4]});
		const uint256td9MuEv = await SLTDETHlpRewardP5jqUG2.stake.call(uintOlamgWH, {from: accounts[0]});

		await expect(SLTDETHlpRewardP5jqUG2.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardP5jqUG2 = await SLTDETHlpReward.new({from: accounts[4]});
		const addressU04SuIA = accounts[2]
		const addressUmBJwGy = accounts[4]
		const uint0CZfQ6 = BigInt("303")
		const addressURTCOup = accounts[4]
		const uintt8TLWvE = BigInt("55")
		const addresszuzLWmn = await SLTDETHlpRewardP5jqUG2.setRewardDistribution.call(addressU04SuIA, {from: accounts[4]});
		const addressZKFuSY = await SLTDETHlpRewardP5jqUG2.transferOwnership.call(addressUmBJwGy, {from: accounts[4]});
		await SLTDETHlpRewardP5jqUG2.getReward.call({from: accounts[3]});
		const uint256Dm86CZH = await SLTDETHlpRewardP5jqUG2.notifyRewardAmount.call(uint0CZfQ6, {from: accounts[4]});
		const addressQXybm2D = await SLTDETHlpRewardP5jqUG2.updateReward.call(addressURTCOup, {from: accounts[5]});
		await SLTDETHlpRewardP5jqUG2.renounceOwnership.call({from: accounts[4]});
		const uint256td9MuEv = await SLTDETHlpRewardP5jqUG2.stake.call(uintt8TLWvE, {from: accounts[0]});

		await expect(SLTDETHlpRewardP5jqUG2.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})