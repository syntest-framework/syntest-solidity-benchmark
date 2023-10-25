const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractbNJSxJi = await IERC721.new({from: accounts[4]});
		const owner5DP5nT = accounts[0]
		const tokenIdVsYVzHS = BigInt("558")
		const tokenIdWpcHwm = BigInt("1732")
		const toPBZqXT = accounts[3]
		const balancednzCQBp = await contractbNJSxJi.balanceOf.call(owner5DP5nT, {from: accounts[1]});
		const ownerYJo58L = await contractbNJSxJi.ownerOf.call(tokenIdVsYVzHS, {from: accounts[4]});
		await contractbNJSxJi.approve.call(toPBZqXT, tokenIdWpcHwm, {from: accounts[4]});
	});
})