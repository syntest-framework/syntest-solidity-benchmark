const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakinglrINrT6 = await SLTDStaking.new({from: accounts[3]});
		const uintME5g39Y = BigInt("1855")
		const addressp1eUkn7 = accounts[3]
		const addressCx0xpt = accounts[2]
		const uintz0tkEZm = BigInt("1789")
		const uintaqK8alT = BigInt("802")
		const uint256qiFEeM6 = await SLTDStakinglrINrT6.withdraw.call(uintME5g39Y, {from: accounts[1]});
		await SLTDStakinglrINrT6.renounceOwnership.call({from: accounts[1]});
		const addressguhLGrw = await SLTDStakinglrINrT6.setSLTD.call(addressCx0xpt, addressp1eUkn7, {from: accounts[2]});
		const uint256ZM1Qtzn = await SLTDStakinglrINrT6.stake.call(uintz0tkEZm, {from: accounts[1]});
		const uint256kxn78Bq = await SLTDStakinglrINrT6.withdraw.call(uintaqK8alT, {from: accounts[5]});

		await expect(SLTDStakinglrINrT6.withdraw.call(uintME5g39Y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingsqyzlW2 = await SLTDStaking.new({from: accounts[2]});
		const addressgkUPLBY = accounts[2]
		const addressNbpgPts = accounts[1]
		const addressLE6MDSv = await SLTDStakingsqyzlW2.setSLTD.call(addressNbpgPts, addressgkUPLBY, {from: accounts[5]});
		const addressiGsShwV = await SLTDStakingsqyzlW2.owner.call({from: accounts[3]});
		const addresssk5TOb9 = await SLTDStakingsqyzlW2.owner.call({from: accounts[1]});

		await expect(SLTDStakingsqyzlW2.setSLTD.call(addressNbpgPts, addressgkUPLBY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSC4iU8D = await SLTDStaking.new({from: accounts[5]});
		const addressBVqL0Ml = accounts[1]
		const uintcufOMgv = BigInt("1300")
		const addressTZd2Lqu = accounts[4]
		const addressjGLPNFZ = accounts[4]
		const addressixkh89F = accounts[0]
		const address4IknMe = await SLTDStakingSC4iU8D.transferOwnership.call(addressBVqL0Ml, {from: accounts[0]});
		const uint256xSqGT3F = await SLTDStakingSC4iU8D.stake.call(uintcufOMgv, {from: accounts[5]});
		const addressg7hzhkV = await SLTDStakingSC4iU8D.updateReward.call(addressTZd2Lqu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256a0XPDug = await SLTDStakingSC4iU8D.balanceOf.call(addressjGLPNFZ, {from: accounts[4]});
		await SLTDStakingSC4iU8D.exit.call({from: accounts[2]});
		const addressZwfbYnC = await SLTDStakingSC4iU8D.setRewardDistribution.call(addressixkh89F, {from: accounts[0]});

		await expect(SLTDStakingSC4iU8D.transferOwnership.call(addressBVqL0Ml, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingEpwwE17 = await SLTDStaking.new({from: accounts[2]});
		const addressXzUTPoO = accounts[2]
		const uint256rnckq6t = await SLTDStakingEpwwE17.balanceOf.call(addressXzUTPoO, {from: accounts[4]});
		await SLTDStakingEpwwE17.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingEpwwE17.getReward.call({from: accounts[1]});

		assert.equal(uint256rnckq6t, BigInt("0"))
		await expect(SLTDStakingEpwwE17.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingsqF0B2x = await SLTDStaking.new({from: accounts[1]});
		const uintMvJ1uuO = BigInt("308")
		const uinttP7OtzR = BigInt("149")
		const uintu4tKAFi = BigInt("696")
		await SLTDStakingsqF0B2x.onlyOwner.call({from: accounts[4]});
		await SLTDStakingsqF0B2x.getReward.call({from: accounts[1]});
		const uint256Q15FHd8 = await SLTDStakingsqF0B2x.withdraw.call(uintMvJ1uuO, {from: accounts[1]});
		const uint256Ip0xuUY = await SLTDStakingsqF0B2x.stake.call(uinttP7OtzR, {from: accounts[0]});
		const uint256TVZRVwN = await SLTDStakingsqF0B2x.stake.call(uintu4tKAFi, {from: accounts[0]});
		const uint256AE1h9jd = await SLTDStakingsqF0B2x.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(SLTDStakingsqF0B2x.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingkXGrlFI = await SLTDStaking.new({from: accounts[3]});
		const uintEu6kxuJ = BigInt("254")
		const addressbbZ6rGl = accounts[2]
		const uint256NPm9r5x = await SLTDStakingkXGrlFI.stake.call(uintEu6kxuJ, {from: accounts[0]});
		const uint256dGn0BtA = await SLTDStakingkXGrlFI.earned.call(addressbbZ6rGl, {from: accounts[1]});
		const uint256ZWZgvob = await SLTDStakingkXGrlFI.rewardPerToken.call({from: accounts[4]});
		await SLTDStakingkXGrlFI.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingkXGrlFI.stake.call(uintEu6kxuJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingsqyzlW2 = await SLTDStaking.new({from: accounts[2]});
		const addressiGsShwV = await SLTDStakingsqyzlW2.owner.call({from: accounts[3]});
		const addresssk5TOb9 = await SLTDStakingsqyzlW2.owner.call({from: accounts[1]});

		assert.equal(addressiGsShwV, 0xFa2300C6a352061c7F6804D0614b259e54aa9D6c)
		assert.equal(addresssk5TOb9, 0xFa2300C6a352061c7F6804D0614b259e54aa9D6c)
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingJTSMyo = await SLTDStaking.new({from: accounts[4]});
		const addressS700LqB = accounts[1]
		const uint256PHDZznK = await SLTDStakingJTSMyo.balanceOf.call(addressS700LqB, {from: accounts[5]});
		const uint256iP60IO1 = await SLTDStakingJTSMyo.rewardPerToken.call({from: accounts[0]});
		await SLTDStakingJTSMyo.getReward.call({from: accounts[1]});
		const uint256M9wS643 = await SLTDStakingJTSMyo.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256PHDZznK, BigInt("0"))
		assert.equal(uint256iP60IO1, BigInt("0"))
		await expect(SLTDStakingJTSMyo.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingiEcfWMc = await SLTDStaking.new({from: accounts[0]});
		const addressTalFXcS = accounts[0]
		const uintBBmBuSO = BigInt("1318")
		const addresszMaIMz = accounts[3]
		await SLTDStakingiEcfWMc.getReward.call({from: accounts[1]});
		const addressiyBOQb9 = await SLTDStakingiEcfWMc.transferOwnership.call(addressTalFXcS, {from: accounts[0]});
		const uint256FNgmbfO = await SLTDStakingiEcfWMc.withdraw.call(uintBBmBuSO, {from: accounts[3]});
		const uint256kH0GDcY = await SLTDStakingiEcfWMc.earned.call(addresszMaIMz, {from: accounts[1]});
		await SLTDStakingiEcfWMc.onlyOwner.call({from: accounts[1]});
		await SLTDStakingiEcfWMc.renounceOwnership.call({from: accounts[0]});

		await expect(SLTDStakingiEcfWMc.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingiEcfWMc = await SLTDStaking.new({from: accounts[0]});
		const uintMr59ul8 = BigInt("552")
		const uintaO7SzAm = BigInt("248")
		const addressNTZR6qe = accounts[3]
		await SLTDStakingiEcfWMc.getReward.call({from: accounts[1]});
		await SLTDStakingiEcfWMc.renounceOwnership.call({from: accounts[0]});
		const uint256AXXmNlh = await SLTDStakingiEcfWMc.withdraw.call(uintMr59ul8, {from: accounts[4]});
		const uint256FNgmbfO = await SLTDStakingiEcfWMc.withdraw.call(uintaO7SzAm, {from: accounts[3]});
		const uint256kH0GDcY = await SLTDStakingiEcfWMc.earned.call(addressNTZR6qe, {from: accounts[1]});

		await expect(SLTDStakingiEcfWMc.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingiEcfWMc = await SLTDStaking.new({from: accounts[0]});
		const addressKxhmXUY = accounts[3]
		const uintxB50HWt = BigInt("270")
		const addressrarzvYm = accounts[3]
		await SLTDStakingiEcfWMc.getReward.call({from: accounts[1]});
		const addressFWTlV4 = await SLTDStakingiEcfWMc.setRewardDistribution.call(addressKxhmXUY, {from: accounts[0]});
		await SLTDStakingiEcfWMc.onlyRewardDistribution.call({from: accounts[1]});
		const uint256FNgmbfO = await SLTDStakingiEcfWMc.withdraw.call(uintxB50HWt, {from: accounts[3]});
		const uint256kH0GDcY = await SLTDStakingiEcfWMc.earned.call(addressrarzvYm, {from: accounts[1]});

		await expect(SLTDStakingiEcfWMc.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingb7A0Vc9 = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscbNUMwd = accounts[4]
		const uintrRp91BL = BigInt("521")
		const addressOVVQXZ = accounts[2]
		const addressty0uNg5 = accounts[0]
		const addressNYAAuDC = accounts[1]
		const uint256qu5usRH = await SLTDStakingb7A0Vc9.earned.call(addresscbNUMwd, {from: accounts[5]});
		const uint256X6ZbRgL = await SLTDStakingb7A0Vc9.withdraw.call(uintrRp91BL, {from: accounts[0]});
		const uint256z8Qs3iE = await SLTDStakingb7A0Vc9.earned.call(addressOVVQXZ, {from: accounts[5]});
		const addressz8taVqz = await SLTDStakingb7A0Vc9.setSLTD.call(addressNYAAuDC, addressty0uNg5, {from: accounts[3]});
	});
})