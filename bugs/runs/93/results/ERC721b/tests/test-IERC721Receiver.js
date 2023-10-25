const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contract0JIiF2 = await IERC721Receiver.new({from: accounts[3]});
		const data7Tr8us = "0x1e1c0b1518050817171e1903"
		const tokenIdwWJCs9G = BigInt("1201")
		const fromdUCwSuc = accounts[1]
		const operatoroegh6uI = accounts[1]
		const dataTcYBwR9 = "0x06091d171405"
		const tokenIdS6vnq9G = BigInt("2018")
		const fromscKBVAS = accounts[3]
		const operatorMhwV30 = accounts[2]
		const datagJMPVI = "0x120f011616101d14170d011b180d02"
		const tokenIdkSCEBxu = BigInt("1104")
		const fromSblku9p = accounts[2]
		const operatorsz8gYU2 = accounts[2]
		const dataCUwsqqw = "0x1e0a0c0a1b110117070d081b03"
		const tokenIdivN1Crk = BigInt("1325")
		const fromwZSBRVK = "0x0000000000000000000000000000000000000001"
		const operatorM0PFP0 = accounts[1]
		const dataexuAlU = "0x1e030c0211"
		const tokenIdwl3oko = BigInt("1144")
		const fromdK0KS06 = accounts[1]
		const operatorGfpcdim = accounts[2]
		const nulllijSqa9 = await contract0JIiF2.onERC721Received.call(operatoroegh6uI, fromdUCwSuc, tokenIdwWJCs9G, data7Tr8us, {from: accounts[1]});
		const nullXehe298 = await contract0JIiF2.onERC721Received.call(operatorMhwV30, fromscKBVAS, tokenIdS6vnq9G, dataTcYBwR9, {from: accounts[2]});
		const nullLL73cGv = await contract0JIiF2.onERC721Received.call(operatorsz8gYU2, fromSblku9p, tokenIdkSCEBxu, datagJMPVI, {from: accounts[4]});
		const nullboCjZ5b = await contract0JIiF2.onERC721Received.call(operatorM0PFP0, fromwZSBRVK, tokenIdivN1Crk, dataCUwsqqw, {from: accounts[1]});
		const nullClrd2M3 = await contract0JIiF2.onERC721Received.call(operatorGfpcdim, fromdK0KS06, tokenIdwl3oko, dataexuAlU, {from: accounts[2]});
	});
})