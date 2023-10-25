const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2zg2FM2u = await BTCParamV2.new({from: accounts[0]});
		const addressuosg3mB = accounts[4]
		const addressTOZqiLV = accounts[0]
		const uintcADTKZx = BigInt("995")
//		const addressf4JNOPc = await BTCParamV2zg2FM2u.setParamSetter.call(addressuosg3mB, {from: accounts[4]});
//		const addressJhBOIr = await BTCParamV2zg2FM2u.transferOwnership.call(addressTOZqiLV, {from: accounts[2]});
//		const uint256akCW7n0 = await BTCParamV2zg2FM2u.btcIncomePerTPerSecInWei.call({from: accounts[3]});
//		await BTCParamV2zg2FM2u.updateBtcPrice.call({from: accounts[0]});
//		const uint256hYWFsVJ = await BTCParamV2zg2FM2u.setBtcTxFeeRewardRate.call(uintcADTKZx, {from: accounts[0]});
//		await BTCParamV2zg2FM2u.onlyParamSetter.call({from: accounts[2]});

		await expect(BTCParamV2zg2FM2u.setParamSetter.call(addressuosg3mB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2TLf88G7 = await BTCParamV2.new({from: accounts[1]});
		const uintPvUsec = BigInt("143")
		const addressxhrcl56 = accounts[3]
		const uintTnpXpB9 = BigInt("926")
//		const uint256UL84HiX = await BTCParamV2TLf88G7.setBtcNetDiff.call(uintPvUsec, {from: accounts[2]});
//		const addresshl9k1e = await BTCParamV2TLf88G7.addListener.call(addressxhrcl56, {from: accounts[0]});
//		const uint256HHBRA7X = await BTCParamV2TLf88G7.setBtcBlockReward.call(uintTnpXpB9, {from: accounts[4]});
//		await BTCParamV2TLf88G7.onlyOwner.call({from: accounts[0]});

		await expect(BTCParamV2TLf88G7.setBtcNetDiff.call(uintPvUsec, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2eTPFI45 = await BTCParamV2.new({from: accounts[0]});
		const uintbNmo7JP = BigInt("1764")
//		const uint256UFwuYvI = await BTCParamV2eTPFI45.btcIncomePerTPerSecInWei.call({from: accounts[5]});
		const uint256FP4MFdq = await BTCParamV2eTPFI45.btcIncomePerTPerSecInWei.call({from: accounts[5]});
//		const uint256N3jyYvV = await BTCParamV2eTPFI45.setBtcBlockReward.call(uintbNmo7JP, {from: accounts[0]});
//		const uint256DKqFLjY = await BTCParamV2eTPFI45.btcIncomePerTPerSecInWei.call({from: accounts[4]});

		await expect(BTCParamV2eTPFI45.btcIncomePerTPerSecInWei.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV20yaD9H = await BTCParamV2.new({from: accounts[2]});
		const uintXmxyPIv = BigInt("1980")
		const uintWu0T8aT = BigInt("684")
//		await BTCParamV20yaD9H.onlyParamSetter.call({from: accounts[3]});
//		const uint256wMh4KAU = await BTCParamV20yaD9H.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintXmxyPIv, {from: accounts[3]});
//		const uint256fEYLyq = await BTCParamV20yaD9H.setBtcTxFeeRewardRate.call(uintWu0T8aT, {from: accounts[5]});

		await expect(BTCParamV20yaD9H.onlyParamSetter.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV20ohot3 = await BTCParamV2.new({from: accounts[1]});
		const addresspZnyx2A = "0x0000000000000000000000000000000000000001"
		const address8EBRcj = accounts[2]
		const uint256iJxGuh = await BTCParamV20ohot3.btcPrice.call({from: accounts[1]});
//		const addresskU78lYb = await BTCParamV20ohot3.setParamSetter.call(addresspZnyx2A, {from: accounts[4]});
//		await BTCParamV20ohot3.onlyOwner.call({from: accounts[5]});
//		const address2TmdcC = await BTCParamV20ohot3.transferOwnership.call(address8EBRcj, {from: accounts[2]});

		assert.equal(uint256iJxGuh, BigInt("0"))
		await expect(BTCParamV20ohot3.setParamSetter.call(addresspZnyx2A, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV25LFzkF = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const boolyibqqfH = false
		const addresseNj3HL = accounts[0]
		const uintgG9Swdq = BigInt("1746")
		const uintok1ZUEx = BigInt("664")
		const addressTPkldqy = "0x0000000000000000000000000000000000000001"
		const addressdqeA29d = accounts[4]
		const addressItoGE3q = accounts[3]
		const uintq5RxXTI = BigInt("42")
		const addressH3OP949 = await BTCParamV25LFzkF.initialize.call(addressdqeA29d, addressTPkldqy, uintok1ZUEx, uintgG9Swdq, addresseNj3HL, boolyibqqfH, {from: accounts[5]});
		const addressgahyt9 = await BTCParamV25LFzkF.addListener.call(addressItoGE3q, {from: accounts[0]});
		const uint256q86SCa = await BTCParamV25LFzkF.setBtcBlockReward.call(uintq5RxXTI, {from: accounts[0]});
		await BTCParamV25LFzkF.onlyParamSetter.call({from: accounts[5]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2zVx2K9p = await BTCParamV2.new({from: accounts[5]});
		const boolX4LBT2x = true
		const addressx5WyG1X = accounts[3]
		const uintgkhzztd = BigInt("1865")
		const uintkJm57iv = BigInt("790")
		const addressHqTeNG1 = accounts[5]
		const addressITYM5z = accounts[0]
		const addressCKV2Bai = accounts[0]
//		const addressEFefjyQ = await BTCParamV2zVx2K9p.initialize.call(addressITYM5z, addressHqTeNG1, uintkJm57iv, uintgkhzztd, addressx5WyG1X, boolX4LBT2x, {from: accounts[4]});
//		const addressz0XP8p = await BTCParamV2zVx2K9p.transferOwnership.call(addressCKV2Bai, {from: accounts[0]});
//		await BTCParamV2zVx2K9p.onlyParamSetter.call({from: accounts[4]});

		await expect(BTCParamV2zVx2K9p.initialize.call(addressITYM5z, addressHqTeNG1, uintkJm57iv, uintgkhzztd, addressx5WyG1X, boolX4LBT2x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})