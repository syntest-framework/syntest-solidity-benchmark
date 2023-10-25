const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringNdO8qcm = "w8sDI7zLddK"
		const stringwWQuYOv = "B7uoX9HThSSnJApTOeY9YoZMYuQEasGlW4Wzmql6knRA2QTR7Lw86fpJ9"
		const uintr2p5BRC = BigInt("22")
		const OnXFinancenW6lMB = await OnXFinance.new(stringNdO8qcm, stringwWQuYOv, uintr2p5BRC, {from: accounts[4]});
		const uintnqJVxB2 = BigInt("967")
		const addressBQvyIs6 = accounts[1]
		const addressWQQw8oh = accounts[2]
		const uintzg9oKza = BigInt("896")
		const addressgbPj8H2 = accounts[2]
//		const boolbEvMhT2 = await OnXFinancenW6lMB.transferFrom.call(addressWQQw8oh, addressBQvyIs6, uintnqJVxB2, {from: accounts[2]});
//		const boolquqD2kq = await OnXFinancenW6lMB.approve.call(addressgbPj8H2, uintzg9oKza, {from: accounts[1]});

		await expect(OnXFinancenW6lMB.transferFrom.call(addressWQQw8oh, addressBQvyIs6, uintnqJVxB2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringOGI4nr = "xrSBpAcCecgQSK1qhlIX"
		const stringZDup7WD = "pxaqY5EMSNw3"
		const uintKiNxV79 = BigInt("88")
		const OnXFinancewK7lfdn = await OnXFinance.new(stringOGI4nr, stringZDup7WD, uintKiNxV79, {from: accounts[0]});
		const uintxvMpCPf = BigInt("762")
		const addressqhGYW7U = "0x0000000000000000000000000000000000000001"
		const addressf6u2Ohj = accounts[5]
		const uintj00ZF1g = BigInt("691")
		const addressogzSAXv = accounts[1]
		const uintEG6IWXK = BigInt("1588")
		const addressvPI9CvB = accounts[0]
		const uint9qEXJR = BigInt("380")
		const addressUuGE0y2 = accounts[4]
		const uintQEvtOzL = BigInt("1787")
		const addressaHFqAL4 = accounts[4]
		const addressgWsAxdz = accounts[5]
//		const bool8611vE = await OnXFinancewK7lfdn.transferFrom.call(addressf6u2Ohj, addressqhGYW7U, uintxvMpCPf, {from: accounts[0]});
//		const boolzM8xbfg = await OnXFinancewK7lfdn.approveAndCall.call(addressogzSAXv, uintj00ZF1g, {from: accounts[2]});
//		const boolYL21Dzw = await OnXFinancewK7lfdn.approve.call(addressvPI9CvB, uintEG6IWXK, {from: accounts[1]});
//		const boolMz584bO = await OnXFinancewK7lfdn.decreaseAllowance.call(addressUuGE0y2, uint9qEXJR, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcPNeO9 = await OnXFinancewK7lfdn.transferFrom.call(addressgWsAxdz, addressaHFqAL4, uintQEvtOzL, {from: accounts[4]});

		await expect(OnXFinancewK7lfdn.transferFrom.call(addressf6u2Ohj, addressqhGYW7U, uintxvMpCPf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringDq5ASWe = "XEaWloufU0xVxjQxN9kTuG4e83PDWMvWeGy72jWXUfYfKi2VrtPf"
		const stringkLgvTWx = "NLuYbGbiahap2pHglg5AmHMYAqLub3Y2xXGG"
		const uintRyj9SpC = BigInt("235")
		const OnXFinancehaO7abN = await OnXFinance.new(stringDq5ASWe, stringkLgvTWx, uintRyj9SpC, {from: accounts[2]});
		const addressIAyeP1K = accounts[2]
		const addressIbO77K5 = accounts[2]
		const uintgdazg82 = BigInt("1513")
		const addressM9QOjU = accounts[3]
		const addressEgFekz9 = accounts[5]
		const addressJYUnnt4 = accounts[3]
		const uintQ5vX5Ia = await OnXFinancehaO7abN.allowance.call(addressIbO77K5, addressIAyeP1K, {from: accounts[1]});
//		const boolJfwr6aP = await OnXFinancehaO7abN.increaseAllowance.call(addressM9QOjU, uintgdazg82, {from: accounts[3]});
//		const uintngVjVCE = await OnXFinancehaO7abN.allowance.call(addressJYUnnt4, addressEgFekz9, {from: accounts[4]});

		assert.equal(uintQ5vX5Ia, BigInt("0"))
		await expect(OnXFinancehaO7abN.increaseAllowance.call(addressM9QOjU, uintgdazg82, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringlE6eOd = "t5bOKG"
		const stringeCYUPhl = "2wjWDbfhPgjuR84Woya74GuGVBR25CqmWrkh64McpOCD4Hw5PyM5b"
		const uintX4oLYey = BigInt("151")
		const OnXFinanceFuKg1J4 = await OnXFinance.new(stringlE6eOd, stringeCYUPhl, uintX4oLYey, {from: accounts[1]});
		const uintILlUkRb = BigInt("230")
		const addressFgOThSv = accounts[2]
		const uinta1I502E = BigInt("693")
		const addressPpFX5D5 = accounts[5]
		const uintNR7qpRt = BigInt("469")
		const addressChcnNY1 = accounts[0]
		const uintpE7zGQh = BigInt("683")
		const addressCF6Zqu = accounts[3]
//		const boolUwJ83u = await OnXFinanceFuKg1J4.transfer.call(addressFgOThSv, uintILlUkRb, {from: accounts[0]});
//		const boolH7fPoUM = await OnXFinanceFuKg1J4.decreaseAllowance.call(addressPpFX5D5, uinta1I502E, {from: accounts[0]});
//		const boolCvstF6E = await OnXFinanceFuKg1J4.decreaseAllowance.call(addressChcnNY1, uintNR7qpRt, {from: accounts[2]});
//		const boolil16NdF = await OnXFinanceFuKg1J4.approveAndCall.call(addressCF6Zqu, uintpE7zGQh, {from: accounts[3]});

		await expect(OnXFinanceFuKg1J4.transfer.call(addressFgOThSv, uintILlUkRb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringV3giCMZ = "cYvEZCHeVfnEsTkEMrNAChJ"
		const stringPHRxsdl = "lEzciE2S3XwbLw"
		const uintnItWtZr = BigInt("613")
		const OnXFinanceQb9Wxe2 = await OnXFinance.new(stringV3giCMZ, stringPHRxsdl, uintnItWtZr, {from: "0x0000000000000000000000000000000000000001"});
		const addressqcqCDS = accounts[4]
		const uintSJk0p0A = await OnXFinanceQb9Wxe2.balanceOf.call(addressqcqCDS, {from: accounts[3]});
		const uint8zcnhO3 = await OnXFinanceQb9Wxe2.decimals.call({from: accounts[5]});
		const stringCAEJPhN = await OnXFinanceQb9Wxe2.symbol.call({from: accounts[4]});
	});

	it('test for OnXFinance', async () => {
		const stringqgdS0cQ = "K"
		const stringP4H0Ycy = "IiXiQkpeH7C2CLEUhcsV8a3aa5vLaPt"
		const uintqPbFWHg = BigInt("1320")
		const OnXFinanceyLv2VRR = await OnXFinance.new(stringqgdS0cQ, stringP4H0Ycy, uintqPbFWHg, {from: accounts[5]});
		const uintDhKWAYo = BigInt("1790")
		const addressfgk6BZ2 = accounts[5]
		const addressq2MidTx = accounts[4]
		const uintGzh5q8B = BigInt("462")
		const addressH6hiVef = accounts[4]
		const boolB5s3Rhi = await OnXFinanceyLv2VRR.approve.call(addressfgk6BZ2, uintDhKWAYo, {from: accounts[2]});
		const uintot9xHGn = await OnXFinanceyLv2VRR.balanceOf.call(addressq2MidTx, {from: accounts[0]});
		const uint8qTwrVBe = await OnXFinanceyLv2VRR.decimals.call({from: accounts[4]});
//		const boolPGJlnsX = await OnXFinanceyLv2VRR.transfer.call(addressH6hiVef, uintGzh5q8B, {from: accounts[2]});

		assert.equal(boolB5s3Rhi, true)
		assert.equal(uint8qTwrVBe, BigInt("18"))
		assert.equal(uintot9xHGn, BigInt("0"))
		await expect(OnXFinanceyLv2VRR.transfer.call(addressH6hiVef, uintGzh5q8B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringNdO8qcm = "w8sDI7zLddK"
		const stringwWQuYOv = "B7uoX9HThSSnJApTOeY9YoZMYuQEasGlW4Wzmql6knRA2QTR7Lw86fpJ9"
		const uintwW1FTLw = BigInt("22")
		const OnXFinancenW6lMB = await OnXFinance.new(stringNdO8qcm, stringwWQuYOv, uintwW1FTLw, {from: accounts[4]});
		const uintkkgcM3A = BigInt("896")
		const addressY116WBr = accounts[2]
		const address5vAo8p = accounts[3]
		const uintoZan2C = BigInt("1514")
		const addressZL656D4 = "0x0000000000000000000000000000000000000001"
		const boolquqD2kq = await OnXFinancenW6lMB.approve.call(addressY116WBr, uintkkgcM3A, {from: accounts[1]});
//		const boolrxidIy = await OnXFinancenW6lMB.transferownership.call(address5vAo8p, {from: accounts[0]});
//		const booleSmmv0S = await OnXFinancenW6lMB.transfer.call(addressZL656D4, uintoZan2C, {from: accounts[2]});

		assert.equal(boolquqD2kq, true)
		await expect(OnXFinancenW6lMB.transferownership.call(address5vAo8p, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringNdO8qcm = "w8sDI7zLddK"
		const stringwWQuYOv = "B7uoX9HThSSnJApTOeY9YoZMYuQEasGlW4Wzmql6knRA2QTR7Lw86fpJ9"
		const uintsMyg9v = BigInt("22")
		const OnXFinancenW6lMB = await OnXFinance.new(stringNdO8qcm, stringwWQuYOv, uintsMyg9v, {from: accounts[4]});
		const uinthvdNgOp = BigInt("896")
		const addressUwYUyao = accounts[3]
		const uinthZGZc8K = BigInt("1277")
		const addressa3eD1Xd = accounts[2]
		const uintkjbfHyp = BigInt("1863")
		const addressge98z4 = accounts[0]
		const boolquqD2kq = await OnXFinancenW6lMB.approve.call(addressUwYUyao, uinthvdNgOp, {from: accounts[1]});
		const boolPreRExa = await OnXFinancenW6lMB.transfer.call(addressa3eD1Xd, uinthZGZc8K, {from: accounts[4]});
//		const boolUMEAF73 = await OnXFinancenW6lMB.transfer.call(addressge98z4, uintkjbfHyp, {from: accounts[2]});

		assert.equal(boolPreRExa, true)
		assert.equal(boolquqD2kq, true)
		await expect(OnXFinancenW6lMB.transfer.call(addressge98z4, uintkjbfHyp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringNdO8qcm = "w8sDI7zLddK"
		const stringwWQuYOv = "B7uoX9HThSSnJApTOeY9YoZMYuQEasGlW4Wzmql6knRA2QTR7Lw86fpJ9"
		const uintZm4BeD = BigInt("22")
		const OnXFinancenW6lMB = await OnXFinance.new(stringNdO8qcm, stringwWQuYOv, uintZm4BeD, {from: accounts[4]});
		const uintCDpLc95 = BigInt("896")
		const addressF9Gk0u = accounts[2]
		const uintD5TEwNx = BigInt("1846")
		const addressI8JK2o0 = accounts[4]
		const boolquqD2kq = await OnXFinancenW6lMB.approve.call(addressF9Gk0u, uintCDpLc95, {from: accounts[1]});
//		const boolTGffl9 = await OnXFinancenW6lMB.approveAndCall.call(addressI8JK2o0, uintD5TEwNx, {from: accounts[1]});

		assert.equal(boolquqD2kq, true)
		await expect(OnXFinancenW6lMB.approveAndCall.call(addressI8JK2o0, uintD5TEwNx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringNdO8qcm = "w8sDI7zLddK"
		const stringwWQuYOv = "B7uoX9HThSSnJApTOeY9YoZMYuQEasGlW4Wzmql6knRA2QTR7Lw86fpJ9"
		const uintzIvDth = BigInt("22")
		const OnXFinancenW6lMB = await OnXFinance.new(stringNdO8qcm, stringwWQuYOv, uintzIvDth, {from: accounts[4]});
		const uintYiUxt71 = BigInt("896")
		const addressN2bBpui = accounts[2]
		const uintIdEcu0L = BigInt("852")
		const addressWPiKSfX = accounts[3]
		const uintGUXjS2J = BigInt("1846")
		const addressASHZT4D = accounts[4]
		const boolquqD2kq = await OnXFinancenW6lMB.approve.call(addressN2bBpui, uintYiUxt71, {from: accounts[1]});
		const boollgyPwU0 = await OnXFinancenW6lMB.approveAndCall.call(addressWPiKSfX, uintIdEcu0L, {from: accounts[4]});
//		const boolTGffl9 = await OnXFinancenW6lMB.approveAndCall.call(addressASHZT4D, uintGUXjS2J, {from: accounts[1]});

		assert.equal(boollgyPwU0, true)
		assert.equal(boolquqD2kq, true)
		await expect(OnXFinancenW6lMB.approveAndCall.call(addressASHZT4D, uintGUXjS2J, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringRSUZCHR = "zNqoz5cRh1OExKNJWCznNAEPL2vUKxTEKDeiD3uPw3D0UcULv03O1H1AVXeuJL3cGh88myPLYiI5xZ2C33Gbv9"
		const stringfradYHs = "aWDqgCzWoiG7jQhnT03dM2eh53a6KzPnmVbHgt7k8uDc1EuI2QwOyaXSnAhx4XdeKprL"
		const uint5XI1Te = BigInt("586")
		const OnXFinanceta6wJoB = await OnXFinance.new(stringRSUZCHR, stringfradYHs, uint5XI1Te, {from: accounts[3]});
		const uintN3qGVK = BigInt("1233")
		const addressqDcsRjp = accounts[2]
		const uinti53DHwx = BigInt("0")
		const addressHpM62CJ = accounts[4]
		const uintmjxaWtu = BigInt("1653")
		const addresseU3hcsG = accounts[0]
		const boolm9eOI5D = await OnXFinanceta6wJoB.approve.call(addressqDcsRjp, uintN3qGVK, {from: accounts[3]});
		const boolBPA5Tse = await OnXFinanceta6wJoB.transfer.call(addressHpM62CJ, uinti53DHwx, {from: accounts[0]});
		const boolBm7aB0z = await OnXFinanceta6wJoB.approveAndCall.call(addresseU3hcsG, uintmjxaWtu, {from: accounts[3]});
		const stringYIwq38V = await OnXFinanceta6wJoB.symbol.call({from: accounts[4]});

		assert.equal(boolBPA5Tse, true)
		assert.equal(boolBm7aB0z, true)
		assert.equal(boolm9eOI5D, true)
		assert.equal(stringYIwq38V, "aWDqgCzWoiG7jQhnT03dM2eh53a6KzPnmVbHgt7k8uDc1EuI2QwOyaXSnAhx4XdeKprL")
	});

	it('test for OnXFinance', async () => {
		const stringlE6eOd = "t5bOKG"
		const stringeCYUPhl = "2wjWDbfhPgjuR84Woya74GuGVBR25CqmWrkh64McpOCD4Hw5PyM5b"
		const uintuT0UK1c = BigInt("151")
		const OnXFinanceFuKg1J4 = await OnXFinance.new(stringlE6eOd, stringeCYUPhl, uintuT0UK1c, {from: accounts[1]});
		const addressDF241Qk = accounts[1]
		const uintZHl4fXX = BigInt("552")
		const addressOQa0dMz = accounts[4]
		const uintxl5Sd1 = BigInt("695")
		const addresslJVwbvr = accounts[4]
		const uintJdeodwC = BigInt("218")
		const addressxJOANtF = accounts[3]
		const bool0XsROD = await OnXFinanceFuKg1J4.transferownership.call(addressDF241Qk, {from: accounts[1]});
		const boolUHFmDu8 = await OnXFinanceFuKg1J4.approve.call(addressOQa0dMz, uintZHl4fXX, {from: "0x0000000000000000000000000000000000000001"});
		const stringXIlMhFP = await OnXFinanceFuKg1J4.name.call({from: accounts[3]});
		const boolSXnZL2r = await OnXFinanceFuKg1J4.approveAndCall.call(addresslJVwbvr, uintxl5Sd1, {from: accounts[1]});
//		const boolUwJ83u = await OnXFinanceFuKg1J4.transfer.call(addressxJOANtF, uintJdeodwC, {from: accounts[0]});

		assert.equal(bool0XsROD, true)
		assert.equal(boolSXnZL2r, true)
		assert.equal(boolUHFmDu8, true)
		assert.equal(stringXIlMhFP, "t5bOKG")
		await expect(OnXFinanceFuKg1J4.transfer.call(addressxJOANtF, uintJdeodwC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})