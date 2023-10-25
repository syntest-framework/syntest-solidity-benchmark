const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsiZ3wftk = await SSTRewards.new({from: accounts[2]});
		const uintwT0bXkz = BigInt("1207")
		const uintdDtcXR8 = BigInt("881")
		const uintBZhMOU4 = BigInt("1907")
//		const uint256f0Me0uR = await SSTRewardsiZ3wftk.stake.call(uintwT0bXkz, {from: "0x0000000000000000000000000000000000000001"});
//		await SSTRewardsiZ3wftk.exit.call({from: accounts[0]});
//		const uint256X0Npw0 = await SSTRewardsiZ3wftk.notifyRewardAmount.call(uintdDtcXR8, {from: accounts[2]});
//		const uint256I0wvW8 = await SSTRewardsiZ3wftk.stake.call(uintBZhMOU4, {from: accounts[5]});

		await expect(SSTRewardsiZ3wftk.stake.call(uintwT0bXkz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsdgWdHkE = await SSTRewards.new({from: accounts[1]});
		const uintroS6Te5 = BigInt("1290")
		const uintWis8Fql = BigInt("1069")
//		await SSTRewardsdgWdHkE.exit.call({from: accounts[3]});
//		const uint256WWtDVw = await SSTRewardsdgWdHkE.stake.call(uintroS6Te5, {from: accounts[5]});
//		const uint256A6z7X0V = await SSTRewardsdgWdHkE.rewardPerToken.call({from: accounts[2]});
//		const uint256AnFhzsi = await SSTRewardsdgWdHkE.withdraw.call(uintWis8Fql, {from: accounts[4]});

		await expect(SSTRewardsdgWdHkE.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewards5odDCG = await SSTRewards.new({from: accounts[4]});
		const uintoHxqhjZ = BigInt("177")
		const addressgBXzskY = accounts[5]
		const uinttc8C8yX = BigInt("543")
//		await SSTRewards5odDCG.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256zrwUwvO = await SSTRewards5odDCG.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256iRkTmSJ = await SSTRewards5odDCG.withdraw.call(uintoHxqhjZ, {from: accounts[0]});
//		const uint256pVZQdHc = await SSTRewards5odDCG.earned.call(addressgBXzskY, {from: accounts[4]});
//		const uint256EO6ySrm = await SSTRewards5odDCG.stake.call(uinttc8C8yX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewards5odDCG.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsAUQ1LSS = await SSTRewards.new({from: accounts[3]});
		const uintDV8QUPI = BigInt("780")
		const uintPgXOkZ1 = BigInt("1591")
		const uint256GSltFF = await SSTRewardsAUQ1LSS.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await SSTRewardsAUQ1LSS.getReward.call({from: accounts[4]});
//		const uint256arE4HE = await SSTRewardsAUQ1LSS.withdraw.call(uintDV8QUPI, {from: accounts[2]});
//		const uint256zvMV62C = await SSTRewardsAUQ1LSS.stake.call(uintPgXOkZ1, {from: accounts[4]});

		assert.equal(uint256GSltFF, BigInt("0"))
		await expect(SSTRewardsAUQ1LSS.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsSCI9cFL = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressH8wqdFF = accounts[1]
		const uint256LOozAkb = await SSTRewardsSCI9cFL.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256aUGWxgI = await SSTRewardsSCI9cFL.earned.call(addressH8wqdFF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZXHYE8N = await SSTRewardsSCI9cFL.rewardPerToken.call({from: accounts[3]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsAUQ1LSS = await SSTRewards.new({from: accounts[3]});
		const uintOjfj03O = BigInt("52")
		const uinttZ8VT4U = BigInt("798")
		const uint9jFPva = BigInt("1591")
		const uint256GSltFF = await SSTRewardsAUQ1LSS.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await SSTRewardsAUQ1LSS.getReward.call({from: accounts[4]});
//		const uint2566KHypF = await SSTRewardsAUQ1LSS.notifyRewardAmount.call(uintOjfj03O, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256arE4HE = await SSTRewardsAUQ1LSS.withdraw.call(uinttZ8VT4U, {from: accounts[2]});
//		const uint256zvMV62C = await SSTRewardsAUQ1LSS.stake.call(uint9jFPva, {from: accounts[4]});

		assert.equal(uint256GSltFF, BigInt("0"))
		await expect(SSTRewardsAUQ1LSS.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})