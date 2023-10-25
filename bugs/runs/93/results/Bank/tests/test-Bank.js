const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractj5DMsZB = await Bank.new({from: accounts[1]});
		const tokenbf3IEIg = accounts[3]
		const borrowerQs3BlaK = accounts[1]
		const balanceye4vvPa = await contractj5DMsZB.totalSupplyOf.call(tokenbf3IEIg, {from: accounts[3]});
		await contractj5DMsZB.removeBorrower.call(borrowerQs3BlaK, {from: accounts[4]});

		await expect(contractj5DMsZB.totalSupplyOf.call(tokenbf3IEIg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractzt9f7ht = await Bank.new({from: accounts[2]});
		const amountRXnzMvQ = BigInt("1387")
		const tokenSfh2e85 = accounts[0]
		const amountxW5RrlK = BigInt("1827")
		const tokenf6zLiYY = accounts[5]
		const amountCVSE8G = BigInt("1630")
		const whogQYVIfJ = accounts[5]
		const tokenzQaSLXC = accounts[1]
		const amountmRVN1a = BigInt("1822")
		const tokenWl77fux = accounts[2]
		await contractzt9f7ht.repay.call(tokenSfh2e85, amountRXnzMvQ, {from: accounts[0]});
		await contractzt9f7ht.withdraw.call(tokenf6zLiYY, amountxW5RrlK, {from: accounts[3]});
		await contractzt9f7ht.borrowFor.call(tokenzQaSLXC, whogQYVIfJ, amountCVSE8G, {from: accounts[1]});
		await contractzt9f7ht.borrow.call(tokenWl77fux, amountmRVN1a, {from: accounts[4]});

		await expect(contractzt9f7ht.repay.call(tokenSfh2e85, amountRXnzMvQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractE4NH3Jp = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenlpu6R1u = accounts[4]
		const borrowerARpU8PM = accounts[3]
		const balance3YgiqH = await contractE4NH3Jp.totalSupplyOf.call(tokenlpu6R1u, {from: accounts[3]});
		await contractE4NH3Jp.addBorrower.call(borrowerARpU8PM, {from: accounts[0]});
	});

	it('test for Bank', async () => {
		const contractSqXhPIy = await Bank.new({from: accounts[1]});
		const borrowerXhvzvw6 = accounts[1]
		const tokennIBhCUE = accounts[3]
		const amount2QONlI = BigInt("1451")
		const whomJBjkTN = "0x0000000000000000000000000000000000000001"
		const tokenCwHgrEA = accounts[2]
		const borrowerKbapPON = accounts[5]
		const borrowerYzNxi6K = accounts[5]
		const borrowersngmxs = accounts[2]
		await contractSqXhPIy.addBorrower.call(borrowerXhvzvw6, {from: accounts[1]});
		const balanceKlMr2lj = await contractSqXhPIy.totalSupplyOf.call(tokennIBhCUE, {from: accounts[3]});
		await contractSqXhPIy.borrowFor.call(tokenCwHgrEA, whomJBjkTN, amount2QONlI, {from: accounts[0]});
		await contractSqXhPIy.addBorrower.call(borrowerKbapPON, {from: accounts[1]});
		await contractSqXhPIy.removeBorrower.call(borrowerYzNxi6K, {from: "0x0000000000000000000000000000000000000001"});
		await contractSqXhPIy.removeBorrower.call(borrowersngmxs, {from: accounts[4]});

		await expect(contractSqXhPIy.addBorrower.call(borrowerXhvzvw6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractLQoLwAp = await Bank.new({from: accounts[1]});
		const amountVCNuwj = BigInt("1465")
		const tokenDg8sAFY = accounts[2]
		const amountJpo78pR = BigInt("888")
		const tokenpyKJMyo = accounts[3]
		const borrowerEUF4urc = accounts[2]
		await contractLQoLwAp.deposit.call(tokenDg8sAFY, amountVCNuwj, {from: accounts[3]});
		await contractLQoLwAp.withdraw.call(tokenpyKJMyo, amountJpo78pR, {from: accounts[4]});
		await contractLQoLwAp.removeBorrower.call(borrowerEUF4urc, {from: accounts[4]});

		await expect(contractLQoLwAp.deposit.call(tokenDg8sAFY, amountVCNuwj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractCHPEhR = await Bank.new({from: accounts[1]});
		const borrowerFoeTglC = accounts[2]
		const amountMZREfvv = BigInt("1797")
		const tokenxadPmS = "0x0000000000000000000000000000000000000001"
		const borrowerUZYEmy7 = accounts[4]
		const borrowerzJclnl = accounts[2]
		await contractCHPEhR.removeBorrower.call(borrowerFoeTglC, {from: accounts[1]});
		await contractCHPEhR.repay.call(tokenxadPmS, amountMZREfvv, {from: accounts[2]});
		await contractCHPEhR.removeBorrower.call(borrowerUZYEmy7, {from: accounts[1]});
		await contractCHPEhR.removeBorrower.call(borrowerzJclnl, {from: accounts[4]});

		await expect(contractCHPEhR.removeBorrower.call(borrowerFoeTglC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractRfgWI0t = await Bank.new({from: accounts[1]});
		const amounta9roQ4 = BigInt("547")
		const tokenla2FFan = accounts[4]
		const borrowersKkMeQb = accounts[2]
		await contractRfgWI0t.withdraw.call(tokenla2FFan, amounta9roQ4, {from: accounts[1]});
		await contractRfgWI0t.removeBorrower.call(borrowersKkMeQb, {from: accounts[4]});

		await expect(contractRfgWI0t.withdraw.call(tokenla2FFan, amounta9roQ4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractxIMwJTm = await Bank.new({from: accounts[3]});
		const tokenAYp3zWD = "0x0000000000000000000000000000000000000000"
		const borrowerHX9xBU = accounts[1]
		const borrowerzoMyJ2g = accounts[3]
		const balanceLqdwJgK = await contractxIMwJTm.totalSupplyOf.call(tokenAYp3zWD, {from: accounts[1]});
		await contractxIMwJTm.removeBorrower.call(borrowerHX9xBU, {from: accounts[5]});
		await contractxIMwJTm.addBorrower.call(borrowerzoMyJ2g, {from: accounts[2]});

		assert.equal(balanceLqdwJgK, 0)
		await expect(contractxIMwJTm.removeBorrower.call(borrowerHX9xBU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})