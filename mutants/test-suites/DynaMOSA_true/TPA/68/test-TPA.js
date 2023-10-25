const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAFc9zubw = await TPA.new({from: accounts[0]});
		const uintkynpAHQ = BigInt("1030")
		const addressibhozf = accounts[2]
		const uintgEQucF4 = BigInt("524")
		const addressDRRghyh = accounts[4]
		const addressvuavvJ8 = accounts[0]
//		const boolG2n768S = await TPAFc9zubw.unlock.call(addressibhozf, uintkynpAHQ, {from: accounts[0]});
//		const booltFWzOg = await TPAFc9zubw.decreaseAllowance.call(addressDRRghyh, uintgEQucF4, {from: accounts[3]});
//		const addressqVUDcnY = await TPAFc9zubw.notFrozen.call(addressvuavvJ8, {from: accounts[3]});
//		const boolOFpwCxd = await TPAFc9zubw.paused.call({from: accounts[1]});

		await expect(TPAFc9zubw.unlock.call(addressibhozf, uintkynpAHQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringHQvDcFu = "RTD"
		const stringTyOB8NW = "PiAFGnrbK5zGOuD2nG6rBizQ2qU2IzBWD5cRoFE19wgEFsLybj9hnw49"
		const uintVnXJys6 = BigInt("185")
		const TPAFk35I37 = await TPA.new(stringHQvDcFu, stringTyOB8NW, uintVnXJys6, {from: accounts[2]});
		const uintO7LfcdV = BigInt("1207")
		const uintcimiHj9 = BigInt("757")
		const addressgxtcvWI = accounts[4]
		const addressWmFLlKH = accounts[3]
		const uintiwNyYU8 = BigInt("1800")
		const addressKtTU2D = accounts[3]
		const addressS2CxlpP = accounts[4]
		const addressw2qRcJx = accounts[5]
		const boolj8QAAMn = await TPAFk35I37.lock.call(addressgxtcvWI, uintcimiHj9, uintO7LfcdV, {from: accounts[4]});
		const booll3RYroW = await TPAFk35I37.unfreezeAccount.call(addressWmFLlKH, {from: accounts[1]});
		const boolIPn6jgh = await TPAFk35I37.transferFrom.call(addressS2CxlpP, addressKtTU2D, uintiwNyYU8, {from: accounts[1]});
		const addresseqPqr4c = await TPAFk35I37.addAdmin.call(addressw2qRcJx, {from: accounts[0]});
	});

	it('test for TPA', async () => {
		const TPAxLQwKIP = await TPA.new({from: accounts[4]});
		const uintiRJPeF = BigInt("1395")
		const uintgLg1tJ7 = BigInt("349")
		const addresslCoa6Ug = accounts[2]
		const boolizPl8n = await TPAxLQwKIP.paused.call({from: accounts[1]});
		const stringyDvf2eQ = await TPAxLQwKIP.symbol.call({from: accounts[0]});
//		const booloK0pz2I = await TPAxLQwKIP.lock.call(addresslCoa6Ug, uintgLg1tJ7, uintiRJPeF, {from: accounts[0]});
//		await TPAxLQwKIP.pause.call({from: accounts[4]});

		assert.equal(boolizPl8n, false)
		assert.equal(stringyDvf2eQ, "TPA")
		await expect(TPAxLQwKIP.lock.call(addresslCoa6Ug, uintgLg1tJ7, uintiRJPeF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAY4yVmw = await TPA.new({from: accounts[1]});
		const uintaT7UMOE = BigInt("1253")
		const uintiX9JT09 = BigInt("904")
		const addressiIWdr06 = accounts[3]
		const uintHhhgS9d = BigInt("1650")
		const addresshhAgeA9 = accounts[2]
		const uinthr9UOxx = BigInt("141")
		const addressrXfpyAe = accounts[3]
		const addressgf60V5Y = accounts[1]
		const uint8zC2bpaR = await TPAY4yVmw.decimals.call({from: accounts[2]});
		const stringRboLr4i = await TPAY4yVmw.symbol.call({from: accounts[4]});
//		const boolLMYx6Ue = await TPAY4yVmw.lock.call(addressiIWdr06, uintiX9JT09, uintaT7UMOE, {from: accounts[5]});
//		const boolDh9CWxJ = await TPAY4yVmw.increaseAllowance.call(addresshhAgeA9, uintHhhgS9d, {from: accounts[2]});
//		const boolWjRj4Nj = await TPAY4yVmw.transferFrom.call(addressgf60V5Y, addressrXfpyAe, uinthr9UOxx, {from: accounts[2]});

		assert.equal(stringRboLr4i, "TPA")
		assert.equal(uint8zC2bpaR, BigInt("18"))
		await expect(TPAY4yVmw.lock.call(addressiIWdr06, uintiX9JT09, uintaT7UMOE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAFc9zubw = await TPA.new({from: accounts[0]});
		const uintStkxKrR = BigInt("524")
		const addressiaiVurr = accounts[4]
		const addressr9tIJIo = accounts[1]
//		const booltFWzOg = await TPAFc9zubw.decreaseAllowance.call(addressiaiVurr, uintStkxKrR, {from: accounts[3]});
//		const addressqVUDcnY = await TPAFc9zubw.notFrozen.call(addressr9tIJIo, {from: accounts[3]});
//		const boolOFpwCxd = await TPAFc9zubw.paused.call({from: accounts[1]});

		await expect(TPAFc9zubw.decreaseAllowance.call(addressiaiVurr, uintStkxKrR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAY4yVmw = await TPA.new({from: accounts[1]});
		const addressBMjLNtt = accounts[1]
		const addressS4tMk17 = accounts[2]
		const uintNxIdMs7 = BigInt("1253")
		const uinthVtZfwR = BigInt("904")
		const addressj1JAo4B = accounts[3]
		const addressVOz4sag = accounts[5]
		const uintUm3UxyA = BigInt("1650")
		const addresshmlmDo = accounts[2]
//		const addressfrKqPcd = await TPAY4yVmw.notFrozen.call(addressBMjLNtt, {from: accounts[0]});
//		const uint8zC2bpaR = await TPAY4yVmw.decimals.call({from: accounts[2]});
//		const boolo4wYkZM = await TPAY4yVmw.isAdmin.call(addressS4tMk17, {from: "0x0000000000000000000000000000000000000001"});
//		const stringRboLr4i = await TPAY4yVmw.symbol.call({from: accounts[4]});
//		const boolLMYx6Ue = await TPAY4yVmw.lock.call(addressj1JAo4B, uinthVtZfwR, uintNxIdMs7, {from: accounts[5]});
//		const boolimUzVux = await TPAY4yVmw.isOwner.call(addressVOz4sag, {from: accounts[3]});
//		const boolDh9CWxJ = await TPAY4yVmw.increaseAllowance.call(addresshmlmDo, uintUm3UxyA, {from: accounts[2]});

		await expect(TPAY4yVmw.notFrozen.call(addressBMjLNtt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAY4yVmw = await TPA.new({from: accounts[1]});
		const addresshfHGlx9 = accounts[2]
		const addressFZzcQkL = accounts[0]
		const uinteBN8ZlS = BigInt("1260")
		const uintWELhUDJ = BigInt("904")
		const addresscPRE1iK = accounts[3]
		const addressoW2LsPN = accounts[4]
		const uintVYkAvS2 = BigInt("1650")
		const addressWoQVNM = accounts[2]
		const uintCKCpRx = BigInt("141")
		const addressjADwrF = accounts[3]
		const addressfkiVtWZ = accounts[1]
		const uint8zC2bpaR = await TPAY4yVmw.decimals.call({from: accounts[2]});
		const stringRboLr4i = await TPAY4yVmw.symbol.call({from: accounts[4]});
		const uint256f7xXz9i = await TPAY4yVmw.allowance.call(addressFZzcQkL, addresshfHGlx9, {from: accounts[3]});
//		const boolLMYx6Ue = await TPAY4yVmw.lock.call(addresscPRE1iK, uintWELhUDJ, uinteBN8ZlS, {from: accounts[5]});
//		const addressw1pySoG = await TPAY4yVmw.addAdmin.call(addressoW2LsPN, {from: accounts[3]});
//		const boolDh9CWxJ = await TPAY4yVmw.increaseAllowance.call(addressWoQVNM, uintVYkAvS2, {from: accounts[2]});
//		const boolWjRj4Nj = await TPAY4yVmw.transferFrom.call(addressfkiVtWZ, addressjADwrF, uintCKCpRx, {from: accounts[2]});

		assert.equal(stringRboLr4i, "TPA")
		assert.equal(uint256f7xXz9i, BigInt("0"))
		assert.equal(uint8zC2bpaR, BigInt("18"))
		await expect(TPAY4yVmw.lock.call(addresscPRE1iK, uintWELhUDJ, uinteBN8ZlS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAxLQwKIP = await TPA.new({from: accounts[4]});
		const addressAP1PN3 = accounts[2]
		const uint3W2Dd9 = BigInt("1395")
		const uintZgFACk3 = BigInt("349")
		const addressIJGNjmX = accounts[2]
		const addressNRHVh7K = accounts[3]
		const uintRZtDkB3 = BigInt("260")
		const uintEGu4RgL = BigInt("1794")
		const addressVooMCgB = accounts[4]
		const boolizPl8n = await TPAxLQwKIP.paused.call({from: accounts[1]});
		const stringyDvf2eQ = await TPAxLQwKIP.symbol.call({from: accounts[0]});
//		const boolCwoWsIU = await TPAxLQwKIP.unfreezeAccount.call(addressAP1PN3, {from: accounts[4]});
//		const booloK0pz2I = await TPAxLQwKIP.lock.call(addressIJGNjmX, uintZgFACk3, uint3W2Dd9, {from: accounts[0]});
//		const uint256XsFawjn = await TPAxLQwKIP.balanceOf.call(addressNRHVh7K, {from: accounts[3]});
//		await TPAxLQwKIP.pause.call({from: accounts[4]});
//		const booljBSwr6q = await TPAxLQwKIP.lock.call(addressVooMCgB, uintEGu4RgL, uintRZtDkB3, {from: accounts[4]});

		assert.equal(boolizPl8n, false)
		assert.equal(stringyDvf2eQ, "TPA")
		await expect(TPAxLQwKIP.unfreezeAccount.call(addressAP1PN3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAY4yVmw = await TPA.new({from: accounts[1]});
		const addressjbowS3n = accounts[2]
		const uintzIaVbMJ = BigInt("1253")
		const uintW21XazK = BigInt("904")
		const addressmKo5FGj = accounts[3]
		const uintFkx9M7S = BigInt("141")
		const addressYGho3mr = accounts[3]
		const addressYXfsBTS = accounts[1]
		const uint256rR27hbk = await TPAY4yVmw.balanceOf.call(addressjbowS3n, {from: accounts[2]});
		const uint8zC2bpaR = await TPAY4yVmw.decimals.call({from: accounts[2]});
		const stringRboLr4i = await TPAY4yVmw.symbol.call({from: accounts[4]});
//		const boolLMYx6Ue = await TPAY4yVmw.lock.call(addressmKo5FGj, uintW21XazK, uintzIaVbMJ, {from: accounts[5]});
//		const boolWjRj4Nj = await TPAY4yVmw.transferFrom.call(addressYXfsBTS, addressYGho3mr, uintFkx9M7S, {from: accounts[2]});

		assert.equal(stringRboLr4i, "TPA")
		assert.equal(uint256rR27hbk, BigInt("0"))
		assert.equal(uint8zC2bpaR, BigInt("18"))
		await expect(TPAY4yVmw.lock.call(addressmKo5FGj, uintW21XazK, uintzIaVbMJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAxLQwKIP = await TPA.new({from: accounts[4]});
		const uintlvzSqNM = BigInt("1854")
		const addressm8rrOX = accounts[2]
		const uintCqtsndJ = BigInt("1395")
		const uintll1GdRG = BigInt("349")
		const addressZpyDJSH = accounts[2]
		const uintNtcRK73 = BigInt("1271")
		const addressVVwZPh8 = accounts[2]
//		const addressalIxMPZ = await TPAxLQwKIP.burnFrom.call(addressm8rrOX, uintlvzSqNM, {from: accounts[1]});
//		const boolizPl8n = await TPAxLQwKIP.paused.call({from: accounts[1]});
//		const stringyDvf2eQ = await TPAxLQwKIP.symbol.call({from: accounts[0]});
//		const booloK0pz2I = await TPAxLQwKIP.lock.call(addressZpyDJSH, uintll1GdRG, uintCqtsndJ, {from: accounts[0]});
//		const boolPuQb8xp = await TPAxLQwKIP.increaseAllowance.call(addressVVwZPh8, uintNtcRK73, {from: accounts[1]});
//		await TPAxLQwKIP.pause.call({from: accounts[4]});

		await expect(TPAxLQwKIP.burnFrom.call(addressm8rrOX, uintlvzSqNM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAFc9zubw = await TPA.new({from: accounts[0]});
		const uintlks8hXm = BigInt("1504")
		const addresstcz3sfR = "0x0000000000000000000000000000000000000001"
		const uintfprC7s8 = BigInt("524")
		const address77CAO2 = accounts[4]
//		const boolyec0XL = await TPAFc9zubw.transfer.call(addresstcz3sfR, uintlks8hXm, {from: accounts[3]});
//		const booltFWzOg = await TPAFc9zubw.decreaseAllowance.call(address77CAO2, uintfprC7s8, {from: accounts[3]});
//		const boolOFpwCxd = await TPAFc9zubw.paused.call({from: accounts[1]});
//		await TPAFc9zubw.unpause.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAFc9zubw.transfer.call(addresstcz3sfR, uintlks8hXm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAFc9zubw = await TPA.new({from: accounts[0]});
		const uintUgFPXFf = BigInt("524")
		const addressC1p8CMc = accounts[4]
		const uint256bijfd4 = await TPAFc9zubw.totalSupply.call({from: accounts[4]});
//		const booltFWzOg = await TPAFc9zubw.decreaseAllowance.call(addressC1p8CMc, uintUgFPXFf, {from: accounts[3]});

		assert.equal(uint256bijfd4, BigInt("10000000000000000000000000000"))
		await expect(TPAFc9zubw.decreaseAllowance.call(addressC1p8CMc, uintUgFPXFf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAY4yVmw = await TPA.new({from: accounts[1]});
		const addressSHv28ht = accounts[2]
		const uintfqp06x = BigInt("1253")
		const uintuzpzwgD = BigInt("904")
		const addressFvAAfvB = accounts[3]
		const uintMrRF8vv = BigInt("141")
		const addresssQ58cn2 = accounts[3]
		const addressWa2RiyA = accounts[1]
		const uint256rR27hbk = await TPAY4yVmw.balanceOf.call(addressSHv28ht, {from: accounts[2]});
		const uint8zC2bpaR = await TPAY4yVmw.decimals.call({from: accounts[2]});
		const stringRboLr4i = await TPAY4yVmw.symbol.call({from: accounts[4]});
//		await TPAY4yVmw.renounceAdmin.call({from: accounts[0]});
//		const boolLMYx6Ue = await TPAY4yVmw.lock.call(addressFvAAfvB, uintuzpzwgD, uintfqp06x, {from: accounts[5]});
//		const boolWjRj4Nj = await TPAY4yVmw.transferFrom.call(addressWa2RiyA, addresssQ58cn2, uintMrRF8vv, {from: accounts[2]});

		assert.equal(stringRboLr4i, "TPA")
		assert.equal(uint256rR27hbk, BigInt("0"))
		assert.equal(uint8zC2bpaR, BigInt("18"))
		await expect(TPAY4yVmw.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAFc9zubw = await TPA.new({from: accounts[0]});
		const uintwNhsYx = BigInt("1514")
		const addresswo1QIPQ = accounts[4]
		const addressjHSyxf1 = "0x0000000000000000000000000000000000000001"
		const uintAebLtFV = BigInt("529")
		const addressjOIoDgo = accounts[4]
//		const boolt8jRS3a = await TPAFc9zubw.transferFrom.call(addressjHSyxf1, addresswo1QIPQ, uintwNhsYx, {from: "0x0000000000000000000000000000000000000001"});
//		const booltFWzOg = await TPAFc9zubw.decreaseAllowance.call(addressjOIoDgo, uintAebLtFV, {from: accounts[3]});
//		await TPAFc9zubw.whenNotPaused.call({from: accounts[0]});
//		const boolOFpwCxd = await TPAFc9zubw.paused.call({from: accounts[1]});

		await expect(TPAFc9zubw.transferFrom.call(addressjHSyxf1, addresswo1QIPQ, uintwNhsYx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAY4yVmw = await TPA.new({from: accounts[1]});
		const addressnJwUX27 = accounts[2]
		const uintOVP76Wf = BigInt("802")
		const addressvJR1P8c = accounts[2]
		const uintmYZ7cMr = BigInt("990")
		const addresskile56f = accounts[1]
		const uintd8OQK31 = BigInt("1253")
		const uintKoqK03P = BigInt("904")
		const addressV4YRDst = accounts[3]
		const uintvvWVTng = BigInt("141")
		const addressq76odWq = accounts[3]
		const addressSHbmYWG = accounts[1]
		const uint256rR27hbk = await TPAY4yVmw.balanceOf.call(addressnJwUX27, {from: accounts[2]});
		const boolC5SlfZ9 = await TPAY4yVmw.approve.call(addressvJR1P8c, uintOVP76Wf, {from: "0x0000000000000000000000000000000000000001"});
		const uint8zC2bpaR = await TPAY4yVmw.decimals.call({from: accounts[2]});
		const stringRboLr4i = await TPAY4yVmw.symbol.call({from: accounts[4]});
		const bools9zAszf = await TPAY4yVmw.transfer.call(addresskile56f, uintmYZ7cMr, {from: accounts[1]});
//		const boolLMYx6Ue = await TPAY4yVmw.lock.call(addressV4YRDst, uintKoqK03P, uintd8OQK31, {from: accounts[5]});
//		const stringVjWBZR = await TPAY4yVmw.name.call({from: accounts[1]});
//		const boolWjRj4Nj = await TPAY4yVmw.transferFrom.call(addressSHbmYWG, addressq76odWq, uintvvWVTng, {from: accounts[2]});

		assert.equal(boolC5SlfZ9, true)
		assert.equal(bools9zAszf, true)
		assert.equal(stringRboLr4i, "TPA")
		assert.equal(uint256rR27hbk, BigInt("0"))
		assert.equal(uint8zC2bpaR, BigInt("18"))
		await expect(TPAY4yVmw.lock.call(addressV4YRDst, uintKoqK03P, uintd8OQK31, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAFc9zubw = await TPA.new({from: accounts[0]});
		const uintgngELNb = BigInt("955")
		const addressXqI9A9B = accounts[2]
		const boolOFpwCxd = await TPAFc9zubw.paused.call({from: accounts[1]});
//		await TPAFc9zubw.pause.call({from: accounts[0]});
//		const boolHo8lTJZ = await TPAFc9zubw.transfer.call(addressXqI9A9B, uintgngELNb, {from: accounts[0]});

		assert.equal(boolOFpwCxd, false)
		await expect(TPAFc9zubw.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAY4yVmw = await TPA.new({from: accounts[1]});
		const addressCL7tnUP = accounts[2]
		const uintXodKlA4 = BigInt("179")
		const addressdFRvaZg = accounts[2]
		const addressjFqg2D = "0x0000000000000000000000000000000000000001"
		const addressTmIHQj = accounts[5]
		const uintYOMpEid = BigInt("1253")
		const uintuYPnSl = BigInt("904")
		const addressRdwEOz = accounts[3]
		const uintlgtC6an = BigInt("141")
		const addresseUx11b = accounts[3]
		const addresszYqIeKr = accounts[1]
		const uint256rR27hbk = await TPAY4yVmw.balanceOf.call(addressCL7tnUP, {from: accounts[2]});
		const uint8zC2bpaR = await TPAY4yVmw.decimals.call({from: accounts[2]});
		const boolbGU6Q1D = await TPAY4yVmw.increaseAllowance.call(addressdFRvaZg, uintXodKlA4, {from: accounts[2]});
//		const addressHDLt9u = await TPAY4yVmw.upgradeTo.call(addressjFqg2D, {from: accounts[4]});
//		const stringRboLr4i = await TPAY4yVmw.symbol.call({from: accounts[4]});
//		const addressbTozA2L = await TPAY4yVmw.removeAdmin.call(addressTmIHQj, {from: accounts[5]});
//		await TPAY4yVmw.renounceAdmin.call({from: accounts[0]});
//		const boolLMYx6Ue = await TPAY4yVmw.lock.call(addressRdwEOz, uintuYPnSl, uintYOMpEid, {from: accounts[5]});
//		const boolWjRj4Nj = await TPAY4yVmw.transferFrom.call(addresszYqIeKr, addresseUx11b, uintlgtC6an, {from: accounts[2]});

		assert.equal(boolbGU6Q1D, true)
		assert.equal(uint256rR27hbk, BigInt("0"))
		assert.equal(uint8zC2bpaR, BigInt("18"))
		await expect(TPAY4yVmw.upgradeTo.call(addressjFqg2D, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPArwSvZIv = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addressWLn0kDr = accounts[1]
		await TPArwSvZIv.whenPaused.call({from: accounts[2]});
		const addressIkNX800 = await TPArwSvZIv.transferOwnership.call(addressWLn0kDr, {from: accounts[3]});
		await TPArwSvZIv.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const stringJQflyyQ = await TPArwSvZIv.name.call({from: accounts[1]});
	});

	it('test for TPA', async () => {
		const TPAY4yVmw = await TPA.new({from: accounts[1]});
		const addressU2u5FEF = accounts[2]
		const uintGE01BCE = BigInt("1324")
		const uintKIy237x = BigInt("1253")
		const uintiBeM5qs = BigInt("904")
		const addressEr3L99k = accounts[4]
		const uintkZWO3jw = BigInt("141")
		const addressdKcxgmH = accounts[4]
		const addressLqO7Ew = accounts[2]
		const uint256rR27hbk = await TPAY4yVmw.balanceOf.call(addressU2u5FEF, {from: accounts[2]});
		const stringRboLr4i = await TPAY4yVmw.symbol.call({from: accounts[4]});
//		const uint256P5Kgb0M = await TPAY4yVmw.burn.call(uintGE01BCE, {from: accounts[2]});
//		await TPAY4yVmw.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolLMYx6Ue = await TPAY4yVmw.lock.call(addressEr3L99k, uintiBeM5qs, uintKIy237x, {from: accounts[5]});
//		const boolWjRj4Nj = await TPAY4yVmw.transferFrom.call(addressLqO7Ew, addressdKcxgmH, uintkZWO3jw, {from: accounts[2]});

		assert.equal(stringRboLr4i, "TPA")
		assert.equal(uint256rR27hbk, BigInt("0"))
		await expect(TPAY4yVmw.burn.call(uintGE01BCE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAFc9zubw = await TPA.new({from: accounts[0]});
		const addresskV2XNnu = accounts[0]
		const uintf4TpqbX = BigInt("1535")
		const address8yxjUF = "0x0000000000000000000000000000000000000002"
		const boolskrgaGU = await TPAFc9zubw.freezeAccount.call(addresskV2XNnu, {from: accounts[0]});
//		const boolyec0XL = await TPAFc9zubw.transfer.call(address8yxjUF, uintf4TpqbX, {from: accounts[3]});

		assert.equal(boolskrgaGU, true)
		await expect(TPAFc9zubw.transfer.call(address8yxjUF, uintf4TpqbX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtyLJCj4 = await TPA.new({from: accounts[0]});
		const uintQBsrH0k = BigInt("416")
		const addressQB7E9I8 = accounts[4]
		const addresspGulH6h = accounts[0]
		const stringG4Iet84 = await TPAtyLJCj4.name.call({from: accounts[5]});
//		await TPAtyLJCj4.onlyOwner.call({from: accounts[5]});
//		const boolfYvyCpz = await TPAtyLJCj4.decreaseAllowance.call(addressQB7E9I8, uintQBsrH0k, {from: accounts[2]});
//		await TPAtyLJCj4.unpause.call({from: accounts[1]});
//		const boolwuc0nPV = await TPAtyLJCj4.freezeAccount.call(addresspGulH6h, {from: accounts[2]});

		assert.equal(stringG4Iet84, "TPA")
		await expect(TPAtyLJCj4.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAY4yVmw = await TPA.new({from: accounts[1]});
		const uintCJ8zgo7 = BigInt("250")
		const addressZzo2tZo = accounts[2]
		const addresspm6wD3r = accounts[4]
		const addressVBpxcCC = accounts[4]
//		await TPAY4yVmw.renounceAdmin.call({from: accounts[1]});
//		const addressssgsoj0 = await TPAY4yVmw.burnFrom.call(addressZzo2tZo, uintCJ8zgo7, {from: accounts[1]});
//		const boolagcCTj4 = await TPAY4yVmw.unfreezeAccount.call(addresspm6wD3r, {from: accounts[2]});
//		const uint256rR27hbk = await TPAY4yVmw.balanceOf.call(addressVBpxcCC, {from: accounts[2]});

		await expect(TPAY4yVmw.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAY4yVmw = await TPA.new({from: accounts[1]});
		const addresswB4aG9a = accounts[4]
		const uinteHwRZQA = BigInt("1349")
		const uintPX8dqg6 = BigInt("176")
		const addressejujSEb = accounts[4]
		const uint256rR27hbk = await TPAY4yVmw.balanceOf.call(addresswB4aG9a, {from: accounts[2]});
		const boolJILvQBu = await TPAY4yVmw.transferWithLock.call(addressejujSEb, uintPX8dqg6, uinteHwRZQA, {from: accounts[1]});

		assert.equal(boolJILvQBu, true)
		assert.equal(uint256rR27hbk, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAY4yVmw = await TPA.new({from: accounts[1]});
		const addressKDWM8HL = accounts[6]
		const addressQfiHVYc = accounts[4]
		const uintFRTcO9H = BigInt("1395")
		const addresss04TFzm = accounts[4]
		const addressY7IMslG = "0x00000000000000000000000000000000000000-1"
		const addressvbxZOl = accounts[0]
		const addressWz7zcFl = accounts[0]
		const addressu2zTdPI = "0x0000000000000000000000000000000000000001"
		const uintn7nvOst = BigInt("1533")
		const uintxGZG9xQ = BigInt("1446")
		const addressYmM4Eqv = accounts[2]
		const addressNtuw1Zg = accounts[4]
		const uintcM0nQ2C = BigInt("1682")
		const addressErF1f7g = accounts[3]
		const uint256rR27hbk = await TPAY4yVmw.balanceOf.call(addressKDWM8HL, {from: accounts[2]});
		const uint256vWOqkzZ = await TPAY4yVmw.balanceOf.call(addressQfiHVYc, {from: accounts[3]});
//		const boolzt8s72C = await TPAY4yVmw.transferFrom.call(addressY7IMslG, addresss04TFzm, uintFRTcO9H, {from: accounts[4]});
//		const uint256EgH8hFZ = await TPAY4yVmw.balanceOf.call(addressvbxZOl, {from: "0x0000000000000000000000000000000000000001"});
//		const addressu2g5EwV = await TPAY4yVmw.addAdmin.call(addressWz7zcFl, {from: accounts[3]});
//		const addressHPxtNQh = await TPAY4yVmw.transferOwnership.call(addressu2zTdPI, {from: accounts[5]});
//		const bool6ndLSy = await TPAY4yVmw.transferWithLock.call(addressYmM4Eqv, uintxGZG9xQ, uintn7nvOst, {from: accounts[3]});
//		await TPAY4yVmw.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresshXADOc = await TPAY4yVmw.upgradeTo.call(addressNtuw1Zg, {from: accounts[4]});
//		const booln3NNG0X = await TPAY4yVmw.approve.call(addressErF1f7g, uintcM0nQ2C, {from: accounts[2]});

		assert.equal(uint256rR27hbk, BigInt("0"))
		assert.equal(uint256vWOqkzZ, BigInt("0"))
		await expect(TPAY4yVmw.transferFrom.call(addressY7IMslG, addresss04TFzm, uintFRTcO9H, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})