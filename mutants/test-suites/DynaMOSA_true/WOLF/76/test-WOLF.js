const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringF53Nqlr = "YgTPly92RNfGsFNV2xFFp"
		const stringMyTTW4N = "SlHnvJ9ZqjbZZ1bqDOvVJO6FqN3Vxff9uM0XSYMeX2RGF"
		const uintbXp9z9v = BigInt("1737")
		const WOLFaOVgP7k = await WOLF.new(stringF53Nqlr, stringMyTTW4N, uintbXp9z9v, {from: accounts[2]});
		const uintqUHz4gR = BigInt("1566")
		const addressZAk4frp = accounts[5]
		const addressULyw6oM = accounts[1]
		const uintm257Bs = BigInt("1129")
		const addressph9bAg8 = accounts[3]
		const uintf90Hoxy = BigInt("838")
		const addressF1nhZF9 = accounts[3]
		const addressuT4ZGpu = accounts[3]
		const uinttdkxcwe = BigInt("622")
		const addressyhF02m1 = accounts[1]
		const addressUu6TRnd = accounts[0]
//		const boolA6SGc6o = await WOLFaOVgP7k.transferFrom.call(addressULyw6oM, addressZAk4frp, uintqUHz4gR, {from: accounts[3]});
//		const boolXGSQllq = await WOLFaOVgP7k.approve.call(addressph9bAg8, uintm257Bs, {from: accounts[4]});
//		const boolC3JoHYb = await WOLFaOVgP7k.transferFrom.call(addressuT4ZGpu, addressF1nhZF9, uintf90Hoxy, {from: accounts[5]});
//		const boolBHEnH6 = await WOLFaOVgP7k.transferFrom.call(addressUu6TRnd, addressyhF02m1, uinttdkxcwe, {from: accounts[5]});

		await expect(WOLFaOVgP7k.transferFrom.call(addressULyw6oM, addressZAk4frp, uintqUHz4gR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringSSTrYij = "QOy8pZ3Ylw88XTwJfW85q8bL4KQlAUimuXpfy4iyyhpsS7x4tHVXVeThxJoRDphvp7mjxjUzII3elapdPlMD"
		const stringntJfMgw = "bu346HAflfLYEiuvdKbmXOnd1i52TV9Nkb6upknqkFG9DHzxSfoisYRu8JlAn"
		const uintxAajkch = BigInt("949")
		const WOLFeIS167g = await WOLF.new(stringSSTrYij, stringntJfMgw, uintxAajkch, {from: accounts[4]});
		const uintCupluze = BigInt("512")
		const addressBLosZjf = accounts[4]
		const uintiKSaPS4 = BigInt("1606")
		const addressoiQmm0m = "0x0000000000000000000000000000000000000001"
		const addressvzYx9ZU = accounts[5]
		const uintuwx6CF4 = BigInt("1537")
		const addressDJHqI2B = accounts[0]
		const uintE2M9wvP = BigInt("1447")
		const addressfwoPwVk = accounts[1]
		const addressDHmh5D = accounts[4]
		const uintSqyqdmC = BigInt("2024")
		const addressqDOtwhg = accounts[2]
		const booljPoDqSy = await WOLFeIS167g.approve.call(addressBLosZjf, uintCupluze, {from: accounts[3]});
//		const boolFfvkm7E = await WOLFeIS167g.transferFrom.call(addressvzYx9ZU, addressoiQmm0m, uintiKSaPS4, {from: accounts[0]});
//		const boolkGFnnu = await WOLFeIS167g.transfer.call(addressDJHqI2B, uintuwx6CF4, {from: accounts[1]});
//		const boolpZe7ywU = await WOLFeIS167g.transferFrom.call(addressDHmh5D, addressfwoPwVk, uintE2M9wvP, {from: accounts[3]});
//		const boolsSD41lc = await WOLFeIS167g.transfer.call(addressqDOtwhg, uintSqyqdmC, {from: accounts[3]});

		assert.equal(booljPoDqSy, true)
		await expect(WOLFeIS167g.transferFrom.call(addressvzYx9ZU, addressoiQmm0m, uintiKSaPS4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringnDrlxme = "st081Fsxq1x8LDHeU8UkAao"
		const stringCjYPxSA = "IzOVqSNpBf"
		const uintJNdiCYp = BigInt("1270")
		const WOLFQSaT96J = await WOLF.new(stringnDrlxme, stringCjYPxSA, uintJNdiCYp, {from: accounts[2]});
		const uintGTCsOjf = BigInt("391")
		const addressmVQAuyw = accounts[5]
		const addressvVSlw3l = "0x0000000000000000000000000000000000000001"
		const uintxEBXCVM = BigInt("979")
		const addressTI31LFc = accounts[5]
		const addresslxvYAem = accounts[0]
		const uintgiYazGU = BigInt("1286")
		const addressLmdpWF = accounts[3]
		const uintupSN4pX = BigInt("500")
		const addressIYjAchY = accounts[0]
		const addressWa8dPIw = accounts[3]
		const uintxdR0QNu = BigInt("987")
		const addressdeaDm0x = accounts[0]
//		const boolozcVSVl = await WOLFQSaT96J.transferFrom.call(addressvVSlw3l, addressmVQAuyw, uintGTCsOjf, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqMc2N2 = await WOLFQSaT96J.transferFrom.call(addresslxvYAem, addressTI31LFc, uintxEBXCVM, {from: accounts[1]});
//		const boolytiyRfB = await WOLFQSaT96J.approveAndCall.call(addressLmdpWF, uintgiYazGU, {from: accounts[1]});
//		const booloFYZ6v = await WOLFQSaT96J.transferFrom.call(addressWa8dPIw, addressIYjAchY, uintupSN4pX, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGLrOkv = await WOLFQSaT96J.approve.call(addressdeaDm0x, uintxdR0QNu, {from: accounts[0]});

		await expect(WOLFQSaT96J.transferFrom.call(addressvVSlw3l, addressmVQAuyw, uintGTCsOjf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringd4O1Z5Y = "2apzdLVHl2wW8EHUlCQEFUqLlOC31SoxtBlC6qMLymCQgj2FQQQvtoM"
		const string4ZLCf2 = "FnoIsmphiL8gJcY4fWkeiefWm3MLS2n9QXLeh2gxiVBjUmXO4ZsjWqchHfhQEw56LlBmnxWGJacfY6kxo"
		const uintZqR5j4u = BigInt("237")
		const WOLFoy1vDLZ = await WOLF.new(stringd4O1Z5Y, string4ZLCf2, uintZqR5j4u, {from: accounts[3]});
		const uintV3H6aCf = BigInt("1335")
		const addressgh4tdvi = accounts[1]
		const uintCcpcF6u = BigInt("957")
		const addressxQQcwrN = accounts[5]
		const uintECQYGhq = BigInt("582")
		const addresstn6eKG3 = accounts[0]
		const uintzh6OpIV = BigInt("487")
		const addressLTmxQVW = accounts[3]
		const addressIrrluS = accounts[4]
		const uintu88ry6X = BigInt("555")
		const addressONHftwU = accounts[4]
//		const boolPPpqJ1V = await WOLFoy1vDLZ.approveAndCall.call(addressgh4tdvi, uintV3H6aCf, {from: accounts[5]});
//		const booltQYDCQ5 = await WOLFoy1vDLZ.approveAndCall.call(addressxQQcwrN, uintCcpcF6u, {from: accounts[3]});
//		const boolcOSplwv = await WOLFoy1vDLZ.approveAndCall.call(addresstn6eKG3, uintECQYGhq, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmiSaKAc = await WOLFoy1vDLZ.approveAndCall.call(addressLTmxQVW, uintzh6OpIV, {from: accounts[3]});
//		const boolbFsa01u = await WOLFoy1vDLZ.transferownership.call(addressIrrluS, {from: accounts[4]});
//		const boolcFBqKGR = await WOLFoy1vDLZ.approveAndCall.call(addressONHftwU, uintu88ry6X, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WOLFoy1vDLZ.approveAndCall.call(addressgh4tdvi, uintV3H6aCf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringOXToLzP = "ctie2rlYGLLTMvIePELjbjKYAYT2Vyzsupf5iaruIOMwAvEnliXAA6sLIoF7CuJRQx6ygPmieFGhWv999ksvTadm1GYkx"
		const stringh5PdRm8 = "fzIQqR3r9Pyhx4S24"
		const uinthRI6wej = BigInt("442")
		const WOLFJXmTrny = await WOLF.new(stringOXToLzP, stringh5PdRm8, uinthRI6wej, {from: accounts[5]});
		const addressDjA7ryl = accounts[4]
		const addressyROyoaY = accounts[0]
		const uintK61ujXH = BigInt("1092")
		const addressT4RN3P = accounts[5]
		const addressc1onCRG = accounts[1]
		const uintWr9oFcT = BigInt("1409")
		const addressjB7ovJT = accounts[0]
//		const boolJTnB5YU = await WOLFJXmTrny.transferownership.call(addressDjA7ryl, {from: accounts[4]});
//		const boolja0Kt6V = await WOLFJXmTrny.transferownership.call(addressyROyoaY, {from: accounts[1]});
//		const boolVvsvf1c = await WOLFJXmTrny.transferFrom.call(addressc1onCRG, addressT4RN3P, uintK61ujXH, {from: accounts[2]});
//		const boolnbfN1bf = await WOLFJXmTrny.transfer.call(addressjB7ovJT, uintWr9oFcT, {from: accounts[3]});

		await expect(WOLFJXmTrny.transferownership.call(addressDjA7ryl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringqH41OuV = "GLdVCXMvL9qrqCFBZOt38bOc6j"
		const stringV1ClRuP = "1jwgg72xMyrn"
		const uinttfJVw5Y = BigInt("33")
		const WOLFfMeC7a9 = await WOLF.new(stringqH41OuV, stringV1ClRuP, uinttfJVw5Y, {from: accounts[4]});
		const uintzpwLKRa = BigInt("1840")
		const addressjqNe769 = accounts[5]
		const uintlXCiUAY = BigInt("694")
		const addressflkvD7Y = accounts[1]
		const addresswRGdQgs = accounts[2]
		const uintqDxapYq = BigInt("1912")
		const addresseVT3ubf = accounts[5]
		const addressDy9o9q = "0x0000000000000000000000000000000000000001"
		const uinthCiVLSJ = BigInt("1859")
		const addressAfoOTEs = accounts[5]
//		const boolQQZPD8 = await WOLFfMeC7a9.transfer.call(addressjqNe769, uintzpwLKRa, {from: accounts[1]});
//		const boolPkhTFw = await WOLFfMeC7a9.transferFrom.call(addresswRGdQgs, addressflkvD7Y, uintlXCiUAY, {from: accounts[3]});
//		const boolo9MrUVi = await WOLFfMeC7a9.transferFrom.call(addressDy9o9q, addresseVT3ubf, uintqDxapYq, {from: accounts[3]});
//		const boolfulwyDh = await WOLFfMeC7a9.approveAndCall.call(addressAfoOTEs, uinthCiVLSJ, {from: accounts[2]});

		await expect(WOLFfMeC7a9.transfer.call(addressjqNe769, uintzpwLKRa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringIkW8uk6 = "pwrwHWIwNWnnd3uazNi7QuxWQLG8hUeAxCYF3KNfmn5lUle9eGiwMo6a5kCk4lK51Mj3wbcRHa4UgaaQjwf"
		const stringZjMTp9t = "Hct64lVHjMLBFCiz6pLndc73VlyaO3yvVJugssTCPP7jO6ILtIxecPu41NapBNh"
		const uintg3dvvJf = BigInt("1075")
		const WOLFxPIwneI = await WOLF.new(stringIkW8uk6, stringZjMTp9t, uintg3dvvJf, {from: "0x0000000000000000000000000000000000000001"});
		const uintO2hnASU = BigInt("982")
		const addressUZ2d16 = accounts[3]
		const uintnKh3ULS = BigInt("687")
		const addressJOx6RfZ = accounts[0]
		const uintu4DD4wQ = BigInt("308")
		const addressnNfWzsC = accounts[5]
		const uintt1979dS = BigInt("1429")
		const addressdevwh6Y = accounts[4]
		const booltZT2meX = await WOLFxPIwneI.approveAndCall.call(addressUZ2d16, uintO2hnASU, {from: accounts[4]});
		const booldcefJNB = await WOLFxPIwneI.approve.call(addressJOx6RfZ, uintnKh3ULS, {from: "0x0000000000000000000000000000000000000001"});
		const boolZCBd3eH = await WOLFxPIwneI.approveAndCall.call(addressnNfWzsC, uintu4DD4wQ, {from: "0x0000000000000000000000000000000000000001"});
		const booli6wcTKI = await WOLFxPIwneI.approve.call(addressdevwh6Y, uintt1979dS, {from: accounts[2]});
	});

	it('test for WOLF', async () => {
		const stringd4O1Z5Y = "2apzdLVHl2wW8EHUlCQEFUqLlOC31SoxtBlC6qMLymCQgj2FQQQvtoM"
		const string4ZLCf2 = "FnoIsmphiL8gJcY4fWkeiefWm3MLS2n9QXLeh2gxiVBjUmXO4ZsjWqchHfhQEw56LlBmnxWGJacfY6kxo"
		const uintlWKqSi = BigInt("237")
		const WOLFoy1vDLZ = await WOLF.new(stringd4O1Z5Y, string4ZLCf2, uintlWKqSi, {from: accounts[3]});
		const uintumTFG7b = BigInt("957")
		const addressyNd1t07 = accounts[5]
		const uintczwuDD = BigInt("1458")
		const addressKJgLo4b = accounts[0]
		const addressMd3VS2j = accounts[5]
		const uintIpu50C4 = BigInt("487")
		const addressXOrDwWN = accounts[3]
		const addressbto3E26 = accounts[5]
		const uintspLeI31 = BigInt("555")
		const addressglu7v9j = accounts[4]
		const booltQYDCQ5 = await WOLFoy1vDLZ.approveAndCall.call(addressyNd1t07, uintumTFG7b, {from: accounts[3]});
//		const boolQ7VIJuX = await WOLFoy1vDLZ.transferFrom.call(addressMd3VS2j, addressKJgLo4b, uintczwuDD, {from: accounts[5]});
//		const boolmiSaKAc = await WOLFoy1vDLZ.approveAndCall.call(addressXOrDwWN, uintIpu50C4, {from: accounts[3]});
//		const boolbFsa01u = await WOLFoy1vDLZ.transferownership.call(addressbto3E26, {from: accounts[4]});
//		const boolcFBqKGR = await WOLFoy1vDLZ.approveAndCall.call(addressglu7v9j, uintspLeI31, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booltQYDCQ5, true)
		await expect(WOLFoy1vDLZ.transferFrom.call(addressMd3VS2j, addressKJgLo4b, uintczwuDD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringd4O1Z5Y = "2apzdLVHl2wW8EHUlCQEFUqLlOC31SoxtBlC6qMLymCQgj2FQQQvtoM"
		const string4ZLCf2 = "FnoIsmphiL8gJcY4fWkeiefWm3MLS2n9QXLeh2gxiVBjUmXO4ZsjWqchHfhQEw56LlBmnxWGJacfY6kxo"
		const uintm5a2X3X = BigInt("237")
		const WOLFoy1vDLZ = await WOLF.new(stringd4O1Z5Y, string4ZLCf2, uintm5a2X3X, {from: accounts[3]});
		const addresse93lUCZ = accounts[5]
		const uintGyIOVdD = BigInt("1335")
		const addressa9OTuRa = accounts[1]
		const uintltKvyXJ = BigInt("886")
		const addressjSxjuHW = accounts[3]
		const uintgOWpQFr = BigInt("924")
		const addressqsJfFow = accounts[5]
		const uintQKuv6x3 = BigInt("487")
		const addressBGXB7EE = accounts[3]
		const addressA8qANT6 = accounts[4]
		const uintrbYwDE8 = BigInt("555")
		const addressfaGAyr = accounts[4]
		const boolsFgZYb = await WOLFoy1vDLZ.transferownership.call(addresse93lUCZ, {from: accounts[3]});
//		const boolPPpqJ1V = await WOLFoy1vDLZ.approveAndCall.call(addressa9OTuRa, uintGyIOVdD, {from: accounts[5]});
//		const bool9XsbKt = await WOLFoy1vDLZ.approveAndCall.call(addressjSxjuHW, uintltKvyXJ, {from: accounts[2]});
//		const booltQYDCQ5 = await WOLFoy1vDLZ.approveAndCall.call(addressqsJfFow, uintgOWpQFr, {from: accounts[3]});
//		const boolmiSaKAc = await WOLFoy1vDLZ.approveAndCall.call(addressBGXB7EE, uintQKuv6x3, {from: accounts[3]});
//		const boolbFsa01u = await WOLFoy1vDLZ.transferownership.call(addressA8qANT6, {from: accounts[4]});
//		const boolcFBqKGR = await WOLFoy1vDLZ.approveAndCall.call(addressfaGAyr, uintrbYwDE8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolsFgZYb, true)
		await expect(WOLFoy1vDLZ.approveAndCall.call(addressa9OTuRa, uintGyIOVdD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringaF8ohj = "SNOy6cKY1g2rlSwfNpekMjMDyFDNwDWb8oWSv2bKolpRtrwvmDUoHQoBuxY6qwLMJincgLNc6APuLpOa"
		const stringAlWAiXd = "Jbmb0pYrCYjG1XMPWwRPEfl6VCeLwt4n512jqkbwt5xvGCM49DjwgmuNlq5PJYJp1yfwBWyzUq"
		const uintC38HhsI = BigInt("1571")
		const WOLFJ9Ku9Lh = await WOLF.new(stringaF8ohj, stringAlWAiXd, uintC38HhsI, {from: accounts[0]});
		const uintJpgDNRs = BigInt("1108")
		const addresscs0rsF = accounts[3]
		const uintMn7kvVN = BigInt("445")
		const addressuG1aFIP = accounts[1]
		const addressBa4kpyX = accounts[3]
		const addressSa3kmte = accounts[1]
		const uint00wYDO = BigInt("2020")
		const addresswsiPtkV = accounts[2]
		const boolGQ4oHAB = await WOLFJ9Ku9Lh.transfer.call(addresscs0rsF, uintJpgDNRs, {from: accounts[0]});
//		const boolCLlSzEh = await WOLFJ9Ku9Lh.transferFrom.call(addressBa4kpyX, addressuG1aFIP, uintMn7kvVN, {from: accounts[4]});
//		const boolr0ObvF = await WOLFJ9Ku9Lh.transferownership.call(addressSa3kmte, {from: accounts[1]});
//		const boolAXtVt39 = await WOLFJ9Ku9Lh.approve.call(addresswsiPtkV, uint00wYDO, {from: accounts[1]});

		assert.equal(boolGQ4oHAB, true)
		await expect(WOLFJ9Ku9Lh.transferFrom.call(addressBa4kpyX, addressuG1aFIP, uintMn7kvVN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringw5LvU1l = "PSGJluF6yt8wCvIUASHBMEm3Lpd4rQzphyLUrWzbdPYmEtMgMWqfuvdwubupkgD"
		const stringMZk9FR0 = "BHu9bvBiVEWdxlgNis6qm9Hv8dynD7FYPR4zrb2rlWv37xzwRDgezby"
		const uintgrLK2wu = BigInt("376")
		const WOLFyUQf1tO = await WOLF.new(stringw5LvU1l, stringMZk9FR0, uintgrLK2wu, {from: accounts[2]});
		const uintbziMv0 = BigInt("0")
		const addressue7nGQf = accounts[2]
		const addressjS4nnA9 = accounts[5]
		const boolnkuM06o = await WOLFyUQf1tO.transferFrom.call(addressjS4nnA9, addressue7nGQf, uintbziMv0, {from: accounts[0]});

		assert.equal(boolnkuM06o, true)
	});

	it('test for WOLF', async () => {
		const stringd4O1Z5Y = "2apzdLVHl2wW8EHUlCQEFUqLlOC31SoxtBlC6qMLymCQgj2FQQQvtoM"
		const string4ZLCf2 = "FnoIsmphiL8gJcY4fWkeiefWm3MLS2n9QXLeh2gxiVBjUmXO4ZsjWqchHfhQEw56LlBmnxWGJacfY6kxo"
		const uintKrro2uE = BigInt("237")
		const WOLFoy1vDLZ = await WOLF.new(stringd4O1Z5Y, string4ZLCf2, uintKrro2uE, {from: accounts[3]});
		const uintDmncUIF = BigInt("957")
		const addressTQdHqMX = accounts[7]
		const uintEI0KqNQ = BigInt("0")
		const addressNJqLroK = accounts[2]
		const uintRAJGKT4 = BigInt("1772")
		const address2uBRPi = accounts[2]
		const uintubOWurt = BigInt("1860")
		const addressHsssX8 = accounts[5]
		const uintiI1gr1W = BigInt("1392")
		const addressBluA0h = accounts[1]
		const uintPjM37bH = BigInt("491")
		const addressbZ1M9mD = accounts[4]
		const uintpfkmk3s = BigInt("1458")
		const addressk5yPmZN = accounts[0]
		const address9oN2HU = accounts[5]
		const uint8pyjA6 = BigInt("425")
		const addressdB5ZaN4 = "0x0000000000000000000000000000000000000000"
		const addressmH6neOy = accounts[0]
		const uintaoS0Hk = BigInt("478")
		const addressFgVqjil = accounts[3]
		const uintwVwqtND = BigInt("1193")
		const addressS2LgoV4 = accounts[2]
		const addressdkRJQVx = accounts[5]
		const booltQYDCQ5 = await WOLFoy1vDLZ.approveAndCall.call(addressTQdHqMX, uintDmncUIF, {from: accounts[3]});
		const boolFagePqM = await WOLFoy1vDLZ.approveAndCall.call(addressNJqLroK, uintEI0KqNQ, {from: accounts[3]});
//		const boolqilAUax = await WOLFoy1vDLZ.transfer.call(address2uBRPi, uintRAJGKT4, {from: accounts[4]});
//		const booltAfyoOx = await WOLFoy1vDLZ.approve.call(addressHsssX8, uintubOWurt, {from: accounts[2]});
//		const boolsR1yQeT = await WOLFoy1vDLZ.transfer.call(addressBluA0h, uintiI1gr1W, {from: accounts[5]});
//		const booly4kO5R = await WOLFoy1vDLZ.transfer.call(addressbZ1M9mD, uintPjM37bH, {from: accounts[3]});
//		const boolQ7VIJuX = await WOLFoy1vDLZ.transferFrom.call(address9oN2HU, addressk5yPmZN, uintpfkmk3s, {from: accounts[5]});
//		const boolMezIaVD = await WOLFoy1vDLZ.approveAndCall.call(addressdB5ZaN4, uint8pyjA6, {from: accounts[2]});
//		const boolhr2z8Mo = await WOLFoy1vDLZ.transferownership.call(addressmH6neOy, {from: accounts[3]});
//		const boolFBBzco1 = await WOLFoy1vDLZ.approveAndCall.call(addressFgVqjil, uintaoS0Hk, {from: accounts[2]});
//		const boolMxf6iX = await WOLFoy1vDLZ.transferFrom.call(addressdkRJQVx, addressS2LgoV4, uintwVwqtND, {from: accounts[1]});

		assert.equal(boolFagePqM, true)
		assert.equal(booltQYDCQ5, true)
		await expect(WOLFoy1vDLZ.transfer.call(address2uBRPi, uintRAJGKT4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})