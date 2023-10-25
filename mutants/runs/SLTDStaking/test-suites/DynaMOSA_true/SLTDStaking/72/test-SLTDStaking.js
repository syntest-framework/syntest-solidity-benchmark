const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingfWPU97 = await SLTDStaking.new({from: accounts[2]});
		const addressTtL9La = accounts[1]
		const boolz39rS7h = await SLTDStakingfWPU97.isOwner.call({from: accounts[0]});
		const addresssgmf2dL = await SLTDStakingfWPU97.updateReward.call(addressTtL9La, {from: accounts[3]});

		assert.equal(boolz39rS7h, false)
		await expect(SLTDStakingfWPU97.updateReward.call(addressTtL9La, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingIE9OTbR = await SLTDStaking.new({from: accounts[0]});
		const uintcS0Why1 = BigInt("1894")
		const addressYwr7KpT = "0x0000000000000000000000000000000000000001"
		const uintQ4Uco7 = BigInt("1799")
		const uint256DSZWspJ = await SLTDStakingIE9OTbR.stake.call(uintcS0Why1, {from: accounts[0]});
		const addressupL66ix = await SLTDStakingIE9OTbR.updateReward.call(addressYwr7KpT, {from: accounts[3]});
		await SLTDStakingIE9OTbR.onlyRewardDistribution.call({from: accounts[4]});
		const uint256YVCRz2c = await SLTDStakingIE9OTbR.notifyRewardAmount.call(uintQ4Uco7, {from: accounts[0]});

		await expect(SLTDStakingIE9OTbR.stake.call(uintcS0Why1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakinghAeH7Hq = await SLTDStaking.new({from: accounts[0]});
		const uintow9nITh = BigInt("799")
		const uintrANpROJ = BigInt("1211")
		const uintbYgiZ4m = BigInt("1679")
		const uint256JvfplqV = await SLTDStakinghAeH7Hq.rewardPerToken.call({from: accounts[2]});
		const uint256SOPgyzm = await SLTDStakinghAeH7Hq.withdraw.call(uintow9nITh, {from: accounts[5]});
		const uint256MBCCYq = await SLTDStakinghAeH7Hq.withdraw.call(uintrANpROJ, {from: accounts[4]});
		await SLTDStakinghAeH7Hq.getReward.call({from: accounts[1]});
		const uint256SYV20j = await SLTDStakinghAeH7Hq.withdraw.call(uintbYgiZ4m, {from: accounts[5]});

		assert.equal(uint256JvfplqV, BigInt("0"))
		await expect(SLTDStakinghAeH7Hq.withdraw.call(uintow9nITh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingwBXuvpW = await SLTDStaking.new({from: accounts[5]});
		const addressuNM09UW = accounts[4]
		const uintemmivWf = BigInt("1911")
		await SLTDStakingwBXuvpW.exit.call({from: accounts[2]});
		const boolEqe5QCc = await SLTDStakingwBXuvpW.isOwner.call({from: accounts[0]});
		await SLTDStakingwBXuvpW.onlyOwner.call({from: accounts[1]});
		const uint256ydOChZZ = await SLTDStakingwBXuvpW.balanceOf.call(addressuNM09UW, {from: accounts[3]});
		const uint256Y1ltnzE = await SLTDStakingwBXuvpW.withdraw.call(uintemmivWf, {from: accounts[5]});

		await expect(SLTDStakingwBXuvpW.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakinghlB8FOV = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addresst0bcBWm = "0x0000000000000000000000000000000000000001"
		const addressB42AGJ = accounts[1]
		const uintxRylkOD = BigInt("695")
		const addressaLgk63q = accounts[0]
		const uintR0CurNo = BigInt("1235")
		const addressEaWBxGY = accounts[4]
		const addressrGf8lIa = accounts[1]
		const addressBKTM872 = await SLTDStakinghlB8FOV.setSLTD.call(addressB42AGJ, addresst0bcBWm, {from: accounts[3]});
		const uint256lDNcbBI = await SLTDStakinghlB8FOV.withdraw.call(uintxRylkOD, {from: accounts[2]});
		const uint256SuarrR = await SLTDStakinghlB8FOV.balanceOf.call(addressaLgk63q, {from: accounts[3]});
		const uint256sxT37nc = await SLTDStakinghlB8FOV.notifyRewardAmount.call(uintR0CurNo, {from: accounts[4]});
		const uint256hyDBTS = await SLTDStakinghlB8FOV.earned.call(addressEaWBxGY, {from: accounts[2]});
		const addressgoTc37A = await SLTDStakinghlB8FOV.transferOwnership.call(addressrGf8lIa, {from: accounts[3]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingFnIieh = await SLTDStaking.new({from: accounts[0]});
		const uintuiAVR49 = BigInt("1833")
		const uintZYoVHG = BigInt("630")
		await SLTDStakingFnIieh.renounceOwnership.call({from: accounts[0]});
		const uint256em58HYc = await SLTDStakingFnIieh.notifyRewardAmount.call(uintuiAVR49, {from: accounts[1]});
		const uint256FzF5AM = await SLTDStakingFnIieh.withdraw.call(uintZYoVHG, {from: accounts[5]});

		await expect(SLTDStakingFnIieh.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingQ8BmNne = await SLTDStaking.new({from: accounts[1]});
		const addressd2A7oxg = accounts[2]
		await SLTDStakingQ8BmNne.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressTC3paEq = await SLTDStakingQ8BmNne.transferOwnership.call(addressd2A7oxg, {from: accounts[1]});
		const booleniczw = await SLTDStakingQ8BmNne.isOwner.call({from: accounts[4]});

		await expect(SLTDStakingQ8BmNne.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingyqtb0ll = await SLTDStaking.new({from: accounts[4]});
		const addresshL5UXKP = accounts[0]
		const addresskOGdheI = accounts[0]
		const uintU90KvvG = BigInt("1530")
		await SLTDStakingyqtb0ll.renounceOwnership.call({from: accounts[2]});
		await SLTDStakingyqtb0ll.onlyOwner.call({from: accounts[5]});
		const addresslCPylNJ = await SLTDStakingyqtb0ll.transferOwnership.call(addresshL5UXKP, {from: accounts[4]});
		const addressaqoGGXr = await SLTDStakingyqtb0ll.transferOwnership.call(addresskOGdheI, {from: accounts[1]});
		const uint256J0P23Bp = await SLTDStakingyqtb0ll.withdraw.call(uintU90KvvG, {from: accounts[2]});

		await expect(SLTDStakingyqtb0ll.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingQ8BmNne = await SLTDStaking.new({from: accounts[1]});
		const addressD6Jay1n = accounts[4]
		await SLTDStakingQ8BmNne.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256HgMQiuF = await SLTDStakingQ8BmNne.rewardPerToken.call({from: accounts[4]});
		const addressqDb2v2P = await SLTDStakingQ8BmNne.owner.call({from: accounts[4]});
		const addressTC3paEq = await SLTDStakingQ8BmNne.transferOwnership.call(addressD6Jay1n, {from: accounts[1]});

		await expect(SLTDStakingQ8BmNne.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakings1nwHAh = await SLTDStaking.new({from: accounts[3]});
		const addressQk11nbE = accounts[3]
		const uintOlEk085 = BigInt("661")
		const addressdpvJWCf = accounts[2]
		const addressgkXM0xO = accounts[3]
		const uintq8fGRQJ = BigInt("714")
		const addressaEIKAQl = await SLTDStakings1nwHAh.setRewardDistribution.call(addressQk11nbE, {from: accounts[3]});
		await SLTDStakings1nwHAh.getReward.call({from: accounts[3]});
		const uint256oux5xxb = await SLTDStakings1nwHAh.stake.call(uintOlEk085, {from: accounts[3]});
		const addressLZLzW2e = await SLTDStakings1nwHAh.setSLTD.call(addressgkXM0xO, addressdpvJWCf, {from: accounts[3]});
		const uint256PkhaSEq = await SLTDStakings1nwHAh.notifyRewardAmount.call(uintq8fGRQJ, {from: accounts[1]});

		await expect(SLTDStakings1nwHAh.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})