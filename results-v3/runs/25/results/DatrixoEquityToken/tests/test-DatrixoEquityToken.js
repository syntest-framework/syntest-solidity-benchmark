const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressYRNsUR = "0x0000000000000000000000000000000000000001"
		const uintrVwLpcn = BigInt("596")
		const DatrixoEquityTokenFZdT3D0 = await DatrixoEquityToken.new(addressYRNsUR, uintrVwLpcn, {from: accounts[1]});
		const addressGvAd2uG = accounts[3]
		const uintbDcvOb = BigInt("1309")
		const addressBqC2gQk = accounts[3]
		const booljBiGA5 = await DatrixoEquityTokenFZdT3D0.removeShareholder.call(addressGvAd2uG, {from: "0x0000000000000000000000000000000000000001"});
		const boolVesV6M = await DatrixoEquityTokenFZdT3D0.transfer.call(addressBqC2gQk, uintbDcvOb, {from: accounts[1]});
		await DatrixoEquityTokenFZdT3D0.afterStartTime.call({from: accounts[5]});
		const addressarrayE8wmDOr = await DatrixoEquityTokenFZdT3D0.getShareholdersArray.call({from: accounts[3]});

		await expect(DatrixoEquityTokenFZdT3D0.removeShareholder.call(addressGvAd2uG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressrLJGTBs = accounts[2]
		const uintF2BU0UP = BigInt("679")
		const DatrixoEquityTokenW1nQPG6 = await DatrixoEquityToken.new(addressrLJGTBs, uintF2BU0UP, {from: accounts[4]});
		const addressrq5qyE = accounts[0]
		const uinte4mjkIg = BigInt("838")
		await DatrixoEquityTokenW1nQPG6.afterStartTime.call({from: accounts[1]});
		const boolLrB37Tv = await DatrixoEquityTokenW1nQPG6.removeShareholder.call(addressrq5qyE, {from: accounts[4]});
		await DatrixoEquityTokenW1nQPG6.afterStartTime.call({from: accounts[5]});
		const uintmlShwCz = await DatrixoEquityTokenW1nQPG6.setStart.call(uinte4mjkIg, {from: accounts[0]});
		await DatrixoEquityTokenW1nQPG6.afterStartTime.call({from: accounts[5]});

		await expect(DatrixoEquityTokenW1nQPG6.afterStartTime.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressfiN3KX = accounts[4]
		const uintVA0kCR6 = BigInt("1454")
		const DatrixoEquityTokenQX82zV6 = await DatrixoEquityToken.new(addressfiN3KX, uintVA0kCR6, {from: accounts[3]});
		const uintBbCh60V = BigInt("1503")
		const addressaN4dVXX = accounts[5]
		const addressLD9F2CQ = "0x0000000000000000000000000000000000000001"
		const uintWnmPEg = BigInt("771")
		const addressj2cZxh2 = accounts[2]
		const uintC2JkIaK = BigInt("699")
		const addressp80rF3i = accounts[4]
		const addresskcNBKL1 = accounts[0]
		const addressarrayodppTAy = await DatrixoEquityTokenQX82zV6.getShareholdersArray.call({from: accounts[4]});
		const boolw2YQuqc = await DatrixoEquityTokenQX82zV6.transferFrom.call(addressLD9F2CQ, addressaN4dVXX, uintBbCh60V, {from: accounts[1]});
		const boolhHMPdBM = await DatrixoEquityTokenQX82zV6.transfer.call(addressj2cZxh2, uintWnmPEg, {from: accounts[1]});
		const boolXhzJfxU = await DatrixoEquityTokenQX82zV6.transferFrom.call(addresskcNBKL1, addressp80rF3i, uintC2JkIaK, {from: accounts[4]});

		assert.equal(addressarrayodppTAy, )
		await expect(DatrixoEquityTokenQX82zV6.transferFrom.call(addressLD9F2CQ, addressaN4dVXX, uintBbCh60V, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressrVK3Eia = accounts[2]
		const uintpN5Zouv = BigInt("1202")
		const DatrixoEquityTokenpIZjX0L = await DatrixoEquityToken.new(addressrVK3Eia, uintpN5Zouv, {from: "0x0000000000000000000000000000000000000001"});
		const uintDlRE2Zf = BigInt("812")
		const addressKIMgfR = accounts[2]
		await DatrixoEquityTokenpIZjX0L.onlyOwner.call({from: accounts[2]});
		const boolQ8XD4Z1 = await DatrixoEquityTokenpIZjX0L.transfer.call(addressKIMgfR, uintDlRE2Zf, {from: accounts[4]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressEpiJjXK = accounts[1]
		const uintQlUZ187 = BigInt("567")
		const DatrixoEquityTokenLENdvDE = await DatrixoEquityToken.new(addressEpiJjXK, uintQlUZ187, {from: accounts[4]});
		const uintnB4jx2c = BigInt("919")
		const addressFotuCFP = "0x0000000000000000000000000000000000000001"
		const addressz7bzTWs = "0x0000000000000000000000000000000000000001"
		const booloNTOIN0 = await DatrixoEquityTokenLENdvDE.transferFrom.call(addressz7bzTWs, addressFotuCFP, uintnB4jx2c, {from: accounts[1]});
		await DatrixoEquityTokenLENdvDE.onlyOwner.call({from: accounts[0]});
		await DatrixoEquityTokenLENdvDE.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenLENdvDE.transferFrom.call(addressz7bzTWs, addressFotuCFP, uintnB4jx2c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressbHHziPq = accounts[3]
		const uintOjd4wbI = BigInt("583")
		const DatrixoEquityTokenGkXO0yd = await DatrixoEquityToken.new(addressbHHziPq, uintOjd4wbI, {from: accounts[3]});
		const uinthC0CS2f = BigInt("473")
		const addresslvWnNvF = accounts[1]
		const addressXPnN4bL = accounts[2]
		const uintFLG2Dux = BigInt("553")
		const addressPNYHQTW = accounts[3]
		const uintLYOZn8 = BigInt("1068")
		const addresstoZd6T = accounts[4]
		const addressXXKIDk = accounts[2]
		const booli91Ub1x = await DatrixoEquityTokenGkXO0yd.transfer.call(addresslvWnNvF, uinthC0CS2f, {from: accounts[3]});
		const boolG4WgJvF = await DatrixoEquityTokenGkXO0yd.removeShareholder.call(addressXPnN4bL, {from: accounts[1]});
		const booln40N6Go = await DatrixoEquityTokenGkXO0yd.transfer.call(addressPNYHQTW, uintFLG2Dux, {from: accounts[4]});
		const boolxrfolMx = await DatrixoEquityTokenGkXO0yd.transferFrom.call(addressXXKIDk, addresstoZd6T, uintLYOZn8, {from: accounts[4]});

		assert.equal(booli91Ub1x, true)
		await expect(DatrixoEquityTokenGkXO0yd.removeShareholder.call(addressXPnN4bL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressB4LNRaf = "0x0000000000000000000000000000000000000001"
		const uintbjp8TZl = BigInt("596")
		const DatrixoEquityTokenFZdT3D0 = await DatrixoEquityToken.new(addressB4LNRaf, uintbjp8TZl, {from: accounts[1]});
		const addresstq5UnIo = "0x0000000000000000000000000000000000000000"
		const addressXYhlyAs = accounts[1]
		const booljBiGA5 = await DatrixoEquityTokenFZdT3D0.removeShareholder.call(addresstq5UnIo, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenFZdT3D0.onlyOwner.call({from: accounts[4]});
		const boolhnsYw8e = await DatrixoEquityTokenFZdT3D0.removeShareholder.call(addressXYhlyAs, {from: accounts[0]});

		await expect(DatrixoEquityTokenFZdT3D0.removeShareholder.call(addresstq5UnIo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressHoOi2y = accounts[5]
		const uinthZxHQNh = BigInt("587")
		const DatrixoEquityTokenN7Im2Rb = await DatrixoEquityToken.new(addressHoOi2y, uinthZxHQNh, {from: accounts[5]});
		const uintNfI7081 = BigInt("613")
		const uintkmv6cdM = BigInt("843")
		const addresshbLhum4 = "0x0000000000000000000000000000000000000001"
		const addressuE7pZsh = accounts[3]
		const uintIh2SOVO = BigInt("640")
		const addressXybmbxd = accounts[4]
		const addressp4UAwjZ = accounts[4]
		const uintK8UIMKi = await DatrixoEquityTokenN7Im2Rb.setStart.call(uintNfI7081, {from: accounts[5]});
		const boolM3c8Sx = await DatrixoEquityTokenN7Im2Rb.transferFrom.call(addressuE7pZsh, addresshbLhum4, uintkmv6cdM, {from: accounts[5]});
		const boolvRO47kB = await DatrixoEquityTokenN7Im2Rb.transferFrom.call(addressp4UAwjZ, addressXybmbxd, uintIh2SOVO, {from: accounts[3]});

		await expect(DatrixoEquityTokenN7Im2Rb.setStart.call(uintNfI7081, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressEu4K1JF = accounts[0]
		const uintLVndJ9X = BigInt("174")
		const DatrixoEquityTokenhtSSPjL = await DatrixoEquityToken.new(addressEu4K1JF, uintLVndJ9X, {from: accounts[3]});
		const uint3TPrkS = BigInt("989")
		const addressmU1LMlQ = accounts[0]
		const addresspXEEyTI = accounts[0]
		const uintJ1QJFVs = BigInt("1716")
		const addressDzNmjEt = accounts[4]
		const addressarrayxZTKgTm = await DatrixoEquityTokenhtSSPjL.getShareholdersArray.call({from: accounts[0]});
		const boolWUpxcdP = await DatrixoEquityTokenhtSSPjL.transfer.call(addressmU1LMlQ, uint3TPrkS, {from: accounts[0]});
		const booluNaRcpu = await DatrixoEquityTokenhtSSPjL.removeShareholder.call(addresspXEEyTI, {from: accounts[0]});
		await DatrixoEquityTokenhtSSPjL.onlyOwner.call({from: accounts[2]});
		const booljLMtBCD = await DatrixoEquityTokenhtSSPjL.transfer.call(addressDzNmjEt, uintJ1QJFVs, {from: accounts[1]});
		await DatrixoEquityTokenhtSSPjL.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayxZTKgTm, )
		await expect(DatrixoEquityTokenhtSSPjL.transfer.call(addressmU1LMlQ, uint3TPrkS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresseDMxDZg = accounts[4]
		const uinthEFVgil = BigInt("1680")
		const DatrixoEquityTokenDMcCb3 = await DatrixoEquityToken.new(addresseDMxDZg, uinthEFVgil, {from: accounts[2]});
		const uintYMUI03H = BigInt("995")
		const addressMEJTZaQ = accounts[0]
		const addressMxSftHX = accounts[4]
		const uintkfWhznE = BigInt("1913")
		const addressCMCcNum = "0x0000000000000000000000000000000000000001"
		const addressY3PTKAF = accounts[1]
		const uintbM7SzVb = BigInt("1012")
		const addressioXYtN = accounts[2]
		const uintArgKkaP = BigInt("1138")
		const boolpFnVKVt = await DatrixoEquityTokenDMcCb3.transferFrom.call(addressMxSftHX, addressMEJTZaQ, uintYMUI03H, {from: accounts[4]});
		const boolGPJ78Tc = await DatrixoEquityTokenDMcCb3.transferFrom.call(addressY3PTKAF, addressCMCcNum, uintkfWhznE, {from: accounts[5]});
		const boolagPxFR = await DatrixoEquityTokenDMcCb3.transfer.call(addressioXYtN, uintbM7SzVb, {from: accounts[1]});
		const addressarraynRFmc6a = await DatrixoEquityTokenDMcCb3.getShareholdersArray.call({from: accounts[3]});
		const uintkqv24pw = await DatrixoEquityTokenDMcCb3.setStart.call(uintArgKkaP, {from: accounts[3]});

		assert.equal(boolpFnVKVt, true)
		await expect(DatrixoEquityTokenDMcCb3.transferFrom.call(addressY3PTKAF, addressCMCcNum, uintkfWhznE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})