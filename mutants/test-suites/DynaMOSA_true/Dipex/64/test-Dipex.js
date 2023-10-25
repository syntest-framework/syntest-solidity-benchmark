const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringojqyCOQ = "YaiNPITLYl3jJ5QJxdzkKBphd70gOez"
		const stringQWLwONf = "oi9Qe3CONpj0koHOLVCVwPogdFsnboDlxEzy6y5HQyuDIKE4pFun9Phuw7GKEN2OlGlCCoRcOP19VocDPtUYnWRjjw6m4N5"
		const uintVyzSkFa = BigInt("1445")
		const DipexVNHDsDd = await Dipex.new(stringojqyCOQ, stringQWLwONf, uintVyzSkFa, {from: accounts[3]});
		const addressrAvird4 = accounts[3]
		const addressVhDEAiF = accounts[3]
		const addressrjqt05u = accounts[1]
		const uinttgrfT44 = BigInt("721")
		const addressiGH2uD = accounts[1]
//		const boolFZ4P7ju = await DipexVNHDsDd.transferownership.call(addressrAvird4, {from: accounts[0]});
//		const booljAcLc00 = await DipexVNHDsDd.transferownership.call(addressVhDEAiF, {from: accounts[4]});
//		const boolNfH0oY5 = await DipexVNHDsDd.transferownership.call(addressrjqt05u, {from: accounts[3]});
//		const boolG3aZfi5 = await DipexVNHDsDd.approve.call(addressiGH2uD, uinttgrfT44, {from: accounts[2]});

		await expect(DipexVNHDsDd.transferownership.call(addressrAvird4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringNXfSVYT = "DVlk7FMG53JqldFj49XtPtsq7ACl88rkpmfWMG44q3nrKxBeWoP949"
		const stringdoqrc7D = "3vbkxNDG7eQ7aDOTKIOztBiAr0XTeI9bp1fFor8vtltCeg9X4KuZOU4uYRuDPXsBPOTpcrJqe5LI3Xne"
		const uintbzBWfFM = BigInt("1202")
		const DipexDj5TiX4 = await Dipex.new(stringNXfSVYT, stringdoqrc7D, uintbzBWfFM, {from: "0x0000000000000000000000000000000000000001"});
		const uintKaaQ6Xb = BigInt("1574")
		const addressIoxxZi5 = accounts[0]
		const uintxqFLAlT = BigInt("1911")
		const addressHDICBke = accounts[0]
		const boolUSWjR6H = await DipexDj5TiX4.approveAndCall.call(addressIoxxZi5, uintKaaQ6Xb, {from: accounts[1]});
		const boolBZNpnHk = await DipexDj5TiX4.approve.call(addressHDICBke, uintxqFLAlT, {from: accounts[5]});
	});

	it('test for Dipex', async () => {
		const stringE8F6r0d = "FqRCi51djWFYXOoWQ74rqUOiby67n5CoKRx4fFAYTN1j09w5t4Jb"
		const stringbOy7u56 = "hUtmwq0jmDAkQ9pEcnWW3S2lI6P2ggvpE9sVrE7posqtgViARb2fhe1NvwxDwMaNjWg5lCvT93lKMCDWHeofVWkvlOEd9YQL"
		const uintMKaWoPS = BigInt("1518")
		const DipexEQ7Jxc = await Dipex.new(stringE8F6r0d, stringbOy7u56, uintMKaWoPS, {from: accounts[0]});
		const uintujJVvMu = BigInt("997")
		const addressIiCbQ8q = "0x0000000000000000000000000000000000000001"
		const addresswFaq9l = accounts[4]
		const addressgziLRTZ = accounts[0]
		const uinta2zzZsU = BigInt("899")
		const addressAFoEHjN = accounts[0]
		const uintRa1VAm = BigInt("1389")
		const addressoCm9cT1 = accounts[3]
		const addressXS8xebO = accounts[2]
		const addressbxaGIzO = accounts[5]
		const uintfItfdHK = BigInt("86")
		const addressWFgrdUm = accounts[0]
//		const boolSCurlTK = await DipexEQ7Jxc.transferFrom.call(addresswFaq9l, addressIiCbQ8q, uintujJVvMu, {from: accounts[5]});
//		const boolf4CbfDX = await DipexEQ7Jxc.transferownership.call(addressgziLRTZ, {from: accounts[1]});
//		const boolpR14P88 = await DipexEQ7Jxc.approve.call(addressAFoEHjN, uinta2zzZsU, {from: accounts[1]});
//		const boolFcbw1Hn = await DipexEQ7Jxc.transferFrom.call(addressXS8xebO, addressoCm9cT1, uintRa1VAm, {from: accounts[0]});
//		const boolRAxe6Tw = await DipexEQ7Jxc.transferownership.call(addressbxaGIzO, {from: accounts[3]});
//		const boolhueY4bK = await DipexEQ7Jxc.approve.call(addressWFgrdUm, uintfItfdHK, {from: accounts[5]});

		await expect(DipexEQ7Jxc.transferFrom.call(addresswFaq9l, addressIiCbQ8q, uintujJVvMu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringpJBkcJr = "QbYHN"
		const stringPvYUqfj = "Vs9Bfc57"
		const uintGHDAfmU = BigInt("1367")
		const DipexUqqzDuI = await Dipex.new(stringpJBkcJr, stringPvYUqfj, uintGHDAfmU, {from: accounts[2]});
		const uintMuQvmqZ = BigInt("351")
		const addressWtMhzlw = accounts[3]
		const uintlTh3WD4 = BigInt("352")
		const addressvCNAIV3 = accounts[4]
		const uintDCucvHs = BigInt("1789")
		const addressPpOEQso = accounts[0]
		const boolJfTTPU7 = await DipexUqqzDuI.approve.call(addressWtMhzlw, uintMuQvmqZ, {from: accounts[1]});
		const boolSmJ53U = await DipexUqqzDuI.approve.call(addressvCNAIV3, uintlTh3WD4, {from: accounts[2]});
		const boolk6FHM47 = await DipexUqqzDuI.approve.call(addressPpOEQso, uintDCucvHs, {from: accounts[2]});

		assert.equal(boolJfTTPU7, true)
		assert.equal(boolSmJ53U, true)
		assert.equal(boolk6FHM47, true)
	});

	it('test for Dipex', async () => {
		const stringbE8nOZ = "CcORWmuqXJl"
		const stringMjh7m3Q = "Kcqjp46OkextJnQ"
		const uintEykt7IX = BigInt("1151")
		const DipexKaUbYO = await Dipex.new(stringbE8nOZ, stringMjh7m3Q, uintEykt7IX, {from: accounts[1]});
		const uinthmvQl3K = BigInt("1658")
		const addressHOwXhPj = accounts[2]
		const uintTan6D45 = BigInt("1901")
		const addressEH71tv7 = accounts[0]
		const addressEttSXKo = accounts[0]
		const uint2C1uiC = BigInt("230")
		const addressi4cryb = accounts[4]
		const boolNOEjZ87 = await DipexKaUbYO.transfer.call(addressHOwXhPj, uinthmvQl3K, {from: accounts[1]});
//		const boolHdNNKF5 = await DipexKaUbYO.transferFrom.call(addressEttSXKo, addressEH71tv7, uintTan6D45, {from: accounts[1]});
//		const boolPprbqs = await DipexKaUbYO.approve.call(addressi4cryb, uint2C1uiC, {from: accounts[1]});

		assert.equal(boolNOEjZ87, true)
		await expect(DipexKaUbYO.transferFrom.call(addressEttSXKo, addressEH71tv7, uintTan6D45, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringGeXJw6G = "BbnS60b7jLmgphpn96DVIKcBoYmtPxi"
		const stringd466jlY = "6UNOgwu24x8HdoX25dmx2mYZLvaTmwZDPgQcozZWcIZ6kCcHDCrhDmr7"
		const uintjApmTTq = BigInt("1282")
		const Dipexwlwyirz = await Dipex.new(stringGeXJw6G, stringd466jlY, uintjApmTTq, {from: accounts[2]});
		const uintQzLs89A = BigInt("288")
		const addressM2NyXbx = "0x0000000000000000000000000000000000000001"
		const addressNA6LmLd = accounts[4]
		const addressRSzOlXw = accounts[2]
		const addressTIzU6hC = "0x0000000000000000000000000000000000000001"
//		const boolxCUnlzx = await Dipexwlwyirz.transfer.call(addressM2NyXbx, uintQzLs89A, {from: accounts[5]});
//		const boolD0vbGY = await Dipexwlwyirz.transferownership.call(addressNA6LmLd, {from: accounts[1]});
//		const boolSuvevTO = await Dipexwlwyirz.transferownership.call(addressRSzOlXw, {from: accounts[4]});
//		const boollRaKxNz = await Dipexwlwyirz.transferownership.call(addressTIzU6hC, {from: accounts[0]});

		await expect(Dipexwlwyirz.transfer.call(addressM2NyXbx, uintQzLs89A, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringBF6j10l = "XaFsR9SWLe6lmVCOQUtN73SwSFzA1T904t1"
		const stringyh3drVi = "7gwMxEJXOJ3QFt9qaWy4TOfKGMf9sFMEf2QE0TG4Rd7YfHKi8DkcQS"
		const uintvnlNZY6 = BigInt("1310")
		const DipexlrbmaX3 = await Dipex.new(stringBF6j10l, stringyh3drVi, uintvnlNZY6, {from: accounts[1]});
		const uintKXGWjLp = BigInt("1607")
		const addressc4AGfF2 = accounts[1]
		const uintg38RARv = BigInt("304")
		const addressN2Ns2nO = accounts[4]
		const uint7FDq5T = BigInt("1217")
		const addresszV0hNR = accounts[4]
		const uintpoJWfqI = BigInt("926")
		const addressx6pD8A = accounts[1]
		const addressQlXfRV = accounts[0]
		const boolH2MvV0x = await DipexlrbmaX3.approveAndCall.call(addressc4AGfF2, uintKXGWjLp, {from: accounts[1]});
//		const boole5rKYlJ = await DipexlrbmaX3.transfer.call(addressN2Ns2nO, uintg38RARv, {from: accounts[4]});
//		const boolHMJduTf = await DipexlrbmaX3.approveAndCall.call(addresszV0hNR, uint7FDq5T, {from: accounts[4]});
//		const booldHoZJtN = await DipexlrbmaX3.transferFrom.call(addressQlXfRV, addressx6pD8A, uintpoJWfqI, {from: accounts[5]});

		assert.equal(boolH2MvV0x, true)
		await expect(DipexlrbmaX3.transfer.call(addressN2Ns2nO, uintg38RARv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringca4Wnm = "bcHf1hIouOJY5qvgKsQcXOqFxhJNBWUZgGRbSLkAVyss"
		const stringLmYOKPO = "xViVSS3gcuOYSk2axLwjqCWXvcnq6AgIyd7NCtN3f0VBQTRYTwHn4DbAYOLfl6HPMsBlaxneuj3wuB"
		const uintV6iUHt6 = BigInt("44")
		const DipexVKWtrUt = await Dipex.new(stringca4Wnm, stringLmYOKPO, uintV6iUHt6, {from: accounts[1]});
		const addressTHzREQl = accounts[1]
		const uintokrxrkW = BigInt("108")
		const addressqZZrhbl = accounts[5]
		const addressx8mkxYV = accounts[3]
		const uintGKJmUzW = BigInt("1404")
		const addressvVxthqG = accounts[3]
		const boolpNl6qVj = await DipexVKWtrUt.transferownership.call(addressTHzREQl, {from: accounts[1]});
//		const boolFis0vRL = await DipexVKWtrUt.transferFrom.call(addressx8mkxYV, addressqZZrhbl, uintokrxrkW, {from: accounts[4]});
//		const boolboEWEf = await DipexVKWtrUt.approve.call(addressvVxthqG, uintGKJmUzW, {from: accounts[1]});

		assert.equal(boolpNl6qVj, true)
		await expect(DipexVKWtrUt.transferFrom.call(addressx8mkxYV, addressqZZrhbl, uintokrxrkW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringBF6j10l = "XaFsR9SWLe6lmVCOQUtN73SwSFzA1T904t1"
		const stringyh3drVi = "7gwMxEJXOJ3QFt9qaWy4TOfKGMf9sFMEf2QE0TG4Rd7YfHKi8DkcQS"
		const uintPDp0fAd = BigInt("1310")
		const DipexlrbmaX3 = await Dipex.new(stringBF6j10l, stringyh3drVi, uintPDp0fAd, {from: accounts[1]});
		const uintDQx4BWl = BigInt("769")
		const addressSgcIud1 = accounts[2]
		const uintJF8Lc1I = BigInt("0")
		const addressCvT1IXV = accounts[2]
		const addressZ2LT2GJ = accounts[1]
		const uintjEDEXR5 = BigInt("926")
		const addressN5FwJFF = accounts[2]
		const addresseYovLx4 = accounts[0]
		const uintsDXC51T = BigInt("1709")
		const addressAVdhABo = accounts[0]
		const uintGViIMrx = BigInt("1181")
		const addresssFPXNuf = accounts[0]
		const addressXFcyLMb = "0x0000000000000000000000000000000000000001"
		const uintMQm8R3N = BigInt("1926")
		const addressEZxuxr = accounts[0]
		const addressSiB2DPV = accounts[4]
		const booluLUZlqu = await DipexlrbmaX3.transfer.call(addressSgcIud1, uintDQx4BWl, {from: accounts[1]});
		const bool9FB3Ry = await DipexlrbmaX3.transferFrom.call(addressZ2LT2GJ, addressCvT1IXV, uintJF8Lc1I, {from: accounts[0]});
//		const booldHoZJtN = await DipexlrbmaX3.transferFrom.call(addresseYovLx4, addressN5FwJFF, uintjEDEXR5, {from: accounts[5]});
//		const boolQMpP98A = await DipexlrbmaX3.approveAndCall.call(addressAVdhABo, uintsDXC51T, {from: accounts[3]});
//		const boolnB5EnkZ = await DipexlrbmaX3.transferFrom.call(addressXFcyLMb, addresssFPXNuf, uintGViIMrx, {from: accounts[2]});
//		const boolp8WdF5T = await DipexlrbmaX3.transferFrom.call(addressSiB2DPV, addressEZxuxr, uintMQm8R3N, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool9FB3Ry, true)
		assert.equal(booluLUZlqu, true)
		await expect(DipexlrbmaX3.transferFrom.call(addresseYovLx4, addressN5FwJFF, uintjEDEXR5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringBF6j10l = "XaFsR9SWLe6lmVCOQUtN73SwSFzA1T904t1"
		const stringyh3drVi = "7gwMxEJXOJ3QFt9qaWy4TOfKGMf9sFMEf2QE0TG4Rd7YfHKi8DkcQS"
		const uintJnleBQ6 = BigInt("1310")
		const DipexlrbmaX3 = await Dipex.new(stringBF6j10l, stringyh3drVi, uintJnleBQ6, {from: accounts[1]});
		const uintfbaWFx5 = BigInt("265")
		const addressWGbBap9 = accounts[1]
		const uintvCRAuu = BigInt("0")
		const addressVQyPTXX = accounts[2]
		const uintucDvU2A = BigInt("1254")
		const addressSGFucE = accounts[3]
		const addressASXZAJK = accounts[4]
		const uinttXm6RRM = BigInt("167")
		const addressaZf7SQx = accounts[1]
		const uintyxGZpeP = BigInt("1953")
		const addressANkAQv2 = accounts[3]
		const addressfZU6Cbi = accounts[1]
		const addresss6r2g1e = accounts[1]
		const uintZFumFc5 = BigInt("304")
		const addressI4nLh0f = accounts[4]
		const uinteXjyBiq = BigInt("118")
		const addresseL3zbHf = accounts[5]
		const uintFJWJ5yK = BigInt("1724")
		const addressD7gqg12 = accounts[1]
		const uintOHb49NN = BigInt("1480")
		const addressSMhxtRp = accounts[0]
		const addressI9JZaFW = accounts[1]
		const uintz8eZktC = BigInt("1218")
		const addressMrMCEmY = accounts[4]
		const uintYKubuh = BigInt("926")
		const addressr7y7OQo = accounts[1]
		const addressFCnBblL = accounts[0]
		const boolH2MvV0x = await DipexlrbmaX3.approveAndCall.call(addressWGbBap9, uintfbaWFx5, {from: accounts[1]});
		const boolR6TAffx = await DipexlrbmaX3.approveAndCall.call(addressVQyPTXX, uintvCRAuu, {from: accounts[1]});
//		const boolAotDZn = await DipexlrbmaX3.transferFrom.call(addressASXZAJK, addressSGFucE, uintucDvU2A, {from: accounts[1]});
//		const boolxurVw97 = await DipexlrbmaX3.approveAndCall.call(addressaZf7SQx, uinttXm6RRM, {from: accounts[2]});
//		const boolbMVWySo = await DipexlrbmaX3.transferFrom.call(addressfZU6Cbi, addressANkAQv2, uintyxGZpeP, {from: accounts[0]});
//		const boolt0JuUE = await DipexlrbmaX3.transferownership.call(addresss6r2g1e, {from: "0x0000000000000000000000000000000000000001"});
//		const boole5rKYlJ = await DipexlrbmaX3.transfer.call(addressI4nLh0f, uintZFumFc5, {from: accounts[4]});
//		const boolm5c8DH = await DipexlrbmaX3.approveAndCall.call(addresseL3zbHf, uinteXjyBiq, {from: accounts[1]});
//		const boolphqQQL2 = await DipexlrbmaX3.approveAndCall.call(addressD7gqg12, uintFJWJ5yK, {from: accounts[3]});
//		const boolGhbXkkE = await DipexlrbmaX3.transferFrom.call(addressI9JZaFW, addressSMhxtRp, uintOHb49NN, {from: accounts[1]});
//		const booloxWolyR = await DipexlrbmaX3.approve.call(addressMrMCEmY, uintz8eZktC, {from: accounts[3]});
//		const booldHoZJtN = await DipexlrbmaX3.transferFrom.call(addressFCnBblL, addressr7y7OQo, uintYKubuh, {from: accounts[5]});

		assert.equal(boolH2MvV0x, true)
		assert.equal(boolR6TAffx, true)
		await expect(DipexlrbmaX3.transferFrom.call(addressASXZAJK, addressSGFucE, uintucDvU2A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})