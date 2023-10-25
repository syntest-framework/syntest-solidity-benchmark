const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addresslT980Zu = accounts[4]
		const addressIsLc7ay = accounts[4]
		const uintlZVTq53 = BigInt("1501")
		const uint4ZhBqD = BigInt("1760")
		const MisesLegacyPoolTWXNQFc = await MisesLegacyPool.new(addresslT980Zu, addressIsLc7ay, uintlZVTq53, uint4ZhBqD, {from: accounts[1]});
		const addressAuUn8F6 = accounts[4]
		const uintXEKxcpg = BigInt("2005")
//		await MisesLegacyPoolTWXNQFc.getReward.call({from: accounts[1]});
//		const addressTfikSD5 = await MisesLegacyPoolTWXNQFc.updateReward.call(addressAuUn8F6, {from: "0x0000000000000000000000000000000000000001"});
//		await MisesLegacyPoolTWXNQFc.exit.call({from: accounts[1]});
//		const uint256q3Dgy5N = await MisesLegacyPoolTWXNQFc.withdraw.call(uintXEKxcpg, {from: accounts[5]});
//		const uint256TSGWj3P = await MisesLegacyPoolTWXNQFc.rewardPerToken.call({from: accounts[4]});

		await expect(MisesLegacyPoolTWXNQFc.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressomzAJOc = accounts[2]
		const addressgw5yYPH = accounts[4]
		const uintYOnsoAz = BigInt("1772")
		const uintEbAuK4w = BigInt("2036")
		const MisesLegacyPooliHqCFmj = await MisesLegacyPool.new(addressomzAJOc, addressgw5yYPH, uintYOnsoAz, uintEbAuK4w, {from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPooliHqCFmj.exit.call({from: accounts[0]});
		await MisesLegacyPooliHqCFmj.getReward.call({from: accounts[2]});
	});

	it('test for MisesLegacyPool', async () => {
		const addresssc97KHi = accounts[4]
		const addressXuF6GUB = accounts[4]
		const uintJjpUBMA = BigInt("1791")
		const uintALs6BVe = BigInt("606")
		const MisesLegacyPoolyZUWFV5 = await MisesLegacyPool.new(addresssc97KHi, addressXuF6GUB, uintJjpUBMA, uintALs6BVe, {from: accounts[4]});
		const uint256sSh4SkT = await MisesLegacyPoolyZUWFV5.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256AMos4v7 = await MisesLegacyPoolyZUWFV5.lastTimeRewardApplicable.call({from: accounts[2]});
//		await MisesLegacyPoolyZUWFV5.exit.call({from: accounts[2]});

		assert.equal(uint256AMos4v7, BigInt("0"))
		assert.equal(uint256sSh4SkT, BigInt("0"))
		await expect(MisesLegacyPoolyZUWFV5.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressZbnk09 = "0x0000000000000000000000000000000000000001"
		const addressYQlPGd = accounts[2]
		const uintqEzYWuv = BigInt("336")
		const uintl0KHYBl = BigInt("451")
		const MisesLegacyPoolWIVNFnv = await MisesLegacyPool.new(addressZbnk09, addressYQlPGd, uintqEzYWuv, uintl0KHYBl, {from: accounts[0]});
		const uintKLUthp0 = BigInt("1166")
		const uint256dnhMmyo = await MisesLegacyPoolWIVNFnv.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256Dcdwv0z = await MisesLegacyPoolWIVNFnv.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256ny2crv6 = await MisesLegacyPoolWIVNFnv.withdraw.call(uintKLUthp0, {from: accounts[1]});

		assert.equal(uint256Dcdwv0z, BigInt("0"))
		assert.equal(uint256dnhMmyo, BigInt("0"))
		await expect(MisesLegacyPoolWIVNFnv.withdraw.call(uintKLUthp0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresstOqcbfl = accounts[1]
		const addressr3zA0sA = "0x0000000000000000000000000000000000000001"
		const uintTxIulBg = BigInt("340")
		const uintaN9uvaw = BigInt("975")
		const MisesLegacyPoolwHN20z2 = await MisesLegacyPool.new(addresstOqcbfl, addressr3zA0sA, uintTxIulBg, uintaN9uvaw, {from: accounts[1]});
		const uintzsUiv2F = BigInt("816")
		const uintwuewkGE = BigInt("1533")
//		const uint256aJ1debE = await MisesLegacyPoolwHN20z2.stake.call(uintzsUiv2F, {from: accounts[5]});
//		const uint256XBsb1Ji = await MisesLegacyPoolwHN20z2.notifyRewardAmount.call(uintwuewkGE, {from: accounts[3]});
//		await MisesLegacyPoolwHN20z2.exit.call({from: accounts[5]});
//		await MisesLegacyPoolwHN20z2.getReward.call({from: accounts[0]});

		await expect(MisesLegacyPoolwHN20z2.stake.call(uintzsUiv2F, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressRCYEd4J = accounts[3]
		const addressjpMTGiI = accounts[1]
		const uinttVn7OOi = BigInt("1302")
		const uintzO7cNAq = BigInt("1235")
		const MisesLegacyPoolKQnzklJ = await MisesLegacyPool.new(addressRCYEd4J, addressjpMTGiI, uinttVn7OOi, uintzO7cNAq, {from: accounts[5]});
		const uintwjaFjGN = BigInt("917")
		const uintMDDNGMi = BigInt("1525")
		const addresspB0a9v4 = accounts[2]
		const addressmTKOrj = accounts[4]
//		const uint256Kwt2RZ1 = await MisesLegacyPoolKQnzklJ.notifyRewardAmount.call(uintwjaFjGN, {from: accounts[1]});
//		const uint256r8MHwL = await MisesLegacyPoolKQnzklJ.stake.call(uintMDDNGMi, {from: accounts[4]});
//		const uint256A9SbfB5 = await MisesLegacyPoolKQnzklJ.earned.call(addresspB0a9v4, {from: accounts[2]});
//		const addressZs8YFGC = await MisesLegacyPoolKQnzklJ.updateReward.call(addressmTKOrj, {from: accounts[2]});

		await expect(MisesLegacyPoolKQnzklJ.notifyRewardAmount.call(uintwjaFjGN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})