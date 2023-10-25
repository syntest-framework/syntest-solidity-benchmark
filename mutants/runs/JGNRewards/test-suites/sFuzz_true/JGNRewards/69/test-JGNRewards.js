const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsBePmsU8 = await JGNRewards.new({from: accounts[5]});
		const uint256N4S14Xv = await JGNRewardsBePmsU8.lastTimeRewardApplicable.call({from: accounts[5]});
		await JGNRewardsBePmsU8.getReward.call({from: accounts[4]});

		assert.equal(uint256N4S14Xv, BigInt("0"))
		await expect(JGNRewardsBePmsU8.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsCknWuom = await JGNRewards.new({from: accounts[0]});
		const uintOVuiVmF = BigInt("669")
		const addresskzXXdMi = accounts[4]
		const uint256HoOR7z = await JGNRewardsCknWuom.stake.call(uintOVuiVmF, {from: accounts[4]});
		const uint256UFDwELS = await JGNRewardsCknWuom.rewardPerToken.call({from: accounts[4]});
		const uint256cBBshLu = await JGNRewardsCknWuom.earned.call(addresskzXXdMi, {from: accounts[2]});
		await JGNRewardsCknWuom.getReward.call({from: accounts[2]});

		await expect(JGNRewardsCknWuom.stake.call(uintOVuiVmF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsNKJts11 = await JGNRewards.new({from: accounts[2]});
		const uintDjYXNAD = BigInt("1104")
		const uintrgq6ktR = BigInt("1696")
		const uint256BBy6jia = await JGNRewardsNKJts11.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256xmn5dyL = await JGNRewardsNKJts11.notifyRewardAmount.call(uintDjYXNAD, {from: accounts[5]});
		const uint256SRVd9pv = await JGNRewardsNKJts11.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pgsU5QU = await JGNRewardsNKJts11.stake.call(uintrgq6ktR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NFCeLbz = await JGNRewardsNKJts11.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256cN5StLo = await JGNRewardsNKJts11.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256BBy6jia, BigInt("0"))
		await expect(JGNRewardsNKJts11.notifyRewardAmount.call(uintDjYXNAD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsPveP8YM = await JGNRewards.new({from: accounts[0]});
		const addressH7cMV2N = accounts[2]
		await JGNRewardsPveP8YM.getReward.call({from: accounts[0]});
		await JGNRewardsPveP8YM.checkStart.call({from: accounts[1]});
		const addressRbLETby = await JGNRewardsPveP8YM.updateReward.call(addressH7cMV2N, {from: accounts[2]});

		await expect(JGNRewardsPveP8YM.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardskV6RsXk = await JGNRewards.new({from: accounts[1]});
		const uintJ2Qn3H = BigInt("1017")
		const uintp3dxPiA = BigInt("138")
		const uint256vfdRYqK = await JGNRewardskV6RsXk.withdraw.call(uintJ2Qn3H, {from: accounts[3]});
		const uint2567IOhGz = await JGNRewardskV6RsXk.withdraw.call(uintp3dxPiA, {from: accounts[2]});
		await JGNRewardskV6RsXk.getReward.call({from: accounts[1]});

		await expect(JGNRewardskV6RsXk.withdraw.call(uintJ2Qn3H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewards4VY2PH = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrEA0bDD = "0x0000000000000000000000000000000000000001"
		const uintwAntu2S = BigInt("1645")
		const uintEVsgXWK = BigInt("1486")
		const uintxyzjNx = BigInt("1627")
		const addressoQJUwDL = await JGNRewards4VY2PH.updateReward.call(addressrEA0bDD, {from: accounts[4]});
		const uint256TMQMrd6 = await JGNRewards4VY2PH.stake.call(uintwAntu2S, {from: accounts[0]});
		await JGNRewards4VY2PH.getReward.call({from: accounts[4]});
		const uint256PAEUDgE = await JGNRewards4VY2PH.withdraw.call(uintEVsgXWK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256h48JYRO = await JGNRewards4VY2PH.stake.call(uintxyzjNx, {from: accounts[3]});
		const uint256Aw1MFWx = await JGNRewards4VY2PH.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsBePmsU8 = await JGNRewards.new({from: accounts[5]});
		const addressne3j55L = accounts[2]
		const uint256N4S14Xv = await JGNRewardsBePmsU8.lastTimeRewardApplicable.call({from: accounts[5]});
		await JGNRewardsBePmsU8.exit.call({from: accounts[0]});
		await JGNRewardsBePmsU8.exit.call({from: accounts[4]});
		const uint256uP5r6QI = await JGNRewardsBePmsU8.earned.call(addressne3j55L, {from: accounts[1]});
		await JGNRewardsBePmsU8.getReward.call({from: accounts[4]});

		assert.equal(uint256N4S14Xv, BigInt("0"))
		await expect(JGNRewardsBePmsU8.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})