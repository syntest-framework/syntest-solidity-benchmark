const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsp0v3Tlr = await UFragments.new({from: accounts[2]});
//		const uint256sUvLYhm = await UFragmentsp0v3Tlr.calRebase.call({from: accounts[4]});
//		const addressgEj5V1K = await UFragmentsp0v3Tlr.owner.call({from: accounts[1]});

		await expect(UFragmentsp0v3Tlr.calRebase.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsbf31qDK = await UFragments.new({from: accounts[0]});
		const intX8odqkg = BigInt("756")
		const intrHW5h3N = BigInt("-1561")
		const addressUXffohk = accounts[0]
//		const int256Egz1DtQ = await UFragmentsbf31qDK.mul.call(intrHW5h3N, intX8odqkg, {from: accounts[1]});
//		const addressZo1CMMG = await UFragmentsbf31qDK.initialize.call(addressUXffohk, {from: accounts[4]});
//		const stringXsakUhp = await UFragmentsbf31qDK.symbol.call({from: accounts[0]});

		await expect(UFragmentsbf31qDK.mul.call(intrHW5h3N, intX8odqkg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentssGObQ5z = await UFragments.new({from: accounts[2]});
		const uintGpNiKOy = BigInt("690")
		const addressFK0nR1Z = accounts[0]
		const addressJT5RWZk = accounts[3]
		const addressWzk56JD = accounts[0]
		const uintyqsnfii = BigInt("902")
		const addressjwmWxtn = accounts[1]
//		const addressteoOWBy = await UFragmentssGObQ5z.initRebase.call(addressFK0nR1Z, uintGpNiKOy, {from: accounts[5]});
//		const uint256Y7a6T1o = await UFragmentssGObQ5z.balanceOf.call(addressJT5RWZk, {from: accounts[1]});
//		const addressIQY0qFn = await UFragmentssGObQ5z.initialize.call(addressWzk56JD, {from: accounts[4]});
//		const addressdGClbNc = await UFragmentssGObQ5z.initRebase.call(addressjwmWxtn, uintyqsnfii, {from: accounts[4]});

		await expect(UFragmentssGObQ5z.initRebase.call(addressFK0nR1Z, uintGpNiKOy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrzb6ggJ = await UFragments.new({from: accounts[0]});
		const addressk3t139Z = accounts[3]
//		const addressuGUpA6C = await UFragmentsrzb6ggJ.initialize.call(addressk3t139Z, {from: accounts[0]});
//		const uint256a4dISUt = await UFragmentsrzb6ggJ.totalSupply.call({from: accounts[2]});

		await expect(UFragmentsrzb6ggJ.initialize.call(addressk3t139Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentstPj9FXQ = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intjEJouat = BigInt("1831")
		const intkClsM0q = BigInt("1833")
		const addressGHd7Exh = accounts[1]
		const uint256rXt2sUR = await UFragmentstPj9FXQ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringfJ0eZMd = await UFragmentstPj9FXQ.name.call({from: "0x0000000000000000000000000000000000000001"});
		const int256LsUEIV = await UFragmentstPj9FXQ.div.call(intkClsM0q, intjEJouat, {from: accounts[0]});
		const uint8dLnGrn7 = await UFragmentstPj9FXQ.decimals.call({from: accounts[3]});
		const address8FGeub = await UFragmentstPj9FXQ.initialize.call(addressGHd7Exh, {from: accounts[2]});
	});

	it('test for UFragments', async () => {
		const UFragmentsEQ4hCnv = await UFragments.new({from: accounts[1]});
		const uintLUPSxBU = BigInt("1692")
		const addressCI9sRWp = accounts[4]
		const uintmlnPuKa = BigInt("198")
		const stringwdrMhUi = "fI7gvOSK4H8UJFEjsesErCTEUzdSnAbjRqUuVpQRb6QWEMFBVY8SmIABzzwOaknLt5wFpjGui9HFJEtAf3xtHmu"
		const stringFINmM3c = "0LH0eTtH4ERIU4"
		const intKl30D9U = BigInt("-1484")
//		const booliDG6e8F = await UFragmentsEQ4hCnv.transfer.call(addressCI9sRWp, uintLUPSxBU, {from: accounts[4]});
//		const stringTtQSq7R = await UFragmentsEQ4hCnv.initialize.call(stringFINmM3c, stringwdrMhUi, uintmlnPuKa, {from: accounts[4]});
//		const int256LsypREf = await UFragmentsEQ4hCnv.abs.call(intKl30D9U, {from: accounts[1]});

		await expect(UFragmentsEQ4hCnv.transfer.call(addressCI9sRWp, uintLUPSxBU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrzb6ggJ = await UFragments.new({from: accounts[0]});
		const uint256a4dISUt = await UFragmentsrzb6ggJ.totalSupply.call({from: accounts[2]});

		assert.equal(uint256a4dISUt, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsrzb6ggJ = await UFragments.new({from: accounts[0]});
		const addressmCroY5p = accounts[4]
		const stringWgPpyIG = await UFragmentsrzb6ggJ.name.call({from: accounts[0]});
//		const addressuGUpA6C = await UFragmentsrzb6ggJ.initialize.call(addressmCroY5p, {from: accounts[0]});
//		const uint256a4dISUt = await UFragmentsrzb6ggJ.totalSupply.call({from: accounts[2]});

		assert.equal(stringWgPpyIG, "")
		await expect(UFragmentsrzb6ggJ.initialize.call(addressmCroY5p, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQCmEfPB = await UFragments.new({from: accounts[2]});
		const intXHKsVFq = BigInt("-1159")
		const intJa7Mzye = BigInt("1772")
		const stringok3VfT5 = await UFragmentsQCmEfPB.symbol.call({from: accounts[1]});
//		const int256cXkKSPB = await UFragmentsQCmEfPB.mul.call(intJa7Mzye, intXHKsVFq, {from: accounts[3]});
//		const stringSvyO4sx = await UFragmentsQCmEfPB.symbol.call({from: accounts[4]});
//		const addressnaZPXkX = await UFragmentsQCmEfPB.owner.call({from: accounts[5]});
//		await UFragmentsQCmEfPB.renounceOwnership.call({from: accounts[3]});

		assert.equal(stringok3VfT5, "")
		await expect(UFragmentsQCmEfPB.mul.call(intJa7Mzye, intXHKsVFq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsEQ4hCnv = await UFragments.new({from: accounts[1]});
		const uint3x5eTu = BigInt("204")
		const stringS3mXyMv = "0bN6eTDytq7l4alvvbVGugY8EclI9BJGhssPbpKgs6RpXUeCIYy8Lx"
		const stringoOcPTLI = "kRc73fFWmu8QsmmhRp7HGqH"
		const uintjyknwB = BigInt("1692")
		const addresssfyvkp = accounts[4]
		const intTfdW12T = BigInt("1637")
		const uintRgdhkZi = BigInt("185")
		const stringwdrMhUi = "fI7gvOSK4H8UJFEjsesErCTEUzdSnAbjRqUuVpQRb6QWEMFBVY8SmIABzzwOaknLt5wFpjGui9HFJEtAf3xtHmu"
		const stringFINmM3c = "0LH0eTtH4ERIU4"
		const intfPDiX8h = BigInt("-1457")
		const stringIX8QMXZ = await UFragmentsEQ4hCnv.initialize.call(stringoOcPTLI, stringS3mXyMv, uint3x5eTu, {from: accounts[4]});
//		const booliDG6e8F = await UFragmentsEQ4hCnv.transfer.call(addresssfyvkp, uintjyknwB, {from: accounts[4]});
//		const int256NidgAR = await UFragmentsEQ4hCnv.abs.call(intTfdW12T, {from: accounts[1]});
//		const stringTtQSq7R = await UFragmentsEQ4hCnv.initialize.call(stringFINmM3c, stringwdrMhUi, uintRgdhkZi, {from: accounts[4]});
//		const int256LsypREf = await UFragmentsEQ4hCnv.abs.call(intfPDiX8h, {from: accounts[1]});

		await expect(UFragmentsEQ4hCnv.transfer.call(addresssfyvkp, uintjyknwB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsp0v3Tlr = await UFragments.new({from: accounts[2]});
		const intNvEWZmg = BigInt("-1644")
		const intHseLogB = BigInt("-1218")
		const uintCiVmDBm = BigInt("135")
		const address03fWt2 = accounts[5]
		const addressxFqrrno = accounts[0]
		const addressDt4QwTR = "0x0000000000000000000000000000000000000001"
		const boolS6RU2H = await UFragmentsp0v3Tlr.rebaseTimeInfo.call({from: accounts[1]});
//		const int256jeBtaMu = await UFragmentsp0v3Tlr.mul.call(intHseLogB, intNvEWZmg, {from: accounts[0]});
//		const uint256sUvLYhm = await UFragmentsp0v3Tlr.calRebase.call({from: accounts[4]});
//		const addressgEj5V1K = await UFragmentsp0v3Tlr.owner.call({from: accounts[1]});
//		const boolOcOefBj = await UFragmentsp0v3Tlr.approve.call(address03fWt2, uintCiVmDBm, {from: accounts[3]});
//		const addresssVW7dMv = await UFragmentsp0v3Tlr.initialize.call(addressxFqrrno, {from: accounts[2]});
//		const uint256PXStZM0 = await UFragmentsp0v3Tlr.balanceOf.call(addressDt4QwTR, {from: accounts[4]});

		await expect(UFragmentsp0v3Tlr.mul.call(intHseLogB, intNvEWZmg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsp0v3Tlr = await UFragments.new({from: accounts[2]});
		const uintWxJZFvc = BigInt("184")
		const address5XU2qS = accounts[1]
		const addressgEj5V1K = await UFragmentsp0v3Tlr.owner.call({from: accounts[1]});
//		const addressbUcozQ5 = await UFragmentsp0v3Tlr.initRebase.call(address5XU2qS, uintWxJZFvc, {from: accounts[0]});

		assert.equal(addressgEj5V1K, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsp0v3Tlr.initRebase.call(address5XU2qS, uintWxJZFvc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsEQ4hCnv = await UFragments.new({from: accounts[1]});
		const addressr0qDPTe = accounts[3]
		const addressXxNbknB = accounts[2]
		const uintK5kqjdf = BigInt("1692")
		const addressxtJ63iG = accounts[4]
		const addressHfC0JTc = accounts[0]
		const addressK8bnzmQ = accounts[3]
		const intl2D86HG = BigInt("-1484")
		const uint256aheobLK = await UFragmentsEQ4hCnv.allowance.call(addressXxNbknB, addressr0qDPTe, {from: "0x0000000000000000000000000000000000000001"});
		const addressnSXkUS8 = await UFragmentsEQ4hCnv.owner.call({from: accounts[2]});
//		const booliDG6e8F = await UFragmentsEQ4hCnv.transfer.call(addressxtJ63iG, uintK5kqjdf, {from: accounts[4]});
//		const stringWYGEXY1 = await UFragmentsEQ4hCnv.name.call({from: accounts[1]});
//		const uint256sSE3uXz = await UFragmentsEQ4hCnv.allowance.call(addressK8bnzmQ, addressHfC0JTc, {from: accounts[0]});
//		const int256LsypREf = await UFragmentsEQ4hCnv.abs.call(intl2D86HG, {from: accounts[1]});

		assert.equal(addressnSXkUS8, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256aheobLK, BigInt("0"))
		await expect(UFragmentsEQ4hCnv.transfer.call(addressxtJ63iG, uintK5kqjdf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsFWbCchU = await UFragments.new({from: accounts[0]});
		const uintnhPxbB0 = BigInt("402")
		const addressg6oRUPd = accounts[0]
		const addressKkvr1Z2 = accounts[1]
		const uintdO5Mg1i = BigInt("1035")
		const addressigdzb2J = accounts[4]
		const uintY5A90XS = BigInt("1052")
		const address7U0lWN = accounts[4]
		const addressT5iAPdL = accounts[0]
//		const boolJzvEwut = await UFragmentsFWbCchU.transferFrom.call(addressKkvr1Z2, addressg6oRUPd, uintnhPxbB0, {from: accounts[5]});
//		const boolkbJjwM = await UFragmentsFWbCchU.transfer.call(addressigdzb2J, uintdO5Mg1i, {from: accounts[3]});
//		const boolqVWgHD = await UFragmentsFWbCchU.approve.call(address7U0lWN, uintY5A90XS, {from: accounts[4]});
//		const uint256i0H0EyA = await UFragmentsFWbCchU.balanceOf.call(addressT5iAPdL, {from: accounts[4]});

		await expect(UFragmentsFWbCchU.transferFrom.call(addressKkvr1Z2, addressg6oRUPd, uintnhPxbB0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsp0v3Tlr = await UFragments.new({from: accounts[2]});
		const uintRcQkqmL = BigInt("102")
		const stringRad6lEq = "e5vnN9kJsMyN5aJNfy0CFnZ1iOzF0gWAdnDPMD0ufh9iZGHMccz"
		const stringYQVwBXe = "JovXSMgrTzK06HzOwW58oNdTyEtVitA8NRBmSzyhqL56uL4NPbtifxUELXJ7FcMHjKOddcJD3AFog"
		const uint031NHv = BigInt("1221")
		const addressbsdgCJC = accounts[2]
		const intLVRT3M8 = BigInt("1984")
		const intJi5IGXL = BigInt("703")
		const stringGGTWR5 = await UFragmentsp0v3Tlr.initialize.call(stringYQVwBXe, stringRad6lEq, uintRcQkqmL, {from: accounts[1]});
		const boolJXAvTIX = await UFragmentsp0v3Tlr.approve.call(addressbsdgCJC, uint031NHv, {from: accounts[5]});
//		const uint256sUvLYhm = await UFragmentsp0v3Tlr.calRebase.call({from: accounts[4]});
//		const int256JZJWka6 = await UFragmentsp0v3Tlr.add.call(intJi5IGXL, intLVRT3M8, {from: accounts[0]});

		assert.equal(boolJXAvTIX, true)
		await expect(UFragmentsp0v3Tlr.calRebase.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsY5z8Yo0 = await UFragments.new({from: accounts[4]});
		const addressUqLdtem = accounts[5]
		const addressodfS7Jr = accounts[1]
		const uint256opDNgk2 = await UFragmentsY5z8Yo0.allowance.call(addressodfS7Jr, addressUqLdtem, {from: accounts[1]});
		const uint256rBrcR0h = await UFragmentsY5z8Yo0.totalSupply.call({from: accounts[0]});
		const addressKlSjcv = await UFragmentsY5z8Yo0.owner.call({from: accounts[4]});
		const uint8PR2WN7y = await UFragmentsY5z8Yo0.decimals.call({from: accounts[4]});

		assert.equal(addressKlSjcv, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256opDNgk2, BigInt("0"))
		assert.equal(uint256rBrcR0h, BigInt("0"))
		assert.equal(uint8PR2WN7y, BigInt("0"))
	});
})