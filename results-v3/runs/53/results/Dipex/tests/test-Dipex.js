const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringgDlwqBh = "V3ijIstlZqVjKflxdUJPKdBUaQRImGPCF"
		const stringCVjhyLM = "xnGEGEWqsy8"
		const uintJLJnNHn = BigInt("1425")
		const DipexqR52rJt = await Dipex.new(stringgDlwqBh, stringCVjhyLM, uintJLJnNHn, {from: accounts[1]});
		const uintS9driUM = BigInt("1090")
		const addressuEMFYqD = accounts[4]
		const uint92pWFI = BigInt("699")
		const addresskvvINWX = accounts[3]
		const boolqKKctaM = await DipexqR52rJt.transfer.call(addressuEMFYqD, uintS9driUM, {from: accounts[0]});
		const boolVc4JCmf = await DipexqR52rJt.approveAndCall.call(addresskvvINWX, uint92pWFI, {from: accounts[1]});

		await expect(DipexqR52rJt.transfer.call(addressuEMFYqD, uintS9driUM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringAyB57hV = "8B3jLbhwxqjFPiAk8RxGHBjrgIeHL07fOqCsQTaUVP1snA6igeIzPuEyQNxOrgYtBMaBTBB9vbtHV5rbpaRM5fJhf1x7i3"
		const stringlF69qvP = "agR9DJGeoQYTDdczue7yVT22fE4fGIWPoueXlvnUo3RCfuWZhLV9Pgrq61ORt2occQ65174nUDPMOJ1fI"
		const uintSXruht = BigInt("1482")
		const DipexpXawrfG = await Dipex.new(stringAyB57hV, stringlF69qvP, uintSXruht, {from: accounts[1]});
		const uintZZqiX77 = BigInt("1841")
		const addressPIOQ3Kr = accounts[1]
		const addressUBs60P = accounts[2]
		const uintdDRCz8a = BigInt("368")
		const addresspvTzXw5 = accounts[1]
		const addresstFAatS2 = accounts[3]
		const uintD7QXmFC = BigInt("1560")
		const addressPDo2Z4m = accounts[4]
		const uintF9pXy0 = BigInt("825")
		const addressmOFx74r = accounts[4]
		const uintRZfGaVj = BigInt("1823")
		const addressxXXhJVv = accounts[1]
		const addressnOlbR5d = "0x0000000000000000000000000000000000000001"
		const boolcbh3Va = await DipexpXawrfG.transferFrom.call(addressUBs60P, addressPIOQ3Kr, uintZZqiX77, {from: accounts[5]});
		const boolv1Hmzl = await DipexpXawrfG.transferFrom.call(addresstFAatS2, addresspvTzXw5, uintdDRCz8a, {from: accounts[5]});
		const boolIYSA2N9 = await DipexpXawrfG.approveAndCall.call(addressPDo2Z4m, uintD7QXmFC, {from: accounts[1]});
		const boolDDgxGU = await DipexpXawrfG.approveAndCall.call(addressmOFx74r, uintF9pXy0, {from: accounts[4]});
		const boolIxXLbC0 = await DipexpXawrfG.transferFrom.call(addressnOlbR5d, addressxXXhJVv, uintRZfGaVj, {from: accounts[3]});

		await expect(DipexpXawrfG.transferFrom.call(addressUBs60P, addressPIOQ3Kr, uintZZqiX77, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringCTDwOU = "PfANSJqP3OLrGIQobJnQG1XUFnJPMqSdG2tDbnzl8id8aFfpKd6bXv5VckpYViyH"
		const stringv0rqE8c = "qM8Y6hh9F6LORsZgeIcAtTAT1ZECAMwyObWwGHUywpraveg2gXVHezUZcryJh0wApVNmtfuxO9IXw"
		const uintuRgO5vg = BigInt("1334")
		const DipexX6ut8H = await Dipex.new(stringCTDwOU, stringv0rqE8c, uintuRgO5vg, {from: accounts[4]});
		const uintZdxPlDm = BigInt("1093")
		const addressREQL6j4 = accounts[4]
		const addressCLlFNEq = accounts[3]
		const addressP2JQJC = accounts[0]
		const uintGYwDVFx = BigInt("129")
		const addresswr7BNW1 = accounts[1]
		const boolDlmMapi = await DipexX6ut8H.transfer.call(addressREQL6j4, uintZdxPlDm, {from: accounts[1]});
		const boolB3RtjV = await DipexX6ut8H.transferownership.call(addressCLlFNEq, {from: accounts[5]});
		const boolcVUnGTv = await DipexX6ut8H.transferownership.call(addressP2JQJC, {from: accounts[1]});
		const boolPTRchJw = await DipexX6ut8H.approve.call(addresswr7BNW1, uintGYwDVFx, {from: accounts[2]});

		await expect(DipexX6ut8H.transfer.call(addressREQL6j4, uintZdxPlDm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringlCghdH = "OWtj2gsYvwvXhT7V2wz406X"
		const stringPsdJbfG = "9uzTNcOtY31z5vqTn1lPDq3kyuIMefUoMzMY2B3tLSmpw1bZmmfOArhUJbpQMEWqhKgvwO2PplUIkAMvP6TxuEG"
		const uintg45t2f = BigInt("62")
		const DipexbRgaFJX = await Dipex.new(stringlCghdH, stringPsdJbfG, uintg45t2f, {from: "0x0000000000000000000000000000000000000001"});
		const uintfl4rjz = BigInt("1679")
		const addressH3lnmpi = accounts[0]
		const uintX0KDD7L = BigInt("562")
		const addressCP3ugGC = accounts[3]
		const addressTrdNvQz = accounts[3]
		const boolGTRHums = await DipexbRgaFJX.approve.call(addressH3lnmpi, uintfl4rjz, {from: accounts[3]});
		const boola5CVsFi = await DipexbRgaFJX.transferFrom.call(addressTrdNvQz, addressCP3ugGC, uintX0KDD7L, {from: accounts[2]});
	});

	it('test for Dipex', async () => {
		const stringite3zU0 = "7pThBeT"
		const string1XIVcc = "PhzpbNM40QasaLpfGTh4TZ3EE6NbSuoUXXj2iz3p6GrWjXNutE3FI"
		const uintzEisGnS = BigInt("822")
		const DipexJdDssm = await Dipex.new(stringite3zU0, string1XIVcc, uintzEisGnS, {from: accounts[3]});
		const uinti7MQJMT = BigInt("1274")
		const addressieFaQeO = "0x0000000000000000000000000000000000000001"
		const uintcNzeRgD = BigInt("1127")
		const addressDqFt2QH = accounts[1]
		const uintfhnutEN = BigInt("1648")
		const addresssVZOo71 = accounts[1]
		const addressmIbTxyd = accounts[1]
		const uintUxwoDO0 = BigInt("1724")
		const addressvTS3p6W = accounts[3]
		const boolnHlDUUx = await DipexJdDssm.approve.call(addressieFaQeO, uinti7MQJMT, {from: accounts[4]});
		const boolpKB04AL = await DipexJdDssm.approveAndCall.call(addressDqFt2QH, uintcNzeRgD, {from: accounts[2]});
		const boolV3DuXgb = await DipexJdDssm.transferFrom.call(addressmIbTxyd, addresssVZOo71, uintfhnutEN, {from: accounts[4]});
		const booluAH38Ju = await DipexJdDssm.approve.call(addressvTS3p6W, uintUxwoDO0, {from: accounts[5]});

		assert.equal(boolnHlDUUx, true)
		await expect(DipexJdDssm.approveAndCall.call(addressDqFt2QH, uintcNzeRgD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringite3zU0 = "7pThBeT"
		const string1XIVcc = "PhzpbNM40QasaLpfGTh4TZ3EE6NbSuoUXXj2iz3p6GrWjXNutE3FI"
		const uintW3hfpvs = BigInt("822")
		const DipexJdDssm = await Dipex.new(stringite3zU0, string1XIVcc, uintW3hfpvs, {from: accounts[3]});
		const uint8EBkwD = BigInt("1274")
		const addressM6u9IQd = "0x0000000000000000000000000000000000000001"
		const addressrVfJzgq = accounts[3]
		const uintG5x7apa = BigInt("1127")
		const addresscleRWJ8 = accounts[1]
		const uintHk6PUc = BigInt("1531")
		const addresstgO9Hap = accounts[0]
		const addressavFDbgF = accounts[3]
		const uintSn1SL74 = BigInt("1724")
		const addresssWAC6r = accounts[3]
		const boolnHlDUUx = await DipexJdDssm.approve.call(addressM6u9IQd, uint8EBkwD, {from: accounts[4]});
		const boolgRRq7Xc = await DipexJdDssm.transferownership.call(addressrVfJzgq, {from: accounts[2]});
		const boolpKB04AL = await DipexJdDssm.approveAndCall.call(addresscleRWJ8, uintG5x7apa, {from: accounts[2]});
		const boolxamHvW = await DipexJdDssm.transferFrom.call(addressavFDbgF, addresstgO9Hap, uintHk6PUc, {from: accounts[1]});
		const booluAH38Ju = await DipexJdDssm.approve.call(addresssWAC6r, uintSn1SL74, {from: accounts[5]});

		assert.equal(boolnHlDUUx, true)
		await expect(DipexJdDssm.transferownership.call(addressrVfJzgq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringBgnHxh = "sS9UKZEP1MVY8NjuzC8bd6fAX3uGAH68DUBEzTaNOG4zcp3rmROjJDhLj8cp56dV7pMC7iQ4hQoa"
		const stringXqHqvnJ = "PQdlPExnCHAM031QGkTXekDhsf3kt4YyKRrMb6m5hGyjJj6ul4AfN6CpznbQKszNg0COz0kLhTfxSI"
		const uint3wopYs = BigInt("666")
		const DipexdBhy22s = await Dipex.new(stringBgnHxh, stringXqHqvnJ, uint3wopYs, {from: accounts[0]});
		const uintMCpUgCc = BigInt("1391")
		const addresseRRmEh9 = accounts[1]
		const uintXNoyami = BigInt("1232")
		const addressten5V4s = accounts[0]
		const addressO9GrNIy = accounts[1]
		const uintt8kkMfc = BigInt("907")
		const addressYUnPxnM = accounts[1]
		const uintSqJXkXD = BigInt("931")
		const addressJqPjRlo = accounts[5]
		const booljvtZFRL = await DipexdBhy22s.approveAndCall.call(addresseRRmEh9, uintMCpUgCc, {from: accounts[0]});
		const booliCxDxiS = await DipexdBhy22s.transferFrom.call(addressO9GrNIy, addressten5V4s, uintXNoyami, {from: accounts[1]});
		const booltJlfeer = await DipexdBhy22s.approveAndCall.call(addressYUnPxnM, uintt8kkMfc, {from: accounts[0]});
		const boolJuxCwqx = await DipexdBhy22s.approveAndCall.call(addressJqPjRlo, uintSqJXkXD, {from: accounts[1]});

		assert.equal(booljvtZFRL, true)
		await expect(DipexdBhy22s.transferFrom.call(addressO9GrNIy, addressten5V4s, uintXNoyami, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringUqihWUj = "xdNQM9G4cUkRHR7LWdXU1oY2TfhqYO6V0eK6TvDr3YgjuuOWHAftFjScAJgurRNjMqrjAeFOv"
		const stringtFrFp9k = "HAmqhqf4txWevpt1KpKQKXeStO6Ps2MPfuwcwGCUy5QRo4TAovsd1"
		const uinteVlQ7Pv = BigInt("717")
		const DipexgostXvf = await Dipex.new(stringUqihWUj, stringtFrFp9k, uinteVlQ7Pv, {from: accounts[3]});
		const uintJbePVpj = BigInt("86")
		const addressWscGtVL = accounts[3]
		const addressXXCGN3U = accounts[0]
		const uintEj7z9UB = BigInt("594")
		const addressnaNSowQ = accounts[2]
		const addressM0bvHLD = accounts[2]
		const uintYW8BqXG = BigInt("14")
		const addressrPLacGt = accounts[1]
		const boolDSTjiJ0 = await DipexgostXvf.transfer.call(addressWscGtVL, uintJbePVpj, {from: accounts[3]});
		const boolqueqCuY = await DipexgostXvf.transferownership.call(addressXXCGN3U, {from: accounts[3]});
		const boolIjwlMcT = await DipexgostXvf.transferFrom.call(addressM0bvHLD, addressnaNSowQ, uintEj7z9UB, {from: accounts[5]});
		const boolhiJ38G = await DipexgostXvf.approveAndCall.call(addressrPLacGt, uintYW8BqXG, {from: accounts[4]});

		assert.equal(boolDSTjiJ0, true)
		assert.equal(boolqueqCuY, true)
		await expect(DipexgostXvf.transferFrom.call(addressM0bvHLD, addressnaNSowQ, uintEj7z9UB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringgDlwqBh = "V3ijIstlZqVjKflxdUJPKdBUaQRImGPCF"
		const stringCVjhyLM = "xnGEGEWqsy8"
		const uintXnH4vjZ = BigInt("1425")
		const DipexqR52rJt = await Dipex.new(stringgDlwqBh, stringCVjhyLM, uintXnH4vjZ, {from: accounts[1]});
		const uintURXjeJk = BigInt("1168")
		const addressbH5ZS9j = accounts[5]
		const uintZYHT2Ys = BigInt("1575")
		const addressc6uInRR = accounts[2]
		const uintUNkjbCW = BigInt("0")
		const addressAuZp4Hr = accounts[3]
		const boolobmUtme = await DipexqR52rJt.approve.call(addressbH5ZS9j, uintURXjeJk, {from: accounts[0]});
		const boolPpprTPD = await DipexqR52rJt.approve.call(addressc6uInRR, uintZYHT2Ys, {from: accounts[2]});
		const bools9k4Mu = await DipexqR52rJt.transfer.call(addressAuZp4Hr, uintUNkjbCW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPpprTPD, true)
		assert.equal(boolobmUtme, true)
		assert.equal(bools9k4Mu, true)
	});

	it('test for Dipex', async () => {
		const stringgDlwqBh = "V3ijIstlZqVjKflxdUJPKdBUaQRImGPCF"
		const stringCVjhyLM = "xnGEGEWqsy8"
		const uintDNo8PSK = BigInt("1425")
		const DipexqR52rJt = await Dipex.new(stringgDlwqBh, stringCVjhyLM, uintDNo8PSK, {from: accounts[1]});
		const uintyoKkqZK = BigInt("0")
		const addressMbHeMkM = "0x0000000000000000000000000000000000000001"
		const addressNxsR8H7 = accounts[0]
		const boolxkeSHNN = await DipexqR52rJt.approveAndCall.call(addressMbHeMkM, uintyoKkqZK, {from: accounts[1]});
		const boolNQ1Ua39 = await DipexqR52rJt.transferownership.call(addressNxsR8H7, {from: accounts[3]});

		assert.equal(boolxkeSHNN, true)
		await expect(DipexqR52rJt.transferownership.call(addressNxsR8H7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})