const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractIUxGgG9 = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueyMNU8Qh = BigInt("1329")
		const spendertiCrCAU = "0x0000000000000000000000000000000000000001"
		const valueaTKzVZu = BigInt("1516")
		const toGc11m8i = accounts[2]
		const fromghbPK7A = accounts[3]
		const spenderK86qVHI = accounts[2]
		const ownerdPYtN9 = accounts[1]
		const whoYtEn14E = accounts[0]
		const nullHiCIv5g = await contractIUxGgG9.approve.call(spendertiCrCAU, valueyMNU8Qh, {from: accounts[5]});
		const nullO1BTLjZ = await contractIUxGgG9.transferFrom.call(fromghbPK7A, toGc11m8i, valueaTKzVZu, {from: accounts[1]});
		const nullw62Qnlo = await contractIUxGgG9.allowance.call(ownerdPYtN9, spenderK86qVHI, {from: accounts[3]});
		const nullAIzPxu = await contractIUxGgG9.balanceOf.call(whoYtEn14E, {from: accounts[0]});
	});
})