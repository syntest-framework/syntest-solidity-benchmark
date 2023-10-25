const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeAb1UlAJ = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressluNAn33 = accounts[5]
		const uintHUTSIrt = BigInt("915")
		const boolJCWHdBR = false
		const uintkgUUwR = BigInt("1661")
		const addressENNQOxg = await CourtFarming_RoomLPStakeAb1UlAJ.setCourtStake.call(addressluNAn33, {from: accounts[3]});
		const uint256GnW89QP = await CourtFarming_RoomLPStakeAb1UlAJ.totalStaked.call({from: accounts[3]});
		const uint256Q5wfF8d = await CourtFarming_RoomLPStakeAb1UlAJ.incvRewardInfo.call({from: accounts[0]});
		const uint256l1fiqL = await CourtFarming_RoomLPStakeAb1UlAJ.expectedRewardsToday.call(uintHUTSIrt, {from: accounts[1]});
		const uint256PpuvN0O = await CourtFarming_RoomLPStakeAb1UlAJ.blockNumber.call({from: accounts[2]});
		const uint256zKm3WKy = await CourtFarming_RoomLPStakeAb1UlAJ.unstake.call(uintkgUUwR, boolJCWHdBR, {from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeAb1UlAJ.setCourtStake.call(addressluNAn33, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeXVz9OxW = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressHV6GGuz = accounts[4]
		const addressUSnwBAa = accounts[5]
		const uintkyK3IhX = BigInt("1365")
		const uint256UPkPch5 = await CourtFarming_RoomLPStakeXVz9OxW.rewards.call(addressHV6GGuz, {from: accounts[2]});
		const uint256BMVIA8o = await CourtFarming_RoomLPStakeXVz9OxW.getCurrentTime.call({from: accounts[4]});
		const uint256Gu0BbSq = await CourtFarming_RoomLPStakeXVz9OxW.balanceOf.call(addressUSnwBAa, {from: accounts[1]});
		const uint256o0hoAP = await CourtFarming_RoomLPStakeXVz9OxW.stake.call(uintkyK3IhX, {from: accounts[3]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeRezQQ6 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const boolV7RwJdQ = false
		const uintN1AjOI = BigInt("189")
		const uintsM6dCmC = BigInt("1635")
		const addresssntIBmj = accounts[5]
		const uint256ybTnTT = await CourtFarming_RoomLPStakeRezQQ6.unstake.call(uintN1AjOI, boolV7RwJdQ, {from: accounts[2]});
		const uint256eqEwyUA = await CourtFarming_RoomLPStakeRezQQ6.stake.call(uintsM6dCmC, {from: accounts[2]});
		const uint256Y9FZSCC = await CourtFarming_RoomLPStakeRezQQ6.lastUpdateBlock.call({from: accounts[5]});
		const uint256Dmqct4B = await CourtFarming_RoomLPStakeRezQQ6.balanceOf.call(addresssntIBmj, {from: accounts[3]});
		const uint256wHB02Ir = await CourtFarming_RoomLPStakeRezQQ6.blockNumber.call({from: accounts[2]});

		await expect(CourtFarming_RoomLPStakeRezQQ6.unstake.call(uintN1AjOI, boolV7RwJdQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeANGm248 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const address6uKuZR = accounts[1]
		const uint256JBX9js = await CourtFarming_RoomLPStakeANGm248.incvRewardClaim.call({from: accounts[5]});
		const addressRNSc3PR = await CourtFarming_RoomLPStakeANGm248.updateReward.call(address6uKuZR, {from: accounts[3]});
		const uint256CHmt4xa = await CourtFarming_RoomLPStakeANGm248.totalStaked.call({from: accounts[4]});

		assert.equal(uint256CHmt4xa, BigInt("0"))
		assert.equal(uint256JBX9js, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeXOkAGO = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintnfclYC = BigInt("244")
		const uintKM2F3w8 = BigInt("1743")
		const addressPa1KPPg = accounts[2]
		const uintHZSlfYb = BigInt("2035")
		const uintSaQyfe = BigInt("787")
		const uintpAiNkvN = BigInt("238")
		const uint256hmVg5c = await CourtFarming_RoomLPStakeXOkAGO.expectedRewardsToday.call(uintnfclYC, {from: accounts[3]});
		const boolfRWWOfO = await CourtFarming_RoomLPStakeXOkAGO.stakeIncvRewards.call(uintKM2F3w8, {from: accounts[1]});
		const addressZNzAI3h = await CourtFarming_RoomLPStakeXOkAGO.setCourtStake.call(addressPa1KPPg, {from: accounts[3]});
		await CourtFarming_RoomLPStakeXOkAGO.changeStakeParameters.call(uintpAiNkvN, uintSaQyfe, uintHZSlfYb, {from: accounts[0]});

		assert.equal(boolfRWWOfO, false)
		await expect(CourtFarming_RoomLPStakeXOkAGO.setCourtStake.call(addressPa1KPPg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeiR58EID = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressDjnFnYA = "0x0000000000000000000000000000000000000001"
		const address5jR4sE = accounts[1]
		const addressa62RwpS = "0x0000000000000000000000000000000000000001"
		const uint256ADsUOpa = await CourtFarming_RoomLPStakeiR58EID.rewards.call(addressDjnFnYA, {from: accounts[1]});
		const uint256xkYMsEh = await CourtFarming_RoomLPStakeiR58EID.getCurrentTime.call({from: accounts[2]});
		const addressarsuJBt = await CourtFarming_RoomLPStakeiR58EID.updateReward.call(address5jR4sE, {from: accounts[1]});
		const uint256YthoTif = await CourtFarming_RoomLPStakeiR58EID.blockNumber.call({from: accounts[0]});
		const uint256GeHUnxM = await CourtFarming_RoomLPStakeiR58EID.totalStaked.call({from: accounts[0]});
		const addressFvlJVIA = await CourtFarming_RoomLPStakeiR58EID.updateReward.call(addressa62RwpS, {from: accounts[0]});

		assert.equal(uint256GeHUnxM, BigInt("0"))
		assert.equal(uint256YthoTif, BigInt("1499"))
		assert.equal(uint256xkYMsEh, BigInt("1630200929"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeen2GhYq = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintHuGNQkx = BigInt("340")
		const uintvt68lPK = BigInt("61")
		const uintxhpvyYF = BigInt("1892")
		const addressCZE8IKi = accounts[1]
		const boolLe3qVwi = false
		const uintMzTChrW = BigInt("724")
		await CourtFarming_RoomLPStakeen2GhYq.changeStakeParameters.call(uintxhpvyYF, uintvt68lPK, uintHuGNQkx, {from: accounts[3]});
		const uint2569O8DyU = await CourtFarming_RoomLPStakeen2GhYq.rewards.call(addressCZE8IKi, {from: "0x0000000000000000000000000000000000000001"});
		const uint256POoVz2r = await CourtFarming_RoomLPStakeen2GhYq.unstake.call(uintMzTChrW, boolLe3qVwi, {from: accounts[3]});
		const uint256a67lG5M = await CourtFarming_RoomLPStakeen2GhYq.incvRewardInfo.call({from: accounts[1]});
		const uint256oEejiYJ = await CourtFarming_RoomLPStakeen2GhYq.incvRewardClaim.call({from: accounts[2]});
		const uint256GKWEdzb = await CourtFarming_RoomLPStakeen2GhYq.getCurrentTime.call({from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeen2GhYq.changeStakeParameters.call(uintxhpvyYF, uintvt68lPK, uintHuGNQkx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeANGm248 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressXpuDX2 = accounts[1]
		const uintJ1VmTgW = BigInt("1579")
		const uint256JBX9js = await CourtFarming_RoomLPStakeANGm248.incvRewardClaim.call({from: accounts[5]});
		const addressRNSc3PR = await CourtFarming_RoomLPStakeANGm248.updateReward.call(addressXpuDX2, {from: accounts[3]});
		const uint256YpUIejv = await CourtFarming_RoomLPStakeANGm248.stake.call(uintJ1VmTgW, {from: accounts[3]});
		const uint256CHmt4xa = await CourtFarming_RoomLPStakeANGm248.totalStaked.call({from: accounts[4]});

		assert.equal(uint256JBX9js, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeANGm248.stake.call(uintJ1VmTgW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeANGm248 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressNk6yZOm = accounts[1]
		const uint256jGMcB1s = await CourtFarming_RoomLPStakeANGm248.incvRewardInfo.call({from: accounts[3]});
		const uint256JBX9js = await CourtFarming_RoomLPStakeANGm248.incvRewardClaim.call({from: accounts[5]});
		const addressRNSc3PR = await CourtFarming_RoomLPStakeANGm248.updateReward.call(addressNk6yZOm, {from: accounts[3]});
		const uint256CHmt4xa = await CourtFarming_RoomLPStakeANGm248.totalStaked.call({from: accounts[4]});

		assert.equal(uint256CHmt4xa, BigInt("0"))
		assert.equal(uint256JBX9js, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeiR58EID = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressygb2Eau = accounts[5]
		const addressT7gYy0i = "0x0000000000000000000000000000000000000000"
		const addresssAyRFw = accounts[1]
		const addressG6Z5clf = "0x0000000000000000000000000000000000000001"
		const uint256fLdqQjh = await CourtFarming_RoomLPStakeiR58EID.balanceOf.call(addressygb2Eau, {from: accounts[3]});
		const uint256ADsUOpa = await CourtFarming_RoomLPStakeiR58EID.rewards.call(addressT7gYy0i, {from: accounts[1]});
		const uint256xkYMsEh = await CourtFarming_RoomLPStakeiR58EID.getCurrentTime.call({from: accounts[2]});
		const addressarsuJBt = await CourtFarming_RoomLPStakeiR58EID.updateReward.call(addresssAyRFw, {from: accounts[1]});
		const uint256YthoTif = await CourtFarming_RoomLPStakeiR58EID.blockNumber.call({from: accounts[0]});
		const addressFvlJVIA = await CourtFarming_RoomLPStakeiR58EID.updateReward.call(addressG6Z5clf, {from: accounts[0]});

		assert.equal(uint256YthoTif, BigInt("1499"))
		assert.equal(uint256fLdqQjh, BigInt("0"))
		assert.equal(uint256xkYMsEh, BigInt("1630200924"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakey39JpCt = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintuhiGDb4 = BigInt("1708")
		const uintU12li8 = BigInt("582")
		const uintGCf2ApZ = BigInt("1890")
		const uintoQy1Z2h = BigInt("1368")
		const uint256BdLjLV = await CourtFarming_RoomLPStakey39JpCt.incvRewardClaim.call({from: accounts[4]});
		const uint256UHAg7Vf = await CourtFarming_RoomLPStakey39JpCt.incvRewardClaim.call({from: accounts[3]});
		const uint256BzLg1Cy = await CourtFarming_RoomLPStakey39JpCt.lastUpdateBlock.call({from: accounts[4]});
		const uint256kewYxVJ = await CourtFarming_RoomLPStakey39JpCt.expectedRewardsToday.call(uintuhiGDb4, {from: accounts[1]});
		const uint256K0P6bMZ = await CourtFarming_RoomLPStakey39JpCt.getCurrentTime.call({from: accounts[3]});
		await CourtFarming_RoomLPStakey39JpCt.changeStakeParameters.call(uintoQy1Z2h, uintGCf2ApZ, uintU12li8, {from: accounts[4]});

		assert.equal(uint256BdLjLV, BigInt("0"))
		assert.equal(uint256BzLg1Cy, BigInt("1499"))
		assert.equal(uint256K0P6bMZ, BigInt("1630200927"))
		assert.equal(uint256UHAg7Vf, BigInt("0"))
		await expect(CourtFarming_RoomLPStakey39JpCt.changeStakeParameters.call(uintoQy1Z2h, uintGCf2ApZ, uintU12li8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeXOkAGO = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintBzzn7kS = BigInt("244")
		const addressXQqEUL = accounts[1]
		const addresszh5eSQ = accounts[4]
		const uinteOlj6GO = BigInt("636")
		const uintaNxKFu1 = BigInt("357")
		const uintvtoXwjv = BigInt("1514")
		const uintGZNVD0I = BigInt("1743")
		const uintn34lkW = BigInt("293")
		const addressdsUw2ub = accounts[3]
		const uintCMFQgy4 = BigInt("2035")
		const uintIKwyYzi = BigInt("800")
		const uintveu2CbG = BigInt("238")
		const uint256hmVg5c = await CourtFarming_RoomLPStakeXOkAGO.expectedRewardsToday.call(uintBzzn7kS, {from: accounts[3]});
		const uint256M542OYu = await CourtFarming_RoomLPStakeXOkAGO.balanceOf.call(addressXQqEUL, {from: accounts[1]});
		const addresszUy9kTC = await CourtFarming_RoomLPStakeXOkAGO.getBeneficiaryInfo.call(addresszh5eSQ, {from: accounts[2]});
		await CourtFarming_RoomLPStakeXOkAGO.changeStakeParameters.call(uintvtoXwjv, uintaNxKFu1, uinteOlj6GO, {from: accounts[4]});
		const boolfRWWOfO = await CourtFarming_RoomLPStakeXOkAGO.stakeIncvRewards.call(uintGZNVD0I, {from: accounts[1]});
		const boolvfNwLES = await CourtFarming_RoomLPStakeXOkAGO.stakeIncvRewards.call(uintn34lkW, {from: accounts[5]});
		const addressZNzAI3h = await CourtFarming_RoomLPStakeXOkAGO.setCourtStake.call(addressdsUw2ub, {from: accounts[3]});
		await CourtFarming_RoomLPStakeXOkAGO.changeStakeParameters.call(uintveu2CbG, uintIKwyYzi, uintCMFQgy4, {from: accounts[0]});

		assert.equal(uint256M542OYu, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeXOkAGO.changeStakeParameters.call(uintvtoXwjv, uintaNxKFu1, uinteOlj6GO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakee1yxAjE = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const boolj8Ma412 = true
		const uintcZkDt0j = BigInt("0")
		const uint256isfFN7g = await CourtFarming_RoomLPStakee1yxAjE.unstake.call(uintcZkDt0j, boolj8Ma412, {from: accounts[4]});
		const uint256mSHdfkm = await CourtFarming_RoomLPStakee1yxAjE.incvRewardInfo.call({from: accounts[1]});
		const uint2566trERC = await CourtFarming_RoomLPStakee1yxAjE.incvRewardInfo.call({from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeANGm248 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintQR6R7hT = BigInt("1329")
		const uintMyDetVn = BigInt("0")
		const boolHSkMm5r = await CourtFarming_RoomLPStakeANGm248.stakeIncvRewards.call(uintQR6R7hT, {from: accounts[1]});
		const uint256dGw7BFd = await CourtFarming_RoomLPStakeANGm248.incvRewardInfo.call({from: accounts[3]});
		const uint256EawwKO = await CourtFarming_RoomLPStakeANGm248.stake.call(uintMyDetVn, {from: accounts[5]});

		assert.equal(boolHSkMm5r, false)
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeANGm248 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintnGT3IJl = BigInt("0")
		const addressquavOL = accounts[2]
		const uintBkO0sej = BigInt("1045")
		const boolAtlIG9D = await CourtFarming_RoomLPStakeANGm248.stakeIncvRewards.call(uintnGT3IJl, {from: accounts[2]});
		const uint256mP8lfAi = await CourtFarming_RoomLPStakeANGm248.balanceOf.call(addressquavOL, {from: accounts[0]});
		const boolNvIs7NH = await CourtFarming_RoomLPStakeANGm248.stakeIncvRewards.call(uintBkO0sej, {from: accounts[4]});
		const uint256jdQFPF = await CourtFarming_RoomLPStakeANGm248.blockNumber.call({from: accounts[2]});

		assert.equal(boolAtlIG9D, false)
		assert.equal(boolNvIs7NH, false)
		assert.equal(uint256jdQFPF, BigInt("1499"))
		assert.equal(uint256mP8lfAi, BigInt("0"))
	});
})