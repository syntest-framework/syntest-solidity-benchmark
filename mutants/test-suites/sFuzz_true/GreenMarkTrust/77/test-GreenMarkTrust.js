const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintmmC9ZeR = BigInt("830")
		const stringCoB1JnZ = "DMfTptgRtXIZQH8ROa5Ks4Cu6yOz643zOhj6kFu56BCnngqHt4kB"
		const stringg396uOk = "lLOEDFZrGvUU8lyMOMTJpHehQzcQ2NMAFNJbiQIRo3XR1M"
		const GreenMarkTrustgB3nUM6 = await GreenMarkTrust.new(uintmmC9ZeR, stringCoB1JnZ, stringg396uOk, {from: accounts[3]});
		const uintnmzqdTc = BigInt("615")
		const addressOwx1lz1 = accounts[2]
		const uintAgmzEk = BigInt("1686")
		const addressk2Nt4mb = accounts[1]
		const byteWa5HsOb = "0x1f0105060d05140f081e1d140a1119181804"
		const uintYrEDuNP = BigInt("1221")
		const addressdChHeYU = accounts[3]
		const uintDRZnc0w = BigInt("247")
		const addressc5rVKMy = accounts[0]
		const uint1amo5L = BigInt("659")
//		const boollFLZcCw = await GreenMarkTrustgB3nUM6.burnFrom.call(addressOwx1lz1, uintnmzqdTc, {from: accounts[0]});
//		const boolGTEdiUg = await GreenMarkTrustgB3nUM6.approve.call(addressk2Nt4mb, uintAgmzEk, {from: accounts[3]});
//		const boolJhJbW4X = await GreenMarkTrustgB3nUM6.approveAndCall.call(addressdChHeYU, uintYrEDuNP, byteWa5HsOb, {from: accounts[3]});
//		const boolCW9lYAF = await GreenMarkTrustgB3nUM6.burnFrom.call(addressc5rVKMy, uintDRZnc0w, {from: accounts[2]});
//		const boolFGeNDv8 = await GreenMarkTrustgB3nUM6.burn.call(uint1amo5L, {from: accounts[2]});

		await expect(GreenMarkTrustgB3nUM6.burnFrom.call(addressOwx1lz1, uintnmzqdTc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintLmADwUJ = BigInt("472")
		const stringAHIjJdZ = "TlK33DYu45X7XGDE1CTRVtFJRljCaKo4pW3JpWgXpszADxqKQkw32w831Sp3mUzJG4jrfzrlcC42L54zTgxo4Mcbl0WNrqke"
		const stringAcogxM5 = "yYDE4uzjo2SQz3SCh1C6rdj4Mj9XY3v9NyzdWVL9lc1kUJ"
		const GreenMarkTrustxCyszZU = await GreenMarkTrust.new(uintLmADwUJ, stringAHIjJdZ, stringAcogxM5, {from: accounts[2]});
		const uintpO1qaDd = BigInt("1889")
		const addressGYgoPps = accounts[1]
		const addresskCGgI4q = accounts[1]
		const bytel1eLpY = "0x1604181817041f1b190f09130f0d07141c1c020d"
		const uintnLxtvae = BigInt("837")
		const addressoBMlmRe = accounts[2]
		const uintbKlfqiN = BigInt("1979")
		const uintkOZB5Z0 = BigInt("1837")
		const addressdkGO8oY = accounts[0]
		const addressjH8rDS2 = accounts[4]
		const uintoMLxi8N = BigInt("905")
		const addressNxTnSCx = accounts[3]
		const byteg1333IT = "0x1c140c0413050e1b06030c16171a1f1f041f03080b081c0402201e0c07"
		const uintBYYGIQH = BigInt("1828")
		const addressgdmM9RW = accounts[1]
//		const boolLcCj39Z = await GreenMarkTrustxCyszZU.transferFrom.call(addresskCGgI4q, addressGYgoPps, uintpO1qaDd, {from: accounts[1]});
//		const booljuFF6l = await GreenMarkTrustxCyszZU.approveAndCall.call(addressoBMlmRe, uintnLxtvae, bytel1eLpY, {from: accounts[4]});
//		const boolcHRVV4 = await GreenMarkTrustxCyszZU.burn.call(uintbKlfqiN, {from: accounts[0]});
//		const booloR3eGg7 = await GreenMarkTrustxCyszZU.transferFrom.call(addressjH8rDS2, addressdkGO8oY, uintkOZB5Z0, {from: accounts[2]});
//		const boolL8aA1Jy = await GreenMarkTrustxCyszZU.transfer.call(addressNxTnSCx, uintoMLxi8N, {from: accounts[0]});
//		const booljYIcbn3 = await GreenMarkTrustxCyszZU.approveAndCall.call(addressgdmM9RW, uintBYYGIQH, byteg1333IT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GreenMarkTrustxCyszZU.transferFrom.call(addresskCGgI4q, addressGYgoPps, uintpO1qaDd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintlboNzwY = BigInt("477")
		const stringvjWCVmf = "SJtdwtFxddouwWIY"
		const stringjxAUIl1 = "BnbPt1pPTtNPmysGXQjSXqqBzCJKicT1cjiilJjlH"
		const GreenMarkTrustNVpG7N = await GreenMarkTrust.new(uintlboNzwY, stringvjWCVmf, stringjxAUIl1, {from: accounts[2]});
		const byteTtnQcPh = "0x15171c1f090f150c030d0b090a"
		const uintZzRJES2 = BigInt("561")
		const addresse12jRhT = accounts[0]
		const uintT0g6NjU = BigInt("438")
		const addressbfh8Wmh = accounts[5]
//		const boolfXmYoOH = await GreenMarkTrustNVpG7N.approveAndCall.call(addresse12jRhT, uintZzRJES2, byteTtnQcPh, {from: "0x0000000000000000000000000000000000000001"});
//		const boolL6Szeu = await GreenMarkTrustNVpG7N.approve.call(addressbfh8Wmh, uintT0g6NjU, {from: accounts[2]});

		await expect(GreenMarkTrustNVpG7N.approveAndCall.call(addresse12jRhT, uintZzRJES2, byteTtnQcPh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uinthwe5h00 = BigInt("1248")
		const stringmY8Nn1H = "zUZI3x187cz3PjWQvKPb87s2XBYgyDahAkBnT8rYq2ldPdbz4XmbFgzEz9fdM688qTTgmgLAYPnWjau7bt7kdElEF6tr3liquY"
		const stringi9d7vX = "gAcjlRDQq"
		const GreenMarkTrustFqCHGu = await GreenMarkTrust.new(uinthwe5h00, stringmY8Nn1H, stringi9d7vX, {from: accounts[4]});
		const uintgvr0u5h = BigInt("520")
		const addressPSAQxBf = accounts[4]
		const uintj8dASgA = BigInt("821")
		const uintRZMX9H6 = BigInt("1917")
		const addressHFQk3gH = accounts[0]
		const uinty5wnn1V = BigInt("76")
		const addressdNIqNpa = accounts[0]
		const bytekOxguGa = "0x031e12001513081b13150c1203040818120316"
		const uintidkqiji = BigInt("491")
		const addressREfrjIg = accounts[1]
		const booleZMqMTn = await GreenMarkTrustFqCHGu.approve.call(addressPSAQxBf, uintgvr0u5h, {from: accounts[2]});
//		const boolTN91urz = await GreenMarkTrustFqCHGu.burn.call(uintj8dASgA, {from: accounts[1]});
//		const boolExsBkJf = await GreenMarkTrustFqCHGu.approve.call(addressHFQk3gH, uintRZMX9H6, {from: accounts[0]});
//		const boolfZl8GzO = await GreenMarkTrustFqCHGu.burnFrom.call(addressdNIqNpa, uinty5wnn1V, {from: accounts[4]});
//		const boolgMQDTDs = await GreenMarkTrustFqCHGu.approveAndCall.call(addressREfrjIg, uintidkqiji, bytekOxguGa, {from: accounts[3]});

		assert.equal(booleZMqMTn, true)
		await expect(GreenMarkTrustFqCHGu.burn.call(uintj8dASgA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uint7MbMx5 = BigInt("849")
		const stringQ36XN3m = "27BNmyoaf37Lzuexgym"
		const stringxJBREt = "yM4V8aX7bodH1FUgmbKxSTyVmpv"
		const GreenMarkTrustQ4pMq9L = await GreenMarkTrust.new(uint7MbMx5, stringQ36XN3m, stringxJBREt, {from: accounts[5]});
		const uint9vDUNw = BigInt("703")
		const uintw6fixQ8 = BigInt("1056")
		const addresscUNMjuI = accounts[0]
		const uintcto5nf = BigInt("892")
		const addressEng1w4P = accounts[3]
		const addressaEJ0Cqo = accounts[4]
		const boolUxXgj1A = await GreenMarkTrustQ4pMq9L.burn.call(uint9vDUNw, {from: accounts[5]});
//		const booljiuSgM = await GreenMarkTrustQ4pMq9L.burnFrom.call(addresscUNMjuI, uintw6fixQ8, {from: accounts[4]});
//		const boolB71m85F = await GreenMarkTrustQ4pMq9L.transferFrom.call(addressaEJ0Cqo, addressEng1w4P, uintcto5nf, {from: accounts[4]});

		assert.equal(boolUxXgj1A, true)
		await expect(GreenMarkTrustQ4pMq9L.burnFrom.call(addresscUNMjuI, uintw6fixQ8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintiy7qwO5 = BigInt("849")
		const stringQ36XN3m = "27BNmyoaf37Lzuexgym"
		const stringxJBREt = "yM4V8aX7bodH1FUgmbKxSTyVmpv"
		const GreenMarkTrustQ4pMq9L = await GreenMarkTrust.new(uintiy7qwO5, stringQ36XN3m, stringxJBREt, {from: accounts[5]});
		const uintD4KL9lb = BigInt("703")
		const uintPJeR8EE = BigInt("1725")
		const addressFrb5r3C = accounts[3]
		const uintkruA2KY = BigInt("1056")
		const addressjuB0DtK = accounts[0]
		const uintxU78G7B = BigInt("892")
		const addresszHWbEn1 = accounts[4]
		const addressksKmV24 = accounts[4]
		const boolUxXgj1A = await GreenMarkTrustQ4pMq9L.burn.call(uintD4KL9lb, {from: accounts[5]});
//		const boolBwBNY9A = await GreenMarkTrustQ4pMq9L.transfer.call(addressFrb5r3C, uintPJeR8EE, {from: accounts[3]});
//		const booljiuSgM = await GreenMarkTrustQ4pMq9L.burnFrom.call(addressjuB0DtK, uintkruA2KY, {from: accounts[4]});
//		const boolB71m85F = await GreenMarkTrustQ4pMq9L.transferFrom.call(addressksKmV24, addresszHWbEn1, uintxU78G7B, {from: accounts[4]});

		assert.equal(boolUxXgj1A, true)
		await expect(GreenMarkTrustQ4pMq9L.transfer.call(addressFrb5r3C, uintPJeR8EE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintklwkkM4 = BigInt("1251")
		const stringgVimyG1 = "XrlkkJAbvp3KXu"
		const stringghmc1JK = "sE0KgPhg6lohEefQ2QWW2Duxn4"
		const GreenMarkTrustTn8Arml = await GreenMarkTrust.new(uintklwkkM4, stringgVimyG1, stringghmc1JK, {from: "0x0000000000000000000000000000000000000001"});
		const uintnCb0Tif = BigInt("1524")
		const addressQ3S2Wsb = accounts[2]
		const uinttt6myDe = BigInt("1996")
		const addressbXC1Tlx = "0x0000000000000000000000000000000000000001"
		const addressBhNjjOv = accounts[4]
		const uintlWcbY0s = BigInt("1798")
		const uintwvllIds = BigInt("1265")
		const addresszHpEbWL = accounts[3]
		const boolLnGAcqe = await GreenMarkTrustTn8Arml.approve.call(addressQ3S2Wsb, uintnCb0Tif, {from: accounts[3]});
		const boolWihDU3M = await GreenMarkTrustTn8Arml.transferFrom.call(addressBhNjjOv, addressbXC1Tlx, uinttt6myDe, {from: accounts[5]});
		const boolL50dVz = await GreenMarkTrustTn8Arml.burn.call(uintlWcbY0s, {from: accounts[4]});
		const boolSw5M36D = await GreenMarkTrustTn8Arml.transfer.call(addresszHpEbWL, uintwvllIds, {from: accounts[2]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintfXvV0fV = BigInt("286")
		const stringkR4U8Z7 = "64hWynFARwFF6eJXP2td4cM09qUNUR4UKQhXpIvJ4nIVh9XXGNHwvFueR7DI8z9H1MEhioU7Np9M5RBwq"
		const stringNp4t0CI = "IXowEWsuHh1IMCeJvpcBMRuyd8VKkXgo7mGcnKPOaWm8J6pvssTsg5BS449"
		const GreenMarkTrustf4EXdYK = await GreenMarkTrust.new(uintfXvV0fV, stringkR4U8Z7, stringNp4t0CI, {from: accounts[1]});
		const uinteepsear = BigInt("131")
		const addressXVVTQfv = accounts[3]
		const uintLFYEQ0N = BigInt("820")
		const addressj4tAFnk = accounts[4]
		const uintOvzCZg9 = BigInt("1260")
		const addresscIz4ddN = "0x0000000000000000000000000000000000000002"
		const addressiX1IG9G = accounts[4]
		const boolRdfl7b = await GreenMarkTrustf4EXdYK.approve.call(addressXVVTQfv, uinteepsear, {from: accounts[3]});
		const boolZYx7F5T = await GreenMarkTrustf4EXdYK.transfer.call(addressj4tAFnk, uintLFYEQ0N, {from: accounts[1]});
//		const bools0EYTRX = await GreenMarkTrustf4EXdYK.transferFrom.call(addressiX1IG9G, addresscIz4ddN, uintOvzCZg9, {from: accounts[3]});

		assert.equal(boolRdfl7b, true)
		assert.equal(boolZYx7F5T, true)
		await expect(GreenMarkTrustf4EXdYK.transferFrom.call(addressiX1IG9G, addresscIz4ddN, uintOvzCZg9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintqfaN3gc = BigInt("286")
		const stringkR4U8Z7 = "64hWynFARwFF6eJXP2td4cM09qUNUR4UKQhXpIvJ4nIVh9XXGNHwvFueR7DI8z9H1MEhioU7Np9M5RBwq"
		const stringNp4t0CI = "IXowEWsuHh1IMCeJvpcBMRuyd8VKkXgo7mGcnKPOaWm8J6pvssTsg5BS449"
		const GreenMarkTrustf4EXdYK = await GreenMarkTrust.new(uintqfaN3gc, stringkR4U8Z7, stringNp4t0CI, {from: accounts[1]});
		const uintenn0adk = BigInt("939")
		const addressx677jmM = accounts[1]
		const uinteT6md56 = BigInt("1215")
		const addressVaN8z8I = accounts[1]
		const uintIFL8U6k = BigInt("444")
		const addressCG4nyNT = accounts[1]
		const uintKhAZJua = BigInt("1260")
		const addressdpcYrCs = "0x0000000000000000000000000000000000000000"
		const addressfyhB5kB = accounts[4]
//		const boolU4vRIFA = await GreenMarkTrustf4EXdYK.burnFrom.call(addressx677jmM, uintenn0adk, {from: accounts[1]});
//		const booljwZVj2e = await GreenMarkTrustf4EXdYK.approve.call(addressVaN8z8I, uinteT6md56, {from: accounts[5]});
//		const boolOWKSWCa = await GreenMarkTrustf4EXdYK.transfer.call(addressCG4nyNT, uintIFL8U6k, {from: accounts[0]});
//		const bools0EYTRX = await GreenMarkTrustf4EXdYK.transferFrom.call(addressfyhB5kB, addressdpcYrCs, uintKhAZJua, {from: accounts[3]});

		await expect(GreenMarkTrustf4EXdYK.burnFrom.call(addressx677jmM, uintenn0adk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})