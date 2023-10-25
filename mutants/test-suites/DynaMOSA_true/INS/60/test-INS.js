const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintmmC9ZeR = BigInt("830")
		const stringCoB1JnZ = "DMfTptgRtXIZQH8ROa5Ks4Cu6yOz643zOhj6kFu56BCnngqHt4kB"
		const stringg396uOk = "lLOEDFZrGvUU8lyMOMTJpHehQzcQ2NMAFNJbiQIRo3XR1M"
		const INSgB3nUM6 = await INS.new(uintmmC9ZeR, stringCoB1JnZ, stringg396uOk, {from: accounts[3]});
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
//		const boollFLZcCw = await INSgB3nUM6.burnFrom.call(addressOwx1lz1, uintnmzqdTc, {from: accounts[0]});
//		const boolGTEdiUg = await INSgB3nUM6.approve.call(addressk2Nt4mb, uintAgmzEk, {from: accounts[3]});
//		const boolJhJbW4X = await INSgB3nUM6.approveAndCall.call(addressdChHeYU, uintYrEDuNP, byteWa5HsOb, {from: accounts[3]});
//		const boolCW9lYAF = await INSgB3nUM6.burnFrom.call(addressc5rVKMy, uintDRZnc0w, {from: accounts[2]});
//		const boolFGeNDv8 = await INSgB3nUM6.burn.call(uint1amo5L, {from: accounts[2]});

		await expect(INSgB3nUM6.burnFrom.call(addressOwx1lz1, uintnmzqdTc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintLmADwUJ = BigInt("472")
		const stringAHIjJdZ = "TlK33DYu45X7XGDE1CTRVtFJRljCaKo4pW3JpWgXpszADxqKQkw32w831Sp3mUzJG4jrfzrlcC42L54zTgxo4Mcbl0WNrqke"
		const stringAcogxM5 = "yYDE4uzjo2SQz3SCh1C6rdj4Mj9XY3v9NyzdWVL9lc1kUJ"
		const INSxCyszZU = await INS.new(uintLmADwUJ, stringAHIjJdZ, stringAcogxM5, {from: accounts[2]});
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
//		const boolLcCj39Z = await INSxCyszZU.transferFrom.call(addresskCGgI4q, addressGYgoPps, uintpO1qaDd, {from: accounts[1]});
//		const booljuFF6l = await INSxCyszZU.approveAndCall.call(addressoBMlmRe, uintnLxtvae, bytel1eLpY, {from: accounts[4]});
//		const boolcHRVV4 = await INSxCyszZU.burn.call(uintbKlfqiN, {from: accounts[0]});
//		const booloR3eGg7 = await INSxCyszZU.transferFrom.call(addressjH8rDS2, addressdkGO8oY, uintkOZB5Z0, {from: accounts[2]});
//		const boolL8aA1Jy = await INSxCyszZU.transfer.call(addressNxTnSCx, uintoMLxi8N, {from: accounts[0]});
//		const booljYIcbn3 = await INSxCyszZU.approveAndCall.call(addressgdmM9RW, uintBYYGIQH, byteg1333IT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(INSxCyszZU.transferFrom.call(addresskCGgI4q, addressGYgoPps, uintpO1qaDd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintlboNzwY = BigInt("477")
		const stringvjWCVmf = "SJtdwtFxddouwWIY"
		const stringjxAUIl1 = "BnbPt1pPTtNPmysGXQjSXqqBzCJKicT1cjiilJjlH"
		const INSNVpG7N = await INS.new(uintlboNzwY, stringvjWCVmf, stringjxAUIl1, {from: accounts[2]});
		const byteTtnQcPh = "0x15171c1f090f150c030d0b090a"
		const uintZzRJES2 = BigInt("561")
		const addresse12jRhT = accounts[0]
		const uintT0g6NjU = BigInt("438")
		const addressbfh8Wmh = accounts[5]
//		const boolfXmYoOH = await INSNVpG7N.approveAndCall.call(addresse12jRhT, uintZzRJES2, byteTtnQcPh, {from: "0x0000000000000000000000000000000000000001"});
//		const boolL6Szeu = await INSNVpG7N.approve.call(addressbfh8Wmh, uintT0g6NjU, {from: accounts[2]});

		await expect(INSNVpG7N.approveAndCall.call(addresse12jRhT, uintZzRJES2, byteTtnQcPh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uinthwe5h00 = BigInt("1248")
		const stringmY8Nn1H = "zUZI3x187cz3PjWQvKPb87s2XBYgyDahAkBnT8rYq2ldPdbz4XmbFgzEz9fdM688qTTgmgLAYPnWjau7bt7kdElEF6tr3liquY"
		const stringi9d7vX = "gAcjlRDQq"
		const INSFqCHGu = await INS.new(uinthwe5h00, stringmY8Nn1H, stringi9d7vX, {from: accounts[4]});
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
		const booleZMqMTn = await INSFqCHGu.approve.call(addressPSAQxBf, uintgvr0u5h, {from: accounts[2]});
//		const boolTN91urz = await INSFqCHGu.burn.call(uintj8dASgA, {from: accounts[1]});
//		const boolExsBkJf = await INSFqCHGu.approve.call(addressHFQk3gH, uintRZMX9H6, {from: accounts[0]});
//		const boolfZl8GzO = await INSFqCHGu.burnFrom.call(addressdNIqNpa, uinty5wnn1V, {from: accounts[4]});
//		const boolgMQDTDs = await INSFqCHGu.approveAndCall.call(addressREfrjIg, uintidkqiji, bytekOxguGa, {from: accounts[3]});

		assert.equal(booleZMqMTn, true)
		await expect(INSFqCHGu.burn.call(uintj8dASgA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uint7MbMx5 = BigInt("849")
		const stringQ36XN3m = "27BNmyoaf37Lzuexgym"
		const stringxJBREt = "yM4V8aX7bodH1FUgmbKxSTyVmpv"
		const INSQ4pMq9L = await INS.new(uint7MbMx5, stringQ36XN3m, stringxJBREt, {from: accounts[5]});
		const uint9vDUNw = BigInt("703")
		const uintw6fixQ8 = BigInt("1056")
		const addresscUNMjuI = accounts[0]
		const uintcto5nf = BigInt("892")
		const addressEng1w4P = accounts[3]
		const addressaEJ0Cqo = accounts[4]
		const boolUxXgj1A = await INSQ4pMq9L.burn.call(uint9vDUNw, {from: accounts[5]});
//		const booljiuSgM = await INSQ4pMq9L.burnFrom.call(addresscUNMjuI, uintw6fixQ8, {from: accounts[4]});
//		const boolB71m85F = await INSQ4pMq9L.transferFrom.call(addressaEJ0Cqo, addressEng1w4P, uintcto5nf, {from: accounts[4]});

		assert.equal(boolUxXgj1A, true)
		await expect(INSQ4pMq9L.burnFrom.call(addresscUNMjuI, uintw6fixQ8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintYm5vwxh = BigInt("1864")
		const stringa4b4cDI = "44KgDiAdPvutyQ5gy1FJtzjn1OWXhWuwqvGj3Ab8h8eLKCXOMYL9Bahr9UdaWeUxggsQUZ85BsgIBMW1BLFeTae6"
		const stringSKsw7Pt = "bKNsi7Xy8eEgksEE4wsUzSwHPR5X3SxHcysrGib"
		const INSJ11fQkH = await INS.new(uintYm5vwxh, stringa4b4cDI, stringSKsw7Pt, {from: accounts[4]});
		const uintsoYrJmw = BigInt("1825")
		const addressm2TKbh = accounts[4]
		const uintwEwwRxx = BigInt("1098")
		const uintPqMtoE = BigInt("537")
		const addressERwYsJ2 = accounts[3]
		const addressaYLNvKP = accounts[4]
		const uintNPszlAJ = BigInt("767")
		const addressrpLR5Z3 = "0x0000000000000000000000000000000000000001"
		const addressYkaZqs3 = accounts[1]
		const boolhbLcxVQ = await INSJ11fQkH.transfer.call(addressm2TKbh, uintsoYrJmw, {from: accounts[4]});
//		const boolyo1ZdpX = await INSJ11fQkH.burn.call(uintwEwwRxx, {from: accounts[0]});
//		const boolmDW3xjr = await INSJ11fQkH.transferFrom.call(addressaYLNvKP, addressERwYsJ2, uintPqMtoE, {from: "0x0000000000000000000000000000000000000001"});
//		const boolCxdjkvI = await INSJ11fQkH.transferFrom.call(addressYkaZqs3, addressrpLR5Z3, uintNPszlAJ, {from: accounts[2]});

		assert.equal(boolhbLcxVQ, true)
		await expect(INSJ11fQkH.burn.call(uintwEwwRxx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintz2nBiuR = BigInt("1647")
		const stringE5UXW5 = "VPZHojKKu4z8DjHudw0QHkuN38p6dJIpGoBA"
		const stringG9GK4c = "EFnLlQvlyudiJHIyfSelioiLOee1nDO5gzutudAT35vHnR"
		const INSZpaBYvz = await INS.new(uintz2nBiuR, stringE5UXW5, stringG9GK4c, {from: "0x0000000000000000000000000000000000000001"});
		const uintD7jWCtj = BigInt("1358")
		const addressyhjnUSC = accounts[1]
		const uintjvlfm0U = BigInt("1590")
		const addressPx8cJxi = "0x0000000000000000000000000000000000000001"
		const uintuddNeY0 = BigInt("1804")
		const boolsvhcXSU = await INSZpaBYvz.approve.call(addressyhjnUSC, uintD7jWCtj, {from: accounts[4]});
		const boolsmqrCu5 = await INSZpaBYvz.transfer.call(addressPx8cJxi, uintjvlfm0U, {from: accounts[0]});
		const boolUraPv0M = await INSZpaBYvz.burn.call(uintuddNeY0, {from: accounts[3]});
	});

	it('test for INS', async () => {
		const uintHXJCt6S = BigInt("849")
		const stringQ36XN3m = "27BNmyoaf37Lzuexgym"
		const stringxJBREt = "yM4V8aX7bodH1FUgmbKxSTyVmpv"
		const INSQ4pMq9L = await INS.new(uintHXJCt6S, stringQ36XN3m, stringxJBREt, {from: accounts[5]});
		const uintHq7wbcD = BigInt("851")
		const addressqqtLcwC = accounts[5]
		const uintnpLFfvG = BigInt("703")
		const uinthsximrk = BigInt("100")
		const uintLkyqoUk = BigInt("892")
		const addressy3XunOq = accounts[3]
		const addressYPyqywk = accounts[4]
//		const boolGjcEo1A = await INSQ4pMq9L.burnFrom.call(addressqqtLcwC, uintHq7wbcD, {from: accounts[0]});
//		const boolUxXgj1A = await INSQ4pMq9L.burn.call(uintnpLFfvG, {from: accounts[5]});
//		const boolD7U28kk = await INSQ4pMq9L.burn.call(uinthsximrk, {from: accounts[3]});
//		const boolB71m85F = await INSQ4pMq9L.transferFrom.call(addressYPyqywk, addressy3XunOq, uintLkyqoUk, {from: accounts[4]});

		await expect(INSQ4pMq9L.burnFrom.call(addressqqtLcwC, uintHq7wbcD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})