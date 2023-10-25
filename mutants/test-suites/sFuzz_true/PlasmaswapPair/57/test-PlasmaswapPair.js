const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairegTAMX = await PlasmaswapPair.new({from: accounts[1]});
		const addresskS7BbBe = accounts[5]
		const addressAlmv2gm = accounts[3]
		const addressUO06Qh0 = accounts[2]
//		const uintjlG3c9y = await PlasmaswapPairegTAMX.mint.call(addresskS7BbBe, {from: accounts[2]});
//		const uintFblb2N = await PlasmaswapPairegTAMX.burn.call(addressAlmv2gm, {from: accounts[1]});
//		const addressklKILNE = await PlasmaswapPairegTAMX.skim.call(addressUO06Qh0, {from: accounts[0]});

		await expect(PlasmaswapPairegTAMX.mint.call(addresskS7BbBe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairJcoIdtq = await PlasmaswapPair.new({from: accounts[2]});
		const addresszCQ25Xw = accounts[0]
		const byteXq9GDXl = "0x1210150f0f010b1216091a151d17180a06051010061314181311"
		const addressWyf4N2y = accounts[5]
		const uinth1MfxO2 = BigInt("1864")
		const uintWWBQ0YA = BigInt("1861")
		const byteGEu3bZ4 = "0x1a0a06110c1d07070d041910"
		const addressmDfT4AF = accounts[5]
		const uintDKRMj5m = BigInt("1420")
		const uintXUzbLdP = BigInt("1812")
		const addressxBnPqyI = accounts[2]
		const addressiidtCW = accounts[4]
		const addressoxJWcy = accounts[0]
		const addressFlWJ7Fu = accounts[1]
//		const addressDKo0Bmp = await PlasmaswapPairJcoIdtq.skim.call(addresszCQ25Xw, {from: accounts[1]});
//		const uintKbk26vc = await PlasmaswapPairJcoIdtq.swap.call(uintWWBQ0YA, uinth1MfxO2, addressWyf4N2y, byteXq9GDXl, {from: accounts[4]});
//		const uintIgQLOWn = await PlasmaswapPairJcoIdtq.swap.call(uintXUzbLdP, uintDKRMj5m, addressmDfT4AF, byteGEu3bZ4, {from: accounts[4]});
//		const addressIpRG7t6 = await PlasmaswapPairJcoIdtq.initialize.call(addressiidtCW, addressxBnPqyI, {from: accounts[1]});
//		const uintS08aoi = await PlasmaswapPairJcoIdtq.burn.call(addressoxJWcy, {from: accounts[1]});
//		const uintcmrwOtN = await PlasmaswapPairJcoIdtq.mint.call(addressFlWJ7Fu, {from: accounts[1]});

		await expect(PlasmaswapPairJcoIdtq.skim.call(addresszCQ25Xw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairFugJqOf = await PlasmaswapPair.new({from: accounts[2]});
		const byteNh9GSzY = "0x14040c1117070712171302080514020f1d1d11080919"
		const addressBASCxPY = accounts[2]
		const uintTaBQXwW = BigInt("675")
		const uintHJhqzCX = BigInt("605")
		const addresssLnvWUl = accounts[5]
		const byteksr2qiW = "0x0615171f0416171b1d041c0f0c"
		const addressVjxIEVz = accounts[1]
		const uintZd1DWLz = BigInt("200")
		const uintfr2SryG = BigInt("744")
		const uint112N2nao2t = await PlasmaswapPairFugJqOf.getReserves.call({from: accounts[1]});
//		const uintwUGEFx2 = await PlasmaswapPairFugJqOf.swap.call(uintHJhqzCX, uintTaBQXwW, addressBASCxPY, byteNh9GSzY, {from: accounts[3]});
//		const uint112FnlLF6 = await PlasmaswapPairFugJqOf.getReserves.call({from: accounts[3]});
//		const addressrnm4jo = await PlasmaswapPairFugJqOf.skim.call(addresssLnvWUl, {from: accounts[2]});
//		const uintMPanfDJ = await PlasmaswapPairFugJqOf.swap.call(uintfr2SryG, uintZd1DWLz, addressVjxIEVz, byteksr2qiW, {from: accounts[4]});

		await expect(PlasmaswapPairFugJqOf.swap.call(uintHJhqzCX, uintTaBQXwW, addressBASCxPY, byteNh9GSzY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairQoSSOec = await PlasmaswapPair.new({from: accounts[1]});
		const addresscyqjWNp = accounts[3]
		const addressLykNmUS = accounts[3]
		const addressWOZ864F = accounts[3]
		const addressFSCF0XL = accounts[2]
//		const uintipETMFz = await PlasmaswapPairQoSSOec.burn.call(addresscyqjWNp, {from: accounts[0]});
//		const uintECBhc4b = await PlasmaswapPairQoSSOec.burn.call(addressLykNmUS, {from: accounts[0]});
//		const uintOQJD1JT = await PlasmaswapPairQoSSOec.mint.call(addressWOZ864F, {from: accounts[1]});
//		const addressGyJ0Di = await PlasmaswapPairQoSSOec.skim.call(addressFSCF0XL, {from: accounts[4]});
//		await PlasmaswapPairQoSSOec.lock.call({from: accounts[2]});

		await expect(PlasmaswapPairQoSSOec.burn.call(addresscyqjWNp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPair2o00ju = await PlasmaswapPair.new({from: accounts[2]});
		const addressz02pE6b = accounts[2]
		const addressBqfqGhJ = accounts[3]
		const byteSraiuMu = "0x1106110d070f090f1f090a180213010f1209151b0711090d0115090e1c"
		const addressUMZhmFW = accounts[5]
		const uinth30XjUE = BigInt("164")
		const uintoVVcLxD = BigInt("1997")
		const addressayD4ID2 = accounts[2]
		const addressaqlV9zZ = accounts[1]
//		await PlasmaswapPair2o00ju.sync.call({from: accounts[4]});
//		const addressDo0loGM = await PlasmaswapPair2o00ju.initialize.call(addressBqfqGhJ, addressz02pE6b, {from: accounts[2]});
//		const uintMnmZaqA = await PlasmaswapPair2o00ju.swap.call(uintoVVcLxD, uinth30XjUE, addressUMZhmFW, byteSraiuMu, {from: accounts[0]});
//		const addressWRJNteD = await PlasmaswapPair2o00ju.skim.call(addressayD4ID2, {from: accounts[2]});
//		const addressNdfAAFs = await PlasmaswapPair2o00ju.skim.call(addressaqlV9zZ, {from: accounts[0]});

		await expect(PlasmaswapPair2o00ju.sync.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairBj8sma9 = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const bytey2NWSD3 = "0x16111719120f16151c191f1d0c100e06011f"
		const addressyqVl6Sj = accounts[5]
		const uintk6eHJag = BigInt("871")
		const uintZMwfax0 = BigInt("1839")
		const addressmzSMQG7 = accounts[4]
		const uintiNDAQY = await PlasmaswapPairBj8sma9.swap.call(uintZMwfax0, uintk6eHJag, addressyqVl6Sj, bytey2NWSD3, {from: accounts[1]});
		const uintgaz9RBp = await PlasmaswapPairBj8sma9.burn.call(addressmzSMQG7, {from: "0x0000000000000000000000000000000000000001"});
		await PlasmaswapPairBj8sma9.lock.call({from: accounts[2]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairvQj6BHD = await PlasmaswapPair.new({from: accounts[1]});
		const addressGqJQuOu = accounts[3]
		const addressrSF0bG7 = accounts[2]
		const addressaDUYlzP = accounts[0]
		const addressZupdL2Q = accounts[4]
		const addressC8mxR8h = accounts[4]
		const addressNzgGHQ = accounts[4]
		const addressAvRxo1k = accounts[5]
//		const addressbZKB7fW = await PlasmaswapPairvQj6BHD.initialize.call(addressrSF0bG7, addressGqJQuOu, {from: accounts[5]});
//		const uintRxGCY9l = await PlasmaswapPairvQj6BHD.mint.call(addressaDUYlzP, {from: accounts[3]});
//		const uintjt9r3zV = await PlasmaswapPairvQj6BHD.mint.call(addressZupdL2Q, {from: "0x0000000000000000000000000000000000000001"});
//		const uintkwKlWL4 = await PlasmaswapPairvQj6BHD.mint.call(addressC8mxR8h, {from: accounts[0]});
//		const addressJ4js3cC = await PlasmaswapPairvQj6BHD.skim.call(addressNzgGHQ, {from: accounts[4]});
//		const uint9SxBm6 = await PlasmaswapPairvQj6BHD.mint.call(addressAvRxo1k, {from: accounts[1]});

		await expect(PlasmaswapPairvQj6BHD.initialize.call(addressrSF0bG7, addressGqJQuOu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairFugJqOf = await PlasmaswapPair.new({from: accounts[2]});
		const bytecwzRRId = "0x0515100a0f0a0f000e18130103041f021b130e0c"
		const addressXhMktb = accounts[3]
		const uintoWnxomF = BigInt("339")
		const uintHiQBe7I = BigInt("989")
		const byteRPzlety = "0x14040c1117070712171302080514020f1d1d11080919"
		const address460SWC = accounts[2]
		const uintz416AoW = BigInt("675")
		const uintxfskNYy = BigInt("605")
		const addresshidK0KU = accounts[5]
		const byteNJ7xDHf = "0x0615171f0416171b1d041c0f0c"
		const addressW2j4dPG = accounts[1]
		const uintQg2LEXM = BigInt("200")
		const uintGGgUwx7 = BigInt("744")
		const addressOqIIEhb = accounts[2]
		const uint112N2nao2t = await PlasmaswapPairFugJqOf.getReserves.call({from: accounts[1]});
//		await PlasmaswapPairFugJqOf.lock.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintQd0TOHE = await PlasmaswapPairFugJqOf.swap.call(uintHiQBe7I, uintoWnxomF, addressXhMktb, bytecwzRRId, {from: accounts[0]});
//		const uintwUGEFx2 = await PlasmaswapPairFugJqOf.swap.call(uintxfskNYy, uintz416AoW, address460SWC, byteRPzlety, {from: accounts[3]});
//		const uint112FnlLF6 = await PlasmaswapPairFugJqOf.getReserves.call({from: accounts[3]});
//		const addressrnm4jo = await PlasmaswapPairFugJqOf.skim.call(addresshidK0KU, {from: accounts[2]});
//		const uintMPanfDJ = await PlasmaswapPairFugJqOf.swap.call(uintGGgUwx7, uintQg2LEXM, addressW2j4dPG, byteNJ7xDHf, {from: accounts[4]});
//		const uintXSJcLPc = await PlasmaswapPairFugJqOf.burn.call(addressOqIIEhb, {from: accounts[1]});

		await expect(PlasmaswapPairFugJqOf.lock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairUtxeiaL = await PlasmaswapPair.new({from: accounts[0]});
		const addressdc4ufZt = accounts[3]
		const addressNzwD5Ny = accounts[1]
		const bytekAgcnVl = "0x00011e1d040d15101607150e1d09071c1d0214101f"
		const addressSV8Ik7q = accounts[4]
		const uintHAtGO7Z = BigInt("2024")
		const uintnoteTcL = BigInt("232")
		const addressAgwfgW4 = accounts[3]
		const uint112rWOfVrH = await PlasmaswapPairUtxeiaL.getReserves.call({from: accounts[3]});
		const addressuV1KR1a = await PlasmaswapPairUtxeiaL.initialize.call(addressNzwD5Ny, addressdc4ufZt, {from: accounts[0]});
//		const uintKvT7DMP = await PlasmaswapPairUtxeiaL.swap.call(uintnoteTcL, uintHAtGO7Z, addressSV8Ik7q, bytekAgcnVl, {from: accounts[4]});
//		const uintJFtfjaA = await PlasmaswapPairUtxeiaL.burn.call(addressAgwfgW4, {from: accounts[2]});
//		await PlasmaswapPairUtxeiaL.sync.call({from: accounts[0]});
//		const uint112eJozlFi = await PlasmaswapPairUtxeiaL.getReserves.call({from: accounts[2]});

		await expect(PlasmaswapPairUtxeiaL.swap.call(uintnoteTcL, uintHAtGO7Z, addressSV8Ik7q, bytekAgcnVl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})