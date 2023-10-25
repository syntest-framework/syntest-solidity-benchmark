const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedMZ03yk = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressPw5Gc3r = "0x0000000000000000000000000000000000000001"
		const uintNsawuay = BigInt("661")
		const uintdg8cTgd = BigInt("1790")
		const uintbkBaGDb = BigInt("1129")
		const address3m2ujj = await CourtFarming_HTStakedMZ03yk.getBeneficiaryInfo.call(addressPw5Gc3r, {from: accounts[1]});
//		const uint256OXl9I7V = await CourtFarming_HTStakedMZ03yk._stakeParametrsCalculation.call(uintbkBaGDb, uintdg8cTgd, uintNsawuay, {from: accounts[5]});
//		const uint2560OPTu3 = await CourtFarming_HTStakedMZ03yk.blockNumber.call({from: accounts[3]});

		await expect(CourtFarming_HTStakedMZ03yk._stakeParametrsCalculation.call(uintbkBaGDb, uintdg8cTgd, uintNsawuay, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakebicao0 = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressSAcSc6T = accounts[4]
		const addressXovE7FS = "0x0000000000000000000000000000000000000001"
		const addressZfcJGlu = accounts[4]
		const uint256pejrMGc = await CourtFarming_HTStakebicao0.rewards.call(addressSAcSc6T, {from: accounts[2]});
		const uint256IH2EBNe = await CourtFarming_HTStakebicao0.incvRewardInfo.call({from: accounts[0]});
		const addressEmGahri = await CourtFarming_HTStakebicao0.getBeneficiaryInfo.call(addressXovE7FS, {from: "0x0000000000000000000000000000000000000001"});
		const addressWoa29sB = await CourtFarming_HTStakebicao0.getBeneficiaryInfo.call(addressZfcJGlu, {from: accounts[4]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeOYfNhMd = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintZ6jlLkp = BigInt("1140")
		const addressnnD111C = accounts[1]
		const uint256z0tGVoe = await CourtFarming_HTStakeOYfNhMd.blockNumber.call({from: accounts[1]});
//		const uint256GWHQN9o = await CourtFarming_HTStakeOYfNhMd.stake.call(uintZ6jlLkp, {from: accounts[2]});
//		const addressvQxb4Pw = await CourtFarming_HTStakeOYfNhMd.setCourtStake.call(addressnnD111C, {from: accounts[0]});
//		const uint2569ywqNj = await CourtFarming_HTStakeOYfNhMd.incvRewardClaim.call({from: accounts[0]});

		assert.equal(uint256z0tGVoe, BigInt("1841"))
		await expect(CourtFarming_HTStakeOYfNhMd.stake.call(uintZ6jlLkp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewvbnJqi = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintbd4D4at = BigInt("615")
		const uint256ClbkpWk = await CourtFarming_HTStakewvbnJqi.incvRewardInfo.call({from: accounts[2]});
		const uint256TxZlHYe = await CourtFarming_HTStakewvbnJqi.incvRewardClaim.call({from: accounts[3]});
		const uint25658yzGL = await CourtFarming_HTStakewvbnJqi.expectedRewardsToday.call(uintbd4D4at, {from: "0x0000000000000000000000000000000000000001"});
		const uint256v8hFB2w = await CourtFarming_HTStakewvbnJqi.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256F1k9RA3 = await CourtFarming_HTStakewvbnJqi.incvRewardInfo.call({from: accounts[5]});
		const uint256O38yQ0g = await CourtFarming_HTStakewvbnJqi.getCurrentTime.call({from: accounts[2]});

		assert.equal(uint256O38yQ0g, BigInt("1630201504"))
		assert.equal(uint256TxZlHYe, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeE7hLA0 = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintVUsGuw = BigInt("177")
		const uintrECqgEd = BigInt("1940")
		const uintQ7xF2z = BigInt("1052")
		const uintljNBMUz = BigInt("406")
		const uintCja93vs = BigInt("1189")
		const uintu5MuZKh = BigInt("484")
//		await CourtFarming_HTStakeE7hLA0.changeStakeParameters.call(uintQ7xF2z, uintrECqgEd, uintVUsGuw, {from: accounts[4]});
//		const uint256cVKBZF = await CourtFarming_HTStakeE7hLA0.incvRewardClaim.call({from: accounts[0]});
//		const uint256kPlLTxu = await CourtFarming_HTStakeE7hLA0.incvRewardClaim.call({from: accounts[2]});
//		await CourtFarming_HTStakeE7hLA0.changeStakeParameters.call(uintu5MuZKh, uintCja93vs, uintljNBMUz, {from: accounts[1]});

		await expect(CourtFarming_HTStakeE7hLA0.changeStakeParameters.call(uintQ7xF2z, uintrECqgEd, uintVUsGuw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakePPTrWL = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintIl0sivL = BigInt("567")
		const addressh3vOHTB = accounts[1]
		const addressRIg1rqJ = accounts[1]
		const boolqHK8isZ = true
		const uintf6KkVp = BigInt("597")
		const uint256l6nQJX = await CourtFarming_HTStakePPTrWL.lastUpdateBlock.call({from: accounts[1]});
		const uint256Oh7cnEi = await CourtFarming_HTStakePPTrWL.expectedRewardsToday.call(uintIl0sivL, {from: accounts[1]});
		const uint256sfsR5ua = await CourtFarming_HTStakePPTrWL.balanceOf.call(addressh3vOHTB, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYjjeIxS = await CourtFarming_HTStakePPTrWL.setCourtStake.call(addressRIg1rqJ, {from: accounts[2]});
//		const uint256OHcJI7M = await CourtFarming_HTStakePPTrWL.totalStaked.call({from: accounts[1]});
//		const uint256yUEZsaN = await CourtFarming_HTStakePPTrWL.unstake.call(uintf6KkVp, boolqHK8isZ, {from: accounts[4]});

		assert.equal(uint256l6nQJX, BigInt("1841"))
		assert.equal(uint256sfsR5ua, BigInt("0"))
		await expect(CourtFarming_HTStakePPTrWL.setCourtStake.call(addressRIg1rqJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeHFu9hs5 = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintVfpmEyc = BigInt("1894")
		const uintPaToa60 = BigInt("153")
		const uintWPgdBM = BigInt("248")
		const boolXOuTW3e = await CourtFarming_HTStakeHFu9hs5.stakeIncvRewards.call(uintVfpmEyc, {from: accounts[3]});
		const uint256FdXFnIM = await CourtFarming_HTStakeHFu9hs5.expectedRewardsToday.call(uintPaToa60, {from: accounts[3]});
//		const uint256abEnHJK = await CourtFarming_HTStakeHFu9hs5.stake.call(uintWPgdBM, {from: accounts[4]});

		assert.equal(boolXOuTW3e, false)
		await expect(CourtFarming_HTStakeHFu9hs5.stake.call(uintWPgdBM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewvbnJqi = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintx84H6R = BigInt("615")
		const uint256ClbkpWk = await CourtFarming_HTStakewvbnJqi.incvRewardInfo.call({from: accounts[2]});
		const uint256TxZlHYe = await CourtFarming_HTStakewvbnJqi.incvRewardClaim.call({from: accounts[3]});
		const uint25658yzGL = await CourtFarming_HTStakewvbnJqi.expectedRewardsToday.call(uintx84H6R, {from: "0x0000000000000000000000000000000000000001"});
		const uint256v8hFB2w = await CourtFarming_HTStakewvbnJqi.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256F1k9RA3 = await CourtFarming_HTStakewvbnJqi.incvRewardInfo.call({from: accounts[5]});
		const uint256O38yQ0g = await CourtFarming_HTStakewvbnJqi.getCurrentTime.call({from: accounts[2]});
		const uint256cOZHbUY = await CourtFarming_HTStakewvbnJqi.totalStaked.call({from: accounts[4]});

		assert.equal(uint256O38yQ0g, BigInt("1630201507"))
		assert.equal(uint256TxZlHYe, BigInt("0"))
		assert.equal(uint256cOZHbUY, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeNU26bEx = await CourtFarming_HTStake.new({from: accounts[2]});
		const boolL92pBIh = true
		const uintWjVZ26p = BigInt("149")
//		const uint256OavVpjz = await CourtFarming_HTStakeNU26bEx.unstake.call(uintWjVZ26p, boolL92pBIh, {from: accounts[5]});
//		const uint256nGmB2Hq = await CourtFarming_HTStakeNU26bEx.incvRewardInfo.call({from: accounts[2]});
//		const uint256zh4iXh1 = await CourtFarming_HTStakeNU26bEx.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeNU26bEx.unstake.call(uintWjVZ26p, boolL92pBIh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedMZ03yk = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressQDWs4FW = accounts[2]
		const addressD3ngWA = "0x0000000000000000000000000000000000000002"
//		const addressfyA2Ye9 = await CourtFarming_HTStakedMZ03yk.setCourtStake.call(addressQDWs4FW, {from: accounts[2]});
//		const uint2563HJZvT = await CourtFarming_HTStakedMZ03yk.incvRewardClaim.call({from: accounts[1]});
//		const address3m2ujj = await CourtFarming_HTStakedMZ03yk.getBeneficiaryInfo.call(addressD3ngWA, {from: accounts[1]});

		await expect(CourtFarming_HTStakedMZ03yk.setCourtStake.call(addressQDWs4FW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakegqaPp3 = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintlcVHKnu = BigInt("962")
		const uinttd6E9O = BigInt("1175")
		const uintMRqnnCE = BigInt("1132")
		const uintYPb6c5g = BigInt("1553")
		const uintKASAycz = BigInt("1598")
		const uintChH8Y9 = BigInt("1486")
//		await CourtFarming_HTStakegqaPp3.changeStakeParameters.call(uintMRqnnCE, uinttd6E9O, uintlcVHKnu, {from: accounts[3]});
//		await CourtFarming_HTStakegqaPp3.changeStakeParameters.call(uintChH8Y9, uintKASAycz, uintYPb6c5g, {from: accounts[0]});
//		const uint256lWJIyL3 = await CourtFarming_HTStakegqaPp3.incvRewardInfo.call({from: accounts[0]});
//		const uint256hxAwV1r = await CourtFarming_HTStakegqaPp3.lastUpdateBlock.call({from: accounts[1]});

		await expect(CourtFarming_HTStakegqaPp3.changeStakeParameters.call(uintMRqnnCE, uinttd6E9O, uintlcVHKnu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeivhYRiq = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressYN2vy2k = accounts[1]
		const uintyGBbDeK = BigInt("787")
		const uintmlXXspO = BigInt("0")
		const uintpkBeXle = BigInt("1665")
		const addressHyhzSYA = accounts[1]
		const uintcmStEO = BigInt("797")
		const addresseDqdHxV = await CourtFarming_HTStakeivhYRiq.updateReward.call(addressYN2vy2k, {from: accounts[1]});
		const boolo8yeMWL = await CourtFarming_HTStakeivhYRiq.stakeIncvRewards.call(uintyGBbDeK, {from: accounts[2]});
		const uint256f0S6FXV = await CourtFarming_HTStakeivhYRiq.stake.call(uintmlXXspO, {from: accounts[1]});
//		const uint256utqyqOw = await CourtFarming_HTStakeivhYRiq.stake.call(uintpkBeXle, {from: accounts[4]});
//		const uint2563pKEMM = await CourtFarming_HTStakeivhYRiq.rewards.call(addressHyhzSYA, {from: accounts[3]});
//		const uint256XbvizN = await CourtFarming_HTStakeivhYRiq.stake.call(uintcmStEO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolo8yeMWL, false)
		await expect(CourtFarming_HTStakeivhYRiq.stake.call(uintpkBeXle, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeP6iK4Z1 = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressYkXeya0 = accounts[0]
		const boolHj99VM4 = false
		const uintVXvLav4 = BigInt("1074")
		const uint256PCqZBF = await CourtFarming_HTStakeP6iK4Z1.getCurrentTime.call({from: accounts[2]});
		const addressMXfA7pP = await CourtFarming_HTStakeP6iK4Z1.updateReward.call(addressYkXeya0, {from: accounts[0]});
		const uint256KeYBfUj = await CourtFarming_HTStakeP6iK4Z1.lastUpdateBlock.call({from: accounts[3]});
		const uint256TGWlYu = await CourtFarming_HTStakeP6iK4Z1.unstake.call(uintVXvLav4, boolHj99VM4, {from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakerhj99dw = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintWQIs76 = BigInt("0")
		const addressxkz0dG = accounts[4]
		const uintvIxua3K = BigInt("943")
		const boolb3dTvf = await CourtFarming_HTStakerhj99dw.stakeIncvRewards.call(uintWQIs76, {from: accounts[5]});
		const uint256pGJoE85 = await CourtFarming_HTStakerhj99dw.rewards.call(addressxkz0dG, {from: accounts[3]});
		const boolrhUE6T3 = await CourtFarming_HTStakerhj99dw.stakeIncvRewards.call(uintvIxua3K, {from: accounts[0]});

		assert.equal(boolb3dTvf, false)
		assert.equal(boolrhUE6T3, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedMZ03yk = await CourtFarming_HTStake.new({from: accounts[2]});
		const boolFEq6kXT = true
		const uintbtmYP8R = BigInt("0")
		const uint256xc5mRLq = await CourtFarming_HTStakedMZ03yk.unstake.call(uintbtmYP8R, boolFEq6kXT, {from: accounts[3]});
		const uint256njsDiW0 = await CourtFarming_HTStakedMZ03yk.getCurrentTime.call({from: accounts[1]});

		assert.equal(uint256njsDiW0, BigInt("1630201500"))
	});
})