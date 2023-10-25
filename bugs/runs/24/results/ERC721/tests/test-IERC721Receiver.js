const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractnr6X5mv = await IERC721Receiver.new({from: accounts[2]});
		const datakkgJsZY = "0x181b13160a200f011a14"
		const tokenIdizOEzrO = BigInt("1894")
		const from2Dbgzg = accounts[3]
		const operatorBYYCKJL = accounts[1]
		const dataJajPqg2 = "0x101e10190c0a1e0f1e081b05070a20130f030c19181a14060118"
		const tokenIdIHInGFf = BigInt("1535")
		const fromXeOejcS = accounts[2]
		const operatorIhNgzC4 = accounts[1]
		const datab359mAs = "0x0d11010d060f020516151a0e020b050c0a1b191e0d0f1f041908"
		const tokenIdNIIwsVN = BigInt("1345")
		const fromOxriSxr = accounts[4]
		const operatorIc9xXFi = accounts[0]
		const nullydR7V9V = await contractnr6X5mv.onERC721Received.call(operatorBYYCKJL, from2Dbgzg, tokenIdizOEzrO, datakkgJsZY, {from: accounts[2]});
		const nullcfMhQQT = await contractnr6X5mv.onERC721Received.call(operatorIhNgzC4, fromXeOejcS, tokenIdIHInGFf, dataJajPqg2, {from: accounts[3]});
		const nullRPjXHKI = await contractnr6X5mv.onERC721Received.call(operatorIc9xXFi, fromOxriSxr, tokenIdNIIwsVN, datab359mAs, {from: accounts[2]});
	});
})