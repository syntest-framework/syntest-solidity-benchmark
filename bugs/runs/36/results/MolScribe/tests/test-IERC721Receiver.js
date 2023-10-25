const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contract1MCxcd = await IERC721Receiver.new({from: accounts[0]});
		const data9S3Ust = "0x10181713130900061c050d0b010b1f00"
		const tokenIdxmLAwxm = BigInt("1315")
		const frompU41KAi = accounts[3]
		const operatorxA07wcx = accounts[0]
		const datarFHX77D = "0x15090e0f091c1a1a060b0b0c01050a1d131c"
		const tokenIdUpQZHK9 = BigInt("643")
		const fromciG20B = accounts[0]
		const operators8FhFF5 = "0x0000000000000000000000000000000000000001"
		const datafM8URDE = "0x0f18140d06041818120b050e0d070f101c1b12110713160a15160e110f0f17"
		const tokenId55LxyD = BigInt("310")
		const fromxllc8bP = accounts[1]
		const operatorW3DO29H = accounts[0]
		const dataD9ggrO2 = "0x04040a03"
		const tokenIdUJpWE1L = BigInt("1671")
		const fromsQNQ0KW = accounts[4]
		const operatorr3pjrB5 = accounts[4]
		const nullhA2EOvF = await contract1MCxcd.onERC721Received.call(operatorxA07wcx, frompU41KAi, tokenIdxmLAwxm, data9S3Ust, {from: accounts[1]});
		const nullN8DQjh9 = await contract1MCxcd.onERC721Received.call(operators8FhFF5, fromciG20B, tokenIdUpQZHK9, datarFHX77D, {from: accounts[0]});
		const nullBKiWeyy = await contract1MCxcd.onERC721Received.call(operatorW3DO29H, fromxllc8bP, tokenId55LxyD, datafM8URDE, {from: accounts[3]});
		const nullkjqTnVr = await contract1MCxcd.onERC721Received.call(operatorr3pjrB5, fromsQNQ0KW, tokenIdUJpWE1L, dataD9ggrO2, {from: accounts[1]});
	});
})