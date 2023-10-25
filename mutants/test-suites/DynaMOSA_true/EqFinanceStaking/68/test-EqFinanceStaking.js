const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingatcycqc = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintU2vsFr = BigInt("178")
		const uintn2DBIc1 = BigInt("21")
		const uintFICQeWT = BigInt("1308")
		const uintffc2lwr = await EqFinanceStakingatcycqc.deposit.call(uintU2vsFr, {from: accounts[5]});
		const uint78MT5x = await EqFinanceStakingatcycqc.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uintVsZAukG = await EqFinanceStakingatcycqc.deposit.call(uintn2DBIc1, {from: accounts[2]});
		const uintLcwDPvX = await EqFinanceStakingatcycqc.deposit.call(uintFICQeWT, {from: "0x0000000000000000000000000000000000000001"});
		const uintBX7Ubnk = await EqFinanceStakingatcycqc.getStakingAndDaoAmount.call({from: accounts[4]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingsiavsbo = await EqFinanceStaking.new({from: accounts[1]});
		const uinthHMGoxQ = BigInt("1639")
		const addresspVUHb9D = accounts[1]
		const uintLJz6qiB = BigInt("1646")
//		const uintc7OcLA6 = await EqFinanceStakingsiavsbo.deposit.call(uinthHMGoxQ, {from: accounts[0]});
//		const uintvdk8YD7 = await EqFinanceStakingsiavsbo.getPendingDivs.call(addresspVUHb9D, {from: accounts[5]});
//		const uintZZmxa09 = await EqFinanceStakingsiavsbo.withdraw.call(uintLJz6qiB, {from: accounts[2]});

		await expect(EqFinanceStakingsiavsbo.deposit.call(uinthHMGoxQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingCpF2bih = await EqFinanceStaking.new({from: accounts[3]});
		const uintmFZgjcF = BigInt("106")
		const addressUH6Q0LO = accounts[5]
		const uintKLrVpQ = await EqFinanceStakingCpF2bih.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintjSlOobs = await EqFinanceStakingCpF2bih.withdraw.call(uintmFZgjcF, {from: "0x0000000000000000000000000000000000000001"});
//		const uintRqk4NYa = await EqFinanceStakingCpF2bih.getPendingDivs.call(addressUH6Q0LO, {from: accounts[0]});

		assert.equal(uintKLrVpQ, BigInt("0"))
		await expect(EqFinanceStakingCpF2bih.withdraw.call(uintmFZgjcF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingCREC5dL = await EqFinanceStaking.new({from: accounts[4]});
		const uintIIyU7m3 = BigInt("418")
		const addressOTi6KR8 = accounts[4]
		const uintW2YpaDP = await EqFinanceStakingCREC5dL.getStakingAndDaoAmount.call({from: accounts[2]});
//		const uintakzAZ6K = await EqFinanceStakingCREC5dL.deposit.call(uintIIyU7m3, {from: accounts[3]});
//		const addressSWkj0Fh = await EqFinanceStakingCREC5dL.transferOwnership.call(addressOTi6KR8, {from: accounts[4]});

		assert.equal(uintW2YpaDP, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingCREC5dL.deposit.call(uintIIyU7m3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingnB20Rn1 = await EqFinanceStaking.new({from: accounts[3]});
		const addressD6KDKmv = accounts[1]
		const uintkNzVz9K = BigInt("848")
//		await EqFinanceStakingnB20Rn1.onlyOwner.call({from: accounts[1]});
//		const addressGa4Vpxj = await EqFinanceStakingnB20Rn1.transferOwnership.call(addressD6KDKmv, {from: accounts[5]});
//		const uintocaiHLf = await EqFinanceStakingnB20Rn1.deposit.call(uintkNzVz9K, {from: accounts[0]});
//		await EqFinanceStakingnB20Rn1.onlyOwner.call({from: accounts[0]});

		await expect(EqFinanceStakingnB20Rn1.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingCpF2bih = await EqFinanceStaking.new({from: accounts[3]});
		const addressIF1HQri = accounts[5]
		const uintKLrVpQ = await EqFinanceStakingCpF2bih.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uintePvKics = await EqFinanceStakingCpF2bih.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintRqk4NYa = await EqFinanceStakingCpF2bih.getPendingDivs.call(addressIF1HQri, {from: accounts[0]});

		assert.equal(uintKLrVpQ, BigInt("0"))
		assert.equal(uintRqk4NYa, BigInt("0"))
		assert.equal(uintePvKics, BigInt("3000000000000000000000000"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingCIEzyrJ = await EqFinanceStaking.new({from: accounts[0]});
		const uintDtRVMdV = BigInt("1354")
//		await EqFinanceStakingCIEzyrJ.claimDivs.call({from: accounts[2]});
//		const uintV9oAL7S = await EqFinanceStakingCIEzyrJ.getStakingAndDaoAmount.call({from: accounts[5]});
//		const uintedsUd0M = await EqFinanceStakingCIEzyrJ.withdraw.call(uintDtRVMdV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingCIEzyrJ.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingCpF2bih = await EqFinanceStaking.new({from: accounts[3]});
		const addresshEuXrJ = accounts[0]
		const addressbk3jaE6 = accounts[0]
		const uintiLG9CtN = BigInt("1240")
		const addressB62tndH = accounts[6]
//		await EqFinanceStakingCpF2bih.claimDivs.call({from: accounts[0]});
//		const addresskUjc00n = await EqFinanceStakingCpF2bih.transferOwnership.call(addresshEuXrJ, {from: accounts[3]});
//		const uintJiBqwCZ = await EqFinanceStakingCpF2bih.getStakingAndDaoAmount.call({from: accounts[1]});
//		const uintHxMemsa = await EqFinanceStakingCpF2bih.getPendingDivs.call(addressbk3jaE6, {from: accounts[3]});
//		const uintSoQvVmY = await EqFinanceStakingCpF2bih.withdraw.call(uintiLG9CtN, {from: accounts[1]});
//		const uintRqk4NYa = await EqFinanceStakingCpF2bih.getPendingDivs.call(addressB62tndH, {from: accounts[0]});

		await expect(EqFinanceStakingCpF2bih.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingWSaygn = await EqFinanceStaking.new({from: accounts[4]});
		const uintQNqMs1Z = BigInt("1863")
		const addressE9fJRQR = accounts[4]
		const addressz5wZlzo = accounts[5]
		const uintXuWqTNl = BigInt("551")
		const addressBieOtDm = accounts[2]
//		const addressH2Vg4ms = await EqFinanceStakingWSaygn.transferAnyERC20Tokens.call(addressz5wZlzo, addressE9fJRQR, uintQNqMs1Z, {from: accounts[4]});
//		const uintGDhZGsw = await EqFinanceStakingWSaygn.deposit.call(uintXuWqTNl, {from: accounts[3]});
//		const addressdGMgeuF = await EqFinanceStakingWSaygn.transferOwnership.call(addressBieOtDm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingWSaygn.transferAnyERC20Tokens.call(addressz5wZlzo, addressE9fJRQR, uintQNqMs1Z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingD8njn8i = await EqFinanceStaking.new({from: accounts[1]});
		const uintk6oS7LI = BigInt("0")
//		const uint5GWteG = await EqFinanceStakingD8njn8i.deposit.call(uintk6oS7LI, {from: accounts[5]});

		await expect(EqFinanceStakingD8njn8i.deposit.call(uintk6oS7LI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})