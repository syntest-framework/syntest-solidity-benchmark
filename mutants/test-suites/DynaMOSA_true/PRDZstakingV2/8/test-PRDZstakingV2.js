const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2FWuEpwW = await PRDZstakingV2.new({from: accounts[5]});
		const addressP3ErnXn = accounts[1]
//		await PRDZstakingV2FWuEpwW.claimScoreEth.call({from: accounts[1]});
//		await PRDZstakingV2FWuEpwW.claimReward.call({from: accounts[0]});
//		const uintOMBsvDA = await PRDZstakingV2FWuEpwW.getTotalClaimed.call({from: accounts[4]});
//		const uintqKrH0cN = await PRDZstakingV2FWuEpwW.getPendingReward.call(addressP3ErnXn, {from: accounts[3]});

		await expect(PRDZstakingV2FWuEpwW.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ORxBBm = await PRDZstakingV2.new({from: accounts[0]});
		const uintJcrcJZx = BigInt("599")
		const addressn5H554y = accounts[1]
		const addressGJ98PrH = "0x0000000000000000000000000000000000000001"
		const addresskQDGYFa = "0x0000000000000000000000000000000000000001"
//		const uintYzJNo2A = await PRDZstakingV2ORxBBm.unstake.call(uintJcrcJZx, {from: accounts[2]});
//		const addressBTf3fsK = await PRDZstakingV2ORxBBm.transferOwnership.call(addressn5H554y, {from: accounts[4]});
//		const uintL1yRhsa = await PRDZstakingV2ORxBBm.getPendingReward.call(addressGJ98PrH, {from: accounts[5]});
//		const uintOznUT53 = await PRDZstakingV2ORxBBm.getPendingReward.call(addresskQDGYFa, {from: accounts[4]});
//		const uintNTX8zl5 = await PRDZstakingV2ORxBBm.getNumberOfHolders.call({from: accounts[0]});

		await expect(PRDZstakingV2ORxBBm.unstake.call(uintJcrcJZx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2taqCUO7 = await PRDZstakingV2.new({from: accounts[5]});
		const addressT2auBub = accounts[4]
		const addresszGWcU0a = accounts[4]
		const uintLFYjFTb = await PRDZstakingV2taqCUO7.getPendingReward.call(addressT2auBub, {from: accounts[2]});
//		await PRDZstakingV2taqCUO7.claimReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint2LVTit = await PRDZstakingV2taqCUO7.getStakingScore.call(addresszGWcU0a, {from: "0x0000000000000000000000000000000000000001"});
//		const uintMErsolG = await PRDZstakingV2taqCUO7.getTotalUnStaked.call({from: accounts[1]});
//		const uintIGTOqT = await PRDZstakingV2taqCUO7.getTotalClaimed.call({from: accounts[4]});

		assert.equal(uintLFYjFTb, BigInt("0"))
		await expect(PRDZstakingV2taqCUO7.claimReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2MOrRb0M = await PRDZstakingV2.new({from: accounts[5]});
		const uintzpNI0QZ = await PRDZstakingV2MOrRb0M.getTotalUnStaked.call({from: accounts[0]});
		const uintN1sPlSp = await PRDZstakingV2MOrRb0M.getTotalUnStaked.call({from: accounts[3]});
//		await PRDZstakingV2MOrRb0M.deposit.call({from: accounts[4]});
//		const uintzZAiQpy = await PRDZstakingV2MOrRb0M.getTotalClaimed.call({from: accounts[1]});

		assert.equal(uintN1sPlSp, BigInt("0"))
		assert.equal(uintzpNI0QZ, BigInt("0"))
		await expect(PRDZstakingV2MOrRb0M.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2RwXraro = await PRDZstakingV2.new({from: accounts[1]});
		const uintQ9v63BB = BigInt("1572")
		const addressYzaekeu = accounts[0]
//		await PRDZstakingV2RwXraro.deposit.call({from: accounts[1]});
//		const uintGGCxjl = await PRDZstakingV2RwXraro.getNumberOfHolders.call({from: accounts[0]});
//		const uintXOaI3Vf = await PRDZstakingV2RwXraro.updateScoreEth.call(uintQ9v63BB, {from: accounts[2]});
//		const uintKTEDsIm = await PRDZstakingV2RwXraro.getStakingScore.call(addressYzaekeu, {from: accounts[1]});

		await expect(PRDZstakingV2RwXraro.deposit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2JswEmzV = await PRDZstakingV2.new({from: accounts[2]});
		const uintLAuoGQ4 = BigInt("610")
		const uintGuzoeAU = BigInt("937")
//		const uintsn48aL0 = await PRDZstakingV2JswEmzV.stake.call(uintLAuoGQ4, {from: accounts[3]});
//		const uintNlAVHE8 = await PRDZstakingV2JswEmzV.getTotalFeeCollected.call({from: accounts[2]});
//		const uinttB8KzvX = await PRDZstakingV2JswEmzV.getTotalStaked.call({from: accounts[4]});
//		const uintIbPhekb = await PRDZstakingV2JswEmzV.getTotalUnStaked.call({from: accounts[1]});
//		const uintYKziQk = await PRDZstakingV2JswEmzV.updateScoreEth.call(uintGuzoeAU, {from: accounts[4]});

		await expect(PRDZstakingV2JswEmzV.stake.call(uintLAuoGQ4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2g6UbNyq = await PRDZstakingV2.new({from: accounts[4]});
//		await PRDZstakingV2g6UbNyq.claimReward.call({from: accounts[4]});
//		await PRDZstakingV2g6UbNyq.deposit.call({from: accounts[1]});
//		await PRDZstakingV2g6UbNyq.deposit.call({from: accounts[3]});
//		const uintntn6eoi = await PRDZstakingV2g6UbNyq.getNumberOfHolders.call({from: accounts[2]});
//		await PRDZstakingV2g6UbNyq.onlyOwner.call({from: accounts[4]});

		await expect(PRDZstakingV2g6UbNyq.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2FWuEpwW = await PRDZstakingV2.new({from: accounts[5]});
		const addresspPcHqtH = accounts[1]
		const uintUiOl9ND = await PRDZstakingV2FWuEpwW.getTotalUnStaked.call({from: accounts[0]});
		const uintBJQHwlq = await PRDZstakingV2FWuEpwW.getTotalFeeCollected.call({from: accounts[0]});
//		await PRDZstakingV2FWuEpwW.claimScoreEth.call({from: accounts[1]});
//		await PRDZstakingV2FWuEpwW.claimReward.call({from: accounts[0]});
//		const uintOMBsvDA = await PRDZstakingV2FWuEpwW.getTotalClaimed.call({from: accounts[4]});
//		const uintqKrH0cN = await PRDZstakingV2FWuEpwW.getPendingReward.call(addresspPcHqtH, {from: accounts[3]});

		assert.equal(uintBJQHwlq, BigInt("0"))
		assert.equal(uintUiOl9ND, BigInt("0"))
		await expect(PRDZstakingV2FWuEpwW.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2taqZEZg = await PRDZstakingV2.new({from: accounts[1]});
		const addresspamlUuk = accounts[2]
		const addressMEAjlp2 = accounts[3]
		const uintzXa6wWs = await PRDZstakingV2taqZEZg.getStakingScore.call(addresspamlUuk, {from: accounts[4]});
		const uint1YUQhw = await PRDZstakingV2taqZEZg.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2taqZEZg.claimScoreEth.call({from: accounts[2]});
//		const uintTAw4Nnu = await PRDZstakingV2taqZEZg.getScoreEth.call(addressMEAjlp2, {from: accounts[3]});
//		const uintliCGAXs = await PRDZstakingV2taqZEZg.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintaNfqhYw = await PRDZstakingV2taqZEZg.getTotalFeeCollected.call({from: accounts[4]});

		assert.equal(uint1YUQhw, BigInt("0"))
		assert.equal(uintzXa6wWs, BigInt("0"))
		await expect(PRDZstakingV2taqZEZg.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Dd08H6F = await PRDZstakingV2.new({from: accounts[1]});
		const uintz3pHyqn = BigInt("1812")
		const uinthrlHR8C = BigInt("838")
		const addressXPRmgSj = accounts[5]
		const uintfbiQg8 = await PRDZstakingV2Dd08H6F.updateOffer.call(uinthrlHR8C, uintz3pHyqn, {from: accounts[1]});
		const uinttbo3Nf = await PRDZstakingV2Dd08H6F.getTotalClaimed.call({from: "0x0000000000000000000000000000000000000001"});
		const uintfdkSko = await PRDZstakingV2Dd08H6F.getTotalFeeCollected.call({from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2Dd08H6F.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uinteSJdEcn = await PRDZstakingV2Dd08H6F.getPendingReward.call(addressXPRmgSj, {from: accounts[1]});

		assert.equal(uintfdkSko, BigInt("0"))
		assert.equal(uinttbo3Nf, BigInt("0"))
		await expect(PRDZstakingV2Dd08H6F.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2YlSt5v = await PRDZstakingV2.new({from: accounts[0]});
		const addressUnzlSqw = accounts[2]
		const uintaG8j1d = BigInt("169")
		const uintvQ1Va0 = BigInt("1103")
		const addressPDhxNza = accounts[2]
		const uintQgrkzog = BigInt("730")
		const uinteZlKXzp = BigInt("172")
//		await PRDZstakingV2YlSt5v.claimReward.call({from: accounts[2]});
//		const addressnMEphq = await PRDZstakingV2YlSt5v.transferOwnership.call(addressUnzlSqw, {from: accounts[0]});
//		const uintyynEX2d = await PRDZstakingV2YlSt5v.stake.call(uintaG8j1d, {from: accounts[2]});
//		const uintrFwWCJi = await PRDZstakingV2YlSt5v.getTotalClaimed.call({from: accounts[0]});
//		const uintUPhGZz = await PRDZstakingV2YlSt5v.updateScoreEth.call(uintvQ1Va0, {from: accounts[2]});
//		const uintYUlSojr = await PRDZstakingV2YlSt5v.getPendingReward.call(addressPDhxNza, {from: accounts[0]});
//		const uintR3o8rnZ = await PRDZstakingV2YlSt5v.unstake.call(uintQgrkzog, {from: accounts[0]});
//		const uintJ792NDQ = await PRDZstakingV2YlSt5v.stake.call(uinteZlKXzp, {from: accounts[2]});

		await expect(PRDZstakingV2YlSt5v.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2y5gvzbZ = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSzHFBED = accounts[1]
		const uintOCRX9ra = BigInt("1721")
		const uintkoeTgWJ = BigInt("1865")
		const addressbiMPDo9 = accounts[1]
		const addressld2m3cX = accounts[3]
		const uinthzULf6 = BigInt("538")
		const uintv4DMjm = BigInt("1793")
		const uintLxQgGNn = await PRDZstakingV2y5gvzbZ.getStakingScore.call(addressSzHFBED, {from: accounts[2]});
		const uintKhEsuvR = await PRDZstakingV2y5gvzbZ.updateOffer.call(uintkoeTgWJ, uintOCRX9ra, {from: accounts[1]});
		const uintyObxpm = await PRDZstakingV2y5gvzbZ.getStakingScore.call(addressbiMPDo9, {from: accounts[3]});
		const uinteg8zqnm = await PRDZstakingV2y5gvzbZ.getTotalStaked.call({from: accounts[1]});
		const uintASvH13L = await PRDZstakingV2y5gvzbZ.getScoreEth.call(addressld2m3cX, {from: accounts[3]});
		const uintFr18RtU = await PRDZstakingV2y5gvzbZ.updateOffer.call(uintv4DMjm, uinthzULf6, {from: accounts[4]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2g6UbNyq = await PRDZstakingV2.new({from: accounts[4]});
		const addressRaiiiNq = accounts[0]
		const uint26MV2A = BigInt("1247")
//		await PRDZstakingV2g6UbNyq.claimReward.call({from: accounts[4]});
//		const uinttKBQ3vR = await PRDZstakingV2g6UbNyq.getScoreEth.call(addressRaiiiNq, {from: accounts[1]});
//		const uintk9lQiUF = await PRDZstakingV2g6UbNyq.updateScoreEth.call(uint26MV2A, {from: accounts[4]});

		await expect(PRDZstakingV2g6UbNyq.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2g6UbNyq = await PRDZstakingV2.new({from: accounts[4]});
		const uintlsXszr6 = BigInt("0")
//		await PRDZstakingV2g6UbNyq.deposit.call({from: accounts[0]});
//		const uintcrsREa3 = await PRDZstakingV2g6UbNyq.stake.call(uintlsXszr6, {from: accounts[5]});
//		const uintcrfRceL = await PRDZstakingV2g6UbNyq.getTotalStaked.call({from: accounts[1]});
//		const uintjSWB8x = await PRDZstakingV2g6UbNyq.getTotalFeeCollected.call({from: accounts[2]});
//		const uintHOi7c7g = await PRDZstakingV2g6UbNyq.getNumberOfHolders.call({from: accounts[1]});

		await expect(PRDZstakingV2g6UbNyq.deposit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})