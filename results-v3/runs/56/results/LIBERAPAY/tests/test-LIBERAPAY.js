const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYtFJhrbG = await LIBERAPAY.new({from: accounts[2]});
		const boolBbEzkSX = await LIBERAPAYtFJhrbG.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Kn76aT4 = await LIBERAPAYtFJhrbG.totalSupply.call({from: accounts[5]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY2y2BcT = await LIBERAPAY.new({from: accounts[0]});
		const addressXfDvbOJ = accounts[0]
		const addressOKN0yTL = accounts[1]
		const addressyHs5r5 = accounts[1]
		const addressRscEYcP = await LIBERAPAY2y2BcT.upgradeTo.call(addressXfDvbOJ, {from: accounts[0]});
		const uint256FnEroGV = await LIBERAPAY2y2BcT.balanceOf.call(addressOKN0yTL, {from: accounts[4]});
		await LIBERAPAY2y2BcT.unpause.call({from: accounts[3]});
		const uint256lMzCplt = await LIBERAPAY2y2BcT.currentBalanceOf.call(addressyHs5r5, {from: accounts[3]});
		await LIBERAPAY2y2BcT.unpause.call({from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYyDxyunr = await LIBERAPAY.new({from: accounts[5]});
		const uintp38HMNv = BigInt("226")
		const addressFhWezj2 = accounts[5]
		const addressqaZJNyR = accounts[5]
		const uintrBGbPt8 = BigInt("1252")
		const addressAQc2xzA = accounts[1]
		const addressa4Ve4q = accounts[2]
		const uintfAisowU = BigInt("1733")
		const addressFbBct2 = accounts[4]
		await LIBERAPAYyDxyunr.whenPaused.call({from: accounts[2]});
		await LIBERAPAYyDxyunr.showLockState.call(addressFhWezj2, uintp38HMNv, {from: accounts[2]});
		const uint256Ojpzdh8 = await LIBERAPAYyDxyunr.currentBalanceOf.call(addressqaZJNyR, {from: accounts[3]});
		const boolomhMx2j = await LIBERAPAYyDxyunr.transferFrom.call(addressa4Ve4q, addressAQc2xzA, uintrBGbPt8, {from: accounts[3]});
		await LIBERAPAYyDxyunr.showLockState.call(addressFbBct2, uintfAisowU, {from: accounts[3]});
		await LIBERAPAYyDxyunr.pause.call({from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIst6sLd = await LIBERAPAY.new({from: accounts[4]});
		const addressO4bYd9x = accounts[3]
		const uintRxcQG6f = BigInt("1330")
		const addresspo3Kq9e = accounts[1]
		const uintLPApGMi = BigInt("1750")
		const addresski1Xx62 = accounts[3]
		const uint256AhlnOlg = await LIBERAPAYIst6sLd.currentBalanceOf.call(addressO4bYd9x, {from: accounts[2]});
		const boolZSzmG67 = await LIBERAPAYIst6sLd.decreaseAllowance.call(addresspo3Kq9e, uintRxcQG6f, {from: accounts[1]});
		const boolKtx6AoZ = await LIBERAPAYIst6sLd.distribute.call(addresski1Xx62, uintLPApGMi, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfAUrL8E = await LIBERAPAY.new({from: accounts[0]});
		const uintc4d2P4 = BigInt("1373")
		const addressiAe6wqK = accounts[1]
		const uintYtL61ao = BigInt("840")
		const addressrwNBmDg = accounts[0]
		const boolTXxER9u = await LIBERAPAYfAUrL8E.increaseAllowance.call(addressiAe6wqK, uintc4d2P4, {from: accounts[4]});
		const boolYM1ndkv = await LIBERAPAYfAUrL8E.burnFrom.call(addressrwNBmDg, uintYtL61ao, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYfAUrL8E.whenNotPaused.call({from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYYr54ZA9 = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTRhjWBe = accounts[4]
		const uintyc9Dves = BigInt("161")
		const addressUXM319p = accounts[4]
		const boolNHsZxhp = await LIBERAPAYYr54ZA9.freezeAccount.call(addressTRhjWBe, {from: accounts[0]});
		await LIBERAPAYYr54ZA9.onlyNewOwner.call({from: accounts[0]});
		const boolS3G9m3q = await LIBERAPAYYr54ZA9.burnFrom.call(addressUXM319p, uintyc9Dves, {from: accounts[0]});
		await LIBERAPAYYr54ZA9.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256w7aIKmm = await LIBERAPAYYr54ZA9.getNowTime.call({from: accounts[3]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYyDxyunr = await LIBERAPAY.new({from: accounts[5]});
		const uintDLcIFqj = BigInt("250")
		const addressCUQzzSm = accounts[5]
		const addressgdJHGjT = accounts[5]
		const uintF0sFQWb = BigInt("1252")
		const addressAzbznb1 = accounts[1]
		const addresstbPQK7 = accounts[2]
		const uintxaC7FuW = BigInt("1733")
		const addressaIUV6Y = accounts[4]
		const uintXuyv0cU = BigInt("1297")
		const uintP4oSxh5 = BigInt("861")
		const addressaPLn27 = accounts[1]
		const addressjVfRzJe = accounts[1]
		await LIBERAPAYyDxyunr.showLockState.call(addressCUQzzSm, uintDLcIFqj, {from: accounts[2]});
		const uint256Ojpzdh8 = await LIBERAPAYyDxyunr.currentBalanceOf.call(addressgdJHGjT, {from: accounts[3]});
		const boolomhMx2j = await LIBERAPAYyDxyunr.transferFrom.call(addresstbPQK7, addressAzbznb1, uintF0sFQWb, {from: accounts[3]});
		await LIBERAPAYyDxyunr.whenNotPaused.call({from: accounts[3]});
		await LIBERAPAYyDxyunr.showLockState.call(addressaIUV6Y, uintxaC7FuW, {from: accounts[3]});
		await LIBERAPAYyDxyunr.whenPaused.call({from: accounts[4]});
		const boolnqxCHMg = await LIBERAPAYyDxyunr.lock.call(addressaPLn27, uintP4oSxh5, uintXuyv0cU, {from: accounts[3]});
		await LIBERAPAYyDxyunr.pause.call({from: accounts[1]});
		const uint256lMfIEM = await LIBERAPAYyDxyunr.currentBalanceOf.call(addressjVfRzJe, {from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYaiJLHp = await LIBERAPAY.new({from: accounts[1]});
		const addressr29xnb = accounts[2]
		const uint256E0h5c6A = await LIBERAPAYaiJLHp.balanceOf.call(addressr29xnb, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYaiJLHp.f.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIst6sLd = await LIBERAPAY.new({from: accounts[4]});
		const addressBf8RfI0 = accounts[3]
		const uintAxov2C4 = BigInt("1330")
		const addressqfJPZBZ = accounts[1]
		const uintyHX78jA = BigInt("1750")
		const addressudcSlPH = accounts[3]
		const uint256qzvsyC7 = await LIBERAPAYIst6sLd.totalSupply.call({from: accounts[1]});
		const uint256AhlnOlg = await LIBERAPAYIst6sLd.currentBalanceOf.call(addressBf8RfI0, {from: accounts[2]});
		const boolZSzmG67 = await LIBERAPAYIst6sLd.decreaseAllowance.call(addressqfJPZBZ, uintAxov2C4, {from: accounts[1]});
		const boolKtx6AoZ = await LIBERAPAYIst6sLd.distribute.call(addressudcSlPH, uintyHX78jA, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAaHKNMK = await LIBERAPAY.new({from: accounts[3]});
		const addresse9aUTIQ = accounts[4]
		const uintuHpeD0A = BigInt("677")
		const address0mmSKH = accounts[4]
		const uintYjyjVub = BigInt("1146")
		const addresss6EbZSh = accounts[2]
		const uintOxWcdI5 = BigInt("703")
		const addressPSEIgS = accounts[1]
		const addressL028dH = accounts[0]
		const addressqZ2KDhm = accounts[5]
		const uintniRx3uT = BigInt("1143")
		await LIBERAPAYAaHKNMK.pause.call({from: accounts[3]});
		const uint256gdiSWZr = await LIBERAPAYAaHKNMK.balanceOf.call(addresse9aUTIQ, {from: accounts[3]});
		const boolpsYCIQD = await LIBERAPAYAaHKNMK.increaseAllowance.call(address0mmSKH, uintuHpeD0A, {from: accounts[0]});
		const bool0mdDzY = await LIBERAPAYAaHKNMK.distribute.call(addresss6EbZSh, uintYjyjVub, {from: accounts[3]});
		const boolnTe2aa3 = await LIBERAPAYAaHKNMK.transferFrom.call(addressL028dH, addressPSEIgS, uintOxWcdI5, {from: accounts[2]});
		await LIBERAPAYAaHKNMK.pause.call({from: accounts[4]});
		const addressEDMjCE = await LIBERAPAYAaHKNMK.notFrozen.call(addressqZ2KDhm, {from: accounts[3]});
		await LIBERAPAYAaHKNMK.whenPaused.call({from: accounts[2]});
		const boolYVKPcMb = await LIBERAPAYAaHKNMK.burn.call(uintniRx3uT, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY0ZUF2v = await LIBERAPAY.new({from: accounts[3]});
		const addresshxHuUpX = accounts[3]
		const addressmwXwnd = accounts[1]
		const uintFo6qlOy = BigInt("1200")
		const addressQDxb09h = "0x0000000000000000000000000000000000000001"
		const boolRjjPui4 = await LIBERAPAY0ZUF2v.freezeAccount.call(addresshxHuUpX, {from: accounts[3]});
		const addressK4NKtHN = await LIBERAPAY0ZUF2v.upgradeTo.call(addressmwXwnd, {from: accounts[2]});
		await LIBERAPAY0ZUF2v.onlyOwner.call({from: accounts[4]});
		const boolzZ5znUG = await LIBERAPAY0ZUF2v.approve.call(addressQDxb09h, uintFo6qlOy, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYtFJhrbG = await LIBERAPAY.new({from: accounts[2]});
		const addressI4Y9uon = "0x0000000000000000000000000000000000000001"
		const uintCH2genW = BigInt("1578")
		const addressoiKuVd = accounts[1]
		const uint256igyufvV = await LIBERAPAYtFJhrbG.currentBalanceOf.call(addressI4Y9uon, {from: accounts[0]});
		const uint256LaMDQDE = await LIBERAPAYtFJhrbG.getNowTime.call({from: accounts[4]});
		const boolBbEzkSX = await LIBERAPAYtFJhrbG.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boolzwV2L8L = await LIBERAPAYtFJhrbG.burnFrom.call(addressoiKuVd, uintCH2genW, {from: accounts[2]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYRgTsYci = await LIBERAPAY.new({from: accounts[0]});
		const uintG3cEs2K = BigInt("497")
		const addressuaJqrDs = accounts[1]
		const uintps1UNK = BigInt("1647")
		const addresseGeF6lD = accounts[3]
		const boolF0fS8OD = await LIBERAPAYRgTsYci.approve.call(addressuaJqrDs, uintG3cEs2K, {from: accounts[4]});
		const uint256XqiXBYH = await LIBERAPAYRgTsYci.getNowTime.call({from: accounts[2]});
		const boolqEovEbR = await LIBERAPAYRgTsYci.mint.call(addresseGeF6lD, uintps1UNK, {from: accounts[5]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYtFJhrbG = await LIBERAPAY.new({from: accounts[2]});
		const uintkG2fgYq = BigInt("287")
		const addressDpegxwA = accounts[3]
		const uintXDWZfQs = BigInt("1757")
		const addressSsC7NS = accounts[5]
		const boolCLJVE52 = await LIBERAPAYtFJhrbG.unlock.call(addressDpegxwA, uintkG2fgYq, {from: accounts[2]});
		await LIBERAPAYtFJhrbG.unpause.call({from: accounts[5]});
		await LIBERAPAYtFJhrbG.showLockState.call(addressSsC7NS, uintXDWZfQs, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYaiJLHp = await LIBERAPAY.new({from: accounts[1]});
		const addressQtmElkt = accounts[3]
		const uintAUym3Cn = BigInt("18")
		const addressvNXicOf = accounts[2]
		const uint256E0h5c6A = await LIBERAPAYaiJLHp.balanceOf.call(addressQtmElkt, {from: "0x0000000000000000000000000000000000000001"});
		const boolFSvbb46 = await LIBERAPAYaiJLHp.transfer.call(addressvNXicOf, uintAUym3Cn, {from: accounts[3]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYaiJLHp = await LIBERAPAY.new({from: accounts[1]});
		const uintdsMQt5y = BigInt("1244")
		const addressYHXfef = accounts[3]
		const boolQy8IzDk = await LIBERAPAYaiJLHp.burn.call(uintdsMQt5y, {from: accounts[1]});
		const uint256E0h5c6A = await LIBERAPAYaiJLHp.balanceOf.call(addressYHXfef, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYaiJLHp = await LIBERAPAY.new({from: accounts[1]});
		const addressHpEkTHC = accounts[4]
		const uintl3qdI9q = BigInt("1177")
		const address7b3q13 = "0x0000000000000000000000000000000000000001"
		const addressmSMsgx = accounts[3]
		const uintduYpz2X = BigInt("18")
		const addresswTqobj = accounts[2]
		const addressO6qRTSB = await LIBERAPAYaiJLHp.transferOwnership.call(addressHpEkTHC, {from: accounts[1]});
		const booleduoYVw = await LIBERAPAYaiJLHp.distribute.call(address7b3q13, uintl3qdI9q, {from: accounts[4]});
		const uint256E0h5c6A = await LIBERAPAYaiJLHp.balanceOf.call(addressmSMsgx, {from: "0x0000000000000000000000000000000000000001"});
		const boolFSvbb46 = await LIBERAPAYaiJLHp.transfer.call(addresswTqobj, uintduYpz2X, {from: accounts[3]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYtFJhrbG = await LIBERAPAY.new({from: accounts[2]});
		const uint6A2626 = BigInt("1971")
		const uintUTMdrQY = BigInt("1989")
		const addressjJ200wa = accounts[2]
		const uintST0pBgU = BigInt("1963")
		const addresstmC1tQK = accounts[3]
		const addressCMCZe7r = "0x0000000000000000000000000000000000000002"
		const boolnbmuJtT = await LIBERAPAYtFJhrbG.lock.call(addressjJ200wa, uintUTMdrQY, uint6A2626, {from: accounts[2]});
		const boolxmAxb2W = await LIBERAPAYtFJhrbG.transfer.call(addresstmC1tQK, uintST0pBgU, {from: accounts[3]});
		const uint256igyufvV = await LIBERAPAYtFJhrbG.currentBalanceOf.call(addressCMCZe7r, {from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYaiJLHp = await LIBERAPAY.new({from: accounts[1]});
		const addressZZVqSil = accounts[4]
		const uintHH3R9BH = BigInt("0")
		const addresskm1tsz = accounts[3]
		const uint256E0h5c6A = await LIBERAPAYaiJLHp.balanceOf.call(addressZZVqSil, {from: "0x0000000000000000000000000000000000000001"});
		const boolFSvbb46 = await LIBERAPAYaiJLHp.transfer.call(addresskm1tsz, uintHH3R9BH, {from: accounts[3]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYtFJhrbG = await LIBERAPAY.new({from: accounts[2]});
		const addressFBKblQD = "0x0000000000000000000000000000000000000001"
		const addressjSLg3cr = accounts[2]
		const uint256igyufvV = await LIBERAPAYtFJhrbG.currentBalanceOf.call(addressFBKblQD, {from: accounts[0]});
		const booleTqDEr = await LIBERAPAYtFJhrbG.unfreezeAccount.call(addressjSLg3cr, {from: accounts[2]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYaiJLHp = await LIBERAPAY.new({from: accounts[1]});
		const uintEmSuMa4 = BigInt("983")
		const addressy6VoQcm = "0x0000000000000000000000000000000000000001"
		const addresskXo9a2t = accounts[1]
		const uintPN14dp5 = BigInt("1115")
		const addressuNweJaB = accounts[4]
		const uintKDwbB8N = BigInt("1222")
		const addressS1Rjc0 = accounts[2]
		const boolASVAmZG = await LIBERAPAYaiJLHp.transferFrom.call(addresskXo9a2t, addressy6VoQcm, uintEmSuMa4, {from: accounts[2]});
		const booloRRx3Bj = await LIBERAPAYaiJLHp.distribute.call(addressuNweJaB, uintPN14dp5, {from: accounts[4]});
		const boolFSvbb46 = await LIBERAPAYaiJLHp.transfer.call(addressS1Rjc0, uintKDwbB8N, {from: accounts[3]});
		await LIBERAPAYaiJLHp.whenNotPaused.call({from: accounts[2]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYaiJLHp = await LIBERAPAY.new({from: accounts[1]});
		const uintsSY2RV = BigInt("1975")
		const addresszabklyG = accounts[4]
		const uintR4ECc4W = BigInt("3")
		const addressx6bkPBD = accounts[3]
		const boolidDhQNU = await LIBERAPAYaiJLHp.mint.call(addresszabklyG, uintsSY2RV, {from: accounts[1]});
		const boolFSvbb46 = await LIBERAPAYaiJLHp.transfer.call(addressx6bkPBD, uintR4ECc4W, {from: accounts[3]});
	});
})