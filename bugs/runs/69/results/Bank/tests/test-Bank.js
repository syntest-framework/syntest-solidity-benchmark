const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractXOjpOnY = await Bank.new({from: accounts[2]});
		const borrowerm412kft = "0x0000000000000000000000000000000000000001"
		const amountxyoTvqV = BigInt("115")
		const tokenqkk9NY1 = accounts[0]
		const amountKRuiYfL = BigInt("597")
		const tokenWyg3eO1 = accounts[5]
		await contractXOjpOnY.addBorrower.call(borrowerm412kft, {from: accounts[2]});
		await contractXOjpOnY.withdraw.call(tokenqkk9NY1, amountxyoTvqV, {from: accounts[4]});
		await contractXOjpOnY.repay.call(tokenWyg3eO1, amountKRuiYfL, {from: accounts[2]});

		await expect(contractXOjpOnY.addBorrower.call(borrowerm412kft, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractGmhFv8K = await Bank.new({from: accounts[4]});
		const amounts07lpk1 = BigInt("1213")
		const tokenceD3cQ0 = accounts[0]
		const amountRb8YZK = BigInt("833")
		const tokenn42pe0F = accounts[4]
		await contractGmhFv8K.repay.call(tokenceD3cQ0, amounts07lpk1, {from: accounts[1]});
		await contractGmhFv8K.deposit.call(tokenn42pe0F, amountRb8YZK, {from: accounts[3]});

		await expect(contractGmhFv8K.repay.call(tokenceD3cQ0, amounts07lpk1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractiBgTwMi = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amount3WK7cY = BigInt("270")
		const whoyd8NZyX = accounts[4]
		const tokeny4SH26j = accounts[3]
		const amountJEe1SnE = BigInt("1082")
		const whoaG08tpi = accounts[3]
		const tokenOpMqZ9 = accounts[1]
		const amounta6wZthc = BigInt("1429")
		const tokenomroyyh = accounts[1]
		const borrowerFnW95nF = accounts[1]
		await contractiBgTwMi.borrowFor.call(tokeny4SH26j, whoyd8NZyX, amount3WK7cY, {from: accounts[0]});
		await contractiBgTwMi.borrowFor.call(tokenOpMqZ9, whoaG08tpi, amountJEe1SnE, {from: accounts[1]});
		await contractiBgTwMi.deposit.call(tokenomroyyh, amounta6wZthc, {from: accounts[1]});
		await contractiBgTwMi.removeBorrower.call(borrowerFnW95nF, {from: accounts[1]});
	});

	it('test for Bank', async () => {
		const contractQnuYgAi = await Bank.new({from: accounts[0]});
		const tokenF3i6pDR = accounts[0]
		const borrowerDHDi2ZF = "0x0000000000000000000000000000000000000001"
		const borrowerm7LcUcc = accounts[5]
		const balancepwSJZJ = await contractQnuYgAi.totalSupplyOf.call(tokenF3i6pDR, {from: accounts[2]});
		await contractQnuYgAi.removeBorrower.call(borrowerDHDi2ZF, {from: accounts[5]});
		await contractQnuYgAi.removeBorrower.call(borrowerm7LcUcc, {from: accounts[5]});

		await expect(contractQnuYgAi.totalSupplyOf.call(tokenF3i6pDR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractHuLDsOv = await Bank.new({from: accounts[0]});
		const borrowerh6RXZt5 = accounts[5]
		const borrower8NzkdX = accounts[6]
		await contractHuLDsOv.removeBorrower.call(borrowerh6RXZt5, {from: accounts[0]});
		await contractHuLDsOv.removeBorrower.call(borrower8NzkdX, {from: accounts[5]});

		await expect(contractHuLDsOv.removeBorrower.call(borrowerh6RXZt5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractQWcvJSk = await Bank.new({from: accounts[0]});
		const amountOIKcYcT = BigInt("533")
		const tokenmk2yu4K = "0x0000000000000000000000000000000000000001"
		const amountyjpPwoR = BigInt("1547")
		const tokenypnysJ9 = accounts[0]
		const borrowerKapKySz = accounts[6]
		await contractQWcvJSk.deposit.call(tokenmk2yu4K, amountOIKcYcT, {from: accounts[2]});
		await contractQWcvJSk.borrow.call(tokenypnysJ9, amountyjpPwoR, {from: accounts[1]});
		await contractQWcvJSk.removeBorrower.call(borrowerKapKySz, {from: accounts[5]});

		await expect(contractQWcvJSk.deposit.call(tokenmk2yu4K, amountOIKcYcT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractpB0ytzv = await Bank.new({from: accounts[0]});
		const amountQ3etpN = BigInt("1909")
		const tokenUcd1wCT = accounts[4]
		const borrowerELoI1QE = accounts[5]
		await contractpB0ytzv.withdraw.call(tokenUcd1wCT, amountQ3etpN, {from: accounts[0]});
		await contractpB0ytzv.removeBorrower.call(borrowerELoI1QE, {from: accounts[5]});

		await expect(contractpB0ytzv.withdraw.call(tokenUcd1wCT, amountQ3etpN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractJLCPVE1 = await Bank.new({from: accounts[0]});
		const tokensUXFG4R = "0x0000000000000000000000000000000000000000"
		const tokeng7OwqSg = accounts[0]
		const borrowerwCI1a6b = accounts[6]
		const balanceTYnBgM = await contractJLCPVE1.totalSupplyOf.call(tokensUXFG4R, {from: accounts[0]});
		const balanceYoCR9nK = await contractJLCPVE1.totalSupplyOf.call(tokeng7OwqSg, {from: accounts[2]});
		await contractJLCPVE1.removeBorrower.call(borrowerwCI1a6b, {from: accounts[5]});

		assert.equal(balanceTYnBgM, 0)
		await expect(contractJLCPVE1.totalSupplyOf.call(tokeng7OwqSg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})