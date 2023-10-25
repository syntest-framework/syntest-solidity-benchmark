const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintXRWIuia = BigInt("2019")
		const stringP1HvVLy = "CSORDTJ5b7WcdgcjAjo4C"
		const stringbyqOOGL = "8LCSjNf"
		const GFCWoP4I2r = await GFC.new(uintXRWIuia, stringP1HvVLy, stringbyqOOGL, {from: accounts[2]});
		const uintiLiEKJZ = BigInt("1783")
		const uintjL5JmNt = BigInt("1691")
		const addressWMRUfCH = "0x0000000000000000000000000000000000000001"
		const addresssbyqgaR = accounts[0]
		const uintlPgkJV0 = BigInt("1667")
		const addressaDCPC9M = accounts[2]
		const uintJnDCkcH = BigInt("135")
		const addressr0xHJ4A = accounts[3]
		const uintCL2BUUr = BigInt("1589")
		const addressjdx3mAK = accounts[2]
		const uintAHiYFLA = BigInt("369")
		const addressmpwt4OR = accounts[3]
		const addressAmdpxUC = "0x0000000000000000000000000000000000000001"
		const boolTyk2pUL = await GFCWoP4I2r.burn.call(uintiLiEKJZ, {from: accounts[2]});
//		const boolgyLEZTu = await GFCWoP4I2r.transferFrom.call(addresssbyqgaR, addressWMRUfCH, uintjL5JmNt, {from: accounts[5]});
//		const boolwnacqgh = await GFCWoP4I2r.approve.call(addressaDCPC9M, uintlPgkJV0, {from: accounts[3]});
//		const boolPqLNKF9 = await GFCWoP4I2r.approve.call(addressr0xHJ4A, uintJnDCkcH, {from: accounts[2]});
//		const boolY0lJ3rM = await GFCWoP4I2r.burnFrom.call(addressjdx3mAK, uintCL2BUUr, {from: accounts[5]});
//		const boolzwhPJTA = await GFCWoP4I2r.transferFrom.call(addressAmdpxUC, addressmpwt4OR, uintAHiYFLA, {from: accounts[3]});

		assert.equal(boolTyk2pUL, true)
		await expect(GFCWoP4I2r.transferFrom.call(addresssbyqgaR, addressWMRUfCH, uintjL5JmNt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintKyHML2U = BigInt("1114")
		const stringQGawAnj = "Nn7"
		const stringaqVF9Z = "T2u9aE7KRavqBxXggJQFBjxBnyjSevaAv8BOV8rwUiKFvrnAoqA1RLhXK"
		const GFCIobGMjM = await GFC.new(uintKyHML2U, stringQGawAnj, stringaqVF9Z, {from: "0x0000000000000000000000000000000000000001"});
		const uintaP0UElG = BigInt("93")
		const addressIrFre2h = accounts[2]
		const uintNZxbtRQ = BigInt("607")
		const boolI7HO0KB = await GFCIobGMjM.burnFrom.call(addressIrFre2h, uintaP0UElG, {from: accounts[2]});
		const boolDYXW0ak = await GFCIobGMjM.burn.call(uintNZxbtRQ, {from: accounts[1]});
	});

	it('test for GFC', async () => {
		const uintVmHBGLZ = BigInt("626")
		const stringUBVVfg9 = "HTaGIOFaf0FJnEWX3A05ys9cenli7yJnf2ZSKnaYtb8n"
		const stringqe5yvl1 = "ggCUu8YExWSmhlAIdJeqslKooQO3avT5uZcpenHUASgwMmzwq"
		const GFCWSdLfXu = await GFC.new(uintVmHBGLZ, stringUBVVfg9, stringqe5yvl1, {from: accounts[5]});
		const uintbdzp9az = BigInt("1161")
		const addressDe9HdFD = accounts[4]
		const byteeLFq6G = "0x09170a031b1e0d0e0c121c1f161f07130a08001d040203061e111b16"
		const uintFBCg89l = BigInt("1301")
		const addressZtmC744 = accounts[4]
		const boolwDCAVEl = await GFCWSdLfXu.approve.call(addressDe9HdFD, uintbdzp9az, {from: accounts[2]});
//		const boolCrLxmES = await GFCWSdLfXu.approveAndCall.call(addressZtmC744, uintFBCg89l, byteeLFq6G, {from: accounts[0]});

		assert.equal(boolwDCAVEl, true)
		await expect(GFCWSdLfXu.approveAndCall.call(addressZtmC744, uintFBCg89l, byteeLFq6G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintgkx3tqy = BigInt("1438")
		const stringGq98iNe = "0BcjvyYLmLvsWwQTaRnbXtrDeoxfVfFaCd5ngj"
		const stringQUBmsp9 = "tTTrzN0r"
		const GFCYaLdVz3 = await GFC.new(uintgkx3tqy, stringGq98iNe, stringQUBmsp9, {from: accounts[3]});
		const uintaWGIozq = BigInt("630")
		const addressM3t7L4a = accounts[3]
		const uintFp4fUuD = BigInt("1474")
		const addressaSBLPKP = accounts[2]
//		const boolMmYhiwu = await GFCYaLdVz3.transfer.call(addressM3t7L4a, uintaWGIozq, {from: accounts[2]});
//		const boolLw17mmN = await GFCYaLdVz3.approve.call(addressaSBLPKP, uintFp4fUuD, {from: accounts[1]});

		await expect(GFCYaLdVz3.transfer.call(addressM3t7L4a, uintaWGIozq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintYV7pLpT = BigInt("1438")
		const stringGq98iNe = "0BcjvyYLmLvsWwQTaRnbXtrDeoxfVfFaCd5ngj"
		const stringQUBmsp9 = "tTTrzN0r"
		const GFCYaLdVz3 = await GFC.new(uintYV7pLpT, stringGq98iNe, stringQUBmsp9, {from: accounts[3]});
		const uintBW2iJr = BigInt("650")
		const addressktu97ua = "0x0000000000000000000000000000000000000001"
		const uintBrQkkVg = BigInt("1486")
		const addressnYFIQgb = accounts[3]
//		const boolTH16Poa = await GFCYaLdVz3.burnFrom.call(addressktu97ua, uintBW2iJr, {from: accounts[2]});
//		const boolLw17mmN = await GFCYaLdVz3.approve.call(addressnYFIQgb, uintBrQkkVg, {from: accounts[1]});

		await expect(GFCYaLdVz3.burnFrom.call(addressktu97ua, uintBW2iJr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintp2Nv1Ye = BigInt("1438")
		const stringGq98iNe = "0BcjvyYLmLvsWwQTaRnbXtrDeoxfVfFaCd5ngj"
		const stringQUBmsp9 = "tTTrzN0r"
		const GFCYaLdVz3 = await GFC.new(uintp2Nv1Ye, stringGq98iNe, stringQUBmsp9, {from: accounts[3]});
		const uintuUkvp9Q = BigInt("1486")
		const addressnRT5eXT = accounts[2]
		const uintPQKCsI = BigInt("2020")
		const addresskoBtJXI = accounts[2]
		const boolLw17mmN = await GFCYaLdVz3.approve.call(addressnRT5eXT, uintuUkvp9Q, {from: accounts[1]});
		const boolxe1Xwau = await GFCYaLdVz3.transfer.call(addresskoBtJXI, uintPQKCsI, {from: accounts[3]});

		assert.equal(boolLw17mmN, true)
		assert.equal(boolxe1Xwau, true)
	});

	it('test for GFC', async () => {
		const uintyiWpVjP = BigInt("1690")
		const stringUK0vyZ = "oLDBw26uHbrFIJUcNRCxmC3ugmPYlXSyinNktTa4rIAqXURDHxyFPJVWGe3ysjad7JXEaI2KOMFWOf9nZr42cqWyFk1bnt7OvZl"
		const stringAxQdi11 = "iOpIsc52XFj9dL8yiqFbvfaDyHrQwYNiap4wd3PPV3u1wg7aGYjywaCe5"
		const GFCbLuyX7J = await GFC.new(uintyiWpVjP, stringUK0vyZ, stringAxQdi11, {from: accounts[3]});
		const uintWohdK8l = BigInt("1467")
		const addressMAljKei = accounts[3]
		const uintNcH1gIx = BigInt("240")
		const uintl652kya = BigInt("1525")
		const uinta1pZyfF = BigInt("1845")
		const addressSFgnheV = accounts[3]
		const addresshB8ZDLd = accounts[3]
//		const boolmvdXlsm = await GFCbLuyX7J.burnFrom.call(addressMAljKei, uintWohdK8l, {from: accounts[2]});
//		const boolVnoPkT9 = await GFCbLuyX7J.burn.call(uintNcH1gIx, {from: accounts[3]});
//		const boolpfJVPA7 = await GFCbLuyX7J.burn.call(uintl652kya, {from: accounts[1]});
//		const boolyWnhALH = await GFCbLuyX7J.transferFrom.call(addresshB8ZDLd, addressSFgnheV, uinta1pZyfF, {from: accounts[0]});

		await expect(GFCbLuyX7J.burnFrom.call(addressMAljKei, uintWohdK8l, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})