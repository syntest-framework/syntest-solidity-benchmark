const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contracty82n8yd = await ERC165.new({from: accounts[2]});
		const interfaceIdptmnuGF = "0x1e20141c"
		const interfaceIdKophn8M = "0x0f0e1600"
		const interfaceIdbnd50H = "0x161d0210"
		const interfaceIdDnWJdTs = "0x0c040410"
		const interfaceIdeEMM0bL = "0x070f1016"
		const interfaceId7YH0sa = "0x10090111"
		const nullYs50nB3 = await contracty82n8yd.supportsInterface.call(interfaceIdptmnuGF, {from: accounts[0]});
		const nullqawhYn = await contracty82n8yd.supportsInterface.call(interfaceIdKophn8M, {from: accounts[0]});
		const nullaXh3JDd = await contracty82n8yd.supportsInterface.call(interfaceIdbnd50H, {from: accounts[5]});
		const nullofphx48 = await contracty82n8yd.supportsInterface.call(interfaceIdDnWJdTs, {from: accounts[2]});
		const nullOeGhr07 = await contracty82n8yd.supportsInterface.call(interfaceIdeEMM0bL, {from: accounts[4]});
		const nulldi1xfek = await contracty82n8yd.supportsInterface.call(interfaceId7YH0sa, {from: accounts[4]});
	});
})