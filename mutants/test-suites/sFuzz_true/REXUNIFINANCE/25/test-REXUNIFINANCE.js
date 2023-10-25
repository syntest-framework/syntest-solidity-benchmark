const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEvBKrZQz = await REXUNIFINANCE.new({from: accounts[1]});
		const addressPQ5JbHx = accounts[0]
		const addressavkqCHG = accounts[1]
		const uintfbbZUWM = BigInt("828")
		const addressFLTczd1 = accounts[4]
		const addresszjsAnYu = accounts[4]
		const uint256fccLpeI = await REXUNIFINANCEvBKrZQz.balanceOf.call(addressPQ5JbHx, {from: accounts[2]});
//		const addresstx8Ewvv = await REXUNIFINANCEvBKrZQz.transferOwnership.call(addressavkqCHG, {from: accounts[1]});
//		const boolpGQzrF = await REXUNIFINANCEvBKrZQz.approve.call(addressFLTczd1, uintfbbZUWM, {from: accounts[2]});
//		const addressdvQ2ZEq = await REXUNIFINANCEvBKrZQz.transferOwnership.call(addresszjsAnYu, {from: accounts[1]});

		assert.equal(uint256fccLpeI, BigInt("0"))
		await expect(REXUNIFINANCEvBKrZQz.transferOwnership.call(addressavkqCHG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEe2rttm5 = await REXUNIFINANCE.new({from: accounts[1]});
		const addressYEnNGda = accounts[2]
		const address7OPfF8 = accounts[0]
		const uintrDYlLXb = BigInt("716")
		const addresstQpl9ML = accounts[2]
		const uint256I5xzJWA = await REXUNIFINANCEe2rttm5.allowance.call(address7OPfF8, addressYEnNGda, {from: accounts[1]});
//		const booltncKew0 = await REXUNIFINANCEe2rttm5.transfer.call(addresstQpl9ML, uintrDYlLXb, {from: accounts[1]});

		assert.equal(uint256I5xzJWA, BigInt("0"))
		await expect(REXUNIFINANCEe2rttm5.transfer.call(addresstQpl9ML, uintrDYlLXb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEw09FAmp = await REXUNIFINANCE.new({from: accounts[5]});
		const addressagbcqr = accounts[3]
		const uintzOV1fiU = BigInt("906")
		const addressJahyoG2 = "0x0000000000000000000000000000000000000001"
		const uint256QcqSiTo = await REXUNIFINANCEw09FAmp.balanceOf.call(addressagbcqr, {from: accounts[1]});
		const boolJm21fna = await REXUNIFINANCEw09FAmp.decreaseApproval.call(addressJahyoG2, uintzOV1fiU, {from: accounts[0]});

		assert.equal(boolJm21fna, true)
		assert.equal(uint256QcqSiTo, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEyP9z6P = await REXUNIFINANCE.new({from: accounts[3]});
		const addressV8Bopnm = accounts[1]
		const uintUkaO1BY = BigInt("1411")
		const addressg6fjAe = accounts[1]
		const uintjmfRa6 = BigInt("1022")
		const addressJ4lcGYa = "0x0000000000000000000000000000000000000001"
		const uintoCa0uM3 = BigInt("966")
		const addressHMSfAT = accounts[1]
		const uintZNtLWMm = BigInt("1954")
		const addressPiDERx6 = accounts[3]
		const uint256rG2ngWo = await REXUNIFINANCEyP9z6P.balanceOf.call(addressV8Bopnm, {from: accounts[3]});
//		const boolPs6qJyr = await REXUNIFINANCEyP9z6P.approve.call(addressg6fjAe, uintUkaO1BY, {from: accounts[1]});
//		const booliMIZXvL = await REXUNIFINANCEyP9z6P.approve.call(addressJ4lcGYa, uintjmfRa6, {from: accounts[1]});
//		const boolx7NSLtv = await REXUNIFINANCEyP9z6P.transfer.call(addressHMSfAT, uintoCa0uM3, {from: accounts[3]});
//		const boolfxjmlhs = await REXUNIFINANCEyP9z6P.decreaseApproval.call(addressPiDERx6, uintZNtLWMm, {from: accounts[1]});

		assert.equal(uint256rG2ngWo, BigInt("0"))
		await expect(REXUNIFINANCEyP9z6P.approve.call(addressg6fjAe, uintUkaO1BY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEDcTX5u3 = await REXUNIFINANCE.new({from: accounts[3]});
		const uintnQnNFR0 = BigInt("1774")
		const addressFzFtCc9 = "0x0000000000000000000000000000000000000001"
		const addresswT6k5eN = accounts[1]
		const addressHPPqHo4 = accounts[1]
		const addressjtLqDL7 = accounts[2]
		const addressCxsGTa6 = accounts[3]
		const boolQF7Be5S = await REXUNIFINANCEDcTX5u3.increaseApproval.call(addressFzFtCc9, uintnQnNFR0, {from: accounts[1]});
		const uint256Vcno0DG = await REXUNIFINANCEDcTX5u3.allowance.call(addressHPPqHo4, addresswT6k5eN, {from: accounts[3]});
		const uint256yl6PreI = await REXUNIFINANCEDcTX5u3.transferableTokens.call(addressjtLqDL7, {from: accounts[0]});
//		const addresscnuwGJ = await REXUNIFINANCEDcTX5u3.transferOwnership.call(addressCxsGTa6, {from: accounts[4]});

		assert.equal(boolQF7Be5S, true)
		assert.equal(uint256Vcno0DG, BigInt("0"))
		assert.equal(uint256yl6PreI, BigInt("0"))
		await expect(REXUNIFINANCEDcTX5u3.transferOwnership.call(addressCxsGTa6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEAEwChnn = await REXUNIFINANCE.new({from: accounts[5]});
		const uintVYBp3E = BigInt("891")
		const addressNns9BOc = accounts[1]
		const addressisksV8F = accounts[5]
		const addressuKPGYtn = accounts[4]
		const addressHuR5Ad9 = accounts[1]
		const uintEo7JYmf = BigInt("1354")
		const addressYYzVP1P = accounts[3]
		const addressSXgPvqH = accounts[4]
		const addressSNYcui = accounts[0]
//		const boolqIpxDKo = await REXUNIFINANCEAEwChnn.transferFrom.call(addressisksV8F, addressNns9BOc, uintVYBp3E, {from: accounts[2]});
//		const uint256OgXanlL = await REXUNIFINANCEAEwChnn.balanceOf.call(addressuKPGYtn, {from: accounts[3]});
//		const addressuHYUvN = await REXUNIFINANCEAEwChnn.transferOwnership.call(addressHuR5Ad9, {from: accounts[4]});
//		const boolGgbEJT = await REXUNIFINANCEAEwChnn.transferFrom.call(addressSXgPvqH, addressYYzVP1P, uintEo7JYmf, {from: accounts[4]});
//		const uint256sTNczIZ = await REXUNIFINANCEAEwChnn.transferableTokens.call(addressSNYcui, {from: accounts[1]});

		await expect(REXUNIFINANCEAEwChnn.transferFrom.call(addressisksV8F, addressNns9BOc, uintVYBp3E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEyNZYL6t = await REXUNIFINANCE.new({from: accounts[0]});
		const uintPnWZmpd = BigInt("134")
		const addressM9gTh2T = accounts[3]
		const uintCA0yT0F = BigInt("940")
		const addressMPYCP3W = accounts[0]
		const addresseWlG8vR = accounts[5]
		const uintLerUvqy = BigInt("1072")
		const addressFDPiC2v = accounts[3]
		const boolnStuCoy = await REXUNIFINANCEyNZYL6t.decreaseApproval.call(addressM9gTh2T, uintPnWZmpd, {from: accounts[1]});
		const boolgWw32hf = await REXUNIFINANCEyNZYL6t.approve.call(addressMPYCP3W, uintCA0yT0F, {from: accounts[4]});
//		const addressFO17krm = await REXUNIFINANCEyNZYL6t.transferOwnership.call(addresseWlG8vR, {from: accounts[2]});
//		const booliGoeqA2 = await REXUNIFINANCEyNZYL6t.approve.call(addressFDPiC2v, uintLerUvqy, {from: accounts[3]});

		assert.equal(boolgWw32hf, true)
		assert.equal(boolnStuCoy, true)
		await expect(REXUNIFINANCEyNZYL6t.transferOwnership.call(addresseWlG8vR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEnqoT3P4 = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressmQGWJX = accounts[0]
		const uinto547GMX = BigInt("1234")
		const addressftd8rwy = accounts[2]
		const addressGCme12D = accounts[4]
		const uintxTFXm1 = BigInt("668")
		const addressh8neeBu = accounts[4]
		const addressqklN1E = accounts[4]
		const uint256Kp4SaSa = await REXUNIFINANCEnqoT3P4.balanceOf.call(addressmQGWJX, {from: "0x0000000000000000000000000000000000000001"});
		const boolOjt650P = await REXUNIFINANCEnqoT3P4.transferFrom.call(addressGCme12D, addressftd8rwy, uinto547GMX, {from: accounts[4]});
		const boolFrAdrtO = await REXUNIFINANCEnqoT3P4.transferFrom.call(addressqklN1E, addressh8neeBu, uintxTFXm1, {from: accounts[3]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEjtlP4Gt = await REXUNIFINANCE.new({from: accounts[2]});
		const addresspXgtUtQ = accounts[0]
		const addressYXk7ElM = accounts[4]
		const addressiLvFUKh = accounts[1]
		const uint4ZlZ6W = BigInt("827")
		const addressuxZukwK = accounts[4]
		const uintz6l4A51 = BigInt("1602")
		const addressSTZJU1a = "0x0000000000000000000000000000000000000001"
		const addressFZ5khkz = accounts[3]
		const addressi1pMEbD = accounts[0]
		const uintIIqEqUX = BigInt("570")
		const addressloys2b9 = accounts[3]
		const uintjvY2fDI = BigInt("369")
		const addressYPYWfEo = accounts[0]
		const uint256vuKPhO6 = await REXUNIFINANCEjtlP4Gt.allowance.call(addressYXk7ElM, addresspXgtUtQ, {from: accounts[1]});
		const addressVI8iMsH = await REXUNIFINANCEjtlP4Gt.transferOwnership.call(addressiLvFUKh, {from: accounts[2]});
//		const booliFP4Auz = await REXUNIFINANCEjtlP4Gt.transfer.call(addressuxZukwK, uint4ZlZ6W, {from: accounts[2]});
//		const boolOY7Z5QG = await REXUNIFINANCEjtlP4Gt.decreaseApproval.call(addressSTZJU1a, uintz6l4A51, {from: accounts[0]});
//		const uint256BoWt43J = await REXUNIFINANCEjtlP4Gt.allowance.call(addressi1pMEbD, addressFZ5khkz, {from: accounts[4]});
//		const boolC9aQCqA = await REXUNIFINANCEjtlP4Gt.transfer.call(addressloys2b9, uintIIqEqUX, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHoqScBw = await REXUNIFINANCEjtlP4Gt.transfer.call(addressYPYWfEo, uintjvY2fDI, {from: accounts[1]});

		assert.equal(uint256vuKPhO6, BigInt("0"))
		await expect(REXUNIFINANCEjtlP4Gt.transfer.call(addressuxZukwK, uint4ZlZ6W, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})