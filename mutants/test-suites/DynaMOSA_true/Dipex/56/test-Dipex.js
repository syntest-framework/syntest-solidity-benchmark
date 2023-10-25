const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringA94lxXV = "54Oss8S8b7GtQXeDuzdjuBJH8kVESF0rFbQtrFQOl3rBEzK8cTiuigTGieTNplgU"
		const stringAztqei = "tNU1Qo3XkbLMU8n63KSBVkf2zYlwt2Y8l7cmWuWuPQBPzXAsQX48gWJWspBXrP9F1jOv581iZeQlGSsEfjt"
		const uintFrWe6hc = BigInt("143")
		const DipexiOh6lBt = await Dipex.new(stringA94lxXV, stringAztqei, uintFrWe6hc, {from: accounts[1]});
		const uintZreYNNz = BigInt("1073")
		const addressmBeuFgJ = accounts[3]
		const uintT57mcT = BigInt("1896")
		const addressUC2t0f = accounts[1]
//		const boolsz0ftlI = await DipexiOh6lBt.transfer.call(addressmBeuFgJ, uintZreYNNz, {from: accounts[2]});
//		const boolpYoavMK = await DipexiOh6lBt.approveAndCall.call(addressUC2t0f, uintT57mcT, {from: accounts[1]});

		await expect(DipexiOh6lBt.transfer.call(addressmBeuFgJ, uintZreYNNz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringfobyl5H = "WsfcuqzUA88ieuSy4BwN4dajRanBI3tXx5LX3ToFnK1R5GRtEqx2k7sX1VLXHlf0J3UdOI5jysgS85ZhDQFo4WFXDbu"
		const stringxqwZiEj = "82mWkDl8uiCkEjrxhMzGBzhqxFvPSGh493wx"
		const uintrTzG69l = BigInt("1665")
		const Dipexr1hXcgb = await Dipex.new(stringfobyl5H, stringxqwZiEj, uintrTzG69l, {from: accounts[3]});
		const uintXP9fvfv = BigInt("1511")
		const addressTjWDcdy = accounts[4]
		const addresslglsckp = accounts[0]
		const uintxCPef3Q = BigInt("1565")
		const addressKStjAzx = accounts[4]
//		const booliQB621 = await Dipexr1hXcgb.transferFrom.call(addresslglsckp, addressTjWDcdy, uintXP9fvfv, {from: accounts[2]});
//		const boolUIowuHT = await Dipexr1hXcgb.approve.call(addressKStjAzx, uintxCPef3Q, {from: accounts[1]});

		await expect(Dipexr1hXcgb.transferFrom.call(addresslglsckp, addressTjWDcdy, uintXP9fvfv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringUEzWYHm = "4o39H2QI39fCym2mYCwS0ONKugthIVfraAzyf"
		const stringdfuHPML = "O2P47cPfkW5GwNJ2Z6FTKM5lVqnIPnNFTHOkwgAkuOgIktVi9mmiqHgeFOVATr1nVixrgtHH8ahxXYN19t"
		const uintspILc8h = BigInt("953")
		const Dipexij3Fq7 = await Dipex.new(stringUEzWYHm, stringdfuHPML, uintspILc8h, {from: accounts[3]});
		const uintYhSBLBg = BigInt("621")
		const addressg9Zsejl = accounts[4]
		const addressSFueohV = accounts[3]
		const uintSG98zaT = BigInt("1176")
		const addressw2twrl3 = accounts[0]
		const uintln1mE5v = BigInt("1423")
		const addressOn8oinh = "0x0000000000000000000000000000000000000001"
		const addressun3s0JI = "0x0000000000000000000000000000000000000001"
		const boolfesJBqT = await Dipexij3Fq7.transferFrom.call(addressSFueohV, addressg9Zsejl, uintYhSBLBg, {from: accounts[3]});
		const boolvUqsrhB = await Dipexij3Fq7.approve.call(addressw2twrl3, uintSG98zaT, {from: accounts[3]});
//		const boolSfuOYMW = await Dipexij3Fq7.transferFrom.call(addressun3s0JI, addressOn8oinh, uintln1mE5v, {from: accounts[4]});

		assert.equal(boolfesJBqT, true)
		assert.equal(boolvUqsrhB, true)
		await expect(Dipexij3Fq7.transferFrom.call(addressun3s0JI, addressOn8oinh, uintln1mE5v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const string3COoXC = "OQTtDaRKRSrndFiQGPs3lWCuI7WtjmqGK2kgqAMVELXtrcp"
		const stringPgXwcpG = "Pfe5ZGWpFCmWGxOOvuyIbPJ7z2kBgKlu1TXHJbvLAtfFMXVdzqu3L36OAF15Xhac4QvuKsMVESN9UntG6A"
		const uintj0DUqiz = BigInt("437")
		const DipexaJWO65s = await Dipex.new(string3COoXC, stringPgXwcpG, uintj0DUqiz, {from: accounts[1]});
		const uintZgb2wcr = BigInt("369")
		const address52r8yi = accounts[3]
		const uintJ2nfv4F = BigInt("1243")
		const addressntZHjjt = accounts[0]
		const uintZOXPza = BigInt("851")
		const addresspi3ACbD = accounts[5]
		const uintt7G6dw = BigInt("1075")
		const addressvyI0wQv = accounts[0]
		const boolUXwxsjO = await DipexaJWO65s.approveAndCall.call(address52r8yi, uintZgb2wcr, {from: accounts[1]});
		const boolVxxWnf8 = await DipexaJWO65s.approve.call(addressntZHjjt, uintJ2nfv4F, {from: accounts[1]});
		const boolrRCGTWs = await DipexaJWO65s.approve.call(addresspi3ACbD, uintZOXPza, {from: accounts[1]});
		const boolmNR2L1a = await DipexaJWO65s.approve.call(addressvyI0wQv, uintt7G6dw, {from: accounts[3]});

		assert.equal(boolUXwxsjO, true)
		assert.equal(boolVxxWnf8, true)
		assert.equal(boolmNR2L1a, true)
		assert.equal(boolrRCGTWs, true)
	});

	it('test for Dipex', async () => {
		const stringFILFYmC = "ePxJBdcclolB81TaodFJzbexI"
		const stringUrjo4N = "PDWOt9qTHR6pU8aNqOhPSc5lqtqFsxWOuHX5lPH78NvW4BVdvk3pvXa3v0M9uOPSwZGtkzKJTQEajs"
		const uints9VDZPy = BigInt("1007")
		const DipexNOIono6 = await Dipex.new(stringFILFYmC, stringUrjo4N, uints9VDZPy, {from: accounts[2]});
		const addressjvYpz8a = accounts[0]
		const uintrzsmZiP = BigInt("1771")
		const addressDmoZIiS = accounts[4]
//		const boolZEC0s0 = await DipexNOIono6.transferownership.call(addressjvYpz8a, {from: accounts[4]});
//		const boolMrAIx7T = await DipexNOIono6.transfer.call(addressDmoZIiS, uintrzsmZiP, {from: accounts[1]});

		await expect(DipexNOIono6.transferownership.call(addressjvYpz8a, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringcmv5WN = "XUA4EmUJ6KOGwE7NU31KqaL"
		const stringPe1RfP = "1HLxzXhN37as9DF1BJ4DSkCnn7znDN6k0Xl7gaRsDibicF8BnVvNf"
		const uintc7pD8Z = BigInt("713")
		const DipexEN0xhsI = await Dipex.new(stringcmv5WN, stringPe1RfP, uintc7pD8Z, {from: "0x0000000000000000000000000000000000000001"});
		const uintlKk77P = BigInt("1041")
		const addresshAabk4W = accounts[4]
		const uintQsXJUmz = BigInt("917")
		const addressubA9RAZ = accounts[3]
		const addressoexHEB0 = accounts[2]
		const boolCpMUHXm = await DipexEN0xhsI.transfer.call(addresshAabk4W, uintlKk77P, {from: accounts[3]});
		const booltyFtVDm = await DipexEN0xhsI.approveAndCall.call(addressubA9RAZ, uintQsXJUmz, {from: accounts[5]});
		const boolBDYXFGh = await DipexEN0xhsI.transferownership.call(addressoexHEB0, {from: accounts[4]});
	});

	it('test for Dipex', async () => {
		const stringFILFYmC = "ePxJBdcclolB81TaodFJzbexI"
		const stringUrjo4N = "PDWOt9qTHR6pU8aNqOhPSc5lqtqFsxWOuHX5lPH78NvW4BVdvk3pvXa3v0M9uOPSwZGtkzKJTQEajs"
		const uintLcs9x4l = BigInt("1007")
		const DipexNOIono6 = await Dipex.new(stringFILFYmC, stringUrjo4N, uintLcs9x4l, {from: accounts[2]});
		const addressfPXHJhD = accounts[4]
		const uinttoS3Ok3 = BigInt("1275")
		const addressn7XNlIj = accounts[4]
		const addressf7BpOry = accounts[1]
		const boolaPhZCMt = await DipexNOIono6.transferownership.call(addressfPXHJhD, {from: accounts[2]});
//		const boolidEhvlv = await DipexNOIono6.approveAndCall.call(addressn7XNlIj, uinttoS3Ok3, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZEC0s0 = await DipexNOIono6.transferownership.call(addressf7BpOry, {from: accounts[4]});

		assert.equal(boolaPhZCMt, true)
		await expect(DipexNOIono6.approveAndCall.call(addressn7XNlIj, uinttoS3Ok3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringMrZOeWF = "iDtZL6X2"
		const stringQtbMRLV = "do7pffeh4me6HRJsfr25uHC4aC65Fdlq83aCLr2VHzoAbhYeQuuXIzZyiw9q4pDdcwM6nT5L1KjJ3wyrdkmO7PcHne"
		const uintCrZailv = BigInt("1090")
		const DipexdZvmnl = await Dipex.new(stringMrZOeWF, stringQtbMRLV, uintCrZailv, {from: accounts[2]});
		const uintL8YEFdW = BigInt("924")
		const addressvrX7xYa = accounts[1]
		const uintiuDzF8T = BigInt("0")
		const addressf9HUK3 = accounts[3]
		const uintF1Yj3od = BigInt("651")
		const addresso80Aacm = accounts[4]
		const addressEYznkvN = accounts[4]
		const boolmgoOzv9 = await DipexdZvmnl.approveAndCall.call(addressvrX7xYa, uintL8YEFdW, {from: accounts[2]});
		const boolUtBFiDS = await DipexdZvmnl.transfer.call(addressf9HUK3, uintiuDzF8T, {from: accounts[2]});
//		const boolcwkd3jN = await DipexdZvmnl.transferFrom.call(addressEYznkvN, addresso80Aacm, uintF1Yj3od, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolUtBFiDS, true)
		assert.equal(boolmgoOzv9, true)
		await expect(DipexdZvmnl.transferFrom.call(addressEYznkvN, addresso80Aacm, uintF1Yj3od, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringfobyl5H = "WsfcuqzUA88ieuSy4BwN4dajRanBI3tXx5LX3ToFnK1R5GRtEqx2k7sX1VLXHlf0J3UdOI5jysgS85ZhDQFo4WFXDbu"
		const stringxqwZiEj = "82mWkDl8uiCkEjrxhMzGBzhqxFvPSGh493wx"
		const uintvXNjxam = BigInt("1665")
		const Dipexr1hXcgb = await Dipex.new(stringfobyl5H, stringxqwZiEj, uintvXNjxam, {from: accounts[3]});
		const uintRb4JTtf = BigInt("0")
		const addressIKl1id = accounts[4]
		const uintoiSuWL = BigInt("624")
		const addressflVg4yi = accounts[5]
		const addressH5pF0ub = accounts[0]
		const boolvs9pDD = await Dipexr1hXcgb.approveAndCall.call(addressIKl1id, uintRb4JTtf, {from: accounts[3]});
//		const booliQB621 = await Dipexr1hXcgb.transferFrom.call(addressH5pF0ub, addressflVg4yi, uintoiSuWL, {from: accounts[2]});

		assert.equal(boolvs9pDD, true)
		await expect(Dipexr1hXcgb.transferFrom.call(addressH5pF0ub, addressflVg4yi, uintoiSuWL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})