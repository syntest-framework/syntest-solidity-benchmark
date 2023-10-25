const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsNt5GvmQ = await JGNRewards.new({from: accounts[1]});
		const uintcojHTSr = BigInt("30")
		const uint256R202NCD = await JGNRewardsNt5GvmQ.lastTimeRewardApplicable.call({from: accounts[4]});
		await JGNRewardsNt5GvmQ.exit.call({from: accounts[0]});
		const uint256wDl6tnK = await JGNRewardsNt5GvmQ.withdraw.call(uintcojHTSr, {from: accounts[4]});
		const uint256ZiSltsL = await JGNRewardsNt5GvmQ.lastTimeRewardApplicable.call({from: accounts[4]});
		await JGNRewardsNt5GvmQ.checkStart.call({from: accounts[3]});

		assert.equal(uint256R202NCD, BigInt("0"))
		await expect(JGNRewardsNt5GvmQ.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsAM89Q5g = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintS1TL7dr = BigInt("1839")
		const uintMHFaquS = BigInt("542")
		const uint256HgB1YM2 = await JGNRewardsAM89Q5g.withdraw.call(uintS1TL7dr, {from: accounts[0]});
		await JGNRewardsAM89Q5g.checkStart.call({from: accounts[0]});
		const uint256aJZIjO = await JGNRewardsAM89Q5g.stake.call(uintMHFaquS, {from: accounts[5]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsdWqOdA = await JGNRewards.new({from: accounts[5]});
		const addressAqm9XzY = accounts[2]
		const uintoEzLL7y = BigInt("1957")
		const uintXz5Qc1U = BigInt("246")
		const uint256NUEI9jj = await JGNRewardsdWqOdA.earned.call(addressAqm9XzY, {from: accounts[0]});
		const uint256n039kSI = await JGNRewardsdWqOdA.stake.call(uintoEzLL7y, {from: accounts[0]});
		const uint256mWtCq2W = await JGNRewardsdWqOdA.rewardPerToken.call({from: accounts[2]});
		const uint256ZBuSjJ4 = await JGNRewardsdWqOdA.withdraw.call(uintXz5Qc1U, {from: accounts[1]});
		const uint256TIXEwCx = await JGNRewardsdWqOdA.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256NUEI9jj, BigInt("0"))
		await expect(JGNRewardsdWqOdA.stake.call(uintoEzLL7y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsW74ij0u = await JGNRewards.new({from: accounts[1]});
		const uintl5FJtTj = BigInt("256")
		const uintVI7Ddaw = BigInt("155")
		const addressI1EKL8Q = accounts[0]
		const uint256pITVzwt = await JGNRewardsW74ij0u.withdraw.call(uintl5FJtTj, {from: accounts[0]});
		await JGNRewardsW74ij0u.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256BkkKbYc = await JGNRewardsW74ij0u.withdraw.call(uintVI7Ddaw, {from: accounts[4]});
		const uint256BHD5L1E = await JGNRewardsW74ij0u.rewardPerToken.call({from: accounts[0]});
		const uint256PTQC1g9 = await JGNRewardsW74ij0u.earned.call(addressI1EKL8Q, {from: accounts[1]});

		await expect(JGNRewardsW74ij0u.withdraw.call(uintl5FJtTj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsnMFpqI = await JGNRewards.new({from: accounts[0]});
		const addressJDvt3V5 = accounts[0]
		const addressi6RQgBJ = accounts[4]
		const addressyw1tmLT = accounts[3]
		const addressAlUch7B = await JGNRewardsnMFpqI.updateReward.call(addressJDvt3V5, {from: accounts[3]});
		const uint256LeswZZ = await JGNRewardsnMFpqI.rewardPerToken.call({from: accounts[4]});
		const uint256S2Had7 = await JGNRewardsnMFpqI.balanceOf.call(addressi6RQgBJ, {from: accounts[1]});
		const uint256EqBJxtv = await JGNRewardsnMFpqI.balanceOf.call(addressyw1tmLT, {from: accounts[1]});
		await JGNRewardsnMFpqI.exit.call({from: accounts[1]});
		await JGNRewardsnMFpqI.checkStart.call({from: accounts[4]});

		await expect(JGNRewardsnMFpqI.updateReward.call(addressJDvt3V5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsj1Rint = await JGNRewards.new({from: accounts[1]});
		const addressq3RLeQs = accounts[0]
		const addresstEgyMnY = "0x0000000000000000000000000000000000000001"
		const uintKfxAUnn = BigInt("1358")
		const uint256iUrOfnq = await JGNRewardsj1Rint.balanceOf.call(addressq3RLeQs, {from: accounts[3]});
		await JGNRewardsj1Rint.getReward.call({from: accounts[1]});
		await JGNRewardsj1Rint.getReward.call({from: accounts[3]});
		await JGNRewardsj1Rint.checkStart.call({from: accounts[1]});
		const addressgrOAxlu = await JGNRewardsj1Rint.updateReward.call(addresstEgyMnY, {from: accounts[2]});
		const uint256y4LvaN1 = await JGNRewardsj1Rint.withdraw.call(uintKfxAUnn, {from: accounts[5]});

		assert.equal(uint256iUrOfnq, BigInt("0"))
		await expect(JGNRewardsj1Rint.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsStjlQU6 = await JGNRewards.new({from: accounts[5]});
		const uintlMKQFOT = BigInt("1959")
		const uintigT2fN5 = BigInt("497")
		const uint256B8CSYB = await JGNRewardsStjlQU6.notifyRewardAmount.call(uintlMKQFOT, {from: accounts[2]});
		const uint256Csdptjz = await JGNRewardsStjlQU6.stake.call(uintigT2fN5, {from: accounts[4]});

		await expect(JGNRewardsStjlQU6.notifyRewardAmount.call(uintlMKQFOT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})