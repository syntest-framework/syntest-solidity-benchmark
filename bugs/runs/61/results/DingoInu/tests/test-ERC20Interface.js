const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractpmTVBAv = await ERC20Interface.new({from: accounts[1]});
		const tokensgIyOjNt = BigInt("530")
		const spender1ltMS5 = accounts[5]
		const tokensLwTwhPC = BigInt("997")
		const tozRuXvGR = "0x0000000000000000000000000000000000000001"
		const spenderL4vbR9L = accounts[3]
		const tokenOwnerMW8zuL6 = accounts[4]
		const successnEVmja = await contractpmTVBAv.approve.call(spender1ltMS5, tokensgIyOjNt, {from: accounts[2]});
		const successX5Yhdq = await contractpmTVBAv.transfer.call(tozRuXvGR, tokensLwTwhPC, {from: accounts[0]});
		const remainingjtWokD8 = await contractpmTVBAv.allowance.call(tokenOwnerMW8zuL6, spenderL4vbR9L, {from: accounts[0]});
	});
})