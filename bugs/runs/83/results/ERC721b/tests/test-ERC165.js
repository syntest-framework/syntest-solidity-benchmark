const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractsUT9abZ = await ERC165.new({from: accounts[3]});
		const interfaceIdvgJjPE = "0x17070109"
		const interfaceIdHxOyXDE = "0x1f080717"
		const interfaceIdB2CaCqP = "0x0b110516"
		const nullwyMCUcJ = await contractsUT9abZ.supportsInterface.call(interfaceIdvgJjPE, {from: accounts[4]});
		const nullVlpCXLu = await contractsUT9abZ.supportsInterface.call(interfaceIdHxOyXDE, {from: accounts[5]});
		const nulljvbl9UL = await contractsUT9abZ.supportsInterface.call(interfaceIdB2CaCqP, {from: accounts[0]});
	});
})