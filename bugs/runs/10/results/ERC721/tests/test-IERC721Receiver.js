const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractkUFZtiq = await IERC721Receiver.new({from: accounts[3]});
		const datan7KoGZ2 = "0x1512171a1d1502"
		const tokenIdFskAt6d = BigInt("781")
		const fromAoia1D4 = accounts[0]
		const operatorGoLco4p = accounts[0]
		const datamZvk0Wq = "0x1e140d0e"
		const tokenIdotCNRRG = BigInt("1011")
		const fromxAq1Xfy = accounts[1]
		const operatorTHv80dN = accounts[3]
		const data6OMqqU = "0x0f000c131e1f181e170f04101d1304061c101707"
		const tokenIdRaqeE5E = BigInt("348")
		const fromzYBdo0N = accounts[5]
		const operatorjzWM39J = accounts[0]
		const dataqq0soj = "0x0e1708120c12100e120c06030213"
		const tokenIdRBCKlQ = BigInt("1225")
		const fromJQFDr6u = accounts[5]
		const operatorbhVPObp = accounts[1]
		const nullN6YhM0i = await contractkUFZtiq.onERC721Received.call(operatorGoLco4p, fromAoia1D4, tokenIdFskAt6d, datan7KoGZ2, {from: accounts[0]});
		const nullzevA5dV = await contractkUFZtiq.onERC721Received.call(operatorTHv80dN, fromxAq1Xfy, tokenIdotCNRRG, datamZvk0Wq, {from: accounts[0]});
		const null2wQ768 = await contractkUFZtiq.onERC721Received.call(operatorjzWM39J, fromzYBdo0N, tokenIdRaqeE5E, data6OMqqU, {from: accounts[2]});
		const nullwK5JwGO = await contractkUFZtiq.onERC721Received.call(operatorbhVPObp, fromJQFDr6u, tokenIdRBCKlQ, dataqq0soj, {from: accounts[1]});
	});
})