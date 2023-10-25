const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADRgL9PTr = await ZAD.new({from: accounts[3]});
		const uintUL9VhWw = BigInt("1987")
		const address639y4e = accounts[5]
		const uintl25gGXm = BigInt("1659")
		const addressyqxY2Mm = accounts[3]
//		const boolunTZ4aJ = await ZADRgL9PTr.decreaseAllowance.call(address639y4e, uintUL9VhWw, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wsFOt6 = await ZADRgL9PTr.totalSupply.call({from: accounts[5]});
//		const booll0HTGGy = await ZADRgL9PTr.transfer.call(addressyqxY2Mm, uintl25gGXm, {from: accounts[4]});
//		const string62TUoN = await ZADRgL9PTr.symbol.call({from: accounts[3]});
//		const uint256Pr5lO87 = await ZADRgL9PTr.totalSupply.call({from: accounts[3]});

		await expect(ZADRgL9PTr.decreaseAllowance.call(address639y4e, uintUL9VhWw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADLp8rNzt = await ZAD.new({from: accounts[4]});
		const uintU3aH8z = BigInt("961")
		const addressfIPmj1 = accounts[0]
		const uintdE6cXlH = BigInt("1046")
		const addressgfioUco = accounts[1]
		const uintMDH1k2Z = BigInt("777")
		const addressJKburPm = accounts[2]
		const boolqXSqgT8 = await ZADLp8rNzt.increaseAllowance.call(addressfIPmj1, uintU3aH8z, {from: accounts[2]});
//		const boolnrxzbxe = await ZADLp8rNzt.transfer.call(addressgfioUco, uintdE6cXlH, {from: accounts[2]});
//		const booldmYkiqu = await ZADLp8rNzt.approve.call(addressJKburPm, uintMDH1k2Z, {from: accounts[2]});

		assert.equal(boolqXSqgT8, true)
		await expect(ZADLp8rNzt.transfer.call(addressgfioUco, uintdE6cXlH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADscTb7Az = await ZAD.new({from: accounts[5]});
		const uintnmG294x = BigInt("591")
		const addresscPP0HJX = accounts[1]
		const uintYVRThFf = BigInt("981")
		const addressmkrsb96 = accounts[4]
		const addressVH5yKD3 = accounts[1]
		const addressL4BmhPR = accounts[1]
		const uinttL9GoDi = BigInt("400")
		const addressBB1cqdm = accounts[1]
		const uint256TAEAsAr = await ZADscTb7Az.totalSupply.call({from: accounts[4]});
		const boolO19nCnv = await ZADscTb7Az.approve.call(addresscPP0HJX, uintnmG294x, {from: accounts[0]});
//		const boolpdKni8L = await ZADscTb7Az.transferFrom.call(addressVH5yKD3, addressmkrsb96, uintYVRThFf, {from: accounts[4]});
//		const uint256bzRcQDS = await ZADscTb7Az.balanceOf.call(addressL4BmhPR, {from: accounts[0]});
//		const boolDRRCkMb = await ZADscTb7Az.decreaseAllowance.call(addressBB1cqdm, uinttL9GoDi, {from: accounts[2]});

		assert.equal(boolO19nCnv, true)
		assert.equal(uint256TAEAsAr, BigInt("100000000000000000000000000"))
		await expect(ZADscTb7Az.transferFrom.call(addressVH5yKD3, addressmkrsb96, uintYVRThFf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADQVTZGU = await ZAD.new({from: accounts[1]});
		const addressAewuo5 = accounts[3]
		const uintMA6BXcS = BigInt("1664")
		const addressJ5FUDcD = accounts[4]
		const uint256U9qWwbW = await ZADQVTZGU.totalSupply.call({from: accounts[4]});
		const uint256wYATJqj = await ZADQVTZGU.balanceOf.call(addressAewuo5, {from: accounts[4]});
//		const boolRgL6R8 = await ZADQVTZGU.transfer.call(addressJ5FUDcD, uintMA6BXcS, {from: accounts[3]});

		assert.equal(uint256U9qWwbW, BigInt("100000000000000000000000000"))
		assert.equal(uint256wYATJqj, BigInt("0"))
		await expect(ZADQVTZGU.transfer.call(addressJ5FUDcD, uintMA6BXcS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADsTvnEF = await ZAD.new({from: accounts[0]});
		const uintY8r1HcQ = BigInt("51")
		const addressj5ZYIr = "0x0000000000000000000000000000000000000001"
		const uintpjKvwh = BigInt("1894")
		const addresshs5zEUg = accounts[5]
		const addressUDfPBE = accounts[3]
		const boolqTIIbQR = await ZADsTvnEF.approve.call(addressj5ZYIr, uintY8r1HcQ, {from: accounts[1]});
		const strings4WmrY = await ZADsTvnEF.symbol.call({from: accounts[2]});
		const uint8bBg45Cj = await ZADsTvnEF.decimals.call({from: accounts[4]});
//		const booln6u3Yti = await ZADsTvnEF.transferFrom.call(addressUDfPBE, addresshs5zEUg, uintpjKvwh, {from: accounts[3]});

		assert.equal(boolqTIIbQR, true)
		assert.equal(strings4WmrY, "ZAD")
		assert.equal(uint8bBg45Cj, BigInt("18"))
		await expect(ZADsTvnEF.transferFrom.call(addressUDfPBE, addresshs5zEUg, uintpjKvwh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADwuIab7Y = await ZAD.new({from: accounts[3]});
		const uintnDvSTYD = BigInt("901")
		const addressWdeLw2l = accounts[0]
		const addressrJr39W = accounts[5]
		const addressJkismDG = accounts[3]
		const boolUOAllt9 = await ZADwuIab7Y.approve.call(addressWdeLw2l, uintnDvSTYD, {from: accounts[4]});
		const uint256yvlAvwO = await ZADwuIab7Y.totalSupply.call({from: accounts[1]});
		const stringaQoQTTP = await ZADwuIab7Y.name.call({from: accounts[2]});
		const uint256qKAtak = await ZADwuIab7Y.balanceOf.call(addressrJr39W, {from: accounts[0]});
		const uint256EslLiuV = await ZADwuIab7Y.balanceOf.call(addressJkismDG, {from: accounts[3]});
		const uint256iHj375w = await ZADwuIab7Y.totalSupply.call({from: accounts[3]});

		assert.equal(boolUOAllt9, true)
		assert.equal(stringaQoQTTP, "Zadkiel")
		assert.equal(uint256EslLiuV, BigInt("0"))
		assert.equal(uint256iHj375w, BigInt("100000000000000000000000000"))
		assert.equal(uint256qKAtak, BigInt("0"))
		assert.equal(uint256yvlAvwO, BigInt("100000000000000000000000000"))
	});

	it('test for ZAD', async () => {
		const ZADF5oVk9b = await ZAD.new({from: accounts[0]});
		const uintHgnQtka = BigInt("1537")
		const addresssZy6Iod = accounts[3]
		const addressOD0zrQr = accounts[3]
		const uintNwafk56 = BigInt("957")
		const boolG3hrIkV = await ZADF5oVk9b.approve.call(addresssZy6Iod, uintHgnQtka, {from: accounts[3]});
		const uint256OcHC8d3 = await ZADF5oVk9b.balanceOf.call(addressOD0zrQr, {from: accounts[2]});
//		const uint256gzF2zte = await ZADF5oVk9b._burn.call(uintNwafk56, {from: accounts[3]});
//		const stringmT4pdMA = await ZADF5oVk9b.symbol.call({from: accounts[0]});

		assert.equal(boolG3hrIkV, true)
		assert.equal(uint256OcHC8d3, BigInt("0"))
		await expect(ZADF5oVk9b._burn.call(uintNwafk56, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADF5oVk9b = await ZAD.new({from: accounts[0]});
		const uinto8cVwS = BigInt("1537")
		const addressU63u835 = accounts[3]
		const addressWVk7uD6 = accounts[4]
		const addressBistye = "0x0000000000000000000000000000000000000001"
		const boolG3hrIkV = await ZADF5oVk9b.approve.call(addressU63u835, uinto8cVwS, {from: accounts[3]});
		const uint256n5rbYE = await ZADF5oVk9b.allowance.call(addressBistye, addressWVk7uD6, {from: accounts[3]});
		const stringmT4pdMA = await ZADF5oVk9b.symbol.call({from: accounts[0]});
		const uint8FgEgLXE = await ZADF5oVk9b.decimals.call({from: accounts[1]});

		assert.equal(boolG3hrIkV, true)
		assert.equal(stringmT4pdMA, "ZAD")
		assert.equal(uint256n5rbYE, BigInt("0"))
		assert.equal(uint8FgEgLXE, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZAD3k0OqE = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVwfFU95 = accounts[3]
		const addressHnqV2H8 = accounts[1]
		const uintFLNVU91 = BigInt("911")
		const addressas9hF0h = "0x0000000000000000000000000000000000000001"
		const addressDNm2jee = accounts[4]
		const uintkIWeGOr = BigInt("1079")
		const addressKS4UFDF = accounts[2]
		const uint256oGYTdN1 = await ZAD3k0OqE.allowance.call(addressHnqV2H8, addressVwfFU95, {from: "0x0000000000000000000000000000000000000001"});
		const stringw642MnD = await ZAD3k0OqE.symbol.call({from: accounts[1]});
		const boolVUy6S90 = await ZAD3k0OqE.transferFrom.call(addressDNm2jee, addressas9hF0h, uintFLNVU91, {from: accounts[0]});
		const boolmT8dnPz = await ZAD3k0OqE.decreaseAllowance.call(addressKS4UFDF, uintkIWeGOr, {from: accounts[0]});
	});
})