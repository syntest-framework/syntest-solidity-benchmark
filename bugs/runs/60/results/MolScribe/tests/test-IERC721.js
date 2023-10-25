const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractwCYO3fx = await IERC721.new({from: accounts[4]});
		const operatorbY6VI1S = accounts[4]
		const ownerAG8l8fF = accounts[4]
		const tokenIdYLBkU5e = BigInt("772")
		const tokenIdmUCy9a1 = BigInt("313")
		const tovqV9TWR = accounts[0]
		const fromTBhjG1J = accounts[0]
		const tokenIdEYpTtDq = BigInt("990")
		const nullo2tJ3I = await contractwCYO3fx.isApprovedForAll.call(ownerAG8l8fF, operatorbY6VI1S, {from: accounts[1]});
		const ownerThNREvJ = await contractwCYO3fx.ownerOf.call(tokenIdYLBkU5e, {from: accounts[2]});
		await contractwCYO3fx.transferFrom.call(fromTBhjG1J, tovqV9TWR, tokenIdmUCy9a1, {from: accounts[3]});
		const ownermoD5xgl = await contractwCYO3fx.ownerOf.call(tokenIdEYpTtDq, {from: accounts[3]});
	});
})