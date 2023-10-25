const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardWBKdStt = await AavePoolReward.new({from: accounts[2]});
		const uintteAHlvb = BigInt("1055")
		const uint256RBQrF9i = await AavePoolRewardWBKdStt.rewardPerToken.call({from: accounts[1]});
		const uint256SYgmNTz = await AavePoolRewardWBKdStt.notifyRewardAmount.call(uintteAHlvb, {from: accounts[2]});
		await AavePoolRewardWBKdStt.getReward.call({from: accounts[2]});
		await AavePoolRewardWBKdStt.getReward.call({from: accounts[1]});
		const uint256NjUvQkN = await AavePoolRewardWBKdStt.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256RBQrF9i, BigInt("0"))
		await expect(AavePoolRewardWBKdStt.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolReward1nOR9A = await AavePoolReward.new({from: accounts[3]});
		const addresskTZtCiP = accounts[2]
		const addresskA6abH = accounts[5]
		const uint256i53V9T = await AavePoolReward1nOR9A.earned.call(addresskTZtCiP, {from: accounts[0]});
		const addressgXQLBIe = await AavePoolReward1nOR9A.updateReward.call(addresskA6abH, {from: accounts[2]});
		await AavePoolReward1nOR9A.exit.call({from: accounts[5]});
		await AavePoolReward1nOR9A.exit.call({from: accounts[2]});

		assert.equal(uint256i53V9T, BigInt("0"))
		await expect(AavePoolReward1nOR9A.updateReward.call(addresskA6abH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardDnpbfqr = await AavePoolReward.new({from: accounts[0]});
		const uintiI8Tg1Z = BigInt("222")
		const uintZKmFIr0 = BigInt("598")
		const uint256LeswfXw = await AavePoolRewardDnpbfqr.notifyRewardAmount.call(uintiI8Tg1Z, {from: accounts[5]});
		await AavePoolRewardDnpbfqr.getReward.call({from: accounts[3]});
		const uint256gJlvgPJ = await AavePoolRewardDnpbfqr.rewardPerToken.call({from: accounts[3]});
		const uint256L2DWpgn = await AavePoolRewardDnpbfqr.stake.call(uintZKmFIr0, {from: accounts[0]});

		await expect(AavePoolRewardDnpbfqr.notifyRewardAmount.call(uintiI8Tg1Z, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardDHaKFt5 = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrYOs7Ad = accounts[2]
		const addressBvMHqag = accounts[3]
		const addressgyEgvnX = accounts[2]
		const addressAHjmeLE = accounts[4]
		const uint256JTiZ8eK = await AavePoolRewardDHaKFt5.earned.call(addressrYOs7Ad, {from: accounts[0]});
		const addressT6BKdOE = await AavePoolRewardDHaKFt5.dev.call(addressBvMHqag, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BJsXTzG = await AavePoolRewardDHaKFt5.earned.call(addressgyEgvnX, {from: accounts[4]});
		const uint256j9sjfXz = await AavePoolRewardDHaKFt5.earned.call(addressAHjmeLE, {from: accounts[2]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardnXxRuXD = await AavePoolReward.new({from: accounts[3]});
		const uintECDrioB = BigInt("1404")
		const addresskt6nMUs = accounts[1]
		const uint256N4rvXH9 = await AavePoolRewardnXxRuXD.rewardPerToken.call({from: accounts[5]});
		await AavePoolRewardnXxRuXD.exit.call({from: accounts[2]});
		const uint256DfSlqOw = await AavePoolRewardnXxRuXD.notifyRewardAmount.call(uintECDrioB, {from: accounts[4]});
		const uint256mGEHmBm = await AavePoolRewardnXxRuXD.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressSgu1ccW = await AavePoolRewardnXxRuXD.updateReward.call(addresskt6nMUs, {from: accounts[1]});

		assert.equal(uint256N4rvXH9, BigInt("0"))
		await expect(AavePoolRewardnXxRuXD.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolReward1nOR9A = await AavePoolReward.new({from: accounts[3]});
		const uintZmUlsmT = BigInt("790")
		const addressy7GcmId = accounts[3]
		const addressTkDHow = accounts[5]
		const uint256Q938i9k = await AavePoolReward1nOR9A.stake.call(uintZmUlsmT, {from: accounts[0]});
		const uint256i53V9T = await AavePoolReward1nOR9A.earned.call(addressy7GcmId, {from: accounts[0]});
		const addressgXQLBIe = await AavePoolReward1nOR9A.updateReward.call(addressTkDHow, {from: accounts[2]});
		await AavePoolReward1nOR9A.exit.call({from: accounts[5]});
		await AavePoolReward1nOR9A.exit.call({from: accounts[2]});

		await expect(AavePoolReward1nOR9A.stake.call(uintZmUlsmT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardUmxdWRC = await AavePoolReward.new({from: accounts[4]});
		const uintHiNEmFw = BigInt("591")
		await AavePoolRewardUmxdWRC.getReward.call({from: accounts[0]});
		const uint256C5WcswD = await AavePoolRewardUmxdWRC.withdraw.call(uintHiNEmFw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256D6Jde3O = await AavePoolRewardUmxdWRC.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(AavePoolRewardUmxdWRC.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardq6YJvvm = await AavePoolReward.new({from: accounts[2]});
		const uintoT00dND = BigInt("915")
		const addresszbC7e4a = "0x0000000000000000000000000000000000000001"
		const uint256ejdEj12 = await AavePoolRewardq6YJvvm.notifyRewardAmount.call(uintoT00dND, {from: accounts[2]});
		const uint256oN4Q4g9 = await AavePoolRewardq6YJvvm.rewardPerToken.call({from: accounts[2]});
		const addressLkIGza = await AavePoolRewardq6YJvvm.dev.call(addresszbC7e4a, {from: accounts[1]});

		assert.equal(uint256oN4Q4g9, BigInt("0"))
		await expect(AavePoolRewardq6YJvvm.dev.call(addresszbC7e4a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardq6YJvvm = await AavePoolReward.new({from: accounts[2]});
		const addresskOp3D5 = "0x00000000000000000000000000000000000000-1"
		const addressLkIGza = await AavePoolRewardq6YJvvm.dev.call(addresskOp3D5, {from: accounts[1]});

		await expect(AavePoolRewardq6YJvvm.dev.call(addresskOp3D5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardq6YJvvm = await AavePoolReward.new({from: accounts[2]});
		const addressDXjpzn = accounts[4]
		const addresssLYAuSQ = await AavePoolRewardq6YJvvm.dev.call(addressDXjpzn, {from: accounts[2]});
		await AavePoolRewardq6YJvvm.getReward.call({from: accounts[5]});

		await expect(AavePoolRewardq6YJvvm.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})