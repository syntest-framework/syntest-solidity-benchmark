const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingsLxB7Dm = await SLTDStaking.new({from: accounts[5]});
		const uintcYNxaqZ = BigInt("1581")
		const uint256ObPebrl = await SLTDStakingsLxB7Dm.withdraw.call(uintcYNxaqZ, {from: accounts[3]});
		await SLTDStakingsLxB7Dm.onlyOwner.call({from: accounts[4]});

		await expect(SLTDStakingsLxB7Dm.withdraw.call(uintcYNxaqZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingo075iFS = await SLTDStaking.new({from: accounts[2]});
		const uintvcWTB5L = BigInt("325")
		const addressurZ1lcm = accounts[1]
		const addressy0m0jpG = await SLTDStakingo075iFS.owner.call({from: accounts[0]});
		const uint256KnaEteC = await SLTDStakingo075iFS.withdraw.call(uintvcWTB5L, {from: accounts[0]});
		const uint256UVsqnE = await SLTDStakingo075iFS.earned.call(addressurZ1lcm, {from: accounts[0]});

		assert.equal(addressy0m0jpG, 0x56c94046c534c91a706c8E635aD03C6B228FC71b)
		await expect(SLTDStakingo075iFS.withdraw.call(uintvcWTB5L, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingLxtCdt = await SLTDStaking.new({from: accounts[0]});
		const uintnxrT6qh = BigInt("1375")
		const uintG1B9APe = BigInt("1596")
		const addressi8N1JRv = "0x0000000000000000000000000000000000000001"
		const uint256T2QFB1b = await SLTDStakingLxtCdt.stake.call(uintnxrT6qh, {from: accounts[5]});
		const uint256Igk4iwO = await SLTDStakingLxtCdt.stake.call(uintG1B9APe, {from: accounts[1]});
		await SLTDStakingLxtCdt.getReward.call({from: accounts[0]});
		const addressZYkyufX = await SLTDStakingLxtCdt.transferOwnership.call(addressi8N1JRv, {from: accounts[2]});

		await expect(SLTDStakingLxtCdt.stake.call(uintnxrT6qh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingCQWbhhZ = await SLTDStaking.new({from: accounts[1]});
		const addressSPXpdG4 = accounts[3]
		await SLTDStakingCQWbhhZ.getReward.call({from: accounts[1]});
		const addresstxu4Is = await SLTDStakingCQWbhhZ.updateReward.call(addressSPXpdG4, {from: accounts[4]});
		const uint256HOOZLrQ = await SLTDStakingCQWbhhZ.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(SLTDStakingCQWbhhZ.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakinguu0iMSN = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstNPQuHJ = accounts[4]
		const uint256PnPSu8N = await SLTDStakinguu0iMSN.balanceOf.call(addresstNPQuHJ, {from: accounts[1]});
		const uint256JBJp9X2 = await SLTDStakinguu0iMSN.totalSupply.call({from: accounts[0]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingGQDhsi = await SLTDStaking.new({from: accounts[2]});
		const addressbWJbMxI = accounts[3]
		const addressKBStxq8 = accounts[4]
		const addresspYl02T6 = await SLTDStakingGQDhsi.transferOwnership.call(addressbWJbMxI, {from: accounts[3]});
		await SLTDStakingGQDhsi.renounceOwnership.call({from: accounts[4]});
		await SLTDStakingGQDhsi.onlyOwner.call({from: accounts[2]});
		const addressB0gr8de = await SLTDStakingGQDhsi.transferOwnership.call(addressKBStxq8, {from: accounts[0]});

		await expect(SLTDStakingGQDhsi.transferOwnership.call(addressbWJbMxI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingsLxB7Dm = await SLTDStaking.new({from: accounts[5]});
		const uintPlT3n1F = BigInt("322")
		const uintnGmCp1x = BigInt("821")
		const addressz1kFudD = accounts[1]
		const uintLsm5H2M = BigInt("1566")
		const uint256t08i2kK = await SLTDStakingsLxB7Dm.notifyRewardAmount.call(uintPlT3n1F, {from: accounts[0]});
		const uint256EdlmRjK = await SLTDStakingsLxB7Dm.stake.call(uintnGmCp1x, {from: accounts[1]});
		const addressBSMtGS8 = await SLTDStakingsLxB7Dm.updateReward.call(addressz1kFudD, {from: accounts[4]});
		const uint256ObPebrl = await SLTDStakingsLxB7Dm.withdraw.call(uintLsm5H2M, {from: accounts[3]});
		await SLTDStakingsLxB7Dm.onlyOwner.call({from: accounts[4]});

		await expect(SLTDStakingsLxB7Dm.notifyRewardAmount.call(uintPlT3n1F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingCQWbhhZ = await SLTDStaking.new({from: accounts[1]});
		await SLTDStakingCQWbhhZ.getReward.call({from: accounts[1]});
		await SLTDStakingCQWbhhZ.exit.call({from: accounts[1]});
		const uint256HOOZLrQ = await SLTDStakingCQWbhhZ.lastTimeRewardApplicable.call({from: accounts[0]});
		const address97oEeG = await SLTDStakingCQWbhhZ.owner.call({from: accounts[1]});

		await expect(SLTDStakingCQWbhhZ.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingCQWbhhZ = await SLTDStaking.new({from: accounts[1]});
		const addressJnl6dgD = accounts[0]
		await SLTDStakingCQWbhhZ.getReward.call({from: accounts[1]});
		const uint256V9W1COh = await SLTDStakingCQWbhhZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addresswWu6rvo = await SLTDStakingCQWbhhZ.transferOwnership.call(addressJnl6dgD, {from: accounts[1]});

		await expect(SLTDStakingCQWbhhZ.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingCQWbhhZ = await SLTDStaking.new({from: accounts[1]});
		await SLTDStakingCQWbhhZ.getReward.call({from: accounts[1]});
		await SLTDStakingCQWbhhZ.renounceOwnership.call({from: accounts[1]});

		await expect(SLTDStakingCQWbhhZ.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingCQWbhhZ = await SLTDStaking.new({from: accounts[1]});
		const addressnATIFVS = accounts[0]
		await SLTDStakingCQWbhhZ.getReward.call({from: accounts[1]});
		const addressB4tCfy = await SLTDStakingCQWbhhZ.setRewardDistribution.call(addressnATIFVS, {from: accounts[1]});

		await expect(SLTDStakingCQWbhhZ.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})