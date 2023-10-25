const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStake0XAevu = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintxd4xyMA = BigInt("1662")
		const uintYO6rVNS = BigInt("1129")
		const uint256yobrpmj = await CourtFarming_RoomLPStake0XAevu.stake.call(uintxd4xyMA, {from: accounts[0]});
		const uint256gYC566 = await CourtFarming_RoomLPStake0XAevu.stake.call(uintYO6rVNS, {from: accounts[1]});
		const uint256SoalXM3 = await CourtFarming_RoomLPStake0XAevu.incvRewardInfo.call({from: accounts[5]});

		await expect(CourtFarming_RoomLPStake0XAevu.stake.call(uintxd4xyMA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeuPS67r3 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintBYXLBaa = BigInt("1173")
		const uint256bUEZD6G = await CourtFarming_RoomLPStakeuPS67r3.lastUpdateBlock.call({from: accounts[0]});
		const uint256t7TIr60 = await CourtFarming_RoomLPStakeuPS67r3.stake.call(uintBYXLBaa, {from: accounts[0]});
		const uint256nPwK6FQ = await CourtFarming_RoomLPStakeuPS67r3.lastUpdateBlock.call({from: accounts[3]});
		const uint256aEv2Iv = await CourtFarming_RoomLPStakeuPS67r3.getCurrentTime.call({from: accounts[1]});

		assert.equal(uint256bUEZD6G, BigInt("1528"))
		await expect(CourtFarming_RoomLPStakeuPS67r3.stake.call(uintBYXLBaa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeoTHNqr8 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uint256PuhRR9B = await CourtFarming_RoomLPStakeoTHNqr8.getCurrentTime.call({from: accounts[3]});
		const uint256fnzBUFD = await CourtFarming_RoomLPStakeoTHNqr8.lastUpdateBlock.call({from: accounts[4]});
		const uint256k3tiP82 = await CourtFarming_RoomLPStakeoTHNqr8.incvRewardClaim.call({from: accounts[3]});

		assert.equal(uint256PuhRR9B, BigInt("1630200718"))
		assert.equal(uint256fnzBUFD, BigInt("1528"))
		assert.equal(uint256k3tiP82, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTY5Ngrz = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addresswUeVPD7 = accounts[3]
		const uint256KLzqdtM = await CourtFarming_RoomLPStakeTY5Ngrz.lastUpdateBlock.call({from: accounts[2]});
		const addressV1J6gFy = await CourtFarming_RoomLPStakeTY5Ngrz.getBeneficiaryInfo.call(addresswUeVPD7, {from: accounts[1]});

		assert.equal(uint256KLzqdtM, BigInt("1528"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakewICQnM = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintefcKtJ = BigInt("2027")
		const uintWqpbWvG = BigInt("1026")
		const uintBPpgMD1 = BigInt("421")
		const boolJIB75UM = false
		const uintTMZz9HJ = BigInt("41")
		const addressimgeTlN = accounts[0]
		const boolTd49ld4 = false
		const uintHcyxm8z = BigInt("1282")
		await CourtFarming_RoomLPStakewICQnM.changeStakeParameters.call(uintBPpgMD1, uintWqpbWvG, uintefcKtJ, {from: accounts[3]});
		const uint256XnkTmsV = await CourtFarming_RoomLPStakewICQnM.unstake.call(uintTMZz9HJ, boolJIB75UM, {from: "0x0000000000000000000000000000000000000001"});
		const addressoRGw2Bn = await CourtFarming_RoomLPStakewICQnM.updateReward.call(addressimgeTlN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mIF4cU = await CourtFarming_RoomLPStakewICQnM.lastUpdateBlock.call({from: accounts[0]});
		const uint256Q4Xx8sJ = await CourtFarming_RoomLPStakewICQnM.unstake.call(uintHcyxm8z, boolTd49ld4, {from: accounts[2]});

		await expect(CourtFarming_RoomLPStakewICQnM.changeStakeParameters.call(uintBPpgMD1, uintWqpbWvG, uintefcKtJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeuJy8TWH = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addresswjm8aEZ = accounts[5]
		const addressjFWG98L = accounts[1]
		const uint256c86kK96 = await CourtFarming_RoomLPStakeuJy8TWH.lastUpdateBlock.call({from: accounts[5]});
		const uint256CSHj7D3 = await CourtFarming_RoomLPStakeuJy8TWH.totalStaked.call({from: accounts[1]});
		const addressPg2xJEY = await CourtFarming_RoomLPStakeuJy8TWH.updateReward.call(addresswjm8aEZ, {from: accounts[4]});
		const uint256StvV4I = await CourtFarming_RoomLPStakeuJy8TWH.incvRewardInfo.call({from: accounts[2]});
		const addressPV7Ue3C = await CourtFarming_RoomLPStakeuJy8TWH.getBeneficiaryInfo.call(addressjFWG98L, {from: accounts[3]});

		assert.equal(uint256CSHj7D3, BigInt("0"))
		assert.equal(uint256c86kK96, BigInt("1528"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTfNUTj = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addresskmaLPa = accounts[0]
		const addressQ7R6D5E = accounts[5]
		const uintj1ZMAS0 = BigInt("333")
		const uint2561kllVJ = await CourtFarming_RoomLPStakeTfNUTj.rewards.call(addresskmaLPa, {from: accounts[1]});
		const addressrAdNklF = await CourtFarming_RoomLPStakeTfNUTj.setCourtStake.call(addressQ7R6D5E, {from: accounts[2]});
		const uint256jcpexrE = await CourtFarming_RoomLPStakeTfNUTj.stake.call(uintj1ZMAS0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256C6Kta9Y = await CourtFarming_RoomLPStakeTfNUTj.lastUpdateBlock.call({from: accounts[2]});
		const uint256VVLqEVh = await CourtFarming_RoomLPStakeTfNUTj.incvRewardClaim.call({from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeTfNUTj.setCourtStake.call(addressQ7R6D5E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeuPS67r3 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const boolyn0Xg12 = false
		const uintdG2l6dG = BigInt("518")
		const uintUBlwG47 = BigInt("1173")
		const uintf54jrqy = BigInt("666")
		const uint256kLVUfRQ = await CourtFarming_RoomLPStakeuPS67r3.totalStaked.call({from: accounts[4]});
		const uint256KipQwS9 = await CourtFarming_RoomLPStakeuPS67r3.unstake.call(uintdG2l6dG, boolyn0Xg12, {from: accounts[0]});
		const uint256bUEZD6G = await CourtFarming_RoomLPStakeuPS67r3.lastUpdateBlock.call({from: accounts[0]});
		const uint256t7TIr60 = await CourtFarming_RoomLPStakeuPS67r3.stake.call(uintUBlwG47, {from: accounts[0]});
		const uint256nPwK6FQ = await CourtFarming_RoomLPStakeuPS67r3.lastUpdateBlock.call({from: accounts[3]});
		const uint256JogHNUo = await CourtFarming_RoomLPStakeuPS67r3.expectedRewardsToday.call(uintf54jrqy, {from: accounts[2]});
		const uint256aEv2Iv = await CourtFarming_RoomLPStakeuPS67r3.getCurrentTime.call({from: accounts[1]});

		assert.equal(uint256kLVUfRQ, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeuPS67r3.unstake.call(uintdG2l6dG, boolyn0Xg12, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTY5Ngrz = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintboqI0ii = BigInt("273")
		const addresspI93j59 = accounts[3]
		const uint256KLzqdtM = await CourtFarming_RoomLPStakeTY5Ngrz.lastUpdateBlock.call({from: accounts[2]});
		const booltWSF8eH = await CourtFarming_RoomLPStakeTY5Ngrz.stakeIncvRewards.call(uintboqI0ii, {from: accounts[0]});
		const addressV1J6gFy = await CourtFarming_RoomLPStakeTY5Ngrz.getBeneficiaryInfo.call(addresspI93j59, {from: accounts[1]});

		assert.equal(booltWSF8eH, false)
		assert.equal(uint256KLzqdtM, BigInt("1528"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakebJNYCwX = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addresspnsJt0Q = accounts[3]
		const uintdi4Ohgp = BigInt("1352")
		const addressg6qRRYj = accounts[4]
		const uint256bAj1di = await CourtFarming_RoomLPStakebJNYCwX.lastUpdateBlock.call({from: accounts[0]});
		const addressQaDL6wQ = await CourtFarming_RoomLPStakebJNYCwX.updateReward.call(addresspnsJt0Q, {from: accounts[2]});
		const boolNI9ash0 = await CourtFarming_RoomLPStakebJNYCwX.stakeIncvRewards.call(uintdi4Ohgp, {from: accounts[3]});
		const addressBP9AOi9 = await CourtFarming_RoomLPStakebJNYCwX.updateReward.call(addressg6qRRYj, {from: accounts[2]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTY5Ngrz = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintHKmffbx = BigInt("1921")
		const boolLLYC62B = true
		const uintk9nRFfh = BigInt("1046")
		const uint256AOxgqio = await CourtFarming_RoomLPStakeTY5Ngrz.expectedRewardsToday.call(uintHKmffbx, {from: accounts[2]});
		const uint256iMhY0u = await CourtFarming_RoomLPStakeTY5Ngrz.unstake.call(uintk9nRFfh, boolLLYC62B, {from: accounts[0]});
		const uint256KLzqdtM = await CourtFarming_RoomLPStakeTY5Ngrz.lastUpdateBlock.call({from: accounts[2]});

		await expect(CourtFarming_RoomLPStakeTY5Ngrz.unstake.call(uintk9nRFfh, boolLLYC62B, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakew2kuqab = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressy6ZUQkH = accounts[0]
		const addressQolCbFr = accounts[4]
		const uintlZVVhol = BigInt("495")
		const uint256PwT8liJ = await CourtFarming_RoomLPStakew2kuqab.balanceOf.call(addressy6ZUQkH, {from: "0x0000000000000000000000000000000000000001"});
		const addressbKhsNfk = await CourtFarming_RoomLPStakew2kuqab.getBeneficiaryInfo.call(addressQolCbFr, {from: accounts[3]});
		const uint256KlnmBS2 = await CourtFarming_RoomLPStakew2kuqab.expectedRewardsToday.call(uintlZVVhol, {from: accounts[1]});

		assert.equal(uint256PwT8liJ, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTY5Ngrz = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintSocEnii = BigInt("169")
		const addresssZrNXU8 = accounts[0]
		const boolNKfXoH0 = false
		const uintA3HAT5x = BigInt("293")
		const uintcy5sCX5 = BigInt("347")
		const addressZrzYaXr = accounts[3]
		const uint256KLzqdtM = await CourtFarming_RoomLPStakeTY5Ngrz.lastUpdateBlock.call({from: accounts[2]});
		const uint256Nrtceg7 = await CourtFarming_RoomLPStakeTY5Ngrz.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256xj1XPKb = await CourtFarming_RoomLPStakeTY5Ngrz.expectedRewardsToday.call(uintSocEnii, {from: accounts[3]});
		const addressRyZhjrr = await CourtFarming_RoomLPStakeTY5Ngrz.setCourtStake.call(addresssZrNXU8, {from: accounts[1]});
		const uint256QCf3bN9 = await CourtFarming_RoomLPStakeTY5Ngrz.unstake.call(uintA3HAT5x, boolNKfXoH0, {from: accounts[2]});
		const uint256K8tMhR0 = await CourtFarming_RoomLPStakeTY5Ngrz.stake.call(uintcy5sCX5, {from: accounts[1]});
		const addressV1J6gFy = await CourtFarming_RoomLPStakeTY5Ngrz.getBeneficiaryInfo.call(addressZrzYaXr, {from: accounts[1]});

		assert.equal(uint256KLzqdtM, BigInt("1528"))
		assert.equal(uint256Nrtceg7, BigInt("1528"))
		await expect(CourtFarming_RoomLPStakeTY5Ngrz.setCourtStake.call(addresssZrNXU8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTY5Ngrz = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintqKfvtM = BigInt("1894")
		const uintxoSkci9 = BigInt("1348")
		const uintlYMrTwv = BigInt("896")
		const addresso7ujdZC = accounts[3]
		const uintyC92b06 = BigInt("166")
		await CourtFarming_RoomLPStakeTY5Ngrz.changeStakeParameters.call(uintlYMrTwv, uintxoSkci9, uintqKfvtM, {from: accounts[1]});
		const uint256KLzqdtM = await CourtFarming_RoomLPStakeTY5Ngrz.lastUpdateBlock.call({from: accounts[2]});
		const addressV1J6gFy = await CourtFarming_RoomLPStakeTY5Ngrz.getBeneficiaryInfo.call(addresso7ujdZC, {from: accounts[1]});
		const uint256APPR4Cc = await CourtFarming_RoomLPStakeTY5Ngrz.expectedRewardsToday.call(uintyC92b06, {from: accounts[5]});

		await expect(CourtFarming_RoomLPStakeTY5Ngrz.changeStakeParameters.call(uintlYMrTwv, uintxoSkci9, uintqKfvtM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeJ4Qoll0 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintmLxiT9Y = BigInt("1754")
		const uintwCQmsM0 = BigInt("1793")
		const uintNUeAYAa = BigInt("1534")
		const uinthv9Ar0X = BigInt("0")
		await CourtFarming_RoomLPStakeJ4Qoll0.changeStakeParameters.call(uintNUeAYAa, uintwCQmsM0, uintmLxiT9Y, {from: accounts[3]});
		const uint256op6v0Go = await CourtFarming_RoomLPStakeJ4Qoll0.stake.call(uinthv9Ar0X, {from: accounts[2]});
		const uint256cLOyh0z = await CourtFarming_RoomLPStakeJ4Qoll0.lastUpdateBlock.call({from: accounts[4]});
		const uint256wnYzYLU = await CourtFarming_RoomLPStakeJ4Qoll0.blockNumber.call({from: accounts[2]});

		await expect(CourtFarming_RoomLPStakeJ4Qoll0.changeStakeParameters.call(uintNUeAYAa, uintwCQmsM0, uintmLxiT9Y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakew2kuqab = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const booliRRT14E = false
		const uintrO9Ot9o = BigInt("0")
		const uint256KZlIobi = await CourtFarming_RoomLPStakew2kuqab.unstake.call(uintrO9Ot9o, booliRRT14E, {from: accounts[3]});
		const uint256qH1yeDz = await CourtFarming_RoomLPStakew2kuqab.incvRewardClaim.call({from: accounts[4]});

		assert.equal(uint256qH1yeDz, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTY5Ngrz = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressqZSRHtC = accounts[1]
		const uinttwha7MM = BigInt("159")
		const uintwxZrGHp = BigInt("0")
		const uint256BFPjtuW = await CourtFarming_RoomLPStakeTY5Ngrz.balanceOf.call(addressqZSRHtC, {from: accounts[1]});
		const uint256BKBZFpE = await CourtFarming_RoomLPStakeTY5Ngrz.totalStaked.call({from: accounts[4]});
		const uint256yYFwyBw = await CourtFarming_RoomLPStakeTY5Ngrz.incvRewardClaim.call({from: accounts[4]});
		const boolN9CFVck = await CourtFarming_RoomLPStakeTY5Ngrz.stakeIncvRewards.call(uinttwha7MM, {from: accounts[5]});
		const uint256dC7iQzj = await CourtFarming_RoomLPStakeTY5Ngrz.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTejV6eu = await CourtFarming_RoomLPStakeTY5Ngrz.stakeIncvRewards.call(uintwxZrGHp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KLzqdtM = await CourtFarming_RoomLPStakeTY5Ngrz.lastUpdateBlock.call({from: accounts[2]});

		assert.equal(boolN9CFVck, false)
		assert.equal(boolTejV6eu, false)
		assert.equal(uint256BFPjtuW, BigInt("0"))
		assert.equal(uint256BKBZFpE, BigInt("0"))
		assert.equal(uint256KLzqdtM, BigInt("1528"))
		assert.equal(uint256yYFwyBw, BigInt("0"))
	});
})