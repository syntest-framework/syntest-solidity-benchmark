const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractxXBLrja = await IERC721.new({from: accounts[3]});
		const dataQKwAtEY = "0x1c121f011c0619081d"
		const tokenIdkCye76 = BigInt("1859")
		const toQzCsRy0 = accounts[4]
		const fromJXYPztj = accounts[3]
		const tokenIdDI6s1gp = BigInt("286")
		const tojtNiEsk = accounts[4]
		const fromBkPrz9J = accounts[2]
		const tokenIdR38xg4n = BigInt("1476")
		const tokenIdlHIkRUw = BigInt("632")
		const toHgPZI3y = accounts[4]
		await contractxXBLrja.safeTransferFrom.call(fromJXYPztj, toQzCsRy0, tokenIdkCye76, dataQKwAtEY, {from: accounts[2]});
		await contractxXBLrja.safeTransferFrom.call(fromBkPrz9J, tojtNiEsk, tokenIdDI6s1gp, {from: accounts[2]});
		const ownerZ4Q8z8k = await contractxXBLrja.ownerOf.call(tokenIdR38xg4n, {from: accounts[1]});
		await contractxXBLrja.approve.call(toHgPZI3y, tokenIdlHIkRUw, {from: accounts[3]});
	});
})