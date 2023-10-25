const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractlxZjhCL = await IERC20.new({from: accounts[4]});
		const valuev3SDJhO = BigInt("716")
		const tooo1XqHC = accounts[1]
		const valueJodgkiY = BigInt("682")
		const spenderDeFZo5 = accounts[0]
		const whoj1hAuYk = accounts[0]
		const valuev2YQQme = BigInt("1245")
		const toEbSw1Q6 = accounts[2]
		const fromEAqlHmp = accounts[2]
		const spenderA9ODCbs = accounts[1]
		const owneriqJeW1 = accounts[1]
		const nullPoQFj6r = await contractlxZjhCL.mint.call(tooo1XqHC, valuev3SDJhO, {from: accounts[3]});
		const nullPtU5QWm = await contractlxZjhCL.totalSupply.call({from: accounts[4]});
		const nulln83qoK = await contractlxZjhCL.approve.call(spenderDeFZo5, valueJodgkiY, {from: accounts[0]});
		const null9GvRVe = await contractlxZjhCL.balanceOf.call(whoj1hAuYk, {from: accounts[0]});
		const nullmerzOS = await contractlxZjhCL.transferFrom.call(fromEAqlHmp, toEbSw1Q6, valuev2YQQme, {from: accounts[5]});
		const nullH6cEd7 = await contractlxZjhCL.allowance.call(owneriqJeW1, spenderA9ODCbs, {from: accounts[2]});
	});
})