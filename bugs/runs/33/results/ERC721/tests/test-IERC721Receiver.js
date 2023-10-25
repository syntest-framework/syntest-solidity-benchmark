const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractXxv3PJq = await IERC721Receiver.new({from: accounts[3]});
		const datan6hhYY = "0x02011d0f04100a"
		const tokenIdZ0AGme = BigInt("1790")
		const fromunZBxPH = accounts[4]
		const operatorYYVdfuu = accounts[1]
		const datayZSkKpx = "0x021800181019100d17020d04131f010b03180415141f0f1a0a121b00"
		const tokenIdglPJGPP = BigInt("1852")
		const fromWhBlB9z = accounts[1]
		const operatorpVetQT7 = accounts[4]
		const dataRTOQavS = "0x1b12060d15130a1c"
		const tokenIdhCeyrae = BigInt("2025")
		const fromLTr5OFq = accounts[1]
		const operatorgoinA8h = accounts[2]
		const nullj9Asn4W = await contractXxv3PJq.onERC721Received.call(operatorYYVdfuu, fromunZBxPH, tokenIdZ0AGme, datan6hhYY, {from: accounts[4]});
		const nullZO9zW5q = await contractXxv3PJq.onERC721Received.call(operatorpVetQT7, fromWhBlB9z, tokenIdglPJGPP, datayZSkKpx, {from: accounts[5]});
		const nullSyaKuDh = await contractXxv3PJq.onERC721Received.call(operatorgoinA8h, fromLTr5OFq, tokenIdhCeyrae, dataRTOQavS, {from: accounts[1]});
	});
})