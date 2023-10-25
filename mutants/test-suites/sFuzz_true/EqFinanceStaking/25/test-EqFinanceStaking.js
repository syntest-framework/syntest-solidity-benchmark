const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingN592Zqp = await EqFinanceStaking.new({from: accounts[3]});
		const uintYLjUvWV = BigInt("98")
		const addressVCN45BS = accounts[2]
//		const uintxgP9Cgl = await EqFinanceStakingN592Zqp.withdraw.call(uintYLjUvWV, {from: accounts[1]});
//		const uintXBykDDp = await EqFinanceStakingN592Zqp.getPendingDivs.call(addressVCN45BS, {from: accounts[1]});
//		await EqFinanceStakingN592Zqp.claimDivs.call({from: accounts[1]});
//		const uintZtB3ZPs = await EqFinanceStakingN592Zqp.getNumberOfHolders.call({from: accounts[4]});
//		await EqFinanceStakingN592Zqp.claimDivs.call({from: accounts[1]});
//		const uintO9r2n9y = await EqFinanceStakingN592Zqp.getNumberOfHolders.call({from: accounts[5]});

		await expect(EqFinanceStakingN592Zqp.withdraw.call(uintYLjUvWV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingLu9LVXm = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintodEMiSz = BigInt("932")
		const addressTJIP4Mb = accounts[4]
		const addressnt79EVv = accounts[0]
		const uintjOcbnNt = BigInt("530")
		const addressV31HE9T = await EqFinanceStakingLu9LVXm.transferAnyERC20Tokens.call(addressnt79EVv, addressTJIP4Mb, uintodEMiSz, {from: accounts[5]});
		const uintOvRslJD = await EqFinanceStakingLu9LVXm.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uint37Nndt = await EqFinanceStakingLu9LVXm.withdraw.call(uintjOcbnNt, {from: accounts[1]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingl3MUzPT = await EqFinanceStaking.new({from: accounts[2]});
		const uintPuCjqOF = BigInt("286")
		const addressrThiSQl = accounts[4]
		const uintMOk8YIz = BigInt("798")
		const addressFdQxGB = accounts[4]
		const uintgK26eta = await EqFinanceStakingl3MUzPT.getNumberOfHolders.call({from: accounts[2]});
//		const uintcub8zGk = await EqFinanceStakingl3MUzPT.deposit.call(uintPuCjqOF, {from: accounts[1]});
//		const addressHLlVVy8 = await EqFinanceStakingl3MUzPT.transferOwnership.call(addressrThiSQl, {from: "0x0000000000000000000000000000000000000001"});
//		const uintHJkUJ20 = await EqFinanceStakingl3MUzPT.withdraw.call(uintMOk8YIz, {from: accounts[3]});
//		const addressVIrJb7q = await EqFinanceStakingl3MUzPT.transferOwnership.call(addressFdQxGB, {from: accounts[2]});

		assert.equal(uintgK26eta, BigInt("0"))
		await expect(EqFinanceStakingl3MUzPT.deposit.call(uintPuCjqOF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingUTZWQjZ = await EqFinanceStaking.new({from: accounts[0]});
		const addresshZ2JSMM = accounts[2]
		const addresspFLttkg = accounts[3]
		const uint2SHJb6 = BigInt("1226")
		const addressa4nGLC8 = await EqFinanceStakingUTZWQjZ.transferOwnership.call(addresshZ2JSMM, {from: accounts[0]});
		const uintDwaWAuo = await EqFinanceStakingUTZWQjZ.getNumberOfHolders.call({from: accounts[0]});
		const uintbLmNmzU = await EqFinanceStakingUTZWQjZ.getPendingDivs.call(addresspFLttkg, {from: accounts[3]});
//		const uintCeRYTVB = await EqFinanceStakingUTZWQjZ.deposit.call(uint2SHJb6, {from: accounts[3]});
//		await EqFinanceStakingUTZWQjZ.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintDwaWAuo, BigInt("0"))
		assert.equal(uintbLmNmzU, BigInt("0"))
		await expect(EqFinanceStakingUTZWQjZ.deposit.call(uint2SHJb6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingNNKOmJO = await EqFinanceStaking.new({from: accounts[1]});
		const addressrhX75Co = accounts[0]
		const uintny15V8N = BigInt("1768")
		const uintCElJGvG = await EqFinanceStakingNNKOmJO.getPendingDivs.call(addressrhX75Co, {from: accounts[3]});
		const uintCwkU8kG = await EqFinanceStakingNNKOmJO.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintm73bw1A = await EqFinanceStakingNNKOmJO.getNumberOfHolders.call({from: accounts[3]});
//		const uintjMfweHs = await EqFinanceStakingNNKOmJO.withdraw.call(uintny15V8N, {from: accounts[5]});

		assert.equal(uintCElJGvG, BigInt("0"))
		assert.equal(uintCwkU8kG, BigInt("3000000000000000000000000"))
		assert.equal(uintm73bw1A, BigInt("0"))
		await expect(EqFinanceStakingNNKOmJO.withdraw.call(uintny15V8N, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingZ0DMx7 = await EqFinanceStaking.new({from: accounts[2]});
		const addressXsquL4t = accounts[0]
//		await EqFinanceStakingZ0DMx7.claimDivs.call({from: accounts[3]});
//		const uintSkXPDhg = await EqFinanceStakingZ0DMx7.getPendingDivs.call(addressXsquL4t, {from: accounts[4]});
//		await EqFinanceStakingZ0DMx7.claimDivs.call({from: accounts[4]});
//		await EqFinanceStakingZ0DMx7.onlyOwner.call({from: accounts[0]});
//		const uintR6FZuW4 = await EqFinanceStakingZ0DMx7.getStakingAndDaoAmount.call({from: accounts[3]});

		await expect(EqFinanceStakingZ0DMx7.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingNNKOmJO = await EqFinanceStaking.new({from: accounts[1]});
		const addresswWxD8Wr = accounts[2]
		const uintQiHnJiu = BigInt("1046")
		const addressUqQkKDy = accounts[5]
		const addressKs28njB = "0x0000000000000000000000000000000000000001"
		const uintCElJGvG = await EqFinanceStakingNNKOmJO.getPendingDivs.call(addresswWxD8Wr, {from: accounts[3]});
//		const addresslOJn1vB = await EqFinanceStakingNNKOmJO.transferAnyERC20Tokens.call(addressKs28njB, addressUqQkKDy, uintQiHnJiu, {from: accounts[1]});

		assert.equal(uintCElJGvG, BigInt("0"))
		await expect(EqFinanceStakingNNKOmJO.transferAnyERC20Tokens.call(addressKs28njB, addressUqQkKDy, uintQiHnJiu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingNNKOmJO = await EqFinanceStaking.new({from: accounts[1]});
		const uintHNJBAmC = BigInt("0")
		const addressoO5KOlr = accounts[3]
//		const uintyjpvMaT = await EqFinanceStakingNNKOmJO.deposit.call(uintHNJBAmC, {from: accounts[2]});
//		const uintCElJGvG = await EqFinanceStakingNNKOmJO.getPendingDivs.call(addressoO5KOlr, {from: accounts[3]});

		await expect(EqFinanceStakingNNKOmJO.deposit.call(uintHNJBAmC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})