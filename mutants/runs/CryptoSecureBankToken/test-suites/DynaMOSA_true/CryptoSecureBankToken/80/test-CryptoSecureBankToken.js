const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenALfKf4Z = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintWr9iRHJ = BigInt("1274")
		const addressHt3Aukm = accounts[2]
		const addressNlDwiw = accounts[2]
		const uintj0hyhw = BigInt("439")
		const addressHWg721 = accounts[3]
		await CryptoSecureBankTokenALfKf4Z.unpause.call({from: accounts[3]});
		const boolmmWq2Jd = await CryptoSecureBankTokenALfKf4Z.approve.call(addressHt3Aukm, uintWr9iRHJ, {from: accounts[1]});
		const boolf4hL6RW = await CryptoSecureBankTokenALfKf4Z.deprecate.call(addressNlDwiw, {from: accounts[1]});
		const boolraMISRH = await CryptoSecureBankTokenALfKf4Z.transfer.call(addressHWg721, uintj0hyhw, {from: accounts[0]});

		await expect(CryptoSecureBankTokenALfKf4Z.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAeSrknk = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintdYqRjAV = BigInt("835")
		const addressKy2AJC = accounts[2]
		const addressT2s0qsF = accounts[4]
		const addressqjLTA7b = accounts[4]
		const addressvc1UNHq = accounts[3]
		const addressRLY3zBd = "0x0000000000000000000000000000000000000001"
		const boolU5RkNfi = await CryptoSecureBankTokenAeSrknk.transferFrom.call(addressT2s0qsF, addressKy2AJC, uintdYqRjAV, {from: accounts[0]});
		await CryptoSecureBankTokenAeSrknk.onlyOwner.call({from: accounts[0]});
		const boolfqvM837 = await CryptoSecureBankTokenAeSrknk.deprecate.call(addressqjLTA7b, {from: accounts[3]});
		const addressOrfcyU1 = await CryptoSecureBankTokenAeSrknk.setOwner2.call(addressvc1UNHq, {from: accounts[4]});
		const boollDTs2G9 = await CryptoSecureBankTokenAeSrknk.deprecate.call(addressRLY3zBd, {from: accounts[2]});

		await expect(CryptoSecureBankTokenAeSrknk.transferFrom.call(addressT2s0qsF, addressKy2AJC, uintdYqRjAV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLaBcLGp = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressWezurPN = "0x0000000000000000000000000000000000000001"
		const addressUzghexc = accounts[3]
		const uintmWcK7ru = await CryptoSecureBankTokenLaBcLGp.balanceOf.call(addressWezurPN, {from: accounts[1]});
		const boolHgX6pp3 = await CryptoSecureBankTokenLaBcLGp.deprecate.call(addressUzghexc, {from: accounts[4]});
		const addressru7tMdC = await CryptoSecureBankTokenLaBcLGp.getOwner.call({from: accounts[2]});

		assert.equal(uintmWcK7ru, BigInt("0"))
		await expect(CryptoSecureBankTokenLaBcLGp.deprecate.call(addressUzghexc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO4dVEpd = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressaFIM8es = accounts[4]
		const uintbckIb4l = BigInt("2002")
		const addressf1hb6Fs = accounts[0]
		const addressScwBoOU = accounts[0]
		const uintBOsgDaQ = await CryptoSecureBankTokenO4dVEpd.balanceOf.call(addressaFIM8es, {from: accounts[1]});
		const booljqB0o1 = await CryptoSecureBankTokenO4dVEpd.approve.call(addressf1hb6Fs, uintbckIb4l, {from: accounts[2]});
		const boolY8Xglm1 = await CryptoSecureBankTokenO4dVEpd.getBlackListStatus.call(addressScwBoOU, {from: accounts[3]});

		assert.equal(boolY8Xglm1, false)
		assert.equal(booljqB0o1, true)
		assert.equal(uintBOsgDaQ, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennnpcvyT = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressevvngTk = accounts[4]
		const addressQjylCau = accounts[2]
		const uinttAa3HC4 = BigInt("1588")
		const addressTrdgifJ = accounts[0]
		const addressXe1Wf1I = accounts[0]
		const uintObMHjq5 = BigInt("2003")
		const addressEqCak1B = accounts[1]
		const addressFEt8uzz = accounts[5]
		const addressZxkQ0P6 = await CryptoSecureBankTokennnpcvyT.transferOwnership.call(addressevvngTk, {from: "0x0000000000000000000000000000000000000001"});
		const addressQHmqKYE = await CryptoSecureBankTokennnpcvyT.setOwner2.call(addressQjylCau, {from: accounts[4]});
		const boolmEQHnsi = await CryptoSecureBankTokennnpcvyT.transferFrom.call(addressXe1Wf1I, addressTrdgifJ, uinttAa3HC4, {from: accounts[3]});
		const boolwYho1Pn = await CryptoSecureBankTokennnpcvyT.transferFrom.call(addressFEt8uzz, addressEqCak1B, uintObMHjq5, {from: accounts[0]});

		await expect(CryptoSecureBankTokennnpcvyT.transferOwnership.call(addressevvngTk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenGNXrEOf = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressYJRiJWb = accounts[4]
		const uintzrxuWO1 = BigInt("1099")
		const addressRbJTahZ = accounts[4]
		const addressKnXnqGf = accounts[0]
		const addressQgJvsMF = accounts[1]
		const uintz7Svaj = await CryptoSecureBankTokenGNXrEOf.balanceOf.call(addressYJRiJWb, {from: accounts[3]});
		const booliIaM9R = await CryptoSecureBankTokenGNXrEOf.approve.call(addressRbJTahZ, uintzrxuWO1, {from: accounts[3]});
		const uinteLN1bOm = await CryptoSecureBankTokenGNXrEOf.allowance.call(addressQgJvsMF, addressKnXnqGf, {from: accounts[1]});
		await CryptoSecureBankTokenGNXrEOf.pause.call({from: accounts[3]});

		assert.equal(booliIaM9R, true)
		assert.equal(uinteLN1bOm, BigInt("0"))
		assert.equal(uintz7Svaj, BigInt("0"))
		await expect(CryptoSecureBankTokenGNXrEOf.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennnpcvyT = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresspAqbnR6 = accounts[5]
		const addressPP3Ox08 = accounts[2]
		const addresse9lVbWs = accounts[2]
		const addressJXSgtz = "0x0000000000000000000000000000000000000001"
		const uintGhkiVgd = BigInt("1588")
		const addressU3tKXVQ = accounts[0]
		const addressc8Njz71 = accounts[0]
		const uintoOTVYBf = BigInt("2003")
		const addressPGRa1F1 = accounts[1]
		const addressGSouJ1F = accounts[5]
		await CryptoSecureBankTokennnpcvyT.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const addressZxkQ0P6 = await CryptoSecureBankTokennnpcvyT.transferOwnership.call(addresspAqbnR6, {from: "0x0000000000000000000000000000000000000001"});
		const addressQHmqKYE = await CryptoSecureBankTokennnpcvyT.setOwner2.call(addressPP3Ox08, {from: accounts[4]});
		const uintc1XCJ16 = await CryptoSecureBankTokennnpcvyT.balanceOf.call(addresse9lVbWs, {from: accounts[3]});
		const addressH7XuvFb = await CryptoSecureBankTokennnpcvyT.transferOwnership.call(addressJXSgtz, {from: accounts[2]});
		const boolmEQHnsi = await CryptoSecureBankTokennnpcvyT.transferFrom.call(addressc8Njz71, addressU3tKXVQ, uintGhkiVgd, {from: accounts[3]});
		const boolwYho1Pn = await CryptoSecureBankTokennnpcvyT.transferFrom.call(addressGSouJ1F, addressPGRa1F1, uintoOTVYBf, {from: accounts[0]});

		await expect(CryptoSecureBankTokennnpcvyT.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennnpcvyT = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressnB2f9M = accounts[2]
		const addressg3n2qgh = accounts[4]
		const addressxaiTi7 = accounts[2]
		const addressfnhD5LI = accounts[4]
		const uintMtkadpD = BigInt("1588")
		const addressGDbvuH = accounts[1]
		const addressonsau9A = accounts[0]
		const uintqBaNXlb = BigInt("2003")
		const addressKhId5tJ = accounts[1]
		const addressBAQBh9Z = accounts[5]
		const uintGLaFRu = await CryptoSecureBankTokennnpcvyT.totalSupply.call({from: accounts[2]});
		const addressN7Uw8uQ = await CryptoSecureBankTokennnpcvyT.setOwner2.call(addressnB2f9M, {from: accounts[0]});
		const addressZxkQ0P6 = await CryptoSecureBankTokennnpcvyT.transferOwnership.call(addressg3n2qgh, {from: "0x0000000000000000000000000000000000000001"});
		const addressQHmqKYE = await CryptoSecureBankTokennnpcvyT.setOwner2.call(addressxaiTi7, {from: accounts[4]});
		const addresslK1bBtf = await CryptoSecureBankTokennnpcvyT.destroyBlackFunds.call(addressfnhD5LI, {from: accounts[1]});
		const boolmEQHnsi = await CryptoSecureBankTokennnpcvyT.transferFrom.call(addressonsau9A, addressGDbvuH, uintMtkadpD, {from: accounts[3]});
		const boolwYho1Pn = await CryptoSecureBankTokennnpcvyT.transferFrom.call(addressBAQBh9Z, addressKhId5tJ, uintqBaNXlb, {from: accounts[0]});

		assert.equal(uintGLaFRu, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokennnpcvyT.setOwner2.call(addressnB2f9M, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenxMsAdy = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintUoweQB = BigInt("1263")
		const addressMLFUn4j = accounts[0]
		const addressqVHAOCs = accounts[3]
		const addressFjowa9Q = accounts[5]
		await CryptoSecureBankTokenxMsAdy.pause.call({from: accounts[1]});
		const boolq7JIvUe = await CryptoSecureBankTokenxMsAdy.transferFrom.call(addressqVHAOCs, addressMLFUn4j, uintUoweQB, {from: accounts[3]});
		const addressf0mRcNc = await CryptoSecureBankTokenxMsAdy.destroyBlackFunds.call(addressFjowa9Q, {from: accounts[3]});
		await CryptoSecureBankTokenxMsAdy.whenNotPaused.call({from: accounts[0]});
		await CryptoSecureBankTokenxMsAdy.whenPaused.call({from: accounts[4]});

		await expect(CryptoSecureBankTokenxMsAdy.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO4dVEpd = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintRRG6aRr = BigInt("240")
		const addressqx1rZcF = "0x0000000000000000000000000000000000000001"
		const addressCSObeG = accounts[5]
		const addressM2HmC4I = accounts[2]
		const uintFUaTf8Q = BigInt("2002")
		const addressF7YgPNF = accounts[0]
		const uintu5yMZV = BigInt("139")
		const addresslykBQ9L = "0x0000000000000000000000000000000000000001"
		const addresstwjcW4G = accounts[2]
		const addressimf9eBk = accounts[0]
		const boolmBVeugG = await CryptoSecureBankTokenO4dVEpd.transfer.call(addressqx1rZcF, uintRRG6aRr, {from: accounts[0]});
		const uintBOsgDaQ = await CryptoSecureBankTokenO4dVEpd.balanceOf.call(addressCSObeG, {from: accounts[1]});
		const addressP0BK1Fa = await CryptoSecureBankTokenO4dVEpd.transferOwnership.call(addressM2HmC4I, {from: accounts[2]});
		const booljqB0o1 = await CryptoSecureBankTokenO4dVEpd.approve.call(addressF7YgPNF, uintFUaTf8Q, {from: accounts[2]});
		await CryptoSecureBankTokenO4dVEpd.whenNotPaused.call({from: accounts[3]});
		const boolrXo1pvA = await CryptoSecureBankTokenO4dVEpd.transferFrom.call(addresstwjcW4G, addresslykBQ9L, uintu5yMZV, {from: accounts[2]});
		const boolY8Xglm1 = await CryptoSecureBankTokenO4dVEpd.getBlackListStatus.call(addressimf9eBk, {from: accounts[3]});

		await expect(CryptoSecureBankTokenO4dVEpd.transfer.call(addressqx1rZcF, uintRRG6aRr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAeSrknk = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressTi8gTj2 = accounts[3]
		const addressOrfcyU1 = await CryptoSecureBankTokenAeSrknk.setOwner2.call(addressTi8gTj2, {from: accounts[4]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenC7xLblX = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintd9W3DCC = BigInt("10")
		const addressHJB34En = accounts[0]
		const addressU5MIoeg = accounts[0]
		const addresspzxIfzY = accounts[2]
		const uintanKf4ju = BigInt("1858")
		const addressMtv62fY = accounts[4]
		const addresspwPSvNK = accounts[4]
		const addressnSsPakR = accounts[1]
		const addressKzi6BqT = "0x0000000000000000000000000000000000000001"
		const boolJNlCH1j = await CryptoSecureBankTokenC7xLblX.transfer.call(addressHJB34En, uintd9W3DCC, {from: accounts[2]});
		const addressP1yczH6 = await CryptoSecureBankTokenC7xLblX.setOwner2.call(addressU5MIoeg, {from: accounts[3]});
		const addressvS9AYHr = await CryptoSecureBankTokenC7xLblX.destroyBlackFunds.call(addresspzxIfzY, {from: accounts[0]});
		const boolS5Td2gX = await CryptoSecureBankTokenC7xLblX.approve.call(addressMtv62fY, uintanKf4ju, {from: accounts[4]});
		const uintTrQ1GpN = await CryptoSecureBankTokenC7xLblX.allowance.call(addressnSsPakR, addresspwPSvNK, {from: accounts[2]});
		const addressDScG5EY = await CryptoSecureBankTokenC7xLblX.setOwner2.call(addressKzi6BqT, {from: accounts[0]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennnpcvyT = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressUJWrFLX = accounts[4]
		const addressJ98uRs = accounts[4]
		const addressnMTf3cW = accounts[2]
		const uintYEdw1hL = BigInt("1588")
		const addresswCnyAt9 = accounts[0]
		const addressQJVCGPr = accounts[1]
		const uintqd64APf = BigInt("2003")
		const addressFMkiXrb = accounts[1]
		const addressG7RdJ6H = accounts[5]
		const addressbm3HVg9 = await CryptoSecureBankTokennnpcvyT.transferOwnership.call(addressUJWrFLX, {from: accounts[3]});
		const addressZxkQ0P6 = await CryptoSecureBankTokennnpcvyT.transferOwnership.call(addressJ98uRs, {from: "0x0000000000000000000000000000000000000001"});
		const addressQHmqKYE = await CryptoSecureBankTokennnpcvyT.setOwner2.call(addressnMTf3cW, {from: accounts[4]});
		const boolmEQHnsi = await CryptoSecureBankTokennnpcvyT.transferFrom.call(addressQJVCGPr, addresswCnyAt9, uintYEdw1hL, {from: accounts[3]});
		const boolwYho1Pn = await CryptoSecureBankTokennnpcvyT.transferFrom.call(addressG7RdJ6H, addressFMkiXrb, uintqd64APf, {from: accounts[0]});

		await expect(CryptoSecureBankTokennnpcvyT.transferOwnership.call(addressJ98uRs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAeSrknk = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressb9Ipbfx = accounts[4]
		const addressOrfcyU1 = await CryptoSecureBankTokenAeSrknk.setOwner2.call(addressb9Ipbfx, {from: accounts[4]});
		const address3sJVSu = await CryptoSecureBankTokenAeSrknk.getOwner.call({from: accounts[1]});

		assert.equal(address3sJVSu, 0x7143a0e0B594370Ede28A644E6239BfafDE7aF1C)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO4dVEpd = await CryptoSecureBankToken.new({from: accounts[4]});
		const uinttQ9mKSE = BigInt("2002")
		const addressKlQtAh4 = accounts[0]
		const addressaGvpb4 = accounts[0]
		const addressD38NGbA = accounts[0]
		const uintzYnfimF = BigInt("547")
		const addresspWAkRcD = accounts[1]
		const booljqB0o1 = await CryptoSecureBankTokenO4dVEpd.approve.call(addressKlQtAh4, uinttQ9mKSE, {from: accounts[2]});
		const boolGKMC6uf = await CryptoSecureBankTokenO4dVEpd.deprecate.call(addressaGvpb4, {from: accounts[4]});
		const boolY8Xglm1 = await CryptoSecureBankTokenO4dVEpd.getBlackListStatus.call(addressD38NGbA, {from: accounts[3]});
		const boolZVS7HdT = await CryptoSecureBankTokenO4dVEpd.approve.call(addresspWAkRcD, uintzYnfimF, {from: accounts[5]});
		await CryptoSecureBankTokenO4dVEpd.unpause.call({from: accounts[3]});

		assert.equal(boolGKMC6uf, true)
		assert.equal(boolY8Xglm1, false)
		assert.equal(boolZVS7HdT, true)
		assert.equal(booljqB0o1, true)
		await expect(CryptoSecureBankTokenO4dVEpd.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO4dVEpd = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresslNeXNVM = accounts[5]
		const addressm134QqH = accounts[4]
		const uintevTR2o6 = BigInt("1668")
		const addressvTKxpfq = accounts[0]
		const addressmWfA2Ud = accounts[5]
		const uintBOsgDaQ = await CryptoSecureBankTokenO4dVEpd.balanceOf.call(addresslNeXNVM, {from: accounts[1]});
		const boolTpd1GG0 = await CryptoSecureBankTokenO4dVEpd.getBlackListStatus.call(addressm134QqH, {from: accounts[4]});
		const boolHokcuDt = await CryptoSecureBankTokenO4dVEpd.transfer.call(addressvTKxpfq, uintevTR2o6, {from: accounts[4]});
		const uintMrhSafb = await CryptoSecureBankTokenO4dVEpd.balanceOf.call(addressmWfA2Ud, {from: accounts[3]});

		assert.equal(boolHokcuDt, true)
		assert.equal(boolTpd1GG0, false)
		assert.equal(uintBOsgDaQ, BigInt("0"))
		assert.equal(uintMrhSafb, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO4dVEpd = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintiEb3nMe = BigInt("332")
		const uintKGJLwdl = BigInt("566")
		const uintBQEbNY4 = BigInt("1376")
		const addressHZYPrD1 = accounts[2]
		const uintbC28jJQ = await CryptoSecureBankTokenO4dVEpd.setParams.call(uintKGJLwdl, uintiEb3nMe, {from: accounts[4]});
		const boolfb50E2K = await CryptoSecureBankTokenO4dVEpd.transfer.call(addressHZYPrD1, uintBQEbNY4, {from: accounts[3]});

		await expect(CryptoSecureBankTokenO4dVEpd.setParams.call(uintKGJLwdl, uintiEb3nMe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO4dVEpd = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintkdjcVTT = BigInt("1228")
		const addressyW4Maf7 = accounts[5]
		const uintxo8ux2Y = BigInt("1216")
		const addressSKBhfb2 = accounts[0]
		const boolsgPwfez = await CryptoSecureBankTokenO4dVEpd.redeem.call(uintkdjcVTT, {from: accounts[4]});
		const uintBOsgDaQ = await CryptoSecureBankTokenO4dVEpd.balanceOf.call(addressyW4Maf7, {from: accounts[1]});
		const boolEsFfATg = await CryptoSecureBankTokenO4dVEpd.transfer.call(addressSKBhfb2, uintxo8ux2Y, {from: accounts[1]});

		assert.equal(boolsgPwfez, true)
		assert.equal(uintBOsgDaQ, BigInt("0"))
		await expect(CryptoSecureBankTokenO4dVEpd.transfer.call(addressSKBhfb2, uintxo8ux2Y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokena0urPon = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressE3ceFAu = accounts[3]
		const uintAON65Aq = BigInt("1273")
		const addresste6LTWg = accounts[1]
		const addresstydY1G7 = accounts[3]
		const addressxY8Umn5 = await CryptoSecureBankTokena0urPon.removeBlackList.call(addressE3ceFAu, {from: accounts[3]});
		const boolrZiaGG = await CryptoSecureBankTokena0urPon.transferFrom.call(addresstydY1G7, addresste6LTWg, uintAON65Aq, {from: accounts[4]});

		await expect(CryptoSecureBankTokena0urPon.transferFrom.call(addresstydY1G7, addresste6LTWg, uintAON65Aq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO4dVEpd = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintdHwqLvi = BigInt("2019")
		const addressIQJPu9d = accounts[0]
		const addressVaXUGWK = accounts[1]
		const uintsyi9V9 = BigInt("1409")
		const booljqB0o1 = await CryptoSecureBankTokenO4dVEpd.approve.call(addressIQJPu9d, uintdHwqLvi, {from: accounts[2]});
		const addressZqg1su = await CryptoSecureBankTokenO4dVEpd.destroyBlackFunds.call(addressVaXUGWK, {from: accounts[4]});
		const uintGEziKvW = await CryptoSecureBankTokenO4dVEpd.onlyPayloadSize.call(uintsyi9V9, {from: accounts[3]});

		assert.equal(booljqB0o1, true)
		await expect(CryptoSecureBankTokenO4dVEpd.destroyBlackFunds.call(addressVaXUGWK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenGNXrEOf = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressiOv63vf = accounts[0]
		const addressLgQZh6e = accounts[3]
		const uintMQZgkvE = BigInt("0")
		const addresspPcnLwR = accounts[0]
		const addressH1sEjpU = accounts[2]
		const uintLCAXlZN = await CryptoSecureBankTokenGNXrEOf.allowance.call(addressLgQZh6e, addressiOv63vf, {from: accounts[5]});
		const boolCD7tKI2 = await CryptoSecureBankTokenGNXrEOf.transferFrom.call(addressH1sEjpU, addresspPcnLwR, uintMQZgkvE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCD7tKI2, true)
		assert.equal(uintLCAXlZN, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO4dVEpd = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintcstrMAn = BigInt("1668")
		const addressoUc65Cl = accounts[1]
		const addresseufh94J = accounts[3]
		const uintnBgJBaC = BigInt("596")
		const boolHokcuDt = await CryptoSecureBankTokenO4dVEpd.transfer.call(addressoUc65Cl, uintcstrMAn, {from: accounts[4]});
		const addresskulQpfW = await CryptoSecureBankTokenO4dVEpd.addBlackList.call(addresseufh94J, {from: accounts[4]});
		const boolWXMCPM = await CryptoSecureBankTokenO4dVEpd.redeem.call(uintnBgJBaC, {from: accounts[1]});
		await CryptoSecureBankTokenO4dVEpd.pause.call({from: accounts[2]});

		assert.equal(boolHokcuDt, true)
		await expect(CryptoSecureBankTokenO4dVEpd.redeem.call(uintnBgJBaC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})