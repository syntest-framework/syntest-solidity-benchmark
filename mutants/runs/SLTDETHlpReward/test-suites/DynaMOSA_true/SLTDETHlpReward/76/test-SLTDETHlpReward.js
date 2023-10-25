const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFEj7gt = await SLTDETHlpReward.new({from: accounts[1]});
		const uintTtbFdPT = BigInt("916")
		const addressLIRIUAd = accounts[3]
		const uint256rw4Nx9q = await SLTDETHlpRewardFEj7gt.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256ygA71xH = await SLTDETHlpRewardFEj7gt.stake.call(uintTtbFdPT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pY5btUp = await SLTDETHlpRewardFEj7gt.balanceOf.call(addressLIRIUAd, {from: accounts[1]});
		await SLTDETHlpRewardFEj7gt.onlyOwner.call({from: accounts[2]});
		await SLTDETHlpRewardFEj7gt.onlyOwner.call({from: accounts[5]});

		assert.equal(uint256rw4Nx9q, BigInt("0"))
		await expect(SLTDETHlpRewardFEj7gt.stake.call(uintTtbFdPT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardawBZXHb = await SLTDETHlpReward.new({from: accounts[1]});
		await SLTDETHlpRewardawBZXHb.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardawBZXHb.getReward.call({from: accounts[3]});
		await SLTDETHlpRewardawBZXHb.checkStart.call({from: accounts[2]});

		await expect(SLTDETHlpRewardawBZXHb.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQn1Ztq7 = await SLTDETHlpReward.new({from: accounts[3]});
		const addressIem3Vkg = "0x0000000000000000000000000000000000000001"
		const addressINTlx4I = await SLTDETHlpRewardQn1Ztq7.setStakeAddress.call(addressIem3Vkg, {from: accounts[3]});
		await SLTDETHlpRewardQn1Ztq7.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardQn1Ztq7.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJaqwSED = await SLTDETHlpReward.new({from: accounts[3]});
		const addressarej6AQ = accounts[0]
		const addresswdRzmiE = accounts[1]
		const addressfZIwZjj = accounts[4]
		await SLTDETHlpRewardJaqwSED.renounceOwnership.call({from: accounts[1]});
		const uint256TAEGG2T = await SLTDETHlpRewardJaqwSED.lastTimeRewardApplicable.call({from: accounts[4]});
		const addresskodm6oJ = await SLTDETHlpRewardJaqwSED.updateReward.call(addressarej6AQ, {from: accounts[1]});
		const uint256rpviu3i = await SLTDETHlpRewardJaqwSED.balanceOf.call(addresswdRzmiE, {from: accounts[0]});
		const uint256gEnG5YX = await SLTDETHlpRewardJaqwSED.balanceOf.call(addressfZIwZjj, {from: accounts[3]});

		await expect(SLTDETHlpRewardJaqwSED.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarduoo2rQ2 = await SLTDETHlpReward.new({from: accounts[4]});
		const uintimGM3tw = BigInt("226")
		const addresst98M9k = accounts[3]
		const uintMos47X8 = BigInt("706")
		const uintFnSzuoZ = BigInt("140")
		const uintsrqqVBA = BigInt("536")
		const uint256ijm6oOY = await SLTDETHlpRewarduoo2rQ2.withdraw.call(uintimGM3tw, {from: accounts[1]});
		const uint256JROgHQm = await SLTDETHlpRewarduoo2rQ2.earned.call(addresst98M9k, {from: accounts[2]});
		const uint256YpAd0D8 = await SLTDETHlpRewarduoo2rQ2.stake.call(uintMos47X8, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewarduoo2rQ2.renounceOwnership.call({from: accounts[1]});
		const uint256cCzpzUt = await SLTDETHlpRewarduoo2rQ2.notifyRewardAmount.call(uintFnSzuoZ, {from: accounts[0]});
		const uint256tC2r7Gh = await SLTDETHlpRewarduoo2rQ2.stake.call(uintsrqqVBA, {from: accounts[0]});

		await expect(SLTDETHlpRewarduoo2rQ2.withdraw.call(uintimGM3tw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardSDJ9Ao = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrfXQ1B = "0x0000000000000000000000000000000000000001"
		const addressFNQlC15 = accounts[2]
		const addressTZds7Z = accounts[1]
		const uint256lWBVCjC = await SLTDETHlpRewardSDJ9Ao.earned.call(addressrfXQ1B, {from: accounts[4]});
		const uint256CQ7A93c = await SLTDETHlpRewardSDJ9Ao.balanceOf.call(addressFNQlC15, {from: accounts[4]});
		const uint256bgK6est = await SLTDETHlpRewardSDJ9Ao.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const addressWlU9hhl = await SLTDETHlpRewardSDJ9Ao.setStakeAddress.call(addressTZds7Z, {from: accounts[2]});
		await SLTDETHlpRewardSDJ9Ao.onlyRewardDistribution.call({from: accounts[0]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardjWbqbfv = await SLTDETHlpReward.new({from: accounts[0]});
		const addresshPE93Y7 = accounts[3]
		const uint256A2ak4m = await SLTDETHlpRewardjWbqbfv.remainingReward.call({from: accounts[5]});
		const addressIk60v44 = await SLTDETHlpRewardjWbqbfv.setRewardDistribution.call(addresshPE93Y7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardjWbqbfv.remainingReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardINQNi7Y = await SLTDETHlpReward.new({from: accounts[2]});
		const addressFMmNKUN = accounts[4]
		const uint256icFa2Iq = await SLTDETHlpRewardINQNi7Y.earned.call(addressFMmNKUN, {from: accounts[5]});
		await SLTDETHlpRewardINQNi7Y.getReward.call({from: accounts[4]});

		assert.equal(uint256icFa2Iq, BigInt("0"))
		await expect(SLTDETHlpRewardINQNi7Y.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFEj7gt = await SLTDETHlpReward.new({from: accounts[1]});
		const uintiQvBOFW = BigInt("190")
		const uinthsNefzp = BigInt("916")
		const addressi6k9fCI = accounts[3]
		const uint256rw4Nx9q = await SLTDETHlpRewardFEj7gt.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256RaQzhef = await SLTDETHlpRewardFEj7gt.notifyRewardAmount.call(uintiQvBOFW, {from: accounts[4]});
		const uint256ygA71xH = await SLTDETHlpRewardFEj7gt.stake.call(uinthsNefzp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pY5btUp = await SLTDETHlpRewardFEj7gt.balanceOf.call(addressi6k9fCI, {from: accounts[1]});
		await SLTDETHlpRewardFEj7gt.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256rw4Nx9q, BigInt("0"))
		await expect(SLTDETHlpRewardFEj7gt.notifyRewardAmount.call(uintiQvBOFW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardINQNi7Y = await SLTDETHlpReward.new({from: accounts[2]});
		const addressL5jLF02 = accounts[6]
		const addressbB62EI1 = accounts[4]
		const uint256icFa2Iq = await SLTDETHlpRewardINQNi7Y.earned.call(addressL5jLF02, {from: accounts[5]});
		const addressepMPmec = await SLTDETHlpRewardINQNi7Y.transferOwnership.call(addressbB62EI1, {from: accounts[2]});
		await SLTDETHlpRewardINQNi7Y.getReward.call({from: accounts[4]});

		assert.equal(uint256icFa2Iq, BigInt("0"))
		await expect(SLTDETHlpRewardINQNi7Y.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardINQNi7Y = await SLTDETHlpReward.new({from: accounts[2]});
		const addressw7k7JCF = accounts[7]
		const addressMJ7cR45 = accounts[4]
		const uint256icFa2Iq = await SLTDETHlpRewardINQNi7Y.earned.call(addressw7k7JCF, {from: accounts[5]});
		const addressepMPmec = await SLTDETHlpRewardINQNi7Y.transferOwnership.call(addressMJ7cR45, {from: accounts[2]});
		const booltMDO2ip = await SLTDETHlpRewardINQNi7Y.isOwner.call({from: accounts[1]});
		await SLTDETHlpRewardINQNi7Y.renounceOwnership.call({from: accounts[2]});
		await SLTDETHlpRewardINQNi7Y.getReward.call({from: accounts[4]});

		assert.equal(booltMDO2ip, false)
		assert.equal(uint256icFa2Iq, BigInt("0"))
		await expect(SLTDETHlpRewardINQNi7Y.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardINQNi7Y = await SLTDETHlpReward.new({from: accounts[2]});
		const addressdvw7spE = accounts[2]
		const uintrfnNERz = BigInt("1791")
		const addressPyVV91O = await SLTDETHlpRewardINQNi7Y.owner.call({from: accounts[4]});
		const uint256fEuUO0 = await SLTDETHlpRewardINQNi7Y.totalSupply.call({from: accounts[4]});
		const uint256Ets666m = await SLTDETHlpRewardINQNi7Y.balanceOf.call(addressdvw7spE, {from: accounts[5]});
		await SLTDETHlpRewardINQNi7Y.getReward.call({from: accounts[4]});
		const uint256Ftx827 = await SLTDETHlpRewardINQNi7Y.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256GlsOp1p = await SLTDETHlpRewardINQNi7Y.notifyRewardAmount.call(uintrfnNERz, {from: accounts[1]});
		await SLTDETHlpRewardINQNi7Y.exit.call({from: accounts[2]});

		assert.equal(addressPyVV91O, 0x31c017861Bc5ec3Feede26BEcC6F85B74451B13D)
		assert.equal(uint256Ets666m, BigInt("0"))
		assert.equal(uint256fEuUO0, BigInt("0"))
		await expect(SLTDETHlpRewardINQNi7Y.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFEj7gt = await SLTDETHlpReward.new({from: accounts[1]});
		const addressVmqyQ50 = accounts[2]
		const uintxp924Oa = BigInt("916")
		const addressFdv6Aes = accounts[1]
		const uinttaLaiPD = BigInt("160")
		const uintigS2tSt = BigInt("913")
		const uintrtabGWI = BigInt("1986")
		await SLTDETHlpRewardFEj7gt.getReward.call({from: accounts[4]});
		const addressTjKM78 = await SLTDETHlpRewardFEj7gt.setRewardDistribution.call(addressVmqyQ50, {from: accounts[1]});
		const uint256ygA71xH = await SLTDETHlpRewardFEj7gt.stake.call(uintxp924Oa, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardFEj7gt.onlyOwner.call({from: accounts[1]});
		const addresszDxRMCu = await SLTDETHlpRewardFEj7gt.setRewardDistribution.call(addressFdv6Aes, {from: accounts[4]});
		const uint256xnOdPVS = await SLTDETHlpRewardFEj7gt.notifyRewardAmount.call(uinttaLaiPD, {from: accounts[4]});
		await SLTDETHlpRewardFEj7gt.renounceOwnership.call({from: accounts[5]});
		const uint256CV2r7Lx = await SLTDETHlpRewardFEj7gt.notifyRewardAmount.call(uintigS2tSt, {from: accounts[5]});
		const uint256ZwE8QYv = await SLTDETHlpRewardFEj7gt.withdraw.call(uintrtabGWI, {from: accounts[2]});
		await SLTDETHlpRewardFEj7gt.onlyOwner.call({from: accounts[2]});
		const boolIACCd3P = await SLTDETHlpRewardFEj7gt.isOwner.call({from: accounts[3]});

		await expect(SLTDETHlpRewardFEj7gt.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFEj7gt = await SLTDETHlpReward.new({from: accounts[1]});
		const uintV5XKzwE = BigInt("1127")
		const uintjJEXBEM = BigInt("916")
		const uint256NKchhc = await SLTDETHlpRewardFEj7gt.setStartTime.call(uintV5XKzwE, {from: accounts[1]});
		await SLTDETHlpRewardFEj7gt.onlyRewardDistribution.call({from: accounts[3]});
		const uint256ygA71xH = await SLTDETHlpRewardFEj7gt.stake.call(uintjJEXBEM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardFEj7gt.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})