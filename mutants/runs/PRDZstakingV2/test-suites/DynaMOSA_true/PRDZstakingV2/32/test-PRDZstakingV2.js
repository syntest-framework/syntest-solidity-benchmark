const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2IoxHXAh = await PRDZstakingV2.new({from: accounts[4]});
		const uintQ66tCIC = BigInt("1212")
		const uintXSZo8tN = BigInt("274")
		const addressTAQ0v3P = accounts[3]
		const uintRyL7yo3 = await PRDZstakingV2IoxHXAh.getTotalClaimed.call({from: accounts[2]});
		const uintXMhZX2 = await PRDZstakingV2IoxHXAh.unstake.call(uintQ66tCIC, {from: accounts[1]});
		const uintUyLnEa = await PRDZstakingV2IoxHXAh.updateScoreEth.call(uintXSZo8tN, {from: accounts[2]});
		const uintABZMpdD = await PRDZstakingV2IoxHXAh.getScoreEth.call(addressTAQ0v3P, {from: accounts[3]});

		assert.equal(uintRyL7yo3, BigInt("0"))
		await expect(PRDZstakingV2IoxHXAh.unstake.call(uintQ66tCIC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2x1fOMm9 = await PRDZstakingV2.new({from: accounts[2]});
		const addressj0z6xj = accounts[0]
		const uintCqkgv0Q = BigInt("1390")
		const uintZJ6H7LF = BigInt("1582")
		const addressN0fuUV = accounts[3]
		const uintSjDKavq = await PRDZstakingV2x1fOMm9.getTotalFeeCollected.call({from: accounts[1]});
		const addressIgZH10F = await PRDZstakingV2x1fOMm9.transferOwnership.call(addressj0z6xj, {from: accounts[4]});
		const uintMBteaIS = await PRDZstakingV2x1fOMm9.unstake.call(uintCqkgv0Q, {from: accounts[4]});
		const uintEbPlQ2 = await PRDZstakingV2x1fOMm9.unstake.call(uintZJ6H7LF, {from: accounts[2]});
		const uint16OGyb = await PRDZstakingV2x1fOMm9.getStakingScore.call(addressN0fuUV, {from: accounts[0]});

		assert.equal(uintSjDKavq, BigInt("0"))
		await expect(PRDZstakingV2x1fOMm9.transferOwnership.call(addressj0z6xj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2bT3aXx8 = await PRDZstakingV2.new({from: accounts[3]});
		const uintm1427bX = BigInt("123")
		const uintwuTmV3l = BigInt("913")
		const uintnzfcs6K = await PRDZstakingV2bT3aXx8.getTotalStaked.call({from: accounts[4]});
		const uintMzdHDvb = await PRDZstakingV2bT3aXx8.getTotalStaked.call({from: accounts[2]});
		const uintc7hi0Pg = await PRDZstakingV2bT3aXx8.updateOffer.call(uintwuTmV3l, uintm1427bX, {from: accounts[4]});

		assert.equal(uintMzdHDvb, BigInt("0"))
		assert.equal(uintnzfcs6K, BigInt("0"))
		await expect(PRDZstakingV2bT3aXx8.updateOffer.call(uintwuTmV3l, uintm1427bX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2fjS0Nqs = await PRDZstakingV2.new({from: accounts[0]});
		const addressm5Usvn = accounts[4]
		const uintOWd668 = BigInt("1972")
		const uintTasPXhN = BigInt("428")
		const addressTP0b5gw = accounts[1]
		const uintUmtlZP5 = await PRDZstakingV2fjS0Nqs.getPendingReward.call(addressm5Usvn, {from: accounts[4]});
		const uinte7bRELl = await PRDZstakingV2fjS0Nqs.getTotalUnStaked.call({from: accounts[4]});
		const uintYmVHzF6 = await PRDZstakingV2fjS0Nqs.updateOffer.call(uintTasPXhN, uintOWd668, {from: accounts[5]});
		const uintc3fH6ey = await PRDZstakingV2fjS0Nqs.getTotalStaked.call({from: accounts[2]});
		const addressDe8ZYPe = await PRDZstakingV2fjS0Nqs.transferOwnership.call(addressTP0b5gw, {from: accounts[5]});

		assert.equal(uintUmtlZP5, BigInt("0"))
		assert.equal(uinte7bRELl, BigInt("0"))
		await expect(PRDZstakingV2fjS0Nqs.updateOffer.call(uintTasPXhN, uintOWd668, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2t6xj7QT = await PRDZstakingV2.new({from: accounts[0]});
		const uintBaQ9hGH = BigInt("133")
		const uintGh5ceRd = BigInt("1787")
		const uintjR4hFQG = BigInt("1382")
		const uintJTz4vny = await PRDZstakingV2t6xj7QT.updateOffer.call(uintGh5ceRd, uintBaQ9hGH, {from: accounts[0]});
		const uintf1fEzam = await PRDZstakingV2t6xj7QT.unstake.call(uintjR4hFQG, {from: accounts[5]});
		await PRDZstakingV2t6xj7QT.deposit.call({from: accounts[5]});
		const uintodocafo = await PRDZstakingV2t6xj7QT.getTotalStaked.call({from: accounts[5]});
		await PRDZstakingV2t6xj7QT.claimReward.call({from: accounts[0]});

		await expect(PRDZstakingV2t6xj7QT.unstake.call(uintjR4hFQG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2PGSk1It = await PRDZstakingV2.new({from: accounts[0]});
		const addressdKlUNFm = accounts[3]
		const addressAIPM5Qt = accounts[3]
		const uintEypLn0w = await PRDZstakingV2PGSk1It.getNumberOfHolders.call({from: accounts[1]});
		const addressCU1MPU = await PRDZstakingV2PGSk1It.transferOwnership.call(addressdKlUNFm, {from: accounts[0]});
		const uinto1ca4PT = await PRDZstakingV2PGSk1It.getNumberOfHolders.call({from: accounts[1]});
		const uintYYTtuO = await PRDZstakingV2PGSk1It.getStakingScore.call(addressAIPM5Qt, {from: accounts[2]});

		assert.equal(uintEypLn0w, BigInt("0"))
		assert.equal(uintYYTtuO, BigInt("0"))
		assert.equal(uinto1ca4PT, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2HisQecl = await PRDZstakingV2.new({from: accounts[2]});
		const uintkUmKwXy = await PRDZstakingV2HisQecl.getTotalStaked.call({from: accounts[0]});
		const uintKwq2Uv = await PRDZstakingV2HisQecl.getTotalUnStaked.call({from: accounts[5]});
		await PRDZstakingV2HisQecl.claimReward.call({from: accounts[2]});
		await PRDZstakingV2HisQecl.onlyOwner.call({from: accounts[4]});

		assert.equal(uintKwq2Uv, BigInt("0"))
		assert.equal(uintkUmKwXy, BigInt("0"))
		await expect(PRDZstakingV2HisQecl.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2mpexOKl = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVY0Q4Na = accounts[3]
		const uintTZh1Pt5 = await PRDZstakingV2mpexOKl.getScoreEth.call(addressVY0Q4Na, {from: accounts[0]});
		const uintEYie3xX = await PRDZstakingV2mpexOKl.getTotalStaked.call({from: accounts[4]});
		const uintgozRwd = await PRDZstakingV2mpexOKl.getTotalClaimed.call({from: accounts[4]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2bDxiLBQ = await PRDZstakingV2.new({from: accounts[4]});
		const uintncBNvbz = BigInt("275")
		const addressjy9FH4H = accounts[3]
		const uintwBZDPO3 = await PRDZstakingV2bDxiLBQ.stake.call(uintncBNvbz, {from: accounts[0]});
		const uintUEzybi5 = await PRDZstakingV2bDxiLBQ.getScoreEth.call(addressjy9FH4H, {from: accounts[4]});
		const uintMJDK5k4 = await PRDZstakingV2bDxiLBQ.getTotalStaked.call({from: accounts[0]});

		await expect(PRDZstakingV2bDxiLBQ.stake.call(uintncBNvbz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2fjS0Nqs = await PRDZstakingV2.new({from: accounts[0]});
		const addressHcP4EPu = accounts[4]
		const uintuF4yT5S = BigInt("1972")
		const uintPvvqXoI = BigInt("428")
		const addresslJvGOHi = accounts[1]
		const uintUmtlZP5 = await PRDZstakingV2fjS0Nqs.getPendingReward.call(addressHcP4EPu, {from: accounts[4]});
		const uinte7bRELl = await PRDZstakingV2fjS0Nqs.getTotalUnStaked.call({from: accounts[4]});
		await PRDZstakingV2fjS0Nqs.claimScoreEth.call({from: accounts[1]});
		const uintYmVHzF6 = await PRDZstakingV2fjS0Nqs.updateOffer.call(uintPvvqXoI, uintuF4yT5S, {from: accounts[5]});
		const uintc3fH6ey = await PRDZstakingV2fjS0Nqs.getTotalStaked.call({from: accounts[2]});
		const addressDe8ZYPe = await PRDZstakingV2fjS0Nqs.transferOwnership.call(addresslJvGOHi, {from: accounts[5]});

		assert.equal(uintUmtlZP5, BigInt("0"))
		assert.equal(uinte7bRELl, BigInt("0"))
		await expect(PRDZstakingV2fjS0Nqs.claimScoreEth.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2bT3aXx8 = await PRDZstakingV2.new({from: accounts[3]});
		const addressF58O4k = "0x0000000000000000000000000000000000000001"
		const uintqmcigZU = BigInt("123")
		const uintLIqtBk8 = BigInt("913")
		const addressYieHaRF = accounts[2]
		const uintMzdHDvb = await PRDZstakingV2bT3aXx8.getTotalStaked.call({from: accounts[2]});
		const uintzMN3V7Q = await PRDZstakingV2bT3aXx8.getScoreEth.call(addressF58O4k, {from: accounts[3]});
		const uintc7hi0Pg = await PRDZstakingV2bT3aXx8.updateOffer.call(uintLIqtBk8, uintqmcigZU, {from: accounts[4]});
		const uinti4bMGoR = await PRDZstakingV2bT3aXx8.getScoreEth.call(addressYieHaRF, {from: accounts[1]});

		assert.equal(uintMzdHDvb, BigInt("0"))
		assert.equal(uintzMN3V7Q, BigInt("0"))
		await expect(PRDZstakingV2bT3aXx8.updateOffer.call(uintLIqtBk8, uintqmcigZU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2HisQecl = await PRDZstakingV2.new({from: accounts[2]});
		const addressOvYlekO = accounts[5]
		const uintkUmKwXy = await PRDZstakingV2HisQecl.getTotalStaked.call({from: accounts[0]});
		const uintKwq2Uv = await PRDZstakingV2HisQecl.getTotalUnStaked.call({from: accounts[5]});
		await PRDZstakingV2HisQecl.deposit.call({from: accounts[0]});
		const uintlFGDgml = await PRDZstakingV2HisQecl.getStakingScore.call(addressOvYlekO, {from: accounts[1]});
		await PRDZstakingV2HisQecl.claimReward.call({from: accounts[2]});

		assert.equal(uintKwq2Uv, BigInt("0"))
		assert.equal(uintkUmKwXy, BigInt("0"))
		await expect(PRDZstakingV2HisQecl.deposit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2bDxiLBQ = await PRDZstakingV2.new({from: accounts[4]});
		const uintoYNu36V = BigInt("355")
		const uintAocpKLs = BigInt("232")
		const uintKWgIcUs = BigInt("258")
		const addressI9ySlj = accounts[6]
		const uintAX2SzNh = await PRDZstakingV2bDxiLBQ.updateScoreEth.call(uintoYNu36V, {from: accounts[4]});
		const uint9G5UJX = await PRDZstakingV2bDxiLBQ.stake.call(uintAocpKLs, {from: accounts[3]});
		await PRDZstakingV2bDxiLBQ.deposit.call({from: accounts[1]});
		const uintwBZDPO3 = await PRDZstakingV2bDxiLBQ.stake.call(uintKWgIcUs, {from: accounts[0]});
		const uintUEzybi5 = await PRDZstakingV2bDxiLBQ.getScoreEth.call(addressI9ySlj, {from: accounts[4]});
		const uintMJDK5k4 = await PRDZstakingV2bDxiLBQ.getTotalStaked.call({from: accounts[0]});

		await expect(PRDZstakingV2bDxiLBQ.stake.call(uintAocpKLs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2eEBErKl = await PRDZstakingV2.new({from: accounts[0]});
		const uintTJwJcqF = BigInt("0")
		const uintBSFxUWD = await PRDZstakingV2eEBErKl.stake.call(uintTJwJcqF, {from: accounts[1]});

		await expect(PRDZstakingV2eEBErKl.stake.call(uintTJwJcqF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})