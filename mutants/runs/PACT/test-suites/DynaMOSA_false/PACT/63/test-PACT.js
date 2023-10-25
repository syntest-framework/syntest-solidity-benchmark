const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTvBCjhDD = await PACT.new({from: accounts[1]});
		const addressbsq4Cv = accounts[3]
		const uintW7OTpEs = await PACTvBCjhDD.balanceOf.call(addressbsq4Cv, {from: accounts[2]});
		const stringYzzUTj6 = await PACTvBCjhDD.symbol.call({from: accounts[5]});
		const stringvltNQ2K = await PACTvBCjhDD.symbol.call({from: accounts[5]});
		const stringEgJBFqY = await PACTvBCjhDD.symbol.call({from: accounts[2]});

		assert.equal(stringEgJBFqY, "PACT")
		assert.equal(stringYzzUTj6, "PACT")
		assert.equal(stringvltNQ2K, "PACT")
		assert.equal(uintW7OTpEs, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTskyoOMR = await PACT.new({from: accounts[1]});
		const uintAilYYbc = BigInt("507")
		const addressihXg8VC = accounts[3]
		const addressrFsDbGQ = accounts[3]
		const addressUeXzPMl = "0x0000000000000000000000000000000000000001"
		const stringchCwRFB = await PACTskyoOMR.symbol.call({from: accounts[3]});
		const stringKnEUoFU = await PACTskyoOMR.name.call({from: accounts[0]});
		const boolrOlTVC = await PACTskyoOMR.transferFrom.call(addressrFsDbGQ, addressihXg8VC, uintAilYYbc, {from: accounts[2]});
		const boolSjPqDSw = await PACTskyoOMR.setupTeam.call(addressUeXzPMl, {from: accounts[5]});

		assert.equal(stringKnEUoFU, "P2PB2B community token")
		assert.equal(stringchCwRFB, "PACT")
		await expect(PACTskyoOMR.transferFrom.call(addressrFsDbGQ, addressihXg8VC, uintAilYYbc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTo5PXEXU = await PACT.new({from: accounts[3]});
		const addressOZygOr = accounts[5]
		const boolEIGq8Q = await PACTo5PXEXU.setupReserve.call(addressOZygOr, {from: accounts[1]});
		const uint8YlUnBtF = await PACTo5PXEXU.decimals.call({from: accounts[4]});
		const uint8enC7IBh = await PACTo5PXEXU.decimals.call({from: accounts[4]});

		await expect(PACTo5PXEXU.setupReserve.call(addressOZygOr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTVycOUjb = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKwmwgi9 = accounts[0]
		const addressYjFTcL1 = accounts[4]
		const stringerqnQX4 = await PACTVycOUjb.name.call({from: accounts[3]});
		const uint8cQKAfiM = await PACTVycOUjb.decimals.call({from: accounts[3]});
		const boolkRkdYso = await PACTVycOUjb.setupBasePool.call(addressKwmwgi9, {from: accounts[1]});
		const booleWteDru = await PACTVycOUjb.setupReserve.call(addressYjFTcL1, {from: accounts[3]});
		const stringxPM0mAI = await PACTVycOUjb.name.call({from: accounts[2]});
	});

	it('test for PACT', async () => {
		const PACTPJqnWIN = await PACT.new({from: accounts[3]});
		const uintCMtYCuC = BigInt("1340")
		const addressVrclj6o = accounts[2]
		const addressvY3nI35 = accounts[4]
		const uint8N3Omlgl = await PACTPJqnWIN.decimals.call({from: accounts[3]});
		const boolDtfi9X = await PACTPJqnWIN.transfer.call(addressVrclj6o, uintCMtYCuC, {from: "0x0000000000000000000000000000000000000001"});
		const boolMTdxSSM = await PACTPJqnWIN.setupReserve.call(addressvY3nI35, {from: accounts[0]});
		const stringBZM5Dzp = await PACTPJqnWIN.name.call({from: accounts[2]});

		assert.equal(uint8N3Omlgl, BigInt("18"))
		await expect(PACTPJqnWIN.transfer.call(addressVrclj6o, uintCMtYCuC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTc6On74b = await PACT.new({from: accounts[2]});
		const uinthYQpMq5 = await PACTc6On74b.totalSupply.call({from: accounts[2]});
		const stringhaZidp2 = await PACTc6On74b.name.call({from: accounts[4]});
		const uint8dOzjtJy = await PACTc6On74b.decimals.call({from: accounts[3]});
		const stringFdz90F4 = await PACTc6On74b.symbol.call({from: accounts[0]});

		assert.equal(stringFdz90F4, "PACT")
		assert.equal(stringhaZidp2, "P2PB2B community token")
		assert.equal(uint8dOzjtJy, BigInt("18"))
		assert.equal(uinthYQpMq5, BigInt("1000000000000000000000000000"))
	});

	it('test for PACT', async () => {
		const PACTvBCjhDD = await PACT.new({from: accounts[1]});
		const uintL3PyS7F = BigInt("1027")
		const addressNwpVx8h = accounts[4]
		const addresskMd8trH = accounts[3]
		const boolL0kt2Ks = await PACTvBCjhDD.approve.call(addressNwpVx8h, uintL3PyS7F, {from: accounts[5]});
		const uintW7OTpEs = await PACTvBCjhDD.balanceOf.call(addresskMd8trH, {from: accounts[2]});
		const stringYzzUTj6 = await PACTvBCjhDD.symbol.call({from: accounts[5]});
		const stringvltNQ2K = await PACTvBCjhDD.symbol.call({from: accounts[5]});
		const stringEgJBFqY = await PACTvBCjhDD.symbol.call({from: accounts[2]});

		assert.equal(boolL0kt2Ks, true)
		assert.equal(stringEgJBFqY, "PACT")
		assert.equal(stringYzzUTj6, "PACT")
		assert.equal(stringvltNQ2K, "PACT")
		assert.equal(uintW7OTpEs, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTo5PXEXU = await PACT.new({from: accounts[3]});
		const addressHs2Jscl = accounts[1]
		const addressH5KFAAS = accounts[5]
		const boolpczkt13 = await PACTo5PXEXU.setupTeam.call(addressHs2Jscl, {from: accounts[5]});
		const boolEIGq8Q = await PACTo5PXEXU.setupReserve.call(addressH5KFAAS, {from: accounts[1]});
		const uint8YlUnBtF = await PACTo5PXEXU.decimals.call({from: accounts[4]});
		const uintWcWGY7r = await PACTo5PXEXU.totalSupply.call({from: accounts[4]});
		const uint8enC7IBh = await PACTo5PXEXU.decimals.call({from: accounts[4]});

		await expect(PACTo5PXEXU.setupTeam.call(addressHs2Jscl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTPJqnWIN = await PACT.new({from: accounts[3]});
		const addressxTa617 = accounts[2]
		const uintbZcbUcg = BigInt("1340")
		const addressZMG7F1c = accounts[2]
		const addressRlSPhoP = "0x0000000000000000000000000000000000000001"
		const addressXXT6AeG = accounts[5]
		const uint8N3Omlgl = await PACTPJqnWIN.decimals.call({from: accounts[3]});
		const boolfT7OLrp = await PACTPJqnWIN.setupRewards.call(addressxTa617, {from: accounts[0]});
		const boolDtfi9X = await PACTPJqnWIN.transfer.call(addressZMG7F1c, uintbZcbUcg, {from: "0x0000000000000000000000000000000000000001"});
		const uintuyTW3sY = await PACTPJqnWIN.balanceOf.call(addressRlSPhoP, {from: accounts[2]});
		const boolMTdxSSM = await PACTPJqnWIN.setupReserve.call(addressXXT6AeG, {from: accounts[0]});
		const stringBZM5Dzp = await PACTPJqnWIN.name.call({from: accounts[2]});

		assert.equal(uint8N3Omlgl, BigInt("18"))
		await expect(PACTPJqnWIN.setupRewards.call(addressxTa617, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTV5gxue4 = await PACT.new({from: accounts[0]});
		const addressA1nlQrc = accounts[1]
		const uintSaaqXTV = BigInt("651")
		const addressj7L4LCs = accounts[5]
		const addressvuS1z81 = "0x0000000000000000000000000000000000000001"
		const uintLKL1ITr = BigInt("1448")
		const addressXSCHNs = accounts[5]
		const addressPLDc9KN = accounts[2]
		const uintFM2xvBU = await PACTV5gxue4.balanceOf.call(addressA1nlQrc, {from: accounts[3]});
		const boolVffNpxo = await PACTV5gxue4.burn.call(addressj7L4LCs, uintSaaqXTV, {from: accounts[3]});
		const boolmCnQZTf = await PACTV5gxue4.setupRewards.call(addressvuS1z81, {from: accounts[5]});
		const boollUitNPL = await PACTV5gxue4.approve.call(addressXSCHNs, uintLKL1ITr, {from: accounts[0]});
		const boolZWPFhaS = await PACTV5gxue4.setupReserve.call(addressPLDc9KN, {from: accounts[1]});

		assert.equal(uintFM2xvBU, BigInt("0"))
		await expect(PACTV5gxue4.burn.call(addressj7L4LCs, uintSaaqXTV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTvBCjhDD = await PACT.new({from: accounts[1]});
		const addressZ7uijL = accounts[4]
		const addressKBMbCHj = accounts[4]
		const uintW7OTpEs = await PACTvBCjhDD.balanceOf.call(addressZ7uijL, {from: accounts[2]});
		const boolXNql2X8 = await PACTvBCjhDD.setupBasePool.call(addressKBMbCHj, {from: accounts[0]});
		const stringYzzUTj6 = await PACTvBCjhDD.symbol.call({from: accounts[5]});
		const stringHoq0wbf = await PACTvBCjhDD.symbol.call({from: accounts[3]});
		const stringvltNQ2K = await PACTvBCjhDD.symbol.call({from: accounts[5]});
		const stringEgJBFqY = await PACTvBCjhDD.symbol.call({from: accounts[2]});

		assert.equal(uintW7OTpEs, BigInt("0"))
		await expect(PACTvBCjhDD.setupBasePool.call(addressKBMbCHj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTo5PXEXU = await PACT.new({from: accounts[3]});
		const addressVjtYaU = accounts[1]
		const address54E9Xr = accounts[3]
		const addressQjkw0rT = accounts[5]
		const uintBCFVJRt = await PACTo5PXEXU.allowance.call(address54E9Xr, addressVjtYaU, {from: accounts[2]});
		const boolEIGq8Q = await PACTo5PXEXU.setupReserve.call(addressQjkw0rT, {from: accounts[1]});
		const uint8enC7IBh = await PACTo5PXEXU.decimals.call({from: accounts[4]});

		assert.equal(uintBCFVJRt, BigInt("0"))
		await expect(PACTo5PXEXU.setupReserve.call(addressQjkw0rT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTzJHZrBZ = await PACT.new({from: accounts[2]});
		const addresslMTqZjP = accounts[1]
		const addressi3zOhAv = accounts[0]
		const addressggN32n7 = accounts[3]
		const uintVMPLJOC = BigInt("996")
		const addressfr7ALu7 = accounts[1]
		const addressjnammCl = accounts[5]
		const uintQf6FrJ9 = await PACTzJHZrBZ.balanceOf.call(addresslMTqZjP, {from: accounts[5]});
		const boolqMlsPg3 = await PACTzJHZrBZ.setupFarming.call(addressi3zOhAv, {from: accounts[3]});
		const boolSKLgGFY = await PACTzJHZrBZ.setupBasePool.call(addressggN32n7, {from: accounts[3]});
		const boolHdF5c6s = await PACTzJHZrBZ.transferFrom.call(addressjnammCl, addressfr7ALu7, uintVMPLJOC, {from: accounts[2]});

		assert.equal(uintQf6FrJ9, BigInt("0"))
		await expect(PACTzJHZrBZ.setupFarming.call(addressi3zOhAv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})