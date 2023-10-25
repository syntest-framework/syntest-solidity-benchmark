const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const VotingdfKKcg = await Voting.new({from: accounts[4]});
		const uintWatPmT = BigInt("1553")
		const uintbfDx7Ay = BigInt("1926")
		const addressI2hF6BL = accounts[4]
		const uintA1q5jHZ = BigInt("425")
		const uint256fnkLoZ7 = await VotingdfKKcg.totalSupplyAt.call(uintWatPmT, {from: accounts[3]});
		await VotingdfKKcg.nonReentrant.call({from: accounts[3]});
		const boolXMiGOjy = await VotingdfKKcg.increaseAllowance.call(addressI2hF6BL, uintbfDx7Ay, {from: accounts[0]});
		const uint256M2v5Dhq = await VotingdfKKcg.totalSupplyAt.call(uintA1q5jHZ, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresssHXq4Ha = accounts[1]
		const VotingSUVpAO = await Voting.new(addresssHXq4Ha, {from: accounts[0]});
		const addresse37IzF = accounts[3]
		const addresslNsBVIn = accounts[1]
		const boolINxpwl7 = await VotingSUVpAO.isExchangeFactory.call(addresse37IzF, {from: accounts[3]});
		const addressIalWbqI = await VotingSUVpAO.ownableUpgrade.call(addresslNsBVIn, {from: accounts[4]});
		const uint256FXyKoWY = await VotingSUVpAO.snapshot.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingQDiQWsL = await Voting.new({from: accounts[0]});
		const uint79fZ5S = BigInt("1205")
		const addressyjaUbrl = accounts[1]
		const addressDcXqsQE = accounts[5]
		const addressXIpYoCy = accounts[0]
		const boolxIOEDx9 = await VotingQDiQWsL.approve.call(addressyjaUbrl, uint79fZ5S, {from: accounts[2]});
		const boolpKOEJet = await VotingQDiQWsL.isValidVerifierAddress.call(addressDcXqsQE, {from: accounts[4]});
		const boolWGIN5CL = await VotingQDiQWsL.isValidOracleAddress.call(addressXIpYoCy, {from: accounts[3]});
		const boolekcQ0Gq = await VotingQDiQWsL.isOwner.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingZ4yXK0p = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const uint5rbYNO = BigInt("589")
		const uintXHsNGiy = BigInt("1664")
		const addressQBEo36c = accounts[1]
		const uintuJJtkIq = BigInt("1606")
		const addressObcjjRS = accounts[3]
		const uintLAETMGO = BigInt("1518")
		const addressbBlEbmT = "0x0000000000000000000000000000000000000001"
		const uint256Jx2g1g = await VotingZ4yXK0p.pause.call(uint5rbYNO, {from: accounts[1]});
		const boolcYwyYTc = await VotingZ4yXK0p.transfer.call(addressQBEo36c, uintXHsNGiy, {from: accounts[1]});
		const boolu2xmvih = await VotingZ4yXK0p.decreaseAllowance.call(addressObcjjRS, uintuJJtkIq, {from: accounts[4]});
		const boolzSn8Df3 = await VotingZ4yXK0p.transfer.call(addressbBlEbmT, uintLAETMGO, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressW8y0FIt = accounts[1]
		const Voting0TBBHR = await Voting.new(addressW8y0FIt, {from: accounts[4]});
		const addressPPB0MTn = accounts[3]
		const addressqmiSeSV = accounts[5]
		const uintTxMNPJi = BigInt("1623")
		const uintKFoNKUG = BigInt("1457")
		const addresslYUTLt = "0x0000000000000000000000000000000000000001"
		const uintXnpvYDj = BigInt("224")
		const addresswicXVai = accounts[0]
		const uintTR2UqaW = BigInt("1177")
		const addressh2XjkJm = accounts[5]
		const boolekQ1oBM = await Voting0TBBHR.isValidStamperAddress.call(addressPPB0MTn, {from: accounts[1]});
		const boolawkcMg = await Voting0TBBHR.didAddressVote.call(uintTxMNPJi, addressqmiSeSV, {from: accounts[5]});
		const boolLWBRILr = await Voting0TBBHR.mint.call(addresslYUTLt, uintKFoNKUG, {from: accounts[4]});
		const boolYARLUX7 = await Voting0TBBHR.transfer.call(addresswicXVai, uintXnpvYDj, {from: accounts[3]});
		const booltbWbwX = await Voting0TBBHR.mint.call(addressh2XjkJm, uintTR2UqaW, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressk4fItg = accounts[3]
		const VotingCfGCqI = await Voting.new(addressk4fItg, {from: accounts[3]});
		const addressBnX5oF = accounts[3]
		const uintUWuRvag = BigInt("1530")
		const addressOa0WNvx = accounts[4]
		const uint256dbgdac0 = await VotingCfGCqI.balanceOf.call(addressBnX5oF, {from: accounts[3]});
		await VotingCfGCqI.requiresLiquidityTokenSnapshotAccess.call({from: accounts[2]});
		const uint256UypnqrL = await VotingCfGCqI.totalSupply.call({from: accounts[0]});
		const uint256OKBgoZu = await VotingCfGCqI.balanceOfAt.call(addressOa0WNvx, uintUWuRvag, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressasmLAco = accounts[2]
		const VotingfBitDPJ = await Voting.new(addressasmLAco, {from: "0x0000000000000000000000000000000000000001"});
		const booltMCIJjl = false
		const uintPMpG0bW = BigInt("800")
		await VotingfBitDPJ.renounceMinter.call({from: accounts[5]});
		const uint256yRWgPd0 = await VotingfBitDPJ.vote.call(uintPMpG0bW, booltMCIJjl, {from: accounts[0]});
		const uint256Kl496O5 = await VotingfBitDPJ.snapshot.call({from: "0x0000000000000000000000000000000000000001"});
		const booll5BNCj = await VotingfBitDPJ.isOwner.call({from: accounts[3]});
		await VotingfBitDPJ.onlyExchangeFactoryOrVotingSystem.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressCQW7P08 = accounts[0]
		const VotingA3o3VfR = await Voting.new(addressCQW7P08, {from: accounts[1]});
		const addresszX1RLcw = accounts[5]
		const addresshG25PVK = "0x0000000000000000000000000000000000000001"
		const addressR4IZCr = accounts[5]
		const uintcRjf8sH = BigInt("1341")
		const stringW5x25Yy = "J92ghtz6rg7Hf2CrJkYoYgWPPtcXFqCtpx2HT9wk5ne5SwgPUHZQSGfu44ZsHV"
		const stringGj5MDyL = "Y26S2v4GTYbaLEu5RavXbPLwRDYe37u5lY4Dtk63duY9pK3nkHp0QO3t0ZXtHDuIDxzJPfW2ziB30b19G32"
		const stringmdluhQ8 = "ALNbqDA7J4X4HUtf50DW7avsI55O2rjzKbiOW1J"
		const byteTLCI4d6 = "0x1e19051f070d030f0b04"
		const addresscl2ohKs = accounts[0]
		const booleh02BkZ = await VotingA3o3VfR.isVotingSystem.call(addresszX1RLcw, {from: accounts[4]});
		const boolH3FrTs = await VotingA3o3VfR.isExchangeFactory.call(addresshG25PVK, {from: accounts[2]});
		const booljeLI9ng = await VotingA3o3VfR.isMinter.call(addressR4IZCr, {from: accounts[2]});
		const uint256ujvJ02R = await VotingA3o3VfR.pause.call(uintcRjf8sH, {from: accounts[5]});
		const uint256IwakOQE = await VotingA3o3VfR.totalSupply.call({from: accounts[1]});
		const 
xcfTtVQ = await VotingA3o3VfR.createProposal.call(addresscl2ohKs, byteTLCI4d6, stringmdluhQ8, stringGj5MDyL, stringW5x25Yy, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresspk7wTRD = accounts[4]
		const VotinghbVXzkU = await Voting.new(addresspk7wTRD, {from: accounts[0]});
		const stringEK8pk94 = "raVieEipENUIJeNgGHJHBoOYooEiWhm2xSy"
		const stringJa0Amr = "r3Ev9D3lRvmOOgLT6gSRdMMnixuqdC9g952"
		const stringJQtvZCG = "vKo0WJTRJ8kUTBV"
		const byteeLnCqHD = "0x0d1810101114010501121b130b171a1d040b041a1513"
		const addresseCdS5H8 = "0x0000000000000000000000000000000000000001"
		const uintRUVTaHa = BigInt("1069")
		const uintW0Jt72d = BigInt("972")
		const 
oQZTRQX = await VotinghbVXzkU.createProposal.call(addresseCdS5H8, byteeLnCqHD, stringJQtvZCG, stringJa0Amr, stringEK8pk94, {from: accounts[1]});
		await VotinghbVXzkU.onlyOwner.call({from: accounts[3]});
		const uint256JzztjLC = await VotinghbVXzkU.burn.call(uintRUVTaHa, {from: accounts[2]});
		const uint256kjmM9gU = await VotinghbVXzkU.veto.call(uintW0Jt72d, {from: accounts[0]});
		const uint256JXzF1yV = await VotinghbVXzkU.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingjVo4ENx = await Voting.new({from: accounts[3]});
		const uintyhXBwLP = BigInt("1824")
		const addressGpLj6OG = accounts[1]
		const uints1KOWUf = BigInt("1631")
		const uintqoUi7IC = BigInt("1114")
		const addresseuaJT6A = accounts[2]
		const addressn3l9zjp = accounts[4]
		const uint256pXuwlTX = await VotingjVo4ENx.snapshot.call({from: accounts[1]});
		const stringN1dbMwR = await VotingjVo4ENx.name.call({from: accounts[3]});
		const boolqxNDT1j = await VotingjVo4ENx.transfer.call(addressGpLj6OG, uintyhXBwLP, {from: accounts[0]});
		const uint256uVY261k = await VotingjVo4ENx.approve.call(uints1KOWUf, {from: accounts[4]});
		const boolccb8Wb = await VotingjVo4ENx.transferFrom.call(addressn3l9zjp, addresseuaJT6A, uintqoUi7IC, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressWs1Nwdb = accounts[4]
		const VotinghbVXzkU = await Voting.new(addressWs1Nwdb, {from: accounts[0]});
		const stringEK8pk94 = "raVieEipENUIJeNgGHJHBoOYooEiWhm2xSy"
		const stringJa0Amr = "r3Ev9D3lRvmOOgLT6gSRdMMnixuqdC9g952"
		const stringJQtvZCG = "vKo0WJTRJ8kUTBV"
		const bytedHDxFOB = "0x0d1810101114010501121b130b171a1d040b041a1513"
		const addresslwg6sSV = accounts[4]
		const uintAWkQl6V = BigInt("1069")
		const uintg6EcWr4 = BigInt("948")
		const addressRAn2F7O = accounts[5]
		const boolu1CAgw = await VotinghbVXzkU.isOwner.call({from: accounts[1]});
		const 
oQZTRQX = await VotinghbVXzkU.createProposal.call(addresslwg6sSV, bytedHDxFOB, stringJQtvZCG, stringJa0Amr, stringEK8pk94, {from: accounts[1]});
		const uint256JzztjLC = await VotinghbVXzkU.burn.call(uintAWkQl6V, {from: accounts[2]});
		const uint256kjmM9gU = await VotinghbVXzkU.veto.call(uintg6EcWr4, {from: accounts[0]});
		const boolXnAAsFD = await VotinghbVXzkU.isMinter.call(addressRAn2F7O, {from: accounts[2]});
		await VotinghbVXzkU.onlyExchange.call({from: accounts[0]});
		const uint256JXzF1yV = await VotinghbVXzkU.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addresspDUSmxn = accounts[3]
		const Votingj0sjYCe = await Voting.new(addresspDUSmxn, {from: accounts[2]});
		const uinta2lHMOQ = BigInt("1564")
		const addressJyy8Vz = accounts[4]
		const uintlKEQzd4 = BigInt("1364")
		const addressDAZa9ow = accounts[4]
		const uintcQsuSIl = BigInt("782")
		const uint256ZSHgrGM = await Votingj0sjYCe.veto.call(uinta2lHMOQ, {from: accounts[0]});
		const booluoARQ4V = await Votingj0sjYCe.didAddressVote.call(uintlKEQzd4, addressJyy8Vz, {from: accounts[1]});
		const boolasudhF = await Votingj0sjYCe.didAddressVote.call(uintcQsuSIl, addressDAZa9ow, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressNP0R6Lp = accounts[4]
		const VotinghbVXzkU = await Voting.new(addressNP0R6Lp, {from: accounts[0]});
		const uintuFS1Bue = BigInt("2028")
		const stringEK8pk94 = "rfaVieEipENUIJeNgGHJHBoOYooEiWhm2xSy"
		const stringJa0Amr = "r3Ev9D3lRvmOOgLT6gSRdMMnixuqdC9g952"
		const stringJQtvZCG = "vKo06WJTRJ8kUTBV"
		const bytewcFcTaK = "0x0d1810101114010501121b130b171a1d040b041a1513"
		const addressUsx3NoG = accounts[3]
		const uint256TgeXh4a = await VotinghbVXzkU.veto.call(uintuFS1Bue, {from: accounts[0]});
		const 
oQZTRQX = await VotinghbVXzkU.createProposal.call(addressUsx3NoG, bytewcFcTaK, stringJQtvZCG, stringJa0Amr, stringEK8pk94, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addresssVmnhDA = accounts[4]
		const VotinghbVXzkU = await Voting.new(addresssVmnhDA, {from: accounts[0]});
		const addressxOTZKcz = accounts[2]
		const stringEK8pk94 = "rfaVieEipENUIJeNgGHJHBoOYooEiWhm2xSy"
		const stringJa0Amr = "r3Ev9D3lRvmOOgLT6gSRdMMnixuqdC9g952"
		const stringJQtvZCG = "vKo0WJTRJ8kUTBV"
		const bytealMWSF9 = "0x0d1810101114010501121b130b171a1d040b041a1513"
		const addressLLZkEOX = accounts[3]
		const uintlw8TnR = BigInt("1076")
		const boolgU99E3o = await VotinghbVXzkU.isValidOracleAddress.call(addressxOTZKcz, {from: accounts[1]});
		const 
oQZTRQX = await VotinghbVXzkU.createProposal.call(addressLLZkEOX, bytealMWSF9, stringJQtvZCG, stringJa0Amr, stringEK8pk94, {from: accounts[1]});
		const uint256JzztjLC = await VotinghbVXzkU.burn.call(uintlw8TnR, {from: accounts[2]});
		await VotinghbVXzkU.renounceMinter.call({from: accounts[3]});
		const uint256JXzF1yV = await VotinghbVXzkU.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const Votingbo96rvh = await Voting.new({from: accounts[2]});
		const uintrx4A2Rq = BigInt("1016")
		const addressRYL7ZXa = accounts[0]
		const addressAmnhvA7 = accounts[3]
		const boolkwWesMN = await Votingbo96rvh.transferFrom.call(addressAmnhvA7, addressRYL7ZXa, uintrx4A2Rq, {from: "0x0000000000000000000000000000000000000001"});
		await Votingbo96rvh.onlyVotingSystem.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressr7Opp6l = accounts[4]
		const VotinghbVXzkU = await Voting.new(addressr7Opp6l, {from: accounts[0]});
		const uintAPv3pPC = BigInt("258")
		const addressSyUnuv9 = accounts[1]
		const uintZOBjhbn = BigInt("1069")
		const uintrXyNali = BigInt("943")
		const boolFlXVasr = await VotinghbVXzkU.approve.call(addressSyUnuv9, uintAPv3pPC, {from: accounts[1]});
		const uint256JzztjLC = await VotinghbVXzkU.burn.call(uintZOBjhbn, {from: accounts[2]});
		const uint256ZJyJ1Sj = await VotinghbVXzkU.resolve.call(uintrXyNali, {from: accounts[2]});
		const uint256JXzF1yV = await VotinghbVXzkU.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addresskctaiUx = accounts[4]
		const VotinghbVXzkU = await Voting.new(addresskctaiUx, {from: accounts[0]});
		const addressRYFpt2k = accounts[4]
		const stringEK8pk94 = "rfaVieEipENUIJeNgGHJHBoOYooEiWhm2xSy"
		const stringJa0Amr = "r3Ev9D3lRvmOOgLT6gSRdMMnixuqdC9g952"
		const stringJQtvZCG = "vKo0WJTRJ8kUTBV"
		const bytehZHbNIr = "0x0d1810101114010501121b130b171a1d040b041a1513"
		const addresslTfeHia = accounts[5]
		const boolHsTSDei = await VotinghbVXzkU.isValidVerifierAddress.call(addressRYFpt2k, {from: "0x0000000000000000000000000000000000000001"});
		const 
oQZTRQX = await VotinghbVXzkU.createProposal.call(addresslTfeHia, bytehZHbNIr, stringJQtvZCG, stringJa0Amr, stringEK8pk94, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addresspC4aBb = accounts[4]
		const VotinghbVXzkU = await Voting.new(addresspC4aBb, {from: accounts[0]});
		const addressOydy3S = accounts[0]
		const uintIqSIF1 = BigInt("1823")
		const uintsWf5iu1 = BigInt("1086")
		const boolZA8uLO3 = await VotinghbVXzkU.didAddressVote.call(uintIqSIF1, addressOydy3S, {from: accounts[0]});
		const uint256JzztjLC = await VotinghbVXzkU.burn.call(uintsWf5iu1, {from: accounts[2]});
	});
})