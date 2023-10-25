const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2QdXch4e = await PRDZstakingV2.new({from: accounts[0]});
		const uintZO5xo2M = BigInt("1135")
		const uint7vmGOU = BigInt("1208")
		const addressk5xhuHX = accounts[0]
		const uint1l1DOy = await PRDZstakingV2QdXch4e.unstake.call(uintZO5xo2M, {from: accounts[0]});
		const uintsTR2nCI = await PRDZstakingV2QdXch4e.getTotalUnStaked.call({from: accounts[1]});
		const uintUULZpGa = await PRDZstakingV2QdXch4e.updateScoreEth.call(uint7vmGOU, {from: accounts[1]});
		const uintVYd2M4r = await PRDZstakingV2QdXch4e.getPendingReward.call(addressk5xhuHX, {from: accounts[1]});

		await expect(PRDZstakingV2QdXch4e.unstake.call(uintZO5xo2M, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2EeIRfo6 = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNdZghvd = BigInt("1782")
		const uintjfPdYaS = BigInt("1734")
		const addressMhCVdnL = accounts[1]
		const addresss4SIKs7 = accounts[4]
		const uintFu3tgDg = BigInt("441")
		const uintogbCeLc = await PRDZstakingV2EeIRfo6.updateOffer.call(uintjfPdYaS, uintNdZghvd, {from: accounts[1]});
		const uintd6cbA2g = await PRDZstakingV2EeIRfo6.getTotalStaked.call({from: accounts[4]});
		const uintxVxLcx7 = await PRDZstakingV2EeIRfo6.getStakingScore.call(addressMhCVdnL, {from: accounts[1]});
		const uintrf1omn = await PRDZstakingV2EeIRfo6.getScoreEth.call(addresss4SIKs7, {from: accounts[0]});
		const uintjH26ASV = await PRDZstakingV2EeIRfo6.unstake.call(uintFu3tgDg, {from: accounts[3]});
		const uintlO38Iw = await PRDZstakingV2EeIRfo6.getTotalUnStaked.call({from: accounts[3]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2HyfzC9x = await PRDZstakingV2.new({from: accounts[1]});
		const uintgM3goHg = BigInt("731")
		const uintKaPBcBR = BigInt("216")
		await PRDZstakingV2HyfzC9x.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uintUmVMAl7 = await PRDZstakingV2HyfzC9x.getTotalClaimed.call({from: accounts[2]});
		const uintv7tAst9 = await PRDZstakingV2HyfzC9x.updateOffer.call(uintKaPBcBR, uintgM3goHg, {from: accounts[1]});

		await expect(PRDZstakingV2HyfzC9x.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2jr5po6K = await PRDZstakingV2.new({from: accounts[0]});
		const addressJOoGqDM = "0x0000000000000000000000000000000000000001"
		await PRDZstakingV2jr5po6K.deposit.call({from: accounts[4]});
		const uintGD7FJDM = await PRDZstakingV2jr5po6K.getPendingReward.call(addressJOoGqDM, {from: accounts[5]});
		const uintcjz3lPg = await PRDZstakingV2jr5po6K.getTotalUnStaked.call({from: accounts[4]});
		const uintppbMb7y = await PRDZstakingV2jr5po6K.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2jr5po6K.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2UuP7sku = await PRDZstakingV2.new({from: accounts[2]});
		const addressH8wIaRZ = accounts[1]
		const addressNtUQvcK = accounts[0]
		const uinty8hb03 = await PRDZstakingV2UuP7sku.getTotalStaked.call({from: accounts[0]});
		await PRDZstakingV2UuP7sku.claimScoreEth.call({from: accounts[4]});
		await PRDZstakingV2UuP7sku.claimScoreEth.call({from: accounts[0]});
		const uint5tI7SE = await PRDZstakingV2UuP7sku.getTotalFeeCollected.call({from: accounts[4]});
		const uintvvivJzH = await PRDZstakingV2UuP7sku.getPendingReward.call(addressH8wIaRZ, {from: accounts[1]});
		const uintfjBRmD = await PRDZstakingV2UuP7sku.getScoreEth.call(addressNtUQvcK, {from: accounts[4]});

		assert.equal(uinty8hb03, BigInt("0"))
		await expect(PRDZstakingV2UuP7sku.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2QdXch4e = await PRDZstakingV2.new({from: accounts[0]});
		const uintPutIqdd = BigInt("643")
		const addressbqNE9aP = accounts[0]
		const uintsTR2nCI = await PRDZstakingV2QdXch4e.getTotalUnStaked.call({from: accounts[1]});
		const uintUULZpGa = await PRDZstakingV2QdXch4e.updateScoreEth.call(uintPutIqdd, {from: accounts[1]});
		const uintVYd2M4r = await PRDZstakingV2QdXch4e.getPendingReward.call(addressbqNE9aP, {from: accounts[1]});

		assert.equal(uintsTR2nCI, BigInt("0"))
		await expect(PRDZstakingV2QdXch4e.updateScoreEth.call(uintPutIqdd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2fkNLcLF = await PRDZstakingV2.new({from: accounts[2]});
		const addressd4nAkx6 = "0x0000000000000000000000000000000000000001"
		const addressOXvZbV = accounts[2]
		const uintnNURXUa = await PRDZstakingV2fkNLcLF.getPendingReward.call(addressd4nAkx6, {from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2fkNLcLF.deposit.call({from: accounts[4]});
		const uintFs7S4hU = await PRDZstakingV2fkNLcLF.getNumberOfHolders.call({from: accounts[2]});
		const uintk6DpVF3 = await PRDZstakingV2fkNLcLF.getStakingScore.call(addressOXvZbV, {from: accounts[0]});
		const uintSHNoyHG = await PRDZstakingV2fkNLcLF.getTotalUnStaked.call({from: accounts[4]});

		assert.equal(uintnNURXUa, BigInt("0"))
		await expect(PRDZstakingV2fkNLcLF.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ET6VWyT = await PRDZstakingV2.new({from: accounts[0]});
		const uintYzXAnYb = BigInt("545")
		await PRDZstakingV2ET6VWyT.claimReward.call({from: accounts[2]});
		await PRDZstakingV2ET6VWyT.claimScoreEth.call({from: accounts[5]});
		const uintFVpA8x7 = await PRDZstakingV2ET6VWyT.stake.call(uintYzXAnYb, {from: accounts[2]});

		await expect(PRDZstakingV2ET6VWyT.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2UuP7sku = await PRDZstakingV2.new({from: accounts[2]});
		const addressfY9wSFg = accounts[0]
		const uinty8hb03 = await PRDZstakingV2UuP7sku.getTotalStaked.call({from: accounts[0]});
		await PRDZstakingV2UuP7sku.claimScoreEth.call({from: accounts[0]});
		const uint5tI7SE = await PRDZstakingV2UuP7sku.getTotalFeeCollected.call({from: accounts[4]});
		const uintfjBRmD = await PRDZstakingV2UuP7sku.getScoreEth.call(addressfY9wSFg, {from: accounts[4]});
		const uinth2E0Plv = await PRDZstakingV2UuP7sku.getTotalClaimed.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uinty8hb03, BigInt("0"))
		await expect(PRDZstakingV2UuP7sku.claimScoreEth.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ET6VWyT = await PRDZstakingV2.new({from: accounts[0]});
		const addresspB1VZZz = accounts[3]
		const addressQRljWPO = accounts[1]
		const uintwszNgu = BigInt("537")
		const uintZ7YFInx = await PRDZstakingV2ET6VWyT.getStakingScore.call(addresspB1VZZz, {from: accounts[4]});
		const addressyKClk15 = await PRDZstakingV2ET6VWyT.transferOwnership.call(addressQRljWPO, {from: accounts[0]});
		await PRDZstakingV2ET6VWyT.claimReward.call({from: accounts[2]});
		await PRDZstakingV2ET6VWyT.claimScoreEth.call({from: accounts[5]});
		const uintFVpA8x7 = await PRDZstakingV2ET6VWyT.stake.call(uintwszNgu, {from: accounts[2]});

		assert.equal(uintZ7YFInx, BigInt("0"))
		await expect(PRDZstakingV2ET6VWyT.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2N9Qavxy = await PRDZstakingV2.new({from: accounts[3]});
		const uintztudGj = BigInt("1750")
		const uintW7Dbm0g = BigInt("1720")
		const addressLoLd60R = accounts[0]
		const uintWZF2Jb5 = await PRDZstakingV2N9Qavxy.updateOffer.call(uintW7Dbm0g, uintztudGj, {from: accounts[3]});
		const uinthUvJoOa = await PRDZstakingV2N9Qavxy.getTotalFeeCollected.call({from: accounts[0]});
		const uintd8q1wSM = await PRDZstakingV2N9Qavxy.getStakingScore.call(addressLoLd60R, {from: accounts[2]});

		assert.equal(uintd8q1wSM, BigInt("0"))
		assert.equal(uinthUvJoOa, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2dEESU2m = await PRDZstakingV2.new({from: accounts[1]});
		const addresseCN6n6u = accounts[1]
		const uintCGBDwY = BigInt("0")
		const addressjNbGquN = accounts[5]
		const uintL7B4Oi = await PRDZstakingV2dEESU2m.getScoreEth.call(addresseCN6n6u, {from: accounts[5]});
		const uintsA0eL4p = await PRDZstakingV2dEESU2m.getTotalUnStaked.call({from: accounts[4]});
		const uintqdakJY = await PRDZstakingV2dEESU2m.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uintbsIUnys = await PRDZstakingV2dEESU2m.stake.call(uintCGBDwY, {from: accounts[0]});
		const uintXYqrJO5 = await PRDZstakingV2dEESU2m.getTotalClaimed.call({from: accounts[1]});
		const uintNAaxnU1 = await PRDZstakingV2dEESU2m.getScoreEth.call(addressjNbGquN, {from: accounts[4]});
		await PRDZstakingV2dEESU2m.claimReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uintOtb3gm9 = await PRDZstakingV2dEESU2m.getTotalStaked.call({from: accounts[4]});
		const uintpUUSGUN = await PRDZstakingV2dEESU2m.getTotalFeeCollected.call({from: accounts[4]});

		assert.equal(uintL7B4Oi, BigInt("0"))
		assert.equal(uintqdakJY, BigInt("0"))
		assert.equal(uintsA0eL4p, BigInt("0"))
		await expect(PRDZstakingV2dEESU2m.stake.call(uintCGBDwY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ET6VWyT = await PRDZstakingV2.new({from: accounts[0]});
		const uintoYSGHVH = BigInt("499")
		const uintHx2G32E = await PRDZstakingV2ET6VWyT.getTotalStaked.call({from: accounts[1]});
		await PRDZstakingV2ET6VWyT.claimScoreEth.call({from: accounts[5]});
		const uintYO9F7AN = await PRDZstakingV2ET6VWyT.updateScoreEth.call(uintoYSGHVH, {from: accounts[0]});

		assert.equal(uintHx2G32E, BigInt("0"))
		await expect(PRDZstakingV2ET6VWyT.claimScoreEth.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2q52oaxw = await PRDZstakingV2.new({from: accounts[4]});
		const addresscv0dLfQ = accounts[0]
		const addresseo9CbQQ = "0x00000000000000000000000000000000000000-1"
		const uintxEtLHk5 = BigInt("720")
		const uintX1nGiNO = BigInt("293")
		const uintnlfhRei = await PRDZstakingV2q52oaxw.getPendingReward.call(addresscv0dLfQ, {from: accounts[1]});
		await PRDZstakingV2q52oaxw.claimReward.call({from: accounts[2]});
		const uintiFCSdr1 = await PRDZstakingV2q52oaxw.getStakingScore.call(addresseo9CbQQ, {from: accounts[4]});
		const uintjby5RHV = await PRDZstakingV2q52oaxw.getTotalUnStaked.call({from: accounts[2]});
		const uintbfc7MEP = await PRDZstakingV2q52oaxw.getNumberOfHolders.call({from: accounts[2]});
		const uintI89O5Y = await PRDZstakingV2q52oaxw.getTotalStaked.call({from: accounts[4]});
		await PRDZstakingV2q52oaxw.claimScoreEth.call({from: accounts[2]});
		const uintaVvT5bd = await PRDZstakingV2q52oaxw.stake.call(uintxEtLHk5, {from: accounts[3]});
		const uintSrgj7XU = await PRDZstakingV2q52oaxw.getTotalUnStaked.call({from: accounts[2]});
		const uint6qISbp = await PRDZstakingV2q52oaxw.unstake.call(uintX1nGiNO, {from: accounts[0]});

		assert.equal(uintnlfhRei, BigInt("0"))
		await expect(PRDZstakingV2q52oaxw.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})