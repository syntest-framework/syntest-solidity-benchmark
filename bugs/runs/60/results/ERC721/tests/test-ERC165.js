const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractbkvJLWA = await ERC165.new({from: accounts[4]});
		const interfaceIdPW26ZUP = "0x12011613"
		const interfaceIdgY9RMgW = "0x1f0d1c10"
		const interfaceIdxNttaU7 = "0x02041616"
		const interfaceIdRhKnPtF = "0x070e1519"
		const interfaceIdxrdIedc = "0x1e0a171f"
		const interfaceIdisAr7Ft = "0x1d18170e"
		const nullgDdlZJ = await contractbkvJLWA.supportsInterface.call(interfaceIdPW26ZUP, {from: accounts[1]});
		const nulljgZiuuW = await contractbkvJLWA.supportsInterface.call(interfaceIdgY9RMgW, {from: "0x0000000000000000000000000000000000000001"});
		const nullGhphl0h = await contractbkvJLWA.supportsInterface.call(interfaceIdxNttaU7, {from: "0x0000000000000000000000000000000000000001"});
		const nullRTlFQW1 = await contractbkvJLWA.supportsInterface.call(interfaceIdRhKnPtF, {from: accounts[2]});
		const nulljtG4gfk = await contractbkvJLWA.supportsInterface.call(interfaceIdxrdIedc, {from: accounts[4]});
		const nullZuWO8Fr = await contractbkvJLWA.supportsInterface.call(interfaceIdisAr7Ft, {from: accounts[2]});
	});
})