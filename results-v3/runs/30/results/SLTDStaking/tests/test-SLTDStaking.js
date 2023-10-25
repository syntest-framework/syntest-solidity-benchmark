const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingzbH0xOv = await SLTDStaking.new({from: accounts[0]});
		const address5QARUt = accounts[4]
		const addressB8JvEvh = accounts[4]
		const uintNdis5YC = BigInt("130")
		const addressualzMpT = await SLTDStakingzbH0xOv.setRewardDistribution.call(address5QARUt, {from: accounts[5]});
		const boolDFLPtIz = await SLTDStakingzbH0xOv.isOwner.call({from: accounts[4]});
		const uint256Zl4UNWB = await SLTDStakingzbH0xOv.earned.call(addressB8JvEvh, {from: accounts[0]});
		const uint256F5qEF9W = await SLTDStakingzbH0xOv.withdraw.call(uintNdis5YC, {from: accounts[4]});

		await expect(SLTDStakingzbH0xOv.setRewardDistribution.call(address5QARUt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingrc2F3x = await SLTDStaking.new({from: accounts[2]});
		await SLTDStakingrc2F3x.onlyOwner.call({from: accounts[3]});
		const uint256nftK0Eb = await SLTDStakingrc2F3x.totalSupply.call({from: accounts[3]});

		await expect(SLTDStakingrc2F3x.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingJa7Nog6 = await SLTDStaking.new({from: accounts[3]});
		const addressazABWky = "0x0000000000000000000000000000000000000001"
		const addressrxxxZsM = accounts[4]
		const addressAjrjlF = accounts[4]
		const uint256CoObPGQ = await SLTDStakingJa7Nog6.earned.call(addressazABWky, {from: accounts[2]});
		const uint256Jxd5Gz = await SLTDStakingJa7Nog6.balanceOf.call(addressrxxxZsM, {from: accounts[0]});
		await SLTDStakingJa7Nog6.onlyRewardDistribution.call({from: accounts[5]});
		const addressXkxMDg4 = await SLTDStakingJa7Nog6.updateReward.call(addressAjrjlF, {from: accounts[1]});

		assert.equal(uint256CoObPGQ, BigInt("0"))
		assert.equal(uint256Jxd5Gz, BigInt("0"))
		await expect(SLTDStakingJa7Nog6.onlyRewardDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingscj9e5 = await SLTDStaking.new({from: accounts[2]});
		const uint256FhDHN1M = await SLTDStakingscj9e5.rewardPerToken.call({from: accounts[1]});
		await SLTDStakingscj9e5.getReward.call({from: accounts[2]});
		await SLTDStakingscj9e5.renounceOwnership.call({from: accounts[4]});
		await SLTDStakingscj9e5.exit.call({from: accounts[3]});

		assert.equal(uint256FhDHN1M, BigInt("0"))
		await expect(SLTDStakingscj9e5.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingq3T38V0 = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressI2ebzr9 = accounts[3]
		const addressFz6SNn = accounts[4]
		const addressLAPHuPI = accounts[4]
		const addressQ1waaO7 = "0x0000000000000000000000000000000000000001"
		const addresskJyX9iS = await SLTDStakingq3T38V0.transferOwnership.call(addressI2ebzr9, {from: accounts[2]});
		const uint256EWPGvw = await SLTDStakingq3T38V0.totalSupply.call({from: accounts[0]});
		const addressr73eO1n = await SLTDStakingq3T38V0.transferOwnership.call(addressFz6SNn, {from: accounts[2]});
		const addressS1si4vB = await SLTDStakingq3T38V0.setSLTD.call(addressQ1waaO7, addressLAPHuPI, {from: accounts[2]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingT6t1bhu = await SLTDStaking.new({from: accounts[4]});
		const addresslCgEdN = accounts[2]
		const addressrLvE5YB = accounts[3]
		const booliUQV7m3 = await SLTDStakingT6t1bhu.isOwner.call({from: accounts[3]});
		const boolubGAuLC = await SLTDStakingT6t1bhu.isOwner.call({from: accounts[0]});
		const addressue1NYkj = await SLTDStakingT6t1bhu.owner.call({from: accounts[2]});
		const uint256zVSJDV6 = await SLTDStakingT6t1bhu.totalSupply.call({from: accounts[1]});
		const addressH6cSwl = await SLTDStakingT6t1bhu.setSLTD.call(addressrLvE5YB, addresslCgEdN, {from: accounts[5]});

		assert.equal(addressue1NYkj, 0x46ecb097b628E4a4767b625E0991523122243ce2)
		assert.equal(booliUQV7m3, false)
		assert.equal(boolubGAuLC, false)
		assert.equal(uint256zVSJDV6, BigInt("0"))
		await expect(SLTDStakingT6t1bhu.setSLTD.call(addressrLvE5YB, addresslCgEdN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingwOgXfZv = await SLTDStaking.new({from: accounts[0]});
		const addressxWUspzd = accounts[0]
		const addressDNyDbXx = accounts[4]
		const addressJUXXVsT = accounts[3]
		const addressM4IMP7D = accounts[2]
		await SLTDStakingwOgXfZv.exit.call({from: accounts[1]});
		const addresskCf3I4R = await SLTDStakingwOgXfZv.setSLTD.call(addressDNyDbXx, addressxWUspzd, {from: "0x0000000000000000000000000000000000000001"});
		const addressjQypDaT = await SLTDStakingwOgXfZv.transferOwnership.call(addressJUXXVsT, {from: "0x0000000000000000000000000000000000000001"});
		const addressyUFooo = await SLTDStakingwOgXfZv.setRewardDistribution.call(addressM4IMP7D, {from: accounts[3]});
		const uint256NATYfhP = await SLTDStakingwOgXfZv.totalSupply.call({from: accounts[1]});

		await expect(SLTDStakingwOgXfZv.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingzzuCLdH = await SLTDStaking.new({from: accounts[0]});
		const uintFMVWs1N = BigInt("125")
		const uintjoh2WN = BigInt("50")
		const uint256rkfcBvN = await SLTDStakingzzuCLdH.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256UologHU = await SLTDStakingzzuCLdH.withdraw.call(uintFMVWs1N, {from: accounts[4]});
		const boolVl0m7V6 = await SLTDStakingzzuCLdH.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint25610uvmy = await SLTDStakingzzuCLdH.stake.call(uintjoh2WN, {from: accounts[4]});

		assert.equal(uint256rkfcBvN, BigInt("0"))
		await expect(SLTDStakingzzuCLdH.withdraw.call(uintFMVWs1N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingCKiyAL9 = await SLTDStaking.new({from: accounts[4]});
		const uintrS8OnVA = BigInt("1235")
		const addressRfOs7dp = accounts[0]
		await SLTDStakingCKiyAL9.getReward.call({from: accounts[3]});
		const uint256Huvv7w6 = await SLTDStakingCKiyAL9.stake.call(uintrS8OnVA, {from: accounts[1]});
		const uint256W2TYmm1 = await SLTDStakingCKiyAL9.earned.call(addressRfOs7dp, {from: accounts[3]});
		const uint256ira7t4T = await SLTDStakingCKiyAL9.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(SLTDStakingCKiyAL9.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingrc2F3x = await SLTDStaking.new({from: accounts[2]});
		const uintNdyHOwL = BigInt("862")
		await SLTDStakingrc2F3x.renounceOwnership.call({from: accounts[2]});
		const uint256UA3hSjW = await SLTDStakingrc2F3x.stake.call(uintNdyHOwL, {from: accounts[3]});
		const uint256nftK0Eb = await SLTDStakingrc2F3x.totalSupply.call({from: accounts[3]});

		await expect(SLTDStakingrc2F3x.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingWD90Y2h = await SLTDStaking.new({from: accounts[2]});
		const addressZ03CmwT = accounts[0]
		const addressb3RSbKm = accounts[0]
		const uint256xquBbAP = await SLTDStakingWD90Y2h.balanceOf.call(addressZ03CmwT, {from: accounts[1]});
		const addresswtC2mBw = await SLTDStakingWD90Y2h.transferOwnership.call(addressb3RSbKm, {from: accounts[2]});

		assert.equal(uint256xquBbAP, BigInt("0"))
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingscj9e5 = await SLTDStaking.new({from: accounts[2]});
		const addressKhviud8 = accounts[2]
		const addressblEnoDm = accounts[2]
		const addresswxgJ3C9 = accounts[1]
		await SLTDStakingscj9e5.getReward.call({from: accounts[2]});
		const addressKGbji2X = await SLTDStakingscj9e5.setRewardDistribution.call(addressKhviud8, {from: accounts[2]});
		const addressUDfWuRN = await SLTDStakingscj9e5.setRewardDistribution.call(addressblEnoDm, {from: accounts[1]});
		const uint256XzL3eHN = await SLTDStakingscj9e5.balanceOf.call(addresswxgJ3C9, {from: accounts[3]});

		await expect(SLTDStakingscj9e5.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})