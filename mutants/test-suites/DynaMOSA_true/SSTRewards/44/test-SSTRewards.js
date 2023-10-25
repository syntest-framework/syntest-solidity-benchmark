const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsea6SFOY = await SSTRewards.new({from: accounts[5]});
		const address3Dmm7i = accounts[4]
		const uint256VbGFoLN = await SSTRewardsea6SFOY.balanceOf.call(address3Dmm7i, {from: accounts[5]});
		const uint256XWqxxNZ = await SSTRewardsea6SFOY.totalSupply.call({from: accounts[0]});
//		await SSTRewardsea6SFOY.exit.call({from: accounts[5]});

		assert.equal(uint256VbGFoLN, BigInt("0"))
		assert.equal(uint256XWqxxNZ, BigInt("0"))
		await expect(SSTRewardsea6SFOY.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsGRLUYmZ = await SSTRewards.new({from: accounts[1]});
		const uints2owLcx = BigInt("119")
		const uintqhN6kT = BigInt("544")
		const uintogg3Xet = BigInt("929")
		const addressOwwMRjp = accounts[3]
//		const uint256wStX4Cb = await SSTRewardsGRLUYmZ.stake.call(uints2owLcx, {from: accounts[0]});
//		const uint256zp2ZTk2 = await SSTRewardsGRLUYmZ.stake.call(uintqhN6kT, {from: accounts[2]});
//		const uint256wNcFwkE = await SSTRewardsGRLUYmZ.stake.call(uintogg3Xet, {from: accounts[3]});
//		const uint256AgObauX = await SSTRewardsGRLUYmZ.rewardPerToken.call({from: accounts[1]});
//		const uint256giClPpL = await SSTRewardsGRLUYmZ.balanceOf.call(addressOwwMRjp, {from: accounts[1]});

		await expect(SSTRewardsGRLUYmZ.stake.call(uints2owLcx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsn5t76xm = await SSTRewards.new({from: accounts[5]});
		const uintZ86udRG = BigInt("1392")
//		const uint256DLisV0c = await SSTRewardsn5t76xm.withdraw.call(uintZ86udRG, {from: "0x0000000000000000000000000000000000000001"});
//		await SSTRewardsn5t76xm.getReward.call({from: accounts[3]});
//		await SSTRewardsn5t76xm.exit.call({from: accounts[5]});

		await expect(SSTRewardsn5t76xm.withdraw.call(uintZ86udRG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsdmKS9Vy = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		await SSTRewardsdmKS9Vy.checkStart.call({from: accounts[5]});
		await SSTRewardsdmKS9Vy.checkStart.call({from: accounts[3]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsnhqoQ98 = await SSTRewards.new({from: accounts[3]});
		const uintbOZNtN8 = BigInt("568")
		const uintAnyxU8u = BigInt("1928")
		const uintqLAk1IW = BigInt("1793")
		const uint256LkBLYle = await SSTRewardsnhqoQ98.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256TemXlgX = await SSTRewardsnhqoQ98.notifyRewardAmount.call(uintbOZNtN8, {from: accounts[3]});
//		const uint256cPk2eIL = await SSTRewardsnhqoQ98.withdraw.call(uintAnyxU8u, {from: accounts[2]});
//		const uint256upyjjiH = await SSTRewardsnhqoQ98.withdraw.call(uintqLAk1IW, {from: accounts[0]});
//		await SSTRewardsnhqoQ98.checkStart.call({from: accounts[0]});
//		const uint256cuNMt2b = await SSTRewardsnhqoQ98.totalSupply.call({from: accounts[3]});

		assert.equal(uint256LkBLYle, BigInt("0"))
		await expect(SSTRewardsnhqoQ98.notifyRewardAmount.call(uintbOZNtN8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardshnMWWPM = await SSTRewards.new({from: accounts[1]});
		const addressEyPLQx0 = accounts[5]
		const uinta90ci1 = BigInt("1008")
		const addressM8nqOWT = accounts[5]
//		const addressKor2vdw = await SSTRewardshnMWWPM.updateReward.call(addressEyPLQx0, {from: accounts[0]});
//		const uint256QObxH5f = await SSTRewardshnMWWPM.notifyRewardAmount.call(uinta90ci1, {from: accounts[1]});
//		await SSTRewardshnMWWPM.exit.call({from: accounts[3]});
//		const addressbA6axXK = await SSTRewardshnMWWPM.updateReward.call(addressM8nqOWT, {from: accounts[5]});

		await expect(SSTRewardshnMWWPM.updateReward.call(addressEyPLQx0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsV6GGDsE = await SSTRewards.new({from: accounts[2]});
		const addressG4GL3K = accounts[1]
		const uintiwPq5e4 = BigInt("157")
//		await SSTRewardsV6GGDsE.getReward.call({from: accounts[5]});
//		const addresslcbS29m = await SSTRewardsV6GGDsE.updateReward.call(addressG4GL3K, {from: accounts[5]});
//		const uint256kIZNfrt = await SSTRewardsV6GGDsE.stake.call(uintiwPq5e4, {from: accounts[3]});
//		const uint256zoTpcxL = await SSTRewardsV6GGDsE.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(SSTRewardsV6GGDsE.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})