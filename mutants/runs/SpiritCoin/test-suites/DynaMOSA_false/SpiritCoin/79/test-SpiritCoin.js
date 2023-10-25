const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressAqpsjvv = "0x0000000000000000000000000000000000000001"
		const addressxK99d25 = accounts[0]
		const SpiritCoinyKX9DAz = await SpiritCoin.new(addressAqpsjvv, addressxK99d25, {from: accounts[2]});
		const uintAVl6zQh = BigInt("1425")
		const addressPDOh7G4 = accounts[4]
		const uintWKOnpH5 = BigInt("1271")
		const addressTGsM5K3 = accounts[4]
		const addresss1C6CkX = accounts[4]
		const addressn6kaC7 = await SpiritCoinyKX9DAz.mint.call(addressPDOh7G4, uintAVl6zQh, {from: accounts[1]});
		const boolBpUqfI3 = await SpiritCoinyKX9DAz.transferFrom.call(addresss1C6CkX, addressTGsM5K3, uintWKOnpH5, {from: accounts[2]});

		await expect(SpiritCoinyKX9DAz.mint.call(addressPDOh7G4, uintAVl6zQh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressfO7zkUI = accounts[3]
		const addressMS38Key = accounts[1]
		const SpiritCoinPrBXOAM = await SpiritCoin.new(addressfO7zkUI, addressMS38Key, {from: accounts[1]});
		const addressg6oDN6o = accounts[3]
		const addresssL1oSPh = accounts[2]
		const addressJvNA8f8 = accounts[1]
		const addresshaxPBtK = accounts[3]
		const uintcoyNsPH = BigInt("595")
		const addressZevbhG8 = accounts[4]
		const addressNThSZNs = accounts[4]
		const addressVq9yXHp = accounts[4]
		const addressnhTMTOa = accounts[2]
		const uintTdNEtr = BigInt("1769")
		const addressTcdlrbU = accounts[5]
		const addressfvH3Tvt = accounts[4]
		const uintLvcCZ3 = await SpiritCoinPrBXOAM.allowance.call(addresssL1oSPh, addressg6oDN6o, {from: accounts[5]});
		const uintHSiZfcW = await SpiritCoinPrBXOAM.allowance.call(addresshaxPBtK, addressJvNA8f8, {from: accounts[4]});
		const boolSEh0e65 = await SpiritCoinPrBXOAM.transferFrom.call(addressNThSZNs, addressZevbhG8, uintcoyNsPH, {from: accounts[0]});
		const uintToQJMwG = await SpiritCoinPrBXOAM.allowance.call(addressnhTMTOa, addressVq9yXHp, {from: accounts[0]});
		const boolv6OQ3LY = await SpiritCoinPrBXOAM.transferFrom.call(addressfvH3Tvt, addressTcdlrbU, uintTdNEtr, {from: accounts[1]});

		assert.equal(uintHSiZfcW, BigInt("0"))
		assert.equal(uintLvcCZ3, BigInt("0"))
		await expect(SpiritCoinPrBXOAM.transferFrom.call(addressNThSZNs, addressZevbhG8, uintcoyNsPH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressKMXUPgV = accounts[4]
		const addressGEEGP6g = accounts[1]
		const SpiritCoinD6SbROy = await SpiritCoin.new(addressKMXUPgV, addressGEEGP6g, {from: accounts[5]});
		const addressLfnxUWd = accounts[3]
		const uintt3CuN7l = BigInt("1119")
		const addressOhw0p8T = accounts[2]
		const addressPy2pM57 = accounts[2]
		const addressGtkWsfu = await SpiritCoinD6SbROy.setMinter.call(addressLfnxUWd, {from: accounts[1]});
		const addressMbokGZ = await SpiritCoinD6SbROy.mint.call(addressOhw0p8T, uintt3CuN7l, {from: accounts[1]});
		const uintbRdhpeB = await SpiritCoinD6SbROy.balanceOf.call(addressPy2pM57, {from: accounts[4]});

		assert.equal(uintbRdhpeB, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressrdhgUIT = accounts[2]
		const addressWTX50oE = accounts[4]
		const SpiritCoinLMshtdD = await SpiritCoin.new(addressrdhgUIT, addressWTX50oE, {from: accounts[3]});
		const uintZBN17MC = BigInt("1006")
		const addressIhxsaC3 = accounts[3]
		const uintu6rD0d = BigInt("1414")
		const addresslHFdupj = accounts[4]
		const uintPyfsER7 = BigInt("489")
		const addressPMGdysk = accounts[0]
		const addressEqNK1Yi = accounts[0]
		const uintxETnA3M = BigInt("631")
		const addressT4eYESQ = accounts[1]
		const addressvJuRVHo = accounts[4]
		const addressYEKKmva = accounts[4]
		const boolgBK7Ggc = await SpiritCoinLMshtdD.transfer.call(addressIhxsaC3, uintZBN17MC, {from: "0x0000000000000000000000000000000000000001"});
		const booliXwAxCv = await SpiritCoinLMshtdD.transfer.call(addresslHFdupj, uintu6rD0d, {from: accounts[3]});
		const boolOh1O4Y = await SpiritCoinLMshtdD.transferFrom.call(addressEqNK1Yi, addressPMGdysk, uintPyfsER7, {from: accounts[1]});
		const booly68AQwH = await SpiritCoinLMshtdD.transferFrom.call(addressvJuRVHo, addressT4eYESQ, uintxETnA3M, {from: accounts[5]});
		const uintCsP8zbV = await SpiritCoinLMshtdD.balanceOf.call(addressYEKKmva, {from: accounts[0]});

		await expect(SpiritCoinLMshtdD.transfer.call(addressIhxsaC3, uintZBN17MC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressqrpXvEr = accounts[2]
		const addressSsKfaW6 = accounts[3]
		const SpiritCoinkiJBGag = await SpiritCoin.new(addressqrpXvEr, addressSsKfaW6, {from: accounts[2]});
		const addressjSwH0d = "0x0000000000000000000000000000000000000001"
		const addressFlJWlGG = accounts[3]
		const addresscz0DsyE = accounts[5]
		const uintOWk6AQm = BigInt("1694")
		const addressZkZ9NiX = "0x0000000000000000000000000000000000000001"
		const uintmuoCTE = await SpiritCoinkiJBGag.allowance.call(addressFlJWlGG, addressjSwH0d, {from: accounts[1]});
		const uintDXbutu = await SpiritCoinkiJBGag.balanceOf.call(addresscz0DsyE, {from: accounts[5]});
		const boolQdEvlhf = await SpiritCoinkiJBGag.approve.call(addressZkZ9NiX, uintOWk6AQm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolQdEvlhf, true)
		assert.equal(uintDXbutu, BigInt("0"))
		assert.equal(uintmuoCTE, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressUnSODBZ = accounts[0]
		const addressclHA7V1 = accounts[0]
		const SpiritCoinT7i9nyX = await SpiritCoin.new(addressUnSODBZ, addressclHA7V1, {from: accounts[0]});
		const addressgYIdxhY = accounts[1]
		const addressv7AWIqz = accounts[3]
		const addressrP5ziUq = accounts[4]
		const addresspDTXcZu = accounts[0]
		const uintLxlBiYH = BigInt("1409")
		const addressUpnp1Dj = accounts[2]
		const uintnO71uN5 = await SpiritCoinT7i9nyX.allowance.call(addressv7AWIqz, addressgYIdxhY, {from: accounts[0]});
		const addressF2QCpVx = await SpiritCoinT7i9nyX.setMinter.call(addressrP5ziUq, {from: accounts[5]});
		const addressX74JXIk = await SpiritCoinT7i9nyX.setMinter.call(addresspDTXcZu, {from: accounts[2]});
		const boolNfVmGjJ = await SpiritCoinT7i9nyX.transfer.call(addressUpnp1Dj, uintLxlBiYH, {from: accounts[4]});

		assert.equal(uintnO71uN5, BigInt("0"))
		await expect(SpiritCoinT7i9nyX.setMinter.call(addressrP5ziUq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressUQBHP97 = accounts[2]
		const addressgiUDQGz = accounts[1]
		const SpiritCoinQNDJfsN = await SpiritCoin.new(addressUQBHP97, addressgiUDQGz, {from: "0x0000000000000000000000000000000000000001"});
		const addressUPydS1 = accounts[3]
		const addresskIysuVp = accounts[3]
		const addresszPlRBkT = accounts[4]
		const uintJ6XfE96 = await SpiritCoinQNDJfsN.allowance.call(addresskIysuVp, addressUPydS1, {from: accounts[2]});
		const addressBUhLlbM = await SpiritCoinQNDJfsN.setMinter.call(addresszPlRBkT, {from: accounts[1]});
	});

	it('test for SpiritCoin', async () => {
		const addressF3NEuz = accounts[2]
		const address8m3M1n = accounts[0]
		const SpiritCoinKRtkiox = await SpiritCoin.new(addressF3NEuz, address8m3M1n, {from: accounts[5]});
		const uintw8CzhO0 = BigInt("13")
		const addressjzdkGrz = accounts[4]
		const uint1oTBaS = BigInt("599")
		const addressH6OtGWL = accounts[5]
		const uintEk6GMDC = BigInt("924")
		const addressjmXguQV = "0x0000000000000000000000000000000000000000"
		const addressYyihhN = accounts[0]
		const addressHMPks6M = accounts[0]
		const addressYwQeTx3 = accounts[4]
		const uintU6wjZ4Q = BigInt("1545")
		const addressKkcRZLl = accounts[4]
		const addressqZGwCpX = accounts[5]
		const addressBVIKgqN = accounts[0]
		const uintaLQuwyB = BigInt("90")
		const addressMnif4vd = accounts[5]
		const addresscvKh4yF = accounts[2]
		const boolr1cvSXF = await SpiritCoinKRtkiox.approve.call(addressjzdkGrz, uintw8CzhO0, {from: accounts[0]});
		const addressz3xWLMy = await SpiritCoinKRtkiox.mint.call(addressH6OtGWL, uint1oTBaS, {from: accounts[0]});
		const boolWyQlmsz = await SpiritCoinKRtkiox.transfer.call(addressjmXguQV, uintEk6GMDC, {from: accounts[2]});
		const uintTM15qXu = await SpiritCoinKRtkiox.allowance.call(addressHMPks6M, addressYyihhN, {from: accounts[3]});
		const uinta5NtHZi = await SpiritCoinKRtkiox.balanceOf.call(addressYwQeTx3, {from: "0x0000000000000000000000000000000000000001"});
		const booldRhNDjV = await SpiritCoinKRtkiox.approve.call(addressKkcRZLl, uintU6wjZ4Q, {from: accounts[3]});
		const uintp5ZHN6m = await SpiritCoinKRtkiox.allowance.call(addressBVIKgqN, addressqZGwCpX, {from: accounts[3]});
		const boolJ5MmGx = await SpiritCoinKRtkiox.approve.call(addressMnif4vd, uintaLQuwyB, {from: "0x0000000000000000000000000000000000000001"});
		const uintpGlwEQ2 = await SpiritCoinKRtkiox.balanceOf.call(addresscvKh4yF, {from: accounts[4]});

		assert.equal(boolr1cvSXF, true)
		await expect(SpiritCoinKRtkiox.transfer.call(addressjmXguQV, uintEk6GMDC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})