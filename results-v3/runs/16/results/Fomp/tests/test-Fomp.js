const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressrZz2f4n = accounts[4]
		const FompENqxbEF = await Fomp.new(addressrZz2f4n, {from: accounts[4]});
		const uintJh8y1NB = BigInt("1507")
		const addressndguIHH = "0x0000000000000000000000000000000000000001"
		const address9H2fpd = accounts[4]
		const addresspmXdaxY = accounts[5]
		const bytezNLvv7o = "0x0b1c0e052011151a06111f0e0b021c1312140c1d0606090a17061c12130c030c"
		const byteEy7e1s = "0x110715081d051d03080e180c11040f1c0107080e19121f161f16041a0e0a0c14"
		const uintrlTAYC = BigInt("137")
		const uintFieF80m = BigInt("1563")
		const uintzLDZHP = BigInt("1737")
		const addressnJa1yR = accounts[3]
		const byteMB4bLQ4 = "0x010800151d181d1d061c0c05150b1610161e07080b0f061d0a1715091b10191b"
		const byteYt2TZLJ = "0x1506111a0c120a141c1b091d0e1701110e0b140a1320120d0c180f051b081b0e"
		const uintxoqjIKq = BigInt("139")
		const uintlmy16dn = BigInt("647")
		const uintSx8zjgn = BigInt("1357")
		const addresseaUbgQF = accounts[2]
		const boolDGRmaww = await FompENqxbEF.transfer.call(addressndguIHH, uintJh8y1NB, {from: accounts[5]});
		const uint96KuUb9Zc = await FompENqxbEF.getCurrentVotes.call(address9H2fpd, {from: "0x0000000000000000000000000000000000000001"});
		const uintYDjseW4 = await FompENqxbEF.balanceOf.call(addresspmXdaxY, {from: accounts[1]});
		const addressPKgpIn8 = await FompENqxbEF.delegateBySig.call(addressnJa1yR, uintzLDZHP, uintFieF80m, uintrlTAYC, byteEy7e1s, bytezNLvv7o, {from: accounts[4]});
		const addressXNNTBuc = await FompENqxbEF.delegateBySig.call(addresseaUbgQF, uintSx8zjgn, uintlmy16dn, uintxoqjIKq, byteYt2TZLJ, byteMB4bLQ4, {from: accounts[1]});

		await expect(FompENqxbEF.transfer.call(addressndguIHH, uintJh8y1NB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresshwSI1Ql = accounts[5]
		const FompNxYQZlE = await Fomp.new(addresshwSI1Ql, {from: accounts[1]});
		const addresscXbThO6 = accounts[1]
		const uintJq2lQcj = BigInt("791")
		const addressGH97PF9 = accounts[2]
		const addressBOx6Cqb = accounts[0]
		const addressdBLpjpU = accounts[0]
		const addressKwPhsGn = accounts[4]
		const addressIDemhfv = accounts[4]
		const addressHpXoA8R = accounts[1]
		const addressw05o7Jt = accounts[0]
		const addressNZ7Wrbm = accounts[2]
		const addressoZYvoTO = await FompNxYQZlE.delegate.call(addresscXbThO6, {from: accounts[3]});
		const boolq2iinq1 = await FompNxYQZlE.transferFrom.call(addressBOx6Cqb, addressGH97PF9, uintJq2lQcj, {from: accounts[2]});
		const addressH11rMr = await FompNxYQZlE.delegate.call(addressdBLpjpU, {from: accounts[3]});
		const uintVlHsL6y = await FompNxYQZlE.allowance.call(addressIDemhfv, addressKwPhsGn, {from: accounts[4]});
		const addressdYFQ5sh = await FompNxYQZlE.delegate.call(addressHpXoA8R, {from: accounts[3]});
		const uintbMgg1t = await FompNxYQZlE.allowance.call(addressNZ7Wrbm, addressw05o7Jt, {from: accounts[2]});

		await expect(FompNxYQZlE.transferFrom.call(addressBOx6Cqb, addressGH97PF9, uintJq2lQcj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresstALnqjy = accounts[2]
		const FompSK2rFOf = await Fomp.new(addresstALnqjy, {from: "0x0000000000000000000000000000000000000001"});
		const uintyjVd1b = BigInt("1453")
		const addresszLTweq = accounts[1]
		const uintgH7JGrG = BigInt("342")
		const addressI5TAwuk = accounts[4]
		const addressXytzkCL = accounts[4]
		const addresswlTlPYf = accounts[3]
		const addressJJWqPJn = accounts[5]
		const addressvYfepo4 = accounts[0]
		const addressA3CfKjr = accounts[3]
		const boolg7Z9atn = await FompSK2rFOf.approve.call(addresszLTweq, uintyjVd1b, {from: accounts[4]});
		const boolECWC0bx = await FompSK2rFOf.transferFrom.call(addressXytzkCL, addressI5TAwuk, uintgH7JGrG, {from: accounts[4]});
		const addressK9QhTGs = await FompSK2rFOf.delegate.call(addresswlTlPYf, {from: accounts[3]});
		const uint6yV3Sj = await FompSK2rFOf.balanceOf.call(addressJJWqPJn, {from: accounts[3]});
		const uint96aoeWtG0 = await FompSK2rFOf.getCurrentVotes.call(addressvYfepo4, {from: accounts[2]});
		const addressQK53Ewx = await FompSK2rFOf.delegate.call(addressA3CfKjr, {from: accounts[5]});
	});

	it('test for Fomp', async () => {
		const addressxjthlt = accounts[1]
		const FompTjnHdkj = await Fomp.new(addressxjthlt, {from: accounts[0]});
		const addressE3qg3Qt = accounts[4]
		const byteDI1kXkz = "0x160717171410011a1c17190e1b1505141d070b12121e1b0e11181c011a171b1b"
		const bytenf1JVQi = "0x161a140e190a13051012020e07160d13031a1f0107041418131a0a0f19180e1b"
		const uintna1664e = BigInt("226")
		const uintCERIlqf = BigInt("1606")
		const uintKJlCcQj = BigInt("435")
		const addresszfu41qf = accounts[3]
		const uintI2mdAP7 = BigInt("1444")
		const addressMHFBkMm = accounts[2]
		const addressRUwJw4E = accounts[4]
		const addressyLkJfse = accounts[2]
		const uintQIQhc6H = await FompTjnHdkj.balanceOf.call(addressE3qg3Qt, {from: accounts[2]});
		const addressLLmyqi3 = await FompTjnHdkj.delegateBySig.call(addresszfu41qf, uintKJlCcQj, uintCERIlqf, uintna1664e, bytenf1JVQi, byteDI1kXkz, {from: accounts[2]});
		const boolZKW7DQp = await FompTjnHdkj.transferFrom.call(addressRUwJw4E, addressMHFBkMm, uintI2mdAP7, {from: accounts[2]});
		const uint96nWLAHUk = await FompTjnHdkj.getCurrentVotes.call(addressyLkJfse, {from: accounts[0]});

		assert.equal(uintQIQhc6H, BigInt("0"))
		await expect(FompTjnHdkj.delegateBySig.call(addresszfu41qf, uintKJlCcQj, uintCERIlqf, uintna1664e, bytenf1JVQi, byteDI1kXkz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressmrdfv0L = accounts[4]
		const FompVBfj0zx = await Fomp.new(addressmrdfv0L, {from: accounts[4]});
		const addressvojML4t = accounts[3]
		const uintgkLcSjq = BigInt("301")
		const addressIQ6NXT = accounts[4]
		const addresshN9dOC = accounts[4]
		const uintvkhdpes = BigInt("472")
		const addressKtMnDDe = accounts[3]
		const uint96sxgN8ix = await FompVBfj0zx.getCurrentVotes.call(addressvojML4t, {from: accounts[4]});
		const boolOZWxdao = await FompVBfj0zx.approve.call(addressIQ6NXT, uintgkLcSjq, {from: accounts[2]});
		const uintsJ6fmIf = await FompVBfj0zx.balanceOf.call(addresshN9dOC, {from: accounts[5]});
		const boolZPH7hZk = await FompVBfj0zx.transfer.call(addressKtMnDDe, uintvkhdpes, {from: accounts[2]});

		assert.equal(boolOZWxdao, true)
		assert.equal(uint96sxgN8ix, BigInt("0"))
		assert.equal(uintsJ6fmIf, BigInt("1000000000000000000000000"))
		await expect(FompVBfj0zx.transfer.call(addressKtMnDDe, uintvkhdpes, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresshggVwUM = accounts[3]
		const FompmrH1FgR = await Fomp.new(addresshggVwUM, {from: accounts[5]});
		const uintOV9slkb = BigInt("578")
		const addressA2sPYF1 = accounts[3]
		const addressbbIX4oo = accounts[3]
		const uintMHG0S5Y = BigInt("620")
		const addressGPYIwsd = accounts[1]
		const uintgZdnBXD = BigInt("1443")
		const addressGjoW25u = accounts[1]
		const bytempCGIHF = "0x070507110d060d050b1a00111a02011d191e070e011317000a190d061008021c"
		const byteOAAMJWI = "0x08091001011f050b080b0319190f01171a1c030602091e1c111311140e181906"
		const uintjeV6Dp = BigInt("253")
		const uintYwzbhnH = BigInt("1547")
		const uintkOQjI2u = BigInt("493")
		const addresswLncxIA = accounts[4]
		const addressVuBaFKj = accounts[0]
		const boolXuVpyc = await FompmrH1FgR.transferFrom.call(addressbbIX4oo, addressA2sPYF1, uintOV9slkb, {from: accounts[3]});
		const boolPYbcDHt = await FompmrH1FgR.transfer.call(addressGPYIwsd, uintMHG0S5Y, {from: accounts[3]});
		const uint96AnfhchY = await FompmrH1FgR.getPriorVotes.call(addressGjoW25u, uintgZdnBXD, {from: accounts[1]});
		const addressShlG8jT = await FompmrH1FgR.delegateBySig.call(addresswLncxIA, uintkOQjI2u, uintYwzbhnH, uintjeV6Dp, byteOAAMJWI, bytempCGIHF, {from: accounts[2]});
		const addresswfHh8I = await FompmrH1FgR.delegate.call(addressVuBaFKj, {from: accounts[2]});

		assert.equal(boolPYbcDHt, true)
		assert.equal(boolXuVpyc, true)
		await expect(FompmrH1FgR.getPriorVotes.call(addressGjoW25u, uintgZdnBXD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressanCwBNM = accounts[3]
		const FompmrH1FgR = await Fomp.new(addressanCwBNM, {from: accounts[5]});
		const uintYbPKyKX = BigInt("578")
		const addressN37atbz = accounts[3]
		const addressgyHaM2A = accounts[3]
		const uintMiC2hNB = BigInt("620")
		const addressFuGELFG = accounts[1]
		const addressGkeQlIQ = accounts[0]
		const addressm1nKunc = accounts[0]
		const addressJuv4Jtj = accounts[0]
		const uintdDZEoCA = BigInt("1526")
		const addressGJl2oS6 = accounts[4]
		const addressVF6NIsY = accounts[4]
		const uintTaLTJap = BigInt("1443")
		const addressXscRUKI = accounts[1]
		const byteMqGWZsr = "0x070507110d060d050b1a00111a02011d191e070e011317000a190d061008021c"
		const byteFeuEcFy = "0x08091001011f050b080b0319190f01171a1c030602091e1c111311140e181906"
		const uintH2wG3d = BigInt("253")
		const uintBdqDqg9 = BigInt("1547")
		const uinttKW0GHt = BigInt("493")
		const addressQ29LYy8 = accounts[4]
		const addressx5K7lzj = accounts[0]
		const boolXuVpyc = await FompmrH1FgR.transferFrom.call(addressgyHaM2A, addressN37atbz, uintYbPKyKX, {from: accounts[3]});
		const boolPYbcDHt = await FompmrH1FgR.transfer.call(addressFuGELFG, uintMiC2hNB, {from: accounts[3]});
		const addressh9Dubll = await FompmrH1FgR.delegate.call(addressGkeQlIQ, {from: accounts[2]});
		const uintgP3aIZ3 = await FompmrH1FgR.allowance.call(addressJuv4Jtj, addressm1nKunc, {from: accounts[2]});
		const uint96l7HVphI = await FompmrH1FgR.getPriorVotes.call(addressGJl2oS6, uintdDZEoCA, {from: accounts[2]});
		const uint963QUXW2 = await FompmrH1FgR.getCurrentVotes.call(addressVF6NIsY, {from: accounts[4]});
		const uint96AnfhchY = await FompmrH1FgR.getPriorVotes.call(addressXscRUKI, uintTaLTJap, {from: accounts[1]});
		const addressShlG8jT = await FompmrH1FgR.delegateBySig.call(addressQ29LYy8, uinttKW0GHt, uintBdqDqg9, uintH2wG3d, byteFeuEcFy, byteMqGWZsr, {from: accounts[2]});
		const addresswfHh8I = await FompmrH1FgR.delegate.call(addressx5K7lzj, {from: accounts[2]});

		assert.equal(boolPYbcDHt, true)
		assert.equal(boolXuVpyc, true)
		assert.equal(uintgP3aIZ3, BigInt("0"))
		await expect(FompmrH1FgR.getPriorVotes.call(addressGJl2oS6, uintdDZEoCA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressHr9hx1o = accounts[0]
		const FompZfUjDwl = await Fomp.new(addressHr9hx1o, {from: accounts[1]});
		const addressDRDeEvn = accounts[0]
		const addressPF6EijM = accounts[5]
		const address6KFGrv = accounts[5]
		const uintZkIhgFO = BigInt("1071")
		const addressUai90Fz = accounts[0]
		const uintNp93fXm = BigInt("21")
		const addressCQvPGre = accounts[0]
		const addressMs0OYrG = accounts[1]
		const uintm3HZjbf = BigInt("1662")
		const addressd0g0Sd = accounts[3]
		const addressFtQ4uHR = await FompZfUjDwl.delegate.call(addressDRDeEvn, {from: accounts[1]});
		const addressHDGGfdx = await FompZfUjDwl.delegate.call(addressPF6EijM, {from: accounts[4]});
		const addressRF4EaGx = await FompZfUjDwl.delegate.call(address6KFGrv, {from: accounts[0]});
		const boolaV3OlLF = await FompZfUjDwl.approve.call(addressUai90Fz, uintZkIhgFO, {from: accounts[1]});
		const boolH5wAl1v = await FompZfUjDwl.transferFrom.call(addressMs0OYrG, addressCQvPGre, uintNp93fXm, {from: accounts[4]});
		const boolpTeSwZ0 = await FompZfUjDwl.approve.call(addressd0g0Sd, uintm3HZjbf, {from: accounts[1]});

		assert.equal(boolaV3OlLF, true)
		await expect(FompZfUjDwl.transferFrom.call(addressMs0OYrG, addressCQvPGre, uintNp93fXm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresseZZAAJ3 = accounts[4]
		const FompVBfj0zx = await Fomp.new(addresseZZAAJ3, {from: accounts[4]});
		const addressXBRKGq7 = accounts[3]
		const uintxxq0u2X = BigInt("191")
		const addressn83zwyI = "0x00000000000000000000000000000000000000-1"
		const addressyZYTvCh = accounts[0]
		const uint96sxgN8ix = await FompVBfj0zx.getCurrentVotes.call(addressXBRKGq7, {from: accounts[4]});
		const boolw631GM = await FompVBfj0zx.approve.call(addressn83zwyI, uintxxq0u2X, {from: accounts[2]});
		const uint96hWYqttU = await FompVBfj0zx.getCurrentVotes.call(addressyZYTvCh, {from: accounts[2]});

		assert.equal(uint96sxgN8ix, BigInt("0"))
		await expect(FompVBfj0zx.approve.call(addressn83zwyI, uintxxq0u2X, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressAN2D3cV = accounts[2]
		const FompC5X8ii1 = await Fomp.new(addressAN2D3cV, {from: accounts[5]});
		const uintQrnpUWm = BigInt("62")
		const addressrcXtfJw = accounts[4]
		const uint96ZBgeaT2 = await FompC5X8ii1.getPriorVotes.call(addressrcXtfJw, uintQrnpUWm, {from: accounts[4]});

		assert.equal(uint96ZBgeaT2, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressr7NyXC = accounts[0]
		const FompZfUjDwl = await Fomp.new(addressr7NyXC, {from: accounts[1]});
		const addressYyxpoVf = accounts[4]
		const addresseT5jJzp = accounts[1]
		const addressXKAJUyX = accounts[1]
		const addresss0j5jwp = accounts[1]
		const addresskFEf4o = accounts[6]
		const addressNl93aNs = accounts[1]
		const uintdPO2zwp = BigInt("1149")
		const addressoTxZhui = "0x0000000000000000000000000000000000000001"
		const addressjYX4FjR = accounts[10]
		const addressThqY0f = accounts[5]
		const uintAhKivsZ = BigInt("1982")
		const addressGErfAN = accounts[0]
		const uintZWK8Des = BigInt("697")
		const addressImhypcw = accounts[3]
		const addresse7XTd2j = accounts[4]
		const uinta6RlVoZ = BigInt("1783")
		const addressNPjmIPi = accounts[2]
		const addressBwOLVpp = accounts[1]
		const uintAeub03q = BigInt("1497")
		const addressLSjy937 = "0x0000000000000000000000000000000000000001"
		const uintiL6E7qv = BigInt("1662")
		const addressnqmpQ0U = accounts[0]
		const addresshJJE860 = await FompZfUjDwl.delegate.call(addressYyxpoVf, {from: accounts[2]});
		const uintVskxpXc = await FompZfUjDwl.balanceOf.call(addresseT5jJzp, {from: accounts[3]});
		const uint96tIEg3rR = await FompZfUjDwl.getCurrentVotes.call(addressXKAJUyX, {from: accounts[0]});
		const uint96uZQHnFP = await FompZfUjDwl.getCurrentVotes.call(addresss0j5jwp, {from: accounts[2]});
		const addressHDGGfdx = await FompZfUjDwl.delegate.call(addresskFEf4o, {from: accounts[4]});
		const addressXhcRLp = await FompZfUjDwl.delegate.call(addressNl93aNs, {from: accounts[2]});
		const boolxVLhPlA = await FompZfUjDwl.approve.call(addressoTxZhui, uintdPO2zwp, {from: accounts[2]});
		const uintgFLxOCB = await FompZfUjDwl.balanceOf.call(addressjYX4FjR, {from: accounts[4]});
		const addressRF4EaGx = await FompZfUjDwl.delegate.call(addressThqY0f, {from: accounts[0]});
		const uint96BJTWMMd = await FompZfUjDwl.getPriorVotes.call(addressGErfAN, uintAhKivsZ, {from: accounts[3]});
		const bool2xZnIo = await FompZfUjDwl.transfer.call(addressImhypcw, uintZWK8Des, {from: accounts[2]});
		const uint96DtNjPSI = await FompZfUjDwl.getCurrentVotes.call(addresse7XTd2j, {from: accounts[1]});
		const boolZrqvva = await FompZfUjDwl.transferFrom.call(addressBwOLVpp, addressNPjmIPi, uinta6RlVoZ, {from: accounts[5]});
		const uint96knB52Pm = await FompZfUjDwl.getPriorVotes.call(addressLSjy937, uintAeub03q, {from: accounts[1]});
		const boolpTeSwZ0 = await FompZfUjDwl.approve.call(addressnqmpQ0U, uintiL6E7qv, {from: accounts[1]});

		assert.equal(boolxVLhPlA, true)
		assert.equal(uint96tIEg3rR, BigInt("0"))
		assert.equal(uint96uZQHnFP, BigInt("0"))
		assert.equal(uintVskxpXc, BigInt("0"))
		await expect(FompZfUjDwl.balanceOf.call(addressjYX4FjR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const address7RuVoU = accounts[0]
		const FompGMReDiY = await Fomp.new(address7RuVoU, {from: accounts[2]});
		const byteiiiTi6P = "0x1d1a150e0704150d0c011219200a181f0d0914131214170e1b1801170b101017"
		const byteML06UET = "0x1c1f0d1e0814090d0b0c181d10030a12091e190c100f0f170a1005fffffffd040c0a17"
		const uintH87bT5o = BigInt("249")
		const uintBbftbFo = BigInt("1036")
		const uintkLvbo5N = BigInt("2034")
		const addressz78pOkv = accounts[4]
		const addressQEFK7id = await FompGMReDiY.delegateBySig.call(addressz78pOkv, uintkLvbo5N, uintBbftbFo, uintH87bT5o, byteML06UET, byteiiiTi6P, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FompGMReDiY.delegateBySig.call(addressz78pOkv, uintkLvbo5N, uintBbftbFo, uintH87bT5o, byteML06UET, byteiiiTi6P, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})