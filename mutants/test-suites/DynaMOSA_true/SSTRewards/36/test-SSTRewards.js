const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsv4g9Omi = await SSTRewards.new({from: accounts[1]});
		const uintYtei5CM = BigInt("1726")
		const addressxkJoGHJ = "0x0000000000000000000000000000000000000001"
		const uintdwRuuto = BigInt("667")
//		const uint256mb81Uv = await SSTRewardsv4g9Omi.stake.call(uintYtei5CM, {from: accounts[1]});
//		const uint256UZWmCPz = await SSTRewardsv4g9Omi.balanceOf.call(addressxkJoGHJ, {from: accounts[4]});
//		const uint256cfqyRdW = await SSTRewardsv4g9Omi.withdraw.call(uintdwRuuto, {from: accounts[2]});

		await expect(SSTRewardsv4g9Omi.stake.call(uintYtei5CM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsoPMXe6 = await SSTRewards.new({from: accounts[0]});
		const uintQDJ30SX = BigInt("1894")
		const addressCjrS2T4 = accounts[3]
		const uintgSNmoMm = BigInt("1120")
		const uintpaY5jJH = BigInt("750")
		const addressqAG7x0K = accounts[0]
//		const uint256AvALLeR = await SSTRewardsoPMXe6.notifyRewardAmount.call(uintQDJ30SX, {from: accounts[3]});
//		const addressFs9bXuO = await SSTRewardsoPMXe6.updateReward.call(addressCjrS2T4, {from: accounts[1]});
//		const uint256i5i2Qum = await SSTRewardsoPMXe6.stake.call(uintgSNmoMm, {from: accounts[4]});
//		const uint256wVX6MLm = await SSTRewardsoPMXe6.withdraw.call(uintpaY5jJH, {from: accounts[5]});
//		const uint256H4ERGAr = await SSTRewardsoPMXe6.earned.call(addressqAG7x0K, {from: accounts[2]});

		await expect(SSTRewardsoPMXe6.notifyRewardAmount.call(uintQDJ30SX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsgNA60tY = await SSTRewards.new({from: accounts[0]});
		const addressllkcX7J = accounts[5]
		const uint256JQ7zY7O = await SSTRewardsgNA60tY.rewardPerToken.call({from: accounts[4]});
		const uint256N4uFVGE = await SSTRewardsgNA60tY.earned.call(addressllkcX7J, {from: accounts[4]});
//		await SSTRewardsgNA60tY.getReward.call({from: accounts[1]});
//		const uint256jZvyDu3 = await SSTRewardsgNA60tY.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256JQ7zY7O, BigInt("0"))
		assert.equal(uint256N4uFVGE, BigInt("0"))
		await expect(SSTRewardsgNA60tY.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsYSpMYis = await SSTRewards.new({from: accounts[2]});
		const uintbH2ewP = BigInt("1922")
		const addressGUfqbrz = accounts[1]
		const uintSj69tTG = BigInt("1217")
		const uintSCt6xP3 = BigInt("628")
//		const uint256f2TdXvw = await SSTRewardsYSpMYis.withdraw.call(uintbH2ewP, {from: accounts[2]});
//		const addresswKqk5hn = await SSTRewardsYSpMYis.updateReward.call(addressGUfqbrz, {from: accounts[3]});
//		const uint256h2Qcoo0 = await SSTRewardsYSpMYis.lastTimeRewardApplicable.call({from: accounts[4]});
//		await SSTRewardsYSpMYis.getReward.call({from: accounts[1]});
//		const uint256QusqBTc = await SSTRewardsYSpMYis.withdraw.call(uintSj69tTG, {from: accounts[0]});
//		const uint256QtUAgB3 = await SSTRewardsYSpMYis.notifyRewardAmount.call(uintSCt6xP3, {from: accounts[4]});

		await expect(SSTRewardsYSpMYis.withdraw.call(uintbH2ewP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardssKUBwjp = await SSTRewards.new({from: accounts[1]});
//		await SSTRewardssKUBwjp.exit.call({from: accounts[2]});
//		await SSTRewardssKUBwjp.exit.call({from: accounts[5]});

		await expect(SSTRewardssKUBwjp.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsgNA60tY = await SSTRewards.new({from: accounts[0]});
		const addressaSNzgdi = accounts[0]
		const addressszqHP6a = accounts[5]
//		const addressU3kRo6J = await SSTRewardsgNA60tY.updateReward.call(addressaSNzgdi, {from: accounts[2]});
//		const uint256JQ7zY7O = await SSTRewardsgNA60tY.rewardPerToken.call({from: accounts[4]});
//		const uint256N4uFVGE = await SSTRewardsgNA60tY.earned.call(addressszqHP6a, {from: accounts[4]});
//		await SSTRewardsgNA60tY.getReward.call({from: accounts[1]});
//		const uint256jZvyDu3 = await SSTRewardsgNA60tY.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(SSTRewardsgNA60tY.updateReward.call(addressaSNzgdi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsQRmJQmo = await SSTRewards.new({from: accounts[2]});
		const uintOTKzCbG = BigInt("0")
		const uintbXGL4Uf = BigInt("1170")
		const uint256P2RIvs = await SSTRewardsQRmJQmo.totalSupply.call({from: accounts[1]});
//		const uint2560I8TxO = await SSTRewardsQRmJQmo.stake.call(uintOTKzCbG, {from: accounts[5]});
//		const uint256GEmJYqE = await SSTRewardsQRmJQmo.notifyRewardAmount.call(uintbXGL4Uf, {from: accounts[0]});
//		await SSTRewardsQRmJQmo.getReward.call({from: accounts[4]});

		assert.equal(uint256P2RIvs, BigInt("0"))
		await expect(SSTRewardsQRmJQmo.stake.call(uintOTKzCbG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsWbHN4pG = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressiXl5EXb = accounts[4]
		const addressbBSQ28v = accounts[3]
		const uint256rzIwBk0 = await SSTRewardsWbHN4pG.balanceOf.call(addressiXl5EXb, {from: "0x0000000000000000000000000000000000000001"});
		await SSTRewardsWbHN4pG.checkStart.call({from: accounts[3]});
		const uint256wRGvxq7 = await SSTRewardsWbHN4pG.earned.call(addressbBSQ28v, {from: accounts[3]});
	});
})