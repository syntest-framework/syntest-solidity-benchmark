const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringHq5ZJky = "exM6J0cdMwCbkeSyYba6lEPqTrh3xdbql3URHcbsR3u8zBbL"
		const stringwy4fgR8 = "a6aHbQvoxqlBifJbx9Y2EvEGDBbdQc"
		const uint32rUSl = BigInt("137")
		const WOLFTrw8y9 = await WOLF.new(stringHq5ZJky, stringwy4fgR8, uint32rUSl, {from: accounts[2]});
		const uintFWeinCC = BigInt("779")
		const addressX4VZaal = accounts[0]
		const uintethzpaW = BigInt("1784")
		const addressujZA3M = accounts[3]
		const uintVXkgxcC = BigInt("1230")
		const addressb7Avvyp = accounts[3]
		const uintZBNuLXV = BigInt("1272")
		const addresspRBCBte = accounts[1]
		const uintspBpVIP = BigInt("1170")
		const addressqRjVnzs = "0x0000000000000000000000000000000000000001"
		const boolz0BF5HW = await WOLFTrw8y9.approve.call(addressX4VZaal, uintFWeinCC, {from: accounts[1]});
//		const boolZH7VToP = await WOLFTrw8y9.approveAndCall.call(addressujZA3M, uintethzpaW, {from: accounts[3]});
//		const boolRIoLNAF = await WOLFTrw8y9.approveAndCall.call(addressb7Avvyp, uintVXkgxcC, {from: accounts[3]});
//		const boolX5VuwE = await WOLFTrw8y9.approveAndCall.call(addresspRBCBte, uintZBNuLXV, {from: accounts[1]});
//		const boolsNHjapf = await WOLFTrw8y9.transfer.call(addressqRjVnzs, uintspBpVIP, {from: accounts[1]});

		assert.equal(boolz0BF5HW, true)
		await expect(WOLFTrw8y9.approveAndCall.call(addressujZA3M, uintethzpaW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringpuCekj5 = "RxuDvJsDmb6cck0lXFKHxULu2iHuKYBWEeApeLuhf2vBIEQTXrP7k0fkQDFxkTSdXTTW6E8M1YjSxEJMZbpmm1wjtOB"
		const stringdS8CP2W = "ek3CS2b4qHGtYmtMxD5IHmwSgya5cInFlB34b57sPLsLxfdI7SWF30Gw9OGkqh3vDQ2qNyEPrhWg433iH"
		const uintNogkwdu = BigInt("1884")
		const WOLF9YlrgF = await WOLF.new(stringpuCekj5, stringdS8CP2W, uintNogkwdu, {from: accounts[5]});
		const uintvpCXTzI = BigInt("1530")
		const addressG6yJ1B = accounts[0]
		const uintlZa4RWd = BigInt("1182")
		const addresswfEuZlc = accounts[0]
		const uintt2OIeV = BigInt("1375")
		const addressC4FWKMX = accounts[0]
		const boolrb9MY2m = await WOLF9YlrgF.approve.call(addressG6yJ1B, uintvpCXTzI, {from: accounts[4]});
//		const boolQgHLJ6E = await WOLF9YlrgF.transfer.call(addresswfEuZlc, uintlZa4RWd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrssaCr = await WOLF9YlrgF.approve.call(addressC4FWKMX, uintt2OIeV, {from: accounts[0]});

		assert.equal(boolrb9MY2m, true)
		await expect(WOLF9YlrgF.transfer.call(addresswfEuZlc, uintlZa4RWd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringROrvyUY = "zdQhgrme05HB3IwJFEse9D36pV8nEal2"
		const stringWypI1uf = "vPHjMAMn2yMO5RAVnQcV0xk2X96umNueWtGHevUMhJAzIlA"
		const uintOiQezqj = BigInt("832")
		const WOLFY2WuMcc = await WOLF.new(stringROrvyUY, stringWypI1uf, uintOiQezqj, {from: accounts[2]});
		const uintyxxbJij = BigInt("1599")
		const addresspO0sCEJ = accounts[3]
		const addressDmv1qiC = accounts[4]
		const uintWNuNV0Y = BigInt("811")
		const addressoWGXqY = accounts[1]
		const addressoILr0lt = accounts[3]
		const boollx1FBjx = await WOLFY2WuMcc.approve.call(addresspO0sCEJ, uintyxxbJij, {from: accounts[0]});
		const boolJBpPtLx = await WOLFY2WuMcc.transferownership.call(addressDmv1qiC, {from: accounts[2]});
//		const boolHRMZfOg = await WOLFY2WuMcc.transferFrom.call(addressoILr0lt, addressoWGXqY, uintWNuNV0Y, {from: accounts[0]});

		assert.equal(boolJBpPtLx, true)
		assert.equal(boollx1FBjx, true)
		await expect(WOLFY2WuMcc.transferFrom.call(addressoILr0lt, addressoWGXqY, uintWNuNV0Y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringz4jFZzb = "ynD7G6V"
		const stringLPXyhoK = "f7UvT2jlNMnR9mqXmhMBbC304XvgJ8GgfXVziXxj"
		const uintKBciiD = BigInt("893")
		const WOLFpbNLAVI = await WOLF.new(stringz4jFZzb, stringLPXyhoK, uintKBciiD, {from: accounts[4]});
		const uintXWE7Yy = BigInt("236")
		const addressz1gPP21 = accounts[4]
		const addressHLYBnOu = accounts[0]
		const uintLCvE819 = BigInt("1293")
		const addressgCC3nt6 = accounts[2]
		const addressiXwYsAu = accounts[4]
		const uintZFuavpk = BigInt("578")
		const addressSaR6EpB = accounts[0]
		const addressqDzDSrC = accounts[0]
		const uintBNU8SLD = BigInt("1602")
		const addressayQ6wc = accounts[2]
		const uintXgo7k5h = BigInt("406")
		const addressUEgaVtk = accounts[0]
		const addressOdnzQF = accounts[4]
//		const booloR37j3 = await WOLFpbNLAVI.transfer.call(addressz1gPP21, uintXWE7Yy, {from: accounts[3]});
//		const boolvrSoNKT = await WOLFpbNLAVI.transferownership.call(addressHLYBnOu, {from: accounts[4]});
//		const boolVa97XMn = await WOLFpbNLAVI.transferFrom.call(addressiXwYsAu, addressgCC3nt6, uintLCvE819, {from: accounts[2]});
//		const boolb8kvV0U = await WOLFpbNLAVI.approveAndCall.call(addressSaR6EpB, uintZFuavpk, {from: accounts[2]});
//		const boolCwRkkRZ = await WOLFpbNLAVI.transferownership.call(addressqDzDSrC, {from: accounts[0]});
//		const boolnnjGSSh = await WOLFpbNLAVI.approve.call(addressayQ6wc, uintBNU8SLD, {from: accounts[5]});
//		const boolLssvPSS = await WOLFpbNLAVI.transferFrom.call(addressOdnzQF, addressUEgaVtk, uintXgo7k5h, {from: accounts[5]});

		await expect(WOLFpbNLAVI.transfer.call(addressz1gPP21, uintXWE7Yy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringhLz91DJ = "uK8n2iX9WKMDy8SexDttwoHA769bF6xsWVgvaTHScI0PMdJNi"
		const stringXXbrI6D = "sBmijzMaKqU"
		const uintiVVPvg0 = BigInt("572")
		const WOLFJiAdSVu = await WOLF.new(stringhLz91DJ, stringXXbrI6D, uintiVVPvg0, {from: "0x0000000000000000000000000000000000000001"});
		const uintbxWzLm9 = BigInt("283")
		const addressMnrSR9i = accounts[4]
		const addressqLyzhhP = accounts[1]
		const uintERCLeWo = BigInt("1310")
		const addressoLf554A = accounts[1]
		const addressXK2ic9T = accounts[2]
		const addressBb8rMf3 = "0x0000000000000000000000000000000000000001"
		const addressNbTRewK = accounts[1]
		const uintxXYs4xz = BigInt("1690")
		const addressiiwGx1e = accounts[3]
		const boolwVWmQNV = await WOLFJiAdSVu.transferFrom.call(addressqLyzhhP, addressMnrSR9i, uintbxWzLm9, {from: accounts[5]});
		const booldl84tDo = await WOLFJiAdSVu.transferFrom.call(addressXK2ic9T, addressoLf554A, uintERCLeWo, {from: accounts[5]});
		const boolq3tSIZU = await WOLFJiAdSVu.transferownership.call(addressBb8rMf3, {from: accounts[0]});
		const booliUpFs3U = await WOLFJiAdSVu.transferownership.call(addressNbTRewK, {from: accounts[3]});
		const boolivYkx8q = await WOLFJiAdSVu.approve.call(addressiiwGx1e, uintxXYs4xz, {from: accounts[3]});
	});

	it('test for WOLF', async () => {
		const stringROrvyUY = "zdQhgrme05HB3IwJFEse9D36pV8nEal2"
		const stringWypI1uf = "vPHjMAMn2yMO5RAVnQcV0xk2X96umNueWtGHevUMhJAzIlA"
		const uintnjYvIn7 = BigInt("832")
		const WOLFY2WuMcc = await WOLF.new(stringROrvyUY, stringWypI1uf, uintnjYvIn7, {from: accounts[2]});
		const uintYwWx1Jb = BigInt("117")
		const addressn1GULHE = accounts[0]
		const uintQSL04JW = BigInt("1599")
		const addressHjXXXzA = accounts[3]
		const uintxcquRjm = BigInt("1279")
		const addressmqs52ZG = accounts[4]
		const addressD1fjnny = accounts[3]
		const uintEU00JyC = BigInt("147")
		const addressX5bOg5 = accounts[4]
		const boolkcsRHoL = await WOLFY2WuMcc.approveAndCall.call(addressn1GULHE, uintYwWx1Jb, {from: accounts[2]});
		const boollx1FBjx = await WOLFY2WuMcc.approve.call(addressHjXXXzA, uintQSL04JW, {from: accounts[0]});
//		const boolKEt0xgG = await WOLFY2WuMcc.approveAndCall.call(addressmqs52ZG, uintxcquRjm, {from: accounts[4]});
//		const boolJBpPtLx = await WOLFY2WuMcc.transferownership.call(addressD1fjnny, {from: accounts[2]});
//		const boolqnGEFG = await WOLFY2WuMcc.approveAndCall.call(addressX5bOg5, uintEU00JyC, {from: accounts[3]});

		assert.equal(boolkcsRHoL, true)
		assert.equal(boollx1FBjx, true)
		await expect(WOLFY2WuMcc.approveAndCall.call(addressmqs52ZG, uintxcquRjm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringROrvyUY = "zdQhgrme05HB3IwJFEse9D36pV8nEal2"
		const stringWypI1uf = "vPHjMAMn2yMO5RAVnQcV0xk2X96umNueWtGHevUMhJAzIlA"
		const uintQaJTTnV = BigInt("832")
		const WOLFY2WuMcc = await WOLF.new(stringROrvyUY, stringWypI1uf, uintQaJTTnV, {from: accounts[2]});
		const uintNsV2EIB = BigInt("0")
		const addressPqpf2y = accounts[1]
		const boolkcsRHoL = await WOLFY2WuMcc.approveAndCall.call(addressPqpf2y, uintNsV2EIB, {from: accounts[2]});

		assert.equal(boolkcsRHoL, true)
	});

	it('test for WOLF', async () => {
		const stringN8JfkSh = "lyCpcnjEXxN3BItQePuI7IQi3fNTnm9RAtFlklc3Fq5zKsOESRW7PnYxI96"
		const stringkoi721Z = "EODmpxvzxrCna8q5Ec0qJPhkIOPY7U6zy8ONLk4MrOBwKy3YamYaDoJ"
		const uintViz0gzv = BigInt("1741")
		const WOLFVJWexfx = await WOLF.new(stringN8JfkSh, stringkoi721Z, uintViz0gzv, {from: accounts[2]});
		const uintQxJsQHE = BigInt("857")
		const addressI4DKicb = accounts[4]
		const addressUEUHhHa = accounts[2]
		const uintQ04Vicc = BigInt("0")
		const addressSpWL5RD = accounts[3]
		const addressacBwh1d = accounts[3]
		const boolIHptMUB = await WOLFVJWexfx.approve.call(addressI4DKicb, uintQxJsQHE, {from: accounts[0]});
		const boolEI5eZn = await WOLFVJWexfx.transferownership.call(addressUEUHhHa, {from: accounts[2]});
		const boollUp4scH = await WOLFVJWexfx.transferFrom.call(addressacBwh1d, addressSpWL5RD, uintQ04Vicc, {from: accounts[1]});

		assert.equal(boolEI5eZn, true)
		assert.equal(boolIHptMUB, true)
		assert.equal(boollUp4scH, true)
	});
})