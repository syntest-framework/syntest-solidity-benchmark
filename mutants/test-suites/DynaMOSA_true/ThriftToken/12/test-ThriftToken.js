const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenhn6TpT6 = await ThriftToken.new({from: accounts[0]});
		const addressaQxzOid = accounts[0]
		const uintvARwdWx = BigInt("1862")
		const addressAiy7xYE = accounts[3]
		const uintOgXZto = BigInt("667")
		const addressn26mdG = accounts[2]
		const uintiLCtdZ3 = BigInt("269")
		const addressGsoQwp5 = accounts[2]
		const uintwLtqguJ = BigInt("1440")
		const addresscvloas = accounts[0]
		const uint256REJtMRx = await ThriftTokenhn6TpT6.transferableTokens.call(addressaQxzOid, {from: accounts[1]});
//		const boolraPA7Et = await ThriftTokenhn6TpT6.decreaseApproval.call(addressAiy7xYE, uintvARwdWx, {from: accounts[3]});
//		const boolaCvwl4 = await ThriftTokenhn6TpT6.transfer.call(addressn26mdG, uintOgXZto, {from: accounts[3]});
//		const bool1Y94Ak = await ThriftTokenhn6TpT6.approve.call(addressGsoQwp5, uintiLCtdZ3, {from: accounts[5]});
//		const boolfVN0SF = await ThriftTokenhn6TpT6.increaseApproval.call(addresscvloas, uintwLtqguJ, {from: accounts[2]});

		assert.equal(uint256REJtMRx, BigInt("0"))
		await expect(ThriftTokenhn6TpT6.decreaseApproval.call(addressAiy7xYE, uintvARwdWx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenG2Vu61s = await ThriftToken.new({from: accounts[2]});
		const addressoHwU1g0 = accounts[1]
		const addresse01klgP = "0x0000000000000000000000000000000000000001"
		const addressatuGmO = accounts[1]
		const uint256A9pCJHd = await ThriftTokenG2Vu61s.transferableTokens.call(addressoHwU1g0, {from: accounts[1]});
		const uint256xoX5PV = await ThriftTokenG2Vu61s.balanceOf.call(addresse01klgP, {from: accounts[4]});
//		const addresskq2kM7d = await ThriftTokenG2Vu61s.transferOwnership.call(addressatuGmO, {from: accounts[3]});

		assert.equal(uint256A9pCJHd, BigInt("0"))
		assert.equal(uint256xoX5PV, BigInt("0"))
		await expect(ThriftTokenG2Vu61s.transferOwnership.call(addressatuGmO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenLuHXQ5 = await ThriftToken.new({from: accounts[4]});
		const uintrf8Rb1D = BigInt("1905")
		const addressQgHDEU = accounts[2]
		const uintioMJdnz = BigInt("958")
		const addressiTKCwq5 = accounts[3]
		const boolIjZw0D8 = await ThriftTokenLuHXQ5.approve.call(addressQgHDEU, uintrf8Rb1D, {from: accounts[3]});
		const boolht5rI3h = await ThriftTokenLuHXQ5.approve.call(addressiTKCwq5, uintioMJdnz, {from: accounts[2]});

		assert.equal(boolIjZw0D8, true)
		assert.equal(boolht5rI3h, true)
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenEns5PR5 = await ThriftToken.new({from: accounts[0]});
		const uintqw7ZRWO = BigInt("1797")
		const addressexuWxU9 = accounts[2]
		const addressiDn6ZOb = accounts[1]
		const addressCExfGzc = accounts[0]
		const uintof9rl1i = BigInt("1429")
		const addressOGkMUTe = accounts[3]
		const uintzsN93nt = BigInt("1379")
		const addressNSwZw5g = accounts[2]
//		const booluPaYsY6 = await ThriftTokenEns5PR5.transfer.call(addressexuWxU9, uintqw7ZRWO, {from: accounts[5]});
//		const uint256GWOE8kn = await ThriftTokenEns5PR5.balanceOf.call(addressiDn6ZOb, {from: accounts[1]});
//		const uint256ozFrRz = await ThriftTokenEns5PR5.balanceOf.call(addressCExfGzc, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNvIQw1g = await ThriftTokenEns5PR5.approve.call(addressOGkMUTe, uintof9rl1i, {from: accounts[2]});
//		const boolB80SgjU = await ThriftTokenEns5PR5.increaseApproval.call(addressNSwZw5g, uintzsN93nt, {from: accounts[5]});

		await expect(ThriftTokenEns5PR5.transfer.call(addressexuWxU9, uintqw7ZRWO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenuU5xM2v = await ThriftToken.new({from: accounts[1]});
		const uintVnzT8yS = BigInt("1007")
		const addressKBVB1kM = "0x0000000000000000000000000000000000000001"
		const uintuK39Vr1 = BigInt("1787")
		const addressfJAsrIX = accounts[1]
		const addressIdiQKLG = accounts[1]
		const addresspchqXl8 = accounts[2]
		const addressaOZ66V1 = accounts[1]
		const uintq8S141 = BigInt("228")
		const addressRgupiRY = accounts[0]
		const addressMhB4ly8 = accounts[4]
		const boolqMArGf = await ThriftTokenuU5xM2v.increaseApproval.call(addressKBVB1kM, uintVnzT8yS, {from: accounts[0]});
//		const boolGTOduWW = await ThriftTokenuU5xM2v.transfer.call(addressfJAsrIX, uintuK39Vr1, {from: accounts[2]});
//		const uint256USCZ2R = await ThriftTokenuU5xM2v.balanceOf.call(addressIdiQKLG, {from: accounts[3]});
//		const uint256wpapaV9 = await ThriftTokenuU5xM2v.balanceOf.call(addresspchqXl8, {from: accounts[2]});
//		const uint256XHavn8l = await ThriftTokenuU5xM2v.balanceOf.call(addressaOZ66V1, {from: accounts[1]});
//		const boolysTNFZM = await ThriftTokenuU5xM2v.transferFrom.call(addressMhB4ly8, addressRgupiRY, uintq8S141, {from: accounts[3]});

		assert.equal(boolqMArGf, true)
		await expect(ThriftTokenuU5xM2v.transfer.call(addressfJAsrIX, uintuK39Vr1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenFBgNbFC = await ThriftToken.new({from: accounts[2]});
		const uintOm3qLdQ = BigInt("161")
		const addresswT72Yjk = accounts[5]
		const addressfEUwDA3 = accounts[4]
		const uintOnsLDY = BigInt("1975")
		const addressCKM0YSz = accounts[0]
		const uintlQXACnB = BigInt("77")
		const addressiOpgug9 = accounts[4]
//		const boolA07mpJ = await ThriftTokenFBgNbFC.transferFrom.call(addressfEUwDA3, addresswT72Yjk, uintOm3qLdQ, {from: accounts[2]});
//		const boolVib97Uz = await ThriftTokenFBgNbFC.approve.call(addressCKM0YSz, uintOnsLDY, {from: accounts[4]});
//		const booleP2qUIO = await ThriftTokenFBgNbFC.approve.call(addressiOpgug9, uintlQXACnB, {from: accounts[0]});

		await expect(ThriftTokenFBgNbFC.transferFrom.call(addressfEUwDA3, addresswT72Yjk, uintOm3qLdQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenSkC6uZ = await ThriftToken.new({from: accounts[1]});
		const addressBO6O3Mu = accounts[2]
		const addressdIREUKk = accounts[0]
		const uintm5AuLo = BigInt("843")
		const addressyltCy5 = accounts[4]
		const uintqAvIAFQ = BigInt("968")
		const addressfEGywfo = "0x0000000000000000000000000000000000000001"
		const addressFjedH6 = accounts[2]
		const addresszFMnInR = accounts[2]
		const uintTeLDxmf = BigInt("83")
		const addressf6ZhsQ0 = accounts[1]
		const uintYT5RKJv = BigInt("972")
		const addressJomUI4e = accounts[3]
		const uint256E6QYwzu = await ThriftTokenSkC6uZ.allowance.call(addressdIREUKk, addressBO6O3Mu, {from: accounts[0]});
		const boolaOQGGIA = await ThriftTokenSkC6uZ.decreaseApproval.call(addressyltCy5, uintm5AuLo, {from: accounts[3]});
//		const bool7uguSi = await ThriftTokenSkC6uZ.transferFrom.call(addressFjedH6, addressfEGywfo, uintqAvIAFQ, {from: accounts[0]});
//		const uint256zh4Wynp = await ThriftTokenSkC6uZ.transferableTokens.call(addresszFMnInR, {from: accounts[3]});
//		const boolvkOzTvL = await ThriftTokenSkC6uZ.approve.call(addressf6ZhsQ0, uintTeLDxmf, {from: accounts[3]});
//		const boolkVVqWBz = await ThriftTokenSkC6uZ.approve.call(addressJomUI4e, uintYT5RKJv, {from: accounts[4]});

		assert.equal(boolaOQGGIA, true)
		assert.equal(uint256E6QYwzu, BigInt("0"))
		await expect(ThriftTokenSkC6uZ.transferFrom.call(addressFjedH6, addressfEGywfo, uintqAvIAFQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenEfAUOc = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxnlsf3c = BigInt("164")
		const addresscjo6wKi = accounts[1]
		const uintfO1RvZ = BigInt("51")
		const addressaEAozI3 = accounts[4]
		const uintMETXYmh = BigInt("1744")
		const addressbvinFvD = accounts[1]
		const uintZlckWPH = BigInt("1977")
		const addresstOdl91X = accounts[1]
		const boollbpNpBV = await ThriftTokenEfAUOc.increaseApproval.call(addresscjo6wKi, uintxnlsf3c, {from: accounts[0]});
		const boollrgB4pe = await ThriftTokenEfAUOc.decreaseApproval.call(addressaEAozI3, uintfO1RvZ, {from: accounts[1]});
		const boolMSAxc3x = await ThriftTokenEfAUOc.increaseApproval.call(addressbvinFvD, uintMETXYmh, {from: accounts[4]});
		const boolCmOWwP = await ThriftTokenEfAUOc.decreaseApproval.call(addresstOdl91X, uintZlckWPH, {from: accounts[4]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenFTpvyYA = await ThriftToken.new({from: accounts[1]});
		const addresshNvBXlo = accounts[2]
		const addressQ01XMz = accounts[3]
		const addressTbZ884A = accounts[3]
		const uintXWkjWRL = BigInt("1101")
		const addressDeTcW9C = accounts[1]
		const uintttwcARU = BigInt("610")
		const addressUKTEI0v = accounts[3]
		const addresso6vJI9t = accounts[1]
		const uintnlwK2II = BigInt("444")
		const addressufY2HLH = accounts[2]
		const uint256zkdC9Yt = await ThriftTokenFTpvyYA.allowance.call(addressQ01XMz, addresshNvBXlo, {from: accounts[0]});
		const addressHTgOdnc = await ThriftTokenFTpvyYA.transferOwnership.call(addressTbZ884A, {from: accounts[1]});
		const boolsHgkMde = await ThriftTokenFTpvyYA.approve.call(addressDeTcW9C, uintXWkjWRL, {from: accounts[3]});
//		const boolHq8lVwy = await ThriftTokenFTpvyYA.transferFrom.call(addresso6vJI9t, addressUKTEI0v, uintttwcARU, {from: accounts[4]});
//		const boolHOubJ6d = await ThriftTokenFTpvyYA.decreaseApproval.call(addressufY2HLH, uintnlwK2II, {from: accounts[1]});

		assert.equal(boolsHgkMde, true)
		assert.equal(uint256zkdC9Yt, BigInt("0"))
		await expect(ThriftTokenFTpvyYA.transferFrom.call(addresso6vJI9t, addressUKTEI0v, uintttwcARU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenvlh6dt = await ThriftToken.new({from: accounts[2]});
		const uintfvbpM7Z = BigInt("0")
		const addresskRAdt8y = accounts[0]
		const addressldRQBZH = accounts[3]
		const addressi5tT0Bi = accounts[2]
		const uintwQIdk4I = BigInt("1066")
		const addresset79jDN = accounts[3]
		const uint3gHY9r = BigInt("358")
		const addressEZls9wD = accounts[2]
		const boolxlHZ2D = await ThriftTokenvlh6dt.transfer.call(addresskRAdt8y, uintfvbpM7Z, {from: accounts[3]});
		const uint256A4IXjXe = await ThriftTokenvlh6dt.allowance.call(addressi5tT0Bi, addressldRQBZH, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNlxzcVJ = await ThriftTokenvlh6dt.transfer.call(addresset79jDN, uintwQIdk4I, {from: accounts[0]});
//		const booljTwHfAI = await ThriftTokenvlh6dt.increaseApproval.call(addressEZls9wD, uint3gHY9r, {from: accounts[5]});

		assert.equal(boolxlHZ2D, true)
		assert.equal(uint256A4IXjXe, BigInt("0"))
		await expect(ThriftTokenvlh6dt.transfer.call(addresset79jDN, uintwQIdk4I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})