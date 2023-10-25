const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2fVmocXO = await BTCParamV2.new({from: accounts[1]});
		const uintZSqwD1n = BigInt("1966")
		const addressBGU4EUU = accounts[4]
		const addressRVHwkFl = "0x0000000000000000000000000000000000000001"
		const addressh5IMLM = accounts[1]
		const uint256vDcMwa = await BTCParamV2fVmocXO.setBtcBlockReward.call(uintZSqwD1n, {from: accounts[1]});
		const addressjF93qhO = await BTCParamV2fVmocXO.transferOwnership.call(addressBGU4EUU, {from: accounts[3]});
		const addressuP6wnJe = await BTCParamV2fVmocXO.addListener.call(addressRVHwkFl, {from: accounts[0]});
		const addressHgm4MJr = await BTCParamV2fVmocXO.setParamSetter.call(addressh5IMLM, {from: accounts[5]});

		await expect(BTCParamV2fVmocXO.setBtcBlockReward.call(uintZSqwD1n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2k0TCFqW = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintXMWudLH = BigInt("567")
		const uintWdbOlWz = BigInt("1564")
		const uintYxStl8 = BigInt("1107")
		const uint256E1z1psA = await BTCParamV2k0TCFqW.setBtcTxFeeRewardRate.call(uintXMWudLH, {from: accounts[1]});
		const uint256QkqEHY6 = await BTCParamV2k0TCFqW.btcIncomePerTPerSecInWei.call({from: accounts[4]});
		const uint256BAcNQS7 = await BTCParamV2k0TCFqW.setBtcNetDiff.call(uintWdbOlWz, {from: accounts[5]});
		const uint256PmC60A4 = await BTCParamV2k0TCFqW.setBtcNetDiff.call(uintYxStl8, {from: accounts[3]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2KjGqzpN = await BTCParamV2.new({from: accounts[2]});
		const addressnR9ZbYt = accounts[5]
		const addressAxeCYgD = accounts[4]
		const addressvZPxWtQ = accounts[3]
		const uint256DU2egHX = await BTCParamV2KjGqzpN.btcPrice.call({from: "0x0000000000000000000000000000000000000001"});
		const addressZpgzvri = await BTCParamV2KjGqzpN.addListener.call(addressnR9ZbYt, {from: accounts[0]});
		const addresshYwgCW8 = await BTCParamV2KjGqzpN.setParamSetter.call(addressAxeCYgD, {from: accounts[5]});
		const addressaHz2Tpj = await BTCParamV2KjGqzpN.setParamSetter.call(addressvZPxWtQ, {from: accounts[1]});

		assert.equal(uint256DU2egHX, BigInt("0"))
		await expect(BTCParamV2KjGqzpN.addListener.call(addressnR9ZbYt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2O5FJHCG = await BTCParamV2.new({from: accounts[2]});
		const addressgJ2QBJ8 = "0x0000000000000000000000000000000000000001"
		await BTCParamV2O5FJHCG.onlyOwner.call({from: accounts[1]});
		const addresszbqplrA = await BTCParamV2O5FJHCG.addListener.call(addressgJ2QBJ8, {from: accounts[1]});
		await BTCParamV2O5FJHCG.onlyOwner.call({from: accounts[1]});

		await expect(BTCParamV2O5FJHCG.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2ofMQaF9 = await BTCParamV2.new({from: accounts[2]});
		const addressceqOGUS = accounts[1]
		const uintRygTe2g = BigInt("596")
		const addressVFkcRK8 = await BTCParamV2ofMQaF9.setParamSetter.call(addressceqOGUS, {from: accounts[1]});
		await BTCParamV2ofMQaF9.updateBtcPrice.call({from: accounts[4]});
		const uint256CbuzYrn = await BTCParamV2ofMQaF9.setBtcNetDiff.call(uintRygTe2g, {from: accounts[3]});

		await expect(BTCParamV2ofMQaF9.setParamSetter.call(addressceqOGUS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2F4rr8NH = await BTCParamV2.new({from: accounts[2]});
		const boolvu0Gk92 = true
		const addressPriTx80 = accounts[0]
		const uintzrHBB4M = BigInt("1389")
		const uintJm4HzNL = BigInt("1040")
		const addressLHMRhLc = accounts[0]
		const addressz4xAzVQ = "0x0000000000000000000000000000000000000001"
		const uintvN5T47F = BigInt("1403")
		const address4Gcx0K = accounts[0]
		const addresszRXa8r = await BTCParamV2F4rr8NH.initialize.call(addressz4xAzVQ, addressLHMRhLc, uintJm4HzNL, uintzrHBB4M, addressPriTx80, boolvu0Gk92, {from: accounts[3]});
		const uint256o9UTVgF = await BTCParamV2F4rr8NH.setBtcNetDiff.call(uintvN5T47F, {from: accounts[0]});
		const addresswjFTyxS = await BTCParamV2F4rr8NH.setParamSetter.call(address4Gcx0K, {from: accounts[0]});
		await BTCParamV2F4rr8NH.onlyParamSetter.call({from: accounts[4]});

		await expect(BTCParamV2F4rr8NH.initialize.call(addressz4xAzVQ, addressLHMRhLc, uintJm4HzNL, uintzrHBB4M, addressPriTx80, boolvu0Gk92, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2ofMQaF9 = await BTCParamV2.new({from: accounts[2]});
		const uintBfDnSh = BigInt("575")
		const addressuMigdKE = accounts[2]
		const uint74XX4U = BigInt("901")
		const uint256gAtwFwT = await BTCParamV2ofMQaF9.btcIncomePerTPerSecInWei.call({from: accounts[3]});
		const uint256CbuzYrn = await BTCParamV2ofMQaF9.setBtcNetDiff.call(uintBfDnSh, {from: accounts[3]});
		const boolnC4YejD = await BTCParamV2ofMQaF9.removeListener.call(addressuMigdKE, {from: accounts[4]});
		const uint256WGvyjsI = await BTCParamV2ofMQaF9.setBtcNetDiff.call(uint74XX4U, {from: accounts[0]});

		await expect(BTCParamV2ofMQaF9.btcIncomePerTPerSecInWei.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})