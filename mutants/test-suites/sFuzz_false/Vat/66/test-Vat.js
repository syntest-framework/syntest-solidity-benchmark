const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const addressI6InLuP = accounts[3]
		const intxl5agac = BigInt("453")
		const addressM2IMZI = accounts[4]
		const byteapz7pCP = "0x030805011e111c05170a09080a160406130007011d0501001907120a171b0309"
		const addressoIeOUEg = await VatNTrzp19.hope.call(addressI6InLuP, {from: accounts[5]});
//		const bytes32BRHfwjH = await VatNTrzp19.slip.call(byteapz7pCP, addressM2IMZI, intxl5agac, {from: accounts[1]});

		await expect(VatNTrzp19.slip.call(byteapz7pCP, addressM2IMZI, intxl5agac, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatCGTme3G = await Vat.new({from: accounts[3]});
		const addressSzmTuya = accounts[2]
		const addressIdzThxC = await VatCGTme3G.nope.call(addressSzmTuya, {from: accounts[0]});
//		await VatCGTme3G.note.call({from: accounts[3]});

		await expect(VatCGTme3G.note.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatviu5UDU = await Vat.new({from: accounts[1]});
		const uintkUHq1NO = BigInt("1169")
		const addressFg2bhBy = accounts[1]
//		const uinths68Hp9 = await Vatviu5UDU.heal.call(uintkUHq1NO, {from: accounts[5]});
//		await Vatviu5UDU.note.call({from: accounts[2]});
//		const addressDqXgoAE = await Vatviu5UDU.deny.call(addressFg2bhBy, {from: accounts[1]});

		await expect(Vatviu5UDU.heal.call(uintkUHq1NO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const addressY1rOFkj = accounts[3]
		const intDsAqogR = BigInt("-1728")
		const intMlQu8B = BigInt("330")
		const addressDrkaZgC = "0x0000000000000000000000000000000000000001"
		const addressv49p79T = accounts[4]
		const byteRSyTKjC = "0x081314190f0c18081b0f04160a061c0e09010d031d1d181a1d121b0e141d0418"
		const intBWcjWu = BigInt("453")
		const addressJX4HxiK = accounts[4]
		const byteqy0PEY = "0x030805011e111c05170a09080a160406130007011d0501001907120a171b0309"
		const uintiIK2ym = BigInt("1110")
		const addressI4jyVUi = accounts[5]
		const addressZ3HYJlw = accounts[2]
		const addressoIeOUEg = await VatNTrzp19.hope.call(addressY1rOFkj, {from: accounts[5]});
//		const bytes32pYjyc3a = await VatNTrzp19.fork.call(byteRSyTKjC, addressv49p79T, addressDrkaZgC, intMlQu8B, intDsAqogR, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32BRHfwjH = await VatNTrzp19.slip.call(byteqy0PEY, addressJX4HxiK, intBWcjWu, {from: accounts[1]});
//		const addressGMkSme = await VatNTrzp19.suck.call(addressZ3HYJlw, addressI4jyVUi, uintiIK2ym, {from: accounts[1]});

		await expect(VatNTrzp19.fork.call(byteRSyTKjC, addressv49p79T, addressDrkaZgC, intMlQu8B, intDsAqogR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatqc8UA5O = await Vat.new({from: accounts[2]});
		const addressdQvxW8 = accounts[2]
		const uintthfu3uq = BigInt("1122")
		const addresskVdBcKB = accounts[5]
		const addressNYJHUpl = accounts[3]
		const byteFMnSiFv = "0x101d19150d1e02131506050a101d0b0f140e1d1d121003100b181c1f1f0e0f15"
		const addresslGUrDOw = "0x0000000000000000000000000000000000000001"
		const uintGZDQlPh = BigInt("2005")
		const addressOUNLTEJ = accounts[2]
		const addressJr26EPX = accounts[2]
		const uintkDEiLd3 = BigInt("1623")
		const addresskM1gyVS = "0x0000000000000000000000000000000000000001"
		const addresss6O9k2U = accounts[2]
		const addressFnhZBc = await Vatqc8UA5O.nope.call(addressdQvxW8, {from: accounts[5]});
//		const bytes32pASjp9L = await Vatqc8UA5O.flux.call(byteFMnSiFv, addressNYJHUpl, addresskVdBcKB, uintthfu3uq, {from: "0x0000000000000000000000000000000000000001"});
//		await Vatqc8UA5O.auth.call({from: accounts[4]});
//		const addressgs0lZmR = await Vatqc8UA5O.rely.call(addresslGUrDOw, {from: accounts[4]});
//		const addressbOPr31 = await Vatqc8UA5O.suck.call(addressJr26EPX, addressOUNLTEJ, uintGZDQlPh, {from: accounts[4]});
//		const addressS4eVOmz = await Vatqc8UA5O.suck.call(addresss6O9k2U, addresskM1gyVS, uintkDEiLd3, {from: accounts[4]});

		await expect(Vatqc8UA5O.flux.call(byteFMnSiFv, addressNYJHUpl, addresskVdBcKB, uintthfu3uq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const uint5AGIdW = BigInt("1260")
		const addressZ8O4nI2 = accounts[4]
		const addressFVo2yTZ = accounts[1]
		const addressGHg4Hij = accounts[4]
		const uintZ16ueo = BigInt("375")
		const byteug6cLQH = "0x1b1b0f161b181c0917121619161b080707061b07021b0a070d0e140d160e0618"
//		const addressnvbfQbV = await VatNTrzp19.move.call(addressFVo2yTZ, addressZ8O4nI2, uint5AGIdW, {from: accounts[2]});
//		const addressoIeOUEg = await VatNTrzp19.hope.call(addressGHg4Hij, {from: accounts[5]});
//		const bytes32ZvkKsTa = await VatNTrzp19.file.call(byteug6cLQH, uintZ16ueo, {from: accounts[3]});

		await expect(VatNTrzp19.move.call(addressFVo2yTZ, addressZ8O4nI2, uint5AGIdW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const uintTihfU4n = BigInt("757")
		const byteVwWefjk = "0x0206201a180e0e1d0310181f100b1b1c13050b0e021b0f1117170b010d011c1f"
		const addressIPDJl0t = accounts[5]
//		const bytes32wW1HiNv = await VatNTrzp19.file.call(byteVwWefjk, uintTihfU4n, {from: accounts[3]});
//		const addressoIeOUEg = await VatNTrzp19.hope.call(addressIPDJl0t, {from: accounts[5]});

		await expect(VatNTrzp19.file.call(byteVwWefjk, uintTihfU4n, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const uintQZ8Z4LX = BigInt("651")
		const address6jX6lT = accounts[0]
		const addressDsFUPH = accounts[3]
		const addressWM3HhpV = accounts[5]
		const addressnb7CYHg = await VatNTrzp19.suck.call(addressDsFUPH, address6jX6lT, uintQZ8Z4LX, {from: accounts[2]});
		const addressoIeOUEg = await VatNTrzp19.hope.call(addressWM3HhpV, {from: accounts[5]});
	});

	it('test for Vat', async () => {
		const VatcMuwryi = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcZ7AK3R = BigInt("1279")
		const addressP22hZmH = accounts[3]
		const addressXXvEIN = accounts[4]
		const byteDGAWo5Z = "0x16161e021d1d111e201d1d0407180b1d20050d1c161410030218180f0f0f0f0e"
		const intsfQGfMk = BigInt("1779")
		const intiooDwdz = BigInt("288")
		const addressI0VEGaR = accounts[2]
		const address0MQJNR = accounts[2]
		const addressMLJUGR = accounts[3]
		const byteVVqwx3i = "0x061e02161e0c121b200d1f190f0d1c0d200c200c0e1c05130310201d20191711"
		const bytes32xwpeTvf = await VatcMuwryi.flux.call(byteDGAWo5Z, addressXXvEIN, addressP22hZmH, uintcZ7AK3R, {from: accounts[2]});
		await VatcMuwryi.auth.call({from: accounts[3]});
		const bytes32JhuJwgz = await VatcMuwryi.grab.call(byteVVqwx3i, addressMLJUGR, address0MQJNR, addressI0VEGaR, intiooDwdz, intsfQGfMk, {from: accounts[0]});
		await VatcMuwryi.auth.call({from: accounts[0]});
	});

	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const byteZWbtKq = "0x05140306090f05030c0610130f071d05111e1f0b1e10021c09201103140d1906"
		const addressh6L2Lp = accounts[5]
		const addressbD9zR5s = accounts[3]
		const bytes32CkDOaiC = await VatNTrzp19.init.call(byteZWbtKq, {from: accounts[2]});
		const addressoIeOUEg = await VatNTrzp19.hope.call(addressh6L2Lp, {from: accounts[5]});
		const addressxkQrMQA = await VatNTrzp19.hope.call(addressbD9zR5s, {from: accounts[0]});
	});

	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const intSH8uDHp = BigInt("1608")
		const intZqOlFAE = BigInt("2038")
		const addressn0Wzpdv = accounts[1]
		const addressIApwQY0 = accounts[2]
		const addressbKzk4lG = accounts[0]
		const byteTOmCzF = "0x14110b1b111114090c17181a1a071901061d1c0c03040c060612011403041c1a"
		const addressO8vdmas = accounts[5]
//		const bytes32IQciUWN = await VatNTrzp19.frob.call(byteTOmCzF, addressbKzk4lG, addressIApwQY0, addressn0Wzpdv, intZqOlFAE, intSH8uDHp, {from: accounts[0]});
//		const addressoIeOUEg = await VatNTrzp19.hope.call(addressO8vdmas, {from: accounts[5]});
//		await VatNTrzp19.cage.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(VatNTrzp19.frob.call(byteTOmCzF, addressbKzk4lG, addressIApwQY0, addressn0Wzpdv, intZqOlFAE, intSH8uDHp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatEOjULs8 = await Vat.new({from: accounts[0]});
		const intj6n9QT0 = BigInt("-477")
		const addressQKefb1u = "0x0000000000000000000000000000000000000001"
		const byteY9eFRsA = "0x0c0e0c1e141e1b011716191b061c1407070b000a1e071d061f08040e12161615"
		const uintf8W9bY = BigInt("325")
		const addressDfEmkLH = accounts[2]
		const addressuvqegJ0 = accounts[3]
		const uintatTKfVh = BigInt("1262")
		const byteHhZ8TYB = "0x1f11080601151c0a0e0a0f151511130c162002070806020f0b11140b010f100b"
		const uintJrQHqge = BigInt("1332")
		const addressbRxbdZn = accounts[4]
		const addresshoY2oIa = accounts[2]
		const uintct0VkqZ = BigInt("957")
//		const bytes32So8UWCy = await VatEOjULs8.slip.call(byteY9eFRsA, addressQKefb1u, intj6n9QT0, {from: accounts[0]});
//		await VatEOjULs8.auth.call({from: accounts[5]});
//		const addressyds6P0s = await VatEOjULs8.move.call(addressuvqegJ0, addressDfEmkLH, uintf8W9bY, {from: accounts[1]});
//		const bytes32rTHzbQP = await VatEOjULs8.file.call(byteHhZ8TYB, uintatTKfVh, {from: accounts[0]});
//		const addressgckPYDI = await VatEOjULs8.move.call(addresshoY2oIa, addressbRxbdZn, uintJrQHqge, {from: accounts[1]});
//		const uintyAOXFip = await VatEOjULs8.heal.call(uintct0VkqZ, {from: accounts[0]});

		await expect(VatEOjULs8.slip.call(byteY9eFRsA, addressQKefb1u, intj6n9QT0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const addressZo15PdO = accounts[5]
		const addressAAorxOL = accounts[1]
		const uintlHFz7Km = BigInt("1478")
		const addressu8AgGqB = accounts[4]
		const addressrdklCK5 = accounts[1]
		const byteKIikJI8 = "0x0f0b181c08141d08190709091e100a11011f021609080a120a1e0e0e19132008"
		const addressoIeOUEg = await VatNTrzp19.hope.call(addressZo15PdO, {from: accounts[5]});
		const addresshG9Ddvp = await VatNTrzp19.rely.call(addressAAorxOL, {from: accounts[2]});
//		await VatNTrzp19.cage.call({from: accounts[1]});
//		const bytes32xqdLTyJ = await VatNTrzp19.flux.call(byteKIikJI8, addressrdklCK5, addressu8AgGqB, uintlHFz7Km, {from: accounts[5]});

		await expect(VatNTrzp19.cage.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const addressLkwLAVG = accounts[4]
		const addressehETZT = accounts[3]
		const addressoIeOUEg = await VatNTrzp19.hope.call(addressLkwLAVG, {from: accounts[5]});
		const addressVekYu59 = await VatNTrzp19.deny.call(addressehETZT, {from: accounts[2]});
	});

	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const addressWT8ZWYh = accounts[5]
		const intyFsmWoP = BigInt("1581")
		const addressoBULMfa = accounts[3]
		const byteESgOTI3 = "0x110a041e060e131f1c001910040711160b050b0e110111001e0113060a15161b"
		const addressoIeOUEg = await VatNTrzp19.hope.call(addressWT8ZWYh, {from: accounts[5]});
		const bytes32wpj8oZi = await VatNTrzp19.fold.call(byteESgOTI3, addressoBULMfa, intyFsmWoP, {from: accounts[2]});
	});

	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const addressErfU2gv = accounts[5]
		const intvJgS519 = BigInt("414")
		const intK01CFpK = BigInt("494")
		const addresstZVRGa = accounts[4]
		const addresswubUUdm = accounts[5]
		const addresseGrY1a = accounts[4]
		const bytedGurrbl = "0x0c0d0a0c11121b160401071d121103061b0618130a0e1e0f1f161a16070d0c13"
		const addressoIeOUEg = await VatNTrzp19.hope.call(addressErfU2gv, {from: accounts[5]});
//		const bytes32jfXHucw = await VatNTrzp19.grab.call(bytedGurrbl, addresseGrY1a, addresswubUUdm, addresstZVRGa, intK01CFpK, intvJgS519, {from: accounts[2]});

		await expect(VatNTrzp19.grab.call(bytedGurrbl, addresseGrY1a, addresswubUUdm, addresstZVRGa, intK01CFpK, intvJgS519, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const uintMc8LNyt = BigInt("388")
		const byteEeKRvvs = "0x15021a19020f131d1607130d0207061f1f1f201114100c1a1f1e051719051604"
		const byteeT3BOF1 = "0x081b19030d140b0d031e0c111d1e11050e0f030220050608180a0209021a081e"
		const addressfoInON5 = accounts[5]
//		const bytes32StB6jBm = await VatNTrzp19.file.call(byteeT3BOF1, byteEeKRvvs, uintMc8LNyt, {from: accounts[2]});
//		const addressoIeOUEg = await VatNTrzp19.hope.call(addressfoInON5, {from: accounts[5]});

		await expect(VatNTrzp19.file.call(byteeT3BOF1, byteEeKRvvs, uintMc8LNyt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const uintukcyxW9 = BigInt("1044")
		const addressHnU2fFN = accounts[6]
//		await VatNTrzp19.cage.call({from: accounts[2]});
//		const uintlyscdfl = await VatNTrzp19.heal.call(uintukcyxW9, {from: accounts[2]});
//		const addressoIeOUEg = await VatNTrzp19.hope.call(addressHnU2fFN, {from: accounts[5]});

		await expect(VatNTrzp19.cage.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNTrzp19 = await Vat.new({from: accounts[2]});
		const addressu8rpxKx = accounts[6]
		const intob2YiTg = BigInt("-327")
		const intWahlNFn = BigInt("-321")
		const addressNHRIgEc = accounts[3]
		const addresspzOBuNN = accounts[3]
		const byteN0PeZE = "0x0c171902091b0e020111181b1d0d1c010105180f1e040b070b1f0513051f0d17"
		const addressoIeOUEg = await VatNTrzp19.hope.call(addressu8rpxKx, {from: accounts[5]});
//		const bytes32yDKH3mK = await VatNTrzp19.fork.call(byteN0PeZE, addresspzOBuNN, addressNHRIgEc, intWahlNFn, intob2YiTg, {from: accounts[5]});

		await expect(VatNTrzp19.fork.call(byteN0PeZE, addresspzOBuNN, addressNHRIgEc, intWahlNFn, intob2YiTg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})