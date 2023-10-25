const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringfP1WSF9 = "179cog2r1vAMT8XjR4aAYmGrFv1vt9Em2y8aBJbJZRkQJ2Io"
		const stringiM12nEO = "A"
		const uintBSGi4l = BigInt("2047")
		const OnXFinanceGuFyADq = await OnXFinance.new(stringfP1WSF9, stringiM12nEO, uintBSGi4l, {from: accounts[3]});
		const uintlngj7I = BigInt("1904")
		const addressVtQyh3C = accounts[1]
		const addressW6rwoOH = accounts[1]
		const uintMXozZyj = BigInt("1358")
		const addressGOyg66v = accounts[3]
		const booleulNgTE = await OnXFinanceGuFyADq.transferFrom.call(addressW6rwoOH, addressVtQyh3C, uintlngj7I, {from: "0x0000000000000000000000000000000000000001"});
		const booloyuD2V0 = await OnXFinanceGuFyADq.transfer.call(addressGOyg66v, uintMXozZyj, {from: accounts[5]});
		const stringZTvNQR = await OnXFinanceGuFyADq.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(OnXFinanceGuFyADq.transferFrom.call(addressW6rwoOH, addressVtQyh3C, uintlngj7I, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringpqW0kY1 = "uNLl3jSj4cxFfhHshILi9ia86RSl2EfmeW9DhR1ljwWYkm1eQjMTfTkSaDR1EPJMfB6oHXlhys3WVC"
		const stringBtetKvO = "8QMAtmqecdE6RDlYjy07oHxsAqmwY3dC5o8ybF81HeTjkF9o4C9wdddHdJUg9Q7pgx3aWHuvGcHK"
		const uintALd8hua = BigInt("460")
		const OnXFinanceSxOanCx = await OnXFinance.new(stringpqW0kY1, stringBtetKvO, uintALd8hua, {from: accounts[0]});
		const uintfQFdZ5O = BigInt("94")
		const addressyBjin73 = accounts[3]
		const uinto8n7Na3 = BigInt("1611")
		const addressj1FWjS2 = "0x0000000000000000000000000000000000000001"
		const uint8jRpgaJf = await OnXFinanceSxOanCx.decimals.call({from: accounts[4]});
		const boolCVLynRi = await OnXFinanceSxOanCx.increaseAllowance.call(addressyBjin73, uintfQFdZ5O, {from: accounts[2]});
		const stringc595ls4 = await OnXFinanceSxOanCx.name.call({from: accounts[2]});
		const boolRtPb16L = await OnXFinanceSxOanCx.approve.call(addressj1FWjS2, uinto8n7Na3, {from: accounts[0]});

		assert.equal(uint8jRpgaJf, BigInt("18"))
		await expect(OnXFinanceSxOanCx.increaseAllowance.call(addressyBjin73, uintfQFdZ5O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringXDliYGa = "rEsLL9fL7Un4MQmfCXh4EUY5vw8b3hFQ"
		const stringTensdS7 = "dihQuqMfV11YILkQZhE4vHxs2csVZT19uhk37RnyOHzFLyzPFR"
		const uintmJef49I = BigInt("235")
		const OnXFinanceM6xURh3 = await OnXFinance.new(stringXDliYGa, stringTensdS7, uintmJef49I, {from: accounts[1]});
		const addressW4njttU = accounts[1]
		const addressLkaWvaS = accounts[3]
		const uintASetBsL = BigInt("1792")
		const addresshUBpDAr = accounts[4]
		const uint8y25KLh3 = await OnXFinanceM6xURh3.decimals.call({from: accounts[2]});
		const uintsFO13Sc = await OnXFinanceM6xURh3.allowance.call(addressLkaWvaS, addressW4njttU, {from: accounts[0]});
		const boolx6VbcUM = await OnXFinanceM6xURh3.approveAndCall.call(addresshUBpDAr, uintASetBsL, {from: accounts[0]});

		assert.equal(uint8y25KLh3, BigInt("18"))
		assert.equal(uintsFO13Sc, BigInt("0"))
		await expect(OnXFinanceM6xURh3.approveAndCall.call(addresshUBpDAr, uintASetBsL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringxTc3hOA = "BTIyuhLOIru"
		const string9V6C2m = "Wfo1ap77VglPtMaSaiW2zavShkSTVVwqPwJk4hs77lGuSi"
		const uintER2v9KL = BigInt("1764")
		const OnXFinanceOGSI5Jo = await OnXFinance.new(stringxTc3hOA, string9V6C2m, uintER2v9KL, {from: "0x0000000000000000000000000000000000000001"});
		const addresseIhrXiW = accounts[3]
		const uintcxwXcp = BigInt("1558")
		const addressH6HBIl = accounts[4]
		const uintrIGF2C = await OnXFinanceOGSI5Jo.balanceOf.call(addresseIhrXiW, {from: accounts[1]});
		const boolzLZv7EW = await OnXFinanceOGSI5Jo.transfer.call(addressH6HBIl, uintcxwXcp, {from: accounts[2]});
		const stringOcec4ve = await OnXFinanceOGSI5Jo.symbol.call({from: accounts[4]});
		const uintxETjq3Y = await OnXFinanceOGSI5Jo.totalSupply.call({from: accounts[2]});
	});

	it('test for OnXFinance', async () => {
		const stringp8hPMD7 = "hhtvrM3UDONlGn8h6BoGuWhlSLbpjuCE21BQEzyvqjy8D5WIMsfT7hVjtDzO70lkr"
		const stringEAeMMFA = "lkNTIXqY309nD4alk6y9wROQ3tSoIcdvx8z3d7zorAJ2cn76M1SHW8m2"
		const uintlbHptL = BigInt("1069")
		const OnXFinancedWtA2v = await OnXFinance.new(stringp8hPMD7, stringEAeMMFA, uintlbHptL, {from: accounts[4]});
		const addressJqPfbVq = accounts[2]
		const uintCoAPiRl = BigInt("1507")
		const addressj3Kh8rd = accounts[4]
		const addresscdH5cG7 = accounts[4]
		const uintnLAXP6H = BigInt("346")
		const addressUJA5BIz = accounts[4]
		const uintPm9nLJ2 = BigInt("1101")
		const addressH2jaFTj = accounts[2]
		const boolBxNZa6 = await OnXFinancedWtA2v.transferownership.call(addressJqPfbVq, {from: accounts[3]});
		const boolffIvJ7p = await OnXFinancedWtA2v.transferFrom.call(addresscdH5cG7, addressj3Kh8rd, uintCoAPiRl, {from: accounts[2]});
		const stringdJNQnu5 = await OnXFinancedWtA2v.symbol.call({from: accounts[4]});
		const boolMhqXZr8 = await OnXFinancedWtA2v.decreaseAllowance.call(addressUJA5BIz, uintnLAXP6H, {from: accounts[3]});
		const stringemYG5GQ = await OnXFinancedWtA2v.name.call({from: accounts[3]});
		const boolzPTx21N = await OnXFinancedWtA2v.increaseAllowance.call(addressH2jaFTj, uintPm9nLJ2, {from: accounts[0]});

		await expect(OnXFinancedWtA2v.transferownership.call(addressJqPfbVq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringfP1WSF9 = "179cog2r1vAMT8XjR4aAYmGrFv1vt9Em2y8aBJbJZRkQJ2Io"
		const stringiM12nEO = "A"
		const uintc9ujDUI = BigInt("2047")
		const OnXFinanceGuFyADq = await OnXFinance.new(stringfP1WSF9, stringiM12nEO, uintc9ujDUI, {from: accounts[3]});
		const uintXDCGQNv = BigInt("1358")
		const addressWmIUbZn = accounts[3]
		const uintq79A1Ip = BigInt("1547")
		const addressBKcqhsw = accounts[3]
		const uintTC8rVKN = BigInt("1752")
		const addresssLsVptW = accounts[3]
		const booloyuD2V0 = await OnXFinanceGuFyADq.transfer.call(addressWmIUbZn, uintXDCGQNv, {from: accounts[5]});
		const boolVee0u2 = await OnXFinanceGuFyADq.approve.call(addressBKcqhsw, uintq79A1Ip, {from: accounts[2]});
		const stringZTvNQR = await OnXFinanceGuFyADq.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhcNNvgY = await OnXFinanceGuFyADq.approveAndCall.call(addresssLsVptW, uintTC8rVKN, {from: accounts[1]});

		await expect(OnXFinanceGuFyADq.transfer.call(addressWmIUbZn, uintXDCGQNv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringmMrFomP = "eRRN3ZsphXeKKrilUqnxv7"
		const stringWD2sl17 = "Iei9NzQOy4Eg5GRFN3sJue1Q8P8FrCiKgwf7hkNpeHfGPSsV6VWzM0bH2FLQRcn5K2nvKWTlDudeWsWtsQUR"
		const uintzsPYkRF = BigInt("141")
		const OnXFinancesE5TfUU = await OnXFinance.new(stringmMrFomP, stringWD2sl17, uintzsPYkRF, {from: accounts[1]});
		const uintkUrGqQ = BigInt("1581")
		const addressFfVUxNv = accounts[0]
		const stringEaK4vuo = await OnXFinancesE5TfUU.symbol.call({from: accounts[4]});
		const boolU4sBU7Q = await OnXFinancesE5TfUU.transfer.call(addressFfVUxNv, uintkUrGqQ, {from: accounts[0]});

		assert.equal(stringEaK4vuo, "Iei9NzQOy4Eg5GRFN3sJue1Q8P8FrCiKgwf7hkNpeHfGPSsV6VWzM0bH2FLQRcn5K2nvKWTlDudeWsWtsQUR")
		await expect(OnXFinancesE5TfUU.transfer.call(addressFfVUxNv, uintkUrGqQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringc7vFbK = "IrEuDSP8N7XnxnMNAq3GFxEOqqmaV1QD8E2dyXhOUS4lxrpQbkC8E5dVauUoj3bm7V4S0vbJWL"
		const string7ZfKJf = "qgS26PJi1bh54vC6L"
		const uintv1sSV3R = BigInt("1346")
		const OnXFinanceE22ToFk = await OnXFinance.new(stringc7vFbK, string7ZfKJf, uintv1sSV3R, {from: accounts[0]});
		const uintvYjeSOL = BigInt("1244")
		const addressljgNyVG = accounts[2]
		const uintTI4hGgI = BigInt("601")
		const addressQSqWXlb = accounts[3]
		const uintdxGtzYR = BigInt("1460")
		const addressFIYR8PK = accounts[4]
		const addressY4coFeN = "0x0000000000000000000000000000000000000001"
		const boolpdblhB0 = await OnXFinanceE22ToFk.approve.call(addressljgNyVG, uintvYjeSOL, {from: accounts[2]});
		const boolWOlEjb = await OnXFinanceE22ToFk.approve.call(addressQSqWXlb, uintTI4hGgI, {from: accounts[1]});
		const boolG3NEE1Z = await OnXFinanceE22ToFk.transferFrom.call(addressY4coFeN, addressFIYR8PK, uintdxGtzYR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolWOlEjb, true)
		assert.equal(boolpdblhB0, true)
		await expect(OnXFinanceE22ToFk.transferFrom.call(addressY4coFeN, addressFIYR8PK, uintdxGtzYR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringmMrFomP = "eRRN3ZsphXeKKrilUqnxv7"
		const stringWD2sl17 = "Iei9NzQOy4Eg5GRFN3sJue1Q8P8FrCiKgwf7hkNpeHfGPSsV6VWzM0bH2FLQRcn5K2nvKWTlDudeWsWtsQUR"
		const uintYpyaCdE = BigInt("141")
		const OnXFinancesE5TfUU = await OnXFinance.new(stringmMrFomP, stringWD2sl17, uintYpyaCdE, {from: accounts[1]});
		const uintq8Iua8H = BigInt("471")
		const addressvuHh4Vj = accounts[0]
		const uintvgN3BT = BigInt("432")
		const addressvJDdrks = accounts[2]
		const uintZkFuAId = BigInt("1780")
		const addresskP18Rjz = accounts[4]
		const booltr4goCN = await OnXFinancesE5TfUU.approveAndCall.call(addressvuHh4Vj, uintq8Iua8H, {from: accounts[1]});
		const boolTmwBBW = await OnXFinancesE5TfUU.increaseAllowance.call(addressvJDdrks, uintvgN3BT, {from: accounts[0]});
		const boolkQj1Iod = await OnXFinancesE5TfUU.approveAndCall.call(addresskP18Rjz, uintZkFuAId, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booltr4goCN, true)
		await expect(OnXFinancesE5TfUU.increaseAllowance.call(addressvJDdrks, uintvgN3BT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringmMrFomP = "eRRN3ZsphXeKKrilUqnxv7"
		const stringWD2sl17 = "Iei9NzQOy4Eg5GRFN3sJue1Q8P8FrCiKgwf7hkNpeHfGPSsV6VWzM0bH2FLQRcn5K2nvKWTlDudeWsWtsQUR"
		const uintnw776uo = BigInt("141")
		const OnXFinancesE5TfUU = await OnXFinance.new(stringmMrFomP, stringWD2sl17, uintnw776uo, {from: accounts[1]});
		const address7Fhfx5 = accounts[0]
		const uintncGUPs = BigInt("0")
		const addresssgjmXPj = accounts[5]
		const addressxLx656z = accounts[5]
		const uintn0ri9g = await OnXFinancesE5TfUU.balanceOf.call(address7Fhfx5, {from: accounts[3]});
		const booleDQHuZk = await OnXFinancesE5TfUU.transferFrom.call(addressxLx656z, addresssgjmXPj, uintncGUPs, {from: accounts[1]});

		assert.equal(booleDQHuZk, true)
		assert.equal(uintn0ri9g, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringmMrFomP = "eRRN3ZsphXeKKrilUqnxv7"
		const stringWD2sl17 = "Iei9NzQOy4Eg5GRFN3sJue1Q8P8FrCiKgwf7hkNpeHfGPSsV6VWzM0bH2FLQRcn5K2nvKWTlDudeWsWtsQUR"
		const uintdbUE3sa = BigInt("141")
		const OnXFinancesE5TfUU = await OnXFinance.new(stringmMrFomP, stringWD2sl17, uintdbUE3sa, {from: accounts[1]});
		const addresselC4UyZ = accounts[3]
		const uintRTxU2Fv = BigInt("7")
		const addressjGhgDTO = accounts[5]
		const address9qWQmM = accounts[5]
		const uintusjzwEO = BigInt("937")
		const addressZXtGzl = accounts[0]
		const booluW1pZUH = await OnXFinancesE5TfUU.transferownership.call(addresselC4UyZ, {from: accounts[1]});
		const booleDQHuZk = await OnXFinancesE5TfUU.transferFrom.call(address9qWQmM, addressjGhgDTO, uintRTxU2Fv, {from: accounts[1]});
		const boolrrIAVey = await OnXFinancesE5TfUU.increaseAllowance.call(addressZXtGzl, uintusjzwEO, {from: accounts[1]});

		assert.equal(booluW1pZUH, true)
		await expect(OnXFinancesE5TfUU.transferFrom.call(address9qWQmM, addressjGhgDTO, uintRTxU2Fv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})