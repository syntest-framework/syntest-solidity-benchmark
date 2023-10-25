const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractTAGJLYP = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmVDT3TE = BigInt("393")
		const addressXogwex = accounts[1]
		const uint8f6o8N = BigInt("1013")
		const addresseulNgTE = accounts[5]
		const addressHg6rwoO = accounts[1]
		const address4Yk9fW = accounts[5]
		const uintpQOyg6 = BigInt("1947")
		const addressSpupxuA = "0x0000000000000000000000000000000000000001"
		const addressZTvNQR = accounts[3]
		const uintBSGi4l = BigInt("2047")
		const addressiM12nEO = accounts[3]
		const uintiHKltL = BigInt("1511")
		const addressVBfdJoW = accounts[3]
		const addressKk8Wqb = accounts[4]
		const boolXpPQrcR = await HTDD_contractTAGJLYP.approve.call(addressXogwex, uintmVDT3TE, {from: accounts[3]});
		const boolvqSJbyB = await HTDD_contractTAGJLYP.transfer.call(addresseulNgTE, uint8f6o8N, {from: accounts[2]});
		const uint256YftQyh = await HTDD_contractTAGJLYP.allowance.call(address4Yk9fW, addressHg6rwoO, {from: accounts[4]});
		const boollWXozZy = await HTDD_contractTAGJLYP.transferFrom.call(addressZTvNQR, addressSpupxuA, uintpQOyg6, {from: accounts[2]});
		const boolGuFyADq = await HTDD_contractTAGJLYP.transfer.call(addressiM12nEO, uintBSGi4l, {from: accounts[3]});
		const boolz1U1tCs = await HTDD_contractTAGJLYP.transferFrom.call(addressKk8Wqb, addressVBfdJoW, uintiHKltL, {from: accounts[1]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractO0Tw3P = await HTDD_contract.new({from: accounts[4]});
		const uintwLH6NbG = BigInt("1837")
		const addresstwbtPb1 = accounts[2]
		const addressI2y8n7N = accounts[2]
		const uintQNcxOan = BigInt("68")
		const addressEKLd8hu = accounts[4]
		const uintj5QJ1HZ = BigInt("542")
		const addressgNNMrN = accounts[3]
		const uintQWg9CNm = BigInt("174")
		const addressGYrhck = accounts[2]
		const addresseG1nV9T = accounts[0]
		const uintHicD66m = BigInt("1700")
		const addressFmFYr7V = accounts[4]
		const boolFmgm595 = await HTDD_contractO0Tw3P.transferFrom.call(addressI2y8n7N, addresstwbtPb1, uintwLH6NbG, {from: accounts[3]});
		const boolnKIXV45 = await HTDD_contractO0Tw3P.transfer.call(addressEKLd8hu, uintQNcxOan, {from: accounts[0]});
		const boolYCK7sef = await HTDD_contractO0Tw3P.transfer.call(addressgNNMrN, uintj5QJ1HZ, {from: accounts[3]});
		const boolOHiLqIA = await HTDD_contractO0Tw3P.transferFrom.call(addresseG1nV9T, addressGYrhck, uintQWg9CNm, {from: accounts[3]});
		const boolgW0kY1v = await HTDD_contractO0Tw3P.approve.call(addressFmFYr7V, uintHicD66m, {from: accounts[0]});

		await expect(HTDD_contractO0Tw3P.transferFrom.call(addressI2y8n7N, addresstwbtPb1, uintwLH6NbG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractLLynRif = await HTDD_contract.new({from: accounts[0]});
		const uintdY1AQvn = BigInt("536")
		const addressM9Qd8Sb = accounts[3]
		const uintwuESAEC = BigInt("304")
		const addressaHgKxKC = accounts[4]
		const uintsm13of = BigInt("310")
		const addressRUFU7Ur = accounts[5]
		const addressoqIgA0U = "0x0000000000000000000000000000000000000001"
		const uintITsB0eb = BigInt("649")
		const addressYdMmME1 = accounts[2]
		const uintFBPES5D = BigInt("1375")
		const addressHtRV9I = accounts[4]
		const addressWaJfwgg = accounts[3]
		const boolJb0hPH2 = await HTDD_contractLLynRif.transfer.call(addressM9Qd8Sb, uintdY1AQvn, {from: accounts[5]});
		const booluzuvuTW = await HTDD_contractLLynRif.approve.call(addressaHgKxKC, uintwuESAEC, {from: accounts[4]});
		const boolbKWNWrt = await HTDD_contractLLynRif.transferFrom.call(addressoqIgA0U, addressRUFU7Ur, uintsm13of, {from: accounts[0]});
		const boolJJMCYvk = await HTDD_contractLLynRif.approve.call(addressYdMmME1, uintITsB0eb, {from: accounts[5]});
		const boolmewdsbW = await HTDD_contractLLynRif.transferFrom.call(addressWaJfwgg, addressHtRV9I, uintFBPES5D, {from: accounts[0]});

		await expect(HTDD_contractLLynRif.transfer.call(addressM9Qd8Sb, uintdY1AQvn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractdhsREMN = await HTDD_contract.new({from: accounts[2]});
		const addressfgILDR = accounts[5]
		const addressFm8RDo4 = accounts[1]
		const uintQSfHuZi = BigInt("403")
		const addressiS5jgL0 = accounts[1]
		const uintlvr7ff8 = BigInt("1020")
		const addressCPc1dv = "0x0000000000000000000000000000000000000001"
		const addresse5Gcg6S = accounts[1]
		const uint256f1hDliY = await HTDD_contractdhsREMN.allowance.call(addressFm8RDo4, addressfgILDR, {from: accounts[0]});
		const boolTbocvv = await HTDD_contractdhsREMN.approve.call(addressiS5jgL0, uintQSfHuZi, {from: accounts[0]});
		const boolzLmnSQ2 = await HTDD_contractdhsREMN.transferFrom.call(addresse5Gcg6S, addressCPc1dv, uintlvr7ff8, {from: accounts[0]});

		assert.equal(boolTbocvv, true)
		assert.equal(uint256f1hDliY, BigInt("0"))
		await expect(HTDD_contractdhsREMN.transferFrom.call(addresse5Gcg6S, addressCPc1dv, uintlvr7ff8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractHELNy6k = await HTDD_contract.new({from: accounts[4]});
		const uintk6WnLMw = BigInt("420")
		const addressS1s3yVL = accounts[1]
		const uintcsUMTX2 = BigInt("901")
		const addressH3yf6iI = accounts[3]
		const addressMi1h65U = accounts[4]
		const uintgV0z5oH = BigInt("840")
		const addressGrnpyAA = "0x0000000000000000000000000000000000000001"
		const addressarVJ30K = accounts[0]
		const uintCXTFhqi = BigInt("1654")
		const addressVFzTq1g = accounts[4]
		const uintgKkEW91 = BigInt("167")
		const addressVSJVYWF = accounts[1]
		const uintAIbmMkc = BigInt("481")
		const addressdAzM8u0 = accounts[2]
		const addressxn4LbCi = accounts[1]
		const boolVsigKV = await HTDD_contractHELNy6k.approve.call(addressS1s3yVL, uintk6WnLMw, {from: "0x0000000000000000000000000000000000000001"});
		const boolNZMex3n = await HTDD_contractHELNy6k.transferFrom.call(addressMi1h65U, addressH3yf6iI, uintcsUMTX2, {from: accounts[3]});
		const booleHgy6Qj = await HTDD_contractHELNy6k.transferFrom.call(addressarVJ30K, addressGrnpyAA, uintgV0z5oH, {from: accounts[0]});
		const boolIBCQL5l = await HTDD_contractHELNy6k.approve.call(addressVFzTq1g, uintCXTFhqi, {from: accounts[3]});
		const boolpv9EXsx = await HTDD_contractHELNy6k.approve.call(addressVSJVYWF, uintgKkEW91, {from: accounts[4]});
		const boolujDlFx7 = await HTDD_contractHELNy6k.transferFrom.call(addressxn4LbCi, addressdAzM8u0, uintAIbmMkc, {from: accounts[2]});

		assert.equal(boolVsigKV, true)
		await expect(HTDD_contractHELNy6k.transferFrom.call(addressMi1h65U, addressH3yf6iI, uintcsUMTX2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractjIvbmB = await HTDD_contract.new({from: accounts[2]});
		const uintpAJVjzE = BigInt("1623")
		const addressebKxp1r = accounts[4]
		const boolDQ8bOj8 = await HTDD_contractjIvbmB.transfer.call(addressebKxp1r, uintpAJVjzE, {from: accounts[2]});

		assert.equal(boolDQ8bOj8, true)
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractjIvbmB = await HTDD_contract.new({from: accounts[2]});
		const uintAbB8SLN = BigInt("2022")
		const addressedmgxYv = accounts[4]
		const uintl31dYt = BigInt("0")
		const addresso6oOEos = accounts[1]
		const addresswhJ8LPE = accounts[1]
		const uintMMnJ8EJ = BigInt("613")
		const addresswl5P0x = "0x0000000000000000000000000000000000000001"
		const addressJyIdtIn = accounts[2]
		const boolhkmJRsA = await HTDD_contractjIvbmB.approve.call(addressedmgxYv, uintAbB8SLN, {from: accounts[0]});
		const boolEPKXUSy = await HTDD_contractjIvbmB.transferFrom.call(addresswhJ8LPE, addresso6oOEos, uintl31dYt, {from: accounts[5]});
		const boolz26MT1E = await HTDD_contractjIvbmB.transferFrom.call(addressJyIdtIn, addresswl5P0x, uintMMnJ8EJ, {from: accounts[0]});

		assert.equal(boolEPKXUSy, true)
		assert.equal(boolhkmJRsA, true)
		await expect(HTDD_contractjIvbmB.transferFrom.call(addressJyIdtIn, addresswl5P0x, uintMMnJ8EJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})