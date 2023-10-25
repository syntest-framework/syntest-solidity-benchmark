const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardscaSLvI = await JGNRewards.new({from: accounts[5]});
		const addressmJYjkbb = accounts[5]
		const uintrC5vUY1 = BigInt("1680")
		const uint256WAefE9W = await JGNRewardscaSLvI.earned.call(addressmJYjkbb, {from: accounts[0]});
		const uint256HB6m1kt = await JGNRewardscaSLvI.withdraw.call(uintrC5vUY1, {from: accounts[4]});
		const uint256bfmqWkJ = await JGNRewardscaSLvI.totalSupply.call({from: accounts[0]});

		assert.equal(uint256WAefE9W, BigInt("0"))
		await expect(JGNRewardscaSLvI.withdraw.call(uintrC5vUY1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsDz2vuXo = await JGNRewards.new({from: accounts[4]});
		const uintBdgUlix = BigInt("1114")
		const uintKZ4WeIY = BigInt("956")
		const addressrPurles = accounts[2]
		const uint256WSMaLMP = await JGNRewardsDz2vuXo.stake.call(uintBdgUlix, {from: accounts[1]});
		const uint256k5IeD2s = await JGNRewardsDz2vuXo.withdraw.call(uintKZ4WeIY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256HDzrnVC = await JGNRewardsDz2vuXo.earned.call(addressrPurles, {from: accounts[4]});

		await expect(JGNRewardsDz2vuXo.stake.call(uintBdgUlix, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsXYKs3Z1 = await JGNRewards.new({from: accounts[0]});
		await JGNRewardsXYKs3Z1.checkStart.call({from: accounts[5]});
		const uint256v4gkzHe = await JGNRewardsXYKs3Z1.rewardPerToken.call({from: accounts[2]});
		await JGNRewardsXYKs3Z1.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Yf714UH = await JGNRewardsXYKs3Z1.rewardPerToken.call({from: accounts[2]});
		const uint256poEpWtV = await JGNRewardsXYKs3Z1.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(JGNRewardsXYKs3Z1.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsp0ygkqH = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDNApZkd = accounts[2]
		const uints0czOuH = BigInt("398")
		const uint256oj2QL6c = await JGNRewardsp0ygkqH.balanceOf.call(addressDNApZkd, {from: accounts[1]});
		const uint256nY8sbfE = await JGNRewardsp0ygkqH.withdraw.call(uints0czOuH, {from: accounts[4]});
		const uint256Nx3jVmn = await JGNRewardsp0ygkqH.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256I92VhjN = await JGNRewardsp0ygkqH.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsapY4L9k = await JGNRewards.new({from: accounts[5]});
		const uintBz3hzPJ = BigInt("0")
		const uint256awhj9y4 = await JGNRewardsapY4L9k.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256LtCHB5a = await JGNRewardsapY4L9k.withdraw.call(uintBz3hzPJ, {from: accounts[3]});

		assert.equal(uint256awhj9y4, BigInt("0"))
		await expect(JGNRewardsapY4L9k.withdraw.call(uintBz3hzPJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsapY4L9k = await JGNRewards.new({from: accounts[5]});
		const uintnGKAgjX = BigInt("0")
		await JGNRewardsapY4L9k.exit.call({from: accounts[4]});
		const uint256LtCHB5a = await JGNRewardsapY4L9k.withdraw.call(uintnGKAgjX, {from: accounts[3]});
		await JGNRewardsapY4L9k.getReward.call({from: accounts[0]});

		await expect(JGNRewardsapY4L9k.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsapY4L9k = await JGNRewards.new({from: accounts[5]});
		const uintb0mW02F = BigInt("1358")
		const uintlTQJNsE = BigInt("1932")
		const uints1wyBz7 = BigInt("1455")
		const uintiCXMXzG = BigInt("0")
		const uint256vPSBipI = await JGNRewardsapY4L9k.notifyRewardAmount.call(uintb0mW02F, {from: accounts[5]});
		const uint256QE3hyo = await JGNRewardsapY4L9k.withdraw.call(uintlTQJNsE, {from: accounts[1]});
		const uint256KWcG9Y = await JGNRewardsapY4L9k.totalSupply.call({from: accounts[0]});
		const uint256n3BkTdU = await JGNRewardsapY4L9k.withdraw.call(uints1wyBz7, {from: accounts[2]});
		const uint256LtCHB5a = await JGNRewardsapY4L9k.withdraw.call(uintiCXMXzG, {from: accounts[3]});

		await expect(JGNRewardsapY4L9k.notifyRewardAmount.call(uintb0mW02F, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsAcePvgH = await JGNRewards.new({from: accounts[3]});
		const addressLD0wuUN = accounts[5]
		const uintls4NkdW = BigInt("575")
		const uint256HqYM3OV = await JGNRewardsAcePvgH.rewardPerToken.call({from: accounts[1]});
		const uint256pznNKow = await JGNRewardsAcePvgH.rewardPerToken.call({from: accounts[2]});
		await JGNRewardsAcePvgH.getReward.call({from: accounts[5]});
		const addressx8QhsAg = await JGNRewardsAcePvgH.updateReward.call(addressLD0wuUN, {from: accounts[3]});
		const uint256Xs9K4gv = await JGNRewardsAcePvgH.withdraw.call(uintls4NkdW, {from: accounts[3]});

		assert.equal(uint256HqYM3OV, BigInt("0"))
		assert.equal(uint256pznNKow, BigInt("0"))
		await expect(JGNRewardsAcePvgH.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})