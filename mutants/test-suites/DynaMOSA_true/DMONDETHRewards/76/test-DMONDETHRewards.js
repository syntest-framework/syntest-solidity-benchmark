const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardslwvt7c1 = await DMONDETHRewards.new({from: accounts[4]});
//		await DMONDETHRewardslwvt7c1.getReward.call({from: accounts[1]});
//		await DMONDETHRewardslwvt7c1.checkStart.call({from: accounts[1]});
//		const boolB0MRo3J = await DMONDETHRewardslwvt7c1.isOwner.call({from: accounts[1]});

		await expect(DMONDETHRewardslwvt7c1.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsZRx52ZQ = await DMONDETHRewards.new({from: accounts[4]});
		const uintE0bENCN = BigInt("1716")
//		const uint256lTjIioE = await DMONDETHRewardsZRx52ZQ.remainingReward.call({from: accounts[2]});
//		const uint256ZPE1UpG = await DMONDETHRewardsZRx52ZQ.notifyRewardAmount.call(uintE0bENCN, {from: accounts[1]});
//		await DMONDETHRewardsZRx52ZQ.checkStart.call({from: accounts[3]});

		await expect(DMONDETHRewardsZRx52ZQ.remainingReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsmNIh55C = await DMONDETHRewards.new({from: accounts[2]});
		const uintnSzkCNR = BigInt("344")
		const uintST9L8sk = BigInt("1225")
		const uintKt1wY9F = BigInt("2045")
//		const uint256c0tGGTB = await DMONDETHRewardsmNIh55C.setStartTime.call(uintnSzkCNR, {from: accounts[5]});
//		const uint256G3sAjYx = await DMONDETHRewardsmNIh55C.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256hXyTDQM = await DMONDETHRewardsmNIh55C.setStartTime.call(uintST9L8sk, {from: accounts[1]});
//		await DMONDETHRewardsmNIh55C.onlyOwner.call({from: accounts[3]});
//		const uint256zYtSylP = await DMONDETHRewardsmNIh55C.notifyRewardAmount.call(uintKt1wY9F, {from: accounts[2]});

		await expect(DMONDETHRewardsmNIh55C.setStartTime.call(uintnSzkCNR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPHlOVtR = await DMONDETHRewards.new({from: accounts[5]});
		const uintCaaPSYA = BigInt("1017")
		const uint256nSNJDm6 = await DMONDETHRewardsPHlOVtR.totalSupply.call({from: accounts[2]});
//		const uint256ASgiTf = await DMONDETHRewardsPHlOVtR.stake.call(uintCaaPSYA, {from: accounts[1]});
//		const uint256csZHH5X = await DMONDETHRewardsPHlOVtR.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256nSNJDm6, BigInt("0"))
		await expect(DMONDETHRewardsPHlOVtR.stake.call(uintCaaPSYA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsLSGrnTA = await DMONDETHRewards.new({from: accounts[2]});
		const uintEfpv6Y = BigInt("1603")
		const uintJwomnc = BigInt("914")
//		const uint256lEY3Lp4 = await DMONDETHRewardsLSGrnTA.notifyRewardAmount.call(uintEfpv6Y, {from: accounts[4]});
//		const uint256bGf0qwD = await DMONDETHRewardsLSGrnTA.notifyRewardAmount.call(uintJwomnc, {from: accounts[1]});
//		const boolnAdSs4q = await DMONDETHRewardsLSGrnTA.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardsLSGrnTA.notifyRewardAmount.call(uintEfpv6Y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXuI7r2m = await DMONDETHRewards.new({from: accounts[3]});
//		await DMONDETHRewardsXuI7r2m.exit.call({from: accounts[5]});
//		await DMONDETHRewardsXuI7r2m.renounceOwnership.call({from: accounts[0]});

		await expect(DMONDETHRewardsXuI7r2m.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsANuYyWj = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintY8WiUMG = BigInt("1472")
		const uintEc5FH2t = BigInt("1174")
		const uintU76VsNJ = BigInt("1826")
		const uint256lZ4481C = await DMONDETHRewardsANuYyWj.stake.call(uintY8WiUMG, {from: accounts[1]});
		const uint256uYNlba = await DMONDETHRewardsANuYyWj.setStartTime.call(uintEc5FH2t, {from: accounts[4]});
		const uint256E38kpPT = await DMONDETHRewardsANuYyWj.notifyRewardAmount.call(uintU76VsNJ, {from: accounts[0]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsLSGrnTA = await DMONDETHRewards.new({from: accounts[2]});
		const uintuGHWPDt = BigInt("870")
		const uintGSnLLu9 = BigInt("1603")
		const uintviLyOhm = BigInt("914")
//		const uint256Kh4qZD = await DMONDETHRewardsLSGrnTA.withdraw.call(uintuGHWPDt, {from: accounts[1]});
//		const uint256lEY3Lp4 = await DMONDETHRewardsLSGrnTA.notifyRewardAmount.call(uintGSnLLu9, {from: accounts[4]});
//		const uint256bGf0qwD = await DMONDETHRewardsLSGrnTA.notifyRewardAmount.call(uintviLyOhm, {from: accounts[1]});

		await expect(DMONDETHRewardsLSGrnTA.withdraw.call(uintuGHWPDt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsWyxKWaL = await DMONDETHRewards.new({from: accounts[4]});
		const addresskM8O2dM = accounts[0]
		const addressGGBkEa5 = accounts[1]
		const addressmqTcW9j = accounts[3]
		const addressNvtjbf = accounts[5]
		const addressJKYYabb = accounts[2]
		const uint256OjehcZN = await DMONDETHRewardsWyxKWaL.balanceOf.call(addresskM8O2dM, {from: accounts[3]});
		const uint256LG83QT0 = await DMONDETHRewardsWyxKWaL.balanceOf.call(addressGGBkEa5, {from: accounts[0]});
		const addressSEM5etx = await DMONDETHRewardsWyxKWaL.setRewardDistribution.call(addressmqTcW9j, {from: accounts[4]});
//		const addressVBEZpjZ = await DMONDETHRewardsWyxKWaL.updateReward.call(addressNvtjbf, {from: accounts[3]});
//		const addressdpy7Xpu = await DMONDETHRewardsWyxKWaL.setRewardDistribution.call(addressJKYYabb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256LG83QT0, BigInt("0"))
		assert.equal(uint256OjehcZN, BigInt("0"))
		await expect(DMONDETHRewardsWyxKWaL.updateReward.call(addressNvtjbf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXuI7r2m = await DMONDETHRewards.new({from: accounts[3]});
		const addressh9oUjso = accounts[1]
//		await DMONDETHRewardsXuI7r2m.renounceOwnership.call({from: accounts[3]});
//		const uint256p2YM3Gs = await DMONDETHRewardsXuI7r2m.earned.call(addressh9oUjso, {from: accounts[1]});
//		await DMONDETHRewardsXuI7r2m.renounceOwnership.call({from: accounts[0]});

		await expect(DMONDETHRewardsXuI7r2m.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPHlOVtR = await DMONDETHRewards.new({from: accounts[5]});
		const uintn6yAlbq = BigInt("1017")
		const addressaKq63Kz = await DMONDETHRewardsPHlOVtR.owner.call({from: accounts[5]});
//		const uint256PWM4xJm = await DMONDETHRewardsPHlOVtR.remainingReward.call({from: accounts[4]});
//		const uint256ASgiTf = await DMONDETHRewardsPHlOVtR.stake.call(uintn6yAlbq, {from: accounts[1]});
//		const uint256csZHH5X = await DMONDETHRewardsPHlOVtR.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressaKq63Kz, 0xe82d4a59d4C283E1d4b3EBB525105e92927e4E36)
		await expect(DMONDETHRewardsPHlOVtR.remainingReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardslwvt7c1 = await DMONDETHRewards.new({from: accounts[4]});
		const uintLqvL64f = BigInt("1113")
		const addresshge9I1 = accounts[3]
		const uintN4v6ACd = BigInt("932")
//		await DMONDETHRewardslwvt7c1.getReward.call({from: accounts[1]});
//		const uint256uqBRY8o = await DMONDETHRewardslwvt7c1.notifyRewardAmount.call(uintLqvL64f, {from: accounts[4]});
//		const uint256VPlXqnS = await DMONDETHRewardslwvt7c1.remainingReward.call({from: accounts[0]});
//		const uint256Xc8TSZu = await DMONDETHRewardslwvt7c1.rewardPerToken.call({from: accounts[0]});
//		const uint256YuUJnLr = await DMONDETHRewardslwvt7c1.earned.call(addresshge9I1, {from: accounts[0]});
//		const uint256MPi2KnH = await DMONDETHRewardslwvt7c1.notifyRewardAmount.call(uintN4v6ACd, {from: accounts[5]});
//		const boolB0MRo3J = await DMONDETHRewardslwvt7c1.isOwner.call({from: accounts[1]});

		await expect(DMONDETHRewardslwvt7c1.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsvlGgd7 = await DMONDETHRewards.new({from: accounts[4]});
		const addressLq9JRsh = accounts[0]
		const uintLuLXhr = BigInt("1429")
		const addressgwPNV5H = accounts[4]
		const addressO2RmMcl = await DMONDETHRewardsvlGgd7.transferOwnership.call(addressLq9JRsh, {from: accounts[4]});
//		const uint256UJiHV1d = await DMONDETHRewardsvlGgd7.withdraw.call(uintLuLXhr, {from: accounts[0]});
//		const addresssYP03Kq = await DMONDETHRewardsvlGgd7.transferOwnership.call(addressgwPNV5H, {from: accounts[2]});
//		const uint256IOpcq1K = await DMONDETHRewardsvlGgd7.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256hzxNkQI = await DMONDETHRewardsvlGgd7.rewardPerToken.call({from: accounts[2]});

		await expect(DMONDETHRewardsvlGgd7.withdraw.call(uintLuLXhr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPHlOVtR = await DMONDETHRewards.new({from: accounts[5]});
		const addressHyOX4o = accounts[4]
		const uintKZ3ZMJ4 = BigInt("991")
//		await DMONDETHRewardsPHlOVtR.getReward.call({from: accounts[2]});
//		const addressqAr0Lhs = await DMONDETHRewardsPHlOVtR.setStakeAddress.call(addressHyOX4o, {from: accounts[5]});
//		const uint256ASgiTf = await DMONDETHRewardsPHlOVtR.stake.call(uintKZ3ZMJ4, {from: accounts[1]});

		await expect(DMONDETHRewardsPHlOVtR.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})