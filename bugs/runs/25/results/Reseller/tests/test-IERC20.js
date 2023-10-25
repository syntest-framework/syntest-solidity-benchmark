const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractMYkuPFs = await IERC20.new({from: accounts[2]});
		const valuervmO919 = BigInt("997")
		const toOtXF26e = accounts[0]
		const fromyKtmb18 = accounts[4]
		const valueT8yO6sQ = BigInt("1913")
		const toncchzEi = accounts[3]
		const nullpctIcq9 = await contractMYkuPFs.transferFrom.call(fromyKtmb18, toOtXF26e, valuervmO919, {from: accounts[0]});
		const nullM8Q2OuH = await contractMYkuPFs.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const nullP2nB0I5 = await contractMYkuPFs.mint.call(toncchzEi, valueT8yO6sQ, {from: accounts[0]});
	});
})