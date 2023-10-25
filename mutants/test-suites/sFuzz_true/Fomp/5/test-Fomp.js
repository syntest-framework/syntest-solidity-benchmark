const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressvGyUdbX = accounts[0]
		const FomppqgTpKe = await Fomp.new(addressvGyUdbX, {from: accounts[1]});
		const uintkH5vOE4 = BigInt("1061")
		const addressRpcg0Y = accounts[4]
		const addresshEwD8RP = accounts[3]
//		const boolGMlDys3 = await FomppqgTpKe.transfer.call(addressRpcg0Y, uintkH5vOE4, {from: accounts[2]});
//		const uint96DnondO = await FomppqgTpKe.getCurrentVotes.call(addresshEwD8RP, {from: accounts[1]});

		await expect(FomppqgTpKe.transfer.call(addressRpcg0Y, uintkH5vOE4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressZcaG8ER = accounts[2]
		const FompEN9jW4I = await Fomp.new(addressZcaG8ER, {from: accounts[2]});
		const addressUdII0TZ = accounts[1]
		const uinteGtY5f = BigInt("699")
		const addressUE8pZWv = accounts[4]
		const uintU1V9UzX = BigInt("2035")
		const addressXQG8f5 = "0x0000000000000000000000000000000000000001"
		const addressu8swwVB = accounts[0]
		const uintNRkzqik = await FompEN9jW4I.balanceOf.call(addressUdII0TZ, {from: accounts[4]});
		const boolmFY6WvN = await FompEN9jW4I.approve.call(addressUE8pZWv, uinteGtY5f, {from: accounts[2]});
//		const boolMOOsUH = await FompEN9jW4I.transferFrom.call(addressu8swwVB, addressXQG8f5, uintU1V9UzX, {from: accounts[0]});

		assert.equal(boolmFY6WvN, true)
		assert.equal(uintNRkzqik, BigInt("0"))
		await expect(FompEN9jW4I.transferFrom.call(addressu8swwVB, addressXQG8f5, uintU1V9UzX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressUspFP8 = "0x0000000000000000000000000000000000000001"
		const FompU66IUj = await Fomp.new(addressUspFP8, {from: accounts[0]});
		const addressaxILJM6 = accounts[1]
		const uintUkZbqav = BigInt("531")
		const addressu8m7Trg = accounts[3]
		const addressO2bOCDL = accounts[1]
		const uint96Z7Kbmlk = await FompU66IUj.getCurrentVotes.call(addressaxILJM6, {from: accounts[2]});
//		const boolrla4R8H = await FompU66IUj.transferFrom.call(addressO2bOCDL, addressu8m7Trg, uintUkZbqav, {from: accounts[0]});

		assert.equal(uint96Z7Kbmlk, BigInt("0"))
		await expect(FompU66IUj.transferFrom.call(addressO2bOCDL, addressu8m7Trg, uintUkZbqav, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressuVsMz3X = accounts[4]
		const FompQo5ieH4 = await Fomp.new(addressuVsMz3X, {from: accounts[4]});
		const uintnBJ9zwe = BigInt("851")
		const addressTWSocYc = accounts[0]
		const addressSznW5Wf = accounts[4]
		const addressQrmIDPu = accounts[3]
		const addressiBIrDE4 = accounts[3]
		const bool2fy0qV = await FompQo5ieH4.approve.call(addressTWSocYc, uintnBJ9zwe, {from: accounts[4]});
		const addressCda3jjj = await FompQo5ieH4.delegate.call(addressSznW5Wf, {from: accounts[1]});
		const uintv1kAO41 = await FompQo5ieH4.allowance.call(addressiBIrDE4, addressQrmIDPu, {from: accounts[1]});

		assert.equal(bool2fy0qV, true)
		assert.equal(uintv1kAO41, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressKXMdXmw = accounts[4]
		const FompkXbJ8vC = await Fomp.new(addressKXMdXmw, {from: accounts[0]});
		const byteHatrwBc = "0x1b010b0312010b1c1a051e09101c1a051d18131a080a15090a1c0e011508161f"
		const bytedtV77OL = "0x18180b141119071a1a0b111e10181007200e1f03160c19171205070509130701"
		const uintb2pC5Sm = BigInt("229")
		const uintphrdyMi = BigInt("977")
		const uintpv0AiZR = BigInt("1125")
		const addressfBal0X = accounts[4]
		const addressNGxYrNN = accounts[0]
		const addressrlzt21h = accounts[0]
		const addressX71538g = accounts[4]
		const addressMOyALmq = accounts[3]
		const addresslVYuDqG = accounts[4]
		const uintygjJT09 = BigInt("568")
		const addressdas7hjq = accounts[1]
		const addressZ7rYDC = accounts[1]
//		const addressMQOJC1O = await FompkXbJ8vC.delegateBySig.call(addressfBal0X, uintpv0AiZR, uintphrdyMi, uintb2pC5Sm, bytedtV77OL, byteHatrwBc, {from: "0x0000000000000000000000000000000000000001"});
//		const uintRimLHOE = await FompkXbJ8vC.allowance.call(addressrlzt21h, addressNGxYrNN, {from: accounts[3]});
//		const uintKVMGZe2 = await FompkXbJ8vC.allowance.call(addressMOyALmq, addressX71538g, {from: "0x0000000000000000000000000000000000000001"});
//		const uintCliGwE = await FompkXbJ8vC.balanceOf.call(addresslVYuDqG, {from: accounts[2]});
//		const boolY99Mpe0 = await FompkXbJ8vC.transferFrom.call(addressZ7rYDC, addressdas7hjq, uintygjJT09, {from: accounts[2]});

		await expect(FompkXbJ8vC.delegateBySig.call(addressfBal0X, uintpv0AiZR, uintphrdyMi, uintb2pC5Sm, bytedtV77OL, byteHatrwBc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressAxIZ4eQ = accounts[4]
		const FompISoxftW = await Fomp.new(addressAxIZ4eQ, {from: accounts[3]});
		const addressdKL1zTe = accounts[0]
		const addressfXDIDeM = accounts[3]
		const address1VHelz = await FompISoxftW.delegate.call(addressdKL1zTe, {from: accounts[4]});
		const uint96KiE1yQ = await FompISoxftW.getCurrentVotes.call(addressfXDIDeM, {from: accounts[4]});

		assert.equal(uint96KiE1yQ, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressV6qM0sk = accounts[3]
		const FompCorr81I = await Fomp.new(addressV6qM0sk, {from: accounts[4]});
		const addressX6iPTZU = accounts[4]
		const addresse0djIz = accounts[4]
		const uintWipj3UO = BigInt("1694")
		const addressOOfTOpN = accounts[0]
		const uintHUzvbpR = BigInt("1762")
		const addressJTaWRX6 = accounts[3]
		const addressP8Dk8EE = await FompCorr81I.delegate.call(addressX6iPTZU, {from: "0x0000000000000000000000000000000000000001"});
		const addressdhL2qz1 = await FompCorr81I.delegate.call(addresse0djIz, {from: accounts[1]});
		const boole7fpTEP = await FompCorr81I.approve.call(addressOOfTOpN, uintWipj3UO, {from: accounts[1]});
//		const uint96YWmvHwa = await FompCorr81I.getPriorVotes.call(addressJTaWRX6, uintHUzvbpR, {from: accounts[3]});

		assert.equal(boole7fpTEP, true)
		await expect(FompCorr81I.getPriorVotes.call(addressJTaWRX6, uintHUzvbpR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresszMognnE = accounts[2]
		const FompEN9jW4I = await Fomp.new(addresszMognnE, {from: accounts[2]});
		const addressfmqW8zy = accounts[1]
		const uintomaiHIm = BigInt("681")
		const addressAeOdBoV = accounts[4]
		const uintfs1xfyQ = BigInt("2035")
		const addressTansOne = "0x0000000000000000000000000000000000000000"
		const addressBeBh3qp = accounts[0]
		const uintpxQWzQp = BigInt("1073")
		const addressuryLo5n = accounts[4]
		const uintFaQlVx = BigInt("622")
		const addressrZYO7ze = "0x0000000000000000000000000000000000000001"
		const uintNRkzqik = await FompEN9jW4I.balanceOf.call(addressfmqW8zy, {from: accounts[4]});
		const boolmFY6WvN = await FompEN9jW4I.approve.call(addressAeOdBoV, uintomaiHIm, {from: accounts[2]});
//		const boolMOOsUH = await FompEN9jW4I.transferFrom.call(addressBeBh3qp, addressTansOne, uintfs1xfyQ, {from: accounts[0]});
//		const boolKTDMRKB = await FompEN9jW4I.transfer.call(addressuryLo5n, uintpxQWzQp, {from: accounts[3]});
//		const boolDTnwrM = await FompEN9jW4I.transfer.call(addressrZYO7ze, uintFaQlVx, {from: accounts[0]});

		assert.equal(boolmFY6WvN, true)
		assert.equal(uintNRkzqik, BigInt("0"))
		await expect(FompEN9jW4I.transferFrom.call(addressBeBh3qp, addressTansOne, uintfs1xfyQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const address31T6i7 = accounts[4]
		const FompISoxftW = await Fomp.new(address31T6i7, {from: accounts[3]});
		const addressrb1kWfR = accounts[1]
		const addressWpo2TpY = accounts[3]
		const addressiFpfE6J = accounts[2]
		const uintHSAbBrK = BigInt("413")
		const addressvQTcQ0R = "0x0000000000000000000000000000000000000001"
		const address1VHelz = await FompISoxftW.delegate.call(addressrb1kWfR, {from: accounts[4]});
		const uint96KiE1yQ = await FompISoxftW.getCurrentVotes.call(addressWpo2TpY, {from: accounts[4]});
		const uintZ69Ri0Y = await FompISoxftW.balanceOf.call(addressiFpfE6J, {from: accounts[3]});
		const boolRUGGpRx = await FompISoxftW.transfer.call(addressvQTcQ0R, uintHSAbBrK, {from: accounts[4]});

		assert.equal(boolRUGGpRx, true)
		assert.equal(uint96KiE1yQ, BigInt("0"))
		assert.equal(uintZ69Ri0Y, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressJsqvSi = accounts[4]
		const FompISoxftW = await Fomp.new(addressJsqvSi, {from: accounts[3]});
		const uintkqOegqS = BigInt("33")
		const addressmXNu4T = accounts[4]
		const uintcFBH110 = BigInt("26")
		const addresstDWt2nO = accounts[0]
		const addressCOLjCwS = accounts[0]
		const addressBbOSoyi = accounts[1]
		const uint96qve8oop = await FompISoxftW.getPriorVotes.call(addressmXNu4T, uintkqOegqS, {from: accounts[4]});
		const boolMCGT0K3 = await FompISoxftW.approve.call(addresstDWt2nO, uintcFBH110, {from: accounts[3]});
		const uintfkCIIaR = await FompISoxftW.allowance.call(addressBbOSoyi, addressCOLjCwS, {from: accounts[5]});

		assert.equal(boolMCGT0K3, true)
		assert.equal(uint96qve8oop, BigInt("0"))
		assert.equal(uintfkCIIaR, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressRM6HUr = accounts[1]
		const FomppYCctST = await Fomp.new(addressRM6HUr, {from: "0x0000000000000000000000000000000000000001"});
		const addressrwT0OzW = accounts[0]
		const addressq9i0HI4 = accounts[4]
		const addressTabDmq = accounts[1]
		const uintjlMudg = await FomppYCctST.balanceOf.call(addressrwT0OzW, {from: accounts[4]});
		const uintrhpDxih = await FomppYCctST.balanceOf.call(addressq9i0HI4, {from: accounts[2]});
		const uintHCMwcGT = await FomppYCctST.balanceOf.call(addressTabDmq, {from: accounts[4]});
	});

	it('test for Fomp', async () => {
		const addressLwO7CJ7 = accounts[4]
		const FompISoxftW = await Fomp.new(addressLwO7CJ7, {from: accounts[3]});
		const uintLSY909U = BigInt("0")
		const addresspKzCNY6 = accounts[2]
		const byteehxLyq = "0x001f1d171c050a1802070a1c01150b0d031d18041f180f1d04140e191220151c"
		const byter03Usj = "0x0c0b0c020a1a191c161f0819100d010606131f171e060e0e0a1f1c0f1c0b1909"
		const uintrA3Qc3s = BigInt("27")
		const uintYlcq8Fm = BigInt("647")
		const uintXom2cUH = BigInt("1774")
		const addresstK3N6I = accounts[4]
		const boolMCGT0K3 = await FompISoxftW.approve.call(addresspKzCNY6, uintLSY909U, {from: accounts[3]});
//		const addressFmOGkKy = await FompISoxftW.delegateBySig.call(addresstK3N6I, uintXom2cUH, uintYlcq8Fm, uintrA3Qc3s, byter03Usj, byteehxLyq, {from: accounts[0]});

		assert.equal(boolMCGT0K3, true)
		await expect(FompISoxftW.delegateBySig.call(addresstK3N6I, uintXom2cUH, uintYlcq8Fm, uintrA3Qc3s, byter03Usj, byteehxLyq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})