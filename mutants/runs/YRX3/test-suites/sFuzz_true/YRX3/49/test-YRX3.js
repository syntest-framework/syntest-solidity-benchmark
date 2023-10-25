const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3SBN8MZa = await YRX3.new({from: accounts[2]});
		const uintRbytNAD = BigInt("648")
		const uintmkq7x6 = BigInt("990")
		const uintuea1Lj9 = BigInt("1892")
		const uint2567IY5nA = await YRX3SBN8MZa.stake.call(uintRbytNAD, {from: accounts[0]});
		await YRX3SBN8MZa.renounceOwnership.call({from: accounts[3]});
		const uint256xt9vsTA = await YRX3SBN8MZa.stake.call(uintmkq7x6, {from: accounts[0]});
		const uint256ASMiAEn = await YRX3SBN8MZa.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256BeP8NCR = await YRX3SBN8MZa.stake.call(uintuea1Lj9, {from: accounts[4]});

		await expect(YRX3SBN8MZa.stake.call(uintRbytNAD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3u3SRlm = await YRX3.new({from: accounts[0]});
		const uintz8HABsj = BigInt("209")
		const addressD0jw9xt = accounts[3]
		const addressVcagzz9 = accounts[0]
		await YRX3u3SRlm.checkNextEpoch.call({from: accounts[4]});
		const uint256SFaDWc = await YRX3u3SRlm.withdraw.call(uintz8HABsj, {from: accounts[2]});
		const addressGrZAenq = await YRX3u3SRlm.setRewardDistribution.call(addressD0jw9xt, {from: accounts[0]});
		const addressP8UCBKV = await YRX3u3SRlm.toPayable.call(addressVcagzz9, {from: accounts[2]});

		await expect(YRX3u3SRlm.checkNextEpoch.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3xcnsOQT = await YRX3.new({from: accounts[1]});
		const addressoRA0xi = accounts[4]
		const addressp7CeATJ = await YRX3xcnsOQT.setRewardDistribution.call(addressoRA0xi, {from: accounts[4]});
		await YRX3xcnsOQT.checkStart.call({from: accounts[1]});

		await expect(YRX3xcnsOQT.setRewardDistribution.call(addressoRA0xi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3xawfUtP = await YRX3.new({from: accounts[5]});
		const uintqdpdLBN = BigInt("1351")
		const addressRsEByEB = accounts[0]
		const uint256PHV9b9o = await YRX3xawfUtP.withdraw.call(uintqdpdLBN, {from: accounts[2]});
		await YRX3xawfUtP.exit.call({from: accounts[0]});
		await YRX3xawfUtP.onlyOwner.call({from: accounts[2]});
		const uint2565MQjEB = await YRX3xawfUtP.rewardPerToken.call({from: accounts[1]});
		const addressf76ynfj = await YRX3xawfUtP.transferOwnership.call(addressRsEByEB, {from: accounts[3]});

		await expect(YRX3xawfUtP.withdraw.call(uintqdpdLBN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3dVmw6B = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVTyRZ6 = accounts[3]
		const addressQFl9ovl = accounts[1]
		const uintciDuqO = BigInt("22")
		const boolIX2t8kC = await YRX3dVmw6B.isOwner.call({from: accounts[3]});
		const addressQOCl0En = await YRX3dVmw6B.toPayable.call(addressVTyRZ6, {from: accounts[2]});
		await YRX3dVmw6B.notifyRewardAmount.call({from: accounts[2]});
		const addresswgaLIV = await YRX3dVmw6B.emergencyDrain.call(addressQFl9ovl, {from: accounts[1]});
		const uint256QoEI4iD = await YRX3dVmw6B.withdraw.call(uintciDuqO, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for YRX3', async () => {
		const YRX3SBN8MZa = await YRX3.new({from: accounts[2]});
		const uintXwE2l2b = BigInt("648")
		const uintAljEXVy = BigInt("990")
		const uintzuKVTct = BigInt("1892")
		await YRX3SBN8MZa.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2567IY5nA = await YRX3SBN8MZa.stake.call(uintXwE2l2b, {from: accounts[0]});
		await YRX3SBN8MZa.renounceOwnership.call({from: accounts[3]});
		const uint256xt9vsTA = await YRX3SBN8MZa.stake.call(uintAljEXVy, {from: accounts[0]});
		const uint256ASMiAEn = await YRX3SBN8MZa.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256BeP8NCR = await YRX3SBN8MZa.stake.call(uintzuKVTct, {from: accounts[4]});

		await expect(YRX3SBN8MZa.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3NdPU8JH = await YRX3.new({from: accounts[1]});
		const uintn2uGXZo = BigInt("1843")
		await YRX3NdPU8JH.exit.call({from: accounts[1]});
		const uint256Y2E5TOA = await YRX3NdPU8JH.stake.call(uintn2uGXZo, {from: accounts[4]});
		const boold6pJ9HT = await YRX3NdPU8JH.isOwner.call({from: accounts[3]});

		await expect(YRX3NdPU8JH.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3GJnrnW8 = await YRX3.new({from: accounts[3]});
		const addresshH5shog = accounts[5]
		const uintgWZ4KF = BigInt("1575")
		const addressycMlOtS = await YRX3GJnrnW8.transferOwnership.call(addresshH5shog, {from: accounts[3]});
		const uint256BgpJiq4 = await YRX3GJnrnW8.stake.call(uintgWZ4KF, {from: accounts[4]});

		await expect(YRX3GJnrnW8.stake.call(uintgWZ4KF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3A71y1qh = await YRX3.new({from: accounts[3]});
		const addressKKnjeyZ = "0x0000000000000000000000000000000000000001"
		const addressac1dmWK = accounts[3]
		const addressY87os0y = await YRX3A71y1qh.emergencyDrain.call(addressKKnjeyZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256SbmSYz = await YRX3A71y1qh.rewardPerToken.call({from: accounts[0]});
		const addressbQIvDvJ = await YRX3A71y1qh.setRewardDistribution.call(addressac1dmWK, {from: accounts[2]});

		await expect(YRX3A71y1qh.emergencyDrain.call(addressKKnjeyZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3GJnrnW8 = await YRX3.new({from: accounts[3]});
		const addressjDkAXIw = accounts[6]
		const uintika9o9Z = BigInt("1575")
		const addressycMlOtS = await YRX3GJnrnW8.transferOwnership.call(addressjDkAXIw, {from: accounts[3]});
		await YRX3GJnrnW8.renounceOwnership.call({from: accounts[3]});
		const uint256BgpJiq4 = await YRX3GJnrnW8.stake.call(uintika9o9Z, {from: accounts[4]});

		await expect(YRX3GJnrnW8.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3xcnsOQT = await YRX3.new({from: accounts[1]});
		const addresswQTULEc = accounts[5]
		const addressIZ1UWyu = await YRX3xcnsOQT.owner.call({from: accounts[3]});
		const addressp7CeATJ = await YRX3xcnsOQT.setRewardDistribution.call(addresswQTULEc, {from: accounts[4]});

		assert.equal(addressIZ1UWyu, 0x55D17a699F1e22Eb53356394BE4aa366E49d6DaE)
		await expect(YRX3xcnsOQT.setRewardDistribution.call(addresswQTULEc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3A71y1qh = await YRX3.new({from: accounts[3]});
		const addressM5VVMcB = accounts[1]
		const uint256SbmSYz = await YRX3A71y1qh.rewardPerToken.call({from: accounts[0]});
		const addressF6IRSPx = await YRX3A71y1qh.setRewardDistribution.call(addressM5VVMcB, {from: accounts[3]});

		assert.equal(uint256SbmSYz, BigInt("0"))
	});
})