const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2vhE0JGN = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxdXduWS = accounts[2]
		const addressfuRuN7G = accounts[2]
		const uintohIIzQn = BigInt("1279")
		const uintC9eTePC = BigInt("1811")
		const uintmRDYp5W = await PRDZstakingV2vhE0JGN.getPendingReward.call(addressxdXduWS, {from: accounts[1]});
		const addressxciTwCW = await PRDZstakingV2vhE0JGN.transferOwnership.call(addressfuRuN7G, {from: accounts[4]});
		const uintXwfDiqv = await PRDZstakingV2vhE0JGN.updateOffer.call(uintC9eTePC, uintohIIzQn, {from: accounts[4]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OA4Htj4 = await PRDZstakingV2.new({from: accounts[4]});
		const addresss4DLKDe = accounts[1]
		const uintXO9b10 = BigInt("1007")
		const uintBEtqwpx = await PRDZstakingV2OA4Htj4.getStakingScore.call(addresss4DLKDe, {from: accounts[1]});
		const uintHx4p37A = await PRDZstakingV2OA4Htj4.updateScoreEth.call(uintXO9b10, {from: accounts[5]});

		assert.equal(uintBEtqwpx, BigInt("0"))
		await expect(PRDZstakingV2OA4Htj4.updateScoreEth.call(uintXO9b10, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2I19qUbW = await PRDZstakingV2.new({from: accounts[2]});
		const addressDiAY7Ro = accounts[3]
		const uintTpNjvBD = await PRDZstakingV2I19qUbW.getTotalStaked.call({from: accounts[3]});
		const addressUyVWA3U = await PRDZstakingV2I19qUbW.transferOwnership.call(addressDiAY7Ro, {from: accounts[0]});
		const uintE41W9dJ = await PRDZstakingV2I19qUbW.getNumberOfHolders.call({from: accounts[3]});

		assert.equal(uintTpNjvBD, BigInt("0"))
		await expect(PRDZstakingV2I19qUbW.transferOwnership.call(addressDiAY7Ro, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2dECRszE = await PRDZstakingV2.new({from: accounts[1]});
		const uintrfZTeR = BigInt("1418")
		const uintsQBrgan = BigInt("1859")
		const uintRR6dT08 = await PRDZstakingV2dECRszE.getTotalClaimed.call({from: accounts[3]});
		const uintO4IIq2F = await PRDZstakingV2dECRszE.updateScoreEth.call(uintrfZTeR, {from: accounts[2]});
		const uintyNdzchf = await PRDZstakingV2dECRszE.stake.call(uintsQBrgan, {from: accounts[3]});

		assert.equal(uintRR6dT08, BigInt("0"))
		await expect(PRDZstakingV2dECRszE.updateScoreEth.call(uintrfZTeR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2NID1aID = await PRDZstakingV2.new({from: accounts[5]});
		const uintYt4RMc1 = BigInt("870")
		const addressu0MwDFA = accounts[1]
		const uintawqE18 = await PRDZstakingV2NID1aID.unstake.call(uintYt4RMc1, {from: accounts[5]});
		await PRDZstakingV2NID1aID.claimReward.call({from: accounts[0]});
		const uintaWDeyHD = await PRDZstakingV2NID1aID.getTotalStaked.call({from: accounts[5]});
		const uintqGB2WIU = await PRDZstakingV2NID1aID.getScoreEth.call(addressu0MwDFA, {from: accounts[5]});
		await PRDZstakingV2NID1aID.claimScoreEth.call({from: accounts[3]});

		await expect(PRDZstakingV2NID1aID.unstake.call(uintYt4RMc1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2D6TH0Aj = await PRDZstakingV2.new({from: accounts[0]});
		const uintpTblicE = BigInt("429")
		const uint4mmZ53 = await PRDZstakingV2D6TH0Aj.getTotalFeeCollected.call({from: accounts[4]});
		const uintlJgWGdG = await PRDZstakingV2D6TH0Aj.unstake.call(uintpTblicE, {from: accounts[0]});

		assert.equal(uint4mmZ53, BigInt("0"))
		await expect(PRDZstakingV2D6TH0Aj.unstake.call(uintpTblicE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2fhEAtm7 = await PRDZstakingV2.new({from: accounts[0]});
		const uintwuoXNhT = BigInt("1691")
		const addressQhIap94 = accounts[4]
		const addressniXc4zZ = accounts[3]
		const uintf3rKsWQ = await PRDZstakingV2fhEAtm7.getTotalUnStaked.call({from: accounts[2]});
		const uint9NvGtS = await PRDZstakingV2fhEAtm7.stake.call(uintwuoXNhT, {from: accounts[5]});
		const addresscoBvocp = await PRDZstakingV2fhEAtm7.transferOwnership.call(addressQhIap94, {from: "0x0000000000000000000000000000000000000001"});
		const addresseYCeXlp = await PRDZstakingV2fhEAtm7.transferOwnership.call(addressniXc4zZ, {from: accounts[2]});
		const uintKt6x5qg = await PRDZstakingV2fhEAtm7.getTotalClaimed.call({from: accounts[2]});
		const uintWrTejdg = await PRDZstakingV2fhEAtm7.getNumberOfHolders.call({from: accounts[2]});

		assert.equal(uintf3rKsWQ, BigInt("0"))
		await expect(PRDZstakingV2fhEAtm7.stake.call(uintwuoXNhT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2PrkbzIZ = await PRDZstakingV2.new({from: accounts[3]});
		const uintlcJYI9o = BigInt("679")
		const addressHlO0cOJ = accounts[4]
		await PRDZstakingV2PrkbzIZ.deposit.call({from: accounts[3]});
		const uintLYQNe5o = await PRDZstakingV2PrkbzIZ.unstake.call(uintlcJYI9o, {from: accounts[3]});
		await PRDZstakingV2PrkbzIZ.deposit.call({from: accounts[3]});
		const addressP4G77sV = await PRDZstakingV2PrkbzIZ.transferOwnership.call(addressHlO0cOJ, {from: accounts[2]});

		await expect(PRDZstakingV2PrkbzIZ.deposit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OA4Htj4 = await PRDZstakingV2.new({from: accounts[4]});
		const addressmJJJxCI = accounts[1]
		const uintyBWtgm = BigInt("918")
		const uintBEtqwpx = await PRDZstakingV2OA4Htj4.getStakingScore.call(addressmJJJxCI, {from: accounts[1]});
		await PRDZstakingV2OA4Htj4.claimScoreEth.call({from: accounts[0]});
		const uintHx4p37A = await PRDZstakingV2OA4Htj4.updateScoreEth.call(uintyBWtgm, {from: accounts[5]});

		assert.equal(uintBEtqwpx, BigInt("0"))
		await expect(PRDZstakingV2OA4Htj4.claimScoreEth.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2D6TH0Aj = await PRDZstakingV2.new({from: accounts[0]});
		const uintHlZGGhY = BigInt("429")
		const uint4mmZ53 = await PRDZstakingV2D6TH0Aj.getTotalFeeCollected.call({from: accounts[4]});
		await PRDZstakingV2D6TH0Aj.claimReward.call({from: accounts[3]});
		await PRDZstakingV2D6TH0Aj.claimReward.call({from: accounts[1]});
		const uintlJgWGdG = await PRDZstakingV2D6TH0Aj.unstake.call(uintHlZGGhY, {from: accounts[0]});

		assert.equal(uint4mmZ53, BigInt("0"))
		await expect(PRDZstakingV2D6TH0Aj.claimReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OA4Htj4 = await PRDZstakingV2.new({from: accounts[4]});
		const addressehe3P9N = accounts[1]
		const uintgZ85B3F = BigInt("862")
		const uintjsGtc8b = BigInt("459")
		const uintyJj3FyP = BigInt("1007")
		const uintsPxQoCe = await PRDZstakingV2OA4Htj4.getNumberOfHolders.call({from: accounts[2]});
		const uintBEtqwpx = await PRDZstakingV2OA4Htj4.getStakingScore.call(addressehe3P9N, {from: accounts[1]});
		const uintgaS82i7 = await PRDZstakingV2OA4Htj4.getTotalFeeCollected.call({from: accounts[1]});
		const uintfgqJSiH = await PRDZstakingV2OA4Htj4.updateOffer.call(uintjsGtc8b, uintgZ85B3F, {from: accounts[3]});
		const uintmuH3Duw = await PRDZstakingV2OA4Htj4.getNumberOfHolders.call({from: accounts[0]});
		const uintHx4p37A = await PRDZstakingV2OA4Htj4.updateScoreEth.call(uintyJj3FyP, {from: accounts[5]});

		assert.equal(uintBEtqwpx, BigInt("0"))
		assert.equal(uintgaS82i7, BigInt("0"))
		assert.equal(uintsPxQoCe, BigInt("0"))
		await expect(PRDZstakingV2OA4Htj4.updateOffer.call(uintjsGtc8b, uintgZ85B3F, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2hJbFLMr = await PRDZstakingV2.new({from: accounts[0]});
		const addressOHkPub1 = accounts[0]
		const uintGqoVIWh = BigInt("388")
		const uintSKlaC7z = await PRDZstakingV2hJbFLMr.getNumberOfHolders.call({from: accounts[2]});
		await PRDZstakingV2hJbFLMr.deposit.call({from: "0x0000000000000000000000000000000000000001"});
		const uintm3SWqMP = await PRDZstakingV2hJbFLMr.getScoreEth.call(addressOHkPub1, {from: accounts[2]});
		await PRDZstakingV2hJbFLMr.claimScoreEth.call({from: accounts[3]});
		const uintwPj4efO = await PRDZstakingV2hJbFLMr.unstake.call(uintGqoVIWh, {from: accounts[4]});

		assert.equal(uintSKlaC7z, BigInt("0"))
		await expect(PRDZstakingV2hJbFLMr.deposit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2VhoddBl = await PRDZstakingV2.new({from: accounts[4]});
		const addressiHqrZXR = accounts[1]
		const addresssEf48rg = accounts[5]
		const addressN9XwVId = accounts[3]
		const addressFGA7dqf = accounts[4]
		const addressI49hjOU = accounts[1]
		const uintqlFebD = await PRDZstakingV2VhoddBl.getTotalStaked.call({from: accounts[5]});
		const uintkBTlSsC = await PRDZstakingV2VhoddBl.getScoreEth.call(addressiHqrZXR, {from: accounts[3]});
		const uinty67CaE1 = await PRDZstakingV2VhoddBl.getScoreEth.call(addresssEf48rg, {from: accounts[0]});
		const addresseVL8Fcr = await PRDZstakingV2VhoddBl.transferOwnership.call(addressN9XwVId, {from: accounts[4]});
		const uintqf6CMyg = await PRDZstakingV2VhoddBl.getTotalFeeCollected.call({from: accounts[3]});
		const uintRAxgDEt = await PRDZstakingV2VhoddBl.getTotalStaked.call({from: accounts[1]});
		const uintobCTsQT = await PRDZstakingV2VhoddBl.getNumberOfHolders.call({from: accounts[4]});
		const uintKqwMWYd = await PRDZstakingV2VhoddBl.getTotalClaimed.call({from: accounts[0]});
		const uintv5VVtjo = await PRDZstakingV2VhoddBl.getStakingScore.call(addressFGA7dqf, {from: accounts[1]});
		const uinttc7217m = await PRDZstakingV2VhoddBl.getPendingReward.call(addressI49hjOU, {from: accounts[1]});

		assert.equal(uintKqwMWYd, BigInt("0"))
		assert.equal(uintRAxgDEt, BigInt("0"))
		assert.equal(uintkBTlSsC, BigInt("0"))
		assert.equal(uintobCTsQT, BigInt("0"))
		assert.equal(uintqf6CMyg, BigInt("0"))
		assert.equal(uintqlFebD, BigInt("0"))
		assert.equal(uinttc7217m, BigInt("0"))
		assert.equal(uintv5VVtjo, BigInt("0"))
		assert.equal(uinty67CaE1, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2D6TH0Aj = await PRDZstakingV2.new({from: accounts[0]});
		const uintNPDaLj = BigInt("1644")
		const uintyvz6gZE = BigInt("1971")
		const uintTNbPQb0 = BigInt("1688")
		const uintL9Yd5C0 = BigInt("429")
		const uintwvBGMtI = await PRDZstakingV2D6TH0Aj.updateOffer.call(uintyvz6gZE, uintNPDaLj, {from: accounts[0]});
		const uintMuuN21t = await PRDZstakingV2D6TH0Aj.updateScoreEth.call(uintTNbPQb0, {from: accounts[3]});
		const uintlJgWGdG = await PRDZstakingV2D6TH0Aj.unstake.call(uintL9Yd5C0, {from: accounts[0]});

		await expect(PRDZstakingV2D6TH0Aj.updateScoreEth.call(uintTNbPQb0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ZojeiwT = await PRDZstakingV2.new({from: accounts[1]});
		const uinta2i6E1T = BigInt("661")
		const uintUjmTV28 = BigInt("177")
		const addressXd1I3Di = accounts[3]
		await PRDZstakingV2ZojeiwT.claimScoreEth.call({from: accounts[3]});
		const uintI8Hov6B = await PRDZstakingV2ZojeiwT.updateScoreEth.call(uinta2i6E1T, {from: accounts[1]});
		const uintEA5lOpK = await PRDZstakingV2ZojeiwT.getTotalUnStaked.call({from: accounts[2]});
		await PRDZstakingV2ZojeiwT.deposit.call({from: accounts[2]});
		const uintgvNUAui = await PRDZstakingV2ZojeiwT.stake.call(uintUjmTV28, {from: accounts[1]});
		const uintGbhWyg1 = await PRDZstakingV2ZojeiwT.getTotalStaked.call({from: accounts[1]});
		const addressM8tqLiY = await PRDZstakingV2ZojeiwT.transferOwnership.call(addressXd1I3Di, {from: accounts[2]});

		await expect(PRDZstakingV2ZojeiwT.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2j4yvWge = await PRDZstakingV2.new({from: accounts[1]});
		const addressblaJtAH = accounts[4]
		const uintKj2ztZM = BigInt("1045")
		const uintxq9kd6N = BigInt("877")
		const addressXD8OnoL = accounts[1]
		const uintUALOoc = await PRDZstakingV2j4yvWge.getPendingReward.call(addressblaJtAH, {from: accounts[0]});
		await PRDZstakingV2j4yvWge.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uinthT7GqVQ = await PRDZstakingV2j4yvWge.updateScoreEth.call(uintKj2ztZM, {from: "0x0000000000000000000000000000000000000001"});
		const uintSflGMWV = await PRDZstakingV2j4yvWge.stake.call(uintxq9kd6N, {from: accounts[3]});
		const uintO2Ftrul = await PRDZstakingV2j4yvWge.getScoreEth.call(addressXD8OnoL, {from: accounts[2]});

		assert.equal(uintUALOoc, BigInt("0"))
		await expect(PRDZstakingV2j4yvWge.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ZojeiwT = await PRDZstakingV2.new({from: accounts[1]});
		const uintSL6KOKQ = BigInt("0")
		const uintmWPUYNg = BigInt("143")
		const uintgvNUAui = await PRDZstakingV2ZojeiwT.stake.call(uintSL6KOKQ, {from: accounts[1]});
		const uintWJgZLSZ = await PRDZstakingV2ZojeiwT.unstake.call(uintmWPUYNg, {from: accounts[4]});

		await expect(PRDZstakingV2ZojeiwT.stake.call(uintSL6KOKQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})