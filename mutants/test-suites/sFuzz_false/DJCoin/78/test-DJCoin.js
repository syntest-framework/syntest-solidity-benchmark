const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinrytVDBw = await DJCoin.new({from: accounts[3]});
		const uintNKgLcxZ = BigInt("254")
		const addresseOZB2VR = accounts[3]
		const uintlEEg2T2 = BigInt("900")
		const addresskBZAflg = accounts[1]
		const uintWEWU63u = BigInt("489")
		const uintjVojGq = BigInt("1705")
		const addressJNrUdJ = accounts[4]
//		const boolXzDMx7I = await DJCoinrytVDBw.transfer.call(addresseOZB2VR, uintNKgLcxZ, {from: accounts[2]});
//		const boolF3gvg64 = await DJCoinrytVDBw.transfer.call(addresskBZAflg, uintlEEg2T2, {from: accounts[2]});
//		const uint256wy072IA = await DJCoinrytVDBw.burn.call(uintjVojGq, uintWEWU63u, {from: accounts[3]});
//		const uint256O1RyriO = await DJCoinrytVDBw.totalSupply.call({from: accounts[0]});
//		const uint256KzJTGUf = await DJCoinrytVDBw.balanceOf.call(addressJNrUdJ, {from: accounts[1]});

		await expect(DJCoinrytVDBw.transfer.call(addresseOZB2VR, uintNKgLcxZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinFxkW8Hx = await DJCoin.new({from: accounts[0]});
		const uintvoNUl3N = BigInt("1505")
		const addressmqbbdvu = accounts[1]
		const uintN4gTwpd = BigInt("116")
		const addressaYHGOd = accounts[2]
		const addressaYR7hVC = accounts[5]
		const addresskUS5XUC = accounts[5]
		const addressYGEVFVX = accounts[4]
		const boolKfmscg2 = await DJCoinFxkW8Hx.decreaseAllowance.call(addressmqbbdvu, uintvoNUl3N, {from: accounts[4]});
		const addressvDXQ9dh = await DJCoinFxkW8Hx.owner.call({from: accounts[0]});
//		const boolwctUzFP = await DJCoinFxkW8Hx.transferFrom.call(addressaYR7hVC, addressaYHGOd, uintN4gTwpd, {from: accounts[1]});
//		const uint256k2d4yV = await DJCoinFxkW8Hx.balanceOf.call(addresskUS5XUC, {from: accounts[1]});
//		const addressWihkGe = await DJCoinFxkW8Hx.transferOwnership.call(addressYGEVFVX, {from: accounts[4]});

		assert.equal(addressvDXQ9dh, 0x7338DB7B40e9E64dA10A951942115470ADAad571)
		assert.equal(boolKfmscg2, true)
		await expect(DJCoinFxkW8Hx.transferFrom.call(addressaYR7hVC, addressaYHGOd, uintN4gTwpd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinKYl6y4K = await DJCoin.new({from: accounts[0]});
		const uintk0YuVos = BigInt("98")
		const addressTCTQvfR = accounts[3]
		const uintUYJLmSd = BigInt("1571")
		const addressarEU7z = accounts[0]
		const uintPQKElL = BigInt("793")
		const addressQgWnVaL = "0x0000000000000000000000000000000000000001"
		const uintpFlU2sB = BigInt("365")
		const addressH5gdaBp = accounts[3]
		const boolQc3uKEx = await DJCoinKYl6y4K.approve.call(addressTCTQvfR, uintk0YuVos, {from: accounts[3]});
		const boolSuzaiP = await DJCoinKYl6y4K.changetokensPerBlock.call(uintUYJLmSd, {from: accounts[3]});
//		const addresss3aBBA3 = await DJCoinKYl6y4K.validRecipient.call(addressarEU7z, {from: accounts[2]});
//		const boolbophuba = await DJCoinKYl6y4K.approve.call(addressQgWnVaL, uintPQKElL, {from: accounts[3]});
//		const boolV8yVwyU = await DJCoinKYl6y4K.decreaseAllowance.call(addressH5gdaBp, uintpFlU2sB, {from: accounts[4]});

		assert.equal(boolQc3uKEx, true)
		assert.equal(boolSuzaiP, true)
		await expect(DJCoinKYl6y4K.validRecipient.call(addressarEU7z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinqUye4NG = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOHW3TlH = accounts[3]
		const addressbOGIe4H = accounts[1]
		const uintjAEvTV = BigInt("1058")
		const addressBao6XDR = accounts[2]
		const addressOlqCi3R = accounts[3]
		const uint256nJz7krM = await DJCoinqUye4NG.allowance.call(addressbOGIe4H, addressOHW3TlH, {from: accounts[2]});
		const address7E5jcU = await DJCoinqUye4NG.owner.call({from: accounts[3]});
		const boolapvv9U2 = await DJCoinqUye4NG.decreaseAllowance.call(addressBao6XDR, uintjAEvTV, {from: accounts[2]});
		const addressnJZbFvM = await DJCoinqUye4NG.validRecipient.call(addressOlqCi3R, {from: accounts[3]});
	});

	it('test for DJCoin', async () => {
		const DJCoinhg7gttB = await DJCoin.new({from: accounts[3]});
		const addressu9fKR1u = accounts[5]
		const uintc3CaXI = BigInt("1525")
		const addressidDAiJJ = accounts[0]
		const uint256RlRTqgV = await DJCoinhg7gttB.balanceOf.call(addressu9fKR1u, {from: accounts[0]});
//		const boolGotC8ih = await DJCoinhg7gttB.transfer.call(addressidDAiJJ, uintc3CaXI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256RlRTqgV, BigInt("0"))
		await expect(DJCoinhg7gttB.transfer.call(addressidDAiJJ, uintc3CaXI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinT2uUHAG = await DJCoin.new({from: accounts[3]});
		const addressF5168vc = accounts[0]
		const uintbiY8sxn = BigInt("1983")
		const uintVyKu1f = BigInt("168")
		const addressUlcKt3j = accounts[3]
		const uintMV0XXZ8 = BigInt("1898")
		const uint256EK7SSFM = await DJCoinT2uUHAG.totalSupply.call({from: accounts[3]});
//		const addressqCAhZjN = await DJCoinT2uUHAG.validRecipient.call(addressF5168vc, {from: accounts[1]});
//		const boolPZebRXm = await DJCoinT2uUHAG.changetokensPerBlock.call(uintbiY8sxn, {from: accounts[2]});
//		const boolE6af1Zl = await DJCoinT2uUHAG.increaseAllowance.call(addressUlcKt3j, uintVyKu1f, {from: accounts[4]});
//		const boolbYRyPwr = await DJCoinT2uUHAG.changetokensPerBlock.call(uintMV0XXZ8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256EK7SSFM, BigInt("2100000000000"))
		await expect(DJCoinT2uUHAG.validRecipient.call(addressF5168vc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoin1nQBZB = await DJCoin.new({from: accounts[1]});
		const uintX18Ytb = BigInt("1399")
		const addressRlf4C4I = accounts[3]
		const uintuX2WhJ7 = BigInt("1147")
		const boolrdjqeAw = await DJCoin1nQBZB.transfer.call(addressRlf4C4I, uintX18Ytb, {from: accounts[1]});
		const booloaO2OW = await DJCoin1nQBZB.changetokensPerBlock.call(uintuX2WhJ7, {from: accounts[0]});

		assert.equal(booloaO2OW, true)
		assert.equal(boolrdjqeAw, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinJRnC2a2 = await DJCoin.new({from: accounts[3]});
		const addressDqmtI0i = accounts[2]
		const uintmVbgYJy = BigInt("1316")
		const uintOUfAbth = BigInt("894")
//		const address8YQpcf = await DJCoinJRnC2a2.transferOwnership.call(addressDqmtI0i, {from: accounts[1]});
//		const uint256XUPJFxt = await DJCoinJRnC2a2.burn.call(uintOUfAbth, uintmVbgYJy, {from: accounts[3]});
//		const uint256uDNC515 = await DJCoinJRnC2a2.totalSupply.call({from: accounts[0]});

		await expect(DJCoinJRnC2a2.transferOwnership.call(addressDqmtI0i, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhg7gttB = await DJCoin.new({from: accounts[3]});
		const addressqziPBA = accounts[3]
		const addresswxsHYhd = accounts[3]
		const addresswQgdyqX = accounts[5]
		const addressXJOOZJ1 = accounts[3]
		const addressFE4ffLl = accounts[4]
		const addressSAmPqkd = accounts[5]
		const uint256aDWebzZ = await DJCoinhg7gttB.allowance.call(addresswxsHYhd, addressqziPBA, {from: accounts[0]});
		const uint256RlRTqgV = await DJCoinhg7gttB.balanceOf.call(addresswQgdyqX, {from: accounts[0]});
		const uint2565wa8wT = await DJCoinhg7gttB.allowance.call(addressFE4ffLl, addressXJOOZJ1, {from: accounts[4]});
//		const addressZcKSJhY = await DJCoinhg7gttB.transferOwnership.call(addressSAmPqkd, {from: accounts[4]});

		assert.equal(uint2565wa8wT, BigInt("0"))
		assert.equal(uint256RlRTqgV, BigInt("0"))
		assert.equal(uint256aDWebzZ, BigInt("0"))
		await expect(DJCoinhg7gttB.transferOwnership.call(addressSAmPqkd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinOF1daMD = await DJCoin.new({from: accounts[0]});
		const uintFPSSrsm = BigInt("1965")
		const addressiAo6NjX = accounts[0]
		const addressrlADLS9 = accounts[0]
		const uintrgF0Ys3 = BigInt("1742")
		const addressFp7AuCi = accounts[3]
		const addressZXJe3TN = accounts[0]
		const boolJDQUeqQ = await DJCoinOF1daMD.decreaseAllowance.call(addressiAo6NjX, uintFPSSrsm, {from: accounts[2]});
		const addressp6Z7U6o = await DJCoinOF1daMD.transferOwnership.call(addressrlADLS9, {from: accounts[0]});
//		await DJCoinOF1daMD.onlyOwner.call({from: accounts[5]});
//		const uint256zvB6M45 = await DJCoinOF1daMD.totalSupply.call({from: accounts[3]});
//		const boolSOUFmb = await DJCoinOF1daMD.transfer.call(addressFp7AuCi, uintrgF0Ys3, {from: accounts[0]});
//		const uint256A3RgVuW = await DJCoinOF1daMD.balanceOf.call(addressZXJe3TN, {from: accounts[2]});

		assert.equal(boolJDQUeqQ, true)
		await expect(DJCoinOF1daMD.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinrytVDBw = await DJCoin.new({from: accounts[3]});
		const addressTBnSohh = accounts[4]
		const uintXOGgHYW = BigInt("489")
		const uintywZTfMg = BigInt("1705")
		const uintP01ivt = BigInt("464")
		const addresskjZeeTd = accounts[4]
		const uint256sNbIRoq = await DJCoinrytVDBw.balanceOf.call(addressTBnSohh, {from: accounts[1]});
		const uint256wy072IA = await DJCoinrytVDBw.burn.call(uintywZTfMg, uintXOGgHYW, {from: accounts[3]});
		const uint256O1RyriO = await DJCoinrytVDBw.totalSupply.call({from: accounts[0]});
		const booljjiB2Oz = await DJCoinrytVDBw.decreaseAllowance.call(addresskjZeeTd, uintP01ivt, {from: accounts[3]});
//		await DJCoinrytVDBw.onlyOwner.call({from: accounts[4]});

		assert.equal(booljjiB2Oz, true)
		assert.equal(uint256O1RyriO, BigInt("2100000000000"))
		assert.equal(uint256sNbIRoq, BigInt("0"))
		assert.equal(uint256wy072IA, BigInt("1997310000000"))
		await expect(DJCoinrytVDBw.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhg7gttB = await DJCoin.new({from: accounts[3]});
		const addressn2UWxic = accounts[6]
//		await DJCoinhg7gttB.renounceOwnership.call({from: accounts[3]});
//		const uint256RlRTqgV = await DJCoinhg7gttB.balanceOf.call(addressn2UWxic, {from: accounts[0]});

		await expect(DJCoinhg7gttB.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinrytVDBw = await DJCoin.new({from: accounts[3]});
		const addressj4o0lDU = accounts[4]
		const uintv00LICA = BigInt("1420")
		const addressGsUxTNj = accounts[4]
		const uintGz5WBBZ = BigInt("194")
		const addressgeRkqAG = accounts[4]
		const uintVq9iuuq = BigInt("1704")
		const uintz3ufxDb = BigInt("163")
		const uintCsXX0U = BigInt("489")
		const uintkB02311 = BigInt("1705")
		const uint256sNbIRoq = await DJCoinrytVDBw.balanceOf.call(addressj4o0lDU, {from: accounts[1]});
		const boolZkC5WzK = await DJCoinrytVDBw.increaseAllowance.call(addressGsUxTNj, uintv00LICA, {from: accounts[1]});
//		const boolXzDMx7I = await DJCoinrytVDBw.transfer.call(addressgeRkqAG, uintGz5WBBZ, {from: accounts[2]});
//		const uint256SNMdAaG = await DJCoinrytVDBw.burn.call(uintz3ufxDb, uintVq9iuuq, {from: accounts[1]});
//		const uint256wy072IA = await DJCoinrytVDBw.burn.call(uintkB02311, uintCsXX0U, {from: accounts[3]});
//		const uint256O1RyriO = await DJCoinrytVDBw.totalSupply.call({from: accounts[0]});

		assert.equal(boolZkC5WzK, true)
		assert.equal(uint256sNbIRoq, BigInt("0"))
		await expect(DJCoinrytVDBw.transfer.call(addressgeRkqAG, uintGz5WBBZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinrytVDBw = await DJCoin.new({from: accounts[3]});
		const uinton3yj8A = BigInt("0")
		const addressjWy95Nv = accounts[3]
		const boolXzDMx7I = await DJCoinrytVDBw.transfer.call(addressjWy95Nv, uinton3yj8A, {from: accounts[2]});

		assert.equal(boolXzDMx7I, true)
	});
})