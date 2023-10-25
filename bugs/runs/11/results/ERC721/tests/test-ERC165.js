const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractevuaWDU = await ERC165.new({from: accounts[2]});
		const interfaceIdRkOYbje = "0x121c1d1b"
		const interfaceIdHAHbCAh = "0x0605180f"
		const interfaceIdKDgO6b9 = "0x0c1a070f"
		const interfaceIdVa0UR7V = "0x14190f05"
		const interfaceIdZuR1yph = "0x0a10021a"
		const interfaceIdORPguuy = "0x0a1d1613"
		const nulln79akhw = await contractevuaWDU.supportsInterface.call(interfaceIdRkOYbje, {from: "0x0000000000000000000000000000000000000001"});
		const nullLI3mqf = await contractevuaWDU.supportsInterface.call(interfaceIdHAHbCAh, {from: accounts[2]});
		const nullCuDWU5m = await contractevuaWDU.supportsInterface.call(interfaceIdKDgO6b9, {from: accounts[1]});
		const nullqEAtsAu = await contractevuaWDU.supportsInterface.call(interfaceIdVa0UR7V, {from: accounts[2]});
		const nullnegzQtP = await contractevuaWDU.supportsInterface.call(interfaceIdZuR1yph, {from: accounts[1]});
		const nulle0o2Pia = await contractevuaWDU.supportsInterface.call(interfaceIdORPguuy, {from: accounts[4]});
	});
})