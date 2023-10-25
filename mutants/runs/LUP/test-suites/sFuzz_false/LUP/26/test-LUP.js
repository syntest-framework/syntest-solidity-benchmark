const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringedBljs = "2RKuU2MnZknsTwu5RjhUNEXgLQK6Lh5v9Mi1KQYUV1WSzlWl5VLoWd"
		const stringW8Y2aT0 = "aTACMmF3F1eo7u6ycqKYYQnBQrdQWRujWMCgr1Bjd3xgwziQFhkbaOOYf"
		const uintgz6zpeh = BigInt("110")
		const LUPXrDd5xV = await LUP.new(stringedBljs, stringW8Y2aT0, uintgz6zpeh, {from: accounts[1]});
		const addressh7bahNs = accounts[2]
		const uintk33mquk = BigInt("1478")
		const addressJJGc3cg = "0x0000000000000000000000000000000000000001"
		const uintTb0DL6W = BigInt("1480")
		const uintk5WvAG = BigInt("475")
		const addressT9gPV3Y = accounts[4]
		const addressOjoRJQ6 = await LUPXrDd5xV.upgradeTo.call(addressh7bahNs, {from: accounts[3]});
		const boolkn649w3 = await LUPXrDd5xV.unlock.call(addressJJGc3cg, uintk33mquk, {from: accounts[0]});
		const boolrDntzPc = await LUPXrDd5xV.lock.call(addressT9gPV3Y, uintk5WvAG, uintTb0DL6W, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPLlshV9y = await LUP.new({from: accounts[3]});
		const uintQ9y8C8N = BigInt("1757")
		const uintESkAQux = BigInt("1432")
		const addressJ9qAXmL = accounts[1]
		const boolXVyQQ42 = false
		const addressajQtSWN = accounts[1]
		const uintEAbImoZ = BigInt("2016")
		const addressnEhqb8u = accounts[3]
		const boolWL2wkk4 = await LUPLlshV9y.transferWithLock.call(addressJ9qAXmL, uintESkAQux, uintQ9y8C8N, {from: accounts[0]});
		const boolApaftEu = await LUPLlshV9y.freezeAccount.call(addressajQtSWN, boolXVyQQ42, {from: accounts[2]});
		const stringFkZmnTn = await LUPLlshV9y.symbol.call({from: accounts[5]});
		const booltnPwrJU = await LUPLlshV9y.unlock.call(addressnEhqb8u, uintEAbImoZ, {from: accounts[1]});

		await expect(LUPLlshV9y.transferWithLock.call(addressJ9qAXmL, uintESkAQux, uintQ9y8C8N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPLeV4A3q = await LUP.new({from: accounts[3]});
		const addresssAEv1B = accounts[3]
		const uintiRBaTC = BigInt("306")
		const addresshbvLqHE = accounts[2]
		const boolQBTGVYv = true
		const addressFeK98SY = accounts[5]
		const addresswTGAFU = await LUPLeV4A3q.notFrozen.call(addresssAEv1B, {from: accounts[5]});
		const uint8R1oX3bW = await LUPLeV4A3q.decimals.call({from: accounts[3]});
		const boolQBJROs = await LUPLeV4A3q.transfer.call(addresshbvLqHE, uintiRBaTC, {from: accounts[3]});
		const boolzuhx0QM = await LUPLeV4A3q.freezeAccount.call(addressFeK98SY, boolQBTGVYv, {from: accounts[2]});

		await expect(LUPLeV4A3q.notFrozen.call(addresssAEv1B, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPHl4lloc = await LUP.new({from: accounts[2]});
		const stringAD2kJS5 = await LUPHl4lloc.symbol.call({from: accounts[2]});
		const stringQ5ClQqA = await LUPHl4lloc.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringS3CET23 = await LUPHl4lloc.name.call({from: accounts[0]});

		assert.equal(stringAD2kJS5, "LUP")
		assert.equal(stringQ5ClQqA, "LUP")
		assert.equal(stringS3CET23, "LINKUP Token")
	});

	it('test for LUP', async () => {
		const LUPhgOBSl0 = await LUP.new({from: accounts[0]});
		const uintcTxbrq = BigInt("1160")
		const addresshmTpNBh = accounts[3]
		const boolJPOKP84 = true
		const addressfBZUs42 = accounts[2]
		const addresssJRJktT = "0x0000000000000000000000000000000000000001"
		const uintvXNzSHE = BigInt("125")
		const uintdLrXDp = BigInt("992")
		const addressQK4fwMf = accounts[4]
		const boolpP25gy4 = await LUPhgOBSl0.transfer.call(addresshmTpNBh, uintcTxbrq, {from: accounts[1]});
		const boolcbxnjy7 = await LUPhgOBSl0.freezeAccount.call(addressfBZUs42, boolJPOKP84, {from: accounts[5]});
		const addressrCAAuqN = await LUPhgOBSl0.notFrozen.call(addresssJRJktT, {from: accounts[0]});
		const boolvQ2P4Ks = await LUPhgOBSl0.lock.call(addressQK4fwMf, uintdLrXDp, uintvXNzSHE, {from: accounts[2]});

		await expect(LUPhgOBSl0.transfer.call(addresshmTpNBh, uintcTxbrq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPxWffy4K = await LUP.new({from: accounts[3]});
		const uintNWSSYTX = BigInt("918")
		const uinte7FPozf = BigInt("259")
		const address4H6yJY = accounts[4]
		const uintvzDJhNv = BigInt("1827")
		const uintoJsSd4u = BigInt("39")
		const address8B78kA = accounts[1]
		const addresssFYK76 = accounts[2]
		const uint8RUitZmM = await LUPxWffy4K.decimals.call({from: accounts[3]});
		const boolS69GpA4 = await LUPxWffy4K.lock.call(address4H6yJY, uinte7FPozf, uintNWSSYTX, {from: accounts[4]});
		const boolqLQzkkq = await LUPxWffy4K.lock.call(address8B78kA, uintoJsSd4u, uintvzDJhNv, {from: accounts[3]});
		const addresss8Nw0st = await LUPxWffy4K.upgradeTo.call(addresssFYK76, {from: accounts[3]});

		assert.equal(uint8RUitZmM, BigInt("18"))
		await expect(LUPxWffy4K.lock.call(address4H6yJY, uinte7FPozf, uintNWSSYTX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPhgOBSl0 = await LUP.new({from: accounts[0]});
		const addressuvPWPj4 = accounts[1]
		const uintM3IzCYp = BigInt("1175")
		const addressGZQMXi9 = accounts[3]
		const uint256658gK0 = await LUPhgOBSl0.balanceOf.call(addressuvPWPj4, {from: accounts[3]});
		const boolpP25gy4 = await LUPhgOBSl0.transfer.call(addressGZQMXi9, uintM3IzCYp, {from: accounts[1]});

		assert.equal(uint256658gK0, BigInt("0"))
		await expect(LUPhgOBSl0.transfer.call(addressGZQMXi9, uintM3IzCYp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPhgOBSl0 = await LUP.new({from: accounts[0]});
		const uintKcoEOuV = BigInt("1200")
		const uinthA583XM = BigInt("1647")
		const addresszOMJRs4 = accounts[0]
		const uint1hBHsd = BigInt("1158")
		const addressmZzmJhw = accounts[4]
		const boolcnRqphp = await LUPhgOBSl0.lock.call(addresszOMJRs4, uinthA583XM, uintKcoEOuV, {from: accounts[0]});
		const uint8JfpBcZo = await LUPhgOBSl0.decimals.call({from: accounts[4]});
		const boolpP25gy4 = await LUPhgOBSl0.transfer.call(addressmZzmJhw, uint1hBHsd, {from: accounts[1]});

		assert.equal(boolcnRqphp, true)
		assert.equal(uint8JfpBcZo, BigInt("18"))
		await expect(LUPhgOBSl0.transfer.call(addressmZzmJhw, uint1hBHsd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPhgOBSl0 = await LUP.new({from: accounts[0]});
		const addresszGDt8QV = accounts[2]
		const uintnm4pb6c = BigInt("1261")
		const uintGNNiKy0 = BigInt("2020")
		const addressPbduMjr = accounts[2]
		const uintA4sVfdD = BigInt("1175")
		const addressGoeRph7 = accounts[3]
		const stringIQoZB2Y = await LUPhgOBSl0.symbol.call({from: accounts[3]});
		const uint256658gK0 = await LUPhgOBSl0.balanceOf.call(addresszGDt8QV, {from: accounts[3]});
		const boolO7TqioA = await LUPhgOBSl0.transferWithLock.call(addressPbduMjr, uintGNNiKy0, uintnm4pb6c, {from: accounts[0]});
		const boolpP25gy4 = await LUPhgOBSl0.transfer.call(addressGoeRph7, uintA4sVfdD, {from: accounts[1]});

		assert.equal(boolO7TqioA, true)
		assert.equal(stringIQoZB2Y, "LUP")
		assert.equal(uint256658gK0, BigInt("0"))
		await expect(LUPhgOBSl0.transfer.call(addressGoeRph7, uintA4sVfdD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPhgOBSl0 = await LUP.new({from: accounts[0]});
		const addressdqOsujb = accounts[4]
		const uintUBHe0h0 = BigInt("2020")
		const uintZirRxmi = BigInt("1578")
		const addressxx6U29Y = accounts[1]
		const uinthESAhSg = BigInt("1177")
		const addressVGvkvha = accounts[4]
		const uint256kaLuqwt = await LUPhgOBSl0.balanceOf.call(addressdqOsujb, {from: accounts[1]});
		const boolNBjSTa = await LUPhgOBSl0.lock.call(addressxx6U29Y, uintZirRxmi, uintUBHe0h0, {from: accounts[0]});
		const boolpP25gy4 = await LUPhgOBSl0.transfer.call(addressVGvkvha, uinthESAhSg, {from: accounts[1]});
		const stringzFLsjwF = await LUPhgOBSl0.name.call({from: accounts[4]});

		assert.equal(uint256kaLuqwt, BigInt("0"))
		await expect(LUPhgOBSl0.lock.call(addressxx6U29Y, uintZirRxmi, uintUBHe0h0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPhgOBSl0 = await LUP.new({from: accounts[0]});
		const uintPRDN2k7 = BigInt("65")
		const addressr9AMUK4 = accounts[2]
		const uintrHaDTKn = BigInt("1177")
		const addressKvNAlW = accounts[3]
		const boolda0mMzG = await LUPhgOBSl0.unlock.call(addressr9AMUK4, uintPRDN2k7, {from: accounts[0]});
		const boolpP25gy4 = await LUPhgOBSl0.transfer.call(addressKvNAlW, uintrHaDTKn, {from: accounts[1]});

		await expect(LUPhgOBSl0.unlock.call(addressr9AMUK4, uintPRDN2k7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPhgOBSl0 = await LUP.new({from: accounts[0]});
		const addressIU9Ig8p = accounts[2]
		const boolqvaPHce = false
		const addresstDDCCjy = accounts[3]
		const uint256658gK0 = await LUPhgOBSl0.balanceOf.call(addressIU9Ig8p, {from: accounts[3]});
		const booleHT05aD = await LUPhgOBSl0.freezeAccount.call(addresstDDCCjy, boolqvaPHce, {from: accounts[0]});
		const uint8mUTRI8U = await LUPhgOBSl0.decimals.call({from: accounts[0]});

		assert.equal(booleHT05aD, true)
		assert.equal(uint256658gK0, BigInt("0"))
		assert.equal(uint8mUTRI8U, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPhgOBSl0 = await LUP.new({from: accounts[0]});
		const addressFrlABII = accounts[5]
		const addressGxLt0JN = accounts[2]
		const addressGKRjeI4 = await LUPhgOBSl0.upgradeTo.call(addressFrlABII, {from: accounts[2]});
		const uint256658gK0 = await LUPhgOBSl0.balanceOf.call(addressGxLt0JN, {from: accounts[3]});

		await expect(LUPhgOBSl0.upgradeTo.call(addressFrlABII, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPYJLqdHO = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintuEq3973 = BigInt("1154")
		const uintk00IX8 = BigInt("1664")
		const addresslluZeuv = accounts[4]
		const uinteUNSHXL = BigInt("942")
		const uintXrWxF6n = BigInt("1857")
		const addressFWkfthR = accounts[4]
		const stringjBt87DT = await LUPYJLqdHO.name.call({from: accounts[0]});
		const uint8jmkHPFC = await LUPYJLqdHO.decimals.call({from: accounts[1]});
		const boolfzcS8a8 = await LUPYJLqdHO.lock.call(addresslluZeuv, uintk00IX8, uintuEq3973, {from: accounts[4]});
		const boolu2KC1SR = await LUPYJLqdHO.transferWithLock.call(addressFWkfthR, uintXrWxF6n, uinteUNSHXL, {from: accounts[0]});
		const stringiQYm1q = await LUPYJLqdHO.symbol.call({from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPhgOBSl0 = await LUP.new({from: accounts[0]});
		const addressxmLVKlF = accounts[2]
		const uintLhSDscc = BigInt("1177")
		const addressdj1q9KR = accounts[4]
		const addressTC8AOm4 = await LUPhgOBSl0.upgradeTo.call(addressxmLVKlF, {from: accounts[0]});
		const boolpP25gy4 = await LUPhgOBSl0.transfer.call(addressdj1q9KR, uintLhSDscc, {from: accounts[1]});

		await expect(LUPhgOBSl0.transfer.call(addressdj1q9KR, uintLhSDscc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})