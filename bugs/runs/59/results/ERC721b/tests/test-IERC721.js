const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractUllxcPD = await IERC721.new({from: accounts[4]});
		const dataqxLfPyS = "0x1a16080f2017010405140c1e1c0d150b1e0a"
		const tokenIdHjC0qSN = BigInt("1472")
		const toFVL8h0z = accounts[1]
		const from7aZGz9 = accounts[0]
		const tokenIdo85vxd = BigInt("105")
		const toQlSmKU0 = accounts[3]
		const tokenIdL375GB5 = BigInt("532")
		const toBEPoCyy = accounts[0]
		const fromHFRRsHK = accounts[2]
		await contractUllxcPD.safeTransferFrom.call(from7aZGz9, toFVL8h0z, tokenIdHjC0qSN, dataqxLfPyS, {from: accounts[4]});
		await contractUllxcPD.approve.call(toQlSmKU0, tokenIdo85vxd, {from: accounts[3]});
		await contractUllxcPD.safeTransferFrom.call(fromHFRRsHK, toBEPoCyy, tokenIdL375GB5, {from: accounts[2]});
	});
})