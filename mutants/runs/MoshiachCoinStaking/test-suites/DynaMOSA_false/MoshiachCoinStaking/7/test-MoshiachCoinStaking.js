const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingko9xPQL = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressZhA12od = accounts[4]
		const uinttC7rL6 = BigInt("1789")
		await MoshiachCoinStakingko9xPQL.claimDivs.call({from: accounts[2]});
		const addressHWWylK2 = await MoshiachCoinStakingko9xPQL.transferOwnership.call(addressZhA12od, {from: accounts[2]});
		const uintXUbPf1M = await MoshiachCoinStakingko9xPQL.deposit.call(uinttC7rL6, {from: accounts[4]});
		const uintoDQW61x = await MoshiachCoinStakingko9xPQL.getNumberOfHolders.call({from: accounts[4]});

		await expect(MoshiachCoinStakingko9xPQL.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingioXO3S7 = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMN5QiX6 = accounts[1]
		const addressNWRFalW = accounts[5]
		const uintMGqtoX4 = BigInt("1506")
		const addressNykQvTA = await MoshiachCoinStakingioXO3S7.transferOwnership.call(addressMN5QiX6, {from: accounts[1]});
		const uintHtfIH5v = await MoshiachCoinStakingioXO3S7.getNumberOfHolders.call({from: accounts[3]});
		const addressfgyljEj = await MoshiachCoinStakingioXO3S7.transferOwnership.call(addressNWRFalW, {from: accounts[0]});
		const uintE6BWsBy = await MoshiachCoinStakingioXO3S7.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintRnkLjQS = await MoshiachCoinStakingioXO3S7.deposit.call(uintMGqtoX4, {from: accounts[2]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingRT9iYR7 = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintoqmRwjO = BigInt("565")
		const addressoNEvjdE = accounts[5]
		const addressNDchA2g = accounts[5]
		const addresszXILejj = accounts[5]
		const uintsF9gSaL = await MoshiachCoinStakingRT9iYR7.getNumberOfHolders.call({from: accounts[5]});
		const addressh6NLOIf = await MoshiachCoinStakingRT9iYR7.transferAnyERC20Tokens.call(addressNDchA2g, addressoNEvjdE, uintoqmRwjO, {from: accounts[2]});
		const addresseHiWqQl = await MoshiachCoinStakingRT9iYR7.transferOwnership.call(addresszXILejj, {from: accounts[5]});

		assert.equal(uintsF9gSaL, BigInt("0"))
		await expect(MoshiachCoinStakingRT9iYR7.transferAnyERC20Tokens.call(addressNDchA2g, addressoNEvjdE, uintoqmRwjO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingfM7Efio = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintFN5DszV = await MoshiachCoinStakingfM7Efio.getNumberOfHolders.call({from: accounts[2]});
		const uintmvGlulA = await MoshiachCoinStakingfM7Efio.getStakingAndDaoAmount.call({from: accounts[3]});

		assert.equal(uintFN5DszV, BigInt("0"))
		assert.equal(uintmvGlulA, BigInt("60000000000000000000000000"))
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStaking2MZ28S = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintk3HRxQN = BigInt("1212")
		const uintH0o7l3U = await MoshiachCoinStaking2MZ28S.getNumberOfHolders.call({from: accounts[0]});
		const uintMYRzvoa = await MoshiachCoinStaking2MZ28S.withdraw.call(uintk3HRxQN, {from: accounts[5]});

		assert.equal(uintH0o7l3U, BigInt("0"))
		await expect(MoshiachCoinStaking2MZ28S.withdraw.call(uintk3HRxQN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStaking1quMZY = await MoshiachCoinStaking.new({from: accounts[1]});
		await MoshiachCoinStaking1quMZY.onlyOwner.call({from: accounts[1]});
		await MoshiachCoinStaking1quMZY.claimDivs.call({from: accounts[2]});
		const uinteqM9gTa = await MoshiachCoinStaking1quMZY.getNumberOfHolders.call({from: accounts[4]});

		await expect(MoshiachCoinStaking1quMZY.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingfM7Efio = await MoshiachCoinStaking.new({from: accounts[3]});
		const uint5bz1nd = BigInt("0")
		const uintKkF8Nhe = await MoshiachCoinStakingfM7Efio.deposit.call(uint5bz1nd, {from: accounts[3]});
		const uintmvGlulA = await MoshiachCoinStakingfM7Efio.getStakingAndDaoAmount.call({from: accounts[3]});

		await expect(MoshiachCoinStakingfM7Efio.deposit.call(uint5bz1nd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingvwxAhpZ = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressYglHNEv = accounts[4]
		const uintzyDrcTR = BigInt("1338")
		const addressMiZVngW = accounts[1]
		const addressRvnfbqz = accounts[0]
		const uintU6QxT95 = BigInt("8")
		const uintS48XDQH = await MoshiachCoinStakingvwxAhpZ.getPendingDivs.call(addressYglHNEv, {from: "0x0000000000000000000000000000000000000001"});
		const uintMBUjJnc = await MoshiachCoinStakingvwxAhpZ.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const addressE98aqgm = await MoshiachCoinStakingvwxAhpZ.transferAnyERC20Tokens.call(addressRvnfbqz, addressMiZVngW, uintzyDrcTR, {from: accounts[1]});
		const uintZZeOuM4 = await MoshiachCoinStakingvwxAhpZ.deposit.call(uintU6QxT95, {from: accounts[1]});

		assert.equal(uintMBUjJnc, BigInt("0"))
		assert.equal(uintS48XDQH, BigInt("0"))
		await expect(MoshiachCoinStakingvwxAhpZ.transferAnyERC20Tokens.call(addressRvnfbqz, addressMiZVngW, uintzyDrcTR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})