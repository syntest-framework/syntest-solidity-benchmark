const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintLbVCJyA = BigInt("918")
		const stringmfWW1O3 = "faJkScHyf6UHDdgt7BRkIVo3BxCX210u9AdJB3Q"
		const stringnyQEw9A = "pMJWbn295RYuWjDlt4diTPNgoUwRHN3GKKwHl43e1adPX5YdRmLyd"
		const uintTFq1JeP = BigInt("1940")
		const ANRXTokenIXGQkmJ = await ANRXToken.new(uintLbVCJyA, stringmfWW1O3, stringnyQEw9A, uintTFq1JeP, {from: "0x0000000000000000000000000000000000000001"});
		const uintN6iH3Uy = BigInt("1593")
		const addressKLkm7E = accounts[0]
		const addresszfku0P5 = accounts[2]
		const addressDBrTn7v = "0x0000000000000000000000000000000000000001"
		const addressvTvNw9 = accounts[0]
		const boolRbzQfZz = await ANRXTokenIXGQkmJ.transferFrom.call(addresszfku0P5, addressKLkm7E, uintN6iH3Uy, {from: accounts[1]});
		const uintD4jz2Uq = await ANRXTokenIXGQkmJ.balanceOf.call(addressDBrTn7v, {from: accounts[3]});
		const addressePizHog = await ANRXTokenIXGQkmJ.deprecate.call(addressvTvNw9, {from: accounts[0]});
	});

	it('test for ANRXToken', async () => {
		const uintkDRi8bI = BigInt("1127")
		const stringVdfH5F6 = "3QcMkYWrK7KJ0rTHlT1s2tpa9jwTAtwH8O"
		const stringoXz4b5E = "pvfAkkbzk3vESEu7c8Sv"
		const uintMHzVcpm = BigInt("305")
		const ANRXTokenJuvJ12d = await ANRXToken.new(uintkDRi8bI, stringVdfH5F6, stringoXz4b5E, uintMHzVcpm, {from: accounts[2]});
		const uintTudNpn7 = BigInt("1109")
		const addressz03UIlM = accounts[2]
		const addressjWH2Eyn = accounts[3]
		const uintbPNRctK = BigInt("180")
		const addressui9aCTB = accounts[0]
		const addressqI6vohn = accounts[4]
		const uintEKYH0rf = BigInt("1628")
		const addressGJEwjc = accounts[2]
		const addressLQ960ep = accounts[2]
		const boolDUhx4zA = await ANRXTokenJuvJ12d.transferFrom.call(addressjWH2Eyn, addressz03UIlM, uintTudNpn7, {from: accounts[3]});
		const boolXgunwx5 = await ANRXTokenJuvJ12d.transferFrom.call(addressqI6vohn, addressui9aCTB, uintbPNRctK, {from: accounts[2]});
		const boolCndqAM2 = await ANRXTokenJuvJ12d.transferFrom.call(addressLQ960ep, addressGJEwjc, uintEKYH0rf, {from: "0x0000000000000000000000000000000000000001"});
		const uintCjYlizD = await ANRXTokenJuvJ12d.totalSupply.call({from: accounts[3]});

		await expect(ANRXTokenJuvJ12d.transferFrom.call(addressjWH2Eyn, addressz03UIlM, uintTudNpn7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintbH6j7Au = BigInt("1189")
		const stringQRruJTX = "8lEJqpBMfMh5BrdcowYXVJRPerQnk3eKlrk3p255CYu1NgqG2RagNT"
		const stringGMyZKwg = "pT5W9m6LF34O78eRPdfbmgtjmNOjX2XRNtoqO"
		const uintPbZdrUd = BigInt("1694")
		const ANRXTokenqwtArzM = await ANRXToken.new(uintbH6j7Au, stringQRruJTX, stringGMyZKwg, uintPbZdrUd, {from: accounts[4]});
		const addressSfB1Fls = accounts[2]
		const uintmdqsCni = BigInt("1008")
		const addressNqmQYO = accounts[1]
		const addressQZ4QdpH = await ANRXTokenqwtArzM.deprecate.call(addressSfB1Fls, {from: "0x0000000000000000000000000000000000000001"});
		const boolnmy8yWW = await ANRXTokenqwtArzM.approve.call(addressNqmQYO, uintmdqsCni, {from: accounts[3]});

		await expect(ANRXTokenqwtArzM.deprecate.call(addressSfB1Fls, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintGGQjb7u = BigInt("685")
		const stringYzQXDHm = "aenxKuMu9UfzbtgTeGmp"
		const strings0iCBN1 = "ZLmRm3p8tTu3nRAdXZHmjMA6rHBhJSdmc6IxMOKPf4pMUK6dCfcrWLWz5Ov0SI3DdAOG1xQlq1cWjxh"
		const uintiXWrOD9 = BigInt("1917")
		const ANRXTokenhvTsq50 = await ANRXToken.new(uintGGQjb7u, stringYzQXDHm, strings0iCBN1, uintiXWrOD9, {from: accounts[5]});
		const addressSxARc2A = accounts[3]
		const uintvpcER46 = BigInt("767")
		const addressZ65Rwsk = accounts[0]
		const uintOkqVrXZ = BigInt("569")
		const uintWQRPygT = await ANRXTokenhvTsq50.balanceOf.call(addressSxARc2A, {from: accounts[3]});
		const booljQNlQAk = await ANRXTokenhvTsq50.approve.call(addressZ65Rwsk, uintvpcER46, {from: accounts[1]});
		const uintKNPkboU = await ANRXTokenhvTsq50.redeem.call(uintOkqVrXZ, {from: accounts[5]});

		assert.equal(booljQNlQAk, true)
		assert.equal(uintWQRPygT, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintRVRCWa = BigInt("685")
		const stringYzQXDHm = "aenxKuMu9UfzbtgTeGmp"
		const strings0iCBN1 = "ZLmRm3p8tTu3nRAdXZHmjMA6rHBhJSdmc6IxMOKPf4pMUK6dCfcrWLWz5Ov0SI3DdAOG1xQlq1cWjxh"
		const uintK7YQiNj = BigInt("1917")
		const ANRXTokenhvTsq50 = await ANRXToken.new(uintRVRCWa, stringYzQXDHm, strings0iCBN1, uintK7YQiNj, {from: accounts[5]});
		const addresspACHikW = accounts[3]
		const uint8E1hV9 = BigInt("767")
		const addressibg6tz = accounts[1]
		const uintKbrKQxc = BigInt("569")
		const uintWQRPygT = await ANRXTokenhvTsq50.balanceOf.call(addresspACHikW, {from: accounts[3]});
		const booljQNlQAk = await ANRXTokenhvTsq50.approve.call(addressibg6tz, uint8E1hV9, {from: accounts[1]});
		const uintKNPkboU = await ANRXTokenhvTsq50.redeem.call(uintKbrKQxc, {from: accounts[5]});
		const uint5tvCYG = await ANRXTokenhvTsq50.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booljQNlQAk, true)
		assert.equal(uint5tvCYG, BigInt("685"))
		assert.equal(uintWQRPygT, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintTTDFlEf = BigInt("1984")
		const stringf7IzyHV = "vaAaO5smKhjARNlviAQIudtXs1H2AnIiakojUWGntc9"
		const stringYLO821f = "S9nd6dHey8cYYVhASeWcW9Ui58QWrC558qtQtrVlXTHVS2wylzhf"
		const uintwXMm6OT = BigInt("1330")
		const ANRXTokenmtWPydx = await ANRXToken.new(uintTTDFlEf, stringf7IzyHV, stringYLO821f, uintwXMm6OT, {from: accounts[3]});
		const addressm6Nty6g = accounts[1]
		const addresstk4705X = accounts[1]
		const uintKoyIfON = BigInt("1751")
		const addressG1PZdi = accounts[0]
		const uintgnLQk8E = BigInt("1651")
		const addresst8YAOG8 = accounts[6]
		const addresswRc4f5 = accounts[3]
		const uintAO3Hpy = await ANRXTokenmtWPydx.allowance.call(addresstk4705X, addressm6Nty6g, {from: accounts[1]});
		const boolqTwdrNh = await ANRXTokenmtWPydx.transfer.call(addressG1PZdi, uintKoyIfON, {from: accounts[2]});
		const boolKl6qrzn = await ANRXTokenmtWPydx.transferFrom.call(addresswRc4f5, addresst8YAOG8, uintgnLQk8E, {from: accounts[5]});
		const uintbqUJEw = await ANRXTokenmtWPydx.totalSupply.call({from: accounts[0]});

		assert.equal(uintAO3Hpy, BigInt("0"))
		await expect(ANRXTokenmtWPydx.transfer.call(addressG1PZdi, uintKoyIfON, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintdRD8Lh = BigInt("1189")
		const stringQRruJTX = "8lEJqpBMfMh5BrdcowYXVJRPerQnk3eKlrk3p255CYu1NgqG2RagNT"
		const stringGMyZKwg = "pT5W9m6LF34O78eRPdfbmgtjmNOjX2XRNtoqO"
		const uintMwyx8Sd = BigInt("1694")
		const ANRXTokenqwtArzM = await ANRXToken.new(uintdRD8Lh, stringQRruJTX, stringGMyZKwg, uintMwyx8Sd, {from: accounts[4]});
		const addressJWYoQZJ = accounts[0]
		const uintaqoB0TF = BigInt("1601")
		const uintr9oFW76 = BigInt("1008")
		const addressUnErYwS = accounts[1]
		const uintHanXIgL = await ANRXTokenqwtArzM.balanceOf.call(addressJWYoQZJ, {from: accounts[2]});
		const uintmKKqmLl = await ANRXTokenqwtArzM.issue.call(uintaqoB0TF, {from: accounts[4]});
		const boolnmy8yWW = await ANRXTokenqwtArzM.approve.call(addressUnErYwS, uintr9oFW76, {from: accounts[3]});

		assert.equal(boolnmy8yWW, true)
		assert.equal(uintHanXIgL, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintx1zCxLA = BigInt("1189")
		const stringQRruJTX = "8lEJqpBMfMh5BrdcowYXVJRPerQnk3eKlrk3p255CYu1NgqG2RagNT"
		const stringGMyZKwg = "pT5W9m6LF34O78eRPdfbmgtjmNOjX2XRNtoqO"
		const uintxQu8mfp = BigInt("1694")
		const ANRXTokenqwtArzM = await ANRXToken.new(uintx1zCxLA, stringQRruJTX, stringGMyZKwg, uintxQu8mfp, {from: accounts[4]});
		const addressndwAIj = accounts[4]
		const addressAxGkZNa = accounts[4]
		const uintMg4OziG = BigInt("1034")
		const addressEgtzYfd = accounts[1]
		const addressuFu51Zc = accounts[1]
		const uint9kR2k6 = BigInt("513")
		const uintKjP64p = BigInt("1698")
		const uintaaUhB0q = await ANRXTokenqwtArzM.allowance.call(addressAxGkZNa, addressndwAIj, {from: accounts[3]});
		const boolnmy8yWW = await ANRXTokenqwtArzM.approve.call(addressEgtzYfd, uintMg4OziG, {from: accounts[3]});
		const addressHOxczB0 = await ANRXTokenqwtArzM.deprecate.call(addressuFu51Zc, {from: accounts[4]});
		const uintKUWG9rT = await ANRXTokenqwtArzM.setParams.call(uintKjP64p, uint9kR2k6, {from: accounts[2]});

		assert.equal(boolnmy8yWW, true)
		assert.equal(uintaaUhB0q, BigInt("0"))
		await expect(ANRXTokenqwtArzM.setParams.call(uintKjP64p, uint9kR2k6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintYm9Tl5 = BigInt("1984")
		const stringf7IzyHV = "vaAaO5smKhjARNlviAQIudtXs1H2AnIiakojUWGntc9"
		const stringYLO821f = "S9nd6dHey8cYYVhASeWcW9Ui58QWrC558qtQtrVlXTHVS2wylzhf"
		const uintuA5whQk = BigInt("1330")
		const ANRXTokenmtWPydx = await ANRXToken.new(uintYm9Tl5, stringf7IzyHV, stringYLO821f, uintuA5whQk, {from: accounts[3]});
		const uintjRzfuT = BigInt("1769")
		const uintgASdhK = BigInt("1575")
		const uintqDydyNJ = BigInt("1392")
		const addressQMYDkut = accounts[0]
		const addressiUw4CYA = accounts[3]
		const uintKfCFtmu = BigInt("1651")
		const addressN0oqJoM = accounts[5]
		const addressrT9pOdh = accounts[3]
		const addressIE053v7 = accounts[3]
		const uintdOgryQ = await ANRXTokenmtWPydx.setParams.call(uintgASdhK, uintjRzfuT, {from: accounts[3]});
		const bool5Gfdhm = await ANRXTokenmtWPydx.transferFrom.call(addressiUw4CYA, addressQMYDkut, uintqDydyNJ, {from: accounts[4]});
		const boolKl6qrzn = await ANRXTokenmtWPydx.transferFrom.call(addressrT9pOdh, addressN0oqJoM, uintKfCFtmu, {from: accounts[5]});
		const uinte4i7KlU = await ANRXTokenmtWPydx.balanceOf.call(addressIE053v7, {from: accounts[4]});

		await expect(ANRXTokenmtWPydx.setParams.call(uintgASdhK, uintjRzfuT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})