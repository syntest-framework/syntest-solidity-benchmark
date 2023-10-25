const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractSKxGe7X = await IERC721Receiver.new({from: accounts[5]});
		const datayVXxMC = "0x0d0d070302121211090a0b1b1f040a0a05180b03120a20131814"
		const tokenIdYZSLRcX = BigInt("288")
		const fromDJbYaER = accounts[4]
		const operatoryKS3Dcp = accounts[0]
		const dataCzVT6ES = "0x1a1b1a0d0a1c1807071b1107091e181b1d1d1d0d1c09160a1e0c0b1d0e04"
		const tokenIdWKzB9ry = BigInt("76")
		const fromqXZj6s0 = "0x0000000000000000000000000000000000000001"
		const operatorxNWeWnw = accounts[3]
		const datakKeHh0W = "0x1e1c1a201901161c1a131c1d17100c040114040e161714"
		const tokenIdGT32uWI = BigInt("1236")
		const fromoyjq28 = accounts[3]
		const operatorYKpc4l = accounts[1]
		const dataO06tRIU = "0x10050d0f1f11201c2009121c181f1e10161c1e10"
		const tokenIdORa5zsY = BigInt("1426")
		const fromHmcB11i = accounts[4]
		const operatorSZ4RlA = accounts[4]
		const dataV7eAjWT = "0x0e12141603161e0d0c1a0812141a10040c"
		const tokenIddMINKzu = BigInt("29")
		const fromTyeDRFG = accounts[4]
		const operatorwjWYdc = accounts[4]
		const dataW0gBJkl = "0x191b08050910050b150604080a11091714000f0701151d1f0b0d160f11"
		const tokenIdsUKdeSP = BigInt("975")
		const fromFAazDoU = accounts[2]
		const operatorwXGQuR = accounts[1]
		const nullP6rrL6 = await contractSKxGe7X.onERC721Received.call(operatoryKS3Dcp, fromDJbYaER, tokenIdYZSLRcX, datayVXxMC, {from: accounts[0]});
		const nullLlY2Zl6 = await contractSKxGe7X.onERC721Received.call(operatorxNWeWnw, fromqXZj6s0, tokenIdWKzB9ry, dataCzVT6ES, {from: accounts[2]});
		const nullopm8JcE = await contractSKxGe7X.onERC721Received.call(operatorYKpc4l, fromoyjq28, tokenIdGT32uWI, datakKeHh0W, {from: accounts[3]});
		const nullPK1D8dW = await contractSKxGe7X.onERC721Received.call(operatorSZ4RlA, fromHmcB11i, tokenIdORa5zsY, dataO06tRIU, {from: accounts[0]});
		const nullFDXKKY = await contractSKxGe7X.onERC721Received.call(operatorwjWYdc, fromTyeDRFG, tokenIddMINKzu, dataV7eAjWT, {from: accounts[1]});
		const nullOeQ4SLf = await contractSKxGe7X.onERC721Received.call(operatorwXGQuR, fromFAazDoU, tokenIdsUKdeSP, dataW0gBJkl, {from: accounts[1]});
	});
})