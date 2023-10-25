const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressDa58Wz7 = accounts[3]
		const addressGsk17cn = accounts[2]
		const SpiritCoinRq0Y5x4 = await SpiritCoin.new(addressDa58Wz7, addressGsk17cn, {from: "0x0000000000000000000000000000000000000001"});
		const addressgIPFeQE = accounts[5]
		const uinthfshWVH = BigInt("1255")
		const addresszt69MNP = accounts[2]
		const addressDhO0gv9 = accounts[3]
		const addressk6yOLLT = await SpiritCoinRq0Y5x4.setMinter.call(addressgIPFeQE, {from: accounts[2]});
		const boolxWXbXjF = await SpiritCoinRq0Y5x4.transferFrom.call(addressDhO0gv9, addresszt69MNP, uinthfshWVH, {from: accounts[3]});
	});

	it('test for SpiritCoin', async () => {
		const addressUXtB8CF = accounts[4]
		const addressNFpBrk = accounts[2]
		const SpiritCoinMxvXHCu = await SpiritCoin.new(addressUXtB8CF, addressNFpBrk, {from: accounts[3]});
		const addressUFeC0Zm = accounts[3]
		const addressuz2nJhR = accounts[4]
		const uintcrhALLb = BigInt("251")
		const address1wudue = accounts[4]
		const addressfv3rab = accounts[3]
		const addressHVKPk7x = accounts[0]
		const addresstctW3M2 = accounts[2]
		const addressmqK18yw = accounts[4]
		const uintgbwfKhm = await SpiritCoinMxvXHCu.allowance.call(addressuz2nJhR, addressUFeC0Zm, {from: "0x0000000000000000000000000000000000000001"});
//		const addressQ2MlkyR = await SpiritCoinMxvXHCu.mint.call(address1wudue, uintcrhALLb, {from: accounts[0]});
//		const uintGEX9aRN = await SpiritCoinMxvXHCu.allowance.call(addressHVKPk7x, addressfv3rab, {from: accounts[1]});
//		const uintutoNE4P = await SpiritCoinMxvXHCu.allowance.call(addressmqK18yw, addresstctW3M2, {from: accounts[4]});

		assert.equal(uintgbwfKhm, BigInt("0"))
		await expect(SpiritCoinMxvXHCu.mint.call(address1wudue, uintcrhALLb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressWuwlHv5 = accounts[2]
		const addressSuilyK1 = accounts[3]
		const SpiritCoinyjRROvF = await SpiritCoin.new(addressWuwlHv5, addressSuilyK1, {from: accounts[5]});
		const addressdc72yjo = accounts[3]
		const addressm9T2AFr = "0x0000000000000000000000000000000000000001"
		const uintG3WP2Q = BigInt("179")
		const addresszaw6SRt = accounts[1]
		const addressJxEbrf8 = accounts[3]
		const uintOMa9nFE = BigInt("1118")
		const addressBXmXb0f = accounts[2]
		const addressgdCVxY = accounts[0]
		const uintYYGTU8y = BigInt("1886")
		const addressiibtcl = accounts[4]
		const uintVCrExyR = BigInt("851")
		const addressYMXQ9gi = accounts[0]
		const uintRYzetDZ = await SpiritCoinyjRROvF.allowance.call(addressm9T2AFr, addressdc72yjo, {from: accounts[3]});
		const boolYQ5kr8p = await SpiritCoinyjRROvF.approve.call(addresszaw6SRt, uintG3WP2Q, {from: accounts[4]});
//		const addressAPWIPUZ = await SpiritCoinyjRROvF.setMinter.call(addressJxEbrf8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolow3wlJJ = await SpiritCoinyjRROvF.transferFrom.call(addressgdCVxY, addressBXmXb0f, uintOMa9nFE, {from: accounts[1]});
//		const bool1dXvjF = await SpiritCoinyjRROvF.approve.call(addressiibtcl, uintYYGTU8y, {from: accounts[2]});
//		const bools7Bl1g = await SpiritCoinyjRROvF.approve.call(addressYMXQ9gi, uintVCrExyR, {from: accounts[3]});

		assert.equal(boolYQ5kr8p, true)
		assert.equal(uintRYzetDZ, BigInt("0"))
		await expect(SpiritCoinyjRROvF.setMinter.call(addressJxEbrf8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresszW79dTI = accounts[1]
		const addressNkp0CvJ = accounts[2]
		const SpiritCoinRptPO0F = await SpiritCoin.new(addresszW79dTI, addressNkp0CvJ, {from: accounts[1]});
		const uintz3b2HlN = BigInt("777")
		const addressCdMkMfA = accounts[1]
		const uintay2anse = BigInt("1106")
		const address1Dx7yJ = accounts[4]
		const uintTwOC9ll = BigInt("1526")
		const addressxr9Qp0S = accounts[5]
//		const boolegNV0fB = await SpiritCoinRptPO0F.transfer.call(addressCdMkMfA, uintz3b2HlN, {from: accounts[3]});
//		const booljJCLZwm = await SpiritCoinRptPO0F.transfer.call(address1Dx7yJ, uintay2anse, {from: accounts[5]});
//		const boolcT0IfWm = await SpiritCoinRptPO0F.approve.call(addressxr9Qp0S, uintTwOC9ll, {from: accounts[5]});

		await expect(SpiritCoinRptPO0F.transfer.call(addressCdMkMfA, uintz3b2HlN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressSOkUrLm = accounts[3]
		const addressCuoqGW8 = accounts[0]
		const SpiritCoinl4aPFxR = await SpiritCoin.new(addressSOkUrLm, addressCuoqGW8, {from: accounts[5]});
		const addresstRwPln1 = "0x0000000000000000000000000000000000000001"
		const addressWQ8utdX = "0x0000000000000000000000000000000000000001"
		const uintd1PZRrn = BigInt("1258")
		const addressbXvh3H = accounts[0]
		const uintpPJGCTN = BigInt("2004")
		const addressFTyBBJ = accounts[3]
		const addressrG7cuhl = accounts[0]
		const addressu72Clh4 = accounts[0]
		const uintqRbraX = await SpiritCoinl4aPFxR.allowance.call(addressWQ8utdX, addresstRwPln1, {from: accounts[0]});
		const boolq41HpFV = await SpiritCoinl4aPFxR.transfer.call(addressbXvh3H, uintd1PZRrn, {from: accounts[3]});
//		const addressPXIrow4 = await SpiritCoinl4aPFxR.mint.call(addressFTyBBJ, uintpPJGCTN, {from: accounts[1]});
//		const uintBEZ3e62 = await SpiritCoinl4aPFxR.allowance.call(addressu72Clh4, addressrG7cuhl, {from: accounts[2]});

		assert.equal(boolq41HpFV, true)
		assert.equal(uintqRbraX, BigInt("0"))
		await expect(SpiritCoinl4aPFxR.mint.call(addressFTyBBJ, uintpPJGCTN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressy8lCiZO = accounts[4]
		const addressNRmTUU3 = accounts[1]
		const SpiritCoinhhdC9xA = await SpiritCoin.new(addressy8lCiZO, addressNRmTUU3, {from: accounts[4]});
		const addressl9pv8d4 = accounts[0]
		const uintomUQmU2 = BigInt("1188")
		const addressbDfarxP = accounts[3]
		const uintm3Ydu9L = BigInt("921")
		const addressKdFLv8W = accounts[4]
		const uintr9PFCpc = await SpiritCoinhhdC9xA.balanceOf.call(addressl9pv8d4, {from: accounts[0]});
		const boolDYpyXOZ = await SpiritCoinhhdC9xA.approve.call(addressbDfarxP, uintomUQmU2, {from: accounts[2]});
		const boolQaenMyX = await SpiritCoinhhdC9xA.approve.call(addressKdFLv8W, uintm3Ydu9L, {from: accounts[0]});

		assert.equal(boolDYpyXOZ, true)
		assert.equal(boolQaenMyX, true)
		assert.equal(uintr9PFCpc, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const address8Qul6B = accounts[4]
		const addressiajVFJi = accounts[1]
		const SpiritCoinhhdC9xA = await SpiritCoin.new(address8Qul6B, addressiajVFJi, {from: accounts[4]});
		const uintYPhW4W = BigInt("1188")
		const addressnSaaDxT = accounts[2]
		const uintdbfBa0B = BigInt("1405")
		const addressQqCHzLD = accounts[3]
		const addressFhXdEor = accounts[2]
		const uintznlPTJ5 = BigInt("921")
		const addressm0CKTJA = accounts[4]
		const boolDYpyXOZ = await SpiritCoinhhdC9xA.approve.call(addressnSaaDxT, uintYPhW4W, {from: accounts[2]});
//		const boolFA4cmR = await SpiritCoinhhdC9xA.transferFrom.call(addressFhXdEor, addressQqCHzLD, uintdbfBa0B, {from: accounts[1]});
//		const boolQaenMyX = await SpiritCoinhhdC9xA.approve.call(addressm0CKTJA, uintznlPTJ5, {from: accounts[0]});

		assert.equal(boolDYpyXOZ, true)
		await expect(SpiritCoinhhdC9xA.transferFrom.call(addressFhXdEor, addressQqCHzLD, uintdbfBa0B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressWMG0aiv = accounts[0]
		const addressB3w1Kfh = accounts[1]
		const SpiritCoincszKPFt = await SpiritCoin.new(addressWMG0aiv, addressB3w1Kfh, {from: accounts[1]});
		const uintgwubx8D = BigInt("864")
		const addressrtf2akp = "0x0000000000000000000000000000000000000001"
		const addressRoV1seg = accounts[5]
		const addressdhDt66D = accounts[4]
		const addressCj2MPn = accounts[1]
		const addressFvB1Oa9 = accounts[1]
		const addressv6EEI76 = accounts[4]
		const uintmX6LL48 = BigInt("331")
		const addressTDS2DQb = accounts[1]
		const addresse2lO6uQ = await SpiritCoincszKPFt.mint.call(addressrtf2akp, uintgwubx8D, {from: accounts[1]});
		const addressA8K0n8k = await SpiritCoincszKPFt.setMinter.call(addressRoV1seg, {from: accounts[1]});
		const uintYmFsaRB = await SpiritCoincszKPFt.allowance.call(addressCj2MPn, addressdhDt66D, {from: accounts[4]});
		const uintVRKwM61 = await SpiritCoincszKPFt.allowance.call(addressv6EEI76, addressFvB1Oa9, {from: "0x0000000000000000000000000000000000000001"});
//		const addressZKMUifR = await SpiritCoincszKPFt.mint.call(addressTDS2DQb, uintmX6LL48, {from: accounts[5]});

		assert.equal(uintVRKwM61, BigInt("0"))
		assert.equal(uintYmFsaRB, BigInt("0"))
		await expect(SpiritCoincszKPFt.mint.call(addressTDS2DQb, uintmX6LL48, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressr86RV8W = accounts[0]
		const addressbzz4icU = accounts[1]
		const SpiritCoincszKPFt = await SpiritCoin.new(addressr86RV8W, addressbzz4icU, {from: accounts[1]});
		const uintlCVALpQ = BigInt("864")
		const addresstNaQClZ = "0x0000000000000000000000000000000000000000"
		const uintQTRonEK = BigInt("706")
		const addresst3AEjhB = accounts[0]
		const addressSdBSH0Q = accounts[4]
		const addressZCKp1Cy = accounts[5]
		const addressfsBqq0H = accounts[4]
		const addressq2JH4AX = accounts[1]
		const address7UbQPp = accounts[1]
		const addressd3SffDt = accounts[4]
//		const addresse2lO6uQ = await SpiritCoincszKPFt.mint.call(addresstNaQClZ, uintlCVALpQ, {from: accounts[1]});
//		const boolNtSH3Z2 = await SpiritCoincszKPFt.transferFrom.call(addressSdBSH0Q, addresst3AEjhB, uintQTRonEK, {from: accounts[3]});
//		const addressA8K0n8k = await SpiritCoincszKPFt.setMinter.call(addressZCKp1Cy, {from: accounts[1]});
//		const uintYmFsaRB = await SpiritCoincszKPFt.allowance.call(addressq2JH4AX, addressfsBqq0H, {from: accounts[4]});
//		const uintVRKwM61 = await SpiritCoincszKPFt.allowance.call(addressd3SffDt, address7UbQPp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SpiritCoincszKPFt.mint.call(addresstNaQClZ, uintlCVALpQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})