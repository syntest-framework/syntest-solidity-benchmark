const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20LsA5Zz8 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressb24p5KX = accounts[2]
		const uintZPMawzn = BigInt("317")
		const uintL5sZKuG = BigInt("1103")
		const uintIOUTos = BigInt("1518")
		const uintfdIDCLT = BigInt("1901")
		const addressfzUFuCf = accounts[1]
		await UNIWHALE_ERC20LsA5Zz8.clearETH.call({from: accounts[0]});
		const booloCZwUh = await UNIWHALE_ERC20LsA5Zz8.tokenSale.call(addressb24p5KX, {from: accounts[2]});
		const uint256Cdv3m9Q = await UNIWHALE_ERC20LsA5Zz8.viewSale.call({from: accounts[1]});
		const uint256i0wIPkJ = await UNIWHALE_ERC20LsA5Zz8.startAirdrop.call(uintfdIDCLT, uintIOUTos, uintL5sZKuG, uintZPMawzn, {from: accounts[4]});
		const boolx052e8 = await UNIWHALE_ERC20LsA5Zz8.tokenSale.call(addressfzUFuCf, {from: accounts[1]});

		await expect(UNIWHALE_ERC20LsA5Zz8.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20QgCBpfJ = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJigHWwN = BigInt("263")
		const uintFCCqFvN = BigInt("1717")
		const uint42UQCP = BigInt("1840")
		const uintqBIg3to = BigInt("1939")
		const uintgSYFPTz = BigInt("1196")
		const uintxbJRtoj = BigInt("694")
		const uintCGJNVCg = BigInt("122")
		const uinttMTQH0 = BigInt("1996")
		const uintcXM24nX = BigInt("1952")
		const uintjrKPIoa = BigInt("277")
		const uintH9z2I9o = BigInt("270")
		const uintYsUN8Cz = BigInt("910")
		const uintPJfgFRQ = BigInt("1978")
		const uintCFtpXHG = BigInt("893")
		const uinta4AdgFj = BigInt("665")
		const uintjiUH68D = BigInt("1313")
		const uintZE7z6H0 = BigInt("186")
		const uintgF4reYP = BigInt("239")
		const uint256ppTdBW = await UNIWHALE_ERC20QgCBpfJ.startAirdrop.call(uintqBIg3to, uint42UQCP, uintFCCqFvN, uintJigHWwN, {from: accounts[2]});
		const uint256iKiLs2d = await UNIWHALE_ERC20QgCBpfJ.startAirdrop.call(uinttMTQH0, uintCGJNVCg, uintxbJRtoj, uintgSYFPTz, {from: accounts[2]});
		const uint2565OHamX = await UNIWHALE_ERC20QgCBpfJ.startSale.call(uintPJfgFRQ, uintYsUN8Cz, uintH9z2I9o, uintjrKPIoa, uintcXM24nX, {from: accounts[3]});
		const uint256Pygprh = await UNIWHALE_ERC20QgCBpfJ.startSale.call(uintgF4reYP, uintZE7z6H0, uintjiUH68D, uinta4AdgFj, uintCFtpXHG, {from: accounts[1]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20wH2MjQB = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uintPJ6b2qm = BigInt("1772")
		const uintBv7POii = BigInt("1394")
		const uintup8wBs = BigInt("287")
		const uintOTyV31v = BigInt("693")
		const uint256ivy8tu = await UNIWHALE_ERC20wH2MjQB.viewSale.call({from: accounts[0]});
		const uint256iMu14o7 = await UNIWHALE_ERC20wH2MjQB.startAirdrop.call(uintOTyV31v, uintup8wBs, uintBv7POii, uintPJ6b2qm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Udo227 = await UNIWHALE_ERC20wH2MjQB.viewSale.call({from: accounts[1]});

		await expect(UNIWHALE_ERC20wH2MjQB.startAirdrop.call(uintOTyV31v, uintup8wBs, uintBv7POii, uintPJ6b2qm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20nqD22A = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintU1KG6m = BigInt("846")
		const uintVdF3iEp = BigInt("1159")
		const uintnqTjP7 = BigInt("672")
		const uintZIFnsvK = BigInt("473")
		const uintCOpPh1 = BigInt("1708")
		const uintJpH0Ez = BigInt("799")
		const uintcp8JnHL = BigInt("849")
		const uintz2nE5uV = BigInt("915")
		const uintcIzZdH = BigInt("1049")
		const uintOWWQD4 = BigInt("968")
		const uintmkearFa = BigInt("1717")
		const uint3DmdiR = BigInt("1121")
		const uint256seREms = await UNIWHALE_ERC20nqD22A.viewAirdrop.call({from: accounts[3]});
		const uint256ixi0eft = await UNIWHALE_ERC20nqD22A.startAirdrop.call(uintZIFnsvK, uintnqTjP7, uintVdF3iEp, uintU1KG6m, {from: accounts[5]});
		const uint256f3mx8vy = await UNIWHALE_ERC20nqD22A.startAirdrop.call(uintz2nE5uV, uintcp8JnHL, uintJpH0Ez, uintCOpPh1, {from: accounts[5]});
		const uint256mJNYDI4 = await UNIWHALE_ERC20nqD22A.startAirdrop.call(uint3DmdiR, uintmkearFa, uintOWWQD4, uintcIzZdH, {from: accounts[0]});

		await expect(UNIWHALE_ERC20nqD22A.startAirdrop.call(uintZIFnsvK, uintnqTjP7, uintVdF3iEp, uintU1KG6m, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20hLKHyzy = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressIbeSpu4 = accounts[5]
		const uint256q1GRrC = await UNIWHALE_ERC20hLKHyzy.viewSale.call({from: accounts[3]});
		const boolaUSgGJ = await UNIWHALE_ERC20hLKHyzy.getAirdrop.call(addressIbeSpu4, {from: accounts[4]});
		const uint256s8X2Uq3 = await UNIWHALE_ERC20hLKHyzy.viewSale.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20hLKHyzy.getAirdrop.call(addressIbeSpu4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20Tka01xi = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressOW5I3Ep = accounts[3]
		const addressNFMumkR = "0x0000000000000000000000000000000000000001"
		const addressQzYdWvZ = accounts[2]
		const uintvcYCcoq = BigInt("1336")
		const uintQBKZLN1 = BigInt("902")
		const uintuCBQd0q = BigInt("794")
		const uintefvbPZS = BigInt("130")
		const addressZng3eH5 = accounts[1]
		const uintJQHHPpt = BigInt("582")
		const uintbWRaSU = BigInt("771")
		const uintqq8lfRU = BigInt("711")
		const uintltRqKPM = BigInt("1820")
		const uintVBDidFc = BigInt("1622")
		const addressDsAVKp = accounts[3]
		const boolJtX5FHL = await UNIWHALE_ERC20Tka01xi.tokenSale.call(addressOW5I3Ep, {from: accounts[2]});
		const boolZzTmE93 = await UNIWHALE_ERC20Tka01xi.getAirdrop.call(addressNFMumkR, {from: accounts[1]});
		const boolM7m3u8O = await UNIWHALE_ERC20Tka01xi.tokenSale.call(addressQzYdWvZ, {from: accounts[4]});
		const uint256xcMGdm9 = await UNIWHALE_ERC20Tka01xi.startAirdrop.call(uintefvbPZS, uintuCBQd0q, uintQBKZLN1, uintvcYCcoq, {from: accounts[3]});
		const boolz3O3TiY = await UNIWHALE_ERC20Tka01xi.tokenSale.call(addressZng3eH5, {from: accounts[4]});
		const uint256ou0rq8z = await UNIWHALE_ERC20Tka01xi.startSale.call(uintVBDidFc, uintltRqKPM, uintqq8lfRU, uintbWRaSU, uintJQHHPpt, {from: accounts[4]});
		const booloBU6aTU = await UNIWHALE_ERC20Tka01xi.tokenSale.call(addressDsAVKp, {from: accounts[4]});
		const uint256BztkS2f = await UNIWHALE_ERC20Tka01xi.viewSale.call({from: accounts[4]});
		const uint256hhakXv2 = await UNIWHALE_ERC20Tka01xi.viewSale.call({from: accounts[2]});
		await UNIWHALE_ERC20Tka01xi.clearETH.call({from: accounts[2]});

		await expect(UNIWHALE_ERC20Tka01xi.tokenSale.call(addressOW5I3Ep, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20V8PiO8 = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintPr3g4hi = BigInt("91")
		const uintIytTHVq = BigInt("199")
		const uintRdsTe2f = BigInt("310")
		const uintuDSmQ2G = BigInt("617")
		const uintgimFrH = BigInt("1995")
		const uintLzaRY2l = BigInt("608")
		const uinte5HDm1p = BigInt("154")
		const uintK7JN77A = BigInt("562")
		const uintondYY8E = BigInt("1845")
		const uint256tUM5UH9 = await UNIWHALE_ERC20V8PiO8.startAirdrop.call(uintuDSmQ2G, uintRdsTe2f, uintIytTHVq, uintPr3g4hi, {from: accounts[0]});
		const uint256vsPhtw1 = await UNIWHALE_ERC20V8PiO8.viewSale.call({from: accounts[1]});
		const uint256AbcAQ2 = await UNIWHALE_ERC20V8PiO8.viewAirdrop.call({from: accounts[5]});
		const uint256PScvpiE = await UNIWHALE_ERC20V8PiO8.startSale.call(uintondYY8E, uintK7JN77A, uinte5HDm1p, uintLzaRY2l, uintgimFrH, {from: accounts[3]});

		await expect(UNIWHALE_ERC20V8PiO8.startSale.call(uintondYY8E, uintK7JN77A, uinte5HDm1p, uintLzaRY2l, uintgimFrH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20f69NkR2 = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintAjjx8cB = BigInt("1311")
		const uintYBjHO3 = BigInt("1687")
		const uintVVZAVPR = BigInt("306")
		const uintobdh6XL = BigInt("906")
		const uintH1SYlRy = BigInt("1654")
		const uint256ualJtj = await UNIWHALE_ERC20f69NkR2.viewAirdrop.call({from: accounts[0]});
		await UNIWHALE_ERC20f69NkR2.clearETH.call({from: accounts[2]});
		const uint256ksn5Kv = await UNIWHALE_ERC20f69NkR2.startSale.call(uintH1SYlRy, uintobdh6XL, uintVVZAVPR, uintYBjHO3, uintAjjx8cB, {from: accounts[4]});

		await expect(UNIWHALE_ERC20f69NkR2.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20TMtgUZd = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintqyWcKQW = BigInt("1009")
		const uintQDkM7r = BigInt("879")
		const uintwpmQoH9 = BigInt("1729")
		const uintWslb26j = BigInt("543")
		const uintMDzoh2c = BigInt("393")
		const addresslICGlvt = accounts[2]
		const uintLrGAFk = BigInt("744")
		const uintstoLBdP = BigInt("213")
		const uintFFy9lrJ = BigInt("777")
		const uint6OHNMm = BigInt("500")
		const uint256rjYTYij = await UNIWHALE_ERC20TMtgUZd.startSale.call(uintMDzoh2c, uintWslb26j, uintwpmQoH9, uintQDkM7r, uintqyWcKQW, {from: accounts[1]});
		const boolcvj7u8g = await UNIWHALE_ERC20TMtgUZd.getAirdrop.call(addresslICGlvt, {from: accounts[1]});
		const uint256qBOlbu = await UNIWHALE_ERC20TMtgUZd.viewAirdrop.call({from: accounts[1]});
		const uint256BQT8XWS = await UNIWHALE_ERC20TMtgUZd.startAirdrop.call(uint6OHNMm, uintFFy9lrJ, uintstoLBdP, uintLrGAFk, {from: accounts[3]});

		await expect(UNIWHALE_ERC20TMtgUZd.getAirdrop.call(addresslICGlvt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})