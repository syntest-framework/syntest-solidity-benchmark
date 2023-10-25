const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingRu3Y6H6 = await LpStaking.new({from: accounts[3]});
		const addressP4i7k5O = accounts[5]
		const uintlrgnfHm = BigInt("648")
		const uintIFDNWz1 = BigInt("1070")
		const uint2562X4HXF = await LpStakingRu3Y6H6.getUserAccumulatedWithdrawIncome.call(addressP4i7k5O, {from: accounts[4]});
		const uint256Pb4q0DS = await LpStakingRu3Y6H6.weiToSatoshi.call(uintlrgnfHm, {from: accounts[2]});
		const uint256zzU3EOj = await LpStakingRu3Y6H6.weiToSatoshi.call(uintIFDNWz1, {from: accounts[0]});

		assert.equal(uint2562X4HXF, BigInt("0"))
		assert.equal(uint256Pb4q0DS, BigInt("0"))
		assert.equal(uint256zzU3EOj, BigInt("0"))
	});

	it('test for LpStaking', async () => {
		const LpStakingTSmSdex = await LpStaking.new({from: accounts[4]});
		const addressELgpH7x = accounts[2]
		const addressRGVc5ge = accounts[2]
		const uintXqg7OiS = BigInt("1859")
		const addressYqkMC6E = await LpStakingTSmSdex.updateReward.call(addressELgpH7x, {from: accounts[1]});
		const uint256DBUo3A = await LpStakingTSmSdex.incomeEarned.call(addressRGVc5ge, {from: "0x0000000000000000000000000000000000000001"});
		await LpStakingTSmSdex.lpRewardRateChanged.call({from: accounts[0]});
		const uint256np7ePvl = await LpStakingTSmSdex.weiToSatoshi.call(uintXqg7OiS, {from: accounts[0]});
		await LpStakingTSmSdex.lpIncomeRateChanged.call({from: accounts[3]});

		await expect(LpStakingTSmSdex.updateReward.call(addressELgpH7x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingUGCW8F = await LpStaking.new({from: accounts[2]});
		await LpStakingUGCW8F.exit.call({from: accounts[3]});
		await LpStakingUGCW8F.nonReentrant.call({from: accounts[4]});
		await LpStakingUGCW8F.getReward.call({from: accounts[4]});

		await expect(LpStakingUGCW8F.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingrjATI02 = await LpStaking.new({from: accounts[0]});
		const addressiDIh26 = accounts[1]
		const addressTryR4sn = accounts[5]
		const addressGGetsEo = accounts[4]
		const addressfE3emy7 = accounts[2]
		const addressvYdNj6z = await LpStakingrjATI02.initialize.call(addressfE3emy7, addressGGetsEo, addressTryR4sn, addressiDIh26, {from: accounts[4]});
		await LpStakingrjATI02.nonReentrant.call({from: accounts[0]});
		await LpStakingrjATI02.exit.call({from: accounts[0]});

		await expect(LpStakingrjATI02.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingGsNl8eV = await LpStaking.new({from: accounts[1]});
		const uintSwBSpun = BigInt("1204")
		const addressWhOjKUm = accounts[3]
		const bool4EkdOb = true
		const addressFuH6h3d = accounts[2]
		const addressntbMsq = accounts[3]
		const addresslCFJhQl = accounts[1]
		const addressaW1H390 = accounts[4]
		const addressp2cGOQ7 = await LpStakingGsNl8eV.inCaseTokensGetStuck.call(addressWhOjKUm, uintSwBSpun, {from: accounts[4]});
		const boolL5w5Jxh = await LpStakingGsNl8eV.setEmergencyStop.call(bool4EkdOb, {from: accounts[1]});
		const addresssbV3PU2 = await LpStakingGsNl8eV.initialize.call(addressaW1H390, addresslCFJhQl, addressntbMsq, addressFuH6h3d, {from: accounts[2]});

		await expect(LpStakingGsNl8eV.inCaseTokensGetStuck.call(addressWhOjKUm, uintSwBSpun, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingGJKCtv = await LpStaking.new({from: accounts[1]});
		const addressw78rcmR = accounts[0]
		const bytejjiljj4 = "0x09141110150c0013131c0317131a1719081212180b1c0d0101100615041f0403"
		const byteHAH61q = "0x041a081e1104071f151c151617150c140a060e06141e050913080f0c170f0808"
		const uintxkHUdUF = BigInt("46")
		const uintHpqfL2l = BigInt("1601")
		const uintIfgxCw = BigInt("1390")
		const addressQZfjvQ2 = accounts[5]
		const uint256yAsnF5J = await LpStakingGJKCtv.incomeEarned.call(addressw78rcmR, {from: accounts[4]});
		const uint256Wa8f0h = await LpStakingGJKCtv.stakeWithPermit.call(uintIfgxCw, uintHpqfL2l, uintxkHUdUF, byteHAH61q, bytejjiljj4, {from: accounts[2]});
		const addressaT2ZYH3 = await LpStakingGJKCtv.updateReward.call(addressQZfjvQ2, {from: accounts[3]});
		const uint256oLxlCR7 = await LpStakingGJKCtv.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await LpStakingGJKCtv.exit.call({from: accounts[0]});
		await LpStakingGJKCtv.lpRewardRateChanged.call({from: accounts[4]});

		await expect(LpStakingGJKCtv.incomeEarned.call(addressw78rcmR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingRu3Y6H6 = await LpStaking.new({from: accounts[3]});
		const addressyAbxxZ2 = accounts[6]
		const uintKIyUMNv = BigInt("648")
		const uintMsktw5q = BigInt("1070")
		const uint2562X4HXF = await LpStakingRu3Y6H6.getUserAccumulatedWithdrawIncome.call(addressyAbxxZ2, {from: accounts[4]});
		const uint256NsNGo10 = await LpStakingRu3Y6H6.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256Pb4q0DS = await LpStakingRu3Y6H6.weiToSatoshi.call(uintKIyUMNv, {from: accounts[2]});
		const uint256zzU3EOj = await LpStakingRu3Y6H6.weiToSatoshi.call(uintMsktw5q, {from: accounts[0]});

		assert.equal(uint2562X4HXF, BigInt("0"))
		await expect(LpStakingRu3Y6H6.lastTimeRewardApplicable.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingatLgSuV = await LpStaking.new({from: accounts[2]});
		const addressdZigsSi = accounts[5]
		const boolqi1ToHx = true
		const uint256vJuzIxs = await LpStakingatLgSuV.rewardEarned.call(addressdZigsSi, {from: accounts[4]});
		const boolxOjNA6u = await LpStakingatLgSuV.setEmergencyStop.call(boolqi1ToHx, {from: accounts[0]});

		assert.equal(uint256vJuzIxs, BigInt("0"))
		await expect(LpStakingatLgSuV.setEmergencyStop.call(boolqi1ToHx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingsL97fmf = await LpStaking.new({from: accounts[2]});
		const addressrAupHpT = "0x0000000000000000000000000000000000000001"
		const uintB6bhQhd = BigInt("396")
		const addressCfIul3l = accounts[3]
		const addressPKvPRlI = accounts[1]
		const uint256MHOEqiu = await LpStakingsL97fmf.getCurIncomeRate.call({from: accounts[2]});
		await LpStakingsL97fmf.nonReentrant.call({from: accounts[1]});
		const uint256hddYfKC = await LpStakingsL97fmf.rewardEarned.call(addressrAupHpT, {from: accounts[2]});
		const addressFaNSq4v = await LpStakingsL97fmf.inCaseTokensGetStuck.call(addressCfIul3l, uintB6bhQhd, {from: accounts[3]});
		await LpStakingsL97fmf.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256LhmcQxG = await LpStakingsL97fmf.getUserAccumulatedWithdrawIncome.call(addressPKvPRlI, {from: accounts[3]});

		await expect(LpStakingsL97fmf.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingyKVe7QJ = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressRVTj5h = accounts[0]
		const addressclDCWnR = accounts[1]
		const addressbQpbQSe = accounts[1]
		const addressrBoZyTp = await LpStakingyKVe7QJ.updateIncome.call(addressRVTj5h, {from: accounts[3]});
		const addressGS2SyQz = await LpStakingyKVe7QJ.updateIncome.call(addressclDCWnR, {from: accounts[3]});
		const uint256i1i03nk = await LpStakingyKVe7QJ.rewardEarned.call(addressbQpbQSe, {from: accounts[3]});
		const uint256UN3Ex7h = await LpStakingyKVe7QJ.rewardPerToken.call({from: accounts[0]});
	});
})