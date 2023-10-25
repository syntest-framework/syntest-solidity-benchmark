const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsKG6V3MV = await SSTRewards.new({from: accounts[0]});
		const uintoRm4cr3 = BigInt("2028")
		const addressLU5Dcv9 = "0x0000000000000000000000000000000000000001"
		const uintjBjrHk = BigInt("1551")
		const addressKtmk8MZ = accounts[0]
		await SSTRewardsKG6V3MV.exit.call({from: accounts[5]});
		const uint256JqPHHK = await SSTRewardsKG6V3MV.stake.call(uintoRm4cr3, {from: accounts[2]});
		await SSTRewardsKG6V3MV.exit.call({from: accounts[4]});
		const addressIFmYQJL = await SSTRewardsKG6V3MV.updateReward.call(addressLU5Dcv9, {from: accounts[3]});
		const uint256HKIIYdp = await SSTRewardsKG6V3MV.withdraw.call(uintjBjrHk, {from: accounts[5]});
		const uint256HnMeCJa = await SSTRewardsKG6V3MV.earned.call(addressKtmk8MZ, {from: accounts[3]});

		await expect(SSTRewardsKG6V3MV.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsirqmzdt = await SSTRewards.new({from: accounts[2]});
		const uintKyOxUIP = BigInt("1020")
		const uintv64QIt6 = BigInt("1803")
		const uinthdEqEzI = BigInt("1796")
		const addressjPQTMzl = accounts[4]
		const uint256cBHsfQk = await SSTRewardsirqmzdt.withdraw.call(uintKyOxUIP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mBiiI7e = await SSTRewardsirqmzdt.withdraw.call(uintv64QIt6, {from: accounts[4]});
		const uint256yZj6ZDK = await SSTRewardsirqmzdt.stake.call(uinthdEqEzI, {from: accounts[4]});
		await SSTRewardsirqmzdt.exit.call({from: accounts[5]});
		const uint256jGUMd99 = await SSTRewardsirqmzdt.balanceOf.call(addressjPQTMzl, {from: accounts[2]});

		await expect(SSTRewardsirqmzdt.withdraw.call(uintKyOxUIP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsMJijGCB = await SSTRewards.new({from: accounts[3]});
		const addressOXtlN3b = accounts[4]
		const uintf3yOpUX = BigInt("1394")
		const uint256GtrHwQE = await SSTRewardsMJijGCB.rewardPerToken.call({from: accounts[2]});
		await SSTRewardsMJijGCB.checkStart.call({from: accounts[4]});
		const addressH7g5rnR = await SSTRewardsMJijGCB.updateReward.call(addressOXtlN3b, {from: accounts[5]});
		const uint256p77R6bT = await SSTRewardsMJijGCB.stake.call(uintf3yOpUX, {from: accounts[3]});
		const uint256BPe8hY7 = await SSTRewardsMJijGCB.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256GtrHwQE, BigInt("0"))
		await expect(SSTRewardsMJijGCB.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsuSYJ02f = await SSTRewards.new({from: accounts[5]});
		const addressmstI6gO = accounts[2]
		const uintgJD77I = BigInt("477")
		const uintep7SKE = BigInt("165")
		const uint256qlhlW7I = await SSTRewardsuSYJ02f.earned.call(addressmstI6gO, {from: accounts[1]});
		const uint256MzO6Ev = await SSTRewardsuSYJ02f.notifyRewardAmount.call(uintgJD77I, {from: accounts[1]});
		const uint256kC6wASf = await SSTRewardsuSYJ02f.totalSupply.call({from: accounts[4]});
		const uint256wyHWKYK = await SSTRewardsuSYJ02f.withdraw.call(uintep7SKE, {from: accounts[4]});

		assert.equal(uint256qlhlW7I, BigInt("0"))
		await expect(SSTRewardsuSYJ02f.notifyRewardAmount.call(uintgJD77I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardskCK94GL = await SSTRewards.new({from: accounts[4]});
		const addressLpxL7rk = "0x0000000000000000000000000000000000000001"
		const uintoNSpOnT = BigInt("893")
		const uint256sYIlN4T = await SSTRewardskCK94GL.balanceOf.call(addressLpxL7rk, {from: accounts[2]});
		const uint256TYL7lPu = await SSTRewardskCK94GL.stake.call(uintoNSpOnT, {from: accounts[0]});
		await SSTRewardskCK94GL.exit.call({from: accounts[3]});

		assert.equal(uint256sYIlN4T, BigInt("0"))
		await expect(SSTRewardskCK94GL.stake.call(uintoNSpOnT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsCJ5Audr = await SSTRewards.new({from: accounts[3]});
		const addresstRGexzx = accounts[0]
		const uinteatc7Hu = BigInt("42")
		await SSTRewardsCJ5Audr.getReward.call({from: accounts[2]});
		await SSTRewardsCJ5Audr.getReward.call({from: accounts[2]});
		await SSTRewardsCJ5Audr.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256grjra9e = await SSTRewardsCJ5Audr.earned.call(addresstRGexzx, {from: accounts[3]});
		const uint2561hPtf9 = await SSTRewardsCJ5Audr.stake.call(uinteatc7Hu, {from: accounts[2]});
		await SSTRewardsCJ5Audr.exit.call({from: accounts[0]});

		await expect(SSTRewardsCJ5Audr.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsgqqWej = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUQvWVxy = BigInt("158")
		const addressSTMc7vw = accounts[5]
		const uintYPOOJJW = BigInt("739")
		const uintvU3I9II = BigInt("999")
		const uint256Dd1yMmk = await SSTRewardsgqqWej.withdraw.call(uintUQvWVxy, {from: accounts[0]});
		const uint256ihsXPh = await SSTRewardsgqqWej.balanceOf.call(addressSTMc7vw, {from: accounts[2]});
		const uint256kIKsgl4 = await SSTRewardsgqqWej.stake.call(uintYPOOJJW, {from: accounts[2]});
		const uint256JMWQqOo = await SSTRewardsgqqWej.withdraw.call(uintvU3I9II, {from: accounts[1]});
	});
})