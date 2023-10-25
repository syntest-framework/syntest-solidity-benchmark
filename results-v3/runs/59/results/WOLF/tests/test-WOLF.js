const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringWY1sZTY = "ZbzLBdNQBLkSNF6Y3DSutZ7tHIh"
		const stringTCX52qk = "E1eVRW1XxwExlKcsyavxcO8RCJC"
		const uintaom5i7 = BigInt("1499")
		const WOLFlQa2HMO = await WOLF.new(stringWY1sZTY, stringTCX52qk, uintaom5i7, {from: accounts[1]});
		const uintgSiWOAU = BigInt("1375")
		const addresseQ8bVS = accounts[2]
		const uintL8EZOKh = BigInt("1120")
		const addressvKZway = accounts[0]
		const addresskgP1KPp = accounts[3]
		const uintDcczun = BigInt("833")
		const addressOwa962R = accounts[4]
		const boolPqYEdHL = await WOLFlQa2HMO.approveAndCall.call(addresseQ8bVS, uintgSiWOAU, {from: accounts[4]});
		const booll1QlrA = await WOLFlQa2HMO.transferFrom.call(addresskgP1KPp, addressvKZway, uintL8EZOKh, {from: accounts[4]});
		const booleXrjPG0 = await WOLFlQa2HMO.approve.call(addressOwa962R, uintDcczun, {from: accounts[2]});

		await expect(WOLFlQa2HMO.approveAndCall.call(addresseQ8bVS, uintgSiWOAU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringpTUrqBr = "8U95Bpxw4YrsHwwxy642cM7GFI0oEdFRJXiFPhB38MvmnsQx5Wb6wMp6jP6b3fsx0jjGgU7bISUvq4GowtsUTfr8E"
		const stringCdwPFH = "QaVx"
		const uintNZ9dIk = BigInt("1752")
		const WOLFtDaeQWF = await WOLF.new(stringpTUrqBr, stringCdwPFH, uintNZ9dIk, {from: accounts[1]});
		const uintLHq9goK = BigInt("650")
		const addressSXcr441 = accounts[3]
		const uintxzDX1ut = BigInt("1662")
		const addressef9lZFT = accounts[5]
		const uintDh5esiF = BigInt("1919")
		const addressL8mKqw3 = accounts[0]
		const uintwkZwx6 = BigInt("2007")
		const addressS9pWcd = accounts[0]
		const addressyprx6Dp = accounts[1]
		const uintOakhMY3 = BigInt("702")
		const addressglGWDtp = accounts[5]
		const addresssX3LjUm = accounts[0]
		const boolUHgiZ11 = await WOLFtDaeQWF.approve.call(addressSXcr441, uintLHq9goK, {from: accounts[4]});
		const boolja0CK5F = await WOLFtDaeQWF.approveAndCall.call(addressef9lZFT, uintxzDX1ut, {from: accounts[4]});
		const boolx5pyJKU = await WOLFtDaeQWF.transfer.call(addressL8mKqw3, uintDh5esiF, {from: accounts[3]});
		const boolTR54Yq8 = await WOLFtDaeQWF.approveAndCall.call(addressS9pWcd, uintwkZwx6, {from: accounts[1]});
		const boolZpuAA4I = await WOLFtDaeQWF.transferownership.call(addressyprx6Dp, {from: accounts[0]});
		const boolvfRuR8d = await WOLFtDaeQWF.transferFrom.call(addresssX3LjUm, addressglGWDtp, uintOakhMY3, {from: accounts[1]});

		assert.equal(boolUHgiZ11, true)
		await expect(WOLFtDaeQWF.approveAndCall.call(addressef9lZFT, uintxzDX1ut, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringvtfUinw = "wBDzgn9KiGjlru1LRqPfU3gTMAvTUGJRTmIJd1JrVx7S84iMgrnGTWNMMxWB75j7Fjq86BNVIa"
		const stringrQGJ7Dc = "a8fVCWrUfCiJGXsHJOnx8McOQ7DjTALfD57Rb84qhwCMWtUFV5Cy0JCLlFx0r9ellKwseebNrgUq"
		const uintpRhAWUE = BigInt("1357")
		const WOLFVtHYt80 = await WOLF.new(stringvtfUinw, stringrQGJ7Dc, uintpRhAWUE, {from: accounts[2]});
		const uintn6Rjeu8 = BigInt("1196")
		const addressqrQiOOF = accounts[5]
		const addressLtp02zH = accounts[2]
		const uintJ6AQHiq = BigInt("882")
		const addressY0bBGQk = accounts[2]
		const addressPG6M5xa = accounts[2]
		const uintUvrz1n = BigInt("1368")
		const addressBNEaAsL = accounts[0]
		const addressIKZpF0l = "0x0000000000000000000000000000000000000001"
		const booloLiBfQ4 = await WOLFVtHYt80.transferFrom.call(addressLtp02zH, addressqrQiOOF, uintn6Rjeu8, {from: accounts[3]});
		const boolUlpauef = await WOLFVtHYt80.transferFrom.call(addressPG6M5xa, addressY0bBGQk, uintJ6AQHiq, {from: accounts[0]});
		const boolF0YGwX = await WOLFVtHYt80.transferFrom.call(addressIKZpF0l, addressBNEaAsL, uintUvrz1n, {from: accounts[1]});

		await expect(WOLFVtHYt80.transferFrom.call(addressLtp02zH, addressqrQiOOF, uintn6Rjeu8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringsRIWtL = "2ArIWHTSSlR"
		const stringuOLU1NM = "fpL5pIfwYC"
		const uintAPPVNwn = BigInt("1019")
		const WOLFWO0JNP = await WOLF.new(stringsRIWtL, stringuOLU1NM, uintAPPVNwn, {from: accounts[3]});
		const addressyD9LW3 = accounts[1]
		const uintryYchq2 = BigInt("1386")
		const addressQDvGUTD = accounts[4]
		const uintfLOwCYb = BigInt("772")
		const addressnwGgru = accounts[1]
		const addresss0l00h5 = accounts[1]
		const uintHJwlvTG = BigInt("421")
		const addresseqr2EoO = "0x0000000000000000000000000000000000000001"
		const uintsZ9ExiK = BigInt("853")
		const addressTDKVUJ = accounts[0]
		const address46NDyD = accounts[3]
		const boolRPhnPL = await WOLFWO0JNP.transferownership.call(addressyD9LW3, {from: accounts[1]});
		const boolnmGJep = await WOLFWO0JNP.approveAndCall.call(addressQDvGUTD, uintryYchq2, {from: accounts[5]});
		const boolEhSw4k = await WOLFWO0JNP.transferFrom.call(addresss0l00h5, addressnwGgru, uintfLOwCYb, {from: accounts[4]});
		const boolZspksVG = await WOLFWO0JNP.approveAndCall.call(addresseqr2EoO, uintHJwlvTG, {from: accounts[3]});
		const boold5ioaaL = await WOLFWO0JNP.transferFrom.call(address46NDyD, addressTDKVUJ, uintsZ9ExiK, {from: accounts[4]});

		await expect(WOLFWO0JNP.transferownership.call(addressyD9LW3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringRHY4hGi = "2RFLyHUw4e5IjECgbMlVIK0n7oBi6PmOdixpt84Tmiujx2Uj6BFnccYcdKaOjOKtvA"
		const stringAcVJe4 = "dRim8CLHD5HlqTeVhak0GOQSvTnQUbqXvOw0oe4pfj"
		const uintXm3a4nN = BigInt("327")
		const WOLFdFABQ3 = await WOLF.new(stringRHY4hGi, stringAcVJe4, uintXm3a4nN, {from: "0x0000000000000000000000000000000000000001"});
		const uinth3RpyJS = BigInt("1432")
		const addresstfAK0du = accounts[1]
		const addressvk29Wwy = accounts[5]
		const uintkO50Gxs = BigInt("1854")
		const addressUqQHBwT = accounts[0]
		const uintYwHngM0 = BigInt("2046")
		const addressTyyfURC = accounts[2]
		const uintptDvkOt = BigInt("190")
		const addressueyaqH = accounts[5]
		const addressInCWtLu = accounts[0]
		const boolFfMCl3j = await WOLFdFABQ3.transferFrom.call(addressvk29Wwy, addresstfAK0du, uinth3RpyJS, {from: accounts[3]});
		const boollY24KgH = await WOLFdFABQ3.transfer.call(addressUqQHBwT, uintkO50Gxs, {from: accounts[0]});
		const bool47kjO8 = await WOLFdFABQ3.approveAndCall.call(addressTyyfURC, uintYwHngM0, {from: accounts[1]});
		const boolf5EqrkM = await WOLFdFABQ3.transferFrom.call(addressInCWtLu, addressueyaqH, uintptDvkOt, {from: accounts[2]});
	});

	it('test for WOLF', async () => {
		const stringFezjrHG = "3sijz6Fu"
		const stringUZ86pZn = "CphpP8vOTe4h93Xw8L88ZR7atPt28"
		const uint4SqdfO = BigInt("346")
		const WOLFldxBmoY = await WOLF.new(stringFezjrHG, stringUZ86pZn, uint4SqdfO, {from: accounts[3]});
		const uintOnBDF7e = BigInt("1401")
		const addresseZvaWEO = accounts[4]
		const uintUgc91Vp = BigInt("526")
		const addressJfVDplA = accounts[4]
		const uintKVhxY5s = BigInt("5")
		const addresskmXkmVr = accounts[1]
		const addressXD5w0Jp = accounts[2]
		const uintdhVfuof = BigInt("363")
		const addressMbTIJM = "0x0000000000000000000000000000000000000001"
		const addresspSKfduO = accounts[0]
		const uintpJj6L82 = BigInt("1209")
		const addresssVlr9eW = accounts[1]
		const boolWfrshor = await WOLFldxBmoY.transfer.call(addresseZvaWEO, uintOnBDF7e, {from: accounts[4]});
		const boolMowPnA = await WOLFldxBmoY.transfer.call(addressJfVDplA, uintUgc91Vp, {from: accounts[1]});
		const boolKCYBV05 = await WOLFldxBmoY.transferFrom.call(addressXD5w0Jp, addresskmXkmVr, uintKVhxY5s, {from: accounts[5]});
		const booloJJhU8 = await WOLFldxBmoY.transferFrom.call(addresspSKfduO, addressMbTIJM, uintdhVfuof, {from: accounts[4]});
		const boolDrgnoHl = await WOLFldxBmoY.approve.call(addresssVlr9eW, uintpJj6L82, {from: accounts[3]});

		await expect(WOLFldxBmoY.transfer.call(addresseZvaWEO, uintOnBDF7e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const strings1fTU2N = "mRTzfepT84AS4gIVRu1LdzQdocj6UlrKqY0s1lOzHbIz"
		const stringde33DDG = "4pkos6H3tR3G16cC96uyBqw6MPpD7boTbYyHW19"
		const uintYBRLpEU = BigInt("287")
		const WOLFTcVaZdP = await WOLF.new(strings1fTU2N, stringde33DDG, uintYBRLpEU, {from: accounts[1]});
		const uintyBsa7FH = BigInt("1518")
		const addresse6t6F8y = accounts[5]
		const uinttqQpvsb = BigInt("152")
		const addresspmwuwH = accounts[6]
		const boolX0fTsp = await WOLFTcVaZdP.approveAndCall.call(addresse6t6F8y, uintyBsa7FH, {from: accounts[1]});
		const boolpq19kTd = await WOLFTcVaZdP.approveAndCall.call(addresspmwuwH, uinttqQpvsb, {from: accounts[2]});

		assert.equal(boolX0fTsp, true)
		await expect(WOLFTcVaZdP.approveAndCall.call(addresspmwuwH, uinttqQpvsb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringFezjrHG = "3sijz6Fu"
		const stringUZ86pZn = "CphpP8vOTe4h93Xw8L88ZR7atPt28"
		const uintDEHmZTe = BigInt("346")
		const WOLFldxBmoY = await WOLF.new(stringFezjrHG, stringUZ86pZn, uintDEHmZTe, {from: accounts[3]});
		const uintjgIAciM = BigInt("1738")
		const addressJMRjT84 = accounts[2]
		const uintONznY64 = BigInt("526")
		const addressVBywZI = accounts[5]
		const uintQ91z1Bl = BigInt("541")
		const addressXz8cRiJ = accounts[5]
		const boolmC7O7Xs = await WOLFldxBmoY.transfer.call(addressJMRjT84, uintjgIAciM, {from: accounts[3]});
		const boolMowPnA = await WOLFldxBmoY.transfer.call(addressVBywZI, uintONznY64, {from: accounts[1]});
		const boolZKRjmW = await WOLFldxBmoY.transfer.call(addressXz8cRiJ, uintQ91z1Bl, {from: accounts[3]});

		assert.equal(boolmC7O7Xs, true)
		await expect(WOLFldxBmoY.transfer.call(addressVBywZI, uintONznY64, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const strings1fTU2N = "mRTzfepT84AS4gIVRu1LdzQdocj6UlrKqY0s1lOzHbIz"
		const stringde33DDG = "4pkos6H3tR3G16cC96uyBqw6MPpD7boTbYyHW19"
		const uintUg0BhG4 = BigInt("287")
		const WOLFTcVaZdP = await WOLF.new(strings1fTU2N, stringde33DDG, uintUg0BhG4, {from: accounts[1]});
		const uintdkcvxkj = BigInt("775")
		const addressvnBHvQM = accounts[3]
		const uintFis1raC = BigInt("0")
		const addressl7yeiQJ = "0x0000000000000000000000000000000000000002"
		const addressm5RrT3o = accounts[2]
		const addressLWwfChZ = accounts[0]
		const addressxuRa25 = accounts[2]
		const uintTbmEQVg = BigInt("1928")
		const addressfD90Rjv = accounts[3]
		const addressLOcDIUZ = "0x0000000000000000000000000000000000000001"
		const addressq8GIlp8 = accounts[4]
		const uintTFJCUe = BigInt("730")
		const addressE1TMcDf = accounts[3]
		const addressg8EWEUn = accounts[4]
		const addressvOW851 = accounts[4]
		const bool8NpoB3 = await WOLFTcVaZdP.approveAndCall.call(addressvnBHvQM, uintdkcvxkj, {from: accounts[1]});
		const boolMuSfgQY = await WOLFTcVaZdP.transfer.call(addressl7yeiQJ, uintFis1raC, {from: accounts[5]});
		const booloTar7ib = await WOLFTcVaZdP.transferownership.call(addressm5RrT3o, {from: accounts[1]});
		const booljbWkSuC = await WOLFTcVaZdP.transferownership.call(addressLWwfChZ, {from: accounts[5]});
		const boolAuOVD1 = await WOLFTcVaZdP.transferownership.call(addressxuRa25, {from: accounts[4]});
		const boolor9Uzrk = await WOLFTcVaZdP.transferFrom.call(addressLOcDIUZ, addressfD90Rjv, uintTbmEQVg, {from: accounts[0]});
		const boolSclTvU = await WOLFTcVaZdP.transferownership.call(addressq8GIlp8, {from: accounts[0]});
		const boolvDwTxEs = await WOLFTcVaZdP.transferFrom.call(addressg8EWEUn, addressE1TMcDf, uintTFJCUe, {from: accounts[0]});
		const boolt695oR = await WOLFTcVaZdP.transferownership.call(addressvOW851, {from: accounts[2]});

		assert.equal(bool8NpoB3, true)
		assert.equal(boolMuSfgQY, true)
		assert.equal(booloTar7ib, true)
		await expect(WOLFTcVaZdP.transferownership.call(addressLWwfChZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const strings1fTU2N = "mRTzfepT84AS4gIVRu1LdzQdocj6UlrKqY0s1lOzHbIz"
		const stringde33DDG = "4pkos6H3tR3G16cC96uyBqw6MPpD7boTbYyHW19"
		const uintAGqcTHc = BigInt("287")
		const WOLFTcVaZdP = await WOLF.new(strings1fTU2N, stringde33DDG, uintAGqcTHc, {from: accounts[1]});
		const uintViBq9W = BigInt("156")
		const addressqswfeGg = accounts[1]
		const uintojPMZxk = BigInt("14")
		const addresswKAhhS = "0x00000000000000000000000000000000000000-1"
		const uinthLMpvqq = BigInt("1029")
		const addressdfb887 = accounts[5]
		const uintmzTcVrI = BigInt("371")
		const addresssXkerNH = accounts[1]
		const address8msy4x = "0x0000000000000000000000000000000000000001"
		const uintCobBGIJ = BigInt("1575")
		const addressaxXMgjI = accounts[5]
		const addressopMD222 = accounts[1]
		const uintW1XEwyp = BigInt("942")
		const addressDdklKLU = accounts[2]
		const booliE6dC6t = await WOLFTcVaZdP.approveAndCall.call(addressqswfeGg, uintViBq9W, {from: accounts[1]});
		const boolwGMFONs = await WOLFTcVaZdP.transfer.call(addresswKAhhS, uintojPMZxk, {from: accounts[3]});
		const boolOHTv7SP = await WOLFTcVaZdP.transfer.call(addressdfb887, uinthLMpvqq, {from: accounts[4]});
		const boolnBo60lV = await WOLFTcVaZdP.transferFrom.call(address8msy4x, addresssXkerNH, uintmzTcVrI, {from: accounts[0]});
		const boolIaWy5sA = await WOLFTcVaZdP.transferFrom.call(addressopMD222, addressaxXMgjI, uintCobBGIJ, {from: accounts[4]});
		const boolVpyUIz = await WOLFTcVaZdP.approveAndCall.call(addressDdklKLU, uintW1XEwyp, {from: accounts[2]});

		assert.equal(booliE6dC6t, true)
		await expect(WOLFTcVaZdP.transfer.call(addresswKAhhS, uintojPMZxk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const strings1fTU2N = "mRTzfepT84AS4gIVRu1LdzQdocj6UlrKqY0s1lOzHbIz"
		const stringde33DDG = "4pkos6H3tR3G16cC96uyBqw6MPpD7boTbYyHW19"
		const uintqwvHZIF = BigInt("287")
		const WOLFTcVaZdP = await WOLF.new(strings1fTU2N, stringde33DDG, uintqwvHZIF, {from: accounts[1]});
		const uintpdKbVGG = BigInt("790")
		const addressCScnmje = accounts[4]
		const uintNXmd0Zz = BigInt("0")
		const addressFu64ExJ = accounts[4]
		const uint4fpW7V = BigInt("405")
		const addressJgjy3sY = accounts[0]
		const addressqOdOcjX = accounts[4]
		const bool8NpoB3 = await WOLFTcVaZdP.approveAndCall.call(addressCScnmje, uintpdKbVGG, {from: accounts[1]});
		const boolyeH8VVU = await WOLFTcVaZdP.approveAndCall.call(addressFu64ExJ, uintNXmd0Zz, {from: accounts[1]});
		const boolmigyMYK = await WOLFTcVaZdP.transfer.call(addressJgjy3sY, uint4fpW7V, {from: accounts[2]});
		const boolt695oR = await WOLFTcVaZdP.transferownership.call(addressqOdOcjX, {from: accounts[2]});

		assert.equal(bool8NpoB3, true)
		assert.equal(boolyeH8VVU, true)
		await expect(WOLFTcVaZdP.transfer.call(addressJgjy3sY, uint4fpW7V, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})