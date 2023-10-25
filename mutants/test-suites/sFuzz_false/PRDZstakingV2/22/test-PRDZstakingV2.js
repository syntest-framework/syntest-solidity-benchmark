const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2RweoKBn = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressYQjy9ar = "0x0000000000000000000000000000000000000001"
		const uintUaTmm8K = BigInt("1759")
		const uintVaLJOkQ = await PRDZstakingV2RweoKBn.getNumberOfHolders.call({from: accounts[0]});
		const uintHEfSWEm = await PRDZstakingV2RweoKBn.getPendingReward.call(addressYQjy9ar, {from: accounts[3]});
		const uintZ0YxOII = await PRDZstakingV2RweoKBn.unstake.call(uintUaTmm8K, {from: accounts[0]});
		await PRDZstakingV2RweoKBn.deposit.call({from: accounts[0]});
		const uinthOuRYnW = await PRDZstakingV2RweoKBn.getTotalStaked.call({from: accounts[3]});
		const uint9qyBLI = await PRDZstakingV2RweoKBn.getTotalFeeCollected.call({from: accounts[1]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ydmGLhj = await PRDZstakingV2.new({from: accounts[0]});
		const uintXWGQxDq = BigInt("683")
//		await PRDZstakingV2ydmGLhj.claimScoreEth.call({from: accounts[0]});
//		const uintp6AmPkw = await PRDZstakingV2ydmGLhj.stake.call(uintXWGQxDq, {from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2ydmGLhj.claimReward.call({from: accounts[1]});
//		const uintYn9a3Ey = await PRDZstakingV2ydmGLhj.getTotalUnStaked.call({from: accounts[0]});

		await expect(PRDZstakingV2ydmGLhj.claimScoreEth.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2VHNVwsY = await PRDZstakingV2.new({from: accounts[3]});
		const uintNizh6Qb = BigInt("1576")
		const uintxTwEk2j = BigInt("1142")
		const addressq7xreRI = accounts[2]
		const uintnjK6ZNZ = await PRDZstakingV2VHNVwsY.getTotalUnStaked.call({from: accounts[0]});
		const uinttbHa20x = await PRDZstakingV2VHNVwsY.getTotalClaimed.call({from: accounts[1]});
//		const uintaIq7SEb = await PRDZstakingV2VHNVwsY.updateScoreEth.call(uintNizh6Qb, {from: accounts[5]});
//		const uintxpr3Ikh = await PRDZstakingV2VHNVwsY.updateScoreEth.call(uintxTwEk2j, {from: "0x0000000000000000000000000000000000000001"});
//		const addressidmH0L3 = await PRDZstakingV2VHNVwsY.transferOwnership.call(addressq7xreRI, {from: accounts[3]});

		assert.equal(uintnjK6ZNZ, BigInt("0"))
		assert.equal(uinttbHa20x, BigInt("0"))
		await expect(PRDZstakingV2VHNVwsY.updateScoreEth.call(uintNizh6Qb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2mYNLrqS = await PRDZstakingV2.new({from: accounts[0]});
		const uintMc1qKhn = BigInt("350")
		const uintN1B3hoJ = BigInt("1572")
//		const uintVqMM6Q4 = await PRDZstakingV2mYNLrqS.unstake.call(uintMc1qKhn, {from: accounts[3]});
//		const uintjYDWb8L = await PRDZstakingV2mYNLrqS.stake.call(uintN1B3hoJ, {from: accounts[1]});

		await expect(PRDZstakingV2mYNLrqS.unstake.call(uintMc1qKhn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Bre5THO = await PRDZstakingV2.new({from: accounts[2]});
		const uintRMIQXz = BigInt("817")
		const uintC6kavKJ = BigInt("2045")
		const uintf6f5GMi = BigInt("391")
		const uintPS1XuTh = BigInt("111")
		const addressWqUv1t = accounts[1]
//		await PRDZstakingV2Bre5THO.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uinttZNsBhy = await PRDZstakingV2Bre5THO.stake.call(uintRMIQXz, {from: accounts[5]});
//		const uintLuBuum2 = await PRDZstakingV2Bre5THO.updateScoreEth.call(uintC6kavKJ, {from: accounts[4]});
//		const uintZqC4TdM = await PRDZstakingV2Bre5THO.updateOffer.call(uintPS1XuTh, uintf6f5GMi, {from: accounts[4]});
//		const uintdmHcFnx = await PRDZstakingV2Bre5THO.getPendingReward.call(addressWqUv1t, {from: accounts[5]});

		await expect(PRDZstakingV2Bre5THO.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Dg6XUOb = await PRDZstakingV2.new({from: accounts[3]});
		const addressAa9QRW1 = accounts[5]
		const addresseW4mXhU = accounts[4]
		const uintunh9FlF = BigInt("770")
		const uintmW0yIBW = BigInt("1351")
		const uintbStit58 = await PRDZstakingV2Dg6XUOb.getPendingReward.call(addressAa9QRW1, {from: accounts[1]});
		const uinto1wfjNQ = await PRDZstakingV2Dg6XUOb.getScoreEth.call(addresseW4mXhU, {from: accounts[3]});
//		const uinteof18kt = await PRDZstakingV2Dg6XUOb.unstake.call(uintunh9FlF, {from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2Dg6XUOb.claimScoreEth.call({from: accounts[4]});
//		const uintulqKAPm = await PRDZstakingV2Dg6XUOb.stake.call(uintmW0yIBW, {from: accounts[3]});

		assert.equal(uintbStit58, BigInt("0"))
		assert.equal(uinto1wfjNQ, BigInt("0"))
		await expect(PRDZstakingV2Dg6XUOb.unstake.call(uintunh9FlF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2FPEHS45 = await PRDZstakingV2.new({from: accounts[2]});
//		await PRDZstakingV2FPEHS45.deposit.call({from: accounts[5]});
//		await PRDZstakingV2FPEHS45.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2FPEHS45.deposit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2E3wqsRB = await PRDZstakingV2.new({from: accounts[4]});
		const uintRkSBHVW = BigInt("1946")
		const uintSlAcj9w = await PRDZstakingV2E3wqsRB.getNumberOfHolders.call({from: accounts[5]});
//		const uintDhVx9ay = await PRDZstakingV2E3wqsRB.stake.call(uintRkSBHVW, {from: accounts[0]});
//		await PRDZstakingV2E3wqsRB.claimScoreEth.call({from: accounts[5]});
//		const uintlFR4Nyj = await PRDZstakingV2E3wqsRB.getTotalFeeCollected.call({from: accounts[0]});
//		await PRDZstakingV2E3wqsRB.claimReward.call({from: accounts[4]});

		assert.equal(uintSlAcj9w, BigInt("0"))
		await expect(PRDZstakingV2E3wqsRB.stake.call(uintRkSBHVW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Dg6XUOb = await PRDZstakingV2.new({from: accounts[3]});
		const addressRqYmsDB = accounts[5]
		const addressYsNh1Q5 = accounts[4]
		const uintlkLQOsF = BigInt("770")
		const uintBlWd41v = BigInt("1380")
		const uintbStit58 = await PRDZstakingV2Dg6XUOb.getPendingReward.call(addressRqYmsDB, {from: accounts[1]});
//		await PRDZstakingV2Dg6XUOb.claimReward.call({from: accounts[4]});
//		const uinto1wfjNQ = await PRDZstakingV2Dg6XUOb.getScoreEth.call(addressYsNh1Q5, {from: accounts[3]});
//		const uinteof18kt = await PRDZstakingV2Dg6XUOb.unstake.call(uintlkLQOsF, {from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2Dg6XUOb.claimScoreEth.call({from: accounts[4]});
//		const uintulqKAPm = await PRDZstakingV2Dg6XUOb.stake.call(uintBlWd41v, {from: accounts[3]});

		assert.equal(uintbStit58, BigInt("0"))
		await expect(PRDZstakingV2Dg6XUOb.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2FPEHS45 = await PRDZstakingV2.new({from: accounts[2]});
		const addressThyEfBR = accounts[3]
		const uinterzaXHl = await PRDZstakingV2FPEHS45.getStakingScore.call(addressThyEfBR, {from: accounts[2]});
		const uintOCqVW8J = await PRDZstakingV2FPEHS45.getNumberOfHolders.call({from: accounts[1]});
//		await PRDZstakingV2FPEHS45.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintOCqVW8J, BigInt("0"))
		assert.equal(uinterzaXHl, BigInt("0"))
		await expect(PRDZstakingV2FPEHS45.claimScoreEth.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2mYNLrqS = await PRDZstakingV2.new({from: accounts[0]});
		const uintPVuN6gD = BigInt("350")
		const uintFuIhGK2 = await PRDZstakingV2mYNLrqS.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintVqMM6Q4 = await PRDZstakingV2mYNLrqS.unstake.call(uintPVuN6gD, {from: accounts[3]});

		assert.equal(uintFuIhGK2, BigInt("0"))
		await expect(PRDZstakingV2mYNLrqS.unstake.call(uintPVuN6gD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2NnMCBC = await PRDZstakingV2.new({from: accounts[1]});
//		await PRDZstakingV2NnMCBC.claimScoreEth.call({from: accounts[2]});
//		const uintO83Xg3b = await PRDZstakingV2NnMCBC.getNumberOfHolders.call({from: accounts[2]});
//		await PRDZstakingV2NnMCBC.claimReward.call({from: accounts[3]});
//		const uintdfIUgDy = await PRDZstakingV2NnMCBC.getTotalFeeCollected.call({from: accounts[3]});

		await expect(PRDZstakingV2NnMCBC.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2NnMCBC = await PRDZstakingV2.new({from: accounts[1]});
		const uintBFcWWlX = BigInt("785")
		const uintXXnVV1s = BigInt("1798")
		const uint0jacGt = await PRDZstakingV2NnMCBC.updateScoreEth.call(uintBFcWWlX, {from: accounts[1]});
//		await PRDZstakingV2NnMCBC.deposit.call({from: accounts[1]});
//		const uintBlTEklc = await PRDZstakingV2NnMCBC.unstake.call(uintXXnVV1s, {from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2NnMCBC.claimReward.call({from: accounts[3]});

		await expect(PRDZstakingV2NnMCBC.deposit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Dg6XUOb = await PRDZstakingV2.new({from: accounts[3]});
		const uintijKAN4 = BigInt("1834")
		const uintLjNvA1e = BigInt("407")
		const addressJxyKv5e = accounts[5]
		const addressZtY6vb = accounts[4]
		const uintzUFU1c = await PRDZstakingV2Dg6XUOb.getTotalUnStaked.call({from: accounts[2]});
		const uintWC38kXU = await PRDZstakingV2Dg6XUOb.updateOffer.call(uintLjNvA1e, uintijKAN4, {from: accounts[3]});
		const uintbStit58 = await PRDZstakingV2Dg6XUOb.getPendingReward.call(addressJxyKv5e, {from: accounts[1]});
		const uinto1wfjNQ = await PRDZstakingV2Dg6XUOb.getScoreEth.call(addressZtY6vb, {from: accounts[3]});
//		await PRDZstakingV2Dg6XUOb.claimScoreEth.call({from: accounts[4]});

		assert.equal(uintbStit58, BigInt("0"))
		assert.equal(uinto1wfjNQ, BigInt("0"))
		assert.equal(uintzUFU1c, BigInt("0"))
		await expect(PRDZstakingV2Dg6XUOb.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Dg6XUOb = await PRDZstakingV2.new({from: accounts[3]});
		const addresseK7Bj0E = accounts[4]
		const addressEsFCesf = accounts[5]
		const addressJoBI8Q7 = accounts[5]
		const addressLQauTAg = await PRDZstakingV2Dg6XUOb.transferOwnership.call(addresseK7Bj0E, {from: accounts[3]});
//		await PRDZstakingV2Dg6XUOb.onlyOwner.call({from: accounts[3]});
//		const uintbStit58 = await PRDZstakingV2Dg6XUOb.getPendingReward.call(addressEsFCesf, {from: accounts[1]});
//		const uinto1wfjNQ = await PRDZstakingV2Dg6XUOb.getScoreEth.call(addressJoBI8Q7, {from: accounts[3]});
//		await PRDZstakingV2Dg6XUOb.claimScoreEth.call({from: accounts[4]});

		await expect(PRDZstakingV2Dg6XUOb.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})