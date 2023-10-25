const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractzMyiDGx = await IERC721Receiver.new({from: accounts[3]});
		const datauZg3t1e = "0x1d0a1205170c101b19110d12"
		const tokenIdOndN26s = BigInt("1819")
		const fromXkX5xFh = accounts[0]
		const operatorwVJALTe = accounts[3]
		const datarLuessU = "0x060007031f181a0d110c20131a0f1a08180b"
		const tokenIdjOgikGq = BigInt("1732")
		const fromemdqm7Z = accounts[3]
		const operatorZImNCXI = accounts[3]
		const datayPU74cR = "0x19121d19110308131e181b0c15170c1d080a0d121d1f13021d1f08080a17"
		const tokenIdoRF3BC = BigInt("872")
		const fromLLa853 = accounts[2]
		const operatorTPxTzFo = accounts[4]
		const dataZg9hPEQ = "0x151d030f1f080e010d1e0d1512"
		const tokenIdjsCPzn4 = BigInt("1527")
		const fromEzMUlW3 = accounts[3]
		const operatorsF7Xzh = accounts[1]
		const nullIat1Byz = await contractzMyiDGx.onERC721Received.call(operatorwVJALTe, fromXkX5xFh, tokenIdOndN26s, datauZg3t1e, {from: accounts[3]});
		const nullSdzjW4 = await contractzMyiDGx.onERC721Received.call(operatorZImNCXI, fromemdqm7Z, tokenIdjOgikGq, datarLuessU, {from: accounts[0]});
		const nullBSbHQMQ = await contractzMyiDGx.onERC721Received.call(operatorTPxTzFo, fromLLa853, tokenIdoRF3BC, datayPU74cR, {from: accounts[1]});
		const nullEeEj7HQ = await contractzMyiDGx.onERC721Received.call(operatorsF7Xzh, fromEzMUlW3, tokenIdjsCPzn4, dataZg9hPEQ, {from: accounts[1]});
	});
})