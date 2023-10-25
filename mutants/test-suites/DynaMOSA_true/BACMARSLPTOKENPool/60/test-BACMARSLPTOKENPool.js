const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressOaixzPd = accounts[4]
		const addressSRVLAxY = accounts[1]
		const addressCVoEVzf = accounts[1]
		const BACMARSLPTOKENPoolfYbqaTD = await BACMARSLPTOKENPool.new(addressOaixzPd, addressSRVLAxY, addressCVoEVzf, {from: accounts[2]});
		const uinth5DV5s = BigInt("806")
		const addressc2qT2U = accounts[1]
//		const uint256KdeS8k = await BACMARSLPTOKENPoolfYbqaTD.withdraw.call(uinth5DV5s, {from: accounts[0]});
//		const uint256LPCfx1 = await BACMARSLPTOKENPoolfYbqaTD.totalSupply.call({from: accounts[1]});
//		const uint256ps7ZHNV = await BACMARSLPTOKENPoolfYbqaTD.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256sz3kvMW = await BACMARSLPTOKENPoolfYbqaTD.earned.call(addressc2qT2U, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolfYbqaTD.withdraw.call(uinth5DV5s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressTdUNimS = accounts[4]
		const addressIxw589D = accounts[4]
		const addressoPKSTv5 = accounts[3]
		const BACMARSLPTOKENPoolEPkY0uy = await BACMARSLPTOKENPool.new(addressTdUNimS, addressIxw589D, addressoPKSTv5, {from: accounts[2]});
		const uintFOlmJFi = BigInt("1186")
		const uintyQrCid2 = BigInt("1956")
