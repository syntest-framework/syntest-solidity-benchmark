const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contract8XzcKd = await IERC20.new({from: accounts[0]});
		const _valueUwqgGVB = BigInt("1480")
		const _spenderlQpsCA3 = accounts[4]
		const _spenderbs5rLrC = accounts[4]
		const _ownerpdlw2Nn = accounts[4]
		const _spenderYgGWUPy = accounts[3]
		const _ownerUAGFwXC = accounts[2]
		const nullLikYant = await contract8XzcKd.approve.call(_spenderlQpsCA3, _valueUwqgGVB, {from: "0x0000000000000000000000000000000000000001"});
		const nullGBInUrd = await contract8XzcKd.allowance.call(_ownerpdlw2Nn, _spenderbs5rLrC, {from: "0x0000000000000000000000000000000000000001"});
		const nullNhlN36Y = await contract8XzcKd.allowance.call(_ownerUAGFwXC, _spenderYgGWUPy, {from: accounts[1]});
	});
})