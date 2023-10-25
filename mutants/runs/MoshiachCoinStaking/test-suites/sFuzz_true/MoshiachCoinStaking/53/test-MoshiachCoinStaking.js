const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingWlUj7s7 = await MoshiachCoinStaking.new({from: accounts[0]});
		const uinttV8LO8 = BigInt("1415")
		const uintqV1NWi = await MoshiachCoinStakingWlUj7s7.deposit.call(uinttV8LO8, {from: accounts[5]});
		await MoshiachCoinStakingWlUj7s7.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MoshiachCoinStakingWlUj7s7.deposit.call(uinttV8LO8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinggUJNFc = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressWes8835 = accounts[0]
		const uintGe1jzq3 = await MoshiachCoinStakinggUJNFc.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uintw4KBWT6 = await MoshiachCoinStakinggUJNFc.getNumberOfHolders.call({from: accounts[5]});
		const addressfKuLWK1 = await MoshiachCoinStakinggUJNFc.transferOwnership.call(addressWes8835, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintGe1jzq3, BigInt("0"))
		assert.equal(uintw4KBWT6, BigInt("0"))
		await expect(MoshiachCoinStakinggUJNFc.transferOwnership.call(addressWes8835, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingTwvwIYk = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintlCHqkhk = BigInt("588")
		const uintGF0VaqB = BigInt("383")
		const addressKbKx40m = accounts[1]
		const addressr1SG6cg = accounts[3]
		const uintHngP2Pe = await MoshiachCoinStakingTwvwIYk.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintPyLPd1s = await MoshiachCoinStakingTwvwIYk.deposit.call(uintlCHqkhk, {from: accounts[3]});
		const addressVLIprEA = await MoshiachCoinStakingTwvwIYk.transferAnyERC20Tokens.call(addressr1SG6cg, addressKbKx40m, uintGF0VaqB, {from: accounts[5]});
		const uintUPQw5Sh = await MoshiachCoinStakingTwvwIYk.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintHngP2Pe, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingTwvwIYk.deposit.call(uintlCHqkhk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingZ6S1Fz = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintj35dBXo = await MoshiachCoinStakingZ6S1Fz.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintkVqxztn = await MoshiachCoinStakingZ6S1Fz.getStakingAndDaoAmount.call({from: accounts[4]});
		await MoshiachCoinStakingZ6S1Fz.onlyOwner.call({from: accounts[0]});
		const uintzuvltg2 = await MoshiachCoinStakingZ6S1Fz.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingWlUj7s7 = await MoshiachCoinStaking.new({from: accounts[0]});
		await MoshiachCoinStakingWlUj7s7.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MoshiachCoinStakingWlUj7s7.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingupJAqbp = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressUUnwIFI = accounts[4]
		const uintxFEogQX = await MoshiachCoinStakingupJAqbp.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintinW4qYD = await MoshiachCoinStakingupJAqbp.getPendingDivs.call(addressUUnwIFI, {from: accounts[0]});

		assert.equal(uintinW4qYD, BigInt("0"))
		assert.equal(uintxFEogQX, BigInt("60000000000000000000000000"))
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingWlUj7s7 = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintdSIitVD = BigInt("1839")
		const uintxqqT5qB = BigInt("1415")
		const uintGXp0cUM = await MoshiachCoinStakingWlUj7s7.withdraw.call(uintdSIitVD, {from: accounts[0]});
		const uintqV1NWi = await MoshiachCoinStakingWlUj7s7.deposit.call(uintxqqT5qB, {from: accounts[5]});

		await expect(MoshiachCoinStakingWlUj7s7.withdraw.call(uintdSIitVD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingupJAqbp = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressR7HaZRt = accounts[4]
		await MoshiachCoinStakingupJAqbp.claimDivs.call({from: accounts[2]});
		const uintxFEogQX = await MoshiachCoinStakingupJAqbp.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintinW4qYD = await MoshiachCoinStakingupJAqbp.getPendingDivs.call(addressR7HaZRt, {from: accounts[0]});

		await expect(MoshiachCoinStakingupJAqbp.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingWlUj7s7 = await MoshiachCoinStaking.new({from: accounts[0]});
		const addressysjZp3Q = "0x0000000000000000000000000000000000000001"
		const uinttorvZfw = BigInt("1204")
		const uintXBjir84 = BigInt("1839")
		const addressSqiSHoy = await MoshiachCoinStakingWlUj7s7.transferOwnership.call(addressysjZp3Q, {from: accounts[0]});
		const uintlxqPdJE = await MoshiachCoinStakingWlUj7s7.withdraw.call(uinttorvZfw, {from: accounts[0]});
		const uintGXp0cUM = await MoshiachCoinStakingWlUj7s7.withdraw.call(uintXBjir84, {from: accounts[0]});

		await expect(MoshiachCoinStakingWlUj7s7.withdraw.call(uinttorvZfw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingWlUj7s7 = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintHRLtn6q = BigInt("514")
		const addressvB2x3L = accounts[3]
		const addresswwc6D0m = accounts[2]
		const uintZGNjSYp = BigInt("1849")
		const addresswMG7Wh = await MoshiachCoinStakingWlUj7s7.transferAnyERC20Tokens.call(addresswwc6D0m, addressvB2x3L, uintHRLtn6q, {from: accounts[0]});
		const uintGXp0cUM = await MoshiachCoinStakingWlUj7s7.withdraw.call(uintZGNjSYp, {from: accounts[0]});

		await expect(MoshiachCoinStakingWlUj7s7.transferAnyERC20Tokens.call(addresswwc6D0m, addressvB2x3L, uintHRLtn6q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})