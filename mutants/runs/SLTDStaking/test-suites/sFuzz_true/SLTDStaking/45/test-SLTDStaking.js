const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingaqMj2Y2 = await SLTDStaking.new({from: accounts[3]});
		const uintD1yEJ4Z = BigInt("1756")
		const addressck3fG2f = accounts[0]
		const uint256JdiRh2M = await SLTDStakingaqMj2Y2.withdraw.call(uintD1yEJ4Z, {from: accounts[2]});
		const addressNNzIeEv = await SLTDStakingaqMj2Y2.setRewardDistribution.call(addressck3fG2f, {from: accounts[1]});

		await expect(SLTDStakingaqMj2Y2.withdraw.call(uintD1yEJ4Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingTHTtMqs = await SLTDStaking.new({from: accounts[4]});
		const uintugOFkAV = BigInt("1822")
		const addressWzgQ8yK = accounts[1]
		const uint256oQDVfi5 = await SLTDStakingTHTtMqs.stake.call(uintugOFkAV, {from: accounts[0]});
		await SLTDStakingTHTtMqs.onlyOwner.call({from: accounts[5]});
		await SLTDStakingTHTtMqs.onlyOwner.call({from: accounts[3]});
		const addressR7li5Iz = await SLTDStakingTHTtMqs.transferOwnership.call(addressWzgQ8yK, {from: accounts[0]});

		await expect(SLTDStakingTHTtMqs.stake.call(uintugOFkAV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingzk98ryL = await SLTDStaking.new({from: accounts[5]});
		const addressyS6lzs1 = accounts[5]
		const addressbS8i0OR = accounts[5]
		const addressDRAvSVr = accounts[0]
		const addressEBRGaxF = accounts[1]
		const uint256znSy35z = await SLTDStakingzk98ryL.earned.call(addressyS6lzs1, {from: accounts[3]});
		const boolivNtkkx = await SLTDStakingzk98ryL.isOwner.call({from: accounts[1]});
		const uint256mvhbV0y = await SLTDStakingzk98ryL.balanceOf.call(addressbS8i0OR, {from: accounts[4]});
		const addressJAvBSeb = await SLTDStakingzk98ryL.setSLTD.call(addressEBRGaxF, addressDRAvSVr, {from: accounts[4]});

		assert.equal(boolivNtkkx, false)
		assert.equal(uint256mvhbV0y, BigInt("0"))
		assert.equal(uint256znSy35z, BigInt("0"))
		await expect(SLTDStakingzk98ryL.setSLTD.call(addressEBRGaxF, addressDRAvSVr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingUSMizyK = await SLTDStaking.new({from: accounts[5]});
		const addressbJT997K = accounts[1]
		await SLTDStakingUSMizyK.onlyOwner.call({from: accounts[4]});
		await SLTDStakingUSMizyK.onlyOwner.call({from: accounts[2]});
		const addressvpRit3Q = await SLTDStakingUSMizyK.updateReward.call(addressbJT997K, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingUSMizyK.getReward.call({from: accounts[0]});
		await SLTDStakingUSMizyK.getReward.call({from: accounts[3]});

		await expect(SLTDStakingUSMizyK.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingPsT3hk = await SLTDStaking.new({from: accounts[0]});
		const uintEiwtqI0 = BigInt("1")
		await SLTDStakingPsT3hk.renounceOwnership.call({from: accounts[2]});
		await SLTDStakingPsT3hk.onlyOwner.call({from: accounts[2]});
		const uint256gD8RTls = await SLTDStakingPsT3hk.withdraw.call(uintEiwtqI0, {from: accounts[4]});

		await expect(SLTDStakingPsT3hk.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingaqMj2Y2 = await SLTDStaking.new({from: accounts[3]});
		const addresscpT6Cp = accounts[3]
		const uintgf99Jz = BigInt("1756")
		const uint256mHdsqTv = await SLTDStakingaqMj2Y2.earned.call(addresscpT6Cp, {from: accounts[3]});
		const addressKGI2eKW = await SLTDStakingaqMj2Y2.owner.call({from: accounts[3]});
		const uint256JdiRh2M = await SLTDStakingaqMj2Y2.withdraw.call(uintgf99Jz, {from: accounts[2]});

		assert.equal(addressKGI2eKW, 0x0d8a17108d79A8B79A41f9b2D5415A814254702D)
		assert.equal(uint256mHdsqTv, BigInt("0"))
		await expect(SLTDStakingaqMj2Y2.withdraw.call(uintgf99Jz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSH5oMCM = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDxn6wAr = BigInt("1888")
		const uint256PZGlwlN = await SLTDStakingSH5oMCM.rewardPerToken.call({from: accounts[4]});
		await SLTDStakingSH5oMCM.exit.call({from: accounts[3]});
		const uint256VHewXtS = await SLTDStakingSH5oMCM.totalSupply.call({from: accounts[1]});
		const uint256cZzigA6 = await SLTDStakingSH5oMCM.rewardPerToken.call({from: accounts[1]});
		const uint256GDVtdK = await SLTDStakingSH5oMCM.withdraw.call(uintDxn6wAr, {from: accounts[3]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingaqMj2Y2 = await SLTDStaking.new({from: accounts[3]});
		const addressV30QvjK = accounts[2]
		const uintdXFfIeX = BigInt("1748")
		const addressCyNxOU7 = await SLTDStakingaqMj2Y2.transferOwnership.call(addressV30QvjK, {from: accounts[3]});
		const uint256UsfY9S8 = await SLTDStakingaqMj2Y2.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256JdiRh2M = await SLTDStakingaqMj2Y2.withdraw.call(uintdXFfIeX, {from: accounts[2]});

		assert.equal(uint256UsfY9S8, BigInt("0"))
		await expect(SLTDStakingaqMj2Y2.withdraw.call(uintdXFfIeX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingaqMj2Y2 = await SLTDStaking.new({from: accounts[3]});
		const uintILn92aI = BigInt("1758")
		await SLTDStakingaqMj2Y2.exit.call({from: accounts[1]});
		const uint256JdiRh2M = await SLTDStakingaqMj2Y2.withdraw.call(uintILn92aI, {from: accounts[2]});

		await expect(SLTDStakingaqMj2Y2.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingaqMj2Y2 = await SLTDStaking.new({from: accounts[3]});
		const uintIBSpcTD = BigInt("1734")
		await SLTDStakingaqMj2Y2.getReward.call({from: accounts[4]});
		const uint256JdiRh2M = await SLTDStakingaqMj2Y2.withdraw.call(uintIBSpcTD, {from: accounts[2]});
		await SLTDStakingaqMj2Y2.onlyRewardDistribution.call({from: accounts[4]});

		await expect(SLTDStakingaqMj2Y2.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingaqMj2Y2 = await SLTDStaking.new({from: accounts[3]});
		const uintEcHo05L = BigInt("417")
		const uintvsNDJRu = BigInt("1756")
		const uint256DSr8p3r = await SLTDStakingaqMj2Y2.rewardPerToken.call({from: accounts[3]});
		await SLTDStakingaqMj2Y2.renounceOwnership.call({from: accounts[3]});
		const uint256Dg4hN65 = await SLTDStakingaqMj2Y2.notifyRewardAmount.call(uintEcHo05L, {from: accounts[4]});
		const uint256JdiRh2M = await SLTDStakingaqMj2Y2.withdraw.call(uintvsNDJRu, {from: accounts[2]});

		assert.equal(uint256DSr8p3r, BigInt("0"))
		await expect(SLTDStakingaqMj2Y2.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingaqMj2Y2 = await SLTDStaking.new({from: accounts[3]});
		const addressq38Mcnj = accounts[2]
		const uintjmah9xb = BigInt("1714")
		const addressV8Ru9vF = "0x0000000000000000000000000000000000000001"
		const addressTOyVfyO = await SLTDStakingaqMj2Y2.setRewardDistribution.call(addressq38Mcnj, {from: accounts[3]});
		const uint256JdiRh2M = await SLTDStakingaqMj2Y2.withdraw.call(uintjmah9xb, {from: accounts[2]});
		const addressDuEOAqM = await SLTDStakingaqMj2Y2.updateReward.call(addressV8Ru9vF, {from: accounts[3]});
		const uint256GQHJ8FQ = await SLTDStakingaqMj2Y2.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(SLTDStakingaqMj2Y2.withdraw.call(uintjmah9xb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})