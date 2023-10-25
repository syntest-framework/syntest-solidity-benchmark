const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintLNJibqc = BigInt("889")
		const stringqoBY11p = "u"
		const stringlJNmti8 = "sHJqPdj79PMlASXUuDnUhLWe"
		const GFCU88NOe = await GFC.new(uintLNJibqc, stringqoBY11p, stringlJNmti8, {from: accounts[5]});
		const uintazmOT1L = BigInt("1459")
		const addressweHcGIT = accounts[0]
		const uintXsHcUxD = BigInt("1451")
		const addressyptgxjJ = accounts[5]
		const addressC1qs6ll = accounts[2]
		const uintdYeLgNp = BigInt("471")
		const addressk3yLqlN = accounts[0]
		const bytevF6BRDW = "0x18120419160820"
		const uintZxTa6nK = BigInt("1145")
		const addressHxBj6yX = accounts[3]
//		const boolcfImwhO = await GFCU88NOe.transfer.call(addressweHcGIT, uintazmOT1L, {from: accounts[1]});
//		const boolprPD6e = await GFCU88NOe.transferFrom.call(addressC1qs6ll, addressyptgxjJ, uintXsHcUxD, {from: accounts[2]});
//		const booleXs5u0 = await GFCU88NOe.approve.call(addressk3yLqlN, uintdYeLgNp, {from: accounts[0]});
//		const boolxeF3jH = await GFCU88NOe.approveAndCall.call(addressHxBj6yX, uintZxTa6nK, bytevF6BRDW, {from: accounts[0]});

		await expect(GFCU88NOe.transfer.call(addressweHcGIT, uintazmOT1L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintCvjdRS = BigInt("521")
		const stringdM5Tpv = "6jE7kXaBWyJ93qjAYcO8Q9nSBfqSgXUp95WVOYBWhEgpI496OFImoSbEgwScC8dRkHTbf7b7tZ7"
		const stringDhGwjcB = "T3Ucc5NRUFaw8GtyPdF8AmaxDH2n79rTrv2HBtkcPi8i9vAEjmJAc7XTQagEs18dChU2wDUCi"
		const GFCv4qG1Ag = await GFC.new(uintCvjdRS, stringdM5Tpv, stringDhGwjcB, {from: accounts[3]});
		const uintpOf7EFE = BigInt("1942")
		const addressKJdWXlw = accounts[0]
		const addressc2lwCRk = accounts[3]
		const uintAaKkHIO = BigInt("678")
		const addressIa4njS = accounts[0]
		const uinttMoAkiP = BigInt("280")
		const uinttGdv0x9 = BigInt("256")
		const addressWtCG7O0 = accounts[1]
//		const booluLRlOvm = await GFCv4qG1Ag.transferFrom.call(addressc2lwCRk, addressKJdWXlw, uintpOf7EFE, {from: accounts[4]});
//		const boolVD0KlwX = await GFCv4qG1Ag.approve.call(addressIa4njS, uintAaKkHIO, {from: accounts[2]});
//		const boolLEheEa1 = await GFCv4qG1Ag.burn.call(uinttMoAkiP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolnqqb4IM = await GFCv4qG1Ag.burnFrom.call(addressWtCG7O0, uinttGdv0x9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCv4qG1Ag.transferFrom.call(addressc2lwCRk, addressKJdWXlw, uintpOf7EFE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintYItwBeP = BigInt("841")
		const stringNwxHyxE = "5w"
		const stringRGpXXuy = "Dpt5hJ3SD3V98tItVWQlUIKzZbsshqYFp9p6cvJaZ7j94Q4rtJ0sLxSTq6yjm5PRGtVfVABC2G"
		const GFCkCRuuol = await GFC.new(uintYItwBeP, stringNwxHyxE, stringRGpXXuy, {from: accounts[3]});
		const byteaMpmJ9 = "0x0618150b0a121c0508011d180d081705030b"
		const uintwA5jMFR = BigInt("1609")
		const addressL7usIhB = accounts[5]
		const uintikLm7MC = BigInt("143")
		const addressQUWpbN3 = accounts[2]
		const uintCwxcuKQ = BigInt("2003")
		const uintyGvyie = BigInt("21")
		const uintV07gfKs = BigInt("107")
		const addressnbAQabn = accounts[3]
//		const boolGETdTrX = await GFCkCRuuol.approveAndCall.call(addressL7usIhB, uintwA5jMFR, byteaMpmJ9, {from: accounts[2]});
//		const boolwzp4caK = await GFCkCRuuol.transfer.call(addressQUWpbN3, uintikLm7MC, {from: accounts[4]});
//		const boolu6UzjRi = await GFCkCRuuol.burn.call(uintCwxcuKQ, {from: accounts[0]});
//		const boolwoSber1 = await GFCkCRuuol.burn.call(uintyGvyie, {from: accounts[2]});
//		const boolfP39fNp = await GFCkCRuuol.approve.call(addressnbAQabn, uintV07gfKs, {from: accounts[0]});

		await expect(GFCkCRuuol.approveAndCall.call(addressL7usIhB, uintwA5jMFR, byteaMpmJ9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintsPtC7K3 = BigInt("1373")
		const stringHXTH3ft = "wC69oMxjuLrPLlWcGk7T6Jdf48PTzCXsMpNO8qWIkIhtTQzWlK3Ym6smkOnfbezMpMbgeBDQQrx9nXbXf9zp"
		const stringWBU76bn = "qep1ofkl1d5JxylYt"
		const GFCJ49FqaR = await GFC.new(uintsPtC7K3, stringHXTH3ft, stringWBU76bn, {from: "0x0000000000000000000000000000000000000001"});
		const uintxurA9GD = BigInt("443")
		const addressZuQpFc = accounts[4]
		const addressv5g8PbQ = accounts[2]
		const uintEwDUla = BigInt("1896")
		const addressZ0Ln2nl = accounts[3]
		const uintp8iMdRR = BigInt("1865")
		const addressAfp3sJy = accounts[3]
		const uintO1HbQpE = BigInt("541")
		const addressHq41Gbr = accounts[2]
		const uintM5M5ezd = BigInt("1257")
		const addressHPzqPY7 = accounts[1]
		const addressu4t7SqN = accounts[4]
		const boolmjnN2b = await GFCJ49FqaR.transferFrom.call(addressv5g8PbQ, addressZuQpFc, uintxurA9GD, {from: accounts[1]});
		const boolWucMI8W = await GFCJ49FqaR.burnFrom.call(addressZ0Ln2nl, uintEwDUla, {from: accounts[2]});
		const booleQDmias = await GFCJ49FqaR.burnFrom.call(addressAfp3sJy, uintp8iMdRR, {from: accounts[0]});
		const boolYM0JFca = await GFCJ49FqaR.approve.call(addressHq41Gbr, uintO1HbQpE, {from: accounts[3]});
		const boolYVOT1FY = await GFCJ49FqaR.transferFrom.call(addressu4t7SqN, addressHPzqPY7, uintM5M5ezd, {from: accounts[3]});
	});

	it('test for GFC', async () => {
		const uintcIQFBqA = BigInt("1149")
		const stringJdyyKHq = "3oBiXpntU"
		const stringK5ncQby = "JpnxLBFfnps7j55N3dpZyaGU1fDJfkw8dCpX7n9WvnbdSYXuoBqOTEEY5AIz35DKfFp4wQ03nrhFRQIrDwpPRhkbgj71r"
		const GFC8R9AYs = await GFC.new(uintcIQFBqA, stringJdyyKHq, stringK5ncQby, {from: accounts[3]});
		const uintfsyW4vr = BigInt("2007")
		const uintfgh9mbp = BigInt("2012")
		const addressvQHcHTW = accounts[1]
		const uintaIYxgGE = BigInt("744")
		const addressmppwBXz = accounts[0]
		const addressRDOdEPv = accounts[3]
		const uintJUQNzCR = BigInt("1069")
		const addressUGAjviy = accounts[0]
		const addressaDBD1rg = accounts[0]
//		const boolERI2PL = await GFC8R9AYs.burn.call(uintfsyW4vr, {from: accounts[5]});
//		const boolZfO27uK = await GFC8R9AYs.approve.call(addressvQHcHTW, uintfgh9mbp, {from: accounts[2]});
//		const boolE95m1pC = await GFC8R9AYs.transferFrom.call(addressRDOdEPv, addressmppwBXz, uintaIYxgGE, {from: accounts[2]});
//		const boolpc6lqxD = await GFC8R9AYs.transferFrom.call(addressaDBD1rg, addressUGAjviy, uintJUQNzCR, {from: accounts[0]});

		await expect(GFC8R9AYs.burn.call(uintfsyW4vr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintdi5s2h = BigInt("1788")
		const stringwtcizFy = "6H4urdHKsxxMkaWa2ZjsuCzPsb1URbP6Ble877wIFQirdIFEuoA0UCTToKdPR3PnGmx2EIrY4e9gglGRz"
		const stringjEkADOU = "FHI5o9xd6fkb3b5PnchTPF"
		const GFChyC74ec = await GFC.new(uintdi5s2h, stringwtcizFy, stringjEkADOU, {from: accounts[2]});
		const uintrA8oMv = BigInt("477")
		const address3yJNnv = accounts[3]
		const bytewSSz7G = "0x0f1a1f07061e07170415160212190d1c14"
		const uintEYa3lCl = BigInt("259")
		const addressSAnnI6c = accounts[1]
		const uintSVkIZS = BigInt("99")
		const addressO5z6ij3 = accounts[5]
		const addressc3UxyXG = accounts[4]
		const boolbi4nUwE = await GFChyC74ec.transfer.call(address3yJNnv, uintrA8oMv, {from: accounts[2]});
//		const boolHfw6rGX = await GFChyC74ec.approveAndCall.call(addressSAnnI6c, uintEYa3lCl, bytewSSz7G, {from: accounts[1]});
//		const boolDXWFzy = await GFChyC74ec.transferFrom.call(addressc3UxyXG, addressO5z6ij3, uintSVkIZS, {from: accounts[3]});

		assert.equal(boolbi4nUwE, true)
		await expect(GFChyC74ec.approveAndCall.call(addressSAnnI6c, uintEYa3lCl, bytewSSz7G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintKiFQ0ve = BigInt("1101")
		const stringeg6aZXz = "13uUarRX3TWV3FwFVcbUny7LuS4duttSl6eRtFNCEucX8gp80yAkXUQs1csFMr6Pz3ldJtf9gMjjAYgn0cQ6zpj1OQo"
		const stringl3gEd8d = "JgyQ6htl5K"
		const GFCNjMnQx = await GFC.new(uintKiFQ0ve, stringeg6aZXz, stringl3gEd8d, {from: accounts[3]});
		const uintL6Xgpf = BigInt("1047")
		const addressmysKMx = accounts[0]
		const uintgFP4I4Q = BigInt("464")
		const addressa25xwvU = accounts[2]
		const uintAe8jzJ = BigInt("1556")
		const addressTrLLOzD = accounts[2]
		const uintuGyFKlH = BigInt("1596")
		const addressf6L9DE = accounts[0]
		const addresskAN9BX4 = accounts[1]
		const boolX4IQ5I = await GFCNjMnQx.approve.call(addressmysKMx, uintL6Xgpf, {from: accounts[1]});
//		const boolSSsQxSy = await GFCNjMnQx.burnFrom.call(addressa25xwvU, uintgFP4I4Q, {from: accounts[3]});
//		const boolwpCZOmC = await GFCNjMnQx.burnFrom.call(addressTrLLOzD, uintAe8jzJ, {from: accounts[1]});
//		const boolEwDmphv = await GFCNjMnQx.transferFrom.call(addresskAN9BX4, addressf6L9DE, uintuGyFKlH, {from: accounts[0]});

		assert.equal(boolX4IQ5I, true)
		await expect(GFCNjMnQx.burnFrom.call(addressa25xwvU, uintgFP4I4Q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintcDYJOWW = BigInt("1149")
		const stringJdyyKHq = "3oBiXpntU"
		const stringK5ncQby = "JpnxLBFfnps7j55N3dpZyaGU1fDJfkw8dCpX7n9WvnbdSYXuoBqOTEEY5AIz35DKfFp4wQ03nrhFRQIrDwpPRhkbgj71r"
		const GFC8R9AYs = await GFC.new(uintcDYJOWW, stringJdyyKHq, stringK5ncQby, {from: accounts[3]});
		const uintT78ZlUr = BigInt("1887")
		const addressooqT87n = accounts[3]
		const uintEghYmK = BigInt("810")
		const addresssXeQEQ1 = accounts[1]
		const uintTSZJNQ = BigInt("2007")
//		const boolVeeXT9N = await GFC8R9AYs.burnFrom.call(addressooqT87n, uintT78ZlUr, {from: accounts[4]});
//		const boolGP9g8qb = await GFC8R9AYs.approve.call(addresssXeQEQ1, uintEghYmK, {from: accounts[3]});
//		const boolERI2PL = await GFC8R9AYs.burn.call(uintTSZJNQ, {from: accounts[5]});

		await expect(GFC8R9AYs.burnFrom.call(addressooqT87n, uintT78ZlUr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintFZJeShj = BigInt("1149")
		const stringJdyyKHq = "3oBiXpntU"
		const stringK5ncQby = "JpnxLBFfnps7j55N3dpZyaGU1fDJfkw8dCpX7n9WvnbdSYXuoBqOTEEY5AIz35DKfFp4wQ03nrhFRQIrDwpPRhkbgj71r"
		const GFC8R9AYs = await GFC.new(uintFZJeShj, stringJdyyKHq, stringK5ncQby, {from: accounts[3]});
		const uints1pPEJF = BigInt("712")
		const uinteFlQ7I4 = BigInt("2019")
		const bool6SGknx = await GFC8R9AYs.burn.call(uints1pPEJF, {from: accounts[3]});
//		const boolERI2PL = await GFC8R9AYs.burn.call(uinteFlQ7I4, {from: accounts[5]});

		assert.equal(bool6SGknx, true)
		await expect(GFC8R9AYs.burn.call(uinteFlQ7I4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})