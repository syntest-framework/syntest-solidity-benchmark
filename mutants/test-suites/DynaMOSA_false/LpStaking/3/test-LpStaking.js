const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakinglZDLBRK = await LpStaking.new({from: accounts[5]});
		const uintNa7pfsg = BigInt("1377")
		const addressTVqoP2Q = accounts[1]
		const uintbWc7zEG = BigInt("1546")
//		await LpStakinglZDLBRK.lpIncomeRateChanged.call({from: accounts[5]});
//		const uint256RdTnJab = await LpStakinglZDLBRK.withdraw.call(uintNa7pfsg, {from: accounts[2]});
//		const addressQpivd6K = await LpStakinglZDLBRK.updateReward.call(addressTVqoP2Q, {from: accounts[3]});
//		const uint256BaFoIQP = await LpStakinglZDLBRK.stake.call(uintbWc7zEG, {from: accounts[5]});
//		await LpStakinglZDLBRK.exit.call({from: accounts[5]});

		await expect(LpStakinglZDLBRK.lpIncomeRateChanged.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingHemhbcv = await LpStaking.new({from: accounts[4]});
		const addressDqj0LuA = accounts[3]
		const uintrwV5qBE = BigInt("949")
		const addressNV8MIya = "0x0000000000000000000000000000000000000001"
		const uintgBV12TG = BigInt("378")
//		const addressMpn0XC = await LpStakingHemhbcv.transferOwnership.call(addressDqj0LuA, {from: accounts[0]});
//		const addresscB8COBz = await LpStakingHemhbcv.inCaseTokensGetStuck.call(addressNV8MIya, uintrwV5qBE, {from: accounts[3]});
//		const uint256fEBXkOZ = await LpStakingHemhbcv.stake.call(uintgBV12TG, {from: accounts[4]});

		await expect(LpStakingHemhbcv.transferOwnership.call(addressDqj0LuA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingRyW8Shh = await LpStaking.new({from: accounts[0]});
		const addressKpHVZr8 = accounts[4]
		const addressyjuHPrf = accounts[2]
		const uint256wmuahiK = await LpStakingRyW8Shh.rewardEarned.call(addressKpHVZr8, {from: accounts[0]});
//		await LpStakingRyW8Shh.nonEmergencyStop.call({from: accounts[0]});
//		const uint256iBUBg7 = await LpStakingRyW8Shh.rewardEarned.call(addressyjuHPrf, {from: accounts[1]});

		assert.equal(uint256wmuahiK, BigInt("0"))
		await expect(LpStakingRyW8Shh.nonEmergencyStop.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingJ8rBGt7 = await LpStaking.new({from: accounts[2]});
		const uint31DXUN = BigInt("1462")
		const addressHBV7sUH = accounts[2]
//		const uint256OcYYUh0 = await LpStakingJ8rBGt7.incomePerToken.call({from: accounts[3]});
//		await LpStakingJ8rBGt7.onlyOwner.call({from: accounts[3]});
//		const addressL2AymRN = await LpStakingJ8rBGt7.inCaseTokensGetStuck.call(addressHBV7sUH, uint31DXUN, {from: accounts[2]});
//		const uint256hVMk0Sz = await LpStakingJ8rBGt7.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(LpStakingJ8rBGt7.incomePerToken.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingeYwLgn6 = await LpStaking.new({from: accounts[4]});
		const addressuPihkOI = accounts[3]
		const uintVY7bBg5 = BigInt("1380")
		const addressYcgnbtB = accounts[2]
		const addressFMaSruw = "0x0000000000000000000000000000000000000001"
		const uintTv9bn7u = BigInt("1801")
//		const uint256a6lrx9 = await LpStakingeYwLgn6.incomeEarned.call(addressuPihkOI, {from: accounts[2]});
//		const addressMfkjbTA = await LpStakingeYwLgn6.inCaseTokensGetStuck.call(addressYcgnbtB, uintVY7bBg5, {from: accounts[0]});
//		const addressQIynH4O = await LpStakingeYwLgn6.updateReward.call(addressFMaSruw, {from: accounts[0]});
//		const uint256QCW50tE = await LpStakingeYwLgn6.withdraw.call(uintTv9bn7u, {from: accounts[5]});
//		await LpStakingeYwLgn6.getReward.call({from: accounts[3]});

		await expect(LpStakingeYwLgn6.incomeEarned.call(addressuPihkOI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingoaXWbta = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYRVOqyC = BigInt("1496")
		const addressJh7SAu1 = accounts[0]
		const uintVNRlfc = BigInt("759")
		const addressbKQdbx = accounts[0]
		const addressyMyPNO = await LpStakingoaXWbta.inCaseTokensGetStuck.call(addressJh7SAu1, uintYRVOqyC, {from: accounts[2]});
		await LpStakingoaXWbta.lpIncomeRateChanged.call({from: accounts[0]});
		const uint256ofMWuHu = await LpStakingoaXWbta.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressIkcQH6d = await LpStakingoaXWbta.inCaseTokensGetStuck.call(addressbKQdbx, uintVNRlfc, {from: accounts[2]});
	});

	it('test for LpStaking', async () => {
		const LpStakingf5EFkFk = await LpStaking.new({from: accounts[0]});
		const uintxRUE4yd = BigInt("1921")
		const uintEAhopOe = BigInt("1197")
		const addressm40dsgt = accounts[1]
//		const uint256k9A4CAl = await LpStakingf5EFkFk.withdraw.call(uintxRUE4yd, {from: accounts[2]});
//		const addressZ5haPd7 = await LpStakingf5EFkFk.inCaseTokensGetStuck.call(addressm40dsgt, uintEAhopOe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingf5EFkFk.withdraw.call(uintxRUE4yd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingf5EFkFk = await LpStaking.new({from: accounts[0]});
		const addressFBPdFb3 = accounts[2]
		const addresseDl7Ci = accounts[5]
		const addressNAXsBt5 = accounts[4]
		const addressAkO6ijl = accounts[1]
		const uintzGqsm8R = BigInt("1921")
		const uintvcFMVS3 = BigInt("1195")
		const addressWUYRQAD = accounts[1]
		const addressThipXNd = accounts[4]
		const addressjX5Oeh = accounts[0]
		const addressONrRqs = accounts[3]
		const addressYAWaY10 = "0x0000000000000000000000000000000000000001"
		const addressocLNhPB = await LpStakingf5EFkFk.initialize.call(addressAkO6ijl, addressNAXsBt5, addresseDl7Ci, addressFBPdFb3, {from: accounts[4]});
//		const uint256k9A4CAl = await LpStakingf5EFkFk.withdraw.call(uintzGqsm8R, {from: accounts[2]});
//		const addressZ5haPd7 = await LpStakingf5EFkFk.inCaseTokensGetStuck.call(addressWUYRQAD, uintvcFMVS3, {from: "0x0000000000000000000000000000000000000001"});
//		const addressdbYPN6k = await LpStakingf5EFkFk.initialize.call(addressYAWaY10, addressONrRqs, addressjX5Oeh, addressThipXNd, {from: accounts[1]});

		await expect(LpStakingf5EFkFk.withdraw.call(uintzGqsm8R, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingf5EFkFk = await LpStaking.new({from: accounts[0]});
		const addresswm1x40l = accounts[3]
		const uintsWbpKTk = BigInt("1921")
		const uintKQXCd45 = BigInt("1197")
		const addressKPgFKar = accounts[1]
		const uint256Y3Vq81f = await LpStakingf5EFkFk.getUserAccumulatedWithdrawIncome.call(addresswm1x40l, {from: accounts[0]});
//		const uint256k9A4CAl = await LpStakingf5EFkFk.withdraw.call(uintsWbpKTk, {from: accounts[2]});
//		const addressZ5haPd7 = await LpStakingf5EFkFk.inCaseTokensGetStuck.call(addressKPgFKar, uintKQXCd45, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Y3Vq81f, BigInt("0"))
		await expect(LpStakingf5EFkFk.withdraw.call(uintsWbpKTk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingRyW8Shh = await LpStaking.new({from: accounts[0]});
		const addressYXvWr9x = accounts[5]
		const addressmOXYTx9 = accounts[2]
		const uint256wmuahiK = await LpStakingRyW8Shh.rewardEarned.call(addressYXvWr9x, {from: accounts[0]});
		const uint256iBUBg7 = await LpStakingRyW8Shh.rewardEarned.call(addressmOXYTx9, {from: accounts[1]});
//		const uint256ZDuaCzb = await LpStakingRyW8Shh.getCurIncomeRate.call({from: accounts[5]});

		assert.equal(uint256iBUBg7, BigInt("0"))
		assert.equal(uint256wmuahiK, BigInt("0"))
		await expect(LpStakingRyW8Shh.getCurIncomeRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingRyW8Shh = await LpStaking.new({from: accounts[0]});
		const addressj9YCCWt = accounts[6]
		const addressHuzAIkl = accounts[2]
		const uint256wmuahiK = await LpStakingRyW8Shh.rewardEarned.call(addressj9YCCWt, {from: accounts[0]});
//		await LpStakingRyW8Shh.lpRewardRateChanged.call({from: accounts[0]});
//		const uint256iBUBg7 = await LpStakingRyW8Shh.rewardEarned.call(addressHuzAIkl, {from: accounts[1]});

		assert.equal(uint256wmuahiK, BigInt("0"))
		await expect(LpStakingRyW8Shh.lpRewardRateChanged.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingeGaYjT2 = await LpStaking.new({from: accounts[3]});
		const addressqJwxMFl = accounts[0]
		const byteqClnM8X = "0x060c0f0302130b091007151e061e191a0a20040b161b201e1801041a110f191e"
		const byteH8cVbzJ = "0x1c0d120806111312031c04121c0c0a111a04020c121e14100c050c19090d1803"
		const uintkMuBFhb = BigInt("115")
		const uintZ4PoXKY = BigInt("1755")
		const uintl1A8ZKL = BigInt("903")
		const boolnyoO47 = true
		const addressS6ZcQf7 = accounts[1]
		const address3PqPwI = "0x0000000000000000000000000000000000000001"
		const addressLw59bI = accounts[2]
		const addressNMhqTyf = accounts[4]
//		await LpStakingeGaYjT2.exit.call({from: accounts[0]});
//		const addressImEETXT = await LpStakingeGaYjT2.transferOwnership.call(addressqJwxMFl, {from: accounts[0]});
//		const uint256xHqNv9R = await LpStakingeGaYjT2.stakeWithPermit.call(uintl1A8ZKL, uintZ4PoXKY, uintkMuBFhb, byteH8cVbzJ, byteqClnM8X, {from: accounts[0]});
//		const boolOWBz555 = await LpStakingeGaYjT2.setEmergencyStop.call(boolnyoO47, {from: "0x0000000000000000000000000000000000000001"});
//		const addresstjma1nV = await LpStakingeGaYjT2.initialize.call(addressNMhqTyf, addressLw59bI, address3PqPwI, addressS6ZcQf7, {from: accounts[0]});

		await expect(LpStakingeGaYjT2.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})