const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingCg72JGF = await MoshiachCoinStaking.new({from: accounts[2]});
		const uint9ukUJZ = BigInt("525")
//		await MoshiachCoinStakingCg72JGF.claimDivs.call({from: accounts[0]});
//		await MoshiachCoinStakingCg72JGF.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintcWR39jP = await MoshiachCoinStakingCg72JGF.withdraw.call(uint9ukUJZ, {from: accounts[2]});

		await expect(MoshiachCoinStakingCg72JGF.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingEczYxmB = await MoshiachCoinStaking.new({from: accounts[3]});
		const uintI3D4DhQ = BigInt("266")
		const uintCEOArIs = BigInt("1425")
		const uintwRNvk4v = await MoshiachCoinStakingEczYxmB.getStakingAndDaoAmount.call({from: accounts[2]});
//		await MoshiachCoinStakingEczYxmB.claimDivs.call({from: accounts[2]});
//		const uintFq8xHa8 = await MoshiachCoinStakingEczYxmB.getStakingAndDaoAmount.call({from: accounts[3]});
//		const uintVlrqERT = await MoshiachCoinStakingEczYxmB.deposit.call(uintI3D4DhQ, {from: accounts[0]});
//		const uinteU0WkXq = await MoshiachCoinStakingEczYxmB.deposit.call(uintCEOArIs, {from: accounts[0]});

		assert.equal(uintwRNvk4v, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingEczYxmB.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingX7dop8c = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintmUJf8t7 = BigInt("1411")
		const addressMUh3stS = accounts[4]
		const addressai6vqoc = accounts[3]
		const addressCJTaHoI = accounts[2]
		const addressUWCmLpx = accounts[2]
//		await MoshiachCoinStakingX7dop8c.claimDivs.call({from: accounts[2]});
//		const addressvg25Wvt = await MoshiachCoinStakingX7dop8c.transferAnyERC20Tokens.call(addressai6vqoc, addressMUh3stS, uintmUJf8t7, {from: accounts[1]});
//		const uintAkj63S7 = await MoshiachCoinStakingX7dop8c.getPendingDivs.call(addressCJTaHoI, {from: accounts[5]});
//		const addresso6qjaK6 = await MoshiachCoinStakingX7dop8c.transferOwnership.call(addressUWCmLpx, {from: accounts[2]});

		await expect(MoshiachCoinStakingX7dop8c.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingnGpLJp = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVKFzyuC = accounts[3]
		const addressVt3074B = accounts[3]
		const uintNyciPj = BigInt("145")
		const uintUnDwTZe = BigInt("1474")
		const addresswgp7jDw = accounts[5]
		const addresstWTg1f3 = accounts[4]
		const addressXO8pqGc = await MoshiachCoinStakingnGpLJp.transferOwnership.call(addressVKFzyuC, {from: accounts[3]});
		const addressYVJrKAg = await MoshiachCoinStakingnGpLJp.transferOwnership.call(addressVt3074B, {from: accounts[2]});
		const uintOaTjaAw = await MoshiachCoinStakingnGpLJp.getNumberOfHolders.call({from: accounts[1]});
		const uintDLMCtK3 = await MoshiachCoinStakingnGpLJp.withdraw.call(uintNyciPj, {from: accounts[3]});
		const addressARsbqck = await MoshiachCoinStakingnGpLJp.transferAnyERC20Tokens.call(addresstWTg1f3, addresswgp7jDw, uintUnDwTZe, {from: accounts[1]});
		const uintyptGokT = await MoshiachCoinStakingnGpLJp.getStakingAndDaoAmount.call({from: accounts[1]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingayuHJs6 = await MoshiachCoinStaking.new({from: accounts[0]});
		const addressvu4cruc = accounts[3]
		const addressRvNbJ9z = accounts[2]
		const uintbZYBOsq = await MoshiachCoinStakingayuHJs6.getPendingDivs.call(addressvu4cruc, {from: accounts[0]});
		const uintummyyIF = await MoshiachCoinStakingayuHJs6.getNumberOfHolders.call({from: accounts[5]});
		const uintr72pMTp = await MoshiachCoinStakingayuHJs6.getNumberOfHolders.call({from: accounts[5]});
//		const addressgxP6Cnl = await MoshiachCoinStakingayuHJs6.transferOwnership.call(addressRvNbJ9z, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintbZYBOsq, BigInt("0"))
		assert.equal(uintr72pMTp, BigInt("0"))
		assert.equal(uintummyyIF, BigInt("0"))
		await expect(MoshiachCoinStakingayuHJs6.transferOwnership.call(addressRvNbJ9z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingp3qT4zQ = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintjnhfJ64 = await MoshiachCoinStakingp3qT4zQ.getStakingAndDaoAmount.call({from: accounts[0]});
//		await MoshiachCoinStakingp3qT4zQ.onlyOwner.call({from: accounts[0]});
//		const uintNga7bwf = await MoshiachCoinStakingp3qT4zQ.getNumberOfHolders.call({from: accounts[4]});

		assert.equal(uintjnhfJ64, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingp3qT4zQ.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingTbAl1K = await MoshiachCoinStaking.new({from: accounts[0]});
		const addresslKaR9pM = accounts[4]
		const uinthj7gN4 = BigInt("1584")
		const addressHIHijei = accounts[3]
		const addressYPsZMp = accounts[3]
		const uintYn8u1G = await MoshiachCoinStakingTbAl1K.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintOw4VWeV = await MoshiachCoinStakingTbAl1K.getNumberOfHolders.call({from: accounts[3]});
		const addresssSYY4g2 = await MoshiachCoinStakingTbAl1K.transferOwnership.call(addresslKaR9pM, {from: accounts[0]});
//		await MoshiachCoinStakingTbAl1K.claimDivs.call({from: accounts[3]});
//		const addressbak5iGp = await MoshiachCoinStakingTbAl1K.transferAnyERC20Tokens.call(addressYPsZMp, addressHIHijei, uinthj7gN4, {from: accounts[0]});

		assert.equal(uintOw4VWeV, BigInt("0"))
		assert.equal(uintYn8u1G, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingTbAl1K.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})