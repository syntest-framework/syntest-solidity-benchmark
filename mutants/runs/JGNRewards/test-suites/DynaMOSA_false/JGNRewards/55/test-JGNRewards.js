const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsU4bG8LX = await JGNRewards.new({from: accounts[3]});
		const uintF4iFfJf = BigInt("704")
		const uintS2whJi = BigInt("260")
		const uintObAdy3W = BigInt("379")
		const addressiuTrMKK = accounts[3]
		const uint2560xoQKV = await JGNRewardsU4bG8LX.withdraw.call(uintF4iFfJf, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iP7wnw1 = await JGNRewardsU4bG8LX.withdraw.call(uintS2whJi, {from: accounts[3]});
		const uint256OCobnov = await JGNRewardsU4bG8LX.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256LUr646I = await JGNRewardsU4bG8LX.withdraw.call(uintObAdy3W, {from: accounts[3]});
		const uint256HrpUV6H = await JGNRewardsU4bG8LX.earned.call(addressiuTrMKK, {from: accounts[4]});

		await expect(JGNRewardsU4bG8LX.withdraw.call(uintF4iFfJf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsYMHKDO = await JGNRewards.new({from: accounts[1]});
		const addressC0COQCT = accounts[3]
		const addressLu1zp5Z = accounts[1]
		const uintzpBW9UI = BigInt("1554")
		const uintGQEwsxR = BigInt("1727")
		const uint256XrAC8lb = await JGNRewardsYMHKDO.rewardPerToken.call({from: accounts[4]});
		const uint256ovltiX = await JGNRewardsYMHKDO.earned.call(addressC0COQCT, {from: accounts[3]});
		const uint256nbBtbWa = await JGNRewardsYMHKDO.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256SPte8Ye = await JGNRewardsYMHKDO.balanceOf.call(addressLu1zp5Z, {from: accounts[1]});
		const uint256uHdBnXd = await JGNRewardsYMHKDO.notifyRewardAmount.call(uintzpBW9UI, {from: accounts[3]});
		const uint256JqFt38C = await JGNRewardsYMHKDO.withdraw.call(uintGQEwsxR, {from: accounts[1]});

		assert.equal(uint256SPte8Ye, BigInt("0"))
		assert.equal(uint256XrAC8lb, BigInt("0"))
		assert.equal(uint256nbBtbWa, BigInt("0"))
		assert.equal(uint256ovltiX, BigInt("0"))
		await expect(JGNRewardsYMHKDO.notifyRewardAmount.call(uintzpBW9UI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsvmKS7zJ = await JGNRewards.new({from: accounts[3]});
		const uintdbPiiBm = BigInt("120")
		const uintpqYYaVL = BigInt("151")
		const uinto8Uhs2 = BigInt("1496")
		const addressGvWYvgW = accounts[3]
		const uintlSOCDYs = BigInt("1711")
		const addresslAyCX8L = accounts[4]
		const uint256UIubzqZ = await JGNRewardsvmKS7zJ.stake.call(uintdbPiiBm, {from: accounts[1]});
		const uint256f8A8PGT = await JGNRewardsvmKS7zJ.withdraw.call(uintpqYYaVL, {from: accounts[0]});
		const uint256jAhIJ6L = await JGNRewardsvmKS7zJ.withdraw.call(uinto8Uhs2, {from: accounts[2]});
		const addressrk7AOWQ = await JGNRewardsvmKS7zJ.updateReward.call(addressGvWYvgW, {from: accounts[4]});
		const uint256jFvcig = await JGNRewardsvmKS7zJ.stake.call(uintlSOCDYs, {from: accounts[2]});
		const uint256BlAXrYF = await JGNRewardsvmKS7zJ.balanceOf.call(addresslAyCX8L, {from: accounts[2]});

		await expect(JGNRewardsvmKS7zJ.stake.call(uintdbPiiBm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsJa6jHWr = await JGNRewards.new({from: accounts[4]});
		const addresssjFe2kd = accounts[1]
		const addressAT85pul = accounts[0]
		const uint256ZHvXT9o = await JGNRewardsJa6jHWr.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iV8UlbM = await JGNRewardsJa6jHWr.earned.call(addresssjFe2kd, {from: accounts[0]});
		const addressDtBke5B = await JGNRewardsJa6jHWr.updateReward.call(addressAT85pul, {from: accounts[3]});

		assert.equal(uint256ZHvXT9o, BigInt("0"))
		assert.equal(uint256iV8UlbM, BigInt("0"))
		await expect(JGNRewardsJa6jHWr.updateReward.call(addressAT85pul, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardshxp92CU = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFdxVkm = BigInt("574")
		const uintVfPLh7x = BigInt("660")
		const addressD99krRi = accounts[2]
		const uint256k0hvsUO = await JGNRewardshxp92CU.stake.call(uintFdxVkm, {from: accounts[4]});
		const uint256WyqGOFH = await JGNRewardshxp92CU.stake.call(uintVfPLh7x, {from: accounts[0]});
		await JGNRewardshxp92CU.getReward.call({from: accounts[3]});
		const addressU07AzG2 = await JGNRewardshxp92CU.updateReward.call(addressD99krRi, {from: accounts[5]});
		await JGNRewardshxp92CU.checkStart.call({from: accounts[2]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsYkfdXh2 = await JGNRewards.new({from: accounts[0]});
		const uintXiherXq = BigInt("1110")
		const uint11B1Y1 = BigInt("937")
		const uintAubrjk = BigInt("1880")
		await JGNRewardsYkfdXh2.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Fnrrn50 = await JGNRewardsYkfdXh2.rewardPerToken.call({from: accounts[4]});
		const uint256K6mU7IO = await JGNRewardsYkfdXh2.withdraw.call(uintXiherXq, {from: accounts[1]});
		const uint256JVdf88M = await JGNRewardsYkfdXh2.withdraw.call(uint11B1Y1, {from: accounts[0]});
		const uint256h6AjVvg = await JGNRewardsYkfdXh2.withdraw.call(uintAubrjk, {from: accounts[5]});

		await expect(JGNRewardsYkfdXh2.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsTvzHM9 = await JGNRewards.new({from: accounts[3]});
		const uintGCIHUH3 = BigInt("384")
		const uint256BDSclLu = await JGNRewardsTvzHM9.totalSupply.call({from: accounts[4]});
		await JGNRewardsTvzHM9.getReward.call({from: accounts[2]});
		const uint256HtXSu1 = await JGNRewardsTvzHM9.stake.call(uintGCIHUH3, {from: accounts[1]});
		const uint256kYBF8eY = await JGNRewardsTvzHM9.totalSupply.call({from: accounts[2]});
		const uint256zjGjLIg = await JGNRewardsTvzHM9.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256BDSclLu, BigInt("0"))
		await expect(JGNRewardsTvzHM9.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})