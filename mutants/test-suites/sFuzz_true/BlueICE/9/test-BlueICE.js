const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEgzaPu0B = await BlueICE.new({from: accounts[2]});
		const addressvs8Mcfv = await BlueICEgzaPu0B.owner.call({from: accounts[0]});
		const uint256GhTRfQ6 = await BlueICEgzaPu0B.getCurrentRewardReserve.call({from: accounts[4]});

		assert.equal(addressvs8Mcfv, 0xFf1604F0199B6a79e20C08E2Feffa06dD3766796)
		assert.equal(uint256GhTRfQ6, BigInt("500000000000000000000"))
	});

	it('test for BlueICE', async () => {
		const BlueICEZHb87q3 = await BlueICE.new({from: accounts[0]});
		const addressJNy1bFb = accounts[1]
		const addressERWFri3 = accounts[0]
//		await BlueICEZHb87q3.onlyOwner.call({from: accounts[2]});
//		const uint256Utw5KK2 = await BlueICEZHb87q3.earned.call(addressJNy1bFb, {from: accounts[0]});
//		const uint256WPqsYNq = await BlueICEZHb87q3.earned.call(addressERWFri3, {from: accounts[0]});
//		const addressarrayk5Bq7B1 = await BlueICEZHb87q3.getCommunity.call({from: accounts[2]});

		await expect(BlueICEZHb87q3.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEx5kFhxY = await BlueICE.new({from: accounts[0]});
		const uintRnTrNbb = BigInt("358")
//		const uint256zpsUlP1 = await BlueICEx5kFhxY.notifyRewardAmount.call(uintRnTrNbb, {from: accounts[4]});
//		const uint256DgUBM1s = await BlueICEx5kFhxY.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256KCnxP2F = await BlueICEx5kFhxY.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(BlueICEx5kFhxY.notifyRewardAmount.call(uintRnTrNbb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEI7WYWOi = await BlueICE.new({from: accounts[1]});
		const uint256O3gwKqL = await BlueICEI7WYWOi.getCurrentRewardReserve.call({from: accounts[4]});
		const addressarraygWEDO49 = await BlueICEI7WYWOi.getCommunity.call({from: accounts[0]});
		const uint256QjNHxbe = await BlueICEI7WYWOi.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256eV7lzNb = await BlueICEI7WYWOi.getCurrentRewardReserve.call({from: accounts[4]});

		assert.equal(addressarraygWEDO49, )
		assert.equal(uint256O3gwKqL, BigInt("500000000000000000000"))
		assert.equal(uint256QjNHxbe, BigInt("0"))
		assert.equal(uint256eV7lzNb, BigInt("500000000000000000000"))
	});

	it('test for BlueICE', async () => {
		const BlueICEK5k41No = await BlueICE.new({from: accounts[5]});
		const uintMUxUcof = BigInt("1693")
		const addressteeWODc = accounts[0]
//		await BlueICEK5k41No.exit.call({from: accounts[4]});
//		const boolUM03GS2 = await BlueICEK5k41No.isOwner.call({from: accounts[1]});
//		const uint256OPbm8vB = await BlueICEK5k41No.unstake.call(uintMUxUcof, {from: accounts[0]});
//		await BlueICEK5k41No.renounceOwnership.call({from: accounts[5]});
//		const uint256dZVJyX = await BlueICEK5k41No.earned.call(addressteeWODc, {from: accounts[3]});

		await expect(BlueICEK5k41No.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEt6033Z9 = await BlueICE.new({from: accounts[4]});
		const uintmPIKzxz = BigInt("1314")
		const uintcRtq5u = BigInt("1572")
//		const uint256IFa7IVS = await BlueICEt6033Z9.stake.call(uintmPIKzxz, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256VdDiDBj = await BlueICEt6033Z9.notifyRewardAmount.call(uintcRtq5u, {from: accounts[0]});
//		await BlueICEt6033Z9.renounceOwnership.call({from: accounts[5]});

		await expect(BlueICEt6033Z9.stake.call(uintmPIKzxz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICErYo1HrS = await BlueICE.new({from: accounts[3]});
		const uintS6hNBKK = BigInt("1846")
//		await BlueICErYo1HrS.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolLBEFJBY = await BlueICErYo1HrS.isOwner.call({from: accounts[0]});
//		const uint256d2Odh4r = await BlueICErYo1HrS.unstake.call(uintS6hNBKK, {from: accounts[3]});

		await expect(BlueICErYo1HrS.claimRewards.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICElrwTQFa = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKiZIDHr = accounts[0]
		const addressTC0nHVC = "0x0000000000000000000000000000000000000001"
		const uintG8yMIpE = BigInt("1067")
		const addressoeEYSC0 = await BlueICElrwTQFa.updateReward.call(addressKiZIDHr, {from: "0x0000000000000000000000000000000000000001"});
		const addressiT0d2uu = await BlueICElrwTQFa.transferOwnership.call(addressTC0nHVC, {from: accounts[1]});
		const uint256sBz5Um6 = await BlueICElrwTQFa.unstake.call(uintG8yMIpE, {from: accounts[3]});
		await BlueICElrwTQFa.claimRewards.call({from: accounts[3]});
		const boolKRLoiOi = await BlueICElrwTQFa.isOwner.call({from: accounts[4]});
	});

	it('test for BlueICE', async () => {
		const BlueICEt6033Z9 = await BlueICE.new({from: accounts[4]});
		const uintLI9fhly = BigInt("1171")
		const addressOv2ote5 = accounts[2]
		const uinttUbUuyj = BigInt("1572")
//		const uint256NyYSxg2 = await BlueICEt6033Z9.unstake.call(uintLI9fhly, {from: accounts[4]});
//		const addressSKRbMnK = await BlueICEt6033Z9.transferOwnership.call(addressOv2ote5, {from: accounts[3]});
//		const uint256VdDiDBj = await BlueICEt6033Z9.notifyRewardAmount.call(uinttUbUuyj, {from: accounts[0]});

		await expect(BlueICEt6033Z9.unstake.call(uintLI9fhly, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEt6033Z9 = await BlueICE.new({from: accounts[4]});
		const uintybIGK7c = BigInt("55")
		const uintJmkcLsD = BigInt("1586")
//		const uint256NOYTkTX = await BlueICEt6033Z9.notifyRewardAmount.call(uintybIGK7c, {from: accounts[4]});
//		const uint256VdDiDBj = await BlueICEt6033Z9.notifyRewardAmount.call(uintJmkcLsD, {from: accounts[0]});

		await expect(BlueICEt6033Z9.notifyRewardAmount.call(uintybIGK7c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEt6033Z9 = await BlueICE.new({from: accounts[4]});
		const addressRVg0DBm = accounts[5]
		const uintzRngfW9 = BigInt("1308")
		const addressZQD9QTE = await BlueICEt6033Z9.transferOwnership.call(addressRVg0DBm, {from: accounts[4]});
//		const uint256IFa7IVS = await BlueICEt6033Z9.stake.call(uintzRngfW9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BlueICEt6033Z9.stake.call(uintzRngfW9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICErYo1HrS = await BlueICE.new({from: accounts[3]});
		const uint256v6IBa5q = await BlueICErYo1HrS.rewardPerToken.call({from: accounts[2]});
//		await BlueICErYo1HrS.renounceOwnership.call({from: accounts[3]});
//		await BlueICErYo1HrS.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256v6IBa5q, BigInt("0"))
		await expect(BlueICErYo1HrS.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})