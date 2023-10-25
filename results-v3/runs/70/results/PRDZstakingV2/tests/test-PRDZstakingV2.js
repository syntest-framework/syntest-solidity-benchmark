const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2wxVFqQr = await PRDZstakingV2.new({from: accounts[5]});
		const uintb5hiTEp = BigInt("1597")
		const addressn1C4ytW = accounts[0]
		const uintVm8zmV = await PRDZstakingV2wxVFqQr.getTotalUnStaked.call({from: accounts[4]});
		const uintcSb4Vqt = await PRDZstakingV2wxVFqQr.updateScoreEth.call(uintb5hiTEp, {from: accounts[2]});
		const uintsNKveLa = await PRDZstakingV2wxVFqQr.getStakingScore.call(addressn1C4ytW, {from: accounts[1]});
		const uintiofnxKm = await PRDZstakingV2wxVFqQr.getTotalFeeCollected.call({from: accounts[3]});

		assert.equal(uintVm8zmV, BigInt("0"))
		await expect(PRDZstakingV2wxVFqQr.updateScoreEth.call(uintb5hiTEp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Jeu4w0d = await PRDZstakingV2.new({from: accounts[0]});
		const uintTS1yS1h = BigInt("487")
		const addressjMmWpQu = "0x0000000000000000000000000000000000000001"
		const uintWY8ihz = await PRDZstakingV2Jeu4w0d.getTotalStaked.call({from: accounts[2]});
		const uintJJJrqKi = await PRDZstakingV2Jeu4w0d.stake.call(uintTS1yS1h, {from: accounts[2]});
		const uintHigiYKr = await PRDZstakingV2Jeu4w0d.getNumberOfHolders.call({from: accounts[0]});
		const addressqPob90b = await PRDZstakingV2Jeu4w0d.transferOwnership.call(addressjMmWpQu, {from: accounts[2]});

		assert.equal(uintWY8ihz, BigInt("0"))
		await expect(PRDZstakingV2Jeu4w0d.stake.call(uintTS1yS1h, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2DjRfQGz = await PRDZstakingV2.new({from: accounts[0]});
		const addressDB2n3u4 = "0x0000000000000000000000000000000000000001"
		const uintQzXvsWT = BigInt("1430")
		const addressEvy9k2x = accounts[4]
		const uintfnOwuD = BigInt("1142")
		const uintu3rA1sb = BigInt("1267")
		const addressjq91CzN = accounts[3]
		const uintazwAqM = await PRDZstakingV2DjRfQGz.getStakingScore.call(addressDB2n3u4, {from: accounts[0]});
		const uintvBLgQ8W = await PRDZstakingV2DjRfQGz.stake.call(uintQzXvsWT, {from: accounts[4]});
		const uintNqdpVsa = await PRDZstakingV2DjRfQGz.getStakingScore.call(addressEvy9k2x, {from: accounts[3]});
		const uintVlajADO = await PRDZstakingV2DjRfQGz.unstake.call(uintfnOwuD, {from: accounts[4]});
		const uintaNb7LM4 = await PRDZstakingV2DjRfQGz.stake.call(uintu3rA1sb, {from: accounts[0]});
		const uintcDae2qh = await PRDZstakingV2DjRfQGz.getStakingScore.call(addressjq91CzN, {from: accounts[1]});

		assert.equal(uintazwAqM, BigInt("0"))
		await expect(PRDZstakingV2DjRfQGz.stake.call(uintQzXvsWT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2W4Uz45G = await PRDZstakingV2.new({from: accounts[1]});
		const addressoP67rqJ = accounts[2]
		const uintv6rdOG = BigInt("1996")
		const addressYF5b6YH = accounts[2]
		await PRDZstakingV2W4Uz45G.deposit.call({from: accounts[1]});
		const uintHmqvtI1 = await PRDZstakingV2W4Uz45G.getStakingScore.call(addressoP67rqJ, {from: accounts[1]});
		const uinty7DHxK6 = await PRDZstakingV2W4Uz45G.unstake.call(uintv6rdOG, {from: accounts[2]});
		const uintvX0WJTq = await PRDZstakingV2W4Uz45G.getTotalClaimed.call({from: accounts[3]});
		const uintl57P7kP = await PRDZstakingV2W4Uz45G.getScoreEth.call(addressYF5b6YH, {from: accounts[0]});

		await expect(PRDZstakingV2W4Uz45G.deposit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2I9BnGAS = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressB81cMGY = accounts[0]
		const uintKN05FU = BigInt("1799")
		const uintLBRUHq6 = await PRDZstakingV2I9BnGAS.getNumberOfHolders.call({from: accounts[1]});
		await PRDZstakingV2I9BnGAS.claimReward.call({from: accounts[1]});
		const addressGQL7Sj7 = await PRDZstakingV2I9BnGAS.transferOwnership.call(addressB81cMGY, {from: accounts[5]});
		const uintFvqFV6l = await PRDZstakingV2I9BnGAS.updateScoreEth.call(uintKN05FU, {from: accounts[1]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2lQAsoJ2 = await PRDZstakingV2.new({from: accounts[0]});
		const uintl7B81XX = BigInt("144")
		const uint8C9fJE = await PRDZstakingV2lQAsoJ2.getTotalClaimed.call({from: accounts[0]});
		const uintDPkZ52W = await PRDZstakingV2lQAsoJ2.getNumberOfHolders.call({from: accounts[5]});
		const uintxcZwlbq = await PRDZstakingV2lQAsoJ2.getTotalFeeCollected.call({from: accounts[1]});
		const uintjAgjCA = await PRDZstakingV2lQAsoJ2.updateScoreEth.call(uintl7B81XX, {from: accounts[0]});

		assert.equal(uint8C9fJE, BigInt("0"))
		assert.equal(uintDPkZ52W, BigInt("0"))
		assert.equal(uintxcZwlbq, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV22jjO2j = await PRDZstakingV2.new({from: accounts[3]});
		const addressyCmhYMs = accounts[4]
		const uintrDQdQdC = await PRDZstakingV22jjO2j.getPendingReward.call(addressyCmhYMs, {from: accounts[1]});
		const uintCDLSwAG = await PRDZstakingV22jjO2j.getNumberOfHolders.call({from: accounts[5]});

		assert.equal(uintCDLSwAG, BigInt("0"))
		assert.equal(uintrDQdQdC, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2puQr3Gl = await PRDZstakingV2.new({from: accounts[3]});
		const uintlDrOQqv = await PRDZstakingV2puQr3Gl.getTotalStaked.call({from: accounts[5]});
		const uintjEAdbg0 = await PRDZstakingV2puQr3Gl.getTotalFeeCollected.call({from: accounts[1]});
		await PRDZstakingV2puQr3Gl.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});
		const uintZp1lQqs = await PRDZstakingV2puQr3Gl.getTotalClaimed.call({from: accounts[1]});

		assert.equal(uintjEAdbg0, BigInt("0"))
		assert.equal(uintlDrOQqv, BigInt("0"))
		await expect(PRDZstakingV2puQr3Gl.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2W4Uz45G = await PRDZstakingV2.new({from: accounts[1]});
		const addressINhjKm6 = accounts[2]
		const addresstrzna1 = accounts[4]
		const uintRHQXOEA = BigInt("2058")
		const addressv5UZ26D = accounts[3]
		const addressLBrT7c9 = accounts[2]
		await PRDZstakingV2W4Uz45G.deposit.call({from: accounts[1]});
		const uintHmqvtI1 = await PRDZstakingV2W4Uz45G.getStakingScore.call(addressINhjKm6, {from: accounts[1]});
		const uintBdrmmFR = await PRDZstakingV2W4Uz45G.getScoreEth.call(addresstrzna1, {from: "0x0000000000000000000000000000000000000001"});
		const uinty7DHxK6 = await PRDZstakingV2W4Uz45G.unstake.call(uintRHQXOEA, {from: accounts[2]});
		const uintvjy7a1f = await PRDZstakingV2W4Uz45G.getPendingReward.call(addressv5UZ26D, {from: "0x0000000000000000000000000000000000000001"});
		const uintvX0WJTq = await PRDZstakingV2W4Uz45G.getTotalClaimed.call({from: accounts[3]});
		const uintl57P7kP = await PRDZstakingV2W4Uz45G.getScoreEth.call(addressLBrT7c9, {from: accounts[0]});

		await expect(PRDZstakingV2W4Uz45G.deposit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2puQr3Gl = await PRDZstakingV2.new({from: accounts[3]});
		const uintlDrOQqv = await PRDZstakingV2puQr3Gl.getTotalStaked.call({from: accounts[5]});
		const uintVIaXkZt = await PRDZstakingV2puQr3Gl.getTotalFeeCollected.call({from: accounts[4]});
		const uintjEAdbg0 = await PRDZstakingV2puQr3Gl.getTotalFeeCollected.call({from: accounts[1]});
		await PRDZstakingV2puQr3Gl.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2puQr3Gl.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});
		const uintZp1lQqs = await PRDZstakingV2puQr3Gl.getTotalClaimed.call({from: accounts[1]});
		const uintRKxmDXL = await PRDZstakingV2puQr3Gl.getTotalUnStaked.call({from: accounts[0]});

		assert.equal(uintVIaXkZt, BigInt("0"))
		assert.equal(uintjEAdbg0, BigInt("0"))
		assert.equal(uintlDrOQqv, BigInt("0"))
		await expect(PRDZstakingV2puQr3Gl.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV22jjO2j = await PRDZstakingV2.new({from: accounts[3]});
		const addresseKUWar = accounts[4]
		const uintrDQdQdC = await PRDZstakingV22jjO2j.getPendingReward.call(addresseKUWar, {from: accounts[1]});
		await PRDZstakingV22jjO2j.claimReward.call({from: accounts[3]});
		const uintCDLSwAG = await PRDZstakingV22jjO2j.getNumberOfHolders.call({from: accounts[5]});
		const uintEXyn0Nd = await PRDZstakingV22jjO2j.getTotalClaimed.call({from: accounts[2]});

		assert.equal(uintrDQdQdC, BigInt("0"))
		await expect(PRDZstakingV22jjO2j.claimReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV22jjO2j = await PRDZstakingV2.new({from: accounts[3]});
		const addresslMyl4g = accounts[0]
		const addressguCtLIL = accounts[5]
		const addressZNh3ws = "0x0000000000000000000000000000000000000001"
		const uintakQMRZ = await PRDZstakingV22jjO2j.getStakingScore.call(addresslMyl4g, {from: accounts[1]});
		const uintrDQdQdC = await PRDZstakingV22jjO2j.getPendingReward.call(addressguCtLIL, {from: accounts[1]});
		await PRDZstakingV22jjO2j.deposit.call({from: accounts[4]});
		const addressZHAeN5U = await PRDZstakingV22jjO2j.transferOwnership.call(addressZNh3ws, {from: accounts[3]});

		assert.equal(uintakQMRZ, BigInt("0"))
		assert.equal(uintrDQdQdC, BigInt("0"))
		await expect(PRDZstakingV22jjO2j.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV22jjO2j = await PRDZstakingV2.new({from: accounts[3]});
		const addressr0YBTz5 = accounts[4]
		const uinthohByRB = BigInt("1472")
		const uintEsHkP3Q = BigInt("1241")
		const uintrDQdQdC = await PRDZstakingV22jjO2j.getPendingReward.call(addressr0YBTz5, {from: accounts[1]});
		const uintsAdSKib = await PRDZstakingV22jjO2j.updateOffer.call(uintEsHkP3Q, uinthohByRB, {from: accounts[3]});

		assert.equal(uintrDQdQdC, BigInt("0"))
	});
})