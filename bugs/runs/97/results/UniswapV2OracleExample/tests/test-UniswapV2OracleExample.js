const UniswapV2OracleExample = artifacts.require("UniswapV2OracleExample");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UniswapV2OracleExample', (accounts) => {
	it('test for UniswapV2OracleExample', async () => {
		const factory0ZON0T = accounts[3]
		const tokenAgRYXFGI = accounts[2]
		const tokenBGlqwjWy = accounts[4]
		const contractWITEZj2 = await UniswapV2OracleExample.new(factory0ZON0T, tokenAgRYXFGI, tokenBGlqwjWy, {from: accounts[3]});
		const amountInVL9subs = BigInt("1909")
		const tokenInzwWt7N6 = accounts[1]
		const amountInu9kobrK = BigInt("993")
		const tokenInaN8ZKl8 = accounts[4]
		await contractWITEZj2.update.call({from: accounts[3]});
		await contractWITEZj2.initialize.call({from: accounts[4]});
		const amountOutqrPnkgS = await contractWITEZj2.quote.call(tokenInzwWt7N6, amountInVL9subs, {from: accounts[4]});
		const amountOutNOc9o2B = await contractWITEZj2.quote.call(tokenInaN8ZKl8, amountInu9kobrK, {from: accounts[1]});
	});

	it('test for UniswapV2OracleExample', async () => {
		const factoryJuW3zSc = accounts[0]
		const tokenAHrZfw54 = accounts[3]
		const tokenBJqt1L2J = "0x0000000000000000000000000000000000000001"
		const contractW6AuPPF = await UniswapV2OracleExample.new(factoryJuW3zSc, tokenAHrZfw54, tokenBJqt1L2J, {from: "0x0000000000000000000000000000000000000001"});
		const amountInCLxVnLk = BigInt("293")
		const tokenInqPNNTqr = "0x0000000000000000000000000000000000000001"
		await contractW6AuPPF.initialize.call({from: accounts[1]});
		const amountOutMy6kiqY = await contractW6AuPPF.quote.call(tokenInqPNNTqr, amountInCLxVnLk, {from: accounts[0]});
		await contractW6AuPPF.initialize.call({from: accounts[2]});
		await contractW6AuPPF.initialize.call({from: accounts[5]});
	});
})