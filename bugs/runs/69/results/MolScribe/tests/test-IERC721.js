const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractnkgTwmM = await IERC721.new({from: accounts[5]});
		const tokenIdfG5OTVG = BigInt("1679")
		const toc4NE66j = accounts[1]
		const fromdRoh5Yq = accounts[4]
		const tokenIdblCvr78 = BigInt("1581")
		const toQAnoGA9 = accounts[4]
		const fromaf8iG7O = accounts[0]
		const tokenIdyV109gX = BigInt("773")
		const tokenIdJK4EMF2 = BigInt("1071")
		const tokenIdvjelYEu = BigInt("702")
		await contractnkgTwmM.transferFrom.call(fromdRoh5Yq, toc4NE66j, tokenIdfG5OTVG, {from: accounts[2]});
		await contractnkgTwmM.safeTransferFrom.call(fromaf8iG7O, toQAnoGA9, tokenIdblCvr78, {from: accounts[5]});
		const ownerF3e8Hf = await contractnkgTwmM.ownerOf.call(tokenIdyV109gX, {from: accounts[1]});
		const ownerDBGCdfb = await contractnkgTwmM.ownerOf.call(tokenIdJK4EMF2, {from: accounts[2]});
		const operatorcCpjauB = await contractnkgTwmM.getApproved.call(tokenIdvjelYEu, {from: accounts[3]});
	});
})