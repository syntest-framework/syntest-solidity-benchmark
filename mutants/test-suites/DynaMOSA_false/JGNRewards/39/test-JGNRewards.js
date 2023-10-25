const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardshO97N4e = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardshO97N4e.checkStart.call({from: accounts[4]});
		await JGNRewardshO97N4e.checkStart.call({from: accounts[2]});
		await JGNRewardshO97N4e.checkStart.call({from: accounts[2]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsaLdWoCx = await JGNRewards.new({from: accounts[3]});
		const addressHeXLPnC = "0x0000000000000000000000000000000000000001"
		const uintgAi1Yi = BigInt("3")
		const uintonflUIA = BigInt("890")
		const uintnOPtjVG = BigInt("536")
		const uint256t1vXEy2 = await JGNRewardsaLdWoCx.earned.call(addressHeXLPnC, {from: accounts[2]});
//		await JGNRewardsaLdWoCx.getReward.call({from: accounts[2]});
//		const uint256qSvStNm = await JGNRewardsaLdWoCx.stake.call(uintgAi1Yi, {from: accounts[2]});
//		const uint256JUe5Zz = await JGNRewardsaLdWoCx.stake.call(uintonflUIA, {from: accounts[1]});
//		const uint256j2LsVEg = await JGNRewardsaLdWoCx.stake.call(uintnOPtjVG, {from: accounts[1]});
//		await JGNRewardsaLdWoCx.getReward.call({from: accounts[1]});

		assert.equal(uint256t1vXEy2, BigInt("0"))
		await expect(JGNRewardsaLdWoCx.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsiOcDS6x = await JGNRewards.new({from: accounts[0]});
		const uintKn6Onbb = BigInt("1077")
		const uintqxe20eg = BigInt("1667")
//		const uint256THxGVT5 = await JGNRewardsiOcDS6x.withdraw.call(uintKn6Onbb, {from: accounts[0]});
//		const uint256LnWS6jd = await JGNRewardsiOcDS6x.lastTimeRewardApplicable.call({from: accounts[3]});
//		await JGNRewardsiOcDS6x.checkStart.call({from: accounts[1]});
//		const uint256Px2osyv = await JGNRewardsiOcDS6x.withdraw.call(uintqxe20eg, {from: accounts[0]});

		await expect(JGNRewardsiOcDS6x.withdraw.call(uintKn6Onbb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsxzTFGOz = await JGNRewards.new({from: accounts[2]});
		const uintcbu7N8e = BigInt("818")
		const addressq2pmVF8 = accounts[0]
		const uint256nJS47wF = await JGNRewardsxzTFGOz.rewardPerToken.call({from: accounts[3]});
//		const uint256fyngfaz = await JGNRewardsxzTFGOz.notifyRewardAmount.call(uintcbu7N8e, {from: accounts[0]});
//		const uint256EWtnlF = await JGNRewardsxzTFGOz.balanceOf.call(addressq2pmVF8, {from: accounts[2]});
//		await JGNRewardsxzTFGOz.checkStart.call({from: accounts[2]});
//		const uint256AJfQcbH = await JGNRewardsxzTFGOz.lastTimeRewardApplicable.call({from: accounts[5]});

		assert.equal(uint256nJS47wF, BigInt("0"))
		await expect(JGNRewardsxzTFGOz.notifyRewardAmount.call(uintcbu7N8e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsk6yMh18 = await JGNRewards.new({from: accounts[1]});
		const uintjditvpK = BigInt("1184")
		const uintK683Ej0 = BigInt("1199")
		const uintlS7Izgp = BigInt("474")
//		await JGNRewardsk6yMh18.checkStart.call({from: accounts[3]});
//		const uint256FixHP1x = await JGNRewardsk6yMh18.stake.call(uintjditvpK, {from: accounts[4]});
//		const uint256wMZ9VIR = await JGNRewardsk6yMh18.withdraw.call(uintK683Ej0, {from: accounts[2]});
//		const uint256qQD465Y = await JGNRewardsk6yMh18.withdraw.call(uintlS7Izgp, {from: accounts[1]});

		await expect(JGNRewardsk6yMh18.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsOdSA0t = await JGNRewards.new({from: accounts[4]});
		const addressVlyYLse = accounts[1]
		const uintilpI2ak = BigInt("1472")
//		await JGNRewardsOdSA0t.exit.call({from: accounts[2]});
//		const uint256ZreDNpZ = await JGNRewardsOdSA0t.balanceOf.call(addressVlyYLse, {from: accounts[0]});
//		const uint256BJYI6Wf = await JGNRewardsOdSA0t.rewardPerToken.call({from: accounts[2]});
//		const uint256bcPl2EK = await JGNRewardsOdSA0t.withdraw.call(uintilpI2ak, {from: accounts[3]});
//		await JGNRewardsOdSA0t.checkStart.call({from: accounts[3]});

		await expect(JGNRewardsOdSA0t.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsaLdWoCx = await JGNRewards.new({from: accounts[3]});
		const addresstxOo8oE = "0x0000000000000000000000000000000000000001"
		const uintt0mSDig = BigInt("0")
		const uintfXMa1eq = BigInt("890")
		const uintwBxUHu = BigInt("1761")
		const uintEqTYX7W = BigInt("536")
		const uintR2jUxdw = BigInt("1543")
		const addressYOQ5rYs = "0x0000000000000000000000000000000000000001"
		const uintwXt04Ut = BigInt("1558")
		const uint256t1vXEy2 = await JGNRewardsaLdWoCx.earned.call(addresstxOo8oE, {from: accounts[2]});
//		await JGNRewardsaLdWoCx.getReward.call({from: accounts[2]});
//		const uint256qSvStNm = await JGNRewardsaLdWoCx.stake.call(uintt0mSDig, {from: accounts[2]});
//		const uint256JUe5Zz = await JGNRewardsaLdWoCx.stake.call(uintfXMa1eq, {from: accounts[1]});
//		const uint256bRTHyft = await JGNRewardsaLdWoCx.stake.call(uintwBxUHu, {from: accounts[2]});
//		const uint256j2LsVEg = await JGNRewardsaLdWoCx.stake.call(uintEqTYX7W, {from: accounts[1]});
//		const uint256Lmssjbh = await JGNRewardsaLdWoCx.withdraw.call(uintR2jUxdw, {from: accounts[2]});
//		const uint256BKNmnCv = await JGNRewardsaLdWoCx.balanceOf.call(addressYOQ5rYs, {from: accounts[0]});
//		const uint256z0Er7Sj = await JGNRewardsaLdWoCx.withdraw.call(uintwXt04Ut, {from: accounts[1]});
//		await JGNRewardsaLdWoCx.getReward.call({from: accounts[1]});

		assert.equal(uint256t1vXEy2, BigInt("0"))
		await expect(JGNRewardsaLdWoCx.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})