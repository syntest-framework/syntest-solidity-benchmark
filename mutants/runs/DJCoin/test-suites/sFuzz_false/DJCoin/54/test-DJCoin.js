const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoins0yqqqi = await DJCoin.new({from: accounts[4]});
		const uintRZXQCQw = BigInt("182")
		const addressmY0FOKX = accounts[5]
		const uintwDk9bqe = BigInt("1778")
		const addressFoZk1iD = "0x0000000000000000000000000000000000000001"
		const addressRAGvac = accounts[0]
		const addressR1GW1eZ = accounts[4]
		const booluUSZnaJ = await DJCoins0yqqqi.approve.call(addressmY0FOKX, uintRZXQCQw, {from: accounts[1]});
		const addressEVujjQh = await DJCoins0yqqqi.owner.call({from: accounts[1]});
		const boolR0Uh2tI = await DJCoins0yqqqi.transfer.call(addressFoZk1iD, uintwDk9bqe, {from: accounts[0]});
		const uint256FzqiSo9 = await DJCoins0yqqqi.allowance.call(addressR1GW1eZ, addressRAGvac, {from: accounts[0]});

		assert.equal(addressEVujjQh, 0x4898De1BDf1b3237345013486694CC4fe63A5599)
		assert.equal(booluUSZnaJ, true)
		await expect(DJCoins0yqqqi.transfer.call(addressFoZk1iD, uintwDk9bqe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinH6Hyvni = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintnBb5oBs = BigInt("754")
		const uintXtZoR4q = BigInt("1396")
		const uintEyBDptj = BigInt("681")
		const addressLxUi5nR = accounts[0]
		const uintRW6h6Zv = BigInt("1107")
		const addresszGnKDEY = accounts[1]
		const uint256kRaHw86 = await DJCoinH6Hyvni.burn.call(uintXtZoR4q, uintnBb5oBs, {from: accounts[1]});
		const boolkbc3103 = await DJCoinH6Hyvni.decreaseAllowance.call(addressLxUi5nR, uintEyBDptj, {from: accounts[0]});
		const boolBmm3Zou = await DJCoinH6Hyvni.transfer.call(addresszGnKDEY, uintRW6h6Zv, {from: accounts[4]});
	});

	it('test for DJCoin', async () => {
		const DJCoinxFPkASG = await DJCoin.new({from: accounts[2]});
		const uintMSTUE7q = BigInt("33")
		const addressOtSUKW = "0x0000000000000000000000000000000000000001"
		const addresslPayMO = accounts[3]
		const uintD2UGCKb = BigInt("304")
		const addressp7cfF6X = accounts[2]
		const uintIx84s1a = BigInt("1240")
		const addresscFag91f = accounts[0]
		const uintW8HVUaz = BigInt("767")
		const addressKm0MqnM = "0x0000000000000000000000000000000000000001"
		const addressBzT5YN = accounts[3]
		const addressRKRDEsF = accounts[3]
		const boolunVd3Ga = await DJCoinxFPkASG.transferFrom.call(addresslPayMO, addressOtSUKW, uintMSTUE7q, {from: accounts[2]});
		const boolTYNBlYw = await DJCoinxFPkASG.transfer.call(addressp7cfF6X, uintD2UGCKb, {from: accounts[0]});
		const boolOqXs0nm = await DJCoinxFPkASG.decreaseAllowance.call(addresscFag91f, uintIx84s1a, {from: accounts[4]});
		const boolMjqxP6F = await DJCoinxFPkASG.decreaseAllowance.call(addressKm0MqnM, uintW8HVUaz, {from: accounts[0]});
		const uint256RvHXRR9 = await DJCoinxFPkASG.allowance.call(addressRKRDEsF, addressBzT5YN, {from: accounts[5]});
		const uint256FmrajBM = await DJCoinxFPkASG.totalSupply.call({from: accounts[2]});

		await expect(DJCoinxFPkASG.transferFrom.call(addresslPayMO, addressOtSUKW, uintMSTUE7q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinapO92jg = await DJCoin.new({from: accounts[3]});
		const uinthdaL2W9 = BigInt("742")
		const uintiGx7gx7 = BigInt("354")
		const uintre3h1aW = BigInt("562")
		const addressSd1MPPw = accounts[4]
		const addressy2vg5Mi = accounts[2]
		const uintu43eWIR = BigInt("117")
		const addressMkKmFnR = accounts[1]
		const addressX11vlFq = accounts[2]
		const uint256PxhtVih = await DJCoinapO92jg.burn.call(uintiGx7gx7, uinthdaL2W9, {from: accounts[0]});
		const boolkPInaw = await DJCoinapO92jg.transferFrom.call(addressy2vg5Mi, addressSd1MPPw, uintre3h1aW, {from: accounts[4]});
		const boolwavJxe1 = await DJCoinapO92jg.transfer.call(addressMkKmFnR, uintu43eWIR, {from: "0x0000000000000000000000000000000000000001"});
		const addressaN1hU9p = await DJCoinapO92jg.transferOwnership.call(addressX11vlFq, {from: accounts[0]});
		await DJCoinapO92jg.renounceOwnership.call({from: accounts[4]});

		await expect(DJCoinapO92jg.burn.call(uintiGx7gx7, uinthdaL2W9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinysmxeti = await DJCoin.new({from: accounts[4]});
		const addressbxHrUZq = accounts[3]
		const uintwWydc0 = BigInt("1054")
		const addressaMDmgx = accounts[2]
		const addressOfip8yd = accounts[5]
		const uintt5PL35a = BigInt("1783")
		const uintmxb6nK3 = BigInt("1032")
		const addressKiMmpGd = await DJCoinysmxeti.validRecipient.call(addressbxHrUZq, {from: accounts[2]});
		const booluLngtwb = await DJCoinysmxeti.decreaseAllowance.call(addressaMDmgx, uintwWydc0, {from: accounts[2]});
		const addressAlYzn1o = await DJCoinysmxeti.transferOwnership.call(addressOfip8yd, {from: accounts[5]});
		const uint256qbOVjj = await DJCoinysmxeti.totalSupply.call({from: accounts[3]});
		await DJCoinysmxeti.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256FeuIp7n = await DJCoinysmxeti.burn.call(uintmxb6nK3, uintt5PL35a, {from: accounts[4]});

		await expect(DJCoinysmxeti.validRecipient.call(addressbxHrUZq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinKYAQVu6 = await DJCoin.new({from: accounts[0]});
		const uintbINZNd = BigInt("780")
		const address7uthdg = accounts[3]
		const uintUbnMBw = BigInt("1352")
		const addresscwkHmJU = accounts[1]
		const addressSTgekYp = accounts[3]
		const booljEiUrig = await DJCoinKYAQVu6.decreaseAllowance.call(address7uthdg, uintbINZNd, {from: accounts[5]});
		await DJCoinKYAQVu6.renounceOwnership.call({from: accounts[4]});
		const boolfI7HAoi = await DJCoinKYAQVu6.transferFrom.call(addressSTgekYp, addresscwkHmJU, uintUbnMBw, {from: accounts[2]});

		assert.equal(booljEiUrig, true)
		await expect(DJCoinKYAQVu6.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinYBN2ZCk = await DJCoin.new({from: accounts[4]});
		const uintBJds4w4 = BigInt("1483")
		const addressbFjNzYo = accounts[3]
		const addresskOeeaIZ = accounts[0]
		const uintvcyZ1LT = BigInt("1736")
		const addressi5gLKG = accounts[3]
		const uintxXYr17D = BigInt("467")
		const uintDVumg2P = BigInt("1455")
		const uint256ca1kpu8 = await DJCoinYBN2ZCk.totalSupply.call({from: accounts[3]});
		const boolrbNF4D = await DJCoinYBN2ZCk.decreaseAllowance.call(addressbFjNzYo, uintBJds4w4, {from: accounts[2]});
		const uint256xXBLS1q = await DJCoinYBN2ZCk.balanceOf.call(addresskOeeaIZ, {from: accounts[3]});
		await DJCoinYBN2ZCk.onlyOwner.call({from: accounts[5]});
		const boolfKhVvmK = await DJCoinYBN2ZCk.approve.call(addressi5gLKG, uintvcyZ1LT, {from: accounts[3]});
		const uint256QHFfrY7 = await DJCoinYBN2ZCk.burn.call(uintDVumg2P, uintxXYr17D, {from: accounts[2]});

		assert.equal(boolrbNF4D, true)
		assert.equal(uint256ca1kpu8, BigInt("2100000000000"))
		assert.equal(uint256xXBLS1q, BigInt("0"))
		await expect(DJCoinYBN2ZCk.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinZski8kM = await DJCoin.new({from: accounts[2]});
		const uintwkUAghM = BigInt("1261")
		const addresshOBVEBK = accounts[1]
		const uintJ7XkrD4 = BigInt("94")
		const address5UV2nV = accounts[1]
		await DJCoinZski8kM.renounceOwnership.call({from: accounts[2]});
		const boolxTurlCy = await DJCoinZski8kM.approve.call(addresshOBVEBK, uintwkUAghM, {from: accounts[2]});
		const addressvLR6knw = await DJCoinZski8kM.owner.call({from: accounts[2]});
		const boole5lUPTh = await DJCoinZski8kM.transfer.call(address5UV2nV, uintJ7XkrD4, {from: accounts[3]});

		await expect(DJCoinZski8kM.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinZski8kM = await DJCoin.new({from: accounts[2]});
		const uintOyLnRri = BigInt("1319")
		const addressbiL6ZI0 = accounts[1]
		const uintmUmpiGo = BigInt("87")
		const addresspLqwITg = accounts[1]
		const bool5VcBDN = await DJCoinZski8kM.increaseAllowance.call(addressbiL6ZI0, uintOyLnRri, {from: accounts[1]});
		await DJCoinZski8kM.renounceOwnership.call({from: accounts[2]});
		const boole5lUPTh = await DJCoinZski8kM.transfer.call(addresspLqwITg, uintmUmpiGo, {from: accounts[3]});
		await DJCoinZski8kM.onlyOwner.call({from: accounts[1]});
		await DJCoinZski8kM.renounceOwnership.call({from: accounts[0]});

		assert.equal(bool5VcBDN, true)
		await expect(DJCoinZski8kM.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinZski8kM = await DJCoin.new({from: accounts[2]});
		const addressVuFYCZJ = accounts[1]
		const addressnYcb0Sy = accounts[0]
		const uintABm2YaT = BigInt("77")
		const addressN8fQg6n = accounts[2]
		await DJCoinZski8kM.renounceOwnership.call({from: accounts[2]});
		const uint256Z5BnesP = await DJCoinZski8kM.allowance.call(addressnYcb0Sy, addressVuFYCZJ, {from: accounts[0]});
		const boole5lUPTh = await DJCoinZski8kM.transfer.call(addressN8fQg6n, uintABm2YaT, {from: accounts[3]});

		await expect(DJCoinZski8kM.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinZski8kM = await DJCoin.new({from: accounts[2]});
		const uintGZgw2xq = BigInt("1101")
		const uintMp0XhyG = BigInt("77")
		const addressDpXMyN2 = accounts[1]
		const boolGYSQHj = await DJCoinZski8kM.changetokensPerBlock.call(uintGZgw2xq, {from: accounts[2]});
		const boole5lUPTh = await DJCoinZski8kM.transfer.call(addressDpXMyN2, uintMp0XhyG, {from: accounts[3]});

		assert.equal(boolGYSQHj, true)
		await expect(DJCoinZski8kM.transfer.call(addressDpXMyN2, uintMp0XhyG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinZski8kM = await DJCoin.new({from: accounts[2]});
		const uintQfL2Jju = BigInt("1951")
		const uintdAdsHHa = BigInt("1943")
		const uintry4f1T1 = BigInt("80")
		const addresscuogF69 = accounts[1]
		const uint256n1Q3wu2 = await DJCoinZski8kM.burn.call(uintdAdsHHa, uintQfL2Jju, {from: accounts[2]});
		const boole5lUPTh = await DJCoinZski8kM.transfer.call(addresscuogF69, uintry4f1T1, {from: accounts[3]});

		assert.equal(uint256n1Q3wu2, BigInt("1690290000000"))
		await expect(DJCoinZski8kM.transfer.call(addresscuogF69, uintry4f1T1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinZski8kM = await DJCoin.new({from: accounts[2]});
		const uintY92SWQL = BigInt("0")
		const addressUxHU5Yy = accounts[1]
		const uintxX0ZEdp = BigInt("648")
		const addressAu90l7Q = accounts[3]
		const boole5lUPTh = await DJCoinZski8kM.transfer.call(addressUxHU5Yy, uintY92SWQL, {from: accounts[3]});
		await DJCoinZski8kM.onlyOwner.call({from: accounts[3]});
		const boolkt1cw7Z = await DJCoinZski8kM.transfer.call(addressAu90l7Q, uintxX0ZEdp, {from: accounts[2]});

		assert.equal(boole5lUPTh, true)
		await expect(DJCoinZski8kM.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinaFCvcD = await DJCoin.new({from: accounts[0]});
		const addressQ7QU9BR = accounts[0]
		const uint3Kf9jS = BigInt("426")
		const uintrgmO4so = BigInt("260")
		const addressYfAAM7C = await DJCoinaFCvcD.transferOwnership.call(addressQ7QU9BR, {from: accounts[0]});
		const uint256lN1qgUy = await DJCoinaFCvcD.burn.call(uintrgmO4so, uint3Kf9jS, {from: accounts[0]});

		assert.equal(uint256lN1qgUy, BigInt("2010540000000"))
	});
})