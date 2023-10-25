const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractLqNn96n = await IERC20.new({from: accounts[2]});
		const valueii7epPB = BigInt("771")
		const spendervFtUnuo = accounts[3]
		const whoa8iImho = accounts[2]
		const spenderOJJBaqh = accounts[4]
		const ownerDrtuBQp = "0x0000000000000000000000000000000000000001"
		const whof8cjHdu = accounts[1]
		const nullh7oGkrr = await contractLqNn96n.approve.call(spendervFtUnuo, valueii7epPB, {from: "0x0000000000000000000000000000000000000001"});
		const nullLXvFL44 = await contractLqNn96n.balanceOf.call(whoa8iImho, {from: accounts[5]});
		const nulli2EHQU = await contractLqNn96n.allowance.call(ownerDrtuBQp, spenderOJJBaqh, {from: accounts[3]});
		const nullR922AIj = await contractLqNn96n.balanceOf.call(whof8cjHdu, {from: accounts[3]});
	});
})