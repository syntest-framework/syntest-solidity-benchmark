const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20HcsADk = await GAZ_ERC20.new({from: accounts[4]});
		const uintiG17EYd = BigInt("1205")
		const addressLRZvoxA = accounts[0]
		const uintAkv0hQk = BigInt("168")
		const addressxOars9 = accounts[5]
		const uintp8tbnCy = BigInt("1005")
		const addressuQE8JY9 = accounts[3]
		const uintrCi2ZE = BigInt("1590")
		const address83SOTI = accounts[3]
		const boolH2qhHUP = await GAZ_ERC20HcsADk.approve.call(addressLRZvoxA, uintiG17EYd, {from: accounts[5]});
		const boolf6tN7Qk = await GAZ_ERC20HcsADk.approve.call(addressxOars9, uintAkv0hQk, {from: accounts[0]});
		const booljwRCJmd = await GAZ_ERC20HcsADk.approve.call(addressuQE8JY9, uintp8tbnCy, {from: accounts[1]});
		const booloTfPrvd = await GAZ_ERC20HcsADk.approve.call(address83SOTI, uintrCi2ZE, {from: accounts[2]});

		assert.equal(boolH2qhHUP, true)
		assert.equal(boolf6tN7Qk, true)
		assert.equal(booljwRCJmd, true)
		assert.equal(booloTfPrvd, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20DxTbbxZ = await GAZ_ERC20.new({from: accounts[2]});
		const uinthoiUOzq = BigInt("757")
		const addresscrOdyw = accounts[1]
		const addressXz7GPOU = accounts[0]
		const uintj3kODWq = BigInt("582")
		const addressEEaW5Ts = accounts[3]
		const uintNsl9ZNU = BigInt("1939")
		const addressKhDzv5w = accounts[0]
		const addressu1L9HjI = accounts[0]
		const boolplbgQ1 = await GAZ_ERC20DxTbbxZ.approve.call(addresscrOdyw, uinthoiUOzq, {from: accounts[0]});
//		const boolCqYBZ4B = await GAZ_ERC20DxTbbxZ.approve.call(addressXz7GPOU, {from: accounts[1]});
//		const boolQ8cJdFK = await GAZ_ERC20DxTbbxZ.approve.call(addressEEaW5Ts, uintj3kODWq, {from: accounts[0]});
//		const boolxV4r50f = await GAZ_ERC20DxTbbxZ.transferFrom.call(addressu1L9HjI, addressKhDzv5w, uintNsl9ZNU, {from: accounts[0]});

		assert.equal(boolplbgQ1, true)
		await expect(GAZ_ERC20DxTbbxZ.approve.call(addressXz7GPOU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20LONuGcN = await GAZ_ERC20.new({from: accounts[1]});
		const uintPNxpHRt = BigInt("1711")
		const addressNJo26Yp = accounts[2]
		const uintF26eRut = BigInt("1403")
		const addressOmhNGNr = accounts[2]
		const addressiIyF4oi = accounts[4]
		const boolCUzFy5 = await GAZ_ERC20LONuGcN.approve.call(addressNJo26Yp, uintPNxpHRt, {from: accounts[3]});
		const boolkoVLQ0E = await GAZ_ERC20LONuGcN.approve.call(addressOmhNGNr, uintF26eRut, {from: accounts[2]});
//		const boolaRysP3c = await GAZ_ERC20LONuGcN.approve.call(addressiIyF4oi, {from: accounts[4]});

		assert.equal(boolCUzFy5, true)
		assert.equal(boolkoVLQ0E, true)
		await expect(GAZ_ERC20LONuGcN.approve.call(addressiIyF4oi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20yYYJAoa = await GAZ_ERC20.new({from: accounts[2]});
		const uintvusiE5C = BigInt("416")
		const addresslE3CC5B = accounts[1]
		const uintnpNdg12 = BigInt("955")
		const addressugreavf = accounts[3]
		const addressd7owo6b = accounts[1]
		const uintGaUBywC = BigInt("1359")
		const addressgEm43Z = accounts[4]
//		const boolyYs9DXC = await GAZ_ERC20yYYJAoa.transfer.call(addresslE3CC5B, uintvusiE5C, {from: accounts[3]});
//		const boolN4Q121q = await GAZ_ERC20yYYJAoa.transferFrom.call(addressd7owo6b, addressugreavf, uintnpNdg12, {from: accounts[0]});
//		const boolx0yiWGu = await GAZ_ERC20yYYJAoa.transfer.call(addressgEm43Z, uintGaUBywC, {from: accounts[3]});

		await expect(GAZ_ERC20yYYJAoa.transfer.call(addresslE3CC5B, uintvusiE5C, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20eHnGs35 = await GAZ_ERC20.new({from: accounts[4]});
		const address5xOIjk = accounts[1]
		const uintQ4eYiKZ = BigInt("1581")
		const addressupzG9Zz = accounts[5]
		const uintWcdEcoB = BigInt("1738")
		const addressTOIYFN = accounts[3]
		const addressnNNyndc = accounts[4]
		const uintDrLr6Cs = BigInt("853")
		const addressyjXUkS4 = accounts[0]
		const uintHZeP3yd = BigInt("481")
		const addressmXL7WTY = accounts[4]
//		const boolB082qeN = await GAZ_ERC20eHnGs35.approve.call(address5xOIjk, {from: accounts[0]});
//		const boolCs5UVkR = await GAZ_ERC20eHnGs35.transfer.call(addressupzG9Zz, uintQ4eYiKZ, {from: accounts[3]});
//		const boolVEkN53M = await GAZ_ERC20eHnGs35.transferFrom.call(addressnNNyndc, addressTOIYFN, uintWcdEcoB, {from: accounts[1]});
//		const booldhEVxEu = await GAZ_ERC20eHnGs35.transfer.call(addressyjXUkS4, uintDrLr6Cs, {from: accounts[2]});
//		const booliLDnie6 = await GAZ_ERC20eHnGs35.transfer.call(addressmXL7WTY, uintHZeP3yd, {from: accounts[4]});

		await expect(GAZ_ERC20eHnGs35.approve.call(address5xOIjk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20NYwOltH = await GAZ_ERC20.new({from: accounts[1]});
		const uintPdVV99D = BigInt("1836")
		const addressyl0kSts = accounts[3]
		const uintHG74tlk = BigInt("291")
		const addressDYJfyTQ = accounts[3]
		const addressCbJrkH8 = accounts[1]
		const uintgtqW7Ig = BigInt("1215")
		const addressqLuKDfB = accounts[5]
		const addressOBMC8jj = accounts[4]
		const boolyDAdD5 = await GAZ_ERC20NYwOltH.approve.call(addressyl0kSts, uintPdVV99D, {from: accounts[3]});
//		const boolRKFfSxa = await GAZ_ERC20NYwOltH.transferFrom.call(addressCbJrkH8, addressDYJfyTQ, uintHG74tlk, {from: accounts[2]});
//		const boolsGQPu5Y = await GAZ_ERC20NYwOltH.transfer.call(addressqLuKDfB, uintgtqW7Ig, {from: accounts[0]});
//		const boola4d7qd = await GAZ_ERC20NYwOltH.approve.call(addressOBMC8jj, {from: accounts[0]});

		assert.equal(boolyDAdD5, true)
		await expect(GAZ_ERC20NYwOltH.transferFrom.call(addressCbJrkH8, addressDYJfyTQ, uintHG74tlk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20j2gcnNG = await GAZ_ERC20.new({from: accounts[0]});
		const uintO3KzPhq = BigInt("1114")
		const addressnh6ACeo = accounts[4]
		const uintBHsMjp4 = BigInt("30")
		const addressINuHFQg = accounts[0]
		const uintfoI8XgE = BigInt("1613")
		const addressF7Xptlc = accounts[3]
		const booly0e9zNR = await GAZ_ERC20j2gcnNG.transfer.call(addressnh6ACeo, uintO3KzPhq, {from: accounts[0]});
		const booliOAss8 = await GAZ_ERC20j2gcnNG.approve.call(addressINuHFQg, uintBHsMjp4, {from: accounts[2]});
		const boolnqWMXzX = await GAZ_ERC20j2gcnNG.approve.call(addressF7Xptlc, uintfoI8XgE, {from: accounts[2]});

		assert.equal(booliOAss8, true)
		assert.equal(boolnqWMXzX, true)
		assert.equal(booly0e9zNR, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20j2gcnNG = await GAZ_ERC20.new({from: accounts[0]});
		const uint2fqFRw = BigInt("1613")
		const addressP6WAnVx = accounts[4]
		const addressvPM8bkM = accounts[1]
		const boolnqWMXzX = await GAZ_ERC20j2gcnNG.approve.call(addressP6WAnVx, uint2fqFRw, {from: accounts[2]});
//		const boolSqR373 = await GAZ_ERC20j2gcnNG.approve.call(addressvPM8bkM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolnqWMXzX, true)
		await expect(GAZ_ERC20j2gcnNG.approve.call(addressvPM8bkM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20j2gcnNG = await GAZ_ERC20.new({from: accounts[0]});
		const addressIfYeDyz = accounts[0]
		const uintaP0FRak = BigInt("1589")
		const addressx1upHyY = accounts[3]
//		const boolDg3flX = await GAZ_ERC20j2gcnNG.approve.call(addressIfYeDyz, {from: accounts[3]});
//		const boolnqWMXzX = await GAZ_ERC20j2gcnNG.approve.call(addressx1upHyY, uintaP0FRak, {from: accounts[2]});

		await expect(GAZ_ERC20j2gcnNG.approve.call(addressIfYeDyz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20j2gcnNG = await GAZ_ERC20.new({from: accounts[0]});
		const addressdvY5mb = accounts[3]
		const uintYWHHX2M = BigInt("1503")
		const addressvp7WsFq = accounts[5]
		const uintR7QGmf = BigInt("1613")
		const addressbuIJTK0 = accounts[4]
//		const boolseF1ZId = await GAZ_ERC20j2gcnNG.approve.call(addressdvY5mb, {from: accounts[2]});
//		const boolnpDGXyb = await GAZ_ERC20j2gcnNG.transfer.call(addressvp7WsFq, uintYWHHX2M, {from: "0x0000000000000000000000000000000000000001"});
//		const boolnqWMXzX = await GAZ_ERC20j2gcnNG.approve.call(addressbuIJTK0, uintR7QGmf, {from: accounts[2]});

		await expect(GAZ_ERC20j2gcnNG.approve.call(addressdvY5mb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20j2gcnNG = await GAZ_ERC20.new({from: accounts[0]});
		const addresssGu2NL4 = "0x0000000000000000000000000000000000000001"
		const uints1SHBlk = BigInt("1624")
		const addressD9U5biO = accounts[3]
//		const boolccRfLP = await GAZ_ERC20j2gcnNG.approve.call(addresssGu2NL4, {from: accounts[5]});
//		const boolnqWMXzX = await GAZ_ERC20j2gcnNG.approve.call(addressD9U5biO, uints1SHBlk, {from: accounts[2]});

		await expect(GAZ_ERC20j2gcnNG.approve.call(addresssGu2NL4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20LdXONYy = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintldDziy3 = BigInt("41")
		const addressskcOFj = accounts[3]
		const uintZM1y1si = BigInt("1086")
		const address9PqBvr = accounts[3]
		const addressjLdKDtw = accounts[5]
		const uint5gzEOg = BigInt("304")
		const addresshvRe13n = accounts[4]
		const uintSbMulfl = BigInt("1735")
		const addressYgM8A7G = accounts[0]
		const boolXQpCrLt = await GAZ_ERC20LdXONYy.transfer.call(addressskcOFj, uintldDziy3, {from: accounts[2]});
		const boolj4QvkW = await GAZ_ERC20LdXONYy.transferFrom.call(addressjLdKDtw, address9PqBvr, uintZM1y1si, {from: accounts[5]});
		const boolFSwTg0r = await GAZ_ERC20LdXONYy.transfer.call(addresshvRe13n, uint5gzEOg, {from: "0x0000000000000000000000000000000000000001"});
		const boolAOI7EoH = await GAZ_ERC20LdXONYy.transfer.call(addressYgM8A7G, uintSbMulfl, {from: accounts[3]});
	});
})