const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2n6DD9p1 = await BTCParamV2.new({from: accounts[3]});
		const uintydHjYkV = BigInt("255")
		await BTCParamV2n6DD9p1.onlyOwner.call({from: accounts[0]});
		await BTCParamV2n6DD9p1.onlyOwner.call({from: accounts[2]});
		const uint256yORN4N = await BTCParamV2n6DD9p1.setBtcBlockReward.call(uintydHjYkV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BTCParamV2n6DD9p1.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2N9FTTIC = await BTCParamV2.new({from: accounts[1]});
		const uintaJYcrJo = BigInt("1063")
		const uintcb5E3g4 = BigInt("922")
		const addressDKcArgi = accounts[0]
		const uint256adbRie4 = await BTCParamV2N9FTTIC.setBtcBlockReward.call(uintaJYcrJo, {from: accounts[0]});
		const uint256UarzcID = await BTCParamV2N9FTTIC.setBtcNetDiff.call(uintcb5E3g4, {from: accounts[0]});
		const addresscvYi6zh = await BTCParamV2N9FTTIC.transferOwnership.call(addressDKcArgi, {from: accounts[4]});

		await expect(BTCParamV2N9FTTIC.setBtcBlockReward.call(uintaJYcrJo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2AtevxZd = await BTCParamV2.new({from: accounts[1]});
		const uinttzaDAR6 = BigInt("735")
		const uintQKbACOU = BigInt("1967")
		const addressO8RFfRZ = accounts[3]
		const uintVvjwUOr = BigInt("940")
		const uint256kqrXjKK = await BTCParamV2AtevxZd.btcPrice.call({from: accounts[0]});
		const uint2565SmqGG = await BTCParamV2AtevxZd.setBtcTxFeeRewardRate.call(uinttzaDAR6, {from: accounts[3]});
		const uint256fNfKLKc = await BTCParamV2AtevxZd.setBtcTxFeeRewardRate.call(uintQKbACOU, {from: accounts[2]});
		const boolQG4m81N = await BTCParamV2AtevxZd.removeListener.call(addressO8RFfRZ, {from: accounts[4]});
		const uint256PmoBdDp = await BTCParamV2AtevxZd.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintVvjwUOr, {from: accounts[4]});

		assert.equal(uint256kqrXjKK, BigInt("0"))
		await expect(BTCParamV2AtevxZd.setBtcTxFeeRewardRate.call(uinttzaDAR6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2GZTwXPB = await BTCParamV2.new({from: accounts[2]});
		const address6ZXjoh = accounts[1]
		const uintgcuGvoN = BigInt("425")
		const boolvFoymHX = false
		const addressW3g1n1X = accounts[3]
		const uintEylKUZ = BigInt("1256")
		const uintu1v9gJE = BigInt("977")
		const addressFD3XkV2 = accounts[4]
		const addressIPeQfx9 = accounts[3]
		const uintmAEjQAm = BigInt("983")
		const addressAcEC6Jk = await BTCParamV2GZTwXPB.setParamSetter.call(address6ZXjoh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256o9piXTX = await BTCParamV2GZTwXPB.setBtcBlockReward.call(uintgcuGvoN, {from: "0x0000000000000000000000000000000000000001"});
		const addressbz4RRti = await BTCParamV2GZTwXPB.initialize.call(addressIPeQfx9, addressFD3XkV2, uintu1v9gJE, uintEylKUZ, addressW3g1n1X, boolvFoymHX, {from: accounts[2]});
		const uint256qg9ahpM = await BTCParamV2GZTwXPB.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintmAEjQAm, {from: accounts[1]});

		await expect(BTCParamV2GZTwXPB.setParamSetter.call(address6ZXjoh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2ILXWR8 = await BTCParamV2.new({from: accounts[3]});
		const addressvimi0Mg = accounts[0]
		const uint256IHo9hGF = await BTCParamV2ILXWR8.btcIncomePerTPerSecInWei.call({from: accounts[3]});
		const uint256ei991QD = await BTCParamV2ILXWR8.btcPrice.call({from: accounts[1]});
		const addressKLONvJ1 = await BTCParamV2ILXWR8.setParamSetter.call(addressvimi0Mg, {from: accounts[2]});
		const uint256rLKnOL0 = await BTCParamV2ILXWR8.btcPrice.call({from: accounts[3]});

		await expect(BTCParamV2ILXWR8.btcIncomePerTPerSecInWei.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2iC548OS = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressLj6REAW = accounts[2]
		const uintm4IiIU1 = BigInt("2033")
		const addressCLxdAC3 = accounts[3]
		const boolPNNDzYL = await BTCParamV2iC548OS.removeListener.call(addressLj6REAW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NxQmy69 = await BTCParamV2iC548OS.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintm4IiIU1, {from: accounts[5]});
		const boollShHsrl = await BTCParamV2iC548OS.removeListener.call(addressCLxdAC3, {from: accounts[3]});
		await BTCParamV2iC548OS.onlyOwner.call({from: accounts[5]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2enkHK73 = await BTCParamV2.new({from: accounts[2]});
		const boolk2mFBy = false
		const addressrv2NhJN = accounts[1]
		const uintklpGkhy = BigInt("1077")
		const uintxfIPaiO = BigInt("790")
		const addressb9Jbkga = accounts[3]
		const address19vYev = accounts[3]
		const addressFHNqqmu = accounts[1]
		const uintOSPHF7a = BigInt("782")
		const addressK8GKVtY = await BTCParamV2enkHK73.initialize.call(address19vYev, addressb9Jbkga, uintxfIPaiO, uintklpGkhy, addressrv2NhJN, boolk2mFBy, {from: accounts[1]});
		const addressrCBYiTV = await BTCParamV2enkHK73.addListener.call(addressFHNqqmu, {from: accounts[0]});
		const uint256ntfOL7 = await BTCParamV2enkHK73.setBtcBlockReward.call(uintOSPHF7a, {from: accounts[3]});
		await BTCParamV2enkHK73.onlyOwner.call({from: accounts[1]});

		await expect(BTCParamV2enkHK73.initialize.call(address19vYev, addressb9Jbkga, uintxfIPaiO, uintklpGkhy, addressrv2NhJN, boolk2mFBy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})