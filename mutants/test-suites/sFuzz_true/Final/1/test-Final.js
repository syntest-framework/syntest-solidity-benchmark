const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringtFKM3gi = "5uwJv7oTE5CUaPNoYNsYunoZHVxMEx3gj2Hj5jV5h"
		const stringJXzNC9 = "qN43yDserdaGDYwsDfD6mTnd8GsbDmctkAJt"
		const uinteIiVgv = BigInt("410")
		const FinaltbGzfw0 = await Final.new(stringtFKM3gi, stringJXzNC9, uinteIiVgv, {from: accounts[2]});
		const addressrn3fLkB = accounts[0]
		const addressJT74ZGw = accounts[3]
		const addressIHOEJ70 = accounts[2]
		const uintvhGy9Qv = BigInt("1508")
		const addressnhPwqW9 = accounts[1]
		const addressDtAl38l = accounts[4]
		const uintnmTbjKW = BigInt("232")
		const addressBQChDGC = accounts[0]
		const addressB9JvGFc = accounts[3]
		const uintKAiqnkC = await FinaltbGzfw0.balanceOf.call(addressrn3fLkB, {from: accounts[4]});
		const uintG3OXxA = await FinaltbGzfw0.allowance.call(addressIHOEJ70, addressJT74ZGw, {from: accounts[0]});
