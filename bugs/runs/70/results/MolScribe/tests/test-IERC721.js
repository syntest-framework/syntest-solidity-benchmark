const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractyHVe2cH = await IERC721.new({from: accounts[3]});
		const dataYc2ouP = "0x1b181e191a0c0219160d12"
		const tokenId9c8ruQ = BigInt("1822")
		const tot0XJ1JY = accounts[5]
		const fromR2lU4aW = accounts[5]
		const tokenIdWyvP0FE = BigInt("520")
		const tokenIdeQLgRo9 = BigInt("402")
		const tokenIdOCGLebH = BigInt("1185")
		const tokenIdfwT2MtV = BigInt("630")
		const toJUvjQpd = accounts[2]
		const fromKiHYGkL = accounts[0]
		const tokenIdaXZ8Ozr = BigInt("1232")
		const todfKcqwg = accounts[2]
		const fromWsjcU6G = accounts[3]
		await contractyHVe2cH.safeTransferFrom.call(fromR2lU4aW, tot0XJ1JY, tokenId9c8ruQ, dataYc2ouP, {from: accounts[5]});
		const ownerp2EwO1y = await contractyHVe2cH.ownerOf.call(tokenIdWyvP0FE, {from: accounts[4]});
		const ownerWCGvmcW = await contractyHVe2cH.ownerOf.call(tokenIdeQLgRo9, {from: accounts[0]});
		const ownerkK7JQlc = await contractyHVe2cH.ownerOf.call(tokenIdOCGLebH, {from: accounts[5]});
		await contractyHVe2cH.safeTransferFrom.call(fromKiHYGkL, toJUvjQpd, tokenIdfwT2MtV, {from: accounts[2]});
		await contractyHVe2cH.transferFrom.call(fromWsjcU6G, todfKcqwg, tokenIdaXZ8Ozr, {from: accounts[1]});
	});
})