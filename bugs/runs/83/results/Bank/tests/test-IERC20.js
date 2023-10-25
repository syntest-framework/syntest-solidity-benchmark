const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractnuuoJO = await IERC20.new({from: accounts[3]});
		const whoUg0NWY0 = "0x0000000000000000000000000000000000000001"
		const spenderfHje1gs = accounts[1]
		const ownerhzsHnmt = accounts[4]
		const whoFI4PvGF = accounts[2]
		const whoyIBdRhV = accounts[2]
		const valueyyrMYlU = BigInt("496")
		const todK7yIHx = accounts[2]
		const fromCQFj0l = accounts[0]
		const nullwRzjWTt = await contractnuuoJO.balanceOf.call(whoUg0NWY0, {from: accounts[1]});
		const nullxZIgLhL = await contractnuuoJO.allowance.call(ownerhzsHnmt, spenderfHje1gs, {from: accounts[2]});
		const nullPpZ5sTD = await contractnuuoJO.balanceOf.call(whoFI4PvGF, {from: accounts[5]});
		const nullTvyr7se = await contractnuuoJO.balanceOf.call(whoyIBdRhV, {from: "0x0000000000000000000000000000000000000001"});
		const nullU7AsyXp = await contractnuuoJO.transferFrom.call(fromCQFj0l, todK7yIHx, valueyyrMYlU, {from: accounts[3]});
	});
})