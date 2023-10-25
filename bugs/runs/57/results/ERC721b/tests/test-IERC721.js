const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractwrFPCJc = await IERC721.new({from: accounts[4]});
		const tokenIdcM4rf0 = BigInt("1008")
		const tokenIdfujLBri = BigInt("1589")
		const toJCUis3W = accounts[3]
		const fromFNMITxe = accounts[2]
		const tokenIdeBcpvru = BigInt("33")
		const tokenIdbpIym6L = BigInt("1844")
		const ownere7iHH3u = await contractwrFPCJc.ownerOf.call(tokenIdcM4rf0, {from: accounts[1]});
		await contractwrFPCJc.transferFrom.call(fromFNMITxe, toJCUis3W, tokenIdfujLBri, {from: accounts[3]});
		const owner93xZJN = await contractwrFPCJc.ownerOf.call(tokenIdeBcpvru, {from: accounts[4]});
		const operatorYOUbDef = await contractwrFPCJc.getApproved.call(tokenIdbpIym6L, {from: "0x0000000000000000000000000000000000000001"});
	});
})