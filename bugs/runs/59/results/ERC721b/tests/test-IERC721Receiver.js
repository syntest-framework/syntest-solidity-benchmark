const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractMTqWHWj = await IERC721Receiver.new({from: accounts[4]});
		const dataDNMIbBF = "0x0f090f171206130e1f130d"
		const tokenIdoeqIQ7A = BigInt("1442")
		const fromzJcWyGw = accounts[5]
		const operatorRr7VJuI = accounts[4]
		const data3jtHju = "0x0f031f"
		const tokenId5KW2Nh = BigInt("309")
		const fromIyicFTv = accounts[2]
		const operatorJXrBzF = "0x0000000000000000000000000000000000000001"
		const datab8DynJd = "0x0505100403061d0d061f1c1a050d201619041f16101104140509"
		const tokenIdvlWtiPN = BigInt("1426")
		const fromIBLOYZ9 = accounts[4]
		const operatorb4cE1N2 = accounts[3]
		const dataOThBnYL = "0x0d1f1f0f071b1e0f18110d0e0f1805010a0f0c"
		const tokenIdorJuPZ2 = BigInt("1985")
		const fromQFL9FGO = accounts[4]
		const operatormKEaOtg = "0x0000000000000000000000000000000000000001"
		const dataeGl3rD = "0x1c03130711161a160b1809100c0d1b0e1f0915"
		const tokenIdILL02mS = BigInt("1271")
		const fromY2JTvZc = accounts[4]
		const operatorf00cQVN = accounts[1]
		const dataZw0OqH = "0x001804121b181c001c1615110f0d15"
		const tokenIdaMDXn7Z = BigInt("109")
		const fromuZH0m1c = accounts[5]
		const operatorI1TRIRZ = accounts[1]
		const nullK5tdGYx = await contractMTqWHWj.onERC721Received.call(operatorRr7VJuI, fromzJcWyGw, tokenIdoeqIQ7A, dataDNMIbBF, {from: "0x0000000000000000000000000000000000000001"});
		const nullY7Hv5kE = await contractMTqWHWj.onERC721Received.call(operatorJXrBzF, fromIyicFTv, tokenId5KW2Nh, data3jtHju, {from: accounts[5]});
		const null48HV8f = await contractMTqWHWj.onERC721Received.call(operatorb4cE1N2, fromIBLOYZ9, tokenIdvlWtiPN, datab8DynJd, {from: accounts[3]});
		const nullZaxDes = await contractMTqWHWj.onERC721Received.call(operatormKEaOtg, fromQFL9FGO, tokenIdorJuPZ2, dataOThBnYL, {from: accounts[5]});
		const nullVKw1y0u = await contractMTqWHWj.onERC721Received.call(operatorf00cQVN, fromY2JTvZc, tokenIdILL02mS, dataeGl3rD, {from: accounts[3]});
		const nullBYxralz = await contractMTqWHWj.onERC721Received.call(operatorI1TRIRZ, fromuZH0m1c, tokenIdaMDXn7Z, dataZw0OqH, {from: accounts[3]});
	});
})