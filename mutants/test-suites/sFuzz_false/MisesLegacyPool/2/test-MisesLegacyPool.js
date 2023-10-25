const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const address0qkqOs = accounts[4]
		const addressle8lj3K = accounts[0]
		const uintIQzAV3N = BigInt("1931")
		const uintAbYcHA = BigInt("1359")
		const MisesLegacyPoolFYoOGXV = await MisesLegacyPool.new(address0qkqOs, addressle8lj3K, uintIQzAV3N, uintAbYcHA, {from: accounts[2]});
		const uint256PBkq8CZ = await MisesLegacyPoolFYoOGXV.rewardPerToken.call({from: accounts[5]});
//		await MisesLegacyPoolFYoOGXV.exit.call({from: accounts[3]});

		assert.equal(uint256PBkq8CZ, BigInt("0"))
		await expect(MisesLegacyPoolFYoOGXV.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressqGSAPcV = accounts[1]
		const addressKNHBLj = accounts[2]
		const uintEVLeXsc = BigInt("957")
		const uintON3BpuX = BigInt("672")
		const MisesLegacyPoolcb9XXUT = await MisesLegacyPool.new(addressqGSAPcV, addressKNHBLj, uintEVLeXsc, uintON3BpuX, {from: accounts[2]});
		const uintYVUPC0Y = BigInt("53")
		const uintbNMjscF = BigInt("1555")
		const uintV5EuCvj = BigInt("1179")
//		const uint256AIT7n2w = await MisesLegacyPoolcb9XXUT.notifyRewardAmount.call(uintYVUPC0Y, {from: accounts[2]});
//		const uint256nfl0Rrw = await MisesLegacyPoolcb9XXUT.withdraw.call(uintbNMjscF, {from: accounts[3]});
//		const uint256cscwIg5 = await MisesLegacyPoolcb9XXUT.notifyRewardAmount.call(uintV5EuCvj, {from: accounts[3]});

		await expect(MisesLegacyPoolcb9XXUT.notifyRewardAmount.call(uintYVUPC0Y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressP7zUeCh = accounts[0]
		const addressoCgUmJ = accounts[3]
		const uintLWN1ZAX = BigInt("434")
		const uintzp7mY8A = BigInt("1156")
		const MisesLegacyPool0n02LB = await MisesLegacyPool.new(addressP7zUeCh, addressoCgUmJ, uintLWN1ZAX, uintzp7mY8A, {from: accounts[2]});
		const uinthumG2qH = BigInt("1351")
		const uintnPWPVc = BigInt("743")
		const addressV4T2qYX = accounts[1]
//		const uint256FWeBK1d = await MisesLegacyPool0n02LB.stake.call(uinthumG2qH, {from: accounts[1]});
//		const uint256PBnEsSh = await MisesLegacyPool0n02LB.notifyRewardAmount.call(uintnPWPVc, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256tFfL45p = await MisesLegacyPool0n02LB.earned.call(addressV4T2qYX, {from: accounts[2]});
//		await MisesLegacyPool0n02LB.exit.call({from: accounts[2]});

		await expect(MisesLegacyPool0n02LB.stake.call(uinthumG2qH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressbr0EcUl = "0x0000000000000000000000000000000000000001"
		const addressgu0bNf8 = accounts[2]
		const uintgN6jvB = BigInt("751")
		const uintWnf9Zv5 = BigInt("687")
		const MisesLegacyPoolAXszJy = await MisesLegacyPool.new(addressbr0EcUl, addressgu0bNf8, uintgN6jvB, uintWnf9Zv5, {from: accounts[5]});
		const addressx0WSqBY = accounts[4]
		const uintGb4FtJj = BigInt("1669")
		const addressgBPoKkH = accounts[0]
		const uintLBlz5PH = BigInt("2005")
		const uint256xMYU9ga = await MisesLegacyPoolAXszJy.earned.call(addressx0WSqBY, {from: accounts[4]});
//		const uint256cBgqdA3 = await MisesLegacyPoolAXszJy.withdraw.call(uintGb4FtJj, {from: accounts[2]});
//		await MisesLegacyPoolAXszJy.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256mU4hne5 = await MisesLegacyPoolAXszJy.earned.call(addressgBPoKkH, {from: accounts[1]});
//		const uint256jQIZx0 = await MisesLegacyPoolAXszJy.withdraw.call(uintLBlz5PH, {from: accounts[4]});

		assert.equal(uint256xMYU9ga, BigInt("0"))
		await expect(MisesLegacyPoolAXszJy.withdraw.call(uintGb4FtJj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const address62p7ZL = accounts[2]
		const addresspfTEKou = accounts[3]
		const uintjU54ufv = BigInt("1030")
		const uintdNfDtpO = BigInt("281")
		const MisesLegacyPool86ip9U = await MisesLegacyPool.new(address62p7ZL, addresspfTEKou, uintjU54ufv, uintdNfDtpO, {from: accounts[1]});
		const addressa8QdykY = accounts[1]
		const addressR7vyjIR = accounts[0]
		const uint256I629QmT = await MisesLegacyPool86ip9U.rewardPerToken.call({from: accounts[1]});
//		const addressS27kdwH = await MisesLegacyPool86ip9U.updateReward.call(addressa8QdykY, {from: accounts[3]});
//		const addressbqOoMh3 = await MisesLegacyPool86ip9U.updateReward.call(addressR7vyjIR, {from: accounts[2]});

		assert.equal(uint256I629QmT, BigInt("0"))
		await expect(MisesLegacyPool86ip9U.updateReward.call(addressa8QdykY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressE80urwV = accounts[4]
		const addressXhcSaSq = "0x0000000000000000000000000000000000000001"
		const uintFAUMcMv = BigInt("1036")
		const uinto2rdTgK = BigInt("911")
		const MisesLegacyPoolrvbT10 = await MisesLegacyPool.new(addressE80urwV, addressXhcSaSq, uintFAUMcMv, uinto2rdTgK, {from: "0x0000000000000000000000000000000000000001"});
		const uintYXULZp7 = BigInt("791")
		const uint256HvaUxL8 = await MisesLegacyPoolrvbT10.stake.call(uintYXULZp7, {from: accounts[0]});
		const uint256oMzkgKk = await MisesLegacyPoolrvbT10.lastTimeRewardApplicable.call({from: accounts[1]});
		await MisesLegacyPoolrvbT10.exit.call({from: accounts[3]});
	});

	it('test for MisesLegacyPool', async () => {
		const addresswGOBhfR = "0x0000000000000000000000000000000000000001"
		const addressIAUgNQy = accounts[1]
		const uintp4H30Ls = BigInt("1698")
		const uintpd1UNnv = BigInt("939")
		const MisesLegacyPoolCgqZRo1 = await MisesLegacyPool.new(addresswGOBhfR, addressIAUgNQy, uintp4H30Ls, uintpd1UNnv, {from: accounts[2]});
		const uintGEN1I73 = BigInt("521")
		const addresswdSrYtb = "0x0000000000000000000000000000000000000001"
//		await MisesLegacyPoolCgqZRo1.getReward.call({from: accounts[1]});
//		const uint256x69RGnl = await MisesLegacyPoolCgqZRo1.notifyRewardAmount.call(uintGEN1I73, {from: accounts[3]});
//		const addressAadxvw7 = await MisesLegacyPoolCgqZRo1.updateReward.call(addresswdSrYtb, {from: "0x0000000000000000000000000000000000000001"});
//		await MisesLegacyPoolCgqZRo1.exit.call({from: accounts[0]});
//		await MisesLegacyPoolCgqZRo1.getReward.call({from: accounts[5]});

		await expect(MisesLegacyPoolCgqZRo1.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})