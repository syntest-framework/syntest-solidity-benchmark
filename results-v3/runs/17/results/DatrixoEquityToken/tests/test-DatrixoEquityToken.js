const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressu4cdtn = accounts[2]
		const uintzr8NWYl = BigInt("1353")
		const DatrixoEquityTokenLc5RlwV = await DatrixoEquityToken.new(addressu4cdtn, uintzr8NWYl, {from: accounts[2]});
		const addressNcFsGL = accounts[0]
		const uintcmkf6Yg = BigInt("1856")
		const addresskqQzle = accounts[1]
		const addresswKN8xM = accounts[4]
		const boolQMplgza = await DatrixoEquityTokenLc5RlwV.removeShareholder.call(addressNcFsGL, {from: "0x0000000000000000000000000000000000000001"});
		const booluLN0O6D = await DatrixoEquityTokenLc5RlwV.transfer.call(addresskqQzle, uintcmkf6Yg, {from: accounts[3]});
		const boolezC78y = await DatrixoEquityTokenLc5RlwV.removeShareholder.call(addresswKN8xM, {from: accounts[2]});
		const addressarrayUBGDbWW = await DatrixoEquityTokenLc5RlwV.getShareholdersArray.call({from: accounts[4]});

		await expect(DatrixoEquityTokenLc5RlwV.removeShareholder.call(addressNcFsGL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresslmNrbYh = accounts[1]
		const uintRkAKb8 = BigInt("1701")
		const DatrixoEquityTokenSmgXJU = await DatrixoEquityToken.new(addresslmNrbYh, uintRkAKb8, {from: accounts[2]});
		const uintDpU2cHx = BigInt("164")
		const addressRbHDKH = accounts[4]
		const uintWZlh12m = BigInt("1947")
		const addressBQVhZsS = accounts[0]
		const addressarrayQA3tuAo = await DatrixoEquityTokenSmgXJU.getShareholdersArray.call({from: accounts[2]});
		const boolamdROxb = await DatrixoEquityTokenSmgXJU.transfer.call(addressRbHDKH, uintDpU2cHx, {from: accounts[2]});
		const uintFKMulkK = await DatrixoEquityTokenSmgXJU.setStart.call(uintWZlh12m, {from: accounts[1]});
		const boolzKwEdmm = await DatrixoEquityTokenSmgXJU.removeShareholder.call(addressBQVhZsS, {from: accounts[2]});
		await DatrixoEquityTokenSmgXJU.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayQA3tuAo, )
		await expect(DatrixoEquityTokenSmgXJU.transfer.call(addressRbHDKH, uintDpU2cHx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressWO72xoS = accounts[5]
		const uintuXQFPZC = BigInt("2013")
		const DatrixoEquityTokensKjdMcH = await DatrixoEquityToken.new(addressWO72xoS, uintuXQFPZC, {from: accounts[4]});
		const uintFb6LGiX = BigInt("1714")
		const addressWMPpSKa = accounts[3]
		const addressqFLfSJC = accounts[5]
		const uintjOPJXF = BigInt("1323")
		const addresso9fjXkv = accounts[2]
		await DatrixoEquityTokensKjdMcH.afterStartTime.call({from: accounts[4]});
		const boolLbY3ocX = await DatrixoEquityTokensKjdMcH.transferFrom.call(addressqFLfSJC, addressWMPpSKa, uintFb6LGiX, {from: accounts[0]});
		const boolZfE0hOg = await DatrixoEquityTokensKjdMcH.transfer.call(addresso9fjXkv, uintjOPJXF, {from: accounts[4]});

		await expect(DatrixoEquityTokensKjdMcH.afterStartTime.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressTNqKvWO = accounts[2]
		const uinthDEU5bi = BigInt("740")
		const DatrixoEquityTokenFTJmfYy = await DatrixoEquityToken.new(addressTNqKvWO, uinthDEU5bi, {from: accounts[2]});
		const uintehKfut5 = BigInt("453")
		const addressesgH5F = accounts[3]
		const addressgrBIpG3 = accounts[3]
		const boolglzx9HY = await DatrixoEquityTokenFTJmfYy.transfer.call(addressesgH5F, uintehKfut5, {from: accounts[2]});
		const addressarrayBwOtnQF = await DatrixoEquityTokenFTJmfYy.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayW12BaUB = await DatrixoEquityTokenFTJmfYy.getShareholdersArray.call({from: accounts[3]});
		const boolowEPc5n = await DatrixoEquityTokenFTJmfYy.removeShareholder.call(addressgrBIpG3, {from: accounts[1]});

		assert.equal(addressarrayBwOtnQF, )
		assert.equal(addressarrayW12BaUB, )
		assert.equal(boolglzx9HY, true)
		await expect(DatrixoEquityTokenFTJmfYy.removeShareholder.call(addressgrBIpG3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressqrEsVDN = accounts[2]
		const uinthlAoTb2 = BigInt("740")
		const DatrixoEquityTokenFTJmfYy = await DatrixoEquityToken.new(addressqrEsVDN, uinthlAoTb2, {from: accounts[2]});
		const uintKySvw1x = BigInt("453")
		const addressgnnzWkC = accounts[2]
		const addressGvhjPMN = accounts[3]
		const boolglzx9HY = await DatrixoEquityTokenFTJmfYy.transfer.call(addressgnnzWkC, uintKySvw1x, {from: accounts[2]});
		const boolowEPc5n = await DatrixoEquityTokenFTJmfYy.removeShareholder.call(addressGvhjPMN, {from: accounts[1]});

		await expect(DatrixoEquityTokenFTJmfYy.transfer.call(addressgnnzWkC, uintKySvw1x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressASogZEd = accounts[2]
		const uintHcdls0J = BigInt("740")
		const DatrixoEquityTokenFTJmfYy = await DatrixoEquityToken.new(addressASogZEd, uintHcdls0J, {from: accounts[2]});
		const uintJ4W2EbE = BigInt("1105")
		const addressWBiDgS = accounts[2]
		const addressKh7vGNU = accounts[3]
		const addressdHcJ8Ce = accounts[6]
		const uintdVVKMyA = BigInt("771")
		const addressuqr0Wg = accounts[4]
		const addresszwvMrS8 = "0x0000000000000000000000000000000000000001"
		const boolyqm06n = await DatrixoEquityTokenFTJmfYy.transferFrom.call(addressKh7vGNU, addressWBiDgS, uintJ4W2EbE, {from: accounts[2]});
		const boolowEPc5n = await DatrixoEquityTokenFTJmfYy.removeShareholder.call(addressdHcJ8Ce, {from: accounts[1]});
		const boollviQInq = await DatrixoEquityTokenFTJmfYy.transferFrom.call(addresszwvMrS8, addressuqr0Wg, uintdVVKMyA, {from: accounts[3]});

		await expect(DatrixoEquityTokenFTJmfYy.transferFrom.call(addressKh7vGNU, addressWBiDgS, uintJ4W2EbE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresstZjjhM = accounts[2]
		const uintp8smRJS = BigInt("740")
		const DatrixoEquityTokenFTJmfYy = await DatrixoEquityToken.new(addresstZjjhM, uintp8smRJS, {from: accounts[2]});
		const uintwIXcNnG = BigInt("453")
		const addressOAy3vp = accounts[3]
		const addressvSY8Klc = accounts[3]
		const addressXUAlLou = accounts[3]
		const boolglzx9HY = await DatrixoEquityTokenFTJmfYy.transfer.call(addressOAy3vp, uintwIXcNnG, {from: accounts[2]});
		const boolOTKLKuF = await DatrixoEquityTokenFTJmfYy.removeShareholder.call(addressvSY8Klc, {from: accounts[2]});
		const boolowEPc5n = await DatrixoEquityTokenFTJmfYy.removeShareholder.call(addressXUAlLou, {from: accounts[1]});

		assert.equal(boolglzx9HY, true)
		await expect(DatrixoEquityTokenFTJmfYy.removeShareholder.call(addressvSY8Klc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressZK1YVPa = accounts[2]
		const uinttdiF7e3 = BigInt("740")
		const DatrixoEquityTokenFTJmfYy = await DatrixoEquityToken.new(addressZK1YVPa, uinttdiF7e3, {from: accounts[2]});
		const uintsQ3E1Th = BigInt("453")
		const addressQm7vuGm = accounts[4]
		const uintZJR8Vyq = BigInt("888")
		const addressAKocspo = accounts[4]
		const boolglzx9HY = await DatrixoEquityTokenFTJmfYy.transfer.call(addressQm7vuGm, uintsQ3E1Th, {from: accounts[2]});
		const uintBdDJuwl = await DatrixoEquityTokenFTJmfYy.setStart.call(uintZJR8Vyq, {from: accounts[2]});
		const boolowEPc5n = await DatrixoEquityTokenFTJmfYy.removeShareholder.call(addressAKocspo, {from: accounts[1]});

		assert.equal(boolglzx9HY, true)
		await expect(DatrixoEquityTokenFTJmfYy.setStart.call(uintZJR8Vyq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const address5VKOCW = accounts[2]
		const uintRnpMn8 = BigInt("740")
		const DatrixoEquityTokenFTJmfYy = await DatrixoEquityToken.new(address5VKOCW, uintRnpMn8, {from: accounts[2]});
		const uintWXPwBX4 = BigInt("361")
		const addressZZt9aoh = accounts[4]
		const addressiUGLOeb = accounts[2]
		const addressGYuLrWp = accounts[8]
		const boolnDcdprY = await DatrixoEquityTokenFTJmfYy.transferFrom.call(addressiUGLOeb, addressZZt9aoh, uintWXPwBX4, {from: accounts[2]});
		const boolowEPc5n = await DatrixoEquityTokenFTJmfYy.removeShareholder.call(addressGYuLrWp, {from: accounts[1]});

		assert.equal(boolnDcdprY, true)
		await expect(DatrixoEquityTokenFTJmfYy.removeShareholder.call(addressGYuLrWp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressM23unQj = accounts[5]
		const uintVfQEyKS = BigInt("927")
		const DatrixoEquityTokenJ2trrKQ = await DatrixoEquityToken.new(addressM23unQj, uintVfQEyKS, {from: "0x0000000000000000000000000000000000000001"});
		const uintrIlT91G = BigInt("1797")
		const addressh6yHhl9 = accounts[1]
		const uinter8b8AM = BigInt("744")
		const addressnXPV2qR = accounts[1]
		const boolQRQJqzh = await DatrixoEquityTokenJ2trrKQ.transfer.call(addressh6yHhl9, uintrIlT91G, {from: accounts[2]});
		const boolOBCaUqy = await DatrixoEquityTokenJ2trrKQ.transfer.call(addressnXPV2qR, uinter8b8AM, {from: accounts[2]});
		await DatrixoEquityTokenJ2trrKQ.afterStartTime.call({from: accounts[3]});
		const addressarray5NuB6j = await DatrixoEquityTokenJ2trrKQ.getShareholdersArray.call({from: accounts[0]});
	});
})