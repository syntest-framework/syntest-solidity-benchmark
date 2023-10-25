const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractHTU8tH = await IERC721Receiver.new({from: accounts[3]});
		const datavjkq1z9 = "0x19080d190a07181b041f0e0e17080b0e0204040d131e16010816010e20091f"
		const tokenIdyla0FdC = BigInt("1717")
		const froma96cdcJ = accounts[4]
		const operatorz9d7dQO = accounts[4]
		const dataw1yT7QM = "0x031c0411091c0e200b12071d06150e16070e03131a1e0e131e19141b0b1e"
		const tokenIdLnUbnf7 = BigInt("701")
		const fromGPx6CUm = accounts[3]
		const operatoreXBOYq6 = accounts[1]
		const dataRTw4xbM = "0x0312091c"
		const tokenIdjKBy39u = BigInt("2028")
		const fromaMiP5Dw = accounts[3]
		const operatorjT9c6e = accounts[0]
		const datafHGTiQz = "0x051c10081a191a08151f0e01030f1f1a1f"
		const tokenIdxabB8Bk = BigInt("430")
		const fromFcixdGr = accounts[2]
		const operatordD7M7Rn = accounts[1]
		const dataO8iaP0w = "0x0d1d200d05061c2018151015070e07030c16081006"
		const tokenIdXPLAdbI = BigInt("57")
		const fromsO7rHaj = accounts[1]
		const operatorznli9cs = accounts[2]
		const nulltmDgdoq = await contractHTU8tH.onERC721Received.call(operatorz9d7dQO, froma96cdcJ, tokenIdyla0FdC, datavjkq1z9, {from: accounts[2]});
		const nullFFUKNe1 = await contractHTU8tH.onERC721Received.call(operatoreXBOYq6, fromGPx6CUm, tokenIdLnUbnf7, dataw1yT7QM, {from: accounts[4]});
		const nullvg97km7 = await contractHTU8tH.onERC721Received.call(operatorjT9c6e, fromaMiP5Dw, tokenIdjKBy39u, dataRTw4xbM, {from: accounts[2]});
		const nullhsG9ERr = await contractHTU8tH.onERC721Received.call(operatordD7M7Rn, fromFcixdGr, tokenIdxabB8Bk, datafHGTiQz, {from: "0x0000000000000000000000000000000000000001"});
		const nullhA6mxs4 = await contractHTU8tH.onERC721Received.call(operatorznli9cs, fromsO7rHaj, tokenIdXPLAdbI, dataO8iaP0w, {from: "0x0000000000000000000000000000000000000001"});
	});
})