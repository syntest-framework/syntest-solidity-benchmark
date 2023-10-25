const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringedBljs = "2RKuU2MnZknsTwu5RjhUNEXgLQK6Lh5v9Mi1KQYUV1WSzlWl5VLoWd"
		const stringW8Y2aT0 = "aTACMmF3F1eo7u6ycqKYYQnBQrdQWRujWMCgr1Bjd3xgwziQFhkbaOOYf"
		const uintgz6zpeh = BigInt("110")
		const OnXFinanceXrDd5xV = await OnXFinance.new(stringedBljs, stringW8Y2aT0, uintgz6zpeh, {from: accounts[1]});
		const addressntzPcz = accounts[4]
		const addressR0DL6Ws = accounts[2]
		const stringk33mquk = await OnXFinanceXrDd5xV.name.call({from: accounts[3]});
		const uintpkRLGWT = await OnXFinanceXrDd5xV.allowance.call(addressR0DL6Ws, addressntzPcz, {from: accounts[4]});
		const uint8nd9gPV3 = await OnXFinanceXrDd5xV.decimals.call({from: accounts[1]});

		assert.equal(stringk33mquk, "2RKuU2MnZknsTwu5RjhUNEXgLQK6Lh5v9Mi1KQYUV1WSzlWl5VLoWd")
		assert.equal(uint8nd9gPV3, BigInt("18"))
		assert.equal(uintpkRLGWT, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringp9HjVO = "gVFGoc99iyePNWaG"
		const stringRAtEl5r = "YaWwDkAlBIxlYOJW9C"
		const uintnEhqb8u = BigInt("58")
		const OnXFinancebImoZ9 = await OnXFinance.new(stringp9HjVO, stringRAtEl5r, uintnEhqb8u, {from: accounts[4]});
		const uintaAQuxra = BigInt("2015")
		const addressgAXmLOS = accounts[5]
		const addressZEAJyWT = "0x0000000000000000000000000000000000000001"
		const uintZQtSWNh = BigInt("717")
		const addressIaOciPk = accounts[4]
		const boolo8C8N1g = await OnXFinancebImoZ9.transferFrom.call(addressZEAJyWT, addressgAXmLOS, uintaAQuxra, {from: accounts[0]});
		const booloQQ42sK = await OnXFinancebImoZ9.transfer.call(addressIaOciPk, uintZQtSWNh, {from: accounts[3]});
		const stringOZAgFEP = await OnXFinancebImoZ9.name.call({from: accounts[3]});

		await expect(OnXFinancebImoZ9.transferFrom.call(addressZEAJyWT, addressgAXmLOS, uintaAQuxra, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringc3fcFIB = "xK8T0SBtGfTeQnQFFlXGHpgcrfJBH4v3qP"
		const stringydGqxF9 = "Lj9Lprg6lHR6lfI2q0KmNaY"
		const uintbMnkRv = BigInt("154")
		const OnXFinanceE2CgXyz = await OnXFinance.new(stringc3fcFIB, stringydGqxF9, uintbMnkRv, {from: "0x0000000000000000000000000000000000000001"});
		const addressbJI2miE = accounts[3]
		const addressGs9uY1i = accounts[2]
		const uintizWVDAd = BigInt("415")
		const addresszsNU6lR = "0x0000000000000000000000000000000000000001"
		const uintl7uQIQs = BigInt("574")
		const addressnAZpmd = accounts[4]
		const stringKy4ATmP = await OnXFinanceE2CgXyz.symbol.call({from: accounts[0]});
		const uintZanB3oU = await OnXFinanceE2CgXyz.balanceOf.call(addressbJI2miE, {from: "0x0000000000000000000000000000000000000001"});
		const uintox3Vh7 = await OnXFinanceE2CgXyz.balanceOf.call(addressGs9uY1i, {from: accounts[0]});
		const boolKB2spO3 = await OnXFinanceE2CgXyz.transfer.call(addresszsNU6lR, uintizWVDAd, {from: accounts[2]});
		const boolzMAXaoR = await OnXFinanceE2CgXyz.decreaseAllowance.call(addressnAZpmd, uintl7uQIQs, {from: accounts[1]});
	});

	it('test for OnXFinance', async () => {
		const stringqBDQvxO = "c9o4GbbrHeUyHsfVg4bRj88zT5GHD3RpYYIbxfbsVQeb"
		const stringxDXoaWL = "v2BJtcpyPwNxXJgoosnWdl47Hzg19jQrGjKuXqWkDMEZY6vILJITstmwOq2gjRJjoGTLcC0O9HFvxNB"
		const uintFsiz60n = BigInt("1983")
		const OnXFinanceJZxUm6e = await OnXFinance.new(stringqBDQvxO, stringxDXoaWL, uintFsiz60n, {from: accounts[2]});
		const uintlQvmoOD = BigInt("884")
		const addressgWHn66e = accounts[1]
		const uinto9smVX9 = BigInt("34")
		const addressuW3Kdnr = accounts[5]
		const addressyv05sxI = accounts[2]
		const booleCbjcJw = await OnXFinanceJZxUm6e.decreaseAllowance.call(addressgWHn66e, uintlQvmoOD, {from: accounts[1]});
		const boolcArW8Kb = await OnXFinanceJZxUm6e.approve.call(addressuW3Kdnr, uinto9smVX9, {from: accounts[1]});
		const boolPaeMRKo = await OnXFinanceJZxUm6e.transferownership.call(addressyv05sxI, {from: accounts[0]});

		await expect(OnXFinanceJZxUm6e.decreaseAllowance.call(addressgWHn66e, uintlQvmoOD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const string0J3mPo = "x8BwqILAKzEk2nJkLbhIV3kMziNi7C"
		const stringcSQB4az = "WZO64QsEQAMDsJDLPfUgdRD8UcvzalYph9uPwLcpOMsGTfEIj6SinZixQRPGSjnJedrLwU1TA3rEDDl474"
		const uintfXH3qKw = BigInt("1231")
		const OnXFinanceOLOat0u = await OnXFinance.new(string0J3mPo, stringcSQB4az, uintfXH3qKw, {from: accounts[2]});
		const uintdMrgtb = BigInt("167")
		const addressb2JfWGS = accounts[0]
		const uint0Ex39T = BigInt("625")
		const addressz8ShOgE = accounts[0]
		const boolib4wLsR = await OnXFinanceOLOat0u.approveAndCall.call(addressb2JfWGS, uintdMrgtb, {from: accounts[5]});
		const boolYwvhvp = await OnXFinanceOLOat0u.transfer.call(addressz8ShOgE, uint0Ex39T, {from: accounts[0]});
		const uint8JpKfqJn = await OnXFinanceOLOat0u.decimals.call({from: accounts[2]});

		await expect(OnXFinanceOLOat0u.approveAndCall.call(addressb2JfWGS, uintdMrgtb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringUaD6rAl = "V88DhEgRSZz9ktvD48dJLc6HitzV2kTQI9zgJa3iy8Ulti"
		const stringcAqufs = "JrVf1gltoX32B3EGDVeCt"
		const uintuqFFsw1 = BigInt("174")
		const OnXFinancehnlBur1 = await OnXFinance.new(stringUaD6rAl, stringcAqufs, uintuqFFsw1, {from: accounts[4]});
		const uintZFEKao = BigInt("1494")
		const addressacc0scQ = accounts[4]
		const uintRUjvxf7 = BigInt("520")
		const addressEoyc7dH = accounts[2]
		const addressWTkGdb = accounts[1]
		const uintxYFCCUs = BigInt("59")
		const addresshInPNVY = accounts[0]
		const addressTcDVq4j = accounts[0]
		const boolykt3Qdb = await OnXFinancehnlBur1.transfer.call(addressacc0scQ, uintZFEKao, {from: accounts[3]});
		const boolfV0UrQ6 = await OnXFinancehnlBur1.transfer.call(addressEoyc7dH, uintRUjvxf7, {from: accounts[4]});
		const stringXnqbwBq = await OnXFinancehnlBur1.symbol.call({from: accounts[2]});
		const stringkxsQUqh = await OnXFinancehnlBur1.symbol.call({from: accounts[4]});
		const boollSrRQJ = await OnXFinancehnlBur1.transferownership.call(addressWTkGdb, {from: accounts[4]});
		const boolRo3SzU7 = await OnXFinancehnlBur1.transferFrom.call(addressTcDVq4j, addresshInPNVY, uintxYFCCUs, {from: accounts[4]});

		await expect(OnXFinancehnlBur1.transfer.call(addressacc0scQ, uintZFEKao, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringBD6QkCs = "ID6mWmKBQarQDnTrmCwbGF"
		const stringl1BCwTG = "4"
		const uintFU6oxb = BigInt("4")
		const OnXFinanceg9ohJn = await OnXFinance.new(stringBD6QkCs, stringl1BCwTG, uintFU6oxb, {from: accounts[4]});
		const uintZ1dVpk6 = BigInt("1574")
		const addressTW7qKua = accounts[1]
		const addresscBq5GOe = accounts[4]
		const uintP3rzrvL = BigInt("1111")
		const addressk1M1lur = accounts[0]
		const addressV70CrJd = accounts[3]
		const uinterm8NV = BigInt("540")
		const addressFg5MTxN = accounts[3]
		const booljNboc6E = await OnXFinanceg9ohJn.approveAndCall.call(addressTW7qKua, uintZ1dVpk6, {from: accounts[4]});
		const stringp56xTO3 = await OnXFinanceg9ohJn.name.call({from: accounts[3]});
		const uintIQ3q3is = await OnXFinanceg9ohJn.balanceOf.call(addresscBq5GOe, {from: accounts[3]});
		const boolVF9hb7 = await OnXFinanceg9ohJn.transferFrom.call(addressV70CrJd, addressk1M1lur, uintP3rzrvL, {from: "0x0000000000000000000000000000000000000001"});
		const boolFfMqetq = await OnXFinanceg9ohJn.approveAndCall.call(addressFg5MTxN, uinterm8NV, {from: accounts[2]});
		const strings6CFa0m = await OnXFinanceg9ohJn.name.call({from: accounts[3]});

		assert.equal(booljNboc6E, true)
		assert.equal(stringp56xTO3, "ID6mWmKBQarQDnTrmCwbGF")
		assert.equal(uintIQ3q3is, BigInt("4000000000000000000"))
		await expect(OnXFinanceg9ohJn.transferFrom.call(addressV70CrJd, addressk1M1lur, uintP3rzrvL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringVWcZFA = "QSAhKpB6CMTGaaW7wTdg7QKC54plB3btQpPOQMdBriLElmPUeqwx4oXGW"
		const stringeOs2col = "jwwDHpdStkXtrFsy97gclzE2WGvY2UOei3x4B3DrwU9tR97JjIjbHQyi7zQs1oKgAA4oju6MCD1wJpIcPVOcPs5ZepdP6aOBaM"
		const uintY4aXONJ = BigInt("36")
		const OnXFinancekdxk5D = await OnXFinance.new(stringVWcZFA, stringeOs2col, uintY4aXONJ, {from: accounts[5]});
		const uintWjUPb1I = BigInt("87")
		const addressPMes2x6 = accounts[5]
		const uintYqBbIUA = BigInt("969")
		const addressdhBG8fh = accounts[2]
		const addressAahzf0X = accounts[0]
		const uintYsiOpl = BigInt("943")
		const addressChDCTFf = accounts[2]
		const boolLp0p2eb = await OnXFinancekdxk5D.approve.call(addressPMes2x6, uintWjUPb1I, {from: accounts[4]});
		const boolYpMa3Dx = await OnXFinancekdxk5D.transferFrom.call(addressAahzf0X, addressdhBG8fh, uintYqBbIUA, {from: accounts[2]});
		const boolWwNUpKW = await OnXFinancekdxk5D.transfer.call(addressChDCTFf, uintYsiOpl, {from: accounts[2]});

		assert.equal(boolLp0p2eb, true)
		await expect(OnXFinancekdxk5D.transferFrom.call(addressAahzf0X, addressdhBG8fh, uintYqBbIUA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringzEiGPH = "KYTkwbzoope7wef"
		const stringyTHYfi = "YHuZZDR2dqPkIE1QaM6CXcq105I6qBJPS1cLMfXJXxrhdcECcsYzWnTFsPUaA"
		const uintbdPwAmY = BigInt("202")
		const OnXFinancevIogQq3 = await OnXFinance.new(stringzEiGPH, stringyTHYfi, uintbdPwAmY, {from: accounts[4]});
		const uinta7QXL6X = BigInt("1566")
		const addressSx3SWxu = accounts[0]
		const uint4NkcAt = BigInt("429")
		const addressaF8oJNi = accounts[1]
		const addressMXZe4pU = "0x0000000000000000000000000000000000000001"
		const addresso7n2Mb = accounts[5]
		const addressjoaEmha = "0x0000000000000000000000000000000000000001"
		const uintIHdIj5E = BigInt("1205")
		const addressOY3ydnj = accounts[0]
		const uint5So38d = BigInt("2011")
		const addressldOoPN3 = "0x0000000000000000000000000000000000000001"
		const boolxGZctVu = await OnXFinancevIogQq3.transfer.call(addressSx3SWxu, uinta7QXL6X, {from: accounts[0]});
		const boolhNJOpxh = await OnXFinancevIogQq3.transferFrom.call(addressMXZe4pU, addressaF8oJNi, uint4NkcAt, {from: accounts[1]});
		const uintXkGzVzL = await OnXFinancevIogQq3.allowance.call(addressjoaEmha, addresso7n2Mb, {from: accounts[1]});
		const boolBfMmLeC = await OnXFinancevIogQq3.increaseAllowance.call(addressOY3ydnj, uintIHdIj5E, {from: accounts[3]});
		const boolDlaPjaF = await OnXFinancevIogQq3.approve.call(addressldOoPN3, uint5So38d, {from: accounts[5]});

		await expect(OnXFinancevIogQq3.transfer.call(addressSx3SWxu, uinta7QXL6X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringBD6QkCs = "ID6mWmKBQarQDnTrmCwbGF"
		const stringl1BCwTG = "4"
		const uintxjMurS7 = BigInt("4")
		const OnXFinanceg9ohJn = await OnXFinance.new(stringBD6QkCs, stringl1BCwTG, uintxjMurS7, {from: accounts[4]});
		const addressGvaiVnP = accounts[5]
		const uintZcJim4e = BigInt("1525")
		const addressLLAPkx3 = accounts[1]
		const uintlbQKn7R = BigInt("1836")
		const addressAf5eeuq = accounts[1]
		const uintixOBZb = BigInt("2022")
		const addressSXT8pnd = accounts[5]
		const uintDUWyLxw = BigInt("474")
		const addressPtVAikO = accounts[2]
		const uintAUHJgnu = BigInt("785")
		const addressOiLREYE = accounts[2]
		const uintJUIWB4W = BigInt("974")
		const addressGQanwXm = accounts[1]
		const uinta9xw7f = BigInt("659")
		const addressTzNAurS = accounts[2]
		const uintsAqMfa6 = BigInt("1318")
		const addressvHewv0d = accounts[4]
		const addressjaZx1CG = accounts[3]
		const uintf5xWN5L = BigInt("9")
		const addressrn2J8lb = accounts[5]
		const uintxXOUqnt = BigInt("747")
		const addressgAVBZiV = accounts[2]
		const uintOsFgcm2 = BigInt("1111")
		const addresszH0NOS = accounts[0]
		const addressfx7E2q = accounts[3]
		const uintMOo84h9 = BigInt("540")
		const addressSUdnBpE = accounts[3]
		const stringzRsyuwo = await OnXFinanceg9ohJn.symbol.call({from: accounts[1]});
		const boolhhwm3MA = await OnXFinanceg9ohJn.transferownership.call(addressGvaiVnP, {from: accounts[1]});
		const booljNboc6E = await OnXFinanceg9ohJn.approveAndCall.call(addressLLAPkx3, uintZcJim4e, {from: accounts[4]});
		const boolxlgn6a3 = await OnXFinanceg9ohJn.transfer.call(addressAf5eeuq, uintlbQKn7R, {from: accounts[4]});
		const stringp56xTO3 = await OnXFinanceg9ohJn.name.call({from: accounts[3]});
		const booloFH3bFF = await OnXFinanceg9ohJn.decreaseAllowance.call(addressSXT8pnd, uintixOBZb, {from: "0x0000000000000000000000000000000000000001"});
		const boolQr4lDfF = await OnXFinanceg9ohJn.approve.call(addressPtVAikO, uintDUWyLxw, {from: accounts[3]});
		const boolTG5ZC7J = await OnXFinanceg9ohJn.approve.call(addressOiLREYE, uintAUHJgnu, {from: accounts[3]});
		const boolz0Xak7U = await OnXFinanceg9ohJn.approve.call(addressGQanwXm, uintJUIWB4W, {from: accounts[0]});
		const boolAPrfVcG = await OnXFinanceg9ohJn.increaseAllowance.call(addressTzNAurS, uinta9xw7f, {from: accounts[0]});
		const boollIhTuBl = await OnXFinanceg9ohJn.transferFrom.call(addressjaZx1CG, addressvHewv0d, uintsAqMfa6, {from: "0x0000000000000000000000000000000000000001"});
		const boolvMffW1 = await OnXFinanceg9ohJn.transfer.call(addressrn2J8lb, uintf5xWN5L, {from: accounts[3]});
		const boolxOfH9MF = await OnXFinanceg9ohJn.decreaseAllowance.call(addressgAVBZiV, uintxXOUqnt, {from: accounts[2]});
		const boolVF9hb7 = await OnXFinanceg9ohJn.transferFrom.call(addressfx7E2q, addresszH0NOS, uintOsFgcm2, {from: "0x0000000000000000000000000000000000000001"});
		const boolFfMqetq = await OnXFinanceg9ohJn.approveAndCall.call(addressSUdnBpE, uintMOo84h9, {from: accounts[2]});
		const strings6CFa0m = await OnXFinanceg9ohJn.name.call({from: accounts[3]});

		assert.equal(stringzRsyuwo, "4")
		await expect(OnXFinanceg9ohJn.transferownership.call(addressGvaiVnP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringtZ9bwmu = "hWwKu6WgAaQ3gmKADR"
		const stringOgG39E7 = "e4RiCAPWECGAw9exGLkTn8Z0jQzr6Bt7YYSclC4kXJzipPn4laABkLLRO4L"
		const uintJiYzIbq = BigInt("863")
		const OnXFinancemPOGDR8 = await OnXFinance.new(stringtZ9bwmu, stringOgG39E7, uintJiYzIbq, {from: accounts[3]});
		const uintiytEZru = BigInt("1099")
		const addresssxGF8Y = accounts[2]
		const addressNc0Iiji = accounts[4]
		const boolSZhQmHe = await OnXFinancemPOGDR8.approveAndCall.call(addresssxGF8Y, uintiytEZru, {from: accounts[3]});
		const boolxm6SLVZ = await OnXFinancemPOGDR8.transferownership.call(addressNc0Iiji, {from: accounts[3]});

		assert.equal(boolSZhQmHe, true)
		assert.equal(boolxm6SLVZ, true)
	});

	it('test for OnXFinance', async () => {
		const stringT2HKcrI = "LpJafH4n1xBw8nybHzy82bYsHBtMdamP"
		const stringhG6zcz = "Qmr0t7QNyhCFYvVK7tKetFb0WfNjO4tR6J6skJPzxsNLK9eftYV"
		const uintBuibuWB = BigInt("62")
		const OnXFinancelXsQL1U = await OnXFinance.new(stringT2HKcrI, stringhG6zcz, uintBuibuWB, {from: accounts[1]});
		const uintIEt2bEi = BigInt("0")
		const addressYygfoqH = accounts[1]
		const boolN68Wj0T = await OnXFinancelXsQL1U.transfer.call(addressYygfoqH, uintIEt2bEi, {from: accounts[1]});

		assert.equal(boolN68Wj0T, true)
	});
})