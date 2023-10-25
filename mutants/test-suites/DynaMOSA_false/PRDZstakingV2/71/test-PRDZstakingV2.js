const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Le2s4UY = await PRDZstakingV2.new({from: accounts[4]});
		const uintmQCFyM = await PRDZstakingV2Le2s4UY.getNumberOfHolders.call({from: accounts[0]});
//		await PRDZstakingV2Le2s4UY.deposit.call({from: accounts[0]});
//		await PRDZstakingV2Le2s4UY.deposit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintmQCFyM, BigInt("0"))
		await expect(PRDZstakingV2Le2s4UY.deposit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2tUL2qrY = await PRDZstakingV2.new({from: accounts[1]});
		const uintj7GodIA = await PRDZstakingV2tUL2qrY.getTotalUnStaked.call({from: accounts[4]});
//		await PRDZstakingV2tUL2qrY.onlyOwner.call({from: accounts[3]});
//		const uintXfgL5oz = await PRDZstakingV2tUL2qrY.getNumberOfHolders.call({from: accounts[4]});
//		const uintnijRDMI = await PRDZstakingV2tUL2qrY.getTotalFeeCollected.call({from: accounts[2]});

		assert.equal(uintj7GodIA, BigInt("0"))
		await expect(PRDZstakingV2tUL2qrY.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OKDohW = await PRDZstakingV2.new({from: accounts[3]});
		const uintUm2J6q = BigInt("564")
//		await PRDZstakingV2OKDohW.deposit.call({from: accounts[2]});
//		const uintba6T2VL = await PRDZstakingV2OKDohW.stake.call(uintUm2J6q, {from: accounts[4]});

		await expect(PRDZstakingV2OKDohW.deposit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2FRxek0F = await PRDZstakingV2.new({from: accounts[4]});
		const addressAjkpvke = accounts[2]
		const uintZvijTEj = BigInt("1711")
		const addresstUaPxl = accounts[3]
		const uintAnXsqvD = await PRDZstakingV2FRxek0F.getStakingScore.call(addressAjkpvke, {from: accounts[1]});
		const uintwMGxZG7 = await PRDZstakingV2FRxek0F.updateScoreEth.call(uintZvijTEj, {from: accounts[4]});
		const uintwqft17X = await PRDZstakingV2FRxek0F.getTotalStaked.call({from: accounts[0]});
		const uintzW8DPdB = await PRDZstakingV2FRxek0F.getStakingScore.call(addresstUaPxl, {from: accounts[4]});
//		await PRDZstakingV2FRxek0F.claimReward.call({from: accounts[2]});

		assert.equal(uintAnXsqvD, BigInt("0"))
		assert.equal(uintwqft17X, BigInt("0"))
		assert.equal(uintzW8DPdB, BigInt("0"))
		await expect(PRDZstakingV2FRxek0F.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Cx40IXX = await PRDZstakingV2.new({from: accounts[0]});
		const addresscPXMh5U = accounts[4]
		const uintZs7UFiI = BigInt("1884")
		const uintHzBfa2O = await PRDZstakingV2Cx40IXX.getTotalClaimed.call({from: accounts[4]});
		const uintVE36bFX = await PRDZstakingV2Cx40IXX.getStakingScore.call(addresscPXMh5U, {from: accounts[3]});
//		await PRDZstakingV2Cx40IXX.deposit.call({from: accounts[2]});
//		const uintQUpJBaW = await PRDZstakingV2Cx40IXX.unstake.call(uintZs7UFiI, {from: accounts[3]});
//		const uintJi3ATzx = await PRDZstakingV2Cx40IXX.getTotalUnStaked.call({from: accounts[1]});

		assert.equal(uintHzBfa2O, BigInt("0"))
		assert.equal(uintVE36bFX, BigInt("0"))
		await expect(PRDZstakingV2Cx40IXX.deposit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2QeEw1eH = await PRDZstakingV2.new({from: accounts[2]});
		const uintPX84yAl = BigInt("195")
		const uintAJz11tT = BigInt("1784")
//		await PRDZstakingV2QeEw1eH.claimScoreEth.call({from: accounts[5]});
//		const uinttHk6vD = await PRDZstakingV2QeEw1eH.updateScoreEth.call(uintPX84yAl, {from: accounts[0]});
//		await PRDZstakingV2QeEw1eH.claimScoreEth.call({from: accounts[4]});
//		const uintsbvM3We = await PRDZstakingV2QeEw1eH.stake.call(uintAJz11tT, {from: accounts[1]});

		await expect(PRDZstakingV2QeEw1eH.claimScoreEth.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2H1JdNDS = await PRDZstakingV2.new({from: accounts[1]});
		const uinterxfmy = await PRDZstakingV2H1JdNDS.getTotalFeeCollected.call({from: accounts[2]});
//		await PRDZstakingV2H1JdNDS.onlyOwner.call({from: accounts[5]});
//		await PRDZstakingV2H1JdNDS.claimReward.call({from: accounts[5]});
//		const uintPTfpGaJ = await PRDZstakingV2H1JdNDS.getTotalStaked.call({from: accounts[3]});

		assert.equal(uinterxfmy, BigInt("0"))
		await expect(PRDZstakingV2H1JdNDS.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OKDohW = await PRDZstakingV2.new({from: accounts[3]});
		const addressWnPYdr = accounts[2]
		const addressNTEQxcQ = accounts[4]
		const uintu4xGFcr = BigInt("2011")
		const uintxnKBv27 = await PRDZstakingV2OKDohW.getTotalFeeCollected.call({from: accounts[5]});
		const uintZ03DsDA = await PRDZstakingV2OKDohW.getStakingScore.call(addressWnPYdr, {from: accounts[3]});
//		await PRDZstakingV2OKDohW.deposit.call({from: accounts[2]});
//		const uinth8yN6uT = await PRDZstakingV2OKDohW.getScoreEth.call(addressNTEQxcQ, {from: accounts[2]});
//		const uintba6T2VL = await PRDZstakingV2OKDohW.stake.call(uintu4xGFcr, {from: accounts[4]});

		assert.equal(uintZ03DsDA, BigInt("0"))
		assert.equal(uintxnKBv27, BigInt("0"))
		await expect(PRDZstakingV2OKDohW.deposit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2WAAuZ4 = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressPka7qbX = "0x0000000000000000000000000000000000000001"
		const addresssyoFZsk = accounts[5]
		const uintcLFFa3 = await PRDZstakingV2WAAuZ4.getScoreEth.call(addressPka7qbX, {from: accounts[1]});
		const addressT1kQRLB = await PRDZstakingV2WAAuZ4.transferOwnership.call(addresssyoFZsk, {from: accounts[0]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2FRxek0F = await PRDZstakingV2.new({from: accounts[4]});
		const uintYuDtEJh = BigInt("1926")
		const uintkEavf4 = BigInt("103")
		const addressaP2vtSt = accounts[3]
		const uintoDWxMBz = await PRDZstakingV2FRxek0F.updateOffer.call(uintkEavf4, uintYuDtEJh, {from: accounts[4]});
		const uintAnXsqvD = await PRDZstakingV2FRxek0F.getStakingScore.call(addressaP2vtSt, {from: accounts[1]});
//		await PRDZstakingV2FRxek0F.claimReward.call({from: accounts[2]});

		assert.equal(uintAnXsqvD, BigInt("0"))
		await expect(PRDZstakingV2FRxek0F.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2FRxek0F = await PRDZstakingV2.new({from: accounts[4]});
		const addressXrtB4jz = accounts[2]
		const address776zqb = accounts[2]
		const addressb6kZPsG = accounts[1]
		const uintFkTkIRF = BigInt("1355")
		const uintTS5pYET = await PRDZstakingV2FRxek0F.getTotalUnStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uintuJlabxx = await PRDZstakingV2FRxek0F.getScoreEth.call(addressXrtB4jz, {from: accounts[0]});
		const uintAnXsqvD = await PRDZstakingV2FRxek0F.getStakingScore.call(address776zqb, {from: accounts[1]});
		const addressXbCG1lB = await PRDZstakingV2FRxek0F.transferOwnership.call(addressb6kZPsG, {from: accounts[4]});
		const uintBM0ek9M = await PRDZstakingV2FRxek0F.getTotalClaimed.call({from: accounts[2]});
//		await PRDZstakingV2FRxek0F.claimScoreEth.call({from: accounts[1]});
//		const uintghaVoKm = await PRDZstakingV2FRxek0F.stake.call(uintFkTkIRF, {from: accounts[3]});
//		await PRDZstakingV2FRxek0F.claimReward.call({from: accounts[2]});

		assert.equal(uintAnXsqvD, BigInt("0"))
		assert.equal(uintBM0ek9M, BigInt("0"))
		assert.equal(uintTS5pYET, BigInt("0"))
		assert.equal(uintuJlabxx, BigInt("0"))
		await expect(PRDZstakingV2FRxek0F.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2yJelgMy = await PRDZstakingV2.new({from: accounts[3]});
		const addressmYi3mae = "0x00000000000000000000000000000000000000-1"
		const addressGQirHWe = "0x0000000000000000000000000000000000000001"
//		const uintyWNTIUb = await PRDZstakingV2yJelgMy.getScoreEth.call(addressmYi3mae, {from: accounts[0]});
//		const uintRb0yKp = await PRDZstakingV2yJelgMy.getScoreEth.call(addressGQirHWe, {from: accounts[3]});
//		const uintFoAQY4q = await PRDZstakingV2yJelgMy.getTotalStaked.call({from: accounts[0]});

		await expect(PRDZstakingV2yJelgMy.getScoreEth.call(addressmYi3mae, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2yJelgMy = await PRDZstakingV2.new({from: accounts[3]});
		const uintvoLgaJB = BigInt("0")
		const uintmuV0XP = BigInt("1835")
		const uintMOwmh6r = await PRDZstakingV2yJelgMy.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uintG9fchqy = await PRDZstakingV2yJelgMy.getNumberOfHolders.call({from: accounts[1]});
		const uintW8iCRT0 = await PRDZstakingV2yJelgMy.getTotalClaimed.call({from: accounts[0]});
//		const uintqj7Mak = await PRDZstakingV2yJelgMy.stake.call(uintvoLgaJB, {from: accounts[3]});
//		const uintgZFWnam = await PRDZstakingV2yJelgMy.stake.call(uintmuV0XP, {from: accounts[0]});

		assert.equal(uintG9fchqy, BigInt("0"))
		assert.equal(uintMOwmh6r, BigInt("0"))
		assert.equal(uintW8iCRT0, BigInt("0"))
		await expect(PRDZstakingV2yJelgMy.stake.call(uintvoLgaJB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})