const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingr9ffLc = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintooeMiln = BigInt("1632")
		const addressDkGgzH7 = accounts[5]
//		const uinthqHzDo = await MoshiachCoinStakingr9ffLc.deposit.call(uintooeMiln, {from: accounts[1]});
//		const uintOQSnGRw = await MoshiachCoinStakingr9ffLc.getStakingAndDaoAmount.call({from: accounts[3]});
//		const addressyfrr2s = await MoshiachCoinStakingr9ffLc.transferOwnership.call(addressDkGgzH7, {from: accounts[0]});

		await expect(MoshiachCoinStakingr9ffLc.deposit.call(uintooeMiln, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingaSIuD0N = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSWkzreg = accounts[2]
		const uintMAZ6DE = await MoshiachCoinStakingaSIuD0N.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintagzSWX = await MoshiachCoinStakingaSIuD0N.getNumberOfHolders.call({from: accounts[3]});
		const uintUW5kTHf = await MoshiachCoinStakingaSIuD0N.getPendingDivs.call(addressSWkzreg, {from: accounts[4]});
		const uintC9ejHq = await MoshiachCoinStakingaSIuD0N.getStakingAndDaoAmount.call({from: accounts[5]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingY309z09 = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintNUyRrU = BigInt("973")
		const uintovVw3QV = await MoshiachCoinStakingY309z09.getNumberOfHolders.call({from: accounts[4]});
//		const uintcAkvx4k = await MoshiachCoinStakingY309z09.deposit.call(uintNUyRrU, {from: accounts[1]});

		assert.equal(uintovVw3QV, BigInt("0"))
		await expect(MoshiachCoinStakingY309z09.deposit.call(uintNUyRrU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingqDbhHtG = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintTpEsMl = await MoshiachCoinStakingqDbhHtG.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
//		await MoshiachCoinStakingqDbhHtG.onlyOwner.call({from: accounts[4]});

		assert.equal(uintTpEsMl, BigInt("0"))
		await expect(MoshiachCoinStakingqDbhHtG.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingmaJmxWj = await MoshiachCoinStaking.new({from: accounts[0]});
		const address6L1YkM = accounts[3]
		const uint6KIPsm = BigInt("1114")
		const addressWlbx4tV = await MoshiachCoinStakingmaJmxWj.transferOwnership.call(address6L1YkM, {from: accounts[0]});
		const uintbpBZW6p = await MoshiachCoinStakingmaJmxWj.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintVkNSmxl = await MoshiachCoinStakingmaJmxWj.getStakingAndDaoAmount.call({from: accounts[2]});
//		const uintMH6cwG = await MoshiachCoinStakingmaJmxWj.deposit.call(uint6KIPsm, {from: accounts[3]});

		assert.equal(uintVkNSmxl, BigInt("60000000000000000000000000"))
		assert.equal(uintbpBZW6p, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingmaJmxWj.deposit.call(uint6KIPsm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingZA683xT = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintjytGESm = BigInt("1234")
		const addressPgn7oqW = accounts[4]
		const addressfsPM0pF = accounts[5]
//		await MoshiachCoinStakingZA683xT.claimDivs.call({from: accounts[4]});
//		const uintz0SH8Yl = await MoshiachCoinStakingZA683xT.getStakingAndDaoAmount.call({from: accounts[3]});
//		const uintc0E26GO = await MoshiachCoinStakingZA683xT.getNumberOfHolders.call({from: accounts[4]});
//		await MoshiachCoinStakingZA683xT.claimDivs.call({from: accounts[0]});
//		const addressbqPsHJb = await MoshiachCoinStakingZA683xT.transferAnyERC20Tokens.call(addressfsPM0pF, addressPgn7oqW, uintjytGESm, {from: accounts[3]});

		await expect(MoshiachCoinStakingZA683xT.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingcOws3Kt = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintkYBcub = BigInt("1679")
		const addresssQuchvl = accounts[3]
		const addressR7QuLog = accounts[5]
//		const uintYMZSAZn = await MoshiachCoinStakingcOws3Kt.withdraw.call(uintkYBcub, {from: accounts[3]});
//		await MoshiachCoinStakingcOws3Kt.claimDivs.call({from: accounts[0]});
//		await MoshiachCoinStakingcOws3Kt.onlyOwner.call({from: accounts[4]});
//		const addressCAZqSW = await MoshiachCoinStakingcOws3Kt.transferOwnership.call(addresssQuchvl, {from: accounts[0]});
//		const addressoWx6Hs4 = await MoshiachCoinStakingcOws3Kt.transferOwnership.call(addressR7QuLog, {from: accounts[3]});

		await expect(MoshiachCoinStakingcOws3Kt.withdraw.call(uintkYBcub, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingyGaqFpv = await MoshiachCoinStaking.new({from: accounts[5]});
		const uintO8aO1jv = BigInt("364")
		const address6gwdPB = accounts[1]
		const addressKWcA0RL = accounts[1]
//		const addressraXRfkg = await MoshiachCoinStakingyGaqFpv.transferAnyERC20Tokens.call(addressKWcA0RL, address6gwdPB, uintO8aO1jv, {from: accounts[5]});

		await expect(MoshiachCoinStakingyGaqFpv.transferAnyERC20Tokens.call(addressKWcA0RL, address6gwdPB, uintO8aO1jv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingLxcXWI = await MoshiachCoinStaking.new({from: accounts[5]});
		const uintnlPVqDa = BigInt("0")
//		await MoshiachCoinStakingLxcXWI.claimDivs.call({from: accounts[3]});
//		const uintGoJuI6 = await MoshiachCoinStakingLxcXWI.deposit.call(uintnlPVqDa, {from: accounts[0]});

		await expect(MoshiachCoinStakingLxcXWI.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})