const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADCLnQoML = await ZAD.new({from: accounts[3]});
		const uintPyCEUc = BigInt("1204")
		const addressPyORFXE = accounts[2]
		const addressn871iV = accounts[3]
		const uintjeqCoDf = BigInt("943")
		const addressKM5hgkY = accounts[1]
		const addressTOXxHrt = accounts[0]
		const boolR8HxhiF = await ZADCLnQoML.transferFrom.call(addressn871iV, addressPyORFXE, uintPyCEUc, {from: accounts[5]});
		const boolUgu8Zpk = await ZADCLnQoML.transferFrom.call(addressTOXxHrt, addressKM5hgkY, uintjeqCoDf, {from: accounts[4]});
		const uint8HHKzkIx = await ZADCLnQoML.decimals.call({from: accounts[0]});

		await expect(ZADCLnQoML.transferFrom.call(addressn871iV, addressPyORFXE, uintPyCEUc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADyxi1dN5 = await ZAD.new({from: accounts[2]});
		const addressIZrFYAS = accounts[2]
		const uintVg8bXWz = BigInt("363")
		const addressK7xbiFm = accounts[2]
		const addresslcLNyC0 = accounts[0]
		const addressOqFvaEx = accounts[0]
		const uint256Is0rlkB = await ZADyxi1dN5.totalSupply.call({from: accounts[1]});
		const stringMVbSCL = await ZADyxi1dN5.name.call({from: accounts[1]});
		const uint256jRX1214 = await ZADyxi1dN5.balanceOf.call(addressIZrFYAS, {from: accounts[2]});
		const boolPZcreU = await ZADyxi1dN5.increaseAllowance.call(addressK7xbiFm, uintVg8bXWz, {from: accounts[2]});
		const uint2568sxbxs = await ZADyxi1dN5.allowance.call(addressOqFvaEx, addresslcLNyC0, {from: accounts[4]});
		const stringtJMww6C = await ZADyxi1dN5.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPZcreU, true)
		assert.equal(stringMVbSCL, "Zadkiel")
		assert.equal(stringtJMww6C, "Zadkiel")
		assert.equal(uint2568sxbxs, BigInt("0"))
		assert.equal(uint256Is0rlkB, BigInt("100000000000000000000000000"))
		assert.equal(uint256jRX1214, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADBsYLuMG = await ZAD.new({from: accounts[1]});
		const uintqkJ2N4 = BigInt("291")
		const addressgAvp7d = accounts[0]
		const uintHYcjQiO = BigInt("1265")
		const addressagxcCRl = accounts[0]
		const stringgAEt4M = await ZADBsYLuMG.symbol.call({from: accounts[5]});
		const uint8HY9Q07X = await ZADBsYLuMG.decimals.call({from: accounts[3]});
		const boolk4hbztA = await ZADBsYLuMG.approve.call(addressgAvp7d, uintqkJ2N4, {from: accounts[2]});
		const stringM8PNwww = await ZADBsYLuMG.symbol.call({from: accounts[4]});
		const uint8wCWllT7 = await ZADBsYLuMG.decimals.call({from: accounts[1]});
		const boolMQKfEZq = await ZADBsYLuMG.increaseAllowance.call(addressagxcCRl, uintHYcjQiO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMQKfEZq, true)
		assert.equal(boolk4hbztA, true)
		assert.equal(stringM8PNwww, "ZAD")
		assert.equal(stringgAEt4M, "ZAD")
		assert.equal(uint8HY9Q07X, BigInt("18"))
		assert.equal(uint8wCWllT7, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADa140bcJ = await ZAD.new({from: accounts[3]});
		const uintBo2XYUO = BigInt("986")
		const addresssIuhXa = accounts[2]
		const uintM25rra7 = BigInt("6")
		const uintuTHKzT = BigInt("271")
		const addressgT67UjU = accounts[4]
		const stringWQzCvER = await ZADa140bcJ.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolo4rKrp = await ZADa140bcJ.increaseAllowance.call(addresssIuhXa, uintBo2XYUO, {from: accounts[5]});
		const uint256Cmyobtd = await ZADa140bcJ._burn.call(uintM25rra7, {from: accounts[2]});
		const boolpMxUE3e = await ZADa140bcJ.decreaseAllowance.call(addressgT67UjU, uintuTHKzT, {from: accounts[2]});

		assert.equal(boolo4rKrp, true)
		assert.equal(stringWQzCvER, "ZAD")
		await expect(ZADa140bcJ._burn.call(uintM25rra7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADQ6n2RtQ = await ZAD.new({from: accounts[2]});
		const uintqSLS9Xh = BigInt("284")
		const addressVnJS2M = accounts[4]
		const uintt02Ur86 = BigInt("201")
		const addresstsR4vFE = accounts[1]
		const addressuHuqV29 = accounts[4]
		const uintlKjtH4 = BigInt("149")
		const addressi96vgKm = accounts[4]
		const uintSGP2wf = BigInt("679")
		const addressvrmOPHp = accounts[5]
		const boolY0FKuGK = await ZADQ6n2RtQ.transfer.call(addressVnJS2M, uintqSLS9Xh, {from: accounts[2]});
		const boolDAA8gbY = await ZADQ6n2RtQ.transferFrom.call(addressuHuqV29, addresstsR4vFE, uintt02Ur86, {from: accounts[4]});
		const boolBJM7btQ = await ZADQ6n2RtQ.decreaseAllowance.call(addressi96vgKm, uintlKjtH4, {from: accounts[3]});
		const booloMJ9saF = await ZADQ6n2RtQ.decreaseAllowance.call(addressvrmOPHp, uintSGP2wf, {from: "0x0000000000000000000000000000000000000001"});
		const stringv31CViA = await ZADQ6n2RtQ.symbol.call({from: accounts[4]});

		await expect(ZADQ6n2RtQ.transfer.call(addressVnJS2M, uintqSLS9Xh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADbM7tPly = await ZAD.new({from: accounts[4]});
		const uintYh61AoY = BigInt("441")
		const addresscjZ75NC = accounts[3]
		const uintz4XnRLv = BigInt("1118")
		const addressyiWWUnr = accounts[3]
		const addressPrFTp0y = accounts[4]
		const boolgeUwXT = await ZADbM7tPly.increaseAllowance.call(addresscjZ75NC, uintYh61AoY, {from: accounts[1]});
		const boolEF32yY2 = await ZADbM7tPly.decreaseAllowance.call(addressyiWWUnr, uintz4XnRLv, {from: accounts[1]});
		const uint256Y3an5Aq = await ZADbM7tPly.balanceOf.call(addressPrFTp0y, {from: accounts[3]});

		assert.equal(boolgeUwXT, true)
		await expect(ZADbM7tPly.decreaseAllowance.call(addressyiWWUnr, uintz4XnRLv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADa140bcJ = await ZAD.new({from: accounts[3]});
		const uintyerSC3l = BigInt("986")
		const addresslGy5Fuh = accounts[2]
		const uintf7OMf8H = BigInt("0")
		const uintK6GlYlk = BigInt("1443")
		const uintqHd4U9B = BigInt("271")
		const addressntSejjp = accounts[4]
		const stringWQzCvER = await ZADa140bcJ.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolo4rKrp = await ZADa140bcJ.increaseAllowance.call(addresslGy5Fuh, uintyerSC3l, {from: accounts[5]});
		const uint256Cmyobtd = await ZADa140bcJ._burn.call(uintf7OMf8H, {from: accounts[2]});
		const uint256uUrOiRU = await ZADa140bcJ._burn.call(uintK6GlYlk, {from: accounts[3]});
		const boolpMxUE3e = await ZADa140bcJ.decreaseAllowance.call(addressntSejjp, uintqHd4U9B, {from: accounts[2]});

		assert.equal(boolo4rKrp, true)
		assert.equal(stringWQzCvER, "ZAD")
		await expect(ZADa140bcJ._burn.call(uintK6GlYlk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADDWWm18Q = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsV8sbMo = BigInt("1787")
		const addressBBYIpZl = "0x0000000000000000000000000000000000000001"
		const uintUGN3lJD = BigInt("1292")
		const addressOpXMYDZ = accounts[3]
		const uintJH8ahs4 = BigInt("2030")
		const addressXRK6Sg2 = accounts[1]
		const uintTHN2VYp = BigInt("1378")
		const addressRgO7ofb = accounts[2]
		const addresst0mFgQx = accounts[3]
		const uintW88jm7d = BigInt("773")
		const boolHhLukK5 = await ZADDWWm18Q.approve.call(addressBBYIpZl, uintsV8sbMo, {from: accounts[1]});
		const uint2567OH4Hv = await ZADDWWm18Q.totalSupply.call({from: accounts[4]});
		const booljHcLHiU = await ZADDWWm18Q.increaseAllowance.call(addressOpXMYDZ, uintUGN3lJD, {from: accounts[5]});
		const boolWP7ncWx = await ZADDWWm18Q.transfer.call(addressXRK6Sg2, uintJH8ahs4, {from: accounts[1]});
		const boolrcaFFv = await ZADDWWm18Q.transferFrom.call(addresst0mFgQx, addressRgO7ofb, uintTHN2VYp, {from: accounts[4]});
		const uint256uASBlXY = await ZADDWWm18Q._burn.call(uintW88jm7d, {from: accounts[4]});
	});
})