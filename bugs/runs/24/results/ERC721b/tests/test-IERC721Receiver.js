const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractidc6iZm = await IERC721Receiver.new({from: "0x0000000000000000000000000000000000000001"});
		const datarV1XfL3 = "0x1319080d11021112"
		const tokenIdc57sFse = BigInt("969")
		const fromGJDJq0v = accounts[3]
		const operatorKAVY8ZO = accounts[3]
		const dataoBjgFJd = "0x1012010819070f0d071806101102090f1110050f0f1103"
		const tokenIdEkL42RQ = BigInt("571")
		const fromhbBgq8G = accounts[1]
		const operatortB5Kd0q = accounts[1]
		const dataPCB9rH7 = "0x10100912141f0b1e001e0a0713"
		const tokenIdSadNJvS = BigInt("1696")
		const frompBtukFg = accounts[2]
		const operatorNGUgs2Q = accounts[5]
		const datajBfnR26 = "0x1c000a161e"
		const tokenIdsltWXQy = BigInt("404")
		const fromHrNhWAJ = accounts[1]
		const operatorDQq8auN = accounts[3]
		const dataj56reC = "0x021a170d171b181c00190d08000614151f181008061f15010d110f"
		const tokenIdAkoIAyr = BigInt("1538")
		const fromLtwT9HY = accounts[1]
		const operatoruww3QO = accounts[3]
		const nullnkKbez1 = await contractidc6iZm.onERC721Received.call(operatorKAVY8ZO, fromGJDJq0v, tokenIdc57sFse, datarV1XfL3, {from: accounts[2]});
		const nullRGltzf4 = await contractidc6iZm.onERC721Received.call(operatortB5Kd0q, fromhbBgq8G, tokenIdEkL42RQ, dataoBjgFJd, {from: accounts[2]});
		const nullsOtKN4G = await contractidc6iZm.onERC721Received.call(operatorNGUgs2Q, frompBtukFg, tokenIdSadNJvS, dataPCB9rH7, {from: accounts[5]});
		const nulleezDOPd = await contractidc6iZm.onERC721Received.call(operatorDQq8auN, fromHrNhWAJ, tokenIdsltWXQy, datajBfnR26, {from: accounts[1]});
		const nullDfebvg = await contractidc6iZm.onERC721Received.call(operatoruww3QO, fromLtwT9HY, tokenIdAkoIAyr, dataj56reC, {from: "0x0000000000000000000000000000000000000001"});
	});
})