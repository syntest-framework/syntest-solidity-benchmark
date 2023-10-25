const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressW9AT03G = accounts[2]
		const FompEqqoB4p = await Fomp.new(addressW9AT03G, {from: accounts[2]});
		const addressWxhmpzS = accounts[0]
		const uintwA7rvDW = BigInt("1863")
		const addressVSrznnY = accounts[1]
		const addressToQsEsT = await FompEqqoB4p.delegate.call(addressWxhmpzS, {from: accounts[3]});
		const boolxcjr95L = await FompEqqoB4p.transfer.call(addressVSrznnY, uintwA7rvDW, {from: accounts[2]});

		assert.equal(boolxcjr95L, true)
	});

	it('test for Fomp', async () => {
		const addressJ7hMISZ = accounts[3]
		const FompoXKRwI6 = await Fomp.new(addressJ7hMISZ, {from: accounts[2]});
		const addressZOXNDFb = accounts[0]
		const addressPxEdH3 = accounts[2]
		const uint2rGLcJ = BigInt("90")
		const addressg7X7pu0 = accounts[2]
		const uintYzwJoUT = BigInt("1852")
		const addressZ20gew7 = accounts[2]
		const uintovXTWw = await FompoXKRwI6.balanceOf.call(addressZOXNDFb, {from: accounts[4]});
		const addressRpDl69k = await FompoXKRwI6.delegate.call(addressPxEdH3, {from: accounts[0]});
//		const boolzUi6LNt = await FompoXKRwI6.transfer.call(addressg7X7pu0, uint2rGLcJ, {from: accounts[5]});
//		const booliUM2R9K = await FompoXKRwI6.approve.call(addressZ20gew7, uintYzwJoUT, {from: accounts[3]});

		assert.equal(uintovXTWw, BigInt("0"))
		await expect(FompoXKRwI6.transfer.call(addressg7X7pu0, uint2rGLcJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressjSjaEt0 = accounts[3]
		const FompWd2VNGh = await Fomp.new(addressjSjaEt0, {from: accounts[3]});
		const bytexzqlTvV = "0x140d1d1f1b191d1310060204010204001b160b0d090c00081e19110e061c0407"
		const byte05yHmd = "0x10080f161e120d050e071210130505010a0d10160a1d07111c0e13020c0a0a1e"
		const uintdcj0RL7 = BigInt("103")
		const uintW9Lzifc = BigInt("367")
		const uintnzFyzsQ = BigInt("1996")
		const addressXBXTgSw = accounts[5]
		const uintMI5Saya = BigInt("1728")
		const addressIQ8vHW = accounts[4]
		const addressf4BUJp = accounts[1]
//		const addresswCP3zwt = await FompWd2VNGh.delegateBySig.call(addressXBXTgSw, uintnzFyzsQ, uintW9Lzifc, uintdcj0RL7, byte05yHmd, bytexzqlTvV, {from: accounts[1]});
//		const boolO743X7B = await FompWd2VNGh.approve.call(addressIQ8vHW, uintMI5Saya, {from: accounts[1]});
//		const uint96Ic0ezd = await FompWd2VNGh.getCurrentVotes.call(addressf4BUJp, {from: accounts[3]});

		await expect(FompWd2VNGh.delegateBySig.call(addressXBXTgSw, uintnzFyzsQ, uintW9Lzifc, uintdcj0RL7, byte05yHmd, bytexzqlTvV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressqCG9gD6 = accounts[0]
		const FompA30Dala = await Fomp.new(addressqCG9gD6, {from: accounts[2]});
		const addressRtFF7VK = accounts[2]
		const addressScodP5c = accounts[2]
		const addressjodJRBJ = accounts[2]
		const uintB5HlfOO = BigInt("0")
		const addresswRNqd10 = accounts[2]
		const bytediCIJna = "0x0b140d050f040708191a160c16010907191512091e080c0b0b05181f121a0f1d"
		const bytepZMSCOD = "0x090e0d1003150716111e0b130f180d201f1c0d181d0711001a1608040f0d071d"
		const uintEqUXxDU = BigInt("113")
		const uintwcOyBfx = BigInt("892")
		const uinttjqwUYc = BigInt("1970")
		const addressfrOtCEm = accounts[2]
		const uinteW1lnb = BigInt("466")
		const addressN7Vjtz = accounts[1]
		const bytekK3hGqo = "0x131d191817100f01190502171801081f170b141e0e081a1b070c06141f020e12"
		const bytetgv5HWf = "0x1008061f1006090e141601061f0c0503130e111c1f16150914160f131e200707"
		const uintbboBqKV = BigInt("221")
		const uintCPokaZ = BigInt("773")
		const uintg3IppgE = BigInt("1189")
		const addressvZYHhQr = accounts[3]
		const uintAAQ1qV = await FompA30Dala.balanceOf.call(addressRtFF7VK, {from: accounts[2]});
		const uintDn8mzK = await FompA30Dala.allowance.call(addressjodJRBJ, addressScodP5c, {from: accounts[2]});
		const boolevxaq9X = await FompA30Dala.transfer.call(addresswRNqd10, uintB5HlfOO, {from: accounts[4]});
//		const addressku0Tl25 = await FompA30Dala.delegateBySig.call(addressfrOtCEm, uinttjqwUYc, uintwcOyBfx, uintEqUXxDU, bytepZMSCOD, bytediCIJna, {from: accounts[0]});
//		const boolXpzxkg = await FompA30Dala.approve.call(addressN7Vjtz, uinteW1lnb, {from: accounts[0]});
//		const addressHBVRt2l = await FompA30Dala.delegateBySig.call(addressvZYHhQr, uintg3IppgE, uintCPokaZ, uintbboBqKV, bytetgv5HWf, bytekK3hGqo, {from: accounts[4]});

		assert.equal(boolevxaq9X, true)
		assert.equal(uintAAQ1qV, BigInt("0"))
		assert.equal(uintDn8mzK, BigInt("0"))
		await expect(FompA30Dala.delegateBySig.call(addressfrOtCEm, uinttjqwUYc, uintwcOyBfx, uintEqUXxDU, bytepZMSCOD, bytediCIJna, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressM06Doik = accounts[1]
		const FompQbxCtb9 = await Fomp.new(addressM06Doik, {from: accounts[2]});
		const uintNHjNOxf = BigInt("1090")
		const addressdPtljsV = accounts[2]
		const addressAS71Ox5 = accounts[2]
		const uintRUe69gu = BigInt("1932")
		const addresspzIwVZA = accounts[1]
//		const bool7bjL6X = await FompQbxCtb9.transferFrom.call(addressAS71Ox5, addressdPtljsV, uintNHjNOxf, {from: accounts[0]});
//		const uint96zX0htaT = await FompQbxCtb9.getPriorVotes.call(addresspzIwVZA, uintRUe69gu, {from: accounts[0]});

		await expect(FompQbxCtb9.transferFrom.call(addressAS71Ox5, addressdPtljsV, uintNHjNOxf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressOWLAc6 = accounts[1]
		const Fompz5AkTBx = await Fomp.new(addressOWLAc6, {from: accounts[4]});
		const addressS5Endex = accounts[1]
		const addressnPFyYum = accounts[1]
		const uintKDolUdr = BigInt("1230")
		const addressxOngYRe = accounts[1]
		const addressAPjg2oP = accounts[0]
		const addressC2tLEyA = accounts[5]
		const uintWNMhsw = await Fompz5AkTBx.balanceOf.call(addressS5Endex, {from: accounts[2]});
		const uint96gw5E5E1 = await Fompz5AkTBx.getCurrentVotes.call(addressnPFyYum, {from: accounts[4]});
		const booldWmV9Ni = await Fompz5AkTBx.approve.call(addressxOngYRe, uintKDolUdr, {from: accounts[3]});
		const uintXtD6faS = await Fompz5AkTBx.allowance.call(addressC2tLEyA, addressAPjg2oP, {from: accounts[0]});

		assert.equal(booldWmV9Ni, true)
		assert.equal(uint96gw5E5E1, BigInt("0"))
		assert.equal(uintWNMhsw, BigInt("1000000000000000000000000"))
		assert.equal(uintXtD6faS, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressqy5bEhS = accounts[1]
		const Fompz5AkTBx = await Fomp.new(addressqy5bEhS, {from: accounts[4]});
		const addressFhFphyz = accounts[1]
		const addressw8cUlsp = accounts[2]
		const uintkifvx1x = BigInt("1230")
		const addressLG7EkcN = accounts[1]
		const addressvI2NCA8 = "0x0000000000000000000000000000000000000001"
		const addressiCOWwGa = accounts[0]
		const addresssjIU4y = accounts[1]
		const uintKa05azO = BigInt("456")
		const addressB70rSTU = accounts[3]
		const uintWNMhsw = await Fompz5AkTBx.balanceOf.call(addressFhFphyz, {from: accounts[2]});
		const uint96gw5E5E1 = await Fompz5AkTBx.getCurrentVotes.call(addressw8cUlsp, {from: accounts[4]});
		const booldWmV9Ni = await Fompz5AkTBx.approve.call(addressLG7EkcN, uintkifvx1x, {from: accounts[3]});
		const addresscMD3by0 = await Fompz5AkTBx.delegate.call(addressvI2NCA8, {from: accounts[3]});
		const uintXtD6faS = await Fompz5AkTBx.allowance.call(addresssjIU4y, addressiCOWwGa, {from: accounts[0]});
		const uint96gqheLv8 = await Fompz5AkTBx.getPriorVotes.call(addressB70rSTU, uintKa05azO, {from: accounts[2]});

		assert.equal(booldWmV9Ni, true)
		assert.equal(uint96gqheLv8, BigInt("0"))
		assert.equal(uint96gw5E5E1, BigInt("0"))
		assert.equal(uintWNMhsw, BigInt("1000000000000000000000000"))
		assert.equal(uintXtD6faS, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresszSd93bY = accounts[1]
		const Fompz5AkTBx = await Fomp.new(addresszSd93bY, {from: accounts[4]});
		const addressyqBTuey = accounts[1]
		const addressopYd1Gm = accounts[1]
		const uintBIRg8Ju = BigInt("35")
		const addressrgEDM8r = accounts[1]
		const uint96gw5E5E1 = await Fompz5AkTBx.getCurrentVotes.call(addressyqBTuey, {from: accounts[4]});
		const addressKrpVxe3 = await Fompz5AkTBx.delegate.call(addressopYd1Gm, {from: accounts[1]});
		const boolyqbkHns = await Fompz5AkTBx.approve.call(addressrgEDM8r, uintBIRg8Ju, {from: accounts[3]});

		assert.equal(boolyqbkHns, true)
		assert.equal(uint96gw5E5E1, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressbQKM7Ev = accounts[1]
		const FompQbxCtb9 = await Fomp.new(addressbQKM7Ev, {from: accounts[2]});
		const uintDhucTJz = BigInt("19")
		const addressVcAwkWu = accounts[1]
		const uintdoBj6zR = BigInt("439")
		const addresseKWIL5p = accounts[3]
		const uintdWfvKf8 = BigInt("1090")
		const addresssuHR3li = accounts[3]
		const addressuaMsE7N = accounts[2]
		const uint96Z7knWQZ = await FompQbxCtb9.getPriorVotes.call(addressVcAwkWu, uintDhucTJz, {from: accounts[1]});
		const boolWNzznsq = await FompQbxCtb9.approve.call(addresseKWIL5p, uintdoBj6zR, {from: accounts[1]});
//		const bool7bjL6X = await FompQbxCtb9.transferFrom.call(addressuaMsE7N, addresssuHR3li, uintdWfvKf8, {from: accounts[0]});

		assert.equal(boolWNzznsq, true)
		assert.equal(uint96Z7knWQZ, BigInt("0"))
		await expect(FompQbxCtb9.transferFrom.call(addressuaMsE7N, addresssuHR3li, uintdWfvKf8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressSPtprY9 = accounts[0]
		const FompJVTYZFI = await Fomp.new(addressSPtprY9, {from: "0x0000000000000000000000000000000000000001"});
		const byteSnMx0Sg = "0x03171e0b1e150b0d1211190f151f18081e070209101f1602181c1b05011a150d"
		const byte3wB2aa = "0x0e14010e0e0d0a170b031c1e100b141c1f04181106101706100e041d17030119"
		const uintLBekFGD = BigInt("97")
		const uintwfxGWQf = BigInt("2044")
		const uintGcYKBa4 = BigInt("1814")
		const addresskWwFKK3 = accounts[5]
		const addressooVL8Ce = accounts[3]
		const bytepAk9C0g = "0x0320081e1a0e10160f1115071206181b001207050c0f061c0a0d18111c181314"
		const byteM9FMZOU = "0x0e01171d1013061d11160f0c0b160107191501130c051c18120a160e1c1b1e1d"
		const uintPT8U5cu = BigInt("175")
		const uintjPwDLcF = BigInt("564")
		const uintHXE20Cp = BigInt("1290")
		const addressT0DmSXh = accounts[3]
		const addressdL5HAbi = await FompJVTYZFI.delegateBySig.call(addresskWwFKK3, uintGcYKBa4, uintwfxGWQf, uintLBekFGD, byte3wB2aa, byteSnMx0Sg, {from: accounts[0]});
		const uint96zATW7wK = await FompJVTYZFI.getCurrentVotes.call(addressooVL8Ce, {from: accounts[0]});
		const addressGYqQte = await FompJVTYZFI.delegateBySig.call(addressT0DmSXh, uintHXE20Cp, uintjPwDLcF, uintPT8U5cu, byteM9FMZOU, bytepAk9C0g, {from: accounts[4]});
	});

	it('test for Fomp', async () => {
		const addresshL4NxsG = accounts[1]
		const Fompz5AkTBx = await Fomp.new(addresshL4NxsG, {from: accounts[4]});
		const addressxHNbjuo = accounts[2]
		const addressQHLmLoV = accounts[2]
		const addressjspXzhO = accounts[5]
		const byteCcPtCRD = "0x0d11061f1b0b0d090210120c180e0e111a18100c171f09011d0e1d100f1a1307"
		const byteG6ZCX8A = "0x031b0710041d1e1b18000f0909102019030a02120b10010b121d1420080c1b09"
		const uintbVlVxZt = BigInt("27")
		const uintUaGPmzN = BigInt("309")
		const uintG8GmYk7 = BigInt("123")
		const addressT0rhJeh = accounts[3]
		const addressKrpVxe3 = await Fompz5AkTBx.delegate.call(addressxHNbjuo, {from: accounts[1]});
		const uint96uiBL0L8 = await Fompz5AkTBx.getCurrentVotes.call(addressQHLmLoV, {from: accounts[4]});
		const addresstVVuXQ5 = await Fompz5AkTBx.delegate.call(addressjspXzhO, {from: accounts[2]});
//		const addressO5sLWBD = await Fompz5AkTBx.delegateBySig.call(addressT0rhJeh, uintG8GmYk7, uintUaGPmzN, uintbVlVxZt, byteG6ZCX8A, byteCcPtCRD, {from: accounts[0]});

		assert.equal(uint96uiBL0L8, BigInt("0"))
		await expect(Fompz5AkTBx.delegateBySig.call(addressT0rhJeh, uintG8GmYk7, uintUaGPmzN, uintbVlVxZt, byteG6ZCX8A, byteCcPtCRD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})