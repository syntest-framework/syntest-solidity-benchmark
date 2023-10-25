const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2DmxAgcK = await BTCParamV2.new({from: accounts[3]});
		const addressuKsgEy = accounts[0]
		const addressVVNcvDE = accounts[4]
		const uintkodlcVO = BigInt("1194")
		const addressjTvZ7K = accounts[0]
		const uintR9frIYH = BigInt("176")
		const addressBIGkkwp = await BTCParamV2DmxAgcK.addListener.call(addressuKsgEy, {from: accounts[3]});
		const addresskqCIja3 = await BTCParamV2DmxAgcK.addListener.call(addressVVNcvDE, {from: accounts[3]});
		const uint256BcICkFc = await BTCParamV2DmxAgcK.setBtcTxFeeRewardRate.call(uintkodlcVO, {from: accounts[0]});
		const addressGDA85QR = await BTCParamV2DmxAgcK.transferOwnership.call(addressjTvZ7K, {from: accounts[1]});
		const uint256LmM097d = await BTCParamV2DmxAgcK.setBtcNetDiff.call(uintR9frIYH, {from: accounts[1]});

		await expect(BTCParamV2DmxAgcK.addListener.call(addressuKsgEy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2d6FaZJ = await BTCParamV2.new({from: accounts[2]});
		const addressJMlM9yI = accounts[3]
		const uintttQIwIL = BigInt("394")
		const addressUXRuAl1 = accounts[0]
		const addressGiG3HdP = await BTCParamV2d6FaZJ.transferOwnership.call(addressJMlM9yI, {from: accounts[3]});
		const uint256HGLgN15 = await BTCParamV2d6FaZJ.btcIncomePerTPerSecInWei.call({from: accounts[0]});
		const uint256T95xiIN = await BTCParamV2d6FaZJ.setBtcNetDiff.call(uintttQIwIL, {from: accounts[4]});
		const addresszhWTJ0o = await BTCParamV2d6FaZJ.transferOwnership.call(addressUXRuAl1, {from: accounts[4]});

		await expect(BTCParamV2d6FaZJ.transferOwnership.call(addressJMlM9yI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2S6T7QdY = await BTCParamV2.new({from: accounts[3]});
		const uintuR9dsfA = BigInt("416")
		const uint256K7NLfLM = await BTCParamV2S6T7QdY.btcIncomePerTPerSecInWei.call({from: accounts[0]});
		const uint256h4svbfO = await BTCParamV2S6T7QdY.setBtcBlockReward.call(uintuR9dsfA, {from: accounts[2]});

		await expect(BTCParamV2S6T7QdY.btcIncomePerTPerSecInWei.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2NNWEftG = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNfa1nZv = BigInt("1936")
		const uintmG64tva = BigInt("1381")
		const uintnu6dmH3 = BigInt("1992")
		const uintRXOC9xr = BigInt("1928")
		const uint256t1Jdgyu = await BTCParamV2NNWEftG.setBtcTxFeeRewardRate.call(uintNfa1nZv, {from: accounts[1]});
		const uint256AyuKF6A = await BTCParamV2NNWEftG.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintmG64tva, {from: accounts[1]});
		const uint256CJNpdZ8 = await BTCParamV2NNWEftG.setBtcTxFeeRewardRate.call(uintnu6dmH3, {from: accounts[4]});
		const uint256HV4Dzl = await BTCParamV2NNWEftG.btcPrice.call({from: accounts[5]});
		const uint256tAF6WR3 = await BTCParamV2NNWEftG.setBtcNetDiff.call(uintRXOC9xr, {from: accounts[2]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2nAxo5JA = await BTCParamV2.new({from: accounts[1]});
		const addressWQ9VAqn = accounts[5]
		await BTCParamV2nAxo5JA.onlyParamSetter.call({from: accounts[4]});
		const addressKNrh7cy = await BTCParamV2nAxo5JA.transferOwnership.call(addressWQ9VAqn, {from: accounts[1]});
		await BTCParamV2nAxo5JA.onlyOwner.call({from: accounts[5]});

		await expect(BTCParamV2nAxo5JA.onlyParamSetter.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2GD9eO0J = await BTCParamV2.new({from: accounts[2]});
		const uintmga3rsn = BigInt("685")
		const uint256JGM6ypC = await BTCParamV2GD9eO0J.btcPrice.call({from: accounts[0]});
		const uint256rB5un2h = await BTCParamV2GD9eO0J.setBtcTxFeeRewardRate.call(uintmga3rsn, {from: accounts[1]});
		await BTCParamV2GD9eO0J.updateBtcPrice.call({from: accounts[3]});

		assert.equal(uint256JGM6ypC, BigInt("0"))
		await expect(BTCParamV2GD9eO0J.setBtcTxFeeRewardRate.call(uintmga3rsn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2MzgXP5f = await BTCParamV2.new({from: accounts[3]});
		const booleZqoGfN = true
		const addressECQDxx2 = accounts[1]
		const uinteq7fQhK = BigInt("1172")
		const uintnBsxLpH = BigInt("2013")
		const addressaQZKpSD = accounts[3]
		const addressH1k35zW = accounts[1]
		const addressqpHpUiD = accounts[1]
		const addresso08vCNM = accounts[1]
		const addresssJx1lpp = await BTCParamV2MzgXP5f.initialize.call(addressH1k35zW, addressaQZKpSD, uintnBsxLpH, uinteq7fQhK, addressECQDxx2, booleZqoGfN, {from: accounts[4]});
		const addressSW1JgOA = await BTCParamV2MzgXP5f.setParamSetter.call(addressqpHpUiD, {from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2MzgXP5f.updateBtcPrice.call({from: accounts[0]});
		const addressW6cMak4 = await BTCParamV2MzgXP5f.setParamSetter.call(addresso08vCNM, {from: accounts[2]});
		await BTCParamV2MzgXP5f.onlyOwner.call({from: accounts[5]});

		await expect(BTCParamV2MzgXP5f.initialize.call(addressH1k35zW, addressaQZKpSD, uintnBsxLpH, uinteq7fQhK, addressECQDxx2, booleZqoGfN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})