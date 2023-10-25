const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2ZU65xf7 = await BTCParamV2.new({from: accounts[0]});
		const uintZ72Fz8R = BigInt("413")
		const addressVz0AHOc = accounts[4]
		const addresspwtw2er = accounts[3]
		const uint256GdlArAH = await BTCParamV2ZU65xf7.setBtcBlockReward.call(uintZ72Fz8R, {from: accounts[1]});
		await BTCParamV2ZU65xf7.onlyOwner.call({from: accounts[3]});
		const boolTGB1ksP = await BTCParamV2ZU65xf7.removeListener.call(addressVz0AHOc, {from: accounts[0]});
		const addressBe5BWhy = await BTCParamV2ZU65xf7.addListener.call(addresspwtw2er, {from: accounts[2]});

		await expect(BTCParamV2ZU65xf7.setBtcBlockReward.call(uintZ72Fz8R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2qZt5sRH = await BTCParamV2.new({from: accounts[3]});
		const uintP2BAdKx = BigInt("2017")
		const addressrmR4S2o = accounts[0]
		const uintGAVd0Q = BigInt("1642")
		const uint256RZtgEg = await BTCParamV2qZt5sRH.btcIncomePerTPerSecInWei.call({from: accounts[0]});
		const uint256FIq2xMB = await BTCParamV2qZt5sRH.setBtcNetDiff.call(uintP2BAdKx, {from: accounts[3]});
		const uint256X5KwaTv = await BTCParamV2qZt5sRH.btcPrice.call({from: accounts[3]});
		const addressz12rcTY = await BTCParamV2qZt5sRH.setParamSetter.call(addressrmR4S2o, {from: accounts[0]});
		const uint256Mo6aqn = await BTCParamV2qZt5sRH.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintGAVd0Q, {from: accounts[2]});

		await expect(BTCParamV2qZt5sRH.btcIncomePerTPerSecInWei.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2wkrZmz = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressmuJWy81 = accounts[4]
		const uintbwWPhyE = BigInt("760")
		const addressI7cL2Ov = await BTCParamV2wkrZmz.transferOwnership.call(addressmuJWy81, {from: accounts[4]});
		await BTCParamV2wkrZmz.updateBtcPrice.call({from: accounts[3]});
		const uint256lkmtMRH = await BTCParamV2wkrZmz.setBtcNetDiff.call(uintbwWPhyE, {from: accounts[2]});
		const uint256iGRB8Bi = await BTCParamV2wkrZmz.btcIncomePerTPerSecInWei.call({from: accounts[0]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2fvcjuUx = await BTCParamV2.new({from: accounts[1]});
		const boolLSP55Ik = true
		const addressmgJMw9 = accounts[0]
		const uintBfPrJhl = BigInt("916")
		const uintJBbTg7 = BigInt("1266")
		const addressh26i0J5 = "0x0000000000000000000000000000000000000001"
		const addressMUxJBE = accounts[4]
		const boolDw7uRY = false
		const addressvN5dpn6 = accounts[0]
		const uintYxR8VHk = BigInt("980")
		const uintapVlS9O = BigInt("2025")
		const addressAnmwZy = accounts[3]
		const addressi5zuU9W = accounts[4]
		const uintf1LMhIW = BigInt("1068")
		const addressVOByQUR = await BTCParamV2fvcjuUx.initialize.call(addressMUxJBE, addressh26i0J5, uintJBbTg7, uintBfPrJhl, addressmgJMw9, boolLSP55Ik, {from: accounts[0]});
		const addressAhdLKSF = await BTCParamV2fvcjuUx.initialize.call(addressi5zuU9W, addressAnmwZy, uintapVlS9O, uintYxR8VHk, addressvN5dpn6, boolDw7uRY, {from: accounts[3]});
		const uint256Dx8f3Hh = await BTCParamV2fvcjuUx.btcPrice.call({from: accounts[5]});
		const uint256jWMRoGu = await BTCParamV2fvcjuUx.setBtcBlockReward.call(uintf1LMhIW, {from: accounts[3]});

		await expect(BTCParamV2fvcjuUx.initialize.call(addressMUxJBE, addressh26i0J5, uintJBbTg7, uintBfPrJhl, addressmgJMw9, boolLSP55Ik, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2tW5qswN = await BTCParamV2.new({from: accounts[2]});
		const addresshVBEGap = accounts[1]
		const uintJEYplub = BigInt("1134")
		const addressa8dCalg = await BTCParamV2tW5qswN.setParamSetter.call(addresshVBEGap, {from: accounts[4]});
		const uint256cI5Fjk6 = await BTCParamV2tW5qswN.setBtcNetDiff.call(uintJEYplub, {from: accounts[0]});
		await BTCParamV2tW5qswN.onlyParamSetter.call({from: accounts[1]});

		await expect(BTCParamV2tW5qswN.setParamSetter.call(addresshVBEGap, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2ZU65xf7 = await BTCParamV2.new({from: accounts[0]});
		const addresskQp3UeT = accounts[4]
		const addressPcK3ZuL = accounts[3]
		const uintg39NMZI = BigInt("1787")
		await BTCParamV2ZU65xf7.onlyOwner.call({from: accounts[3]});
		const boolTGB1ksP = await BTCParamV2ZU65xf7.removeListener.call(addresskQp3UeT, {from: accounts[0]});
		const addressBe5BWhy = await BTCParamV2ZU65xf7.addListener.call(addressPcK3ZuL, {from: accounts[2]});
		const uint256mYj8iUd = await BTCParamV2ZU65xf7.setBtcNetDiff.call(uintg39NMZI, {from: accounts[4]});

		await expect(BTCParamV2ZU65xf7.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2MywJv5x = await BTCParamV2.new({from: accounts[4]});
		const uint256ZMoxtNz = await BTCParamV2MywJv5x.btcPrice.call({from: accounts[4]});
		await BTCParamV2MywJv5x.updateBtcPrice.call({from: accounts[4]});

		assert.equal(uint256ZMoxtNz, BigInt("0"))
		await expect(BTCParamV2MywJv5x.updateBtcPrice.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})