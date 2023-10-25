const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingyRHtvEy = await LpStaking.new({from: accounts[2]});
		const boolm87UQ8s = false
		const byte89GKpJ = "0x031b20080b07120220000808030a0b1e1c070f121f090b0a1c071d0804120a1b"
		const byteY6JhCq = "0x150504150b0f100b1f0a14031f0702080410100c051d1c1d05081b0d011d1f11"
		const uintS0I6XS8 = BigInt("8")
		const uintchRJcEd = BigInt("1461")
		const uintGlnidCb = BigInt("1165")
		const addressq5kDnDm = accounts[3]
//		const boolTBgnIH4 = await LpStakingyRHtvEy.setEmergencyStop.call(boolm87UQ8s, {from: accounts[4]});
//		const uint256zCik33 = await LpStakingyRHtvEy.stakeWithPermit.call(uintGlnidCb, uintchRJcEd, uintS0I6XS8, byteY6JhCq, byte89GKpJ, {from: accounts[4]});
//		const addresst6jmzcq = await LpStakingyRHtvEy.updateIncome.call(addressq5kDnDm, {from: accounts[2]});

		await expect(LpStakingyRHtvEy.setEmergencyStop.call(boolm87UQ8s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinggShFKUK = await LpStaking.new({from: accounts[1]});
		const uinthJFtkZy = BigInt("499")
		const addressXGjMn5h = "0x0000000000000000000000000000000000000001"
//		const uint256axq4qIb = await LpStakinggShFKUK.lastTimeRewardApplicable.call({from: accounts[2]});
//		await LpStakinggShFKUK.getReward.call({from: accounts[1]});
//		const uint256uuYPcKh = await LpStakinggShFKUK.withdraw.call(uinthJFtkZy, {from: accounts[4]});
//		await LpStakinggShFKUK.nonEmergencyStop.call({from: accounts[4]});
//		const addressDK5O4pk = await LpStakinggShFKUK.updateIncome.call(addressXGjMn5h, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakinggShFKUK.lastTimeRewardApplicable.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingWS2vHLR = await LpStaking.new({from: accounts[1]});
		const addresswG9WLHT = accounts[0]
		const addressqk8ZEUl = accounts[4]
		const addressdOyxMaY = accounts[2]
		const addresstpggCaC = accounts[1]
		const addressAvFFmo = accounts[1]
		const uintqJ6Ov4o = BigInt("574")
		const addressYrdToif = accounts[1]
//		const addressYaHqqBz = await LpStakingWS2vHLR.updateReward.call(addresswG9WLHT, {from: accounts[1]});
//		await LpStakingWS2vHLR.getReward.call({from: accounts[3]});
//		const addressghAUEJT = await LpStakingWS2vHLR.initialize.call(addressAvFFmo, addresstpggCaC, addressdOyxMaY, addressqk8ZEUl, {from: accounts[4]});
//		const uint256YSnzyCR = await LpStakingWS2vHLR.withdraw.call(uintqJ6Ov4o, {from: accounts[3]});
//		const addressmD8YFNE = await LpStakingWS2vHLR.updateReward.call(addressYrdToif, {from: accounts[5]});

		await expect(LpStakingWS2vHLR.updateReward.call(addresswG9WLHT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingnUlBMfX = await LpStaking.new({from: accounts[2]});
		const uintxCYWn9e = BigInt("245")
		const uintNljT3dO = BigInt("700")
		const addressSDpgLre = accounts[2]
		const byteYN9aaBt = "0x0905071f1b1c1e0f20181b151404200b060d1011170313071d071b0e1d060409"
		const byteNdHGTc7 = "0x1e01081d17040213041d06020919171c0c181e121511021f1c0117100c090618"
		const uintvsm08gW = BigInt("127")
		const uintJ868yJ9 = BigInt("1298")
		const uintRoRBpUP = BigInt("1090")
//		const uint256CGg5TwM = await LpStakingnUlBMfX.stake.call(uintxCYWn9e, {from: accounts[0]});
//		const addressZW1f2hS = await LpStakingnUlBMfX.inCaseTokensGetStuck.call(addressSDpgLre, uintNljT3dO, {from: accounts[2]});
//		const uint256Kz5ix9c = await LpStakingnUlBMfX.stakeWithPermit.call(uintRoRBpUP, uintJ868yJ9, uintvsm08gW, byteNdHGTc7, byteYN9aaBt, {from: accounts[2]});
//		await LpStakingnUlBMfX.lpRewardRateChanged.call({from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingnUlBMfX.getReward.call({from: accounts[1]});

		await expect(LpStakingnUlBMfX.stake.call(uintxCYWn9e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingXZb6po5 = await LpStaking.new({from: accounts[3]});
		const addressmw78Ah2 = "0x0000000000000000000000000000000000000001"
		const addressrCBGfUT = "0x0000000000000000000000000000000000000001"
//		const uint256yg8vxun = await LpStakingXZb6po5.incomeEarned.call(addressmw78Ah2, {from: accounts[0]});
//		const uint256RpLVsIn = await LpStakingXZb6po5.incomePerToken.call({from: accounts[5]});
//		const addresshJEW7ln = await LpStakingXZb6po5.transferOwnership.call(addressrCBGfUT, {from: accounts[1]});

		await expect(LpStakingXZb6po5.incomeEarned.call(addressmw78Ah2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingAQlBnRI = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressa9TsIyV = accounts[3]
		await LpStakingAQlBnRI.onlyOwner.call({from: accounts[3]});
		const uint256RNGMzKy = await LpStakingAQlBnRI.incomeEarned.call(addressa9TsIyV, {from: accounts[3]});
		const uint256GEtEgm5 = await LpStakingAQlBnRI.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256f9URZpT = await LpStakingAQlBnRI.incomePerToken.call({from: accounts[3]});
	});

	it('test for LpStaking', async () => {
		const LpStakingRyeZdhj = await LpStaking.new({from: accounts[2]});
		const addressB253Bj4 = accounts[4]
		const boolM277dpl = true
		const addressUMAi8SO = accounts[3]
//		const uint2562grLKP = await LpStakingRyeZdhj.getCurIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingRyeZdhj.nonEmergencyStop.call({from: accounts[2]});
//		const addressnGUU3t7 = await LpStakingRyeZdhj.updateReward.call(addressB253Bj4, {from: accounts[3]});
//		await LpStakingRyeZdhj.getReward.call({from: accounts[3]});
//		const boolSPICKA0 = await LpStakingRyeZdhj.setEmergencyStop.call(boolM277dpl, {from: accounts[5]});
//		const uint256R9JluNA = await LpStakingRyeZdhj.rewardEarned.call(addressUMAi8SO, {from: accounts[2]});

		await expect(LpStakingRyeZdhj.getCurIncomeRate.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingENPQwvD = await LpStaking.new({from: accounts[3]});
		const addressnkfOxYw = accounts[2]
		const addressawXUqrO = accounts[4]
		const addressLrwTbX4 = accounts[0]
		const addresspJBrVC = accounts[1]
//		await LpStakingENPQwvD.exit.call({from: accounts[3]});
//		const uint256aFRC6H1 = await LpStakingENPQwvD.lastTimeRewardApplicable.call({from: accounts[4]});
//		const addressaE1TtZ9 = await LpStakingENPQwvD.initialize.call(addresspJBrVC, addressLrwTbX4, addressawXUqrO, addressnkfOxYw, {from: accounts[2]});
//		await LpStakingENPQwvD.onlyOwner.call({from: accounts[2]});

		await expect(LpStakingENPQwvD.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingyRHtvEy = await LpStaking.new({from: accounts[2]});
		const uintJp5GPWW = BigInt("106")
		const boolm87UQ8s = false
		const addressztFsKA = accounts[3]
		const bytetRAp90i = "0x031b20080b07120220000808030a0b1e1c070f121f090b0a1c071d0804120a1b"
		const bytenIhqk6W = "0x150504150b0f100b1f0a14031f0702080410100c051d1c1d05081b0d011d1f11"
		const uintjH5KKrW = BigInt("8")
		const uintKyHyYhr = BigInt("1461")
		const uintj89WbaT = BigInt("1165")
		const uintzMWY4HW = BigInt("1495")
		const addressdqcMkHZ = "0x0000000000000000000000000000000000000001"
		const addressgT9Ll7W = accounts[4]
		const uint256tQBEVIh = await LpStakingyRHtvEy.weiToSatoshi.call(uintJp5GPWW, {from: accounts[3]});
//		const boolTBgnIH4 = await LpStakingyRHtvEy.setEmergencyStop.call(boolm87UQ8s, {from: accounts[4]});
//		const uint256QMppmN0 = await LpStakingyRHtvEy.rewardEarned.call(addressztFsKA, {from: accounts[0]});
//		const uint256zCik33 = await LpStakingyRHtvEy.stakeWithPermit.call(uintj89WbaT, uintKyHyYhr, uintjH5KKrW, bytenIhqk6W, bytetRAp90i, {from: accounts[4]});
//		const addressl9dQjt = await LpStakingyRHtvEy.inCaseTokensGetStuck.call(addressdqcMkHZ, uintzMWY4HW, {from: accounts[4]});
//		const addresst6jmzcq = await LpStakingyRHtvEy.updateIncome.call(addressgT9Ll7W, {from: accounts[2]});

		assert.equal(uint256tQBEVIh, BigInt("0"))
		await expect(LpStakingyRHtvEy.setEmergencyStop.call(boolm87UQ8s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinggShFKUK = await LpStaking.new({from: accounts[1]});
		const addressqCU9hD = accounts[0]
		const uintyvmeOUY = BigInt("499")
		const addresss29SvJY = "0x0000000000000000000000000000000000000001"
		const uint256r6Rqb7S = await LpStakinggShFKUK.getUserAccumulatedWithdrawIncome.call(addressqCU9hD, {from: accounts[1]});
//		const uint256axq4qIb = await LpStakinggShFKUK.lastTimeRewardApplicable.call({from: accounts[2]});
//		await LpStakinggShFKUK.getReward.call({from: accounts[1]});
//		const uint256uuYPcKh = await LpStakinggShFKUK.withdraw.call(uintyvmeOUY, {from: accounts[4]});
//		await LpStakinggShFKUK.nonEmergencyStop.call({from: accounts[4]});
//		const addressDK5O4pk = await LpStakinggShFKUK.updateIncome.call(addresss29SvJY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256r6Rqb7S, BigInt("0"))
		await expect(LpStakinggShFKUK.lastTimeRewardApplicable.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingRyeZdhj = await LpStaking.new({from: accounts[2]});
		const addresskbDH1FK = accounts[4]
		const boolM277dpl = true
		const addressMCdOe6A = accounts[3]
		const uint256kevIlOc = await LpStakingRyeZdhj.rewardPerToken.call({from: accounts[5]});
//		const uint2562grLKP = await LpStakingRyeZdhj.getCurIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingRyeZdhj.nonEmergencyStop.call({from: accounts[2]});
//		await LpStakingRyeZdhj.getReward.call({from: accounts[2]});
//		const addressnGUU3t7 = await LpStakingRyeZdhj.updateReward.call(addresskbDH1FK, {from: accounts[3]});
//		await LpStakingRyeZdhj.getReward.call({from: accounts[3]});
//		const boolSPICKA0 = await LpStakingRyeZdhj.setEmergencyStop.call(boolM277dpl, {from: accounts[5]});
//		const uint256R9JluNA = await LpStakingRyeZdhj.rewardEarned.call(addressMCdOe6A, {from: accounts[2]});

		assert.equal(uint256kevIlOc, BigInt("0"))
		await expect(LpStakingRyeZdhj.getCurIncomeRate.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingQGlOLpy = await LpStaking.new({from: accounts[3]});
		const addressX63mrTB = accounts[1]
		const uinth0nyCBZ = BigInt("956")
		const uint256YVgh0HK = await LpStakingQGlOLpy.rewardPerToken.call({from: accounts[5]});
		const uint256IITO3gM = await LpStakingQGlOLpy.rewardEarned.call(addressX63mrTB, {from: accounts[4]});
//		await LpStakingQGlOLpy.lpIncomeRateChanged.call({from: accounts[1]});
//		const uint256rBoZKOv = await LpStakingQGlOLpy.withdraw.call(uinth0nyCBZ, {from: accounts[3]});

		assert.equal(uint256IITO3gM, BigInt("0"))
		assert.equal(uint256YVgh0HK, BigInt("0"))
		await expect(LpStakingQGlOLpy.lpIncomeRateChanged.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingRBgLsc6 = await LpStaking.new({from: accounts[1]});
		const addresstpn6SCz = accounts[1]
		const addressiuw3F7 = accounts[4]
		const addressXCPAWKN = accounts[3]
		const addressxnGALG = "0x0000000000000000000000000000000000000001"
		const addressw1TZVJI = accounts[2]
		const byteRD3NbRT = "0x000c130704121915020c001f0c111b1307090e1607140e1019181b081b11131d"
		const bytenUQiUTs = "0x18181c1206071f1417110706160f201e171c070c0403041f180e200417090611"
		const uintSfXY3S8 = BigInt("192")
		const uintFh5oKi = BigInt("1163")
		const uintUoWP8QL = BigInt("289")
		const uint256SVRWMZM = await LpStakingRBgLsc6.getUserAccumulatedWithdrawIncome.call(addresstpn6SCz, {from: accounts[2]});
		const addressRfcRvNb = await LpStakingRBgLsc6.initialize.call(addressw1TZVJI, addressxnGALG, addressXCPAWKN, addressiuw3F7, {from: accounts[1]});
//		await LpStakingRBgLsc6.getReward.call({from: accounts[5]});
//		const uint256MzEGdXk = await LpStakingRBgLsc6.stakeWithPermit.call(uintUoWP8QL, uintFh5oKi, uintSfXY3S8, bytenUQiUTs, byteRD3NbRT, {from: accounts[3]});

		assert.equal(uint256SVRWMZM, BigInt("0"))
		await expect(LpStakingRBgLsc6.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})