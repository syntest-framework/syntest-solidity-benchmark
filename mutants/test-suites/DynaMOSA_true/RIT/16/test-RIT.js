const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITiVhhmWv = await RIT.new({from: accounts[2]});
		const uintDDKeqMe = BigInt("24")
		const addressdlWXnr = accounts[0]
		const addresshjNbjOL = accounts[3]
		const uintSLrYpSW = BigInt("203")
		const addresssdSs7Eo = accounts[3]
//		const booloSSfhV2 = await RITiVhhmWv.transfer.call(addressdlWXnr, uintDDKeqMe, {from: accounts[2]});
//		const uint256AiCFyZe = await RITiVhhmWv.balanceOf.call(addresshjNbjOL, {from: accounts[4]});
//		const boolMsGxkhQ = await RITiVhhmWv.increaseAllowance.call(addresssdSs7Eo, uintSLrYpSW, {from: accounts[3]});
//		const stringqvj7moK = await RITiVhhmWv.symbol.call({from: accounts[3]});

		await expect(RITiVhhmWv.transfer.call(addressdlWXnr, uintDDKeqMe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITuhLqxLC = await RIT.new({from: accounts[0]});
		const uintJXwSSbg = BigInt("1762")
		const addressK31kATb = "0x0000000000000000000000000000000000000001"
		const uintNw2RvFc = BigInt("1662")
		const addressPjpxYQT = accounts[4]
		const boolEkKzcc7 = await RITuhLqxLC.increaseAllowance.call(addressK31kATb, uintJXwSSbg, {from: "0x0000000000000000000000000000000000000001"});
		const booldbbNtm0 = await RITuhLqxLC.approve.call(addressPjpxYQT, uintNw2RvFc, {from: accounts[2]});
		const uint8tb1lnTL = await RITuhLqxLC.decimals.call({from: accounts[3]});

		assert.equal(boolEkKzcc7, true)
		assert.equal(booldbbNtm0, true)
		assert.equal(uint8tb1lnTL, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITVefzFal = await RIT.new({from: accounts[0]});
		const addressCmhY5xL = accounts[0]
		const addressSAkNG8E = accounts[0]
		const uintWeLggsM = BigInt("241")
		const addresskwtTHNn = accounts[4]
		const addresse95IJ6H = accounts[4]
		const uint256lzyNihm = await RITVefzFal.allowance.call(addressSAkNG8E, addressCmhY5xL, {from: accounts[4]});
//		const boolm0uiJy9 = await RITVefzFal.transfer.call(addresskwtTHNn, uintWeLggsM, {from: accounts[3]});
//		const stringKhPFhZu = await RITVefzFal.symbol.call({from: accounts[3]});
//		const uint256p5KMObY = await RITVefzFal.balanceOf.call(addresse95IJ6H, {from: accounts[5]});

		assert.equal(uint256lzyNihm, BigInt("0"))
		await expect(RITVefzFal.transfer.call(addresskwtTHNn, uintWeLggsM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITkeJq2ww = await RIT.new({from: accounts[4]});
		const uintrxri9xX = BigInt("1119")
		const stringOzLVdq7 = await RITkeJq2ww.name.call({from: accounts[1]});
//		const uint256eY8A8nk = await RITkeJq2ww._burn.call(uintrxri9xX, {from: accounts[2]});

		assert.equal(stringOzLVdq7, "Real Estate Investment Token")
		await expect(RITkeJq2ww._burn.call(uintrxri9xX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITf6NErsF = await RIT.new({from: accounts[4]});
		const uintnCVToJF = BigInt("1213")
		const uint256XosTh3Q = await RITf6NErsF.totalSupply.call({from: accounts[1]});
		const uint8ZZUaZcD = await RITf6NErsF.decimals.call({from: accounts[1]});
//		const uint256Y5eSggg = await RITf6NErsF._burn.call(uintnCVToJF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256XosTh3Q, BigInt("500000000000000000000000000"))
		assert.equal(uint8ZZUaZcD, BigInt("18"))
		await expect(RITf6NErsF._burn.call(uintnCVToJF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITqJqr5fE = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGZLVESo = BigInt("1829")
		const addressivUYwtu = accounts[0]
		const addressHQdtRsd = accounts[0]
		const address4Ye1VT = accounts[1]
		const uintvu9PXVa = BigInt("2041")
		const addresstOqhN4s = accounts[4]
		const addressORCtTA = accounts[0]
		const addressfbv1V4z = accounts[2]
		const boolNrLb1tl = await RITqJqr5fE.approve.call(addressivUYwtu, uintGZLVESo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eVgbtGJ = await RITqJqr5fE.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256PS0DUqB = await RITqJqr5fE.allowance.call(address4Ye1VT, addressHQdtRsd, {from: accounts[5]});
		const boolC3lhnXW = await RITqJqr5fE.decreaseAllowance.call(addresstOqhN4s, uintvu9PXVa, {from: accounts[3]});
		const uint256uoeZ7Hq = await RITqJqr5fE.allowance.call(addressfbv1V4z, addressORCtTA, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for RIT', async () => {
		const RITkeTCi42 = await RIT.new({from: accounts[5]});
		const addressumT5OPm = accounts[1]
		const addressjwmKAM = "0x0000000000000000000000000000000000000001"
		const uintWXPypEz = BigInt("2045")
		const addressXlZ85BF = accounts[2]
		const addresss7AqXlk = accounts[5]
		const uintJebZrG6 = BigInt("203")
		const addressJgfxbZx = accounts[3]
		const uint256yGaxNCz = await RITkeTCi42.allowance.call(addressjwmKAM, addressumT5OPm, {from: "0x0000000000000000000000000000000000000001"});
		const stringTdF7CV = await RITkeTCi42.symbol.call({from: accounts[0]});
//		const boolLua5y4h = await RITkeTCi42.transferFrom.call(addresss7AqXlk, addressXlZ85BF, uintWXPypEz, {from: accounts[4]});
//		const uint256Twj1CSL = await RITkeTCi42.totalSupply.call({from: accounts[2]});
//		const boolBAns15 = await RITkeTCi42.increaseAllowance.call(addressJgfxbZx, uintJebZrG6, {from: accounts[2]});
//		const stringNaV9lwG = await RITkeTCi42.symbol.call({from: accounts[4]});

		assert.equal(stringTdF7CV, "RIT 2.0")
		assert.equal(uint256yGaxNCz, BigInt("0"))
		await expect(RITkeTCi42.transferFrom.call(addresss7AqXlk, addressXlZ85BF, uintWXPypEz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITN5WAtM5 = await RIT.new({from: accounts[4]});
		const uintOem5GDI = BigInt("1445")
		const addressefyhaN = accounts[2]
		const uintCLOl8x = BigInt("750")
		const addressbyf90Q = "0x0000000000000000000000000000000000000001"
		const booldSedrBf = await RITN5WAtM5.approve.call(addressefyhaN, uintOem5GDI, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqfAAI5i = await RITN5WAtM5.decreaseAllowance.call(addressbyf90Q, uintCLOl8x, {from: accounts[2]});

		assert.equal(booldSedrBf, true)
		await expect(RITN5WAtM5.decreaseAllowance.call(addressbyf90Q, uintCLOl8x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITWLeZ43l = await RIT.new({from: accounts[3]});
		const addressjje4L4v = accounts[2]
		const uintNNoFMVl = BigInt("1742")
		const addressfMlnn99 = accounts[4]
		const uint256qmznqS = await RITWLeZ43l.balanceOf.call(addressjje4L4v, {from: "0x0000000000000000000000000000000000000001"});
		const stringQYdpkSQ = await RITWLeZ43l.symbol.call({from: accounts[0]});
//		const boolegVSkc = await RITWLeZ43l.transfer.call(addressfMlnn99, uintNNoFMVl, {from: accounts[1]});
//		const stringANQTMA8 = await RITWLeZ43l.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringQYdpkSQ, "RIT 2.0")
		assert.equal(uint256qmznqS, BigInt("0"))
		await expect(RITWLeZ43l.transfer.call(addressfMlnn99, uintNNoFMVl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})