const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwTrxNHM = await EqFinanceStaking.new({from: accounts[0]});
		const uintHYfCvDd = BigInt("1835")
		const uintv3hHPa5 = await EqFinanceStakingwTrxNHM.getStakingAndDaoAmount.call({from: accounts[5]});
		await EqFinanceStakingwTrxNHM.claimDivs.call({from: accounts[0]});
		const uintagnCCKu = await EqFinanceStakingwTrxNHM.withdraw.call(uintHYfCvDd, {from: accounts[3]});

		assert.equal(uintv3hHPa5, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingwTrxNHM.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingqe7ajFk = await EqFinanceStaking.new({from: accounts[4]});
		const uintiTgCQZf = BigInt("1104")
		const uintLm5IgzA = await EqFinanceStakingqe7ajFk.getNumberOfHolders.call({from: accounts[2]});
		const uintjL2uW9Q = await EqFinanceStakingqe7ajFk.withdraw.call(uintiTgCQZf, {from: accounts[3]});
		await EqFinanceStakingqe7ajFk.claimDivs.call({from: accounts[1]});

		assert.equal(uintLm5IgzA, BigInt("0"))
		await expect(EqFinanceStakingqe7ajFk.withdraw.call(uintiTgCQZf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingvq4dFfJ = await EqFinanceStaking.new({from: accounts[5]});
		const uintwa8OMev = BigInt("1479")
		const addressIDGCem = accounts[2]
		const addressbu0CCMS = accounts[4]
		const addressgDkWuaj = accounts[3]
		const uintS4bn377 = await EqFinanceStakingvq4dFfJ.deposit.call(uintwa8OMev, {from: accounts[0]});
		const addressQIXRmH8 = await EqFinanceStakingvq4dFfJ.transferOwnership.call(addressIDGCem, {from: accounts[0]});
		const uintCeDZdT3 = await EqFinanceStakingvq4dFfJ.getPendingDivs.call(addressbu0CCMS, {from: accounts[3]});
		await EqFinanceStakingvq4dFfJ.onlyOwner.call({from: accounts[2]});
		const uintMftucGK = await EqFinanceStakingvq4dFfJ.getPendingDivs.call(addressgDkWuaj, {from: accounts[5]});
		await EqFinanceStakingvq4dFfJ.claimDivs.call({from: accounts[1]});

		await expect(EqFinanceStakingvq4dFfJ.deposit.call(uintwa8OMev, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingbwDTKok = await EqFinanceStaking.new({from: accounts[5]});
		const addressYBH9XC = accounts[2]
		const uintBoC1wZP = await EqFinanceStakingbwDTKok.getPendingDivs.call(addressYBH9XC, {from: accounts[2]});
		await EqFinanceStakingbwDTKok.onlyOwner.call({from: accounts[3]});
		await EqFinanceStakingbwDTKok.onlyOwner.call({from: accounts[1]});
		const uinty3vhnlJ = await EqFinanceStakingbwDTKok.getStakingAndDaoAmount.call({from: accounts[1]});

		assert.equal(uintBoC1wZP, BigInt("0"))
		await expect(EqFinanceStakingbwDTKok.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinglQch1Qn = await EqFinanceStaking.new({from: accounts[4]});
		const addressIJ4KIR2 = accounts[1]
		const addressAeJU4YH = accounts[2]
		const addresssZTrTL = await EqFinanceStakinglQch1Qn.transferOwnership.call(addressIJ4KIR2, {from: accounts[4]});
		const uintHmsOzD0 = await EqFinanceStakinglQch1Qn.getPendingDivs.call(addressAeJU4YH, {from: accounts[0]});

		assert.equal(uintHmsOzD0, BigInt("0"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinglQch1Qn = await EqFinanceStaking.new({from: accounts[4]});
		const uintfD7Jtkg = BigInt("1904")
		const addressrpb5Tx = accounts[3]
		const addressY1M1l0j = "0x0000000000000000000000000000000000000001"
		const addressrHn8i8j = accounts[2]
		const addressn8vmx9 = await EqFinanceStakinglQch1Qn.transferAnyERC20Tokens.call(addressY1M1l0j, addressrpb5Tx, uintfD7Jtkg, {from: accounts[4]});
		const uintBv1BmXK = await EqFinanceStakinglQch1Qn.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintHmsOzD0 = await EqFinanceStakinglQch1Qn.getPendingDivs.call(addressrHn8i8j, {from: accounts[0]});
		await EqFinanceStakinglQch1Qn.claimDivs.call({from: accounts[2]});

		await expect(EqFinanceStakinglQch1Qn.transferAnyERC20Tokens.call(addressY1M1l0j, addressrpb5Tx, uintfD7Jtkg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingpm9sbkA = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintI2Vrtzh = BigInt("398")
		const uintH9yamvF = await EqFinanceStakingpm9sbkA.deposit.call(uintI2Vrtzh, {from: accounts[0]});
		const uintvcXmyUW = await EqFinanceStakingpm9sbkA.getNumberOfHolders.call({from: accounts[1]});
		const uintBjVNIo = await EqFinanceStakingpm9sbkA.getNumberOfHolders.call({from: accounts[0]});
	});
})