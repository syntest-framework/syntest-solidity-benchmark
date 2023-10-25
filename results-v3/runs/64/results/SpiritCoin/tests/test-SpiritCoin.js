const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressRvcBzBR = accounts[2]
		const addressl3OWANh = accounts[5]
		const SpiritCoinaK69WC = await SpiritCoin.new(addressRvcBzBR, addressl3OWANh, {from: accounts[0]});
		const addresskTKCyaR = accounts[3]
		const addressDPFlUxf = accounts[1]
		const addressCBzCKbA = accounts[1]
		const addressrDQrMp = accounts[4]
		const uintWtWGrDT = BigInt("870")
		const addressnzkjIu1 = accounts[1]
		const uintgsfImq1 = BigInt("779")
		const addressIHjWXO = accounts[2]
		const uintiwxkQa = BigInt("1170")
		const addressm27qoPt = accounts[0]
		const uintzOCTgmM = await SpiritCoinaK69WC.allowance.call(addressDPFlUxf, addresskTKCyaR, {from: "0x0000000000000000000000000000000000000001"});
		const uintwTr18Ds = await SpiritCoinaK69WC.allowance.call(addressrDQrMp, addressCBzCKbA, {from: accounts[0]});
		const addressxUCg6iB = await SpiritCoinaK69WC.mint.call(addressnzkjIu1, uintWtWGrDT, {from: accounts[4]});
		const boolEsuTRrG = await SpiritCoinaK69WC.approve.call(addressIHjWXO, uintgsfImq1, {from: accounts[4]});
		const boolpegWqEN = await SpiritCoinaK69WC.transfer.call(addressm27qoPt, uintiwxkQa, {from: accounts[2]});

		assert.equal(uintwTr18Ds, BigInt("0"))
		assert.equal(uintzOCTgmM, BigInt("0"))
		await expect(SpiritCoinaK69WC.mint.call(addressnzkjIu1, uintWtWGrDT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresslfGCx62 = accounts[3]
		const addressyP2Fu7r = accounts[0]
		const SpiritCoinya2dDio = await SpiritCoin.new(addresslfGCx62, addressyP2Fu7r, {from: accounts[1]});
		const uintf6s91u5 = BigInt("788")
		const addressvXBMCa9 = accounts[2]
		const addressTQP3cG9 = accounts[2]
		const uintYtz4vgj = BigInt("470")
		const addressphhPA6d = accounts[5]
		const addressPmUqaLu = "0x0000000000000000000000000000000000000001"
		const boolBHr2Yi = await SpiritCoinya2dDio.approve.call(addressvXBMCa9, uintf6s91u5, {from: accounts[5]});
		const addressX7RaBLT = await SpiritCoinya2dDio.setMinter.call(addressTQP3cG9, {from: accounts[0]});
		const boolvQMkPSr = await SpiritCoinya2dDio.transferFrom.call(addressPmUqaLu, addressphhPA6d, uintYtz4vgj, {from: accounts[3]});

		assert.equal(boolBHr2Yi, true)
		await expect(SpiritCoinya2dDio.transferFrom.call(addressPmUqaLu, addressphhPA6d, uintYtz4vgj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressPtSv5Gi = accounts[3]
		const addressYy56tpR = accounts[3]
		const SpiritCoinDXSM8ia = await SpiritCoin.new(addressPtSv5Gi, addressYy56tpR, {from: accounts[1]});
		const uintVopdYJa = BigInt("1705")
		const addressI58H6FV = "0x0000000000000000000000000000000000000001"
		const addressER3rjz = accounts[0]
		const addressjtYRSmt = accounts[3]
		const addressnLKXgLu = accounts[3]
		const uintXNOeK8A = BigInt("1823")
		const addressENn5G4C = accounts[5]
		const uintqAno0BU = BigInt("1509")
		const addressqDM1yM = accounts[3]
		const boolyyLEDis = await SpiritCoinDXSM8ia.approve.call(addressI58H6FV, uintVopdYJa, {from: accounts[3]});
		const uintzX1q2XL = await SpiritCoinDXSM8ia.balanceOf.call(addressER3rjz, {from: accounts[5]});
		const uintkEdTE6q = await SpiritCoinDXSM8ia.allowance.call(addressnLKXgLu, addressjtYRSmt, {from: accounts[4]});
		const boolgjtL7nT = await SpiritCoinDXSM8ia.transfer.call(addressENn5G4C, uintXNOeK8A, {from: "0x0000000000000000000000000000000000000001"});
		const booltxESnUW = await SpiritCoinDXSM8ia.approve.call(addressqDM1yM, uintqAno0BU, {from: accounts[3]});

		assert.equal(boolyyLEDis, true)
		assert.equal(uintkEdTE6q, BigInt("0"))
		assert.equal(uintzX1q2XL, BigInt("0"))
		await expect(SpiritCoinDXSM8ia.transfer.call(addressENn5G4C, uintXNOeK8A, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressOfhwHlL = accounts[0]
		const addressLfaKYYi = accounts[2]
		const SpiritCoiniYjMKnI = await SpiritCoin.new(addressOfhwHlL, addressLfaKYYi, {from: accounts[1]});
		const address3Btopk = accounts[1]
		const addresszw8HG0p = accounts[5]
		const addressiS1zW5X = accounts[2]
		const uintJtZaHPW = BigInt("1708")
		const addressAHq31OG = accounts[4]
		const uintlYBMrVQ = BigInt("1769")
		const addressq22jeyv = accounts[3]
		const addressi35wvbd = "0x0000000000000000000000000000000000000001"
		const addressOHzgvxr = await SpiritCoiniYjMKnI.setMinter.call(address3Btopk, {from: accounts[2]});
		const uintPWojxBb = await SpiritCoiniYjMKnI.balanceOf.call(addresszw8HG0p, {from: accounts[4]});
		const addressI3S6BCX = await SpiritCoiniYjMKnI.setMinter.call(addressiS1zW5X, {from: accounts[5]});
		const boolkyVeUBz = await SpiritCoiniYjMKnI.transfer.call(addressAHq31OG, uintJtZaHPW, {from: accounts[3]});
		const boolRaWgbZ5 = await SpiritCoiniYjMKnI.transferFrom.call(addressi35wvbd, addressq22jeyv, uintlYBMrVQ, {from: accounts[1]});

		assert.equal(uintPWojxBb, BigInt("0"))
		await expect(SpiritCoiniYjMKnI.setMinter.call(addressiS1zW5X, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressO8CMxIw = accounts[2]
		const addressL0SFZsv = accounts[5]
		const SpiritCoinaK69WC = await SpiritCoin.new(addressO8CMxIw, addressL0SFZsv, {from: accounts[0]});
		const addressAVLLMmP = accounts[3]
		const addressAjZEhbL = accounts[1]
		const addressxw0ohf = accounts[4]
		const address5NNJ6T = accounts[4]
		const uintVLiveJI = BigInt("779")
		const addressy6Hf80q = accounts[2]
		const uintDI24D7v = BigInt("1170")
		const addressvitj7Nd = accounts[0]
		const addressEx0ssIn = accounts[2]
		const uintRmgyHG = BigInt("394")
		const addressYhXne5G = accounts[4]
		const uintzOCTgmM = await SpiritCoinaK69WC.allowance.call(addressAjZEhbL, addressAVLLMmP, {from: "0x0000000000000000000000000000000000000001"});
		const uintwTr18Ds = await SpiritCoinaK69WC.allowance.call(address5NNJ6T, addressxw0ohf, {from: accounts[0]});
		const boolEsuTRrG = await SpiritCoinaK69WC.approve.call(addressy6Hf80q, uintVLiveJI, {from: accounts[4]});
		const boolpegWqEN = await SpiritCoinaK69WC.transfer.call(addressvitj7Nd, uintDI24D7v, {from: accounts[2]});
		const uintMBDZN81 = await SpiritCoinaK69WC.balanceOf.call(addressEx0ssIn, {from: accounts[1]});
		const addressOwtHRyf = await SpiritCoinaK69WC.mint.call(addressYhXne5G, uintRmgyHG, {from: accounts[3]});

		assert.equal(boolEsuTRrG, true)
		assert.equal(boolpegWqEN, true)
		assert.equal(uintMBDZN81, BigInt("10000000000000000000000000"))
		assert.equal(uintwTr18Ds, BigInt("0"))
		assert.equal(uintzOCTgmM, BigInt("0"))
		await expect(SpiritCoinaK69WC.mint.call(addressYhXne5G, uintRmgyHG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressdCvZ84O = accounts[0]
		const addressZr2tRCx = accounts[4]
		const SpiritCoinkis9tDt = await SpiritCoin.new(addressdCvZ84O, addressZr2tRCx, {from: accounts[2]});
		const addresscTByPlo = accounts[4]
		const address3XA96j = accounts[0]
		const uintJPgg8IP = BigInt("100")
		const addressP2cuW61 = accounts[3]
		const uintsNHo3ar = BigInt("354")
		const address36simZ = accounts[5]
		const uintQxHiKjQ = BigInt("1777")
		const addressFYoS1Nw = accounts[2]
		const uintCOE28Nd = await SpiritCoinkis9tDt.allowance.call(address3XA96j, addresscTByPlo, {from: accounts[2]});
		const address0Mvepc = await SpiritCoinkis9tDt.mint.call(addressP2cuW61, uintJPgg8IP, {from: accounts[4]});
		const addressIMfbB8k = await SpiritCoinkis9tDt.mint.call(address36simZ, uintsNHo3ar, {from: accounts[5]});
		const addressC6pjyNi = await SpiritCoinkis9tDt.mint.call(addressFYoS1Nw, uintQxHiKjQ, {from: accounts[3]});

		assert.equal(uintCOE28Nd, BigInt("0"))
		await expect(SpiritCoinkis9tDt.mint.call(address36simZ, uintsNHo3ar, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressW6fTJJ4 = accounts[4]
		const addressEX5iPn7 = accounts[0]
		const SpiritCoinEg1tjsF = await SpiritCoin.new(addressW6fTJJ4, addressEX5iPn7, {from: "0x0000000000000000000000000000000000000001"});
		const addressai2Qag3 = accounts[4]
		const uintRGmpBIc = BigInt("778")
		const addressiJVw4YX = accounts[5]
		const addressbXEWgwP = accounts[2]
		const addressygpqRTj = accounts[4]
		const addressOOZrpy1 = accounts[2]
		const addresseFRtyXB = accounts[2]
		const uintyfKwpKb = await SpiritCoinEg1tjsF.balanceOf.call(addressai2Qag3, {from: accounts[3]});
		const boolV5phC6y = await SpiritCoinEg1tjsF.approve.call(addressiJVw4YX, uintRGmpBIc, {from: accounts[1]});
		const uintqSp2ErV = await SpiritCoinEg1tjsF.allowance.call(addressygpqRTj, addressbXEWgwP, {from: "0x0000000000000000000000000000000000000001"});
		const uintMVhW3zO = await SpiritCoinEg1tjsF.allowance.call(addresseFRtyXB, addressOOZrpy1, {from: accounts[1]});
	});
})