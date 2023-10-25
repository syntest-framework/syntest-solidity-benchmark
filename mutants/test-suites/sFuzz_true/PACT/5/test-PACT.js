const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACThoZwSe = await PACT.new({from: accounts[4]});
		const addressNzSTan = accounts[4]
		const addressJBznMCV = accounts[0]
		const uintbfUPRmo = BigInt("1847")
		const addresswy5PBNi = accounts[1]
		const addressUsnXPBP = accounts[2]
//		const boolGSVabV6 = await PACThoZwSe.setupTeam.call(addressNzSTan, {from: accounts[4]});
//		const boolLK8BZXq = await PACThoZwSe.setupBasePool.call(addressJBznMCV, {from: accounts[3]});
//		const stringj6S5qhL = await PACThoZwSe.name.call({from: accounts[0]});
//		const stringKN7usvs = await PACThoZwSe.name.call({from: accounts[3]});
//		const stringiXkiy37 = await PACThoZwSe.name.call({from: accounts[1]});
//		const boolNZTnHhu = await PACThoZwSe.transferFrom.call(addressUsnXPBP, addresswy5PBNi, uintbfUPRmo, {from: accounts[1]});

		await expect(PACThoZwSe.setupTeam.call(addressNzSTan, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTuLJDui5 = await PACT.new({from: accounts[3]});
		const uintLulngm6 = BigInt("870")
		const addressS9ZBSYz = "0x0000000000000000000000000000000000000001"
		const uintFJbyeAm = BigInt("1495")
		const addressMrpCmpk = accounts[2]
		const uintXe8dXht = BigInt("163")
		const addresslj2Fo4y = accounts[4]
//		const boolDSu1ngb = await PACTuLJDui5.transfer.call(addressS9ZBSYz, uintLulngm6, {from: accounts[2]});
//		const booluVQGLix = await PACTuLJDui5.transfer.call(addressMrpCmpk, uintFJbyeAm, {from: accounts[5]});
//		const boolsOLBbcG = await PACTuLJDui5.transfer.call(addresslj2Fo4y, uintXe8dXht, {from: accounts[0]});

		await expect(PACTuLJDui5.transfer.call(addressS9ZBSYz, uintLulngm6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTeEe2RD = await PACT.new({from: accounts[2]});
		const uintUNQ1fI1 = BigInt("1112")
		const addresszsWUpv = accounts[2]
		const addressKWZjQxd = accounts[3]
		const addressJQ52CLj = accounts[1]
		const addressyLzIdWu = accounts[1]
		const addressGNzW1pl = accounts[1]
		const boolY5ouMRJ = await PACTeEe2RD.approve.call(addresszsWUpv, uintUNQ1fI1, {from: accounts[1]});
//		const boolN0TXKiK = await PACTeEe2RD.setupBasePool.call(addressKWZjQxd, {from: accounts[1]});
//		const uintrqNfMtb = await PACTeEe2RD.allowance.call(addressyLzIdWu, addressJQ52CLj, {from: accounts[0]});
//		const boolOBceKY = await PACTeEe2RD.setupRewards.call(addressGNzW1pl, {from: accounts[1]});

		assert.equal(boolY5ouMRJ, true)
		await expect(PACTeEe2RD.setupBasePool.call(addressKWZjQxd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTO9STCd = await PACT.new({from: accounts[1]});
		const uintN8EZ1vf = BigInt("1901")
		const addressuv9fYA0 = accounts[1]
		const addressz2LVqvH = accounts[3]
		const addressJKDcee2 = accounts[4]
		const uinteK6CicS = await PACTO9STCd.totalSupply.call({from: accounts[3]});
//		const boolX3aON6x = await PACTO9STCd.transfer.call(addressuv9fYA0, uintN8EZ1vf, {from: accounts[0]});
//		const uintcuQoyi0 = await PACTO9STCd.allowance.call(addressJKDcee2, addressz2LVqvH, {from: accounts[1]});

		assert.equal(uinteK6CicS, BigInt("1000000000000000000000000000"))
		await expect(PACTO9STCd.transfer.call(addressuv9fYA0, uintN8EZ1vf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTw81azcP = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const stringCrnZ1E = await PACTw81azcP.symbol.call({from: accounts[1]});
		const stringS7mXwmc = await PACTw81azcP.name.call({from: accounts[2]});
	});

	it('test for PACT', async () => {
		const PACTfBgGIqF = await PACT.new({from: accounts[2]});
		const uintKA8SRYo = BigInt("238")
		const addresscactzZi = accounts[2]
		const uintAN4BW3X = BigInt("1948")
		const addressKcwFprl = accounts[2]
		const addressm2xjiJr = accounts[0]
		const addresszPN4LQf = "0x0000000000000000000000000000000000000001"
		const addressaQ1TFDg = accounts[3]
		const boolBGH4DNn = await PACTfBgGIqF.approve.call(addresscactzZi, uintKA8SRYo, {from: "0x0000000000000000000000000000000000000001"});
		const boolplPat9Y = await PACTfBgGIqF.approve.call(addressKcwFprl, uintAN4BW3X, {from: accounts[1]});
		const uint8zI5YpqZ = await PACTfBgGIqF.decimals.call({from: accounts[2]});
//		const boolDOymqjP = await PACTfBgGIqF.setupTeam.call(addressm2xjiJr, {from: accounts[1]});
//		const boolajBld5f = await PACTfBgGIqF.setupReserve.call(addresszPN4LQf, {from: accounts[4]});
//		const uintLIX6hqK = await PACTfBgGIqF.balanceOf.call(addressaQ1TFDg, {from: accounts[4]});

		assert.equal(boolBGH4DNn, true)
		assert.equal(boolplPat9Y, true)
		assert.equal(uint8zI5YpqZ, BigInt("18"))
		await expect(PACTfBgGIqF.setupTeam.call(addressm2xjiJr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT9fMPfb = await PACT.new({from: accounts[1]});
		const uintBeunvYv = BigInt("1366")
		const addressYAYR42 = accounts[1]
		const addressWOqBeUc = accounts[0]
		const addressRvlBaLm = accounts[1]
		const addresso6CbnFM = accounts[1]
		const uint05KxR4 = BigInt("1078")
		const address49hPum = accounts[4]
		const uinttgJD3hH = BigInt("699")
		const addressxueRH7u = accounts[0]
		const boolPVyb76b = await PACT9fMPfb.approve.call(addressYAYR42, uintBeunvYv, {from: accounts[3]});
//		const boolHV3HacS = await PACT9fMPfb.setupRewards.call(addressWOqBeUc, {from: accounts[1]});
//		const uintNfsCrLk = await PACT9fMPfb.allowance.call(addresso6CbnFM, addressRvlBaLm, {from: accounts[0]});
//		const booli1MXE4 = await PACT9fMPfb.approve.call(address49hPum, uint05KxR4, {from: accounts[3]});
//		const boolpLauCHJ = await PACT9fMPfb.transfer.call(addressxueRH7u, uinttgJD3hH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPVyb76b, true)
		await expect(PACT9fMPfb.setupRewards.call(addressWOqBeUc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTwqIgrMD = await PACT.new({from: accounts[5]});
		const addressZsRSNUF = accounts[2]
		const uintYimDA6c = BigInt("1083")
		const address3GGIfm = accounts[0]
		const addressRputvqc = accounts[0]
		const addressxPJe3L = accounts[0]
		const uintjiE7Spm = await PACTwqIgrMD.balanceOf.call(addressZsRSNUF, {from: accounts[4]});
		const boolSxdNCCh = await PACTwqIgrMD.approve.call(address3GGIfm, uintYimDA6c, {from: accounts[2]});
		const uintRw35aUi = await PACTwqIgrMD.allowance.call(addressxPJe3L, addressRputvqc, {from: accounts[0]});

		assert.equal(boolSxdNCCh, true)
		assert.equal(uintRw35aUi, BigInt("0"))
		assert.equal(uintjiE7Spm, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTXhejLsV = await PACT.new({from: accounts[1]});
		const addressmhhPgdP = accounts[5]
		const addressjoBlcki = accounts[5]
		const addressJP6ug2T = accounts[1]
		const addressgSEBnEf = accounts[2]
//		const boolsZqME0C = await PACTXhejLsV.setupReserve.call(addressmhhPgdP, {from: accounts[2]});
//		const boolyeMwquc = await PACTXhejLsV.setupRewards.call(addressjoBlcki, {from: accounts[5]});
//		const booljiqtGuG = await PACTXhejLsV.setupBasePool.call(addressJP6ug2T, {from: accounts[3]});
//		const booltQG2UWE = await PACTXhejLsV.setupRewards.call(addressgSEBnEf, {from: accounts[4]});
//		const stringMUxzKjj = await PACTXhejLsV.name.call({from: accounts[1]});

		await expect(PACTXhejLsV.setupReserve.call(addressmhhPgdP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTOTeEQA = await PACT.new({from: accounts[4]});
		const addressWoSnBn = accounts[4]
		const stringvNyBA7 = await PACTOTeEQA.name.call({from: accounts[1]});
//		const boolWOfLPHg = await PACTOTeEQA.setupBasePool.call(addressWoSnBn, {from: "0x0000000000000000000000000000000000000001"});
//		const stringPkz8wrq = await PACTOTeEQA.symbol.call({from: accounts[2]});

		assert.equal(stringvNyBA7, "P2PB2B community token")
		await expect(PACTOTeEQA.setupBasePool.call(addressWoSnBn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTOTeEQA = await PACT.new({from: accounts[4]});
		const stringvNyBA7 = await PACTOTeEQA.name.call({from: accounts[1]});
		const stringPkz8wrq = await PACTOTeEQA.symbol.call({from: accounts[2]});

		assert.equal(stringPkz8wrq, "PACT")
		assert.equal(stringvNyBA7, "P2PB2B community token")
	});

	it('test for PACT', async () => {
		const PACTOTeEQA = await PACT.new({from: accounts[4]});
		const addressd3yKSt0 = accounts[4]
		const addressfunIih = accounts[5]
		const uintBjYG7H = BigInt("1513")
		const addresscoWv5Aq = accounts[0]
		const addresskJEOAqs = accounts[3]
		const addressiQS1Tkp = accounts[4]
		const uintLMiC48P = await PACTOTeEQA.allowance.call(addressfunIih, addressd3yKSt0, {from: accounts[2]});
//		const boolydreNCm = await PACTOTeEQA.transferFrom.call(addresskJEOAqs, addresscoWv5Aq, uintBjYG7H, {from: accounts[1]});
//		const stringvNyBA7 = await PACTOTeEQA.name.call({from: accounts[1]});
//		const boolWOfLPHg = await PACTOTeEQA.setupBasePool.call(addressiQS1Tkp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintLMiC48P, BigInt("0"))
		await expect(PACTOTeEQA.transferFrom.call(addresskJEOAqs, addresscoWv5Aq, uintBjYG7H, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT9fMPfb = await PACT.new({from: accounts[1]});
		const uintaBKIuRS = BigInt("750")
		const addressh6c4SI7 = accounts[2]
		const addressfK8v5q = accounts[1]
		const uintTg4T7l = await PACT9fMPfb.totalSupply.call({from: accounts[2]});
		const uintOSQoJDh = await PACT9fMPfb.totalSupply.call({from: accounts[2]});
//		const boolVIOVsyV = await PACT9fMPfb.burn.call(addressh6c4SI7, uintaBKIuRS, {from: accounts[2]});
//		const boolHV3HacS = await PACT9fMPfb.setupRewards.call(addressfK8v5q, {from: accounts[1]});

		assert.equal(uintOSQoJDh, BigInt("1000000000000000000000000000"))
		assert.equal(uintTg4T7l, BigInt("1000000000000000000000000000"))
		await expect(PACT9fMPfb.burn.call(addressh6c4SI7, uintaBKIuRS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTuLJDui5 = await PACT.new({from: accounts[3]});
		const addressxoPOxTa = accounts[2]
		const uintPcmj3fp = BigInt("870")
		const addressP6rb9tX = "0x0000000000000000000000000000000000000000"
		const stringYKGyfwi = await PACTuLJDui5.name.call({from: accounts[0]});
//		const boolfRIZSuP = await PACTuLJDui5.setupFarming.call(addressxoPOxTa, {from: accounts[0]});
//		const boolDSu1ngb = await PACTuLJDui5.transfer.call(addressP6rb9tX, uintPcmj3fp, {from: accounts[2]});

		assert.equal(stringYKGyfwi, "P2PB2B community token")
		await expect(PACTuLJDui5.setupFarming.call(addressxoPOxTa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})