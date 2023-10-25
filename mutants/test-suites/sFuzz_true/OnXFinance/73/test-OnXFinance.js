const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringOqNmHL = "jNp1ckBb5nqcUhd1ivKIfENRxJVbVXwD7DM0jzWd59o4CSTqJ8eGt3e7t"
		const stringJxN2pC4 = "RrlRydzBRJmnmEBgLqJ8AtF1If"
		const uintlEODwDZ = BigInt("27")
		const OnXFinanceTt8GzXN = await OnXFinance.new(stringOqNmHL, stringJxN2pC4, uintlEODwDZ, {from: "0x0000000000000000000000000000000000000001"});
		const uinty27C1Ot = BigInt("1197")
		const addresskE37dCO = accounts[4]
		const uintUuoO5nR = BigInt("1987")
		const addressqmUYaTL = accounts[4]
		const uintSBUE7cN = BigInt("1618")
		const addressrnd0gtZ = accounts[4]
		const addresswrGvhrt = accounts[3]
		const boolDlkK0Xc = await OnXFinanceTt8GzXN.approve.call(addresskE37dCO, uinty27C1Ot, {from: accounts[0]});
		const boolbhtewtg = await OnXFinanceTt8GzXN.decreaseAllowance.call(addressqmUYaTL, uintUuoO5nR, {from: accounts[0]});
		const boolgPYnxtN = await OnXFinanceTt8GzXN.decreaseAllowance.call(addressrnd0gtZ, uintSBUE7cN, {from: "0x0000000000000000000000000000000000000001"});
		const uintiewYvn2 = await OnXFinanceTt8GzXN.balanceOf.call(addresswrGvhrt, {from: accounts[4]});
		const uint8aUR3m3t = await OnXFinanceTt8GzXN.decimals.call({from: accounts[3]});
	});

	it('test for OnXFinance', async () => {
		const stringdXHYd3p = "DKbkina1pvOSW5J7wTmbCcnLT07TdI5KaZIv"
		const stringUXJhZLA = "r7gaKEvm7J26ULe9qzPCyZLBOdhpGnz9mKAGAHbAfUQAPUDVDjCXTbGRbR3lEDcyOBm"
		const uintBYyZID6 = BigInt("1634")
		const OnXFinanceYAH5DqO = await OnXFinance.new(stringdXHYd3p, stringUXJhZLA, uintBYyZID6, {from: accounts[0]});
		const addressUtnZZOP = "0x0000000000000000000000000000000000000001"
		const uintDpT73E = BigInt("1270")
		const addresspNOUXF8 = accounts[2]
		const uintKMg0Qw1 = BigInt("1808")
		const addresswWF9hez = accounts[4]
		const uintRzJbPW3 = BigInt("1235")
		const addressOQmFeSz = accounts[1]
		const addressNpsxFuB = accounts[1]
		const uintR6vlM7W = await OnXFinanceYAH5DqO.balanceOf.call(addressUtnZZOP, {from: accounts[1]});
//		const boolfyH3WpO = await OnXFinanceYAH5DqO.approveAndCall.call(addresspNOUXF8, uintDpT73E, {from: "0x0000000000000000000000000000000000000001"});
//		const boolXInNGru = await OnXFinanceYAH5DqO.transfer.call(addresswWF9hez, uintKMg0Qw1, {from: accounts[0]});
//		const uint8a0yHjgA = await OnXFinanceYAH5DqO.decimals.call({from: accounts[4]});
//		const booljvy1dO = await OnXFinanceYAH5DqO.transferFrom.call(addressNpsxFuB, addressOQmFeSz, uintRzJbPW3, {from: accounts[3]});

		assert.equal(uintR6vlM7W, BigInt("0"))
		await expect(OnXFinanceYAH5DqO.approveAndCall.call(addresspNOUXF8, uintDpT73E, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringPpnUA7E = "CkRiHKK02Oz921FMPMNNI9kho3bhTHZJjknNuCGfHlqfQjtnAvtv280oTQqtnSPN5HsDZiktXGhPifYewAaiBbUNy1"
		const stringVfTVJgL = "jvzeUXz3LRfnUkubcpS018BUAsd7ELqNvPHaxB8SXL"
		const uintN1Ot8Dw = BigInt("574")
		const OnXFinanceSOXfhK = await OnXFinance.new(stringPpnUA7E, stringVfTVJgL, uintN1Ot8Dw, {from: accounts[3]});
		const uintyGyDkGG = BigInt("1463")
		const addressEpfK5TJ = "0x0000000000000000000000000000000000000001"
		const uintNL3Omdj = BigInt("1467")
		const addressrpjyKX9 = accounts[5]
		const addressKUNVC5d = accounts[0]
		const uintE0F53oe = BigInt("1469")
		const addressk3zgmnK = accounts[2]
//		const boolfoI6k2Q = await OnXFinanceSOXfhK.transfer.call(addressEpfK5TJ, uintyGyDkGG, {from: accounts[5]});
//		const uint8ySwsvW7 = await OnXFinanceSOXfhK.decimals.call({from: accounts[2]});
//		const boolaIp2JwY = await OnXFinanceSOXfhK.transferFrom.call(addressKUNVC5d, addressrpjyKX9, uintNL3Omdj, {from: accounts[5]});
//		const stringqsEtHif = await OnXFinanceSOXfhK.symbol.call({from: accounts[3]});
//		const boolPcgTT1W = await OnXFinanceSOXfhK.transfer.call(addressk3zgmnK, uintE0F53oe, {from: accounts[1]});

		await expect(OnXFinanceSOXfhK.transfer.call(addressEpfK5TJ, uintyGyDkGG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringxKIa3Ko = "3QO1krXaYWrN8tMfwLwGbxGGvEBuJw4rDXe68qRDY8"
		const stringHZs7Cl9 = "8SN9c5T5RLZ2BjbqBShImAR4FM9ByqAK1CP5NbZNjfrU1giv5E"
		const uintrbcxAS = BigInt("1870")
		const OnXFinanceMgRGjQK = await OnXFinance.new(stringxKIa3Ko, stringHZs7Cl9, uintrbcxAS, {from: accounts[3]});
		const uintdQuXCX5 = BigInt("1595")
		const addressVTbvS6Z = accounts[3]
		const uintzQQCNw4 = BigInt("490")
		const addressQNwc2e = accounts[4]
		const boolXTtFddt = await OnXFinanceMgRGjQK.approve.call(addressVTbvS6Z, uintdQuXCX5, {from: accounts[3]});
//		const boolbq3wr5e = await OnXFinanceMgRGjQK.approveAndCall.call(addressQNwc2e, uintzQQCNw4, {from: accounts[1]});

		assert.equal(boolXTtFddt, true)
		await expect(OnXFinanceMgRGjQK.approveAndCall.call(addressQNwc2e, uintzQQCNw4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringPpnUA7E = "CkRiHKK02Oz921FMPMNNI9kho3bhTHZJjknNuCGfHlqfQjtnAvtv280oTQqtnSPN5HsDZiktXGhPifYewAaiBbUNy1"
		const stringVfTVJgL = "jvzeUXz3LRfnUkubcpS018BUAsd7ELqNvPHaxB8SXL"
		const uintA0DvifO = BigInt("574")
		const OnXFinanceSOXfhK = await OnXFinance.new(stringPpnUA7E, stringVfTVJgL, uintA0DvifO, {from: accounts[3]});
		const uintcOctSE3 = BigInt("1484")
		const addressbTAVJXJ = accounts[5]
		const addressyBrJpDr = accounts[0]
		const uintdQWvuwB = BigInt("1469")
		const addressct4KpXq = accounts[2]
		const uint8ySwsvW7 = await OnXFinanceSOXfhK.decimals.call({from: accounts[2]});
//		const boolaIp2JwY = await OnXFinanceSOXfhK.transferFrom.call(addressyBrJpDr, addressbTAVJXJ, uintcOctSE3, {from: accounts[5]});
//		const stringqsEtHif = await OnXFinanceSOXfhK.symbol.call({from: accounts[3]});
//		const boolPcgTT1W = await OnXFinanceSOXfhK.transfer.call(addressct4KpXq, uintdQWvuwB, {from: accounts[1]});

		assert.equal(uint8ySwsvW7, BigInt("18"))
		await expect(OnXFinanceSOXfhK.transferFrom.call(addressyBrJpDr, addressbTAVJXJ, uintcOctSE3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringxKIa3Ko = "3QO1krXaYWrN8tMfwLwGbxGGvEBuJw4rDXe68qRDY8"
		const stringHZs7Cl9 = "8SN9c5T5RLZ2BjbqBShImAR4FM9ByqAK1CP5NbZNjfrU1giv5E"
		const uintAXCA3eu = BigInt("1870")
		const OnXFinanceMgRGjQK = await OnXFinance.new(stringxKIa3Ko, stringHZs7Cl9, uintAXCA3eu, {from: accounts[3]});
		const uintjlvfQh = BigInt("660")
		const addressSLIZtZd = accounts[4]
		const uintLqoeR9s = BigInt("106")
		const addressPUwftpA = accounts[1]
		const uintnnBNa7q = BigInt("1595")
		const addressuCePPJj = accounts[3]
		const boolhBYdk3R = await OnXFinanceMgRGjQK.approve.call(addressSLIZtZd, uintjlvfQh, {from: accounts[0]});
//		const boolVpaV2BG = await OnXFinanceMgRGjQK.decreaseAllowance.call(addressPUwftpA, uintLqoeR9s, {from: accounts[5]});
//		const boolXTtFddt = await OnXFinanceMgRGjQK.approve.call(addressuCePPJj, uintnnBNa7q, {from: accounts[3]});
//		const uint8Igh4nN = await OnXFinanceMgRGjQK.decimals.call({from: accounts[5]});

		assert.equal(boolhBYdk3R, true)
		await expect(OnXFinanceMgRGjQK.decreaseAllowance.call(addressPUwftpA, uintLqoeR9s, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringuLhGsIv = "xWdS3tEeL7X7QznsSq"
		const stringz0dDF96 = "VOLFo7B9m0yDuOizQuT9sKJPnNcThgajF4sUXr64y3UmuniTePeqNPWWXzzAmQ5OEe"
		const uintads41sx = BigInt("114")
		const OnXFinancekFpd9pj = await OnXFinance.new(stringuLhGsIv, stringz0dDF96, uintads41sx, {from: accounts[4]});
		const uintsmuYqZG = BigInt("480")
		const addresszomX6m = accounts[2]
		const addressLQDOfVQ = accounts[4]
		const addressb0AsRV8 = "0x0000000000000000000000000000000000000001"
		const boolecrRjIy = await OnXFinancekFpd9pj.transferFrom.call(addressLQDOfVQ, addresszomX6m, uintsmuYqZG, {from: accounts[4]});
		const uintJlv7fUE = await OnXFinancekFpd9pj.balanceOf.call(addressb0AsRV8, {from: accounts[5]});

		assert.equal(boolecrRjIy, true)
		assert.equal(uintJlv7fUE, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringuLhGsIv = "xWdS3tEeL7X7QznsSq"
		const stringz0dDF96 = "VOLFo7B9m0yDuOizQuT9sKJPnNcThgajF4sUXr64y3UmuniTePeqNPWWXzzAmQ5OEe"
		const uintsxwTNSe = BigInt("114")
		const OnXFinancekFpd9pj = await OnXFinance.new(stringuLhGsIv, stringz0dDF96, uintsxwTNSe, {from: accounts[4]});
		const uintanFlWxO = BigInt("499")
		const addresseH0ceJR = accounts[2]
		const addressmOQkEX = accounts[4]
		const addressLLGoEg9 = accounts[5]
		const addressje8YVXN = "0x0000000000000000000000000000000000000001"
		const boolecrRjIy = await OnXFinancekFpd9pj.transferFrom.call(addressmOQkEX, addresseH0ceJR, uintanFlWxO, {from: accounts[4]});
//		const boolTYVYj1t = await OnXFinancekFpd9pj.transferownership.call(addressLLGoEg9, {from: accounts[0]});
//		const uintJlv7fUE = await OnXFinancekFpd9pj.balanceOf.call(addressje8YVXN, {from: accounts[5]});

		assert.equal(boolecrRjIy, true)
		await expect(OnXFinancekFpd9pj.transferownership.call(addressLLGoEg9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringuLhGsIv = "xWdS3tEeL7X7QznsSq"
		const stringz0dDF96 = "VOLFo7B9m0yDuOizQuT9sKJPnNcThgajF4sUXr64y3UmuniTePeqNPWWXzzAmQ5OEe"
		const uint2d0vuD = BigInt("114")
		const OnXFinancekFpd9pj = await OnXFinance.new(stringuLhGsIv, stringz0dDF96, uint2d0vuD, {from: accounts[4]});
		const uintnms7GdI = BigInt("499")
		const addressbyhKt1D = accounts[2]
		const addresspG4UM2P = accounts[4]
		const addressGU3F9gY = accounts[2]
		const uintz43kdL4 = BigInt("1959")
		const addressqkMxyi = accounts[2]
		const uintPjHEsB5 = BigInt("456")
		const addressIBbcrEJ = accounts[0]
		const addresskFXB0cf = accounts[4]
		const addressTucXJ27 = accounts[5]
		const addressHVUwNQO = "0x0000000000000000000000000000000000000002"
		const boolecrRjIy = await OnXFinancekFpd9pj.transferFrom.call(addresspG4UM2P, addressbyhKt1D, uintnms7GdI, {from: accounts[4]});
		const uintEvQZWxP = await OnXFinancekFpd9pj.balanceOf.call(addressGU3F9gY, {from: accounts[4]});
		const boolWxXGPKX = await OnXFinancekFpd9pj.approveAndCall.call(addressqkMxyi, uintz43kdL4, {from: accounts[4]});
//		const boolvYYaAPS = await OnXFinancekFpd9pj.transferFrom.call(addresskFXB0cf, addressIBbcrEJ, uintPjHEsB5, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTYVYj1t = await OnXFinancekFpd9pj.transferownership.call(addressTucXJ27, {from: accounts[0]});
//		const uintJlv7fUE = await OnXFinancekFpd9pj.balanceOf.call(addressHVUwNQO, {from: accounts[5]});

		assert.equal(boolWxXGPKX, true)
		assert.equal(boolecrRjIy, true)
		assert.equal(uintEvQZWxP, BigInt("0"))
		await expect(OnXFinancekFpd9pj.transferFrom.call(addresskFXB0cf, addressIBbcrEJ, uintPjHEsB5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringuLhGsIv = "xWdS3tEeL7X7QznsSq"
		const stringz0dDF96 = "VOLFo7B9m0yDuOizQuT9sKJPnNcThgajF4sUXr64y3UmuniTePeqNPWWXzzAmQ5OEe"
		const uintoNKPQxG = BigInt("114")
		const OnXFinancekFpd9pj = await OnXFinance.new(stringuLhGsIv, stringz0dDF96, uintoNKPQxG, {from: accounts[4]});
		const addressWb4NJt8 = accounts[4]
		const uintltMuCss = BigInt("16")
		const addressx3xbt8 = accounts[3]
		const booliRWFi3G = await OnXFinancekFpd9pj.transferownership.call(addressWb4NJt8, {from: accounts[4]});
		const boolHp03j4G = await OnXFinancekFpd9pj.transfer.call(addressx3xbt8, uintltMuCss, {from: accounts[4]});

		assert.equal(boolHp03j4G, true)
		assert.equal(booliRWFi3G, true)
	});

	it('test for OnXFinance', async () => {
		const stringuLhGsIv = "xWdS3tEeL7X7QznsSq"
		const stringz0dDF96 = "VOLFo7B9m0yDuOizQuT9sKJPnNcThgajF4sUXr64y3UmuniTePeqNPWWXzzAmQ5OEe"
		const uintPv2H3N = BigInt("114")
		const OnXFinancekFpd9pj = await OnXFinance.new(stringuLhGsIv, stringz0dDF96, uintPv2H3N, {from: accounts[4]});
		const uinttpvMM2 = BigInt("0")
		const addresszUZg1C = accounts[2]
		const boolHp03j4G = await OnXFinancekFpd9pj.transfer.call(addresszUZg1C, uinttpvMM2, {from: accounts[4]});

		assert.equal(boolHp03j4G, true)
	});

	it('test for OnXFinance', async () => {
		const stringuLhGsIv = "xWdS3tEeL7X7QznsSq"
		const stringz0dDF96 = "VOLFo7B9m0yDuOizQuT9sKJPnNcThgajF4sUXr64y3UmuniTePeqNPWWXzzAmQ5OEe"
		const uintl5K4DUA = BigInt("114")
		const OnXFinancekFpd9pj = await OnXFinance.new(stringuLhGsIv, stringz0dDF96, uintl5K4DUA, {from: accounts[4]});
		const uintgjKsYf6 = BigInt("351")
		const addressVKClXV = "0x0000000000000000000000000000000000000001"
		const uinthDrSmHb = BigInt("0")
		const addressNHa9wh7 = accounts[1]
		const uintuJf6vuZ = BigInt("21")
		const addressiVg6YbT = accounts[3]
		const uintpj3NkLg = BigInt("480")
		const addressOJt6Ai2 = accounts[3]
		const addressBoPQFQt = accounts[4]
		const boolw5FueTz = await OnXFinancekFpd9pj.approve.call(addressVKClXV, uintgjKsYf6, {from: accounts[4]});
		const boolqsy0pvP = await OnXFinancekFpd9pj.approveAndCall.call(addressNHa9wh7, uinthDrSmHb, {from: accounts[4]});
		const boolOl1bMKL = await OnXFinancekFpd9pj.approve.call(addressiVg6YbT, uintuJf6vuZ, {from: accounts[3]});
		const boolecrRjIy = await OnXFinancekFpd9pj.transferFrom.call(addressBoPQFQt, addressOJt6Ai2, uintpj3NkLg, {from: accounts[4]});

		assert.equal(boolOl1bMKL, true)
		assert.equal(boolecrRjIy, true)
		assert.equal(boolqsy0pvP, true)
		assert.equal(boolw5FueTz, true)
	});
})