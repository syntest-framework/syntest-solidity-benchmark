const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingLkFAz2c = await EqFinanceStaking.new({from: accounts[4]});
		const uintkFV1mPL = BigInt("1925")
		const uintkE8d1BE = BigInt("1469")
		const uintaZGH9M = BigInt("1626")
		const addresshp1wPA4 = accounts[0]
		const addressRjIKljR = accounts[2]
//		await EqFinanceStakingLkFAz2c.claimDivs.call({from: accounts[4]});
//		const uintuPOCHRJ = await EqFinanceStakingLkFAz2c.deposit.call(uintkFV1mPL, {from: accounts[5]});
//		const uintYjtjPoL = await EqFinanceStakingLkFAz2c.withdraw.call(uintkE8d1BE, {from: accounts[2]});
//		const uintEKTzkhX = await EqFinanceStakingLkFAz2c.getStakingAndDaoAmount.call({from: accounts[4]});
//		const addressPeUPIx = await EqFinanceStakingLkFAz2c.transferAnyERC20Tokens.call(addressRjIKljR, addresshp1wPA4, uintaZGH9M, {from: accounts[3]});
//		const uintc2A0Rss = await EqFinanceStakingLkFAz2c.getNumberOfHolders.call({from: accounts[1]});

		await expect(EqFinanceStakingLkFAz2c.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingbaxVle = await EqFinanceStaking.new({from: accounts[5]});
		const uintWVCURW = BigInt("969")
		const addressSHc3p0C = accounts[3]
		const uintPlo55ZT = BigInt("752")
		const addressPXcuLQj = accounts[2]
		const addressmkVg7f = accounts[3]
//		const uintmVOzAER = await EqFinanceStakingbaxVle.withdraw.call(uintWVCURW, {from: accounts[5]});
//		const uintRtQprWA = await EqFinanceStakingbaxVle.getPendingDivs.call(addressSHc3p0C, {from: accounts[2]});
//		const uint0gjrue = await EqFinanceStakingbaxVle.getStakingAndDaoAmount.call({from: accounts[2]});
//		const uintifKxI8P = await EqFinanceStakingbaxVle.getNumberOfHolders.call({from: accounts[4]});
//		const addresseN3m8tY = await EqFinanceStakingbaxVle.transferAnyERC20Tokens.call(addressmkVg7f, addressPXcuLQj, uintPlo55ZT, {from: accounts[1]});

		await expect(EqFinanceStakingbaxVle.withdraw.call(uintWVCURW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingjg356Na = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSfD4DkI = BigInt("537")
		const addressnUwDpWz = accounts[0]
		const uintfHHFoUW = await EqFinanceStakingjg356Na.withdraw.call(uintSfD4DkI, {from: accounts[3]});
		const uintpIwWk50 = await EqFinanceStakingjg356Na.getPendingDivs.call(addressnUwDpWz, {from: accounts[1]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingdAjzGRu = await EqFinanceStaking.new({from: accounts[2]});
		const uintta4OZOS = BigInt("1882")
		const addressYnLkhF = accounts[5]
		const addressveWoNqt = accounts[4]
		const uintMPG68qO = BigInt("1913")
//		const addressZcrsLcE = await EqFinanceStakingdAjzGRu.transferAnyERC20Tokens.call(addressveWoNqt, addressYnLkhF, uintta4OZOS, {from: accounts[2]});
//		const uintMJKDevz = await EqFinanceStakingdAjzGRu.deposit.call(uintMPG68qO, {from: "0x0000000000000000000000000000000000000001"});
//		await EqFinanceStakingdAjzGRu.onlyOwner.call({from: accounts[4]});

		await expect(EqFinanceStakingdAjzGRu.transferAnyERC20Tokens.call(addressveWoNqt, addressYnLkhF, uintta4OZOS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingBMvhvKj = await EqFinanceStaking.new({from: accounts[4]});
		const uinteWA0yTS = BigInt("1563")
		const uintCJSgFA = BigInt("1079")
		const addresseHady4O = accounts[2]
		const addressCmwHSe6 = accounts[0]
		const addressRnIM5X = accounts[2]
//		await EqFinanceStakingBMvhvKj.claimDivs.call({from: accounts[0]});
//		const uinty53segf = await EqFinanceStakingBMvhvKj.getStakingAndDaoAmount.call({from: accounts[5]});
//		const uinted9IS42 = await EqFinanceStakingBMvhvKj.withdraw.call(uinteWA0yTS, {from: accounts[5]});
//		const addressk2buuO2 = await EqFinanceStakingBMvhvKj.transferAnyERC20Tokens.call(addressCmwHSe6, addresseHady4O, uintCJSgFA, {from: accounts[0]});
//		const uintaxFt9tL = await EqFinanceStakingBMvhvKj.getPendingDivs.call(addressRnIM5X, {from: accounts[5]});
//		const uintWtAf0Pt = await EqFinanceStakingBMvhvKj.getNumberOfHolders.call({from: accounts[2]});

		await expect(EqFinanceStakingBMvhvKj.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingBMvhvKj = await EqFinanceStaking.new({from: accounts[4]});
		const uintYgWlUG2 = BigInt("1563")
		const uinti2aK5Cy = BigInt("1079")
		const addresswZBC2G9 = accounts[2]
		const addressbZnsvQE = accounts[0]
		const addressTxWD7wb = accounts[3]
		const addressNtDXewv = accounts[2]
//		await EqFinanceStakingBMvhvKj.claimDivs.call({from: accounts[0]});
//		await EqFinanceStakingBMvhvKj.onlyOwner.call({from: accounts[2]});
//		const uinty53segf = await EqFinanceStakingBMvhvKj.getStakingAndDaoAmount.call({from: accounts[5]});
//		const uinted9IS42 = await EqFinanceStakingBMvhvKj.withdraw.call(uintYgWlUG2, {from: accounts[5]});
//		const addressk2buuO2 = await EqFinanceStakingBMvhvKj.transferAnyERC20Tokens.call(addressbZnsvQE, addresswZBC2G9, uinti2aK5Cy, {from: accounts[0]});
//		const addressx3IqKeh = await EqFinanceStakingBMvhvKj.transferOwnership.call(addressTxWD7wb, {from: accounts[0]});
//		const uintaxFt9tL = await EqFinanceStakingBMvhvKj.getPendingDivs.call(addressNtDXewv, {from: accounts[5]});
//		const uintWtAf0Pt = await EqFinanceStakingBMvhvKj.getNumberOfHolders.call({from: accounts[2]});

		await expect(EqFinanceStakingBMvhvKj.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingVaAJ5dB = await EqFinanceStaking.new({from: accounts[3]});
		const uintABptUc3 = BigInt("1389")
		const uintDI2d6Y5 = await EqFinanceStakingVaAJ5dB.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintCECiHjE = await EqFinanceStakingVaAJ5dB.getNumberOfHolders.call({from: accounts[0]});
//		const uintd2MNi87 = await EqFinanceStakingVaAJ5dB.deposit.call(uintABptUc3, {from: accounts[4]});
//		await EqFinanceStakingVaAJ5dB.claimDivs.call({from: accounts[1]});
//		await EqFinanceStakingVaAJ5dB.onlyOwner.call({from: accounts[2]});

		assert.equal(uintCECiHjE, BigInt("0"))
		assert.equal(uintDI2d6Y5, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingVaAJ5dB.deposit.call(uintABptUc3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingmmJfV2o = await EqFinanceStaking.new({from: accounts[4]});
		const addressn5LlxI9 = "0x0000000000000000000000000000000000000001"
//		await EqFinanceStakingmmJfV2o.claimDivs.call({from: accounts[0]});
//		const addressJiGNsQ0 = await EqFinanceStakingmmJfV2o.transferOwnership.call(addressn5LlxI9, {from: accounts[4]});
//		await EqFinanceStakingmmJfV2o.claimDivs.call({from: accounts[3]});

		await expect(EqFinanceStakingmmJfV2o.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})