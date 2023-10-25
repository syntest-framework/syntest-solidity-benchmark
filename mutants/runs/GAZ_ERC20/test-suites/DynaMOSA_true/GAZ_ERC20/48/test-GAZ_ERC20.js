const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20C86RFWS = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const address17ipkf = accounts[0]
		const uintGu0ItO7 = BigInt("983")
		const addressr7fy9x = accounts[2]
		const uintr4iAPI = BigInt("94")
		const addressG1zB1ST = accounts[0]
		const addressaQLjVL = accounts[3]
		const uintncMBkdq = BigInt("507")
		const addressnWk1hsq = accounts[1]
		const addressBTocfsS = accounts[1]
		const uintVoQRDXs = BigInt("354")
		const addressF12eQ0D = accounts[4]
		const boolPkeZI00 = await GAZ_ERC20C86RFWS.approve.call(address17ipkf, {from: accounts[3]});
		const boolmXKeejz = await GAZ_ERC20C86RFWS.transfer.call(addressr7fy9x, uintGu0ItO7, {from: accounts[0]});
		const boolyKI4JJ = await GAZ_ERC20C86RFWS.transferFrom.call(addressaQLjVL, addressG1zB1ST, uintr4iAPI, {from: "0x0000000000000000000000000000000000000001"});
		const boolkx4ptiJ = await GAZ_ERC20C86RFWS.transferFrom.call(addressBTocfsS, addressnWk1hsq, uintncMBkdq, {from: accounts[2]});
		const boolx1BbSp = await GAZ_ERC20C86RFWS.transfer.call(addressF12eQ0D, uintVoQRDXs, {from: accounts[1]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20JldLXZT = await GAZ_ERC20.new({from: accounts[1]});
		const addressEqtBh8s = accounts[0]
		const uintW0mAm9v = BigInt("1932")
		const addressBmq9fTi = accounts[4]
		const addresswsB0vgV = accounts[1]
		const uintRbkdp6w = BigInt("32")
		const addresskmkTaVC = accounts[0]
		const addressColVq6 = accounts[0]
		const uintFRfmYPI = BigInt("1775")
		const addressqsTuZhF = accounts[4]
		const addresscofb5iy = accounts[5]
		const boolEa6r1Ah = await GAZ_ERC20JldLXZT.approve.call(addressEqtBh8s, {from: accounts[1]});
		const boolhiBPvUo = await GAZ_ERC20JldLXZT.transferFrom.call(addresswsB0vgV, addressBmq9fTi, uintW0mAm9v, {from: accounts[2]});
		const boolVT6bAZn = await GAZ_ERC20JldLXZT.transferFrom.call(addressColVq6, addresskmkTaVC, uintRbkdp6w, {from: accounts[4]});
		const boolwxtIs3L = await GAZ_ERC20JldLXZT.transfer.call(addressqsTuZhF, uintFRfmYPI, {from: accounts[3]});
		const boolUTzkL49 = await GAZ_ERC20JldLXZT.approve.call(addresscofb5iy, {from: accounts[2]});

		await expect(GAZ_ERC20JldLXZT.approve.call(addressEqtBh8s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ERMYS0a = await GAZ_ERC20.new({from: accounts[3]});
		const uintsCbBOuS = BigInt("198")
		const addressQPlYDsr = accounts[0]
		const addressrcGIMf = accounts[3]
		const uintBZh78wA = BigInt("982")
		const addressDkW7n8k = accounts[1]
		const addressGRGOgC0 = accounts[1]
		const uint8ND9xs = BigInt("1038")
		const addressDvccSEm = accounts[0]
		const uintjux5zyk = BigInt("254")
		const addressFhGJqC0 = accounts[3]
		const boolgF6LBvG = await GAZ_ERC20ERMYS0a.transfer.call(addressQPlYDsr, uintsCbBOuS, {from: accounts[5]});
		const boola46Fh8z = await GAZ_ERC20ERMYS0a.approve.call(addressrcGIMf, {from: accounts[3]});
		const boolyhrVzBA = await GAZ_ERC20ERMYS0a.transferFrom.call(addressGRGOgC0, addressDkW7n8k, uintBZh78wA, {from: accounts[1]});
		const boolmtLukcL = await GAZ_ERC20ERMYS0a.approve.call(addressDvccSEm, uint8ND9xs, {from: accounts[3]});
		const boolJvaxblA = await GAZ_ERC20ERMYS0a.approve.call(addressFhGJqC0, uintjux5zyk, {from: accounts[0]});

		await expect(GAZ_ERC20ERMYS0a.transfer.call(addressQPlYDsr, uintsCbBOuS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20uCQgJAn = await GAZ_ERC20.new({from: accounts[1]});
		const uintI0Yhhn = BigInt("1747")
		const address00Gf0H = accounts[4]
		const addressXeWI9x = accounts[1]
		const uinttv2BcP = BigInt("1976")
		const addressCs94eXS = accounts[3]
		const addressBBFEw2u = accounts[1]
		const boola1ZAxNv = await GAZ_ERC20uCQgJAn.transferFrom.call(addressXeWI9x, address00Gf0H, uintI0Yhhn, {from: accounts[3]});
		const boolCXVYcP2 = await GAZ_ERC20uCQgJAn.approve.call(addressCs94eXS, uinttv2BcP, {from: accounts[1]});
		const booloMjLBuS = await GAZ_ERC20uCQgJAn.approve.call(addressBBFEw2u, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20uCQgJAn.transferFrom.call(addressXeWI9x, address00Gf0H, uintI0Yhhn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20gtg4Zmi = await GAZ_ERC20.new({from: accounts[3]});
		const uintykmRpdk = BigInt("1739")
		const addressshyqEwR = accounts[2]
		const uintDCgzT58 = BigInt("398")
		const addressE8OrTCA = accounts[0]
		const boolEzCFbJK = await GAZ_ERC20gtg4Zmi.approve.call(addressshyqEwR, uintykmRpdk, {from: accounts[2]});
		const boolICKzujc = await GAZ_ERC20gtg4Zmi.approve.call(addressE8OrTCA, uintDCgzT58, {from: accounts[1]});

		assert.equal(boolEzCFbJK, true)
		assert.equal(boolICKzujc, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20uCQgJAn = await GAZ_ERC20.new({from: accounts[1]});
		const uintcqQrLl4 = BigInt("1976")
		const addressqzsEWkT = accounts[3]
		const addressY5wIKVH = accounts[1]
		const boolCXVYcP2 = await GAZ_ERC20uCQgJAn.approve.call(addressqzsEWkT, uintcqQrLl4, {from: accounts[1]});
		const booloMjLBuS = await GAZ_ERC20uCQgJAn.approve.call(addressY5wIKVH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCXVYcP2, true)
		await expect(GAZ_ERC20uCQgJAn.approve.call(addressY5wIKVH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20DjhpC1e = await GAZ_ERC20.new({from: accounts[2]});
		const addressOuwuHwC = accounts[3]
		const uintBPGIMLj = BigInt("107")
		const addressD6ZzRgE = accounts[4]
		const uintBwscV9N = BigInt("1611")
		const addressBZF3JMd = accounts[0]
		const addressaWtqUPP = accounts[4]
		const addresss2QTas9 = accounts[3]
		const uintvIOb1s = BigInt("1441")
		const addressWrSGIs = accounts[4]
		const boolc95W4iA = await GAZ_ERC20DjhpC1e.approve.call(addressOuwuHwC, {from: accounts[0]});
		const boolqrv45SV = await GAZ_ERC20DjhpC1e.approve.call(addressD6ZzRgE, uintBPGIMLj, {from: accounts[2]});
		const boolzqBZWsn = await GAZ_ERC20DjhpC1e.transferFrom.call(addressaWtqUPP, addressBZF3JMd, uintBwscV9N, {from: accounts[1]});
		const booltTjO3Un = await GAZ_ERC20DjhpC1e.approve.call(addresss2QTas9, {from: "0x0000000000000000000000000000000000000001"});
		const boolyHf0Xy6 = await GAZ_ERC20DjhpC1e.approve.call(addressWrSGIs, uintvIOb1s, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20DjhpC1e.approve.call(addressOuwuHwC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20gtg4Zmi = await GAZ_ERC20.new({from: accounts[3]});
		const uintYL6V3or = BigInt("419")
		const addressnkHjqV = accounts[0]
		const uintwaRBaA = BigInt("1573")
		const addressi6JkjGA = accounts[1]
		const boolICKzujc = await GAZ_ERC20gtg4Zmi.approve.call(addressnkHjqV, uintYL6V3or, {from: accounts[1]});
		const boolvwE2mZ3 = await GAZ_ERC20gtg4Zmi.transfer.call(addressi6JkjGA, uintwaRBaA, {from: accounts[3]});

		assert.equal(boolICKzujc, true)
		assert.equal(boolvwE2mZ3, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20uCQgJAn = await GAZ_ERC20.new({from: accounts[1]});
		const addressY8RkWKd = accounts[5]
		const uintauxyBYr = BigInt("1747")
		const addressM5jWoeE = accounts[5]
		const addressHUGkMA0 = accounts[1]
		const uintY0w9uoQ = BigInt("607")
		const addressdINZ7f = accounts[0]
		const boolf6rAFzu = await GAZ_ERC20uCQgJAn.approve.call(addressY8RkWKd, {from: accounts[4]});
		const boola1ZAxNv = await GAZ_ERC20uCQgJAn.transferFrom.call(addressHUGkMA0, addressM5jWoeE, uintauxyBYr, {from: accounts[3]});
		const boolZsvYb7 = await GAZ_ERC20uCQgJAn.approve.call(addressdINZ7f, uintY0w9uoQ, {from: accounts[3]});

		await expect(GAZ_ERC20uCQgJAn.approve.call(addressY8RkWKd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20uCQgJAn = await GAZ_ERC20.new({from: accounts[1]});
		const addressPL6TZg = accounts[0]
		const uintzZBZiOW = BigInt("1739")
		const addresso8KY7re = accounts[3]
		const uintEIdPHCO = BigInt("1747")
		const addresso7e6DQf = accounts[4]
		const addressYua3Yvr = accounts[1]
		const uintXjViO1 = BigInt("1133")
		const addressYlJKNNV = accounts[5]
		const uintsfifRJZ = BigInt("969")
		const addresswmny35C = accounts[3]
		const addressJ5wX0kO = accounts[2]
		const booleQRwZSe = await GAZ_ERC20uCQgJAn.approve.call(addressPL6TZg, {from: accounts[5]});
		const boolzMi1jfm = await GAZ_ERC20uCQgJAn.approve.call(addresso8KY7re, uintzZBZiOW, {from: accounts[4]});
		const boola1ZAxNv = await GAZ_ERC20uCQgJAn.transferFrom.call(addressYua3Yvr, addresso7e6DQf, uintEIdPHCO, {from: accounts[3]});
		const boolSnlElow = await GAZ_ERC20uCQgJAn.transfer.call(addressYlJKNNV, uintXjViO1, {from: "0x0000000000000000000000000000000000000001"});
		const boolCXVYcP2 = await GAZ_ERC20uCQgJAn.approve.call(addresswmny35C, uintsfifRJZ, {from: accounts[1]});
		const booloMjLBuS = await GAZ_ERC20uCQgJAn.approve.call(addressJ5wX0kO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20uCQgJAn.approve.call(addressPL6TZg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20RAkM6cS = await GAZ_ERC20.new({from: accounts[4]});
		const addressMBJZPDE = accounts[1]
		const uintgSRaIhe = BigInt("475")
		const addressNyMC9f = accounts[5]
		const boolkrW12AR = await GAZ_ERC20RAkM6cS.approve.call(addressMBJZPDE, {from: accounts[3]});
		const boolTdXwTPP = await GAZ_ERC20RAkM6cS.transfer.call(addressNyMC9f, uintgSRaIhe, {from: accounts[2]});

		await expect(GAZ_ERC20RAkM6cS.approve.call(addressMBJZPDE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20MxSQap7 = await GAZ_ERC20.new({from: accounts[4]});
		const uintfSrpTIw = BigInt("1499")
		const addressF8l2fLM = "0x0000000000000000000000000000000000000001"
		const addressXSQzmYY = accounts[1]
		const uinthivPY5f = BigInt("1374")
		const addressHfDtht3 = accounts[2]
		const uintdAEnJ4 = BigInt("516")
		const addressIfoHQMP = accounts[0]
		const uintrDt6znh = BigInt("419")
		const addressoUWin2H = accounts[0]
		const boolu36rGn = await GAZ_ERC20MxSQap7.approve.call(addressF8l2fLM, uintfSrpTIw, {from: accounts[1]});
		const booltyyhGtl = await GAZ_ERC20MxSQap7.approve.call(addressXSQzmYY, {from: accounts[2]});
		const boolEH4LYR8 = await GAZ_ERC20MxSQap7.approve.call(addressHfDtht3, uinthivPY5f, {from: accounts[3]});
		const boolMW4ficq = await GAZ_ERC20MxSQap7.transfer.call(addressIfoHQMP, uintdAEnJ4, {from: accounts[2]});
		const booldkXEEfM = await GAZ_ERC20MxSQap7.approve.call(addressoUWin2H, uintrDt6znh, {from: accounts[5]});

		assert.equal(boolu36rGn, true)
		await expect(GAZ_ERC20MxSQap7.approve.call(addressXSQzmYY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})