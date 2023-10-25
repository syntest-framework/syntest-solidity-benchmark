const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingOvtsgIa = await EqFinanceStaking.new({from: accounts[2]});
//		await EqFinanceStakingOvtsgIa.claimDivs.call({from: accounts[2]});
//		const uintMmJWqxo = await EqFinanceStakingOvtsgIa.getStakingAndDaoAmount.call({from: accounts[2]});
//		await EqFinanceStakingOvtsgIa.onlyOwner.call({from: accounts[1]});

		await expect(EqFinanceStakingOvtsgIa.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingPCw3JwL = await EqFinanceStaking.new({from: accounts[4]});
		const addressCOr4SLZ = accounts[0]
//		await EqFinanceStakingPCw3JwL.claimDivs.call({from: accounts[4]});
//		const addressZllloIf = await EqFinanceStakingPCw3JwL.transferOwnership.call(addressCOr4SLZ, {from: accounts[0]});

		await expect(EqFinanceStakingPCw3JwL.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingjlffMNs = await EqFinanceStaking.new({from: accounts[2]});
		const addressG8QOQdT = "0x0000000000000000000000000000000000000001"
		const uintcZJbmqB = BigInt("1344")
		const addressomM8ex6 = accounts[0]
		const addressDMb1pDl = accounts[0]
		const uintJ81H3JY = await EqFinanceStakingjlffMNs.getPendingDivs.call(addressG8QOQdT, {from: accounts[4]});
//		const uintr0QPB0L = await EqFinanceStakingjlffMNs.deposit.call(uintcZJbmqB, {from: accounts[1]});
//		const addresszrJ7YC5 = await EqFinanceStakingjlffMNs.transferOwnership.call(addressomM8ex6, {from: accounts[3]});
//		const uintb8KoPK2 = await EqFinanceStakingjlffMNs.getPendingDivs.call(addressDMb1pDl, {from: accounts[0]});

		assert.equal(uintJ81H3JY, BigInt("0"))
		await expect(EqFinanceStakingjlffMNs.deposit.call(uintcZJbmqB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingo0xNvoH = await EqFinanceStaking.new({from: accounts[0]});
		const uintBg6rCAu = BigInt("916")
//		await EqFinanceStakingo0xNvoH.claimDivs.call({from: accounts[3]});
//		const uintE0nXK9 = await EqFinanceStakingo0xNvoH.withdraw.call(uintBg6rCAu, {from: accounts[5]});
//		await EqFinanceStakingo0xNvoH.onlyOwner.call({from: accounts[3]});

		await expect(EqFinanceStakingo0xNvoH.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingBoTYe67 = await EqFinanceStaking.new({from: accounts[5]});
		const uintnEKAoOp = await EqFinanceStakingBoTYe67.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintotayQ0P = await EqFinanceStakingBoTYe67.getStakingAndDaoAmount.call({from: accounts[1]});
//		await EqFinanceStakingBoTYe67.claimDivs.call({from: accounts[3]});
//		const uintZZcdpT6 = await EqFinanceStakingBoTYe67.getNumberOfHolders.call({from: accounts[1]});

		assert.equal(uintnEKAoOp, BigInt("3000000000000000000000000"))
		assert.equal(uintotayQ0P, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingBoTYe67.claimDivs.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingUj5jxa = await EqFinanceStaking.new({from: accounts[2]});
		const uintCXgg7kK = BigInt("0")
		const addressp2ghNrr = accounts[1]
		const uintfTR30uk = BigInt("160")
		const address7SfDCY = accounts[6]
		const uintQUQr4b = BigInt("1943")
		const uintjiSlZXb = await EqFinanceStakingUj5jxa.getStakingAndDaoAmount.call({from: accounts[4]});
//		const uintDNe0rIk = await EqFinanceStakingUj5jxa.deposit.call(uintCXgg7kK, {from: accounts[0]});
//		const addressfBNCk0d = await EqFinanceStakingUj5jxa.transferOwnership.call(addressp2ghNrr, {from: accounts[4]});
//		const uintE3EiX3n = await EqFinanceStakingUj5jxa.withdraw.call(uintfTR30uk, {from: "0x0000000000000000000000000000000000000001"});
//		const uintjwXOTd = await EqFinanceStakingUj5jxa.getPendingDivs.call(address7SfDCY, {from: accounts[4]});
//		const uintSMJC1Ay = await EqFinanceStakingUj5jxa.withdraw.call(uintQUQr4b, {from: accounts[2]});

		assert.equal(uintjiSlZXb, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingUj5jxa.deposit.call(uintCXgg7kK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingqqdZo0e = await EqFinanceStaking.new({from: accounts[1]});
		const uintkDXLgrh = BigInt("1030")
		const addressQWl8FVa = accounts[2]
		const addressavidBEa = accounts[5]
		const addressXAfBqec = accounts[4]
		const uintS2rwmjr = BigInt("1440")
		const uintUBn5eK = await EqFinanceStakingqqdZo0e.getStakingAndDaoAmount.call({from: accounts[0]});
//		const addressBRgJZi = await EqFinanceStakingqqdZo0e.transferAnyERC20Tokens.call(addressavidBEa, addressQWl8FVa, uintkDXLgrh, {from: accounts[1]});
//		const addressOCJqS41 = await EqFinanceStakingqqdZo0e.transferOwnership.call(addressXAfBqec, {from: accounts[1]});
//		const uintUB8urd = await EqFinanceStakingqqdZo0e.getStakingAndDaoAmount.call({from: accounts[3]});
//		const uintMndLjCj = await EqFinanceStakingqqdZo0e.withdraw.call(uintS2rwmjr, {from: accounts[3]});

		assert.equal(uintUBn5eK, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingqqdZo0e.transferAnyERC20Tokens.call(addressavidBEa, addressQWl8FVa, uintkDXLgrh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingqqdZo0e = await EqFinanceStaking.new({from: accounts[1]});
		const addressmUTqalj = accounts[4]
		const address77rLqP = accounts[3]
		const uintU3wRhR9 = BigInt("1440")
		const uintUBn5eK = await EqFinanceStakingqqdZo0e.getStakingAndDaoAmount.call({from: accounts[0]});
		const addressOCJqS41 = await EqFinanceStakingqqdZo0e.transferOwnership.call(addressmUTqalj, {from: accounts[1]});
		const uintg3pnxRP = await EqFinanceStakingqqdZo0e.getPendingDivs.call(address77rLqP, {from: accounts[2]});
//		const uintMndLjCj = await EqFinanceStakingqqdZo0e.withdraw.call(uintU3wRhR9, {from: accounts[3]});

		assert.equal(uintUBn5eK, BigInt("3000000000000000000000000"))
		assert.equal(uintg3pnxRP, BigInt("0"))
		await expect(EqFinanceStakingqqdZo0e.withdraw.call(uintU3wRhR9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingLtp5EvF = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrmCnIp9 = BigInt("137")
		const addressMA72wF5 = "0x0000000000000000000000000000000000000001"
		const uintiERm70D = BigInt("1598")
		const uintnn8WZZu = await EqFinanceStakingLtp5EvF.deposit.call(uintrmCnIp9, {from: accounts[4]});
		await EqFinanceStakingLtp5EvF.claimDivs.call({from: accounts[0]});
		const addresswIYOCHv = await EqFinanceStakingLtp5EvF.transferOwnership.call(addressMA72wF5, {from: accounts[4]});
		await EqFinanceStakingLtp5EvF.claimDivs.call({from: accounts[3]});
		const uintQh8b7JB = await EqFinanceStakingLtp5EvF.deposit.call(uintiERm70D, {from: accounts[3]});
	});
})