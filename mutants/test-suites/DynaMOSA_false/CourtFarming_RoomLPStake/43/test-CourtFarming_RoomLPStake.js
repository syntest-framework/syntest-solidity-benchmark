const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStake0XAevu = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintxd4xyMA = BigInt("1662")
		const uintYO6rVNS = BigInt("1129")
//		const uint256yobrpmj = await CourtFarming_RoomLPStake0XAevu.stake.call(uintxd4xyMA, {from: accounts[0]});
//		const uint256gYC566 = await CourtFarming_RoomLPStake0XAevu.stake.call(uintYO6rVNS, {from: accounts[1]});
//		const uint256SoalXM3 = await CourtFarming_RoomLPStake0XAevu.incvRewardInfo.call({from: accounts[5]});

		await expect(CourtFarming_RoomLPStake0XAevu.stake.call(uintxd4xyMA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeuPS67r3 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintBYXLBaa = BigInt("1173")
		const uint256bUEZD6G = await CourtFarming_RoomLPStakeuPS67r3.lastUpdateBlock.call({from: accounts[0]});
//		const uint256t7TIr60 = await CourtFarming_RoomLPStakeuPS67r3.stake.call(uintBYXLBaa, {from: accounts[0]});
//		const uint256nPwK6FQ = await CourtFarming_RoomLPStakeuPS67r3.lastUpdateBlock.call({from: accounts[3]});
//		const uint256aEv2Iv = await CourtFarming_RoomLPStakeuPS67r3.getCurrentTime.call({from: accounts[1]});

		assert.equal(uint256bUEZD6G, BigInt("1530"))
		await expect(CourtFarming_RoomLPStakeuPS67r3.stake.call(uintBYXLBaa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeoTHNqr8 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uint256PuhRR9B = await CourtFarming_RoomLPStakeoTHNqr8.getCurrentTime.call({from: accounts[3]});
		const uint256fnzBUFD = await CourtFarming_RoomLPStakeoTHNqr8.lastUpdateBlock.call({from: accounts[4]});
		const uint256k3tiP82 = await CourtFarming_RoomLPStakeoTHNqr8.incvRewardClaim.call({from: accounts[3]});

		assert.equal(uint256PuhRR9B, BigInt("1630200590"))
		assert.equal(uint256fnzBUFD, BigInt("1530"))
		assert.equal(uint256k3tiP82, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTY5Ngrz = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addresswUeVPD7 = accounts[3]
		const uint256KLzqdtM = await CourtFarming_RoomLPStakeTY5Ngrz.lastUpdateBlock.call({from: accounts[2]});
		const addressV1J6gFy = await CourtFarming_RoomLPStakeTY5Ngrz.getBeneficiaryInfo.call(addresswUeVPD7, {from: accounts[1]});

		assert.equal(uint256KLzqdtM, BigInt("1530"))
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
//		await CourtFarming_RoomLPStakewICQnM.changeStakeParameters.call(uintBPpgMD1, uintWqpbWvG, uintefcKtJ, {from: accounts[3]});
//		const uint256XnkTmsV = await CourtFarming_RoomLPStakewICQnM.unstake.call(uintTMZz9HJ, boolJIB75UM, {from: "0x0000000000000000000000000000000000000001"});
//		const addressoRGw2Bn = await CourtFarming_RoomLPStakewICQnM.updateReward.call(addressimgeTlN, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256mIF4cU = await CourtFarming_RoomLPStakewICQnM.lastUpdateBlock.call({from: accounts[0]});
//		const uint256Q4Xx8sJ = await CourtFarming_RoomLPStakewICQnM.unstake.call(uintHcyxm8z, boolTd49ld4, {from: accounts[2]});

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
		assert.equal(uint256c86kK96, BigInt("1530"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTfNUTj = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addresskmaLPa = accounts[0]
		const addressQ7R6D5E = accounts[5]
		const uintj1ZMAS0 = BigInt("333")
		const uint2561kllVJ = await CourtFarming_RoomLPStakeTfNUTj.rewards.call(addresskmaLPa, {from: accounts[1]});
//		const addressrAdNklF = await CourtFarming_RoomLPStakeTfNUTj.setCourtStake.call(addressQ7R6D5E, {from: accounts[2]});
//		const uint256jcpexrE = await CourtFarming_RoomLPStakeTfNUTj.stake.call(uintj1ZMAS0, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256C6Kta9Y = await CourtFarming_RoomLPStakeTfNUTj.lastUpdateBlock.call({from: accounts[2]});
//		const uint256VVLqEVh = await CourtFarming_RoomLPStakeTfNUTj.incvRewardClaim.call({from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeTfNUTj.setCourtStake.call(addressQ7R6D5E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeoTHNqr8 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const boolKTogHNU = false
		const uintVp54jrq = BigInt("1667")
		const uint256PuhRR9B = await CourtFarming_RoomLPStakeoTHNqr8.getCurrentTime.call({from: accounts[3]});
		const uint256fnzBUFD = await CourtFarming_RoomLPStakeoTHNqr8.lastUpdateBlock.call({from: accounts[4]});
		const uint256k3tiP82 = await CourtFarming_RoomLPStakeoTHNqr8.incvRewardClaim.call({from: accounts[3]});
//		const uint256Q13Vwm6 = await CourtFarming_RoomLPStakeoTHNqr8.unstake.call(uintVp54jrq, boolKTogHNU, {from: accounts[4]});

		assert.equal(uint256PuhRR9B, BigInt("1630200598"))
		assert.equal(uint256fnzBUFD, BigInt("1530"))
		assert.equal(uint256k3tiP82, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeoTHNqr8.unstake.call(uintVp54jrq, boolKTogHNU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeoTHNqr8 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressWI1ZnPu = accounts[2]
		const uintGMFGyzM = BigInt("1684")
		const uint256fnzBUFD = await CourtFarming_RoomLPStakeoTHNqr8.lastUpdateBlock.call({from: accounts[4]});
		const uint256k3tiP82 = await CourtFarming_RoomLPStakeoTHNqr8.incvRewardClaim.call({from: accounts[3]});
		const addressTI26OH4 = await CourtFarming_RoomLPStakeoTHNqr8.updateReward.call(addressWI1ZnPu, {from: accounts[4]});
		const booltj0l715 = await CourtFarming_RoomLPStakeoTHNqr8.stakeIncvRewards.call(uintGMFGyzM, {from: accounts[0]});

		assert.equal(booltj0l715, false)
		assert.equal(uint256fnzBUFD, BigInt("1530"))
		assert.equal(uint256k3tiP82, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeuvZNejo = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintM9zzrxp = BigInt("379")
		const boolPwBtKR2 = false
		const uintHlbmB1B = BigInt("861")
		const uint256VpilnKa = await CourtFarming_RoomLPStakeuvZNejo.getCurrentTime.call({from: accounts[2]});
		const uint256h7U1pb = await CourtFarming_RoomLPStakeuvZNejo.totalStaked.call({from: accounts[2]});
		const uint256AagKWCL = await CourtFarming_RoomLPStakeuvZNejo.expectedRewardsToday.call(uintM9zzrxp, {from: accounts[3]});
		const uint2569vtbXp = await CourtFarming_RoomLPStakeuvZNejo.unstake.call(uintHlbmB1B, boolPwBtKR2, {from: accounts[1]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTY5Ngrz = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const address9ash0p = accounts[1]
		const addressnijItJK = accounts[3]
		const uint256FyBSOUr = await CourtFarming_RoomLPStakeTY5Ngrz.lastUpdateBlock.call({from: accounts[4]});
		const uint256FkJTp78 = await CourtFarming_RoomLPStakeTY5Ngrz.balanceOf.call(address9ash0p, {from: "0x0000000000000000000000000000000000000001"});
		const addressV1J6gFy = await CourtFarming_RoomLPStakeTY5Ngrz.getBeneficiaryInfo.call(addressnijItJK, {from: accounts[1]});

		assert.equal(uint256FkJTp78, BigInt("0"))
		assert.equal(uint256FyBSOUr, BigInt("1530"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTY5Ngrz = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressFzh5hdS = accounts[5]
		const addresssUdEl8 = accounts[4]
//		const addressqQBBJII = await CourtFarming_RoomLPStakeTY5Ngrz.setCourtStake.call(addressFzh5hdS, {from: accounts[1]});
//		const uint256HNzk7Hk = await CourtFarming_RoomLPStakeTY5Ngrz.totalStaked.call({from: accounts[4]});
//		const addressV1J6gFy = await CourtFarming_RoomLPStakeTY5Ngrz.getBeneficiaryInfo.call(addresssUdEl8, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeTY5Ngrz.setCourtStake.call(addressFzh5hdS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeoTHNqr8 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintat9C57 = BigInt("1707")
		const uint256PuhRR9B = await CourtFarming_RoomLPStakeoTHNqr8.getCurrentTime.call({from: accounts[3]});
		const uint256fnzBUFD = await CourtFarming_RoomLPStakeoTHNqr8.lastUpdateBlock.call({from: accounts[4]});
		const uint256wxqCAjH = await CourtFarming_RoomLPStakeoTHNqr8.expectedRewardsToday.call(uintat9C57, {from: accounts[3]});
		const uint256k3tiP82 = await CourtFarming_RoomLPStakeoTHNqr8.incvRewardClaim.call({from: accounts[3]});

		assert.equal(uint256PuhRR9B, BigInt("1630200599"))
		assert.equal(uint256fnzBUFD, BigInt("1530"))
		assert.equal(uint256k3tiP82, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeGYMX2CZ = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressz6OMLVk = accounts[0]
		const uintASPkaS = BigInt("0")
		const uint256Ba0rztQ = await CourtFarming_RoomLPStakeGYMX2CZ.rewards.call(addressz6OMLVk, {from: accounts[3]});
		const uint256j1uN7Yd = await CourtFarming_RoomLPStakeGYMX2CZ.stake.call(uintASPkaS, {from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTY5Ngrz = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintvDFVE0z = BigInt("0")
		const uintsQ8DiUT = BigInt("993")
		const uinteAhhlm = BigInt("559")
		const uintWNjNrg = BigInt("2023")
		const boolNoLLZHW = await CourtFarming_RoomLPStakeTY5Ngrz.stakeIncvRewards.call(uintvDFVE0z, {from: accounts[4]});
		const uint256eIjG6R0 = await CourtFarming_RoomLPStakeTY5Ngrz.expectedRewardsToday.call(uintsQ8DiUT, {from: accounts[4]});
		const boolnOxgFH = await CourtFarming_RoomLPStakeTY5Ngrz.stakeIncvRewards.call(uinteAhhlm, {from: accounts[2]});
		const uint256yEXrLdX = await CourtFarming_RoomLPStakeTY5Ngrz.expectedRewardsToday.call(uintWNjNrg, {from: accounts[1]});

		assert.equal(boolNoLLZHW, false)
		assert.equal(boolnOxgFH, false)
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTY5Ngrz = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintfXhiIh3 = BigInt("0")
		const addressAw7cbAQ = accounts[4]
//		const uint256SAfrhTh = await CourtFarming_RoomLPStakeTY5Ngrz.expectedRewardsToday.call(uintfXhiIh3, {from: accounts[1]});
//		const addressV1J6gFy = await CourtFarming_RoomLPStakeTY5Ngrz.getBeneficiaryInfo.call(addressAw7cbAQ, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeTY5Ngrz.expectedRewardsToday.call(uintfXhiIh3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTY5Ngrz = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const booleUjSlVy = true
		const uintXy3F3VV = BigInt("0")
		const addresst75FCfS = accounts[3]
		const addressjASNGL = "0x0000000000000000000000000000000000000001"
		const uint256NEicjkm = await CourtFarming_RoomLPStakeTY5Ngrz.unstake.call(uintXy3F3VV, booleUjSlVy, {from: accounts[1]});
		const addressV1J6gFy = await CourtFarming_RoomLPStakeTY5Ngrz.getBeneficiaryInfo.call(addresst75FCfS, {from: accounts[1]});
		const uint256tdsue9P = await CourtFarming_RoomLPStakeTY5Ngrz.balanceOf.call(addressjASNGL, {from: accounts[4]});

		assert.equal(uint256tdsue9P, BigInt("0"))
	});
})