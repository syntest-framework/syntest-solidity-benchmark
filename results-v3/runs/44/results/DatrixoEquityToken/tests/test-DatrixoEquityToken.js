const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressdD56RR = accounts[0]
		const uintgSHJ1gl = BigInt("170")
		const DatrixoEquityTokenTsykgiy = await DatrixoEquityToken.new(addressdD56RR, uintgSHJ1gl, {from: accounts[3]});
		const uintuLAnso5 = BigInt("707")
		const addresst3fLFrf = accounts[4]
		const addressUUm4LS5 = accounts[2]
		const uintPK1ehaw = BigInt("11")
		const addressdcGX8Pn = accounts[3]
		const addressAU5YrJa = "0x0000000000000000000000000000000000000001"
		const boolnVv0Rwp = await DatrixoEquityTokenTsykgiy.transferFrom.call(addressUUm4LS5, addresst3fLFrf, uintuLAnso5, {from: accounts[1]});
		await DatrixoEquityTokenTsykgiy.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
		const boolEjgo2GT = await DatrixoEquityTokenTsykgiy.transferFrom.call(addressAU5YrJa, addressdcGX8Pn, uintPK1ehaw, {from: accounts[2]});
		await DatrixoEquityTokenTsykgiy.afterStartTime.call({from: accounts[3]});

		await expect(DatrixoEquityTokenTsykgiy.transferFrom.call(addressUUm4LS5, addresst3fLFrf, uintuLAnso5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressHCyiRqA = accounts[0]
		const uinteeB8paz = BigInt("1725")
		const DatrixoEquityTokenXZEotac = await DatrixoEquityToken.new(addressHCyiRqA, uinteeB8paz, {from: accounts[0]});
		const uintImYA5Bk = BigInt("1458")
		const addressHuN3hLO = accounts[0]
		const uintbLNOXWB = BigInt("1253")
		const uintWURJ5nW = BigInt("1867")
		const addressXNCKtOY = accounts[0]
		const bool70pic0 = await DatrixoEquityTokenXZEotac.transfer.call(addressHuN3hLO, uintImYA5Bk, {from: accounts[0]});
		const uintJFM33Vy = await DatrixoEquityTokenXZEotac.setStart.call(uintbLNOXWB, {from: accounts[5]});
		await DatrixoEquityTokenXZEotac.afterStartTime.call({from: accounts[3]});
		const boolxodyjiY = await DatrixoEquityTokenXZEotac.transfer.call(addressXNCKtOY, uintWURJ5nW, {from: "0x0000000000000000000000000000000000000001"});
		const addressarrayr1VLod = await DatrixoEquityTokenXZEotac.getShareholdersArray.call({from: accounts[1]});

		await expect(DatrixoEquityTokenXZEotac.transfer.call(addressHuN3hLO, uintImYA5Bk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressse9nQlg = accounts[3]
		const uintguYPCX4 = BigInt("77")
		const DatrixoEquityTokenYv0izFY = await DatrixoEquityToken.new(addressse9nQlg, uintguYPCX4, {from: "0x0000000000000000000000000000000000000001"});
		const uintM7PPV5p = BigInt("1183")
		const addressU61LRHk = accounts[1]
		const addressnErfKfm = accounts[3]
		const addressTPluVGS = accounts[0]
		const addressw9JwQlp = accounts[3]
		const boolOV2SKkl = await DatrixoEquityTokenYv0izFY.transferFrom.call(addressnErfKfm, addressU61LRHk, uintM7PPV5p, {from: accounts[3]});
		const boolJ9PGIWS = await DatrixoEquityTokenYv0izFY.removeShareholder.call(addressTPluVGS, {from: accounts[1]});
		const boolCo3y3uz = await DatrixoEquityTokenYv0izFY.removeShareholder.call(addressw9JwQlp, {from: accounts[1]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressUiTqhma = accounts[1]
		const uinttvejfaY = BigInt("1641")
		const DatrixoEquityTokenrooijZy = await DatrixoEquityToken.new(addressUiTqhma, uinttvejfaY, {from: accounts[4]});
		const uintMcgIV3P = BigInt("192")
		await DatrixoEquityTokenrooijZy.onlyOwner.call({from: accounts[0]});
		await DatrixoEquityTokenrooijZy.onlyOwner.call({from: accounts[4]});
		const uintqGJdlMl = await DatrixoEquityTokenrooijZy.setStart.call(uintMcgIV3P, {from: accounts[3]});
		await DatrixoEquityTokenrooijZy.afterStartTime.call({from: accounts[1]});

		await expect(DatrixoEquityTokenrooijZy.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressRk1387y = accounts[3]
		const uintnJnKbn = BigInt("968")
		const DatrixoEquityTokensDvocYr = await DatrixoEquityToken.new(addressRk1387y, uintnJnKbn, {from: accounts[0]});
		const uintjEwtOWR = BigInt("1060")
		const addressarrayiNDF9Ug = await DatrixoEquityTokensDvocYr.getShareholdersArray.call({from: accounts[1]});
		const addressarrayOVEOqWe = await DatrixoEquityTokensDvocYr.getShareholdersArray.call({from: accounts[2]});
		const uintcfo3kC = await DatrixoEquityTokensDvocYr.setStart.call(uintjEwtOWR, {from: accounts[2]});

		assert.equal(addressarrayOVEOqWe, )
		assert.equal(addressarrayiNDF9Ug, )
		await expect(DatrixoEquityTokensDvocYr.setStart.call(uintjEwtOWR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressIsbCby3 = accounts[0]
		const uintbmLiXYg = BigInt("1725")
		const DatrixoEquityTokenXZEotac = await DatrixoEquityToken.new(addressIsbCby3, uintbmLiXYg, {from: accounts[0]});
		const uintTRXq2d2 = BigInt("1458")
		const addressVUHOURP = accounts[3]
		const uintdLc0dE = BigInt("1253")
		const bool70pic0 = await DatrixoEquityTokenXZEotac.transfer.call(addressVUHOURP, uintTRXq2d2, {from: accounts[0]});
		const uintJFM33Vy = await DatrixoEquityTokenXZEotac.setStart.call(uintdLc0dE, {from: accounts[5]});
		await DatrixoEquityTokenXZEotac.afterStartTime.call({from: accounts[3]});
		const addressarrayr1VLod = await DatrixoEquityTokenXZEotac.getShareholdersArray.call({from: accounts[1]});

		assert.equal(bool70pic0, true)
		await expect(DatrixoEquityTokenXZEotac.setStart.call(uintdLc0dE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressIkYDCi7 = accounts[5]
		const uintmIdWILm = BigInt("825")
		const DatrixoEquityTokenSQA7bu = await DatrixoEquityToken.new(addressIkYDCi7, uintmIdWILm, {from: accounts[2]});
		const addressG03ZibH = accounts[1]
		const uintdWPPROd = BigInt("1550")
		const boolX5krUTn = await DatrixoEquityTokenSQA7bu.removeShareholder.call(addressG03ZibH, {from: accounts[5]});
		const addressarrayVWP5bu8 = await DatrixoEquityTokenSQA7bu.getShareholdersArray.call({from: accounts[4]});
		const uintb0qZVb8 = await DatrixoEquityTokenSQA7bu.setStart.call(uintdWPPROd, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenSQA7bu.removeShareholder.call(addressG03ZibH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressEb7TJX = accounts[0]
		const uintQY2k7Wc = BigInt("551")
		const DatrixoEquityTokenLKbJHIl = await DatrixoEquityToken.new(addressEb7TJX, uintQY2k7Wc, {from: accounts[4]});
		const uintNeKBUJ = BigInt("643")
		const uintv1L0nZD = await DatrixoEquityTokenLKbJHIl.setStart.call(uintNeKBUJ, {from: accounts[0]});

		await expect(DatrixoEquityTokenLKbJHIl.setStart.call(uintNeKBUJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressSUG9HL2 = accounts[2]
		const uintwpyXiME = BigInt("164")
		const DatrixoEquityTokenzp8txCI = await DatrixoEquityToken.new(addressSUG9HL2, uintwpyXiME, {from: accounts[4]});
		const uintSPBtjnw = BigInt("1059")
		const addressSXh9aCT = accounts[1]
		const uintxtCrHSG = BigInt("749")
		const addressuwChC08 = "0x0000000000000000000000000000000000000001"
		const addressnEVGUa = accounts[1]
		const uinthk3qBgw = BigInt("1934")
		const addressuxfnHgA = accounts[4]
		const addressMyvHlVQ = accounts[3]
		const uintZ62iqJ4 = BigInt("883")
		const addressFMQMKuL = accounts[0]
		const boolJpifx3R = await DatrixoEquityTokenzp8txCI.transfer.call(addressSXh9aCT, uintSPBtjnw, {from: accounts[2]});
		const boolGCCXrur = await DatrixoEquityTokenzp8txCI.transferFrom.call(addressnEVGUa, addressuwChC08, uintxtCrHSG, {from: accounts[2]});
		const boolLYLCdJ4 = await DatrixoEquityTokenzp8txCI.transferFrom.call(addressMyvHlVQ, addressuxfnHgA, uinthk3qBgw, {from: accounts[0]});
		const boolClhBUpd = await DatrixoEquityTokenzp8txCI.transfer.call(addressFMQMKuL, uintZ62iqJ4, {from: accounts[0]});

		assert.equal(boolJpifx3R, true)
		await expect(DatrixoEquityTokenzp8txCI.transferFrom.call(addressnEVGUa, addressuwChC08, uintxtCrHSG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressXYVNAXM = accounts[2]
		const uinteNQoYH = BigInt("164")
		const DatrixoEquityTokenzp8txCI = await DatrixoEquityToken.new(addressXYVNAXM, uinteNQoYH, {from: accounts[4]});
		const uintvnwTdHS = BigInt("1067")
		const addressEYg6qPF = accounts[1]
		const uintmfCzA0F = BigInt("749")
		const addressv6gvqH = "0x0000000000000000000000000000000000000001"
		const addressfeDjDA = accounts[2]
		const uintm4tBZ3k = BigInt("1653")
		const addressdBWcT3X = accounts[0]
		const uintwPfMFP0 = BigInt("1934")
		const addresswHxfVxJ = accounts[2]
		const addressU59SZM = accounts[3]
		const uintBIJFRcA = BigInt("748")
		const uintWkNqoz5 = BigInt("883")
		const addressLmE5vzd = accounts[0]
		const boolJpifx3R = await DatrixoEquityTokenzp8txCI.transfer.call(addressEYg6qPF, uintvnwTdHS, {from: accounts[2]});
		const boolGCCXrur = await DatrixoEquityTokenzp8txCI.transferFrom.call(addressfeDjDA, addressv6gvqH, uintmfCzA0F, {from: accounts[2]});
		const boolpmlkcxw = await DatrixoEquityTokenzp8txCI.transfer.call(addressdBWcT3X, uintm4tBZ3k, {from: accounts[0]});
		const boolLYLCdJ4 = await DatrixoEquityTokenzp8txCI.transferFrom.call(addressU59SZM, addresswHxfVxJ, uintwPfMFP0, {from: accounts[0]});
		const uintapBjlee = await DatrixoEquityTokenzp8txCI.setStart.call(uintBIJFRcA, {from: accounts[3]});
		const boolClhBUpd = await DatrixoEquityTokenzp8txCI.transfer.call(addressLmE5vzd, uintWkNqoz5, {from: accounts[0]});

		assert.equal(boolGCCXrur, true)
		assert.equal(boolJpifx3R, true)
		await expect(DatrixoEquityTokenzp8txCI.transfer.call(addressdBWcT3X, uintm4tBZ3k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})