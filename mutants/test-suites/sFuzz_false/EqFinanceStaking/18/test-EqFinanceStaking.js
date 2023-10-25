const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingQ2PhguN = await EqFinanceStaking.new({from: accounts[2]});
		const addressgohQKfo = accounts[3]
		const uintirzOUZA = await EqFinanceStakingQ2PhguN.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintF12FNDe = await EqFinanceStakingQ2PhguN.getPendingDivs.call(addressgohQKfo, {from: accounts[1]});
//		await EqFinanceStakingQ2PhguN.claimDivs.call({from: accounts[0]});
//		const uintdYsNGev = await EqFinanceStakingQ2PhguN.getStakingAndDaoAmount.call({from: accounts[3]});
		await EqFinanceStakingQ2PhguN.claimDivs.call({from: accounts[0]});
//		await EqFinanceStakingQ2PhguN.claimDivs.call({from: accounts[4]});

		assert.equal(uintF12FNDe, BigInt("0"))
		assert.equal(uintirzOUZA, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingQ2PhguN.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingkXOk5Jo = await EqFinanceStaking.new({from: accounts[2]});
		const uintWXq94zL = BigInt("344")
		const addressCXh3UQ5 = accounts[5]
		const addresso3dMoi5 = accounts[0]
		const uintdCKgB8T = BigInt("212")
		const uintcHs9pZj = await EqFinanceStakingkXOk5Jo.getNumberOfHolders.call({from: accounts[3]});
//		await EqFinanceStakingkXOk5Jo.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressrpPnocD = await EqFinanceStakingkXOk5Jo.transferAnyERC20Tokens.call(addresso3dMoi5, addressCXh3UQ5, uintWXq94zL, {from: accounts[2]});
//		const uintLDkMgZj = await EqFinanceStakingkXOk5Jo.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintg4PE5T8 = await EqFinanceStakingkXOk5Jo.withdraw.call(uintdCKgB8T, {from: accounts[0]});
//		const uintDxKjIgg = await EqFinanceStakingkXOk5Jo.getNumberOfHolders.call({from: accounts[3]});

		assert.equal(uintcHs9pZj, BigInt("0"))
		await expect(EqFinanceStakingkXOk5Jo.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingHgjIwYy = await EqFinanceStaking.new({from: accounts[3]});
		const uintRkzFtmv = BigInt("1023")
		const addressW2KtXgR = accounts[1]
//		await EqFinanceStakingHgjIwYy.claimDivs.call({from: accounts[0]});
//		const uintTvc6yoe = await EqFinanceStakingHgjIwYy.withdraw.call(uintRkzFtmv, {from: accounts[1]});
//		await EqFinanceStakingHgjIwYy.claimDivs.call({from: accounts[3]});
//		const uint2Acyqw = await EqFinanceStakingHgjIwYy.getPendingDivs.call(addressW2KtXgR, {from: accounts[1]});

		await expect(EqFinanceStakingHgjIwYy.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingxc4ajsP = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRDS6G4a = BigInt("1818")
		await EqFinanceStakingxc4ajsP.claimDivs.call({from: accounts[1]});
		await EqFinanceStakingxc4ajsP.claimDivs.call({from: accounts[3]});
		const uintl7y0dlr = await EqFinanceStakingxc4ajsP.deposit.call(uintRDS6G4a, {from: accounts[3]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingSa5y8VE = await EqFinanceStaking.new({from: accounts[3]});
		const addressKt7D6Pm = accounts[0]
//		await EqFinanceStakingSa5y8VE.onlyOwner.call({from: accounts[4]});
//		const addressh5gfXi = await EqFinanceStakingSa5y8VE.transferOwnership.call(addressKt7D6Pm, {from: accounts[4]});

		await expect(EqFinanceStakingSa5y8VE.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingz7L8fNq = await EqFinanceStaking.new({from: accounts[2]});
		const uintBZ2oCd3 = BigInt("141")
		const uint3VwhZL = BigInt("918")
		const uintFFfRMsz = BigInt("1723")
		const addressal9txpV = accounts[3]
//		const uintINsXqow = await EqFinanceStakingz7L8fNq.deposit.call(uintBZ2oCd3, {from: "0x0000000000000000000000000000000000000001"});
//		const uintYeCx44e = await EqFinanceStakingz7L8fNq.deposit.call(uint3VwhZL, {from: accounts[4]});
//		const uintSZzsmxy = await EqFinanceStakingz7L8fNq.withdraw.call(uintFFfRMsz, {from: accounts[4]});
//		await EqFinanceStakingz7L8fNq.claimDivs.call({from: accounts[3]});
//		const uintLhjHmdF = await EqFinanceStakingz7L8fNq.getPendingDivs.call(addressal9txpV, {from: accounts[0]});

		await expect(EqFinanceStakingz7L8fNq.deposit.call(uintBZ2oCd3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingME0UA5E = await EqFinanceStaking.new({from: accounts[1]});
		const addressxlR5tU8 = accounts[3]
		const addressEgJVWth = await EqFinanceStakingME0UA5E.transferOwnership.call(addressxlR5tU8, {from: accounts[1]});
		const uint9EHXXw = await EqFinanceStakingME0UA5E.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintmF8RTbE = await EqFinanceStakingME0UA5E.getStakingAndDaoAmount.call({from: accounts[4]});
//		await EqFinanceStakingME0UA5E.claimDivs.call({from: accounts[0]});

		assert.equal(uint9EHXXw, BigInt("3000000000000000000000000"))
		assert.equal(uintmF8RTbE, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingME0UA5E.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})