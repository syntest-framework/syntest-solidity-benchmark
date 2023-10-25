const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatMwofABp = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxONBt0m = accounts[5]
		const uintChgZFcZ = BigInt("118")
		const bytemc9uMLZ = "0x11181a1f150c04171f1e1f0d1f1e1a1300011e180e030802091e02050d1c1203"
		const intAdvoyqk = BigInt("1802")
		const intz7A3TeN = BigInt("-1563")
		const addressUZ1sNK = accounts[3]
		const addresspudHjeC = accounts[4]
		const addressXNQrnjv = accounts[4]
		const bytejWwwda = "0x1e1304120f1f131b1b0b1b1d1c180c150a08030815050619171c0d180a05110e"
		const addressA7Pc64y = await VatMwofABp.deny.call(addressxONBt0m, {from: accounts[0]});
		await VatMwofABp.note.call({from: accounts[4]});
		const bytes32mrwM1cO = await VatMwofABp.file.call(bytemc9uMLZ, uintChgZFcZ, {from: accounts[3]});
		const bytes32QUFzli = await VatMwofABp.frob.call(bytejWwwda, addressXNQrnjv, addresspudHjeC, addressUZ1sNK, intz7A3TeN, intAdvoyqk, {from: accounts[0]});
	});

	it('test for Vat', async () => {
		const VatTKBrnOI = await Vat.new({from: accounts[1]});
		const intNZsMhRT = BigInt("-89")
		const intItxnhX9 = BigInt("1")
		const addressn3K3TMq = accounts[1]
		const addressAVxOwP = "0x0000000000000000000000000000000000000001"
		const addresssuIthlS = accounts[3]
		const bytekohKSGX = "0x121e0e13170707170b1219060e030b17200d1a1d18201b07091a0f0d01140410"
		const addressQVHAGYx = accounts[4]
		const addressZ3XWexc = accounts[2]
//		const bytes32kMf1RVE = await VatTKBrnOI.grab.call(bytekohKSGX, addresssuIthlS, addressAVxOwP, addressn3K3TMq, intItxnhX9, intNZsMhRT, {from: accounts[4]});
//		await VatTKBrnOI.cage.call({from: accounts[1]});
//		await VatTKBrnOI.cage.call({from: accounts[0]});
//		await VatTKBrnOI.note.call({from: accounts[3]});
//		const addresszf8U0P = await VatTKBrnOI.rely.call(addressQVHAGYx, {from: accounts[4]});
//		const addressOp1z87J = await VatTKBrnOI.hope.call(addressZ3XWexc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatTKBrnOI.grab.call(bytekohKSGX, addresssuIthlS, addressAVxOwP, addressn3K3TMq, intItxnhX9, intNZsMhRT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatMyv2hfb = await Vat.new({from: accounts[2]});
		const uintJXTlqlN = BigInt("1572")
		const bytepKTMYU7 = "0x1a0e09120f0402091320171b0110081418051b12060205081d191d0a11200a20"
		const uintGqMHk9w = BigInt("982")
		const bytef3ah94a = "0x1f0e0e0c170a0c0506081a1d1c0616151c0c09090b16161d19021b041c010109"
		const uintNns9d7F = BigInt("141")
		const addressczwydgm = accounts[0]
		const addressH06Jrqj = accounts[1]
//		const bytes32hiCO1Va = await VatMyv2hfb.file.call(bytepKTMYU7, uintJXTlqlN, {from: accounts[0]});
//		const bytes32fqQ1VtZ = await VatMyv2hfb.file.call(bytef3ah94a, uintGqMHk9w, {from: accounts[4]});
//		await VatMyv2hfb.cage.call({from: accounts[0]});
//		const addressiMiEGG = await VatMyv2hfb.suck.call(addressH06Jrqj, addressczwydgm, uintNns9d7F, {from: accounts[4]});

		await expect(VatMyv2hfb.file.call(bytepKTMYU7, uintJXTlqlN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatG62Uis = await Vat.new({from: accounts[5]});
		const uintEmWemu4 = BigInt("865")
		const addressFtZWDC1 = accounts[1]
		const addressE16xum4 = "0x0000000000000000000000000000000000000001"
		const byteMyKjW23 = "0x1412021f011e040b0c02061c1a150e0f201513101e0806020e021f201a1d131c"
		const intnDd5SnZ = BigInt("537")
		const intVXOryec = BigInt("907")
		const addressE9LnyAd = accounts[3]
		const addressEbFcBNO = accounts[4]
		const bytepKiYYQP = "0x0f0212190e0d141e1b100c13080a171c0706180618150a0e050c1f050e050707"
		const uinteLJjn8G = BigInt("264")
		const uintY9zgk2V = BigInt("1160")
		const addressnSctiPw = accounts[4]
		const addressgVp0Xgb = accounts[0]
//		const bytes32vl0lZp0 = await VatG62Uis.flux.call(byteMyKjW23, addressE16xum4, addressFtZWDC1, uintEmWemu4, {from: accounts[0]});
//		const bytes32N9dHUzG = await VatG62Uis.fork.call(bytepKiYYQP, addressEbFcBNO, addressE9LnyAd, intVXOryec, intnDd5SnZ, {from: "0x0000000000000000000000000000000000000001"});
//		const uintPaoeIFK = await VatG62Uis.heal.call(uinteLJjn8G, {from: "0x0000000000000000000000000000000000000001"});
//		const addressaGimUIP = await VatG62Uis.suck.call(addressgVp0Xgb, addressnSctiPw, uintY9zgk2V, {from: accounts[3]});
//		await VatG62Uis.cage.call({from: accounts[0]});

		await expect(VatG62Uis.flux.call(byteMyKjW23, addressE16xum4, addressFtZWDC1, uintEmWemu4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXlTgy7b = await Vat.new({from: accounts[0]});
		const addressYbR3pu = accounts[0]
		const addressOKtkaAS = accounts[2]
//		await VatXlTgy7b.note.call({from: accounts[5]});
//		const addressPvpRvey = await VatXlTgy7b.nope.call(addressYbR3pu, {from: accounts[4]});
//		const addressA0apdlK = await VatXlTgy7b.rely.call(addressOKtkaAS, {from: accounts[2]});
//		await VatXlTgy7b.cage.call({from: accounts[3]});

		await expect(VatXlTgy7b.note.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatetu6dki = await Vat.new({from: accounts[5]});
		const uintPPjH2JI = BigInt("1386")
		const addressm9mZtk6 = accounts[2]
		const addresslb1Cuui = "0x0000000000000000000000000000000000000001"
		const addressC4x1xXD = "0x0000000000000000000000000000000000000001"
		const intD7KYDDL = BigInt("999")
		const intC6OdGBI = BigInt("-151")
		const addressj1Xg8YY = accounts[3]
		const addressaXng9Dv = accounts[3]
		const bytet5a8PuJ = "0x020c141a151c1f1a081a111304131d0910041c16011512070b0905161d0e0f02"
		const uintUtXGi0m = BigInt("1575")
		const bytetECYzSX = "0x0a110d10060d1a021b020e0f0e1c030b18101f0c0d14030b160e0220140c1909"
//		const addressFTgyeq7 = await Vatetu6dki.move.call(addresslb1Cuui, addressm9mZtk6, uintPPjH2JI, {from: accounts[1]});
//		await Vatetu6dki.note.call({from: accounts[2]});
//		const addressrkWN8fd = await Vatetu6dki.deny.call(addressC4x1xXD, {from: accounts[4]});
//		const bytes32plex1ES = await Vatetu6dki.fork.call(bytet5a8PuJ, addressaXng9Dv, addressj1Xg8YY, intC6OdGBI, intD7KYDDL, {from: accounts[2]});
//		await Vatetu6dki.note.call({from: accounts[1]});
//		const bytes32RQyl58r = await Vatetu6dki.file.call(bytetECYzSX, uintUtXGi0m, {from: accounts[4]});

		await expect(Vatetu6dki.move.call(addresslb1Cuui, addressm9mZtk6, uintPPjH2JI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXlTgy7b = await Vat.new({from: accounts[0]});
		const uint05YZ7t = BigInt("1090")
		const addressYcSAs6e = accounts[1]
		const addressECrlfVc = accounts[2]
//		const uintVOfnXKt = await VatXlTgy7b.heal.call(uint05YZ7t, {from: accounts[5]});
//		await VatXlTgy7b.note.call({from: accounts[5]});
//		const addressPvpRvey = await VatXlTgy7b.nope.call(addressYcSAs6e, {from: accounts[4]});
//		const addressA0apdlK = await VatXlTgy7b.rely.call(addressECrlfVc, {from: accounts[2]});
//		await VatXlTgy7b.cage.call({from: accounts[3]});

		await expect(VatXlTgy7b.heal.call(uint05YZ7t, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQJ56qH = await Vat.new({from: accounts[3]});
		const addressLs8n2Zu = accounts[2]
		const addressEFjMKQU = await VatQJ56qH.rely.call(addressLs8n2Zu, {from: accounts[3]});
	});

	it('test for Vat', async () => {
		const VatG62Uis = await Vat.new({from: accounts[5]});
		const intP2lBMqB = BigInt("537")
		const intOgTyHmk = BigInt("907")
		const addresszcuUI4 = accounts[3]
		const addressWlzACaq = accounts[4]
		const byteMYYDYzn = "0x0f0212190e0d141e1b100c13080a171c0706180618150a0e050c1f050e050707"
		const uintSUC1qFt = BigInt("264")
		const uintPbwN9Uw = BigInt("1160")
		const addressXsHK7L = accounts[4]
		const addressLeW0Nrz = accounts[0]
//		const bytes32N9dHUzG = await VatG62Uis.fork.call(byteMYYDYzn, addressWlzACaq, addresszcuUI4, intOgTyHmk, intP2lBMqB, {from: "0x0000000000000000000000000000000000000001"});
//		const uintPaoeIFK = await VatG62Uis.heal.call(uintSUC1qFt, {from: "0x0000000000000000000000000000000000000001"});
//		const addressaGimUIP = await VatG62Uis.suck.call(addressLeW0Nrz, addressXsHK7L, uintPbwN9Uw, {from: accounts[3]});
//		await VatG62Uis.cage.call({from: accounts[0]});

		await expect(VatG62Uis.fork.call(byteMYYDYzn, addressWlzACaq, addresszcuUI4, intOgTyHmk, intP2lBMqB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatetu6dki = await Vat.new({from: accounts[5]});
		const intxekQ9Y0 = BigInt("537")
		const addressYyNEaEo = accounts[2]
		const byteV8u1hs8 = "0x05201d05110c0d1c1f11160c160d18150815050f1011001012091d081c041219"
		const uintxXSypNa = BigInt("1386")
		const addressfT9P7Es = accounts[2]
		const addressPdxLdFy = "0x0000000000000000000000000000000000000001"
		const intkpuuA3a = BigInt("-1107")
		const intKRFoiQo = BigInt("1110")
		const addressQah3WxK = accounts[1]
		const addresscrXu1ch = accounts[3]
		const byteu89u3q = "0x190d19091c1f052003131815010217120b101909110f14101e120f0f18151907"
		const addresst3PnBrd = "0x0000000000000000000000000000000000000001"
		const intczDNpcb = BigInt("999")
		const intt71CLrp = BigInt("-151")
		const addressUtPmhFO = accounts[3]
		const addressTSW5Xk = accounts[3]
		const byteq7SRJW0 = "0x020c141a151c1f1a081a111304131d0910041c16011512070b0905161d0e0f02"
		const uintwCnoMWf = BigInt("1575")
		const byteC8gQ9E7 = "0x0a110d10060d1a021b020e0f0e1c030b18101f0c0d14030b160e0220140c1909"
		const bytes32VIXBXx = await Vatetu6dki.slip.call(byteV8u1hs8, addressYyNEaEo, intxekQ9Y0, {from: accounts[5]});
//		const addressFTgyeq7 = await Vatetu6dki.move.call(addressPdxLdFy, addressfT9P7Es, uintxXSypNa, {from: accounts[1]});
//		await Vatetu6dki.note.call({from: accounts[2]});
//		const bytes32oZYOWh5 = await Vatetu6dki.fork.call(byteu89u3q, addresscrXu1ch, addressQah3WxK, intKRFoiQo, intkpuuA3a, {from: accounts[4]});
//		const addressrkWN8fd = await Vatetu6dki.deny.call(addresst3PnBrd, {from: accounts[4]});
//		const bytes32plex1ES = await Vatetu6dki.fork.call(byteq7SRJW0, addressTSW5Xk, addressUtPmhFO, intt71CLrp, intczDNpcb, {from: accounts[2]});
//		await Vatetu6dki.note.call({from: accounts[1]});
//		const bytes32RQyl58r = await Vatetu6dki.file.call(byteC8gQ9E7, uintwCnoMWf, {from: accounts[4]});

		await expect(Vatetu6dki.move.call(addressPdxLdFy, addressfT9P7Es, uintxXSypNa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatG62Uis = await Vat.new({from: accounts[5]});
		const addressWZizS8e = accounts[2]
		const int766FQT = BigInt("3")
		const intFPX78E = BigInt("475")
		const addressUBGWcQx = accounts[4]
		const addressx5P8Kw = accounts[1]
		const addressC48McDR = accounts[3]
		const bytenNpW9oZ = "0x170a1e190a160b000e1a1d0119090a02180f191219011f121a0c111907140a10"
		const int9ycc2o = BigInt("759")
		const intcl0b540 = BigInt("-279")
		const address9CavFc = accounts[0]
		const addressNJ4UmV2 = accounts[2]
		const addressW9XVnmB = accounts[2]
		const byteIiEubkO = "0x051220011f151f09170203031914050913130509021c1d090a0f051014150b1c"
		const intEIXDWvA = BigInt("537")
		const intTqqLpe4 = BigInt("907")
		const addressX5Vh02R = accounts[3]
		const addressQJCM6UA = accounts[4]
		const byteQRxgKNq = "0x0f0212190e0d141e1b100c13080a171c0706180618150a0e050c1f050e050707"
		const uintVjlcm3l = BigInt("1186")
		const addressWOq50U = accounts[4]
		const addresscQln9a = accounts[0]
		const intGcR4jT7 = BigInt("-482")
		const intVuYze6F = BigInt("959")
		const addressZU7rbUQ = accounts[3]
		const addresszlrTe90 = accounts[1]
		const addressTOm8cGh = accounts[4]
		const byteI5oc5fF = "0x0e0e1607150f1b181413171c081c1b12130d02070f1704040c12180f0f011c12"
		const addressYsGkaOi = await VatG62Uis.nope.call(addressWZizS8e, {from: accounts[1]});
//		const bytes32Nd7uh5M = await VatG62Uis.grab.call(bytenNpW9oZ, addressC48McDR, addressx5P8Kw, addressUBGWcQx, intFPX78E, int766FQT, {from: accounts[0]});
//		const bytes32iWSPNnO = await VatG62Uis.grab.call(byteIiEubkO, addressW9XVnmB, addressNJ4UmV2, address9CavFc, intcl0b540, int9ycc2o, {from: accounts[3]});
//		const bytes32N9dHUzG = await VatG62Uis.fork.call(byteQRxgKNq, addressQJCM6UA, addressX5Vh02R, intTqqLpe4, intEIXDWvA, {from: "0x0000000000000000000000000000000000000001"});
//		const addressaGimUIP = await VatG62Uis.suck.call(addresscQln9a, addressWOq50U, uintVjlcm3l, {from: accounts[3]});
//		const bytes32wVaoT6H = await VatG62Uis.frob.call(byteI5oc5fF, addressTOm8cGh, addresszlrTe90, addressZU7rbUQ, intVuYze6F, intGcR4jT7, {from: accounts[0]});
//		await VatG62Uis.cage.call({from: accounts[0]});

		await expect(VatG62Uis.grab.call(bytenNpW9oZ, addressC48McDR, addressx5P8Kw, addressUBGWcQx, intFPX78E, int766FQT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQJ56qH = await Vat.new({from: accounts[3]});
		const bytebduHjDK = "0x1d1419150601031d0e171707021c1f2011001616081c150f1d171d190c0b100f"
		const addressmajm3vz = accounts[3]
		const uintKmJWHsS = BigInt("878")
		const addressoKXKzCa = accounts[0]
		const addressfSunf9d = accounts[1]
		const byteLgbyGpL = "0x1014050d0206141d0b1d120f1c140b0a201b031f181d0a19201c1106070c0407"
		const bytes32OMPfZBZ = await VatQJ56qH.init.call(bytebduHjDK, {from: accounts[3]});
		const addressEFjMKQU = await VatQJ56qH.rely.call(addressmajm3vz, {from: accounts[3]});
//		const bytes32xUvzyhr = await VatQJ56qH.flux.call(byteLgbyGpL, addressfSunf9d, addressoKXKzCa, uintKmJWHsS, {from: accounts[3]});
//		await VatQJ56qH.cage.call({from: accounts[2]});

		await expect(VatQJ56qH.flux.call(byteLgbyGpL, addressfSunf9d, addressoKXKzCa, uintKmJWHsS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatG62Uis = await Vat.new({from: accounts[5]});
		const intKEuxevA = BigInt("-1177")
		const intjnUU1u5 = BigInt("-1467")
		const addressqEjJvD6 = accounts[5]
		const addressFNiDzN = accounts[5]
		const addressmCOk6Cx = accounts[4]
		const byteoDL4Orc = "0x01071b13110c1107100d03050e180e190b0a0b18120d18201b1f040b1c110a19"
		const intqxyYwq7 = BigInt("537")
		const intMJtvZv8 = BigInt("907")
		const addressi5VJUG1 = accounts[3]
		const addressUBYkaW = accounts[4]
		const byte2evLYt = "0x0f0212190e0d141e1b100c13080a171c0706180618150a0e050c1f050e050707"
		const uintkWt7aE3 = BigInt("264")
		const intb5FhmHM = BigInt("-308")
		const intMYQbN0x = BigInt("-819")
		const addressMFSaqjF = accounts[1]
		const addressDTWtJvw = accounts[3]
		const addressMOBIfyf = accounts[2]
		const byteHcown6S = "0x050119031220181118110e01031c1d1c0814170f05171920091803141a0a1d05"
		const uintuXQlkIy = BigInt("132")
//		const bytes32w1ojWpx = await VatG62Uis.frob.call(byteoDL4Orc, addressmCOk6Cx, addressFNiDzN, addressqEjJvD6, intjnUU1u5, intKEuxevA, {from: accounts[1]});
//		const bytes32N9dHUzG = await VatG62Uis.fork.call(byte2evLYt, addressUBYkaW, addressi5VJUG1, intMJtvZv8, intqxyYwq7, {from: "0x0000000000000000000000000000000000000001"});
//		const uintPaoeIFK = await VatG62Uis.heal.call(uintkWt7aE3, {from: "0x0000000000000000000000000000000000000001"});
//		await VatG62Uis.cage.call({from: accounts[0]});
//		const bytes32A8YCPFK = await VatG62Uis.frob.call(byteHcown6S, addressMOBIfyf, addressDTWtJvw, addressMFSaqjF, intMYQbN0x, intb5FhmHM, {from: accounts[1]});
//		const uintmxDSSB4 = await VatG62Uis.heal.call(uintuXQlkIy, {from: accounts[1]});

		await expect(VatG62Uis.frob.call(byteoDL4Orc, addressmCOk6Cx, addressFNiDzN, addressqEjJvD6, intjnUU1u5, intKEuxevA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatG62Uis = await Vat.new({from: accounts[5]});
		const addressFUekNWk = accounts[2]
		const intOrbLh9g = BigInt("537")
		const intCGaLPvS = BigInt("907")
		const addressSwUa4Qq = accounts[3]
		const addressgcA8Krj = accounts[4]
		const bytei5tsTbW = "0x0f0212190e0d141e1b100c13080a171c0706180618150a0e050c1f050e050707"
		const uintOxDZuJW = BigInt("271")
		const addressBiGfNAR = await VatG62Uis.hope.call(addressFUekNWk, {from: accounts[4]});
//		const bytes32N9dHUzG = await VatG62Uis.fork.call(bytei5tsTbW, addressgcA8Krj, addressSwUa4Qq, intCGaLPvS, intOrbLh9g, {from: "0x0000000000000000000000000000000000000001"});
//		const uintPaoeIFK = await VatG62Uis.heal.call(uintOxDZuJW, {from: "0x0000000000000000000000000000000000000001"});
//		await VatG62Uis.cage.call({from: accounts[0]});

		await expect(VatG62Uis.fork.call(bytei5tsTbW, addressgcA8Krj, addressSwUa4Qq, intCGaLPvS, intOrbLh9g, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatG62Uis = await Vat.new({from: accounts[5]});
		const intlrPQO7b = BigInt("1345")
		const intFEEIFZ8 = BigInt("-1261")
		const addressX34gK7g = accounts[3]
		const addressr0HTrF3 = accounts[0]
		const byteYwQfwmE = "0x1c19000d04011620001b180b1c13200e0317121e09080d140905040b170f1a02"
		const intEbSZbUo = BigInt("537")
		const intihpyZKB = BigInt("902")
		const addressqV4svMH = accounts[3]
		const addressFXTbsD = accounts[4]
		const bytejE6iSGH = "0x0f0212190e0d141e1b100c13080a171c0706180618150a0e050c1f050e050707"
		const inthk7GXOc = BigInt("974")
		const addressGTbFAbX = accounts[1]
		const bytedVaYepy = "0x0b0e1c1320080d160c0301070b0102121a031d1f2020161a0003191b08060d0d"
		const bytebpWYUPo = "0x02031f0815180c081211170a0e1c081f04081d1017111d0f09070a0814130d0e"
//		const bytes32uQrQuFp = await VatG62Uis.fork.call(byteYwQfwmE, addressr0HTrF3, addressX34gK7g, intFEEIFZ8, intlrPQO7b, {from: accounts[1]});
//		const bytes32N9dHUzG = await VatG62Uis.fork.call(bytejE6iSGH, addressFXTbsD, addressqV4svMH, intihpyZKB, intEbSZbUo, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32gMI4czf = await VatG62Uis.fold.call(bytedVaYepy, addressGTbFAbX, inthk7GXOc, {from: accounts[3]});
//		await VatG62Uis.cage.call({from: accounts[0]});
//		const bytes32lusBC6 = await VatG62Uis.init.call(bytebpWYUPo, {from: accounts[5]});

		await expect(VatG62Uis.fork.call(byteYwQfwmE, addressr0HTrF3, addressX34gK7g, intFEEIFZ8, intlrPQO7b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatG62Uis = await Vat.new({from: accounts[5]});
		const intidwaFv9 = BigInt("1411")
		const int3ruo8K = BigInt("550")
		const addressIU6KAF3 = "0x0000000000000000000000000000000000000001"
		const addressv0sJql7 = accounts[0]
		const addresswVYGjH = "0x0000000000000000000000000000000000000001"
		const byteCdJCVe1 = "0x1911130609080813071d1e0100061e17130a07041a0210071b090b0f031f021a"
		const intnVX95u0 = BigInt("537")
		const intki7Y40x = BigInt("871")
		const addressbub2cH8 = accounts[3]
		const addressp7rAA48 = accounts[4]
		const byteP9l0vnl = "0x0f0212190e0d141e1b100c13080a171c0706180618150a0e050c1f050e050707"
//		const bytes32WTCLb44 = await VatG62Uis.grab.call(byteCdJCVe1, addresswVYGjH, addressv0sJql7, addressIU6KAF3, int3ruo8K, intidwaFv9, {from: accounts[5]});
//		const bytes32N9dHUzG = await VatG62Uis.fork.call(byteP9l0vnl, addressp7rAA48, addressbub2cH8, intki7Y40x, intnVX95u0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatG62Uis.grab.call(byteCdJCVe1, addresswVYGjH, addressv0sJql7, addressIU6KAF3, int3ruo8K, intidwaFv9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatG62Uis = await Vat.new({from: accounts[5]});
		const intILIFd21 = BigInt("321")
		const addressEEb05Q = accounts[2]
		const byteSb339J = "0x20171b0d0e131912051f021c05181a0309091c1c040016040c13060b0b0d0900"
		const int9sVeGT = BigInt("814")
		const intLIG9iza = BigInt("-1167")
		const addressZylemlA = accounts[4]
		const addressvuwDgD = accounts[5]
		const bytez7RaHY2 = "0x101d1f0b050a170a1d1a19091e09000f070319130803011b1a04150814151307"
		const ints0vbuVX = BigInt("537")
		const intcpqcrqB = BigInt("907")
		const addresseEgXW1c = accounts[3]
		const addresssz9uomJ = accounts[4]
		const bytezZqVKU = "0x0f0212190e0d141e1b100c13080a171c0706180618150a0e050c1f050e050707"
		const uintsYndDHZ = BigInt("1869")
		const bytejmJ5Iss = "0x1f1b03071d0c071e1d111815041513120e1616170114201a1e0b181f0f1e1a0e"
		const byte8QDQab = "0x1f0d011813061f081c12200012120b1a1d0f030320071c161b1710150e131602"
		const bytes32j5kGabs = await VatG62Uis.fold.call(byteSb339J, addressEEb05Q, intILIFd21, {from: accounts[5]});
//		const bytes32uvwkns6 = await VatG62Uis.fork.call(bytez7RaHY2, addressvuwDgD, addressZylemlA, intLIG9iza, int9sVeGT, {from: accounts[0]});
//		await VatG62Uis.auth.call({from: accounts[4]});
//		const bytes32N9dHUzG = await VatG62Uis.fork.call(bytezZqVKU, addresssz9uomJ, addresseEgXW1c, intcpqcrqB, ints0vbuVX, {from: "0x0000000000000000000000000000000000000001"});
//		await VatG62Uis.cage.call({from: accounts[0]});
//		const bytes32NOfmvnc = await VatG62Uis.file.call(byte8QDQab, bytejmJ5Iss, uintsYndDHZ, {from: accounts[0]});

		await expect(VatG62Uis.fork.call(bytez7RaHY2, addressvuwDgD, addressZylemlA, intLIG9iza, int9sVeGT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQJ56qH = await Vat.new({from: accounts[3]});
		const uintix2Fiz8 = BigInt("447")
		const addressWJrXfLl = accounts[2]
		const addressEypIGk = accounts[2]
		const bytenwbtUSV = "0x05071b070e161a0c1a14180d13161a04000a091105170514001f060613061609"
//		const bytes32tE15pbk = await VatQJ56qH.flux.call(bytenwbtUSV, addressEypIGk, addressWJrXfLl, uintix2Fiz8, {from: accounts[2]});

		await expect(VatQJ56qH.flux.call(bytenwbtUSV, addressEypIGk, addressWJrXfLl, uintix2Fiz8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQJ56qH = await Vat.new({from: accounts[3]});
		const uintLGsS1mb = BigInt("1771")
		const addressELjhNOF = "0x0000000000000000000000000000000000000001"
		const addressRFsViES = accounts[3]
		const uintPwWmpAk = BigInt("1531")
		const addressJfOKTF9 = accounts[4]
		const address2NrjzB = accounts[2]
		const address28xtTq = await VatQJ56qH.suck.call(addressRFsViES, addressELjhNOF, uintLGsS1mb, {from: accounts[3]});
//		const addressNV46daP = await VatQJ56qH.move.call(address2NrjzB, addressJfOKTF9, uintPwWmpAk, {from: accounts[4]});

		await expect(VatQJ56qH.move.call(address2NrjzB, addressJfOKTF9, uintPwWmpAk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQJ56qH = await Vat.new({from: accounts[3]});
		const uintFboG2Dn = BigInt("306")
		const addressJDM9j8q = accounts[2]
		const addresssG2lUA6 = accounts[2]
		const uintZZjxH07 = BigInt("1531")
		const addressDhCZHi = accounts[5]
		const addressq4J6O56 = accounts[2]
		const byteuKZelG8 = "0x02191b0a030d0a1610011e0a0b011e150214180b061b0a0113150e021a020a0e"
//		const addressFW49AUl = await VatQJ56qH.move.call(addresssG2lUA6, addressJDM9j8q, uintFboG2Dn, {from: accounts[2]});
//		const addressNV46daP = await VatQJ56qH.move.call(addressq4J6O56, addressDhCZHi, uintZZjxH07, {from: accounts[4]});
//		const bytes32u9LeyiY = await VatQJ56qH.init.call(byteuKZelG8, {from: accounts[3]});

		await expect(VatQJ56qH.move.call(addresssG2lUA6, addressJDM9j8q, uintFboG2Dn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQJ56qH = await Vat.new({from: accounts[3]});
		const addressfF9sYXT = accounts[3]
		const intQa939Zu = BigInt("136")
		const intadehnpH = BigInt("23")
		const addressw4LNWuG = accounts[5]
		const addressM5YD9U = accounts[5]
		const addressNE43Hed = accounts[4]
		const byteKu3lcFV = "0x1e03191e021a14141e1900100115140611021f181a080b1a191c0706150d0f12"
		const intc5jTISk = BigInt("865")
		const intOGEnfHD = BigInt("569")
		const addressm1S0g5X = accounts[2]
		const addresstwwsF7e = accounts[4]
		const addressudAaJke = accounts[4]
		const byteKriGYW4 = "0x14151a1b14080a1e0901190f1403180c0807030d071b0e19011104041b171b07"
		const addressbcKyvt = await VatQJ56qH.deny.call(addressfF9sYXT, {from: accounts[3]});
//		const bytes32oL2xPq6 = await VatQJ56qH.frob.call(byteKu3lcFV, addressNE43Hed, addressM5YD9U, addressw4LNWuG, intadehnpH, intQa939Zu, {from: accounts[3]});
//		const bytes32SF54MA0 = await VatQJ56qH.frob.call(byteKriGYW4, addressudAaJke, addresstwwsF7e, addressm1S0g5X, intOGEnfHD, intc5jTISk, {from: accounts[4]});

		await expect(VatQJ56qH.frob.call(byteKu3lcFV, addressNE43Hed, addressM5YD9U, addressw4LNWuG, intadehnpH, intQa939Zu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatG62Uis = await Vat.new({from: accounts[5]});
		const intKV7zewm = BigInt("-242")
		const intDYOsSr9 = BigInt("-1597")
		const addressHlIg1Js = accounts[0]
		const addressEB4PE6a = accounts[0]
		const byteInNuhcE = "0x201b020b201c090f15181614040d1b1e161a0c0518201a0916001b06010f1315"
		const uintAfZzCa = BigInt("221")
//		const bytes32YbAFaO7 = await VatG62Uis.fork.call(byteInNuhcE, addressEB4PE6a, addressHlIg1Js, intDYOsSr9, intKV7zewm, {from: accounts[2]});
//		const uintPaoeIFK = await VatG62Uis.heal.call(uintAfZzCa, {from: "0x0000000000000000000000000000000000000001"});
//		await VatG62Uis.auth.call({from: accounts[2]});

		await expect(VatG62Uis.fork.call(byteInNuhcE, addressEB4PE6a, addressHlIg1Js, intDYOsSr9, intKV7zewm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatG62Uis = await Vat.new({from: accounts[5]});
		const uintjmrXUSQ = BigInt("2007")
		const bytedMziywy = "0x190d0c0c02131f141c0d15171c14101c0213121d001a0b0d0c030e0f071b080c"
		const byteUCUirKI = "0x1808050d1513131a142002160c0a0204200e1209121e0f151c0e0e060c0b0e14"
		const addressEIoWmW3 = accounts[4]
		const uintRA8AE2l = BigInt("355")
//		const bytes3276XHEB = await VatG62Uis.file.call(byteUCUirKI, bytedMziywy, uintjmrXUSQ, {from: accounts[5]});
//		const addressyfd687N = await VatG62Uis.deny.call(addressEIoWmW3, {from: accounts[0]});
//		const uintPaoeIFK = await VatG62Uis.heal.call(uintRA8AE2l, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatG62Uis.file.call(byteUCUirKI, bytedMziywy, uintjmrXUSQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQJ56qH = await Vat.new({from: accounts[3]});
		const intt6KBpkV = BigInt("846")
		const intqLYoms9 = BigInt("550")
		const addressSYmTjLK = accounts[2]
		const addressQzKALZM = accounts[5]
		const addressfkUeubG = accounts[4]
		const byteSj9FuM = "0x14151a1b14080a1e0901190f1403180c0807030d071b0e19011104041b171b07"
		const uintElZUhUv = BigInt("356")
		const byteDyo88Fv = "0x0b170f010a09131d1e100f1d06161f08180d19181119060618101c16121a1608"
//		await VatQJ56qH.cage.call({from: accounts[3]});
//		const bytes32SF54MA0 = await VatQJ56qH.frob.call(byteSj9FuM, addressfkUeubG, addressQzKALZM, addressSYmTjLK, intqLYoms9, intt6KBpkV, {from: accounts[4]});
//		const bytes32dlcigcS = await VatQJ56qH.file.call(byteDyo88Fv, uintElZUhUv, {from: accounts[4]});

		await expect(VatQJ56qH.cage.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatG62Uis = await Vat.new({from: accounts[5]});
		const uintkcMDpTR = BigInt("2007")
		const byteGpkzmBJ = "0x190d0c0cfffffffa131f141c0d15171c14101c0213121d001a0b0d0c030e0f071b080c"
		const bytenbF9Tve = "0x1808050d1513131a142002160c0a0204200e1209121e0f151c0e0e060c0b0e14"
//		const bytes3276XHEB = await VatG62Uis.file.call(bytenbF9Tve, byteGpkzmBJ, uintkcMDpTR, {from: accounts[5]});

		await expect(VatG62Uis.file.call(bytenbF9Tve, byteGpkzmBJ, uintkcMDpTR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQJ56qH = await Vat.new({from: accounts[3]});
		const bytexFg36lk = "0x1b030e01170410060a1affffffff0f03130d0d1e091d13121f130b15141c0702191200"
		const uintbN6r65L = BigInt("1330")
//		const bytes32tSZsuTF = await VatQJ56qH.init.call(bytexFg36lk, {from: accounts[3]});
//		const uintgWa7WX3 = await VatQJ56qH.heal.call(uintbN6r65L, {from: accounts[4]});

		await expect(VatQJ56qH.init.call(bytexFg36lk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})