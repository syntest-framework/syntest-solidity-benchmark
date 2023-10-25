const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingBlpUxo = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressx8Mrnu7 = accounts[5]
//		await MoshiachCoinStakingBlpUxo.claimDivs.call({from: accounts[1]});
//		const uintT6xLUBm = await MoshiachCoinStakingBlpUxo.getNumberOfHolders.call({from: accounts[4]});
//		await MoshiachCoinStakingBlpUxo.claimDivs.call({from: accounts[3]});
//		const uinteBccUKj = await MoshiachCoinStakingBlpUxo.getPendingDivs.call(addressx8Mrnu7, {from: accounts[2]});

		await expect(MoshiachCoinStakingBlpUxo.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingYimqtu = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressNPoFbr = accounts[3]
		const uintxKweSkk = BigInt("1007")
//		await MoshiachCoinStakingYimqtu.onlyOwner.call({from: accounts[3]});
//		const uintUn23jLf = await MoshiachCoinStakingYimqtu.getNumberOfHolders.call({from: accounts[0]});
//		const uintPWQBOut = await MoshiachCoinStakingYimqtu.getPendingDivs.call(addressNPoFbr, {from: accounts[0]});
//		const uintruGey6S = await MoshiachCoinStakingYimqtu.withdraw.call(uintxKweSkk, {from: accounts[3]});

		await expect(MoshiachCoinStakingYimqtu.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingh562Xbe = await MoshiachCoinStaking.new({from: accounts[1]});
		const uint0Ls8M5 = BigInt("97")
		const addressriilt06 = accounts[4]
//		const uintU245ZPa = await MoshiachCoinStakingh562Xbe.withdraw.call(uint0Ls8M5, {from: accounts[0]});
//		const uintdogOGg = await MoshiachCoinStakingh562Xbe.getPendingDivs.call(addressriilt06, {from: accounts[0]});

		await expect(MoshiachCoinStakingh562Xbe.withdraw.call(uint0Ls8M5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingfkL4QoZ = await MoshiachCoinStaking.new({from: accounts[1]});
		const uinta38aou = BigInt("1689")
		const addressZyWSU6 = accounts[3]
		const addressmLedJYX = accounts[2]
		const addressgz1eYSz = accounts[4]
//		const addressISNqRMM = await MoshiachCoinStakingfkL4QoZ.transferAnyERC20Tokens.call(addressmLedJYX, addressZyWSU6, uinta38aou, {from: accounts[2]});
//		const addressStUS5Uz = await MoshiachCoinStakingfkL4QoZ.transferOwnership.call(addressgz1eYSz, {from: accounts[2]});
//		await MoshiachCoinStakingfkL4QoZ.onlyOwner.call({from: accounts[1]});

		await expect(MoshiachCoinStakingfkL4QoZ.transferAnyERC20Tokens.call(addressmLedJYX, addressZyWSU6, uinta38aou, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingtT6zGbY = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressQZvE7Mm = accounts[0]
		const uintrN5RkwI = BigInt("1782")
		const uintCbwqoc = await MoshiachCoinStakingtT6zGbY.getPendingDivs.call(addressQZvE7Mm, {from: accounts[4]});
//		const uintJ0jmSYG = await MoshiachCoinStakingtT6zGbY.deposit.call(uintrN5RkwI, {from: accounts[0]});
//		const uintmqHQWXI = await MoshiachCoinStakingtT6zGbY.getNumberOfHolders.call({from: accounts[4]});

		assert.equal(uintCbwqoc, BigInt("0"))
		await expect(MoshiachCoinStakingtT6zGbY.deposit.call(uintrN5RkwI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingtT6zGbY = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressb5KSzhW = accounts[0]
		const addressqjnMyb8 = "0x0000000000000000000000000000000000000001"
		const uintWnAJ7Cj = BigInt("1782")
		const uintewn8dX = await MoshiachCoinStakingtT6zGbY.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintCbwqoc = await MoshiachCoinStakingtT6zGbY.getPendingDivs.call(addressb5KSzhW, {from: accounts[4]});
		const uinteq7oi9x = await MoshiachCoinStakingtT6zGbY.getPendingDivs.call(addressqjnMyb8, {from: accounts[0]});
//		const uintJ0jmSYG = await MoshiachCoinStakingtT6zGbY.deposit.call(uintWnAJ7Cj, {from: accounts[0]});
//		const uintmqHQWXI = await MoshiachCoinStakingtT6zGbY.getNumberOfHolders.call({from: accounts[4]});

		assert.equal(uintCbwqoc, BigInt("0"))
		assert.equal(uinteq7oi9x, BigInt("0"))
		assert.equal(uintewn8dX, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingtT6zGbY.deposit.call(uintWnAJ7Cj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingxm6aLPo = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressPI96E31 = accounts[4]
		const uintdBNjnQy = BigInt("0")
		const uintkjbkMXG = await MoshiachCoinStakingxm6aLPo.getPendingDivs.call(addressPI96E31, {from: accounts[1]});
//		const uintLlcUdHx = await MoshiachCoinStakingxm6aLPo.deposit.call(uintdBNjnQy, {from: accounts[5]});

		assert.equal(uintkjbkMXG, BigInt("0"))
		await expect(MoshiachCoinStakingxm6aLPo.deposit.call(uintdBNjnQy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingBlpUxo = await MoshiachCoinStaking.new({from: accounts[2]});
		const addresshIAsJpt = "0x0000000000000000000000000000000000000001"
		const uinteUdFxjm = BigInt("1598")
		const uinthRtJLIm = BigInt("107")
		const addressONnkLck = accounts[6]
		const uintu8X073e = BigInt("143")
		const addressqy4iRWn = accounts[3]
//		await MoshiachCoinStakingBlpUxo.claimDivs.call({from: accounts[1]});
//		const addressT41Laly = await MoshiachCoinStakingBlpUxo.transferOwnership.call(addresshIAsJpt, {from: accounts[2]});
//		const uintEARDgF = await MoshiachCoinStakingBlpUxo.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintT6xLUBm = await MoshiachCoinStakingBlpUxo.getNumberOfHolders.call({from: accounts[4]});
//		const uint19BgDV = await MoshiachCoinStakingBlpUxo.withdraw.call(uinteUdFxjm, {from: accounts[2]});
//		await MoshiachCoinStakingBlpUxo.claimDivs.call({from: accounts[4]});
//		const uintDgKFqWz = await MoshiachCoinStakingBlpUxo.withdraw.call(uinthRtJLIm, {from: accounts[0]});
//		const uintEw74VYx = await MoshiachCoinStakingBlpUxo.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		const uinteBccUKj = await MoshiachCoinStakingBlpUxo.getPendingDivs.call(addressONnkLck, {from: accounts[2]});
//		const uintPW2myyk = await MoshiachCoinStakingBlpUxo.withdraw.call(uintu8X073e, {from: accounts[3]});
//		await MoshiachCoinStakingBlpUxo.claimDivs.call({from: accounts[5]});
//		const addressvTCiE7k = await MoshiachCoinStakingBlpUxo.transferOwnership.call(addressqy4iRWn, {from: accounts[2]});

		await expect(MoshiachCoinStakingBlpUxo.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingBlpUxo = await MoshiachCoinStaking.new({from: accounts[2]});
		const uint4BvnvX = BigInt("1568")
		const addresswANDrd9 = accounts[0]
		const addressG94fV8F = accounts[5]
		const uintHQCVhw = BigInt("1957")
//		const addressdNetXII = await MoshiachCoinStakingBlpUxo.transferAnyERC20Tokens.call(addressG94fV8F, addresswANDrd9, uint4BvnvX, {from: accounts[2]});
//		await MoshiachCoinStakingBlpUxo.claimDivs.call({from: accounts[3]});
//		const uinte7D5Qj9 = await MoshiachCoinStakingBlpUxo.withdraw.call(uintHQCVhw, {from: accounts[3]});

		await expect(MoshiachCoinStakingBlpUxo.transferAnyERC20Tokens.call(addressG94fV8F, addresswANDrd9, uint4BvnvX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStaking2JQqkv = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressNxUnOF4 = accounts[2]
		const uintImOiSF = await MoshiachCoinStaking2JQqkv.getPendingDivs.call(addressNxUnOF4, {from: accounts[0]});
		const uintghUhyB = await MoshiachCoinStaking2JQqkv.getNumberOfHolders.call({from: accounts[1]});
		const uintSSQqj0R = await MoshiachCoinStaking2JQqkv.getStakingAndDaoAmount.call({from: accounts[5]});
		const uintIuR6ZjF = await MoshiachCoinStaking2JQqkv.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
	});
})