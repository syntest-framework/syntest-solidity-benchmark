const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressFm0bFAO = accounts[4]
		const addressSDILLEf = accounts[5]
		const QuickTokennQh9FAV = await QuickToken.new(addressFm0bFAO, addressSDILLEf, {from: accounts[3]});
		const uintAneupvI = BigInt("625")
		const addresskGReJIO = accounts[1]
		const addressRTHCx7 = accounts[2]
		const uintAWGWP6G = BigInt("1564")
		const addressvSAUCt = accounts[5]
		const uintaYW28NP = BigInt("1730")
		const addresslmhR8yt = accounts[5]
		const addressa9pCFH = "0x0000000000000000000000000000000000000001"
		const boolxPgMEa = await QuickTokennQh9FAV.transferFrom.call(addressRTHCx7, addresskGReJIO, uintAneupvI, {from: accounts[0]});
		const boolU7nZR5X = await QuickTokennQh9FAV.approve.call(addressvSAUCt, uintAWGWP6G, {from: accounts[3]});
		const booljxBayRt = await QuickTokennQh9FAV.transferFrom.call(addressa9pCFH, addresslmhR8yt, uintaYW28NP, {from: accounts[1]});

		await expect(QuickTokennQh9FAV.transferFrom.call(addressRTHCx7, addresskGReJIO, uintAneupvI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressiynhuSk = accounts[5]
		const addressexOtJEG = accounts[0]
		const QuickTokenoNHxaiz = await QuickToken.new(addressiynhuSk, addressexOtJEG, {from: accounts[5]});
		const uintfnHIDY1 = BigInt("1920")
		const addresseEToPT4 = accounts[4]
		const addressaxEup84 = "0x0000000000000000000000000000000000000001"
		const addressWesa2cq = "0x0000000000000000000000000000000000000001"
		const uintkVSEfZO = BigInt("758")
		const addressO6u3tZB = accounts[3]
		const uintOtIfwpP = BigInt("1301")
		const addresske7pTEN = accounts[5]
		const addresstYtzUd = accounts[1]
		const addressTFaep0 = accounts[2]
		const addressMEAP5UP = accounts[1]
		const boolIk5NuUF = await QuickTokenoNHxaiz.approve.call(addresseEToPT4, uintfnHIDY1, {from: accounts[3]});
		const uintNjwRnZ2 = await QuickTokenoNHxaiz.allowance.call(addressWesa2cq, addressaxEup84, {from: accounts[0]});
		const addressO2lEema = await QuickTokenoNHxaiz.mint.call(addressO6u3tZB, uintkVSEfZO, {from: accounts[3]});
		const boolcDIaUWK = await QuickTokenoNHxaiz.transferFrom.call(addresstYtzUd, addresske7pTEN, uintOtIfwpP, {from: accounts[2]});
		const uintaRKzSGA = await QuickTokenoNHxaiz.balanceOf.call(addressTFaep0, {from: accounts[1]});
		const uintSxdpXNr = await QuickTokenoNHxaiz.balanceOf.call(addressMEAP5UP, {from: accounts[4]});

		assert.equal(boolIk5NuUF, true)
		assert.equal(uintNjwRnZ2, BigInt("0"))
		await expect(QuickTokenoNHxaiz.mint.call(addressO6u3tZB, uintkVSEfZO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresscER0cyE = accounts[1]
		const addressiRZsrag = accounts[3]
		const QuickTokenzoH1Ywx = await QuickToken.new(addresscER0cyE, addressiRZsrag, {from: accounts[0]});
		const addressgV1W3G = accounts[0]
		const uintw8QbLJv = BigInt("1272")
		const addressqm1f0w = accounts[4]
		const addressjMNynC = accounts[2]
		const addressZMT31BI = accounts[3]
		const addressZJb1atx = accounts[2]
		const uintmerpaD = BigInt("59")
		const addressLGOkWQ = accounts[0]
		const addressAB9MZ0e = "0x0000000000000000000000000000000000000001"
		const uintHRBIqP4 = BigInt("601")
		const addressjBBmCzY = accounts[1]
		const uintUGohBNu = await QuickTokenzoH1Ywx.balanceOf.call(addressgV1W3G, {from: accounts[4]});
		const boolP0zmAzA = await QuickTokenzoH1Ywx.transferFrom.call(addressjMNynC, addressqm1f0w, uintw8QbLJv, {from: accounts[1]});
		const uintOCvWDvq = await QuickTokenzoH1Ywx.allowance.call(addressZJb1atx, addressZMT31BI, {from: accounts[4]});
		const boolhFtYxin = await QuickTokenzoH1Ywx.transferFrom.call(addressAB9MZ0e, addressLGOkWQ, uintmerpaD, {from: accounts[1]});
		const boolmocUS8 = await QuickTokenzoH1Ywx.transfer.call(addressjBBmCzY, uintHRBIqP4, {from: accounts[0]});

		assert.equal(uintUGohBNu, BigInt("0"))
		await expect(QuickTokenzoH1Ywx.transferFrom.call(addressjMNynC, addressqm1f0w, uintw8QbLJv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressWCsohdG = accounts[0]
		const addresslyAzfVb = accounts[3]
		const QuickTokenQTg5rnu = await QuickToken.new(addressWCsohdG, addresslyAzfVb, {from: accounts[3]});
		const addressKFlnnMw = accounts[2]
		const uintD8XAFQk = BigInt("991")
		const addressy1khfdQ = accounts[4]
		const uintTpbw8pj = BigInt("1098")
		const addressjYSIXWP = accounts[2]
		const addresshJzVi0A = await QuickTokenQTg5rnu.setMinter.call(addressKFlnnMw, {from: accounts[1]});
		const boolaTZKSix = await QuickTokenQTg5rnu.approve.call(addressy1khfdQ, uintD8XAFQk, {from: accounts[1]});
		const boolAxajnrb = await QuickTokenQTg5rnu.transfer.call(addressjYSIXWP, uintTpbw8pj, {from: accounts[0]});

		await expect(QuickTokenQTg5rnu.setMinter.call(addressKFlnnMw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressA8X8Tfi = accounts[0]
		const addressSNOTvcS = accounts[3]
		const QuickTokeniHpDKoF = await QuickToken.new(addressA8X8Tfi, addressSNOTvcS, {from: accounts[5]});
		const addressgHxFrG = accounts[4]
		const uintskVDdLd = BigInt("869")
		const addressTqgrrgl = "0x0000000000000000000000000000000000000001"
		const addressSZ01QzX = accounts[0]
		const addresslKYFlw = accounts[3]
		const addressfbY5ULj = "0x0000000000000000000000000000000000000001"
		const uintTor9cRt = await QuickTokeniHpDKoF.balanceOf.call(addressgHxFrG, {from: accounts[0]});
		const addressOHd7Vn5 = await QuickTokeniHpDKoF.mint.call(addressTqgrrgl, uintskVDdLd, {from: accounts[3]});
		const uintzj4Eahb = await QuickTokeniHpDKoF.allowance.call(addresslKYFlw, addressSZ01QzX, {from: accounts[1]});
		const addressidIetYa = await QuickTokeniHpDKoF.setMinter.call(addressfbY5ULj, {from: accounts[1]});

		assert.equal(uintTor9cRt, BigInt("0"))
		assert.equal(uintzj4Eahb, BigInt("0"))
		await expect(QuickTokeniHpDKoF.setMinter.call(addressfbY5ULj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressUhH23gg = accounts[2]
		const addressYWw1gGb = accounts[3]
		const QuickTokenCYWrkYu = await QuickToken.new(addressUhH23gg, addressYWw1gGb, {from: accounts[3]});
		const uintW4B4Qys = BigInt("883")
		const addresse9BUurY = accounts[2]
		const uintRCmwV3C = BigInt("167")
		const addressDIXUThP = accounts[1]
		const addressR8fhXn = accounts[3]
		const uintdcDDxt = BigInt("349")
		const addressLdUfwh8 = accounts[4]
		const uintxkY5s8L = BigInt("599")
		const addressHq0k3Hy = "0x0000000000000000000000000000000000000002"
		const uintdez6Y1 = BigInt("601")
		const addresskGCn4ir = accounts[1]
		const uintMgT8aDa = BigInt("289")
		const addresslYPhc80 = accounts[0]
		const uintajaVnlk = BigInt("126")
		const addressDMBRcI = accounts[1]
		const booldqfnlNo = await QuickTokenCYWrkYu.transfer.call(addresse9BUurY, uintW4B4Qys, {from: accounts[4]});
		const boolcrwIWpR = await QuickTokenCYWrkYu.transfer.call(addressDIXUThP, uintRCmwV3C, {from: accounts[3]});
		const uintpLJcqYC = await QuickTokenCYWrkYu.balanceOf.call(addressR8fhXn, {from: accounts[4]});
		const boolgf9AR38 = await QuickTokenCYWrkYu.approve.call(addressLdUfwh8, uintdcDDxt, {from: accounts[3]});
		const addressIw0qYx2 = await QuickTokenCYWrkYu.mint.call(addressHq0k3Hy, uintxkY5s8L, {from: accounts[2]});
		const boolOstaV7B = await QuickTokenCYWrkYu.transfer.call(addresskGCn4ir, uintdez6Y1, {from: accounts[0]});
		const addresscAIjOBL = await QuickTokenCYWrkYu.mint.call(addresslYPhc80, uintMgT8aDa, {from: accounts[1]});
		const boolrUM3w38 = await QuickTokenCYWrkYu.approve.call(addressDMBRcI, uintajaVnlk, {from: accounts[5]});

		await expect(QuickTokenCYWrkYu.transfer.call(addresse9BUurY, uintW4B4Qys, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressc79GSgn = "0x0000000000000000000000000000000000000001"
		const addressyekzHjz = accounts[0]
		const QuickTokenZASeVY2 = await QuickToken.new(addressc79GSgn, addressyekzHjz, {from: "0x0000000000000000000000000000000000000001"});
		const uintREiQD7u = BigInt("951")
		const addresst6ZaDtO = accounts[0]
		const uints9GOvir = BigInt("1982")
		const addressj7wropS = accounts[2]
		const uintYGyy6k4 = BigInt("38")
		const addressVVowRpw = accounts[2]
		const uintqI1xvMx = BigInt("1690")
		const addressf4eieeM = accounts[3]
		const bool9uEyw0 = await QuickTokenZASeVY2.transfer.call(addresst6ZaDtO, uintREiQD7u, {from: accounts[0]});
		const addressRnBh8iB = await QuickTokenZASeVY2.mint.call(addressj7wropS, uints9GOvir, {from: accounts[1]});
		const boolLrxSye = await QuickTokenZASeVY2.transfer.call(addressVVowRpw, uintYGyy6k4, {from: accounts[4]});
		const boolzuHWkk = await QuickTokenZASeVY2.transfer.call(addressf4eieeM, uintqI1xvMx, {from: accounts[5]});
	});

	it('test for QuickToken', async () => {
		const addressMabA5Qf = accounts[0]
		const addressIXIcg45 = accounts[3]
		const QuickTokeniHpDKoF = await QuickToken.new(addressMabA5Qf, addressIXIcg45, {from: accounts[5]});
		const address1cDQys = accounts[0]
		const addressNDz1a7T = accounts[0]
		const addresswl02v6q = accounts[4]
		const uintNhEz5a2 = BigInt("869")
		const addressCq7LxuG = "0x0000000000000000000000000000000000000000"
		const addressWJjXuWk = accounts[0]
		const addressfpmEhc3 = accounts[3]
		const addressX44bajo = accounts[4]
		const addressv5kenS = accounts[0]
		const addressB6T2Gob = "0x0000000000000000000000000000000000000001"
		const uinthrv81K = await QuickTokeniHpDKoF.allowance.call(addressNDz1a7T, address1cDQys, {from: accounts[2]});
		const uintTor9cRt = await QuickTokeniHpDKoF.balanceOf.call(addresswl02v6q, {from: accounts[0]});
		const addressOHd7Vn5 = await QuickTokeniHpDKoF.mint.call(addressCq7LxuG, uintNhEz5a2, {from: accounts[3]});
		const uintzj4Eahb = await QuickTokeniHpDKoF.allowance.call(addressfpmEhc3, addressWJjXuWk, {from: accounts[1]});
		const addressidIetYa = await QuickTokeniHpDKoF.setMinter.call(addressX44bajo, {from: accounts[1]});
		const uintvdCHjF5 = await QuickTokeniHpDKoF.allowance.call(addressB6T2Gob, addressv5kenS, {from: accounts[4]});

		assert.equal(uintTor9cRt, BigInt("0"))
		assert.equal(uinthrv81K, BigInt("0"))
		await expect(QuickTokeniHpDKoF.mint.call(addressCq7LxuG, uintNhEz5a2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressCj561f = accounts[2]
		const addressYlDASdN = accounts[0]
		const QuickTokenKMlp7KF = await QuickToken.new(addressCj561f, addressYlDASdN, {from: accounts[0]});
		const addressR2OqfFw = "0x0000000000000000000000000000000000000001"
		const addresscMdVPUw = accounts[3]
		const uintc17vv31 = BigInt("679")
		const addressyZOSiC = "0x00000000000000000000000000000000000000-1"
		const uinteNBIyls = BigInt("385")
		const addressEFEuGFK = accounts[4]
		const addressRDysqhj = accounts[3]
		const addressYoK6MrF = "0x0000000000000000000000000000000000000001"
		const uintQdDtxaz = BigInt("1314")
		const addressrHOOwM = accounts[0]
		const uintnAfNwW = await QuickTokenKMlp7KF.allowance.call(addresscMdVPUw, addressR2OqfFw, {from: accounts[1]});
		const boolLVewpdo = await QuickTokenKMlp7KF.approve.call(addressyZOSiC, uintc17vv31, {from: accounts[5]});
		const booludDmwqb = await QuickTokenKMlp7KF.approve.call(addressEFEuGFK, uinteNBIyls, {from: accounts[5]});
		const uintud6IgRG = await QuickTokenKMlp7KF.allowance.call(addressYoK6MrF, addressRDysqhj, {from: accounts[5]});
		const addressgwuViCc = await QuickTokenKMlp7KF.mint.call(addressrHOOwM, uintQdDtxaz, {from: accounts[1]});

		assert.equal(uintnAfNwW, BigInt("0"))
		await expect(QuickTokenKMlp7KF.approve.call(addressyZOSiC, uintc17vv31, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})