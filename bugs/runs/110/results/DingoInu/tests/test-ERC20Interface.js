const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractBkh0W2D = await ERC20Interface.new({from: accounts[2]});
		const tokensfkutJg5 = BigInt("123")
		const spenderx2qEsu = accounts[4]
		const successHFENNvJ = await contractBkh0W2D.approve.call(spenderx2qEsu, tokensfkutJg5, {from: "0x0000000000000000000000000000000000000001"});
		const nullUgspHcP = await contractBkh0W2D.totalSupply.call({from: accounts[0]});
	});
})