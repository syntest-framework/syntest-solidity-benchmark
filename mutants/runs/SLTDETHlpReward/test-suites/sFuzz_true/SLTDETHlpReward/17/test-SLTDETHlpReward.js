const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarduE3Xaue = await SLTDETHlpReward.new({from: accounts[3]});
		const addressA6EqDE2 = accounts[0]
		const addressEKceeRe = await SLTDETHlpRewarduE3Xaue.transferOwnership.call(addressA6EqDE2, {from: accounts[3]});
		await SLTDETHlpRewarduE3Xaue.onlyRewardDistribution.call({from: accounts[3]});
		await SLTDETHlpRewarduE3Xaue.getReward.call({from: accounts[4]});
		const uint256uTEOAQs = await SLTDETHlpRewarduE3Xaue.remainingReward.call({from: accounts[1]});

		await expect(SLTDETHlpRewarduE3Xaue.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardRJy56tw = await SLTDETHlpReward.new({from: accounts[3]});
		const uintu46qSEG = BigInt("174")
		const addressrNvQo4r = accounts[1]
		await SLTDETHlpRewardRJy56tw.getReward.call({from: accounts[0]});
		const uint256ih24jE = await SLTDETHlpRewardRJy56tw.withdraw.call(uintu46qSEG, {from: accounts[3]});
		await SLTDETHlpRewardRJy56tw.checkStart.call({from: accounts[5]});
		const uint256nd5YDTx = await SLTDETHlpRewardRJy56tw.balanceOf.call(addressrNvQo4r, {from: accounts[5]});

		await expect(SLTDETHlpRewardRJy56tw.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardXvmuVbW = await SLTDETHlpReward.new({from: accounts[4]});
		const addressGQASi0X = accounts[4]
		const addressXhgYdHv = await SLTDETHlpRewardXvmuVbW.transferOwnership.call(addressGQASi0X, {from: accounts[1]});
		await SLTDETHlpRewardXvmuVbW.exit.call({from: accounts[0]});

		await expect(SLTDETHlpRewardXvmuVbW.transferOwnership.call(addressGQASi0X, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardiv3uzep = await SLTDETHlpReward.new({from: accounts[4]});
		const uintXnIakDa = BigInt("1179")
		const uintp0bFzN = BigInt("292")
		const uint256uJkm4zi = await SLTDETHlpRewardiv3uzep.notifyRewardAmount.call(uintXnIakDa, {from: accounts[0]});
		const uint256yV5OmTU = await SLTDETHlpRewardiv3uzep.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256s8CYHT4 = await SLTDETHlpRewardiv3uzep.notifyRewardAmount.call(uintp0bFzN, {from: accounts[0]});

		await expect(SLTDETHlpRewardiv3uzep.notifyRewardAmount.call(uintXnIakDa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardqEeut6G = await SLTDETHlpReward.new({from: accounts[4]});
		const addressweUBDq2 = accounts[4]
		const uintM5kIju9 = BigInt("397")
		const addressdWu2jJY = await SLTDETHlpRewardqEeut6G.owner.call({from: accounts[2]});
		const uint256iaGrBzj = await SLTDETHlpRewardqEeut6G.earned.call(addressweUBDq2, {from: accounts[2]});
		const uint256MdOodV = await SLTDETHlpRewardqEeut6G.setStartTime.call(uintM5kIju9, {from: accounts[1]});

		assert.equal(addressdWu2jJY, 0x1356F97Bdc8B3317E45A5CF90bd94Facd0C282f0)
		assert.equal(uint256iaGrBzj, BigInt("0"))
		await expect(SLTDETHlpRewardqEeut6G.setStartTime.call(uintM5kIju9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJ8PqXxa = await SLTDETHlpReward.new({from: accounts[1]});
		const uintmvxTD6S = BigInt("717")
		const uintFIY5aUy = BigInt("1462")
		const addressnijKeV = accounts[4]
		const addressFzIb0O = await SLTDETHlpRewardJ8PqXxa.owner.call({from: accounts[3]});
		const uint256w4TGlkL = await SLTDETHlpRewardJ8PqXxa.stake.call(uintmvxTD6S, {from: accounts[2]});
		const uint256hOrd53s = await SLTDETHlpRewardJ8PqXxa.setStartTime.call(uintFIY5aUy, {from: "0x0000000000000000000000000000000000000001"});
		const uint2567zpc6h = await SLTDETHlpRewardJ8PqXxa.earned.call(addressnijKeV, {from: accounts[1]});

		assert.equal(addressFzIb0O, 0xbCe733e555fF11d73A473c6739fEA9dd501a37a9)
		await expect(SLTDETHlpRewardJ8PqXxa.stake.call(uintmvxTD6S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpYE0iVz = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressE870BuJ = accounts[2]
		const addressnqWYsKK = accounts[3]
		const uint256gaLXnt = await SLTDETHlpRewardpYE0iVz.balanceOf.call(addressE870BuJ, {from: accounts[3]});
		const uint256VHBs4ir = await SLTDETHlpRewardpYE0iVz.rewardPerToken.call({from: accounts[5]});
		const uint256MzARBBy = await SLTDETHlpRewardpYE0iVz.earned.call(addressnqWYsKK, {from: accounts[0]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward5Pzh4V = await SLTDETHlpReward.new({from: accounts[2]});
		const address8lR7CF = accounts[4]
		const addressJ2kuaSW = accounts[2]
		const boolJLFHPK5 = await SLTDETHlpReward5Pzh4V.isOwner.call({from: accounts[2]});
		const uint256AeJW4y5 = await SLTDETHlpReward5Pzh4V.lastTimeRewardApplicable.call({from: accounts[2]});
		await SLTDETHlpReward5Pzh4V.getReward.call({from: accounts[2]});
		const uint25627Aif8 = await SLTDETHlpReward5Pzh4V.earned.call(address8lR7CF, {from: accounts[5]});
		const addressEOJp3Cx = await SLTDETHlpReward5Pzh4V.setRewardDistribution.call(addressJ2kuaSW, {from: accounts[2]});

		assert.equal(boolJLFHPK5, true)
		assert.equal(uint256AeJW4y5, BigInt("0"))
		await expect(SLTDETHlpReward5Pzh4V.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardXvmuVbW = await SLTDETHlpReward.new({from: accounts[4]});
		const address6T1Dk7 = accounts[6]
		const uint256Ny8gOWl = await SLTDETHlpRewardXvmuVbW.remainingReward.call({from: accounts[1]});
		const addressXhgYdHv = await SLTDETHlpRewardXvmuVbW.transferOwnership.call(address6T1Dk7, {from: accounts[1]});

		await expect(SLTDETHlpRewardXvmuVbW.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward5Pzh4V = await SLTDETHlpReward.new({from: accounts[2]});
		await SLTDETHlpReward5Pzh4V.getReward.call({from: accounts[2]});
		await SLTDETHlpReward5Pzh4V.renounceOwnership.call({from: accounts[2]});

		await expect(SLTDETHlpReward5Pzh4V.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward5Pzh4V = await SLTDETHlpReward.new({from: accounts[2]});
		await SLTDETHlpReward5Pzh4V.exit.call({from: accounts[2]});
		await SLTDETHlpReward5Pzh4V.getReward.call({from: accounts[2]});
		await SLTDETHlpReward5Pzh4V.checkStart.call({from: accounts[1]});

		await expect(SLTDETHlpReward5Pzh4V.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward5Pzh4V = await SLTDETHlpReward.new({from: accounts[2]});
		const addressByeYYsk = accounts[4]
		const uint256uI1XyiO = await SLTDETHlpReward5Pzh4V.totalSupply.call({from: accounts[5]});
		await SLTDETHlpReward5Pzh4V.getReward.call({from: accounts[2]});
		const addressD18Y7SO = await SLTDETHlpReward5Pzh4V.setStakeAddress.call(addressByeYYsk, {from: accounts[2]});

		assert.equal(uint256uI1XyiO, BigInt("0"))
		await expect(SLTDETHlpReward5Pzh4V.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward5Pzh4V = await SLTDETHlpReward.new({from: accounts[2]});
		const uintnm5rUWx = BigInt("1925")
		const uint25613UFii = await SLTDETHlpReward5Pzh4V.notifyRewardAmount.call(uintnm5rUWx, {from: accounts[2]});
		await SLTDETHlpReward5Pzh4V.getReward.call({from: accounts[2]});
		const uint256Par3qB = await SLTDETHlpReward5Pzh4V.totalSupply.call({from: accounts[1]});

		await expect(SLTDETHlpReward5Pzh4V.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpReward5Pzh4V = await SLTDETHlpReward.new({from: accounts[2]});
		const uintpVIYP9h = BigInt("1217")
		const uint256ClRhGVk = await SLTDETHlpReward5Pzh4V.setStartTime.call(uintpVIYP9h, {from: accounts[2]});
		await SLTDETHlpReward5Pzh4V.getReward.call({from: accounts[2]});
		await SLTDETHlpReward5Pzh4V.onlyRewardDistribution.call({from: accounts[3]});

		await expect(SLTDETHlpReward5Pzh4V.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})