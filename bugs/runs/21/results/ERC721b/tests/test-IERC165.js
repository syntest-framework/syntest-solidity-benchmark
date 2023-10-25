const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractx0bHHj = await IERC165.new({from: accounts[1]});
		const interfaceIdAEZYY5s = "0x14041807"
		const interfaceIdzMO7UqF = "0x0a090b13"
		const interfaceIdv8tsF4H = "0x1c011b15"
		const interfaceIdQtMQhha = "0x090b011f"
		const nullcdYDfgp = await contractx0bHHj.supportsInterface.call(interfaceIdAEZYY5s, {from: accounts[2]});
		const nullo6LPOTz = await contractx0bHHj.supportsInterface.call(interfaceIdzMO7UqF, {from: accounts[0]});
		const nullKu7DKV = await contractx0bHHj.supportsInterface.call(interfaceIdv8tsF4H, {from: accounts[4]});
		const nullshBTyxV = await contractx0bHHj.supportsInterface.call(interfaceIdQtMQhha, {from: accounts[3]});
	});
})