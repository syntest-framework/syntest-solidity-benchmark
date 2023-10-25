const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameNcfraF7 = "iOe2io9uVUPElHSYBhD3thx7CDK9SBLbtosSHZgXYEKi4pyVRDPAXD28cH8nloNGabErFskdMnRgIpyFWG7m"
		const symbolfZ33Zud = "EgRK4RvxG3let6S1maCmbqu1vnBEt6Ji8Z7K07seeEkEL"
		const contractRyeVJSl = await ERC721Metadata.new(nameNcfraF7, symbolfZ33Zud, {from: accounts[4]});
		const nullc8KpJVm = await contractRyeVJSl.symbol.call({from: accounts[0]});
		const nullfns9LiF = await contractRyeVJSl.name.call({from: accounts[3]});
	});
})