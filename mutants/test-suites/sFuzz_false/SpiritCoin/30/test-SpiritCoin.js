const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressqwxOtgl = accounts[2]
		const addressOrcUENM = accounts[3]
		const SpiritCoinPaLnhCx = await SpiritCoin.new(addressqwxOtgl, addressOrcUENM, {from: accounts[3]});
		const uintUTkQhEk = BigInt("1288")
		const addressaJnaxc3 = accounts[0]
		const uinteeyciHM = BigInt("231")
		const addressdo61zAN = accounts[1]
		const uintER2X93M = BigInt("1634")
		const addressBMWgIMc = accounts[0]
		const uintNTmEDNA = BigInt("260")
		const addressKx2pBKq = accounts[1]
		const addressLFqmhpr = accounts[3]
		const boolexhCYgv = await SpiritCoinPaLnhCx.approve.call(addressaJnaxc3, uintUTkQhEk, {from: accounts[3]});
//		const addressOO66jZ = await SpiritCoinPaLnhCx.mint.call(addressdo61zAN, uinteeyciHM, {from: accounts[1]});
//		const addressYGXcoo6 = await SpiritCoinPaLnhCx.mint.call(addressBMWgIMc, uintER2X93M, {from: "0x0000000000000000000000000000000000000001"});
//		const boolMNmnMK2 = await SpiritCoinPaLnhCx.transferFrom.call(addressLFqmhpr, addressKx2pBKq, uintNTmEDNA, {from: accounts[0]});

		assert.equal(boolexhCYgv, true)
		await expect(SpiritCoinPaLnhCx.mint.call(addressdo61zAN, uinteeyciHM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressG8wtlZD = accounts[4]
		const addressbWOKoO0 = accounts[2]
		const SpiritCoinNYF4Mdj = await SpiritCoin.new(addressG8wtlZD, addressbWOKoO0, {from: accounts[3]});
		const addressbSSk4l8 = accounts[5]
		const uintFgfJm9y = BigInt("1313")
		const addressa1Ymlz9 = accounts[2]
		const uintfhn9E04 = BigInt("2036")
		const addressVNCk8ez = accounts[0]
		const uintUVIZT5P = BigInt("1328")
		const address3SIHZ0 = accounts[4]
		const addressW0tLrb1 = accounts[0]
		const addresshqqdyDP = accounts[4]
		const addressQhps5Gf = "0x0000000000000000000000000000000000000001"
		const addressjMPzVFW = accounts[0]
//		const addressxphBCkM = await SpiritCoinNYF4Mdj.setMinter.call(addressbSSk4l8, {from: accounts[1]});
//		const boolkdz3J3w = await SpiritCoinNYF4Mdj.transfer.call(addressa1Ymlz9, uintFgfJm9y, {from: accounts[3]});
//		const boolFyp2Szd = await SpiritCoinNYF4Mdj.transfer.call(addressVNCk8ez, uintfhn9E04, {from: accounts[5]});
//		const boolAR5sGhF = await SpiritCoinNYF4Mdj.approve.call(address3SIHZ0, uintUVIZT5P, {from: accounts[1]});
//		const uinta0CRgJV = await SpiritCoinNYF4Mdj.allowance.call(addresshqqdyDP, addressW0tLrb1, {from: accounts[1]});
//		const uintbibqRR2 = await SpiritCoinNYF4Mdj.allowance.call(addressjMPzVFW, addressQhps5Gf, {from: accounts[3]});

		await expect(SpiritCoinNYF4Mdj.setMinter.call(addressbSSk4l8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressnk6Ogjf = accounts[3]
		const addressSEo4ecH = accounts[5]
		const SpiritCoinrRyTwV5 = await SpiritCoin.new(addressnk6Ogjf, addressSEo4ecH, {from: accounts[1]});
		const uint0t4ggQ = BigInt("1491")
		const addressb2auxZS = accounts[1]
		const addressH9hnyQR = accounts[5]
		const addressBJHnyrL = accounts[5]
		const addresslPuthaU = accounts[2]
		const addressjOIselV = accounts[3]
		const addressPEw1iD = accounts[2]
		const uintqwosqJz = BigInt("1784")
		const addressUltrojj = accounts[1]
		const bool0c87cF = await SpiritCoinrRyTwV5.transfer.call(addressb2auxZS, uint0t4ggQ, {from: accounts[3]});
		const uintXdl3N9q = await SpiritCoinrRyTwV5.allowance.call(addressBJHnyrL, addressH9hnyQR, {from: accounts[2]});
//		const addressC2H6cke = await SpiritCoinrRyTwV5.setMinter.call(addresslPuthaU, {from: accounts[4]});
//		const uintamWYKEC = await SpiritCoinrRyTwV5.allowance.call(addressPEw1iD, addressjOIselV, {from: accounts[2]});
//		const boolHf6DxB2 = await SpiritCoinrRyTwV5.transfer.call(addressUltrojj, uintqwosqJz, {from: accounts[5]});

		assert.equal(bool0c87cF, true)
		assert.equal(uintXdl3N9q, BigInt("0"))
		await expect(SpiritCoinrRyTwV5.setMinter.call(addresslPuthaU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const address5iCavS = accounts[0]
		const addressi10P8w = accounts[1]
		const SpiritCoincydgKAH = await SpiritCoin.new(address5iCavS, addressi10P8w, {from: accounts[3]});
		const addresshH9HPY9 = accounts[2]
		const addresst6mpaWd = accounts[2]
		const addressrjnb0QW = accounts[1]
		const addressSn0TqZb = accounts[3]
		const addressWpA1GkP = accounts[0]
		const addressLbR11Of = accounts[5]
		const uintTfTTpIH = await SpiritCoincydgKAH.allowance.call(addresst6mpaWd, addresshH9HPY9, {from: accounts[3]});
		const uinttVJ8Q5B = await SpiritCoincydgKAH.balanceOf.call(addressrjnb0QW, {from: accounts[0]});
		const uintmSvl7sN = await SpiritCoincydgKAH.balanceOf.call(addressSn0TqZb, {from: accounts[2]});
		const uintoCH0Omg = await SpiritCoincydgKAH.balanceOf.call(addressWpA1GkP, {from: "0x0000000000000000000000000000000000000001"});
		const uintCXHUzkw = await SpiritCoincydgKAH.balanceOf.call(addressLbR11Of, {from: accounts[2]});

		assert.equal(uintCXHUzkw, BigInt("0"))
		assert.equal(uintTfTTpIH, BigInt("0"))
		assert.equal(uintmSvl7sN, BigInt("0"))
		assert.equal(uintoCH0Omg, BigInt("10000000000000000000000000"))
		assert.equal(uinttVJ8Q5B, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addresskc6vMf4 = "0x0000000000000000000000000000000000000001"
		const addressm5ffq0e = accounts[0]
		const SpiritCoinSo86BvG = await SpiritCoin.new(addresskc6vMf4, addressm5ffq0e, {from: "0x0000000000000000000000000000000000000001"});
		const uintR3qFpWs = BigInt("447")
		const addressYwPyRXW = "0x0000000000000000000000000000000000000001"
		const addressvFiLzO = accounts[1]
		const uinttaSmVGQ = BigInt("1135")
		const addressaRq9qd9 = accounts[4]
		const uintr2LByNC = BigInt("1238")
		const addressOKAlKQY = accounts[4]
		const uintGcHAzQa = BigInt("974")
		const addressybeD3H1 = accounts[3]
		const boolYoDxQF = await SpiritCoinSo86BvG.approve.call(addressYwPyRXW, uintR3qFpWs, {from: accounts[3]});
		const uintoAWFA1n = await SpiritCoinSo86BvG.balanceOf.call(addressvFiLzO, {from: accounts[2]});
		const boolaPlSX3k = await SpiritCoinSo86BvG.transfer.call(addressaRq9qd9, uinttaSmVGQ, {from: accounts[3]});
		const boolSXoX6FM = await SpiritCoinSo86BvG.transfer.call(addressOKAlKQY, uintr2LByNC, {from: accounts[3]});
		const addressChY10pG = await SpiritCoinSo86BvG.mint.call(addressybeD3H1, uintGcHAzQa, {from: accounts[0]});
	});

	it('test for SpiritCoin', async () => {
		const addressPQeg0u = accounts[0]
		const addressBlepDB9 = accounts[2]
		const SpiritCoinMbxJtn = await SpiritCoin.new(addressPQeg0u, addressBlepDB9, {from: accounts[2]});
		const addressg7jxHLh = "0x0000000000000000000000000000000000000001"
		const uintCJt9EK = BigInt("625")
		const addresscpc48eV = accounts[0]
		const addressoYXI0x = accounts[0]
		const uintyY1nZVH = BigInt("90")
		const addressd9MtR6 = accounts[1]
		const addressR3F8gOj = accounts[4]
		const uinte9Ep2PW = await SpiritCoinMbxJtn.balanceOf.call(addressg7jxHLh, {from: accounts[0]});
//		const boolhcK9r6o = await SpiritCoinMbxJtn.transferFrom.call(addressoYXI0x, addresscpc48eV, uintCJt9EK, {from: accounts[2]});
//		const addresspxVE9j = await SpiritCoinMbxJtn.mint.call(addressd9MtR6, uintyY1nZVH, {from: accounts[1]});
//		const uintEcINA2 = await SpiritCoinMbxJtn.balanceOf.call(addressR3F8gOj, {from: accounts[3]});

		assert.equal(uinte9Ep2PW, BigInt("0"))
		await expect(SpiritCoinMbxJtn.transferFrom.call(addressoYXI0x, addresscpc48eV, uintCJt9EK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressjVu2Vd = accounts[0]
		const addressOC1TAVs = accounts[4]
		const SpiritCoincuK3yZa = await SpiritCoin.new(addressjVu2Vd, addressOC1TAVs, {from: accounts[5]});
		const uintRyMjzw1 = BigInt("148")
		const addresscC54E9k = accounts[3]
		const uintpQCIkUh = BigInt("894")
		const addressSX3za21 = accounts[3]
		const addressXWq7qSo = accounts[2]
		const uintwcuxQES = BigInt("1095")
		const addresslbKDhjQ = accounts[0]
		const addressYEgX1WM = accounts[3]
		const boolPEDyLut = await SpiritCoincuK3yZa.approve.call(addresscC54E9k, uintRyMjzw1, {from: accounts[1]});
		const boolnf8elpt = await SpiritCoincuK3yZa.approve.call(addressSX3za21, uintpQCIkUh, {from: accounts[5]});
		const uintssQswNx = await SpiritCoincuK3yZa.balanceOf.call(addressXWq7qSo, {from: accounts[5]});
//		const boolDClHEks = await SpiritCoincuK3yZa.transfer.call(addresslbKDhjQ, uintwcuxQES, {from: "0x0000000000000000000000000000000000000001"});
//		const uintKutxjO = await SpiritCoincuK3yZa.balanceOf.call(addressYEgX1WM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPEDyLut, true)
		assert.equal(boolnf8elpt, true)
		assert.equal(uintssQswNx, BigInt("0"))
		await expect(SpiritCoincuK3yZa.transfer.call(addresslbKDhjQ, uintwcuxQES, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressonM9eIB = accounts[0]
		const addresswuFJBur = accounts[4]
		const SpiritCoincuK3yZa = await SpiritCoin.new(addressonM9eIB, addresswuFJBur, {from: accounts[5]});
		const uintexVtkWq = BigInt("1921")
		const addressLwioFO8 = accounts[1]
		const uintRjLUyLe = BigInt("277")
		const addressLQzKPut = accounts[4]
		const uintfLhdynA = BigInt("131")
		const addressDwWe8im = accounts[4]
		const addresszFqIBj = await SpiritCoincuK3yZa.mint.call(addressLwioFO8, uintexVtkWq, {from: accounts[4]});
//		const addressZVYOz3C = await SpiritCoincuK3yZa.mint.call(addressLQzKPut, uintRjLUyLe, {from: accounts[3]});
//		const boolPEDyLut = await SpiritCoincuK3yZa.approve.call(addressDwWe8im, uintfLhdynA, {from: accounts[1]});

		await expect(SpiritCoincuK3yZa.mint.call(addressLQzKPut, uintRjLUyLe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})