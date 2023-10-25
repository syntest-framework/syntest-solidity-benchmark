const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractnhG4ZTX = await IERC721.new({from: accounts[3]});
		const ownerZ6Eckdi = accounts[5]
		const tokenIdl3XZgCE = BigInt("1255")
		const operatorHrut59 = accounts[2]
		const ownerpYkFvhH = accounts[5]
		const tokenIdwfTPOeR = BigInt("1877")
		const to33G05p = accounts[4]
		const fromflv4cIh = accounts[1]
		const balanceheI5M8M = await contractnhG4ZTX.balanceOf.call(ownerZ6Eckdi, {from: accounts[3]});
		const ownerk9c32sK = await contractnhG4ZTX.ownerOf.call(tokenIdl3XZgCE, {from: accounts[0]});
		const nullGvCAnfy = await contractnhG4ZTX.isApprovedForAll.call(ownerpYkFvhH, operatorHrut59, {from: accounts[5]});
		await contractnhG4ZTX.transferFrom.call(fromflv4cIh, to33G05p, tokenIdwfTPOeR, {from: accounts[0]});
	});
})