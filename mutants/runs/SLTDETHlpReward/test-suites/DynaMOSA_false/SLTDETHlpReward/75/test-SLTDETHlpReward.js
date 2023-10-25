const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJ9ek0fF = await SLTDETHlpReward.new({from: accounts[2]});
		const addressSutq7aL = accounts[0]
		const addressQqwgyyI = accounts[1]
		const addressqasZSRI = await SLTDETHlpRewardJ9ek0fF.updateReward.call(addressSutq7aL, {from: accounts[1]});
		await SLTDETHlpRewardJ9ek0fF.exit.call({from: accounts[2]});
		const uint256tnDslJ = await SLTDETHlpRewardJ9ek0fF.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressUx0zFYh = await SLTDETHlpRewardJ9ek0fF.updateReward.call(addressQqwgyyI, {from: accounts[4]});

		await expect(SLTDETHlpRewardJ9ek0fF.updateReward.call(addressSutq7aL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMqeczCa = await SLTDETHlpReward.new({from: accounts[0]});
		const uintkXEuxq = BigInt("472")
		const addressKSuAGVl = accounts[3]
		const addressdDyQrVA = accounts[5]
		const uintNxCoHxJ = BigInt("655")
		const uint256P0NiFIP = await SLTDETHlpRewardMqeczCa.stake.call(uintkXEuxq, {from: accounts[5]});
		const addressIHkSkMx = await SLTDETHlpRewardMqeczCa.updateReward.call(addressKSuAGVl, {from: accounts[5]});
		const addressaeD5Fym = await SLTDETHlpRewardMqeczCa.setStakeAddress.call(addressdDyQrVA, {from: accounts[3]});
		const uint256u3oxTSb = await SLTDETHlpRewardMqeczCa.stake.call(uintNxCoHxJ, {from: accounts[4]});
		await SLTDETHlpRewardMqeczCa.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardMqeczCa.stake.call(uintkXEuxq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarderctWdD = await SLTDETHlpReward.new({from: accounts[5]});
		const addresscD1klh0 = accounts[4]
		await SLTDETHlpRewarderctWdD.renounceOwnership.call({from: accounts[5]});
		const addressyqIN0fJ = await SLTDETHlpRewarderctWdD.setRewardDistribution.call(addresscD1klh0, {from: accounts[1]});
		const boolu0zzarW = await SLTDETHlpRewarderctWdD.isOwner.call({from: accounts[1]});
		const boolp8lVPrH = await SLTDETHlpRewarderctWdD.isOwner.call({from: accounts[4]});

		await expect(SLTDETHlpRewarderctWdD.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardZgHezA = await SLTDETHlpReward.new({from: accounts[2]});
		const addressdUH797v = accounts[1]
		const uint256h57TWJ = await SLTDETHlpRewardZgHezA.remainingReward.call({from: accounts[4]});
		const addressqAScABv = await SLTDETHlpRewardZgHezA.setRewardDistribution.call(addressdUH797v, {from: accounts[2]});
		const boolcTHzGWp = await SLTDETHlpRewardZgHezA.isOwner.call({from: accounts[4]});
		await SLTDETHlpRewardZgHezA.exit.call({from: accounts[1]});

		await expect(SLTDETHlpRewardZgHezA.remainingReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardkc53diS = await SLTDETHlpReward.new({from: accounts[1]});
		const uint256jj6RGPF = await SLTDETHlpRewardkc53diS.rewardPerToken.call({from: accounts[4]});
		const addressDQwlnM2 = await SLTDETHlpRewardkc53diS.owner.call({from: accounts[3]});
		const boolUdkNWnZ = await SLTDETHlpRewardkc53diS.isOwner.call({from: accounts[4]});
		await SLTDETHlpRewardkc53diS.checkStart.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressDQwlnM2, 0x07Df926B0cCFfC5f437B472Fc8cB28F50388fBd2)
		assert.equal(boolUdkNWnZ, false)
		assert.equal(uint256jj6RGPF, BigInt("0"))
		await expect(SLTDETHlpRewardkc53diS.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardk0pSh0 = await SLTDETHlpReward.new({from: accounts[2]});
		const addresssY4Lfm = accounts[1]
		const uintqrlCec1 = BigInt("398")
		await SLTDETHlpRewardk0pSh0.exit.call({from: accounts[1]});
		const uint256zeoESSb = await SLTDETHlpRewardk0pSh0.balanceOf.call(addresssY4Lfm, {from: accounts[0]});
		await SLTDETHlpRewardk0pSh0.checkStart.call({from: accounts[0]});
		const uint256FkVJOi0 = await SLTDETHlpRewardk0pSh0.withdraw.call(uintqrlCec1, {from: accounts[4]});

		await expect(SLTDETHlpRewardk0pSh0.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardCZX5LP6 = await SLTDETHlpReward.new({from: accounts[1]});
		const uintAAmoSdZ = BigInt("977")
		const uint9H0Ayw = BigInt("426")
		const uint7s6koX = BigInt("1602")
		const uint256LDRnisL = await SLTDETHlpRewardCZX5LP6.withdraw.call(uintAAmoSdZ, {from: accounts[1]});
		const uint256W2M7X4 = await SLTDETHlpRewardCZX5LP6.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256k0HhVt2 = await SLTDETHlpRewardCZX5LP6.notifyRewardAmount.call(uint9H0Ayw, {from: accounts[5]});
		await SLTDETHlpRewardCZX5LP6.renounceOwnership.call({from: accounts[5]});
		const uint256O0JASt5 = await SLTDETHlpRewardCZX5LP6.notifyRewardAmount.call(uint7s6koX, {from: accounts[3]});

		await expect(SLTDETHlpRewardCZX5LP6.withdraw.call(uintAAmoSdZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardlaE64MF = await SLTDETHlpReward.new({from: accounts[1]});
		const uintgrWrlvy = BigInt("302")
		const uint256hnUWk0w = await SLTDETHlpRewardlaE64MF.notifyRewardAmount.call(uintgrWrlvy, {from: accounts[2]});
		await SLTDETHlpRewardlaE64MF.onlyOwner.call({from: accounts[3]});
		const uint256YEiJPN0 = await SLTDETHlpRewardlaE64MF.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardlaE64MF.onlyRewardDistribution.call({from: accounts[2]});

		await expect(SLTDETHlpRewardlaE64MF.notifyRewardAmount.call(uintgrWrlvy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJraaIsV = await SLTDETHlpReward.new({from: accounts[3]});
		const addressOUmA4qY = accounts[0]
		await SLTDETHlpRewardJraaIsV.getReward.call({from: accounts[3]});
		await SLTDETHlpRewardJraaIsV.exit.call({from: accounts[3]});
		await SLTDETHlpRewardJraaIsV.onlyRewardDistribution.call({from: accounts[0]});
		const addressLObOlKo = await SLTDETHlpRewardJraaIsV.setStakeAddress.call(addressOUmA4qY, {from: accounts[4]});

		await expect(SLTDETHlpRewardJraaIsV.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJraaIsV = await SLTDETHlpReward.new({from: accounts[3]});
		const addressHF572iR = accounts[2]
		const addressjq0myM = accounts[0]
		const uintyGLDj8 = BigInt("1909")
		const addressxj1hlW8 = accounts[2]
		const addressOdb40eA = accounts[5]
		const uintRPtV1J = BigInt("619")
		const addressD4SLzsD = accounts[0]
		const addressR5S083h = accounts[4]
		await SLTDETHlpRewardJraaIsV.getReward.call({from: accounts[3]});
		const addressDaWMVoP = await SLTDETHlpRewardJraaIsV.transferOwnership.call(addressHF572iR, {from: accounts[3]});
		const addressqDRlVQJ = await SLTDETHlpRewardJraaIsV.updateReward.call(addressjq0myM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zMvCXoG = await SLTDETHlpRewardJraaIsV.stake.call(uintyGLDj8, {from: accounts[2]});
		const uint256sejvVBN = await SLTDETHlpRewardJraaIsV.balanceOf.call(addressxj1hlW8, {from: accounts[5]});
		await SLTDETHlpRewardJraaIsV.renounceOwnership.call({from: accounts[2]});
		const uint256wIkwBmH = await SLTDETHlpRewardJraaIsV.earned.call(addressOdb40eA, {from: accounts[5]});
		const uint256YbDECsV = await SLTDETHlpRewardJraaIsV.withdraw.call(uintRPtV1J, {from: accounts[3]});
		await SLTDETHlpRewardJraaIsV.exit.call({from: accounts[3]});
		await SLTDETHlpRewardJraaIsV.onlyRewardDistribution.call({from: accounts[0]});
		const addressLObOlKo = await SLTDETHlpRewardJraaIsV.setStakeAddress.call(addressD4SLzsD, {from: accounts[4]});
		const addressPLCB4WD = await SLTDETHlpRewardJraaIsV.updateReward.call(addressR5S083h, {from: accounts[3]});

		await expect(SLTDETHlpRewardJraaIsV.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardCCAUw45 = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKCzw7J8 = BigInt("1342")
		const uintlGdIRTb = BigInt("1894")
		const addressmuiZYFb = accounts[5]
		const uint256vDBipML = await SLTDETHlpRewardCCAUw45.notifyRewardAmount.call(uintKCzw7J8, {from: accounts[0]});
		const uint256zi4ox5g = await SLTDETHlpRewardCCAUw45.stake.call(uintlGdIRTb, {from: accounts[3]});
		const addressjusuNL = await SLTDETHlpRewardCCAUw45.updateReward.call(addressmuiZYFb, {from: accounts[5]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJraaIsV = await SLTDETHlpReward.new({from: accounts[3]});
		const uintZd3hF1j = BigInt("1509")
		const uint256rxlZ5TE = await SLTDETHlpRewardJraaIsV.notifyRewardAmount.call(uintZd3hF1j, {from: accounts[3]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJraaIsV = await SLTDETHlpReward.new({from: accounts[3]});
		const addressMiHk0ph = accounts[2]
		const addresslkCqVaM = "0x0000000000000000000000000000000000000001"
		const addressLUVDLIH = accounts[1]
		const uintRZUtdbn = BigInt("1509")
		await SLTDETHlpRewardJraaIsV.getReward.call({from: accounts[3]});
		const uint256NFfpZAk = await SLTDETHlpRewardJraaIsV.lastTimeRewardApplicable.call({from: accounts[3]});
		const boolGACBnF0 = await SLTDETHlpRewardJraaIsV.isOwner.call({from: accounts[3]});
		const uint256wOfxRDt = await SLTDETHlpRewardJraaIsV.balanceOf.call(addressMiHk0ph, {from: accounts[4]});
		const uint256MgbHx7t = await SLTDETHlpRewardJraaIsV.earned.call(addresslkCqVaM, {from: accounts[0]});
		const addressrqD75Lg = await SLTDETHlpRewardJraaIsV.setStakeAddress.call(addressLUVDLIH, {from: accounts[3]});
		const uint256rxlZ5TE = await SLTDETHlpRewardJraaIsV.notifyRewardAmount.call(uintRZUtdbn, {from: accounts[3]});

		await expect(SLTDETHlpRewardJraaIsV.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJraaIsV = await SLTDETHlpReward.new({from: accounts[3]});
		const addresszX6wnD8 = accounts[5]
		const addresseFpgPi5 = "0x0000000000000000000000000000000000000002"
		const uintGF5sC9o = BigInt("1509")
		const uintPaxz0ve = BigInt("1808")
		await SLTDETHlpRewardJraaIsV.getReward.call({from: accounts[3]});
		const uint256NFfpZAk = await SLTDETHlpRewardJraaIsV.lastTimeRewardApplicable.call({from: accounts[3]});
		const boolGACBnF0 = await SLTDETHlpRewardJraaIsV.isOwner.call({from: accounts[3]});
		const uint256RX8GJV2 = await SLTDETHlpRewardJraaIsV.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256rK1UuJw = await SLTDETHlpRewardJraaIsV.totalSupply.call({from: accounts[0]});
		const addressHqfWQd = await SLTDETHlpRewardJraaIsV.setRewardDistribution.call(addresszX6wnD8, {from: accounts[3]});
		const uint256KVhMpAf = await SLTDETHlpRewardJraaIsV.rewardPerToken.call({from: accounts[4]});
		const uint256MgbHx7t = await SLTDETHlpRewardJraaIsV.earned.call(addresseFpgPi5, {from: accounts[0]});
		const uint256rxlZ5TE = await SLTDETHlpRewardJraaIsV.notifyRewardAmount.call(uintGF5sC9o, {from: accounts[3]});
		const uint256HkaDdzM = await SLTDETHlpRewardJraaIsV.stake.call(uintPaxz0ve, {from: accounts[3]});

		await expect(SLTDETHlpRewardJraaIsV.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})