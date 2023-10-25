const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contract6PGCnG = await IERC721.new({from: accounts[2]});
		const tokenIdRsQvOfM = BigInt("1920")
		const tokenIdaAp7bbb = BigInt("917")
		const togKEgMFt = accounts[3]
		const tokenIdLYwDSRl = BigInt("899")
		const toohDx6P = accounts[2]
		const from7eZgbw = accounts[2]
		const ownerxb0wBYv = accounts[4]
		const operatorw3Jd8KG = await contract6PGCnG.getApproved.call(tokenIdRsQvOfM, {from: accounts[5]});
		await contract6PGCnG.approve.call(togKEgMFt, tokenIdaAp7bbb, {from: accounts[5]});
		await contract6PGCnG.transferFrom.call(from7eZgbw, toohDx6P, tokenIdLYwDSRl, {from: accounts[2]});
		const balancef6Ak30k = await contract6PGCnG.balanceOf.call(ownerxb0wBYv, {from: accounts[2]});
	});
})