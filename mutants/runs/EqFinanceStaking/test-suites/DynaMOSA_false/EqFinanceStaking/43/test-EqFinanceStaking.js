const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingk9Fu6SO = await EqFinanceStaking.new({from: accounts[0]});
		const uintXeOY57e = BigInt("1117")
		const addressjk9lz5N = "0x0000000000000000000000000000000000000001"
		const addressqJAyNQm = accounts[4]
		const addressGKqgVhb = accounts[2]
		await EqFinanceStakingk9Fu6SO.claimDivs.call({from: accounts[3]});
		const addressNpnkdVR = await EqFinanceStakingk9Fu6SO.transferAnyERC20Tokens.call(addressqJAyNQm, addressjk9lz5N, uintXeOY57e, {from: accounts[4]});
		await EqFinanceStakingk9Fu6SO.onlyOwner.call({from: accounts[2]});
		const uintbQbUXsS = await EqFinanceStakingk9Fu6SO.getPendingDivs.call(addressGKqgVhb, {from: accounts[2]});

		await expect(EqFinanceStakingk9Fu6SO.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinghdHAELP = await EqFinanceStaking.new({from: accounts[4]});
		const uintOXVPw0p = BigInt("630")
		const addresspBDb8uI = accounts[4]
		const uintS2Bogtv = BigInt("1876")
		const uintdDDaQW9 = await EqFinanceStakinghdHAELP.deposit.call(uintOXVPw0p, {from: accounts[3]});
		await EqFinanceStakinghdHAELP.claimDivs.call({from: accounts[4]});
		const uintdcJDzik = await EqFinanceStakinghdHAELP.getNumberOfHolders.call({from: accounts[3]});
		const addressmiCGo5O = await EqFinanceStakinghdHAELP.transferOwnership.call(addresspBDb8uI, {from: accounts[2]});
		const uintYZV26I4 = await EqFinanceStakinghdHAELP.withdraw.call(uintS2Bogtv, {from: accounts[4]});
		await EqFinanceStakinghdHAELP.claimDivs.call({from: accounts[5]});

		await expect(EqFinanceStakinghdHAELP.deposit.call(uintOXVPw0p, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingAQKGfZ = await EqFinanceStaking.new({from: accounts[0]});
		const uintmsEJM7Z = BigInt("1515")
		const addressSrRifsU = accounts[3]
		const addresstXn2ukF = accounts[0]
		const uintRwrZ0EB = BigInt("320")
		const uint8hviTs = BigInt("1525")
		const addresseCsNrf9 = await EqFinanceStakingAQKGfZ.transferAnyERC20Tokens.call(addresstXn2ukF, addressSrRifsU, uintmsEJM7Z, {from: accounts[0]});
		const uintOAE2Lcx = await EqFinanceStakingAQKGfZ.withdraw.call(uintRwrZ0EB, {from: accounts[3]});
		const uintSPQrkHa = await EqFinanceStakingAQKGfZ.deposit.call(uint8hviTs, {from: accounts[0]});

		await expect(EqFinanceStakingAQKGfZ.transferAnyERC20Tokens.call(addresstXn2ukF, addressSrRifsU, uintmsEJM7Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingVUULtiZ = await EqFinanceStaking.new({from: accounts[2]});
		const uintOUWSF3X = BigInt("1617")
		const uintHrS5Vz = await EqFinanceStakingVUULtiZ.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintzlQV2e6 = await EqFinanceStakingVUULtiZ.deposit.call(uintOUWSF3X, {from: accounts[2]});

		assert.equal(uintHrS5Vz, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingVUULtiZ.deposit.call(uintOUWSF3X, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingmZuQ02 = await EqFinanceStaking.new({from: accounts[5]});
		await EqFinanceStakingmZuQ02.onlyOwner.call({from: accounts[3]});
		const uintB5VyPqQ = await EqFinanceStakingmZuQ02.getNumberOfHolders.call({from: accounts[3]});
		const uintuqLLBEv = await EqFinanceStakingmZuQ02.getNumberOfHolders.call({from: accounts[2]});

		await expect(EqFinanceStakingmZuQ02.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingTmTDdMO = await EqFinanceStaking.new({from: accounts[0]});
		const uintVkjqno = BigInt("976")
		const uintpNtBkpM = await EqFinanceStakingTmTDdMO.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintVrdo2CZ = await EqFinanceStakingTmTDdMO.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintVQxFto6 = await EqFinanceStakingTmTDdMO.withdraw.call(uintVkjqno, {from: accounts[5]});

		assert.equal(uintVrdo2CZ, BigInt("3000000000000000000000000"))
		assert.equal(uintpNtBkpM, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingTmTDdMO.withdraw.call(uintVkjqno, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingVUULtiZ = await EqFinanceStaking.new({from: accounts[2]});
		const uinthEvNeY1 = BigInt("1617")
		const uintHrS5Vz = await EqFinanceStakingVUULtiZ.getStakingAndDaoAmount.call({from: accounts[2]});
		await EqFinanceStakingVUULtiZ.claimDivs.call({from: accounts[3]});
		const uintzaclgOk = await EqFinanceStakingVUULtiZ.getNumberOfHolders.call({from: accounts[0]});
		const uintzlQV2e6 = await EqFinanceStakingVUULtiZ.deposit.call(uinthEvNeY1, {from: accounts[2]});

		assert.equal(uintHrS5Vz, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingVUULtiZ.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingoUt4ZsQ = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressUAV6fPz = accounts[3]
		const addressDNW5AyB = accounts[2]
		const addressEeSQJBE = accounts[3]
		const addresspc2D9bq = accounts[0]
		await EqFinanceStakingoUt4ZsQ.onlyOwner.call({from: accounts[0]});
		const addresswSjhN00 = await EqFinanceStakingoUt4ZsQ.transferOwnership.call(addressUAV6fPz, {from: accounts[3]});
		const addressXZJSR3A = await EqFinanceStakingoUt4ZsQ.transferOwnership.call(addressDNW5AyB, {from: accounts[1]});
		const addressUGG85Zm = await EqFinanceStakingoUt4ZsQ.transferOwnership.call(addressEeSQJBE, {from: accounts[3]});
		const addresscN4bjhj = await EqFinanceStakingoUt4ZsQ.transferOwnership.call(addresspc2D9bq, {from: accounts[5]});
		const uintfPCVkeW = await EqFinanceStakingoUt4ZsQ.getNumberOfHolders.call({from: accounts[5]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingk9Fu6SO = await EqFinanceStaking.new({from: accounts[0]});
		const addressSFCySDv = accounts[2]
		await EqFinanceStakingk9Fu6SO.claimDivs.call({from: accounts[3]});
		const addresswsvqxmH = await EqFinanceStakingk9Fu6SO.transferOwnership.call(addressSFCySDv, {from: accounts[0]});

		await expect(EqFinanceStakingk9Fu6SO.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingKtRXiO0 = await EqFinanceStaking.new({from: accounts[5]});
		const uintriIXSF = BigInt("0")
		const uintTuW2BP4 = await EqFinanceStakingKtRXiO0.deposit.call(uintriIXSF, {from: accounts[3]});
		const uintUcJ497C = await EqFinanceStakingKtRXiO0.getNumberOfHolders.call({from: accounts[5]});

		await expect(EqFinanceStakingKtRXiO0.deposit.call(uintriIXSF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})