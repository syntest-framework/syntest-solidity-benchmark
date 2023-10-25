const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyJgO4qNX = await HungryHoody.new({from: accounts[2]});
		const uintmtua6xI = BigInt("1451")
		const uintgOM1JCJ = BigInt("59")
		const uintLwQ2P9B = BigInt("1168")
		const uintZL1Irt9 = BigInt("698")
		const uintaq1Qzs = BigInt("1608")
		const addressULMhlZq = accounts[2]
		const addresselP8OgV = accounts[4]
		const uintuJ1OHw4 = BigInt("119")
		const uintRNyfCIR = BigInt("227")
		const uintsIwffW = await HungryHoodyJgO4qNX.totalSupply.call({from: accounts[2]});
//		const uintiMhGls = await HungryHoodyJgO4qNX.safeSub.call(uintgOM1JCJ, uintmtua6xI, {from: accounts[0]});
//		const uintd5oZpqO = await HungryHoodyJgO4qNX.safeSub.call(uintZL1Irt9, uintLwQ2P9B, {from: accounts[3]});
//		const boolH7aSGkt = await HungryHoodyJgO4qNX.transferFrom.call(addresselP8OgV, addressULMhlZq, uintaq1Qzs, {from: accounts[3]});
//		const uintvZC7DRS = await HungryHoodyJgO4qNX.safeMul.call(uintRNyfCIR, uintuJ1OHw4, {from: accounts[1]});
//		const uintmMhIzW7 = await HungryHoodyJgO4qNX.totalSupply.call({from: accounts[2]});

		assert.equal(uintsIwffW, BigInt("25000000000000000000"))
		await expect(HungryHoodyJgO4qNX.safeSub.call(uintgOM1JCJ, uintmtua6xI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyGfw2CHi = await HungryHoody.new({from: accounts[1]});
		const uintgRAgJ9b = BigInt("1166")
		const uinttKFaw7 = BigInt("636")
		const addressMuBrHZ = "0x0000000000000000000000000000000000000001"
		const addresspNG4Bu = accounts[2]
		const uintL8tu9O = BigInt("206")
		const uintB8mQWUE = BigInt("467")
		const uintDbIzdc2 = BigInt("1828")
		const uintd64XxlM = BigInt("1044")
		const uintXnxhPcm = BigInt("51")
		const uintbv4OsF = BigInt("844")
		const uinttltyNk = await HungryHoodyGfw2CHi.safeDiv.call(uinttKFaw7, uintgRAgJ9b, {from: accounts[5]});
		const uintGhUzP8n = await HungryHoodyGfw2CHi.allowance.call(addresspNG4Bu, addressMuBrHZ, {from: accounts[3]});
		const uintXUzzQ35 = await HungryHoodyGfw2CHi.safeMul.call(uintB8mQWUE, uintL8tu9O, {from: accounts[1]});
		const uintVnTt5kr = await HungryHoodyGfw2CHi.safeAdd.call(uintd64XxlM, uintDbIzdc2, {from: "0x0000000000000000000000000000000000000001"});
		const uintaPuiUM6 = await HungryHoodyGfw2CHi.safeDiv.call(uintbv4OsF, uintXnxhPcm, {from: accounts[2]});

		assert.equal(uintGhUzP8n, BigInt("0"))
		assert.equal(uintVnTt5kr, BigInt("2872"))
		assert.equal(uintXUzzQ35, BigInt("96202"))
		assert.equal(uintaPuiUM6, BigInt("16"))
		assert.equal(uinttltyNk, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyTBpliht = await HungryHoody.new({from: accounts[5]});
		const uintSzJAOdg = BigInt("936")
		const addresstALlnzX = accounts[0]
		const uintevs69fd = BigInt("1360")
		const addressq8WK5Bd = accounts[1]
		const uintkrRQOx3 = BigInt("1653")
		const addressmb6tBeB = accounts[2]
		const uintNlJ90tg = BigInt("1291")
		const uintcQ1MZud = BigInt("679")
		const uinthHtDtIm = BigInt("1641")
		const uintBGR6MjN = BigInt("431")
//		const boolfAKMeSo = await HungryHoodyTBpliht.transfer.call(addresstALlnzX, uintSzJAOdg, {from: accounts[0]});
//		const boolArwDPl = await HungryHoodyTBpliht.transfer.call(addressq8WK5Bd, uintevs69fd, {from: accounts[0]});
//		const booln79s1Ej = await HungryHoodyTBpliht.transfer.call(addressmb6tBeB, uintkrRQOx3, {from: accounts[1]});
//		const uintwiufLYS = await HungryHoodyTBpliht.safeDiv.call(uintcQ1MZud, uintNlJ90tg, {from: accounts[2]});
//		const uintBkgpyKF = await HungryHoodyTBpliht.safeSub.call(uintBGR6MjN, uinthHtDtIm, {from: accounts[2]});

		await expect(HungryHoodyTBpliht.transfer.call(addresstALlnzX, uintSzJAOdg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyfG8nbq = await HungryHoody.new({from: accounts[0]});
		const uintxAWE99o = BigInt("1572")
		const addressaiswdB0 = accounts[4]
		const uintCwZBTmm = BigInt("166")
		const uintiVHf1rf = BigInt("1143")
		const booleAiAwFK = await HungryHoodyfG8nbq.approve.call(addressaiswdB0, uintxAWE99o, {from: "0x0000000000000000000000000000000000000001"});
		const uintg1K1zGC = await HungryHoodyfG8nbq.safeDiv.call(uintiVHf1rf, uintCwZBTmm, {from: accounts[1]});

		assert.equal(booleAiAwFK, true)
		assert.equal(uintg1K1zGC, BigInt("6"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyYLGb7rM = await HungryHoody.new({from: accounts[2]});
		const uintKievAu9 = BigInt("755")
		const uintUVyKmE7 = BigInt("2017")
		const addressqyd7F1c = accounts[0]
		const uinti0qVht6 = BigInt("164")
		const addresszk0sUc6 = accounts[0]
		const uintOPFGry = BigInt("990")
		const addressjW7TveG = accounts[1]
		const addressB24f6vY = accounts[2]
		const uintQ1YP8Ow = await HungryHoodyYLGb7rM.safeSub.call(uintUVyKmE7, uintKievAu9, {from: accounts[3]});
		const uintQwvQPcv = await HungryHoodyYLGb7rM.balanceOf.call(addressqyd7F1c, {from: accounts[4]});
		const boolmT9xYrv = await HungryHoodyYLGb7rM.approve.call(addresszk0sUc6, uinti0qVht6, {from: accounts[3]});
		const boolxmYMdNL = await HungryHoodyYLGb7rM.approve.call(addressjW7TveG, uintOPFGry, {from: accounts[3]});
		const uintRNPiV2v = await HungryHoodyYLGb7rM.balanceOf.call(addressB24f6vY, {from: accounts[4]});

		assert.equal(boolmT9xYrv, true)
		assert.equal(boolxmYMdNL, true)
		assert.equal(uintQ1YP8Ow, BigInt("1262"))
		assert.equal(uintQwvQPcv, BigInt("0"))
		assert.equal(uintRNPiV2v, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyPevoaF7 = await HungryHoody.new({from: accounts[1]});
		const uintcM4k0Lk = BigInt("1439")
		const uintvNC101s = BigInt("204")
		const uintUdMIHAt = BigInt("1772")
		const addressZJX7W1F = accounts[4]
		const addressBXDKVq3 = accounts[0]
		const uintfzhP66o = BigInt("1828")
		const addressYxD5Ebe = accounts[3]
		const addressOno2sbF = accounts[1]
		const addressJO8yFnz = accounts[1]
		const addresscdBGpk2 = accounts[0]
		const addressX3SPNue = accounts[0]
		const uintMFpX5bX = await HungryHoodyPevoaF7.totalSupply.call({from: accounts[0]});
		const uintW2Y2boZ = await HungryHoodyPevoaF7.safeDiv.call(uintvNC101s, uintcM4k0Lk, {from: accounts[0]});
//		const booldEGBZ0I = await HungryHoodyPevoaF7.transferFrom.call(addressBXDKVq3, addressZJX7W1F, uintUdMIHAt, {from: accounts[4]});
//		const boolA5Ee8n = await HungryHoodyPevoaF7.transfer.call(addressYxD5Ebe, uintfzhP66o, {from: "0x0000000000000000000000000000000000000001"});
//		const uintIbiGrdo = await HungryHoodyPevoaF7.allowance.call(addressJO8yFnz, addressOno2sbF, {from: accounts[0]});
//		const uintqxNo9j = await HungryHoodyPevoaF7.allowance.call(addressX3SPNue, addresscdBGpk2, {from: accounts[4]});

		assert.equal(uintMFpX5bX, BigInt("25000000000000000000"))
		assert.equal(uintW2Y2boZ, BigInt("0"))
		await expect(HungryHoodyPevoaF7.transferFrom.call(addressBXDKVq3, addressZJX7W1F, uintUdMIHAt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyHGeW0cK = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintOV37LZe = BigInt("449")
		const addressT12PfmI = accounts[3]
		const addressI8D29qj = accounts[5]
		const uintGdM2HUT = BigInt("1")
		const addresskK3RJW1 = accounts[0]
		const addressSbHbpwg = "0x0000000000000000000000000000000000000001"
		const boolKsxmeRP = await HungryHoodyHGeW0cK.transferFrom.call(addressI8D29qj, addressT12PfmI, uintOV37LZe, {from: accounts[0]});
		const boolacAFCal = await HungryHoodyHGeW0cK.transferFrom.call(addressSbHbpwg, addresskK3RJW1, uintGdM2HUT, {from: accounts[5]});
	});
})