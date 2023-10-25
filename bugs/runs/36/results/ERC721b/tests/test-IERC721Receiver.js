const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractnTSdH3Z = await IERC721Receiver.new({from: accounts[1]});
		const datajkBZMJ = "0x010f050f10091a0a16130901061e180c080a07080307161d0b1e1b0100"
		const tokenIdCmjAjV = BigInt("247")
		const fromJHhegOJ = accounts[3]
		const operatorDJcXoHu = accounts[2]
		const dataprQP6Te = "0x0a12060719"
		const tokenIdLvDT99H = BigInt("986")
		const fromEEORkav = accounts[1]
		const operator8vwZ2G = accounts[0]
		const datalv1LajE = "0x031c0c1f04170614141507061a191317061e1117"
		const tokenIdcBAd12k = BigInt("785")
		const fromqLFKUg = accounts[3]
		const operatorED0wWlx = accounts[3]
		const dataV8v27E = "0x1b0b02181f08171b160c06"
		const tokenIdni1LkQG = BigInt("1715")
		const fromyycJdCU = accounts[3]
		const operatordZ5uom = accounts[3]
		const nullsCYwEja = await contractnTSdH3Z.onERC721Received.call(operatorDJcXoHu, fromJHhegOJ, tokenIdCmjAjV, datajkBZMJ, {from: "0x0000000000000000000000000000000000000001"});
		const nullbYqdgRV = await contractnTSdH3Z.onERC721Received.call(operator8vwZ2G, fromEEORkav, tokenIdLvDT99H, dataprQP6Te, {from: accounts[2]});
		const nulltr37A8b = await contractnTSdH3Z.onERC721Received.call(operatorED0wWlx, fromqLFKUg, tokenIdcBAd12k, datalv1LajE, {from: accounts[5]});
		const nullOa7FUGc = await contractnTSdH3Z.onERC721Received.call(operatordZ5uom, fromyycJdCU, tokenIdni1LkQG, dataV8v27E, {from: accounts[3]});
	});
})