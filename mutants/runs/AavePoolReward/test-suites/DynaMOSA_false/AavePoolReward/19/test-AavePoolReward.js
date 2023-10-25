const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardRd6zkQT = await AavePoolReward.new({from: accounts[4]});
		const uint2eM6Lh = BigInt("1233")
		const addressMUlOQG = accounts[0]
		await AavePoolRewardRd6zkQT.getReward.call({from: accounts[3]});
		const uint256MxuB28K = await AavePoolRewardRd6zkQT.notifyRewardAmount.call(uint2eM6Lh, {from: "0x0000000000000000000000000000000000000001"});
		const addressblU6lZe = await AavePoolRewardRd6zkQT.dev.call(addressMUlOQG, {from: accounts[3]});

		await expect(AavePoolRewardRd6zkQT.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardWxMJwoC = await AavePoolReward.new({from: accounts[1]});
		const addressel2GHB5 = accounts[0]
		const uintzNIrI8z = BigInt("346")
		const uint256y5UDnfr = await AavePoolRewardWxMJwoC.rewardPerToken.call({from: accounts[4]});
		const uint256WWVS2ze = await AavePoolRewardWxMJwoC.earned.call(addressel2GHB5, {from: accounts[5]});
		const uint256mFFVHd = await AavePoolRewardWxMJwoC.withdraw.call(uintzNIrI8z, {from: accounts[5]});
		await AavePoolRewardWxMJwoC.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256WWVS2ze, BigInt("0"))
		assert.equal(uint256y5UDnfr, BigInt("0"))
		await expect(AavePoolRewardWxMJwoC.withdraw.call(uintzNIrI8z, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardn4umRLM = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKeAKLt2 = accounts[3]
		const addressONXFNAl = await AavePoolRewardn4umRLM.dev.call(addressKeAKLt2, {from: "0x0000000000000000000000000000000000000001"});
		await AavePoolRewardn4umRLM.exit.call({from: accounts[1]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardF2bkyOz = await AavePoolReward.new({from: accounts[4]});
		const uintx8L0CJy = BigInt("180")
		await AavePoolRewardF2bkyOz.exit.call({from: accounts[0]});
		const uint256iYbmAjD = await AavePoolRewardF2bkyOz.lastTimeRewardApplicable.call({from: accounts[5]});
		await AavePoolRewardF2bkyOz.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256cFmGka = await AavePoolRewardF2bkyOz.notifyRewardAmount.call(uintx8L0CJy, {from: accounts[1]});
		const uint256LrDfEf = await AavePoolRewardF2bkyOz.rewardPerToken.call({from: accounts[1]});

		await expect(AavePoolRewardF2bkyOz.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolReward6W97Au = await AavePoolReward.new({from: accounts[2]});
		const addressIhOrWOa = accounts[4]
		const addressxI473x7 = accounts[0]
		const addressAyn0Zyd = accounts[0]
		const uintCgqVnvq = BigInt("176")
		const uint1XOI1z = BigInt("922")
		const uintKMEWpfZ = BigInt("480")
		const uint256TfUa4bh = await AavePoolReward6W97Au.earned.call(addressIhOrWOa, {from: accounts[3]});
		const addressRKw7ocm = await AavePoolReward6W97Au.dev.call(addressxI473x7, {from: accounts[3]});
		const uint256EDy86b = await AavePoolReward6W97Au.earned.call(addressAyn0Zyd, {from: accounts[1]});
		const uint256Y9Kvcdp = await AavePoolReward6W97Au.notifyRewardAmount.call(uintCgqVnvq, {from: accounts[3]});
		const uint256lCWn2l = await AavePoolReward6W97Au.stake.call(uint1XOI1z, {from: accounts[3]});
		const uint256HnB8W5d = await AavePoolReward6W97Au.notifyRewardAmount.call(uintKMEWpfZ, {from: accounts[4]});

		assert.equal(uint256TfUa4bh, BigInt("0"))
		await expect(AavePoolReward6W97Au.dev.call(addressxI473x7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolReward6W97Au = await AavePoolReward.new({from: accounts[2]});
		const addressa8v15c = accounts[3]
		const addressBMdDG7o = accounts[4]
		const uintfDS5uXN = BigInt("943")
		const uinth1Yy2K2 = BigInt("175")
		const uintgumaBEL = BigInt("480")
		const uint256umSbXz3 = await AavePoolReward6W97Au.earned.call(addressa8v15c, {from: accounts[1]});
		const uint256TfUa4bh = await AavePoolReward6W97Au.earned.call(addressBMdDG7o, {from: accounts[3]});
		const uint256lCWn2l = await AavePoolReward6W97Au.stake.call(uintfDS5uXN, {from: accounts[3]});
		const uint256Kscd7VP = await AavePoolReward6W97Au.stake.call(uinth1Yy2K2, {from: accounts[4]});
		const uint256HnB8W5d = await AavePoolReward6W97Au.notifyRewardAmount.call(uintgumaBEL, {from: accounts[4]});

		assert.equal(uint256TfUa4bh, BigInt("0"))
		assert.equal(uint256umSbXz3, BigInt("0"))
		await expect(AavePoolReward6W97Au.stake.call(uintfDS5uXN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardUim7ZiT = await AavePoolReward.new({from: accounts[1]});
		const uintF16GyPs = BigInt("1947")
		const uintEQ087Tm = BigInt("160")
		const uintcABqz6z = BigInt("1433")
		const uint256ivEpeza = await AavePoolRewardUim7ZiT.notifyRewardAmount.call(uintF16GyPs, {from: accounts[1]});
		const uint256WU7UUiy = await AavePoolRewardUim7ZiT.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256kNUDfn = await AavePoolRewardUim7ZiT.stake.call(uintEQ087Tm, {from: accounts[2]});
		const uint256Pihh95o = await AavePoolRewardUim7ZiT.notifyRewardAmount.call(uintcABqz6z, {from: accounts[0]});

		assert.equal(uint256WU7UUiy, BigInt("0"))
		await expect(AavePoolRewardUim7ZiT.stake.call(uintEQ087Tm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardN9vE9XM = await AavePoolReward.new({from: accounts[1]});
		const addresscShqWu7 = accounts[0]
		const uintDZWMpid = BigInt("274")
		const addressxubSO0T = accounts[2]
		const addresstVk0kOx = await AavePoolRewardN9vE9XM.updateReward.call(addresscShqWu7, {from: accounts[5]});
		const uint256x6RF8re = await AavePoolRewardN9vE9XM.withdraw.call(uintDZWMpid, {from: accounts[2]});
		const uint256udULtqw = await AavePoolRewardN9vE9XM.earned.call(addressxubSO0T, {from: accounts[1]});

		await expect(AavePoolRewardN9vE9XM.updateReward.call(addresscShqWu7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})