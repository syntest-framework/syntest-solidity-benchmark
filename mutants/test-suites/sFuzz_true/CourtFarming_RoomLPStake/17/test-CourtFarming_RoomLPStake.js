const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeUuJktZu = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintqwGjXBX = BigInt("441")
		const addressywdegwD = accounts[0]
		const uint256sbw3bR = await CourtFarming_RoomLPStakeUuJktZu.totalStaked.call({from: accounts[1]});
		const uint256GjE0oHE = await CourtFarming_RoomLPStakeUuJktZu.expectedRewardsToday.call(uintqwGjXBX, {from: accounts[4]});
		const addressotKTwVr = await CourtFarming_RoomLPStakeUuJktZu.updateReward.call(addressywdegwD, {from: accounts[4]});

		assert.equal(uint256sbw3bR, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZW1Xzes = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressd3nPRAX = accounts[3]
		const uintiKQQK8 = BigInt("323")
		const uintVwMVmfd = BigInt("1006")
		const uint256qbdgEr = await CourtFarming_RoomLPStakeZW1Xzes.balanceOf.call(addressd3nPRAX, {from: accounts[0]});
//		const uint256LjHn4Y = await CourtFarming_RoomLPStakeZW1Xzes.stake.call(uintiKQQK8, {from: accounts[3]});
//		const boolm6vW7h = await CourtFarming_RoomLPStakeZW1Xzes.stakeIncvRewards.call(uintVwMVmfd, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256aRRoB5Y = await CourtFarming_RoomLPStakeZW1Xzes.lastUpdateBlock.call({from: accounts[2]});

		assert.equal(uint256qbdgEr, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeZW1Xzes.stake.call(uintiKQQK8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakel3avxL = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressQfFmau0 = accounts[0]
		const addresshgqDpUA = accounts[1]
		const uint256fm0vi3E = await CourtFarming_RoomLPStakel3avxL.rewards.call(addressQfFmau0, {from: accounts[2]});
		const uint256AbU7C1e = await CourtFarming_RoomLPStakel3avxL.incvRewardClaim.call({from: accounts[0]});
		const uint256LC6pShP = await CourtFarming_RoomLPStakel3avxL.blockNumber.call({from: accounts[0]});
		const uint256H5LpeR7 = await CourtFarming_RoomLPStakel3avxL.rewards.call(addresshgqDpUA, {from: accounts[0]});
		const uint256suFZRyK = await CourtFarming_RoomLPStakel3avxL.totalStaked.call({from: accounts[1]});

		assert.equal(uint256AbU7C1e, BigInt("0"))
		assert.equal(uint256LC6pShP, BigInt("1236"))
		assert.equal(uint256suFZRyK, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakehItyh8Q = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintpFItSzx = BigInt("901")
		const addressRJGAg0t = "0x0000000000000000000000000000000000000001"
		const addressO85yTPB = accounts[3]
		const uintpCiV3Uz = BigInt("241")
		const uint256O86Vpky = await CourtFarming_RoomLPStakehItyh8Q.expectedRewardsToday.call(uintpFItSzx, {from: accounts[3]});
		const uint256NPSsCXR = await CourtFarming_RoomLPStakehItyh8Q.balanceOf.call(addressRJGAg0t, {from: accounts[2]});
//		const addressDk6ESsf = await CourtFarming_RoomLPStakehItyh8Q.setCourtStake.call(addressO85yTPB, {from: accounts[1]});
//		const boolViV8RV = await CourtFarming_RoomLPStakehItyh8Q.stakeIncvRewards.call(uintpCiV3Uz, {from: accounts[3]});

		assert.equal(uint256NPSsCXR, BigInt("0"))
		await expect(CourtFarming_RoomLPStakehItyh8Q.setCourtStake.call(addressO85yTPB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakecIAiha = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolIsUE3gv = false
		const uintm0AlUlO = BigInt("240")
//		const uint256RPlKLe6 = await CourtFarming_RoomLPStakecIAiha.unstake.call(uintm0AlUlO, boolIsUE3gv, {from: accounts[5]});
//		const uint256WQpZlZk = await CourtFarming_RoomLPStakecIAiha.blockNumber.call({from: accounts[5]});
//		const uint256B9sGEh = await CourtFarming_RoomLPStakecIAiha.totalStaked.call({from: accounts[0]});
//		const uint256Ipdz1yV = await CourtFarming_RoomLPStakecIAiha.incvRewardInfo.call({from: accounts[1]});

		await expect(CourtFarming_RoomLPStakecIAiha.unstake.call(uintm0AlUlO, boolIsUE3gv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakel3qKaNd = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintFwuEuRW = BigInt("1073")
		const uinthku0n1t = BigInt("427")
		const addressZ5GGSw = accounts[3]
		const boolNxePwoO = await CourtFarming_RoomLPStakel3qKaNd.stakeIncvRewards.call(uintFwuEuRW, {from: accounts[0]});
//		const uint256bI8yvy0 = await CourtFarming_RoomLPStakel3qKaNd.stake.call(uinthku0n1t, {from: accounts[2]});
//		const addressrECYfp9 = await CourtFarming_RoomLPStakel3qKaNd.updateReward.call(addressZ5GGSw, {from: accounts[5]});
//		const uint256Y9M33Kb = await CourtFarming_RoomLPStakel3qKaNd.getCurrentTime.call({from: accounts[2]});

		assert.equal(boolNxePwoO, false)
		await expect(CourtFarming_RoomLPStakel3qKaNd.stake.call(uinthku0n1t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakex7MKzBI = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressrCTH1Me = accounts[3]
		const uintUcw5cyp = BigInt("655")
		const uint256X6IbwZD = await CourtFarming_RoomLPStakex7MKzBI.lastUpdateBlock.call({from: accounts[2]});
		const addressa6IRVZl = await CourtFarming_RoomLPStakex7MKzBI.updateReward.call(addressrCTH1Me, {from: accounts[1]});
		const uint256vLODZYI = await CourtFarming_RoomLPStakex7MKzBI.expectedRewardsToday.call(uintUcw5cyp, {from: accounts[0]});
		const uint256lGVQdR = await CourtFarming_RoomLPStakex7MKzBI.lastUpdateBlock.call({from: accounts[4]});

		assert.equal(uint256X6IbwZD, BigInt("1236"))
		assert.equal(uint256lGVQdR, BigInt("1236"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejjeEVhd = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressp1ekpd6 = accounts[4]
		const uintr5iT0Y = BigInt("1396")
		const boolMxACJUi = false
		const uintM8bxkae = BigInt("456")
		const uintksY6mA = BigInt("929")
//		const addressofIdbe = await CourtFarming_RoomLPStakejjeEVhd.setCourtStake.call(addressp1ekpd6, {from: accounts[5]});
//		const boollhiOW98 = await CourtFarming_RoomLPStakejjeEVhd.stakeIncvRewards.call(uintr5iT0Y, {from: accounts[0]});
//		const uint256WTtkcBa = await CourtFarming_RoomLPStakejjeEVhd.unstake.call(uintM8bxkae, boolMxACJUi, {from: accounts[4]});
//		const uint256JKtAGF9 = await CourtFarming_RoomLPStakejjeEVhd.expectedRewardsToday.call(uintksY6mA, {from: accounts[2]});
//		const uint256Gssd6k = await CourtFarming_RoomLPStakejjeEVhd.lastUpdateBlock.call({from: accounts[2]});
//		const uint256mYfCP2g = await CourtFarming_RoomLPStakejjeEVhd.getCurrentTime.call({from: accounts[2]});

		await expect(CourtFarming_RoomLPStakejjeEVhd.setCourtStake.call(addressp1ekpd6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeN6CGlA2 = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uinttBrORgL = BigInt("724")
		const uintCNDtOqg = BigInt("1823")
		const uintiJp1iun = BigInt("1307")
		const addressI4iafX4 = accounts[1]
		const addressZzbbCHH = accounts[0]
		const uint256Ae6MBBF = await CourtFarming_RoomLPStakeN6CGlA2.lastUpdateBlock.call({from: accounts[5]});
		const uint256eUKF6v1 = await CourtFarming_RoomLPStakeN6CGlA2.blockNumber.call({from: accounts[2]});
//		await CourtFarming_RoomLPStakeN6CGlA2.changeStakeParameters.call(uintiJp1iun, uintCNDtOqg, uinttBrORgL, {from: accounts[1]});
//		const uint256LdZAzep = await CourtFarming_RoomLPStakeN6CGlA2.rewards.call(addressI4iafX4, {from: accounts[2]});
//		const uint256aILsuT = await CourtFarming_RoomLPStakeN6CGlA2.incvRewardClaim.call({from: accounts[1]});
//		const uint256s37YlIp = await CourtFarming_RoomLPStakeN6CGlA2.rewards.call(addressZzbbCHH, {from: accounts[4]});

		assert.equal(uint256Ae6MBBF, BigInt("1236"))
		assert.equal(uint256eUKF6v1, BigInt("1236"))
		await expect(CourtFarming_RoomLPStakeN6CGlA2.changeStakeParameters.call(uintiJp1iun, uintCNDtOqg, uinttBrORgL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakel3avxL = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressPI1txn = accounts[0]
		const addressgl4KOyT = accounts[2]
		const uint256aJZIv9r = await CourtFarming_RoomLPStakel3avxL.incvRewardInfo.call({from: accounts[4]});
		const uint256fm0vi3E = await CourtFarming_RoomLPStakel3avxL.rewards.call(addressPI1txn, {from: accounts[2]});
		const uint256AbU7C1e = await CourtFarming_RoomLPStakel3avxL.incvRewardClaim.call({from: accounts[0]});
		const addressSRAfgsb = await CourtFarming_RoomLPStakel3avxL.updateReward.call(addressgl4KOyT, {from: accounts[5]});
		const uint256LC6pShP = await CourtFarming_RoomLPStakel3avxL.blockNumber.call({from: accounts[0]});
		const uint256suFZRyK = await CourtFarming_RoomLPStakel3avxL.totalStaked.call({from: accounts[1]});

		assert.equal(uint256AbU7C1e, BigInt("0"))
		assert.equal(uint256LC6pShP, BigInt("1236"))
		assert.equal(uint256suFZRyK, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZopj2B = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintCPvxpAn = BigInt("160")
		const uintPLjOe2H = BigInt("434")
		const uintz044tMO = BigInt("151")
		const addressic0qttV = accounts[5]
//		await CourtFarming_RoomLPStakeZopj2B.changeStakeParameters.call(uintz044tMO, uintPLjOe2H, uintCPvxpAn, {from: accounts[4]});
//		const uint256usRF8iZ = await CourtFarming_RoomLPStakeZopj2B.lastUpdateBlock.call({from: accounts[0]});
//		const addressFlPRXL7 = await CourtFarming_RoomLPStakeZopj2B.setCourtStake.call(addressic0qttV, {from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeZopj2B.changeStakeParameters.call(uintz044tMO, uintPLjOe2H, uintCPvxpAn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakevUnU2c = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const boolOaxiwEQ = false
		const uintJKIXOcL = BigInt("1999")
		const uint256IKrIL05 = await CourtFarming_RoomLPStakevUnU2c.unstake.call(uintJKIXOcL, boolOaxiwEQ, {from: accounts[4]});
		const uint256PAz1Zae = await CourtFarming_RoomLPStakevUnU2c.totalStaked.call({from: accounts[2]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakel3avxL = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressmzLpo62 = "0x0000000000000000000000000000000000000001"
		const addressQBbla23 = accounts[1]
		const addresssOUILbZ = accounts[4]
		const addressf5daLK2 = await CourtFarming_RoomLPStakel3avxL.updateReward.call(addressmzLpo62, {from: accounts[1]});
		const uint256fm0vi3E = await CourtFarming_RoomLPStakel3avxL.rewards.call(addressQBbla23, {from: accounts[2]});
		const addressMMoxpa0 = await CourtFarming_RoomLPStakel3avxL.getBeneficiaryInfo.call(addresssOUILbZ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakecIAiha = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintMvWtzCX = BigInt("0")
		const uint2565gMJSy = await CourtFarming_RoomLPStakecIAiha.stake.call(uintMvWtzCX, {from: accounts[3]});
		const uint256ZY84QKg = await CourtFarming_RoomLPStakecIAiha.getCurrentTime.call({from: accounts[1]});

		assert.equal(uint256ZY84QKg, BigInt("1630199885"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakel3avxL = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressaZOnxhS = accounts[4]
		const boolRorWe2r = true
		const uintKHYxGkt = BigInt("0")
		const addressz1jruNu = await CourtFarming_RoomLPStakel3avxL.updateReward.call(addressaZOnxhS, {from: accounts[4]});
		const uint256pKlpFB9 = await CourtFarming_RoomLPStakel3avxL.unstake.call(uintKHYxGkt, boolRorWe2r, {from: accounts[1]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakel3avxL = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintPxthKWP = BigInt("1629")
		const uintPjYJN5x = BigInt("1724")
		const uintgrd37NN = BigInt("0")
		const uint256PzpXm6 = await CourtFarming_RoomLPStakel3avxL.expectedRewardsToday.call(uintPxthKWP, {from: accounts[2]});
		const uint256BZree1 = await CourtFarming_RoomLPStakel3avxL.getCurrentTime.call({from: accounts[2]});
		const boolOlMXcxN = await CourtFarming_RoomLPStakel3avxL.stakeIncvRewards.call(uintPjYJN5x, {from: accounts[2]});
		const boolQJdyeeS = await CourtFarming_RoomLPStakel3avxL.stakeIncvRewards.call(uintgrd37NN, {from: accounts[2]});

		assert.equal(boolOlMXcxN, false)
		assert.equal(boolQJdyeeS, false)
		assert.equal(uint256BZree1, BigInt("1630199886"))
	});
})