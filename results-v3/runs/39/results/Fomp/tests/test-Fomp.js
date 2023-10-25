const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressbxeH2rO = "0x0000000000000000000000000000000000000001"
		const FompHWLXEnP = await Fomp.new(addressbxeH2rO, {from: accounts[2]});
		const uintAo9PSro = BigInt("1392")
		const addressOBTLDA0 = accounts[5]
		const addresspKupare = "0x0000000000000000000000000000000000000001"
		const addressesqHZ2O = accounts[4]
		const addressKn7lU7c = accounts[0]
		const byteidRM26U = "0x14131f1f0f1709030805190502091703161b0a1a19020a1d1c16042008150911"
		const byteeUiB7o = "0x1a0f12071509121700041b1f0c131a111b140202170a071b1a07190d13191c03"
		const uintzWGhpa = BigInt("209")
		const uintRMX9wt = BigInt("1470")
		const uints3WLNrL = BigInt("1458")
		const addressgmZtdgh = accounts[0]
		const uintu5Fwk2t = BigInt("1082")
		const addressNg4SOw9 = accounts[4]
		const addresslslSxP8 = accounts[5]
		const addressq2RFM8d = accounts[0]
		const uint96XwIWP0 = await FompHWLXEnP.getPriorVotes.call(addressOBTLDA0, uintAo9PSro, {from: accounts[5]});
		const uintO7pDnMI = await FompHWLXEnP.balanceOf.call(addresspKupare, {from: accounts[4]});
		const uintBLO7X83 = await FompHWLXEnP.allowance.call(addressKn7lU7c, addressesqHZ2O, {from: accounts[2]});
		const addressWA3xyvG = await FompHWLXEnP.delegateBySig.call(addressgmZtdgh, uints3WLNrL, uintRMX9wt, uintzWGhpa, byteeUiB7o, byteidRM26U, {from: accounts[1]});
		const boolJSiFwq4 = await FompHWLXEnP.transferFrom.call(addresslslSxP8, addressNg4SOw9, uintu5Fwk2t, {from: accounts[0]});
		const uint96H2ucGn = await FompHWLXEnP.getCurrentVotes.call(addressq2RFM8d, {from: accounts[3]});

		assert.equal(uint96XwIWP0, BigInt("0"))
		assert.equal(uintBLO7X83, BigInt("0"))
		assert.equal(uintO7pDnMI, BigInt("1000000000000000000000000"))
		await expect(FompHWLXEnP.delegateBySig.call(addressgmZtdgh, uints3WLNrL, uintRMX9wt, uintzWGhpa, byteeUiB7o, byteidRM26U, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressjiiakq0 = accounts[1]
		const FomplSzLDuU = await Fomp.new(addressjiiakq0, {from: "0x0000000000000000000000000000000000000001"});
		const uintPoPkPco = BigInt("1142")
		const addresss1UNI6c = "0x0000000000000000000000000000000000000001"
		const addressHUM3igH = accounts[3]
		const uintazARHT6 = BigInt("39")
		const addressXy0k2R1 = "0x0000000000000000000000000000000000000001"
		const boolic8YmgG = await FomplSzLDuU.approve.call(addresss1UNI6c, uintPoPkPco, {from: accounts[1]});
		const addressjK4RbYz = await FomplSzLDuU.delegate.call(addressHUM3igH, {from: "0x0000000000000000000000000000000000000001"});
		const boolBWywvlI = await FomplSzLDuU.approve.call(addressXy0k2R1, uintazARHT6, {from: accounts[3]});
	});

	it('test for Fomp', async () => {
		const addressFUNuJPw = accounts[2]
		const FompMNsSIgn = await Fomp.new(addressFUNuJPw, {from: accounts[0]});
		const uintgFjEaY = BigInt("1744")
		const addresszE724wF = accounts[4]
		const addressPSwHNtd = accounts[2]
		const uintf9pA8Qd = BigInt("330")
		const addressz75DyFS = accounts[0]
		const addressAdwLk4C = accounts[3]
		const addressx5JZ5xn = accounts[0]
		const booljdzyxs0 = await FompMNsSIgn.transfer.call(addresszE724wF, uintgFjEaY, {from: accounts[1]});
		const addressMT6dged = await FompMNsSIgn.delegate.call(addressPSwHNtd, {from: accounts[0]});
		const boolhrhuOn = await FompMNsSIgn.transferFrom.call(addressAdwLk4C, addressz75DyFS, uintf9pA8Qd, {from: accounts[2]});
		const addressL9rnqVf = await FompMNsSIgn.delegate.call(addressx5JZ5xn, {from: accounts[0]});

		await expect(FompMNsSIgn.transfer.call(addresszE724wF, uintgFjEaY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const address1Qxh6o = accounts[4]
		const FompHIK48n = await Fomp.new(address1Qxh6o, {from: accounts[1]});
		const addresswfEiPxj = accounts[2]
		const uintSDR71K4 = BigInt("1227")
		const addresssl1Qu5h = accounts[4]
		const addressA3uSBvI = accounts[4]
		const uintO5AuiVS = BigInt("882")
		const addressVfgsb9k = "0x0000000000000000000000000000000000000001"
		const addressDUQDUCX = accounts[2]
		const uint962mZIs6 = await FompHIK48n.getCurrentVotes.call(addresswfEiPxj, {from: accounts[3]});
		const boolCUSV7B = await FompHIK48n.transferFrom.call(addressA3uSBvI, addresssl1Qu5h, uintSDR71K4, {from: accounts[2]});
		const boolp3Lm4bp = await FompHIK48n.transfer.call(addressVfgsb9k, uintO5AuiVS, {from: accounts[3]});
		const uintgwrmJcR = await FompHIK48n.balanceOf.call(addressDUQDUCX, {from: accounts[3]});

		assert.equal(uint962mZIs6, BigInt("0"))
		await expect(FompHIK48n.transferFrom.call(addressA3uSBvI, addresssl1Qu5h, uintSDR71K4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressVnXy0Gu = accounts[5]
		const Fomp5ODOCg = await Fomp.new(addressVnXy0Gu, {from: accounts[3]});
		const addressPZvmZj = accounts[2]
		const uintcqhBLN = BigInt("67")
		const addresseLJlyWg = accounts[1]
		const uintyNP3eIl = BigInt("408")
		const addresspFMMP2I = accounts[2]
		const addressJBggvGB = await Fomp5ODOCg.delegate.call(addressPZvmZj, {from: accounts[3]});
		const boolgOtPsyo = await Fomp5ODOCg.approve.call(addresseLJlyWg, uintcqhBLN, {from: "0x0000000000000000000000000000000000000001"});
		const boolqgMklxK = await Fomp5ODOCg.approve.call(addresspFMMP2I, uintyNP3eIl, {from: accounts[4]});

		assert.equal(boolgOtPsyo, true)
		assert.equal(boolqgMklxK, true)
	});

	it('test for Fomp', async () => {
		const addressLeR2P9g = accounts[0]
		const FompKIFCIBp = await Fomp.new(addressLeR2P9g, {from: accounts[0]});
		const bytewszcEhk = "0x121c030e19060b161211081e150c180c07020b030d051c020a1a011c200c171d"
		const bytezNUBjGY = "0x101611061c1f040e01051b171d1205160c1708170a1b080b0c041c0612110918"
		const uintHNLmHam = BigInt("51")
		const uintPOHG9ng = BigInt("1752")
		const uintSmdtnAK = BigInt("22")
		const addressxtf8QW8 = accounts[4]
		const addressOVI4yPI = accounts[1]
		const addresslHfjEFi = await FompKIFCIBp.delegateBySig.call(addressxtf8QW8, uintSmdtnAK, uintPOHG9ng, uintHNLmHam, bytezNUBjGY, bytewszcEhk, {from: accounts[2]});
		const addressasrr9RF = await FompKIFCIBp.delegate.call(addressOVI4yPI, {from: accounts[0]});

		await expect(FompKIFCIBp.delegateBySig.call(addressxtf8QW8, uintSmdtnAK, uintPOHG9ng, uintHNLmHam, bytezNUBjGY, bytewszcEhk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresszTZpbB = "0x0000000000000000000000000000000000000001"
		const FompHWLXEnP = await Fomp.new(addresszTZpbB, {from: accounts[2]});
		const addressvmkBmF = accounts[1]
		const uintP0IDJrz = BigInt("1008")
		const addressopwY8Nt = accounts[5]
		const uintaMPaY0s = BigInt("1392")
		const addressERR7kiF = accounts[5]
		const addressrIxUv1 = "0x0000000000000000000000000000000000000001"
		const byteh9LQHw = "0x14131f1f0f1709030805190502091703161b0a1a19020a1d1c16042008150911"
		const byte1e44GU = "0x1a0f12071509121700041b1f0c131a111b140202170a071b1a07190d13191c03"
		const uintPzluiGS = BigInt("217")
		const uintDCVy4gj = BigInt("1470")
		const uintGU78XaA = BigInt("1458")
		const addressFyWI4Aj = accounts[0]
		const uintn420NOx = BigInt("1082")
		const addressFjxOHZV = accounts[4]
		const addressdaiIkcI = accounts[5]
		const addressmtb6ZW2 = accounts[0]
		const uintIk7ywWA = await FompHWLXEnP.balanceOf.call(addressvmkBmF, {from: accounts[4]});
		const boolaCuIof2 = await FompHWLXEnP.transfer.call(addressopwY8Nt, uintP0IDJrz, {from: accounts[3]});
		const uint96XwIWP0 = await FompHWLXEnP.getPriorVotes.call(addressERR7kiF, uintaMPaY0s, {from: accounts[5]});
		const uintO7pDnMI = await FompHWLXEnP.balanceOf.call(addressrIxUv1, {from: accounts[4]});
		const addressWA3xyvG = await FompHWLXEnP.delegateBySig.call(addressFyWI4Aj, uintGU78XaA, uintDCVy4gj, uintPzluiGS, byte1e44GU, byteh9LQHw, {from: accounts[1]});
		const boolJSiFwq4 = await FompHWLXEnP.transferFrom.call(addressdaiIkcI, addressFjxOHZV, uintn420NOx, {from: accounts[0]});
		const uint96H2ucGn = await FompHWLXEnP.getCurrentVotes.call(addressmtb6ZW2, {from: accounts[3]});

		assert.equal(uintIk7ywWA, BigInt("0"))
		await expect(FompHWLXEnP.transfer.call(addressopwY8Nt, uintP0IDJrz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressVLNPvRh = "0x0000000000000000000000000000000000000001"
		const FompHWLXEnP = await Fomp.new(addressVLNPvRh, {from: accounts[2]});
		const addressknB9vQV = accounts[1]
		const uintJW20TGa = BigInt("1392")
		const addressWUCN17C = accounts[5]
		const addressO6hJgod = "0x0000000000000000000000000000000000000001"
		const addresssgo4Ww = accounts[5]
		const addressljGgDCf = accounts[1]
		const addressCvzNA1t = accounts[0]
		const byter5oDJ6X = "0x14131f1f0f1709030805190502091703161b0a1a19020a1d1c16042008150911"
		const bytepqNOG3o = "0x1a0f12071509121700041b1f0c131a111b140202170a071b1a07190d13191c03"
		const uintGRXZynd = BigInt("209")
		const uintO0fCKyu = BigInt("1470")
		const uintvLPDjd = BigInt("1458")
		const addressq56tCFk = "0x0000000000000000000000000000000000000001"
		const uintd2kBI8 = BigInt("1082")
		const addresssITTsK6 = accounts[4]
		const addressG5LYeua = accounts[5]
		const addressPxv7QrT = accounts[0]
		const addressmtipN6h = await FompHWLXEnP.delegate.call(addressknB9vQV, {from: "0x0000000000000000000000000000000000000001"});
		const uint96XwIWP0 = await FompHWLXEnP.getPriorVotes.call(addressWUCN17C, uintJW20TGa, {from: accounts[5]});
		const uintO7pDnMI = await FompHWLXEnP.balanceOf.call(addressO6hJgod, {from: accounts[4]});
		const uintBLO7X83 = await FompHWLXEnP.allowance.call(addressljGgDCf, addresssgo4Ww, {from: accounts[2]});
		const uint96cOzVD5x = await FompHWLXEnP.getCurrentVotes.call(addressCvzNA1t, {from: accounts[1]});
		const addressWA3xyvG = await FompHWLXEnP.delegateBySig.call(addressq56tCFk, uintvLPDjd, uintO0fCKyu, uintGRXZynd, bytepqNOG3o, byter5oDJ6X, {from: accounts[1]});
		const boolJSiFwq4 = await FompHWLXEnP.transferFrom.call(addressG5LYeua, addresssITTsK6, uintd2kBI8, {from: accounts[0]});
		const uint96H2ucGn = await FompHWLXEnP.getCurrentVotes.call(addressPxv7QrT, {from: accounts[3]});

		assert.equal(uint96XwIWP0, BigInt("0"))
		assert.equal(uint96cOzVD5x, BigInt("0"))
		assert.equal(uintBLO7X83, BigInt("0"))
		assert.equal(uintO7pDnMI, BigInt("1000000000000000000000000"))
		await expect(FompHWLXEnP.delegateBySig.call(addressq56tCFk, uintvLPDjd, uintO0fCKyu, uintGRXZynd, bytepqNOG3o, byter5oDJ6X, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressU6V0kYv = "0x0000000000000000000000000000000000000001"
		const FompHWLXEnP = await Fomp.new(addressU6V0kYv, {from: accounts[2]});
		const uintbpAwPNY = BigInt("1815")
		const addressrRA6Arl = accounts[0]
		const addressboQxN8 = "0x0000000000000000000000000000000000000001"
		const addressMAnD2Bb = accounts[4]
		const addressYv4wxEi = accounts[1]
		const byteEhiP0MA = "0x14131f1f0f1709030805190502091703161b0a1a19020a1d1c16042008150911"
		const byteCPTtlW = "0x1a0f12071509121700041b1f0c131a111b140202170a071b1a07190d13191c03"
		const uintZz55SLH = BigInt("209")
		const uintcKm77uI = BigInt("1470")
		const uinteiuK0vQ = BigInt("1458")
		const address0ZXHiX = accounts[0]
		const uintemKcfET = BigInt("1082")
		const addressP1G5CtZ = accounts[4]
		const addressBDwltW4 = accounts[5]
		const addressUkf3k6H = accounts[2]
		const addressBaxL3g = accounts[0]
		const boolWKyIaHb = await FompHWLXEnP.transfer.call(addressrRA6Arl, uintbpAwPNY, {from: "0x0000000000000000000000000000000000000001"});
		const uintO7pDnMI = await FompHWLXEnP.balanceOf.call(addressboQxN8, {from: accounts[4]});
		const uintBLO7X83 = await FompHWLXEnP.allowance.call(addressYv4wxEi, addressMAnD2Bb, {from: accounts[2]});
		const addressWA3xyvG = await FompHWLXEnP.delegateBySig.call(address0ZXHiX, uinteiuK0vQ, uintcKm77uI, uintZz55SLH, byteCPTtlW, byteEhiP0MA, {from: accounts[1]});
		const boolJSiFwq4 = await FompHWLXEnP.transferFrom.call(addressBDwltW4, addressP1G5CtZ, uintemKcfET, {from: accounts[0]});
		const uintCxrSi0i = await FompHWLXEnP.balanceOf.call(addressUkf3k6H, {from: accounts[5]});
		const uint96H2ucGn = await FompHWLXEnP.getCurrentVotes.call(addressBaxL3g, {from: accounts[3]});

		assert.equal(boolWKyIaHb, true)
		assert.equal(uintBLO7X83, BigInt("0"))
		assert.equal(uintO7pDnMI, BigInt("1000000000000000000000000"))
		await expect(FompHWLXEnP.delegateBySig.call(address0ZXHiX, uinteiuK0vQ, uintcKm77uI, uintZz55SLH, byteCPTtlW, byteEhiP0MA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressqdsT3Qy = accounts[5]
		const Fomp5ODOCg = await Fomp.new(addressqdsT3Qy, {from: accounts[3]});
		const uintARh2809 = BigInt("361")
		const addressQJlhIjd = accounts[1]
		const addressSgkDXCF = accounts[0]
		const uintnBkfoDB = BigInt("18")
		const addresszsWggB = accounts[3]
		const byteANmrKLg = "0x0a201905040d0f15031d041a10171c1b090217050311120b0b0b061a06011e05"
		const bytei4iG7k = "0x0a07110205121f1d10061e160e1a1f00110905200418161e13040e0e0201071b"
		const uintEh3cCtC = BigInt("30")
		const uint861w8S = BigInt("1664")
		const uintA49Kd7G = BigInt("1525")
		const addressr26wKFs = accounts[3]
		const addressrqoMDX = accounts[0]
		const byteziF7NWp = "0x161a01191a140d1b0105070b1501030a05190e1704061c111a0c141512150f1c"
		const byteCXdNJsV = "0x0e1317150c020d09101906080219011f1c0e0109120b0b0a05131614141b0602"
		const uintdgmOFN = BigInt("185")
		const uint5QbZdw = BigInt("1462")
		const uintsP1flUp = BigInt("1365")
		const addresspqHEZY5 = accounts[1]
		const uint96szJc4Wm = await Fomp5ODOCg.getPriorVotes.call(addressQJlhIjd, uintARh2809, {from: accounts[3]});
		const uintYEja0F5 = await Fomp5ODOCg.balanceOf.call(addressSgkDXCF, {from: accounts[2]});
		const boolgOtPsyo = await Fomp5ODOCg.approve.call(addresszsWggB, uintnBkfoDB, {from: "0x0000000000000000000000000000000000000001"});
		const addressXu35aNe = await Fomp5ODOCg.delegateBySig.call(addressr26wKFs, uintA49Kd7G, uint861w8S, uintEh3cCtC, bytei4iG7k, byteANmrKLg, {from: accounts[2]});
		const uint96fMQdfB = await Fomp5ODOCg.getCurrentVotes.call(addressrqoMDX, {from: accounts[0]});
		const addresskwVmBzE = await Fomp5ODOCg.delegateBySig.call(addresspqHEZY5, uintsP1flUp, uint5QbZdw, uintdgmOFN, byteCXdNJsV, byteziF7NWp, {from: accounts[3]});

		assert.equal(boolgOtPsyo, true)
		assert.equal(uint96szJc4Wm, BigInt("0"))
		assert.equal(uintYEja0F5, BigInt("0"))
		await expect(Fomp5ODOCg.delegateBySig.call(addressr26wKFs, uintA49Kd7G, uint861w8S, uintEh3cCtC, bytei4iG7k, byteANmrKLg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})