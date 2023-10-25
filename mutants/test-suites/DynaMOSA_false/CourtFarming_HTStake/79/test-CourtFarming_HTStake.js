const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeYM9xWNM = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgdAwZh0 = accounts[1]
		const addressgXeb8ju = accounts[0]
		const boolCp1Db8l = true
		const uintzUDs4Ac = BigInt("406")
		const addressxhRL7Sg = accounts[4]
		const addressgjmGlcW = await CourtFarming_HTStakeYM9xWNM.setCourtStake.call(addressgdAwZh0, {from: accounts[3]});
		const addressT1rUALo = await CourtFarming_HTStakeYM9xWNM.setCourtStake.call(addressgXeb8ju, {from: accounts[4]});
		const uint256BMdIQwb = await CourtFarming_HTStakeYM9xWNM.unstake.call(uintzUDs4Ac, boolCp1Db8l, {from: accounts[1]});
		const uint256JOGDMAC = await CourtFarming_HTStakeYM9xWNM.getCurrentTime.call({from: accounts[3]});
		const addressDh5ahnB = await CourtFarming_HTStakeYM9xWNM.setCourtStake.call(addressxhRL7Sg, {from: accounts[4]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakenZ2GkLV = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressL3veLt = accounts[2]
		const addressyCKjaXZ = accounts[3]
		const addressSdIpuX = accounts[0]
		const uintIRuOoww = BigInt("345")
		const uint256W41zaBP = await CourtFarming_HTStakenZ2GkLV.balanceOf.call(addressL3veLt, {from: accounts[1]});
		const addressIoaiPPB = await CourtFarming_HTStakenZ2GkLV.updateReward.call(addressyCKjaXZ, {from: accounts[2]});
		const uint256xFj9BAi = await CourtFarming_HTStakenZ2GkLV.rewards.call(addressSdIpuX, {from: accounts[1]});
		const uint2567EH9Dg = await CourtFarming_HTStakenZ2GkLV.incvRewardInfo.call({from: accounts[0]});
		const uint256TRiLbl = await CourtFarming_HTStakenZ2GkLV.expectedRewardsToday.call(uintIRuOoww, {from: accounts[0]});

		assert.equal(uint256W41zaBP, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeZudNz5i = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintWcpeyQs = BigInt("1775")
		const uintvh1nwS = BigInt("1888")
		const uintOi9FbH = BigInt("1393")
//		await CourtFarming_HTStakeZudNz5i.changeStakeParameters.call(uintOi9FbH, uintvh1nwS, uintWcpeyQs, {from: accounts[2]});
//		const uint256FLDCYWK = await CourtFarming_HTStakeZudNz5i.incvRewardClaim.call({from: accounts[2]});
//		const uint256r9QkOhs = await CourtFarming_HTStakeZudNz5i.totalStaked.call({from: accounts[2]});

		await expect(CourtFarming_HTStakeZudNz5i.changeStakeParameters.call(uintOi9FbH, uintvh1nwS, uintWcpeyQs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXlvYBF3 = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressldYWLEJ = accounts[0]
		const booljLG45Zr = false
		const uintJpkT4dh = BigInt("1522")
//		const addressqFgdcSP = await CourtFarming_HTStakeXlvYBF3.setCourtStake.call(addressldYWLEJ, {from: accounts[2]});
//		const uint256RAaLH6O = await CourtFarming_HTStakeXlvYBF3.unstake.call(uintJpkT4dh, booljLG45Zr, {from: accounts[2]});

		await expect(CourtFarming_HTStakeXlvYBF3.setCourtStake.call(addressldYWLEJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaketetCbnN = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressmok78k = accounts[3]
		const addressiR24iy3 = await CourtFarming_HTStaketetCbnN.getBeneficiaryInfo.call(addressmok78k, {from: accounts[1]});
		const uint256CVG5Re = await CourtFarming_HTStaketetCbnN.getCurrentTime.call({from: accounts[4]});
		const uint256H4Cgdt6 = await CourtFarming_HTStaketetCbnN.blockNumber.call({from: accounts[5]});

		assert.equal(uint256CVG5Re, BigInt("1630201206"))
		assert.equal(uint256H4Cgdt6, BigInt("1704"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeY6vYM5W = await CourtFarming_HTStake.new({from: accounts[0]});
		const booluNn1ydY = false
		const uintVNO6Dz = BigInt("1144")
		const addressaOzk1WT = accounts[3]
		const boolEslBJb = true
		const uintVFLlnQ = BigInt("1411")
		const uintwgfryXw = BigInt("1806")
//		const uint256onG0xFz = await CourtFarming_HTStakeY6vYM5W.unstake.call(uintVNO6Dz, booluNn1ydY, {from: accounts[2]});
//		const uint256M12CId = await CourtFarming_HTStakeY6vYM5W.lastUpdateBlock.call({from: accounts[1]});
//		const uint256UTr8rvp = await CourtFarming_HTStakeY6vYM5W.lastUpdateBlock.call({from: accounts[1]});
//		const uint256HXrO12R = await CourtFarming_HTStakeY6vYM5W.balanceOf.call(addressaOzk1WT, {from: accounts[4]});
//		const uint256O4abw4r = await CourtFarming_HTStakeY6vYM5W.unstake.call(uintVFLlnQ, boolEslBJb, {from: accounts[3]});
//		const boolKkDjVQw = await CourtFarming_HTStakeY6vYM5W.stakeIncvRewards.call(uintwgfryXw, {from: accounts[0]});

		await expect(CourtFarming_HTStakeY6vYM5W.unstake.call(uintVNO6Dz, booluNn1ydY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeL5DE80C = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintwIsgYs6 = BigInt("349")
		const uintZbmqXlC = BigInt("690")
		const uintttcKGk = BigInt("1286")
		const uintOXiLmtP = BigInt("245")
		const uint256haMyWIc = await CourtFarming_HTStakeL5DE80C.lastUpdateBlock.call({from: accounts[1]});
//		const uint256aibx1F = await CourtFarming_HTStakeL5DE80C.stake.call(uintwIsgYs6, {from: accounts[0]});
//		await CourtFarming_HTStakeL5DE80C.changeStakeParameters.call(uintOXiLmtP, uintttcKGk, uintZbmqXlC, {from: accounts[4]});

		assert.equal(uint256haMyWIc, BigInt("1704"))
		await expect(CourtFarming_HTStakeL5DE80C.stake.call(uintwIsgYs6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake7eRDXh = await CourtFarming_HTStake.new({from: accounts[3]});
		const address0t397g = accounts[1]
		const uint256HXiALo6 = await CourtFarming_HTStake7eRDXh.totalStaked.call({from: accounts[3]});
		const uint256dJDajhZ = await CourtFarming_HTStake7eRDXh.incvRewardInfo.call({from: accounts[4]});
		const uint256zBm5kA0 = await CourtFarming_HTStake7eRDXh.totalStaked.call({from: accounts[0]});
		const uint256vHcXBkM = await CourtFarming_HTStake7eRDXh.totalStaked.call({from: accounts[5]});
//		const addressoii0jNi = await CourtFarming_HTStake7eRDXh.setCourtStake.call(address0t397g, {from: accounts[0]});

		assert.equal(uint256HXiALo6, BigInt("0"))
		assert.equal(uint256vHcXBkM, BigInt("0"))
		assert.equal(uint256zBm5kA0, BigInt("0"))
		await expect(CourtFarming_HTStake7eRDXh.setCourtStake.call(address0t397g, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakenZ2GkLV = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressHF7aQdt = accounts[0]
		const addressUNTi86l = accounts[3]
		const addressq0juFPF = accounts[3]
		const addressi1Iuo4V = accounts[0]
		const uintMDTR70M = BigInt("345")
//		const addressxmlEn2q = await CourtFarming_HTStakenZ2GkLV.setCourtStake.call(addressHF7aQdt, {from: accounts[3]});
//		const uint256W41zaBP = await CourtFarming_HTStakenZ2GkLV.balanceOf.call(addressUNTi86l, {from: accounts[1]});
//		const addressIoaiPPB = await CourtFarming_HTStakenZ2GkLV.updateReward.call(addressq0juFPF, {from: accounts[2]});
//		const uint256xFj9BAi = await CourtFarming_HTStakenZ2GkLV.rewards.call(addressi1Iuo4V, {from: accounts[1]});
//		const uint2567EH9Dg = await CourtFarming_HTStakenZ2GkLV.incvRewardInfo.call({from: accounts[0]});
//		const uint256TRiLbl = await CourtFarming_HTStakenZ2GkLV.expectedRewardsToday.call(uintMDTR70M, {from: accounts[0]});

		await expect(CourtFarming_HTStakenZ2GkLV.setCourtStake.call(addressHF7aQdt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeTrBeYuU = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintLUDsj7h = BigInt("1825")
		const uintbdt3uf3 = BigInt("1737")
		const uintoqKyltU = BigInt("1523")
		const uintWSYtkhp = BigInt("1465")
		const uintrW8zDfe = BigInt("1853")
		const uintdSDxVIQ = BigInt("340")
		const uintyZWCl4l = BigInt("980")
		const uintaQGOcm5 = BigInt("1267")
//		const uint256w1Kdr77 = await CourtFarming_HTStakeTrBeYuU._stakeParametrsCalculation.call(uintoqKyltU, uintbdt3uf3, uintLUDsj7h, {from: accounts[2]});
//		const uint256OL6ViwI = await CourtFarming_HTStakeTrBeYuU.expectedRewardsToday.call(uintWSYtkhp, {from: accounts[5]});
//		const uint256fHo4ZWA = await CourtFarming_HTStakeTrBeYuU.getCurrentTime.call({from: accounts[1]});
//		await CourtFarming_HTStakeTrBeYuU.changeStakeParameters.call(uintyZWCl4l, uintdSDxVIQ, uintrW8zDfe, {from: accounts[0]});
//		const uint256y8O6gdK = await CourtFarming_HTStakeTrBeYuU.blockNumber.call({from: accounts[1]});
//		const uint256sc2Q26R = await CourtFarming_HTStakeTrBeYuU.stake.call(uintaQGOcm5, {from: accounts[2]});

		await expect(CourtFarming_HTStakeTrBeYuU._stakeParametrsCalculation.call(uintoqKyltU, uintbdt3uf3, uintLUDsj7h, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakenZ2GkLV = await CourtFarming_HTStake.new({from: accounts[3]});
		const address8WUinG = accounts[2]
		const addressyfDbE5I = accounts[3]
		const uint2lcCuK = BigInt("345")
		const uintBGcu0vo = BigInt("1635")
		const uint256W41zaBP = await CourtFarming_HTStakenZ2GkLV.balanceOf.call(address8WUinG, {from: accounts[1]});
		const addressIoaiPPB = await CourtFarming_HTStakenZ2GkLV.updateReward.call(addressyfDbE5I, {from: accounts[2]});
		const uint2567EH9Dg = await CourtFarming_HTStakenZ2GkLV.incvRewardInfo.call({from: accounts[0]});
		const uint256TRiLbl = await CourtFarming_HTStakenZ2GkLV.expectedRewardsToday.call(uint2lcCuK, {from: accounts[0]});
		const boolI4ds3un = await CourtFarming_HTStakenZ2GkLV.stakeIncvRewards.call(uintBGcu0vo, {from: accounts[0]});

		assert.equal(boolI4ds3un, false)
		assert.equal(uint256W41zaBP, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeL5DE80C = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressOs5O9Lq = accounts[1]
		const uintjcIFbzt = BigInt("349")
		const uintxMxlwS9 = BigInt("690")
		const uintTuJkYG4 = BigInt("1286")
		const uintRSoTbvO = BigInt("245")
		const addresseSdCH1L = await CourtFarming_HTStakeL5DE80C.getBeneficiaryInfo.call(addressOs5O9Lq, {from: accounts[2]});
		const uint256haMyWIc = await CourtFarming_HTStakeL5DE80C.lastUpdateBlock.call({from: accounts[1]});
		const uint256VbIhlb0 = await CourtFarming_HTStakeL5DE80C.incvRewardClaim.call({from: accounts[3]});
		const uint256KPjFh9d = await CourtFarming_HTStakeL5DE80C.blockNumber.call({from: accounts[2]});
//		const uint256aibx1F = await CourtFarming_HTStakeL5DE80C.stake.call(uintjcIFbzt, {from: accounts[0]});
//		await CourtFarming_HTStakeL5DE80C.changeStakeParameters.call(uintRSoTbvO, uintTuJkYG4, uintxMxlwS9, {from: accounts[4]});

		assert.equal(uint256KPjFh9d, BigInt("1704"))
		assert.equal(uint256VbIhlb0, BigInt("0"))
		assert.equal(uint256haMyWIc, BigInt("1704"))
		await expect(CourtFarming_HTStakeL5DE80C.stake.call(uintjcIFbzt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakenZ2GkLV = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintwcVnSru = BigInt("1623")
		const uint37I8FF = BigInt("0")
		const uint84V4z1 = BigInt("1617")
		const uint256dFuU3O5 = await CourtFarming_HTStakenZ2GkLV.incvRewardClaim.call({from: accounts[2]});
		const boolZe7XUlS = await CourtFarming_HTStakenZ2GkLV.stakeIncvRewards.call(uintwcVnSru, {from: accounts[0]});
		const uint256qVAgo1A = await CourtFarming_HTStakenZ2GkLV.stake.call(uint37I8FF, {from: accounts[3]});
		const uint256gxcUDVN = await CourtFarming_HTStakenZ2GkLV.blockNumber.call({from: accounts[2]});
		const uint256x0IC95B = await CourtFarming_HTStakenZ2GkLV.incvRewardInfo.call({from: accounts[4]});
		const uint256YebiKry = await CourtFarming_HTStakenZ2GkLV.totalStaked.call({from: accounts[1]});
		const uint256YcFHo0x = await CourtFarming_HTStakenZ2GkLV.lastUpdateBlock.call({from: accounts[1]});
		const uint256UCgqDul = await CourtFarming_HTStakenZ2GkLV.expectedRewardsToday.call(uint84V4z1, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolZe7XUlS, false)
		assert.equal(uint256YcFHo0x, BigInt("1704"))
		assert.equal(uint256YebiKry, BigInt("0"))
		assert.equal(uint256dFuU3O5, BigInt("0"))
		assert.equal(uint256gxcUDVN, BigInt("1704"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaketetCbnN = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintplx1Cnh = BigInt("0")
		const uintIUrmnjH = BigInt("1429")
		const uint256Ji8b8U = await CourtFarming_HTStaketetCbnN.lastUpdateBlock.call({from: accounts[0]});
		const boolo1lxN7e = await CourtFarming_HTStaketetCbnN.stakeIncvRewards.call(uintplx1Cnh, {from: accounts[5]});
		const boolN8ZnzyK = await CourtFarming_HTStaketetCbnN.stakeIncvRewards.call(uintIUrmnjH, {from: accounts[3]});

		assert.equal(boolN8ZnzyK, false)
		assert.equal(boolo1lxN7e, false)
		assert.equal(uint256Ji8b8U, BigInt("1704"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaketetCbnN = await CourtFarming_HTStake.new({from: accounts[2]});
		const boolTnaL1hw = false
		const uintELgcn32 = BigInt("0")
		const uint256xMdmuWa = await CourtFarming_HTStaketetCbnN.unstake.call(uintELgcn32, boolTnaL1hw, {from: accounts[0]});
		const uint256NYKB1k5 = await CourtFarming_HTStaketetCbnN.incvRewardClaim.call({from: accounts[2]});

		assert.equal(uint256NYKB1k5, BigInt("0"))
	});
})