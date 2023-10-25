const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringhuLj5u4 = "3Ydb72VO1rbjOPdJDiQ1rUva3h"
		const stringlb1vW4j = "xK7aVuWKzeiWkmI3Ljdtpq3eeicRH6sh6a9yHXRDdTuNuAyCPGzGK3Fcg5kKapNcofeVqYF9RiRPIvCIcCy9zWCjR85T0"
		const uintKRwo0kD = BigInt("649")
		const DipexR7l28gw = await Dipex.new(stringhuLj5u4, stringlb1vW4j, uintKRwo0kD, {from: accounts[0]});
		const uintvM0gYNb = BigInt("1689")
		const addressgzcWu7t = "0x0000000000000000000000000000000000000001"
		const addressXlMMSbk = accounts[0]
		const uintEdXzCAV = BigInt("985")
		const addressXGT7fw = accounts[1]
		const uintOKgFVmc = BigInt("543")
		const addressOj3z4NV = accounts[5]
		const boolMrNgaSm = await DipexR7l28gw.transferFrom.call(addressXlMMSbk, addressgzcWu7t, uintvM0gYNb, {from: accounts[3]});
		const boolm4FS74I = await DipexR7l28gw.transfer.call(addressXGT7fw, uintEdXzCAV, {from: accounts[2]});
		const boolYYaN9Rc = await DipexR7l28gw.approveAndCall.call(addressOj3z4NV, uintOKgFVmc, {from: accounts[1]});

		await expect(DipexR7l28gw.transferFrom.call(addressXlMMSbk, addressgzcWu7t, uintvM0gYNb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringGHQcQca = "N0M0tn3Z"
		const string968ZxL = "haFqJQS0D9MV99Q1m1svG70r7PkufOkqCifisR3zW"
		const uintnkAysP = BigInt("86")
		const DipexRH3nxP7 = await Dipex.new(stringGHQcQca, string968ZxL, uintnkAysP, {from: accounts[4]});
		const uintRm9c20e = BigInt("1900")
		const addresskFBz8dH = accounts[2]
		const uintrvp72nN = BigInt("487")
		const addressLKQ4xKD = accounts[0]
		const addressv3e1K8a = accounts[0]
		const boolofoEysv = await DipexRH3nxP7.approveAndCall.call(addresskFBz8dH, uintRm9c20e, {from: accounts[5]});
		const boolck9Z9w4 = await DipexRH3nxP7.approve.call(addressLKQ4xKD, uintrvp72nN, {from: accounts[4]});
		const boolcOjiRF = await DipexRH3nxP7.transferownership.call(addressv3e1K8a, {from: accounts[0]});

		await expect(DipexRH3nxP7.approveAndCall.call(addresskFBz8dH, uintRm9c20e, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringJS1iljE = "5JSPxUi4WD1ANGf8mtYoLEvOpKExbd5T6Zlj6FACObla0Ga"
		const stringb7u86YD = "vpNfXBDYy7EfTSPHYq68X"
		const uinth5bsUpl = BigInt("1297")
		const DipexN50vZ2W = await Dipex.new(stringJS1iljE, stringb7u86YD, uinth5bsUpl, {from: accounts[1]});
		const uintVR2TOxH = BigInt("1145")
		const addressUz9le8t = accounts[2]
		const addressCGfwvZ6 = accounts[2]
		const uintVDRI70j = BigInt("1282")
		const addressYuOF1po = accounts[1]
		const uintsVt6A8u = BigInt("612")
		const addressXDCivgg = accounts[4]
		const uintO4SCp7 = BigInt("1168")
		const addressWp05Oq = accounts[1]
		const addressXILNcv = accounts[0]
		const uintaIVbGlN = BigInt("1989")
		const addressjTjeyGy = accounts[2]
		const uintRZWc6tD = BigInt("1885")
		const addressVwYbCAo = accounts[5]
		const boolR37D3P4 = await DipexN50vZ2W.transferFrom.call(addressCGfwvZ6, addressUz9le8t, uintVR2TOxH, {from: accounts[2]});
		const boolejNvsOQ = await DipexN50vZ2W.approveAndCall.call(addressYuOF1po, uintVDRI70j, {from: accounts[3]});
		const boolK5EFjKA = await DipexN50vZ2W.approve.call(addressXDCivgg, uintsVt6A8u, {from: accounts[4]});
		const boolw7sCs7U = await DipexN50vZ2W.transferFrom.call(addressXILNcv, addressWp05Oq, uintO4SCp7, {from: accounts[3]});
		const boolrQwD90i = await DipexN50vZ2W.transfer.call(addressjTjeyGy, uintaIVbGlN, {from: accounts[2]});
		const boolJOW6NM = await DipexN50vZ2W.approveAndCall.call(addressVwYbCAo, uintRZWc6tD, {from: accounts[3]});

		await expect(DipexN50vZ2W.transferFrom.call(addressCGfwvZ6, addressUz9le8t, uintVR2TOxH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringmzL9ck = "le"
		const stringUfaP3mW = "Xft96IgSudaCeEaKaortRoOswgIKxADGhbNMGKLuCCvgYY9GdamlqbYOk6HIBqUirQEoQqCljKLU8sdXLTHNLTT8q5J73uX"
		const uintQqEbARq = BigInt("123")
		const DipexbDiYy1k = await Dipex.new(stringmzL9ck, stringUfaP3mW, uintQqEbARq, {from: accounts[2]});
		const uintRkJK3yB = BigInt("555")
		const addressuQdG1OE = accounts[4]
		const uintJRXP8x = BigInt("314")
		const addressnvRUY2m = accounts[5]
		const addressETGVahr = accounts[0]
		const uintC2m6YSJ = BigInt("160")
		const addressQ7jfcKO = accounts[0]
		const addressaEp5dad = accounts[0]
		const boolu4zlFcP = await DipexbDiYy1k.approveAndCall.call(addressuQdG1OE, uintRkJK3yB, {from: accounts[2]});
		const boolBwdAu0o = await DipexbDiYy1k.approve.call(addressnvRUY2m, uintJRXP8x, {from: accounts[3]});
		const boolVDHHLzC = await DipexbDiYy1k.transferownership.call(addressETGVahr, {from: accounts[0]});
		const boolk4BK5P4 = await DipexbDiYy1k.transferFrom.call(addressaEp5dad, addressQ7jfcKO, uintC2m6YSJ, {from: accounts[5]});

		assert.equal(boolBwdAu0o, true)
		assert.equal(boolu4zlFcP, true)
		await expect(DipexbDiYy1k.transferownership.call(addressETGVahr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringa2GfBaC = "jdSWmNv1bBpxgKgEK0mlnJ"
		const stringNrzdvCo = "NHA3ih8Nj7aENsrldrrPTIo76w4CrvqocYjxHA3QQvVXwRJTASmVQgY3aqURT"
		const uintxNSusJD = BigInt("1847")
		const Dipexwr0jyt4 = await Dipex.new(stringa2GfBaC, stringNrzdvCo, uintxNSusJD, {from: accounts[2]});
		const uintlXfajUG = BigInt("109")
		const addressBg94VqU = accounts[0]
		const uintsl6Bru = BigInt("592")
		const addresscegohhw = accounts[1]
		const uintJPgPD6d = BigInt("1587")
		const addressonKSrUy = "0x0000000000000000000000000000000000000001"
		const addressPIoM2V = "0x0000000000000000000000000000000000000001"
		const boolgOgXpLr = await Dipexwr0jyt4.transfer.call(addressBg94VqU, uintlXfajUG, {from: accounts[0]});
		const bool3hEIqB = await Dipexwr0jyt4.transfer.call(addresscegohhw, uintsl6Bru, {from: accounts[1]});
		const boolux6U660 = await Dipexwr0jyt4.transferFrom.call(addressPIoM2V, addressonKSrUy, uintJPgPD6d, {from: accounts[4]});

		await expect(Dipexwr0jyt4.transfer.call(addressBg94VqU, uintlXfajUG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringa2GfBaC = "jdSWmNv1bBpxgKgEK0mlnJ"
		const stringNrzdvCo = "NHA3ih8Nj7aENsrldrrPTIo76w4CrvqocYjxHA3QQvVXwRJTASmVQgY3aqURT"
		const uintxQxGxIC = BigInt("1847")
		const Dipexwr0jyt4 = await Dipex.new(stringa2GfBaC, stringNrzdvCo, uintxQxGxIC, {from: accounts[2]});
		const uintjJ1sxJz = BigInt("612")
		const addresswfkV0e2 = accounts[4]
		const uintjNjYcl5 = BigInt("109")
		const addressC03BplX = accounts[0]
		const uintXiZkvha = BigInt("1587")
		const addressUwtI40l = "0x0000000000000000000000000000000000000001"
		const addressHQeI5Lz = "0x0000000000000000000000000000000000000001"
		const uintqsfewIQ = BigInt("1150")
		const addressTFRH4z4 = accounts[1]
		const addressU06X3Hk = accounts[3]
		const uintYciR4LN = BigInt("123")
		const addressEOScIYF = accounts[1]
		const boolSJGbAwl = await Dipexwr0jyt4.transfer.call(addresswfkV0e2, uintjJ1sxJz, {from: accounts[2]});
		const boolgOgXpLr = await Dipexwr0jyt4.transfer.call(addressC03BplX, uintjNjYcl5, {from: accounts[0]});
		const boolux6U660 = await Dipexwr0jyt4.transferFrom.call(addressHQeI5Lz, addressUwtI40l, uintXiZkvha, {from: accounts[4]});
		const boolVAGAPso = await Dipexwr0jyt4.transferFrom.call(addressU06X3Hk, addressTFRH4z4, uintqsfewIQ, {from: accounts[4]});
		const boolnKXhZed = await Dipexwr0jyt4.approve.call(addressEOScIYF, uintYciR4LN, {from: accounts[2]});

		assert.equal(boolSJGbAwl, true)
		await expect(Dipexwr0jyt4.transfer.call(addressC03BplX, uintjNjYcl5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringwr0FSGd = "4Is1tVt4zs39rFYfGhcdNyA"
		const stringymq9dIN = "FRGYLKwc"
		const uint1QpSQl = BigInt("1882")
		const DipexbN3YWLS = await Dipex.new(stringwr0FSGd, stringymq9dIN, uint1QpSQl, {from: "0x0000000000000000000000000000000000000001"});
		const addressCJRB7Zc = accounts[0]
		const uintbBqEmIc = BigInt("624")
		const addressAPYPinG = accounts[2]
		const addressTiPQ2nj = accounts[1]
		const uintxlsHvh = BigInt("34")
		const addressMBucntn = accounts[4]
		const boollL9iEFn = await DipexbN3YWLS.transferownership.call(addressCJRB7Zc, {from: accounts[2]});
		const boolFCMhXrU = await DipexbN3YWLS.transferFrom.call(addressTiPQ2nj, addressAPYPinG, uintbBqEmIc, {from: accounts[3]});
		const boolynYgur4 = await DipexbN3YWLS.approveAndCall.call(addressMBucntn, uintxlsHvh, {from: accounts[1]});
	});

	it('test for Dipex', async () => {
		const stringmzL9ck = "le"
		const stringUfaP3mW = "Xft96IgSudaCeEaKaortRoOswgIKxADGhbNMGKLuCCvgYY9GdamlqbYOk6HIBqUirQEoQqCljKLU8sdXLTHNLTT8q5J73uX"
		const uintDkfjA6I = BigInt("123")
		const DipexbDiYy1k = await Dipex.new(stringmzL9ck, stringUfaP3mW, uintDkfjA6I, {from: accounts[2]});
		const uintl8eF8A = BigInt("0")
		const addressxa8Q4qZ = accounts[2]
		const addressqsK1dSw = accounts[3]
		const uintz8VHAjc = BigInt("222")
		const addresszUlxAVS = accounts[2]
		const uintlgQ2rw = BigInt("1197")
		const addresstpm59QV = "0x0000000000000000000000000000000000000001"
		const uintrHMn643 = BigInt("2044")
		const address4UvurO = accounts[3]
		const uintHutTG2w = BigInt("81")
		const addressBH7h6Om = accounts[1]
		const uintxXDoKDj = BigInt("1891")
		const addressEAtrfmR = accounts[2]
		const uintETGMIKY = BigInt("1734")
		const addressFcSazFD = accounts[3]
		const uintryJKW4 = BigInt("430")
		const addressz0pxfXl = accounts[1]
		const uintuiIUXDJ = BigInt("319")
		const addressqnbqcZX = accounts[0]
		const addresstSMGeQ6 = accounts[0]
		const boolGWTwtW2 = await DipexbDiYy1k.transferFrom.call(addressqsK1dSw, addressxa8Q4qZ, uintl8eF8A, {from: accounts[4]});
		const boolc3QQX20 = await DipexbDiYy1k.approveAndCall.call(addresszUlxAVS, uintz8VHAjc, {from: accounts[2]});
		const boolTA6yTcL = await DipexbDiYy1k.transfer.call(addresstpm59QV, uintlgQ2rw, {from: accounts[0]});
		const boolAmtGpA5 = await DipexbDiYy1k.approve.call(address4UvurO, uintrHMn643, {from: accounts[2]});
		const boolJAQKEZn = await DipexbDiYy1k.approveAndCall.call(addressBH7h6Om, uintHutTG2w, {from: accounts[2]});
		const boolM8C5fT = await DipexbDiYy1k.approveAndCall.call(addressEAtrfmR, uintxXDoKDj, {from: "0x0000000000000000000000000000000000000001"});
		const boolVlKeMb = await DipexbDiYy1k.transfer.call(addressFcSazFD, uintETGMIKY, {from: accounts[1]});
		const boolZJQWTs = await DipexbDiYy1k.approveAndCall.call(addressz0pxfXl, uintryJKW4, {from: accounts[0]});
		const boolO6Api4C = await DipexbDiYy1k.transferFrom.call(addresstSMGeQ6, addressqnbqcZX, uintuiIUXDJ, {from: accounts[3]});

		assert.equal(boolGWTwtW2, true)
		assert.equal(boolc3QQX20, true)
		await expect(DipexbDiYy1k.transfer.call(addresstpm59QV, uintlgQ2rw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringmzL9ck = "le"
		const stringUfaP3mW = "Xft96IgSudaCeEaKaortRoOswgIKxADGhbNMGKLuCCvgYY9GdamlqbYOk6HIBqUirQEoQqCljKLU8sdXLTHNLTT8q5J73uX"
		const uintBCuXbaX = BigInt("123")
		const DipexbDiYy1k = await Dipex.new(stringmzL9ck, stringUfaP3mW, uintBCuXbaX, {from: accounts[2]});
		const uintMMwACj = BigInt("222")
		const addressTeGxYb9 = accounts[2]
		const uintcq5Cm1P = BigInt("0")
		const addressCrqL567 = accounts[1]
		const uintiTQrid4 = BigInt("600")
		const addressDj4TdYV = accounts[0]
		const uintidV3YoW = BigInt("1403")
		const addressLTkjrqd = accounts[0]
		const addressRf0oFWm = accounts[4]
		const uintivint2M = BigInt("377")
		const addressZ9lBytL = "0x0000000000000000000000000000000000000001"
		const uintvbSEDdZ = BigInt("1160")
		const addressS4u7wpP = accounts[3]
		const uintRevuDRz = BigInt("398")
		const addressioXLIEr = accounts[2]
		const addressVjM9rUK = accounts[1]
		const boolc3QQX20 = await DipexbDiYy1k.approveAndCall.call(addressTeGxYb9, uintMMwACj, {from: accounts[2]});
		const boolJAQKEZn = await DipexbDiYy1k.approveAndCall.call(addressCrqL567, uintcq5Cm1P, {from: accounts[2]});
		const boolrJ6gUGE = await DipexbDiYy1k.approveAndCall.call(addressDj4TdYV, uintiTQrid4, {from: accounts[3]});
		const boolQS1XSDD = await DipexbDiYy1k.transferFrom.call(addressRf0oFWm, addressLTkjrqd, uintidV3YoW, {from: accounts[4]});
		const boolqTGWuU8 = await DipexbDiYy1k.approve.call(addressZ9lBytL, uintivint2M, {from: accounts[2]});
		const bool1YSvdV = await DipexbDiYy1k.approve.call(addressS4u7wpP, uintvbSEDdZ, {from: accounts[1]});
		const boolkb4s3VO = await DipexbDiYy1k.approve.call(addressioXLIEr, uintRevuDRz, {from: accounts[5]});
		const boolqEP2xcu = await DipexbDiYy1k.transferownership.call(addressVjM9rUK, {from: accounts[3]});

		assert.equal(boolJAQKEZn, true)
		assert.equal(boolc3QQX20, true)
		await expect(DipexbDiYy1k.approveAndCall.call(addressDj4TdYV, uintiTQrid4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})