const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractiA4uY5a = await IERC165.new({from: accounts[0]});
		const interfaceIdXlzS3uN = "0x07061e09"
		const interfaceIdLFWAcV = "0x10131e01"
		const interfaceIdfRbe3c = "0x0e201f17"
		const interfaceIdOqFKKut = "0x0a13151e"
		const interfaceIdgKp02Y = "0x1d1d1f0a"
		const interfaceIdvgXqCOC = "0x0f1a011c"
		const nullzH7CJuK = await contractiA4uY5a.supportsInterface.call(interfaceIdXlzS3uN, {from: accounts[1]});
		const nulldjz8eMA = await contractiA4uY5a.supportsInterface.call(interfaceIdLFWAcV, {from: accounts[1]});
		const nulliLSE8I7 = await contractiA4uY5a.supportsInterface.call(interfaceIdfRbe3c, {from: accounts[0]});
		const nullNZkhWQ1 = await contractiA4uY5a.supportsInterface.call(interfaceIdOqFKKut, {from: accounts[1]});
		const nullaRrf7w6 = await contractiA4uY5a.supportsInterface.call(interfaceIdgKp02Y, {from: accounts[1]});
		const nullzmC7SEW = await contractiA4uY5a.supportsInterface.call(interfaceIdvgXqCOC, {from: accounts[4]});
	});
})