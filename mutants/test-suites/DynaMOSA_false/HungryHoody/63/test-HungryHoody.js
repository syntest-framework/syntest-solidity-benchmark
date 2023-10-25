const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyYATvifK = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwBxdmU = BigInt("1643")
		const uintPqgmvna = BigInt("240")
		const addressABaXSZ1 = "0x0000000000000000000000000000000000000001"
		const addressqgcl6gj = accounts[1]
		const uintiPn9Rr = BigInt("1030")
		const uintHvwJNRL = BigInt("996")
		const uintf69glR3 = BigInt("35")
		const uintOLZqEUr = BigInt("112")
		const uintxoNoDgO = BigInt("1515")
		const uintau44Y3 = BigInt("727")
		const uintpmxbPZ = await HungryHoodyYATvifK.safeDiv.call(uintPqgmvna, uintwBxdmU, {from: accounts[4]});
		const uintyCuTpz = await HungryHoodyYATvifK.allowance.call(addressqgcl6gj, addressABaXSZ1, {from: accounts[5]});
		const uintuv27Aw6 = await HungryHoodyYATvifK.safeMul.call(uintHvwJNRL, uintiPn9Rr, {from: accounts[5]});
		const uintuFKcXdn = await HungryHoodyYATvifK.safeAdd.call(uintOLZqEUr, uintf69glR3, {from: accounts[5]});
		const uintzYZJqRn = await HungryHoodyYATvifK.safeMul.call(uintau44Y3, uintxoNoDgO, {from: accounts[1]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyFBvai8 = await HungryHoody.new({from: accounts[3]});
		const uintye9sPIu = BigInt("1457")
		const addresshkl4a4h = accounts[2]
		const addresso4d3mk = accounts[3]
		const addresslJlMTPl = accounts[3]
		const addressDT2rt8T = accounts[0]
		const addressCpIwaq = accounts[2]
		const addressfGHlBDs = accounts[4]
//		const boolBMy18wS = await HungryHoodyFBvai8.transfer.call(addresshkl4a4h, uintye9sPIu, {from: accounts[4]});
//		const uintcCka2zd = await HungryHoodyFBvai8.balanceOf.call(addresso4d3mk, {from: accounts[4]});
//		const uintHzztkaw = await HungryHoodyFBvai8.allowance.call(addressDT2rt8T, addresslJlMTPl, {from: accounts[0]});
//		const uintNifL9u = await HungryHoodyFBvai8.allowance.call(addressfGHlBDs, addressCpIwaq, {from: accounts[2]});

		await expect(HungryHoodyFBvai8.transfer.call(addresshkl4a4h, uintye9sPIu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodywV2a27 = await HungryHoody.new({from: accounts[2]});
		const uintKZTNsaH = BigInt("1246")
		const addressXayXpPV = accounts[0]
		const addressryNIbh = accounts[3]
		const uintGY7dkWk = BigInt("79")
		const addressP2Rld3s = accounts[0]
		const uintuQdmNdJ = BigInt("1426")
		const uintVuUneQZ = BigInt("1602")
//		const bool9IX6z6 = await HungryHoodywV2a27.transferFrom.call(addressryNIbh, addressXayXpPV, uintKZTNsaH, {from: accounts[1]});
//		const booln9L3QN4 = await HungryHoodywV2a27.transfer.call(addressP2Rld3s, uintGY7dkWk, {from: accounts[4]});
//		const uint4gS46P = await HungryHoodywV2a27.safeDiv.call(uintVuUneQZ, uintuQdmNdJ, {from: accounts[5]});

		await expect(HungryHoodywV2a27.transferFrom.call(addressryNIbh, addressXayXpPV, uintKZTNsaH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyApF4bbz = await HungryHoody.new({from: accounts[2]});
		const uintW0ZlhPw = BigInt("795")
		const uintDlPCein = BigInt("2027")
		const uintA5V16c = BigInt("499")
		const uint6eWPRv = BigInt("1944")
		const addressW9v4Nn4 = accounts[0]
		const uintBcdMksM = BigInt("892")
		const uintO8n8Sk = BigInt("245")
		const uintz3T7mme = await HungryHoodyApF4bbz.safeAdd.call(uintDlPCein, uintW0ZlhPw, {from: accounts[1]});
		const uintuyuQp6g = await HungryHoodyApF4bbz.totalSupply.call({from: accounts[0]});
		const uintI6Uvzx0 = await HungryHoodyApF4bbz.safeMul.call(uint6eWPRv, uintA5V16c, {from: accounts[1]});
		const uintcbJhQuB = await HungryHoodyApF4bbz.totalSupply.call({from: accounts[3]});
		const uintNjTOdPx = await HungryHoodyApF4bbz.balanceOf.call(addressW9v4Nn4, {from: accounts[0]});
		const uintz0M6IXT = await HungryHoodyApF4bbz.safeMul.call(uintO8n8Sk, uintBcdMksM, {from: accounts[2]});

		assert.equal(uintI6Uvzx0, BigInt("970056"))
		assert.equal(uintNjTOdPx, BigInt("0"))
		assert.equal(uintcbJhQuB, BigInt("25000000000000000000"))
		assert.equal(uintuyuQp6g, BigInt("25000000000000000000"))
		assert.equal(uintz0M6IXT, BigInt("218540"))
		assert.equal(uintz3T7mme, BigInt("2822"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyST5w3cv = await HungryHoody.new({from: accounts[2]});
		const addresstqVGxeE = accounts[3]
		const addressMmBidyv = accounts[0]
		const uintNqRElkx = BigInt("443")
		const addresshaHHQHr = "0x0000000000000000000000000000000000000001"
		const uintnbILN3a = BigInt("981")
		const address3Nxbhp = accounts[1]
		const uintZIu9mw = BigInt("75")
		const uintmofDPBb = BigInt("1968")
		const uintsKP0BxH = await HungryHoodyST5w3cv.allowance.call(addressMmBidyv, addresstqVGxeE, {from: "0x0000000000000000000000000000000000000001"});
		const uintX7pXENC = await HungryHoodyST5w3cv.totalSupply.call({from: accounts[2]});
//		const boolstg522M = await HungryHoodyST5w3cv.transfer.call(addresshaHHQHr, uintNqRElkx, {from: accounts[4]});
//		const boolVLVWI0 = await HungryHoodyST5w3cv.approve.call(address3Nxbhp, uintnbILN3a, {from: accounts[0]});
//		const uintrRpKpcV = await HungryHoodyST5w3cv.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintjqms2i0 = await HungryHoodyST5w3cv.safeDiv.call(uintmofDPBb, uintZIu9mw, {from: accounts[2]});

		assert.equal(uintX7pXENC, BigInt("25000000000000000000"))
		assert.equal(uintsKP0BxH, BigInt("0"))
		await expect(HungryHoodyST5w3cv.transfer.call(addresshaHHQHr, uintNqRElkx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyvsse7ls = await HungryHoody.new({from: accounts[0]});
		const addresslZJOaqw = accounts[4]
		const uintrpcla18 = BigInt("367")
		const uintblcvr3d = BigInt("374")
		const uintgAIR9Me = BigInt("742")
		const addressMX7vQB = accounts[4]
		const uintTcTc9G = await HungryHoodyvsse7ls.balanceOf.call(addresslZJOaqw, {from: accounts[4]});
		const uintT9iXLxA = await HungryHoodyvsse7ls.safeDiv.call(uintblcvr3d, uintrpcla18, {from: accounts[3]});
		const booldZMHJ7h = await HungryHoodyvsse7ls.approve.call(addressMX7vQB, uintgAIR9Me, {from: accounts[4]});

		assert.equal(booldZMHJ7h, true)
		assert.equal(uintT9iXLxA, BigInt("1"))
		assert.equal(uintTcTc9G, BigInt("0"))
	});
})