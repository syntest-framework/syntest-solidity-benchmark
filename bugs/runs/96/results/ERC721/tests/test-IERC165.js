const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractU11vPH8 = await IERC165.new({from: accounts[4]});
		const interfaceIdDGwtPAb = "0x02140c0c"
		const interfaceIdJMG5PY5 = "0x0e1d0f02"
		const interfaceIdLcE2xU8 = "0x1e061705"
		const interfaceIdpBKqNLh = "0x160c0a04"
		const interfaceIdTPO0qUS = "0x1d0a191b"
		const interfaceIdNpaz3AH = "0x171c2004"
		const nulleBndpiW = await contractU11vPH8.supportsInterface.call(interfaceIdDGwtPAb, {from: accounts[5]});
		const nullVPDRocu = await contractU11vPH8.supportsInterface.call(interfaceIdJMG5PY5, {from: accounts[4]});
		const nullYq4Yems = await contractU11vPH8.supportsInterface.call(interfaceIdLcE2xU8, {from: accounts[3]});
		const nullUCztNui = await contractU11vPH8.supportsInterface.call(interfaceIdpBKqNLh, {from: accounts[3]});
		const nullPZkeso = await contractU11vPH8.supportsInterface.call(interfaceIdTPO0qUS, {from: accounts[3]});
		const nullSDncotQ = await contractU11vPH8.supportsInterface.call(interfaceIdNpaz3AH, {from: accounts[5]});
	});
})