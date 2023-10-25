const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsBePmsU8 = await SSTRewards.new({from: accounts[5]});
		const uint256N4S14Xv = await SSTRewardsBePmsU8.lastTimeRewardApplicable.call({from: accounts[5]});
//		await SSTRewardsBePmsU8.getReward.call({from: accounts[4]});

		assert.equal(uint256N4S14Xv, BigInt("0"))
		await expect(SSTRewardsBePmsU8.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsCknWuom = await SSTRewards.new({from: accounts[0]});
		const uintOVuiVmF = BigInt("669")
		const addresskzXXdMi = accounts[4]
//		const uint256HoOR7z = await SSTRewardsCknWuom.stake.call(uintOVuiVmF, {from: accounts[4]});
//		const uint256UFDwELS = await SSTRewardsCknWuom.rewardPerToken.call({from: accounts[4]});
//		const uint256cBBshLu = await SSTRewardsCknWuom.earned.call(addresskzXXdMi, {from: accounts[2]});
//		await SSTRewardsCknWuom.getReward.call({from: accounts[2]});

		await expect(SSTRewardsCknWuom.stake.call(uintOVuiVmF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsNKJts11 = await SSTRewards.new({from: accounts[2]});
		const uintDjYXNAD = BigInt("1104")
		const uintrgq6ktR = BigInt("1696")
		const uint256BBy6jia = await SSTRewardsNKJts11.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256xmn5dyL = await SSTRewardsNKJts11.notifyRewardAmount.call(uintDjYXNAD, {from: accounts[5]});
//		const uint256SRVd9pv = await SSTRewardsNKJts11.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256pgsU5QU = await SSTRewardsNKJts11.stake.call(uintrgq6ktR, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256NFCeLbz = await SSTRewardsNKJts11.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256cN5StLo = await SSTRewardsNKJts11.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256BBy6jia, BigInt("0"))
		await expect(SSTRewardsNKJts11.notifyRewardAmount.call(uintDjYXNAD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsPveP8YM = await SSTRewards.new({from: accounts[0]});
		const addressH7cMV2N = accounts[2]
//		await SSTRewardsPveP8YM.getReward.call({from: accounts[0]});
//		await SSTRewardsPveP8YM.checkStart.call({from: accounts[1]});
//		const addressRbLETby = await SSTRewardsPveP8YM.updateReward.call(addressH7cMV2N, {from: accounts[2]});

		await expect(SSTRewardsPveP8YM.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardskV6RsXk = await SSTRewards.new({from: accounts[1]});
		const uintJ2Qn3H = BigInt("1017")
		const uintp3dxPiA = BigInt("138")
//		const uint256vfdRYqK = await SSTRewardskV6RsXk.withdraw.call(uintJ2Qn3H, {from: accounts[3]});
//		const uint2567IOhGz = await SSTRewardskV6RsXk.withdraw.call(uintp3dxPiA, {from: accounts[2]});
//		await SSTRewardskV6RsXk.getReward.call({from: accounts[1]});

		await expect(SSTRewardskV6RsXk.withdraw.call(uintJ2Qn3H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewards4VY2PH = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrEA0bDD = "0x0000000000000000000000000000000000000001"
		const uintwAntu2S = BigInt("1645")
		const uintEVsgXWK = BigInt("1486")
		const uintxyzjNx = BigInt("1627")
		const addressoQJUwDL = await SSTRewards4VY2PH.updateReward.call(addressrEA0bDD, {from: accounts[4]});
		const uint256TMQMrd6 = await SSTRewards4VY2PH.stake.call(uintwAntu2S, {from: accounts[0]});
		await SSTRewards4VY2PH.getReward.call({from: accounts[4]});
		const uint256PAEUDgE = await SSTRewards4VY2PH.withdraw.call(uintEVsgXWK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256h48JYRO = await SSTRewards4VY2PH.stake.call(uintxyzjNx, {from: accounts[3]});
		const uint256Aw1MFWx = await SSTRewards4VY2PH.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsBePmsU8 = await SSTRewards.new({from: accounts[5]});
		const addressne3j55L = accounts[2]
		const uint256N4S14Xv = await SSTRewardsBePmsU8.lastTimeRewardApplicable.call({from: accounts[5]});
//		await SSTRewardsBePmsU8.exit.call({from: accounts[0]});
//		await SSTRewardsBePmsU8.exit.call({from: accounts[4]});
//		const uint256uP5r6QI = await SSTRewardsBePmsU8.earned.call(addressne3j55L, {from: accounts[1]});
//		await SSTRewardsBePmsU8.getReward.call({from: accounts[4]});

		assert.equal(uint256N4S14Xv, BigInt("0"))
		await expect(SSTRewardsBePmsU8.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})