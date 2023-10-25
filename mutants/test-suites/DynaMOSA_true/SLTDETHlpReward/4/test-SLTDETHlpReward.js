const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardAwdYCjm = await SLTDETHlpReward.new({from: accounts[2]});
		const addresslc9qGk3 = accounts[0]
		const addresshBLTBZ2 = accounts[0]
//		const addresssnCGOED = await SLTDETHlpRewardAwdYCjm.setRewardDistribution.call(addresslc9qGk3, {from: accounts[1]});
//		const addressnGWCXmW = await SLTDETHlpRewardAwdYCjm.updateReward.call(addresshBLTBZ2, {from: accounts[2]});

		await expect(SLTDETHlpRewardAwdYCjm.setRewardDistribution.call(addresslc9qGk3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQVnb4C5 = await SLTDETHlpReward.new({from: accounts[2]});
		const addressUEXOH8T = accounts[3]
		const uintejTWkj5 = BigInt("366")
		const uintkbrRkgk = BigInt("630")
		const addressPVDRUg = await SLTDETHlpRewardQVnb4C5.transferOwnership.call(addressUEXOH8T, {from: accounts[2]});
//		const uint256q2GO0JY = await SLTDETHlpRewardQVnb4C5.stake.call(uintejTWkj5, {from: accounts[1]});
//		const uint256KTQ4Uvk = await SLTDETHlpRewardQVnb4C5.stake.call(uintkbrRkgk, {from: accounts[2]});

		await expect(SLTDETHlpRewardQVnb4C5.stake.call(uintejTWkj5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardd9c0pIU = await SLTDETHlpReward.new({from: accounts[4]});
		const addressHQtRxh0 = accounts[0]
		const addressFtTC20j = accounts[2]
		const uint256BIls274 = await SLTDETHlpRewardd9c0pIU.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressUlKrEEA = await SLTDETHlpRewardd9c0pIU.updateReward.call(addressHQtRxh0, {from: "0x0000000000000000000000000000000000000001"});
//		const boolnYJtuk0 = await SLTDETHlpRewardd9c0pIU.isOwner.call({from: accounts[5]});
//		const addressBFJAG7 = await SLTDETHlpRewardd9c0pIU.setStakeAddress.call(addressFtTC20j, {from: accounts[4]});
//		await SLTDETHlpRewardd9c0pIU.renounceOwnership.call({from: accounts[1]});

		assert.equal(uint256BIls274, BigInt("0"))
		await expect(SLTDETHlpRewardd9c0pIU.updateReward.call(addressHQtRxh0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTJ0eFL = await SLTDETHlpReward.new({from: accounts[0]});
		const uintIYGP6zP = BigInt("440")
//		await SLTDETHlpRewardTJ0eFL.exit.call({from: accounts[2]});
//		const uint256tQDwYPZ = await SLTDETHlpRewardTJ0eFL.withdraw.call(uintIYGP6zP, {from: accounts[4]});
//		await SLTDETHlpRewardTJ0eFL.renounceOwnership.call({from: accounts[1]});

		await expect(SLTDETHlpRewardTJ0eFL.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardiJNZWEx = await SLTDETHlpReward.new({from: accounts[3]});
		const booldHigRK = await SLTDETHlpRewardiJNZWEx.isOwner.call({from: accounts[2]});
//		const uint256GqxklVa = await SLTDETHlpRewardiJNZWEx.remainingReward.call({from: accounts[3]});

		assert.equal(booldHigRK, false)
		await expect(SLTDETHlpRewardiJNZWEx.remainingReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardAL8nhbb = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressiFbEpG = accounts[5]
		const addressXPsveMw = accounts[1]
		const addressRW1zJSy = accounts[3]
		const uintE2Slsd = BigInt("960")
		const addressYaaG13 = accounts[0]
		const addressp3v84gE = await SLTDETHlpRewardAL8nhbb.setRewardDistribution.call(addressiFbEpG, {from: accounts[0]});
		const addressYhbtEbE = await SLTDETHlpRewardAL8nhbb.setStakeAddress.call(addressXPsveMw, {from: accounts[1]});
		const uint256cykrIb9 = await SLTDETHlpRewardAL8nhbb.earned.call(addressRW1zJSy, {from: accounts[0]});
		const uint256O959ssz = await SLTDETHlpRewardAL8nhbb.withdraw.call(uintE2Slsd, {from: accounts[2]});
		const addressMv62Kv = await SLTDETHlpRewardAL8nhbb.setRewardDistribution.call(addressYaaG13, {from: accounts[3]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardAwdYCjm = await SLTDETHlpReward.new({from: accounts[2]});
		const uintNG5rKD = BigInt("93")
		const addressKB5efc8 = accounts[1]
		const addresspFH1sDC = accounts[0]
		const uintKTb36oq = BigInt("342")
		const uint256YBsg6XU = await SLTDETHlpRewardAwdYCjm.notifyRewardAmount.call(uintNG5rKD, {from: accounts[2]});
		const uint256WJW6DQY = await SLTDETHlpRewardAwdYCjm.rewardPerToken.call({from: accounts[5]});
//		const addresssnCGOED = await SLTDETHlpRewardAwdYCjm.setRewardDistribution.call(addressKB5efc8, {from: accounts[1]});
//		const addressnGWCXmW = await SLTDETHlpRewardAwdYCjm.updateReward.call(addresspFH1sDC, {from: accounts[2]});
//		const uint256sricKT5 = await SLTDETHlpRewardAwdYCjm.notifyRewardAmount.call(uintKTb36oq, {from: accounts[1]});

		assert.equal(uint256WJW6DQY, BigInt("0"))
		await expect(SLTDETHlpRewardAwdYCjm.setRewardDistribution.call(addressKB5efc8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTJ0eFL = await SLTDETHlpReward.new({from: accounts[0]});
		const uintYB2PbkE = BigInt("440")
//		const uint256tQDwYPZ = await SLTDETHlpRewardTJ0eFL.withdraw.call(uintYB2PbkE, {from: accounts[4]});
//		await SLTDETHlpRewardTJ0eFL.renounceOwnership.call({from: accounts[1]});

		await expect(SLTDETHlpRewardTJ0eFL.withdraw.call(uintYB2PbkE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTJ0eFL = await SLTDETHlpReward.new({from: accounts[0]});
		const addressE9SCXe7 = "0x0000000000000000000000000000000000000001"
		const addresstlTKa8s = await SLTDETHlpRewardTJ0eFL.setStakeAddress.call(addressE9SCXe7, {from: accounts[0]});
//		await SLTDETHlpRewardTJ0eFL.renounceOwnership.call({from: accounts[1]});

		await expect(SLTDETHlpRewardTJ0eFL.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTJ0eFL = await SLTDETHlpReward.new({from: accounts[0]});
		const uintTAap21y = BigInt("318")
		const uintT4n4Ro3 = BigInt("441")
//		const uint256DHPSinX = await SLTDETHlpRewardTJ0eFL.notifyRewardAmount.call(uintTAap21y, {from: accounts[4]});
//		const uint256tQDwYPZ = await SLTDETHlpRewardTJ0eFL.withdraw.call(uintT4n4Ro3, {from: accounts[4]});
//		const uint256VGkz7zZ = await SLTDETHlpRewardTJ0eFL.remainingReward.call({from: accounts[0]});

		await expect(SLTDETHlpRewardTJ0eFL.notifyRewardAmount.call(uintTAap21y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarduQjBT4a = await SLTDETHlpReward.new({from: accounts[4]});
		const uintac7zmkX = BigInt("1072")
		const addressKWmDRK0 = accounts[2]
		const uintYnIctOS = BigInt("849")
//		await SLTDETHlpRewarduQjBT4a.renounceOwnership.call({from: accounts[4]});
//		const uint256SirSFPq = await SLTDETHlpRewarduQjBT4a.stake.call(uintac7zmkX, {from: accounts[2]});
//		const addressUDXWeh0 = await SLTDETHlpRewarduQjBT4a.setRewardDistribution.call(addressKWmDRK0, {from: accounts[0]});
//		const uint256xhly6n = await SLTDETHlpRewarduQjBT4a.rewardPerToken.call({from: accounts[0]});
//		const uint256Raxs6C = await SLTDETHlpRewarduQjBT4a.stake.call(uintYnIctOS, {from: accounts[2]});
//		await SLTDETHlpRewarduQjBT4a.exit.call({from: accounts[2]});

		await expect(SLTDETHlpRewarduQjBT4a.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardAwdYCjm = await SLTDETHlpReward.new({from: accounts[2]});
		const uintWJY5qWn = BigInt("93")
		const addressz0ibyD = accounts[1]
		const uintJBaZ9Tn = BigInt("1829")
		const addressDP6kewS = accounts[3]
		const addressNZugp5e = accounts[2]
		const addressrpAxFrU = accounts[1]
		const uintkMgyd3 = BigInt("1926")
		const uintvsFIGR3 = BigInt("342")
		const addressF4nuHq3 = await SLTDETHlpRewardAwdYCjm.owner.call({from: accounts[1]});
		const uint256YBsg6XU = await SLTDETHlpRewardAwdYCjm.notifyRewardAmount.call(uintWJY5qWn, {from: accounts[2]});
//		const addressISAqNPI = await SLTDETHlpRewardAwdYCjm.setRewardDistribution.call(addressz0ibyD, {from: accounts[0]});
//		const uint256WJW6DQY = await SLTDETHlpRewardAwdYCjm.rewardPerToken.call({from: accounts[5]});
//		const uint256R7ERLQo = await SLTDETHlpRewardAwdYCjm.stake.call(uintJBaZ9Tn, {from: accounts[3]});
//		const uint256CiGv6oR = await SLTDETHlpRewardAwdYCjm.earned.call(addressDP6kewS, {from: accounts[2]});
//		const addresssnCGOED = await SLTDETHlpRewardAwdYCjm.setRewardDistribution.call(addressNZugp5e, {from: accounts[1]});
//		const addressnGWCXmW = await SLTDETHlpRewardAwdYCjm.updateReward.call(addressrpAxFrU, {from: accounts[2]});
//		const uint256SR8ha9R = await SLTDETHlpRewardAwdYCjm.withdraw.call(uintkMgyd3, {from: accounts[2]});
//		const uint256sricKT5 = await SLTDETHlpRewardAwdYCjm.notifyRewardAmount.call(uintvsFIGR3, {from: accounts[1]});

		assert.equal(addressF4nuHq3, 0x9b89A6e29d60e82A8877e024B4ec58C7adB5c85f)
		await expect(SLTDETHlpRewardAwdYCjm.setRewardDistribution.call(addressz0ibyD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardnL7TGTW = await SLTDETHlpReward.new({from: accounts[0]});
		const addressHpxMgka = accounts[2]
//		await SLTDETHlpRewardnL7TGTW.getReward.call({from: accounts[1]});
//		await SLTDETHlpRewardnL7TGTW.getReward.call({from: accounts[4]});
//		await SLTDETHlpRewardnL7TGTW.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressSkfg5qZ = await SLTDETHlpRewardnL7TGTW.transferOwnership.call(addressHpxMgka, {from: accounts[1]});

		await expect(SLTDETHlpRewardnL7TGTW.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQVnb4C5 = await SLTDETHlpReward.new({from: accounts[2]});
		const uintxyDLk0 = BigInt("828")
		const uintTb3tLll = BigInt("634")
		const addressnJ5r6VG = accounts[1]
		const addressqCSluT1 = accounts[4]
		const uint256apuHzpN = await SLTDETHlpRewardQVnb4C5.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256dRMpAqh = await SLTDETHlpRewardQVnb4C5.setStartTime.call(uintxyDLk0, {from: accounts[2]});
//		await SLTDETHlpRewardQVnb4C5.getReward.call({from: accounts[4]});
//		const uint256KTQ4Uvk = await SLTDETHlpRewardQVnb4C5.stake.call(uintTb3tLll, {from: accounts[2]});
//		const uint256R2KCYLS = await SLTDETHlpRewardQVnb4C5.earned.call(addressnJ5r6VG, {from: accounts[1]});
//		const uint256NQhMYkY = await SLTDETHlpRewardQVnb4C5.earned.call(addressqCSluT1, {from: accounts[2]});
//		await SLTDETHlpRewardQVnb4C5.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256apuHzpN, BigInt("0"))
		await expect(SLTDETHlpRewardQVnb4C5.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQVnb4C5 = await SLTDETHlpReward.new({from: accounts[2]});
		const addressPpQMtm5 = accounts[0]
		const uintEpCvwJ2 = BigInt("634")
		const addressyu4HsMT = await SLTDETHlpRewardQVnb4C5.setRewardDistribution.call(addressPpQMtm5, {from: accounts[2]});
//		await SLTDETHlpRewardQVnb4C5.getReward.call({from: accounts[4]});
//		const uint256KTQ4Uvk = await SLTDETHlpRewardQVnb4C5.stake.call(uintEpCvwJ2, {from: accounts[2]});

		await expect(SLTDETHlpRewardQVnb4C5.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})