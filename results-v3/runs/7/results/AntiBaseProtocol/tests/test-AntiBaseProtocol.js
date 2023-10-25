const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringXk66EXm = "Ln12agaAy3OaM3BFXbmsOK2FHAOrpUuaKOURCQzv5fmf2qDurMejPHtQbaIor"
		const stringYleFePm = "SqjmIOb6jl4YExy5jxK7jCuQcjUSiovGvEd59JFH2V8k6mfKGcres3BG7Ebp5Kfu6oBbJlKFaW"
		const uintsdTc5MQ = BigInt("234")
		const AntiBaseProtocolQOkRvfD = await AntiBaseProtocol.new(stringXk66EXm, stringYleFePm, uintsdTc5MQ, {from: accounts[3]});
		const uintPK0kiy = BigInt("526")
		const addresshBWHG5f = accounts[0]
		const addressLiBzkZ = accounts[2]
		const uintDdi0waj = BigInt("1620")
		const addressywLMDSO = accounts[0]
		const addressVjxO0t = accounts[1]
		const uintemEWtz = BigInt("1571")
		const addresslQ76NhD = "0x0000000000000000000000000000000000000001"
		const addressYof4sa = accounts[5]
		const uint7FYM2L = BigInt("610")
		const addressO63UYLm = accounts[0]
		const addressSgYj2NH = "0x0000000000000000000000000000000000000001"
		const boolbZ8SSPV = await AntiBaseProtocolQOkRvfD.transferFrom.call(addressLiBzkZ, addresshBWHG5f, uintPK0kiy, {from: accounts[2]});
		const boolCqEA2B = await AntiBaseProtocolQOkRvfD.approve.call(addressywLMDSO, uintDdi0waj, {from: accounts[1]});
		const uint256W4IGBJn = await AntiBaseProtocolQOkRvfD.balanceOf.call(addressVjxO0t, {from: accounts[0]});
		const boolxCHgzc4 = await AntiBaseProtocolQOkRvfD.transferFrom.call(addressYof4sa, addresslQ76NhD, uintemEWtz, {from: accounts[1]});
		const addressY9i5imM = await AntiBaseProtocolQOkRvfD._approve.call(addressSgYj2NH, addressO63UYLm, uint7FYM2L, {from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcSqk2Ok = await AntiBaseProtocol.new({from: accounts[0]});
		const uintekBkA5q = BigInt("294")
		const addressw33T1Pj = accounts[0]
		const uintKlho8AV = BigInt("513")
		await AntiBaseProtocolcSqk2Ok.requestGas.call({from: accounts[3]});
		const stringHElYpXU = await AntiBaseProtocolcSqk2Ok.symbol.call({from: accounts[4]});
		const uint256TdAQ1H = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uintekBkA5q, {from: accounts[3]});
		const addresskOLmcGT = await AntiBaseProtocolcSqk2Ok.transferOwnership.call(addressw33T1Pj, {from: accounts[4]});
		const uint256Auk7bv = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uintKlho8AV, {from: accounts[1]});

		await expect(AntiBaseProtocolcSqk2Ok.requestGas.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolt4iOtGN = await AntiBaseProtocol.new({from: accounts[4]});
		const uintWFQZUl9 = BigInt("1634")
		const addresspA4ZxYo = accounts[3]
		const addressmfnuoi = accounts[3]
		const stringT8OYvdD = await AntiBaseProtocolt4iOtGN.name.call({from: accounts[5]});
		const uint256HVPKILD = await AntiBaseProtocolt4iOtGN.totalSupply.call({from: accounts[0]});
		const uint256qUirqmh = await AntiBaseProtocolt4iOtGN.burn.call(uintWFQZUl9, {from: accounts[1]});
		const uint8fePJRlt = await AntiBaseProtocolt4iOtGN.decimals.call({from: accounts[4]});
		const uint256NplFAk = await AntiBaseProtocolt4iOtGN.allowance.call(addressmfnuoi, addresspA4ZxYo, {from: accounts[1]});

		assert.equal(stringT8OYvdD, "https://t.me/antibaseprotocol")
		assert.equal(uint256HVPKILD, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolt4iOtGN.burn.call(uintWFQZUl9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolt4iOtGN = await AntiBaseProtocol.new({from: accounts[4]});
		const uintdc14oi1 = BigInt("1549")
		const addressdSnCxgs = accounts[4]
		const uintkRe8lt5 = BigInt("1634")
		const uintU4DKxO = BigInt("1946")
		const addressdz6ovxE = accounts[3]
		const addresslYxyS5q = accounts[3]
		const stringT8OYvdD = await AntiBaseProtocolt4iOtGN.name.call({from: accounts[5]});
		const stringnpVSXUk = await AntiBaseProtocolt4iOtGN.name.call({from: accounts[1]});
		const uint256HVPKILD = await AntiBaseProtocolt4iOtGN.totalSupply.call({from: accounts[0]});
		const boolbtKu5RU = await AntiBaseProtocolt4iOtGN.approve.call(addressdSnCxgs, uintdc14oi1, {from: accounts[2]});
		const uint256qUirqmh = await AntiBaseProtocolt4iOtGN.burn.call(uintkRe8lt5, {from: accounts[1]});
		const uint8fePJRlt = await AntiBaseProtocolt4iOtGN.decimals.call({from: accounts[4]});
		const uint256pSJJKRH = await AntiBaseProtocolt4iOtGN.burn.call(uintU4DKxO, {from: accounts[2]});
		const uint256NplFAk = await AntiBaseProtocolt4iOtGN.allowance.call(addresslYxyS5q, addressdz6ovxE, {from: accounts[1]});

		assert.equal(boolbtKu5RU, true)
		assert.equal(stringT8OYvdD, "https://t.me/antibaseprotocol")
		assert.equal(stringnpVSXUk, "https://t.me/antibaseprotocol")
		assert.equal(uint256HVPKILD, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolt4iOtGN.burn.call(uintkRe8lt5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcSqk2Ok = await AntiBaseProtocol.new({from: accounts[0]});
		const uintaSVOcfQ = BigInt("294")
		const uintL4Y8xwD = BigInt("227")
		const addressOPQEftb = accounts[2]
		const addressijIB0R4 = "0x0000000000000000000000000000000000000001"
		const addressOG9oOkV = accounts[0]
		const uintaHaq83u = BigInt("513")
		const stringHElYpXU = await AntiBaseProtocolcSqk2Ok.symbol.call({from: accounts[4]});
		const uint256TdAQ1H = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uintaSVOcfQ, {from: accounts[3]});
		const addressi3GJFDK = await AntiBaseProtocolcSqk2Ok._approve.call(addressijIB0R4, addressOPQEftb, uintL4Y8xwD, {from: accounts[0]});
		const addressHPgdwae = await AntiBaseProtocolcSqk2Ok.owner.call({from: accounts[3]});
		const addresskOLmcGT = await AntiBaseProtocolcSqk2Ok.transferOwnership.call(addressOG9oOkV, {from: accounts[4]});
		const uint256Auk7bv = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uintaHaq83u, {from: accounts[1]});

		assert.equal(stringHElYpXU, "ABASE")
		assert.equal(uint256TdAQ1H, BigInt("15"))
		await expect(AntiBaseProtocolcSqk2Ok._approve.call(addressijIB0R4, addressOPQEftb, uintL4Y8xwD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEZRB30b = await AntiBaseProtocol.new({from: accounts[2]});
		const uintC4j6nn4 = BigInt("746")
		const addressbhuyI5 = accounts[2]
		const uintEPO3oHm = BigInt("1607")
		const addressdC2VSWP = accounts[1]
		const boolTYNIWaz = await AntiBaseProtocolEZRB30b.isOwner.call({from: accounts[3]});
		const boolXYWbow = await AntiBaseProtocolEZRB30b.increaseAllowance.call(addressbhuyI5, uintC4j6nn4, {from: accounts[1]});
		const addressOKE8Ql = await AntiBaseProtocolEZRB30b._burn.call(addressdC2VSWP, uintEPO3oHm, {from: accounts[3]});
		const stringEU107uD = await AntiBaseProtocolEZRB30b.symbol.call({from: accounts[2]});

		assert.equal(boolTYNIWaz, false)
		assert.equal(boolXYWbow, true)
		await expect(AntiBaseProtocolEZRB30b._burn.call(addressdC2VSWP, uintEPO3oHm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDEuBCiD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintdvVofL = BigInt("2023")
		const addressVnPwYI6 = accounts[2]
		await AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]});
		const boollRRadH = await AntiBaseProtocolDEuBCiD.transfer.call(addressVnPwYI6, uintdvVofL, {from: accounts[2]});
		const stringHeYNwPy = await AntiBaseProtocolDEuBCiD.symbol.call({from: accounts[1]});

		await expect(AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcSqk2Ok = await AntiBaseProtocol.new({from: accounts[0]});
		const uintaM4WgDn = BigInt("1291")
		const addressz5iqObm = accounts[3]
		const uintEMctPNL = BigInt("294")
		const uintBeUkwiw = BigInt("227")
		const addressUVOCxpA = accounts[2]
		const addressOovGTbm = "0x0000000000000000000000000000000000000001"
		const addressJ2z0TVY = accounts[0]
		const uinth6uQ8sC = BigInt("513")
		const stringHElYpXU = await AntiBaseProtocolcSqk2Ok.symbol.call({from: accounts[4]});
		const boola0J0tsD = await AntiBaseProtocolcSqk2Ok.decreaseAllowance.call(addressz5iqObm, uintaM4WgDn, {from: accounts[1]});
		const uint256TdAQ1H = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uintEMctPNL, {from: accounts[3]});
		const addressi3GJFDK = await AntiBaseProtocolcSqk2Ok._approve.call(addressOovGTbm, addressUVOCxpA, uintBeUkwiw, {from: accounts[0]});
		const addressHPgdwae = await AntiBaseProtocolcSqk2Ok.owner.call({from: accounts[3]});
		const addresskOLmcGT = await AntiBaseProtocolcSqk2Ok.transferOwnership.call(addressJ2z0TVY, {from: accounts[4]});
		await AntiBaseProtocolcSqk2Ok.onlyOwner.call({from: accounts[3]});
		const uint256Auk7bv = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uinth6uQ8sC, {from: accounts[1]});

		assert.equal(stringHElYpXU, "ABASE")
		await expect(AntiBaseProtocolcSqk2Ok.decreaseAllowance.call(addressz5iqObm, uintaM4WgDn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcSqk2Ok = await AntiBaseProtocol.new({from: accounts[0]});
		const uintEnxlnTP = BigInt("294")
		const uintB6XhrZJ = BigInt("500")
		const stringHElYpXU = await AntiBaseProtocolcSqk2Ok.symbol.call({from: accounts[4]});
		const uint256TdAQ1H = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uintEnxlnTP, {from: accounts[3]});
		const addressHPgdwae = await AntiBaseProtocolcSqk2Ok.owner.call({from: accounts[3]});
		const stringVaf6OJo = await AntiBaseProtocolcSqk2Ok.symbol.call({from: accounts[3]});
		const uint256Auk7bv = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uintB6XhrZJ, {from: accounts[1]});

		assert.equal(addressHPgdwae, 0xCFf2b9663b93F819794Cbf4d01d48222057Ac095)
		assert.equal(stringHElYpXU, "ABASE")
		assert.equal(stringVaf6OJo, "ABASE")
		assert.equal(uint256Auk7bv, BigInt("25"))
		assert.equal(uint256TdAQ1H, BigInt("15"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDEuBCiD = await AntiBaseProtocol.new({from: accounts[4]});
		const uinthOx5uuA = BigInt("1489")
		const addressa2Hf0vZ = accounts[3]
		const uintnWecI4G = BigInt("2023")
		const addresstqmHlI = accounts[2]
		const uintG8y6wnL = BigInt("1761")
		const addressMMcUyNK = accounts[2]
		await AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]});
		const boolZ1nhdde = await AntiBaseProtocolDEuBCiD.transfer.call(addressa2Hf0vZ, uinthOx5uuA, {from: accounts[4]});
		const boollRRadH = await AntiBaseProtocolDEuBCiD.transfer.call(addresstqmHlI, uintnWecI4G, {from: accounts[2]});
		const stringHeYNwPy = await AntiBaseProtocolDEuBCiD.symbol.call({from: accounts[1]});
		const boollkGrKxz = await AntiBaseProtocolDEuBCiD.approve.call(addressMMcUyNK, uintG8y6wnL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDEuBCiD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintFqjDDc8 = BigInt("838")
		const addresscIN6m8V = accounts[0]
		const uintz7AzE9q = BigInt("104")
		const addresshsI5xu = accounts[2]
		const uintUSBLEMA = BigInt("2023")
		const addresslcL1OXi = accounts[2]
		await AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]});
		const addresspMiS3PH = await AntiBaseProtocolDEuBCiD.burnFrom.call(addresscIN6m8V, uintFqjDDc8, {from: "0x0000000000000000000000000000000000000001"});
		const boolxv4g07 = await AntiBaseProtocolDEuBCiD.increaseAllowance.call(addresshsI5xu, uintz7AzE9q, {from: accounts[1]});
		const boollRRadH = await AntiBaseProtocolDEuBCiD.transfer.call(addresslcL1OXi, uintUSBLEMA, {from: accounts[2]});
		const stringHeYNwPy = await AntiBaseProtocolDEuBCiD.symbol.call({from: accounts[1]});

		await expect(AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolHHRgfre = await AntiBaseProtocol.new({from: accounts[1]});
		const uintHcKEXzp = BigInt("88")
		const addressOLBxRVn = accounts[5]
		const uintN3FQvVp = BigInt("1371")
		const uintTmDnhMJ = BigInt("1275")
		const addressTwiqrZu = accounts[0]
		const addressoaFXevJ = accounts[4]
		const boolUNovGLm = await AntiBaseProtocolHHRgfre.increaseAllowance.call(addressOLBxRVn, uintHcKEXzp, {from: accounts[3]});
		const uint256HwoFEQn = await AntiBaseProtocolHHRgfre.findBurnFee.call(uintN3FQvVp, {from: accounts[3]});
		const boolJDuRpU8 = await AntiBaseProtocolHHRgfre.transferFrom.call(addressoaFXevJ, addressTwiqrZu, uintTmDnhMJ, {from: accounts[4]});

		assert.equal(boolUNovGLm, true)
		assert.equal(uint256HwoFEQn, BigInt("210"))
		await expect(AntiBaseProtocolHHRgfre.transferFrom.call(addressoaFXevJ, addressTwiqrZu, uintTmDnhMJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDEuBCiD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintED2CyEN = BigInt("964")
		const addressUonwA6j = accounts[4]
		const uintd2KmRUr = BigInt("1487")
		const addressPTK5DJ = accounts[3]
		const addresspajRMB = accounts[4]
		const uintD2fiqBG = BigInt("2023")
		const addressrnEMS3h = accounts[2]
		await AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]});
		const addressPbHsQOs = await AntiBaseProtocolDEuBCiD.burnFrom.call(addressUonwA6j, uintED2CyEN, {from: accounts[0]});
		const boolZ1nhdde = await AntiBaseProtocolDEuBCiD.transfer.call(addressPTK5DJ, uintd2KmRUr, {from: accounts[4]});
		const addressncZWGj = await AntiBaseProtocolDEuBCiD._transferOwnership.call(addresspajRMB, {from: accounts[1]});
		const boollRRadH = await AntiBaseProtocolDEuBCiD.transfer.call(addressrnEMS3h, uintD2fiqBG, {from: accounts[2]});
		const stringHeYNwPy = await AntiBaseProtocolDEuBCiD.symbol.call({from: accounts[1]});

		await expect(AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcSqk2Ok = await AntiBaseProtocol.new({from: accounts[0]});
		const uintUEAh5m = BigInt("1")
		const uintCjOLFu = BigInt("294")
		const addressrTLLw7 = accounts[1]
		const uintq9hnrko = BigInt("1002")
		const addressh2n8Mg4 = accounts[3]
		const uintDg1A8PT = BigInt("227")
		const addressP7q1T5N = accounts[2]
		const addressg5mlT0j = "0x0000000000000000000000000000000000000001"
		const addresskmS2MK7 = accounts[0]
		const addressjGDaTg6 = "0x0000000000000000000000000000000000000001"
		const uintiA40j0 = BigInt("1602")
		const uintIcYMbFV = BigInt("1224")
		const addressulw6sWx = accounts[2]
		const addressPTEVOro = accounts[0]
		const stringHElYpXU = await AntiBaseProtocolcSqk2Ok.symbol.call({from: accounts[4]});
		const stringJ6QAyu8 = await AntiBaseProtocolcSqk2Ok.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ukBuMbT = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uintUEAh5m, {from: accounts[1]});
		const uint256TdAQ1H = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uintCjOLFu, {from: accounts[3]});
		const addressHvFuwn = await AntiBaseProtocolcSqk2Ok.transferOwnership.call(addressrTLLw7, {from: accounts[4]});
		const addressGfI7R0P = await AntiBaseProtocolcSqk2Ok._burn.call(addressh2n8Mg4, uintq9hnrko, {from: accounts[2]});
		const addressi3GJFDK = await AntiBaseProtocolcSqk2Ok._approve.call(addressg5mlT0j, addressP7q1T5N, uintDg1A8PT, {from: accounts[0]});
		const uint256yomQDCn = await AntiBaseProtocolcSqk2Ok.allowance.call(addressjGDaTg6, addresskmS2MK7, {from: accounts[3]});
		const uint256KvxJxTV = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uintiA40j0, {from: accounts[1]});
		const addressMsuXhNI = await AntiBaseProtocolcSqk2Ok.owner.call({from: accounts[4]});
		const uint8UUHvAnc = await AntiBaseProtocolcSqk2Ok.decimals.call({from: accounts[2]});
		const addressHPgdwae = await AntiBaseProtocolcSqk2Ok.owner.call({from: accounts[3]});
		const boold4XnVhu = await AntiBaseProtocolcSqk2Ok.approve.call(addressulw6sWx, uintIcYMbFV, {from: accounts[2]});
		const addresskOLmcGT = await AntiBaseProtocolcSqk2Ok.transferOwnership.call(addressPTEVOro, {from: accounts[4]});

		assert.equal(stringHElYpXU, "ABASE")
		assert.equal(stringJ6QAyu8, "https://t.me/antibaseprotocol")
		assert.equal(uint256TdAQ1H, BigInt("15"))
		assert.equal(uint256ukBuMbT, BigInt("5"))
		await expect(AntiBaseProtocolcSqk2Ok.transferOwnership.call(addressrTLLw7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcSqk2Ok = await AntiBaseProtocol.new({from: accounts[0]});
		const uint69Oapz = BigInt("0")
		const uintdU75bqb = BigInt("294")
		const uintOWAuJig = BigInt("227")
		const addressgjNbJeL = accounts[2]
		const addressxbDPuwr = "0x0000000000000000000000000000000000000001"
		const uintURp9tek = BigInt("1602")
		const addressNFNSXXd = accounts[0]
		const stringHElYpXU = await AntiBaseProtocolcSqk2Ok.symbol.call({from: accounts[4]});
		const uint256ukBuMbT = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uint69Oapz, {from: accounts[1]});
		const uint256TdAQ1H = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uintdU75bqb, {from: accounts[3]});
		const addressi3GJFDK = await AntiBaseProtocolcSqk2Ok._approve.call(addressxbDPuwr, addressgjNbJeL, uintOWAuJig, {from: accounts[0]});
		const uint256KvxJxTV = await AntiBaseProtocolcSqk2Ok.findRewardFee.call(uintURp9tek, {from: accounts[1]});
		const addressHPgdwae = await AntiBaseProtocolcSqk2Ok.owner.call({from: accounts[3]});
		const addresskOLmcGT = await AntiBaseProtocolcSqk2Ok.transferOwnership.call(addressNFNSXXd, {from: accounts[4]});

		assert.equal(stringHElYpXU, "ABASE")
		assert.equal(uint256TdAQ1H, BigInt("15"))
		assert.equal(uint256ukBuMbT, BigInt("0"))
		await expect(AntiBaseProtocolcSqk2Ok._approve.call(addressxbDPuwr, addressgjNbJeL, uintOWAuJig, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDEuBCiD = await AntiBaseProtocol.new({from: accounts[4]});
		const uinthneliI2 = BigInt("1489")
		const address3PBUkQ = accounts[4]
		const addresshksrQ7 = accounts[5]
		const uintVo29Fk1 = BigInt("1761")
		const addresspK63wFb = accounts[2]
		await AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]});
		const boolZ1nhdde = await AntiBaseProtocolDEuBCiD.transfer.call(address3PBUkQ, uinthneliI2, {from: accounts[4]});
		const stringHeYNwPy = await AntiBaseProtocolDEuBCiD.symbol.call({from: accounts[1]});
		const uint256oc1qT5D = await AntiBaseProtocolDEuBCiD.balanceOf.call(addresshksrQ7, {from: accounts[2]});
		const boollkGrKxz = await AntiBaseProtocolDEuBCiD.approve.call(addresspK63wFb, uintVo29Fk1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolsXWiuTn = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintc5HlMw = BigInt("1383")
		const addressUBEZQf2 = accounts[2]
		const uinteRmFO1 = BigInt("1034")
		const addressWA2v0hQ = accounts[3]
		const addressl81NVY = accounts[1]
		const uintY1JBy7N = BigInt("1258")
		const addressdDsd6Hz = accounts[5]
		const uintLGtPxFt = BigInt("1374")
		const addressqpRGmz = accounts[5]
		const addressU89Ssat = await AntiBaseProtocolsXWiuTn.owner.call({from: accounts[4]});
		const addressAjcFRwe = await AntiBaseProtocolsXWiuTn._mint.call(addressUBEZQf2, uintc5HlMw, {from: accounts[2]});
		const addressmvl7b4l = await AntiBaseProtocolsXWiuTn._approve.call(addressl81NVY, addressWA2v0hQ, uinteRmFO1, {from: accounts[2]});
		const addresseXwJ4Xo = await AntiBaseProtocolsXWiuTn._burn.call(addressdDsd6Hz, uintY1JBy7N, {from: "0x0000000000000000000000000000000000000001"});
		const addressLEfzApk = await AntiBaseProtocolsXWiuTn.burnFrom.call(addressqpRGmz, uintLGtPxFt, {from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDEuBCiD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintaB339to = BigInt("1489")
		const addressMrZM5mM = accounts[4]
		const uintOlpQnH9 = BigInt("341")
		const addressSvmes7h = accounts[4]
		await AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]});
		const boolZ1nhdde = await AntiBaseProtocolDEuBCiD.transfer.call(addressMrZM5mM, uintaB339to, {from: accounts[4]});
		const booldZbsXWr = await AntiBaseProtocolDEuBCiD.increaseAllowance.call(addressSvmes7h, uintOlpQnH9, {from: accounts[2]});
		const stringHeYNwPy = await AntiBaseProtocolDEuBCiD.symbol.call({from: accounts[1]});
		const uint8oK6kFwh = await AntiBaseProtocolDEuBCiD.decimals.call({from: accounts[1]});

		await expect(AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDEuBCiD = await AntiBaseProtocol.new({from: accounts[4]});
		const addressiB6rMAw = accounts[0]
		const uinteWbSZ7 = BigInt("1489")
		const addressvz2XSyY = accounts[4]
		const uintedUnVGO = BigInt("2023")
		const addressLh1jcXJ = accounts[2]
		const uintG4VkaTa = BigInt("1624")
		const addressgnfEUV = accounts[5]
		const uintZiFqbJK = BigInt("1761")
		const addressNf4cO8u = accounts[2]
		await AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]});
		const addressa6XYi4 = await AntiBaseProtocolDEuBCiD.transferOwnership.call(addressiB6rMAw, {from: accounts[4]});
		const boolZ1nhdde = await AntiBaseProtocolDEuBCiD.transfer.call(addressvz2XSyY, uinteWbSZ7, {from: accounts[4]});
		const boollRRadH = await AntiBaseProtocolDEuBCiD.transfer.call(addressLh1jcXJ, uintedUnVGO, {from: accounts[2]});
		const uint8I6WEuP = await AntiBaseProtocolDEuBCiD.decimals.call({from: accounts[1]});
		const uint256wJyfMF = await AntiBaseProtocolDEuBCiD.findBurnFee.call(uintG4VkaTa, {from: accounts[0]});
		const stringHeYNwPy = await AntiBaseProtocolDEuBCiD.symbol.call({from: accounts[1]});
		const uint256oc1qT5D = await AntiBaseProtocolDEuBCiD.balanceOf.call(addressgnfEUV, {from: accounts[2]});
		const boollkGrKxz = await AntiBaseProtocolDEuBCiD.approve.call(addressNf4cO8u, uintZiFqbJK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDEuBCiD = await AntiBaseProtocol.new({from: accounts[4]});
		const uintctwmB4j = BigInt("1489")
		const addressDFsW5M = accounts[3]
		const uintrhxpVN = BigInt("609")
		const addressoL95RY2 = accounts[4]
		const addressK9RxWdi = accounts[4]
		await AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]});
		const boolZ1nhdde = await AntiBaseProtocolDEuBCiD.transfer.call(addressDFsW5M, uintctwmB4j, {from: accounts[4]});
		const boolKWl7Saq = await AntiBaseProtocolDEuBCiD.transferFrom.call(addressK9RxWdi, addressoL95RY2, uintrhxpVN, {from: accounts[0]});
		const stringHeYNwPy = await AntiBaseProtocolDEuBCiD.symbol.call({from: accounts[1]});

		await expect(AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDEuBCiD = await AntiBaseProtocol.new({from: accounts[4]});
		const addressTlR3W3 = "0x0000000000000000000000000000000000000001"
		const addressrzvyFBh = "0x0000000000000000000000000000000000000001"
		const uintdjwTgk1 = BigInt("1487")
		const addressYgsHqwU = accounts[3]
		const addressY1cxp9d = accounts[5]
		const uintiW3aoZ3 = BigInt("2023")
		const addressdGxiS1 = accounts[2]
		const uintUee0zH0 = BigInt("1843")
		const uintXtVhHHy = BigInt("1761")
		const addressMhjqLAW = accounts[2]
		const uint256uXwedz3 = await AntiBaseProtocolDEuBCiD.allowance.call(addressrzvyFBh, addressTlR3W3, {from: accounts[2]});
		await AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]});
		const boolZ1nhdde = await AntiBaseProtocolDEuBCiD.transfer.call(addressYgsHqwU, uintdjwTgk1, {from: accounts[4]});
		const addressncZWGj = await AntiBaseProtocolDEuBCiD._transferOwnership.call(addressY1cxp9d, {from: accounts[1]});
		const boollRRadH = await AntiBaseProtocolDEuBCiD.transfer.call(addressdGxiS1, uintiW3aoZ3, {from: accounts[2]});
		const stringHeYNwPy = await AntiBaseProtocolDEuBCiD.symbol.call({from: accounts[1]});
		const uint256xcvip3q = await AntiBaseProtocolDEuBCiD.burn.call(uintUee0zH0, {from: accounts[1]});
		const boollkGrKxz = await AntiBaseProtocolDEuBCiD.approve.call(addressMhjqLAW, uintXtVhHHy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256uXwedz3, BigInt("0"))
		await expect(AntiBaseProtocolDEuBCiD.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})