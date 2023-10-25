const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractlxrF0m = await IERC20.new({from: accounts[4]});
		const amountrdmDUEN = BigInt("677")
		const recipientchkc4JJ = accounts[0]
		const amountI9sLVdi = BigInt("189")
		const recipientZxiqKR6 = accounts[3]
		const amountt8zF2Az = BigInt("1527")
		const spendercuMDuXs = accounts[2]
		const amountswae58r = BigInt("213")
		const recipientdgxCX0x = accounts[5]
		const senderdM7ZMyW = accounts[4]
		const amountaC5vhti = BigInt("898")
		const recipientCyUh8mj = accounts[1]
		const null0a3qd7 = await contractlxrF0m.transfer.call(recipientchkc4JJ, amountrdmDUEN, {from: accounts[3]});
		const nullG5y76Bc = await contractlxrF0m.transfer.call(recipientZxiqKR6, amountI9sLVdi, {from: accounts[0]});
		const nullg2EbYRG = await contractlxrF0m.approve.call(spendercuMDuXs, amountt8zF2Az, {from: accounts[5]});
		const nulleyHPm1l = await contractlxrF0m.transferFrom.call(senderdM7ZMyW, recipientdgxCX0x, amountswae58r, {from: accounts[1]});
		const nullvEJu1yb = await contractlxrF0m.transfer.call(recipientCyUh8mj, amountaC5vhti, {from: accounts[3]});
	});
})