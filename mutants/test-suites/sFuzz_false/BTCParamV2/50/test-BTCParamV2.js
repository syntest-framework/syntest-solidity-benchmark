const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV24jE2X7 = await BTCParamV2.new({from: accounts[5]});
		const uintx1dmwf = BigInt("1128")
//		await BTCParamV24jE2X7.updateBtcPrice.call({from: accounts[0]});
//		const uint256npzcjAc = await BTCParamV24jE2X7.btcPrice.call({from: accounts[2]});
//		await BTCParamV24jE2X7.onlyParamSetter.call({from: accounts[1]});
//		const uint256HGOEBY = await BTCParamV24jE2X7.setBtcBlockReward.call(uintx1dmwf, {from: accounts[2]});

		await expect(BTCParamV24jE2X7.updateBtcPrice.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2teBpO5 = await BTCParamV2.new({from: accounts[2]});
		const addressDzcZuFz = accounts[2]
		const uintICeTo3f = BigInt("176")
		const boolfun9c9r = false
		const addresspIcfa7O = accounts[2]
		const uintFjsEPjI = BigInt("569")
		const uintPjJx6Vu = BigInt("818")
		const addressZ1EWMQ = accounts[3]
		const addresspZc0fJf = accounts[1]
		const uintZ0wPp9V = BigInt("1433")
//		const addresspCJup3f = await BTCParamV2teBpO5.transferOwnership.call(addressDzcZuFz, {from: accounts[0]});
//		const uint256U9r0Qah = await BTCParamV2teBpO5.setBtcBlockReward.call(uintICeTo3f, {from: accounts[1]});
//		const addresshP1eVPB = await BTCParamV2teBpO5.initialize.call(addresspZc0fJf, addressZ1EWMQ, uintPjJx6Vu, uintFjsEPjI, addresspIcfa7O, boolfun9c9r, {from: accounts[0]});
//		const uint256PZVx6UN = await BTCParamV2teBpO5.btcPrice.call({from: accounts[4]});
//		const uint256Jzdozb = await BTCParamV2teBpO5.setBtcTxFeeRewardRate.call(uintZ0wPp9V, {from: accounts[2]});

		await expect(BTCParamV2teBpO5.transferOwnership.call(addressDzcZuFz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2ccm7Cwa = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZP9IgnD = BigInt("1619")
		const addressfBueRZF = accounts[3]
		const addresskyK9LEY = accounts[3]
		const addresswnINKG4 = accounts[0]
		const uint256PngtVKN = await BTCParamV2ccm7Cwa.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintZP9IgnD, {from: accounts[0]});
		const addressezV5Nv0 = await BTCParamV2ccm7Cwa.setParamSetter.call(addressfBueRZF, {from: accounts[2]});
		await BTCParamV2ccm7Cwa.updateBtcPrice.call({from: accounts[4]});
		const booltRVqY5R = await BTCParamV2ccm7Cwa.removeListener.call(addresskyK9LEY, {from: accounts[3]});
		const boolhp24bmj = await BTCParamV2ccm7Cwa.removeListener.call(addresswnINKG4, {from: accounts[5]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2EjHLunt = await BTCParamV2.new({from: accounts[1]});
		const uint256GqewhO1 = await BTCParamV2EjHLunt.btcPrice.call({from: accounts[0]});
//		await BTCParamV2EjHLunt.updateBtcPrice.call({from: accounts[5]});
//		await BTCParamV2EjHLunt.onlyOwner.call({from: accounts[3]});
//		await BTCParamV2EjHLunt.onlyParamSetter.call({from: accounts[2]});

		assert.equal(uint256GqewhO1, BigInt("0"))
		await expect(BTCParamV2EjHLunt.updateBtcPrice.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2EjHLunt = await BTCParamV2.new({from: accounts[1]});
		const addressywTK100 = accounts[3]
//		await BTCParamV2EjHLunt.onlyOwner.call({from: accounts[1]});
//		await BTCParamV2EjHLunt.updateBtcPrice.call({from: accounts[5]});
//		await BTCParamV2EjHLunt.onlyParamSetter.call({from: accounts[2]});
//		const booljtSR75E = await BTCParamV2EjHLunt.removeListener.call(addressywTK100, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BTCParamV2EjHLunt.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2EjHLunt = await BTCParamV2.new({from: accounts[1]});
//		const uint256caGyp33 = await BTCParamV2EjHLunt.btcIncomePerTPerSecInWei.call({from: accounts[2]});
//		await BTCParamV2EjHLunt.updateBtcPrice.call({from: accounts[5]});

		await expect(BTCParamV2EjHLunt.btcIncomePerTPerSecInWei.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2EjHLunt = await BTCParamV2.new({from: accounts[1]});
		const boolKBcqHo8 = true
		const addressp28L0Q = accounts[4]
		const uintrE0Hkr7 = BigInt("759")
		const uinthwnI3k = BigInt("905")
		const addresstOekkfS = accounts[4]
		const addresslOSgbDn = accounts[1]
		const uintCIYCEc = BigInt("1795")
//		const addressBrfHRs = await BTCParamV2EjHLunt.initialize.call(addresslOSgbDn, addresstOekkfS, uinthwnI3k, uintrE0Hkr7, addressp28L0Q, boolKBcqHo8, {from: accounts[5]});
//		await BTCParamV2EjHLunt.updateBtcPrice.call({from: accounts[5]});
//		const uint256XpcGq2H = await BTCParamV2EjHLunt.setBtcBlockReward.call(uintCIYCEc, {from: accounts[2]});

		await expect(BTCParamV2EjHLunt.initialize.call(addresslOSgbDn, addresstOekkfS, uinthwnI3k, uintrE0Hkr7, addressp28L0Q, boolKBcqHo8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})