const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractPOaJp5c = await IERC20.new({from: accounts[0]});
		const valuefL7mIE = BigInt("1172")
		const spenderRE4z2K = accounts[1]
		const valueY8xN1AZ = BigInt("1599")
		const spendereijhwBP = accounts[1]
		const whoL10A0Kb = accounts[2]
		const nullrkCphh = await contractPOaJp5c.approve.call(spenderRE4z2K, valuefL7mIE, {from: accounts[2]});
		const nullWsRrXKA = await contractPOaJp5c.approve.call(spendereijhwBP, valueY8xN1AZ, {from: accounts[1]});
		const nullpCTOTqx = await contractPOaJp5c.balanceOf.call(whoL10A0Kb, {from: accounts[4]});
		const nullohflW8u = await contractPOaJp5c.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});
})