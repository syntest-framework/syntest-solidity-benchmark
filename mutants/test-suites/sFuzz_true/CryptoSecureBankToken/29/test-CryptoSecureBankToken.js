const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAng3xPY = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressZRu0XdX = accounts[1]
		const addressxJhRHVz = accounts[1]
		const addressGojnOaH = "0x0000000000000000000000000000000000000001"
		const addresstsjVkBa = accounts[2]
		const uintd8xknp0 = await CryptoSecureBankTokenAng3xPY.allowance.call(addressxJhRHVz, addressZRu0XdX, {from: accounts[1]});
//		const addresstTdqgpK = await CryptoSecureBankTokenAng3xPY.removeBlackList.call(addressGojnOaH, {from: accounts[1]});
//		const boolM6qhEI = await CryptoSecureBankTokenAng3xPY.deprecate.call(addresstsjVkBa, {from: accounts[4]});

		assert.equal(uintd8xknp0, BigInt("0"))
		await expect(CryptoSecureBankTokenAng3xPY.removeBlackList.call(addressGojnOaH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhEOs94j = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintjz0cZHV = BigInt("1091")
		const addressah42YP4 = accounts[0]
		const addressJpNM9Ap = accounts[0]
		const addresseXwb2wn = "0x0000000000000000000000000000000000000001"
		const addressnRFu5OI = accounts[3]
		const uintUesd9ff = BigInt("1547")
		const address0QYSC8 = accounts[4]
//		const bool8U1FjR = await CryptoSecureBankTokenhEOs94j.transferFrom.call(addressJpNM9Ap, addressah42YP4, uintjz0cZHV, {from: accounts[4]});
//		const uintN3vSGjt = await CryptoSecureBankTokenhEOs94j.balanceOf.call(addresseXwb2wn, {from: accounts[3]});
//		await CryptoSecureBankTokenhEOs94j.onlyOwner.call({from: accounts[3]});
//		const addressMoREqkL = await CryptoSecureBankTokenhEOs94j.transferOwnership.call(addressnRFu5OI, {from: accounts[4]});
//		const boolWwzUmik = await CryptoSecureBankTokenhEOs94j.transfer.call(address0QYSC8, uintUesd9ff, {from: accounts[2]});

		await expect(CryptoSecureBankTokenhEOs94j.transferFrom.call(addressJpNM9Ap, addressah42YP4, uintjz0cZHV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfkuD5U6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintZj4cy7r = BigInt("151")
		const addressNSXUzpC = accounts[2]
		const addressGzTlflS = accounts[4]
		const uintuwipoE = BigInt("1746")
		const addressl7usr43 = accounts[4]
		const boolirOUUHn = await CryptoSecureBankTokenfkuD5U6.approve.call(addressNSXUzpC, uintZj4cy7r, {from: accounts[4]});
//		const addressZO2Vmz6 = await CryptoSecureBankTokenfkuD5U6.removeBlackList.call(addressGzTlflS, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSUYynbL = await CryptoSecureBankTokenfkuD5U6.approve.call(addressl7usr43, uintuwipoE, {from: accounts[5]});

		assert.equal(boolirOUUHn, true)
		await expect(CryptoSecureBankTokenfkuD5U6.removeBlackList.call(addressGzTlflS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMAVEmxa = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressSKwcQxQ = accounts[4]
		const addressndesFb = accounts[2]
		const uintJyQqFzt = BigInt("177")
		const addresslmrCV9l = accounts[4]
		const uintGvvRAF = await CryptoSecureBankTokenMAVEmxa.allowance.call(addressndesFb, addressSKwcQxQ, {from: accounts[4]});
		const addressOYw3X4y = await CryptoSecureBankTokenMAVEmxa.getOwner.call({from: accounts[1]});
//		const boolEZvPApu = await CryptoSecureBankTokenMAVEmxa.transfer.call(addresslmrCV9l, uintJyQqFzt, {from: accounts[3]});

		assert.equal(addressOYw3X4y, 0xAfEbbCd4bE5B5a6745F272e6C70e8def971CE434)
		assert.equal(uintGvvRAF, BigInt("0"))
		await expect(CryptoSecureBankTokenMAVEmxa.transfer.call(addresslmrCV9l, uintJyQqFzt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenONBTrrH = await CryptoSecureBankToken.new({from: accounts[0]});
		const addresseLIleZF = "0x0000000000000000000000000000000000000001"
		const uintmtJDi5H = await CryptoSecureBankTokenONBTrrH.totalSupply.call({from: accounts[0]});
//		const addressJJf85Xy = await CryptoSecureBankTokenONBTrrH.destroyBlackFunds.call(addresseLIleZF, {from: accounts[3]});

		assert.equal(uintmtJDi5H, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenONBTrrH.destroyBlackFunds.call(addresseLIleZF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPaO0Gim = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintiW5yVrR = BigInt("1054")
		const addressbIGWInM = accounts[1]
//		const uintZZLl3jw = await CryptoSecureBankTokenPaO0Gim.onlyPayloadSize.call(uintiW5yVrR, {from: accounts[2]});
//		const addressyBgAkmA = await CryptoSecureBankTokenPaO0Gim.setOwner2.call(addressbIGWInM, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptoSecureBankTokenPaO0Gim.pause.call({from: accounts[4]});
//		await CryptoSecureBankTokenPaO0Gim.onlyOwner.call({from: accounts[1]});

		await expect(CryptoSecureBankTokenPaO0Gim.onlyPayloadSize.call(uintiW5yVrR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMAVEmxa = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressCc8x1vp = accounts[4]
		const addresseYckzyU = accounts[2]
		const addressItn7PJP = accounts[4]
		const uinteTj8cGn = BigInt("177")
		const addressPRgyi8a = accounts[4]
		const uintGvvRAF = await CryptoSecureBankTokenMAVEmxa.allowance.call(addresseYckzyU, addressCc8x1vp, {from: accounts[4]});
		const addressOYw3X4y = await CryptoSecureBankTokenMAVEmxa.getOwner.call({from: accounts[1]});
//		const addressIuF85Ys = await CryptoSecureBankTokenMAVEmxa.transferOwnership.call(addressItn7PJP, {from: accounts[5]});
//		await CryptoSecureBankTokenMAVEmxa.unpause.call({from: accounts[3]});
//		const boolEZvPApu = await CryptoSecureBankTokenMAVEmxa.transfer.call(addressPRgyi8a, uinteTj8cGn, {from: accounts[3]});

		assert.equal(addressOYw3X4y, 0xAfEbbCd4bE5B5a6745F272e6C70e8def971CE434)
		assert.equal(uintGvvRAF, BigInt("0"))
		await expect(CryptoSecureBankTokenMAVEmxa.transferOwnership.call(addressItn7PJP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMAVEmxa = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressmOgkx01 = accounts[3]
		const uintZ2HnJAL = BigInt("1096")
		const addressYWohTNY = accounts[4]
		const addresstu52mag = accounts[2]
		const uintV9OJ3FI = BigInt("177")
		const addressOoVkU7c = accounts[4]
		const boolST2jKAN = await CryptoSecureBankTokenMAVEmxa.getBlackListStatus.call(addressmOgkx01, {from: accounts[0]});
//		const boolfIl88io = await CryptoSecureBankTokenMAVEmxa.redeem.call(uintZ2HnJAL, {from: accounts[2]});
//		const uintGvvRAF = await CryptoSecureBankTokenMAVEmxa.allowance.call(addresstu52mag, addressYWohTNY, {from: accounts[4]});
//		const addressOYw3X4y = await CryptoSecureBankTokenMAVEmxa.getOwner.call({from: accounts[1]});
//		const boolEZvPApu = await CryptoSecureBankTokenMAVEmxa.transfer.call(addressOoVkU7c, uintV9OJ3FI, {from: accounts[3]});

		assert.equal(boolST2jKAN, false)
		await expect(CryptoSecureBankTokenMAVEmxa.redeem.call(uintZ2HnJAL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAsc5yFg = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressOtbyTgl = accounts[1]
		const addressbTwOjHT = await CryptoSecureBankTokenAsc5yFg.addBlackList.call(addressOtbyTgl, {from: accounts[4]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfkuD5U6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintpJEaUhZ = BigInt("1738")
		const addressuTIa6h = accounts[4]
		const addressJk97qAs = accounts[1]
		const boolSUYynbL = await CryptoSecureBankTokenfkuD5U6.approve.call(addressuTIa6h, uintpJEaUhZ, {from: accounts[5]});
		const uintp45oH2d = await CryptoSecureBankTokenfkuD5U6.balanceOf.call(addressJk97qAs, {from: accounts[0]});

		assert.equal(boolSUYynbL, true)
		assert.equal(uintp45oH2d, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAng3xPY = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressUX3IpWN = accounts[0]
		const addressNwsEBuu = accounts[1]
		const addressaaOLILj = accounts[2]
		const bool6v9Ebq = await CryptoSecureBankTokenAng3xPY.deprecate.call(addressUX3IpWN, {from: accounts[2]});
		const uintd8xknp0 = await CryptoSecureBankTokenAng3xPY.allowance.call(addressaaOLILj, addressNwsEBuu, {from: accounts[1]});

		assert.equal(bool6v9Ebq, true)
		assert.equal(uintd8xknp0, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKhxZR5Z = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshNCLcgH = accounts[2]
		const addressDS0BilM = accounts[4]
		const uinthrZN8Z = BigInt("1234")
		const addressK9eGZCI = accounts[1]
		await CryptoSecureBankTokenKhxZR5Z.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptoSecureBankTokenKhxZR5Z.whenNotPaused.call({from: accounts[0]});
		const uintgKdnn72 = await CryptoSecureBankTokenKhxZR5Z.balanceOf.call(addresshNCLcgH, {from: accounts[0]});
		const addresspwJbCLT = await CryptoSecureBankTokenKhxZR5Z.addBlackList.call(addressDS0BilM, {from: accounts[2]});
		await CryptoSecureBankTokenKhxZR5Z.onlyOwner.call({from: accounts[4]});
		const boolrtLfKn9 = await CryptoSecureBankTokenKhxZR5Z.approve.call(addressK9eGZCI, uinthrZN8Z, {from: accounts[2]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhEOs94j = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressQwTpu0w = accounts[2]
		const uintRCrd8Dm = BigInt("1104")
		const addressFJy2sqe = accounts[0]
		const addresswjdg5R = accounts[0]
		const uinteEikzT = BigInt("10")
		const addressDzMHjVf = accounts[0]
		const uintgHo8QGv = BigInt("1063")
		const addressAxMMKi = accounts[0]
		const addresscDI1C2e = accounts[0]
		const addressUKgZtwj = await CryptoSecureBankTokenhEOs94j.setOwner2.call(addressQwTpu0w, {from: accounts[3]});
//		const bool8U1FjR = await CryptoSecureBankTokenhEOs94j.transferFrom.call(addresswjdg5R, addressFJy2sqe, uintRCrd8Dm, {from: accounts[4]});
//		const boolqL77bf = await CryptoSecureBankTokenhEOs94j.transfer.call(addressDzMHjVf, uinteEikzT, {from: accounts[2]});
//		const boolrGnONIv = await CryptoSecureBankTokenhEOs94j.transferFrom.call(addresscDI1C2e, addressAxMMKi, uintgHo8QGv, {from: accounts[4]});

		await expect(CryptoSecureBankTokenhEOs94j.transferFrom.call(addresswjdg5R, addressFJy2sqe, uintRCrd8Dm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAsc5yFg = await CryptoSecureBankToken.new({from: accounts[4]});
		const uinthKi5b44 = BigInt("79")
		const addressKxKwp0 = accounts[5]
		const uintom8Ht5x = BigInt("1337")
		const addressOTtcXst = accounts[2]
//		await CryptoSecureBankTokenAsc5yFg.pause.call({from: accounts[4]});
//		const boolNXmX11G = await CryptoSecureBankTokenAsc5yFg.transfer.call(addressKxKwp0, uinthKi5b44, {from: accounts[1]});
//		const booliDgHnjg = await CryptoSecureBankTokenAsc5yFg.transfer.call(addressOTtcXst, uintom8Ht5x, {from: accounts[1]});

		await expect(CryptoSecureBankTokenAsc5yFg.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentT9T7sQ = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressPzDLZP4 = accounts[0]
//		const addressMwNKxB = await CryptoSecureBankTokentT9T7sQ.destroyBlackFunds.call(addressPzDLZP4, {from: accounts[2]});
//		await CryptoSecureBankTokentT9T7sQ.unpause.call({from: accounts[4]});

		await expect(CryptoSecureBankTokentT9T7sQ.destroyBlackFunds.call(addressPzDLZP4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfkuD5U6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintp9sPnE9 = BigInt("1015")
		const addressSIN3Gle = "0x0000000000000000000000000000000000000001"
		const addressnMI3e8W = accounts[3]
		const addressXEsQT7J = accounts[5]
		const boolsgRqkhz = await CryptoSecureBankTokenfkuD5U6.transfer.call(addressSIN3Gle, uintp9sPnE9, {from: accounts[4]});
		const uintp45oH2d = await CryptoSecureBankTokenfkuD5U6.balanceOf.call(addressnMI3e8W, {from: accounts[0]});
		const uintBZmrc7 = await CryptoSecureBankTokenfkuD5U6.balanceOf.call(addressXEsQT7J, {from: accounts[1]});

		assert.equal(boolsgRqkhz, true)
		assert.equal(uintBZmrc7, BigInt("0"))
		assert.equal(uintp45oH2d, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAng3xPY = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressAigmp6u = accounts[2]
		const addressasdiDPk = accounts[4]
		const addressm65CeG = accounts[2]
		const addressUYUvS4M = accounts[0]
		const uintlbPeWiL = await CryptoSecureBankTokenAng3xPY.allowance.call(addressasdiDPk, addressAigmp6u, {from: accounts[3]});
		const addressPooXa7B = await CryptoSecureBankTokenAng3xPY.transferOwnership.call(addressm65CeG, {from: accounts[2]});
//		const addressXvMOAR = await CryptoSecureBankTokenAng3xPY.transferOwnership.call(addressUYUvS4M, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintlbPeWiL, BigInt("0"))
		await expect(CryptoSecureBankTokenAng3xPY.transferOwnership.call(addressUYUvS4M, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAsc5yFg = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintYRwDIqu = BigInt("0")
		const addressJhEruZQ = accounts[5]
		const addressmzGPAKV = accounts[0]
		const addressB41w21l = accounts[1]
		const addressyhEFhj = accounts[3]
		const addresszlJmjNU = accounts[3]
		const addressHEdqoDQ = accounts[0]
		const boolNXmX11G = await CryptoSecureBankTokenAsc5yFg.transfer.call(addressJhEruZQ, uintYRwDIqu, {from: accounts[1]});
//		const addressJhtht0v = await CryptoSecureBankTokenAsc5yFg.destroyBlackFunds.call(addressmzGPAKV, {from: accounts[1]});
//		const uintUTLi0zh = await CryptoSecureBankTokenAsc5yFg.allowance.call(addressyhEFhj, addressB41w21l, {from: accounts[5]});
//		const booleesqAqd = await CryptoSecureBankTokenAsc5yFg.getBlackListStatus.call(addresszlJmjNU, {from: "0x0000000000000000000000000000000000000001"});
//		const uintRvqeAfq = await CryptoSecureBankTokenAsc5yFg.balanceOf.call(addressHEdqoDQ, {from: accounts[0]});

		assert.equal(boolNXmX11G, true)
		await expect(CryptoSecureBankTokenAsc5yFg.destroyBlackFunds.call(addressmzGPAKV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfkuD5U6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintrBj2PJO = BigInt("1016")
		const addresslkutOSr = "0x0000000000000000000000000000000000000001"
		const addressLIrkkt = accounts[2]
		const boolsgRqkhz = await CryptoSecureBankTokenfkuD5U6.transfer.call(addresslkutOSr, uintrBj2PJO, {from: accounts[4]});
		const uintbqCJp1 = await CryptoSecureBankTokenfkuD5U6.totalSupply.call({from: accounts[5]});
		const addressykZMMOg = await CryptoSecureBankTokenfkuD5U6.removeBlackList.call(addressLIrkkt, {from: accounts[4]});

		assert.equal(boolsgRqkhz, true)
		assert.equal(uintbqCJp1, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfkuD5U6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintRu2E6iy = BigInt("1013")
		const addresssfSBxwn = "0x0000000000000000000000000000000000000001"
		const uintl5QZ0Gh = BigInt("549")
		const uintUIxerU9 = BigInt("969")
		const addressos4lOz9 = accounts[2]
		const addressycNV57Q = accounts[4]
		const boolsgRqkhz = await CryptoSecureBankTokenfkuD5U6.transfer.call(addresssfSBxwn, uintRu2E6iy, {from: accounts[4]});
		const boolML5J4ra = await CryptoSecureBankTokenfkuD5U6.redeem.call(uintl5QZ0Gh, {from: accounts[4]});
//		const boolYmV9eZ = await CryptoSecureBankTokenfkuD5U6.transferFrom.call(addressycNV57Q, addressos4lOz9, uintUIxerU9, {from: accounts[2]});

		assert.equal(boolML5J4ra, true)
		assert.equal(boolsgRqkhz, true)
		await expect(CryptoSecureBankTokenfkuD5U6.transferFrom.call(addressycNV57Q, addressos4lOz9, uintUIxerU9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfkuD5U6 = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintGCAMu7V = BigInt("1015")
		const addressfDpJQPa = "0x0000000000000000000000000000000000000001"
		const uintWa2WuX = BigInt("29")
		const uintk1FXSB = BigInt("562")
		const addressvvUk5Xa = accounts[4]
		const boolsgRqkhz = await CryptoSecureBankTokenfkuD5U6.transfer.call(addressfDpJQPa, uintGCAMu7V, {from: accounts[4]});
//		const uintLNB2Nz = await CryptoSecureBankTokenfkuD5U6.setParams.call(uintk1FXSB, uintWa2WuX, {from: accounts[4]});
//		const addressZYDdAcD = await CryptoSecureBankTokenfkuD5U6.removeBlackList.call(addressvvUk5Xa, {from: accounts[1]});

		assert.equal(boolsgRqkhz, true)
		await expect(CryptoSecureBankTokenfkuD5U6.setParams.call(uintk1FXSB, uintWa2WuX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})