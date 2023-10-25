const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2h6Wiadr = await BTCParamV2.new({from: accounts[0]});
		const addressB2SmO3K = accounts[0]
		const addressKxloS5 = accounts[0]
		const boolB4QhNN0 = true
		const addressLxz7dM5 = accounts[1]
		const uintT35CAMl = BigInt("1177")
		const uintt9hN2l0 = BigInt("137")
		const addressU1hCKNs = accounts[0]
		const addressyhhVBIn = accounts[5]
		const boole7nCu3C = true
		const addresskreGmtp = accounts[5]
		const uintHeSFbd = BigInt("916")
		const uintegLElCx = BigInt("1363")
		const addressBhxJyn4 = accounts[5]
		const addressT6Qzu5h = accounts[1]
		const addressr4f9WyN = await BTCParamV2h6Wiadr.setParamSetter.call(addressB2SmO3K, {from: accounts[1]});
		const addressztli4fT = await BTCParamV2h6Wiadr.setParamSetter.call(addressKxloS5, {from: accounts[2]});
		const addressYJoDFa = await BTCParamV2h6Wiadr.initialize.call(addressyhhVBIn, addressU1hCKNs, uintt9hN2l0, uintT35CAMl, addressLxz7dM5, boolB4QhNN0, {from: accounts[2]});
		const addressnIcMofv = await BTCParamV2h6Wiadr.initialize.call(addressT6Qzu5h, addressBhxJyn4, uintegLElCx, uintHeSFbd, addresskreGmtp, boole7nCu3C, {from: accounts[3]});

		await expect(BTCParamV2h6Wiadr.setParamSetter.call(addressB2SmO3K, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Sh6e3jA = await BTCParamV2.new({from: accounts[4]});
		const uintqUTordj = BigInt("396")
		const uintp161Sfz = BigInt("2007")
		const uint256ULixWa5 = await BTCParamV2Sh6e3jA.setBtcTxFeeRewardRate.call(uintqUTordj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PCm65Zl = await BTCParamV2Sh6e3jA.setBtcNetDiff.call(uintp161Sfz, {from: accounts[2]});

		await expect(BTCParamV2Sh6e3jA.setBtcTxFeeRewardRate.call(uintqUTordj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2k8DCRgs = await BTCParamV2.new({from: accounts[3]});
		const uintGWmhhU9 = BigInt("1383")
		const boolUcUmudF = true
		const addresstowZGt7 = accounts[1]
		const uintWEd0lmb = BigInt("468")
		const uinty2kfOoU = BigInt("1824")
		const addressy5zGnH = accounts[5]
		const addressCq8Yskg = accounts[0]
		const uint256o6czBsm = await BTCParamV2k8DCRgs.btcPrice.call({from: accounts[2]});
		const uint256x6OnbpP = await BTCParamV2k8DCRgs.setBtcTxFeeRewardRate.call(uintGWmhhU9, {from: accounts[0]});
		const uint256o5s2WTj = await BTCParamV2k8DCRgs.btcPrice.call({from: accounts[4]});
		const uint256kYyPT72 = await BTCParamV2k8DCRgs.btcIncomePerTPerSecInWei.call({from: accounts[1]});
		const addressTNN4cDk = await BTCParamV2k8DCRgs.initialize.call(addressCq8Yskg, addressy5zGnH, uinty2kfOoU, uintWEd0lmb, addresstowZGt7, boolUcUmudF, {from: accounts[4]});

		assert.equal(uint256o6czBsm, BigInt("0"))
		await expect(BTCParamV2k8DCRgs.setBtcTxFeeRewardRate.call(uintGWmhhU9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Sh6e3jA = await BTCParamV2.new({from: accounts[4]});
		const addressTN9HooB = accounts[2]
		const uintODHeLZM = BigInt("2015")
		const uint256n6DyReZ = await BTCParamV2Sh6e3jA.btcIncomePerTPerSecInWei.call({from: accounts[4]});
		const addressZIuL01b = await BTCParamV2Sh6e3jA.setParamSetter.call(addressTN9HooB, {from: accounts[4]});
		const uint256PCm65Zl = await BTCParamV2Sh6e3jA.setBtcNetDiff.call(uintODHeLZM, {from: accounts[2]});

		await expect(BTCParamV2Sh6e3jA.btcIncomePerTPerSecInWei.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2giD5u5L = await BTCParamV2.new({from: accounts[4]});
		const addressYqVfYj = "0x0000000000000000000000000000000000000001"
		const uintTUxPmNY = BigInt("1754")
		await BTCParamV2giD5u5L.onlyOwner.call({from: accounts[4]});
		await BTCParamV2giD5u5L.onlyOwner.call({from: accounts[0]});
		const addresswBLi45y = await BTCParamV2giD5u5L.addListener.call(addressYqVfYj, {from: accounts[4]});
		const uint256sCB6ID = await BTCParamV2giD5u5L.setBtcBlockReward.call(uintTUxPmNY, {from: accounts[3]});

		await expect(BTCParamV2giD5u5L.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2rsMI7h = await BTCParamV2.new({from: accounts[2]});
		const boolnBFGL7 = true
		const addressHCM1B9d = "0x0000000000000000000000000000000000000001"
		const uintAKKXOqS = BigInt("726")
		const uintQ6MWJw3 = BigInt("1795")
		const address5pojmt = accounts[5]
		const addressQbqvwbR = accounts[1]
		const uint4LkPzM = BigInt("1947")
		const addresskDO48zs = await BTCParamV2rsMI7h.initialize.call(addressQbqvwbR, address5pojmt, uintQ6MWJw3, uintAKKXOqS, addressHCM1B9d, boolnBFGL7, {from: accounts[2]});
		const uint256w6IO7b4 = await BTCParamV2rsMI7h.setBtcTxFeeRewardRate.call(uint4LkPzM, {from: accounts[3]});

		await expect(BTCParamV2rsMI7h.initialize.call(addressQbqvwbR, address5pojmt, uintQ6MWJw3, uintAKKXOqS, addressHCM1B9d, boolnBFGL7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Doxdf2Z = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressULfC2io = accounts[4]
		const uintrtGhRdm = BigInt("806")
		const uintCcGdv2z = BigInt("1913")
		const addressCOKlbaA = accounts[0]
		const addressJuD4nG6 = await BTCParamV2Doxdf2Z.addListener.call(addressULfC2io, {from: accounts[0]});
		const uint256gTKF8jy = await BTCParamV2Doxdf2Z.setBtcBlockReward.call(uintrtGhRdm, {from: accounts[4]});
		const uint256KARXStt = await BTCParamV2Doxdf2Z.btcIncomePerTPerSecInWei.call({from: accounts[4]});
		const uint256fO3Yr65 = await BTCParamV2Doxdf2Z.btcPrice.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qNvC56 = await BTCParamV2Doxdf2Z.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintCcGdv2z, {from: accounts[4]});
		const addressyBD0cSV = await BTCParamV2Doxdf2Z.transferOwnership.call(addressCOKlbaA, {from: accounts[1]});
	});
})