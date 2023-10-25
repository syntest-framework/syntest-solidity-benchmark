const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingpVGTRf = await EqFinanceStaking.new({from: accounts[0]});
		const addressv46nNlm = accounts[2]
		const addressWD64o8Z = accounts[0]
		const uintnyfpd3I = await EqFinanceStakingpVGTRf.getPendingDivs.call(addressv46nNlm, {from: accounts[2]});
		const uintYZCXl3 = await EqFinanceStakingpVGTRf.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uintNyv4MBe = await EqFinanceStakingpVGTRf.getPendingDivs.call(addressWD64o8Z, {from: accounts[2]});
		await EqFinanceStakingpVGTRf.claimDivs.call({from: accounts[1]});

		assert.equal(uintNyv4MBe, BigInt("0"))
		assert.equal(uintYZCXl3, BigInt("0"))
		assert.equal(uintnyfpd3I, BigInt("0"))
		await expect(EqFinanceStakingpVGTRf.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingVlyyhG = await EqFinanceStaking.new({from: accounts[0]});
		const uinteYymCZ1 = BigInt("19")
		const uintILI9kNm = BigInt("180")
		const addresswMBmQg = accounts[4]
		const addressYTKerUF = accounts[0]
		const addresssKIK2ex = accounts[1]
		const uintBz6LNH = await EqFinanceStakingVlyyhG.deposit.call(uinteYymCZ1, {from: accounts[4]});
		const addressrpcQJDs = await EqFinanceStakingVlyyhG.transferAnyERC20Tokens.call(addressYTKerUF, addresswMBmQg, uintILI9kNm, {from: accounts[5]});
		const uintQEObNPK = await EqFinanceStakingVlyyhG.getPendingDivs.call(addresssKIK2ex, {from: accounts[2]});
		const uintPGHguXr = await EqFinanceStakingVlyyhG.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintRkRyOls = await EqFinanceStakingVlyyhG.getStakingAndDaoAmount.call({from: accounts[2]});

		await expect(EqFinanceStakingVlyyhG.deposit.call(uinteYymCZ1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingGfmzV1V = await EqFinanceStaking.new({from: accounts[2]});
		const uintN0BTca2 = BigInt("1337")
		await EqFinanceStakingGfmzV1V.claimDivs.call({from: accounts[1]});
		const uintf7focd = await EqFinanceStakingGfmzV1V.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintxOylrW = await EqFinanceStakingGfmzV1V.getNumberOfHolders.call({from: accounts[1]});
		const uintQijsWn9 = await EqFinanceStakingGfmzV1V.deposit.call(uintN0BTca2, {from: accounts[3]});

		await expect(EqFinanceStakingGfmzV1V.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingrhPy5vC = await EqFinanceStaking.new({from: accounts[3]});
		const addressL6bGIga = accounts[0]
		const uintKsfrc55 = BigInt("2004")
		const addressLM1jmS = accounts[1]
		const uintc0VI93v = await EqFinanceStakingrhPy5vC.getNumberOfHolders.call({from: accounts[3]});
		const uinttt0n3W7 = await EqFinanceStakingrhPy5vC.getPendingDivs.call(addressL6bGIga, {from: accounts[2]});
		await EqFinanceStakingrhPy5vC.onlyOwner.call({from: accounts[1]});
		const uintCE76q6t = await EqFinanceStakingrhPy5vC.withdraw.call(uintKsfrc55, {from: accounts[2]});
		const uintnYt9cA = await EqFinanceStakingrhPy5vC.getPendingDivs.call(addressLM1jmS, {from: accounts[3]});

		assert.equal(uintc0VI93v, BigInt("0"))
		assert.equal(uinttt0n3W7, BigInt("0"))
		await expect(EqFinanceStakingrhPy5vC.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingpVGTRf = await EqFinanceStaking.new({from: accounts[0]});
		const addressYR0BnWd = accounts[2]
		const uintmlPq1GU = BigInt("1170")
		const addressestZEwk = accounts[0]
		const uintnyfpd3I = await EqFinanceStakingpVGTRf.getPendingDivs.call(addressYR0BnWd, {from: accounts[2]});
		const uintagbn3wv = await EqFinanceStakingpVGTRf.withdraw.call(uintmlPq1GU, {from: accounts[2]});
		const uintYZCXl3 = await EqFinanceStakingpVGTRf.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uintNyv4MBe = await EqFinanceStakingpVGTRf.getPendingDivs.call(addressestZEwk, {from: accounts[2]});
		await EqFinanceStakingpVGTRf.claimDivs.call({from: accounts[1]});

		assert.equal(uintnyfpd3I, BigInt("0"))
		await expect(EqFinanceStakingpVGTRf.withdraw.call(uintmlPq1GU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingVZH4za = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQK2JbBs = BigInt("346")
		const uintFH4gwEo = BigInt("2024")
		const addresspL7IQaL = "0x0000000000000000000000000000000000000001"
		const addressmigJQko = accounts[3]
		const uintZuhHofV = await EqFinanceStakingVZH4za.withdraw.call(uintQK2JbBs, {from: accounts[2]});
		const uintaCvNhzZ = await EqFinanceStakingVZH4za.getNumberOfHolders.call({from: accounts[0]});
		const addressVTN5fMj = await EqFinanceStakingVZH4za.transferAnyERC20Tokens.call(addressmigJQko, addresspL7IQaL, uintFH4gwEo, {from: accounts[4]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingl8F1W6s = await EqFinanceStaking.new({from: accounts[3]});
		const addressli95MH6 = accounts[1]
		const addresst9uqavF = accounts[1]
		const uintBxvrqf0 = BigInt("764")
		await EqFinanceStakingl8F1W6s.claimDivs.call({from: accounts[3]});
		const addressl82He3U = await EqFinanceStakingl8F1W6s.transferOwnership.call(addressli95MH6, {from: accounts[3]});
		const uinttgecJk5 = await EqFinanceStakingl8F1W6s.getPendingDivs.call(addresst9uqavF, {from: accounts[3]});
		const uintnYBMqws = await EqFinanceStakingl8F1W6s.getStakingAndDaoAmount.call({from: accounts[1]});
		await EqFinanceStakingl8F1W6s.claimDivs.call({from: accounts[3]});
		const uintEdDyVg = await EqFinanceStakingl8F1W6s.withdraw.call(uintBxvrqf0, {from: accounts[3]});

		await expect(EqFinanceStakingl8F1W6s.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingl8F1W6s = await EqFinanceStaking.new({from: accounts[3]});
		const uintvsJwace = BigInt("1722")
		const addressvrKVGxz = accounts[4]
		const addressTxMD1r = accounts[1]
		await EqFinanceStakingl8F1W6s.claimDivs.call({from: accounts[3]});
		const addresshVF64Yn = await EqFinanceStakingl8F1W6s.transferAnyERC20Tokens.call(addressTxMD1r, addressvrKVGxz, uintvsJwace, {from: accounts[3]});
		const uintnYBMqws = await EqFinanceStakingl8F1W6s.getStakingAndDaoAmount.call({from: accounts[1]});

		await expect(EqFinanceStakingl8F1W6s.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingVlyyhG = await EqFinanceStaking.new({from: accounts[0]});
		const uintFhDG3vm = BigInt("0")
		const addresscVV8WQJ = accounts[2]
		await EqFinanceStakingVlyyhG.claimDivs.call({from: accounts[3]});
		const uintBz6LNH = await EqFinanceStakingVlyyhG.deposit.call(uintFhDG3vm, {from: accounts[4]});
		const uintQEObNPK = await EqFinanceStakingVlyyhG.getPendingDivs.call(addresscVV8WQJ, {from: accounts[2]});
		const uintzYVVF4r = await EqFinanceStakingVlyyhG.getNumberOfHolders.call({from: accounts[4]});
		await EqFinanceStakingVlyyhG.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingVlyyhG.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})