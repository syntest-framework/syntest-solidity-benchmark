const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingPWVYjEh = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFb0lsNp = BigInt("1522")
		const addressGGoEmFW = accounts[4]
		const uinthMNKRMA = BigInt("405")
		const addressdQcpHr1 = accounts[4]
		const addressE6Hc1bz = "0x0000000000000000000000000000000000000001"
		const uintyFH4DM9 = await EqFinanceStakingPWVYjEh.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintEXQ92VM = await EqFinanceStakingPWVYjEh.getNumberOfHolders.call({from: accounts[2]});
		const uintWvXTUYZ = await EqFinanceStakingPWVYjEh.withdraw.call(uintFb0lsNp, {from: accounts[3]});
		const uintbIXDZUj = await EqFinanceStakingPWVYjEh.getPendingDivs.call(addressGGoEmFW, {from: accounts[5]});
		const addressQGUu59c = await EqFinanceStakingPWVYjEh.transferAnyERC20Tokens.call(addressE6Hc1bz, addressdQcpHr1, uinthMNKRMA, {from: accounts[2]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingLHkxBxH = await EqFinanceStaking.new({from: accounts[0]});
		const address2QdXvW = accounts[4]
		const addressLcHmzlN = accounts[1]
		const uintaIZcMC4 = await EqFinanceStakingLHkxBxH.getStakingAndDaoAmount.call({from: accounts[3]});
		const uinteKxCDjj = await EqFinanceStakingLHkxBxH.getPendingDivs.call(address2QdXvW, {from: accounts[3]});
		const uintxm45aRG = await EqFinanceStakingLHkxBxH.getPendingDivs.call(addressLcHmzlN, {from: accounts[2]});

		assert.equal(uintaIZcMC4, BigInt("3000000000000000000000000"))
		assert.equal(uinteKxCDjj, BigInt("0"))
		assert.equal(uintxm45aRG, BigInt("0"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingOORH8dZ = await EqFinanceStaking.new({from: accounts[2]});
		const addressNQBBAu0 = accounts[3]
		const uintYe9iTqJ = BigInt("1414")
		const addressg38ta0L = await EqFinanceStakingOORH8dZ.transferOwnership.call(addressNQBBAu0, {from: accounts[0]});
		await EqFinanceStakingOORH8dZ.claimDivs.call({from: accounts[0]});
		const uintGnnR5PI = await EqFinanceStakingOORH8dZ.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintK7Z5WL8 = await EqFinanceStakingOORH8dZ.withdraw.call(uintYe9iTqJ, {from: accounts[4]});
		const uintTHgUFQK = await EqFinanceStakingOORH8dZ.getStakingAndDaoAmount.call({from: accounts[4]});

		await expect(EqFinanceStakingOORH8dZ.transferOwnership.call(addressNQBBAu0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingGeFafAw = await EqFinanceStaking.new({from: accounts[3]});
		const uintYtTeYvU = BigInt("619")
		const uintCW1y2Oy = await EqFinanceStakingGeFafAw.withdraw.call(uintYtTeYvU, {from: accounts[2]});
		const uinto4Z18Qa = await EqFinanceStakingGeFafAw.getNumberOfHolders.call({from: accounts[0]});
		const uintcQr8M2b = await EqFinanceStakingGeFafAw.getNumberOfHolders.call({from: accounts[1]});

		await expect(EqFinanceStakingGeFafAw.withdraw.call(uintYtTeYvU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingRgBZND = await EqFinanceStaking.new({from: accounts[4]});
		await EqFinanceStakingRgBZND.claimDivs.call({from: accounts[1]});
		const uintCHVX4dj = await EqFinanceStakingRgBZND.getNumberOfHolders.call({from: accounts[1]});
		const uintWyFf5Lg = await EqFinanceStakingRgBZND.getStakingAndDaoAmount.call({from: accounts[0]});

		await expect(EqFinanceStakingRgBZND.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingeSCNmxs = await EqFinanceStaking.new({from: accounts[3]});
		const uintt43qZQ5 = BigInt("1183")
		const uintaw61Xkc = await EqFinanceStakingeSCNmxs.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uintP7Wrzxp = await EqFinanceStakingeSCNmxs.getNumberOfHolders.call({from: accounts[1]});
		const uintEDM7Do = await EqFinanceStakingeSCNmxs.deposit.call(uintt43qZQ5, {from: accounts[0]});

		assert.equal(uintP7Wrzxp, BigInt("0"))
		assert.equal(uintaw61Xkc, BigInt("0"))
		await expect(EqFinanceStakingeSCNmxs.deposit.call(uintt43qZQ5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingY46JZk = await EqFinanceStaking.new({from: accounts[2]});
		const addressZEixcn = accounts[4]
		const uintZiZId9r = BigInt("1632")
		const uintfe7QdPS = BigInt("569")
		const addressJfQ6oxP = accounts[0]
		const addressGXozlb8 = accounts[5]
		const addressNPQKORA = await EqFinanceStakingY46JZk.transferOwnership.call(addressZEixcn, {from: accounts[2]});
		const uintCaQpwi = await EqFinanceStakingY46JZk.withdraw.call(uintZiZId9r, {from: accounts[5]});
		const addressZjj0o9M = await EqFinanceStakingY46JZk.transferAnyERC20Tokens.call(addressGXozlb8, addressJfQ6oxP, uintfe7QdPS, {from: accounts[0]});

		await expect(EqFinanceStakingY46JZk.withdraw.call(uintZiZId9r, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingRgBZND = await EqFinanceStaking.new({from: accounts[4]});
		await EqFinanceStakingRgBZND.claimDivs.call({from: accounts[1]});
		const uintCHVX4dj = await EqFinanceStakingRgBZND.getNumberOfHolders.call({from: accounts[1]});
		const uintWyFf5Lg = await EqFinanceStakingRgBZND.getStakingAndDaoAmount.call({from: accounts[0]});
		await EqFinanceStakingRgBZND.onlyOwner.call({from: accounts[3]});

		await expect(EqFinanceStakingRgBZND.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingY46JZk = await EqFinanceStaking.new({from: accounts[2]});
		const uintqdbAnED = BigInt("717")
		const addressJu3gKYP = accounts[1]
		const addressHoXOw4Q = accounts[1]
		const uintKhQfN0X = BigInt("569")
		const addressCvOsF62 = accounts[1]
		const addressP34Yrh = accounts[5]
		const addressTnbSyVz = await EqFinanceStakingY46JZk.transferAnyERC20Tokens.call(addressHoXOw4Q, addressJu3gKYP, uintqdbAnED, {from: accounts[2]});
		const addressZjj0o9M = await EqFinanceStakingY46JZk.transferAnyERC20Tokens.call(addressP34Yrh, addressCvOsF62, uintKhQfN0X, {from: accounts[0]});

		await expect(EqFinanceStakingY46JZk.transferAnyERC20Tokens.call(addressHoXOw4Q, addressJu3gKYP, uintqdbAnED, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingeSCNmxs = await EqFinanceStaking.new({from: accounts[3]});
		const uintkPgUCM = BigInt("0")
		const uintBMIsT2O = await EqFinanceStakingeSCNmxs.deposit.call(uintkPgUCM, {from: accounts[1]});
		await EqFinanceStakingeSCNmxs.claimDivs.call({from: accounts[2]});

		await expect(EqFinanceStakingeSCNmxs.deposit.call(uintkPgUCM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})