const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingmgHIsy = await EqFinanceStaking.new({from: accounts[0]});
		const uinttJiR20Q = BigInt("891")
		const uintDR0elow = await EqFinanceStakingmgHIsy.getNumberOfHolders.call({from: accounts[0]});
//		const uintLhiLf2b = await EqFinanceStakingmgHIsy.withdraw.call(uinttJiR20Q, {from: accounts[0]});
//		const uintJlnVvVy = await EqFinanceStakingmgHIsy.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintDR0elow, BigInt("0"))
		await expect(EqFinanceStakingmgHIsy.withdraw.call(uinttJiR20Q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingArzfwUa = await EqFinanceStaking.new({from: accounts[2]});
		const uinttsgxkwH = BigInt("98")
		const addressh16qB6H = accounts[5]
		const uintSix1E59 = BigInt("886")
		const uintH1p22yF = await EqFinanceStakingArzfwUa.getNumberOfHolders.call({from: accounts[3]});
//		const uintnfdoYHR = await EqFinanceStakingArzfwUa.deposit.call(uinttsgxkwH, {from: accounts[2]});
//		const uintkGLInPQ = await EqFinanceStakingArzfwUa.getNumberOfHolders.call({from: accounts[0]});
//		const uintHm4165O = await EqFinanceStakingArzfwUa.getPendingDivs.call(addressh16qB6H, {from: "0x0000000000000000000000000000000000000001"});
//		const uintxbpucjP = await EqFinanceStakingArzfwUa.withdraw.call(uintSix1E59, {from: accounts[2]});

		assert.equal(uintH1p22yF, BigInt("0"))
		await expect(EqFinanceStakingArzfwUa.deposit.call(uinttsgxkwH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStaking4iXShW = await EqFinanceStaking.new({from: accounts[1]});
		const addressPbZN9vF = accounts[3]
		const uintGjZWune = BigInt("2029")
		const uintvBDOyS = BigInt("1272")
		const addressZkBUYuE = accounts[1]
		const addressbvnGIN3 = accounts[4]
//		await EqFinanceStaking4iXShW.claimDivs.call({from: accounts[1]});
//		const uintyyIJg0G = await EqFinanceStaking4iXShW.getNumberOfHolders.call({from: accounts[3]});
//		const uintv7P4fCB = await EqFinanceStaking4iXShW.getPendingDivs.call(addressPbZN9vF, {from: accounts[1]});
//		const uintrGn0NB = await EqFinanceStaking4iXShW.withdraw.call(uintGjZWune, {from: accounts[0]});
//		const addresseIaXEW = await EqFinanceStaking4iXShW.transferAnyERC20Tokens.call(addressbvnGIN3, addressZkBUYuE, uintvBDOyS, {from: accounts[4]});

		await expect(EqFinanceStaking4iXShW.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingHJY8np = await EqFinanceStaking.new({from: accounts[3]});
		const addresse2HhJcU = accounts[1]
		const uintymdOWSS = BigInt("1527")
//		await EqFinanceStakingHJY8np.claimDivs.call({from: accounts[1]});
//		const addressmrBxcQp = await EqFinanceStakingHJY8np.transferOwnership.call(addresse2HhJcU, {from: accounts[3]});
//		const uintSYACevU = await EqFinanceStakingHJY8np.withdraw.call(uintymdOWSS, {from: accounts[4]});

		await expect(EqFinanceStakingHJY8np.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingxHctrHm = await EqFinanceStaking.new({from: accounts[0]});
		const uintppbIbvV = BigInt("543")
		const uintGJ2m1DG = BigInt("597")
		const address3v75yP = accounts[2]
		const addresscEsmDo4 = accounts[3]
		const uintk9kvxIf = await EqFinanceStakingxHctrHm.getNumberOfHolders.call({from: accounts[0]});
		const uintazXZfiI = await EqFinanceStakingxHctrHm.getStakingAndDaoAmount.call({from: accounts[3]});
//		const uintXEwJAQq = await EqFinanceStakingxHctrHm.withdraw.call(uintppbIbvV, {from: accounts[1]});
//		await EqFinanceStakingxHctrHm.claimDivs.call({from: accounts[1]});
//		const addressAIAXjgy = await EqFinanceStakingxHctrHm.transferAnyERC20Tokens.call(addresscEsmDo4, address3v75yP, uintGJ2m1DG, {from: accounts[0]});

		assert.equal(uintazXZfiI, BigInt("3000000000000000000000000"))
		assert.equal(uintk9kvxIf, BigInt("0"))
		await expect(EqFinanceStakingxHctrHm.withdraw.call(uintppbIbvV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakings0OKK5o = await EqFinanceStaking.new({from: accounts[2]});
		const addressDbJ8CX = accounts[3]
//		await EqFinanceStakings0OKK5o.onlyOwner.call({from: accounts[0]});
//		const uintpOmIjk = await EqFinanceStakings0OKK5o.getPendingDivs.call(addressDbJ8CX, {from: accounts[3]});
//		const uintyVY8bRH = await EqFinanceStakings0OKK5o.getStakingAndDaoAmount.call({from: accounts[2]});
//		await EqFinanceStakings0OKK5o.claimDivs.call({from: accounts[1]});

		await expect(EqFinanceStakings0OKK5o.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingrSsGe6 = await EqFinanceStaking.new({from: accounts[1]});
		const uintOhfAvMx = BigInt("0")
		const uintbrT4VBe = await EqFinanceStakingrSsGe6.getStakingAndDaoAmount.call({from: accounts[1]});
//		await EqFinanceStakingrSsGe6.claimDivs.call({from: accounts[4]});
//		const uintqJhWFE9 = await EqFinanceStakingrSsGe6.deposit.call(uintOhfAvMx, {from: accounts[0]});

		assert.equal(uintbrT4VBe, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingrSsGe6.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingrSsGe6 = await EqFinanceStaking.new({from: accounts[1]});
		const uintv9GgFa = BigInt("1242")
		const addresskpDIKQT = accounts[1]
		const addressRY4tBjP = "0x0000000000000000000000000000000000000001"
		const uintdG6dLz = BigInt("33")
//		const addressQvjFqv5 = await EqFinanceStakingrSsGe6.transferAnyERC20Tokens.call(addressRY4tBjP, addresskpDIKQT, uintv9GgFa, {from: accounts[1]});
//		const uintqJhWFE9 = await EqFinanceStakingrSsGe6.deposit.call(uintdG6dLz, {from: accounts[0]});

		await expect(EqFinanceStakingrSsGe6.transferAnyERC20Tokens.call(addressRY4tBjP, addresskpDIKQT, uintv9GgFa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingsgtpjc = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressUvgXIcX = accounts[5]
		const uintpSkskAC = await EqFinanceStakingsgtpjc.getStakingAndDaoAmount.call({from: accounts[3]});
		await EqFinanceStakingsgtpjc.onlyOwner.call({from: accounts[0]});
		const uinto2ED3um = await EqFinanceStakingsgtpjc.getPendingDivs.call(addressUvgXIcX, {from: accounts[1]});
	});
})