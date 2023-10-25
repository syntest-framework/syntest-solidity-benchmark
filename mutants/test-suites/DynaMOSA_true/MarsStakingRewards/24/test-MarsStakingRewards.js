const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressqdq369 = "0x0000000000000000000000000000000000000001"
		const addresslNRHKV9 = accounts[5]
		const addressVhZ08lO = accounts[4]
		const MarsStakingRewardsmcyPymp = await MarsStakingRewards.new(addressqdq369, addresslNRHKV9, addressVhZ08lO, {from: accounts[4]});
		const byteh6kdEiP = "0x121202171e011b2002092019081d1f1a021014051704131409191e1c12201a08"
		const bytehpchgAs = "0x161d1d1a1e1d070103111310120f031306191508040115081908031e15141614"
		const uintKhBb8ct = BigInt("192")
		const uintwfPMhax = BigInt("630")
		const uintSijRBd = BigInt("1830")
		const uintfUFywG0 = BigInt("496")
		const addressCAmjWFU = accounts[2]
		const address4kI4wb = accounts[5]
		const uintqExxVM7 = BigInt("1641")
		const addressXoBSQ5q = accounts[1]
//		const uint256d8C6rWN = await MarsStakingRewardsmcyPymp.stakeWithPermit.call(uintSijRBd, uintwfPMhax, uintKhBb8ct, bytehpchgAs, byteh6kdEiP, {from: accounts[4]});
//		const addressoFM1OOq = await MarsStakingRewardsmcyPymp.inCaseTokensGetStuck.call(addressCAmjWFU, uintfUFywG0, {from: "0x0000000000000000000000000000000000000001"});
//		const addressVuz6cEW = await MarsStakingRewardsmcyPymp.updateReward.call(address4kI4wb, {from: accounts[4]});
//		const addressdAPSPbm = await MarsStakingRewardsmcyPymp.inCaseTokensGetStuck.call(addressXoBSQ5q, uintqExxVM7, {from: accounts[0]});

		await expect(MarsStakingRewardsmcyPymp.stakeWithPermit.call(uintSijRBd, uintwfPMhax, uintKhBb8ct, bytehpchgAs, byteh6kdEiP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresst9DxGFC = "0x0000000000000000000000000000000000000001"
		const addressnaUL8u0 = accounts[1]
		const addressPkbkUfC = accounts[4]
		const MarsStakingRewardsA2DOblt = await MarsStakingRewards.new(addresst9DxGFC, addressnaUL8u0, addressPkbkUfC, {from: accounts[4]});
		const uintUzW7Kqr = BigInt("1954")
		const byteFH3qJUl = "0x0513191b0a1001181a0702080e141209190901011f00150e1809151715051610"
		const byteaGN6vUD = "0x16080d08070118171c0507030709011c0c1c0b15050d0a171a0c02011a06011a"
		const uintEusVk9u = BigInt("241")
		const uintyMwLxO0 = BigInt("452")
		const uintPTDSYtN = BigInt("345")
		const uint256HP0zrta = await MarsStakingRewardsA2DOblt.totalSupply.call({from: accounts[3]});
//		const uint256Et529i1 = await MarsStakingRewardsA2DOblt.stake.call(uintUzW7Kqr, {from: accounts[2]});
//		const uint256S63ljWx = await MarsStakingRewardsA2DOblt.stakeWithPermit.call(uintPTDSYtN, uintyMwLxO0, uintEusVk9u, byteaGN6vUD, byteFH3qJUl, {from: accounts[2]});

		assert.equal(uint256HP0zrta, BigInt("0"))
		await expect(MarsStakingRewardsA2DOblt.stake.call(uintUzW7Kqr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address52SDph = accounts[0]
		const address73i1bb = "0x0000000000000000000000000000000000000001"
		const addressyEOIOCL = accounts[2]
		const MarsStakingRewardsfMfiQgi = await MarsStakingRewards.new(address52SDph, address73i1bb, addressyEOIOCL, {from: accounts[3]});
		const uintLzez8K2 = BigInt("679")
		const byteKqsj2N = "0x181f1700170e171a160f190610181b16171b17020d09030c0c0d181c1e1f0907"
		const bytezsunIeV = "0x1a161d1b1501131f001d101e1812070c121202030d0f2005121b0415100c1a1a"
		const uints3W2uKw = BigInt("121")
		const uintQTm6JL2 = BigInt("404")
		const uintLLFTVDV = BigInt("465")
		const addressZrAdvIo = accounts[5]
//		await MarsStakingRewardsfMfiQgi.nonReentrant.call({from: accounts[1]});
//		const uint256aEgG22V = await MarsStakingRewardsfMfiQgi.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256zCiMwWh = await MarsStakingRewardsfMfiQgi.stake.call(uintLzez8K2, {from: accounts[2]});
//		const uint256d6eSJyX = await MarsStakingRewardsfMfiQgi.stakeWithPermit.call(uintLLFTVDV, uintQTm6JL2, uints3W2uKw, bytezsunIeV, byteKqsj2N, {from: accounts[4]});
//		await MarsStakingRewardsfMfiQgi.exit.call({from: accounts[1]});
//		const uint256jjz03Th = await MarsStakingRewardsfMfiQgi.balanceOf.call(addressZrAdvIo, {from: accounts[4]});

		await expect(MarsStakingRewardsfMfiQgi.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressoN4uFEP = accounts[3]
		const addressTzwA8E = accounts[4]
		const addressHPY8kmv = accounts[3]
		const MarsStakingRewardsewsL7H6 = await MarsStakingRewards.new(addressoN4uFEP, addressTzwA8E, addressHPY8kmv, {from: accounts[0]});
		const addressK7LofVJ = accounts[1]
		const uintjmDW743 = BigInt("129")
		const uintoUKabt = BigInt("1106")
		const uint256HPY7qWU = await MarsStakingRewardsewsL7H6.balanceOf.call(addressK7LofVJ, {from: accounts[1]});
//		await MarsStakingRewardsewsL7H6.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256yv7ncLS = await MarsStakingRewardsewsL7H6.notifyRewardAmount.call(uintoUKabt, uintjmDW743, {from: accounts[2]});
//		await MarsStakingRewardsewsL7H6.renounceOwnership.call({from: accounts[5]});

		assert.equal(uint256HPY7qWU, BigInt("0"))
		await expect(MarsStakingRewardsewsL7H6.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresslqF8HPa = accounts[1]
		const addressegEZdC = accounts[3]
		const addressliw4r4c = accounts[4]
		const MarsStakingRewardsx0QzXOn = await MarsStakingRewards.new(addresslqF8HPa, addressegEZdC, addressliw4r4c, {from: accounts[1]});
		const bytezuAd1B9 = "0x050012021c1414030e0612021415141609110d1a191608041611071c18060903"
		const byteQOZ7Czd = "0x0a1b1501060d0c091518170b1118171413140b1603181b131a07121716161d17"
		const uintmUNtFJ6 = BigInt("74")
		const uintQPbDGrB = BigInt("778")
		const uintz9BZHG = BigInt("1974")
		const uint256dnUX3ZF = await MarsStakingRewardsx0QzXOn.getRewardForDuration.call({from: accounts[1]});
//		await MarsStakingRewardsx0QzXOn.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256s01HfGZ = await MarsStakingRewardsx0QzXOn.stakeWithPermit.call(uintz9BZHG, uintQPbDGrB, uintmUNtFJ6, byteQOZ7Czd, bytezuAd1B9, {from: accounts[2]});
//		const uint256zFhYNtW = await MarsStakingRewardsx0QzXOn.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256dnUX3ZF, BigInt("0"))
		await expect(MarsStakingRewardsx0QzXOn.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresswPsSMqq = accounts[3]
		const addressPFLJ09z = accounts[0]
		const addressvMPHNSI = accounts[0]
		const MarsStakingRewardsjo6boE6 = await MarsStakingRewards.new(addresswPsSMqq, addressPFLJ09z, addressvMPHNSI, {from: accounts[0]});
		const uintfqo1Hbr = BigInt("867")
		const uint84CEUJ = BigInt("199")
//		const uint256wjdHxo = await MarsStakingRewardsjo6boE6.notifyRewardAmount.call(uint84CEUJ, uintfqo1Hbr, {from: accounts[2]});
//		await MarsStakingRewardsjo6boE6.nonReentrant.call({from: accounts[3]});

		await expect(MarsStakingRewardsjo6boE6.notifyRewardAmount.call(uint84CEUJ, uintfqo1Hbr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressUOrbLmc = accounts[1]
		const addressmzQbhs = accounts[2]
		const addressDoCuf1T = accounts[4]
		const MarsStakingRewardsmwXL1p = await MarsStakingRewards.new(addressUOrbLmc, addressmzQbhs, addressDoCuf1T, {from: accounts[3]});
		const addressATqyUJX = await MarsStakingRewardsmwXL1p.owner.call({from: accounts[1]});
//		await MarsStakingRewardsmwXL1p.getReward.call({from: accounts[2]});
//		const boolfcKuXAd = await MarsStakingRewardsmwXL1p.isOwner.call({from: accounts[3]});

		assert.equal(addressATqyUJX, 0x607500D5D3b180AaCEC041424777F46f13152526)
		await expect(MarsStakingRewardsmwXL1p.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresspEQJCEZ = accounts[3]
		const addresslBB7E6 = accounts[4]
		const addressvADyHhc = accounts[3]
		const MarsStakingRewardsewsL7H6 = await MarsStakingRewards.new(addresspEQJCEZ, addresslBB7E6, addressvADyHhc, {from: accounts[0]});
		const addressqLpwoy = accounts[0]
		const addressm1smQ7g = accounts[1]
		const uintdonmFG0 = BigInt("346")
		const uintSiLTz3b = BigInt("129")
		const uintCp1lMqC = BigInt("1106")
		const uint2566KGmdN = await MarsStakingRewardsewsL7H6.balanceOf.call(addressqLpwoy, {from: accounts[0]});
		const uint256pnFlkeH = await MarsStakingRewardsewsL7H6.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256HPY7qWU = await MarsStakingRewardsewsL7H6.balanceOf.call(addressm1smQ7g, {from: accounts[1]});
//		await MarsStakingRewardsewsL7H6.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256iO6xFh = await MarsStakingRewardsewsL7H6.withdraw.call(uintdonmFG0, {from: accounts[3]});
//		const uint256yv7ncLS = await MarsStakingRewardsewsL7H6.notifyRewardAmount.call(uintCp1lMqC, uintSiLTz3b, {from: accounts[2]});
//		await MarsStakingRewardsewsL7H6.renounceOwnership.call({from: accounts[5]});

		assert.equal(uint2566KGmdN, BigInt("0"))
		assert.equal(uint256HPY7qWU, BigInt("0"))
		assert.equal(uint256pnFlkeH, BigInt("0"))
		await expect(MarsStakingRewardsewsL7H6.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressaZy4nhN = accounts[1]
		const addressHkOMpb = accounts[0]
		const addressdtAbUX5 = accounts[3]
		const MarsStakingRewardsBr0yoDW = await MarsStakingRewards.new(addressaZy4nhN, addressHkOMpb, addressdtAbUX5, {from: "0x0000000000000000000000000000000000000001"});
		const addressqPGBCN = accounts[5]
		const addressJdkahaG = accounts[3]
		const addressh0Iftxq = accounts[2]
		const uint256cGxa1K1 = await MarsStakingRewardsBr0yoDW.balanceOf.call(addressqPGBCN, {from: accounts[0]});
		const uint2560N5FqG = await MarsStakingRewardsBr0yoDW.balanceOf.call(addressJdkahaG, {from: accounts[3]});
		const addressa43kDu7 = await MarsStakingRewardsBr0yoDW.setRewardsDistribution.call(addressh0Iftxq, {from: accounts[4]});
		await MarsStakingRewardsBr0yoDW.exit.call({from: accounts[2]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressl4vjJVB = accounts[1]
		const addressWI47mP2 = accounts[3]
		const addressEhqOS4r = accounts[4]
		const MarsStakingRewardsx0QzXOn = await MarsStakingRewards.new(addressl4vjJVB, addressWI47mP2, addressEhqOS4r, {from: accounts[1]});
		const byteDl3dJwB = "0x06060c071d11201a0506070d1b1c1f041b1d0d020d20001f1b02010d0f081319"
		const byteKnoMmav = "0x091c02120e04031d1c0e17100c1f0b191911191b0302091604010f20041c0418"
		const uintjNMm9vx = BigInt("52")
		const uintfIq4HVI = BigInt("1252")
		const uintNhba7AQ = BigInt("1388")
		const byteoJHLR7z = "0x050012021c1414030e0612021415141609110d1a191608041611071c18060903"
		const byteR4HSVi9 = "0x0a1b1501060d0c091518170b1118171413140b1603181b131a07121716161d17"
		const uintCaZAevY = BigInt("74")
		const uintuqT7Ctz = BigInt("778")
		const uint5VXtBf = BigInt("1974")
		const uint256kLeaDrM = await MarsStakingRewardsx0QzXOn.rewardPerToken.call({from: accounts[4]});
		const uint256dnUX3ZF = await MarsStakingRewardsx0QzXOn.getRewardForDuration.call({from: accounts[1]});
//		await MarsStakingRewardsx0QzXOn.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256g5ODzwb = await MarsStakingRewardsx0QzXOn.stakeWithPermit.call(uintNhba7AQ, uintfIq4HVI, uintjNMm9vx, byteKnoMmav, byteDl3dJwB, {from: accounts[5]});
//		const boolA690tjB = await MarsStakingRewardsx0QzXOn.isOwner.call({from: accounts[4]});
//		const uint256s01HfGZ = await MarsStakingRewardsx0QzXOn.stakeWithPermit.call(uint5VXtBf, uintuqT7Ctz, uintCaZAevY, byteR4HSVi9, byteoJHLR7z, {from: accounts[2]});
//		const uint256zFhYNtW = await MarsStakingRewardsx0QzXOn.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256dnUX3ZF, BigInt("0"))
		assert.equal(uint256kLeaDrM, BigInt("0"))
		await expect(MarsStakingRewardsx0QzXOn.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressEukPa3U = accounts[3]
		const addressyrAAtqr = accounts[1]
		const addressfI9wijp = accounts[4]
		const MarsStakingRewardshjo5Rl = await MarsStakingRewards.new(addressEukPa3U, addressyrAAtqr, addressfI9wijp, {from: accounts[0]});
		const addressgBV3K6 = accounts[0]
		const uintIQo1egw = BigInt("1464")
		const addressxlTqzql = accounts[0]
		const uint256IS3Pvbx = await MarsStakingRewardshjo5Rl.earned.call(addressgBV3K6, {from: accounts[1]});
//		const uint256SUBrE3y = await MarsStakingRewardshjo5Rl.withdraw.call(uintIQo1egw, {from: accounts[0]});
//		await MarsStakingRewardshjo5Rl.renounceOwnership.call({from: accounts[0]});
//		const addressYFBjCUU = await MarsStakingRewardshjo5Rl.updateReward.call(addressxlTqzql, {from: accounts[3]});

		assert.equal(uint256IS3Pvbx, BigInt("0"))
		await expect(MarsStakingRewardshjo5Rl.withdraw.call(uintIQo1egw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressszQXgz8 = accounts[1]
		const addresskh1OgDn = accounts[3]
		const addressTXRYufd = accounts[4]
		const MarsStakingRewardskaLxRuR = await MarsStakingRewards.new(addressszQXgz8, addresskh1OgDn, addressTXRYufd, {from: accounts[1]});
		const uintvSi2GXM = BigInt("1292")
		const addressLzChlXx = accounts[2]
		const addressncuBBDw = accounts[3]
		const uintMzbTyEQ = BigInt("737")
		const uintnbZovVm = BigInt("876")
		const addressevNOcbx = accounts[5]
		const uintNhFva1U = BigInt("1567")
		const addressUD1v7Qw = accounts[1]
		const uint256GW7jm2I = await MarsStakingRewardskaLxRuR.rewardPerToken.call({from: accounts[4]});
//		const addressys6NMHN = await MarsStakingRewardskaLxRuR.inCaseTokensGetStuck.call(addressLzChlXx, uintvSi2GXM, {from: accounts[1]});
//		const addressAIGEKq = await MarsStakingRewardskaLxRuR.updateReward.call(addressncuBBDw, {from: accounts[0]});
//		const uint256pCp8KyX = await MarsStakingRewardskaLxRuR.notifyRewardAmount.call(uintnbZovVm, uintMzbTyEQ, {from: accounts[1]});
//		const addressYpIoyx = await MarsStakingRewardskaLxRuR.updateReward.call(addressevNOcbx, {from: accounts[2]});
//		const addressmeqFUeN = await MarsStakingRewardskaLxRuR.inCaseTokensGetStuck.call(addressUD1v7Qw, uintNhFva1U, {from: accounts[5]});

		assert.equal(uint256GW7jm2I, BigInt("0"))
		await expect(MarsStakingRewardskaLxRuR.inCaseTokensGetStuck.call(addressLzChlXx, uintvSi2GXM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressTRE5Nrb = accounts[1]
		const addressOdQj20L = accounts[3]
		const addresstFNfggF = accounts[4]
		const MarsStakingRewardsx0QzXOn = await MarsStakingRewards.new(addressTRE5Nrb, addressOdQj20L, addresstFNfggF, {from: accounts[1]});
		const addresstX9VSQH = accounts[4]
		const addressliTz6L = accounts[3]
		const uint256dfIN0Nl = await MarsStakingRewardsx0QzXOn.earned.call(addresstX9VSQH, {from: accounts[3]});
		const addresssUlAsL5 = await MarsStakingRewardsx0QzXOn.setRewardsDistribution.call(addressliTz6L, {from: accounts[1]});
		const uint256dnUX3ZF = await MarsStakingRewardsx0QzXOn.getRewardForDuration.call({from: accounts[1]});

		assert.equal(uint256dfIN0Nl, BigInt("0"))
		assert.equal(uint256dnUX3ZF, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressfzdwDp = accounts[1]
		const addressPp7pL0O = accounts[3]
		const addressuyOxtM = accounts[4]
		const MarsStakingRewardskaLxRuR = await MarsStakingRewards.new(addressfzdwDp, addressPp7pL0O, addressuyOxtM, {from: accounts[1]});
		const uintoO4FojM = BigInt("1900")
		const uintqhbKQA = BigInt("2015")
		const uintzlx3zdz = BigInt("1292")
		const addressAJMsN1W = accounts[2]
		const addressBJmBkQH = accounts[3]
		const uinttw6Y1wq = BigInt("737")
		const uintmFhQyli = BigInt("876")
		const byteuiLHXM4 = "0x0e121f1718141f031a0e09071914120d20141f0a1f031508010d050103071d0b"
		const bytelAUemlw = "0x05121b1905040c18111502140f18061a1f091413161c13010818050e010d141f"
		const uintsrb3g0C = BigInt("20")
		const uintjZyL2cH = BigInt("1625")
		const uintcnmN1MN = BigInt("1011")
		const addressjE0uJNS = accounts[5]
		const uintFgcn5nz = BigInt("1567")
		const addressQKzxK3 = accounts[1]
		const uint256GW7jm2I = await MarsStakingRewardskaLxRuR.rewardPerToken.call({from: accounts[4]});
//		const uint256KGEdlC = await MarsStakingRewardskaLxRuR.notifyRewardAmount.call(uintqhbKQA, uintoO4FojM, {from: accounts[1]});
//		const addressys6NMHN = await MarsStakingRewardskaLxRuR.inCaseTokensGetStuck.call(addressAJMsN1W, uintzlx3zdz, {from: accounts[1]});
//		const addressAIGEKq = await MarsStakingRewardskaLxRuR.updateReward.call(addressBJmBkQH, {from: accounts[0]});
//		const uint256pCp8KyX = await MarsStakingRewardskaLxRuR.notifyRewardAmount.call(uintmFhQyli, uinttw6Y1wq, {from: accounts[1]});
//		const uint256UQEqknm = await MarsStakingRewardskaLxRuR.stakeWithPermit.call(uintcnmN1MN, uintjZyL2cH, uintsrb3g0C, bytelAUemlw, byteuiLHXM4, {from: accounts[0]});
//		const addressYpIoyx = await MarsStakingRewardskaLxRuR.updateReward.call(addressjE0uJNS, {from: accounts[2]});
//		const addressmeqFUeN = await MarsStakingRewardskaLxRuR.inCaseTokensGetStuck.call(addressQKzxK3, uintFgcn5nz, {from: accounts[5]});

		assert.equal(uint256GW7jm2I, BigInt("0"))
		await expect(MarsStakingRewardskaLxRuR.notifyRewardAmount.call(uintqhbKQA, uintoO4FojM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresso78WwXD = accounts[4]
		const addressmTcLIPi = accounts[0]
		const addressVps2xgc = accounts[1]
		const MarsStakingRewardsB1nBP7l = await MarsStakingRewards.new(addresso78WwXD, addressmTcLIPi, addressVps2xgc, {from: accounts[5]});
		const uinthbY0YqJ = BigInt("156")
//		await MarsStakingRewardsB1nBP7l.renounceOwnership.call({from: accounts[5]});
//		await MarsStakingRewardsB1nBP7l.onlyOwner.call({from: accounts[3]});
//		const uint256KAinLpx = await MarsStakingRewardsB1nBP7l.withdraw.call(uinthbY0YqJ, {from: accounts[1]});

		await expect(MarsStakingRewardsB1nBP7l.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressh0KMls6 = accounts[1]
		const addresspWdTqyA = accounts[3]
		const addresseSfRMq2 = accounts[4]
		const MarsStakingRewardskaLxRuR = await MarsStakingRewards.new(addressh0KMls6, addresspWdTqyA, addresseSfRMq2, {from: accounts[1]});
		const uintppjQFvX = BigInt("1292")
		const addressKuR0gSM = accounts[4]
		const address6T2ZrS = accounts[3]
		const uintEgwoqr = BigInt("737")
		const uintJiw3lvh = BigInt("876")
		const addressLSuDZIv = accounts[5]
		const uintHwJAHEL = BigInt("1567")
		const addressxDzh6F2 = accounts[1]
		const uint256GW7jm2I = await MarsStakingRewardskaLxRuR.rewardPerToken.call({from: accounts[4]});
//		const addressys6NMHN = await MarsStakingRewardskaLxRuR.inCaseTokensGetStuck.call(addressKuR0gSM, uintppjQFvX, {from: accounts[1]});
//		const addressAIGEKq = await MarsStakingRewardskaLxRuR.updateReward.call(address6T2ZrS, {from: accounts[0]});
//		const uint256pCp8KyX = await MarsStakingRewardskaLxRuR.notifyRewardAmount.call(uintJiw3lvh, uintEgwoqr, {from: accounts[1]});
//		const addressYpIoyx = await MarsStakingRewardskaLxRuR.updateReward.call(addressLSuDZIv, {from: accounts[2]});
//		const addressmeqFUeN = await MarsStakingRewardskaLxRuR.inCaseTokensGetStuck.call(addressxDzh6F2, uintHwJAHEL, {from: accounts[5]});

		assert.equal(uint256GW7jm2I, BigInt("0"))
		await expect(MarsStakingRewardskaLxRuR.inCaseTokensGetStuck.call(addressKuR0gSM, uintppjQFvX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressfywOcmm = accounts[1]
		const addresshwwfu9G = accounts[3]
		const addressI2opSBA = accounts[4]
		const MarsStakingRewardsx0QzXOn = await MarsStakingRewards.new(addressfywOcmm, addresshwwfu9G, addressI2opSBA, {from: accounts[1]});
		const addressVusDb2d = accounts[3]
		const addressLsJmiHP = accounts[5]
		const uint256dfIN0Nl = await MarsStakingRewardsx0QzXOn.earned.call(addressVusDb2d, {from: accounts[3]});
		const addresscxSXCS5 = await MarsStakingRewardsx0QzXOn.transferOwnership.call(addressLsJmiHP, {from: accounts[1]});
		const boolrFvA8Lb = await MarsStakingRewardsx0QzXOn.isOwner.call({from: accounts[4]});

		assert.equal(boolrFvA8Lb, false)
		assert.equal(uint256dfIN0Nl, BigInt("0"))
	});
})