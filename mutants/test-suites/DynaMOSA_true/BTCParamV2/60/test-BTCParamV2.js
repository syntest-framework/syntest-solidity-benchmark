const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2ybTr0ei = await BTCParamV2.new({from: accounts[2]});
//		await BTCParamV2ybTr0ei.updateBtcPrice.call({from: accounts[0]});
//		await BTCParamV2ybTr0ei.onlyOwner.call({from: accounts[4]});
//		await BTCParamV2ybTr0ei.onlyParamSetter.call({from: accounts[2]});

		await expect(BTCParamV2ybTr0ei.updateBtcPrice.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2ykucPMe = await BTCParamV2.new({from: accounts[3]});
		const addressTk4Lfg5 = accounts[5]
		const uintFSrhCIf = BigInt("1350")
		const boolKlvn0OU = true
		const addressWHmkRve = accounts[3]
		const uintlRBzfsf = BigInt("934")
		const uintVCA1XVw = BigInt("57")
		const addressGAmz7ZY = accounts[1]
		const addressV2cv8jc = accounts[1]
		const addressHsSPaG9 = accounts[2]
//		const addresshcHl39g = await BTCParamV2ykucPMe.transferOwnership.call(addressTk4Lfg5, {from: accounts[1]});
//		const uint256Ubgaccn = await BTCParamV2ykucPMe.setBtcTxFeeRewardRate.call(uintFSrhCIf, {from: accounts[1]});
//		await BTCParamV2ykucPMe.updateBtcPrice.call({from: accounts[1]});
//		const addressR4Sl9z = await BTCParamV2ykucPMe.initialize.call(addressV2cv8jc, addressGAmz7ZY, uintVCA1XVw, uintlRBzfsf, addressWHmkRve, boolKlvn0OU, {from: accounts[4]});
//		const addresswhgR5pK = await BTCParamV2ykucPMe.setParamSetter.call(addressHsSPaG9, {from: accounts[3]});

		await expect(BTCParamV2ykucPMe.transferOwnership.call(addressTk4Lfg5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2nZTYvzO = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addresslCxVnVp = accounts[4]
		const uintuWEQYkz = BigInt("465")
		const uint256i8GUNRA = await BTCParamV2nZTYvzO.btcPrice.call({from: "0x0000000000000000000000000000000000000001"});
		const addressORFkYIL = await BTCParamV2nZTYvzO.setParamSetter.call(addresslCxVnVp, {from: accounts[0]});
		await BTCParamV2nZTYvzO.updateBtcPrice.call({from: accounts[1]});
		const uint256Lj0qgwI = await BTCParamV2nZTYvzO.setBtcNetDiff.call(uintuWEQYkz, {from: accounts[4]});
		await BTCParamV2nZTYvzO.onlyOwner.call({from: accounts[1]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2pegsqdO = await BTCParamV2.new({from: accounts[1]});
		const uintdrIlHg0 = BigInt("1131")
		const uintiARSsVV = BigInt("326")
//		await BTCParamV2pegsqdO.onlyOwner.call({from: accounts[0]});
//		const uint256jsQXX6p = await BTCParamV2pegsqdO.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintdrIlHg0, {from: accounts[4]});
//		const uint256nN8Hp0l = await BTCParamV2pegsqdO.setBtcBlockReward.call(uintiARSsVV, {from: accounts[4]});
//		const uint256a0da2Ki = await BTCParamV2pegsqdO.btcIncomePerTPerSecInWei.call({from: accounts[3]});

		await expect(BTCParamV2pegsqdO.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2ybTr0ei = await BTCParamV2.new({from: accounts[2]});
//		const uint256clbiJPk = await BTCParamV2ybTr0ei.btcIncomePerTPerSecInWei.call({from: accounts[4]});
//		await BTCParamV2ybTr0ei.onlyOwner.call({from: accounts[2]});
//		await BTCParamV2ybTr0ei.updateBtcPrice.call({from: accounts[0]});
//		await BTCParamV2ybTr0ei.onlyOwner.call({from: accounts[4]});
//		await BTCParamV2ybTr0ei.onlyParamSetter.call({from: accounts[2]});

		await expect(BTCParamV2ybTr0ei.btcIncomePerTPerSecInWei.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2ybTr0ei = await BTCParamV2.new({from: accounts[2]});
		const addressjnGHYf5 = accounts[0]
		const uint256RFDSsFo = await BTCParamV2ybTr0ei.btcPrice.call({from: accounts[4]});
//		await BTCParamV2ybTr0ei.updateBtcPrice.call({from: accounts[0]});
//		const addressjX6nH85 = await BTCParamV2ybTr0ei.addListener.call(addressjnGHYf5, {from: accounts[2]});
//		await BTCParamV2ybTr0ei.onlyOwner.call({from: accounts[4]});
//		await BTCParamV2ybTr0ei.onlyParamSetter.call({from: accounts[2]});

		assert.equal(uint256RFDSsFo, BigInt("0"))
		await expect(BTCParamV2ybTr0ei.updateBtcPrice.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2vIle0NH = await BTCParamV2.new({from: accounts[2]});
		const boolpFajObV = true
		const addressA5tN4XV = accounts[2]
		const uintF7k3Skv = BigInt("967")
		const uintbQPbGLG = BigInt("1723")
		const addressAG53EGE = accounts[2]
		const addressShC8ERN = accounts[1]
//		const addressgX7ySsj = await BTCParamV2vIle0NH.initialize.call(addressShC8ERN, addressAG53EGE, uintbQPbGLG, uintF7k3Skv, addressA5tN4XV, boolpFajObV, {from: accounts[3]});
//		const uint256jycBmIA = await BTCParamV2vIle0NH.btcIncomePerTPerSecInWei.call({from: accounts[2]});

		await expect(BTCParamV2vIle0NH.initialize.call(addressShC8ERN, addressAG53EGE, uintbQPbGLG, uintF7k3Skv, addressA5tN4XV, boolpFajObV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})