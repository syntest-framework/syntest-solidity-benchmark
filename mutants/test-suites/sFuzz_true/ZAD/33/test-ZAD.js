const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADmASfWi = await ZAD.new({from: accounts[0]});
		const uintIaRy3HP = BigInt("1560")
		const addressSzhw0e = accounts[2]
		const uintjrGucqr = BigInt("628")
		const addressnjiPolV = accounts[2]
		const addresswsHnjTy = accounts[0]
		const uintESEcXRv = BigInt("369")
		const addressFp2V5V = accounts[3]
		const addressEDh0qYJ = accounts[0]
		const boolg4KwSzJ = await ZADmASfWi.approve.call(addressSzhw0e, uintIaRy3HP, {from: accounts[0]});
//		const boolQ6dYVQ = await ZADmASfWi.transferFrom.call(addresswsHnjTy, addressnjiPolV, uintjrGucqr, {from: "0x0000000000000000000000000000000000000001"});
//		const booleBgyfIk = await ZADmASfWi.transferFrom.call(addressEDh0qYJ, addressFp2V5V, uintESEcXRv, {from: accounts[0]});

		assert.equal(boolg4KwSzJ, true)
		await expect(ZADmASfWi.transferFrom.call(addresswsHnjTy, addressnjiPolV, uintjrGucqr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADb8MfQ5Z = await ZAD.new({from: accounts[1]});
		const addressIcRnVT3 = accounts[3]
		const addressjqT5GZP = accounts[3]
		const uint8UdNVAp = await ZADb8MfQ5Z.decimals.call({from: accounts[2]});
		const stringzMvKmhZ = await ZADb8MfQ5Z.symbol.call({from: accounts[3]});
		const uint256C1dzOso = await ZADb8MfQ5Z.allowance.call(addressjqT5GZP, addressIcRnVT3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringzMvKmhZ, "ZAD")
		assert.equal(uint256C1dzOso, BigInt("0"))
		assert.equal(uint8UdNVAp, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADVkDilha = await ZAD.new({from: accounts[2]});
		const uintVmLiWT = BigInt("1373")
		const addresslR2KbHq = accounts[3]
		const uint8Bqsg2K9 = await ZADVkDilha.decimals.call({from: accounts[5]});
		const boolS2Fd9R6 = await ZADVkDilha.increaseAllowance.call(addresslR2KbHq, uintVmLiWT, {from: accounts[2]});

		assert.equal(boolS2Fd9R6, true)
		assert.equal(uint8Bqsg2K9, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADP9ebEIZ = await ZAD.new({from: accounts[2]});
		const addressKm8TVF = accounts[4]
		const addressi7n32Dx = "0x0000000000000000000000000000000000000001"
		const uintwYPocql = BigInt("220")
		const addressT7Vi9xg = accounts[0]
		const uint256KZIOhD = await ZADP9ebEIZ.allowance.call(addressi7n32Dx, addressKm8TVF, {from: accounts[2]});
		const uint256n4rrHzF = await ZADP9ebEIZ.totalSupply.call({from: accounts[1]});
		const stringqruisgI = await ZADP9ebEIZ.symbol.call({from: accounts[4]});
		const uint8DGBTt9d = await ZADP9ebEIZ.decimals.call({from: accounts[1]});
//		const bool1zOVXA = await ZADP9ebEIZ.transfer.call(addressT7Vi9xg, uintwYPocql, {from: accounts[4]});

		assert.equal(stringqruisgI, "ZAD")
		assert.equal(uint256KZIOhD, BigInt("0"))
		assert.equal(uint256n4rrHzF, BigInt("100000000000000000000000000"))
		assert.equal(uint8DGBTt9d, BigInt("18"))
		await expect(ZADP9ebEIZ.transfer.call(addressT7Vi9xg, uintwYPocql, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADmUjIezm = await ZAD.new({from: accounts[5]});
		const uintbsoGn9E = BigInt("1472")
		const addressgbBf5Vh = accounts[4]
		const addressjU91Gno = accounts[3]
		const uintb6TcQlp = BigInt("403")
		const addressUSjZACq = accounts[5]
		const addresskUP8UI5 = accounts[0]
		const addressJdK6DgL = accounts[1]
		const booljlhtJIr = await ZADmUjIezm.approve.call(addressgbBf5Vh, uintbsoGn9E, {from: accounts[4]});
		const uint256owD2R2F = await ZADmUjIezm.balanceOf.call(addressjU91Gno, {from: accounts[4]});
//		const boolq6U0g4I = await ZADmUjIezm.transfer.call(addressUSjZACq, uintb6TcQlp, {from: accounts[1]});
//		const uint256YiH4UWA = await ZADmUjIezm.allowance.call(addressJdK6DgL, addresskUP8UI5, {from: accounts[4]});
//		const uint8KlzmXws = await ZADmUjIezm.decimals.call({from: accounts[2]});

		assert.equal(booljlhtJIr, true)
		assert.equal(uint256owD2R2F, BigInt("0"))
		await expect(ZADmUjIezm.transfer.call(addressUSjZACq, uintb6TcQlp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADbCK1H5L = await ZAD.new({from: accounts[4]});
		const uintYrOoxvc = BigInt("449")
		const addressGbeyjpB = accounts[5]
		const uintVzHpffi = BigInt("823")
		const addresssum0LYj = accounts[3]
		const uintcyplyfz = BigInt("1390")
		const addressFfPUXWZ = accounts[2]
		const boolW6JINkB = await ZADbCK1H5L.approve.call(addressGbeyjpB, uintYrOoxvc, {from: accounts[0]});
		const boolTsUrZsR = await ZADbCK1H5L.approve.call(addresssum0LYj, uintVzHpffi, {from: accounts[1]});
//		const boolAnuCGp5 = await ZADbCK1H5L.decreaseAllowance.call(addressFfPUXWZ, uintcyplyfz, {from: accounts[1]});

		assert.equal(boolTsUrZsR, true)
		assert.equal(boolW6JINkB, true)
		await expect(ZADbCK1H5L.decreaseAllowance.call(addressFfPUXWZ, uintcyplyfz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADbCK1H5L = await ZAD.new({from: accounts[4]});
		const uintzlVrjKa = BigInt("1461")
		const uintONeuDlh = BigInt("449")
		const addressKAiqTMF = accounts[5]
		const uintTIIOWlW = BigInt("823")
		const addressKwcEEWs = accounts[3]
		const uintaJTFYU4 = BigInt("1390")
		const addressfOIJMKP = accounts[2]
//		const uint256tpnsXuP = await ZADbCK1H5L._burn.call(uintzlVrjKa, {from: accounts[4]});
//		const boolW6JINkB = await ZADbCK1H5L.approve.call(addressKAiqTMF, uintONeuDlh, {from: accounts[0]});
//		const uint256uIys8aG = await ZADbCK1H5L.totalSupply.call({from: accounts[2]});
//		const boolTsUrZsR = await ZADbCK1H5L.approve.call(addressKwcEEWs, uintTIIOWlW, {from: accounts[1]});
//		const boolAnuCGp5 = await ZADbCK1H5L.decreaseAllowance.call(addressfOIJMKP, uintaJTFYU4, {from: accounts[1]});

		await expect(ZADbCK1H5L._burn.call(uintzlVrjKa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADVkDilha = await ZAD.new({from: accounts[2]});
		const addressGhbxEM = accounts[0]
		const address2llt4d = accounts[5]
		const uintC2u7nGB = BigInt("1394")
		const addressbRPMI2v = accounts[3]
		const uint256AIc6JCC = await ZADVkDilha.allowance.call(address2llt4d, addressGhbxEM, {from: accounts[4]});
		const uint8Bqsg2K9 = await ZADVkDilha.decimals.call({from: accounts[5]});
		const stringfSi2sh8 = await ZADVkDilha.symbol.call({from: accounts[3]});
		const stringCK4G0x = await ZADVkDilha.name.call({from: accounts[1]});
		const boolS2Fd9R6 = await ZADVkDilha.increaseAllowance.call(addressbRPMI2v, uintC2u7nGB, {from: accounts[2]});

		assert.equal(boolS2Fd9R6, true)
		assert.equal(stringCK4G0x, "Zadkiel")
		assert.equal(stringfSi2sh8, "ZAD")
		assert.equal(uint256AIc6JCC, BigInt("0"))
		assert.equal(uint8Bqsg2K9, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADRUoLH2I = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTt6EllX = BigInt("1385")
		const addressxrmisf8 = accounts[1]
		const addressA6tTwWk = accounts[2]
		const addressHCDtznw = accounts[1]
		const uint8Ldf7thv = await ZADRUoLH2I.decimals.call({from: accounts[0]});
		const uint8utITI0 = await ZADRUoLH2I.decimals.call({from: accounts[3]});
		const boolJW07mnP = await ZADRUoLH2I.transfer.call(addressxrmisf8, uintTt6EllX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256owmEuxE = await ZADRUoLH2I.totalSupply.call({from: accounts[5]});
		const uint256Fn0Fy8i = await ZADRUoLH2I.allowance.call(addressHCDtznw, addressA6tTwWk, {from: accounts[1]});
	});
})