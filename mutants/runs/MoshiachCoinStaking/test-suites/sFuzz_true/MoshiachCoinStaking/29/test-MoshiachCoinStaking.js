const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingPWVYjEh = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFb0lsNp = BigInt("1522")
		const addressGGoEmFW = accounts[4]
		const uinthMNKRMA = BigInt("405")
		const addressdQcpHr1 = accounts[4]
		const addressE6Hc1bz = "0x0000000000000000000000000000000000000001"
		const uintyFH4DM9 = await MoshiachCoinStakingPWVYjEh.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintEXQ92VM = await MoshiachCoinStakingPWVYjEh.getNumberOfHolders.call({from: accounts[2]});
		const uintWvXTUYZ = await MoshiachCoinStakingPWVYjEh.withdraw.call(uintFb0lsNp, {from: accounts[3]});
		const uintbIXDZUj = await MoshiachCoinStakingPWVYjEh.getPendingDivs.call(addressGGoEmFW, {from: accounts[5]});
		const addressQGUu59c = await MoshiachCoinStakingPWVYjEh.transferAnyERC20Tokens.call(addressE6Hc1bz, addressdQcpHr1, uinthMNKRMA, {from: accounts[2]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingLHkxBxH = await MoshiachCoinStaking.new({from: accounts[0]});
		const address2QdXvW = accounts[4]
		const addressLcHmzlN = accounts[1]
		const uintaIZcMC4 = await MoshiachCoinStakingLHkxBxH.getStakingAndDaoAmount.call({from: accounts[3]});
		const uinteKxCDjj = await MoshiachCoinStakingLHkxBxH.getPendingDivs.call(address2QdXvW, {from: accounts[3]});
		const uintxm45aRG = await MoshiachCoinStakingLHkxBxH.getPendingDivs.call(addressLcHmzlN, {from: accounts[2]});

		assert.equal(uintaIZcMC4, BigInt("60000000000000000000000000"))
		assert.equal(uinteKxCDjj, BigInt("0"))
		assert.equal(uintxm45aRG, BigInt("0"))
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingOORH8dZ = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressNQBBAu0 = accounts[3]
		const uintYe9iTqJ = BigInt("1414")
		const addressg38ta0L = await MoshiachCoinStakingOORH8dZ.transferOwnership.call(addressNQBBAu0, {from: accounts[0]});
		await MoshiachCoinStakingOORH8dZ.claimDivs.call({from: accounts[0]});
		const uintGnnR5PI = await MoshiachCoinStakingOORH8dZ.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintK7Z5WL8 = await MoshiachCoinStakingOORH8dZ.withdraw.call(uintYe9iTqJ, {from: accounts[4]});
		const uintTHgUFQK = await MoshiachCoinStakingOORH8dZ.getStakingAndDaoAmount.call({from: accounts[4]});

		await expect(MoshiachCoinStakingOORH8dZ.transferOwnership.call(addressNQBBAu0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingGeFafAw = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintYtTeYvU = BigInt("619")
		const uintCW1y2Oy = await MoshiachCoinStakingGeFafAw.withdraw.call(uintYtTeYvU, {from: accounts[2]});
		const uinto4Z18Qa = await MoshiachCoinStakingGeFafAw.getNumberOfHolders.call({from: accounts[0]});
		const uintcQr8M2b = await MoshiachCoinStakingGeFafAw.getNumberOfHolders.call({from: accounts[1]});

		await expect(MoshiachCoinStakingGeFafAw.withdraw.call(uintYtTeYvU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingRgBZND = await MoshiachCoinStaking.new({from: accounts[4]});
		await MoshiachCoinStakingRgBZND.claimDivs.call({from: accounts[1]});
		const uintCHVX4dj = await MoshiachCoinStakingRgBZND.getNumberOfHolders.call({from: accounts[1]});
		const uintWyFf5Lg = await MoshiachCoinStakingRgBZND.getStakingAndDaoAmount.call({from: accounts[0]});

		await expect(MoshiachCoinStakingRgBZND.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingRgBZND = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressyMvVPhN = accounts[0]
		const uint9wag5Y = BigInt("1961")
		await MoshiachCoinStakingRgBZND.claimDivs.call({from: accounts[1]});
		const uintwi4VIqv = await MoshiachCoinStakingRgBZND.getPendingDivs.call(addressyMvVPhN, {from: "0x0000000000000000000000000000000000000001"});
		const uintrRV0Cjq = await MoshiachCoinStakingRgBZND.deposit.call(uint9wag5Y, {from: accounts[4]});
		const uintWyFf5Lg = await MoshiachCoinStakingRgBZND.getStakingAndDaoAmount.call({from: accounts[0]});

		await expect(MoshiachCoinStakingRgBZND.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinggjvThvU = await MoshiachCoinStaking.new({from: accounts[4]});
		await MoshiachCoinStakinggjvThvU.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uinthQCfPIX = await MoshiachCoinStakinggjvThvU.getStakingAndDaoAmount.call({from: accounts[5]});
		await MoshiachCoinStakinggjvThvU.claimDivs.call({from: accounts[1]});

		await expect(MoshiachCoinStakinggjvThvU.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingGeFafAw = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressSE95AW7 = accounts[1]
		const addressovKW37h = await MoshiachCoinStakingGeFafAw.transferOwnership.call(addressSE95AW7, {from: accounts[3]});
		const uinto4Z18Qa = await MoshiachCoinStakingGeFafAw.getNumberOfHolders.call({from: accounts[0]});

		assert.equal(uinto4Z18Qa, BigInt("0"))
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingGeFafAw = await MoshiachCoinStaking.new({from: accounts[3]});
		const uinthXiFzDM = BigInt("2017")
		const addressKzsIYiM = accounts[3]
		const addressjoOhDqR = accounts[0]
		const addressthXtZjx = "0x0000000000000000000000000000000000000001"
		const uinto4Z18Qa = await MoshiachCoinStakingGeFafAw.getNumberOfHolders.call({from: accounts[0]});
		const addressGVrnWf4 = await MoshiachCoinStakingGeFafAw.transferAnyERC20Tokens.call(addressjoOhDqR, addressKzsIYiM, uinthXiFzDM, {from: accounts[3]});
		const uintr4hE0hc = await MoshiachCoinStakingGeFafAw.getPendingDivs.call(addressthXtZjx, {from: accounts[1]});

		assert.equal(uinto4Z18Qa, BigInt("0"))
		await expect(MoshiachCoinStakingGeFafAw.transferAnyERC20Tokens.call(addressjoOhDqR, addressKzsIYiM, uinthXiFzDM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})