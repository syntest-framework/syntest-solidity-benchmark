const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenFP5TkG = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintbDKLZpE = BigInt("510")
		const uintKgxdd96 = BigInt("87")
		const addressizW7BW = accounts[0]
		const addressFIqD8AX = accounts[3]
		const addresskfJTFxv = accounts[3]
//		const uintjWc8tq2 = await CryptoSecureBankTokenFP5TkG.setParams.call(uintKgxdd96, uintbDKLZpE, {from: accounts[3]});
//		const uintzacByR = await CryptoSecureBankTokenFP5TkG.allowance.call(addressFIqD8AX, addressizW7BW, {from: accounts[5]});
//		await CryptoSecureBankTokenFP5TkG.pause.call({from: accounts[4]});
//		const addressYuIjkS = await CryptoSecureBankTokenFP5TkG.setOwner2.call(addresskfJTFxv, {from: accounts[0]});

		await expect(CryptoSecureBankTokenFP5TkG.setParams.call(uintKgxdd96, uintbDKLZpE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenvnVPGyG = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressK5jgIPb = accounts[0]
		const addressmSN8XoN = accounts[1]
		const addressjKa0Qf3 = accounts[0]
		const addressWnp6cc = accounts[2]
		const uintQWjX3Ed = BigInt("544")
		const addressYoNkWc = accounts[5]
		const addressjQxuY7 = accounts[1]
		const addressEkGFdOU = await CryptoSecureBankTokenvnVPGyG.getOwner.call({from: accounts[4]});
//		const addresspkHJSn1 = await CryptoSecureBankTokenvnVPGyG.setOwner2.call(addressK5jgIPb, {from: accounts[1]});
//		const uintZ7v69Lm = await CryptoSecureBankTokenvnVPGyG.allowance.call(addressjKa0Qf3, addressmSN8XoN, {from: accounts[2]});
//		const uintkAP6fAG = await CryptoSecureBankTokenvnVPGyG.balanceOf.call(addressWnp6cc, {from: accounts[5]});
//		const bool0bI16K = await CryptoSecureBankTokenvnVPGyG.transferFrom.call(addressjQxuY7, addressYoNkWc, uintQWjX3Ed, {from: accounts[4]});

		assert.equal(addressEkGFdOU, 0x4fea12276Fce7Ba4F7D2462B35CB5eeD5f0dc080)
		await expect(CryptoSecureBankTokenvnVPGyG.setOwner2.call(addressK5jgIPb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendV0GkiF = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintiUUlZi1 = BigInt("855")
		const uintk3pgpL = BigInt("813")
		const addressXCqV2vM = accounts[0]
		const addressEckeyew = accounts[0]
//		const uintwNMmTNd = await CryptoSecureBankTokendV0GkiF.onlyPayloadSize.call(uintiUUlZi1, {from: accounts[2]});
//		const boolkQXOsbY = await CryptoSecureBankTokendV0GkiF.redeem.call(uintk3pgpL, {from: accounts[0]});
//		const uintPGNPS3i = await CryptoSecureBankTokendV0GkiF.allowance.call(addressEckeyew, addressXCqV2vM, {from: accounts[2]});

		await expect(CryptoSecureBankTokendV0GkiF.onlyPayloadSize.call(uintiUUlZi1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhKoKtNG = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintfckiUqM = BigInt("1574")
		const addressSXJJpR = accounts[3]
		const uintsyhhWBI = BigInt("1277")
		const addressihwrVaf = accounts[0]
		const addressbowAPFP = accounts[3]
		const addressy8MOFo = "0x0000000000000000000000000000000000000001"
		const bool2zFUPD = await CryptoSecureBankTokenhKoKtNG.approve.call(addressSXJJpR, uintfckiUqM, {from: accounts[1]});
		const addressKnOX7V = await CryptoSecureBankTokenhKoKtNG.getOwner.call({from: accounts[2]});
		const boolCkP3IXU = await CryptoSecureBankTokenhKoKtNG.approve.call(addressihwrVaf, uintsyhhWBI, {from: accounts[1]});
		const addresszQ1cWwe = await CryptoSecureBankTokenhKoKtNG.transferOwnership.call(addressbowAPFP, {from: accounts[3]});
//		const boolRSEq7uF = await CryptoSecureBankTokenhKoKtNG.deprecate.call(addressy8MOFo, {from: accounts[4]});

		assert.equal(addressKnOX7V, 0x4fea12276Fce7Ba4F7D2462B35CB5eeD5f0dc080)
		assert.equal(bool2zFUPD, true)
		assert.equal(boolCkP3IXU, true)
		await expect(CryptoSecureBankTokenhKoKtNG.deprecate.call(addressy8MOFo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO2oF5tA = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQXYIwl = BigInt("1995")
		const addressUmgxpxo = accounts[2]
		const addressSnuXybG = accounts[0]
		const boolm9qvYSa = await CryptoSecureBankTokenO2oF5tA.transfer.call(addressUmgxpxo, uintQXYIwl, {from: accounts[0]});
		await CryptoSecureBankTokenO2oF5tA.whenPaused.call({from: accounts[3]});
		const uintYW544fw = await CryptoSecureBankTokenO2oF5tA.balanceOf.call(addressSnuXybG, {from: accounts[2]});
		const addressH9glUjf = await CryptoSecureBankTokenO2oF5tA.getOwner.call({from: accounts[2]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhKoKtNG = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintRZxvYV3 = BigInt("1574")
		const addressSeZqWnA = accounts[3]
		const uintd3epHMH = BigInt("822")
		const address4l9A9A = accounts[2]
		const addresseEIOCv3 = accounts[3]
		const addressXLvX2Xg = "0x0000000000000000000000000000000000000000"
		const bool2zFUPD = await CryptoSecureBankTokenhKoKtNG.approve.call(addressSeZqWnA, uintRZxvYV3, {from: accounts[1]});
		const addressKnOX7V = await CryptoSecureBankTokenhKoKtNG.getOwner.call({from: accounts[2]});
//		const boolTBTO7zo = await CryptoSecureBankTokenhKoKtNG.transfer.call(address4l9A9A, uintd3epHMH, {from: accounts[4]});
//		const addresszQ1cWwe = await CryptoSecureBankTokenhKoKtNG.transferOwnership.call(addresseEIOCv3, {from: accounts[3]});
//		const boolRSEq7uF = await CryptoSecureBankTokenhKoKtNG.deprecate.call(addressXLvX2Xg, {from: accounts[4]});

		assert.equal(addressKnOX7V, 0x4fea12276Fce7Ba4F7D2462B35CB5eeD5f0dc080)
		assert.equal(bool2zFUPD, true)
		await expect(CryptoSecureBankTokenhKoKtNG.transfer.call(address4l9A9A, uintd3epHMH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken0iuaH1 = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintajdEwCh = BigInt("1530")
		const addressA4Q3xr = accounts[1]
		const uintfrZNfom = await CryptoSecureBankToken0iuaH1.totalSupply.call({from: accounts[2]});
		const boolgvQbAAm = await CryptoSecureBankToken0iuaH1.approve.call(addressA4Q3xr, uintajdEwCh, {from: accounts[5]});

		assert.equal(boolgvQbAAm, true)
		assert.equal(uintfrZNfom, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAQ1cT4c = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintZd4T8I3 = BigInt("1439")
		const addressblv8QUn = accounts[4]
		const uintXaDRyHR = BigInt("299")
		const addressszM5n4k = "0x0000000000000000000000000000000000000001"
		const addressEZZnkWL = accounts[5]
		const boolCJSrPyP = await CryptoSecureBankTokenAQ1cT4c.approve.call(addressblv8QUn, uintZd4T8I3, {from: "0x0000000000000000000000000000000000000001"});
//		const boolniR6FMr = await CryptoSecureBankTokenAQ1cT4c.transferFrom.call(addressEZZnkWL, addressszM5n4k, uintXaDRyHR, {from: accounts[4]});

		assert.equal(boolCJSrPyP, true)
		await expect(CryptoSecureBankTokenAQ1cT4c.transferFrom.call(addressEZZnkWL, addressszM5n4k, uintXaDRyHR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhKoKtNG = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintSE6oCHB = BigInt("1574")
		const addressVdKxPoZ = accounts[3]
		const uintZ6mR2oS = BigInt("1283")
		const addressE648jfr = accounts[0]
		const addresskT64PYk = accounts[0]
		const addressIDw5ysX = accounts[0]
		const addressEYUsRSe = accounts[3]
		const addresszmd0Fhc = "0x0000000000000000000000000000000000000001"
		const addresslmZQ84f = accounts[3]
		const addresspXBPkGa = accounts[2]
		const bool2zFUPD = await CryptoSecureBankTokenhKoKtNG.approve.call(addressVdKxPoZ, uintSE6oCHB, {from: accounts[1]});
		const addressKnOX7V = await CryptoSecureBankTokenhKoKtNG.getOwner.call({from: accounts[2]});
		const boolCkP3IXU = await CryptoSecureBankTokenhKoKtNG.approve.call(addressE648jfr, uintZ6mR2oS, {from: accounts[1]});
		const uintfi5Fdw = await CryptoSecureBankTokenhKoKtNG.allowance.call(addressIDw5ysX, addresskT64PYk, {from: "0x0000000000000000000000000000000000000001"});
		const addresszQ1cWwe = await CryptoSecureBankTokenhKoKtNG.transferOwnership.call(addressEYUsRSe, {from: accounts[3]});
//		const boolRSEq7uF = await CryptoSecureBankTokenhKoKtNG.deprecate.call(addresszmd0Fhc, {from: accounts[4]});
//		const uintnB4JjEo = await CryptoSecureBankTokenhKoKtNG.allowance.call(addresspXBPkGa, addresslmZQ84f, {from: accounts[4]});

		assert.equal(addressKnOX7V, 0x4fea12276Fce7Ba4F7D2462B35CB5eeD5f0dc080)
		assert.equal(bool2zFUPD, true)
		assert.equal(boolCkP3IXU, true)
		assert.equal(uintfi5Fdw, BigInt("0"))
		await expect(CryptoSecureBankTokenhKoKtNG.deprecate.call(addresszmd0Fhc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAQ1cT4c = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintyVzWg9X = BigInt("1439")
		const addressjA3ZXpg = accounts[4]
		const addressqMYAfhZ = accounts[1]
		const uintdmB9pq = BigInt("292")
		const addresshyzj2Ks = "0x0000000000000000000000000000000000000001"
		const addressl2k6pBO = accounts[5]
		const boolCJSrPyP = await CryptoSecureBankTokenAQ1cT4c.approve.call(addressjA3ZXpg, uintyVzWg9X, {from: "0x0000000000000000000000000000000000000001"});
		const addressdjqzAXl = await CryptoSecureBankTokenAQ1cT4c.setOwner2.call(addressqMYAfhZ, {from: accounts[5]});
//		const boolniR6FMr = await CryptoSecureBankTokenAQ1cT4c.transferFrom.call(addressl2k6pBO, addresshyzj2Ks, uintdmB9pq, {from: accounts[4]});

		assert.equal(boolCJSrPyP, true)
		await expect(CryptoSecureBankTokenAQ1cT4c.transferFrom.call(addressl2k6pBO, addresshyzj2Ks, uintdmB9pq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenRbHfX5D = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressWFI53oX = accounts[3]
		const addressCh8AqFB = accounts[2]
		const addressYcNZhpF = accounts[3]
		const uintsaBNeXW = BigInt("1576")
		const addressfE7ssKz = accounts[3]
		const addressBi9X6Od = accounts[5]
		const addressB8Imbml = accounts[0]
		const addresshH73FUj = accounts[3]
		const addresssSG4Pin = accounts[1]
		const uintovEKGZz = await CryptoSecureBankTokenRbHfX5D.allowance.call(addressCh8AqFB, addressWFI53oX, {from: accounts[2]});
		const uintdx7FFL9 = await CryptoSecureBankTokenRbHfX5D.balanceOf.call(addressYcNZhpF, {from: accounts[4]});
//		const boolxOCJQUA = await CryptoSecureBankTokenRbHfX5D.transfer.call(addressfE7ssKz, uintsaBNeXW, {from: accounts[2]});
//		const uintxrzt2P = await CryptoSecureBankTokenRbHfX5D.balanceOf.call(addressBi9X6Od, {from: accounts[0]});
//		const addressKfDCcrH = await CryptoSecureBankTokenRbHfX5D.transferOwnership.call(addressB8Imbml, {from: accounts[2]});
//		const uintkLs5tC1 = await CryptoSecureBankTokenRbHfX5D.allowance.call(addresssSG4Pin, addresshH73FUj, {from: accounts[4]});

		assert.equal(uintdx7FFL9, BigInt("0"))
		assert.equal(uintovEKGZz, BigInt("0"))
		await expect(CryptoSecureBankTokenRbHfX5D.transfer.call(addressfE7ssKz, uintsaBNeXW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAQ1cT4c = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintGFXGFjC = BigInt("1439")
		const addressdq0mFmx = accounts[4]
		const addressakULlR = accounts[2]
		const addressBKpZ5hK = accounts[5]
		const uintaV1fZyo = BigInt("292")
		const addressWjS8KZb = "0x0000000000000000000000000000000000000001"
		const addresse1SzSnh = accounts[5]
		const boolCJSrPyP = await CryptoSecureBankTokenAQ1cT4c.approve.call(addressdq0mFmx, uintGFXGFjC, {from: "0x0000000000000000000000000000000000000001"});
		const addressdjqzAXl = await CryptoSecureBankTokenAQ1cT4c.setOwner2.call(addressakULlR, {from: accounts[5]});
		const boolKxeQEOT = await CryptoSecureBankTokenAQ1cT4c.getBlackListStatus.call(addressBKpZ5hK, {from: accounts[2]});
//		const boolniR6FMr = await CryptoSecureBankTokenAQ1cT4c.transferFrom.call(addresse1SzSnh, addressWjS8KZb, uintaV1fZyo, {from: accounts[4]});

		assert.equal(boolCJSrPyP, true)
		assert.equal(boolKxeQEOT, false)
		await expect(CryptoSecureBankTokenAQ1cT4c.transferFrom.call(addresse1SzSnh, addressWjS8KZb, uintaV1fZyo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhKoKtNG = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintGPnehDF = BigInt("1574")
		const addressk8vIcRK = accounts[3]
		const uintlKOtDK = BigInt("1360")
		const uintYiWXLgU = BigInt("822")
		const addressRFiBN86 = accounts[2]
		const addressFihBiRz = accounts[3]
		const addressubaipqA = "0x0000000000000000000000000000000000000000"
		const bool2zFUPD = await CryptoSecureBankTokenhKoKtNG.approve.call(addressk8vIcRK, uintGPnehDF, {from: accounts[1]});
		const addressKnOX7V = await CryptoSecureBankTokenhKoKtNG.getOwner.call({from: accounts[2]});
		const boolgCXpQn = await CryptoSecureBankTokenhKoKtNG.redeem.call(uintlKOtDK, {from: accounts[3]});
//		const boolTBTO7zo = await CryptoSecureBankTokenhKoKtNG.transfer.call(addressRFiBN86, uintYiWXLgU, {from: accounts[4]});
//		const addresszQ1cWwe = await CryptoSecureBankTokenhKoKtNG.transferOwnership.call(addressFihBiRz, {from: accounts[3]});
//		await CryptoSecureBankTokenhKoKtNG.pause.call({from: accounts[0]});
//		const boolRSEq7uF = await CryptoSecureBankTokenhKoKtNG.deprecate.call(addressubaipqA, {from: accounts[4]});

		assert.equal(addressKnOX7V, 0x4fea12276Fce7Ba4F7D2462B35CB5eeD5f0dc080)
		assert.equal(bool2zFUPD, true)
		assert.equal(boolgCXpQn, true)
		await expect(CryptoSecureBankTokenhKoKtNG.transfer.call(addressRFiBN86, uintYiWXLgU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenu8AnOpH = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressKH7AAdZ = accounts[4]
		const addressI0bFJcP = accounts[1]
		const uintWmdXR2A = BigInt("575")
		const addressR8kzhGF = accounts[1]
		const addressrDJ8Dri = accounts[5]
		const boolk0ykS5H = await CryptoSecureBankTokenu8AnOpH.deprecate.call(addressKH7AAdZ, {from: accounts[2]});
//		const addressBXN7ABc = await CryptoSecureBankTokenu8AnOpH.setOwner2.call(addressI0bFJcP, {from: accounts[0]});
//		const boolRdqlUnS = await CryptoSecureBankTokenu8AnOpH.transfer.call(addressR8kzhGF, uintWmdXR2A, {from: accounts[2]});
//		const uintiuDlemG = await CryptoSecureBankTokenu8AnOpH.balanceOf.call(addressrDJ8Dri, {from: accounts[4]});
//		await CryptoSecureBankTokenu8AnOpH.onlyOwner.call({from: accounts[5]});

		assert.equal(boolk0ykS5H, true)
		await expect(CryptoSecureBankTokenu8AnOpH.setOwner2.call(addressI0bFJcP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVTqWqbn = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresshNTs4IY = accounts[2]
		const addressNZ3Yen2 = accounts[2]
		const addressX3MP9Ub = accounts[2]
//		const addressq1YQQU = await CryptoSecureBankTokenVTqWqbn.destroyBlackFunds.call(addresshNTs4IY, {from: accounts[3]});
//		await CryptoSecureBankTokenVTqWqbn.unpause.call({from: accounts[4]});
//		const addresssPvH7vV = await CryptoSecureBankTokenVTqWqbn.removeBlackList.call(addressNZ3Yen2, {from: "0x0000000000000000000000000000000000000001"});
//		const uintFu0WQll = await CryptoSecureBankTokenVTqWqbn.balanceOf.call(addressX3MP9Ub, {from: accounts[1]});

		await expect(CryptoSecureBankTokenVTqWqbn.destroyBlackFunds.call(addresshNTs4IY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAQ1cT4c = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintB8OynKZ = BigInt("960")
		const addressXwZJ9sK = "0x0000000000000000000000000000000000000001"
		const uintVkVgTiv = BigInt("0")
		const addressx1mq8Jj = accounts[1]
		const addressm2bcNUj = accounts[5]
		const boolqsdOXeB = await CryptoSecureBankTokenAQ1cT4c.approve.call(addressXwZJ9sK, uintB8OynKZ, {from: accounts[2]});
		const boolKXeuIGv = await CryptoSecureBankTokenAQ1cT4c.transferFrom.call(addressm2bcNUj, addressx1mq8Jj, uintVkVgTiv, {from: accounts[0]});

		assert.equal(boolKXeuIGv, true)
		assert.equal(boolqsdOXeB, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenP3ScAyU = await CryptoSecureBankToken.new({from: accounts[1]});
		const uint76B441 = BigInt("82")
		const addressSTX1a4 = "0x0000000000000000000000000000000000000001"
		const addressqhOpze = accounts[0]
		const addresszj9g8zW = accounts[2]
		const uintwyt3cue = BigInt("1218")
		const booltgZR550 = await CryptoSecureBankTokenP3ScAyU.transfer.call(addressSTX1a4, uint76B441, {from: accounts[1]});
//		const addressKLdrSec = await CryptoSecureBankTokenP3ScAyU.setOwner2.call(addressqhOpze, {from: accounts[4]});
//		const addressYxu942e = await CryptoSecureBankTokenP3ScAyU.setOwner2.call(addresszj9g8zW, {from: accounts[4]});
//		const uintOubWp78 = await CryptoSecureBankTokenP3ScAyU.totalSupply.call({from: accounts[1]});
//		const boolM8HZJcC = await CryptoSecureBankTokenP3ScAyU.redeem.call(uintwyt3cue, {from: accounts[1]});

		assert.equal(booltgZR550, true)
		await expect(CryptoSecureBankTokenP3ScAyU.setOwner2.call(addressqhOpze, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken0iuaH1 = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressEfLml1k = accounts[2]
		const addressHMStUjd = accounts[4]
		const addressp8kx6a8 = accounts[4]
		const uintVNqmjO6 = BigInt("1132")
		const addressCktbAR3 = accounts[4]
		const addressQAgnFQQ = await CryptoSecureBankToken0iuaH1.removeBlackList.call(addressEfLml1k, {from: accounts[5]});
		const uintpI7GEJJ = await CryptoSecureBankToken0iuaH1.allowance.call(addressp8kx6a8, addressHMStUjd, {from: accounts[2]});
//		const boolkEIu2XC = await CryptoSecureBankToken0iuaH1.transfer.call(addressCktbAR3, uintVNqmjO6, {from: accounts[3]});

		assert.equal(uintpI7GEJJ, BigInt("0"))
		await expect(CryptoSecureBankToken0iuaH1.transfer.call(addressCktbAR3, uintVNqmjO6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenyKAARaM = await CryptoSecureBankToken.new({from: accounts[2]});
		const addresszJZCP7j = accounts[0]
		const addressE8n3t5t = await CryptoSecureBankTokenyKAARaM.addBlackList.call(addresszJZCP7j, {from: accounts[2]});
//		await CryptoSecureBankTokenyKAARaM.whenNotPaused.call({from: accounts[5]});
//		await CryptoSecureBankTokenyKAARaM.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenyKAARaM.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken0iuaH1 = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressHVnwanq = "0x00000000000000000000000000000000000000-1"
		const addresswFkvByq = accounts[1]
		const addressvVoq2ej = accounts[0]
		const addressuDRDEYQ = "0x0000000000000000000000000000000000000001"
		const addressIiJOsa3 = accounts[2]
		const addressWGvVrs8 = accounts[5]
		const uintGSnEyEs = BigInt("686")
		const addressPfv8fq = accounts[1]
		const addressPBqClOb = accounts[4]
		const uint3OYDF9 = BigInt("270")
		const addressP3wffqE = accounts[2]
		const uintnpVm93F = BigInt("936")
		const addressl3UG4u = accounts[2]
		const uintmF4i9R5 = BigInt("1369")
		const addressuuKD3Tc = accounts[2]
		const addressuQiOLSW = accounts[5]
		const addressSt4M5ma = accounts[2]
//		const uintH4uyxzL = await CryptoSecureBankToken0iuaH1.balanceOf.call(addressHVnwanq, {from: accounts[0]});
//		const uintf4obdLw = await CryptoSecureBankToken0iuaH1.balanceOf.call(addresswFkvByq, {from: accounts[2]});
//		const uintczMojDs = await CryptoSecureBankToken0iuaH1.allowance.call(addressuDRDEYQ, addressvVoq2ej, {from: accounts[5]});
//		const uintR3MiAJF = await CryptoSecureBankToken0iuaH1.allowance.call(addressWGvVrs8, addressIiJOsa3, {from: accounts[1]});
//		const booleCMztNt = await CryptoSecureBankToken0iuaH1.approve.call(addressPfv8fq, uintGSnEyEs, {from: accounts[0]});
//		const uintSmUcyRs = await CryptoSecureBankToken0iuaH1.balanceOf.call(addressPBqClOb, {from: accounts[0]});
//		const boolwG78qDy = await CryptoSecureBankToken0iuaH1.approve.call(addressP3wffqE, uint3OYDF9, {from: accounts[1]});
//		const boolZno3MHh = await CryptoSecureBankToken0iuaH1.transfer.call(addressl3UG4u, uintnpVm93F, {from: accounts[2]});
//		await CryptoSecureBankToken0iuaH1.whenPaused.call({from: accounts[3]});
//		const boolAWHfiWk = await CryptoSecureBankToken0iuaH1.approve.call(addressuuKD3Tc, uintmF4i9R5, {from: accounts[2]});
//		const uintlCjd4BK = await CryptoSecureBankToken0iuaH1.balanceOf.call(addressuQiOLSW, {from: accounts[0]});
//		const boolzGdqFjh = await CryptoSecureBankToken0iuaH1.getBlackListStatus.call(addressSt4M5ma, {from: accounts[0]});

		await expect(CryptoSecureBankToken0iuaH1.balanceOf.call(addressHVnwanq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})