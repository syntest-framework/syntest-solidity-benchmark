const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractSDCkwy = await IERC721.new({from: accounts[4]});
		const tokenIdl1F4XO8 = BigInt("904")
		const ownerb99HpUr = accounts[2]
		const operatoryjlqdYz = accounts[3]
		const ownerXvfSS68 = accounts[3]
		const operatorJa84xDZ = await contractSDCkwy.getApproved.call(tokenIdl1F4XO8, {from: accounts[3]});
		const balanceF3GsCSh = await contractSDCkwy.balanceOf.call(ownerb99HpUr, {from: accounts[0]});
		const nulli0cgIr2 = await contractSDCkwy.isApprovedForAll.call(ownerXvfSS68, operatoryjlqdYz, {from: accounts[3]});
	});
})