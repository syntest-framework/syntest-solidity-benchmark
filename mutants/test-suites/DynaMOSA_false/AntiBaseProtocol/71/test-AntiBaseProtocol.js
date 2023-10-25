const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPK8Aija = await AntiBaseProtocol.new({from: accounts[2]});
		const uintuYusXMR = BigInt("1032")
		const uint5YMpXJ = BigInt("1313")
		const uintgHNEbia = BigInt("1575")
		const addresssvQZjiy = accounts[2]
		const uintmzQ4RGK = BigInt("1057")
		const addresseyyVJr5 = accounts[4]
		const uint256psM4acJ = await AntiBaseProtocolPK8Aija.findBurnFee.call(uintuYusXMR, {from: accounts[1]});
//		await AntiBaseProtocolPK8Aija.renounceOwnership.call({from: accounts[2]});
//		await AntiBaseProtocolPK8Aija.onlyOwner.call({from: accounts[1]});
//		const uint256EjOo3d3 = await AntiBaseProtocolPK8Aija.burn.call(uint5YMpXJ, {from: accounts[0]});
//		const addressyw1M7De = await AntiBaseProtocolPK8Aija.burnFrom.call(addresssvQZjiy, uintgHNEbia, {from: accounts[2]});
//		const boolP684Grr = await AntiBaseProtocolPK8Aija.decreaseAllowance.call(addresseyyVJr5, uintmzQ4RGK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256psM4acJ, BigInt("165"))
		await expect(AntiBaseProtocolPK8Aija.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const stringQAIBFya = "d9Gwahc3H9X1u7JVrOYW5zXL8Q3kK9ZK8c9UloUkbrQtl5295OqiAyr49kuwXO5BE87ubMAaxmOvHJDlLiRKwaAU"
		const stringpWGnkH = "tVyBX8mrzSNx2FOKoDbmI"
		const uintlidGaGz = BigInt("104")
		const AntiBaseProtocolUtSV9lT = await AntiBaseProtocol.new(stringQAIBFya, stringpWGnkH, uintlidGaGz, {from: accounts[0]});
		const uintXKw66k2 = BigInt("1310")
		const addressJ389tRg = "0x0000000000000000000000000000000000000001"
		const uintnTQwSgW = BigInt("1738")
		const addresswurKmAe = accounts[2]
		const uintTVm90j1 = BigInt("1049")
		const boolo9wyzD7 = await AntiBaseProtocolUtSV9lT.approve.call(addressJ389tRg, uintXKw66k2, {from: accounts[0]});
		const bool2KsqOi = await AntiBaseProtocolUtSV9lT.decreaseAllowance.call(addresswurKmAe, uintnTQwSgW, {from: accounts[1]});
		const uint256H5DaG9 = await AntiBaseProtocolUtSV9lT.findRewardFee.call(uintTVm90j1, {from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolksHNrXK = await AntiBaseProtocol.new({from: accounts[0]});
		const uinta5t8M9l = BigInt("1906")
		const uintk8okLdX = BigInt("772")
		const uintsJmGrJ1 = BigInt("1896")
		const addressoaBqswe = accounts[1]
		const uint256PUt41aW = await AntiBaseProtocolksHNrXK.findRewardFee.call(uinta5t8M9l, {from: accounts[3]});
		const uint256VTk3paS = await AntiBaseProtocolksHNrXK.findBurnFee.call(uintk8okLdX, {from: accounts[2]});
//		await AntiBaseProtocolksHNrXK.onlyOwner.call({from: accounts[2]});
//		const addressKdFQbiN = await AntiBaseProtocolksHNrXK._burnFrom.call(addressoaBqswe, uintsJmGrJ1, {from: accounts[4]});

		assert.equal(uint256PUt41aW, BigInt("100"))
		assert.equal(uint256VTk3paS, BigInt("120"))
		await expect(AntiBaseProtocolksHNrXK.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolck44oFl = await AntiBaseProtocol.new({from: accounts[1]});
		const uintIEqZr0 = BigInt("65")
		const addressYukP3AP = accounts[1]
		const uintb2YYFBP = BigInt("854")
		const stringJovb1kE = await AntiBaseProtocolck44oFl.symbol.call({from: accounts[2]});
		const uint8xMXI3mr = await AntiBaseProtocolck44oFl.decimals.call({from: accounts[1]});
//		const addressCVTt6e = await AntiBaseProtocolck44oFl._burn.call(addressYukP3AP, uintIEqZr0, {from: accounts[5]});
//		const uint256F3lhYcb = await AntiBaseProtocolck44oFl.findRewardFee.call(uintb2YYFBP, {from: accounts[3]});
//		await AntiBaseProtocolck44oFl.requestGas.call({from: accounts[2]});
//		await AntiBaseProtocolck44oFl.onlyOwner.call({from: accounts[2]});

		assert.equal(stringJovb1kE, "ABASE")
		assert.equal(uint8xMXI3mr, BigInt("18"))
		await expect(AntiBaseProtocolck44oFl._burn.call(addressYukP3AP, uintIEqZr0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolANw657D = await AntiBaseProtocol.new({from: accounts[3]});
		const uintBbhzsRN = BigInt("218")
		const addressozGxwLe = accounts[3]
		const uintDvynB61 = BigInt("1366")
		const addressRppSVtB = accounts[2]
		const uintMxzHMvk = BigInt("1305")
		const uintfHOpav0 = BigInt("270")
		const addressEKvqFJk = accounts[3]
//		const booljXTKV0J = await AntiBaseProtocolANw657D.transfer.call(addressozGxwLe, uintBbhzsRN, {from: accounts[2]});
//		const boolcxqiJ0X = await AntiBaseProtocolANw657D.increaseAllowance.call(addressRppSVtB, uintDvynB61, {from: accounts[1]});
//		await AntiBaseProtocolANw657D.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256e53eKf = await AntiBaseProtocolANw657D.burn.call(uintMxzHMvk, {from: accounts[1]});
//		const boolAnf71J7 = await AntiBaseProtocolANw657D.transfer.call(addressEKvqFJk, uintfHOpav0, {from: accounts[4]});

		await expect(AntiBaseProtocolANw657D.transfer.call(addressozGxwLe, uintBbhzsRN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmJ6uB6j = await AntiBaseProtocol.new({from: accounts[0]});
		const uintzz9Uux = BigInt("1614")
		const addressSZWu4BR = accounts[4]
		const uintNymweyH = BigInt("1444")
		const addressBy2FCv = accounts[0]
		const booli1DVkM5 = await AntiBaseProtocolmJ6uB6j.approve.call(addressSZWu4BR, uintzz9Uux, {from: accounts[1]});
//		const address9PyRmd = await AntiBaseProtocolmJ6uB6j._mint.call(addressBy2FCv, uintNymweyH, {from: accounts[3]});
//		const boolcwnSRV9 = await AntiBaseProtocolmJ6uB6j.isOwner.call({from: accounts[3]});
//		const uint256fA9dT3 = await AntiBaseProtocolmJ6uB6j.totalSupply.call({from: accounts[2]});

		assert.equal(booli1DVkM5, true)
		await expect(AntiBaseProtocolmJ6uB6j._mint.call(addressBy2FCv, uintNymweyH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolksHNrXK = await AntiBaseProtocol.new({from: accounts[0]});
		const uintq4BJrgt = BigInt("1906")
		const addressbLjjPc = accounts[0]
		const addressVuS7zf6 = accounts[4]
		const uintrTovCQ7 = BigInt("772")
		const uintdKFvwBp = BigInt("473")
		const addressP7J4lbq = accounts[0]
		const uintVa2S5PC = BigInt("262")
		const uintBZROSsY = BigInt("899")
		const addressn3ubrTT = "0x0000000000000000000000000000000000000001"
		const uintlpTLTaT = BigInt("1896")
		const addresshQ80a5A = accounts[2]
		const uint256PUt41aW = await AntiBaseProtocolksHNrXK.findRewardFee.call(uintq4BJrgt, {from: accounts[3]});
		const uint256y6TLhzL = await AntiBaseProtocolksHNrXK.allowance.call(addressVuS7zf6, addressbLjjPc, {from: accounts[3]});
		const uint256VTk3paS = await AntiBaseProtocolksHNrXK.findBurnFee.call(uintrTovCQ7, {from: accounts[2]});
		const boolTrC3t5A = await AntiBaseProtocolksHNrXK.approve.call(addressP7J4lbq, uintdKFvwBp, {from: accounts[4]});
		const uint256drQuCf1 = await AntiBaseProtocolksHNrXK.findRewardFee.call(uintVa2S5PC, {from: accounts[1]});
//		await AntiBaseProtocolksHNrXK.onlyOwner.call({from: accounts[2]});
//		const addressPgBBBnP = await AntiBaseProtocolksHNrXK._mint.call(addressn3ubrTT, uintBZROSsY, {from: accounts[4]});
//		const addressKdFQbiN = await AntiBaseProtocolksHNrXK._burnFrom.call(addresshQ80a5A, uintlpTLTaT, {from: accounts[4]});

		assert.equal(boolTrC3t5A, true)
		assert.equal(uint256PUt41aW, BigInt("100"))
		assert.equal(uint256VTk3paS, BigInt("120"))
		assert.equal(uint256drQuCf1, BigInt("15"))
		assert.equal(uint256y6TLhzL, BigInt("0"))
		await expect(AntiBaseProtocolksHNrXK.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolksHNrXK = await AntiBaseProtocol.new({from: accounts[0]});
		const uintSMLa3T2 = BigInt("1906")
		const uintdwVROvY = BigInt("772")
		const uintzgn9XUZ = BigInt("262")
		const uintXUXEcP4 = BigInt("1896")
		const addressy8pyaDr = accounts[2]
		const stringqv2tDqV = await AntiBaseProtocolksHNrXK.name.call({from: accounts[2]});
		const uint256PUt41aW = await AntiBaseProtocolksHNrXK.findRewardFee.call(uintSMLa3T2, {from: accounts[3]});
		const uint256VTk3paS = await AntiBaseProtocolksHNrXK.findBurnFee.call(uintdwVROvY, {from: accounts[2]});
		const uint256drQuCf1 = await AntiBaseProtocolksHNrXK.findRewardFee.call(uintzgn9XUZ, {from: accounts[1]});
//		await AntiBaseProtocolksHNrXK.onlyOwner.call({from: accounts[2]});
//		const addressKdFQbiN = await AntiBaseProtocolksHNrXK._burnFrom.call(addressy8pyaDr, uintXUXEcP4, {from: accounts[4]});

		assert.equal(stringqv2tDqV, "https://t.me/antibaseprotocol")
		assert.equal(uint256PUt41aW, BigInt("100"))
		assert.equal(uint256VTk3paS, BigInt("120"))
		assert.equal(uint256drQuCf1, BigInt("15"))
		await expect(AntiBaseProtocolksHNrXK.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolANw657D = await AntiBaseProtocol.new({from: accounts[3]});
		const uintBBxa2Ef = BigInt("1366")
		const addressGFQr3xb = accounts[2]
		const uintq2CRlJ = BigInt("270")
		const addresse60NxSt = accounts[4]
		const boolcxqiJ0X = await AntiBaseProtocolANw657D.increaseAllowance.call(addressGFQr3xb, uintBBxa2Ef, {from: accounts[1]});
//		const boolAnf71J7 = await AntiBaseProtocolANw657D.transfer.call(addresse60NxSt, uintq2CRlJ, {from: accounts[4]});

		assert.equal(boolcxqiJ0X, true)
		await expect(AntiBaseProtocolANw657D.transfer.call(addresse60NxSt, uintq2CRlJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolksHNrXK = await AntiBaseProtocol.new({from: accounts[0]});
		const uintzjPKTDO = BigInt("1906")
		const uintDvrwhbe = BigInt("455")
		const addressGxxYsB = accounts[4]
		const addressx4lTOvq = accounts[0]
		const addressBmqWNIo = accounts[4]
		const uinty4Mlhti = BigInt("777")
		const uintlj8LxON = BigInt("473")
		const addressMuqRgMU = accounts[0]
		const uintsR1XjXj = BigInt("262")
		const uintkQiL4P1 = BigInt("899")
		const addressbSbYQu = "0x0000000000000000000000000000000000000001"
		const uintT6FkU3S = BigInt("1702")
		const addressbHx3B3g = accounts[4]
		const uintzYJm9SQ = BigInt("1896")
		const addressfQk5c6N = accounts[2]
		const uint256PUt41aW = await AntiBaseProtocolksHNrXK.findRewardFee.call(uintzjPKTDO, {from: accounts[3]});
//		const addressQ50R0a = await AntiBaseProtocolksHNrXK.burnFrom.call(addressGxxYsB, uintDvrwhbe, {from: accounts[4]});
//		const uint256y6TLhzL = await AntiBaseProtocolksHNrXK.allowance.call(addressBmqWNIo, addressx4lTOvq, {from: accounts[3]});
//		const uint256VTk3paS = await AntiBaseProtocolksHNrXK.findBurnFee.call(uinty4Mlhti, {from: accounts[2]});
//		const boolTrC3t5A = await AntiBaseProtocolksHNrXK.approve.call(addressMuqRgMU, uintlj8LxON, {from: accounts[4]});
//		const uint256drQuCf1 = await AntiBaseProtocolksHNrXK.findRewardFee.call(uintsR1XjXj, {from: accounts[1]});
//		await AntiBaseProtocolksHNrXK.onlyOwner.call({from: accounts[2]});
//		const uint256Fn2Wg9L = await AntiBaseProtocolksHNrXK.totalSupply.call({from: accounts[1]});
//		const addressPgBBBnP = await AntiBaseProtocolksHNrXK._mint.call(addressbSbYQu, uintkQiL4P1, {from: accounts[4]});
//		const boolPBMvkC = await AntiBaseProtocolksHNrXK.decreaseAllowance.call(addressbHx3B3g, uintT6FkU3S, {from: accounts[3]});
//		const addressKdFQbiN = await AntiBaseProtocolksHNrXK._burnFrom.call(addressfQk5c6N, uintzYJm9SQ, {from: accounts[4]});

		assert.equal(uint256PUt41aW, BigInt("100"))
		await expect(AntiBaseProtocolksHNrXK.burnFrom.call(addressGxxYsB, uintDvrwhbe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolksHNrXK = await AntiBaseProtocol.new({from: accounts[0]});
		const uintZ7Qi6pJ = BigInt("1906")
		const uintDNTri3 = BigInt("24")
		const addressh4wKCpE = accounts[1]
		const addressCWixFjp = "0x0000000000000000000000000000000000000001"
		const uintVT1QUPl = BigInt("275")
		const uintO2xP7qn = BigInt("899")
		const addressOSQScK = "0x0000000000000000000000000000000000000001"
		const uintLLA9ERn = BigInt("1896")
		const addressu7xWz4X = accounts[2]
		const uint256PUt41aW = await AntiBaseProtocolksHNrXK.findRewardFee.call(uintZ7Qi6pJ, {from: accounts[3]});
//		const boolRAferC = await AntiBaseProtocolksHNrXK.transferFrom.call(addressCWixFjp, addressh4wKCpE, uintDNTri3, {from: accounts[5]});
//		const uint256drQuCf1 = await AntiBaseProtocolksHNrXK.findRewardFee.call(uintVT1QUPl, {from: accounts[1]});
//		await AntiBaseProtocolksHNrXK.requestGas.call({from: accounts[4]});
//		await AntiBaseProtocolksHNrXK.onlyOwner.call({from: accounts[2]});
//		const addressPgBBBnP = await AntiBaseProtocolksHNrXK._mint.call(addressOSQScK, uintO2xP7qn, {from: accounts[4]});
//		const addressKdFQbiN = await AntiBaseProtocolksHNrXK._burnFrom.call(addressu7xWz4X, uintLLA9ERn, {from: accounts[4]});

		assert.equal(uint256PUt41aW, BigInt("100"))
		await expect(AntiBaseProtocolksHNrXK.transferFrom.call(addressCWixFjp, addressh4wKCpE, uintDNTri3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolksHNrXK = await AntiBaseProtocol.new({from: accounts[0]});
		const uintzEpvDLZ = BigInt("1784")
		const uintj8cXx1g = BigInt("1906")
		const uintuBDiKI7 = BigInt("262")
		const uintI6qopgD = BigInt("899")
		const addressL9IkAxg = "0x0000000000000000000000000000000000000001"
		const uintLQCNu7y = BigInt("1905")
		const addressJyGf59l = accounts[2]
//		const uint256CTyxg9V = await AntiBaseProtocolksHNrXK.burn.call(uintzEpvDLZ, {from: accounts[3]});
//		const uint256DP7ogPC = await AntiBaseProtocolksHNrXK.totalSupply.call({from: accounts[4]});
//		const uint256PUt41aW = await AntiBaseProtocolksHNrXK.findRewardFee.call(uintj8cXx1g, {from: accounts[3]});
//		const uint256drQuCf1 = await AntiBaseProtocolksHNrXK.findRewardFee.call(uintuBDiKI7, {from: accounts[1]});
//		await AntiBaseProtocolksHNrXK.onlyOwner.call({from: accounts[2]});
//		const addressPgBBBnP = await AntiBaseProtocolksHNrXK._mint.call(addressL9IkAxg, uintI6qopgD, {from: accounts[4]});
//		const addressKdFQbiN = await AntiBaseProtocolksHNrXK._burnFrom.call(addressJyGf59l, uintLQCNu7y, {from: accounts[4]});

		await expect(AntiBaseProtocolksHNrXK.burn.call(uintzEpvDLZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolANw657D = await AntiBaseProtocol.new({from: accounts[3]});
		const uintmIFNi2D = BigInt("1258")
		const addressAoFSIgc = accounts[3]
		const uintxtZecPX = BigInt("218")
		const addressGLvtU0f = accounts[4]
		const uintRt2uWV = BigInt("270")
		const addresscqwZpCg = accounts[3]
//		const boolM73Nu41 = await AntiBaseProtocolANw657D.decreaseAllowance.call(addressAoFSIgc, uintmIFNi2D, {from: accounts[1]});
//		const booljXTKV0J = await AntiBaseProtocolANw657D.transfer.call(addressGLvtU0f, uintxtZecPX, {from: accounts[2]});
//		const boolAnf71J7 = await AntiBaseProtocolANw657D.transfer.call(addresscqwZpCg, uintRt2uWV, {from: accounts[4]});

		await expect(AntiBaseProtocolANw657D.decreaseAllowance.call(addressAoFSIgc, uintmIFNi2D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolksHNrXK = await AntiBaseProtocol.new({from: accounts[0]});
		const uintwpuqYH = BigInt("1913")
		const uintmgJ6SO4 = BigInt("262")
		const addresspLdjGcd = accounts[2]
		const uint9ew6Bj = BigInt("899")
		const addressrSoy7zz = "0x0000000000000000000000000000000000000001"
		const uintiuNHf1Z = BigInt("682")
		const uint256PUt41aW = await AntiBaseProtocolksHNrXK.findRewardFee.call(uintwpuqYH, {from: accounts[3]});
		const uint256drQuCf1 = await AntiBaseProtocolksHNrXK.findRewardFee.call(uintmgJ6SO4, {from: accounts[1]});
		const addresskGdnAO = await AntiBaseProtocolksHNrXK.transferOwnership.call(addresspLdjGcd, {from: accounts[0]});
//		await AntiBaseProtocolksHNrXK.renounceOwnership.call({from: accounts[2]});
//		const addressPgBBBnP = await AntiBaseProtocolksHNrXK._mint.call(addressrSoy7zz, uint9ew6Bj, {from: accounts[4]});
//		const uint256Lyeq8vk = await AntiBaseProtocolksHNrXK.findBurnFee.call(uintiuNHf1Z, {from: accounts[5]});
//		const boolnYM45F7 = await AntiBaseProtocolksHNrXK.isOwner.call({from: accounts[4]});

		assert.equal(uint256PUt41aW, BigInt("100"))
		assert.equal(uint256drQuCf1, BigInt("15"))
		await expect(AntiBaseProtocolksHNrXK.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolVKk1oi = await AntiBaseProtocol.new({from: accounts[1]});
		const uintEhWR9fl = BigInt("477")
		const uint256qFxzHan = await AntiBaseProtocolVKk1oi.totalSupply.call({from: accounts[0]});
		const uint256jAv7uGO = await AntiBaseProtocolVKk1oi.findBurnFee.call(uintEhWR9fl, {from: accounts[2]});

		assert.equal(uint256jAv7uGO, BigInt("75"))
		assert.equal(uint256qFxzHan, BigInt("31250000000000000000"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolANw657D = await AntiBaseProtocol.new({from: accounts[3]});
		const uintPWiwgGx = BigInt("1372")
		const addressSraJcOE = accounts[2]
		const uintHmdBzoe = BigInt("175")
		const uinty2kxGbI = BigInt("1640")
		const uint3v0Ok4 = BigInt("1043")
		const addressiA3bu7k = "0x0000000000000000000000000000000000000001"
		const uintKxlxlb5 = BigInt("1353")
		const uintzVKzBwU = BigInt("1271")
		const uintCPE1DAt = BigInt("270")
		const addressta2exvT = accounts[3]
		const uint256oAvjnD = await AntiBaseProtocolANw657D.findRewardFee.call(uintPWiwgGx, {from: accounts[0]});
		const uint256udAWxyT = await AntiBaseProtocolANw657D.balanceOf.call(addressSraJcOE, {from: accounts[4]});
		const uint256ALo13RB = await AntiBaseProtocolANw657D.findRewardFee.call(uintHmdBzoe, {from: accounts[1]});
		const uint256IFYq72i = await AntiBaseProtocolANw657D.findBurnFee.call(uinty2kxGbI, {from: accounts[4]});
//		const boolyw91jzu = await AntiBaseProtocolANw657D.decreaseAllowance.call(addressiA3bu7k, uint3v0Ok4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBJ0O2cp = await AntiBaseProtocolANw657D.isOwner.call({from: accounts[2]});
//		await AntiBaseProtocolANw657D.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolJrixSdF = await AntiBaseProtocolANw657D.isOwner.call({from: accounts[1]});
//		const uint256ZyvPXmQ = await AntiBaseProtocolANw657D.findBurnFee.call(uintKxlxlb5, {from: accounts[1]});
//		const uint256e53eKf = await AntiBaseProtocolANw657D.burn.call(uintzVKzBwU, {from: accounts[1]});
//		const stringsSnlWbN = await AntiBaseProtocolANw657D.name.call({from: accounts[2]});
//		const boolAnf71J7 = await AntiBaseProtocolANw657D.transfer.call(addressta2exvT, uintCPE1DAt, {from: accounts[4]});

		assert.equal(uint256ALo13RB, BigInt("10"))
		assert.equal(uint256IFYq72i, BigInt("255"))
		assert.equal(uint256oAvjnD, BigInt("70"))
		assert.equal(uint256udAWxyT, BigInt("0"))
		await expect(AntiBaseProtocolANw657D.decreaseAllowance.call(addressiA3bu7k, uint3v0Ok4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolzP9hq69 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintGkioe8p = BigInt("722")
		const addresszJcSaOe = accounts[4]
		const uintamfUu54 = BigInt("822")
		const addressp78mlWw = "0x0000000000000000000000000000000000000001"
		const addressCspvcNp = await AntiBaseProtocolzP9hq69.owner.call({from: accounts[5]});
//		const boolE3iBGDe = await AntiBaseProtocolzP9hq69.transfer.call(addresszJcSaOe, uintGkioe8p, {from: accounts[1]});
//		const boold8XhwZh = await AntiBaseProtocolzP9hq69.decreaseAllowance.call(addressp78mlWw, uintamfUu54, {from: accounts[1]});

		assert.equal(addressCspvcNp, 0x0465D3CdFb6231a0B057a70d1939C0AfF4907071)
		await expect(AntiBaseProtocolzP9hq69.transfer.call(addresszJcSaOe, uintGkioe8p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolONrpAcg = await AntiBaseProtocol.new({from: accounts[5]});
		const uintkTgYNeC = BigInt("1920")
		const addresslCt0xGq = accounts[5]
		const boolct8TR1O = await AntiBaseProtocolONrpAcg.isOwner.call({from: accounts[1]});
//		const addressu3YWIdp = await AntiBaseProtocolONrpAcg.burnFrom.call(addresslCt0xGq, uintkTgYNeC, {from: accounts[0]});
//		await AntiBaseProtocolONrpAcg.requestGas.call({from: accounts[5]});

		assert.equal(boolct8TR1O, false)
		await expect(AntiBaseProtocolONrpAcg.burnFrom.call(addresslCt0xGq, uintkTgYNeC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolANw657D = await AntiBaseProtocol.new({from: accounts[3]});
		const uintLdUrhys = BigInt("1458")
		const uintijQioj = BigInt("175")
		const uintEtpNQda = BigInt("1227")
		const addressOXIF9MJ = accounts[3]
		const addressuLxbUhP = accounts[3]
		const uintre1mBv = BigInt("1640")
		const uintwCdXBQD = BigInt("218")
		const addressyT26QbE = accounts[3]
		const uintws8IJK0 = BigInt("25")
		const addressrjxBOpM = accounts[0]
		const address2xHzXR = accounts[2]
		const uintYJxcBsq = BigInt("270")
		const addressGar5YZo = accounts[4]
		const uint256oAvjnD = await AntiBaseProtocolANw657D.findRewardFee.call(uintLdUrhys, {from: accounts[0]});
		const uint256ALo13RB = await AntiBaseProtocolANw657D.findRewardFee.call(uintijQioj, {from: accounts[1]});
//		const boolCziWSNY = await AntiBaseProtocolANw657D.transferFrom.call(addressuLxbUhP, addressOXIF9MJ, uintEtpNQda, {from: accounts[3]});
//		const uint256IFYq72i = await AntiBaseProtocolANw657D.findBurnFee.call(uintre1mBv, {from: accounts[4]});
//		const booljXTKV0J = await AntiBaseProtocolANw657D.transfer.call(addressyT26QbE, uintwCdXBQD, {from: accounts[2]});
//		await AntiBaseProtocolANw657D.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressGEYrLN = await AntiBaseProtocolANw657D._approve.call(address2xHzXR, addressrjxBOpM, uintws8IJK0, {from: accounts[1]});
//		const boolAnf71J7 = await AntiBaseProtocolANw657D.transfer.call(addressGar5YZo, uintYJxcBsq, {from: accounts[4]});
//		const addressbau6Fix = await AntiBaseProtocolANw657D.owner.call({from: accounts[4]});

		assert.equal(uint256ALo13RB, BigInt("10"))
		assert.equal(uint256oAvjnD, BigInt("75"))
		await expect(AntiBaseProtocolANw657D.transferFrom.call(addressuLxbUhP, addressOXIF9MJ, uintEtpNQda, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolzyNrgDp = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintU6npdde = BigInt("1556")
		const addressBMs2QpU = accounts[1]
		const uintTzQCas0 = BigInt("1685")
		const addressnQMs8Gx = await AntiBaseProtocolzyNrgDp.burnFrom.call(addressBMs2QpU, uintU6npdde, {from: accounts[4]});
		const uint256GAE4GsS = await AntiBaseProtocolzyNrgDp.burn.call(uintTzQCas0, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolANw657D = await AntiBaseProtocol.new({from: accounts[3]});
		const uintKDkMaz = BigInt("1458")
		const uintcXESN4 = BigInt("1458")
		const addressLrfocAW = "0x0000000000000000000000000000000000000000"
		const uintkp532lR = BigInt("175")
		const uintwhfNerW = BigInt("71")
		const addresseuNkwp = accounts[3]
		const addressduPFftG = accounts[3]
		const uintFDlY0jV = BigInt("1640")
		const uintHeDgyZD = BigInt("218")
		const addressc4RpwC6 = accounts[3]
		const uintCelSQhI = BigInt("581")
		const addressrdrAESK = "0x0000000000000000000000000000000000000001"
		const addresswMYQw2q = accounts[4]
		const uintFFXtY88 = BigInt("261")
		const address3qRSYJ = accounts[4]
		const uint256oAvjnD = await AntiBaseProtocolANw657D.findRewardFee.call(uintKDkMaz, {from: accounts[0]});
//		const boolOKaBZ0z = await AntiBaseProtocolANw657D.approve.call(addressLrfocAW, uintcXESN4, {from: accounts[0]});
//		const uint256ALo13RB = await AntiBaseProtocolANw657D.findRewardFee.call(uintkp532lR, {from: accounts[1]});
//		const boolCziWSNY = await AntiBaseProtocolANw657D.transferFrom.call(addressduPFftG, addresseuNkwp, uintwhfNerW, {from: accounts[3]});
//		const uint256IFYq72i = await AntiBaseProtocolANw657D.findBurnFee.call(uintFDlY0jV, {from: accounts[4]});
//		const stringVHftUPd = await AntiBaseProtocolANw657D.name.call({from: accounts[4]});
//		await AntiBaseProtocolANw657D.onlyOwner.call({from: accounts[4]});
//		const booljXTKV0J = await AntiBaseProtocolANw657D.transfer.call(addressc4RpwC6, uintHeDgyZD, {from: accounts[2]});
//		await AntiBaseProtocolANw657D.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressUj2cAJu = await AntiBaseProtocolANw657D._approve.call(addresswMYQw2q, addressrdrAESK, uintCelSQhI, {from: accounts[4]});
//		const boolAnf71J7 = await AntiBaseProtocolANw657D.transfer.call(address3qRSYJ, uintFFXtY88, {from: accounts[4]});
//		const addressbau6Fix = await AntiBaseProtocolANw657D.owner.call({from: accounts[4]});

		assert.equal(uint256oAvjnD, BigInt("75"))
		await expect(AntiBaseProtocolANw657D.approve.call(addressLrfocAW, uintcXESN4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})