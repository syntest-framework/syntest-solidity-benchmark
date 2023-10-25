const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintjjjEvjs = BigInt("1121")
		const stringRbkKUeu = "BTGrbRIoMF2jcljrOSHzYf2wXANGSwAdOURUXLzb8gnSmvSWTxdVEwUPbPORu2C71iI5Y4McGUzGguBFKe8P"
		const stringmMbJliR = "QQLZpxd74ciPmNesOsTq4tbaU7oS45L1WlCyq8Ceqn7Ux1xHgZy3x1D5bi8nS82w4cLympQoN8oNiMcjdsSD3sVcQgkrp7J"
		const GFCbrlB5i5 = await GFC.new(uintjjjEvjs, stringRbkKUeu, stringmMbJliR, {from: accounts[0]});
		const bytewxh4Yo4 = "0x1d0d1a011816080c0a1c0c07111d"
		const uintwwIW6a8 = BigInt("1485")
		const addressnXANOD = accounts[3]
		const uintRQfY2Fu = BigInt("1334")
		const addresswDAa1Bm = accounts[0]
		const addressG4cX9HH = "0x0000000000000000000000000000000000000001"
//		const boolu1O4Kri = await GFCbrlB5i5.approveAndCall.call(addressnXANOD, uintwwIW6a8, bytewxh4Yo4, {from: accounts[1]});
//		const boolMzGkVg = await GFCbrlB5i5.transferFrom.call(addressG4cX9HH, addresswDAa1Bm, uintRQfY2Fu, {from: accounts[3]});

		await expect(GFCbrlB5i5.approveAndCall.call(addressnXANOD, uintwwIW6a8, bytewxh4Yo4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintsNerw7 = BigInt("921")
		const stringfWYaahR = "rFIzqtVEjvR1PdhnBvAhwBdY7IpXdOEqBfD98TL40hKzqTsFQjYmo5i0XZ8ou9xiYqvPh5bCc"
		const stringU44XUx = "K5QI5y7N1DTEw39MYPHsS5HHwtXbQxgHrTBwqJRoTQy"
		const GFCTj4Mrq9 = await GFC.new(uintsNerw7, stringfWYaahR, stringU44XUx, {from: accounts[0]});
		const uintybWVs2 = BigInt("1152")
		const byteuYzBinz = "0x1b0e0e11080f0a051f1007160f191f0f201c1b1f120f0f"
		const uintfymE9A = BigInt("1026")
		const addressvH6Xykx = accounts[3]
		const uinthSjpNCp = BigInt("426")
		const addressTqhzigA = accounts[1]
		const uintRfRkHwb = BigInt("46")
		const uintASx58XU = BigInt("216")
		const addressvN53e3a = accounts[1]
		const uintZrydLN = BigInt("737")
		const addressEscVQy = "0x0000000000000000000000000000000000000001"
//		const boole9QcVEX = await GFCTj4Mrq9.burn.call(uintybWVs2, {from: accounts[4]});
//		const boolbYMOqlF = await GFCTj4Mrq9.approveAndCall.call(addressvH6Xykx, uintfymE9A, byteuYzBinz, {from: accounts[3]});
//		const booldahxkB6 = await GFCTj4Mrq9.transfer.call(addressTqhzigA, uinthSjpNCp, {from: accounts[1]});
//		const boolnzVQ5EA = await GFCTj4Mrq9.burn.call(uintRfRkHwb, {from: accounts[2]});
//		const boolntbgjm6 = await GFCTj4Mrq9.transfer.call(addressvN53e3a, uintASx58XU, {from: accounts[1]});
//		const boolyho9Vco = await GFCTj4Mrq9.transfer.call(addressEscVQy, uintZrydLN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCTj4Mrq9.burn.call(uintybWVs2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uinticzMPtZ = BigInt("1275")
		const string8BAT4E = "3NoY2Ppd7QqStcBpun5TSd"
		const stringRaJ3mx6 = "MELLalixtTiTFSHJEKicPwbwD6IPsgShg8eInwWtYHH5IRT4W4Os54m5Tqz3uFlIW0qolob6pwalldSMNP9o"
		const GFCm3jN1hY = await GFC.new(uinticzMPtZ, string8BAT4E, stringRaJ3mx6, {from: accounts[1]});
		const uintK5PZuJ2 = BigInt("1242")
		const addressgo4mSE = accounts[3]
		const addressaZF1Oe5 = accounts[2]
		const byteSmRvxP0 = "0x1e1b070c001514"
		const uintwmxW0mO = BigInt("159")
		const addresssJGWgdm = accounts[4]
		const uintVA7ZLm8 = BigInt("560")
		const addressgolLaQX = accounts[3]
		const uintytaQrrU = BigInt("655")
		const addressm9Yf8eZ = accounts[0]
		const addressdArPKcW = accounts[4]
		const uinty3Diqp = BigInt("512")
//		const boolWLFHAV0 = await GFCm3jN1hY.transferFrom.call(addressaZF1Oe5, addressgo4mSE, uintK5PZuJ2, {from: accounts[0]});
//		const boolSvcKg1D = await GFCm3jN1hY.approveAndCall.call(addresssJGWgdm, uintwmxW0mO, byteSmRvxP0, {from: accounts[0]});
//		const boolHSnJ4NN = await GFCm3jN1hY.transfer.call(addressgolLaQX, uintVA7ZLm8, {from: accounts[3]});
//		const boolOTDiI7a = await GFCm3jN1hY.transferFrom.call(addressdArPKcW, addressm9Yf8eZ, uintytaQrrU, {from: accounts[1]});
//		const boollD1f1mC = await GFCm3jN1hY.burn.call(uinty3Diqp, {from: accounts[3]});

		await expect(GFCm3jN1hY.transferFrom.call(addressaZF1Oe5, addressgo4mSE, uintK5PZuJ2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintmBrpRRu = BigInt("1121")
		const stringRbkKUeu = "BTGrbRIoMF2jcljrOSHzYf2wXANGSwAdOURUXLzb8gnSmvSWTxdVEwUPbPORu2C71iI5Y4McGUzGguBFKe8P"
		const stringmMbJliR = "QQLZpxd74ciPmNesOsTq4tbaU7oS45L1WlCyq8Ceqn7Ux1xHgZy3x1D5bi8nS82w4cLympQoN8oNiMcjdsSD3sVcQgkrp7J"
		const GFCbrlB5i5 = await GFC.new(uintmBrpRRu, stringRbkKUeu, stringmMbJliR, {from: accounts[0]});
		const uintIYSp0Fd = BigInt("1655")
		const addressCkT0zwj = accounts[1]
		const bytekK2TV5u = "0x1d0d1a011816080c0a1c0c07111d"
		const uintkWONqn9 = BigInt("1485")
		const addresstqLbpgu = accounts[3]
		const uintB022bCQ = BigInt("1201")
		const uintHk0cJex = BigInt("442")
		const addressJzbrwuV = accounts[3]
		const addressE3lw6bo = accounts[0]
		const uintB9gAsLb = BigInt("1364")
		const addresstC5KAOY = accounts[0]
		const addressXHFFDih = "0x0000000000000000000000000000000000000001"
		const boolt0Zkbmg = await GFCbrlB5i5.transfer.call(addressCkT0zwj, uintIYSp0Fd, {from: accounts[0]});
//		const boolu1O4Kri = await GFCbrlB5i5.approveAndCall.call(addresstqLbpgu, uintkWONqn9, bytekK2TV5u, {from: accounts[1]});
//		const booldG1zKKd = await GFCbrlB5i5.burn.call(uintB022bCQ, {from: accounts[2]});
//		const boolx7HoZlj = await GFCbrlB5i5.transferFrom.call(addressE3lw6bo, addressJzbrwuV, uintHk0cJex, {from: accounts[1]});
//		const boolMzGkVg = await GFCbrlB5i5.transferFrom.call(addressXHFFDih, addresstC5KAOY, uintB9gAsLb, {from: accounts[3]});

		assert.equal(boolt0Zkbmg, true)
		await expect(GFCbrlB5i5.approveAndCall.call(addresstqLbpgu, uintkWONqn9, bytekK2TV5u, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintWXvZEmZ = BigInt("1121")
		const stringRbkKUeu = "BTGrbRIoMF2jcljrOSHzYf2wXANGSwAdOURUXLzb8gnSmvSWTxdVEwUPbPORu2C71iI5Y4McGUzGguBFKe8P"
		const stringmMbJliR = "QQLZpxd74ciPmNesOsTq4tbaU7oS45L1WlCyq8Ceqn7Ux1xHgZy3x1D5bi8nS82w4cLympQoN8oNiMcjdsSD3sVcQgkrp7J"
		const GFCbrlB5i5 = await GFC.new(uintWXvZEmZ, stringRbkKUeu, stringmMbJliR, {from: accounts[0]});
		const uinti62cLp4 = BigInt("1")
		const addressoESpzQX = accounts[1]
		const uintDZyA6oh = BigInt("488")
		const address197D9P = "0x0000000000000000000000000000000000000001"
		const bytetf2qGU1 = "0x1d0d1affffffff1816080c0a1c0c07111d"
		const uintUDdR2mW = BigInt("1498")
		const addresscuTduw = accounts[3]
		const boolTurkUea = await GFCbrlB5i5.approve.call(addressoESpzQX, uinti62cLp4, {from: accounts[4]});
//		const boolzBUK6pb = await GFCbrlB5i5.burnFrom.call(address197D9P, uintDZyA6oh, {from: accounts[0]});
//		const boolu1O4Kri = await GFCbrlB5i5.approveAndCall.call(addresscuTduw, uintUDdR2mW, bytetf2qGU1, {from: accounts[1]});

		assert.equal(boolTurkUea, true)
		await expect(GFCbrlB5i5.burnFrom.call(address197D9P, uintDZyA6oh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintP5zkI1X = BigInt("981")
		const stringOOe96gl = "m1BC1XV3DFAGtfHR1BeUTCoJYyv65Fl"
		const stringYQur5lh = "L7IJ7KDEfAW"
		const GFCnp8gWnQ = await GFC.new(uintP5zkI1X, stringOOe96gl, stringYQur5lh, {from: "0x0000000000000000000000000000000000000001"});
		const uintyWJuNrh = BigInt("344")
		const addressBC1E9IB = accounts[1]
		const addressOyS0Mua = accounts[2]
		const uintDNOwvJY = BigInt("1297")
		const addresslPmNM8T = accounts[0]
		const addressh358RMO = accounts[1]
		const uintMtjBbgY = BigInt("900")
		const addresspIH0fPP = accounts[4]
		const uintElmbKPC = BigInt("1932")
		const addressOjqDUVa = accounts[0]
		const boolagE2QIz = await GFCnp8gWnQ.transferFrom.call(addressOyS0Mua, addressBC1E9IB, uintyWJuNrh, {from: accounts[1]});
		const boolnhmtMHO = await GFCnp8gWnQ.transferFrom.call(addressh358RMO, addresslPmNM8T, uintDNOwvJY, {from: accounts[0]});
		const boolcqBEbPO = await GFCnp8gWnQ.transfer.call(addresspIH0fPP, uintMtjBbgY, {from: accounts[4]});
		const boolJbX900D = await GFCnp8gWnQ.approve.call(addressOjqDUVa, uintElmbKPC, {from: accounts[0]});
	});
})