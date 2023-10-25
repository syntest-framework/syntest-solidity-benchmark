const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addresstvEyjm = accounts[1]
		const addressXMymtP2 = accounts[1]
		const QuickTokeni05kDnD = await QuickToken.new(addresstvEyjm, addressXMymtP2, {from: accounts[3]});
		const uinttQHiS0D = BigInt("2002")
		const addressZ8SUT2O = accounts[2]
		const uintO6JhCqF = BigInt("1751")
		const addressqZC48hA = accounts[1]
		const addressoUceV7 = accounts[0]
		const addressdidCbjm = accounts[3]
		const addressJ741mMQ = accounts[4]
		const addresszGKpJAz = await QuickTokeni05kDnD.mint.call(addressZ8SUT2O, uinttQHiS0D, {from: "0x0000000000000000000000000000000000000001"});
		const addresszOWMiD9 = await QuickTokeni05kDnD.mint.call(addressqZC48hA, uintO6JhCqF, {from: "0x0000000000000000000000000000000000000001"});
		const uintJnG7NEP = await QuickTokeni05kDnD.balanceOf.call(addressoUceV7, {from: accounts[0]});
		const uintXRJcEds = await QuickTokeni05kDnD.allowance.call(addressJ741mMQ, addressdidCbjm, {from: accounts[2]});

		await expect(QuickTokeni05kDnD.mint.call(addressZ8SUT2O, uinttQHiS0D, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressBRCfiXn = accounts[3]
		const addressnq4qIbj = accounts[3]
		const QuickTokenHTr0hxk = await QuickToken.new(addressBRCfiXn, addressnq4qIbj, {from: accounts[4]});
		const uintUlqhAU = BigInt("136")
		const addressQYw0k8Z = accounts[0]
		const uintR9CYGAv = BigInt("171")
		const addressHuXmXnF = "0x0000000000000000000000000000000000000001"
		const address4Yg4vB = accounts[0]
		const addressYfwD8YF = accounts[3]
		const addressZgS2vHL = accounts[3]
		const addressNTiSha5 = accounts[2]
		const boolT1vhoD = await QuickTokenHTr0hxk.transfer.call(addressQYw0k8Z, uintUlqhAU, {from: accounts[3]});
		const boolmoT3pg = await QuickTokenHTr0hxk.transfer.call(addressHuXmXnF, uintR9CYGAv, {from: accounts[2]});
		const uintshQ0J6O = await QuickTokenHTr0hxk.allowance.call(addressYfwD8YF, address4Yg4vB, {from: accounts[4]});
		const uintHTimQd1 = await QuickTokenHTr0hxk.allowance.call(addressNTiSha5, addressZgS2vHL, {from: accounts[0]});

		assert.equal(boolT1vhoD, true)
		await expect(QuickTokenHTr0hxk.transfer.call(addressHuXmXnF, uintR9CYGAv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressqqBzRm = accounts[2]
		const addresstr3hTat = accounts[3]
		const QuickTokenxgpFuUX = await QuickToken.new(addressqqBzRm, addresstr3hTat, {from: accounts[2]});
		const uintYcDpgLr = BigInt("991")
		const addressR7qhc2y = accounts[1]
		const uintC4Ozb3L = BigInt("285")
		const addressBZfgsFk = accounts[1]
		const addresszu0omH9 = accounts[2]
		const uint71CsfX = BigInt("545")
		const addresssWv6jof = accounts[3]
		const addressd5sm08g = accounts[5]
		const addressXT868yJ = accounts[1]
		const uintNpusAkI = BigInt("1130")
		const addressOl6lpBF = accounts[1]
		const addressnUlBMfX = accounts[1]
		const boolNljT3dO = await QuickTokenxgpFuUX.approve.call(addressR7qhc2y, uintYcDpgLr, {from: accounts[1]});
		const boolGiN9aaB = await QuickTokenxgpFuUX.transferFrom.call(addresszu0omH9, addressBZfgsFk, uintC4Ozb3L, {from: accounts[3]});
		const boolCuXdHGT = await QuickTokenxgpFuUX.transfer.call(addresssWv6jof, uint71CsfX, {from: accounts[2]});
		const uintMe6CP4t = await QuickTokenxgpFuUX.allowance.call(addressXT868yJ, addressd5sm08g, {from: accounts[0]});
		const addressAQjHoV = await QuickTokenxgpFuUX.mint.call(addressOl6lpBF, uintNpusAkI, {from: accounts[4]});
		const uintXJRMjVR = await QuickTokenxgpFuUX.balanceOf.call(addressnUlBMfX, {from: accounts[0]});

		assert.equal(boolNljT3dO, true)
		await expect(QuickTokenxgpFuUX.transferFrom.call(addresszu0omH9, addressBZfgsFk, uintC4Ozb3L, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressm58qBRg = accounts[4]
		const addressbcoEDfn = accounts[4]
		const QuickTokenznxI8cv = await QuickToken.new(addressm58qBRg, addressbcoEDfn, {from: "0x0000000000000000000000000000000000000001"});
		const uintHElaNjN = BigInt("1253")
		const addressdrCeS7 = accounts[5]
		const uintC0G9eY = BigInt("1139")
		const addresspKyqeyL = accounts[0]
		const uintgm5iT2 = BigInt("117")
		const addressSHKlQEt = accounts[4]
		const uintdRIDtID = BigInt("971")
		const addressesxKQlB = accounts[3]
		const boolw3xtIQ7 = await QuickTokenznxI8cv.approve.call(addressdrCeS7, uintHElaNjN, {from: accounts[4]});
		const addressEpLsxN = await QuickTokenznxI8cv.mint.call(addresspKyqeyL, uintC0G9eY, {from: accounts[5]});
		const boolSSVtgtk = await QuickTokenznxI8cv.approve.call(addressSHKlQEt, uintgm5iT2, {from: accounts[5]});
		const boolnA6idp9 = await QuickTokenznxI8cv.approve.call(addressesxKQlB, uintdRIDtID, {from: accounts[1]});
	});

	it('test for QuickToken', async () => {
		const addressGDkSBoj = accounts[1]
		const addressGhW4vt = accounts[0]
		const QuickToken22GX4Z = await QuickToken.new(addressGDkSBoj, addressGhW4vt, {from: accounts[0]});
		const addressJhmwKEa = accounts[4]
		const addressfBSG2V = accounts[2]
		const addressujZu9on = accounts[2]
		const addressrDw8wtS = accounts[1]
		const uintZMjf7Gs = BigInt("1070")
		const addressNyBogxp = accounts[3]
		const uintDexjm5b = BigInt("223")
		const addressMLkpZi = accounts[2]
		const uintio1eyL = await QuickToken22GX4Z.allowance.call(addressfBSG2V, addressJhmwKEa, {from: accounts[1]});
		const uint5OFVDL = await QuickToken22GX4Z.allowance.call(addressrDw8wtS, addressujZu9on, {from: accounts[0]});
		const addressIJy1ntX = await QuickToken22GX4Z.mint.call(addressNyBogxp, uintZMjf7Gs, {from: accounts[4]});
		const addressWIdVH0P = await QuickToken22GX4Z.mint.call(addressMLkpZi, uintDexjm5b, {from: accounts[1]});

		assert.equal(uint5OFVDL, BigInt("0"))
		assert.equal(uintio1eyL, BigInt("0"))
		await expect(QuickToken22GX4Z.mint.call(addressNyBogxp, uintZMjf7Gs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressocW2ZbK = accounts[4]
		const addressNw8FlSS = accounts[0]
		const QuickTokentx0HV6H = await QuickToken.new(addressocW2ZbK, addressNw8FlSS, {from: accounts[0]});
		const addressLVy3VI = accounts[3]
		const uintrszwPN9 = BigInt("2027")
		const addressJTCEeBB = accounts[3]
		const uintKOmKLKV = BigInt("1559")
		const addressqQ6wRZ9 = accounts[0]
		const addressffhGQIt = accounts[5]
		const addressZr9mDqo = accounts[0]
		const addresszvWAcEx = accounts[2]
		const addressF5eMXJx = accounts[4]
		const uintTmjgua5 = await QuickTokentx0HV6H.balanceOf.call(addressLVy3VI, {from: accounts[0]});
		const addressMnUynak = await QuickTokentx0HV6H.mint.call(addressJTCEeBB, uintrszwPN9, {from: accounts[0]});
		const boolGd1p14 = await QuickTokentx0HV6H.transferFrom.call(addressffhGQIt, addressqQ6wRZ9, uintKOmKLKV, {from: accounts[5]});
		const uintKckZ3p = await QuickTokentx0HV6H.allowance.call(addresszvWAcEx, addressZr9mDqo, {from: accounts[3]});
		const addressnc6XeeC = await QuickTokentx0HV6H.setMinter.call(addressF5eMXJx, {from: accounts[0]});

		assert.equal(uintTmjgua5, BigInt("0"))
		await expect(QuickTokentx0HV6H.transferFrom.call(addressffhGQIt, addressqQ6wRZ9, uintKOmKLKV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressymFRmH = accounts[2]
		const addressXKCikxw = accounts[3]
		const QuickTokenxgpFuUX = await QuickToken.new(addressymFRmH, addressXKCikxw, {from: accounts[2]});
		const addressIdK6Zx = accounts[4]
		const uintgkC8esR = BigInt("991")
		const addressqAU1Iad = accounts[1]
		const uintJZkogt = BigInt("285")
		const addressJ2IMpVk = accounts[1]
		const addresskpXy9wT = accounts[2]
		const uintQH69ua = BigInt("545")
		const addressyOb5Wyl = accounts[3]
		const uintQl3tG93 = BigInt("1130")
		const addressUgV9Il3 = accounts[2]
		const addressR3H0NMq = accounts[1]
		const addressW8Ug4NX = await QuickTokenxgpFuUX.setMinter.call(addressIdK6Zx, {from: accounts[2]});
		const boolNljT3dO = await QuickTokenxgpFuUX.approve.call(addressqAU1Iad, uintgkC8esR, {from: accounts[1]});
		const boolGiN9aaB = await QuickTokenxgpFuUX.transferFrom.call(addresskpXy9wT, addressJ2IMpVk, uintJZkogt, {from: accounts[3]});
		const boolCuXdHGT = await QuickTokenxgpFuUX.transfer.call(addressyOb5Wyl, uintQH69ua, {from: accounts[2]});
		const addressAQjHoV = await QuickTokenxgpFuUX.mint.call(addressUgV9Il3, uintQl3tG93, {from: accounts[4]});
		const uintXJRMjVR = await QuickTokenxgpFuUX.balanceOf.call(addressR3H0NMq, {from: accounts[0]});

		await expect(QuickTokenxgpFuUX.setMinter.call(addressIdK6Zx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const address1tCUIF = "0x0000000000000000000000000000000000000001"
		const addresswElkiIF = accounts[3]
		const QuickTokenibqFbpZ = await QuickToken.new(address1tCUIF, addresswElkiIF, {from: accounts[0]});
		const uintpdYj9GV = BigInt("1060")
		const addresssgbvG8x = "0x0000000000000000000000000000000000000000"
		const uintlltyjOB = BigInt("1246")
		const addressbbZZr61 = accounts[1]
		const uintgyhSzZ6 = BigInt("1814")
		const addressZzEJv8U = accounts[0]
		const addressSOUqsHT = await QuickTokenibqFbpZ.mint.call(addresssgbvG8x, uintpdYj9GV, {from: accounts[3]});
		const booljb7jqy5 = await QuickTokenibqFbpZ.approve.call(addressbbZZr61, uintlltyjOB, {from: accounts[0]});
		const boolMG9qOln = await QuickTokenibqFbpZ.transfer.call(addressZzEJv8U, uintgyhSzZ6, {from: accounts[1]});

		await expect(QuickTokenibqFbpZ.mint.call(addresssgbvG8x, uintpdYj9GV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})