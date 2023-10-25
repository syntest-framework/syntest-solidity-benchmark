const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2NMXRp9R = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvrA4T2V = BigInt("1317")
		const uinteSNbe1 = BigInt("510")
		const uintTkc7ZH = await PRDZstakingV2NMXRp9R.updateOffer.call(uinteSNbe1, uintvrA4T2V, {from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2NMXRp9R.deposit.call({from: accounts[4]});
		await PRDZstakingV2NMXRp9R.onlyOwner.call({from: accounts[4]});
		const uintU5euqzq = await PRDZstakingV2NMXRp9R.getTotalUnStaked.call({from: accounts[2]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OscD4hl = await PRDZstakingV2.new({from: accounts[0]});
		const uint6HkvK3 = BigInt("260")
		const uintBOc0zFp = await PRDZstakingV2OscD4hl.getTotalStaked.call({from: accounts[1]});
		const uintNz9TFrt = await PRDZstakingV2OscD4hl.getTotalClaimed.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintuSZJKp3 = await PRDZstakingV2OscD4hl.unstake.call(uint6HkvK3, {from: "0x0000000000000000000000000000000000000001"});
//		const uintlIaYL4y = await PRDZstakingV2OscD4hl.getTotalUnStaked.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintBOc0zFp, BigInt("0"))
		assert.equal(uintNz9TFrt, BigInt("0"))
		await expect(PRDZstakingV2OscD4hl.unstake.call(uint6HkvK3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2NTLBDS7 = await PRDZstakingV2.new({from: accounts[3]});
		const addressVhYbgph = accounts[4]
//		const addressdpS3LJr = await PRDZstakingV2NTLBDS7.transferOwnership.call(addressVhYbgph, {from: accounts[0]});
//		await PRDZstakingV2NTLBDS7.deposit.call({from: accounts[0]});
//		await PRDZstakingV2NTLBDS7.claimScoreEth.call({from: accounts[3]});

		await expect(PRDZstakingV2NTLBDS7.transferOwnership.call(addressVhYbgph, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2k7LUjNK = await PRDZstakingV2.new({from: accounts[2]});
		const addresszkF8SN = accounts[5]
		const uintl7E7dg1 = BigInt("476")
		const addressJccVSC1 = accounts[0]
		const uintisOR320 = await PRDZstakingV2k7LUjNK.getNumberOfHolders.call({from: accounts[1]});
//		await PRDZstakingV2k7LUjNK.onlyOwner.call({from: accounts[5]});
//		const uintlKgFfJD = await PRDZstakingV2k7LUjNK.getTotalClaimed.call({from: accounts[0]});
//		const addressgwAckPD = await PRDZstakingV2k7LUjNK.transferOwnership.call(addresszkF8SN, {from: accounts[3]});
//		const uint2Rz2IT = await PRDZstakingV2k7LUjNK.stake.call(uintl7E7dg1, {from: accounts[0]});
//		const uintAnUGxit = await PRDZstakingV2k7LUjNK.getScoreEth.call(addressJccVSC1, {from: accounts[3]});

		assert.equal(uintisOR320, BigInt("0"))
		await expect(PRDZstakingV2k7LUjNK.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OscD4hl = await PRDZstakingV2.new({from: accounts[0]});
		const addressCRXvBI = accounts[0]
		const uintJ8Wyii = BigInt("235")
		const uintBOc0zFp = await PRDZstakingV2OscD4hl.getTotalStaked.call({from: accounts[1]});
//		await PRDZstakingV2OscD4hl.deposit.call({from: accounts[3]});
//		const uintNz9TFrt = await PRDZstakingV2OscD4hl.getTotalClaimed.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintMC2oeG = await PRDZstakingV2OscD4hl.getScoreEth.call(addressCRXvBI, {from: accounts[4]});
//		const uintuSZJKp3 = await PRDZstakingV2OscD4hl.unstake.call(uintJ8Wyii, {from: "0x0000000000000000000000000000000000000001"});
//		const uintlIaYL4y = await PRDZstakingV2OscD4hl.getTotalUnStaked.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintBOc0zFp, BigInt("0"))
		await expect(PRDZstakingV2OscD4hl.deposit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2NTLBDS7 = await PRDZstakingV2.new({from: accounts[3]});
//		await PRDZstakingV2NTLBDS7.deposit.call({from: accounts[0]});
//		await PRDZstakingV2NTLBDS7.claimScoreEth.call({from: accounts[3]});

		await expect(PRDZstakingV2NTLBDS7.deposit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2gE4N7pm = await PRDZstakingV2.new({from: accounts[1]});
		const addresstmdhqB7 = accounts[0]
		const uintobjAg9 = await PRDZstakingV2gE4N7pm.getPendingReward.call(addresstmdhqB7, {from: accounts[0]});
//		await PRDZstakingV2gE4N7pm.claimScoreEth.call({from: accounts[4]});
//		const uintqXzkHPn = await PRDZstakingV2gE4N7pm.getTotalClaimed.call({from: accounts[5]});
//		const uintcEoDtSB = await PRDZstakingV2gE4N7pm.getNumberOfHolders.call({from: accounts[2]});
//		await PRDZstakingV2gE4N7pm.onlyOwner.call({from: accounts[2]});

		assert.equal(uintobjAg9, BigInt("0"))
		await expect(PRDZstakingV2gE4N7pm.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2NTLBDS7 = await PRDZstakingV2.new({from: accounts[3]});
		const addressltRpkKP = accounts[4]
//		await PRDZstakingV2NTLBDS7.deposit.call({from: accounts[0]});
//		await PRDZstakingV2NTLBDS7.claimScoreEth.call({from: accounts[2]});
//		const uintt9bxgoa = await PRDZstakingV2NTLBDS7.getStakingScore.call(addressltRpkKP, {from: accounts[4]});
//		const uintgehZN5W = await PRDZstakingV2NTLBDS7.getTotalClaimed.call({from: accounts[1]});
//		await PRDZstakingV2NTLBDS7.claimScoreEth.call({from: accounts[3]});

		await expect(PRDZstakingV2NTLBDS7.deposit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2NTLBDS7 = await PRDZstakingV2.new({from: accounts[3]});
		const addressVNBS1GX = accounts[2]
		const uintufYG0nq = BigInt("1854")
		const uintAJdKaRn = BigInt("735")
		const uinthg2R6W4 = await PRDZstakingV2NTLBDS7.getTotalFeeCollected.call({from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2NTLBDS7.deposit.call({from: accounts[0]});
//		const uintxSKoHTq = await PRDZstakingV2NTLBDS7.getPendingReward.call(addressVNBS1GX, {from: accounts[1]});
//		const uintBVIs7Hs = await PRDZstakingV2NTLBDS7.updateOffer.call(uintAJdKaRn, uintufYG0nq, {from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2NTLBDS7.claimScoreEth.call({from: accounts[3]});

		assert.equal(uinthg2R6W4, BigInt("0"))
		await expect(PRDZstakingV2NTLBDS7.deposit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2s4cMzGN = await PRDZstakingV2.new({from: accounts[1]});
		const uintUEYHqas = BigInt("1031")
//		await PRDZstakingV2s4cMzGN.claimReward.call({from: accounts[1]});
//		const uintVK6nVjk = await PRDZstakingV2s4cMzGN.getNumberOfHolders.call({from: accounts[1]});
//		const uintOZPG0XB = await PRDZstakingV2s4cMzGN.unstake.call(uintUEYHqas, {from: accounts[4]});

		await expect(PRDZstakingV2s4cMzGN.claimReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2s4cMzGN = await PRDZstakingV2.new({from: accounts[1]});
		const addresswOBoekL = accounts[2]
		const uintDet8v2J = BigInt("671")
		const uint20Ipj8 = await PRDZstakingV2s4cMzGN.getStakingScore.call(addresswOBoekL, {from: accounts[2]});
		const uintVK6nVjk = await PRDZstakingV2s4cMzGN.getNumberOfHolders.call({from: accounts[1]});
//		const uintIx3qQTH = await PRDZstakingV2s4cMzGN.stake.call(uintDet8v2J, {from: accounts[2]});

		assert.equal(uint20Ipj8, BigInt("0"))
		assert.equal(uintVK6nVjk, BigInt("0"))
		await expect(PRDZstakingV2s4cMzGN.stake.call(uintDet8v2J, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2s4cMzGN = await PRDZstakingV2.new({from: accounts[1]});
		const uintJBiD7Yp = BigInt("1788")
		const uintZg7CXTa = BigInt("1031")
		const uintr9Z0bMq = await PRDZstakingV2s4cMzGN.updateScoreEth.call(uintJBiD7Yp, {from: accounts[1]});
//		const uintOZPG0XB = await PRDZstakingV2s4cMzGN.unstake.call(uintZg7CXTa, {from: accounts[4]});

		await expect(PRDZstakingV2s4cMzGN.unstake.call(uintZg7CXTa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2NTLBDS7 = await PRDZstakingV2.new({from: accounts[3]});
		const addressSnTzVyq = accounts[4]
		const uintfq7ztzH = await PRDZstakingV2NTLBDS7.getTotalUnStaked.call({from: accounts[0]});
//		await PRDZstakingV2NTLBDS7.deposit.call({from: accounts[0]});
//		await PRDZstakingV2NTLBDS7.claimScoreEth.call({from: accounts[2]});
//		const uintkSwfTDv = await PRDZstakingV2NTLBDS7.getNumberOfHolders.call({from: accounts[1]});
//		const uintt9bxgoa = await PRDZstakingV2NTLBDS7.getStakingScore.call(addressSnTzVyq, {from: accounts[4]});
//		const uintgehZN5W = await PRDZstakingV2NTLBDS7.getTotalClaimed.call({from: accounts[1]});
//		await PRDZstakingV2NTLBDS7.claimScoreEth.call({from: accounts[3]});

		assert.equal(uintfq7ztzH, BigInt("0"))
		await expect(PRDZstakingV2NTLBDS7.deposit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2xQ7oNMp = await PRDZstakingV2.new({from: accounts[0]});
		const addressJl3U6kY = "0x00000000000000000000000000000000000000-1"
		const uintJWtqAdJ = BigInt("1990")
//		const uintW1RnUxD = await PRDZstakingV2xQ7oNMp.getPendingReward.call(addressJl3U6kY, {from: accounts[3]});
//		const uintYQQuAlQ = await PRDZstakingV2xQ7oNMp.getTotalFeeCollected.call({from: accounts[2]});
//		const uintVjX78FR = await PRDZstakingV2xQ7oNMp.updateScoreEth.call(uintJWtqAdJ, {from: accounts[2]});

		await expect(PRDZstakingV2xQ7oNMp.getPendingReward.call(addressJl3U6kY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2xQ7oNMp = await PRDZstakingV2.new({from: accounts[0]});
		const addressEXobJ9A = "0x0000000000000000000000000000000000000001"
		const addressWEBa9d = "0x0000000000000000000000000000000000000001"
		const addressEV3FQI = "0x0000000000000000000000000000000000000000"
		const addressuZHQWnL = await PRDZstakingV2xQ7oNMp.transferOwnership.call(addressEXobJ9A, {from: accounts[0]});
		const uintBrnnrzw = await PRDZstakingV2xQ7oNMp.getTotalClaimed.call({from: accounts[4]});
		const uintBYETh0Q = await PRDZstakingV2xQ7oNMp.getScoreEth.call(addressWEBa9d, {from: accounts[4]});
		const uintW1RnUxD = await PRDZstakingV2xQ7oNMp.getPendingReward.call(addressEV3FQI, {from: accounts[3]});

		assert.equal(uintBYETh0Q, BigInt("0"))
		assert.equal(uintBrnnrzw, BigInt("0"))
		assert.equal(uintW1RnUxD, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2s4cMzGN = await PRDZstakingV2.new({from: accounts[1]});
		const uintnPaGHh = BigInt("704")
		const uintR1rvUOB = BigInt("1168")
		const addressImYhYxA = "0x0000000000000000000000000000000000000001"
		const addressqoGnxnO = accounts[2]
		const uintVyTcpwi = BigInt("91")
		const uintzM5RXRz = BigInt("671")
		const uintnnnGGSv = await PRDZstakingV2s4cMzGN.updateOffer.call(uintR1rvUOB, uintnPaGHh, {from: accounts[1]});
		const uintVK6nVjk = await PRDZstakingV2s4cMzGN.getNumberOfHolders.call({from: accounts[1]});
		const uintjQ1fusw = await PRDZstakingV2s4cMzGN.getStakingScore.call(addressImYhYxA, {from: accounts[2]});
		const uintcBHbkgY = await PRDZstakingV2s4cMzGN.getScoreEth.call(addressqoGnxnO, {from: accounts[4]});
//		const uintpXC0aDi = await PRDZstakingV2s4cMzGN.stake.call(uintVyTcpwi, {from: accounts[1]});
//		const uintIx3qQTH = await PRDZstakingV2s4cMzGN.stake.call(uintzM5RXRz, {from: accounts[2]});

		assert.equal(uintVK6nVjk, BigInt("0"))
		assert.equal(uintcBHbkgY, BigInt("0"))
		assert.equal(uintjQ1fusw, BigInt("0"))
		await expect(PRDZstakingV2s4cMzGN.stake.call(uintVyTcpwi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2s4cMzGN = await PRDZstakingV2.new({from: accounts[1]});
		const uintvNJvTaE = BigInt("417")
		const uintFV1uyYM = BigInt("1996")
		const uintOnkA3eD = BigInt("73")
		const uintjbWNe1N = BigInt("487")
		const uintxWPqvB = BigInt("0")
		const uintZVALvPS = BigInt("1147")
		const uintt04nRf2 = BigInt("29")
		const uintcdEQ9IZ = BigInt("735")
		const uinthUHZGGN = await PRDZstakingV2s4cMzGN.getTotalClaimed.call({from: accounts[5]});
		const uintVEDTIzE = await PRDZstakingV2s4cMzGN.updateOffer.call(uintFV1uyYM, uintvNJvTaE, {from: accounts[1]});
		const uintRsDmr5k = await PRDZstakingV2s4cMzGN.updateOffer.call(uintjbWNe1N, uintOnkA3eD, {from: accounts[1]});
//		const uintxkCjmB = await PRDZstakingV2s4cMzGN.stake.call(uintxWPqvB, {from: accounts[0]});
//		const uintLdJGiJO = await PRDZstakingV2s4cMzGN.updateScoreEth.call(uintZVALvPS, {from: accounts[1]});
//		await PRDZstakingV2s4cMzGN.claimScoreEth.call({from: accounts[5]});
//		await PRDZstakingV2s4cMzGN.claimReward.call({from: accounts[4]});
//		const uinty70yl2 = await PRDZstakingV2s4cMzGN.getNumberOfHolders.call({from: accounts[1]});
//		const uintpXC0aDi = await PRDZstakingV2s4cMzGN.stake.call(uintt04nRf2, {from: accounts[1]});
//		const uintje2KRuV = await PRDZstakingV2s4cMzGN.getTotalClaimed.call({from: accounts[1]});
//		const uintlHuRAlf = await PRDZstakingV2s4cMzGN.getTotalStaked.call({from: accounts[2]});
//		const uintfGzZ8FO = await PRDZstakingV2s4cMzGN.updateScoreEth.call(uintcdEQ9IZ, {from: accounts[2]});

		assert.equal(uinthUHZGGN, BigInt("0"))
		await expect(PRDZstakingV2s4cMzGN.stake.call(uintxWPqvB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})