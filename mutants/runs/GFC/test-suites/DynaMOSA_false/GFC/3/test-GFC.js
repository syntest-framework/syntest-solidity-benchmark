const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintMk8oLNL = BigInt("1872")
		const stringzsGgkRz = "YDrhHvGJGlbhPXe7HRMZC5N8P4KSNvnuJAAPMinRfz3LWgOJmvgAtHjBcFgDnANCT0pE"
		const stringruej6jY = "7nEaAwcFEKPrD2YqFNx9pbMYJVOWtTt9jAACibpTw9QBlCvwyalWEW73TEEMK2vJbDm5ja4rz8xNaAA0W2kp2SYBnQ9L"
		const GFC9d3heo = await GFC.new(uintMk8oLNL, stringzsGgkRz, stringruej6jY, {from: "0x0000000000000000000000000000000000000001"});
		const byteYQC9Vus = "0x021a15061d031119071014081b1c070d02030e030311"
		const uintDNTmtzA = BigInt("1595")
		const addressnzvBFqg = accounts[2]
		const bytevNHNqY = "0x0b0d10141b0e0c1c13171b02"
		const uintVLzn17 = BigInt("527")
		const addressh3HQziD = accounts[1]
		const uintP8h2ztz = BigInt("1761")
		const addresslM8pY6 = accounts[2]
		const boolI9OeiZY = await GFC9d3heo.approveAndCall.call(addressnzvBFqg, uintDNTmtzA, byteYQC9Vus, {from: accounts[1]});
		const boolndGc1D = await GFC9d3heo.approveAndCall.call(addressh3HQziD, uintVLzn17, bytevNHNqY, {from: accounts[0]});
		const bool96m2Se = await GFC9d3heo.burnFrom.call(addresslM8pY6, uintP8h2ztz, {from: accounts[0]});
	});

	it('test for GFC', async () => {
		const uinti0WgtY6 = BigInt("493")
		const stringGfvpBdu = "pLCeI1otQ9R6jcMb8Mc5Zpiu"
		const stringuEaFDpY = "po3N3dnrllEYryRI7QcbxAwx1aps4lQGXk3F7qSPyd5kNRLAEvz"
		const GFCOGPv2hf = await GFC.new(uinti0WgtY6, stringGfvpBdu, stringuEaFDpY, {from: accounts[4]});
		const bytePfMQl0H = "0x20140e10011d101416120714120319020908080f101b"
		const uintcvcfnLx = BigInt("496")
		const addressazpmTp7 = accounts[2]
		const uintlTZvXX = BigInt("117")
		const addressuREmmvj = accounts[3]
		const byteN7L9ie = "0x1c0c2018140e0e200b130a1817"
		const uintpng0W1Q = BigInt("530")
		const addresst0dO7N0 = accounts[2]
		const uintWJVFV3c = BigInt("1206")
		const addressbRXeCWH = accounts[3]
		const byteT2cIiaQ = "0x02041b"
		const uinttvcxXBQ = BigInt("184")
		const addressuHP8Zpi = accounts[5]
		const boolYPlnHQ = await GFCOGPv2hf.approveAndCall.call(addressazpmTp7, uintcvcfnLx, bytePfMQl0H, {from: accounts[3]});
		const boolRyvvtXr = await GFCOGPv2hf.approve.call(addressuREmmvj, uintlTZvXX, {from: accounts[5]});
		const boolOCD9L3q = await GFCOGPv2hf.approveAndCall.call(addresst0dO7N0, uintpng0W1Q, byteN7L9ie, {from: accounts[0]});
		const boolEjaCpar = await GFCOGPv2hf.approve.call(addressbRXeCWH, uintWJVFV3c, {from: accounts[2]});
		const boolcgoL8C = await GFCOGPv2hf.approveAndCall.call(addressuHP8Zpi, uinttvcxXBQ, byteT2cIiaQ, {from: accounts[2]});

		await expect(GFCOGPv2hf.approveAndCall.call(addressazpmTp7, uintcvcfnLx, bytePfMQl0H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintuZhewO = BigInt("1600")
		const stringoQpJBV1 = "5"
		const stringETNz5AV = "sURH899wcep47"
		const GFCTFRWDEv = await GFC.new(uintuZhewO, stringoQpJBV1, stringETNz5AV, {from: accounts[5]});
		const uintHAPSGmr = BigInt("1216")
		const uintG0Yysnl = BigInt("583")
		const addressU810kGv = accounts[4]
		const uintsbdkgjK = BigInt("545")
		const addresspcWHAoq = accounts[4]
		const uintQQ9uym1 = BigInt("1455")
		const addresscTf7TDr = accounts[5]
		const booldU2IBHa = await GFCTFRWDEv.burn.call(uintHAPSGmr, {from: accounts[0]});
		const boolhPBfGJY = await GFCTFRWDEv.burnFrom.call(addressU810kGv, uintG0Yysnl, {from: accounts[0]});
		const boolWBnjkM = await GFCTFRWDEv.burnFrom.call(addresspcWHAoq, uintsbdkgjK, {from: "0x0000000000000000000000000000000000000001"});
		const boolwRnflg7 = await GFCTFRWDEv.approve.call(addresscTf7TDr, uintQQ9uym1, {from: accounts[2]});

		await expect(GFCTFRWDEv.burn.call(uintHAPSGmr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintegg5XK6 = BigInt("740")
		const stringiH3ANLd = "N5v6nHNKR5KKlSxfARcaS2UxQdVZk3Q41CsTP8X08Auu8SgPxcp0HCjv2lryT25k6EKfAOYnhHr4mf1naVImlHgZDUu"
		const stringVUSOQvk = "cxqMM4O7qJAtnxcarnqhj8XH"
		const GFCmdHkutH = await GFC.new(uintegg5XK6, stringiH3ANLd, stringVUSOQvk, {from: accounts[1]});
		const uintdwi6LCN = BigInt("1353")
		const addressklOKNRI = accounts[2]
		const uintxNtVoZO = BigInt("431")
		const addressPK87boC = accounts[0]
		const addressia9G7Zz = accounts[1]
		const uintWpibKEt = BigInt("490")
		const addressRCsAA4g = accounts[4]
		const uintFgTTEjf = BigInt("1462")
		const address8vnn0u = accounts[1]
		const addressOu4lnYC = accounts[1]
		const boolKDMGyOF = await GFCmdHkutH.transfer.call(addressklOKNRI, uintdwi6LCN, {from: accounts[1]});
		const boolgbEyyRO = await GFCmdHkutH.transferFrom.call(addressia9G7Zz, addressPK87boC, uintxNtVoZO, {from: accounts[1]});
		const boolerdwaW3 = await GFCmdHkutH.burnFrom.call(addressRCsAA4g, uintWpibKEt, {from: accounts[3]});
		const boolrnGwVjt = await GFCmdHkutH.transferFrom.call(addressOu4lnYC, address8vnn0u, uintFgTTEjf, {from: accounts[4]});

		assert.equal(boolKDMGyOF, true)
		await expect(GFCmdHkutH.transferFrom.call(addressia9G7Zz, addressPK87boC, uintxNtVoZO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintPLgWadz = BigInt("603")
		const stringpvLCj4T = "UIojHpZaxHwdSqJjhtudpGeEFeGtiLR6PqpfJl55Jh7oQ1GfkjCZsL0AqN440lbzaJxqd7RnE7MI"
		const stringj84ZLzi = "cM1cCHZsyBcR9ibNXxko4MtJVmSy4fTFkItYXandy1dqWqoLUJ4"
		const GFCGuUQdt6 = await GFC.new(uintPLgWadz, stringpvLCj4T, stringj84ZLzi, {from: accounts[0]});
		const uintm2a4Msw = BigInt("799")
		const addressL9uqz1c = accounts[3]
		const uintX7ZX3EV = BigInt("1442")
		const addressRVy3dv1 = accounts[4]
		const uintYianPmA = BigInt("787")
		const addressMiTf63 = "0x0000000000000000000000000000000000000001"
		const booldejWAdL = await GFCGuUQdt6.approve.call(addressL9uqz1c, uintm2a4Msw, {from: accounts[4]});
		const boolZPEsxXd = await GFCGuUQdt6.approve.call(addressRVy3dv1, uintX7ZX3EV, {from: accounts[3]});
		const boolmhkFGYO = await GFCGuUQdt6.burnFrom.call(addressMiTf63, uintYianPmA, {from: accounts[5]});

		assert.equal(boolZPEsxXd, true)
		assert.equal(booldejWAdL, true)
		await expect(GFCGuUQdt6.burnFrom.call(addressMiTf63, uintYianPmA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})