const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardshAfR68v = await JGNRewards.new({from: accounts[3]});
		const addressA8rFHj3 = accounts[2]
		const addressXEKIXz = accounts[2]
		const uint256e8pmXeE = await JGNRewardshAfR68v.balanceOf.call(addressA8rFHj3, {from: accounts[1]});
		await JGNRewardshAfR68v.getReward.call({from: accounts[4]});
		const uint256NrfILhB = await JGNRewardshAfR68v.balanceOf.call(addressXEKIXz, {from: accounts[3]});

		assert.equal(uint256e8pmXeE, BigInt("0"))
		await expect(JGNRewardshAfR68v.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardszKaZ1b3 = await JGNRewards.new({from: accounts[3]});
		const addressM1dP46X = accounts[1]
		const addressSQpP7XA = "0x0000000000000000000000000000000000000001"
		const uint256axLFI7 = await JGNRewardszKaZ1b3.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const addressuFi1hlM = await JGNRewardszKaZ1b3.updateReward.call(addressM1dP46X, {from: "0x0000000000000000000000000000000000000001"});
		const uint256se6yeiR = await JGNRewardszKaZ1b3.balanceOf.call(addressSQpP7XA, {from: accounts[0]});
		const uint256JXYVqvV = await JGNRewardszKaZ1b3.rewardPerToken.call({from: accounts[3]});
		await JGNRewardszKaZ1b3.getReward.call({from: accounts[0]});

		assert.equal(uint256axLFI7, BigInt("0"))
		await expect(JGNRewardszKaZ1b3.updateReward.call(addressM1dP46X, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsMUCz7Dv = await JGNRewards.new({from: accounts[5]});
		const uintcA2vU2t = BigInt("393")
		const uint256kgHRty = await JGNRewardsMUCz7Dv.totalSupply.call({from: accounts[5]});
		await JGNRewardsMUCz7Dv.getReward.call({from: accounts[2]});
		const uint256PatQXyt = await JGNRewardsMUCz7Dv.withdraw.call(uintcA2vU2t, {from: accounts[0]});

		assert.equal(uint256kgHRty, BigInt("0"))
		await expect(JGNRewardsMUCz7Dv.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsCEMzTNv = await JGNRewards.new({from: accounts[2]});
		const uintum57HVH = BigInt("697")
		const uintPVoNYUp = BigInt("55")
		const addressNCgEFxx = accounts[1]
		const uintWMzEM3g = BigInt("1578")
		const addressicOWOg = accounts[0]
		const uint256uoCHRUZ = await JGNRewardsCEMzTNv.notifyRewardAmount.call(uintum57HVH, {from: accounts[5]});
		const uint256Cu5HxPj = await JGNRewardsCEMzTNv.withdraw.call(uintPVoNYUp, {from: accounts[0]});
		const uint256K9flECR = await JGNRewardsCEMzTNv.earned.call(addressNCgEFxx, {from: accounts[4]});
		const uint256GgXiSYx = await JGNRewardsCEMzTNv.withdraw.call(uintWMzEM3g, {from: accounts[3]});
		const uint256JgAtKz = await JGNRewardsCEMzTNv.earned.call(addressicOWOg, {from: accounts[5]});

		await expect(JGNRewardsCEMzTNv.notifyRewardAmount.call(uintum57HVH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsP7TmxXB = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardsP7TmxXB.checkStart.call({from: accounts[4]});
		const uint256R2RSzDv = await JGNRewardsP7TmxXB.lastTimeRewardApplicable.call({from: accounts[3]});
		await JGNRewardsP7TmxXB.exit.call({from: accounts[5]});
		const uint256t8IWTp3 = await JGNRewardsP7TmxXB.rewardPerToken.call({from: accounts[0]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardshu6OMoi = await JGNRewards.new({from: accounts[2]});
		const uintO94yaK9 = BigInt("381")
		const uintfHS9tay = BigInt("1702")
		const addressDBa2hjv = accounts[1]
		const uint256rBwJdIF = await JGNRewardshu6OMoi.stake.call(uintO94yaK9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gHzFMA = await JGNRewardshu6OMoi.withdraw.call(uintfHS9tay, {from: accounts[0]});
		const uint256tCJ3X0 = await JGNRewardshu6OMoi.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256oDhxqPy = await JGNRewardshu6OMoi.earned.call(addressDBa2hjv, {from: accounts[4]});

		await expect(JGNRewardshu6OMoi.stake.call(uintO94yaK9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsjWOzFlK = await JGNRewards.new({from: accounts[0]});
		const addressdPSulXj = accounts[1]
		const uintapwXY7N = BigInt("1822")
		const uint256bRIrSS3 = await JGNRewardsjWOzFlK.earned.call(addressdPSulXj, {from: accounts[4]});
		await JGNRewardsjWOzFlK.exit.call({from: accounts[0]});
		const uint256Ey61K8k = await JGNRewardsjWOzFlK.notifyRewardAmount.call(uintapwXY7N, {from: accounts[1]});
		await JGNRewardsjWOzFlK.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardsjWOzFlK.checkStart.call({from: accounts[5]});
		await JGNRewardsjWOzFlK.exit.call({from: accounts[0]});

		assert.equal(uint256bRIrSS3, BigInt("0"))
		await expect(JGNRewardsjWOzFlK.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})