const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameGyVsdM1 = "N1FW65GCVCfXHxisXPorF6dJQ5V5H7nJGci9tejMILgfw"
		const symbolVjEo1z = "EvZ9to9BnbQwRsPU6kwtk"
		const contractzIhtT23 = await ERC721Metadata.new(nameGyVsdM1, symbolVjEo1z, {from: accounts[4]});
		const nullBr88q4O = await contractzIhtT23.name.call({from: accounts[2]});
		const nulll6alXG0 = await contractzIhtT23.name.call({from: "0x0000000000000000000000000000000000000001"});
	});
})