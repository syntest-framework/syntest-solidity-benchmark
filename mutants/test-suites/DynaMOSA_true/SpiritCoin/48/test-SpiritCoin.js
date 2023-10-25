const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressHX0YxW1 = accounts[0]
		const addressmQqp2VR = accounts[4]
		const SpiritCoinCqymIn7 = await SpiritCoin.new(addressHX0YxW1, addressmQqp2VR, {from: accounts[4]});
		const addressoNeb4qo = accounts[5]
		const uintgXL15Sn = BigInt("850")
		const addressNQZXCJJ = accounts[0]
		const addressWq0MlF0 = accounts[3]
		const addressikdjMrK = accounts[1]
		const addressCVQTeXD = accounts[3]
		const addressEAMBYXq = accounts[3]
		const addressiXL2Eoz = accounts[2]
//		const addressKo7WsYl = await SpiritCoinCqymIn7.setMinter.call(addressoNeb4qo, {from: accounts[1]});
//		const boolCwVgxkK = await SpiritCoinCqymIn7.transferFrom.call(addressWq0MlF0, addressNQZXCJJ, uintgXL15Sn, {from: accounts[2]});
//		const addressvXBd3sM = await SpiritCoinCqymIn7.setMinter.call(addressikdjMrK, {from: accounts[3]});
//		const uintungyJfb = await SpiritCoinCqymIn7.balanceOf.call(addressCVQTeXD, {from: accounts[2]});
//		const uintkCGLkHE = await SpiritCoinCqymIn7.allowance.call(addressiXL2Eoz, addressEAMBYXq, {from: accounts[0]});

		await expect(SpiritCoinCqymIn7.setMinter.call(addressoNeb4qo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresskQF3vnS = accounts[3]
		const addressQwcsih = accounts[1]
		const SpiritCoinnchmZ7V = await SpiritCoin.new(addresskQF3vnS, addressQwcsih, {from: accounts[1]});
		const uintGCjJKjI = BigInt("130")
		const addressbIatDDj = accounts[5]
		const addresssaLKC7M = accounts[0]
		const addressxT8Wgrv = accounts[0]
		const addressXJGiT8R = accounts[0]
		const addresscQ0dJXD = accounts[4]
		const uintadINrMk = BigInt("1100")
		const addresscIFLopP = accounts[3]
//		const addressSN1DB2I = await SpiritCoinnchmZ7V.mint.call(addressbIatDDj, uintGCjJKjI, {from: accounts[5]});
//		const uintOiHj1kB = await SpiritCoinnchmZ7V.allowance.call(addressxT8Wgrv, addresssaLKC7M, {from: accounts[4]});
//		const uintM6hBSty = await SpiritCoinnchmZ7V.allowance.call(addresscQ0dJXD, addressXJGiT8R, {from: accounts[0]});
//		const addressQADWSzL = await SpiritCoinnchmZ7V.mint.call(addresscIFLopP, uintadINrMk, {from: accounts[2]});

		await expect(SpiritCoinnchmZ7V.mint.call(addressbIatDDj, uintGCjJKjI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressmOQplt9 = accounts[2]
		const addressDBGLxV = accounts[3]
		const SpiritCoin4difhh = await SpiritCoin.new(addressmOQplt9, addressDBGLxV, {from: accounts[4]});
		const uintiL5mHQZ = BigInt("1162")
		const addressg1Xq27 = accounts[0]
		const uintljWKB2w = BigInt("1265")
		const addressfIT2wXX = accounts[3]
		const addressGHHVRZ = "0x0000000000000000000000000000000000000001"
		const uintrSKNh6F = BigInt("1637")
		const addressZNThQ7W = accounts[2]
		const addressBHELEDi = accounts[5]
		const addressYCrOtGe = "0x0000000000000000000000000000000000000001"
		const addressj0wLRvo = accounts[2]
		const uintbtJopd = BigInt("414")
		const address0aMlPu = accounts[2]
		const addresso6AsMtn = accounts[0]
		const addressg01GDLe = await SpiritCoin4difhh.mint.call(addressg1Xq27, uintiL5mHQZ, {from: accounts[3]});
//		const boolqv1UMlK = await SpiritCoin4difhh.transferFrom.call(addressGHHVRZ, addressfIT2wXX, uintljWKB2w, {from: accounts[2]});
//		const boolQf1d5AD = await SpiritCoin4difhh.approve.call(addressZNThQ7W, uintrSKNh6F, {from: accounts[3]});
//		const addressMBaE8fj = await SpiritCoin4difhh.setMinter.call(addressBHELEDi, {from: accounts[4]});
//		const uintXnmrdw = await SpiritCoin4difhh.allowance.call(addressj0wLRvo, addressYCrOtGe, {from: accounts[2]});
//		const boolSZeT87O = await SpiritCoin4difhh.transferFrom.call(addresso6AsMtn, address0aMlPu, uintbtJopd, {from: accounts[5]});

		await expect(SpiritCoin4difhh.transferFrom.call(addressGHHVRZ, addressfIT2wXX, uintljWKB2w, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressAYCppLu = accounts[0]
		const addressQQcgU4l = accounts[2]
		const SpiritCoinCBQPQsg = await SpiritCoin.new(addressAYCppLu, addressQQcgU4l, {from: accounts[2]});
		const addressdGMAxUf = accounts[1]
		const addresstnAj3Ah = accounts[4]
		const uint5PGks8 = BigInt("1410")
		const addresspCrGEfV = "0x0000000000000000000000000000000000000001"
		const addresss8h7LS = accounts[4]
		const addressdIA2Zz = accounts[4]
		const uintt9zLDf6 = BigInt("724")
		const addressll62H9 = accounts[3]
		const uintpgBKMzA = BigInt("187")
		const addresstHfkQfe = accounts[1]
		const uintZqFZ3oW = await SpiritCoinCBQPQsg.balanceOf.call(addressdGMAxUf, {from: accounts[1]});
		const uintKJZ6hGm = await SpiritCoinCBQPQsg.balanceOf.call(addresstnAj3Ah, {from: accounts[5]});
//		const addressRMiC1c = await SpiritCoinCBQPQsg.mint.call(addresspCrGEfV, uint5PGks8, {from: accounts[4]});
//		const uintUqRvY9m = await SpiritCoinCBQPQsg.allowance.call(addressdIA2Zz, addresss8h7LS, {from: accounts[0]});
//		const addressyIGDHID = await SpiritCoinCBQPQsg.mint.call(addressll62H9, uintt9zLDf6, {from: accounts[1]});
//		const addressOqqIfjS = await SpiritCoinCBQPQsg.mint.call(addresstHfkQfe, uintpgBKMzA, {from: accounts[5]});

		assert.equal(uintKJZ6hGm, BigInt("0"))
		assert.equal(uintZqFZ3oW, BigInt("0"))
		await expect(SpiritCoinCBQPQsg.mint.call(addresspCrGEfV, uint5PGks8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressbsnhjd = accounts[4]
		const addresssRGqlwL = accounts[3]
		const SpiritCoinEw5PeoF = await SpiritCoin.new(addressbsnhjd, addresssRGqlwL, {from: accounts[2]});
		const uintLVAkhHd = BigInt("1261")
		const addressz3Kjcqi = accounts[1]
		const addressoV2nmT = accounts[2]
		const addressPplFXyZ = accounts[3]
		const uintGqvoTOX = BigInt("1777")
		const addressG1oVFHo = accounts[3]
		const boolvwRAv2 = await SpiritCoinEw5PeoF.approve.call(addressz3Kjcqi, uintLVAkhHd, {from: accounts[3]});
		const uinttjuoqJ = await SpiritCoinEw5PeoF.allowance.call(addressPplFXyZ, addressoV2nmT, {from: accounts[1]});
		const boolWVI8GEu = await SpiritCoinEw5PeoF.transfer.call(addressG1oVFHo, uintGqvoTOX, {from: accounts[4]});

		assert.equal(boolWVI8GEu, true)
		assert.equal(boolvwRAv2, true)
		assert.equal(uinttjuoqJ, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressb6kLq5E = accounts[3]
		const addressHU3Oozb = accounts[2]
		const SpiritCoinfUTTGp = await SpiritCoin.new(addressb6kLq5E, addressHU3Oozb, {from: accounts[4]});
		const addresspCO36hG = accounts[1]
		const uintyMghpSQ = BigInt("663")
		const address9oGuRF = accounts[3]
		const uintvZK44B = BigInt("324")
		const addressNef6Td = accounts[1]
		const uintlhojGPK = await SpiritCoinfUTTGp.balanceOf.call(addresspCO36hG, {from: accounts[2]});
		const boolrtQmL9Z = await SpiritCoinfUTTGp.approve.call(address9oGuRF, uintyMghpSQ, {from: accounts[5]});
//		const booljoTxHmu = await SpiritCoinfUTTGp.transfer.call(addressNef6Td, uintvZK44B, {from: accounts[0]});

		assert.equal(boolrtQmL9Z, true)
		assert.equal(uintlhojGPK, BigInt("0"))
		await expect(SpiritCoinfUTTGp.transfer.call(addressNef6Td, uintvZK44B, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressozAtyLo = "0x0000000000000000000000000000000000000001"
		const addressamEhBzy = "0x0000000000000000000000000000000000000001"
		const SpiritCoinHB9SoGu = await SpiritCoin.new(addressozAtyLo, addressamEhBzy, {from: accounts[0]});
		const addressvkX5uWV = accounts[2]
		const addressdpYmvhe = accounts[3]
		const addressNYfieA = accounts[5]
		const uintSFrPJ36 = BigInt("1544")
		const addressF4bs7g = "0x0000000000000000000000000000000000000001"
		const uintkKtrnUj = BigInt("1176")
		const addressrENb2GJ = accounts[4]
		const uintcnSRY2 = BigInt("565")
		const addressyucDmog = "0x0000000000000000000000000000000000000001"
		const addressFFjNfNb = "0x0000000000000000000000000000000000000001"
		const uintOsZOQe = BigInt("1674")
		const addressqql19DS = accounts[0]
		const addressMVfsjq9 = await SpiritCoinHB9SoGu.setMinter.call(addressvkX5uWV, {from: "0x0000000000000000000000000000000000000001"});
		const uintxlqGJ5W = await SpiritCoinHB9SoGu.allowance.call(addressNYfieA, addressdpYmvhe, {from: accounts[4]});
		const boolV8J6JA = await SpiritCoinHB9SoGu.approve.call(addressF4bs7g, uintSFrPJ36, {from: accounts[5]});
//		const addressY054kVQ = await SpiritCoinHB9SoGu.mint.call(addressrENb2GJ, uintkKtrnUj, {from: accounts[3]});
//		const boolSktbAZJ = await SpiritCoinHB9SoGu.transferFrom.call(addressFFjNfNb, addressyucDmog, uintcnSRY2, {from: accounts[0]});
//		const addressP35ANuH = await SpiritCoinHB9SoGu.mint.call(addressqql19DS, uintOsZOQe, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolV8J6JA, true)
		assert.equal(uintxlqGJ5W, BigInt("0"))
		await expect(SpiritCoinHB9SoGu.mint.call(addressrENb2GJ, uintkKtrnUj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressqcKa2uP = accounts[4]
		const addressYkq1LTN = accounts[4]
		const SpiritCoinyCxiGHi = await SpiritCoin.new(addressqcKa2uP, addressYkq1LTN, {from: "0x0000000000000000000000000000000000000001"});
		const uintnTTIlse = BigInt("434")
		const addressAFMVwM = accounts[0]
		const uintenHbacX = BigInt("1276")
		const addresswbnGNAR = accounts[1]
		const uintBn37YHT = BigInt("779")
		const address6q6Yqk = accounts[4]
		const boolRMUM8N9 = await SpiritCoinyCxiGHi.approve.call(addressAFMVwM, uintnTTIlse, {from: accounts[3]});
		const addressN01m7ng = await SpiritCoinyCxiGHi.mint.call(addresswbnGNAR, uintenHbacX, {from: accounts[5]});
		const boolho2V8Q5 = await SpiritCoinyCxiGHi.transfer.call(address6q6Yqk, uintBn37YHT, {from: accounts[4]});
	});
})