const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPZsnACGN = await LUP.new({from: accounts[2]});
		const boolIifzwwJ = true
		const addressEzdTzkS = accounts[1]
//		const boolnGNuCdJ = await LUPZsnACGN.freezeAccount.call(addressEzdTzkS, boolIifzwwJ, {from: accounts[0]});
//		const uint8t2p888G = await LUPZsnACGN.decimals.call({from: accounts[4]});

		await expect(LUPZsnACGN.freezeAccount.call(addressEzdTzkS, boolIifzwwJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPhbNAiKc = await LUP.new({from: accounts[4]});
		const uintftnfR9I = BigInt("1311")
		const addressdXiFkok = accounts[2]
		const uints6SlYhW = BigInt("139")
		const addressvgeMJ1E = accounts[2]
		const addressFnbLKVJ = accounts[2]
		const uint8tZfhu8a = await LUPhbNAiKc.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringZlLC0Ul = await LUPhbNAiKc.name.call({from: accounts[3]});
//		const boolQrswG60 = await LUPhbNAiKc.transfer.call(addressdXiFkok, uintftnfR9I, {from: accounts[0]});
//		const boolkv254cI = await LUPhbNAiKc.unlock.call(addressvgeMJ1E, uints6SlYhW, {from: accounts[2]});
//		const addressD71alcy = await LUPhbNAiKc.notFrozen.call(addressFnbLKVJ, {from: accounts[4]});

		assert.equal(stringZlLC0Ul, "LINKUP Token")
		assert.equal(uint8tZfhu8a, BigInt("18"))
		await expect(LUPhbNAiKc.transfer.call(addressdXiFkok, uintftnfR9I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPCscYwy2 = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressjfX4fGk = accounts[0]
		const uintYnIMXXv = BigInt("1770")
		const uint2xZi0w = BigInt("536")
		const addressahLUPyl = accounts[0]
		const uint8OU5m3G3 = await LUPCscYwy2.decimals.call({from: accounts[0]});
		const stringUltjDDv = await LUPCscYwy2.symbol.call({from: accounts[4]});
		const uint256eGfOLWU = await LUPCscYwy2.balanceOf.call(addressjfX4fGk, {from: accounts[1]});
		const booltaiLREy = await LUPCscYwy2.transferWithLock.call(addressahLUPyl, uint2xZi0w, uintYnIMXXv, {from: accounts[2]});
	});

	it('test for LUP', async () => {
		const stringRrXePMh = "tmZbPUvJsjXRqjyNg7CPUBguRHNZDAlnR9vUeTkEpYpNeftxjqCaUPtBCjP64WaBIy5wOATn7CP7ANfVBzUdrw"
		const stringzDjG3Yq = "dA9Y2Xz1HWGRnAVIR0RhgVdAFPwdOlKIuKNGordmTHWnG6zU6O7744xBpNakX31FYPelw9IwVErKYQGSVpUZfer16yLb"
		const uintrPuEWRl = BigInt("133")
		const LUPZAXFnAo = await LUP.new(stringRrXePMh, stringzDjG3Yq, uintrPuEWRl, {from: accounts[3]});
		const addressvbBQqus = accounts[3]
		const boolE0EApu2 = false
		const addressIlGvpFm = accounts[2]
		const uintdBmhm8R = BigInt("2035")
		const addressOnE9Rhk = accounts[3]
		const uintdh3OD0F = BigInt("270")
		const uintVwfzQ6Y = BigInt("1662")
		const addressGtGF6SI = accounts[2]
		const addresshLCyWAw = await LUPZAXFnAo.notFrozen.call(addressvbBQqus, {from: accounts[2]});
		const boolS97fcN4 = await LUPZAXFnAo.freezeAccount.call(addressIlGvpFm, boolE0EApu2, {from: accounts[2]});
		const boolzTsnyFV = await LUPZAXFnAo.transfer.call(addressOnE9Rhk, uintdBmhm8R, {from: accounts[5]});
		const boolkx3NLW = await LUPZAXFnAo.lock.call(addressGtGF6SI, uintVwfzQ6Y, uintdh3OD0F, {from: accounts[3]});
	});

	it('test for LUP', async () => {
		const LUPHDImNwh = await LUP.new({from: accounts[4]});
		const addressrvPe1Fo = accounts[3]
		const uintvQSQj37 = BigInt("286")
		const uintCzrBrkR = BigInt("158")
		const addressoHzeCOx = accounts[1]
		const uintzQqOsrp = BigInt("795")
		const addressv0qDm7Z = "0x0000000000000000000000000000000000000001"
		const uintpeXcyXL = BigInt("961")
		const uintNoFT3kg = BigInt("13")
		const addressDE0fdfd = "0x0000000000000000000000000000000000000001"
//		const addressQ3JhcOI = await LUPHDImNwh.notFrozen.call(addressrvPe1Fo, {from: accounts[1]});
//		const uint8jO2XqA7 = await LUPHDImNwh.decimals.call({from: accounts[5]});
//		const boolWNut710 = await LUPHDImNwh.transferWithLock.call(addressoHzeCOx, uintCzrBrkR, uintvQSQj37, {from: accounts[2]});
//		const boolJtBVXvX = await LUPHDImNwh.transfer.call(addressv0qDm7Z, uintzQqOsrp, {from: accounts[1]});
//		const boolE8WDMd7 = await LUPHDImNwh.lock.call(addressDE0fdfd, uintNoFT3kg, uintpeXcyXL, {from: accounts[5]});

		await expect(LUPHDImNwh.notFrozen.call(addressrvPe1Fo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPaIDWgWL = await LUP.new({from: accounts[1]});
		const addressovACRWH = accounts[1]
		const uintZNS7Csy = BigInt("346")
		const addressxbaubYW = accounts[1]
		const uintDRtNRae = BigInt("299")
		const uintpAWqvPW = BigInt("146")
		const addressN3xzmr4 = "0x0000000000000000000000000000000000000001"
		const uintkcM6QAE = BigInt("837")
		const addressRt2QSPh = accounts[3]
//		const addressMZNws5l = await LUPaIDWgWL.upgradeTo.call(addressovACRWH, {from: accounts[0]});
//		const stringGYWLELV = await LUPaIDWgWL.symbol.call({from: accounts[2]});
//		const boolbQwLKRO = await LUPaIDWgWL.transfer.call(addressxbaubYW, uintZNS7Csy, {from: accounts[1]});
//		const booltaHeXvb = await LUPaIDWgWL.lock.call(addressN3xzmr4, uintpAWqvPW, uintDRtNRae, {from: accounts[5]});
//		const boolZbuxWeW = await LUPaIDWgWL.transfer.call(addressRt2QSPh, uintkcM6QAE, {from: accounts[4]});

		await expect(LUPaIDWgWL.upgradeTo.call(addressovACRWH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPaIDWgWL = await LUP.new({from: accounts[1]});
		const uintwQk2P3u = BigInt("352")
		const addressBm4Ks85 = accounts[1]
		const bool1bPbRW = false
		const addressYbMLLHr = "0x0000000000000000000000000000000000000001"
		const boolbQwLKRO = await LUPaIDWgWL.transfer.call(addressBm4Ks85, uintwQk2P3u, {from: accounts[1]});
		const stringOoo0V6 = await LUPaIDWgWL.symbol.call({from: accounts[3]});
//		const boolkDggdkq = await LUPaIDWgWL.freezeAccount.call(addressYbMLLHr, bool1bPbRW, {from: accounts[2]});

		assert.equal(boolbQwLKRO, true)
		assert.equal(stringOoo0V6, "LUP")
		await expect(LUPaIDWgWL.freezeAccount.call(addressYbMLLHr, bool1bPbRW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPaIDWgWL = await LUP.new({from: accounts[1]});
		const uintm1iYFIm = BigInt("352")
		const addresskmrxAW5 = accounts[1]
		const addressz7p0yka = accounts[1]
		const addressfT5nF0p = accounts[3]
		const uinty6whWdP = BigInt("312")
		const uint0PJiEi = BigInt("146")
		const addressPJ1cR11 = "0x0000000000000000000000000000000000000001"
		const uintC1Qpcbz = BigInt("837")
		const addressiQ0MTGF = accounts[2]
		const boolbQwLKRO = await LUPaIDWgWL.transfer.call(addresskmrxAW5, uintm1iYFIm, {from: accounts[1]});
		const uint256q3N3vUP = await LUPaIDWgWL.balanceOf.call(addressz7p0yka, {from: accounts[4]});
//		const addressFMhqDne = await LUPaIDWgWL.notFrozen.call(addressfT5nF0p, {from: accounts[4]});
//		const booltaHeXvb = await LUPaIDWgWL.lock.call(addressPJ1cR11, uint0PJiEi, uinty6whWdP, {from: accounts[5]});
//		const boolZbuxWeW = await LUPaIDWgWL.transfer.call(addressiQ0MTGF, uintC1Qpcbz, {from: accounts[4]});

		assert.equal(boolbQwLKRO, true)
		assert.equal(uint256q3N3vUP, BigInt("50000000000000000000000000"))
		await expect(LUPaIDWgWL.notFrozen.call(addressfT5nF0p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPaIDWgWL = await LUP.new({from: accounts[1]});
		const addressL16g5y = accounts[5]
		const uintLIvHkUL = BigInt("591")
		const addresskv2OT0S = accounts[0]
		const uintG37T8b2 = BigInt("305")
		const addressa3SwwP = accounts[2]
		const uintLu4oSLI = BigInt("837")
		const addressy3jOLi1 = accounts[2]
		const addressnNhQON = await LUPaIDWgWL.upgradeTo.call(addressL16g5y, {from: accounts[1]});
//		const boolrB6M6i = await LUPaIDWgWL.unlock.call(addresskv2OT0S, uintLIvHkUL, {from: accounts[1]});
//		const boolbQwLKRO = await LUPaIDWgWL.transfer.call(addressa3SwwP, uintG37T8b2, {from: accounts[1]});
//		const boolZbuxWeW = await LUPaIDWgWL.transfer.call(addressy3jOLi1, uintLu4oSLI, {from: accounts[4]});

		await expect(LUPaIDWgWL.unlock.call(addresskv2OT0S, uintLIvHkUL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPaIDWgWL = await LUP.new({from: accounts[1]});
		const uintJeyxV6e = BigInt("352")
		const addressKSSNE6P = accounts[1]
		const uint5FbgSR = BigInt("671")
		const uintcBdUdb = BigInt("51")
		const address7nTSNJ = accounts[4]
		const addressIJDXX2 = accounts[3]
		const boolbWBGEXb = false
		const addressoPKb5d1 = accounts[1]
		const uintCzNUmUm = BigInt("312")
		const uintzMkYZe9 = BigInt("146")
		const addressvLEKEgm = "0x0000000000000000000000000000000000000001"
		const uintnZoGYbP = BigInt("837")
		const addresskpokDOk = accounts[2]
		const boolbQwLKRO = await LUPaIDWgWL.transfer.call(addressKSSNE6P, uintJeyxV6e, {from: accounts[1]});
		const boolAVtScZO = await LUPaIDWgWL.transferWithLock.call(address7nTSNJ, uintcBdUdb, uint5FbgSR, {from: accounts[1]});
//		const addressFMhqDne = await LUPaIDWgWL.notFrozen.call(addressIJDXX2, {from: accounts[4]});
//		const boolod6hDUS = await LUPaIDWgWL.freezeAccount.call(addressoPKb5d1, boolbWBGEXb, {from: accounts[0]});
//		const booltaHeXvb = await LUPaIDWgWL.lock.call(addressvLEKEgm, uintzMkYZe9, uintCzNUmUm, {from: accounts[5]});
//		const boolZbuxWeW = await LUPaIDWgWL.transfer.call(addresskpokDOk, uintnZoGYbP, {from: accounts[4]});

		assert.equal(boolAVtScZO, true)
		assert.equal(boolbQwLKRO, true)
		await expect(LUPaIDWgWL.notFrozen.call(addressIJDXX2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPaIDWgWL = await LUP.new({from: accounts[1]});
		const addresskovc5rZ = accounts[3]
		const uintXfJu5B = BigInt("1010")
		const uintf4wZt9x = BigInt("1169")
		const addresssfKVNpY = accounts[0]
		const uintcJ6ZfXo = BigInt("837")
		const addressQYTDoB = accounts[2]
		const uint256cpBCHMr = await LUPaIDWgWL.balanceOf.call(addresskovc5rZ, {from: accounts[0]});
//		const boolRYec6qJ = await LUPaIDWgWL.lock.call(addresssfKVNpY, uintf4wZt9x, uintXfJu5B, {from: accounts[1]});
//		const stringQ22qLQ = await LUPaIDWgWL.name.call({from: accounts[1]});
//		const boolZbuxWeW = await LUPaIDWgWL.transfer.call(addressQYTDoB, uintcJ6ZfXo, {from: accounts[4]});

		assert.equal(uint256cpBCHMr, BigInt("0"))
		await expect(LUPaIDWgWL.lock.call(addresssfKVNpY, uintf4wZt9x, uintXfJu5B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPaIDWgWL = await LUP.new({from: accounts[1]});
		const addressYIMyOLA = accounts[3]
		const uintd1ZbIBu = BigInt("1010")
		const uintQGz9BlW = BigInt("1164")
		const addressdaKFJ6e = accounts[1]
		const booljVn8Y1Z = false
		const addressgeH2b9 = accounts[2]
		const uintjy3Jndh = BigInt("837")
		const addressPErd4d2 = accounts[2]
		const uint256cpBCHMr = await LUPaIDWgWL.balanceOf.call(addressYIMyOLA, {from: accounts[0]});
		const boolRYec6qJ = await LUPaIDWgWL.lock.call(addressdaKFJ6e, uintQGz9BlW, uintd1ZbIBu, {from: accounts[1]});
		const stringqXT5QuY = await LUPaIDWgWL.name.call({from: accounts[2]});
		const stringQ22qLQ = await LUPaIDWgWL.name.call({from: accounts[1]});
//		const booluJg3na5 = await LUPaIDWgWL.freezeAccount.call(addressgeH2b9, booljVn8Y1Z, {from: accounts[2]});
//		const boolZbuxWeW = await LUPaIDWgWL.transfer.call(addressPErd4d2, uintjy3Jndh, {from: accounts[4]});

		assert.equal(boolRYec6qJ, true)
		assert.equal(stringQ22qLQ, "LINKUP Token")
		assert.equal(stringqXT5QuY, "LINKUP Token")
		assert.equal(uint256cpBCHMr, BigInt("0"))
		await expect(LUPaIDWgWL.freezeAccount.call(addressgeH2b9, booljVn8Y1Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPaIDWgWL = await LUP.new({from: accounts[1]});
		const addresswUwruLg = accounts[4]
		const boolLbihk5U = true
		const addressWS8lvsZ = accounts[4]
		const bools7B1gKp = true
		const addresss0y41Ln = accounts[0]
		const uint256cpBCHMr = await LUPaIDWgWL.balanceOf.call(addresswUwruLg, {from: accounts[0]});
		const boolgT7D1Jo = await LUPaIDWgWL.freezeAccount.call(addressWS8lvsZ, boolLbihk5U, {from: accounts[1]});
//		const boolrZgGIoz = await LUPaIDWgWL.freezeAccount.call(addresss0y41Ln, bools7B1gKp, {from: accounts[2]});

		assert.equal(boolgT7D1Jo, true)
		assert.equal(uint256cpBCHMr, BigInt("0"))
		await expect(LUPaIDWgWL.freezeAccount.call(addresss0y41Ln, bools7B1gKp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})