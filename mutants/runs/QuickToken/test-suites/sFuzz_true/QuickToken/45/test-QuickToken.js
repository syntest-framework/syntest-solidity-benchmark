const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressRmsiZnR = accounts[1]
		const addressawaBUoj = accounts[1]
		const QuickTokenuD1rTgd = await QuickToken.new(addressRmsiZnR, addressawaBUoj, {from: accounts[3]});
		const uintCEbTwog = BigInt("1739")
		const addressNTdIZQr = accounts[2]
		const uintaD6BBWG = BigInt("89")
		const addressIy6g18W = accounts[4]
		const addressKKnG6Gl = accounts[4]
		const addressq8zK9gq = await QuickTokenuD1rTgd.mint.call(addressNTdIZQr, uintCEbTwog, {from: accounts[2]});
		const boolEsfIZTI = await QuickTokenuD1rTgd.transfer.call(addressIy6g18W, uintaD6BBWG, {from: accounts[3]});
		const addressvD6B5T = await QuickTokenuD1rTgd.setMinter.call(addressKKnG6Gl, {from: accounts[0]});

		await expect(QuickTokenuD1rTgd.mint.call(addressNTdIZQr, uintCEbTwog, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressvzjq9LU = accounts[5]
		const addresshjjefh6 = accounts[3]
		const QuickToken6FS4J8 = await QuickToken.new(addressvzjq9LU, addresshjjefh6, {from: "0x0000000000000000000000000000000000000001"});
		const uintdyy02Be = BigInt("2011")
		const addressfhhRxti = accounts[1]
		const addressAsQJrWD = accounts[5]
		const addressYR2GmWH = accounts[3]
		const addressqwpPPS3 = accounts[0]
		const addressOH8XC9X = accounts[2]
		const booluNHIrVh = await QuickToken6FS4J8.transfer.call(addressfhhRxti, uintdyy02Be, {from: accounts[5]});
		const uintscyLHHP = await QuickToken6FS4J8.allowance.call(addressYR2GmWH, addressAsQJrWD, {from: accounts[2]});
		const uintoQGWtWu = await QuickToken6FS4J8.allowance.call(addressOH8XC9X, addressqwpPPS3, {from: accounts[5]});
	});

	it('test for QuickToken', async () => {
		const addressu8JmxI = accounts[3]
		const addressF2Sn5pO = accounts[1]
		const QuickTokenV49pX6u = await QuickToken.new(addressu8JmxI, addressF2Sn5pO, {from: accounts[1]});
		const addresso2sIr9A = accounts[1]
		const addresslyv1Q2D = accounts[3]
		const addressob5dYM8 = accounts[3]
		const uintfYN4n5A = BigInt("1588")
		const addresseDBSLv = accounts[4]
		const addressJ62kDI3 = accounts[3]
		const addressyvk3Yc = accounts[5]
		const uintA6D70Iv = BigInt("130")
		const addressmgRUztE = accounts[2]
		const uintTUk9umr = BigInt("840")
		const addressAObgg8Y = accounts[3]
		const uintx6x900O = await QuickTokenV49pX6u.allowance.call(addresslyv1Q2D, addresso2sIr9A, {from: accounts[1]});
		const addressJmq49Tr = await QuickTokenV49pX6u.setMinter.call(addressob5dYM8, {from: accounts[4]});
		const boolw1ls8g = await QuickTokenV49pX6u.transferFrom.call(addressJ62kDI3, addresseDBSLv, uintfYN4n5A, {from: "0x0000000000000000000000000000000000000001"});
		const uintLLo6kiu = await QuickTokenV49pX6u.balanceOf.call(addressyvk3Yc, {from: accounts[0]});
		const boolRrtIgK2 = await QuickTokenV49pX6u.approve.call(addressmgRUztE, uintA6D70Iv, {from: accounts[1]});
		const addressIIsH37p = await QuickTokenV49pX6u.mint.call(addressAObgg8Y, uintTUk9umr, {from: accounts[0]});

		assert.equal(uintx6x900O, BigInt("0"))
		await expect(QuickTokenV49pX6u.setMinter.call(addressob5dYM8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressFy24WnG = accounts[1]
		const addressX1HbcFW = accounts[5]
		const QuickTokeniyaBbI = await QuickToken.new(addressFy24WnG, addressX1HbcFW, {from: accounts[0]});
		const uintOg1zwzr = BigInt("1235")
		const addressP5PMIjB = accounts[3]
		const uintRi2JUVk = BigInt("1518")
		const addressBMaCLA = accounts[3]
		const uintSle9KpH = BigInt("541")
		const addressGPaEDMR = accounts[3]
		const uintPLcTH5X = BigInt("928")
		const addressrsp8tP1 = accounts[1]
		const boolYyP72uX = await QuickTokeniyaBbI.transfer.call(addressP5PMIjB, uintOg1zwzr, {from: accounts[3]});
		const boolkqpulo1 = await QuickTokeniyaBbI.transfer.call(addressBMaCLA, uintRi2JUVk, {from: accounts[4]});
		const addressirsxkKT = await QuickTokeniyaBbI.mint.call(addressGPaEDMR, uintSle9KpH, {from: accounts[4]});
		const boolDy4sAjL = await QuickTokeniyaBbI.transfer.call(addressrsp8tP1, uintPLcTH5X, {from: accounts[0]});

		await expect(QuickTokeniyaBbI.transfer.call(addressP5PMIjB, uintOg1zwzr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressTPU0MmP = accounts[1]
		const addressydoSgXh = accounts[3]
		const QuickTokenTC6uAA1 = await QuickToken.new(addressTPU0MmP, addressydoSgXh, {from: accounts[0]});
		const uintDYlFSUX = BigInt("1363")
		const addressnENYqwA = accounts[4]
		const uintdeVF2a4 = BigInt("1171")
		const addressIJLIi9 = accounts[1]
		const uintpZ4UbNW = BigInt("1994")
		const addressRWWX4WD = "0x0000000000000000000000000000000000000001"
		const addressofA730o = accounts[0]
		const addressNYgOEPl = accounts[4]
		const addressP44yCA9 = accounts[5]
		const bools9tDl1D = await QuickTokenTC6uAA1.approve.call(addressnENYqwA, uintDYlFSUX, {from: accounts[4]});
		const boolBa64kG = await QuickTokenTC6uAA1.transfer.call(addressIJLIi9, uintdeVF2a4, {from: accounts[4]});
		const boolsyaclm9 = await QuickTokenTC6uAA1.transfer.call(addressRWWX4WD, uintpZ4UbNW, {from: "0x0000000000000000000000000000000000000001"});
		const addressbym9z0y = await QuickTokenTC6uAA1.setMinter.call(addressofA730o, {from: accounts[2]});
		const uintPRfDYEw = await QuickTokenTC6uAA1.allowance.call(addressP44yCA9, addressNYgOEPl, {from: accounts[4]});

		assert.equal(bools9tDl1D, true)
		await expect(QuickTokenTC6uAA1.transfer.call(addressIJLIi9, uintdeVF2a4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressbFZKuWr = accounts[5]
		const addressnHRsj2P = accounts[0]
		const QuickTokencZCJaZS = await QuickToken.new(addressbFZKuWr, addressnHRsj2P, {from: accounts[0]});
		const uintJqDNGEo = BigInt("1785")
		const addressakRCBfv = accounts[1]
		const uintdOEXSQo = BigInt("1765")
		const addresskivLSU1 = accounts[0]
		const addresskm7sCik = accounts[0]
		const addressuMhPA0 = accounts[3]
		const addressEeFJjAs = accounts[0]
		const uinth7HII98 = BigInt("355")
		const addressbR5tDv2 = accounts[2]
		const addressOYkVpiA = accounts[4]
		const boolNSf0Rpt = await QuickTokencZCJaZS.approve.call(addressakRCBfv, uintJqDNGEo, {from: accounts[0]});
		const boolHGmNaSu = await QuickTokencZCJaZS.transferFrom.call(addresskm7sCik, addresskivLSU1, uintdOEXSQo, {from: accounts[0]});
		const uinte0H8Wih = await QuickTokencZCJaZS.allowance.call(addressEeFJjAs, addressuMhPA0, {from: accounts[4]});
		const addressF6IjwfE = await QuickTokencZCJaZS.mint.call(addressbR5tDv2, uinth7HII98, {from: "0x0000000000000000000000000000000000000001"});
		const uintsaxrJpk = await QuickTokencZCJaZS.balanceOf.call(addressOYkVpiA, {from: accounts[1]});

		assert.equal(boolNSf0Rpt, true)
		await expect(QuickTokencZCJaZS.transferFrom.call(addresskm7sCik, addresskivLSU1, uintdOEXSQo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressjURvZUr = accounts[1]
		const addressDQUEUP2 = accounts[5]
		const QuickTokenl8aB9l = await QuickToken.new(addressjURvZUr, addressDQUEUP2, {from: accounts[2]});
		const uintjfAUXNh = BigInt("1695")
		const addressh0dafCl = accounts[2]
		const addressqn4acvZ = "0x0000000000000000000000000000000000000001"
		const boolPaEGWB = await QuickTokenl8aB9l.approve.call(addressh0dafCl, uintjfAUXNh, {from: accounts[2]});
		const uintDyEC3YS = await QuickTokenl8aB9l.balanceOf.call(addressqn4acvZ, {from: accounts[3]});

		assert.equal(boolPaEGWB, true)
		assert.equal(uintDyEC3YS, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressHpKer9S = "0x0000000000000000000000000000000000000001"
		const addressOA6PWjA = accounts[0]
		const QuickTokenSWZQJG7 = await QuickToken.new(addressHpKer9S, addressOA6PWjA, {from: accounts[0]});
		const uintrkz6b0B = BigInt("1439")
		const addressVslHUTt = accounts[3]
		const addressv02VnW8 = accounts[0]
		const addressmLy8L5Y = accounts[0]
		const addressDWZwIc5 = "0x0000000000000000000000000000000000000001"
		const boolbx0bRSs = await QuickTokenSWZQJG7.transferFrom.call(addressv02VnW8, addressVslHUTt, uintrkz6b0B, {from: accounts[4]});
		const addressvnBDMA0 = await QuickTokenSWZQJG7.setMinter.call(addressmLy8L5Y, {from: accounts[4]});
		const addresscAJrLQF = await QuickTokenSWZQJG7.setMinter.call(addressDWZwIc5, {from: accounts[3]});

		await expect(QuickTokenSWZQJG7.transferFrom.call(addressv02VnW8, addressVslHUTt, uintrkz6b0B, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresszU1ttKJ = accounts[4]
		const addresscKeSEkF = accounts[5]
		const QuickTokenOqDXOb = await QuickToken.new(addresszU1ttKJ, addresscKeSEkF, {from: accounts[0]});
		const uintPGgEaZJ = BigInt("1984")
		const addressL2ElJpK = accounts[3]
		const uintQmVqk5g = BigInt("11")
		const addressed1Z1JA = accounts[4]
		const address6w7bg1 = accounts[0]
		const addressuNPJPai = accounts[1]
		const uintllyBrqR = BigInt("607")
		const addressb8vaL4j = accounts[1]
		const addressQhnlpgr = accounts[3]
		const boolSipTkUo = await QuickTokenOqDXOb.transfer.call(addressL2ElJpK, uintPGgEaZJ, {from: accounts[4]});
		const boolm6ayAWG = await QuickTokenOqDXOb.transferFrom.call(address6w7bg1, addressed1Z1JA, uintQmVqk5g, {from: "0x0000000000000000000000000000000000000001"});
		const uintQzw8Lov = await QuickTokenOqDXOb.balanceOf.call(addressuNPJPai, {from: accounts[2]});
		const booltcFNxke = await QuickTokenOqDXOb.transferFrom.call(addressQhnlpgr, addressb8vaL4j, uintllyBrqR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolSipTkUo, true)
		await expect(QuickTokenOqDXOb.transferFrom.call(address6w7bg1, addressed1Z1JA, uintQmVqk5g, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressN2i59OH = accounts[0]
		const addressIv3qzeC = accounts[2]
		const QuickTokenHc6a8T0 = await QuickToken.new(addressN2i59OH, addressIv3qzeC, {from: accounts[3]});
		const addressOd6uh34 = accounts[5]
		const addressjDiDNJ8 = accounts[3]
		const uintqt8NhEc = BigInt("1208")
		const addressFNFr2e0 = accounts[1]
		const addressA8QmLma = accounts[1]
		const addressbQLqfg3 = accounts[0]
		const addressVVUGwT = accounts[2]
		const addressKuXia91 = accounts[1]
		const uintPyeGTnS = await QuickTokenHc6a8T0.allowance.call(addressjDiDNJ8, addressOd6uh34, {from: accounts[2]});
		const addresspteHv9v = await QuickTokenHc6a8T0.mint.call(addressFNFr2e0, uintqt8NhEc, {from: accounts[2]});
		const uinth7fiYP = await QuickTokenHc6a8T0.allowance.call(addressbQLqfg3, addressA8QmLma, {from: accounts[1]});
		const uintYJGUnwJ = await QuickTokenHc6a8T0.allowance.call(addressKuXia91, addressVVUGwT, {from: accounts[5]});

		assert.equal(uintPyeGTnS, BigInt("0"))
		assert.equal(uintYJGUnwJ, BigInt("0"))
		assert.equal(uinth7fiYP, BigInt("0"))
	});
})