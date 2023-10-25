const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingcaSLvI = await SLTDStaking.new({from: accounts[5]});
		const addressmJYjkbb = accounts[5]
		const address5vUY1y = accounts[4]
//		const addressWAefE9W = await SLTDStakingcaSLvI.updateReward.call(addressmJYjkbb, {from: accounts[0]});
//		const addressHB6m1kt = await SLTDStakingcaSLvI.transferOwnership.call(address5vUY1y, {from: accounts[4]});
//		const addressbfmqWkJ = await SLTDStakingcaSLvI.owner.call({from: accounts[0]});

		await expect(SLTDStakingcaSLvI.updateReward.call(addressmJYjkbb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingDz2vuXo = await SLTDStaking.new({from: accounts[4]});
		const uintW1Purle = BigInt("1483")
		const addressZLaquFL = await SLTDStakingDz2vuXo.owner.call({from: accounts[3]});
		const uint256KZ4WeIY = await SLTDStakingDz2vuXo.rewardPerToken.call({from: accounts[2]});
//		const uint256HDzrnVC = await SLTDStakingDz2vuXo.withdraw.call(uintW1Purle, {from: accounts[4]});

		assert.equal(addressZLaquFL, 0x20796D825c7a56f75f1116051c9F9FaeE513BB61)
		assert.equal(uint256KZ4WeIY, BigInt("0"))
		await expect(SLTDStakingDz2vuXo.withdraw.call(uintW1Purle, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSUx54T9 = await SLTDStaking.new({from: accounts[4]});
		const addresstxCPMut = accounts[0]
		const addressEm3BI6 = accounts[4]
		const addressTTBZTHh = accounts[5]
		const addressrOImmpi = accounts[0]
		const uint256O56tZ1p = await SLTDStakingSUx54T9.balanceOf.call(addresstxCPMut, {from: accounts[1]});
		const uint256AEt9wu4 = await SLTDStakingSUx54T9.earned.call(addressEm3BI6, {from: accounts[4]});
//		const addressYBIeviE = await SLTDStakingSUx54T9.setSLTD.call(addressrOImmpi, addressTTBZTHh, {from: accounts[4]});

		assert.equal(uint256AEt9wu4, BigInt("0"))
		assert.equal(uint256O56tZ1p, BigInt("0"))
		await expect(SLTDStakingSUx54T9.setSLTD.call(addressrOImmpi, addressTTBZTHh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingB5arar = await SLTDStaking.new({from: accounts[1]});
		const uintxur84jo = BigInt("1806")
		const addressAs3Z1NO = accounts[1]
		const addresskoL2wZq = accounts[0]
		const addresso4qNqG5 = accounts[5]
//		const uint256hbhuqQO = await SLTDStakingB5arar.stake.call(uintxur84jo, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256q1Bu5i = await SLTDStakingB5arar.totalSupply.call({from: accounts[2]});
//		const addresskx9ZJXt = await SLTDStakingB5arar.updateReward.call(addressAs3Z1NO, {from: accounts[2]});
//		const addressubVpFXy = await SLTDStakingB5arar.setSLTD.call(addresso4qNqG5, addresskoL2wZq, {from: accounts[0]});

		await expect(SLTDStakingB5arar.stake.call(uintxur84jo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingbksWVR6 = await SLTDStaking.new({from: accounts[1]});
		const addresslmtoNZK = accounts[2]
		const uinthDjsY5C = BigInt("990")
		const uintFV8YuvF = BigInt("511")
		const uint256ShKHDRa = await SLTDStakingbksWVR6.totalSupply.call({from: accounts[2]});
		const uint256RxUije9 = await SLTDStakingbksWVR6.balanceOf.call(addresslmtoNZK, {from: accounts[0]});
//		await SLTDStakingbksWVR6.renounceOwnership.call({from: accounts[3]});
//		const uint256GP1ZRi = await SLTDStakingbksWVR6.withdraw.call(uinthDjsY5C, {from: accounts[0]});
//		const uint256snUJvSl = await SLTDStakingbksWVR6.stake.call(uintFV8YuvF, {from: accounts[0]});

		assert.equal(uint256RxUije9, BigInt("0"))
		assert.equal(uint256ShKHDRa, BigInt("0"))
		await expect(SLTDStakingbksWVR6.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnYEMaBQ = await SLTDStaking.new({from: accounts[4]});
		const addressTTbeIud = accounts[2]
		const uintDABHsO = BigInt("403")
		const addressgmtnOu2 = accounts[0]
		const addressHhQzBWv = "0x0000000000000000000000000000000000000001"
		const addressZotj5Zn = accounts[5]
		const uint256tY51m3 = await SLTDStakingnYEMaBQ.balanceOf.call(addressTTbeIud, {from: accounts[0]});
//		await SLTDStakingnYEMaBQ.getReward.call({from: accounts[2]});
//		const uint256r6mz7MI = await SLTDStakingnYEMaBQ.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256iHpPYM = await SLTDStakingnYEMaBQ.notifyRewardAmount.call(uintDABHsO, {from: accounts[3]});
//		const addressYMGchNk = await SLTDStakingnYEMaBQ.setSLTD.call(addressHhQzBWv, addressgmtnOu2, {from: accounts[0]});
//		const uint256psbEHcW = await SLTDStakingnYEMaBQ.balanceOf.call(addressZotj5Zn, {from: accounts[5]});

		assert.equal(uint256tY51m3, BigInt("0"))
		await expect(SLTDStakingnYEMaBQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingVWTkzM1 = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrF03MGq = BigInt("1710")
		await SLTDStakingVWTkzM1.renounceOwnership.call({from: accounts[3]});
		const uint256gaBtugh = await SLTDStakingVWTkzM1.withdraw.call(uintrF03MGq, {from: accounts[1]});
		const uint256AgwMUD0 = await SLTDStakingVWTkzM1.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256YdLSHt5 = await SLTDStakingVWTkzM1.totalSupply.call({from: accounts[5]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnYEMaBQ = await SLTDStaking.new({from: accounts[4]});
		const addressmw3j4jk = accounts[3]
		const uintDaFzN5w = BigInt("403")
		const addressmyrkZzC = accounts[0]
		const addressoYyqZqy = "0x0000000000000000000000000000000000000001"
		const addressaMDNayS = accounts[5]
		const uint256tY51m3 = await SLTDStakingnYEMaBQ.balanceOf.call(addressmw3j4jk, {from: accounts[0]});
//		await SLTDStakingnYEMaBQ.getReward.call({from: accounts[2]});
//		await SLTDStakingnYEMaBQ.exit.call({from: accounts[4]});
//		const uint256r6mz7MI = await SLTDStakingnYEMaBQ.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256iHpPYM = await SLTDStakingnYEMaBQ.notifyRewardAmount.call(uintDaFzN5w, {from: accounts[3]});
//		const addressYMGchNk = await SLTDStakingnYEMaBQ.setSLTD.call(addressoYyqZqy, addressmyrkZzC, {from: accounts[0]});
//		const uint256MLgus8q = await SLTDStakingnYEMaBQ.rewardPerToken.call({from: accounts[4]});
//		const uint256psbEHcW = await SLTDStakingnYEMaBQ.balanceOf.call(addressaMDNayS, {from: accounts[5]});

		assert.equal(uint256tY51m3, BigInt("0"))
		await expect(SLTDStakingnYEMaBQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnYEMaBQ = await SLTDStaking.new({from: accounts[4]});
		const addressJbNWhsb = accounts[2]
		const addressRKJnCkN = accounts[0]
		const addressHwcrKuc = "0x0000000000000000000000000000000000000001"
		const addresstC46FIP = accounts[3]
		const addressq3TPFwz = accounts[1]
		const addressPvlfCzE = "0x0000000000000000000000000000000000000001"
		const addressRfRn7R8 = accounts[5]
		const uint256tY51m3 = await SLTDStakingnYEMaBQ.balanceOf.call(addressJbNWhsb, {from: accounts[0]});
//		await SLTDStakingnYEMaBQ.getReward.call({from: accounts[2]});
//		await SLTDStakingnYEMaBQ.renounceOwnership.call({from: accounts[4]});
//		const uint256r6mz7MI = await SLTDStakingnYEMaBQ.lastTimeRewardApplicable.call({from: accounts[4]});
//		const addressYMGchNk = await SLTDStakingnYEMaBQ.setSLTD.call(addressHwcrKuc, addressRKJnCkN, {from: accounts[0]});
//		const addressnzNk6BJ = await SLTDStakingnYEMaBQ.updateReward.call(addresstC46FIP, {from: accounts[2]});
//		const uint256MLgus8q = await SLTDStakingnYEMaBQ.rewardPerToken.call({from: accounts[4]});
//		const addressaxiB3iI = await SLTDStakingnYEMaBQ.setSLTD.call(addressPvlfCzE, addressq3TPFwz, {from: accounts[1]});
//		const uint256psbEHcW = await SLTDStakingnYEMaBQ.balanceOf.call(addressRfRn7R8, {from: accounts[5]});

		assert.equal(uint256tY51m3, BigInt("0"))
		await expect(SLTDStakingnYEMaBQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingm8wRvLg = await SLTDStaking.new({from: accounts[3]});
		const address2ZaZK7 = accounts[2]
		const uintW9h9lhr = BigInt("1720")
		const addressQ8aEruA = await SLTDStakingm8wRvLg.transferOwnership.call(address2ZaZK7, {from: accounts[3]});
//		const uint256cLFRZ3b = await SLTDStakingm8wRvLg.withdraw.call(uintW9h9lhr, {from: accounts[1]});

		await expect(SLTDStakingm8wRvLg.withdraw.call(uintW9h9lhr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnYEMaBQ = await SLTDStaking.new({from: accounts[4]});
		const addressIP5z4yx = "0x0000000000000000000000000000000000000001"
		const addresskrJNPjP = accounts[5]
		const addressLEHHrIV = accounts[2]
		const addresszgFpqkJ = accounts[0]
		const addressPkBXNv6 = "0x0000000000000000000000000000000000000001"
		const addressuECDpOD = accounts[5]
		const addressfj6fiZ = await SLTDStakingnYEMaBQ.setRewardDistribution.call(addressIP5z4yx, {from: accounts[4]});
		const addressmgJKERP = await SLTDStakingnYEMaBQ.setRewardDistribution.call(addresskrJNPjP, {from: accounts[4]});
		const uint256tY51m3 = await SLTDStakingnYEMaBQ.balanceOf.call(addressLEHHrIV, {from: accounts[0]});
//		await SLTDStakingnYEMaBQ.getReward.call({from: accounts[2]});
//		const uint256r6mz7MI = await SLTDStakingnYEMaBQ.lastTimeRewardApplicable.call({from: accounts[4]});
//		const addressYMGchNk = await SLTDStakingnYEMaBQ.setSLTD.call(addressPkBXNv6, addresszgFpqkJ, {from: accounts[0]});
//		const uint256MLgus8q = await SLTDStakingnYEMaBQ.rewardPerToken.call({from: accounts[4]});
//		const uint256psbEHcW = await SLTDStakingnYEMaBQ.balanceOf.call(addressuECDpOD, {from: accounts[5]});

		assert.equal(uint256tY51m3, BigInt("0"))
		await expect(SLTDStakingnYEMaBQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})