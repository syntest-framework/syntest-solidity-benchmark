const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringMBeY2uL = "ZrI7xhoNKN29BXHVQU7KWVd3JpQe74VK"
		const stringxcvtf3L = "UrBHaVCuPcILaSMEULGBLIagz7UdF6yCPYGJ"
		const uintYLe4wv = BigInt("121")
		const TPAHih5ekK = await TPA.new(stringMBeY2uL, stringxcvtf3L, uintYLe4wv, {from: "0x0000000000000000000000000000000000000001"});
		const addressWl56xYD = accounts[0]
		const uintwNv0nhK = BigInt("1794")
		const addressgiKTK3 = accounts[2]
		const addressEvL6Ze1 = accounts[2]
		const addressJwmkCOZ = await TPAHih5ekK.notFrozen.call(addressWl56xYD, {from: accounts[2]});
		const boolQHuqpbO = await TPAHih5ekK.decreaseAllowance.call(addressgiKTK3, uintwNv0nhK, {from: accounts[4]});
		const addressQTTVEhX = await TPAHih5ekK.transferOwnership.call(addressEvL6Ze1, {from: accounts[3]});
	});

	it('test for TPA', async () => {
		const TPAjy0kq8T = await TPA.new({from: accounts[1]});
		const uintuc4OAjK = BigInt("1669")
		const uinttqvngum = BigInt("1708")
		const addressEtstdL = accounts[4]
		const addressnACGHco = accounts[1]
		const addresscjLgJcL = accounts[4]
		const uintBMX63s = BigInt("227")
		const addressKEpiA0B = accounts[2]
//		const boolVrAmSV7 = await TPAjy0kq8T.lock.call(addressEtstdL, uinttqvngum, uintuc4OAjK, {from: accounts[2]});
//		await TPAjy0kq8T.whenPaused.call({from: accounts[1]});
//		const addresstXfNHCh = await TPAjy0kq8T.addAdmin.call(addressnACGHco, {from: accounts[2]});
//		const uint25646Ml2v = await TPAjy0kq8T.balanceOf.call(addresscjLgJcL, {from: accounts[2]});
//		const boolrclG4bY = await TPAjy0kq8T.decreaseAllowance.call(addressKEpiA0B, uintBMX63s, {from: accounts[0]});

		await expect(TPAjy0kq8T.lock.call(addressEtstdL, uinttqvngum, uintuc4OAjK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAeTdNAQH = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNiQGBlX = BigInt("1572")
		const addressSxDEMn7 = accounts[2]
		const uintUHaDif2 = BigInt("896")
		const addressmlBGFPg = "0x0000000000000000000000000000000000000001"
		const boolHrA4iG6 = await TPAeTdNAQH.decreaseAllowance.call(addressSxDEMn7, uintNiQGBlX, {from: accounts[3]});
		const booluUPsrVs = await TPAeTdNAQH.unlock.call(addressmlBGFPg, uintUHaDif2, {from: accounts[2]});
	});

	it('test for TPA', async () => {
		const TPAjy0kq8T = await TPA.new({from: accounts[1]});
		const uintuqMmLAA = BigInt("982")
		const addressEzlijrC = "0x0000000000000000000000000000000000000001"
		const uintM2hmduq = BigInt("1669")
		const uintGn5G9rf = BigInt("1708")
		const addressmbPlXnl = accounts[4]
		const uintZQkZXZd = BigInt("783")
		const addressMPAAcrd = accounts[3]
		const addressyfZRXXS = accounts[4]
		const uintbPF7IjO = BigInt("785")
		const addressPmaqR5L = accounts[4]
		const addressKNjxnS = accounts[1]
		const addressJrSRtfV = accounts[4]
		const uintNd77YSV = BigInt("227")
		const addressR12s1Mv = accounts[3]
//		const boolib3RyeA = await TPAjy0kq8T.transfer.call(addressEzlijrC, uintuqMmLAA, {from: "0x0000000000000000000000000000000000000001"});
//		const boolVrAmSV7 = await TPAjy0kq8T.lock.call(addressmbPlXnl, uintGn5G9rf, uintM2hmduq, {from: accounts[2]});
//		const boolFEbg660 = await TPAjy0kq8T.transferFrom.call(addressyfZRXXS, addressMPAAcrd, uintZQkZXZd, {from: accounts[0]});
//		const boolVVZI2ix = await TPAjy0kq8T.approve.call(addressPmaqR5L, uintbPF7IjO, {from: accounts[0]});
//		await TPAjy0kq8T.whenPaused.call({from: accounts[1]});
//		const addresstXfNHCh = await TPAjy0kq8T.addAdmin.call(addressKNjxnS, {from: accounts[2]});
//		const uint25646Ml2v = await TPAjy0kq8T.balanceOf.call(addressJrSRtfV, {from: accounts[2]});
//		const boolrclG4bY = await TPAjy0kq8T.decreaseAllowance.call(addressR12s1Mv, uintNd77YSV, {from: accounts[0]});

		await expect(TPAjy0kq8T.transfer.call(addressEzlijrC, uintuqMmLAA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAjy0kq8T = await TPA.new({from: accounts[1]});
		const uintifPxJwa = BigInt("1669")
		const uintzTR6jmp = BigInt("1708")
		const addressXUyNFxv = accounts[5]
		const addressIRFKOPt = accounts[1]
		const addressw1FGz68 = accounts[5]
		const uintNcZ3x3R = BigInt("227")
		const addressG3Y1pU0 = accounts[2]
//		await TPAjy0kq8T.whenPaused.call({from: accounts[3]});
//		const boolVrAmSV7 = await TPAjy0kq8T.lock.call(addressXUyNFxv, uintzTR6jmp, uintifPxJwa, {from: accounts[2]});
//		await TPAjy0kq8T.whenPaused.call({from: accounts[1]});
//		const addresstXfNHCh = await TPAjy0kq8T.addAdmin.call(addressIRFKOPt, {from: accounts[2]});
//		const uint25646Ml2v = await TPAjy0kq8T.balanceOf.call(addressw1FGz68, {from: accounts[2]});
//		const boolrclG4bY = await TPAjy0kq8T.decreaseAllowance.call(addressG3Y1pU0, uintNcZ3x3R, {from: accounts[0]});

		await expect(TPAjy0kq8T.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAjy0kq8T = await TPA.new({from: accounts[1]});
		const uintrVSaELw = BigInt("1399")
		const addressOi5vTx = accounts[4]
		const addresshvbaC6 = accounts[3]
		const uintASmm3qZ = BigInt("1669")
		const uintN2hur5 = BigInt("1708")
		const addressvgR7quW = accounts[4]
		const addressQbGSI8N = accounts[1]
		const addressWx0W6nb = accounts[4]
		const addressyXgwgfg = accounts[3]
		const uintf2SqmRI = BigInt("227")
		const addressAuWj15C = accounts[2]
//		const boolFkWTOL = await TPAjy0kq8T.transferFrom.call(addresshvbaC6, addressOi5vTx, uintrVSaELw, {from: accounts[1]});
//		const boolVrAmSV7 = await TPAjy0kq8T.lock.call(addressvgR7quW, uintN2hur5, uintASmm3qZ, {from: accounts[2]});
//		await TPAjy0kq8T.whenPaused.call({from: accounts[1]});
//		const addresstXfNHCh = await TPAjy0kq8T.addAdmin.call(addressQbGSI8N, {from: accounts[2]});
//		const uint25646Ml2v = await TPAjy0kq8T.balanceOf.call(addressWx0W6nb, {from: accounts[2]});
//		const boolnHe98Hl = await TPAjy0kq8T.isOwner.call(addressyXgwgfg, {from: accounts[2]});
//		const boolrclG4bY = await TPAjy0kq8T.decreaseAllowance.call(addressAuWj15C, uintf2SqmRI, {from: accounts[0]});

		await expect(TPAjy0kq8T.transferFrom.call(addresshvbaC6, addressOi5vTx, uintrVSaELw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAUhIZsnl = await TPA.new({from: accounts[2]});
		const addressxfDMrZg = accounts[2]
		const uintWvsBhXY = BigInt("2011")
		const addressg5EeWwK = accounts[2]
		const uintSTbhJa = BigInt("197")
		const addressLD8V4u = accounts[2]
		const boolO8s6cjK = await TPAUhIZsnl.isOwner.call(addressxfDMrZg, {from: accounts[0]});
		const uint8XWwVodg = await TPAUhIZsnl.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolCiJboD4 = await TPAUhIZsnl.decreaseAllowance.call(addressg5EeWwK, uintWvsBhXY, {from: accounts[0]});
//		const booli1nzp80 = await TPAUhIZsnl.approve.call(addressLD8V4u, uintSTbhJa, {from: accounts[5]});

		assert.equal(boolO8s6cjK, true)
		assert.equal(uint8XWwVodg, BigInt("18"))
		await expect(TPAUhIZsnl.decreaseAllowance.call(addressg5EeWwK, uintWvsBhXY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAjy0kq8T = await TPA.new({from: accounts[1]});
		const uintAvylOvT = BigInt("1399")
		const addressBsdBZlD = accounts[4]
		const addressRBwNFCf = accounts[3]
		const uintEioiHJG = BigInt("1669")
		const uintINE76C8 = BigInt("1708")
		const addressfwxQg46 = accounts[4]
		const addressK4kn6S4 = accounts[1]
		const addressqCmlQII = accounts[4]
		const addressthsPp4O = accounts[5]
		const addressl5AHCr7 = accounts[4]
		const uintXocTaf7 = BigInt("227")
		const addressNkUAk7E = accounts[2]
//		await TPAjy0kq8T.renounceAdmin.call({from: accounts[0]});
//		const boolFkWTOL = await TPAjy0kq8T.transferFrom.call(addressRBwNFCf, addressBsdBZlD, uintAvylOvT, {from: accounts[1]});
//		const boolVrAmSV7 = await TPAjy0kq8T.lock.call(addressfwxQg46, uintINE76C8, uintEioiHJG, {from: accounts[2]});
//		await TPAjy0kq8T.whenPaused.call({from: accounts[1]});
//		const addresstXfNHCh = await TPAjy0kq8T.addAdmin.call(addressK4kn6S4, {from: accounts[2]});
//		const boole0XZbjI = await TPAjy0kq8T.paused.call({from: accounts[0]});
//		const uint25646Ml2v = await TPAjy0kq8T.balanceOf.call(addressqCmlQII, {from: accounts[2]});
//		const boolR6jBeDG = await TPAjy0kq8T.unfreezeAccount.call(addressthsPp4O, {from: accounts[5]});
//		const boolnHe98Hl = await TPAjy0kq8T.isOwner.call(addressl5AHCr7, {from: accounts[2]});
//		const boolrclG4bY = await TPAjy0kq8T.decreaseAllowance.call(addressNkUAk7E, uintXocTaf7, {from: accounts[0]});

		await expect(TPAjy0kq8T.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAr4wU8sr = await TPA.new({from: accounts[1]});
		const addressjZckgeT = accounts[4]
		const uintvHpUkIZ = BigInt("99")
		const addressPlZkH16 = accounts[0]
		const uint256IFQTaTH = await TPAr4wU8sr.balanceOf.call(addressjZckgeT, {from: "0x0000000000000000000000000000000000000001"});
//		await TPAr4wU8sr.unpause.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolNk2RbYE = await TPAr4wU8sr.decreaseAllowance.call(addressPlZkH16, uintvHpUkIZ, {from: accounts[0]});

		assert.equal(uint256IFQTaTH, BigInt("0"))
		await expect(TPAr4wU8sr.unpause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAr4wU8sr = await TPA.new({from: accounts[1]});
		const addresszCEn02 = accounts[5]
		const uintmJfdczA = BigInt("99")
		const addressYdJFBTe = accounts[0]
		const uintveoC897 = BigInt("619")
		const address0nNRHb = accounts[2]
		const addresseBIKusb = accounts[0]
		const addressd3L4ZDg = accounts[1]
		const addresspng9kft = accounts[4]
		const uint256IFQTaTH = await TPAr4wU8sr.balanceOf.call(addresszCEn02, {from: "0x0000000000000000000000000000000000000001"});
		const stringVZuCyQb = await TPAr4wU8sr.name.call({from: accounts[2]});
//		const boolNk2RbYE = await TPAr4wU8sr.decreaseAllowance.call(addressYdJFBTe, uintmJfdczA, {from: accounts[0]});
//		const boolVfaxXuJ = await TPAr4wU8sr.transfer.call(address0nNRHb, uintveoC897, {from: accounts[1]});
//		const uint256GJpwsuR = await TPAr4wU8sr.balanceOf.call(addresseBIKusb, {from: accounts[1]});
//		const uint256SXftCLt = await TPAr4wU8sr.allowance.call(addresspng9kft, addressd3L4ZDg, {from: accounts[3]});

		assert.equal(stringVZuCyQb, "TPA")
		assert.equal(uint256IFQTaTH, BigInt("0"))
		await expect(TPAr4wU8sr.decreaseAllowance.call(addressYdJFBTe, uintmJfdczA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAr4wU8sr = await TPA.new({from: accounts[1]});
		const uintd7DQ38F = BigInt("2035")
		const addressN701qXj = accounts[5]
		const uintjavoxiQ = BigInt("99")
		const addressE1R3u6d = accounts[0]
		const uintbNQJNJL = BigInt("619")
		const addresswic8Yyo = accounts[2]
		const addressDXdUxiE = accounts[0]
		const addressLSKQyvj = accounts[1]
		const addresstD9ZRhP = accounts[4]
//		const uint256HalrqRm = await TPAr4wU8sr.burn.call(uintd7DQ38F, {from: accounts[5]});
//		const uint256IFQTaTH = await TPAr4wU8sr.balanceOf.call(addressN701qXj, {from: "0x0000000000000000000000000000000000000001"});
//		const stringVZuCyQb = await TPAr4wU8sr.name.call({from: accounts[2]});
//		const boolNk2RbYE = await TPAr4wU8sr.decreaseAllowance.call(addressE1R3u6d, uintjavoxiQ, {from: accounts[0]});
//		const boolVfaxXuJ = await TPAr4wU8sr.transfer.call(addresswic8Yyo, uintbNQJNJL, {from: accounts[1]});
//		const uint256GJpwsuR = await TPAr4wU8sr.balanceOf.call(addressDXdUxiE, {from: accounts[1]});
//		const uint256SXftCLt = await TPAr4wU8sr.allowance.call(addresstD9ZRhP, addressLSKQyvj, {from: accounts[3]});

		await expect(TPAr4wU8sr.burn.call(uintd7DQ38F, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAjy0kq8T = await TPA.new({from: accounts[1]});
		const uintphfO8Zi = BigInt("1967")
		const addressWiWqSrn = accounts[2]
		const uintgJoZYdj = BigInt("982")
		const addressbqVVVvw = "0x0000000000000000000000000000000000000001"
		const uintD57lBVF = BigInt("1669")
		const uintl98AG8O = BigInt("1708")
		const addressaXEvbq6 = accounts[5]
		const uintEVGfIpZ = BigInt("785")
		const addressuF56PTb = accounts[4]
		const addressYS2xnBz = accounts[3]
		const addressWorG20B = accounts[4]
		const uintAIUJrRq = BigInt("1294")
		const addressiA4DSDl = accounts[0]
		const addressjHIBF5h = accounts[1]
		const uintkHwGmiH = BigInt("1873")
		const uintlVtBx9t = BigInt("1035")
		const addressEzWPg27 = accounts[0]
		const uintlgjIVOx = BigInt("227")
		const addressAThIp7q = accounts[4]
		const boolIJI66dK = await TPAjy0kq8T.approve.call(addressWiWqSrn, uintphfO8Zi, {from: "0x0000000000000000000000000000000000000001"});
//		const boolib3RyeA = await TPAjy0kq8T.transfer.call(addressbqVVVvw, uintgJoZYdj, {from: "0x0000000000000000000000000000000000000001"});
//		const boolVrAmSV7 = await TPAjy0kq8T.lock.call(addressaXEvbq6, uintl98AG8O, uintD57lBVF, {from: accounts[2]});
//		const boolZCHf3x = await TPAjy0kq8T.paused.call({from: accounts[1]});
//		const boolVVZI2ix = await TPAjy0kq8T.approve.call(addressuF56PTb, uintEVGfIpZ, {from: accounts[0]});
//		const uint256NZYvjxJ = await TPAjy0kq8T.allowance.call(addressWorG20B, addressYS2xnBz, {from: accounts[2]});
//		const bool2oHKG2 = await TPAjy0kq8T.increaseAllowance.call(addressiA4DSDl, uintAIUJrRq, {from: accounts[0]});
//		const uint256ohALwJg = await TPAjy0kq8T.balanceOf.call(addressjHIBF5h, {from: accounts[3]});
//		await TPAjy0kq8T.whenPaused.call({from: accounts[1]});
//		const boole2TNdp = await TPAjy0kq8T.lock.call(addressEzWPg27, uintlVtBx9t, uintkHwGmiH, {from: accounts[0]});
//		await TPAjy0kq8T.onlyAdmin.call({from: accounts[4]});
//		const boolrclG4bY = await TPAjy0kq8T.decreaseAllowance.call(addressAThIp7q, uintlgjIVOx, {from: accounts[0]});
//		const uint256SCyZdQc = await TPAjy0kq8T.totalSupply.call({from: accounts[4]});

		assert.equal(boolIJI66dK, true)
		await expect(TPAjy0kq8T.transfer.call(addressbqVVVvw, uintgJoZYdj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPABxTU2mS = await TPA.new({from: accounts[0]});
		const addressyjJh9V = accounts[4]
		const uintjbyuhh = BigInt("621")
		const addresscury4oo = accounts[0]
		const addressuehsib = accounts[1]
		const addressMrnhmdm = accounts[4]
		const boolYr0HJF = await TPABxTU2mS.isAdmin.call(addressyjJh9V, {from: accounts[4]});
		const boolleh38co = await TPABxTU2mS.transfer.call(addresscury4oo, uintjbyuhh, {from: accounts[0]});
		const addressC2Dq4TZ = await TPABxTU2mS.transferOwnership.call(addressuehsib, {from: accounts[0]});
//		const boolf8eUVnl = await TPABxTU2mS.freezeAccount.call(addressMrnhmdm, {from: accounts[4]});

		assert.equal(boolYr0HJF, false)
		assert.equal(boolleh38co, true)
		await expect(TPABxTU2mS.freezeAccount.call(addressMrnhmdm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAb3RKiTn = await TPA.new({from: accounts[1]});
		const addressmEacLwU = "0x0000000000000000000000000000000000000001"
		const addressr7caqC0 = accounts[4]
		const uintVyredGb = BigInt("2015")
		const addressa3Yqzsh = accounts[5]
		const uintmlN7LeW = BigInt("801")
		const addresslm9XZy = accounts[3]
		const addressU5xNRVP = accounts[4]
		const uintjexirF8 = BigInt("1621")
		const uinttpKRY5P = BigInt("1437")
		const addressxuazjSi = accounts[0]
		const uintTHkN1gw = BigInt("610")
		const address312U24 = accounts[3]
		const uint256pXIofLg = await TPAb3RKiTn.allowance.call(addressr7caqC0, addressmEacLwU, {from: accounts[4]});
		const boolj6oC5oZ = await TPAb3RKiTn.approve.call(addressa3Yqzsh, uintVyredGb, {from: accounts[3]});
//		const booldIl2Vpw = await TPAb3RKiTn.transferFrom.call(addressU5xNRVP, addresslm9XZy, uintmlN7LeW, {from: accounts[2]});
//		const boolmhbwbbM = await TPAb3RKiTn.lock.call(addressxuazjSi, uinttpKRY5P, uintjexirF8, {from: accounts[1]});
//		const boolKl5UWQ = await TPAb3RKiTn.increaseAllowance.call(address312U24, uintTHkN1gw, {from: accounts[4]});
//		const stringqCZDHea = await TPAb3RKiTn.symbol.call({from: accounts[0]});
//		const boolEQEwGaz = await TPAb3RKiTn.paused.call({from: accounts[3]});
//		const uint8zLtryi = await TPAb3RKiTn.decimals.call({from: accounts[1]});

		assert.equal(boolj6oC5oZ, true)
		assert.equal(uint256pXIofLg, BigInt("0"))
		await expect(TPAb3RKiTn.transferFrom.call(addressU5xNRVP, addresslm9XZy, uintmlN7LeW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAb3RKiTn = await TPA.new({from: accounts[1]});
		const uintMUy1ya = BigInt("583")
		const addressgsMZku = accounts[2]
		const addressmqy8kKN = accounts[4]
		const addressF1wBNl = accounts[2]
		const boolKl5UWQ = await TPAb3RKiTn.increaseAllowance.call(addressgsMZku, uintMUy1ya, {from: accounts[4]});
		const stringqCZDHea = await TPAb3RKiTn.symbol.call({from: accounts[0]});
		const uint256j2R7AgR = await TPAb3RKiTn.allowance.call(addressF1wBNl, addressmqy8kKN, {from: accounts[4]});
		const uint8zLtryi = await TPAb3RKiTn.decimals.call({from: accounts[1]});

		assert.equal(boolKl5UWQ, true)
		assert.equal(stringqCZDHea, "TPA")
		assert.equal(uint256j2R7AgR, BigInt("0"))
		assert.equal(uint8zLtryi, BigInt("18"))
	});

	it('test for TPA', async () => {
		const TPABxTU2mS = await TPA.new({from: accounts[0]});
		const addressyXDmoM = accounts[1]
		const uintGbknd7V = BigInt("623")
		const addressUF3XdhN = accounts[0]
		const uintRiaaWts = BigInt("477")
		const uintlhyYSjc = BigInt("612")
		const addressVcssb4y = accounts[4]
		const uintvdJrkx2 = BigInt("1931")
		const addressjkkrEu = accounts[3]
		const addressRNDvaz = accounts[6]
		const boolAJdSBrz = await TPABxTU2mS.isOwner.call(addressyXDmoM, {from: accounts[4]});
		const boolleh38co = await TPABxTU2mS.transfer.call(addressUF3XdhN, uintGbknd7V, {from: accounts[0]});
//		const boolDB78SN = await TPABxTU2mS.lock.call(addressVcssb4y, uintlhyYSjc, uintRiaaWts, {from: accounts[0]});
//		const boolguto2fW = await TPABxTU2mS.transfer.call(addressjkkrEu, uintvdJrkx2, {from: accounts[1]});
//		const boolf8eUVnl = await TPABxTU2mS.freezeAccount.call(addressRNDvaz, {from: accounts[4]});
//		await TPABxTU2mS.onlyOwner.call({from: accounts[3]});

		assert.equal(boolAJdSBrz, false)
		assert.equal(boolleh38co, true)
		await expect(TPABxTU2mS.lock.call(addressVcssb4y, uintlhyYSjc, uintRiaaWts, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAb3RKiTn = await TPA.new({from: accounts[1]});
		const uintwbTzfU9 = BigInt("1461")
		const addressOlPoiwa = accounts[4]
		const uintb63hcKi = BigInt("801")
		const addressC4I3QHb = accounts[4]
		const addressiSIpwSk = accounts[5]
		const uint256bJKv8Us = await TPAb3RKiTn.totalSupply.call({from: accounts[3]});
		const boolRMnZqxU = await TPAb3RKiTn.approve.call(addressOlPoiwa, uintwbTzfU9, {from: accounts[2]});
//		const booldIl2Vpw = await TPAb3RKiTn.transferFrom.call(addressiSIpwSk, addressC4I3QHb, uintb63hcKi, {from: accounts[2]});

		assert.equal(boolRMnZqxU, true)
		assert.equal(uint256bJKv8Us, BigInt("10000000000000000000000000000"))
		await expect(TPAb3RKiTn.transferFrom.call(addressiSIpwSk, addressC4I3QHb, uintb63hcKi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPABxTU2mS = await TPA.new({from: accounts[0]});
		const boolqFSXE7a = await TPABxTU2mS.paused.call({from: accounts[0]});
		const stringadX1kbu = await TPABxTU2mS.symbol.call({from: accounts[5]});

		assert.equal(boolqFSXE7a, false)
		assert.equal(stringadX1kbu, "TPA")
	});

	it('test for TPA', async () => {
		const TPABxTU2mS = await TPA.new({from: accounts[0]});
		const uintzkXQwY = BigInt("601")
		const addressjekWEzf = accounts[0]
		const addressh7VBL0V = accounts[0]
		const uintG2NJMm3 = BigInt("793")
		const addressxg34KTf = accounts[4]
		const addresscSsSilG = accounts[0]
		const addressfDS0Sr0 = "0x0000000000000000000000000000000000000002"
		const uintP3Qzbt7 = BigInt("1213")
		const addresskKUtrfO = accounts[2]
		const uintKzcadtC = BigInt("1109")
		const addressw5eQFEU = accounts[2]
		const boolleh38co = await TPABxTU2mS.transfer.call(addressjekWEzf, uintzkXQwY, {from: accounts[0]});
		const boolGSLOexJ = await TPABxTU2mS.isAdmin.call(addressh7VBL0V, {from: accounts[3]});
//		await TPABxTU2mS.pause.call({from: accounts[0]});
//		const boolY6604ww = await TPABxTU2mS.transferFrom.call(addresscSsSilG, addressxg34KTf, uintG2NJMm3, {from: accounts[2]});
//		const boolKC56MXl = await TPABxTU2mS.isOwner.call(addressfDS0Sr0, {from: accounts[1]});
//		const stringfQeYJCA = await TPABxTU2mS.name.call({from: accounts[3]});
//		const boolpa4nXKy = await TPABxTU2mS.transfer.call(addresskKUtrfO, uintP3Qzbt7, {from: accounts[0]});
//		const bool83Njiv = await TPABxTU2mS.approve.call(addressw5eQFEU, uintKzcadtC, {from: accounts[4]});

		assert.equal(boolGSLOexJ, true)
		assert.equal(boolleh38co, true)
		await expect(TPABxTU2mS.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPABxTU2mS = await TPA.new({from: accounts[0]});
		const uintAAmE10i = BigInt("601")
		const addressfTENPTI = accounts[1]
		const addressQgCaXuM = accounts[5]
		const boolleh38co = await TPABxTU2mS.transfer.call(addressfTENPTI, uintAAmE10i, {from: accounts[0]});
		const boolFPj0hg = await TPABxTU2mS.freezeAccount.call(addressQgCaXuM, {from: accounts[0]});

		assert.equal(boolFPj0hg, true)
		assert.equal(boolleh38co, true)
	});

	it('test for TPA', async () => {
		const TPABxTU2mS = await TPA.new({from: accounts[0]});
		const addressHf1N4jQ = accounts[2]
		const addressvprrgv3 = accounts[2]
		const uint256HVLy8KP = await TPABxTU2mS.balanceOf.call(addressHf1N4jQ, {from: accounts[4]});
//		const addressHkrq6mA = await TPABxTU2mS.removeAdmin.call(addressvprrgv3, {from: accounts[0]});

		assert.equal(uint256HVLy8KP, BigInt("0"))
		await expect(TPABxTU2mS.removeAdmin.call(addressvprrgv3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAb3RKiTn = await TPA.new({from: accounts[1]});
		const uintcDCX1H2 = BigInt("54")
		const address2SLWly = accounts[0]
		const uintAgisy31 = BigInt("801")
		const addressfpj1r0 = accounts[3]
		const addressqN0dnCn = accounts[5]
//		const addressm47pIr9 = await TPAb3RKiTn.burnFrom.call(address2SLWly, uintcDCX1H2, {from: accounts[3]});
//		const booldIl2Vpw = await TPAb3RKiTn.transferFrom.call(addressqN0dnCn, addressfpj1r0, uintAgisy31, {from: accounts[2]});

		await expect(TPAb3RKiTn.burnFrom.call(address2SLWly, uintcDCX1H2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPABxTU2mS = await TPA.new({from: accounts[0]});
		const uintjcH9yO1 = BigInt("601")
		const addresshgwa6s = accounts[1]
		const addressvPtSzsh = accounts[4]
		const boolleh38co = await TPABxTU2mS.transfer.call(addresshgwa6s, uintjcH9yO1, {from: accounts[0]});
//		const boolCjvmN3O = await TPABxTU2mS.unfreezeAccount.call(addressvPtSzsh, {from: accounts[0]});

		assert.equal(boolleh38co, true)
		await expect(TPABxTU2mS.unfreezeAccount.call(addressvPtSzsh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPABxTU2mS = await TPA.new({from: accounts[0]});
		const uintQ8k7reC = BigInt("601")
		const addresscxDru3R = accounts[0]
		const addressQ7tXJP4 = accounts[4]
		const addressHB3jer = "0x0000000000000000000000000000000000000001"
		const uinty8cPbJQ = BigInt("793")
		const addressz9JlKDh = accounts[4]
		const addressr8MJ0m1 = accounts[0]
		const uintFGiJHcL = BigInt("57")
		const addressdsOMTub = accounts[1]
		const addressgfNWKoc = "0x0000000000000000000000000000000000000002"
		const uintgPt3qDn = BigInt("1878")
		const addressMIUqgl1 = accounts[1]
		const addressdiR3SZ4 = accounts[3]
		const uintn08HEqY = BigInt("1223")
		const addressNulTRGP = accounts[2]
		const uintsjLFhgI = BigInt("1109")
		const addressbwCC2QJ = accounts[2]
		const boolleh38co = await TPABxTU2mS.transfer.call(addresscxDru3R, uintQ8k7reC, {from: accounts[0]});
//		await TPABxTU2mS.pause.call({from: accounts[0]});
//		const uint256kSoiue = await TPABxTU2mS.balanceOf.call(addressQ7tXJP4, {from: "0x0000000000000000000000000000000000000001"});
//		const addressf3P7CYb = await TPABxTU2mS.addAdmin.call(addressHB3jer, {from: accounts[0]});
//		const boolY6604ww = await TPABxTU2mS.transferFrom.call(addressr8MJ0m1, addressz9JlKDh, uinty8cPbJQ, {from: accounts[2]});
//		const boolCFwSNOX = await TPABxTU2mS.transfer.call(addressdsOMTub, uintFGiJHcL, {from: accounts[1]});
//		const boolKC56MXl = await TPABxTU2mS.isOwner.call(addressgfNWKoc, {from: accounts[1]});
//		const stringfQeYJCA = await TPABxTU2mS.name.call({from: accounts[3]});
//		const boolRRdx5B = await TPABxTU2mS.transfer.call(addressMIUqgl1, uintgPt3qDn, {from: accounts[4]});
//		const addressvytLLLg = await TPABxTU2mS.transferOwnership.call(addressdiR3SZ4, {from: accounts[0]});
//		const boolpa4nXKy = await TPABxTU2mS.transfer.call(addressNulTRGP, uintn08HEqY, {from: accounts[0]});
//		const bool83Njiv = await TPABxTU2mS.approve.call(addressbwCC2QJ, uintsjLFhgI, {from: accounts[4]});

		assert.equal(boolleh38co, true)
		await expect(TPABxTU2mS.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPABxTU2mS = await TPA.new({from: accounts[0]});
		const uintahqWYbw = BigInt("1355")
		const uintrio6AQd = BigInt("240")
		const addressZsd1mtq = accounts[2]
		const uintsQgnKie = BigInt("601")
		const addressBDBFxwZ = accounts[1]
		const boole9VGNN = await TPABxTU2mS.transferWithLock.call(addressZsd1mtq, uintrio6AQd, uintahqWYbw, {from: accounts[0]});
		const boolleh38co = await TPABxTU2mS.transfer.call(addressBDBFxwZ, uintsQgnKie, {from: accounts[0]});

		assert.equal(boole9VGNN, true)
		assert.equal(boolleh38co, true)
	});

	it('test for TPA', async () => {
		const TPABxTU2mS = await TPA.new({from: accounts[0]});
		const uintYQBDEbp = BigInt("601")
		const addressMxmw21I = accounts[0]
		const addressJ2mIua8 = accounts[0]
		const uintMSdBLAZ = BigInt("6")
		const addressHVEjS95 = accounts[1]
		const addressCYZ0TWT = accounts[3]
		const uintNM67Q4j = BigInt("793")
		const addressSofT4O4 = accounts[4]
		const addressJ79gBjW = accounts[0]
		const addressrLIFXiG = accounts[2]
		const uintd39HTw8 = BigInt("57")
		const addressiWE5Joo = accounts[1]
		const uintbuIs7TB = BigInt("651")
		const uintUKTw3cY = BigInt("1167")
		const addressCfoNViR = accounts[5]
		const addressQr8HLlx = "0x0000000000000000000000000000000000000001"
		const uint2KO1Lx = BigInt("1214")
		const addressmGmcGun = accounts[2]
		const uintyGi3AaV = BigInt("1109")
		const addressRhHQnqE = accounts[2]
		const boolleh38co = await TPABxTU2mS.transfer.call(addressMxmw21I, uintYQBDEbp, {from: accounts[0]});
		const boolGSLOexJ = await TPABxTU2mS.isAdmin.call(addressJ2mIua8, {from: accounts[3]});
//		await TPABxTU2mS.pause.call({from: accounts[0]});
//		const boolJKgZSny = await TPABxTU2mS.unlock.call(addressHVEjS95, uintMSdBLAZ, {from: accounts[0]});
//		const uint256kSoiue = await TPABxTU2mS.balanceOf.call(addressCYZ0TWT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolY6604ww = await TPABxTU2mS.transferFrom.call(addressJ79gBjW, addressSofT4O4, uintNM67Q4j, {from: accounts[2]});
//		const addresswGwLs4t = await TPABxTU2mS.transferOwnership.call(addressrLIFXiG, {from: accounts[0]});
//		const boolCFwSNOX = await TPABxTU2mS.transfer.call(addressiWE5Joo, uintd39HTw8, {from: accounts[1]});
//		const boolvAR3ew6 = await TPABxTU2mS.transferWithLock.call(addressCfoNViR, uintUKTw3cY, uintbuIs7TB, {from: accounts[4]});
//		const boolKC56MXl = await TPABxTU2mS.isOwner.call(addressQr8HLlx, {from: accounts[1]});
//		const stringfQeYJCA = await TPABxTU2mS.name.call({from: accounts[3]});
//		const boolpa4nXKy = await TPABxTU2mS.transfer.call(addressmGmcGun, uint2KO1Lx, {from: accounts[0]});
//		const bool83Njiv = await TPABxTU2mS.approve.call(addressRhHQnqE, uintyGi3AaV, {from: accounts[4]});

		assert.equal(boolGSLOexJ, true)
		assert.equal(boolleh38co, true)
		await expect(TPABxTU2mS.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})