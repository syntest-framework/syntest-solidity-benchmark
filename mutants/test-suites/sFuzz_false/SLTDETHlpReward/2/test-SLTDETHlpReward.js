const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEC4tk9v = await SLTDETHlpReward.new({from: accounts[2]});
		const addresstNisfnS = "0x0000000000000000000000000000000000000001"
		const uintVsivQV5 = BigInt("629")
		const addressUHh13KY = accounts[3]
		const uint256DHGf7cl = await SLTDETHlpRewardEC4tk9v.earned.call(addresstNisfnS, {from: accounts[4]});
//		const uint256E100WIZ = await SLTDETHlpRewardEC4tk9v.withdraw.call(uintVsivQV5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256CZnzj7 = await SLTDETHlpRewardEC4tk9v.earned.call(addressUHh13KY, {from: accounts[3]});

		assert.equal(uint256DHGf7cl, BigInt("0"))
		await expect(SLTDETHlpRewardEC4tk9v.withdraw.call(uintVsivQV5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardRpMQJzt = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressmR4BkXz = "0x0000000000000000000000000000000000000001"
		const addressqW4fyt8 = accounts[1]
		const addressQOhzzBY = await SLTDETHlpRewardRpMQJzt.setRewardDistribution.call(addressmR4BkXz, {from: accounts[2]});
		await SLTDETHlpRewardRpMQJzt.onlyRewardDistribution.call({from: accounts[0]});
		const addressqCN8Xub = await SLTDETHlpRewardRpMQJzt.setStakeAddress.call(addressqW4fyt8, {from: accounts[0]});
		const uint256PVa55hG = await SLTDETHlpRewardRpMQJzt.rewardPerToken.call({from: accounts[4]});
		await SLTDETHlpRewardRpMQJzt.getReward.call({from: accounts[3]});
		const uint256qY2lB2t = await SLTDETHlpRewardRpMQJzt.rewardPerToken.call({from: accounts[5]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardbDhU0tI = await SLTDETHlpReward.new({from: accounts[5]});
		const uintG7pQXxh = BigInt("1535")
//		await SLTDETHlpRewardbDhU0tI.onlyRewardDistribution.call({from: accounts[2]});
//		await SLTDETHlpRewardbDhU0tI.renounceOwnership.call({from: accounts[3]});
//		const uint256AcrT6E6 = await SLTDETHlpRewardbDhU0tI.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256DqO2rDu = await SLTDETHlpRewardbDhU0tI.withdraw.call(uintG7pQXxh, {from: accounts[0]});

		await expect(SLTDETHlpRewardbDhU0tI.onlyRewardDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardBZbMVOi = await SLTDETHlpReward.new({from: accounts[4]});
		const uintrcPWms9 = BigInt("1534")
		const uintzGKmSL = BigInt("576")
		const uint256qbGcwSk = await SLTDETHlpRewardBZbMVOi.totalSupply.call({from: accounts[4]});
		const uint256OsUqiBz = await SLTDETHlpRewardBZbMVOi.setStartTime.call(uintrcPWms9, {from: accounts[4]});
//		const uint256SJeb6nX = await SLTDETHlpRewardBZbMVOi.withdraw.call(uintzGKmSL, {from: accounts[0]});

		assert.equal(uint256qbGcwSk, BigInt("0"))
		await expect(SLTDETHlpRewardBZbMVOi.withdraw.call(uintzGKmSL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJxFuyNb = await SLTDETHlpReward.new({from: accounts[5]});
		const uintfNMVrbk = BigInt("166")
//		await SLTDETHlpRewardJxFuyNb.renounceOwnership.call({from: accounts[5]});
//		const uint256nJfnGan = await SLTDETHlpRewardJxFuyNb.withdraw.call(uintfNMVrbk, {from: accounts[1]});
//		await SLTDETHlpRewardJxFuyNb.renounceOwnership.call({from: accounts[2]});

		await expect(SLTDETHlpRewardJxFuyNb.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarde0VDnP4 = await SLTDETHlpReward.new({from: accounts[0]});
		const uinttyIIXID = BigInt("334")
		const uintkZOk4E5 = BigInt("642")
//		const uint2565JxPMS = await SLTDETHlpRewarde0VDnP4.notifyRewardAmount.call(uinttyIIXID, {from: accounts[3]});
//		const uint256qyw7XEC = await SLTDETHlpRewarde0VDnP4.stake.call(uintkZOk4E5, {from: accounts[0]});

		await expect(SLTDETHlpRewarde0VDnP4.notifyRewardAmount.call(uinttyIIXID, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardjiCtpN = await SLTDETHlpReward.new({from: accounts[2]});
		const addressDyLPQaf = "0x0000000000000000000000000000000000000001"
//		await SLTDETHlpRewardjiCtpN.renounceOwnership.call({from: accounts[4]});
//		const uint256ujH5j2w = await SLTDETHlpRewardjiCtpN.totalSupply.call({from: accounts[3]});
//		const addressW8ktRU = await SLTDETHlpRewardjiCtpN.setRewardDistribution.call(addressDyLPQaf, {from: accounts[4]});

		await expect(SLTDETHlpRewardjiCtpN.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEC4tk9v = await SLTDETHlpReward.new({from: accounts[2]});
		const addresslr6ddsY = accounts[2]
		const addressnNqzivO = accounts[4]
//		await SLTDETHlpRewardEC4tk9v.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ayyTpv4 = await SLTDETHlpRewardEC4tk9v.balanceOf.call(addresslr6ddsY, {from: accounts[5]});
//		const uint256CZnzj7 = await SLTDETHlpRewardEC4tk9v.earned.call(addressnNqzivO, {from: accounts[3]});

		await expect(SLTDETHlpRewardEC4tk9v.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEC4tk9v = await SLTDETHlpReward.new({from: accounts[2]});
		const addressQiHFS1Q = accounts[5]
		const uint256S7mMdGA = await SLTDETHlpRewardEC4tk9v.totalSupply.call({from: accounts[2]});
		const uint256CZnzj7 = await SLTDETHlpRewardEC4tk9v.earned.call(addressQiHFS1Q, {from: accounts[3]});
//		await SLTDETHlpRewardEC4tk9v.exit.call({from: accounts[3]});

		assert.equal(uint256CZnzj7, BigInt("0"))
		assert.equal(uint256S7mMdGA, BigInt("0"))
		await expect(SLTDETHlpRewardEC4tk9v.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEC4tk9v = await SLTDETHlpReward.new({from: accounts[2]});
		const addresskdm7RZH = accounts[5]
//		const uint256ga135aJ = await SLTDETHlpRewardEC4tk9v.remainingReward.call({from: accounts[1]});
//		const uint256CZnzj7 = await SLTDETHlpRewardEC4tk9v.earned.call(addresskdm7RZH, {from: accounts[3]});
//		await SLTDETHlpRewardEC4tk9v.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardEC4tk9v.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardwmsqoxv = await SLTDETHlpReward.new({from: accounts[4]});
		const uinty95K02S = BigInt("405")
		const uintvvlCKJn = BigInt("508")
//		const uint256wR2ORQS = await SLTDETHlpRewardwmsqoxv.stake.call(uinty95K02S, {from: accounts[3]});
//		await SLTDETHlpRewardwmsqoxv.onlyOwner.call({from: accounts[5]});
//		const uint256DcXqXP8 = await SLTDETHlpRewardwmsqoxv.setStartTime.call(uintvvlCKJn, {from: accounts[1]});

		await expect(SLTDETHlpRewardwmsqoxv.stake.call(uinty95K02S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardwmsqoxv = await SLTDETHlpReward.new({from: accounts[4]});
		const uintm9YyXnG = BigInt("1004")
//		await SLTDETHlpRewardwmsqoxv.getReward.call({from: accounts[0]});
//		const uint256xRxe9po = await SLTDETHlpRewardwmsqoxv.notifyRewardAmount.call(uintm9YyXnG, {from: accounts[4]});
//		await SLTDETHlpRewardwmsqoxv.onlyOwner.call({from: accounts[5]});

		await expect(SLTDETHlpRewardwmsqoxv.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardwmsqoxv = await SLTDETHlpReward.new({from: accounts[4]});
		const addressrubVsEH = accounts[0]
//		await SLTDETHlpRewardwmsqoxv.getReward.call({from: accounts[0]});
//		const addressWTczIX = await SLTDETHlpRewardwmsqoxv.transferOwnership.call(addressrubVsEH, {from: accounts[4]});

		await expect(SLTDETHlpRewardwmsqoxv.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEC4tk9v = await SLTDETHlpReward.new({from: accounts[2]});
		const addresss0JaM3R = accounts[2]
		const addressWGBV4Zy = accounts[5]
		const addressz2xpK2H = "0x0000000000000000000000000000000000000001"
		const addressjyisvHT = await SLTDETHlpRewardEC4tk9v.setRewardDistribution.call(addresss0JaM3R, {from: accounts[2]});
//		await SLTDETHlpRewardEC4tk9v.renounceOwnership.call({from: accounts[5]});
//		const uint256CZnzj7 = await SLTDETHlpRewardEC4tk9v.earned.call(addressWGBV4Zy, {from: accounts[3]});
//		const uint256J56rklL = await SLTDETHlpRewardEC4tk9v.balanceOf.call(addressz2xpK2H, {from: accounts[0]});

		await expect(SLTDETHlpRewardEC4tk9v.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEC4tk9v = await SLTDETHlpReward.new({from: accounts[2]});
		const addressvR94JHw = accounts[5]
		const addressRK5ru6 = accounts[1]
		const uint256CZnzj7 = await SLTDETHlpRewardEC4tk9v.earned.call(addressvR94JHw, {from: accounts[3]});
		const addressK7qlw17 = await SLTDETHlpRewardEC4tk9v.setStakeAddress.call(addressRK5ru6, {from: accounts[2]});

		assert.equal(uint256CZnzj7, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpHztBs = await SLTDETHlpReward.new({from: accounts[4]});
		const addressKC3FrzT = await SLTDETHlpRewardpHztBs.owner.call({from: accounts[1]});
		const uint256YOZsVZg = await SLTDETHlpRewardpHztBs.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256IAoLmhm = await SLTDETHlpRewardpHztBs.lastTimeRewardApplicable.call({from: accounts[3]});
//		await SLTDETHlpRewardpHztBs.onlyRewardDistribution.call({from: accounts[3]});

		assert.equal(addressKC3FrzT, 0x5EAAdb6BE9A8864F6ffE09d2C78334529dD6fC06)
		assert.equal(uint256IAoLmhm, BigInt("0"))
		assert.equal(uint256YOZsVZg, BigInt("0"))
		await expect(SLTDETHlpRewardpHztBs.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})