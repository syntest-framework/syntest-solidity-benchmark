const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairSMswuJ = await PlasmaswapPair.new({from: accounts[4]});
		const bytevawofg3 = "0x0f080e1f1a0b1b0216"
		const addressYYyHIiO = accounts[4]
		const uintHJ6WCiU = BigInt("1575")
		const uintGtzq9K = BigInt("708")
		const addressLsq5rS = accounts[2]
		const addressSxqN6U4 = accounts[3]
		const bytecdWuo1O = "0x15181c06140005040e0307011b0f"
		const addressq8oJktK = accounts[5]
		const uintpabe5ly = BigInt("1897")
		const uintKuKLXKv = BigInt("1044")
		const uintYzu9OzA = await PlasmaswapPairSMswuJ.swap.call(uintGtzq9K, uintHJ6WCiU, addressYYyHIiO, bytevawofg3, {from: accounts[1]});
		const addressfe6x2wF = await PlasmaswapPairSMswuJ.initialize.call(addressSxqN6U4, addressLsq5rS, {from: accounts[1]});
		const uintEzIaJcU = await PlasmaswapPairSMswuJ.swap.call(uintKuKLXKv, uintpabe5ly, addressq8oJktK, bytecdWuo1O, {from: accounts[5]});

		await expect(PlasmaswapPairSMswuJ.swap.call(uintGtzq9K, uintHJ6WCiU, addressYYyHIiO, bytevawofg3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPaircad43L2 = await PlasmaswapPair.new({from: accounts[5]});
		const addressq59NB0p = accounts[5]
		await PlasmaswapPaircad43L2.lock.call({from: accounts[3]});
		const uinttoekvUI = await PlasmaswapPaircad43L2.burn.call(addressq59NB0p, {from: accounts[0]});

		await expect(PlasmaswapPaircad43L2.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairP8qgVe = await PlasmaswapPair.new({from: accounts[4]});
		const addressxwmtKu1 = "0x0000000000000000000000000000000000000001"
		const addressFV2eJXA = accounts[1]
		const addresshhAfmDd = await PlasmaswapPairP8qgVe.skim.call(addressxwmtKu1, {from: accounts[2]});
		const addressQTYjZ6x = await PlasmaswapPairP8qgVe.skim.call(addressFV2eJXA, {from: accounts[2]});
		const uint112sGxnmNz = await PlasmaswapPairP8qgVe.getReserves.call({from: accounts[4]});

		await expect(PlasmaswapPairP8qgVe.skim.call(addressxwmtKu1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairJYuUAD3 = await PlasmaswapPair.new({from: accounts[4]});
		const addressirhC5O = accounts[2]
		const addresstGBBchV = accounts[2]
		const addressOU4QYmt = accounts[2]
		const addressfnjr7Vu = accounts[1]
		const uintwCeYoNT = await PlasmaswapPairJYuUAD3.mint.call(addressirhC5O, {from: accounts[1]});
		const uint112Z4pjgs7 = await PlasmaswapPairJYuUAD3.getReserves.call({from: accounts[0]});
		const addressVLKBmNK = await PlasmaswapPairJYuUAD3.initialize.call(addressOU4QYmt, addresstGBBchV, {from: accounts[2]});
		const addressl32ttgq = await PlasmaswapPairJYuUAD3.skim.call(addressfnjr7Vu, {from: accounts[4]});
		const uint112uuRDuiK = await PlasmaswapPairJYuUAD3.getReserves.call({from: accounts[0]});
		await PlasmaswapPairJYuUAD3.sync.call({from: accounts[3]});

		await expect(PlasmaswapPairJYuUAD3.mint.call(addressirhC5O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairjVWgGVL = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const byteb6If8B0 = "0x09110c001c030e0214030d190a0112"
		const addresshEvEKto = accounts[4]
		const uintrAJcdIS = BigInt("186")
		const uintYpewOFG = BigInt("1020")
		const addressAXAdNuz = accounts[1]
		const addressRkvqBp = accounts[0]
		const byteeUGg13S = "0x0013061d120c140e05070d05191106140c1a05010b15191d0e1609"
		const addressTxgc8Sm = accounts[2]
		const uinto1numl6 = BigInt("1415")
		const uinteDiYpxV = BigInt("571")
		const uintPbemHmc = await PlasmaswapPairjVWgGVL.swap.call(uintYpewOFG, uintrAJcdIS, addresshEvEKto, byteb6If8B0, {from: accounts[2]});
		const addresssa76qnq = await PlasmaswapPairjVWgGVL.skim.call(addressAXAdNuz, {from: accounts[2]});
		const uintfLgVaJL = await PlasmaswapPairjVWgGVL.mint.call(addressRkvqBp, {from: accounts[3]});
		await PlasmaswapPairjVWgGVL.sync.call({from: accounts[4]});
		const uintmyoaDhJ = await PlasmaswapPairjVWgGVL.swap.call(uinteDiYpxV, uinto1numl6, addressTxgc8Sm, byteeUGg13S, {from: accounts[4]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairrvxymYW = await PlasmaswapPair.new({from: accounts[5]});
		const addressswzxlAF = accounts[1]
		const addressxJIr9NF = accounts[0]
		const addresstHBBiC = accounts[0]
		await PlasmaswapPairrvxymYW.sync.call({from: accounts[2]});
		const uintoyz9L7W = await PlasmaswapPairrvxymYW.mint.call(addressswzxlAF, {from: accounts[4]});
		const addressliWb5qW = await PlasmaswapPairrvxymYW.skim.call(addressxJIr9NF, {from: accounts[1]});
		const uintSUDUPCj = await PlasmaswapPairrvxymYW.mint.call(addresstHBBiC, {from: accounts[3]});

		await expect(PlasmaswapPairrvxymYW.sync.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairVALsYPj = await PlasmaswapPair.new({from: accounts[5]});
		const addressBWcymCl = accounts[2]
		const addressEOmhbe6 = "0x0000000000000000000000000000000000000001"
		const byteMOkEDIA = "0x1f1d01021e121903181f0610070a1f170a111e1d181a"
		const addressgJ4B54x = accounts[4]
		const uintR65x773 = BigInt("1228")
		const uintQF3DFMm = BigInt("1576")
		const addressnmr8db6 = accounts[2]
		const addressF0LT5s = accounts[4]
		const byteOiFm9EH = "0x030302160f141c20131c030401121f1a09"
		const address6ixx5n = accounts[4]
		const uintl6dwjY = BigInt("123")
		const uintdtccDiw = BigInt("827")
		const addressIX8R1G = await PlasmaswapPairVALsYPj.initialize.call(addressEOmhbe6, addressBWcymCl, {from: accounts[1]});
		const uintgIPRHbo = await PlasmaswapPairVALsYPj.swap.call(uintQF3DFMm, uintR65x773, addressgJ4B54x, byteMOkEDIA, {from: accounts[3]});
		const uintnzGeS00 = await PlasmaswapPairVALsYPj.burn.call(addressnmr8db6, {from: accounts[4]});
		const addressWtcUlaT = await PlasmaswapPairVALsYPj.skim.call(addressF0LT5s, {from: accounts[4]});
		const uintInsqf5Z = await PlasmaswapPairVALsYPj.swap.call(uintdtccDiw, uintl6dwjY, address6ixx5n, byteOiFm9EH, {from: accounts[3]});

		await expect(PlasmaswapPairVALsYPj.initialize.call(addressEOmhbe6, addressBWcymCl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairqL0qUOm = await PlasmaswapPair.new({from: accounts[5]});
		const addressVQb3sel = accounts[1]
		const addressSPDd1bY = "0x0000000000000000000000000000000000000001"
		const uintC3zEldi = await PlasmaswapPairqL0qUOm.burn.call(addressVQb3sel, {from: accounts[0]});
		await PlasmaswapPairqL0qUOm.sync.call({from: accounts[0]});
		const uint1127gZSQr = await PlasmaswapPairqL0qUOm.getReserves.call({from: accounts[0]});
		const addressNhU6jJD = await PlasmaswapPairqL0qUOm.skim.call(addressSPDd1bY, {from: accounts[0]});

		await expect(PlasmaswapPairqL0qUOm.burn.call(addressVQb3sel, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})