const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingqkFYXji = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshswuZdd = accounts[2]
		const addressES5q9K = accounts[5]
		const uintPSGFyb4 = BigInt("1818")
		await EqFinanceStakingqkFYXji.claimDivs.call({from: accounts[1]});
		const uintyow0oX = await EqFinanceStakingqkFYXji.getNumberOfHolders.call({from: accounts[1]});
		const uintnHEw3Od = await EqFinanceStakingqkFYXji.getPendingDivs.call(addresshswuZdd, {from: accounts[4]});
		const addresseJnnARk = await EqFinanceStakingqkFYXji.transferOwnership.call(addressES5q9K, {from: accounts[0]});
		const uintZbZHba9 = await EqFinanceStakingqkFYXji.deposit.call(uintPSGFyb4, {from: accounts[5]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingSI9EaSl = await EqFinanceStaking.new({from: accounts[1]});
		const uint3Xd1g4 = BigInt("1092")
		const uintIts7gpm = await EqFinanceStakingSI9EaSl.deposit.call(uint3Xd1g4, {from: accounts[4]});
		const uintm0j2adW = await EqFinanceStakingSI9EaSl.getNumberOfHolders.call({from: accounts[3]});

		await expect(EqFinanceStakingSI9EaSl.deposit.call(uint3Xd1g4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingGZ1xp8X = await EqFinanceStaking.new({from: accounts[1]});
		const addressmQWPS17 = accounts[0]
		const addressmI3ngl = accounts[2]
		const uintRMsNn7Q = await EqFinanceStakingGZ1xp8X.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const addressxsSmv00 = await EqFinanceStakingGZ1xp8X.transferOwnership.call(addressmQWPS17, {from: accounts[0]});
		const uintKpfKQU = await EqFinanceStakingGZ1xp8X.getPendingDivs.call(addressmI3ngl, {from: accounts[2]});

		assert.equal(uintRMsNn7Q, BigInt("0"))
		await expect(EqFinanceStakingGZ1xp8X.transferOwnership.call(addressmQWPS17, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinge73MGGH = await EqFinanceStaking.new({from: accounts[3]});
		const addressDjCROjp = accounts[4]
		const uintd5huy9 = await EqFinanceStakinge73MGGH.getPendingDivs.call(addressDjCROjp, {from: accounts[3]});
		await EqFinanceStakinge73MGGH.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintd5huy9, BigInt("0"))
		await expect(EqFinanceStakinge73MGGH.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingFhsa792 = await EqFinanceStaking.new({from: accounts[3]});
		const uintmpD4RNG = BigInt("756")
		const addressKP2Frjc = accounts[1]
		const addressIFBh5xe = accounts[1]
		const uintK5Bd83E = await EqFinanceStakingFhsa792.withdraw.call(uintmpD4RNG, {from: accounts[4]});
		await EqFinanceStakingFhsa792.onlyOwner.call({from: accounts[3]});
		await EqFinanceStakingFhsa792.claimDivs.call({from: accounts[3]});
		const addressCxY2JMI = await EqFinanceStakingFhsa792.transferOwnership.call(addressKP2Frjc, {from: accounts[3]});
		const uintsKHw9CN = await EqFinanceStakingFhsa792.getPendingDivs.call(addressIFBh5xe, {from: accounts[4]});

		await expect(EqFinanceStakingFhsa792.withdraw.call(uintmpD4RNG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinge73MGGH = await EqFinanceStaking.new({from: accounts[3]});
		const addressKCyK5AM = accounts[4]
		const uintrNaLAWb = BigInt("1917")
		const addressCAB7PlY = accounts[1]
		const uintd5huy9 = await EqFinanceStakinge73MGGH.getPendingDivs.call(addressKCyK5AM, {from: accounts[3]});
		await EqFinanceStakinge73MGGH.claimDivs.call({from: accounts[4]});
		const uintO7TL0LR = await EqFinanceStakinge73MGGH.getNumberOfHolders.call({from: accounts[0]});
		const uintVanOsi = await EqFinanceStakinge73MGGH.deposit.call(uintrNaLAWb, {from: accounts[2]});
		await EqFinanceStakinge73MGGH.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uintwdJ0rL0 = await EqFinanceStakinge73MGGH.getPendingDivs.call(addressCAB7PlY, {from: accounts[5]});

		assert.equal(uintd5huy9, BigInt("0"))
		await expect(EqFinanceStakinge73MGGH.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingCTfsLyM = await EqFinanceStaking.new({from: accounts[2]});
		const addressUJ1Xtib = accounts[0]
		const uintmNTpek = BigInt("2000")
		const addresslF7wXwg = accounts[2]
		const addressmTvWdYV = accounts[2]
		const uintxDZZS5 = await EqFinanceStakingCTfsLyM.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintBXNmw1m = await EqFinanceStakingCTfsLyM.getPendingDivs.call(addressUJ1Xtib, {from: accounts[5]});
		const addressye1J2q7 = await EqFinanceStakingCTfsLyM.transferAnyERC20Tokens.call(addressmTvWdYV, addresslF7wXwg, uintmNTpek, {from: accounts[4]});

		assert.equal(uintBXNmw1m, BigInt("0"))
		assert.equal(uintxDZZS5, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingCTfsLyM.transferAnyERC20Tokens.call(addressmTvWdYV, addresslF7wXwg, uintmNTpek, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingpjym7L2 = await EqFinanceStaking.new({from: accounts[4]});
		const addressVhE93QP = accounts[0]
		await EqFinanceStakingpjym7L2.claimDivs.call({from: accounts[3]});
		const addressMegfib1 = await EqFinanceStakingpjym7L2.transferOwnership.call(addressVhE93QP, {from: accounts[4]});

		await expect(EqFinanceStakingpjym7L2.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingSI9EaSl = await EqFinanceStaking.new({from: accounts[1]});
		const uintG8X7ay = BigInt("1598")
		const addressvHAxXVk = accounts[0]
		const addressE5Ah3me = accounts[0]
		const uint3624fW = await EqFinanceStakingSI9EaSl.getStakingAndDaoAmount.call({from: accounts[2]});
		const addresseT6YAqk = await EqFinanceStakingSI9EaSl.transferAnyERC20Tokens.call(addressE5Ah3me, addressvHAxXVk, uintG8X7ay, {from: accounts[1]});
		await EqFinanceStakingSI9EaSl.claimDivs.call({from: accounts[3]});

		assert.equal(uint3624fW, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingSI9EaSl.transferAnyERC20Tokens.call(addressE5Ah3me, addressvHAxXVk, uintG8X7ay, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})