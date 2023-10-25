const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsaoZvlFZ = await DMONDETHRewards.new({from: accounts[2]});
		const addressb8yOMc = accounts[5]
		const uintGraCx2q = BigInt("149")
		const addressCx6bv2V = accounts[1]
		const uinttJSNLkh = BigInt("1735")
//		const addressCPAU8h = await DMONDETHRewardsaoZvlFZ.updateReward.call(addressb8yOMc, {from: accounts[1]});
//		const uint256iuq9JMC = await DMONDETHRewardsaoZvlFZ.setStartTime.call(uintGraCx2q, {from: accounts[4]});
//		const uint256HOXegsp = await DMONDETHRewardsaoZvlFZ.balanceOf.call(addressCx6bv2V, {from: accounts[0]});
//		const uint256M2DBAqu = await DMONDETHRewardsaoZvlFZ.setStartTime.call(uinttJSNLkh, {from: accounts[4]});

		await expect(DMONDETHRewardsaoZvlFZ.updateReward.call(addressb8yOMc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsbD3WHH5 = await DMONDETHRewards.new({from: accounts[3]});
		const boolxbndCcA = await DMONDETHRewardsbD3WHH5.isOwner.call({from: accounts[0]});
		const uint256S4Sqcwd = await DMONDETHRewardsbD3WHH5.totalSupply.call({from: accounts[0]});

		assert.equal(boolxbndCcA, false)
		assert.equal(uint256S4Sqcwd, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUOemyi = await DMONDETHRewards.new({from: accounts[1]});
		const addressmOrluiW = accounts[0]
		const uint256PSEENsK = await DMONDETHRewardsTUOemyi.earned.call(addressmOrluiW, {from: accounts[3]});
//		await DMONDETHRewardsTUOemyi.getReward.call({from: accounts[4]});

		assert.equal(uint256PSEENsK, BigInt("0"))
		await expect(DMONDETHRewardsTUOemyi.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardskYObfxd = await DMONDETHRewards.new({from: accounts[0]});
		const addressxhACNtc = accounts[4]
		const uintfkpd9O5 = BigInt("1705")
		const uint256DhNxkYx = await DMONDETHRewardskYObfxd.earned.call(addressxhACNtc, {from: accounts[2]});
//		const uint256bIq2uU = await DMONDETHRewardskYObfxd.withdraw.call(uintfkpd9O5, {from: accounts[2]});
//		await DMONDETHRewardskYObfxd.renounceOwnership.call({from: accounts[0]});
//		await DMONDETHRewardskYObfxd.onlyRewardDistribution.call({from: accounts[0]});

		assert.equal(uint256DhNxkYx, BigInt("0"))
		await expect(DMONDETHRewardskYObfxd.withdraw.call(uintfkpd9O5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAS8mXwh = await DMONDETHRewards.new({from: accounts[5]});
//		await DMONDETHRewardsAS8mXwh.exit.call({from: accounts[0]});
//		await DMONDETHRewardsAS8mXwh.onlyOwner.call({from: accounts[3]});
//		await DMONDETHRewardsAS8mXwh.checkStart.call({from: accounts[5]});

		await expect(DMONDETHRewardsAS8mXwh.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsoTfwiCy = await DMONDETHRewards.new({from: accounts[4]});
		const uintFERDyMt = BigInt("876")
		const uintRw4f1nQ = BigInt("1625")
//		const uint256GsUFaDR = await DMONDETHRewardsoTfwiCy.stake.call(uintFERDyMt, {from: accounts[1]});
//		await DMONDETHRewardsoTfwiCy.renounceOwnership.call({from: accounts[4]});
//		const uint256IpNRPa = await DMONDETHRewardsoTfwiCy.stake.call(uintRw4f1nQ, {from: accounts[0]});
//		await DMONDETHRewardsoTfwiCy.onlyOwner.call({from: accounts[5]});

		await expect(DMONDETHRewardsoTfwiCy.stake.call(uintFERDyMt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsbD3WHH5 = await DMONDETHRewards.new({from: accounts[3]});
		const boolxbndCcA = await DMONDETHRewardsbD3WHH5.isOwner.call({from: accounts[0]});
//		await DMONDETHRewardsbD3WHH5.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256S4Sqcwd = await DMONDETHRewardsbD3WHH5.totalSupply.call({from: accounts[0]});

		assert.equal(boolxbndCcA, false)
		await expect(DMONDETHRewardsbD3WHH5.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUOemyi = await DMONDETHRewards.new({from: accounts[1]});
		const uint96HnVW = BigInt("1695")
		const address4nKT5L = accounts[0]
//		const uint256RFUaDx = await DMONDETHRewardsTUOemyi.notifyRewardAmount.call(uint96HnVW, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256PSEENsK = await DMONDETHRewardsTUOemyi.earned.call(address4nKT5L, {from: accounts[3]});

		await expect(DMONDETHRewardsTUOemyi.notifyRewardAmount.call(uint96HnVW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUOemyi = await DMONDETHRewards.new({from: accounts[1]});
		const address1eL8w4 = accounts[1]
		const uint256PSEENsK = await DMONDETHRewardsTUOemyi.earned.call(address1eL8w4, {from: accounts[3]});
		const addressQPGcy2d = await DMONDETHRewardsTUOemyi.owner.call({from: accounts[0]});

		assert.equal(addressQPGcy2d, 0x8A3D7f01B2De269BBC39C0F75980d135A103F9c4)
		assert.equal(uint256PSEENsK, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUOemyi = await DMONDETHRewards.new({from: accounts[1]});
		const addresscXChkCs = accounts[1]
//		await DMONDETHRewardsTUOemyi.renounceOwnership.call({from: accounts[1]});
//		await DMONDETHRewardsTUOemyi.onlyRewardDistribution.call({from: accounts[0]});
//		const uint256PSEENsK = await DMONDETHRewardsTUOemyi.earned.call(addresscXChkCs, {from: accounts[3]});
//		const uint256cpB6IM7 = await DMONDETHRewardsTUOemyi.lastTimeRewardApplicable.call({from: accounts[2]});
//		const addressASCpfjS = await DMONDETHRewardsTUOemyi.owner.call({from: accounts[1]});

		await expect(DMONDETHRewardsTUOemyi.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUOemyi = await DMONDETHRewards.new({from: accounts[1]});
		const addressXBaJ1CE = accounts[2]
		const addressUeVYCka = accounts[4]
		const addressGmWL25n = await DMONDETHRewardsTUOemyi.setStakeAddress.call(addressXBaJ1CE, {from: accounts[1]});
//		await DMONDETHRewardsTUOemyi.getReward.call({from: accounts[4]});
//		const uint256Oyw6AR9 = await DMONDETHRewardsTUOemyi.earned.call(addressUeVYCka, {from: accounts[3]});

		await expect(DMONDETHRewardsTUOemyi.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUOemyi = await DMONDETHRewards.new({from: accounts[1]});
		const addressKrOJ40W = accounts[1]
		const uint256PSEENsK = await DMONDETHRewardsTUOemyi.earned.call(addressKrOJ40W, {from: accounts[3]});
//		const uint256M8sXXU6 = await DMONDETHRewardsTUOemyi.remainingReward.call({from: accounts[4]});

		assert.equal(uint256PSEENsK, BigInt("0"))
		await expect(DMONDETHRewardsTUOemyi.remainingReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUOemyi = await DMONDETHRewards.new({from: accounts[1]});
		const addressdtvzuU5 = accounts[0]
		const addresscdjEfUR = await DMONDETHRewardsTUOemyi.transferOwnership.call(addressdtvzuU5, {from: accounts[1]});
//		await DMONDETHRewardsTUOemyi.getReward.call({from: accounts[4]});

		await expect(DMONDETHRewardsTUOemyi.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjHmwpA1 = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressoEvmS3 = accounts[3]
		const uintNu5rZi4 = BigInt("1336")
		const uintY2AuC5a = BigInt("898")
		const uintLcR2u6 = BigInt("355")
		const uint256T0U3qoF = await DMONDETHRewardsjHmwpA1.balanceOf.call(addressoEvmS3, {from: accounts[1]});
		const uint256yot5LLy = await DMONDETHRewardsjHmwpA1.stake.call(uintNu5rZi4, {from: accounts[5]});
		const uint256qlpTVHz = await DMONDETHRewardsjHmwpA1.stake.call(uintY2AuC5a, {from: accounts[4]});
		await DMONDETHRewardsjHmwpA1.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Zi41HI = await DMONDETHRewardsjHmwpA1.setStartTime.call(uintLcR2u6, {from: accounts[4]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUOemyi = await DMONDETHRewards.new({from: accounts[1]});
		const addressMKHPOY8 = accounts[2]
		const addressLeA7pij = await DMONDETHRewardsTUOemyi.setRewardDistribution.call(addressMKHPOY8, {from: accounts[1]});
//		await DMONDETHRewardsTUOemyi.getReward.call({from: accounts[4]});

		await expect(DMONDETHRewardsTUOemyi.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUOemyi = await DMONDETHRewards.new({from: accounts[1]});
		const addressbGNpgJ7 = accounts[2]
		const addressjtgfzy1 = accounts[0]
		const uintcramjDl = BigInt("1016")
		const uint256MOMBHf1 = await DMONDETHRewardsTUOemyi.balanceOf.call(addressbGNpgJ7, {from: accounts[2]});
		const uint256PSEENsK = await DMONDETHRewardsTUOemyi.earned.call(addressjtgfzy1, {from: accounts[3]});
		const uint256xHFDOd = await DMONDETHRewardsTUOemyi.setStartTime.call(uintcramjDl, {from: accounts[1]});

		assert.equal(uint256MOMBHf1, BigInt("0"))
		assert.equal(uint256PSEENsK, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUOemyi = await DMONDETHRewards.new({from: accounts[1]});
		const uintOumXJ9 = BigInt("1665")
//		await DMONDETHRewardsTUOemyi.getReward.call({from: accounts[4]});
//		const boolYR2zq0 = await DMONDETHRewardsTUOemyi.isOwner.call({from: accounts[0]});
//		const uint256IEa3qwu = await DMONDETHRewardsTUOemyi.notifyRewardAmount.call(uintOumXJ9, {from: accounts[1]});

		await expect(DMONDETHRewardsTUOemyi.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})