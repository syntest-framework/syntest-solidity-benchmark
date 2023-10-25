const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractqpU3Nck = await IERC721.new({from: accounts[4]});
		const tokenIdf3fRRu1 = BigInt("1957")
		const toh03D7fo = accounts[5]
		const fromNLF8dgE = accounts[2]
		const operatorOipb10O = accounts[3]
		const ownerSV9LRZ7 = accounts[2]
		const tokenIdPNL7G1Z = BigInt("920")
		const operatorD3WCfb = accounts[2]
		const ownerzLWWEQ8 = accounts[3]
		const operatorFKM12yY = accounts[4]
		const ownerCAhkLm1 = "0x0000000000000000000000000000000000000001"
		await contractqpU3Nck.transferFrom.call(fromNLF8dgE, toh03D7fo, tokenIdf3fRRu1, {from: accounts[0]});
		const nullOVWG6yL = await contractqpU3Nck.isApprovedForAll.call(ownerSV9LRZ7, operatorOipb10O, {from: "0x0000000000000000000000000000000000000001"});
		const operatorbXUyYO = await contractqpU3Nck.getApproved.call(tokenIdPNL7G1Z, {from: accounts[3]});
		const nullUiTGZfY = await contractqpU3Nck.isApprovedForAll.call(ownerzLWWEQ8, operatorD3WCfb, {from: accounts[1]});
		const nulllDV2ts6 = await contractqpU3Nck.isApprovedForAll.call(ownerCAhkLm1, operatorFKM12yY, {from: accounts[2]});
	});
})