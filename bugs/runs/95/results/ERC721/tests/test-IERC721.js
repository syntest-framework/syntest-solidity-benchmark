const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractdrdWXJc = await IERC721.new({from: accounts[4]});
		const tokenIdGTdJheb = BigInt("1329")
		const toAwZ3IU9 = accounts[1]
		const tokenIdXMRvVF = BigInt("1579")
		const tokenIdHwCXteA = BigInt("1013")
		const tolKyEqO2 = accounts[1]
		const tokenIdeMlTjoA = BigInt("688")
		await contractdrdWXJc.approve.call(toAwZ3IU9, tokenIdGTdJheb, {from: accounts[4]});
		const operatorClvI7Nl = await contractdrdWXJc.getApproved.call(tokenIdXMRvVF, {from: "0x0000000000000000000000000000000000000001"});
		await contractdrdWXJc.approve.call(tolKyEqO2, tokenIdHwCXteA, {from: accounts[2]});
		const operatorpdWQqii = await contractdrdWXJc.getApproved.call(tokenIdeMlTjoA, {from: accounts[0]});
	});
})