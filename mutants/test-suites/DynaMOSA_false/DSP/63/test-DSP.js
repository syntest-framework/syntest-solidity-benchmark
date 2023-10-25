const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringFKwgR9X = "STXVbhz4pKvxY8JoffkazmiPlE8thXTy4yysfaGR6IJ3KDgnRj9LH52W8IXQDfTfJSDGBQMCuqCG"
		const stringnQFPB5t = "0O66LHNECNAh73eSDwowGtUwQip12NBrKUbSHPHOdnSbwSp"
		const uintEYT7dA7 = BigInt("84")
		const DSPB2bAImW = await DSP.new(stringFKwgR9X, stringnQFPB5t, uintEYT7dA7, {from: accounts[3]});
		const addressIDYOgjL = "0x0000000000000000000000000000000000000001"
		const uintaHdwXzx = BigInt("675")
		const addressa0p37I4 = accounts[2]
		const uintyjgAtmp = BigInt("1052")
		const addressZ7lFWqt = accounts[3]
		await DSPB2bAImW.renouncePauser.call({from: accounts[2]});
		const uint256pUmQOL3 = await DSPB2bAImW.balanceOf.call(addressIDYOgjL, {from: accounts[4]});
		const boolCn0dBmG = await DSPB2bAImW.mint.call(addressa0p37I4, uintaHdwXzx, {from: accounts[3]});
		const boolv0nhjbt = await DSPB2bAImW.approve.call(addressZ7lFWqt, uintyjgAtmp, {from: "0x0000000000000000000000000000000000000001"});
		await DSPB2bAImW.renouncePauser.call({from: accounts[5]});
		await DSPB2bAImW.unpause.call({from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPtMNaGW = await DSP.new({from: accounts[3]});
		const uintIsRRbU1 = BigInt("552")
		const addresswVuvgUV = accounts[1]
//		await DSPtMNaGW.whenNotPaused.call({from: accounts[4]});
//		const boolgKHTVJ = await DSPtMNaGW.transfer.call(addresswVuvgUV, uintIsRRbU1, {from: accounts[0]});

		await expect(DSPtMNaGW.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPk09tj46 = await DSP.new({from: accounts[1]});
		const uintKnaK2Md = BigInt("1872")
		const addressra3Rs2E = accounts[2]
		const addressRiZaifi = accounts[2]
		const uintGDHrjNr = BigInt("725")
		const addressD4R0uXW = accounts[3]
		const uintmcrN7ez = BigInt("1737")
		const addressSCwvNDf = accounts[0]
		const boolUqMpQva = await DSPk09tj46.transfer.call(addressra3Rs2E, uintKnaK2Md, {from: accounts[1]});
//		const addressngZNiDU = await DSPk09tj46.upgradeTo.call(addressRiZaifi, {from: accounts[4]});
//		const boolO14mPo = await DSPk09tj46.unlock.call(addressD4R0uXW, uintGDHrjNr, {from: accounts[5]});
//		const boolI3VNjl = await DSPk09tj46.decreaseAllowance.call(addressSCwvNDf, uintmcrN7ez, {from: accounts[3]});

		assert.equal(boolUqMpQva, true)
		await expect(DSPk09tj46.upgradeTo.call(addressRiZaifi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGebR6es = await DSP.new({from: accounts[1]});
		const addressga6oijb = accounts[2]
		const addressA7TiRY = accounts[0]
//		await DSPGebR6es.f.call({from: accounts[4]});
//		const uint25687dP24 = await DSPGebR6es.balanceOf.call(addressga6oijb, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Fka2Jk = await DSPGebR6es.balanceOf.call(addressA7TiRY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPGebR6es.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPz6VhBu9 = await DSP.new({from: accounts[2]});
		const uintJAK2uwm = BigInt("443")
		const addressZtb9Q2f = accounts[2]
		const uintD1kkagK = BigInt("226")
		const uintm9feJI6 = BigInt("1866")
		const addressWBvOsy8 = accounts[1]
		const boolfmTzlpc = await DSPz6VhBu9.paused.call({from: accounts[4]});
//		const bool0lBDX9 = await DSPz6VhBu9.burnFrombyOwner.call(addressZtb9Q2f, uintJAK2uwm, {from: accounts[4]});
//		const boolzzjGL4E = await DSPz6VhBu9.acceptOwnership.call({from: accounts[4]});
//		const boolBzV7nTS = await DSPz6VhBu9.lock.call(addressWBvOsy8, uintm9feJI6, uintD1kkagK, {from: accounts[4]});

		assert.equal(boolfmTzlpc, false)
		await expect(DSPz6VhBu9.burnFrombyOwner.call(addressZtb9Q2f, uintJAK2uwm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPV07ViD = await DSP.new({from: accounts[2]});
		const uintBKEsZIX = BigInt("579")
		const addressWSu11d = accounts[5]
		const addressCruuk7c = accounts[0]
//		await DSPV07ViD.renouncePauser.call({from: accounts[3]});
//		const uint8c8yw3qI = await DSPV07ViD.decimals.call({from: accounts[4]});
//		await DSPV07ViD.onlyNewOwner.call({from: accounts[3]});
//		const boollyTMC4G = await DSPV07ViD.transfer.call(addressWSu11d, uintBKEsZIX, {from: accounts[4]});
//		const uint256fgA1WvN = await DSPV07ViD.balanceOf.call(addressCruuk7c, {from: accounts[1]});

		await expect(DSPV07ViD.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPcJFPhpw = await DSP.new({from: accounts[0]});
		const uintBACJF3o = BigInt("1867")
		const addressIYV607a = accounts[6]
		const addresswciqE3J = accounts[3]
		const addressJvdUFf = accounts[0]
		const stringGMJlA7C = await DSPcJFPhpw.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolO5MA7CS = await DSPcJFPhpw.transfer.call(addressIYV607a, uintBACJF3o, {from: accounts[2]});
//		const addressNVwEdRK = await DSPcJFPhpw.removePauser.call(addresswciqE3J, {from: accounts[4]});
//		const addresshLXHeqG = await DSPcJFPhpw.notFrozen.call(addressJvdUFf, {from: accounts[2]});

		assert.equal(stringGMJlA7C, "DSP")
		await expect(DSPcJFPhpw.transfer.call(addressIYV607a, uintBACJF3o, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGebR6es = await DSP.new({from: accounts[1]});
		const addresstUwGxYy = accounts[2]
		const addressSycBwAO = accounts[0]
		const uint25687dP24 = await DSPGebR6es.balanceOf.call(addresstUwGxYy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Fka2Jk = await DSPGebR6es.balanceOf.call(addressSycBwAO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint25687dP24, BigInt("0"))
		assert.equal(uint256Fka2Jk, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPWy327OD = await DSP.new({from: accounts[1]});
		const addressjrhe9m = accounts[0]
//		await DSPWy327OD.pause.call({from: accounts[1]});
//		const boolAbZA7Qa = await DSPWy327OD.unfreezeAccount.call(addressjrhe9m, {from: accounts[3]});
//		const stringI8kVxQM = await DSPWy327OD.name.call({from: accounts[1]});

		await expect(DSPWy327OD.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtMNaGW = await DSP.new({from: accounts[3]});
		const uintNS83DgF = BigInt("793")
		const addressU3YvUbj = accounts[1]
		const uintmGb84Ph = BigInt("566")
		const addressD2fRurj = accounts[1]
		const boolpvTZWc = await DSPtMNaGW.increaseAllowance.call(addressU3YvUbj, uintNS83DgF, {from: accounts[2]});
//		const boolgKHTVJ = await DSPtMNaGW.transfer.call(addressD2fRurj, uintmGb84Ph, {from: accounts[0]});
//		await DSPtMNaGW.renouncePauser.call({from: accounts[1]});

		assert.equal(boolpvTZWc, true)
		await expect(DSPtMNaGW.transfer.call(addressD2fRurj, uintmGb84Ph, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPWy327OD = await DSP.new({from: accounts[1]});
		const uintQCm9xas = BigInt("94")
		const addressTXmfzNC = accounts[3]
		const addressq10H6e = accounts[1]
		const addressZemqZ81 = accounts[0]
//		const booltNKYN5w = await DSPWy327OD.transferFrom.call(addressq10H6e, addressTXmfzNC, uintQCm9xas, {from: accounts[4]});
//		const boolAbZA7Qa = await DSPWy327OD.unfreezeAccount.call(addressZemqZ81, {from: accounts[3]});
//		const stringI8kVxQM = await DSPWy327OD.name.call({from: accounts[1]});

		await expect(DSPWy327OD.transferFrom.call(addressq10H6e, addressTXmfzNC, uintQCm9xas, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGebR6es = await DSP.new({from: accounts[1]});
		const addressWaLKjo7 = accounts[3]
		const addressimkJ1hj = accounts[3]
		const addressY4ggLJk = accounts[0]
		const addresskKiZQ8K = accounts[4]
		const addressvt7SOU = accounts[0]
		const uint25687dP24 = await DSPGebR6es.balanceOf.call(addressWaLKjo7, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBBgJa4l = await DSPGebR6es.unfreezeAccount.call(addressimkJ1hj, {from: accounts[1]});
//		const addressM1xqY2Q = await DSPGebR6es.transferOwnership.call(addressY4ggLJk, {from: accounts[1]});
//		const addressTj1JFoA = await DSPGebR6es.upgradeTo.call(addresskKiZQ8K, {from: accounts[2]});
//		const uint256Fka2Jk = await DSPGebR6es.balanceOf.call(addressvt7SOU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint25687dP24, BigInt("0"))
		await expect(DSPGebR6es.unfreezeAccount.call(addressimkJ1hj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGebR6es = await DSP.new({from: accounts[1]});
		const addressdopQNMV = accounts[2]
		const uint25687dP24 = await DSPGebR6es.balanceOf.call(addressdopQNMV, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DoKEC9G = await DSPGebR6es.totalSupply.call({from: accounts[5]});

		assert.equal(uint25687dP24, BigInt("0"))
		assert.equal(uint256DoKEC9G, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPtMNaGW = await DSP.new({from: accounts[3]});
		const uintjDYQy4Y = BigInt("11")
		const addresskSvBvbK = accounts[2]
		const uintm5Sgo20 = BigInt("566")
		const addressFAqxLGp = accounts[2]
		const boolUZq8vux = await DSPtMNaGW.approve.call(addresskSvBvbK, uintjDYQy4Y, {from: accounts[4]});
//		await DSPtMNaGW.f.call({from: accounts[4]});
//		const boolgKHTVJ = await DSPtMNaGW.transfer.call(addressFAqxLGp, uintm5Sgo20, {from: accounts[0]});

		assert.equal(boolUZq8vux, true)
		await expect(DSPtMNaGW.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGebR6es = await DSP.new({from: accounts[1]});
		const uintDTLfZDw = BigInt("73")
		const addressHPuIIr5 = accounts[2]
		const addressOyaASo8 = accounts[2]
		const uintkzonlD = BigInt("1773")
		const addressuH4wBJ6 = accounts[1]
		const addressCVBB3MD = accounts[0]
//		const boolIuoCtlE = await DSPGebR6es.unlock.call(addressHPuIIr5, uintDTLfZDw, {from: accounts[1]});
//		const uint25687dP24 = await DSPGebR6es.balanceOf.call(addressOyaASo8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJ3nCFks = await DSPGebR6es.transfer.call(addressuH4wBJ6, uintkzonlD, {from: accounts[2]});
//		const uint256Fka2Jk = await DSPGebR6es.balanceOf.call(addressCVBB3MD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPGebR6es.unlock.call(addressHPuIIr5, uintDTLfZDw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPlCE37fG = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnOSOY7f = accounts[4]
		await DSPlCE37fG.whenNotPaused.call({from: accounts[0]});
		const addressfFoTSRH = await DSPlCE37fG.notFrozen.call(addressnOSOY7f, {from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPtMNaGW = await DSP.new({from: accounts[3]});
		const uintK3P6NH3 = BigInt("397")
		const addressxLKPUzs = accounts[4]
		const addressgRgzal6 = accounts[0]
		const uinthZGcPdT = BigInt("566")
		const addressLBTPusF = accounts[1]
		const boolqfm6ZfT = await DSPtMNaGW.increaseAllowance.call(addressxLKPUzs, uintK3P6NH3, {from: accounts[4]});
		const boolif51aP = await DSPtMNaGW.freezeAccount.call(addressgRgzal6, {from: accounts[3]});
//		const boolgKHTVJ = await DSPtMNaGW.transfer.call(addressLBTPusF, uinthZGcPdT, {from: accounts[0]});

		assert.equal(boolif51aP, true)
		assert.equal(boolqfm6ZfT, true)
		await expect(DSPtMNaGW.transfer.call(addressLBTPusF, uinthZGcPdT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtMNaGW = await DSP.new({from: accounts[3]});
		const address5SeFJL = accounts[1]
		const uintuXWyhdZ = BigInt("565")
		const addressi51Iga3 = accounts[1]
		const uint8lsNINtY = await DSPtMNaGW.decimals.call({from: accounts[1]});
//		const addressrA1hrya = await DSPtMNaGW.removePauser.call(address5SeFJL, {from: accounts[1]});
//		await DSPtMNaGW.renouncePauser.call({from: accounts[2]});
//		const boolgKHTVJ = await DSPtMNaGW.transfer.call(addressi51Iga3, uintuXWyhdZ, {from: accounts[0]});

		assert.equal(uint8lsNINtY, BigInt("18"))
		await expect(DSPtMNaGW.removePauser.call(address5SeFJL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGebR6es = await DSP.new({from: accounts[1]});
		const addressAOL0068 = accounts[4]
		const addressSxEJwM3 = accounts[2]
		const addressJkeVlJZ = accounts[3]
		const uintYyFIu35 = BigInt("1099")
		const addressWjUBiyk = accounts[5]
		const addressBqE27St = accounts[0]
		const addressgAU4IVV = await DSPGebR6es.addPauser.call(addressAOL0068, {from: accounts[1]});
		const boolunDMwL0 = await DSPGebR6es.isOwner.call(addressSxEJwM3, {from: accounts[0]});
		const uint25687dP24 = await DSPGebR6es.balanceOf.call(addressJkeVlJZ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolPoT1kLd = await DSPGebR6es.transferFrom.call(addressBqE27St, addressWjUBiyk, uintYyFIu35, {from: accounts[3]});

		assert.equal(boolunDMwL0, false)
		assert.equal(uint25687dP24, BigInt("0"))
		await expect(DSPGebR6es.transferFrom.call(addressBqE27St, addressWjUBiyk, uintYyFIu35, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtMNaGW = await DSP.new({from: accounts[3]});
		const addresslF2URib = "0x0000000000000000000000000000000000000001"
		const addressOCgK9jK = accounts[4]
		const addressc0WpTej = accounts[0]
		const addressAC140sJ = accounts[5]
		const addressyW8V9Jo = accounts[1]
		const uinteEP7Bck = BigInt("561")
		const addresswcI3D0 = accounts[1]
		const addressIKfWzMW = accounts[0]
		const uint256pWrrFrc = await DSPtMNaGW.balanceOf.call(addresslF2URib, {from: accounts[1]});
		const boolbyE3y5i = await DSPtMNaGW.isOwner.call(addressOCgK9jK, {from: accounts[0]});
		const uint256szBt0F8 = await DSPtMNaGW.allowance.call(addressAC140sJ, addressc0WpTej, {from: accounts[2]});
//		const addressF836rUQ = await DSPtMNaGW.addPauser.call(addressyW8V9Jo, {from: accounts[4]});
//		const boolgKHTVJ = await DSPtMNaGW.transfer.call(addresswcI3D0, uinteEP7Bck, {from: accounts[0]});
//		await DSPtMNaGW.whenNotPaused.call({from: accounts[1]});
//		const boolRaLVkat = await DSPtMNaGW.acceptOwnership.call({from: accounts[1]});
//		const uint256SO8E2Qg = await DSPtMNaGW.balanceOf.call(addressIKfWzMW, {from: accounts[0]});

		assert.equal(boolbyE3y5i, false)
		assert.equal(uint256pWrrFrc, BigInt("0"))
		assert.equal(uint256szBt0F8, BigInt("0"))
		await expect(DSPtMNaGW.addPauser.call(addressyW8V9Jo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtMNaGW = await DSP.new({from: accounts[3]});
		const addressKFzw4wh = "0x0000000000000000000000000000000000000001"
		const addressZTJY37h = accounts[5]
		const uintMaOiSDu = BigInt("518")
		const addresshVr47dK = accounts[4]
		const uinthjo61J = BigInt("561")
		const addressI0D7dsd = accounts[1]
		const addressu4bH3IR = accounts[3]
		const addressdf5S7mi = accounts[4]
		const addressuGuRId = accounts[0]
		const addressdXqKBjV = accounts[1]
		const addressNgaGGF1 = accounts[0]
		const uint256pWrrFrc = await DSPtMNaGW.balanceOf.call(addressKFzw4wh, {from: accounts[1]});
		const boolbyE3y5i = await DSPtMNaGW.isOwner.call(addressZTJY37h, {from: accounts[0]});
		const booldwpjMTa = await DSPtMNaGW.mint.call(addresshVr47dK, uintMaOiSDu, {from: accounts[3]});
//		const boolgKHTVJ = await DSPtMNaGW.transfer.call(addressI0D7dsd, uinthjo61J, {from: accounts[0]});
//		const uint256RfMUbv4 = await DSPtMNaGW.allowance.call(addressdf5S7mi, addressu4bH3IR, {from: accounts[4]});
//		await DSPtMNaGW.whenNotPaused.call({from: accounts[1]});
//		const boolv01s3Tn = await DSPtMNaGW.isPauser.call(addressuGuRId, {from: accounts[0]});
//		const addressN5yIYQS = await DSPtMNaGW.removePauser.call(addressdXqKBjV, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRaLVkat = await DSPtMNaGW.acceptOwnership.call({from: accounts[1]});
//		const uint256SO8E2Qg = await DSPtMNaGW.balanceOf.call(addressNgaGGF1, {from: accounts[0]});

		assert.equal(boolbyE3y5i, false)
		assert.equal(booldwpjMTa, true)
		assert.equal(uint256pWrrFrc, BigInt("0"))
		await expect(DSPtMNaGW.transfer.call(addressI0D7dsd, uinthjo61J, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPWNduj6 = await DSP.new({from: accounts[5]});
		const uintJM2EPS6 = BigInt("1566")
		const addressHvd7QBy = accounts[3]
		const addressWCvl0v = accounts[3]
		const uint256cBIjAGG = await DSPWNduj6.totalSupply.call({from: accounts[5]});
		const stringWx9ubtT = await DSPWNduj6.symbol.call({from: accounts[1]});
//		const booloiHqhIr = await DSPWNduj6.decreaseAllowance.call(addressHvd7QBy, uintJM2EPS6, {from: accounts[5]});
//		await DSPWNduj6.pause.call({from: accounts[4]});
//		const boolbMxTHAy = await DSPWNduj6.freezeAccount.call(addressWCvl0v, {from: accounts[2]});
//		const uint256YKVZW5R = await DSPWNduj6.totalSupply.call({from: accounts[4]});

		assert.equal(stringWx9ubtT, "DSP")
		assert.equal(uint256cBIjAGG, BigInt("100000000000000000000000000000"))
		await expect(DSPWNduj6.decreaseAllowance.call(addressHvd7QBy, uintJM2EPS6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPWy327OD = await DSP.new({from: accounts[1]});
		const uintdhtht48 = BigInt("1988")
		const uintTYpB5wv = BigInt("1076")
		const addressCpdrRqe = accounts[3]
		const addresszYFjjw3 = accounts[1]
		const boolMCWfsr = await DSPWy327OD.transferWithLock.call(addressCpdrRqe, uintTYpB5wv, uintdhtht48, {from: accounts[1]});
//		const boolAbZA7Qa = await DSPWy327OD.unfreezeAccount.call(addresszYFjjw3, {from: accounts[3]});

		assert.equal(boolMCWfsr, true)
		await expect(DSPWy327OD.unfreezeAccount.call(addresszYFjjw3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPWy327OD = await DSP.new({from: accounts[1]});
		const uintE68BRKE = BigInt("1031")
		const uintH9Taoh7 = BigInt("1449")
		const addressjXkcUT1 = accounts[3]
		const uintJFWw2sQ = BigInt("518")
		const addressjNso94u = accounts[2]
		const addressKwFOI9 = accounts[2]
		const addressY9KKsXS = accounts[1]
//		const boolsiBJEcl = await DSPWy327OD.lock.call(addressjXkcUT1, uintH9Taoh7, uintE68BRKE, {from: accounts[1]});
//		const boolNJizWnr = await DSPWy327OD.transferFrom.call(addressKwFOI9, addressjNso94u, uintJFWw2sQ, {from: accounts[1]});
//		const boolAbZA7Qa = await DSPWy327OD.unfreezeAccount.call(addressY9KKsXS, {from: accounts[3]});

		await expect(DSPWy327OD.lock.call(addressjXkcUT1, uintH9Taoh7, uintE68BRKE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtMNaGW = await DSP.new({from: accounts[3]});
		const addressrl6eGGs = "0x0000000000000000000000000000000000000001"
		const uintP0nZCNe = BigInt("718")
		const uintUuTKBTH = BigInt("1634")
		const addressTpO7ktg = "0x0000000000000000000000000000000000000001"
		const uint1dAytJ = BigInt("566")
		const addressiHed6Pb = accounts[2]
		const addressBNvTxG2 = await DSPtMNaGW.transferOwnership.call(addressrl6eGGs, {from: accounts[3]});
//		const boolKmvcNgS = await DSPtMNaGW.transferWithLock.call(addressTpO7ktg, uintUuTKBTH, uintP0nZCNe, {from: accounts[4]});
//		const boolgKHTVJ = await DSPtMNaGW.transfer.call(addressiHed6Pb, uint1dAytJ, {from: accounts[0]});

		await expect(DSPtMNaGW.transferWithLock.call(addressTpO7ktg, uintUuTKBTH, uintP0nZCNe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})