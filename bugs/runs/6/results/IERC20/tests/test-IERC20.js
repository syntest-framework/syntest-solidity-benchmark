const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracto4OePC4 = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueBlGsDZa = BigInt("127")
		const toe8atKq = accounts[5]
		const fromSI1PE5I = accounts[5]
		const valueC61ifb = BigInt("369")
		const tobt3TNN = accounts[1]
		const nullpd2TPoH = await contracto4OePC4.totalSupply.call({from: accounts[2]});
		const nullUrCvgnH = await contracto4OePC4.totalSupply.call({from: accounts[1]});
		const nullIQ6wYSG = await contracto4OePC4.transferFrom.call(fromSI1PE5I, toe8atKq, valueBlGsDZa, {from: accounts[1]});
		const nullZcT1TKY = await contracto4OePC4.transfer.call(tobt3TNN, valueC61ifb, {from: accounts[1]});
	});
})