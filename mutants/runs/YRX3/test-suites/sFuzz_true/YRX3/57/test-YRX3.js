const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX32K9Kjj = await YRX3.new({from: accounts[4]});
		const addressWEdP2iO = accounts[4]
		const addresswAhOvea = accounts[5]
		const addressngkDgop = accounts[1]
		const addressHGf7RmV = accounts[5]
		const uint256eR88gU4 = await YRX32K9Kjj.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256BCXpYjB = await YRX32K9Kjj.earned.call(addressWEdP2iO, {from: accounts[1]});
		const addressc1LBvx = await YRX32K9Kjj.emergencyDrain.call(addresswAhOvea, {from: accounts[1]});
		const addressAlYZTp3 = await YRX32K9Kjj.emergencyDrain.call(addressngkDgop, {from: accounts[1]});
		const uint256UtaWAGJ = await YRX32K9Kjj.earned.call(addressHGf7RmV, {from: accounts[2]});

		assert.equal(uint256BCXpYjB, BigInt("0"))
		assert.equal(uint256eR88gU4, BigInt("0"))
		await expect(YRX32K9Kjj.emergencyDrain.call(addresswAhOvea, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3SoReFPy = await YRX3.new({from: accounts[0]});
		const address1KUTj4 = accounts[4]
		const addressbN1ITcK = await YRX3SoReFPy.updateReward.call(address1KUTj4, {from: accounts[3]});
		await YRX3SoReFPy.exit.call({from: accounts[1]});
		await YRX3SoReFPy.onlyRewardDistribution.call({from: accounts[0]});

		await expect(YRX3SoReFPy.updateReward.call(address1KUTj4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3LaZMWGM = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskYTaPEx = "0x0000000000000000000000000000000000000001"
		const addressjDq64QC = accounts[1]
		const addressTj2cd1A = accounts[3]
		const addressKCi9D6W = accounts[1]
		const addressgdU4zFU = await YRX3LaZMWGM.setRewardDistribution.call(addresskYTaPEx, {from: accounts[5]});
		const addresscUVZOiS = await YRX3LaZMWGM.setRewardDistribution.call(addressjDq64QC, {from: accounts[3]});
		await YRX3LaZMWGM.notifyRewardAmount.call({from: accounts[0]});
		const addressR6moUwR = await YRX3LaZMWGM.owner.call({from: accounts[2]});
		const addressUQvOTbc = await YRX3LaZMWGM.transferOwnership.call(addressTj2cd1A, {from: accounts[2]});
		const addresspHA26bO = await YRX3LaZMWGM.transferOwnership.call(addressKCi9D6W, {from: accounts[3]});
	});

	it('test for YRX3', async () => {
		const YRX3SRgJIIq = await YRX3.new({from: accounts[2]});
		const addressd5NaWw = accounts[1]
		const addresskP2XGy = accounts[3]
		const uintfmgep0V = BigInt("1073")
		const addressSo1Ckpw = accounts[0]
		await YRX3SRgJIIq.exit.call({from: accounts[2]});
		await YRX3SRgJIIq.checkStart.call({from: accounts[3]});
		const addressdtdm5c6 = await YRX3SRgJIIq.toPayable.call(addressd5NaWw, {from: accounts[1]});
		const addressUBUd2Q1 = await YRX3SRgJIIq.emergencyDrain.call(addresskP2XGy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LSSeAEB = await YRX3SRgJIIq.withdraw.call(uintfmgep0V, {from: accounts[0]});
		const addressPXomIUA = await YRX3SRgJIIq.transferOwnership.call(addressSo1Ckpw, {from: accounts[4]});

		await expect(YRX3SRgJIIq.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3ZpBqgZ9 = await YRX3.new({from: accounts[4]});
		const uintMZrbaIQ = BigInt("1945")
		const uintYIdDKk = BigInt("761")
		const uintUlb67Jh = BigInt("1056")
		const uintySOXlfd = BigInt("329")
		const uint256Uxw0mqO = await YRX3ZpBqgZ9.stake.call(uintMZrbaIQ, {from: accounts[2]});
		const uint256YWCyIR = await YRX3ZpBqgZ9.withdraw.call(uintYIdDKk, {from: accounts[0]});
		const uint256hjkL5j = await YRX3ZpBqgZ9.withdraw.call(uintUlb67Jh, {from: accounts[2]});
		const uint256vBSW2Hq = await YRX3ZpBqgZ9.stake.call(uintySOXlfd, {from: accounts[2]});
		await YRX3ZpBqgZ9.notifyRewardAmount.call({from: accounts[0]});
		await YRX3ZpBqgZ9.onlyOwner.call({from: accounts[3]});

		await expect(YRX3ZpBqgZ9.stake.call(uintMZrbaIQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3zZyZVxu = await YRX3.new({from: accounts[2]});
		const addressnEu5St = "0x0000000000000000000000000000000000000001"
		const uintbUPdj8W = BigInt("1544")
		const addressf0Md3rb = await YRX3zZyZVxu.setRewardDistribution.call(addressnEu5St, {from: accounts[1]});
		await YRX3zZyZVxu.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Zy4GAIk = await YRX3zZyZVxu.withdraw.call(uintbUPdj8W, {from: accounts[2]});

		await expect(YRX3zZyZVxu.setRewardDistribution.call(addressnEu5St, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3jS4PQpr = await YRX3.new({from: accounts[4]});
		const uintv4aN6w = BigInt("1071")
		const uint256T7jNhbx = await YRX3jS4PQpr.withdraw.call(uintv4aN6w, {from: accounts[4]});
		const uint256vrooW3p = await YRX3jS4PQpr.rewardPerToken.call({from: accounts[0]});
		await YRX3jS4PQpr.onlyOwner.call({from: accounts[3]});

		await expect(YRX3jS4PQpr.withdraw.call(uintv4aN6w, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3CCvalpb = await YRX3.new({from: accounts[2]});
		const addressbD6Gd76 = accounts[2]
		await YRX3CCvalpb.getReward.call({from: accounts[3]});
		const uint256mm6dXxU = await YRX3CCvalpb.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressEba96CH = await YRX3CCvalpb.setRewardDistribution.call(addressbD6Gd76, {from: accounts[1]});
		await YRX3CCvalpb.exit.call({from: accounts[4]});

		await expect(YRX3CCvalpb.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3jS4PQpr = await YRX3.new({from: accounts[4]});
		const uintB5tPuvZ = BigInt("967")
		await YRX3jS4PQpr.renounceOwnership.call({from: accounts[4]});
		await YRX3jS4PQpr.onlyOwner.call({from: accounts[2]});
		await YRX3jS4PQpr.exit.call({from: accounts[2]});
		const uint256jWow9S = await YRX3jS4PQpr.stake.call(uintB5tPuvZ, {from: accounts[3]});

		await expect(YRX3jS4PQpr.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3CCvalpb = await YRX3.new({from: accounts[2]});
		const addressxeGlnJS = accounts[4]
		await YRX3CCvalpb.getReward.call({from: accounts[3]});
		const addressUUHe4Zv = await YRX3CCvalpb.owner.call({from: accounts[2]});
		const addressEba96CH = await YRX3CCvalpb.setRewardDistribution.call(addressxeGlnJS, {from: accounts[1]});

		await expect(YRX3CCvalpb.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3jS4PQpr = await YRX3.new({from: accounts[4]});
		const addressHxcEQLC = accounts[2]
		const addressiVHMp7g = "0x0000000000000000000000000000000000000001"
		const addressLdmxDbb = await YRX3jS4PQpr.transferOwnership.call(addressHxcEQLC, {from: accounts[4]});
		const uint256KM6TnCa = await YRX3jS4PQpr.earned.call(addressiVHMp7g, {from: accounts[1]});
		await YRX3jS4PQpr.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256KM6TnCa, BigInt("0"))
		await expect(YRX3jS4PQpr.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3jS4PQpr = await YRX3.new({from: accounts[4]});
		const addressXJpCDtv = accounts[4]
		const uintCb14EX2 = BigInt("975")
		const addressL9vmeP = await YRX3jS4PQpr.setRewardDistribution.call(addressXJpCDtv, {from: accounts[4]});
		await YRX3jS4PQpr.exit.call({from: accounts[3]});
		const uint256jWow9S = await YRX3jS4PQpr.stake.call(uintCb14EX2, {from: accounts[3]});

		await expect(YRX3jS4PQpr.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})