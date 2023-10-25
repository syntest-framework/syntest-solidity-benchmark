const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingsaGz0Q6 = await EqFinanceStaking.new({from: accounts[0]});
		const uintU9ohRkq = BigInt("1965")
//		const uintxoIIk2T = await EqFinanceStakingsaGz0Q6.withdraw.call(uintU9ohRkq, {from: accounts[0]});
//		const uintIm87bRj = await EqFinanceStakingsaGz0Q6.getStakingAndDaoAmount.call({from: accounts[0]});

		await expect(EqFinanceStakingsaGz0Q6.withdraw.call(uintU9ohRkq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingj9j87kP = await EqFinanceStaking.new({from: accounts[0]});
		const addressDRdGNJG = accounts[2]
		const uintagzZ1lJ = BigInt("909")
		const uints3FWKJb = await EqFinanceStakingj9j87kP.getPendingDivs.call(addressDRdGNJG, {from: accounts[4]});
//		const uintbIAANBE = await EqFinanceStakingj9j87kP.deposit.call(uintagzZ1lJ, {from: accounts[4]});

		assert.equal(uints3FWKJb, BigInt("0"))
		await expect(EqFinanceStakingj9j87kP.deposit.call(uintagzZ1lJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingYsWmKTw = await EqFinanceStaking.new({from: accounts[1]});
		const uintDN81VWA = await EqFinanceStakingYsWmKTw.getNumberOfHolders.call({from: accounts[2]});
		const uintvzAsFXO = await EqFinanceStakingYsWmKTw.getNumberOfHolders.call({from: accounts[2]});
		const uinthfO3qqp = await EqFinanceStakingYsWmKTw.getStakingAndDaoAmount.call({from: accounts[0]});

		assert.equal(uintDN81VWA, BigInt("0"))
		assert.equal(uinthfO3qqp, BigInt("3000000000000000000000000"))
		assert.equal(uintvzAsFXO, BigInt("0"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingiPqQoGc = await EqFinanceStaking.new({from: accounts[0]});
		const addressjC4rIcC = accounts[3]
		const addressEsdb5KI = accounts[2]
//		await EqFinanceStakingiPqQoGc.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
//		await EqFinanceStakingiPqQoGc.onlyOwner.call({from: accounts[4]});
//		const uintqCHVOCV = await EqFinanceStakingiPqQoGc.getPendingDivs.call(addressjC4rIcC, {from: accounts[3]});
//		const uintBD9TWe = await EqFinanceStakingiPqQoGc.getPendingDivs.call(addressEsdb5KI, {from: accounts[2]});

		await expect(EqFinanceStakingiPqQoGc.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingk9rFJZG = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressupZ7DEC = accounts[3]
		const addressAnzCXc4 = accounts[2]
		const uintb5Ff0Hm = BigInt("666")
		const uintH5bECq3 = BigInt("9")
		const uinth8esMw0 = await EqFinanceStakingk9rFJZG.getPendingDivs.call(addressupZ7DEC, {from: accounts[0]});
		const uintxxALL9h = await EqFinanceStakingk9rFJZG.getPendingDivs.call(addressAnzCXc4, {from: accounts[3]});
		const uintsL0YSko = await EqFinanceStakingk9rFJZG.withdraw.call(uintb5Ff0Hm, {from: accounts[4]});
		const uintyg7rB84 = await EqFinanceStakingk9rFJZG.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintH75Et0t = await EqFinanceStakingk9rFJZG.withdraw.call(uintH5bECq3, {from: accounts[0]});
		const uintZsGeCzj = await EqFinanceStakingk9rFJZG.getStakingAndDaoAmount.call({from: accounts[1]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingj9j87kP = await EqFinanceStaking.new({from: accounts[0]});
		const addressPzChFYJ = accounts[2]
		const addressxYQ5VHi = accounts[2]
		const uintARFCmMI = BigInt("901")
		const uintO23E59k = await EqFinanceStakingj9j87kP.getNumberOfHolders.call({from: accounts[1]});
		const uints3FWKJb = await EqFinanceStakingj9j87kP.getPendingDivs.call(addressPzChFYJ, {from: accounts[4]});
		const addressYxkIXYr = await EqFinanceStakingj9j87kP.transferOwnership.call(addressxYQ5VHi, {from: accounts[0]});
//		const uintbIAANBE = await EqFinanceStakingj9j87kP.deposit.call(uintARFCmMI, {from: accounts[4]});

		assert.equal(uintO23E59k, BigInt("0"))
		assert.equal(uints3FWKJb, BigInt("0"))
		await expect(EqFinanceStakingj9j87kP.deposit.call(uintARFCmMI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingxkq0w8K = await EqFinanceStaking.new({from: accounts[2]});
		const uintPN2EI3Q = BigInt("38")
		const addressqiAY1gQ = accounts[4]
		const addressgKijD93 = accounts[2]
//		const addressP67R45o = await EqFinanceStakingxkq0w8K.transferAnyERC20Tokens.call(addressgKijD93, addressqiAY1gQ, uintPN2EI3Q, {from: accounts[2]});
//		await EqFinanceStakingxkq0w8K.claimDivs.call({from: accounts[1]});

		await expect(EqFinanceStakingxkq0w8K.transferAnyERC20Tokens.call(addressgKijD93, addressqiAY1gQ, uintPN2EI3Q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})