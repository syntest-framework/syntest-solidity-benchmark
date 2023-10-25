const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeXN9W8dr = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressv5KNGrI = accounts[0]
		const booltA1TVeW = true
		const uintX5BRfcA = BigInt("1222")
		const addressC7GXH7P = accounts[0]
		const uintM7IkZd = BigInt("714")
		const uintPoFr16G = BigInt("1855")
		const uintbcfVuVI = BigInt("155")
		const uint256kusuJII = await CourtFarming_RoomLPStakeXN9W8dr.incvRewardInfo.call({from: accounts[4]});
		const uint256Um1wsF6 = await CourtFarming_RoomLPStakeXN9W8dr.balanceOf.call(addressv5KNGrI, {from: accounts[4]});
		const uint256H6E9uk = await CourtFarming_RoomLPStakeXN9W8dr.lastUpdateBlock.call({from: accounts[3]});
//		const uint256QSChtWv = await CourtFarming_RoomLPStakeXN9W8dr.unstake.call(uintX5BRfcA, booltA1TVeW, {from: accounts[3]});
//		const uint256QZ9U87n = await CourtFarming_RoomLPStakeXN9W8dr.rewards.call(addressC7GXH7P, {from: accounts[3]});
//		await CourtFarming_RoomLPStakeXN9W8dr.changeStakeParameters.call(uintbcfVuVI, uintPoFr16G, uintM7IkZd, {from: accounts[2]});

		assert.equal(uint256H6E9uk, BigInt("1582"))
		assert.equal(uint256Um1wsF6, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeXN9W8dr.unstake.call(uintX5BRfcA, booltA1TVeW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekZK4q4Z = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintjNRquO1 = BigInt("108")
		const addressVFy0bRR = accounts[2]
		const addresshjcCQZO = accounts[2]
		const uint256fi9kYbF = await CourtFarming_RoomLPStakekZK4q4Z.expectedRewardsToday.call(uintjNRquO1, {from: accounts[5]});
		const uint256ke1meuV = await CourtFarming_RoomLPStakekZK4q4Z.rewards.call(addressVFy0bRR, {from: accounts[1]});
		const uint256DTcT3c8 = await CourtFarming_RoomLPStakekZK4q4Z.incvRewardInfo.call({from: accounts[4]});
//		const addressLigNw9u = await CourtFarming_RoomLPStakekZK4q4Z.setCourtStake.call(addresshjcCQZO, {from: accounts[4]});

		await expect(CourtFarming_RoomLPStakekZK4q4Z.setCourtStake.call(addresshjcCQZO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeN7Ja5w6 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const address7VP8Df = accounts[4]
		const uint256ZBb0ncG = await CourtFarming_RoomLPStakeN7Ja5w6.balanceOf.call(address7VP8Df, {from: "0x0000000000000000000000000000000000000001"});
		const uint256klTia50 = await CourtFarming_RoomLPStakeN7Ja5w6.totalStaked.call({from: accounts[3]});
		const uint256z5ves0M = await CourtFarming_RoomLPStakeN7Ja5w6.incvRewardClaim.call({from: accounts[3]});
		const uint256K8FmtIk = await CourtFarming_RoomLPStakeN7Ja5w6.blockNumber.call({from: accounts[3]});

		assert.equal(uint256K8FmtIk, BigInt("1582"))
		assert.equal(uint256ZBb0ncG, BigInt("0"))
		assert.equal(uint256klTia50, BigInt("0"))
		assert.equal(uint256z5ves0M, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeCDLjalW = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uinty7QlfKn = BigInt("499")
		const uinthE0wTlT = BigInt("943")
		const uintGoHErzW = BigInt("1245")
		const addressYH1n6U1 = accounts[0]
//		await CourtFarming_RoomLPStakeCDLjalW.changeStakeParameters.call(uintGoHErzW, uinthE0wTlT, uinty7QlfKn, {from: accounts[3]});
//		const uint256Rmwi2VK = await CourtFarming_RoomLPStakeCDLjalW.getCurrentTime.call({from: accounts[4]});
//		const uint256bmvbqoB = await CourtFarming_RoomLPStakeCDLjalW.blockNumber.call({from: accounts[1]});
//		const uint256IoKHF63 = await CourtFarming_RoomLPStakeCDLjalW.rewards.call(addressYH1n6U1, {from: accounts[3]});

		await expect(CourtFarming_RoomLPStakeCDLjalW.changeStakeParameters.call(uintGoHErzW, uinthE0wTlT, uinty7QlfKn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeOoY1OoQ = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintVz8Jq9O = BigInt("697")
		const uint256oql3WWx = await CourtFarming_RoomLPStakeOoY1OoQ.incvRewardInfo.call({from: accounts[0]});
		const uint256OBqU1TW = await CourtFarming_RoomLPStakeOoY1OoQ.lastUpdateBlock.call({from: accounts[3]});
//		const uint256ITcxjg = await CourtFarming_RoomLPStakeOoY1OoQ.stake.call(uintVz8Jq9O, {from: accounts[4]});
//		const uint256rywaXos = await CourtFarming_RoomLPStakeOoY1OoQ.lastUpdateBlock.call({from: accounts[4]});
//		const uint256vooXOP = await CourtFarming_RoomLPStakeOoY1OoQ.blockNumber.call({from: accounts[1]});

		assert.equal(uint256OBqU1TW, BigInt("1582"))
		await expect(CourtFarming_RoomLPStakeOoY1OoQ.stake.call(uintVz8Jq9O, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeVynsaN7 = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressyBaG6Cz = accounts[4]
		const addressrKdw34e = accounts[5]
		const uintzAo5Ap1 = BigInt("1315")
		const bool0hI37l = false
		const uinthXmgRk = BigInt("1502")
		const addressnBZX7X = await CourtFarming_RoomLPStakeVynsaN7.updateReward.call(addressyBaG6Cz, {from: accounts[2]});
		const uint256YGeFGar = await CourtFarming_RoomLPStakeVynsaN7.balanceOf.call(addressrKdw34e, {from: accounts[2]});
		const boolcogP6qU = await CourtFarming_RoomLPStakeVynsaN7.stakeIncvRewards.call(uintzAo5Ap1, {from: accounts[3]});
		const uint256ADPtTec = await CourtFarming_RoomLPStakeVynsaN7.unstake.call(uinthXmgRk, bool0hI37l, {from: accounts[0]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZkwOhjG = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintHZdq6Gk = BigInt("227")
		const boolWBPgaNR = true
		const uintjSOtmxc = BigInt("1733")
		const boolXdnac20 = await CourtFarming_RoomLPStakeZkwOhjG.stakeIncvRewards.call(uintHZdq6Gk, {from: accounts[3]});
		const uint256xel6tNh = await CourtFarming_RoomLPStakeZkwOhjG.incvRewardClaim.call({from: accounts[2]});
//		const uint256AMBrGg = await CourtFarming_RoomLPStakeZkwOhjG.unstake.call(uintjSOtmxc, boolWBPgaNR, {from: accounts[4]});
//		const uint256a1clSXl = await CourtFarming_RoomLPStakeZkwOhjG.incvRewardClaim.call({from: accounts[2]});
//		const uint256eItx8Zz = await CourtFarming_RoomLPStakeZkwOhjG.incvRewardClaim.call({from: accounts[3]});

		assert.equal(boolXdnac20, false)
		assert.equal(uint256xel6tNh, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeZkwOhjG.unstake.call(uintjSOtmxc, boolWBPgaNR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekZK4q4Z = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressOfdcmoP = "0x0000000000000000000000000000000000000001"
		const addressscjJfYw = accounts[2]
		const addresstejhzpM = accounts[2]
		const addressNphaElb = accounts[2]
		const addresstebtEvC = await CourtFarming_RoomLPStakekZK4q4Z.getBeneficiaryInfo.call(addressOfdcmoP, {from: accounts[4]});
		const uint256PRcmAk = await CourtFarming_RoomLPStakekZK4q4Z.rewards.call(addressscjJfYw, {from: accounts[0]});
		const uint256ke1meuV = await CourtFarming_RoomLPStakekZK4q4Z.rewards.call(addresstejhzpM, {from: accounts[1]});
		const uint256YPLiqGX = await CourtFarming_RoomLPStakekZK4q4Z.blockNumber.call({from: accounts[3]});
		const uint256DTcT3c8 = await CourtFarming_RoomLPStakekZK4q4Z.incvRewardInfo.call({from: accounts[4]});
//		const addressLigNw9u = await CourtFarming_RoomLPStakekZK4q4Z.setCourtStake.call(addressNphaElb, {from: accounts[4]});

		assert.equal(uint256YPLiqGX, BigInt("1582"))
		await expect(CourtFarming_RoomLPStakekZK4q4Z.setCourtStake.call(addressNphaElb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekZK4q4Z = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressIFAJzb = accounts[4]
		const addressOnQYQMf = accounts[2]
		const addressCCaibdz = accounts[0]
		const addressC4mcqk = accounts[1]
		const boole9zfdLz = false
		const uintXYtZnO3 = BigInt("1798")
		const uint256ZxP3KKc = await CourtFarming_RoomLPStakekZK4q4Z.balanceOf.call(addressIFAJzb, {from: accounts[0]});
		const uint256mwmFm4y = await CourtFarming_RoomLPStakekZK4q4Z.rewards.call(addressOnQYQMf, {from: accounts[0]});
		const uint256KiuHCDp = await CourtFarming_RoomLPStakekZK4q4Z.balanceOf.call(addressCCaibdz, {from: accounts[1]});
//		const addressXMLTCil = await CourtFarming_RoomLPStakekZK4q4Z.setCourtStake.call(addressC4mcqk, {from: accounts[2]});
//		const uint256t7LC8n1 = await CourtFarming_RoomLPStakekZK4q4Z.unstake.call(uintXYtZnO3, boole9zfdLz, {from: accounts[2]});

		assert.equal(uint256KiuHCDp, BigInt("0"))
		assert.equal(uint256ZxP3KKc, BigInt("0"))
		await expect(CourtFarming_RoomLPStakekZK4q4Z.setCourtStake.call(addressC4mcqk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekZK4q4Z = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolqNedWh = false
		const uintIcoYzae = BigInt("0")
		const uint256wL4Cjxr = await CourtFarming_RoomLPStakekZK4q4Z.unstake.call(uintIcoYzae, boolqNedWh, {from: accounts[3]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekZK4q4Z = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressFFQVUm = accounts[5]
		const uintbD7muxE = BigInt("0")
		const addressxSWX8ku = accounts[2]
		const uint256n7E0Hr = await CourtFarming_RoomLPStakekZK4q4Z.blockNumber.call({from: "0x0000000000000000000000000000000000000001"});
		const addressHAiuaSc = await CourtFarming_RoomLPStakekZK4q4Z.getBeneficiaryInfo.call(addressFFQVUm, {from: accounts[3]});
		const uint256N7TYZSj = await CourtFarming_RoomLPStakekZK4q4Z.stake.call(uintbD7muxE, {from: accounts[1]});
//		const addressLigNw9u = await CourtFarming_RoomLPStakekZK4q4Z.setCourtStake.call(addressxSWX8ku, {from: accounts[4]});

		assert.equal(uint256n7E0Hr, BigInt("1582"))
		await expect(CourtFarming_RoomLPStakekZK4q4Z.setCourtStake.call(addressxSWX8ku, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekZK4q4Z = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintRaIT5hv = BigInt("0")
		const uintN1HuhkI = BigInt("1314")
		const addressHdazU0T = accounts[3]
		const uintIkWrns1 = BigInt("402")
		const uint256lwTtAuV = await CourtFarming_RoomLPStakekZK4q4Z.incvRewardClaim.call({from: accounts[3]});
		const boolcTrEtV2 = await CourtFarming_RoomLPStakekZK4q4Z.stakeIncvRewards.call(uintRaIT5hv, {from: accounts[0]});
		const uint256x8UM34j = await CourtFarming_RoomLPStakekZK4q4Z.incvRewardInfo.call({from: accounts[1]});
		const uint256ZiBbuJw = await CourtFarming_RoomLPStakekZK4q4Z.expectedRewardsToday.call(uintN1HuhkI, {from: accounts[4]});
		const uint256uqACMOa = await CourtFarming_RoomLPStakekZK4q4Z.lastUpdateBlock.call({from: accounts[1]});
		const addressd4WxPQP = await CourtFarming_RoomLPStakekZK4q4Z.getBeneficiaryInfo.call(addressHdazU0T, {from: accounts[3]});
		const boolyrUYwzO = await CourtFarming_RoomLPStakekZK4q4Z.stakeIncvRewards.call(uintIkWrns1, {from: accounts[0]});

		assert.equal(boolcTrEtV2, false)
		assert.equal(boolyrUYwzO, false)
		assert.equal(uint256lwTtAuV, BigInt("0"))
		assert.equal(uint256uqACMOa, BigInt("1582"))
	});
})