const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeLNay0G = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addresseuweGGa = accounts[5]
		const addressVKWoF4r = "0x0000000000000000000000000000000000000001"
		const addressBBSZsPO = await CourtFarming_RoomLPStakeLNay0G.updateReward.call(addresseuweGGa, {from: accounts[3]});
		const uint256EsFxDnh = await CourtFarming_RoomLPStakeLNay0G.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256SLJxb7l = await CourtFarming_RoomLPStakeLNay0G.balanceOf.call(addressVKWoF4r, {from: accounts[3]});
		const uint256sGzQoY = await CourtFarming_RoomLPStakeLNay0G.incvRewardInfo.call({from: accounts[0]});

		assert.equal(uint256EsFxDnh, BigInt("0"))
		assert.equal(uint256SLJxb7l, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeI0im1T1 = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressTweDSZX = accounts[5]
		const addressj6TyfgS = "0x0000000000000000000000000000000000000001"
		const uint256gUSJ7nS = await CourtFarming_RoomLPStakeI0im1T1.rewards.call(addressTweDSZX, {from: accounts[5]});
		const uint256c8kyEpC = await CourtFarming_RoomLPStakeI0im1T1.rewards.call(addressj6TyfgS, {from: accounts[4]});
		const uint256aaJdOfy = await CourtFarming_RoomLPStakeI0im1T1.getCurrentTime.call({from: accounts[1]});

		assert.equal(uint256aaJdOfy, BigInt("1630200510"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekZhq6zc = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintZbCN0tw = BigInt("117")
		const uintZPpyeNZ = BigInt("814")
		const uintHfF8iN7 = BigInt("1381")
		const uintx2vA0VA = BigInt("723")
		const uintM77iWY = BigInt("555")
		const uintlgx2jb4 = BigInt("1237")
		const uint256WQTefAk = await CourtFarming_RoomLPStakekZhq6zc.totalStaked.call({from: accounts[4]});
		await CourtFarming_RoomLPStakekZhq6zc.changeStakeParameters.call(uintHfF8iN7, uintZPpyeNZ, uintZbCN0tw, {from: accounts[2]});
		await CourtFarming_RoomLPStakekZhq6zc.changeStakeParameters.call(uintlgx2jb4, uintM77iWY, uintx2vA0VA, {from: accounts[4]});
		const uint256lIa9aBJ = await CourtFarming_RoomLPStakekZhq6zc.incvRewardClaim.call({from: accounts[3]});

		assert.equal(uint256WQTefAk, BigInt("0"))
		await expect(CourtFarming_RoomLPStakekZhq6zc.changeStakeParameters.call(uintHfF8iN7, uintZPpyeNZ, uintZbCN0tw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeBmXE1hv = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintnOyuuXM = BigInt("19")
		const addresspTYhXS7 = accounts[5]
		const uint256tw82IJ = await CourtFarming_RoomLPStakeBmXE1hv.incvRewardClaim.call({from: accounts[5]});
		const boolk72n9ub = await CourtFarming_RoomLPStakeBmXE1hv.stakeIncvRewards.call(uintnOyuuXM, {from: accounts[2]});
		const addressX2IrhVg = await CourtFarming_RoomLPStakeBmXE1hv.updateReward.call(addresspTYhXS7, {from: accounts[1]});
		const uint256yr0cLiQ = await CourtFarming_RoomLPStakeBmXE1hv.getCurrentTime.call({from: accounts[3]});

		assert.equal(boolk72n9ub, false)
		assert.equal(uint256tw82IJ, BigInt("0"))
		assert.equal(uint256yr0cLiQ, BigInt("1630200508"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekzm6h5 = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintIDihPgH = BigInt("1763")
		const addressEs8mUA = accounts[2]
		const uint256Xmz9S7n = await CourtFarming_RoomLPStakekzm6h5.expectedRewardsToday.call(uintIDihPgH, {from: accounts[0]});
		const uint256R0mO88b = await CourtFarming_RoomLPStakekzm6h5.getCurrentTime.call({from: accounts[3]});
		const uint256LfHa7zZ = await CourtFarming_RoomLPStakekzm6h5.lastUpdateBlock.call({from: accounts[4]});
		const uint256EHyDdYq = await CourtFarming_RoomLPStakekzm6h5.balanceOf.call(addressEs8mUA, {from: accounts[4]});
		const uint256y3bO2it = await CourtFarming_RoomLPStakekzm6h5.incvRewardClaim.call({from: accounts[3]});

		assert.equal(uint256EHyDdYq, BigInt("0"))
		assert.equal(uint256LfHa7zZ, BigInt("1468"))
		assert.equal(uint256R0mO88b, BigInt("1630200512"))
		assert.equal(uint256y3bO2it, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejUgZh4v = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addresskPzCDXj = accounts[4]
		const addressFcPGSmH = accounts[1]
		const addresstj6L76 = accounts[0]
		const boolMur96Z5 = true
		const uintPztxAS = BigInt("1171")
		const uint256II1SBIl = await CourtFarming_RoomLPStakejUgZh4v.incvRewardInfo.call({from: accounts[1]});
		const uint256rYnrba = await CourtFarming_RoomLPStakejUgZh4v.blockNumber.call({from: accounts[2]});
		const addressYFpVRZd = await CourtFarming_RoomLPStakejUgZh4v.setCourtStake.call(addresskPzCDXj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gEhSSVb = await CourtFarming_RoomLPStakejUgZh4v.rewards.call(addressFcPGSmH, {from: accounts[5]});
		const uint256aF0E4rb = await CourtFarming_RoomLPStakejUgZh4v.balanceOf.call(addresstj6L76, {from: accounts[4]});
		const uint256LsbqOFM = await CourtFarming_RoomLPStakejUgZh4v.unstake.call(uintPztxAS, boolMur96Z5, {from: accounts[3]});

		assert.equal(uint256rYnrba, BigInt("1468"))
		await expect(CourtFarming_RoomLPStakejUgZh4v.setCourtStake.call(addresskPzCDXj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeA8rV2rT = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintmVpskrY = BigInt("1073")
		const uintF2PndCx = BigInt("761")
		const booltKd6N8A = false
		const uintdSjCT5u = BigInt("1465")
		const uint256GogxUBZ = await CourtFarming_RoomLPStakeA8rV2rT.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qM9S1NP = await CourtFarming_RoomLPStakeA8rV2rT.expectedRewardsToday.call(uintmVpskrY, {from: accounts[5]});
		const uint256zqLK4ww = await CourtFarming_RoomLPStakeA8rV2rT.getCurrentTime.call({from: accounts[1]});
		const boolVhwOKeu = await CourtFarming_RoomLPStakeA8rV2rT.stakeIncvRewards.call(uintF2PndCx, {from: accounts[1]});
		const uint256Ig4wTax = await CourtFarming_RoomLPStakeA8rV2rT.unstake.call(uintdSjCT5u, booltKd6N8A, {from: accounts[5]});

		assert.equal(boolVhwOKeu, false)
		assert.equal(uint256GogxUBZ, BigInt("0"))
		assert.equal(uint256zqLK4ww, BigInt("1630200506"))
		await expect(CourtFarming_RoomLPStakeA8rV2rT.unstake.call(uintdSjCT5u, booltKd6N8A, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeKofrdGh = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintenb03O4 = BigInt("121")
		const uintwMu7EMi = BigInt("2003")
		const uintvGemvVI = BigInt("182")
		const uintiwXmJt = BigInt("115")
		const uint256W240me0 = await CourtFarming_RoomLPStakeKofrdGh.stake.call(uintenb03O4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JmUd3Az = await CourtFarming_RoomLPStakeKofrdGh.totalStaked.call({from: accounts[3]});
		await CourtFarming_RoomLPStakeKofrdGh.changeStakeParameters.call(uintiwXmJt, uintvGemvVI, uintwMu7EMi, {from: accounts[4]});
		const uint256dtXRkDd = await CourtFarming_RoomLPStakeKofrdGh.incvRewardClaim.call({from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeKofrdGh.stake.call(uintenb03O4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeLNay0G = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintSIQCnV2 = BigInt("1273")
		const addressroQssEa = accounts[5]
		const addressFGbeVg6 = "0x00000000000000000000000000000000000000-1"
		const addressXOzpq36 = accounts[0]
		const uint256E10pCG3 = await CourtFarming_RoomLPStakeLNay0G.expectedRewardsToday.call(uintSIQCnV2, {from: accounts[1]});
		const addressBBSZsPO = await CourtFarming_RoomLPStakeLNay0G.updateReward.call(addressroQssEa, {from: accounts[3]});
		const uint256SLJxb7l = await CourtFarming_RoomLPStakeLNay0G.balanceOf.call(addressFGbeVg6, {from: accounts[3]});
		const addressP2VSGsj = await CourtFarming_RoomLPStakeLNay0G.setCourtStake.call(addressXOzpq36, {from: accounts[1]});
		const uint256sGzQoY = await CourtFarming_RoomLPStakeLNay0G.incvRewardInfo.call({from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeLNay0G.balanceOf.call(addressFGbeVg6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeP91AHg7 = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintM1sK0qw = BigInt("289")
		const uintMOOuIM6 = BigInt("67")
		const uintBFok1Vb = BigInt("222")
		const uintBHiFllz = BigInt("1326")
		const uinthVed4p4 = BigInt("632")
		const uint256nbKLLFz = await CourtFarming_RoomLPStakeP91AHg7.stake.call(uintM1sK0qw, {from: accounts[3]});
		const uint256WO1SnAJ = await CourtFarming_RoomLPStakeP91AHg7.stake.call(uintMOOuIM6, {from: accounts[0]});
		const uint256OFlb2K5 = await CourtFarming_RoomLPStakeP91AHg7.totalStaked.call({from: accounts[0]});
		await CourtFarming_RoomLPStakeP91AHg7.changeStakeParameters.call(uinthVed4p4, uintBHiFllz, uintBFok1Vb, {from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeLNay0G = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressMHMi79x = accounts[2]
		const addresshEzKh1o = accounts[3]
		const addressZWQ8Hli = await CourtFarming_RoomLPStakeLNay0G.updateReward.call(addressMHMi79x, {from: accounts[4]});
		const uint256sGzQoY = await CourtFarming_RoomLPStakeLNay0G.incvRewardInfo.call({from: accounts[0]});
		const addressRrkZoIV = await CourtFarming_RoomLPStakeLNay0G.setCourtStake.call(addresshEzKh1o, {from: accounts[5]});

		await expect(CourtFarming_RoomLPStakeLNay0G.setCourtStake.call(addresshEzKh1o, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeLNay0G = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const address2eVIbG = accounts[0]
		const uint256w0DkVII = await CourtFarming_RoomLPStakeLNay0G.getCurrentTime.call({from: accounts[5]});
		const addressmv3gdqg = await CourtFarming_RoomLPStakeLNay0G.getBeneficiaryInfo.call(address2eVIbG, {from: accounts[4]});
		const uint256sGzQoY = await CourtFarming_RoomLPStakeLNay0G.incvRewardInfo.call({from: accounts[0]});

		assert.equal(uint256w0DkVII, BigInt("1630200507"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekZhq6zc = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintFFDlu2R = BigInt("1034")
		const uinttbColB4 = BigInt("1851")
		const uintaAo0CYY = BigInt("1013")
		const uintBlVjlaG = BigInt("0")
		const addressjkEOTJ = accounts[2]
		const uint256WrTez3K = await CourtFarming_RoomLPStakekZhq6zc.incvRewardClaim.call({from: accounts[0]});
		const boolhHgfvhh = await CourtFarming_RoomLPStakekZhq6zc.stakeIncvRewards.call(uintFFDlu2R, {from: accounts[3]});
		const uint256efSz641 = await CourtFarming_RoomLPStakekZhq6zc.expectedRewardsToday.call(uinttbColB4, {from: accounts[3]});
		const boolrizmAjV = await CourtFarming_RoomLPStakekZhq6zc.stakeIncvRewards.call(uintaAo0CYY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256efntwyw = await CourtFarming_RoomLPStakekZhq6zc.stake.call(uintBlVjlaG, {from: accounts[0]});
		const addressqT6ZXB9 = await CourtFarming_RoomLPStakekZhq6zc.getBeneficiaryInfo.call(addressjkEOTJ, {from: accounts[5]});

		assert.equal(boolhHgfvhh, false)
		assert.equal(boolrizmAjV, false)
		assert.equal(uint256WrTez3K, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekZhq6zc = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressBATSwBh = accounts[5]
		const uintSuULMrI = BigInt("1252")
		const uintpYsl650 = BigInt("1336")
		const uintTxRDhYu = BigInt("1486")
		const addressUj9fLFn = accounts[0]
		const addresssIVCBXk = accounts[0]
		const uint256kz0IMPP = await CourtFarming_RoomLPStakekZhq6zc.rewards.call(addressBATSwBh, {from: accounts[0]});
		await CourtFarming_RoomLPStakekZhq6zc.changeStakeParameters.call(uintTxRDhYu, uintpYsl650, uintSuULMrI, {from: accounts[4]});
		const addressjnm8BYC = await CourtFarming_RoomLPStakekZhq6zc.getBeneficiaryInfo.call(addressUj9fLFn, {from: "0x0000000000000000000000000000000000000001"});
		const addresswVaCBo4 = await CourtFarming_RoomLPStakekZhq6zc.updateReward.call(addresssIVCBXk, {from: accounts[2]});

		await expect(CourtFarming_RoomLPStakekZhq6zc.changeStakeParameters.call(uintTxRDhYu, uintpYsl650, uintSuULMrI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeLNay0G = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const boollTSrKsr = false
		const uintYELzrzj = BigInt("0")
		const addresstEHU03 = accounts[5]
		const addresscYO1RC3 = accounts[5]
		const boolTHhUTHg = false
		const uintwyj5ue = BigInt("1575")
		const uint256ObdQ8We = await CourtFarming_RoomLPStakeLNay0G.unstake.call(uintYELzrzj, boollTSrKsr, {from: accounts[3]});
		const uint256EsFxDnh = await CourtFarming_RoomLPStakeLNay0G.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const addressVI5EgzO = await CourtFarming_RoomLPStakeLNay0G.setCourtStake.call(addresstEHU03, {from: accounts[3]});
		const uint256SEvdseN = await CourtFarming_RoomLPStakeLNay0G.getCurrentTime.call({from: accounts[4]});
		const addressrdQyQ9l = await CourtFarming_RoomLPStakeLNay0G.updateReward.call(addresscYO1RC3, {from: accounts[4]});
		const uint256ecgNFD0 = await CourtFarming_RoomLPStakeLNay0G.unstake.call(uintwyj5ue, boolTHhUTHg, {from: accounts[5]});
		const uint256mjim0U = await CourtFarming_RoomLPStakeLNay0G.lastUpdateBlock.call({from: accounts[3]});

		assert.equal(uint256EsFxDnh, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeLNay0G.setCourtStake.call(addresstEHU03, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeBmXE1hv = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressTaarvE = accounts[1]
		const uintA9cOcL = BigInt("1976")
		const uintXOgwoAZ = BigInt("0")
		const addressfiH5Fxx = accounts[0]
		const boolGnVK9ri = true
		const uintbJNlUXH = BigInt("152")
		const uint256CLsGszv = await CourtFarming_RoomLPStakeBmXE1hv.rewards.call(addressTaarvE, {from: accounts[3]});
		const boolbxsg0Mj = await CourtFarming_RoomLPStakeBmXE1hv.stakeIncvRewards.call(uintA9cOcL, {from: accounts[1]});
		const uint256RP0K3pi = await CourtFarming_RoomLPStakeBmXE1hv.blockNumber.call({from: accounts[3]});
		const boolk72n9ub = await CourtFarming_RoomLPStakeBmXE1hv.stakeIncvRewards.call(uintXOgwoAZ, {from: accounts[2]});
		const uint256zHUepmY = await CourtFarming_RoomLPStakeBmXE1hv.balanceOf.call(addressfiH5Fxx, {from: accounts[1]});
		const uint256Byv46O4 = await CourtFarming_RoomLPStakeBmXE1hv.unstake.call(uintbJNlUXH, boolGnVK9ri, {from: accounts[0]});

		assert.equal(boolbxsg0Mj, false)
		assert.equal(boolk72n9ub, false)
		assert.equal(uint256RP0K3pi, BigInt("1468"))
		assert.equal(uint256zHUepmY, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeBmXE1hv.unstake.call(uintbJNlUXH, boolGnVK9ri, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})