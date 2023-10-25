const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2wet0sMp = await BTCParamV2.new({from: accounts[5]});
		const addressqOqZOPp = accounts[3]
		const uintjRJleu = BigInt("1308")
		const addressOmxjNkg = await BTCParamV2wet0sMp.addListener.call(addressqOqZOPp, {from: accounts[3]});
		const uint256AUJahDT = await BTCParamV2wet0sMp.btcPrice.call({from: accounts[4]});
		const uint256WPW5v5L = await BTCParamV2wet0sMp.setBtcTxFeeRewardRate.call(uintjRJleu, {from: accounts[4]});

		await expect(BTCParamV2wet0sMp.addListener.call(addressqOqZOPp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2nSUOf7E = await BTCParamV2.new({from: accounts[1]});
		const boolLXcgTA9 = false
		const addressakZZp0 = accounts[3]
		const uintoyz34gn = BigInt("1582")
		const uintHfFmgCG = BigInt("1985")
		const addressJDcS70D = accounts[4]
		const addresskO2dBwp = accounts[3]
		const addressoVoZUko = accounts[0]
		await BTCParamV2nSUOf7E.onlyParamSetter.call({from: "0x0000000000000000000000000000000000000001"});
		const addressRcLrs5z = await BTCParamV2nSUOf7E.initialize.call(addresskO2dBwp, addressJDcS70D, uintHfFmgCG, uintoyz34gn, addressakZZp0, boolLXcgTA9, {from: accounts[3]});
		await BTCParamV2nSUOf7E.onlyOwner.call({from: accounts[5]});
		const uint256eivSxw8 = await BTCParamV2nSUOf7E.btcPrice.call({from: accounts[0]});
		const addressJIIi4j = await BTCParamV2nSUOf7E.setParamSetter.call(addressoVoZUko, {from: accounts[4]});

		await expect(BTCParamV2nSUOf7E.onlyParamSetter.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2bg6FrBJ = await BTCParamV2.new({from: accounts[2]});
		const addressm6enhrS = accounts[3]
		const uint256CHSn48q = await BTCParamV2bg6FrBJ.btcPrice.call({from: accounts[1]});
		const uint256FuofH2k = await BTCParamV2bg6FrBJ.btcIncomePerTPerSecInWei.call({from: accounts[5]});
		const addressq8TWVxN = await BTCParamV2bg6FrBJ.addListener.call(addressm6enhrS, {from: accounts[1]});

		assert.equal(uint256CHSn48q, BigInt("0"))
		await expect(BTCParamV2bg6FrBJ.btcIncomePerTPerSecInWei.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2cLyyMqo = await BTCParamV2.new({from: accounts[2]});
		const boolscJC2GI = false
		const addressOFO1E0 = "0x0000000000000000000000000000000000000001"
		const uintYz1WV4H = BigInt("378")
		const uintliLwJd = BigInt("539")
		const addressVlno1ZG = accounts[3]
		const addresshXCrSsM = accounts[0]
		const addressxUToK8r = await BTCParamV2cLyyMqo.initialize.call(addresshXCrSsM, addressVlno1ZG, uintliLwJd, uintYz1WV4H, addressOFO1E0, boolscJC2GI, {from: accounts[2]});
		await BTCParamV2cLyyMqo.updateBtcPrice.call({from: accounts[3]});

		await expect(BTCParamV2cLyyMqo.initialize.call(addresshXCrSsM, addressVlno1ZG, uintliLwJd, uintYz1WV4H, addressOFO1E0, boolscJC2GI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2BvOqxnz = await BTCParamV2.new({from: accounts[1]});
		const addresszzPORGf = accounts[1]
		const addressAamPz47 = accounts[4]
		const uintqLrwBSN = BigInt("225")
		const addressAPerwHG = await BTCParamV2BvOqxnz.setParamSetter.call(addresszzPORGf, {from: accounts[1]});
		const addressiDX7cMv = await BTCParamV2BvOqxnz.setParamSetter.call(addressAamPz47, {from: accounts[2]});
		const uint256lEypg56 = await BTCParamV2BvOqxnz.btcPrice.call({from: accounts[2]});
		const uint256bHdwOwW = await BTCParamV2BvOqxnz.setBtcNetDiff.call(uintqLrwBSN, {from: accounts[2]});

		await expect(BTCParamV2BvOqxnz.setParamSetter.call(addresszzPORGf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2lBHZuzo = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const booltxDu09U = false
		const addressSPZXR5t = accounts[1]
		const uintPEg1JZ = BigInt("1449")
		const uintxroGUyN = BigInt("1650")
		const addresswywaNQG = accounts[1]
		const addresswW1aLaA = accounts[2]
		const addressRC2pMMQ = accounts[4]
		await BTCParamV2lBHZuzo.updateBtcPrice.call({from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2lBHZuzo.onlyOwner.call({from: accounts[4]});
		const addressyOwvoIx = await BTCParamV2lBHZuzo.initialize.call(addresswW1aLaA, addresswywaNQG, uintxroGUyN, uintPEg1JZ, addressSPZXR5t, booltxDu09U, {from: accounts[3]});
		const uint256ZKW610K = await BTCParamV2lBHZuzo.btcIncomePerTPerSecInWei.call({from: accounts[4]});
		const addressHsNRXMH = await BTCParamV2lBHZuzo.setParamSetter.call(addressRC2pMMQ, {from: accounts[1]});
	});
})