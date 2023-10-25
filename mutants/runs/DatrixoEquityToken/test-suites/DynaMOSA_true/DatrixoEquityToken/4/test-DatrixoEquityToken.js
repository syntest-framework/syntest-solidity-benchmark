const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressYvSWq5u = accounts[0]
		const uintvB0f5pE = BigInt("1188")
		const DatrixoEquityTokeno7papD = await DatrixoEquityToken.new(addressYvSWq5u, uintvB0f5pE, {from: accounts[4]});
		await DatrixoEquityTokeno7papD.onlyOwner.call({from: accounts[3]});
		const addressarrayfETlmrZ = await DatrixoEquityTokeno7papD.getShareholdersArray.call({from: accounts[3]});
		const addressarraysZltIWe = await DatrixoEquityTokeno7papD.getShareholdersArray.call({from: accounts[2]});

		await expect(DatrixoEquityTokeno7papD.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressdbIXCGt = accounts[4]
		const uintbOptUMH = BigInt("1723")
		const DatrixoEquityTokencc5H6cL = await DatrixoEquityToken.new(addressdbIXCGt, uintbOptUMH, {from: accounts[4]});
		const uintZD3JTae = BigInt("1662")
		const addresseB9zVR1 = "0x0000000000000000000000000000000000000001"
		const addressxSEuyH2 = "0x0000000000000000000000000000000000000001"
		const booljmZ6eFA = await DatrixoEquityTokencc5H6cL.transfer.call(addresseB9zVR1, uintZD3JTae, {from: accounts[5]});
		const addressarrayXTnnVPU = await DatrixoEquityTokencc5H6cL.getShareholdersArray.call({from: accounts[3]});
		const boollSQLJar = await DatrixoEquityTokencc5H6cL.removeShareholder.call(addressxSEuyH2, {from: accounts[4]});

		await expect(DatrixoEquityTokencc5H6cL.transfer.call(addresseB9zVR1, uintZD3JTae, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressGLyZEy = accounts[4]
		const uintje3xW6l = BigInt("2041")
		const DatrixoEquityTokenog0AzFY = await DatrixoEquityToken.new(addressGLyZEy, uintje3xW6l, {from: accounts[1]});
		const uintOU9MRpn = BigInt("794")
		const addressEhtMTb = accounts[0]
		const addressD0EExy9 = accounts[5]
		const addressarrayijJ9OEH = await DatrixoEquityTokenog0AzFY.getShareholdersArray.call({from: accounts[2]});
		const booltIP45hU = await DatrixoEquityTokenog0AzFY.transferFrom.call(addressD0EExy9, addressEhtMTb, uintOU9MRpn, {from: accounts[3]});

		assert.equal(addressarrayijJ9OEH, )
		await expect(DatrixoEquityTokenog0AzFY.transferFrom.call(addressD0EExy9, addressEhtMTb, uintOU9MRpn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressx2UagF = accounts[4]
		const uintTs8ZPay = BigInt("2041")
		const DatrixoEquityTokenog0AzFY = await DatrixoEquityToken.new(addressx2UagF, uintTs8ZPay, {from: accounts[1]});
		const uintWwePaFs = BigInt("465")
		const uintmD3vRBT = BigInt("794")
		const addresskwqJviV = accounts[0]
		const addressOYsuipl = accounts[5]
		const uintww0N6Fu = BigInt("532")
		const addressF6VX6J = accounts[5]
		const addressMDZR00f = accounts[1]
		const uintbReGOd = await DatrixoEquityTokenog0AzFY.setStart.call(uintWwePaFs, {from: accounts[4]});
		const booltIP45hU = await DatrixoEquityTokenog0AzFY.transferFrom.call(addressOYsuipl, addresskwqJviV, uintmD3vRBT, {from: accounts[3]});
		const boolNHFNwZf = await DatrixoEquityTokenog0AzFY.transferFrom.call(addressMDZR00f, addressF6VX6J, uintww0N6Fu, {from: accounts[0]});

		await expect(DatrixoEquityTokenog0AzFY.transferFrom.call(addressOYsuipl, addresskwqJviV, uintmD3vRBT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressDlY6Jb4 = accounts[1]
		const uinthuLodBT = BigInt("1274")
		const DatrixoEquityTokenWrX1o5U = await DatrixoEquityToken.new(addressDlY6Jb4, uinthuLodBT, {from: accounts[0]});
		const uintC9O4YIf = BigInt("1452")
		const addressHctxhx = accounts[4]
		const uintwZyOVVB = BigInt("2018")
		const uintExxEEhx = BigInt("96")
		const addressPjvm5sl = "0x0000000000000000000000000000000000000001"
		const addressVzGfDXq = accounts[3]
		const uintQNp41L3 = BigInt("1708")
		const address1ZKghB = accounts[4]
		const addressdDLE7Nm = accounts[3]
		const uintl0BNeJ4 = BigInt("39")
		const addressg7d76dY = accounts[2]
		const addressDO86xZb = accounts[5]
		const boolxhxCNTX = await DatrixoEquityTokenWrX1o5U.transfer.call(addressHctxhx, uintC9O4YIf, {from: accounts[1]});
		const uintIkhpmAa = await DatrixoEquityTokenWrX1o5U.setStart.call(uintwZyOVVB, {from: accounts[1]});
		const booldFPE0S = await DatrixoEquityTokenWrX1o5U.transferFrom.call(addressVzGfDXq, addressPjvm5sl, uintExxEEhx, {from: accounts[5]});
		const boolHd7CkMm = await DatrixoEquityTokenWrX1o5U.transferFrom.call(addressdDLE7Nm, address1ZKghB, uintQNp41L3, {from: accounts[2]});
		const boolEU59vO = await DatrixoEquityTokenWrX1o5U.transferFrom.call(addressDO86xZb, addressg7d76dY, uintl0BNeJ4, {from: accounts[3]});

		assert.equal(boolxhxCNTX, true)
		await expect(DatrixoEquityTokenWrX1o5U.setStart.call(uintwZyOVVB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressRe2KClr = accounts[0]
		const uintmV5GGeX = BigInt("237")
		const DatrixoEquityTokenLr22B2F = await DatrixoEquityToken.new(addressRe2KClr, uintmV5GGeX, {from: accounts[2]});
		const uintcLPyDh = BigInt("1047")
		const addresssfvIr5P = accounts[5]
		const addressP8Su7ix = accounts[4]
		const uintM430QA = BigInt("1652")
		const addressmOvee1 = accounts[2]
		const addressScCuUl = "0x0000000000000000000000000000000000000001"
		const uintngnUfwU = BigInt("738")
		const addresssi9mgiJ = accounts[0]
		const addressUXluBof = accounts[3]
		const boolXORoMR6 = await DatrixoEquityTokenLr22B2F.transferFrom.call(addressP8Su7ix, addresssfvIr5P, uintcLPyDh, {from: accounts[0]});
		const boolMqOXIFj = await DatrixoEquityTokenLr22B2F.transferFrom.call(addressScCuUl, addressmOvee1, uintM430QA, {from: accounts[0]});
		const addressarrayw2bZaRt = await DatrixoEquityTokenLr22B2F.getShareholdersArray.call({from: accounts[1]});
		const boolIzyHopC = await DatrixoEquityTokenLr22B2F.transfer.call(addresssi9mgiJ, uintngnUfwU, {from: accounts[2]});
		await DatrixoEquityTokenLr22B2F.afterStartTime.call({from: accounts[3]});
		const boolWgvKYyB = await DatrixoEquityTokenLr22B2F.removeShareholder.call(addressUXluBof, {from: accounts[3]});

		await expect(DatrixoEquityTokenLr22B2F.transferFrom.call(addressP8Su7ix, addresssfvIr5P, uintcLPyDh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressRIBkiWH = accounts[1]
		const uintQftMPrG = BigInt("1274")
		const DatrixoEquityTokenWrX1o5U = await DatrixoEquityToken.new(addressRIBkiWH, uintQftMPrG, {from: accounts[0]});
		const uintxXDKdQW = BigInt("1452")
		const addressyohCBcm = accounts[1]
		const uintLedJXBx = BigInt("2018")
		const uintQN040Ym = BigInt("96")
		const addressLELBV8L = "0x0000000000000000000000000000000000000001"
		const addressZVD1MEG = accounts[3]
		const uintcmwXd00 = BigInt("1708")
		const address2RgOqs = accounts[5]
		const addresslJAilD = accounts[3]
		const uintPdWcFb = BigInt("39")
		const addressK7R7Inn = accounts[2]
		const addressx1jJkC1 = accounts[5]
		const boolxhxCNTX = await DatrixoEquityTokenWrX1o5U.transfer.call(addressyohCBcm, uintxXDKdQW, {from: accounts[1]});
		const uintIkhpmAa = await DatrixoEquityTokenWrX1o5U.setStart.call(uintLedJXBx, {from: accounts[1]});
		const booldFPE0S = await DatrixoEquityTokenWrX1o5U.transferFrom.call(addressZVD1MEG, addressLELBV8L, uintQN040Ym, {from: accounts[5]});
		const boolHd7CkMm = await DatrixoEquityTokenWrX1o5U.transferFrom.call(addresslJAilD, address2RgOqs, uintcmwXd00, {from: accounts[2]});
		const boolEU59vO = await DatrixoEquityTokenWrX1o5U.transferFrom.call(addressx1jJkC1, addressK7R7Inn, uintPdWcFb, {from: accounts[3]});

		await expect(DatrixoEquityTokenWrX1o5U.transfer.call(addressyohCBcm, uintxXDKdQW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressQpFunrs = accounts[4]
		const uintkXVWXDs = BigInt("1444")
		const DatrixoEquityTokenaB89B0r = await DatrixoEquityToken.new(addressQpFunrs, uintkXVWXDs, {from: "0x0000000000000000000000000000000000000001"});
		const uintnbBSAQT = BigInt("348")
		const addressdQx0g8A = accounts[3]
		const uintWWQh7Lb = BigInt("1726")
		const addressdLO0zr = accounts[0]
		const addresszs1DX5n = accounts[2]
		const uintExtX3j = BigInt("1")
		const addressLqAkFib = accounts[1]
		const boolm11N5Ex = await DatrixoEquityTokenaB89B0r.transfer.call(addressdQx0g8A, uintnbBSAQT, {from: accounts[4]});
		const addressarrayKXyCTN6 = await DatrixoEquityTokenaB89B0r.getShareholdersArray.call({from: accounts[0]});
		const boolgQO0czp = await DatrixoEquityTokenaB89B0r.transfer.call(addressdLO0zr, uintWWQh7Lb, {from: accounts[3]});
		const booln0RVDwv = await DatrixoEquityTokenaB89B0r.removeShareholder.call(addresszs1DX5n, {from: accounts[5]});
		const boolnr28AHp = await DatrixoEquityTokenaB89B0r.transfer.call(addressLqAkFib, uintExtX3j, {from: accounts[0]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressRfYOwgl = accounts[1]
		const uintZrr4QSV = BigInt("1274")
		const DatrixoEquityTokenWrX1o5U = await DatrixoEquityToken.new(addressRfYOwgl, uintZrr4QSV, {from: accounts[0]});
		const uintQYdfZTE = BigInt("1452")
		const addresspzlmW5f = accounts[4]
		const addresspoNTRH8 = accounts[1]
		const uintL0Box09 = BigInt("39")
		const addressnBNheh3 = accounts[2]
		const addresshXq5x3l = accounts[5]
		const boolxhxCNTX = await DatrixoEquityTokenWrX1o5U.transfer.call(addresspzlmW5f, uintQYdfZTE, {from: accounts[1]});
		const addressarrayzJWL1lX = await DatrixoEquityTokenWrX1o5U.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const boolNp2tZ0 = await DatrixoEquityTokenWrX1o5U.removeShareholder.call(addresspoNTRH8, {from: accounts[1]});
		const boolEU59vO = await DatrixoEquityTokenWrX1o5U.transferFrom.call(addresshXq5x3l, addressnBNheh3, uintL0Box09, {from: accounts[3]});

		assert.equal(addressarrayzJWL1lX, )
		assert.equal(boolxhxCNTX, true)
		await expect(DatrixoEquityTokenWrX1o5U.removeShareholder.call(addresspoNTRH8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressJ7VAhCy = accounts[0]
		const uintki03Tlf = BigInt("963")
		const DatrixoEquityTokenofafobP = await DatrixoEquityToken.new(addressJ7VAhCy, uintki03Tlf, {from: accounts[1]});
		const uintjBI8vHD = BigInt("1187")
		const addressQ3qsEaw = accounts[4]
		const addressjOHS1qE = accounts[0]
		const addresstEJIzm = accounts[1]
		const boolhPlr9WN = await DatrixoEquityTokenofafobP.transferFrom.call(addressjOHS1qE, addressQ3qsEaw, uintjBI8vHD, {from: accounts[0]});
		const boolhKxW24D = await DatrixoEquityTokenofafobP.removeShareholder.call(addresstEJIzm, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenofafobP.afterStartTime.call({from: accounts[4]});

		assert.equal(boolhPlr9WN, true)
		await expect(DatrixoEquityTokenofafobP.removeShareholder.call(addresstEJIzm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})