const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractQ1JVcU1 = await IERC721Receiver.new({from: accounts[5]});
		const datazACnOVt = "0x0b080a080617"
		const tokenIdrWzpjlj = BigInt("1739")
		const fromTyDaTIZ = accounts[4]
		const operatorV5qDZjd = accounts[2]
		const dataZA1V1eH = "0x071e09021a1e120516181e12040a15051d1903"
		const tokenId2c97Ya = BigInt("369")
		const fromSt51spD = "0x0000000000000000000000000000000000000001"
		const operatorX9zAnsD = accounts[3]
		const dataYmhbcRZ = "0x131f0a040c20120a0d1707151f1009061b"
		const tokenIdPSES4WV = BigInt("1215")
		const fromiskaxkb = accounts[3]
		const operatorfKz0bmN = accounts[2]
		const dataDSnAdnm = "0x1c16161b10040e0817071a08060f1e041e09110b151011120d0a13"
		const tokenIdKa6YUdG = BigInt("1672")
		const fromgjEOh89 = accounts[0]
		const operatorDHgR58 = accounts[2]
		const datau5PKvjd = "0x020a101707091f111010190b030314051e14091d0c1e071a"
		const tokenIdCl0iJMI = BigInt("1961")
		const fromHls0dDP = accounts[4]
		const operatorRdNIle8 = accounts[3]
		const nullvdBQFd = await contractQ1JVcU1.onERC721Received.call(operatorV5qDZjd, fromTyDaTIZ, tokenIdrWzpjlj, datazACnOVt, {from: accounts[2]});
		const nullO9hpnxD = await contractQ1JVcU1.onERC721Received.call(operatorX9zAnsD, fromSt51spD, tokenId2c97Ya, dataZA1V1eH, {from: accounts[0]});
		const nulljbEcy2F = await contractQ1JVcU1.onERC721Received.call(operatorfKz0bmN, fromiskaxkb, tokenIdPSES4WV, dataYmhbcRZ, {from: accounts[1]});
		const null5KyfPB = await contractQ1JVcU1.onERC721Received.call(operatorDHgR58, fromgjEOh89, tokenIdKa6YUdG, dataDSnAdnm, {from: "0x0000000000000000000000000000000000000001"});
		const nulllwPEyzr = await contractQ1JVcU1.onERC721Received.call(operatorRdNIle8, fromHls0dDP, tokenIdCl0iJMI, datau5PKvjd, {from: accounts[3]});
	});
})