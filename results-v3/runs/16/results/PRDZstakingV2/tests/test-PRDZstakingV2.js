const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2KDTxNwP = await PRDZstakingV2.new({from: accounts[1]});
		const addressIk3oSR9 = accounts[0]
		const uintqJtV8qE = BigInt("812")
		const uintij2IHU = BigInt("267")
		const uintHVrxnba = await PRDZstakingV2KDTxNwP.getNumberOfHolders.call({from: accounts[4]});
		const uintZQBbwht = await PRDZstakingV2KDTxNwP.getTotalClaimed.call({from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2KDTxNwP.onlyOwner.call({from: accounts[3]});
		await PRDZstakingV2KDTxNwP.deposit.call({from: accounts[4]});
		const uintQxMysD9 = await PRDZstakingV2KDTxNwP.getPendingReward.call(addressIk3oSR9, {from: accounts[0]});
		const uintjqG1g1U = await PRDZstakingV2KDTxNwP.updateOffer.call(uintij2IHU, uintqJtV8qE, {from: accounts[0]});

		assert.equal(uintHVrxnba, BigInt("0"))
		assert.equal(uintZQBbwht, BigInt("0"))
		await expect(PRDZstakingV2KDTxNwP.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2fBmT7gu = await PRDZstakingV2.new({from: accounts[3]});
		const uintnDJm68D = BigInt("149")
		const uintmCHU2py = BigInt("814")
		const addressW7Ptltu = accounts[2]
		const uintxxwigwG = BigInt("422")
		const uintTFXk7bw = await PRDZstakingV2fBmT7gu.stake.call(uintnDJm68D, {from: accounts[3]});
		await PRDZstakingV2fBmT7gu.deposit.call({from: accounts[4]});
		const uintDC7UVJF = await PRDZstakingV2fBmT7gu.stake.call(uintmCHU2py, {from: accounts[1]});
		const uintQtDeCmS = await PRDZstakingV2fBmT7gu.getPendingReward.call(addressW7Ptltu, {from: accounts[1]});
		const uintdZbDaOd = await PRDZstakingV2fBmT7gu.unstake.call(uintxxwigwG, {from: accounts[2]});

		await expect(PRDZstakingV2fBmT7gu.stake.call(uintnDJm68D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OAsOBSE = await PRDZstakingV2.new({from: accounts[3]});
		const addressPdcGsiL = accounts[2]
		const uintLbZlzEB = await PRDZstakingV2OAsOBSE.getTotalFeeCollected.call({from: accounts[0]});
		const uintdyJ3oin = await PRDZstakingV2OAsOBSE.getTotalStaked.call({from: accounts[4]});
		const uintHZQ9iz7 = await PRDZstakingV2OAsOBSE.getTotalStaked.call({from: accounts[2]});
		const uintZhHtEU8 = await PRDZstakingV2OAsOBSE.getTotalFeeCollected.call({from: "0x0000000000000000000000000000000000000001"});
		const addressRbmAeZr = await PRDZstakingV2OAsOBSE.transferOwnership.call(addressPdcGsiL, {from: accounts[1]});

		assert.equal(uintHZQ9iz7, BigInt("0"))
		assert.equal(uintLbZlzEB, BigInt("0"))
		assert.equal(uintZhHtEU8, BigInt("0"))
		assert.equal(uintdyJ3oin, BigInt("0"))
		await expect(PRDZstakingV2OAsOBSE.transferOwnership.call(addressPdcGsiL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2UpLJEo = await PRDZstakingV2.new({from: accounts[2]});
		const uintmGL4USI = BigInt("276")
		const uintW5dSTcd = BigInt("1315")
		const uintIi8YZcH = BigInt("2012")
		const uintgBViqCj = await PRDZstakingV2UpLJEo.updateScoreEth.call(uintmGL4USI, {from: accounts[2]});
		await PRDZstakingV2UpLJEo.claimReward.call({from: accounts[4]});
		await PRDZstakingV2UpLJEo.claimScoreEth.call({from: accounts[5]});
		const uintclTJRZ = await PRDZstakingV2UpLJEo.updateOffer.call(uintIi8YZcH, uintW5dSTcd, {from: accounts[1]});
		await PRDZstakingV2UpLJEo.deposit.call({from: accounts[2]});

		await expect(PRDZstakingV2UpLJEo.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2MLvl6cf = await PRDZstakingV2.new({from: accounts[2]});
		const addressVZwU1E = accounts[0]
		const uintNhmB21A = BigInt("493")
		const addressUX1FNOO = accounts[4]
		const addressaogcCBT = accounts[0]
		const uintDx0fLFB = await PRDZstakingV2MLvl6cf.getScoreEth.call(addressVZwU1E, {from: accounts[2]});
		const uinte5Sqg3O = await PRDZstakingV2MLvl6cf.updateScoreEth.call(uintNhmB21A, {from: accounts[2]});
		const uintEVVvNvM = await PRDZstakingV2MLvl6cf.getTotalClaimed.call({from: accounts[1]});
		const uintCa5a6uA = await PRDZstakingV2MLvl6cf.getStakingScore.call(addressUX1FNOO, {from: accounts[1]});
		const addressVy7YKEZ = await PRDZstakingV2MLvl6cf.transferOwnership.call(addressaogcCBT, {from: accounts[4]});

		assert.equal(uintCa5a6uA, BigInt("0"))
		assert.equal(uintDx0fLFB, BigInt("0"))
		assert.equal(uintEVVvNvM, BigInt("0"))
		await expect(PRDZstakingV2MLvl6cf.transferOwnership.call(addressaogcCBT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Up08dXP = await PRDZstakingV2.new({from: accounts[1]});
		const addressAorql28 = accounts[0]
		const uintl6d0OyZ = await PRDZstakingV2Up08dXP.getTotalClaimed.call({from: accounts[2]});
		const uintZHBtjZy = await PRDZstakingV2Up08dXP.getPendingReward.call(addressAorql28, {from: accounts[1]});
		await PRDZstakingV2Up08dXP.deposit.call({from: accounts[1]});
		await PRDZstakingV2Up08dXP.deposit.call({from: accounts[1]});
		await PRDZstakingV2Up08dXP.onlyOwner.call({from: accounts[2]});

		assert.equal(uintZHBtjZy, BigInt("0"))
		assert.equal(uintl6d0OyZ, BigInt("0"))
		await expect(PRDZstakingV2Up08dXP.deposit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2MHibgQ = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjhYlqga = BigInt("924")
		await PRDZstakingV2MHibgQ.claimScoreEth.call({from: accounts[0]});
		const uintzvFGj4r = await PRDZstakingV2MHibgQ.unstake.call(uintjhYlqga, {from: accounts[2]});
		const uinthritoOV = await PRDZstakingV2MHibgQ.getTotalClaimed.call({from: accounts[4]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2fBmT7gu = await PRDZstakingV2.new({from: accounts[3]});
		const uinti8dTIco = BigInt("149")
		const addressCdDlOPH = accounts[1]
		const uintzsXRyxz = BigInt("422")
		const uintrMHeKeq = await PRDZstakingV2fBmT7gu.getTotalUnStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uintTFXk7bw = await PRDZstakingV2fBmT7gu.stake.call(uinti8dTIco, {from: accounts[3]});
		await PRDZstakingV2fBmT7gu.deposit.call({from: accounts[4]});
		const addressMsg12pA = await PRDZstakingV2fBmT7gu.transferOwnership.call(addressCdDlOPH, {from: accounts[4]});
		const uintdZbDaOd = await PRDZstakingV2fBmT7gu.unstake.call(uintzsXRyxz, {from: accounts[2]});
		await PRDZstakingV2fBmT7gu.claimScoreEth.call({from: accounts[4]});

		assert.equal(uintrMHeKeq, BigInt("0"))
		await expect(PRDZstakingV2fBmT7gu.stake.call(uinti8dTIco, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2fBmT7gu = await PRDZstakingV2.new({from: accounts[3]});
		const uintBNtlEUr = BigInt("422")
		await PRDZstakingV2fBmT7gu.deposit.call({from: accounts[4]});
		const uintdZbDaOd = await PRDZstakingV2fBmT7gu.unstake.call(uintBNtlEUr, {from: accounts[2]});

		await expect(PRDZstakingV2fBmT7gu.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2eyHHi7 = await PRDZstakingV2.new({from: accounts[2]});
		const uintEnQP2vg = BigInt("878")
		const uintZQjWdEE = BigInt("766")
		const uintjUyVNX = BigInt("1574")
		const uintMhaB6Fl = await PRDZstakingV2eyHHi7.getTotalClaimed.call({from: accounts[4]});
		const uintTMwyAN = await PRDZstakingV2eyHHi7.getTotalFeeCollected.call({from: accounts[3]});
		const uintuSZF7VS = await PRDZstakingV2eyHHi7.updateOffer.call(uintZQjWdEE, uintEnQP2vg, {from: accounts[2]});
		const uintY0Xxjvw = await PRDZstakingV2eyHHi7.updateScoreEth.call(uintjUyVNX, {from: accounts[3]});

		assert.equal(uintMhaB6Fl, BigInt("0"))
		assert.equal(uintTMwyAN, BigInt("0"))
		await expect(PRDZstakingV2eyHHi7.updateScoreEth.call(uintjUyVNX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2fBmT7gu = await PRDZstakingV2.new({from: accounts[3]});
		const addressqSP4RSs = accounts[0]
		const uintuzDIU9O = BigInt("0")
		const addressEBcjNRI = accounts[4]
		const uintp0v8xlN = BigInt("56")
		const uintT3raHEH = await PRDZstakingV2fBmT7gu.getNumberOfHolders.call({from: accounts[1]});
		const uintSaDHNsF = await PRDZstakingV2fBmT7gu.getTotalUnStaked.call({from: accounts[4]});
		await PRDZstakingV2fBmT7gu.claimScoreEth.call({from: accounts[3]});
		await PRDZstakingV2fBmT7gu.deposit.call({from: accounts[3]});
		const uintDKp9qa2 = await PRDZstakingV2fBmT7gu.getNumberOfHolders.call({from: accounts[4]});
		await PRDZstakingV2fBmT7gu.claimReward.call({from: accounts[4]});
		const uintKLIf1cx = await PRDZstakingV2fBmT7gu.getStakingScore.call(addressqSP4RSs, {from: accounts[4]});
		const uintxGXrxul = await PRDZstakingV2fBmT7gu.stake.call(uintuzDIU9O, {from: accounts[0]});
		const uinttyw8MIY = await PRDZstakingV2fBmT7gu.getTotalUnStaked.call({from: accounts[2]});
		const uint0ZybFd = await PRDZstakingV2fBmT7gu.getStakingScore.call(addressEBcjNRI, {from: accounts[0]});
		await PRDZstakingV2fBmT7gu.deposit.call({from: accounts[2]});
		const uintTFXk7bw = await PRDZstakingV2fBmT7gu.stake.call(uintp0v8xlN, {from: accounts[3]});

		assert.equal(uintSaDHNsF, BigInt("0"))
		assert.equal(uintT3raHEH, BigInt("0"))
		await expect(PRDZstakingV2fBmT7gu.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2yMNwXp = await PRDZstakingV2.new({from: accounts[0]});
		const addressZ740rTo = accounts[0]
		const addressXRnlvDd = accounts[1]
		const addressmiZPDHy = accounts[2]
		const addressMAWeoW7 = await PRDZstakingV2yMNwXp.transferOwnership.call(addressZ740rTo, {from: accounts[0]});
		const uintQNMz2xE = await PRDZstakingV2yMNwXp.getScoreEth.call(addressXRnlvDd, {from: accounts[2]});
		const uintrfCLY7S = await PRDZstakingV2yMNwXp.getPendingReward.call(addressmiZPDHy, {from: accounts[5]});

		assert.equal(uintQNMz2xE, BigInt("0"))
		assert.equal(uintrfCLY7S, BigInt("0"))
	});
})