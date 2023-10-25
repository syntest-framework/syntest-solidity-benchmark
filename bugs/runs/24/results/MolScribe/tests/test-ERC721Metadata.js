const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameFvARARN = "O9RyanH0Q7CxzouksC9Xs4jF7qKHmexb4RTVEmCJGmpb0DnjxxJEhroNsPXjk9UDWlVtIkA1aWD8IqE1peKoj5czLUn4G9167c"
		const symbolFPudx5 = "pvwc0YHRo"
		const contractOnk03Mn = await ERC721Metadata.new(nameFvARARN, symbolFPudx5, {from: "0x0000000000000000000000000000000000000001"});
		const nulljH7iTMH = await contractOnk03Mn.name.call({from: accounts[1]});
		const nullzzC9Zv = await contractOnk03Mn.symbol.call({from: accounts[3]});
		const nullRxxf0eA = await contractOnk03Mn.symbol.call({from: accounts[4]});
		const nullDEoJLQx = await contractOnk03Mn.name.call({from: accounts[4]});
	});
})