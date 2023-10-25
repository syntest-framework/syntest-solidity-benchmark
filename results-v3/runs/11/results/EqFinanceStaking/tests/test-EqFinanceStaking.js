const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinguE3Xaue = await EqFinanceStaking.new({from: accounts[3]});
		const uintCIHFLmI = BigInt("354")
		const uintuTEOAQs = BigInt("631")
		await EqFinanceStakinguE3Xaue.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
		const uintEK6EqDE = await EqFinanceStakinguE3Xaue.withdraw.call(uintCIHFLmI, {from: accounts[4]});
		const uintzHCekHu = await EqFinanceStakinguE3Xaue.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintN4B1OHV = await EqFinanceStakinguE3Xaue.withdraw.call(uintuTEOAQs, {from: accounts[4]});

		await expect(EqFinanceStakinguE3Xaue.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingtWvgX1E = await EqFinanceStaking.new({from: accounts[2]});
		const addresskcbG5Pz = accounts[5]
		const addressfcAyDHz = accounts[1]
		const addressYh24jEn = accounts[0]
		const uintkAQecaf = BigInt("2009")
		const uintHQDygJ2 = await EqFinanceStakingtWvgX1E.getStakingAndDaoAmount.call({from: accounts[5]});
		const addressX4VfRJJ = await EqFinanceStakingtWvgX1E.transferOwnership.call(addresskcbG5Pz, {from: accounts[3]});
		const addressQdqHQ23 = await EqFinanceStakingtWvgX1E.transferOwnership.call(addressfcAyDHz, {from: accounts[4]});
		const addressQ5PfPJg = await EqFinanceStakingtWvgX1E.transferOwnership.call(addressYh24jEn, {from: accounts[4]});
		const uintFdgWU7z = await EqFinanceStakingtWvgX1E.deposit.call(uintkAQecaf, {from: accounts[4]});
		await EqFinanceStakingtWvgX1E.claimDivs.call({from: accounts[5]});

		assert.equal(uintHQDygJ2, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingtWvgX1E.transferOwnership.call(addresskcbG5Pz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingrsXuDdL = await EqFinanceStaking.new({from: accounts[1]});
		const addressIi0Xhhg = "0x0000000000000000000000000000000000000001"
		const addressF5Bhvmu = accounts[1]
		const uintLFxYAc = await EqFinanceStakingrsXuDdL.getNumberOfHolders.call({from: accounts[0]});
		const uintOdHvS9q = await EqFinanceStakingrsXuDdL.getPendingDivs.call(addressIi0Xhhg, {from: accounts[1]});
		const uintLVIkOKD = await EqFinanceStakingrsXuDdL.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintLbWzWo1 = await EqFinanceStakingrsXuDdL.getPendingDivs.call(addressF5Bhvmu, {from: accounts[1]});
		const uintbmUUKBo = await EqFinanceStakingrsXuDdL.getNumberOfHolders.call({from: accounts[3]});

		assert.equal(uintLFxYAc, BigInt("0"))
		assert.equal(uintLVIkOKD, BigInt("3000000000000000000000000"))
		assert.equal(uintLbWzWo1, BigInt("0"))
		assert.equal(uintOdHvS9q, BigInt("0"))
		assert.equal(uintbmUUKBo, BigInt("0"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingpYg9zg7 = await EqFinanceStaking.new({from: accounts[4]});
		const uintpubPBdW = BigInt("1551")
		const addressnWu2jJ = accounts[0]
		const addresshx6eUBD = accounts[4]
		const addressqEeut6G = accounts[0]
		const uintLqOXGUT = await EqFinanceStakingpYg9zg7.deposit.call(uintpubPBdW, {from: accounts[5]});
		const uintOedidIE = await EqFinanceStakingpYg9zg7.getPendingDivs.call(addressnWu2jJ, {from: accounts[5]});
		const uintg2saGrB = await EqFinanceStakingpYg9zg7.getPendingDivs.call(addresshx6eUBD, {from: accounts[4]});
		await EqFinanceStakingpYg9zg7.claimDivs.call({from: accounts[2]});
		const uinttexZsO9 = await EqFinanceStakingpYg9zg7.getPendingDivs.call(addressqEeut6G, {from: accounts[4]});

		await expect(EqFinanceStakingpYg9zg7.deposit.call(uintpubPBdW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingZ6oeV4h = await EqFinanceStaking.new({from: accounts[3]});
		const uintQd8Icdb = BigInt("501")
		await EqFinanceStakingZ6oeV4h.onlyOwner.call({from: accounts[2]});
		const uintgQYpxiN = await EqFinanceStakingZ6oeV4h.withdraw.call(uintQd8Icdb, {from: accounts[0]});
		await EqFinanceStakingZ6oeV4h.claimDivs.call({from: accounts[2]});

		await expect(EqFinanceStakingZ6oeV4h.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingiHXjIA = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addresslBQJxfV = accounts[3]
		const uintLPmodL = await EqFinanceStakingiHXjIA.getPendingDivs.call(addresslBQJxfV, {from: accounts[4]});
		const uintjaOmAAB = await EqFinanceStakingiHXjIA.getNumberOfHolders.call({from: accounts[3]});
		const uintXcbcqfN = await EqFinanceStakingiHXjIA.getStakingAndDaoAmount.call({from: accounts[4]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingZ6oeV4h = await EqFinanceStaking.new({from: accounts[3]});
		const addressO80MSiv = accounts[5]
		const addressVYrjPoS = accounts[0]
		const uintXy5WdgC = BigInt("1300")
		const uintElZ1MmD = await EqFinanceStakingZ6oeV4h.getPendingDivs.call(addressO80MSiv, {from: accounts[2]});
		const addressxorYXGm = await EqFinanceStakingZ6oeV4h.transferOwnership.call(addressVYrjPoS, {from: accounts[3]});
		const uintb4RKDGs = await EqFinanceStakingZ6oeV4h.withdraw.call(uintXy5WdgC, {from: accounts[2]});

		assert.equal(uintElZ1MmD, BigInt("0"))
		await expect(EqFinanceStakingZ6oeV4h.withdraw.call(uintXy5WdgC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingZ6oeV4h = await EqFinanceStaking.new({from: accounts[3]});
		const uintXATCyDJ = BigInt("1085")
		const addressnqZ5Fhd = accounts[5]
		const addressJTVlV5 = accounts[1]
		const uintRjn1GD6 = BigInt("1786")
		const addresswVMrJ2B = accounts[4]
		const uintBwmDufv = BigInt("1710")
		const addressWce49b = await EqFinanceStakingZ6oeV4h.transferAnyERC20Tokens.call(addressJTVlV5, addressnqZ5Fhd, uintXATCyDJ, {from: accounts[3]});
		await EqFinanceStakingZ6oeV4h.claimDivs.call({from: accounts[2]});
		const uintcmsLM0L = await EqFinanceStakingZ6oeV4h.deposit.call(uintRjn1GD6, {from: accounts[0]});
		const addressDpN6seZ = await EqFinanceStakingZ6oeV4h.transferOwnership.call(addresswVMrJ2B, {from: "0x0000000000000000000000000000000000000001"});
		const uintEjlpCoz = await EqFinanceStakingZ6oeV4h.withdraw.call(uintBwmDufv, {from: accounts[0]});

		await expect(EqFinanceStakingZ6oeV4h.transferAnyERC20Tokens.call(addressJTVlV5, addressnqZ5Fhd, uintXATCyDJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingZ6oeV4h = await EqFinanceStaking.new({from: accounts[3]});
		const uintc5lwcW7 = BigInt("0")
		const uinttLvCSDG = BigInt("1299")
		const addressCBMkHJF = accounts[4]
		const addressTV0XhYe = accounts[0]
		await EqFinanceStakingZ6oeV4h.claimDivs.call({from: accounts[2]});
		const uintjausvdp = await EqFinanceStakingZ6oeV4h.deposit.call(uintc5lwcW7, {from: accounts[3]});
		await EqFinanceStakingZ6oeV4h.claimDivs.call({from: accounts[4]});
		const addressBYAAb9t = await EqFinanceStakingZ6oeV4h.transferAnyERC20Tokens.call(addressTV0XhYe, addressCBMkHJF, uinttLvCSDG, {from: accounts[4]});

		await expect(EqFinanceStakingZ6oeV4h.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingZ6oeV4h = await EqFinanceStaking.new({from: accounts[3]});
		const uintZ5fooia = BigInt("0")
		const uintkYDlcJT = await EqFinanceStakingZ6oeV4h.getStakingAndDaoAmount.call({from: accounts[2]});
		const uint9KgZuN = await EqFinanceStakingZ6oeV4h.withdraw.call(uintZ5fooia, {from: accounts[1]});

		assert.equal(uintkYDlcJT, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingZ6oeV4h.withdraw.call(uintZ5fooia, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})