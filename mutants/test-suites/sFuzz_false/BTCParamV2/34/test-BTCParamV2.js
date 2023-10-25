const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2wT1hat9 = await BTCParamV2.new({from: accounts[5]});
		const addressVsmPhXI = accounts[1]
		const addressQA87aqI = accounts[1]
//		const addressDVyjmlJ = await BTCParamV2wT1hat9.addListener.call(addressVsmPhXI, {from: accounts[1]});
//		const addressSN1xgKD = await BTCParamV2wT1hat9.setParamSetter.call(addressQA87aqI, {from: accounts[3]});
//		const uint256KAUqvJV = await BTCParamV2wT1hat9.btcIncomePerTPerSecInWei.call({from: accounts[1]});

		await expect(BTCParamV2wT1hat9.addListener.call(addressVsmPhXI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Et3EWic = await BTCParamV2.new({from: accounts[0]});
//		await BTCParamV2Et3EWic.onlyParamSetter.call({from: accounts[5]});
//		const uint256n4HNhE = await BTCParamV2Et3EWic.btcPrice.call({from: accounts[2]});
//		await BTCParamV2Et3EWic.updateBtcPrice.call({from: accounts[0]});
//		await BTCParamV2Et3EWic.onlyOwner.call({from: accounts[4]});

		await expect(BTCParamV2Et3EWic.onlyParamSetter.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2y3FxKWe = await BTCParamV2.new({from: accounts[4]});
		const addresssP6s4Db = "0x0000000000000000000000000000000000000001"
		const uintFeWMGm8 = BigInt("1452")
		const addressQHTLFxP = accounts[5]
//		const addresszfj8gND = await BTCParamV2y3FxKWe.transferOwnership.call(addresssP6s4Db, {from: accounts[0]});
//		const uint256KPlC6V6 = await BTCParamV2y3FxKWe.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintFeWMGm8, {from: accounts[4]});
//		const uint256CLnkjd2 = await BTCParamV2y3FxKWe.btcIncomePerTPerSecInWei.call({from: accounts[3]});
//		const address3cRND9 = await BTCParamV2y3FxKWe.transferOwnership.call(addressQHTLFxP, {from: accounts[1]});
//		await BTCParamV2y3FxKWe.onlyParamSetter.call({from: accounts[2]});

		await expect(BTCParamV2y3FxKWe.transferOwnership.call(addresssP6s4Db, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2dd6irvB = await BTCParamV2.new({from: accounts[0]});
		const boolwSqJ13 = false
		const addresss3PQmPR = accounts[0]
		const uintMY9tZNO = BigInt("1413")
		const uint187syQ = BigInt("1995")
		const addressJp7ThT = accounts[0]
		const addressaj2pFlP = accounts[1]
		const addressmglYavu = accounts[5]
		const boolVx8uKg2 = true
		const addressNuutR9 = accounts[3]
		const uintHU55sRl = BigInt("1273")
		const uintad0ClIp = BigInt("1045")
		const address6dWXDE = accounts[1]
		const addressXmGyrgz = accounts[3]
//		const addressGtyTU9x = await BTCParamV2dd6irvB.initialize.call(addressaj2pFlP, addressJp7ThT, uint187syQ, uintMY9tZNO, addresss3PQmPR, boolwSqJ13, {from: accounts[0]});
//		const booliMzeaYi = await BTCParamV2dd6irvB.removeListener.call(addressmglYavu, {from: accounts[2]});
//		const addressotbGtlf = await BTCParamV2dd6irvB.initialize.call(addressXmGyrgz, address6dWXDE, uintad0ClIp, uintHU55sRl, addressNuutR9, boolVx8uKg2, {from: accounts[3]});
//		await BTCParamV2dd6irvB.onlyOwner.call({from: accounts[2]});

		await expect(BTCParamV2dd6irvB.initialize.call(addressaj2pFlP, addressJp7ThT, uint187syQ, uintMY9tZNO, addresss3PQmPR, boolwSqJ13, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2dd6irvB = await BTCParamV2.new({from: accounts[0]});
		const uintyqBD9kK = BigInt("1490")
		const addressSj09bMq = accounts[3]
//		const uint256K5FLou6 = await BTCParamV2dd6irvB.btcIncomePerTPerSecInWei.call({from: accounts[1]});
//		const uint256xLxHST = await BTCParamV2dd6irvB.setBtcBlockReward.call(uintyqBD9kK, {from: accounts[5]});
//		await BTCParamV2dd6irvB.onlyParamSetter.call({from: accounts[3]});
//		await BTCParamV2dd6irvB.onlyOwner.call({from: accounts[2]});
//		const addressqKKPs1A = await BTCParamV2dd6irvB.addListener.call(addressSj09bMq, {from: accounts[2]});

		await expect(BTCParamV2dd6irvB.btcIncomePerTPerSecInWei.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2dd6irvB = await BTCParamV2.new({from: accounts[0]});
		const uint256fQkdidK = await BTCParamV2dd6irvB.btcPrice.call({from: "0x0000000000000000000000000000000000000001"});
//		await BTCParamV2dd6irvB.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256fQkdidK, BigInt("0"))
		await expect(BTCParamV2dd6irvB.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2vO44tE8 = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEpyGXSN = accounts[4]
		const addressH5osrzJ = accounts[4]
		const uintlCs1riy = BigInt("1656")
		const boolPdxR8wY = await BTCParamV2vO44tE8.removeListener.call(addressEpyGXSN, {from: accounts[4]});
		const uint256q6wFbLR = await BTCParamV2vO44tE8.btcPrice.call({from: "0x0000000000000000000000000000000000000001"});
		const addressJJ7IFr = await BTCParamV2vO44tE8.addListener.call(addressH5osrzJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256znwuV9m = await BTCParamV2vO44tE8.btcPrice.call({from: accounts[4]});
		const uint256OUsfiPp = await BTCParamV2vO44tE8.setBtcNetDiff.call(uintlCs1riy, {from: "0x0000000000000000000000000000000000000001"});
	});
})