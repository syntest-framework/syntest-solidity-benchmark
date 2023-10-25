const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uinttgfUfrW = BigInt("759")
		const stringJLzJLvM = "xCrKnOpVajuHXerEDgxy755PNj5Q3oF9rj1U1TyewCD"
		const stringh9eCfy9 = "gdr6rvdrOuT1Aze1Xyf"
		const uintdgp65D9 = BigInt("2019")
		const ANRXTokenfco0Ep = await ANRXToken.new(uinttgfUfrW, stringJLzJLvM, stringh9eCfy9, uintdgp65D9, {from: accounts[3]});
		const addressh3zzlPH = accounts[3]
		const addressFlWjmR4 = accounts[0]
		const uintZHwyIII = await ANRXTokenfco0Ep.totalSupply.call({from: accounts[3]});
		const uintUXZWWR3 = await ANRXTokenfco0Ep.allowance.call(addressFlWjmR4, addressh3zzlPH, {from: accounts[2]});

		assert.equal(uintUXZWWR3, BigInt("0"))
		assert.equal(uintZHwyIII, BigInt("759"))
	});

	it('test for ANRXToken', async () => {
		const uintgZgTAY1 = BigInt("1096")
		const stringF8Emnte = "HwepEXHG"
		const stringS6noW4X = "AWr3Xrkz"
		const uintxEuulpk = BigInt("1498")
		const ANRXTokenUZQkdT = await ANRXToken.new(uintgZgTAY1, stringF8Emnte, stringS6noW4X, uintxEuulpk, {from: "0x0000000000000000000000000000000000000001"});
		const uint2Bm5Fx = BigInt("965")
		const addressgikbIA0 = "0x0000000000000000000000000000000000000001"
		const uintnsJIL90 = BigInt("283")
		const addressL4mx0fy = accounts[1]
		const addressZZAnUuQ = accounts[3]
		const boolLLw6B3j = await ANRXTokenUZQkdT.approve.call(addressgikbIA0, uint2Bm5Fx, {from: accounts[4]});
		const boolFaom3gr = await ANRXTokenUZQkdT.transferFrom.call(addressZZAnUuQ, addressL4mx0fy, uintnsJIL90, {from: accounts[0]});
	});

	it('test for ANRXToken', async () => {
		const uint2D2Dqv = BigInt("1018")
		const stringQab6CTD = "pwyyiWygJ10SKNcsI6IIsQ19kz6Dx54hA3wA6dtCCWH8vQX9goDCkL0cQvXpWyxcy5deeHtnRiAJmS0QsrY"
		const stringEayDfky = "Rv5yjLBsIEyISeSBs8n4SgJmt5C8mojkFbA1FVkUB70IC1MImw2Y3fQaGT2oz3DRhQPsUtpEqFEpDjkGc1bnxn"
		const uintAVniy00 = BigInt("1070")
		const ANRXTokentPy2MA2 = await ANRXToken.new(uint2D2Dqv, stringQab6CTD, stringEayDfky, uintAVniy00, {from: accounts[5]});
		const addressUFXY9ws = accounts[3]
		const addressOqHj5UH = accounts[1]
		const addressOJe40nT = accounts[1]
		const addressKea3HcY = accounts[3]
		const addressAI9oGoM = accounts[3]
		const addressmdmFlV = accounts[5]
		const addressMGUTNbL = accounts[3]
		const addresscOAZNVG = accounts[0]
		const uintxFPLf0K = BigInt("409")
		const addressEY7yEMO = accounts[3]
		const uintgSj2AGr = await ANRXTokentPy2MA2.allowance.call(addressOqHj5UH, addressUFXY9ws, {from: accounts[0]});
		const uintZPeVOZ = await ANRXTokentPy2MA2.allowance.call(addressKea3HcY, addressOJe40nT, {from: accounts[5]});
		const uintyax1Qt0 = await ANRXTokentPy2MA2.allowance.call(addressmdmFlV, addressAI9oGoM, {from: accounts[0]});
		const uintl09Knw = await ANRXTokentPy2MA2.allowance.call(addresscOAZNVG, addressMGUTNbL, {from: accounts[3]});
		const boolsyHDMPb = await ANRXTokentPy2MA2.transfer.call(addressEY7yEMO, uintxFPLf0K, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintZPeVOZ, BigInt("0"))
		assert.equal(uintgSj2AGr, BigInt("0"))
		assert.equal(uintl09Knw, BigInt("0"))
		assert.equal(uintyax1Qt0, BigInt("0"))
		await expect(ANRXTokentPy2MA2.transfer.call(addressEY7yEMO, uintxFPLf0K, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintNcY0aRS = BigInt("777")
		const stringqqLvjZP = "IefcNPuG1HQvFe6BbHMVD26crc9ep6Jq5X4zrIRRYuRrcuKF5DpSEG2O85PAWJSOSDgtpjQqW"
		const stringbP0i6ph = "Q7vsxTEL99xfAPXeTxgLsg16L25epli7eVqYvz7mv6g"
		const uintY1H34ZV = BigInt("194")
		const ANRXTokenPFOUT3F = await ANRXToken.new(uintNcY0aRS, stringqqLvjZP, stringbP0i6ph, uintY1H34ZV, {from: accounts[5]});
		const addressCOgyGP1 = "0x0000000000000000000000000000000000000001"
		const addresso0qCkno = accounts[4]
		const addressxCxLmux = accounts[1]
		const uintuq7fJp9 = await ANRXTokenPFOUT3F.allowance.call(addresso0qCkno, addressCOgyGP1, {from: accounts[1]});
		const addresst5HxsbD = await ANRXTokenPFOUT3F.deprecate.call(addressxCxLmux, {from: accounts[0]});

		assert.equal(uintuq7fJp9, BigInt("0"))
		await expect(ANRXTokenPFOUT3F.deprecate.call(addressxCxLmux, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintrOuqhuL = BigInt("588")
		const stringtFUKczu = "muQMkKabgR5g9dxdW6S7tNpLKkSbT9DpdbQ9ap5AT5Riu2huSO4dqwAc22L3RsXMpFs15tiCWmQ3mgDvEFd2J3DE"
		const stringIZ6qa2T = "a67wwRFkLNl8UyniV9VYYv54vxRcrcUc2ckoCDuSRNdjyypkIzRYG9QSOV0jYRjCduJTkbuYKFIXcimrGT6rS05qkqdENYFxs"
		const uinttIj6ZJB = BigInt("1196")
		const ANRXTokenDkwA2Le = await ANRXToken.new(uintrOuqhuL, stringtFUKczu, stringIZ6qa2T, uinttIj6ZJB, {from: accounts[4]});
		const uintgCWx0mc = BigInt("762")
		const addresshEHD2dS = "0x0000000000000000000000000000000000000001"
		const addresswFKORPy = accounts[4]
		const uintFEgYVcz = BigInt("1012")
		const address724DqN = accounts[1]
		const addressQMRCfR = "0x0000000000000000000000000000000000000001"
		const uintRHhYFwz = BigInt("819")
		const addressE76Mmj = "0x0000000000000000000000000000000000000001"
		const addressvO3UCpb = accounts[1]
		const boolFhnSeOm = await ANRXTokenDkwA2Le.transferFrom.call(addresswFKORPy, addresshEHD2dS, uintgCWx0mc, {from: accounts[4]});
		const uinti2BS4sf = await ANRXTokenDkwA2Le.redeem.call(uintFEgYVcz, {from: accounts[5]});
		const uintkQrgCkS = await ANRXTokenDkwA2Le.allowance.call(addressQMRCfR, address724DqN, {from: accounts[1]});
		const boolV7r9PD = await ANRXTokenDkwA2Le.transferFrom.call(addressvO3UCpb, addressE76Mmj, uintRHhYFwz, {from: accounts[3]});
		const uintMG57A8h = await ANRXTokenDkwA2Le.totalSupply.call({from: accounts[0]});

		await expect(ANRXTokenDkwA2Le.transferFrom.call(addresswFKORPy, addresshEHD2dS, uintgCWx0mc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintg129Nwz = BigInt("1694")
		const stringaBlHozd = "ZTefKY2KO6jwn5Ce0z6ZCsLojij2zaJq7vBRe5E1J1oUSO3Chm3OVs6eo6T9yOJ9PLGM7rVOws1jUnRhUWea5hxnb9Q0KQ"
		const stringujQdQsS = "R7SR9Ubb4YH3TWgB6zktf"
		const uintfGvUbh6 = BigInt("1637")
		const ANRXTokenoJdtzyo = await ANRXToken.new(uintg129Nwz, stringaBlHozd, stringujQdQsS, uintfGvUbh6, {from: accounts[1]});
		const uinttoBeiw = BigInt("371")
		const addressrHUJCoE = "0x0000000000000000000000000000000000000001"
		const uintlpPu4iy = BigInt("435")
		const addresswat0Nq = accounts[4]
		const addressyal4N71 = accounts[2]
		const uintAq1Eqz6 = BigInt("1219")
		const addressRLpBcWw = accounts[0]
		const address86zQl9 = accounts[0]
		const addressDlhqGgM = "0x0000000000000000000000000000000000000001"
		const addressnq5qQy7 = accounts[5]
		const uintSJkxPOf = BigInt("471")
		const booljPuJ385 = await ANRXTokenoJdtzyo.approve.call(addressrHUJCoE, uinttoBeiw, {from: accounts[3]});
		const bool5mrnpe = await ANRXTokenoJdtzyo.transferFrom.call(addressyal4N71, addresswat0Nq, uintlpPu4iy, {from: accounts[0]});
		const boolhULeQgw = await ANRXTokenoJdtzyo.transferFrom.call(address86zQl9, addressRLpBcWw, uintAq1Eqz6, {from: accounts[1]});
		const uinttkuF9R = await ANRXTokenoJdtzyo.allowance.call(addressnq5qQy7, addressDlhqGgM, {from: accounts[5]});
		const uintLuqL4Hz = await ANRXTokenoJdtzyo.issue.call(uintSJkxPOf, {from: accounts[0]});

		assert.equal(booljPuJ385, true)
		await expect(ANRXTokenoJdtzyo.transferFrom.call(addressyal4N71, addresswat0Nq, uintlpPu4iy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintvdIHzJb = BigInt("759")
		const stringJLzJLvM = "xCrKnOpVajuHXerEDgxy755PNj5Q3oF9rj1U1TyewCD"
		const stringh9eCfy9 = "gdr6rvdrOuT1Aze1Xyf"
		const uintIZT5Mdk = BigInt("2019")
		const ANRXTokenfco0Ep = await ANRXToken.new(uintvdIHzJb, stringJLzJLvM, stringh9eCfy9, uintIZT5Mdk, {from: accounts[3]});
		const addresseiqqlip = accounts[3]
		const addressUPFdk5 = accounts[0]
		const addressOLzm1Ec = accounts[4]
		const uintZHwyIII = await ANRXTokenfco0Ep.totalSupply.call({from: accounts[3]});
		const uintUXZWWR3 = await ANRXTokenfco0Ep.allowance.call(addressUPFdk5, addresseiqqlip, {from: accounts[2]});
		const uintLfEIza1 = await ANRXTokenfco0Ep.totalSupply.call({from: accounts[4]});
		const uintIUI5Pb6 = await ANRXTokenfco0Ep.balanceOf.call(addressOLzm1Ec, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintIUI5Pb6, BigInt("0"))
		assert.equal(uintLfEIza1, BigInt("759"))
		assert.equal(uintUXZWWR3, BigInt("0"))
		assert.equal(uintZHwyIII, BigInt("759"))
	});

	it('test for ANRXToken', async () => {
		const uintJ8ks6C = BigInt("1018")
		const stringQab6CTD = "pwyyiWygJ10SKNcsI6IIsQ19kz6Dx54hA3wA6dtCCWH8vQX9goDCkL0cQvXpWyxcy5deeHtnRiAJmS0QsrY"
		const stringEayDfky = "Rv5yjLBsIEyISeSBs8n4SgJmt5C8mojkFbA1FVkUB70IC1MImw2Y3fQaGT2oz3DRhQPsUtpEqFEpDjkGc1bnxn"
		const uintUf8zTKy = BigInt("1070")
		const ANRXTokentPy2MA2 = await ANRXToken.new(uintJ8ks6C, stringQab6CTD, stringEayDfky, uintUf8zTKy, {from: accounts[5]});
		const uintRFYXVnj = BigInt("1103")
		const addressUvc2yD = accounts[3]
		const addressV8hxpQQ = accounts[3]
		const addressMsxobWp = accounts[1]
		const addressBkszoMp = accounts[1]
		const addressyfhwaHz = accounts[3]
		const addresss3chZFR = accounts[3]
		const addressoKbuxd4 = accounts[2]
		const addressoyTXYRB = accounts[0]
		const uintOYYOD6 = BigInt("409")
		const addresshLEEYBV = accounts[3]
		const uinthjWBSsm = await ANRXTokentPy2MA2.issue.call(uintRFYXVnj, {from: accounts[5]});
		const uintvYcLbYt = await ANRXTokentPy2MA2.balanceOf.call(addressUvc2yD, {from: accounts[2]});
		const uintgSj2AGr = await ANRXTokentPy2MA2.allowance.call(addressMsxobWp, addressV8hxpQQ, {from: accounts[0]});
		const uintZPeVOZ = await ANRXTokentPy2MA2.allowance.call(addressyfhwaHz, addressBkszoMp, {from: accounts[5]});
		const uintl09Knw = await ANRXTokentPy2MA2.allowance.call(addressoKbuxd4, addresss3chZFR, {from: accounts[3]});
		const addressDdOiPkR = await ANRXTokentPy2MA2.deprecate.call(addressoyTXYRB, {from: accounts[5]});
		const boolsyHDMPb = await ANRXTokentPy2MA2.transfer.call(addresshLEEYBV, uintOYYOD6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintZPeVOZ, BigInt("0"))
		assert.equal(uintgSj2AGr, BigInt("0"))
		assert.equal(uintl09Knw, BigInt("0"))
		assert.equal(uintvYcLbYt, BigInt("0"))
		await expect(ANRXTokentPy2MA2.transfer.call(addresshLEEYBV, uintOYYOD6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintrtpYoV = BigInt("1733")
		const stringbfeCnFH = "y2uyvMznV0iiilFp1oczaU749Q8YtFOj6XAg54d4IBV"
		const stringHkgFHTF = "TmIsEGm6lVhfpBGA3uQ1bEDH9WwDE0n7trkhrpVGxDMzy54CtNrVZswMFVcPMO6uQjiLLo076AQiwYC"
		const uintvrSLoud = BigInt("1630")
		const ANRXTokenibZAiGi = await ANRXToken.new(uintrtpYoV, stringbfeCnFH, stringHkgFHTF, uintvrSLoud, {from: accounts[4]});
		const uintfH2ctBa = BigInt("158")
		const uintPtIgS7A = BigInt("1258")
		const uintQWAJGCR = await ANRXTokenibZAiGi.totalSupply.call({from: accounts[0]});
		const uintVj8e2BK = await ANRXTokenibZAiGi.redeem.call(uintfH2ctBa, {from: accounts[4]});
		const uintMdzKlGQ = await ANRXTokenibZAiGi.totalSupply.call({from: accounts[2]});
		const uinteJITQBE = await ANRXTokenibZAiGi.issue.call(uintPtIgS7A, {from: accounts[5]});

		assert.equal(uintMdzKlGQ, BigInt("1733"))
		assert.equal(uintQWAJGCR, BigInt("1733"))
		await expect(ANRXTokenibZAiGi.issue.call(uintPtIgS7A, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintELbOMQS = BigInt("759")
		const stringJLzJLvM = "xCrKnOpVajuHXerEDgxy755PNj5Q3oF9rj1U1TyewCD"
		const stringh9eCfy9 = "gdr6rvdrOuT1Aze1Xyf"
		const uintFcZVNCQ = BigInt("2019")
		const ANRXTokenfco0Ep = await ANRXToken.new(uintELbOMQS, stringJLzJLvM, stringh9eCfy9, uintFcZVNCQ, {from: accounts[3]});
		const addressSUPY9Ub = accounts[0]
		const address1UFPzT = accounts[2]
		const uintVYh09N = BigInt("169")
		const addressqBw4dGj = "0x0000000000000000000000000000000000000001"
		const uintx9HTTdf = BigInt("1448")
		const uintLbtWVsO = BigInt("1131")
		const addresswFWBlAL = accounts[3]
		const addressINGO2Rn = accounts[0]
		const uinttfuwjh6 = await ANRXTokenfco0Ep.allowance.call(address1UFPzT, addressSUPY9Ub, {from: accounts[3]});
		const boolIasDAuM = await ANRXTokenfco0Ep.approve.call(addressqBw4dGj, uintVYh09N, {from: accounts[4]});
		const uintkC9C0vc = await ANRXTokenfco0Ep.setParams.call(uintLbtWVsO, uintx9HTTdf, {from: accounts[3]});
		const uintUXZWWR3 = await ANRXTokenfco0Ep.allowance.call(addressINGO2Rn, addresswFWBlAL, {from: accounts[2]});

		assert.equal(boolIasDAuM, true)
		assert.equal(uinttfuwjh6, BigInt("0"))
		await expect(ANRXTokenfco0Ep.setParams.call(uintLbtWVsO, uintx9HTTdf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})