const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeOvtsgIa = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressfFWZCw3 = accounts[3]
		const uintxjyifSq = BigInt("1072")
		const uintMmJWqxo = BigInt("1188")
		const uintGo7BcEk = BigInt("1867")
		const uintuPMNtkv = BigInt("561")
		const uint256wL11lo = await CourtFarming_RoomLPStakeOvtsgIa.rewards.call(addressfFWZCw3, {from: accounts[2]});
		const uint256vZefvnM = await CourtFarming_RoomLPStakeOvtsgIa.expectedRewardsToday.call(uintxjyifSq, {from: accounts[5]});
//		await CourtFarming_RoomLPStakeOvtsgIa.changeStakeParameters.call(uintuPMNtkv, uintGo7BcEk, uintMmJWqxo, {from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeOvtsgIa.changeStakeParameters.call(uintuPMNtkv, uintGo7BcEk, uintMmJWqxo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakelDj0KN9 = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxYC5tJ4 = BigInt("306")
		const uintePK2FEn = BigInt("1967")
		const uint256Q18hmZ = await CourtFarming_RoomLPStakelDj0KN9.stake.call(uintxYC5tJ4, {from: accounts[0]});
		const uint256bM4KDHy = await CourtFarming_RoomLPStakelDj0KN9.stake.call(uintePK2FEn, {from: accounts[3]});
		const uint256WAOZPGN = await CourtFarming_RoomLPStakelDj0KN9.getCurrentTime.call({from: accounts[0]});
		const uint256Pmkxtlf = await CourtFarming_RoomLPStakelDj0KN9.incvRewardClaim.call({from: accounts[2]});
		const uint256AT6q7dV = await CourtFarming_RoomLPStakelDj0KN9.getCurrentTime.call({from: accounts[3]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeJT81H3J = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const boolXZySCVb = true
		const uintloHHfEo = BigInt("375")
		const addressAFDaGNB = accounts[3]
//		const uint256QwF2kN6 = await CourtFarming_RoomLPStakeJT81H3J.unstake.call(uintloHHfEo, boolXZySCVb, {from: accounts[3]});
//		const uint256foF70ER = await CourtFarming_RoomLPStakeJT81H3J.rewards.call(addressAFDaGNB, {from: accounts[5]});

		await expect(CourtFarming_RoomLPStakeJT81H3J.unstake.call(uintloHHfEo, boolXZySCVb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekfiH9OD = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintsLxTJTx = BigInt("1794")
		const addressRreQfTV = accounts[5]
		const uint256u9gYfx3 = await CourtFarming_RoomLPStakekfiH9OD.blockNumber.call({from: accounts[1]});
		const uint256fiwOp3P = await CourtFarming_RoomLPStakekfiH9OD.incvRewardInfo.call({from: accounts[4]});
		const boolHkYhxZj = await CourtFarming_RoomLPStakekfiH9OD.stakeIncvRewards.call(uintsLxTJTx, {from: accounts[3]});
		const uint256pNLLd3M = await CourtFarming_RoomLPStakekfiH9OD.balanceOf.call(addressRreQfTV, {from: accounts[0]});

		assert.equal(boolHkYhxZj, false)
		assert.equal(uint256pNLLd3M, BigInt("0"))
		assert.equal(uint256u9gYfx3, BigInt("1193"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeaITBEFq = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintk7da2wc = BigInt("1663")
		const uintaTZJa4n = BigInt("942")
		const uints0tQqyE = BigInt("1162")
		const uint256mdPpywk = await CourtFarming_RoomLPStakeaITBEFq.getCurrentTime.call({from: accounts[4]});
		const uint256YHbldr1 = await CourtFarming_RoomLPStakeaITBEFq.incvRewardInfo.call({from: accounts[1]});
		const boolzvolnhG = await CourtFarming_RoomLPStakeaITBEFq.stakeIncvRewards.call(uintk7da2wc, {from: accounts[1]});
		const boolxf8md8z = await CourtFarming_RoomLPStakeaITBEFq.stakeIncvRewards.call(uintaTZJa4n, {from: accounts[3]});
		const uint256LCYzres = await CourtFarming_RoomLPStakeaITBEFq.expectedRewardsToday.call(uints0tQqyE, {from: accounts[1]});

		assert.equal(boolxf8md8z, false)
		assert.equal(boolzvolnhG, false)
		assert.equal(uint256mdPpywk, BigInt("1630199758"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeQCxPm9f = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintfjAc5yt = BigInt("882")
		const uint256oQ0PQUP = await CourtFarming_RoomLPStakeQCxPm9f.expectedRewardsToday.call(uintfjAc5yt, {from: accounts[0]});
		const uint256O41QyWY = await CourtFarming_RoomLPStakeQCxPm9f.blockNumber.call({from: accounts[3]});
		const uint256oHeUjZ = await CourtFarming_RoomLPStakeQCxPm9f.incvRewardInfo.call({from: accounts[2]});
		const uint256ST1LoT = await CourtFarming_RoomLPStakeQCxPm9f.totalStaked.call({from: accounts[1]});

		assert.equal(uint256O41QyWY, BigInt("1193"))
		assert.equal(uint256ST1LoT, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejr6BSa7 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uint256qrIkIK1 = await CourtFarming_RoomLPStakejr6BSa7.incvRewardInfo.call({from: accounts[1]});
		const uint256OyEgiI2 = await CourtFarming_RoomLPStakejr6BSa7.lastUpdateBlock.call({from: accounts[4]});
		const uint256PEjUEAj = await CourtFarming_RoomLPStakejr6BSa7.incvRewardInfo.call({from: accounts[4]});
		const uint256Zxaf3dh = await CourtFarming_RoomLPStakejr6BSa7.incvRewardClaim.call({from: accounts[0]});

		assert.equal(uint256OyEgiI2, BigInt("1193"))
		assert.equal(uint256Zxaf3dh, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeBwnF9Nw = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintOElC0k = BigInt("612")
		const addressKJszHa = accounts[1]
		const boolORJvuqt = false
		const uintCheeJL = BigInt("2033")
		const addressZF2fSOl = accounts[1]
		const uintxSIYujn = BigInt("738")
		const uintV0yojdG = BigInt("1293")
		const uintHdfxClw = BigInt("360")
		const uintEoPximb = BigInt("411")
		const boolJlJjbHz = await CourtFarming_RoomLPStakeBwnF9Nw.stakeIncvRewards.call(uintOElC0k, {from: accounts[2]});
		const addresss7qAFhd = await CourtFarming_RoomLPStakeBwnF9Nw.getBeneficiaryInfo.call(addressKJszHa, {from: accounts[2]});
//		const uint256ToqgeQq = await CourtFarming_RoomLPStakeBwnF9Nw.unstake.call(uintCheeJL, boolORJvuqt, {from: accounts[0]});
//		const addressS5zOzJ = await CourtFarming_RoomLPStakeBwnF9Nw.setCourtStake.call(addressZF2fSOl, {from: accounts[1]});
//		await CourtFarming_RoomLPStakeBwnF9Nw.changeStakeParameters.call(uintHdfxClw, uintV0yojdG, uintxSIYujn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBvM8L5e = await CourtFarming_RoomLPStakeBwnF9Nw.stakeIncvRewards.call(uintEoPximb, {from: accounts[3]});
//		const uint256e44aykO = await CourtFarming_RoomLPStakeBwnF9Nw.getCurrentTime.call({from: accounts[3]});

		assert.equal(boolJlJjbHz, false)
		await expect(CourtFarming_RoomLPStakeBwnF9Nw.unstake.call(uintCheeJL, boolORJvuqt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejr6BSa7 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintrSsuirw = BigInt("1227")
		const uint256qrIkIK1 = await CourtFarming_RoomLPStakejr6BSa7.incvRewardInfo.call({from: accounts[1]});
		const uint256kmFliXe = await CourtFarming_RoomLPStakejr6BSa7.incvRewardInfo.call({from: accounts[2]});
//		const uint256wICadS = await CourtFarming_RoomLPStakejr6BSa7.stake.call(uintrSsuirw, {from: accounts[2]});
//		const uint256OyEgiI2 = await CourtFarming_RoomLPStakejr6BSa7.lastUpdateBlock.call({from: accounts[4]});
//		const uint256Zxaf3dh = await CourtFarming_RoomLPStakejr6BSa7.incvRewardClaim.call({from: accounts[0]});

		await expect(CourtFarming_RoomLPStakejr6BSa7.stake.call(uintrSsuirw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakegckkt1 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressZe17jwt = accounts[4]
		const addressJLdG380 = "0x0000000000000000000000000000000000000001"
		const uintQDDxzMA = BigInt("1857")
		const boole3S6dN = true
		const uintP0dG69o = BigInt("1842")
		const uint256qOC4xS5 = await CourtFarming_RoomLPStakegckkt1.incvRewardClaim.call({from: accounts[2]});
//		const addressMNVo9E5 = await CourtFarming_RoomLPStakegckkt1.setCourtStake.call(addressZe17jwt, {from: accounts[2]});
//		const uint256jLdUGiD = await CourtFarming_RoomLPStakegckkt1.rewards.call(addressJLdG380, {from: accounts[5]});
//		const uint2561O8kor = await CourtFarming_RoomLPStakegckkt1.stake.call(uintQDDxzMA, {from: accounts[0]});
//		const uint256DbhVFTu = await CourtFarming_RoomLPStakegckkt1.unstake.call(uintP0dG69o, boole3S6dN, {from: accounts[0]});
//		const uint256r1qjqd = await CourtFarming_RoomLPStakegckkt1.blockNumber.call({from: accounts[4]});

		assert.equal(uint256qOC4xS5, BigInt("0"))
		await expect(CourtFarming_RoomLPStakegckkt1.setCourtStake.call(addressZe17jwt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeJT81H3J = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressxjKipKj = accounts[0]
		const uintTFkdXQU = BigInt("1105")
		const addresskq0cxbP = accounts[5]
		const uint256oaPupn8 = await CourtFarming_RoomLPStakeJT81H3J.incvRewardInfo.call({from: accounts[4]});
		const uint256tL8DOxD = await CourtFarming_RoomLPStakeJT81H3J.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressuPEmaT = await CourtFarming_RoomLPStakeJT81H3J.setCourtStake.call(addressxjKipKj, {from: accounts[1]});
//		const uint256aftUzwJ = await CourtFarming_RoomLPStakeJT81H3J.expectedRewardsToday.call(uintTFkdXQU, {from: accounts[3]});
//		const uint256foF70ER = await CourtFarming_RoomLPStakeJT81H3J.rewards.call(addresskq0cxbP, {from: accounts[5]});

		assert.equal(uint256tL8DOxD, BigInt("1630199770"))
		await expect(CourtFarming_RoomLPStakeJT81H3J.setCourtStake.call(addressxjKipKj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejr6BSa7 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintZrl2bsH = BigInt("0")
		const uintVsFhLSJ = BigInt("442")
		const uintUU6aKe = BigInt("1551")
		const uintceKv7I2 = BigInt("1326")
		const uintS8lpsRt = BigInt("481")
		const booliPHqtvT = await CourtFarming_RoomLPStakejr6BSa7.stakeIncvRewards.call(uintZrl2bsH, {from: accounts[0]});
//		await CourtFarming_RoomLPStakejr6BSa7.changeStakeParameters.call(uintceKv7I2, uintUU6aKe, uintVsFhLSJ, {from: accounts[0]});
//		const boolBdMc1FF = await CourtFarming_RoomLPStakejr6BSa7.stakeIncvRewards.call(uintS8lpsRt, {from: accounts[1]});

		assert.equal(booliPHqtvT, false)
		await expect(CourtFarming_RoomLPStakejr6BSa7.changeStakeParameters.call(uintceKv7I2, uintUU6aKe, uintVsFhLSJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeyadIwiC = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const booleZ0Ycbc = true
		const uintUMTTmLN = BigInt("0")
		const uint256HHg715H = await CourtFarming_RoomLPStakeyadIwiC.unstake.call(uintUMTTmLN, booleZ0Ycbc, {from: accounts[3]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeL6YHmDK = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressCNBMtKR = accounts[2]
		const uintP3QJj9Y = BigInt("0")
		const uintNndm8gT = BigInt("1829")
		const uint256WtUxaVG = await CourtFarming_RoomLPStakeL6YHmDK.rewards.call(addressCNBMtKR, {from: accounts[2]});
		const uint256vXibcYu = await CourtFarming_RoomLPStakeL6YHmDK.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ReZ8qWA = await CourtFarming_RoomLPStakeL6YHmDK.stake.call(uintP3QJj9Y, {from: accounts[4]});
//		const uint256jruq7sb = await CourtFarming_RoomLPStakeL6YHmDK.stake.call(uintNndm8gT, {from: accounts[2]});
//		const uint256ABxAPdu = await CourtFarming_RoomLPStakeL6YHmDK.getCurrentTime.call({from: accounts[0]});
//		const uint256pW4yjci = await CourtFarming_RoomLPStakeL6YHmDK.totalStaked.call({from: accounts[2]});

		assert.equal(uint256vXibcYu, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeL6YHmDK.stake.call(uintNndm8gT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})