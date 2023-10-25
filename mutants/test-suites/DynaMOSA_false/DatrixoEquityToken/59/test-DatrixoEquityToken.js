const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addresswfqU2zl = accounts[3]
		const uintn8lPBg = BigInt("409")
		const DatrixoEquityTokenAcXzyXz = await DatrixoEquityToken.new(addresswfqU2zl, uintn8lPBg, {from: accounts[0]});
		const uintuMvgKqy = BigInt("605")
		const addresszPGHhOW = accounts[1]
		const addressKOFFfVG = accounts[2]
		const uintnICzuhB = BigInt("467")
		const addressFh1pU2V = accounts[4]
		const uintMA3sNT3 = BigInt("1263")
		const addressP14Poga = accounts[1]
		const uintD9WWI42 = BigInt("1085")
		const addressPHZuJ1G = "0x0000000000000000000000000000000000000001"
		const uintRsd5hjy = BigInt("549")
		const addressML0LgSN = accounts[0]
		const addressCdLgRoo = accounts[3]
//		const boolV9fSd9q = await DatrixoEquityTokenAcXzyXz.transferFrom.call(addressKOFFfVG, addresszPGHhOW, uintuMvgKqy, {from: accounts[3]});
//		const boolebDG8kF = await DatrixoEquityTokenAcXzyXz.transfer.call(addressFh1pU2V, uintnICzuhB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcQZxa9r = await DatrixoEquityTokenAcXzyXz.transfer.call(addressP14Poga, uintMA3sNT3, {from: accounts[0]});
//		const addressarrayIZCvZ8n = await DatrixoEquityTokenAcXzyXz.getShareholdersArray.call({from: accounts[1]});
//		const booltOQ2OJw = await DatrixoEquityTokenAcXzyXz.transfer.call(addressPHZuJ1G, uintD9WWI42, {from: "0x0000000000000000000000000000000000000001"});
//		const bool7hpFha = await DatrixoEquityTokenAcXzyXz.transferFrom.call(addressCdLgRoo, addressML0LgSN, uintRsd5hjy, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenAcXzyXz.transferFrom.call(addressKOFFfVG, addresszPGHhOW, uintuMvgKqy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressifyMsxL = accounts[4]
		const uintT052Rpu = BigInt("1938")
		const DatrixoEquityTokenGecYFFM = await DatrixoEquityToken.new(addressifyMsxL, uintT052Rpu, {from: "0x0000000000000000000000000000000000000001"});
		const addresshk6iMU = accounts[3]
		const addressB8e5tvs = accounts[3]
		const boolAX9pzmN = await DatrixoEquityTokenGecYFFM.removeShareholder.call(addresshk6iMU, {from: accounts[3]});
		const addressarraylq5zHzA = await DatrixoEquityTokenGecYFFM.getShareholdersArray.call({from: accounts[0]});
		const boolk3Gl1Bg = await DatrixoEquityTokenGecYFFM.removeShareholder.call(addressB8e5tvs, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenGecYFFM.afterStartTime.call({from: accounts[0]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressDj63Rh5 = accounts[2]
		const uintMOcWRcZ = BigInt("811")
		const DatrixoEquityToken8HTuCl = await DatrixoEquityToken.new(addressDj63Rh5, uintMOcWRcZ, {from: accounts[1]});
		const uintpGQ4oH6 = BigInt("1776")
		const addressNEHjTWm = accounts[5]
		const addressbrjCvx = accounts[4]
		const uintsDB7nA = BigInt("904")
		const addressjehSe0z = accounts[4]
		const addressXLKFpI9 = accounts[0]
//		const boolfvwpuP0 = await DatrixoEquityToken8HTuCl.transferFrom.call(addressbrjCvx, addressNEHjTWm, uintpGQ4oH6, {from: accounts[1]});
//		const boolJbNcvqz = await DatrixoEquityToken8HTuCl.transferFrom.call(addressXLKFpI9, addressjehSe0z, uintsDB7nA, {from: accounts[4]});

		await expect(DatrixoEquityToken8HTuCl.transferFrom.call(addressbrjCvx, addressNEHjTWm, uintpGQ4oH6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressaQ7lPF6 = accounts[4]
		const uint8KC7np = BigInt("1734")
		const DatrixoEquityTokenxP1AaC = await DatrixoEquityToken.new(addressaQ7lPF6, uint8KC7np, {from: accounts[0]});
		const uintTi72E5A = BigInt("156")
		const addressY1bJN4 = accounts[5]
		const uintWag7hBX = BigInt("230")
		const addressKTjE7A6 = accounts[2]
		const addressogReRTK = accounts[4]
		const uintrpCyS1z = BigInt("1709")
		const addresspG0KER = accounts[0]
		const addressPK7zZS8 = accounts[5]
		const addressH4pjxQP = accounts[3]
		const booloaiGVfJ = await DatrixoEquityTokenxP1AaC.transfer.call(addressY1bJN4, uintTi72E5A, {from: accounts[4]});
		const addressarraygb6eXYe = await DatrixoEquityTokenxP1AaC.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const boolNgmmWbF = await DatrixoEquityTokenxP1AaC.transferFrom.call(addressogReRTK, addressKTjE7A6, uintWag7hBX, {from: accounts[4]});
//		const boolyVw5J2N = await DatrixoEquityTokenxP1AaC.transfer.call(addresspG0KER, uintrpCyS1z, {from: accounts[0]});
//		const boolWuWzoEJ = await DatrixoEquityTokenxP1AaC.removeShareholder.call(addressPK7zZS8, {from: accounts[2]});
//		const boolQoBPXhJ = await DatrixoEquityTokenxP1AaC.removeShareholder.call(addressH4pjxQP, {from: accounts[2]});

		assert.equal(addressarraygb6eXYe, )
		assert.equal(boolNgmmWbF, true)
		assert.equal(booloaiGVfJ, true)
		await expect(DatrixoEquityTokenxP1AaC.transfer.call(addresspG0KER, uintrpCyS1z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressxsInSlN = accounts[3]
		const uinty3uYCdN = BigInt("749")
		const DatrixoEquityToken2uCLj8 = await DatrixoEquityToken.new(addressxsInSlN, uinty3uYCdN, {from: accounts[5]});
		const uintdr6dtCE = BigInt("914")
		const uintty7FJB = BigInt("187")
		const addressoJWdchj = "0x0000000000000000000000000000000000000001"
		const addressDNzM1Fi = accounts[2]
		const uintZ6uW7A = BigInt("1045")
		const addressLJYSgO = accounts[1]
		const addressDehzLQZ = accounts[2]
		const addressWYEAVGj = accounts[4]
		const uintKiMVABG = BigInt("1660")
		const addressz6v3lww = accounts[3]
//		const uintIx5Yze1 = await DatrixoEquityToken2uCLj8.setStart.call(uintdr6dtCE, {from: accounts[3]});
//		const booluWceiOo = await DatrixoEquityToken2uCLj8.transferFrom.call(addressDNzM1Fi, addressoJWdchj, uintty7FJB, {from: accounts[0]});
//		const boolg2T6tyd = await DatrixoEquityToken2uCLj8.transferFrom.call(addressDehzLQZ, addressLJYSgO, uintZ6uW7A, {from: accounts[3]});
//		const boolzrrPiJk = await DatrixoEquityToken2uCLj8.removeShareholder.call(addressWYEAVGj, {from: accounts[0]});
//		const boolKJb0aoj = await DatrixoEquityToken2uCLj8.transfer.call(addressz6v3lww, uintKiMVABG, {from: accounts[4]});

		await expect(DatrixoEquityToken2uCLj8.setStart.call(uintdr6dtCE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressTYK93Yy = accounts[1]
		const uintkH8v5EM = BigInt("1129")
		const DatrixoEquityTokenJbjs64n = await DatrixoEquityToken.new(addressTYK93Yy, uintkH8v5EM, {from: accounts[1]});
		const uintJ4csPJH = BigInt("844")
		const addressQYCxOJ7 = accounts[4]
//		await DatrixoEquityTokenJbjs64n.afterStartTime.call({from: accounts[4]});
//		const uintrmaiIQn = await DatrixoEquityTokenJbjs64n.setStart.call(uintJ4csPJH, {from: "0x0000000000000000000000000000000000000001"});
//		await DatrixoEquityTokenJbjs64n.afterStartTime.call({from: accounts[1]});
//		const booljEmT8tw = await DatrixoEquityTokenJbjs64n.removeShareholder.call(addressQYCxOJ7, {from: accounts[2]});

		await expect(DatrixoEquityTokenJbjs64n.afterStartTime.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressPvSADgQ = accounts[4]
		const uintZgLyoMa = BigInt("1734")
		const DatrixoEquityTokenxP1AaC = await DatrixoEquityToken.new(addressPvSADgQ, uintZgLyoMa, {from: accounts[0]});
		const addressAikFuoL = accounts[3]
		const uintnwZ8vO = BigInt("631")
		const addressWkAmBHV = "0x0000000000000000000000000000000000000001"
		const addressyj8dZRg = accounts[4]
		const uintZk2NK1V = BigInt("156")
		const addressMu7Qqh2 = accounts[5]
		const uintmeBW1OR = BigInt("1168")
		const addressVGV1yDr = accounts[4]
		const addressiuPNdM2 = accounts[0]
		const uint7EaHiA = BigInt("230")
		const addressSex5zk = accounts[3]
		const addressyNpVDFN = accounts[4]
		const uintqKgC6h = BigInt("194")
		const addressSGF4ll = accounts[4]
		const addresswCHLee6 = accounts[0]
		const addresssUCuPE8 = accounts[1]
		const uintRHe9rda = BigInt("1709")
		const addressNZiQ4A0 = accounts[0]
		const addressdjSjIyo = accounts[5]
		const addressnMOnOy6 = accounts[4]
//		const boolhRv8x9q = await DatrixoEquityTokenxP1AaC.removeShareholder.call(addressAikFuoL, {from: accounts[4]});
//		const boolbXUDxcN = await DatrixoEquityTokenxP1AaC.transferFrom.call(addressyj8dZRg, addressWkAmBHV, uintnwZ8vO, {from: accounts[3]});
//		await DatrixoEquityTokenxP1AaC.afterStartTime.call({from: accounts[4]});
//		const booloaiGVfJ = await DatrixoEquityTokenxP1AaC.transfer.call(addressMu7Qqh2, uintZk2NK1V, {from: accounts[4]});
//		const addressarraygb6eXYe = await DatrixoEquityTokenxP1AaC.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolmfTaZr9 = await DatrixoEquityTokenxP1AaC.transferFrom.call(addressiuPNdM2, addressVGV1yDr, uintmeBW1OR, {from: accounts[2]});
//		const boolNgmmWbF = await DatrixoEquityTokenxP1AaC.transferFrom.call(addressyNpVDFN, addressSex5zk, uint7EaHiA, {from: accounts[4]});
//		const boolCDXc7He = await DatrixoEquityTokenxP1AaC.transferFrom.call(addresswCHLee6, addressSGF4ll, uintqKgC6h, {from: accounts[3]});
//		const boolvrTtJJd = await DatrixoEquityTokenxP1AaC.removeShareholder.call(addresssUCuPE8, {from: accounts[0]});
//		const boolyVw5J2N = await DatrixoEquityTokenxP1AaC.transfer.call(addressNZiQ4A0, uintRHe9rda, {from: accounts[0]});
//		const boolWuWzoEJ = await DatrixoEquityTokenxP1AaC.removeShareholder.call(addressdjSjIyo, {from: accounts[2]});
//		const boolQoBPXhJ = await DatrixoEquityTokenxP1AaC.removeShareholder.call(addressnMOnOy6, {from: accounts[2]});

		await expect(DatrixoEquityTokenxP1AaC.removeShareholder.call(addressAikFuoL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresslECdokI = accounts[4]
		const uintBw4J9qN = BigInt("1734")
		const DatrixoEquityTokenxP1AaC = await DatrixoEquityToken.new(addresslECdokI, uintBw4J9qN, {from: accounts[0]});
		const uintEfxj7W = BigInt("156")
		const addressZKChNF1 = accounts[4]
		const uintZ2wvq9t = BigInt("230")
		const addressoA9yebG = accounts[2]
		const addressWjruA6u = accounts[4]
		const uintlADbJa8 = BigInt("1709")
		const addressCEZ4taG = accounts[0]
		const addressGMCOpXM = accounts[3]
		const uintj57jOEU = BigInt("1660")
		const addressXvq4IrW = accounts[2]
//		const booloaiGVfJ = await DatrixoEquityTokenxP1AaC.transfer.call(addressZKChNF1, uintEfxj7W, {from: accounts[4]});
//		const boolNgmmWbF = await DatrixoEquityTokenxP1AaC.transferFrom.call(addressWjruA6u, addressoA9yebG, uintZ2wvq9t, {from: accounts[4]});
//		const boolyVw5J2N = await DatrixoEquityTokenxP1AaC.transfer.call(addressCEZ4taG, uintlADbJa8, {from: accounts[0]});
//		const boolQoBPXhJ = await DatrixoEquityTokenxP1AaC.removeShareholder.call(addressGMCOpXM, {from: accounts[2]});
//		const boolL0Ywf2k = await DatrixoEquityTokenxP1AaC.transfer.call(addressXvq4IrW, uintj57jOEU, {from: accounts[3]});

		await expect(DatrixoEquityTokenxP1AaC.transfer.call(addressZKChNF1, uintEfxj7W, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})