const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintpKrn077 = BigInt("1134")
		const stringUy0UcD = "jNDERBKUg6vHXuVRKiocFfcP8aEAo6i27TFfTtU28bNt3VswUybaNQ"
		const stringqiYpSv = "J"
		const INSG4t7yEp = await INS.new(uintpKrn077, stringUy0UcD, stringqiYpSv, {from: "0x0000000000000000000000000000000000000001"});
		const uintYvXzSs = BigInt("1972")
		const uintx4jCab4 = BigInt("202")
		const addressG4PXjaG = accounts[4]
		const byteeImcmPW = "0x19180e1d080a05120602100c0a"
		const uintOJeSV2n = BigInt("1307")
		const addressJyVz14W = accounts[0]
		const uintAG4jCAD = BigInt("1399")
		const addressQpqcnQr = accounts[1]
		const boolUNNXdAh = await INSG4t7yEp.burn.call(uintYvXzSs, {from: accounts[3]});
		const boolo8wsOtG = await INSG4t7yEp.burnFrom.call(addressG4PXjaG, uintx4jCab4, {from: accounts[2]});
		const boolyyz7k9B = await INSG4t7yEp.approveAndCall.call(addressJyVz14W, uintOJeSV2n, byteeImcmPW, {from: accounts[1]});
		const booldju6JrT = await INSG4t7yEp.approve.call(addressQpqcnQr, uintAG4jCAD, {from: accounts[1]});
	});

	it('test for INS', async () => {
		const uintQPwAGjj = BigInt("697")
		const stringA8nl3r6 = "o9uuCVHePjTCP2V32j"
		const stringno5JQMy = "aD7ItG"
		const INSesZrdIF = await INS.new(uintQPwAGjj, stringA8nl3r6, stringno5JQMy, {from: accounts[0]});
		const uintF5m7hvP = BigInt("204")
		const addressEYhtxZ9 = accounts[1]
		const uintLO19m9Z = BigInt("1777")
		const addressbdrm7nW = accounts[2]
		const addressr5qtbiX = "0x0000000000000000000000000000000000000001"
		const uintkVOFO5U = BigInt("284")
		const addressmJy6UVn = accounts[4]
		const boolneoAmN7 = await INSesZrdIF.approve.call(addressEYhtxZ9, uintF5m7hvP, {from: accounts[1]});
//		const boolwgzYS6m = await INSesZrdIF.transferFrom.call(addressr5qtbiX, addressbdrm7nW, uintLO19m9Z, {from: accounts[1]});
//		const boolOBgHmQJ = await INSesZrdIF.approve.call(addressmJy6UVn, uintkVOFO5U, {from: accounts[1]});

		assert.equal(boolneoAmN7, true)
		await expect(INSesZrdIF.transferFrom.call(addressr5qtbiX, addressbdrm7nW, uintLO19m9Z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintFkzhR0z = BigInt("505")
		const stringQiKy40S = "cE9BixU3tTimZHu6ySGWpOOfxMqadpuCaD1mGAMNzoAhBjADyfZu4mu8oXuIOGd9hJFROpVEdbRdkB"
		const stringrQDS7Cq = "UlRnT9YcMzFKiX4YRIOqnlcf2OdbVvlmBLkWbT3azypkwklW4naU1cTNW9WJZgJ7W9ZCpbfkIvwyLKHmd1XG5gsJL"
		const INS8U6vqH = await INS.new(uintFkzhR0z, stringQiKy40S, stringrQDS7Cq, {from: accounts[0]});
		const uintdiCckrF = BigInt("1558")
		const addressFrLLE9y = accounts[3]
		const uintWWOk7SV = BigInt("20")
		const addressFsZFtO = accounts[3]
		const uintQUhClTo = BigInt("1746")
		const addressSf4zdRS = accounts[2]
		const uintz9KNpzg = BigInt("26")
		const addressmAjprU8 = "0x0000000000000000000000000000000000000001"
		const boolTH6Qtb3 = await INS8U6vqH.approve.call(addressFrLLE9y, uintdiCckrF, {from: accounts[4]});
		const boolo0JuBGe = await INS8U6vqH.approve.call(addressFsZFtO, uintWWOk7SV, {from: accounts[0]});
//		const boolbfXBhs0 = await INS8U6vqH.burnFrom.call(addressSf4zdRS, uintQUhClTo, {from: accounts[4]});
//		const boolAXrs0Y = await INS8U6vqH.transfer.call(addressmAjprU8, uintz9KNpzg, {from: accounts[3]});

		assert.equal(boolTH6Qtb3, true)
		assert.equal(boolo0JuBGe, true)
		await expect(INS8U6vqH.burnFrom.call(addressSf4zdRS, uintQUhClTo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintsgIypI = BigInt("109")
		const stringZiLlQW5 = "FDsMZcRc"
		const stringrgCKdA4 = "S9XY7PXAG5LxbVdBROTYWmhH57Q2xU3CxqvO"
		const INSZyt7PbF = await INS.new(uintsgIypI, stringZiLlQW5, stringrgCKdA4, {from: accounts[2]});
		const uintQNHk5dA = BigInt("385")
		const uintO9WtbD = BigInt("670")
		const addressgJX47vP = accounts[1]
		const addressAr7Pilj = accounts[2]
		const uintUnts05Q = BigInt("1715")
		const addressciAKJtW = accounts[2]
		const uintxpAf0KY = BigInt("3")
//		const boolJrndYZo = await INSZyt7PbF.burn.call(uintQNHk5dA, {from: accounts[4]});
//		const boolfZ8hNrJ = await INSZyt7PbF.transferFrom.call(addressAr7Pilj, addressgJX47vP, uintO9WtbD, {from: accounts[2]});
//		const boolV9eEBz6 = await INSZyt7PbF.approve.call(addressciAKJtW, uintUnts05Q, {from: accounts[4]});
//		const bool6T5by9 = await INSZyt7PbF.burn.call(uintxpAf0KY, {from: accounts[2]});

		await expect(INSZyt7PbF.burn.call(uintQNHk5dA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintWWEVSS2 = BigInt("505")
		const stringQiKy40S = "cE9BixU3tTimZHu6ySGWpOOfxMqadpuCaD1mGAMNzoAhBjADyfZu4mu8oXuIOGd9hJFROpVEdbRdkB"
		const stringrQDS7Cq = "UlRnT9YcMzFKiX4YRIOqnlcf2OdbVvlmBLkWbT3azypkwklW4naU1cTNW9WJZgJ7W9ZCpbfkIvwyLKHmd1XG5gsJL"
		const INS8U6vqH = await INS.new(uintWWEVSS2, stringQiKy40S, stringrQDS7Cq, {from: accounts[0]});
		const uintKtbZKSe = BigInt("1558")
		const addressUrx1i89 = accounts[4]
		const uintAcOhbCI = BigInt("20")
		const addressNQVq2p = accounts[3]
		const uintmBUpjnk = BigInt("26")
		const addresstiKNU2N = "0x0000000000000000000000000000000000000001"
		const boolTH6Qtb3 = await INS8U6vqH.approve.call(addressUrx1i89, uintKtbZKSe, {from: accounts[4]});
		const boolo0JuBGe = await INS8U6vqH.approve.call(addressNQVq2p, uintAcOhbCI, {from: accounts[0]});
//		const boolAXrs0Y = await INS8U6vqH.transfer.call(addresstiKNU2N, uintmBUpjnk, {from: accounts[3]});

		assert.equal(boolTH6Qtb3, true)
		assert.equal(boolo0JuBGe, true)
		await expect(INS8U6vqH.transfer.call(addresstiKNU2N, uintmBUpjnk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintUSzdpWK = BigInt("505")
		const stringQiKy40S = "cE9BixU3tTimZHu6ySGWpOOfxMqadpuCaD1mGAMNzoAhBjADyfZu4mu8oXuIOGd9hJFROpVEdbRdkB"
		const stringrQDS7Cq = "UlRnT9YcMzFKiX4YRIOqnlcf2OdbVvlmBLkWbT3azypkwklW4naU1cTNW9WJZgJ7W9ZCpbfkIvwyLKHmd1XG5gsJL"
		const INS8U6vqH = await INS.new(uintUSzdpWK, stringQiKy40S, stringrQDS7Cq, {from: accounts[0]});
		const uintkFJe6bc = BigInt("1558")
		const addressrPjPy6V = accounts[4]
		const byteKRafSPy = "0x121f0a070e110c0c021e021216171e0d"
		const uintKi41lAn = BigInt("1814")
		const addressYP2cbKb = accounts[0]
		const uintU08ed3B = BigInt("20")
		const addressOA4PC5y = accounts[3]
		const uintKuao8K = BigInt("2045")
		const addressamCDyNU = "0x0000000000000000000000000000000000000001"
		const boolTH6Qtb3 = await INS8U6vqH.approve.call(addressrPjPy6V, uintkFJe6bc, {from: accounts[4]});
//		const booljGxolq0 = await INS8U6vqH.approveAndCall.call(addressYP2cbKb, uintKi41lAn, byteKRafSPy, {from: accounts[1]});
//		const boolo0JuBGe = await INS8U6vqH.approve.call(addressOA4PC5y, uintU08ed3B, {from: accounts[0]});
//		const boolAXrs0Y = await INS8U6vqH.transfer.call(addressamCDyNU, uintKuao8K, {from: accounts[3]});

		assert.equal(boolTH6Qtb3, true)
		await expect(INS8U6vqH.approveAndCall.call(addressYP2cbKb, uintKi41lAn, byteKRafSPy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintDnIsnSS = BigInt("1919")
		const stringDpXjeOm = "26dllYy5Gg3RvpJwPWFUbCqCmiC9lfwEeoMUQHHXMxtgDDfJTi1Ib79Bdt"
		const stringpb83oro = "8Lk7B6ndnhgxR7zKzA8OvFb7GeJRfIO8uS2LDMJuMeBL5kcapqjn8ExRetVPmr74DezR"
		const INSRW6I7fp = await INS.new(uintDnIsnSS, stringDpXjeOm, stringpb83oro, {from: accounts[1]});
		const uintQcclA9D = BigInt("76")
		const addressZLxWiH5 = accounts[4]
		const uinti7v1IWz = BigInt("940")
		const addressE9a6CUt = accounts[2]
		const uintiC2EAG = BigInt("1187")
		const addressydzb5Ly = accounts[1]
		const uint7UPoMi = BigInt("1897")
		const addressFadH3q = accounts[5]
		const addressnwsxUfs = accounts[3]
		const uintw5FMOfX = BigInt("939")
		const addressZIg8WZU = accounts[4]
		const boolY4so8vh = await INSRW6I7fp.approve.call(addressZLxWiH5, uintQcclA9D, {from: accounts[1]});
		const boolKc3Kf6q = await INSRW6I7fp.approve.call(addressE9a6CUt, uinti7v1IWz, {from: accounts[0]});
//		const boolhGrdVgh = await INSRW6I7fp.burnFrom.call(addressydzb5Ly, uintiC2EAG, {from: accounts[1]});
//		const boolm09EjAX = await INSRW6I7fp.transferFrom.call(addressnwsxUfs, addressFadH3q, uint7UPoMi, {from: accounts[1]});
//		const boolfSfoj8e = await INSRW6I7fp.approve.call(addressZIg8WZU, uintw5FMOfX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKc3Kf6q, true)
		assert.equal(boolY4so8vh, true)
		await expect(INSRW6I7fp.burnFrom.call(addressydzb5Ly, uintiC2EAG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uints5aRymd = BigInt("697")
		const stringA8nl3r6 = "o9uuCVHePjTCP2V32j"
		const stringno5JQMy = "aD7ItG"
		const INSesZrdIF = await INS.new(uints5aRymd, stringA8nl3r6, stringno5JQMy, {from: accounts[0]});
		const uint1XI0DW = BigInt("184")
		const addresshONmKEX = accounts[2]
		const uintzNbuf22 = BigInt("1805")
		const addressfFxd5xl = accounts[2]
		const uintEERz6rG = BigInt("601")
		const addressCPZWnnS = accounts[2]
		const uintHCvAEXM = BigInt("1777")
		const addressD49LMnf = accounts[2]
		const addressSMGC6O = "0x0000000000000000000000000000000000000001"
		const boolrwtz6tC = await INSesZrdIF.transfer.call(addresshONmKEX, uint1XI0DW, {from: accounts[0]});
		const boolwIjhTDr = await INSesZrdIF.approve.call(addressfFxd5xl, uintzNbuf22, {from: accounts[1]});
		const boolneoAmN7 = await INSesZrdIF.approve.call(addressCPZWnnS, uintEERz6rG, {from: accounts[1]});
//		const boolwgzYS6m = await INSesZrdIF.transferFrom.call(addressSMGC6O, addressD49LMnf, uintHCvAEXM, {from: accounts[1]});

		assert.equal(boolneoAmN7, true)
		assert.equal(boolrwtz6tC, true)
		assert.equal(boolwIjhTDr, true)
		await expect(INSesZrdIF.transferFrom.call(addressSMGC6O, addressD49LMnf, uintHCvAEXM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintjIYRuet = BigInt("87")
		const stringLW8kL9g = "YH2rEmJLdhH8LgLGsiW28edHSkhD4J2a9AvevDtdIIqdsuboQj"
		const stringEC90Iyp = "oxAbVRw3nG4KYbiK9kB4kUtnHBnhWaGXMo5R7dA8"
		const INSQgzHEKC = await INS.new(uintjIYRuet, stringLW8kL9g, stringEC90Iyp, {from: accounts[1]});
		const uintQEhY1CO = BigInt("1940")
		const uintZAvsHSq = BigInt("1127")
		const addressF5mRb6P = accounts[0]
		const boolvSEGhLN = await INSQgzHEKC.burn.call(uintQEhY1CO, {from: accounts[1]});
		const boolodL7vX = await INSQgzHEKC.transfer.call(addressF5mRb6P, uintZAvsHSq, {from: accounts[1]});

		assert.equal(boolodL7vX, true)
		assert.equal(boolvSEGhLN, true)
	});

	it('test for INS', async () => {
		const uintYeVHKK6 = BigInt("697")
		const stringA8nl3r6 = "o9uuCVHePjTCP2V32j"
		const stringno5JQMy = "aD7ItG"
		const INSesZrdIF = await INS.new(uintYeVHKK6, stringA8nl3r6, stringno5JQMy, {from: accounts[0]});
		const uint5BNedG = BigInt("1777")
		const addressB7mdtwy = accounts[2]
		const addressNlxGyNR = "0x00000000000000000000000000000000000000-1"
		const uintzvxaqPB = BigInt("1825")
//		const boolwgzYS6m = await INSesZrdIF.transferFrom.call(addressNlxGyNR, addressB7mdtwy, uint5BNedG, {from: accounts[1]});
//		const boolfgBAZNu = await INSesZrdIF.burn.call(uintzvxaqPB, {from: accounts[4]});

		await expect(INSesZrdIF.transferFrom.call(addressNlxGyNR, addressB7mdtwy, uint5BNedG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})