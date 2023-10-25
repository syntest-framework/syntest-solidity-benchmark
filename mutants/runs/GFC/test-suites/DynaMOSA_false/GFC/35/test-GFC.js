const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintnuEZNA5 = BigInt("1815")
		const stringfsrgqQs = "PaosI6ubl3KD"
		const stringrkjdoND = "VPenkak5S2BH7rjV6I5y94cofSvPHJyvKgcl0T9RqWURTUwq8x6xdJzRTw6dSSU2JbsL55alKtHrhxELkgUKEkf7DUw"
		const GFCU5qbt4X = await GFC.new(uintnuEZNA5, stringfsrgqQs, stringrkjdoND, {from: accounts[2]});
		const uintPrMaGh = BigInt("778")
		const uintCubVXAI = BigInt("1129")
		const addressINlkR5H = "0x0000000000000000000000000000000000000001"
		const uintozwBEun = BigInt("1401")
		const addressCCgjqYN = accounts[3]
		const addressItEh00i = accounts[1]
		const uinthMPaf5g = BigInt("198")
		const addressWtVlBrq = "0x0000000000000000000000000000000000000001"
		const addressmXVC2Np = accounts[4]
		const boolCokycRc = await GFCU5qbt4X.burn.call(uintPrMaGh, {from: accounts[3]});
		const boolZM3GWy = await GFCU5qbt4X.transfer.call(addressINlkR5H, uintCubVXAI, {from: "0x0000000000000000000000000000000000000001"});
		const booluAbqjIk = await GFCU5qbt4X.transferFrom.call(addressItEh00i, addressCCgjqYN, uintozwBEun, {from: accounts[2]});
		const boolQWo3HMo = await GFCU5qbt4X.transferFrom.call(addressmXVC2Np, addressWtVlBrq, uinthMPaf5g, {from: accounts[5]});

		await expect(GFCU5qbt4X.burn.call(uintPrMaGh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintwzy3tPC = BigInt("1302")
		const stringleZ917 = "dkXWEuCb5As7xvfxbWROBzG3pEP2tsjnTJVD2LhAxLkYkGtal604Y375FqH5dHUkAJ1rcuBT5dqSGczUwS6MX"
		const stringyMT59m = "HX2OH70Qk2PtkB2It94"
		const GFCqiQlJvQ = await GFC.new(uintwzy3tPC, stringleZ917, stringyMT59m, {from: accounts[1]});
		const uintv9dxNVa = BigInt("1069")
		const addressPOEtZMO = accounts[3]
		const addressxQ4gk9h = accounts[2]
		const uintmbdnRM8 = BigInt("1777")
		const addressk2NfqJ7 = accounts[0]
		const uint55AmNe = BigInt("273")
		const uintdBxOesm = BigInt("835")
		const addressY6sJHBz = accounts[2]
		const addressHKXHWx = accounts[5]
		const uintxqrqeim = BigInt("1372")
		const addresskZAi0e2 = accounts[3]
		const addresswbQcTL8 = accounts[2]
		const boolqTrB3Y0 = await GFCqiQlJvQ.transferFrom.call(addressxQ4gk9h, addressPOEtZMO, uintv9dxNVa, {from: accounts[1]});
		const boolLVRfBM8 = await GFCqiQlJvQ.transfer.call(addressk2NfqJ7, uintmbdnRM8, {from: accounts[1]});
		const boolGFaL6Wk = await GFCqiQlJvQ.burn.call(uint55AmNe, {from: accounts[3]});
		const boolHFFEYCv = await GFCqiQlJvQ.transferFrom.call(addressHKXHWx, addressY6sJHBz, uintdBxOesm, {from: accounts[3]});
		const boolE8giML2 = await GFCqiQlJvQ.transferFrom.call(addresswbQcTL8, addresskZAi0e2, uintxqrqeim, {from: accounts[5]});

		await expect(GFCqiQlJvQ.transferFrom.call(addressxQ4gk9h, addressPOEtZMO, uintv9dxNVa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintPwdXw3S = BigInt("1226")
		const string2cADnw = "UsbfVIhK4ipfQn9rFS"
		const stringUQCQXr8 = "eZg9bQuV6eFA2nnXvc5KD7WFuabXIASUR8CiDB6S5naMs0enoEeg"
		const GFCq7tpmE = await GFC.new(uintPwdXw3S, string2cADnw, stringUQCQXr8, {from: accounts[4]});
		const uintKYVzE7T = BigInt("450")
		const addressC3K7rP8 = "0x0000000000000000000000000000000000000001"
		const uintbFXoPN8 = BigInt("474")
		const addressz2obpkj = accounts[0]
		const uintgCKe7nL = BigInt("1156")
		const addressf5z0hxN = accounts[1]
		const addressEpiqBUM = accounts[0]
		const uintlIKGGZj = BigInt("533")
		const addressBFopzmG = accounts[1]
		const bytecjzDQzW = "0x04150b10020708130e171f181b1d03151d1801181b02100710"
		const uintHwDwFS5 = BigInt("649")
		const addressjWkOGts = accounts[1]
		const boolJglzZJn = await GFCq7tpmE.approve.call(addressC3K7rP8, uintKYVzE7T, {from: accounts[0]});
		const boolSrhAPeM = await GFCq7tpmE.burnFrom.call(addressz2obpkj, uintbFXoPN8, {from: accounts[1]});
		const booliw9aYHQ = await GFCq7tpmE.transferFrom.call(addressEpiqBUM, addressf5z0hxN, uintgCKe7nL, {from: accounts[1]});
		const boolt8bMfb = await GFCq7tpmE.transfer.call(addressBFopzmG, uintlIKGGZj, {from: accounts[5]});
		const boolyzaHgqa = await GFCq7tpmE.approveAndCall.call(addressjWkOGts, uintHwDwFS5, bytecjzDQzW, {from: accounts[4]});

		assert.equal(boolJglzZJn, true)
		await expect(GFCq7tpmE.burnFrom.call(addressz2obpkj, uintbFXoPN8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintUNpsZwa = BigInt("1016")
		const stringpvuxVM = "HZXAajBKu8fYE75sPMMIaBojAgxpYYcjz8cU6XAASUJFPDMyp3Taj1U"
		const stringpgM2Arc = "vDPTgG7Xf9TbxcjEoLzeyeDBBG"
		const GFCW7wjO8 = await GFC.new(uintUNpsZwa, stringpvuxVM, stringpgM2Arc, {from: accounts[1]});
		const bytejT1g0zQ = "0x0d1a1d0f1210090b1b0d04101c170d10151411"
		const uintfWWKvYk = BigInt("221")
		const addresstO4GgXz = "0x0000000000000000000000000000000000000001"
		const uintCk4cZ6M = BigInt("1193")
		const addressvQFZTrD = accounts[3]
		const byteEcibBQp = "0x04161b09151a061a15"
		const uintVzk6Eu8 = BigInt("1291")
		const addressMVMvtYh = accounts[0]
		const uintpRjpVbG = BigInt("1648")
		const addressFokmISC = accounts[0]
		const byteWJqdhSG = "0x1e170a1c0d05070e110d1004150f01011b110c141a0f070f"
		const uintEqcjEki = BigInt("154")
		const addresshhQZcQD = accounts[2]
		const boolHmWbz9E = await GFCW7wjO8.approveAndCall.call(addresstO4GgXz, uintfWWKvYk, bytejT1g0zQ, {from: accounts[2]});
		const booloLbZ0Yc = await GFCW7wjO8.approve.call(addressvQFZTrD, uintCk4cZ6M, {from: accounts[3]});
		const boolYjGtbH7 = await GFCW7wjO8.approveAndCall.call(addressMVMvtYh, uintVzk6Eu8, byteEcibBQp, {from: accounts[0]});
		const boolPCqlF5s = await GFCW7wjO8.approve.call(addressFokmISC, uintpRjpVbG, {from: "0x0000000000000000000000000000000000000001"});
		const booltPqVaiK = await GFCW7wjO8.approveAndCall.call(addresshhQZcQD, uintEqcjEki, byteWJqdhSG, {from: accounts[2]});

		await expect(GFCW7wjO8.approveAndCall.call(addresstO4GgXz, uintfWWKvYk, bytejT1g0zQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintfpnjgEh = BigInt("1203")
		const stringjtYZ5Z0 = "L4Xreohswqaz9UKfL49546bHBGmvni4fkNmaPvYhkCFrqf1841ANuKroHcav6h0CeT"
		const stringvzwQhve = "fj1lHp64n63O27ggQ52UofSbWrE3SyXFgBcFapeSnuhWHJ3CoPrQp6yLMPTnk3Vfwvqw6713MGTRf7eIPARteM6PFUhtjl"
		const GFCjUJe69a = await GFC.new(uintfpnjgEh, stringjtYZ5Z0, stringvzwQhve, {from: "0x0000000000000000000000000000000000000001"});
		const uintsb0EF2O = BigInt("611")
		const addressTblH3s = accounts[1]
		const byteXSaQmha = "0x1e02130d1a010818140d1d190d1b1a111e0b0e171a1d11070f11"
		const uinth8wXT2e = BigInt("1711")
		const addresswawOLE1 = accounts[3]
		const uinteLFHN81 = BigInt("1621")
		const addressIEzZR9N = accounts[3]
		const addressnl2GHwG = accounts[4]
		const boolAjZymiO = await GFCjUJe69a.transfer.call(addressTblH3s, uintsb0EF2O, {from: accounts[5]});
		const boolmCrHA8J = await GFCjUJe69a.approveAndCall.call(addresswawOLE1, uinth8wXT2e, byteXSaQmha, {from: accounts[1]});
		const boold2KQ0Mn = await GFCjUJe69a.transferFrom.call(addressnl2GHwG, addressIEzZR9N, uinteLFHN81, {from: accounts[0]});
	});

	it('test for GFC', async () => {
		const uintmnXRq0U = BigInt("390")
		const stringMvK1Ea8 = "pAxUwL78z2tQ1sKdW9kCCLM64gMA1ehLUHScaSaDtMZKi8MVFqtx9XCK9kakxDbzUE8z4mDtC4JJOyd"
		const stringqSHgHrp = "SXsepbcttiwLH7dzwxALZG9W9jQt6A3ndSdjymS1ictNRAyZxfjlMY5ineC"
		const GFCrILuOQv = await GFC.new(uintmnXRq0U, stringMvK1Ea8, stringqSHgHrp, {from: accounts[1]});
		const uintQPXsptk = BigInt("669")
		const addressVDpfoYE = accounts[5]
		const uintsvj26U9 = BigInt("1867")
		const addresstOV6f3y = accounts[2]
		const uintV4p48dY = BigInt("1048")
		const addresskhE2lYA = accounts[1]
		const uintjsOrPuT = BigInt("147")
		const addressmer8Zv = accounts[2]
		const addressggSmMQo = accounts[0]
		const boolCzMzbV1 = await GFCrILuOQv.approve.call(addressVDpfoYE, uintQPXsptk, {from: accounts[3]});
		const boolur9x1TA = await GFCrILuOQv.transfer.call(addresstOV6f3y, uintsvj26U9, {from: accounts[0]});
		const boolhcgTaBZ = await GFCrILuOQv.transfer.call(addresskhE2lYA, uintV4p48dY, {from: accounts[1]});
		const boolIMTto15 = await GFCrILuOQv.transferFrom.call(addressggSmMQo, addressmer8Zv, uintjsOrPuT, {from: accounts[4]});

		assert.equal(boolCzMzbV1, true)
		await expect(GFCrILuOQv.transfer.call(addresstOV6f3y, uintsvj26U9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})