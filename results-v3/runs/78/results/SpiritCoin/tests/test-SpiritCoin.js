const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressMZsvRqQ = accounts[5]
		const addressyzTaEJh = accounts[3]
		const SpiritCoinGt2qPlH = await SpiritCoin.new(addressMZsvRqQ, addressyzTaEJh, {from: accounts[4]});
		const addresscB6G3mN = "0x0000000000000000000000000000000000000001"
		const addressz3Apxlv = accounts[1]
		const uintkrq2zN3 = BigInt("1589")
		const addresse7Z9TFD = accounts[5]
		const addresswef523V = accounts[4]
		const uints7vraEu = await SpiritCoinGt2qPlH.allowance.call(addressz3Apxlv, addresscB6G3mN, {from: accounts[3]});
		const addressLLE2Sqi = await SpiritCoinGt2qPlH.mint.call(addresse7Z9TFD, uintkrq2zN3, {from: accounts[2]});
		const uintEx74lRB = await SpiritCoinGt2qPlH.balanceOf.call(addresswef523V, {from: accounts[1]});

		assert.equal(uints7vraEu, BigInt("0"))
		await expect(SpiritCoinGt2qPlH.mint.call(addresse7Z9TFD, uintkrq2zN3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresstn79mWE = accounts[2]
		const addresshmt2t6s = accounts[4]
		const SpiritCoinBlXSBtG = await SpiritCoin.new(addresstn79mWE, addresshmt2t6s, {from: accounts[4]});
		const addressjqlBX8P = accounts[2]
		const addressLVjeZrW = "0x0000000000000000000000000000000000000001"
		const uint8D1MgL = BigInt("591")
		const addressn0jU11f = accounts[3]
		const addressGuMSXnP = "0x0000000000000000000000000000000000000001"
		const uintM8lFq7i = await SpiritCoinBlXSBtG.allowance.call(addressLVjeZrW, addressjqlBX8P, {from: accounts[1]});
		const boolVe5csIy = await SpiritCoinBlXSBtG.transferFrom.call(addressGuMSXnP, addressn0jU11f, uint8D1MgL, {from: accounts[0]});

		assert.equal(uintM8lFq7i, BigInt("0"))
		await expect(SpiritCoinBlXSBtG.transferFrom.call(addressGuMSXnP, addressn0jU11f, uint8D1MgL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresssyO5xvy = accounts[3]
		const addressVdLSCn = accounts[3]
		const SpiritCoinDpyD2Ac = await SpiritCoin.new(addresssyO5xvy, addressVdLSCn, {from: accounts[0]});
		const addressTafGdGX = accounts[1]
		const uinthsPH1C6 = BigInt("1612")
		const addresssXTJP2z = accounts[1]
		const uintIcwwBii = BigInt("1435")
		const addressym6F5sA = accounts[5]
		const uintZFZI1Gm = BigInt("1399")
		const addressEMtV45a = accounts[0]
		const uintkknJawF = BigInt("572")
		const addressS6BHg8F = accounts[2]
		const addressihZO57w = accounts[4]
		const uintcqmaEQF = await SpiritCoinDpyD2Ac.balanceOf.call(addressTafGdGX, {from: accounts[4]});
		const booltw6iCJk = await SpiritCoinDpyD2Ac.approve.call(addresssXTJP2z, uinthsPH1C6, {from: "0x0000000000000000000000000000000000000001"});
		const addressItilHcl = await SpiritCoinDpyD2Ac.mint.call(addressym6F5sA, uintIcwwBii, {from: accounts[2]});
		const boolmK9ezlp = await SpiritCoinDpyD2Ac.approve.call(addressEMtV45a, uintZFZI1Gm, {from: accounts[5]});
		const boolXN4RNYE = await SpiritCoinDpyD2Ac.transferFrom.call(addressihZO57w, addressS6BHg8F, uintkknJawF, {from: accounts[2]});

		assert.equal(booltw6iCJk, true)
		assert.equal(uintcqmaEQF, BigInt("0"))
		await expect(SpiritCoinDpyD2Ac.mint.call(addressym6F5sA, uintIcwwBii, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressmkZpqb = accounts[3]
		const addressE4DyhnU = accounts[0]
		const SpiritCoinIlnilAk = await SpiritCoin.new(addressmkZpqb, addressE4DyhnU, {from: accounts[1]});
		const uintFMOPnsM = BigInt("1925")
		const address1Izvyg = accounts[1]
		const uintIZ2FdJj = BigInt("217")
		const addressPo2z3We = accounts[4]
		const uintopABy7K = BigInt("1728")
		const addressP3w2s2A = accounts[1]
		const uintTB7PVI0 = BigInt("1025")
		const addressOrnuu5J = accounts[0]
		const addresswyQqIMK = accounts[3]
		const bool8frhD1 = await SpiritCoinIlnilAk.transfer.call(address1Izvyg, uintFMOPnsM, {from: accounts[0]});
		const addresskqsUoeu = await SpiritCoinIlnilAk.mint.call(addressPo2z3We, uintIZ2FdJj, {from: "0x0000000000000000000000000000000000000001"});
		const boolgMZV0o6 = await SpiritCoinIlnilAk.transfer.call(addressP3w2s2A, uintopABy7K, {from: accounts[3]});
		const addressitt7clR = await SpiritCoinIlnilAk.mint.call(addressOrnuu5J, uintTB7PVI0, {from: accounts[2]});
		const uintheiA4ts = await SpiritCoinIlnilAk.balanceOf.call(addresswyQqIMK, {from: accounts[2]});

		await expect(SpiritCoinIlnilAk.transfer.call(address1Izvyg, uintFMOPnsM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresszn6KnS9 = accounts[4]
		const addressRu8Wrul = accounts[1]
		const SpiritCoinzJmDa2T = await SpiritCoin.new(addresszn6KnS9, addressRu8Wrul, {from: accounts[2]});
		const addressFZPpaM2 = "0x0000000000000000000000000000000000000001"
		const addressKSmskPL = accounts[3]
		const addressKSkadRj = await SpiritCoinzJmDa2T.setMinter.call(addressFZPpaM2, {from: accounts[3]});
		const addressWXpYcrQ = await SpiritCoinzJmDa2T.setMinter.call(addressKSmskPL, {from: accounts[0]});

		await expect(SpiritCoinzJmDa2T.setMinter.call(addressFZPpaM2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressJjckfSV = accounts[3]
		const addresssbtPBER = accounts[4]
		const SpiritCoinEa1I6mU = await SpiritCoin.new(addressJjckfSV, addresssbtPBER, {from: "0x0000000000000000000000000000000000000001"});
		const address2SZRxd = accounts[1]
		const uintU1zFSKC = BigInt("74")
		const addressFq3EpuL = accounts[2]
		const uintF0lemyY = BigInt("1101")
		const addresspJJMZd3 = accounts[1]
		const addresscyplaqb = accounts[0]
		const uintl8Jdqyo = await SpiritCoinEa1I6mU.balanceOf.call(address2SZRxd, {from: accounts[2]});
		const addresspswpTEg = await SpiritCoinEa1I6mU.mint.call(addressFq3EpuL, uintU1zFSKC, {from: accounts[0]});
		const boolU4eRxdj = await SpiritCoinEa1I6mU.transfer.call(addresspJJMZd3, uintF0lemyY, {from: accounts[0]});
		const uintIWeX80T = await SpiritCoinEa1I6mU.balanceOf.call(addresscyplaqb, {from: accounts[4]});
	});

	it('test for SpiritCoin', async () => {
		const addressq2mYNVp = accounts[2]
		const addressP9hcVSf = accounts[4]
		const SpiritCoinBlXSBtG = await SpiritCoin.new(addressq2mYNVp, addressP9hcVSf, {from: accounts[4]});
		const addressaxCfLn = accounts[2]
		const addressnqOfEe = "0x0000000000000000000000000000000000000001"
		const uintOn4QYOx = BigInt("1346")
		const addressdG6N1m9 = accounts[2]
		const uintNtFaEUe = BigInt("504")
		const addresswwjquGL = accounts[4]
		const uintmjKPxFV = BigInt("922")
		const addressiQzqCYM = accounts[4]
		const uint2Y9wCa = BigInt("591")
		const addressRd4tP8K = accounts[3]
		const addressrvFRFM = "0x0000000000000000000000000000000000000001"
		const uintM8lFq7i = await SpiritCoinBlXSBtG.allowance.call(addressnqOfEe, addressaxCfLn, {from: accounts[1]});
		const boolkzsiiax = await SpiritCoinBlXSBtG.transfer.call(addressdG6N1m9, uintOn4QYOx, {from: accounts[2]});
		const addressKG8HfLC = await SpiritCoinBlXSBtG.mint.call(addresswwjquGL, uintNtFaEUe, {from: accounts[4]});
		const boolJXczFrq = await SpiritCoinBlXSBtG.approve.call(addressiQzqCYM, uintmjKPxFV, {from: accounts[3]});
		const boolVe5csIy = await SpiritCoinBlXSBtG.transferFrom.call(addressrvFRFM, addressRd4tP8K, uint2Y9wCa, {from: accounts[0]});

		assert.equal(boolJXczFrq, true)
		assert.equal(boolkzsiiax, true)
		assert.equal(uintM8lFq7i, BigInt("0"))
		await expect(SpiritCoinBlXSBtG.transferFrom.call(addressrvFRFM, addressRd4tP8K, uint2Y9wCa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})