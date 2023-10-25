const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2SmSmOIH = await BTCParamV2.new({from: accounts[5]});
		const uinteDVaibG = BigInt("1012")
		const uint256JKPF1zT = await BTCParamV2SmSmOIH.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uinteDVaibG, {from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2SmSmOIH.updateBtcPrice.call({from: accounts[3]});

		await expect(BTCParamV2SmSmOIH.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uinteDVaibG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2rtyRZIn = await BTCParamV2.new({from: accounts[4]});
		const addressMQRpDLv = accounts[5]
		const addressiKtqqpm = accounts[2]
		const uintUN4mq5M = BigInt("676")
		const addressbRqG6Bq = await BTCParamV2rtyRZIn.setParamSetter.call(addressMQRpDLv, {from: "0x0000000000000000000000000000000000000001"});
		const addressRw8e1YX = await BTCParamV2rtyRZIn.addListener.call(addressiKtqqpm, {from: accounts[3]});
		const uint256VrDPKAA = await BTCParamV2rtyRZIn.setBtcBlockReward.call(uintUN4mq5M, {from: accounts[5]});

		await expect(BTCParamV2rtyRZIn.setParamSetter.call(addressMQRpDLv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2FpFHq6 = await BTCParamV2.new({from: accounts[1]});
		const uintPm4w57t = BigInt("1345")
		const addressF5or1sc = accounts[3]
		const uintykY5o7K = BigInt("432")
		await BTCParamV2FpFHq6.onlyParamSetter.call({from: accounts[0]});
		const uint256f1H3FPJ = await BTCParamV2FpFHq6.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintPm4w57t, {from: accounts[2]});
		const addressCAqdA4m = await BTCParamV2FpFHq6.addListener.call(addressF5or1sc, {from: accounts[0]});
		const uint256xMSUsEc = await BTCParamV2FpFHq6.setBtcTxFeeRewardRate.call(uintykY5o7K, {from: accounts[3]});

		await expect(BTCParamV2FpFHq6.onlyParamSetter.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2vsAkHmJ = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const address1Xn8K7 = accounts[5]
		const uintR4Z8k7L = BigInt("940")
		const uintmR3BUEc = BigInt("1883")
		const boolbaiGw8d = false
		const addressph9gvxl = accounts[3]
		const uintrry1dq4 = BigInt("1854")
		const uintkMjdFTM = BigInt("2010")
		const addressYUAJL4Q = accounts[2]
		const addressyP4ZQO = accounts[0]
		const addressSN4t4zZ = await BTCParamV2vsAkHmJ.addListener.call(address1Xn8K7, {from: accounts[0]});
		const uint256wP3Fy9Q = await BTCParamV2vsAkHmJ.setBtcTxFeeRewardRate.call(uintR4Z8k7L, {from: accounts[3]});
		await BTCParamV2vsAkHmJ.updateBtcPrice.call({from: accounts[1]});
		const uint256QRStm45 = await BTCParamV2vsAkHmJ.setBtcBlockReward.call(uintmR3BUEc, {from: "0x0000000000000000000000000000000000000001"});
		const addressuoHP6en = await BTCParamV2vsAkHmJ.initialize.call(addressyP4ZQO, addressYUAJL4Q, uintkMjdFTM, uintrry1dq4, addressph9gvxl, boolbaiGw8d, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2VJ8ZInn = await BTCParamV2.new({from: accounts[5]});
		const boolfCTh1ez = false
		const addressVGXfwTM = accounts[1]
		const uintYT1JS1v = BigInt("1640")
		const uintKyMn4vP = BigInt("2000")
		const addresshq6trMM = accounts[5]
		const addressuWo3jy = accounts[3]
		const uintEKouWxd = BigInt("1445")
		const addressOzudyrr = accounts[4]
		const addressRUB8jgL = accounts[2]
		const addressFgjZ1uN = await BTCParamV2VJ8ZInn.initialize.call(addressuWo3jy, addresshq6trMM, uintKyMn4vP, uintYT1JS1v, addressVGXfwTM, boolfCTh1ez, {from: accounts[4]});
		await BTCParamV2VJ8ZInn.updateBtcPrice.call({from: accounts[3]});
		const uint256n4jhKS4 = await BTCParamV2VJ8ZInn.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintEKouWxd, {from: accounts[3]});
		const boolQhJdam = await BTCParamV2VJ8ZInn.removeListener.call(addressOzudyrr, {from: accounts[0]});
		const addressoUY72nL = await BTCParamV2VJ8ZInn.transferOwnership.call(addressRUB8jgL, {from: accounts[2]});
		const uint256J9MFDrI = await BTCParamV2VJ8ZInn.btcIncomePerTPerSecInWei.call({from: accounts[0]});

		await expect(BTCParamV2VJ8ZInn.initialize.call(addressuWo3jy, addresshq6trMM, uintKyMn4vP, uintYT1JS1v, addressVGXfwTM, boolfCTh1ez, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2t5rGVI = await BTCParamV2.new({from: accounts[3]});
		const addressU3dcRKD = accounts[3]
		const uintb54oW1Z = BigInt("254")
		const uintCS8fbg2 = BigInt("321")
		const addressSQ97L5t = accounts[4]
		const uint256GgWZ1wz = await BTCParamV2t5rGVI.btcIncomePerTPerSecInWei.call({from: accounts[1]});
		const addressFRmUhPj = await BTCParamV2t5rGVI.setParamSetter.call(addressU3dcRKD, {from: accounts[2]});
		const uint256tY4xdsl = await BTCParamV2t5rGVI.setBtcBlockReward.call(uintb54oW1Z, {from: accounts[5]});
		const uint256OLAXFZI = await BTCParamV2t5rGVI.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintCS8fbg2, {from: accounts[0]});
		const addressQkjdntY = await BTCParamV2t5rGVI.transferOwnership.call(addressSQ97L5t, {from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2t5rGVI.updateBtcPrice.call({from: accounts[3]});

		await expect(BTCParamV2t5rGVI.btcIncomePerTPerSecInWei.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2cgMmdgr = await BTCParamV2.new({from: accounts[2]});
		const addressxl3GuYU = accounts[4]
		const addressKWEEJnV = accounts[4]
		const uint256AejTAU2 = await BTCParamV2cgMmdgr.btcPrice.call({from: accounts[2]});
		const addressSiqQcqT = await BTCParamV2cgMmdgr.setParamSetter.call(addressxl3GuYU, {from: accounts[2]});
		const addresscraRhI3 = await BTCParamV2cgMmdgr.addListener.call(addressKWEEJnV, {from: accounts[4]});

		assert.equal(uint256AejTAU2, BigInt("0"))
		await expect(BTCParamV2cgMmdgr.setParamSetter.call(addressxl3GuYU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})