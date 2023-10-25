const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contract0kx2Ua = await IERC20.new({from: accounts[3]});
		const valueh2EP9KY = BigInt("1062")
		const toe7y3eP5 = accounts[0]
		const whoYW81qi4 = accounts[2]
		const valueSbLWM0w = BigInt("1493")
		const tojlUoq6 = accounts[0]
		const nullpIr8ETE = await contract0kx2Ua.transfer.call(toe7y3eP5, valueh2EP9KY, {from: accounts[2]});
		const nullqcnKMAe = await contract0kx2Ua.totalSupply.call({from: accounts[0]});
		const nulldOybHXh = await contract0kx2Ua.balanceOf.call(whoYW81qi4, {from: accounts[4]});
		const nullER7hLie = await contract0kx2Ua.transfer.call(tojlUoq6, valueSbLWM0w, {from: accounts[5]});
	});
})