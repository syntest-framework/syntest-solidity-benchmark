const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringPlvifiX = "K8tV9x1kpo7eTGEpejXNAGSuAtqBwXmuLry4RTrV3MIeek3qqqGTNmnMzvumuxSjQ2kM"
		const stringAZb2HPM = "qw42WrXgfS4TX0AjnxJsOP5iy5Ix4NUwZxDtLimgYLahNUeQT"
		const uintxseB5Kt = BigInt("650")
		const FinalwcgwSIL = await Final.new(stringPlvifiX, stringAZb2HPM, uintxseB5Kt, {from: accounts[5]});
		const uintKvai0mv = BigInt("1405")
		const addressHFTrM2g = accounts[4]
		const address5olq3O = accounts[2]
		const uintNIQkThc = BigInt("466")
		const addressYmEtfUU = accounts[0]
		const uintIRKtBpm = BigInt("677")
		const addressTwmIeRV = accounts[5]
		const uint39vZFw = BigInt("508")
		const addressbYsg8ai = accounts[3]
//		const booli8muVwq = await FinalwcgwSIL.transferFrom.call(address5olq3O, addressHFTrM2g, uintKvai0mv, {from: accounts[0]});
//		const stringjCb1Q3o = await FinalwcgwSIL.name.call({from: accounts[3]});
//		const boolab5KRYQ = await FinalwcgwSIL.transfer.call(addressYmEtfUU, uintNIQkThc, {from: accounts[5]});
//		const boolWIhwTV = await FinalwcgwSIL.approve.call(addressTwmIeRV, uintIRKtBpm, {from: accounts[3]});
//		const boolvhfQIxl = await FinalwcgwSIL.approve.call(addressbYsg8ai, uint39vZFw, {from: accounts[3]});

		await expect(FinalwcgwSIL.transferFrom.call(address5olq3O, addressHFTrM2g, uintKvai0mv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringSo8haya = "oRfHiKHV1li"
		const stringWm5sK39 = "TgVUVwgz9oKp0Kusy0k7gJgDBPiPq9jX1mDmJ"
		const uintFPbJqAP = BigInt("202")
		const FinalipTvK2R = await Final.new(stringSo8haya, stringWm5sK39, uintFPbJqAP, {from: accounts[5]});
		const addressNveguND = accounts[5]
		const uintB2vmPPp = BigInt("1463")
		const addressvk23ff0 = accounts[3]
		const uintO9PZqs4 = BigInt("94")
		const addressYBtA29E = accounts[2]
		const uintaVzM14b = BigInt("789")
		const addressonSzTBY = accounts[2]
		const uint8ziPORb7 = await FinalipTvK2R.decimals.call({from: accounts[3]});
		const uintsFVVNAu = await FinalipTvK2R.balanceOf.call(addressNveguND, {from: accounts[0]});
		const uintGhXZ9Ju = await FinalipTvK2R.totalSupply.call({from: accounts[1]});
		const booliM1AyJj = await FinalipTvK2R.approve.call(addressvk23ff0, uintB2vmPPp, {from: accounts[4]});
//		const boolWM599BS = await FinalipTvK2R.increaseAllowance.call(addressYBtA29E, uintO9PZqs4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGFv7ZgR = await FinalipTvK2R.transfer.call(addressonSzTBY, uintaVzM14b, {from: accounts[4]});

		assert.equal(booliM1AyJj, true)
		assert.equal(uint8ziPORb7, BigInt("18"))
		assert.equal(uintGhXZ9Ju, BigInt("202000000000000000000"))
		assert.equal(uintsFVVNAu, BigInt("202000000000000000000"))
		await expect(FinalipTvK2R.increaseAllowance.call(addressYBtA29E, uintO9PZqs4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringEOh2B1U = "cpMm8BeNL2FS"
		const stringvwoUPAd = "dePSQQWDKU3xszBwLDe5npMgoQoD83pbdHuPbmhpkUw5L7TJV8GjAgzLtQ0"
		const uintvelSJcj = BigInt("27")
		const FinalW1Dc1rZ = await Final.new(stringEOh2B1U, stringvwoUPAd, uintvelSJcj, {from: accounts[2]});
		const uintM98x4Ll = BigInt("792")
		const addresskzy9n6g = accounts[1]
		const uintoOrnDU9 = BigInt("572")
		const addressF0IwAy = accounts[1]
		const uintffoMMUg = BigInt("49")
		const addressNaooZ0x = accounts[5]
//		const boolr16tzze = await FinalW1Dc1rZ.transfer.call(addresskzy9n6g, uintM98x4Ll, {from: accounts[4]});
//		const boolKKrR1OK = await FinalW1Dc1rZ.transfer.call(addressF0IwAy, uintoOrnDU9, {from: accounts[3]});
//		const boolj6ZGyf3 = await FinalW1Dc1rZ.transfer.call(addressNaooZ0x, uintffoMMUg, {from: accounts[0]});

		await expect(FinalW1Dc1rZ.transfer.call(addresskzy9n6g, uintM98x4Ll, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringT0a6C2 = "LR8e9quC5MzyYgDBlXtsKx0uP"
		const stringg7xLQkf = "kfhpaHOoqKGdBMVeyVlbYCfls8sJp4quvUFQKk2ISRML9MLxxC"
		const uintrRcSwPb = BigInt("64")
		const FinalUKJLUZQ = await Final.new(stringT0a6C2, stringg7xLQkf, uintrRcSwPb, {from: accounts[3]});
		const uintuTdetun = BigInt("860")
		const addresswp3F3qa = accounts[1]
		const addresstgufLLO = accounts[1]
		const addressQ42BJF = accounts[3]
		const addressi6TkT4e = accounts[4]
		const addressPok7EBZ = accounts[3]
		const uintuLZnIC = BigInt("1251")
		const addressbpzfAfS = accounts[4]
//		const boolfO2euCG = await FinalUKJLUZQ.approveAndCall.call(addresswp3F3qa, uintuTdetun, {from: accounts[4]});
//		const stringPUzIfWP = await FinalUKJLUZQ.name.call({from: accounts[0]});
//		const uintXZjzWVT = await FinalUKJLUZQ.allowance.call(addressQ42BJF, addresstgufLLO, {from: accounts[0]});
//		const uintcYZN1Wa = await FinalUKJLUZQ.allowance.call(addressPok7EBZ, addressi6TkT4e, {from: accounts[2]});
//		const boolnXbfgx = await FinalUKJLUZQ.increaseAllowance.call(addressbpzfAfS, uintuLZnIC, {from: accounts[2]});

		await expect(FinalUKJLUZQ.approveAndCall.call(addresswp3F3qa, uintuTdetun, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringqJys7g = "ySIeVQ1GZUcmKlUHX4kGLzJnyWPLeJBqwgSJ6maGZnrWrE6tUUWvgVZQEk9JLewzleavVfzZjmu6rP2TIrBB"
		const stringkRPfu1A = "ZjmrwOxlMQQrG"
		const uintjZpVnZ = BigInt("1518")
		const FinalqQ3xH1g = await Final.new(stringqJys7g, stringkRPfu1A, uintjZpVnZ, {from: accounts[1]});
		const addressG3D5B4T = accounts[0]
		const addressYzH0eGW = accounts[4]
		const uintc7NB9An = await FinalqQ3xH1g.balanceOf.call(addressG3D5B4T, {from: accounts[2]});
		const uint8NPiC44C = await FinalqQ3xH1g.decimals.call({from: accounts[2]});
//		const boolzKOQtaE = await FinalqQ3xH1g.transferownership.call(addressYzH0eGW, {from: accounts[2]});
//		const uint8FhHr1MH = await FinalqQ3xH1g.decimals.call({from: accounts[3]});

		assert.equal(uint8NPiC44C, BigInt("18"))
		assert.equal(uintc7NB9An, BigInt("0"))
		await expect(FinalqQ3xH1g.transferownership.call(addressYzH0eGW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringqJys7g = "ySIeVQ1GZUcmKlUHX4kGLzJnyWPLeJBqwgSJ6maGZnrWrE6tUUWvgVZQEk9JLewzleavVfzZjmu6rP2TIrBB"
		const stringkRPfu1A = "ZjmrwOxlMQQrG"
		const uintxDPBvzu = BigInt("1518")
		const FinalqQ3xH1g = await Final.new(stringqJys7g, stringkRPfu1A, uintxDPBvzu, {from: accounts[1]});
		const addressN7Op8aE = accounts[0]
		const uintWNUTBfi = BigInt("1994")
		const addressd7xg4F = accounts[2]
		const addressCCldNkS = accounts[1]
		const uintyGsTmmN = BigInt("1631")
		const addressIZChtvr = accounts[3]
		const addressE2z9sOS = accounts[4]
		const uintrWcImi4 = BigInt("448")
		const addressz9FIY4x = accounts[1]
		const uintc7NB9An = await FinalqQ3xH1g.balanceOf.call(addressN7Op8aE, {from: accounts[2]});
		const boold5u6W1V = await FinalqQ3xH1g.transferFrom.call(addressCCldNkS, addressd7xg4F, uintWNUTBfi, {from: accounts[1]});
//		const boolfLCm22L = await FinalqQ3xH1g.transfer.call(addressIZChtvr, uintyGsTmmN, {from: accounts[3]});
//		const boolzKOQtaE = await FinalqQ3xH1g.transferownership.call(addressE2z9sOS, {from: accounts[2]});
//		const boolyqtI1il = await FinalqQ3xH1g.approveAndCall.call(addressz9FIY4x, uintrWcImi4, {from: accounts[5]});
//		const uint8FhHr1MH = await FinalqQ3xH1g.decimals.call({from: accounts[3]});

		assert.equal(boold5u6W1V, true)
		assert.equal(uintc7NB9An, BigInt("0"))
		await expect(FinalqQ3xH1g.transfer.call(addressIZChtvr, uintyGsTmmN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringnNdczYU = "bU7PRKAf4wmD2O6nS5G"
		const stringLcDh2si = "7mR9W2IZNLHyz64ATNUrFfMGfH75gnYOrNzBwIYyChvMgbhedvBKCTl1iXHNCtV5l1yjQ5qbjRD"
		const uintPNBFhRb = BigInt("43")
		const FinalH6jjLxf = await Final.new(stringnNdczYU, stringLcDh2si, uintPNBFhRb, {from: accounts[3]});
		const addressj5sRNbC = accounts[3]
		const address8hRjkC = accounts[1]
		const addressqo55GTm = accounts[0]
		const addressUcPTY9Q = accounts[0]
		const uintDlJi9dV = await FinalH6jjLxf.balanceOf.call(addressj5sRNbC, {from: accounts[0]});
		const uintouAieJr = await FinalH6jjLxf.totalSupply.call({from: accounts[0]});
		const boolLIeYMSU = await FinalH6jjLxf.transferownership.call(address8hRjkC, {from: accounts[3]});
		const uintUSMlqIa = await FinalH6jjLxf.totalSupply.call({from: accounts[4]});
		const uintcHAErSh = await FinalH6jjLxf.allowance.call(addressUcPTY9Q, addressqo55GTm, {from: accounts[0]});
		const uint8mkesOZ = await FinalH6jjLxf.decimals.call({from: accounts[4]});

		assert.equal(boolLIeYMSU, true)
		assert.equal(uint8mkesOZ, BigInt("18"))
		assert.equal(uintDlJi9dV, BigInt("43000000000000000000"))
		assert.equal(uintUSMlqIa, BigInt("43000000000000000000"))
		assert.equal(uintcHAErSh, BigInt("0"))
		assert.equal(uintouAieJr, BigInt("43000000000000000000"))
	});

	it('test for Final', async () => {
		const stringEOh2B1U = "cpMm8BeNL2FS"
		const stringvwoUPAd = "dePSQQWDKU3xszBwLDe5npMgoQoD83pbdHuPbmhpkUw5L7TJV8GjAgzLtQ0"
		const uintwaIchrR = BigInt("27")
		const FinalW1Dc1rZ = await Final.new(stringEOh2B1U, stringvwoUPAd, uintwaIchrR, {from: accounts[2]});
		const uintlr01Fib = BigInt("899")
		const addresshxqqQjL = accounts[2]
		const uintNgIwBQY = BigInt("537")
		const addressUgzGOZB = accounts[1]
		const addressyqkij7z = accounts[1]
		const uintAf0ZZi = BigInt("792")
		const addressLOmkSeO = accounts[1]
		const boolYEG5JtD = await FinalW1Dc1rZ.approveAndCall.call(addresshxqqQjL, uintlr01Fib, {from: accounts[2]});
//		const booly5TWBi9 = await FinalW1Dc1rZ.decreaseAllowance.call(addressUgzGOZB, uintNgIwBQY, {from: accounts[2]});
//		const boolhd4QFXM = await FinalW1Dc1rZ.transferownership.call(addressyqkij7z, {from: accounts[2]});
//		const boolr16tzze = await FinalW1Dc1rZ.transfer.call(addressLOmkSeO, uintAf0ZZi, {from: accounts[4]});

		assert.equal(boolYEG5JtD, true)
		await expect(FinalW1Dc1rZ.decreaseAllowance.call(addressUgzGOZB, uintNgIwBQY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string2Xc3xe = "7oPXKu6I2Q6eqOxlKykuoNcKLsQ6nzhKAqN6DqupUYN5vXInXpbfqoZp0Y4P0M90e2vcQeVGrdE3BlKNou7Lg7CKqg4eLch"
		const stringKaav8S8 = "YiRVJW8gazUyw"
		const uintA0Y2VLy = BigInt("157")
		const FinalzyLlOEY = await Final.new(string2Xc3xe, stringKaav8S8, uintA0Y2VLy, {from: "0x0000000000000000000000000000000000000001"});
		const uintZnNuVWt = BigInt("467")
		const addressifyQkoY = accounts[4]
		const addressK1aGyl2 = accounts[2]
		const uintPeor71k = BigInt("981")
		const addressvSW9rTc = "0x0000000000000000000000000000000000000001"
		const uintlgoemhQ = BigInt("284")
		const addresscT7YMYs = accounts[2]
		const uint8ZWJAmR = await FinalzyLlOEY.decimals.call({from: accounts[1]});
		const stringm0po9QJ = await FinalzyLlOEY.symbol.call({from: accounts[1]});
		const boollWyxGrh = await FinalzyLlOEY.transferFrom.call(addressK1aGyl2, addressifyQkoY, uintZnNuVWt, {from: accounts[4]});
		const boolDRyeb6r = await FinalzyLlOEY.approve.call(addressvSW9rTc, uintPeor71k, {from: accounts[5]});
		const booldTvMogj = await FinalzyLlOEY.approveAndCall.call(addresscT7YMYs, uintlgoemhQ, {from: accounts[4]});
	});

	it('test for Final', async () => {
		const stringtSBb7IE = "dw8Pfu2tiWmJR3BmiaiVuGNNoPFbOlUYHO6MCpNMvBM5z1UL4gxIgdc10e7JvqrpxI7y8A6TWe6kaXg3pSD8cOynr"
		const stringQpW0cJU = "KNAosLJ9Mwc6j228DPRWoGMaQYqU68cY09jsTbKb3NYTzbKmZfbFqzuC2WM4IwbFdVjfowTq6Ss56wj64B8KaRG"
		const uintRzeu07t = BigInt("6")
		const FinalpNgjuCB = await Final.new(stringtSBb7IE, stringQpW0cJU, uintRzeu07t, {from: accounts[0]});
		const uintXrEWba6 = BigInt("0")
		const addressgfWEyV = accounts[3]
		const uintxDjty9 = BigInt("333")
		const addressGvRWFUn = accounts[0]
		const uinte3jpn1j = BigInt("953")
		const addressaWWxgnv = accounts[0]
		const boolQYKjoLq = await FinalpNgjuCB.transfer.call(addressgfWEyV, uintXrEWba6, {from: accounts[3]});
//		const boolc2izt9p = await FinalpNgjuCB.transfer.call(addressGvRWFUn, uintxDjty9, {from: accounts[2]});
//		const boolBsI6puL = await FinalpNgjuCB.transfer.call(addressaWWxgnv, uinte3jpn1j, {from: accounts[2]});

		assert.equal(boolQYKjoLq, true)
		await expect(FinalpNgjuCB.transfer.call(addressGvRWFUn, uintxDjty9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})