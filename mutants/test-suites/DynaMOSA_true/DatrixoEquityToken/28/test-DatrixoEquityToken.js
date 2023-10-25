const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressVR68vpP = "0x0000000000000000000000000000000000000001"
		const uintCbgLBPN = BigInt("139")
		const DatrixoEquityTokenaGXEKIX = await DatrixoEquityToken.new(addressVR68vpP, uintCbgLBPN, {from: accounts[4]});
		const uintlXbTXYV = BigInt("1392")
		const addressFFTAzr7 = accounts[1]
		const addressp2pMmjI = accounts[0]
		const addresshnBZMUK = accounts[1]
		const uintTAVdqFF = BigInt("1193")
		const addressOGKtfuE = accounts[2]
		const addressySeSF1P = "0x0000000000000000000000000000000000000001"
//		const boollVs7kzU = await DatrixoEquityTokenaGXEKIX.transferFrom.call(addressp2pMmjI, addressFFTAzr7, uintlXbTXYV, {from: accounts[4]});
//		await DatrixoEquityTokenaGXEKIX.afterStartTime.call({from: accounts[2]});
//		const boolHHGIkit = await DatrixoEquityTokenaGXEKIX.removeShareholder.call(addresshnBZMUK, {from: accounts[4]});
//		const boolA8rFHj3 = await DatrixoEquityTokenaGXEKIX.transferFrom.call(addressySeSF1P, addressOGKtfuE, uintTAVdqFF, {from: accounts[3]});

		await expect(DatrixoEquityTokenaGXEKIX.transferFrom.call(addressp2pMmjI, addressFFTAzr7, uintlXbTXYV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressrdP46X4 = accounts[1]
		const uinti1hlME = BigInt("124")
		const DatrixoEquityTokenAWcF2QY = await DatrixoEquityToken.new(addressrdP46X4, uinti1hlME, {from: accounts[0]});
		const uintbfiQOHr = BigInt("1234")
		const uintuxczxa9 = BigInt("1561")
		const addressMUCz7Dv = accounts[2]
		const addressW8HRoRU = accounts[2]
//		await DatrixoEquityTokenAWcF2QY.afterStartTime.call({from: accounts[0]});
//		const uintXADkgHR = await DatrixoEquityTokenAWcF2QY.setStart.call(uintbfiQOHr, {from: accounts[3]});
//		const addressarrayjJFMVpN = await DatrixoEquityTokenAWcF2QY.getShareholdersArray.call({from: accounts[0]});
//		const boolMMmA2vU = await DatrixoEquityTokenAWcF2QY.transfer.call(addressMUCz7Dv, uintuxczxa9, {from: accounts[4]});
//		const boolrhE3qpN = await DatrixoEquityTokenAWcF2QY.removeShareholder.call(addressW8HRoRU, {from: accounts[0]});

		await expect(DatrixoEquityTokenAWcF2QY.afterStartTime.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressVMJicOW = accounts[4]
		const uintEgEJgAt = BigInt("357")
		const DatrixoEquityTokenp7fiP9m = await DatrixoEquityToken.new(addressVMJicOW, uintEgEJgAt, {from: accounts[3]});
		const uinthPrxmxC = BigInt("1959")
		const addressSrHB5S = accounts[2]
		const addressc0UY3IG = accounts[2]
		const uintL4oCHRU = BigInt("852")
		const addressum57HVH = accounts[5]
		const addresscxSLRv = accounts[0]
		const uintWTXCgEF = BigInt("1625")
		const addressXA9n8HH = accounts[3]
		const addressGgXiSYx = accounts[4]
		const addressarrayfdMaozU = await DatrixoEquityTokenp7fiP9m.getShareholdersArray.call({from: accounts[2]});
//		const boolF3qIvP = await DatrixoEquityTokenp7fiP9m.transferFrom.call(addressc0UY3IG, addressSrHB5S, uinthPrxmxC, {from: accounts[2]});
//		const addressarrayvVNZ6s = await DatrixoEquityTokenp7fiP9m.getShareholdersArray.call({from: accounts[5]});
//		const boolvzBInDt = await DatrixoEquityTokenp7fiP9m.transferFrom.call(addresscxSLRv, addressum57HVH, uintL4oCHRU, {from: accounts[4]});
//		await DatrixoEquityTokenp7fiP9m.afterStartTime.call({from: accounts[3]});
//		const boolnU9flEC = await DatrixoEquityTokenp7fiP9m.transferFrom.call(addressGgXiSYx, addressXA9n8HH, uintWTXCgEF, {from: accounts[1]});

		assert.equal(addressarrayfdMaozU, )
		await expect(DatrixoEquityTokenp7fiP9m.transferFrom.call(addressc0UY3IG, addressSrHB5S, uinthPrxmxC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressG8zghvH = accounts[3]
		const uintw260Tuc = BigInt("553")
		const DatrixoEquityTokend3To6DT = await DatrixoEquityToken.new(addressG8zghvH, uintw260Tuc, {from: accounts[4]});
		const addressSFjpAEw = accounts[4]
		const uintiF1x11a = BigInt("183")
		const addressgpymfJU = accounts[0]
		const addressIPHYpYy = accounts[0]
		const uintXGPdRgQ = BigInt("520")
		const addressHTvImiz = accounts[2]
		const addressWCcsNaZ = accounts[5]
//		const boolf3Mb6v = await DatrixoEquityTokend3To6DT.removeShareholder.call(addressSFjpAEw, {from: accounts[3]});
//		const addressarrays7iqr5 = await DatrixoEquityTokend3To6DT.getShareholdersArray.call({from: accounts[3]});
//		const boolYfDfYEV = await DatrixoEquityTokend3To6DT.transferFrom.call(addressIPHYpYy, addressgpymfJU, uintiF1x11a, {from: accounts[3]});
//		const bool6BVUgx = await DatrixoEquityTokend3To6DT.transferFrom.call(addressWCcsNaZ, addressHTvImiz, uintXGPdRgQ, {from: accounts[4]});

		await expect(DatrixoEquityTokend3To6DT.removeShareholder.call(addressSFjpAEw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresshw8EowL = accounts[2]
		const uintrpXwuBP = BigInt("1956")
		const DatrixoEquityTokenD3Oy61K = await DatrixoEquityToken.new(addresshw8EowL, uintrpXwuBP, {from: accounts[5]});
		const uintW6lsPYI = BigInt("396")
		const addressSPjmi54 = accounts[5]
		const uintUipLqV = BigInt("781")
		const addressofslZV8 = accounts[0]
		const addressQbMr3wA = accounts[4]
		const addressarrayx7vsYI2 = await DatrixoEquityTokenD3Oy61K.getShareholdersArray.call({from: accounts[3]});
		const boolYVLVqPE = await DatrixoEquityTokenD3Oy61K.transfer.call(addressSPjmi54, uintW6lsPYI, {from: accounts[2]});
		const addressarrayvBrrLZ3 = await DatrixoEquityTokenD3Oy61K.getShareholdersArray.call({from: accounts[3]});
//		const boolZlRIrSS = await DatrixoEquityTokenD3Oy61K.transferFrom.call(addressQbMr3wA, addressofslZV8, uintUipLqV, {from: accounts[4]});

		assert.equal(addressarrayvBrrLZ3, )
		assert.equal(addressarrayx7vsYI2, )
		assert.equal(boolYVLVqPE, true)
		await expect(DatrixoEquityTokenD3Oy61K.transferFrom.call(addressQbMr3wA, addressofslZV8, uintUipLqV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressi9bkvnW = accounts[3]
		const uinttOdx9Jl = BigInt("553")
		const DatrixoEquityTokend3To6DT = await DatrixoEquityToken.new(addressi9bkvnW, uinttOdx9Jl, {from: accounts[4]});
		const uintqc6p0uB = BigInt("183")
		const addressDkDfURf = accounts[0]
		const addresshZtqXP7 = accounts[0]
		const uintinhesmB = BigInt("520")
		const addressNR9zcSC = accounts[2]
		const addresshuK5IS3 = accounts[5]
		const addressarrays7iqr5 = await DatrixoEquityTokend3To6DT.getShareholdersArray.call({from: accounts[3]});
//		const boolYfDfYEV = await DatrixoEquityTokend3To6DT.transferFrom.call(addresshZtqXP7, addressDkDfURf, uintqc6p0uB, {from: accounts[3]});
//		const bool6BVUgx = await DatrixoEquityTokend3To6DT.transferFrom.call(addresshuK5IS3, addressNR9zcSC, uintinhesmB, {from: accounts[4]});

		assert.equal(addressarrays7iqr5, )
		await expect(DatrixoEquityTokend3To6DT.transferFrom.call(addresshZtqXP7, addressDkDfURf, uintqc6p0uB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressznwhrH = accounts[3]
		const uintZWwIJLY = BigInt("553")
		const DatrixoEquityTokend3To6DT = await DatrixoEquityToken.new(addressznwhrH, uintZWwIJLY, {from: accounts[4]});
		const uintSESg2h = BigInt("473")
		const uintD3uYyjm = BigInt("479")
		const addresslBTnUZJ = "0x0000000000000000000000000000000000000001"
		const uintZGB8TB = BigInt("183")
		const addressjPIJ8X0 = accounts[2]
		const addressphdjtPN = accounts[0]
		const uintxBECdqg = BigInt("520")
		const addressbh3zyJd = accounts[2]
		const addresspQnsbAG = accounts[5]
		const uintQV6zS0 = await DatrixoEquityTokend3To6DT.setStart.call(uintSESg2h, {from: accounts[3]});
//		const boolq2vetqh = await DatrixoEquityTokend3To6DT.transfer.call(addresslBTnUZJ, uintD3uYyjm, {from: accounts[1]});
//		const addressarrays7iqr5 = await DatrixoEquityTokend3To6DT.getShareholdersArray.call({from: accounts[3]});
//		const boolYfDfYEV = await DatrixoEquityTokend3To6DT.transferFrom.call(addressphdjtPN, addressjPIJ8X0, uintZGB8TB, {from: accounts[3]});
//		const bool6BVUgx = await DatrixoEquityTokend3To6DT.transferFrom.call(addresspQnsbAG, addressbh3zyJd, uintxBECdqg, {from: accounts[4]});

		await expect(DatrixoEquityTokend3To6DT.transfer.call(addresslBTnUZJ, uintD3uYyjm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressAti64ys = accounts[2]
		const uintN7OXfOa = BigInt("1956")
		const DatrixoEquityTokenD3Oy61K = await DatrixoEquityToken.new(addressAti64ys, uintN7OXfOa, {from: accounts[5]});
		const uintpsyEQfU = BigInt("424")
		const addressQS2hH8u = accounts[2]
		const uint0wsL1O = BigInt("781")
		const addressC4RIWfU = accounts[0]
		const addresswGYr34g = accounts[4]
//		const boolYVLVqPE = await DatrixoEquityTokenD3Oy61K.transfer.call(addressQS2hH8u, uintpsyEQfU, {from: accounts[2]});
//		const addressarrayvBrrLZ3 = await DatrixoEquityTokenD3Oy61K.getShareholdersArray.call({from: accounts[3]});
//		const boolZlRIrSS = await DatrixoEquityTokenD3Oy61K.transferFrom.call(addresswGYr34g, addressC4RIWfU, uint0wsL1O, {from: accounts[4]});

		await expect(DatrixoEquityTokenD3Oy61K.transfer.call(addressQS2hH8u, uintpsyEQfU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressARsDBh6 = accounts[3]
		const uintlgD3JDk = BigInt("553")
		const DatrixoEquityTokend3To6DT = await DatrixoEquityToken.new(addressARsDBh6, uintlgD3JDk, {from: accounts[4]});
		const uintuyDVKdq = BigInt("183")
		const addressYZRaOpK = accounts[1]
		const addresshzE9iBY = accounts[3]
		const uintbwp2zPK = BigInt("520")
		const addressghgmh6 = accounts[2]
		const addressJPNuy4i = accounts[5]
		const boolYfDfYEV = await DatrixoEquityTokend3To6DT.transferFrom.call(addresshzE9iBY, addressYZRaOpK, uintuyDVKdq, {from: accounts[3]});
//		const bool6BVUgx = await DatrixoEquityTokend3To6DT.transferFrom.call(addressJPNuy4i, addressghgmh6, uintbwp2zPK, {from: accounts[4]});

		assert.equal(boolYfDfYEV, true)
		await expect(DatrixoEquityTokend3To6DT.transferFrom.call(addressJPNuy4i, addressghgmh6, uintbwp2zPK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressu6WJtrn = accounts[1]
		const uintEZwUiF = BigInt("275")
		const DatrixoEquityTokenz7b2D7N = await DatrixoEquityToken.new(addressu6WJtrn, uintEZwUiF, {from: accounts[2]});
		const uintCKZIUj3 = BigInt("34")
		const uintM9YP7ad = BigInt("1063")
		const uintUVJLHmf = BigInt("351")
		const addressVY6hRNG = accounts[1]
		const addressiqNCS47 = accounts[1]
		const uintOik04s1 = BigInt("1836")
		const addressuvRzfu = accounts[1]
		const addressKOI2gPM = accounts[3]
		const addresseg9Cp3t = accounts[1]
		const uintgFRcSwp = await DatrixoEquityTokenz7b2D7N.setStart.call(uintCKZIUj3, {from: accounts[1]});
//		const uintCGeHpRy = await DatrixoEquityTokenz7b2D7N.setStart.call(uintM9YP7ad, {from: accounts[1]});
//		const addressarrayJ2tbAr3 = await DatrixoEquityTokenz7b2D7N.getShareholdersArray.call({from: accounts[3]});
//		const boolvHupR5P = await DatrixoEquityTokenz7b2D7N.transferFrom.call(addressiqNCS47, addressVY6hRNG, uintUVJLHmf, {from: accounts[1]});
//		const boolxGAvL1 = await DatrixoEquityTokenz7b2D7N.transferFrom.call(addressKOI2gPM, addressuvRzfu, uintOik04s1, {from: accounts[3]});
//		const booliWhUYB = await DatrixoEquityTokenz7b2D7N.removeShareholder.call(addresseg9Cp3t, {from: accounts[4]});
//		const addressarrayX0brvzJ = await DatrixoEquityTokenz7b2D7N.getShareholdersArray.call({from: accounts[2]});

		await expect(DatrixoEquityTokenz7b2D7N.setStart.call(uintM9YP7ad, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresswtptagK = accounts[2]
		const uintJt6iTXi = BigInt("1648")
		const DatrixoEquityTokenjJHQh2i = await DatrixoEquityToken.new(addresswtptagK, uintJt6iTXi, {from: "0x0000000000000000000000000000000000000001"});
		const uintu9qsPkG = BigInt("1011")
		await DatrixoEquityTokenjJHQh2i.afterStartTime.call({from: accounts[2]});
		const addressarrayaOvW6ry = await DatrixoEquityTokenjJHQh2i.getShareholdersArray.call({from: accounts[3]});
		await DatrixoEquityTokenjJHQh2i.afterStartTime.call({from: accounts[2]});
		const addressarrayPMxQRTl = await DatrixoEquityTokenjJHQh2i.getShareholdersArray.call({from: accounts[0]});
		const uintCoB3k2l = await DatrixoEquityTokenjJHQh2i.setStart.call(uintu9qsPkG, {from: accounts[3]});
		await DatrixoEquityTokenjJHQh2i.onlyOwner.call({from: accounts[1]});
	});
})