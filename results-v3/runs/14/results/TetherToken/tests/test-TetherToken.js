const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintK8mUsvH = BigInt("255")
		const string9br7ui = "Efg7fAr6l2Lg6OU78N5VwvoX8Djs1uk6mwCJaDTDG7hOx8GmSXpxnYpC3MR8PolznrUFHymQGFpr9y6BifsA"
		const stringxfCz9c4 = "1DDgKQYdyOqwNli2XrhGyPv0WEQsrKNLkJvcdzfMFsXtbP6U1rXMe82YIAxUBNk8neU9JsHK7J8g8CAgMdYSrcFt8E4Eip19K"
		const uintrB2y9au = BigInt("1641")
		const TetherTokenFe5lZ4H = await TetherToken.new(uintK8mUsvH, string9br7ui, stringxfCz9c4, uintrB2y9au, {from: accounts[2]});
		const uintmMEzzSh = BigInt("508")
		const uintEeD0LUs = BigInt("1876")
		const uintho0wV2 = BigInt("1494")
		const addresseqUGR1M = accounts[3]
		const addressBqOUBAS = accounts[4]
		const uinthduF0B = await TetherTokenFe5lZ4H.totalSupply.call({from: accounts[1]});
		const uintCtnsUb = await TetherTokenFe5lZ4H.totalSupply.call({from: accounts[0]});
		const uintghHearG = await TetherTokenFe5lZ4H.setParams.call(uintEeD0LUs, uintmMEzzSh, {from: accounts[1]});
		const addressMbRHZmF = await TetherTokenFe5lZ4H.transferFrom.call(addressBqOUBAS, addresseqUGR1M, uintho0wV2, {from: accounts[1]});

		assert.equal(uintCtnsUb, BigInt("255"))
		assert.equal(uinthduF0B, BigInt("255"))
		await expect(TetherTokenFe5lZ4H.setParams.call(uintEeD0LUs, uintmMEzzSh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintWxaG2kn = BigInt("1875")
		const stringnLHczcL = "Tc9y2CA5yBFAXW3ItMKSTdguS89XhywGGaUYburg9NXJUfaAymPE"
		const stringzJsJJFd = "zz4OYUBAPGaTtCaju3SMlY0VEFflzmQA9achxnh"
		const uintHO2EHW2 = BigInt("1158")
		const TetherToken13WXNW = await TetherToken.new(uintWxaG2kn, stringnLHczcL, stringzJsJJFd, uintHO2EHW2, {from: accounts[4]});
		const addresswI4bsTK = accounts[4]
		const uintvcmBkLG = BigInt("468")
		const addressaZSKuhg = accounts[3]
		const uintbRPlxcr = BigInt("1579")
		const addressyHc3p8V = accounts[0]
		const uintXUOf6iZ = await TetherToken13WXNW.balanceOf.call(addresswI4bsTK, {from: accounts[2]});
		const uintEme7u4w = await TetherToken13WXNW.totalSupply.call({from: accounts[5]});
		const addressqAsE4s = await TetherToken13WXNW.approve.call(addressaZSKuhg, uintvcmBkLG, {from: accounts[4]});
		const address88ctYL = await TetherToken13WXNW.approve.call(addressyHc3p8V, uintbRPlxcr, {from: accounts[1]});

		assert.equal(uintEme7u4w, BigInt("1875"))
		assert.equal(uintXUOf6iZ, BigInt("1875"))
	});

	it('test for TetherToken', async () => {
		const uintVtunwHj = BigInt("303")
		const stringKJqYVKh = "yCL19s1eqdiAKeMVz3GPSEkBejBFGD23AubuBTVylgKR3Xtw9Adp3o5EFxbDvTQz8LGeN7Sv53oAT3KKS0UAz4bCy7gMaK"
		const stringKcaNOAu = "hi07nGo5siDj"
		const uintWdGcSLn = BigInt("636")
		const TetherTokenudenegd = await TetherToken.new(uintVtunwHj, stringKJqYVKh, stringKcaNOAu, uintWdGcSLn, {from: accounts[1]});
		const uintR6tDAJH = BigInt("1010")
		const addressc6sIv7l = accounts[3]
		const uintK4Itwng = BigInt("1476")
		const addressiTCb8U = accounts[3]
		const addressX7p44Q = accounts[1]
		const addressnotXoxb = "0x0000000000000000000000000000000000000001"
		const addressdSvoitR = accounts[0]
		const uintzLyCwsJ = await TetherTokenudenegd.totalSupply.call({from: accounts[3]});
		const addressc36CTBu = await TetherTokenudenegd.approve.call(addressc6sIv7l, uintR6tDAJH, {from: accounts[3]});
		const addressA7UjbaP = await TetherTokenudenegd.transferFrom.call(addressX7p44Q, addressiTCb8U, uintK4Itwng, {from: accounts[3]});
		const uintKeiI7Wu = await TetherTokenudenegd.allowance.call(addressdSvoitR, addressnotXoxb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintzLyCwsJ, BigInt("303"))
		await expect(TetherTokenudenegd.transferFrom.call(addressX7p44Q, addressiTCb8U, uintK4Itwng, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintjZ3cZvF = BigInt("318")
		const stringB0erMro = "7OcnM6qGf4mHkPCGDR7mbJcPBggpyuF18MjyTTKUI4Pra8T0No0IZC25KOkHuEUjugxgaD1WjkI"
		const stringsYhe85 = "1FBAVGtvyuqHPsdVklhJJlng4Mi3EfGJMdGU8pMOy1uZJwIoafNmAyYuu4g0rzl5P9FkGwykik5Gsh9qBytFgnOi2HPs"
		const uintKLeaQjV = BigInt("796")
		const TetherTokenW3kMLV8 = await TetherToken.new(uintjZ3cZvF, stringB0erMro, stringsYhe85, uintKLeaQjV, {from: accounts[1]});
		const addressWrNqMuG = accounts[5]
		const addressIdVndjs = accounts[0]
		const uintp9l7fAG = await TetherTokenW3kMLV8.allowance.call(addressIdVndjs, addressWrNqMuG, {from: accounts[4]});
		const uinttql34S = await TetherTokenW3kMLV8.totalSupply.call({from: accounts[2]});

		assert.equal(uintp9l7fAG, BigInt("0"))
		assert.equal(uinttql34S, BigInt("318"))
	});

	it('test for TetherToken', async () => {
		const uintq2FfCrg = BigInt("1843")
		const stringX3IUCRz = "yuPHzVl1fgerU0srgapP7AaO4qalFRjQSBX5RaPwr4ONagsWrsD"
		const stringaE3Rlh = "e9EVSoyo6tGDQE4uwDMiSYb8y4pKmV1QUV0F1P5lq3jydmbEJsAMerjQ4JIpTdDQgzxkFJ5Db2hivqQsVSvIFgtFnRuyQC"
		const uintXAe5PYI = BigInt("1292")
		const TetherTokenodWKWVX = await TetherToken.new(uintq2FfCrg, stringX3IUCRz, stringaE3Rlh, uintXAe5PYI, {from: accounts[4]});
		const uintlr7JMzz = BigInt("1200")
		const addressWX5Zn19 = accounts[0]
		const uintdWo6vzR = BigInt("471")
		const uintsKVB1BD = BigInt("569")
		const addressvJUaQ1 = accounts[2]
		const addresszPx6RjM = accounts[3]
		const addressQNpPU7y = await TetherTokenodWKWVX.approve.call(addressWX5Zn19, uintlr7JMzz, {from: accounts[4]});
		const uintTHwkFYO = await TetherTokenodWKWVX.issue.call(uintdWo6vzR, {from: accounts[0]});
		const addressY0itWb4 = await TetherTokenodWKWVX.transferFrom.call(addresszPx6RjM, addressvJUaQ1, uintsKVB1BD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokenodWKWVX.issue.call(uintdWo6vzR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uint1aQT1a = BigInt("358")
		const stringxKah5MW = "TBk8N3zaLu6XzsxijjwWYOsMwMYmDiQlGPUxlzQQjEWv3843EKmIgedDKlBnUE4JhTQsef9KvbfaUjujBONoX72FyPy8GChQV"
		const stringAPIIUq = "0GfGezfYL6Y92mhM1NzacdawFiHf8wXxMgROdA79qy"
		const uintBOtaiiU = BigInt("349")
		const TetherTokenYscDuvu = await TetherToken.new(uint1aQT1a, stringxKah5MW, stringAPIIUq, uintBOtaiiU, {from: "0x0000000000000000000000000000000000000001"});
		const uintN5dStct = BigInt("1890")
		const addressndIKmRy = accounts[3]
		const addressc31ANYg = accounts[3]
		const uintcyv0BwR = BigInt("756")
		const uintbOY4nSI = BigInt("716")
		const addressM2ubZV = accounts[0]
		const uintNndHgVu = BigInt("688")
		const uintAR5zDG7 = BigInt("1735")
		const addresssvWSV82 = await TetherTokenYscDuvu.approve.call(addressndIKmRy, uintN5dStct, {from: accounts[0]});
		const addresstmRtFff = await TetherTokenYscDuvu.deprecate.call(addressc31ANYg, {from: accounts[0]});
		const uintDeJExOW = await TetherTokenYscDuvu.redeem.call(uintcyv0BwR, {from: accounts[4]});
		const addressgjekl5K = await TetherTokenYscDuvu.approve.call(addressM2ubZV, uintbOY4nSI, {from: accounts[2]});
		const uintwoBeXPj = await TetherTokenYscDuvu.issue.call(uintNndHgVu, {from: accounts[1]});
		const uintBuuv9nU = await TetherTokenYscDuvu.issue.call(uintAR5zDG7, {from: accounts[4]});
	});

	it('test for TetherToken', async () => {
		const uintTdvQ2P = BigInt("76")
		const stringtxLgWzl = "lwurbuG6o07fovFOOrxOj"
		const stringHNcW7CR = "CZtXEkOADI6t84zF77cfl9cL6CK2XYkuYLz7q55Yl6Lu9Ln9xGPQPREj4cniF1ZYJr9K"
		const uintSgNybC6 = BigInt("494")
		const TetherTokenEpsqXcn = await TetherToken.new(uintTdvQ2P, stringtxLgWzl, stringHNcW7CR, uintSgNybC6, {from: accounts[4]});
		const uintUTwFW4d = BigInt("452")
		const addressaPEOKx = accounts[0]
		const addressojtx0Bs = accounts[1]
		const uintJt3TNL = BigInt("1728")
		const uintoVSRbJO = BigInt("86")
		const uintrVZ51c = BigInt("1755")
		const addresso42IftW = "0x0000000000000000000000000000000000000001"
		const addressabKjmXA = await TetherTokenEpsqXcn.transfer.call(addressaPEOKx, uintUTwFW4d, {from: accounts[1]});
		const uintJVeBTXD = await TetherTokenEpsqXcn.balanceOf.call(addressojtx0Bs, {from: accounts[3]});
		const uintBTamBH0 = await TetherTokenEpsqXcn.setParams.call(uintoVSRbJO, uintJt3TNL, {from: accounts[0]});
		const addressubbchdK = await TetherTokenEpsqXcn.approve.call(addresso42IftW, uintrVZ51c, {from: accounts[4]});
		const uintwxwH1gL = await TetherTokenEpsqXcn.totalSupply.call({from: accounts[4]});

		await expect(TetherTokenEpsqXcn.transfer.call(addressaPEOKx, uintUTwFW4d, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uint0H49YU = BigInt("303")
		const stringKJqYVKh = "yCL19s1eqdiAKeMVz3GPSEkBejBFGD23AubuBTVylgKR3Xtw9Adp3o5EFxbDvTQz8LGeN7Sv53oAT3KKS0UAz4bCy7gMaK"
		const stringKcaNOAu = "hi07nGo5siDj"
		const uintpz6YbKQ = BigInt("636")
		const TetherTokenudenegd = await TetherToken.new(uint0H49YU, stringKJqYVKh, stringKcaNOAu, uintpz6YbKQ, {from: accounts[1]});
		const uintS7TdxYZ = BigInt("1010")
		const addressSre2HFG = accounts[4]
		const uintEGN8f5O = BigInt("503")
		const uintzHRlRyH = BigInt("1476")
		const addressdQGwkYF = accounts[3]
		const addressJuDuNPt = accounts[1]
		const addressVKGBSP = "0x0000000000000000000000000000000000000001"
		const addressE6xAyf4 = accounts[0]
		const uintzLyCwsJ = await TetherTokenudenegd.totalSupply.call({from: accounts[3]});
		const addressc36CTBu = await TetherTokenudenegd.approve.call(addressSre2HFG, uintS7TdxYZ, {from: accounts[3]});
		const uintVHk6Jwm = await TetherTokenudenegd.redeem.call(uintEGN8f5O, {from: "0x0000000000000000000000000000000000000001"});
		const addressA7UjbaP = await TetherTokenudenegd.transferFrom.call(addressJuDuNPt, addressdQGwkYF, uintzHRlRyH, {from: accounts[3]});
		const uintKeiI7Wu = await TetherTokenudenegd.allowance.call(addressE6xAyf4, addressVKGBSP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintzLyCwsJ, BigInt("303"))
		await expect(TetherTokenudenegd.redeem.call(uintEGN8f5O, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintDhVUllq = BigInt("303")
		const stringKJqYVKh = "yCL19s1eqdiAKeMVz3GPSEkBejBFGD23AubuBTVylgKR3Xtw9Adp3o5EFxbDvTQz8LGeN7Sv53oAT3KKS0UAz4bCy7gMaK"
		const stringKcaNOAu = "hi07nGo5siDj"
		const uintK54NBC3 = BigInt("636")
		const TetherTokenudenegd = await TetherToken.new(uintDhVUllq, stringKJqYVKh, stringKcaNOAu, uintK54NBC3, {from: accounts[1]});
		const addresslmnt3ZY = accounts[1]
		const addressSnved3m = accounts[4]
		const uintWvmsjTo = BigInt("1010")
		const addressuzCsSkg = accounts[3]
		const uintgk5RyJc = BigInt("1476")
		const addresscbl5mNT = accounts[3]
		const addressmEH36xC = accounts[1]
		const addressodXMVTl = "0x0000000000000000000000000000000000000001"
		const addresswT9Md1Q = accounts[1]
		const addresspihW5w = await TetherTokenudenegd.deprecate.call(addresslmnt3ZY, {from: accounts[2]});
		const uintzLyCwsJ = await TetherTokenudenegd.totalSupply.call({from: accounts[3]});
		const uintcEtVRij = await TetherTokenudenegd.balanceOf.call(addressSnved3m, {from: accounts[0]});
		const addressc36CTBu = await TetherTokenudenegd.approve.call(addressuzCsSkg, uintWvmsjTo, {from: accounts[3]});
		const addressA7UjbaP = await TetherTokenudenegd.transferFrom.call(addressmEH36xC, addresscbl5mNT, uintgk5RyJc, {from: accounts[3]});
		const uintKeiI7Wu = await TetherTokenudenegd.allowance.call(addresswT9Md1Q, addressodXMVTl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokenudenegd.deprecate.call(addresslmnt3ZY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})