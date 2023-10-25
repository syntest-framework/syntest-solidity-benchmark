const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressupQCjy = accounts[0]
		const addresszFw5joq = accounts[3]
		const uintA9ecTxl = BigInt("909")
		const uintuszADL = BigInt("873")
		const MisesLegacyPoolUhV18BV = await MisesLegacyPool.new(addressupQCjy, addresszFw5joq, uintA9ecTxl, uintuszADL, {from: accounts[2]});
		const uintEjfetO = BigInt("1727")
		const uinthvxzzSY = BigInt("958")
		const uintggvWro = BigInt("1794")
//		await MisesLegacyPoolUhV18BV.exit.call({from: accounts[2]});
//		const uint256sCWPDkz = await MisesLegacyPoolUhV18BV.notifyRewardAmount.call(uintEjfetO, {from: accounts[4]});
//		await MisesLegacyPoolUhV18BV.exit.call({from: accounts[4]});
//		const uint256I8H8DW4 = await MisesLegacyPoolUhV18BV.stake.call(uinthvxzzSY, {from: accounts[4]});
//		const uint256OFyoaIn = await MisesLegacyPoolUhV18BV.withdraw.call(uintggvWro, {from: accounts[2]});

		await expect(MisesLegacyPoolUhV18BV.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressf56puzV = accounts[1]
		const addressd0esjHF = accounts[2]
		const uintQkmGkM1 = BigInt("1681")
		const uintCxyG4M = BigInt("394")
		const MisesLegacyPoolOtQJLJ = await MisesLegacyPool.new(addressf56puzV, addressd0esjHF, uintQkmGkM1, uintCxyG4M, {from: accounts[3]});
		const uintSF4ynn7 = BigInt("162")
//		const uint256zhPmw6w = await MisesLegacyPoolOtQJLJ.notifyRewardAmount.call(uintSF4ynn7, {from: accounts[4]});
//		await MisesLegacyPoolOtQJLJ.checkStart.call({from: accounts[3]});

		await expect(MisesLegacyPoolOtQJLJ.notifyRewardAmount.call(uintSF4ynn7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const address7qCZkl = accounts[3]
		const addressQJD7RpX = accounts[3]
		const uintLShdEzp = BigInt("1477")
		const uintkGMw1g = BigInt("214")
		const MisesLegacyPooljDglbeI = await MisesLegacyPool.new(address7qCZkl, addressQJD7RpX, uintLShdEzp, uintkGMw1g, {from: accounts[3]});
		const uintt1ecCb9 = BigInt("279")
//		const uint256p0f3sag = await MisesLegacyPooljDglbeI.stake.call(uintt1ecCb9, {from: accounts[0]});
//		await MisesLegacyPooljDglbeI.exit.call({from: accounts[1]});
//		await MisesLegacyPooljDglbeI.getReward.call({from: accounts[2]});

		await expect(MisesLegacyPooljDglbeI.stake.call(uintt1ecCb9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressWw7m6NQ = accounts[0]
		const addressvTlbdP5 = "0x0000000000000000000000000000000000000001"
		const uintD95pC86 = BigInt("201")
		const uintTBSFLd = BigInt("155")
		const MisesLegacyPool7sHcYX = await MisesLegacyPool.new(addressWw7m6NQ, addressvTlbdP5, uintD95pC86, uintTBSFLd, {from: accounts[4]});
		const addressEs8LRxw = accounts[1]
		const uintOFlDvPp = BigInt("501")
//		await MisesLegacyPool7sHcYX.getReward.call({from: accounts[1]});
//		const uint256litgplx = await MisesLegacyPool7sHcYX.earned.call(addressEs8LRxw, {from: accounts[0]});
//		const uint256Aa8mpQA = await MisesLegacyPool7sHcYX.withdraw.call(uintOFlDvPp, {from: accounts[1]});
//		const uint256crlTnZr = await MisesLegacyPool7sHcYX.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(MisesLegacyPool7sHcYX.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressU7SQXQY = accounts[1]
		const addressqUjShRK = accounts[0]
		const uintluE3X4O = BigInt("1657")
		const uint0ixWwO = BigInt("1688")
		const MisesLegacyPoolmC5QKD9 = await MisesLegacyPool.new(addressU7SQXQY, addressqUjShRK, uintluE3X4O, uint0ixWwO, {from: accounts[2]});
		const addressgxzJ7Na = accounts[5]
		const uint5pRn0W = BigInt("160")
//		const addressmYfd2RR = await MisesLegacyPoolmC5QKD9.updateReward.call(addressgxzJ7Na, {from: accounts[0]});
//		const uint256sdMpwtQ = await MisesLegacyPoolmC5QKD9.notifyRewardAmount.call(uint5pRn0W, {from: accounts[0]});

		await expect(MisesLegacyPoolmC5QKD9.updateReward.call(addressgxzJ7Na, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressvzmITMu = accounts[1]
		const addressXHf5Kul = "0x0000000000000000000000000000000000000001"
		const uintVUouNoG = BigInt("530")
		const uintYbPou9m = BigInt("999")
		const MisesLegacyPoolS61TDF1 = await MisesLegacyPool.new(addressvzmITMu, addressXHf5Kul, uintVUouNoG, uintYbPou9m, {from: "0x0000000000000000000000000000000000000001"});
		const uintLjrXjGL = BigInt("285")
		const uinth6g2V3h = BigInt("1626")
		const uintuVZpbyq = BigInt("836")
		const uint256xdzpv7i = await MisesLegacyPoolS61TDF1.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Vf6XrD = await MisesLegacyPoolS61TDF1.notifyRewardAmount.call(uintLjrXjGL, {from: accounts[1]});
		const uint256rmc6hXd = await MisesLegacyPoolS61TDF1.stake.call(uinth6g2V3h, {from: accounts[3]});
		await MisesLegacyPoolS61TDF1.exit.call({from: accounts[5]});
		const uint256N3DIdi = await MisesLegacyPoolS61TDF1.withdraw.call(uintuVZpbyq, {from: accounts[3]});
	});
})