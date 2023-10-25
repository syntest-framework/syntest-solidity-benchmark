const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const XenoFelixV3R6MNP = await XenoFelix.new({from: accounts[1]});
		const uintAme54jB = BigInt("1657")
		const uintyArEncF = BigInt("617")
		const uinty9CalJO = BigInt("629")
		const addressmHk1g67 = accounts[3]
		const uint256D6OIPZ9 = await XenoFelixV3R6MNP.burn.call(uintAme54jB, {from: accounts[2]});
		const boolF7MA2Nt = await XenoFelixV3R6MNP.lock.call(addressmHk1g67, uinty9CalJO, uintyArEncF, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uinth2I0K1a = BigInt("1444")
		const uintPkfQasU = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uinth2I0K1a, uintPkfQasU, {from: accounts[3]});
		const uintWVYcXlM = BigInt("73")
		const addressUFRr6Kf = accounts[4]
		const uint256MBLgEBc = await XenoFelixqGxsFx1.totalSupply.call({from: accounts[5]});
		const booldi5CgHx = await XenoFelixqGxsFx1.transfer.call(addressUFRr6Kf, uintWVYcXlM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256MBLgEBc, BigInt("99214716400915458592157463698086408188874646178672591452157257988588374589440"))
		await expect(XenoFelixqGxsFx1.transfer.call(addressUFRr6Kf, uintWVYcXlM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringwBQD6X5 = "7tMDs2s3cKysejSIzrjNPi5STTuG8ICdjXm2oIRh4s5Pd4VaQ4lkWP1lkG8lvl3CoA6NnQsMxgx"
		const stringvNkoEVN = "skrcBfqvG2liNSIBECyBBFmQt"
		const uintW500FeJ = BigInt("60")
		const XenoFelixfEDyL2p = await XenoFelix.new(stringwBQD6X5, stringvNkoEVN, uintW500FeJ, {from: accounts[4]});
		const addressKnTLQqa = accounts[4]
		const addressrmr2W1f = accounts[0]
		const addressDf7qoFg = accounts[2]
		const addressfOBJx34 = "0x0000000000000000000000000000000000000001"
		const addressywat9AR = accounts[4]
		const addressmnY12F = accounts[3]
		const boolGLNLf8D = await XenoFelixfEDyL2p.isOwner.call(addressKnTLQqa, {from: accounts[5]});
		const uint256gcl6YJQ = await XenoFelixfEDyL2p.balanceOf.call(addressrmr2W1f, {from: accounts[5]});
		const boolBzyklB7 = await XenoFelixfEDyL2p.isOwner.call(addressDf7qoFg, {from: accounts[2]});
		const boolC868zqJ = await XenoFelixfEDyL2p.freezeAccount.call(addressfOBJx34, {from: accounts[2]});
		const boollINiuOI = await XenoFelixfEDyL2p.freezeAccount.call(addressywat9AR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yo9b8Sl = await XenoFelixfEDyL2p.balanceOf.call(addressmnY12F, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringQJgmBU8 = "jOzcTRyod1oB8gfkSlvFIXku6lwnWjcJlW8vpq7DCxbEkyBHTY0TrG2ipulbVR6sKTwvcB"
		const stringFDGrEW5 = "kzfyUWJWbooDCnFQPUFxt5tG2ildSCntUl3VRhGpSFwun4F1lzHia5"
		const uintGTxbVcU = BigInt("55")
		const XenoFelixNXgy8ZV = await XenoFelix.new(stringQJgmBU8, stringFDGrEW5, uintGTxbVcU, {from: accounts[0]});
		const addressoB4EbrU = accounts[1]
		const addressSzQDauN = accounts[3]
		const uintk6rhep = BigInt("1190")
		const addressz20fDtf = accounts[3]
		const uint256N5Dq7Gj = await XenoFelixNXgy8ZV.balanceOf.call(addressoB4EbrU, {from: accounts[4]});
		const addresscdcJ8zy = await XenoFelixNXgy8ZV.removePauser.call(addressSzQDauN, {from: accounts[1]});
		const uint256vJ09M45 = await XenoFelixNXgy8ZV.burn.call(uintk6rhep, {from: accounts[5]});
		const uint8qVN0qWy = await XenoFelixNXgy8ZV.decimals.call({from: accounts[3]});
		const boolA7LbbQ = await XenoFelixNXgy8ZV.isPauser.call(addressz20fDtf, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringmtIj117 = "bWnd8JsMXOl89f6Ql6mao4MVDg3s5oeMwFqrdU3N9zn5lBJRB0BV56KYhbP1CnsFSFKMvtmvNMvARwSQ0VH"
		const stringp1q6qj = "HlaTQqdNw9743UhGtV7AwNWld9ulhLnWQ8i2FhPseAfj2uJq67fiSnc9tPMtaU6vVms9nH3E60l1KjmiWtt8qqwGJYAM"
		const uintFNa63Cp = BigInt("240")
		const XenoFelixsHTHVZf = await XenoFelix.new(stringmtIj117, stringp1q6qj, uintFNa63Cp, {from: accounts[3]});
		const addressm0BDCyN = accounts[4]
		const uinteIR6cC0 = BigInt("1496")
		const addressXROoEEx = accounts[0]
		const addressyL9qgWf = accounts[1]
		const uintQnn9VlU = BigInt("985")
		const addressaG1xRDz = accounts[2]
		const uint256WSu99bw = await XenoFelixsHTHVZf.balanceOf.call(addressm0BDCyN, {from: accounts[0]});
		const stringqL1NZBF = await XenoFelixsHTHVZf.symbol.call({from: accounts[2]});
		const boolhbuaZyA = await XenoFelixsHTHVZf.transferFrom.call(addressyL9qgWf, addressXROoEEx, uinteIR6cC0, {from: accounts[3]});
		await XenoFelixsHTHVZf.unpause.call({from: accounts[4]});
		const boolUU0QRqh = await XenoFelixsHTHVZf.increaseAllowance.call(addressaG1xRDz, uintQnn9VlU, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringr2vELBH = "kX70q3TJxgGtqbEsUGtZaaBwUW3gS5DwHXIEmaoP6KYtOvwi16VoDamaJJteJEge9EMuVl9XanT8Umf"
		const stringyUMONi = "iKOdOpOqFFh0tYhnXN"
		const uintsGPE07p = BigInt("1287")
		const uintFLXxTOk = BigInt("6")
		const XenoFelixvIF5y0e = await XenoFelix.new(stringr2vELBH, stringyUMONi, uintsGPE07p, uintFLXxTOk, {from: accounts[0]});
		const uinthdM9iI8 = BigInt("1960")
		const addresssJLIdl4 = accounts[2]
		const uint9ZRZHk = BigInt("921")
		const addressdL5zCw = accounts[4]
		const addresshrLqp1 = accounts[2]
		const uintP7t3YXq = BigInt("248")
		const uintacjjjhI = BigInt("1037")
		const addresst1jazpA = accounts[3]
		const addressREtpAVc = accounts[3]
		const boolh0Z77kb = await XenoFelixvIF5y0e.decreaseAllowance.call(addresssJLIdl4, uinthdM9iI8, {from: accounts[2]});
		const boolLt8Do4k = await XenoFelixvIF5y0e.transferFrom.call(addresshrLqp1, addressdL5zCw, uint9ZRZHk, {from: accounts[1]});
		await XenoFelixvIF5y0e.unpause.call({from: accounts[2]});
		const boolBPY6Hl = await XenoFelixvIF5y0e.lock.call(addresst1jazpA, uintacjjjhI, uintP7t3YXq, {from: accounts[1]});
		const boolko72XUb = await XenoFelixvIF5y0e.isOwner.call(addressREtpAVc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixvIF5y0e.decreaseAllowance.call(addresssJLIdl4, uinthdM9iI8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintC3kBaz = BigInt("1444")
		const uintsdl7veH = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintC3kBaz, uintsdl7veH, {from: accounts[3]});
		const uintxzdpFM0 = BigInt("1318")
		const addressLwlvmi = accounts[0]
		const uintOv4lbia = BigInt("73")
		const addressJUCsFKV = accounts[4]
		await XenoFelixqGxsFx1.renouncePauser.call({from: accounts[1]});
		const uint256MBLgEBc = await XenoFelixqGxsFx1.totalSupply.call({from: accounts[5]});
		const boolIBzKJx = await XenoFelixqGxsFx1.transfer.call(addressLwlvmi, uintxzdpFM0, {from: accounts[4]});
		const booldi5CgHx = await XenoFelixqGxsFx1.transfer.call(addressJUCsFKV, uintOv4lbia, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixqGxsFx1.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string2OAw1j = "BLgsfjyPlh1KnYM4nB649bDNXES5lrkTKGIyes9ki98GSGVAsKJmDTiHEqAdfwGw5PYtg8OPnfj2cf45hHx"
		const stringig3evr4 = "n7aKKOtlfP9HRYutnn4Gc6U3Xwhda6SkGZ6jTZovtgvYrxk94gEI7EJ"
		const uintnYhlzti = BigInt("1303")
		const uintwp38KoI = BigInt("169")
		const XenoFelixbMewMD = await XenoFelix.new(string2OAw1j, stringig3evr4, uintnYhlzti, uintwp38KoI, {from: accounts[1]});
		const uinttQE4fug = BigInt("468")
		const addressTFhpaj = accounts[1]
		const uintrnHb6r = BigInt("1222")
		const addressjleVjgd = "0x0000000000000000000000000000000000000001"
		const addressCyQq5Xg = accounts[1]
		const addressv2JtjNo = await XenoFelixbMewMD.burnFrom.call(addressTFhpaj, uinttQE4fug, {from: accounts[2]});
		const addressiwp3wIz = await XenoFelixbMewMD.burnFrom.call(addressjleVjgd, uintrnHb6r, {from: accounts[4]});
		const addresslZS3kXM = await XenoFelixbMewMD.removePauser.call(addressCyQq5Xg, {from: accounts[5]});

		await expect(XenoFelixbMewMD.burnFrom.call(addressTFhpaj, uinttQE4fug, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintWFekiE2 = BigInt("1444")
		const uintBpHBSxj = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintWFekiE2, uintBpHBSxj, {from: accounts[3]});
		const uintrYmviz5 = BigInt("1750")
		const addressrEG5A36 = accounts[0]
		const uintMnQJKBF = BigInt("73")
		const addressGCoqfDN = accounts[5]
		const boolpzZF68q = await XenoFelixqGxsFx1.approve.call(addressrEG5A36, uintrYmviz5, {from: accounts[4]});
		const booldi5CgHx = await XenoFelixqGxsFx1.transfer.call(addressGCoqfDN, uintMnQJKBF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolpzZF68q, true)
		await expect(XenoFelixqGxsFx1.transfer.call(addressGCoqfDN, uintMnQJKBF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintST5QfUe = BigInt("1444")
		const uintHssjcG = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintST5QfUe, uintHssjcG, {from: accounts[3]});
		const uintxziASz7 = BigInt("1252")
		const uintsj19r6S = BigInt("73")
		const addressnpmNhRF = accounts[5]
		const uintppPISo8 = BigInt("1981")
		const addressjQtdL8i = accounts[0]
		const uint256IHDLkQ4 = await XenoFelixqGxsFx1.burn.call(uintxziASz7, {from: accounts[1]});
		const booldi5CgHx = await XenoFelixqGxsFx1.transfer.call(addressnpmNhRF, uintsj19r6S, {from: "0x0000000000000000000000000000000000000001"});
		const boolGl4bzMv = await XenoFelixqGxsFx1.burnOwner.call(addressjQtdL8i, uintppPISo8, {from: accounts[3]});

		await expect(XenoFelixqGxsFx1.burn.call(uintxziASz7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintDYGn3O = BigInt("1444")
		const uintpgRuhc = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintDYGn3O, uintpgRuhc, {from: accounts[3]});
		const uintqbUphYy = BigInt("73")
		const addressH0qmNux = accounts[4]
		await XenoFelixqGxsFx1.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const booldi5CgHx = await XenoFelixqGxsFx1.transfer.call(addressH0qmNux, uintqbUphYy, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixqGxsFx1.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringOdHPQA1 = "YKRGpbOBb3sx3CF3w02NDVMVdBkenYUDS9L"
		const stringg5Tj0iK = "ZrDJ"
		const uintEifKEqg = BigInt("251")
		const XenoFelixVHkJCvq = await XenoFelix.new(stringOdHPQA1, stringg5Tj0iK, uintEifKEqg, {from: accounts[5]});
		const uintInhgfEL = BigInt("515")
		const uintl0jvDN = BigInt("921")
		const addressrkKCZW0 = accounts[3]
		const uinttop9jVS = BigInt("1418")
		const addressTxHEB9y = accounts[1]
		const boolk0Lcr06 = await XenoFelixVHkJCvq.transferWithLock.call(addressrkKCZW0, uintl0jvDN, uintInhgfEL, {from: accounts[4]});
		const boolUMlggd = await XenoFelixVHkJCvq.transfer.call(addressTxHEB9y, uinttop9jVS, {from: accounts[0]});
		await XenoFelixVHkJCvq.onlyNewOwner.call({from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintIZGuto = BigInt("1444")
		const uintnLRXCz = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintIZGuto, uintnLRXCz, {from: accounts[3]});
		const addressti2r97D = accounts[3]
		const uinthPeJ9ff = BigInt("73")
		const addresslrssB5L = accounts[5]
		const uint256BFUhlmI = await XenoFelixqGxsFx1.balanceOf.call(addressti2r97D, {from: accounts[0]});
		await XenoFelixqGxsFx1.whenPaused.call({from: accounts[3]});
		const booldi5CgHx = await XenoFelixqGxsFx1.transfer.call(addresslrssB5L, uinthPeJ9ff, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256BFUhlmI, BigInt("99214716400915458592157463698086408188874646178672591452157257988588374589440"))
		await expect(XenoFelixqGxsFx1.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintwXncUH = BigInt("1444")
		const uintE8KSf2p = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintwXncUH, uintE8KSf2p, {from: accounts[3]});
		const addressV8JkLU = accounts[0]
		const uintrEJKqxV = BigInt("73")
		const addressEZFpKBs = accounts[4]
		const uintPJpV25O = BigInt("87")
		const uintATd4fha = BigInt("1581")
		const addressrhbsL8z = accounts[5]
		const booloBBydkS = await XenoFelixqGxsFx1.freezeAccount.call(addressV8JkLU, {from: accounts[1]});
		const booldi5CgHx = await XenoFelixqGxsFx1.transfer.call(addressEZFpKBs, uintrEJKqxV, {from: "0x0000000000000000000000000000000000000001"});
		const boolyj1CGWr = await XenoFelixqGxsFx1.lock.call(addressrhbsL8z, uintATd4fha, uintPJpV25O, {from: accounts[0]});

		await expect(XenoFelixqGxsFx1.freezeAccount.call(addressV8JkLU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringk6wU9zi = "mEup4xADWIvIDO3YPDHqNJcnbHi4rnk9XoUDyhxPdxTM0Jc1H5Ihdr3DSOQDtXU2PKe"
		const stringdvv9W71 = "y3IBXxcRZ7znrmf25NxPEpyX4ukdCXMdLOb0tkZtPYoI6mkFigsDH9HkpD1OhTtl4brGOFvlocM4Ysz1Xjz8nGGKRX"
		const uintjNroC0T = BigInt("210")
		const XenoFelixxMtgkw9 = await XenoFelix.new(stringk6wU9zi, stringdvv9W71, uintjNroC0T, {from: accounts[1]});
		const addressmpKIE8 = accounts[0]
		const uintcgE2NPg = BigInt("662")
		const addressmqkgdxQ = accounts[3]
		const uintZyj0H4P = BigInt("1620")
		const addressIEhHXWF = accounts[1]
		const addressPN1pyPB = await XenoFelixxMtgkw9.addPauser.call(addressmpKIE8, {from: accounts[2]});
		const boolrjDyw7m = await XenoFelixxMtgkw9.increaseAllowance.call(addressmqkgdxQ, uintcgE2NPg, {from: accounts[3]});
		await XenoFelixxMtgkw9.onlyOwner.call({from: accounts[1]});
		const boolCGemfM = await XenoFelixxMtgkw9.transfer.call(addressIEhHXWF, uintZyj0H4P, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintffbmZEf = BigInt("1444")
		const uintd2aq4Y = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintffbmZEf, uintd2aq4Y, {from: accounts[3]});
		const addresshWQr1Io = accounts[2]
		const addressQXhDx89 = "0x0000000000000000000000000000000000000001"
		const uintAWK1123 = BigInt("55")
		const addressI85AXFx = accounts[4]
		const uint256iQg43Xs = await XenoFelixqGxsFx1.allowance.call(addressQXhDx89, addresshWQr1Io, {from: accounts[2]});
		const booldi5CgHx = await XenoFelixqGxsFx1.transfer.call(addressI85AXFx, uintAWK1123, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256iQg43Xs, BigInt("0"))
		await expect(XenoFelixqGxsFx1.transfer.call(addressI85AXFx, uintAWK1123, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintfDj6Pgl = BigInt("1444")
		const uintPggHlMq = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintfDj6Pgl, uintPggHlMq, {from: accounts[3]});
		const uintqEDrYEA = BigInt("1115")
		const addressCOsotxh = accounts[4]
		const addressw7Qpdwm = accounts[3]
		const uintta28amG = BigInt("73")
		const addressNPZZMbO = accounts[5]
		const boolPqOPKR3 = await XenoFelixqGxsFx1.transferFrom.call(addressw7Qpdwm, addressCOsotxh, uintqEDrYEA, {from: accounts[0]});
		const booldi5CgHx = await XenoFelixqGxsFx1.transfer.call(addressNPZZMbO, uintta28amG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixqGxsFx1.transferFrom.call(addressw7Qpdwm, addressCOsotxh, uintqEDrYEA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintVKbEVFe = BigInt("1444")
		const uintcqDXcH4 = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintVKbEVFe, uintcqDXcH4, {from: accounts[3]});
		const uintNwCwatE = BigInt("597")
		const addressKXG6esu = accounts[2]
		const uintV0ceImD = BigInt("73")
		const addressD7KTEBC = accounts[6]
		const stringxcaB5VG = await XenoFelixqGxsFx1.symbol.call({from: accounts[2]});
		const boolXWXkES8 = await XenoFelixqGxsFx1.approve.call(addressKXG6esu, uintNwCwatE, {from: accounts[4]});
		const booldi5CgHx = await XenoFelixqGxsFx1.transfer.call(addressD7KTEBC, uintV0ceImD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolXWXkES8, true)
		assert.equal(stringxcaB5VG, "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7")
		await expect(XenoFelixqGxsFx1.transfer.call(addressD7KTEBC, uintV0ceImD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintmPQYZEh = BigInt("1444")
		const uintsHL5MGh = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintmPQYZEh, uintsHL5MGh, {from: accounts[3]});
		const uintx6uG8p6 = BigInt("790")
		const addressFRJj8as = accounts[3]
		const uintUbEM5E = BigInt("73")
		const addressro3b7pt = accounts[5]
		const uintfQqtXlD = BigInt("1518")
		const addressGkkEfPi = accounts[1]
		const addressQmsi3y5 = accounts[1]
		const boolr8hDSj0 = await XenoFelixqGxsFx1.increaseAllowance.call(addressFRJj8as, uintx6uG8p6, {from: accounts[3]});
		const booldi5CgHx = await XenoFelixqGxsFx1.transfer.call(addressro3b7pt, uintUbEM5E, {from: "0x0000000000000000000000000000000000000001"});
		const boolHF3uXJp = await XenoFelixqGxsFx1.transferFrom.call(addressQmsi3y5, addressGkkEfPi, uintfQqtXlD, {from: accounts[0]});

		assert.equal(boolr8hDSj0, true)
		await expect(XenoFelixqGxsFx1.transfer.call(addressro3b7pt, uintUbEM5E, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintv0xUwe5 = BigInt("1444")
		const uinthsJyRUm = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintv0xUwe5, uinthsJyRUm, {from: accounts[3]});
		const uintM65kyyn = BigInt("574")
		const addressBXTHnzB = "0x0000000000000000000000000000000000000001"
		const addressRqnpARP = accounts[5]
		const booleL2Nd9r = await XenoFelixqGxsFx1.transfer.call(addressBXTHnzB, uintM65kyyn, {from: accounts[3]});
		const uint256BFUhlmI = await XenoFelixqGxsFx1.balanceOf.call(addressRqnpARP, {from: accounts[0]});
		const stringEKfQXGp = await XenoFelixqGxsFx1.name.call({from: accounts[2]});

		assert.equal(booleL2Nd9r, true)
		assert.equal(stringEKfQXGp, "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu")
		assert.equal(uint256BFUhlmI, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uint2Br7Ec = BigInt("1444")
		const uintx3CGB6L = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uint2Br7Ec, uintx3CGB6L, {from: accounts[3]});
		const addressuJI7kg = accounts[3]
		const uintcoGernq = BigInt("73")
		const addressF2HCRpC = accounts[5]
		const uint8xYtapyp = await XenoFelixqGxsFx1.decimals.call({from: accounts[3]});
		const boolMvVKlN = await XenoFelixqGxsFx1.isOwner.call(addressuJI7kg, {from: accounts[5]});
		await XenoFelixqGxsFx1.onlyPauser.call({from: accounts[0]});
		const booldi5CgHx = await XenoFelixqGxsFx1.transfer.call(addressF2HCRpC, uintcoGernq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMvVKlN, true)
		assert.equal(uint8xYtapyp, BigInt("159"))
		await expect(XenoFelixqGxsFx1.onlyPauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringh8doPhG = ""
		const stringrRPWeDh = "2frMheNtAbrVY7uhQ8XZtz2DL45Ee8besCBgqLCGO5"
		const uintvLEmNe6 = BigInt("108")
		const XenoFelixu6n2tQn = await XenoFelix.new(stringh8doPhG, stringrRPWeDh, uintvLEmNe6, {from: accounts[2]});
		const uintt5VzAaJ = BigInt("1364")
		const addressSO8oJa = "0x0000000000000000000000000000000000000001"
		const uintjqRGkhL = BigInt("1089")
		const addressfMZ1e5u = accounts[2]
		const uintHgfTOn = BigInt("1746")
		const addressJyP1GV4 = accounts[2]
		const boolHwHNAkw = await XenoFelixu6n2tQn.burnOwner.call(addressSO8oJa, uintt5VzAaJ, {from: accounts[2]});
		await XenoFelixu6n2tQn.onlyOwner.call({from: accounts[0]});
		const stringMdYO4dq = await XenoFelixu6n2tQn.name.call({from: accounts[3]});
		const uint256PINNApM = await XenoFelixu6n2tQn.burn.call(uintjqRGkhL, {from: accounts[4]});
		const boolJqnSALr = await XenoFelixu6n2tQn.isOwner.call(addressfMZ1e5u, {from: accounts[1]});
		const addressTr0FpWv = await XenoFelixu6n2tQn.burnFrom.call(addressJyP1GV4, uintHgfTOn, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintbJOLKgh = BigInt("1444")
		const uintdZwJeh1 = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintbJOLKgh, uintdZwJeh1, {from: accounts[3]});
		const addressiSdKbP = accounts[5]
		const uint256BFUhlmI = await XenoFelixqGxsFx1.balanceOf.call(addressiSdKbP, {from: accounts[0]});
		const booliKCfHCF = await XenoFelixqGxsFx1.paused.call({from: accounts[4]});

		assert.equal(booliKCfHCF, false)
		assert.equal(uint256BFUhlmI, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringTEUwR5b = "VmFnP7PnCDBjIWKVmMrvQicCFB5YN9ebF8nHgFfCUH"
		const stringqZ4m5xH = "kwBQ2aXlwUVekcscQayGhh04qkRwN3HU8nw4aFe120lJFISBGu8op2ItlmfmP8m1"
		const uintZrRJSGa = BigInt("1776")
		const uintBzxusQ = BigInt("44")
		const XenoFelixJdAwUvh = await XenoFelix.new(stringTEUwR5b, stringqZ4m5xH, uintZrRJSGa, uintBzxusQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintkDZUDvc = BigInt("839")
		const addressSPlwEVg = accounts[3]
		const addressugeQZ7p = accounts[5]
		await XenoFelixJdAwUvh.onlyPauser.call({from: accounts[2]});
		const addresslpWBzOi = await XenoFelixJdAwUvh.burnFrom.call(addressSPlwEVg, uintkDZUDvc, {from: "0x0000000000000000000000000000000000000001"});
		const booljIOw1BE = await XenoFelixJdAwUvh.isOwner.call(addressugeQZ7p, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintXM9xVmP = BigInt("1444")
		const uintMlTGPY = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintXM9xVmP, uintMlTGPY, {from: accounts[3]});
		const addresso9WpA3y = accounts[5]
		const uintL2DK4Xl = BigInt("417")
		const addressSQ8FhHn = accounts[2]
		const addressJxNqV85 = accounts[3]
		const uint256BFUhlmI = await XenoFelixqGxsFx1.balanceOf.call(addresso9WpA3y, {from: accounts[0]});
		const stringbyoaTBB = await XenoFelixqGxsFx1.name.call({from: accounts[2]});
		const boolfx5f1t = await XenoFelixqGxsFx1.approve.call(addressSQ8FhHn, uintL2DK4Xl, {from: accounts[5]});
		const addressGZSyCJF = await XenoFelixqGxsFx1.removePauser.call(addressJxNqV85, {from: accounts[3]});

		assert.equal(boolfx5f1t, true)
		assert.equal(stringbyoaTBB, "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu")
		assert.equal(uint256BFUhlmI, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintfRb2tv = BigInt("1444")
		const uintysBtTCg = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintfRb2tv, uintysBtTCg, {from: accounts[3]});
		const addresszvhERAa = accounts[1]
		const uintt6UpDPQ = BigInt("73")
		const addressn82hDCa = accounts[5]
		const booluC9tkbr = await XenoFelixqGxsFx1.freezeAccount.call(addresszvhERAa, {from: accounts[3]});
		const booldi5CgHx = await XenoFelixqGxsFx1.transfer.call(addressn82hDCa, uintt6UpDPQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booluC9tkbr, true)
		await expect(XenoFelixqGxsFx1.transfer.call(addressn82hDCa, uintt6UpDPQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string1CWN72 = "2vuW61nYAfHTB1ORBNQkxW"
		const stringGUOPTJQ = "20m8H2Vfeo8LO7NBnedVyuPg05pIUu6Y2JVtEPcKCBqyVLKkzP17btaVlogJMn2z7wIUpd5ivkfsDWgNPDEd0SyH5"
		const uintEujsLG9 = BigInt("254")
		const XenoFelixcKIVrOb = await XenoFelix.new(string1CWN72, stringGUOPTJQ, uintEujsLG9, {from: "0x0000000000000000000000000000000000000001"});
		const uint4KF300 = BigInt("275")
		const addressGNysWfP = accounts[1]
		const uintb9umeW = BigInt("1021")
		const addresspqRGFSh = accounts[0]
		const addressjoWRXCa = accounts[3]
		const uintpG43neZ = BigInt("1507")
		const addresssOrRnB = accounts[2]
		const addressI8rDzib = accounts[2]
		const uint2563pRjNl = await XenoFelixcKIVrOb.burn.call(uint4KF300, {from: accounts[4]});
		const boolxIVKEle = await XenoFelixcKIVrOb.isPauser.call(addressGNysWfP, {from: accounts[0]});
		const boolnKsNjHK = await XenoFelixcKIVrOb.transferFrom.call(addressjoWRXCa, addresspqRGFSh, uintb9umeW, {from: accounts[1]});
		const boolHkfjXCa = await XenoFelixcKIVrOb.transferFrom.call(addressI8rDzib, addresssOrRnB, uintpG43neZ, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringAOOKlRs = "I1wwjuAO6dZEaDYAAo1w4lCMRIMw2pw5jSut1pu"
		const stringmUK5bQW = "nT96lVyFp7Z85hol62AUrXkB5MetOKDX8DHOVp3h425ujsh361j4b5aHB1uDkFW7"
		const uintAf5Q07g = BigInt("1444")
		const uintNjwdDhB = BigInt("159")
		const XenoFelixqGxsFx1 = await XenoFelix.new(stringAOOKlRs, stringmUK5bQW, uintAf5Q07g, uintNjwdDhB, {from: accounts[3]});
		const uintbKgybQa = BigInt("982")
		const uintwl8JIk = BigInt("1385")
		const addressPViFgzi = accounts[2]
		const uintjXtcM5t = BigInt("1115")
		const addressfN7OmMf = accounts[4]
		const addressk8NyNyM = accounts[3]
		const uinto9uLLA7 = BigInt("1697")
		const uintYe0TbXi = BigInt("102")
		const addressxQxE1N = accounts[2]
		const boolMPXJ7je = await XenoFelixqGxsFx1.transferWithLock.call(addressPViFgzi, uintwl8JIk, uintbKgybQa, {from: accounts[3]});
		const uint8GXMRTeH = await XenoFelixqGxsFx1.decimals.call({from: accounts[2]});
		const boolPqOPKR3 = await XenoFelixqGxsFx1.transferFrom.call(addressk8NyNyM, addressfN7OmMf, uintjXtcM5t, {from: accounts[0]});
		const boolqPhePqQ = await XenoFelixqGxsFx1.lock.call(addressxQxE1N, uintYe0TbXi, uinto9uLLA7, {from: accounts[0]});

		assert.equal(boolMPXJ7je, true)
		assert.equal(uint8GXMRTeH, BigInt("159"))
		await expect(XenoFelixqGxsFx1.transferFrom.call(addressk8NyNyM, addressfN7OmMf, uintjXtcM5t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})