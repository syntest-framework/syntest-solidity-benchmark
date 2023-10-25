const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingbcWFL72 = await EqFinanceStaking.new({from: accounts[4]});
		const uintPADJ3gY = BigInt("759")
		const addressLpI3tD = accounts[0]
		const addressjEXKlXB = accounts[2]
		const uintqEalLJl = await EqFinanceStakingbcWFL72.withdraw.call(uintPADJ3gY, {from: accounts[4]});
		const uintWn22yfn = await EqFinanceStakingbcWFL72.getPendingDivs.call(addressLpI3tD, {from: accounts[0]});
		const uintB65NfSc = await EqFinanceStakingbcWFL72.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintIDH5QVH = await EqFinanceStakingbcWFL72.getStakingAndDaoAmount.call({from: accounts[3]});
		const addressvcnRCIq = await EqFinanceStakingbcWFL72.transferOwnership.call(addressjEXKlXB, {from: accounts[4]});

		await expect(EqFinanceStakingbcWFL72.withdraw.call(uintPADJ3gY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingSmUwu9B = await EqFinanceStaking.new({from: accounts[1]});
		const uintDBKbbvx = BigInt("2011")
		const addressxqKcWPC = accounts[1]
		const addressKVkZetE = accounts[1]
		const uintY5MWVnr = await EqFinanceStakingSmUwu9B.getNumberOfHolders.call({from: accounts[4]});
		const uintp2MBNYB = await EqFinanceStakingSmUwu9B.deposit.call(uintDBKbbvx, {from: accounts[4]});
		const addresscD9jKGr = await EqFinanceStakingSmUwu9B.transferOwnership.call(addressxqKcWPC, {from: accounts[1]});
		const uintYMks69g = await EqFinanceStakingSmUwu9B.getStakingAndDaoAmount.call({from: accounts[2]});
		const addressYWXI8xT = await EqFinanceStakingSmUwu9B.transferOwnership.call(addressKVkZetE, {from: accounts[1]});

		assert.equal(uintY5MWVnr, BigInt("0"))
		await expect(EqFinanceStakingSmUwu9B.deposit.call(uintDBKbbvx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwK3beSA = await EqFinanceStaking.new({from: accounts[0]});
		const addressV8z20rE = accounts[2]
		const addressw6VyJBM = accounts[2]
		const uintGdwEGka = BigInt("1159")
		const uintWWjce9g = await EqFinanceStakingwK3beSA.getPendingDivs.call(addressV8z20rE, {from: accounts[1]});
		const uintLDbR5Qo = await EqFinanceStakingwK3beSA.getPendingDivs.call(addressw6VyJBM, {from: accounts[0]});
		const uintXeCwp8Q = await EqFinanceStakingwK3beSA.deposit.call(uintGdwEGka, {from: accounts[4]});

		assert.equal(uintLDbR5Qo, BigInt("0"))
		assert.equal(uintWWjce9g, BigInt("0"))
		await expect(EqFinanceStakingwK3beSA.deposit.call(uintGdwEGka, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingNcQnq7R = await EqFinanceStaking.new({from: accounts[0]});
		const uintYSNAfwG = BigInt("233")
		const uintyFSlEh = await EqFinanceStakingNcQnq7R.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintiRPtyzZ = await EqFinanceStakingNcQnq7R.getNumberOfHolders.call({from: accounts[0]});
		const uintlFttfG0 = await EqFinanceStakingNcQnq7R.deposit.call(uintYSNAfwG, {from: accounts[3]});
		const uintYmEfXy = await EqFinanceStakingNcQnq7R.getNumberOfHolders.call({from: accounts[4]});
		await EqFinanceStakingNcQnq7R.claimDivs.call({from: accounts[4]});

		assert.equal(uintiRPtyzZ, BigInt("0"))
		assert.equal(uintyFSlEh, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingNcQnq7R.deposit.call(uintYSNAfwG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingScvnnO = await EqFinanceStaking.new({from: accounts[3]});
		await EqFinanceStakingScvnnO.onlyOwner.call({from: accounts[2]});
		await EqFinanceStakingScvnnO.claimDivs.call({from: accounts[0]});
		await EqFinanceStakingScvnnO.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingScvnnO.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwK3beSA = await EqFinanceStaking.new({from: accounts[0]});
		const addressX3P4pvk = accounts[2]
		const uintMd0lETx = BigInt("1159")
		const uintim1rDTR = await EqFinanceStakingwK3beSA.getNumberOfHolders.call({from: accounts[1]});
		await EqFinanceStakingwK3beSA.claimDivs.call({from: accounts[1]});
		const uintWWjce9g = await EqFinanceStakingwK3beSA.getPendingDivs.call(addressX3P4pvk, {from: accounts[1]});
		const uintXeCwp8Q = await EqFinanceStakingwK3beSA.deposit.call(uintMd0lETx, {from: accounts[4]});

		assert.equal(uintim1rDTR, BigInt("0"))
		await expect(EqFinanceStakingwK3beSA.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwK3beSA = await EqFinanceStaking.new({from: accounts[0]});
		const addressZi2jQXW = accounts[2]
		const addressIlmfdWH = accounts[2]
		const addressMfw3ZbO = accounts[0]
		const addressvq2HeGY = accounts[2]
		const uintLJmpuJb = BigInt("1159")
		const uintWWjce9g = await EqFinanceStakingwK3beSA.getPendingDivs.call(addressZi2jQXW, {from: accounts[1]});
		const addressluY9cne = await EqFinanceStakingwK3beSA.transferOwnership.call(addressIlmfdWH, {from: accounts[0]});
		const uintPz77DnN = await EqFinanceStakingwK3beSA.getPendingDivs.call(addressMfw3ZbO, {from: accounts[3]});
		const uintLDbR5Qo = await EqFinanceStakingwK3beSA.getPendingDivs.call(addressvq2HeGY, {from: accounts[0]});
		const uintXeCwp8Q = await EqFinanceStakingwK3beSA.deposit.call(uintLJmpuJb, {from: accounts[4]});

		assert.equal(uintLDbR5Qo, BigInt("0"))
		assert.equal(uintPz77DnN, BigInt("0"))
		assert.equal(uintWWjce9g, BigInt("0"))
		await expect(EqFinanceStakingwK3beSA.deposit.call(uintLJmpuJb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwK3beSA = await EqFinanceStaking.new({from: accounts[0]});
		const uinthbCb0H = BigInt("972")
		const addressPfpQ3ea = accounts[2]
		const addressF2Lmz2 = accounts[4]
		const addressWbVA5gc = accounts[2]
		const uintAXPiU5a = BigInt("1150")
		const addresshGnMNXm = await EqFinanceStakingwK3beSA.transferAnyERC20Tokens.call(addressF2Lmz2, addressPfpQ3ea, uinthbCb0H, {from: accounts[0]});
		const uintim1rDTR = await EqFinanceStakingwK3beSA.getNumberOfHolders.call({from: accounts[1]});
		await EqFinanceStakingwK3beSA.claimDivs.call({from: accounts[1]});
		const uintWWjce9g = await EqFinanceStakingwK3beSA.getPendingDivs.call(addressWbVA5gc, {from: accounts[1]});
		const uintQZehQl8 = await EqFinanceStakingwK3beSA.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintvZuSh6C = await EqFinanceStakingwK3beSA.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintXeCwp8Q = await EqFinanceStakingwK3beSA.deposit.call(uintAXPiU5a, {from: accounts[4]});

		await expect(EqFinanceStakingwK3beSA.transferAnyERC20Tokens.call(addressF2Lmz2, addressPfpQ3ea, uinthbCb0H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingh8LDsWA = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVHbCUFz = accounts[3]
		await EqFinanceStakingh8LDsWA.claimDivs.call({from: accounts[1]});
		const uintWu2WdBb = await EqFinanceStakingh8LDsWA.getPendingDivs.call(addressVHbCUFz, {from: accounts[0]});
		await EqFinanceStakingh8LDsWA.claimDivs.call({from: accounts[5]});
		const uintnlca9U = await EqFinanceStakingh8LDsWA.getStakingAndDaoAmount.call({from: accounts[1]});
		await EqFinanceStakingh8LDsWA.claimDivs.call({from: accounts[1]});
	});
})