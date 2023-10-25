const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressFzQoWP7 = accounts[0]
		const FompeoLxGhQ = await Fomp.new(addressFzQoWP7, {from: accounts[0]});
		const addressXf1YYdg = accounts[4]
		const addressWhRicEo = accounts[3]
		const uintRolHMiy = BigInt("1476")
		const addressDX8w3cs = accounts[3]
		const addressil6nqy = accounts[3]
		const addressqn4h9XV = accounts[0]
		const uintoasCX9A = await FompeoLxGhQ.allowance.call(addressWhRicEo, addressXf1YYdg, {from: accounts[3]});
		const boolQRJKKbO = await FompeoLxGhQ.approve.call(addressDX8w3cs, uintRolHMiy, {from: accounts[4]});
		const uint96w88mGxC = await FompeoLxGhQ.getCurrentVotes.call(addressil6nqy, {from: accounts[5]});
		const addressjlzS6E2 = await FompeoLxGhQ.delegate.call(addressqn4h9XV, {from: accounts[2]});

		assert.equal(boolQRJKKbO, true)
		assert.equal(uint96w88mGxC, BigInt("0"))
		assert.equal(uintoasCX9A, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressex5Koir = accounts[0]
		const FompcuP9K6v = await Fomp.new(addressex5Koir, {from: accounts[1]});
		const byteKPPYIki = "0x171d1f190500100806010f14090f06170b030d0b0f010811020613191a170605"
		const byteXKpzJij = "0x021e0118060c04020219020d1a12021f1c14110100101a1b1f19120c1d160112"
		const uintYaOJt48 = BigInt("16")
		const uintf4nu7Lh = BigInt("1505")
		const uintaiECXKG = BigInt("1501")
		const addressoAyldS = "0x0000000000000000000000000000000000000001"
		const addressOs9Vd2k = "0x0000000000000000000000000000000000000001"
		const addressAAcEDGz = "0x0000000000000000000000000000000000000001"
		const addressTAYWuIB = await FompcuP9K6v.delegateBySig.call(addressoAyldS, uintaiECXKG, uintf4nu7Lh, uintYaOJt48, byteXKpzJij, byteKPPYIki, {from: accounts[3]});
		const addressj0jnxZB = await FompcuP9K6v.delegate.call(addressOs9Vd2k, {from: accounts[3]});
		const uint96LYplfH0 = await FompcuP9K6v.getCurrentVotes.call(addressAAcEDGz, {from: accounts[2]});

		await expect(FompcuP9K6v.delegateBySig.call(addressoAyldS, uintaiECXKG, uintf4nu7Lh, uintYaOJt48, byteXKpzJij, byteKPPYIki, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresscLCCEbW = accounts[0]
		const FompRovJko = await Fomp.new(addresscLCCEbW, {from: accounts[2]});
		const addressUW6jzTT = accounts[5]
		const addressLEgXK5s = accounts[2]
		const uintHo9OCr = BigInt("567")
		const addressPPS9cLc = accounts[5]
		const uintWUt4Jpn = BigInt("962")
		const addressPBK2H9z = accounts[4]
		const uintzIcB4HU = BigInt("782")
		const addressBzxuXTe = accounts[4]
		const uint96ipT8y6N = await FompRovJko.getCurrentVotes.call(addressUW6jzTT, {from: accounts[4]});
		const uintcGfU8cn = await FompRovJko.balanceOf.call(addressLEgXK5s, {from: accounts[3]});
		const boolEk6lP2l = await FompRovJko.approve.call(addressPPS9cLc, uintHo9OCr, {from: accounts[5]});
		const boolOHbj52 = await FompRovJko.approve.call(addressPBK2H9z, uintWUt4Jpn, {from: "0x0000000000000000000000000000000000000001"});
		const boolc9cdKE = await FompRovJko.transfer.call(addressBzxuXTe, uintzIcB4HU, {from: accounts[2]});

		assert.equal(boolEk6lP2l, true)
		assert.equal(boolOHbj52, true)
		assert.equal(uint96ipT8y6N, BigInt("0"))
		assert.equal(uintcGfU8cn, BigInt("0"))
		await expect(FompRovJko.transfer.call(addressBzxuXTe, uintzIcB4HU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressYeBfFxm = accounts[4]
		const FompOBRWsfE = await Fomp.new(addressYeBfFxm, {from: accounts[1]});
		const uintWSiYMH = BigInt("378")
		const addressFSqgnyr = accounts[0]
		const addresscz6A5Jd = accounts[1]
		const uinteLmTf2o = BigInt("1698")
		const address50NQip = accounts[1]
		const addressSbTuo6m = accounts[2]
		const addresstktaI7z = accounts[4]
		const addressUz27Bxg = accounts[3]
		const addressE9gNcDE = accounts[1]
		const boolG6cYpFn = await FompOBRWsfE.transferFrom.call(addresscz6A5Jd, addressFSqgnyr, uintWSiYMH, {from: accounts[1]});
		const boolQjIABvv = await FompOBRWsfE.approve.call(address50NQip, uinteLmTf2o, {from: accounts[1]});
		const uint96MmGNUc8 = await FompOBRWsfE.getCurrentVotes.call(addressSbTuo6m, {from: accounts[3]});
		const uint96dSvxdNF = await FompOBRWsfE.getCurrentVotes.call(addresstktaI7z, {from: accounts[2]});
		const addressfYezL2D = await FompOBRWsfE.delegate.call(addressUz27Bxg, {from: accounts[3]});
		const uint96YtTLXip = await FompOBRWsfE.getCurrentVotes.call(addressE9gNcDE, {from: accounts[2]});

		await expect(FompOBRWsfE.transferFrom.call(addresscz6A5Jd, addressFSqgnyr, uintWSiYMH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresssRnpbT = accounts[1]
		const FompTzK0wqQ = await Fomp.new(addresssRnpbT, {from: accounts[1]});
		const uintJZWPvc8 = BigInt("1454")
		const addressQMqDAD5 = accounts[0]
		const addressJk39p6W = accounts[4]
		const uintggxBAtd = BigInt("124")
		const addressDkq1TLP = accounts[0]
		const uint5ruMSD = BigInt("1000")
		const addressRNcoYe = "0x0000000000000000000000000000000000000001"
		const uintnolZ4Sk = BigInt("1999")
		const addressUmGyOvw = accounts[5]
		const addressukXJ1cC = accounts[1]
		const addressFBrRX5c = accounts[3]
		const addressJlM43Y0 = accounts[3]
		const boolMqhhDQV = await FompTzK0wqQ.transferFrom.call(addressJk39p6W, addressQMqDAD5, uintJZWPvc8, {from: accounts[1]});
		const boolL4iFnk = await FompTzK0wqQ.transfer.call(addressDkq1TLP, uintggxBAtd, {from: accounts[3]});
		const boolSmYGOc7 = await FompTzK0wqQ.transfer.call(addressRNcoYe, uint5ruMSD, {from: accounts[4]});
		const boolpXhHXuG = await FompTzK0wqQ.approve.call(addressUmGyOvw, uintnolZ4Sk, {from: accounts[0]});
		const uintT7nD46E = await FompTzK0wqQ.allowance.call(addressFBrRX5c, addressukXJ1cC, {from: accounts[1]});
		const uint96SDiKSoD = await FompTzK0wqQ.getCurrentVotes.call(addressJlM43Y0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FompTzK0wqQ.transferFrom.call(addressJk39p6W, addressQMqDAD5, uintJZWPvc8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresskr2IcxU = "0x0000000000000000000000000000000000000001"
		const FompDvIf8Uv = await Fomp.new(addresskr2IcxU, {from: accounts[4]});
		const uintidHL97a = BigInt("896")
		const addressxdn1rWj = accounts[1]
		const uintGnDOH9w = BigInt("249")
		const addressj3tIFo9 = accounts[5]
		const addressXUOVui5 = accounts[4]
		const uintVklwhw7 = BigInt("1464")
		const addresser0fQpN = accounts[0]
		const uintvyXsZTZ = BigInt("1840")
		const addressbLINmGf = accounts[1]
		const addressOZ9cYoC = accounts[5]
		const uint96IA8uhq2 = await FompDvIf8Uv.getPriorVotes.call(addressxdn1rWj, uintidHL97a, {from: accounts[0]});
		const uint96yMnaK0Y = await FompDvIf8Uv.getPriorVotes.call(addressj3tIFo9, uintGnDOH9w, {from: accounts[3]});
		const addressuLxefvQ = await FompDvIf8Uv.delegate.call(addressXUOVui5, {from: accounts[1]});
		const booldOC2Hfs = await FompDvIf8Uv.approve.call(addresser0fQpN, uintVklwhw7, {from: accounts[3]});
		const boolWmebMlW = await FompDvIf8Uv.transferFrom.call(addressOZ9cYoC, addressbLINmGf, uintvyXsZTZ, {from: accounts[0]});

		assert.equal(booldOC2Hfs, true)
		assert.equal(uint96IA8uhq2, BigInt("0"))
		assert.equal(uint96yMnaK0Y, BigInt("0"))
		await expect(FompDvIf8Uv.transferFrom.call(addressOZ9cYoC, addressbLINmGf, uintvyXsZTZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresshGuz4Dy = accounts[3]
		const FompHaaPtPy = await Fomp.new(addresshGuz4Dy, {from: accounts[1]});
		const addresskdagNx0 = accounts[5]
		const uintvUvbT5h = BigInt("552")
		const addresso2cuHbU = accounts[4]
		const addressizzdPEB = accounts[2]
		const addresslPsukdb = accounts[2]
		const addressCN58Nxj = accounts[3]
		const uintYqVwxeu = BigInt("511")
		const addressdFfaeZo = accounts[3]
		const addressrJKnbNR = accounts[4]
		const address0uj4gn = accounts[4]
		const uint96qa355h = await FompHaaPtPy.getCurrentVotes.call(addresskdagNx0, {from: accounts[3]});
		const boolr6K0zlq = await FompHaaPtPy.approve.call(addresso2cuHbU, uintvUvbT5h, {from: accounts[3]});
		const addressNmLw6V = await FompHaaPtPy.delegate.call(addressizzdPEB, {from: accounts[3]});
		const uintoj6FjH1 = await FompHaaPtPy.allowance.call(addressCN58Nxj, addresslPsukdb, {from: accounts[1]});
		const boolR9iN7am = await FompHaaPtPy.transferFrom.call(addressrJKnbNR, addressdFfaeZo, uintYqVwxeu, {from: accounts[0]});
		const uintZXfBe3w = await FompHaaPtPy.balanceOf.call(address0uj4gn, {from: accounts[1]});

		assert.equal(boolr6K0zlq, true)
		assert.equal(uint96qa355h, BigInt("0"))
		assert.equal(uintoj6FjH1, BigInt("0"))
		await expect(FompHaaPtPy.transferFrom.call(addressrJKnbNR, addressdFfaeZo, uintYqVwxeu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresslM344kl = "0x0000000000000000000000000000000000000001"
		const FompBFrlOKu = await Fomp.new(addresslM344kl, {from: "0x0000000000000000000000000000000000000001"});
		const addresss65rFJm = accounts[3]
		const uintpfO7g21 = BigInt("621")
		const addressM5rnoE4 = accounts[1]
		const addressPETc8EV = accounts[0]
		const addressJ7CN9Mi = accounts[2]
		const addressMve35SY = accounts[3]
		const uint96DwgnRiH = await FompBFrlOKu.getCurrentVotes.call(addresss65rFJm, {from: accounts[0]});
		const boolzoBzFP8 = await FompBFrlOKu.transferFrom.call(addressPETc8EV, addressM5rnoE4, uintpfO7g21, {from: accounts[4]});
		const uintuXmh5Xy = await FompBFrlOKu.balanceOf.call(addressJ7CN9Mi, {from: accounts[5]});
		const uint96mmbeFKV = await FompBFrlOKu.getCurrentVotes.call(addressMve35SY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Fomp', async () => {
		const addressLsnIT7q = accounts[3]
		const FompHaaPtPy = await Fomp.new(addressLsnIT7q, {from: accounts[1]});
		const addressFSNR0AL = accounts[5]
		const uintfF3nclT = BigInt("61")
		const addressSiZriag = accounts[0]
		const uintLY0Wv7j = BigInt("10")
		const addressUoFiXDd = accounts[2]
		const uintCtROwwl = BigInt("128")
		const addressKLTkpwI = accounts[4]
		const addressQbFxpk7 = accounts[2]
		const bytefX0zVFB = "0x130b000102020910091c081b012008011010191106060e0214000a071d021f17"
		const byteoi7FNO = "0x09171c17020214081b020f0207031c000a020b1d16121a020a120c120e20100a"
		const uintgTHN1hH = BigInt("54")
		const uintkjQ1Oc9 = BigInt("1337")
		const uintLypS1sQ = BigInt("77")
		const addressR3oWU5i = accounts[3]
		const addressIIdrQuy = accounts[4]
		const addressjuM0mqg = accounts[0]
		const uintA7gx1v5 = BigInt("1025")
		const addressrZ9Gskk = accounts[3]
		const addressFpzAuX = accounts[0]
		const addressDkYZI7Y = accounts[4]
		const uintKOgw4U1 = BigInt("49")
		const addresslQEU3Mj = accounts[1]
		const uintgmecKJ9 = BigInt("515")
		const addressLwKJeQp = accounts[3]
		const addressOsOKsxn = accounts[0]
		const uint96qa355h = await FompHaaPtPy.getCurrentVotes.call(addressFSNR0AL, {from: accounts[3]});
		const uint96un3zkKC = await FompHaaPtPy.getPriorVotes.call(addressSiZriag, uintfF3nclT, {from: accounts[2]});
		const boolNCpaxrr = await FompHaaPtPy.approve.call(addressUoFiXDd, uintLY0Wv7j, {from: accounts[0]});
		const boolr6K0zlq = await FompHaaPtPy.approve.call(addressKLTkpwI, uintCtROwwl, {from: accounts[3]});
		const uintZUTb1b = await FompHaaPtPy.balanceOf.call(addressQbFxpk7, {from: accounts[1]});
		const addressAcjvfyt = await FompHaaPtPy.delegateBySig.call(addressR3oWU5i, uintLypS1sQ, uintkjQ1Oc9, uintgTHN1hH, byteoi7FNO, bytefX0zVFB, {from: accounts[3]});
		const addressNmLw6V = await FompHaaPtPy.delegate.call(addressIIdrQuy, {from: accounts[3]});
		const uint96cQfcUdW = await FompHaaPtPy.getCurrentVotes.call(addressjuM0mqg, {from: accounts[3]});
		const boolMZ6GDV7 = await FompHaaPtPy.transferFrom.call(addressFpzAuX, addressrZ9Gskk, uintA7gx1v5, {from: accounts[3]});
		const uintZXfBe3w = await FompHaaPtPy.balanceOf.call(addressDkYZI7Y, {from: accounts[1]});
		const boolgrb3Qz = await FompHaaPtPy.transfer.call(addresslQEU3Mj, uintKOgw4U1, {from: accounts[0]});
		const boolhCWD4Fa = await FompHaaPtPy.transferFrom.call(addressOsOKsxn, addressLwKJeQp, uintgmecKJ9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNCpaxrr, true)
		assert.equal(boolr6K0zlq, true)
		assert.equal(uint96qa355h, BigInt("0"))
		assert.equal(uint96un3zkKC, BigInt("0"))
		assert.equal(uintZUTb1b, BigInt("0"))
		await expect(FompHaaPtPy.delegateBySig.call(addressR3oWU5i, uintLypS1sQ, uintkjQ1Oc9, uintgTHN1hH, byteoi7FNO, bytefX0zVFB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressACv52L2 = accounts[3]
		const FompHaaPtPy = await Fomp.new(addressACv52L2, {from: accounts[1]});
		const addressYowATMq = accounts[5]
		const uintc6Psucg = BigInt("61")
		const addressmiYEwq = accounts[0]
		const uintVFYWgO = BigInt("10")
		const addressQV0wGiP = accounts[1]
		const uintz4STwEA = BigInt("128")
		const addressss7QAwA = accounts[4]
		const addressOwzcZSl = accounts[3]
		const addressGrIOppA = accounts[4]
		const addressNWsaVB = accounts[2]
		const uinto5IQnux = BigInt("432")
		const addressOreP7AP = accounts[4]
		const addressVWFekLs = accounts[0]
		const uintr4odMiY = BigInt("1025")
		const addresscHfQh20 = accounts[3]
		const addressJazszqS = accounts[2]
		const addresscspFgv = accounts[5]
		const uintih9mNRp = BigInt("515")
		const addressmzBtNYS = accounts[3]
		const address1mYDYl = accounts[0]
		const uint96qa355h = await FompHaaPtPy.getCurrentVotes.call(addressYowATMq, {from: accounts[3]});
		const uint96un3zkKC = await FompHaaPtPy.getPriorVotes.call(addressmiYEwq, uintc6Psucg, {from: accounts[2]});
		const boolNCpaxrr = await FompHaaPtPy.approve.call(addressQV0wGiP, uintVFYWgO, {from: accounts[0]});
		const boolr6K0zlq = await FompHaaPtPy.approve.call(addressss7QAwA, uintz4STwEA, {from: accounts[3]});
		const uintZUTb1b = await FompHaaPtPy.balanceOf.call(addressOwzcZSl, {from: accounts[1]});
		const addressNmLw6V = await FompHaaPtPy.delegate.call(addressGrIOppA, {from: accounts[3]});
		const uint96pG2qyJK = await FompHaaPtPy.getCurrentVotes.call(addressNWsaVB, {from: accounts[1]});
		const boolzFLNsUa = await FompHaaPtPy.transfer.call(addressOreP7AP, uinto5IQnux, {from: accounts[3]});
		const uint96cQfcUdW = await FompHaaPtPy.getCurrentVotes.call(addressVWFekLs, {from: accounts[3]});
		const boolMZ6GDV7 = await FompHaaPtPy.transferFrom.call(addressJazszqS, addresscHfQh20, uintr4odMiY, {from: accounts[3]});
		const uintZXfBe3w = await FompHaaPtPy.balanceOf.call(addresscspFgv, {from: accounts[1]});
		const boolhCWD4Fa = await FompHaaPtPy.transferFrom.call(address1mYDYl, addressmzBtNYS, uintih9mNRp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNCpaxrr, true)
		assert.equal(boolr6K0zlq, true)
		assert.equal(boolzFLNsUa, true)
		assert.equal(uint96cQfcUdW, BigInt("0"))
		assert.equal(uint96pG2qyJK, BigInt("0"))
		assert.equal(uint96qa355h, BigInt("0"))
		assert.equal(uint96un3zkKC, BigInt("0"))
		assert.equal(uintZUTb1b, BigInt("1000000000000000000000000"))
		await expect(FompHaaPtPy.transferFrom.call(addressJazszqS, addresscHfQh20, uintr4odMiY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressRNn1lGS = accounts[2]
		const FompPDY6cz2 = await Fomp.new(addressRNn1lGS, {from: accounts[0]});
		const addressvibyyT6 = "0x0000000000000000000000000000000000000001"
		const addressLZvnP50 = accounts[4]
		const addressAa0jLXq = accounts[1]
		const bytewzUyhKx = "0x060011101803180c1e0805180d0c0818160d1802061d1d0b09101703131a090a"
		const bytegp2y8uy = "0x0c0f10161702110512150e11070f071a0e1d1d090e0d1911191d040e1e0a09ffffffff"
		const uintFc42Sdo = BigInt("52")
		const uintnyaPLH = BigInt("1531")
		const uintteQEhQD = BigInt("703")
		const addresszPYqOUp = accounts[0]
		const addressAQGU2pX = "0x0000000000000000000000000000000000000001"
		const uint9CGD3q = await FompPDY6cz2.allowance.call(addressLZvnP50, addressvibyyT6, {from: accounts[0]});
		const uint96Rmo4Kee = await FompPDY6cz2.getCurrentVotes.call(addressAa0jLXq, {from: accounts[5]});
		const addressyujnzzj = await FompPDY6cz2.delegateBySig.call(addresszPYqOUp, uintteQEhQD, uintnyaPLH, uintFc42Sdo, bytegp2y8uy, bytewzUyhKx, {from: accounts[0]});
		const uintn1BHARk = await FompPDY6cz2.balanceOf.call(addressAQGU2pX, {from: accounts[0]});

		assert.equal(uint96Rmo4Kee, BigInt("0"))
		assert.equal(uint9CGD3q, BigInt("0"))
		await expect(FompPDY6cz2.delegateBySig.call(addresszPYqOUp, uintteQEhQD, uintnyaPLH, uintFc42Sdo, bytegp2y8uy, bytewzUyhKx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})