const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardK67ccTb = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressvq4DDRV = accounts[2]
		const uintXJmTOyQ = BigInt("850")
		const uint256ecuuJF = await SLTDETHlpRewardK67ccTb.earned.call(addressvq4DDRV, {from: accounts[3]});
		const bool0qXjCp = await SLTDETHlpRewardK67ccTb.isOwner.call({from: accounts[1]});
		const uint256utaqNCd = await SLTDETHlpRewardK67ccTb.withdraw.call(uintXJmTOyQ, {from: accounts[5]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardu83jU5n = await SLTDETHlpReward.new({from: accounts[2]});
		const uintUJ3b2o0 = BigInt("1780")
		const addressoccl56n = accounts[5]
		const uint256B6GNu7O = await SLTDETHlpRewardu83jU5n.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256nDlhiVD = await SLTDETHlpRewardu83jU5n.withdraw.call(uintUJ3b2o0, {from: accounts[2]});
//		const addressUIqfcH = await SLTDETHlpRewardu83jU5n.setStakeAddress.call(addressoccl56n, {from: accounts[1]});

		assert.equal(uint256B6GNu7O, BigInt("0"))
		await expect(SLTDETHlpRewardu83jU5n.withdraw.call(uintUJ3b2o0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardf3le42 = await SLTDETHlpReward.new({from: accounts[0]});
		const uintp3O8YH = BigInt("1328")
//		await SLTDETHlpRewardf3le42.onlyRewardDistribution.call({from: accounts[2]});
//		const uint256QfKLrJC = await SLTDETHlpRewardf3le42.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256iAqmSud = await SLTDETHlpRewardf3le42.rewardPerToken.call({from: accounts[5]});
//		const uint256ykLkl5h = await SLTDETHlpRewardf3le42.stake.call(uintp3O8YH, {from: accounts[3]});

		await expect(SLTDETHlpRewardf3le42.onlyRewardDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardmSzmfYO = await SLTDETHlpReward.new({from: accounts[1]});
		const uintnQss9Sm = BigInt("1124")
//		const uint256qcoJY0 = await SLTDETHlpRewardmSzmfYO.stake.call(uintnQss9Sm, {from: accounts[0]});
//		const uint256f9IcQbg = await SLTDETHlpRewardmSzmfYO.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardmSzmfYO.stake.call(uintnQss9Sm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardn4p3HSi = await SLTDETHlpReward.new({from: accounts[0]});
		const uintO8dd2R = BigInt("4")
//		await SLTDETHlpRewardn4p3HSi.renounceOwnership.call({from: accounts[3]});
//		const uint256feGdMS = await SLTDETHlpRewardn4p3HSi.remainingReward.call({from: accounts[4]});
//		const uint256UCpm40 = await SLTDETHlpRewardn4p3HSi.notifyRewardAmount.call(uintO8dd2R, {from: accounts[1]});

		await expect(SLTDETHlpRewardn4p3HSi.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardmSzmfYO = await SLTDETHlpReward.new({from: accounts[1]});
		const uintTFhOSO = BigInt("1136")
//		await SLTDETHlpRewardmSzmfYO.exit.call({from: accounts[0]});
//		const uint256qcoJY0 = await SLTDETHlpRewardmSzmfYO.stake.call(uintTFhOSO, {from: accounts[0]});
//		const uint256f9IcQbg = await SLTDETHlpRewardmSzmfYO.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardmSzmfYO.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKETo9Md = await SLTDETHlpReward.new({from: accounts[0]});
		const uintIlHLTMw = BigInt("762")
		const uintVWRJDlF = BigInt("1310")
//		const uint256cy9BQS2 = await SLTDETHlpRewardKETo9Md.remainingReward.call({from: accounts[3]});
//		const uint256f7tuZWD = await SLTDETHlpRewardKETo9Md.stake.call(uintIlHLTMw, {from: accounts[5]});
//		const uint256az33RyG = await SLTDETHlpRewardKETo9Md.stake.call(uintVWRJDlF, {from: accounts[2]});
//		await SLTDETHlpRewardKETo9Md.checkStart.call({from: accounts[3]});

		await expect(SLTDETHlpRewardKETo9Md.remainingReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEriSUGA = await SLTDETHlpReward.new({from: accounts[3]});
		const addressoC5gMgJ = accounts[0]
//		await SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[1]});
//		const uint256zQw2hxD = await SLTDETHlpRewardEriSUGA.totalSupply.call({from: accounts[2]});
//		await SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[3]});
//		await SLTDETHlpRewardEriSUGA.onlyOwner.call({from: accounts[2]});
//		const addressmCntDO0 = await SLTDETHlpRewardEriSUGA.updateReward.call(addressoC5gMgJ, {from: accounts[0]});

		await expect(SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardmSzmfYO = await SLTDETHlpReward.new({from: accounts[1]});
		const addressn6RPBMG = accounts[3]
		const uintTL7xqca = BigInt("1120")
		const addressdP1efRx = await SLTDETHlpRewardmSzmfYO.setStakeAddress.call(addressn6RPBMG, {from: accounts[1]});
		const uint2569oKS3y = await SLTDETHlpRewardmSzmfYO.totalSupply.call({from: accounts[0]});
//		const uint256qcoJY0 = await SLTDETHlpRewardmSzmfYO.stake.call(uintTL7xqca, {from: accounts[0]});

		assert.equal(uint2569oKS3y, BigInt("0"))
		await expect(SLTDETHlpRewardmSzmfYO.stake.call(uintTL7xqca, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardacymn5x = await SLTDETHlpReward.new({from: accounts[2]});
		const addressMncIZxb = accounts[4]
//		await SLTDETHlpRewardacymn5x.renounceOwnership.call({from: accounts[2]});
//		await SLTDETHlpRewardacymn5x.onlyRewardDistribution.call({from: accounts[4]});
//		await SLTDETHlpRewardacymn5x.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressjgEGbfO = await SLTDETHlpRewardacymn5x.setStakeAddress.call(addressMncIZxb, {from: accounts[0]});
//		await SLTDETHlpRewardacymn5x.getReward.call({from: accounts[5]});

		await expect(SLTDETHlpRewardacymn5x.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardmSzmfYO = await SLTDETHlpReward.new({from: accounts[1]});
		const uintikAQ77n = BigInt("204")
		const uintsnFUzV1 = BigInt("1126")
		const uintZMm31ke = BigInt("1014")
		const uint256DZ16sRw = await SLTDETHlpRewardmSzmfYO.notifyRewardAmount.call(uintikAQ77n, {from: accounts[1]});
//		const uint256qcoJY0 = await SLTDETHlpRewardmSzmfYO.stake.call(uintsnFUzV1, {from: accounts[0]});
//		const uint256f9IcQbg = await SLTDETHlpRewardmSzmfYO.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256NPNl5ix = await SLTDETHlpRewardmSzmfYO.withdraw.call(uintZMm31ke, {from: accounts[4]});

		await expect(SLTDETHlpRewardmSzmfYO.stake.call(uintsnFUzV1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEriSUGA = await SLTDETHlpReward.new({from: accounts[3]});
		const uintMWgZnzb = BigInt("1444")
		const uintz4Eq56 = BigInt("1176")
		const addressUHnOYU = accounts[1]
//		await SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[1]});
//		const uint256zQw2hxD = await SLTDETHlpRewardEriSUGA.totalSupply.call({from: accounts[2]});
//		const uint256JpJRmmV = await SLTDETHlpRewardEriSUGA.notifyRewardAmount.call(uintMWgZnzb, {from: accounts[3]});
//		const uint2561wbDr2 = await SLTDETHlpRewardEriSUGA.notifyRewardAmount.call(uintz4Eq56, {from: accounts[1]});
//		await SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[0]});
//		const addressmCntDO0 = await SLTDETHlpRewardEriSUGA.updateReward.call(addressUHnOYU, {from: accounts[0]});

		await expect(SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEriSUGA = await SLTDETHlpReward.new({from: accounts[3]});
		const uintdSd9AYx = BigInt("1452")
		const addresszPKdrrF = accounts[2]
//		await SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[1]});
//		await SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[5]});
//		const uint256zQw2hxD = await SLTDETHlpRewardEriSUGA.totalSupply.call({from: accounts[2]});
//		const addressamwDhza = await SLTDETHlpRewardEriSUGA.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256JpJRmmV = await SLTDETHlpRewardEriSUGA.notifyRewardAmount.call(uintdSd9AYx, {from: accounts[3]});
//		const addressmCntDO0 = await SLTDETHlpRewardEriSUGA.updateReward.call(addresszPKdrrF, {from: accounts[0]});
		await SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[1]});

		await expect(SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEriSUGA = await SLTDETHlpReward.new({from: accounts[3]});
		const addressoFEwmJ = accounts[3]
		const uintLDFeErm = BigInt("1448")
		const addresssDTCJ46 = accounts[2]
//		await SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[1]});
//		await SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[5]});
//		const addressvNYWHtk = await SLTDETHlpRewardEriSUGA.transferOwnership.call(addressoFEwmJ, {from: accounts[3]});
//		const uint256zQw2hxD = await SLTDETHlpRewardEriSUGA.totalSupply.call({from: accounts[2]});
//		const addressamwDhza = await SLTDETHlpRewardEriSUGA.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256JpJRmmV = await SLTDETHlpRewardEriSUGA.notifyRewardAmount.call(uintLDFeErm, {from: accounts[3]});
//		const addressmCntDO0 = await SLTDETHlpRewardEriSUGA.updateReward.call(addresssDTCJ46, {from: accounts[0]});
		await SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[1]});

		await expect(SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardmSzmfYO = await SLTDETHlpReward.new({from: accounts[1]});
		const uintY1Mfhft = BigInt("1266")
		const uintgVjNxec = BigInt("1113")
		const addresspqguzNc = accounts[4]
		const uint256YOY5fro = await SLTDETHlpRewardmSzmfYO.setStartTime.call(uintY1Mfhft, {from: accounts[1]});
//		await SLTDETHlpRewardmSzmfYO.renounceOwnership.call({from: accounts[2]});
//		const uint256qcoJY0 = await SLTDETHlpRewardmSzmfYO.stake.call(uintgVjNxec, {from: accounts[0]});
//		const uint256BVbphJE = await SLTDETHlpRewardmSzmfYO.earned.call(addresspqguzNc, {from: accounts[2]});

		await expect(SLTDETHlpRewardmSzmfYO.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEriSUGA = await SLTDETHlpReward.new({from: accounts[3]});
		const addressVEXVCZ = "0x0000000000000000000000000000000000000001"
		const uintsx15RcE = BigInt("1452")
		const addressBaAmLoq = accounts[2]
//		await SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[1]});
//		await SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[5]});
//		const addressGlJRUli = await SLTDETHlpRewardEriSUGA.owner.call({from: accounts[0]});
//		const addressxCmjWWt = await SLTDETHlpRewardEriSUGA.setRewardDistribution.call(addressVEXVCZ, {from: accounts[3]});
//		const uint256zQw2hxD = await SLTDETHlpRewardEriSUGA.totalSupply.call({from: accounts[2]});
//		const addressamwDhza = await SLTDETHlpRewardEriSUGA.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256JpJRmmV = await SLTDETHlpRewardEriSUGA.notifyRewardAmount.call(uintsx15RcE, {from: accounts[3]});
//		const addressmCntDO0 = await SLTDETHlpRewardEriSUGA.updateReward.call(addressBaAmLoq, {from: accounts[0]});
		await SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[1]});

		await expect(SLTDETHlpRewardEriSUGA.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})