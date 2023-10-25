const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintdzL1RJN = BigInt("866")
		const uintCjy2Wmf = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintdzL1RJN, uintCjy2Wmf, {from: accounts[2]});
		const uintah776L3 = BigInt("1716")
		const addresslc31S2M = accounts[0]
		const stringvMsOQ5C = await XenoFelixzTkQz4x.symbol.call({from: accounts[3]});
		const uint256VwcGEnE = await XenoFelixzTkQz4x.totalSupply.call({from: accounts[2]});
		const boolwqcGNk4 = await XenoFelixzTkQz4x.approve.call(addresslc31S2M, uintah776L3, {from: accounts[4]});

		assert.equal(boolwqcGNk4, true)
		assert.equal(stringvMsOQ5C, "Nmec2MRRsOUl")
		assert.equal(uint256VwcGEnE, BigInt("25438030359060466549602185240059561791116841407856053006749632184947358826496"))
	});

	it('test for XenoFelix', async () => {
		const stringB4Kp1Vw = "ZRk3h3tVkInh7YiLgL6lov1B1i6CD2tAg6xFIgX2Zc"
		const stringCd6GHbz = "5UgQj"
		const uintX4ssCCx = BigInt("190")
		const uintyV6PQcs = BigInt("142")
		const XenoFelixNEvP28V = await XenoFelix.new(stringB4Kp1Vw, stringCd6GHbz, uintX4ssCCx, uintyV6PQcs, {from: accounts[2]});
		const uintPJV6JHY = BigInt("1811")
		const addressFsyXrn8 = accounts[4]
		const uintgh9Uz8P = BigInt("286")
		const addressgTtf6fw = accounts[5]
		const uintO68Nitk = BigInt("208")
		const uintbaGnQEe = BigInt("217")
		const addressGzV9NqW = accounts[1]
//		const booln2934r = await XenoFelixNEvP28V.burnOwner.call(addressFsyXrn8, uintPJV6JHY, {from: accounts[0]});
//		const stringSCcIhI1 = await XenoFelixNEvP28V.symbol.call({from: accounts[0]});
//		await XenoFelixNEvP28V.unpause.call({from: accounts[4]});
//		const booliAnCvo5 = await XenoFelixNEvP28V.decreaseAllowance.call(addressgTtf6fw, uintgh9Uz8P, {from: accounts[1]});
//		await XenoFelixNEvP28V.whenNotPaused.call({from: accounts[0]});
//		const boolDitXR42 = await XenoFelixNEvP28V.lock.call(addressGzV9NqW, uintbaGnQEe, uintO68Nitk, {from: accounts[4]});

		await expect(XenoFelixNEvP28V.burnOwner.call(addressFsyXrn8, uintPJV6JHY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringDGVxzEJ = "g4NmpjTobdaozxTFg13i1dFQzBtfFA1ekhcAmpvD8FfIuUVo8cPTRcruNT"
		const stringqehK53B = "EiqzFHnyvugGseys9PwTatbOpUYWnuH9LeX3800DVBSFofCLii7y2U3BwmqKv8qg7tEEuO7GfwlGw3Bl6I9"
		const uintqIr2bov = BigInt("241")
		const XenoFelixGzcjoXz = await XenoFelix.new(stringDGVxzEJ, stringqehK53B, uintqIr2bov, {from: accounts[1]});
		const uintFCYf2fH = BigInt("629")
		const addressW0Cxxr4 = accounts[0]
		await XenoFelixGzcjoXz.pause.call({from: accounts[0]});
		const stringSgyP0n8 = await XenoFelixGzcjoXz.name.call({from: accounts[3]});
		const boolAxtbusS = await XenoFelixGzcjoXz.increaseAllowance.call(addressW0Cxxr4, uintFCYf2fH, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringKFeyTuR = "mvtIUlFwQI9JyMChPnS2M1bKd2tZpqGnRcHnhQ"
		const stringnGH66a = "mONE0pDB4CDWFUpBWC8gKj0WUMqUYdycHJDJiEQrgqOQ9BdHKhGbzpvSUJDF"
		const uintNAhAyRM = BigInt("2038")
		const uintu6INS8i = BigInt("2")
		const XenoFelixPq0HMw6 = await XenoFelix.new(stringKFeyTuR, stringnGH66a, uintNAhAyRM, uintu6INS8i, {from: accounts[5]});
		const uintIzvzCyf = BigInt("1546")
		const uintYww2rjm = BigInt("1128")
		const addressFRnSbVS = accounts[1]
//		const uint256sIHWyBP = await XenoFelixPq0HMw6.burn.call(uintIzvzCyf, {from: accounts[4]});
//		const uint256e1xqmD7 = await XenoFelixPq0HMw6.burn.call(uintYww2rjm, {from: accounts[1]});
//		const boolLXxNcY3 = await XenoFelixPq0HMw6.isPauser.call(addressFRnSbVS, {from: accounts[4]});

		await expect(XenoFelixPq0HMw6.burn.call(uintIzvzCyf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const XenoFelixfwEUw29 = await XenoFelix.new({from: accounts[1]});
		const uintkFwBcQ1 = BigInt("1663")
		const addressl96Cfcn = "0x0000000000000000000000000000000000000001"
		const addressZuO91Os = accounts[4]
		const addresszLBrMFn = accounts[3]
		const boolZTqQIGx = await XenoFelixfwEUw29.transferFrom.call(addressZuO91Os, addressl96Cfcn, uintkFwBcQ1, {from: accounts[0]});
		const uint256yCM0R1X = await XenoFelixfwEUw29.totalSupply.call({from: accounts[3]});
		const stringwLVJ33q = await XenoFelixfwEUw29.name.call({from: accounts[1]});
		await XenoFelixfwEUw29.whenPaused.call({from: accounts[4]});
		const boolTYEoOdw = await XenoFelixfwEUw29.freezeAccount.call(addresszLBrMFn, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringKmtw06v = "e"
		const stringLTtus9w = "HETb1AplFQwvddok4QdUhQmE"
		const uintsiZtqun = BigInt("48")
		const XenoFelixVbiIWBZ = await XenoFelix.new(stringKmtw06v, stringLTtus9w, uintsiZtqun, {from: accounts[3]});
		const addressUSRdRPv = accounts[4]
		const addresshFuWTsv = accounts[0]
		const addressURCePa0 = accounts[1]
		const uintEiV216G = BigInt("1087")
		const uintvRL4zxg = BigInt("889")
		const addressg1TS2g = accounts[1]
		await XenoFelixVbiIWBZ.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixVbiIWBZ.onlyNewOwner.call({from: accounts[3]});
		const boolHYzrbd0 = await XenoFelixVbiIWBZ.unfreezeAccount.call(addressUSRdRPv, {from: accounts[2]});
		const uint256GfXXbKy = await XenoFelixVbiIWBZ.allowance.call(addressURCePa0, addresshFuWTsv, {from: "0x0000000000000000000000000000000000000001"});
		const boolSvCtku6 = await XenoFelixVbiIWBZ.transferWithLock.call(addressg1TS2g, uintvRL4zxg, uintEiV216G, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringC7uLInK = "N04tiUvYFlOQJH6viseVyf6MtJtRbOBJIYownKASolI7MXGGCtzoLdCoiz2kT1PbUr1sK5AzE6MufO0zPJL97mbi"
		const stringOBdo74w = "4f9nvu4WVarLfz9FhhNruU2S1y4CvlsyePD3dY9l9yFs3FK8wrFJKS3tE3xxwifvSoKwz6LPEo"
		const uintyfG2NX9 = BigInt("153")
		const XenoFelixLpux4m = await XenoFelix.new(stringC7uLInK, stringOBdo74w, uintyfG2NX9, {from: accounts[0]});
		const uintZDR8FqS = BigInt("20")
		const addressxLOf7Z7 = accounts[4]
		const boolf8Sep8o = await XenoFelixLpux4m.transfer.call(addressxLOf7Z7, uintZDR8FqS, {from: accounts[3]});
		await XenoFelixLpux4m.onlyOwner.call({from: accounts[5]});
		await XenoFelixLpux4m.onlyPauser.call({from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintdMr6Mhr = BigInt("866")
		const uintHRHmVJ = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintdMr6Mhr, uintHRHmVJ, {from: accounts[2]});
		const uintV07doP5 = BigInt("1183")
		const addressBFoNFDH = accounts[3]
		const addressXgI0pgq = accounts[5]
		const uintsZI1ngu = BigInt("1709")
		const addressQrhGgmG = accounts[0]
		const stringvMsOQ5C = await XenoFelixzTkQz4x.symbol.call({from: accounts[3]});
//		const boolHIjDm6B = await XenoFelixzTkQz4x.transferFrom.call(addressXgI0pgq, addressBFoNFDH, uintV07doP5, {from: accounts[3]});
//		const boolwqcGNk4 = await XenoFelixzTkQz4x.approve.call(addressQrhGgmG, uintsZI1ngu, {from: accounts[4]});

		assert.equal(stringvMsOQ5C, "Nmec2MRRsOUl")
		await expect(XenoFelixzTkQz4x.transferFrom.call(addressXgI0pgq, addressBFoNFDH, uintV07doP5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uint5jJWvp = BigInt("866")
		const uintDLZE5N3 = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uint5jJWvp, uintDLZE5N3, {from: accounts[2]});
		const uintzBsflgx = BigInt("1716")
		const addressEAiLRqT = accounts[0]
		const uintREY1Dh1 = BigInt("252")
		const addressIMH6y9 = accounts[5]
		const stringvMsOQ5C = await XenoFelixzTkQz4x.symbol.call({from: accounts[3]});
		const uint256VwcGEnE = await XenoFelixzTkQz4x.totalSupply.call({from: accounts[2]});
		const boolwqcGNk4 = await XenoFelixzTkQz4x.approve.call(addressEAiLRqT, uintzBsflgx, {from: accounts[4]});
//		const boolYt1wDMD = await XenoFelixzTkQz4x.transfer.call(addressIMH6y9, uintREY1Dh1, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolwqcGNk4, true)
		assert.equal(stringvMsOQ5C, "Nmec2MRRsOUl")
		assert.equal(uint256VwcGEnE, BigInt("25438030359060466549602185240059561791116841407856053006749632184947358826496"))
		await expect(XenoFelixzTkQz4x.transfer.call(addressIMH6y9, uintREY1Dh1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintfTOeOBO = BigInt("866")
		const uintLY4nYQo = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintfTOeOBO, uintLY4nYQo, {from: accounts[2]});
		const addressf5SxEJg = accounts[3]
		const addressZBwKxIa = "0x0000000000000000000000000000000000000001"
		const uinte9p2aA = BigInt("1716")
		const addressR3ilgWB = accounts[1]
		const uintmTnwSPi = BigInt("1424")
		const uintBmjJwy = BigInt("612")
		const addressvLEont7 = accounts[0]
		const stringvMsOQ5C = await XenoFelixzTkQz4x.symbol.call({from: accounts[3]});
		const string3dv02v = await XenoFelixzTkQz4x.name.call({from: accounts[3]});
		const boolrcxgOD = await XenoFelixzTkQz4x.isOwner.call(addressf5SxEJg, {from: accounts[3]});
		const uint256VwcGEnE = await XenoFelixzTkQz4x.totalSupply.call({from: accounts[2]});
		const addressnyapjGk = await XenoFelixzTkQz4x.addPauser.call(addressZBwKxIa, {from: accounts[2]});
		const boolwqcGNk4 = await XenoFelixzTkQz4x.approve.call(addressR3ilgWB, uinte9p2aA, {from: accounts[4]});
//		const boolsPU8Jbu = await XenoFelixzTkQz4x.transferWithLock.call(addressvLEont7, uintBmjJwy, uintmTnwSPi, {from: accounts[4]});

		assert.equal(boolrcxgOD, false)
		assert.equal(boolwqcGNk4, true)
		assert.equal(string3dv02v, "viR7emsE0Ys6hXJmEkvQUrtZNAk")
		assert.equal(stringvMsOQ5C, "Nmec2MRRsOUl")
		assert.equal(uint256VwcGEnE, BigInt("25438030359060466549602185240059561791116841407856053006749632184947358826496"))
		await expect(XenoFelixzTkQz4x.transferWithLock.call(addressvLEont7, uintBmjJwy, uintmTnwSPi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintvKZ4WOL = BigInt("866")
		const uintL3TsRiW = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintvKZ4WOL, uintL3TsRiW, {from: accounts[2]});
		const addresse5VTRNF = accounts[2]
		const uinteyZesWb = BigInt("1183")
		const addressQH8myzo = accounts[4]
		const addressj4tg8rb = accounts[5]
		const uintfLA9sQt = BigInt("1709")
		const addresslICzFMh = accounts[0]
		const uint256OWtWiJa = await XenoFelixzTkQz4x.balanceOf.call(addresse5VTRNF, {from: accounts[5]});
		const stringvMsOQ5C = await XenoFelixzTkQz4x.symbol.call({from: accounts[3]});
//		const boolHIjDm6B = await XenoFelixzTkQz4x.transferFrom.call(addressj4tg8rb, addressQH8myzo, uinteyZesWb, {from: accounts[3]});
//		const boolwqcGNk4 = await XenoFelixzTkQz4x.approve.call(addresslICzFMh, uintfLA9sQt, {from: accounts[4]});

		assert.equal(stringvMsOQ5C, "Nmec2MRRsOUl")
		assert.equal(uint256OWtWiJa, BigInt("25438030359060466549602185240059561791116841407856053006749632184947358826496"))
		await expect(XenoFelixzTkQz4x.transferFrom.call(addressj4tg8rb, addressQH8myzo, uinteyZesWb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintRFaOWvl = BigInt("866")
		const uintHGTZ8uo = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintRFaOWvl, uintHGTZ8uo, {from: accounts[2]});
		const uintbE0yGq = BigInt("1811")
		const addressdUSUCtZ = accounts[4]
		const uintlhtBFOQ = BigInt("1412")
		const addressILHanec = accounts[2]
		const uintXSd44E6 = BigInt("1183")
		const addressOTsZPT9 = accounts[4]
		const addressR4AmFo1 = accounts[5]
		const uintXOOn44t = BigInt("1709")
		const addressTepRxIL = accounts[0]
//		const boolvBPXwxV = await XenoFelixzTkQz4x.decreaseAllowance.call(addressdUSUCtZ, uintbE0yGq, {from: accounts[3]});
//		const boolh0j6Tlw = await XenoFelixzTkQz4x.burnOwner.call(addressILHanec, uintlhtBFOQ, {from: accounts[2]});
//		const boolHIjDm6B = await XenoFelixzTkQz4x.transferFrom.call(addressR4AmFo1, addressOTsZPT9, uintXSd44E6, {from: accounts[3]});
//		const boolwqcGNk4 = await XenoFelixzTkQz4x.approve.call(addressTepRxIL, uintXOOn44t, {from: accounts[4]});

		await expect(XenoFelixzTkQz4x.decreaseAllowance.call(addressdUSUCtZ, uintbE0yGq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintIR1nug = BigInt("866")
		const uintK481GPZ = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintIR1nug, uintK481GPZ, {from: accounts[2]});
		const addressD7LX0Y4 = "0x0000000000000000000000000000000000000001"
		const addressrcMVZdF = accounts[4]
		const uintlSZGS18 = BigInt("1183")
		const addressoOCA7IJ = accounts[4]
		const addressXfIfhti = accounts[5]
		const uintmTSvyXh = BigInt("1731")
		const addresseD5Whkm = accounts[0]
		const uint256Z2nXf72 = await XenoFelixzTkQz4x.allowance.call(addressrcMVZdF, addressD7LX0Y4, {from: accounts[2]});
//		const boolHIjDm6B = await XenoFelixzTkQz4x.transferFrom.call(addressXfIfhti, addressoOCA7IJ, uintlSZGS18, {from: accounts[3]});
//		const boolwqcGNk4 = await XenoFelixzTkQz4x.approve.call(addresseD5Whkm, uintmTSvyXh, {from: accounts[4]});

		assert.equal(uint256Z2nXf72, BigInt("0"))
		await expect(XenoFelixzTkQz4x.transferFrom.call(addressXfIfhti, addressoOCA7IJ, uintlSZGS18, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintRQHm5Nk = BigInt("866")
		const uintA2zMRqc = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintRQHm5Nk, uintA2zMRqc, {from: accounts[2]});
		const uintfktnVyx = BigInt("954")
		const addressb0IWoLL = accounts[0]
		const uint256VwcGEnE = await XenoFelixzTkQz4x.totalSupply.call({from: accounts[2]});
//		await XenoFelixzTkQz4x.onlyOwner.call({from: accounts[4]});
//		const boolu9WmwgP = await XenoFelixzTkQz4x.approve.call(addressb0IWoLL, uintfktnVyx, {from: accounts[4]});

		assert.equal(uint256VwcGEnE, BigInt("25438030359060466549602185240059561791116841407856053006749632184947358826496"))
		await expect(XenoFelixzTkQz4x.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintTiqdrWW = BigInt("866")
		const uintlCT3dZ = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintTiqdrWW, uintlCT3dZ, {from: accounts[2]});
		const uintt7XL8wu = BigInt("1709")
		const addressq6J13Hy = accounts[0]
		const addressOpvIl6U = accounts[4]
		const boolwqcGNk4 = await XenoFelixzTkQz4x.approve.call(addressq6J13Hy, uintt7XL8wu, {from: accounts[4]});
		const boolm9bojPd = await XenoFelixzTkQz4x.freezeAccount.call(addressOpvIl6U, {from: accounts[2]});

		assert.equal(boolm9bojPd, true)
		assert.equal(boolwqcGNk4, true)
	});

	it('test for XenoFelix', async () => {
		const stringZU1shAJ = ""
		const stringtvpoRNx = "Sqi"
		const uintXw4EIA7 = BigInt("96")
		const XenoFelixIXY5t3E = await XenoFelix.new(stringZU1shAJ, stringtvpoRNx, uintXw4EIA7, {from: accounts[5]});
		const uintZ3CNB4U = BigInt("1271")
		const uint256s2msrT = await XenoFelixIXY5t3E.burn.call(uintZ3CNB4U, {from: accounts[3]});
		const stringNkSCoBc = await XenoFelixIXY5t3E.name.call({from: accounts[5]});
		await XenoFelixIXY5t3E.renouncePauser.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintniYNQSX = BigInt("866")
		const uintTh8OcWr = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintniYNQSX, uintTh8OcWr, {from: accounts[2]});
		const uintm5GtKjE = BigInt("1201")
		const addressTJ3pwvH = accounts[0]
		const uintR5Pe2yv = BigInt("19")
		const addresseKlIgBp = accounts[2]
		const addressMvo8AkW = accounts[5]
		const uintYWyTKQ7 = BigInt("258")
		const addressAvHcQ2h = accounts[5]
		const boolyF6p3uV = await XenoFelixzTkQz4x.increaseAllowance.call(addressTJ3pwvH, uintm5GtKjE, {from: accounts[4]});
//		const boolzylpzaa = await XenoFelixzTkQz4x.decreaseAllowance.call(addresseKlIgBp, uintR5Pe2yv, {from: accounts[1]});
//		const addressKlE3dw = await XenoFelixzTkQz4x.transferOwnership.call(addressMvo8AkW, {from: accounts[1]});
//		const boolYt1wDMD = await XenoFelixzTkQz4x.transfer.call(addressAvHcQ2h, uintYWyTKQ7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolyF6p3uV, true)
		await expect(XenoFelixzTkQz4x.decreaseAllowance.call(addresseKlIgBp, uintR5Pe2yv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uinteWNKNj = BigInt("866")
		const uintxIBbhsO = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uinteWNKNj, uintxIBbhsO, {from: accounts[2]});
		const uintzihRZng = BigInt("384")
		const uintAh7vR4I = BigInt("343")
		const addressrRXuWMN = accounts[4]
//		const boolPpnOC1v = await XenoFelixzTkQz4x.lock.call(addressrRXuWMN, uintAh7vR4I, uintzihRZng, {from: accounts[2]});
//		const uint256VwcGEnE = await XenoFelixzTkQz4x.totalSupply.call({from: accounts[2]});

		await expect(XenoFelixzTkQz4x.lock.call(addressrRXuWMN, uintAh7vR4I, uintzihRZng, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintcUKmNh = BigInt("866")
		const uintb6qAhOu = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintcUKmNh, uintb6qAhOu, {from: accounts[2]});
		const uint8GNkQVb0 = await XenoFelixzTkQz4x.decimals.call({from: accounts[1]});
		const uint256VwcGEnE = await XenoFelixzTkQz4x.totalSupply.call({from: accounts[2]});

		assert.equal(uint256VwcGEnE, BigInt("25438030359060466549602185240059561791116841407856053006749632184947358826496"))
		assert.equal(uint8GNkQVb0, BigInt("79"))
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintU1Cztci = BigInt("866")
		const uintKmobR8U = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintU1Cztci, uintKmobR8U, {from: accounts[2]});
		const addressVxRk7OY = accounts[3]
		const uintj6jWJUe = BigInt("260")
		const addressL28tH3k = accounts[5]
		const boolnTuDNje = await XenoFelixzTkQz4x.paused.call({from: accounts[3]});
		const uint8P3dBKwu = await XenoFelixzTkQz4x.decimals.call({from: accounts[5]});
//		const addressNduaLlv = await XenoFelixzTkQz4x.removePauser.call(addressVxRk7OY, {from: accounts[1]});
//		const boolYt1wDMD = await XenoFelixzTkQz4x.transfer.call(addressL28tH3k, uintj6jWJUe, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolnTuDNje, false)
		assert.equal(uint8P3dBKwu, BigInt("79"))
		await expect(XenoFelixzTkQz4x.removePauser.call(addressVxRk7OY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uinti2KDU98 = BigInt("866")
		const uintHpyjnJl = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uinti2KDU98, uintHpyjnJl, {from: accounts[2]});
		const addressYQPIAsv = accounts[4]
//		await XenoFelixzTkQz4x.renouncePauser.call({from: accounts[0]});
//		const uint256OWtWiJa = await XenoFelixzTkQz4x.balanceOf.call(addressYQPIAsv, {from: accounts[5]});

		await expect(XenoFelixzTkQz4x.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintJfzdF5w = BigInt("866")
		const uintcoT4HbO = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintJfzdF5w, uintcoT4HbO, {from: accounts[2]});
		const uintncqrVKT = BigInt("1699")
		const addressqRrhIk0 = accounts[1]
		const addresscy10Ifx = accounts[3]
		const uintkW7vTkh = BigInt("833")
		const addressJDX3L8d = accounts[2]
		const boolMmIm2kl = await XenoFelixzTkQz4x.approve.call(addressqRrhIk0, uintncqrVKT, {from: accounts[0]});
		const uint256OWtWiJa = await XenoFelixzTkQz4x.balanceOf.call(addresscy10Ifx, {from: accounts[5]});
//		const addressllh5G4r = await XenoFelixzTkQz4x.burnFrom.call(addressJDX3L8d, uintkW7vTkh, {from: accounts[2]});

		assert.equal(boolMmIm2kl, true)
		assert.equal(uint256OWtWiJa, BigInt("0"))
		await expect(XenoFelixzTkQz4x.burnFrom.call(addressJDX3L8d, uintkW7vTkh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWz9HbPi = "bSiNVCM68gVY8pUPsbAd2TLfGeGqwU43PicGhoddxNB9zQextc0zcqkf4nuDQWasS2rRxAVI5FMmtvsIGC8c"
		const stringlAGAOOq = "rayV9tUbytREiCqaRItNUI0X3PkoAAObQcvyEgVord3KHur0vB6lqGmd4ZqdtgROfyXbT0k4uFtBQqmnoZRATKSZyHuQMGfLm9n"
		const uintBpUvZ9 = BigInt("35")
		const XenoFelixKmOJk7o = await XenoFelix.new(stringWz9HbPi, stringlAGAOOq, uintBpUvZ9, {from: accounts[2]});
		const addressyYVY44r = accounts[1]
		const addressXsplTYg = accounts[0]
		const addressvi09Ikg = accounts[2]
		const uintyg501L = BigInt("1791")
		const addressmWyI5Cx = accounts[0]
		const boolR1ZWKwq = await XenoFelixKmOJk7o.isOwner.call(addressyYVY44r, {from: accounts[3]});
		const boolU0jkYhM = await XenoFelixKmOJk7o.isPauser.call(addressXsplTYg, {from: accounts[1]});
		const uint256zxmNjVt = await XenoFelixKmOJk7o.totalSupply.call({from: accounts[2]});
		const addressvW4FiS7 = await XenoFelixKmOJk7o.transferOwnership.call(addressvi09Ikg, {from: accounts[3]});
		const boolE44sRf9 = await XenoFelixKmOJk7o.burnOwner.call(addressmWyI5Cx, uintyg501L, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintoBiIgou = BigInt("866")
		const uintFJS0PkX = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintoBiIgou, uintFJS0PkX, {from: accounts[2]});
		const addressGkU5ADs = accounts[2]
		const uintZ3tDfv = BigInt("1124")
		const addressf9DiFvs = accounts[4]
		const boolp29JXs = await XenoFelixzTkQz4x.isOwner.call(addressGkU5ADs, {from: accounts[2]});
//		const uint256r5tiYOp = await XenoFelixzTkQz4x.burn.call(uintZ3tDfv, {from: accounts[5]});
//		const uint256OWtWiJa = await XenoFelixzTkQz4x.balanceOf.call(addressf9DiFvs, {from: accounts[5]});

		assert.equal(boolp29JXs, true)
		await expect(XenoFelixzTkQz4x.burn.call(uintZ3tDfv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintW9kCQe = BigInt("866")
		const uintapuV6L9 = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintW9kCQe, uintapuV6L9, {from: accounts[2]});
		const addressU93FL0 = accounts[3]
		const uintqgHGYpq = BigInt("1212")
		const addressmP8OyvQ = accounts[4]
		const addressY8wWkHN = accounts[5]
//		const addressKxhHdyk = await XenoFelixzTkQz4x.removePauser.call(addressU93FL0, {from: accounts[2]});
//		const boolHIjDm6B = await XenoFelixzTkQz4x.transferFrom.call(addressY8wWkHN, addressmP8OyvQ, uintqgHGYpq, {from: accounts[3]});

		await expect(XenoFelixzTkQz4x.removePauser.call(addressU93FL0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintLkUk4YW = BigInt("866")
		const uintubSKbsD = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintLkUk4YW, uintubSKbsD, {from: accounts[2]});
		const addressl7LDw9k = accounts[0]
		const addresscRaLCQ = "0x0000000000000000000000000000000000000001"
		const uintZTJMmo = BigInt("1183")
		const addressKG1EhL = accounts[4]
		const addressVvPyaWU = accounts[6]
		const addressb9RxKuy = await XenoFelixzTkQz4x.transferOwnership.call(addressl7LDw9k, {from: accounts[2]});
//		const booljwYlNYN = await XenoFelixzTkQz4x.freezeAccount.call(addresscRaLCQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHIjDm6B = await XenoFelixzTkQz4x.transferFrom.call(addressVvPyaWU, addressKG1EhL, uintZTJMmo, {from: accounts[3]});

		await expect(XenoFelixzTkQz4x.freezeAccount.call(addresscRaLCQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringeedBAC = "uiy9kaq0hJ5e9H2ccAVnYcvnWKoXjW3NuqweqAsizmWnuwhfcA19BJxEutgmOEASGXIKaWwM7tPpmf9C1yZ0aPUDAS56Q"
		const stringrg4Za4 = "xO2iVzmDkBJiVB6D4KqngU37LcY5ryHfB"
		const uintQWMYAJf = BigInt("27")
		const XenoFelixlz29Qq6 = await XenoFelix.new(stringeedBAC, stringrg4Za4, uintQWMYAJf, {from: accounts[4]});
		const addressmYND3A8 = accounts[3]
		const uintUkUfEVZ = BigInt("1281")
		const addressEDCmmDx = accounts[2]
		const uintHKR1QiP = BigInt("1312")
		const uintFUfi8Ux = BigInt("1430")
		const addressr9xTWAt = accounts[3]
		const addressCMDi6kG = accounts[1]
		const uint256srTVtn = await XenoFelixlz29Qq6.balanceOf.call(addressmYND3A8, {from: accounts[1]});
		const boolkFQrv3 = await XenoFelixlz29Qq6.increaseAllowance.call(addressEDCmmDx, uintUkUfEVZ, {from: accounts[5]});
		const boolgJoEoai = await XenoFelixlz29Qq6.lock.call(addressr9xTWAt, uintFUfi8Ux, uintHKR1QiP, {from: accounts[4]});
		const boolUsNWdXk = await XenoFelixlz29Qq6.isPauser.call(addressCMDi6kG, {from: accounts[4]});
		await XenoFelixlz29Qq6.onlyPauser.call({from: accounts[4]});
		const boolDJx7EOT = await XenoFelixlz29Qq6.paused.call({from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintNylEkcj = BigInt("866")
		const uintEEhgwdB = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintNylEkcj, uintEEhgwdB, {from: accounts[2]});
		const uint4FgKvE = BigInt("1655")
		const addressQJUr2o = accounts[2]
		const addressAkmGB1g = accounts[4]
		const boolij2G7MP = await XenoFelixzTkQz4x.burnOwner.call(addressQJUr2o, uint4FgKvE, {from: accounts[2]});
//		const boolEC2z4Cb = await XenoFelixzTkQz4x.acceptOwnership.call({from: accounts[3]});
//		const uint256OWtWiJa = await XenoFelixzTkQz4x.balanceOf.call(addressAkmGB1g, {from: accounts[5]});

		assert.equal(boolij2G7MP, true)
		await expect(XenoFelixzTkQz4x.acceptOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintZyTkyc = BigInt("866")
		const uintm4mHJ8T = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintZyTkyc, uintm4mHJ8T, {from: accounts[2]});
		const addressjkIxKBq = accounts[0]
		const uintxo8lgjg = BigInt("1207")
		const addressd33vaj1 = accounts[1]
		const addressYYTtBes = "0x0000000000000000000000000000000000000001"
		const addressg5vfRR3 = accounts[4]
//		const boolJjW151n = await XenoFelixzTkQz4x.unfreezeAccount.call(addressjkIxKBq, {from: accounts[2]});
//		const boolG0ZGqUt = await XenoFelixzTkQz4x.transferFrom.call(addressYYTtBes, addressd33vaj1, uintxo8lgjg, {from: accounts[1]});
//		const uint256OWtWiJa = await XenoFelixzTkQz4x.balanceOf.call(addressg5vfRR3, {from: accounts[5]});

		await expect(XenoFelixzTkQz4x.unfreezeAccount.call(addressjkIxKBq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintXfQJF5c = BigInt("866")
		const uintfNZtibc = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintXfQJF5c, uintfNZtibc, {from: accounts[2]});
		const addressJO1gRHE = accounts[4]
		const addressv0eIQCv = "0x0000000000000000000000000000000000000001"
		const uint256OWtWiJa = await XenoFelixzTkQz4x.balanceOf.call(addressJO1gRHE, {from: accounts[5]});
//		await XenoFelixzTkQz4x.renouncePauser.call({from: accounts[2]});
//		const boolDqm48qs = await XenoFelixzTkQz4x.isOwner.call(addressv0eIQCv, {from: accounts[0]});

		assert.equal(uint256OWtWiJa, BigInt("0"))
		await expect(XenoFelixzTkQz4x.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsOhFf89 = "viR7emsE0Ys6hXJmEkvQUrtZNAk"
		const stringYsbq6wk = "Nmec2MRRsOUl"
		const uintqrcYzc = BigInt("866")
		const uintugWOFjY = BigInt("79")
		const XenoFelixzTkQz4x = await XenoFelix.new(stringsOhFf89, stringYsbq6wk, uintqrcYzc, uintugWOFjY, {from: accounts[2]});
		const addressFBO9cL6 = accounts[4]
		const uintPHDLxtP = BigInt("378")
		const uintn7do0TP = BigInt("906")
		const uinthhLSLTd = BigInt("488")
		const addresszxPevMH = accounts[3]
		const uint256OWtWiJa = await XenoFelixzTkQz4x.balanceOf.call(addressFBO9cL6, {from: accounts[5]});
		const uint256Zh3tUTf = await XenoFelixzTkQz4x.burn.call(uintPHDLxtP, {from: accounts[2]});
		const boolgm7V7j = await XenoFelixzTkQz4x.transferWithLock.call(addresszxPevMH, uinthhLSLTd, uintn7do0TP, {from: accounts[2]});

		assert.equal(boolgm7V7j, true)
		assert.equal(uint256OWtWiJa, BigInt("0"))
	});
})