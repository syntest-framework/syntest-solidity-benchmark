const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addresst5F0lXx = accounts[1]
		const addressKtaZ438 = accounts[2]
		const addressG4WaWe8 = accounts[4]
		const MarsStakingRewardsi3So5Mh = await MarsStakingRewards.new(addresst5F0lXx, addressKtaZ438, addressG4WaWe8, {from: accounts[2]});
		const addressb5QxOqY = accounts[3]
		const uinttAbV1rV = BigInt("1325")
		const uintprmmR0 = BigInt("463")
		const uintVuhqAO = BigInt("1324")
		const addressiMYKWdx = accounts[3]
		const uintPuZRPWU = BigInt("8")
		const addressF7irChE = await MarsStakingRewardsi3So5Mh.setRewardsDistribution.call(addressb5QxOqY, {from: accounts[1]});
		const boolTtjf0o2 = await MarsStakingRewardsi3So5Mh.isOwner.call({from: accounts[4]});
		const uint256zGtG0jW = await MarsStakingRewardsi3So5Mh.notifyRewardAmount.call(uintprmmR0, uinttAbV1rV, {from: accounts[5]});
		const addressAUPdheQ = await MarsStakingRewardsi3So5Mh.inCaseTokensGetStuck.call(addressiMYKWdx, uintVuhqAO, {from: accounts[4]});
		const uint256YDPT2BI = await MarsStakingRewardsi3So5Mh.withdraw.call(uintPuZRPWU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsi3So5Mh.setRewardsDistribution.call(addressb5QxOqY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJujtcBf = accounts[1]
		const addressfONnnWQ = accounts[3]
		const address0IdpxI = accounts[4]
		const MarsStakingRewardsQCjaHRI = await MarsStakingRewards.new(addressJujtcBf, addressfONnnWQ, address0IdpxI, {from: "0x0000000000000000000000000000000000000001"});
		const byteTfLFCzH = "0x0b0e031f0401080606081c1e0e1b16191c1f1602031212120b1a151515061d00"
		const byteIkta8li = "0x0b1413131d100911121f0d161511101f041204021d1e0507171d030e10171f10"
		const uintWe9DlIw = BigInt("45")
		const uintLYPZh8n = BigInt("1950")
		const uintPOYdUu8 = BigInt("1836")
		const uintCVj9ZTp = BigInt("1440")
		const uint256GPZMS2 = await MarsStakingRewardsQCjaHRI.stakeWithPermit.call(uintPOYdUu8, uintLYPZh8n, uintWe9DlIw, byteIkta8li, byteTfLFCzH, {from: accounts[5]});
		await MarsStakingRewardsQCjaHRI.onlyOwner.call({from: accounts[0]});
		await MarsStakingRewardsQCjaHRI.nonReentrant.call({from: accounts[1]});
		const uint256vt6Kk4H = await MarsStakingRewardsQCjaHRI.stake.call(uintCVj9ZTp, {from: accounts[4]});
		await MarsStakingRewardsQCjaHRI.nonReentrant.call({from: accounts[0]});
		await MarsStakingRewardsQCjaHRI.renounceOwnership.call({from: accounts[2]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressnH8IFjJ = accounts[3]
		const addressSi5aqiO = accounts[2]
		const addresshtuAxRL = accounts[3]
		const MarsStakingRewardsmPLQtpP = await MarsStakingRewards.new(addressnH8IFjJ, addressSi5aqiO, addresshtuAxRL, {from: accounts[5]});
		const addressOqfQsCY = "0x0000000000000000000000000000000000000001"
		const uint2566B1VGS = await MarsStakingRewardsmPLQtpP.getRewardForDuration.call({from: accounts[3]});
		const uint256eZpOsUD = await MarsStakingRewardsmPLQtpP.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256ze1s3Jh = await MarsStakingRewardsmPLQtpP.getRewardForDuration.call({from: accounts[3]});
		await MarsStakingRewardsmPLQtpP.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256f3xwocF = await MarsStakingRewardsmPLQtpP.balanceOf.call(addressOqfQsCY, {from: accounts[1]});
		await MarsStakingRewardsmPLQtpP.renounceOwnership.call({from: accounts[2]});

		assert.equal(uint2566B1VGS, BigInt("0"))
		assert.equal(uint256eZpOsUD, BigInt("0"))
		assert.equal(uint256ze1s3Jh, BigInt("0"))
		await expect(MarsStakingRewardsmPLQtpP.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressQVzP7sD = accounts[0]
		const addressQIgrrgk = "0x0000000000000000000000000000000000000001"
		const addressEjww1fW = accounts[2]
		const MarsStakingRewardsZPujLx = await MarsStakingRewards.new(addressQVzP7sD, addressQIgrrgk, addressEjww1fW, {from: accounts[3]});
		const addressA5xsgYS = accounts[4]
		const addressjLBzqtm = accounts[3]
		const uint256Y5EmMox = await MarsStakingRewardsZPujLx.rewardPerToken.call({from: accounts[0]});
		const uint256Z4TGWCx = await MarsStakingRewardsZPujLx.balanceOf.call(addressA5xsgYS, {from: accounts[4]});
		const addressjzraJbf = await MarsStakingRewardsZPujLx.transferOwnership.call(addressjLBzqtm, {from: accounts[2]});
		await MarsStakingRewardsZPujLx.nonReentrant.call({from: accounts[3]});

		assert.equal(uint256Y5EmMox, BigInt("0"))
		assert.equal(uint256Z4TGWCx, BigInt("0"))
		await expect(MarsStakingRewardsZPujLx.transferOwnership.call(addressjLBzqtm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJZViIoS = accounts[0]
		const addressY6SxnY = accounts[2]
		const addressMtEmFGd = accounts[1]
		const MarsStakingRewards55VNbt = await MarsStakingRewards.new(addressJZViIoS, addressY6SxnY, addressMtEmFGd, {from: accounts[4]});
		const uintWuld5oU = BigInt("600")
		const uint256EN9C6Wj = await MarsStakingRewards55VNbt.withdraw.call(uintWuld5oU, {from: accounts[2]});
		const boolbzKqdPg = await MarsStakingRewards55VNbt.isOwner.call({from: accounts[1]});
		await MarsStakingRewards55VNbt.exit.call({from: accounts[5]});
		await MarsStakingRewards55VNbt.renounceOwnership.call({from: accounts[2]});
		await MarsStakingRewards55VNbt.onlyRewardsDistribution.call({from: accounts[2]});

		await expect(MarsStakingRewards55VNbt.withdraw.call(uintWuld5oU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressYJMokse = accounts[4]
		const addressoJ2cnf = accounts[1]
		const addresszFYOGgC = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardskJAEN15 = await MarsStakingRewards.new(addressYJMokse, addressoJ2cnf, addresszFYOGgC, {from: accounts[4]});
		const addressj6fU29I = accounts[2]
		const uintzlbpdh = BigInt("398")
		const addressyHyiI3Q = accounts[1]
		const uint256WUYfHNe = await MarsStakingRewardskJAEN15.earned.call(addressj6fU29I, {from: accounts[4]});
		const addressSjFLgm5 = await MarsStakingRewardskJAEN15.inCaseTokensGetStuck.call(addressyHyiI3Q, uintzlbpdh, {from: accounts[3]});
		await MarsStakingRewardskJAEN15.nonReentrant.call({from: accounts[5]});

		assert.equal(uint256WUYfHNe, BigInt("0"))
		await expect(MarsStakingRewardskJAEN15.inCaseTokensGetStuck.call(addressyHyiI3Q, uintzlbpdh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressZlVfa69 = accounts[4]
		const addresstcRPmIZ = accounts[2]
		const addresslvw9fW = accounts[2]
		const MarsStakingRewardsCOlKkGz = await MarsStakingRewards.new(addressZlVfa69, addresstcRPmIZ, addresslvw9fW, {from: accounts[1]});
		const uintR5DajvE = BigInt("621")
		const uintaFyXZbv = BigInt("1951")
		const uintM5B2LW4 = BigInt("1125")
		const uintr0IeDm = BigInt("1245")
		const boolY11Vaul = await MarsStakingRewardsCOlKkGz.isOwner.call({from: accounts[4]});
		const uint256b6fj0kO = await MarsStakingRewardsCOlKkGz.notifyRewardAmount.call(uintaFyXZbv, uintR5DajvE, {from: accounts[3]});
		const uint256nfito7 = await MarsStakingRewardsCOlKkGz.notifyRewardAmount.call(uintr0IeDm, uintM5B2LW4, {from: accounts[1]});

		assert.equal(boolY11Vaul, false)
		await expect(MarsStakingRewardsCOlKkGz.notifyRewardAmount.call(uintaFyXZbv, uintR5DajvE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressx1O9iaj = accounts[4]
		const addressv6pdsHk = accounts[4]
		const addressgyAsWDj = accounts[2]
		const MarsStakingRewardsfRkhnbG = await MarsStakingRewards.new(addressx1O9iaj, addressv6pdsHk, addressgyAsWDj, {from: accounts[0]});
		const addressMgBxl1 = accounts[2]
		const uint256Dqtk7Aw = await MarsStakingRewardsfRkhnbG.totalSupply.call({from: accounts[3]});
		const uint256XnRVUyY = await MarsStakingRewardsfRkhnbG.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressmYDgoiY = await MarsStakingRewardsfRkhnbG.transferOwnership.call(addressMgBxl1, {from: accounts[2]});

		assert.equal(uint256Dqtk7Aw, BigInt("0"))
		assert.equal(uint256XnRVUyY, BigInt("0"))
		await expect(MarsStakingRewardsfRkhnbG.transferOwnership.call(addressMgBxl1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresspXyTh7J = accounts[4]
		const addressjcOBSMG = accounts[1]
		const addressFiZgOys = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardskJAEN15 = await MarsStakingRewards.new(addresspXyTh7J, addressjcOBSMG, addressFiZgOys, {from: accounts[4]});
		const uintxjzbY98 = BigInt("398")
		const addressrBdXtZ1 = accounts[2]
		const addressoQGVFjJ = accounts[3]
		const uint256ombSZfX = await MarsStakingRewardskJAEN15.rewardPerToken.call({from: accounts[0]});
		const addressMZ1aa0y = await MarsStakingRewardskJAEN15.owner.call({from: accounts[3]});
		const addressSjFLgm5 = await MarsStakingRewardskJAEN15.inCaseTokensGetStuck.call(addressrBdXtZ1, uintxjzbY98, {from: accounts[3]});
		const addressbOpZ0Xg = await MarsStakingRewardskJAEN15.updateReward.call(addressoQGVFjJ, {from: accounts[2]});

		assert.equal(addressMZ1aa0y, 0x786ee0e4e7A903F3b04f858eE3Ec068221e17A68)
		assert.equal(uint256ombSZfX, BigInt("0"))
		await expect(MarsStakingRewardskJAEN15.inCaseTokensGetStuck.call(addressrBdXtZ1, uintxjzbY98, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressV4ekFPh = accounts[4]
		const addressYpavqgL = accounts[1]
		const addresswpK8tbp = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardskJAEN15 = await MarsStakingRewards.new(addressV4ekFPh, addressYpavqgL, addresswpK8tbp, {from: accounts[4]});
		const uintshfoEqZ = BigInt("398")
		const addresswVdUod = accounts[1]
		await MarsStakingRewardskJAEN15.exit.call({from: accounts[3]});
		await MarsStakingRewardskJAEN15.renounceOwnership.call({from: accounts[1]});
		const addressSjFLgm5 = await MarsStakingRewardskJAEN15.inCaseTokensGetStuck.call(addresswVdUod, uintshfoEqZ, {from: accounts[3]});

		await expect(MarsStakingRewardskJAEN15.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressb81AnH8 = accounts[4]
		const addressNkY1Rfe = accounts[1]
		const addressq5vpFsT = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardskJAEN15 = await MarsStakingRewards.new(addressb81AnH8, addressNkY1Rfe, addressq5vpFsT, {from: accounts[4]});
		const uintZyEQQYi = BigInt("1173")
		const addressStlscEz = "0x0000000000000000000000000000000000000001"
		const addresscAa0coK = accounts[2]
		await MarsStakingRewardskJAEN15.renounceOwnership.call({from: accounts[4]});
		const addressBDtJMH = await MarsStakingRewardskJAEN15.inCaseTokensGetStuck.call(addressStlscEz, uintZyEQQYi, {from: accounts[4]});
		const uint256WUYfHNe = await MarsStakingRewardskJAEN15.earned.call(addresscAa0coK, {from: accounts[4]});

		await expect(MarsStakingRewardskJAEN15.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressN7rP83r = accounts[4]
		const addressjwlzLJu = accounts[1]
		const addressLe1vTIW = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardskJAEN15 = await MarsStakingRewards.new(addressN7rP83r, addressjwlzLJu, addressLe1vTIW, {from: accounts[4]});
		const addressiJDRRJ3 = accounts[4]
		const uinttIOJkKL = BigInt("374")
		const address8QJrI2 = accounts[1]
		const boolXmOrCg3 = await MarsStakingRewardskJAEN15.isOwner.call({from: accounts[2]});
		const addressDmaKhoW = await MarsStakingRewardskJAEN15.setRewardsDistribution.call(addressiJDRRJ3, {from: accounts[4]});
		const addressSjFLgm5 = await MarsStakingRewardskJAEN15.inCaseTokensGetStuck.call(address8QJrI2, uinttIOJkKL, {from: accounts[3]});

		assert.equal(boolXmOrCg3, false)
		await expect(MarsStakingRewardskJAEN15.inCaseTokensGetStuck.call(address8QJrI2, uinttIOJkKL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressXwKIk0w = accounts[4]
		const addresstXD40h8 = accounts[1]
		const addressNu2DUX9 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardskJAEN15 = await MarsStakingRewards.new(addressXwKIk0w, addresstXD40h8, addressNu2DUX9, {from: accounts[4]});
		const uintJIKy9xJ = BigInt("1896")
		const addressTU53Tqf = accounts[5]
		const addresstz6zNyt = accounts[3]
		const addressSRG46Aa = await MarsStakingRewardskJAEN15.inCaseTokensGetStuck.call(addressTU53Tqf, uintJIKy9xJ, {from: accounts[4]});
		const uint256WUYfHNe = await MarsStakingRewardskJAEN15.earned.call(addresstz6zNyt, {from: accounts[4]});

		await expect(MarsStakingRewardskJAEN15.inCaseTokensGetStuck.call(addressTU53Tqf, uintJIKy9xJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressKEdSKRr = accounts[4]
		const addressbmbuek = accounts[1]
		const addressuYMaKW6 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardskJAEN15 = await MarsStakingRewards.new(addressKEdSKRr, addressbmbuek, addressuYMaKW6, {from: accounts[4]});
		const addressvLqzFIG = accounts[4]
		const uintI6rLa2k = BigInt("363")
		const addressyElHQWj = accounts[2]
		const addressULdxGWK = accounts[0]
		const addressnalVvkW = await MarsStakingRewardskJAEN15.transferOwnership.call(addressvLqzFIG, {from: accounts[4]});
		const addressSjFLgm5 = await MarsStakingRewardskJAEN15.inCaseTokensGetStuck.call(addressyElHQWj, uintI6rLa2k, {from: accounts[3]});
		const addressEUzkgRp = await MarsStakingRewardskJAEN15.updateReward.call(addressULdxGWK, {from: accounts[3]});

		await expect(MarsStakingRewardskJAEN15.inCaseTokensGetStuck.call(addressyElHQWj, uintI6rLa2k, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressyyMcwDO = accounts[4]
		const addresseMWpgUk = accounts[1]
		const addressRmjJfB8 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardskJAEN15 = await MarsStakingRewards.new(addressyyMcwDO, addresseMWpgUk, addressRmjJfB8, {from: accounts[4]});
		const uintmi9x4St = BigInt("155")
		const uintcYDwPgV = BigInt("881")
		const addressEIOqCkh = accounts[2]
		const uint256yK8Ukln = await MarsStakingRewardskJAEN15.notifyRewardAmount.call(uintcYDwPgV, uintmi9x4St, {from: accounts[4]});
		const uint256JjkDpaN = await MarsStakingRewardskJAEN15.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256WUYfHNe = await MarsStakingRewardskJAEN15.earned.call(addressEIOqCkh, {from: accounts[4]});

		await expect(MarsStakingRewardskJAEN15.notifyRewardAmount.call(uintcYDwPgV, uintmi9x4St, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})