const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingqVg4OB = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressXuTYrzF = accounts[5]
		const addressf08tA15 = accounts[1]
		const uintXVl0Xik = await MoshiachCoinStakingqVg4OB.getPendingDivs.call(addressXuTYrzF, {from: accounts[0]});
		const uintXvLkxEh = await MoshiachCoinStakingqVg4OB.getPendingDivs.call(addressf08tA15, {from: accounts[5]});
		const uintkPycFU = await MoshiachCoinStakingqVg4OB.getStakingAndDaoAmount.call({from: accounts[2]});

		assert.equal(uintXVl0Xik, BigInt("0"))
		assert.equal(uintXvLkxEh, BigInt("0"))
		assert.equal(uintkPycFU, BigInt("60000000000000000000000000"))
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingz3gmjLu = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintZZ8saI0 = BigInt("186")
		const uintjnvSOzL = BigInt("715")
		const addressa06cdSG = accounts[3]
		const addressJ2hLrZ7 = accounts[5]
		const addresseE2p8D9 = accounts[2]
		const uintGlmTqZk = await MoshiachCoinStakingz3gmjLu.deposit.call(uintZZ8saI0, {from: accounts[4]});
		await MoshiachCoinStakingz3gmjLu.claimDivs.call({from: accounts[4]});
		const addresssfOXNNV = await MoshiachCoinStakingz3gmjLu.transferAnyERC20Tokens.call(addressJ2hLrZ7, addressa06cdSG, uintjnvSOzL, {from: accounts[1]});
		const addresslfeMs0F = await MoshiachCoinStakingz3gmjLu.transferOwnership.call(addresseE2p8D9, {from: accounts[4]});

		await expect(MoshiachCoinStakingz3gmjLu.deposit.call(uintZZ8saI0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakings0sOwr9 = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressD3xrvlK = accounts[3]
		const addressNSljnFV = accounts[5]
		const uintWoxkm00 = BigInt("1653")
		const uintotIf23 = await MoshiachCoinStakings0sOwr9.getPendingDivs.call(addressD3xrvlK, {from: accounts[4]});
		await MoshiachCoinStakings0sOwr9.claimDivs.call({from: accounts[5]});
		const addressvs8s7i = await MoshiachCoinStakings0sOwr9.transferOwnership.call(addressNSljnFV, {from: accounts[3]});
		const uintgqZPEj9 = await MoshiachCoinStakings0sOwr9.withdraw.call(uintWoxkm00, {from: accounts[1]});

		assert.equal(uintotIf23, BigInt("0"))
		await expect(MoshiachCoinStakings0sOwr9.claimDivs.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingBaiPNsk = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintvzMpafY = BigInt("1478")
		const uintlPAKI8Y = BigInt("177")
		await MoshiachCoinStakingBaiPNsk.onlyOwner.call({from: accounts[5]});
		const uintdEhT2qW = await MoshiachCoinStakingBaiPNsk.withdraw.call(uintvzMpafY, {from: accounts[0]});
		const uinteGiFyAf = await MoshiachCoinStakingBaiPNsk.getNumberOfHolders.call({from: accounts[2]});
		await MoshiachCoinStakingBaiPNsk.claimDivs.call({from: accounts[2]});
		const uintO1D5jKT = await MoshiachCoinStakingBaiPNsk.withdraw.call(uintlPAKI8Y, {from: accounts[4]});

		await expect(MoshiachCoinStakingBaiPNsk.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingAs3EAlO = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressbEw2E8i = accounts[2]
		const addressxxCa8YU = accounts[1]
		const uintIZWGKcJ = await MoshiachCoinStakingAs3EAlO.getPendingDivs.call(addressbEw2E8i, {from: accounts[1]});
		const uintgCWMltq = await MoshiachCoinStakingAs3EAlO.getNumberOfHolders.call({from: accounts[0]});
		const addressRNmgTpc = await MoshiachCoinStakingAs3EAlO.transferOwnership.call(addressxxCa8YU, {from: accounts[3]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingqVg4OB = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressKnGUjP = accounts[6]
		const addressQz2jgaH = accounts[1]
		const uintXVl0Xik = await MoshiachCoinStakingqVg4OB.getPendingDivs.call(addressKnGUjP, {from: accounts[0]});
		const uintXvLkxEh = await MoshiachCoinStakingqVg4OB.getPendingDivs.call(addressQz2jgaH, {from: accounts[5]});
		const uintkPycFU = await MoshiachCoinStakingqVg4OB.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintVC2BIZQ = await MoshiachCoinStakingqVg4OB.getNumberOfHolders.call({from: accounts[5]});

		assert.equal(uintVC2BIZQ, BigInt("0"))
		assert.equal(uintXVl0Xik, BigInt("0"))
		assert.equal(uintXvLkxEh, BigInt("0"))
		assert.equal(uintkPycFU, BigInt("60000000000000000000000000"))
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingknj9U1Q = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintCppzk4i = BigInt("1850")
		const addressTtXQCh = accounts[3]
		const addresse0cwTg = accounts[0]
		const addresseQ33kgf = accounts[4]
		const addressOzRSGVC = accounts[4]
		const addresswyeyKw = await MoshiachCoinStakingknj9U1Q.transferAnyERC20Tokens.call(addresse0cwTg, addressTtXQCh, uintCppzk4i, {from: accounts[3]});
		const addresspyqjUr = await MoshiachCoinStakingknj9U1Q.transferOwnership.call(addresseQ33kgf, {from: accounts[4]});
		const addressMlt94ip = await MoshiachCoinStakingknj9U1Q.transferOwnership.call(addressOzRSGVC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MoshiachCoinStakingknj9U1Q.transferAnyERC20Tokens.call(addresse0cwTg, addressTtXQCh, uintCppzk4i, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})