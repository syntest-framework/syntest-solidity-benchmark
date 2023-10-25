const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsDEjuzVP = await SSTRewards.new({from: accounts[3]});
		const uintg28Ows = BigInt("520")
		const uintgk9LKuZ = BigInt("675")
		const addressAhJeMXd = accounts[4]
		const uint256b1tqSje = await SSTRewardsDEjuzVP.totalSupply.call({from: accounts[1]});
		const uint256Xd0grd = await SSTRewardsDEjuzVP.stake.call(uintg28Ows, {from: accounts[3]});
		const uint256xNQ6TS7 = await SSTRewardsDEjuzVP.withdraw.call(uintgk9LKuZ, {from: accounts[1]});
		const uint2568IL8u2 = await SSTRewardsDEjuzVP.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256YT9Ee06 = await SSTRewardsDEjuzVP.balanceOf.call(addressAhJeMXd, {from: accounts[5]});

		assert.equal(uint256b1tqSje, BigInt("0"))
		await expect(SSTRewardsDEjuzVP.stake.call(uintg28Ows, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardstHO2EUf = await SSTRewards.new({from: accounts[2]});
		const uintkbGXFB = BigInt("1116")
		const addresslbv7vdU = accounts[0]
		const addressYxOzdSO = accounts[2]
		const uint256RKNZTlt = await SSTRewardstHO2EUf.withdraw.call(uintkbGXFB, {from: "0x0000000000000000000000000000000000000001"});
		await SSTRewardstHO2EUf.checkStart.call({from: accounts[4]});
		const addressjkBzVE4 = await SSTRewardstHO2EUf.updateReward.call(addresslbv7vdU, {from: accounts[0]});
		const uint256ACgXEWp = await SSTRewardstHO2EUf.balanceOf.call(addressYxOzdSO, {from: accounts[3]});

		await expect(SSTRewardstHO2EUf.withdraw.call(uintkbGXFB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsT8vAmfu = await SSTRewards.new({from: accounts[3]});
		const addressSKEB2rf = accounts[2]
		const uintVyFDCiB = BigInt("15")
		const addressTWkrRkm = await SSTRewardsT8vAmfu.updateReward.call(addressSKEB2rf, {from: accounts[2]});
		const uint256QrsBwfJ = await SSTRewardsT8vAmfu.stake.call(uintVyFDCiB, {from: accounts[5]});
		const uint256cX5uoxS = await SSTRewardsT8vAmfu.rewardPerToken.call({from: accounts[2]});

		await expect(SSTRewardsT8vAmfu.updateReward.call(addressSKEB2rf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardslwFtc7f = await SSTRewards.new({from: accounts[3]});
		const uintGH78RwR = BigInt("1267")
		const addressXqtolV7 = accounts[2]
		await SSTRewardslwFtc7f.getReward.call({from: accounts[4]});
		const uint256ZdPcZ5b = await SSTRewardslwFtc7f.notifyRewardAmount.call(uintGH78RwR, {from: accounts[0]});
		const uint256bYciyW = await SSTRewardslwFtc7f.earned.call(addressXqtolV7, {from: accounts[0]});

		await expect(SSTRewardslwFtc7f.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardspXF94wz = await SSTRewards.new({from: accounts[4]});
		const addressc23rq7X = accounts[4]
		const addresszHQnESP = accounts[3]
		await SSTRewardspXF94wz.exit.call({from: accounts[4]});
		const addressZsfhJeW = await SSTRewardspXF94wz.updateReward.call(addressc23rq7X, {from: accounts[3]});
		const uint256FXebeQw = await SSTRewardspXF94wz.earned.call(addresszHQnESP, {from: accounts[5]});

		await expect(SSTRewardspXF94wz.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsN2GMy7N = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintaHtn0EB = BigInt("1346")
		const uintkD2rgyQ = BigInt("680")
		const uintvyL4Fzb = BigInt("607")
		const uint256hIpH1gd = await SSTRewardsN2GMy7N.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256JYjJgm = await SSTRewardsN2GMy7N.stake.call(uintaHtn0EB, {from: accounts[0]});
		const uint256oTPmMxU = await SSTRewardsN2GMy7N.withdraw.call(uintkD2rgyQ, {from: accounts[0]});
		const uint256nkGnHLz = await SSTRewardsN2GMy7N.notifyRewardAmount.call(uintvyL4Fzb, {from: accounts[0]});
	});
})