const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintvB5qEL7 = BigInt("1644")
		const stringJdv23o9 = "18jy260JQOnuWat7ixzhF6jCtRCRNDKK4of8cAzU1KLunA1H7KZcMDZhOuUidO3k3dsVF72Juenc4qXsGGoNask3N"
		const stringCRGe9X4 = "Nil1YNXEMUyWjNWOH3VSDuCpFXis3XbsN621c3UWKUU6yxNWJndmL55"
		const uintGCcy1Zk = BigInt("1907")
		const TetherTokenDrSZjYd = await TetherToken.new(uintvB5qEL7, stringJdv23o9, stringCRGe9X4, uintGCcy1Zk, {from: "0x0000000000000000000000000000000000000001"});
		const addresslElbmdl = accounts[4]
		const addressuivGnHq = accounts[3]
		const addressCEdZ5oA = accounts[2]
		const addressQZCFQjQ = accounts[5]
		const uintTApiDqa = BigInt("974")
		const addressunnkQ6m = accounts[3]
		const uintXkfVpyd = await TetherTokenDrSZjYd.allowance.call(addressuivGnHq, addresslElbmdl, {from: accounts[0]});
		const uintQS3Hye = await TetherTokenDrSZjYd.balanceOf.call(addressCEdZ5oA, {from: accounts[2]});
		const uintfhS1VKE = await TetherTokenDrSZjYd.balanceOf.call(addressQZCFQjQ, {from: accounts[2]});
		const address14FTV2 = await TetherTokenDrSZjYd.approve.call(addressunnkQ6m, uintTApiDqa, {from: accounts[2]});
	});

	it('test for TetherToken', async () => {
		const uintqKl1dmw = BigInt("409")
		const stringZr2pEl6 = "tJ4g79fuGmfCI3SFUhlzoTpKFdXHF5SQfy0cGdZosjDcsJFBJo4"
		const stringUxC7Z6Z = "q4tTeANymetc7x5PLc1CQt2y"
		const uintPPehW9I = BigInt("1283")
		const TetherTokenSFqu8zy = await TetherToken.new(uintqKl1dmw, stringZr2pEl6, stringUxC7Z6Z, uintPPehW9I, {from: accounts[4]});
		const addressfw7VZ3r = accounts[1]
		const uintUaAv3OS = await TetherTokenSFqu8zy.balanceOf.call(addressfw7VZ3r, {from: accounts[2]});
		const uintfEVxNbj = await TetherTokenSFqu8zy.totalSupply.call({from: accounts[1]});
		const uintlExZCEI = await TetherTokenSFqu8zy.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintUaAv3OS, BigInt("0"))
		assert.equal(uintfEVxNbj, BigInt("409"))
		assert.equal(uintlExZCEI, BigInt("409"))
	});

	it('test for TetherToken', async () => {
		const uintL3Mo7AF = BigInt("1405")
		const stringhpzODtw = "RqqlUD4Du2C67mzRwdzOlnLQozJzX1KAdFA1wGJI2Zh9O"
		const stringGdOlS7T = "v2uQIWxrisNy6ygGTGcE3id6dY8g6vtuFm6Un84NE4FCLO5LZfYDsQzaS2UbiQTBihqOR7p"
		const uintJJb7g4K = BigInt("165")
		const TetherTokendUTYLHm = await TetherToken.new(uintL3Mo7AF, stringhpzODtw, stringGdOlS7T, uintJJb7g4K, {from: accounts[3]});
		const uintzL97PfW = BigInt("332")
		const addressUgfhHFF = accounts[0]
		const addresszYERRTd = accounts[0]
		const addressYf3MDVd = accounts[2]
		const uintxn0Et7i = BigInt("668")
		const uintDCvi9o2 = BigInt("1874")
		const addressSKWZjqn = await TetherTokendUTYLHm.approve.call(addressUgfhHFF, uintzL97PfW, {from: accounts[0]});
		const uintxSYS48E = await TetherTokendUTYLHm.totalSupply.call({from: accounts[2]});
		const uintqRjHzz0 = await TetherTokendUTYLHm.allowance.call(addressYf3MDVd, addresszYERRTd, {from: accounts[3]});
//		const uintXQa2C5D = await TetherTokendUTYLHm.setParams.call(uintDCvi9o2, uintxn0Et7i, {from: accounts[3]});

		assert.equal(uintqRjHzz0, BigInt("0"))
		assert.equal(uintxSYS48E, BigInt("1405"))
		await expect(TetherTokendUTYLHm.setParams.call(uintDCvi9o2, uintxn0Et7i, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintrFuUuaD = BigInt("686")
		const stringBJFz4Qi = "h7lmkhntPyDROYvifhed9z3EBoiKXvXIQ1pdDzc46lSyFkFt8yxEwkWCpjmQd2zTMjgCTlogqbKoCu"
		const stringwxtywE5 = "pwmu6d185dzZiKhydO64RSSDqY3rGbjW"
		const uintA7Oiugk = BigInt("1907")
		const TetherTokengFrEBx = await TetherToken.new(uintrFuUuaD, stringBJFz4Qi, stringwxtywE5, uintA7Oiugk, {from: accounts[1]});
		const addressoBFoKrX = accounts[2]
		const uintT5C3NH3 = BigInt("770")
		const uintmry70j = BigInt("1972")
		const addressdcOmgi7 = accounts[0]
		const uintM6hLwzg = BigInt("1999")
		const uintx5g0bGS = await TetherTokengFrEBx.balanceOf.call(addressoBFoKrX, {from: accounts[4]});
//		const uintfGwJuRj = await TetherTokengFrEBx.issue.call(uintT5C3NH3, {from: accounts[2]});
//		const addressU9zhJcD = await TetherTokengFrEBx.transfer.call(addressdcOmgi7, uintmry70j, {from: accounts[1]});
//		const uintgr8Lo56 = await TetherTokengFrEBx.redeem.call(uintM6hLwzg, {from: accounts[5]});

		assert.equal(uintx5g0bGS, BigInt("0"))
		await expect(TetherTokengFrEBx.issue.call(uintT5C3NH3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintK4oHtNo = BigInt("450")
		const stringfFnugrQ = "hRJmLUgWNukJ8T1aQpSTCs8OPpO6IGAXZXEVHQMmAZWvwbLbiNMKWw"
		const stringeV2nfd = "7WmQ5Ps17Oi7Eexax0uOoA4lMU1Z86kalVTIaUtGTqaLhR1NxNfx3tFcDWk"
		const uintvCsyXXt = BigInt("712")
		const TetherTokenbNEIvzc = await TetherToken.new(uintK4oHtNo, stringfFnugrQ, stringeV2nfd, uintvCsyXXt, {from: accounts[1]});
		const addressTY9mpgn = accounts[2]
		const addressNFFD8OO = accounts[0]
		const addressnbSvI0 = accounts[1]
		const uintK1otjpH = BigInt("1383")
		const addressPOqTZj7 = accounts[0]
		const addressNDPc11l = accounts[2]
		const addressd2znGyu = accounts[0]
		const uint6EfRgU = BigInt("99")
		const addressSnADS2n = accounts[0]
		const addressnckGyd = accounts[0]
		const uintpYNnKb9 = await TetherTokenbNEIvzc.allowance.call(addressNFFD8OO, addressTY9mpgn, {from: accounts[1]});
		const uintgEpkEgS = await TetherTokenbNEIvzc.balanceOf.call(addressnbSvI0, {from: accounts[0]});
//		const addressi4xvctB = await TetherTokenbNEIvzc.transferFrom.call(addressNDPc11l, addressPOqTZj7, uintK1otjpH, {from: accounts[0]});
//		const addressOPLHLtc = await TetherTokenbNEIvzc.deprecate.call(addressd2znGyu, {from: accounts[2]});
//		const addressgHDnF6N = await TetherTokenbNEIvzc.transferFrom.call(addressnckGyd, addressSnADS2n, uint6EfRgU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintgEpkEgS, BigInt("450"))
		assert.equal(uintpYNnKb9, BigInt("0"))
		await expect(TetherTokenbNEIvzc.transferFrom.call(addressNDPc11l, addressPOqTZj7, uintK1otjpH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintihr9AVI = BigInt("1437")
		const stringnpBYET = "9jFSrIDfxuxPMJmS4Ar7S"
		const stringnJz9Wp5 = "exemAHQ"
		const uintz7IlG2B = BigInt("1313")
		const TetherToken9w1nX2 = await TetherToken.new(uintihr9AVI, stringnpBYET, stringnJz9Wp5, uintz7IlG2B, {from: accounts[0]});
		const addressciRU4Jf = accounts[2]
		const addressgAtrlmE = accounts[1]
		const uintIG9yhvS = BigInt("1113")
		const uintJnN2lY9 = BigInt("46")
		const addressA5Jlr0d = accounts[1]
		const addressC4ENRBq = accounts[1]
		const addressRYMuAz = accounts[2]
		const addressY3xnfSo = accounts[3]
		const addressPfmDt5n = accounts[4]
		const uintvkjp8Wf = await TetherToken9w1nX2.allowance.call(addressgAtrlmE, addressciRU4Jf, {from: accounts[0]});
//		const uintEfWQan = await TetherToken9w1nX2.redeem.call(uintIG9yhvS, {from: accounts[4]});
//		const addressZalWSmn = await TetherToken9w1nX2.transferFrom.call(addressC4ENRBq, addressA5Jlr0d, uintJnN2lY9, {from: accounts[5]});
//		const addressJd736f = await TetherToken9w1nX2.deprecate.call(addressRYMuAz, {from: accounts[5]});
//		const uintqYskZ2A = await TetherToken9w1nX2.allowance.call(addressPfmDt5n, addressY3xnfSo, {from: accounts[2]});

		assert.equal(uintvkjp8Wf, BigInt("0"))
		await expect(TetherToken9w1nX2.redeem.call(uintIG9yhvS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintC7vLepr = BigInt("1412")
		const stringmimGejw = "gSHIIekpeibSuidwaQ69HYniHxTJOljAbhnFC8JBWdIa47VtRzs3N1UpNVXv"
		const stringDIEofmC = "6D4hbF7kp91f1OlXlKYtv8RNLI1mo58lpqaFtOkA"
		const uintqLLtMNV = BigInt("718")
		const TetherTokenUYuMSDd = await TetherToken.new(uintC7vLepr, stringmimGejw, stringDIEofmC, uintqLLtMNV, {from: accounts[4]});
		const address6e7YLe = accounts[1]
		const uintYOVzZN6 = BigInt("406")
		const addressIQx2sl = accounts[4]
		const uintyOW83w = BigInt("746")
		const addresskmxY1Bs = accounts[3]
		const addressfmTqUS2 = accounts[4]
		const uintqjHpp3n = await TetherTokenUYuMSDd.balanceOf.call(address6e7YLe, {from: accounts[4]});
//		const addressxDRWm5c = await TetherTokenUYuMSDd.transfer.call(addressIQx2sl, uintYOVzZN6, {from: accounts[0]});
//		const addressvFJX9Hu = await TetherTokenUYuMSDd.transferFrom.call(addressfmTqUS2, addresskmxY1Bs, uintyOW83w, {from: accounts[5]});

		assert.equal(uintqjHpp3n, BigInt("0"))
		await expect(TetherTokenUYuMSDd.transfer.call(addressIQx2sl, uintYOVzZN6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintQcPo2Nx = BigInt("450")
		const stringfFnugrQ = "hRJmLUgWNukJ8T1aQpSTCs8OPpO6IGAXZXEVHQMmAZWvwbLbiNMKWw"
		const stringeV2nfd = "7WmQ5Ps17Oi7Eexax0uOoA4lMU1Z86kalVTIaUtGTqaLhR1NxNfx3tFcDWk"
		const uintlE5rqtg = BigInt("712")
		const TetherTokenbNEIvzc = await TetherToken.new(uintQcPo2Nx, stringfFnugrQ, stringeV2nfd, uintlE5rqtg, {from: accounts[1]});
		const addressqUlr7D = accounts[2]
		const addressTnyHdxL = accounts[0]
		const addressn7uxlPi = accounts[1]
		const addresshSEvdje = accounts[0]
		const uintuG8v7zS = BigInt("99")
		const addressl24hlwk = accounts[0]
		const addressSo4Ste4 = accounts[0]
		const uintpYNnKb9 = await TetherTokenbNEIvzc.allowance.call(addressTnyHdxL, addressqUlr7D, {from: accounts[1]});
		const uintgEpkEgS = await TetherTokenbNEIvzc.balanceOf.call(addressn7uxlPi, {from: accounts[0]});
//		const addressOPLHLtc = await TetherTokenbNEIvzc.deprecate.call(addresshSEvdje, {from: accounts[2]});
//		const addressgHDnF6N = await TetherTokenbNEIvzc.transferFrom.call(addressSo4Ste4, addressl24hlwk, uintuG8v7zS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintgEpkEgS, BigInt("450"))
		assert.equal(uintpYNnKb9, BigInt("0"))
		await expect(TetherTokenbNEIvzc.deprecate.call(addresshSEvdje, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintwG4NN7x = BigInt("1412")
		const stringmimGejw = "gSHIIekpeibSuidwaQ69HYniHxTJOljAbhnFC8JBWdIa47VtRzs3N1UpNVXv"
		const stringDIEofmC = "6D4hbF7kp91f1OlXlKYtv8RNLI1mo58lpqaFtOkA"
		const uintyjq3tOd = BigInt("718")
		const TetherTokenUYuMSDd = await TetherToken.new(uintwG4NN7x, stringmimGejw, stringDIEofmC, uintyjq3tOd, {from: accounts[4]});
		const uintsYhszPA = BigInt("2003")
		const uintFxJlVbY = BigInt("406")
		const addressQCnQiKv = accounts[4]
		const uintC0hwQOV = BigInt("746")
		const addressZNSRwW = accounts[3]
		const addressaoC8niG = accounts[4]
//		const uintJ81RTVr = await TetherTokenUYuMSDd.redeem.call(uintsYhszPA, {from: accounts[4]});
//		const addressxDRWm5c = await TetherTokenUYuMSDd.transfer.call(addressQCnQiKv, uintFxJlVbY, {from: accounts[0]});
//		const addressvFJX9Hu = await TetherTokenUYuMSDd.transferFrom.call(addressaoC8niG, addressZNSRwW, uintC0hwQOV, {from: accounts[5]});

		await expect(TetherTokenUYuMSDd.redeem.call(uintsYhszPA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintDwjpbYb = BigInt("450")
		const stringfFnugrQ = "hRJmLUgWNukJ8T1aQpSTCs8OPpO6IGAXZXEVHQMmAZWvwbLbiNMKWw"
		const stringeV2nfd = "7WmQ5Ps17Oi7Eexax0uOoA4lMU1Z86kalVTIaUtGTqaLhR1NxNfx3tFcDWk"
		const uintvDlG7Yv = BigInt("712")
		const TetherTokenbNEIvzc = await TetherToken.new(uintDwjpbYb, stringfFnugrQ, stringeV2nfd, uintvDlG7Yv, {from: accounts[1]});
		const addresswrLNNCC = accounts[2]
		const addressmb1dIwK = accounts[0]
		const addressiqkh0FZ = accounts[2]
		const addressefDYd5g = accounts[4]
		const addressRTbtfzM = accounts[0]
		const uintWaUEiCb = BigInt("1394")
		const uintP3FjtUh = BigInt("99")
		const addressxzj9OKr = accounts[0]
		const addressaQ5LhmP = accounts[0]
		const uintpYNnKb9 = await TetherTokenbNEIvzc.allowance.call(addressmb1dIwK, addresswrLNNCC, {from: accounts[1]});
		const uintgEpkEgS = await TetherTokenbNEIvzc.balanceOf.call(addressiqkh0FZ, {from: accounts[0]});
		const addressCMnSeP = await TetherTokenbNEIvzc.deprecate.call(addressefDYd5g, {from: accounts[1]});
//		const addressOPLHLtc = await TetherTokenbNEIvzc.deprecate.call(addressRTbtfzM, {from: accounts[2]});
//		const uintdmjow8s = await TetherTokenbNEIvzc.issue.call(uintWaUEiCb, {from: accounts[0]});
//		const addressgHDnF6N = await TetherTokenbNEIvzc.transferFrom.call(addressaQ5LhmP, addressxzj9OKr, uintP3FjtUh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintgEpkEgS, BigInt("0"))
		assert.equal(uintpYNnKb9, BigInt("0"))
		await expect(TetherTokenbNEIvzc.deprecate.call(addressRTbtfzM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintamx6yEv = BigInt("1412")
		const stringmimGejw = "gSHIIekpeibSuidwaQ69HYniHxTJOljAbhnFC8JBWdIa47VtRzs3N1UpNVXv"
		const stringDIEofmC = "6D4hbF7kp91f1OlXlKYtv8RNLI1mo58lpqaFtOkA"
		const uintjLz7WE4 = BigInt("718")
		const TetherTokenUYuMSDd = await TetherToken.new(uintamx6yEv, stringmimGejw, stringDIEofmC, uintjLz7WE4, {from: accounts[4]});
		const uintqdrlTs = BigInt("471")
		const addressdcIBKsF = accounts[1]
		const uintWIUOYjc = BigInt("746")
		const addressi7DDzB5 = accounts[3]
		const addressAtwtmIV = accounts[4]
		const uinttaLhm9t = BigInt("1522")
		const uintMdSuxI4 = await TetherTokenUYuMSDd.redeem.call(uintqdrlTs, {from: accounts[4]});
		const uintqjHpp3n = await TetherTokenUYuMSDd.balanceOf.call(addressdcIBKsF, {from: accounts[4]});
//		const addressvFJX9Hu = await TetherTokenUYuMSDd.transferFrom.call(addressAtwtmIV, addressi7DDzB5, uintWIUOYjc, {from: accounts[5]});
//		const uintNX1G3Di = await TetherTokenUYuMSDd.issue.call(uinttaLhm9t, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintqjHpp3n, BigInt("0"))
		await expect(TetherTokenUYuMSDd.transferFrom.call(addressAtwtmIV, addressi7DDzB5, uintWIUOYjc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintFRsdGQK = BigInt("1059")
		const stringeAksed = "eP2j86zz9IoTlnRidB25X6oqnVSdpRbppqz5xdzJBLXEx7ancFO4uCzgGzK8ObqvHdl9gCJ8Krg"
		const stringmnUTJyi = "yq2N9Ni6ulNfQwm62pFQu87MH7bcQixDBVIN5BvhvGmViHITYpCn6E8ifO"
		const uintBpuN0Uz = BigInt("895")
		const TetherTokenbWZut7Y = await TetherToken.new(uintFRsdGQK, stringeAksed, stringmnUTJyi, uintBpuN0Uz, {from: accounts[1]});
		const uintARDMSJP = BigInt("561")
		const addresseb8Yo60 = accounts[3]
		const addressgiR5FGo = accounts[3]
		const uintmDYvwCf = await TetherTokenbWZut7Y.issue.call(uintARDMSJP, {from: accounts[1]});
		const uintGlb4pQf = await TetherTokenbWZut7Y.allowance.call(addressgiR5FGo, addresseb8Yo60, {from: accounts[4]});
		const uintKP6zesD = await TetherTokenbWZut7Y.totalSupply.call({from: accounts[3]});

		assert.equal(uintGlb4pQf, BigInt("0"))
		assert.equal(uintKP6zesD, BigInt("1059"))
	});
})