const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractLWcF4sf = await IERC721.new({from: accounts[1]});
		const tokenIdk5dTSOR = BigInt("203")
		const tokenIdjKsDcn = BigInt("1752")
		const ownercNtuoqi = accounts[1]
		const operatortnLXtIM = await contractLWcF4sf.getApproved.call(tokenIdk5dTSOR, {from: accounts[3]});
		const ownerh7Unr6G = await contractLWcF4sf.ownerOf.call(tokenIdjKsDcn, {from: accounts[5]});
		const balanceLql1OQr = await contractLWcF4sf.balanceOf.call(ownercNtuoqi, {from: accounts[0]});
	});
})