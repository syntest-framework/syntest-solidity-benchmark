const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADWQ2PKTk = await ZAD.new({from: accounts[2]});
		const uintUuK87eZ = BigInt("20")
		const addressuzacn6v = accounts[1]
		const uintp9UZXk = BigInt("522")
		const addressJYo3Qg1 = accounts[4]
		const uint8UtCh7yk = await ZADWQ2PKTk.decimals.call({from: accounts[4]});
		const boolYOYAuRm = await ZADWQ2PKTk.transfer.call(addressuzacn6v, uintUuK87eZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolNEhJvmZ = await ZADWQ2PKTk.transfer.call(addressJYo3Qg1, uintp9UZXk, {from: accounts[2]});

		assert.equal(uint8UtCh7yk, BigInt("18"))
		await expect(ZADWQ2PKTk.transfer.call(addressuzacn6v, uintUuK87eZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADkaUmRSS = await ZAD.new({from: accounts[4]});
		const uinthZaNoxp = BigInt("1804")
		const addressBfgh4Oj = accounts[0]
		const addressz3ml0V = accounts[2]
		const addressPQ317pL = accounts[5]
		const uintxCCav70 = BigInt("342")
		const addressZ5qCuUr = accounts[4]
		const addressBDDD087 = "0x0000000000000000000000000000000000000001"
		const addresst2ghYe1 = accounts[3]
		const addressrHu0VR = "0x0000000000000000000000000000000000000001"
		const addressyfXksSY = accounts[4]
		const boolhgWq2sz = await ZADkaUmRSS.transferFrom.call(addressz3ml0V, addressBfgh4Oj, uinthZaNoxp, {from: accounts[4]});
		const uint256LeHlLb6 = await ZADkaUmRSS.balanceOf.call(addressPQ317pL, {from: accounts[2]});
		const boolJjKbacL = await ZADkaUmRSS.transferFrom.call(addressBDDD087, addressZ5qCuUr, uintxCCav70, {from: accounts[0]});
		const uint256R5ecxN = await ZADkaUmRSS.balanceOf.call(addresst2ghYe1, {from: accounts[1]});
		const uint2561rRe8f = await ZADkaUmRSS.allowance.call(addressyfXksSY, addressrHu0VR, {from: accounts[0]});

		await expect(ZADkaUmRSS.transferFrom.call(addressz3ml0V, addressBfgh4Oj, uinthZaNoxp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADy25A5q = await ZAD.new({from: accounts[3]});
		const uintSAuNfXN = BigInt("1864")
		const uint256UbmnSq = await ZADy25A5q.totalSupply.call({from: accounts[3]});
		const uint256HEqtc6I = await ZADy25A5q.totalSupply.call({from: accounts[4]});
		const uint256O4QtvNu = await ZADy25A5q._burn.call(uintSAuNfXN, {from: accounts[2]});

		assert.equal(uint256HEqtc6I, BigInt("100000000000000000000000000"))
		assert.equal(uint256UbmnSq, BigInt("100000000000000000000000000"))
		await expect(ZADy25A5q._burn.call(uintSAuNfXN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADlcP8F8S = await ZAD.new({from: accounts[3]});
		const uintEC8pSfu = BigInt("744")
		const addressEvm6DSC = accounts[1]
		const addressWh9JzGE = accounts[4]
		const addressldIBrEa = "0x0000000000000000000000000000000000000001"
		const addressuyTrNkm = accounts[4]
		const uintMK2ZLY = BigInt("1522")
		const addressDJvDUYl = "0x0000000000000000000000000000000000000001"
		const boolbXfKR2s = await ZADlcP8F8S.approve.call(addressEvm6DSC, uintEC8pSfu, {from: accounts[2]});
		const uint256KfVN9eV = await ZADlcP8F8S.allowance.call(addressldIBrEa, addressWh9JzGE, {from: accounts[0]});
		const uint8K5oojQx = await ZADlcP8F8S.decimals.call({from: accounts[2]});
		const uint256cuvxC76 = await ZADlcP8F8S.balanceOf.call(addressuyTrNkm, {from: accounts[5]});
		const stringak3Siqe = await ZADlcP8F8S.symbol.call({from: accounts[4]});
		const boolYLD3EzY = await ZADlcP8F8S.transfer.call(addressDJvDUYl, uintMK2ZLY, {from: accounts[3]});

		assert.equal(boolbXfKR2s, true)
		assert.equal(stringak3Siqe, "ZAD")
		assert.equal(uint256KfVN9eV, BigInt("0"))
		assert.equal(uint256cuvxC76, BigInt("0"))
		assert.equal(uint8K5oojQx, BigInt("18"))
		await expect(ZADlcP8F8S.transfer.call(addressDJvDUYl, uintMK2ZLY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADK5iasPM = await ZAD.new({from: accounts[0]});
		const addressjVuCdK = accounts[0]
		const uintnT8H3cT = BigInt("175")
		const addresspbISFvN = accounts[5]
		const uintF6Fl3uS = BigInt("277")
		const addressx2xkjYh = accounts[3]
		const uint256BtEtREU = await ZADK5iasPM.balanceOf.call(addressjVuCdK, {from: accounts[1]});
		const uint8a14qUO = await ZADK5iasPM.decimals.call({from: accounts[1]});
		const boolrwFhaOP = await ZADK5iasPM.approve.call(addresspbISFvN, uintnT8H3cT, {from: accounts[4]});
		const boolfaJDk1e = await ZADK5iasPM.increaseAllowance.call(addressx2xkjYh, uintF6Fl3uS, {from: accounts[1]});
		const uint8YRL7Sfg = await ZADK5iasPM.decimals.call({from: accounts[0]});

		assert.equal(boolfaJDk1e, true)
		assert.equal(boolrwFhaOP, true)
		assert.equal(uint256BtEtREU, BigInt("0"))
		assert.equal(uint8YRL7Sfg, BigInt("18"))
		assert.equal(uint8a14qUO, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADP8fEPpV = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZB4fvyJ = BigInt("1032")
		const addressompubIv = accounts[0]
		const uintk4WlW1r = BigInt("1011")
		const addresskNssw9r = "0x0000000000000000000000000000000000000001"
		const addressn1eWVz9 = accounts[0]
		const addresslkxFYqq = accounts[0]
		const addressE0tdBuB = accounts[3]
		const uint8bfLtThQ = await ZADP8fEPpV.decimals.call({from: accounts[1]});
		const boolhx4y8x = await ZADP8fEPpV.decreaseAllowance.call(addressompubIv, uintZB4fvyJ, {from: accounts[4]});
		const booll1f7Qf = await ZADP8fEPpV.approve.call(addresskNssw9r, uintk4WlW1r, {from: accounts[2]});
		const uint256sfB6ViL = await ZADP8fEPpV.balanceOf.call(addressn1eWVz9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vysOtfu = await ZADP8fEPpV.allowance.call(addressE0tdBuB, addresslkxFYqq, {from: accounts[3]});
	});

	it('test for ZAD', async () => {
		const ZAD3i2VS9 = await ZAD.new({from: accounts[5]});
		const uintS7cEBs8 = BigInt("839")
		const addressevBCP5 = accounts[2]
		const string1GcJyz = await ZAD3i2VS9.symbol.call({from: accounts[3]});
		const stringJNkCY3d = await ZAD3i2VS9.name.call({from: accounts[5]});
		const boolzs9g3Q = await ZAD3i2VS9.decreaseAllowance.call(addressevBCP5, uintS7cEBs8, {from: accounts[2]});

		assert.equal(string1GcJyz, "ZAD")
		assert.equal(stringJNkCY3d, "Zadkiel")
		await expect(ZAD3i2VS9.decreaseAllowance.call(addressevBCP5, uintS7cEBs8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})