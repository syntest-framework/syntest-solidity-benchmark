const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingN32bWDt = await EqFinanceStaking.new({from: accounts[0]});
		const uintFv9QU0q = BigInt("176")
		const addressLZli0aj = accounts[2]
		const uintljyQZKv = BigInt("248")
		const uintmRy9S5S = await EqFinanceStakingN32bWDt.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintXeYygNK = await EqFinanceStakingN32bWDt.withdraw.call(uintFv9QU0q, {from: accounts[1]});
		const addressXYcXsw7 = await EqFinanceStakingN32bWDt.transferOwnership.call(addressLZli0aj, {from: accounts[2]});
		const uintrzqOW8v = await EqFinanceStakingN32bWDt.deposit.call(uintljyQZKv, {from: "0x0000000000000000000000000000000000000001"});
		const uintC7vIvoz = await EqFinanceStakingN32bWDt.getStakingAndDaoAmount.call({from: accounts[0]});

		assert.equal(uintmRy9S5S, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingN32bWDt.withdraw.call(uintFv9QU0q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingQTyNo5M = await EqFinanceStaking.new({from: accounts[3]});
		const addressFT3Bks = "0x0000000000000000000000000000000000000001"
		const addressKUsIB8Z = accounts[0]
		const uintgwNihod = BigInt("1161")
		const addressUVTy2HZ = await EqFinanceStakingQTyNo5M.transferOwnership.call(addressFT3Bks, {from: accounts[5]});
		const uintlIgdsh = await EqFinanceStakingQTyNo5M.getNumberOfHolders.call({from: accounts[2]});
		const addresskdHOUh = await EqFinanceStakingQTyNo5M.transferOwnership.call(addressKUsIB8Z, {from: accounts[2]});
		const uintOyIXQA = await EqFinanceStakingQTyNo5M.withdraw.call(uintgwNihod, {from: accounts[1]});

		await expect(EqFinanceStakingQTyNo5M.transferOwnership.call(addressFT3Bks, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingFRN5irC = await EqFinanceStaking.new({from: accounts[5]});
		const uintJtax6T = BigInt("1501")
		const uintUJfekZ = await EqFinanceStakingFRN5irC.getNumberOfHolders.call({from: accounts[1]});
		const uintJJank0f = await EqFinanceStakingFRN5irC.getNumberOfHolders.call({from: accounts[1]});
		const uintP64XFhJ = await EqFinanceStakingFRN5irC.withdraw.call(uintJtax6T, {from: accounts[1]});

		assert.equal(uintJJank0f, BigInt("0"))
		assert.equal(uintUJfekZ, BigInt("0"))
		await expect(EqFinanceStakingFRN5irC.withdraw.call(uintJtax6T, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingrHGBozu = await EqFinanceStaking.new({from: accounts[0]});
		const addressAS63je = accounts[0]
		const uintSTkybl6 = BigInt("530")
		const uintGfcvwbw = await EqFinanceStakingrHGBozu.getPendingDivs.call(addressAS63je, {from: accounts[0]});
		await EqFinanceStakingrHGBozu.claimDivs.call({from: accounts[2]});
		const uinteK2Qky2 = await EqFinanceStakingrHGBozu.deposit.call(uintSTkybl6, {from: accounts[4]});
		await EqFinanceStakingrHGBozu.claimDivs.call({from: accounts[2]});

		assert.equal(uintGfcvwbw, BigInt("0"))
		await expect(EqFinanceStakingrHGBozu.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingBnLz1oj = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjOdzzBu = BigInt("311")
		const addressH3FE6Zc = accounts[0]
		const addressB9mN1lh = "0x0000000000000000000000000000000000000001"
		const addressZBNEs6Z = await EqFinanceStakingBnLz1oj.transferAnyERC20Tokens.call(addressB9mN1lh, addressH3FE6Zc, uintjOdzzBu, {from: accounts[4]});
		const uintrBa2C2q = await EqFinanceStakingBnLz1oj.getNumberOfHolders.call({from: accounts[1]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingGqexd62 = await EqFinanceStaking.new({from: accounts[1]});
		const addresskVPR9ad = accounts[2]
		const uintvvJCb3t = BigInt("571")
		const addressrJuTA0p = await EqFinanceStakingGqexd62.transferOwnership.call(addresskVPR9ad, {from: accounts[1]});
		const uintVL6KUGy = await EqFinanceStakingGqexd62.deposit.call(uintvvJCb3t, {from: accounts[1]});

		await expect(EqFinanceStakingGqexd62.deposit.call(uintvvJCb3t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingGqexd62 = await EqFinanceStaking.new({from: accounts[1]});
		const addressDP9oIB2 = accounts[5]
		const uintyvOGFbl = BigInt("548")
		await EqFinanceStakingGqexd62.onlyOwner.call({from: accounts[1]});
		const uintxn9IS7b = await EqFinanceStakingGqexd62.getPendingDivs.call(addressDP9oIB2, {from: "0x0000000000000000000000000000000000000001"});
		const uintVL6KUGy = await EqFinanceStakingGqexd62.deposit.call(uintyvOGFbl, {from: accounts[1]});

		await expect(EqFinanceStakingGqexd62.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingFEOOELd = await EqFinanceStaking.new({from: accounts[4]});
		const addressIIjUAOn = accounts[0]
		const uintRpBsHr3 = BigInt("1206")
		const addressZivSDt7 = accounts[4]
		const addressems79a7 = accounts[4]
		const uintHsmAeU3 = BigInt("2042")
		const uintN80LJUE = await EqFinanceStakingFEOOELd.getNumberOfHolders.call({from: accounts[4]});
		const uintHZFwLAm = await EqFinanceStakingFEOOELd.getStakingAndDaoAmount.call({from: accounts[3]});
		await EqFinanceStakingFEOOELd.claimDivs.call({from: accounts[2]});
		const uintpQ8RWxN = await EqFinanceStakingFEOOELd.getPendingDivs.call(addressIIjUAOn, {from: accounts[0]});
		const addressmkzOS0C = await EqFinanceStakingFEOOELd.transferAnyERC20Tokens.call(addressems79a7, addressZivSDt7, uintRpBsHr3, {from: accounts[4]});
		const uintilG6E1 = await EqFinanceStakingFEOOELd.withdraw.call(uintHsmAeU3, {from: accounts[3]});

		assert.equal(uintHZFwLAm, BigInt("3000000000000000000000000"))
		assert.equal(uintN80LJUE, BigInt("0"))
		await expect(EqFinanceStakingFEOOELd.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingGqexd62 = await EqFinanceStaking.new({from: accounts[1]});
		const addressnVC6R82 = accounts[2]
		const uintmR1NT8s = BigInt("0")
		const uintui7qxNz = BigInt("25")
		const uintxgJFsHa = BigInt("1603")
		const uintWRzobVH = await EqFinanceStakingGqexd62.getPendingDivs.call(addressnVC6R82, {from: accounts[2]});
		const uint3Dh6o5 = await EqFinanceStakingGqexd62.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintvRM1qFf = await EqFinanceStakingGqexd62.deposit.call(uintmR1NT8s, {from: accounts[3]});
		const uintwwJMu3z = await EqFinanceStakingGqexd62.getNumberOfHolders.call({from: accounts[0]});
		const uinttp99f2R = await EqFinanceStakingGqexd62.deposit.call(uintui7qxNz, {from: accounts[0]});
		const uintKALsRl = await EqFinanceStakingGqexd62.getNumberOfHolders.call({from: accounts[3]});
		const uintpD45QCa = await EqFinanceStakingGqexd62.getNumberOfHolders.call({from: accounts[4]});
		const uintSpvT3Md = await EqFinanceStakingGqexd62.getNumberOfHolders.call({from: accounts[3]});
		const uintVL6KUGy = await EqFinanceStakingGqexd62.deposit.call(uintxgJFsHa, {from: accounts[1]});

		assert.equal(uint3Dh6o5, BigInt("3000000000000000000000000"))
		assert.equal(uintWRzobVH, BigInt("0"))
		await expect(EqFinanceStakingGqexd62.deposit.call(uintmR1NT8s, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})