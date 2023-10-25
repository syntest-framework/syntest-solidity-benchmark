const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractzlosXe9 = await IERC165.new({from: accounts[0]});
		const interfaceIdMKqIe3Y = "0x1a18111b"
		const interfaceIdykBX2bH = "0x1c031608"
		const interfaceIdldWQvnA = "0x1d030c0e"
		const interfaceIdcsMrR9 = "0x0e061b05"
		const interfaceIdEu1tLQY = "0x001b1003"
		const interfaceIdXawcZSm = "0x011d0516"
		const nullc4AoMH8 = await contractzlosXe9.supportsInterface.call(interfaceIdMKqIe3Y, {from: accounts[4]});
		const nullSfhgJxz = await contractzlosXe9.supportsInterface.call(interfaceIdykBX2bH, {from: accounts[2]});
		const nulle32oIId = await contractzlosXe9.supportsInterface.call(interfaceIdldWQvnA, {from: accounts[0]});
		const nullNI35n39 = await contractzlosXe9.supportsInterface.call(interfaceIdcsMrR9, {from: accounts[0]});
		const nullkWbWyu = await contractzlosXe9.supportsInterface.call(interfaceIdEu1tLQY, {from: accounts[0]});
		const nullbCZOdxx = await contractzlosXe9.supportsInterface.call(interfaceIdXawcZSm, {from: accounts[1]});
	});
})