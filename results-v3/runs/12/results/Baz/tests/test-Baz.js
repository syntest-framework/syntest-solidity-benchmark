const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const Bazozq8Iso = await Baz.new({from: accounts[4]});
		const intrLrB8U5 = BigInt("340")
		const intZ9wmAlt = BigInt("-1173")
		const intjClRlJR = BigInt("1907")
		const intUzPuHFk = BigInt("-457")
		const intpmT1OAm = BigInt("1468")
		const intq9dLwdn = BigInt("-608")
		const intg7xpOZh = BigInt("-589")
		const intZonGc9P = BigInt("-1340")
		const intE6EV0uV = BigInt("-1751")
		const intCDxoScQ = BigInt("-35")
		const intXMevror = BigInt("-226")
		const intCWCt4c = BigInt("893")
		const int256CzLGgF = await Bazozq8Iso.baz.call(intjClRlJR, intZ9wmAlt, intrLrB8U5, {from: accounts[3]});
		const int256L2kwJdw = await Bazozq8Iso.baz.call(intq9dLwdn, intpmT1OAm, intUzPuHFk, {from: accounts[2]});
		const int256sGBbrDk = await Bazozq8Iso.baz.call(intE6EV0uV, intZonGc9P, intg7xpOZh, {from: accounts[2]});
		const int256GMgAMRH = await Bazozq8Iso.baz.call(intCWCt4c, intXMevror, intCDxoScQ, {from: accounts[1]});

		assert.equal(int256CzLGgF, BigInt("1"))
		assert.equal(int256GMgAMRH, BigInt("1"))
		assert.equal(int256L2kwJdw, BigInt("4"))
		assert.equal(int256sGBbrDk, BigInt("1"))
	});

	it('test for Baz', async () => {
		const Baz1BzHdr = await Baz.new({from: accounts[0]});
		const intP2s7vZc = BigInt("-306")
		const intubftrze = BigInt("-2022")
		const intLomZJ6g = BigInt("1128")
		const intwexo6QK = BigInt("1705")
		const intCiwoAQT = BigInt("-1161")
		const intF7CFV26 = BigInt("1817")
		const boolsjLiIqY = await Baz1BzHdr.echidna_all_states.call({from: accounts[2]});
		const boolVJeCFN7 = await Baz1BzHdr.echidna_all_states.call({from: accounts[4]});
		const int256w6CbCSL = await Baz1BzHdr.baz.call(intLomZJ6g, intubftrze, intP2s7vZc, {from: accounts[4]});
		const int256sCQfvIj = await Baz1BzHdr.baz.call(intF7CFV26, intCiwoAQT, intwexo6QK, {from: accounts[3]});
		const boolaKDwmu = await Baz1BzHdr.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVJeCFN7, true)
		assert.equal(boolaKDwmu, true)
		assert.equal(boolsjLiIqY, true)
		assert.equal(int256sCQfvIj, BigInt("5"))
		assert.equal(int256w6CbCSL, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazpcQFqcn = await Baz.new({from: accounts[0]});
		const int7Zbf2c = BigInt("1754")
		const intQxtUBT9 = BigInt("1524")
		const intIhe1Xy = BigInt("-1717")
		const intkrWyoqL = BigInt("-377")
		const intMfkDYlb = BigInt("-1406")
		const intjqev4IV = BigInt("1753")
		const intbTvRJua = BigInt("-1033")
		const intPcyXsZd = BigInt("140")
		const intHMRIUqM = BigInt("1478")
		const intlIKeKJ = BigInt("-307")
		const inthwjQV6z = BigInt("-385")
		const intBcUUxKs = BigInt("-264")
		const boolcz4eicu = await BazpcQFqcn.echidna_all_states.call({from: accounts[1]});
		const int256GF2Oee = await BazpcQFqcn.baz.call(intIhe1Xy, intQxtUBT9, int7Zbf2c, {from: accounts[0]});
		const int256apNsVuV = await BazpcQFqcn.baz.call(intjqev4IV, intMfkDYlb, intkrWyoqL, {from: accounts[2]});
		const int256XNihj3F = await BazpcQFqcn.baz.call(intHMRIUqM, intPcyXsZd, intbTvRJua, {from: accounts[0]});
		const boolcrwb422 = await BazpcQFqcn.echidna_all_states.call({from: accounts[0]});
		const int256ESfJVcS = await BazpcQFqcn.baz.call(intBcUUxKs, inthwjQV6z, intlIKeKJ, {from: accounts[2]});

		assert.equal(boolcrwb422, true)
		assert.equal(boolcz4eicu, true)
		assert.equal(int256ESfJVcS, BigInt("1"))
		assert.equal(int256GF2Oee, BigInt("5"))
		assert.equal(int256XNihj3F, BigInt("3"))
		assert.equal(int256apNsVuV, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazrvS9q4P = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intGEAZg5X = BigInt("207")
		const intfCKOstw = BigInt("527")
		const intuLAfrDP = BigInt("1413")
		const intNUFSw9 = BigInt("-1632")
		const intRPaGuJP = BigInt("1491")
		const intLfRxQX1 = BigInt("1786")
		const intpMhvh5N = BigInt("659")
		const intwpYDS0U = BigInt("-403")
		const intzOn9RsL = BigInt("-1283")
		const booludgia8i = await BazrvS9q4P.echidna_all_states.call({from: accounts[5]});
		const int256E7P9CJT = await BazrvS9q4P.baz.call(intuLAfrDP, intfCKOstw, intGEAZg5X, {from: accounts[3]});
		const int256RbeERnV = await BazrvS9q4P.baz.call(intLfRxQX1, intRPaGuJP, intNUFSw9, {from: accounts[1]});
		const boolyrbtwMV = await BazrvS9q4P.echidna_all_states.call({from: accounts[5]});
		const int256vd6Ljg = await BazrvS9q4P.baz.call(intzOn9RsL, intwpYDS0U, intpMhvh5N, {from: accounts[3]});
	});
})