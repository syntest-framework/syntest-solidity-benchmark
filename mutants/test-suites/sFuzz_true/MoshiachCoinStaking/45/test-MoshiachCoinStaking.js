const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingv8m5nCs = await MoshiachCoinStaking.new({from: accounts[3]});
		const addresshdRTFp2 = accounts[0]
		const addressfbEOPa8 = accounts[2]
		const uintl1I6eMR = await MoshiachCoinStakingv8m5nCs.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintrldhRdl = await MoshiachCoinStakingv8m5nCs.getNumberOfHolders.call({from: accounts[0]});
//		const addressMj0lrLl = await MoshiachCoinStakingv8m5nCs.transferOwnership.call(addresshdRTFp2, {from: accounts[0]});
//		const uintkZl1yPc = await MoshiachCoinStakingv8m5nCs.getPendingDivs.call(addressfbEOPa8, {from: accounts[0]});
//		const uinthsg3Ig = await MoshiachCoinStakingv8m5nCs.getStakingAndDaoAmount.call({from: accounts[5]});
//		await MoshiachCoinStakingv8m5nCs.claimDivs.call({from: accounts[0]});

		assert.equal(uintl1I6eMR, BigInt("60000000000000000000000000"))
		assert.equal(uintrldhRdl, BigInt("0"))
		await expect(MoshiachCoinStakingv8m5nCs.transferOwnership.call(addresshdRTFp2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingMkQyLLb = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintCN9Bl0j = await MoshiachCoinStakingMkQyLLb.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintdXGUE0O = await MoshiachCoinStakingMkQyLLb.getNumberOfHolders.call({from: accounts[4]});
//		await MoshiachCoinStakingMkQyLLb.claimDivs.call({from: accounts[5]});

		assert.equal(uintCN9Bl0j, BigInt("60000000000000000000000000"))
		assert.equal(uintdXGUE0O, BigInt("0"))
		await expect(MoshiachCoinStakingMkQyLLb.claimDivs.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingm1Om9F4 = await MoshiachCoinStaking.new({from: accounts[4]});
		const uintkfyyMdG = BigInt("969")
		const addressW51gNT8 = accounts[2]
		const uintdCWvF7B = BigInt("538")
		const uintCxxevQR = BigInt("428")
//		await MoshiachCoinStakingm1Om9F4.claimDivs.call({from: accounts[0]});
//		const uintjHDGj2e = await MoshiachCoinStakingm1Om9F4.deposit.call(uintkfyyMdG, {from: accounts[2]});
//		const uintwkyfxGa = await MoshiachCoinStakingm1Om9F4.getPendingDivs.call(addressW51gNT8, {from: accounts[0]});
//		const uintIJfAAjm = await MoshiachCoinStakingm1Om9F4.deposit.call(uintdCWvF7B, {from: accounts[4]});
//		const uintKQvZEh7 = await MoshiachCoinStakingm1Om9F4.withdraw.call(uintCxxevQR, {from: accounts[3]});

		await expect(MoshiachCoinStakingm1Om9F4.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingAao48mP = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressyKZcsCk = accounts[4]
		const uintMp3yR7D = await MoshiachCoinStakingAao48mP.getPendingDivs.call(addressyKZcsCk, {from: accounts[4]});
		const uintHHigNzE = await MoshiachCoinStakingAao48mP.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintbXuad7z = await MoshiachCoinStakingAao48mP.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintYc89mJC = await MoshiachCoinStakingAao48mP.getNumberOfHolders.call({from: accounts[0]});
		await MoshiachCoinStakingAao48mP.claimDivs.call({from: accounts[0]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStaking70RoBl = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintQ95hqGp = BigInt("19")
		const addresslkc9e52 = accounts[3]
		const uintMzslrIl = await MoshiachCoinStaking70RoBl.getNumberOfHolders.call({from: accounts[2]});
		const uintZxeFIId = await MoshiachCoinStaking70RoBl.getStakingAndDaoAmount.call({from: accounts[3]});
//		const uintrjpLzOz = await MoshiachCoinStaking70RoBl.withdraw.call(uintQ95hqGp, {from: accounts[2]});
//		await MoshiachCoinStaking70RoBl.claimDivs.call({from: accounts[4]});
//		const addressNQQheq = await MoshiachCoinStaking70RoBl.transferOwnership.call(addresslkc9e52, {from: accounts[4]});
//		await MoshiachCoinStaking70RoBl.claimDivs.call({from: accounts[1]});

		assert.equal(uintMzslrIl, BigInt("0"))
		assert.equal(uintZxeFIId, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStaking70RoBl.withdraw.call(uintQ95hqGp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStaking70RoBl = await MoshiachCoinStaking.new({from: accounts[2]});
		const addresssK9gQ1M = accounts[1]
		const uintxmDY7HD = BigInt("19")
		const addressnXHn7hE = accounts[3]
		const uintMzslrIl = await MoshiachCoinStaking70RoBl.getNumberOfHolders.call({from: accounts[2]});
		const uintZxeFIId = await MoshiachCoinStaking70RoBl.getStakingAndDaoAmount.call({from: accounts[3]});
		const addressYvUNT51 = await MoshiachCoinStaking70RoBl.transferOwnership.call(addresssK9gQ1M, {from: accounts[2]});
//		const uintrjpLzOz = await MoshiachCoinStaking70RoBl.withdraw.call(uintxmDY7HD, {from: accounts[2]});
//		await MoshiachCoinStaking70RoBl.claimDivs.call({from: accounts[4]});
//		const addressNQQheq = await MoshiachCoinStaking70RoBl.transferOwnership.call(addressnXHn7hE, {from: accounts[4]});
//		await MoshiachCoinStaking70RoBl.claimDivs.call({from: accounts[1]});

		assert.equal(uintMzslrIl, BigInt("0"))
		assert.equal(uintZxeFIId, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStaking70RoBl.withdraw.call(uintxmDY7HD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStaking8v0x9d = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintsGKls1W = BigInt("1328")
		const addressaDanxnq = accounts[1]
		const addressjyc3Sm = accounts[2]
		const addresstWcIyM = accounts[2]
		const addresselF8670 = accounts[0]
//		await MoshiachCoinStaking8v0x9d.claimDivs.call({from: accounts[0]});
//		const addressO0igGkr = await MoshiachCoinStaking8v0x9d.transferAnyERC20Tokens.call(addressjyc3Sm, addressaDanxnq, uintsGKls1W, {from: accounts[0]});
//		const addresstKn2UUL = await MoshiachCoinStaking8v0x9d.transferOwnership.call(addresstWcIyM, {from: accounts[0]});
//		const uintB73NDnH = await MoshiachCoinStaking8v0x9d.getPendingDivs.call(addresselF8670, {from: accounts[4]});
//		const uintaNmHj7j = await MoshiachCoinStaking8v0x9d.getStakingAndDaoAmount.call({from: accounts[3]});

		await expect(MoshiachCoinStaking8v0x9d.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakinghg0kwFR = await MoshiachCoinStaking.new({from: accounts[4]});
		const uinteJGR45b = BigInt("419")
//		await MoshiachCoinStakinghg0kwFR.onlyOwner.call({from: accounts[2]});
//		const uintduYLRuE = await MoshiachCoinStakinghg0kwFR.withdraw.call(uinteJGR45b, {from: accounts[4]});
//		await MoshiachCoinStakinghg0kwFR.claimDivs.call({from: accounts[4]});
//		await MoshiachCoinStakinghg0kwFR.claimDivs.call({from: accounts[1]});

		await expect(MoshiachCoinStakinghg0kwFR.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})