//		const stringwXugmkJ = await BACMARSLPTOKENPoolEPkY0uy.name.call({from: accounts[4]});
//		const uint256QNZ730w = await BACMARSLPTOKENPoolEPkY0uy.stake.call(uintFOlmJFi, {from: accounts[3]});
//		await BACMARSLPTOKENPoolEPkY0uy.onlyRewardsDistribution.call({from: accounts[3]});
//		const uint256ksM9yFr = await BACMARSLPTOKENPoolEPkY0uy.notifyRewardAmount.call(uintyQrCid2, {from: accounts[3]});

		await expect(BACMARSLPTOKENPoolEPkY0uy.name.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdvoySme = accounts[3]
		const addressWWepkAD = accounts[0]
		const addressenwY285 = accounts[3]
		const BACMARSLPTOKENPool5ZItZW = await BACMARSLPTOKENPool.new(addressdvoySme, addressWWepkAD, addressenwY285, {from: accounts[4]});
		const bytelbLsQ3N = "0x031c160f1f02070917050b0404040d1e181b18000f201a1e131b0d0e0613051f"
		const byte7R93K4 = "0x130a1a0e1b090512090d08041a03170b1818131713161b1f0210070c13171b1f"
		const uintmMHfh9o = BigInt("151")
		const uintQAbsUBo = BigInt("1656")
		const uintYn7myVt = BigInt("1574")
		const uintlA2GsGo = BigInt("575")
		const uintkA9EQIK = BigInt("796")
//		await BACMARSLPTOKENPool5ZItZW.getReward.call({from: accounts[5]});
//		const uint256GlZA6t = await BACMARSLPTOKENPool5ZItZW.stakeWithPermit.call(uintYn7myVt, uintQAbsUBo, uintmMHfh9o, byte7R93K4, bytelbLsQ3N, {from: accounts[0]});
//		const uint256KU7POGY = await BACMARSLPTOKENPool5ZItZW.notifyRewardAmount.call(uintlA2GsGo, {from: accounts[2]});
//		const uint256dHF87fu = await BACMARSLPTOKENPool5ZItZW.stake.call(uintkA9EQIK, {from: accounts[1]});
//		const uint8Qu65P6Z = await BACMARSLPTOKENPool5ZItZW.decimals.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPool5ZItZW.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiGvm458 = "ex975XP21wNYc1o1xlSlrtyduirMO13qW4C8x2jyjmuhLWcWf84HAuH7FiQY"
		const stringpA7wuf = "p7XqpyCitnMnMPB5q3egMXBigbX9q1cLTwosx7wwKdlugRloQxONzpRuiGiNOKNUsC5cN"
		const uintHco1VEY = BigInt("49")
		const BACMARSLPTOKENPooltOBM6Wg = await BACMARSLPTOKENPool.new(stringiGvm458, stringpA7wuf, uintHco1VEY, {from: accounts[3]});
		const addressVzgxFg = accounts[4]
		await BACMARSLPTOKENPooltOBM6Wg.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256R0023I4 = await BACMARSLPTOKENPooltOBM6Wg.earned.call(addressVzgxFg, {from: accounts[5]});
		const stringEMpbVFu = await BACMARSLPTOKENPooltOBM6Wg.symbol.call({from: accounts[4]});
		await BACMARSLPTOKENPooltOBM6Wg.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPooltOBM6Wg.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresszuk9ss3 = accounts[3]
		const addressNXGidHM = accounts[3]
		const addressoionL4J = accounts[0]
		const BACMARSLPTOKENPoolYe4JiZ5 = await BACMARSLPTOKENPool.new(addresszuk9ss3, addressNXGidHM, addressoionL4J, {from: accounts[2]});
		const uintm1LOWjp = BigInt("993")
		const byteXFp4yBE = "0x08060e080c1f1805191b0912110d0b08130e0513180712161e11100c0e1f1e06"
		const byteMsSDChH = "0x191d1a061111060e1411101e010f07031f1e200d00171f000c150e1f10181a1d"
		const uintsE2tVAW = BigInt("38")
		const uintLnv2krR = BigInt("1962")
		const uintkcllpqe = BigInt("1312")
		const uintCCMvpCh = BigInt("1370")
//		const uint256gZpCajZ = await BACMARSLPTOKENPoolYe4JiZ5.withdraw.call(uintm1LOWjp, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256DJgyxWp = await BACMARSLPTOKENPoolYe4JiZ5.stakeWithPermit.call(uintkcllpqe, uintLnv2krR, uintsE2tVAW, byteMsSDChH, byteXFp4yBE, {from: accounts[1]});
//		await BACMARSLPTOKENPoolYe4JiZ5.onlyRewardsDistribution.call({from: accounts[0]});
//		const uint256Q3HRfby = await BACMARSLPTOKENPoolYe4JiZ5.withdraw.call(uintCCMvpCh, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolYe4JiZ5.withdraw.call(uintm1LOWjp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDBvhKUq = "I5Vaw"
		const stringSQvCK8o = "PT16xnKvy5YcO"
		const uintoyIKH3t = BigInt("207")
		const BACMARSLPTOKENPoolLYIBkEu = await BACMARSLPTOKENPool.new(stringDBvhKUq, stringSQvCK8o, uintoyIKH3t, {from: accounts[1]});
		const addressBPaSSBl = accounts[4]
		await BACMARSLPTOKENPoolLYIBkEu.exit.call({from: accounts[0]});
		await BACMARSLPTOKENPoolLYIBkEu.nonReentrant.call({from: accounts[1]});
		const uint256Xh6b8ta = await BACMARSLPTOKENPoolLYIBkEu.rewardPerToken.call({from: accounts[3]});
		const uint256YJUjLcn = await BACMARSLPTOKENPoolLYIBkEu.rewardPerToken.call({from: accounts[4]});
		const uint256eECcVEO = await BACMARSLPTOKENPoolLYIBkEu.earned.call(addressBPaSSBl, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringL7c9Ibs = "FKgQVpdqs0J8KmhIjT7L9WONQl"
		const stringmr0dCu = "0t9pClCjEodSCFpYMGJM"
		const uintiOX3OcQ = BigInt("153")
		const BACMARSLPTOKENPoolIjxUpHD = await BACMARSLPTOKENPool.new(stringL7c9Ibs, stringmr0dCu, uintiOX3OcQ, {from: accounts[2]});
		const stringrRi8CXl = await BACMARSLPTOKENPoolIjxUpHD.symbol.call({from: accounts[0]});
		const uint256cABZysy = await BACMARSLPTOKENPoolIjxUpHD.getRewardForDuration.call({from: accounts[3]});
		const stringRyHJvxU = await BACMARSLPTOKENPoolIjxUpHD.name.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressYp4Mr7 = accounts[1]
		const addressE4Ft09 = accounts[5]
		const addressb9vCrI2 = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolIocN6Qf = await BACMARSLPTOKENPool.new(addressYp4Mr7, addressE4Ft09, addressb9vCrI2, {from: "0x0000000000000000000000000000000000000001"});
		const uintYw34NGF = BigInt("1236")
		const uint8aZ1SvTG = await BACMARSLPTOKENPoolIocN6Qf.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoolIocN6Qf.nonReentrant.call({from: accounts[5]});
		const uint256zwKfWez = await BACMARSLPTOKENPoolIocN6Qf.stake.call(uintYw34NGF, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolIocN6Qf.exit.call({from: accounts[5]});
		await BACMARSLPTOKENPoolIocN6Qf.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressnm8dKyH = accounts[0]
		const addressLuvZGY = accounts[2]
		const addressNgDXCG = accounts[2]
		const BACMARSLPTOKENPoolEjyCo4v = await BACMARSLPTOKENPool.new(addressnm8dKyH, addressLuvZGY, addressNgDXCG, {from: accounts[2]});
		const uintxBqBPQp = BigInt("198")
		const addresspQ250H = accounts[3]
		const addressaASQs6t = accounts[0]
		const addressLdh5jBM = accounts[4]
//		const uint256zvBrzx5 = await BACMARSLPTOKENPoolEjyCo4v.notifyRewardAmount.call(uintxBqBPQp, {from: accounts[1]});
//		const uint256QctZViT = await BACMARSLPTOKENPoolEjyCo4v.getRewardForDuration.call({from: accounts[1]});
//		const uint256JC9gzq = await BACMARSLPTOKENPoolEjyCo4v.earned.call(addresspQ250H, {from: accounts[3]});
//		const uint256358a7c = await BACMARSLPTOKENPoolEjyCo4v.earned.call(addressaASQs6t, {from: accounts[3]});
//		const uint256S1jks8e = await BACMARSLPTOKENPoolEjyCo4v.balanceOf.call(addressLdh5jBM, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolEjyCo4v.notifyRewardAmount.call(uintxBqBPQp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresssvTjZKV = accounts[4]
		const addressu3vG0rr = accounts[1]
		const addressEQNoI0 = accounts[1]
		const BACMARSLPTOKENPoolfYbqaTD = await BACMARSLPTOKENPool.new(addresssvTjZKV, addressu3vG0rr, addressEQNoI0, {from: accounts[2]});
		const addressAxEF7pt = accounts[1]
		const uint256LPCfx1 = await BACMARSLPTOKENPoolfYbqaTD.totalSupply.call({from: accounts[1]});
		const uint256sz3kvMW = await BACMARSLPTOKENPoolfYbqaTD.earned.call(addressAxEF7pt, {from: accounts[2]});

		assert.equal(uint256LPCfx1, BigInt("0"))
		assert.equal(uint256sz3kvMW, BigInt("0"))
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringI8qE7Rd = "QYnHXRmDYp3A2O1x8zw5W3NdhrKglWknADQZ8Y9P3ze5"
		const stringeaF7NQp = "zqFk98UHUCyEOzu6LlYEm4nlJAxDHIRac6SKodp2Se4tWwTUdMcoVDLk8AQuoDJTLVnO7rwwiRsxdH2cXkoCivrqAkVo5s"
		const uintjaaP1NO = BigInt("1")
		const BACMARSLPTOKENPool51zqgX = await BACMARSLPTOKENPool.new(stringI8qE7Rd, stringeaF7NQp, uintjaaP1NO, {from: accounts[2]});
		const uintAC4ERhi = BigInt("1105")
		const uint8v96mMNr = await BACMARSLPTOKENPool51zqgX.decimals.call({from: accounts[2]});
		const uint256FT0GnTV = await BACMARSLPTOKENPool51zqgX.withdraw.call(uintAC4ERhi, {from: accounts[4]});
		const uint256NMjwfT = await BACMARSLPTOKENPool51zqgX.getRewardForDuration.call({from: accounts[0]});
		const uint256W1ZWzO3 = await BACMARSLPTOKENPool51zqgX.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressnlp9Ea1 = accounts[3]
		const addressWnBpnF7 = accounts[0]
		const addressLwRP8ij = accounts[3]
		const BACMARSLPTOKENPool5ZItZW = await BACMARSLPTOKENPool.new(addressnlp9Ea1, addressWnBpnF7, addressLwRP8ij, {from: accounts[4]});
		const addressXzgfeJD = accounts[5]
		const bytebQ3GFT = "0x031c160f1f02070917050b0404040d1e181b18000f201a1e131b0d0e0613051f"
		const byteNhSZi4P = "0x130a1a0e1b090512090d08041a03170b1818131713161b1f0210070c13171b1f"
		const uintV19PVgp = BigInt("151")
		const uintnE5D47R = BigInt("443")
		const uintpP2B5GG = BigInt("1574")
		const uinttJRCF2 = BigInt("1354")
		const uintjkRii3j = BigInt("796")
//		await BACMARSLPTOKENPool5ZItZW.getReward.call({from: accounts[5]});
//		const uint256YJS4BqU = await BACMARSLPTOKENPool5ZItZW.balanceOf.call(addressXzgfeJD, {from: accounts[4]});
//		const uint256UCehU9l = await BACMARSLPTOKENPool5ZItZW.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256GlZA6t = await BACMARSLPTOKENPool5ZItZW.stakeWithPermit.call(uintpP2B5GG, uintnE5D47R, uintV19PVgp, byteNhSZi4P, bytebQ3GFT, {from: accounts[0]});
//		const uint256KU7POGY = await BACMARSLPTOKENPool5ZItZW.notifyRewardAmount.call(uinttJRCF2, {from: accounts[2]});
//		const uint256dHF87fu = await BACMARSLPTOKENPool5ZItZW.stake.call(uintjkRii3j, {from: accounts[1]});
//		const uint8Qu65P6Z = await BACMARSLPTOKENPool5ZItZW.decimals.call({from: accounts[0]});
//		await BACMARSLPTOKENPool5ZItZW.getReward.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPool5ZItZW.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKEbhzIg = accounts[3]
		const addressNBaUpzM = accounts[0]
		const addressm05jwft = accounts[3]
		const BACMARSLPTOKENPool5ZItZW = await BACMARSLPTOKENPool.new(addressKEbhzIg, addressNBaUpzM, addressm05jwft, {from: accounts[4]});
		const uintcVCpc6 = BigInt("1774")
		const bytefXP52Cm = "0x031c160f1f02070917050b0404040d1e181b18000f201a1e131b0d0e0613051f"
		const bytefzIn9Ac = "0x130a1a0e1b090512090d08041a03170b1818131713161b1f0210070c13171b1f"
		const uinteTbI29 = BigInt("151")
		const uintS4OCAhV = BigInt("1656")
		const uintTupZPU = BigInt("1547")
//		const uint256fLMh2Ed = await BACMARSLPTOKENPool5ZItZW.stake.call(uintcVCpc6, {from: accounts[1]});
//		await BACMARSLPTOKENPool5ZItZW.getReward.call({from: accounts[5]});
//		const uint256GlZA6t = await BACMARSLPTOKENPool5ZItZW.stakeWithPermit.call(uintTupZPU, uintS4OCAhV, uinteTbI29, bytefzIn9Ac, bytefXP52Cm, {from: accounts[0]});
//		const uint256waQqKxr = await BACMARSLPTOKENPool5ZItZW.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint8Qu65P6Z = await BACMARSLPTOKENPool5ZItZW.decimals.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPool5ZItZW.stake.call(uintcVCpc6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGeddwsh = "kBWF2ipF1UgguBmlr62TPyF3GhQlMg2RSRoPtBuGyIw3OaYLMxeaHhI8U0jMrU1Fn8XJreC"
		const stringUgCOPx = "eUu5U8ccDG62NUkIMyXMQtkT6EJolv1C824ACQXwKch8moUPdZwYTGLf3EEBqJ3Xo4XkYQBYSOkgvvWJVjw2qXzhzsM"
		const uintYdCTq1u = BigInt("33")
		const BACMARSLPTOKENPoolF8YHq0Z = await BACMARSLPTOKENPool.new(stringGeddwsh, stringUgCOPx, uintYdCTq1u, {from: accounts[5]});
		const byteCgwWp8u = "0x03090314000404160a0118171b1106090d0115050a13191b00111c02170a100e"
		const bytetKNC9qo = "0x140c1f0f1c08100b200d14040c01161718050e170e1f0d110220051504111502"
		const uintGb5mts1 = BigInt("113")
		const uintFWKNDb = BigInt("963")
		const uintczS18W = BigInt("365")
		const uint256sFSV36V = await BACMARSLPTOKENPoolF8YHq0Z.stakeWithPermit.call(uintczS18W, uintFWKNDb, uintGb5mts1, bytetKNC9qo, byteCgwWp8u, {from: accounts[2]});
		const uint8GB87dcw = await BACMARSLPTOKENPoolF8YHq0Z.decimals.call({from: accounts[0]});
		const stringJwiNTVl = await BACMARSLPTOKENPoolF8YHq0Z.name.call({from: accounts[5]});
		await BACMARSLPTOKENPoolF8YHq0Z.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressyVHrHSG = accounts[4]
		const addressXRzWVls = accounts[1]
		const addresszfZMuKO = accounts[1]
		const BACMARSLPTOKENPoolfYbqaTD = await BACMARSLPTOKENPool.new(addressyVHrHSG, addressXRzWVls, addresszfZMuKO, {from: accounts[2]});
		const uint256LPCfx1 = await BACMARSLPTOKENPoolfYbqaTD.totalSupply.call({from: accounts[1]});
		const uint256tL3O1JH = await BACMARSLPTOKENPoolfYbqaTD.getRewardForDuration.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolfYbqaTD.onlyRewardsDistribution.call({from: accounts[3]});
//		await BACMARSLPTOKENPoolfYbqaTD.exit.call({from: accounts[3]});

		assert.equal(uint256LPCfx1, BigInt("0"))
		assert.equal(uint256tL3O1JH, BigInt("0"))
		await expect(BACMARSLPTOKENPoolfYbqaTD.onlyRewardsDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressrGUsdV5 = accounts[3]
		const addressUxRXbM4 = accounts[0]
		const addresswKM4sbM = accounts[3]
		const BACMARSLPTOKENPool5ZItZW = await BACMARSLPTOKENPool.new(addressrGUsdV5, addressUxRXbM4, addresswKM4sbM, {from: accounts[4]});
		const uintprLyOx = BigInt("663")
		const byteKaEVWlI = "0x031c160f1f02070917050b0404040d1e181b18000f201a1e131b0d0e0613051f"
		const byteoQ1vGNy = "0x130a1a0e1b090512090d08041a03170b1818131713161b1f0210070c13171b1f"
		const uintW3W7YNN = BigInt("151")
		const uintd95EFOI = BigInt("1656")
		const uintyucMFi8 = BigInt("1574")
//		await BACMARSLPTOKENPool5ZItZW.getReward.call({from: accounts[5]});
//		const uint256vVkf9Y9 = await BACMARSLPTOKENPool5ZItZW.withdraw.call(uintprLyOx, {from: accounts[0]});
//		const uint256GlZA6t = await BACMARSLPTOKENPool5ZItZW.stakeWithPermit.call(uintyucMFi8, uintd95EFOI, uintW3W7YNN, byteoQ1vGNy, byteKaEVWlI, {from: accounts[0]});
//		const uint8Qu65P6Z = await BACMARSLPTOKENPool5ZItZW.decimals.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPool5ZItZW.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressldViNR9 = accounts[4]
		const addressPU9EiqS = accounts[1]
		const addressZYMsHzb = accounts[1]
		const BACMARSLPTOKENPoolfYbqaTD = await BACMARSLPTOKENPool.new(addressldViNR9, addressPU9EiqS, addressZYMsHzb, {from: accounts[2]});
		const uintiFW1vn1 = BigInt("1144")
		const addressIQjeCgL = accounts[4]
		const addressJa6b4a6 = accounts[2]
//		const uint256GaooVxj = await BACMARSLPTOKENPoolfYbqaTD.stake.call(uintiFW1vn1, {from: accounts[1]});
//		const uint256LPCfx1 = await BACMARSLPTOKENPoolfYbqaTD.totalSupply.call({from: accounts[1]});
//		const uint256acqqOAS = await BACMARSLPTOKENPoolfYbqaTD.balanceOf.call(addressIQjeCgL, {from: accounts[0]});
//		const uint256sz3kvMW = await BACMARSLPTOKENPoolfYbqaTD.earned.call(addressJa6b4a6, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolfYbqaTD.stake.call(uintiFW1vn1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFTAuG2c = "XsIXA4Hv4Y31EaT4vU3LmfBkdWHFw8VLIR6vYRYNbr02n5WuyFFPVPT6PzqdYJ55yMUy8EWmZN6EY6WPfA0RmONdtgAcMrXYcU"
		const stringZfm488a = "gqVpMeizC5M"
		const uintfica3QL = BigInt("203")
		const BACMARSLPTOKENPoolGuANzxv = await BACMARSLPTOKENPool.new(stringFTAuG2c, stringZfm488a, uintfica3QL, {from: "0x0000000000000000000000000000000000000001"});
		const byteGdt1A0r = "0x071701190806171f19060e1d1616031d0f0209191901160e1d15071203020b12"
		const byteQEH2an2 = "0x07120413051d1919070517110d1e1a131a141320011a03000d051214031b080f"
		const uintjv23Trp = BigInt("61")
		const uintDvJxeAv = BigInt("1268")
		const uintd9UflnK = BigInt("1532")
		const byteD7jdWSb = "0x0920140f1308121f1b0b011f1e0911121b1e111f1f0517150c0109190103121e"
		const bytelwCDRal = "0x0b1c161b030615161e090a1610101711160f130d0d0e1f020d0c081e140e1e08"
		const uintw18gmDg = BigInt("4")
		const uintaLBn8Xx = BigInt("1246")
		const uintcpqtmro = BigInt("662")
		const uint256paG0XNR = await BACMARSLPTOKENPoolGuANzxv.stakeWithPermit.call(uintd9UflnK, uintDvJxeAv, uintjv23Trp, byteQEH2an2, byteGdt1A0r, {from: accounts[0]});
		const uint256r7I1kmJ = await BACMARSLPTOKENPoolGuANzxv.rewardPerToken.call({from: accounts[1]});
		const uint256WKoFH6B = await BACMARSLPTOKENPoolGuANzxv.stakeWithPermit.call(uintcpqtmro, uintaLBn8Xx, uintw18gmDg, bytelwCDRal, byteD7jdWSb, {from: accounts[2]});
		await BACMARSLPTOKENPoolGuANzxv.exit.call({from: accounts[5]});
		const uint256BECEM8p = await BACMARSLPTOKENPoolGuANzxv.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressDq5lTkS = accounts[3]
		const addressvH25DdP = accounts[0]
		const addressocuvwnd = accounts[3]
		const BACMARSLPTOKENPool5ZItZW = await BACMARSLPTOKENPool.new(addressDq5lTkS, addressvH25DdP, addressocuvwnd, {from: accounts[4]});
		const byteM70HAtn = "0x031c160f1f02070917050b0404040d1e181b18000f201a1e131b0d0e0613051f"
		const bytewFkioHJ = "0x130a1a0e1b090512090d08041a03170b1818131713161b1f0210070c13171b1f"
		const uintFgbeQgT = BigInt("140")
		const uintJ9sNq5b = BigInt("1656")
		const uintpD21esk = BigInt("1574")
//		await BACMARSLPTOKENPool5ZItZW.getReward.call({from: accounts[5]});
//		await BACMARSLPTOKENPool5ZItZW.exit.call({from: accounts[2]});
//		const uint256GlZA6t = await BACMARSLPTOKENPool5ZItZW.stakeWithPermit.call(uintpD21esk, uintJ9sNq5b, uintFgbeQgT, bytewFkioHJ, byteM70HAtn, {from: accounts[0]});
//		const uint8Qu65P6Z = await BACMARSLPTOKENPool5ZItZW.decimals.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPool5ZItZW.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGkOonR = "uuCnaFMRQMch7knAe"
		const stringImmVT5T = "POQDaLm"
		const uinthGhl7qw = BigInt("108")
		const BACMARSLPTOKENPoolDjgBsKy = await BACMARSLPTOKENPool.new(stringGkOonR, stringImmVT5T, uinthGhl7qw, {from: accounts[4]});
		const uintzCTZkSV = BigInt("1472")
		const uintpCaTvSf = BigInt("1436")
		await BACMARSLPTOKENPoolDjgBsKy.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256PNvbIvD = await BACMARSLPTOKENPoolDjgBsKy.notifyRewardAmount.call(uintzCTZkSV, {from: accounts[2]});
		const uint256l1bR9KJ = await BACMARSLPTOKENPoolDjgBsKy.rewardPerToken.call({from: accounts[1]});
		const uint256GCreccz = await BACMARSLPTOKENPoolDjgBsKy.totalSupply.call({from: accounts[4]});
		const uint256wzjSzK4 = await BACMARSLPTOKENPoolDjgBsKy.notifyRewardAmount.call(uintpCaTvSf, {from: accounts[3]});
		await BACMARSLPTOKENPoolDjgBsKy.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringppdyyL1 = "Svy254fZIu58TE94h204tOKA2JMgAUz57iwh"
		const stringDM1C3e6 = "pBwyi4QJlDuN946PaihOwbDQ57IMmJSlmr5RvsTLoIXbDefvVvYC6VD5HfuSaoGVBHi7QpJjXkzWluqchWfzYtpZvZkQ"
		const uintdNJAFi = BigInt("78")
		const BACMARSLPTOKENPoolN0Ett0H = await BACMARSLPTOKENPool.new(stringppdyyL1, stringDM1C3e6, uintdNJAFi, {from: "0x0000000000000000000000000000000000000001"});
		const addressBxyjs7e = accounts[0]
		const uint256NEJ3def = await BACMARSLPTOKENPoolN0Ett0H.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint8Wn0N3on = await BACMARSLPTOKENPoolN0Ett0H.decimals.call({from: accounts[3]});
		await BACMARSLPTOKENPoolN0Ett0H.exit.call({from: accounts[3]});
		const uint256CmJNHd = await BACMARSLPTOKENPoolN0Ett0H.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256MS1mpEe = await BACMARSLPTOKENPoolN0Ett0H.earned.call(addressBxyjs7e, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsEIziGu = "eRc97GPlovnpKGXfodtznZRmcDFxrpMLOYwchKORPdIG7IL8Zpb59RnRqbmXwRScBAAd84IbEQ0wlIWdMLMtKbTnHNzQVu94"
		const stringluYjtr5 = "tMnPMz1nyFZFVDtTHNroyA5sciEYFWSt7y3z8E0"
		const uintL8bPsQf = BigInt("237")
		const BACMARSLPTOKENPoollB9LcO = await BACMARSLPTOKENPool.new(stringsEIziGu, stringluYjtr5, uintL8bPsQf, {from: accounts[3]});
		const addressMUpYHJG = accounts[1]
		await BACMARSLPTOKENPoollB9LcO.getReward.call({from: accounts[4]});
		const uint256kDc1S6e = await BACMARSLPTOKENPoollB9LcO.balanceOf.call(addressMUpYHJG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UlmtL6G = await BACMARSLPTOKENPoollB9LcO.getRewardForDuration.call({from: accounts[0]});
		await BACMARSLPTOKENPoollB9LcO.exit.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpkHwlvJ = "oaEQLkPFpBr6MVVWU6QcRpgY6hQyo3v9F6XXXju8jaAniSGMsQIR2oPA"
		const stringkj245rf = "pfDKEVIOBYR1mKeplKGuaQ9eK3zzGm6Vw6YhJwwfgryMXKMXq8vDeKAHlIgelyKrMSQ8tdlK5DOC3MMdAs"
		const uintbE3kZok = BigInt("52")
		const BACMARSLPTOKENPooljeK7wd = await BACMARSLPTOKENPool.new(stringpkHwlvJ, stringkj245rf, uintbE3kZok, {from: "0x0000000000000000000000000000000000000001"});
		const addressiTzbMNn = "0x0000000000000000000000000000000000000001"
		const addressm83PVFa = accounts[5]
		const uint8dszRNer = await BACMARSLPTOKENPooljeK7wd.decimals.call({from: accounts[2]});
		const uint256QnftUG = await BACMARSLPTOKENPooljeK7wd.earned.call(addressiTzbMNn, {from: accounts[3]});
		const uint256jnfnS9X = await BACMARSLPTOKENPooljeK7wd.earned.call(addressm83PVFa, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringF4Aplmn = "aEELuI7KbF27F97dbVVUZ"
		const stringSZHVrX = "DUc1NW2f2tdXEz5ANoW4iAa8z7qHHNQMGn8AdkvavBeVXUaN9IUm6uE6R5nAnetTiWCrh1lVlo34h7Fze37JXz9anmdaOka6"
		const uintH1KzDDW = BigInt("82")
		const BACMARSLPTOKENPoolvU4mrzA = await BACMARSLPTOKENPool.new(stringF4Aplmn, stringSZHVrX, uintH1KzDDW, {from: accounts[0]});
		const uinteEYP23V = BigInt("1192")
		const uintOcjwxH = BigInt("1589")
		const uintjrIBpA = BigInt("815")
		const addressNC3ay33 = accounts[3]
		const uint256EFv933d = await BACMARSLPTOKENPoolvU4mrzA.withdraw.call(uinteEYP23V, {from: accounts[4]});
		const uint256IjdN3DQ = await BACMARSLPTOKENPoolvU4mrzA.stake.call(uintOcjwxH, {from: accounts[4]});
		const uint256EDqGJAC = await BACMARSLPTOKENPoolvU4mrzA.totalSupply.call({from: accounts[0]});
		await BACMARSLPTOKENPoolvU4mrzA.exit.call({from: accounts[3]});
		const uint256uPLEaC = await BACMARSLPTOKENPoolvU4mrzA.withdraw.call(uintjrIBpA, {from: accounts[1]});
		const uint256tcIJ7Es = await BACMARSLPTOKENPoolvU4mrzA.balanceOf.call(addressNC3ay33, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVKWKerf = "p9g7IvTpCndujlCYMSsQyr8wh1hSTLOxUNfTq0SDYHu8UQWKq1IYzISWy5y27MY5c"
		const stringdXRuCvB = "ThPcO5iKVLbBTF7ygJ5idSxWolD4xJIW64lUeoUmv3GkKc"
		const uintYBi5NyG = BigInt("81")
		const BACMARSLPTOKENPoolqxc7jt5 = await BACMARSLPTOKENPool.new(stringVKWKerf, stringdXRuCvB, uintYBi5NyG, {from: accounts[2]});
		const uintN7rQxAK = BigInt("1081")
		const uintimddTHH = BigInt("1550")
		const uint256bysd25F = await BACMARSLPTOKENPoolqxc7jt5.stake.call(uintN7rQxAK, {from: accounts[2]});
		const uint256NLqMuwH = await BACMARSLPTOKENPoolqxc7jt5.withdraw.call(uintimddTHH, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolqxc7jt5.exit.call({from: accounts[3]});
		const uint256ZYXEa6j = await BACMARSLPTOKENPoolqxc7jt5.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOsO6maC = "CGlLMZO2aNZIglBOKbL6PeE6rrXek8tzDSO1caU89vhvaQl"
		const stringnIdfDj7 = "OlfDjToO38whDWx5x3Skj2ubVMm4F9Oxzy77J6ZwqMFhYT7d0KmKQYjuaRaTiB2z7unLfD6D"
		const uintYue4pKY = BigInt("172")
		const BACMARSLPTOKENPoolYdv5Gx = await BACMARSLPTOKENPool.new(stringOsO6maC, stringnIdfDj7, uintYue4pKY, {from: accounts[0]});
		const uintYdrkO5 = BigInt("1374")
		const uintJFT797V = BigInt("1463")
		const uintjEZWWBX = BigInt("507")
		const uint256q25lavh = await BACMARSLPTOKENPoolYdv5Gx.totalSupply.call({from: accounts[0]});
		const uint256L4guARX = await BACMARSLPTOKENPoolYdv5Gx.withdraw.call(uintYdrkO5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VPH2JsY = await BACMARSLPTOKENPoolYdv5Gx.notifyRewardAmount.call(uintJFT797V, {from: accounts[2]});
		const uint256W4hd4p9 = await BACMARSLPTOKENPoolYdv5Gx.getRewardForDuration.call({from: accounts[2]});
		const uint256T7lSqYv = await BACMARSLPTOKENPoolYdv5Gx.stake.call(uintjEZWWBX, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXBGgCBu = "hloKGEIyPnC8tED2UgP9BQi5xeS1qFbfv9YejxZqUd"
		const stringTauQUVg = "himsJiSJyOPeGcDW7qoOBtG1NofR2Br85fNaLViQ9bHHcq"
		const uintY5X12Y8 = BigInt("48")
		const BACMARSLPTOKENPoolp8D0zdR = await BACMARSLPTOKENPool.new(stringXBGgCBu, stringTauQUVg, uintY5X12Y8, {from: accounts[3]});
		const addressagtY63C = accounts[2]
		const uint256uC8m8vH = await BACMARSLPTOKENPoolp8D0zdR.rewardPerToken.call({from: accounts[0]});
		const stringlTi8xIi = await BACMARSLPTOKENPoolp8D0zdR.name.call({from: accounts[1]});
		const uint256Wv03XhI = await BACMARSLPTOKENPoolp8D0zdR.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolp8D0zdR.onlyRewardsDistribution.call({from: accounts[1]});
		const addressOGjbu5y = await BACMARSLPTOKENPoolp8D0zdR.updateReward.call(addressagtY63C, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringosepz17 = "NCINoppVFsCppj6dh8OUMbDBWGOnnN17b7wFa8gWgb6boXjhNa4hMFsF9fUhUPGOnW9nDKkWUm7jSYSJXnNgajsuTDcb"
		const stringl2RWnbp = "GdnYkYb2yhan"
		const uintcEp5uqT = BigInt("145")
		const BACMARSLPTOKENPoolw21Nmee = await BACMARSLPTOKENPool.new(stringosepz17, stringl2RWnbp, uintcEp5uqT, {from: accounts[0]});
		const uinttBGRP7 = BigInt("790")
		const uint256W90HcQZ = await BACMARSLPTOKENPoolw21Nmee.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256Q0ZkxMU = await BACMARSLPTOKENPoolw21Nmee.withdraw.call(uinttBGRP7, {from: accounts[2]});
		await BACMARSLPTOKENPoolw21Nmee.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPoolw21Nmee.onlyRewardsDistribution.call({from: accounts[2]});
		const uint8LLtCK2 = await BACMARSLPTOKENPoolw21Nmee.decimals.call({from: accounts[4]});
		const stringDIXlQcb = await BACMARSLPTOKENPoolw21Nmee.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringABRCobb = "krygQHxly9aMLnozZmXGUmaLvjACT2fP6Gu4cAC26eWnnpI4NzcqOvTYFnkaBgCNsS5Quvze0zJdt"
		const stringBA6YF4j = "nhKVIRHETKqihV9qsO"
		const uintgBISa7q = BigInt("133")
		const BACMARSLPTOKENPoolTkdFW6f = await BACMARSLPTOKENPool.new(stringABRCobb, stringBA6YF4j, uintgBISa7q, {from: accounts[0]});
		const address1Yofqm = accounts[1]
		const addressNw5Y8Kj = "0x0000000000000000000000000000000000000001"
		const addressazwTtl = accounts[1]
		const uint256mdYC4u2 = await BACMARSLPTOKENPoolTkdFW6f.rewardPerToken.call({from: accounts[1]});
		const uint256MVNHoiq = await BACMARSLPTOKENPoolTkdFW6f.earned.call(address1Yofqm, {from: accounts[2]});
		const uint256oaTbVvw = await BACMARSLPTOKENPoolTkdFW6f.balanceOf.call(addressNw5Y8Kj, {from: accounts[1]});
		const addressUCX38f = await BACMARSLPTOKENPoolTkdFW6f.updateReward.call(addressazwTtl, {from: accounts[4]});
		await BACMARSLPTOKENPoolTkdFW6f.exit.call({from: accounts[5]});
		const uint256bgUpeqD = await BACMARSLPTOKENPoolTkdFW6f.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrfiDUh = "XOP70dauGpy6oyE8t34iihOjKDrOSgkBmwT0gbieJfVmP7dmWiTmlBHlzVwLLxdFwHk6D61XVUYOUroRsVbW7rc"
		const stringHFqM5Tp = "4H9bv4Udptw39KgatMoXOAf7Azwvvlkp1KmJ1TIplLdEgVqv9iAnmi6YgIw"
		const uintXhIfNtc = BigInt("77")
		const BACMARSLPTOKENPoolUmmSzOn = await BACMARSLPTOKENPool.new(stringrfiDUh, stringHFqM5Tp, uintXhIfNtc, {from: accounts[0]});
		const addressvDyuAUo = accounts[4]
		const uint8eeBHIBT = await BACMARSLPTOKENPoolUmmSzOn.decimals.call({from: accounts[4]});
		const uint256StwO611 = await BACMARSLPTOKENPoolUmmSzOn.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256hFieLNY = await BACMARSLPTOKENPoolUmmSzOn.earned.call(addressvDyuAUo, {from: accounts[3]});
		await BACMARSLPTOKENPoolUmmSzOn.getReward.call({from: accounts[2]});
		const uint256kvOciIb = await BACMARSLPTOKENPoolUmmSzOn.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIFyS504 = "QtHK1ttVW8220K2MKd5SB1CWnq"
		const stringb1b6zdd = "gIWeWD72eILTXG0wbRpHv63KdhOwA9eU7adc5XVXoj5Qv9wYknNf2WBvyaS7psWPcMp1fVX124lEO"
		const uintwRN0FfK = BigInt("104")
		const BACMARSLPTOKENPoolYR5YIRq = await BACMARSLPTOKENPool.new(stringIFyS504, stringb1b6zdd, uintwRN0FfK, {from: accounts[1]});
		const uint8xEBzH4 = await BACMARSLPTOKENPoolYR5YIRq.decimals.call({from: accounts[3]});
		const stringeKAgo2C = await BACMARSLPTOKENPoolYR5YIRq.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIdGbp93 = "4dBabmOrHKtm4s6zz0JkXZhhorIr6dVkw067LdSDEL4SlTsgWYmDo95QE9BBtXQ1"
		const stringb1KtAxj = "UPerICCNdg7oUKptrNj2pxoIFgjRTAVXpzfIoVRWtEPO"
		const uintFol3m0w = BigInt("236")
		const BACMARSLPTOKENPoolvdcqB9x = await BACMARSLPTOKENPool.new(stringIdGbp93, stringb1KtAxj, uintFol3m0w, {from: accounts[4]});
		const byteOmQZrr = "0x070f1706051c120a120312201e1315050f0d1d18101d1916120f170c1108081e"
		const byteeUqA8V5 = "0x1a1a13110c1d150303090e080c02031f071a0f160f1614191f080c0c1f121a0f"
		const uintFdcYYgX = BigInt("216")
		const uintwh9VUz4 = BigInt("1532")
		const uint1mO5zV = BigInt("622")
		const uint256PrWSyi = await BACMARSLPTOKENPoolvdcqB9x.totalSupply.call({from: accounts[5]});
		const uint256dmTU7Jt = await BACMARSLPTOKENPoolvdcqB9x.stakeWithPermit.call(uint1mO5zV, uintwh9VUz4, uintFdcYYgX, byteeUqA8V5, byteOmQZrr, {from: accounts[4]});
		await BACMARSLPTOKENPoolvdcqB9x.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMgmBmqy = "hvBDsVoteYdH4QeyHYF2tJvLVgRbxAaf3p9Hka3C7xqaaIycDr2u9WUXyQzyFINrA31DSlQwliUYlCUNoaLguoUSlbTWPp0"
		const stringurAcMT6 = "kOLwepRmbspjO8MpfxqOQmFYSGHsDTm63BnVcsPf46KsPgF4xm8b4dCLXF8c4DGKh5XeHKu9gwVL4ecLYYVF6wMZriiah"
		const uinteOH4BTV = BigInt("169")
		const BACMARSLPTOKENPoolJdgiBMP = await BACMARSLPTOKENPool.new(stringMgmBmqy, stringurAcMT6, uinteOH4BTV, {from: accounts[3]});
		const byteg78L5B = "0x060502081c14021c1f011012071015110a0707201f16091d000c120d08031016"
		const bytekGt0TwH = "0x0f1f0b1b10080d201419120e1319200f12140d1b0c1d1e1a0604111418200c14"
		const uintFm5hmY = BigInt("42")
		const uintHfGlGKu = BigInt("1981")
		const uintmoy6ElE = BigInt("1100")
		const uintabv7kqc = BigInt("1444")
		const addressLSwzNo4 = accounts[0]
		const uintFg5KdaB = BigInt("564")
		const stringBGeofBN = await BACMARSLPTOKENPoolJdgiBMP.symbol.call({from: accounts[3]});
		const uint256siiMRqo = await BACMARSLPTOKENPoolJdgiBMP.stakeWithPermit.call(uintmoy6ElE, uintHfGlGKu, uintFm5hmY, bytekGt0TwH, byteg78L5B, {from: accounts[5]});
		await BACMARSLPTOKENPoolJdgiBMP.nonReentrant.call({from: accounts[2]});
		const uint256TR8jeDx = await BACMARSLPTOKENPoolJdgiBMP.withdraw.call(uintabv7kqc, {from: accounts[3]});
		const uint256ysqpazn = await BACMARSLPTOKENPoolJdgiBMP.balanceOf.call(addressLSwzNo4, {from: accounts[3]});
		const uint256JvKYKr1 = await BACMARSLPTOKENPoolJdgiBMP.withdraw.call(uintFg5KdaB, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressF5txYAO = accounts[3]
		const addresszJjrB1Y = accounts[0]
		const addressqg3zRER = accounts[3]
		const BACMARSLPTOKENPool5ZItZW = await BACMARSLPTOKENPool.new(addressF5txYAO, addresszJjrB1Y, addressqg3zRER, {from: accounts[4]});
		const uintwmjHuwe = BigInt("306")
		const uintmAcbffH = BigInt("80")
		const addressyDfTT6C = accounts[2]
		const byteQkrs2T7 = "0x031c160f1f02070917050b0404040d1e181b18000f201a1e131b0d0e0613051f"
		const byteAtZQj12 = "0x130a1a0e1b090512090d08041a03170b1818131713161b1f0210070c13171b1f"
		const uintTo8O7Sn = BigInt("151")
		const uintaTK6xa = BigInt("1641")
		const uintYe6IOu = BigInt("1574")
//		await BACMARSLPTOKENPool5ZItZW.getReward.call({from: accounts[5]});
//		const uint256NU4i1VJ = await BACMARSLPTOKENPool5ZItZW.rewardPerToken.call({from: accounts[1]});
//		const uint256RVgNli = await BACMARSLPTOKENPool5ZItZW.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256daiJNLH = await BACMARSLPTOKENPool5ZItZW.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256FRRUuXs = await BACMARSLPTOKENPool5ZItZW.notifyRewardAmount.call(uintwmjHuwe, {from: accounts[3]});
//		const uint256Vyo4uyl = await BACMARSLPTOKENPool5ZItZW.stake.call(uintmAcbffH, {from: accounts[4]});
//		const addresseX4IL2X = await BACMARSLPTOKENPool5ZItZW.updateReward.call(addressyDfTT6C, {from: accounts[1]});
//		await BACMARSLPTOKENPool5ZItZW.exit.call({from: accounts[1]});
//		const uint256GlZA6t = await BACMARSLPTOKENPool5ZItZW.stakeWithPermit.call(uintYe6IOu, uintaTK6xa, uintTo8O7Sn, byteAtZQj12, byteQkrs2T7, {from: accounts[0]});

		await expect(BACMARSLPTOKENPool5ZItZW.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringj190HBF = "gXZHy9vIAq8FB1uMyQc1ep5QxPbYnk3agSyhluI2sl28lTlDUb77BjQ2jpjAMngGCX2AC9c7Ln4BcSSq0rGjqgwOYO4SUw9rU"
		const stringkfKhuYp = "lazSMIsoGjdkzz8XYMhjg7N6X5x4uHlLUfykMUbcKXvU7x3I936Qd"
		const uintTkgZ6Fo = BigInt("139")
		const BACMARSLPTOKENPooldyiUvyM = await BACMARSLPTOKENPool.new(stringj190HBF, stringkfKhuYp, uintTkgZ6Fo, {from: accounts[4]});
		const addressk0y9T9D = accounts[0]
		const uintBj9u9R4 = BigInt("590")
		const addresskDihuzM = accounts[1]
		await BACMARSLPTOKENPooldyiUvyM.getReward.call({from: accounts[3]});
		const uint256gtf42BK = await BACMARSLPTOKENPooldyiUvyM.earned.call(addressk0y9T9D, {from: accounts[5]});
		const uint256KS1ottr = await BACMARSLPTOKENPooldyiUvyM.rewardPerToken.call({from: accounts[3]});
		const uint256at3XS90 = await BACMARSLPTOKENPooldyiUvyM.withdraw.call(uintBj9u9R4, {from: accounts[0]});
		const uint256uVrxyWe = await BACMARSLPTOKENPooldyiUvyM.balanceOf.call(addresskDihuzM, {from: accounts[3]});
		const uint8WNJBL6 = await BACMARSLPTOKENPooldyiUvyM.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEka5uv6 = "M6Q9PHvTNvUjTd6M6yn9AvD3"
		const stringf6eMyk = "InPJNsUC40cu1pvBoIsPAa8jGs4XlNRhmw3SO0rRx2"
		const uintTE9NcrU = BigInt("59")
		const BACMARSLPTOKENPoolbylDIDR = await BACMARSLPTOKENPool.new(stringEka5uv6, stringf6eMyk, uintTE9NcrU, {from: accounts[2]});
		const addressQQaFBjv = accounts[0]
		const addressCqBhTa9 = accounts[0]
		const uint256PkI60F = await BACMARSLPTOKENPoolbylDIDR.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256wFmbOwj = await BACMARSLPTOKENPoolbylDIDR.totalSupply.call({from: accounts[4]});
		const uint256CszmrPp = await BACMARSLPTOKENPoolbylDIDR.balanceOf.call(addressQQaFBjv, {from: accounts[1]});
		const uint2568wYZ3P = await BACMARSLPTOKENPoolbylDIDR.earned.call(addressCqBhTa9, {from: accounts[3]});
		await BACMARSLPTOKENPoolbylDIDR.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhKMHNT = "Pn"
		const stringej0tA1F = "rrPCcDvv7eM3whN2REOwJHmAiY0xgre1MUuFxMntfXjd0clb7MIQoOjO5xc7eElNqNQVCyaxJnRaVcjuy7zVnh"
		const uinth4FiSCh = BigInt("40")
		const BACMARSLPTOKENPoolXCNsruE = await BACMARSLPTOKENPool.new(stringhKMHNT, stringej0tA1F, uinth4FiSCh, {from: accounts[2]});
		const uintG3J2gRv = BigInt("364")
		const stringG71HOUw = await BACMARSLPTOKENPoolXCNsruE.symbol.call({from: accounts[5]});
		const uint8bco9rM = await BACMARSLPTOKENPoolXCNsruE.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoolXCNsruE.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256SZ78Mk = await BACMARSLPTOKENPoolXCNsruE.notifyRewardAmount.call(uintG3J2gRv, {from: accounts[4]});
		const uint256yjKxuQE = await BACMARSLPTOKENPoolXCNsruE.rewardPerToken.call({from: accounts[3]});
		const uint256AjYtGwa = await BACMARSLPTOKENPoolXCNsruE.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJechQiW = ""
		const stringkc64Cbt = "loGu1UNGPEGJvtIJanXXA2LO6RsMEK4KfyaqqUDgcmJC33RnjMk6BqMkMn0XTBNes9mxSpohZoCfYqnyAQmtcBG0GD7FNMdCif"
		const uintB5YtnJo = BigInt("243")
		const BACMARSLPTOKENPoolzF0X5Z = await BACMARSLPTOKENPool.new(stringJechQiW, stringkc64Cbt, uintB5YtnJo, {from: "0x0000000000000000000000000000000000000001"});
		const addressIAwTweP = accounts[0]
		const uint8mYXW71h = await BACMARSLPTOKENPoolzF0X5Z.decimals.call({from: accounts[3]});
		const uint256wO5C0st = await BACMARSLPTOKENPoolzF0X5Z.balanceOf.call(addressIAwTweP, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFH8cgrk = "DYXgbtayDt9psQq"
		const stringvXULnWl = "ykzm5bd7RlBBvIqabKWhbKg420zvQHulSmm7hUHOslwEKwesECufSrvtHwU7OjjPMc"
		const uintHKlr0rB = BigInt("189")
		const BACMARSLPTOKENPoolj7z7BSM = await BACMARSLPTOKENPool.new(stringFH8cgrk, stringvXULnWl, uintHKlr0rB, {from: accounts[2]});
		const addressliYKcDH = accounts[4]
		const stringCO5OR0M = await BACMARSLPTOKENPoolj7z7BSM.symbol.call({from: accounts[4]});
		await BACMARSLPTOKENPoolj7z7BSM.exit.call({from: accounts[3]});
		const addressc2VPrWr = await BACMARSLPTOKENPoolj7z7BSM.updateReward.call(addressliYKcDH, {from: accounts[2]});
		const uint256sM8caow = await BACMARSLPTOKENPoolj7z7BSM.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHdpHjIT = "4yMWChEEP0Do65MqYP9OInCnQADLRs8e4JOspWjtWHGItIul79vs2sMcHFX"
		const stringAbWKMnT = "e"
		const uintxFKVsf = BigInt("138")
		const BACMARSLPTOKENPoolUfVq68t = await BACMARSLPTOKENPool.new(stringHdpHjIT, stringAbWKMnT, uintxFKVsf, {from: accounts[4]});
		const uintNQANip1 = BigInt("1256")
		const addresskeSUkLm = accounts[3]
		const uint256ZZddPcj = await BACMARSLPTOKENPoolUfVq68t.withdraw.call(uintNQANip1, {from: accounts[4]});
		const uint256LSxUNJ7 = await BACMARSLPTOKENPoolUfVq68t.balanceOf.call(addresskeSUkLm, {from: accounts[3]});
		await BACMARSLPTOKENPoolUfVq68t.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvPz9TdH = "LSzbq3wntPRNQUmdqBcWBnHMdTSL4Oj5sjkJCiViil2uj5cqSN2PhmL7K0QFE"
		const stringisbFbSe = "iUhHhP7H6d6Yn6LjEIspD6jv"
		const uintTSG5P9 = BigInt("41")
		const BACMARSLPTOKENPoolrOus47 = await BACMARSLPTOKENPool.new(stringvPz9TdH, stringisbFbSe, uintTSG5P9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kE0ctwv = await BACMARSLPTOKENPoolrOus47.getRewardForDuration.call({from: accounts[3]});
		const uint256RuVZ1A = await BACMARSLPTOKENPoolrOus47.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmiHEWWt = "VvWgWrk9Px6NTUfQUrRORZIn5mMQS3fpQnZxHbvXxQkx6jRJbCavHmqeWuXr"
		const stringcClMkZG = "7vXEh6KQrYCVumVAvxmeqPZng1wBNv7wRdpXhGjKBDDPkO3PNlPYWVF"
		const uintcbcjOQh = BigInt("36")
		const BACMARSLPTOKENPoolFz0SoHx = await BACMARSLPTOKENPool.new(stringmiHEWWt, stringcClMkZG, uintcbcjOQh, {from: accounts[0]});
		const uintBco8UXA = BigInt("396")
		const addressxOZYR16 = accounts[3]
		const uintHNg2DRp = BigInt("264")
		const uint256ocZl36 = await BACMARSLPTOKENPoolFz0SoHx.withdraw.call(uintBco8UXA, {from: accounts[0]});
		const addressHZHeCsY = await BACMARSLPTOKENPoolFz0SoHx.updateReward.call(addressxOZYR16, {from: accounts[5]});
		const uint256Yfv5E1a = await BACMARSLPTOKENPoolFz0SoHx.totalSupply.call({from: accounts[2]});
		const uint256WS1RD8A = await BACMARSLPTOKENPoolFz0SoHx.withdraw.call(uintHNg2DRp, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwlNpCyH = "tpsQZfKztbmOHwBMAbLHQDQGQV63OjOm3DgRNGxPWRgA9W554ATPO"
		const stringdryImeT = "Hw1S07pcrmOXlq"
		const uintn6kBKEN = BigInt("249")
		const BACMARSLPTOKENPoolg7iPF9u = await BACMARSLPTOKENPool.new(stringwlNpCyH, stringdryImeT, uintn6kBKEN, {from: accounts[1]});
		const addresseafvqse = accounts[2]
		await BACMARSLPTOKENPoolg7iPF9u.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256lvprA9g = await BACMARSLPTOKENPoolg7iPF9u.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256xLRf0lb = await BACMARSLPTOKENPoolg7iPF9u.rewardPerToken.call({from: accounts[3]});
		const uint256XuONARh = await BACMARSLPTOKENPoolg7iPF9u.balanceOf.call(addresseafvqse, {from: accounts[4]});
		await BACMARSLPTOKENPoolg7iPF9u.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsjkV4Aj = "1utOVv91D2Sc"
		const stringI4UGPnM = "r9YInP2Pg"
		const uintF1FpYtN = BigInt("179")
		const BACMARSLPTOKENPool7uuojU = await BACMARSLPTOKENPool.new(stringsjkV4Aj, stringI4UGPnM, uintF1FpYtN, {from: "0x0000000000000000000000000000000000000001"});
		const uintGUImXJp = BigInt("1")
		await BACMARSLPTOKENPool7uuojU.exit.call({from: accounts[1]});
		const uint256loG5TvQ = await BACMARSLPTOKENPool7uuojU.rewardPerToken.call({from: accounts[1]});
		const uint256ODZ0KKS = await BACMARSLPTOKENPool7uuojU.withdraw.call(uintGUImXJp, {from: accounts[2]});
		const uint256ykApabL = await BACMARSLPTOKENPool7uuojU.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiK85gIx = "uQeFiK4jbuDTnu7gLHnjKKbGWkyoTM0TgcO5NXmoiMPNTNjqjFwXJmE7YFv87MQpWX5EaoIUjK9n11yaf"
		const stringG0mSJ8M = "ETnZInXvTm653zFMJ47gJTAnjEMGsvsAcmZb7LV4uHs2P1J8LocnhSPshgFvcCZKtl288LZ2k8AHgD"
		const uintIWjivj = BigInt("203")
		const BACMARSLPTOKENPoolEm6ha0u = await BACMARSLPTOKENPool.new(stringiK85gIx, stringG0mSJ8M, uintIWjivj, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolEm6ha0u.exit.call({from: accounts[2]});
		const uint256q4AOjyB = await BACMARSLPTOKENPoolEm6ha0u.totalSupply.call({from: accounts[5]});
		await BACMARSLPTOKENPoolEm6ha0u.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLvdCpAd = "SlAnNZnPf4P4mc8uyXN1xjScauVfqKj7adx2Tkd4yBjJEhvekbNDnDRudksHz1gBuaxpuZFB6VfANeGOarGi32Q7qdUe6S"
		const stringzUhkkTr = "YAil"
		const uintGxebRn9 = BigInt("209")
		const BACMARSLPTOKENPoolUnVQ9oX = await BACMARSLPTOKENPool.new(stringLvdCpAd, stringzUhkkTr, uintGxebRn9, {from: accounts[5]});
		const addressvD0ojJ = accounts[5]
		const stringGQNVv6c = await BACMARSLPTOKENPoolUnVQ9oX.symbol.call({from: accounts[0]});
		const uint2564k3UKG = await BACMARSLPTOKENPoolUnVQ9oX.earned.call(addressvD0ojJ, {from: accounts[4]});
		const uint256mPgCh2H = await BACMARSLPTOKENPoolUnVQ9oX.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolUnVQ9oX.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwHQH7WJ = "XF3XtW0r9HUsrUvuFzP7wAsRGnnQcmCooK1LWFgvi1FV5wolwW5pVX422O"
		const stringa2gSFla = "BK3pNL5UbuaXsTMiH0GoeMHRJR3yxFuKFryp9T6HnyLeMSYMOT9xz3CUnH9GOw4Kzvvad5Q5OHB2fDQ6YpPcEqb9pUuvTzRCbW"
		const uintHmG57oI = BigInt("183")
		const BACMARSLPTOKENPoolX5H7klj = await BACMARSLPTOKENPool.new(stringwHQH7WJ, stringa2gSFla, uintHmG57oI, {from: accounts[0]});
		const uintu0tY2uV = BigInt("253")
		const uint256nzHQM8N = await BACMARSLPTOKENPoolX5H7klj.withdraw.call(uintu0tY2uV, {from: accounts[4]});
		const uint256cxt1Jpg = await BACMARSLPTOKENPoolX5H7klj.lastTimeRewardApplicable.call({from: accounts[1]});
		const strings1we96k = await BACMARSLPTOKENPoolX5H7klj.symbol.call({from: accounts[4]});
		const uint256TRsEXx = await BACMARSLPTOKENPoolX5H7klj.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolX5H7klj.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZG9jptK = "8iMICHystrOIwH312tL9Ex61R4yUFIK3FbXF"
		const stringeIANn4O = "HlPzgUCP"
		const uint4csW1b = BigInt("140")
		const BACMARSLPTOKENPoolIqy40R = await BACMARSLPTOKENPool.new(stringZG9jptK, stringeIANn4O, uint4csW1b, {from: accounts[0]});
		const byte5EnEa5 = "0x121706180409131616020413031b1f070d201410151507131019181a11040c05"
		const byteB5pWLEj = "0x030f0304130f1c1b1b141814020d1d061d0417030304021b181f0912171d1b1c"
		const uintclUqDsy = BigInt("28")
		const uintReQlKcO = BigInt("298")
		const uintNtEPQsI = BigInt("1204")
		const stringNffK1k = await BACMARSLPTOKENPoolIqy40R.name.call({from: accounts[0]});
		const uint256LnfoQGv = await BACMARSLPTOKENPoolIqy40R.stakeWithPermit.call(uintNtEPQsI, uintReQlKcO, uintclUqDsy, byteB5pWLEj, byte5EnEa5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256e1fYscj = await BACMARSLPTOKENPoolIqy40R.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrXlmpa = "cXQOiCcngSvIdX4bCI"
		const stringhYQvzYJ = "frYL3hzQK915Vo4X"
		const uintYTTjdIr = BigInt("165")
		const BACMARSLPTOKENPoolDb85Lv6 = await BACMARSLPTOKENPool.new(stringrXlmpa, stringhYQvzYJ, uintYTTjdIr, {from: accounts[5]});
		const addresso1Eo8Xz = accounts[2]
		const uintS4HDQlW = BigInt("1419")
		const uint256N8Ux8bM = await BACMARSLPTOKENPoolDb85Lv6.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256jqoHP6Z = await BACMARSLPTOKENPoolDb85Lv6.balanceOf.call(addresso1Eo8Xz, {from: accounts[2]});
		const stringeelICYI = await BACMARSLPTOKENPoolDb85Lv6.symbol.call({from: accounts[2]});
		const uint256jDXHNVf = await BACMARSLPTOKENPoolDb85Lv6.withdraw.call(uintS4HDQlW, {from: accounts[2]});
	});
})