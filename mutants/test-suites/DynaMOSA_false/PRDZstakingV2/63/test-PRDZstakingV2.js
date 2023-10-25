const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2egTAMX = await PRDZstakingV2.new({from: accounts[1]});
		const addresslxmatzl = "0x0000000000000000000000000000000000000001"
		const uintSVS7QUr = await PRDZstakingV2egTAMX.getNumberOfHolders.call({from: accounts[2]});
		const uintfKlmv2g = await PRDZstakingV2egTAMX.getScoreEth.call(addresslxmatzl, {from: accounts[3]});
//		await PRDZstakingV2egTAMX.deposit.call({from: accounts[4]});

		assert.equal(uintSVS7QUr, BigInt("0"))
		assert.equal(uintfKlmv2g, BigInt("0"))
		await expect(PRDZstakingV2egTAMX.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2BI6ZJW = await PRDZstakingV2.new({from: accounts[1]});
//		await PRDZstakingV2BI6ZJW.claimScoreEth.call({from: accounts[1]});
//		const uintgR13y1D = await PRDZstakingV2BI6ZJW.getNumberOfHolders.call({from: accounts[2]});
//		const uintNPlWJ7F = await PRDZstakingV2BI6ZJW.getNumberOfHolders.call({from: accounts[3]});
//		const uintSoIdtqc = await PRDZstakingV2BI6ZJW.getTotalClaimed.call({from: accounts[2]});

		await expect(PRDZstakingV2BI6ZJW.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2xt6Ww0X = await PRDZstakingV2.new({from: accounts[4]});
		const addressF2NKRMj = accounts[2]
		const uintMBQ0YA4 = await PRDZstakingV2xt6Ww0X.getTotalUnStaked.call({from: accounts[3]});
		const uintWQLOWn3 = await PRDZstakingV2xt6Ww0X.getTotalClaimed.call({from: accounts[4]});
		const uintM4MOaHv = await PRDZstakingV2xt6Ww0X.getTotalFeeCollected.call({from: accounts[2]});
		const uintvmr5wDf = await PRDZstakingV2xt6Ww0X.getStakingScore.call(addressF2NKRMj, {from: accounts[1]});

		assert.equal(uintM4MOaHv, BigInt("0"))
		assert.equal(uintMBQ0YA4, BigInt("0"))
		assert.equal(uintWQLOWn3, BigInt("0"))
		assert.equal(uintvmr5wDf, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2tsvULKe = await PRDZstakingV2.new({from: accounts[2]});
		const addressZd1DWLz = accounts[1]
		const uintFugJqOf = BigInt("933")
		const uintwvcz3eV = BigInt("856")
		const uintDXlUbk = BigInt("1795")
		const uintUfjxIE = await PRDZstakingV2tsvULKe.getScoreEth.call(addressZd1DWLz, {from: accounts[1]});
//		const uintu9a5ZqJ = await PRDZstakingV2tsvULKe.stake.call(uintFugJqOf, {from: accounts[3]});
//		await PRDZstakingV2tsvULKe.claimScoreEth.call({from: accounts[2]});
//		await PRDZstakingV2tsvULKe.deposit.call({from: accounts[1]});
//		const uintpqVyF9C = await PRDZstakingV2tsvULKe.updateOffer.call(uintDXlUbk, uintwvcz3eV, {from: accounts[1]});

		assert.equal(uintUfjxIE, BigInt("0"))
		await expect(PRDZstakingV2tsvULKe.stake.call(uintFugJqOf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV23ppvIK = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjRJhqzC = BigInt("790")
		const uintIdaBQXw = await PRDZstakingV23ppvIK.updateScoreEth.call(uintjRJhqzC, {from: accounts[1]});
		await PRDZstakingV23ppvIK.claimReward.call({from: accounts[5]});
		const uintbGrnm4j = await PRDZstakingV23ppvIK.getTotalClaimed.call({from: accounts[3]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2TMFzGv = await PRDZstakingV2.new({from: accounts[2]});
		const uintT4t0Hd8 = BigInt("914")
		const uintXgPshTg = BigInt("2046")
		const uintHnMZjh3 = await PRDZstakingV2TMFzGv.updateScoreEth.call(uintT4t0Hd8, {from: accounts[2]});
//		const uint3b5Inz = await PRDZstakingV2TMFzGv.unstake.call(uintXgPshTg, {from: accounts[1]});

		await expect(PRDZstakingV2TMFzGv.unstake.call(uintXgPshTg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2hFERam = await PRDZstakingV2.new({from: accounts[3]});
		const address2NUvks = accounts[1]
		const addressxErfJ5 = accounts[4]
		const addresswlop4J = accounts[2]
		const uinty7pXcKO = BigInt("1076")
		const uintxtgH6nS = BigInt("1743")
		const uintc3I4c1f = await PRDZstakingV2hFERam.getPendingReward.call(address2NUvks, {from: accounts[0]});
		const uintwfSzaxB = await PRDZstakingV2hFERam.getStakingScore.call(addressxErfJ5, {from: accounts[1]});
//		const addressNwrhMnI = await PRDZstakingV2hFERam.transferOwnership.call(addresswlop4J, {from: accounts[1]});
//		const uintvspItCM = await PRDZstakingV2hFERam.getNumberOfHolders.call({from: accounts[1]});
//		await PRDZstakingV2hFERam.claimScoreEth.call({from: accounts[4]});
//		const uintWj66hWt = await PRDZstakingV2hFERam.updateOffer.call(uintxtgH6nS, uinty7pXcKO, {from: accounts[4]});

		assert.equal(uintc3I4c1f, BigInt("0"))
		assert.equal(uintwfSzaxB, BigInt("0"))
		await expect(PRDZstakingV2hFERam.transferOwnership.call(addresswlop4J, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2hFERam = await PRDZstakingV2.new({from: accounts[3]});
		const addressWSRkZAZ = accounts[4]
		const addressCPl8MUS = accounts[3]
		const uintCWrmIQ = BigInt("1076")
		const uintkoDxCL7 = BigInt("1743")
//		await PRDZstakingV2hFERam.claimReward.call({from: accounts[5]});
//		const uintwfSzaxB = await PRDZstakingV2hFERam.getStakingScore.call(addressWSRkZAZ, {from: accounts[1]});
//		const addressNwrhMnI = await PRDZstakingV2hFERam.transferOwnership.call(addressCPl8MUS, {from: accounts[1]});
//		const uintvspItCM = await PRDZstakingV2hFERam.getNumberOfHolders.call({from: accounts[1]});
//		await PRDZstakingV2hFERam.claimScoreEth.call({from: accounts[4]});
//		const uintWj66hWt = await PRDZstakingV2hFERam.updateOffer.call(uintkoDxCL7, uintCWrmIQ, {from: accounts[4]});

		await expect(PRDZstakingV2hFERam.claimReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2tsvULKe = await PRDZstakingV2.new({from: accounts[2]});
		const addressd7ChgKm = accounts[0]
		const uintnfclBE = BigInt("933")
		const addressW5ptkr5 = await PRDZstakingV2tsvULKe.transferOwnership.call(addressd7ChgKm, {from: accounts[2]});
//		const uintu9a5ZqJ = await PRDZstakingV2tsvULKe.stake.call(uintnfclBE, {from: accounts[3]});
//		const uintDMbhAw = await PRDZstakingV2tsvULKe.getTotalFeeCollected.call({from: accounts[2]});
//		await PRDZstakingV2tsvULKe.claimScoreEth.call({from: accounts[2]});
//		await PRDZstakingV2tsvULKe.deposit.call({from: accounts[1]});
//		await PRDZstakingV2tsvULKe.claimScoreEth.call({from: accounts[3]});

		await expect(PRDZstakingV2tsvULKe.stake.call(uintnfclBE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2dGjpaIW = await PRDZstakingV2.new({from: accounts[1]});
		const addressBClz9d4 = accounts[3]
		const uintVaMeR4R = BigInt("1192")
		const uintxW24gn = BigInt("1803")
		const addressOlDdnqL = accounts[3]
		const uintJcKU0U = await PRDZstakingV2dGjpaIW.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uintjE5obHX = await PRDZstakingV2dGjpaIW.getScoreEth.call(addressBClz9d4, {from: accounts[2]});
		const uintH58q96L = await PRDZstakingV2dGjpaIW.updateOffer.call(uintxW24gn, uintVaMeR4R, {from: accounts[1]});
		const uintUAXQ2qd = await PRDZstakingV2dGjpaIW.getPendingReward.call(addressOlDdnqL, {from: accounts[2]});

		assert.equal(uintJcKU0U, BigInt("0"))
		assert.equal(uintUAXQ2qd, BigInt("0"))
		assert.equal(uintjE5obHX, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2dGjpaIW = await PRDZstakingV2.new({from: accounts[1]});
		const addressOlgqdge = accounts[3]
		const uintDMUuoQK = BigInt("1192")
		const uintFo4ojgp = BigInt("1803")
		const addressdBknSp = accounts[3]
		const uintJcKU0U = await PRDZstakingV2dGjpaIW.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2dGjpaIW.onlyOwner.call({from: accounts[5]});
//		const uintjE5obHX = await PRDZstakingV2dGjpaIW.getScoreEth.call(addressOlgqdge, {from: accounts[2]});
//		const uintH58q96L = await PRDZstakingV2dGjpaIW.updateOffer.call(uintFo4ojgp, uintDMUuoQK, {from: accounts[1]});
//		const uintUAXQ2qd = await PRDZstakingV2dGjpaIW.getPendingReward.call(addressdBknSp, {from: accounts[2]});

		assert.equal(uintJcKU0U, BigInt("0"))
		await expect(PRDZstakingV2dGjpaIW.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2dGjpaIW = await PRDZstakingV2.new({from: accounts[1]});
		const addressy3iLTbL = accounts[4]
		const uintzzQL3SN = BigInt("0")
		const uintjE5obHX = await PRDZstakingV2dGjpaIW.getScoreEth.call(addressy3iLTbL, {from: accounts[2]});
		const uintergSg2N = await PRDZstakingV2dGjpaIW.getTotalClaimed.call({from: accounts[3]});
//		await PRDZstakingV2dGjpaIW.claimReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintU2GJ5J = await PRDZstakingV2dGjpaIW.stake.call(uintzzQL3SN, {from: accounts[1]});

		assert.equal(uintergSg2N, BigInt("0"))
		assert.equal(uintjE5obHX, BigInt("0"))
		await expect(PRDZstakingV2dGjpaIW.claimReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})