//		const boolOI2qJCC = await FinaltbGzfw0.transferFrom.call(addressDtAl38l, addressnhPwqW9, uintvhGy9Qv, {from: accounts[0]});
//		const stringB1obx4q = await FinaltbGzfw0.symbol.call({from: accounts[2]});
//		const booluY1JRBh = await FinaltbGzfw0.decreaseAllowance.call(addressBQChDGC, uintnmTbjKW, {from: accounts[1]});
//		const boolWfHoiBO = await FinaltbGzfw0.transferownership.call(addressB9JvGFc, {from: accounts[2]});

		assert.equal(uintG3OXxA, BigInt("0"))
		assert.equal(uintKAiqnkC, BigInt("0"))
		await expect(FinaltbGzfw0.transferFrom.call(addressDtAl38l, addressnhPwqW9, uintvhGy9Qv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringhAiCFdr = "nso8GUzvr8uTmReVMQpxcy86NZjxELs9H5VyK8u9QrijKfSv2KDYIRRnxZamHBvm"
		const stringZLs9Yo = "RcvFz36VXvlNTSAjnn331heFSpn7g3cNYtRnGT5LrhzOWzNq2yD8zPHQilqJemEalNUwRX93P9lj4czqxCP8"
		const uintv0dRJOY = BigInt("255")
		const FinalS2uE5x0 = await Final.new(stringhAiCFdr, stringZLs9Yo, uintv0dRJOY, {from: accounts[3]});
		const uintVvxacz = BigInt("1756")
		const addresspkVrx03 = accounts[5]
		const uint8ErRZdmY = await FinalS2uE5x0.decimals.call({from: accounts[3]});
//		const boolKAlmK1C = await FinalS2uE5x0.decreaseAllowance.call(addresspkVrx03, uintVvxacz, {from: accounts[2]});

		assert.equal(uint8ErRZdmY, BigInt("18"))
		await expect(FinalS2uE5x0.decreaseAllowance.call(addresspkVrx03, uintVvxacz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringVYkN3Gf = "g53vzv1XTAVlv8b"
		const string2eC16G = "3grvcnneAo0yTyt"
		const uintvu2t1Xn = BigInt("47")
		const FinalnNwVBXo = await Final.new(stringVYkN3Gf, string2eC16G, uintvu2t1Xn, {from: accounts[3]});
		const uinthtk5Tm6 = BigInt("1629")
		const addressm07ftKC = accounts[1]
		const addressWdiZN1p = accounts[1]
		const stringGAgcyos = await FinalnNwVBXo.name.call({from: accounts[0]});
//		const boolrmqRcSE = await FinalnNwVBXo.transfer.call(addressm07ftKC, uinthtk5Tm6, {from: accounts[2]});
//		const uintjaK1HKE = await FinalnNwVBXo.balanceOf.call(addressWdiZN1p, {from: accounts[3]});

		assert.equal(stringGAgcyos, "g53vzv1XTAVlv8b")
		await expect(FinalnNwVBXo.transfer.call(addressm07ftKC, uinthtk5Tm6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringDOIC6Io = "zDL7KiKvc2534gFIHQKrxfGXatcsHFnwkdJ2IOVNP2rWadmTNw9yS09BvDQwyFPIvrr5xO7OGqH5Jyw"
		const stringtHW3w6r = "FazVe"
		const uintrvO6HJF = BigInt("1209")
		const FinalRCATyZw = await Final.new(stringDOIC6Io, stringtHW3w6r, uintrvO6HJF, {from: accounts[0]});
		const uintUu0htnz = BigInt("1976")
		const addresscBKTLOU = accounts[2]
		const uintCAjwbuT = BigInt("1611")
		const addressJmYKaQi = accounts[1]
		const boolIk9JUeT = await FinalRCATyZw.approve.call(addresscBKTLOU, uintUu0htnz, {from: accounts[3]});
		const boolj1d1IU = await FinalRCATyZw.approve.call(addressJmYKaQi, uintCAjwbuT, {from: accounts[4]});
		const stringeZq0Cl = await FinalRCATyZw.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIk9JUeT, true)
		assert.equal(boolj1d1IU, true)
		assert.equal(stringeZq0Cl, "FazVe")
	});

	it('test for Final', async () => {
		const stringGhqnWR7 = "Dy15eVyjQHZLjV9YuPB3iAnZOlIOlVM"
		const stringJWlzXu = "3aH2ikQs2wffcQUj5n"
		const uintDTjYoz2 = BigInt("142")
		const FinalhEi8o2y = await Final.new(stringGhqnWR7, stringJWlzXu, uintDTjYoz2, {from: "0x0000000000000000000000000000000000000001"});
		const uintowJl3Ca = BigInt("1290")
		const addressTDgNrtK = accounts[5]
		const addressw5qgyx = accounts[1]
		const addressFYqFXGU = accounts[2]
		const uintSgAHBa0 = BigInt("1836")
		const addressKvw28r = accounts[3]
		const uintJBKwFhU = BigInt("214")
		const addressBGlS4mD = accounts[3]
		const addressERL55KN = accounts[5]
		const addressF9j8Fnr = accounts[3]
		const boolsIkNJ2A = await FinalhEi8o2y.approve.call(addressTDgNrtK, uintowJl3Ca, {from: accounts[0]});
		const uintP6vDPxJ = await FinalhEi8o2y.allowance.call(addressFYqFXGU, addressw5qgyx, {from: accounts[3]});
		const boolOq4Nfdz = await FinalhEi8o2y.approve.call(addressKvw28r, uintSgAHBa0, {from: accounts[3]});
		const boolIxYWrv1 = await FinalhEi8o2y.transferFrom.call(addressERL55KN, addressBGlS4mD, uintJBKwFhU, {from: accounts[4]});
		const uintgIJLuny = await FinalhEi8o2y.balanceOf.call(addressF9j8Fnr, {from: accounts[1]});
	});

	it('test for Final', async () => {
		const stringVYkN3Gf = "g53vzv1XTAVlv8b"
		const string2eC16G = "3grvcnneAo0yTyt"
		const uintEngxPZW = BigInt("47")
		const FinalnNwVBXo = await Final.new(stringVYkN3Gf, string2eC16G, uintEngxPZW, {from: accounts[3]});
		const addresssNZW8bT = accounts[4]
		const addressME7i9wQ = accounts[3]
		const addressDiKoOE = accounts[2]
		const addressAW9BNqG = accounts[2]
		const uintPyvolSZ = BigInt("508")
		const addressN7M9BFA = accounts[4]
		const stringGAgcyos = await FinalnNwVBXo.name.call({from: accounts[0]});
		const uintMaiFBIG = await FinalnNwVBXo.allowance.call(addressME7i9wQ, addresssNZW8bT, {from: accounts[0]});
		const uintjaK1HKE = await FinalnNwVBXo.balanceOf.call(addressDiKoOE, {from: accounts[3]});
//		const booldQDVG9B = await FinalnNwVBXo.transferownership.call(addressAW9BNqG, {from: accounts[4]});
//		const boolsgEPjVx = await FinalnNwVBXo.increaseAllowance.call(addressN7M9BFA, uintPyvolSZ, {from: accounts[4]});

		assert.equal(stringGAgcyos, "g53vzv1XTAVlv8b")
		assert.equal(uintMaiFBIG, BigInt("0"))
		assert.equal(uintjaK1HKE, BigInt("0"))
		await expect(FinalnNwVBXo.transferownership.call(addressAW9BNqG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringU4hCWyn = "1aDSKicy4bXHuNkTJxQOlHu8RBC2XC2heKE5RS2PHDLGKT7Pl9FjEWLYVQtV"
		const stringT8WRRcc = "6KIonWHdTpKQX9GquAzFLy9ygDXVsQSv4UyAvkcj8p0hEe3CP6gU7r4DQDLxIywzGoT05OUjj9dG"
		const uintYGPm4m2 = BigInt("1237")
		const Finalk3d8TDK = await Final.new(stringU4hCWyn, stringT8WRRcc, uintYGPm4m2, {from: accounts[2]});
		const addressPDEwKq = "0x0000000000000000000000000000000000000001"
		const uintPsa8VIF = BigInt("1278")
		const addressuKTsBqy = accounts[5]
		const uintywdqAyv = BigInt("126")
		const addressu3VF2cE = accounts[2]
		const uinteB0Ejz = BigInt("257")
		const addressb84N3pM = accounts[0]
		const addresslVNuF9W = accounts[0]
		const boolMsLjF6s = await Finalk3d8TDK.transferownership.call(addressPDEwKq, {from: accounts[2]});
//		const boolZrAHTDz = await Finalk3d8TDK.approveAndCall.call(addressuKTsBqy, uintPsa8VIF, {from: accounts[5]});
//		const boolT3PkPRX = await Finalk3d8TDK.approve.call(addressu3VF2cE, uintywdqAyv, {from: accounts[2]});
//		const booluURzDuD = await Finalk3d8TDK.transferFrom.call(addresslVNuF9W, addressb84N3pM, uinteB0Ejz, {from: accounts[0]});
//		const stringBMg6Ue = await Finalk3d8TDK.name.call({from: accounts[2]});

		assert.equal(boolMsLjF6s, true)
		await expect(Finalk3d8TDK.approveAndCall.call(addressuKTsBqy, uintPsa8VIF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringVYkN3Gf = "g53vzv1XTAVlv8b"
		const string2eC16G = "3grvcnneAo0yTyt"
		const uintnuvm0NF = BigInt("47")
		const FinalnNwVBXo = await Final.new(stringVYkN3Gf, string2eC16G, uintnuvm0NF, {from: accounts[3]});
		const uintN2IcloO = BigInt("648")
		const addresscS4Zlch = accounts[1]
		const uintIgSq4Ih = BigInt("33")
		const addresspi0WIFx = accounts[5]
		const addressnGbdShn = accounts[5]
		const boolV2zvAYI = await FinalnNwVBXo.transfer.call(addresscS4Zlch, uintN2IcloO, {from: accounts[3]});
//		const boolcHwNIv = await FinalnNwVBXo.transferFrom.call(addressnGbdShn, addresspi0WIFx, uintIgSq4Ih, {from: accounts[2]});

		assert.equal(boolV2zvAYI, true)
		await expect(FinalnNwVBXo.transferFrom.call(addressnGbdShn, addresspi0WIFx, uintIgSq4Ih, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringFgZbMn = "z4joD2ILP8orNuDa2xQfL2iszHVTOK3AKXoLxi6l8Z"
		const stringoLMrx8a = "AXNuJvK4pHGdyTQ4DbpAHlojIc7sz"
		const uintCPHAjGr = BigInt("1642")
		const FinalT6tj9M = await Final.new(stringFgZbMn, stringoLMrx8a, uintCPHAjGr, {from: accounts[1]});
		const addresstxQjrpF = accounts[3]
		const addresspjae6x = accounts[1]
		const uintYRnbtDG = BigInt("1223")
		const addressXWeBmbR = accounts[0]
		const uintOpELdLu = BigInt("1793")
		const addresssS13ZaX = accounts[1]
		const uintZBFt3JK = BigInt("656")
		const addressTIjkpsG = accounts[0]
		const uintXUDdUZ6 = await FinalT6tj9M.allowance.call(addresspjae6x, addresstxQjrpF, {from: accounts[1]});
		const boolsiCC4m2 = await FinalT6tj9M.approveAndCall.call(addressXWeBmbR, uintYRnbtDG, {from: accounts[1]});
		const boolJR9mar = await FinalT6tj9M.approve.call(addresssS13ZaX, uintOpELdLu, {from: accounts[2]});
//		const booltgnoPs = await FinalT6tj9M.approveAndCall.call(addressTIjkpsG, uintZBFt3JK, {from: accounts[4]});

		assert.equal(boolJR9mar, true)
		assert.equal(boolsiCC4m2, true)
		assert.equal(uintXUDdUZ6, BigInt("0"))
		await expect(FinalT6tj9M.approveAndCall.call(addressTIjkpsG, uintZBFt3JK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringVYkN3Gf = "g53vzv1XTAVlv8b"
		const string2eC16G = "3grvcnneAo0yTyt"
		const uinttQNYosf = BigInt("47")
		const FinalnNwVBXo = await Final.new(stringVYkN3Gf, string2eC16G, uinttQNYosf, {from: accounts[3]});
		const uintmyOlgGm = BigInt("0")
		const addressgl61Dv9 = accounts[1]
		const boolrmqRcSE = await FinalnNwVBXo.transfer.call(addressgl61Dv9, uintmyOlgGm, {from: accounts[2]});

		assert.equal(boolrmqRcSE, true)
	});
})