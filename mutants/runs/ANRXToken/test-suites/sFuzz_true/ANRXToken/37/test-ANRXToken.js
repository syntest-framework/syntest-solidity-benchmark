const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintRgL9PTr = BigInt("1235")
		const stringov0HTGG = "y1SZTfKipHUBfYXCy6B2bHR66VRjlEdBMqmSI38uAYGNoScBLSVw6nC"
		const stringDzt2Wdv = "Kb95pPrae9LI5eJWUqQScmGaWU4WTYOTuucYlxmMXTCjpTq91cXvuSyId7uzaO14QYQRaktcaMzGImEYG"
		const uintDWU1Tlc = BigInt("648")
		const ANRXTokenAburPmW = await ANRXToken.new(uintRgL9PTr, stringov0HTGG, stringDzt2Wdv, uintDWU1Tlc, {from: "0x0000000000000000000000000000000000000001"});
		const uintWmKJVLr = BigInt("404")
		const addressxrHxAlK = accounts[3]
		const addressOZSsVDB = accounts[2]
		const uintQH8zd0X = BigInt("621")
		const uintpbxedng = BigInt("1072")
		const addressrx0eSqf = accounts[4]
		const addressYqudDS4 = accounts[3]
		const boolZOMtwj3 = await ANRXTokenAburPmW.transferFrom.call(addressOZSsVDB, addressxrHxAlK, uintWmKJVLr, {from: accounts[3]});
		const uintggT8egN = await ANRXTokenAburPmW.redeem.call(uintQH8zd0X, {from: accounts[1]});
		const uintY9HryNH = await ANRXTokenAburPmW.issue.call(uintpbxedng, {from: accounts[2]});
		const uintYoUconE = await ANRXTokenAburPmW.allowance.call(addressYqudDS4, addressrx0eSqf, {from: accounts[5]});
	});

	it('test for ANRXToken', async () => {
		const uintngH6SPJ = BigInt("1350")
		const stringcwYgz1e = "1Ltk2eSNxC1OgtDQF04evkP3R5CWTKPAXDTEOH8jVhpRV7LSp52ssVEvEX3ed92DJXzNwrTVUZ9bLwlUUSskrW1PV"
		const stringAni8L0b = "Uoc1QsGtCSbZ6E3ycdih2AdrvcK8JnVDlklU2CxfhBPhsg4idR5mf7VyIhv8UOa3TMMAGIrYWylhjx5vtPt"
		const uintjDiSG0o = BigInt("802")
		const ANRXTokencPP0HJX = await ANRXToken.new(uintngH6SPJ, stringcwYgz1e, stringAni8L0b, uintjDiSG0o, {from: accounts[4]});
		const addressvr3FJ56 = accounts[4]
		const uintRJ0R984 = BigInt("254")
		const addressrh7CefN = accounts[0]
		const uintG64yOJl = BigInt("684")
		const uintznCnvMc = BigInt("1480")
		const addressHcg8DLN = await ANRXTokencPP0HJX.deprecate.call(addressvr3FJ56, {from: accounts[5]});
		const boolSUTanU7 = await ANRXTokencPP0HJX.approve.call(addressrh7CefN, uintRJ0R984, {from: "0x0000000000000000000000000000000000000001"});
		const uintc77sCXN = await ANRXTokencPP0HJX.issue.call(uintG64yOJl, {from: "0x0000000000000000000000000000000000000001"});
		const uintRzWTFTd = await ANRXTokencPP0HJX.redeem.call(uintznCnvMc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ANRXTokencPP0HJX.deprecate.call(addressvr3FJ56, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintri8r1H = BigInt("950")
		const stringekuNRK = "2Qj99sgimsXfRRtbSDS10EPMVOq"
		const stringjddUmfc = "oqfVEmAZr93nzCekO14LjTFtc0cAngjOWADD4ZkwMLLTrRkr0kKgTxH8zlFJvwxog"
		const uintXSkZ0S = BigInt("135")
		const ANRXTokenLLBuVG = await ANRXToken.new(uintri8r1H, stringekuNRK, stringjddUmfc, uintXSkZ0S, {from: accounts[2]});
		const uintwfxRS0r = BigInt("1420")
		const addressECMAs7i = accounts[0]
		const uintC1qTBK = BigInt("998")
		const addresso2y8Oh4 = accounts[3]
		const addressksuEtx3 = accounts[2]
		const uintgW6zfJU = await ANRXTokenLLBuVG.totalSupply.call({from: accounts[3]});
		const boolDd7eIlF = await ANRXTokenLLBuVG.approve.call(addressECMAs7i, uintwfxRS0r, {from: accounts[5]});
		const booln0QVH70 = await ANRXTokenLLBuVG.transfer.call(addresso2y8Oh4, uintC1qTBK, {from: accounts[1]});
		const uintlwsHrpS = await ANRXTokenLLBuVG.totalSupply.call({from: accounts[4]});
		const addressqW4Aj9d = await ANRXTokenLLBuVG.deprecate.call(addressksuEtx3, {from: accounts[3]});

		assert.equal(boolDd7eIlF, true)
		assert.equal(uintgW6zfJU, BigInt("950"))
		await expect(ANRXTokenLLBuVG.transfer.call(addresso2y8Oh4, uintC1qTBK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintN4zrfi3 = BigInt("1358")
		const stringGNPbMYK = "Y7ZKo5XvA"
		const stringNrFJbDc = "48DQnwBAq2idSFM6cwKjn"
		const uintoGwqLv6 = BigInt("1409")
		const ANRXTokenkxNywc = await ANRXToken.new(uintN4zrfi3, stringGNPbMYK, stringNrFJbDc, uintoGwqLv6, {from: accounts[4]});
		const addressbm0L298 = "0x0000000000000000000000000000000000000001"
		const addresshyRislR = accounts[3]
		const uintZW6BYJY = BigInt("583")
		const addressy6FqY0M = accounts[1]
		const addressl2Bo0wj = accounts[2]
		const addressP6GAWtp = accounts[0]
		const uintsN3cl9X = BigInt("1935")
		const uintVMgsfcX = await ANRXTokenkxNywc.allowance.call(addresshyRislR, addressbm0L298, {from: accounts[3]});
		const boolcIobK4I = await ANRXTokenkxNywc.transferFrom.call(addressl2Bo0wj, addressy6FqY0M, uintZW6BYJY, {from: accounts[3]});
		const uintgIXbn5 = await ANRXTokenkxNywc.balanceOf.call(addressP6GAWtp, {from: accounts[1]});
		const uintF2ZmzdT = await ANRXTokenkxNywc.issue.call(uintsN3cl9X, {from: accounts[5]});

		assert.equal(uintVMgsfcX, BigInt("0"))
		await expect(ANRXTokenkxNywc.transferFrom.call(addressl2Bo0wj, addressy6FqY0M, uintZW6BYJY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintI7dOJM = BigInt("341")
		const stringVC7igX = "REbYzrMdyhbHx6tEQexkMmtyeyYYoWOtYyGVswKSt1eWbfFu3YtREkZHdnBsEinJeiFO1gvwYrsksDbC"
		const stringAxp8QF = "1hpqUWJ9e6Q4FfgiTjDsvmLSosxTBgs2CHyrK0AG9DJi"
		const uintsfflNs = BigInt("2012")
		const ANRXTokenhYgG4WU = await ANRXToken.new(uintI7dOJM, stringVC7igX, stringAxp8QF, uintsfflNs, {from: accounts[0]});
		const uint9mUude = BigInt("533")
		const uintgNhSM0D = await ANRXTokenhYgG4WU.issue.call(uint9mUude, {from: accounts[0]});
		const uintqnnQl8r = await ANRXTokenhYgG4WU.totalSupply.call({from: accounts[2]});

		assert.equal(uintqnnQl8r, BigInt("341"))
	});

	it('test for ANRXToken', async () => {
		const uinte2OvbGI = BigInt("1999")
		const stringjRnBiAK = "bATvy"
		const stringcpSU2d = "2JBfg8cbaHtuy3pOhEAMd1HUIZTEqsJkHwZ3Ub3jr7s44yqlbQswM4LHRJX1gzs7strEPux9vEPzKoph"
		const uintP8P1TZW = BigInt("1589")
		const ANRXTokenCehLj4Y = await ANRXToken.new(uinte2OvbGI, stringjRnBiAK, stringcpSU2d, uintP8P1TZW, {from: accounts[2]});
		const uintw61vTSW = BigInt("940")
		const addressfwB9KIq = accounts[4]
		const addressnYAAmo7 = accounts[4]
		const uintsFr1Vs = BigInt("1420")
		const addressGfOY2Qh = accounts[0]
		const addressxS3St8 = accounts[1]
		const uintBDbZr5R = BigInt("1966")
		const addressGfQtdNt = "0x0000000000000000000000000000000000000001"
		const addresscVW4o13 = accounts[3]
		const addressyuo08R = accounts[2]
		const addressNQGPW3l = accounts[3]
		const boollO7Pxrw = await ANRXTokenCehLj4Y.approve.call(addressfwB9KIq, uintw61vTSW, {from: accounts[1]});
		const uintegG4Wpu = await ANRXTokenCehLj4Y.balanceOf.call(addressnYAAmo7, {from: accounts[3]});
		const boolcppRf4s = await ANRXTokenCehLj4Y.transferFrom.call(addressxS3St8, addressGfOY2Qh, uintsFr1Vs, {from: accounts[1]});
		const boolvZoka5 = await ANRXTokenCehLj4Y.transferFrom.call(addresscVW4o13, addressGfQtdNt, uintBDbZr5R, {from: accounts[4]});
		const uintJrygO4k = await ANRXTokenCehLj4Y.allowance.call(addressNQGPW3l, addressyuo08R, {from: accounts[3]});

		assert.equal(boollO7Pxrw, true)
		assert.equal(uintegG4Wpu, BigInt("0"))
		await expect(ANRXTokenCehLj4Y.transferFrom.call(addressxS3St8, addressGfOY2Qh, uintsFr1Vs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintvpnvmVq = BigInt("950")
		const stringekuNRK = "2Qj99sgimsXfRRtbSDS10EPMVOq"
		const stringjddUmfc = "oqfVEmAZr93nzCekO14LjTFtc0cAngjOWADD4ZkwMLLTrRkr0kKgTxH8zlFJvwxog"
		const uintZlU4gx = BigInt("135")
		const ANRXTokenLLBuVG = await ANRXToken.new(uintvpnvmVq, stringekuNRK, stringjddUmfc, uintZlU4gx, {from: accounts[2]});
		const uintSG3wwk5 = BigInt("1420")
		const addresscoxDSlJ = accounts[0]
		const uintMP8E5l8 = BigInt("837")
		const addressGkIQXN5 = accounts[3]
		const uintgW6zfJU = await ANRXTokenLLBuVG.totalSupply.call({from: accounts[3]});
		const boolDd7eIlF = await ANRXTokenLLBuVG.approve.call(addresscoxDSlJ, uintSG3wwk5, {from: accounts[5]});
		const uintlwsHrpS = await ANRXTokenLLBuVG.totalSupply.call({from: accounts[4]});
		const uintpY7Hkp = await ANRXTokenLLBuVG.redeem.call(uintMP8E5l8, {from: accounts[2]});
		const addressqW4Aj9d = await ANRXTokenLLBuVG.deprecate.call(addressGkIQXN5, {from: accounts[3]});

		assert.equal(boolDd7eIlF, true)
		assert.equal(uintgW6zfJU, BigInt("950"))
		assert.equal(uintlwsHrpS, BigInt("950"))
		await expect(ANRXTokenLLBuVG.deprecate.call(addressGkIQXN5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintQyhdbuV = BigInt("1927")
		const stringvxq3EzA = "HENILYGNCBixUzxHJhY55jxsDJca1sv2vu3Jg166vIsluCjituL2Qbhdev69F2ANv9xUlpEF4WHqJyPEWrJ98Mdut7qLs2iFot"
		const stringfkDP0EP = "12k7ZJhLDADa"
		const uintjnavGcD = BigInt("293")
		const ANRXToken3Aj5Dn = await ANRXToken.new(uintQyhdbuV, stringvxq3EzA, stringfkDP0EP, uintjnavGcD, {from: accounts[0]});
		const addressvjWn5BQ = accounts[3]
		const uintECZBy3u = BigInt("955")
		const uintsWF987F = BigInt("1858")
		const addressapqSjGP = "0x0000000000000000000000000000000000000001"
		const addressenFRLMl = await ANRXToken3Aj5Dn.deprecate.call(addressvjWn5BQ, {from: accounts[0]});
		const uintcZeXHOy = await ANRXToken3Aj5Dn.issue.call(uintECZBy3u, {from: accounts[5]});
		const booleALg4yd = await ANRXToken3Aj5Dn.transfer.call(addressapqSjGP, uintsWF987F, {from: accounts[5]});

		await expect(ANRXToken3Aj5Dn.issue.call(uintECZBy3u, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintuhVlEf = BigInt("912")
		const stringklkyAPw = "2eAxo4mIOfrWHuh9LCqq6QhnFemOmzmZhhmwVt7PrsEaQSr4Ke38l3D7OrSywk8NoDCXNEw4jbuXxR5vy"
		const stringW40KWnV = "us"
		const uintzFMpEg = BigInt("1239")
		const ANRXTokendEyzTf = await ANRXToken.new(uintuhVlEf, stringklkyAPw, stringW40KWnV, uintzFMpEg, {from: accounts[0]});
		const addressR0q9Ieg = accounts[1]
		const addresstqN1Kut = accounts[2]
		const uintKNcek5H = BigInt("956")
		const addressG62ZGJr = "0x00000000000000000000000000000000000000-1"
		const uintNPTnsj0 = await ANRXTokendEyzTf.balanceOf.call(addressR0q9Ieg, {from: accounts[1]});
		const uintGylPM69 = await ANRXTokendEyzTf.balanceOf.call(addresstqN1Kut, {from: accounts[3]});
		const boolNPsmdFv = await ANRXTokendEyzTf.transfer.call(addressG62ZGJr, uintKNcek5H, {from: accounts[0]});

		assert.equal(uintGylPM69, BigInt("0"))
		assert.equal(uintNPTnsj0, BigInt("0"))
		await expect(ANRXTokendEyzTf.transfer.call(addressG62ZGJr, uintKNcek5H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintmDLFR1 = BigInt("912")
		const stringklkyAPw = "2eAxo4mIOfrWHuh9LCqq6QhnFemOmzmZhhmwVt7PrsEaQSr4Ke38l3D7OrSywk8NoDCXNEw4jbuXxR5vy"
		const stringW40KWnV = "us"
		const uintVioegV = BigInt("1239")
		const ANRXTokendEyzTf = await ANRXToken.new(uintmDLFR1, stringklkyAPw, stringW40KWnV, uintVioegV, {from: accounts[0]});
		const addressiQNwMCF = accounts[1]
		const addressLo36DJg = accounts[4]
		const uintuq5N2OG = BigInt("1528")
		const uintMKRA4Ds = BigInt("526")
		const uintgXKFdZB = BigInt("532")
		const addressFiqS6x = accounts[0]
		const addressUwyU1Q1 = accounts[3]
		const uintYnarrun = await ANRXTokendEyzTf.allowance.call(addressLo36DJg, addressiQNwMCF, {from: accounts[3]});
		const uintk8eIJ99 = await ANRXTokendEyzTf.setParams.call(uintMKRA4Ds, uintuq5N2OG, {from: accounts[0]});
		const boolSjCNJf = await ANRXTokendEyzTf.transferFrom.call(addressUwyU1Q1, addressFiqS6x, uintgXKFdZB, {from: accounts[2]});

		assert.equal(uintYnarrun, BigInt("0"))
		await expect(ANRXTokendEyzTf.setParams.call(uintMKRA4Ds, uintuq5N2OG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})