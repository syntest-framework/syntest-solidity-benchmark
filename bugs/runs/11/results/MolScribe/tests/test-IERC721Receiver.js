const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractULyPFU6 = await IERC721Receiver.new({from: accounts[2]});
		const dataRqyurfp = "0x150a"
		const tokenIdqSjIOH = BigInt("224")
		const fromWVDWWRy = accounts[4]
		const operatorbOfpCjM = accounts[3]
		const databuHmHrp = "0x0b05120c0700180413121c01070a17150a18070a0004111c"
		const tokenIdeyoeTZr = BigInt("90")
		const fromWmbWXwS = accounts[2]
		const operatoruWxCw3q = accounts[3]
		const dataFInR0X = "0x051008110f1c0a200403191c0012190e091517061b1a1b09020d1c1d1911"
		const tokenIdYLUP7ov = BigInt("412")
		const fromGmx5gRg = "0x0000000000000000000000000000000000000001"
		const operatorQtEKc3A = accounts[1]
		const dataZP4un4p = "0x1f1e1b1b0a0a0c0f1d0620070a1c1508"
		const tokenIdUPxn8HG = BigInt("1839")
		const fromphcn91J = accounts[5]
		const operatorGXc8nER = accounts[3]
		const dataAPriOUn = "0x040e0b15040b060e1d0e0f0a080a0c0c140d1607061a1f1a1016"
		const tokenIdB5U7zx = BigInt("1577")
		const fromneviDQ = accounts[0]
		const operatorcCscyJ5 = accounts[4]
		const dataXX6m0DG = "0x0a13110c13140e1e051a1508200c04130a1a130210151903141e"
		const tokenIdip3owp = BigInt("153")
		const fromMydiR6a = accounts[5]
		const operatorwTeWTUt = accounts[2]
		const nullBmRoINL = await contractULyPFU6.onERC721Received.call(operatorbOfpCjM, fromWVDWWRy, tokenIdqSjIOH, dataRqyurfp, {from: accounts[4]});
		const nullDxDvAN = await contractULyPFU6.onERC721Received.call(operatoruWxCw3q, fromWmbWXwS, tokenIdeyoeTZr, databuHmHrp, {from: accounts[0]});
		const nulltaCC2T = await contractULyPFU6.onERC721Received.call(operatorQtEKc3A, fromGmx5gRg, tokenIdYLUP7ov, dataFInR0X, {from: accounts[3]});
		const nullKIArQV4 = await contractULyPFU6.onERC721Received.call(operatorGXc8nER, fromphcn91J, tokenIdUPxn8HG, dataZP4un4p, {from: accounts[0]});
		const nullztRLqH7 = await contractULyPFU6.onERC721Received.call(operatorcCscyJ5, fromneviDQ, tokenIdB5U7zx, dataAPriOUn, {from: accounts[3]});
		const nullZMPWlo3 = await contractULyPFU6.onERC721Received.call(operatorwTeWTUt, fromMydiR6a, tokenIdip3owp, dataXX6m0DG, {from: accounts[2]});
	});
})