const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractDNl6O90 = await IERC20.new({from: accounts[5]});
		const spenderusQfey5 = accounts[4]
		const ownerD6JrCx8 = "0x0000000000000000000000000000000000000001"
		const whoCgqynI0 = accounts[5]
		const valueuK6JD0f = BigInt("289")
		const spenderppormTL = accounts[1]
		const valueBuHelJA = BigInt("1104")
		const spenderIPBALj5 = "0x0000000000000000000000000000000000000001"
		const nullqsMv8B = await contractDNl6O90.allowance.call(ownerD6JrCx8, spenderusQfey5, {from: accounts[1]});
		const nullsMKvql = await contractDNl6O90.balanceOf.call(whoCgqynI0, {from: accounts[5]});
		const nullg1YVuDw = await contractDNl6O90.totalSupply.call({from: accounts[2]});
		const nullyN6iHqp = await contractDNl6O90.approve.call(spenderppormTL, valueuK6JD0f, {from: accounts[1]});
		const nullZXJ3bjz = await contractDNl6O90.approve.call(spenderIPBALj5, valueBuHelJA, {from: accounts[0]});
	});
})