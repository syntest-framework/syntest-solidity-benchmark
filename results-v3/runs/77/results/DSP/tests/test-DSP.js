const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPhdz3ZNb = await DSP.new({from: accounts[1]});
		const uintzzmT2zg = BigInt("799")
		const addressBQsA4zU = accounts[3]
		const addresshZEMCHw = accounts[3]
		const uintytUNoxQ = BigInt("1985")
		const addressHuhPkUA = accounts[1]
		const addresshCy81M2 = accounts[3]
		const boolsV8l41q = await DSPhdz3ZNb.transfer.call(addressBQsA4zU, uintzzmT2zg, {from: accounts[4]});
		const boolK6VKfR4 = await DSPhdz3ZNb.isOwner.call(addresshZEMCHw, {from: accounts[3]});
		const boolnhoy0Pn = await DSPhdz3ZNb.transferFrom.call(addresshCy81M2, addressHuhPkUA, uintytUNoxQ, {from: accounts[2]});
		await DSPhdz3ZNb.onlyOwner.call({from: accounts[3]});

		await expect(DSPhdz3ZNb.transfer.call(addressBQsA4zU, uintzzmT2zg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPTkh2aSP = await DSP.new({from: accounts[5]});
		const addressyIS6xK2 = accounts[5]
		const uintg3lU0II = BigInt("1921")
		const addressnfXfL3m = accounts[1]
		const boolt5GXkH3 = await DSPTkh2aSP.isPauser.call(addressyIS6xK2, {from: accounts[3]});
		const boolBpWWyWu = await DSPTkh2aSP.burnFrombyOwner.call(addressnfXfL3m, uintg3lU0II, {from: accounts[0]});

		assert.equal(boolt5GXkH3, true)
		await expect(DSPTkh2aSP.burnFrombyOwner.call(addressnfXfL3m, uintg3lU0II, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringe4lN4MM = "3p2hx6JjR2jzSrnP9X3ba5vCt"
		const stringjww0iPW = "YN3gvKKAOqkW57tO1xzCwtAo8CylneedThPMKtxRSWbinx0djSVczK8qRxzI2gDBLhZsr2fm85LpCvJ6LGsnW4A4UplBGsVDMnS"
		const uintNUyKvQW = BigInt("176")
		const DSPNtIQSDC = await DSP.new(stringe4lN4MM, stringjww0iPW, uintNUyKvQW, {from: accounts[4]});
		const uintVxpa6Bv = BigInt("562")
		const addressXuVwu1E = accounts[3]
		const addresskI8rdHO = accounts[0]
		const uintFuKlqju = BigInt("636")
		const uintH5eznSr = BigInt("673")
		const addressUEt3CRG = accounts[2]
		const uintM1GbB1o = BigInt("689")
		const addressfQgJH0y = accounts[5]
		await DSPNtIQSDC.f.call({from: "0x0000000000000000000000000000000000000001"});
		await DSPNtIQSDC.unpause.call({from: accounts[4]});
		const boolhaqpAWK = await DSPNtIQSDC.transferFrom.call(addresskI8rdHO, addressXuVwu1E, uintVxpa6Bv, {from: accounts[0]});
		const boolcQ3jpWS = await DSPNtIQSDC.lock.call(addressUEt3CRG, uintH5eznSr, uintFuKlqju, {from: accounts[1]});
		const boolVOt5OYB = await DSPNtIQSDC.transfer.call(addressfQgJH0y, uintM1GbB1o, {from: accounts[5]});
	});

	it('test for DSP', async () => {
		const DSPXwwTwJX = await DSP.new({from: accounts[2]});
		const addressb7ghfNc = accounts[2]
		const uintmegfMFg = BigInt("461")
		const addressNsHXKi = "0x0000000000000000000000000000000000000001"
		const uintMPNC0qi = BigInt("1602")
		const uintAoBlwBB = BigInt("547")
		const addressBcvMso9 = accounts[2]
		const boolMo1fcny = await DSPXwwTwJX.freezeAccount.call(addressb7ghfNc, {from: "0x0000000000000000000000000000000000000001"});
		const boolsJuQ81z = await DSPXwwTwJX.burnFrombyOwner.call(addressNsHXKi, uintmegfMFg, {from: accounts[0]});
		const boolhvD3L8T = await DSPXwwTwJX.transferWithLock.call(addressBcvMso9, uintAoBlwBB, uintMPNC0qi, {from: accounts[3]});

		await expect(DSPXwwTwJX.freezeAccount.call(addressb7ghfNc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPkEkhlF = await DSP.new({from: accounts[3]});
		const uintu4XQdrc = BigInt("1742")
		const addresspe2Nbje = accounts[2]
		const addressWSNtaSa = accounts[1]
		const uintqVm7nF4 = BigInt("369")
		const addressS9tnty = accounts[3]
		await DSPkEkhlF.renouncePauser.call({from: accounts[0]});
		const boolmA7qDFL = await DSPkEkhlF.transferFrom.call(addressWSNtaSa, addresspe2Nbje, uintu4XQdrc, {from: "0x0000000000000000000000000000000000000001"});
		await DSPkEkhlF.f.call({from: accounts[5]});
		const boollyVfnvX = await DSPkEkhlF.approve.call(addressS9tnty, uintqVm7nF4, {from: accounts[1]});

		await expect(DSPkEkhlF.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGSMrdIr = await DSP.new({from: accounts[4]});
		const addresscjRFuKI = accounts[2]
		const addresslvnuTgW = accounts[1]
		const boolv1fk8LP = await DSPGSMrdIr.isPauser.call(addresscjRFuKI, {from: accounts[2]});
		const boolsdZ7RA = await DSPGSMrdIr.paused.call({from: accounts[0]});
		const uint256Aw8XMxm = await DSPGSMrdIr.balanceOf.call(addresslvnuTgW, {from: accounts[4]});

		assert.equal(boolsdZ7RA, false)
		assert.equal(boolv1fk8LP, false)
		assert.equal(uint256Aw8XMxm, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPdJLulza = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZNP5ewH = BigInt("1467")
		const addressLZ2Bop9 = accounts[4]
		const addressKDLea1v = accounts[1]
		const bool4MrwHy = await DSPdJLulza.approve.call(addressLZ2Bop9, uintZNP5ewH, {from: accounts[1]});
		const boolRlxAO0 = await DSPdJLulza.acceptOwnership.call({from: accounts[0]});
		const boolcPnIvta = await DSPdJLulza.unfreezeAccount.call(addressKDLea1v, {from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPhdz3ZNb = await DSP.new({from: accounts[1]});
		const uint3bmZq9 = BigInt("1457")
		const addressNVlceE = accounts[4]
		const addressr1yj7ns = accounts[0]
		const uintc6ZSGDr = BigInt("799")
		const addressM6JsX2w = accounts[3]
		const addressyCwOvtn = accounts[3]
		const boolDgoZMSn = await DSPhdz3ZNb.increaseAllowance.call(addressNVlceE, uint3bmZq9, {from: accounts[1]});
		const boolWOiGX3r = await DSPhdz3ZNb.isOwner.call(addressr1yj7ns, {from: accounts[0]});
		const boolsV8l41q = await DSPhdz3ZNb.transfer.call(addressM6JsX2w, uintc6ZSGDr, {from: accounts[4]});
		const boolK6VKfR4 = await DSPhdz3ZNb.isOwner.call(addressyCwOvtn, {from: accounts[3]});
		await DSPhdz3ZNb.onlyOwner.call({from: accounts[3]});

		assert.equal(boolDgoZMSn, true)
		assert.equal(boolWOiGX3r, false)
		await expect(DSPhdz3ZNb.transfer.call(addressM6JsX2w, uintc6ZSGDr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGSMrdIr = await DSP.new({from: accounts[4]});
		const addresscc3kusE = accounts[2]
		const addressJQdpqU3 = accounts[2]
		const boolv1fk8LP = await DSPGSMrdIr.isPauser.call(addresscc3kusE, {from: accounts[2]});
		const boolsdZ7RA = await DSPGSMrdIr.paused.call({from: accounts[0]});
		await DSPGSMrdIr.onlyNewOwner.call({from: accounts[5]});
		const uint256Aw8XMxm = await DSPGSMrdIr.balanceOf.call(addressJQdpqU3, {from: accounts[4]});

		assert.equal(boolsdZ7RA, false)
		assert.equal(boolv1fk8LP, false)
		await expect(DSPGSMrdIr.onlyNewOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhdz3ZNb = await DSP.new({from: accounts[1]});
		const addressy5WCNCr = accounts[4]
		const uintDL5ply = BigInt("1985")
		const addressztf8MXp = accounts[1]
		const addressv79G0ky = accounts[3]
		const boolK6VKfR4 = await DSPhdz3ZNb.isOwner.call(addressy5WCNCr, {from: accounts[3]});
		const boolnhoy0Pn = await DSPhdz3ZNb.transferFrom.call(addressv79G0ky, addressztf8MXp, uintDL5ply, {from: accounts[2]});
		await DSPhdz3ZNb.onlyOwner.call({from: accounts[3]});

		assert.equal(boolK6VKfR4, false)
		await expect(DSPhdz3ZNb.transferFrom.call(addressv79G0ky, addressztf8MXp, uintDL5ply, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGSMrdIr = await DSP.new({from: accounts[4]});
		const addressBZSkM7G = accounts[2]
		const addressvo0NdHW = accounts[4]
		const addressi75q3yN = accounts[1]
		const addressmxntKEZ = accounts[1]
		const boolv1fk8LP = await DSPGSMrdIr.isPauser.call(addressBZSkM7G, {from: accounts[2]});
		await DSPGSMrdIr.renouncePauser.call({from: accounts[4]});
		await DSPGSMrdIr.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
		const boollbeSaD7 = await DSPGSMrdIr.freezeAccount.call(addressvo0NdHW, {from: accounts[1]});
		const boolsdZ7RA = await DSPGSMrdIr.paused.call({from: accounts[0]});
		const boolZ6SZkef = await DSPGSMrdIr.isOwner.call(addressi75q3yN, {from: accounts[5]});
		const uint256Aw8XMxm = await DSPGSMrdIr.balanceOf.call(addressmxntKEZ, {from: accounts[4]});

		assert.equal(boolv1fk8LP, false)
		await expect(DSPGSMrdIr.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhdz3ZNb = await DSP.new({from: accounts[1]});
		const addressQmXw98I = accounts[4]
		const addressRq1A2DL = accounts[2]
		const uintMD8NBel = BigInt("559")
		const address5Zcwxx = accounts[2]
		const addressTFAuoY5 = accounts[0]
		const uintDDhdlJ = BigInt("1985")
		const addressGgTNhcn = accounts[1]
		const addressFh7acLS = accounts[4]
		const boolK6VKfR4 = await DSPhdz3ZNb.isOwner.call(addressQmXw98I, {from: accounts[3]});
		const boolge27Am2 = await DSPhdz3ZNb.isPauser.call(addressRq1A2DL, {from: accounts[1]});
		const boolm4eWnCp = await DSPhdz3ZNb.approve.call(address5Zcwxx, uintMD8NBel, {from: accounts[1]});
		const uint256XkafH2I = await DSPhdz3ZNb.balanceOf.call(addressTFAuoY5, {from: accounts[3]});
		const boolnhoy0Pn = await DSPhdz3ZNb.transferFrom.call(addressFh7acLS, addressGgTNhcn, uintDDhdlJ, {from: accounts[2]});
		await DSPhdz3ZNb.onlyOwner.call({from: accounts[3]});

		assert.equal(boolK6VKfR4, false)
		assert.equal(boolge27Am2, false)
		assert.equal(boolm4eWnCp, true)
		assert.equal(uint256XkafH2I, BigInt("0"))
		await expect(DSPhdz3ZNb.transferFrom.call(addressFh7acLS, addressGgTNhcn, uintDDhdlJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhdz3ZNb = await DSP.new({from: accounts[1]});
		const addressJFFUxov = accounts[4]
		const uintkdeQkH2 = BigInt("1473")
		const uintzcMCT0 = BigInt("1950")
		const addressRydq9hc = accounts[1]
		const uintUVAro1 = BigInt("1985")
		const addressXn1R0jA = accounts[1]
		const addressgEKSULk = accounts[3]
		const boolK6VKfR4 = await DSPhdz3ZNb.isOwner.call(addressJFFUxov, {from: accounts[3]});
		const stringTx2QH4y = await DSPhdz3ZNb.name.call({from: accounts[3]});
		const boolKfuj6v = await DSPhdz3ZNb.transferWithLock.call(addressRydq9hc, uintzcMCT0, uintkdeQkH2, {from: accounts[0]});
		const boolnhoy0Pn = await DSPhdz3ZNb.transferFrom.call(addressgEKSULk, addressXn1R0jA, uintUVAro1, {from: accounts[2]});
		await DSPhdz3ZNb.onlyOwner.call({from: accounts[3]});

		assert.equal(boolK6VKfR4, false)
		assert.equal(stringTx2QH4y, "DSP")
		await expect(DSPhdz3ZNb.transferWithLock.call(addressRydq9hc, uintzcMCT0, uintkdeQkH2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhdz3ZNb = await DSP.new({from: accounts[1]});
		const uintR3zqEvj = BigInt("430")
		const addressozqHG6a = accounts[1]
		const uintCX8caa5 = BigInt("799")
		const addressJ0ucK5B = accounts[3]
		const boolHMsRTd = await DSPhdz3ZNb.transfer.call(addressozqHG6a, uintR3zqEvj, {from: accounts[1]});
		const boolsV8l41q = await DSPhdz3ZNb.transfer.call(addressJ0ucK5B, uintCX8caa5, {from: accounts[4]});

		assert.equal(boolHMsRTd, true)
		await expect(DSPhdz3ZNb.transfer.call(addressJ0ucK5B, uintCX8caa5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhdz3ZNb = await DSP.new({from: accounts[1]});
		const addressEezUGEG = accounts[1]
		const uintzjEG72t = BigInt("799")
		const addressBEFOILv = accounts[4]
		const boolXrHZhUf = await DSPhdz3ZNb.isOwner.call(addressEezUGEG, {from: "0x0000000000000000000000000000000000000001"});
		const boolsV8l41q = await DSPhdz3ZNb.transfer.call(addressBEFOILv, uintzjEG72t, {from: accounts[4]});

		assert.equal(boolXrHZhUf, true)
		await expect(DSPhdz3ZNb.transfer.call(addressBEFOILv, uintzjEG72t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxWqhXpS = await DSP.new({from: accounts[1]});
		const uintJn2I3a = BigInt("1066")
		const addressLtImMBL = "0x0000000000000000000000000000000000000001"
		const uintCP8GEHW = BigInt("1729")
		const addressNWCWvx8 = accounts[2]
		const addressOV3wHaX = accounts[2]
		const boolU4X8Ldo = await DSPxWqhXpS.increaseAllowance.call(addressLtImMBL, uintJn2I3a, {from: accounts[1]});
		const uint256fpMvGLX = await DSPxWqhXpS.totalSupply.call({from: accounts[1]});
		await DSPxWqhXpS.whenNotPaused.call({from: accounts[0]});
		const boolvKWQ540 = await DSPxWqhXpS.transferFrom.call(addressOV3wHaX, addressNWCWvx8, uintCP8GEHW, {from: accounts[1]});
		await DSPxWqhXpS.whenPaused.call({from: accounts[5]});
		await DSPxWqhXpS.f.call({from: accounts[5]});

		assert.equal(boolU4X8Ldo, true)
		assert.equal(uint256fpMvGLX, BigInt("100000000000000000000000000000"))
		await expect(DSPxWqhXpS.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGSMrdIr = await DSP.new({from: accounts[4]});
		const addressb2rC8bL = accounts[3]
		await DSPGSMrdIr.f.call({from: accounts[3]});
		const uint256Aw8XMxm = await DSPGSMrdIr.balanceOf.call(addressb2rC8bL, {from: accounts[4]});
		const uint8qjPKd98 = await DSPGSMrdIr.decimals.call({from: accounts[0]});

		await expect(DSPGSMrdIr.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPHK37tI4 = await DSP.new({from: accounts[5]});
		const addressFHxSivv = accounts[1]
		const addressnRLxL40 = accounts[5]
		const uintHzpuiBz = BigInt("1760")
		const addressm8drVqu = accounts[5]
		const boolqbz0vys = await DSPHK37tI4.isPauser.call(addressFHxSivv, {from: accounts[5]});
		const addressgiENJB = await DSPHK37tI4.upgradeTo.call(addressnRLxL40, {from: accounts[5]});
		const boolEiixTJm = await DSPHK37tI4.approve.call(addressm8drVqu, uintHzpuiBz, {from: accounts[0]});

		assert.equal(boolEiixTJm, true)
		assert.equal(boolqbz0vys, false)
	});

	it('test for DSP', async () => {
		const DSPGSMrdIr = await DSP.new({from: accounts[4]});
		const uintDVU286 = BigInt("1482")
		const uintkgjw6gR = BigInt("1813")
		const addressIGWdiLA = accounts[1]
		const addressstMJdLa = accounts[3]
		const addressP8YJkez = accounts[1]
		const booldMRC4iC = await DSPGSMrdIr.transferWithLock.call(addressIGWdiLA, uintkgjw6gR, uintDVU286, {from: accounts[4]});
		const uint256Aw8XMxm = await DSPGSMrdIr.balanceOf.call(addressstMJdLa, {from: accounts[4]});
		const addressLzOxpu8 = await DSPGSMrdIr.notFrozen.call(addressP8YJkez, {from: accounts[1]});

		assert.equal(booldMRC4iC, true)
		assert.equal(uint256Aw8XMxm, BigInt("0"))
		await expect(DSPGSMrdIr.notFrozen.call(addressP8YJkez, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhdz3ZNb = await DSP.new({from: accounts[1]});
		const addressXdNdNR4 = accounts[5]
		const addressc4idqgs = accounts[2]
		const addresscS02MEi = accounts[5]
		const uintHZGTiOR = BigInt("1985")
		const addressFTrs55a = accounts[1]
		const addressRcyKhL = accounts[3]
		const uintZee6nE = BigInt("630")
		const addressNGVZ9Z = accounts[0]
		const boolK6VKfR4 = await DSPhdz3ZNb.isOwner.call(addressXdNdNR4, {from: accounts[3]});
		const uint256F9reGpb = await DSPhdz3ZNb.allowance.call(addresscS02MEi, addressc4idqgs, {from: accounts[3]});
		const boolnhoy0Pn = await DSPhdz3ZNb.transferFrom.call(addressRcyKhL, addressFTrs55a, uintHZGTiOR, {from: accounts[2]});
		await DSPhdz3ZNb.onlyOwner.call({from: accounts[3]});
		await DSPhdz3ZNb.onlyNewOwner.call({from: accounts[3]});
		const boolaDf8ERx = await DSPhdz3ZNb.increaseAllowance.call(addressNGVZ9Z, uintZee6nE, {from: accounts[1]});

		assert.equal(boolK6VKfR4, false)
		assert.equal(uint256F9reGpb, BigInt("0"))
		await expect(DSPhdz3ZNb.transferFrom.call(addressRcyKhL, addressFTrs55a, uintHZGTiOR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhdz3ZNb = await DSP.new({from: accounts[1]});
		const addressrSzZJRO = accounts[0]
		const uintqQ1ylum = BigInt("799")
		const addressiPm7zv = accounts[3]
		const boolPvZMcWS = await DSPhdz3ZNb.freezeAccount.call(addressrSzZJRO, {from: accounts[1]});
		const boolsV8l41q = await DSPhdz3ZNb.transfer.call(addressiPm7zv, uintqQ1ylum, {from: accounts[4]});

		assert.equal(boolPvZMcWS, true)
		await expect(DSPhdz3ZNb.transfer.call(addressiPm7zv, uintqQ1ylum, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGSMrdIr = await DSP.new({from: accounts[4]});
		const addressJvISSvX = accounts[2]
		const addressB3QYq7 = accounts[4]
		const uint256Aw8XMxm = await DSPGSMrdIr.balanceOf.call(addressJvISSvX, {from: accounts[4]});
		const addressoJsRH0T = await DSPGSMrdIr.addPauser.call(addressB3QYq7, {from: accounts[4]});
		await DSPGSMrdIr.f.call({from: accounts[3]});
		await DSPGSMrdIr.whenPaused.call({from: accounts[0]});

		assert.equal(uint256Aw8XMxm, BigInt("0"))
		await expect(DSPGSMrdIr.addPauser.call(addressB3QYq7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGSMrdIr = await DSP.new({from: accounts[4]});
		const addressrRyTP71 = accounts[3]
		const stringSF50fWN = await DSPGSMrdIr.symbol.call({from: accounts[3]});
		await DSPGSMrdIr.renouncePauser.call({from: accounts[2]});
		const uint256Aw8XMxm = await DSPGSMrdIr.balanceOf.call(addressrRyTP71, {from: accounts[4]});

		assert.equal(stringSF50fWN, "DSP")
		await expect(DSPGSMrdIr.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPceuiyac = await DSP.new({from: accounts[3]});
		const uintuut7RiC = BigInt("1175")
		const addressMZM2A7h = accounts[4]
		const boolZUL5mdf = await DSPceuiyac.decreaseAllowance.call(addressMZM2A7h, uintuut7RiC, {from: accounts[1]});
		await DSPceuiyac.onlyNewOwner.call({from: accounts[0]});
		const stringvh2ldS6 = await DSPceuiyac.symbol.call({from: accounts[0]});
		await DSPceuiyac.unpause.call({from: accounts[1]});
		await DSPceuiyac.unpause.call({from: accounts[0]});
		const uint256sgpYkpS = await DSPceuiyac.totalSupply.call({from: accounts[4]});

		await expect(DSPceuiyac.decreaseAllowance.call(addressMZM2A7h, uintuut7RiC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGSMrdIr = await DSP.new({from: accounts[4]});
		const addressJ2Hdx5F = accounts[3]
		const addresshcW3Luc = accounts[5]
		const uintwQQhazZ = BigInt("1496")
		const addressfaSgCCY = accounts[0]
		const uint256Aw8XMxm = await DSPGSMrdIr.balanceOf.call(addressJ2Hdx5F, {from: accounts[4]});
		const addressW76o0hd = await DSPGSMrdIr.addPauser.call(addresshcW3Luc, {from: accounts[4]});
		const boolmi22Um = await DSPGSMrdIr.unlock.call(addressfaSgCCY, uintwQQhazZ, {from: accounts[4]});

		assert.equal(uint256Aw8XMxm, BigInt("0"))
		await expect(DSPGSMrdIr.unlock.call(addressfaSgCCY, uintwQQhazZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGSMrdIr = await DSP.new({from: accounts[4]});
		const addressCdQJjE = accounts[3]
		const uint8F6aMTy = await DSPGSMrdIr.decimals.call({from: accounts[3]});
		const uint256Aw8XMxm = await DSPGSMrdIr.balanceOf.call(addressCdQJjE, {from: accounts[4]});

		assert.equal(uint256Aw8XMxm, BigInt("0"))
		assert.equal(uint8F6aMTy, BigInt("18"))
	});

	it('test for DSP', async () => {
		const DSPGSMrdIr = await DSP.new({from: accounts[4]});
		const addressXcUjw3J = accounts[4]
		const addressDazS3gr = accounts[2]
		const addresscqLF9MB = await DSPGSMrdIr.transferOwnership.call(addressXcUjw3J, {from: accounts[4]});
		await DSPGSMrdIr.f.call({from: accounts[2]});
		const uint256Aw8XMxm = await DSPGSMrdIr.balanceOf.call(addressDazS3gr, {from: accounts[4]});

		await expect(DSPGSMrdIr.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGSMrdIr = await DSP.new({from: accounts[4]});
		const uintxYwPkET = BigInt("1709")
		const addressxRvzAev = accounts[1]
		const uintxgshukl = BigInt("1531")
		const addressK3Arf3t = accounts[4]
		const uintoyv3nXN = BigInt("1150")
		const addressYyB93Iq = accounts[2]
		const addressOzPbSe = accounts[4]
		const uint86cc3uq = await DSPGSMrdIr.decimals.call({from: accounts[2]});
		const boolPKX7Jxc = await DSPGSMrdIr.burnFrombyOwner.call(addressxRvzAev, uintxYwPkET, {from: accounts[4]});
		const boolByPc7H = await DSPGSMrdIr.decreaseAllowance.call(addressK3Arf3t, uintxgshukl, {from: accounts[4]});
		const boolcA0FNVm = await DSPGSMrdIr.transferFrom.call(addressOzPbSe, addressYyB93Iq, uintoyv3nXN, {from: accounts[3]});

		assert.equal(uint86cc3uq, BigInt("18"))
		await expect(DSPGSMrdIr.burnFrombyOwner.call(addressxRvzAev, uintxYwPkET, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGSMrdIr = await DSP.new({from: accounts[4]});
		const addressma6PdME = accounts[0]
		const uintco7k7a9 = BigInt("1150")
		const addressoSU4IxO = accounts[1]
		const addressjcljcMY = accounts[5]
		const boolEzlqLFK = await DSPGSMrdIr.unfreezeAccount.call(addressma6PdME, {from: accounts[4]});
		const boolcA0FNVm = await DSPGSMrdIr.transferFrom.call(addressjcljcMY, addressoSU4IxO, uintco7k7a9, {from: accounts[3]});

		await expect(DSPGSMrdIr.unfreezeAccount.call(addressma6PdME, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})