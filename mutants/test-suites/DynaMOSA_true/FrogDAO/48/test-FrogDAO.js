const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOxmgFFJT = await FrogDAO.new({from: accounts[0]});
		const addressWdX8gHj = "0x0000000000000000000000000000000000000001"
		const addressXWiCviG = accounts[1]
		const uintUTnxEtl = BigInt("626")
		const uintRAqtC76 = BigInt("1213")
		const uintHzyXoPX = BigInt("621")
		const uintVQxZwUz = BigInt("1712")
		const uintqDrx7oq = await FrogDAOxmgFFJT.allowance.call(addressXWiCviG, addressWdX8gHj, {from: accounts[0]});
		const uintZpYBxqy = await FrogDAOxmgFFJT.safeMul.call(uintRAqtC76, uintUTnxEtl, {from: accounts[4]});
		const uintXA6uxhm = await FrogDAOxmgFFJT.safeDiv.call(uintVQxZwUz, uintHzyXoPX, {from: "0x0000000000000000000000000000000000000001"});
		const uintGOvH5OK = await FrogDAOxmgFFJT.totalSupply.call({from: accounts[1]});

		assert.equal(uintGOvH5OK, BigInt("1000000000000000000000000"))
		assert.equal(uintXA6uxhm, BigInt("2"))
		assert.equal(uintZpYBxqy, BigInt("759338"))
		assert.equal(uintqDrx7oq, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAO7XzJWE = await FrogDAO.new({from: accounts[3]});
		const uinta7HBvU7 = BigInt("2035")
		const addresspxn7CM0 = accounts[3]
		const uintYtbdQd1 = BigInt("1255")
		const addressu8ktu7J = accounts[2]
		const addressJQm9nAc = accounts[4]
		const uintWgVwoOI = BigInt("727")
		const addressz4RIZKe = accounts[0]
		const addressCSptyCM = accounts[2]
		const uintxIdiLqz = BigInt("39")
		const uintssTqBGP = BigInt("1797")
//		const boolrl9izec = await FrogDAO7XzJWE.transfer.call(addresspxn7CM0, uinta7HBvU7, {from: accounts[0]});
//		const boolM3UxEF0 = await FrogDAO7XzJWE.transfer.call(addressu8ktu7J, uintYtbdQd1, {from: accounts[4]});
//		const uintEkjL0m = await FrogDAO7XzJWE.balanceOf.call(addressJQm9nAc, {from: accounts[0]});
//		const boolEOWKdB8 = await FrogDAO7XzJWE.transferFrom.call(addressCSptyCM, addressz4RIZKe, uintWgVwoOI, {from: accounts[4]});
//		const uintSmsPHVn = await FrogDAO7XzJWE.safeMul.call(uintssTqBGP, uintxIdiLqz, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAO7XzJWE.transfer.call(addresspxn7CM0, uinta7HBvU7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOlfqrn7v = await FrogDAO.new({from: accounts[2]});
		const uintb9rbPH = BigInt("588")
		const uintOm0a5m7 = BigInt("1332")
		const uintVOPgj1n = BigInt("429")
		const uintdumQ23E = BigInt("1309")
		const addressNAhbt7V = accounts[2]
		const addressMdzn5I = accounts[0]
		const uintokXLUZy = BigInt("159")
		const addressflIdINz = accounts[5]
		const addressqVUzo8s = accounts[2]
		const uintt3BF7aQ = await FrogDAOlfqrn7v.safeSub.call(uintOm0a5m7, uintb9rbPH, {from: accounts[0]});
		const uintKsCgxqc = await FrogDAOlfqrn7v.safeMul.call(uintdumQ23E, uintVOPgj1n, {from: accounts[0]});
		const uintNWx90v = await FrogDAOlfqrn7v.allowance.call(addressMdzn5I, addressNAhbt7V, {from: accounts[0]});
//		const boolP97Zcl8 = await FrogDAOlfqrn7v.transferFrom.call(addressqVUzo8s, addressflIdINz, uintokXLUZy, {from: accounts[5]});

		assert.equal(uintKsCgxqc, BigInt("561561"))
		assert.equal(uintNWx90v, BigInt("0"))
		assert.equal(uintt3BF7aQ, BigInt("744"))
		await expect(FrogDAOlfqrn7v.transferFrom.call(addressqVUzo8s, addressflIdINz, uintokXLUZy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOTGJxMhN = await FrogDAO.new({from: accounts[1]});
		const uintEQFGQD = BigInt("343")
		const uinteEoVajS = BigInt("357")
		const uintae0Qorc = BigInt("1382")
		const uintPKn5Y8M = BigInt("44")
		const uintnCk0hDg = BigInt("1686")
		const addressNwDsgS = accounts[2]
		const addressg2pU2SL = accounts[0]
		const addressP3bBTUJ = accounts[2]
		const uintvRZ2dN6 = BigInt("46")
		const addressXItzb6A = accounts[4]
		const uinthhJY8oZ = await FrogDAOTGJxMhN.safeDiv.call(uinteEoVajS, uintEQFGQD, {from: accounts[2]});
		const uintK99zLtm = await FrogDAOTGJxMhN.safeAdd.call(uintPKn5Y8M, uintae0Qorc, {from: accounts[4]});
//		const booleEkN4U = await FrogDAOTGJxMhN.transfer.call(addressNwDsgS, uintnCk0hDg, {from: accounts[5]});
//		const uintGJvKgVv = await FrogDAOTGJxMhN.allowance.call(addressP3bBTUJ, addressg2pU2SL, {from: "0x0000000000000000000000000000000000000001"});
//		const booly2q2yEl = await FrogDAOTGJxMhN.transfer.call(addressXItzb6A, uintvRZ2dN6, {from: accounts[0]});

		assert.equal(uintK99zLtm, BigInt("1426"))
		assert.equal(uinthhJY8oZ, BigInt("1"))
		await expect(FrogDAOTGJxMhN.transfer.call(addressNwDsgS, uintnCk0hDg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOnQIFRHt = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJmfLNMb = BigInt("577")
		const addressbxZq1Ru = accounts[4]
		const addressZocdKUf = accounts[4]
		const uintz24GXB = BigInt("101")
		const addressv28l9rt = accounts[0]
		const address6NoFC0 = accounts[5]
		const addressrbleSre = accounts[5]
		const uintItlPI9A = BigInt("206")
		const uintxy5TFr = BigInt("1006")
		const uintkKwPaUB = BigInt("471")
		const addresssbQlRJW = "0x0000000000000000000000000000000000000001"
		const addresszjkHEwp = accounts[3]
		const uintEZWyadO = BigInt("1828")
		const addressXlASwIU = accounts[3]
		const boolY8dbWt2 = await FrogDAOnQIFRHt.transferFrom.call(addressZocdKUf, addressbxZq1Ru, uintJmfLNMb, {from: accounts[3]});
		const boolCVnMk9 = await FrogDAOnQIFRHt.approve.call(addressv28l9rt, uintz24GXB, {from: accounts[1]});
		const uintJ5kmWDK = await FrogDAOnQIFRHt.allowance.call(addressrbleSre, address6NoFC0, {from: accounts[4]});
		const uintV4ZwOM = await FrogDAOnQIFRHt.safeMul.call(uintxy5TFr, uintItlPI9A, {from: accounts[5]});
		const boolP9dvBho = await FrogDAOnQIFRHt.transferFrom.call(addresszjkHEwp, addresssbQlRJW, uintkKwPaUB, {from: accounts[2]});
		const booliOVXCZH = await FrogDAOnQIFRHt.approve.call(addressXlASwIU, uintEZWyadO, {from: accounts[1]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOOf08RK = await FrogDAO.new({from: accounts[2]});
		const addressbn0CKIB = accounts[5]
		const uintfwLogQR = BigInt("591")
		const uinttGDyjHE = BigInt("1245")
		const uintENuHof6 = BigInt("628")
		const uintvEP4bbL = BigInt("1128")
		const addressuZrhLZ5 = accounts[1]
		const addressI05jks = accounts[1]
		const uinto2hCsIt = await FrogDAOOf08RK.totalSupply.call({from: accounts[3]});
		const uintMjZxIEf = await FrogDAOOf08RK.balanceOf.call(addressbn0CKIB, {from: accounts[1]});
		const uintfbppuBq = await FrogDAOOf08RK.safeMul.call(uinttGDyjHE, uintfwLogQR, {from: accounts[2]});
		const uintd5H2dPP = await FrogDAOOf08RK.safeSub.call(uintvEP4bbL, uintENuHof6, {from: accounts[2]});
		const uintWAZCaLQ = await FrogDAOOf08RK.allowance.call(addressI05jks, addressuZrhLZ5, {from: accounts[4]});

		assert.equal(uintMjZxIEf, BigInt("0"))
		assert.equal(uintWAZCaLQ, BigInt("0"))
		assert.equal(uintd5H2dPP, BigInt("500"))
		assert.equal(uintfbppuBq, BigInt("735795"))
		assert.equal(uinto2hCsIt, BigInt("1000000000000000000000000"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOOf08RK = await FrogDAO.new({from: accounts[2]});
		const uintRDIfdi1 = BigInt("1458")
		const addressZCv2Oii = accounts[0]
		const uintKpIivHD = BigInt("1869")
		const uintWprOIb = BigInt("1920")
		const uintZfVGa8b = BigInt("169")
		const uintmg4adLf = BigInt("207")
		const addressFEwPTk = accounts[6]
		const uintMD370kb = BigInt("591")
		const uintysOKrnV = BigInt("1245")
		const uintkwM5K9e = BigInt("1895")
		const addressb8gE1Ni = accounts[1]
		const address1nlBYn = accounts[2]
		const uintqf4rnFA = BigInt("628")
		const uintACUptGT = BigInt("1128")
		const addressXzNoLzW = accounts[1]
		const addressVGhQlGV = accounts[1]
		const boolV0iJcD = await FrogDAOOf08RK.approve.call(addressZCv2Oii, uintRDIfdi1, {from: accounts[0]});
		const uintvv9Zkgy = await FrogDAOOf08RK.safeMul.call(uintWprOIb, uintKpIivHD, {from: accounts[1]});
		const uintrs0KcNA = await FrogDAOOf08RK.safeSub.call(uintmg4adLf, uintZfVGa8b, {from: accounts[4]});
		const uinto2hCsIt = await FrogDAOOf08RK.totalSupply.call({from: accounts[3]});
		const uintMjZxIEf = await FrogDAOOf08RK.balanceOf.call(addressFEwPTk, {from: accounts[1]});
		const uintfbppuBq = await FrogDAOOf08RK.safeMul.call(uintysOKrnV, uintMD370kb, {from: accounts[2]});
//		const boolq7ng02m = await FrogDAOOf08RK.transferFrom.call(address1nlBYn, addressb8gE1Ni, uintkwM5K9e, {from: accounts[5]});
//		const uintd5H2dPP = await FrogDAOOf08RK.safeSub.call(uintACUptGT, uintqf4rnFA, {from: accounts[2]});
//		const uintWAZCaLQ = await FrogDAOOf08RK.allowance.call(addressVGhQlGV, addressXzNoLzW, {from: accounts[4]});

		assert.equal(boolV0iJcD, true)
		assert.equal(uintMjZxIEf, BigInt("0"))
		assert.equal(uintfbppuBq, BigInt("735795"))
		assert.equal(uinto2hCsIt, BigInt("1000000000000000000000000"))
		assert.equal(uintrs0KcNA, BigInt("38"))
		assert.equal(uintvv9Zkgy, BigInt("3588480"))
		await expect(FrogDAOOf08RK.transferFrom.call(address1nlBYn, addressb8gE1Ni, uintkwM5K9e, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})