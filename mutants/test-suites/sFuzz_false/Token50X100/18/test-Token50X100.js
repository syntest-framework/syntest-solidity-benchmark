const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100mgHIsy = await Token50X100.new({from: accounts[0]});
		const uintMY3FPI8 = BigInt("1868")
		const addressK8Z3r7b = accounts[3]
		const uintLhiLf2b = BigInt("293")
		const uintJlnVvVy = BigInt("43")
		const boolvZDCZcF = await Token50X100mgHIsy.approve.call(addressK8Z3r7b, uintMY3FPI8, {from: accounts[0]});
		const boolohnKblP = await Token50X100mgHIsy.setMaxLockPeriod.call(uintLhiLf2b, {from: accounts[1]});
		const boolVPXtmX = await Token50X100mgHIsy.setMaxLockPeriod.call(uintJlnVvVy, {from: accounts[3]});

		assert.equal(boolVPXtmX, false)
		assert.equal(boolohnKblP, false)
		assert.equal(boolvZDCZcF, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100Q7bpucj = await Token50X100.new({from: accounts[1]});
		const uinttsgxkwH = BigInt("98")
		const address6DnxQe = accounts[0]
		const uintHm4165O = BigInt("5")
		const addressh16qB6H = accounts[5]
		const boolnfdoYHR = await Token50X100Q7bpucj.increaseApproval.call(address6DnxQe, uinttsgxkwH, {from: accounts[2]});
		const boolcDGLgv = await Token50X100Q7bpucj.decreaseApproval.call(addressh16qB6H, uintHm4165O, {from: accounts[1]});

		assert.equal(boolcDGLgv, true)
		assert.equal(boolnfdoYHR, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100Dkd3rk = await Token50X100.new({from: accounts[3]});
		const uintyyIJg0G = BigInt("1256")
		const addressPbZN9vF = accounts[3]
		const addressYS0qzwR = accounts[5]
		const addressKjxHqPp = accounts[0]
		const uintPjkBUYu = BigInt("137")
		const addressYXShWVG = accounts[4]
		const boolzEWgQK2 = await Token50X100Dkd3rk.setMaxLockPeriod.call(uintyyIJg0G, {from: accounts[3]});
		const uint256v7P4fCB = await Token50X100Dkd3rk.allowance.call(addressYS0qzwR, addressPbZN9vF, {from: accounts[1]});
//		await Token50X100Dkd3rk.setTokenContract.call(addressKjxHqPp, {from: accounts[5]});
//		const boolvBDOyS = await Token50X100Dkd3rk.setMaxLockPeriod.call(uintPjkBUYu, {from: accounts[3]});
//		const uint256SXy93Iq = await Token50X100Dkd3rk.balanceOf.call(addressYXShWVG, {from: accounts[5]});

		assert.equal(boolzEWgQK2, false)
		assert.equal(uint256v7P4fCB, BigInt("0"))
		await expect(Token50X100Dkd3rk.setTokenContract.call(addressKjxHqPp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100g8mdOWS = await Token50X100.new({from: accounts[1]});
		const addressu8IakeX = accounts[3]
		const uintLMCDCHH = BigInt("109")
		const stringZkrOQcF = "OdCppnXSjawsgoj84CVM2CglHIaSQeaaVEv5ZRBW9IzHd5dYqWHhOO6JPCoVXmoXsh7w9ngdFiGdI73r9X2n5EfC8"
		const stringzkvxIfH = "gx4Ma0gGoLJpTwKmOAPnpvx8GaggaeQwkK"
		const uintDtKQ14w = BigInt("103")
		const stringFmwKjiv = "JG7C80R2MzXoQYHC4IC3ETp3SLWVNfgaRCQ46ib91nzwO"
		const stringK8iiQ7H = "wPxRq14jER8xaslMH1MsgFIGkUdnAAHlKmoW2vjQMTHr7Zv3iEvuiUQlAjRr5r"
		const addressG6yy5ws = await Token50X100g8mdOWS.transferOwnership.call(addressu8IakeX, {from: accounts[1]});
//		await Token50X100g8mdOWS.setSymbolNameDecimals.call(stringzkvxIfH, stringZkrOQcF, uintLMCDCHH, {from: accounts[3]});
//		await Token50X100g8mdOWS.setSymbolNameDecimals.call(stringK8iiQ7H, stringFmwKjiv, uintDtKQ14w, {from: accounts[0]});

		await expect(Token50X100g8mdOWS.setSymbolNameDecimals.call(stringzkvxIfH, stringZkrOQcF, uintLMCDCHH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vMOEhZN = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBbZlq37 = BigInt("1657")
		const addressjd7NisN = accounts[2]
		const addressifpbv8A = accounts[3]
		const addressy1scDd = accounts[1]
		await Token50X100vMOEhZN.release.call({from: accounts[1]});
		const boolqOxjc4X = await Token50X100vMOEhZN.transferFrom.call(addressifpbv8A, addressjd7NisN, uintBbZlq37, {from: accounts[2]});
		await Token50X100vMOEhZN.onlyOwner.call({from: accounts[0]});
		const uint256jdZEbay = await Token50X100vMOEhZN.balanceOf.call(addressy1scDd, {from: accounts[5]});
		await Token50X100vMOEhZN.release.call({from: accounts[2]});
	});

	it('test for Token50X100', async () => {
		const Token50X100eOLsHv = await Token50X100.new({from: accounts[4]});
		const uintV97KBMD = BigInt("2005")
		const uintRqV1B9K = BigInt("1074")
		const bool55G7mm = false
		const addressvZKpgdZ = accounts[1]
		const uintLOZp3mv = BigInt("222")
		const uintRmsB1iM = BigInt("1720")
//		await Token50X100eOLsHv.onlyOwner.call({from: accounts[2]});
//		const boolGRyBln7 = await Token50X100eOLsHv.safeLock.call(uintRqV1B9K, uintV97KBMD, {from: accounts[3]});
//		await Token50X100eOLsHv.setWhiteList.call(addressvZKpgdZ, bool55G7mm, {from: accounts[3]});
//		const bools9x04WH = await Token50X100eOLsHv.setMaxLockPeriod.call(uintLOZp3mv, {from: accounts[1]});
//		const boolsAkCyCl = await Token50X100eOLsHv.setMaxLockPeriod.call(uintRmsB1iM, {from: accounts[1]});

		await expect(Token50X100eOLsHv.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X1001fap6n = await Token50X100.new({from: accounts[0]});
		const uintaW7GqFV = BigInt("855")
		const uintTqy4bi = BigInt("457")
		const addresstyjGrX = accounts[2]
		const boolTWbeymJ = false
		const addresstHDn6V = accounts[4]
//		const boolLgpph2 = await Token50X1001fap6n.safeLock.call(uintTqy4bi, uintaW7GqFV, {from: accounts[1]});
//		await Token50X1001fap6n.setTokenContract.call(addresstyjGrX, {from: accounts[2]});
//		await Token50X1001fap6n.setWhiteList.call(addresstHDn6V, boolTWbeymJ, {from: accounts[3]});

		await expect(Token50X1001fap6n.safeLock.call(uintTqy4bi, uintaW7GqFV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Q7bpucj = await Token50X100.new({from: accounts[1]});
		const uintOnS1BTq = BigInt("551")
		const addressHOW1xo6 = accounts[1]
		const uintNaU8npR = BigInt("5")
		const addressG8JMglC = accounts[5]
		const boolAuNQSxM = await Token50X100Q7bpucj.approve.call(addressHOW1xo6, uintOnS1BTq, {from: accounts[2]});
		const boolcDGLgv = await Token50X100Q7bpucj.decreaseApproval.call(addressG8JMglC, uintNaU8npR, {from: accounts[1]});
//		await Token50X100Q7bpucj.release.call({from: accounts[1]});

		assert.equal(boolAuNQSxM, true)
		assert.equal(boolcDGLgv, true)
		await expect(Token50X100Q7bpucj.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Q7bpucj = await Token50X100.new({from: accounts[1]});
		const addressZsRTBGT = accounts[3]
		const addressolABIpC = accounts[3]
		const uintNYlfkTI = BigInt("101")
		const addressyM0RS8F = accounts[0]
		const uint256MXo8qSM = await Token50X100Q7bpucj.balanceOf.call(addressZsRTBGT, {from: accounts[2]});
//		const addressIruvZf2 = await Token50X100Q7bpucj.transferOwnership.call(addressolABIpC, {from: accounts[3]});
//		const boolnfdoYHR = await Token50X100Q7bpucj.increaseApproval.call(addressyM0RS8F, uintNYlfkTI, {from: accounts[2]});

		assert.equal(uint256MXo8qSM, BigInt("0"))
		await expect(Token50X100Q7bpucj.transferOwnership.call(addressolABIpC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Q7bpucj = await Token50X100.new({from: accounts[1]});
		const booluXA617u = false
		const addressmHi5EdE = accounts[1]
		const uintm6lgYzM = BigInt("286")
		const addressRyVIn4x = accounts[2]
		const uintZqfE6U4 = BigInt("146")
		const addressGYg4O5G = accounts[0]
//		await Token50X100Q7bpucj.setWhiteListReceivers.call(addressmHi5EdE, booluXA617u, {from: accounts[1]});
//		const boolqv5vSI3 = await Token50X100Q7bpucj.decreaseApproval.call(addressRyVIn4x, uintm6lgYzM, {from: accounts[0]});
//		const boolnfdoYHR = await Token50X100Q7bpucj.increaseApproval.call(addressGYg4O5G, uintZqfE6U4, {from: accounts[2]});

		await expect(Token50X100Q7bpucj.setWhiteListReceivers.call(addressmHi5EdE, booluXA617u, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100dcMLFdu = await Token50X100.new({from: accounts[1]});
		const uintDXgkvOW = BigInt("128")
		const stringty7oXEk = "jU9eR8rqtXM712uWoLVvUsmO6gjjyqebke"
		const stringzXBKWAO = "8ofeivWsAs7QsUCUYf6JWahCfTLqQWW0dc"
		const uintLe3vdnq = BigInt("1657")
		const addressntDiQF0 = accounts[3]
		const addressOPaJ5JD = accounts[4]
		const addressTMqQyjY = accounts[3]
		const boolN8jNfZt = await Token50X100dcMLFdu.setSymbolNameDecimals.call(stringzXBKWAO, stringty7oXEk, uintDXgkvOW, {from: accounts[1]});
		const bool0PSrQ9 = await Token50X100dcMLFdu.increaseApproval.call(addressntDiQF0, uintLe3vdnq, {from: accounts[2]});
//		await Token50X100dcMLFdu.setTokenContract.call(addressOPaJ5JD, {from: accounts[4]});
//		await Token50X100dcMLFdu.setTokenContract.call(addressTMqQyjY, {from: accounts[0]});

		assert.equal(bool0PSrQ9, true)
		await expect(Token50X100dcMLFdu.setTokenContract.call(addressOPaJ5JD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Q7bpucj = await Token50X100.new({from: accounts[1]});
		const uintgKUD8L9 = BigInt("0")
		const addressIDPVtlE = accounts[5]
		const boolcDGLgv = await Token50X100Q7bpucj.decreaseApproval.call(addressIDPVtlE, uintgKUD8L9, {from: accounts[1]});

		assert.equal(boolcDGLgv, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100Q7bpucj = await Token50X100.new({from: accounts[1]});
		const uintamcd4t = BigInt("101")
		const addressbCL7vID = accounts[1]
		const uintAX9rvP1 = BigInt("1422")
		const addressR8z1phu = accounts[4]
		const boolnfdoYHR = await Token50X100Q7bpucj.increaseApproval.call(addressbCL7vID, uintamcd4t, {from: accounts[2]});
//		const boolibiuk6l = await Token50X100Q7bpucj.transfer.call(addressR8z1phu, uintAX9rvP1, {from: accounts[0]});

		assert.equal(boolnfdoYHR, true)
		await expect(Token50X100Q7bpucj.transfer.call(addressR8z1phu, uintAX9rvP1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Q7bpucj = await Token50X100.new({from: accounts[1]});
		const uintxRXoVt8 = BigInt("1551")
		const uintxVQdMcV = BigInt("89")
		const addressWDh9oup = accounts[1]
		const addressPcoSOx = accounts[4]
		const uintnsMbbzn = BigInt("379")
		const addressnfC17lo = accounts[4]
		const addressnfL7rMi = accounts[0]
		const uintJmh52b3 = BigInt("564")
		const uint0CVNm2 = BigInt("1314")
		const addresshVbCuc3 = accounts[3]
		const addressSZ9G19H = accounts[5]
		const uintF6NdZbO = BigInt("5")
		const addressqvERX2d = accounts[7]
//		const boolaMVh9I = await Token50X100Q7bpucj._transfer.call(addressPcoSOx, addressWDh9oup, uintxVQdMcV, uintxRXoVt8, {from: accounts[1]});
//		const boolr5nmSWL = await Token50X100Q7bpucj.transferFrom.call(addressnfL7rMi, addressnfC17lo, uintnsMbbzn, {from: accounts[5]});
//		const boolTZ0Jr3i = await Token50X100Q7bpucj._transfer.call(addressSZ9G19H, addresshVbCuc3, uint0CVNm2, uintJmh52b3, {from: accounts[0]});
//		const boolcDGLgv = await Token50X100Q7bpucj.decreaseApproval.call(addressqvERX2d, uintF6NdZbO, {from: accounts[1]});

		await expect(Token50X100Q7bpucj._transfer.call(addressPcoSOx, addressWDh9oup, uintxVQdMcV, uintxRXoVt8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Q7bpucj = await Token50X100.new({from: accounts[1]});
		const uintysoDdfv = BigInt("811")
		const addresss9KbH0 = "0x0000000000000000000000000000000000000001"
		const addressUJ7UuqD = accounts[2]
		const uintt2QbROw = BigInt("1422")
		const addressKcO9ZFq = accounts[6]
//		const boolUcgg1x = await Token50X100Q7bpucj.transferFrom.call(addressUJ7UuqD, addresss9KbH0, uintysoDdfv, {from: accounts[5]});
//		const boolibiuk6l = await Token50X100Q7bpucj.transfer.call(addressKcO9ZFq, uintt2QbROw, {from: accounts[0]});

		await expect(Token50X100Q7bpucj.transferFrom.call(addressUJ7UuqD, addresss9KbH0, uintysoDdfv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Q7bpucj = await Token50X100.new({from: accounts[1]});
		const uintAw8Fygu = BigInt("233")
		const addressmwUzuP = "0x0000000000000000000000000000000000000000"
		const addressB24CN1l = accounts[5]
		const addressZSoE8F1 = accounts[3]
		const addressBvUMNoz = accounts[1]
		const uinttbmBQNO = BigInt("5")
		const addressLztBOu = accounts[6]
//		const boolFG4BYJl = await Token50X100Q7bpucj.transfer.call(addressmwUzuP, uintAw8Fygu, {from: accounts[0]});
//		await Token50X100Q7bpucj.setLinkingAddresses.call(addressZSoE8F1, addressB24CN1l, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100Q7bpucj.setTokenContract.call(addressBvUMNoz, {from: accounts[3]});
//		await Token50X100Q7bpucj.onlyOwner.call({from: accounts[2]});
//		const boolcDGLgv = await Token50X100Q7bpucj.decreaseApproval.call(addressLztBOu, uinttbmBQNO, {from: accounts[1]});

		await expect(Token50X100Q7bpucj.transfer.call(addressmwUzuP, uintAw8Fygu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100I71iQ2M = await Token50X100.new({from: accounts[1]});
		const bool84boTj = true
		const addressY8O3GYl = accounts[3]
//		await Token50X100I71iQ2M.setWhiteList.call(addressY8O3GYl, bool84boTj, {from: accounts[1]});
//		await Token50X100I71iQ2M.lock.call({from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100I71iQ2M.release.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100I71iQ2M.setWhiteList.call(addressY8O3GYl, bool84boTj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iubj9sM = await Token50X100.new({from: accounts[1]});
		const uintqZSVmT = BigInt("350")
		const booleqF4LT = true
		const addressEBpa4I6 = accounts[4]
		const boolvcZGjBG = await Token50X100iubj9sM.setMaxLockPeriod.call(uintqZSVmT, {from: accounts[0]});
		const uint256hbm8mZz = await Token50X100iubj9sM.totalSupply.call({from: accounts[0]});
//		await Token50X100iubj9sM.setWhiteList.call(addressEBpa4I6, booleqF4LT, {from: accounts[4]});

		assert.equal(boolvcZGjBG, false)
		assert.equal(uint256hbm8mZz, BigInt("4714285714285710"))
		await expect(Token50X100iubj9sM.setWhiteList.call(addressEBpa4I6, booleqF4LT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Q7bpucj = await Token50X100.new({from: accounts[1]});
		const uintkeoC7yz = BigInt("85")
		const addressRpUHUuv = accounts[0]
		const addressDjktnsW = accounts[3]
		const addressG1OIdtx = accounts[1]
		const uintSMR8D8s = BigInt("744")
		const addresszJRfVmK = accounts[3]
		const boolnfdoYHR = await Token50X100Q7bpucj.increaseApproval.call(addressRpUHUuv, uintkeoC7yz, {from: accounts[2]});
//		await Token50X100Q7bpucj.setLinkingAddresses.call(addressG1OIdtx, addressDjktnsW, {from: accounts[1]});
//		const boolebuLdLR = await Token50X100Q7bpucj.transfer.call(addresszJRfVmK, uintSMR8D8s, {from: accounts[5]});

		assert.equal(boolnfdoYHR, true)
		await expect(Token50X100Q7bpucj.setLinkingAddresses.call(addressG1OIdtx, addressDjktnsW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Rh9hWO9 = await Token50X100.new({from: accounts[2]});
		const uintOOt31ha = BigInt("1253")
		const addressKC7ejl5 = accounts[2]
		const uintJAD9lN6 = BigInt("871")
		const uintOINApRp = BigInt("1036")
		const addressKSSzgE = accounts[1]
		const uintgbT8ri0 = BigInt("366")
		const uintUtG4tIN = BigInt("103")
		const addressYDIPSJK = accounts[5]
		const uints5stRyN = BigInt("613")
		const addressLlzEfdz = accounts[0]
		const addressOb90Ffq = "0x0000000000000000000000000000000000000001"
		const uintuPzcmdZ = BigInt("1417")
		const uintD9L70qu = BigInt("464")
		const addressrZJcSJ2 = accounts[2]
		const addressXvh6DR = accounts[3]
		const boolscXSVbm = await Token50X100Rh9hWO9.approve.call(addressKC7ejl5, uintOOt31ha, {from: accounts[3]});
		const boolbuwGr9G = await Token50X100Rh9hWO9.setVesting.call(addressKSSzgE, uintOINApRp, uintJAD9lN6, {from: accounts[2]});
//		const boolh7D43o6 = await Token50X100Rh9hWO9.setVesting.call(addressYDIPSJK, uintUtG4tIN, uintgbT8ri0, {from: accounts[0]});
//		const boolRQqvhF = await Token50X100Rh9hWO9.transferFrom.call(addressOb90Ffq, addressLlzEfdz, uints5stRyN, {from: accounts[2]});
//		const boolzzjeiB6 = await Token50X100Rh9hWO9._transfer.call(addressXvh6DR, addressrZJcSJ2, uintD9L70qu, uintuPzcmdZ, {from: accounts[2]});

		assert.equal(boolbuwGr9G, true)
		assert.equal(boolscXSVbm, true)
		await expect(Token50X100Rh9hWO9.setVesting.call(addressYDIPSJK, uintUtG4tIN, uintgbT8ri0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100JSYS3IA = await Token50X100.new({from: accounts[0]});
		const addressI40sdLg = accounts[0]
		const uintTKJ1Hlx = BigInt("1809")
		const addressXWM5SLr = accounts[4]
		const addresspzbf8ET = "0x0000000000000000000000000000000000000001"
//		await Token50X100JSYS3IA.lock.call({from: accounts[0]});
//		const uint256HKTEPbo = await Token50X100JSYS3IA.balanceOf.call(addressI40sdLg, {from: accounts[0]});
//		const booldtvojns = await Token50X100JSYS3IA.transferFrom.call(addresspzbf8ET, addressXWM5SLr, uintTKJ1Hlx, {from: accounts[3]});

		await expect(Token50X100JSYS3IA.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Q7bpucj = await Token50X100.new({from: accounts[1]});
		const addressRo9KVQm = accounts[5]
		const uint82W3gp = BigInt("101")
		const addressH0mobxC = accounts[0]
//		await Token50X100Q7bpucj.setTokenContract.call(addressRo9KVQm, {from: accounts[1]});
//		const boolnfdoYHR = await Token50X100Q7bpucj.increaseApproval.call(addressH0mobxC, uint82W3gp, {from: accounts[2]});

		await expect(Token50X100Q7bpucj.setTokenContract.call(addressRo9KVQm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})