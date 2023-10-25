const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractttEuwDq = await IERC721Receiver.new({from: accounts[5]});
		const databXEhNRA = "0x060f0d04110a15"
		const tokenIdLTNMclb = BigInt("1216")
		const fromUuerffC = accounts[2]
		const operatorv9V3iz = "0x0000000000000000000000000000000000000001"
		const dataKrOoW2S = "0x0d010f1c09050a1505190e"
		const tokenIdq1pwNO = BigInt("1686")
		const fromna3h5N5 = accounts[4]
		const operatorex78JkD = accounts[1]
		const datak2oo7J = "0x1b021d161b0512030d19071719061a0c020e1519031a030e20020b191500"
		const tokenId5Nspjx = BigInt("109")
		const fromNjtuLUj = accounts[4]
		const operatorH02VBo8 = accounts[2]
		const datax2FSXhH = "0x1c0c11141d0b0607060b11172001081100070c08100f16"
		const tokenIdo6iInP4 = BigInt("1447")
		const fromZGT85DN = accounts[2]
		const operatorpQQ1j3n = accounts[3]
		const dataYr87mZP = "0x04080c13"
		const tokenIdKutts5O = BigInt("1988")
		const fromcibUP2e = accounts[4]
		const operatorEQk6tTt = accounts[2]
		const datas992tqe = "0x00090216150d1c0b12041f1d180e0c200a16010c000e010205"
		const tokenIdLaNe5hi = BigInt("216")
		const from0x87tz = accounts[3]
		const operatorOZCHLwt = accounts[2]
		const nulldJvzqYt = await contractttEuwDq.onERC721Received.call(operatorv9V3iz, fromUuerffC, tokenIdLTNMclb, databXEhNRA, {from: accounts[3]});
		const nullBfvrCve = await contractttEuwDq.onERC721Received.call(operatorex78JkD, fromna3h5N5, tokenIdq1pwNO, dataKrOoW2S, {from: accounts[3]});
		const nullteD53hu = await contractttEuwDq.onERC721Received.call(operatorH02VBo8, fromNjtuLUj, tokenId5Nspjx, datak2oo7J, {from: accounts[1]});
		const nullCUhCCxw = await contractttEuwDq.onERC721Received.call(operatorpQQ1j3n, fromZGT85DN, tokenIdo6iInP4, datax2FSXhH, {from: accounts[1]});
		const nullcOT31yw = await contractttEuwDq.onERC721Received.call(operatorEQk6tTt, fromcibUP2e, tokenIdKutts5O, dataYr87mZP, {from: accounts[5]});
		const nullE2Ti2TP = await contractttEuwDq.onERC721Received.call(operatorOZCHLwt, from0x87tz, tokenIdLaNe5hi, datas992tqe, {from: accounts[4]});
	});
})