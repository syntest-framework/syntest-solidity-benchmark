const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractiMXPnF3 = await IERC20.new({from: accounts[4]});
		const amountl1AI5VI = BigInt("1003")
		const spenderZQ9icg = accounts[1]
		const amountdbh7UEC = BigInt("1760")
		const spenderEd5eUyw = accounts[0]
		const amountOvXYtCp = BigInt("814")
		const spenderym6AWHI = accounts[2]
		const nullgsjcVbH = await contractiMXPnF3.approve.call(spenderZQ9icg, amountl1AI5VI, {from: accounts[4]});
		const nullJxJm87T = await contractiMXPnF3.approve.call(spenderEd5eUyw, amountdbh7UEC, {from: accounts[2]});
		const nullDlP7va3 = await contractiMXPnF3.approve.call(spenderym6AWHI, amountOvXYtCp, {from: "0x0000000000000000000000000000000000000001"});
	});
})