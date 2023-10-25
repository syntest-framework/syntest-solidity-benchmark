const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressUCvlSzY = accounts[5]
		const addressU7pRdv = accounts[1]
		const uintSLvKi9 = BigInt("1943")
		const uintL5Lc1KI = BigInt("1898")
		const MisesLegacyPoolUPmXJnq = await MisesLegacyPool.new(addressUCvlSzY, addressU7pRdv, uintSLvKi9, uintL5Lc1KI, {from: "0x0000000000000000000000000000000000000001"});
		const addressy7Riqy2 = accounts[0]
		const addressdToVNmd = accounts[2]
		const addressG0kKlsd = accounts[0]
		const uint256T9xiEBz = await MisesLegacyPoolUPmXJnq.earned.call(addressy7Riqy2, {from: accounts[4]});
		await MisesLegacyPoolUPmXJnq.exit.call({from: accounts[2]});
		const uint256nSiw8Av = await MisesLegacyPoolUPmXJnq.earned.call(addressdToVNmd, {from: accounts[0]});
		const uint256SsXSrCh = await MisesLegacyPoolUPmXJnq.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256vkOyZ03 = await MisesLegacyPoolUPmXJnq.earned.call(addressG0kKlsd, {from: accounts[1]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressfnZ0MvH = accounts[2]
		const addresshar4DJw = accounts[1]
		const uints7InSd9 = BigInt("1206")
		const uintcaccZhS = BigInt("574")
		const MisesLegacyPoolMq6QJF3 = await MisesLegacyPool.new(addressfnZ0MvH, addresshar4DJw, uints7InSd9, uintcaccZhS, {from: accounts[4]});
		const uintxyWRWF = BigInt("1754")
		const uintxB0xSr = BigInt("744")
//		await MisesLegacyPoolMq6QJF3.exit.call({from: accounts[3]});
//		const uint256Q7y9fH = await MisesLegacyPoolMq6QJF3.notifyRewardAmount.call(uintxyWRWF, {from: accounts[3]});
//		const uint256ocrlyhf = await MisesLegacyPoolMq6QJF3.notifyRewardAmount.call(uintxB0xSr, {from: accounts[4]});
		await MisesLegacyPoolMq6QJF3.exit.call({from: accounts[3]});
//		const uint256GVaFrI9 = await MisesLegacyPoolMq6QJF3.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(MisesLegacyPoolMq6QJF3.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresstMsSDcj = accounts[3]
		const addressL89fJp8 = accounts[1]
		const uinte1xZeEu = BigInt("392")
		const uintPLKjTP = BigInt("1013")
		const MisesLegacyPoolRTYyQFt = await MisesLegacyPool.new(addresstMsSDcj, addressL89fJp8, uinte1xZeEu, uintPLKjTP, {from: accounts[1]});
		const uintUDEwfLw = BigInt("917")
		const uintaoZw5jU = BigInt("1669")
		const uintfuXvjpt = BigInt("1247")
//		const uint256ASKtwav = await MisesLegacyPoolRTYyQFt.withdraw.call(uintUDEwfLw, {from: accounts[3]});
//		const uint256IhrKt0D = await MisesLegacyPoolRTYyQFt.rewardPerToken.call({from: accounts[3]});
//		const uint256H2zPN3k = await MisesLegacyPoolRTYyQFt.withdraw.call(uintaoZw5jU, {from: accounts[2]});
//		await MisesLegacyPoolRTYyQFt.getReward.call({from: accounts[0]});
//		await MisesLegacyPoolRTYyQFt.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256txg6StT = await MisesLegacyPoolRTYyQFt.notifyRewardAmount.call(uintfuXvjpt, {from: accounts[5]});

		await expect(MisesLegacyPoolRTYyQFt.withdraw.call(uintUDEwfLw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressfMa0zHY = accounts[2]
		const addressv3zhR6h = accounts[1]
		const uintTZQXYLd = BigInt("757")
		const uintqSTqHG = BigInt("964")
		const MisesLegacyPoolikngSy = await MisesLegacyPool.new(addressfMa0zHY, addressv3zhR6h, uintTZQXYLd, uintqSTqHG, {from: accounts[4]});
		const uintDgiMZrn = BigInt("1365")
//		await MisesLegacyPoolikngSy.getReward.call({from: accounts[3]});
//		const uint256m0uhMMk = await MisesLegacyPoolikngSy.rewardPerToken.call({from: accounts[0]});
//		const uint256eL1zFOp = await MisesLegacyPoolikngSy.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256f0hdKK = await MisesLegacyPoolikngSy.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256gMEE30v = await MisesLegacyPoolikngSy.stake.call(uintDgiMZrn, {from: accounts[3]});

		await expect(MisesLegacyPoolikngSy.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressMF7JYyb = accounts[5]
		const addressFg5q3d = accounts[1]
		const uintizf6f0 = BigInt("877")
		const uintiXi6sd2 = BigInt("906")
		const MisesLegacyPoolpWnRJ5j = await MisesLegacyPool.new(addressMF7JYyb, addressFg5q3d, uintizf6f0, uintiXi6sd2, {from: accounts[5]});
		const addressGWJRtZy = accounts[2]
		const addressDInxj6h = accounts[1]
//		await MisesLegacyPoolpWnRJ5j.getReward.call({from: accounts[4]});
//		await MisesLegacyPoolpWnRJ5j.getReward.call({from: accounts[0]});
//		const addressCruS7zQ = await MisesLegacyPoolpWnRJ5j.updateReward.call(addressGWJRtZy, {from: accounts[1]});
//		const uint256FFFptF1 = await MisesLegacyPoolpWnRJ5j.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256MO2fI9 = await MisesLegacyPoolpWnRJ5j.earned.call(addressDInxj6h, {from: accounts[2]});

		await expect(MisesLegacyPoolpWnRJ5j.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresseoJUTz4 = accounts[2]
		const addressF32lQMo = accounts[1]
		const uintJGDNgIX = BigInt("1206")
		const uintaMzPrQd = BigInt("574")
		const MisesLegacyPoolMq6QJF3 = await MisesLegacyPool.new(addresseoJUTz4, addressF32lQMo, uintJGDNgIX, uintaMzPrQd, {from: accounts[4]});
		const uintK2ywgqy = BigInt("1754")
		const uintAiilX5v = BigInt("744")
//		const uint256Q7y9fH = await MisesLegacyPoolMq6QJF3.notifyRewardAmount.call(uintK2ywgqy, {from: accounts[3]});
//		const uint256ocrlyhf = await MisesLegacyPoolMq6QJF3.notifyRewardAmount.call(uintAiilX5v, {from: accounts[4]});
//		await MisesLegacyPoolMq6QJF3.exit.call({from: accounts[3]});
//		const uint256GVaFrI9 = await MisesLegacyPoolMq6QJF3.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(MisesLegacyPoolMq6QJF3.notifyRewardAmount.call(uintK2ywgqy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})