const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeztwCovM = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxwguZ6O = BigInt("1892")
		const addresshSMnJ9r = accounts[2]
		const uint256EAGFQSh = await CourtFarming_RoomLPStakeztwCovM.expectedRewardsToday.call(uintxwguZ6O, {from: accounts[0]});
		const uint256Vc2ekEc = await CourtFarming_RoomLPStakeztwCovM.incvRewardClaim.call({from: accounts[2]});
		const addressLEdPeuN = await CourtFarming_RoomLPStakeztwCovM.getBeneficiaryInfo.call(addresshSMnJ9r, {from: accounts[4]});
		const uint256hzafZ0J = await CourtFarming_RoomLPStakeztwCovM.incvRewardClaim.call({from: accounts[4]});
		const uint256CNqrnty = await CourtFarming_RoomLPStakeztwCovM.incvRewardClaim.call({from: accounts[3]});
		const uint256pjZRxqS = await CourtFarming_RoomLPStakeztwCovM.incvRewardInfo.call({from: accounts[2]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeAKrOQLG = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressOSArGu6 = accounts[2]
		const addressianlURb = accounts[4]
//		const addressN9LfCzX = await CourtFarming_RoomLPStakeAKrOQLG.setCourtStake.call(addressOSArGu6, {from: accounts[3]});
//		const uint256dU0q8Bp = await CourtFarming_RoomLPStakeAKrOQLG.blockNumber.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256UtAhUY = await CourtFarming_RoomLPStakeAKrOQLG.totalStaked.call({from: accounts[1]});
//		const addressTaTqn9H = await CourtFarming_RoomLPStakeAKrOQLG.setCourtStake.call(addressianlURb, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeAKrOQLG.setCourtStake.call(addressOSArGu6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeIO3Muk = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintdOSSdI9 = BigInt("664")
		const uintoA4Gq6U = BigInt("729")
		const uint256VKURRXi = await CourtFarming_RoomLPStakeIO3Muk.blockNumber.call({from: accounts[1]});
		const uint256nmDEDlH = await CourtFarming_RoomLPStakeIO3Muk.expectedRewardsToday.call(uintdOSSdI9, {from: accounts[0]});
		const boolRxcY5aS = await CourtFarming_RoomLPStakeIO3Muk.stakeIncvRewards.call(uintoA4Gq6U, {from: accounts[0]});
		const uint256IDFg9DV = await CourtFarming_RoomLPStakeIO3Muk.incvRewardInfo.call({from: accounts[0]});

		assert.equal(boolRxcY5aS, false)
		assert.equal(uint256VKURRXi, BigInt("1196"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStaken1YCAtu = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintFFPLNfh = BigInt("1772")
		const addressY1fzmR1 = accounts[1]
		const uintBBEiMKN = BigInt("871")
		const addressIxTL0tW = accounts[4]
//		const uint256guPGogx = await CourtFarming_RoomLPStaken1YCAtu.stake.call(uintFFPLNfh, {from: accounts[2]});
//		const uint256DJQWyW1 = await CourtFarming_RoomLPStaken1YCAtu.rewards.call(addressY1fzmR1, {from: accounts[0]});
//		const uint256l3x38bE = await CourtFarming_RoomLPStaken1YCAtu.expectedRewardsToday.call(uintBBEiMKN, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ykIZpC2 = await CourtFarming_RoomLPStaken1YCAtu.balanceOf.call(addressIxTL0tW, {from: accounts[4]});
//		const uint256SiTz2TY = await CourtFarming_RoomLPStaken1YCAtu.lastUpdateBlock.call({from: accounts[4]});

		await expect(CourtFarming_RoomLPStaken1YCAtu.stake.call(uintFFPLNfh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeuz9678O = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressGLpqLnZ = accounts[3]
		const addressIAY2wAP = accounts[2]
		const uint256z47fACq = await CourtFarming_RoomLPStakeuz9678O.incvRewardClaim.call({from: accounts[5]});
		const addresspJGWoYK = await CourtFarming_RoomLPStakeuz9678O.updateReward.call(addressGLpqLnZ, {from: accounts[4]});
		const uint256VYbi5Y = await CourtFarming_RoomLPStakeuz9678O.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gNnZtzz = await CourtFarming_RoomLPStakeuz9678O.blockNumber.call({from: accounts[3]});
		const uint256fy8FOx5 = await CourtFarming_RoomLPStakeuz9678O.incvRewardClaim.call({from: accounts[1]});
		const addressLAIOIzc = await CourtFarming_RoomLPStakeuz9678O.updateReward.call(addressIAY2wAP, {from: accounts[2]});

		assert.equal(uint256VYbi5Y, BigInt("0"))
		assert.equal(uint256fy8FOx5, BigInt("0"))
		assert.equal(uint256gNnZtzz, BigInt("1196"))
		assert.equal(uint256z47fACq, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeYPWk2T = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressbsMrpI0 = accounts[3]
		const addressXYWkfKK = accounts[4]
		const uinttt5VYVm = BigInt("317")
		const addressrH8lFX9 = await CourtFarming_RoomLPStakeYPWk2T.updateReward.call(addressbsMrpI0, {from: accounts[1]});
		const uint256VI0EuFc = await CourtFarming_RoomLPStakeYPWk2T.balanceOf.call(addressXYWkfKK, {from: accounts[3]});
		const boollhoVfno = await CourtFarming_RoomLPStakeYPWk2T.stakeIncvRewards.call(uinttt5VYVm, {from: accounts[2]});

		assert.equal(boollhoVfno, false)
		assert.equal(uint256VI0EuFc, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeOEbvT2D = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const boolCpntar8 = true
		const uintEJZQfaD = BigInt("1309")
		const boolKaNKm2E = true
		const uintL4HP7FA = BigInt("1526")
		const boolEKOOheB = false
		const uintp8EY1TQ = BigInt("167")
		const addressHSuTCuX = accounts[5]
		const uint256DCRg99o = await CourtFarming_RoomLPStakeOEbvT2D.blockNumber.call({from: accounts[4]});
//		const uint256ptZ3k0S = await CourtFarming_RoomLPStakeOEbvT2D.unstake.call(uintEJZQfaD, boolCpntar8, {from: accounts[0]});
//		const uint256i2irgj = await CourtFarming_RoomLPStakeOEbvT2D.unstake.call(uintL4HP7FA, boolKaNKm2E, {from: accounts[4]});
//		const uint256PSC8ANx = await CourtFarming_RoomLPStakeOEbvT2D.unstake.call(uintp8EY1TQ, boolEKOOheB, {from: accounts[1]});
//		const uint256sKWEg1e = await CourtFarming_RoomLPStakeOEbvT2D.rewards.call(addressHSuTCuX, {from: accounts[4]});

		assert.equal(uint256DCRg99o, BigInt("1196"))
		await expect(CourtFarming_RoomLPStakeOEbvT2D.unstake.call(uintEJZQfaD, boolCpntar8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakemXwoOeA = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uint256bW9Igqy = await CourtFarming_RoomLPStakemXwoOeA.totalStaked.call({from: accounts[3]});
		const uint256ZtYiLv = await CourtFarming_RoomLPStakemXwoOeA.getCurrentTime.call({from: accounts[4]});
		const uint256PuqWEa = await CourtFarming_RoomLPStakemXwoOeA.totalStaked.call({from: accounts[4]});
		const uint256vOww4vc = await CourtFarming_RoomLPStakemXwoOeA.lastUpdateBlock.call({from: accounts[3]});
		const uint256wfbyjDF = await CourtFarming_RoomLPStakemXwoOeA.incvRewardInfo.call({from: accounts[3]});
		const uint256CD9xcCN = await CourtFarming_RoomLPStakemXwoOeA.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256CD9xcCN, BigInt("1196"))
		assert.equal(uint256PuqWEa, BigInt("0"))
		assert.equal(uint256ZtYiLv, BigInt("1630199824"))
		assert.equal(uint256bW9Igqy, BigInt("0"))
		assert.equal(uint256vOww4vc, BigInt("1196"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeIO3Muk = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintTphEEcO = BigInt("664")
		const uinte4BPJ41 = BigInt("729")
		const addressUO0D6Nh = accounts[1]
		const uint256VKURRXi = await CourtFarming_RoomLPStakeIO3Muk.blockNumber.call({from: accounts[1]});
		const uint256nmDEDlH = await CourtFarming_RoomLPStakeIO3Muk.expectedRewardsToday.call(uintTphEEcO, {from: accounts[0]});
		const boolRxcY5aS = await CourtFarming_RoomLPStakeIO3Muk.stakeIncvRewards.call(uinte4BPJ41, {from: accounts[0]});
		const uint256IDFg9DV = await CourtFarming_RoomLPStakeIO3Muk.incvRewardInfo.call({from: accounts[0]});
		const addressQvevLcw = await CourtFarming_RoomLPStakeIO3Muk.getBeneficiaryInfo.call(addressUO0D6Nh, {from: accounts[2]});
		const uint256BHHcRuZ = await CourtFarming_RoomLPStakeIO3Muk.totalStaked.call({from: accounts[3]});

		assert.equal(boolRxcY5aS, false)
		assert.equal(uint256BHHcRuZ, BigInt("0"))
		assert.equal(uint256VKURRXi, BigInt("1196"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeuz9678O = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressbIQgX9i = accounts[3]
		const uinthctBPX = BigInt("1075")
		const uintAhtskj4 = BigInt("419")
		const uintfCdtOJk = BigInt("1259")
		const addressPXJDtdB = accounts[3]
		const uint256z47fACq = await CourtFarming_RoomLPStakeuz9678O.incvRewardClaim.call({from: accounts[5]});
		const addresspJGWoYK = await CourtFarming_RoomLPStakeuz9678O.updateReward.call(addressbIQgX9i, {from: accounts[4]});
//		await CourtFarming_RoomLPStakeuz9678O.changeStakeParameters.call(uintfCdtOJk, uintAhtskj4, uinthctBPX, {from: accounts[0]});
//		const uint256VYbi5Y = await CourtFarming_RoomLPStakeuz9678O.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256gNnZtzz = await CourtFarming_RoomLPStakeuz9678O.blockNumber.call({from: accounts[3]});
//		const addressLAIOIzc = await CourtFarming_RoomLPStakeuz9678O.updateReward.call(addressPXJDtdB, {from: accounts[2]});

		assert.equal(uint256z47fACq, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeuz9678O.changeStakeParameters.call(uintfCdtOJk, uintAhtskj4, uinthctBPX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeuz9678O = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressmm0rZ9L = accounts[3]
		const addresshvrNQv1 = accounts[2]
		const address1ddEtv = accounts[2]
		const uint256z47fACq = await CourtFarming_RoomLPStakeuz9678O.incvRewardClaim.call({from: accounts[5]});
		const addresspJGWoYK = await CourtFarming_RoomLPStakeuz9678O.updateReward.call(addressmm0rZ9L, {from: accounts[4]});
		const uint256VYbi5Y = await CourtFarming_RoomLPStakeuz9678O.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gNnZtzz = await CourtFarming_RoomLPStakeuz9678O.blockNumber.call({from: accounts[3]});
		const uint256LkpEZY = await CourtFarming_RoomLPStakeuz9678O.incvRewardInfo.call({from: accounts[1]});
//		const addressHDNiwrW = await CourtFarming_RoomLPStakeuz9678O.setCourtStake.call(addresshvrNQv1, {from: accounts[2]});
//		const uint256FMuDY9S = await CourtFarming_RoomLPStakeuz9678O.blockNumber.call({from: accounts[5]});
//		const uint256fy8FOx5 = await CourtFarming_RoomLPStakeuz9678O.incvRewardClaim.call({from: accounts[1]});
//		const addressLAIOIzc = await CourtFarming_RoomLPStakeuz9678O.updateReward.call(address1ddEtv, {from: accounts[2]});

		assert.equal(uint256VYbi5Y, BigInt("0"))
		assert.equal(uint256gNnZtzz, BigInt("1196"))
		assert.equal(uint256z47fACq, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeuz9678O.setCourtStake.call(addresshvrNQv1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeIO3Muk = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintfwdBed = BigInt("1973")
		const uintKI5oPse = BigInt("213")
		const uintM3RTrG3 = BigInt("1910")
		const uintrGnd7xA = BigInt("729")
		const uint256VKURRXi = await CourtFarming_RoomLPStakeIO3Muk.blockNumber.call({from: accounts[1]});
//		await CourtFarming_RoomLPStakeIO3Muk.changeStakeParameters.call(uintM3RTrG3, uintKI5oPse, uintfwdBed, {from: accounts[1]});
//		const boolRxcY5aS = await CourtFarming_RoomLPStakeIO3Muk.stakeIncvRewards.call(uintrGnd7xA, {from: accounts[0]});
//		const uint256IDFg9DV = await CourtFarming_RoomLPStakeIO3Muk.incvRewardInfo.call({from: accounts[0]});

		assert.equal(uint256VKURRXi, BigInt("1196"))
		await expect(CourtFarming_RoomLPStakeIO3Muk.changeStakeParameters.call(uintM3RTrG3, uintKI5oPse, uintfwdBed, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZAWlEXd = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintwrNdLxc = BigInt("0")
		const boolRXHgywX = false
		const uintAHJgIhc = BigInt("1983")
		const uint256YlAqDts = await CourtFarming_RoomLPStakeZAWlEXd.stake.call(uintwrNdLxc, {from: accounts[1]});
//		const uint256TzQGKUd = await CourtFarming_RoomLPStakeZAWlEXd.unstake.call(uintAHJgIhc, boolRXHgywX, {from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeZAWlEXd.unstake.call(uintAHJgIhc, boolRXHgywX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeIO3Muk = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintOBy7tpY = BigInt("0")
		const uintwuUjsXY = BigInt("686")
		const addressm8dCPh = accounts[4]
		const boolKDiabWC = await CourtFarming_RoomLPStakeIO3Muk.stakeIncvRewards.call(uintOBy7tpY, {from: accounts[0]});
		const boolhMx8bIg = await CourtFarming_RoomLPStakeIO3Muk.stakeIncvRewards.call(uintwuUjsXY, {from: accounts[1]});
		const uint256Rbcf7ev = await CourtFarming_RoomLPStakeIO3Muk.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const addressIcqNjok = await CourtFarming_RoomLPStakeIO3Muk.updateReward.call(addressm8dCPh, {from: accounts[0]});

		assert.equal(boolKDiabWC, false)
		assert.equal(boolhMx8bIg, false)
		assert.equal(uint256Rbcf7ev, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakelaBZVMN = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const boolXa5l0tv = false
		const uintHk26PCL = BigInt("0")
		const uint256blvjbi8 = await CourtFarming_RoomLPStakelaBZVMN.unstake.call(uintHk26PCL, boolXa5l0tv, {from: accounts[0]});
	});
})